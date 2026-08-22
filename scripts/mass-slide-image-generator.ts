import fs from 'node:fs/promises';
import path from 'node:path';
import { Project, SyntaxKind, ArrayLiteralExpression, ObjectLiteralExpression } from 'ts-morph';
import { SLIDE_TYPE_REGISTRY } from '../src/config/slideTypeRegistry';
import { STYLE_PRESETS, GeminiImageService } from '../src/lib/geminiImageService';
import { ClassSlide } from '../src/types';

/**
 * CLI Mass Slide Image Generator & Context Formulator
 * Usage: npx tsx scripts/mass-slide-image-generator.ts --track=adulto --class=c-bz-1 --style=photoreal-pro
 */

const repoRoot = process.cwd();

function findProperty(obj: ObjectLiteralExpression, propName: string) {
  return obj.getProperties().find(p => {
    if (p.isKind(SyntaxKind.PropertyAssignment)) {
      const nameNode = p.getNameNode();
      const rawText = nameNode.getText().replace(/^["']|["']$/g, '');
      return rawText === propName;
    }
    return false;
  }) as any;
}

function getStringProp(obj: ObjectLiteralExpression, propName: string): string | undefined {
  const prop = findProperty(obj, propName);
  if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return undefined;
  const initializer = prop.getInitializer();
  if (!initializer) return undefined;
  if (initializer.isKind(SyntaxKind.StringLiteral) || initializer.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
    return initializer.getLiteralText();
  }
  return undefined;
}

function getStringArrayProp(obj: ObjectLiteralExpression, propName: string): string[] | undefined {
  const prop = findProperty(obj, propName);
  if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return undefined;
  const initializer = prop.getInitializer();
  if (!initializer || !initializer.isKind(SyntaxKind.ArrayLiteralExpression)) return undefined;
  return (initializer as ArrayLiteralExpression).getElements().map(el => {
    if (el.isKind(SyntaxKind.StringLiteral) || el.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
      return el.getLiteralText();
    }
    return '';
  }).filter(Boolean);
}

function getNumberProp(obj: ObjectLiteralExpression, propName: string): number | undefined {
  const prop = findProperty(obj, propName);
  if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return undefined;
  const initializer = prop.getInitializer();
  if (!initializer || !initializer.isKind(SyntaxKind.NumericLiteral)) return undefined;
  return initializer.getLiteralValue();
}

async function main() {
  const args = process.argv.slice(2);
  const trackArg = args.find(a => a.startsWith('--track='))?.split('=')[1] || 'adulto';
  const classArg = args.find(a => a.startsWith('--class='))?.split('=')[1];
  const styleArg = args.find(a => a.startsWith('--style='))?.split('=')[1] || 'photoreal-pro';

  console.log(`\n🎨 [MASS SLIDE IMAGE STUDIO] Initializing AST Parser for track: "${trackArg}", style: "${styleArg}"`);

  let targetFile = path.join(repoRoot, 'src', 'data', 'curriculum.ts');
  if (trackArg === 'niño') targetFile = path.join(repoRoot, 'src', 'data', 'curriculumKids.ts');
  if (trackArg === 'adolescente') targetFile = path.join(repoRoot, 'src', 'data', 'curriculumTeens.ts');

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(targetFile);

  const varName = trackArg === 'niño' ? 'curriculumKidsLevels' : trackArg === 'adolescente' ? 'curriculumTeensLevels' : 'curriculumLevels';
  const varDecl = sourceFile.getVariableDeclaration(varName);
  const levelsArray = varDecl?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression) || sourceFile.getFirstDescendantByKind(SyntaxKind.ArrayLiteralExpression);
  if (!levelsArray) {
    console.error('❌ Could not find curriculum array in', targetFile);
    process.exit(1);
  }

  let totalClassesFound = 0;
  let totalVisualSlides = 0;

  for (const levelElement of levelsArray.getElements()) {
    if (!levelElement.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const levelObj = levelElement as ObjectLiteralExpression;
    const levelTitle = getStringProp(levelObj, 'title') || 'Untitled Level';

    const classesProp = findProperty(levelObj, 'classes');
    if (!classesProp || !classesProp.isKind(SyntaxKind.PropertyAssignment)) continue;
    const classesInit = classesProp.getInitializer();
    if (!classesInit || !classesInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

    for (const classEl of (classesInit as ArrayLiteralExpression).getElements()) {
      if (!classEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
      const classObj = classEl as ObjectLiteralExpression;
      const classId = getStringProp(classObj, 'id') || '';
      const classTitle = getStringProp(classObj, 'title') || '';
      const classDesc = getStringProp(classObj, 'description') || '';

      if (classArg && classId !== classArg) continue;

      totalClassesFound++;
      console.log(`\n========================================`);
      console.log(`🚀 Class: ${classTitle} [${classId}]`);
      console.log(`   Level: ${levelTitle}`);
      console.log(`========================================`);

      const sectionsProp = findProperty(classObj, 'sections');
      if (!sectionsProp || !sectionsProp.isKind(SyntaxKind.PropertyAssignment)) continue;
      const sectionsInit = sectionsProp.getInitializer();
      if (!sectionsInit || !sectionsInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

      for (const secEl of (sectionsInit as ArrayLiteralExpression).getElements()) {
        if (!secEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
        const secObj = secEl as ObjectLiteralExpression;
        const secTitle = getStringProp(secObj, 'title') || '';

        const slidesProp = findProperty(secObj, 'slides');
        if (!slidesProp || !slidesProp.isKind(SyntaxKind.PropertyAssignment)) continue;
        const slidesInit = slidesProp.getInitializer();
        if (!slidesInit || !slidesInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

        for (const slideEl of (slidesInit as ArrayLiteralExpression).getElements()) {
          if (!slideEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
          const slideObj = slideEl as ObjectLiteralExpression;
          const slideId = getStringProp(slideObj, 'id') || '';
          const slideTitle = getStringProp(slideObj, 'title') || '';
          const slideDesc = getStringProp(slideObj, 'description') || '';
          const slideType = getStringProp(slideObj, 'type') || 'standard';
          const slideContent = getStringArrayProp(slideObj, 'content') || [];
          const slideOptions = getStringArrayProp(slideObj, 'options') || [];
          const correctOptionIndex = getNumberProp(slideObj, 'correctOptionIndex');
          const imageUrl = getStringProp(slideObj, 'imageUrl');

          const typeCfg = SLIDE_TYPE_REGISTRY[slideType] || SLIDE_TYPE_REGISTRY.standard;
          if (typeCfg?.supportsImage === false || slideType === 'spinning-wheel' || slideType === 'emoji-game') {
            continue;
          }

          totalVisualSlides++;
          const mockSlide: ClassSlide = {
            id: slideId,
            title: slideTitle,
            description: slideDesc,
            content: slideContent,
            options: slideOptions,
            correctOptionIndex: correctOptionIndex,
            type: slideType as any,
            imageUrl: imageUrl
          };

          const prompt = GeminiImageService.buildPrompt(mockSlide, trackArg, styleArg);
          console.log(`\n  📸 [Slide #${totalVisualSlides}] "${slideTitle}" (${slideId})`);
          console.log(`     Section: ${secTitle}`);
          console.log(`     Current Image: ${imageUrl || '(none)'}`);
          console.log(`     Contextual Prompt:`);
          console.log(`     👉 "${prompt}"`);
        }
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`✨ Processed ${totalClassesFound} class(es), formulated ${totalVisualSlides} contextual image prompt(s).`);
  console.log(`========================================\n`);
}

main().catch(err => {
  console.error('Fatal error in mass generator:', err);
  process.exit(1);
});
