import fs from 'fs';

const TARGET_FILE = 'src/data/curriculumTeensStudio.ts';
const BACKUP_FILE = 'src/data/curriculumTeensStudio.ts.bak';

console.log('Reading files...');
let content = fs.readFileSync(TARGET_FILE, 'utf8');
fs.writeFileSync(BACKUP_FILE, content, 'utf8');
console.log(`Created backup at ${BACKUP_FILE}`);

const replacements = JSON.parse(fs.readFileSync('scratch/all_wheel_replacements.json', 'utf8'));
const classIds = Object.keys(replacements);
console.log(`Applying replacements for ${classIds.length} classes...`);

function findWheelSlideForClass(fileContent, classId) {
  const classIdx = fileContent.indexOf(`"id": "${classId}"`);
  if (classIdx === -1) return null;

  // Search until the next class or end
  const nextClassIdx = fileContent.indexOf('"id": "c-teens-', classIdx + 20);
  const classEnd = nextClassIdx !== -1 ? nextClassIdx : fileContent.length;
  const classSub = fileContent.slice(classIdx, classEnd);

  const wheelSlideIdx = classSub.indexOf('"type": "spinning-wheel"');
  if (wheelSlideIdx === -1) return null;

  // Find wheelItems: [ ... ]
  const wheelItemsIdx = classSub.indexOf('"wheelItems": [', wheelSlideIdx);
  if (wheelItemsIdx === -1) return null;

  let depth = 0;
  let arrayEnd = -1;
  const startPos = wheelItemsIdx + '"wheelItems": ['.length - 1;
  for (let i = startPos; i < classSub.length; i++) {
    if (classSub[i] === '[') depth++;
    else if (classSub[i] === ']') {
      depth--;
      if (depth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }

  if (arrayEnd === -1) return null;

  return {
    classId,
    wheelItemsStart: classIdx + wheelItemsIdx,
    wheelItemsEnd: classIdx + arrayEnd
  };
}

// Find all replacement targets
const targets = [];
for (const classId of classIds) {
  const loc = findWheelSlideForClass(content, classId);
  if (!loc) {
    console.error(`❌ Could not locate spinning-wheel for ${classId}`);
  } else {
    targets.push({
      ...loc,
      newItems: replacements[classId]
    });
  }
}

console.log(`Located ${targets.length} / ${classIds.length} wheel slides in source.`);

if (targets.length !== classIds.length) {
  console.error('Target count mismatch! Aborting.');
  process.exit(1);
}

// Sort descending by start position to replace from end to beginning
targets.sort((a, b) => b.wheelItemsStart - a.wheelItemsStart);

for (const t of targets) {
  const formattedItems = JSON.stringify(t.newItems, null, 18)
    .replace(/^\[/, '[\n')
    .replace(/\]$/, '\n                ]');
  
  const replacementText = `"wheelItems": ${formattedItems}`;

  content = content.slice(0, t.wheelItemsStart) + replacementText + content.slice(t.wheelItemsEnd);
}

// Clean up known grammar-forcing wheel descriptions
content = content.replace(
  'Gira la ruleta y responde con una oración completa usando pronombres objeto.',
  '¡Gira la ruleta y rompe el hielo compartiendo tu opinión en inglés!'
);
content = content.replace(
  'Gira la ruleta y responde con una regla u obligación escolar:',
  'Gira la ruleta y responde una pregunta divertida sobre la vida escolar:'
);
content = content.replace(
  '¡Gira la ruleta y responde con naturalidad usando pronombres indefinidos!',
  '¡Gira la ruleta y responde una pregunta misteriosa para romper el hielo!'
);

fs.writeFileSync(TARGET_FILE, content, 'utf8');
console.log('✅ Successfully wrote updated curriculumTeensStudio.ts');
