import { SpeakingQuestion } from './speakingQuestions';

export interface TargetWord {
  word: string;
  translation: string;
  type: 'noun' | 'verb' | 'adjective' | 'expression';
  exampleSnippet?: string;
}

export interface BlueprintLevel {
  label: string;
  cefr: string;
  color: string;
  templateEn: string;
  templateEs: string;
  exampleFullEn: string;
  strategyTip: string;
}

export interface SpeakingBlueprintData {
  targetWords: TargetWord[];
  starter: BlueprintLevel;
  confident: BlueprintLevel;
  pro: BlueprintLevel;
  quickStarters: Array<{ en: string; es: string }>;
}

// Curated high-yield dictionary by exact question or topic
export const CURATED_BLUEPRINTS: Record<string, Partial<SpeakingBlueprintData>> = {
  // Movies: home vs cinema
  'do you prefer watching movies at home or in the cinema?': {
    targetWords: [
      { word: 'comfy', translation: 'cómodo / acogedor', type: 'adjective', exampleSnippet: 'my couch is so comfy' },
      { word: 'pricey', translation: 'caro / costoso', type: 'adjective', exampleSnippet: 'tickets are getting pricey' },
      { word: 'blockbuster', translation: 'película taquillera', type: 'noun', exampleSnippet: 'massive blockbuster on the big screen' },
      { word: 'unwind', translation: 'desconectarse / relajarse', type: 'verb', exampleSnippet: 'it helps me unwind after a long week' },
      { word: 'atmosphere', translation: 'ambiente / inmersión', type: 'noun', exampleSnippet: 'the unique cinema atmosphere' },
      { word: 'splurge', translation: 'darse el gusto / gastar', type: 'verb', exampleSnippet: 'splurge on popcorn and snacks' }
    ],
    quickStarters: [
      { en: "Personally, I'd say...", es: "En lo personal, diría que..." },
      { en: "If I had to choose...", es: "Si tuviera que elegir..." },
      { en: "To be completely honest...", es: "Para ser totalmente honesto/a..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'Personally, I prefer [watching at home / going to the cinema] because it is much more [comfy / exciting]. I can [unwind] and enjoy it without spending too much.',
      templateEs: 'En lo personal, prefiero [ver en casa / ir al cine] porque es mucho más [cómodo / emocionante]. Puedo [desconectarme] y disfrutarlo sin gastar demasiado.',
      exampleFullEn: 'Personally, I prefer watching movies at home because it is much more comfy. I can unwind on my couch and avoid pricey tickets.',
      strategyTip: 'Usa una postura directa + un adjetivo claro que justifique tu elección.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "To be honest, it really depends on the movie. If it's a massive [blockbuster], I love the [atmosphere] of the big screen. However, on regular days I'd rather stay home where it's [comfy] and relaxing.",
      templateEs: 'Para ser honesto, realmente depende de la película. Si es un gran [taquillazo], me encanta el [ambiente] de la gran pantalla. Sin embargo, en días normales prefiero quedarme en casa donde es [cómodo] y relajante.',
      exampleFullEn: "To be honest, it really depends on the movie. If it's a visual blockbuster, I love the theater atmosphere. But usually, staying home is way more relaxing and affordable.",
      strategyTip: 'Aplica contraste ("On one hand..., but on the other hand...") para sonar maduro y reflexivo.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'While nothing quite replicates the sheer audio-visual [atmosphere] of a big-screen [blockbuster], the unmatched convenience of being able to [unwind] in a [comfy] setting usually wins out for me, especially when I don\'t feel like [splurging] on [pricey] tickets.',
      templateEs: 'Aunque nada replica del todo la pura [atmósfera] audiovisual de un [taquillazo] en pantalla gigante, la incomparable comodidad de poder [desconectarme] en un entorno [acogedor] suele ganar para mí, sobre todo cuando no quiero [derrochar] en boletos [costosos].',
      exampleFullEn: 'While nothing quite beats the sheer atmosphere of a cinema blockbuster, the convenience of unwinding at home in pajamas usually wins out.',
      strategyTip: 'Inicia con una cláusula de concesión ("While nothing beats X, Y usually wins out...") para máxima sofisticación.'
    }
  },

  // Weekend plans
  'what are your plans for this weekend?': {
    targetWords: [
      { word: 'catch up', translation: 'ponerse al día', type: 'verb', exampleSnippet: 'catch up on sleep / work' },
      { word: 'chill out', translation: 'relajarse / pasar el rato', type: 'verb', exampleSnippet: 'just chill out with friends' },
      { word: 'errands', translation: 'diligencias / recados', type: 'noun', exampleSnippet: 'run a few errands around town' },
      { word: 'get together', translation: 'reunirse / parchar', type: 'verb', exampleSnippet: 'get together for coffee or lunch' },
      { word: 'recharge', translation: 'recargar energías', type: 'verb', exampleSnippet: 'take time to recharge my batteries' },
      { word: 'hectic', translation: 'ajetreado / caótico', type: 'adjective', exampleSnippet: 'after a hectic week at work' }
    ],
    quickStarters: [
      { en: "As of right now, I'm planning to...", es: "Por ahora, tengo planeado..." },
      { en: "I haven't set anything in stone yet, but...", es: "Aún no tengo nada fijo, pero..." },
      { en: "My main priority this weekend is to...", es: "Mi prioridad principal este fin de semana es..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'This weekend, I am planning to [relax / meet my friends]. On Saturday, I want to [run some errands] and then [chill out]. It will help me [recharge].',
      templateEs: 'Este fin de semana planeo [relajarme / ver a mis amigos]. El sábado quiero [hacer diligencias] y luego [descansar]. Me ayudará a [recargarme].',
      exampleFullEn: 'This weekend, I am planning to chill out at home. On Saturday, I want to run a few errands and catch up on sleep.',
      strategyTip: 'Divide tu respuesta en 2 momentos: Sábado y Domingo.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "I haven't finalized everything yet, but after a pretty [hectic] week, my main focus is to [recharge]. I'll probably [get together] with some close friends on Saturday and spend Sunday taking it easy.",
      templateEs: 'Aún no lo tengo todo cerrado, pero tras una semana bastante [ajetreada], mi foco es [recargar energías]. Probablemente me [reuniré] con amigos el sábado y pasaré el domingo tranquilo.',
      exampleFullEn: "I haven't locked in plans yet, but after a hectic week I really need to recharge. I'll likely get together with family on Sunday.",
      strategyTip: 'Menciona tu estado de ánimo o cómo te dejó la semana antes de contar los planes.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Given how demanding this past week has been, my agenda is purposefully low-key. The goal is simply to [unwind], [catch up] with family, and knock out a few overdue [errands] before the next busy sprint starts.',
      templateEs: 'Considerando lo exigente que fue esta semana, mi agenda es intencionalmente tranquila. El objetivo es simplemente [desconectar], [ponerme al día] con mi familia y adelantar unas [diligencias] pendientes.',
      exampleFullEn: 'Given how demanding the week was, I am keeping things low-key: catching up on personal projects and getting together with a mentor.',
      strategyTip: 'Usa vocabulario de estilo de vida como "low-key", "demanding week", "agenda".'
    }
  },

  // Dream job / work
  'what is your dream job?': {
    targetWords: [
      { word: 'fulfilling', translation: 'gratificante / enriquecedor', type: 'adjective', exampleSnippet: 'a deeply fulfilling career' },
      { word: 'work-life balance', translation: 'equilibrio trabajo-vida', type: 'noun', exampleSnippet: 'maintain a healthy work-life balance' },
      { word: 'remote', translation: 'a distancia / remoto', type: 'adjective', exampleSnippet: 'flexible remote position' },
      { word: 'growth mindset', translation: 'mentalidad de crecimiento', type: 'noun', exampleSnippet: 'culture with a growth mindset' },
      { word: 'make an impact', translation: 'generar un impacto positivo', type: 'expression', exampleSnippet: 'opportunity to make a real impact' },
      { word: 'lucrative', translation: 'bien remunerado / lucrativo', type: 'adjective', exampleSnippet: 'both lucrative and stimulating' }
    ],
    quickStarters: [
      { en: "If money were not an issue...", es: "Si el dinero no fuera un problema..." },
      { en: "In an ideal scenario, I would love to...", es: "En un escenario ideal, me encantaría..." },
      { en: "What truly drives me professionally is...", es: "Lo que realmente me mueve profesionalmente es..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'My dream job is to work as a [profession / position] in a good company. I want a job that is [fulfilling] and gives me good [work-life balance].',
      templateEs: 'El trabajo de mis sueños es trabajar como [profesión / cargo] en una buena empresa. Quiero un trabajo que sea [gratificante] y me dé buen [equilibrio de vida].',
      exampleFullEn: 'My dream job is to work in tech with a great team. I want something fulfilling with a healthy work-life balance.',
      strategyTip: 'Menciona el rol y la cualidad que más valoras (ambiente, balance, aprendizaje).'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'More than a specific title, my dream role is one where I can [make an impact] while having [remote] flexibility. I want to be surrounded by people who have a [growth mindset] and value collaboration.',
      templateEs: 'Más que un título específico, mi puesto soñado es uno donde pueda [generar impacto] teniendo flexibilidad [remota]. Quiero estar rodeado de personas con [mentalidad de crecimiento].',
      exampleFullEn: 'More than a title, I dream of a role where I can solve real challenges remotely and maintain a great work-life balance.',
      strategyTip: 'Enfoca la respuesta en el "estilo de vida" y la "cultura" en lugar de sólo el salario.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Ultimately, my ideal career combines autonomy with purpose. It needs to be intellectually stimulating, financially [lucrative], and above all, deeply [fulfilling] in terms of the tangible value delivered to clients.',
      templateEs: 'En última instancia, mi carrera ideal combina autonomía con propósito. Debe ser intelectualmente estimulante, financieramente [lucrativa] y sobre todo [gratificante] por el valor tangible generado.',
      exampleFullEn: 'Ultimately, my ideal career balances creative freedom, strong compensation, and the ability to make a lasting impact in education.',
      strategyTip: 'Usa adverbios de cierre ("Ultimately, ...", "Above all, ...") y sustantivos abstractos (autonomy, purpose).'
    }
  },

  // Travel: best way or vacation
  'which country would you like to visit in the future?': {
    targetWords: [
      { word: 'breathtaking', translation: 'impresionante / asombroso', type: 'adjective', exampleSnippet: 'breathtaking mountain scenery' },
      { word: 'bucket list', translation: 'lista de deseos / metas de vida', type: 'noun', exampleSnippet: 'at the very top of my bucket list' },
      { word: 'immerse myself', translation: 'sumergirme / empaparme', type: 'verb', exampleSnippet: 'immerse myself in the local culture' },
      { word: 'delicacies', translation: 'manjares / delicias típicas', type: 'noun', exampleSnippet: 'sample authentic regional delicacies' },
      { word: 'fascinating', translation: 'fascinante', type: 'adjective', exampleSnippet: 'a fascinating blend of history and innovation' },
      { word: 'wander', translation: 'deambular / pasear sin rumbo', type: 'verb', exampleSnippet: 'wander through ancient alleys' }
    ],
    quickStarters: [
      { en: "At the very top of my bucket list is...", es: "En la cima de mi lista de viajes está..." },
      { en: "I have always been drawn to...", es: "Siempre me ha llamado mucho la atención..." },
      { en: "If I could pack my bags tomorrow, I'd go to...", es: "Si pudiera empacar mis maletas mañana, iría a..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I would love to visit [Country] because it looks [breathtaking]. I really want to try the local [delicacies] and visit famous places with my family.',
      templateEs: 'Me encantaría visitar [País] porque se ve [asombroso]. Realmente quiero probar las [delicias] locales y visitar lugares famosos.',
      exampleFullEn: 'I would love to visit Japan because it looks breathtaking. I really want to try authentic ramen and visit Tokyo.',
      strategyTip: 'Menciona el país y 1 cosa específica que quieres comer o visitar.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: '[Country] is at the very top of my [bucket list]. I have always been [fascinated] by their culture, and I would love the chance to [immerse myself] in their traditions and [wander] through historic cities.',
      templateEs: '[País] está en la cima de mi [lista de deseos]. Siempre me ha [fascinado] su cultura, y me encantaría la oportunidad de [sumergirme] en sus tradiciones.',
      exampleFullEn: 'Italy is at the top of my bucket list. I have always wanted to immerse myself in the culture and wander through Rome.',
      strategyTip: 'Usa la frase "bucket list" y el verbo "immerse myself".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: "I've long been intrigued by [Country] due to its striking contrast between ancient heritage and modern ambition. Beyond the tourist hotspots, my goal would be to [immerse myself] in rural communities and savor authentic regional [delicacies].",
      templateEs: 'Hace mucho me intriga [País] por su impresionante contraste entre patrimonio milenario y modernidad. Más allá de los sitios turísticos, mi meta sería [sumergirme] en sus comunidades y saborear delicias regionales.',
      exampleFullEn: "I've long been captivated by Norway due to its breathtaking fjords and commitment to sustainability.",
      strategyTip: 'Explica el contraste cultural o la razón profunda que te atrae más allá de "ser bonito".'
    }
  },

  // Food: Eating at home vs eating out
  'do you prefer eating at home or eating out?': {
    targetWords: [
      { word: 'home-cooked', translation: 'comida casera', type: 'adjective', exampleSnippet: 'nothing beats a home-cooked meal' },
      { word: 'dine out', translation: 'comer en restaurante', type: 'verb', exampleSnippet: 'dine out with coworkers on Fridays' },
      { word: 'cost-effective', translation: 'económico / rentable', type: 'adjective', exampleSnippet: 'cooking is much more cost-effective' },
      { word: 'craving', translation: 'antojo', type: 'noun', exampleSnippet: 'satisfy an intense craving for sushi' },
      { word: 'atmosphere', translation: 'ambiente del local', type: 'noun', exampleSnippet: 'the cozy restaurant atmosphere' },
      { word: 'hassle', translation: 'molestia / complique', type: 'noun', exampleSnippet: 'avoid the hassle of washing dishes' }
    ],
    quickStarters: [
      { en: "In general, I lean towards...", es: "Por lo general, me inclino por..." },
      { en: "When it comes to meals, I prioritize...", es: "En cuanto a comidas, priorizo..." },
      { en: "Hands down, I would choose...", es: "Sin duda alguna, elegiría..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I prefer [eating at home / dining out] because it is more [home-cooked / convenient]. When I cook at home, it is very [cost-effective] and healthy.',
      templateEs: 'Prefiero [comer en casa / salir a comer] porque es más [casero / conveniente]. Cuando cocino en casa, es muy [económico] y saludable.',
      exampleFullEn: 'I prefer eating at home because I love healthy home-cooked meals. It is also more cost-effective.',
      strategyTip: 'Menciona si priorizas la salud, el bolsillo o el ahorro de tiempo.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "During weekdays, I definitely stick to [home-cooked] food to save money and stay healthy. However, on weekends I love to [dine out] to satisfy specific [cravings] and skip the [hassle] of cleaning up.",
      templateEs: 'Entre semana definitivamente me apego a la comida [casera] para ahorrar y comer sano. Sin embargo, el fin de semana me encanta [comer fuera] para matar [antojos].',
      exampleFullEn: 'During the week I cook at home to stay fit, but on Friday nights I love dining out to avoid the hassle of cooking.',
      strategyTip: 'Contrasta tus hábitos entre semana (lunes a viernes) vs. fines de semana.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'While cooking from scratch is undeniably more wholesome and [cost-effective], the culinary diversity and ambient charm of [dining out] make it an irresistible weekend ritual when I want to indulge.',
      templateEs: 'Si bien cocinar desde cero es innegablemente más saludable y [económico], la diversidad gastronómica y el encanto de [comer en restaurantes] lo hacen un ritual irresistible de fin de semana.',
      exampleFullEn: 'While home-cooked meals are my daily staple for nutrition, dining out offers a social recharge that is well worth the extra expense.',
      strategyTip: 'Usa palabras ricas como "wholesome", "from scratch", "indulge", "culinary diversity".'
    }
  },

  // Technology & Social media
  'how much time do you spend on social media?': {
    targetWords: [
      { word: 'mindlessly scroll', translation: 'scrollear en piloto automático', type: 'expression', exampleSnippet: 'mindlessly scroll before bed' },
      { word: 'screen time', translation: 'tiempo en pantalla', type: 'noun', exampleSnippet: 'trying to cut down my screen time' },
      { word: 'informative', translation: 'informativo / de valor', type: 'adjective', exampleSnippet: 'follow informative educational accounts' },
      { word: 'unplug', translation: 'desconectarse digitalmente', type: 'verb', exampleSnippet: 'need to unplug during weekends' },
      { word: 'distraction', translation: 'distracción constante', type: 'noun', exampleSnippet: 'notifications can be a major distraction' },
      { word: 'keep in touch', translation: 'mantener el contacto', type: 'expression', exampleSnippet: 'great to keep in touch with distant friends' }
    ],
    quickStarters: [
      { en: "If I'm being brutally honest...", es: "Siendo brutalmente honesto/a..." },
      { en: "Probably way more than I should, roughly...", es: "Probablemente mucho más de lo que debería, cerca de..." },
      { en: "I make a conscious effort to...", es: "Hago un esfuerzo consciente para..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I spend about [2 to 3 hours] on social media every day. I mostly use it to [keep in touch] with friends and watch funny videos. Sometimes it is a [distraction].',
      templateEs: 'Paso cerca de [2 a 3 horas] en redes sociales al día. Principalmente las uso para [mantenerme en contacto] con amigos y ver videos.',
      exampleFullEn: 'I spend around two hours a day on social media. I use it to keep in touch with friends, but sometimes I scroll too much.',
      strategyTip: 'Da una cifra aproximada de horas y menciona para qué la usas.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "If I'm being honest, probably more than I care to admit! My daily [screen time] is around three hours. I try to consume [informative] content, but I often catch myself [mindlessly scrolling] late at night.",
      templateEs: 'Siendo sincero, probablemente más de lo que me gustaría admitir. Mi [tiempo en pantalla] ronda las 3 horas. Intento consumir contenido [educativo], pero termino scrolleando.',
      exampleFullEn: "More than I should! My screen time averages 3 hours. I use it for networking, but it's easy to get sucked into mindlessly scrolling.",
      strategyTip: 'Reconoce la realidad con humor: "Probably more than I care to admit!".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Social media is a double-edged sword for me. While it is indispensable for staying abreast of industry trends, the sheer volume of algorithmic dopamine often leads to excessive [screen time] unless I deliberately [unplug].',
      templateEs: 'Las redes sociales son un arma de doble filo para mí. Aunque son indispensables para estar al día con la industria, el bombardeo algorítmico genera exceso de pantalla si no me desconecto deliberadamente.',
      exampleFullEn: 'It is a classic double-edged sword: vital for professional networking, yet hazardous to productivity without strict boundaries.',
      strategyTip: 'Abre con la metáfora "a double-edged sword" (un arma de doble filo).'
    }
  },

  // Morning person vs night owl
  'are you a morning person or a night owl?': {
    targetWords: [
      { word: 'early bird', translation: 'madrugador / mañanero', type: 'noun', exampleSnippet: 'I have always been an early bird' },
      { word: 'night owl', translation: 'noctámbulo / trasnochador', type: 'noun', exampleSnippet: 'my partner is a total night owl' },
      { word: 'productive', translation: 'productivo / enfocado', type: 'adjective', exampleSnippet: 'my mind is sharp and productive' },
      { word: 'sluggish', translation: 'lento / con pereza', type: 'adjective', exampleSnippet: 'I feel sluggish without morning coffee' },
      { word: 'peace and quiet', translation: 'paz y tranquilidad', type: 'expression', exampleSnippet: 'love the peace and quiet of late nights' },
      { word: 'circadian rhythm', translation: 'ritmo biológico / reloj interno', type: 'noun', exampleSnippet: 'aligned with my natural circadian rhythm' }
    ],
    quickStarters: [
      { en: "Without a shadow of a doubt, I'm a...", es: "Sin la menor duda, soy un/a..." },
      { en: "My internal clock has always leaned towards...", es: "Mi reloj biológico siempre se ha inclinado hacia..." },
      { en: "It has evolved over time, but right now I'm...", es: "Ha cambiado con el tiempo, pero ahora mismo soy..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I am definitely [an early bird / a night owl]. I feel most [productive] when I [wake up early / stay up late]. It gives me energy to start my day.',
      templateEs: 'Definitivamente soy [madrugador / noctámbulo]. Me siento más [productivo] cuando [madrugo / me trasnocho]. Me da energía.',
      exampleFullEn: 'I am definitely an early bird. I feel most productive in the morning with a hot cup of coffee.',
      strategyTip: 'Identifícate de una con una de las dos etiquetas: "an early bird" o "a night owl".'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "I am hands down [an early bird / a night owl]. If I try to work at [night / morning], I feel completely [sluggish]. I love having that [peace and quiet] to tackle my hardest tasks before everyone else wakes up.",
      templateEs: 'Sin duda alguna soy [madrugador / nocturno]. Si intento trabajar de [noche / mañana], me siento súper [aletargado]. Me encanta esa [paz y silencio].',
      exampleFullEn: 'Hands down an early bird. If I stay up late, I feel sluggish the next day. The peace and quiet of 6 AM is unbeatable.',
      strategyTip: 'Explica qué pasa si te obligan al horario opuesto ("I feel sluggish...").'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: "My natural [circadian rhythm] is overwhelmingly geared towards the [morning / evening]. The crack of dawn affords me cognitive clarity and zero interruptions, allowing me to achieve deep work that night hours simply can't match.",
      templateEs: 'Mi [ritmo biológico] natural está abrumadoramente alineado hacia la [mañana / noche]. El amanecer me brinda claridad cognitiva y cero interrupciones.',
      exampleFullEn: 'My chronotype is distinctly morning-oriented; that quiet early window yields my highest cognitive output of the day.',
      strategyTip: 'Usa términos de alto nivel como "circadian rhythm", "cognitive clarity", "deep work".'
    }
  }

};

// Intelligent Scaffolding Engine for questions not explicitly hardcoded
export function getBlueprintForQuestion(question: SpeakingQuestion): SpeakingBlueprintData {
  const qClean = question.question.trim().toLowerCase();
  
  if (CURATED_BLUEPRINTS[qClean]) {
    const base = CURATED_BLUEPRINTS[qClean];
    return {
      targetWords: base.targetWords || [],
      starter: base.starter!,
      confident: base.confident!,
      pro: base.pro!,
      quickStarters: base.quickStarters || [
        { en: "In my opinion...", es: "En mi opinión..." },
        { en: "To be honest...", es: "Para ser honesto/a..." },
        { en: "From my perspective...", es: "Desde mi perspectiva..." }
      ]
    };
  }

  // Topic-tailored word banks
  const topicVocabulary: Record<string, TargetWord[]> = {
    basic: [
      { word: 'originally', translation: 'originalmente / de raíz', type: 'adjective', exampleSnippet: 'originally from Medellín' },
      { word: 'currently', translation: 'actualmente / hoy en día', type: 'expression', exampleSnippet: 'currently living in Bogotá' },
      { word: 'passionate', translation: 'apasionado/a', type: 'adjective', exampleSnippet: 'passionate about learning languages' },
      { word: 'hometown', translation: 'ciudad natal', type: 'noun', exampleSnippet: 'my hometown is vibrant and warm' }
    ],
    family: [
      { word: 'close-knit', translation: 'muy unida / estrecha', type: 'adjective', exampleSnippet: 'we are a close-knit family' },
      { word: 'get along', translation: 'llevarse bien', type: 'verb', exampleSnippet: 'I get along great with my siblings' },
      { word: 'look up to', translation: 'admirar profundamente', type: 'verb', exampleSnippet: 'I look up to my parents' },
      { word: 'supportive', translation: 'incondicional / que apoya', type: 'adjective', exampleSnippet: 'always supportive of my goals' }
    ],
    hobbies: [
      { word: 'unwind', translation: 'desconectarse / relajarse', type: 'verb', exampleSnippet: 'unwind after work' },
      { word: 'into', translation: 'aficionado a / gomoso de', type: 'expression', exampleSnippet: "I'm really into cycling" },
      { word: 'pass the time', translation: 'pasar el rato', type: 'expression', exampleSnippet: 'a fun way to pass the time' },
      { word: 'creative outlet', translation: 'canal creativo / desahogo', type: 'noun', exampleSnippet: 'it serves as a creative outlet' }
    ],
    daily: [
      { word: 'routine', translation: 'rutina habitual', type: 'noun', exampleSnippet: 'my regular morning routine' },
      { word: 'early bird', translation: 'madrugador/a', type: 'noun', exampleSnippet: 'definitely an early bird' },
      { word: 'productive', translation: 'productivo/a', type: 'adjective', exampleSnippet: 'I feel most productive before noon' },
      { word: 'wind down', translation: 'bajar el ritmo / prepararse para dormir', type: 'verb', exampleSnippet: 'wind down with a good book' }
    ],
    food: [
      { word: 'mouth-watering', translation: 'que se hace agua la boca', type: 'adjective', exampleSnippet: 'mouth-watering dishes' },
      { word: 'homemade', translation: 'casero / hecho en casa', type: 'adjective', exampleSnippet: 'nothing beats homemade soup' },
      { word: 'crave', translation: 'antojarse / tener ganas de', type: 'verb', exampleSnippet: 'I often crave spicy food' },
      { word: 'staple', translation: 'alimento básico / infaltable', type: 'noun', exampleSnippet: 'arepas are a daily staple' }
    ],
    technology: [
      { word: 'game-changer', translation: 'revolucionario / que cambia las reglas', type: 'noun', exampleSnippet: 'AI has been a game-changer' },
      { word: 'convenient', translation: 'cómodo / conveniente', type: 'adjective', exampleSnippet: 'super convenient for everyday tasks' },
      { word: 'distraction', translation: 'distracción', type: 'noun', exampleSnippet: 'can be a huge distraction' },
      { word: 'streamline', translation: 'optimizar / agilizar', type: 'verb', exampleSnippet: 'helps streamline my daily workflow' }
    ],
    work: [
      { word: 'challenging', translation: 'retador / desafiante', type: 'adjective', exampleSnippet: 'challenging but rewarding' },
      { word: 'collaborative', translation: 'colaborativo', type: 'adjective', exampleSnippet: 'a healthy collaborative culture' },
      { word: 'career path', translation: 'camino / trayectoria profesional', type: 'noun', exampleSnippet: 'aligned with my long-term career path' },
      { word: 'balance', translation: 'equilibrio', type: 'noun', exampleSnippet: 'balance personal life with deadlines' }
    ],
    travel: [
      { word: 'breathtaking', translation: 'impresionante / sobrecogedor', type: 'adjective', exampleSnippet: 'breathtaking mountain views' },
      { word: 'wander', translation: 'pasear / deambular', type: 'verb', exampleSnippet: 'wander through the city' },
      { word: 'unwind', translation: 'desconectarse', type: 'verb', exampleSnippet: 'unwind by the beach' },
      { word: 'unforgettable', translation: 'inolvidable', type: 'adjective', exampleSnippet: 'an unforgettable cultural experience' }
    ],
    health: [
      { word: 'consistent', translation: 'constante / disciplinado', type: 'adjective', exampleSnippet: 'staying consistent with training' },
      { word: 'boost', translation: 'elevar / potenciar', type: 'verb', exampleSnippet: 'boost my energy levels' },
      { word: 'mindset', translation: 'mentalidad', type: 'noun', exampleSnippet: 'a healthy and positive mindset' },
      { word: 'recharge', translation: 'recargar pilas', type: 'verb', exampleSnippet: 'sleep helps my body recharge' }
    ]
  };

  const topicWords = topicVocabulary[question.topic] || [
    { word: 'definitely', translation: 'definitivamente / sin duda', type: 'adjective', exampleSnippet: 'definitely an important topic' },
    { word: 'essential', translation: 'fundamental / esencial', type: 'adjective', exampleSnippet: 'it plays an essential role' },
    { word: 'stand out', translation: 'destacarse / resaltar', type: 'verb', exampleSnippet: 'what stands out the most is...' },
    { word: 'perspective', translation: 'punto de vista', type: 'noun', exampleSnippet: 'from my personal perspective' }
  ];

  // Also include original vocab terms converted to rich target words
  const additionalWords: TargetWord[] = (question.vocab || []).slice(0, 3).map(w => ({
    word: w,
    translation: w,
    type: 'expression' as const
  }));

  const allWords = [...topicWords, ...additionalWords.filter(aw => !topicWords.some(tw => tw.word.toLowerCase() === aw.word.toLowerCase()))].slice(0, 6);

  // Determine question archetype (Preference, Frequency, Opinion, Hypothetical, Experience)
  const isPreference = /prefer|rather|or/i.test(question.question);
  const isHypothetical = /if you could|would you|if you won/i.test(question.question);
  const isFrequency = /how often|how many|what time|when/i.test(question.question);
  const isPast = /did you|was your|last|earliest|grew up/i.test(question.question);

  let starter: BlueprintLevel;
  let confident: BlueprintLevel;
  let pro: BlueprintLevel;

  if (isPreference) {
    starter = {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'In my opinion, I prefer [Option A] because it is much more [adjective]. For example, whenever I have the chance, I...',
      templateEs: 'En mi opinión, prefiero [Opción A] porque es mucho más [adjetivo]. Por ejemplo, cuando tengo la oportunidad, yo...',
      exampleFullEn: 'In my opinion, I prefer the first option because it is more practical and fun for me.',
      strategyTip: 'Escoge una opción rápido y justifícala con "because it is [adjetivo]".'
    };
    confident = {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "To be honest, it really depends on the situation. On one hand, [Option A] offers [benefit], but on the other hand, [Option B] is great when I want to...",
      templateEs: 'Para ser honesto, depende de la situación. Por un lado, [Opción A] ofrece [beneficio], pero por otro lado, [Opción B] es genial cuando quiero...',
      exampleFullEn: 'To be honest, it depends on my mood. On one hand, option A is comfortable, but option B is unmatched for excitement.',
      strategyTip: 'Usa el conector "It really depends on..." para ganar tiempo y estructurar dos lados.'
    };
    pro = {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: "While both options have their merits, I generally lean towards [Option A]. The primary reason is that it provides a superior balance between [benefit 1] and [benefit 2].",
      templateEs: 'Aunque ambas opciones tienen sus méritos, por lo general me inclino por [Opción A]. La razón principal es que brinda un balance superior entre [beneficio 1] y [beneficio 2].',
      exampleFullEn: 'While both have their merits, I lean towards the former, primarily because it aligns better with my daily routine.',
      strategyTip: 'Usa "I lean towards..." y "The primary reason is that...".'
    };
  } else if (isHypothetical) {
    starter = {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'If I could [action], I would definitely choose [target] because [reason]. It would be amazing!',
      templateEs: 'Si pudiera [acción], sin duda elegiría [objetivo] porque [razón]. ¡Sería increíble!',
      exampleFullEn: 'If I had that opportunity, I would choose to travel around the world with my best friends.',
      strategyTip: 'Usa "If I could..., I would definitely..." para mantener la concordancia en segundo condicional.'
    };
    confident = {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "That's a fascinating question! Without a doubt, I would go for [choice]. The main reason is that it would allow me to [verb] and experience something unique.",
      templateEs: '¡Es una pregunta fascinante! Sin duda alguna, optaría por [elección]. La razón principal es que me permitiría [verbo] y vivir algo único.',
      exampleFullEn: "That's a great question! Without a doubt, I would choose that because it would allow me to make a huge positive impact.",
      strategyTip: 'Arranca con un halago a la pregunta ("That is a fascinating question!") para formular tu idea.'
    };
    pro = {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: "Assuming there were no constraints, my instinctive choice would be [choice]. Beyond the obvious appeal of [factor], what truly captivates me is the prospect of...",
      templateEs: 'Asumiendo que no hubiera limitaciones, mi elección instintiva sería [elección]. Más allá del atractivo evidente de [factor], lo que realmente me cautiva es...',
      exampleFullEn: 'Assuming no constraints, my instinctive choice would be that path, primarily due to the transformative personal growth it offers.',
      strategyTip: 'Introduce hipótesis con "Assuming there were no constraints..." o "My instinctive choice would be...".'
    };
  } else if (isPast) {
    starter = {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I remember that [event / memory]. It was really [adjective] and I was with [person]. I felt very happy.',
      templateEs: 'Recuerdo que [evento / recuerdo]. Fue realmente [adjetivo] y estuve con [persona]. Me sentí muy feliz.',
      exampleFullEn: 'I remember that day vividly. It was exciting and I was with my family celebrating together.',
      strategyTip: 'Comienza con "I remember that..." y usa verbos en pasado simple (was, felt, went).'
    };
    confident = {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Looking back on it now, what stands out most in my memory is [memory]. At the time, I used to [habit] and it really shaped who I am.',
      templateEs: 'Mirando hacia atrás ahora, lo que más resalta en mi memoria es [recuerdo]. En ese momento, yo solía [hábito] y realmente influyó en quién soy.',
      exampleFullEn: 'Looking back on it, what stands out most was how carefree life felt back then with my childhood friends.',
      strategyTip: 'Usa "Looking back on it now..." y la estructura "I used to [verbo]".'
    };
    pro = {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'That period of my life is deeply nostalgic for me. In retrospect, having that experience taught me invaluable lessons about [lesson], which still resonates with me today.',
      templateEs: 'Ese período de mi vida me genera una profunda nostalgia. En retrospectiva, vivir esa experiencia me dejó lecciones invaluables sobre [lección], que aún resuenan hoy.',
      exampleFullEn: 'That experience was profoundly formative. In retrospect, it taught me resilience and adaptability.',
      strategyTip: 'Conecta anécdotas del pasado con lecciones para el presente con "In retrospect, it taught me...".'
    };
  } else {
    // Standard opinion / routine / general blueprint
    starter = {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'From my point of view, [main idea]. I think it is important because [reason]. For instance, in my daily life, I...',
      templateEs: 'Desde mi punto de vista, [idea principal]. Creo que es importante porque [razón]. Por ejemplo, en mi vida diaria, yo...',
      exampleFullEn: 'From my point of view, it plays a big role in our lives. I try to focus on it every single day.',
      strategyTip: 'Aplica la fórmula P.R.E.P.: Postura + Razón + Ejemplo + Conclusión.'
    };
    confident = {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "To give you my honest perspective, I believe that [point]. What makes a big difference is how we [action], especially when dealing with...",
      templateEs: 'Para darte mi perspectiva honesta, creo que [punto]. Lo que hace una gran diferencia es cómo [acción], sobre todo al tratar con...',
      exampleFullEn: 'To give you my honest take, balance is key. What makes the biggest difference is staying disciplined over time.',
      strategyTip: 'Usa frases de apertura conversacional como "To give you my honest perspective...".'
    };
    pro = {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'When evaluating this, the crucial factor is [core factor]. While conventional wisdom suggests [common view], my personal conviction is that we ought to prioritize...',
      templateEs: 'Al evaluar esto, el factor crucial es [factor clave]. Si bien la sabiduría popular sugiere [visión común], mi convicción personal es que deberíamos priorizar...',
      exampleFullEn: 'When evaluating this topic, the crucial factor is sustainable consistency rather than short-term bursts of enthusiasm.',
      strategyTip: 'Usa estructuras de contraste reflexivo ("While conventional wisdom suggests X, my conviction is Y").'
    };
  }

  return {
    targetWords: allWords,
    starter,
    confident,
    pro,
    quickStarters: [
      { en: "Personally, I'd say that...", es: "En lo personal, diría que..." },
      { en: "To be completely honest...", es: "Para ser totalmente honesto/a..." },
      { en: "From my own experience...", es: "Desde mi propia experiencia..." }
    ]
  };
}
