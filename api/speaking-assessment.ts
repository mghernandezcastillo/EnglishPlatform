import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  try {
    const { expectedText, audioBase64, mimeType } = req.body || {};
    if (!expectedText || !audioBase64 || !mimeType) {
      res.status(400).json({ error: 'Missing expectedText, audioBase64, or mimeType.' });
      return;
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Gemini API key is not configured in production environment variables.' });
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

    const parsed = JSON.parse(response.text || '{}');
    res.status(200).json({ result: parsed });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Unable to analyze audio.' });
  }
}
