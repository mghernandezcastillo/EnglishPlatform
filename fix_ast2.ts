import * as fs from 'fs';
let content = fs.readFileSync('ast_update.ts', 'utf8');
content = content.replace("getVariableDeclarationOrThrow('curriculum')", "getVariableDeclarationOrThrow('curriculumLevels')");
fs.writeFileSync('ast_update.ts', content);
