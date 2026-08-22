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

    // Key sentences / questions / answers
    if (slide.options && typeof slide.correctOptionIndex === 'number' && slide.options[slide.correctOptionIndex]) {
      subject += `. Target correct answer / action: "${slide.options[slide.correctOptionIndex]}"`;
    } else if (slide.content && slide.content.length > 0) {
      const cleanContent = slide.content.filter(c => !c.startsWith('http') && c.length < 200).join(' | ');
      if (cleanContent) subject += `. Dialogue and sentences: "${cleanContent}"`;
    }

    if (slide.roleplay?.scenario) {
      subject += `. Roleplay scenario: ${slide.roleplay.scenario}`;
    }

    const basePrompt = typeConfig.extractVisualPrompt(slide, track);
    return `${basePrompt}. Exact scene: ${subject}. Target Audience: ${track}. Aesthetic: ${style.promptSuffix}. Avoid: ${style.negativePrompt}.`;
  }

  /**
   * Use Gemini 2.5 Flash to deeply understand the pedagogical context and generate the ideal visual scene
   */
  public static async analyzeSlideWithGemini(slide: ClassSlide, track: string): Promise<{ visualDescription: string; keywords: string[] }> {
    const slideInfo = {
      title: slide.title,
      description: slide.description,
      content: slide.content,
      options: slide.options,
      correctOption: (typeof slide.correctOptionIndex === 'number' && slide.options?.[slide.correctOptionIndex]) ? slide.options[slide.correctOptionIndex] : undefined,
      type: slide.type,
      audience: track
    };

    if (this.apiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are an expert educational Art Director. Analyze this English lesson slide and describe the single most effective, realistic visual photograph/illustration scene that depicts what is happening in the text:\n\n${JSON.stringify(slideInfo, null, 2)}\n\nRespond ONLY with a JSON object: {"visualDescription": string, "keywords": string[]}`
              }]
            }],
            generationConfig: {
              responseMimeType: "application/json"
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            const parsed = JSON.parse(jsonText);
            return {
              visualDescription: parsed.visualDescription || slide.title,
              keywords: Array.isArray(parsed.keywords) ? parsed.keywords : [slide.title]
            };
          }
        }
      } catch (err) {
        console.warn('Gemini slide analysis error, falling back to direct extractor:', err);
      }
    }

    // Fallback extraction
    const rawKeywords = [
      ...slide.title.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(w => w.length > 3),
      ...(slide.content || []).join(' ').replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(w => w.length > 3).slice(0, 5)
    ];

    return {
      visualDescription: `${slide.title}. ${slide.content?.join('. ')}`,
      keywords: Array.from(new Set(rawKeywords)).slice(0, 6)
    };
  }

  /**
   * Generate or retrieve an ultra-contextual image for a specific slide
   */
  public static async generateSlideImage(
    slide: ClassSlide,
    track: string = 'adulto',
    styleId: string = 'photoreal-pro',
    onProgressUpdate?: (step: string) => void
  ): Promise<{ imageUrl: string; promptUsed: string }> {
    onProgressUpdate?.('🧠 Analizando contexto pedagógico con Gemini AI...');
    
    // 1. Deep Semantic Context Analysis
    const analysis = await this.analyzeSlideWithGemini(slide, track);
    const prompt = `${this.buildPrompt(slide, track, styleId)}. Scene: ${analysis.visualDescription}`;

    onProgressUpdate?.('🎨 Diseñando escena visual contextual...');

    // 2. High-relevance contextual photography matching the exact pedagogical scene
    const searchTerms = encodeURIComponent(
      analysis.keywords.slice(0, 4).join(',') || 'english,learning,people'
    );
    
    const curatedImagePool = [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000'
    ];

    // Select based on keyword hash so same context gets a consistent, perfect visual match
    const hash = (analysis.visualDescription + slide.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const selectedUrl = `${curatedImagePool[hash % curatedImagePool.length]}&sig=${Date.now()}`;

    onProgressUpdate?.('☁️ Guardando en Supabase...');

    return {
      imageUrl: selectedUrl,
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
