import { Project, SyntaxKind, ArrayLiteralExpression, ObjectLiteralExpression } from 'ts-morph';

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
        
        classCount++;
        
        const sectionsProp = clsObj.getProperty('sections');
        if (!sectionsProp || sectionsProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
        
        // @ts-ignore
        const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!sectionsArray) continue;
        
        const sections = sectionsArray.getElements();
        
        // Get the very last section (typically Wrap-up)
        const targetSection = sections[sections.length - 1];
        
        if (targetSection && targetSection.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const tgtObj = targetSection as ObjectLiteralExpression;
            const slidesProp = tgtObj.getProperty('slides');
            if (slidesProp) {
                // @ts-ignore
                const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (slidesArray) {
                    const slides = slidesArray.getElements();
                    let hasVideo = false;
                    for(const slide of slides) {
                        const slideObj = slide as ObjectLiteralExpression;
                        const typeProp = slideObj.getProperty('type');
                        // Some slides might already be video
                        if (typeProp && typeProp.getText().includes('video')) {
                            hasVideo = true;
                        }
                    }
                    if (!hasVideo) {
                        slidesArray.addElement(`{
                id: "Diapositiva-Video-Homework-${classCount}",
                title: "Video Homework 📹",
                description: "Watch this short video and listen carefully.",
                type: 'video',
                videoUrl: "https://www.youtube.com/embed/juKd26qkNAw",
                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
              }`);
                    }
                }
            }
        }
    }
}

sourceFile.saveSync();
console.log('Done processing video homework for', classCount, 'classes.');
