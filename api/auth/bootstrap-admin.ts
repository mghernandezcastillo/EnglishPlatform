import { createStaffAdminClient } from '../../server/staffAdmin';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');
    const fullName = String(req.body?.fullName || '').trim();
    if (!email || !email.includes('@') || password.length < 8 || !fullName) {
      res.status(400).json({ error: 'Nombre, correo válido y contraseña de mínimo 8 caracteres son obligatorios.' });
      return;
    }

    const client = createStaffAdminClient();
    const { error: schemaError } = await client.from('profiles').select('id').limit(1);
    if (schemaError) {
      res.status(503).json({ error: 'Primero aplica la migración de Agenda Maven en Supabase.' });
      return;
    }
    const { data: users, error: listError } = await client.auth.admin.listUsers({ page: 1, perPage: 1 });
    if (listError) throw listError;
    if (users.users.length > 0) {
      res.status(409).json({ error: 'La cuenta inicial ya fue creada. Inicia sesión o solicita acceso al administrador.' });
      return;
    }

    const { data, error } = await client.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      app_metadata: { role: 'admin' },
      user_metadata: { full_name: fullName }
    });
    if (error) throw error;
    res.status(201).json({ id: data.user.id, email: data.user.email });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'No fue posible crear el administrador.' });
  }
}
