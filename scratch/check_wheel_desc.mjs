import fs from 'fs';

const wheels = JSON.parse(fs.readFileSync('scratch/all_wheels_dump.json', 'utf8'));

const badDescriptions = [];
wheels.forEach(w => {
  const desc = (w.wheelDescription || '').toLowerCase();
  if (desc.includes('pronombre') || desc.includes('objeto') || desc.includes('regla') || desc.includes('fórmula') || desc.includes('gramática')) {
    badDescriptions.push({ classId: w.classId, desc: w.wheelDescription });
  }
});

console.log('Wheels with grammar-forcing descriptions:', badDescriptions.length);
badDescriptions.forEach(b => console.log(b.classId, ':', b.desc));
