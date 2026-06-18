import { Project, SyntaxKind, ArrayLiteralExpression, ObjectLiteralExpression } from 'ts-morph';
import fs from 'fs';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');

const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

const levels = curriculumArray.getElements();

let classCount = 0;

for (const level of levels) {
    if (level.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
    const levelObj = level as ObjectLiteralExpression;
    
    const classesProp = levelObj.getProperty('classes');
    if (!classesProp || classesProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
    
    // @ts-ignore
    const classesArray = classesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!classesArray) continue;
    
    const classes = classesArray.getElements();
    for (const cls of classes) {
        if (cls.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
        const clsObj = cls as ObjectLiteralExpression;
        
        const titleProp = clsObj.getProperty('title');
        // @ts-ignore
        const title = titleProp?.getInitializer()?.getText()?.replace(/["']/g, '');
        
        classCount++;
        
        const sectionsProp = clsObj.getProperty('sections');
        if (!sectionsProp || sectionsProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
        
        // @ts-ignore
        const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!sectionsArray) continue;
        
        const sections = sectionsArray.getElements();
        
        // Insert emoji slide in the "Practice & Reading" or the last section
        let targetSection = sections[sections.length - 1];
        for(const sec of sections) {
             const secObj = sec as ObjectLiteralExpression;
             const secTitle = secObj.getProperty('title')?.getText();
             if (secTitle && secTitle.includes('Practice')) {
                 targetSection = sec;
             }
        }
        
        if (targetSection && targetSection.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const tgtObj = targetSection as ObjectLiteralExpression;
            const slidesProp = tgtObj.getProperty('slides');
            if (slidesProp) {
                // @ts-ignore
                const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (slidesArray) {
                    const slides = slidesArray.getElements();
                    // check if already has emoji game
                    let hasEmoji = false;
                    for(const slide of slides) {
                        const slideObj = slide as ObjectLiteralExpression;
                        const typeProp = slideObj.getProperty('type');
                        if (typeProp && typeProp.getText().includes('emoji-game')) {
                            hasEmoji = true;
                        }
                    }
                    if (!hasEmoji) {
                        slidesArray.addElement(`{
                id: "Diapositiva-Emoji-Auto-\${classCount}",
                title: "Emojis Locos 🤪",
                description: "Interpreta el significado de estos emojis (" + ${JSON.stringify(title)} + ")",
                type: 'emoji-game',
                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                correctOptionIndex: 1
              }`);
                    }
                }
            }
        }
    }
}

sourceFile.saveSync();
console.log('Done processing', classCount, 'classes.');
