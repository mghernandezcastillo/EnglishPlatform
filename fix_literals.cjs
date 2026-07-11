const fs = require('fs');

// We already generated the JS objects inside generate_classes.cjs.
// Let's just copy the class objects definition from generate_classes.cjs
const file = fs.readFileSync('generate_classes.cjs', 'utf8');

eval(file.split('const c1Str')[0]); 
// This gives us class1, class2, class3, class4

const path = 'src/data/curriculum.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace('${c1Str}', JSON.stringify(class1, null, 2));
content = content.replace('${c2Str}', JSON.stringify(class2, null, 2));
content = content.replace('${c3Str}', JSON.stringify(class3, null, 2));
content = content.replace('${c4Str}', JSON.stringify(class4, null, 2));

fs.writeFileSync(path, content);
console.log("Success");
