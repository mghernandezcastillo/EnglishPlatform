import { CurriculumClass, CurriculumLevel } from '../types';
import { buildBlueprintClass, quiz } from './classBlueprintUtils';

type KidsClassData = {
  id: string;
  objective: string;
  words: [string, string, string, string];
  extraWords: [string, string, string, string];
  frames: [string, string, string];
  models: [string, string, string];
  context: [string, string, string];
  checks: [ReturnType<typeof quiz>, ReturnType<typeof quiz>, ReturnType<typeof quiz>];
  emoji: { content: [string]; options: [string, string, string]; correctOptionIndex: 0 | 1 | 2 };
  talk: [string, string, string];
  share: [string, string, string];
  homework: [string, string, string];
};

type SeedClass = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
};

function getFirstImage(cls: CurriculumClass): string {
  for (const section of cls.sections) {
    for (const slide of section.slides) {
      if (slide.imageUrl) return slide.imageUrl;
    }
  }
  return '';
}

function getFirstVideo(cls: CurriculumClass): string {
  for (const section of cls.sections) {
    for (const slide of section.slides) {
      if (slide.videoUrl) return slide.videoUrl;
    }
  }
  return 'https://www.youtube.com/embed/tVlcKp3bWH8';
}

function cleanTheme(title: string): string {
  return title.replace(/^Class \d+:\s*/i, '').replace(/^Clase \d+:\s*/i, '').replace(/\s*\/.*$/, '').trim();
}

function rotationSeed(id: string, offset: number): 0 | 1 | 2 {
  return ((Array.from(id).reduce((total, char) => total + char.charCodeAt(0), 0) + offset) % 3) as 0 | 1 | 2;
}

function rotateQuizAnswer<T extends { options: [string, string, string]; correctOptionIndex: 0 | 1 | 2 }>(item: T, shift: 0 | 1 | 2): T {
  if (shift === 0) return item;
  const correct = item.options[item.correctOptionIndex];
  const options = [...item.options.slice(shift), ...item.options.slice(0, shift)] as [string, string, string];
  return {
    ...item,
    options,
    correctOptionIndex: options.indexOf(correct) as 0 | 1 | 2,
  };
}

