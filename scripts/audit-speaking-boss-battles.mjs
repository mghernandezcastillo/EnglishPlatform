import { Project, SyntaxKind } from 'ts-morph';

const files = [
  { path: 'src/data/curriculum.ts', audience: 'adults' },
  { path: 'src/data/curriculumKids.ts', audience: 'kids' },
  { path: 'src/data/curriculumTeens.ts', audience: 'teens' }
];

const project = new Project({ tsConfigFilePath: 'tsconfig.json' });

function stringValue(prop) {
  const initializer = prop?.getInitializer();
  if (!initializer) return '';
  if (initializer.getKind() === SyntaxKind.StringLiteral) return initializer.getLiteralText();
  return initializer.getText().replace(/^["'`]|["'`]$/g, '');
}

function getProp(objectLiteral, name) {
  return objectLiteral.getProperties().find((prop) => {
    if (!prop.isKind(SyntaxKind.PropertyAssignment)) return false;
    return prop.getName().replace(/^["']|["']$/g, '') === name;
  });
}

function getArrayProp(objectLiteral, name) {
  const prop = getProp(objectLiteral, name);
  return prop?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
}

let totalClasses = 0;
let totalBoss = 0;
let bad = 0;

for (const item of files) {
  const source = project.getSourceFileOrThrow(item.path);
  const classObjects = source.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression).filter((objectLiteral) => {
    const id = stringValue(getProp(objectLiteral, 'id'));
    return id.startsWith('c-') && !!getArrayProp(objectLiteral, 'sections');
  });

  let fileBoss = 0;

  for (const classObject of classObjects) {
    totalClasses += 1;
    const id = stringValue(getProp(classObject, 'id'));
    const title = stringValue(getProp(classObject, 'title'));
    const sections = getArrayProp(classObject, 'sections');
    let count = 0;
    let hasTopic = false;

    sections?.getElements().forEach((section) => {
      if (!section.isKind(SyntaxKind.ObjectLiteralExpression)) return;
      const slides = getArrayProp(section, 'slides');
      slides?.getElements().forEach((slide) => {
        if (!slide.isKind(SyntaxKind.ObjectLiteralExpression)) return;
        if (stringValue(getProp(slide, 'type')) === 'speaking-boss-battle') {
          count += 1;
          const titleProp = getProp(slide, 'speakingBossBattle')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)?.getProperty('bossTitle');
          hasTopic = !!stringValue(titleProp);
        }
      });
    });

    fileBoss += count;
    totalBoss += count;

    if (count !== 1 || !hasTopic) {
      bad += 1;
      console.log(`BAD ${item.audience} ${id} count=${count} hasTopic=${hasTopic} title=${title}`);
    }
  }

  console.log(`${item.audience}: classes=${classObjects.length} speakingBoss=${fileBoss}`);
}

console.log(`TOTAL classes=${totalClasses} speakingBoss=${totalBoss} bad=${bad}`);

if (bad > 0 || totalClasses !== totalBoss) {
  process.exitCode = 1;
}
