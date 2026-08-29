const fs = require('fs');

let content = fs.readFileSync('src/data/curriculumTeensStudio.ts', 'utf8');

// For Level 0 classes (tbz1-welcome through tbz8-welcome), ensure `type: "standard"` is present
content = content.replace(/(id:\s*"tbz\d+-welcome"[\s\S]*?description:\s*"[^"]*",)/g, (match) => {
  if (!match.includes('type:')) {
    return `${match}\n                type: "standard",`;
  }
  return match;
});

fs.writeFileSync('src/data/curriculumTeensStudio.ts', content, 'utf8');
console.log('Added type: standard to Level 0 welcome slides.');
