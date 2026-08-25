import { createServer } from 'vite';
import type { CurriculumLevel } from '../src/types/curriculum';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });

try {
  const teensModule = (await vite.ssrLoadModule('/src/data/curriculumTeens.ts')) as { curriculumTeensLevels: CurriculumLevel[] };
  const enhancerModule = (await vite.ssrLoadModule('/src/lib/presentationEnhancer.ts')) as { enhancePresentationClass: any };
  
  const levels = teensModule.curriculumTeensLevels;
  const enhancePresentationClass = enhancerModule.enhancePresentationClass;

  console.log(`\n================ TEENS CURRICULUM ANALYSIS ================`);
  console.log(`Total Levels / Modules: ${levels.length}`);

  interface ClassReport {
    levelId: string;
    levelTitle: string;
    classId: string;
    classTitle: string;
    sectionCount: number;
    totalSlides: number;
    enhancedSlides: number;
    sections: {
      id: string;
      title: string;
      slideCount: number;
      slideTypes: string[];
      slideTitles: string[];
    }[];
  }

  const reports: ClassReport[] = [];

  for (const level of levels) {
    for (const lesson of level.classes) {
      let enhancedSlideCount = 0;
      try {
        const enh = enhancePresentationClass(lesson, 'teens');
        enhancedSlideCount = (enh.slides || []).length || (enh.sections || []).reduce((acc: number, s: any) => acc + (s.slides?.length || 0), 0);
      } catch (e) {
        enhancedSlideCount = -1;
      }

      let totalSlides = 0;
      const sectionDetails = (lesson.sections || []).map((sec, sIdx) => {
        const slides = sec.slides || [];
        totalSlides += slides.length;
        return {
          id: sec.id || `sec-${sIdx + 1}`,
          title: sec.title,
          slideCount: slides.length,
          slideTypes: slides.map(s => s.type || 'standard'),
          slideTitles: slides.map(s => s.title || '')
        };
      });

      reports.push({
        levelId: level.id,
        levelTitle: level.title,
        classId: lesson.id,
        classTitle: lesson.title,
        sectionCount: lesson.sections.length,
        totalSlides,
        enhancedSlides: enhancedSlideCount,
        sections: sectionDetails
      });
    }
  }

  console.log(`Total Classes Analyzed: ${reports.length}`);

  // Summary by total slide count
  const slideCountDist: Record<number, number> = {};
  const sectionCountDist: Record<number, number> = {};
  const slideCountByLevel: Record<string, { title: string; count: number; slideDist: Record<number, number>; sectionDist: Record<number, number> }> = {};

  for (const r of reports) {
    slideCountDist[r.totalSlides] = (slideCountDist[r.totalSlides] || 0) + 1;
    sectionCountDist[r.sectionCount] = (sectionCountDist[r.sectionCount] || 0) + 1;

    if (!slideCountByLevel[r.levelId]) {
      slideCountByLevel[r.levelId] = { title: r.levelTitle, count: 0, slideDist: {}, sectionDist: {} };
    }
    slideCountByLevel[r.levelId].count++;
    slideCountByLevel[r.levelId].slideDist[r.totalSlides] = (slideCountByLevel[r.levelId].slideDist[r.totalSlides] || 0) + 1;
    slideCountByLevel[r.levelId].sectionDist[r.sectionCount] = (slideCountByLevel[r.levelId].sectionDist[r.sectionCount] || 0) + 1;
  }

  console.log('\n--- Distribution of Total Slides per Class ---');
  console.table(slideCountDist);

  console.log('\n--- Distribution of Section Counts per Class ---');
  console.table(sectionCountDist);

  console.log('\n--- Breakdown by Level ---');
  for (const [lvlId, data] of Object.entries(slideCountByLevel)) {
    console.log(`\n[${lvlId}] "${data.title}" - Total Classes: ${data.count}`);
    console.log(`  Slide count distribution:`, JSON.stringify(data.slideDist));
    console.log(`  Section count distribution:`, JSON.stringify(data.sectionDist));
  }

  // Check section breakdown structure across 22-slide classes vs other classes
  console.log('\n--- Standard 22-slide section breakdown pattern ---');
  const std22 = reports.filter(r => r.totalSlides === 22);
  if (std22.length > 0) {
    const s = std22[0];
    console.log(`Pattern for ${s.classId} (${s.classTitle}):`);
    s.sections.forEach((sec, idx) => {
      console.log(`  Section ${idx + 1} (${sec.title}): ${sec.slideCount} slides -> Types: [${sec.slideTypes.join(', ')}]`);
      console.log(`    Titles: ${JSON.stringify(sec.slideTitles)}`);
    });
  }

  // Identify non-22 slide classes
  const non22 = reports.filter(r => r.totalSlides !== 22);
  console.log(`\n=== NON-22 SLIDE CLASSES (${non22.length} classes) ===`);
  for (const r of non22) {
    console.log(`\n• Class: ${r.classId} (${r.classTitle}) | Level: ${r.levelId} | Total Slides: ${r.totalSlides}`);
    r.sections.forEach((sec, idx) => {
      console.log(`    Sec ${idx + 1} [${sec.title}]: ${sec.slideCount} slides -> [${sec.slideTypes.join(', ')}]`);
      console.log(`      Titles: [${sec.slideTitles.join(' | ')}]`);
    });
  }

  // Check slide types across all slides in all classes
  const allSlideTypes: Record<string, number> = {};
  for (const r of reports) {
    for (const sec of r.sections) {
      for (const t of sec.slideTypes) {
        allSlideTypes[t] = (allSlideTypes[t] || 0) + 1;
      }
    }
  }
  console.log('\n--- All Slide Types Distribution Across All Teens Classes ---');
  console.table(allSlideTypes);

} finally {
  await vite.close();
}
