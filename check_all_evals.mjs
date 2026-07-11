import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.VITE_SUPABASE_URL;
const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
  // Get all levels
  const { data: levels } = await supabase.from('curr_levels').select('id, level_id, target_audience');
  
  // Get all classes
  const { data: classes } = await supabase.from('curr_classes').select('class_id, title, level_id');
  
  // Get all evals
  const { data: evals } = await supabase.from('pre_class_evaluations').select('class_id, target_audience');
  
  let missing = [];
  let placeholderCount = 0;
  
  const evalSet = new Set(evals.map(e => `${e.class_id}-${e.target_audience}`));
  
  for (const c of classes) {
    const level = levels.find(l => l.id === c.level_id);
    if (!level) continue;
    
    const key = `${c.class_id}-${level.target_audience}`;
    if (!evalSet.has(key)) {
      missing.push(key);
    }
  }
  
  // Also check for 'Opción A' or 'Pregunta 1' text which indicates placeholders
  const { data: evalData } = await supabase.from('pre_class_evaluations').select('class_id, target_audience, questions');
  let hasDrafts = false;
  for (const e of evalData) {
     for (const q of e.questions) {
        if (q.text.includes('Pregunta 1') || q.options[0].includes('Opción') || q.text.includes('Pregunta 2')) {
           console.log(`Draft found in ${e.class_id} (${e.target_audience})`);
           hasDrafts = true;
           break;
        }
     }
  }
  
  console.log(`Total classes: ${classes.length}`);
  console.log(`Total evals: ${evals.length}`);
  console.log(`Missing evals: ${missing.length}`);
  if (missing.length > 0) {
    console.log('Missing classes:', missing);
  } else {
    console.log('NO MISSING EVALS!');
  }
  
  if (!hasDrafts) {
    console.log('NO DRAFTS OR PLACEHOLDERS DETECTED!');
  }
}
run();
