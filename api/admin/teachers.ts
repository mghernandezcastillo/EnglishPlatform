import { requireAdmin, safeStaffError } from '../../server/staffAdmin';

export default async function handler(req: any, res: any) {
  try {
    const { client } = await requireAdmin(req);
    if (req.method === 'GET') {
      const { data, error } = await client
        .from('profiles')
        .select('id, full_name, role, timezone, active, created_at')
        .order('full_name');
      if (error) throw error;
      res.status(200).json({ teachers: data || [] });
      return;
    }

    if (req.method === 'POST') {
      const email = String(req.body?.email || '').trim().toLowerCase();
      const password = String(req.body?.password || '');
      const fullName = String(req.body?.fullName || '').trim();
      if (!email || !email.includes('@') || password.length < 8 || !fullName) {
        res.status(400).json({ error: 'Nombre, correo válido y contraseña de mínimo 8 caracteres son obligatorios.' });
        return;
      }
      const { data, error } = await client.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        app_metadata: { role: 'teacher' },
        user_metadata: { full_name: fullName }
      });
      if (error) throw error;
      res.status(201).json({ id: data.user.id, email: data.user.email });
      return;
    }

    res.status(405).json({ error: 'Method not allowed.' });
  } catch (error) {
    const safe = safeStaffError(error);
    res.status(safe.status).json({ error: safe.message });
  }
}
