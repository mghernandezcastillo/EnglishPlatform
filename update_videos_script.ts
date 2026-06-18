import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

async function run() {
    console.log("Generating pool of valid videos from YouTube...");
    const queries = [
        "learn+english+verb+to+be",
        "learn+english+present+continuous",
        "learn+english+past+simple",
        "learn+english+modal+verbs",
        "learn+english+present+perfect",
        "learn+english+vocabulary",
        "learn+english+daily+routines"
    ];

    const pool = new Set<string>();
    
    // Some already known valid ones
    pool.add("qJ29O8RK08Y");
    pool.add("Fw0rdSHzWFY");
    pool.add("juKd26qkNAw");
    pool.add("Z19NAX_gWxI");
    pool.add("dAz3UmAKvDU");
    pool.add("nvVdIJ0las0");

    for (const q of queries) {
        try {
            const res = await fetch(`https://www.youtube.com/results?search_query=${q}`);
            const html = await res.text();
            
            // Extract video IDs
            const matches = [...new Set(Array.from(html.matchAll(/\"videoId\":\"([a-zA-Z0-9_-]{11})\"/g)).map(m=>m[1]))];
            
            let addedFromQuery = 0;
            for(const id of matches) {
                if(pool.has(id)) continue;
                
                // Verify with oembed
                const verify = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
                if(verify.status === 200) {
                    pool.add(id);
                    addedFromQuery++;
                    if (addedFromQuery >= 2) break; // Get 2 per query
                }
            }
        } catch(e) {}
        await new Promise(r => setTimeout(r, 1000));
    }

    const finalPool = Array.from(pool);
    console.log("Final Pool size:", finalPool.length);

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/data/curriculum.ts');

    const curriculumArray = sourceFile.getVariableDeclaration('curriculumLevels').getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const levels = curriculumArray.getElements();

    let i = 0;
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
            const sectionsProp = clsObj.getProperty('sections');
            if (!sectionsProp || sectionsProp.getKind() !== SyntaxKind.PropertyAssignment) continue;
            // @ts-ignore
            const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
            if (!sectionsArray) continue;
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
                                if (urlProp) {
                                    const nextId = finalPool[i % finalPool.length];
                                    // @ts-ignore
                                    urlProp.setInitializer(`"https://www.youtube.com/embed/${nextId}"`);
                                    i++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    sourceFile.saveSync();
    console.log("Updated videos using diverse validated pool!");
}

run();
