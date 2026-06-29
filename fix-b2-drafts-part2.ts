import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const classContentMapB2Part1: Record<string, any> = {
  'c-b2-1': {
    theme: 'Routines and Present Simple',
    images: [
      'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Wake up', 'Take a shower', 'Have breakfast', 'Go to work', 'Finish work', 'Go to bed'],
    sentences: ['I wake up at 7 AM every day.', 'He does not take a shower in the evening.']
  },
  'c-b2-2': {
    theme: 'Present Progressive',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Working', 'Studying', 'Playing', 'Eating', 'Watching TV', 'Listening'],
    sentences: ['She is working on her computer right now.', 'They are playing football in the park.']
  },
  'c-b2-3': {
    theme: 'Expressing Preferences (Likes & Dislikes)',
    images: [
      'https://images.unsplash.com/photo-1512152272829-411a56cf9e38?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Like', 'Love', 'Enjoy', 'Hate', 'Dislike', 'Prefer'],
    sentences: ['I love listening to music.', 'She prefers reading books to watching TV.']
  },
  'c-b2-4': {
    theme: 'Comparing Verb Tenses',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
    ],
    vocab: ['Every day', 'Right now', 'Usually', 'At the moment', 'Always', 'Today'],
    sentences: ['I usually walk to work, but today I am driving.', 'He always drinks coffee in the morning.']
  }
};

const classQuizzesB2Part1: Record<string, any[]> = {
  'c-b2-1': [
    { title: "Routines Quiz 1", desc: "Choose the correct option", content: ["I _____ up at 6 AM.", "a) wakes", "b) wake", "c) waking"], options: ["wakes", "wake", "waking"], correct: 1 },
    { title: "Routines Quiz 2", desc: "Choose the correct option", content: ["She _____ breakfast at 8 AM.", "a) has", "b) have", "c) having"], options: ["has", "have", "having"], correct: 0 },
    { title: "Routines Quiz 3", desc: "Choose the correct option", content: ["They _____ to work by bus.", "a) goes", "b) going", "c) go"], options: ["goes", "going", "go"], correct: 2 },
    { title: "Routines Quiz 4", desc: "Choose the correct option", content: ["He _____ TV in the evening.", "a) watch", "b) watches", "c) watching"], options: ["watch", "watches", "watching"], correct: 1 }
  ],
  'c-b2-2': [
    { title: "Progressive Quiz 1", desc: "Choose the correct option", content: ["I _____ working right now.", "a) is", "b) am", "c) are"], options: ["is", "am", "are"], correct: 1 },
    { title: "Progressive Quiz 2", desc: "Choose the correct option", content: ["She is _____ a book.", "a) read", "b) reads", "c) reading"], options: ["read", "reads", "reading"], correct: 2 },
    { title: "Progressive Quiz 3", desc: "Choose the correct option", content: ["They are _____ in the park.", "a) run", "b) running", "c) runs"], options: ["run", "running", "runs"], correct: 1 },
    { title: "Progressive Quiz 4", desc: "Choose the correct option", content: ["_____ you listening to me?", "a) Is", "b) Am", "c) Are"], options: ["Is", "Am", "Are"], correct: 2 }
  ],
  'c-b2-3': [
    { title: "Preferences Quiz 1", desc: "Choose the correct option", content: ["I _____ pizza.", "a) loves", "b) love", "c) loving"], options: ["loves", "love", "loving"], correct: 1 },
    { title: "Preferences Quiz 2", desc: "Choose the correct option", content: ["She _____ reading books.", "a) enjoy", "b) enjoys", "c) enjoying"], options: ["enjoy", "enjoys", "enjoying"], correct: 1 },
    { title: "Preferences Quiz 3", desc: "Choose the correct option", content: ["They _____ vegetables.", "a) hate", "b) hates", "c) hating"], options: ["hate", "hates", "hating"], correct: 0 },
    { title: "Preferences Quiz 4", desc: "Choose the correct option", content: ["Do you _____ coffee or tea?", "a) prefer", "b) prefers", "c) preferring"], options: ["prefer", "prefers", "preferring"], correct: 0 }
  ],
  'c-b2-4': [
    { title: "Tenses Quiz 1", desc: "Choose the correct option", content: ["I usually _____ water, but today I _____ juice.", "a) drink / am drinking", "b) am drinking / drink", "c) drink / drink"], options: ["drink / am drinking", "am drinking / drink", "drink / drink"], correct: 0 },
    { title: "Tenses Quiz 2", desc: "Choose the correct option", content: ["She _____ TV right now.", "a) watches", "b) is watching", "c) watch"], options: ["watches", "is watching", "watch"], correct: 1 },
    { title: "Tenses Quiz 3", desc: "Choose the correct option", content: ["They always _____ at 7 AM.", "a) wake up", "b) are waking up", "c) wakes up"], options: ["wake up", "are waking up", "wakes up"], correct: 0 },
    { title: "Tenses Quiz 4", desc: "Choose the correct option", content: ["Look! It _____.", "a) rains", "b) is raining", "c) rain"], options: ["rains", "is raining", "rain"], correct: 1 }
  ]
};

