import fs from 'fs';
import { curriculumLevels } from './src/data/curriculum.ts';
import { CLASS_TEMPLATE } from './src/data/classTemplate.ts';

const levelsToCheck = ['basic-1', 'basic-2', 'basic-3'];

for (const levelId of levelsToCheck) {
  const level = curriculumLevels.find(l => l.id === levelId);
  if (!level) continue;
  
  console.log(`\n=== Checking Level: ${level.title} ===`);
  
  for (const cls of level.classes) {
    let totalSlides = 0;
    const issues = [];
    
    // Check sections count
    if (cls.sections.length !== CLASS_TEMPLATE.sections.length) {
       issues.push(`Expected 5 sections, found ${cls.sections.length}`);
    }
    
    for (let i = 0; i < cls.sections.length; i++) {
      const section = cls.sections[i];
      const templateSection = CLASS_TEMPLATE.sections[i];
      totalSlides += section.slides.length;
      
      if (templateSection && section.slides.length !== templateSection.slideCount) {
         issues.push(`Section ${i+1} (${section.title}) has ${section.slides.length} slides, expected ${templateSection.slideCount}`);
      }
    }
    
    if (totalSlides !== CLASS_TEMPLATE.totalSlides) {
      issues.push(`Total slides: ${totalSlides}, expected ${CLASS_TEMPLATE.totalSlides}`);
    }
    
    if (issues.length > 0) {
      console.log(`- ${cls.title} [${cls.id}]:`);
      issues.forEach(i => console.log(`  * ${i}`));
    }
  }
}
