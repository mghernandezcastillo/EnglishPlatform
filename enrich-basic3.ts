import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const classContentMap: Record<string, any> = {
  'c-adults-basic-3-1': {
    theme: "Abilities and Possibilities (Can / Can't)",
    images: [
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=800', // abilities
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800'  // skills
    ],
    vocab: ['Swim', 'Drive', 'Cook', 'Play guitar', 'Speak English', 'Run fast'],
    sentences: ['I can swim very well.', "She can't drive a car yet."]
  },
  'c-adults-basic-3-2': {
    theme: 'Permissions and Requests (Can I...? Could you...?)',
    images: [
      'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1496030794592-3c1266e79dc0?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Borrow', 'Lend', 'Help', 'Open', 'Close', 'Pass'],
    sentences: ['Can I borrow your pen?', 'Could you help me with this?']
  },
  'c-adults-basic-3-3': {
    theme: "Obligations (Have to / Don't have to)",
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Work', 'Study', 'Wear a uniform', 'Pay bills', 'Wake up early'],
    sentences: ['I have to work on Saturdays.', "You don't have to pay for this."]
  },
  'c-adults-basic-3-4': {
    theme: 'Clothes, Colors, and Physical Descriptions',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1434389678278-be4d41a6b876?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['T-shirt', 'Jeans', 'Jacket', 'Tall', 'Short', 'Blonde hair'],
    sentences: ['He is wearing a blue jacket.', 'She is tall and has brown hair.']
  },
  'c-adults-basic-3-5': {
    theme: 'Places in the City and Transport',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514643034934-2e917711204d?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Bank', 'Supermarket', 'Bus station', 'Subway', 'Taxi', 'Bicycle'],
    sentences: ['The bank is next to the park.', 'I usually go to work by bus.']
  },
  'c-adults-basic-3-6': {
    theme: 'Past of To Be (Was / Were)',
    images: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Yesterday', 'Last week', 'At home', 'Happy', 'Tired', 'Late'],
    sentences: ['I was very tired yesterday.', 'They were at home last night.']
  },
  'c-adults-basic-3-7': {
    theme: 'Childhood and Memories',
    images: [
      'https://images.unsplash.com/photo-1470258284523-b6703f8f117f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Child', 'Toys', 'Play outside', 'Friends', 'School', 'Remember'],
    sentences: ['When I was a child, I played outside a lot.', 'My favorite toy was a car.']
  },
  'c-adults-basic-3-8': {
    theme: 'Biographies of Famous People',
    images: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517598024396-46c53fb3af66?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Born in', 'Grew up', 'Became', 'Famous for', 'Inventor', 'Artist'],
    sentences: ['She was born in 1980 in London.', 'He became a famous scientist.']
  },
  'c-adults-basic-3-9': {
    theme: 'Dates, Years, and Months',
    images: [
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['January', 'December', 'Birthday', 'Anniversary', 'Nineteen ninety', 'Two thousand'],
    sentences: ['My birthday is on July 14th.', 'He was born in nineteen ninety-five.']
  },
  'c-adults-basic-3-10': {
    theme: 'Level 3 Review',
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Review', 'Can', 'Have to', 'Was', 'Were', 'Past'],
    sentences: ["Let's review everything we learned!", 'I can speak English better now.']
  }
};

const level = curriculumLevels.find(l => l.id === 'basic-3');
if (level) {
  for (const cls of level.classes) {
    const classData = classContentMap[cls.id];
    if (!classData) continue;
    
    // Assign description to class if missing
    if (!cls.description || cls.description === '') {
      cls.description = `In this class, we will learn about ${classData.theme}.`;
    }
    
    for (let sIdx = 0; sIdx < cls.sections.length; sIdx++) {
      const section = cls.sections[sIdx];
      
      for (let slIdx = 0; slIdx < section.slides.length; slIdx++) {
        const slide = section.slides[slIdx];
        
        if (slide.id.startsWith('gen-') || slide.title.includes('More on') || slide.title.includes('Practice') || slide.title.includes('Welcome') || slide.title.includes('Vocabulary') || slide.title.includes('Fill') || slide.title.includes('Translation')) {
           
           if (sIdx === 0) { // Warm up
             slide.title = `Warm up: ${classData.theme}`;
             slide.description = "Let's introduce today's topic!";
             slide.content = [classData.sentences[0], `What do you know about ${classData.theme}?`];
             slide.imageUrl = classData.images[0];
           } else if (sIdx === 1) { // Grammar / Vocab
             slide.title = `${classData.theme}: Rules & Vocab`;
             slide.description = `Learning the basics of ${classData.theme}.`;
             slide.content = classData.vocab.slice(0, 4).map(v => `- ${v}`);
             if (slIdx % 2 === 0) slide.imageUrl = classData.images[1];
           } else if (sIdx === 2) { // Practice
             if (slide.type === 'emoji-game') {
                slide.title = "Emoji Vocabulary Game";
                slide.description = "Guess the correct word!";
                slide.content = ["👀 -> ?", "🏃 -> ?"];
             } else {
                slide.title = "Practice Exercises";
                slide.description = `Apply what you learned about ${classData.theme}.`;
                slide.content = ["Complete the sentence:", classData.sentences[1]];
             }
             slide.options = classData.vocab.slice(0, 3);
             slide.correctOptionIndex = 0;
           } else if (sIdx === 3) { // Quiz
             slide.title = "Quiz Question";
             slide.description = "Test your knowledge!";
             slide.content = ["Choose the correct option:", "_____ is the correct answer."];
             slide.options = [classData.vocab[0] || 'Option A', 'Wrong Option 1', 'Wrong Option 2'];
             slide.correctOptionIndex = 0;
           } else if (sIdx === 4) { // Wrap up
             if (slide.type === 'homework') {
               slide.title = "Homework Assignment";
               slide.description = `Practice ${classData.theme} at home.`;
               slide.content = ["Write 5 sentences using what we learned today."];
             } else if (slide.type === 'video') {
               slide.title = "Video Homework";
               slide.description = "Watch this video and answer the questions.";
             } else {
               slide.title = "Summary & Review";
               slide.description = "Let's review what we learned.";
               slide.content = classData.sentences;
             }
           }
        }
      }
    }
  }
}

console.log("Writing changes to src/data/curriculum.ts...");
const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
fs.writeFileSync('src/data/curriculum.ts', fileContent);
console.log("Done updating specific Basic 3 classes!");
