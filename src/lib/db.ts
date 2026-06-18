import { supabase } from '../lib/supabase';
import { DbStudent, DbGroup } from '../types';

export const dbAdmin = {
  getGroups: async (): Promise<DbGroup[]> => {
    const { data, error } = await supabase.from('groups').select('*').order('created_at', { ascending: false });
    if (error) {
      console.warn('Supabase not configured or table missing. Using local mock.', error);
      return JSON.parse(localStorage.getItem('mock_groups') || '[]');
    }
    return data || [];
  },

  createGroup: async (name: string, description: string): Promise<DbGroup | null> => {
    const { data, error } = await supabase.from('groups').insert([{ name, description }]).select().single();
    if (error) {
      const mock = JSON.parse(localStorage.getItem('mock_groups') || '[]');
      const newGroup = { id: crypto.randomUUID(), name, description, created_at: new Date().toISOString() };
      localStorage.setItem('mock_groups', JSON.stringify([...mock, newGroup]));
      return newGroup;
    }
    return data;
  },

  getStudents: async (groupId?: string): Promise<DbStudent[]> => {
    let query = supabase.from('students').select('*').order('created_at', { ascending: false });
    if (groupId) query = query.eq('group_id', groupId);
    const { data, error } = await query;
    if (error) {
       console.warn('Supabase not configured or table missing. Using local mock.', error);
       let mock: DbStudent[] = JSON.parse(localStorage.getItem('mock_students') || '[]');
       if (groupId) mock = mock.filter(s => s.group_id === groupId);
       return mock;
    }
    return data || [];
  },

  createStudent: async (student: Omit<DbStudent, 'id' | 'created_at' | 'completed_lessons'>): Promise<DbStudent | null> => {
    const { data, error } = await supabase.from('students').insert([{ ...student, completed_lessons: [] }]).select().single();
    if (error) {
      console.error('Error creating student in Supabase:', error);
      const mock = JSON.parse(localStorage.getItem('mock_students') || '[]');
      const newSt = { ...student, id: crypto.randomUUID(), completed_lessons: [], created_at: new Date().toISOString() };
      localStorage.setItem('mock_students', JSON.stringify([...mock, newSt]));
      return newSt;
    }
    return data;
  },

  updateStudentProgress: async (id: string, lessonId: string) => {
    const { data: student } = await supabase.from('students').select('completed_lessons').eq('id', id).single();
    if (student) {
      const { error } = await supabase.from('students')
        .update({ completed_lessons: Array.from(new Set([...student.completed_lessons, lessonId])) })
        .eq('id', id);
      if (error) console.error(error);
    } else {
      const mockMap: DbStudent[] = JSON.parse(localStorage.getItem('mock_students') || '[]');
      const st = mockMap.find(s => s.id === id);
      if (st) {
        st.completed_lessons = Array.from(new Set([...st.completed_lessons, lessonId]));
        localStorage.setItem('mock_students', JSON.stringify(mockMap));
      }
    }
  },
  
  setStudentProgress: async (id: string, completedLessons: string[]) => {
    const { data: student } = await supabase.from('students').select('completed_lessons').eq('id', id).single();
    if (student) {
      const { error } = await supabase.from('students')
        .update({ completed_lessons: Array.from(new Set(completedLessons)) })
        .eq('id', id);
      if (error) console.error(error);
    } else {
      const mockMap: DbStudent[] = JSON.parse(localStorage.getItem('mock_students') || '[]');
      const st = mockMap.find(s => s.id === id);
      if (st) {
        st.completed_lessons = Array.from(new Set(completedLessons));
        localStorage.setItem('mock_students', JSON.stringify(mockMap));
      }
    }
  },

  getBrandSettings: async (): Promise<any> => {
    const { data, error } = await supabase.from('settings').select('*').limit(1).single();
    if (error) {
       console.warn('Settings not found in Supabase. Using local.', error);
       return JSON.parse(localStorage.getItem('brand_settings') || 'null');
    }
    return data;
  },

  saveBrandSettings: async (settings: any) => {
    const { error } = await supabase.from('settings').upsert({ id: 'default', ...settings });
    if (error) {
       console.error("Error saving settings:", error);
    }
    localStorage.setItem('brand_settings', JSON.stringify(settings));
  },

  getEvaluations: async (): Promise<any[]> => {
    const { data, error } = await supabase.from('evaluations').select('*').order('created_at', { ascending: false });
    if (error) {
       console.warn('Supabase not configured or table missing. Using local mock.', error);
       return JSON.parse(localStorage.getItem('mock_evaluations') || '[]');
    }
    return data || [];
  },

  getEvaluationProgress: async (levelId: string, studentName: string): Promise<any> => {
    const studentSafe = studentName.toLowerCase().trim();
    const { data, error } = await supabase.from('evaluation_progress').select('*').eq('level_id', levelId).eq('student_name', studentSafe).single();
    if (error) {
       console.warn('Evaluation progress not found in Supabase.', error);
       return JSON.parse(localStorage.getItem(`virtual_exam_progress_${levelId}_${studentSafe}`) || 'null');
    }
    return data;
  },

  saveEvaluationProgress: async (levelId: string, studentName: string, progress: any) => {
    const studentSafe = studentName.toLowerCase().trim();
    const { error } = await supabase.from('evaluation_progress').upsert({ 
       id: `${levelId}_${studentSafe}`,
       level_id: levelId, 
       student_name: studentSafe, 
       ...progress 
    });
    if (error) {
       console.error("Error saving evaluation progress:", error);
    }
    localStorage.setItem(`virtual_exam_progress_${levelId}_${studentSafe}`, JSON.stringify(progress));
  },

  clearEvaluationProgress: async (levelId: string, studentName: string) => {
    const studentSafe = studentName.toLowerCase().trim();
    const { error } = await supabase.from('evaluation_progress').delete().eq('level_id', levelId).eq('student_name', studentSafe);
    localStorage.removeItem(`virtual_exam_progress_${levelId}_${studentSafe}`);
  },

  saveEvaluationScore: async (studentName: string, levelId: string, score: number, total: number, answers: any) => {
    const { error } = await supabase.from('evaluations').insert([{ 
        student_name: studentName, 
        level_id: levelId, 
        score, 
        total_questions: total, 
        answers 
    }]);
    if (error) {
       console.error("Error saving evaluation:", error);
       // Mock fallback
       const mock = JSON.parse(localStorage.getItem('mock_evaluations') || '[]');
       mock.push({ id: crypto.randomUUID(), student_name: studentName, level_id: levelId, score, total_questions: total, answers, created_at: new Date().toISOString() });
       localStorage.setItem('mock_evaluations', JSON.stringify(mock));
    }
  }
};
