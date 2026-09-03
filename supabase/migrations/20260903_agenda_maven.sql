-- Agenda Maven: autenticacion, aislamiento por profesor, agenda, disponibilidad y finanzas.
-- Ejecutar una sola vez en Supabase SQL Editor o mediante `supabase db push`.

create extension if not exists "uuid-ossp";
create extension if not exists btree_gist;

do $$
begin
  create type public.maven_staff_role as enum ('admin', 'teacher');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role public.maven_staff_role not null default 'teacher',
  timezone text not null default 'America/Bogota',
  phone text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_maven_staff()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  requested_role public.maven_staff_role;
begin
  requested_role := case
    when new.raw_app_meta_data ->> 'role' = 'admin' then 'admin'::public.maven_staff_role
    else 'teacher'::public.maven_staff_role
  end;

  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''), split_part(new.email, '@', 1)),
    requested_role
  )
  on conflict (id) do update
  set full_name = excluded.full_name,
      role = excluded.role,
      updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_create_maven_profile on auth.users;
create trigger on_auth_user_created_create_maven_profile
  after insert or update of raw_app_meta_data, raw_user_meta_data on auth.users
  for each row execute function public.handle_new_maven_staff();

create or replace function public.is_maven_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin' and active
  );
$$;

create or replace function public.can_manage_maven_teacher(target_teacher_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select auth.uid() = target_teacher_id or public.is_maven_admin();
$$;

alter table public.profiles enable row level security;
drop policy if exists "staff can read permitted profiles" on public.profiles;
create policy "staff can read permitted profiles"
  on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_maven_admin());

drop policy if exists "staff can update own profile" on public.profiles;
create policy "staff can update own profile"
  on public.profiles for update to authenticated
  using (id = auth.uid() or public.is_maven_admin())
  with check (id = auth.uid() or public.is_maven_admin());

-- Relaciona alumnos existentes con su profesor sin borrar ni reasignar datos previos.
alter table public.students
  add column if not exists teacher_id uuid references public.profiles(id) on delete set null;
create index if not exists students_teacher_id_idx on public.students(teacher_id);

-- Conserva los enlaces anonimos actuales de estudiantes, pero aisla la gestion del personal autenticado.
alter table public.students enable row level security;
drop policy if exists "legacy student links can read profiles" on public.students;
create policy "legacy student links can read profiles"
  on public.students for select to anon using (true);
drop policy if exists "legacy student links can save progress" on public.students;
create policy "legacy student links can save progress"
  on public.students for update to anon using (true) with check (true);
drop policy if exists "staff read assigned students" on public.students;
create policy "staff read assigned students"
  on public.students for select to authenticated
  using (teacher_id = auth.uid() or public.is_maven_admin());
drop policy if exists "staff create assigned students" on public.students;
create policy "staff create assigned students"
  on public.students for insert to authenticated
  with check (teacher_id = auth.uid() or public.is_maven_admin());
drop policy if exists "staff update assigned students" on public.students;
create policy "staff update assigned students"
  on public.students for update to authenticated
  using (teacher_id = auth.uid() or public.is_maven_admin())
  with check (teacher_id = auth.uid() or public.is_maven_admin());
drop policy if exists "staff delete assigned students" on public.students;
create policy "staff delete assigned students"
  on public.students for delete to authenticated
  using (teacher_id = auth.uid() or public.is_maven_admin());

create table if not exists public.teacher_availability (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  weekday smallint not null check (weekday between 1 and 7),
  start_time time not null,
  end_time time not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint teacher_availability_valid_time check (end_time > start_time),
  constraint teacher_availability_unique unique (teacher_id, weekday, start_time, end_time)
);

