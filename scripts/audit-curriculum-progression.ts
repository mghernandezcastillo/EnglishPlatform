import { createServer } from 'vite';
import type { CurriculumLevel } from '../src/types/curriculum';

type AuditResult = {
  audience: string;
  levels: number;
  classes: number;
  slides: number;
  imageReferences: number;
  answerDistribution: [number, number, number];
  errors: string[];
};

const placeholderPattern = /important topic|\bexample [ab]\b|\bword [123]\b|follow (the )?instructions on screen|\boption [abc]\b|wrong option/i;

function auditAudience(audience: string, levels: CurriculumLevel[]): AuditResult {
  const errors: string[] = [];
  const levelIds = new Set<string>();
  const classIds = new Set<string>();
  const answerDistribution: [number, number, number] = [0, 0, 0];
  let classes = 0;
  let slides = 0;
  let imageReferences = 0;

  for (const level of levels) {
    if (levelIds.has(level.id)) errors.push(`${audience}: nivel duplicado ${level.id}`);
    levelIds.add(level.id);

    for (const lesson of level.classes) {
      const sectionIds = new Set<string>();
      const slideIds = new Set<string>();
      classes += 1;
      if (classIds.has(lesson.id)) errors.push(`${audience}: clase duplicada ${lesson.id}`);
      classIds.add(lesson.id);
      if (lesson.sections.length !== 5) errors.push(`${lesson.id}: tiene ${lesson.sections.length} secciones; se esperaban 5`);

      const cover = lesson.sections[0]?.slides[0];
      if (!cover) {
        errors.push(`${lesson.id}: no tiene diapositiva inicial`);
      } else {
        const coverText = [cover.title, cover.description, ...(cover.content || [])].join(' ');
        if (!cover.imageUrl) errors.push(`${lesson.id}: portada sin imagen`);
        if (!cover.content || cover.content.length < 2 || cover.content.length > 3) {
          errors.push(`${lesson.id}: la portada debe tener 2 o 3 mensajes breves`);
        }
        if (/progression focus|enfoque de progresión|final mission|this lesson advances toward/i.test(coverText)) {
          errors.push(`${lesson.id}: la portada contiene texto técnico de progresión`);
        }
        if (/^(?:class|clase)\s+\d+\s*:/i.test(cover.title)) {
          errors.push(`${lesson.id}: la portada usa el título técnico completo de la clase`);
        }
      }

      lesson.sections.forEach((section, sectionIndex) => {
        if (sectionIds.has(section.id)) errors.push(`${audience}: sección duplicada ${section.id}`);
        sectionIds.add(section.id);
        if (section.slides.length === 0) errors.push(`${section.id}: sección vacía`);

        section.slides.forEach((slide, slideIndex) => {
          slides += 1;
          const location = `${lesson.id} > sección ${sectionIndex + 1} > diapositiva ${slideIndex + 1}`;
          if (slideIds.has(slide.id)) errors.push(`${audience}: diapositiva duplicada ${slide.id}`);
          slideIds.add(slide.id);
          if (!slide.content?.length) errors.push(`${location}: content vacío`);
          if (!slide.bgColor?.includes('gradient')) errors.push(`${location}: bgColor no es degradado`);
          if (slide.imageUrl) imageReferences += 1;

          const visibleText = [slide.title, slide.description, ...(slide.content || []), ...(slide.options || [])].join(' ');
          if (placeholderPattern.test(visibleText)) errors.push(`${location}: conserva contenido genérico`);

          if (slide.options) {
            if (slide.options.length !== 3) errors.push(`${location}: tiene ${slide.options.length} opciones; se esperaban 3`);
            if (slide.correctOptionIndex === undefined || slide.correctOptionIndex < 0 || slide.correctOptionIndex > 2) {
              errors.push(`${location}: correctOptionIndex inválido`);
            } else {
              answerDistribution[slide.correctOptionIndex] += 1;
            }
          }
          if (slide.type === 'emoji-game' && slide.options?.length !== 3) errors.push(`${location}: emoji-game sin 3 opciones`);
          if (slide.type === 'homework' && !/homework|tarea/i.test(slide.title)) errors.push(`${location}: tarea sin título reconocible`);
          if (slide.type === 'video' && !slide.videoUrl) errors.push(`${location}: video sin videoUrl`);
        });
      });
    }
  }

  return { audience, levels: levels.length, classes, slides, imageReferences, answerDistribution, errors };
}

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
let results: AuditResult[] = [];

try {
  const adults = (await vite.ssrLoadModule('/src/data/curriculum.ts')) as { curriculumLevels: CurriculumLevel[] };
  const kids = (await vite.ssrLoadModule('/src/data/curriculumKids.ts')) as { curriculumKidsLevels: CurriculumLevel[] };
  const teens = (await vite.ssrLoadModule('/src/data/curriculumTeens.ts')) as { curriculumTeensLevels: CurriculumLevel[] };
  results = [
    auditAudience('adultos', adults.curriculumLevels),
    auditAudience('niños', kids.curriculumKidsLevels),
    auditAudience('adolescentes', teens.curriculumTeensLevels),
  ];
} finally {
  await vite.close();
}

for (const result of results) {
  console.log(
    `${result.audience}: ${result.levels} niveles, ${result.classes} clases, ${result.slides} diapositivas, ` +
      `${result.imageReferences} referencias visuales, respuestas ${result.answerDistribution.join('/')}, errores ${result.errors.length}`,
  );
  result.errors.slice(0, 30).forEach((error) => console.error(`  - ${error}`));
}

const totalErrors = results.reduce((total, result) => total + result.errors.length, 0);
if (totalErrors > 0) {
  console.error(`Auditoría curricular fallida: ${totalErrors} problema(s).`);
  process.exit(1);
} else {
  console.log('Auditoría curricular aprobada.');
  process.exit(0);
}
