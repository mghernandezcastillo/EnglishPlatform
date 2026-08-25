export interface QuickTranslateResult {
  original: string;
  translation: string;
  partOfSpeech?: string;
  synonymsOrAlternatives?: string[];
  detectedLanguage?: string;
}

// In-memory cache for ultra-fast instant lookups during the session
const translationCache = new Map<string, QuickTranslateResult>();

/**
 * Common high-frequency idioms, compound words, and phrasal verbs
 * for instant 0ms offline fallback or enrichment.
 */
const KNOWN_PHRASES: Record<string, { translation: string; pos: string }> = {
  'high-top': { translation: 'de caña alta / tenis de bota', pos: 'adjective / noun' },
  'high-tops': { translation: 'tenis de bota alta', pos: 'noun' },
  'high top': { translation: 'de caña alta / tenis de bota', pos: 'adjective / noun' },
  'high tops': { translation: 'tenis de bota alta', pos: 'noun' },
  'low-top': { translation: 'de caña baja', pos: 'adjective' },
  'low-tops': { translation: 'tenis de caña baja', pos: 'noun' },
  'low top': { translation: 'de caña baja', pos: 'adjective' },
  'low tops': { translation: 'tenis de caña baja', pos: 'noun' },
  'piece of cake': { translation: 'pan comido / muy fácil', pos: 'idiom' },
  'break a leg': { translation: '¡buena suerte! (en el escenario)', pos: 'idiom' },
  'break the ice': { translation: 'romper el hielo', pos: 'idiom' },
  'under the weather': { translation: 'indispuesto / un poco enfermo', pos: 'idiom' },
  'call it a day': { translation: 'dar el día por terminado', pos: 'idiom' },
  'bite the bullet': { translation: 'hacer de tripas corazón / aguantar', pos: 'idiom' },
  'hit the books': { translation: 'ponerse a estudiar', pos: 'idiom' },
  'cut corners': { translation: 'tomar atajos / ahorrar costos', pos: 'idiom' },
  'spill the beans': { translation: 'revelar el secreto / soltar la sopa', pos: 'idiom' },
  'take off': { translation: 'despegar / quitarse (ropa) / tener éxito', pos: 'phrasal verb' },
  'look up to': { translation: 'admirar a alguien', pos: 'phrasal verb' },
  'get over': { translation: 'superar / recuperarse de', pos: 'phrasal verb' },
  'figure out': { translation: 'descubrir / entender / resolver', pos: 'phrasal verb' },
  'find out': { translation: 'enterarse / averiguar', pos: 'phrasal verb' },
  'turn down': { translation: 'rechazar / bajar el volumen', pos: 'phrasal verb' },
  'give up': { translation: 'rendirse / abandonar', pos: 'phrasal verb' },
  'run into': { translation: 'tropezarse con / encontrarse por casualidad', pos: 'phrasal verb' },
  'catch up': { translation: 'ponerse al día', pos: 'phrasal verb' },
  'show off': { translation: 'presumir / lucirse', pos: 'phrasal verb' },
  'look forward to': { translation: 'esperar con ansias / tener muchas ganas de', pos: 'phrasal verb' },
  'state of the art': { translation: 'de última generación / vanguardista', pos: 'adjective' },
  'high-tech': { translation: 'de alta tecnología', pos: 'adjective' },
  'hands-on': { translation: 'práctico / interactivo', pos: 'adjective' },
  'so-so': { translation: 'más o menos / regular', pos: 'expression' },
};

export async function quickTranslate(rawText: string): Promise<QuickTranslateResult> {
  const text = rawText.trim();
  if (!text) {
    return { original: '', translation: '' };
  }

  const normalizedKey = text.toLowerCase().replace(/[.,!?;:"'()]/g, '').trim();

  // 1. Check local cache
  if (translationCache.has(normalizedKey)) {
    return translationCache.get(normalizedKey)!;
  }

  // 2. Check offline dictionary for exact idiom/phrasal/compound match
  if (KNOWN_PHRASES[normalizedKey]) {
    const known = KNOWN_PHRASES[normalizedKey];
    const res: QuickTranslateResult = {
      original: text,
      translation: known.translation,
      partOfSpeech: known.pos,
    };
    translationCache.set(normalizedKey, res);
    return res;
  }

  // 3. Fast Google GTX Translation API (handles single words, compound words, idioms, sentences)
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&dt=bd&dt=rm&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      
      // Extract translated text chunks
      let translatedText = '';
      if (Array.isArray(data[0])) {
        translatedText = data[0].map((item: any) => item[0]).filter(Boolean).join(' ');
      }

      // Extract dictionary part of speech & alternatives if available
      let partOfSpeech: string | undefined;
      const alternatives: string[] = [];

      if (Array.isArray(data[1])) {
        // data[1] contains [[pos, [words...]], ...]
        const posList = data[1].map((entry: any) => entry[0]).filter(Boolean);
        if (posList.length > 0) {
          partOfSpeech = posList.join(', ');
        }

        // Collect up to 3 alternative translations
        for (const entry of data[1]) {
          if (Array.isArray(entry[1])) {
            for (const alt of entry[1]) {
              if (alt && alt.toLowerCase() !== translatedText.toLowerCase() && !alternatives.includes(alt)) {
                alternatives.push(alt);
              }
              if (alternatives.length >= 3) break;
            }
          }
          if (alternatives.length >= 3) break;
        }
      }

      // Heuristic for Phrasal Verbs & Idioms
      if (!partOfSpeech) {
        const wordsCount = text.split(/\s+/).length;
        if (wordsCount >= 2 && wordsCount <= 4) {
          const particles = ['up', 'down', 'in', 'out', 'on', 'off', 'over', 'away', 'back', 'into', 'with', 'for', 'through', 'to'];
          const lastWords = text.toLowerCase().split(/\s+/).slice(1);
          if (lastWords.some(w => particles.includes(w))) {
            partOfSpeech = 'phrasal verb / expresión';
          }
        }
      }

      if (translatedText) {
        const result: QuickTranslateResult = {
          original: text,
          translation: translatedText,
          partOfSpeech,
          synonymsOrAlternatives: alternatives.length > 0 ? alternatives : undefined,
          detectedLanguage: data[2] || 'en',
        };
        translationCache.set(normalizedKey, result);
        return result;
      }
    }
  } catch (err) {
    console.warn('Google GTX translation failed, trying MyMemory fallback...', err);
  }

  // 4. Fallback to MyMemory API
  try {
    const fallbackUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|es`;
    const fbRes = await fetch(fallbackUrl);
    if (fbRes.ok) {
      const fbData = await fbRes.json();
      const translation = fbData.responseData?.translatedText;
      if (translation) {
        const result: QuickTranslateResult = {
          original: text,
          translation,
        };
        translationCache.set(normalizedKey, result);
        return result;
      }
    }
  } catch (fbErr) {
    console.error('All translation APIs failed:', fbErr);
  }

  // 5. Ultimate fallback if offline and no network response
  return {
    original: text,
    translation: 'Traducción no disponible sin conexión',
  };
}
