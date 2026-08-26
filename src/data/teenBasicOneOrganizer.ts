import { ClassSlide, CurriculumClass, CurriculumLevel } from '../types';
import { resolveSpeakingScene } from '../lib/speakingSceneResolver';

type CopySlide = {
  title: string;
  description: string;
  content: string[];
};

type ChoiceSlide = {
  title: string;
  prompt: string;
  options: [string, string, string];
  correctOptionIndex: 0 | 1 | 2;
};

type WheelPrompt = {
  label: string;
  prompt: string;
  es: string;
};

type TeenBasicOnePlan = {
  classTitle: string;
  description: string;
  objective: string;
  welcomeTitle: string;
  welcomeDescription: string;
  welcome: [string, string, string];
  objectives: [string, string, string];
  warmup: WheelPrompt[];
  grammar: [CopySlide, CopySlide, CopySlide];
  context: CopySlide;
  practice: [ChoiceSlide, ChoiceSlide, ChoiceSlide];
  emoji: {
    description: string;
    content: [string];
    options: [string, string, string];
    correctOptionIndex: 0 | 1 | 2;
  };
  production: WheelPrompt[];
  quiz: [ChoiceSlide, ChoiceSlide, ChoiceSlide];
  roleplay: CopySlide;
  wrap: [string, string];
  homework: [string, string];
  videoTask: [string, string];
};

