import type { Session, User } from '@supabase/supabase-js';

export type StaffRole = 'admin' | 'teacher';

export interface StaffUser {
  id: string;
  email: string;
  fullName: string;
  role: StaffRole;
}

export function staffFromUser(user?: User | null): StaffUser | null {
  if (!user) return null;
  const role = user.app_metadata?.role;
  if (role !== 'admin' && role !== 'teacher') return null;
  return {
    id: user.id,
    email: user.email || '',
    fullName: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Profesor',
    role
  };
}

export function staffFromSession(session?: Session | null): StaffUser | null {
  return staffFromUser(session?.user);
}
