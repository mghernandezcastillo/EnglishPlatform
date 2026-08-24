import { ClassSection, ClassSlide, CurriculumClass } from '../types';
import { getCustomClassStructure } from '../data/classStructureMap';

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

type StructureDifficulty = NonNullable<ClassSlide['structureDrag']>['difficulty'];

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
  const id = cls.id || '';
  if (id.startsWith('c-teens-')) return 'teens';
  if (id.startsWith('c-adults-')) return 'adults';
  if (id.startsWith('c-be-') || id.startsWith('c-ba-') || id.startsWith('c-bc-')) return 'kids';

  const text = normalizeText(`${cls.id} ${cls.title} ${cls.description || ''}`);
  if (text.includes('kids') || text.includes('infantil') || text.includes('explorer') || text.includes('adventurer') || text.includes('champion')) return 'kids';
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
  parts: StructurePart[],
  learningOpportunity = `Notice how each block creates ${patternName.toLowerCase()} meaning.`,
  difficulty: StructureDifficulty = 'medium'
): NonNullable<ClassSlide['structureDrag']> {
  const tokens = makeTokens(parts);
  return {
    patternName,
    instructions,
    prompt,
    accentColor,
    learningOpportunity,
    difficulty,
    slots: tokens,
    tokens
  };
}

