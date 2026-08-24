import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
const geminiApiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Faltan credenciales de Supabase en .env.local');
  process.exit(1);
}

if (!geminiApiKey) {
  console.error('❌ Falta VITE_GEMINI_API_KEY en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Estilo de la imagen de referencia (Teenager aesthetic, photorealistic)
const STYLE_PROMPT = "ultra-realistic, high quality photography, modern aesthetic, warm natural lighting, lifestyle educational setting, sharp focus, 8k resolution, cinematic composition. Do not include any text in the image. Two teenage girls in a cozy room with a laptop and tablet, photorealistic style.";
const NEGATIVE_PROMPT = "cartoon, 3d render, low quality, blurry, text, typography, letters, words, messy, ugly";

async function generateImageWithGemini(prompt: string): Promise<Buffer | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${geminiApiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: `${prompt}. ${STYLE_PROMPT}. Avoid: ${NEGATIVE_PROMPT}` }],
        parameters: { sampleCount: 1, aspectRatio: '16:9' }
      })
    });

    if (!response.ok) {
      const errTxt = await response.text();
      console.error(`❌ Error en la API de Gemini (${response.status}):`, errTxt);
      return null;
    }

    const data = await response.json();
    const base64Bytes = data.predictions?.[0]?.bytesBase64Encoded;
    
    if (!base64Bytes) {
      console.error('❌ No se recibió base64 de Gemini.');
      return null;
    }

    return Buffer.from(base64Bytes, 'base64');
  } catch (error) {
    console.error('❌ Error de red con Gemini:', error);
    return null;
  }
}

async function uploadToSupabase(buffer: Buffer, track: string, slideId: string): Promise<string | null> {
  const filename = `gen-${track}-${slideId.replace(/[^a-zA-Z0-9-]/g, '')}-${Date.now()}.jpg`;
  
  try {
    const { data, error } = await supabase.storage
      .from('curriculum-images')
      .upload(`generated/${filename}`, buffer, { 
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {
      console.error(`❌ Error subiendo a Supabase Storage:`, error);
      return null;
    }

    const { data: pubData } = supabase.storage.from('curriculum-images').getPublicUrl(`generated/${filename}`);
    return pubData.publicUrl;
  } catch (err) {
    console.error(`❌ Error en uploadToSupabase:`, err);
    return null;
  }
}

async function runBatchAgent() {
  const args = process.argv.slice(2);
  let filterTrack = '';
  let filterClass = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--track' && args[i+1]) {
      filterTrack = args[i+1];
      i++;
    } else if (args[i] === '--class' && args[i+1]) {
      filterClass = args[i+1];
      i++;
    }
  }

  console.log(`🤖 Iniciando Agente de Generación por Lotes...`);
  if (filterTrack) console.log(`   - Filtrando por track: ${filterTrack}`);
  if (filterClass) console.log(`   - Filtrando por clase: ${filterClass}`);

  // Construir query para obtener las diapositivas
  // Aquí podemos decidir si generar para todas las que tienen una URL temporal (unsplash) o todas visuales
  // Primero sacaremos las clases que coinciden con los filtros
  
  let classesQuery = supabase.from('curr_classes').select('id, class_id');
  
  if (filterTrack) {
     classesQuery = classesQuery.like('class_id', `%${filterTrack}-%`);
  }
  if (filterClass) {
     classesQuery = classesQuery.eq('class_id', filterClass);
  }

  const { data: classesData, error: classesError } = await classesQuery;
  
  if (classesError) {
    console.error('❌ Error obteniendo clases:', classesError);
    return;
  }

  const classIds = classesData.map(c => c.id);
  
  if (classIds.length === 0) {
    console.log('⚠️ No se encontraron clases con los filtros dados.');
    return;
  }

  // Iterar sobre las clases para no saturar los queries de Supabase
  console.log(`✅ ${classesData.length} clases encontradas. Buscando diapositivas visuales por clase...`);

  const visualSlides = [];

  for (const classRow of classesData) {
    const { data: sectionsData, error: sectionsError } = await supabase
      .from('curr_sections')
      .select('id')
      .eq('class_id', classRow.id);

    if (sectionsError || !sectionsData || sectionsData.length === 0) continue;

    const sectionIds = sectionsData.map(s => s.id);

    const { data: slidesData, error: slidesError } = await supabase
      .from('curr_slides')
      .select('*')
      .in('section_id', sectionIds);

    if (slidesError || !slidesData) continue;

    const validSlides = slidesData.filter(slide => {
      const isVisual = slide.type !== 'spinning-wheel' && slide.type !== 'emoji-game' && slide.type !== 'video';
      const alreadyGenerated = slide.image_url?.includes('generated/gen-');
      return isVisual && !alreadyGenerated;
    });

    visualSlides.push(...validSlides);
  }

  console.log(`📸 Se encontraron ${visualSlides.length} diapositivas para generar/actualizar imagen.`);

  for (let i = 0; i < visualSlides.length; i++) {
    const slide = visualSlides[i];
    console.log(`\n[${i+1}/${visualSlides.length}] Procesando diapositiva: ${slide.slide_id} - "${slide.title}"`);

    // Armar el prompt base con el contenido de la diapositiva
    let promptText = `Educational slide. Topic: ${slide.title}.`;
    if (slide.description) promptText += ` Description: ${slide.description}.`;
    if (slide.content && slide.content.length > 0) {
       // content es JSONB, asumimos que es array de strings
       const cleanContent = Array.isArray(slide.content) 
         ? slide.content.filter((c: any) => typeof c === 'string' && c.length < 100).slice(0, 2).join(' ') 
         : '';
       if (cleanContent) promptText += ` Context: ${cleanContent}.`;
    }

    console.log(`   - Prompt contextual: ${promptText}`);
    console.log(`   - 🎨 Generando con Gemini...`);
    
    const imageBuffer = await generateImageWithGemini(promptText);
    
    if (!imageBuffer) {
      console.log(`   - ⚠️ Falló la generación, saltando...`);
      continue;
    }

    console.log(`   - ☁️ Subiendo a Supabase Storage...`);
    const track = filterTrack || slide.slide_id.split('-')[0] || 'auto';
    const newImageUrl = await uploadToSupabase(imageBuffer, track, slide.slide_id);

    if (newImageUrl) {
      console.log(`   - 💾 Actualizando registro en la base de datos...`);
      const { error: updateError } = await supabase
        .from('curr_slides')
        .update({ image_url: newImageUrl })
        .eq('id', slide.id);

      if (updateError) {
        console.error(`   - ❌ Error actualizando la diapositiva:`, updateError);
      } else {
        console.log(`   - ✅ Éxito: ${newImageUrl}`);
      }
    }

    // Pequeño delay para no saturar la API
    await new Promise(res => setTimeout(res, 2000));
  }

  console.log(`\n🎉 Proceso batch finalizado.`);
}

runBatchAgent().catch(console.error);
