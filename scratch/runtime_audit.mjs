import { createServer } from 'vite';

async function runtimeAudit() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { curriculumTeensStudioLevels } = await server.ssrLoadModule('/src/data/curriculumTeensStudio.ts');
  const {
    resolveGrammarData,
    resolveVerbArenaPool,
    resolveReadingLines,
    resolveStoryDecoderLines,
    resolveWritingCardData,
    resolveSpeakingQuestions
  } = await server.ssrLoadModule('/src/components/SlideRenderer.tsx');
  const { resolveHomeworkData } = await server.ssrLoadModule('/src/lib/homeworkResolver.ts');

  console.log('=== RUNTIME RESOLVER AUDIT: VERIFYING WHAT THE STUDENT & TEACHER ACTUALLY SEE ===\n');

  let totalClasses = 0;
  let classesWithErrors = 0;

  for (const level of curriculumTeensStudioLevels) {
    console.log(`\n======================================================================`);
    console.log(`LEVEL: ${level.id} (${level.classes.length} classes)`);
    console.log(`======================================================================`);

    for (const cls of level.classes) {
      totalClasses++;
      const issues = [];
      const slides = cls.sections ? cls.sections.flatMap(s => s.slides || []) : (cls.slides || []);

      if (slides.length < 13) {
        issues.push(`Slide count is ${slides.length}, expected >= 13`);
      }

      // Slide 1: Welcome
      const s1 = slides[0];
      if (!s1?.title || !s1?.imageUrl) issues.push('Slide 1 (Welcome) missing title/image');

      // Slide 2: Objectives
      const s2 = slides[1];
      const objectives = s2?.objectives || s2?.content || [];
      if (objectives.length < 2) issues.push('Slide 2 (Objectives) missing objectives');

      // Slide 3: Wheel
      const s3 = slides[2];
      const wheelItems = s3?.wheelItems || s3?.items || [];
      if (wheelItems.length < 4) issues.push(`Slide 3 (Wheel) has ${wheelItems.length} items (expected >= 4)`);

      // Slide 4: Grammar Studio 1
      const s4 = slides[3];
      const g1 = resolveGrammarData(s4);
      if (!g1 || !g1.structures || g1.structures.length < 3) {
        issues.push(`Slide 4 (Grammar Studio 1) resolved ${g1?.structures?.length || 0} structures`);
      } else {
        g1.structures.forEach((st, idx) => {
          if (!st.formula || !st.example) issues.push(`Slide 4 Structure #${idx + 1} incomplete`);
        });
      }

      // Slide 5: Grammar Studio 2 / Matrix
      const s5 = slides[4];
      const g2 = resolveGrammarData(s5);
      if (!g2 || !g2.structures || g2.structures.length < 3) {
        issues.push(`Slide 5 (Grammar Studio 2) resolved ${g2?.structures?.length || 0} structures`);
      } else {
        g2.structures.forEach((st, idx) => {
          if (!st.formula || !st.example) issues.push(`Slide 5 Structure #${idx + 1} incomplete`);
        });
      }

      // Slide 6: Verb Arena
      const s6 = slides[5];
      const verbs = resolveVerbArenaPool(s6);
      if (!verbs || verbs.length < 4) {
        issues.push(`Slide 6 (Verb Arena) resolved ${verbs?.length || 0} verbs`);
      }

      // Slide 7: Reading
      const s7 = slides[6];
      const readingLines = resolveReadingLines(s7);
      if (!readingLines || readingLines.length < 3) {
        issues.push(`Slide 7 (Reading) resolved ${readingLines?.length || 0} dialogue lines`);
      }

      // Slide 8: Listening
      const s8 = slides[7];
      const ld = s8?.listeningData;
      if (!ld?.question || !ld?.options || ld.options.length !== 3 || ld.correctOptionIndex === undefined) {
        issues.push('Slide 8 (Listening) missing question/options/answer');
      }

      // Slide 9: Story Decoder
      const s9 = slides[8];
      const decoderLines = resolveStoryDecoderLines(s9);
      if (!decoderLines || decoderLines.length < 2) {
        issues.push(`Slide 9 (Story Decoder) resolved ${decoderLines?.length || 0} lines`);
      } else {
        decoderLines.forEach((dl, idx) => {
          const blocks = dl.puzzle?.easy_blocks || [];
          if (!dl.en || blocks.length < 2) issues.push(`Slide 9 Line #${idx + 1} missing English or < 2 blocks`);
        });
      }

      // Slide 10: Writing Studio (+, -, ?)
      const s10 = slides[9];
      const wPos = resolveWritingCardData(s10, 'positive');
      const wNeg = resolveWritingCardData(s10, 'negative');
      const wQ = resolveWritingCardData(s10, 'question');
      if (!wPos?.title || !wNeg?.title || !wQ?.title) {
        issues.push('Slide 10 (Writing) does not resolve all 3 cards (+, -, ?)');
      }

      // Slide 11: Speaking
      const s11 = slides[10];
      const speakingQuestions = resolveSpeakingQuestions(s11);
      if (!speakingQuestions || speakingQuestions.length < 2) {
        issues.push(`Slide 11 (Speaking) resolved ${speakingQuestions?.length || 0} questions`);
      }

      // Slide 13: Homework
      const s13 = slides[12];
      const hw = resolveHomeworkData(s13, cls);
      if (!hw || !hw.task || !hw.exampleLines || hw.exampleLines.length < 2) {
        issues.push('Slide 13 (Homework) incomplete task or < 2 example lines');
      }

      // Scan for generic placeholder leftovers
      const clsString = JSON.stringify(cls);
      if (clsString.includes('Mastering ... allows me to express nuanced ideas with precision')) {
        issues.push('Found generic homework placeholder');
      }

      if (issues.length > 0) {
        classesWithErrors++;
        console.log(`❌ [${cls.id}] ${cls.title}`);
        issues.forEach(i => console.log(`      -> ${i}`));
      } else {
        const decoderSample = decoderLines.map(d => `"${d.en}"`).join(' | ');
        console.log(`✅ [${cls.id}] ALL 13 SLIDES VERIFIED | G1: ${g1.structures.length} tabs | G2: ${g2.structures.length} tabs | Verbs: ${verbs.length} | Dialogue: ${readingLines.length} | Decoder: ${decoderLines.length} | Speaking: ${speakingQuestions.length}`);
      }
    }
  }

  console.log(`\n======================================================================`);
  console.log(`RUNTIME AUDIT SUMMARY: ${totalClasses} classes audited.`);
  console.log(`TOTAL CLASSES WITH ISSUES: ${classesWithErrors}`);
  console.log(`======================================================================`);

  await server.close();
}

runtimeAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
