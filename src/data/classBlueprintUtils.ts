import { CurriculumClass, ClassSlide } from '../types';

export type QuizBlueprint = {
  prompt: string;
  options: [string, string, string];
  correctOptionIndex: 0 | 1 | 2;
};

export type EmojiBlueprint = {
  prompt: string;
  content: [string];
  options: [string, string, string];
  correctOptionIndex: 0 | 1 | 2;
};

export type BlueprintPalette = {
  warmup: string;
  grammar: string;
  practice: string;
  production: string;
  wrap: string;
};

export type BlueprintClassSpec = {
  id: string;
  title: string;
  description: string;
  objective: string;
  duration?: string;
  welcome: {
    title: string;
    content: [string, string, string?];
    imageUrl: string;
  };
  warmup: {
    title: string;
    content: [string, string, string?];
  };
  goals: [string, string, string];
  grammarSlides: [
    { title: string; content: string[]; imageUrl?: string },
    { title: string; content: string[]; imageUrl?: string },
    { title: string; content: string[]; imageUrl?: string },
    { title: string; content: string[]; imageUrl?: string },
    { title: string; content: string[]; imageUrl?: string },
  ];
  context: {
    title: string;
    content: [string, string, string];
    imageUrl?: string;
  };
  checks: [QuizBlueprint, QuizBlueprint, QuizBlueprint];
  emoji: EmojiBlueprint;
  talk: {
    title: string;
    content: [string, string, string];
    imageUrl?: string;
  };
  funChecks: [QuizBlueprint, QuizBlueprint, QuizBlueprint];
  share: {
    title: string;
    content: [string, string, string];
    imageUrl?: string;
  };
  summary: {
    title: string;
    content: [string, string, string?];
    imageUrl: string;
  };
  homework: [string, string, string];
  video: {
    url: string;
    content: [string, string, string];
  };
  palette?: Partial<BlueprintPalette>;
};

const defaultPalette: BlueprintPalette = {
  warmup: 'bg-gradient-to-br from-sky-500 to-indigo-700',
  grammar: 'bg-gradient-to-br from-indigo-500 to-violet-700',
  practice: 'bg-gradient-to-br from-orange-400 to-rose-500',
  production: 'bg-gradient-to-br from-emerald-500 to-teal-700',
  wrap: 'bg-gradient-to-br from-fuchsia-500 to-pink-600',
};

function makeSlide(
  id: string,
  title: string,
  content: string[],
  bgColor: string,
  extra?: Partial<ClassSlide>,
): ClassSlide {
  return {
    id,
    title,
    content,
    bgColor,
    ...extra,
  };
}

function makeQuizSlide(
  id: string,
  title: string,
  quiz: QuizBlueprint,
  bgColor: string,
): ClassSlide {
  return makeSlide(id, title, [quiz.prompt], bgColor, {
    options: quiz.options,
    correctOptionIndex: quiz.correctOptionIndex,
  });
}

export function quiz(
  prompt: string,
  options: [string, string, string],
  correctOptionIndex: 0 | 1 | 2,
): QuizBlueprint {
  return { prompt, options, correctOptionIndex };
}

