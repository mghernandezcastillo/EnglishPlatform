export type FormulaToken = {
  label: string;
  value: string;
  color: string;
};

export type StructureOption = {
  text: string;
  isCorrect: boolean;
};

export type StructureSlide = {
  id: string;
  type: 'hero' | 'formula' | 'explain' | 'quiz' | 'boss' | 'summary' | 'homework';
  title: string;
  subtitle?: string;
  content: string[];
  formula?: FormulaToken[];
  options?: StructureOption[];
  correctNote?: string;
  bossTasks?: string[];
};

export type StructureLesson = {
  id: string;
  title: string;
  focus: string;
  objective: string;
  estimatedMinutes: number;
  slides: StructureSlide[];
};

export type StructureRoadmapModule = {
  id: string;
  title: string;
  description: string;
  lessons: {
    id: string;
    title: string;
    available: boolean;
  }[];
};

export const structureRoadmap: StructureRoadmapModule[] = [
  {
    id: 'block-1',
    title: 'Bloque 1 - Fundamentos De Oración',
    description: 'La base para construir cualquier tiempo verbal sin traducir palabra por palabra.',
    lessons: [
      { id: 'structures-001-subject-verb-complement', title: 'Subject + Verb + Complement', available: true },
      { id: 'structures-002-to-be-main-verb', title: 'To Be como verbo principal', available: false },
      { id: 'structures-003-to-be-negative-question', title: 'To Be en negativo y pregunta', available: false },
      { id: 'structures-004-base-verbs-complements', title: 'Verbos base y complementos', available: false },
      { id: 'structures-005-do-does-auxiliaries', title: 'Do / Does como auxiliares', available: false },
      { id: 'structures-006-wh-questions', title: 'Preguntas básicas con Wh-', available: false }
    ]
  },
  {
    id: 'block-2',
    title: 'Bloque 2 - Presente',
    description: 'Hábitos, acciones ahora, experiencias y duración conectada al presente.',
    lessons: [
      { id: 'structures-007-present-simple', title: 'Present Simple', available: false },
      { id: 'structures-008-third-person', title: 'Present Simple con he/she/it', available: false },
      { id: 'structures-009-present-continuous', title: 'Present Continuous', available: false },
      { id: 'structures-010-present-simple-vs-continuous', title: 'Present Simple vs Present Continuous', available: false },
      { id: 'structures-011-present-perfect', title: 'Present Perfect', available: false },
      { id: 'structures-012-present-perfect-continuous', title: 'Present Perfect Continuous', available: false }
    ]
  },
  {
    id: 'block-3',
    title: 'Bloque 3 - Pasado',
    description: 'Acciones terminadas, progreso en pasado y acciones anteriores a otras.',
    lessons: [
      { id: 'structures-013-past-simple', title: 'Past Simple', available: false },
      { id: 'structures-014-did-negative-question', title: 'Past Simple con did', available: false },
      { id: 'structures-015-past-continuous', title: 'Past Continuous', available: false },
      { id: 'structures-016-past-simple-vs-continuous', title: 'Past Simple vs Past Continuous', available: false },
      { id: 'structures-017-past-perfect', title: 'Past Perfect', available: false },
      { id: 'structures-018-past-perfect-continuous', title: 'Past Perfect Continuous', available: false }
    ]
  },
  {
    id: 'block-4',
    title: 'Bloque 4 - Futuro',
    description: 'Will, going to, futuros con presente, future continuous y perfectos.',
    lessons: [
      { id: 'structures-019-future-simple', title: 'Future Simple with will', available: false },
      { id: 'structures-020-going-to', title: 'Be Going To', available: false },
      { id: 'structures-021-present-continuous-future', title: 'Present Continuous para futuro', available: false },
      { id: 'structures-022-present-simple-future', title: 'Present Simple para horarios futuros', available: false },
      { id: 'structures-023-future-continuous', title: 'Future Continuous', available: false },
      { id: 'structures-024-future-perfect', title: 'Future Perfect', available: false },
      { id: 'structures-025-future-perfect-continuous', title: 'Future Perfect Continuous', available: false },
      { id: 'structures-026-future-in-the-past', title: 'Future in the Past', available: false }
    ]
  },
  {
    id: 'block-5',
    title: 'Bloque 5 - Modales Y Semimodales',
    description: 'Can, could, may, might, must, should, have to, perfect modals y pasiva.',
    lessons: [
      { id: 'structures-027-can-could', title: 'Can / Could', available: false },
      { id: 'structures-028-may-might', title: 'May / Might', available: false },
      { id: 'structures-029-must-have-to-need-to', title: 'Must / Have to / Need to', available: false },
      { id: 'structures-030-should-ought-had-better', title: 'Should / Ought to / Had better', available: false },
      { id: 'structures-031-would-rather', title: 'Would / Would rather', available: false },
      { id: 'structures-032-semi-modals', title: 'Be able to / allowed to / supposed to', available: false },
      { id: 'structures-033-modal-continuous', title: 'Modal Continuous', available: false },
      { id: 'structures-034-modal-perfect', title: 'Modal Perfect', available: false },
      { id: 'structures-035-modal-perfect-continuous', title: 'Modal Perfect Continuous', available: false },
      { id: 'structures-036-modal-passive', title: 'Modales en voz pasiva', available: false }
    ]
  },
  {
    id: 'block-6',
    title: 'Bloque 6 - Condicionales',
    description: 'Zero, first, second, third, mixed y conectores alternativos a if.',
    lessons: [
      { id: 'structures-037-zero-conditional', title: 'Zero Conditional', available: false },
      { id: 'structures-038-first-conditional', title: 'First Conditional', available: false },
      { id: 'structures-039-second-conditional', title: 'Second Conditional', available: false },
      { id: 'structures-040-third-conditional', title: 'Third Conditional', available: false },
      { id: 'structures-041-mixed-conditionals', title: 'Mixed Conditionals', available: false },
      { id: 'structures-042-conditional-connectors', title: 'Unless / As long as / In case', available: false }
    ]
  },
  {
    id: 'block-7',
    title: 'Bloque 7 - Voz Pasiva',
    description: 'Pasiva por tiempos: presente, pasado, futuro, perfectos y modales.',
    lessons: [
      { id: 'structures-043-passive-present-simple', title: 'Passive Present Simple', available: false },
      { id: 'structures-044-passive-present-continuous', title: 'Passive Present Continuous', available: false },
      { id: 'structures-045-passive-present-perfect', title: 'Passive Present Perfect', available: false },
      { id: 'structures-046-passive-past-simple', title: 'Passive Past Simple', available: false },
      { id: 'structures-047-passive-past-continuous', title: 'Passive Past Continuous', available: false },
      { id: 'structures-048-passive-past-perfect', title: 'Passive Past Perfect', available: false },
      { id: 'structures-049-passive-future-simple', title: 'Passive Future Simple', available: false },
      { id: 'structures-050-passive-future-perfect', title: 'Passive Future Perfect', available: false },
      { id: 'structures-051-passive-modals', title: 'Passive with Modals', available: false }
    ]
  },
  {
    id: 'block-8',
    title: 'Bloque 8 - Estructuras Especiales',
    description: 'Imperativo, subjuntivo, wish, infinitivos, gerundios y participios.',
    lessons: [
      { id: 'structures-052-imperative', title: 'Imperative', available: false },
      { id: 'structures-053-subjunctive-base', title: 'Subjunctive with verb base', available: false },
      { id: 'structures-054-subjunctive-were', title: 'Subjunctive with were', available: false },
      { id: 'structures-055-wish-present', title: 'Wish / If only - present wishes', available: false },
      { id: 'structures-056-wish-past', title: 'Wish / If only - past regrets', available: false },
      { id: 'structures-057-wish-would', title: 'Wish + would', available: false },
      { id: 'structures-058-infinitives-to', title: 'Infinitives with to', available: false },
      { id: 'structures-059-bare-infinitives', title: 'Bare infinitives', available: false },
      { id: 'structures-060-gerunds', title: 'Gerunds', available: false },
      { id: 'structures-061-participles', title: 'Present and past participles', available: false }
    ]
  },
  {
    id: 'block-9',
    title: 'Bloque 9 - Causativas Y Hábitos Pasados',
    description: 'Have/get something done, make/let/have, used to, would, be/get used to.',
    lessons: [
      { id: 'structures-062-have-something-done', title: 'Have something done', available: false },
      { id: 'structures-063-get-something-done', title: 'Get something done', available: false },
      { id: 'structures-064-make-let-have', title: 'Make / Let / Have someone do', available: false },
      { id: 'structures-065-get-someone-to-do', title: 'Get someone to do something', available: false },
      { id: 'structures-066-used-to', title: 'Used to', available: false },
      { id: 'structures-067-would-past-habits', title: 'Would for past habits', available: false },
      { id: 'structures-068-be-used-to', title: 'Be used to', available: false },
      { id: 'structures-069-get-used-to', title: 'Get used to', available: false }
    ]
  },
  {
    id: 'block-10',
    title: 'Bloque 10 - Reported Speech E Indirect Questions',
    description: 'Cambios de tiempo, reported questions y preguntas formales.',
    lessons: [
      { id: 'structures-070-reported-present-past', title: 'Reported Speech - present to past', available: false },
      { id: 'structures-071-reported-continuous-perfect', title: 'Reported Speech - continuous and perfect shifts', available: false },
      { id: 'structures-072-reported-modals', title: 'Will/can/may to would/could/might', available: false },
      { id: 'structures-073-reported-questions', title: 'Reported questions', available: false },
      { id: 'structures-074-indirect-questions', title: 'Indirect Questions', available: false },
      { id: 'structures-075-polite-requests', title: 'Polite requests and formal questions', available: false }
    ]
  },
  {
    id: 'block-11',
    title: 'Bloque 11 - Integración Final',
    description: 'Dominio de marcadores, auxiliares, formas verbales y corrección de errores.',
    lessons: [
      { id: 'structures-076-time-marker-mastery', title: 'Time Marker Mastery', available: false },
      { id: 'structures-077-auxiliary-mastery', title: 'Auxiliary Mastery', available: false },
      { id: 'structures-078-verb-form-mastery', title: 'Verb Form Mastery', available: false },
      { id: 'structures-079-error-correction-arena', title: 'Error Correction Arena', available: false },
      { id: 'structures-080-final-boss-battle', title: 'Final Structure Boss Battle', available: false }
    ]
  }
];

