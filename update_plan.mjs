import fs from 'fs';

let content = fs.readFileSync('PLAN_DE_IMPLEMENTACION.md', 'utf8');
content = content.replace(/- \[ \] Clase (\d+): (Saludos, despedidas|Alfabeto, deletreo|Profesiones, nacionalidades|Rutinas muy básicas|Compras:|Repaso integral).*/g, '- [x] Clase $1: $2...');
// A more robust replacement:
content = content.replace(/- \[ \] (Clase 11: Saludos, despedidas y conversación de supervivencia.)/, '- [x] $1');
content = content.replace(/- \[ \] (Clase 12: Alfabeto, deletreo, correos electrónicos y datos personales.)/, '- [x] $1');
content = content.replace(/- \[ \] (Clase 13: Profesiones, nacionalidades y preguntas con to be.)/, '- [x] $1');
content = content.replace(/- \[ \] (Clase 14: Rutinas muy básicas con have, go, work, study.)/, '- [x] $1');
content = content.replace(/- \[ \] (Clase 15: Compras: precios, dinero, How much is it\?)/, '- [x] $1');
content = content.replace(/- \[ \] (Clase 16: Repaso integral y conversación guiada del nivel.)/, '- [x] $1');

fs.writeFileSync('PLAN_DE_IMPLEMENTACION.md', content);
console.log("Updated PLAN_DE_IMPLEMENTACION.md");
