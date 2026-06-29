import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';

const classQuizzesB2: Record<string, any[]> = {
  'c-adults-basic-2-5': [
    { title: "Knowledge Check 1", desc: "Choose the correct verb form", content: ["I _____ the answer now.", "a) am knowing", "b) know", "c) knows"], options: ["am knowing", "know", "knows"], correct: 1 },
    { title: "Knowledge Check 2", desc: "Choose the correct verb form", content: ["She _____ in the park at the moment.", "a) is running", "b) runs", "c) run"], options: ["is running", "runs", "run"], correct: 0 },
    { title: "Knowledge Check 3", desc: "Choose the correct verb form", content: ["We _____ a new car.", "a) are wanting", "b) wants", "c) want"], options: ["are wanting", "wants", "want"], correct: 2 },
    { title: "Knowledge Check 4", desc: "Choose the correct verb form", content: ["They _____ breakfast right now.", "a) are eating", "b) eat", "c) eats"], options: ["are eating", "eat", "eats"], correct: 0 }
  ],
  'c-adults-basic-2-6': [
    { title: "Knowledge Check 1", desc: "Identify the weather", content: ["It is raining heavily. The weather is...", "a) Sunny", "b) Rainy", "c) Snowy"], options: ["Sunny", "Rainy", "Snowy"], correct: 1 },
    { title: "Knowledge Check 2", desc: "Identify the season", content: ["It is very hot and we go to the beach in...", "a) Winter", "b) Autumn", "c) Summer"], options: ["Winter", "Autumn", "Summer"], correct: 2 },
    { title: "Knowledge Check 3", desc: "Identify the weather", content: ["The sky is full of white clouds. It is...", "a) Cloudy", "b) Sunny", "c) Windy"], options: ["Cloudy", "Sunny", "Windy"], correct: 0 },
    { title: "Knowledge Check 4", desc: "Identify the season", content: ["Leaves fall from the trees in...", "a) Spring", "b) Autumn", "c) Summer"], options: ["Spring", "Autumn", "Summer"], correct: 1 }
  ],
  'c-adults-basic-2-7': [
    { title: "Knowledge Check 1", desc: "Choose the correct imperative", content: ["_____ the door, please. It's cold.", "a) Close", "b) Closes", "c) Closing"], options: ["Close", "Closes", "Closing"], correct: 0 },
    { title: "Knowledge Check 2", desc: "Choose the correct imperative", content: ["_____ talk during the exam!", "a) Not", "b) No", "c) Don't"], options: ["Not", "No", "Don't"], correct: 2 },
    { title: "Knowledge Check 3", desc: "Choose the correct imperative", content: ["_____ down and open your books.", "a) Sit", "b) Sitting", "c) Sits"], options: ["Sit", "Sitting", "Sits"], correct: 0 },
    { title: "Knowledge Check 4", desc: "Choose the correct imperative", content: ["_____ to the teacher carefully.", "a) Listens", "b) Listen", "c) Listening"], options: ["Listens", "Listen", "Listening"], correct: 1 }
  ],
  'c-adults-basic-2-8': [
    { title: "Knowledge Check 1", desc: "Choose the right direction", content: ["To go to the bank, _____ left at the corner.", "a) turn", "b) go", "c) cross"], options: ["turn", "go", "cross"], correct: 0 },
    { title: "Knowledge Check 2", desc: "Choose the right direction", content: ["Go _____ on this street for two blocks.", "a) straight", "b) right", "c) corner"], options: ["straight", "right", "corner"], correct: 0 },
    { title: "Knowledge Check 3", desc: "Choose the right direction", content: ["The pharmacy is _____ the corner.", "a) in", "b) on", "c) to"], options: ["in", "on", "to"], correct: 1 },
    { title: "Knowledge Check 4", desc: "Choose the right direction", content: ["_____ the street at the traffic lights.", "a) Turn", "b) Go", "c) Cross"], options: ["Turn", "Go", "Cross"], correct: 2 }
  ],
  'c-adults-basic-2-9': [
    { title: "Knowledge Check 1", desc: "Phone vocabulary", content: ["Could you _____ up, please? I can't hear you.", "a) speak", "b) hold", "c) call"], options: ["speak", "hold", "call"], correct: 0 },
    { title: "Knowledge Check 2", desc: "Phone vocabulary", content: ["Please _____ on a minute. I'll check.", "a) hang", "b) hold", "c) leave"], options: ["hang", "hold", "leave"], correct: 1 },
    { title: "Knowledge Check 3", desc: "Phone vocabulary", content: ["Can I _____ a message for Mr. Smith?", "a) speak", "b) call", "c) leave"], options: ["speak", "call", "leave"], correct: 2 },
    { title: "Knowledge Check 4", desc: "Phone vocabulary", content: ["I will _____ you back later.", "a) call", "b) hold", "c) speak"], options: ["call", "hold", "speak"], correct: 0 }
  ],
  'c-adults-basic-2-10': [
    { title: "Knowledge Check 1", desc: "Present Simple vs Continuous", content: ["I usually _____ tea, but today I _____ coffee.", "a) drink / am drinking", "b) am drinking / drink", "c) drink / drink"], options: ["drink / am drinking", "am drinking / drink", "drink / drink"], correct: 0 },
    { title: "Knowledge Check 2", desc: "Present Simple vs Continuous", content: ["She _____ right now.", "a) sleeps", "b) is sleeping", "c) sleep"], options: ["sleeps", "is sleeping", "sleep"], correct: 1 },
    { title: "Knowledge Check 3", desc: "Present Simple vs Continuous", content: ["They always _____ football on Sundays.", "a) play", "b) are playing", "c) plays"], options: ["play", "are playing", "plays"], correct: 0 },
    { title: "Knowledge Check 4", desc: "Present Simple vs Continuous", content: ["Look! It _____ outside.", "a) snows", "b) is snowing", "c) snow"], options: ["snows", "is snowing", "snow"], correct: 1 }
  ],
  'c-adults-basic-2-11': [
    { title: "Final Review 1", desc: "General Review", content: ["I _____ understand the question.", "a) am not", "b) don't", "c) doesn't"], options: ["am not", "don't", "doesn't"], correct: 1 },
    { title: "Final Review 2", desc: "General Review", content: ["_____ straight and turn right.", "a) Going", "b) Go", "c) Goes"], options: ["Going", "Go", "Goes"], correct: 1 },
    { title: "Final Review 3", desc: "General Review", content: ["What _____ the weather like?", "a) are", "b) is", "c) does"], options: ["are", "is", "does"], correct: 1 },
    { title: "Final Review 4", desc: "General Review", content: ["She _____ to music at the moment.", "a) listens", "b) listening", "c) is listening"], options: ["listens", "listening", "is listening"], correct: 2 }
  ]
};

