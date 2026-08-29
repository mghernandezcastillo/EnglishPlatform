const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Iniciando Auditoria Estricta de Estandarizacion Teens Studio...\n');

const stdout = execSync('npx tsx -e "import { curriculumTeensStudioLevels } from \'./src/data/curriculumTeensStudio\'; console.log(JSON.stringify(curriculumTeensStudioLevels));"', {
  cwd: path.join(__dirname, '..'),
  maxBuffer: 20 * 1024 * 1024
});
const curriculumTeensStudioLevels = JSON.parse(stdout.toString());

let totalClasses = 0;
let totalPassed = 0;
let totalErrors = 0;

curriculumTeensStudioLevels.forEach(level => {
  level.classes.forEach(cls => {
    totalClasses++;
    const issues = [];
    const slides = cls.sections.flatMap(s => s.slides || []);

    if (slides.length !== 13) {
      issues.push(`Debe tener exactamente 13 diapositivas (actual: ${slides.length})`);
    }

    // Slide 1: Welcome standard
    if (slides[0]?.type !== 'standard') {
      issues.push(`Slide 1 debe ser "standard" de bienvenida (actual: ${slides[0]?.type})`);
    }
    // Slide 2: Objectives
    if (slides[1]?.type !== 'objectives-animated') {
      issues.push(`Slide 2 debe ser "objectives-animated" (actual: ${slides[1]?.type})`);
    }
    // Slide 3: Spinning wheel
    if (slides[2]?.type !== 'spinning-wheel') {
      issues.push(`Slide 3 debe ser "spinning-wheel" (actual: ${slides[2]?.type})`);
    }
    // Slide 4: Grammar Studio
    if (slides[3]?.type !== 'grammar-studio' || !slides[3]?.grammarData) {
      issues.push(`Slide 4 debe ser "grammar-studio" con grammarData`);
    }
    // Slide 5: Vocab Studio
    if (slides[4]?.type !== 'grammar-studio' || !slides[4]?.grammarData) {
      issues.push(`Slide 5 debe ser "grammar-studio" de vocabulario con grammarData`);
    }
    // Slide 6: Verb arena
    if (slides[5]?.type !== 'verb-arena-embedded') {
      issues.push(`Slide 6 debe ser "verb-arena-embedded"`);
    }
    // Slide 7: Reading studio
    if (slides[6]?.type !== 'reading') {
      issues.push(`Slide 7 debe ser "reading"`);
    }
    // Slide 8: Listening lab
    if (slides[7]?.type !== 'listening-audio-teacher') {
      issues.push(`Slide 8 debe ser "listening-audio-teacher"`);
    }
    // Slide 9: Story decoder
    if (slides[8]?.type !== 'story-decoder-embedded') {
      issues.push(`Slide 9 debe ser "story-decoder-embedded"`);
    }
    // Slide 10: Writing studio
    if (slides[9]?.type !== 'writing-guided') {
      issues.push(`Slide 10 debe ser "writing-guided"`);
    }
    // Slide 11: Speaking & fluency
    if (slides[10]?.type !== 'speaking') {
      issues.push(`Slide 11 debe ser "speaking"`);
    }
    // Slide 12: Class Complete (cierre con logros)
    if (slides[11]?.type !== 'standard') {
      issues.push(`Slide 12 debe ser "standard" de cierre`);
    }
    // Slide 13: Homework
    if (slides[12]?.type !== 'homework') {
      issues.push(`Slide 13 debe ser "homework"`);
    }

    if (issues.length > 0) {
      totalErrors++;
      console.error(`❌ [${cls.id}]:`);
      issues.forEach(iss => console.error(`   - ${iss}`));
    } else {
      totalPassed++;
      console.log(`✅ [${cls.id}]: 100% Estandarizado (Opción A: Welcome ➔ Objetivos ➔ Ruleta | Grammar ➔ Verbs ➔ Reading ➔ Decoder ➔ Writing ➔ Speaking ➔ Homework)`);
    }
  });
});

console.log('\n' + '='.repeat(80));
console.log(`📊 REPORTE DE AUDITORIA DE ESTANDARIZACION:`);
console.log(`   - Total clases evaluadas: ${totalClasses}`);
console.log(`   - Clases 100% conformes con el Blueprint: ${totalPassed}`);
console.log(`   - Clases con errores: ${totalErrors}`);
console.log('='.repeat(80) + '\n');

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log('🏆 ESTANDARIZACION COMPLETA Y VERIFICADA AL 100% PARA TODOS LOS NIVELES.\n');
  process.exit(0);
}