function buildKidsClass(seed: SeedClass, data: KidsClassData): CurriculumClass {
  const theme = cleanTheme(seed.title);
  const checks = data.checks.map((item, index) => rotateQuizAnswer(item, rotationSeed(seed.id, index))) as KidsClassData['checks'];
  const emoji = rotateQuizAnswer(data.emoji, rotationSeed(seed.id, 4));
  const funChecks = [
    quiz(`Which sentence uses ${data.words[0]}?`, [data.models[0], data.models[1], data.models[2]], 0),
    quiz(`Which sentence uses ${data.words[1]}?`, [data.models[1], data.models[0], data.models[2]], 0),
    quiz(`Which sentence uses ${data.words[2]}?`, [data.models[2], data.models[0], data.models[1]], 0),
  ].map((item, index) => rotateQuizAnswer(item, rotationSeed(seed.id, index + 6))) as [ReturnType<typeof quiz>, ReturnType<typeof quiz>, ReturnType<typeof quiz>];

  return buildBlueprintClass({
    id: seed.id,
    title: seed.title,
    description: seed.description,
    objective: data.objective,
    welcome: {
      title: `${theme}! / ${theme}!`,
      content: [`Today's topic is ${theme}.`, `Say the words: ${data.words[0]}, ${data.words[1]}, ${data.words[2]}.`, 'Let us speak in short clear sentences.'],
      imageUrl: seed.imageUrl,
    },
    warmup: {
      title: 'Warm-up / Calentamiento',
      content: [`Say: ${data.words[0]}.`, `Say: ${data.words[1]}.`, `Say: ${data.words[2]}.`],
    },
    goals: [`Learn words about ${theme}.`, 'Answer simple questions in English.', 'Use short complete sentences with confidence.'],
    grammarSlides: [
      { title: 'Key Words / Palabras', content: [...data.words], imageUrl: seed.imageUrl },
      { title: 'More Words / Mas palabras', content: [...data.extraWords] },
      { title: 'Sentence Frames / Estructuras', content: [...data.frames] },
      { title: 'Model Sentences / Modelos', content: [...data.models], imageUrl: seed.imageUrl },
      { title: 'Mini Review / Repaso', content: [`Can you say ${data.words[0]}?`, `Can you say ${data.words[1]}?`, `Can you say ${data.words[2]}?`] },
    ],
    context: { title: 'Mini Story / Mini historia', content: data.context, imageUrl: seed.imageUrl },
    checks,
    emoji: { prompt: 'Emoji Mission / Mision Emoji', content: emoji.content, options: emoji.options, correctOptionIndex: emoji.correctOptionIndex },
    talk: { title: "Let's Talk! / A hablar", content: data.talk, imageUrl: seed.imageUrl },
    funChecks,
    share: { title: 'Share Time / Comparte', content: data.share, imageUrl: seed.imageUrl },
    summary: { title: 'Great Job! / Muy bien', content: [`You used words about ${theme}.`, 'You answered simple questions in English.', 'Keep practicing the key words out loud.'], imageUrl: seed.imageUrl },
    homework: data.homework,
    video: { url: seed.videoUrl, content: ['Watch the video and listen carefully.', `Repeat two words about ${theme}.`, 'Show one new word next class.'] },
    palette: {
      warmup: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      grammar: 'bg-gradient-to-br from-sky-500 to-cyan-600',
      practice: 'bg-gradient-to-br from-pink-400 to-rose-500',
      production: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      wrap: 'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    },
  });
}

const kidsClassSpecs: Record<string, KidsClassData[]> = {
  'basic-zero': [
    {
      id: 'c-bz-1',
      objective: 'Saludar y reconocer colores basicos en ingles.',
      words: ['hello', 'good morning', 'bye bye', 'red'],
      extraWords: ['blue', 'yellow', 'green', 'friend'],
      frames: ['Hello, I am Mia.', 'My favorite color is red.', 'Bye bye, my friend.'],
      models: ['Hello! I am happy today.', 'I like blue and yellow.', 'Bye bye! See you soon.'],
      context: ['Hello! My name is Leo.', 'I have a red bag and a blue book.', 'Bye bye, my friend!'],
      checks: [
        quiz('Which word is a greeting?', ['hello', 'green', 'book'], 0),
        quiz('Which word is a color?', ['yellow', 'teacher', 'run'], 0),
        quiz('Choose the correct sentence.', ['My favorite color is green.', 'My favorite color green is.', 'I am color favorite green.'], 0),
      ],
      emoji: { content: ['👋 + 🔴 + 😀'], options: ['Hello! I like red.', 'The apple is sleepy.', 'Good night to the chair.'], correctOptionIndex: 0 },
      talk: ['Say hello and your name.', 'Say two colors you like.', 'Say bye bye at the end.'],
      share: ['Show one object with a color.', 'Say the color in English.', 'Ask your partner: What color is it?'],
      homework: ['Practice hello and bye bye at home.', 'Say three colors to your family.', 'Draw one object in your favorite color.'],
    },
    {
      id: 'c-bz-2',
      objective: 'Contar numeros pequenos y nombrar animales basicos.',
      words: ['one', 'two', 'three', 'cat'],
      extraWords: ['dog', 'bird', 'fish', 'four'],
      frames: ['I see one cat.', 'I see two dogs.', 'I can count to four.'],
      models: ['The bird is number three.', 'I like the fish.', 'One dog and two cats.'],
      context: ['I see one cat and two dogs.', 'The bird is small.', 'I can count the animals.'],
      checks: [
        quiz('Which word is a number?', ['three', 'cat', 'blue'], 0),
        quiz('Which word is an animal?', ['dog', 'seven', 'chair'], 0),
        quiz('Choose the correct sentence.', ['I see two cats.', 'I see cat two.', 'I are two cats.'], 0),
      ],
      emoji: { content: ['2️⃣ + 🐶 + 1️⃣ + 🐱'], options: ['Two dogs and one cat.', 'One dog and two fish.', 'Three birds are blue.'], correctOptionIndex: 0 },
      talk: ['Count from one to four.', 'Name two animals.', 'Say how many animals you see.'],
      share: ['Show an animal toy or picture.', 'Count it with your partner.', 'Say: I see one ...'],
      homework: ['Count objects from one to four.', 'Say two animal names.', 'Draw your favorite animal.'],
    },
    {
      id: 'c-bz-3',
      objective: 'Nombrar partes del cuerpo y acciones simples.',
      words: ['head', 'hands', 'legs', 'jump'],
      extraWords: ['run', 'clap', 'turn', 'body'],
      frames: ['This is my head.', 'I clap my hands.', 'I can jump and run.'],
      models: ['My legs can jump.', 'I turn my body.', 'Clap your hands with me.'],
      context: ['This is my head and these are my hands.', 'I can jump, clap, and run.', 'My body is ready to move.'],
      checks: [
        quiz('Which word is a body part?', ['head', 'green', 'pizza'], 0),
        quiz('Which word is an action?', ['jump', 'apple', 'book'], 0),
        quiz('Choose the correct sentence.', ['I clap my hands.', 'I hands my clap.', 'I am clap hands.'], 0),
      ],
      emoji: { content: ['👏 + 🦵 + 🏃'], options: ['Clap, jump, and run!', 'My book is sleeping.', 'Three blue shoes.'], correctOptionIndex: 0 },
      talk: ['Point to your head and hands.', 'Say one action you can do.', 'Move and say the action.'],
      share: ['Play Simon Says with one partner.', 'Use one body word and one action.', 'Say the action clearly.'],
      homework: ['Say three body words at home.', 'Do one action and name it.', 'Draw a stick figure and label one part.'],
    },
    {
      id: 'c-bz-4',
      objective: 'Hablar de juguetes favoritos con palabras simples.',
      words: ['ball', 'car', 'doll', 'kite'],
      extraWords: ['toy', 'big', 'small', 'favorite'],
      frames: ['I have a ball.', 'My favorite toy is a car.', 'The doll is small.'],
      models: ['The kite is big and fun.', 'I like my blue ball.', 'This doll is my favorite toy.'],
      context: ['I have a ball and a car.', 'My favorite toy is the kite.', 'The doll is small and nice.'],
      checks: [
        quiz('Which word is a toy?', ['ball', 'teacher', 'banana'], 0),
        quiz('Which sentence is correct?', ['My favorite toy is a car.', 'My favorite toy car is.', 'I am toy favorite car.'], 0),
        quiz('Which word means not big?', ['small', 'green', 'jump'], 0),
      ],
      emoji: { content: ['🪁 + ❤️ + 🚗'], options: ['I like my kite and my car.', 'The car is eating the kite.', 'Three kites are Monday.'], correctOptionIndex: 0 },
      talk: ['Show one toy or picture.', 'Say its name in English.', 'Say if it is big or small.'],
      share: ['Ask: What is your favorite toy?', 'Answer with a full sentence.', 'Say one color if you can.'],
      homework: ['Say two toy words at home.', 'Tell your family your favorite toy.', 'Draw one toy and color it.'],
    },
    {
      id: 'c-bz-5',
      objective: 'Nombrar frutas y expresar gustos simples.',
      words: ['apple', 'banana', 'grapes', 'strawberry'],
      extraWords: ['fruit', 'yummy', 'red', 'sweet'],
      frames: ['I like apples.', 'The banana is yellow.', 'Strawberries are yummy.'],
      models: ['Grapes are small and sweet.', 'My favorite fruit is the apple.', 'I like red strawberries.'],
      context: ['I have an apple and a banana.', 'The grapes are small.', 'The strawberry is red and yummy.'],
      checks: [
        quiz('Which word is a fruit?', ['banana', 'pencil', 'boots'], 0),
        quiz('Which color matches a banana?', ['yellow', 'purple', 'gray'], 0),
        quiz('Choose the correct sentence.', ['I like apples.', 'I apples like am.', 'I like appleing.'], 0),
      ],
      emoji: { content: ['🍎 + 🍌 + 😋'], options: ['Apples and bananas are yummy.', 'The apple is a teacher.', 'Bananas can jump high.'], correctOptionIndex: 0 },
      talk: ['Name two fruits.', 'Say your favorite fruit.', 'Say if it is yummy.'],
      share: ['Show a fruit or picture.', 'Say the color and name.', 'Ask your partner: Do you like it?'],
      homework: ['Practice four fruit words.', 'Tell your family your favorite fruit.', 'Draw one fruit and color it.'],
    },
    {
      id: 'c-bz-6',
      objective: 'Reconocer formas basicas en objetos cotidianos.',
      words: ['circle', 'square', 'triangle', 'star'],
      extraWords: ['shape', 'round', 'point', 'draw'],
      frames: ['The sun is a circle.', 'The box is a square.', 'I can draw a star.'],
      models: ['A triangle has three sides.', 'The star has points.', 'This shape is round.'],
      context: ['I see a circle and a square.', 'The triangle is on my page.', 'I can draw a star.'],
      checks: [
        quiz('Which word is a shape?', ['circle', 'giraffe', 'sandwich'], 0),
        quiz('Which shape has three sides?', ['triangle', 'star', 'circle'], 0),
        quiz('Choose the correct sentence.', ['I can draw a square.', 'I can square a draw.', 'I am draw square.'], 0),
      ],
      emoji: { content: ['⭐ + 🔺 + ⭕'], options: ['Star, triangle, and circle.', 'The star is a bus.', 'The circle can fly.'], correctOptionIndex: 0 },
      talk: ['Say two shapes you know.', 'Point to one shape in the room.', 'Say: I can draw a ...'],
      share: ['Draw one shape for your partner.', 'Name it in English.', 'Ask your partner to name another shape.'],
      homework: ['Find two shapes at home.', 'Say their names in English.', 'Draw a star and a triangle.'],
    },
    {
      id: 'c-bz-7',
      objective: 'Nombrar utiles escolares y usarlos en frases simples.',
      words: ['pencil', 'book', 'eraser', 'bag'],
      extraWords: ['school', 'desk', 'class', 'open'],
      frames: ['This is my pencil.', 'The book is in my bag.', 'I open my book in class.'],
      models: ['My eraser is on the desk.', 'I carry my bag to school.', 'The pencil is small and yellow.'],
      context: ['I put my book in my bag.', 'The pencil is on my desk.', 'I use my eraser in class.'],
      checks: [
        quiz('Which word is a school item?', ['book', 'cow', 'pizza'], 0),
        quiz('Which sentence is correct?', ['The book is in my bag.', 'The book bag is my in.', 'I book in bag am.'], 0),
        quiz('Which word matches class?', ['school', 'banana', 'rain'], 0),
      ],
      emoji: { content: ['✏️ + 📘 + 🎒'], options: ['My pencil and book are in my bag.', 'The pencil is a sandwich.', 'Books can moo on farms.'], correctOptionIndex: 0 },
      talk: ['Show one school item.', 'Say its name in English.', 'Say where it is.'],
      share: ['Ask: Where is your pencil?', 'Answer with a short sentence.', 'Show one thing from your bag if possible.'],
      homework: ['Say four school words.', 'Put one item in your bag and say it.', 'Practice the sentence: This is my book.'],
    },
    {
      id: 'c-bz-8',
      objective: 'Identificar animales de granja y describirlos con palabras simples.',
      words: ['cow', 'pig', 'duck', 'horse'],
      extraWords: ['farm', 'big', 'small', 'animal'],
      frames: ['The cow is big.', 'The duck is small.', 'I see a horse on the farm.'],
      models: ['The pig is pink.', 'The horse can run fast.', 'A duck lives on the farm.'],
      context: ['I see a cow and a pig.', 'The horse is big and strong.', 'The duck is small on the farm.'],
      checks: [
        quiz('Which word is a farm animal?', ['cow', 'teacher', 'circle'], 0),
        quiz('Which sentence is correct?', ['The pig is pink.', 'The pig pink is.', 'The pig is a book.'], 0),
        quiz('Which place matches these animals?', ['farm', 'moon', 'classroom'], 0),
      ],
      emoji: { content: ['🐮 + 🐷 + 🦆'], options: ['Cow, pig, and duck on the farm.', 'Three pencils in a box.', 'The duck is a backpack.'], correctOptionIndex: 0 },
      talk: ['Name two farm animals.', 'Say which animal is big or small.', 'Say: I like the ...'],
      share: ['Make one animal sound and name it.', 'Ask your partner for another farm animal.', 'Say one color if you can.'],
      homework: ['Practice four farm animal words.', 'Draw one farm animal.', 'Tell your family its name in English.'],
    },
  ],
  'basic-explorer': [
    {
      id: 'c-be-1',
      objective: 'Hablar de familia y emociones con frases simples.',
      words: ['mom', 'dad', 'brother', 'sister'],
      extraWords: ['happy', 'sad', 'angry', 'surprised'],
      frames: ['My mom is happy.', 'My brother is sad.', 'My dad is funny.'],
      models: ['My sister is happy today.', 'My dad is not angry.', 'My family is great.'],
      context: ['My mom is happy and my dad is calm.', 'My brother is surprised today.', 'I love my family.'],
      checks: [
        quiz('Which word is a family member?', ['sister', 'pizza', 'rain'], 0),
        quiz('Which word is a feeling?', ['happy', 'table', 'train'], 0),
        quiz('Choose the correct sentence.', ['My mom is happy.', 'My mom happy is a.', 'My mom is yellow.'], 0),
      ],
      emoji: { content: ['👩 + 😀 + 👦'], options: ['My family is happy.', 'My family is a sandwich.', 'The boy is under the table.'], correctOptionIndex: 0 },
      talk: ['Name two family members.', 'Say one feeling for each.', 'Use My ... is ...'],
      share: ['Show a family photo or draw one.', 'Say who is happy or sad.', 'Ask your partner one family question.'],
      homework: ['Say four family words at home.', 'Say two feelings in English.', 'Draw one family member and one feeling face.'],
    },
    {
      id: 'c-be-2',
      objective: 'Nombrar comida rapida y expresar preferencias simples.',
      words: ['pizza', 'burger', 'fries', 'soda'],
      extraWords: ['hot', 'yummy', 'eat', 'like'],
      frames: ['I like pizza.', 'The burger is hot.', 'Fries are yummy.'],
      models: ['I eat fries on Saturday.', 'My favorite fast food is pizza.', 'I do not like soda very much.'],
      context: ['I like pizza and fries.', 'The burger is hot and yummy.', 'My friend drinks soda.'],
      checks: [
        quiz('Which word is fast food?', ['burger', 'whale', 'pencil'], 0),
        quiz('Which sentence is correct?', ['I like pizza.', 'I pizza like am.', 'I like pizzaing.'], 0),
        quiz('Which word matches drink?', ['soda', 'boots', 'green'], 0),
      ],
      emoji: { content: ['🍕 + 🍟 + 😋'], options: ['Pizza and fries are yummy.', 'The fries are a backpack.', 'I count the burger to ten.'], correctOptionIndex: 0 },
      talk: ['Say your favorite fast food.', 'Say one food you do not like.', 'Ask your partner: Do you like pizza?'],
      share: ['Pretend to order one food.', 'Say please at the end.', 'Ask your partner what they want.'],
      homework: ['Say four fast food words.', 'Tell your family your favorite one.', 'Draw a burger or pizza.'],
    },
    {
      id: 'c-be-3',
      objective: 'Relacionar ropa con clima usando frases cortas.',
      words: ['shirt', 'jacket', 'boots', 'hat'],
      extraWords: ['sunny', 'rainy', 'cold', 'windy'],
      frames: ['I wear a jacket when it is cold.', 'Boots are good for rain.', 'I wear a hat on sunny days.'],
      models: ['Today is rainy, so I wear boots.', 'It is cold, and I need my jacket.', 'My hat is for sunny weather.'],
      context: ['It is rainy today.', 'I wear my jacket and boots.', 'My hat is for a sunny day.'],
      checks: [
        quiz('Which word is clothing?', ['jacket', 'river', 'lion'], 0),
        quiz('Which weather word fits rain?', ['rainy', 'dry book', 'triangle'], 0),
        quiz('Choose the correct sentence.', ['I wear boots when it is rainy.', 'I boots wear rainy is.', 'I rainy boots am.'], 0),
      ],
      emoji: { content: ['🌧️ + 👢 + 🧥'], options: ['It is rainy, so I wear boots and a jacket.', 'The jacket is eating the rain.', 'Boots are on the moon.'], correctOptionIndex: 0 },
      talk: ['Say what you wear on a cold day.', 'Say what you wear on a sunny day.', 'Use one weather word.'],
      share: ['Show one clothing item if possible.', 'Say the weather for it.', 'Ask your partner: What do you wear?'],
      homework: ['Practice four clothing words.', 'Practice four weather words.', 'Draw one outfit for a rainy day.'],
    },
    {
      id: 'c-be-4',
      objective: 'Hablar de elementos de la naturaleza con vocabulario simple.',
      words: ['tree', 'river', 'mountain', 'flower'],
      extraWords: ['green', 'big', 'small', 'nature'],
      frames: ['The tree is green.', 'The mountain is big.', 'The flower is small.'],
      models: ['I see a river in nature.', 'The flower is pretty and small.', 'The mountain is very big.'],
      context: ['The tree is near the river.', 'I see a mountain and a flower.', 'Nature is beautiful today.'],
      checks: [
        quiz('Which word belongs to nature?', ['river', 'burger', 'eraser'], 0),
        quiz('Which sentence is correct?', ['The mountain is big.', 'The mountain big is.', 'The mountain is a pencil.'], 0),
        quiz('Which color fits a tree?', ['green', 'silver', 'purple pizza'], 0),
      ],
      emoji: { content: ['🌳 + 🌸 + 🏔️'], options: ['I see a tree, a flower, and a mountain.', 'The mountain is a notebook.', 'Flowers can drive buses.'], correctOptionIndex: 0 },
      talk: ['Name two things in nature.', 'Say big or small.', 'Say which one you like best.'],
      share: ['Draw one thing from nature.', 'Describe it in one sentence.', 'Ask your partner what they see.'],
      homework: ['Say four nature words.', 'Practice one sentence with is.', 'Draw your favorite nature place.'],
    },
    {
      id: 'c-be-5',
      objective: 'Nombrar insectos y describirlos con palabras simples.',
      words: ['butterfly', 'bee', 'ant', 'spider'],
      extraWords: ['small', 'fly', 'many', 'bug'],
      frames: ['The butterfly can fly.', 'The ant is small.', 'I see many bees.'],
      models: ['The spider is small and black.', 'A bee can fly fast.', 'The butterfly is colorful.'],
      context: ['I see a butterfly and a bee.', 'The ant is very small.', 'The spider is on the wall.'],
      checks: [
        quiz('Which word is an insect?', ['bee', 'train', 'shirt'], 0),
        quiz('Which sentence is correct?', ['The butterfly can fly.', 'The butterfly can flying.', 'The butterfly is a desk.'], 0),
        quiz('Which word means little?', ['small', 'mountain', 'teacher'], 0),
      ],
      emoji: { content: ['🦋 + 🐝 + 🕷️'], options: ['A butterfly, a bee, and a spider.', 'Three buses in the sky.', 'The spider is a hamburger.'], correctOptionIndex: 0 },
      talk: ['Name two insects.', 'Say one that can fly.', 'Say one color if you can.'],
      share: ['Pretend to move like one insect.', 'Name it in English.', 'Ask your partner for another insect word.'],
      homework: ['Practice four insect words.', 'Draw one bug.', 'Teach one insect word to your family.'],
    },
    {
      id: 'c-be-6',
      objective: 'Hablar de animales del mar con vocabulario basico.',
      words: ['fish', 'shark', 'turtle', 'octopus'],
      extraWords: ['sea', 'swim', 'blue', 'water'],
      frames: ['The fish can swim.', 'The shark is big.', 'The turtle is in the sea.'],
      models: ['The octopus has many arms.', 'The sea is blue.', 'A turtle can swim in water.'],
      context: ['I see a fish and a turtle.', 'The shark is big in the sea.', 'The octopus is in the blue water.'],
      checks: [
        quiz('Which word is a sea animal?', ['turtle', 'jacket', 'car'], 0),
        quiz('Which sentence is correct?', ['The fish can swim.', 'The fish can swimming.', 'The fish is a school.'], 0),
        quiz('Which word matches the place?', ['sea', 'bedroom', 'orange square'], 0),
      ],
      emoji: { content: ['🐠 + 🐢 + 🌊'], options: ['The fish and turtle are in the sea.', 'The sea is in my bag.', 'The turtle is a shoe.'], correctOptionIndex: 0 },
      talk: ['Name two sea animals.', 'Say which one is big or small.', 'Say: It can swim.'],
      share: ['Show a sea animal picture if possible.', 'Say where it lives.', 'Ask your partner: Do you like sharks?'],
      homework: ['Practice four sea animal words.', 'Say the sentence: The fish can swim.', 'Draw one animal in the sea.'],
    },
    {
      id: 'c-be-7',
      objective: 'Usar verbos de accion con personajes divertidos y movimiento.',
      words: ['run', 'jump', 'fly', 'climb'],
      extraWords: ['hero', 'fast', 'strong', 'can'],
      frames: ['I can run fast.', 'The hero can fly.', 'We can jump high.'],
      models: ['A strong hero can climb.', 'I can run and jump.', 'My hero can fly in the sky.'],
      context: ['The hero can run fast.', 'I can jump and climb too.', 'We can move like heroes.'],
      checks: [
        quiz('Which word is an action?', ['run', 'river', 'burger'], 0),
        quiz('Which sentence is correct?', ['I can jump high.', 'I can high jumping.', 'I jump can a book.'], 0),
        quiz('Which word matches a hero?', ['strong', 'salad', 'Tuesday'], 0),
      ],
      emoji: { content: ['🦸 + 🏃 + 🪽'], options: ['The hero can run and fly.', 'The hero is a sandwich.', 'The wings are on the table.'], correctOptionIndex: 0 },
      talk: ['Say two actions you can do.', 'Say one action a hero can do.', 'Move and say the verb.'],
      share: ['Pretend to be a hero for one action.', 'Name the action in English.', 'Ask your partner to copy you.'],
      homework: ['Practice four action words.', 'Say: I can run and jump.', 'Draw your own action hero.'],
    },
    {
      id: 'c-be-8',
      objective: 'Contar del once al veinte y usar esos numeros en respuestas simples.',
      words: ['eleven', 'twelve', 'thirteen', 'fourteen'],
      extraWords: ['fifteen', 'sixteen', 'seventeen', 'twenty'],
      frames: ['I can count to twenty.', 'I have thirteen crayons.', 'Fourteen is after thirteen.'],
      models: ['Seventeen is a big number for today.', 'I can say eleven and twelve.', 'My team has fifteen points.'],
      context: ['I can count from eleven to twenty.', 'I have fourteen stickers.', 'Seventeen is after sixteen.'],
      checks: [
        quiz('Which number comes after twelve?', ['thirteen', 'ten', 'twenty'], 0),
        quiz('Which option is a teen number?', ['sixteen', 'blue', 'hat'], 0),
        quiz('Choose the correct sentence.', ['I have fifteen pencils.', 'I fifteen have pencils.', 'I am pencils fifteen.'], 0),
      ],
      emoji: { content: ['1️⃣3️⃣ + ✏️ + 😀'], options: ['I have thirteen pencils.', 'I have three bananas.', 'The pencil is rainy.'], correctOptionIndex: 0 },
      talk: ['Count from eleven to twenty.', 'Say one number you like.', 'Use one number in a sentence.'],
      share: ['Count objects with your partner.', 'Say the number in English.', 'Ask your partner to continue the counting.'],
      homework: ['Practice eleven to twenty twice.', 'Count your toys or pencils.', 'Say one teen number to your family.'],
    },
  ],
  'basic-adventurer': [
    {
      id: 'c-ba-1',
      objective: 'Describir animales salvajes con palabras basicas.',
      words: ['lion', 'elephant', 'monkey', 'giraffe'],
      extraWords: ['wild', 'big', 'long', 'tail'],
      frames: ['The lion is wild.', 'The elephant is big.', 'The giraffe has a long neck.'],
      models: ['The monkey has a tail.', 'A lion is a wild animal.', 'The elephant is big and gray.'],
      context: ['I see a lion and an elephant.', 'The monkey is small and funny.', 'The giraffe is tall and wild.'],
      checks: [
        quiz('Which word is a wild animal?', ['lion', 'book', 'pizza'], 0),
        quiz('Which sentence is correct?', ['The elephant is big.', 'The elephant big is.', 'The elephant is a clock.'], 0),
        quiz('Which word matches giraffe?', ['long', 'rainy', 'twelve'], 0),
      ],
      emoji: { content: ['🦁 + 🐘 + 🐒'], options: ['A lion, an elephant, and a monkey.', 'Three school bags in class.', 'The elephant is a pencil.'], correctOptionIndex: 0 },
      talk: ['Name two wild animals.', 'Say which one is big or small.', 'Say your favorite safari animal.'],
      share: ['Act like one wild animal.', 'Name it in English.', 'Ask your partner for another animal.'],
      homework: ['Practice four wild animal words.', 'Say one sentence with is.', 'Draw your favorite safari animal.'],
    },
    {
      id: 'c-ba-2',
      objective: 'Hablar de habitaciones y objetos de la casa.',
      words: ['bedroom', 'kitchen', 'bathroom', 'living room'],
      extraWords: ['bed', 'table', 'door', 'house'],
      frames: ['This is my bedroom.', 'The table is in the kitchen.', 'The bed is in my room.'],
      models: ['The bathroom has a door.', 'My living room is big.', 'The house has many rooms.'],
      context: ['This is my house.', 'The bed is in the bedroom.', 'The table is in the kitchen.'],
      checks: [
        quiz('Which word is a room?', ['kitchen', 'apple', 'horse'], 0),
        quiz('Which sentence is correct?', ['The bed is in the bedroom.', 'The bed bedroom is in.', 'The bed is a bathroom.'], 0),
        quiz('Which word is furniture?', ['table', 'winter', 'bus'], 0),
      ],
      emoji: { content: ['🛏️ + 🚪 + 🏠'], options: ['My bed is in my house.', 'The house can swim.', 'The door is a banana.'], correctOptionIndex: 0 },
      talk: ['Name two rooms in your house.', 'Say one object in a room.', 'Use in with one sentence.'],
      share: ['Draw one room quickly.', 'Say what is in it.', 'Ask your partner: Is it a bedroom or kitchen?'],
      homework: ['Practice four room words.', 'Say one sentence with in.', 'Tell your family one room in English.'],
    },
    {
      id: 'c-ba-3',
      objective: 'Nombrar vehiculos y lugares de la ciudad.',
      words: ['bus', 'car', 'bike', 'train'],
      extraWords: ['town', 'street', 'shop', 'go'],
      frames: ['I go by bus.', 'The car is on the street.', 'The train is big and fast.'],
      models: ['I ride my bike in town.', 'The bus stops near the shop.', 'A car goes on the street.'],
      context: ['I see a bus and a car in town.', 'The bike is small and fast.', 'The train goes to the city.'],
      checks: [
        quiz('Which word is a vehicle?', ['train', 'flower', 'shirt'], 0),
        quiz('Which sentence is correct?', ['I go by bus.', 'I go in bus.', 'I bus go am.'], 0),
        quiz('Which word matches town?', ['street', 'banana', 'triangle'], 0),
      ],
      emoji: { content: ['🚌 + 🚲 + 🏙️'], options: ['A bus and a bike are in town.', 'The town is a backpack.', 'The bus can eat a bike.'], correctOptionIndex: 0 },
      talk: ['Name two vehicles.', 'Say how you go to school or a park.', 'Use by in one sentence.'],
      share: ['Point to a vehicle in a picture.', 'Say where it goes.', 'Ask your partner: Bus or bike?'],
      homework: ['Practice four vehicle words.', 'Say one sentence with by bus or by bike.', 'Draw one vehicle in town.'],
    },
    {
      id: 'c-ba-4',
      objective: 'Hablar de profesiones y lugares de trabajo basicos.',
      words: ['doctor', 'teacher', 'firefighter', 'chef'],
      extraWords: ['hospital', 'school', 'kitchen', 'job'],
      frames: ['A doctor works in a hospital.', 'A teacher works at school.', 'A chef works in a kitchen.'],
      models: ['A firefighter helps people.', 'My favorite job is teacher.', 'The doctor is kind and smart.'],
      context: ['A doctor works in a hospital.', 'A teacher helps children at school.', 'A chef cooks in the kitchen.'],
      checks: [
        quiz('Which word is a job?', ['doctor', 'mountain', 'soda'], 0),
        quiz('Where does a chef work?', ['in a kitchen', 'in the sea', 'in a train'], 0),
        quiz('Choose the correct sentence.', ['A teacher works at school.', 'A teacher school works at.', 'A teacher is a bicycle.'], 0),
      ],
      emoji: { content: ['👩‍⚕️ + 🏫 + 👨‍🍳'], options: ['A doctor, a school, and a chef.', 'The chef is on the moon.', 'School can eat a doctor.'], correctOptionIndex: 0 },
      talk: ['Name two jobs.', 'Say where one job works.', 'Say your favorite job.'],
      share: ['Pretend to be one worker.', 'Say the job in English.', 'Ask your partner if they like that job.'],
      homework: ['Practice four job words.', 'Say one work place in English.', 'Draw a job you like.'],
    },
    {
      id: 'c-ba-5',
      objective: 'Hablar de musica e instrumentos de forma simple.',
      words: ['guitar', 'drums', 'piano', 'sing'],
      extraWords: ['music', 'loud', 'song', 'play'],
      frames: ['I play the guitar.', 'The drums are loud.', 'I like to sing.'],
      models: ['The piano is beautiful.', 'Music makes me happy.', 'I can play and sing.'],
      context: ['I hear music and drums.', 'My friend plays the piano.', 'I like to sing a song.'],
      checks: [
        quiz('Which word is an instrument?', ['guitar', 'winter', 'river'], 0),
        quiz('Which word is an action?', ['sing', 'book', 'green'], 0),
        quiz('Choose the correct sentence.', ['I play the piano.', 'I piano the play.', 'I am piano play.'], 0),
      ],
      emoji: { content: ['🎸 + 🥁 + 🎤'], options: ['I play guitar, drums, and sing.', 'The guitar is a mountain.', 'The song is under the hat.'], correctOptionIndex: 0 },
      talk: ['Name one instrument.', 'Say if you can sing or play.', 'Say your favorite music word.'],
      share: ['Make one music sound or movement.', 'Name the instrument.', 'Ask your partner: Do you like music?'],
      homework: ['Practice three instrument words.', 'Sing one English word from class.', 'Draw your favorite instrument.'],
    },
    {
      id: 'c-ba-6',
      objective: 'Nombrar dias de la semana y usarlos en rutinas simples.',
      words: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      extraWords: ['Friday', 'Saturday', 'Sunday', 'week'],
      frames: ['Monday comes first.', 'I play on Saturday.', 'Sunday is family day.'],
      models: ['Wednesday is in the middle of the week.', 'I go to school on Tuesday.', 'Saturday is fun.'],
      context: ['Monday and Tuesday are school days.', 'I rest on Sunday.', 'Saturday is my favorite day.'],
      checks: [
        quiz('Which word is a day?', ['Friday', 'giraffe', 'blue'], 0),
        quiz('Which day comes after Tuesday?', ['Wednesday', 'Monday', 'Sunday'], 0),
        quiz('Choose the correct sentence.', ['I play soccer on Saturday.', 'I on Saturday soccer play.', 'I am Saturday play.'], 0),
      ],
      emoji: { content: ['📅 + ⚽ + 😄'], options: ['I play on Saturday.', 'The calendar is a sandwich.', 'Saturday is under the ball.'], correctOptionIndex: 0 },
      talk: ['Say three days of the week.', 'Say your favorite day.', 'Say one thing you do on that day.'],
      share: ['Ask your partner: What day is your favorite?', 'Answer with one activity.', 'Count two days together.'],
      homework: ['Practice the days of the week.', 'Say your favorite day to your family.', 'Draw a small weekly calendar.'],
    },
    {
      id: 'c-ba-7',
      objective: 'Pedir cosas en una tienda con frases simples.',
      words: ['apple', 'bread', 'milk', 'cookies'],
      extraWords: ['shop', 'buy', 'want', 'please'],
      frames: ['I want apples, please.', 'We buy bread and milk.', 'Cookies are for the shop basket.'],
      models: ['I want two apples, please.', 'Milk is in the shop.', 'We buy cookies today.'],
      context: ['I go to the shop with my mom.', 'We buy bread, milk, and apples.', 'I say, "I want cookies, please."'],
      checks: [
        quiz('Which word is food from a shop?', ['bread', 'whale', 'boots'], 0),
        quiz('Which sentence is correct?', ['I want milk, please.', 'I want please milk.', 'I milk want am.'], 0),
        quiz('Which word shows polite shopping?', ['please', 'angry', 'triangle'], 0),
      ],
      emoji: { content: ['🛒 + 🍞 + 🥛'], options: ['I buy bread and milk at the shop.', 'The cart is a train.', 'Milk is on the moon.'], correctOptionIndex: 0 },
      talk: ['Say one thing you want to buy.', 'Use please in your sentence.', 'Ask your partner what they want.'],
      share: ['Roleplay a small shop.', 'Say I want ... please.', 'Answer with Here you are.'],
      homework: ['Practice four shop words.', 'Say one shopping sentence at home.', 'Draw a small shopping list.'],
    },
    {
      id: 'c-ba-8',
      objective: 'Hablar de actividades del parque infantil con frases cortas.',
      words: ['slide', 'swing', 'climb', 'playground'],
      extraWords: ['fun', 'fast', 'high', 'friends'],
      frames: ['I like the slide.', 'I can swing high.', 'The playground is fun.'],
      models: ['I climb with my friends.', 'The slide is fast and fun.', 'We play in the playground after school.'],
      context: ['My friends and I go to the playground.', 'I like the swing and the slide.', 'We climb and play together.'],
      checks: [
        quiz('Which word belongs to the playground?', ['swing', 'doctor', 'pizza'], 0),
        quiz('Which sentence is correct?', ['I can swing high.', 'I swing can high.', 'I am high swing.'], 0),
        quiz('Which word means enjoyable?', ['fun', 'cold', 'Monday'], 0),
      ],
      emoji: { content: ['🛝 + 😊 + 👫'], options: ['The playground is fun with friends.', 'The slide is a classroom.', 'Friends can eat the swing.'], correctOptionIndex: 0 },
      talk: ['Name one playground activity.', 'Say if it is fun or fast.', 'Say who you play with.'],
      share: ['Show the action with your arms.', 'Name the activity.', 'Ask your partner what they like in the playground.'],
      homework: ['Practice three playground words.', 'Say one sentence with like.', 'Draw your favorite playground activity.'],
    },
  ],
  'basic-champion': [
    {
      id: 'c-bc-1',
      objective: 'Describir una rutina diaria basica con acciones y horas simples.',
      words: ['wake up', 'eat', 'play', 'sleep'],
      extraWords: ['morning', 'afternoon', 'night', 'routine'],
      frames: ['I wake up in the morning.', 'I play after school.', 'I sleep at night.'],
      models: ['I eat breakfast in the morning.', 'My routine starts early.', 'I play with my friends in the afternoon.'],
      context: ['I wake up in the morning and eat breakfast.', 'I play after school.', 'At night, I sleep.'],
      checks: [
        quiz('Which phrase is part of a routine?', ['wake up', 'blue jacket', 'mountain'], 0),
        quiz('Which time word fits sleep?', ['night', 'pizza', 'teacher'], 0),
        quiz('Choose the correct sentence.', ['I sleep at night.', 'I at night sleep am.', 'I sleeping night at.'], 0),
      ],
      emoji: { content: ['⏰ + 🍽️ + 🌙'], options: ['I wake up, eat, and sleep at night.', 'The moon is in my sandwich.', 'I eat a clock at night.'], correctOptionIndex: 0 },
      talk: ['Say three actions in your routine.', 'Use morning or night.', 'Say one full routine sentence.'],
      share: ['Ask your partner: What time do you wake up?', 'Answer with one activity.', 'Say one thing you do after school.'],
      homework: ['Practice four routine phrases.', 'Say your routine to your family.', 'Draw one morning activity and one night activity.'],
    },
    {
      id: 'c-bc-2',
      objective: 'Hablar de hobbies y deportes con gustos simples.',
      words: ['soccer', 'dance', 'read', 'paint'],
      extraWords: ['hobby', 'sport', 'fun', 'favorite'],
      frames: ['I like soccer.', 'My favorite hobby is painting.', 'Reading is fun.'],
      models: ['I like to dance after school.', 'Soccer is my favorite sport.', 'Painting is calm and fun.'],
      context: ['I like soccer and reading.', 'My friend likes to dance.', 'Painting is my favorite hobby.'],
      checks: [
        quiz('Which word is a sport?', ['soccer', 'banana', 'raincoat'], 0),
        quiz('Which word is a hobby?', ['paint', 'mountain', 'doctor'], 0),
        quiz('Choose the correct sentence.', ['I like to read.', 'I read like to.', 'I am like reading read.'], 0),
      ],
      emoji: { content: ['⚽ + 💃 + 📚'], options: ['I like soccer, dancing, and reading.', 'The book is a soccer ball.', 'Dance is under the chair.'], correctOptionIndex: 0 },
      talk: ['Say your favorite hobby or sport.', 'Say why it is fun.', 'Ask your partner what they like.'],
      share: ['Mime one hobby or sport.', 'Name it in English.', 'Ask your partner: Do you like it?'],
      homework: ['Practice four hobby words.', 'Say your favorite one at home.', 'Draw one hobby or sport you enjoy.'],
    },
    {
      id: 'c-bc-3',
      objective: 'Hablar de celebraciones y vocabulario de fiestas.',
      words: ['birthday', 'cake', 'gift', 'party'],
      extraWords: ['candles', 'happy', 'celebrate', 'holiday'],
      frames: ['It is my birthday.', 'We have a cake at the party.', 'I like birthday gifts.'],
      models: ['The candles are on the cake.', 'We celebrate with a happy party.', 'My holiday is fun and bright.'],
      context: ['Today is my birthday.', 'We have a cake and gifts.', 'The party is happy and fun.'],
      checks: [
        quiz('Which word belongs to a celebration?', ['cake', 'bus', 'triangle'], 0),
        quiz('Which sentence is correct?', ['We have a party.', 'We party have a.', 'We are party a.'], 0),
        quiz('Which word goes on a cake?', ['candles', 'boots', 'river'], 0),
      ],
      emoji: { content: ['🎂 + 🎁 + 🎉'], options: ['Birthday cake, gifts, and a party.', 'The gift is a mountain.', 'The cake can drive.'], correctOptionIndex: 0 },
      talk: ['Say one holiday or birthday word.', 'Say what you like at a party.', 'Ask your partner if they like cake.'],
      share: ['Describe a birthday in one sentence.', 'Say one thing you see at a party.', 'Ask your partner: Do you like gifts?'],
      homework: ['Practice four celebration words.', 'Say one sentence about a party.', 'Draw a birthday cake or a gift.'],
    },
    {
      id: 'c-bc-4',
      objective: 'Nombrar elementos del espacio y hablar de ellos con frases simples.',
      words: ['sun', 'moon', 'planet', 'star'],
      extraWords: ['space', 'rocket', 'astronaut', 'sky'],
      frames: ['The moon is in space.', 'I see a star in the sky.', 'The astronaut is in a rocket.'],
      models: ['The sun is bright.', 'A planet is big in space.', 'The rocket goes to the sky.'],
      context: ['I see the sun, moon, and stars.', 'The planet is in space.', 'The astronaut rides a rocket.'],
      checks: [
        quiz('Which word belongs to space?', ['planet', 'burger', 'bag'], 0),
        quiz('Which sentence is correct?', ['The star is in the sky.', 'The star sky is in.', 'The star is a school.'], 0),
        quiz('Who rides a rocket?', ['astronaut', 'chef', 'cow'], 0),
      ],
      emoji: { content: ['🚀 + 🌙 + ⭐'], options: ['A rocket, the moon, and a star.', 'The rocket is a cookie.', 'The moon can drive a bus.'], correctOptionIndex: 0 },
      talk: ['Name two space words.', 'Say one thing in the sky.', 'Say if you like space.'],
      share: ['Draw one space object.', 'Name it in English.', 'Ask your partner for another space word.'],
      homework: ['Practice four space words.', 'Say one sentence with sky or space.', 'Draw the moon or a rocket.'],
    },
    {
      id: 'c-bc-5',
      objective: 'Hablar de personajes y objetos de cuentos de hadas.',
      words: ['princess', 'dragon', 'castle', 'magic'],
      extraWords: ['story', 'king', 'queen', 'hero'],
      frames: ['The princess is in the castle.', 'The dragon is big.', 'Magic is in the story.'],
      models: ['The king and queen live in the castle.', 'The hero fights the dragon.', 'It is a magic story.'],
      context: ['The princess lives in the castle.', 'The dragon is big and scary.', 'The story has magic and a hero.'],
      checks: [
        quiz('Which word belongs to a fairy tale?', ['dragon', 'eraser', 'bus'], 0),
        quiz('Which sentence is correct?', ['The princess is in the castle.', 'The princess castle is in.', 'The princess is a hamburger.'], 0),
        quiz('Which word fits a magical story?', ['magic', 'raincoat', 'Wednesday'], 0),
      ],
      emoji: { content: ['👑 + 🐉 + 🏰'], options: ['A princess, a dragon, and a castle.', 'The castle is in a sandwich.', 'The dragon reads a notebook.'], correctOptionIndex: 0 },
      talk: ['Name one fairy-tale character.', 'Say one place or object from the story.', 'Say which one you like.'],
      share: ['Tell one short fairy-tale sentence.', 'Use princess, dragon, or castle.', 'Ask your partner for a different story word.'],
      homework: ['Practice four fairy-tale words.', 'Say one magic sentence.', 'Draw a castle or dragon.'],
    },
    {
      id: 'c-bc-6',
      objective: 'Reconocer estaciones y describirlas con clima simple.',
      words: ['spring', 'summer', 'autumn', 'winter'],
      extraWords: ['hot', 'cold', 'flowers', 'snow'],
      frames: ['Summer is hot.', 'Winter is cold.', 'Spring has flowers.'],
      models: ['Autumn has many colors.', 'Snow comes in winter.', 'I like summer because it is hot.'],
      context: ['Spring has flowers and sun.', 'Summer is hot and bright.', 'Winter is cold with snow.'],
      checks: [
        quiz('Which word is a season?', ['winter', 'doctor', 'pizza'], 0),
        quiz('Which season is cold?', ['winter', 'summer', 'spring'], 0),
        quiz('Choose the correct sentence.', ['Spring has flowers.', 'Spring flowers has.', 'Spring is a jacket.'], 0),
      ],
      emoji: { content: ['☀️ + ❄️ + 🌸'], options: ['Summer, winter, and spring.', 'The flower is a snowman.', 'Winter can eat the sun.'], correctOptionIndex: 0 },
      talk: ['Name two seasons.', 'Say which season is hot or cold.', 'Say your favorite season.'],
      share: ['Ask your partner: What season do you like?', 'Answer with one reason.', 'Say one weather word too.'],
      homework: ['Practice the four seasons.', 'Say one sentence with hot or cold.', 'Draw your favorite season.'],
    },
    {
      id: 'c-bc-7',
      objective: 'Nombrar personas que ayudan y decir lo que hacen.',
      words: ['nurse', 'police officer', 'firefighter', 'teacher'],
      extraWords: ['help', 'work', 'school', 'safe'],
      frames: ['A teacher helps at school.', 'A firefighter keeps us safe.', 'A nurse helps sick people.'],
      models: ['The police officer helps the town.', 'A teacher works at school.', 'A firefighter is brave and helpful.'],
      context: ['A teacher works at school.', 'A nurse helps people.', 'A firefighter keeps us safe.'],
      checks: [
        quiz('Which word is a helper job?', ['teacher', 'triangle', 'cookie'], 0),
        quiz('Who works at school?', ['teacher', 'shark', 'rocket'], 0),
        quiz('Choose the correct sentence.', ['A firefighter helps people.', 'A firefighter people helps is.', 'A firefighter is a sandwich.'], 0),
      ],
      emoji: { content: ['🚒 + 👩‍🏫 + 👮'], options: ['Helpers like firefighters, teachers, and police officers.', 'The fire truck is a cake.', 'School is on the moon.'], correctOptionIndex: 0 },
      talk: ['Name two helper jobs.', 'Say what one helper does.', 'Say which helper you like most.'],
      share: ['Pretend to be one helper.', 'Name the job and one action.', 'Ask your partner for another helper.'],
      homework: ['Practice four helper words.', 'Say one sentence with helps.', 'Draw a helper in your town.'],
    },
    {
      id: 'c-bc-8',
      objective: 'Hablar de paises y viajes con lenguaje muy simple.',
      words: ['country', 'city', 'map', 'flag'],
      extraWords: ['travel', 'world', 'visit', 'plane'],
      frames: ['I want to visit a new country.', 'The map shows the world.', 'A flag is for a country.'],
      models: ['I want to travel by plane.', 'This city is on the map.', 'The world has many countries.'],
      context: ['I see a map and a flag.', 'I want to visit a new city.', 'The plane can travel around the world.'],
      checks: [
        quiz('Which word belongs to travel?', ['plane', 'banana', 'eraser'], 0),
        quiz('Which sentence is correct?', ['I want to visit a new country.', 'I want visit a new country.', 'I am country visit want.'], 0),
        quiz('Which thing shows countries?', ['map', 'boots', 'lion'], 0),
      ],
      emoji: { content: ['🗺️ + ✈️ + 🌍'], options: ['A map, a plane, and the world.', 'The world is in my shoe.', 'A plane grows on a tree.'], correctOptionIndex: 0 },
      talk: ['Say one place you want to visit.', 'Say one travel word.', 'Ask your partner about one country or city.'],
      share: ['Point to a place on a map if possible.', 'Say country or city.', 'Ask your partner: Do you want to visit it?'],
      homework: ['Practice four world or travel words.', 'Say one sentence with want to visit.', 'Draw a plane, map, or flag.'],
    },
  ],
};

function buildSeeds(level: CurriculumLevel): Record<string, SeedClass> {
  const seeds: Record<string, SeedClass> = {};
  for (const cls of level.classes) {
    seeds[cls.id] = {
      id: cls.id,
      title: cls.title,
      description: cls.description ?? cls.title,
      imageUrl: getFirstImage(cls),
      videoUrl: getFirstVideo(cls),
    };
  }
  return seeds;
}

export function applyKidsClassOverrides(levels: CurriculumLevel[]) {
  for (const level of levels) {
    const specs = kidsClassSpecs[level.id];
    if (!specs) continue;
    const seeds = buildSeeds(level);
    level.classes = specs.map((spec) => buildKidsClass(seeds[spec.id], spec));
  }
}
