import fs from 'node:fs/promises';
import path from 'node:path';
import { Project, SyntaxKind, type ArrayLiteralExpression, type ObjectLiteralExpression } from 'ts-morph';

type AudienceKey = 'adults' | 'kids' | 'teens';
type TopicKey =
  | 'greetings'
  | 'numbers'
  | 'family'
  | 'routine'
  | 'food'
  | 'clothes'
  | 'gadgets'
  | 'school'
  | 'animals'
  | 'body'
  | 'directions'
  | 'hobbies'
  | 'house'
  | 'weather'
  | 'jobs'
  | 'future'
  | 'travel'
  | 'feelings'
  | 'holidays'
  | 'business'
  | 'generic';

type ClassMeta = {
  id: string;
  title: string;
  description: string;
  objective: string;
  audience: AudienceKey;
};

type ThemeSpec = {
  background: [string, string, string];
  surface: string;
  glow: string;
  accent: string;
  accentSoft: string;
  emojis: [string, string, string];
};

const repoRoot = process.cwd();
const outputDir = path.join(repoRoot, 'public', 'images', 'class-heroes');

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferTopicKey(text: string): TopicKey {
  const normalized = normalizeText(text);
  if (/hello|greeting|introduc|salud/.test(normalized)) return 'greetings';
  if (/number|birthday|month|date|age|time/.test(normalized)) return 'numbers';
  if (/family|mother|father|sister|brother|friends/.test(normalized)) return 'family';
  if (/routine|wake up|daily|morning|night|how often/.test(normalized)) return 'routine';
  if (/food|drink|restaurant|menu|bill|meal|breakfast|lunch|dinner|snack/.test(normalized)) return 'food';
  if (/clothes|shirt|jacket|pants|wear|fashion|style/.test(normalized)) return 'clothes';
  if (/gadget|tech|device|app|phone|laptop|social media|online/.test(normalized)) return 'gadgets';
  if (/school|classroom|subject|backpack|teacher|exam|study/.test(normalized)) return 'school';
  if (/pet|animal|wild|habitat/.test(normalized)) return 'animals';
  if (/body|face|hand|leg|eye|ear|nose|health/.test(normalized)) return 'body';
  if (/direction|city|place|turn left|go straight|museum|station|transport/.test(normalized)) return 'directions';
  if (/hobby|sport|game|music|free time/.test(normalized)) return 'hobbies';
  if (/house|room|kitchen|bathroom|bedroom|living room|home/.test(normalized)) return 'house';
  if (/weather|season|rain|sunny|cloudy|winter|summer/.test(normalized)) return 'weather';
  if (/job|profession|doctor|teacher|worker|office|interview|career/.test(normalized)) return 'jobs';
  if (/future|going to|will|plan|tomorrow|next week|prediction|conditional/.test(normalized)) return 'future';
  if (/travel|trip|airport|hotel|vacation/.test(normalized)) return 'travel';
  if (/feeling|happy|sad|tired|angry|nervous|mood/.test(normalized)) return 'feelings';
  if (/holiday|christmas|birthday party|celebration|festival/.test(normalized)) return 'holidays';
  if (/email|formal|report|meeting|business|proposal|negotiation|customer/.test(normalized)) return 'business';
  return 'generic';
}

