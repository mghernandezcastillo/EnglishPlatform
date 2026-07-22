import { structureRoadmap } from './structureMode';

export type StructureAssessmentQuestion = {
  id: string;
  blockId: string;
  blockTitle: string;
  topicId: string;
  topicTitle: string;
  variation: 'recognition' | 'function' | 'error-check';
  question: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackIncorrect: string;
};

const optionPool = structureRoadmap.flatMap((module) => module.lessons.map((lesson) => lesson.title));

function pickDistractors(topicTitle: string, offset: number) {
  const pool = optionPool.filter((title) => title !== topicTitle);
  return [pool[offset % pool.length], pool[(offset + 17) % pool.length]];
}

function orderedOptions(correct: string, distractors: string[], seed: number) {
  const position = seed % 3;
  const options = [...distractors];
  options.splice(position, 0, correct);
  return { options, correctIndex: position };
}

function makeQuestionText(title: string, variation: StructureAssessmentQuestion['variation']) {
  if (variation === 'recognition') {
    return `Which structure should the student use for this target: "${title}"?`;
  }
  if (variation === 'function') {
    return `What is the main grammar focus of "${title}"?`;
  }
  return `A student is reviewing "${title}". What should they check first?`;
}

function makeCorrectOption(title: string, variation: StructureAssessmentQuestion['variation']) {
  if (variation === 'recognition') return title;
  if (variation === 'function') return `Form and meaning of ${title}`;
  return `Word order, auxiliary choice, and verb form in ${title}`;
}

function makeDistractorOptions(topicTitle: string, variation: StructureAssessmentQuestion['variation'], offset: number) {
  const [a, b] = pickDistractors(topicTitle, offset);
  if (variation === 'recognition') return [a, b];
  if (variation === 'function') return [`Only vocabulary from ${a}`, `Pronunciation only, without structure`];
  return [`Translate every word before choosing the structure`, `Ignore auxiliaries and focus only on nouns`];
}

export function createStructureAssessmentQuestions(blockId?: string): StructureAssessmentQuestion[] {
  const modules = blockId ? structureRoadmap.filter((module) => module.id === blockId) : structureRoadmap;
  const questions: StructureAssessmentQuestion[] = [];

  modules.forEach((module, moduleIndex) => {
    module.lessons.forEach((lesson, lessonIndex) => {
      (['recognition', 'function', 'error-check'] as const).forEach((variation, variationIndex) => {
        const seed = moduleIndex * 31 + lessonIndex * 7 + variationIndex;
        const correct = makeCorrectOption(lesson.title, variation);
        const distractors = makeDistractorOptions(lesson.title, variation, seed + 3);
        const { options, correctIndex } = orderedOptions(correct, distractors, seed);

        questions.push({
          id: `${lesson.id}-${variation}`,
          blockId: module.id,
          blockTitle: module.title,
          topicId: lesson.id,
          topicTitle: lesson.title,
          variation,
          question: makeQuestionText(lesson.title, variation),
          options,
          correctIndex,
          feedbackCorrect: `Correct. This item belongs to ${lesson.title} and checks the ${variation.replace('-', ' ')} variation.`,
          feedbackIncorrect: `Review ${lesson.title}. Focus on meaning, word order, auxiliaries, and the exact verb form before answering.`
        });
      });
    });
  });

  return questions;
}

export const STRUCTURE_ASSESSMENT_TOTAL_QUESTIONS = createStructureAssessmentQuestions().length;
export const STRUCTURE_ASSESSMENT_TIME_SECONDS = 60 * 60;
