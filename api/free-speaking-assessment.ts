import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  try {
    const { question, audioBase64, mimeType } = req.body || {};
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
    const prompt = `You are an expert English teacher evaluating a student's spoken answer.
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

    res.status(200).json({ result: JSON.parse(response.text || '{}') });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Unable to analyze free speaking audio.' });
  }
}
