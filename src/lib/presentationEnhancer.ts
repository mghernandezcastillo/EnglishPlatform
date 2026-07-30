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

type AudienceKey = 'kids' | 'teens' | 'adults';

type RoleplayPlan = {
  scenario: string;
  situation: string;
  players?: {
    aNamePlaceholder: string;
    bNamePlaceholder: string;
  };
  roles: {
    a: { label: string; goal: string };
    b: { label: string; goal: string };
  };
  mission: string[];
  steps?: NonNullable<ClassSlide['roleplay']>['steps'];
  usefulPhrases: string[];
  successChecklist: string[];
  victoryMessage?: string;
};

type WarmupWheelItem = {
  label: string;
  prompt: string;
  es: string;
};

const WHEEL_COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];

const IMAGELESS_INTERACTIVE_TYPES = new Set<ClassSlide['type']>([
  'emoji-game',
  'matching-game',
  'mystery-puzzle',
  'roleplay',
  'speaking-assessment-experimental',
  'speaking-boss-battle',
  'spinning-wheel',
  'structure-drag',
  'video'
]);

const TOPIC_VISUALS: Record<TopicKey, Record<AudienceKey, string>> = {
  greetings: {
    kids: '/images/cute_greeting_symbols.jpg',
    teens: '/images/teens_hello.jpg',
    adults: '/images/teen_greeting.jpg'
  },
  numbers: {
    kids: '/images/colorful_numbers_kids.jpg',
    teens: '/images/teens_calendar_months.jpg',
    adults: '/images/teens_calendar_months.jpg'
  },
  family: {
    kids: '/images/cute_family_kids.jpg',
    teens: '/images/teens-family-friends-brother-chat.png',
    adults: '/images/cute_family_kids.jpg'
  },
  routine: {
    kids: '/images/daily_routine_kids.jpg',
    teens: '/images/kids_q_wakeup.jpg',
    adults: '/images/daily_routine_kids.jpg'
  },
  food: {
    kids: '/images/food_drinks_kids.jpg',
    teens: '/images/ai-food-drinks-restaurant.png',
    adults: '/images/ai-food-drinks-restaurant.png'
  },
  clothes: {
    kids: '/images/clothes_weather_kids.jpg',
    teens: '/images/teens_clothing_patterns.jpg',
    adults: '/images/teen_sneakers.jpg'
  },
  gadgets: {
    kids: '/images/teens_smartphone_apps.jpg',
    teens: '/images/teens_gadgets_tech.jpg',
    adults: '/images/teens_gadgets_tech.jpg'
  },
  school: {
    kids: '/images/kids_show_and_tell.jpg',
    teens: '/images/teens_assessment_welcome.jpg',
    adults: '/images/teens_assessment_welcome.jpg'
  },
  animals: {
    kids: '/images/cute_pets_kids.jpg',
    teens: '/images/wild_animals_kids.jpg',
    adults: '/images/wild_animals_kids.jpg'
  },
  body: {
    kids: '/images/monster_body_parts.jpg',
    teens: '/images/teens_body_parts.jpg',
    adults: '/images/teens_gym_class.jpg'
  },
  directions: {
    kids: '/images/vehicles_town_kids.jpg',
    teens: '/images/directions_ask.jpg',
    adults: '/images/directions_give.jpg'
  },
  hobbies: {
    kids: '/images/hobbies_sports_kids.jpg',
    teens: '/images/teens_cool_hobbies.jpg',
    adults: '/images/teen_music.jpg'
  },
  house: {
    kids: '/images/house_rooms_kids.jpg',
    teens: '/images/house_rooms_kids.jpg',
    adults: '/images/house_rooms_kids.jpg'
  },
  weather: {
    kids: '/images/clothes_weather_kids.jpg',
    teens: '/images/clothes_weather_kids.jpg',
    adults: '/images/clothes_weather_kids.jpg'
  },
  jobs: {
    kids: '/images/jobs_places_kids.jpg',
    teens: '/images/jobs_places_kids.jpg',
    adults: '/images/jobs_places_kids.jpg'
  },
  future: {
    kids: '/images/space_kids.jpg',
    teens: '/images/teens_complete.jpg',
    adults: '/images/teens_complete.jpg'
  },
  travel: {
    kids: '/images/vehicles_town_kids.jpg',
    teens: '/images/directions_ask.jpg',
    adults: '/images/directions_give.jpg'
  },
  feelings: {
    kids: '/images/feelings_faces_kids.jpg',
    teens: '/images/teens_energy_warmup.jpg',
    adults: '/images/teens_energy_warmup.jpg'
  },
  holidays: {
    kids: '/images/holidays_kids.jpg',
    teens: '/images/teens_birthday_party.jpg',
    adults: '/images/teens_birthday_party.jpg'
  },
  business: {
    kids: '/images/teens_apps.jpg',
    teens: '/images/teens_apps.jpg',
    adults: '/images/teens_assessment_welcome.jpg'
  },
  generic: {
    kids: '/images/kids_warm_up.jpg',
    teens: '/images/teen_lifestyle.jpg',
    adults: '/images/teen_lifestyle.jpg'
  }
};

const ROLEPLAY_SUPPORT_PHRASES: Record<AudienceKey, string[]> = {
  kids: ['And you?', 'I think ...', 'Thank you!'],
  teens: ['Tell me more.', 'I agree because ...', 'Can you explain that?'],
  adults: ['Could you tell me more?', 'That sounds useful because ...', 'Let me make sure I understand.']
};

const ROLEPLAY_TOPIC_WORDS: Record<TopicKey, Record<AudienceKey, string[]>> = {
  greetings: {
    kids: ['hello', 'name', 'friend', 'bye', 'happy'],
    teens: ['hello', 'name', 'classmate', 'today', 'goodbye'],
    adults: ['hello', 'name', 'colleague', 'meeting', 'goodbye']
  },
  numbers: {
    kids: ['age', 'number', 'birthday', 'month', 'time'],
    teens: ['age', 'birthday', 'date', 'time', 'number'],
    adults: ['date', 'time', 'number', 'appointment', 'confirm']
  },
  family: {
    kids: ['mom', 'dad', 'sister', 'brother', 'home'],
    teens: ['family', 'friend', 'older', 'younger', 'close'],
    adults: ['family', 'relative', 'home', 'relationship', 'support']
  },
  routine: {
    kids: ['wake up', 'eat', 'school', 'play', 'sleep'],
    teens: ['morning', 'school', 'homework', 'practice', 'weekend'],
    adults: ['morning', 'work', 'schedule', 'habit', 'evening']
  },
  food: {
    kids: ['food', 'drink', 'snack', 'please', 'thanks'],
    teens: ['menu', 'drink', 'order', 'bill', 'please'],
    adults: ['menu', 'order', 'recommend', 'bill', 'service']
  },
  clothes: {
    kids: ['shirt', 'jacket', 'shoes', 'color', 'rain'],
    teens: ['outfit', 'style', 'color', 'comfortable', 'weekend'],
    adults: ['size', 'color', 'shirt', 'jacket', 'style']
  },
  gadgets: {
    kids: ['phone', 'game', 'music', 'screen', 'app'],
    teens: ['phone', 'app', 'laptop', 'headphones', 'screen'],
    adults: ['device', 'app', 'tool', 'work', 'problem']
  },
  school: {
    kids: ['pencil', 'book', 'teacher', 'class', 'bag'],
    teens: ['subject', 'class', 'teacher', 'exam', 'project'],
    adults: ['study', 'goal', 'class', 'practice', 'improve']
  },
  animals: {
    kids: ['dog', 'cat', 'pet', 'run', 'home'],
    teens: ['pet', 'wild', 'animal', 'care', 'favorite'],
    adults: ['pet', 'nature', 'care', 'experience', 'opinion']
  },
  body: {
    kids: ['head', 'hands', 'feet', 'jump', 'run'],
    teens: ['body', 'sport', 'move', 'health', 'ability'],
    adults: ['body', 'health', 'pain', 'exercise', 'symptom']
  },
  directions: {
    kids: ['left', 'right', 'park', 'school', 'bus'],
    teens: ['place', 'street', 'turn', 'bus', 'near'],
    adults: ['street', 'corner', 'station', 'near', 'directions']
  },
  hobbies: {
    kids: ['game', 'sport', 'music', 'friends', 'fun'],
    teens: ['hobby', 'sport', 'music', 'free time', 'friends'],
    adults: ['weekend', 'hobby', 'relax', 'free time', 'interest']
  },
  house: {
    kids: ['room', 'bed', 'kitchen', 'sofa', 'home'],
    teens: ['room', 'house', 'desk', 'bed', 'favorite'],
    adults: ['home', 'apartment', 'room', 'kitchen', 'useful']
  },
  weather: {
    kids: ['sunny', 'rainy', 'cold', 'hot', 'jacket'],
    teens: ['weather', 'sunny', 'rainy', 'clothes', 'plans'],
    adults: ['weather', 'forecast', 'plans', 'clothes', 'travel']
  },
  jobs: {
    kids: ['doctor', 'teacher', 'work', 'help', 'school'],
    teens: ['job', 'future', 'skill', 'team', 'workplace'],
    adults: ['job', 'role', 'responsibility', 'meeting', 'skill']
  },
  future: {
    kids: ['tomorrow', 'plan', 'play', 'school', 'home'],
    teens: ['weekend', 'plan', 'goal', 'school', 'idea'],
    adults: ['plan', 'goal', 'next step', 'decision', 'schedule']
  },
  travel: {
    kids: ['trip', 'bag', 'car', 'plane', 'beach'],
    teens: ['trip', 'destination', 'bag', 'transport', 'hotel'],
    adults: ['trip', 'booking', 'hotel', 'flight', 'reservation']
  },
  feelings: {
    kids: ['happy', 'sad', 'tired', 'angry', 'friend'],
    teens: ['happy', 'stressed', 'tired', 'relaxed', 'reason'],
    adults: ['mood', 'stress', 'confident', 'support', 'reaction']
  },
  holidays: {
    kids: ['party', 'cake', 'gift', 'family', 'song'],
    teens: ['holiday', 'tradition', 'food', 'family', 'party'],
    adults: ['holiday', 'tradition', 'meaning', 'family', 'custom']
  },
  business: {
    kids: ['help', 'team', 'idea', 'task', 'thanks'],
    teens: ['message', 'request', 'project', 'team', 'reply'],
    adults: ['email', 'meeting', 'request', 'client', 'next step']
  },
  generic: {
    kids: ['word', 'idea', 'friend', 'question', 'answer'],
    teens: ['topic', 'idea', 'example', 'question', 'opinion'],
    adults: ['topic', 'example', 'question', 'purpose', 'result']
  }
};

const ROLEPLAY_QUESTION_PROMPTS: Record<TopicKey, Record<AudienceKey, string[]>> = {
  greetings: {
    kids: ['What is your name?', 'How are you?'],
    teens: ['How are you today?', 'What is your name?'],
    adults: ['How are you today?', 'Could you introduce yourself?']
  },
  numbers: {
    kids: ['How old are you?', 'What number do you like?'],
    teens: ['When is your birthday?', 'What date is important to you?'],
    adults: ['Could you confirm the number?', 'What date works for you?']
  },
  family: {
    kids: ['Who is this?', 'Do you have a brother or sister?'],
    teens: ['Who is in your family?', 'What is your brother/sister like?'],
    adults: ['Who do you live with?', 'Could you tell me about your family?']
  },
  routine: {
    kids: ['What do you do in the morning?', 'What time do you wake up?'],
    teens: ['What do you usually do after school?', 'What time do you go to bed?'],
    adults: ['What is your morning routine like?', 'How often do you do that?']
  },
  food: {
    kids: ['What do you want?', 'Do you like ...?'],
    teens: ['What would you like to eat?', 'What do you recommend?'],
    adults: ['Could I see the menu?', 'What would you recommend?']
  },
  clothes: {
    kids: ['What are you wearing?', 'Do you like this color?'],
    teens: ['What do you usually wear?', 'Does it look good?'],
    adults: ['Do you have this in another size?', 'What would you wear for that?']
  },
  gadgets: {
    kids: ['Do you have a phone?', 'What is it for?'],
    teens: ['What app do you use most?', 'Why do you like that device?'],
    adults: ['What do you use it for?', 'How does it help you?']
  },
  school: {
    kids: ['Can I have a pencil?', 'What is your favorite subject?'],
    teens: ['Do you like this subject?', 'What do you need for class?'],
    adults: ['What helps you study?', 'What do you need to improve?']
  },
  animals: {
    kids: ['What animal do you like?', 'Where does it live?'],
    teens: ['Do you have a pet?', 'Why do you like that animal?'],
    adults: ['Have you ever had a pet?', 'What do you think about that animal?']
  },
  body: {
    kids: ['Can you touch your ...?', 'What can you move?'],
    teens: ['Can you do that action?', 'What body part do you use?'],
    adults: ['Where does it hurt?', 'Can you describe the problem?']
  },
  directions: {
    kids: ['Where is the ...?', 'Do I turn left?'],
    teens: ['How do I get to ...?', 'Is it near here?'],
    adults: ['Excuse me, how can I get to ...?', 'Could you repeat that, please?']
  },
  hobbies: {
    kids: ['Do you like ...?', 'What do you play?'],
    teens: ['What do you do in your free time?', 'How often do you do it?'],
    adults: ['What do you usually do on weekends?', 'How did you get into that?']
  },
  house: {
    kids: ['What is in your room?', 'Where do you sleep?'],
    teens: ['What is your room like?', 'What is there in your house?'],
    adults: ['Which room do you use most?', 'What do you usually do there?']
  },
  weather: {
    kids: ['Is it sunny?', 'What do you wear?'],
    teens: ['What is the weather like today?', 'What do you do when it rains?'],
    adults: ['How does the weather affect your day?', 'What do you usually wear when it is cold?']
  },
  jobs: {
    kids: ['What does a doctor do?', 'Where does a teacher work?'],
    teens: ['What job sounds interesting?', 'Why do you like that job?'],
    adults: ['What are you responsible for?', 'What does that involve?']
  },
  future: {
    kids: ['What are you going to do?', 'Will you ...?'],
    teens: ['What are you going to do this weekend?', 'What do you think will happen?'],
    adults: ['What are you planning to do next?', 'What outcome do you expect?']
  },
  travel: {
    kids: ['Where do you want to go?', 'What do you take?'],
    teens: ['Where should we go?', 'What should we pack?'],
    adults: ['When are you leaving?', 'Would you like me to book it?']
  },
  feelings: {
    kids: ['How do you feel?', 'Why are you happy?'],
    teens: ['How are you feeling today?', 'What helps you feel better?'],
    adults: ['How do you usually handle that?', 'What makes you feel that way?']
  },
  holidays: {
    kids: ['Do you like birthdays?', 'Who is at the party?'],
    teens: ['What do you usually do on holidays?', 'Who do you celebrate with?'],
    adults: ['How do you usually celebrate?', 'Why is that tradition important?']
  },
  business: {
    kids: ['Can you help me?', 'What should we do next?'],
    teens: ['Could you help me with ...?', 'What information do you need?'],
    adults: ['Could you clarify ...?', 'What would be the next step?']
  },
  generic: {
    kids: ['Can you ask me?', 'What about you?'],
    teens: ['What do you think?', 'Can you give an example?'],
    adults: ['What do you think about it?', 'Could you give me an example?']
  }
};

function uniqueItems(items: string[]) {
  return Array.from(new Set(items.map((item) => item.trim()).filter(Boolean)));
}

function uniqueWarmupItems(items: WarmupWheelItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = normalizeText(`${item.label} ${item.prompt}`);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 6);
}

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
    'What sentence can you make with today\'s topic?',
    'What part looks interesting to you?'
  ]
};

