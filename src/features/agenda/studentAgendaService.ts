import { supabase } from '../../lib/supabase';

export interface StudentNextClass {
  booking_id: string;
  title: string;
  starts_at: string;
  ends_at: string;
  meeting_url: string | null;
  teacher_name: string;
  teacher_timezone: string;
}

export const studentAgendaService = {
  async getNextClass(studentId: string): Promise<StudentNextClass | null> {
    const { data, error } = await supabase.rpc('agenda_get_next_student_class', {
      p_student_id: studentId
    });

    if (error) {
      throw new Error(error.message || 'No fue posible consultar la próxima clase.');
    }

    const rows = (data || []) as StudentNextClass[];
    return rows[0] || null;
  }
};
