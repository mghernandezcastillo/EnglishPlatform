import {
  AlertTriangle,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  DollarSign,
  Download,
  Plus,
  RefreshCw,
  Share2,
  Trash2,
  UserPlus,
  Users,
  X
} from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useBrand } from '../../hooks/useBrand';
import type { StaffUser } from '../../lib/staffAuth';
import { agendaService, countRecurringBookingOccurrences, MAX_RECURRING_BOOKINGS } from './agendaService';
import type {
  AgendaBooking,
  AgendaStudent,
  AgendaTeacher,
  BillingCycle,
  BillingPlan,
  TeacherAvailability,
  TeacherPayment
} from './types';

interface AgendaMavenProps {
  staffUser: StaffUser;
}

type AgendaTab = 'week' | 'availability' | 'finances' | 'simulator' | 'share' | 'team';

const WEEKDAYS = [
  { iso: 1, short: 'Lun', label: 'Lunes' },
  { iso: 2, short: 'Mar', label: 'Martes' },
  { iso: 3, short: 'Mié', label: 'Miércoles' },
  { iso: 4, short: 'Jue', label: 'Jueves' },
  { iso: 5, short: 'Vie', label: 'Viernes' },
  { iso: 6, short: 'Sáb', label: 'Sábado' },
  { iso: 7, short: 'Dom', label: 'Domingo' }
];

const money = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const prettyDate = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short' });