const WARMUP_WHEEL_BANK: Record<TopicKey, Record<AudienceKey, WarmupWheelItem[]>> = {
  greetings: {
    kids: [
      { label: 'Hello', prompt: 'Say hello and tell us your name.', es: 'Saluda y di tu nombre.' },
      { label: 'Feelings', prompt: 'How are you today? Answer with one feeling.', es: 'Como estas hoy? Responde con un sentimiento.' },
      { label: 'Friend', prompt: 'How do you say hello to a friend?', es: 'Como saludas a un amigo?' },
      { label: 'Teacher', prompt: 'How do you say hello to a teacher?', es: 'Como saludas a un profesor?' },
      { label: 'Goodbye', prompt: 'Say one friendly goodbye phrase.', es: 'Di una forma amable de despedirte.' },
      { label: 'Question', prompt: 'Ask your partner: What is your name?', es: 'Pregunta a tu companero: What is your name?' }
    ],
    teens: [
      { label: 'Intro', prompt: 'Introduce yourself with your name and one detail.', es: 'Presentate con tu nombre y un detalle.' },
      { label: 'First Day', prompt: 'What do you say when you meet a new classmate?', es: 'Que dices cuando conoces a un nuevo companero?' },
      { label: 'Mood', prompt: 'How are you today? Give a short reason.', es: 'Como estas hoy? Da una razon corta.' },
      { label: 'Polite', prompt: 'What greeting sounds polite but natural?', es: 'Que saludo suena educado y natural?' },
      { label: 'Follow-up', prompt: 'Ask one follow-up question after: Nice to meet you.', es: 'Haz una pregunta despues de: Nice to meet you.' },
      { label: 'Close', prompt: 'How do you end a first conversation politely?', es: 'Como terminas una primera conversacion educadamente?' }
    ],
    adults: [
      { label: 'Intro', prompt: 'Introduce yourself professionally in one sentence.', es: 'Presentate profesionalmente en una oracion.' },
      { label: 'Greeting', prompt: 'How do you greet someone in a formal setting?', es: 'Como saludas a alguien en un contexto formal?' },
      { label: 'Small Talk', prompt: 'Ask one natural small-talk question.', es: 'Haz una pregunta natural para conversacion inicial.' },
      { label: 'Context', prompt: 'Say where you are from and what you do.', es: 'Di de donde eres y a que te dedicas.' },
      { label: 'Polite', prompt: 'What phrase helps you sound polite when meeting someone?', es: 'Que frase ayuda a sonar educado al conocer a alguien?' },
      { label: 'Close', prompt: 'Close a first conversation with a professional phrase.', es: 'Cierra una primera conversacion con una frase profesional.' }
    ]
  },
  numbers: {
    kids: [
      { label: 'Age', prompt: 'How old are you? Answer with a full sentence.', es: 'Cuantos anos tienes? Responde con una oracion completa.' },
      { label: 'Count', prompt: 'Count five things you can see.', es: 'Cuenta cinco cosas que puedes ver.' },
      { label: 'Favorite', prompt: 'What is your favorite number?', es: 'Cual es tu numero favorito?' },
      { label: 'Birthday', prompt: 'What month is your birthday?', es: 'En que mes es tu cumpleanos?' },
      { label: 'Time', prompt: 'What time do you wake up?', es: 'A que hora te despiertas?' },
      { label: 'Class', prompt: 'How many students are here today?', es: 'Cuantos estudiantes hay hoy?' }
    ],
    teens: [
      { label: 'Birthday', prompt: 'When is your birthday? Answer with month or date.', es: 'Cuando es tu cumpleanos? Responde con mes o fecha.' },
      { label: 'Schedule', prompt: 'What time does your first class start?', es: 'A que hora empieza tu primera clase?' },
      { label: 'Number', prompt: 'What number is important in your life?', es: 'Que numero es importante en tu vida?' },
      { label: 'Year', prompt: 'Say one important year and explain why.', es: 'Di un ano importante y explica por que.' },
      { label: 'Price', prompt: 'What price feels expensive for a snack?', es: 'Que precio parece caro para un snack?' },
      { label: 'Ask', prompt: 'Ask your partner one question with how many or what time.', es: 'Haz una pregunta con how many o what time.' }
    ],
    adults: [
      { label: 'Time', prompt: 'What time do you usually start your day?', es: 'A que hora normalmente empiezas tu dia?' },
      { label: 'Date', prompt: 'What date is important for your work or family?', es: 'Que fecha es importante para tu trabajo o familia?' },
      { label: 'Confirm', prompt: 'Confirm a phone number or appointment time politely.', es: 'Confirma un numero o una hora de cita educadamente.' },
      { label: 'Price', prompt: 'What price is reasonable for lunch near you?', es: 'Que precio es razonable para almorzar cerca de ti?' },
      { label: 'Age', prompt: 'Ask someone about age politely without sounding too direct.', es: 'Pregunta por edad de forma educada y no tan directa.' },
      { label: 'Schedule', prompt: 'Say one sentence about your weekly schedule.', es: 'Di una oracion sobre tu horario semanal.' }
    ]
  },
  family: {
    kids: [
      { label: 'People', prompt: 'Who is in your family?', es: 'Quien esta en tu familia?' },
      { label: 'Home', prompt: 'Who lives in your home?', es: 'Quien vive en tu casa?' },
      { label: 'Funny', prompt: 'Who is funny in your family?', es: 'Quien es divertido en tu familia?' },
      { label: 'Pet', prompt: 'Do you have a pet at home?', es: 'Tienes mascota en casa?' },
      { label: 'Like', prompt: 'What do you like to do with your family?', es: 'Que te gusta hacer con tu familia?' },
      { label: 'Ask', prompt: 'Ask your partner about one family member.', es: 'Pregunta a tu companero por un familiar.' }
    ],
    teens: [
      { label: 'People', prompt: 'Who do you live with?', es: 'Con quien vives?' },
      { label: 'Describe', prompt: 'Describe one family member with two adjectives.', es: 'Describe un familiar con dos adjetivos.' },
      { label: 'Similar', prompt: 'Who are you similar to in your family?', es: 'A quien te pareces en tu familia?' },
      { label: 'Routine', prompt: 'What do you usually do with your family?', es: 'Que haces normalmente con tu familia?' },
      { label: 'Question', prompt: 'Ask a clear question about your partner\'s family.', es: 'Haz una pregunta clara sobre la familia de tu companero.' },
      { label: 'Opinion', prompt: 'What makes a family strong?', es: 'Que hace fuerte a una familia?' }
    ],
    adults: [
      { label: 'Household', prompt: 'Who do you live with, or who are you close to?', es: 'Con quien vives o con quien eres cercano?' },
      { label: 'Describe', prompt: 'Describe one relative and your relationship with them.', es: 'Describe un familiar y tu relacion con esa persona.' },
      { label: 'Routine', prompt: 'What is one family routine you value?', es: 'Que rutina familiar valoras?' },
      { label: 'Support', prompt: 'Who supports you most in your family?', es: 'Quien te apoya mas en tu familia?' },
      { label: 'Question', prompt: 'Ask a respectful question about someone\'s family.', es: 'Haz una pregunta respetuosa sobre la familia de alguien.' },
      { label: 'Change', prompt: 'How has your family changed over time?', es: 'Como ha cambiado tu familia con el tiempo?' }
    ]
  },
  routine: {
    kids: [
      { label: 'Morning', prompt: 'What do you do first in the morning?', es: 'Que haces primero en la manana?' },
      { label: 'School', prompt: 'What do you do before school?', es: 'Que haces antes de la escuela?' },
      { label: 'Food', prompt: 'What do you eat for breakfast?', es: 'Que comes en el desayuno?' },
      { label: 'Night', prompt: 'What do you do at night?', es: 'Que haces en la noche?' },
      { label: 'Always', prompt: 'What do you always do every day?', es: 'Que haces siempre todos los dias?' },
      { label: 'Ask', prompt: 'Ask your partner about their morning.', es: 'Pregunta a tu companero sobre su manana.' }
    ],
    teens: [
      { label: 'Morning', prompt: 'What is your morning routine on school days?', es: 'Cual es tu rutina de manana en dias de clase?' },
      { label: 'After Class', prompt: 'What do you usually do after class?', es: 'Que haces normalmente despues de clase?' },
      { label: 'Frequency', prompt: 'What activity do you do three times a week?', es: 'Que actividad haces tres veces por semana?' },
      { label: 'Never', prompt: 'What do you never do in the morning?', es: 'Que nunca haces en la manana?' },
      { label: 'Weekend', prompt: 'How is your weekend routine different?', es: 'Como es diferente tu rutina de fin de semana?' },
      { label: 'Ask', prompt: 'Ask one question using how often.', es: 'Haz una pregunta usando how often.' }
    ],
    adults: [
      { label: 'Morning', prompt: 'Walk us through the first hour of your day.', es: 'Describe la primera hora de tu dia.' },
      { label: 'Workday', prompt: 'What do you usually do before work or study?', es: 'Que haces normalmente antes del trabajo o estudio?' },
      { label: 'Habit', prompt: 'What habit helps you stay organized?', es: 'Que habito te ayuda a organizarte?' },
      { label: 'Frequency', prompt: 'How often do you exercise, read, or practice English?', es: 'Con que frecuencia haces ejercicio, lees o practicas ingles?' },
      { label: 'Challenge', prompt: 'What part of your routine is difficult to keep?', es: 'Que parte de tu rutina es dificil mantener?' },
      { label: 'Question', prompt: 'Ask someone about one daily habit.', es: 'Pregunta a alguien por un habito diario.' }
    ]
  },
  food: {
    kids: [
      { label: 'Like', prompt: 'What food do you like?', es: 'Que comida te gusta?' },
      { label: 'Drink', prompt: 'What do you drink every day?', es: 'Que tomas todos los dias?' },
      { label: 'Snack', prompt: 'What is your favorite snack?', es: 'Cual es tu snack favorito?' },
      { label: 'Restaurant', prompt: 'What do you order at a restaurant?', es: 'Que pides en un restaurante?' },
      { label: 'Hungry', prompt: 'What do you eat when you are hungry?', es: 'Que comes cuando tienes hambre?' },
      { label: 'Ask', prompt: 'Ask your partner: Do you like pizza?', es: 'Pregunta a tu companero: Do you like pizza?' }
    ],
    teens: [
      { label: 'Favorite', prompt: 'What food could you eat every week?', es: 'Que comida podrias comer cada semana?' },
      { label: 'Order', prompt: 'How do you order food politely?', es: 'Como pides comida educadamente?' },
      { label: 'Recommend', prompt: 'What restaurant or dish do you recommend?', es: 'Que restaurante o plato recomiendas?' },
      { label: 'Compare', prompt: 'Do you prefer eating at home or outside? Why?', es: 'Prefieres comer en casa o afuera? Por que?' },
      { label: 'Dislike', prompt: 'What food do you not like?', es: 'Que comida no te gusta?' },
      { label: 'Ask', prompt: 'Ask one clear food question to your partner.', es: 'Haz una pregunta clara sobre comida.' }
    ],
    adults: [
      { label: 'Order', prompt: 'Order a meal politely in one complete sentence.', es: 'Pide una comida educadamente en una oracion completa.' },
      { label: 'Recommend', prompt: 'Recommend a dish and explain why.', es: 'Recomienda un plato y explica por que.' },
      { label: 'Routine', prompt: 'What do you usually eat during a busy day?', es: 'Que comes normalmente en un dia ocupado?' },
      { label: 'Diet', prompt: 'What food do you try to avoid?', es: 'Que comida tratas de evitar?' },
      { label: 'Service', prompt: 'How do you ask for the bill or the menu politely?', es: 'Como pides la cuenta o el menu educadamente?' },
      { label: 'Question', prompt: 'Ask someone about their food preferences.', es: 'Pregunta a alguien por sus preferencias de comida.' }
    ]
  },
  clothes: {
    kids: [
      { label: 'Wearing', prompt: 'What are you wearing today?', es: 'Que llevas puesto hoy?' },
      { label: 'Color', prompt: 'What color are your clothes?', es: 'De que color es tu ropa?' },
      { label: 'Weather', prompt: 'What do you wear when it rains?', es: 'Que usas cuando llueve?' },
      { label: 'Favorite', prompt: 'What is your favorite item of clothing?', es: 'Cual es tu prenda favorita?' },
      { label: 'Look', prompt: 'Point to one thing and say: This is a ...', es: 'Senala algo y di: This is a ...' },
      { label: 'Ask', prompt: 'Ask your partner about one color.', es: 'Pregunta a tu companero por un color.' }
    ],
    teens: [
      { label: 'Style', prompt: 'What do you usually wear on weekends?', es: 'Que usas normalmente los fines de semana?' },
      { label: 'Today', prompt: 'Describe what you are wearing today.', es: 'Describe que llevas puesto hoy.' },
      { label: 'Opinion', prompt: 'What clothes are comfortable for school?', es: 'Que ropa es comoda para la escuela?' },
      { label: 'Compare', prompt: 'Do you prefer casual or formal clothes? Why?', es: 'Prefieres ropa casual o formal? Por que?' },
      { label: 'Shopping', prompt: 'What item of clothing do you want to buy?', es: 'Que prenda quieres comprar?' },
      { label: 'Ask', prompt: 'Ask one question about style or colors.', es: 'Haz una pregunta sobre estilo o colores.' }
    ],
    adults: [
      { label: 'Work', prompt: 'What do you usually wear for work or important plans?', es: 'Que usas normalmente para trabajo o planes importantes?' },
      { label: 'Today', prompt: 'Describe your outfit today in one complete sentence.', es: 'Describe tu ropa de hoy con una oracion completa.' },
      { label: 'Weather', prompt: 'What do you wear in cold or rainy weather?', es: 'Que usas con clima frio o lluvioso?' },
      { label: 'Shopping', prompt: 'Ask for a size or color politely in a store.', es: 'Pide una talla o color educadamente en una tienda.' },
      { label: 'Style', prompt: 'What style feels professional to you?', es: 'Que estilo te parece profesional?' },
      { label: 'Question', prompt: 'Ask someone what they wear for an event.', es: 'Pregunta que usa alguien para un evento.' }
    ]
  },
  gadgets: {
    kids: [
      { label: 'Device', prompt: 'What device do you use?', es: 'Que aparato usas?' },
      { label: 'Phone', prompt: 'What can you do with a phone?', es: 'Que puedes hacer con un celular?' },
      { label: 'Game', prompt: 'Do you play games on a device?', es: 'Juegas en algun aparato?' },
      { label: 'Music', prompt: 'What do you use to listen to music?', es: 'Que usas para escuchar musica?' },
      { label: 'Help', prompt: 'What gadget helps you at home?', es: 'Que aparato te ayuda en casa?' },
      { label: 'Ask', prompt: 'Ask your partner about a favorite app.', es: 'Pregunta por una app favorita.' }
    ],
    teens: [
      { label: 'App', prompt: 'What app do you use most and why?', es: 'Que app usas mas y por que?' },
      { label: 'Device', prompt: 'Do you prefer a phone, tablet, or laptop?', es: 'Prefieres celular, tablet o laptop?' },
      { label: 'Study', prompt: 'What technology helps you study?', es: 'Que tecnologia te ayuda a estudiar?' },
      { label: 'Limit', prompt: 'How much screen time is okay for you?', es: 'Cuanto tiempo de pantalla esta bien para ti?' },
      { label: 'Favorite', prompt: 'What gadget do you want to have?', es: 'Que aparato quieres tener?' },
      { label: 'Ask', prompt: 'Ask one question about technology habits.', es: 'Haz una pregunta sobre habitos tecnologicos.' }
    ],
    adults: [
      { label: 'Work', prompt: 'What device helps you work or study better?', es: 'Que aparato te ayuda a trabajar o estudiar mejor?' },
      { label: 'App', prompt: 'What app saves you time?', es: 'Que app te ahorra tiempo?' },
      { label: 'Problem', prompt: 'What tech problem do you often have?', es: 'Que problema tecnologico tienes a menudo?' },
      { label: 'Explain', prompt: 'Explain what you use your phone for most.', es: 'Explica para que usas mas tu celular.' },
      { label: 'Recommend', prompt: 'Recommend one useful digital tool.', es: 'Recomienda una herramienta digital util.' },
      { label: 'Question', prompt: 'Ask someone how technology helps their routine.', es: 'Pregunta como la tecnologia ayuda su rutina.' }
    ]
  },
  school: {
    kids: [
      { label: 'Subject', prompt: 'What subject do you like?', es: 'Que materia te gusta?' },
      { label: 'Backpack', prompt: 'What is in your backpack?', es: 'Que hay en tu mochila?' },
      { label: 'Pencil', prompt: 'Ask for a pencil politely.', es: 'Pide un lapiz educadamente.' },
      { label: 'Teacher', prompt: 'What does a teacher do?', es: 'Que hace un profesor?' },
      { label: 'Classroom', prompt: 'Name three classroom objects.', es: 'Nombra tres objetos del salon.' },
      { label: 'Ask', prompt: 'Ask your partner about school.', es: 'Pregunta a tu companero sobre la escuela.' }
    ],
    teens: [
      { label: 'Subject', prompt: 'What subject is useful for your future?', es: 'Que materia es util para tu futuro?' },
      { label: 'Study', prompt: 'How do you study before a test?', es: 'Como estudias antes de un examen?' },
      { label: 'Class', prompt: 'What makes a class interesting?', es: 'Que hace interesante una clase?' },
      { label: 'Need', prompt: 'What do you need to learn better?', es: 'Que necesitas para aprender mejor?' },
      { label: 'Rules', prompt: 'What school rule is important?', es: 'Que regla escolar es importante?' },
      { label: 'Ask', prompt: 'Ask one question about school life.', es: 'Haz una pregunta sobre la vida escolar.' }
    ],
    adults: [
      { label: 'Learning', prompt: 'What helps you learn English effectively?', es: 'Que te ayuda a aprender ingles efectivamente?' },
      { label: 'Challenge', prompt: 'What is difficult when you study?', es: 'Que es dificil cuando estudias?' },
      { label: 'Goal', prompt: 'What learning goal do you have this month?', es: 'Que meta de aprendizaje tienes este mes?' },
      { label: 'Method', prompt: 'Describe one study habit that works for you.', es: 'Describe un habito de estudio que te funciona.' },
      { label: 'Need', prompt: 'What support do you need from a teacher?', es: 'Que apoyo necesitas de un profesor?' },
      { label: 'Question', prompt: 'Ask someone about their learning routine.', es: 'Pregunta por la rutina de aprendizaje de alguien.' }
    ]
  },
  animals: {
    kids: [
      { label: 'Favorite', prompt: 'What animal do you like?', es: 'Que animal te gusta?' },
      { label: 'Pet', prompt: 'Do you have a pet?', es: 'Tienes mascota?' },
      { label: 'Sound', prompt: 'What sound does your favorite animal make?', es: 'Que sonido hace tu animal favorito?' },
      { label: 'Fast', prompt: 'What animal is fast?', es: 'Que animal es rapido?' },
      { label: 'Home', prompt: 'Where does that animal live?', es: 'Donde vive ese animal?' },
      { label: 'Ask', prompt: 'Ask your partner about one animal.', es: 'Pregunta por un animal.' }
    ],
    teens: [
      { label: 'Pet', prompt: 'Do you want to have a pet? Why?', es: 'Quieres tener una mascota? Por que?' },
      { label: 'Wild', prompt: 'What wild animal do you want to see?', es: 'Que animal salvaje quieres ver?' },
      { label: 'Compare', prompt: 'Which animal is smarter: a dog or a cat?', es: 'Que animal es mas inteligente: perro o gato?' },
      { label: 'Care', prompt: 'What does a pet need every day?', es: 'Que necesita una mascota todos los dias?' },
      { label: 'Opinion', prompt: 'Do animals need big spaces? Give one reason.', es: 'Los animales necesitan espacios grandes? Da una razon.' },
      { label: 'Ask', prompt: 'Ask one clear animal question.', es: 'Haz una pregunta clara sobre animales.' }
    ],
    adults: [
      { label: 'Experience', prompt: 'Did you have a pet before? Say one detail.', es: 'Tuviste mascota antes? Di un detalle.' },
      { label: 'Preference', prompt: 'Do you prefer dogs, cats, or another animal? Why?', es: 'Prefieres perros, gatos u otro animal? Por que?' },
      { label: 'Responsibility', prompt: 'What responsibility comes with having a pet?', es: 'Que responsabilidad viene con tener mascota?' },
      { label: 'Nature', prompt: 'What animal from nature interests you?', es: 'Que animal de la naturaleza te interesa?' },
      { label: 'Opinion', prompt: 'What can people learn from animals?', es: 'Que pueden aprender las personas de los animales?' },
      { label: 'Question', prompt: 'Ask someone about an animal experience.', es: 'Pregunta por una experiencia con animales.' }
    ]
  },
  body: {
    kids: [
      { label: 'Point', prompt: 'Point to your head, hands, and feet.', es: 'Senala cabeza, manos y pies.' },
      { label: 'Action', prompt: 'What can you do with your hands?', es: 'Que puedes hacer con tus manos?' },
      { label: 'Move', prompt: 'Can you jump, run, or dance?', es: 'Puedes saltar, correr o bailar?' },
      { label: 'Face', prompt: 'Name two parts of the face.', es: 'Nombra dos partes de la cara.' },
      { label: 'Sport', prompt: 'What body part do you use in soccer?', es: 'Que parte del cuerpo usas en futbol?' },
      { label: 'Ask', prompt: 'Ask your partner: Can you touch your nose?', es: 'Pregunta: Can you touch your nose?' }
    ],
    teens: [
      { label: 'Action', prompt: 'What action can you do well?', es: 'Que accion puedes hacer bien?' },
      { label: 'Sport', prompt: 'What body parts do you use in your favorite sport?', es: 'Que partes del cuerpo usas en tu deporte favorito?' },
      { label: 'Health', prompt: 'What do you do when you feel tired?', es: 'Que haces cuando te sientes cansado?' },
      { label: 'Describe', prompt: 'Describe a person with two physical details.', es: 'Describe a una persona con dos detalles fisicos.' },
      { label: 'Ability', prompt: 'Say one thing you can and cannot do.', es: 'Di algo que puedes y no puedes hacer.' },
      { label: 'Ask', prompt: 'Ask one question with can.', es: 'Haz una pregunta con can.' }
    ],
    adults: [
      { label: 'Health', prompt: 'How do you describe a simple health problem?', es: 'Como describes un problema simple de salud?' },
      { label: 'Routine', prompt: 'What do you do to take care of your body?', es: 'Que haces para cuidar tu cuerpo?' },
      { label: 'Symptom', prompt: 'Say one sentence a patient could say to a doctor.', es: 'Di una oracion que un paciente podria decir al doctor.' },
      { label: 'Movement', prompt: 'What movement or exercise do you enjoy?', es: 'Que movimiento o ejercicio disfrutas?' },
      { label: 'Ability', prompt: 'What physical activity can you do well?', es: 'Que actividad fisica puedes hacer bien?' },
      { label: 'Question', prompt: 'Ask someone how they feel today.', es: 'Pregunta como se siente alguien hoy.' }
    ]
  },
  directions: {
    kids: [
      { label: 'Place', prompt: 'What place is near your home?', es: 'Que lugar esta cerca de tu casa?' },
      { label: 'Left', prompt: 'Point left and say one place.', es: 'Senala izquierda y di un lugar.' },
      { label: 'Right', prompt: 'Point right and say one place.', es: 'Senala derecha y di un lugar.' },
      { label: 'Go', prompt: 'How do you go to school?', es: 'Como vas a la escuela?' },
      { label: 'Town', prompt: 'Name two places in town.', es: 'Nombra dos lugares en la ciudad.' },
      { label: 'Ask', prompt: 'Ask: Where is the park?', es: 'Pregunta: Where is the park?' }
    ],
    teens: [
      { label: 'Ask', prompt: 'Ask for directions to a place near school.', es: 'Pide direcciones a un lugar cerca de la escuela.' },
      { label: 'Explain', prompt: 'Explain how to get from class to the entrance.', es: 'Explica como ir de clase a la entrada.' },
      { label: 'Transport', prompt: 'How do you usually move around town?', es: 'Como te mueves normalmente por la ciudad?' },
      { label: 'Place', prompt: 'What place do you visit often?', es: 'Que lugar visitas a menudo?' },
      { label: 'Near', prompt: 'What is near your house?', es: 'Que esta cerca de tu casa?' },
      { label: 'Clarify', prompt: 'Ask someone to repeat directions politely.', es: 'Pide que repitan direcciones educadamente.' }
    ],
    adults: [
      { label: 'Ask', prompt: 'Ask for directions politely in one sentence.', es: 'Pide direcciones educadamente en una oracion.' },
      { label: 'Explain', prompt: 'Give simple directions from your home to a nearby place.', es: 'Da direcciones simples desde tu casa a un lugar cercano.' },
      { label: 'Transport', prompt: 'What transportation do you use most?', es: 'Que transporte usas mas?' },
      { label: 'Clarify', prompt: 'What do you say when you do not understand directions?', es: 'Que dices cuando no entiendes direcciones?' },
      { label: 'Travel', prompt: 'What place do visitors ask about in your city?', es: 'Por que lugar preguntan visitantes en tu ciudad?' },
      { label: 'Question', prompt: 'Ask someone how to get to a specific place.', es: 'Pregunta como llegar a un lugar especifico.' }
    ]
  },
  hobbies: {
    kids: [
      { label: 'Fun', prompt: 'What do you do for fun?', es: 'Que haces para divertirte?' },
      { label: 'Sport', prompt: 'What sport do you like?', es: 'Que deporte te gusta?' },
      { label: 'Music', prompt: 'Do you like music?', es: 'Te gusta la musica?' },
      { label: 'Game', prompt: 'What game do you play?', es: 'Que juego juegas?' },
      { label: 'Friends', prompt: 'What do you do with friends?', es: 'Que haces con amigos?' },
      { label: 'Ask', prompt: 'Ask your partner: What do you like?', es: 'Pregunta: What do you like?' }
    ],
    teens: [
      { label: 'Free Time', prompt: 'What do you usually do in your free time?', es: 'Que haces normalmente en tu tiempo libre?' },
      { label: 'Frequency', prompt: 'How often do you practice a hobby?', es: 'Con que frecuencia practicas un pasatiempo?' },
      { label: 'Friends', prompt: 'What activity is better with friends?', es: 'Que actividad es mejor con amigos?' },
      { label: 'Try', prompt: 'What new hobby do you want to try?', es: 'Que pasatiempo nuevo quieres probar?' },
      { label: 'Reason', prompt: 'Why do you enjoy your favorite activity?', es: 'Por que disfrutas tu actividad favorita?' },
      { label: 'Ask', prompt: 'Ask one question about free time.', es: 'Haz una pregunta sobre tiempo libre.' }
    ],
    adults: [
      { label: 'Weekend', prompt: 'What do you usually do on weekends?', es: 'Que haces normalmente los fines de semana?' },
      { label: 'Relax', prompt: 'What activity helps you relax?', es: 'Que actividad te ayuda a relajarte?' },
      { label: 'Time', prompt: 'How often do you make time for hobbies?', es: 'Con que frecuencia haces tiempo para pasatiempos?' },
      { label: 'Past', prompt: 'What hobby did you have when you were younger?', es: 'Que pasatiempo tenias cuando eras mas joven?' },
      { label: 'Recommend', prompt: 'Recommend one hobby and explain why.', es: 'Recomienda un pasatiempo y explica por que.' },
      { label: 'Question', prompt: 'Ask someone about their interests.', es: 'Pregunta a alguien por sus intereses.' }
    ]
  },
  house: {
    kids: [
      { label: 'Room', prompt: 'What room do you like at home?', es: 'Que cuarto te gusta en casa?' },
      { label: 'Bedroom', prompt: 'What is in your bedroom?', es: 'Que hay en tu cuarto?' },
      { label: 'Kitchen', prompt: 'What do you see in a kitchen?', es: 'Que ves en una cocina?' },
      { label: 'Living Room', prompt: 'What do you do in the living room?', es: 'Que haces en la sala?' },
      { label: 'There Is', prompt: 'Say one sentence with there is.', es: 'Di una oracion con there is.' },
      { label: 'Ask', prompt: 'Ask your partner about their favorite room.', es: 'Pregunta por su cuarto favorito.' }
    ],
    teens: [
      { label: 'Favorite', prompt: 'What is your favorite room and why?', es: 'Cual es tu cuarto favorito y por que?' },
      { label: 'Describe', prompt: 'Describe your bedroom with two details.', es: 'Describe tu cuarto con dos detalles.' },
      { label: 'There Are', prompt: 'Say one sentence about what there are in your home.', es: 'Di una oracion sobre lo que hay en tu casa.' },
      { label: 'Change', prompt: 'What do you want to change in your room?', es: 'Que quieres cambiar en tu cuarto?' },
      { label: 'Activity', prompt: 'What do you usually do at home after class?', es: 'Que haces normalmente en casa despues de clase?' },
      { label: 'Ask', prompt: 'Ask one question about someone\'s home.', es: 'Haz una pregunta sobre la casa de alguien.' }
    ],
    adults: [
      { label: 'Home', prompt: 'Describe your home or apartment in one sentence.', es: 'Describe tu casa o apartamento en una oracion.' },
      { label: 'Room', prompt: 'Which room do you use most and why?', es: 'Que cuarto usas mas y por que?' },
      { label: 'Object', prompt: 'What object at home is useful every day?', es: 'Que objeto de casa es util todos los dias?' },
      { label: 'Ideal', prompt: 'What does your ideal home have?', es: 'Que tiene tu casa ideal?' },
      { label: 'Routine', prompt: 'What do you usually do when you get home?', es: 'Que haces normalmente al llegar a casa?' },
      { label: 'Question', prompt: 'Ask someone about their home politely.', es: 'Pregunta por la casa de alguien educadamente.' }
    ]
  },
  weather: {
    kids: [
      { label: 'Today', prompt: 'How is the weather today?', es: 'Como esta el clima hoy?' },
      { label: 'Sunny', prompt: 'What do you do on sunny days?', es: 'Que haces en dias soleados?' },
      { label: 'Rainy', prompt: 'What do you wear when it rains?', es: 'Que usas cuando llueve?' },
      { label: 'Season', prompt: 'What season do you like?', es: 'Que estacion te gusta?' },
      { label: 'Hot', prompt: 'Do you like hot weather?', es: 'Te gusta el clima caliente?' },
      { label: 'Ask', prompt: 'Ask your partner about today\'s weather.', es: 'Pregunta por el clima de hoy.' }
    ],
    teens: [
      { label: 'Today', prompt: 'What is the weather like today?', es: 'Como esta el clima hoy?' },
      { label: 'Plan', prompt: 'What can you do when it is sunny?', es: 'Que puedes hacer cuando esta soleado?' },
      { label: 'Clothes', prompt: 'What do you wear in cold weather?', es: 'Que usas cuando hace frio?' },
      { label: 'Season', prompt: 'Which season fits your personality?', es: 'Que estacion va con tu personalidad?' },
      { label: 'Compare', prompt: 'Do you prefer hot or cold weather? Why?', es: 'Prefieres calor o frio? Por que?' },
      { label: 'Ask', prompt: 'Ask one weather question.', es: 'Haz una pregunta sobre el clima.' }
    ],
    adults: [
      { label: 'Today', prompt: 'Describe today\'s weather and how it affects your plans.', es: 'Describe el clima de hoy y como afecta tus planes.' },
      { label: 'Preference', prompt: 'What weather do you prefer for work or travel?', es: 'Que clima prefieres para trabajo o viaje?' },
      { label: 'Clothes', prompt: 'What do you wear when the weather changes quickly?', es: 'Que usas cuando el clima cambia rapido?' },
      { label: 'Season', prompt: 'What season is best in your city?', es: 'Que estacion es mejor en tu ciudad?' },
      { label: 'Problem', prompt: 'What weather creates problems for you?', es: 'Que clima te crea problemas?' },
      { label: 'Question', prompt: 'Ask someone about the forecast or their plans.', es: 'Pregunta por el pronostico o los planes de alguien.' }
    ]
  },
  jobs: {
    kids: [
      { label: 'Job', prompt: 'What job do you know?', es: 'Que trabajo conoces?' },
      { label: 'Doctor', prompt: 'What does a doctor do?', es: 'Que hace un doctor?' },
      { label: 'Teacher', prompt: 'Where does a teacher work?', es: 'Donde trabaja un profesor?' },
      { label: 'Future', prompt: 'What do you want to be?', es: 'Que quieres ser?' },
      { label: 'Help', prompt: 'What job helps people?', es: 'Que trabajo ayuda a las personas?' },
      { label: 'Ask', prompt: 'Ask your partner about a job.', es: 'Pregunta por un trabajo.' }
    ],
    teens: [
      { label: 'Future Job', prompt: 'What job sounds interesting for your future?', es: 'Que trabajo suena interesante para tu futuro?' },
      { label: 'Skills', prompt: 'What skill is important for that job?', es: 'Que habilidad es importante para ese trabajo?' },
      { label: 'Place', prompt: 'Where do you want to work one day?', es: 'Donde quieres trabajar algun dia?' },
      { label: 'Compare', prompt: 'Which is better: working alone or in a team?', es: 'Que es mejor: trabajar solo o en equipo?' },
      { label: 'Responsibility', prompt: 'What responsibility sounds difficult?', es: 'Que responsabilidad suena dificil?' },
      { label: 'Ask', prompt: 'Ask one career question.', es: 'Haz una pregunta sobre carrera.' }
    ],
    adults: [
      { label: 'Work', prompt: 'What do you do, or what field are you interested in?', es: 'A que te dedicas o que area te interesa?' },
      { label: 'Responsibility', prompt: 'Describe one responsibility at work or home.', es: 'Describe una responsabilidad en trabajo o casa.' },
      { label: 'Skill', prompt: 'What professional skill do you want to improve?', es: 'Que habilidad profesional quieres mejorar?' },
      { label: 'Meeting', prompt: 'What phrase is useful in a meeting?', es: 'Que frase es util en una reunion?' },
      { label: 'Problem', prompt: 'What common work problem can you explain in English?', es: 'Que problema laboral comun puedes explicar en ingles?' },
      { label: 'Question', prompt: 'Ask someone about their work politely.', es: 'Pregunta por el trabajo de alguien educadamente.' }
    ]
  },
  future: {
    kids: [
      { label: 'Tomorrow', prompt: 'What is one plan for tomorrow?', es: 'Cual es un plan para manana?' },
      { label: 'Later', prompt: 'What is one plan after class?', es: 'Cual es un plan despues de clase?' },
      { label: 'Dream', prompt: 'What do you want to be in the future?', es: 'Que quieres ser en el futuro?' },
      { label: 'Trip', prompt: 'What place do you want to visit one day?', es: 'Que lugar quieres visitar algun dia?' },
      { label: 'Plan', prompt: 'Say one simple plan for this week.', es: 'Di un plan simple para esta semana.' },
      { label: 'Ask', prompt: 'Ask your partner about tomorrow.', es: 'Pregunta por manana.' }
    ],
    teens: [
      { label: 'Weekend', prompt: 'What is one plan for this weekend?', es: 'Cual es un plan para este fin de semana?' },
      { label: 'Prediction', prompt: 'What event is possible at school this week?', es: 'Que evento es posible en la escuela esta semana?' },
      { label: 'Goal', prompt: 'What goal is important this week?', es: 'Que meta es importante esta semana?' },
      { label: 'Plan', prompt: 'Say one plan and one reason.', es: 'Di un plan y una razon.' },
      { label: 'Question', prompt: 'Ask one easy question about plans.', es: 'Haz una pregunta facil sobre planes.' },
      { label: 'Choice', prompt: 'Do you prefer planning or deciding later?', es: 'Prefieres planear o decidir despues?' }
    ],
    adults: [
      { label: 'Plan', prompt: 'What are you planning to do next week?', es: 'Que planeas hacer la proxima semana?' },
      { label: 'Goal', prompt: 'What professional or personal goal is important now?', es: 'Que meta profesional o personal es importante ahora?' },
      { label: 'Prediction', prompt: 'What change looks possible soon?', es: 'Que cambio parece posible pronto?' },
      { label: 'Decision', prompt: 'What decision is important this month?', es: 'Que decision es importante este mes?' },
      { label: 'Help', prompt: 'What help can you offer today?', es: 'Que ayuda puedes ofrecer hoy?' },
      { label: 'Question', prompt: 'Ask someone about their future plans.', es: 'Pregunta a alguien por sus planes futuros.' }
    ]
  },
  travel: {
    kids: [
      { label: 'Place', prompt: 'Where do you want to go?', es: 'A donde quieres ir?' },
      { label: 'Bag', prompt: 'What do you put in a travel bag?', es: 'Que pones en una maleta?' },
      { label: 'Transport', prompt: 'Do you like cars, buses, or planes?', es: 'Te gustan carros, buses o aviones?' },
      { label: 'Beach', prompt: 'Do you want to go to the beach?', es: 'Quieres ir a la playa?' },
      { label: 'Friend', prompt: 'Who do you travel with?', es: 'Con quien viajas?' },
      { label: 'Ask', prompt: 'Ask your partner where they want to go.', es: 'Pregunta a donde quiere ir.' }
    ],
    teens: [
      { label: 'Destination', prompt: 'Where do you want to travel and why?', es: 'A donde quieres viajar y por que?' },
      { label: 'Pack', prompt: 'What three things do you pack first?', es: 'Que tres cosas empacas primero?' },
      { label: 'Transport', prompt: 'What is the best way to travel in your city?', es: 'Cual es la mejor forma de viajar en tu ciudad?' },
      { label: 'Problem', prompt: 'What travel problem is annoying?', es: 'Que problema de viaje es molesto?' },
      { label: 'Plan', prompt: 'Plan one weekend trip in one sentence.', es: 'Planea un viaje de fin de semana en una oracion.' },
      { label: 'Ask', prompt: 'Ask a question about a trip.', es: 'Haz una pregunta sobre un viaje.' }
    ],
    adults: [
      { label: 'Trip', prompt: 'Describe a trip you want to take.', es: 'Describe un viaje que quieres hacer.' },
      { label: 'Booking', prompt: 'Ask about a hotel, flight, or reservation politely.', es: 'Pregunta por hotel, vuelo o reserva educadamente.' },
      { label: 'Packing', prompt: 'What do you always pack first?', es: 'Que empacas siempre primero?' },
      { label: 'Experience', prompt: 'What travel experience do you remember clearly?', es: 'Que experiencia de viaje recuerdas claramente?' },
      { label: 'Advice', prompt: 'Give one travel tip for your city.', es: 'Da un consejo de viaje para tu ciudad.' },
      { label: 'Question', prompt: 'Ask someone about their last or next trip.', es: 'Pregunta por el ultimo o proximo viaje de alguien.' }
    ]
  },
  feelings: {
    kids: [
      { label: 'Today', prompt: 'How do you feel today?', es: 'Como te sientes hoy?' },
      { label: 'Happy', prompt: 'What makes you happy?', es: 'Que te hace feliz?' },
      { label: 'Tired', prompt: 'When do you feel tired?', es: 'Cuando te sientes cansado?' },
      { label: 'Face', prompt: 'Show a feeling with your face and name it.', es: 'Muestra un sentimiento con tu cara y nombralo.' },
      { label: 'Color', prompt: 'What color is happy for you?', es: 'Que color es feliz para ti?' },
      { label: 'Ask', prompt: 'Ask your partner how they feel.', es: 'Pregunta como se siente tu companero.' }
    ],
    teens: [
      { label: 'Today', prompt: 'How are you feeling today? Give a reason.', es: 'Como te sientes hoy? Da una razon.' },
      { label: 'Stress', prompt: 'What makes students feel stressed?', es: 'Que hace que estudiantes se sientan estresados?' },
      { label: 'Relax', prompt: 'What helps you relax after a long day?', es: 'Que te ayuda a relajarte despues de un dia largo?' },
      { label: 'Excited', prompt: 'What are you excited about this week?', es: 'Que te emociona esta semana?' },
      { label: 'Advice', prompt: 'What helps a nervous friend?', es: 'Que ayuda a un amigo nervioso?' },
      { label: 'Ask', prompt: 'Ask a careful question about feelings.', es: 'Haz una pregunta cuidadosa sobre sentimientos.' }
    ],
    adults: [
      { label: 'Today', prompt: 'Describe your mood today and one reason.', es: 'Describe tu animo de hoy y una razon.' },
      { label: 'Work', prompt: 'What situation makes you feel confident at work?', es: 'Que situacion te hace sentir seguro en el trabajo?' },
      { label: 'Stress', prompt: 'How do you usually manage stress?', es: 'Como manejas normalmente el estres?' },
      { label: 'Reaction', prompt: 'How do you react when plans change?', es: 'Como reaccionas cuando los planes cambian?' },
      { label: 'Support', prompt: 'What helps you feel better on a difficult day?', es: 'Que te ayuda a sentirte mejor en un dia dificil?' },
      { label: 'Question', prompt: 'Ask someone how they are doing politely.', es: 'Pregunta a alguien como esta educadamente.' }
    ]
  },
  holidays: {
    kids: [
      { label: 'Birthday', prompt: 'Do you like birthday parties?', es: 'Te gustan las fiestas de cumpleanos?' },
      { label: 'Gift', prompt: 'What gift do you like?', es: 'Que regalo te gusta?' },
      { label: 'Family', prompt: 'Who is at a celebration?', es: 'Quien esta en una celebracion?' },
      { label: 'Food', prompt: 'What party food do you like?', es: 'Que comida de fiesta te gusta?' },
      { label: 'Song', prompt: 'What song do people sing on birthdays?', es: 'Que cancion cantan en cumpleanos?' },
      { label: 'Ask', prompt: 'Ask your partner about a party.', es: 'Pregunta por una fiesta.' }
    ],
    teens: [
      { label: 'Holiday', prompt: 'What holiday do you enjoy most?', es: 'Que festividad disfrutas mas?' },
      { label: 'Tradition', prompt: 'What tradition do you have with family or friends?', es: 'Que tradicion tienes con familia o amigos?' },
      { label: 'Food', prompt: 'What food is special in celebrations?', es: 'Que comida es especial en celebraciones?' },
      { label: 'Memory', prompt: 'Describe a celebration you remember.', es: 'Describe una celebracion que recuerdes.' },
      { label: 'Plan', prompt: 'What is one plan for the next holiday?', es: 'Cual es un plan para la proxima festividad?' },
      { label: 'Ask', prompt: 'Ask one question about traditions.', es: 'Haz una pregunta sobre tradiciones.' }
    ],
    adults: [
      { label: 'Tradition', prompt: 'Describe one holiday tradition from your family or country.', es: 'Describe una tradicion festiva de tu familia o pais.' },
      { label: 'Meaning', prompt: 'Why is that celebration important?', es: 'Por que es importante esa celebracion?' },
      { label: 'Memory', prompt: 'What celebration do you remember clearly?', es: 'Que celebracion recuerdas claramente?' },
      { label: 'Plan', prompt: 'What are you planning for the next holiday?', es: 'Que planeas para la proxima festividad?' },
      { label: 'Compare', prompt: 'How are celebrations different now from the past?', es: 'Como son diferentes las celebraciones ahora y antes?' },
      { label: 'Question', prompt: 'Ask someone about a meaningful celebration.', es: 'Pregunta por una celebracion significativa.' }
    ]
  },
  business: {
    kids: [
      { label: 'Help', prompt: 'Ask for help politely.', es: 'Pide ayuda educadamente.' },
      { label: 'Team', prompt: 'What can a team do together?', es: 'Que puede hacer un equipo junto?' },
      { label: 'Idea', prompt: 'Give one idea for a class project.', es: 'Da una idea para un proyecto de clase.' },
      { label: 'Thank You', prompt: 'Say thank you after someone helps you.', es: 'Da las gracias despues de recibir ayuda.' },
      { label: 'Problem', prompt: 'Say one small problem and ask for help.', es: 'Di un problema pequeno y pide ayuda.' },
      { label: 'Ask', prompt: 'Ask your partner: Can you help me?', es: 'Pregunta: Can you help me?' }
    ],
    teens: [
      { label: 'Email', prompt: 'How do you start a formal message?', es: 'Como empiezas un mensaje formal?' },
      { label: 'Request', prompt: 'Make one polite request.', es: 'Haz una peticion educada.' },
      { label: 'Teamwork', prompt: 'What makes teamwork successful?', es: 'Que hace exitoso el trabajo en equipo?' },
      { label: 'Problem', prompt: 'Explain one school or project problem clearly.', es: 'Explica claramente un problema escolar o de proyecto.' },
      { label: 'Follow-up', prompt: 'What do you say when you need an answer?', es: 'Que dices cuando necesitas una respuesta?' },
      { label: 'Ask', prompt: 'Ask one professional or formal question.', es: 'Haz una pregunta profesional o formal.' }
    ],
    adults: [
      { label: 'Email', prompt: 'Start a formal email in one sentence.', es: 'Empieza un correo formal en una oracion.' },
      { label: 'Meeting', prompt: 'What phrase helps you speak in a meeting?', es: 'Que frase te ayuda a hablar en una reunion?' },
      { label: 'Request', prompt: 'Make a polite request to a colleague or client.', es: 'Haz una peticion educada a un colega o cliente.' },
      { label: 'Clarify', prompt: 'Ask for clarification professionally.', es: 'Pide aclaracion de forma profesional.' },
      { label: 'Problem', prompt: 'Explain one work problem and a next step.', es: 'Explica un problema laboral y un siguiente paso.' },
      { label: 'Close', prompt: 'Close a professional message politely.', es: 'Cierra un mensaje profesional educadamente.' }
    ]
  },
  generic: {
    kids: [
      { label: 'Words', prompt: 'Say three words from today\'s class.', es: 'Di tres palabras de la clase de hoy.' },
      { label: 'Like', prompt: 'What do you like about today\'s topic?', es: 'Que te gusta del tema de hoy?' },
      { label: 'Easy', prompt: 'What is easy today?', es: 'Que es facil hoy?' },
      { label: 'Sentence', prompt: 'Make one easy sentence about today\'s topic.', es: 'Haz una oracion facil sobre el tema de hoy.' },
      { label: 'Question', prompt: 'Ask one simple question about today\'s topic.', es: 'Haz una pregunta simple sobre el tema de hoy.' },
      { label: 'Partner', prompt: 'Ask your partner: What about you?', es: 'Pregunta: What about you?' }
    ],
    teens: [
      { label: 'Idea', prompt: 'What do you already know about today\'s topic?', es: 'Que ya sabes del tema de hoy?' },
      { label: 'Example', prompt: 'Give one real example connected to today\'s topic.', es: 'Da un ejemplo real conectado al tema de hoy.' },
      { label: 'Opinion', prompt: 'What is your opinion about today\'s topic?', es: 'Cual es tu opinion sobre el tema de hoy?' },
      { label: 'Question', prompt: 'Ask one clear question to start a conversation.', es: 'Haz una pregunta clara para empezar conversacion.' },
      { label: 'Useful', prompt: 'How could this topic be useful outside class?', es: 'Como podria ser util este tema fuera de clase?' },
      { label: 'Challenge', prompt: 'What part of this topic looks challenging?', es: 'Que parte de este tema parece desafiante?' }
    ],
    adults: [
      { label: 'Context', prompt: 'Where could you use today\'s English in real life?', es: 'Donde podrias usar el ingles de hoy en la vida real?' },
      { label: 'Experience', prompt: 'Share one experience connected to today\'s topic.', es: 'Comparte una experiencia conectada al tema de hoy.' },
      { label: 'Need', prompt: 'What phrase from this topic is useful for you?', es: 'Que frase de este tema es util para ti?' },
      { label: 'Question', prompt: 'Ask one practical question about today\'s topic.', es: 'Haz una pregunta practica sobre el tema de hoy.' },
      { label: 'Example', prompt: 'Say one realistic example about today\'s topic.', es: 'Di un ejemplo realista sobre el tema de hoy.' },
      { label: 'Goal', prompt: 'What do you want to say better by the end of class?', es: 'Que quieres decir mejor al final de la clase?' }
    ]
  }
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
  if (/hello|greeting|introduc|saludos|despedidas/.test(normalized)) return 'greetings';
  if (/number|numero|birthday|cumpleanos|month|mes|date|fecha|age|edad|time|hora|dias|ordinales/.test(normalized)) return 'numbers';
  if (/family|familia|mother|madre|father|padre|sister|hermana|brother|hermano|posesivos/.test(normalized)) return 'family';
  if (/routine|rutina|wake up|daily|diaria|morning|manana|night|noche|habits?|habitos?/.test(normalized)) return 'routine';
  if (/food|comida|comidas|drink|bebida|bebidas|restaurant|restaurante|menu|bill|cuenta|meal|breakfast|lunch|dinner|snack|pedidos/.test(normalized)) return 'food';
  if (/email|correo|formal|report|informe|meeting|reunion|business|negocio|proposal|propuesta|client|cliente|negotiation|negociacion|leadership|liderazgo|teamwork|interview|entrevista/.test(normalized)) return 'business';
  if (/debate|opinion|agree|disagree|acuerdo|desacuerdo|critical thinking|pensamiento critico|argument/.test(normalized)) return 'business';
  if (/clothes|shirt|jacket|pants|wear|fashion|ropa|apariencia|style|estilo|colores|colors|descripciones fisicas/.test(normalized)) return 'clothes';
  if (/gadget|tech|tecnologia|technology|device|aparato|app|phone|celular|telefono|laptop|console|redes sociales/.test(normalized)) return 'gadgets';
  if (/school|escuela|classroom|salon|subject|materia|backpack|teacher|exam|supplies/.test(normalized)) return 'school';
  if (/\bpet\b|\bpets\b|\bmascota\b|\bmascotas\b|\banimal\b|\banimals\b|wild|salvaje|naturaleza|nature/.test(normalized)) return 'animals';
  if (/body|cuerpo|face|cara|hand|mano|leg|pierna|eye|ojo|ear|oreja|nose|nariz|health|salud|partes/.test(normalized)) return 'body';
  if (/direction|direcciones|city|ciudad|place|lugar|places|lugares|transporte|transport|turn left|go straight|museum|station|calle/.test(normalized)) return 'directions';
  if (/hobby|pasatiempo|sport|deporte|game|juego|music|musica|free time|tiempo libre|peliculas|series/.test(normalized)) return 'hobbies';
  if (/house|casa|room|cuarto|habitacion|kitchen|cocina|bathroom|bano|bedroom|living room|home/.test(normalized)) return 'house';
  if (/weather|clima|season|estacion|rain|lluvia|sunny|cloudy|winter|summer/.test(normalized)) return 'weather';
  if (/job|profession|profesion|profesiones|ocupacion|ocupaciones|doctor|teacher|worker|work|trabajo|oficina|office/.test(normalized)) return 'jobs';
  if (/future|futuro|going to|will|plan|planes|predicciones|tomorrow|next week/.test(normalized)) return 'future';
  if (/travel|viaje|trip|airport|aeropuerto|hotel|vacation|vacaciones/.test(normalized)) return 'travel';
  if (/feeling|sentimiento|emocion|emociones|happy|sad|tired|angry|nervous/.test(normalized)) return 'feelings';
  if (/holiday|christmas|birthday party|celebration|celebracion|tradicion|tradiciones|festivals?|festivales/.test(normalized)) return 'holidays';
  return 'generic';
}