const level = curriculumLevels.find(l => l.id === 'basic-2');
if (level) {
  for (const cls of level.classes) {
    const quizzes = classQuizzesB2[cls.id];
    
    // Also we need to fix any "Wrong Option" slides in basic-2 and basic-3 that might not be in this map,
    // actually let's just go through all slides in basic-2 and replace generic content.
    
    for (let sIdx = 0; sIdx < cls.sections.length; sIdx++) {
      const section = cls.sections[sIdx];
      let quizCounter = 0;
      
      for (let slIdx = 0; slIdx < section.slides.length; slIdx++) {
        const slide = section.slides[slIdx];
        
        // Fix Quiz slides
        if (slide.options && slide.options.some(o => o.includes('Wrong Option'))) {
          if (quizzes && quizCounter < quizzes.length) {
            const q = quizzes[quizCounter];
            slide.title = q.title;
            slide.description = q.desc;
            slide.content = q.content;
            slide.options = q.options;
            slide.correctOptionIndex = q.correct;
            quizCounter++;
          } else {
             // Fallback if not enough specific quizzes
             slide.title = "Review Question";
             slide.description = "Choose the right option";
             slide.content = ["Which word is a verb?", "a) Car", "b) Run", "c) Blue"];
             slide.options = ["Car", "Run", "Blue"];
             slide.correctOptionIndex = 1;
          }
        }
        
        // Fix Homework slides that are too generic
        if (slide.type === 'homework' && slide.title === 'Homework Assignment' && slide.content && slide.content.length > 0 && slide.content[0].includes('Write 5 sentences using what we learned today.')) {
            let hwTopic = cls.title;
            slide.content = [
              `Write 5 sentences about: ${hwTopic}`,
              "Make sure to check your spelling and grammar.",
              "Bring it to the next class!"
            ];
        }
        
        // Fix Emoji game if generic
        if (slide.type === 'emoji-game' && slide.content && slide.content[0] === '👀 -> ?') {
           if (cls.id === 'c-adults-basic-2-6') { // weather
              slide.content = ["☀️ -> ?", "🌧️ -> ?", "❄️ -> ?"];
              slide.options = ["Sunny", "Rainy", "Snowy"];
           } else if (cls.id === 'c-adults-basic-2-8') { // directions
              slide.content = ["⬅️ -> ?", "➡️ -> ?", "⬆️ -> ?"];
              slide.options = ["Turn left", "Turn right", "Go straight"];
           } else if (cls.id === 'c-adults-basic-2-9') { // phone
              slide.content = ["📱 -> ?", "📞 -> ?", "🗣️ -> ?"];
              slide.options = ["Phone", "Call", "Speak"];
           }
        }
      }
    }
  }
}

// Let's also do a quick pass for basic-3 to fix those "Wrong Option" slides so they aren't completely broken, 
// even though the user asked for basic-2.
const b3 = curriculumLevels.find(l => l.id === 'basic-3');
if (b3) {
  for (const cls of b3.classes) {
     for (const section of cls.sections) {
        for (const slide of section.slides) {
           if (slide.options && slide.options.some(o => o.includes('Wrong Option'))) {
              slide.title = "Review Question";
              slide.description = "Let's review the topic!";
              slide.content = ["What is the correct answer based on what we learned?"];
              slide.options = ["Correct Answer", "Incorrect A", "Incorrect B"];
              slide.correctOptionIndex = 0;
           }
        }
     }
  }
}

console.log("Writing changes to src/data/curriculum.ts...");
const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
fs.writeFileSync('src/data/curriculum.ts', fileContent);
console.log("Done!");
