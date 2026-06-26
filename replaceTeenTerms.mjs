import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

content = content.replace(/Kids Explorer/g, 'Teen Startup');
content = content.replace(/jugando y divirtiéndonos/g, 'participando de forma interactiva');
content = content.replace(/¡Vamos a aprender a saludar como campeones!/g, '¡Aprende a presentarte y saludar con estilo!');

// Replace general things again just to be sure some edge cases didn't slip
content = content.replace(/kids/gi, 'teens');

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Updated terms in teens curriculum");
