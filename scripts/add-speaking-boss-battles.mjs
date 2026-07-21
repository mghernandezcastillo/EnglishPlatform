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

function stripAccents(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function legacyEnglishTopic(topic) {
  const normalized = stripAccents(topic).toLowerCase();
  const overrides = [
    [/rutinas diarias.*(hora|time)/, 'Daily Routines & Time'],
    [/rutinas.*present simple/, 'Routines & Present Simple'],
    [/numbers.*(hora|time)/, 'Numbers & Time'],
    [/partes del body.*pets/, 'Body Parts & Pets'],
    [/family.*posesivos/, 'Family Vocabulary & Possessives'],
    [/weather.*estaciones/, 'Weather & Seasons'],
    [/imperativos.*instrucciones/, 'Imperatives for Giving Instructions'],
    [/direcciones.*calle|pedir.*direcciones/, 'Asking for and Giving Street Directions'],
    [/articulos.*demostrativos/, 'Articles & Demonstratives'],
    [/direcciones.*preposiciones.*lugar/, 'Directions & Prepositions of Place'],
    [/greetings.*despedidas.*supervivencia/, 'Greetings, Farewells & Survival Conversation'],
    [/alfabeto.*deletreo.*names/, 'The Alphabet & Spelling Names'],
    [/review general.*basic zero/, 'Basic Zero General Review'],
    [/review general.*basic 1/, 'Basic 1 General Review'],
    [/review general.*basic 3/, 'Basic 3 General Review'],
    [/proyecto final.*level/, 'Final Level Project'],
    [/habilidades.*posibilidades.*can/, 'Abilities & Possibilities with Can'],
    [/places.*ciudad.*transporte|ciudad.*transporte.*places/, 'City Places & Transportation'],
    [/past.*verbo to be|past.*to be|was\/were/, 'Past To Be: Was/Were'],
    [/biografias.*personas famosas/, 'Biographies of Famous People'],
    [/travel.*vacaciones/, 'Travel & Vacations'],
    [/dando opiniones|acuerdo\/desacuerdo/, 'Giving Opinions and Agreeing or Disagreeing'],
    [/preparacion.*intermedio/, 'Intermediate Level Preparation'],
    [/primer condicional/, 'First Conditional'],
    [/segundo condicional/, 'Second Conditional'],
    [/tercer condicional/, 'Third Conditional'],
    [/verbos modales.*consejo|should/, 'Modal Verbs for Advice'],
    [/verbos modales.*posibilidad|may/, 'Modal Verbs for Possibility'],
    [/exceso.*suficiencia|too/, 'Too and Enough for Excess and Sufficiency'],
    [/present perfect.*experiencias/, 'Present Perfect for Life Experiences'],
    [/resolviendo problemas.*quejas/, 'Solving Problems and Customer Complaints'],
    [/professions.*trabajo/, 'Professions & Workplaces'],
    [/adverbios.*frecuencia/, 'Adverbs of Frequency'],
    [/comidas.*drinks.*restaurantes/, 'Food, Drinks & Restaurant Vocabulary'],
    [/estado.*accion.*present continuous/, 'State and Action Verbs in Present Continuous'],
    [/hablando.*infancia.*recuerdos/, 'Talking About Childhood and Memories'],
    [/formando.*questions.*negaciones.*past/, 'Forming Questions and Negatives in the Past'],
    [/tiempos verbales basicos/, 'Basic Verb Tenses Review'],
    [/vocabulario.*trabajo.*oficina/, 'Work and Office Vocabulary'],
    [/gerundios.*infinitivos/, 'Gerunds and Infinitives After Verbs'],
    [/introduction.*phrasal verbs.*usados/, 'Introduction to Common Phrasal Verbs'],
    [/vocabulario avanzado.*negocios.*negociacion/, 'Advanced Business and Negotiation Vocabulary'],
    [/phrasal verbs avanzados/, 'Advanced Phrasal Verbs in Context'],
    [/preparando.*alto impacto/, 'Preparing High-impact Introductions'],
    [/storytelling.*profesionales/, 'Storytelling in Professional Settings'],
    [/analizando.*articulos.*opinion.*noticias/, 'Analyzing Opinion Articles and News'],
    [/inversiones.*enfasis/, 'Inversion for Formal Emphasis'],
    [/cleft sentences/, 'Cleft Sentences for Emphasis'],
    [/debates.*temas complejos/, 'Debates on Complex Topics'],
    [/proyecto final masters/, 'Final Masters Project'],
    [/school.*materias.*objetos/, 'School Subjects & Classroom Objects'],
    [/planes.*fin.*semana.*will.*going to/, 'Weekend Plans with Will and Going To'],
    [/chat.*llamadas.*evento\/viaje/, 'Chats, Help Calls & Event or Trip Projects'],
    [/habilidades con can/, 'Abilities with Can'],
    [/conversacion actual.*rutinas.*review/, 'Current Conversations, Routines & Speaking Review'],
    [/vacaciones.*travel.*anecdotas/, 'Vacations, Travel & Anecdotes'],
    [/biografias.*artistas.*deportistas.*creadores/, 'Biographies of Artists, Athletes & Creators'],
    [/conectores.*historias/, 'Storytelling Connectors'],
    [/problemas cotidianos/, 'Everyday Problems and How to Explain Them'],
    [/irregulares.*-ed.*video/, 'Irregular Verbs, -ed Endings & Video Projects'],
    [/planes.*consecuencias/, 'Plans and Consequences with the First Conditional'],
    [/consejos entre amigos/, 'Advice Between Friends with Should'],
    [/mensajes.*emails.*chats/, 'Informal and Formal Messages, Emails & Chats'],
    [/atencion al cliente.*transicion/, 'Teen Customer Service & Transition Evaluation'],
    [/modales.*posibilidad.*deduccion/, 'Modals of Possibility and Deduction'],
    [/phrasal verbs frecuentes.*conversaciones adolescentes/, 'Frequent Phrasal Verbs in Teen Conversations'],
    [/primer.*segundo condicional/, 'First and Second Conditional'],
    [/opiniones.*acuerdos.*desacuerdos/, 'Respectful Opinions, Agreement & Disagreement'],
    [/podcast\/debate.*beca\/empleo/, 'Podcast or Debate Projects and Scholarship or Job Interviews'],
    [/reported speech.*chismes.*noticias.*conversaciones/, 'Reported Speech in Gossip, News & Conversations'],
    [/relative clauses.*descripcion.*personas\/cosas/, 'Relative Clauses and Detailed Descriptions of People and Things'],
    [/voz pasiva.*noticias.*technology/, 'Passive Voice in News and Technology'],
    [/phrasal verbs.*idioms.*uso real/, 'Phrasal Verbs and Real-life Idioms'],
    [/entrevistas.*trabajo\/voluntariado.*problemas/, 'Work or Volunteer Interviews and Problem Solving'],
    [/future continuous.*future perfect.*metas/, 'Future Continuous, Future Perfect & Goal Planning'],
    [/condicionales mixtos.*decisiones pasadas/, 'Mixed Conditionals and Past Decisions'],
    [/ensayos.*opiniones.*academicas/, 'Essays, Opinions & Academic Presentations'],
    [/reuniones.*liderazgo.*trabajo en equipo/, 'Meetings, Leadership & Teamwork'],
    [/pitch.*emprendimiento.*conferencia/, 'Final Project: Business Pitch or Conference Talk'],
    [/analisis.*peliculas.*musica.*noticias.*cultura digital/, 'Movie, Music, News & Digital Culture Analysis'],
    [/ingles academico.*universidad.*intercambios/, 'Academic English for University and Exchange Programs'],
    [/creacion.*podcast.*videoensayo.*ted/, 'Podcast, Video Essay & TED-style Presentation Creation'],
    [/temas globales.*etica.*weather.*sociedad/, 'Global Issues: Technology, Ethics, Climate & Society'],
    [/preparacion.*entrevistas c1.*conversation club/, 'C1 Interview Preparation & Conversation Club']
  ];

  const match = overrides.find(([pattern]) => pattern.test(normalized));
  return match?.[1] || topic;
}

function cleanTopic(title) {
  const englishTitle = (title || '').split(/\s+\/\s+/)[0];
  const topic = englishTitle
    .replace(/^Clase\s+\d+\s*:\s*/i, '')
    .replace(/^Class\s+\d+\s*:\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
  return legacyEnglishTopic(topic);
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
  const prepareTime = audience === 'kids' ? 20 : 30;
  const partner = audience === 'kids' ? 'a friend' : 'a partner';

  return {
    bossName: theme.boss,
    bossTitle: theme.topic,
    bossAvatar: theme.avatar,
    timerSeconds: speakTime,
    prepareSeconds: prepareTime,
    rounds: {
      remember: [
        `You have 30 seconds: say three key words and one useful phrase connected to ${lowerTopic}.`
      ],
      use: [
        `You have 60 seconds: create three sentences about ${lowerTopic} using ${focus[0]}: one positive, one negative, and one question.`
      ],
      speak: [
        `Speak for ${speakTime} seconds about ${lowerTopic}.`,
        `Use what you learned today: include a positive sentence, a negative sentence, and a question.`
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
${pad4}timerSeconds: ${value.timerSeconds},
${pad4}prepareSeconds: ${value.prepareSeconds},
${pad4}rounds: {
${pad6}remember: ${roundLine(value.rounds.remember)},
${pad6}use: ${roundLine(value.rounds.use)},
${pad6}speak: ${roundLine(value.rounds.speak)}
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
