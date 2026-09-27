import fs from 'fs';
import { createServer } from 'vite';

async function auditOralQuestions() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { curriculumTeensLevels } = await server.ssrLoadModule('/src/data/curriculumTeens.ts');
  const { curriculumTeensStudioLevels } = await server.ssrLoadModule('/src/data/curriculumTeensStudio.ts');
  const { getOralQuestionBank } = await server.ssrLoadModule('/src/data/oralQuestionBanks.ts');

  console.log('=== AUDITING TEENS ORAL EVALUATION VS CLASSES ===\n');

  for (const level of curriculumTeensLevels) {
    console.log(`\n======================================================`);
    console.log(`LEVEL: ${level.id} - ${level.title}`);
    console.log(`======================================================`);

    const studioLevel = curriculumTeensStudioLevels.find(l => l.id === level.id);
    const studioCls = studioLevel ? studioLevel.classes : [];

    console.log(`--- CLASSES IN LEVEL (${studioCls.length}) ---`);
    studioCls.forEach((c, idx) => {
      console.log(`  Class ${idx + 1} (${c.id}): ${c.title}`);
    });

    const bank = getOralQuestionBank(level.id, 'adolescente');
    console.log(`\n--- ORAL QUESTION BANK (${bank.length} questions in getOralQuestionBank) ---`);
    bank.forEach((q, idx) => {
      console.log(`  [Bank #${idx}] Topic: "${q.topic}"`);
      console.log(`      Q: "${q.question}"`);
      if (q.prompt) console.log(`      Prompt: "${q.prompt}"`);
      if (q.sampleAnswer) console.log(`      Expected: "${q.sampleAnswer}"`);
    });

    console.log(`\n--- LIVE ORAL EXAM SLIDES (${level.oralEvaluation?.length || 0} questions selected) ---`);
    level.oralEvaluation?.forEach((q, idx) => {
      console.log(`  [Exam #${idx + 1}] Topic: "${q.topic}" -> Q: "${q.question}"`);
    });

    console.log(`\n--- VIRTUAL EVALUATION QUESTIONS (${level.virtualEvaluation?.length || 0} questions) ---`);
    level.virtualEvaluation?.forEach((q, idx) => {
      console.log(`  [Virtual #${idx + 1}] Q: "${q.question}" -> Correct: "${q.correctAnswer}"`);
    });
  }

  await server.close();
}

auditOralQuestions().catch(err => {
  console.error(err);
  process.exit(1);
});
