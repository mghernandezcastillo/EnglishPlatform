import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scratch/wheel_quality_report.json', 'utf8'));

['teens-basic-zero', 'teens-basic-1', 'teens-basic-2'].forEach(lvl => {
  console.log(`\n================= ${lvl} =================`);
  const levelClasses = report.filter(r => r.levelId === lvl);
  levelClasses.forEach(c => {
    console.log(`\n[${c.classId}] ${c.classTitle}`);
    c.issues.forEach(iss => {
      console.log(`  Slice #${iss.sliceNumber} [${iss.label}]: "${iss.en}"`);
      console.log(`    ES: "${iss.es}"`);
      console.log(`    Issues: ${iss.problems.join(', ')}`);
    });
  });
});
