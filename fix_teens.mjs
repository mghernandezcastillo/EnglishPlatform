import fs from 'fs';

let content = fs.readFileSync('add_teens_classes.mjs', 'utf8');

content = content.replace('title:\\\\s*"Basic Zero"', 'title:\\\\s*"Basic Zero \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Basic 1"', 'title:\\\\s*"Basic 1 \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Basic 2"', 'title:\\\\s*"Basic 2 \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Basic 3"', 'title:\\\\s*"Basic 3 \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Basic 4', 'title:\\\\s*"Basic 4 \\\\(Teens\\\\)');
content = content.replace('title:\\\\s*"Intermediate \\\\[^")]+\\\\"', 'title:\\\\s*"Intermediate \\\\(Tigers, Sharks, Eagles\\\\) \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Advanced"', 'title:\\\\s*"Advanced \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Advanced Elite"', 'title:\\\\s*"Advanced Elite \\\\(Teens\\\\)"');
content = content.replace('title:\\\\s*"Masters of Fluency"', 'title:\\\\s*"Masters of Fluency \\\\(Teens\\\\)"');

fs.writeFileSync('add_teens_classes.mjs', content);
