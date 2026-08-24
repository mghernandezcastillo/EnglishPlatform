import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';
import { getContextualRoleplay } from './roleplayGenerator';

async function testTsMorph() {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath('src/data/curriculumTeens.ts');
  console.log('File loaded successfully! Line count:', sourceFile.getEndLineNumber());
}

testTsMorph().catch(console.error);
