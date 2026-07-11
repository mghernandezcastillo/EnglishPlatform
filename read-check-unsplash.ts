import * as fs from 'fs';
const text = fs.readFileSync('check-unsplash.txt', 'utf8');
console.log(text.split('\n').slice(0, 10).join('\n'));