const plans: Record<string, TeenBasicOnePlan> = {
  'c-teens-basic-1-1': {
    classTitle: 'Class 1: Family Tree & Feelings / Clase 1: Árbol familiar y emociones',
    description: 'Describe family members, pets, and feelings with clear basic sentences.',
    objective: 'Name family members, describe feelings, and use this, these, have, and has.',
    welcomeTitle: 'Welcome to Family Tree & Feelings! 👨‍👩‍👧 / ¡Bienvenidos a Árbol Familiar y Emociones! 👨‍👩‍👧',
    welcomeDescription: 'Family Tree & Feelings / Árbol familiar y emociones',
    welcome: ['Today we meet a family and their pets.', 'You will say who each person is.', 'You will also describe how people feel.'],
    objectives: ['✔️ Name close family members.', '✔️ Describe feelings with be.', '✔️ Use this, these, have, and has.'],
    warmup: [
      { label: 'Family', prompt: 'Who lives with you?', es: '¿Quién vive contigo?' },
      { label: 'Sibling', prompt: 'Do you have a brother or sister?', es: '¿Tienes hermano o hermana?' },
      { label: 'Feeling', prompt: 'How do you feel today?', es: '¿Cómo te sientes hoy?' },
      { label: 'Pet', prompt: 'Do you have a pet?', es: '¿Tienes una mascota?' },
      { label: 'Funny', prompt: 'Who is funny in your family?', es: '¿Quién es divertido en tu familia?' },
      { label: 'Photo', prompt: 'Who is in your favorite family photo?', es: '¿Quién aparece en tu foto familiar favorita?' },
    ],
    grammar: [
      {"title":"Family Members 👨‍👩‍👧‍👦 / Miembros de la familia","description":"Core vocabulary","content":["Mother and father = parents","Brother and sister = siblings","Happy, sad, tired, excited, worried"]},
      {"title":"Have and Has 🐶 / Tener","description":"Talk about family and pets","content":["I / You / We / They have","He / She has","This is my aunt Laura."]},
      {"title":"Describe a Family Photo 📸","description":"Put the language together","content":["This is my aunt Laura.","She has a small cat.","She is happy today."]}
    ],
    context: { title: 'Read the Chat 📱 / Lee el chat', description: 'A family photo', content: ['Nora: This is my sister, Emma.', 'Liam: How does she feel?', 'Nora: She is excited. She has a new puppy.', 'Liam: That is a great photo!'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'Nora: This is my ______, Emma.', options: ['sister', 'happy', 'dog'], correctOptionIndex: 0 },
      { title: 'Complete the Chat (2/3)', prompt: 'Emma ______ a new puppy.', options: ['have', 'has', 'is have'], correctOptionIndex: 1 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Which word means mother and father?', options: ['Parents', 'Cousins', 'Siblings'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Family and feelings: decode the emoji story', content: ['👧 + 😊 + 🐶'], options: ['My sister is tired at school.', 'My sister is happy and she has a dog.', 'My parents are at the park.'], correctOptionIndex: 1 },
    production: [
      { label: 'Person', prompt: 'Describe one person in your family.', es: 'Describe a una persona de tu familia.' },
      { label: 'Feeling', prompt: 'How does that person feel today?', es: '¿Cómo se siente hoy esa persona?' },
      { label: 'Pet', prompt: 'Who has a pet in your family?', es: '¿Quién tiene mascota en tu familia?' },
      { label: 'Photo', prompt: 'Introduce two people in a family photo.', es: 'Presenta a dos personas de una foto familiar.' },
      { label: 'Question', prompt: 'Ask your partner about a family member.', es: 'Pregunta a tu compañero por un familiar.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct introduction.', options: ['This is my brother.', 'These is my brother.', 'This my brother is.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'My cousin ______ a cat.', options: ['have', 'has', 'having'], correctOptionIndex: 1 },
      { title: 'Quiz (3/3)', prompt: 'Choose the correct question about a feeling.', options: ['How does she feel?', 'Who old is she?', 'What she has feel?'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Meet My Family 🎭 / Conoce a mi familia', description: 'Take turns showing a family photo.', content: ['Student A: Introduce two people and say how they feel.', 'Student B: Ask Who is this? and How does he/she feel?', 'Mission: Use this is, have/has, and two feeling words.'] },
    wrap: ['Great work! You can introduce family members.', 'You can also describe feelings and pets.'],
    homework: ['Draw or choose a family photo and write 5 sentences about it.', 'Use this is, these are, have/has, and two feeling words.'],
    videoTask: ['Watch the family vocabulary video.', 'Write 5 useful words and one sentence about your family.'],
  },

  'c-teens-basic-1-2': {
    classTitle: 'Class 2: Fast Food & Healthy Choices / Clase 2: Comida rápida y opciones saludables',
    description: 'Talk about food, make polite orders, and compare everyday choices.',
    objective: 'Name common foods, order politely, and explain a healthy choice with because.',
    welcomeTitle: 'Welcome to Fast Food & Healthy Choices! 🍔🥗 / ¡Bienvenidos a Comida Rápida y Opciones Saludables! 🍔🥗',
    welcomeDescription: 'Fast Food & Healthy Choices / Comida rápida y opciones saludables',
    welcome: ['Today we build a meal in English.', 'You will order food politely.', 'You will choose a healthier option and explain why.'],
    objectives: ['✔️ Name foods and drinks.', '✔️ Order with Can I have...? and I would like...', '✔️ Compare choices with healthy, unhealthy, and because.'],
    warmup: [
      { label: 'Food', prompt: 'What food do you love?', es: '¿Qué comida te encanta?' },
      { label: 'Drink', prompt: 'What do you usually drink?', es: '¿Qué bebes normalmente?' },
      { label: 'Snack', prompt: 'What is your favorite snack?', es: '¿Cuál es tu snack favorito?' },
      { label: 'Healthy', prompt: 'Name one healthy food.', es: 'Nombra una comida saludable.' },
      { label: 'Order', prompt: 'What do you order at a restaurant?', es: '¿Qué pides en un restaurante?' },
      { label: 'Breakfast', prompt: 'What do you eat for breakfast?', es: '¿Qué desayunas?' },
    ],
    grammar: [
      {"title":"Food and Drinks 🍕🥤 / Comidas y bebidas","description":"Core vocabulary","content":["Burger, fries, pizza, sandwich","Water, juice, soda","Healthy: fruit, water, salad"]},
      {"title":"Likes and Preferences ❤️","description":"Say what you like","content":["I like pizza.","I don't like onions.","I choose water because it is healthy."]},
      {"title":"Give a Reason 💡","description":"Use because","content":["I choose water because it is healthy.","I like this burger because it is delicious.","Choice + because + reason"]}
    ],
    context: { title: 'Read the Order 🧾 / Lee el pedido', description: 'At the school café', content: ['Cashier: What would you like?', 'Alex: Can I have a chicken sandwich, please?', 'Cashier: Soda or water?', 'Alex: Water, please. It is a healthier choice.'] },
    practice: [
      { title: 'Complete the Order (1/3)', prompt: 'Can I ______ a sandwich, please?', options: ['have', 'has', 'having'], correctOptionIndex: 0 },
      { title: 'Complete the Order (2/3)', prompt: 'I choose water ______ it is healthy.', options: ['but', 'because', 'or'], correctOptionIndex: 1 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Which option is a drink?', options: ['Salad', 'Fries', 'Juice'], correctOptionIndex: 2 },
    ],
    emoji: { description: 'Food and drinks: decode the emoji order', content: ['🍔 + 🥗 + 💧'], options: ['I would like a burger, salad, and water.', 'I have a brother and a dog.', 'It is rainy and cold.'], correctOptionIndex: 0 },
    production: [
      { label: 'Meal', prompt: 'Build your ideal meal.', es: 'Crea tu comida ideal.' },
      { label: 'Healthy', prompt: 'Choose a healthy lunch and explain why.', es: 'Elige un almuerzo saludable y explica por qué.' },
      { label: 'Order', prompt: 'Order a food and a drink politely.', es: 'Pide una comida y una bebida con cortesía.' },
      { label: 'Prefer', prompt: 'Which do you prefer: fruit or fries?', es: '¿Qué prefieres: fruta o papas fritas?' },
      { label: 'Avoid', prompt: 'Name one food you do not like.', es: 'Nombra una comida que no te gusta.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the most polite order.', options: ['Give me water.', 'I would like water, please.', 'Water now.'], correctOptionIndex: 1 },
      { title: 'Quiz (2/3)', prompt: 'Which sentence expresses a preference?', options: ['I prefer juice to soda.', 'Juice is in the cup.', 'Do you cooking juice?'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'Complete: Fruit is a healthy ______.', options: ['choice', 'weather', 'jacket'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: The Healthy Café 🎭 / El café saludable', description: 'Create a complete customer-and-cashier exchange.', content: ['Student A: Take the order and offer two drinks.', 'Student B: Order a meal and choose the healthier drink.', 'Mission: Use please, I would like, and because.'] },
    wrap: ['Excellent! You can order a meal politely.', 'You can also explain a healthier choice.'],
    homework: ['Create a healthy café menu with 6 items.', 'Write a four-line customer-and-cashier dialogue.'],
    videoTask: ['Watch the food and healthy choices video.', 'Write 5 food words and one polite order.'],
  },

  'c-teens-basic-1-3': {
    classTitle: 'Class 3: Fashion, Clothes & Weather / Clase 3: Moda, ropa y clima',
    description: 'Describe clothes, current outfits, and weather-appropriate choices.',
    objective: 'Name clothes, describe what someone is wearing, and choose outfits for the weather.',
    welcomeTitle: 'Welcome to Fashion, Clothes & Weather! 👕🌦️ / ¡Bienvenidos a Moda, Ropa y Clima! 👕🌦️',
    welcomeDescription: 'Fashion, Clothes & Weather / Moda, ropa y clima',
    welcome: ['Today we become weather-ready stylists.', 'You will describe what people are wearing.', 'You will choose the best outfit for the weather.'],
    objectives: ['✔️ Name clothes and accessories.', '✔️ Use be + wearing.', '✔️ Connect clothes and weather with because.'],
    warmup: [
      { label: 'Color', prompt: 'What color are you wearing?', es: '¿Qué color llevas puesto?' },
      { label: 'Shoes', prompt: 'What shoes do you wear most?', es: '¿Qué zapatos usas más?' },
      { label: 'Weather', prompt: 'What is the weather like today?', es: '¿Cómo está el clima hoy?' },
      { label: 'Favorite', prompt: 'What is your favorite clothing item?', es: '¿Cuál es tu prenda favorita?' },
      { label: 'Rain', prompt: 'What do you wear when it rains?', es: '¿Qué usas cuando llueve?' },
      { label: 'Style', prompt: 'Describe your style in one word.', es: 'Describe tu estilo en una palabra.' },
    ],
    grammar: [
      {"title":"Clothes 👕 / Ropa","description":"Core vocabulary","content":["T-shirt, hoodie, jacket, jeans","Dress, skirt, shorts","Sunny, rainy, cloudy, windy"]},
      {"title":"Colors and Style ✨","description":"Add useful details","content":["A comfortable gray hoodie","New white sneakers","Wear boots because it is rainy."]},
      {"title":"Dress for the Weather ☔","description":"Make a logical choice","content":["Wear boots because it is rainy.","Wear a jacket because it is cold.","Do not wear a heavy coat when it is hot."]}
    ],
    context: { title: 'Read the Chat 📱 / Lee el chat', description: 'Choosing an outfit', content: ['Maya: It is cold and rainy today.', 'Leo: I am wearing jeans and a hoodie.', 'Maya: Take your waterproof jacket too.', 'Leo: Good idea! I need my boots.'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'I am ______ a blue hoodie.', options: ['wear', 'wearing', 'wears'], correctOptionIndex: 1 },
      { title: 'Complete the Chat (2/3)', prompt: 'Take your boots because it is ______.', options: ['rainy', 'delicious', 'hungry'], correctOptionIndex: 0 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Which item do you wear on your feet?', options: ['Jacket', 'Sneakers', 'Hat'], correctOptionIndex: 1 },
    ],
    emoji: { description: 'Clothes and weather: decode the emoji story', content: ['🌧️ + 🧥 + 👢'], options: ['It is rainy, so I am wearing a jacket and boots.', 'I am ordering a burger and water.', 'My cousin has a small dog.'], correctOptionIndex: 0 },
    production: [
      { label: 'Today', prompt: 'Describe what you are wearing today.', es: 'Describe lo que llevas puesto hoy.' },
      { label: 'Rain', prompt: 'Choose an outfit for a rainy day.', es: 'Elige un conjunto para un día lluvioso.' },
      { label: 'Hot', prompt: 'Choose an outfit for a hot day.', es: 'Elige un conjunto para un día caluroso.' },
      { label: 'Style', prompt: 'Describe your favorite outfit.', es: 'Describe tu conjunto favorito.' },
      { label: 'Partner', prompt: 'Ask your partner what they are wearing.', es: 'Pregunta a tu compañero qué lleva puesto.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct sentence.', options: ['She is wearing boots.', 'She wearing boots.', 'She are wear boots.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Which outfit is best for cold weather?', options: ['Coat and boots', 'Swimsuit and sandals', 'T-shirt only'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'Complete: It is sunny, ______ I need a hat.', options: ['because', 'so', 'but is'], correctOptionIndex: 1 },
    ],
    roleplay: { title: 'Roleplay: Weather Stylist 🎭 / Estilista del clima', description: 'Recommend an outfit for a weather forecast.', content: ['Student A: Give today’s weather forecast.', 'Student B: Recommend three clothing items.', 'Mission: Describe the final outfit with be + wearing and because.'] },
    wrap: ['Great styling! You can describe clothes and weather.', 'You can choose a logical outfit for the forecast.'],
    homework: ['Design two outfits: one for a rainy day and one for a sunny day.', 'Write 3 sentences for each outfit using wearing and because.'],
    videoTask: ['Watch the clothes and weather video.', 'Write 5 clothing words and describe one outfit.'],
  },

  'c-teens-basic-1-4': {
    classTitle: 'Class 4: Nature, Parks & Outdoors / Clase 4: Naturaleza, parques y aire libre',
    description: 'Describe outdoor places, locate things, and suggest responsible actions.',
    objective: 'Use nature vocabulary, there is/are, place phrases, and should for park care.',
    welcomeTitle: 'Welcome to Nature, Parks & Outdoors! 🌳🚲 / ¡Bienvenidos a Naturaleza, Parques y Aire Libre! 🌳🚲',
    welcomeDescription: 'Nature, Parks & Outdoors / Naturaleza, parques y aire libre',
    welcome: ['Today we plan a day at the park.', 'You will describe what is there.', 'You will suggest fun and responsible outdoor actions.'],
    objectives: ['✔️ Name natural and park features.', '✔️ Use there is and there are.', '✔️ Give suggestions with should and should not.'],
    warmup: [
      { label: 'Park', prompt: 'What do you do at a park?', es: '¿Qué haces en un parque?' },
      { label: 'Nature', prompt: 'Name three things in nature.', es: 'Nombra tres cosas de la naturaleza.' },
      { label: 'Outdoor', prompt: 'What outdoor activity do you like?', es: '¿Qué actividad al aire libre te gusta?' },
      { label: 'Trees', prompt: 'Are there trees near your home?', es: '¿Hay árboles cerca de tu casa?' },
      { label: 'Clean', prompt: 'How can we keep a park clean?', es: '¿Cómo podemos mantener limpio un parque?' },
      { label: 'Weekend', prompt: 'Where do you go outdoors?', es: '¿Adónde vas al aire libre?' },
    ],
    grammar: [
      {"title":"Nature Words 🌲 / Naturaleza","description":"Core vocabulary","content":["Tree, flower, river, lake","Mountain, forest, field","Playground, bench, path, fountain"]},
      {"title":"Outdoor Activities 🚲","description":"Talk about what people can do","content":["Walk, run, ride a bike, have a picnic","You can ride a bike on the path.","We should use the trash cans."]},
      {"title":"Care for the Park ♻️","description":"Give responsible suggestions","content":["We should use the trash cans.","We shouldn't damage plants.","should + base verb"]}
    ],
    context: { title: 'Read the Park Plan 🗺️ / Lee el plan', description: 'A Saturday outdoors', content: ['Kai: Is there a lake in Green Park?', 'Lina: Yes, and there are two picnic areas.', 'Kai: Great! We can ride bikes there.', 'Lina: Remember: we should keep the park clean.'] },
    practice: [
      { title: 'Complete the Plan (1/3)', prompt: 'There ______ a lake in the park.', options: ['is', 'are', 'be'], correctOptionIndex: 0 },
      { title: 'Complete the Plan (2/3)', prompt: 'We should ______ the park clean.', options: ['keeping', 'keep', 'keeps'], correctOptionIndex: 1 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Where can you sit in a park?', options: ['On a bench', 'In a river', 'On a flower'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Nature and parks: decode the emoji plan', content: ['🌳 + 🚲 + 🧺 + ♻️'], options: ['We can bike, have a picnic, and recycle at the park.', 'I am wearing boots because it is rainy.', 'I would like a sandwich, please.'], correctOptionIndex: 0 },
    production: [
      { label: 'Describe', prompt: 'Describe a park near you.', es: 'Describe un parque cercano.' },
      { label: 'There is', prompt: 'Make a sentence with there is.', es: 'Crea una frase con there is.' },
      { label: 'There are', prompt: 'Make a sentence with there are.', es: 'Crea una frase con there are.' },
      { label: 'Activity', prompt: 'Plan two outdoor activities.', es: 'Planea dos actividades al aire libre.' },
      { label: 'Rule', prompt: 'Give one rule for a clean park.', es: 'Da una regla para un parque limpio.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct plural sentence.', options: ['There are two paths.', 'There is two paths.', 'There two paths are.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Which action protects nature?', options: ['Leave trash', 'Pick every flower', 'Use a trash can'], correctOptionIndex: 2 },
      { title: 'Quiz (3/3)', prompt: 'Complete: We ______ respect the park rules.', options: ['should', 'are', 'having'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Park Guide 🎭 / Guía del parque', description: 'Help a visitor plan an afternoon outdoors.', content: ['Student A: Ask what the park has and what you can do.', 'Student B: Describe three places and two activities.', 'Mission: Include there is/are and one responsible suggestion.'] },
    wrap: ['Excellent! You can describe a park clearly.', 'You can also suggest responsible outdoor actions.'],
    homework: ['Draw a simple park map and label 6 places or objects.', 'Write 5 sentences using there is/are, can, and should.'],
    videoTask: ['Watch the nature and parks video.', 'Write 5 outdoor words and one park rule.'],
  },

  'c-teens-basic-1-5': {
    classTitle: 'Class 5: Weekend Plans with Will and Going To / Clase 5: Planes de fin de semana con will y going to',
    description: 'Distinguish planned activities from quick decisions and simple predictions.',
    objective: 'Talk about weekend plans using going to and use will for quick decisions or predictions.',
    welcomeTitle: 'Welcome to Weekend Plans & Free Time! 📅✨ / ¡Bienvenidos a Planes de Fin de Semana! 📅✨',
    welcomeDescription: 'Weekend Plans / Planes de fin de semana',
    welcome: ['Today we look ahead to the weekend.', 'You will talk about real plans.', 'You will also make quick decisions and predictions.'],
    objectives: ['✔️ Use going to for planned activities.', '✔️ Use will for quick decisions and predictions.', '✔️ Ask about a partner’s weekend.'],
    warmup: [
      { label: 'Saturday', prompt: 'What do you do on Saturdays?', es: '¿Qué haces los sábados?' },
      { label: 'Sunday', prompt: 'Where do you go on Sundays?', es: '¿Adónde vas los domingos?' },
      { label: 'Friends', prompt: 'Do you meet friends on weekends?', es: '¿Ves a tus amigos los fines de semana?' },
      { label: 'Movie', prompt: 'What movie do you want to watch?', es: '¿Qué película quieres ver?' },
      { label: 'Study', prompt: 'When do you study on the weekend?', es: '¿Cuándo estudias el fin de semana?' },
      { label: 'Plan', prompt: 'Name one plan for this weekend.', es: 'Nombra un plan para este fin de semana.' },
    ],
    grammar: [
      {"title":"Weekend Activities 🎮⚽","description":"Useful vocabulary","content":["Watch a movie, play soccer, study","Visit family, meet friends, stay home","I am going to study on Saturday."]},
      {"title":"Will = A Prediction 🔮","description":"Say what you think will happen","content":["I think it will rain.","Our team will win.","What are you going to do?"]},
      {"title":"Ask About Plans ❓","description":"Questions and short answers","content":["What are you going to do?","Are you going to study? Yes, I am.","Will it rain? I think it will."]}
    ],
    context: { title: 'Read the Weekend Chat 📱', description: 'Plans and a quick decision', content: ['Mia: What are you going to do on Saturday?', 'Leo: I am going to play soccer with Tom.', 'Mia: The weather app says it will rain.', 'Leo: Then I will bring my rain jacket.'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'I am going to ______ soccer on Saturday.', options: ['play', 'playing', 'plays'], correctOptionIndex: 0 },
      { title: 'Complete the Chat (2/3)', prompt: 'The phone is ringing. I ______ answer it.', options: ['am going', 'will', 'am'], correctOptionIndex: 1 },
      { title: 'Concept Check (3/3)', prompt: 'Which sentence describes a plan?', options: ['I am going to visit my aunt.', 'I will help you right now.', 'It rained yesterday.'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Future plans: decode the emoji story', content: ['📅 + ⚽ + 🌧️ + 🧥'], options: ['I played soccer in the rain yesterday.', 'I am going to play soccer, and I will take a jacket.', 'I wear a jacket to school every day.'], correctOptionIndex: 1 },
    production: [
      { label: 'Plan', prompt: 'Say one plan with going to.', es: 'Di un plan con going to.' },
      { label: 'Decision', prompt: 'Make a quick decision with will.', es: 'Toma una decisión rápida con will.' },
      { label: 'Predict', prompt: 'Predict the weekend weather.', es: 'Predice el clima del fin de semana.' },
      { label: 'Ask', prompt: 'Ask your partner about Saturday.', es: 'Pregunta a tu compañero por el sábado.' },
      { label: 'Two days', prompt: 'Give one Saturday and one Sunday plan.', es: 'Da un plan para el sábado y otro para el domingo.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct planned future.', options: ['She is going to study.', 'She going to study.', 'She is go study.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'I think our team ______ win.', options: ['is', 'will', 'going'], correctOptionIndex: 1 },
      { title: 'Quiz (3/3)', prompt: 'Choose the correct question.', options: ['What you are going to do?', 'What are you going to do?', 'What going you do?'], correctOptionIndex: 1 },
    ],
    roleplay: { title: 'Roleplay: Plan the Weekend 🎭 / Planea el fin de semana', description: 'Agree on a plan and react to one surprise.', content: ['Student A: Suggest two planned activities.', 'Student B: Ask about time and place.', 'Mission: Use going to twice; then react to a weather surprise with will.'] },
    wrap: ['Great planning! You can distinguish a plan from a quick decision.', 'You can ask and answer questions about the weekend.'],
    homework: ['Write a weekend plan with 6 sentences.', 'Use going to four times and will twice.'],
    videoTask: ['Watch the will and going to video.', 'Write two planned actions and two predictions.'],
  },

  'c-teens-basic-1-6': {
    classTitle: 'Class 6: Invitations—Accepting & Declining / Clase 6: Invitaciones—aceptar y rechazar',
    description: 'Invite someone, respond politely, give a reason, and suggest another time.',
    objective: 'Make invitations and accept or decline them politely with a clear follow-up.',
    welcomeTitle: 'Welcome to Invitations, Movies & Plans! 🎬📲 / ¡Bienvenidos a Invitaciones y Películas! 🎬📲',
    welcomeDescription: 'Invitations & Plans / Invitaciones y planes',
    welcome: ['Today we make plans with friends.', 'You will invite, accept, or decline politely.', 'You will keep the conversation going with another option.'],
    objectives: ['✔️ Make an invitation.', '✔️ Accept or decline politely.', '✔️ Give a reason or suggest another time.'],
    warmup: [
      { label: 'Movie', prompt: 'Who do you watch movies with?', es: '¿Con quién ves películas?' },
      { label: 'Weekend', prompt: 'What do you like doing on weekends?', es: '¿Qué te gusta hacer los fines de semana?' },
      { label: 'Invite', prompt: 'Who did you invite recently?', es: '¿A quién invitaste recientemente?' },
      { label: 'Accept', prompt: 'What plan would you happily accept?', es: '¿Qué plan aceptarías con gusto?' },
      { label: 'Busy', prompt: 'What do you say when you are busy?', es: '¿Qué dices cuando estás ocupado?' },
      { label: 'Time', prompt: 'What time is good for meeting friends?', es: '¿Qué hora es buena para ver a tus amigos?' },
    ],
    grammar: [
      {"title":"Make an Invitation 💌 / Invitar","description":"Two useful question forms","content":["Would you like to watch a movie?","Do you want to play soccer?","Yes, I would love to!"]},
      {"title":"Give a Reason 💬 / Dar una razón","description":"Explain briefly","content":["I have soccer practice.","I need to study for a test.","How about Sunday?"]},
      {"title":"Suggest Another Time 📅","description":"Keep the plan alive","content":["How about Sunday?","Maybe another day.","Are you free tomorrow?"]}
    ],
    context: { title: 'Read the Chat 📱 / Lee el chat', description: 'A movie invitation', content: ['Sofia: Would you like to watch a movie on Friday?', 'Ben: I would love to, but I have soccer practice.', 'Sofia: No problem. How about Saturday?', 'Ben: That sounds great!'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'Would you like to ______ a movie?', options: ['watch', 'watching', 'watches'], correctOptionIndex: 0 },
      { title: 'Complete the Chat (2/3)', prompt: "I'd love to, ______ I have practice.", options: ['because is', 'but', 'and can'], correctOptionIndex: 1 },
      { title: 'Response Check (3/3)', prompt: 'Which response suggests another time?', options: ['No.', 'How about Sunday?', 'I movie Saturday.'], correctOptionIndex: 1 },
    ],
    emoji: { description: 'Invitations: decode the emoji chat', content: ['📱 + 🎬 + ❌ + 📅'], options: ['I declined the movie and suggested another day.', 'I bought a blue T-shirt.', 'There are trees in the park.'], correctOptionIndex: 0 },
    production: [
      { label: 'Movie', prompt: 'Invite your partner to a movie.', es: 'Invita a tu compañero al cine.' },
      { label: 'Accept', prompt: 'Accept an invitation enthusiastically.', es: 'Acepta una invitación con entusiasmo.' },
      { label: 'Decline', prompt: 'Decline politely and give a reason.', es: 'Rechaza con cortesía y da una razón.' },
      { label: 'Another day', prompt: 'Suggest a different day or time.', es: 'Sugiere otro día u otra hora.' },
      { label: 'Details', prompt: 'Ask where and when the plan is.', es: 'Pregunta dónde y cuándo es el plan.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct invitation.', options: ['Would you like to go out?', 'Would you like going out?', 'You would go out like?'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Choose the most polite decline.', options: ['No. Bad plan.', "Sorry, I can't tonight.", 'I not go.'], correctOptionIndex: 1 },
      { title: 'Quiz (3/3)', prompt: 'Complete: ______ about Saturday afternoon?', options: ['Who', 'How', 'Why is'], correctOptionIndex: 1 },
    ],
    roleplay: { title: 'Roleplay: Make a Plan 🎭 / Hagan un plan', description: 'Complete an invitation from start to finish.', content: ['Student A: Invite your partner to an activity.', 'Student B: Decline with a reason and suggest another time.', 'Mission: Agree on the final day, time, and place.'] },
    wrap: ['Excellent! You can invite and respond politely.', 'You can also suggest another time and complete the plan.'],
    homework: ['Write a six-line invitation chat.', 'Include an invitation, a polite decline, a reason, and a new time.'],
    videoTask: ['Watch the invitations video.', 'Write 5 invitation or response phrases.'],
  },

  'c-teens-basic-1-7': {
    classTitle: 'Class 7: Shopping, Prices & Clothes / Clase 7: Compras, precios y ropa',
    description: 'Ask about clothes, prices, colors, sizes, and payment in a store.',
    objective: 'Complete a polite clothing-store conversation from choosing an item to paying.',
    welcomeTitle: 'Welcome to Shopping, Prices & Clothes! 🛍️👟 / ¡Bienvenidos a Compras, Precios y Ropa! 🛍️👟',
    welcomeDescription: 'Shopping, Prices & Clothes / Compras, precios y ropa',
    welcome: ['Today we shop for clothes in English.', 'You will ask about price, color, and size.', 'You will finish the purchase politely.'],
    objectives: ['✔️ Name clothes and store details.', '✔️ Ask How much is/are...?', '✔️ Request a color or size and pay politely.'],
    warmup: [
      { label: 'Clothes', prompt: 'What clothing item do you buy most?', es: '¿Qué prenda compras más?' },
      { label: 'Color', prompt: 'What color do you usually wear?', es: '¿Qué color usas normalmente?' },
      { label: 'Shoes', prompt: 'Sneakers or boots?', es: '¿Tenis o botas?' },
      { label: 'Store', prompt: 'Do you prefer stores or online shopping?', es: '¿Prefieres tiendas o compras en línea?' },
      { label: 'Price', prompt: 'What is an expensive item?', es: '¿Qué objeto es caro?' },
      { label: 'Size', prompt: 'What size question can you ask?', es: '¿Qué pregunta sobre talla puedes hacer?' },
    ],
    grammar: [
      {"title":"Clothes in a Store 👕","description":"Shopping vocabulary","content":["Hoodie, T-shirt, jeans, jacket","Sneakers, boots, cap","How much is this hoodie?"]},
      {"title":"Choose an Item ✅","description":"Say what you want","content":["I would like this jacket.","These sneakers are comfortable.","I will take it."]},
      {"title":"Pay Politely 💳","description":"Finish the purchase","content":["I will take it.","Can I pay by card?","Thank you. Have a nice day!"]}
    ],
    context: { title: 'Read the Store Dialogue 🛍️', description: 'Buying a hoodie', content: ['Assistant: Can I help you?', 'Nico: How much is this hoodie?', 'Assistant: It is $28. We have it in black and blue.', 'Nico: Blue, please. Can I try it on?'] },
    practice: [
      { title: 'Complete the Dialogue (1/3)', prompt: 'How much ______ this hoodie?', options: ['is', 'are', 'do'], correctOptionIndex: 0 },
      { title: 'Complete the Dialogue (2/3)', prompt: 'Do you have it ______ blue?', options: ['at', 'on', 'in'], correctOptionIndex: 2 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Where do you pay?', options: ['At the cashier', 'In the sleeve', 'On the price'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Shopping: decode the request', content: ['🛍️ + 👕 + 🏷️ + 💳'], options: ['I want to check the T-shirt price and pay by card.', 'I am going to ride my bike.', 'My sister has a puppy.'], correctOptionIndex: 0 },
    production: [
      { label: 'Price', prompt: 'Ask the price of one item.', es: 'Pregunta el precio de una prenda.' },
      { label: 'Plural', prompt: 'Ask the price of two shoes.', es: 'Pregunta el precio de unos zapatos.' },
      { label: 'Color', prompt: 'Request a different color.', es: 'Pide otro color.' },
      { label: 'Size', prompt: 'Request a different size.', es: 'Pide otra talla.' },
      { label: 'Payment', prompt: 'Choose how to pay.', es: 'Elige cómo pagar.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct plural price question.', options: ['How much are these jeans?', 'How much is these jeans?', 'How many price jeans?'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Which phrase asks for a size?', options: ['Do you have it in medium?', 'Where is the weather?', 'Can I eat the jacket?'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'What does I will take it mean?', options: ['I want to buy it.', 'I want to return home.', 'I do not like it.'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Clothing Store 🎭 / Tienda de ropa', description: 'Complete a real shopping exchange.', content: ['Student A: You are the shop assistant; offer colors and sizes.', 'Student B: Ask the price, try an option, and choose one item.', 'Mission: Finish with a payment question and a polite goodbye.'] },
    wrap: ['Great shopping! You can ask about prices, colors, and sizes.', 'You can complete a purchase politely.'],
    homework: ['Choose three clothes from an online store and write their prices.', 'Write a six-line dialogue between a shopper and an assistant.'],
    videoTask: ['Watch the shopping English video.', 'Write 5 store phrases and one price question.'],
  },

  'c-teens-basic-1-8': {
    classTitle: 'Class 8: Food, Snacks & Ordering / Clase 8: Comida, snacks y pedidos',
    description: 'Order snacks and drinks, ask about options, and express preferences.',
    objective: 'Use polite café language to order, clarify, choose, and pay.',
    welcomeTitle: 'Welcome to Food, Snacks & Ordering! 🥪🥤 / ¡Bienvenidos a Comida, Snacks y Pedidos! 🥪🥤',
    welcomeDescription: 'Food, Snacks & Ordering / Comida, snacks y pedidos',
    welcome: ['Today we visit a café in English.', 'You will read a simple menu.', 'You will order a snack and drink politely.'],
    objectives: ['✔️ Name snacks, foods, and drinks.', '✔️ Order with Can I have...? and I would like...', '✔️ Ask about options and state a preference.'],
    warmup: [
      { label: 'Snack', prompt: 'What snack do you eat most?', es: '¿Qué snack comes más?' },
      { label: 'Drink', prompt: 'Water, juice, or soda?', es: '¿Agua, jugo o gaseosa?' },
      { label: 'Sweet', prompt: 'What sweet food do you like?', es: '¿Qué comida dulce te gusta?' },
      { label: 'Salty', prompt: 'What salty snack do you like?', es: '¿Qué snack salado te gusta?' },
      { label: 'Café', prompt: 'What do you order at a café?', es: '¿Qué pides en una cafetería?' },
      { label: 'Prefer', prompt: 'Do you prefer fruit or chips?', es: '¿Prefieres fruta o papas?' },
    ],
    grammar: [
      {"title":"Café Food 🥪 / Comida de cafetería","description":"Menu vocabulary","content":["Sandwich, burger, pizza slice","Chips, cookies, fruit, salad","Item = what you can order"]},
      {"title":"Ask About Options ❓","description":"Clarify the order","content":["What drinks do you have?","Does it come with fries?","I prefer juice to soda."]},
      {"title":"Preferences and Payment 💳","description":"Choose and finish","content":["I prefer juice to soda.","That is all, thank you.","Can I pay by card?"]}
    ],
    context: { title: 'Read the Café Order 🧾', description: 'A complete order', content: ['Cashier: Hi! What would you like?', 'Sam: Can I have a chicken sandwich, please?', 'Cashier: Sure. What would you like to drink?', 'Sam: Orange juice, please. That is all.'] },
    practice: [
      { title: 'Complete the Order (1/3)', prompt: 'Can I ______ a sandwich, please?', options: ['have', 'has', 'having'], correctOptionIndex: 0 },
      { title: 'Complete the Order (2/3)', prompt: 'What would you like ______ drink?', options: ['for', 'to', 'at'], correctOptionIndex: 1 },
      { title: 'Vocabulary Check (3/3)', prompt: 'Which item is a snack?', options: ['Chips', 'Jacket', 'Laptop'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Café order: decode the emoji tray', content: ['🥪 + 🍪 + 🧃'], options: ['I would like a sandwich, a cookie, and juice.', 'There are benches in the park.', 'I will call my cousin tomorrow.'], correctOptionIndex: 0 },
    production: [
      { label: 'Order', prompt: 'Order one snack and one drink.', es: 'Pide un snack y una bebida.' },
      { label: 'Menu', prompt: 'Ask what drinks are available.', es: 'Pregunta qué bebidas hay.' },
      { label: 'Combo', prompt: 'Create your own café combo.', es: 'Crea tu propio combo.' },
      { label: 'Prefer', prompt: 'State one food preference.', es: 'Expresa una preferencia de comida.' },
      { label: 'Finish', prompt: 'Finish an order politely.', es: 'Termina un pedido con cortesía.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the polite request.', options: ['I would like some water, please.', 'Water give me.', 'I wanting water now.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Which question asks about options?', options: ['What drinks do you have?', 'Why drinks is?', 'Where you drink have?'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'Complete: That is ______, thank you.', options: ['all', 'every', 'finish is'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Café Counter 🎭 / Mostrador de cafetería', description: 'Take and place a complete café order.', content: ['Student A: Be the cashier; ask for food, drink, and anything else.', 'Student B: Order two items, ask one menu question, and choose a drink.', 'Mission: Confirm the order and finish with thank you.'] },
    wrap: ['Excellent! You can read a simple menu and order politely.', 'You can ask about choices and finish the order.'],
    homework: ['Create a snack menu with 6 items and prices.', 'Write a six-line order using two polite request forms.'],
    videoTask: ['Watch the café ordering video.', 'Write 5 menu words and one complete order.'],
  },

  'c-teens-basic-1-9': {
    classTitle: 'Class 9: Technology, Apps & Social Media / Clase 9: Tecnología, aplicaciones y redes sociales',
    description: 'Describe device use, app habits, screen time, and basic online safety.',
    objective: 'Talk about technology routines with present simple, use...to, and frequency expressions.',
    welcomeTitle: 'Welcome to Technology, Apps & Social Media! 📱💻 / ¡Bienvenidos a Tecnología y Apps! 📱💻',
    welcomeDescription: 'Technology, Apps & Social Media / Tecnología, aplicaciones y redes sociales',
    welcome: ['Today we talk about our digital lives.', 'You will explain what you use each device for.', 'You will share one healthy and safe online habit.'],
    objectives: ['✔️ Name devices, apps, and online actions.', '✔️ Explain purpose with use...to.', '✔️ Describe frequency, screen time, and safe habits.'],
    warmup: [
      { label: 'Device', prompt: 'What device do you use most?', es: '¿Qué dispositivo usas más?' },
      { label: 'App', prompt: 'What is your favorite app?', es: '¿Cuál es tu aplicación favorita?' },
      { label: 'Music', prompt: 'How do you listen to music?', es: '¿Cómo escuchas música?' },
      { label: 'Games', prompt: 'Do you play games online?', es: '¿Juegas en línea?' },
      { label: 'Study', prompt: 'How does technology help you study?', es: '¿Cómo te ayuda la tecnología a estudiar?' },
      { label: 'Time', prompt: 'How much screen time do you have?', es: '¿Cuánto tiempo de pantalla tienes?' },
    ],
    grammar: [
      {"title":"Devices and Apps 📱","description":"Technology vocabulary","content":["Phone, laptop, tablet, headphones","Chat app, music app, game, browser","I use my phone to chat with friends."]},
      {"title":"How Often? ⏰","description":"Frequency expressions","content":["Always, usually, sometimes, never","I usually listen to music online.","Use a strong password."]},
      {"title":"Smart Online Choices 🔒","description":"Basic digital safety","content":["Use a strong password.","Don't share private information.","Ask an adult when something feels wrong."]}
    ],
    context: { title: 'Read the Chat 📱 / Lee el chat', description: 'Apps and screen time', content: ['Ari: What app do you use most?', 'Zoe: I usually use a music app after school.', 'Ari: How much screen time do you have?', 'Zoe: About two hours. I never use my phone during dinner.'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'I use my laptop ______ do homework.', options: ['to', 'for to', 'at'], correctOptionIndex: 0 },
      { title: 'Complete the Chat (2/3)', prompt: 'I ______ use my phone during dinner.', options: ['never', 'not never', 'am never use'], correctOptionIndex: 0 },
      { title: 'Safety Check (3/3)', prompt: 'Which is a safe online habit?', options: ['Share your password.', 'Use a strong password.', 'Post your address.'], correctOptionIndex: 1 },
    ],
    emoji: { description: 'Technology habits: decode the emoji routine', content: ['💻 + 📚 + 🎧 + ⏰'], options: ['I use my laptop to study and listen to music for a limited time.', 'I order lunch at a café.', 'There is a lake in the park.'], correctOptionIndex: 0 },
    production: [
      { label: 'Purpose', prompt: 'Explain what you use your phone for.', es: 'Explica para qué usas tu teléfono.' },
      { label: 'App', prompt: 'Describe your favorite app.', es: 'Describe tu aplicación favorita.' },
      { label: 'Frequency', prompt: 'Say how often you play games.', es: 'Di con qué frecuencia juegas.' },
      { label: 'Screen time', prompt: 'Describe one healthy screen-time rule.', es: 'Describe una regla saludable de tiempo de pantalla.' },
      { label: 'Safety', prompt: 'Give one online safety tip.', es: 'Da un consejo de seguridad en línea.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the correct purpose sentence.', options: ['I use headphones to listen to music.', 'I use headphones listen music.', 'I to use headphones music.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Choose the correct frequency question.', options: ['How often do you use that app?', 'How do often you app?', 'How many often app?'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'Which information should stay private?', options: ['Your password', 'Your favorite color', 'A movie title'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Tech Help & Safety 🎭 / Ayuda tecnológica', description: 'Ask for app help and discuss one safe choice.', content: ['Student A: Ask how to use an app for one clear purpose.', 'Student B: Give two simple steps and one safety reminder.', 'Mission: Use use...to, a frequency word, and should/should not.'] },
    wrap: ['Great work! You can explain your technology habits.', 'You can also describe a healthy and safe online choice.'],
    homework: ['Write 6 sentences about your digital routine.', 'Include use...to, two frequency words, and one safety rule.'],
    videoTask: ['Watch the technology habits video.', 'Write 5 technology phrases and one online safety tip.'],
  },

  'c-teens-basic-1-10': {
    classTitle: 'Class 10: Chats, Help Calls & Trip Planning / Clase 10: Chats, llamadas de ayuda y planificación de viajes',
    description: 'Use polite help requests in chats and calls, then agree on a simple trip plan.',
    objective: 'Ask for clarification, exchange planning details, and confirm a date, time, place, and task.',
    welcomeTitle: 'Welcome to Chats, Help Calls & Trip Planning! 💬📞🗺️ / ¡Bienvenidos a Chats y Viajes! 💬📞🗺️',
    welcomeDescription: 'Chats, Help Calls & Trip Planning / Chats, llamadas de ayuda y viajes',
    welcome: ['Today we solve a planning problem together.', 'You will ask for help in a chat or call.', 'You will confirm the important details of a trip.'],
    objectives: ['✔️ Ask for help and clarification politely.', '✔️ Share dates, times, places, and tasks.', '✔️ Confirm a complete event or trip plan.'],
    warmup: [
      { label: 'Chat', prompt: 'Who do you message when you need help?', es: '¿A quién escribes cuando necesitas ayuda?' },
      { label: 'Call', prompt: 'When do you prefer a phone call?', es: '¿Cuándo prefieres una llamada?' },
      { label: 'Repeat', prompt: 'How do you ask someone to repeat?', es: '¿Cómo pides que repitan?' },
      { label: 'Trip', prompt: 'Where would you like to go?', es: '¿Adónde te gustaría ir?' },
      { label: 'Plan', prompt: 'What details does a trip need?', es: '¿Qué detalles necesita un viaje?' },
      { label: 'Task', prompt: 'What can you bring to a group event?', es: '¿Qué puedes llevar a un evento grupal?' },
    ],
    grammar: [
      {"title":"Ask for Help 🙋 / Pedir ayuda","description":"Polite requests","content":["Can you help me, please?","Could you send me the address?","Could you repeat that?"]},
      {"title":"Suggest and Assign Tasks ✅","description":"Organize the group","content":["Let's meet at the station.","I can buy the tickets.","So, we meet at 9:30 on Saturday."]},
      {"title":"Confirm the Plan 🔁","description":"Check all final details","content":["So, we meet at 9:30 on Saturday.","You bring the snacks, and I bring the tickets.","See you at Central Station!"]}
    ],
    context: { title: 'Read the Planning Chat 💬', description: 'A trip with one missing detail', content: ['Lia: Can you help me with the beach trip?', 'Omar: Sure. What do we need?', 'Lia: We need a date, a meeting place, and tickets.', 'Omar: Did you say Saturday at 8:30? Please send me the address.'] },
    practice: [
      { title: 'Complete the Chat (1/3)', prompt: 'Could you ______ the address?', options: ['send', 'sending', 'sends'], correctOptionIndex: 0 },
      { title: 'Complete the Chat (2/3)', prompt: "Let's ______ at the station.", options: ['meeting', 'meet', 'meets'], correctOptionIndex: 1 },
      { title: 'Planning Check (3/3)', prompt: 'Which detail tells us where to meet?', options: ['Place', 'Date', 'Task'], correctOptionIndex: 0 },
    ],
    emoji: { description: 'Chat and trip planning: decode the plan', content: ['💬 + 📞 + 📅 + 📍 + 🎫'], options: ['Chat or call to confirm the date, place, and tickets.', 'Buy a jacket because it is raining.', 'Order a sandwich and juice.'], correctOptionIndex: 0 },
    production: [
      { label: 'Help', prompt: 'Ask for help politely.', es: 'Pide ayuda con cortesía.' },
      { label: 'Repeat', prompt: 'Ask someone to repeat a detail.', es: 'Pide que repitan un detalle.' },
      { label: 'Date', prompt: 'Suggest a date and time.', es: 'Sugiere una fecha y hora.' },
      { label: 'Place', prompt: 'Choose and confirm a meeting place.', es: 'Elige y confirma un lugar de encuentro.' },
      { label: 'Task', prompt: 'Assign two tasks for a trip.', es: 'Asigna dos tareas para un viaje.' },
    ],
    quiz: [
      { title: 'Quiz (1/3)', prompt: 'Choose the most polite help request.', options: ['Can you help me, please?', 'Help now.', 'You helping me.'], correctOptionIndex: 0 },
      { title: 'Quiz (2/3)', prompt: 'Which phrase checks information?', options: ['Did you say 8:30?', 'I 8:30 say.', 'Where information does?'], correctOptionIndex: 0 },
      { title: 'Quiz (3/3)', prompt: 'Complete: You bring the snacks, ______ I will buy the tickets.', options: ['and', 'because is', 'to'], correctOptionIndex: 0 },
    ],
    roleplay: { title: 'Roleplay: Plan the Trip 🎭 / Planeen el viaje', description: 'Solve a planning problem by chat or phone.', content: ['Student A: Ask for help and propose a date, time, and place.', 'Student B: Clarify one detail and accept two tasks.', 'Mission: Finish by repeating the complete final plan.'] },
    wrap: ['Level challenge complete! You can ask for help and repair a conversation.', 'You can also organize and confirm a simple group plan.'],
    homework: ['Write an eight-line chat planning a small event or trip.', 'Include a help request, clarification, date, time, place, and two tasks.'],
    videoTask: ['Watch the help-call and planning video.', 'Write 5 polite phrases and one complete plan summary.'],
  },
};

const wheelColors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];

const lessonVideoUrls: Record<string, string> = {
  'c-teens-basic-1-1': 'https://www.youtube.com/embed/YIUigREaLMk',
  'c-teens-basic-1-2': 'https://www.youtube.com/embed/slKV2AiUOFk',
  'c-teens-basic-1-3': 'https://www.youtube.com/embed/twyxU1zJUQY',
  'c-teens-basic-1-4': 'https://www.youtube.com/embed/L-KXWf9iAOs',
  'c-teens-basic-1-5': 'https://www.youtube.com/embed/jMnNW-RgK9k',
  'c-teens-basic-1-6': 'https://www.youtube.com/embed/UFnQ0gxef2A',
  'c-teens-basic-1-7': 'https://www.youtube.com/embed/kdQYKdbAiFs',
  'c-teens-basic-1-8': 'https://www.youtube.com/embed/0cmI_TrMT8I',
  'c-teens-basic-1-9': 'https://www.youtube.com/embed/Db8_yLyT1GM',
  'c-teens-basic-1-10': 'https://www.youtube.com/embed/u40ZKHC98k0',
};

function toWheelItems(prompts: WheelPrompt[]) {
  return prompts.map((item, index) => ({
    ...item,
    color: wheelColors[index % wheelColors.length],
  }));
}

function defaultLocalImage(classId: string, slideNumber: number): string {
  const match = classId.match(/(\d+)$/);
  const classNum = match ? match[1].padStart(2, '0') : '01';
  const slideNum = String(slideNumber).padStart(2, '0');
  return `/images/teens-basic-1-class-${classNum}/slide-${slideNum}.jpg`;
}

function findImage(slides: ClassSlide[], classId: string, slideNumber: number): string {
  const legacyId = `Diapositiva ${slideNumber}`;
  const found = slides.find((slide) => slide.id === legacyId || slide.id === `slide-${slideNumber}`)?.imageUrl;
  return found || defaultLocalImage(classId, slideNumber);
}

function addImage(slide: ClassSlide, imageUrl?: string): ClassSlide {
  return imageUrl ? { ...slide, imageUrl } : slide;
}

function choiceSlide(id: string, spec: ChoiceSlide, bgColor: string, imageUrl?: string): ClassSlide {
  return addImage({
    id,
    title: spec.title,
    description: 'Choose the best answer. / Elige la mejor respuesta.',
    content: [spec.prompt],
    options: spec.options,
    correctOptionIndex: spec.correctOptionIndex,
    bgColor,
  }, imageUrl);
}

function createRoleplayData(plan: TeenBasicOnePlan): NonNullable<ClassSlide['roleplay']> {
  const scenario = plan.roleplay.title
    .split('/')[0]
    .replace(/^Roleplay:\s*/i, '')
    .replace(/\p{Extended_Pictographic}/gu, '')
    .trim();
  const usefulPhrases = plan.grammar
    .flatMap((slide) => slide.content)
    .filter((line) => /[.?!]$/.test(line) && line.length <= 90)
    .slice(0, 6);

  return {
    scenario,
    situation: plan.roleplay.description,
    players: {
      aNamePlaceholder: 'Student A',
      bNamePlaceholder: 'Student B',
    },
    roles: {
      a: {
        label: 'Student A',
        goal: plan.roleplay.content[0].replace(/^Student A:\s*/i, ''),
      },
      b: {
        label: 'Student B',
        goal: plan.roleplay.content[1].replace(/^Student B:\s*/i, ''),
      },
    },
    mission: plan.roleplay.content,
    usefulPhrases,
    successChecklist: [
      'Both students completed their role',
      'Used at least 2 useful phrases',
      'Asked and answered one clear question',
      'Completed the final mission',
    ],
    victoryMessage: 'Mission complete! Switch roles and try it once more.',
  };
}

function organizeClass(cls: CurriculumClass): CurriculumClass {
  const plan = plans[cls.id];
  if (!plan) return cls;

  const oldSlides = cls.sections.flatMap((section) => section.slides);
  const image = (number: number) => findImage(oldSlides, cls.id, number);
  const emojiImage = oldSlides.find((slide) => slide.type === 'emoji-game')?.imageUrl || defaultLocalImage(cls.id, 13);
  const oldBoss = oldSlides.find((slide) => slide.type === 'speaking-boss-battle');
  const oldVideo = oldSlides.find((slide) => slide.type === 'video');

  const boss: ClassSlide = {
    ...(oldBoss || { id: 'slide-boss-battle' }),
    id: 'slide-boss-battle',
    title: 'Speaking Boss Battle / Batalla oral final',
    description: "Defeat the boss with today's English. / Supera el reto con el inglés de hoy.",
    type: 'speaking-boss-battle',
    imageUrl: oldBoss?.imageUrl || defaultLocalImage(cls.id, 18),
    content: [`Defeat the boss using ${plan.welcomeDescription}.`],
    bgColor: 'bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500',
  };

  const sections = cls.sections;

  return {
    ...cls,
    title: plan.classTitle,
    description: plan.description,
    objective: plan.objective,
    sections: [
      {
        ...sections[0],
        id: 's1',
        title: '1. Warm-up / 1. Calentamiento',
        duration: '10 minutos',
        objective: 'Activate prior knowledge and introduce the lesson mission.',
        action: 'Usar la ruleta y pedir respuestas completas pero breves.',
        slides: [
          addImage({ id: 'slide-1', title: plan.welcomeTitle, description: plan.welcomeDescription, content: plan.welcome, bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600' }, image(1)),
          addImage({ id: 'slide-2', title: 'Warm-up Wheel / Ruleta de calentamiento', description: 'Spin, answer, and ask one follow-up question.', type: 'spinning-wheel', content: ['Spin the wheel.', 'Answer with one complete sentence.', 'Ask your partner one related question.'], wheelItems: toWheelItems(plan.warmup), bgColor: 'bg-gradient-to-br from-purple-500 to-fuchsia-600' }, image(2)),
          addImage({ id: 'slide-3', title: "Today's Goals 🎯 / Objetivos de hoy 🎯", description: 'By the end of class, you can...', content: plan.objectives, bgColor: 'bg-gradient-to-br from-fuchsia-500 to-pink-600' }, image(3)),
        ],
      },
      {
        ...sections[1],
        id: 's2',
        title: '2. Grammar / Vocabulary / 2. Gramática y vocabulario',
        duration: '20 minutos',
        objective: 'Present the vocabulary and structures needed for the lesson task.',
        action: 'Modelar los ejemplos y comprobar comprensión con preguntas breves.',
        slides: plan.grammar.map((item, index) => addImage({
          id: `slide-${index + 4}`,
          ...item,
          type: 'normal',
          bgColor: [
            'bg-gradient-to-br from-blue-500 to-cyan-600',
            'bg-gradient-to-br from-cyan-500 to-teal-600',
            'bg-gradient-to-br from-teal-500 to-emerald-600',
            'bg-gradient-to-br from-emerald-500 to-green-600',
            'bg-gradient-to-br from-green-500 to-lime-600',
          ][index],
        }, image(index + 4))),
      },
      {
        ...sections[2],
        id: 's3',
        title: '3. Practice & Concept Checking / 3. Práctica y comprensión',
        duration: '15 minutos',
        objective: 'Read a clear context and answer three controlled questions.',
        action: 'Pedir una justificación oral antes de revelar cada respuesta.',
        slides: [
          addImage({ id: 'slide-9', ...plan.context, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600' }, image(9)),
          choiceSlide('slide-10', plan.practice[0], 'bg-gradient-to-br from-orange-400 to-red-500', image(10)),
          choiceSlide('slide-11', plan.practice[1], 'bg-gradient-to-br from-orange-500 to-rose-600', image(11)),
          choiceSlide('slide-12', plan.practice[2], 'bg-gradient-to-br from-rose-500 to-pink-600', image(12)),
          addImage({ id: 'slide-13', title: 'Emoji Mission / Misión emoji', description: plan.emoji.description, type: 'emoji-game', content: plan.emoji.content, options: plan.emoji.options, correctOptionIndex: plan.emoji.correctOptionIndex, bgColor: 'bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700' }, emojiImage || image(13)),
        ],
      },
      {
        ...sections[3],
        id: 's4',
        title: '4. Production & Quiz / 4. Producción y quiz',
        duration: '15 minutos',
        objective: 'Use the target language in guided speaking and a final roleplay.',
        action: 'Dar tiempo para pensar, exigir frases completas y cerrar con el roleplay.',
        slides: [
          addImage({ id: 'slide-14', title: 'Speaking Challenge 💬 / Reto oral 💬', description: 'Spin and answer with a complete idea.', type: 'spinning-wheel', content: ['Spin the wheel and speak with detail.'], wheelItems: toWheelItems(plan.production), bgColor: 'bg-gradient-to-br from-emerald-500 to-teal-600' }, image(14)),
          choiceSlide('slide-15', plan.quiz[0], 'bg-gradient-to-br from-pink-500 to-rose-600', image(15)),
          choiceSlide('slide-16', plan.quiz[1], 'bg-gradient-to-br from-rose-500 to-fuchsia-600', image(16)),
          choiceSlide('slide-17', plan.quiz[2], 'bg-gradient-to-br from-fuchsia-500 to-purple-600', image(17)),
          boss,
          addImage({ id: 'slide-18', ...plan.roleplay, type: 'speaking-scene', speakingScene: resolveSpeakingScene({ ...plan.roleplay, id: 'slide-18' } as any, plan.classTitle), roleplay: createRoleplayData(plan), bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-700' }, image(18) || image(19)),
        ],
      },
      {
        ...sections[4],
        id: 's5',
        title: '5. Wrap-up & Homework / 5. Cierre y tarea',
        duration: '5 minutos',
        objective: 'Review the achievement and assign specific follow-up practice.',
        action: 'Confirmar que el estudiante entiende exactamente qué debe entregar.',
        slides: [
          addImage({ id: 'slide-19', title: 'Class Complete! 🏆 / ¡Clase completada! 🏆', description: 'Today’s achievement / Logro de hoy', content: plan.wrap, bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500' }, image(20)),
          addImage({ id: 'slide-20', title: 'Homework 📝 / Tarea 📝', description: 'Create and write. / Crea y escribe.', type: 'homework', content: plan.homework, bgColor: 'bg-gradient-to-br from-violet-500 to-fuchsia-600' }, image(21)),
          addImage({ id: 'slide-21', title: 'Video Homework 📹 / Tarea en video 📹', description: 'Watch, notice, and use the language.', type: 'video', videoUrl: lessonVideoUrls[cls.id] || oldVideo?.videoUrl, content: plan.videoTask, bgColor: 'bg-gradient-to-br from-slate-800 to-indigo-900' }, image(22)),
        ],
      },
    ],
  };
}

export function organizeTeenBasicOneLevel(levels: CurriculumLevel[]) {
  const level = levels.find((item) => item.id === 'teens-basic-1');
  if (!level) return;

  level.classes = level.classes.map(organizeClass);
}
