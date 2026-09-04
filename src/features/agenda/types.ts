export interface AgendaTeacher {
  id: string;
  full_name: string;
  role: 'admin' | 'teacher';
  timezone: string;
  active: boolean;
  created_at?: string;
}

export interface AgendaStudent {
  id: string;
  name: string;
  avatar_id?: string;
  level?: string;
  type?: string;
  teacher_id?: string | null;
}

export interface TeacherAvailability {
  id: string;
  teacher_id: string;
  weekday: number;
  start_time: string;
  end_time: string;
  active: boolean;
}

export type BookingStatus = 'scheduled' | 'completed' | 'cancelled' | 'no_show';

export interface AgendaBooking {
  id: string;
  teacher_id: string;
  student_id: string | null;
  title: string;
  starts_at: string;
  ends_at: string;
  status: BookingStatus;
  series_id?: string | null;
  meeting_url?: string | null;
  notes?: string | null;
  students?: { id: string; name: string } | null;
}

export type BillingCycle = 'monthly' | 'semimonthly' | 'per_class';

export interface BillingPlan {
  id: string;
  teacher_id: string;
  student_id: string;
  billing_cycle: BillingCycle;
  amount: number;
  currency: string;
  sessions_per_week: number;
  duration_minutes: number;
  starts_on: string;
  ends_on?: string | null;
  due_day?: number | null;
  active: boolean;
  students?: { id: string; name: string } | null;
}

export interface TeacherPayment {
  id: string;
  teacher_id: string;
  student_id: string;
  billing_plan_id?: string | null;
  amount: number;
  currency: string;
  paid_on: string;
  status: 'pending' | 'paid' | 'partial' | 'overdue';
  notes?: string | null;
  students?: { id: string; name: string } | null;
}

export interface RecurringBookingInput {
  teacherId: string;
  studentId: string;
  title: string;
  meetingUrl: string;
  notes: string;
  startDate: string;
  endDate: string;
  startTime: string;
  durationMinutes: number;
  weekdays: number[];
  repeats: boolean;
}