function dateOnly(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function parseLocalDate(value: string) {
  return new Date(`${value}T12:00:00`);
}

function startOfWeek(value: Date) {
  const date = new Date(value);
  date.setHours(12, 0, 0, 0);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  return date;
}

function addDays(value: Date, amount: number) {
  const date = new Date(value);
  date.setDate(date.getDate() + amount);
  return date;
}

function monthBounds(value = new Date()) {
  const first = new Date(value.getFullYear(), value.getMonth(), 1, 12);
  const last = new Date(value.getFullYear(), value.getMonth() + 1, 0, 12);
  return { from: dateOnly(first), to: dateOnly(last) };
}

function minutes(value: string) {
  const [hour, minute] = value.slice(0, 5).split(':').map(Number);
  return hour * 60 + minute;
}

function timeFromMinutes(value: number) {
  return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
}

function timeLabel(value: string) {
  const [hour, minute] = value.slice(11, 16).split(':').map(Number);
  const suffix = hour >= 12 ? 'p. m.' : 'a. m.';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, '0')} ${suffix}`;
}

function planMonthlyValue(plan: BillingPlan) {
  if (plan.billing_cycle === 'monthly') return Number(plan.amount);
  if (plan.billing_cycle === 'semimonthly') return Number(plan.amount) * 2;
  return Number(plan.amount) * Number(plan.sessions_per_week) * 4.33;
}

function cycleLabel(cycle: BillingCycle) {
  return cycle === 'monthly' ? 'Mensual' : cycle === 'semimonthly' ? 'Quincenal' : 'Por clase';
}

export default function AgendaMaven({ staffUser }: AgendaMavenProps) {
  const { brand } = useBrand();
  const [activeTab, setActiveTab] = useState<AgendaTab>('week');
  const [teachers, setTeachers] = useState<AgendaTeacher[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState(staffUser.id);
  const [students, setStudents] = useState<AgendaStudent[]>([]);
  const [availability, setAvailability] = useState<TeacherAvailability[]>([]);
  const [bookings, setBookings] = useState<AgendaBooking[]>([]);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [payments, setPayments] = useState<TeacherPayment[]>([]);
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const weekDays = useMemo(() => WEEKDAYS.map((weekday, index) => ({ ...weekday, date: addDays(weekStart, index) })), [weekStart]);
  const weekFrom = dateOnly(weekStart);
  const weekTo = dateOnly(addDays(weekStart, 7));
  const selectedTeacher = teachers.find(teacher => teacher.id === selectedTeacherId);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 3200);
  };

  const loadAgenda = async (silent = false) => {
    if (!silent) setLoading(true);
    setError('');
    try {
      const loadedTeachers = await agendaService.listTeachers();
      const availableTeachers = loadedTeachers.length
        ? loadedTeachers
        : [{ id: staffUser.id, full_name: staffUser.fullName, role: staffUser.role, timezone: 'America/Bogota', active: true }];
      setTeachers(availableTeachers);
      const allowedTeacherId = staffUser.role === 'admin'
        ? (availableTeachers.some(teacher => teacher.id === selectedTeacherId) ? selectedTeacherId : availableTeachers[0].id)
        : staffUser.id;
      if (allowedTeacherId !== selectedTeacherId) setSelectedTeacherId(allowedTeacherId);
      const month = monthBounds();
      const [loadedStudents, loadedAvailability, loadedBookings, loadedPlans, loadedPayments] = await Promise.all([
        agendaService.listStudents(allowedTeacherId, staffUser.role === 'admin'),
        agendaService.listAvailability(allowedTeacherId),
        agendaService.listBookings(allowedTeacherId, weekFrom, weekTo),
        agendaService.listBillingPlans(allowedTeacherId),
        agendaService.listPayments(allowedTeacherId, month.from, month.to)
      ]);
      setStudents(loadedStudents);
      setAvailability(loadedAvailability);
      setBookings(loadedBookings);
      setPlans(loadedPlans);
      setPayments(loadedPayments);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'No fue posible cargar Agenda Maven.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAgenda();
  }, [selectedTeacherId, weekFrom]);

  const tabs: Array<{ id: AgendaTab; label: string; icon: typeof CalendarDays; adminOnly?: boolean }> = [
    { id: 'week', label: 'Agenda', icon: CalendarDays },
    { id: 'availability', label: 'Disponibilidad', icon: Clock3 },
    { id: 'finances', label: 'Ganancias', icon: DollarSign },
    { id: 'simulator', label: 'Simulador', icon: Calculator },
    { id: 'share', label: 'Compartir', icon: Share2 },
    { id: 'team', label: 'Profesores', icon: Users, adminOnly: true }
  ];

  if (error && error.includes('todavía no está instalada')) {
    return <SetupRequired error={error} onRetry={() => loadAgenda()} />;
  }

  return (
    <section className="min-h-[680px] overflow-hidden rounded-[2rem] border border-indigo-100 bg-slate-50 shadow-sm">
      <header className="bg-gradient-to-br from-indigo-700 via-violet-700 to-slate-950 p-5 text-white sm:p-7">
        <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                <CalendarDays className="h-7 w-7 text-cyan-200" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Maven English</p>
                <h2 className="text-2xl font-black sm:text-3xl">Agenda Maven</h2>
              </div>
            </div>
            <p className="mt-3 max-w-xl text-sm font-medium text-indigo-100">Horarios sin cruces, disponibilidad e ingresos en una sola vista.</p>
          </div>
          {staffUser.role === 'admin' && (
            <label className="min-w-[260px] text-xs font-black uppercase tracking-wider text-indigo-200">
              Agenda del profesor
              <select value={selectedTeacherId} onChange={event => setSelectedTeacherId(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-white px-4 text-base font-bold text-slate-900 outline-none">
                {teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.full_name}{teacher.role === 'admin' ? ' · Admin' : ''}</option>)}
              </select>
            </label>
          )}
        </div>
        <nav className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {tabs.filter(tab => !tab.adminOnly || staffUser.role === 'admin').map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-4 text-sm font-black transition ${activeTab === tab.id ? 'bg-white text-indigo-700 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <Icon className="h-4 w-4" /> {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="p-4 sm:p-6">
        {error && <div className="mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 font-bold text-rose-800"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" /> {error}</div>}
        {loading ? (
          <div className="flex min-h-[420px] items-center justify-center"><RefreshCw className="h-9 w-9 animate-spin text-indigo-600" /></div>
        ) : (
          <>
            {activeTab === 'week' && (
              <WeekAgenda
                weekDays={weekDays}
                bookings={bookings}
                teacherName={selectedTeacher?.full_name || staffUser.fullName}
                onPrevious={() => setWeekStart(current => addDays(current, -7))}
                onNext={() => setWeekStart(current => addDays(current, 7))}
                onToday={() => setWeekStart(startOfWeek(new Date()))}
                onCreate={() => setShowBookingForm(true)}
                onCancel={async (booking, series) => {
                  if (!window.confirm(series ? '¿Cancelar todas las clases futuras de esta serie?' : '¿Cancelar esta clase?')) return;
                  try {
                    await agendaService.cancelBooking(booking, series);
                    notify(series ? 'Serie cancelada.' : 'Clase cancelada.');
                    await loadAgenda(true);
                  } catch (cancelError) {
                    setError(cancelError instanceof Error ? cancelError.message : 'No se pudo cancelar.');
                  }
                }}
                onComplete={async booking => {
                  try {
                    await agendaService.setBookingStatus(booking.id, booking.status === 'completed' ? 'scheduled' : 'completed');
                    notify(booking.status === 'completed' ? 'Clase marcada como programada.' : 'Clase completada.');
                    await loadAgenda(true);
                  } catch (statusError) {
                    setError(statusError instanceof Error ? statusError.message : 'No se pudo actualizar.');
                  }
                }}
              />
            )}
            {activeTab === 'availability' && (
              <AvailabilityPanel
                teacherId={selectedTeacherId}
                availability={availability}
                onChanged={async message => { notify(message); await loadAgenda(true); }}
                onError={setError}
              />
            )}
            {activeTab === 'finances' && (
              <FinancesPanel
                teacherId={selectedTeacherId}
                students={students}
                plans={plans}
                payments={payments}
                onChanged={async message => { notify(message); await loadAgenda(true); }}
                onError={setError}
              />
            )}
            {activeTab === 'simulator' && <SimulatorPanel />}
            {activeTab === 'share' && (
              <SharePanel
                brandName={brand.name}
                logoUrl={brand.logoUrl || '/logo-icon.svg'}
                teacherName={selectedTeacher?.full_name || staffUser.fullName}
                weekDays={weekDays}
                availability={availability}
                bookings={bookings}
                onNotice={notify}
              />
            )}
            {activeTab === 'team' && staffUser.role === 'admin' && (
              <TeamPanel teachers={teachers} onChanged={async message => { notify(message); await loadAgenda(true); }} onError={setError} />
            )}
          </>
        )}
      </div>

      {showBookingForm && (
        <BookingForm
          teacherId={selectedTeacherId}
          students={students}
          initialDate={weekFrom}
          onClose={() => setShowBookingForm(false)}
          onCreated={async count => {
            setShowBookingForm(false);
            notify(`${count} ${count === 1 ? 'clase programada' : 'clases programadas'} sin cruces.`);
            await loadAgenda(true);
          }}
          onError={setError}
        />
      )}
      {toast && <div className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white shadow-2xl">{toast}</div>}
    </section>
  );
}

function SetupRequired({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 sm:p-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700"><AlertTriangle className="h-8 w-8" /></div>
      <h2 className="mt-6 text-3xl font-black text-slate-950">Falta activar Agenda Maven</h2>
      <p className="mt-3 max-w-2xl text-lg text-slate-700">{error}</p>
      <p className="mt-4 rounded-xl bg-white p-4 font-mono text-sm font-bold text-indigo-700">supabase/migrations/20260903_agenda_maven.sql</p>
      <button onClick={onRetry} className="mt-6 flex min-h-12 items-center gap-2 rounded-xl bg-amber-600 px-5 font-black text-white hover:bg-amber-700"><RefreshCw className="h-5 w-5" /> Volver a comprobar</button>
    </div>
  );
}

interface WeekAgendaProps {
  weekDays: Array<{ iso: number; short: string; label: string; date: Date }>;
  bookings: AgendaBooking[];
  teacherName: string;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  onCreate: () => void;
  onCancel: (booking: AgendaBooking, series: boolean) => void;
  onComplete: (booking: AgendaBooking) => void;
}

function WeekAgenda({ weekDays, bookings, teacherName, onPrevious, onNext, onToday, onCreate, onCancel, onComplete }: WeekAgendaProps) {
  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-indigo-600">Agenda de {teacherName}</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950">{prettyDate.format(weekDays[0].date)} – {prettyDate.format(weekDays[6].date)}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={onPrevious} className="calendar-control" aria-label="Semana anterior"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={onToday} className="calendar-control px-4">Hoy</button>
          <button onClick={onNext} className="calendar-control" aria-label="Semana siguiente"><ChevronRight className="h-5 w-5" /></button>
          <button onClick={onCreate} className="ml-auto flex min-h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 font-black text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700"><Plus className="h-5 w-5" /> Programar clase</button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {weekDays.map(day => {
          const key = dateOnly(day.date);
          const dayBookings = bookings.filter(booking => booking.starts_at.startsWith(key));
          const isToday = key === dateOnly(new Date());
          return (
            <article key={key} className={`min-h-52 rounded-2xl border p-3 ${isToday ? 'border-indigo-400 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white'}`}>
              <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                <div><p className={`text-xs font-black uppercase tracking-wider ${isToday ? 'text-indigo-700' : 'text-slate-500'}`}>{day.short}</p><p className="text-xl font-black text-slate-950">{day.date.getDate()}</p></div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-600">{dayBookings.length}</span>
              </div>
              <div className="space-y-2">
                {dayBookings.map(booking => (
                  <div key={booking.id} className={`group rounded-xl border p-3 ${booking.status === 'completed' ? 'border-emerald-200 bg-emerald-50' : 'border-indigo-100 bg-gradient-to-br from-white to-indigo-50'}`}>
                    <p className="text-sm font-black text-indigo-800">{timeLabel(booking.starts_at)}</p>
                    <p className="mt-1 break-words text-sm font-black text-slate-900">{booking.students?.name || booking.title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{minutes(booking.ends_at.slice(11, 16)) - minutes(booking.starts_at.slice(11, 16))} min</p>
                    <div className="mt-3 flex gap-1">
                      <button onClick={() => onComplete(booking)} className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700" title={booking.status === 'completed' ? 'Volver a programada' : 'Marcar completada'}><CheckCircle2 className="h-4 w-4" /></button>
                      <button onClick={() => onCancel(booking, false)} className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-700" title="Cancelar esta clase"><X className="h-4 w-4" /></button>
                      {booking.series_id && <button onClick={() => onCancel(booking, true)} className="ml-auto rounded-lg bg-slate-100 px-2 text-[10px] font-black text-slate-600" title="Cancelar serie">Serie</button>}
                    </div>
                  </div>
                ))}
                {!dayBookings.length && <p className="py-7 text-center text-xs font-bold text-slate-400">Sin clases</p>}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function BookingForm({ teacherId, students, initialDate, onClose, onCreated, onError }: { teacherId: string; students: AgendaStudent[]; initialDate: string; onClose: () => void; onCreated: (count: number) => void; onError: (message: string) => void }) {
  const defaultEnd = dateOnly(addDays(parseLocalDate(initialDate), 84));
  const initialWeekday = parseLocalDate(initialDate).getDay() || 7;
  const [studentId, setStudentId] = useState(students[0]?.id || '');
  const [title, setTitle] = useState('Clase de inglés');
  const [notes, setNotes] = useState('');
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(defaultEnd);
  const [startTime, setStartTime] = useState('18:00');
  const [duration, setDuration] = useState(60);
  const [repeats, setRepeats] = useState(true);
  const [weekdays, setWeekdays] = useState<number[]>([initialWeekday]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');
  const occurrenceCount = useMemo(
    () => countRecurringBookingOccurrences({ startDate, endDate, weekdays, repeats }),
    [startDate, endDate, weekdays, repeats]
  );
  const exceedsRecurringLimit = occurrenceCount > MAX_RECURRING_BOOKINGS;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      const result = await agendaService.createRecurringBooking({ teacherId, studentId, title, notes, startDate, endDate, startTime, durationMinutes: duration, weekdays, repeats });
      await onCreated(result.inserted);
    } catch (saveError) {
      const message = saveError instanceof Error ? saveError.message : 'No fue posible programar la clase.';
      setFormError(message);
      onError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm">
      <form onSubmit={submit} className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-sm font-black uppercase tracking-wider text-indigo-600">Nueva reserva</p><h3 className="text-3xl font-black text-slate-950">Programar clase</h3></div>
          <button type="button" onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><X className="h-5 w-5" /></button>
        </div>
        {!students.length ? (
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 font-bold text-amber-800">No hay estudiantes asignados a este profesor. El administrador debe asignar o crear uno primero.</div>
        ) : (
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Estudiante" wide><select value={studentId} onChange={event => setStudentId(event.target.value)} className="agenda-input">{students.map(student => <option key={student.id} value={student.id}>{student.name}{!student.teacher_id ? ' · Sin asignar' : ''}</option>)}</select></Field>
            <Field label="Nombre de la clase"><input value={title} onChange={event => setTitle(event.target.value)} className="agenda-input" /></Field>
            <Field label="Empieza"><input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} className="agenda-input" /></Field>
            <Field label="Hora"><input type="time" value={startTime} onChange={event => setStartTime(event.target.value)} className="agenda-input" /></Field>
            <Field label="Duración"><select value={duration} onChange={event => setDuration(Number(event.target.value))} className="agenda-input"><option value={30}>30 minutos</option><option value={45}>45 minutos</option><option value={60}>1 hora</option><option value={90}>1 hora 30</option><option value={120}>2 horas</option></select></Field>
            <label className="flex min-h-12 items-center gap-3 self-end rounded-xl bg-indigo-50 px-4 font-black text-indigo-800"><input type="checkbox" checked={repeats} onChange={event => setRepeats(event.target.checked)} className="h-5 w-5 accent-indigo-600" /> Repetir cada semana</label>
            {repeats && (
              <>
                <Field label="Días de clase" wide>
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">{WEEKDAYS.map(day => <button key={day.iso} type="button" onClick={() => setWeekdays(current => current.includes(day.iso) ? current.filter(value => value !== day.iso) : [...current, day.iso])} className={`min-h-11 rounded-xl text-sm font-black ${weekdays.includes(day.iso) ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{day.short}</button>)}</div>
                </Field>
                <Field label="Repetir hasta"><input type="date" value={endDate} min={startDate} onChange={event => setEndDate(event.target.value)} className="agenda-input" /></Field>
                <div className={`sm:col-span-2 rounded-xl px-4 py-3 text-sm font-bold ${exceedsRecurringLimit ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-800'}`}>
                  {exceedsRecurringLimit
                    ? `El rango supera el máximo de ${MAX_RECURRING_BOOKINGS} clases. Acorta la fecha final o selecciona menos días.`
                    : `Se crearán ${occurrenceCount} ${occurrenceCount === 1 ? 'clase' : 'clases'} en esta serie.`}
                </div>
              </>
            )}
            <Field label="Notas" wide><textarea value={notes} onChange={event => setNotes(event.target.value)} className="agenda-input min-h-24 py-3" placeholder="Enlace de Meet, material o recordatorio…" /></Field>
          </div>
        )}
        {formError && <p className="mt-5 rounded-xl bg-rose-50 p-4 font-bold text-rose-700">{formError}</p>}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="min-h-12 rounded-xl bg-slate-100 px-6 font-black text-slate-700">Cancelar</button>
          <button disabled={saving || !studentId || (repeats && (!weekdays.length || exceedsRecurringLimit))} className="min-h-12 rounded-xl bg-indigo-600 px-7 font-black text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:bg-slate-300">{saving ? 'Validando horarios…' : 'Guardar sin cruces'}</button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`block text-sm font-black text-slate-700 ${wide ? 'sm:col-span-2' : ''}`}>{label}<div className="mt-2">{children}</div></label>;
}

