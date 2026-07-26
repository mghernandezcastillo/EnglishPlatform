import { ClassSlide, CurriculumClass } from '../types';
import { injectStructureDragSlides } from './structureDrag';

type TopicKey =
  | 'greetings'
  | 'numbers'
  | 'family'
  | 'routine'
  | 'food'
  | 'clothes'
  | 'gadgets'
  | 'school'
  | 'animals'
  | 'body'
  | 'directions'
  | 'hobbies'
  | 'house'
  | 'weather'
  | 'jobs'
  | 'future'
  | 'travel'
  | 'feelings'
  | 'holidays'
  | 'business'
  | 'generic';

type VisualPuzzle = {
  content: string[];
  options: string[];
  correctOptionIndex: number;
  description: string;
};

const WHEEL_COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];

const TOPIC_PROMPTS: Record<TopicKey, string[]> = {
  greetings: [
    'How do you greet a teacher?',
    'How do you greet a close friend?',
    'When do you say good morning?',
    'How do you introduce yourself?',
    'What do you say after nice to meet you?',
    'How do you say goodbye politely?'
  ],
  numbers: [
    'What number do you use every day?',
    'When is your birthday?',
    'What month do you like most?',
    'How old are you?',
    'What date is important to you?',
    'What number is easy to remember?'
  ],
  family: [
    'Who is in your family?',
    'Who do you talk to most at home?',
    'Who is very funny in your family?',
    'Who helps you at home?',
    'Who is older in your family?',
    'What do you like to do with your family?'
  ],
  routine: [
    'What do you do first in the morning?',
    'What time do you wake up?',
    'What do you usually eat for breakfast?',
    'What do you do after school or work?',
    'What do you always do at night?',
    'What part of your routine is easy?'
  ],
  food: [
    'What do you usually order at a restaurant?',
    'What drink do you like with lunch?',
    'What food do you never refuse?',
    'How do you ask for the bill politely?',
    'What meal do you like most: breakfast, lunch, or dinner?',
    'What food sounds good today?'
  ],
  clothes: [
    'What do you wear on a cold day?',
    'What color of clothes do you like most?',
    'What do you wear to school or work?',
    'What clothes do you wear on weekends?',
    'What item do you buy often?',
    'What is comfortable for you?'
  ],
  gadgets: [
    'What device do you use every day?',
    'Do you prefer a phone or a laptop?',
    'What app do you open first?',
    'What gadget helps you study or work?',
    'What do you use headphones for?',
    'What technology do you want next?'
  ],
  school: [
    'What subject do you enjoy most?',
    'What do you carry in your backpack?',
    'What do you write with in class?',
    'Who is your favorite teacher?',
    'What do you do before an exam?',
    'What subject feels easy to you?'
  ],
  animals: [
    'What animal do you like most?',
    'Do you have a pet?',
    'What animal is fast?',
    'What animal is cute?',
    'What animal lives in water?',
    'What animal would you like to see?'
  ],
  body: [
    'What do you use to see?',
    'What body part helps you run?',
    'What do you use to pick things up?',
    'What hurts when you have a headache?',
    'What body part helps you listen?',
    'What part of the face is easy to describe?'
  ],
  directions: [
    'How do you get to the supermarket?',
    'What place is near your home?',
    'When do you say turn left?',
    'How do you ask for directions politely?',
    'What place do you visit by bus?',
    'What direction is easy to remember?'
  ],
  hobbies: [
    'What do you do for fun?',
    'What sport do you like to watch?',
    'What hobby do you do alone?',
    'What hobby do you do with friends?',
    'What activity relaxes you?',
    'What new hobby would you try?'
  ],
  house: [
    'What room do you use most?',
    'What is in your kitchen?',
    'What do you do in the living room?',
    'What room do you sleep in?',
    'What room is quiet in your house?',
    'What part of your house do you like most?'
  ],
  weather: [
    'What weather do you enjoy most?',
    'What do you wear when it rains?',
    'What do you do on a sunny day?',
    'What weather is hard for you?',
    'What season do you like most?',
    'What weather is perfect for a walk?'
  ],
  jobs: [
    'What job sounds interesting to you?',
    'What does a doctor do?',
    'Where does a teacher work?',
    'What job helps many people?',
    'What job uses a computer a lot?',
    'What job would you never want?'
  ],
  future: [
    'What are you going to do tomorrow?',
    'What will you do later today?',
    'What is one future goal?',
    'Where will you travel one day?',
    'What are you going to study next?',
    'What do you think will happen soon?'
  ],
  travel: [
    'Where do you want to travel?',
    'How do you usually travel?',
    'What do you pack first?',
    'What place do you want to visit again?',
    'What makes a trip fun?',
    'Who do you like to travel with?'
  ],
  feelings: [
    'How do you feel today?',
    'What makes you happy?',
    'When do you feel tired?',
    'What makes you nervous?',
    'How do you feel on a good day?',
    'What helps you relax?'
  ],
  holidays: [
    'What holiday do you enjoy most?',
    'What do you do on your birthday?',
    'What food is special on holidays?',
    'Who do you celebrate with?',
    'What date is important in your country?',
    'What holiday tradition do you like?'
  ],
  business: [
    'What phrase sounds polite in an email?',
    'How do you start a formal message?',
    'How do you close an email politely?',
    'What do you say when you follow up?',
    'What makes a message clear?',
    'What phrase sounds professional to you?'
  ],
  generic: [
    'What is easy for you today?',
    'What is new in this class?',
    'What do you already know about this topic?',
    'What example can you give?',
    'What question do you want to ask first?',
    'What part looks interesting to you?'
  ]
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function rotate<T>(items: T[], seed: number, count = items.length) {
  if (!items.length) return [];
  const start = seed % items.length;
  return Array.from({ length: Math.min(count, items.length) }, (_, index) => items[(start + index) % items.length]);
}

function inferTopicKey(text: string): TopicKey {
  const normalized = normalizeText(text);
  if (/hello|greeting|introduc/.test(normalized)) return 'greetings';
  if (/number|birthday|month|date|age/.test(normalized)) return 'numbers';
  if (/family|mother|father|sister|brother/.test(normalized)) return 'family';
  if (/routine|wake up|daily|morning|night/.test(normalized)) return 'routine';
  if (/food|drink|restaurant|menu|bill|meal|breakfast|lunch|dinner/.test(normalized)) return 'food';
  if (/clothes|shirt|jacket|pants|wear|fashion/.test(normalized)) return 'clothes';
  if (/gadget|tech|device|app|phone|laptop|console/.test(normalized)) return 'gadgets';
  if (/school|classroom|subject|backpack|teacher|exam/.test(normalized)) return 'school';
  if (/pet|animal|wild/.test(normalized)) return 'animals';
  if (/body|face|hand|leg|eye|ear|nose/.test(normalized)) return 'body';
  if (/direction|city|place|turn left|go straight|museum|station/.test(normalized)) return 'directions';
  if (/hobby|sport|game|music|free time/.test(normalized)) return 'hobbies';
  if (/house|room|kitchen|bathroom|bedroom|living room/.test(normalized)) return 'house';
  if (/weather|season|rain|sunny|cloudy|winter|summer/.test(normalized)) return 'weather';
  if (/job|profession|doctor|teacher|worker|office/.test(normalized)) return 'jobs';
  if (/future|going to|will|plan|tomorrow|next week/.test(normalized)) return 'future';
  if (/travel|trip|airport|hotel|vacation/.test(normalized)) return 'travel';
  if (/feeling|happy|sad|tired|angry|nervous/.test(normalized)) return 'feelings';
  if (/holiday|christmas|birthday party|celebration/.test(normalized)) return 'holidays';
  if (/email|formal|report|meeting|business|proposal/.test(normalized)) return 'business';
  return 'generic';
}

function buildWarmupWheel(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.type !== 'spinning-wheel') return slide;
  if (!/warm-up wheel|warm up wheel|calentamiento ruleta|ruleta magica/.test(normalizeText(slide.title))) return slide;

  const topic = inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''}`);
  const seed = hashString(`${cls.id}-${slide.id}-${topic}`);
  const prompts = rotate(TOPIC_PROMPTS[topic], seed, 6);

  return {
    ...slide,
    wheelItems: prompts.map((prompt, index) => ({
      label: prompt.split(/[?!.]/)[0].slice(0, 14) || `Prompt ${index + 1}`,
      color: WHEEL_COLORS[index % WHEEL_COLORS.length],
      prompt,
      es: prompt
    })),
    content: ['Spin the wheel.', 'Answer with one complete idea.', 'Then ask one follow-up question.']
  };
}

function buildVisualPuzzle(topic: TopicKey, seed: number): VisualPuzzle {
  const libraries: Record<TopicKey, VisualPuzzle[]> = {
    greetings: [
      { content: ['👋 + 🙂 + 🤝'], options: ['Hi, nice to meet you.', 'I need a notebook.', 'Turn left at the bank.'], correctOptionIndex: 0, description: 'Greeting clue' },
      { content: ['🙋 + 📛 + 😊'], options: ['My name is Alex.', 'I am eating breakfast.', 'The weather is cold.'], correctOptionIndex: 0, description: 'Introduction clue' }
    ],
    numbers: [
      { content: ['🎂 + 1️⃣6️⃣ + 🗓️'], options: ['I am 16 and today is my birthday.', 'I have a blue backpack.', 'We are at the supermarket.'], correctOptionIndex: 0, description: 'Age and date clue' },
      { content: ['📅 + 7️⃣ + 🎉'], options: ['My birthday is in July.', 'I am wearing a jacket.', 'The cat is under the chair.'], correctOptionIndex: 0, description: 'Month clue' }
    ],
    family: [
      { content: ['👩 + 👨 + 👧 + 🏠'], options: ['My family is at home.', 'I need a taxi downtown.', 'Please close the window.'], correctOptionIndex: 0, description: 'Family clue' },
      { content: ['👵 + ❤️ + 📞'], options: ['I call my grandma with love.', 'The restaurant is full.', 'We are playing soccer now.'], correctOptionIndex: 0, description: 'Family action clue' }
    ],
    routine: [
      { content: ['⏰ + 🛏️ + ☀️'], options: ['I wake up early in the morning.', 'I want a burger and fries.', 'The museum is next to the bank.'], correctOptionIndex: 0, description: 'Routine clue' },
      { content: ['🪥 + 🚿 + 🎒'], options: ['I get ready before school.', 'She is buying a new jacket.', 'We will travel tomorrow.'], correctOptionIndex: 0, description: 'Morning routine clue' }
    ],
    food: [
      { content: ['🥗 + 🙋 + 🙏'], options: ['Can I have a salad, please?', 'I am reading a long email.', 'My brother is very tall.'], correctOptionIndex: 0, description: 'Restaurant clue' },
      { content: ['☕ + 🍰 + 😀'], options: ['I would like coffee and cake.', 'The bus stop is behind the park.', 'They are studying math now.'], correctOptionIndex: 0, description: 'Ordering clue' }
    ],
    clothes: [
      { content: ['👕 + 🔵 + 👍'], options: ['I like the blue shirt.', 'I am going to visit my aunt.', 'There is a library near here.'], correctOptionIndex: 0, description: 'Clothes clue' },
      { content: ['🧥 + 🌧️ + 😊'], options: ['I wear a jacket when it rains.', 'Please send the report today.', 'My dog is sleeping on the sofa.'], correctOptionIndex: 0, description: 'Weather and clothes clue' }
    ],
    gadgets: [
      { content: ['📱 + 🎧 + 💻'], options: ['My favorite gadgets are here.', 'I would like the bill, please.', 'The classroom is on the left.'], correctOptionIndex: 0, description: 'Tech clue' },
      { content: ['💻 + 🔋 + ✅'], options: ['My laptop is ready to use.', 'My family eats dinner early.', 'I was at the beach yesterday.'], correctOptionIndex: 0, description: 'Device clue' }
    ],
    school: [
      { content: ['🎒 + 📚 + ✏️'], options: ['My backpack has books and pencils.', 'I need a cup of tea.', 'The weather will be sunny.'], correctOptionIndex: 0, description: 'School clue' },
      { content: ['👩‍🏫 + 🧑‍🎓 + 📝'], options: ['The teacher gives us a test.', 'I am ordering lunch now.', 'We are at the airport today.'], correctOptionIndex: 0, description: 'Classroom clue' }
    ],
    animals: [
      { content: ['🐶 + 🦴 + 🏃'], options: ['The dog runs with a bone.', 'I need a formal email.', 'My birthday is in August.'], correctOptionIndex: 0, description: 'Animal clue' },
      { content: ['🐱 + 😴 + 🛋️'], options: ['The cat is sleeping on the sofa.', 'Can I have some water?', 'They will start the meeting soon.'], correctOptionIndex: 0, description: 'Pet clue' }
    ],
    body: [
      { content: ['👀 + 👂 + 😊'], options: ['I see and hear clearly.', 'The train station is far away.', 'We are eating at a restaurant.'], correctOptionIndex: 0, description: 'Body clue' },
      { content: ['🖐️ + 🦵 + 🏃'], options: ['Hands and legs help you move.', 'I like chocolate ice cream.', 'She wrote a business proposal.'], correctOptionIndex: 0, description: 'Movement clue' }
    ],
    directions: [
      { content: ['⬅️ + 🌳 + 🏛️'], options: ['Turn left at the park for the museum.', 'I would like a salad, please.', 'My sister is ten years old.'], correctOptionIndex: 0, description: 'Direction clue' },
      { content: ['🚌 + 🏫 + 📍'], options: ['Take the bus to the school.', 'The dog is under the bed.', 'I am wearing a red sweater.'], correctOptionIndex: 0, description: 'Travel clue' }
    ],
    hobbies: [
      { content: ['⚽ + 😄 + 🏃'], options: ['I enjoy playing soccer.', 'The report was sent yesterday.', 'My dad works at a hospital.'], correctOptionIndex: 0, description: 'Hobby clue' },
      { content: ['🎸 + 🎵 + ❤️'], options: ['She loves playing the guitar.', 'Can I have the menu?', 'We are going to travel tomorrow.'], correctOptionIndex: 0, description: 'Music clue' }
    ],
    house: [
      { content: ['🛏️ + 🛋️ + 🏠'], options: ['My house has a bedroom and a living room.', 'I need a glass of juice.', 'The meeting starts at nine.'], correctOptionIndex: 0, description: 'House clue' },
      { content: ['🍳 + 🥘 + 👩‍🍳'], options: ['The kitchen is for cooking.', 'My pet is sleeping now.', 'Turn right at the pharmacy.'], correctOptionIndex: 0, description: 'Room clue' }
    ],
    weather: [
      { content: ['☔ + 🧥 + 🙂'], options: ['I wear a jacket when it rains.', 'I have a tablet at home.', 'The client sent an invoice.'], correctOptionIndex: 0, description: 'Weather clue' },
      { content: ['☀️ + 😎 + 🌴'], options: ['It is sunny and great for going out.', 'Please close the formal email.', 'My cousin studies biology.'], correctOptionIndex: 0, description: 'Sunny day clue' }
    ],
    jobs: [
      { content: ['👨‍⚕️ + 🏥 + 💊'], options: ['The doctor works in a hospital.', 'I would like a new backpack.', 'We are watching a movie later.'], correctOptionIndex: 0, description: 'Job clue' },
      { content: ['👩‍🏫 + 🏫 + 📚'], options: ['The teacher works at school.', 'The soup is very hot.', 'The cat is under the chair.'], correctOptionIndex: 0, description: 'Profession clue' }
    ],
    future: [
      { content: ['📚 + 🌙 + 🎯'], options: ['I am going to study tonight.', 'My brother likes pizza a lot.', 'The office is next to the bank.'], correctOptionIndex: 0, description: 'Future plan clue' },
      { content: ['✈️ + 🗓️ + 😀'], options: ['We will travel next week.', 'She is wearing a blue skirt.', 'I need the bill, please.'], correctOptionIndex: 0, description: 'Travel plan clue' }
    ],
    travel: [
      { content: ['✈️ + 🧳 + 🌍'], options: ['I am ready for the trip.', 'My laptop is on the table.', 'The chicken salad is delicious.'], correctOptionIndex: 0, description: 'Travel clue' },
      { content: ['🏨 + 🗺️ + 😀'], options: ['The hotel is on the map.', 'I brush my teeth at seven.', 'Please send the email today.'], correctOptionIndex: 0, description: 'Trip clue' }
    ],
    feelings: [
      { content: ['😊 + ☀️ + 💪'], options: ['I feel happy and full of energy.', 'The train arrives at noon.', 'I would like a cheese sandwich.'], correctOptionIndex: 0, description: 'Feeling clue' },
      { content: ['😴 + 🛏️ + 🌙'], options: ['I feel tired at night.', 'We are buying shoes now.', 'My aunt is a nurse.'], correctOptionIndex: 0, description: 'Mood clue' }
    ],
    holidays: [
      { content: ['🎂 + 🎁 + 🎉'], options: ['It is a birthday celebration.', 'The museum is behind the bank.', 'She can play the guitar well.'], correctOptionIndex: 0, description: 'Celebration clue' },
      { content: ['🎄 + 🍪 + 👨‍👩‍👧'], options: ['We celebrate the holiday with family.', 'I have a red backpack.', 'The doctor is in the hospital.'], correctOptionIndex: 0, description: 'Holiday clue' }
    ],
    business: [
      { content: ['📧 + 👔 + ✅'], options: ['This is a formal email.', 'The cat is sleeping now.', 'I am going to order lunch.'], correctOptionIndex: 0, description: 'Business clue' },
      { content: ['📊 + 🧑‍💼 + 📝'], options: ['The team is writing a report.', 'My sister has a pet bird.', 'Can I have some fries?'], correctOptionIndex: 0, description: 'Work clue' }
    ],
    generic: [
      { content: ['💡 + 🗣️ + ✅'], options: ['I can explain the idea clearly.', 'The soup is on the menu.', 'My brother is eleven years old.'], correctOptionIndex: 0, description: 'General clue' },
      { content: ['📚 + ⭐ + 🎯'], options: ['I remember today’s lesson.', 'Please pass the salt.', 'The bus stop is on the corner.'], correctOptionIndex: 0, description: 'Lesson clue' }
    ]
  };

  const pool = libraries[topic];
  return pool[seed % pool.length];
}

function enhanceEmojiSlide(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.type !== 'emoji-game') return slide;
  const topic = inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''} ${slide.title} ${slide.description || ''}`);
  const seed = hashString(`${cls.id}-${slide.id}-${topic}`);
  const puzzle = buildVisualPuzzle(topic, seed);

  return {
    ...slide,
    title: 'Visual Clue Challenge / Desafio Visual',
    description: puzzle.description,
    content: puzzle.content,
    options: puzzle.options,
    correctOptionIndex: puzzle.correctOptionIndex
  };
}

function enhanceBossBattle(slide: ClassSlide) {
  if (slide.type !== 'speaking-boss-battle' || !slide.speakingBossBattle) return slide;
  return {
    ...slide,
    speakingBossBattle: {
      ...slide.speakingBossBattle,
      timerSeconds: 180,
      prepareSeconds: 30
    }
  };
}

export function enhancePresentationClass(cls: CurriculumClass): CurriculumClass {
  const baseClass = injectStructureDragSlides(cls);

  return {
    ...baseClass,
    sections: baseClass.sections.map((section) => ({
      ...section,
      slides: section.slides.map((slide) => enhanceBossBattle(enhanceEmojiSlide(buildWarmupWheel(slide, baseClass), baseClass)))
    }))
  };
}
