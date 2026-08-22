import { ClassSlide } from '../types';

export interface SlideTypeConfig {
  type: string;
  name: string;
  category: 'standard' | 'interactive' | 'game' | 'speaking' | 'evaluation';
  description: string;
  supportsImage: boolean;
  supportsQuizOptions: boolean;
  hasSpecialSchema: boolean;
  defaultBgColor: string;
  createDefaultSlide: (id: string, title?: string) => Partial<ClassSlide>;
  extractVisualPrompt: (slide: ClassSlide, track?: string, levelObjective?: string) => string;
}

export const SLIDE_TYPE_REGISTRY: Record<string, SlideTypeConfig> = {
  vocabulary: {
    type: 'vocabulary',
    name: 'Tarjetas de Vocabulario 🎴 (3D Flipcards)',
    category: 'interactive',
    description: 'Tarjetas interactivas 3D con audio pronunciación y traducción en español al voltear.',
    supportsImage: false,
    supportsQuizOptions: false,
    hasSpecialSchema: false,
    defaultBgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
    createDefaultSlide: (id, title = 'Key Vocabulary / Vocabulario Clave') => ({
      id,
      title,
      description: 'Haz clic en cada tarjeta para escuchar y voltear su traducción.',
      content: [
        'Work (Trabajar)',
        'Study (Estudiar)',
        'Run (Correr)',
        'Eat (Comer)'
      ],
      bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      type: 'vocabulary'
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      const words = slide.content?.join(', ') || slide.title;
      return `Vocabulary flashcards illustration for ${track}: "${words}". Vibrant, educational, clean icon style.`;
    }
  },
  standard: {
    type: 'standard',
    name: 'Diapositiva Estándar / Contenido',
    category: 'standard',
    description: 'Diapositiva de instrucción, gramática, vocabulario o reglas con puntos clave e imagen.',
    supportsImage: true,
    supportsQuizOptions: false,
    hasSpecialSchema: false,
    defaultBgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
    createDefaultSlide: (id, title = 'Nueva Diapositiva') => ({
      id,
      title,
      description: 'Explicación del concepto o regla gramatical.',
      content: ['Punto clave o ejemplo principal.', 'Segunda oración o explicación contextual.'],
      bgColor: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      type: 'normal'
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      const contentSummary = slide.content?.join(', ') || slide.description || slide.title;
      return `Pedagogical English illustration for ${track}: "${slide.title}". Context: ${contentSummary}. Clean visual, professional, clear focal point, vibrant colors, educational atmosphere.`;
    }
  },
  'multiple-choice': {
    type: 'multiple-choice',
    name: 'Pregunta / Quiz de Selección Múltiple',
    category: 'interactive',
    description: 'Pregunta interactiva con 3 opciones de respuesta y 1 correcta.',
    supportsImage: true,
    supportsQuizOptions: true,
    hasSpecialSchema: false,
    defaultBgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    createDefaultSlide: (id, title = 'Complete the sentence (1/3)') => ({
      id,
      title,
      description: 'Elige la opción correcta para completar la oración.',
      content: ['Lee la oración y selecciona la mejor respuesta.'],
      options: ['Opción A (correcta)', 'Opción B', 'Opción C'],
      correctOptionIndex: 0,
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
      type: 'normal'
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      const correctText = (slide.options && typeof slide.correctOptionIndex === 'number') ? slide.options[slide.correctOptionIndex] : '';
      return `Concept illustration for English quiz. Topic: "${slide.title}". Target meaning or action: "${correctText || slide.description}". Audience: ${track}. Clear, high clarity for screen sharing, distinct narrative.`;
    }
  },
  'roleplay': {
    type: 'roleplay',
    name: 'Roleplay / Conversación Guiada 🎭',
    category: 'speaking',
    description: 'Dinámica conversacional por turnos con personajes, misión, diálogos de apoyo y lista de verificación.',
    supportsImage: true,
    supportsQuizOptions: false,
    hasSpecialSchema: true,
    defaultBgColor: 'bg-gradient-to-br from-indigo-900 to-slate-900',
    createDefaultSlide: (id, title = "Let's Say That... 🎭") => ({
      id,
      title,
      description: 'Conversación guiada y fluida entre profesor y estudiante.',
      type: 'roleplay',
      bgColor: 'bg-gradient-to-br from-indigo-900 to-slate-900',
      content: ["Let's say that you meet a colleague at an international conference. Greet them and ask about their field!"],
      roleplay: {
        mode: 'guided-conversation',
        scenario: 'International Networking Event',
        situation: 'You are meeting someone for the first time at an event.',
        roles: {
          a: { label: 'Teacher / Attendee', goal: 'Ask friendly questions and keep the conversation going.' },
          b: { label: 'Student / Attendee', goal: 'Introduce yourself, state your profession, and ask one question back.' }
        },
        mission: ['Say hello politely', 'State your name and occupation', 'Ask for the other person\'s opinion'],
        steps: [
          {
            id: 'step-1',
            speaker: 'a',
            title: 'Greeting',
            instruction: 'The teacher starts with a warm greeting.',
            phrases: ['Hello there! Are you attending the keynote?'],
            vocabulary: ['attend', 'keynote', 'pleasure']
          },
          {
            id: 'step-2',
            speaker: 'b',
            title: 'Response & Intro',
            instruction: 'Reply warmly and say your name.',
            phrases: ['Yes, I am! My name is...', 'Nice to meet you!'],
            vocabulary: ['excited', 'presentation']
          }
        ],
        usefulPhrases: ['Nice to meet you', 'Where are you from?', 'That sounds interesting!'],
        successChecklist: ['Clear pronunciation', 'Used at least 2 key phrases', 'Natural response flow']
      }
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      const scenario = slide.roleplay?.scenario || slide.content?.[0] || 'Conversational roleplay scenario';
      return `Two people having an engaging conversation in ${scenario}. Style suitable for ${track}, warm and friendly environment, speaking English naturally.`;
    }
  },
  'speaking-boss-battle': {
    type: 'speaking-boss-battle',
    name: 'Speaking Boss Battle ⚔️',
    category: 'game',
    description: 'Desafío interactivo contra un jefe donde el estudiante debe hablar usando palabras clave antes de que termine el tiempo.',
    supportsImage: true,
    supportsQuizOptions: false,
    hasSpecialSchema: true,
    defaultBgColor: 'bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950',
    createDefaultSlide: (id, title = 'Boss Battle: Grammar Guardian ⚔️') => ({
      id,
      title,
      description: 'Vence al jefe construyendo oraciones fluidas con las palabras clave.',
      type: 'speaking-boss-battle',
      bgColor: 'bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950',
      speakingBossBattle: {
        bossName: 'Grammar Titan',
        bossTitle: 'Master of Fluency',
        bossAvatar: '👾',
        timerSeconds: 45,
        prepareSeconds: 10,
        rounds: {
          remember: ['Subject + Verb', 'Time Expressions', 'Correct Pronunciation'],
          use: ['usually', 'sometimes', 'because', 'however'],
          speak: ['Build 3 sentences about your daily habits without pausing.']
        }
      }
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      const boss = slide.speakingBossBattle?.bossName || 'Grammar Boss';
      return `Epic friendly battle arena challenge with a mythical character representing ${boss}. Vibrant lighting, gaming interface aesthetic suitable for learning English in ${track}.`;
    }
  },
  'spinning-wheel': {
    type: 'spinning-wheel',
    name: 'Ruleta de Preguntas / Spinning Wheel 🎡',
    category: 'interactive',
    description: 'Ruleta aleatoria para turnos de speaking, preguntas rompehielos o repaso.',
    supportsImage: false,
    supportsQuizOptions: false,
    hasSpecialSchema: true,
    defaultBgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    createDefaultSlide: (id, title = 'Conversation Warm-up Wheel 🎡') => ({
      id,
      title,
      description: 'Gira la ruleta y responde a la pregunta seleccionada.',
      type: 'spinning-wheel',
      bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      content: ['Spin the wheel.', 'Answer with one complete idea.', 'Then ask your partner.'],
      wheelItems: [
        { label: 'Routine', color: '#EF4444', prompt: 'What is your favorite morning routine?', es: 'Cual es tu rutina matutina favorita?' },
        { label: 'Food', color: '#F59E0B', prompt: 'What food can you eat every day?', es: 'Que comida puedes comer todos los dias?' },
        { label: 'Travel', color: '#10B981', prompt: 'Where do you want to travel next?', es: 'A donde quieres viajar proximamente?' },
        { label: 'Hobbies', color: '#3B82F6', prompt: 'What do you enjoy doing on weekends?', es: 'Que disfrutas hacer los fines de semana?' },
        { label: 'Dreams', color: '#8B5CF6', prompt: 'What is one big goal for this year?', es: 'Cual es una gran meta para este ano?' },
        { label: 'Music', color: '#EC4899', prompt: 'What song puts you in a good mood?', es: 'Que cancion te pone de buen humor?' }
      ]
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      return `Vibrant colorful interactive spinning wheel game for English practice, bright colors, 3D elements, clean backdrop.`;
    }
  },
  'emoji-game': {
    type: 'emoji-game',
    name: 'Emojis Locos 🤪',
    category: 'game',
    description: 'Adivina la frase u oración a partir de una secuencia de emojis.',
    supportsImage: false,
    supportsQuizOptions: true,
    hasSpecialSchema: false,
    defaultBgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    createDefaultSlide: (id, title = 'Emojis Locos 🤪') => ({
      id,
      title,
      description: 'Descifra la frase oculta detrás de los emojis.',
      type: 'emoji-game',
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
      content: ['✈️ ➕ 🏖️ ➕ 🕶️'],
      options: ['I am traveling to the beach.', 'I want to cook breakfast.', 'I am reading a book.'],
      correctOptionIndex: 0
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      return `Fun playful emoji decoding game visualization for learning English expressions, colorful and energetic.`;
    }
  },
  'homework': {
    type: 'homework',
    name: 'Tarea Escrita 📝',
    category: 'standard',
    description: 'Instrucciones contextuales y prácticas de tarea para consolidar la clase.',
    supportsImage: true,
    supportsQuizOptions: false,
    hasSpecialSchema: false,
    defaultBgColor: 'bg-gradient-to-br from-violet-600 to-fuchsia-700',
    createDefaultSlide: (id, title = 'Homework 📝') => ({
      id,
      title,
      description: 'Consigna clara y motivadora para practicar lo aprendido.',
      type: 'homework',
      bgColor: 'bg-gradient-to-br from-violet-600 to-fuchsia-700',
      content: [
        'Write 5 complete sentences using today\'s target grammar.',
        'Record a 30-second audio reading your sentences aloud.'
      ]
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      return `Study desk with organized notebook, laptop, warm coffee, cozy study environment, high quality illustration for English students.`;
    }
  },
  'video': {
    type: 'video',
    name: 'Video Homework / Actividad de Video 📹',
    category: 'interactive',
    description: 'Video embebido de YouTube con consigna de escucha activa.',
    supportsImage: false,
    supportsQuizOptions: false,
    hasSpecialSchema: true,
    defaultBgColor: 'bg-gradient-to-br from-slate-900 to-indigo-950',
    createDefaultSlide: (id, title = 'Video Homework 📹') => ({
      id,
      title,
      description: 'Mira el video complementario y responde las preguntas de práctica.',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      bgColor: 'bg-gradient-to-br from-slate-900 to-indigo-950',
      content: [
        'Watch the video carefully and take notes.',
        'Write down 3 new words or expressions you hear.'
      ]
    }),
    extractVisualPrompt: (slide, track = 'adultos') => {
      return `Modern video player thumbnail interface, educational English cinema theme, clean cinematic lighting.`;
    }
  }
};

export const BG_GRADIENT_PRESETS = [
  { label: 'Blue Indigo (Warm-up / General)', value: 'bg-gradient-to-br from-blue-600 to-indigo-700' },
  { label: 'Cyan Blue (Icebreakers)', value: 'bg-gradient-to-br from-cyan-500 to-blue-500' },
  { label: 'Indigo Purple (Grammar & Rules)', value: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
  { label: 'Orange Red (Practice & Checking)', value: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { label: 'Pink Rose (Quizzes / Emojis)', value: 'bg-gradient-to-br from-pink-500 to-rose-600' },
  { label: 'Emerald Teal (Speaking / Production)', value: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { label: 'Violet Fuchsia (Homework)', value: 'bg-gradient-to-br from-violet-500 to-fuchsia-600' },
  { label: 'Yellow Amber (Celebration)', value: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { label: 'Dark Slate (Boss Battle / Video)', value: 'bg-gradient-to-br from-slate-800 to-indigo-900' },
  { label: 'Purple Dark (Epic Battles)', value: 'bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950' }
];