function AvailabilityPanel({ teacherId, availability, onChanged, onError }: { teacherId: string; availability: TeacherAvailability[]; onChanged: (message: string) => void; onError: (message: string) => void }) {
  const [weekday, setWeekday] = useState(1);
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('12:00');
  const [saving, setSaving] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    try {
      await agendaService.addAvailability(teacherId, weekday, startTime, endTime);
      await onChanged('Disponibilidad guardada.');
    } catch (availabilityError) {
      onError(availabilityError instanceof Error ? availabilityError.message : 'No se pudo guardar.');
    } finally { setSaving(false); }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <form onSubmit={submit} className="h-fit rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-wider text-indigo-600">Nueva franja</p>
        <h3 className="mt-1 text-2xl font-black text-slate-950">¿Cuándo puedes enseñar?</h3>
        <p className="mt-2 text-sm text-slate-500">Solo se podrán reservar clases dentro de estas franjas.</p>
        <div className="mt-6 space-y-4">
          <Field label="Día"><select value={weekday} onChange={event => setWeekday(Number(event.target.value))} className="agenda-input">{WEEKDAYS.map(day => <option key={day.iso} value={day.iso}>{day.label}</option>)}</select></Field>
          <div className="grid grid-cols-2 gap-3"><Field label="Desde"><input type="time" value={startTime} onChange={event => setStartTime(event.target.value)} className="agenda-input" /></Field><Field label="Hasta"><input type="time" value={endTime} onChange={event => setEndTime(event.target.value)} className="agenda-input" /></Field></div>
        </div>
        <button disabled={saving} className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 font-black text-white hover:bg-indigo-700"><Plus className="h-5 w-5" /> {saving ? 'Guardando…' : 'Agregar franja'}</button>
      </form>
      <div>
        <h3 className="text-2xl font-black text-slate-950">Semana disponible</h3>
        <p className="mt-1 text-slate-500">Puedes añadir varias franjas en un mismo día para separar trabajo, almuerzo o descansos.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {WEEKDAYS.map(day => {
            const ranges = availability.filter(item => item.weekday === day.iso);
            return (
              <article key={day.iso} className="min-h-36 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between"><p className="font-black text-slate-950">{day.label}</p><span className={`h-2.5 w-2.5 rounded-full ${ranges.length ? 'bg-emerald-500' : 'bg-slate-300'}`} /></div>
                <div className="mt-3 space-y-2">{ranges.map(range => <div key={range.id} className="flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800"><span>{range.start_time.slice(0, 5)} – {range.end_time.slice(0, 5)}</span><button onClick={async () => { try { await agendaService.removeAvailability(range.id); await onChanged('Franja eliminada.'); } catch (removeError) { onError(removeError instanceof Error ? removeError.message : 'No se pudo eliminar.'); } }} className="text-rose-600" title="Eliminar"><Trash2 className="h-4 w-4" /></button></div>)}{!ranges.length && <p className="py-5 text-center text-sm font-bold text-slate-400">No disponible</p>}</div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FinancesPanel({ teacherId, students, plans, payments, onChanged, onError }: { teacherId: string; students: AgendaStudent[]; plans: BillingPlan[]; payments: TeacherPayment[]; onChanged: (message: string) => void; onError: (message: string) => void }) {
  const expected = plans.reduce((total, plan) => total + planMonthlyValue(plan), 0);
  const received = payments.filter(payment => payment.status === 'paid' || payment.status === 'partial').reduce((total, payment) => total + Number(payment.amount), 0);
  const [showPlan, setShowPlan] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        <FinancialStat label="Ingreso esperado este mes" value={money.format(expected)} tone="indigo" />
        <FinancialStat label="Pagos recibidos este mes" value={money.format(received)} tone="emerald" />
        <FinancialStat label="Saldo por recaudar" value={money.format(Math.max(0, expected - received))} tone="amber" />
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3"><div><h3 className="text-2xl font-black text-slate-950">Planes de estudiantes</h3><p className="text-sm text-slate-500">Mensual, quincenal o valor por clase.</p></div><div className="flex gap-2"><button onClick={() => setShowPayment(value => !value)} className="agenda-secondary-button"><DollarSign className="h-4 w-4" /> Registrar pago</button><button onClick={() => setShowPlan(value => !value)} className="agenda-primary-button"><Plus className="h-4 w-4" /> Configurar plan</button></div></div>
      {showPlan && <BillingPlanForm teacherId={teacherId} students={students} onChanged={async message => { setShowPlan(false); await onChanged(message); }} onError={onError} />}
      {showPayment && <PaymentForm teacherId={teacherId} plans={plans} onChanged={async message => { setShowPayment(false); await onChanged(message); }} onError={onError} />}
      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[720px] text-left"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr><th className="p-4">Estudiante</th><th className="p-4">Modalidad</th><th className="p-4">Valor acordado</th><th className="p-4">Clases/semana</th><th className="p-4 text-right">Proyección mensual</th></tr></thead><tbody>{plans.map(plan => <tr key={plan.id} className="border-t border-slate-100"><td className="p-4 font-black text-slate-900">{plan.students?.name || 'Estudiante'}</td><td className="p-4"><span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700">{cycleLabel(plan.billing_cycle)}</span></td><td className="p-4 font-bold text-slate-700">{money.format(Number(plan.amount))}</td><td className="p-4 font-bold text-slate-700">{plan.sessions_per_week}</td><td className="p-4 text-right font-black text-emerald-700">{money.format(planMonthlyValue(plan))}</td></tr>)}{!plans.length && <tr><td colSpan={5} className="p-10 text-center font-bold text-slate-400">Aún no hay planes de pago configurados.</td></tr>}</tbody></table>
      </div>
      {!!payments.length && <div className="mt-6"><h4 className="text-lg font-black text-slate-950">Pagos de este mes</h4><div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{payments.map(payment => <div key={payment.id} className="rounded-2xl border border-emerald-100 bg-white p-4"><div className="flex justify-between gap-3"><div><p className="font-black text-slate-950">{payment.students?.name || 'Estudiante'}</p><p className="text-xs font-bold text-slate-500">{payment.paid_on}</p></div><p className="font-black text-emerald-700">{money.format(Number(payment.amount))}</p></div></div>)}</div></div>}
    </div>
  );
}

function FinancialStat({ label, value, tone }: { label: string; value: string; tone: 'indigo' | 'emerald' | 'amber' }) {
  const styles = { indigo: 'from-indigo-600 to-violet-700', emerald: 'from-emerald-500 to-teal-700', amber: 'from-amber-500 to-orange-600' };
  return <div className={`rounded-3xl bg-gradient-to-br ${styles[tone]} p-5 text-white shadow-lg`}><p className="text-sm font-bold text-white/80">{label}</p><p className="mt-2 text-2xl font-black sm:text-3xl">{value}</p></div>;
}

function BillingPlanForm({ teacherId, students, onChanged, onError }: { teacherId: string; students: AgendaStudent[]; onChanged: (message: string) => void; onError: (message: string) => void }) {
  const [studentId, setStudentId] = useState(students[0]?.id || '');
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [amount, setAmount] = useState(300000);
  const [sessions, setSessions] = useState(2);
  const [duration, setDuration] = useState(60);
  const submit = async (event: FormEvent) => { event.preventDefault(); try { await agendaService.saveBillingPlan({ teacher_id: teacherId, student_id: studentId, billing_cycle: cycle, amount, currency: 'COP', sessions_per_week: sessions, duration_minutes: duration, starts_on: dateOnly(new Date()), active: true }); await onChanged('Plan de pago guardado.'); } catch (saveError) { onError(saveError instanceof Error ? saveError.message : 'No se pudo guardar el plan.'); } };
  return <form onSubmit={submit} className="mt-5 grid gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:grid-cols-2 lg:grid-cols-5"><Field label="Estudiante"><select value={studentId} onChange={event => setStudentId(event.target.value)} className="agenda-input">{students.map(student => <option key={student.id} value={student.id}>{student.name}</option>)}</select></Field><Field label="Modalidad"><select value={cycle} onChange={event => setCycle(event.target.value as BillingCycle)} className="agenda-input"><option value="monthly">Mensual</option><option value="semimonthly">Quincenal</option><option value="per_class">Por clase</option></select></Field><Field label={cycle === 'per_class' ? 'Valor por clase' : 'Valor por ciclo'}><input type="number" min={0} step={1000} value={amount} onChange={event => setAmount(Number(event.target.value))} className="agenda-input" /></Field><Field label="Clases por semana"><input type="number" min={0.5} step={0.5} value={sessions} onChange={event => setSessions(Number(event.target.value))} className="agenda-input" /></Field><div><Field label="Duración"><select value={duration} onChange={event => setDuration(Number(event.target.value))} className="agenda-input"><option value={30}>30 min</option><option value={45}>45 min</option><option value={60}>60 min</option><option value={90}>90 min</option></select></Field><button disabled={!studentId} className="mt-3 min-h-11 w-full rounded-xl bg-indigo-600 px-4 font-black text-white disabled:bg-slate-300">Guardar</button></div></form>;
}

function PaymentForm({ teacherId, plans, onChanged, onError }: { teacherId: string; plans: BillingPlan[]; onChanged: (message: string) => void; onError: (message: string) => void }) {
  const [planId, setPlanId] = useState(plans[0]?.id || '');
  const selected = plans.find(plan => plan.id === planId);
  const [amount, setAmount] = useState(Number(plans[0]?.amount || 0));
  useEffect(() => { if (selected) setAmount(Number(selected.amount)); }, [planId]);
  const submit = async (event: FormEvent) => { event.preventDefault(); if (!selected) return; try { await agendaService.addPayment({ teacher_id: teacherId, student_id: selected.student_id, billing_plan_id: selected.id, amount, currency: 'COP', paid_on: dateOnly(new Date()), status: 'paid' }); await onChanged('Pago registrado correctamente.'); } catch (paymentError) { onError(paymentError instanceof Error ? paymentError.message : 'No se pudo registrar el pago.'); } };
  return <form onSubmit={submit} className="mt-5 grid gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end"><Field label="Plan del estudiante"><select value={planId} onChange={event => setPlanId(event.target.value)} className="agenda-input">{plans.map(plan => <option key={plan.id} value={plan.id}>{plan.students?.name} · {cycleLabel(plan.billing_cycle)}</option>)}</select></Field><Field label="Valor recibido"><input type="number" min={1} step={1000} value={amount} onChange={event => setAmount(Number(event.target.value))} className="agenda-input" /></Field><button disabled={!selected} className="min-h-12 rounded-xl bg-emerald-600 px-6 font-black text-white disabled:bg-slate-300">Confirmar pago</button></form>;
}

function SimulatorPanel() {
  const [studentCount, setStudentCount] = useState(10);
  const [classesPerWeek, setClassesPerWeek] = useState(2);
  const [duration, setDuration] = useState(60);
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [amount, setAmount] = useState(300000);
  const [cancellations, setCancellations] = useState(5);
  const [availableHours, setAvailableHours] = useState(30);
  const monthlyGross = cycle === 'monthly' ? studentCount * amount : cycle === 'semimonthly' ? studentCount * amount * 2 : studentCount * classesPerWeek * 4.33 * amount;
  const monthlyConservative = monthlyGross * (1 - cancellations / 100);
  const weeklyHours = studentCount * classesPerWeek * duration / 60;
  const occupancy = availableHours > 0 ? Math.min(999, weeklyHours / availableHours * 100) : 0;
  return <div className="grid gap-6 lg:grid-cols-[380px_1fr]"><div className="rounded-3xl border border-indigo-100 bg-white p-6"><p className="text-sm font-black uppercase tracking-wider text-indigo-600">Escenario</p><h3 className="mt-1 text-2xl font-black text-slate-950">Simula tus ganancias</h3><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><Field label="Número de estudiantes"><input type="number" min={1} value={studentCount} onChange={event => setStudentCount(Number(event.target.value))} className="agenda-input" /></Field><Field label="Clases por estudiante/semana"><input type="number" min={0.5} step={0.5} value={classesPerWeek} onChange={event => setClassesPerWeek(Number(event.target.value))} className="agenda-input" /></Field><Field label="Duración"><select value={duration} onChange={event => setDuration(Number(event.target.value))} className="agenda-input"><option value={30}>30 minutos</option><option value={45}>45 minutos</option><option value={60}>1 hora</option><option value={90}>1 hora 30</option></select></Field><Field label="Modalidad"><select value={cycle} onChange={event => setCycle(event.target.value as BillingCycle)} className="agenda-input"><option value="monthly">Mensual</option><option value="semimonthly">Quincenal</option><option value="per_class">Por clase</option></select></Field><Field label="Valor acordado"><input type="number" min={0} step={1000} value={amount} onChange={event => setAmount(Number(event.target.value))} className="agenda-input" /></Field><Field label="Cancelaciones estimadas (%)"><input type="number" min={0} max={100} value={cancellations} onChange={event => setCancellations(Number(event.target.value))} className="agenda-input" /></Field><Field label="Horas disponibles por semana"><input type="number" min={1} value={availableHours} onChange={event => setAvailableHours(Number(event.target.value))} className="agenda-input" /></Field></div></div><div className="rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 p-6 text-white sm:p-8"><p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Resultado estimado</p><p className="mt-3 text-4xl font-black sm:text-5xl">{money.format(monthlyConservative)}</p><p className="mt-2 font-bold text-indigo-200">Ingreso mensual conservador</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><SimulationResult label="Ingreso bruto mensual" value={money.format(monthlyGross)} /><SimulationResult label="Ingreso anual conservador" value={money.format(monthlyConservative * 12)} /><SimulationResult label="Horas de clase/semana" value={`${weeklyHours.toFixed(1)} h`} /><SimulationResult label="Ocupación de agenda" value={`${occupancy.toFixed(0)}%`} /></div>{occupancy > 100 && <div className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-400/15 p-4 font-bold text-amber-100">Este escenario necesita {(weeklyHours - availableHours).toFixed(1)} horas adicionales por semana.</div>}<p className="mt-6 text-xs leading-relaxed text-indigo-200">El cálculo mensual usa 4,33 semanas. En planes quincenales se consideran dos cobros por mes.</p></div></div>;
}

function SimulationResult({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-white/10 p-4"><p className="text-sm font-bold text-indigo-200">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></div>; }

interface FreeSlot { day: string; date: string; start: string; end: string }

function freeSlotsForWeek(weekDays: Array<{ iso: number; label: string; date: Date }>, availability: TeacherAvailability[], bookings: AgendaBooking[], duration: number): FreeSlot[] {
  const slots: FreeSlot[] = [];
  weekDays.forEach(day => {
    const date = dateOnly(day.date);
    const dayBookings = bookings.filter(booking => booking.starts_at.startsWith(date));
    availability.filter(range => range.weekday === day.iso).forEach(range => {
      const rangeEnd = minutes(range.end_time);
      for (let start = minutes(range.start_time); start + duration <= rangeEnd; start += duration) {
        const end = start + duration;
        const overlaps = dayBookings.some(booking => minutes(booking.starts_at.slice(11, 16)) < end && minutes(booking.ends_at.slice(11, 16)) > start);
        if (!overlaps) slots.push({ day: day.label, date, start: timeFromMinutes(start), end: timeFromMinutes(end) });
      }
    });
  });
  return slots;
}

function escapeXml(value: string) { return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;' })[character] || character); }

function buildAvailabilitySvg(brandName: string, teacherName: string, weekDays: Array<{ date: Date }>, slots: FreeSlot[], logoDataUrl: string) {
  const grouped = WEEKDAYS.map(day => ({ day: day.label, slots: slots.filter(slot => slot.day === day.label).slice(0, 4) })).filter(group => group.slots.length);
  const rows = grouped.slice(0, 6).map((group, index) => {
    const y = 410 + index * 105;
    const times = group.slots.map(slot => slot.start).join('  •  ');
    return `<rect x="95" y="${y}" width="1010" height="82" rx="24" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.14"/><text x="130" y="${y + 34}" fill="#67e8f9" font-family="Arial" font-size="24" font-weight="700">${escapeXml(group.day)}</text><text x="130" y="${y + 65}" fill="#ffffff" font-family="Arial" font-size="30" font-weight="800">${escapeXml(times)}</text>`;
  }).join('');
  const empty = grouped.length ? '' : '<text x="600" y="570" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="34" font-weight="700">No hay horarios libres esta semana</text>';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#312e81"/><stop offset="0.55" stop-color="#6d28d9"/><stop offset="1" stop-color="#0f172a"/></linearGradient><radialGradient id="glow"><stop stop-color="#22d3ee" stop-opacity="0.35"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="1200" rx="54" fill="url(#bg)"/><circle cx="1040" cy="120" r="330" fill="url(#glow)"/><circle cx="120" cy="1100" r="300" fill="#d946ef" fill-opacity="0.13"/>${logoDataUrl ? `<image href="${logoDataUrl}" x="92" y="72" width="120" height="120" preserveAspectRatio="xMidYMid meet"/>` : ''}<text x="240" y="118" fill="#a5f3fc" font-family="Arial" font-size="24" font-weight="800" letter-spacing="4">${escapeXml(brandName.toUpperCase())}</text><text x="240" y="165" fill="#ffffff" font-family="Arial" font-size="36" font-weight="900">HORARIOS DISPONIBLES</text><text x="95" y="285" fill="#ffffff" font-family="Arial" font-size="52" font-weight="900">Clases de inglés</text><text x="95" y="335" fill="#c7d2fe" font-family="Arial" font-size="27" font-weight="700">Profe ${escapeXml(teacherName)}  •  ${escapeXml(prettyDate.format(weekDays[0].date))} – ${escapeXml(prettyDate.format(weekDays[6].date))}</text>${rows}${empty}<rect x="95" y="1060" width="1010" height="72" rx="36" fill="#ffffff"/><text x="600" y="1106" text-anchor="middle" fill="#4338ca" font-family="Arial" font-size="27" font-weight="900">RESERVA TU HORARIO • AMERICA/BOGOTA</text></svg>`;
}

async function fileToDataUrl(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) return '';
    const blob = await response.blob();
    return await new Promise<string>(resolve => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result || '')); reader.onerror = () => resolve(''); reader.readAsDataURL(blob); });
  } catch { return ''; }
}

function downloadBlob(blob: Blob, filename: string) { const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); }

