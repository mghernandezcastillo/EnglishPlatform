import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

content = content.replace(/¡Haz la acción junto al estudiante para que se divierta!/g, 'Participa junto al estudiante para mantener la energía de la clase alta.');
content = content.replace(/¡Pon el video y anima al estudiante a escuchar música o bailar!/g, '¡Pon el video y anima al estudiante a prestar atención y pronunciar la letra o el rap!');
content = content.replace(/¡Prepara la voz para escuchar música bien fuerte!/g, '¡Pon la energía a tope para la lección de hoy!');
content = content.replace(/¡Aplausos!/g, '¡Excelente trabajo!');
content = content.replace(/¡Aplaude/g, 'Felicita');
content = content.replace(/aplaude/g, 'choca esos cinco');
content = content.replace(/peluche/ig, 'gadget');
content = content.replace(/dibujar/ig, 'diseñar');
content = content.replace(/colorea/ig, 'personaliza');
content = content.replace(/mágic[oa]/ig, 'épico');

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Updated tone actions");
