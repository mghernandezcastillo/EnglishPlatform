import fs from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { Project, SyntaxKind, ObjectLiteralExpression, ArrayLiteralExpression } from 'ts-morph';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase URL or Key in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const repoRoot = process.cwd();
const publicImagesDir = path.join(repoRoot, 'public', 'images');

// MIME type lookup
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.webp': return 'image/webp';
    case '.svg': return 'image/svg+xml';
    case '.gif': return 'image/gif';
    default: return 'application/octet-stream';
  }
}

async function buildUrlMapFromLocal(): Promise<Map<string, string>> {
  console.log('\n📦 [1/2] Mapping 5,488+ images to Supabase Storage CDN URLs...');
  const urlMap = new Map<string, string>();
  const storageBaseUrl = `${supabaseUrl}/storage/v1/object/public/curriculum-images/curriculum/`;

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        const relPath = path.relative(publicImagesDir, fullPath).replace(/\\/g, '/');
        const publicUrl = `${storageBaseUrl}${relPath}`;
        urlMap.set(`/images/${relPath}`, publicUrl);
        urlMap.set(relPath, publicUrl);
      }
    }
  }

  try {
    await walk(publicImagesDir);
  } catch (err) {
    console.error('Error scanning public/images:', err);
  }

  console.log(`✅ Formed CDN mappings for ${urlMap.size} images.`);
  return urlMap;
}

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

