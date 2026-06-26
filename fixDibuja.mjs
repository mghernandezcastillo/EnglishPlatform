import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

content = content.replace(/✅ Dibuja tu parte favorita de la clase\./g, '✅ Escribe un resumen de tu parte favorita de la clase.');
content = content.replace(/¡Dibuja un círculo grande en el aire!/g, '¡Haz un gesto con tus manos en el aire!');
content = content.replace(/Gira la ruleta y dibuja la figura que salga\./g, 'Gira la ruleta y describe la figura que salga en inglés.');

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Replaced dibuja");