export const structureLessons: StructureLesson[] = [
  {
    id: 'structures-001-subject-verb-complement',
    title: 'Subject + Verb + Complement',
    focus: 'Base sentence structure',
    objective: 'Build strong English sentences by controlling subject, verb, and complement.',
    estimatedMinutes: 55,
    slides: [
      {
        id: 's1',
        type: 'hero',
        title: 'Sentence Core',
        subtitle: 'La base para construir inglés claro',
        content: [
          'Hoy dominamos la estructura central: who + action + extra information.',
          'Si controlas esta fórmula, puedes construir presente, pasado, futuro, preguntas y respuestas.'
        ]
      },
      {
        id: 's2',
        type: 'formula',
        title: 'La Fórmula Principal',
        subtitle: 'Primero estructura. Después velocidad.',
        content: ['Toda oración clara necesita una columna vertebral.'],
        formula: [
          { label: 'Subject', value: 'I / She / They', color: 'bg-cyan-400 text-slate-950' },
          { label: 'Verb', value: 'work / likes / play', color: 'bg-violet-400 text-slate-950' },
          { label: 'Complement', value: 'at home / music / every day', color: 'bg-yellow-300 text-slate-950' }
        ]
      },
      {
        id: 's3',
        type: 'explain',
        title: '¿Para Qué Sirve?',
        subtitle: 'Sirve para decir ideas completas sin traducir palabra por palabra.',
        content: [
          'Subject = quién hace la acción.',
          'Verb = qué pasa o qué hace.',
          'Complement = dónde, cuándo, qué, cómo o con quién.'
        ]
      },
      {
        id: 's4',
        type: 'formula',
        title: 'Ejemplo En Colores',
        subtitle: 'Lee cada bloque como una pieza.',
        content: ['I work at night.', 'She studies English every day.', 'They play soccer after class.'],
        formula: [
          { label: 'Subject', value: 'She', color: 'bg-cyan-400 text-slate-950' },
          { label: 'Verb', value: 'studies', color: 'bg-violet-400 text-slate-950' },
          { label: 'Complement', value: 'English every day', color: 'bg-yellow-300 text-slate-950' }
        ]
      },
      {
        id: 's5',
        type: 'explain',
        title: 'Regla De Oro',
        subtitle: 'En inglés el orden importa mucho.',
        content: [
          'Normal sentence: Subject + Verb + Complement.',
          'No empieces con el complemento si todavía estás formando estructura básica.',
          'Primero claridad. Después estilo.'
        ]
      },
      {
        id: 's6',
        type: 'quiz',
        title: 'Choose The Subject',
        subtitle: '¿Cuál bloque dice quién hace la acción?',
        content: ['___ eat breakfast at 7 a.m.'],
        options: [
          { text: 'They', isCorrect: true },
          { text: 'at 7 a.m.', isCorrect: false },
          { text: 'breakfast', isCorrect: false }
        ],
        correctNote: 'They is the subject because it tells us who does the action.'
      },
      {
        id: 's7',
        type: 'quiz',
        title: 'Choose The Verb',
        subtitle: '¿Cuál es la acción?',
        content: ['My brother ___ soccer on Saturdays.'],
        options: [
          { text: 'soccer', isCorrect: false },
          { text: 'plays', isCorrect: true },
          { text: 'on Saturdays', isCorrect: false }
        ],
        correctNote: 'Plays is the verb because it shows the action.'
      },
      {
        id: 's8',
        type: 'quiz',
        title: 'Choose The Complement',
        subtitle: '¿Qué parte agrega información extra?',
        content: ['She studies English ___.'],
        options: [
          { text: 'every night', isCorrect: true },
          { text: 'she', isCorrect: false },
          { text: 'studies', isCorrect: false }
        ],
        correctNote: 'Every night is the complement because it adds time information.'
      },
      {
        id: 's9',
        type: 'quiz',
        title: 'Build The Sentence',
        subtitle: 'Escoge la oración con orden correcto.',
        content: ['Idea: ella + trabaja + en casa'],
        options: [
          { text: 'At home she works.', isCorrect: false },
          { text: 'She works at home.', isCorrect: true },
          { text: 'Works she at home.', isCorrect: false }
        ],
        correctNote: 'The core order is Subject + Verb + Complement: She works at home.'
      },
      {
        id: 's10',
        type: 'quiz',
        title: 'Error Hunter',
        subtitle: 'Encuentra la oración correcta.',
        content: ['Una oración tiene estructura limpia.'],
        options: [
          { text: 'Every day I coffee drink.', isCorrect: false },
          { text: 'I drink coffee every day.', isCorrect: true },
          { text: 'Drink I every day coffee.', isCorrect: false }
        ],
        correctNote: 'I drink coffee every day follows the natural base pattern.'
      },
      {
        id: 's11',
        type: 'quiz',
        title: 'Fast Repetition 1',
        subtitle: 'Mismo patrón, nueva frase.',
        content: ['They ___ movies on Friday.'],
        options: [
          { text: 'watch', isCorrect: true },
          { text: 'Friday', isCorrect: false },
          { text: 'movies', isCorrect: false }
        ],
        correctNote: 'Watch is the verb. They watch movies on Friday.'
      },
      {
        id: 's12',
        type: 'quiz',
        title: 'Fast Repetition 2',
        subtitle: 'Escoge el orden correcto.',
        content: ['Idea: nosotros + vivimos + en Colombia'],
        options: [
          { text: 'We live in Colombia.', isCorrect: true },
          { text: 'Live we in Colombia.', isCorrect: false },
          { text: 'In Colombia we live.', isCorrect: false }
        ],
        correctNote: 'We live in Colombia is the clean base sentence.'
      },
      {
        id: 's13',
        type: 'quiz',
        title: 'Fast Repetition 3',
        subtitle: 'Elige el complemento correcto.',
        content: ['I read books ___.'],
        options: [
          { text: 'my sister', isCorrect: false },
          { text: 'at night', isCorrect: true },
          { text: 'reads', isCorrect: false }
        ],
        correctNote: 'At night adds time, so it works as a complement.'
      },
      {
        id: 's14',
        type: 'quiz',
        title: 'Meaning Match',
        subtitle: '¿Qué significa la oración?',
        content: ['My parents work in a hospital.'],
        options: [
          { text: 'Mis padres trabajan en un hospital.', isCorrect: true },
          { text: 'Mis padres viven en un hospital.', isCorrect: false },
          { text: 'Mis padres estudian en un hospital.', isCorrect: false }
        ],
        correctNote: 'Work means trabajan.'
      },
      {
        id: 's15',
        type: 'quiz',
        title: 'Time Marker Gate',
        subtitle: '¿Cuál complemento expresa tiempo?',
        content: ['Choose the time complement.'],
        options: [
          { text: 'after class', isCorrect: true },
          { text: 'English', isCorrect: false },
          { text: 'my teacher', isCorrect: false }
        ],
        correctNote: 'After class tells us when.'
      },
      {
        id: 's16',
        type: 'boss',
        title: 'Structure Boss Battle',
        subtitle: 'Reto en vivo con el tutor',
        content: ['Defeat the sentence boss by producing clear sentences.'],
        bossTasks: [
          'Say 3 sentences about your routine using Subject + Verb + Complement.',
          'Change one sentence with a new subject: I, she, they.',
          'Listen to the tutor and fix one sentence with bad word order.',
          'Create one sentence with a time complement.',
          'Create one sentence with a place complement.'
        ]
      },
      {
        id: 's17',
        type: 'quiz',
        title: 'Live Check',
        subtitle: 'Después del Boss Battle',
        content: ['Which sentence is strongest?'],
        options: [
          { text: 'She every day studies English.', isCorrect: false },
          { text: 'She studies English every day.', isCorrect: true },
          { text: 'Studies English she every day.', isCorrect: false }
        ],
        correctNote: 'Clear order wins: She studies English every day.'
      },
      {
        id: 's18',
        type: 'explain',
        title: 'Reading Mini Challenge',
        subtitle: 'Encuentra las estructuras base.',
        content: [
          'I wake up early. My sister studies online. We eat lunch at home. They play music after class.',
          'Tutor task: ask the student to identify subject, verb, and complement in two sentences.'
        ]
      },
      {
        id: 's19',
        type: 'summary',
        title: 'Formula Locked',
        subtitle: 'La base quedó instalada.',
        content: [
          'Subject tells who.',
          'Verb tells the action.',
          'Complement adds extra information.',
          'This pattern prepares you for all tenses.'
        ],
        formula: [
          { label: 'Subject', value: 'Who?', color: 'bg-cyan-400 text-slate-950' },
          { label: 'Verb', value: 'Action?', color: 'bg-violet-400 text-slate-950' },
          { label: 'Complement', value: 'Extra info?', color: 'bg-yellow-300 text-slate-950' }
        ]
      },
      {
        id: 's20',
        type: 'homework',
        title: 'Homework Portal',
        subtitle: 'Para la próxima clase',
        content: [
          'Write 10 sentences using Subject + Verb + Complement.',
          'Use 5 different subjects: I, you, he, she, they.',
          'Add time or place complements: at night, every day, at home, after class.',
          'Record a 45-second audio reading your best 5 sentences.'
        ]
      }
    ]
  }
];
