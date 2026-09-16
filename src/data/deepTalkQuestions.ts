// ────────────────────────────────────────────────────────────
// Deep Talk – Question Bank
// Complex opinion questions with professionally crafted
// suggested answers, broken into translatable fragments.
// ────────────────────────────────────────────────────────────

export interface DeepTalkFragment {
  /** The fragment in Spanish that the student sees first */
  es: string;
  /** The English tokens the student must assemble / reveal */
  tokens: string[];
}

export interface DeepTalkQuestion {
  id: string;
  questionEn: string;
  questionEs: string;
  /** Full suggested answer in Spanish (shown as reference) */
  suggestedAnswerEs: string;
  /** Full suggested answer in English (assembled at the end) */
  suggestedAnswerEn: string;
  fragments: DeepTalkFragment[];
  /** Key connectors / expressions taught in this question */
  connectors: string[];
  level: 'intermediate' | 'advanced';
  category: string;
}

// ═══════════════════════════════════════════════════════════
// INTERMEDIATE QUESTIONS (A2 – B1)
// ═══════════════════════════════════════════════════════════

const intermediateQuestions: DeepTalkQuestion[] = [
  {
    id: 'dt-int-01',
    category: 'Preferencias de vida',
    questionEn: 'Would you rather have a lot of money or perfect health? Why?',
    questionEs: '¿Preferirías tener mucho dinero o salud perfecta? ¿Por qué?',
    suggestedAnswerEs: 'Personalmente, creo que la salud es más importante que el dinero. Sin embargo, los dos son necesarios en nuestra vida. Por un lado, sin salud no puedes disfrutar nada. Por otro lado, el dinero te da estabilidad. En conclusión, prefiero tener buena salud porque sin ella, el dinero pierde su valor.',
    suggestedAnswerEn: 'Personally, I believe that health is more important than money. However, both are necessary in our lives. On one hand, without health you can\'t enjoy anything. On the other hand, money gives you stability. In conclusion, I prefer to have good health because without it, money loses its value.',
    fragments: [
      {
        es: 'Personalmente, creo que la salud es más importante que el dinero.',
        tokens: ['Personally,', 'I believe', 'that', 'health', 'is', 'more important', 'than', 'money.'],
      },
      {
        es: 'Sin embargo, los dos son necesarios en nuestra vida.',
        tokens: ['However,', 'both', 'are', 'necessary', 'in', 'our', 'lives.'],
      },
      {
        es: 'Por un lado, sin salud no puedes disfrutar nada.',
        tokens: ['On one hand,', 'without', 'health', 'you can\'t', 'enjoy', 'anything.'],
      },
      {
        es: 'Por otro lado, el dinero te da estabilidad.',
        tokens: ['On the other hand,', 'money', 'gives', 'you', 'stability.'],
      },
      {
        es: 'En conclusión, prefiero tener buena salud porque sin ella, el dinero pierde su valor.',
        tokens: ['In conclusion,', 'I prefer', 'to have', 'good health', 'because', 'without it,', 'money', 'loses', 'its value.'],
      },
    ],
    connectors: ['Personally', 'However', 'On one hand', 'On the other hand', 'In conclusion'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-02',
    category: 'Ética / Valores',
    questionEn: 'Is physical appearance more important than personality? Why?',
    questionEs: '¿Es más importante la apariencia física que la personalidad? ¿Por qué?',
    suggestedAnswerEs: 'En mi opinión, la personalidad es mucho más importante que la apariencia física. Aunque la primera impresión cuenta, lo que realmente importa es cómo tratas a los demás. Por ejemplo, una persona amable y respetuosa siempre será más valorada. En resumen, la belleza se desvanece, pero una buena personalidad dura para siempre.',
    suggestedAnswerEn: 'In my opinion, personality is much more important than physical appearance. Although first impressions matter, what really counts is how you treat others. For example, a kind and respectful person will always be more valued. In short, beauty fades, but a good personality lasts forever.',
    fragments: [
      {
        es: 'En mi opinión, la personalidad es mucho más importante que la apariencia física.',
        tokens: ['In my opinion,', 'personality', 'is', 'much more important', 'than', 'physical appearance.'],
      },
      {
        es: 'Aunque la primera impresión cuenta, lo que realmente importa es cómo tratas a los demás.',
        tokens: ['Although', 'first impressions', 'matter,', 'what really counts', 'is', 'how', 'you treat', 'others.'],
      },
      {
        es: 'Por ejemplo, una persona amable y respetuosa siempre será más valorada.',
        tokens: ['For example,', 'a kind', 'and respectful', 'person', 'will always', 'be', 'more valued.'],
      },
      {
        es: 'En resumen, la belleza se desvanece, pero una buena personalidad dura para siempre.',
        tokens: ['In short,', 'beauty', 'fades,', 'but', 'a good personality', 'lasts', 'forever.'],
      },
    ],
    connectors: ['In my opinion', 'Although', 'For example', 'In short'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-03',
    category: 'Relaciones',
    questionEn: 'Is it better to have a few close friends or many acquaintances?',
    questionEs: '¿Es mejor tener pocos amigos cercanos o muchos conocidos?',
    suggestedAnswerEs: 'Desde mi punto de vista, es mejor tener pocos amigos cercanos. La razón es que los verdaderos amigos te apoyan en los momentos difíciles. Además, la confianza se construye con el tiempo y no con la cantidad de personas. Por lo tanto, prefiero tener pocas amistades, pero sinceras y leales.',
    suggestedAnswerEn: 'From my point of view, it is better to have a few close friends. The reason is that true friends support you in difficult times. Additionally, trust is built over time, not with the number of people. Therefore, I prefer to have few friendships, but sincere and loyal ones.',
    fragments: [
      {
        es: 'Desde mi punto de vista, es mejor tener pocos amigos cercanos.',
        tokens: ['From my point of view,', 'it is', 'better', 'to have', 'a few', 'close friends.'],
      },
      {
        es: 'La razón es que los verdaderos amigos te apoyan en los momentos difíciles.',
        tokens: ['The reason is', 'that', 'true friends', 'support you', 'in', 'difficult times.'],
      },
      {
        es: 'Además, la confianza se construye con el tiempo y no con la cantidad de personas.',
        tokens: ['Additionally,', 'trust', 'is built', 'over time,', 'not', 'with the number', 'of people.'],
      },
      {
        es: 'Por lo tanto, prefiero tener pocas amistades, pero sinceras y leales.',
        tokens: ['Therefore,', 'I prefer', 'to have', 'few friendships,', 'but', 'sincere', 'and loyal ones.'],
      },
    ],
    connectors: ['From my point of view', 'The reason is that', 'Additionally', 'Therefore'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-04',
    category: 'Trabajo / Carrera',
    questionEn: 'Is it better to follow your passion or choose a stable job?',
    questionEs: '¿Es mejor seguir tu pasión o elegir un trabajo estable?',
    suggestedAnswerEs: 'Creo que lo ideal es encontrar un balance entre los dos. Por un lado, seguir tu pasión te hace feliz y te motiva cada día. Sin embargo, la estabilidad económica también es importante para vivir tranquilo. En mi caso, intentaría combinar ambos, buscando un trabajo estable que esté relacionado con lo que me gusta.',
    suggestedAnswerEn: 'I believe that the ideal thing is to find a balance between the two. On one hand, following your passion makes you happy and motivates you every day. However, financial stability is also important to live peacefully. In my case, I would try to combine both, looking for a stable job that is related to what I like.',
    fragments: [
      {
        es: 'Creo que lo ideal es encontrar un balance entre los dos.',
        tokens: ['I believe', 'that', 'the ideal thing', 'is', 'to find', 'a balance', 'between', 'the two.'],
      },
      {
        es: 'Por un lado, seguir tu pasión te hace feliz y te motiva cada día.',
        tokens: ['On one hand,', 'following', 'your passion', 'makes you happy', 'and', 'motivates you', 'every day.'],
      },
      {
        es: 'Sin embargo, la estabilidad económica también es importante para vivir tranquilo.',
        tokens: ['However,', 'financial stability', 'is also', 'important', 'to live', 'peacefully.'],
      },
      {
        es: 'En mi caso, intentaría combinar ambos, buscando un trabajo estable que esté relacionado con lo que me gusta.',
        tokens: ['In my case,', 'I would try', 'to combine', 'both,', 'looking for', 'a stable job', 'that is related', 'to what I like.'],
      },
    ],
    connectors: ['I believe that', 'On one hand', 'However', 'In my case'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-05',
    category: 'Tecnología',
    questionEn: 'Do you think social media does more harm or more good?',
    questionEs: '¿Crees que las redes sociales hacen más daño o más bien?',
    suggestedAnswerEs: 'Considero que las redes sociales tienen ventajas y desventajas. Por ejemplo, nos permiten comunicarnos con personas en todo el mundo. No obstante, también pueden causar ansiedad y comparación constante. En mi opinión, el problema no son las redes sociales sino cómo las usamos. Si las usamos con moderación, pueden ser una herramienta muy útil.',
    suggestedAnswerEn: 'I consider that social media has advantages and disadvantages. For example, it allows us to communicate with people all over the world. Nevertheless, it can also cause anxiety and constant comparison. In my opinion, the problem is not social media itself but how we use it. If we use it in moderation, it can be a very useful tool.',
    fragments: [
      {
        es: 'Considero que las redes sociales tienen ventajas y desventajas.',
        tokens: ['I consider', 'that', 'social media', 'has', 'advantages', 'and', 'disadvantages.'],
      },
      {
        es: 'Por ejemplo, nos permiten comunicarnos con personas en todo el mundo.',
        tokens: ['For example,', 'it allows us', 'to communicate', 'with people', 'all over', 'the world.'],
      },
      {
        es: 'No obstante, también pueden causar ansiedad y comparación constante.',
        tokens: ['Nevertheless,', 'it can also', 'cause', 'anxiety', 'and', 'constant comparison.'],
      },
      {
        es: 'En mi opinión, el problema no son las redes sociales sino cómo las usamos.',
        tokens: ['In my opinion,', 'the problem', 'is not', 'social media itself', 'but', 'how', 'we use it.'],
      },
      {
        es: 'Si las usamos con moderación, pueden ser una herramienta muy útil.',
        tokens: ['If', 'we use it', 'in moderation,', 'it can be', 'a very', 'useful tool.'],
      },
    ],
    connectors: ['I consider that', 'For example', 'Nevertheless', 'In my opinion', 'If'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-06',
    category: 'Educación',
    questionEn: 'Is learning from experience better than learning from books?',
    questionEs: '¿Es mejor aprender de la experiencia que de los libros?',
    suggestedAnswerEs: 'Yo pienso que ambos tipos de aprendizaje son importantes. Por una parte, los libros te dan conocimiento teórico y una base sólida. Por otra parte, la experiencia te enseña cosas que ningún libro puede enseñarte. En pocas palabras, lo mejor es combinar los dos para tener un aprendizaje completo.',
    suggestedAnswerEn: 'I think that both types of learning are important. On the one hand, books give you theoretical knowledge and a solid foundation. On the other hand, experience teaches you things that no book can teach you. In a nutshell, the best thing is to combine both to have a complete learning experience.',
    fragments: [
      {
        es: 'Yo pienso que ambos tipos de aprendizaje son importantes.',
        tokens: ['I think', 'that', 'both types', 'of learning', 'are', 'important.'],
      },
      {
        es: 'Por una parte, los libros te dan conocimiento teórico y una base sólida.',
        tokens: ['On the one hand,', 'books', 'give you', 'theoretical knowledge', 'and', 'a solid foundation.'],
      },
      {
        es: 'Por otra parte, la experiencia te enseña cosas que ningún libro puede enseñarte.',
        tokens: ['On the other hand,', 'experience', 'teaches you', 'things', 'that', 'no book', 'can teach you.'],
      },
      {
        es: 'En pocas palabras, lo mejor es combinar los dos para tener un aprendizaje completo.',
        tokens: ['In a nutshell,', 'the best thing', 'is', 'to combine', 'both', 'to have', 'a complete', 'learning experience.'],
      },
    ],
    connectors: ['I think that', 'On the one hand', 'On the other hand', 'In a nutshell'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-07',
    category: 'Estilo de vida',
    questionEn: 'Is it better to live in a big city or in a quiet small town? Why?',
    questionEs: '¿Es mejor vivir en una gran ciudad o en un pueblo pequeño y tranquilo? ¿Por qué?',
    suggestedAnswerEs: 'En mi opinión, vivir en una ciudad pequeña ofrece mayor tranquilidad y calidad de vida. Aunque las grandes ciudades tienen más oportunidades laborales y entretenimiento, el ritmo de vida suele ser muy estresante. Por otro lado, un lugar tranquilo te permite descansar mejor y disfrutar de la naturaleza. En conclusión, prefiero la calma de un pueblo antes que el ruido constante de la ciudad.',
    suggestedAnswerEn: 'In my opinion, living in a small town offers more tranquility and quality of life. Although big cities have more job opportunities and entertainment, the pace of life is usually very stressful. On the other hand, a quiet place allows you to rest better and enjoy nature. In conclusion, I prefer the calmness of a town over the constant noise of the city.',
    fragments: [
      {
        es: 'En mi opinión, vivir en una ciudad pequeña ofrece mayor tranquilidad y calidad de vida.',
        tokens: ['In my opinion,', 'living in', 'a small town', 'offers', 'more tranquility', 'and quality of life.'],
      },
      {
        es: 'Aunque las grandes ciudades tienen más oportunidades laborales, el ritmo suele ser estresante.',
        tokens: ['Although', 'big cities', 'have more job opportunities,', 'the pace of life', 'is usually', 'very stressful.'],
      },
      {
        es: 'Por otro lado, un lugar tranquilo te permite descansar mejor y disfrutar de la naturaleza.',
        tokens: ['On the other hand,', 'a quiet place', 'allows you', 'to rest better', 'and enjoy', 'nature.'],
      },
      {
        es: 'En conclusión, prefiero la calma de un pueblo antes que el ruido constante de la ciudad.',
        tokens: ['In conclusion,', 'I prefer', 'the calmness of a town', 'over', 'the constant noise', 'of the city.'],
      },
    ],
    connectors: ['In my opinion', 'Although', 'On the other hand', 'In conclusion'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-08',
    category: 'Trabajo y Dinero',
    questionEn: 'Is it better to save your money for the future or enjoy it right now?',
    questionEs: '¿Es mejor ahorrar tu dinero para el futuro o disfrutarlo ahora mismo?',
    suggestedAnswerEs: 'Creo que la clave está en mantener un equilibrio saludable. Por un lado, ahorrar dinero te da seguridad en caso de una emergencia imprevista. Por otro lado, la vida es corta y también debemos disfrutar de nuestras experiencias presentes. Por esta razón, intento ahorrar un porcentaje de mis ingresos cada mes mientras disfruto del resto con moderación.',
    suggestedAnswerEn: 'I believe that the key is to maintain a healthy balance. On one hand, saving money gives you security in case of an unexpected emergency. On the other hand, life is short and we should also enjoy our present experiences. For this reason, I try to save a percentage of my income every month while enjoying the rest in moderation.',
    fragments: [
      {
        es: 'Creo que la clave está en mantener un equilibrio saludable.',
        tokens: ['I believe that', 'the key', 'is to maintain', 'a healthy balance.'],
      },
      {
        es: 'Por un lado, ahorrar dinero te da seguridad en caso de una emergencia imprevista.',
        tokens: ['On one hand,', 'saving money', 'gives you security', 'in case of', 'an unexpected emergency.'],
      },
      {
        es: 'Por otro lado, la vida es corta y también debemos disfrutar de nuestras experiencias presentes.',
        tokens: ['On the other hand,', 'life is short', 'and we should also', 'enjoy', 'our present experiences.'],
      },
      {
        es: 'Por esta razón, intento ahorrar cada mes mientras disfruto del resto con moderación.',
        tokens: ['For this reason,', 'I try to save', 'every month', 'while enjoying the rest', 'in moderation.'],
      },
    ],
    connectors: ['I believe that', 'On one hand', 'On the other hand', 'For this reason'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-09',
    category: 'Sociedad / Familia',
    questionEn: 'Should young adults live with their parents until they get married?',
    questionEs: '¿Deberían los adultos jóvenes vivir con sus padres hasta casarse?',
    suggestedAnswerEs: 'En mi cultura, es muy común vivir con los padres durante varios años. Sin embargo, creo que independizarse antes del matrimonio te ayuda a madurar mucho más rápido. Por ejemplo, aprendes a administrar tus gastos y a resolver problemas por tu cuenta. En definitiva, ambas opciones son válidas dependiendo de la situación financiera de cada persona.',
    suggestedAnswerEn: 'In my culture, it is very common to live with your parents for several years. However, I believe that becoming independent before marriage helps you mature much faster. For example, you learn to manage your expenses and solve problems on your own. Ultimately, both options are valid depending on the financial situation of each person.',
    fragments: [
      {
        es: 'En mi cultura, es muy común vivir con los padres durante varios años.',
        tokens: ['In my culture,', 'it is very common', 'to live with your parents', 'for several years.'],
      },
      {
        es: 'Sin embargo, independizarse antes del matrimonio te ayuda a madurar más rápido.',
        tokens: ['However,', 'becoming independent', 'before marriage', 'helps you mature', 'much faster.'],
      },
      {
        es: 'Por ejemplo, aprendes a administrar tus gastos y a resolver problemas por tu cuenta.',
        tokens: ['For example,', 'you learn to manage', 'your expenses', 'and solve problems', 'on your own.'],
      },
      {
        es: 'En definitiva, ambas opciones son válidas según la situación financiera de cada uno.',
        tokens: ['Ultimately,', 'both options are valid', 'depending on', 'the financial situation', 'of each person.'],
      },
    ],
    connectors: ['In my culture', 'However', 'For example', 'Ultimately'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-10',
    category: 'Desarrollo personal',
    questionEn: 'Is failure a necessary part of achieving success? Why?',
    questionEs: '¿Es el fracaso una parte necesaria para alcanzar el éxito? ¿Por qué?',
    suggestedAnswerEs: 'Totalmente. Desde mi perspectiva, los errores son nuestros mejores maestros. Cuando cometemos un error, entendemos exactamente qué debemos corregir para mejorar. Además, superar momentos difíciles nos vuelve personas más resilientes y perseverantes. En resumen, nadie alcanza el éxito verdadero sin haber tropezado primero varias veces.',
    suggestedAnswerEn: 'Totally. From my perspective, mistakes are our best teachers. When we make a mistake, we understand exactly what we need to correct to improve. Additionally, overcoming difficult times makes us more resilient and perseverant. In short, nobody reaches true success without having stumbled a few times first.',
    fragments: [
      {
        es: 'Totalmente. Desde mi perspectiva, los errores son nuestros mejores maestros.',
        tokens: ['Totally.', 'From my perspective,', 'mistakes', 'are our best', 'teachers.'],
      },
      {
        es: 'Cuando cometemos un error, entendemos exactamente qué debemos corregir para mejorar.',
        tokens: ['When we make a mistake,', 'we understand exactly', 'what we need to correct', 'to improve.'],
      },
      {
        es: 'Además, superar momentos difíciles nos vuelve personas más resilientes y perseverantes.',
        tokens: ['Additionally,', 'overcoming difficult times', 'makes us', 'more resilient', 'and perseverant.'],
      },
      {
        es: 'En resumen, nadie alcanza el éxito verdadero sin haber tropezado primero.',
        tokens: ['In short,', 'nobody reaches', 'true success', 'without having stumbled', 'a few times first.'],
      },
    ],
    connectors: ['From my perspective', 'When', 'Additionally', 'In short'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-11',
    category: 'Trabajo y Tecnología',
    questionEn: 'Is working from home better than working in a traditional office?',
    questionEs: '¿Es mejor trabajar desde casa que trabajar en una oficina tradicional?',
    suggestedAnswerEs: 'En mi experiencia, el trabajo remoto ofrece enormes beneficios como ahorrar tiempo en el tráfico. No obstante, trabajar en una oficina facilita el trabajo en equipo y la comunicación directa con los colegas. Por lo tanto, considero que el modelo híbrido es la mejor solución moderna, porque combina la comodidad del hogar con la interacción social de la oficina.',
    suggestedAnswerEn: 'In my experience, remote work offers huge benefits such as saving time in traffic. Nonetheless, working in an office facilitates teamwork and direct communication with colleagues. Therefore, I consider that the hybrid model is the best modern solution, because it combines the comfort of home with the social interaction of the office.',
    fragments: [
      {
        es: 'En mi experiencia, el trabajo remoto ofrece enormes beneficios como ahorrar tiempo en el tráfico.',
        tokens: ['In my experience,', 'remote work', 'offers huge benefits', 'such as saving time', 'in traffic.'],
      },
      {
        es: 'No obstante, trabajar en una oficina facilita el trabajo en equipo y la comunicación directa.',
        tokens: ['Nonetheless,', 'working in an office', 'facilitates teamwork', 'and direct communication', 'with colleagues.'],
      },
      {
        es: 'Por lo tanto, considero que el modelo híbrido es la mejor solución moderna.',
        tokens: ['Therefore,', 'I consider that', 'the hybrid model', 'is the best', 'modern solution.'],
      },
      {
        es: 'Combina la comodidad del hogar con la interacción social de la oficina.',
        tokens: ['Because it combines', 'the comfort of home', 'with the social interaction', 'of the office.'],
      },
    ],
    connectors: ['In my experience', 'Nonetheless', 'Therefore', 'Because'],
    level: 'intermediate',
  },
  {
    id: 'dt-int-12',
    category: 'Salud y Bienestar',
    questionEn: 'Is mental health as important as physical health? Why?',
    questionEs: '¿Es la salud mental tan importante como la salud física? ¿Por qué?',
    suggestedAnswerEs: 'Sin duda alguna, la salud mental es igual o incluso más importante que la física. La razón principal es que nuestra mente controla cómo nos sentimos y cómo tomamos decisiones. Además, el estrés constante y la ansiedad pueden provocar enfermedades físicas graves con el tiempo. Por consiguiente, cuidar nuestras emociones debe ser siempre una prioridad absoluta.',
    suggestedAnswerEn: 'Without a doubt, mental health is equally or even more important than physical health. The main reason is that our mind controls how we feel and make decisions. Furthermore, constant stress and anxiety can trigger serious physical illnesses over time. Consequently, taking care of our emotions must always be an absolute priority.',
    fragments: [
      {
        es: 'Sin duda alguna, la salud mental es igual o incluso más importante que la física.',
        tokens: ['Without a doubt,', 'mental health', 'is equally or even', 'more important', 'than physical health.'],
      },
      {
        es: 'La razón principal es que nuestra mente controla cómo nos sentimos y tomamos decisiones.',
        tokens: ['The main reason is', 'that our mind controls', 'how we feel', 'and make decisions.'],
      },
      {
        es: 'Además, el estrés constante y la ansiedad pueden provocar enfermedades físicas graves.',
        tokens: ['Furthermore,', 'constant stress and anxiety', 'can trigger', 'serious physical illnesses', 'over time.'],
      },
      {
        es: 'Por consiguiente, cuidar nuestras emociones debe ser siempre una prioridad absoluta.',
        tokens: ['Consequently,', 'taking care of our emotions', 'must always be', 'an absolute priority.'],
      },
    ],
    connectors: ['Without a doubt', 'The main reason is', 'Furthermore', 'Consequently'],
    level: 'intermediate',
  },
];

// ═══════════════════════════════════════════════════════════
// ADVANCED QUESTIONS (B2 – C1)
// ═══════════════════════════════════════════════════════════

const advancedQuestions: DeepTalkQuestion[] = [
  {
    id: 'dt-adv-01',
    category: 'Filosofía cotidiana',
    questionEn: 'Is it possible to be truly happy without money?',
    questionEs: '¿Es posible ser verdaderamente feliz sin dinero?',
    suggestedAnswerEs: 'Esa es una pregunta que muchas personas se hacen. Desde mi perspectiva, la felicidad no depende exclusivamente del dinero, aunque sería ingenuo negar su importancia. Lo que quiero decir es que el dinero resuelve problemas básicos como la alimentación, la vivienda y la salud. Sin embargo, una vez que esas necesidades están cubiertas, la felicidad viene de las relaciones, el propósito y la paz interior. En definitiva, el dinero es una herramienta, no el destino final.',
    suggestedAnswerEn: 'That is a question that many people ask themselves. From my perspective, happiness does not depend exclusively on money, although it would be naive to deny its importance. What I mean is that money solves basic problems such as food, housing, and health. However, once those needs are met, happiness comes from relationships, purpose, and inner peace. Ultimately, money is a tool, not the final destination.',
    fragments: [
      {
        es: 'Esa es una pregunta que muchas personas se hacen.',
        tokens: ['That is', 'a question', 'that', 'many people', 'ask', 'themselves.'],
      },
      {
        es: 'Desde mi perspectiva, la felicidad no depende exclusivamente del dinero, aunque sería ingenuo negar su importancia.',
        tokens: ['From my perspective,', 'happiness', 'does not depend', 'exclusively', 'on money,', 'although', 'it would be naive', 'to deny', 'its importance.'],
      },
      {
        es: 'Lo que quiero decir es que el dinero resuelve problemas básicos como la alimentación, la vivienda y la salud.',
        tokens: ['What I mean is', 'that', 'money solves', 'basic problems', 'such as', 'food,', 'housing,', 'and health.'],
      },
      {
        es: 'Sin embargo, una vez que esas necesidades están cubiertas, la felicidad viene de las relaciones, el propósito y la paz interior.',
        tokens: ['However,', 'once', 'those needs', 'are met,', 'happiness', 'comes from', 'relationships,', 'purpose,', 'and inner peace.'],
      },
      {
        es: 'En definitiva, el dinero es una herramienta, no el destino final.',
        tokens: ['Ultimately,', 'money', 'is a tool,', 'not', 'the final', 'destination.'],
      },
    ],
    connectors: ['From my perspective', 'Although', 'What I mean is', 'However', 'Ultimately'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-02',
    category: 'Sociedad',
    questionEn: 'Should social media be banned for teenagers under 16?',
    questionEs: '¿Deberían prohibirse las redes sociales para menores de 16 años?',
    suggestedAnswerEs: 'Este es un tema bastante polémico en la actualidad. Si bien entiendo la preocupación de los padres, creo que prohibir las redes sociales no es la solución más efectiva. En primer lugar, los adolescentes encontrarán la manera de acceder a ellas de todas formas. En segundo lugar, lo más importante es enseñarles a usarlas de manera responsable. Dicho esto, sí considero que debería haber regulaciones más estrictas para proteger a los menores del contenido dañino.',
    suggestedAnswerEn: 'This is quite a controversial topic nowadays. While I understand parents\' concerns, I believe that banning social media is not the most effective solution. First of all, teenagers will find a way to access them anyway. Secondly, the most important thing is to teach them to use them responsibly. That being said, I do believe there should be stricter regulations to protect minors from harmful content.',
    fragments: [
      {
        es: 'Este es un tema bastante polémico en la actualidad.',
        tokens: ['This is', 'quite', 'a controversial topic', 'nowadays.'],
      },
      {
        es: 'Si bien entiendo la preocupación de los padres, creo que prohibir las redes sociales no es la solución más efectiva.',
        tokens: ['While', 'I understand', 'parents\' concerns,', 'I believe that', 'banning social media', 'is not', 'the most effective', 'solution.'],
      },
      {
        es: 'En primer lugar, los adolescentes encontrarán la manera de acceder a ellas de todas formas.',
        tokens: ['First of all,', 'teenagers', 'will find', 'a way', 'to access them', 'anyway.'],
      },
      {
        es: 'En segundo lugar, lo más importante es enseñarles a usarlas de manera responsable.',
        tokens: ['Secondly,', 'the most important thing', 'is', 'to teach them', 'to use them', 'responsibly.'],
      },
      {
        es: 'Dicho esto, sí considero que debería haber regulaciones más estrictas para proteger a los menores del contenido dañino.',
        tokens: ['That being said,', 'I do believe', 'there should be', 'stricter regulations', 'to protect', 'minors', 'from harmful content.'],
      },
    ],
    connectors: ['While', 'I believe that', 'First of all', 'Secondly', 'That being said'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-03',
    category: 'Tecnología',
    questionEn: 'Has technology made us more connected or more isolated?',
    questionEs: '¿La tecnología nos ha hecho más conectados o más aislados?',
    suggestedAnswerEs: 'Es una paradoja interesante. Por un lado, la tecnología nos permite hablar con cualquier persona en el mundo en cuestión de segundos. No obstante, muchas personas se sienten más solas que nunca, incluso estando rodeadas de dispositivos. Lo que creo es que la tecnología amplifica lo que ya somos: si eres sociable, te ayuda a conectar más; si tiendes al aislamiento, puede empeorar la situación. En resumen, la tecnología es un espejo de nuestras propias decisiones sociales.',
    suggestedAnswerEn: 'It is an interesting paradox. On one hand, technology allows us to talk to anyone in the world in a matter of seconds. Nevertheless, many people feel lonelier than ever, even while surrounded by devices. What I believe is that technology amplifies what we already are: if you are sociable, it helps you connect more; if you tend toward isolation, it can make the situation worse. In summary, technology is a mirror of our own social choices.',
    fragments: [
      {
        es: 'Es una paradoja interesante.',
        tokens: ['It is', 'an interesting', 'paradox.'],
      },
      {
        es: 'Por un lado, la tecnología nos permite hablar con cualquier persona en el mundo en cuestión de segundos.',
        tokens: ['On one hand,', 'technology', 'allows us', 'to talk to', 'anyone', 'in the world', 'in a matter of', 'seconds.'],
      },
      {
        es: 'No obstante, muchas personas se sienten más solas que nunca, incluso estando rodeadas de dispositivos.',
        tokens: ['Nevertheless,', 'many people', 'feel', 'lonelier', 'than ever,', 'even while', 'surrounded', 'by devices.'],
      },
      {
        es: 'Lo que creo es que la tecnología amplifica lo que ya somos.',
        tokens: ['What I believe is', 'that', 'technology', 'amplifies', 'what', 'we already', 'are.'],
      },
      {
        es: 'En resumen, la tecnología es un espejo de nuestras propias decisiones sociales.',
        tokens: ['In summary,', 'technology', 'is', 'a mirror', 'of our own', 'social choices.'],
      },
    ],
    connectors: ['On one hand', 'Nevertheless', 'What I believe is', 'In summary'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-04',
    category: 'Educación',
    questionEn: 'Is a university degree still necessary for success in today\'s world?',
    questionEs: '¿Sigue siendo necesario un título universitario para tener éxito en el mundo actual?',
    suggestedAnswerEs: 'Esta pregunta genera mucho debate actualmente. Si bien un título universitario sigue siendo valioso en muchas profesiones como la medicina o el derecho, el panorama ha cambiado significativamente. Hoy en día, muchas personas exitosas han demostrado que las habilidades prácticas y la experiencia pueden ser igual de importantes. Sin embargo, no podemos ignorar que en muchos países un título abre puertas. En conclusión, depende del campo profesional y de los objetivos personales de cada individuo.',
    suggestedAnswerEn: 'This question generates a lot of debate nowadays. While a university degree remains valuable in many professions such as medicine or law, the landscape has changed significantly. Nowadays, many successful people have shown that practical skills and experience can be equally important. However, we cannot ignore that in many countries a degree opens doors. In conclusion, it depends on the professional field and the personal goals of each individual.',
    fragments: [
      {
        es: 'Esta pregunta genera mucho debate actualmente.',
        tokens: ['This question', 'generates', 'a lot of', 'debate', 'nowadays.'],
      },
      {
        es: 'Si bien un título universitario sigue siendo valioso en muchas profesiones como la medicina o el derecho, el panorama ha cambiado significativamente.',
        tokens: ['While', 'a university degree', 'remains valuable', 'in many professions', 'such as', 'medicine or law,', 'the landscape', 'has changed', 'significantly.'],
      },
      {
        es: 'Hoy en día, muchas personas exitosas han demostrado que las habilidades prácticas y la experiencia pueden ser igual de importantes.',
        tokens: ['Nowadays,', 'many successful people', 'have shown', 'that', 'practical skills', 'and experience', 'can be', 'equally important.'],
      },
      {
        es: 'Sin embargo, no podemos ignorar que en muchos países un título abre puertas.',
        tokens: ['However,', 'we cannot ignore', 'that', 'in many countries', 'a degree', 'opens doors.'],
      },
      {
        es: 'En conclusión, depende del campo profesional y de los objetivos personales de cada individuo.',
        tokens: ['In conclusion,', 'it depends on', 'the professional field', 'and', 'the personal goals', 'of each', 'individual.'],
      },
    ],
    connectors: ['While', 'Such as', 'Nowadays', 'However', 'In conclusion'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-05',
    category: 'Relaciones',
    questionEn: 'Can long-distance relationships really work in the long run?',
    questionEs: '¿Pueden funcionar realmente las relaciones a distancia a largo plazo?',
    suggestedAnswerEs: 'Yo diría que sí pueden funcionar, pero requieren un esfuerzo considerable de ambas partes. Lo más importante en una relación a distancia es la comunicación constante y la confianza mutua. Además, es fundamental tener un plan realista para reencontrarse en el futuro. Ahora bien, no es para todos, ya que hay personas que necesitan la presencia física para sentirse conectadas emocionalmente. En definitiva, el éxito de una relación a distancia depende del compromiso y la madurez de ambas personas.',
    suggestedAnswerEn: 'I would say that yes, they can work, but they require considerable effort from both sides. The most important thing in a long-distance relationship is constant communication and mutual trust. Furthermore, it is essential to have a realistic plan to reunite in the future. Now, it is not for everyone, since there are people who need physical presence to feel emotionally connected. Ultimately, the success of a long-distance relationship depends on the commitment and maturity of both people.',
    fragments: [
      {
        es: 'Yo diría que sí pueden funcionar, pero requieren un esfuerzo considerable de ambas partes.',
        tokens: ['I would say', 'that yes,', 'they can work,', 'but', 'they require', 'considerable effort', 'from both sides.'],
      },
      {
        es: 'Lo más importante en una relación a distancia es la comunicación constante y la confianza mutua.',
        tokens: ['The most important thing', 'in a long-distance relationship', 'is', 'constant communication', 'and', 'mutual trust.'],
      },
      {
        es: 'Además, es fundamental tener un plan realista para reencontrarse en el futuro.',
        tokens: ['Furthermore,', 'it is essential', 'to have', 'a realistic plan', 'to reunite', 'in the future.'],
      },
      {
        es: 'Ahora bien, no es para todos, ya que hay personas que necesitan la presencia física para sentirse conectadas emocionalmente.',
        tokens: ['Now,', 'it is not', 'for everyone,', 'since', 'there are people', 'who need', 'physical presence', 'to feel', 'emotionally connected.'],
      },
      {
        es: 'En definitiva, el éxito de una relación a distancia depende del compromiso y la madurez de ambas personas.',
        tokens: ['Ultimately,', 'the success', 'of a long-distance relationship', 'depends on', 'the commitment', 'and maturity', 'of both people.'],
      },
    ],
    connectors: ['I would say', 'Furthermore', 'Now', 'Since', 'Ultimately'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-06',
    category: 'Ética / Valores',
    questionEn: 'Do you think people can truly change who they are?',
    questionEs: '¿Crees que las personas realmente pueden cambiar lo que son?',
    suggestedAnswerEs: 'Este es un tema fascinante que he pensado muchas veces. Por un lado, creo firmemente que las personas tienen la capacidad de cambiar sus hábitos y comportamientos si realmente lo desean. No obstante, hay aspectos de nuestra personalidad que están profundamente arraigados y son difíciles de modificar. Lo importante es distinguir entre cambiar completamente y evolucionar como persona. En mi opinión, no cambiamos quiénes somos en esencia, pero sí podemos convertirnos en una mejor versión de nosotros mismos a través de la experiencia y la reflexión.',
    suggestedAnswerEn: 'This is a fascinating topic that I have thought about many times. On one hand, I firmly believe that people have the ability to change their habits and behaviors if they truly want to. Nevertheless, there are aspects of our personality that are deeply rooted and difficult to modify. The important thing is to distinguish between changing completely and evolving as a person. In my opinion, we don\'t change who we are in essence, but we can become a better version of ourselves through experience and reflection.',
    fragments: [
      {
        es: 'Este es un tema fascinante que he pensado muchas veces.',
        tokens: ['This is', 'a fascinating topic', 'that', 'I have thought about', 'many times.'],
      },
      {
        es: 'Por un lado, creo firmemente que las personas tienen la capacidad de cambiar sus hábitos y comportamientos si realmente lo desean.',
        tokens: ['On one hand,', 'I firmly believe', 'that people', 'have the ability', 'to change', 'their habits', 'and behaviors', 'if they truly', 'want to.'],
      },
      {
        es: 'No obstante, hay aspectos de nuestra personalidad que están profundamente arraigados y son difíciles de modificar.',
        tokens: ['Nevertheless,', 'there are aspects', 'of our personality', 'that are', 'deeply rooted', 'and', 'difficult', 'to modify.'],
      },
      {
        es: 'Lo importante es distinguir entre cambiar completamente y evolucionar como persona.',
        tokens: ['The important thing', 'is', 'to distinguish', 'between', 'changing completely', 'and', 'evolving', 'as a person.'],
      },
      {
        es: 'En mi opinión, no cambiamos quiénes somos en esencia, pero sí podemos convertirnos en una mejor versión de nosotros mismos a través de la experiencia y la reflexión.',
        tokens: ['In my opinion,', 'we don\'t change', 'who we are', 'in essence,', 'but', 'we can become', 'a better version', 'of ourselves', 'through experience', 'and reflection.'],
      },
    ],
    connectors: ['On one hand', 'I firmly believe', 'Nevertheless', 'The important thing is', 'In my opinion'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-07',
    category: 'Inteligencia Artificial y Futuro',
    questionEn: 'Will artificial intelligence replace human creativity or enhance it?',
    questionEs: '¿La inteligencia artificial reemplazará la creatividad humana o la potenciará?',
    suggestedAnswerEs: 'Este es uno de los debates más apremiantes de nuestra era. Desde mi perspectiva, la inteligencia artificial no reemplazará la esencia de la creatividad humana, sino que funcionará como un catalizador extraordinario. Si bien los algoritmos pueden procesar datos y generar patrones a una velocidad sin precedentes, carecen de empatía y vivencias personales. En consecuencia, el verdadero arte seguirá naciendo de las experiencias vividas por seres humanos. En última instancia, la IA es una herramienta que amplifica nuestra imaginación, no un sustituto de nuestro espíritu.',
    suggestedAnswerEn: 'This is one of the most pressing debates of our era. From my perspective, artificial intelligence will not replace the essence of human creativity, but rather act as an extraordinary catalyst. While algorithms can generate patterns at an unprecedented speed, they lack empathy and personal lived experiences. Consequently, true art will continue to arise from the genuine experiences of human beings. Ultimately, AI is a tool that amplifies our imagination, not a replacement for our creative spirit.',
    fragments: [
      {
        es: 'Este es uno de los debates más apremiantes de nuestra era moderna.',
        tokens: ['This is', 'one of the most pressing debates', 'of our modern era.'],
      },
      {
        es: 'Desde mi perspectiva, la inteligencia artificial no reemplazará la esencia de la creatividad humana.',
        tokens: ['From my perspective,', 'artificial intelligence', 'will not replace', 'the essence of', 'human creativity.'],
      },
      {
        es: 'Si bien los algoritmos generan patrones a gran velocidad, carecen de empatía y vivencias personales.',
        tokens: ['While algorithms generate patterns', 'at an unprecedented speed,', 'they lack empathy', 'and personal lived experiences.'],
      },
      {
        es: 'En consecuencia, el verdadero arte seguirá naciendo de las experiencias vividas por humanos.',
        tokens: ['Consequently,', 'true art will continue to arise', 'from the genuine experiences', 'of human beings.'],
      },
      {
        es: 'En última instancia, la IA amplifica nuestra imaginación, pero no sustituye nuestro espíritu.',
        tokens: ['Ultimately,', 'AI is a tool', 'that amplifies our imagination,', 'not a replacement', 'for our creative spirit.'],
      },
    ],
    connectors: ['From my perspective', 'While', 'Consequently', 'Ultimately'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-08',
    category: 'Ética y Moral Global',
    questionEn: 'Is it justifiable to tell a lie in order to protect someone else\'s feelings?',
    questionEs: '¿Es justificable decir una mentira para proteger los sentimientos de otra persona?',
    suggestedAnswerEs: 'La moralidad detrás de las mentiras piadosas es un dilema ético complejo. Por un lado, la compasión nos impulsa a evitar causar sufrimiento innecesario a quienes apreciamos. Sin embargo, sostener una falsedad puede erosionar la confianza una vez que la verdad sale a la luz. A mi modo de ver, la sinceridad acompañada de empatía siempre es superior al engaño bienintencionado. En conclusión, el secreto radica en comunicar verdades difíciles con tacto y respeto.',
    suggestedAnswerEn: 'The morality behind white lies is a complex ethical dilemma. On one hand, compassion drives us to prevent unnecessary suffering to those we care about. However, maintaining an untruth can erode trust once the truth comes to light. As I see it, honesty paired with empathy is always superior to well-intended deception. In conclusion, the secret lies in communicating hard truths with tact and respect.',
    fragments: [
      {
        es: 'La moralidad detrás de las mentiras piadosas es un dilema ético complejo.',
        tokens: ['The morality behind', 'white lies', 'is a complex', 'ethical dilemma.'],
      },
      {
        es: 'Por un lado, la compasión nos impulsa a evitar sufrimiento innecesario a quienes apreciamos.',
        tokens: ['On one hand,', 'compassion drives us', 'to prevent', 'unnecessary suffering', 'to those we care about.'],
      },
      {
        es: 'Sin embargo, sostener una falsedad puede erosionar la confianza cuando la verdad sale a la luz.',
        tokens: ['However,', 'maintaining an untruth', 'can erode trust', 'once the truth', 'comes to light.'],
      },
      {
        es: 'A mi modo de ver, la sinceridad con empatía siempre es superior al engaño bienintencionado.',
        tokens: ['As I see it,', 'honesty paired with empathy', 'is always superior', 'to well-intended deception.'],
      },
      {
        es: 'En conclusión, el secreto radica en comunicar verdades difíciles con tacto y respeto.',
        tokens: ['In conclusion,', 'the secret lies in', 'communicating hard truths', 'with tact and respect.'],
      },
    ],
    connectors: ['On one hand', 'However', 'As I see it', 'In conclusion'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-09',
    category: 'Sociedad y Éxito',
    questionEn: 'Does modern society define success too narrowly around wealth and status?',
    questionEs: '¿La sociedad moderna define el éxito de forma demasiado estrecha en torno a la riqueza y el estatus?',
    suggestedAnswerEs: 'Indiscutiblemente sí. Vivimos en una cultura hipercompetitiva donde el valor de un individuo suele medirse por sus posesiones materiales. No obstante, esta perspectiva reduccionista ignora dimensiones fundamentales como la paz mental y la salud. Lo que necesitamos con urgencia es redefinir el éxito en congruencia con nuestros propios valores. En síntesis, el verdadero triunfo consiste en alcanzar serenidad interior y propósito, no en acumular aplausos externos.',
    suggestedAnswerEn: 'Undoubtedly yes. We live in a hyper-competitive culture obsessed with material possessions. Nonetheless, this reductionist outlook ignores fundamental dimensions such as mental peace and health. What we urgently need is to redefine success in alignment with our personal values. In summary, genuine triumph consists of achieving inner serenity and purpose, not accumulating external applause.',
    fragments: [
      {
        es: 'Indiscutiblemente sí. Vivimos en una cultura hipercompetitiva obsesionada con posesiones materiales.',
        tokens: ['Undoubtedly yes.', 'We live in', 'a hyper-competitive culture', 'obsessed with', 'material possessions.'],
      },
      {
        es: 'No obstante, esta perspectiva ignora dimensiones fundamentales como la paz mental y la salud.',
        tokens: ['Nonetheless,', 'this reductionist outlook', 'ignores fundamental dimensions', 'such as mental peace', 'and health.'],
      },
      {
        es: 'Lo que necesitamos con urgencia es redefinir el éxito según nuestros propios valores.',
        tokens: ['What we urgently need', 'is to redefine success', 'in alignment with', 'our personal values.'],
      },
      {
        es: 'En síntesis, el triunfo verdadero consiste en serenidad interior y no en aplausos externos.',
        tokens: ['In summary,', 'genuine triumph consists of', 'achieving inner serenity', 'and purpose,', 'not accumulating applause.'],
      },
    ],
    connectors: ['Undoubtedly', 'Nonetheless', 'What we urgently need', 'In summary'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-10',
    category: 'Liderazgo y Poder',
    questionEn: 'Does power inevitably corrupt people, or does it merely reveal who they truly are?',
    questionEs: '¿El poder corrompe inevitablemente a las personas o simplemente revela lo que realmente son?',
    suggestedAnswerEs: 'Esa es una de las reflexiones filosóficas más profundas sobre la condición humana. Si bien existe la noción de que el poder corrompe, yo creo que actúa más bien como un amplificador. Cuando un individuo adquiere autoridad, desaparecen las restricciones que solían frenar sus impulsos. Por lo tanto, el poder no crea la arrogancia, sino que le otorga el escenario para manifestarse. En conclusión, quien posee integridad moral utilizará el poder para servir y edificar a los demás.',
    suggestedAnswerEn: 'That is one of the deepest philosophical reflections regarding the human condition. While there is a notion that power corrupts, I believe it acts rather as a powerful amplifier. When an individual gains authority, the restrictions that used to restrain their impulses disappear. Therefore, power does not create arrogance, but gives it the stage to manifest itself. In conclusion, whoever possesses moral integrity will utilize power to serve and uplift others.',
    fragments: [
      {
        es: 'Esa es una de las reflexiones filosóficas más profundas sobre la condición humana.',
        tokens: ['That is one of', 'the deepest philosophical reflections', 'regarding the human condition.'],
      },
      {
        es: 'Si bien existe la noción de que el poder corrompe, yo creo que actúa más bien como un amplificador.',
        tokens: ['While there is a notion', 'that power corrupts,', 'I believe it acts rather', 'as a powerful amplifier.'],
      },
      {
        es: 'Cuando alguien adquiere autoridad, desaparecen las restricciones que frenaban sus impulsos.',
        tokens: ['When an individual gains authority,', 'the restrictions that used to restrain', 'their impulses disappear.'],
      },
      {
        es: 'Por lo tanto, el poder no crea la arrogancia, sino que le da el escenario para manifestarse.',
        tokens: ['Therefore,', 'power does not create arrogance,', 'but gives it the stage', 'to manifest itself.'],
      },
      {
        es: 'En conclusión, quien posee integridad moral utilizará el poder para servir a los demás.',
        tokens: ['In conclusion,', 'whoever possesses moral integrity', 'will utilize power', 'to serve and uplift others.'],
      },
    ],
    connectors: ['While', 'When', 'Therefore', 'In conclusion'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-11',
    category: 'Medio Ambiente y Responsabilidad',
    questionEn: 'Is individual action enough to combat climate change, or is systemic government change the only real solution?',
    questionEs: '¿Es suficiente la acción individual para combatir el cambio climático o el cambio sistémico gubernamental es la única solución real?',
    suggestedAnswerEs: 'Ambos enfoques son indispensables y se alimentan mutuamente en esta lucha. Por un lado, creer que solo los hábitos individuales resolverán la crisis climática es desproporcionado. Por otro lado, esperar pasivamente a que los gobiernos legislen sin presión ciudadana es ingenuo. En última instancia, la conciencia individual genera la demanda social para obligar a reformas estructurales. De ahí que el cambio comience en lo cotidiano, pero deba escalar al plano legislativo.',
    suggestedAnswerEn: 'Both approaches are indispensable and mutually reinforce each other in this fight. On one hand, believing that individual habits alone will solve the climate crisis is disproportionate. On the other hand, passively waiting for governments to legislate without citizen pressure is naive. Ultimately, individual awareness generates the social demand to force structural reforms. Hence, change starts in the everyday routine, but must inevitably scale to the legislative sphere.',
    fragments: [
      {
        es: 'Ambos enfoques son indispensables y se alimentan mutuamente en esta lucha.',
        tokens: ['Both approaches', 'are indispensable', 'and mutually reinforce', 'each other in this fight.'],
      },
      {
        es: 'Por un lado, creer que solo los hábitos individuales resolverán la crisis climática es desproporcionado.',
        tokens: ['On one hand,', 'believing that individual habits alone', 'will solve the climate crisis', 'is disproportionate.'],
      },
      {
        es: 'Por otro lado, esperar que los gobiernos legislen sin presión ciudadana es ingenuo.',
        tokens: ['On the other hand,', 'passively waiting', 'for governments to legislate', 'without citizen pressure', 'is naive.'],
      },
      {
        es: 'En última instancia, la conciencia individual genera la demanda para obligar a reformas estructurales.',
        tokens: ['Ultimately,', 'individual awareness generates', 'the social demand', 'to force structural reforms.'],
      },
      {
        es: 'De ahí que el cambio comience en lo cotidiano, pero deba escalar a lo legislativo.',
        tokens: ['Hence,', 'change starts in the everyday routine,', 'but must inevitably scale', 'to the legislative sphere.'],
      },
    ],
    connectors: ['On one hand', 'On the other hand', 'Ultimately', 'Hence'],
    level: 'advanced',
  },
  {
    id: 'dt-adv-12',
    category: 'Educación y Futuro del Trabajo',
    questionEn: 'In an automated world, should education prioritize technical skills or emotional intelligence and philosophy?',
    questionEs: 'En un mundo automatizado, ¿debería la educación priorizar habilidades técnicas o inteligencia emocional y filosofía?',
    suggestedAnswerEs: 'A medida que la tecnología avanza, nuestras virtudes más humanas se vuelven más valiosas. Aunque el dominio técnico es relevante, esas destrezas son las primeras en ser automatizadas por software inteligente. En contraste, el pensamiento crítico, la diplomacia ética y la empatía son imposibles de replicar mediante código. Por consiguiente, la educación del futuro debe forjar pensadores humanistas y no meros operadores temporales de herramientas.',
    suggestedAnswerEn: 'As technology advances, our most distinctly human virtues become vastly more valuable. Although technical mastery is relevant, those specific skills are the very first to be automated by intelligent software. In contrast, critical thinking, ethical diplomacy, and deep empathy are virtually impossible to replicate through code. Consequently, future education must cultivate humanistic thinkers rather than mere temporary tool operators.',
    fragments: [
      {
        es: 'A medida que la tecnología avanza, nuestras virtudes más humanas se vuelven más valiosas.',
        tokens: ['As technology advances,', 'our most distinctly human virtues', 'become vastly more valuable.'],
      },
      {
        es: 'Aunque el dominio técnico es relevante, esas destrezas son las primeras en ser automatizadas.',
        tokens: ['Although technical mastery is relevant,', 'those specific skills', 'are the very first', 'to be automated.'],
      },
      {
        es: 'En contraste, el pensamiento crítico, la ética y la empatía son imposibles de replicar con código.',
        tokens: ['In contrast,', 'critical thinking,', 'ethical diplomacy,', 'and deep empathy', 'are virtually impossible to replicate.'],
      },
      {
        es: 'Por consiguiente, la educación debe forjar pensadores humanistas y no meros operadores de software.',
        tokens: ['Consequently,', 'future education must cultivate', 'humanistic thinkers', 'rather than mere tool operators.'],
      },
    ],
    connectors: ['As', 'Although', 'In contrast', 'Consequently'],
    level: 'advanced',
  },
];

// ═══════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════

export const deepTalkQuestions: DeepTalkQuestion[] = [
  ...intermediateQuestions,
  ...advancedQuestions,
];

export function getDeepTalkByLevel(level: 'intermediate' | 'advanced'): DeepTalkQuestion[] {
  return deepTalkQuestions.filter(q => q.level === level);
}