function themeFor(topic: TopicKey, audience: AudienceKey): ThemeSpec {
  const base: Record<TopicKey, ThemeSpec> = {
    greetings: { background: ['#0f172a', '#1d4ed8', '#8b5cf6'], surface: '#ffffff22', glow: '#60a5fa55', accent: '#38bdf8', accentSoft: '#dbeafe', emojis: ['👋', '💬', '✨'] },
    numbers: { background: ['#111827', '#7c3aed', '#ec4899'], surface: '#ffffff20', glow: '#f472b655', accent: '#f59e0b', accentSoft: '#fef3c7', emojis: ['🔢', '🎂', '📅'] },
    family: { background: ['#0f172a', '#0f766e', '#14b8a6'], surface: '#ffffff1f', glow: '#5eead455', accent: '#34d399', accentSoft: '#d1fae5', emojis: ['👨‍👩‍👧‍👦', '🏡', '💛'] },
    routine: { background: ['#1f2937', '#2563eb', '#06b6d4'], surface: '#ffffff1d', glow: '#67e8f955', accent: '#22d3ee', accentSoft: '#cffafe', emojis: ['⏰', '☀️', '🧴'] },
    food: { background: ['#3f1d0f', '#ea580c', '#ef4444'], surface: '#ffffff1b', glow: '#fdba7455', accent: '#fbbf24', accentSoft: '#fef3c7', emojis: ['🍽️', '🥤', '🧾'] },
    clothes: { background: ['#1f2937', '#7c3aed', '#ec4899'], surface: '#ffffff1b', glow: '#c084fc55', accent: '#f472b6', accentSoft: '#fce7f3', emojis: ['👕', '👟', '🧥'] },
    gadgets: { background: ['#020617', '#0f766e', '#2563eb'], surface: '#ffffff1b', glow: '#22d3ee55', accent: '#38bdf8', accentSoft: '#dbeafe', emojis: ['📱', '💻', '🎧'] },
    school: { background: ['#172554', '#4338ca', '#ec4899'], surface: '#ffffff20', glow: '#a78bfa55', accent: '#f59e0b', accentSoft: '#fef3c7', emojis: ['🎒', '📚', '✏️'] },
    animals: { background: ['#052e16', '#15803d', '#22c55e'], surface: '#ffffff20', glow: '#86efac55', accent: '#facc15', accentSoft: '#fef9c3', emojis: ['🐾', '🦁', '🌿'] },
    body: { background: ['#111827', '#be123c', '#fb7185'], surface: '#ffffff20', glow: '#f9a8d455', accent: '#fb7185', accentSoft: '#ffe4e6', emojis: ['🧠', '👀', '🏃'] },
    directions: { background: ['#082f49', '#0369a1', '#0ea5e9'], surface: '#ffffff20', glow: '#7dd3fc55', accent: '#facc15', accentSoft: '#fef9c3', emojis: ['🗺️', '📍', '➡️'] },
    hobbies: { background: ['#312e81', '#7c3aed', '#06b6d4'], surface: '#ffffff20', glow: '#67e8f955', accent: '#f472b6', accentSoft: '#fce7f3', emojis: ['⚽', '🎸', '🎨'] },
    house: { background: ['#1f2937', '#0f766e', '#14b8a6'], surface: '#ffffff20', glow: '#5eead455', accent: '#f59e0b', accentSoft: '#fef3c7', emojis: ['🏠', '🛋️', '🛏️'] },
    weather: { background: ['#0f172a', '#2563eb', '#0ea5e9'], surface: '#ffffff20', glow: '#bae6fd55', accent: '#facc15', accentSoft: '#fef9c3', emojis: ['☀️', '🌧️', '🧥'] },
    jobs: { background: ['#111827', '#1d4ed8', '#06b6d4'], surface: '#ffffff18', glow: '#60a5fa55', accent: '#f59e0b', accentSoft: '#fef3c7', emojis: ['💼', '🧑‍💼', '🎯'] },
    future: { background: ['#111827', '#4338ca', '#8b5cf6'], surface: '#ffffff18', glow: '#a78bfa55', accent: '#22d3ee', accentSoft: '#cffafe', emojis: ['🚀', '🗓️', '🔮'] },
    travel: { background: ['#082f49', '#0ea5e9', '#14b8a6'], surface: '#ffffff18', glow: '#67e8f955', accent: '#fbbf24', accentSoft: '#fef3c7', emojis: ['✈️', '🧳', '🌍'] },
    feelings: { background: ['#1f2937', '#9333ea', '#ec4899'], surface: '#ffffff20', glow: '#f9a8d455', accent: '#fbbf24', accentSoft: '#fef3c7', emojis: ['😊', '💭', '💫'] },
    holidays: { background: ['#3f1d0f', '#dc2626', '#f59e0b'], surface: '#ffffff1c', glow: '#fdba7455', accent: '#facc15', accentSoft: '#fef9c3', emojis: ['🎉', '🎁', '🎈'] },
    business: { background: ['#0f172a', '#1e293b', '#0f766e'], surface: '#ffffff16', glow: '#2dd4bf55', accent: '#38bdf8', accentSoft: '#dbeafe', emojis: ['📧', '📊', '🤝'] },
    generic: { background: ['#0f172a', '#1d4ed8', '#14b8a6'], surface: '#ffffff18', glow: '#67e8f955', accent: '#fbbf24', accentSoft: '#fef3c7', emojis: ['✨', '📚', '🎯'] },
  };

  const selected = base[topic];

  if (audience === 'kids') {
    return {
      ...selected,
      background: [selected.background[1], selected.background[2], selected.accent],
      glow: selected.accent + '66',
    };
  }

  if (audience === 'teens') {
    return {
      ...selected,
      background: [selected.background[0], selected.background[1], selected.background[2]],
      glow: selected.accent + '44',
    };
  }

  return selected;
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function displayTopic(title: string) {
  const left = title.split('/')[0]?.trim() || title.trim();
  return left.replace(/^class\s*\d+\s*:\s*/i, '').trim();
}

function generateSvg(meta: ClassMeta) {
  const topic = inferTopicKey(`${meta.title} ${meta.description} ${meta.objective}`);
  const theme = themeFor(topic, meta.audience);
  const display = displayTopic(meta.title);
  const seed = hashString(meta.id);
  const [emojiA, emojiB, emojiC] = theme.emojis;
  const heroLabel = meta.audience === 'kids' ? 'Kids Explorer' : meta.audience === 'teens' ? 'Teen Session' : 'Adult Session';
  const orbitOffset = seed % 80;
  const badgeOffset = seed % 120;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="80" y1="40" x2="1520" y2="860" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${theme.background[0]}"/>
      <stop offset="55%" stop-color="${theme.background[1]}"/>
      <stop offset="100%" stop-color="${theme.background[2]}"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.08"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1180 260) rotate(130) scale(520 420)">
      <stop stop-color="${theme.glow}"/>
      <stop offset="1" stop-color="${theme.glow}" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="35"/>
    </filter>
    <filter id="shadow" x="-20%" y="-20%" width="160%" height="160%">
      <feDropShadow dx="0" dy="30" stdDeviation="32" flood-color="#020617" flood-opacity="0.32"/>
    </filter>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect x="0" y="0" width="1600" height="900" fill="url(#glow)"/>

  <circle cx="${140 + orbitOffset}" cy="120" r="78" fill="#FFFFFF10"/>
  <circle cx="1500" cy="${120 + orbitOffset}" r="110" fill="#FFFFFF0E"/>
  <circle cx="1380" cy="760" r="84" fill="#FFFFFF12"/>
  <circle cx="1180" cy="260" r="220" fill="${theme.glow}" filter="url(#blur)"/>
  <circle cx="320" cy="760" r="180" fill="#FFFFFF0B" filter="url(#blur)"/>

  <g opacity="0.95">
    <rect x="82" y="82" width="218" height="60" rx="30" fill="#FFFFFF18" stroke="#FFFFFF2A"/>
    <text x="191" y="119" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800">${heroLabel}</text>
  </g>

  <g transform="translate(820 130)" filter="url(#shadow)">
    <rect x="0" y="0" width="640" height="640" rx="56" fill="url(#glass)" stroke="#FFFFFF33"/>
    <rect x="42" y="44" width="556" height="136" rx="32" fill="${theme.surface}" stroke="#FFFFFF22"/>
    <rect x="42" y="206" width="256" height="332" rx="34" fill="${theme.surface}" stroke="#FFFFFF22"/>
    <rect x="324" y="206" width="274" height="154" rx="34" fill="${theme.surface}" stroke="#FFFFFF22"/>
    <rect x="324" y="384" width="274" height="154" rx="34" fill="${theme.surface}" stroke="#FFFFFF22"/>

    <circle cx="520" cy="76" r="14" fill="${theme.accent}"/>
    <circle cx="556" cy="76" r="14" fill="#FFFFFF55"/>
    <circle cx="592" cy="76" r="14" fill="#FFFFFF25"/>

    <text x="98" y="140" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700">${display.replace(/&/g, '&amp;').slice(0, 38)}</text>
    <text x="102" y="330" fill="#FFFFFF" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif" font-size="${meta.audience === 'kids' ? '150' : meta.audience === 'teens' ? '138' : '128'}">${emojiA}</text>
    <text x="388" y="310" fill="#FFFFFF" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif" font-size="106">${emojiB}</text>
    <text x="388" y="490" fill="#FFFFFF" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif" font-size="106">${emojiC}</text>

    <rect x="86" y="470" width="168" height="26" rx="13" fill="${theme.accent}"/>
    <rect x="86" y="516" width="128" height="18" rx="9" fill="#FFFFFF3A"/>
    <rect x="370" y="332" width="176" height="22" rx="11" fill="#FFFFFF33"/>
    <rect x="370" y="512" width="138" height="22" rx="11" fill="${theme.accent}"/>
  </g>

  <g opacity="0.96">
    <rect x="112" y="694" width="412" height="132" rx="34" fill="#02061740" stroke="#FFFFFF1A"/>
    <text x="152" y="748" fill="${theme.accentSoft}" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800">Focus</text>
    <text x="152" y="790" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="800">${display.replace(/&/g, '&amp;').slice(0, 28)}</text>
  </g>

  <g opacity="0.9">
    <rect x="${1320 - badgeOffset}" y="704" width="170" height="54" rx="27" fill="#FFFFFF15" stroke="#FFFFFF26"/>
    <text x="${1405 - badgeOffset}" y="739" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800">${meta.audience.toUpperCase()}</text>
  </g>
</svg>`;
}

function getArrayLiteralFromProperty(objectLiteral: ObjectLiteralExpression, propertyName: string) {
  const property = objectLiteral.getProperties().find((prop) => {
    if (!prop.isKind(SyntaxKind.PropertyAssignment)) return false;
    const nameNode = prop.getNameNode();
    const normalizedName = nameNode.getText().replace(/^["'`]|["'`]$/g, '');
    return normalizedName === propertyName;
  });
  if (!property || !property.isKind(SyntaxKind.PropertyAssignment)) return null;
  const initializer = property.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  return initializer ?? null;
}