async function svgToPng(svg: string) {
  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  try {
    const image = new Image();
    await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error('No se pudo preparar la imagen.')); image.src = url; });
    const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 1200;
    const context = canvas.getContext('2d'); if (!context) throw new Error('El navegador no permite generar la imagen.');
    context.drawImage(image, 0, 0);
    return await new Promise<Blob>((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('No se pudo generar el PNG.')), 'image/png', 0.94));
  } finally { URL.revokeObjectURL(url); }
}

function SharePanel({ brandName, logoUrl, teacherName, weekDays, availability, bookings, onNotice }: { brandName: string; logoUrl: string; teacherName: string; weekDays: Array<{ iso: number; short: string; label: string; date: Date }>; availability: TeacherAvailability[]; bookings: AgendaBooking[]; onNotice: (message: string) => void }) {
  const [duration, setDuration] = useState(60);
  const [logoData, setLogoData] = useState('');
  const [copying, setCopying] = useState(false);
  useEffect(() => { fileToDataUrl(logoUrl).then(setLogoData); }, [logoUrl]);
  const slots = useMemo(() => freeSlotsForWeek(weekDays, availability, bookings, duration), [weekDays, availability, bookings, duration]);
  const svg = useMemo(() => buildAvailabilitySvg(brandName, teacherName, weekDays, slots, logoData), [brandName, teacherName, weekDays, slots, logoData]);
  const preview = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  const copyImage = async () => { setCopying(true); try { const png = await svgToPng(svg); if (navigator.clipboard && typeof ClipboardItem !== 'undefined') { await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]); onNotice('Imagen copiada. Ya puedes pegarla en WhatsApp.'); } else { downloadBlob(png, 'horarios-maven-english.png'); onNotice('Tu navegador descargó el PNG porque no permite copiar imágenes.'); } } catch { const png = await svgToPng(svg); downloadBlob(png, 'horarios-maven-english.png'); onNotice('Se descargó el PNG listo para compartir.'); } finally { setCopying(false); } };
  return <div className="grid gap-6 lg:grid-cols-[330px_1fr]"><div className="h-fit rounded-3xl border border-indigo-100 bg-white p-6"><p className="text-sm font-black uppercase tracking-wider text-indigo-600">Tarjeta para nuevos estudiantes</p><h3 className="mt-1 text-2xl font-black text-slate-950">Comparte tus espacios libres</h3><p className="mt-2 text-sm text-slate-500">Nunca se incluyen nombres de estudiantes ni horarios ocupados.</p><div className="mt-6"><Field label="Duración buscada"><select value={duration} onChange={event => setDuration(Number(event.target.value))} className="agenda-input"><option value={30}>30 minutos</option><option value={45}>45 minutos</option><option value={60}>1 hora</option><option value={90}>1 hora 30</option></select></Field></div><div className="mt-5 rounded-2xl bg-slate-50 p-4"><p className="text-sm font-bold text-slate-500">Espacios encontrados</p><p className="mt-1 text-3xl font-black text-indigo-700">{slots.length}</p></div><button onClick={copyImage} disabled={copying} className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 font-black text-white hover:bg-indigo-700"><Copy className="h-5 w-5" /> {copying ? 'Preparando…' : 'Copiar imagen'}</button><button onClick={() => downloadBlob(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }), 'horarios-maven-english.svg')} className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-100 font-black text-slate-700 hover:bg-slate-200"><Download className="h-5 w-5" /> Descargar SVG</button></div><div className="rounded-3xl border border-slate-200 bg-slate-200 p-3"><img src={preview} alt="Vista previa de horarios disponibles" className="mx-auto w-full max-w-[650px] rounded-2xl shadow-2xl" /></div></div>;
}

