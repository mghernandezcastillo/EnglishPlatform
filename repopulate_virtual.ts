import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFileAtPath('src/data/curriculum.ts');
const sourceFile = project.getSourceFileOrThrow('src/data/curriculum.ts');

const curriculumLevelsVar = sourceFile.getVariableDeclarationOrThrow('curriculumLevels');
const arrayLiteral = curriculumLevelsVar.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

const levels = arrayLiteral.getElements();

levels.forEach((levelNode, index) => {
    if (levelNode.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
    const obj = levelNode.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    
    const virtualEvalProp = obj.getProperty('virtualEvaluation');
    if (virtualEvalProp && virtualEvalProp.getKind() === SyntaxKind.PropertyAssignment) {
        let questions = [];
        for (let i = 1; i <= 20; i++) {
            let qText = `Question ${i} for level ${index + 1}?`;
            let a = "Option A";
            let b = "Option B";
            let c = "Option C";
            
            // Basic Zero (index 0)
            if (index === 0) {
               const subjects = ['I', 'You', 'He', 'She', 'It', 'We', 'They', 'My friend', 'The cat', 'Mary'];
               const beForms = ['am', 'are', 'is', 'is', 'is', 'are', 'are', 'is', 'is', 'is'];
               const subj = subjects[i % 10];
               const correctBe = beForms[i % 10];
               const wrong1 = correctBe === 'is' ? 'are' : 'is';
               const wrong2 = correctBe === 'am' ? 'is' : 'am';
               qText = `${subj} ___ from Spain.`;
               a = correctBe; b = wrong1; c = wrong2;
               if (i > 10) {
                  qText = `___ ${subj} happy?`;
                  if (subj === 'I') { qText = `___ you my teacher?`; a = 'Are'; b = 'Is'; c = 'Am'; }
               }
               if (i > 15) {
                   qText = `The color of an apple is usually ___.`;
                   a = 'red'; b = 'blue'; c = 'black';
               }
            }
            // A1 (index 1)
            else if (index === 1) {
               qText = `Every day, I ___ to school.`;
               if (i % 2 === 0) qText = `She ___ breakfast at 7 AM.`;
               a = i % 2 === 0 ? 'eats' : 'go';
               b = i % 2 === 0 ? 'eat' : 'goes';
               c = i % 2 === 0 ? 'eating' : 'going';
            }
            // A2 (index 2)
            else if (index === 2) {
               qText = `Yesterday, we ___ a great movie.`;
               if (i % 2 === 0) qText = `They didn't ___ to the party.`;
               a = i % 2 === 0 ? 'go' : 'watched';
               b = i % 2 === 0 ? 'went' : 'watch';
               c = i % 2 === 0 ? 'going' : 'watching';
            }
            // B1 (index 3)
            else if (index === 3) {
               qText = `I have ___ lived in London.`;
               if (i % 2 === 0) qText = `If it rains, we ___ home.`;
               a = i % 2 === 0 ? 'will stay' : 'never';
               b = i % 2 === 0 ? 'stay' : 'ever';
               c = i % 2 === 0 ? 'stayed' : 'yet';
            }
            // B1+ (index 4)
            else if (index === 4) {
               qText = `I'm looking forward to ___ you.`;
               if (i % 2 === 0) qText = `He denied ___ the money.`;
               a = i % 2 === 0 ? 'taking' : 'seeing';
               b = i % 2 === 0 ? 'to take' : 'see';
               c = i % 2 === 0 ? 'take' : 'to see';
            }
            // B2 (index 5)
            else if (index === 5) {
               qText = `By the time I arrived, she ___.`;
               if (i % 2 === 0) qText = `I wish I ___ more money.`;
               a = i % 2 === 0 ? 'had' : 'had left';
               b = i % 2 === 0 ? 'have' : 'has left';
               c = i % 2 === 0 ? 'am having' : 'left';
            }
            // C1 (index 6)
            else if (index === 6) {
               qText = `Not only ___ the exam, but she also got the highest mark.`;
               if (i % 2 === 0) qText = `It's high time we ___.`;
               a = i % 2 === 0 ? 'left' : 'did she pass';
               b = i % 2 === 0 ? 'leave' : 'she passed';
               c = i % 2 === 0 ? 'are leaving' : 'she did pass';
            }
            // C2 (index 7)
            else if (index === 7) {
               qText = `Scarcely ___ when the storm began.`;
               if (i % 2 === 0) qText = `He is alleged ___ involved in the scandal.`;
               a = i % 2 === 0 ? 'to have been' : 'had we arrived';
               b = i % 2 === 0 ? 'to be being' : 'we had arrived';
               c = i % 2 === 0 ? 'having been' : 'arrived we';
            }
            // Master (index 8)
            else if (index === 8) {
               qText = `The CEO's resignation came as a ___ from the blue.`;
               if (i % 2 === 0) qText = `He's completely ___ the bend.`;
               a = i % 2 === 0 ? 'round' : 'bolt';
               b = i % 2 === 0 ? 'around' : 'flash';
               c = i % 2 === 0 ? 'over' : 'strike';
            }
            
            const rawOpts = [a, b, c].sort(() => Math.random() - 0.5);
            
            questions.push(`{
                id: "vq-${index + 1}-${i}",
                type: "multiple-choice",
                question: "${qText}",
                options: ["${rawOpts[0]}", "${rawOpts[1]}", "${rawOpts[2]}"],
                correctAnswer: "${a}"
            }`);
        }

        virtualEvalProp.asKindOrThrow(SyntaxKind.PropertyAssignment).setInitializer(`[\n${questions.join(',\n')}\n]`);
    }
});

project.saveSync();
console.log('Virtual questions repopulated to exactly match VirtualQuestion interface.');
