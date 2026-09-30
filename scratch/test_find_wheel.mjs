import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumTeensStudio.ts', 'utf8');

function findWheelForClass(classId) {
  const classIdx = content.indexOf(`"id": "${classId}"`);
  if (classIdx === -1) return null;
  
  // Find spinning-wheel slide within this class (before the next class starts)
  const nextClassIdx = content.indexOf('"id": "c-teens-', classIdx + 20);
  const classEnd = nextClassIdx !== -1 ? nextClassIdx : content.length;
  const classSub = content.slice(classIdx, classEnd);
  
  const wheelSlideIdx = classSub.indexOf('"type": "spinning-wheel"');
  if (wheelSlideIdx === -1) return null;
  
  // Find wheelItems: [ ... ]
  const wheelItemsIdx = classSub.indexOf('"wheelItems": [', wheelSlideIdx);
  if (wheelItemsIdx === -1) return null;
  
  // Find closing bracket
  let depth = 0;
  let arrayEnd = -1;
  for (let i = wheelItemsIdx + '"wheelItems": ['.length - 1; i < classSub.length; i++) {
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
    start: classIdx + wheelItemsIdx,
    end: classIdx + arrayEnd,
    content: classSub.slice(wheelItemsIdx, arrayEnd)
  };
}

console.log('Testing findWheelForClass on c-teens-basic-2-1:');
const found = findWheelForClass('c-teens-basic-2-1');
if (found) {
  console.log('Found length:', found.end - found.start);
  console.log('First 200 chars:\n', found.content.slice(0, 200));
  console.log('Last 100 chars:\n', found.content.slice(-100));
} else {
  console.log('Not found');
}
