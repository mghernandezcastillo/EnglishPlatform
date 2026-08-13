import { createServer } from 'vite';

const server = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

const errors = [];

try {
  const { getCurriculumForType } = await server.ssrLoadModule('/src/data/curriculumSelector.ts');
  const { getOralQuestionBank } = await server.ssrLoadModule('/src/data/oralQuestionBanks.ts');
  const audiences = ['adulto', 'adolescente', 'niño'];

  for (const audience of audiences) {
    const levels = getCurriculumForType(audience);
    for (const level of levels) {
      const virtualQuestions = level.virtualEvaluation || [];
      const ids = new Set();

      for (const [index, question] of virtualQuestions.entries()) {
        const label = `${audience}/${level.id}/virtual-${index + 1}`;
        if (!question.id?.trim()) errors.push(`${label}: falta id.`);
        if (ids.has(question.id)) errors.push(`${label}: id duplicado (${question.id}).`);
        ids.add(question.id);
        if (!question.question?.trim()) errors.push(`${label}: falta la pregunta.`);
        if (/which response shows good communication/i.test(question.question)) {
          errors.push(`${label}: la formulación es demasiado genérica.`);
        }
        if (!Array.isArray(question.options) || question.options.length !== 3) {
          errors.push(`${label}: debe tener exactamente tres opciones.`);
        } else if (!question.options.includes(question.correctAnswer)) {
          errors.push(`${label}: la respuesta correcta no está entre las opciones.`);
        } else if (question.options.some((option) => /^(option [abc]|wrong option)$/i.test(option.trim()))) {
          errors.push(`${label}: contiene opciones de relleno.`);
        }
        if (question.type === 'listening' && !question.audioText?.trim()) {
          errors.push(`${label}: la pregunta auditiva no tiene audioText.`);
        }
        if (question.imageUrl) {
          errors.push(`${label}: conserva una imagen decorativa que puede confundir la respuesta.`);
        }
        if (/look at (the )?(picture|image)|according to (the )?(picture|image)/i.test(question.question)) {
          errors.push(`${label}: depende de una imagen, pero las imágenes decorativas están desactivadas.`);
        }
      }

      const oralQuestions = level.oralEvaluation || [];
      if (!oralQuestions.some((question) => question.topic.toUpperCase().includes('FINAL'))) {
        errors.push(`${audience}/${level.id}: falta la tarea oral final integrada.`);
      }
      if (oralQuestions.some((question) => !question.question?.trim() || !question.topic?.trim())) {
        errors.push(`${audience}/${level.id}: hay una pregunta oral incompleta.`);
      }

      const bank = getOralQuestionBank(level.id, audience);
      if (bank.length < 8) {
        errors.push(`${audience}/${level.id}: el banco oral debe tener al menos ocho preguntas.`);
      }
    }
  }

  if (errors.length) {
    console.error(`Auditoría fallida con ${errors.length} problema(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
  } else {
    console.log('Auditoría de evaluaciones superada: adultos, adolescentes y niños.');
  }
} finally {
  await server.close();
}
