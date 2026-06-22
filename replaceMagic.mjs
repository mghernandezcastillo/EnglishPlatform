import fs from 'fs';
let content = fs.readFileSync('src/data/curriculumKids.ts', 'utf8');

content = content.replace(/2\. Magic Wheel/g, '2. Fun Wheel');
content = content.replace(/Magic Number Wheel/g, 'Super Number Wheel');
content = content.replace(/Magic Shapes/g, 'Super Shapes');
content = content.replace(/mochila mágica/g, 'mochila increíble');
content = content.replace(/zapatos mágicos/g, 'zapatos veloces');
content = content.replace(/Magical Nature/g, 'Amazing Nature');
content = content.replace(/cosas mágicas/g, 'cosas asombrosas');
content = content.replace(/ruleta mágica/g, 'ruleta divertida');
content = content.replace(/ciudad mágica/g, 'ciudad increíble');
content = content.replace(/Magic Fairy Tales/g, 'Awesome Fairy Tales');
content = content.replace(/personajes mágicos/g, 'personajes increíbles');

fs.writeFileSync('src/data/curriculumKids.ts', content);
