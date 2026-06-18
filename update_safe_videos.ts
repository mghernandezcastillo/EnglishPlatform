import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

async function run() {
    const safeEducationalVideos = [
        "aI_fREymNjI", // BBC greetings
        "81MmK177K_c", // BBC telling the time
        "awWfoQONORg", // Vanessa emotions
        "vXI2lRCnTKw", // Oxford family
        "on_1sS6Ii8M", // BBC there is there are
        "DRl6tpsxchw", // Lucy months and days
        "oBatJc1VZCE", // BBC articles
        "FD1IpuXSq74", // Speaking Success body parts
        "OjzsRpUBXbY", // Vanessa food
        "SHXPpsIJTb0", // BBC directions
        
        "LAywO9NM7ws", // Oxford will vs going to
        "qfumAs6o-xc", // Vanessa future plan
        "HQcsDi9u5-g", // Oxford present simple routines
        "xFsYrTIndhI", // BBC present continuous
        "m04lQ5BUAn0", // Oxford past simple
        "MGLedoA3SSE", // BBC past continuous
        "qNAfpbnIQkc", // BBC ED pronunciation
        "KaA_mxga3PQ", // Oxford speaking fluently
        
        "Fsz3T4MT2gc", // Oxford future progressive
        "jwmKjgwlMk8", // BBC past simple vs present perfect
        "Gyur6S_H9vE", // Oxford
        "FAhpT7BH7GE", // BBC
        "jRmKBjcNhNA", // BBC
        "CmqOXaSUpFo", // Oxford
        "KN2jyw6D1ak", // BBC
        "UNF8Vnrpxno", // BBC
        "jul2urONzOQ", // Oxford
        
        "jz-7F-BV9TE", // Lucy supermarket
        "MA7muIjKaWY", // Vanessa likes and dislikes
        "Ljjiw9mC_Cg", // Lucy past tense story
        "Gh_GHNlyEXM", // greetings
        "JgB6-RWnV9M", // BBC traveling
        "v_fbJnVMHAg", // speaking success pets
        "XyDbnulyno8"  // BBC future arrangements
    ];

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');
    const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const levels = curriculumArray.getElements();

    let videoIndex = 0;
    
    for (let l = 0; l < levels.length; l++) {
        const levelObj = levels[l] as ObjectLiteralExpression;
        const classesProp = levelObj.getProperty('classes');
        const classesArray = classesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        const classes = classesArray.getElements();

        for (let c = 0; c < classes.length; c++) {
            const clsObj = classes[c] as ObjectLiteralExpression;
            const sectionsProp = clsObj.getProperty('sections');
            const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
            const sections = sectionsArray.getElements();
            const targetSection = sections[sections.length - 1]; 
            
            if (targetSection && targetSection.getKind() === SyntaxKind.ObjectLiteralExpression) {
                const tgtObj = targetSection as ObjectLiteralExpression;
                const slidesProp = tgtObj.getProperty('slides');
                if (slidesProp) {
                    const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                    if (slidesArray) {
                        for (const slide of slidesArray.getElements()) {
                            const slideObj = slide as ObjectLiteralExpression;
                            const typeProp = slideObj.getProperty('type');
                            if (typeProp && typeProp.getText().includes('video')) {
                                const urlProp = slideObj.getProperty('videoUrl');
                                if (urlProp) {
                                    // Use a valid ID from the array, looping back if necessary
                                    const nextId = safeEducationalVideos[videoIndex % safeEducationalVideos.length];
                                    urlProp.setInitializer(`"https://www.youtube.com/embed/${nextId}"`);
                                    videoIndex++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    sourceFile.saveSync();
    console.log(`Updated curriculum with pure educational videos! Distributed ${videoIndex} videos.`);
}

run();
