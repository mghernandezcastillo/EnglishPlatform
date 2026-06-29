import fs from 'fs';
import { GoogleGenAI, Type, Schema } from '@google/genai';
import { curriculumLevels } from './src/data/curriculum.ts';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const TEMPLATE_COUNTS = [1, 4, 6, 5, 3];
const SECTION_TITLES = [
  "1. Warm-up",
  "2. Rules, Vocabulary & Grammar",
  "3. Practice & Reading",
  "4. Production & Quiz",
  "5. Wrap-up"
];

const slideSchema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      title: { type: Type.STRING },
      description: { type: Type.STRING },
      content: { type: Type.ARRAY, items: { type: Type.STRING } },
      bgColor: { type: Type.STRING },
      type: { type: Type.STRING },
      options: { type: Type.ARRAY, items: { type: Type.STRING } },
      correctOptionIndex: { type: Type.INTEGER }
    },
    required: ["id", "title", "description", "content", "bgColor"]
  }
};

async function generateMissingSlides(className: string, classObjective: string, sectionTitle: string, missingCount: number, existingSlides: any[]): Promise<any[]> {
  const prompt = `
You are an expert English teacher. I am creating a curriculum slide deck for a class titled "${className}" with the objective "${classObjective}".
I need to add ${missingCount} more slides to the section "${sectionTitle}".
The section currently has these slides: ${JSON.stringify(existingSlides)}.

Please generate exactly ${missingCount} new slides to complete this section.
Each slide must have an id (e.g. "generated-sX-1"), title, description, content (array of strings), and a bgColor (a tailwind gradient like "bg-gradient-to-br from-blue-400 to-cyan-600").
Depending on the section, use appropriate slide types (e.g., standard, or if quiz/practice, maybe add options and correctOptionIndex).
If it's the Wrap-up section, make sure the last two slides are Homework and Video Homework types!
Return ONLY a JSON array of slide objects.
`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: slideSchema,
      temperature: 0.7
    }
  });
  
  if (response.text) {
     await new Promise(r => setTimeout(r, 4000)); // sleep 4s to avoid rate limits (15/min)
     return JSON.parse(response.text);
  }
  return [];
}

async function processLevel(levelId: string) {
  const level = curriculumLevels.find(l => l.id === levelId);
  if (!level) return;
  console.log(`Processing Level: ${level.title}`);
  
  for (const cls of level.classes) {
    console.log(`- Class: ${cls.title}`);
    
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
      const targetCount = TEMPLATE_COUNTS[i];
      
      if (section.slides.length < targetCount) {
         const missingCount = targetCount - section.slides.length;
         console.log(`  -> Section ${i+1} missing ${missingCount} slides. Generating...`);
         try {
             const newSlides = await generateMissingSlides(cls.title, cls.description || cls.objective || '', section.title, missingCount, section.slides);
             
             // Append new slides
             for (const newSlide of newSlides) {
                // Ensure IDs are unique
                newSlide.id = `gen-${cls.id}-s${i+1}-${Math.random().toString(36).substring(7)}`;
                section.slides.push(newSlide);
             }
             console.log(`     Added ${newSlides.length} slides.`);
             
             // Save immediately after generating
             const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
             fs.writeFileSync('src/data/curriculum.ts', fileContent);
         } catch (e) {
             console.error(`     Failed to generate slides:`, e);
             await new Promise(r => setTimeout(r, 10000)); // sleep 10s on rate limit
         }
      } else if (section.slides.length > targetCount) {
         console.log(`  -> Section ${i+1} has ${section.slides.length} slides, which is more than ${targetCount}. Trimming...`);
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

async function main() {
  await processLevel('basic-1');
  await processLevel('basic-2');
  
  console.log("Writing changes to src/data/curriculum.ts...");
  const fileContent = "import { CurriculumLevel } from '../types';\n\nexport const curriculumLevels: CurriculumLevel[] = " + JSON.stringify(curriculumLevels, null, 2) + ";\n";
  fs.writeFileSync('src/data/curriculum.ts', fileContent);
  console.log("Done!");
}

main().catch(console.error);
