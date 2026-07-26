import { ClassSection, ClassSlide, CurriculumClass } from '../types';

type PatternVariant = 'affirmative' | 'negative' | 'question';

type StructurePart = {
  label: string;
  text: string;
  color: string;
};

type StructurePattern = {
  id: string;
  aliases: RegExp[];
  accentColor: string;
  lessonGuard?: RegExp[];
  variantGuard?: Partial<Record<PatternVariant, RegExp[]>>;
  buildSlide: (variant: PatternVariant, audience: 'kids' | 'teens' | 'adults', text: string) => Omit<ClassSlide, 'id' | 'type' | 'bgColor'> & {
    structureDrag: NonNullable<ClassSlide['structureDrag']>;
  };
};

const COLORS = {
  subject: 'bg-cyan-300',
  auxiliary: 'bg-indigo-300',
  verb: 'bg-violet-300',
  negative: 'bg-rose-300',
  complement: 'bg-yellow-300',
  time: 'bg-orange-300',
  question: 'bg-emerald-300',
  connector: 'bg-fuchsia-300',
};

const INTERACTIVE_TYPES = new Set([
  'emoji-game',
  'speaking-boss-battle',
  'speaking-assessment-experimental',
  'spinning-wheel',
  'matching-game',
  'mystery-puzzle',
  'video',
  'video-task',
  'homework',
  'structure-drag'
]);

const STRONG_GRAMMAR_GUARDS = [
  /grammar/,
  /structure/,
  /tense/,
  /verb to be/,
  /to be/,
  /present simple/,
  /present continuous/,
  /present perfect/,
  /past simple/,
  /past continuous/,
  /future/,
  /going to/,
  /modal/,
  /conditionals?/,
  /passive/,
  /reported speech/,
  /questions?/,
  /negative/,
  /auxiliar/,
  /gramatica/,
  /estructura/,
  /tiempo verbal/,
  /condicional/,
  /voz pasiva/,
  /estilo indirecto/
];

const PRACTICE_GUARDS = [
  /practice/,
  /concept/,
  /quiz/,
  /production/,
  /roleplay/,
  /reading/,
  /practica/,
  /produccion/,
  /lectura/,
  /repaso/
];

