import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

// Replace instructions aimed at toddlers
content = content.replace(/¡Vamos a estirar los brazos al cielo y sacudir las manos!/g, '¡Activando el modo clase! ¿Listos para empezar?');
content = content.replace(/¡Grita las palabras lo más fuerte que puedas!/g, '¡Dilo con actitud! Pronuncia estas palabras duro y claro.');
content = content.replace(/¡Saluda al alumno con mucha alegría y haz el ejercicio con él!/g, 'Saluda al alumno con buena onda y marca el ritmo de la clase.');
content = content.replace(/jugando/ig, 'de forma interactiva');
content = content.replace(/jugamos/ig, 'participamos');

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Updated tone");
