import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from 'ts-morph';

const files = [
  { name: 'Teens (curriculumTeens.ts)', path: 'src/data/curriculumTeens.ts', varName: 'curriculumTeensLevels' },
  { name: 'Adults (curriculum.ts)', path: 'src/data/curriculum.ts', varName: 'curriculumLevels' },
  { name: 'Kids (curriculumKids.ts)', path: 'src/data/curriculumKids.ts', varName: 'curriculumKidsLevels' },
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

const project = new Project();

for (const target of files) {
  const sourceFile = project.addSourceFileAtPath(target.path);
  const varDecl = sourceFile.getVariableDeclaration(target.varName);
  if (!varDecl) continue;

  const arrayLiteral = varDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arrayLiteral) continue;

  let totalClasses = 0;
  let letsSayCount = 0;
  let alphabetGameCount = 0;
  let missingCount = 0;

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
      totalClasses++;

      const sectionsProp = getProp(classObj, 'sections');
      if (!sectionsProp) continue;

      const sectionsArray = sectionsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (!sectionsArray) continue;

      let found = false;
      for (const secExpr of sectionsArray.getElements()) {
        if (!secExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
        const secObj = secExpr as ObjectLiteralExpression;
        const slidesProp = getProp(secObj, 'slides');
        if (!slidesProp) continue;
        const slidesArray = slidesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!slidesArray) continue;

        for (const sExpr of slidesArray.getElements()) {
          if (!sExpr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
          const sObj = sExpr as ObjectLiteralExpression;
          const typeProp = getProp(sObj, 'type');
          const typeVal = typeProp?.getInitializer()?.getText().replace(/^["']|["']$/g, '');

          if (typeVal === 'lets-say') {
            letsSayCount++;
            found = true;
            break;
          } else if (typeVal === 'alphabet-game') {
            alphabetGameCount++;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) missingCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`📁 ${target.name}`);
  console.log(`   Total clases: ${totalClasses}`);
  console.log(`   Speaking Time (lets-say): ${letsSayCount}`);
  console.log(`   Alphabet Game: ${alphabetGameCount}`);
  console.log(`   Sin actividad de producción: ${missingCount}`);
  console.log(`   ✅ Cobertura: ${(((letsSayCount + alphabetGameCount) / totalClasses) * 100).toFixed(1)}%`);
}