function applyClassSpecificStructureOverride(
  cls: CurriculumClass,
  pattern: StructurePattern,
  variant: PatternVariant,
  built: ReturnType<StructurePattern['buildSlide']>
) {
  if (cls.id !== 'c-teens-basic-zero-12' || pattern.id !== 'to-be' || variant !== 'question') {
    return built;
  }

  return {
    ...built,
    structureDrag: buildStructureDrag(
      'Verb To Be',
      'Put the blocks in order.',
      'How old are you?',
      built.structureDrag.accentColor,
      [
        { label: 'Question phrase', text: 'How old', color: COLORS.question },
        { label: 'To be', text: 'are', color: COLORS.auxiliary },
        { label: 'Subject', text: 'you', color: COLORS.subject }
      ],
      'Ask about age with verb to be.',
      'easy'
    )
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

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

const PATTERNS: StructurePattern[] = [
  {
    id: 'spelling-question',
    aliases: [/alphabet/, /alfabeto/, /spell/, /spelling/, /deletreo/, /username/, /usernames/],
    accentColor: 'from-indigo-400 to-fuchsia-600',
    buildSlide: (_variant, audience, text) => {
      const prompt = /username/.test(text)
        ? 'How do you spell your username?'
        : promptFor(text, [
            'How do you spell your name?',
            'What is your name?'
          ]);

      const parts = prompt === 'What is your name?'
        ? [
            { label: 'Question word', text: 'What', color: COLORS.question },
            { label: 'To be', text: 'is', color: COLORS.auxiliary },
            { label: 'Subject', text: 'your name', color: COLORS.subject }
          ]
        : [
            { label: 'Question word', text: 'How', color: COLORS.question },
            { label: 'Auxiliary', text: 'do', color: COLORS.auxiliary },
            { label: 'Subject', text: 'you', color: COLORS.subject },
            { label: 'Verb', text: 'spell', color: COLORS.verb },
            { label: 'Complement', text: prompt.includes('username') ? 'your username' : 'your name', color: COLORS.complement }
          ];

      return {
        title: titleByVariant('question', audience),
        description: 'Spelling and usernames',
        content: [],
        structureDrag: buildStructureDrag(
          'Spelling Questions',
          instructionByVariant('question', audience, 'Focus on question word, auxiliary, subject, verb, and complement.'),
          prompt,
          'from-indigo-400 to-fuchsia-600',
          parts
        )
      };
    }
  },
  {
    id: 'past-to-be',
    aliases: [/\bpast to be\b/, /\bto be in past\b/, /\bwas\b/, /\bwere\b/, /was\/were/],
    accentColor: 'from-purple-400 to-indigo-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Were you at home yesterday?', 'Was she in class last week?'])
          : variant === 'negative'
            ? promptFor(text, ['I was not at school yesterday.', 'They were not tired last night.'])
            : promptFor(text, ['I was at home yesterday.', 'They were happy last night.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'To be past', text: 'Were', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Complement', text: 'at home', color: COLORS.complement },
              { label: 'Time', text: 'yesterday', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative past to be', text: 'was not', color: COLORS.negative },
                { label: 'Complement', text: 'at school', color: COLORS.complement },
                { label: 'Time', text: 'yesterday', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'They', color: COLORS.subject },
                { label: 'To be past', text: 'were', color: COLORS.auxiliary },
                { label: 'Complement', text: 'happy', color: COLORS.complement },
                { label: 'Time', text: 'last night', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build Past To Be / Arma To Be en Pasado'),
        description: 'Past to be',
        content: [],
        structureDrag: buildStructureDrag('Past To Be', instructionByVariant(variant, audience, 'Use was or were according to the subject.'), prompt, 'from-purple-400 to-indigo-600', parts, 'Contrast present identity/state with past identity/state.', 'easy')
      };
    }
  },
  {
    id: 'to-be',
    aliases: [/\bverb to be\b/, /\bpresent to be\b/, /how old are you/, /what is your name/, /where are you from/, /\bi am\b/, /\bhe is\b/, /\bshe is\b/, /\bthey are\b/],
    accentColor: 'from-indigo-400 to-fuchsia-600',
    buildSlide: (variant, audience, text) => {
      const title = titleByVariant(variant, audience, 'Build Present To Be / Arma To Be en Presente');
      const isPersonalIntroContext = /presentarse|edad|curso|ciudad|gustos|redes sociales|social media|profile|bio/.test(text);
      const prompt = isPersonalIntroContext
        ? variant === 'question'
          ? 'How old are you, and what grade are you in?'
          : variant === 'negative'
            ? 'My username is not my full name.'
            : 'My name is Sam, I am 14 years old, and I am in 9th grade.'
        : variant === 'question'
        ? promptFor(text, ['How old are you?', 'What is your name?', 'Are you ready?'])
        : variant === 'negative'
          ? promptFor(text, ['He is not at home today.', 'They are not in class.'])
          : promptFor(text, ['I am a student.', 'She is happy today.']);
      const parts =
        isPersonalIntroContext
          ? variant === 'question'
            ? [
                { label: 'Question word', text: 'How old', color: COLORS.question },
                { label: 'To be', text: 'are', color: COLORS.auxiliary },
                { label: 'Subject', text: 'you', color: COLORS.subject },
                { label: 'Connector', text: 'and', color: COLORS.connector },
                { label: 'Question phrase', text: 'what grade', color: COLORS.question },
                { label: 'To be', text: 'are', color: COLORS.auxiliary },
                { label: 'Subject', text: 'you', color: COLORS.subject },
                { label: 'Complement', text: 'in', color: COLORS.complement }
              ]
            : variant === 'negative'
              ? [
                  { label: 'Subject', text: 'My username', color: COLORS.subject },
                  { label: 'Negative to be', text: 'is not', color: COLORS.negative },
                  { label: 'Complement', text: 'my full name', color: COLORS.complement }
                ]
              : [
                  { label: 'Subject', text: 'My name', color: COLORS.subject },
                  { label: 'To be', text: 'is', color: COLORS.auxiliary },
                  { label: 'Name', text: 'Sam', color: COLORS.complement },
                  { label: 'Subject', text: 'I', color: COLORS.subject },
                  { label: 'To be', text: 'am', color: COLORS.auxiliary },
                  { label: 'Age', text: '14 years old', color: COLORS.time },
                  { label: 'Connector', text: 'and', color: COLORS.connector },
                  { label: 'Subject', text: 'I', color: COLORS.subject },
                  { label: 'To be', text: 'am', color: COLORS.auxiliary },
                  { label: 'Grade', text: 'in 9th grade', color: COLORS.complement }
                ]
          : variant === 'question'
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
        structureDrag: buildStructureDrag(
          'Verb To Be',
          instructionByVariant(variant, audience, isPersonalIntroContext ? 'Build a complete teen profile sentence with name, age, and school grade.' : 'Focus on subject, to be, and complement.'),
          prompt,
          'from-indigo-400 to-fuchsia-600',
          parts,
          'Separate identity/state from action verbs.',
          'easy'
        )
      };
    }
  },
  {
    id: 'present-simple',
    aliases: [/\bpresent simple\b/, /every day/, /usually/, /always/, /sometimes/, /routine/, /habit/, /holidays?/, /festivals?/, /traditions?/, /seasons?|estaciones?/],
    accentColor: 'from-emerald-400 to-teal-600',
    buildSlide: (variant, audience, text) => {
      const holidayContext = /holidays?|festivals?|traditions?|celebration|celebrate/.test(text);
      const seasonContext = /seasons?|estaciones?|winter|summer|spring|fall|autumn/.test(text);
      const prompt =
        holidayContext
          ? variant === 'question'
            ? promptFor(text, ['Do you celebrate holidays with your family?', 'What do people usually eat at festivals?'])
            : variant === 'negative'
              ? promptFor(text, ['We do not celebrate that holiday every year.', 'People do not work on that festival day.'])
              : promptFor(text, ['We celebrate this holiday every year.', 'People usually eat special food at festivals.'])
        : seasonContext
          ? variant === 'question'
            ? promptFor(text, ['Does it rain in winter?', 'Do people wear jackets in winter?'])
            : variant === 'negative'
              ? promptFor(text, ['It does not snow in summer.', 'People do not wear coats in summer.'])
              : promptFor(text, ['It rains a lot in winter.', 'People wear jackets in winter.'])
        : variant === 'question'
          ? promptFor(text, ['Do you study English every day?', 'Do they work on weekends?'])
          : variant === 'negative'
            ? promptFor(text, ["She doesn't play soccer after class.", "I don't drink coffee at night."])
            : promptFor(text, ['I study English every day.', 'They work from home.']);
      const parts =
        holidayContext
          ? variant === 'question'
            ? [
                { label: 'Auxiliary', text: 'Do', color: COLORS.auxiliary },
                { label: 'Subject', text: 'you', color: COLORS.subject },
                { label: 'Verb', text: 'celebrate', color: COLORS.verb },
                { label: 'Complement', text: 'holidays with your family', color: COLORS.complement }
              ]
            : variant === 'negative'
              ? [
                  { label: 'Subject', text: 'We', color: COLORS.subject },
                  { label: 'Negative auxiliary', text: 'do not', color: COLORS.negative },
                  { label: 'Verb', text: 'celebrate', color: COLORS.verb },
                  { label: 'Time', text: 'that holiday every year', color: COLORS.time }
                ]
              : [
                  { label: 'Subject', text: 'We', color: COLORS.subject },
                  { label: 'Verb', text: 'celebrate', color: COLORS.verb },
                  { label: 'Complement', text: 'this holiday', color: COLORS.complement },
                  { label: 'Time', text: 'every year', color: COLORS.time }
                ]
        : seasonContext
          ? variant === 'question'
            ? [
                { label: 'Auxiliary', text: 'Does', color: COLORS.auxiliary },
                { label: 'Subject', text: 'it', color: COLORS.subject },
                { label: 'Verb', text: 'rain', color: COLORS.verb },
                { label: 'Time', text: 'in winter', color: COLORS.time }
              ]
            : variant === 'negative'
              ? [
                  { label: 'Subject', text: 'It', color: COLORS.subject },
                  { label: 'Negative auxiliary', text: 'does not', color: COLORS.negative },
                  { label: 'Verb', text: 'snow', color: COLORS.verb },
                  { label: 'Time', text: 'in summer', color: COLORS.time }
                ]
              : [
                  { label: 'Subject', text: 'People', color: COLORS.subject },
                  { label: 'Verb', text: 'wear', color: COLORS.verb },
                  { label: 'Complement', text: 'jackets', color: COLORS.complement },
                  { label: 'Time', text: 'in winter', color: COLORS.time }
                ]
        : variant === 'question'
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
        structureDrag: buildStructureDrag('Present Simple', instructionByVariant(variant, audience, holidayContext ? 'Use present simple for traditions and repeated celebrations.' : seasonContext ? 'Use present simple for seasonal facts and habits.' : 'Focus on subject, auxiliary, and base verb when needed.'), prompt, 'from-emerald-400 to-teal-600', parts, holidayContext ? 'Talk about customs and traditions as repeated facts.' : seasonContext ? 'Describe seasonal facts with a real class context.' : 'Choose do/does only when the sentence needs support.', 'easy')
      };
    }
  },
  {
    id: 'present-continuous',
    aliases: [/\bpresent continuous\b/, /\bpresent progressive\b/, /\b(am|is|are)\s+\w+ing\b/, /right now/, /at the moment/, /clothes|ropa|wearing|appearance|apariencia|style|estilo/],
    accentColor: 'from-cyan-400 to-blue-600',
    buildSlide: (variant, audience, text) => {
      const clothingContext = /clothes|ropa|wear|wearing|apariencia|appearance|style|estilo/.test(text);
      const weatherContext = /weather|clima|season|estacion|estaciones|rain|raining|sunny|cloudy|cold|hot/.test(text);
      const prompt =
        clothingContext
          ? variant === 'question'
            ? promptFor(text, ['What are you wearing today?', 'Is she wearing a jacket today?'])
            : variant === 'negative'
              ? promptFor(text, ['She is not wearing a jacket today.', 'They are not wearing uniforms.'])
              : promptFor(text, ['She is wearing a blue jacket today.', 'They are wearing school uniforms.'])
        : weatherContext
          ? variant === 'question'
            ? promptFor(text, ['Is it raining today?', 'Is the weather changing now?'])
            : variant === 'negative'
              ? promptFor(text, ['It is not raining today.', 'The weather is not changing now.'])
              : promptFor(text, ['It is raining today.', 'The weather is changing now.'])
        : variant === 'question'
          ? promptFor(text, ['Are they studying right now?', 'Is she working at the moment?'])
          : variant === 'negative'
            ? promptFor(text, ["He isn't sleeping now.", "We aren't watching TV right now."])
            : promptFor(text, ['They are studying right now.', 'She is working at the moment.']);
      const parts =
        clothingContext
          ? variant === 'question'
            ? [
                { label: 'Question word', text: 'What', color: COLORS.question },
                { label: 'Auxiliary', text: 'are', color: COLORS.auxiliary },
                { label: 'Subject', text: 'you', color: COLORS.subject },
                { label: 'Verb', text: 'wearing', color: COLORS.verb },
                { label: 'Time', text: 'today', color: COLORS.time }
              ]
            : variant === 'negative'
              ? [
                  { label: 'Subject', text: 'She', color: COLORS.subject },
                  { label: 'Negative auxiliary', text: 'is not', color: COLORS.negative },
                  { label: 'Verb', text: 'wearing', color: COLORS.verb },
                  { label: 'Complement', text: 'a jacket today', color: COLORS.complement }
                ]
              : [
                  { label: 'Subject', text: 'She', color: COLORS.subject },
                  { label: 'Auxiliary', text: 'is', color: COLORS.auxiliary },
                  { label: 'Verb', text: 'wearing', color: COLORS.verb },
                  { label: 'Complement', text: 'a blue jacket today', color: COLORS.complement }
                ]
        : weatherContext
          ? variant === 'question'
            ? [
                { label: 'Auxiliary', text: 'Is', color: COLORS.auxiliary },
                { label: 'Subject', text: 'it', color: COLORS.subject },
                { label: 'Verb', text: 'raining', color: COLORS.verb },
                { label: 'Time', text: 'today', color: COLORS.time }
              ]
            : variant === 'negative'
              ? [
                  { label: 'Subject', text: 'It', color: COLORS.subject },
                  { label: 'Negative auxiliary', text: 'is not', color: COLORS.negative },
                  { label: 'Verb', text: 'raining', color: COLORS.verb },
                  { label: 'Time', text: 'today', color: COLORS.time }
                ]
              : [
                  { label: 'Subject', text: 'It', color: COLORS.subject },
                  { label: 'Auxiliary', text: 'is', color: COLORS.auxiliary },
                  { label: 'Verb', text: 'raining', color: COLORS.verb },
                  { label: 'Time', text: 'today', color: COLORS.time }
                ]
        : variant === 'question'
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
        structureDrag: buildStructureDrag('Present Continuous', instructionByVariant(variant, audience, clothingContext ? 'Use be + wearing to describe clothes and appearance now.' : weatherContext ? 'Use be + verb + ing for weather happening now.' : 'Use subject, be, and verb + ing.'), prompt, 'from-cyan-400 to-blue-600', parts, clothingContext ? 'Describe appearance with a real class context.' : weatherContext ? 'Describe current weather with the target structure.' : 'See that be is only the helper for an action happening now.', 'medium')
      };
    }
  },
  {
    id: 'past-continuous',
    aliases: [/\bpast continuous\b/, /\b(was|were)\s+\w+ing\b/, /while/, /at \d+.*yesterday/],
    accentColor: 'from-orange-400 to-purple-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Were you studying when I called?', 'Was she working at 8 PM?'])
          : variant === 'negative'
            ? promptFor(text, ['They were not watching TV at 8 PM.', 'He was not sleeping when I arrived.'])
            : promptFor(text, ['I was studying when you called.', 'They were playing soccer at 5 PM.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Were', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Verb', text: 'studying', color: COLORS.verb },
              { label: 'Time clause', text: 'when I called', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'They', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'were not', color: COLORS.negative },
                { label: 'Verb', text: 'watching TV', color: COLORS.verb },
                { label: 'Time', text: 'at 8 PM', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Auxiliary', text: 'was', color: COLORS.auxiliary },
                { label: 'Verb', text: 'studying', color: COLORS.verb },
                { label: 'Time clause', text: 'when you called', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Past Continuous / Arma el Pasado Continuo'),
        description: 'Past continuous',
        content: [],
        structureDrag: buildStructureDrag('Past Continuous', instructionByVariant(variant, audience, 'Use was/were + verb + ing for an action in progress in the past.'), prompt, 'from-orange-400 to-purple-600', parts, 'Connect an interrupted past action with the correct helper.', 'medium')
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
        structureDrag: buildStructureDrag('Past Simple', instructionByVariant(variant, audience, 'Use did only in questions and negatives.'), prompt, 'from-amber-400 to-rose-500', parts, 'Keep the main verb in base form after did.', 'medium')
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
        structureDrag: buildStructureDrag('Going To', instructionByVariant(variant, audience, 'Use be + going to + base verb.'), prompt, 'from-sky-400 to-indigo-600', parts, 'Mark plans and intentions with be + going to.', 'medium')
      };
    }
  },
  {
    id: 'future-will',
    aliases: [/\bfuture\b/, /\bwill\b/],
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
        structureDrag: buildStructureDrag('Future With Will', instructionByVariant(variant, audience, 'Use will + base verb.'), prompt, 'from-blue-400 to-violet-600', parts, 'Use will for predictions, promises, offers, and quick decisions.', 'medium')
      };
    }
  },
  {
    id: 'modal-advice',
    aliases: [/\bshould\b/, /\bshould not\b/, /\bshouldn't\b/, /\bought to\b/, /advice/, /consejo/],
    accentColor: 'from-lime-400 to-teal-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Should I call the doctor?', 'Should we study tonight?'])
          : variant === 'negative'
            ? promptFor(text, ['You should not go to bed late.', 'He should not skip breakfast.'])
            : promptFor(text, ['You should drink more water.', 'She ought to rest today.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Modal', text: 'Should', color: COLORS.auxiliary },
              { label: 'Subject', text: 'I', color: COLORS.subject },
              { label: 'Verb', text: 'call', color: COLORS.verb },
              { label: 'Complement', text: 'the doctor', color: COLORS.complement }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'You', color: COLORS.subject },
                { label: 'Negative modal', text: 'should not', color: COLORS.negative },
                { label: 'Verb', text: 'go to bed', color: COLORS.verb },
                { label: 'Time', text: 'late', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'You', color: COLORS.subject },
                { label: 'Modal', text: 'should', color: COLORS.auxiliary },
                { label: 'Verb', text: 'drink', color: COLORS.verb },
                { label: 'Complement', text: 'more water', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build Advice with Modals / Arma Consejos con Modales'),
        description: 'Modals for advice',
        content: [],
        structureDrag: buildStructureDrag('Modal Advice', instructionByVariant(variant, audience, 'Use should or ought to + base verb.'), prompt, 'from-lime-400 to-teal-600', parts, 'Give advice without changing the main verb.', 'medium')
      };
    }
  },
  {
    id: 'modal-obligation',
    aliases: [/\bmust\b/, /\bhave to\b/, /\bhas to\b/, /\bdon't have to\b/, /\bmust not\b/, /obligation/, /obligacion/],
    accentColor: 'from-red-400 to-amber-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Do we have to wear a uniform?', 'Must I finish this today?'])
          : variant === 'negative'
            ? promptFor(text, ['You must not use your phone here.', "We don't have to work tomorrow."])
            : promptFor(text, ['You must wear a helmet.', 'She has to finish the report.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Do', color: COLORS.auxiliary },
              { label: 'Subject', text: 'we', color: COLORS.subject },
              { label: 'Obligation form', text: 'have to', color: COLORS.verb },
              { label: 'Verb', text: 'wear', color: COLORS.verb },
              { label: 'Complement', text: 'a uniform', color: COLORS.complement }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'You', color: COLORS.subject },
                { label: 'Negative modal', text: 'must not', color: COLORS.negative },
                { label: 'Verb', text: 'use', color: COLORS.verb },
                { label: 'Complement', text: 'your phone here', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Obligation form', text: 'has to', color: COLORS.auxiliary },
                { label: 'Verb', text: 'finish', color: COLORS.verb },
                { label: 'Complement', text: 'the report', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build Obligation / Arma Obligaciones'),
        description: 'Modals of obligation',
        content: [],
        structureDrag: buildStructureDrag('Obligation Modals', instructionByVariant(variant, audience, 'Use must or have to for rules and responsibilities.'), prompt, 'from-red-400 to-amber-600', parts, 'Notice the difference between obligation and prohibition.', 'medium')
      };
    }
  },
  {
    id: 'modal-possibility',
    aliases: [/\bmay\b/, /\bmight\b/, /\bcould\b/, /possibility/, /deduction/, /posibilidad/, /deduccion/],
    accentColor: 'from-sky-400 to-violet-600',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Could it rain later?', 'Might she be at home?'])
          : variant === 'negative'
            ? promptFor(text, ['It might not rain today.', 'He may not know the answer.'])
            : promptFor(text, ['It might rain later.', 'She could be at home.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Modal', text: 'Could', color: COLORS.auxiliary },
              { label: 'Subject', text: 'it', color: COLORS.subject },
              { label: 'Verb', text: 'rain', color: COLORS.verb },
              { label: 'Time', text: 'later', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'It', color: COLORS.subject },
                { label: 'Negative modal', text: 'might not', color: COLORS.negative },
                { label: 'Verb', text: 'rain', color: COLORS.verb },
                { label: 'Time', text: 'today', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Modal', text: 'could', color: COLORS.auxiliary },
                { label: 'Verb', text: 'be', color: COLORS.verb },
                { label: 'Complement', text: 'at home', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build Possibility / Arma Posibilidades'),
        description: 'Modals of possibility',
        content: [],
        structureDrag: buildStructureDrag('Possibility Modals', instructionByVariant(variant, audience, 'Use may, might, or could + base verb.'), prompt, 'from-sky-400 to-violet-600', parts, 'Express uncertainty without overcommitting.', 'medium')
      };
    }
  },
  {
    id: 'can-modal',
    aliases: [/\bcan\b/, /\bcan't\b/, /\bcannot\b/, /\bcould\b/, /ability/, /abilities/, /habilidades?/, /can i have/, /could i/, /do you have/, /permisos?/, /peticiones?/],
    accentColor: 'from-lime-400 to-emerald-600',
    buildSlide: (variant, audience, text) => {
      const shoppingContext = /shopping|compras?|prices?|precios?|clothes|ropa|try on|size|talla/.test(text);
      const phoneContext = /phone|telephone|telefonicas?|telefono|call|llamada/.test(text);
      const techContext = /technology|tecnologia|tech|society|sociedad|ethics|etica|global issues?|temas globales/.test(text);
      const requestContext = shoppingContext || phoneContext || /restaurant|order|menu|water|food|store|waiter|customer|can i have|could i/.test(text);
      const prompt = requestContext
        ? promptFor(text, phoneContext ? ['Can I speak to Ana, please?', 'Could I leave a message, please?'] : shoppingContext ? ['Can I try on this jacket, please?', 'Could I get a smaller size, please?'] : ['Can I have a salad, please?', 'Could I get some water, please?'])
        : variant === 'question'
          ? promptFor(text, techContext ? ['Can technology help society?', 'Can people use technology ethically?'] : ['Can you help me?', 'Can she swim fast?'])
          : promptFor(text, techContext ? ['Technology can help society.', 'People can use technology responsibly.'] : ['I can swim very well.', 'He can help his team.']);

      const parts = requestContext
        ? [
            { label: 'Modal', text: 'Can', color: COLORS.auxiliary },
            { label: 'Subject', text: 'I', color: COLORS.subject },
            { label: 'Verb', text: phoneContext ? 'speak to' : shoppingContext ? 'try on' : 'have', color: COLORS.verb },
            { label: 'Complement', text: phoneContext ? 'Ana, please' : shoppingContext ? 'this jacket, please' : 'a salad, please', color: COLORS.complement }
          ]
        : variant === 'question'
          ? [
              { label: 'Modal', text: 'Can', color: COLORS.auxiliary },
              { label: 'Subject', text: techContext ? 'technology' : 'you', color: COLORS.subject },
              { label: 'Verb', text: techContext ? 'help' : 'help me', color: COLORS.verb },
              ...(techContext ? [{ label: 'Complement', text: 'society', color: COLORS.complement }] : [])
            ]
          : [
              { label: 'Subject', text: techContext ? 'Technology' : 'I', color: COLORS.subject },
              { label: 'Modal', text: 'can', color: COLORS.auxiliary },
              { label: 'Verb', text: techContext ? 'help' : 'swim very well', color: COLORS.verb },
              ...(techContext ? [{ label: 'Complement', text: 'society', color: COLORS.complement }] : [])
            ];

      return {
        title: requestContext ? 'Build the Polite Question / Arma la Pregunta Cortes' : titleByVariant(variant, audience, 'Build with Can / Arma con Can'),
        description: requestContext ? 'Polite request' : 'Modal verb',
        content: [],
        structureDrag: buildStructureDrag(requestContext ? 'Can For Requests' : 'Can / Ability', instructionByVariant(requestContext ? 'question' : variant, audience, requestContext ? 'Make a polite request in the correct order.' : 'Use can + base verb.'), prompt, 'from-lime-400 to-emerald-600', parts, requestContext ? 'Turn a need into a polite request.' : 'Talk about ability without changing the main verb.', 'easy')
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
        structureDrag: buildStructureDrag('Have / Has', instructionByVariant(variant, audience, 'Focus on possession and the correct auxiliary.'), prompt, 'from-yellow-400 to-orange-600', parts, 'Choose have/has and do/does by subject.', 'easy')
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
      ], 'Describe existence before describing location.', 'easy')
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
      ], 'Start commands and directions with the action.', 'easy')
    })
  },
  {
    id: 'past-perfect',
    aliases: [/\bpast perfect\b/, /\bhad\s+\w+ed\b/, /\bhad been\b/, /before .*past/, /already .*when/],
    accentColor: 'from-indigo-500 to-slate-700',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Had you finished before the meeting?', 'Had they left when you arrived?'])
          : variant === 'negative'
            ? promptFor(text, ['She had not finished before lunch.', 'They had not left yet.'])
            : promptFor(text, ['I had finished before the meeting.', 'They had left when we arrived.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Had', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Past participle', text: 'finished', color: COLORS.verb },
              { label: 'Time marker', text: 'before the meeting', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'She', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'had not', color: COLORS.negative },
                { label: 'Past participle', text: 'finished', color: COLORS.verb },
                { label: 'Time marker', text: 'before lunch', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Auxiliary', text: 'had', color: COLORS.auxiliary },
                { label: 'Past participle', text: 'finished', color: COLORS.verb },
                { label: 'Time marker', text: 'before the meeting', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Past Perfect / Arma el Past Perfect'),
        description: 'Past perfect',
        content: [],
        structureDrag: buildStructureDrag('Past Perfect', instructionByVariant(variant, audience, 'Use had + past participle for the earlier past action.'), prompt, 'from-indigo-500 to-slate-700', parts, 'Show which past action happened first.', 'hard')
      };
    }
  },
  {
    id: 'present-perfect',
    aliases: [/\bpresent perfect\b/, /life experiences?/, /\bhave\s+\w+ed\b/, /\bhas\s+\w+ed\b/, /already/, /yet/, /ever/, /never/],
    accentColor: 'from-violet-400 to-indigo-600',
    buildSlide: (variant, audience, text) => ({
      title: titleByVariant(variant, audience, 'Build the Present Perfect / Arma el Present Perfect'),
      description: 'Present perfect',
      content: [],
      structureDrag: buildStructureDrag('Present Perfect', instructionByVariant(variant, audience, 'Use have or has + past participle.'), promptFor(text, variant === 'question' ? ['Have you finished your homework yet?'] : variant === 'negative' ? ['I have not finished my homework yet.'] : ['I have finished my homework already.']), 'from-violet-400 to-indigo-600', variant === 'question' ? [
        { label: 'Auxiliary', text: 'Have', color: COLORS.auxiliary },
        { label: 'Subject', text: 'you', color: COLORS.subject },
        { label: 'Verb', text: 'finished', color: COLORS.verb },
        { label: 'Complement', text: 'your homework yet', color: COLORS.complement }
      ] : variant === 'negative' ? [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Negative auxiliary', text: 'have not', color: COLORS.negative },
        { label: 'Past participle', text: 'finished', color: COLORS.verb },
        { label: 'Complement', text: 'my homework yet', color: COLORS.complement }
      ] : [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Auxiliary', text: 'have', color: COLORS.auxiliary },
        { label: 'Verb', text: 'finished', color: COLORS.verb },
        { label: 'Complement', text: 'my homework already', color: COLORS.complement }
      ], 'Connect a past experience or result with the present.', 'hard')
    })
  },
  {
    id: 'present-perfect-continuous',
    aliases: [/\bpresent perfect continuous\b/, /have been \w+ing/, /has been \w+ing/, /for \d+/, /since/],
    accentColor: 'from-fuchsia-400 to-cyan-600',
    buildSlide: (variant, audience, text) => ({
      title: titleByVariant(variant, audience, 'Build the Present Perfect Continuous / Arma el Present Perfect Continuous'),
      description: 'Present perfect continuous',
      content: [],
      structureDrag: buildStructureDrag('Present Perfect Continuous', instructionByVariant(variant, audience, 'Use have or has been + verb + ing.'), promptFor(text, variant === 'question' ? ['Have you been studying for two hours?'] : variant === 'negative' ? ['I have not been studying for two hours.'] : ['I have been studying for two hours.']), 'from-fuchsia-400 to-cyan-600', variant === 'question' ? [
        { label: 'Auxiliary', text: 'Have', color: COLORS.auxiliary },
        { label: 'Subject', text: 'you', color: COLORS.subject },
        { label: 'Continuous form', text: 'been studying', color: COLORS.verb },
        { label: 'Time', text: 'for two hours', color: COLORS.time }
      ] : variant === 'negative' ? [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Negative auxiliary', text: 'have not been', color: COLORS.negative },
        { label: 'Verb', text: 'studying', color: COLORS.verb },
        { label: 'Time', text: 'for two hours', color: COLORS.time }
      ] : [
        { label: 'Subject', text: 'I', color: COLORS.subject },
        { label: 'Auxiliary', text: 'have been', color: COLORS.auxiliary },
        { label: 'Verb', text: 'studying', color: COLORS.verb },
        { label: 'Time', text: 'for two hours', color: COLORS.time }
      ], 'Show duration from the past until now.', 'hard')
    })
  },
  {
    id: 'future-continuous',
    aliases: [/\bfuture continuous\b/, /\bwill be\s+\w+ing\b/],
    accentColor: 'from-blue-500 to-cyan-700',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Will you be working at 5 PM?', 'Will they be studying tonight?'])
          : variant === 'negative'
            ? promptFor(text, ['I will not be working at 5 PM.', 'They will not be studying tonight.'])
            : promptFor(text, ['I will be working at 5 PM.', 'They will be traveling tomorrow.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Will', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Continuous future', text: 'be working', color: COLORS.verb },
              { label: 'Time', text: 'at 5 PM', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative future', text: 'will not', color: COLORS.negative },
                { label: 'Continuous form', text: 'be working', color: COLORS.verb },
                { label: 'Time', text: 'at 5 PM', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Auxiliary', text: 'will', color: COLORS.auxiliary },
                { label: 'Continuous future', text: 'be working', color: COLORS.verb },
                { label: 'Time', text: 'at 5 PM', color: COLORS.time }
              ];
      return {
        title: titleByVariant(variant, audience, 'Build the Future Continuous / Arma el Futuro Continuo'),
        description: 'Future continuous',
        content: [],
        structureDrag: buildStructureDrag('Future Continuous', instructionByVariant(variant, audience, 'Use will be + verb + ing.'), prompt, 'from-blue-500 to-cyan-700', parts, 'Describe an action in progress at a future moment.', 'hard')
      };
    }
  },
  {
    id: 'future-perfect',
    aliases: [/\bfuture perfect\b/, /\bwill have\s+\w+ed\b/, /by tomorrow/, /by next/],
    accentColor: 'from-violet-500 to-slate-700',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Will you have finished by tomorrow?', 'Will they have arrived by noon?'])
          : variant === 'negative'
            ? promptFor(text, ['I will not have finished by tomorrow.', 'They will not have arrived by noon.'])
            : promptFor(text, ['I will have finished by tomorrow.', 'They will have arrived by noon.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Auxiliary', text: 'Will', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Perfect future', text: 'have finished', color: COLORS.verb },
              { label: 'Deadline', text: 'by tomorrow', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative future', text: 'will not', color: COLORS.negative },
                { label: 'Perfect form', text: 'have finished', color: COLORS.verb },
                { label: 'Deadline', text: 'by tomorrow', color: COLORS.time }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Auxiliary', text: 'will', color: COLORS.auxiliary },
                { label: 'Perfect future', text: 'have finished', color: COLORS.verb },
                { label: 'Deadline', text: 'by tomorrow', color: COLORS.time }
              ];
      return {
        title: titleByVariant(variant, audience, 'Build the Future Perfect / Arma el Futuro Perfecto'),
        description: 'Future perfect',
        content: [],
        structureDrag: buildStructureDrag('Future Perfect', instructionByVariant(variant, audience, 'Use will have + past participle before a deadline.'), prompt, 'from-violet-500 to-slate-700', parts, 'Show what will be complete before a future time.', 'challenge')
      };
    }
  },
  {
    id: 'comparatives-superlatives',
    aliases: [/comparative/, /superlative/, /comparativos?/, /superlativos?/, /\bbetter than\b/, /\bmore .* than\b/, /\bthe most\b/, /\bthe .*est\b/],
    accentColor: 'from-pink-400 to-orange-600',
    buildSlide: (variant, audience, text) => {
      const isSuperlative = /superlative|superlativo|the most|the .*est/.test(text);
      const prompt = isSuperlative
        ? promptFor(text, ['This is the most useful app.', 'He is the tallest student in class.'])
        : variant === 'negative'
          ? promptFor(text, ['This phone is not cheaper than that one.', 'Soccer is not easier than tennis.'])
          : promptFor(text, ['This phone is cheaper than that one.', 'My laptop is more expensive than yours.']);
      const parts = isSuperlative
        ? [
            { label: 'Subject', text: 'This', color: COLORS.subject },
            { label: 'To be', text: 'is', color: COLORS.auxiliary },
            { label: 'Superlative', text: 'the most useful', color: COLORS.verb },
            { label: 'Noun', text: 'app', color: COLORS.complement }
          ]
        : variant === 'negative'
          ? [
              { label: 'Subject', text: 'This phone', color: COLORS.subject },
              { label: 'Negative to be', text: 'is not', color: COLORS.negative },
              { label: 'Comparative', text: 'cheaper than', color: COLORS.verb },
              { label: 'Object', text: 'that one', color: COLORS.complement }
            ]
          : [
              { label: 'Subject', text: 'My laptop', color: COLORS.subject },
              { label: 'To be', text: 'is', color: COLORS.auxiliary },
              { label: 'Comparative', text: 'more expensive than', color: COLORS.verb },
              { label: 'Object', text: 'yours', color: COLORS.complement }
            ];
      return {
        title: isSuperlative ? 'Build the Superlative / Arma el Superlativo' : titleByVariant(variant, audience, 'Build the Comparative / Arma el Comparativo'),
        description: isSuperlative ? 'Superlatives' : 'Comparatives',
        content: [],
        structureDrag: buildStructureDrag(isSuperlative ? 'Superlative' : 'Comparative', instructionByVariant(isSuperlative ? 'affirmative' : variant, audience, isSuperlative ? 'Use the + adjective-est or the most + adjective.' : 'Use adjective-er than or more + adjective + than.'), prompt, 'from-pink-400 to-orange-600', parts, 'Compare two things or identify the number one in a group.', 'medium')
      };
    }
  },
  {
    id: 'conditional',
    aliases: [/\bfirst conditional\b/, /\bsecond conditional\b/, /\bthird conditional\b/, /\bmixed conditionals?\b/, /\bconditionals?\b/, /condicional(?:es)?/, /\bif\b/],
    accentColor: 'from-orange-400 to-pink-600',
    buildSlide: (variant, audience, text) => ({
      title: titleByVariant(variant, audience, 'Build the Conditional / Arma el Condicional'),
      description: 'Conditional pattern',
      content: [],
      structureDrag: buildStructureDrag('Conditional', instructionByVariant(variant, audience, 'Place the if clause and the result clause in the correct order.'), promptFor(text, variant === 'question' ? ['What would you do if you had more time?'] : variant === 'negative' ? ['If it does not rain, I will not stay home.'] : ['If it rains, I will stay home.', 'If I had more time, I would travel more.']), 'from-orange-400 to-pink-600', variant === 'question' ? [
        { label: 'Question word', text: 'What', color: COLORS.question },
        { label: 'Modal', text: 'would', color: COLORS.auxiliary },
        { label: 'Subject', text: 'you', color: COLORS.subject },
        { label: 'Verb', text: 'do', color: COLORS.verb },
        { label: 'If clause', text: 'if you had more time', color: COLORS.connector }
      ] : variant === 'negative' ? [
        { label: 'If clause', text: 'If it does not rain', color: COLORS.connector },
        { label: 'Result subject', text: 'I', color: COLORS.subject },
        { label: 'Negative result', text: 'will not', color: COLORS.negative },
        { label: 'Verb', text: 'stay home', color: COLORS.verb }
      ] : [
        { label: 'If clause', text: 'If it rains', color: COLORS.connector },
        { label: 'Result', text: 'I will stay home', color: COLORS.complement }
      ], 'Link a condition with its result.', 'hard')
    })
  },
  {
    id: 'phrasal-verbs',
    aliases: [/phrasal verbs?/, /look up/, /turn on/, /give up/, /get along/, /pick up/],
    accentColor: 'from-emerald-500 to-blue-700',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['Can you look up the word online?', 'Did you turn on the computer?'])
          : variant === 'negative'
            ? promptFor(text, ['I do not give up easily.', 'She does not turn off her phone.'])
            : promptFor(text, ['I look up new words online.', 'She gets along with her team.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Modal', text: 'Can', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Phrasal verb', text: 'look up', color: COLORS.verb },
              { label: 'Object', text: 'the word online', color: COLORS.complement }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative auxiliary', text: 'do not', color: COLORS.negative },
                { label: 'Phrasal verb', text: 'give up', color: COLORS.verb },
                { label: 'Complement', text: 'easily', color: COLORS.complement }
              ]
            : [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Phrasal verb', text: 'look up', color: COLORS.verb },
                { label: 'Object', text: 'new words', color: COLORS.complement },
                { label: 'Place', text: 'online', color: COLORS.time }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Phrasal Verb / Arma el Phrasal Verb'),
        description: 'Phrasal verbs',
        content: [],
        structureDrag: buildStructureDrag('Phrasal Verbs', instructionByVariant(variant, audience, 'Keep the verb and particle together unless the object needs to separate them.'), prompt, 'from-emerald-500 to-blue-700', parts, 'Practice meaning as a verb + particle unit.', 'hard')
      };
    }
  },
  {
    id: 'presentation-intro',
    aliases: [/presentations?/, /introductions? academicas?/, /alto impacto/, /pitch/, /ted talks?/],
    accentColor: 'from-cyan-500 to-violet-700',
    buildSlide: (variant, audience, text) => {
      const prompt =
        variant === 'question'
          ? promptFor(text, ['What are you going to present today?', 'How will you introduce your main idea?'])
          : variant === 'negative'
            ? promptFor(text, ['I will not start with too much detail.', 'We are not going to read every slide.'])
            : promptFor(text, ['Today, I am going to present my main idea clearly.', 'My presentation focuses on one clear problem.']);
      const parts =
        variant === 'question'
          ? [
              { label: 'Question word', text: 'What', color: COLORS.question },
              { label: 'Auxiliary', text: 'are', color: COLORS.auxiliary },
              { label: 'Subject', text: 'you', color: COLORS.subject },
              { label: 'Presentation plan', text: 'going to present', color: COLORS.verb },
              { label: 'Time', text: 'today', color: COLORS.time }
            ]
          : variant === 'negative'
            ? [
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Negative future', text: 'will not', color: COLORS.negative },
                { label: 'Verb', text: 'start', color: COLORS.verb },
                { label: 'Complement', text: 'with too much detail', color: COLORS.complement }
              ]
            : [
                { label: 'Time opener', text: 'Today', color: COLORS.time },
                { label: 'Subject', text: 'I', color: COLORS.subject },
                { label: 'Plan', text: 'am going to present', color: COLORS.auxiliary },
                { label: 'Message', text: 'my main idea clearly', color: COLORS.complement }
              ];

      return {
        title: titleByVariant(variant, audience, 'Build the Presentation Opener / Arma la Apertura'),
        description: 'Presentation opener',
        content: [],
        structureDrag: buildStructureDrag('Presentation Opener', instructionByVariant(variant, audience, 'Organize the opening sentence before adding details.'), prompt, 'from-cyan-500 to-violet-700', parts, 'Start academic or professional presentations with a clear frame.', 'hard')
      };
    }
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
      ], 'Focus on the action or result instead of the person who did it.', 'hard')
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
      ], "Report another person's idea with the correct backshift.", 'challenge')
    })
  }
];

