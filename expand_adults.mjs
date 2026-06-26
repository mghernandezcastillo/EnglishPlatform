import fs from 'fs';

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

// Find all classes with fewer than 10 slides and expand them
// We can use a regex or AST to replace the sections array.
// Regex might be easier since the classes have a uniform structure:
// `sections: [ ... ]`
// We'll write a parser to extract each class object string, check its slide count, and replace it if needed.

function processClass(classStr) {
    let slidesCount = (classStr.match(/id: "Diapositiva/g) || []).length;
    if (slidesCount >= 10) return classStr; // already expanded
    
    // Extract title and objective
    let titleMatch = classStr.match(/title:\s*"([^"]+)"/);
    let objMatch = classStr.match(/objective:\s*"([^"]+)"/);
    let classTitle = titleMatch ? titleMatch[1] : "Class";
    let classObj = objMatch ? objMatch[1] : "Objective";
    
    // Keep the prefix up to `sections: [`
    let sectionsIndex = classStr.indexOf('sections: [');
    if (sectionsIndex === -1) return classStr; // safety
    
    let prefix = classStr.substring(0, sectionsIndex + 'sections: [\n'.length);
    
    // We want to generate ~19 slides. 
    // Section 1: Warm-up (3 slides)
    // Section 2: Grammar / Vocabulary (7 slides)
    // Section 3: Practice (5 slides)
    // Section 4: Production (3 slides)
    // Section 5: Homework (1 slide)
    
    let newSections = `        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started.", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "${classObj}", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal: ${classTitle.replace('Clase ', '')}.",
          slides: [
            { id: "Diapositiva 4", title: "Concept 1", description: "Introduction to the main concept.", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples", description: "Look at these examples.", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary", description: "Key words for today.", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Structure", description: "How to form the sentences.", bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" },
            { id: "Diapositiva 8", title: "More Examples", description: "Let's read these together.", bgColor: "bg-gradient-to-br from-teal-600 to-emerald-700" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen and repeat.", bgColor: "bg-gradient-to-br from-teal-700 to-emerald-800" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-cyan-600 to-blue-700" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-amber-400 to-orange-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-amber-500 to-orange-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-amber-600 to-orange-700" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-500 to-amber-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-orange-600 to-amber-700" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
      ]`;
      
    // Find the end of sections array
    let braceCount = 1;
    let endIndex = -1;
    for (let i = sectionsIndex + 'sections: ['.length; i < classStr.length; i++) {
        if (classStr[i] === '[') braceCount++;
        if (classStr[i] === ']') braceCount--;
        if (braceCount === 0) {
            endIndex = i;
            break;
        }
    }
    
    if (endIndex !== -1) {
        return prefix + newSections + classStr.substring(endIndex + 1);
    }
    return classStr;
}

let newContent = content;

// Let's iterate over all classes. A class looks like:
// {
//   id: "...",
//   title: "...",
//   ...
//   sections: [ ... ]
// }

// To robustly replace them, we can use a regex that matches `{\s*id:\s*"c-[^"]+"` and parses braces
let classes = [];
const classRegex = /\{\s*id:\s*"c-(adults-[^"]+|bz-[^"]+|b1-[^"]+|b2-[^"]+|b3-[^"]+|b4-[^"]+|inter-[^"]+|adv-[^"]+|elite-[^"]+|masters-[^"]+)"/g;
let match;
while ((match = classRegex.exec(content)) !== null) {
    let startIdx = match.index;
    let braceCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '{') braceCount++;
        else if (content[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                endIdx = i + 1;
                break;
            }
        }
    }
    if (endIdx !== -1) {
        classes.push({
            start: startIdx,
            end: endIdx,
            text: content.substring(startIdx, endIdx)
        });
    }
}

// Process in reverse to avoid shifting indices
for (let i = classes.length - 1; i >= 0; i--) {
    let c = classes[i];
    let newText = processClass(c.text);
    if (newText !== c.text) {
        newContent = newContent.substring(0, c.start) + newText + newContent.substring(c.end);
    }
}

fs.writeFileSync('src/data/curriculum.ts', newContent, 'utf8');
console.log('Done!');
