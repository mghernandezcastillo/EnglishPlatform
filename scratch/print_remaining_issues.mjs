import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scratch/wheel_quality_report.json', 'utf8'));

let out = '';
['teens-basic-3', 'teens-basic-4', 'teens-inter', 'teens-advanced', 'teens-elite', 'teens-masters'].forEach(lvl => {
  out += `\n================= ${lvl} =================\n`;
  const levelClasses = report.filter(r => r.levelId === lvl);
  levelClasses.forEach(c => {
    out += `\n[${c.classId}] ${c.classTitle}\n`;
    c.issues.forEach(iss => {
      out += `  Slice #${iss.sliceNumber} [${iss.label}]: "${iss.en}"\n`;
      out += `    ES: "${iss.es}"\n`;
      out += `    Issues: ${iss.problems.join(', ')}\n`;
    });
  });
});

fs.writeFileSync('scratch/remaining_issues.txt', out, 'utf8');
console.log('Saved to scratch/remaining_issues.txt');