function inferAudienceKey(cls: CurriculumClass): AudienceKey {
  const normalized = normalizeText([
    cls.id,
    cls.title,
    cls.description || '',
    cls.objective || '',
    ...cls.sections.flatMap((section) => [
      section.id,
      section.title,
      section.objective,
      section.action,
      ...section.slides.flatMap((slide) => [
        slide.id,
        slide.title,
        slide.description || '',
        ...(slide.content || [])
      ])
    ])
  ].join(' '));
  if (/\bkids?-|kids|kid|infantil|explorador|jugar|divirtiend|campeon|magic warm-up|ruleta magica/.test(normalized)) return 'kids';
  if (/teens|teen|adolescente/.test(normalized)) return 'teens';
  return 'adults';
}

function roleplayNamePlaceholders(audience: AudienceKey) {
  if (audience === 'kids') return { aNamePlaceholder: 'Teacher', bNamePlaceholder: 'Student' };
  if (audience === 'teens') return { aNamePlaceholder: 'Student A', bNamePlaceholder: 'Student B' };
  return { aNamePlaceholder: 'Teacher', bNamePlaceholder: 'Student' };
}

function buildGuidedRoleplaySteps(plan: RoleplayPlan, topic: TopicKey, audience: AudienceKey): NonNullable<RoleplayPlan['steps']> {
  const words = ROLEPLAY_TOPIC_WORDS[topic]?.[audience] || ROLEPLAY_TOPIC_WORDS.generic[audience];
  const phrases = uniqueItems([...plan.usefulPhrases, ...ROLEPLAY_SUPPORT_PHRASES[audience]]);
  const aRole = plan.roles.a.label;
  const bRole = plan.roles.b.label;
  const firstPhrase = phrases.slice(0, 3);
  const secondPhrase = rotate(phrases, 2, 3);
  const thirdPhrase = rotate(phrases, 4, 3);
  const finalPhrase = uniqueItems([...rotate(phrases, 1, 2), audience === 'kids' ? 'Thank you!' : 'Thanks, that helps.']).slice(0, 3);

  return [
    {
      id: 'step-1',
      speaker: 'a',
      title: `${aRole}: start`,
      instruction: audience === 'kids'
        ? `${aRole} says hello and starts with one easy sentence.`
        : `${aRole} opens the conversation and explains the situation in one clear sentence.`,
      phrases: firstPhrase,
      vocabulary: words.slice(0, 5)
    },
    {
      id: 'step-2',
      speaker: 'b',
      title: `${bRole}: answer`,
      instruction: audience === 'kids'
        ? `${bRole} answers and asks one easy question.`
        : `${bRole} responds, asks one useful question, and keeps the conversation moving.`,
      phrases: secondPhrase,
      vocabulary: rotate(words, 1, 5)
    },
    {
      id: 'step-3',
      speaker: 'a',
      title: `${aRole}: add detail`,
      instruction: plan.mission[1] || (audience === 'kids' ? 'Say one more idea with a class word.' : 'Add one detail and use one useful phrase.'),
      phrases: thirdPhrase,
      vocabulary: rotate(words, 2, 5)
    },
    {
      id: 'step-4',
      speaker: 'both',
      title: 'Finish together',
      instruction: plan.mission[2] || (audience === 'kids' ? 'Both players finish politely.' : 'Both players close the conversation with a clear final line.'),
      phrases: finalPhrase,
      vocabulary: rotate(words, 3, 5)
    }
  ];
}

