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
                        const emojiSet = [
                            { content: "💼 ➕ 🗣️ ➕ 🤝", options: ["I have a business meeting.", "Let's negotiate a deal.", "I am looking for a job."], correct: 1 },
                            { content: "✈️ ➕ 🏨 ➕ 🌴", options: ["We are going on vacation.", "I need to book a flight.", "I am lost in the city."], correct: 0 },
                            { content: "☕ ➕ 💻 ➕ 😩", options: ["I love drinking coffee.", "Working late makes me tired.", "My computer is broken."], correct: 1 },
                            { content: "📅 ➕ ❌ ➕ 😢", options: ["The meeting is cancelled.", "I lost my calendar.", "I am late for my appointment."], correct: 0 },
                            { content: "📈 ➕ 💰 ➕ 🎉", options: ["Sales are going up!", "I spent too much money.", "Let's have a party."], correct: 0 },
                            { content: "🚗 ➕ 🚦 ➕ 😡", options: ["I got a speeding ticket.", "The traffic is terrible.", "My car broke down."], correct: 1 },
                            { content: "🌧️ ➕ 🛋️ ➕ 📺", options: ["I will stay home and watch TV.", "It's raining outside.", "The TV is broken."], correct: 0 },
                            { content: "🏋️ ➕ 🥗 ➕ 💪", options: ["I need to eat healthy.", "I am getting fit.", "I don't like vegetables."], correct: 1 },
                            { content: "📱 ➕ 🔋 ➕ ☠️", options: ["My phone is dead.", "I need a new phone.", "I am playing a game."], correct: 0 },
                            { content: "🗣️ ➕ 👂 ➕ 🤔", options: ["Can you repeat that?", "I don't understand.", "I am listening carefully."], correct: 2 },
                            { content: "🏥 ➕ 🩺 ➕ 💊", options: ["I am feeling sick.", "I am a doctor.", "I need some medicine."], correct: 0 },
                            { content: "🎓 ➕ 📚 ➕ 🧠", options: ["I am studying hard.", "I forgot my book.", "I graduated from university."], correct: 0 },
                            { content: "🍕 ➕ 🍔 ➕ 🤤", options: ["I am very hungry.", "I like fast food.", "I am cooking dinner."], correct: 0 },
                            { content: "🛒 ➕ 💳 ➕ 🛍️", options: ["I am going shopping.", "I lost my credit card.", "I bought a new shirt."], correct: 0 },
                            { content: "⏰ ➕ 🏃 ➕ 🏃", options: ["I love running.", "I am late, hurry up!", "I need a new watch."], correct: 1 },
                        ];
                        const sel = emojiSet[Math.floor(Math.random() * emojiSet.length)];
                        slidesArray.addElement(`{
                id: "Diapositiva-Emoji-Auto-\${classCount}",
                title: "Emojis Locos 🤪",
                description: "Interpreta el significado de estos emojis (" + ${JSON.stringify(title)} + ")",
                type: 'emoji-game',
                content: ['${sel.content}'],
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                options: ${JSON.stringify(sel.options)},
                correctOptionIndex: ${sel.correct}
              }`);
                    }
                }
            }
        }
    }
}

sourceFile.saveSync();
console.log('Done processing', classCount, 'classes.');
