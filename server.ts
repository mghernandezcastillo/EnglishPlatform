import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

const isProd = process.env.NODE_ENV === 'production';
dotenv.config({ path: '.env.local' });
dotenv.config();

app.use(express.json({ limit: '12mb' }));

app.post('/api/speaking-assessment', async (req, res) => {
  try {
    const { expectedText, audioBase64, mimeType } = req.body || {};
    if (!expectedText || !audioBase64 || !mimeType) {
      res.status(400).json({ error: 'Missing expectedText, audioBase64, or mimeType.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are an English pronunciation coach.
Evaluate this student's reading against the expected text.
Return only compact JSON with this exact shape:
{"score":0,"transcript":"","correctWords":[],"missedWords":[],"changedWords":[],"extraWords":[],"feedback":"","tips":[]}
Rules:
- Only grade words that are clearly audible in the audio.
- If the audio is silent, unclear, or contains no readable English speech, return score 0 and transcript "".
- Do not assume the student read the expected text.
- score is 0-100.
- transcript is what the student appears to have said.
- arrays contain short strings only, max 8 items each.
- feedback max 18 words.
- tips max 4 items, max 10 words each.
Expected text: ${expectedText}`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_SPEAKING_MODEL || 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType, data: audioBase64 } },
          ],
        },
      ] as any,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const text = response.text || '{}';
    const parsed = JSON.parse(text);
    res.json({ result: parsed });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Unable to analyze audio.' });
  }
});

app.post('/api/free-speaking-assessment', async (req, res) => {
  try {
    const { question, mode, audioBase64, mimeType } = req.body || {};
    if (!question || !audioBase64 || !mimeType) {
      res.status(400).json({ error: 'Missing question, audioBase64, or mimeType.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = mode === 'reading'
      ? `You are a specialized English reading-practice assistant.
The student is reading the expected text aloud. Listen only for that reading task.
Return only compact JSON with this exact shape:
{"transcript":"","summary":"","strengths":[],"corrections":[],"grammarNotes":[],"vocabularySuggestions":[],"teacherNextSteps":[],"score":0}
Rules:
- Only analyze clearly audible speech.
- If audio is silent or unclear, transcript "", score 0, and explain in Spanish that no clear reading was detected.
- transcript: what the student read, cleaned but faithful.
- summary: Spanish reading feedback, max 35 words.
- strengths: max 4 short Spanish items about clear pronunciation, rhythm, or accurate words.
- corrections: max 6 short Spanish items. Focus on misread words, skipped words, added words, pronunciation, stress, and fluency.
- grammarNotes: keep empty unless the student changed the grammar while reading.
- vocabularySuggestions: max 4 English words from the text that need repetition.
- teacherNextSteps: max 3 concrete Spanish actions for the tutor.
- score: 0-100 for accuracy against the expected text, pronunciation, rhythm, and clarity.
- Do not evaluate free conversation, ideas, creativity, or grammar beyond the reading.
Expected reading text: ${question}`
      : `You are an expert English teacher evaluating a student's spoken answer.
Return only compact JSON with this exact shape:
{"transcript":"","summary":"","strengths":[],"corrections":[],"grammarNotes":[],"vocabularySuggestions":[],"teacherNextSteps":[],"score":0}
Rules:
- Only analyze clearly audible speech.
- If audio is silent or unclear, transcript "", score 0, and explain that no clear answer was detected.
- transcript: what the student said, cleaned but faithful.
- summary: Spanish summary, max 45 words.
- strengths: max 5 short Spanish items.
- corrections: max 6 short Spanish items with corrected English when useful.
- grammarNotes: max 5 short Spanish items.
- vocabularySuggestions: max 6 useful English phrases or words.
- teacherNextSteps: max 4 concrete Spanish actions.
- score: 0-100 for communication, grammar, vocabulary, and clarity.
Teacher question: ${question}`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_SPEAKING_MODEL || 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType, data: audioBase64 } },
          ],
        },
      ] as any,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.25,
      },
    });

    res.json({ result: JSON.parse(response.text || '{}') });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Unable to analyze free speaking audio.' });
  }
});

app.post('/api/enrich-vocabulary', async (req, res) => {
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
      res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
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
    console.error('Error enriching vocabulary in server:', error);
    res.status(500).json({ error: error?.message || 'Error al enriquecer vocabulario con IA.' });
  }
});

async function startServer() {
  let vite: any;
  if (!isProd) {
    const { createServer } = await import('vite');
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  app.get('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template: string;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(process.cwd(), 'dist', 'index.html'), 'utf-8');
      }

      // Dynamic Meta Tags Replacement
      let title = "Maven English";
      let description = "Accede a tu plataforma de clases, evaluaciones y recursos de inglés.";

      const isKid = req.query.type === 'niño' || url.includes('type=ni%C3%B1o') || url.includes('type=niño');
      const brandName = isKid ? "Maven English for kids" : "Maven English";

      if (url.startsWith('/story-decoder')) {
        title = `Story Decoder - ${brandName}`;
        description = "Historias interactivas para construir frases y reconocer estructuras del inglés.";
      } else if (url.startsWith('/verbs/arena')) {
        title = `AI Verb Arena - ${brandName}`;
        description = "Juego de trivia infinita para practicar verbos, phrasal verbs e idioms.";
      } else if (url.startsWith('/verbs')) {
        title = `Verb Guide - ${brandName}`;
        description = "Guía interactiva de verbos, phrasal verbs e idioms con buscador y PDF descargable.";
      } else if (req.query.evaluacion || url.includes('evaluacion=')) {
        title = `Evaluación Virtual - ${brandName}`;
        description = "Accede a tu evaluación estructurada. Completa el cuestionario y revisa tus resultados.";
      } else if (req.query.studentId || url.includes('studentId=')) {
        title = `Acceso de Estudiante - ${brandName}`;
        description = "Ingresa a tu portal de estudiante para revisar tu progreso y lecciones.";
      } else if (isKid) {
        title = brandName;
      }

      // Replace in HTML
      const html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
