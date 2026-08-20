import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import type { CurriculumLevel } from '../src/types/curriculum';

type ImageReference = {
  audience: string;
  levelId: string;
  classId: string;
  slideId: string;
  url: string;
};

const root = process.cwd();
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
const references: ImageReference[] = [];

try {
  const sources: Array<[string, string, string]> = [
    ['/src/data/curriculum.ts', 'curriculumLevels', 'adultos'],
    ['/src/data/curriculumKids.ts', 'curriculumKidsLevels', 'niños'],
    ['/src/data/curriculumTeens.ts', 'curriculumTeensLevels', 'adolescentes'],
  ];

  for (const [modulePath, exportName, audience] of sources) {
    const module = (await vite.ssrLoadModule(modulePath)) as Record<string, CurriculumLevel[]>;
    for (const level of module[exportName]) {
      for (const lesson of level.classes) {
        for (const section of lesson.sections) {
          for (const slide of section.slides) {
            if (slide.imageUrl) references.push({ audience, levelId: level.id, classId: lesson.id, slideId: slide.id, url: slide.imageUrl });
          }
        }
      }
    }
  }
} finally {
  await vite.close();
}

const uniqueReferences = [...new Map(references.map((reference) => [reference.url, reference])).values()];
const localReferences = uniqueReferences.filter((reference) => !/^https?:\/\//i.test(reference.url));
const remoteReferences = uniqueReferences.filter((reference) => /^https?:\/\//i.test(reference.url));
const failures: Array<ImageReference & { reason: string }> = [];

for (const reference of localReferences) {
  const cleanUrl = reference.url.split(/[?#]/)[0];
  const filePath = cleanUrl.startsWith('/images/')
    ? path.join(root, 'public', cleanUrl.slice(1))
    : cleanUrl.startsWith('/src/')
      ? path.join(root, cleanUrl.slice(1))
      : '';

  if (!filePath || !fs.existsSync(filePath)) {
    failures.push({ ...reference, reason: `archivo local inexistente: ${filePath || cleanUrl}` });
    continue;
  }
  if (fs.statSync(filePath).size === 0) failures.push({ ...reference, reason: `archivo local vacío: ${filePath}` });
}

for (let index = 0; index < remoteReferences.length; index += 8) {
  const batch = remoteReferences.slice(index, index + 8);
  const results = await Promise.all(batch.map(async (reference) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);
    try {
      const response = await fetch(reference.url, { signal: controller.signal, headers: { 'user-agent': 'Mozilla/5.0' } });
      const contentType = response.headers.get('content-type') || '';
      await response.body?.cancel();
      if (!response.ok || !contentType.startsWith('image/')) {
        return { ...reference, reason: `HTTP ${response.status}, content-type ${contentType || 'desconocido'}` };
      }
      return undefined;
    } catch (error) {
      return { ...reference, reason: `error de red: ${String(error)}` };
    } finally {
      clearTimeout(timeout);
    }
  }));
  failures.push(...results.filter((result): result is ImageReference & { reason: string } => Boolean(result)));
}

for (const audience of ['adultos', 'niños', 'adolescentes']) {
  const audienceReferences = references.filter((reference) => reference.audience === audience);
  const uniqueAudienceReferences = new Set(audienceReferences.map((reference) => reference.url));
  console.log(`${audience}: ${audienceReferences.length} usos, ${uniqueAudienceReferences.size} imágenes únicas`);
}

console.log(`Total: ${references.length} usos, ${uniqueReferences.length} imágenes únicas (${localReferences.length} locales, ${remoteReferences.length} remotas)`);
if (failures.length) {
  failures.forEach((failure) => console.error(`- ${failure.audience} > ${failure.classId} > ${failure.slideId}: ${failure.reason} — ${failure.url}`));
  console.error(`Auditoría de imágenes fallida: ${failures.length} referencia(s) dañada(s).`);
  process.exitCode = 1;
} else {
  console.log('Auditoría de imágenes aprobada: todas las referencias responden correctamente.');
}