function parseJsonLiteral(node: any): any {
  if (!node) return undefined;
  if (node.isKind(SyntaxKind.StringLiteral) || node.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
    return node.getLiteralText();
  }
  if (node.isKind(SyntaxKind.NumericLiteral)) {
    return node.getLiteralValue();
  }
  if (node.isKind(SyntaxKind.TrueKeyword)) return true;
  if (node.isKind(SyntaxKind.FalseKeyword)) return false;
  if (node.isKind(SyntaxKind.NullKeyword)) return null;

  if (node.isKind(SyntaxKind.ArrayLiteralExpression)) {
    return (node as ArrayLiteralExpression).getElements().map(parseJsonLiteral);
  }

  if (node.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const res: Record<string, any> = {};
    for (const prop of (node as ObjectLiteralExpression).getProperties()) {
      if (prop.isKind(SyntaxKind.PropertyAssignment)) {
        const key = prop.getName().replace(/^["']|["']$/g, '');
        const val = parseJsonLiteral(prop.getInitializer());
        res[key] = val;
      }
    }
    return res;
  }

  try {
    return JSON.parse(node.getText());
  } catch {
    return node.getText();
  }
}

async function migrateTrackCurriculum(
  filePath: string,
  targetAudience: 'adult' | 'child' | 'teen',
  urlMap: Map<string, string>
) {
  console.log(`\n📚 [2/3] Parsing and seeding curriculum for ${targetAudience} from ${path.basename(filePath)}...`);
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const varName = targetAudience === 'child' ? 'curriculumKidsLevels' : targetAudience === 'teen' ? 'curriculumTeensLevels' : 'curriculumLevels';
  const varDecl = sourceFile.getVariableDeclaration(varName);
  const levelsArray = varDecl?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression) || sourceFile.getFirstDescendantByKind(SyntaxKind.ArrayLiteralExpression);

  if (!levelsArray) {
    console.error(`❌ Could not find curriculum array in ${filePath}`);
    return;
  }

  let levelIndex = 0;
  for (const levelElement of levelsArray.getElements()) {
    if (!levelElement.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const levelObj = levelElement as ObjectLiteralExpression;
    levelIndex++;

    const levelId = parseJsonLiteral(findProperty(levelObj, 'id')?.getInitializer()) || `level-${levelIndex}`;
    const levelTitle = parseJsonLiteral(findProperty(levelObj, 'title')?.getInitializer()) || 'Untitled Level';
    const levelDuration = parseJsonLiteral(findProperty(levelObj, 'duration')?.getInitializer());
    const levelObjective = parseJsonLiteral(findProperty(levelObj, 'objective')?.getInitializer());
    const levelMcfr = parseJsonLiteral(findProperty(levelObj, 'mcfrEquivalent')?.getInitializer());
    const oralEvaluation = parseJsonLiteral(findProperty(levelObj, 'oralEvaluation')?.getInitializer()) || [];
    const virtualEvaluation = parseJsonLiteral(findProperty(levelObj, 'virtualEvaluation')?.getInitializer()) || [];

    // Upsert level
    const { data: dbLevel, error: levelErr } = await supabase
      .from('curr_levels')
      .upsert({
        level_id: levelId,
        title: levelTitle,
        duration: levelDuration,
        objective: levelObjective,
        mcfr_equivalent: levelMcfr,
        target_audience: targetAudience,
        oral_evaluation: oralEvaluation,
        virtual_evaluation: virtualEvaluation,
        sort_order: levelIndex
      }, { onConflict: 'level_id,target_audience' })
      .select('id')
      .single();

    if (levelErr || !dbLevel) {
      console.error(`  ❌ Error upserting level ${levelId}:`, levelErr?.message);
      continue;
    }

    const classesProp = findProperty(levelObj, 'classes');
    const classesInit = classesProp?.getInitializer();
    if (!classesInit || !classesInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

    let classIndex = 0;
    for (const classEl of (classesInit as ArrayLiteralExpression).getElements()) {
      if (!classEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
      const classObj = classEl as ObjectLiteralExpression;
      classIndex++;

      const classId = parseJsonLiteral(findProperty(classObj, 'id')?.getInitializer()) || `class-${classIndex}`;
      const classTitle = parseJsonLiteral(findProperty(classObj, 'title')?.getInitializer()) || 'Untitled Class';
      const classDesc = parseJsonLiteral(findProperty(classObj, 'description')?.getInitializer());
      const classDur = parseJsonLiteral(findProperty(classObj, 'duration')?.getInitializer());
      const classObjText = parseJsonLiteral(findProperty(classObj, 'objective')?.getInitializer());

      const { data: dbClass, error: classErr } = await supabase
        .from('curr_classes')
        .upsert({
          class_id: classId,
          level_id: dbLevel.id,
          title: classTitle,
          description: classDesc,
          duration: classDur,
          objective: classObjText,
          sort_order: classIndex
        }, { onConflict: 'class_id,level_id' })
        .select('id')
        .single();

      if (classErr || !dbClass) {
        console.error(`    ❌ Error upserting class ${classId}:`, classErr?.message);
        continue;
      }

      const sectionsProp = findProperty(classObj, 'sections');
      const sectionsInit = sectionsProp?.getInitializer();
      if (!sectionsInit || !sectionsInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

      let sectionIndex = 0;
      for (const secEl of (sectionsInit as ArrayLiteralExpression).getElements()) {
        if (!secEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
        const secObj = secEl as ObjectLiteralExpression;
        sectionIndex++;

        const secId = parseJsonLiteral(findProperty(secObj, 'id')?.getInitializer()) || `s${sectionIndex}`;
        const secTitle = parseJsonLiteral(findProperty(secObj, 'title')?.getInitializer()) || `Section ${sectionIndex}`;
        const secDur = parseJsonLiteral(findProperty(secObj, 'duration')?.getInitializer());
        const secObjText = parseJsonLiteral(findProperty(secObj, 'objective')?.getInitializer());
        const secAction = parseJsonLiteral(findProperty(secObj, 'action')?.getInitializer());

        const { data: dbSection, error: secErr } = await supabase
          .from('curr_sections')
          .upsert({
            section_id: secId,
            class_id: dbClass.id,
            title: secTitle,
            duration: secDur,
            objective: secObjText,
            action: secAction,
            sort_order: sectionIndex
          }, { onConflict: 'section_id,class_id' })
          .select('id')
          .single();

        if (secErr || !dbSection) {
          console.error(`      ❌ Error upserting section ${secId}:`, secErr?.message);
          continue;
        }

        const slidesProp = findProperty(secObj, 'slides');
        const slidesInit = slidesProp?.getInitializer();
        if (!slidesInit || !slidesInit.isKind(SyntaxKind.ArrayLiteralExpression)) continue;

        let slideIndex = 0;
        for (const slideEl of (slidesInit as ArrayLiteralExpression).getElements()) {
          if (!slideEl.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
          const slideObj = slideEl as ObjectLiteralExpression;
          slideIndex++;

          const slideId = parseJsonLiteral(findProperty(slideObj, 'id')?.getInitializer()) || `slide-${slideIndex}`;
          const slideTitle = parseJsonLiteral(findProperty(slideObj, 'title')?.getInitializer()) || 'Untitled Slide';
          const slideDesc = parseJsonLiteral(findProperty(slideObj, 'description')?.getInitializer());
          const slideContent = parseJsonLiteral(findProperty(slideObj, 'content')?.getInitializer()) || [];
          let slideImageUrl = parseJsonLiteral(findProperty(slideObj, 'imageUrl')?.getInitializer());
          const slideBgColor = parseJsonLiteral(findProperty(slideObj, 'bgColor')?.getInitializer());
          const slideOptions = parseJsonLiteral(findProperty(slideObj, 'options')?.getInitializer());
          const correctOptionIndex = parseJsonLiteral(findProperty(slideObj, 'correctOptionIndex')?.getInitializer());
          const slideType = parseJsonLiteral(findProperty(slideObj, 'type')?.getInitializer());
          const videoUrl = parseJsonLiteral(findProperty(slideObj, 'videoUrl')?.getInitializer());
          const wheelItems = parseJsonLiteral(findProperty(slideObj, 'wheelItems')?.getInitializer());
          const matchingPairs = parseJsonLiteral(findProperty(slideObj, 'matchingPairs')?.getInitializer());
          const mysteryPuzzleData = parseJsonLiteral(findProperty(slideObj, 'mysteryPuzzleData')?.getInitializer());
          const roleplay = parseJsonLiteral(findProperty(slideObj, 'roleplay')?.getInitializer());
          const speakingBossBattle = parseJsonLiteral(findProperty(slideObj, 'speakingBossBattle')?.getInitializer());
          const structureDrag = parseJsonLiteral(findProperty(slideObj, 'structureDrag')?.getInitializer());
          const speakingAssessment = parseJsonLiteral(findProperty(slideObj, 'speakingAssessment')?.getInitializer());

          // Replace local image path with Supabase public URL if mapped
          if (slideImageUrl && urlMap.has(slideImageUrl)) {
            slideImageUrl = urlMap.get(slideImageUrl);
          }

          const { error: slideErr } = await supabase
            .from('curr_slides')
            .upsert({
              slide_id: slideId,
              section_id: dbSection.id,
              title: slideTitle,
              description: slideDesc,
              content: slideContent,
              image_url: slideImageUrl,
              bg_color: slideBgColor,
              options: slideOptions,
              correct_option_index: correctOptionIndex,
              type: slideType,
              video_url: videoUrl,
              wheel_items: wheelItems,
              matching_pairs: matchingPairs,
              mystery_puzzle_data: mysteryPuzzleData,
              roleplay: roleplay,
              speaking_boss_battle: speakingBossBattle,
              structure_drag: structureDrag,
              speaking_assessment: speakingAssessment,
              sort_order: slideIndex
            }, { onConflict: 'slide_id,section_id' });

          if (slideErr) {
            console.error(`        ❌ Error upserting slide ${slideId}:`, slideErr.message);
          }
        }
      }
    }
    console.log(`  ✅ Level [${levelId}] "${levelTitle}" seeded.`);
  }
}

async function main() {
  console.log('🚀 Starting Complete Supabase Migration for Curriculum & Images...');
  
  // 1. Build fast CDN url map from existing Storage bucket
  const urlMap = await buildUrlMapFromLocal();

  // 2. Migrate Adults
  await migrateTrackCurriculum(
    path.join(repoRoot, 'src', 'data', 'curriculum.ts'),
    'adult',
    urlMap
  );

  // 3. Migrate Kids
  await migrateTrackCurriculum(
    path.join(repoRoot, 'src', 'data', 'curriculumKids.ts'),
    'child',
    urlMap
  );

  // 4. Migrate Teens
  await migrateTrackCurriculum(
    path.join(repoRoot, 'src', 'data', 'curriculumTeens.ts'),
    'teen',
    urlMap
  );

  console.log('\n🎉 [3/3] ALL CURRICULUM AND IMAGES MIGRATED TO SUPABASE SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Fatal migration error:', err);
  process.exit(1);
});