const level = curriculumLevels.find(l => l.id === 'basic-2');
if (level) {
  for (const cls of level.classes) {
    const classData = classContentMapB2Part1[cls.id];
    const quizzes = classQuizzesB2Part1[cls.id];
    
    let quizCounter = 0;
    
    for (let sIdx = 0; sIdx < cls.sections.length; sIdx++) {
      const section = cls.sections[sIdx];
      
      for (let slIdx = 0; slIdx < section.slides.length; slIdx++) {
        const slide = section.slides[slIdx];
        const isGeneric = slide.id.startsWith('gen-') || slide.title.includes('More on') || slide.title.includes('Practice') || slide.title.includes('Option A') || (slide.options && slide.options.includes('Option A')) || slide.title === 'Quiz Time';

        if (isGeneric && classData) {
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
                slide.options = classData.vocab.slice(0, 3);
                slide.correctOptionIndex = 0;
             } else {
                slide.title = "Practice Exercises";
                slide.description = `Apply what you learned about ${classData.theme}.`;
                slide.content = ["Complete the sentence:", classData.sentences[1]];
                slide.options = null; // Remove options if it's just a reading slide
             }
           } else if (sIdx === 3) { // Quiz
             if (quizzes && quizCounter < quizzes.length) {
                const q = quizzes[quizCounter];
                slide.title = q.title;
                slide.description = q.desc;
                slide.content = q.content;
                slide.options = q.options;
                slide.correctOptionIndex = q.correct;
                quizCounter++;
             } else {
                slide.title = "Review Question";
                slide.description = "Choose the right option";
                slide.content = ["Which word fits best?", "a) Option 1", "b) Option 2", "c) Option 3"];
                slide.options = ["Option 1", "Option 2", "Option 3"];
                slide.correctOptionIndex = 0;
             }
           } else if (sIdx === 4) { // Wrap up
             if (slide.type === 'homework') {
               slide.title = "Homework Assignment";
               slide.description = `Practice ${classData.theme} at home.`;
               slide.content = [`Write 5 sentences about: ${classData.theme}`, "Make sure to check your spelling and grammar.", "Bring it to the next class!"];
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
        
        // Final sanity check for ALL basic-2 classes to remove "Option A", "Option B"
        if (slide.options && slide.options.some(o => o.includes('Option A') || o.includes('Option 1'))) {
           slide.title = "Knowledge Check";
           slide.description = "Choose the correct word.";
           
           if (cls.id.includes('b2-1')) {
              slide.content = ["I _____ breakfast at 7.", "a) eat", "b) eats", "c) eating"];
              slide.options = ["eat", "eats", "eating"];
              slide.correctOptionIndex = 0;
           } else if (cls.id.includes('b2-2')) {
              slide.content = ["She _____ working.", "a) is", "b) am", "c) are"];
              slide.options = ["is", "am", "are"];
              slide.correctOptionIndex = 0;
           } else if (cls.id.includes('b2-3')) {
              slide.content = ["I _____ chocolate.", "a) love", "b) loves", "c) loving"];
              slide.options = ["love", "loves", "loving"];
              slide.correctOptionIndex = 0;
           } else if (cls.id.includes('b2-4')) {
              slide.content = ["It _____ right now.", "a) is raining", "b) rains", "c) rain"];
              slide.options = ["is raining", "rains", "rain"];
              slide.correctOptionIndex = 0;
           } else {
              slide.content = ["English is _____.", "a) fun", "b) boring", "c) hard"];
              slide.options = ["fun", "boring", "hard"];
              slide.correctOptionIndex = 0;
           }
        }
      }
    }
  }
}

console.log("Writing changes to src/data/curriculum.ts...");
const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
fs.writeFileSync('src/data/curriculum.ts', fileContent);
console.log("Done fixing all drafts in basic-2!");