const EXCLUSION_GUARDS = [
  /warm-up|warm up|calentamiento/,
  /homework|tarea/,
  /video/,
  /vocabulary only|vocabulario solamente/,
  /colors?|numeros?|numbers?|family|animals?|food|drinks?|hobbies|gadgets?|clothes|weather|rooms?|months?|days?/,
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function audienceFromClass(cls: CurriculumClass): 'kids' | 'teens' | 'adults' {
  const text = normalizeText(cls.title);
  if (text.includes('kids') || text.includes('infantil') || text.includes('explorer')) return 'kids';
  if (text.includes('teen') || text.includes('adolescente')) return 'teens';
  return 'adults';
}

function makeTokens(parts: StructurePart[]) {
  return parts.map((part, index) => ({
    id: `${part.label.toLowerCase().replace(/\s+/g, '-')}-${index}-${part.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    ...part
  }));
}

function buildStructureDrag(
  patternName: string,
  instructions: string,
  prompt: string,
  accentColor: string,
  parts: StructurePart[]
): NonNullable<ClassSlide['structureDrag']> {
  const tokens = makeTokens(parts);
  return {
    patternName,
    instructions,
    prompt,
    accentColor,
    slots: tokens,
    tokens
  };
}

function titleByVariant(variant: PatternVariant, audience: 'kids' | 'teens' | 'adults', fallback = 'Build the Sentence / Arma la Oracion') {
  if (variant === 'question') return audience === 'kids' ? 'Build the Question / Arma la Pregunta' : 'Build the Question / Arma la Pregunta';
  if (variant === 'negative') return audience === 'kids' ? 'Build the Negative / Arma la Negativa' : 'Build the Negative Sentence / Arma la Oracion Negativa';
  return fallback;
}

function instructionByVariant(variant: PatternVariant, audience: 'kids' | 'teens' | 'adults', detail: string) {
  if (audience === 'kids') {
    if (variant === 'question') return `Put the blocks in order to make the question. ${detail}`;
    if (variant === 'negative') return `Put the blocks in order to make the negative sentence. ${detail}`;
    return `Put the blocks in order to make the sentence. ${detail}`;
  }

  if (variant === 'question') return `Put the blocks in the correct order to form the question. ${detail}`;
  if (variant === 'negative') return `Put the blocks in the correct order to form the negative sentence. ${detail}`;
  return `Put the blocks in the correct order to form the structure. ${detail}`;
}

function promptFor(text: string, fallbacks: string[]) {
  const normalized = normalizeText(text);
  for (const fallback of fallbacks) {
    if (normalized.includes(normalizeText(fallback))) return fallback;
  }
  return fallbacks[0];
}

const PATTERNS: StructurePattern[] = [
  {
    id: 'to-be',
    aliases: [/\bverb to be\b/, /\bto be\b/, /\bam\b/, /\bis\b/, /\bare\b/, /how old are you/, /what is your name/],
    accentColor: 'from-indigo-400 to-fuchsia-600',
    buildSlide: (variant, audience, text) => {
      const title = titleByVariant(variant, audience, 'Build with To Be / Arma con To Be');
      const prompt = variant === 'question'
        ? promptFor(text, ['How old are you?', 'What is your name?', 'Are you ready?'])
        : variant === 'negative'
          ? promptFor(text, ['He is not at home today.', 'They are not in class.'])
          : promptFor(text, ['I am a student.', 'She is happy today.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Question word', text: 'How old', color: COLORS.question },
              { label: 'To be', text: 'are', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'He', color: COLORS.subject },
                { label: 'Negative to be', text: 'is not', color: COLORS.negative },
                { label: 'Complement', text: 'at home today', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'To be', text: 'am', color: COLORS.auxiliary },
                { label: 'Complement', text: 'a student', color: COLORS.complement }
              ];

      return {
        title,
        description: 'Verb to be',
        content: [],
        structureDrag: buildStructureDrag('Verb To Be', instructionByVariant(variant, audience, 'Focus on subject, to be, and complement.'), prompt, 'from-indigo-400 to-fuchsia-600', parts)
      };
    }
  },
  {
    id: 'present-simple',
    aliases: [/\bpresent simple\b/, /every day/, /usually/, /always/, /sometimes/, /routine/, /habit/],
    accentColor: 'from-emerald-400 to-teal-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Do you study English every day?', 'Do they work on weekends?'])
          : variant === 'negative'
            ? promptFor(text, ["She doesn't play soccer after class.", "I don't drink coffee at night."])
            : promptFor(text, ['I study English every day.', 'They work from home.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Do', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Verb', text: 'study English', color: COLORS.verb },
              { label: 'Time', text: 'every day', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'does not', color: COLORS.negative },
                { label: 'Verb', text: 'play', color: COLORS.verb },
                { label: 'Complement', text: 'soccer after class', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Verb', text: 'study', color: COLORS.verb },
                { label: 'Complement', text: 'English every day', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Present Simple / Arma el Presente Simple'),
        description: 'Present simple',
        content: [],
        structureDrag: buildStructureDrag('Present Simple', instructionByVariant(variant, audience, 'Focus on subject, auxiliary, and base verb when needed.'), prompt, 'from-emerald-400 to-teal-600', parts)
      };
    }
  },
  {
    id: 'present-continuous',
    aliases: [/\bpresent continuous\b/, /\b(am|is|are)\s+\w+ing\b/, /right now/, /at the moment/],
    accentColor: 'from-cyan-400 to-blue-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Are they studying right now?', 'Is she working at the moment?'])
          : variant === 'negative'
            ? promptFor(text, ["He isn't sleeping now.", "We aren't watching TV right now."])
            : promptFor(text, ['They are studying right now.', 'She is working at the moment.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Are', color: COLORS.auxiliary },
              { label: 'Subject', text: 'they', color: COLORS.subject },
              { label: 'Verb', text: 'studying', color: COLORS.verb },
              { label: 'Time', text: 'right now', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'He', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'is not', color: COLORS.negative },
                { label: 'Verb', text: 'sleeping', color: COLORS.verb },
                { label: 'Time', text: 'now', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'They', color: COLORS.subject },
                { label: 'Auxiliary', text: 'are', color: COLORS.auxiliary },
                { label: 'Verb', text: 'studying English', color: COLORS.verb },
                { label: 'Time', text: 'right now', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Present Continuous / Arma el Presente Continuo'),
        description: 'Present continuous',
        content: [],
        structureDrag: buildStructureDrag('Present Continuous', instructionByVariant(variant, audience, 'Use subject, be, and verb + ing.'), prompt, 'from-cyan-400 to-blue-600', parts)
      };
    }
  },
  {
    id: 'past-simple',
    aliases: [/\bpast simple\b/, /yesterday/, /last\s+\w+/, /\bago\b/, /\bwent\b/, /\bvisited\b/, /\bplayed\b/, /\bworked\b/, /\bstudied\b/],
    accentColor: 'from-amber-400 to-rose-500',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Did he call you yesterday?', 'Did they visit the museum last week?'])
          : variant === 'negative'
            ? promptFor(text, ["I didn't go to class yesterday.", "She didn't study last night."])
            : promptFor(text, ['They visited their grandma yesterday.', 'We played soccer last Saturday.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Did', color: COLORS.auxiliary },
              { label: 'Subject', text: 'he', color: COLORS.subject },
              { label: 'Verb', text: 'call you', color: COLORS.verb },
              { label: 'Time', text: 'yesterday', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'did not', color: COLORS.negative },
                { label: 'Verb', text: 'go', color: COLORS.verb },
                { label: 'Time', text: 'to class yesterday', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'They', color: COLORS.subject },
                { label: 'Verb', text: 'visited', color: COLORS.verb },
                { label: 'Complement', text: 'their grandma', color: COLORS.complement },
                { label: 'Time', text: 'yesterday', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Past Simple / Arma el Pasado Simple'),
        description: 'Past simple',
        content: [],
        structureDrag: buildStructureDrag('Past Simple', instructionByVariant(variant, audience, 'Use did only in questions and negatives.'), prompt, 'from-amber-400 to-rose-500', parts)
      };
    }
  },
  {
    id: 'going-to',
    aliases: [/\bgoing to\b/],
    accentColor: 'from-sky-400 to-indigo-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Are you going to study tonight?', 'Is she going to travel next month?'])
          : variant === 'negative'
            ? promptFor(text, ["I'm not going to stay home tomorrow.", "They aren't going to buy it."])
            : promptFor(text, ['She is going to study tonight.', 'We are going to travel next week.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Are', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Future form', text: 'going to study', color: COLORS.verb },
              { label: 'Time', text: 'tonight', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative future', text: 'am not going to', color: COLORS.negative },
                { label: 'Verb', text: 'stay home', color: COLORS.verb },
                { label: 'Time', text: 'tomorrow', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Future form', text: 'is going to', color: COLORS.auxiliary },
                { label: 'Verb', text: 'study', color: COLORS.verb },
                { label: 'Time', text: 'tonight', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build with Going To / Arma con Going To'),
        description: 'Future plan',
        content: [],
        structureDrag: buildStructureDrag('Going To', instructionByVariant(variant, audience, 'Use be + going to + base verb.'), prompt, 'from-sky-400 to-indigo-600', parts)
      };
    }
  },
  {
    id: 'future-will',
    aliases: [/\bfuture\b/, /\bwill\b/],
    lessonGuard: [/\bgoing to\b/],
    accentColor: 'from-blue-400 to-violet-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Will you study tonight?', 'Will they arrive on time?'])
          : variant === 'negative'
            ? promptFor(text, ["I won't forget your birthday.", "She won't travel next week."])
            : promptFor(text, ['We will travel next week.', 'I will help you later.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Will', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Verb', text: 'study', color: COLORS.verb },
              { label: 'Time', text: 'tonight', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative future', text: "won't", color: COLORS.negative },
                { label: 'Verb', text: 'forget', color: COLORS.verb },
                { label: 'Complement', text: 'your birthday', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'We', color: COLORS.subject },
                { label: 'Auxiliary', text: 'will', color: COLORS.auxiliary },
                { label: 'Verb', text: 'travel', color: COLORS.verb },
                { label: 'Time', text: 'next week', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build with Will / Arma con Will'),
        description: 'Future with will',
        content: [],
        structureDrag: buildStructureDrag('Future With Will', instructionByVariant(variant, audience, 'Use will + base verb.'), prompt, 'from-blue-400 to-violet-600', parts)
      };
    }
  },
  {
    id: 'can-modal',
    aliases: [/\bcan\b/, /\bcould\b/, /ability/, /abilities/, /can i have/, /could i/, /do you have/],
    accentColor: 'from-lime-400 to-emerald-600',
    buildSlide: (variant, audience, text) => {
      const requestContext = /restaurant|order|menu|water|food|store|waiter|customer|can i have|could i/.test(text);
      const prompt = requestContext
        ? promptFor(text, ['Can I have a salad, please?', 'Could I get some water, please?'])
        : variant === 'question'
          ? promptFor(text, ['Can you help me?', 'Can she swim fast?'])
          : promptFor(text, ['I can swim very well.', 'He can help his team.']);

      const parts = requestContext
        ? [
            { label: 'Modal', text: 'Can', color: COLORS.auxiliary },
            { label: 'Subject', text: 'I', color: COLORS.subject },
            { label: 'Verb', text: 'have', color: COLORS.verb },
            { label: 'Complement', text: 'a salad, please', color: COLORS.complement }
          ]
        : variant === 'question'
          ? [
              { label: 'Modal', text: 'Can', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Verb', text: 'help me', color: COLORS.verb }
            ]
          : [
              { label: 'Subject', text: 'I', color: COLORS.subject },
              { label: 'Modal', text: 'can', color: COLORS.auxiliary },
              { label: 'Verb', text: 'swim very well', color: COLORS.verb }
            ];

      return {
        title: requestContext ? 'Build the Polite Question / Arma la Pregunta Cortes' : titleByVariant(variant, audience, 'Build with Can / Arma con Can'),
        description: requestContext ? 'Polite request' : 'Modal verb',
        content: [],
        structureDrag: buildStructureDrag(requestContext ? 'Can For Requests' : 'Can / Ability', instructionByVariant(requestContext ? 'question' : variant, audience, requestContext ? 'Make a polite request in the correct order.' : 'Use can + base verb.'), prompt, 'from-lime-400 to-emerald-600', parts)
      };
    }
  },
  {
    id: 'have-has',
    aliases: [/\bhave got\b/, /\bhas got\b/, /\bi have\b/, /\bshe has\b/, /do you have/, /possession/],
    accentColor: 'from-yellow-400 to-orange-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Do you have a laptop?', 'Do they have a pet?'])
          : variant === 'negative'
            ? promptFor(text, ["I don't have a tablet.", "She doesn't have a red backpack."])
            : promptFor(text, ['She has a red backpack.', 'I have a new phone.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Do', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Verb', text: 'have', color: COLORS.verb },
              { label: 'Complement', text: 'a laptop', color: COLORS.complement }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative auxiliary', text: "don't", color: COLORS.negative },
                { label: 'Verb', text: 'have', color: COLORS.verb },
                { label: 'Complement', text: 'a tablet', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Verb', text: 'has', color: COLORS.verb },
                { label: 'Complement', text: 'a red backpack', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build with Have / Arma con Have'),
        description: 'Possession',
        content: [],
        structureDrag: buildStructureDrag('Have / Has', instructionByVariant(variant, audience, 'Focus on possession and the correct auxiliary.'), prompt, 'from-yellow-400 to-orange-600', parts)
      };
    }
  },
  {
    id: 'there-is-are',
    aliases: [/\bthere is\b/, /\bthere are\b/],
    accentColor: 'from-teal-400 to-cyan-600',
    buildSlide: (_variant, audience, text) => ({
      title: titleByVariant('affirmative', audience, 'Build with There Is / There Are'),
      description: 'Existence',
      content: [],
      structureDrag: buildStructureDrag('There Is / There Are', instructionByVariant('affirmative', audience, 'Use there + be + the thing you mention.'), promptFor(text, ['There are three books on the table.', 'There is a pen in my bag.']), 'from-teal-400 to-cyan-600', [
        { label: 'Starter', text: 'There', color: COLORS.question },
        { label: 'To be', text: 'are', color: COLORS.auxiliary },
        { label: 'Complement', text: 'three books on the table', color: COLORS.complement }
      ])
    })
  },
  {
    id: 'imperative',
    aliases: [/\bimperative\b/, /turn left/, /go straight/, /open your/, /close your/, /listen/, /write/, /read/],
    accentColor: 'from-rose-400 to-orange-600',
    buildSlide: (_variant, audience, text) => ({
      title: 'Build the Instruction / Arma la Instruccion',
      description: 'Imperative',
      content: [],
      structureDrag: buildStructureDrag('Imperative', instructionByVariant('affirmative', audience, 'Use the base verb first, then the rest of the instruction.'), promptFor(text, ['Turn left at the park.', 'Open your book and write.']), 'from-rose-400 to-orange-600', [
        { label: 'Verb', text: 'Turn', color: COLORS.verb },
        { label: 'Complement', text: 'left at the park', color: COLORS.complement }
      ])
    })
  },
  {
    id: 'present-perfect',
    aliases: [/\bpresent perfect\b/, /\bhave\s+\w+ed\b/, /\bhas\s+\w+ed\b/, /already/, /yet/, /ever/, /never/],
    accentColor: 'from-violet-400 to-indigo-600',
    buildSlide: (variant, audience, text) => ({
      title: titleByVariant(variant, audience, 'Build the Present Perfect / Arma el Present Perfect'),
      description: 'Present perfect',
      content: [],
      structureDrag: buildStructureDrag('Present Perfect', instructionByVariant(variant, audience, 'Use have or has + past participle.'), promptFor(text, variant === 'question' ? ['Have you finished your homework yet?'] : ['I have finished my homework already.']), 'from-violet-400 to-indigo-600', variant === 'question' ? [
        { label: 'Auxiliary', text: 'Have', color: COLORS.auxiliary },
        { label: 'Subject', text: 'you', color: COLORS.subject },
        { label: 'Verb', text: 'finished', color: COLORS.verb },
        { label: 'Complement', text: 'your homework yet', color: COLORS.complement }
      ] : [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Auxiliary', text: 'have', color: COLORS.auxiliary },
        { label: 'Verb', text: 'finished', color: COLORS.verb },
        { label: 'Complement', text: 'my homework already', color: COLORS.complement }
      ])
    })
  },
  {
    id: 'present-perfect-continuous',
    aliases: [/\bpresent perfect continuous\b/, /have been \w+ing/, /has been \w+ing/, /for \d+/, /since/],
    accentColor: 'from-fuchsia-400 to-cyan-600',
    buildSlide: (_variant, audience, text) => ({
      title: 'Build the Present Perfect Continuous / Arma el Present Perfect Continuous',
      description: 'Present perfect continuous',
      content: [],
      structureDrag: buildStructureDrag('Present Perfect Continuous', instructionByVariant('affirmative', audience, 'Use have or has been + verb + ing.'), promptFor(text, ['I have been studying for two hours.']), 'from-fuchsia-400 to-cyan-600', [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Auxiliary', text: 'have been', color: COLORS.auxiliary },
        { label: 'Verb', text: 'studying', color: COLORS.verb },
        { label: 'Time', text: 'for two hours', color: COLORS.time }
      ])
    })
  },
  {
    id: 'conditional',
    aliases: [/\bfirst conditional\b/, /\bsecond conditional\b/, /\bthird conditional\b/, /\bconditional\b/, /\bif\b/],
    accentColor: 'from-orange-400 to-pink-600',
    buildSlide: (_variant, audience, text) => ({
      title: 'Build the Conditional / Arma el Condicional',
      description: 'Conditional pattern',
      content: [],
      structureDrag: buildStructureDrag('Conditional', instructionByVariant('affirmative', audience, 'Place the if clause and the result clause in the correct order.'), promptFor(text, ['If it rains, I will stay home.', 'If I had more time, I would travel more.']), 'from-orange-400 to-pink-600', [
        { label: 'If clause', text: 'If it rains', color: COLORS.connector },
        { label: 'Result', text: 'I will stay home', color: COLORS.complement }
      ])
    })
  },
  {
    id: 'passive',
    aliases: [/\bpassive\b/, /\bwas built\b/, /\bis made\b/, /\bare produced\b/, /by\s+\w+/],
    accentColor: 'from-slate-400 to-blue-700',
    buildSlide: (_variant, audience, text) => ({
      title: 'Build the Passive Voice / Arma la Voz Pasiva',
      description: 'Passive voice',
      content: [],
      structureDrag: buildStructureDrag('Passive Voice', instructionByVariant('affirmative', audience, 'Use object, be, and past participle.'), promptFor(text, ['The email was sent yesterday.', 'Coffee is grown in Colombia.']), 'from-slate-400 to-blue-700', [
        { label: 'Subject', text: 'The email', color: COLORS.subject },
        { label: 'To be', text: 'was', color: COLORS.auxiliary },
        { label: 'Past participle', text: 'sent', color: COLORS.verb },
        { label: 'Time', text: 'yesterday', color: COLORS.time }
      ])
    })
  },
  {
    id: 'reported-speech',
    aliases: [/\breported speech\b/, /said that/, /told me/, /asked me/, /estilo indirecto/],
    accentColor: 'from-purple-400 to-rose-600',
    buildSlide: (_variant, audience, text) => ({
      title: 'Build Reported Speech / Arma el Reported Speech',
      description: 'Reported speech',
      content: [],
      structureDrag: buildStructureDrag('Reported Speech', instructionByVariant('affirmative', audience, 'Use reporting verb + person + reported idea.'), promptFor(text, ['She told me that she was tired.', 'He said that he was busy.']), 'from-purple-400 to-rose-600', [
        { label: 'Subject', text: 'She', color: COLORS.subject },
        { label: 'Reporting verb', text: 'told me', color: COLORS.verb },
        { label: 'Reported idea', text: 'that she was tired', color: COLORS.complement }
      ])
    })
  }
];

function inferVariant(text: string): PatternVariant {
  if (/\bnegative\b|\bnegativ|\bnot\b|\bdon't\b|\bdoesn't\b|\bdidn't\b|\baren't\b|\bisn't\b|\bwon't\b|\bcan't\b/.test(text)) return 'negative';
  if (/\?|question|asking|ask|pregunta|how old are you|what is your name|when is your birthday|where is|what are|can you|do you|did you|could i|can i have/.test(text)) return 'question';
  return 'affirmative';
}

function isStrongGrammarContext(text: string) {
  return STRONG_GRAMMAR_GUARDS.some((guard) => guard.test(text));
}

function isPracticeContext(text: string) {
  return PRACTICE_GUARDS.some((guard) => guard.test(text));
}

function shouldInspectSection(cls: CurriculumClass, section: ClassSection) {
  const classText = normalizeText(`${cls.title} ${cls.description || ''} ${cls.objective || ''}`);
  const sectionText = normalizeText(`${section.title} ${section.objective} ${section.action}`);
  const combined = `${classText} ${sectionText}`;

  if (EXCLUSION_GUARDS.some((guard) => guard.test(sectionText)) && !isStrongGrammarContext(combined)) return false;
  return isStrongGrammarContext(combined) || isPracticeContext(sectionText) && isStrongGrammarContext(classText);
}

function shouldInspectSlide(slide: ClassSlide) {
  if (slide.type && INTERACTIVE_TYPES.has(slide.type)) return false;
  return Boolean(slide.content?.length || slide.description || slide.title);
}

function findPattern(text: string) {
  return PATTERNS.find((pattern) => {
    const hasAlias = pattern.aliases.some((alias) => alias.test(text));
    if (!hasAlias) return false;
    if (pattern.lessonGuard && !pattern.lessonGuard.some((guard) => guard.test(text))) return false;
    return true;
  }) || null;
}

function choosePattern(cls: CurriculumClass, section: ClassSection, slide: ClassSlide) {
  const fullText = normalizeText([
    cls.title,
    cls.description || '',
    cls.objective || '',
    section.title,
    section.objective,
    section.action,
    slide.title,
    slide.description || '',
    ...(slide.content || []),
    ...(slide.options || [])
  ].join(' '));

  return findPattern(fullText);
}

function scoreCandidate(cls: CurriculumClass, section: ClassSection, slide: ClassSlide, pattern: StructurePattern, variant: PatternVariant) {
  const classText = normalizeText(`${cls.title} ${cls.description || ''} ${cls.objective || ''}`);
  const sectionText = normalizeText(`${section.title} ${section.objective} ${section.action}`);
  const slideText = normalizeText([
    slide.title,
    slide.description || '',
    ...(slide.content || []),
    ...(slide.options || [])
  ].join(' '));

  let score = 0;

  if (/grammar|structure|gramatica|estructura/.test(sectionText)) score += 12;
  if (/practice|concept|quiz|practica|repaso/.test(sectionText)) score += 6;
  if (/reading|lectura/.test(sectionText)) score += 4;
  if (/production|roleplay|produccion/.test(sectionText)) score += 2;

  if (/grammar|structure|question|negative|pregunta|negativa|como pedir|how to order|ordering/.test(slideText)) score += 8;
  if (slide.options?.length) score += 3;
  if (slide.type === 'reading') score += 2;
  if (slideText.includes('?')) score += variant === 'question' ? 4 : 1;

  if (pattern.aliases.some((alias) => alias.test(slideText))) score += 8;
  if (pattern.aliases.some((alias) => alias.test(sectionText))) score += 4;
  if (pattern.aliases.some((alias) => alias.test(classText))) score += 2;

  if (/would like|can i have|could i|get the bill|the bill please/.test(slideText)) score += 10;
  if (/find the mistake/.test(slideText)) score -= 2;
  if (/welcome|warm-up|warm up|bienvenida|calentamiento/.test(slideText)) score -= 6;

  return score;
}

function createStructureDragSlide(
  cls: CurriculumClass,
  section: ClassSection,
  slide: ClassSlide,
  pattern: StructurePattern,
  variant: PatternVariant
): ClassSlide {
  const audience = audienceFromClass(cls);
  const fullText = normalizeText([
    cls.title,
    cls.description || '',
    cls.objective || '',
    section.title,
    section.objective,
    section.action,
    slide.title,
    slide.description || '',
    ...(slide.content || []),
    ...(slide.options || [])
  ].join(' '));

  const built = pattern.buildSlide(variant, audience, fullText);

  return {
    id: `${slide.id}-structure-drag-${pattern.id}-${variant}`,
    type: 'structure-drag',
    bgColor: `bg-gradient-to-br ${pattern.accentColor}`,
    ...built
  };
}

export function injectStructureDragSlides(cls: CurriculumClass): CurriculumClass {
  let bestWinner: { sectionId: string; slideId: string; generatedSlide: ClassSlide; score: number } | null = null;

  cls.sections.forEach((section) => {
    if (!shouldInspectSection(cls, section)) return;

    section.slides.forEach((slide) => {
      if (!shouldInspectSlide(slide)) return;

      const pattern = choosePattern(cls, section, slide);
      if (!pattern) return;

      const variant = inferVariant(normalizeText([
        slide.title,
        slide.description || '',
        ...(slide.content || []),
        ...(slide.options || [])
      ].join(' ')));

      const generatedSlide = createStructureDragSlide(cls, section, slide, pattern, variant);
      const score = scoreCandidate(cls, section, slide, pattern, variant);

      if (!bestWinner || score > bestWinner.score) {
        bestWinner = {
          sectionId: section.id,
          slideId: slide.id,
          generatedSlide,
          score
        };
      }
    });
  });

  const sections = cls.sections.map((section) => {
    const slides = section.slides.flatMap((slide) => {
      const result: ClassSlide[] = [slide];
      if (bestWinner && bestWinner.sectionId === section.id && bestWinner.slideId === slide.id) {
        result.push(bestWinner.generatedSlide);
      }
      return result;
    });

    return { ...section, slides };
  });

  return { ...cls, sections };
}
