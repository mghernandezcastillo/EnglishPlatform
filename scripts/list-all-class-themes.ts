import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from 'ts-morph';

const project = new Project();

function getProp(obj: ObjectLiteralExpression, name: string): PropertyAssignment | undefined {
  for (const p of obj.getProperties()) {
    if (p.isKind(SyntaxKind.PropertyAssignment)) {
      const propName = (p as PropertyAssignment).getName().replace(/^["']|["']$/g, '');
      if (propName === name) return p as PropertyAssignment;
    }
  }
  return undefined;
}

const files = [
  { name: 'Teens', path: 'src/data/curriculumTeens.ts', varName: 'curriculumTeensLevels' },
  { name: 'Adults', path: 'src/data/curriculum.ts', varName: 'curriculumLevels' },
  { name: 'Kids', path: 'src/data/curriculumKids.ts', varName: 'curriculumKidsLevels' },
];

for (const target of files) {
  const sourceFile = project.addSourceFileAtPath(target.path);
  const varDecl = sourceFile.getVariableDeclaration(target.varName);
  if (!varDecl) continue;

  const arrayLiteral = varDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arrayLiteral) continue;

  console.log(`\n================== ${target.name} ==================`);
  for (const levelExpr of arrayLiteral.getElements()) {
    if (!levelExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const levelObj = levelExpr as ObjectLiteralExpression;
    const levelId = getProp(levelObj, 'id')?.getInitializer()?.getText().replace(/^["']|["']$/g, '') || '';
    const levelTitle = getProp(levelObj, 'title')?.getInitializer()?.getText().replace(/^["']|["']$/g, '') || '';
    console.log(`\n📌 Level: [${levelId}] ${levelTitle}`);

    const classesProp = getProp(levelObj, 'classes');
    if (!classesProp) continue;
    const classesArray = classesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!classesArray) continue;

    for (const classExpr of classesArray.getElements()) {
      if (!classExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
      const classObj = classExpr as ObjectLiteralExpression;
      const classId = getProp(classObj, 'id')?.getInitializer()?.getText().replace(/^["']|["']$/g, '') || '';
      const classTitle = getProp(classObj, 'title')?.getInitializer()?.getText().replace(/^["']|["']$/g, '') || '';
      console.log(`   - [${classId}] ${classTitle}`);
    }
  }
}