function getStringValue(objectLiteral: ObjectLiteralExpression, propertyName: string) {
  const property = objectLiteral.getProperties().find((prop) => {
    if (!prop.isKind(SyntaxKind.PropertyAssignment)) return false;
    const nameNode = prop.getNameNode();
    const normalizedName = nameNode.getText().replace(/^["'`]|["'`]$/g, '');
    return normalizedName === propertyName;
  });
  if (!property || !property.isKind(SyntaxKind.PropertyAssignment)) return '';
  const initializer = property.getInitializer();
  if (!initializer) return '';
  if (initializer.isKind(SyntaxKind.StringLiteral) || initializer.isKind(SyntaxKind.NoSubstitutionTemplateLiteral)) {
    return initializer.getLiteralText();
  }
  return initializer.getText().replace(/^["'`]|["'`]$/g, '');
}

function extractClassesFromArray(classesArray: ArrayLiteralExpression, audience: AudienceKey) {
  const classes: ClassMeta[] = [];
  for (const element of classesArray.getElements()) {
    if (!element.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    classes.push({
      id: getStringValue(element, 'id'),
      title: getStringValue(element, 'title'),
      description: getStringValue(element, 'description'),
      objective: getStringValue(element, 'objective'),
      audience,
    });
  }
  return classes;
}

function extractClassesFromSource(sourceFilePath: string, variableName: string, audience: AudienceKey) {
  const project = new Project({ tsConfigFilePath: path.join(repoRoot, 'tsconfig.json') });
  const sourceFile = project.addSourceFileAtPath(sourceFilePath);
  const declaration = sourceFile.getVariableDeclarationOrThrow(variableName);
  const levelsArray = declaration.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  const classes: ClassMeta[] = [];

  for (const levelElement of levelsArray.getElements()) {
    if (!levelElement.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const classesArray = getArrayLiteralFromProperty(levelElement, 'classes');
    if (!classesArray) continue;
    classes.push(...extractClassesFromArray(classesArray, audience));
  }

  return classes;
}

async function main() {
  const classes = [
    ...extractClassesFromSource(path.join(repoRoot, 'src', 'data', 'curriculum.ts'), 'curriculumLevels', 'adults'),
    ...extractClassesFromSource(path.join(repoRoot, 'src', 'data', 'curriculumKids.ts'), 'curriculumKidsLevels', 'kids'),
    ...extractClassesFromSource(path.join(repoRoot, 'src', 'data', 'curriculumTeens.ts'), 'curriculumTeensLevels', 'teens'),
  ].filter((item) => item.id && item.title);

  await fs.mkdir(outputDir, { recursive: true });

  for (const meta of classes) {
    const svg = generateSvg(meta);
    await fs.writeFile(path.join(outputDir, `${meta.audience}-${meta.id}.svg`), svg, 'utf8');
  }

  console.log(`Generated ${classes.length} hero images in ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
