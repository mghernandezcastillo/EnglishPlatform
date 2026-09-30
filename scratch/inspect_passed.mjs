import fs from 'fs';

const wheels = JSON.parse(fs.readFileSync('scratch/all_wheels_dump.json', 'utf8'));
const report = JSON.parse(fs.readFileSync('scratch/wheel_quality_report.json', 'utf8'));

const flaggedIds = new Set(report.map(r => r.classId));
const passed = wheels.filter(w => !flaggedIds.has(w.classId));

console.log('Passed classes count:', passed.length);
passed.slice(0, 10).forEach(w => {
  console.log(`\n[${w.classId}] ${w.classTitle}`);
  w.wheelItems.slice(0, 2).forEach(it => {
    console.log(`  * [${it.label}]: "${it.prompt}"`);
  });
});
