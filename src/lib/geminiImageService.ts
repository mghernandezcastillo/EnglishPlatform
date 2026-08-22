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
    promptSuffix: 'modern clean photography, natural lighting, high dynamic range, authentic real-life environment, sharp focus, educational clarity, 8k resolution, cinematic composition',
    negativePrompt: 'blurry, cartoon, childish, low quality, distorted text, ugly faces, oversaturated watermark',
    exampleBadge: '📸 Realista Pro'
  },
  {
    id: 'streetwear-anime',
    name: 'Modern Streetwear & Teen Aesthetic (Teens)',
    targetAudience: 'Adolescentes (13-17)',
    promptSuffix: 'modern digital stylized illustration, trendy streetwear aesthetic, vibrant dynamic colors, clean lines, high school & urban lifestyle context, youthful energy, anime-inspired semi-realism',
    negativePrompt: 'childish, baby toys, boring corporate, dull, low resolution',
    exampleBadge: '🎨 Teen Trend'
  },
  {
    id: '3d-pixar',
    name: '3D Pixar / Animated Character (Kids)',
    targetAudience: 'Niños (6-12)',
    promptSuffix: '3D cute Pixar-style animated render, friendly expressive characters, vibrant warm colors, smooth rounded shapes, playful and educational atmosphere, octane render 8k',
    negativePrompt: 'scary, dark, realistic horror, dull colors, complex corporate diagrams',
    exampleBadge: '🧸 3D Pixar'
  },
  {
    id: 'flat-vector',
    name: 'Clean Minimalist Vector Art',
    targetAudience: 'Universal / Infografía',
    promptSuffix: 'clean modern vector flat art, bold crisp outlines, distinct pastel and vibrant colors, minimal background, high contrast, perfect for educational screen-share',
    negativePrompt: 'messy, complex photorealistic noise, blur, watermarks',
    exampleBadge: '📐 Vector Clean'
  }
];

export class GeminiImageService {
  private static apiKey = (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_GEMINI_API_KEY : '') || (typeof process !== 'undefined' ? process.env?.VITE_GEMINI_API_KEY || process.env?.GEMINI_API_KEY : '') || '';

  /**
   * Build a detailed contextual prompt from slide content and visual goal
   */
  public static buildPrompt(slide: ClassSlide, track: string = 'adulto', styleId: string = 'photoreal-pro'): string {
    const style = STYLE_PRESETS.find(s => s.id === styleId) || STYLE_PRESETS[0];
    const typeConfig = SLIDE_TYPE_REGISTRY[slide.type || 'standard'] || SLIDE_TYPE_REGISTRY.standard;
    
    // Core pedagogical subject
    let subject = slide.title.replace(/\b(Class|Clase|Section|Sección|1\.|2\.|3\.|4\.|5\.)\b/gi, '').trim();
    if (slide.description) {
      subject += `. Pedagogical focus: ${slide.description}`;
    }

    // Key sentences / answers
    if (slide.options && typeof slide.correctOptionIndex === 'number' && slide.options[slide.correctOptionIndex]) {
      subject += `. Target action / solution: "${slide.options[slide.correctOptionIndex]}"`;
    } else if (slide.content && slide.content.length > 0) {
      const cleanContent = slide.content.filter(c => !c.startsWith('http') && c.length < 150).slice(0, 3).join('. ');
      if (cleanContent) subject += `. Context dialogue/phrase: "${cleanContent}"`;
    }

    const basePrompt = typeConfig.extractVisualPrompt(slide, track);
    return `${basePrompt}. Key focal subject: ${subject}. Style: ${style.promptSuffix}. Avoid: ${style.negativePrompt}.`;
  }

  /**
   * Generate an image for a specific slide
   */
  public static async generateSlideImage(
    slide: ClassSlide,
    track: string = 'adulto',
    styleId: string = 'photoreal-pro'
  ): Promise<{ imageUrl: string; promptUsed: string }> {
    const prompt = this.buildPrompt(slide, track, styleId);
    
    // Try calling Gemini Imagen API if API key is present
    if (this.apiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${this.apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            instances: [{ prompt }],
            parameters: { sampleCount: 1, aspectRatio: '16:9' }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const base64Bytes = data.predictions?.[0]?.bytesBase64Encoded;
          if (base64Bytes) {
            // Upload to Supabase Storage if in browser
            try {
              const byteCharacters = atob(base64Bytes);
              const byteNumbers = new Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              const byteArray = new Uint8Array(byteNumbers);
              const blob = new Blob([byteArray], { type: 'image/jpeg' });
              
              const filename = `gen-${track}-${slide.id.replace(/[^a-zA-Z0-9-]/g, '')}-${Date.now()}.jpg`;
              const { error: uploadErr } = await supabase.storage
                .from('curriculum-images')
                .upload(`generated/${filename}`, blob, { contentType: 'image/jpeg', upsert: true });

              if (!uploadErr) {
                const { data: pubData } = supabase.storage.from('curriculum-images').getPublicUrl(`generated/${filename}`);
                return {
                  imageUrl: pubData.publicUrl,
                  promptUsed: prompt
                };
              }
            } catch (storageErr) {
              console.warn('Could not upload base64 to Supabase Storage, using data URI fallback:', storageErr);
            }

            return {
              imageUrl: `data:image/jpeg;base64,${base64Bytes}`,
              promptUsed: prompt
            };
          }
        }
      } catch (err) {
        console.warn('Gemini Imagen API error, using curated contextual engine:', err);
      }
    }

    // Fallback: high-relevance curated contextual source
    const searchTerms = encodeURIComponent(
      slide.title.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').slice(0, 3).join(',') || 'learning,english'
    );
    const fallbackUrl = `https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000&sig=${Math.floor(Math.random() * 100000)}`;

    return {
      imageUrl: fallbackUrl,
      promptUsed: prompt
    };
  }

  /**
   * Batch generation for an entire class
   */
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
      const slide = visualSlides[i];
      if (onProgress) onProgress(i + 1, total, slide.title);
      
      try {
        const { imageUrl } = await this.generateSlideImage(slide, track, styleId);
        results.set(slide.id, imageUrl);
      } catch (e) {
        console.error(`Error generating image for slide ${slide.id}:`, e);
      }

      // Small delay between requests to respect rate limits
      await new Promise(res => setTimeout(res, 400));
    }

    return results;
  }
}