alter table public.teacher_availability enable row level security;
drop policy if exists "staff read permitted availability" on public.teacher_availability;
create policy "staff read permitted availability"
  on public.teacher_availability for select to authenticated
  using (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff insert permitted availability" on public.teacher_availability;
create policy "staff insert permitted availability"
  on public.teacher_availability for insert to authenticated
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff update permitted availability" on public.teacher_availability;
create policy "staff update permitted availability"
  on public.teacher_availability for update to authenticated
  using (public.can_manage_maven_teacher(teacher_id))
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff delete permitted availability" on public.teacher_availability;
create policy "staff delete permitted availability"
  on public.teacher_availability for delete to authenticated
  using (public.can_manage_maven_teacher(teacher_id));

create table if not exists public.agenda_bookings (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid references public.students(id) on delete set null,
  title text not null default 'Clase de ingles',
  starts_at timestamp without time zone not null,
  ends_at timestamp without time zone not null,
  status text not null default 'scheduled'
    check (status in ('scheduled', 'completed', 'cancelled', 'no_show')),
  series_id uuid,
  notes text,
  created_by uuid references public.profiles(id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint agenda_booking_valid_time check (ends_at > starts_at)
);

-- Dos operaciones concurrentes tampoco pueden reservar al profesor o al alumno dos veces.
do $$
begin
  alter table public.agenda_bookings
    add constraint agenda_teacher_no_overlap
    exclude using gist (
      teacher_id with =,
      tsrange(starts_at, ends_at, '[)') with &&
    ) where (status in ('scheduled', 'completed'));
exception
  when duplicate_object then null;
end $$;

do $$
begin
  alter table public.agenda_bookings
    add constraint agenda_student_no_overlap
    exclude using gist (
      student_id with =,
      tsrange(starts_at, ends_at, '[)') with &&
    ) where (student_id is not null and status in ('scheduled', 'completed'));
exception
  when duplicate_object then null;
end $$;

create index if not exists agenda_bookings_teacher_starts_idx
  on public.agenda_bookings(teacher_id, starts_at);
create index if not exists agenda_bookings_student_starts_idx
  on public.agenda_bookings(student_id, starts_at);
create index if not exists agenda_bookings_series_idx
  on public.agenda_bookings(series_id);

alter table public.agenda_bookings enable row level security;
drop policy if exists "staff read permitted bookings" on public.agenda_bookings;
create policy "staff read permitted bookings"
  on public.agenda_bookings for select to authenticated
  using (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff insert permitted bookings" on public.agenda_bookings;
create policy "staff insert permitted bookings"
  on public.agenda_bookings for insert to authenticated
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff update permitted bookings" on public.agenda_bookings;
create policy "staff update permitted bookings"
  on public.agenda_bookings for update to authenticated
  using (public.can_manage_maven_teacher(teacher_id))
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff delete permitted bookings" on public.agenda_bookings;
create policy "staff delete permitted bookings"
  on public.agenda_bookings for delete to authenticated
  using (public.can_manage_maven_teacher(teacher_id));

create table if not exists public.student_billing_plans (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  billing_cycle text not null check (billing_cycle in ('monthly', 'semimonthly', 'per_class')),
  amount numeric(12, 2) not null check (amount >= 0),
  currency text not null default 'COP',
  sessions_per_week numeric(4, 1) not null default 2 check (sessions_per_week > 0),
  duration_minutes integer not null default 60 check (duration_minutes between 15 and 480),
  starts_on date not null default current_date,
  ends_on date,
  due_day smallint check (due_day between 1 and 28),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint billing_plan_dates check (ends_on is null or ends_on >= starts_on),
  constraint billing_plan_student_teacher_unique unique (teacher_id, student_id)
);

alter table public.student_billing_plans enable row level security;
drop policy if exists "staff read permitted plans" on public.student_billing_plans;
create policy "staff read permitted plans"
  on public.student_billing_plans for select to authenticated
  using (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff insert permitted plans" on public.student_billing_plans;
create policy "staff insert permitted plans"
  on public.student_billing_plans for insert to authenticated
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff update permitted plans" on public.student_billing_plans;
create policy "staff update permitted plans"
  on public.student_billing_plans for update to authenticated
  using (public.can_manage_maven_teacher(teacher_id))
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff delete permitted plans" on public.student_billing_plans;
create policy "staff delete permitted plans"
  on public.student_billing_plans for delete to authenticated
  using (public.can_manage_maven_teacher(teacher_id));

create table if not exists public.teacher_payments (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  billing_plan_id uuid references public.student_billing_plans(id) on delete set null,
  amount numeric(12, 2) not null check (amount > 0),
  currency text not null default 'COP',
  paid_on date not null default current_date,
  period_start date,
  period_end date,
  status text not null default 'paid' check (status in ('pending', 'paid', 'partial', 'overdue')),
  notes text,
  created_at timestamptz not null default now(),
  constraint teacher_payment_period check (
    period_end is null or period_start is null or period_end >= period_start
  )
);

create index if not exists teacher_payments_teacher_paid_idx
  on public.teacher_payments(teacher_id, paid_on);

alter table public.teacher_payments enable row level security;
drop policy if exists "staff read permitted payments" on public.teacher_payments;
create policy "staff read permitted payments"
  on public.teacher_payments for select to authenticated
  using (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff insert permitted payments" on public.teacher_payments;
create policy "staff insert permitted payments"
  on public.teacher_payments for insert to authenticated
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff update permitted payments" on public.teacher_payments;
create policy "staff update permitted payments"
  on public.teacher_payments for update to authenticated
  using (public.can_manage_maven_teacher(teacher_id))
  with check (public.can_manage_maven_teacher(teacher_id));
drop policy if exists "staff delete permitted payments" on public.teacher_payments;
create policy "staff delete permitted payments"
  on public.teacher_payments for delete to authenticated
  using (public.can_manage_maven_teacher(teacher_id));

-- Inserta toda una recurrencia de manera atomica. Si una fecha falla, no queda una serie incompleta.
create or replace function public.agenda_create_recurring_bookings(
  p_teacher_id uuid,
  p_student_id uuid,
  p_title text,
  p_notes text,
  p_occurrences jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  occurrence jsonb;
  occurrence_start timestamp without time zone;
  occurrence_end timestamp without time zone;
  new_series_id uuid := gen_random_uuid();
  inserted_count integer := 0;
  student_teacher uuid;
begin
  if auth.uid() is null then
    raise exception using errcode = '42501', message = 'Debes iniciar sesion.';
  end if;
  if not public.can_manage_maven_teacher(p_teacher_id) then
    raise exception using errcode = '42501', message = 'No puedes administrar esta agenda.';
  end if;
  if jsonb_typeof(p_occurrences) <> 'array' or jsonb_array_length(p_occurrences) = 0 then
    raise exception using errcode = '22023', message = 'Debes enviar al menos una fecha de clase.';
  end if;
  if jsonb_array_length(p_occurrences) > 1000 then
    raise exception using errcode = '22023', message = 'La recurrencia supera el limite de 1000 clases.';
  end if;

  select teacher_id into student_teacher from public.students where id = p_student_id;
  if not found then
    raise exception using errcode = 'P0001', message = 'El estudiante no existe.';
  end if;
  if student_teacher is not null and student_teacher <> p_teacher_id and not public.is_maven_admin() then
    raise exception using errcode = '42501', message = 'El estudiante pertenece a otro profesor.';
  end if;
  if student_teacher is null then
    update public.students set teacher_id = p_teacher_id where id = p_student_id;
  end if;

  -- Evita carreras entre dos solicitudes para el mismo profesor.
  perform pg_advisory_xact_lock(hashtext(p_teacher_id::text));

  for occurrence in select value from jsonb_array_elements(p_occurrences)
  loop
    occurrence_start := (occurrence ->> 'starts_at')::timestamp;
    occurrence_end := (occurrence ->> 'ends_at')::timestamp;
    if occurrence_end <= occurrence_start then
      raise exception using errcode = '22023', message = 'La hora final debe ser posterior a la inicial.';
    end if;
    if occurrence_start::date <> occurrence_end::date then
      raise exception using errcode = '22023', message = 'Una clase debe comenzar y terminar el mismo dia.';
    end if;

    if not exists (
      select 1 from public.teacher_availability a
      where a.teacher_id = p_teacher_id
        and a.active
        and a.weekday = extract(isodow from occurrence_start)::smallint
        and a.start_time <= occurrence_start::time
        and a.end_time >= occurrence_end::time
    ) then
      raise exception using errcode = 'P0001',
        message = 'Una clase queda fuera de la disponibilidad del profesor: ' || to_char(occurrence_start, 'YYYY-MM-DD HH24:MI');
    end if;

    if exists (
      select 1 from public.agenda_bookings b
      where b.teacher_id = p_teacher_id
        and b.status in ('scheduled', 'completed')
        and tsrange(b.starts_at, b.ends_at, '[)') && tsrange(occurrence_start, occurrence_end, '[)')
    ) then
      raise exception using errcode = '23P01',
        message = 'El profesor ya tiene una clase en ' || to_char(occurrence_start, 'YYYY-MM-DD HH24:MI');
    end if;

    if exists (
      select 1 from public.agenda_bookings b
      where b.student_id = p_student_id
        and b.status in ('scheduled', 'completed')
        and tsrange(b.starts_at, b.ends_at, '[)') && tsrange(occurrence_start, occurrence_end, '[)')
    ) then
      raise exception using errcode = '23P01',
        message = 'El estudiante ya tiene una clase en ' || to_char(occurrence_start, 'YYYY-MM-DD HH24:MI');
    end if;

    insert into public.agenda_bookings (
      teacher_id, student_id, title, starts_at, ends_at, series_id, notes, created_by
    ) values (
      p_teacher_id, p_student_id, coalesce(nullif(trim(p_title), ''), 'Clase de ingles'),
      occurrence_start, occurrence_end, new_series_id, nullif(trim(p_notes), ''), auth.uid()
    );
    inserted_count := inserted_count + 1;
  end loop;

  return jsonb_build_object('series_id', new_series_id, 'inserted', inserted_count);
exception
  when exclusion_violation then
    raise exception using errcode = '23P01', message = 'Cruce detectado: el profesor o el estudiante ya tiene una clase en ese horario.';
end;
$$;

revoke all on function public.agenda_create_recurring_bookings(uuid, uuid, text, text, jsonb) from public;
grant execute on function public.agenda_create_recurring_bookings(uuid, uuid, text, text, jsonb) to authenticated;

grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.students to authenticated;
grant select, update on public.students to anon;
grant select, insert, update, delete on public.teacher_availability to authenticated;
grant select, insert, update, delete on public.agenda_bookings to authenticated;
grant select, insert, update, delete on public.student_billing_plans to authenticated;
grant select, insert, update, delete on public.teacher_payments to authenticated;

comment on table public.agenda_bookings is 'Clases de Agenda Maven; horarios locales de la zona configurada en el perfil.';
comment on column public.student_billing_plans.amount is 'Valor acordado por ciclo; en per_class corresponde al valor de una clase.';
