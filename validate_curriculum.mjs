import fs from 'fs';

function validate(filename) {
    const c = fs.readFileSync(filename, 'utf8');
    
    // Find levels
    const levels = [];
    const levelRegex = /\{\s*"id":\s*"(basic-[^"]+|teens-[^"]+|a-[^"]+|level-[^"]+|[A-Za-z0-9-]+)"\s*,\s*"title":\s*"([^"]+)"/g;
    
    let lMatch;
    while((lMatch = levelRegex.exec(c)) !== null) {
        if (lMatch[1].startsWith('s') || lMatch[1].startsWith('c-')) {
            // maybe sections/slides, but we know level ids usually
        }
        // Let's just find "classes": [ to bound levels
    }
}
