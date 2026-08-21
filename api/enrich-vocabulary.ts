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
Analyze the following raw input terms or sentences entered by a student and generate structured pedagogical data.

Raw input items from user:
${JSON.stringify(termList)}

CRITICAL INTELLIGENCE & EXTRACTION RULES:
1. CORE TARGET EXTRACTION:
   - If the user entered a whole sentence or phrase clause (e.g. "I'm trying to find out", "She decided to call it a day", "He has to get over it"), DO NOT set the entire sentence as the "term".
   - Extract the TRUE learning element / base lemma as "term" (e.g. "find out", "call it a day", "get over").
   - Then USE the user's original sentence (completed naturally if it was cut off, e.g. "I'm trying to find out the truth.") as Example #1 for the matching meaning!

2. TYPE CLASSIFICATION:
   - "phrasal_verb", "idiom", "expression", "collocation", "word", or "slang".

3. MULTI-MEANING & COMPREHENSIVE COVERAGE:
   - If the term has multiple common meanings in everyday English (e.g. "take off", "break down", "look up", "get over", "set up", "run into"), you MUST include ALL distinct everyday meanings (2, 3, 4, or up to 5 meanings). Do not artificially limit or skip real meanings.
   - For EACH meaning:
     * "meaningNumber": 1, 2, 3...
     * "meaningLabel": Short Spanish descriptor (e.g. "Descubrir / Enterarse de algo", "Averiguar información").
     * "definitionEs": Clear, high-yield explanation in Spanish.
     * "definitionEn": Natural, concise definition in English.
     * "usageTip": Practical tip in Spanish (transitivity, separability, register).
     * "contextExamples": MUST contain 3 (or 4) realistic everyday sentences showing THIS specific meaning.
       Each example:
       - "en": Natural English sentence.
       - "es": Natural Spanish translation.
       - "cloze": Sentence with target term replaced by "[_____]".
       - "highlightWord": Conjugated/inflected form used.

4. LEVEL & IPA:
   - "level": CEFR level ("A1", "A2", "B1", "B2", "C1", "C2").
   - "ipa": Phonetic transcription (e.g. "/faɪnd aʊt/").

5. LATIN AMERICAN / COLOMBIAN SPANISH STRICT REQUIREMENT:
   - ALL Spanish definitions, labels, tips, and translations MUST be in natural Latin American Spanish (Colombia / Latin America).
   - STRICTLY FORBIDDEN: Do NOT use Spain/Castilian regionalisms or Spain-specific slang (NEVER use 'apañárselas', 'apanyárselas', 'molar', 'guay', 'chaval', 'coche', 'ordenador', 'aparcar', 'vosotros', etc.).
   - Use standard, clear Latin American expressions: e.g. for "get by" use "Defenderse / Arreglárselas / Sobrevivir con lo justo / Salir adelante", use "carro / auto", "computador", "lentes".

Return ONLY valid JSON matching this exact structure:
[
  {
    "term": "find out",
    "type": "phrasal_verb",
    "ipa": "/faɪnd aʊt/",
    "level": "A2",
    "isMultiMeaning": true,
    "meanings": [
      {
        "meaningNumber": 1,
        "meaningLabel": "Descubrir / Enterarse de una información",
        "definitionEs": "Obtener conocimiento sobre algo o enterarse de un hecho que no sabías.",
        "definitionEn": "To discover a fact or obtain information about something.",
        "usageTip": "Muy común con cláusulas: find out what/who/how o find out about.",
        "contextExamples": [
          {
            "en": "I am trying to find out what really happened yesterday.",
            "es": "Estoy intentando averiguar qué pasó realmente ayer.",
            "cloze": "I am trying to [_____] what really happened yesterday.",
            "highlightWord": "find out"
          },
          {
            "en": "She was shocked when she found out about the surprise party.",
            "es": "Se sorprendió cuando se enteró de la fiesta sorpresa.",
            "cloze": "She was shocked when she [_____] about the surprise party.",
            "highlightWord": "found out"
          },
          {
            "en": "We will find out the exam results tomorrow morning.",
            "es": "Nos enteraremos de los resultados del examen mañana por la mañana.",
            "cloze": "We will [_____] the exam results tomorrow morning.",
            "highlightWord": "find out"
          }
        ]
      },
      {
        "meaningNumber": 2,
        "meaningLabel": "Descubrir a alguien en una mentira / falta",
        "definitionEs": "Atrapar a alguien que estaba engañando o cometiendo un error secreto.",
        "definitionEn": "To discover that someone has been dishonest or behaving badly.",
        "usageTip": "Usualmente en voz pasiva: be found out.",
        "contextExamples": [
          {
            "en": "He cheated on the test and was soon found out by the teacher.",
            "es": "Hizo trampa en el examen y pronto fue descubierto por el profesor.",
            "cloze": "He cheated on the test and was soon [_____] by the teacher.",
            "highlightWord": "found out"
          },
          {
            "en": "If you keep lying, you will definitely be found out.",
            "es": "Si sigues mintiendo, definitivamente serás descubierto.",
            "cloze": "If you keep lying, you will definitely [_____].",
            "highlightWord": "be found out"
          },
          {
            "en": "The fraudster operated for months before being found out.",
            "es": "El estafador operó durante meses antes de ser descubierto.",
            "cloze": "The fraudster operated for months before [_____].",
            "highlightWord": "being found out"
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
