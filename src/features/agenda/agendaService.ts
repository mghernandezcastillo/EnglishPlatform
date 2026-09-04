import { supabase } from '../../lib/supabase';
import type {
  AgendaBooking,
  AgendaStudent,
  AgendaTeacher,
  BillingPlan,
  RecurringBookingInput,
  TeacherAvailability,
  TeacherPayment
} from './types';

const SETUP_ERROR = 'Agenda Maven todavía no está instalada en Supabase. Aplica la migración 20260903_agenda_maven.sql.';
export const MAX_RECURRING_BOOKINGS = 1000;

function throwIfError(error: any) {
  if (!error) return;
  if (error.code === 'PGRST205' || error.code === '42P01' || String(error.message).includes('schema cache')) {
    throw new Error(SETUP_ERROR);
  }
  throw new Error(error.message || 'No fue posible completar la operación.');
}

function dateAtNoon(date: string) {
  return new Date(`${date}T12:00:00`);
}

function dateOnly(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isoWeekday(date: Date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

export function countRecurringBookingOccurrences(input: Pick<RecurringBookingInput, 'startDate' | 'endDate' | 'weekdays' | 'repeats'>) {
  if (!input.startDate || (input.repeats && !input.endDate)) return 0;
  const first = dateAtNoon(input.startDate);
  const last = dateAtNoon(input.repeats ? input.endDate : input.startDate);
  if (Number.isNaN(first.getTime()) || Number.isNaN(last.getTime()) || last < first) return 0;

  const allowedDays = new Set(input.repeats ? input.weekdays : [isoWeekday(first)]);
  if (!allowedDays.size) return 0;

  let count = 0;
  const cursor = new Date(first);
  while (cursor <= last) {
    if (allowedDays.has(isoWeekday(cursor))) count += 1;
    if (count > MAX_RECURRING_BOOKINGS) return count;
    cursor.setDate(cursor.getDate() + 1);
  }
  return count;
}

function addMinutes(date: string, time: string, minutes: number) {
  const [hours, mins] = time.split(':').map(Number);
  const total = hours * 60 + mins + minutes;
  if (total >= 24 * 60) throw new Error('La clase no puede terminar al día siguiente.');
  const endHours = String(Math.floor(total / 60)).padStart(2, '0');
  const endMinutes = String(total % 60).padStart(2, '0');
  return `${date}T${endHours}:${endMinutes}:00`;
}

function normalizeMeetingUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'https:') throw new Error();
    return url.toString();
  } catch {
    throw new Error('Escribe un link de clase válido que comience por https://');
  }
}

function buildOccurrences(input: RecurringBookingInput) {
  const first = dateAtNoon(input.startDate);
  const last = dateAtNoon(input.repeats ? input.endDate : input.startDate);
  if (last < first) throw new Error('La fecha final debe ser igual o posterior a la inicial.');
  const allowedDays = new Set(input.repeats ? input.weekdays : [isoWeekday(first)]);
  if (!allowedDays.size) throw new Error('Selecciona al menos un día de clase.');
  const meetingUrl = normalizeMeetingUrl(input.meetingUrl);
  const occurrences: Array<{ starts_at: string; ends_at: string; meeting_url: string | null }> = [];
  const cursor = new Date(first);
  while (cursor <= last) {
    if (allowedDays.has(isoWeekday(cursor))) {
      const currentDate = dateOnly(cursor);
      occurrences.push({
        starts_at: `${currentDate}T${input.startTime}:00`,
        ends_at: addMinutes(currentDate, input.startTime, input.durationMinutes),
        meeting_url: meetingUrl
      });
    }
    cursor.setDate(cursor.getDate() + 1);
    if (occurrences.length > MAX_RECURRING_BOOKINGS) {
      throw new Error(`La recurrencia no puede superar ${MAX_RECURRING_BOOKINGS} clases.`);
    }
  }
  if (!occurrences.length) throw new Error('No hay fechas que coincidan con los días seleccionados.');
  return occurrences;
}

