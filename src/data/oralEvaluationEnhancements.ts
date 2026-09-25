import { CurriculumLevel, OralQuestion } from '../types';
import { getOralQuestionBank } from './oralQuestionBanks';

const evaluationSelections: Record<string, Record<string, number[]>> = {
  adulto: {
    'basic-zero': [0, 1, 3, 5, 8, 10, 11],
    'basic-1': [0, 2, 3, 7, 9, 10],
    'basic-2': [0, 2, 4, 7, 8, 9],
    'basic-3': [0, 2, 3, 5, 7, 9, 10],
    'basic-4': [0, 2, 4, 6, 7, 9],
    inter: [0, 1, 3, 5, 7, 9, 10],
    advanced: [0, 1, 2, 3, 5, 7, 9],
    masters: [0, 3, 4, 5, 6, 7, 9],
  },
  adolescente: {
    'teens-basic-zero': [0, 1, 3, 4, 5, 7, 10, 14],
    'teens-basic-1': [0, 1, 2, 4, 8, 9, 11],
    'teens-basic-2': [0, 1, 3, 5, 7, 9],
    'teens-basic-3': [0, 1, 2, 4, 5, 7, 9],
    'teens-basic-4': [0, 1, 2, 4, 7, 8, 9],
    'teens-inter': [0, 1, 2, 4, 6, 8, 9],
    'teens-advanced': [0, 1, 2, 3, 5, 7, 9],
    'teens-elite': [0, 1, 2, 4, 6, 8, 9],
    'teens-masters': [0, 1, 2, 4, 6, 8, 9],
  },
  niño: {
    'basic-zero': [0, 1, 3, 4, 8],
    'basic-explorer': [0, 2, 3, 5, 8],
    'basic-adventurer': [0, 1, 3, 6, 8],
    'basic-champion': [0, 1, 3, 6, 9],
  },
};

export function enhanceOralEvaluations(levels: CurriculumLevel[], studentType: string) {
  for (const level of levels) {
    if (!level.oralEvaluation?.length) continue;

    const bank = getOralQuestionBank(level.id, studentType);
    const selectedIndexes = evaluationSelections[studentType]?.[level.id];
    if (selectedIndexes?.length) {
      level.oralEvaluation = selectedIndexes
        .map((index) => bank[index])
        .filter((question): question is OralQuestion => Boolean(question));
      continue;
    }

    const finalTask = bank.at(-1);
    if (!finalTask) continue;

    const cleanedQuestions = level.oralEvaluation.filter((question) =>
      question.question.trim().toLowerCase() !== 'ask and answer basic personal information questions.'
    );
    const existingFinalIndex = cleanedQuestions.findIndex((question) =>
      question.topic.toUpperCase().includes('FINAL')
    );

    if (existingFinalIndex >= 0) {
      cleanedQuestions[existingFinalIndex] = finalTask;
    } else {
      cleanedQuestions.push(finalTask);
    }

    level.oralEvaluation = cleanedQuestions;
  }
}

export function removeDecorativeEvaluationImages(levels: CurriculumLevel[]) {
  for (const level of levels) {
    level.virtualEvaluation = level.virtualEvaluation?.map(({ imageUrl: _imageUrl, ...question }) => question);
  }
}
