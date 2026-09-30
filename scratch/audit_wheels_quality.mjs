import fs from 'fs';

const wheels = JSON.parse(fs.readFileSync('scratch/all_wheels_dump.json', 'utf8'));

console.log(`Auditing ${wheels.length} classes for Warm-up Wheel quality...\n`);

const report = [];

wheels.forEach((w, idx) => {
  const issues = [];
  if (!w.wheelItems || w.wheelItems.length !== 6) {
    issues.push(`Tiene ${w.wheelItems?.length || 0} items en vez de 6.`);
  }

  w.wheelItems?.forEach((item, itemIdx) => {
    const en = item.prompt || '';
    const es = item.es || '';
    const label = item.label || '';

    // Check for you / your
    const hasYou = /\b(you|your|yourself)\b/i.test(en);
    
    // Check for grammar drill patterns
    const isDrill = /^(pronounce|complete with|what is the past of|dictate|spell|choose between)\b/i.test(en);
    
    // Check for 3rd person narrative / abstract fiction
    const is3rdPerson = /\b(the zookeeper|the vet|the chef|the tourist|the doctor|the patient|the guide|the teacher asks)\b/i.test(en) && !hasYou;
    
    // Check for hyper-academic / essay monologues
    const isAcademicMonologue = /\b(preambular|operative clause|baudrillard|chiaroscuro|utility function|chancellor)\b/i.test(en);

    // Length check: question shouldn't be a 50-word paragraph
    const wordCount = en.split(/\s+/).length;
    const isTooLong = wordCount > 35;

    const itemProblems = [];
    if (!hasYou && !isDrill) itemProblems.push('No apela al estudiante (falta you/your)');
    if (isDrill) itemProblems.push('Es un drill gramatical/fonético (no es calentamiento conversacional)');
    if (is3rdPerson) itemProblems.push('Ficción abstracta en 3ra persona');
    if (isAcademicMonologue) itemProblems.push('Monólogo académico denso');
    if (isTooLong) itemProblems.push(`Demasiado largo (${wordCount} palabras)`);
    if (!label) itemProblems.push('Falta label');
    if (!es) itemProblems.push('Falta traducción es');

    if (itemProblems.length > 0) {
      issues.push({
        sliceNumber: itemIdx + 1,
        label,
        en,
        es,
        problems: itemProblems
      });
    }
  });

  if (issues.length > 0) {
    report.push({
      classId: w.classId,
      classTitle: w.classTitle,
      levelId: w.levelId,
      issues
    });
  }
});

console.log(`Total classes with warm-up wheel issues: ${report.length} / ${wheels.length}`);
fs.writeFileSync('scratch/wheel_quality_report.json', JSON.stringify(report, null, 2), 'utf8');

// Summary by level
const byLevel = {};
report.forEach(r => {
  byLevel[r.levelId] = (byLevel[r.levelId] || 0) + 1;
});
console.log('Issues by level:', byLevel);
