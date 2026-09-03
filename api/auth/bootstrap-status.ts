import { createStaffAdminClient } from '../../server/staffAdmin';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }
  try {
    const client = createStaffAdminClient();
    const { error: schemaError } = await client.from('profiles').select('id').limit(1);
    if (schemaError) {
      res.status(503).json({
        canBootstrap: false,
        migrationReady: false,
        error: 'Primero debes aplicar la migración de Agenda Maven en Supabase.'
      });
      return;
    }
    const { data, error } = await client.auth.admin.listUsers({ page: 1, perPage: 1 });
    if (error) throw error;
    res.status(200).json({ canBootstrap: data.users.length === 0, migrationReady: true });
  } catch (error: any) {
    res.status(500).json({ canBootstrap: false, migrationReady: false, error: error?.message || 'No fue posible verificar Auth.' });
  }
}