function enrichRoleplayPlan(plan: RoleplayPlan, topic: TopicKey, audience: AudienceKey): RoleplayPlan {
  const successChecklist = audience === 'kids'
    ? ['Both players spoke', 'Used 2 class words', 'Asked 1 question', 'Finished politely']
    : ['Both roles are clear', 'Used 2 useful phrases', 'Asked 1 follow-up question', 'Closed naturally'];

  return {
    ...plan,
    players: roleplayNamePlaceholders(audience),
    mission: plan.mission.slice(0, 3),
    usefulPhrases: uniqueItems([
      ...plan.usefulPhrases,
      ...ROLEPLAY_QUESTION_PROMPTS[topic][audience],
      ...ROLEPLAY_SUPPORT_PHRASES[audience]
    ]).slice(0, 8),
    successChecklist,
    steps: buildGuidedRoleplaySteps(
      {
        ...plan,
        usefulPhrases: uniqueItems([
          ...plan.usefulPhrases,
          ...ROLEPLAY_QUESTION_PROMPTS[topic][audience],
          ...ROLEPLAY_SUPPORT_PHRASES[audience]
        ])
      },
      topic,
      audience
    ),
    victoryMessage: audience === 'kids'
      ? 'Mini conversation complete!'
      : 'Conversation complete. Switch roles and try it again.'
  };
}

