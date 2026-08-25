import { ClassSlide, CurriculumClass } from '../types';
import { TEEN_HOMEWORK_CATALOG, TeenHomeworkSpec } from '../data/teenHomeworkCatalog';

export interface HomeworkData {
  task: string;
  taskHighlights?: string[];
  exampleLines: string[];
  tips: string[];
  badgeText?: string;
  whatToInclude: {
    icon: string;
    label: string;
    highlight?: string;
  }[];
  dueDate?: string;
  whatsappMessage?: string;
}

// Topic-specific tailored homework presets for Teens curriculum
const TEEN_HOMEWORK_TOPICS: Record<string, Partial<HomeworkData>> = {
  // Greetings / Introductions / Basic Zero 1
  greetings: {
    task: 'Write a short text (3 lines) introducing yourself in English. Include your name, how you are, and a goodbye.',
    taskHighlights: ['name', 'how you are', 'a goodbye'],
    exampleLines: [
      'Hi! My name is Alex.',
      'I am happy and I like music.',
      'Nice to meet you. Bye! 👋'
    ],
    whatToInclude: [
      { icon: '👤', label: 'Your name' },
      { icon: '😃', label: 'How you are' },
      { icon: '👋', label: 'A goodbye' }
    ],
    tips: [
      'Use simple and true information.',
      'Check your spelling and punctuation.'
    ],
    badgeText: 'Be ⭐ Yourself!'
  },

  // Numbers, Ages & Birthdays / Basic Zero 2
  age: {
    task: 'Write 3 sentences sharing your age, birthday month, and your lucky number in English.',
    taskHighlights: ['age', 'birthday month', 'lucky number'],
    exampleLines: [
      'I am 15 years old.',
      'My birthday is in September.',
      'My lucky number is 7! 🍀'
    ],
    whatToInclude: [
      { icon: '🎂', label: 'Your age' },
      { icon: '📅', label: 'Birthday month' },
      { icon: '🔢', label: 'Lucky number' }
    ],
    tips: [
      'Remember: "I am [age] years old", not "I have".',
      'Capitalize month names (January, March...).'
    ],
    badgeText: 'Numbers ⭐ Power!'
  },

  // Family & Friends / Basic Zero 3
  family: {
    task: 'Write 3 sentences about your family or best friends using descriptive words.',
    taskHighlights: ['family members', 'names', 'qualities'],
    exampleLines: [
      'This is my sister Sofia; she is very creative.',
      'My best friend Leo is 16 and loves soccer.',
      'We love hanging out on weekends! 🌟'
    ],
    whatToInclude: [
      { icon: '👨‍👩‍👧', label: 'Family/Friend names' },
      { icon: '✨', label: '1 or 2 adjectives' },
      { icon: '💬', label: 'A shared activity' }
    ],
    tips: [
      'Use "he is" for boys and "she is" for girls.',
      'Add an emoji for fun expression!'
    ],
    badgeText: 'Squad ⭐ Goals!'
  },

  // Food, Drinks & Snacks / Basic Zero 4
  food: {
    task: 'Write 3 sentences about your favorite food, drinks, and what you dislike.',
    taskHighlights: ['favorite food', 'favorite drink', 'one dislike'],
    exampleLines: [
      'My favorite food is pepperoni pizza.',
      'I really love iced tea with lemon.',
      'I dislike spicy peppers! 🌶️'
    ],
    whatToInclude: [
      { icon: '🍕', label: 'Favorite food' },
      { icon: '🥤', label: 'Favorite drink' },
      { icon: '❌', label: 'One dislike' }
    ],
    tips: [
      'Use phrases like "I love...", "My favorite is...", "I dislike...".',
      'Check food spelling.'
    ],
    badgeText: 'Yummy ⭐ Taste!'
  },

  // Daily Routine & Free Time / Hobbies
  routine: {
    task: 'Write 3 sentences about your daily routine or weekend hobbies with time expressions.',
    taskHighlights: ['morning habit', 'favorite hobby', 'evening time'],
    exampleLines: [
      'I wake up at 7:00 AM on weekdays.',
      'In the afternoon, I skate with my friends.',
      'I listen to music before going to sleep. 🎧'
    ],
    whatToInclude: [
      { icon: '⏰', label: 'Time or time phrase' },
      { icon: '🛹', label: 'A favorite hobby' },
      { icon: '🌙', label: 'Evening activity' }
    ],
    tips: [
      'Use "at" for specific hours (at 7:00 AM).',
      'Use "in the morning / in the afternoon".'
    ],
    badgeText: 'Daily ⭐ Flow!'
  },

  // Clothes & Streetwear / Fashion
  clothes: {
    task: 'Write 3 sentences describing what you usually wear to school, parties, or home.',
    taskHighlights: ['favorite outfit', 'colors', 'accessories'],
    exampleLines: [
      'I usually wear a black hoodie and blue jeans.',
      'My favorite sneakers are white Air Jordans.',
      'I wear a stylish cap when it is sunny! 🧢'
    ],
    whatToInclude: [
      { icon: '👕', label: 'Main clothing items' },
      { icon: '🎨', label: 'Colors & styles' },
      { icon: '👟', label: 'Shoes or accessories' }
    ],
    tips: [
      'Put colors before nouns: "black hoodie", not "hoodie black".',
      'Use "wear" for clothes.'
    ],
    badgeText: 'Drip ⭐ Style!'
  },

  // Tech, Apps & Social Media
  tech: {
    task: 'Write 3 sentences about the gadgets and apps you use every day and why.',
    taskHighlights: ['favorite app', 'gadget', 'what you use it for'],
    exampleLines: [
      'I use my smartphone to listen to playlists on Spotify.',
      'My favorite app is TikTok because it is entertaining.',
      'I use my laptop to do homework and play games. 💻'
    ],
    whatToInclude: [
      { icon: '📱', label: 'App / Device name' },
      { icon: '🎯', label: 'Purpose with "to [verb]"' },
      { icon: '⚡', label: 'Why you like it' }
    ],
    tips: [
      'Use "use + device + to + verb" (e.g. use my phone to chat).',
      'Give reasons with "because...".'
    ],
    badgeText: 'Cyber ⭐ Pro!'
  },

  // Sports & Skills (Can / Can't)
  sports: {
    task: 'Write 3 sentences about sports you can play and abilities you want to learn.',
    taskHighlights: ['can play', 'can do well', 'want to learn'],
    exampleLines: [
      'I can play basketball and swim very well.',
      'I cannot surf, but I want to learn this summer.',
      'My friend and I play video games every Friday! 🎮'
    ],
    whatToInclude: [
      { icon: '🏀', label: 'Sport you can do' },
      { icon: '🌊', label: 'Skill you want to learn' },
      { icon: '🏆', label: 'Adverb (well, fast, etc.)' }
    ],
    tips: [
      'Use "can + base verb" without "to".',
      'Example: "I can swim", not "I can to swim".'
    ],
    badgeText: 'Skill ⭐ Level!'
  },

  // Travel, Cities & Places
  places: {
    task: 'Write 3 sentences describing your dream travel destination and places to visit.',
    taskHighlights: ['dream city/country', 'places to visit', 'activities'],
    exampleLines: [
      'I want to visit Tokyo in Japan one day.',
      'There are amazing futuristic stores and parks.',
      'I want to try authentic ramen noodles! 🍜'
    ],
    whatToInclude: [
      { icon: '✈️', label: 'City or country' },
      { icon: '🏙️', label: 'Places with "There is/are"' },
      { icon: '🍜', label: 'Food or activity' }
    ],
    tips: [
      'Use "There is" for singular and "There are" for plural.',
      'Capitalize city and country names.'
    ],
    badgeText: 'World ⭐ Explorer!'
  }
};

