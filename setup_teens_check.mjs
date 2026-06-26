import fs from 'fs';

let code = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');
code = code.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+['"][^'"]+\.jpg['"];/g, 'const $1 = "";');
code = code.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+['"][^'"]+\.png['"];/g, 'const $1 = "";');
code = code.replace(/from '\.\.\/types'/g, "from './src/types'");
code = code.replace(/from '\.\/lessons'/g, "from './src/data/lessons'");
fs.writeFileSync('tempTeens.ts', code, 'utf8');
