import { ClassSlide } from '../types';
import { SLIDE_TYPE_REGISTRY } from '../config/slideTypeRegistry';
import { supabase } from './supabase';

export interface StylePreset {
  id: string;
  name: string;
  targetAudience: string;
  promptSuffix: string;
  negativePrompt: string;
  exampleBadge: string;
}

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: 'photoreal-pro',
    name: 'Modern Clean Photorealistic (Adults / Pro)',
    targetAudience: 'Adultos (18+)',
    promptSuffix: 'professional DSLR photograph, shallow depth of field, natural soft lighting, sharp focus on subject, warm color grading, authentic real-world environment, ultra-detailed, 8K, cinematic',
    negativePrompt: 'blurry, cartoon, anime, childish, low quality, ugly faces, watermark, text overlay, logo, split image, grey empty background, abstract, dark moody, letter box',
    exampleBadge: 'photo Realista Pro'
  },
  {
    id: 'streetwear-anime',
    name: 'Modern Streetwear & Teen Aesthetic (Teens)',
    targetAudience: 'Adolescentes (13-17)',
    promptSuffix: 'stylized digital illustration, semi-realistic teen characters, vibrant saturated colors, dynamic composition, modern urban high school aesthetic, high contrast, clean linework, trending art style',
    negativePrompt: 'childish, baby toys, boring, dull, low resolution, watermark, corporate stock photo, grey background',
    exampleBadge: 'Teen Trend'
  },
  {
    id: '3d-pixar',
    name: '3D Pixar / Animated Character (Kids)',
    targetAudience: 'Ninos (6-12)',
    promptSuffix: '3D Pixar-style animation render, cute expressive character with big eyes, vibrant warm pastel colors, playful rounded shapes, bright cheerful lighting, child-friendly educational setting, octane render quality',
    negativePrompt: 'scary, dark, realistic horror, dull colors, watermark, text overlay, complex diagrams, adult content, grey background',
    exampleBadge: '3D Pixar'
  },
  {
    id: 'flat-vector',
    name: 'Clean Minimalist Vector Art',
    targetAudience: 'Universal',
    promptSuffix: 'clean flat vector illustration, bold geometric shapes, limited pastel color palette, minimal background, crisp edges, educational infographic style',
    negativePrompt: 'photorealistic noise, blur, watermarks, dark colors, grey background, empty',
    exampleBadge: 'Vector Clean'
  }
];

function audienceToScene(track: string): string {
  if (track === 'nino' || track === 'kids') return 'children aged 7-10, colorful elementary school setting';
  if (track === 'adolescente' || track === 'teens') return 'teenagers aged 14-17, modern high school setting';
  return 'young adults aged 20-30, modern urban professional setting';
}

export class GeminiImageService {
  private static apiKey = (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_GEMINI_API_KEY : '') || (typeof process !== 'undefined' ? process.env?.VITE_GEMINI_API_KEY || process.env?.GEMINI_API_KEY : '') || '';

  public static buildPrompt(slide: ClassSlide, track: string = 'adulto', styleId: string = 'photoreal-pro'): string {
    const style = STYLE_PRESETS.find(s => s.id === styleId) || STYLE_PRESETS[0];
    let subject = slide.title.replace(/\b(Class|Clase|Section|Seccion|\d+\.)\b/gi, '').trim();
    if (slide.content && slide.content.length > 0) {
      const clean = slide.content.filter(c => !c.startsWith('http') && c.length < 180).slice(0, 2).join('. ');
      if (clean) subject += `: ${clean}`;
    }
    return `${style.promptSuffix}, ${audienceToScene(track)}, depicting: ${subject}. Negative: ${style.negativePrompt}.`;
  }

