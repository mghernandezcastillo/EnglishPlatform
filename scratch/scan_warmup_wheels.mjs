import { createServer } from 'vite';

async function scanWarmupWheels() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { curriculumTeensStudioLevels } = await server.ssrLoadModule('/src/data/curriculumTeensStudio.ts');

  console.log('=== AUDITING WARM-UP WHEEL QUESTIONS ACROSS ALL LEVELS ===\n');

  for (const level of curriculumTeensStudioLevels) {
    console.log(`\n======================================================`);
    console.log(`LEVEL: ${level.id} (${level.classes.length} classes)`);
    console.log(`======================================================`);

    for (const cls of level.classes) {
      const slides = cls.sections ? cls.sections.flatMap(s => s.slides || []) : (cls.slides || []);
      const wheelSlide = slides.find(s => s.type === 'spinning-wheel' || s.wheelItems);
      
      console.log(`\n[${cls.id}] ${cls.title}`);
      if (!wheelSlide || !wheelSlide.wheelItems) {
        console.log(`   ⚠️ NO WHEEL SLIDE FOUND!`);
        continue;
      }

      console.log(`   Wheel Title: "${wheelSlide.title}"`);
      wheelSlide.wheelItems.forEach((item, idx) => {
        const text = typeof item === 'string' ? item : item.prompt || item.label;
        const es = typeof item === 'object' ? item.es || '' : '';
        console.log(`     #${idx + 1}: "${text}" ${es ? `| ES: "${es}"` : ''}`);
      });
    }
  }

  await server.close();
}

scanWarmupWheels().catch(err => {
  console.error(err);
  process.exit(1);
});
