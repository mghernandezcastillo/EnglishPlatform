import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from 'ts-morph';
import { getContextualRoleplay } from './roleplayGenerator';

interface MigrationTarget {
  filePath: string;
  audience: 'teens' | 'adults' | 'kids';
  arrayVarName: string;
}

const targets: MigrationTarget[] = [
  {
    filePath: 'src/data/curriculumTeens.ts',
    audience: 'teens',
    arrayVarName: 'curriculumTeensLevels',
  },
  {
    filePath: 'src/data/curriculum.ts',
    audience: 'adults',
    arrayVarName: 'curriculumLevels',
  },
  {
    filePath: 'src/data/curriculumKids.ts',
    audience: 'kids',
    arrayVarName: 'curriculumKidsLevels',
  },
];

function getProp(obj: ObjectLiteralExpression, name: string): PropertyAssignment | undefined {
  for (const p of obj.getProperties()) {
    if (p.isKind(SyntaxKind.PropertyAssignment)) {
      const propName = (p as PropertyAssignment).getName().replace(/^["']|["']$/g, '');
      if (propName === name) return p as PropertyAssignment;
    }
  }
  return undefined;
}

function stringifyValue(val: any, indent = 16): string {
  const json = JSON.stringify(val, null, 2);
  const lines = json.split('\n');
  return lines.map((line, idx) => (idx === 0 ? line : ' '.repeat(indent) + line)).join('\n');
}

async function migrateFile(project: Project, target: MigrationTarget) {
  console.log(`\n======================================================`);
  console.log(`📂 Processing: ${target.filePath} (${target.audience})`);
  console.log(`======================================================`);

  const sourceFile = project.addSourceFileAtPath(target.filePath);
  const varDecl = sourceFile.getVariableDeclaration(target.arrayVarName);
  if (!varDecl) {
    console.error(`❌ Could not find variable ${target.arrayVarName} in ${target.filePath}`);
    return;
  }

  const arrayLiteral = varDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arrayLiteral) {
    console.error(`❌ Variable ${target.arrayVarName} is not an array literal in ${target.filePath}`);
    return;
  }

  let totalClassesUpdated = 0;
  let totalAlphabetGames = 0;
  let totalLetsSay = 0;

  for (const levelExpr of arrayLiteral.getElements()) {
    if (!levelExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const levelObj = levelExpr as ObjectLiteralExpression;

    const classesProp = getProp(levelObj, 'classes');
    if (!classesProp) continue;

    const classesArray = classesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!classesArray) continue;

    for (const classExpr of classesArray.getElements()) {
      if (!classExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
      const classObj = classExpr as ObjectLiteralExpression;

      // Extract class title & objective
      const titleProp = getProp(classObj, 'title');
      const objProp = getProp(classObj, 'objective') || getProp(classObj, 'description');

      let classTitle = '';
      let classObjective = '';

      if (titleProp) {
        const init = titleProp.getInitializer();
        if (init) classTitle = init.getText().replace(/^["']|["']$/g, '');
      }

      if (objProp) {
        const init = objProp.getInitializer();
        if (init) classObjective = init.getText().replace(/^["']|["']$/g, '');
      }

      const sectionsProp = getProp(classObj, 'sections');
      if (!sectionsProp) continue;

      const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (!sectionsArray) continue;

      // Find Section 4 (Production)
      let section4Obj: ObjectLiteralExpression | null = null;
      for (const secExpr of sectionsArray.getElements()) {
        if (!secExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
        const secObj = secExpr as ObjectLiteralExpression;
        const secTitleProp = getProp(secObj, 'title');
        const secIdProp = getProp(secObj, 'id');

        let secTitle = '';
        let secId = '';
        if (secTitleProp) {
          const init = secTitleProp.getInitializer();
          if (init) secTitle = init.getText();
        }
        if (secIdProp) {
          const init = secIdProp.getInitializer();
          if (init) secId = init.getText();
        }

        if (/production|producci[oó]n|4\.|s4/i.test(secTitle) || /s4|s004/i.test(secId)) {
          section4Obj = secObj;
          break;
        }
      }

      // If not found by title, try 4th section (index 3)
      if (!section4Obj) {
        const elements = sectionsArray.getElements();
        if (elements.length >= 4 && elements[3].isKind(SyntaxKind.ObjectLiteralExpression)) {
          section4Obj = elements[3] as ObjectLiteralExpression;
        } else if (elements.length > 0 && elements[elements.length - 2].isKind(SyntaxKind.ObjectLiteralExpression)) {
          section4Obj = elements[elements.length - 2] as ObjectLiteralExpression;
        }
      }

      if (!section4Obj) continue;

      const slidesProp = getProp(section4Obj, 'slides');
      if (!slidesProp) continue;

      const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (!slidesArray) continue;

      // Find roleplay slide in Section 4
      let roleplaySlideObj: ObjectLiteralExpression | null = null;
      for (const slideExpr of slidesArray.getElements()) {
        if (!slideExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
        const sObj = slideExpr as ObjectLiteralExpression;

        const typeProp = getProp(sObj, 'type');
        const titleP = getProp(sObj, 'title');

        let sType = '';
        let sTitle = '';
        if (typeProp) {
          const init = typeProp.getInitializer();
          if (init) sType = init.getText().replace(/^["']|["']$/g, '');
        }
        if (titleP) {
          const init = titleP.getInitializer();
          if (init) sTitle = init.getText().replace(/^["']|["']$/g, '');
        }

        if (
          sType === 'roleplay' ||
          sType === 'lets-say' ||
          sType === 'alphabet-game' ||
          /roleplay|juego de roles|lets-say|let's say|alphabet challenge/i.test(sTitle)
        ) {
          roleplaySlideObj = sObj;
          break;
        }
      }

      // Fallback: if not found, use the last slide in Section 4 if it's not a boss battle or quiz
      if (!roleplaySlideObj) {
        const sElements = slidesArray.getElements();
        for (let i = sElements.length - 1; i >= 0; i--) {
          const sObj = sElements[i] as ObjectLiteralExpression;
          const typeProp = getProp(sObj, 'type');
          let sType = '';
          if (typeProp) {
            const init = typeProp.getInitializer();
            if (init) sType = init.getText().replace(/^["']|["']$/g, '');
          }
          if (sType !== 'speaking-boss-battle' && sType !== 'spinning-wheel') {
            roleplaySlideObj = sObj;
            break;
          }
        }
      }

      if (!roleplaySlideObj) continue;

      const upgrade = getContextualRoleplay(classTitle, classObjective, target.audience);
      if (!upgrade) continue;

      // Remove outdated properties
      const propsToRemove = ['type', 'title', 'description', 'roleplay', 'letsSay', 'speakingScene', 'alphabetGame', 'content', 'options', 'correctOptionIndex'];
      for (const p of propsToRemove) {
        const prop = getProp(roleplaySlideObj, p);
        if (prop) prop.remove();
      }

      // Add updated properties
      roleplaySlideObj.addPropertyAssignment({
        name: 'type',
        initializer: JSON.stringify(upgrade.type),
      });

      roleplaySlideObj.addPropertyAssignment({
        name: 'title',
        initializer: JSON.stringify(upgrade.title),
      });

      roleplaySlideObj.addPropertyAssignment({
        name: 'description',
        initializer: JSON.stringify(upgrade.description),
      });

      if (upgrade.type === 'speaking-scene' && upgrade.speakingScene) {
        roleplaySlideObj.addPropertyAssignment({
          name: 'speakingScene',
          initializer: stringifyValue(upgrade.speakingScene, 18),
        });
        totalLetsSay++;
      } else if (upgrade.type === 'alphabet-game' && upgrade.alphabetGame) {
        roleplaySlideObj.addPropertyAssignment({
          name: 'alphabetGame',
          initializer: stringifyValue(upgrade.alphabetGame, 18),
        });
        totalAlphabetGames++;
      }

      totalClassesUpdated++;
    }
  }

  console.log(`💾 Saving changes to ${target.filePath}...`);
  sourceFile.saveSync();
  console.log(`✅ ${target.filePath} updated: ${totalClassesUpdated} classes (Speaking Scene: ${totalLetsSay}, Alphabet Games: ${totalAlphabetGames})`);
}

async function runAll() {
  const project = new Project();
  for (const target of targets) {
    await migrateFile(project, target);
  }
  console.log('\n🎉 ALL CURRICULUM FILES SUCCESSFULLY UPGRADED!');
}

runAll().catch(console.error);