  public static async analyzeSlideWithGemini(slide: ClassSlide, track: string): Promise<{ visualDescription: string; keywords: string[] }> {
    const audience = audienceToScene(track);
    const slideText = [
      `Title: ${slide.title}`,
      slide.description ? `Description: ${slide.description}` : '',
      slide.content?.length ? `Content: ${slide.content.filter(c => !c.startsWith('http')).slice(0, 3).join(' / ')}` : '',
      slide.options?.length ? `Options: ${slide.options.join(' / ')}` : '',
      (typeof slide.correctOptionIndex === 'number' && slide.options?.[slide.correctOptionIndex])
        ? `Correct answer: ${slide.options[slide.correctOptionIndex]}` : '',
      slide.roleplay?.scenario ? `Roleplay: ${slide.roleplay.scenario}` : ''
    ].filter(Boolean).join('\n');

    if (this.apiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are a professional photographer and educational art director.

Given this English lesson slide, write a SINGLE photographic scene description (max 25 words) that makes an excellent, contextually accurate image.

Rules:
- Describe REAL people, REAL places, REAL objects in specific action
- Be VERY specific: "Two smiling friends shaking hands outside a sunny coffee shop" NOT "social interaction"
- Audience: ${audience}
- NO blackboards with text, NO abstract backgrounds, NO empty rooms, NO floating text
- The scene must visually represent the ENGLISH LANGUAGE CONCEPT being taught

Slide:
${slideText}

Respond ONLY with valid JSON: {"visualDescription": "...", "keywords": ["word1", "word2", "word3"]}`
                }]
              }],
              generationConfig: { responseMimeType: 'application/json', temperature: 0.3 }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            const parsed = JSON.parse(jsonText);
            if (parsed.visualDescription && parsed.visualDescription.length > 10) {
              return { visualDescription: parsed.visualDescription, keywords: Array.isArray(parsed.keywords) ? parsed.keywords : [] };
            }
          }
        }
      } catch (err) {
        console.warn('Gemini analysis failed, using fallback:', err);
      }
    }

    const subject = slide.title.replace(/\b(Class|Clase|\d+\.)\b/gi, '').trim();
    const contentSnippet = (slide.content || []).filter(c => !c.startsWith('http')).slice(0, 1).join('');
    return {
      visualDescription: `${audience}, ${subject}${contentSnippet ? `, ${contentSnippet}` : ''}`,
      keywords: subject.split(' ').filter((w: string) => w.length > 3).slice(0, 4)
    };
  }

  public static async generateSlideImage(
    slide: ClassSlide,
    track: string = 'adulto',
    styleId: string = 'photoreal-pro',
    onProgressUpdate?: (step: string) => void
  ): Promise<{ imageUrl: string; promptUsed: string }> {
    onProgressUpdate?.('Analizando diapositiva con Gemini AI...');
    const style = STYLE_PRESETS.find(s => s.id === styleId) || STYLE_PRESETS[0];
    const analysis = await this.analyzeSlideWithGemini(slide, track);

    onProgressUpdate?.('Generando imagen con Flux AI... (10-15s)');
    const prompt = `${analysis.visualDescription}, ${style.promptSuffix}, vertical portrait composition 4:5`;
    const negativePrompt = style.negativePrompt;
    const seed = Math.floor(Math.random() * 999999999);

    const aiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=1000&nologo=true&seed=${seed}&model=flux&negative=${encodeURIComponent(negativePrompt)}&enhance=true`;

    try {
      // Fetch the image so the loading spinner stays active until it's fully downloaded
      const response = await fetch(aiUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const localUrl = URL.createObjectURL(blob);
      return { imageUrl: localUrl, promptUsed: prompt };
    } catch (e) {
      console.error('Error pre-fetching AI image, falling back to direct URL:', e);
      return { imageUrl: aiUrl, promptUsed: prompt };
    }
  }

  public static async commitSlideImage(
    imageUrl: string,
    slideId: string,
    track: string = 'adulto',
    onProgressUpdate?: (step: string) => void
  ): Promise<string> {
    if (imageUrl.includes('supabase.co/storage')) return imageUrl;

    onProgressUpdate?.('Subiendo imagen a Supabase Storage...');
    try {
      const imgResp = await fetch(imageUrl);
      if (imgResp.ok) {
        const contentType = imgResp.headers.get('content-type') || 'image/jpeg';
        const arrayBuffer = await imgResp.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: contentType });
        const ext = contentType.includes('png') ? 'png' : 'jpg';
        const cleanSlideId = (slideId || 'slide').replace(/[^a-zA-Z0-9-]/g, '').slice(0, 40);
        const filename = `gen-${track}-${cleanSlideId}-${Date.now()}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from('curriculum-images')
          .upload(`generated/${filename}`, blob, { contentType, upsert: true });

        if (!uploadError) {
          const { data: pubData } = supabase.storage
            .from('curriculum-images')
            .getPublicUrl(`generated/${filename}`);
          return pubData.publicUrl;
        }
        console.warn('Supabase upload error:', uploadError.message);
      }
    } catch (e) {
      console.warn('commitSlideImage failed, using direct URL:', e);
    }
    return imageUrl;
  }

  public static async generateBatchForClass(
    slides: ClassSlide[],
    track: string,
    styleId: string,
    onProgress?: (current: number, total: number, slideTitle: string) => void
  ): Promise<Map<string, string>> {
    const results = new Map<string, string>();
    const visualSlides = slides.filter(s => {
      const typeCfg = SLIDE_TYPE_REGISTRY[s.type || 'standard'];
      return typeCfg?.supportsImage !== false && s.type !== 'spinning-wheel' && s.type !== 'emoji-game';
    });
    const total = visualSlides.length;
    for (let i = 0; i < total; i++) {
      const s = visualSlides[i];
      onProgress?.(i + 1, total, s.title);
      try {
        const res = await this.generateSlideImage(s, track, styleId);
        const permUrl = await this.commitSlideImage(res.imageUrl, s.id, track);
        results.set(s.id, permUrl);
        await new Promise(r => setTimeout(r, 800));
      } catch (e) {
        console.error(`Batch generation failed for slide ${s.id}:`, e);
      }
    }
    return results;
  }
}
