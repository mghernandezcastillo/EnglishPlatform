import fs from 'fs';
import { curriculumTeensLevels } from '../src/data/curriculumTeens';
import { curriculumLevels } from '../src/data/curriculum';
import { curriculumKidsLevels } from '../src/data/curriculumKids';

function auditFile(name: string, levels: any[]) {
  let totalClasses = 0;
  let letsSayCount = 0;
  let alphabetGameCount = 0;
  let otherCount = 0;
  const missing: string[] = [];

  for (const level of levels) {
    for (const cls of level.classes) {
      totalClasses++;
      // Check section 4
      const sec4 = cls.sections?.[3] || cls.sections?.find((s: any) => /production|producción|4/i.test(s.title || s.id));
      const roleplaySlide = sec4?.slides?.find((s: any) => s.type === 'lets-say' || s.type === 'alphabet-game' || s.type === 'roleplay' || Boolean(s.letsSay) || Boolean(s.alphabetGame));

      if (roleplaySlide) {
        if (roleplaySlide.type === 'lets-say' || roleplaySlide.letsSay) {
          letsSayCount++;
        } else if (roleplaySlide.type === 'alphabet-game' || roleplaySlide.alphabetGame) {
          alphabetGameCount++;
        } else {
          otherCount++;
          missing.push(`[${cls.id}] ${cls.title} (type: ${roleplaySlide.type})`);
        }
      } else {
        missing.push(`[${cls.id}] ${cls.title} (NO ROLEPLAY SLIDE FOUND)`);
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`📁 ${name}`);
  console.log(`   Total clases: ${totalClasses}`);
  console.log(`   Speaking Time (lets-say): ${letsSayCount}`);
  console.log(`   Alphabet Game: ${alphabetGameCount}`);
  console.log(`   Otros / pendientes: ${otherCount}`);
  if (missing.length > 0) {
    console.log(`   Detalle de faltantes (${missing.length}):`);
    missing.slice(0, 10).forEach(m => console.log(`     - ${m}`));
  } else {
    console.log(`   ✅ 100% de las clases tienen su actividad configurada.`);
  }
}

console.log('🔍 AUDITORÍA DE ACTIVIDADES SPEAKING TIME / ALPHABET GAME:');
auditFile('Teens (curriculumTeens.ts)', curriculumTeensLevels);
auditFile('Adults (curriculum.ts)', curriculumLevels);
auditFile('Kids (curriculumKids.ts)', curriculumKidsLevels);
