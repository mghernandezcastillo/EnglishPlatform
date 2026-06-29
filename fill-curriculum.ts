import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';
import { CLASS_TEMPLATE } from './src/data/classTemplate.ts';

const SECTION_TITLES = [
  "1. Warm-up",
  "2. Rules, Vocabulary & Grammar",
  "3. Practice & Reading",
  "4. Production & Quiz",
  "5. Wrap-up"
];

function generatePlaceholderSlide(levelId: string, classId: string, sectionIdx: number, slideIdx: number, topic: string) {
  const typeMap = ['standard', 'standard', 'standard', 'standard', 'standard'];
  if (sectionIdx === 4 && slideIdx === 1) typeMap[4] = 'homework';
  if (sectionIdx === 4 && slideIdx === 2) typeMap[4] = 'video';
  if (sectionIdx === 2 && slideIdx === 1) typeMap[2] = 'emoji-game';
  
  let type = typeMap[sectionIdx] || 'standard';
  
  let slideTitle = `More on ${topic}`;
  let description = "Let's continue learning!";
  
  if (sectionIdx === 0) {
    slideTitle = "Warm-up Activity";
    description = "Let's get ready for today's topic.";
  } else if (sectionIdx === 1) {
    slideTitle = "Grammar & Vocabulary";
    description = "Key concepts for today.";
  } else if (sectionIdx === 2) {
    slideTitle = type === 'emoji-game' ? "Emoji Challenge" : "Practice Exercises";
    description = "Let's practice what we've learned.";
  } else if (sectionIdx === 3) {
    slideTitle = "Quiz Time";
    description = "Test your knowledge!";
  } else if (sectionIdx === 4) {
    if (type === 'homework') {
      slideTitle = "Homework";
      description = "Practice at home.";
    } else if (type === 'video') {
      slideTitle = "Video Homework";
      description = "Watch and answer.";
    } else {
      slideTitle = "Summary";
      description = "What we learned today.";
    }
  }

  const slide: any = {
    id: `gen-${classId}-s${sectionIdx + 1}-${Math.random().toString(36).substring(7)}`,
    title: slideTitle,
    description: description,
    content: [
      "Follow the instructions on screen.",
      "Discuss with your classmates."
    ],
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
    type: type
  };

  if (sectionIdx === 3 || type === 'emoji-game') {
    slide.options = ["Option A", "Option B", "Option C"];
    slide.correctOptionIndex = 0;
  }
  
  if (type === 'video') {
    slide.videoUrl = "https://www.youtube.com/embed/aI_fREymNjI";
  }

  return slide;
}

function processLevel(levelId: string) {
  const level = curriculumLevels.find(l => l.id === levelId);
  if (!level) return;
  console.log(`Processing Level: ${level.title}`);
  
  for (const cls of level.classes) {
    
    // Ensure 5 sections exist
    while (cls.sections.length < 5) {
       const newIdx = cls.sections.length;
       cls.sections.push({
         id: `s${newIdx + 1}`,
         title: SECTION_TITLES[newIdx],
         duration: "10 minutos",
         objective: "Generated section",
         slides: [],
         action: "Continuar con la clase"
       });
    }
    
    // Check and fill each section
    for (let i = 0; i < 5; i++) {
      const section = cls.sections[i];
      const targetCount = CLASS_TEMPLATE.sections[i].slideCount;
      
      if (section.slides.length < targetCount) {
         const missingCount = targetCount - section.slides.length;
         for (let j = 0; j < missingCount; j++) {
            const slideIdx = section.slides.length;
            const newSlide = generatePlaceholderSlide(levelId, cls.id, i, slideIdx, cls.title.split(':')[1] || cls.title);
            section.slides.push(newSlide);
         }
      } else if (section.slides.length > targetCount) {
         section.slides = section.slides.slice(0, targetCount);
      }
      
      // Enforce Wrap-up special slides
      if (i === 4 && section.slides.length >= 3) {
         section.slides[1].type = 'homework';
         section.slides[2].type = 'video';
         if (!section.slides[2].videoUrl) {
            section.slides[2].videoUrl = "https://www.youtube.com/embed/aI_fREymNjI";
         }
      }
    }
  }
}

processLevel('basic-1');
processLevel('basic-2');
processLevel('basic-3');

console.log("Writing changes to src/data/curriculum.ts...");
const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
fs.writeFileSync('src/data/curriculum.ts', fileContent);
console.log("Done!");
