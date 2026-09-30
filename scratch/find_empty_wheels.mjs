import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scratch/wheel_quality_report.json', 'utf8'));

const emptyClasses = report.filter(r => r.issues.some(iss => iss.en === '' || iss.label === ''));
console.log(`Classes with empty wheel items (${emptyClasses.length}):`);
emptyClasses.forEach(c => {
  console.log(`- [${c.classId}] ${c.classTitle} (${c.levelId})`);
});
