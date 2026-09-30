import fs from 'fs';
import { wheelReplacementsPart1 } from './wheel_replacements_part1.mjs';
import { wheelReplacementsPart2 } from './wheel_replacements_part2.mjs';
import { wheelReplacementsPart3 } from './wheel_replacements_part3.mjs';
import { wheelReplacementsPart4 } from './wheel_replacements_part4.mjs';

const combined = {
  ...wheelReplacementsPart1,
  ...wheelReplacementsPart2,
  ...wheelReplacementsPart3,
  ...wheelReplacementsPart4
};

const classIds = Object.keys(combined);
console.log(`Total classes in combined replacements: ${classIds.length}`);

let totalErrors = 0;

classIds.forEach(id => {
  const items = combined[id];
  if (!items || items.length !== 6) {
    console.error(`❌ [${id}] Error: has ${items?.length} items instead of 6.`);
    totalErrors++;
  }

  items.forEach((item, idx) => {
    if (!item.label) {
      console.error(`❌ [${id}] Item #${idx+1} missing label.`);
      totalErrors++;
    }
    if (!item.color) {
      console.error(`❌ [${id}] Item #${idx+1} missing color.`);
      totalErrors++;
    }
    if (!item.prompt) {
      console.error(`❌ [${id}] Item #${idx+1} missing prompt.`);
      totalErrors++;
    } else {
      const en = item.prompt.toLowerCase();
      const hasYou = /\b(you|your|yourself)\b/i.test(en);
      if (!hasYou) {
        console.error(`❌ [${id}] Item #${idx+1} missing 'you/your': "${item.prompt}"`);
        totalErrors++;
      }
    }
    if (!item.es) {
      console.error(`❌ [${id}] Item #${idx+1} missing Spanish translation 'es'.`);
      totalErrors++;
    }
  });
});

if (totalErrors === 0) {
  console.log(`✅ ALL ${classIds.length} CLASSES PASSED 100% OF VALIDATION CHECKS!`);
  fs.writeFileSync('scratch/all_wheel_replacements.json', JSON.stringify(combined, null, 2), 'utf8');
} else {
  console.log(`❌ Found ${totalErrors} errors.`);
}
