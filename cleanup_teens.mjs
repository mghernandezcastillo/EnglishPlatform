import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

function extractClasses(text) {
  const classes = [];
  const classRegex = /\{\s*"id":\s*"(c-[^"]+)"/g;
  let match;
  
  while ((match = classRegex.exec(text)) !== null) {
    const startIdx = match.index;
    let braceCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < text.length; i++) {
      if (text[i] === '{') braceCount++;
      else if (text[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
    if (endIdx !== -1) {
      classes.push({
        id: match[1],
        text: text.substring(startIdx, endIdx)
      });
    }
  }
  return classes;
}

const allClasses = extractClasses(content);
console.log(`Found ${allClasses.length} classes.`);

fs.writeFileSync('all_classes.json', JSON.stringify(allClasses.map(c => c.id), null, 2));

const desiredClasses = {};
allClasses.forEach(c => {
    // Keep c-bz-1 to 8, c-be-1 to 8, c-ba-1 to 8, c-bc-1 to 8
    // Keep c-teens-inter-*, c-teens-adv-*, c-teens-elite-*, c-teens-masters-*
    // For Level 5 (teens-basic-4), we don't have new classes yet, so we KEEP the old ones for now: c-teens-basic-4-*
    if (c.id.match(/^c-bz-[1-8]$/) || 
        c.id.match(/^c-be-[1-8]$/) || 
        c.id.match(/^c-ba-[1-8]$/) || 
        c.id.match(/^c-bc-[1-8]$/) ||
        c.id.match(/^c-teens-basic-4-[1-6]$/) ||
        c.id.match(/^c-teens-inter-[1-6]$/) ||
        c.id.match(/^c-teens-adv-[1-6]$/) ||
        c.id.match(/^c-teens-elite-[1-6]$/) ||
        c.id.match(/^c-teens-masters-[1-6]$/)
    ) {
        desiredClasses[c.id] = c.text;
    }
});

console.log(`Keeping ${Object.keys(desiredClasses).length} classes.`);

// Now extract levels
const levelRegex = /\{\s*"id":\s*"(basic-[^"]+|teens-[^"]+)"/g;
const levels = [];
let lMatch;
while ((lMatch = levelRegex.exec(content)) !== null) {
    if (lMatch[1].match(/^teens-\d+/)) continue; // skip slide IDs
    
    // We just want to extract the level metadata: id, title, duration, objective, mcfrEquivalent
    const levelStart = lMatch.index;
    
    const idMatch = content.substring(levelStart).match(/"id":\s*"([^"]+)"/);
    const titleMatch = content.substring(levelStart).match(/"title":\s*"([^"]+)"/);
    const durationMatch = content.substring(levelStart).match(/"duration":\s*"([^"]+)"/);
    const objectiveMatch = content.substring(levelStart).match(/"objective":\s*"([^"]+)"/);
    const mcfrMatch = content.substring(levelStart).match(/"mcfrEquivalent":\s*"([^"]+)"/);
    
    if (idMatch && titleMatch && durationMatch && objectiveMatch && mcfrMatch) {
        levels.push({
            id: idMatch[1],
            title: titleMatch[1],
            duration: durationMatch[1],
            objective: objectiveMatch[1],
            mcfrEquivalent: mcfrMatch[1]
        });
    }
}

console.log(`Found ${levels.length} levels.`);

let newContent = content.substring(0, content.indexOf('export const curriculumTeensLevels: CurriculumLevel[] = [') + 'export const curriculumTeensLevels: CurriculumLevel[] = [\n'.length);

levels.forEach((lvl, index) => {
    newContent += `  {\n`;
    newContent += `    "id": "${lvl.id}",\n`;
    newContent += `    "title": "${lvl.title}",\n`;
    newContent += `    "duration": "${lvl.duration}",\n`;
    newContent += `    "objective": "${lvl.objective}",\n`;
    newContent += `    "mcfrEquivalent": "${lvl.mcfrEquivalent}",\n`;
    newContent += `    "classes": [\n`;
    
    let lvlClasses = [];
    if (lvl.id === 'basic-zero') {
        for(let i=1; i<=8; i++) if (desiredClasses[`c-bz-${i}`]) lvlClasses.push(desiredClasses[`c-bz-${i}`]);
    } else if (lvl.id === 'basic-explorer') {
        for(let i=1; i<=8; i++) if (desiredClasses[`c-be-${i}`]) lvlClasses.push(desiredClasses[`c-be-${i}`]);
    } else if (lvl.id === 'basic-adventurer') {
        for(let i=1; i<=8; i++) if (desiredClasses[`c-ba-${i}`]) lvlClasses.push(desiredClasses[`c-ba-${i}`]);
    } else if (lvl.id === 'basic-champion') {
        for(let i=1; i<=8; i++) if (desiredClasses[`c-bc-${i}`]) lvlClasses.push(desiredClasses[`c-bc-${i}`]);
    } else if (lvl.id === 'teens-basic-4') {
        for(let i=1; i<=6; i++) if (desiredClasses[`c-teens-basic-4-${i}`]) lvlClasses.push(desiredClasses[`c-teens-basic-4-${i}`]);
    } else if (lvl.id === 'teens-inter') {
        for(let i=1; i<=6; i++) if (desiredClasses[`c-teens-inter-${i}`]) lvlClasses.push(desiredClasses[`c-teens-inter-${i}`]);
    } else if (lvl.id === 'teens-advanced') {
        for(let i=1; i<=6; i++) if (desiredClasses[`c-teens-adv-${i}`]) lvlClasses.push(desiredClasses[`c-teens-adv-${i}`]);
    } else if (lvl.id === 'teens-elite') {
        for(let i=1; i<=6; i++) if (desiredClasses[`c-teens-elite-${i}`]) lvlClasses.push(desiredClasses[`c-teens-elite-${i}`]);
    } else if (lvl.id === 'teens-masters') {
        for(let i=1; i<=6; i++) if (desiredClasses[`c-teens-masters-${i}`]) lvlClasses.push(desiredClasses[`c-teens-masters-${i}`]);
    }
    
    // Indent the classes
    const indentedClasses = lvlClasses.map(cText => {
        return cText.split('\\n').map(l => '      ' + l).join('\\n');
    });
    
    newContent += indentedClasses.join(',\\n');
    newContent += `\n    ],\n`;
    newContent += `    "oralEvaluation": [],\n`;
    newContent += `    "virtualEvaluation": []\n`;
    newContent += `  }${index < levels.length - 1 ? ',' : ''}\n`;
});

newContent += `];\n`;

fs.writeFileSync('src/data/curriculumTeens.ts.new', newContent, 'utf8');
console.log('Wrote new file to src/data/curriculumTeens.ts.new');