const PATTERN_SPECIFICITY: Record<string, number> = {
  spelling: 80,
  'future-perfect': 76,
  'future-continuous': 75,
  'present-perfect-continuous': 74,
  'past-perfect': 73,
  'present-perfect': 70,
  'past-continuous': 68,
  'present-continuous': 66,
  'modal-obligation': 64,
  'modal-advice': 63,
  'modal-possibility': 62,
  'comparatives-superlatives': 60,
  conditional: 58,
  'phrasal-verbs': 57,
  passive: 56,
  'reported-speech': 55,
  'presentation-intro': 54,
  'going-to': 52,
  'future-will': 50,
  'past-simple': 48,
  'present-simple': 46,
  'past-to-be': 44,
  'there-is-are': 42,
  'can-modal': 60,
  'have-has': 38,
  imperative: 36,
  'to-be': 20,
  'spelling-question': 80
};

function inferVariant(text: string): PatternVariant {
  if (/\bnegative\b|\bnegativ|\bnot\b|\bdon't\b|\bdoesn't\b|\bdidn't\b|\baren't\b|\bisn't\b|\bwon't\b|\bcan't\b/.test(text)) return 'negative';
  if (/\?|question|asking|ask|pregunta|how old are you|what is your name|when is your birthday|where is|what are|can you|do you|did you|could i|can i have/.test(text)) return 'question';
  return 'affirmative';
}

function hasExplicitVariantSignal(text: string) {
  return /\baffirmative\b|\bpositive\b|\bnegative\b|\bnegativ|\bnot\b|\bdon't\b|\bdoesn't\b|\bdidn't\b|\baren't\b|\bisn't\b|\bwon't\b|\bcan't\b|\?|question|asking|ask|pregunta/.test(text);
}

function variantFromSeed(seed: string): PatternVariant {
  return (['affirmative', 'negative', 'question'] as const)[hashString(seed) % 3];
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
  const matches = PATTERNS.filter((pattern) => {
    const hasAlias = pattern.aliases.some((alias) => alias.test(text));
    if (!hasAlias) return false;
    if (pattern.lessonGuard && !pattern.lessonGuard.some((guard) => guard.test(text))) return false;
    return true;
  });

  if (!matches.length) return null;

  return matches
    .map((pattern) => ({
      pattern,
      score:
        (PATTERN_SPECIFICITY[pattern.id] || 0) +
        pattern.aliases.reduce((sum, alias) => sum + (alias.test(text) ? 4 : 0), 0) +
        (pattern.id === 'to-be' && /(present continuous|past continuous|future continuous|passive|comparative|superlative|modal|will be|going to|have been|had been)/.test(text) ? -40 : 0)
    }))
    .sort((a, b) => b.score - a.score)[0].pattern;
}

function choosePattern(cls: CurriculumClass, section: ClassSection, slide: ClassSlide) {
  const classTargetText = normalizeText([
    cls.title,
    cls.description || '',
    cls.objective || ''
  ].join(' '));

  if (/numbers?|numeros?|time|hora|clock|o'clock/.test(classTargetText)) {
    return PATTERNS.find((pattern) => pattern.id === 'to-be') || null;
  }

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

  if (/alphabet|alfabeto|spelling|deletreo|usernames?/.test(classTargetText)) {
    return PATTERNS.find((pattern) => pattern.id === 'spelling-question') || null;
  }

  if (/restaurant|order|menu|water|food|store|waiter|customer|can i have|could i|get the bill|the bill please/.test(classTargetText)) {
    return PATTERNS.find((pattern) => pattern.id === 'can-modal') || null;
  }

  const classPattern = findPattern(classTargetText);
  if (classPattern) return classPattern;

  if (/alphabet|alfabeto|spelling|deletreo|usernames?/.test(fullText)) {
    return PATTERNS.find((pattern) => pattern.id === 'spelling-question') || null;
  }

  if (/restaurant|order|menu|water|food|store|waiter|customer|can i have|could i|get the bill|the bill please/.test(fullText)) {
    return PATTERNS.find((pattern) => pattern.id === 'can-modal') || null;
  }

  return findPattern(fullText);
}

function fallbackPatternForClass(cls: CurriculumClass) {
  const text = normalizeText(`${cls.id} ${cls.title} ${cls.description || ''} ${cls.objective || ''}`);
  const byId = (id: string) => PATTERNS.find((pattern) => pattern.id === id) || null;

  if (/numbers?|numeros?|time|hora|clock|o'clock/.test(text)) return byId('to-be');
  if (/alphabet|alfabeto|spell|spelling|deletreo/.test(text)) return byId('spelling-question');
  if (/directions?|direcciones?|vehicles?|transport|city|town|calle|around the world/.test(text)) return byId('imperative');
  if (/shopping|compras?|restaurant|food|fruits?|fast food|yummy|prices?|precios?|phone|telephone|telefonicas?|telefono|call|llamada/.test(text)) return byId('can-modal');
  if (/clothes|ropa|weather|apariencia|appearance|style|estilo|fashion/.test(text)) return byId('present-continuous');
  if (/house|room|rooms|nature|bugs|insects|under the sea|farm animals|wild animals|pets|toys|school supplies/.test(text)) return byId('there-is-are');
  if (/family|posesivos?|possessives?|favorite toys/.test(text)) return byId('have-has');
  if (/body|actions?|hobbies|sports|playground|helper|music|can\b|can't|habilidades?/.test(text)) return byId('can-modal');
  if (/future|space|grow up|dream jobs?|planes|plans?/.test(text)) return byId('future-will');
  if (/fairy tales?|stories|anecdotas|past|recuerdos/.test(text)) return byId('past-simple');
  if (/holidays?|festivals?|traditions?|routine|days? of the week|seasons?|jobs?|professions?|animals?|habits?/.test(text)) return byId('present-simple');
  if (/colors?|colores?|emotions?|feelings?|shapes?|numbers?|hello|greetings?|introductions?/.test(text)) return byId('to-be');

  return byId('present-simple');
}

function findFallbackAnchor(cls: CurriculumClass) {
  for (const section of cls.sections) {
    const slide = section.slides.find(shouldInspectSlide);
    if (slide) return { section, slide };
  }
  return null;
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
  const custom = getCustomClassStructure(audience, cls.id);
  if (custom) {
    return {
      id: `${slide.id}-structure-drag-custom`,
      type: 'structure-drag',
      bgColor: `bg-gradient-to-br ${custom.accentColor}`,
      title: custom.title,
      description: custom.patternName,
      content: [],
      structureDrag: buildStructureDrag(
        custom.patternName,
        custom.instructions,
        custom.prompt,
        custom.accentColor,
        custom.parts,
        custom.learningOpportunity,
        custom.difficulty
      )
    };
  }

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

  const built = applyClassSpecificStructureOverride(
    cls,
    pattern,
    variant,
    pattern.buildSlide(variant, audience, fullText)
  );

  return {
    id: `${slide.id}-structure-drag-${pattern.id}-${variant}`,
    type: 'structure-drag',
    bgColor: `bg-gradient-to-br ${pattern.accentColor}`,
    ...built
  };
}

export function injectStructureDragSlides(cls: CurriculumClass): CurriculumClass {
  const audience = audienceFromClass(cls);
  const custom = getCustomClassStructure(audience, cls.id);

  if (custom) {
    const targetSection = cls.sections[2] || cls.sections[1] || cls.sections[0];
    const anchorSlide = targetSection.slides.find(shouldInspectSlide) || targetSection.slides[0];

    const generatedSlide: ClassSlide = {
      id: `${anchorSlide.id}-structure-drag-custom`,
      type: 'structure-drag',
      bgColor: `bg-gradient-to-br ${custom.accentColor}`,
      title: custom.title,
      description: custom.patternName,
      content: [],
      structureDrag: buildStructureDrag(
        custom.patternName,
        custom.instructions,
        custom.prompt,
        custom.accentColor,
        custom.parts,
        custom.learningOpportunity,
        custom.difficulty
      )
    };

    const sections = cls.sections.map((section) => {
      if (section.id !== targetSection.id) return section;
      const slides = section.slides.flatMap((slide) => {
        if (slide.id === anchorSlide.id) {
          return [slide, generatedSlide];
        }
        return [slide];
      });
      return { ...section, slides };
    });

    return { ...cls, sections };
  }

  let bestWinner: { sectionId: string; slideId: string; generatedSlide: ClassSlide; score: number } | null = null;

  cls.sections.forEach((section) => {
    if (!shouldInspectSection(cls, section)) return;

    section.slides.forEach((slide) => {
      if (!shouldInspectSlide(slide)) return;

      const pattern = choosePattern(cls, section, slide);
      if (!pattern) return;

      const slideSignal = normalizeText([
        slide.title,
        slide.description || '',
        ...(slide.content || []),
        ...(slide.options || [])
      ].join(' '));
      const variant = hasExplicitVariantSignal(slideSignal)
        ? inferVariant(slideSignal)
        : variantFromSeed(`${cls.id}-${section.id}-${slide.id}`);

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

  if (!bestWinner) {
    const anchor = findFallbackAnchor(cls);
    const pattern = fallbackPatternForClass(cls);
    if (anchor && pattern) {
      const variant = variantFromSeed(`${cls.id}-${anchor.section.id}-${anchor.slide.id}`);
      bestWinner = {
        sectionId: anchor.section.id,
        slideId: anchor.slide.id,
        generatedSlide: createStructureDragSlide(cls, anchor.section, anchor.slide, pattern, variant),
        score: 1
      };
    }
  }

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
