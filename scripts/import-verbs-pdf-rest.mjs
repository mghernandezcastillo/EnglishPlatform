import fs from 'node:fs';
import process from 'node:process';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const inputPath = process.argv[2] || 'tmp_verbs_import.json';
const sourceDoc = 'VERBS.pdf';
const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
}

const rows = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const { error: deleteError } = await supabase
  .from('english_lexicon_items')
  .delete()
  .eq('source_doc', sourceDoc);

if (deleteError) {
  throw new Error(`Delete failed: ${deleteError.code || ''} ${deleteError.message}`);
}

for (let index = 0; index < rows.length; index += 100) {
  const chunk = rows.slice(index, index + 100);
  const { error } = await supabase
    .from('english_lexicon_items')
    .upsert(chunk, { onConflict: 'source_doc,category,term' });

  if (error) {
    throw new Error(`Upsert failed at ${index}: ${error.code || ''} ${error.message}`);
  }
}

const { data, error } = await supabase
  .from('english_lexicon_items')
  .select('category')
  .eq('source_doc', sourceDoc);

if (error) {
  throw new Error(`Verify failed: ${error.code || ''} ${error.message}`);
}

const summary = data.reduce((acc, row) => {
  acc[row.category] = (acc[row.category] || 0) + 1;
  return acc;
}, {});

console.log('Imported:', JSON.stringify(Object.fromEntries(Object.entries(summary).sort()), null, 2));
console.log('Total:', data.length);