export const agendaService = {
  async listTeachers(): Promise<AgendaTeacher[]> {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, role, timezone, active, created_at')
      .eq('active', true)
      .order('full_name');
    throwIfError(error);
    return (data || []) as AgendaTeacher[];
  },

  async listStudents(teacherId: string, includeUnassigned: boolean): Promise<AgendaStudent[]> {
    let query = supabase
      .from('students')
      .select('id, name, avatar_id, level, type, teacher_id')
      .order('name');
    query = includeUnassigned
      ? query.or(`teacher_id.eq.${teacherId},teacher_id.is.null`)
      : query.eq('teacher_id', teacherId);
    const { data, error } = await query;
    throwIfError(error);
    return (data || []) as AgendaStudent[];
  },

  async listBookings(teacherId: string, from: string, to: string): Promise<AgendaBooking[]> {
    const { data, error } = await supabase
      .from('agenda_bookings')
      .select('*, students(id, name)')
      .eq('teacher_id', teacherId)
      .gte('starts_at', `${from}T00:00:00`)
      .lt('starts_at', `${to}T00:00:00`)
      .neq('status', 'cancelled')
      .order('starts_at');
    throwIfError(error);
    return (data || []) as unknown as AgendaBooking[];
  },

  async listAvailability(teacherId: string): Promise<TeacherAvailability[]> {
    const { data, error } = await supabase
      .from('teacher_availability')
      .select('*')
      .eq('teacher_id', teacherId)
      .eq('active', true)
      .order('weekday')
      .order('start_time');
    throwIfError(error);
    return (data || []) as TeacherAvailability[];
  },

  async addAvailability(teacherId: string, weekday: number, startTime: string, endTime: string) {
    if (endTime <= startTime) throw new Error('La hora final debe ser posterior a la inicial.');
    const { error } = await supabase.from('teacher_availability').insert({
      teacher_id: teacherId,
      weekday,
      start_time: startTime,
      end_time: endTime
    });
    throwIfError(error);
  },

  async removeAvailability(id: string) {
    const { error } = await supabase.from('teacher_availability').delete().eq('id', id);
    throwIfError(error);
  },

  async createRecurringBooking(input: RecurringBookingInput) {
    const occurrences = buildOccurrences(input);
    const { data, error } = await supabase.rpc('agenda_create_recurring_bookings', {
      p_teacher_id: input.teacherId,
      p_student_id: input.studentId,
      p_title: input.title,
      p_notes: input.notes,
      p_occurrences: occurrences
    });
    throwIfError(error);
    return data as { series_id: string; inserted: number };
  },

  async cancelBooking(booking: AgendaBooking, cancelSeries: boolean) {
    let query = supabase.from('agenda_bookings').update({ status: 'cancelled', updated_at: new Date().toISOString() });
    query = cancelSeries && booking.series_id ? query.eq('series_id', booking.series_id) : query.eq('id', booking.id);
    const { error } = await query;
    throwIfError(error);
  },

  async setBookingStatus(id: string, status: AgendaBooking['status']) {
    const { error } = await supabase.from('agenda_bookings').update({ status, updated_at: new Date().toISOString() }).eq('id', id);
    throwIfError(error);
  },

  async listBillingPlans(teacherId: string): Promise<BillingPlan[]> {
    const { data, error } = await supabase
      .from('student_billing_plans')
      .select('*, students(id, name)')
      .eq('teacher_id', teacherId)
      .eq('active', true)
      .order('created_at');
    throwIfError(error);
    return (data || []) as unknown as BillingPlan[];
  },

  async saveBillingPlan(plan: Omit<BillingPlan, 'id' | 'students'>) {
    const { error } = await supabase
      .from('student_billing_plans')
      .upsert(plan, { onConflict: 'teacher_id,student_id' });
    throwIfError(error);
  },

  async listPayments(teacherId: string, from: string, to: string): Promise<TeacherPayment[]> {
    const { data, error } = await supabase
      .from('teacher_payments')
      .select('*, students(id, name)')
      .eq('teacher_id', teacherId)
      .gte('paid_on', from)
      .lte('paid_on', to)
      .order('paid_on', { ascending: false });
    throwIfError(error);
    return (data || []) as unknown as TeacherPayment[];
  },

  async addPayment(payment: Omit<TeacherPayment, 'id' | 'students'>) {
    const { error } = await supabase.from('teacher_payments').insert(payment);
    throwIfError(error);
  },

  async createTeacher(input: { fullName: string; email: string; password: string }) {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData.session?.access_token;
    if (!token) throw new Error('La sesión expiró. Vuelve a iniciar sesión.');
    const response = await fetch('/api/admin/teachers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(input)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'No fue posible crear el profesor.');
    return result;
  }
};
