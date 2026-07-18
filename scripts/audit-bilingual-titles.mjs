import { Project, SyntaxKind } from 'ts-morph';

const files = [
  'src/data/curriculum.ts',
  'src/data/curriculumKids.ts',
  'src/data/curriculumTeens.ts'
];

const project = new Project({ tsConfigFilePath: 'tsconfig.json' });

let total = 0;
let bad = 0;

for (const path of files) {
  const source = project.getSourceFileOrThrow(path);
  let fileTotal = 0;
  let fileBad = 0;

  for (const prop of source.getDescendantsOfKind(SyntaxKind.PropertyAssignment)) {
    const name = prop.getName().replace(/^["']|["']$/g, '');
    if (name !== 'title') continue;
    const initializer = prop.getInitializer();
    if (!initializer?.isKind(SyntaxKind.StringLiteral)) continue;

    const title = initializer.getLiteralText();
    total += 1;
    fileTotal += 1;

    if (!/\s\/\s/.test(title)) {
      bad += 1;
      fileBad += 1;
      const line = initializer.getStartLineNumber();
      console.log(`BAD ${path}:${line} ${title}`);
    }
  }

  console.log(`${path}: titles=${fileTotal} bad=${fileBad}`);
}

console.log(`TOTAL titles=${total} bad=${bad}`);

if (bad > 0) {
  process.exitCode = 1;
}
