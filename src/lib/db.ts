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

  updateStudent: async (id: string, updates: Partial<DbStudent>): Promise<void> => {
    const { error } = await supabase.from('students').update(updates).eq('id', id);
    if (error) {
      console.error('Error updating student in Supabase:', error);
      const mock: DbStudent[] = JSON.parse(localStorage.getItem('mock_students') || '[]');
      const idx = mock.findIndex(s => s.id === id);
      if (idx !== -1) {
        mock[idx] = { ...mock[idx], ...updates };
        localStorage.setItem('mock_students', JSON.stringify(mock));
      }
    }
  },

  deleteStudent: async (id: string): Promise<void> => {
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) {
      console.error('Error deleting student in Supabase:', error);
      const mock: DbStudent[] = JSON.parse(localStorage.getItem('mock_students') || '[]');
      const filtered = mock.filter(s => s.id !== id);
      localStorage.setItem('mock_students', JSON.stringify(filtered));
    }
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

  getStructureModeProgress: async (studentId?: string | null, localKey?: string): Promise<any> => {
    let query = supabase.from('structure_mode_progress').select('*').limit(1);
    if (studentId) {
      query = query.eq('student_id', studentId);
    } else if (localKey) {
      query = query.eq('local_key', localKey);
    } else {
      return null;
    }

    const { data, error } = await query.maybeSingle();
    if (error) {
      console.warn('Structure mode progress not found in Supabase. Using local.', error);
      return JSON.parse(localStorage.getItem(`structure_mode_progress_${studentId || localKey}`) || 'null');
    }
    return data || JSON.parse(localStorage.getItem(`structure_mode_progress_${studentId || localKey}`) || 'null');
  },

  saveStructureModeProgress: async (progress: {
    student_id?: string | null;
    local_key: string;
    completed_lessons: string[];
    last_lesson_id?: string | null;
    last_slide_index?: number;
  }): Promise<void> => {
    const ownerKey = progress.student_id || progress.local_key;
    const payload = {
      student_id: progress.student_id || null,
      local_key: progress.local_key,
      completed_lessons: Array.from(new Set(progress.completed_lessons)),
      last_lesson_id: progress.last_lesson_id || null,
      last_slide_index: progress.last_slide_index || 0,
      updated_at: new Date().toISOString()
    };

    const existing = await dbAdmin.getStructureModeProgress(progress.student_id, progress.local_key);
    const request = existing?.id
      ? supabase.from('structure_mode_progress').update(payload).eq('id', existing.id)
      : supabase.from('structure_mode_progress').insert([payload]);

    const { error } = await request;
    if (error) {
      console.error('Error saving structure mode progress:', error);
    }
    localStorage.setItem(`structure_mode_progress_${ownerKey}`, JSON.stringify(payload));
  },

  saveStructureAssessmentAttempt: async (attempt: {
    student_id?: string | null;
    local_key: string;
    student_name?: string;
    assessment_id: string;
    block_id?: string | null;
    score: number;
    total: number;
    percentage: number;
    duration_seconds: number;
    answers: any;
    feedback: any;
    share_token: string;
  }): Promise<void> => {
    const payload = {
      ...attempt,
      student_id: attempt.student_id || null,
      block_id: attempt.block_id || null,
      created_at: new Date().toISOString()
    };
    const { error } = await supabase.from('structure_assessment_attempts').insert([payload]);
    if (error) {
      console.error('Error saving structure assessment attempt:', error);
    }

    const key = `structure_assessment_attempts_${attempt.student_id || attempt.local_key}`;
    const localAttempts = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([payload, ...localAttempts]));
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
    const studentSafe = (studentName || '').toLowerCase().trim();
    const { data, error } = await supabase.from('evaluation_progress').select('*').eq('level_id', levelId).eq('student_name', studentSafe).single();
    if (error) {
       console.warn('Evaluation progress not found in Supabase.', error);
       return JSON.parse(localStorage.getItem(`virtual_exam_progress_${levelId}_${studentSafe}`) || 'null');
    }
    return data;
  },

  saveEvaluationProgress: async (levelId: string, studentName: string, progress: any) => {
    const studentSafe = (studentName || '').toLowerCase().trim();
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
    const studentSafe = (studentName || '').toLowerCase().trim();
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
