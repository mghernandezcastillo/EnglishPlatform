import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const completeExercisesB2: Record<string, any> = {
  'c-b2-1': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "I always _____ my teeth before bed."], options: ["brush", "brushes", "brushing"], correct: 0 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) He don't like coffee.", "b) She doesn't like tea.", "c) We don't like milk."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "What time do you usually wake up?"] },
       { title: "Translation", content: ["Translate to English:", "Ella trabaja todos los días."], options: ["She work every day.", "She works every day.", "She working every day."], correct: 1 },
       { title: "Complete the sentence", content: ["My brother _____ to the gym on Mondays."], options: ["go", "going", "goes"], correct: 2 }
     ]
  },
  'c-b2-2': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "They _____ studying for the exam right now."], options: ["is", "am", "are"], correct: 2 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) I am eating lunch.", "b) She is playing tennis.", "c) He are watching TV."], options: ["a", "b", "c"], correct: 2 },
       { title: "Q&A", content: ["Ask your partner:", "What are you doing after class?"] },
       { title: "Translation", content: ["Translate to English:", "Estamos escuchando música."], options: ["We are listen music.", "We listening to music.", "We are listening to music."], correct: 2 },
       { title: "Complete the sentence", content: ["Listen! The baby _____."], options: ["crying", "is crying", "cries"], correct: 1 }
     ]
  },
  'c-b2-3': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "I enjoy _____ to the beach."], options: ["go", "going", "goes"], correct: 1 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) She loves dance.", "b) He hates washing dishes.", "c) I prefer reading."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "What kind of food do you prefer?"] },
       { title: "Translation", content: ["Translate to English:", "A ellos les encanta viajar."], options: ["They love traveling.", "They loves travel.", "They are love traveling."], correct: 0 },
       { title: "Complete the sentence", content: ["My dog _____ eating chicken."], options: ["prefer", "prefers", "preferring"], correct: 1 }
     ]
  },
  'c-b2-4': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "I usually walk, but today I _____."], options: ["run", "am running", "runs"], correct: 1 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) She is working every day.", "b) He is studying right now.", "c) We go to the park on Sundays."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "What do you usually do on weekends?"] },
       { title: "Translation", content: ["Translate to English:", "Llueve todos los inviernos."], options: ["It rains every winter.", "It is raining every winter.", "It rain every winter."], correct: 0 },
       { title: "Complete the sentence", content: ["Look! John _____ his new car."], options: ["drives", "is driving", "drive"], correct: 1 }
     ]
  },
  'c-adults-basic-2-5': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "I _____ you are right."], options: ["think", "am thinking", "thinks"], correct: 0 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) I am knowing the answer.", "b) She wants a new phone.", "c) He needs help."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "Do you understand this lesson?"] },
       { title: "Translation", content: ["Translate to English:", "Yo creo en ti."], options: ["I am believing in you.", "I believe in you.", "I believes in you."], correct: 1 },
       { title: "Complete the sentence", content: ["This soup _____ delicious!"], options: ["tastes", "is tasting", "taste"], correct: 0 }
     ]
  },
  'c-adults-basic-2-6': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "In summer, the weather is usually _____."], options: ["cold", "hot", "snowy"], correct: 1 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) It snows in winter.", "b) I am liking the rain.", "c) Spring is beautiful."], options: ["a", "b", "c"], correct: 1 },
       { title: "Q&A", content: ["Ask your partner:", "What is your favorite season?"] },
       { title: "Translation", content: ["Translate to English:", "Está nublado hoy."], options: ["It is sunny today.", "It is raining today.", "It is cloudy today."], correct: 2 },
       { title: "Complete the sentence", content: ["Take an umbrella, it is _____."], options: ["sunny", "raining", "windy"], correct: 1 }
     ]
  },
  'c-adults-basic-2-7': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "_____ your phone, we are in class."], options: ["Turn on", "Turn off", "Turning off"], correct: 1 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) Don't run in the halls.", "b) Please opening the window.", "c) Be quiet."], options: ["a", "b", "c"], correct: 1 },
       { title: "Q&A", content: ["Ask your partner:", "Give them 3 instructions to follow."] },
       { title: "Translation", content: ["Translate to English:", "No toques eso."], options: ["Don't touch that.", "Not touch that.", "No touching that."], correct: 0 },
       { title: "Complete the sentence", content: ["_____ me the salt, please."], options: ["Passing", "Passes", "Pass"], correct: 2 }
     ]
  },
  'c-adults-basic-2-8': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "Go _____ until you see the hospital."], options: ["straight", "right", "left"], correct: 0 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) Turn left on Main Street.", "b) The bank is in the corner.", "c) Cross the street here."], options: ["a", "b", "c"], correct: 1 },
       { title: "Q&A", content: ["Ask your partner:", "How do I get from here to the nearest supermarket?"] },
       { title: "Translation", content: ["Translate to English:", "Gira a la derecha en la esquina."], options: ["Turn right at the corner.", "Go right in the corner.", "Turn right on corner."], correct: 0 },
       { title: "Complete the sentence", content: ["The park is _____ to the school."], options: ["next", "near", "opposite"], correct: 0 }
     ]
  },
  'c-adults-basic-2-9': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "Can you _____ up? I can't hear you."], options: ["call", "speak", "hold"], correct: 1 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) Hold on a minute.", "b) I will call back you.", "c) Can I leave a message?"], options: ["a", "b", "c"], correct: 1 },
       { title: "Q&A", content: ["Ask your partner:", "Roleplay a short phone call asking for someone."] },
       { title: "Translation", content: ["Translate to English:", "Espera un momento en la línea."], options: ["Wait a moment on line.", "Hold on a minute.", "Stay in line."], correct: 1 },
       { title: "Complete the sentence", content: ["I have to _____ up now, bye!"], options: ["hold", "hang", "speak"], correct: 1 }
     ]
  },
  'c-adults-basic-2-10': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "I usually wear jeans, but today I _____ a suit."], options: ["am wearing", "wear", "wears"], correct: 0 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) He is not understanding.", "b) We are learning English.", "c) She works hard every day."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "What do you usually do, and what are you doing right now?"] },
       { title: "Translation", content: ["Translate to English:", "Él siempre llega tarde."], options: ["He always arriving late.", "He is always late.", "He always is late."], correct: 1 },
       { title: "Complete the sentence", content: ["Quiet! The baby _____."], options: ["sleeps", "is sleeping", "sleep"], correct: 1 }
     ]
  },
  'c-adults-basic-2-11': {
     practice: [
       { title: "Fill in the blanks", content: ["Complete the sentence:", "We _____ our final project today."], options: ["are presenting", "presents", "presenting"], correct: 0 },
       { title: "Find the mistake", content: ["Which sentence is INCORRECT?", "a) I am needing more time.", "b) It is raining outside.", "c) Turn left at the corner."], options: ["a", "b", "c"], correct: 0 },
       { title: "Q&A", content: ["Ask your partner:", "What was your favorite topic in Level 2?"] },
       { title: "Translation", content: ["Translate to English:", "Estoy muy feliz hoy."], options: ["I am very happy today.", "I very happy today.", "I am being very happy today."], correct: 0 },
       { title: "Complete the sentence", content: ["Congratulations! You _____ finished Basic 2!"], options: ["have", "has", "having"], correct: 0 }
     ]
  }
};

const b2 = curriculumLevels.find(l => l.id === 'basic-2');
if (b2) {
  for (const cls of b2.classes) {
    const data = completeExercisesB2[cls.id];
    if (!data) continue;
    
    // Replace section 2 (Practice / Practice Exercises) slides
    // Section index is usually 2
    if (cls.sections[2]) {
      let pIdx = 0;
      for (let i = 0; i < cls.sections[2].slides.length; i++) {
        const slide = cls.sections[2].slides[i];
        if (slide.type === 'emoji-game') continue; // leave emoji game alone if present
        if (pIdx < data.practice.length) {
          const newP = data.practice[pIdx];
          slide.title = newP.title;
          slide.description = "Let's practice!";
          slide.content = newP.content;
          if (newP.options) {
            slide.options = newP.options;
            slide.correctOptionIndex = newP.correct;
          } else {
             delete slide.options;
             delete slide.correctOptionIndex;
          }
          pIdx++;
        }
      }
    }
  }
}

console.log("Writing changes to src/data/curriculum.ts...");
fs.writeFileSync('src/data/curriculum.ts', "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n");
console.log("Done fixing practice slides!");
