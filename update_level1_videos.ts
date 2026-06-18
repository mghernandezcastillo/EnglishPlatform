import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

async function run() {
    const level1Videos = [
        "Ea5k9eZg7rk", // Class 1: Greetings (Jimmy Neutron)
        "3hOP7qPDyI4", // Class 2: Time
        "nEUzQ7yL9A0", // Class 3: Emotions (Inside Out)
        "yL-owHxF2lc", // Class 4: Family (Incredibles)
        "ukDk1EKUOMk", // Class 5: Places (London Vlog)
        "mXMofxtDPUQ", // Class 6: Days/Months
        "MKHVBV_a2YI", // Class 7: Shopping (Mr Bean)
        "i-80SGWfEjM", // Class 8: Pets (Secret Life of Pets)
        "3YG4h5GbTqU", // Class 9: Food (Ratatouille)
        "sCgnuhb45ik"  // Class 10: Directions (Paddington)
    ];

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');

    const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const levels = curriculumArray.getElements();

    // Just level 0 (A1)
    const level0 = levels[0] as ObjectLiteralExpression;
    const classesProp = level0.getProperty('classes');
    
    // @ts-ignore
    const classesArray = classesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    const classes = classesArray.getElements();
    
    for (let c = 0; c < classes.length; c++) {
        const clsObj = classes[c] as ObjectLiteralExpression;
        const sectionsProp = clsObj.getProperty('sections');
        
        // @ts-ignore
        const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        const sections = sectionsArray.getElements();
        const targetSection = sections[sections.length - 1]; // last section
        
        if (targetSection && targetSection.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const tgtObj = targetSection as ObjectLiteralExpression;
            const slidesProp = tgtObj.getProperty('slides');
            if (slidesProp) {
                // @ts-ignore
                const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (slidesArray) {
                    const slides = slidesArray.getElements();
                    for (const slide of slides) {
                        const slideObj = slide as ObjectLiteralExpression;
                        const typeProp = slideObj.getProperty('type');
                        if (typeProp && typeProp.getText().includes('video')) {
                            const urlProp = slideObj.getProperty('videoUrl');
                            if (urlProp && c < level1Videos.length) {
                                // @ts-ignore
                                urlProp.setInitializer(`"https://www.youtube.com/embed/${level1Videos[c]}"`);
                            }
                        }
                    }
                }
            }
        }
    }
    
    sourceFile.saveSync();
    console.log("Updated videos for Level A1!");
}

run();
