-- Permite programar series de largo plazo sin eliminar el limite de seguridad.
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