function TeamPanel({ teachers, onChanged, onError }: { teachers: AgendaTeacher[]; onChanged: (message: string) => void; onError: (message: string) => void }) {
  const [fullName, setFullName] = useState(''); const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [saving, setSaving] = useState(false);
  const submit = async (event: FormEvent) => { event.preventDefault(); setSaving(true); try { await agendaService.createTeacher({ fullName, email, password }); setFullName(''); setEmail(''); setPassword(''); await onChanged('Profesor creado. Ya puede iniciar sesión.'); } catch (createError) { onError(createError instanceof Error ? createError.message : 'No se pudo crear el profesor.'); } finally { setSaving(false); } };
  return <div className="grid gap-6 lg:grid-cols-[380px_1fr]"><form onSubmit={submit} className="h-fit rounded-3xl border border-violet-100 bg-white p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700"><UserPlus className="h-6 w-6" /></div><h3 className="mt-5 text-2xl font-black text-slate-950">Nuevo profesor</h3><p className="mt-1 text-sm text-slate-500">Tendrá una agenda privada y una sesión persistente.</p><div className="mt-6 space-y-4"><Field label="Nombre"><input value={fullName} onChange={event => setFullName(event.target.value)} className="agenda-input" /></Field><Field label="Correo"><input type="email" value={email} onChange={event => setEmail(event.target.value)} className="agenda-input" /></Field><Field label="Contraseña temporal"><input type="password" minLength={8} value={password} onChange={event => setPassword(event.target.value)} className="agenda-input" placeholder="Mínimo 8 caracteres" /></Field></div><button disabled={saving || !fullName || !email || password.length < 8} className="mt-6 min-h-12 w-full rounded-xl bg-violet-600 font-black text-white disabled:bg-slate-300">{saving ? 'Creando…' : 'Crear profesor'}</button></form><div><h3 className="text-2xl font-black text-slate-950">Equipo Maven</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{teachers.map(teacher => <article key={teacher.id} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-black text-white">{teacher.full_name.slice(0, 1).toUpperCase()}</div><div><p className="font-black text-slate-950">{teacher.full_name}</p><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">{teacher.role === 'admin' ? 'Administrador' : 'Profesor'}</p></div></div><p className="mt-4 text-sm font-semibold text-slate-500">Zona horaria: {teacher.timezone}</p></article>)}</div></div></div>;
}
