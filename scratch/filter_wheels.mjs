import fs from 'fs';

const content = fs.readFileSync('scratch/wheels_audit_output_utf8.txt', 'utf8');
const classBlocks = content.split(/\[(c-teens-[^\]]+)\]/);
const flagged = [];

for (let i = 1; i < classBlocks.length; i += 2) {
  const classId = classBlocks[i];
  const body = classBlocks[i + 1];
  const items = [];
  const lines = body.split('\n');
  lines.forEach(l => {
    const m = l.match(/#\d+:\s*"([^"]+)"\s*\|\s*ES:\s*"([^"]+)"/);
    if (m) {
      items.push({ en: m[1], es: m[2] });
    }
  });

  const badItems = items.filter(it => {
    const en = it.en.toLowerCase();
    const hasYou = /\b(you|your|yourself)\b/.test(en);
    const isStoryScenario = /(the zookeeper|the vet|the chef|the tourist|chimp|the doctor|the patient|the guide)/i.test(en);
    return !hasYou || isStoryScenario;
  });

  if (badItems.length > 0) {
    flagged.push({ classId, total: items.length, badCount: badItems.length, badItems });
  }
}

let out = `Total flagged classes: ${flagged.length}\n`;
flagged.forEach(r => {
  out += `\n=== ${r.classId} (${r.badCount}/${r.total} flagged) ===\n`;
  r.badItems.forEach(b => {
    out += `  * ${b.en}\n    (${b.es})\n`;
  });
});

fs.writeFileSync('scratch/flagged_wheels_utf8.txt', out, 'utf8');
console.log('Done writing utf8 flagged output. Total classes:', flagged.length);
