const fs = require('fs');

const content = fs.readFileSync('scratch/wheels_audit_output_utf8.txt', 'utf8');
const classBlocks = content.split(/\[(c-teens-[^\]]+)\]/);
const reports = [];

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
    // Also check if it's a grammar test or fictional scenario
    const isStoryScenario = /(the zookeeper|the vet|the chef|the tourist|chimp|the doctor|the patient)/i.test(en);
    return !hasYou || isStoryScenario;
  });

  if (badItems.length > 0) {
    reports.push({ classId, total: items.length, badCount: badItems.length, badItems });
  }
}

console.log('Total classes with flagged warm-up items:', reports.length);
reports.forEach(r => {
  console.log(`\n--- ${r.classId} (${r.badCount}/${r.total} items flagged) ---`);
  r.badItems.forEach(b => console.log(`  EN: ${b.en}\n  ES: ${b.es}`));
});
