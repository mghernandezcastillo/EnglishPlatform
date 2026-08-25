import { createServer } from 'vite';
import type { CurriculumLevel } from '../src/types/curriculum';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });

try {
  const teensModule = (await vite.ssrLoadModule('/src/data/curriculumTeens.ts')) as { curriculumTeensLevels: CurriculumLevel[] };
  const enhancerModule = (await vite.ssrLoadModule('/src/lib/presentationEnhancer.ts')) as { enhancePresentationClass: any };
  
  const levels = teensModule.curriculumTeensLevels;
  const enhancePresentationClass = enhancerModule.enhancePresentationClass;

  // Let's check each class's sections slide count exactly
  const sectionBreakdowns: Record<string, number> = {};
  const specialSlides: any[] = [];

  for (const level of levels) {
    for (const lesson of level.classes) {
      const counts = lesson.sections.map(s => s.slides.length).join('-');
      sectionBreakdowns[counts] = (sectionBreakdowns[counts] || 0) + 1;

      lesson.sections.forEach((sec, sIdx) => {
        sec.slides.forEach((slide, slIdx) => {
          if (slide.type === 'alphabet-game') {
            specialSlides.push({
              level: level.id,
              classId: lesson.id,
              section: sec.title,
              slideIndex: slIdx + 1,
              slide
            });
          }
        });
      });

      // Also check runtime presentationEnhancer output
      const enhanced = enhancePresentationClass(lesson, 'teens');
      const enhCounts = (enhanced.sections || []).map((s: any) => (s.slides || []).length).join('-');
      if (enhCounts !== '3-5-5-6-3' && enhCounts !== counts) {
        console.log(`Enhancer changed slide counts in ${lesson.id}: raw=${counts} -> enhanced=${enhCounts}`);
      }
    }
  }

  console.log('\n--- Section Slide Counts Distribution (Format: S1-S2-S3-S4-S5) ---');
  console.table(sectionBreakdowns);

  if (specialSlides.length > 0) {
    console.log('\n--- Special Slide Types Found ---');
    console.log(JSON.stringify(specialSlides, null, 2));
  }

} finally {
  await vite.close();
}
