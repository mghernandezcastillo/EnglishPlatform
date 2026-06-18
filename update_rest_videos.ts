import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

async function run() {
    const videoMap = [
        // Level 0 (A1) is already done, keeping it empty to match indexes
        [],
        // Level 1: A2.1
        [
            "G3AfIvJBcGo", // Back to the Future
            "qLc0OKfkY1w", // Avengers
            "4DQsG3TKQ0I", // Terminator
            "IpwSXWq1wwU"  // Jerry Maguire
        ],
        // Level 2: A2.2
        [
            "RjKNbfA64EE", // American Psycho
            "xuS9UxuUZ3Y", // Shrek
            "hdcTmpvDO0I", // Madagascar
            "q2nNzNo_Xps"  // Doctor Who
        ],
        // Level 3: B1.1
        [
            "bSMxl1V8FSg", // Forrest Gump
            "zsrtPvKey-U", // Lion King
            "Jol7jXpZLdE", // Harry Potter
            "qQy-8CNudkY"  // Batman Pronunciation
        ],
        // Level 4: B1.2
        [
            "mhu-_LT7Xyo", // Avengers Endgame
            "sjoad6gcRzs", // Matrix
            "BHl-ewebWvQ", // Star Wars Obi Wan
            "HDJEyqNw-9k"  // Kingsman
        ],
        // Level 5: B2.1
        [
            "XO77YuyMOek", // Up Married Life
            "MoLkabPK3YU", // Interstellar
            "BXlYuaycRbU", // Lorax
            "vScOC2K25Qc", // Toy story
            "y9FGsJ3PYVw", // Finding Nemo
            "i3-jlhJgU9U"  // Inception
        ],
        // Level 6: B2.2
        [
            "b2f2Kqt_KcE", // Devil Wears Prada
            "HmdpjkM3onk", // Gladiator
            "Ho6t683GazQ", // Sherlock Holmes
            "OwfNjGxa_D4"  // Office Space
        ],
        // Level 7: C1.1
        [
            "9UspZGJ-TrI", // Wolf of Wallstreet
            "P6xkjNl4iCM", // Back to the Future 3
            "WHzk03QKFQk", // Eat pray love
            "wKn1R6fekk4", // V for vendetta
            "b23wrRfy7SM"  // Spiderman
        ],
        // Level 8: C1.2
        [
            "G9-m_CdmBg8", // Social Network
            "FFZs0cApsWA", // Black Mirror
            "XAD13c3UkS0", // Beautiful mind
            "vi0Lbjs5ECI"  // Dead Poets Society
        ]
    ];

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');

    const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const levels = curriculumArray.getElements();

    // Skip level 0
    for (let l = 1; l < levels.length; l++) {
        const levelVideos = videoMap[l] || [];
        if (levelVideos.length === 0) continue;

        const levelObj = levels[l] as ObjectLiteralExpression;
        const classesProp = levelObj.getProperty('classes');
        
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
                                if (urlProp && c < levelVideos.length) {
                                    // @ts-ignore
                                    urlProp.setInitializer(`"https://www.youtube.com/embed/${levelVideos[c]}"`);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    sourceFile.saveSync();
    console.log("Updated videos for all other levels!");
}

run();
