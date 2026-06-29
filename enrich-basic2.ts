import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const classContentMap: Record<string, any> = {
  'c-adults-basic-2-5': { // Stative vs Action verbs
    theme: 'Stative vs Action Verbs',
    images: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800', // thinking/feeling
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'  // action
    ],
    vocab: ['Know', 'Like', 'Want', 'Need', 'Understand', 'Run', 'Eat', 'Play'],
    sentences: ['I know the answer (Not: I am knowing)', 'She is running right now.']
  },
  'c-adults-basic-2-6': { // Weather and seasons
    theme: 'Weather and Seasons',
    images: [
      'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Sunny', 'Rainy', 'Cloudy', 'Snowy', 'Spring', 'Summer', 'Autumn', 'Winter'],
    sentences: ['What is the weather like today?', 'It is raining.']
  },
  'c-adults-basic-2-7': { // Imperatives
    theme: 'Imperatives (Giving Instructions)',
    images: [
      'https://images.unsplash.com/photo-1516214104703-d25078028238?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Open', 'Close', 'Stand up', 'Sit down', 'Listen', 'Do not speak'],
    sentences: ['Open your books, please.', "Don't touch that!"]
  },
  'c-adults-basic-2-8': { // Directions
    theme: 'Asking and Giving Directions',
    images: [
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Turn left', 'Turn right', 'Go straight', 'Cross the street', 'On the corner'],
    sentences: ['Excuse me, how do I get to the bank?', 'Go straight and turn left.']
  },
  'c-adults-basic-2-9': { // Phone conversations
    theme: 'Phone Conversations',
    images: [
      'https://images.unsplash.com/photo-1520923642038-b4259aceeba7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Hold on', 'Call back', 'Leave a message', 'Hang up', 'Speak up'],
    sentences: ['Hello, is John there?', 'Can I leave a message?']
  },
  'c-adults-basic-2-10': { // Present simple vs continuous
    theme: 'Present Simple vs. Present Continuous',
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Usually', 'Always', 'Right now', 'At the moment', 'Today'],
    sentences: ['I usually drink coffee, but today I am drinking tea.']
  },
  'c-adults-basic-2-11': { // Final Project
    theme: 'Level 2 Final Project',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Presentation', 'Summary', 'Review', 'Speaking', 'Listening'],
    sentences: ['Present your project to the class.', 'Listen carefully to your classmates.']
  }
};

const level = curriculumLevels.find(l => l.id === 'basic-2');
if (level) {
  for (const cls of level.classes) {
    const classData = classContentMap[cls.id];
    if (!classData) continue;
    
    // Assign description to class if missing
    if (!cls.description || cls.description === '') {
      cls.description = `In this class, we will learn about ${classData.theme}.`;
    }

    let slideCounter = 0;
    
    for (let sIdx = 0; sIdx < cls.sections.length; sIdx++) {
      const section = cls.sections[sIdx];
      
      for (let slIdx = 0; slIdx < section.slides.length; slIdx++) {
        const slide = section.slides[slIdx];
        slideCounter++;
        
        // We only modify if it was generated (or generic). But wait, we want to enrich ALL of them for basic 2 classes 5-11 if they seem generic
        // To be safe, if id starts with 'gen-' or we just want to improve all slides in this class to match the theme.
        if (slide.id.startsWith('gen-') || slide.title.includes('More on') || slide.title.includes('Practice')) {
           
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
console.log("Done updating specific Basic 2 classes!");
