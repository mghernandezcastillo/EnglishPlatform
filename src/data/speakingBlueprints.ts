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

export const CURATED_BLUEPRINTS: Record<string, Partial<SpeakingBlueprintData>> = {
  // Sleep & Rest
  'how important is sleep to you?': {
    targetWords: [
      { word: 'restorative', translation: 'reparador / revitalizante', type: 'adjective', exampleSnippet: 'a restorative night of deep sleep' },
      { word: 'stay sharp', translation: 'mantenerse alerta y enfocado', type: 'verb', exampleSnippet: 'sleep helps me stay sharp all day' },
      { word: 'burnout', translation: 'agotamiento extremo / colapso', type: 'noun', exampleSnippet: 'lack of rest leads to burnout' },
      { word: 'unwind', translation: 'desconectarse antes de dormir', type: 'verb', exampleSnippet: 'unwind without screens before bed' }
    ],
    quickStarters: [
      { en: "For me, quality sleep is non-negotiable because...", es: "Para mí, dormir bien no es negociable porque..." },
      { en: "To be completely honest, if I don't get enough sleep...", es: "Para ser totalmente honesto/a, si no duermo suficiente..." },
      { en: "I've realized over time that...", es: "Me he dado cuenta con el tiempo de que..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'Sleep is very important to me because [reason]. When I sleep at least [number] hours, I feel [energized / happy]. Without enough sleep, I cannot [focus at work].',
      templateEs: 'El sueño es muy importante para mí porque [razón]. Cuando duermo al menos [número] horas, me siento [con energía / feliz]. Sin suficiente sueño, no puedo [concentrarme en el trabajo].',
      exampleFullEn: 'Sleep is very important to me because it gives me energy. When I sleep 8 hours, I feel happy and active all day.',
      strategyTip: 'Da tu respuesta directa con "Sleep is very important because..." y menciona cuántas horas necesitas.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'For me, getting [restorative] sleep is non-negotiable. It allows me to [stay sharp] and perform at my best. If I sacrifice rest, I quickly notice the warning signs of [burnout].',
      templateEs: 'Para mí, tener un sueño [reparador] no es negociable. Me permite [mantenerme enfocado] y dar lo mejor de mí. Si sacrifico descanso, noto enseguida las señales de [agotamiento].',
      exampleFullEn: 'For me, getting restorative sleep is non-negotiable. It allows me to stay sharp all day, whereas cutting corners on rest quickly triggers burnout.',
      strategyTip: 'Usa "non-negotiable" para mostrar firmeza y contrasta días con buen descanso vs días sin dormir.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'I consider sleep to be the ultimate cornerstone of cognitive endurance. When you prioritize [restorative] rest, you consistently [stay sharp], whereas chronic sleep deprivation inevitably leads to physical and emotional [burnout].',
      templateEs: 'Considero que el sueño es la piedra angular suprema de la resistencia cognitiva. Cuando priorizas el descanso [reparador], te mantienes [alerta] con constancia, mientras que la falta crónica de sueño conduce inevitablemente al [agotamiento].',
      exampleFullEn: 'I consider quality sleep the ultimate cornerstone of mental clarity. Without restorative rest, staying sharp is impossible and burnout is inevitable.',
      strategyTip: 'Abre con una metáfora sólida ("the cornerstone of cognitive endurance") para causar gran impresión.'
    }
  },

  // Movies: home vs cinema
  'do you prefer watching movies at home or in the cinema?': {
    targetWords: [
      { word: 'comfy', translation: 'cómodo / acogedor', type: 'adjective', exampleSnippet: 'my couch is so comfy' },
      { word: 'pricey', translation: 'caro / costoso', type: 'adjective', exampleSnippet: 'tickets are getting pricey' },
      { word: 'blockbuster', translation: 'película taquillera', type: 'noun', exampleSnippet: 'massive blockbuster on the big screen' },
      { word: 'unwind', translation: 'desconectarse / relajarse', type: 'verb', exampleSnippet: 'it helps me unwind after a long week' }
    ],
    quickStarters: [
      { en: "Personally, I'd say that...", es: "En lo personal, diría que..." },
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
      templateEn: "To be honest, it really depends on the movie. If it's a massive [blockbuster], I love the atmosphere of the big screen. However, on regular days I'd rather stay home where it's [comfy] and relaxing.",
      templateEs: 'Para ser honesto, realmente depende de la película. Si es un gran [taquillazo], me encanta el ambiente de la gran pantalla. Sin embargo, en días normales prefiero quedarme en casa donde es [cómodo] y relajante.',
      exampleFullEn: "To be honest, it really depends on the movie. If it's a visual blockbuster, I love the theater atmosphere. But usually, staying home is way more relaxing and affordable.",
      strategyTip: 'Aplica contraste ("On one hand..., but on the other hand...") para sonar maduro y reflexivo.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'While nothing quite replicates the immersive atmosphere of a big-screen [blockbuster], the unmatched convenience of being able to [unwind] in a [comfy] setting usually wins out for me, especially to avoid [pricey] tickets.',
      templateEs: 'Aunque nada replica del todo la atmósfera inmersiva de un [taquillazo] en pantalla gigante, la incomparable comodidad de poder [desconectarme] en un entorno [acogedor] suele ganar para mí, sobre todo para evitar boletos [costosos].',
      exampleFullEn: 'While nothing quite beats the sheer atmosphere of a cinema blockbuster, the convenience of unwinding at home in pajamas usually wins out.',
      strategyTip: 'Inicia con una cláusula de concesión ("While nothing beats X, Y usually wins out...") para máxima sofisticación.'
    }
  }
};

interface SemanticDomain {
  match: RegExp;
  targetWords: TargetWord[];
  quickStarters: Array<{ en: string; es: string }>;
  starter: BlueprintLevel;
  confident: BlueprintLevel;
  pro: BlueprintLevel;
}

const SEMANTIC_DOMAINS: SemanticDomain[] = [
  // 1. SLEEP & REST
  {
    match: /sleep|wake up|morning routine|rest|night owl|morning person|naps|bed/i,
    targetWords: [
      { word: 'restorative', translation: 'reparador / revitalizante', type: 'adjective', exampleSnippet: 'a restorative night of deep sleep' },
      { word: 'stay sharp', translation: 'mantenerse alerta y enfocado', type: 'verb', exampleSnippet: 'sleep helps me stay sharp all day' },
      { word: 'burnout', translation: 'agotamiento extremo / colapso', type: 'noun', exampleSnippet: 'lack of sleep leads to burnout' },
      { word: 'unwind', translation: 'desconectarse antes de dormir', type: 'verb', exampleSnippet: 'unwind without screens before bed' }
    ],
    quickStarters: [
      { en: "For me, getting quality rest is essential because...", es: "Para mí, descansar bien es esencial porque..." },
      { en: "To be completely honest, my daily energy depends on...", es: "Para ser totalmente honesto/a, mi energía diaria depende de..." },
      { en: "I've learned from experience that...", es: "He aprendido por experiencia que..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I believe that [sleep / waking up early] is very important because [reason]. When I sleep well, I can [stay sharp] and do my tasks easily.',
      templateEs: 'Creo que [dormir / madrugar] es muy importante porque [razón]. Cuando duermo bien, puedo [mantenerme enfocado] y hacer mis tareas fácilmente.',
      exampleFullEn: 'I believe that sleep is very important because it renews my energy. When I sleep well, I can stay sharp and study without stress.',
      strategyTip: 'Expresa tu hábito con "When I sleep well, I can..." y añade cómo te sientes.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'In my experience, getting [restorative] rest directly impacts productivity. If I prioritize my sleep, I [stay sharp] throughout the day, whereas cutting corners on rest quickly triggers [burnout].',
      templateEs: 'En mi experiencia, tener un descanso [reparador] impacta directamente en la productividad. Si priorizo mi sueño, me [mantengo enfocado] todo el día, mientras que escatimar en descanso detona [agotamiento].',
      exampleFullEn: 'In my experience, getting restorative rest is essential. It enables me to stay sharp all day, whereas sleep deprivation leads to immediate burnout.',
      strategyTip: 'Contrasta causa y efecto con "whereas cutting corners on rest triggers...".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'I consider [restorative] sleep to be the non-negotiable pillar of cognitive endurance. Without it, your ability to [stay sharp] degrades exponentially, inevitably precipitating mental and physical [burnout].',
      templateEs: 'Considero que el sueño [reparador] es el pilar no negociable de la resistencia cognitiva. Sin él, la capacidad de [mantenerse alerta] se degrada exponencialmente, precipitando el [agotamiento].',
      exampleFullEn: 'I consider restorative sleep the foundation of cognitive agility. Sacrificing it for short-term output is counterproductive and invites chronic burnout.',
      strategyTip: 'Usa vocabulario formal como "non-negotiable pillar" y "degrades exponentially".'
    }
  },

  // 2. DIET, FOOD & COOKING
  {
    match: /diet|food|cook|restaurant|fast food|eat|breakfast|meals|dish|vegetarian|coffee/i,
    targetWords: [
      { word: 'nutritious', translation: 'nutritivo / balanceado', type: 'adjective', exampleSnippet: 'wholesome and nutritious meals' },
      { word: 'home-cooked', translation: 'hecho en casa / casero', type: 'adjective', exampleSnippet: 'nothing beats a home-cooked lunch' },
      { word: 'cravings', translation: 'antojos / deseos de comer', type: 'noun', exampleSnippet: 'managing late-afternoon sugar cravings' },
      { word: 'energy crash', translation: 'bajón repentino de energía', type: 'noun', exampleSnippet: 'junk food always causes an energy crash' }
    ],
    quickStarters: [
      { en: "When it comes to food, I usually prefer...", es: "En cuanto a la comida, por lo general prefiero..." },
      { en: "In my daily routine, eating well is...", es: "En mi rutina diaria, comer bien es..." },
      { en: "To tell you the truth, my biggest weakness is...", es: "A decir verdad, mi mayor debilidad es..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I usually prefer [home-cooked food / eating out] because it is [nutritious / delicious]. For example, when I eat [food], I feel full of energy.',
      templateEs: 'Por lo general prefiero [comida casera / comer fuera] porque es [nutritiva / deliciosa]. Por ejemplo, cuando como [comida], me siento lleno de energía.',
      exampleFullEn: 'I usually prefer home-cooked food because it is nutritious and fresh. When I cook at home, I have much more energy during the day.',
      strategyTip: 'Nombra tu plato o comida favorita y describe cómo te hace sentir.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'I try to maintain a balanced diet with [nutritious] and [home-cooked] meals. However, I sometimes give in to [cravings] on weekends, though I always avoid processed foods that cause an [energy crash].',
      templateEs: 'Intento mantener una dieta balanceada con comidas [nutritivas] y [hechas en casa]. Sin embargo, a veces cedo a los [antojos] los fines de semana, aunque evito comida chatarra que cause un [bajón de energía].',
      exampleFullEn: 'I try to prioritize nutritious, home-cooked food because heavy fast food always leads to an energy crash later in the afternoon.',
      strategyTip: 'Reconoce que buscas balance entre comer sano y darte gustos con "I try to maintain a balance...".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'I view nutrition as the fundamental fuel for daily performance. Prioritizing [nutritious], [home-cooked] ingredients not only curbs sudden [cravings] but fundamentally prevents the dreaded mid-afternoon [energy crash].',
      templateEs: 'Veo la nutrición como el combustible fundamental para el rendimiento diario. Priorizar ingredientes [nutritivos] y [caseros] no solo frena [antojos] sino que previene el temido [bajón de energía].',
      exampleFullEn: 'I view nutrition as fuel. Consistently preparing nutritious meals mitigates midday energy crashes and sustains peak concentration.',
      strategyTip: 'Enmarca la comida como energía ("fuel for performance") y explica sus beneficios a largo plazo.'
    }
  },

  // 3. FITNESS, GYM & EXERCISE
  {
    match: /exercise|fit|gym|running|sports|workout/i,
    targetWords: [
      { word: 'endurance', translation: 'resistencia física', type: 'noun', exampleSnippet: 'build stamina and cardiovascular endurance' },
      { word: 'clear my head', translation: 'despejar la mente', type: 'verb', exampleSnippet: 'exercising helps me clear my head' },
      { word: 'consistency', translation: 'constancia / disciplina', type: 'noun', exampleSnippet: 'consistency is far more important than intensity' },
      { word: 'rejuvenated', translation: 'renovado / lleno de energía', type: 'adjective', exampleSnippet: 'I feel completely rejuvenated afterwards' }
    ],
    quickStarters: [
      { en: "For me, staying active is crucial because...", es: "Para mí, mantenerme activo/a es crucial porque..." },
      { en: "Whenever I need to disconnect, I like to...", es: "Siempre que necesito desconectarme, me gusta..." },
      { en: "I've discovered that regular exercise...", es: "He descubierto que el ejercicio regular..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I try to [exercise / play sports] [frequency] because it helps me [clear my head]. After training, I always feel [rejuvenated] and happy.',
      templateEs: 'Intento [ejercitarme / hacer deporte] [frecuencia] porque me ayuda a [despejar la mente]. Después de entrenar, siempre me siento [renovado] y feliz.',
      exampleFullEn: 'I try to exercise three times a week because it helps me clear my head. After a good workout, I always feel rejuvenated.',
      strategyTip: 'Menciona la frecuencia con la que entrenas y cómo cambia tu estado de ánimo.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Working out is more than just physical fitness for me; it is the best way to [clear my head]. What truly matters is maintaining [consistency], which gradually builds [endurance] over time.',
      templateEs: 'Hacer ejercicio es más que solo físico para mí; es la mejor forma de [despejar la mente]. Lo que de verdad importa es la [constancia], que desarrolla [resistencia] con el tiempo.',
      exampleFullEn: 'Working out is primarily mental therapy for me. Focusing on consistency helps me clear my head and build real cardiovascular endurance.',
      strategyTip: 'Explica el beneficio mental del ejercicio antes de hablar del beneficio físico.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Physical training serves as my indispensable mental decompression valve. Cultivating unwavering [consistency] not only enhances physical [endurance] but leaves me intellectually [rejuvenated] and resilient.',
      templateEs: 'El entrenamiento físico sirve como mi válvula indispensable de descompresión mental. Cultivar una [constancia] inquebrantable no solo mejora la [resistencia], sino que me deja mentalmente [renovado] y resiliente.',
      exampleFullEn: 'Physical training is an indispensable catalyst for mental clarity. Cultivating consistency builds endurance and leaves me rejuvenated for intense challenges.',
      strategyTip: 'Usa metáforas sofisticadas como "indispensable decompression valve" o "catalyst for clarity".'
    }
  },

  // 4. STRESS, RELAXATION & MENTAL HEALTH
  {
    match: /stress|relax|meditation|mental health|unwind|pressure/i,
    targetWords: [
      { word: 'overwhelmed', translation: 'abrumado / saturado', type: 'adjective', exampleSnippet: 'feeling overwhelmed by tight deadlines' },
      { word: 'decompress', translation: 'descompresionarse / soltar tensión', type: 'verb', exampleSnippet: 'take thirty minutes to decompress' },
      { word: 'mindfulness', translation: 'atención plena / serenidad', type: 'noun', exampleSnippet: 'practicing basic mindfulness breathing' },
      { word: 'take a breather', translation: 'tomarse un respiro', type: 'verb', exampleSnippet: 'step away from the screen and take a breather' }
    ],
    quickStarters: [
      { en: "Whenever life gets chaotic, I make sure to...", es: "Siempre que la vida se pone caótica, me aseguro de..." },
      { en: "My favorite way to manage stress is...", es: "Mi forma favorita de manejar el estrés es..." },
      { en: "When I feel the first signs of pressure...", es: "Cuando siento las primeras señales de presión..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'When I feel [overwhelmed / stressed], I like to [activity]. It allows me to [take a breather] and relax my mind.',
      templateEs: 'Cuando me siento [abrumado / estresado], me gusta [actividad]. Me permite [tomarme un respiro] y relajar mi mente.',
      exampleFullEn: 'When I feel overwhelmed with work, I like to listen to music. It allows me to take a breather and regain calm.',
      strategyTip: 'Di qué haces cuando sientes estrés ("When I feel overwhelmed, I...") y por qué te relaja.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Whenever work becomes too [overwhelmed], I step away to [take a breather]. Engaging in simple [mindfulness] or listening to calming sounds helps me [decompress] effectively.',
      templateEs: 'Siempre que el trabajo se vuelve muy [abrumador], me aparto para [tomar un respiro]. Practicar [atención plena] o escuchar sonidos relajantes me ayuda a [descompresionarme].',
      exampleFullEn: 'Whenever I feel overwhelmed, I intentionally take a breather. Incorporating quiet moments of mindfulness allows me to decompress without turning to distractions.',
      strategyTip: 'Detalla una técnica específica que usas para calmarte.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'In our hyper-connected society, preventing yourself from becoming chronically [overwhelmed] requires proactive boundaries. Intentionally carving out time to [decompress] through [mindfulness] is essential for emotional balance.',
      templateEs: 'En nuestra sociedad hiperconectada, evitar estar crónicamente [abrumado] requiere límites proactivos. Destinar tiempo intencional para [soltar tensión] mediante [mindfulness] es esencial para el equilibrio.',
      exampleFullEn: 'Navigating modern stress demands proactive boundary-setting. Carving out space to decompress through mindfulness is essential to prevent chronic burnout.',
      strategyTip: 'Analiza el contexto social actual ("In our hyper-connected society...") antes de tu solución personal.'
    }
  },

  // 5. WORK, CAREER & WORK-LIFE BALANCE
  {
    match: /job|career|work|profession|business|salary|colleagues|teamwork|challenging/i,
    targetWords: [
      { word: 'work-life balance', translation: 'equilibrio vida-trabajo', type: 'noun', exampleSnippet: 'prioritizing a healthy work-life balance' },
      { word: 'fulfilling', translation: 'gratificante / enriquecedor', type: 'adjective', exampleSnippet: 'doing work that feels genuinely fulfilling' },
      { word: 'burnout', translation: 'agotamiento profesional', type: 'noun', exampleSnippet: 'constant overwork triggers career burnout' },
      { word: 'growth mindset', translation: 'mentalidad de superación', type: 'noun', exampleSnippet: 'embracing challenges with a growth mindset' }
    ],
    quickStarters: [
      { en: "In my professional life, my priority is...", es: "En mi vida profesional, mi prioridad es..." },
      { en: "When evaluating career opportunities, I consider...", es: "Al evaluar oportunidades de carrera, considero..." },
      { en: "I truly believe that meaningful work should...", es: "Realmente creo que el trabajo con propósito debería..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'In my opinion, having a good [work-life balance] is very important. I want a job that is [fulfilling] and where I can learn new things.',
      templateEs: 'En mi opinión, tener un buen [equilibrio trabajo-vida] es muy importante. Quiero un empleo que sea [gratificante] y donde pueda aprender cosas nuevas.',
      exampleFullEn: 'In my opinion, work-life balance is very important. I want a job that is fulfilling and leaves me time for my family.',
      strategyTip: 'Establece tu prioridad principal: buen salario, buen ambiente o equilibrio personal.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'While financial compensation is important, doing work that is truly [fulfilling] matters even more. If you lack a healthy [work-life balance], you inevitably risk running into [burnout].',
      templateEs: 'Si bien la compensación económica importa, hacer trabajo que sea verdaderamente [gratificante] importa aún más. Si careces de [equilibrio trabajo-vida], te arriesgas al [agotamiento].',
      exampleFullEn: 'While earning a good salary matters, having a fulfilling role with healthy work-life balance is what sustains passion and prevents burnout.',
      strategyTip: 'Usa la fórmula "While X is important, Y matters even more" para sopesar dos factores.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'True career longevity relies on cultivating a [growth mindset] while fiercely safeguarding your [work-life balance]. Passionate dedication is commendable, but without boundaries it degenerates into toxic [burnout].',
      templateEs: 'La verdadera longevidad profesional depende de cultivar una [mentalidad de crecimiento] mientras se protege con firmeza el [equilibrio vida-trabajo]. La entrega sin límites degenera en [agotamiento].',
      exampleFullEn: 'Sustainable professional excellence requires combining a growth mindset with uncompromising work-life balance to shield against chronic burnout.',
      strategyTip: 'Concluye con una máxima profesional madura ("Sustainable excellence requires combining X with Y").'
    }
  },

  // 6. TECHNOLOGY, SMARTPHONES, AI & SOCIAL MEDIA
  {
    match: /smartphone|technology|gadget|screen|app|internet|ai|chatgpt|social media|online/i,
    targetWords: [
      { word: 'double-edged sword', translation: 'arma de doble filo', type: 'expression', exampleSnippet: 'smartphones are truly a double-edged sword' },
      { word: 'distracting', translation: 'que desconcentra / distrae', type: 'adjective', exampleSnippet: 'social media alerts are deeply distracting' },
      { word: 'streamline', translation: 'hacer eficiente / optimizar', type: 'verb', exampleSnippet: 'AI tools streamline repetitive admin tasks' },
      { word: 'digital detox', translation: 'desconexión tecnológica', type: 'noun', exampleSnippet: 'taking an intentional weekend digital detox' }
    ],
    quickStarters: [
      { en: "In today's digital era, I've noticed that...", es: "En la era digital actual, he notado que..." },
      { en: "While technology brings undeniable advantages...", es: "Aunque la tecnología trae ventajas innegables..." },
      { en: "From my personal perspective, tech is...", es: "Desde mi perspectiva personal, la tecnología es..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I use [technology / smartphone] every day because it helps me [streamline / study]. But sometimes it is very [distracting], so I try to limit my screen time.',
      templateEs: 'Uso [tecnología / celular] todos los días porque me ayuda a [optimizar / estudiar]. Pero a veces es muy [distractor], así que intento limitar mi pantalla.',
      exampleFullEn: 'I use my smartphone every day for work, but it can be very distracting when I need to concentrate.',
      strategyTip: 'Menciona una ventaja de tu teléfono y luego un problema que te cause (distracción).'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Technology is definitely a [double-edged sword]. On one hand, modern tools like AI [streamline] our daily workflow, but on the other hand, non-stop notifications can be horribly [distracting].',
      templateEs: 'La tecnología es sin duda un [arma de doble filo]. Por un lado, herramientas modernas como la IA [optimizan] el flujo de trabajo, pero por otro lado las alertas continuas [distraen] un montón.',
      exampleFullEn: 'Technology is a classic double-edged sword. While AI tools streamline our productivity, social media remains wildly distracting unless you set boundaries.',
      strategyTip: 'Usa la frase hecha "a double-edged sword" para demostrar dominio idiomático.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Digital innovation presents a profound paradox. While software advancements [streamline] complex operations, algorithmic addiction proves immensely [distracting], making regular [digital detox] periods imperative.',
      templateEs: 'La innovación digital presenta una paradoja profunda. Aunque los avances de software [optimizan] operaciones complejas, la adicción algorítmica resulta inmensamente [distractora], haciendo imperativos periodos de [desconexión digital].',
      exampleFullEn: 'Digital technology represents a fascinating paradox. While it streamlines logistics, it fragments attention spans, rendering periodic digital detoxes essential.',
      strategyTip: 'Usa la palabra "paradox" y analiza cómo fragmenta la atención humana.'
    }
  },

  // 7. TRAVEL, ADVENTURES & CULTURE
  {
    match: /travel|vacation|holiday|country|visit|destination|trip|flight|camping|spontaneous|souvenirs/i,
    targetWords: [
      { word: 'breathtaking', translation: 'asombroso / sobrecogedor', type: 'adjective', exampleSnippet: 'breathtaking landscapes that leave you speechless' },
      { word: 'broaden my horizons', translation: 'abrir la mente / ampliar horizontes', type: 'verb', exampleSnippet: 'traveling helps broaden my horizons' },
      { word: 'spontaneous', translation: 'espontáneo / sin plan rígido', type: 'adjective', exampleSnippet: 'taking spontaneous weekend road trips' },
      { word: 'unforgettable', translation: 'imborrable / inolvidable', type: 'adjective', exampleSnippet: 'an unforgettable cultural adventure' }
    ],
    quickStarters: [
      { en: "For me, the real magic of traveling is...", es: "Para mí, la verdadera magia de viajar es..." },
      { en: "If I had the chance to go anywhere right now...", es: "Si tuviera la oportunidad de ir a donde sea ahora..." },
      { en: "One of the most memorable trips I've ever taken was...", es: "Uno de los viajes más memorables que he hecho fue..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I love to travel because it allows me to see [breathtaking] places and [broaden my horizons]. My favorite trip was to [place], and it was completely [unforgettable].',
      templateEs: 'Me encanta viajar porque me permite ver lugares [asombrosos] y [abrir mi mente]. Mi viaje favorito fue a [lugar], y fue totalmente [inolvidable].',
      exampleFullEn: 'I love to travel because it helps broaden my horizons. My trip to the coast was completely unforgettable.',
      strategyTip: 'Nombra un destino real que visitaste y usa un adjetivo de impacto como "unforgettable".'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Traveling is the best investment you can make because it helps you [broaden my horizons]. Whether you plan everything in detail or stay [spontaneous], discovering [breathtaking] scenery is always [unforgettable].',
      templateEs: 'Viajar es la mejor inversión que puedes hacer porque te ayuda a [abrir la mente]. Ya sea que planees todo al detalle o seas [espontáneo], descubrir paisajes [asombrosos] es siempre [inolvidable].',
      exampleFullEn: 'Traveling is the best personal investment. Immersing yourself in different cultures broadens your horizons and creates unforgettable life memories.',
      strategyTip: 'Contrasta viajar planificado vs ser espontáneo con "Whether you plan ahead or stay spontaneous...".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Immersion in unfamiliar environments is fundamentally transformative. It compels you to [broaden my horizons], shatter preconceived biases, and forge [unforgettable] memories amidst [breathtaking] vistas.',
      templateEs: 'Sumergirse en entornos desconocidos es fundamentalmente transformador. Te obliga a [abrir tus horizontes], romper sesgos preconcebidos y forjar recuerdos [inolvidables] ante vistas [asombrosas].',
      exampleFullEn: 'Cultural immersion is profoundly transformative. Stepping outside familiar borders broadens your horizons and challenges unexamined assumptions.',
      strategyTip: 'Enfoca el viaje como transformación personal y deconstrucción de prejuicios.'
    }
  },

  // 8. EDUCATION, ENGLISH & PERSONAL GROWTH
  {
    match: /study|learn|english|school|university|teacher|degree|test|subject/i,
    targetWords: [
      { word: 'fluency', translation: 'fluidez comunicativa', type: 'noun', exampleSnippet: 'achieving natural spoken fluency' },
      { word: 'open doors', translation: 'abrir puertas / oportunidades', type: 'verb', exampleSnippet: 'speaking English will open international doors' },
      { word: 'milestone', translation: 'hito / logro destacado', type: 'noun', exampleSnippet: 'reaching an important personal milestone' },
      { word: 'dedicated', translation: 'comprometido / constante', type: 'adjective', exampleSnippet: 'staying dedicated through daily practice' }
    ],
    quickStarters: [
      { en: "In my learning journey, my main goal is...", es: "En mi camino de aprendizaje, mi meta principal es..." },
      { en: "I realized early on that mastering a language...", es: "Me di cuenta desde temprano de que dominar un idioma..." },
      { en: "The biggest advantage of education is that...", es: "La mayor ventaja de la educación es que..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'Learning [English / in school] is very important because it will [open doors] for my future. I want to achieve [fluency] so I can communicate with the world.',
      templateEs: 'Aprender [inglés / en la escuela] es muy importante porque va a [abrir puertas] para mi futuro. Quiero alcanzar [fluidez] para comunicarme con el mundo.',
      exampleFullEn: 'Learning English is crucial for me because it will open doors to better jobs and international friends.',
      strategyTip: 'Explica tu motivación personal: conseguir un mejor empleo, viajar o hablar con personas.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Mastering English is a major [milestone] in my life. Being [dedicated] to consistent practice will ultimately [open doors] globally and grant me conversational [fluency].',
      templateEs: 'Dominar el inglés es un gran [hito] en mi vida. Ser [dedicado] con la práctica constante va a [abrir puertas] a nivel global y darme [fluidez] conversacional.',
      exampleFullEn: 'Achieving conversational fluency in English is a major personal milestone that will open doors in tech and global business.',
      strategyTip: 'Usa "milestone" para enmarcar el inglés como un logro trascendental en tu vida.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Linguistic acquisition transcends simple grammar rules; achieving genuine [fluency] will undeniably [open doors] on a global scale, serving as a decisive professional [milestone].',
      templateEs: 'La adquisición lingüística trasciende simples reglas gramaticales; alcanzar verdadera [fluidez] sin duda va a [abrir puertas] a escala global como un [hito] profesional decisivo.',
      exampleFullEn: 'Linguistic mastery transcends memorization. Achieving effortless fluency opens global doors and fundamentally redefines your career ceiling.',
      strategyTip: 'Comienza elevando el concepto ("Linguistic mastery transcends simple memorization...").'
    }
  },

  // 9. CHILDHOOD, MEMORIES & NOSTALGIA
  {
    match: /childhood|memory|grew up|kid|family|friends|relationship|parents|hometown|neighborhood/i,
    targetWords: [
      { word: 'fond memories', translation: 'recuerdos entrañables', type: 'noun', exampleSnippet: 'looking back with fond memories' },
      { word: 'carefree', translation: 'despreocupado / alegre', type: 'adjective', exampleSnippet: 'the carefree innocence of childhood' },
      { word: 'close-knit', translation: 'muy unido / cercano', type: 'adjective', exampleSnippet: 'raised in a warm, close-knit family' },
      { word: 'formative', translation: 'formativo / decisivo', type: 'adjective', exampleSnippet: 'a deeply formative life experience' }
    ],
    quickStarters: [
      { en: "Looking back on my earlier years...", es: "Mirando hacia atrás a mis primeros años..." },
      { en: "What I cherish most about my background is...", es: "Lo que más valoro de mis raíces es..." },
      { en: "Growing up in that environment taught me...", es: "Crecer en ese entorno me enseñó a..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'I have very [fond memories] of my childhood. My family was very [close-knit] and life felt so [carefree] when I was young.',
      templateEs: 'Tengo [recuerdos entrañables] de mi infancia. Mi familia era muy [unida] y la vida se sentía tan [despreocupada] cuando era joven.',
      exampleFullEn: 'I have fond memories of growing up with my cousins. Life felt carefree and we spent every afternoon playing outside.',
      strategyTip: 'Recuerda una anécdota sencilla de cuando eras niño/a y cómo te sentías.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: 'Reflecting on my childhood brings back [fond memories]. Growing up in a [close-knit] environment was deeply [formative], teaching me values that still guide me today.',
      templateEs: 'Reflexionar sobre mi infancia trae [recuerdos entrañables]. Crecer en un entorno [unido] fue profundamente [formativo], enseñándome valores que aún me guían.',
      exampleFullEn: 'Reflecting on my childhood brings back fond memories. That carefree, close-knit environment was formative in shaping my resilience.',
      strategyTip: 'Conecta tu pasado con tus valores actuales usando "teaching me values that still guide me".'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Those early years represent an extraordinarily [formative] chapter. The [carefree] innocence of that era, supported by a [close-knit] community, anchored my core values and character.',
      templateEs: 'Aquellos primeros años representan un capítulo extraordinariamente [formativo]. La inocencia [despreocupada] de esa época, respaldada por una comunidad [unida], ancló mis valores y carácter.',
      exampleFullEn: 'Those early experiences were profoundly formative. That close-knit environment provided emotional security and instilled lifelong empathy.',
      strategyTip: 'Usa palabras elegantes como "anchored my core values" para cerrar con fuerza.'
    }
  },

  // 10. HYPOTHETICAL DILEMMAS & AMBITIONS
  {
    match: /if you could|lottery|superpower|time travel|teleport|advice|happiness|fear|future/i,
    targetWords: [
      { word: 'game-changer', translation: 'punto de inflexión / decisivo', type: 'noun', exampleSnippet: 'that opportunity would be a total game-changer' },
      { word: 'boundless', translation: 'ilimitado / sin fronteras', type: 'adjective', exampleSnippet: 'boundless curiosity to explore the unknown' },
      { word: 'perspective', translation: 'perspectiva / visión amplia', type: 'noun', exampleSnippet: 'gain a transformative new perspective' },
      { word: 'fulfillment', translation: 'plenitud / realización', type: 'noun', exampleSnippet: 'pursue genuine long-term fulfillment' }
    ],
    quickStarters: [
      { en: "If I were granted that extraordinary opportunity...", es: "Si se me concediera esa oportunidad extraordinaria..." },
      { en: "Without a single doubt, my choice would be...", es: "Sin la menor duda, mi elección sería..." },
      { en: "Thinking about that hypothetical scenario...", es: "Pensando en ese escenario hipotético..." }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'If I had that chance, I would choose [choice] because it would be a real [game-changer]. It would bring me a lot of [fulfillment] and happiness.',
      templateEs: 'Si tuviera esa oportunidad, elegiría [elección] porque sería un verdadero [cambio radical]. Me traería mucha [plenitud] y felicidad.',
      exampleFullEn: 'If I won the lottery, it would be a game-changer. I would help my family and travel the world to find real fulfillment.',
      strategyTip: 'Usa el segundo condicional: "If I had that chance, I would choose...".'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "That's a fascinating dilemma! Without hesitation, I would pursue [choice]. It would be a complete [game-changer] that would give me a fresh [perspective] on what truly matters.",
      templateEs: '¡Es un dilema fascinante! Sin dudarlo, buscaría [elección]. Sería un [cambio radical] total que me daría una nueva [perspectiva] de lo que de verdad importa.',
      exampleFullEn: "That's a fascinating dilemma! Choosing that path would be a game-changer, granting me a completely fresh perspective on life.",
      strategyTip: 'Halaga el dilema antes de responder ("That is a fascinating dilemma!").'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'Assuming zero constraints, embracing that path would represent an unprecedented [game-changer]. Beyond immediate excitement, the [boundless] opportunities for personal [fulfillment] make it an irresistible choice.',
      templateEs: 'Asumiendo cero restricciones, abrazar ese camino representaría un [cambio de juego] sin precedentes. Más allá de la emoción inmediata, las oportunidades [ilimitadas] de [plenitud] lo hacen una elección irresistible.',
      exampleFullEn: 'Assuming no limitations, that choice would be an unprecedented game-changer, unlocking boundless horizons for intellectual fulfillment.',
      strategyTip: 'Arranca con "Assuming zero constraints..." para mostrar soltura con estructuras hipotéticas.'
    }
  }
];

export function getBlueprintForQuestion(question: SpeakingQuestion): SpeakingBlueprintData {
  const normalizedText = question.question.trim().toLowerCase();

  // 1. Exact Curated Override
  if (CURATED_BLUEPRINTS[normalizedText]) {
    const curated = CURATED_BLUEPRINTS[normalizedText]!;
    return {
      targetWords: curated.targetWords || [],
      starter: curated.starter!,
      confident: curated.confident!,
      pro: curated.pro!,
      quickStarters: curated.quickStarters || [
        { en: "Personally, I'd say that...", es: "En lo personal, diría que..." },
        { en: "To be completely honest...", es: "Para ser totalmente honesto/a..." },
        { en: "From my own experience...", es: "Desde mi propia experiencia..." }
      ]
    };
  }

  // 2. Semantic Domain Matcher
  for (const domain of SEMANTIC_DOMAINS) {
    if (domain.match.test(question.question) || domain.match.test(question.topic)) {
      return {
        targetWords: domain.targetWords,
        starter: domain.starter,
        confident: domain.confident,
        pro: domain.pro,
        quickStarters: domain.quickStarters
      };
    }
  }

  // 3. Fallback Universal Intelligent Domain
  return {
    targetWords: [
      { word: 'definitely', translation: 'definitivamente / sin duda', type: 'expression', exampleSnippet: 'that is definitely something to consider' },
      { word: 'essential', translation: 'fundamental / indispensable', type: 'adjective', exampleSnippet: 'it plays an essential role in my life' },
      { word: 'stand out', translation: 'destacarse / resaltar', type: 'verb', exampleSnippet: 'what stands out the most is...' },
      { word: 'perspective', translation: 'punto de vista personal', type: 'noun', exampleSnippet: 'from my personal perspective' }
    ],
    starter: {
      label: 'Novato',
      cefr: 'A1 - A2',
      color: 'emerald',
      templateEn: 'From my point of view, [main opinion]. I think it is [essential] because [reason]. For example, in my daily life, I always...',
      templateEs: 'Desde mi punto de vista, [opinión principal]. Creo que es [esencial] porque [razón]. Por ejemplo, en mi vida diaria, siempre...',
      exampleFullEn: 'From my point of view, this is essential. In my daily life, I always focus on what helps me grow.',
      strategyTip: 'Aplica P.R.E.P.: Postura directa + Razón clara + Ejemplo personal + Conclusión.'
    },
    confident: {
      label: 'Intermedio',
      cefr: 'B1 - B2',
      color: 'amber',
      templateEn: "To give you my honest take, I believe that [key point]. What really [stands out] to me is how [factor] impacts our choices over time.",
      templateEs: 'Para darte mi opinión sincera, creo que [punto clave]. Lo que realmente [resalta] para mí es cómo [factor] impacta nuestras decisiones en el tiempo.',
      exampleFullEn: 'To give you my honest take, balance is key. What stands out to me is how daily consistency shapes long-term outcomes.',
      strategyTip: 'Usa conectores conversacionales como "To give you my honest take..." para sonar natural.'
    },
    pro: {
      label: 'Avanzado',
      cefr: 'C1 - C2',
      color: 'indigo',
      templateEn: 'When evaluating this question, the [essential] aspect to recognize is [core concept]. While surface perspectives suggest [common view], my conviction is that we ought to prioritize...',
      templateEs: 'Al evaluar esta pregunta, el aspecto [esencial] que debemos reconocer es [concepto clave]. Si bien perspectivas superficiales sugieren [visión común], mi convicción es que deberíamos priorizar...',
      exampleFullEn: 'When evaluating this topic, the essential aspect is long-term sustainability rather than short-term convenience.',
      strategyTip: 'Usa contraste intelectual ("While surface perspectives suggest X, my conviction is Y").'
    },
    quickStarters: [
      { en: "Personally, I'd say that...", es: "En lo personal, diría que..." },
      { en: "To be completely honest...", es: "Para ser totalmente honesto/a..." },
      { en: "From my own experience...", es: "Desde mi propia experiencia..." }
    ]
  };
}
