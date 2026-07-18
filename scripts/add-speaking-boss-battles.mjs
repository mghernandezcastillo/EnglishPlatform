import { Project, SyntaxKind, QuoteKind } from 'ts-morph';

const files = [
  { path: 'src/data/curriculum.ts', audience: 'adults' },
  { path: 'src/data/curriculumKids.ts', audience: 'kids' },
  { path: 'src/data/curriculumTeens.ts', audience: 'teens' }
];

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
  manipulationSettings: {
    quoteKind: QuoteKind.Double,
    useTrailingCommas: false
  }
});

const bossThemes = [
  { re: /hello|intro|greeting|name|meet/i, boss: 'The Greeting Boss', avatar: '👾', focus: ['greetings', 'names', 'feelings', 'goodbyes'] },
  { re: /number|age|birthday|date|time/i, boss: 'The Time Boss', avatar: '⏰', focus: ['numbers', 'ages', 'dates', 'time expressions'] },
  { re: /food|drink|restaurant|lunch|breakfast|dinner|snack/i, boss: 'The Hungry Boss', avatar: '🍔', focus: ['food words', 'ordering phrases', 'likes and dislikes', 'meal choices'] },
  { re: /animal|pet|wild|safari/i, boss: 'The Safari Boss', avatar: '🦁', focus: ['animal words', 'descriptions', 'abilities', 'preferences'] },
  { re: /family|home|house|room|apartment/i, boss: 'The Home Boss', avatar: '🏠', focus: ['family words', 'rooms', 'descriptions', 'daily home actions'] },
  { re: /clothes|weather|wear|fashion/i, boss: 'The Weather Closet Boss', avatar: '🧥', focus: ['clothes', 'weather words', 'colors', 'outfit descriptions'] },
  { re: /job|work|profession|career|interview/i, boss: 'The Interview Boss', avatar: '💼', focus: ['job words', 'work routines', 'abilities', 'interview answers'] },
  { re: /travel|airport|hotel|vacation|trip|transport|vehicle/i, boss: 'The Travel Boss', avatar: '✈️', focus: ['travel words', 'places', 'plans', 'transport choices'] },
  { re: /shop|shopping|money|price|store/i, boss: 'The Discount Boss', avatar: '🛒', focus: ['shopping phrases', 'prices', 'requests', 'preferences'] },
  { re: /health|doctor|body|sick|pain/i, boss: 'The Health Boss', avatar: '🩺', focus: ['body words', 'symptoms', 'advice', 'health routines'] },
  { re: /sport|hobb|music|movie|free time|game/i, boss: 'The Hobby Boss', avatar: '🎮', focus: ['hobbies', 'likes', 'routines', 'opinions'] },
  { re: /school|classroom|subject|study|student/i, boss: 'The Classroom Boss', avatar: '🎒', focus: ['classroom words', 'school actions', 'questions', 'instructions'] },
  { re: /technology|gadget|phone|app|computer|internet/i, boss: 'The Gadget Boss', avatar: '📱', focus: ['technology words', 'apps', 'habits', 'opinions'] },
  { re: /past|yesterday|regular|irregular|time machine/i, boss: 'The Time Machine Boss', avatar: '🕹️', focus: ['past verbs', 'time markers', 'stories', 'memories'] },
  { re: /future|will|going to|plan/i, boss: 'The Future Boss', avatar: '🚀', focus: ['future plans', 'predictions', 'intentions', 'time expressions'] },
  { re: /direction|place|city|town|map|preposition/i, boss: 'The Map Boss', avatar: '🗺️', focus: ['places', 'directions', 'prepositions', 'location questions'] },
  { re: /color|shape|toy/i, boss: 'The Color Boss', avatar: '🎨', focus: ['colors', 'shapes', 'objects', 'descriptions'] }
];

