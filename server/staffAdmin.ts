import { createClient } from '@supabase/supabase-js';

function env(name: string, fallback?: string) {
  return process.env[name] || (fallback ? process.env[fallback] : undefined);
}

export function createStaffAdminClient() {
  const url = env('SUPABASE_URL', 'VITE_SUPABASE_URL');
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRole) {
    throw new Error('Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en el servidor.');
  }
  return createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

export async function requireAdmin(req: any) {
  const token = String(req.headers?.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) throw Object.assign(new Error('Debes iniciar sesión.'), { status: 401 });
  const client = createStaffAdminClient();
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) throw Object.assign(new Error('La sesión no es válida.'), { status: 401 });
  if (data.user.app_metadata?.role !== 'admin') {
    throw Object.assign(new Error('Solo un administrador puede realizar esta acción.'), { status: 403 });
  }
  return { client, user: data.user };
}

export function safeStaffError(error: unknown) {
  const message = error instanceof Error ? error.message : 'Error inesperado.';
  const status = Number((error as any)?.status) || 500;
  return { message, status };
}
