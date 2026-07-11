import * as fs from 'fs';

const filePath = 'src/data/curriculumTeens.ts';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /const images = \[[^\]]*\];/;

const newImages = `const images = [
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
];`;

content = content.replace(regex, newImages);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Images array updated successfully.');
