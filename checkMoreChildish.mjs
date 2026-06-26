import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

const matches = content.match(/.*?(saltitos|magia|osito|muñeca|juguete).*/gi);
if (matches) {
    const uniqueMatches = [...new Set(matches)];
    console.log(uniqueMatches.slice(0, 10).join('\n'));
} else {
    console.log("No matches found");
}
