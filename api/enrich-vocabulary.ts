import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  try {
    const { terms, rawText, sourceNote } = req.body || {};

    let termList: string[] = [];
    if (Array.isArray(terms) && terms.length > 0) {
      termList = terms.map(t => String(t).trim()).filter(Boolean);
    } else if (typeof rawText === 'string' && rawText.trim()) {
      termList = rawText
        .split(/[\n,;]+/)
        .map(t => t.trim().replace(/^[-*•\d.)\s]+/, ''))
        .filter(t => t.length > 0);
    }

    if (termList.length === 0) {
      res.status(400).json({ error: 'Debes proporcionar al menos un término o frase en inglés.' });
      return;
    }

    termList = termList.slice(0, 10);

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      res.status(500).json({ error: 'GEMINI_API_KEY no está configurada en las variables de entorno.' });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are a world-class ESL lexicographer and English teacher for Spanish-speaking students.
Analyze the following English terms/phrases and generate rich, structured pedagogical data.

Terms to analyze:
${JSON.stringify(termList)}

CRITICAL INSTRUCTIONS:
1. For each term, determine its type: "phrasal_verb", "idiom", "expression", "word", "slang", or "collocation".
2. Multi-meaning evaluation:
   - If it is a phrasal verb, idiom, or multi-use word with distinct primary meanings in daily life (e.g. "take off" = despegar / quitarse ropa / tener éxito repentino; "break down" = descomponerse / colapsar emocionalmente / desglosar), set "isMultiMeaning": true and include 2 to 4 distinct meanings.
   - If it has only one primary meaning, set "isMultiMeaning": false and provide exactly 1 meaning.
3. For EVERY meaning in "meanings":
   - "meaningNumber": 1, 2, etc.
   - "meaningLabel": Short Spanish descriptor (e.g. "Despegar (avión)", "Quitarse (prenda)", "Descomponerse (máquina)").
   - "definitionEs": Clear, high-yield explanation in Spanish.
   - "definitionEn": Natural, concise definition in English.
   - "usageTip": Practical tip in Spanish about prepositions, formality, or separability (max 15 words).
   - "contextExamples": MUST contain EXACTLY 3 natural, everyday sentences showing THIS specific meaning.
     Each example MUST have:
     - "en": Complete, natural English sentence.
     - "es": Natural Spanish translation.
     - "cloze": The English sentence where the target term (or conjugated form) is replaced by "[_____]".
     - "highlightWord": The conjugated/inflected form used (e.g. "took off", "break down").
4. "level": CEFR level estimate ("A1", "A2", "B1", "B2", "C1", "C2").
5. "ipa": Approximate IPA phonetic pronunciation (e.g. "/teɪk ɒf/").

Return ONLY valid JSON matching this exact array structure:
[
  {
    "term": "take off",
    "type": "phrasal_verb",
    "ipa": "/teɪk ɒf/",
    "level": "A2",
    "isMultiMeaning": true,
    "meanings": [
      {
        "meaningNumber": 1,
        "meaningLabel": "Despegar (avión / transporte)",
        "definitionEs": "Cuando un avión u otra aeronave abandona el suelo y empieza a volar.",
        "definitionEn": "To leave the ground and begin to fly.",
        "usageTip": "Intransitivo: no lleva objeto directo.",
        "contextExamples": [
          {
            "en": "The flight will take off in ten minutes.",
            "es": "El vuelo despegará en diez minutos.",
            "cloze": "The flight will [_____] in ten minutes.",
            "highlightWord": "take off"
          },
          {
            "en": "We watched the heavy planes taking off into the clouds.",
            "es": "Observamos cómo los pesados aviones despegaban hacia las nubes.",
            "cloze": "We watched the heavy planes [_____] into the clouds.",
            "highlightWord": "taking off"
          },
          {
            "en": "Due to bad weather, the aircraft couldn't take off on time.",
            "es": "Debido al mal tiempo, el avión no pudo despegar a tiempo.",
            "cloze": "Due to bad weather, the aircraft couldn't [_____] on time.",
            "highlightWord": "take off"
          }
        ]
      }
    ]
  }
]`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_SPEAKING_MODEL || 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const responseText = response.text || '[]';
    let parsedItems = JSON.parse(responseText);
    if (!Array.isArray(parsedItems)) {
      if (parsedItems && typeof parsedItems === 'object') {
        parsedItems = [parsedItems];
      } else {
        parsedItems = [];
      }
    }

    const enriched = parsedItems.map((item: any) => ({
      ...item,
      sourceNote: sourceNote || 'Añadido libremente',
    }));

    res.json({ success: true, items: enriched });
  } catch (error: any) {
    console.error('Error enriching vocabulary:', error);
    res.status(500).json({ error: error?.message || 'Error al enriquecer vocabulario con IA.' });
  }
}
