import { createServer } from 'vite';

async function deepAuditClassIntegrity() {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { curriculumTeensStudioLevels } = await server.ssrLoadModule('/src/data/curriculumTeensStudio.ts');

  console.log('=== VERIFYING ALL 68 TEEN STUDIO CLASSES SLIDE-BY-SLIDE ===\n');

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
        issues.push(`Slide count is ${slides.length}, expected at least 13`);
      }

      // Slide 1: Welcome
      const s1 = slides[0];
      if (!s1?.title || !s1?.imageUrl) issues.push('Slide 1 (Welcome) missing title/image');

      // Slide 2: Objectives
      const s2 = slides[1];
      if (!s2?.objectives || s2.objectives.length < 2) issues.push('Slide 2 (Objectives) missing objectives');

      // Slide 3: Wheel
      const s3 = slides[2];
      if (!s3?.wheelItems || s3.wheelItems.length < 4) issues.push('Slide 3 (Wheel) has < 4 items');

      // Slide 4: Grammar Studio 1
      const s4 = slides[3];
      const s4Structures = s4?.grammarData?.structures || [];
      if (s4Structures.length < 3) {
        issues.push(`Slide 4 (Grammar Studio 1) has ${s4Structures.length} structures (expected >= 3)`);
      } else {
        s4Structures.forEach((st, idx) => {
          if (!st.formula || !st.example) issues.push(`Slide 4 Structure #${idx + 1} missing formula/example`);
        });
      }

      // Slide 5: Grammar Studio 2 / Matrix
      const s5 = slides[4];
      const s5Structures = s5?.grammarData?.structures || [];
      if (s5Structures.length < 3) {
        issues.push(`Slide 5 (Grammar Studio 2) has ${s5Structures.length} structures (expected >= 3)`);
      } else {
        s5Structures.forEach((st, idx) => {
          if (!st.formula || !st.example) issues.push(`Slide 5 Structure #${idx + 1} missing formula/example`);
        });
      }

      // Slide 6: Verb Arena
      const s6 = slides[5];
      const verbs = s6?.vocabularyCards || s6?.verbsData || [];
      if (verbs.length < 4) issues.push(`Slide 6 (Verb Arena) has ${verbs.length} verbs`);

      // Slide 7: Reading
      const s7 = slides[6];
      const dialogue = s7?.content || s7?.dialogueLines || [];
      if (dialogue.length < 3) issues.push(`Slide 7 (Reading) has ${dialogue.length} dialogue lines`);

      // Slide 8: Listening
      const s8 = slides[7];
      const ld = s8?.listeningData;
      if (!ld?.question || !ld?.options || ld.options.length !== 3 || ld.correctOptionIndex === undefined) {
        issues.push('Slide 8 (Listening) incomplete or does not have exactly 3 options');
      }

      // Slide 9: Story Decoder
      const s9 = slides[8];
      const decoderLines = s9?.storyDecoderData?.lines || s9?.decoderSentences || [];
      if (decoderLines.length < 2) {
        issues.push(`Slide 9 (Story Decoder) has ${decoderLines.length} lines`);
      } else {
        decoderLines.forEach((dl, idx) => {
          const blocks = dl.puzzle?.easy_blocks || dl.scrambledTokens || [];
          if (!dl.en || blocks.length < 2) issues.push(`Slide 9 Line #${idx + 1} missing en or has < 2 puzzle blocks`);
        });
      }

      // Slide 10: Writing Studio
      const s10 = slides[9];
      const writingCards = s10?.writingData?.cards || s10?.writingPrompts || [];
      if (writingCards.length < 3) issues.push(`Slide 10 (Writing) has ${writingCards.length} cards (expected 3: +, -, ?)`);

      // Slide 11: Speaking
      const s11 = slides[10];
      const speakingQuestions = s11?.content || s11?.speakingQuestions || [];
      if (speakingQuestions.length < 2) issues.push(`Slide 11 (Speaking) has ${speakingQuestions.length} questions`);

      // Slide 13: Homework
      const s13 = slides[12];
      const hwData = s13?.homeworkData;
      if (!hwData?.task || !hwData?.exampleLines || hwData.exampleLines.length < 2) {
        issues.push('Slide 13 (Homework) incomplete task or < 2 example lines');
      }

      // String scanning for placeholders or old topics
      const clsString = JSON.stringify(cls);
      if (clsString.includes('Mastering ... allows me to express nuanced ideas with precision')) {
        issues.push('Found generic homework placeholder');
      }
      if (clsString.includes('TODO') || clsString.includes('Lorem ipsum')) {
        issues.push('Found placeholder keyword TODO or Lorem ipsum');
      }

      // Check specific swapped classes
      if (cls.id === 'c-teens-inter-4') {
        if (!clsString.includes('Third Conditional') && !clsString.includes('Third conditional') && !clsString.includes('Past Regrets')) {
          issues.push('c-teens-inter-4 does not teach Third Conditional');
        }
        if (clsString.includes('Second Conditional: IF + PAST, WOULD')) {
          issues.push('c-teens-inter-4 has leftover Second Conditional header');
        }
      }
      if (cls.id === 'c-teens-basic-4-6') {
        if (!clsString.includes('Second Conditional') && !clsString.includes('Second conditional') && !clsString.includes('Hypothetical')) {
          issues.push('c-teens-basic-4-6 does not teach Second Conditional');
        }
      }
      if (cls.id === 'c-teens-basic-4-7') {
        if (!clsString.includes('Indefinite') && !clsString.includes('Someone')) {
          issues.push('c-teens-basic-4-7 does not teach Indefinite Pronouns');
        }
      }
      if (cls.id === 'c-teens-basic-4-8') {
        if (!clsString.includes('must') && !clsString.includes('have to')) {
          issues.push('c-teens-basic-4-8 does not teach obligation modals');
        }
      }

      if (issues.length > 0) {
        classesWithErrors++;
        console.log(`❌ [${cls.id}] ${cls.title}`);
        issues.forEach(i => console.log(`      -> ${i}`));
      } else {
        const decoderSample = decoderLines.map(d => `"${d.en}"`).join(' | ');
        console.log(`✅ [${cls.id}] OK | Decoder (${decoderLines.length} phrases): ${decoderSample}`);
      }
    }
  }

  console.log(`\n======================================================================`);
  console.log(`AUDIT RESULTS: ${totalClasses} classes audited.`);
  console.log(`CLASSES WITH ISSUES: ${classesWithErrors}`);
  console.log(`======================================================================`);

  await server.close();
}

deepAuditClassIntegrity().catch(err => {
  console.error(err);
  process.exit(1);
});