function buildRoleplayPlan(topic: TopicKey, audience: AudienceKey, cls: CurriculumClass): RoleplayPlan {
  const topicLabel = cls.title.split('/')[0].trim();
  const genericChecklist =
    audience === 'kids'
      ? ['Took both turns', 'Used the key words', 'Finished the mini conversation']
      : ['Used the target language', 'Asked and answered clearly', 'Finished the conversation naturally'];

  const libraries: Record<TopicKey, Record<AudienceKey, RoleplayPlan>> = {
    greetings: {
      kids: {
        scenario: 'New friend at school',
        situation: 'Meet a new classmate and say hello in a friendly way.',
        roles: {
          a: { label: 'New student', goal: 'Say your name and greet your partner.' },
          b: { label: 'Classmate', goal: 'Greet your partner and ask one easy question.' }
        },
        mission: ['Say hello.', 'Say your name.', 'Ask “How are you?” and answer.'],
        usefulPhrases: ['Hello!', 'My name is ...', 'How are you?', 'I am fine.'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'First day introduction',
        situation: 'Meet someone in class and start a short conversation.',
        roles: {
          a: { label: 'Student A', goal: 'Introduce yourself clearly.' },
          b: { label: 'Student B', goal: 'Respond, ask a follow-up, and close politely.' }
        },
        mission: ['Greet each other.', 'Introduce yourselves.', 'End with a natural goodbye.'],
        usefulPhrases: ['Hi, I’m ...', 'Nice to meet you.', 'How are you?', 'See you later.'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Meeting a colleague',
        situation: 'Greet a colleague in a professional but natural way.',
        roles: {
          a: { label: 'Colleague A', goal: 'Start the conversation politely.' },
          b: { label: 'Colleague B', goal: 'Respond and keep the conversation moving.' }
        },
        mission: ['Greet formally or semi-formally.', 'Ask how the other person is.', 'Close the interaction politely.'],
        usefulPhrases: ['Good morning.', 'How are you today?', 'Nice to meet you.', 'Have a good day.'],
        successChecklist: genericChecklist
      }
    },
    numbers: {
      kids: {
        scenario: 'Birthday chat',
        situation: 'Ask about age and birthday numbers.',
        roles: {
          a: { label: 'Birthday helper', goal: 'Ask about age and favorite number.' },
          b: { label: 'Birthday star', goal: 'Answer with numbers clearly.' }
        },
        mission: ['Ask age.', 'Say one favorite number.', 'Say one birthday number.'],
        usefulPhrases: ['How old are you?', 'I am ...', 'My favorite number is ...'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Profile facts',
        situation: 'Share age, date, and one personal number fact.',
        roles: {
          a: { label: 'Interviewer', goal: 'Ask about age and dates.' },
          b: { label: 'Student', goal: 'Answer with complete sentences.' }
        },
        mission: ['Ask two number questions.', 'Answer with age or date.', 'Add one extra detail.'],
        usefulPhrases: ['How old are you?', 'When is your birthday?', 'It is on ...'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Basic registration',
        situation: 'Exchange simple personal details with numbers and dates.',
        roles: {
          a: { label: 'Receptionist', goal: 'Ask for age, date, or contact detail.' },
          b: { label: 'Visitor', goal: 'Give the information clearly.' }
        },
        mission: ['Ask for one date.', 'Ask for one number detail.', 'Confirm the information.'],
        usefulPhrases: ['What is your date of birth?', 'My number is ...', 'Let me confirm that.'],
        successChecklist: genericChecklist
      }
    },
    family: {
      kids: {
        scenario: 'Show your family',
        situation: 'Talk about family members and who they are.',
        roles: {
          a: { label: 'Family presenter', goal: 'Name two people in your family.' },
          b: { label: 'Curious friend', goal: 'Ask who they are and react.' }
        },
        mission: ['Name two family members.', 'Say who is older or younger.', 'Ask one family question.'],
        usefulPhrases: ['This is my ...', 'He is my ...', 'She is my ...'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Family and friends',
        situation: 'Describe people close to you and ask about your partner’s family.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one family member or close friend.' },
          b: { label: 'Student B', goal: 'Ask follow-up questions and compare.' }
        },
        mission: ['Describe one person.', 'Ask one question back.', 'Add one feeling or opinion.'],
        usefulPhrases: ['In my family ...', 'She is very ...', 'What about your ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Family conversation',
        situation: 'Talk about your family and daily relationships.',
        roles: {
          a: { label: 'Speaker A', goal: 'Describe one family member and your relationship.' },
          b: { label: 'Speaker B', goal: 'Ask questions and respond with your own example.' }
        },
        mission: ['Mention two family members.', 'Ask one follow-up question.', 'Respond with one personal detail.'],
        usefulPhrases: ['I live with ...', 'My ... is very ...', 'What about your family?'],
        successChecklist: genericChecklist
      }
    },
    routine: {
      kids: {
        scenario: 'My day',
        situation: 'Talk about what you do in the morning and at night.',
        roles: {
          a: { label: 'Morning kid', goal: 'Say your first action of the day.' },
          b: { label: 'Night kid', goal: 'Say what you do later and ask one question.' }
        },
        mission: ['Say two routine actions.', 'Ask what your partner does.', 'Answer in a full sentence.'],
        usefulPhrases: ['I wake up at ...', 'I brush my teeth.', 'What do you do ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'School day routine',
        situation: 'Compare what you usually do before, during, and after school.',
        roles: {
          a: { label: 'Student A', goal: 'Describe your routine clearly.' },
          b: { label: 'Student B', goal: 'Ask and compare routines.' }
        },
        mission: ['Use three routine verbs.', 'Ask one routine question.', 'Say one difference.'],
        usefulPhrases: ['I usually ...', 'After school I ...', 'Do you usually ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Typical day',
        situation: 'Talk about your normal workday or home routine.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain your typical day in order.' },
          b: { label: 'Speaker B', goal: 'Ask for one more detail and answer too.' }
        },
        mission: ['Describe morning, afternoon, and evening.', 'Ask one frequency question.', 'Respond with one comparison.'],
        usefulPhrases: ['I usually start by ...', 'Then I ...', 'How often do you ...?'],
        successChecklist: genericChecklist
      }
    },
    food: {
      kids: {
        scenario: 'Snack shop',
        situation: 'Buy a snack and a drink using polite words.',
        roles: {
          a: { label: 'Shop helper', goal: 'Ask what the customer wants.' },
          b: { label: 'Hungry customer', goal: 'Order one food and one drink.' }
        },
        mission: ['Order one food.', 'Order one drink.', 'Say thank you.'],
        usefulPhrases: ['Can I have ...?', 'I want ...', 'Thank you!'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'At the restaurant',
        situation: 'Order food politely and keep the conversation natural.',
        roles: {
          a: { label: 'Waiter', goal: 'Welcome the customer and take the order.' },
          b: { label: 'Customer', goal: 'Order food, a drink, and ask for the bill.' }
        },
        mission: ['Use one greeting.', 'Make two polite requests.', 'End by asking for the bill.'],
        usefulPhrases: ['Can I have ...?', 'I’d like ...', 'Could I get the bill, please?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Restaurant service',
        situation: 'Place an order politely and solve one small detail during the meal.',
        roles: {
          a: { label: 'Waiter', goal: 'Guide the order and respond professionally.' },
          b: { label: 'Customer', goal: 'Order clearly and ask one follow-up question.' }
        },
        mission: ['Order food and a drink.', 'Ask one question about the menu.', 'Ask for the bill politely.'],
        usefulPhrases: ['I’d like ...', 'What do you recommend?', 'Could we have the bill, please?'],
        successChecklist: genericChecklist
      }
    },
    clothes: {
      kids: {
        scenario: 'Getting dressed',
        situation: 'Choose clothes for the weather.',
        roles: {
          a: { label: 'Helper', goal: 'Suggest clothes.' },
          b: { label: 'Friend', goal: 'Choose what to wear and explain why.' }
        },
        mission: ['Name two clothes.', 'Match them with the weather.', 'Ask one question.'],
        usefulPhrases: ['I wear ...', 'It is cold.', 'Do you like this ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Style talk',
        situation: 'Describe an outfit and react to your partner’s style.',
        roles: {
          a: { label: 'Student A', goal: 'Describe what you are wearing or want to wear.' },
          b: { label: 'Student B', goal: 'Ask questions and give a short opinion.' }
        },
        mission: ['Describe one outfit.', 'Ask one style question.', 'Give one opinion.'],
        usefulPhrases: ['I’m wearing ...', 'Do you like ...?', 'It looks great.'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Shopping for clothes',
        situation: 'Ask about clothes, size, and preferences in a store.',
        roles: {
          a: { label: 'Shop assistant', goal: 'Offer help and suggest options.' },
          b: { label: 'Customer', goal: 'Ask about size, color, or style.' }
        },
        mission: ['Ask about one item.', 'Mention size or color.', 'Respond to a suggestion.'],
        usefulPhrases: ['I’m looking for ...', 'Do you have this in ...?', 'I prefer ...'],
        successChecklist: genericChecklist
      }
    },
    gadgets: {
      kids: {
        scenario: 'Favorite gadget',
        situation: 'Talk about a device you like and what it does.',
        roles: {
          a: { label: 'Device fan', goal: 'Name your favorite gadget.' },
          b: { label: 'Question friend', goal: 'Ask what it is for.' }
        },
        mission: ['Name one gadget.', 'Say what you do with it.', 'Ask one simple question.'],
        usefulPhrases: ['I use my ...', 'It is for ...', 'Do you like ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Tech comparison',
        situation: 'Compare apps, phones, or devices you use every day.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one device or app you use a lot.' },
          b: { label: 'Student B', goal: 'Ask questions and compare with your own choice.' }
        },
        mission: ['Mention one device.', 'Say what it helps you do.', 'Compare it with another option.'],
        usefulPhrases: ['I use ... every day.', 'It helps me ...', 'I prefer ... because ...'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Work and technology',
        situation: 'Talk about a tool, app, or device that helps you work or study.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain what tool you use and why.' },
          b: { label: 'Speaker B', goal: 'Ask one problem-solving question and respond.' }
        },
        mission: ['Name one tool.', 'Explain one benefit.', 'Ask one follow-up about use or problem.'],
        usefulPhrases: ['I usually use ...', 'It helps me ...', 'What do you use it for?'],
        successChecklist: genericChecklist
      }
    },
    school: {
      kids: {
        scenario: 'In the classroom',
        situation: 'Ask for school objects and talk about class.',
        roles: {
          a: { label: 'Teacher helper', goal: 'Ask for or show a school object.' },
          b: { label: 'Student', goal: 'Answer and ask for another object.' }
        },
        mission: ['Use two classroom words.', 'Ask for one object.', 'Say thank you.'],
        usefulPhrases: ['This is my ...', 'Can I have ...?', 'Here you are.'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'School conversation',
        situation: 'Talk about subjects, materials, and what happens in class.',
        roles: {
          a: { label: 'Student A', goal: 'Talk about one subject or class activity.' },
          b: { label: 'Student B', goal: 'Ask questions and add your own opinion.' }
        },
        mission: ['Mention one subject.', 'Use one classroom object word.', 'Ask one opinion question.'],
        usefulPhrases: ['My favorite subject is ...', 'We use ... in class.', 'Do you like ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Study goals',
        situation: 'Talk about studying, classes, and what helps you learn.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain one study habit or challenge.' },
          b: { label: 'Speaker B', goal: 'Ask for clarification and suggest an idea.' }
        },
        mission: ['Describe one study routine.', 'Mention one classroom or learning tool.', 'Respond with a suggestion.'],
        usefulPhrases: ['I study by ...', 'I need to improve ...', 'You could try ...'],
        successChecklist: genericChecklist
      }
    },
    animals: {
      kids: {
        scenario: 'Pet talk',
        situation: 'Talk about favorite animals or pets.',
        roles: {
          a: { label: 'Animal fan', goal: 'Describe your favorite animal.' },
          b: { label: 'Question friend', goal: 'Ask where it lives or what it does.' }
        },
        mission: ['Name one animal.', 'Say one action.', 'Ask one animal question.'],
        usefulPhrases: ['My favorite animal is ...', 'It can ...', 'Where does it live?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Animals and pets',
        situation: 'Talk about pets, wild animals, or why you like them.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one animal and give a reason.' },
          b: { label: 'Student B', goal: 'Ask questions and compare preferences.' }
        },
        mission: ['Describe one animal.', 'Ask one follow-up question.', 'Give one opinion.'],
        usefulPhrases: ['I like ... because ...', 'It lives in ...', 'Do you prefer ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Animals in daily life',
        situation: 'Talk about pets, nature, or animals people interact with.',
        roles: {
          a: { label: 'Speaker A', goal: 'Share one experience or opinion.' },
          b: { label: 'Speaker B', goal: 'Ask and respond with your own example.' }
        },
        mission: ['Mention one animal.', 'Explain one reason or experience.', 'Ask one question back.'],
        usefulPhrases: ['I’ve had ...', 'I think ...', 'What about you?'],
        successChecklist: genericChecklist
      }
    },
    body: {
      kids: {
        scenario: 'Move and say',
        situation: 'Use body words and actions in a mini conversation.',
        roles: {
          a: { label: 'Leader', goal: 'Say an action and body part.' },
          b: { label: 'Partner', goal: 'Answer and say another one.' }
        },
        mission: ['Use two body words.', 'Use one action verb.', 'Ask your partner to do one action.'],
        usefulPhrases: ['Touch your ...', 'I can move my ...', 'Can you ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Sports and actions',
        situation: 'Talk about body parts, movement, or physical actions.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one action or ability.' },
          b: { label: 'Student B', goal: 'Ask one question and react.' }
        },
        mission: ['Use two body or action words.', 'Ask one can/can’t question.', 'Answer fully.'],
        usefulPhrases: ['I can ...', 'You use your ... to ...', 'Can you ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Health and action',
        situation: 'Describe an action, a body part, or a simple health situation.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain the action or problem.' },
          b: { label: 'Speaker B', goal: 'Ask and respond with useful language.' }
        },
        mission: ['Describe one body part or action.', 'Ask one clarifying question.', 'Give one short response or advice.'],
        usefulPhrases: ['I use my ... to ...', 'My ... hurts.', 'Can you show me?'],
        successChecklist: genericChecklist
      }
    },
    directions: {
      kids: {
        scenario: 'Find the place',
        situation: 'Help a friend get to a place.',
        roles: {
          a: { label: 'Lost friend', goal: 'Ask where to go.' },
          b: { label: 'Helper', goal: 'Give simple directions.' }
        },
        mission: ['Ask for help.', 'Use left/right/go straight.', 'Say thank you.'],
        usefulPhrases: ['Where is ...?', 'Go straight.', 'Turn left/right.'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Lost tourist',
        situation: 'Ask for and give directions in town.',
        roles: {
          a: { label: 'Tourist', goal: 'Ask for directions clearly.' },
          b: { label: 'Local person', goal: 'Give two or three clear steps.' }
        },
        mission: ['Ask how to get somewhere.', 'Use at least two direction phrases.', 'Check understanding at the end.'],
        usefulPhrases: ['How do I get to ...?', 'Go straight.', 'Turn left at ...'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'City directions',
        situation: 'Help someone reach a place using clear instructions.',
        roles: {
          a: { label: 'Visitor', goal: 'Explain where you need to go.' },
          b: { label: 'Local resident', goal: 'Give precise and polite directions.' }
        },
        mission: ['Ask for a place.', 'Give three clear direction steps.', 'Confirm the final destination.'],
        usefulPhrases: ['Excuse me, how can I get to ...?', 'It’s next to ...', 'You can’t miss it.'],
        successChecklist: genericChecklist
      }
    },
    hobbies: {
      kids: {
        scenario: 'Fun time',
        situation: 'Talk about games, sports, or activities you like.',
        roles: {
          a: { label: 'Activity fan', goal: 'Say what you like doing.' },
          b: { label: 'Friend', goal: 'Ask one question and say your hobby too.' }
        },
        mission: ['Name one hobby.', 'Say if you like or love it.', 'Ask your partner too.'],
        usefulPhrases: ['I like ...', 'My favorite hobby is ...', 'Do you like ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Free time plans',
        situation: 'Talk about hobbies, sports, and what you enjoy doing.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one hobby and why you like it.' },
          b: { label: 'Student B', goal: 'Ask and compare with your own free time.' }
        },
        mission: ['Mention one hobby.', 'Give one reason.', 'Ask one comparison question.'],
        usefulPhrases: ['I’m into ...', 'I enjoy ... because ...', 'What do you do in your free time?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Weekend interests',
        situation: 'Talk about hobbies and how you spend your free time.',
        roles: {
          a: { label: 'Speaker A', goal: 'Describe one regular hobby.' },
          b: { label: 'Speaker B', goal: 'Ask about frequency and join in with your own example.' }
        },
        mission: ['Describe one hobby.', 'Ask one how often question.', 'Respond with one personal habit.'],
        usefulPhrases: ['I usually ... in my free time.', 'How often do you ...?', 'On weekends I ...'],
        successChecklist: genericChecklist
      }
    },
    house: {
      kids: {
        scenario: 'At home',
        situation: 'Talk about rooms and what you do there.',
        roles: {
          a: { label: 'Home guide', goal: 'Name rooms in the house.' },
          b: { label: 'Visitor', goal: 'Ask what people do in each room.' }
        },
        mission: ['Name two rooms.', 'Say one action in a room.', 'Ask one room question.'],
        usefulPhrases: ['This is the ...', 'I sleep in the ...', 'What is in the ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'My room or house',
        situation: 'Describe your room, your house, or your dream home.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one room and what is there.' },
          b: { label: 'Student B', goal: 'Ask questions and compare with your own home.' }
        },
        mission: ['Describe one room.', 'Use one there is/there are idea if possible.', 'Ask one follow-up question.'],
        usefulPhrases: ['In my room there is ...', 'I have ...', 'What about your house?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Home conversation',
        situation: 'Describe your home and what happens in different rooms.',
        roles: {
          a: { label: 'Speaker A', goal: 'Describe one part of your home.' },
          b: { label: 'Speaker B', goal: 'Ask for more detail and respond.' }
        },
        mission: ['Mention two rooms or objects.', 'Explain one use.', 'Ask one follow-up.'],
        usefulPhrases: ['The room I use most is ...', 'There is ...', 'We usually ... there.'],
        successChecklist: genericChecklist
      }
    },
    weather: {
      kids: {
        scenario: 'Weather and clothes',
        situation: 'Talk about the weather and what to wear.',
        roles: {
          a: { label: 'Weather reporter', goal: 'Say what the weather is like.' },
          b: { label: 'Clothes helper', goal: 'Say what to wear.' }
        },
        mission: ['Say the weather.', 'Choose one clothing item.', 'Ask one easy question.'],
        usefulPhrases: ['It is sunny.', 'Wear a ...', 'Do you like rainy days?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Today’s weather',
        situation: 'Describe the weather and talk about plans or clothes.',
        roles: {
          a: { label: 'Student A', goal: 'Describe the weather and one plan.' },
          b: { label: 'Student B', goal: 'React and say what to wear or do.' }
        },
        mission: ['Describe the weather.', 'Add one plan or opinion.', 'Ask one weather question.'],
        usefulPhrases: ['It’s ... today.', 'I would wear ...', 'What do you do when ...?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Weather and daily plans',
        situation: 'Talk about the weather and how it affects your day.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain today’s weather and one effect.' },
          b: { label: 'Speaker B', goal: 'Ask one question and respond with your own example.' }
        },
        mission: ['Describe the weather.', 'Say what you wear or do.', 'Ask one follow-up question.'],
        usefulPhrases: ['It looks ... today.', 'Because of the weather, I ...', 'Do you usually ... when ...?'],
        successChecklist: genericChecklist
      }
    },
    jobs: {
      kids: {
        scenario: 'Jobs and places',
        situation: 'Talk about who works where.',
        roles: {
          a: { label: 'Guessing friend', goal: 'Ask about a job.' },
          b: { label: 'Job helper', goal: 'Say the job and place.' }
        },
        mission: ['Name one job.', 'Say where that person works.', 'Ask one question back.'],
        usefulPhrases: ['A doctor works in ...', 'A teacher works at ...', 'What does a ... do?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Future job talk',
        situation: 'Talk about jobs, workplaces, and interests.',
        roles: {
          a: { label: 'Student A', goal: 'Say what job sounds interesting.' },
          b: { label: 'Student B', goal: 'Ask why and compare with your own idea.' }
        },
        mission: ['Mention one job.', 'Give one reason.', 'Ask one follow-up question.'],
        usefulPhrases: ['I’d like to be ...', 'It works in/at ...', 'Why do you like that job?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Work roles',
        situation: 'Discuss jobs, responsibilities, or career interests.',
        roles: {
          a: { label: 'Speaker A', goal: 'Describe one job or role.' },
          b: { label: 'Speaker B', goal: 'Ask about responsibilities and respond.' }
        },
        mission: ['Describe one job.', 'Mention one responsibility.', 'Ask one clarifying question.'],
        usefulPhrases: ['My job is ...', 'I’m responsible for ...', 'What does that involve?'],
        successChecklist: genericChecklist
      }
    },
    future: {
      kids: {
        scenario: 'Tomorrow plan',
        situation: 'Say what you are going to do tomorrow.',
        roles: {
          a: { label: 'Planner', goal: 'Say one future plan.' },
          b: { label: 'Friend', goal: 'Ask one question and share your plan too.' }
        },
        mission: ['Say one future plan.', 'Ask one future question.', 'Answer in a full sentence.'],
        usefulPhrases: ['I am going to ...', 'Tomorrow I will ...', 'What are you going to do?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Weekend or future plans',
        situation: 'Talk about future intentions, predictions, or plans.',
        roles: {
          a: { label: 'Student A', goal: 'Share one future plan or prediction.' },
          b: { label: 'Student B', goal: 'Ask about it and add your own future idea.' }
        },
        mission: ['Use going to or will.', 'Ask one future question.', 'Respond with one extra detail.'],
        usefulPhrases: ['I’m going to ...', 'I think I will ...', 'What are you going to do?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Plans and predictions',
        situation: 'Discuss future arrangements, goals, or likely outcomes.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain one plan or prediction.' },
          b: { label: 'Speaker B', goal: 'Ask for detail and respond with your own view.' }
        },
        mission: ['Use one future structure.', 'Ask one follow-up question.', 'End with a realistic next step.'],
        usefulPhrases: ['I’m planning to ...', 'I think ... will ...', 'What do you expect to happen?'],
        successChecklist: genericChecklist
      }
    },
    travel: {
      kids: {
        scenario: 'Trip time',
        situation: 'Talk about where you want to go and what you take.',
        roles: {
          a: { label: 'Traveler', goal: 'Say where you want to go.' },
          b: { label: 'Travel friend', goal: 'Ask what to pack or how to travel.' }
        },
        mission: ['Say one place.', 'Name one travel item.', 'Ask one simple question.'],
        usefulPhrases: ['I want to go to ...', 'I take my ...', 'How do you go?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Travel plan',
        situation: 'Plan a trip and discuss transport, destination, or packing.',
        roles: {
          a: { label: 'Student A', goal: 'Suggest a destination or trip plan.' },
          b: { label: 'Student B', goal: 'Ask questions and help complete the plan.' }
        },
        mission: ['Mention a destination.', 'Mention transport or packing.', 'Ask one practical question.'],
        usefulPhrases: ['Let’s go to ...', 'We can travel by ...', 'What should we pack?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Travel situation',
        situation: 'Discuss a trip, booking, or travel plan clearly and naturally.',
        roles: {
          a: { label: 'Traveler', goal: 'Explain a destination or travel need.' },
          b: { label: 'Agent or partner', goal: 'Ask practical questions and respond.' }
        },
        mission: ['Describe the trip.', 'Ask or answer one practical detail.', 'Reach a simple plan.'],
        usefulPhrases: ['I’m planning a trip to ...', 'When are you leaving?', 'We should book ...'],
        successChecklist: genericChecklist
      }
    },
    feelings: {
      kids: {
        scenario: 'How do you feel?',
        situation: 'Talk about feelings and what causes them.',
        roles: {
          a: { label: 'Speaker', goal: 'Say how you feel.' },
          b: { label: 'Friend', goal: 'Ask why and react kindly.' }
        },
        mission: ['Say one feeling.', 'Say why.', 'Ask your partner too.'],
        usefulPhrases: ['I feel ...', 'Because ...', 'How do you feel?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Mood check',
        situation: 'Talk about your mood and what affects it.',
        roles: {
          a: { label: 'Student A', goal: 'Describe your mood with one reason.' },
          b: { label: 'Student B', goal: 'Ask a question and react supportively.' }
        },
        mission: ['Say one feeling.', 'Give one reason.', 'Ask one follow-up question.'],
        usefulPhrases: ['I feel ... because ...', 'That makes sense.', 'What helps you?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Feelings and situations',
        situation: 'Talk about how you feel in everyday situations.',
        roles: {
          a: { label: 'Speaker A', goal: 'Describe a feeling and context.' },
          b: { label: 'Speaker B', goal: 'Ask and respond with a similar or different example.' }
        },
        mission: ['Describe one feeling.', 'Mention one situation.', 'Ask one reflective question.'],
        usefulPhrases: ['I feel ... when ...', 'That happens to me too.', 'How do you usually handle it?'],
        successChecklist: genericChecklist
      }
    },
    holidays: {
      kids: {
        scenario: 'Special day',
        situation: 'Talk about birthdays or holidays and what you do.',
        roles: {
          a: { label: 'Celebration friend', goal: 'Describe one holiday or birthday activity.' },
          b: { label: 'Question friend', goal: 'Ask what food or people are there.' }
        },
        mission: ['Say one celebration.', 'Say one activity.', 'Ask one easy question.'],
        usefulPhrases: ['On my birthday I ...', 'We celebrate with ...', 'Do you like ...?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Holiday plans',
        situation: 'Talk about traditions, birthdays, or festivals.',
        roles: {
          a: { label: 'Student A', goal: 'Describe one holiday tradition.' },
          b: { label: 'Student B', goal: 'Ask about it and compare with your own.' }
        },
        mission: ['Name one celebration.', 'Describe one tradition.', 'Ask one question back.'],
        usefulPhrases: ['We usually ...', 'On this day ...', 'What do you do?'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Celebrations and traditions',
        situation: 'Discuss a holiday, celebration, or custom in a clear way.',
        roles: {
          a: { label: 'Speaker A', goal: 'Explain one tradition or celebration.' },
          b: { label: 'Speaker B', goal: 'Ask about meaning, people, or activities.' }
        },
        mission: ['Describe one celebration.', 'Mention one tradition.', 'Ask one cultural or personal question.'],
        usefulPhrases: ['We celebrate ... by ...', 'It is important because ...', 'Do you usually ...?'],
        successChecklist: genericChecklist
      }
    },
    business: {
      kids: {
        scenario: 'Project teamwork',
        situation: 'Work together politely on a simple class task.',
        roles: {
          a: { label: 'Team member A', goal: 'Start the task and ask for help.' },
          b: { label: 'Team member B', goal: 'Answer and suggest the next step.' }
        },
        mission: ['Ask for help politely.', 'Give one idea.', 'Finish with a simple plan.'],
        usefulPhrases: ['Can you help me?', 'Let’s do ...', 'Okay, great!'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: 'Formal message or teamwork',
        situation: 'Use more professional English for school, projects, or future work.',
        roles: {
          a: { label: 'Student A', goal: 'Ask for information or make a request.' },
          b: { label: 'Student B', goal: 'Respond clearly and politely.' }
        },
        mission: ['Make one formal request.', 'Give one clear response.', 'Close politely.'],
        usefulPhrases: ['Could you ...?', 'I’m writing to ...', 'Thank you for your time.'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: 'Professional communication',
        situation: 'Handle a work or business situation using clear professional English.',
        roles: {
          a: { label: 'Client or colleague', goal: 'State a need, problem, or request.' },
          b: { label: 'Professional contact', goal: 'Respond clearly and propose the next step.' }
        },
        mission: ['State the situation clearly.', 'Ask or answer one professional question.', 'Close with a next step.'],
        usefulPhrases: ['I’m contacting you about ...', 'Could you clarify ...?', 'Let’s move forward with ...'],
        successChecklist: genericChecklist
      }
    },
    generic: {
      kids: {
        scenario: topicLabel,
        situation: 'Use the key words from class in a short conversation.',
        roles: {
          a: { label: 'Speaker A', goal: 'Start with one easy sentence.' },
          b: { label: 'Speaker B', goal: 'Answer and ask one simple question.' }
        },
        mission: ['Use two key words.', 'Ask one question.', 'Finish the mini talk.'],
        usefulPhrases: ['I like ...', 'Can you ...?', 'What about you?'],
        successChecklist: genericChecklist
      },
      teens: {
        scenario: topicLabel,
        situation: 'Create a short conversation connected to today’s topic.',
        roles: {
          a: { label: 'Student A', goal: 'Start the conversation with one clear idea.' },
          b: { label: 'Student B', goal: 'Respond and keep it going naturally.' }
        },
        mission: ['Use two key ideas from class.', 'Ask one follow-up question.', 'Close the conversation naturally.'],
        usefulPhrases: ['I think ...', 'What about ...?', 'That makes sense.'],
        successChecklist: genericChecklist
      },
      adults: {
        scenario: topicLabel,
        situation: 'Use today’s language in a realistic short interaction.',
        roles: {
          a: { label: 'Speaker A', goal: 'Start with a clear purpose.' },
          b: { label: 'Speaker B', goal: 'Respond, ask, and help complete the interaction.' }
        },
        mission: ['Use two target expressions.', 'Ask one meaningful question.', 'Finish with a clear outcome.'],
        usefulPhrases: ['Could you ...?', 'I’d like to ...', 'What do you think?'],
        successChecklist: genericChecklist
      }
    }
  };

  const plan = libraries[topic][audience];
  return enrichRoleplayPlan(plan, topic, audience);
}

function enhanceRoleplaySlide(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.type !== 'roleplay' && !/role play|roleplay|juego de roles/.test(normalizeText(`${slide.title} ${slide.description || ''}`))) {
    return slide;
  }

  const topic = inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''} ${slide.title} ${slide.description || ''} ${(slide.content || []).join(' ')}`);
  const audience = inferAudienceKey(cls);
  const roleplay = buildRoleplayPlan(topic, audience, cls);

  return {
    ...slide,
    type: 'roleplay' as const,
    title: `Role Play: ${roleplay.scenario} / Role Play: ${roleplay.scenario}`,
    description: audience === 'kids' ? 'Act, ask, answer, and switch.' : 'Take the roles, follow the mission, and use the target language.',
    content: [],
    roleplay
  };
}

function ensureRoleplaySlide(cls: CurriculumClass): CurriculumClass {
  const hasRoleplay = cls.sections.some((section) => section.slides.some((slide) => (
    slide.type === 'roleplay' || /role play|roleplay|juego de roles/.test(normalizeText(`${slide.title} ${slide.description || ''}`))
  )));
  if (hasRoleplay) return cls;

  const productionIndex = cls.sections.findIndex((section) => /production|produccion|quiz/i.test(section.title));
  const targetIndex = productionIndex >= 0 ? productionIndex : Math.min(3, cls.sections.length - 1);
  const topic = inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''}`);
  const audience = inferAudienceKey(cls);
  const roleplay = buildRoleplayPlan(topic, audience, cls);
  const slide: ClassSlide = {
    id: `${cls.id}-guided-roleplay`,
    title: `Role Play Quest: ${roleplay.scenario} / Mision Role Play`,
    description: audience === 'kids' ? 'Choose names, follow the steps, and finish the mini conversation.' : 'Set the players, follow the turns, and complete the conversation.',
    type: 'roleplay',
    bgColor: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    content: [],
    roleplay
  };

  return {
    ...cls,
    sections: cls.sections.map((section, index) => (
      index === targetIndex
        ? { ...section, slides: [...section.slides, slide] }
        : section
    ))
  };
}

function buildWarmupWheel(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.type !== 'spinning-wheel') return slide;

  const classText = `${cls.title} ${cls.description || ''} ${cls.objective || ''}`;
  const searchText = `${classText} ${slide.title} ${slide.description || ''} ${(slide.content || []).join(' ')}`;
  const topic = inferTopicKey(searchText);
  const audience = inferAudienceKey(cls);
  const topicLabel = topicNounForBoss(topic, cls);
  const seed = hashString(`${cls.id}-${slide.id}-${topic}-${audience}`);
  const baseItems = rotate(WARMUP_WHEEL_BANK[topic]?.[audience] || WARMUP_WHEEL_BANK.generic[audience], seed, 6);
  const items = uniqueWarmupItems([
    ...baseItems,
    {
      label: audience === 'kids' ? 'Class Words' : 'Class Topic',
      prompt: audience === 'kids'
        ? `Say three easy words about ${topicLabel}.`
        : `Ask one easy warm-up question about ${topicLabel}.`,
      es: audience === 'kids'
        ? `Di tres palabras faciles sobre ${topicLabel}.`
        : `Haz una pregunta facil para calentar sobre ${topicLabel}.`
    }
  ]);

  return {
    ...slide,
    title: 'Warm-up Speaking Wheel / Ruleta de speaking',
    description: audience === 'kids'
      ? 'Spin, answer with a short sentence, and ask a partner.'
      : 'Spin, answer clearly, and ask one follow-up question.',
    wheelItems: items.map((item, index) => ({
      label: item.label.slice(0, 14) || `Prompt ${index + 1}`,
      color: WHEEL_COLORS[index % WHEEL_COLORS.length],
      prompt: item.prompt,
      es: item.es
    })),
    content: audience === 'kids'
      ? ['Spin the wheel.', 'Answer with one short complete sentence.', 'Ask your partner one easy question.']
      : ['Spin the wheel.', 'Answer with one complete idea connected to today\'s class.', 'Ask one natural follow-up question.']
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

type BossBattlePlan = NonNullable<ClassSlide['speakingBossBattle']>;

function inferStructureFocus(text: string) {
  const normalized = normalizeText(text);
  const rules: Array<{ label: string; pattern: RegExp; example: string; isExplicit?: boolean }> = [
    { label: 'present perfect continuous', pattern: /present perfect continuous|presente perfecto continuo|have been|has been/, example: 'I have been practicing for two weeks.', isExplicit: true },
    { label: 'present perfect', pattern: /present perfect|presente perfecto|life experiences|experiencias de vida|have you ever|has .* ever|have .* never|has .* never|already|yet/, example: 'I have tried something new.', isExplicit: true },
    { label: 'past continuous', pattern: /past continuous|pasado continuo|was .*ing|were .*ing/, example: 'I was studying when it happened.', isExplicit: true },
    { label: 'present continuous', pattern: /present continuous|present progressive|presente continuo|right now|ahora mismo/, example: 'She is wearing a jacket today.', isExplicit: true },
    { label: 'past simple', pattern: /past simple|pasado simple|regular verbs|irregular verbs|biograf|anecdotas|recuerdos|past decisions?/, example: 'I visited a new place last year.', isExplicit: true },
    { label: 'past to be', pattern: /past.*to be|was\/were|was were|was and were/, example: 'I was at home yesterday.', isExplicit: true },
    { label: 'future with going to', pattern: /going to|future plans?|planes futuros|future goals?/, example: 'I am going to start a new goal.', isExplicit: true },
    { label: 'future with will', pattern: /will|future predictions?|predictions?|predicciones|promises?/, example: 'I will explain my idea clearly.', isExplicit: true },
    { label: 'modals of obligation', pattern: /must|have to|obligation|obligacion|rules|reglas/, example: 'We have to follow the rule.', isExplicit: true },
    { label: 'modals for advice', pattern: /should|ought to|advice|consejo/, example: 'You should explain the problem calmly.', isExplicit: true },
    { label: 'modals of possibility', pattern: /may|might|could|possibility|deduction|posibilidad|deduccion/, example: 'It might be a good option.', isExplicit: true },
    { label: 'can for ability or requests', pattern: /\bcan\b|can't|cannot|could|ability|abilities|habilidades?|permisos?|peticiones?/, example: 'I can ask a clear question.', isExplicit: true },
    { label: 'comparatives and superlatives', pattern: /comparative|superlative|comparativos?|superlativos?|better|best|more .* than|the most/, example: 'This option is better than the first one.', isExplicit: true },
    { label: 'conditionals', pattern: /conditional|condicional|if /, example: 'If I had more time, I would practice more.', isExplicit: true },
    { label: 'passive voice', pattern: /passive|voz pasiva|was built|is made|are produced/, example: 'The message was sent yesterday.', isExplicit: true },
    { label: 'reported speech', pattern: /reported speech|estilo indirecto|said that|told me/, example: 'She said that she was ready.', isExplicit: true },
    { label: 'phrasal verbs', pattern: /phrasal verbs?|look up|turn on|give up|get along/, example: 'I look up new words online.', isExplicit: true },
    { label: 'presentation openers', pattern: /presentation|presentacion|introductions? academicas?|alto impacto|pitch|ted/, example: 'Today, I am going to present my main idea.', isExplicit: true },
    { label: 'present simple', pattern: /present simple|presente simple|rutina|routine|habits?|habitos?|usually|every day|adverbios de frecuencia/, example: 'I usually practice after class.', isExplicit: true },
    { label: 'verb to be', pattern: /verb to be|to be|introductions?|presentarse|how old|name|edad|numbers?|time|hora/, example: 'I am ready for the challenge.', isExplicit: true }
  ];

  return rules.find((rule) => rule.pattern.test(normalized)) || {
    label: 'topic-specific speaking phrases',
    example: 'One important point is easy to explain.',
    isExplicit: false
  };
}

function topicNounForBoss(topic: TopicKey, cls: CurriculumClass) {
  const titleTopic = getSpanishClassTopic(cls) || cleanClassSide(splitLocalizedTitle(cls.title || '')[0] || cls.title || 'today\'s topic');
  const labels: Record<TopicKey, string> = {
    greetings: 'greetings and introductions',
    numbers: 'numbers, dates, and time',
    family: 'family and relationships',
    routine: 'daily routines and habits',
    food: 'food, drinks, and ordering',
    clothes: 'clothes, appearance, and style',
    gadgets: 'technology and gadgets',
    school: 'school and classroom life',
    animals: 'animals and nature',
    body: 'body parts and movement',
    directions: 'places, transport, and directions',
    hobbies: 'hobbies, sports, and free time',
    house: 'rooms and things at home',
    weather: 'weather and seasons',
    jobs: 'jobs and responsibilities',
    future: 'future plans and predictions',
    travel: 'travel and trips',
    feelings: 'feelings and reactions',
    holidays: 'holidays and traditions',
    business: 'work, business, and formal communication',
    generic: titleTopic
  };

  return labels[topic] || titleTopic;
}

function bossAvatarForTopic(topic: TopicKey) {
  const avatars: Record<TopicKey, string> = {
    greetings: '👋',
    numbers: '⏰',
    family: '🏠',
    routine: '📅',
    food: '🍽️',
    clothes: '👕',
    gadgets: '💻',
    school: '🎒',
    animals: '🦁',
    body: '💪',
    directions: '🧭',
    hobbies: '⚽',
    house: '🏡',
    weather: '🌦️',
    jobs: '💼',
    future: '🚀',
    travel: '✈️',
    feelings: '🙂',
    holidays: '🎉',
    business: '📊',
    generic: '⚔️'
  };
  return avatars[topic] || avatars.generic;
}

function bossNameForTopic(topic: TopicKey, audience: AudienceKey) {
  const prefix = audience === 'kids' ? 'The Mini' : audience === 'teens' ? 'The Challenge' : 'The Speaking';
  const labels: Record<TopicKey, string> = {
    greetings: 'Greeting Boss',
    numbers: 'Time Boss',
    family: 'Family Boss',
    routine: 'Routine Boss',
    food: 'Ordering Boss',
    clothes: 'Style Boss',
    gadgets: 'Tech Boss',
    school: 'School Boss',
    animals: 'Animal Boss',
    body: 'Action Boss',
    directions: 'Direction Boss',
    hobbies: 'Hobby Boss',
    house: 'Home Boss',
    weather: 'Weather Boss',
    jobs: 'Job Boss',
    future: 'Future Boss',
    travel: 'Travel Boss',
    feelings: 'Feelings Boss',
    holidays: 'Holiday Boss',
    business: 'Business Boss',
    generic: 'Boss'
  };
  return `${prefix} ${labels[topic] || labels.generic}`;
}

function buildBossBattlePlan(slide: ClassSlide, cls: CurriculumClass): BossBattlePlan {
  const topic = inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''} ${slide.title} ${slide.description || ''}`);
  const audience = inferAudienceKey(cls);
  const topicLabel = topicNounForBoss(topic, cls);
  const focus = inferStructureFocus(`${cls.title} ${cls.description || ''} ${cls.objective || ''} ${slide.title} ${slide.description || ''} ${(slide.content || []).join(' ')}`);
  const classTopic = cleanClassSide(splitLocalizedTitle(cls.title || '')[0] || cls.title || topicLabel);

  const rememberPrompt =
    audience === 'kids'
      ? `Say 3 words about ${topicLabel} and one easy sentence.`
      : `Say three key words and one useful phrase about ${topicLabel}.`;

  const usePrompt =
    audience === 'kids'
      ? `You have 60 seconds: make two short sentences about ${topicLabel}. Example: ${focus.example}`
      : `You have 60 seconds: make one affirmative sentence, one negative sentence, and one question using ${focus.label} in the context of ${topicLabel}. Example: ${focus.example}`;

  const speakPrompt =
    audience === 'kids'
      ? `Speak for 30 seconds about ${topicLabel}. Use simple words and one complete sentence.`
      : `Speak for 30 seconds about ${topicLabel}. Use ${focus.label} naturally at least once.`;

  return {
    ...(slide.speakingBossBattle || {}),
    bossName: bossNameForTopic(topic, audience),
    bossTitle: classTopic || topicLabel,
    bossAvatar: bossAvatarForTopic(topic),
    timerSeconds: 30,
    prepareSeconds: 180,
    rounds: {
      remember: [rememberPrompt],
      use: [usePrompt],
      speak: [speakPrompt]
    }
  };
}

function enhanceBossBattle(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.type !== 'speaking-boss-battle' || !slide.speakingBossBattle) return slide;
  return {
    ...slide,
    description: 'Defeat the boss with today\'s English.',
    content: [`Defeat the boss using ${topicNounForBoss(inferTopicKey(`${cls.title} ${cls.description || ''} ${cls.objective || ''}`), cls)}.`],
    speakingBossBattle: buildBossBattlePlan(slide, cls)
  };
}

function enhanceQuizTitle(slide: ClassSlide) {
  const normalizedTitle = normalizeText(slide.title || '');
  if (!/fun quiz|divertido quiz/.test(normalizedTitle)) return slide;

  const progressMatch = slide.title.match(/(\d+)\s*\/\s*(\d+)/);
  const progressLabel = progressMatch ? ` (${progressMatch[1]}/${progressMatch[2]})` : '';
  const suffix = /🧠/.test(slide.title) ? ' 🧠' : '';

  return {
    ...slide,
    title: `Quiz${progressLabel}${suffix} / Quiz${progressLabel}${suffix}`
  };
}

function enhanceWelcomeSlide(slide: ClassSlide, cls: CurriculumClass, sectionIndex: number, slideIndex: number) {
  if (sectionIndex !== 0 || slideIndex !== 0) return slide;
  return {
    ...slide,
    title: normalizeWelcomeTitle(slide.title || '', cls)
  };
}

function stripDecorations(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function cleanClassSide(value: string) {
  return stripDecorations(
    value
      .replace(/^class\s*\d+\s*:\s*/i, '')
      .replace(/^clase\s*\d+\s*:\s*/i, '')
  );
}

function splitLocalizedTitle(value: string) {
  const match = value.match(/\s+\/\s+(?=Clase|Nivel|Level)/i);
  if (!match || match.index === undefined) return [value];
  return [
    value.slice(0, match.index),
    value.slice(match.index + match[0].length)
  ];
}

function getSpanishClassTopic(cls: CurriculumClass) {
  const titleParts = splitLocalizedTitle(cls.title || '');
  const spanishCandidate = titleParts[1]?.trim() || titleParts[0]?.trim() || '';
  return cleanClassSide(spanishCandidate);
}

function translateWelcomePrompt(english: string) {
  const emojiMatch = english.match(/([\u{1F300}-\u{1FAFF}]+)$/u);
  const emojiSuffix = emojiMatch ? ` ${emojiMatch[1]}` : '';
  const base = english.replace(/([\u{1F300}-\u{1FAFF}]+)$/u, '').trim();
  const normalized = normalizeText(base);

  const directMap: Array<{ pattern: RegExp; output: string | ((match: RegExpMatchArray) => string) }> = [
    { pattern: /^welcome!?$/, output: '¡Bienvenidos!' },
    { pattern: /^welcome back!?$/, output: '¡Bienvenidos de nuevo!' },
    { pattern: /^welcome! let'?s talk$/, output: '¡Bienvenidos! Vamos a hablar' },
    { pattern: /^welcome! how are you\?$/, output: '¡Bienvenidos! ¿Como estas?' },
    { pattern: /^welcome! who is this\?$/, output: '¡Bienvenidos! ¿Quien es esta persona?' },
    { pattern: /^welcome! where are you\?$/, output: '¡Bienvenidos! ¿Donde estas?' },
    { pattern: /^welcome! numbers we know$/, output: '¡Bienvenidos! Numeros que ya conocemos' },
    { pattern: /^welcome! look around$/, output: '¡Bienvenidos! Mira a tu alrededor' },
    { pattern: /^welcome! do you have pets\?$/, output: '¡Bienvenidos! ¿Tienes mascotas?' },
    { pattern: /^welcome! are you hungry\?$/, output: '¡Bienvenidos! ¿Tienes hambre?' },
    { pattern: /^welcome! where are you going\?$/, output: '¡Bienvenidos! ¿A donde vas?' },
    { pattern: /^welcome! how do you say hello\?$/, output: '¡Bienvenidos! ¿Como se dice hello?' },
    { pattern: /^welcome! a, b, c\.\.\.$/, output: '¡Bienvenidos! A, B, C...' },
    { pattern: /^welcome! where are you from\?$/, output: '¡Bienvenidos! ¿De donde eres?' },
    { pattern: /^welcome! what do you do\?$/, output: '¡Bienvenidos! ¿A que te dedicas?' },
    { pattern: /^welcome! what time do you wake up\?$/, output: '¡Bienvenidos! ¿A que hora te despiertas?' },
    { pattern: /^welcome! how often\.\.\.?$/, output: '¡Bienvenidos! ¿Con que frecuencia...?' },
    { pattern: /^welcome! let'?s count!$/, output: '¡Bienvenidos! ¡Vamos a contar!' },
    { pattern: /^welcome! what do you like\?$/, output: '¡Bienvenidos! ¿Que te gusta?' },
    { pattern: /^welcome! daily life$/, output: '¡Bienvenidos! Vida diaria' },
    { pattern: /^welcome! right now$/, output: '¡Bienvenidos! Ahora mismo' },
    { pattern: /^welcome! hobbies & interests$/, output: '¡Bienvenidos! Pasatiempos e intereses' },
    { pattern: /^welcome! time travel$/, output: '¡Bienvenidos! Viaje en el tiempo' },
    { pattern: /^welcome to the final review!?$/, output: '¡Bienvenidos al repaso final!' },
    { pattern: /^welcome to basic (\d+)!?$/, output: (match) => `¡Bienvenidos a Basico ${match[1]}!` },
    { pattern: /^welcome to intermediate!?$/, output: '¡Bienvenidos a Intermedio!' },
    { pattern: /^welcome to class (\d+)!?$/, output: (match) => `¡Bienvenidos a la Clase ${match[1]}!` },
    { pattern: /^welcome to teen startup!?$/, output: '¡Bienvenidos al inicio teen!' },
  ];

  for (const { pattern, output } of directMap) {
    const match = normalized.match(pattern);
    if (match) {
      const translated = typeof output === 'function' ? output(match) : output;
      return `${translated}${emojiSuffix}`.trim();
    }
  }

  return '';
}

function normalizeWelcomeTitle(title: string, cls: CurriculumClass) {
  const original = stripDecorations(title);
  if (!original) return title;

  const [rawEnglish = '', rawSpanish = ''] = original.split('/').map(part => stripDecorations(part));
  const english = rawEnglish || original;
  const normalizedEnglish = normalizeText(english);

  if (!/welcome/.test(normalizedEnglish)) {
    return original;
  }

  const translatedPrompt = translateWelcomePrompt(english);
  const spanishTopic = getSpanishClassTopic(cls);

  let spanish = translatedPrompt || rawSpanish;
  const normalizedSpanish = normalizeText(spanish);

  const looksHybridSpanish =
    !spanish ||
    /welcome|back|class|review|basic|intermediate|how|are|what|where|look|count|daily|right now|hobbies|interests|time travel/.test(normalizedSpanish);

  if (looksHybridSpanish) {
    if (translatedPrompt) {
      spanish = translatedPrompt;
    } else if (/^welcome to class (\d+)!?/i.test(english)) {
      spanish = english.replace(/^welcome to class (\d+)!?/i, '¡Bienvenidos a la Clase $1!');
    } else if (/^welcome to basic (\d+)!?/i.test(english)) {
      spanish = english.replace(/^welcome to basic (\d+)!?/i, '¡Bienvenidos a Basico $1!');
    } else if (/^welcome back!?/i.test(english)) {
      spanish = english.replace(/^welcome back!?/i, '¡Bienvenidos de nuevo!');
    } else if (/^welcome!?/i.test(english) && spanishTopic) {
      spanish = `¡Bienvenidos! ${spanishTopic}`;
    } else {
      spanish = '¡Bienvenidos!';
    }
  }

  return `${english} / ${spanish}`;
}

function toTitleCase(value: string) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function cleanExerciseTitle(title: string) {
  const progressMatch = title.match(/\(?\d+\s*\/\s*\d+\)?/);
  const progressLabel = progressMatch ? ` ${progressMatch[0].replace(/\s+/g, '')}` : '';
  const normalized = normalizeText(title);

  const titlePatterns: Array<{ pattern: RegExp; replacement: string }> = [
    { pattern: /complete the sentence|completa the oracion|completa la oracion|complete sentence/, replacement: 'Complete the Sentence' },
    { pattern: /complete the question|completa la pregunta/, replacement: 'Complete the Question' },
    { pattern: /choose the correct option|elige la opcion correcta|select the correct option/, replacement: 'Choose the Correct Option' },
    { pattern: /match the sentence|une la oracion|match the structure/, replacement: 'Match the Structure' },
    { pattern: /put the words in order|ordena las palabras/, replacement: 'Put the Words in Order' },
    { pattern: /make the question|forma la pregunta|build the question/, replacement: 'Build the Question' },
    { pattern: /quiz/, replacement: 'Quiz' }
  ];

  for (const { pattern, replacement } of titlePatterns) {
    if (pattern.test(normalized)) {
      return `${replacement}${progressLabel}`;
    }
  }

  const firstSide = title.split('/')[0]?.trim() || title.trim();
  const cleanedFirstSide = firstSide.replace(/\(?\d+\s*\/\s*\d+\)?/g, '').trim();
  return `${toTitleCase(cleanedFirstSide)}${progressLabel}`;
}

function enhanceExerciseTitle(slide: ClassSlide) {
  const title = slide.title || '';
  if (!title.includes('/')) return slide;

  const normalized = normalizeText(title);
  const isGenericExerciseTitle =
    slide.type === 'roleplay' ||
    Boolean(slide.options?.length) ||
    /quiz|complete|completa|choose|elige|match|une|order|ordena|build|forma/.test(normalized);

  if (!isGenericExerciseTitle) return slide;

  const compactTitle = cleanExerciseTitle(title);
  return {
    ...slide,
    title: compactTitle
  };
}

function buildSlideSearchText(slide: ClassSlide, cls: CurriculumClass) {
  return [
    cls.title,
    cls.description || '',
    cls.objective || '',
    slide.title,
    slide.description || '',
    ...(slide.content || []),
    ...(slide.options || [])
  ].join(' ');
}

function enhanceSlideImage(slide: ClassSlide, cls: CurriculumClass) {
  if (slide.imageUrl) return slide;
  if (slide.type && IMAGELESS_INTERACTIVE_TYPES.has(slide.type)) return slide;

  const topic = inferTopicKey(buildSlideSearchText(slide, cls));
  const audience = inferAudienceKey(cls);
  const imageUrl = TOPIC_VISUALS[topic]?.[audience] || TOPIC_VISUALS.generic[audience];

  return {
    ...slide,
    imageUrl
  };
}

export function enhancePresentationClass(cls: CurriculumClass): CurriculumClass {
  const baseClass = ensureRoleplaySlide(injectStructureDragSlides(cls));

  return {
    ...baseClass,
    sections: baseClass.sections.map((section) => ({
      ...section,
      slides: section.slides.map((slide, slideIndex) =>
        enhanceSlideImage(
          enhanceWelcomeSlide(
            enhanceExerciseTitle(
              enhanceQuizTitle(
                enhanceRoleplaySlide(
                  enhanceBossBattle(
                    enhanceEmojiSlide(buildWarmupWheel(slide, baseClass), baseClass),
                    baseClass
                  ),
                  baseClass
                )
              )
            ),
            baseClass,
            baseClass.sections.indexOf(section),
            slideIndex
          ),
          baseClass
        )
      )
    }))
  };
}