export function buildBlueprintClass(spec: BlueprintClassSpec): CurriculumClass {
  const palette = { ...defaultPalette, ...spec.palette };

  return {
    id: spec.id,
    title: spec.title,
    description: spec.description,
    duration: spec.duration ?? '60 minutos',
    objective: spec.objective,
    sections: [
      {
        id: `${spec.id}-s1`,
        title: '1. Warm-up / 1. Calentamiento',
        duration: '8 minutos',
        objective: 'Activar el tema con preguntas claras y objetivos visibles.',
        action: 'Presenta el objetivo, modela una respuesta corta y haz que el estudiante participe desde el inicio.',
        slides: [
          makeSlide(`${spec.id}-s1-sl1`, spec.welcome.title, spec.welcome.content.filter(Boolean) as string[], palette.warmup, {
            imageUrl: spec.welcome.imageUrl,
          }),
          makeSlide(`${spec.id}-s1-sl2`, spec.warmup.title, spec.warmup.content.filter(Boolean) as string[], 'bg-gradient-to-br from-cyan-500 to-blue-600'),
          makeSlide(`${spec.id}-s1-sl3`, 'Objectives / Objetivos', spec.goals, 'bg-gradient-to-br from-violet-500 to-purple-700'),
        ],
      },
      {
        id: `${spec.id}-s2`,
        title: '2. Grammar / Vocabulary / 2. Gramatica y Vocabulario',
        duration: '15 minutos',
        objective: 'Presentar lenguaje clave, estructura y ejemplos reales.',
        action: 'Introduce una idea por slide y verifica comprension con respuestas breves.',
        slides: spec.grammarSlides.map((slide, index) =>
          makeSlide(`${spec.id}-s2-sl${index + 1}`, slide.title, slide.content, palette.grammar, {
            imageUrl: slide.imageUrl,
          }),
        ),
      },
      {
        id: `${spec.id}-s3`,
        title: '3. Practice & Concept Checking / 3. Practica y Verificacion',
        duration: '15 minutos',
        objective: 'Asegurar comprension con contexto y decisiones claras.',
        action: 'Lee el contexto, pregunta por significado y luego resuelve checks rapidos.',
        slides: [
          makeSlide(`${spec.id}-s3-sl1`, spec.context.title, spec.context.content, 'bg-gradient-to-br from-amber-400 to-orange-500', {
            imageUrl: spec.context.imageUrl,
          }),
          makeQuizSlide(`${spec.id}-s3-sl2`, 'Check 1 / Verifica 1', spec.checks[0], palette.practice),
          makeQuizSlide(`${spec.id}-s3-sl3`, 'Check 2 / Verifica 2', spec.checks[1], palette.practice),
          makeQuizSlide(`${spec.id}-s3-sl4`, 'Check 3 / Verifica 3', spec.checks[2], palette.practice),
          makeSlide(`${spec.id}-s3-sl5`, spec.emoji.prompt, spec.emoji.content, 'bg-gradient-to-br from-pink-500 to-rose-600', {
            type: 'emoji-game',
            options: spec.emoji.options,
            correctOptionIndex: spec.emoji.correctOptionIndex,
          }),
        ],
      },
      {
        id: `${spec.id}-s4`,
        title: '4. Production & Quiz / 4. Produccion y Quiz',
        duration: '15 minutos',
        objective: 'Pasar de comprension a produccion guiada y repaso corto.',
        action: 'Haz que el estudiante produzca lenguaje antes del quiz final.',
        slides: [
          makeSlide(`${spec.id}-s4-sl1`, spec.talk.title, spec.talk.content, palette.production, {
            imageUrl: spec.talk.imageUrl,
          }),
          makeQuizSlide(`${spec.id}-s4-sl2`, 'Fun Quiz 1 / Quiz 1', spec.funChecks[0], 'bg-gradient-to-br from-emerald-500 to-teal-600'),
          makeQuizSlide(`${spec.id}-s4-sl3`, 'Fun Quiz 2 / Quiz 2', spec.funChecks[1], 'bg-gradient-to-br from-emerald-500 to-teal-600'),
          makeQuizSlide(`${spec.id}-s4-sl4`, 'Fun Quiz 3 / Quiz 3', spec.funChecks[2], 'bg-gradient-to-br from-emerald-500 to-teal-600'),
          makeSlide(`${spec.id}-s4-sl5`, spec.share.title, spec.share.content, 'bg-gradient-to-br from-lime-500 to-green-600', {
            imageUrl: spec.share.imageUrl,
          }),
        ],
      },
      {
        id: `${spec.id}-s5`,
        title: '5. Wrap-up & Homework / 5. Cierre y Tarea',
        duration: '7 minutos',
        objective: 'Cerrar con sintesis, tarea clara y video de refuerzo.',
        action: 'Resume el progreso, asigna tarea concreta y conecta con el video.',
        slides: [
          makeSlide(`${spec.id}-s5-sl1`, spec.summary.title, spec.summary.content.filter(Boolean) as string[], 'bg-gradient-to-br from-yellow-400 to-orange-500', {
            imageUrl: spec.summary.imageUrl,
          }),
          makeSlide(`${spec.id}-s5-sl2`, 'Homework / Tarea', spec.homework, 'bg-gradient-to-br from-violet-500 to-fuchsia-600', {
            type: 'homework',
          }),
          makeSlide(`${spec.id}-s5-sl3`, 'Video Homework / Tarea en Video', spec.video.content, 'bg-gradient-to-br from-slate-800 to-indigo-900', {
            type: 'video',
            videoUrl: spec.video.url,
          }),
        ],
      },
    ],
  };
}