function stringValue(prop) {
  const initializer = prop?.getInitializer();
  if (!initializer) return '';
  if (initializer.getKind() === SyntaxKind.StringLiteral) return initializer.getLiteralText();
  return initializer.getText().replace(/^["'`]|["'`]$/g, '');
}

function getProp(objectLiteral, name) {
  return objectLiteral.getProperties().find((prop) => {
    if (!prop.isKind(SyntaxKind.PropertyAssignment)) return false;
    return prop.getName().replace(/^["']|["']$/g, '') === name;
  });
}

function getArrayProp(objectLiteral, name) {
  const prop = getProp(objectLiteral, name);
  const initializer = prop?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  return initializer;
}

function cleanTopic(title) {
  return title
    .replace(/^Clase\s+\d+\s*:\s*/i, '')
    .replace(/^Class\s+\d+\s*:\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function themeFor(title, objective, audience) {
  const topic = cleanTopic(title || objective || 'today\'s topic');
  const haystack = `${title} ${objective}`;
  const matched = bossThemes.find((theme) => theme.re.test(haystack)) || {
    boss: audience === 'kids' ? 'The Super English Boss' : 'The Speaking Boss',
    avatar: audience === 'kids' ? '⭐' : '⚔️',
    focus: ['today\'s vocabulary', 'useful phrases', 'class grammar', 'speaking confidence']
  };

  if (audience === 'kids') {
    return {
      topic,
      boss: matched.boss.replace('Boss', 'Monster Boss'),
      avatar: matched.avatar,
      tone: 'short and fun'
    };
  }

  if (audience === 'teens') {
    return {
      topic,
      boss: matched.boss,
      avatar: matched.avatar,
      tone: 'natural and confident'
    };
  }

  return {
    topic,
    boss: matched.boss,
    avatar: matched.avatar,
    tone: 'clear and professional'
  };
}

function promptsFor(title, objective, audience) {
  const theme = themeFor(title, objective, audience);
  const lowerTopic = theme.topic.toLowerCase();
  const focus = (bossThemes.find((candidate) => candidate.re.test(`${title} ${objective}`))?.focus || ['keywords', 'phrases', 'grammar', 'speaking']).slice(0, 4);

  const speakTime = audience === 'kids' ? 30 : 45;
  const partner = audience === 'kids' ? 'a friend' : 'a partner';

  return {
    bossName: theme.boss,
    bossTitle: theme.topic,
    bossAvatar: theme.avatar,
    timerSeconds: 30,
    rounds: {
      remember: [
        `Say three words connected to ${lowerTopic}.`,
        `Say one useful phrase for ${lowerTopic}.`
      ],
      use: [
        `Create one sentence about ${lowerTopic} using ${focus[0]}.`,
        `Ask ${partner} one question about ${lowerTopic}.`
      ],
      speak: [
        `Speak for ${speakTime} seconds about ${lowerTopic}.`,
        `Include one example, one opinion, and one class phrase.`
      ],
      memoryBonus: [
        `Use one word or structure from a previous class.`,
        `Connect it naturally to ${lowerTopic}.`
      ]
    }
  };
}

function literalText(value, indent = 16) {
  const pad = ' '.repeat(indent);
  const pad2 = ' '.repeat(indent + 2);
  const pad4 = ' '.repeat(indent + 4);
  const pad6 = ' '.repeat(indent + 6);
  const roundLine = (items) => `[\n${items.map((item) => `${pad6}${JSON.stringify(item)}`).join(',\n')}\n${pad4}]`;

  return `{
${pad2}id: "slide-boss-battle",
${pad2}title: "Speaking Boss Battle",
${pad2}description: "Defeat the boss with today's English.",
${pad2}type: "speaking-boss-battle",
${pad2}content: [${JSON.stringify(`Defeat the boss using ${value.bossTitle}.`)}],
${pad2}bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
${pad2}speakingBossBattle: {
${pad4}bossName: ${JSON.stringify(value.bossName)},
${pad4}bossTitle: ${JSON.stringify(value.bossTitle)},
${pad4}bossAvatar: ${JSON.stringify(value.bossAvatar)},
${pad4}timerSeconds: 30,
${pad4}rounds: {
${pad6}remember: ${roundLine(value.rounds.remember)},
${pad6}use: ${roundLine(value.rounds.use)},
${pad6}speak: ${roundLine(value.rounds.speak)},
${pad6}memoryBonus: ${roundLine(value.rounds.memoryBonus)}
${pad4}}
${pad2}}
${pad}}`;
}

function findProductionSection(classObject) {
  const sections = getArrayProp(classObject, 'sections');
  if (!sections) return undefined;

  const sectionObjects = sections.getElements().filter((section) => section.isKind(SyntaxKind.ObjectLiteralExpression));
  const productionSection = sectionObjects.find((section) => {
    if (!section.isKind(SyntaxKind.ObjectLiteralExpression)) return false;
    const title = stringValue(getProp(section, 'title'));
    return /production|quiz/i.test(title);
  });

  if (productionSection) return productionSection;

  const showAndTellSection = sectionObjects.find((section) => {
    const title = stringValue(getProp(section, 'title'));
    return /show|tell|speaking|talk/i.test(title);
  });

  if (showAndTellSection) return showAndTellSection;

  return sectionObjects[Math.max(0, sectionObjects.length - 2)];
}

function upsertBossSlide(classObject, audience) {
  const id = stringValue(getProp(classObject, 'id'));
  const title = stringValue(getProp(classObject, 'title'));
  const objective = stringValue(getProp(classObject, 'objective'));
  const productionSection = findProductionSection(classObject);
  const slides = productionSection && getArrayProp(productionSection, 'slides');

  if (!id || !slides) {
    return { status: 'missing-production-section', id, title };
  }

  const value = promptsFor(title, objective, audience);
  const slideText = literalText(value);
  const existingIndex = slides.getElements().findIndex((slide) => {
    if (!slide.isKind(SyntaxKind.ObjectLiteralExpression)) return false;
    return stringValue(getProp(slide, 'type')) === 'speaking-boss-battle';
  });

  if (existingIndex >= 0) {
    slides.removeElement(existingIndex);
    slides.insertElement(existingIndex, slideText);
    return { status: 'updated', id, title };
  }

  const elements = slides.getElements();
  let insertIndex = elements.length;
  const roleplayIndex = elements.findIndex((slide) => {
    if (!slide.isKind(SyntaxKind.ObjectLiteralExpression)) return false;
    const slideTitle = stringValue(getProp(slide, 'title'));
    const slideType = stringValue(getProp(slide, 'type'));
    return /roleplay|share|partner/i.test(slideTitle) || /roleplay/i.test(slideType);
  });

  if (roleplayIndex >= 0) {
    insertIndex = roleplayIndex;
  }

  slides.insertElement(insertIndex, slideText);
  return { status: 'inserted', id, title };
}

const results = [];

for (const item of files) {
  const source = project.getSourceFileOrThrow(item.path);
  const classObjects = source.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression).filter((objectLiteral) => {
    const id = stringValue(getProp(objectLiteral, 'id'));
    return id.startsWith('c-') && !!getArrayProp(objectLiteral, 'sections');
  });

  let inserted = 0;
  let updated = 0;
  let missing = 0;

  for (const classObject of classObjects) {
    const result = upsertBossSlide(classObject, item.audience);
    if (result.status === 'inserted') inserted += 1;
    if (result.status === 'updated') updated += 1;
    if (result.status === 'missing-production-section') missing += 1;
  }

  results.push({
    file: item.path,
    audience: item.audience,
    classes: classObjects.length,
    inserted,
    updated,
    missing
  });
}

await project.save();

for (const result of results) {
  console.log(`${result.audience}: classes=${result.classes} inserted=${result.inserted} updated=${result.updated} missing=${result.missing}`);
}
