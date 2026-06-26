import fs from 'fs';

const c = fs.readFileSync('src/data/curriculum.ts', 'utf8');

function extractClass(id) {
    let startIdx = c.indexOf('id: "' + id + '"');
    if (startIdx === -1) return null;
    
    // go backwards to find the {
    let i = startIdx;
    while (i > 0 && c[i] !== '{') i--;
    startIdx = i;
    
    let braceCount = 0;
    let endIdx = -1;
    let inString = false;
    let escape = false;
    for (i = startIdx; i < c.length; i++) {
        if (escape) {
            escape = false;
            continue;
        }
        if (c[i] === '\\') {
            escape = true;
            continue;
        }
        if (c[i] === '"') {
            inString = !inString;
            continue;
        }
        if (!inString) {
            if (c[i] === '{') braceCount++;
            if (c[i] === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endIdx = i + 1;
                    break;
                }
            }
        }
    }
    return c.substring(startIdx, endIdx);
}

const classIds = ['c-bz-1', 'c-bz-2', 'c-bz-3', 'c-bz-4', 'c-bz-5', 'c-bz-6', 'c-bz-7', 'c-bz-8', 'c-bz-9', 'c-bz-10', 'c-b1-1', 'c-b1-2', 'c-b1-3', 'c-b1-4', 'c-b2-1', 'c-b2-2', 'c-b2-3', 'c-b2-4'];

let customs = {};
for (let id of classIds) {
    let text = extractClass(id);
    if (!text) console.log('MISSING:', id);
    else customs[id] = text;
}

fs.writeFileSync('customs.json', JSON.stringify(customs, null, 2), 'utf8');
console.log('Saved customs.json, count:', Object.keys(customs).length);