/**
 * Resolves context-accurate HomeworkData for any slide/class
 */
export function resolveHomeworkData(slide: ClassSlide, cls?: CurriculumClass): HomeworkData {
  // 1. If slide already contains fully structured homeworkData, return it
  if (slide.homeworkData && slide.homeworkData.task) {
    return {
      task: slide.homeworkData.task,
      taskHighlights: slide.homeworkData.taskHighlights || [],
      exampleLines: slide.homeworkData.exampleLines || ['Line 1: Example text', 'Line 2: Supporting detail', 'Line 3: Closing phrase'],
      whatToInclude: slide.homeworkData.whatToInclude || [{ icon: '📝', label: 'Main sentence' }],
      tips: slide.homeworkData.tips || ['Use simple and true information.', 'Check your spelling and punctuation.'],
      badgeText: slide.homeworkData.badgeText || 'Be ⭐ Yourself!',
      dueDate: slide.homeworkData.dueDate || 'Friday, 11:59 PM',
      whatsappMessage: slide.homeworkData.whatsappMessage
    };
  }

  let matchedPreset: Partial<HomeworkData> | null = null;
  const classText = `${cls?.title || ''} ${cls?.objective || ''} ${slide.title || ''} ${(slide.content || []).join(' ')}`.toLowerCase();

  // 2. Check explicit customized catalog for this class ID
  const classId = cls?.id || '';
  const catalogEntry = TEEN_HOMEWORK_CATALOG[classId];
  if (catalogEntry) {
    matchedPreset = {
      task: catalogEntry.task,
      taskHighlights: catalogEntry.taskHighlights,
      exampleLines: catalogEntry.exampleLines,
      whatToInclude: catalogEntry.whatToInclude,
      tips: catalogEntry.tips,
      badgeText: catalogEntry.badgeText
    };
  }

  // 3. If not found in catalog, identify topic from class title or content
  if (!matchedPreset) {
    if (/greet|introduct|hola|saludo|name|zero-1|class 1|clase 1/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.greetings;
    } else if (/number|age|birthday|cumple|edad|n[uú]mero|zero-2|class 2|clase 2/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.age;
    } else if (/famil|friend|amigo|relative|sister|brother|zero-3|class 3|clase 3/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.family;
    } else if (/food|drink|snack|comida|bebida|restaurant|pizza|burger|zero-4|class 4|clase 4/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.food;
    } else if (/routine|time|schedule|rutina|hora|habit|weekend|zero-5|class 5|clase 5/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.routine;
    } else if (/cloth|wear|outfit|streetwear|fashion|ropa|vestir|zero-6|class 6|clase 6/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.clothes;
    } else if (/tech|app|phone|laptop|gadget|media|online|digital|zero-7|class 7|clase 7/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.tech;
    } else if (/sport|can|ability|swim|play|deporte|habilidad|zero-8|class 8|clase 8/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.sports;
    } else if (/city|place|travel|visit|lugar|ciudad|viaje|there is/i.test(classText)) {
      matchedPreset = TEEN_HOMEWORK_TOPICS.places;
    }
  }

  // 3. Extract task instructions from slide content if available
  const content = slide.content && slide.content.length > 0 ? slide.content : [];
  const primaryTask = content.length > 0 ? content.join(' ') : 'Write a short text (3 lines) practicing today’s topic.';

  const task = matchedPreset?.task || primaryTask;
  const exampleLines = matchedPreset?.exampleLines || [
    'Line 1: Introduce the topic in English.',
    'Line 2: Give a clear detail or example.',
    'Line 3: Add a closing remark! 🌟'
  ];
  const whatToInclude = matchedPreset?.whatToInclude || [
    { icon: '📝', label: 'Sentence 1 (Main idea)' },
    { icon: '✨', label: 'Sentence 2 (Supporting detail)' },
    { icon: '🎯', label: 'Sentence 3 (Personal touch)' }
  ];
  const tips = matchedPreset?.tips || [
    'Use vocabulary and structures learned in class today.',
    'Review your spelling, capitalization, and punctuation.'
  ];
  const badgeText = matchedPreset?.badgeText || 'Be ⭐ Awesome!';
  const taskHighlights = matchedPreset?.taskHighlights || ['key words', 'examples', 'details'];
  const dueDate = 'Next Class / Próxima Clase';

  // Build WhatsApp shareable text
  const formattedClassTitle = cls?.title?.split('/')[0]?.trim() || 'English Class';
  const whatsappMessage = `*Homework 📝 - ${formattedClassTitle}*\n\n` +
    `*Your Task:*\n${task}\n\n` +
    `*What to include:*\n` +
    whatToInclude.map((item) => `• ${item.icon} ${item.label}`).join('\n') +
    `\n\n*Example (3 lines):*\n` +
    exampleLines.map((line, idx) => `${idx + 1}. ${line}`).join('\n') +
    `\n\n*Due Date:* ${dueDate}\nGood luck! 🚀`;

  return {
    task,
    taskHighlights,
    exampleLines,
    whatToInclude,
    tips,
    badgeText,
    dueDate,
    whatsappMessage
  };
}
