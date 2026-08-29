import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';

async function main() {
  const tsPath = path.resolve('src/data/curriculumTeensStudio.ts');
  const code = fs.readFileSync(tsPath, 'utf8');
  
  // Transform TS to JS using esbuild
  const result = await esbuild.transform(code, {
    loader: 'ts',
    format: 'cjs',
    target: 'node18'
  });

  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(moduleObj, moduleObj.exports, (mod) => {
    if (mod === './curriculum') return {};
    return require(mod);
  });

  const levels = moduleObj.exports.curriculumTeensStudioLevels || [];
  console.log(`Found ${levels.length} levels.`);

  const auditReport = [];

  for (const lvl of levels) {
    const levelReport = {
      levelId: lvl.id,
      levelTitle: lvl.title,
      classes: []
    };

    for (const cls of (lvl.classes || [])) {
      const slides = (cls.sections || []).flatMap(s => s.slides || []);
      const listeningSlide = slides.find(s => s.type === 'listening-audio-teacher' || s.listeningData) || slides[7];
      
      const goalsSlide = slides.find(s => s.type === 'objectives-animated') || slides[1];
      const grammarSlide = slides.find(s => s.id?.includes('grammar-studio') || s.id?.includes('grammar')) || slides[3];
      const readingSlide = slides.find(s => s.type === 'reading') || slides[6];

      const goals = goalsSlide?.objectives || goalsSlide?.content || [];
      const readingTitle = readingSlide?.title || '';
      const readingDialogue = readingSlide?.readingData?.dialogue || readingSlide?.content || [];

      const lData = listeningSlide?.listeningData || {};
      const transcript = lData.transcription || lData.audioTeacherText || '';
      const teacherText = lData.audioTeacherText || '';
      const question = lData.question || '';
      const options = lData.options || [];
      const correctIdx = lData.correctOptionIndex;

      // Evaluation checks
      const issues = [];
      if (!listeningSlide) {
        issues.push('Missing listening slide');
      } else {
        if (listeningSlide.type !== 'listening-audio-teacher') {
          issues.push(`Slide type is '${listeningSlide.type}', expected 'listening-audio-teacher'`);
        }
        if (!transcript || transcript.trim() === '') {
          issues.push('Transcription is empty');
        }
        if (!teacherText || teacherText.trim() === '') {
          issues.push('audioTeacherText is empty');
        }
        if (transcript && teacherText && transcript !== teacherText) {
          issues.push('Mismatch between transcription and audioTeacherText');
        }
        if (!question || question.trim() === '') {
          issues.push('Missing question');
        }
        if (!Array.isArray(options) || options.length !== 3) {
          issues.push(`Options count is ${options?.length || 0}, expected 3`);
        }
        if (typeof correctIdx !== 'number' || correctIdx < 0 || correctIdx > 2) {
          issues.push(`Invalid correctOptionIndex: ${correctIdx}`);
        }
        if (options.some(o => /option|placeholder|respuesta|opcion/i.test(o) && !/option/i.test(transcript))) {
          issues.push('Options contain placeholder text');
        }
      }

      levelReport.classes.push({
        classId: cls.id,
        classTitle: cls.title,
        classObjective: cls.objective,
        goals,
        readingContext: {
          title: readingTitle,
          sampleDialogue: Array.isArray(readingDialogue) ? readingDialogue.slice(0, 2) : []
        },
        listening: {
          slideId: listeningSlide?.id,
          slideTitle: listeningSlide?.title,
          transcription: transcript,
          audioTeacherText: teacherText,
          question,
          options,
          correctOptionIndex: correctIdx,
          correctAnswerText: options[correctIdx] || 'N/A',
          wordCount: transcript ? transcript.split(/\s+/).length : 0
        },
        issues
      });
    }

    auditReport.push(levelReport);
  }

  fs.writeFileSync('scripts/listening_audit_result.json', JSON.stringify(auditReport, null, 2), 'utf8');
  console.log('Audit complete! Results saved to scripts/listening_audit_result.json');

  let totalClasses = 0;
  let classesWithIssues = 0;
  for (const lvl of auditReport) {
    console.log(`\n=== ${lvl.levelTitle} (${lvl.levelId}) ===`);
    for (const c of lvl.classes) {
      totalClasses++;
      const hasIssues = c.issues.length > 0;
      if (hasIssues) classesWithIssues++;
      console.log(`[${hasIssues ? '❌' : '✅'}] ${c.classId} - ${c.classTitle}`);
      console.log(`    Audio: "${c.listening.transcription}"`);
      console.log(`    Q: "${c.listening.question}"`);
      console.log(`    Correct [${c.listening.correctOptionIndex}]: "${c.listening.correctAnswerText}"`);
      if (hasIssues) {
        console.log(`    ⚠️ Issues: ${c.issues.join(', ')}`);
      }
    }
  }
  console.log(`\nTotal Classes: ${totalClasses}, Issues found: ${classesWithIssues}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
