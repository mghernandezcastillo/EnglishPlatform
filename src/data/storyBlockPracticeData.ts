export type StationType = 'listening' | 'assembly' | 'error_hunter' | 'transformation';
export type Polarity = 'affirmative' | 'negative' | 'interrogative';

export interface CuratedPracticeItem {
  id: string;
  blockId: number;
  lessonTopic: string;
  station: StationType;
  polarity: Polarity;
  spanish: string;
  englishFull: string;
  audioText: string;
  
  // For Listening Station:
  maskedSentence?: string;
  targetWord?: string;
  listeningOptions?: string[];
  
  // For Assembly Station:
  blocks?: string[];
  correctOrder?: string[];

  // For Error Hunter Station:
  errorSentence?: string;
  wrongWord?: string;
  correctWordFix?: string;
  errorOptions?: string[];

  // For Transformation / Core Station:
  transformationPrompt?: string;
  coreSlotPrefix?: string;
  coreSlotSuffix?: string;
  coreTargetValue?: string;
  coreOptions?: string[];

  // Visual Card Image:
  imageUrl?: string;

  explanation: string;
}

export const CURATED_BLOCK_PRACTICE_DATA: Record<number, CuratedPracticeItem[]> = {
  // ==================== BLOQUE 1: FUNDAMENTOS DE ORACIÓN ====================
  1: [
    {
      id: 'b1-l1-q1',
      blockId: 1,
      lessonTopic: 'Subject + Verb + Complement',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Sara y Nico arreglan una bicicleta en el taller.',
      englishFull: 'Sara and Nico fix a bike in the workshop.',
      audioText: 'Sara and Nico fix a bike in the workshop.',
      maskedSentence: 'Sara and Nico _______ in the workshop.',
      targetWord: 'fix a bike',
      listeningOptions: ['fix a bike', 'fixes a bike', 'are fixing a bike'],
      blocks: ['Sara and Nico', 'fix a bike', 'in the workshop.'],
      imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
      explanation: 'Para sujetos plurales (Sara y Nico = They) en presente afirmativo se usa la estructura completa del verbo en forma base: "fix a bike".'
    },
    {
      id: 'b1-l1-q2',
      blockId: 1,
      lessonTopic: 'Subject + Verb + Complement',
      station: 'error_hunter',
      polarity: 'negative',
      spanish: 'El equipo no mantiene el lugar limpio.',
      englishFull: 'The team does not keep the place clean.',
      audioText: 'The team does not keep the place clean.',
      errorSentence: 'The team do not keeps the place clean.',
      wrongWord: 'do not keeps',
      correctWordFix: 'does not keep',
      errorOptions: ['does not keep', 'do not keep', 'does not keeps'],
      blocks: ['The team', 'does not keep', 'the place clean.'],
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      explanation: 'El sujeto colectivo singular "The team" (It) requiere la estructura completa "does not keep" con el verbo base sin "-s".'
    },
    {
      id: 'b1-l1-q3',
      blockId: 1,
      lessonTopic: 'Subject + Verb + Complement',
      station: 'transformation',
      polarity: 'interrogative',
      spanish: '¿Mantiene el equipo el lugar limpio?',
      englishFull: 'Does the team keep the place clean?',
      audioText: 'Does the team keep the place clean?',
      transformationPrompt: 'Construye la estructura interrogativa completa:',
      coreSlotPrefix: '',
      coreSlotSuffix: ' the place clean?',
      coreTargetValue: 'Does the team keep',
      coreOptions: ['Does the team keep', 'Do the team keep', 'Is the team keep'],
      blocks: ['Does the team keep', 'the place clean?'],
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      explanation: 'Las preguntas en presente con sujetos en tercera persona singular ("the team") usan la estructura "Does + sujeto + verbo base": "Does the team keep".'
    },
    {
      id: 'b1-l3-q1',
      blockId: 1,
      lessonTopic: 'To Be en negativo y pregunta',
      station: 'listening',
      polarity: 'interrogative',
      spanish: '¿Está Mara lista para subir al cuarto piso?',
      englishFull: 'Is Mara ready to go up to the fourth floor?',
      audioText: 'Is Mara ready to go up to the fourth floor?',
      maskedSentence: '_______ to go up to the fourth floor?',
      targetWord: 'Is Mara ready',
      listeningOptions: ['Is Mara ready', 'Does Mara ready', 'Mara is ready'],
      blocks: ['Is Mara ready', 'to go up to', 'the fourth floor?'],
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      explanation: 'Para preguntas con To Be se evalúa el núcleo invertido entero: "Is Mara ready...?" en lugar de "Mara is ready...".'
    },
    {
      id: 'b1-l3-q2',
      blockId: 1,
      lessonTopic: 'To Be en negativo y pregunta',
      station: 'error_hunter',
      polarity: 'negative',
      spanish: 'Ellos no están en la oficina hoy.',
      englishFull: 'They are not at the office today.',
      audioText: 'They are not at the office today.',
      errorSentence: 'They does not at the office today.',
      wrongWord: 'does not',
      correctWordFix: 'are not at the office',
      errorOptions: ['are not at the office', 'is not at the office', 'do not at the office'],
      blocks: ['They are not', 'at the office today.'],
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      explanation: 'Con el sujeto plural "They" y el verbo To Be en negativo se usa el núcleo completo "are not at the office".'
    },
    {
      id: 'b1-l4-q1',
      blockId: 1,
      lessonTopic: 'Verbos base y complementos',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Nosotros jugamos fútbol en el parque los sábados.',
      englishFull: 'We play soccer in the park on Saturdays.',
      audioText: 'We play soccer in the park on Saturdays.',
      maskedSentence: 'We _______ in the park on Saturdays.',
      targetWord: 'play soccer',
      listeningOptions: ['play soccer', 'plays soccer', 'are playing soccer'],
      blocks: ['We play soccer', 'in the park', 'on Saturdays.'],
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      explanation: 'Con sujetos en plural como "We", se usa la estructura verbal completa "play soccer".'
    },
    {
      id: 'b1-l6-q1',
      blockId: 1,
      lessonTopic: 'Preguntas básicas con Wh-',
      station: 'transformation',
      polarity: 'interrogative',
      spanish: '¿Dónde viven ellos?',
      englishFull: 'Where do they live?',
      audioText: 'Where do they live?',
      transformationPrompt: 'Construye la pregunta Wh- completa:',
      coreSlotPrefix: '',
      coreSlotSuffix: ' live?',
      coreTargetValue: 'Where do they',
      coreOptions: ['Where do they', 'Where does they', 'Where are they'],
      blocks: ['Where do they', 'live?'],
      imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
      explanation: 'Estructura Wh-: Palabras Wh- (Where) + Auxiliar (do) + Sujeto (they): "Where do they".'
    }
  ],

  // ==================== BLOQUE 2: PRESENTE ====================
  2: [
    {
      id: 'b2-l1-q1',
      blockId: 2,
      lessonTopic: 'Present Simple',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Ellos viven cerca de la estación de tren.',
      englishFull: 'They live near the train station.',
      audioText: 'They live near the train station.',
      maskedSentence: 'They _______ near the train station.',
      targetWord: 'live',
      listeningOptions: ['live', 'are living', 'lived'],
      blocks: ['They live', 'near the train station.'],
      imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
      explanation: 'Para una verdad general o hábito duradero en Present Simple se usa la forma base del verbo "live".'
    },
    {
      id: 'b2-l2-q1',
      blockId: 2,
      lessonTopic: 'Present Simple con he/she/it',
      station: 'error_hunter',
      polarity: 'affirmative',
      spanish: 'Ella enseña inglés en una academia.',
      englishFull: 'She teaches English at an academy.',
      audioText: 'She teaches English at an academy.',
      errorSentence: 'She teach English at an academy.',
      wrongWord: 'teach English',
      correctWordFix: 'teaches English',
      errorOptions: ['teaches English', 'teaching English', 'is teach English'],
      blocks: ['She teaches English', 'at an academy.'],
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
      explanation: 'Con he, she o it en afirmativo en Present Simple, se requiere la conjugación completa "teaches English".'
    },
    {
      id: 'b2-l2-q2',
      blockId: 2,
      lessonTopic: 'Present Simple con he/she/it',
      station: 'error_hunter',
      polarity: 'negative',
      spanish: 'Él no come carne los viernes.',
      englishFull: 'He does not eat meat on Fridays.',
      audioText: 'He does not eat meat on Fridays.',
      errorSentence: 'He does not eats meat on Fridays.',
      wrongWord: 'does not eats',
      correctWordFix: 'does not eat',
      errorOptions: ['does not eat', 'does not eats', 'is not eat'],
      blocks: ['He does not eat', 'meat on Fridays.'],
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      explanation: 'Regla de oro: la estructura negativa entera es "does not eat", con el verbo principal en su forma base sin "-s".'
    },
    {
      id: 'b2-l2-q3',
      blockId: 2,
      lessonTopic: 'Present Simple con he/she/it',
      station: 'transformation',
      polarity: 'interrogative',
      spanish: '¿Trabaja ella en el hospital?',
      englishFull: 'Does she work at the hospital?',
      audioText: 'Does she work at the hospital?',
      transformationPrompt: 'Transforma a pregunta con tercera persona:',
      coreSlotPrefix: '',
      coreSlotSuffix: ' at the hospital?',
      coreTargetValue: 'Does she work',
      coreOptions: ['Does she work', 'Do she work', 'Does she works'],
      blocks: ['Does she work', 'at the hospital?'],
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      explanation: 'Auxiliar "Does" + Sujeto "she" + Verbo base "work": "Does she work".'
    }
  ],

  // ==================== BLOQUE 3: PASADO Y HÁBITOS ====================
  3: [
    {
      id: 'b3-l1-q1',
      blockId: 3,
      lessonTopic: 'Past Simple',
      station: 'transformation',
      polarity: 'affirmative',
      spanish: 'Nosotros visitamos el museo ayer.',
      englishFull: 'We visited the museum yesterday.',
      audioText: 'We visited the museum yesterday.',
      transformationPrompt: 'Completa la estructura del pasado simple:',
      coreSlotPrefix: 'We ',
      coreSlotSuffix: ' yesterday.',
      coreTargetValue: 'visited the museum',
      coreOptions: ['visited the museum', 'visit the museum', 'were visiting the museum'],
      blocks: ['We visited', 'the museum yesterday.'],
      imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800',
      explanation: 'Para eventos concluidos en el pasado se usa el núcleo completo "visited the museum".'
    },
    {
      id: 'b3-l1-q2',
      blockId: 3,
      lessonTopic: 'Past Simple con did',
      station: 'error_hunter',
      polarity: 'negative',
      spanish: 'Ellos no llamaron al médico anoche.',
      englishFull: 'They did not call the doctor last night.',
      audioText: 'They did not call the doctor last night.',
      errorSentence: 'They did not called the doctor last night.',
      wrongWord: 'did not called',
      correctWordFix: 'did not call',
      errorOptions: ['did not call', 'did not called', 'were not call'],
      blocks: ['They did not call', 'the doctor last night.'],
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      explanation: 'Tras el auxiliar en pasado "did not", el verbo principal vuelve a su forma base: "did not call".'
    },
    {
      id: 'b3-l1-q3',
      blockId: 3,
      lessonTopic: 'Past Simple con did',
      station: 'transformation',
      polarity: 'interrogative',
      spanish: '¿Compraste tú el boleto?',
      englishFull: 'Did you buy the ticket?',
      audioText: 'Did you buy the ticket?',
      transformationPrompt: 'Construye la pregunta en pasado:',
      coreSlotPrefix: '',
      coreSlotSuffix: ' the ticket?',
      coreTargetValue: 'Did you buy',
      coreOptions: ['Did you buy', 'Did you bought', 'Were you buy'],
      blocks: ['Did you buy', 'the ticket?'],
      imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800',
      explanation: 'Pregunta en pasado: Auxiliar "Did" + Sujeto "you" + Verbo base "buy": "Did you buy".'
    }
  ],

  // ==================== BLOQUE 4: FUTURO E INTENCIONES ====================
  4: [
    {
      id: 'b4-l1-q1',
      blockId: 4,
      lessonTopic: 'Future Simple with will',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Te ayudaré con la maleta.',
      englishFull: 'I will help you with the suitcase.',
      audioText: 'I will help you with the suitcase.',
      maskedSentence: 'I _______ with the suitcase.',
      targetWord: 'will help you',
      listeningOptions: ['will help you', 'am help you', 'helped you'],
      blocks: ['I will help you', 'with the suitcase.'],
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      explanation: 'Decisión espontánea o promesa futura: núcleo completo "will help you".'
    },
    {
      id: 'b4-l2-q1',
      blockId: 4,
      lessonTopic: 'Be Going To',
      station: 'transformation',
      polarity: 'negative',
      spanish: 'Ellos no van a viajar mañana.',
      englishFull: 'They are not going to travel tomorrow.',
      audioText: 'They are not going to travel tomorrow.',
      transformationPrompt: 'Completa el futuro planificado negativo:',
      coreSlotPrefix: 'They ',
      coreSlotSuffix: ' tomorrow.',
      coreTargetValue: 'are not going to travel',
      coreOptions: ['are not going to travel', 'do not going to travel', 'will not going to travel'],
      blocks: ['They are not going', 'to travel tomorrow.'],
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      explanation: 'Futuro de plan previo en negativo: núcleo "are not going to travel".'
    }
  ],

  // ==================== BLOQUE 5: MODALES Y HABILIDADES ====================
  5: [
    {
      id: 'b5-l1-q1',
      blockId: 5,
      lessonTopic: 'Can / Could',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Ella puede hablar tres idiomas fluidamente.',
      englishFull: 'She can speak three languages fluently.',
      audioText: 'She can speak three languages fluently.',
      maskedSentence: 'She _______ fluently.',
      targetWord: 'can speak three languages',
      listeningOptions: ['can speak three languages', 'can speaks three languages', 'is can speak three languages'],
      blocks: ['She can speak', 'three languages', 'fluently.'],
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      explanation: 'Los verbos modales como "can" van seguidos directamente del verbo base sin "-s" ni "to": "can speak three languages".'
    },
    {
      id: 'b5-l2-q1',
      blockId: 5,
      lessonTopic: 'Must / Have to / Need to',
      station: 'error_hunter',
      polarity: 'negative',
      spanish: 'No debes tocar ese cable.',
      englishFull: 'You must not touch that wire.',
      audioText: 'You must not touch that wire.',
      errorSentence: 'You must not to touch that wire.',
      wrongWord: 'must not to touch',
      correctWordFix: 'must not touch',
      errorOptions: ['must not touch', 'must not to touch', 'do not must touch'],
      blocks: ['You must not', 'touch that wire.'],
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      explanation: 'Tras el modal de prohibición "must not" se usa la estructura directa "must not touch" sin partícula "to".'
    }
  ],

  // ==================== BLOQUE 6: CONDICIONALES ====================
  6: [
    {
      id: 'b6-l1-q1',
      blockId: 6,
      lessonTopic: 'First Conditional',
      station: 'transformation',
      polarity: 'affirmative',
      spanish: 'Si estudias, pasarás el examen.',
      englishFull: 'If you study, you will pass the exam.',
      audioText: 'If you study, you will pass the exam.',
      transformationPrompt: 'Completa la estructura del primer condicional:',
      coreSlotPrefix: 'If you study, ',
      coreSlotSuffix: '.',
      coreTargetValue: 'you will pass the exam',
      coreOptions: ['you will pass the exam', 'you pass the exam', 'you would pass the exam'],
      blocks: ['If you study,', 'you will pass', 'the exam.'],
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
      explanation: 'Primer condicional: Cláusula de condición en Present Simple (If you study) + Resultado completo "you will pass the exam".'
    }
  ],

  // ==================== BLOQUE 7: VOZ PASIVA ====================
  7: [
    {
      id: 'b7-l1-q1',
      blockId: 7,
      lessonTopic: 'Passive Present Simple',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'El informe es revisado por el director todos los días.',
      englishFull: 'The report is reviewed by the director every day.',
      audioText: 'The report is reviewed by the director every day.',
      maskedSentence: 'The report _______ every day.',
      targetWord: 'is reviewed by the director',
      listeningOptions: ['is reviewed by the director', 'is review by the director', 'reviews by the director'],
      blocks: ['The report', 'is reviewed by', 'the director every day.'],
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      explanation: 'Voz pasiva en presente: Objeto paciente + To Be (is) + Participio Pasado (reviewed): "is reviewed by the director".'
    }
  ],

  // ==================== BLOQUE 8: ESTILO INDIRECTO (REPORTED SPEECH) ====================
  8: [
    {
      id: 'b8-l1-q1',
      blockId: 8,
      lessonTopic: 'Reported Statements',
      station: 'transformation',
      polarity: 'affirmative',
      spanish: 'Ella dijo que vivía en Londres.',
      englishFull: 'She said that she lived in London.',
      audioText: 'She said that she lived in London.',
      transformationPrompt: 'Completa la concordancia de tiempos en estilo indirecto:',
      coreSlotPrefix: 'She said that ',
      coreSlotSuffix: '.',
      coreTargetValue: 'she lived in London',
      coreOptions: ['she lived in London', 'she lives in London', 'she is living in London'],
      blocks: ['She said that', 'she lived in London.'],
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      explanation: 'En estilo indirecto (Reported Speech), el Present Simple retrocede al Past Simple: "she lived in London".'
    }
  ],

  // ==================== BLOQUE 9: MODALES AVANZADOS ====================
  9: [
    {
      id: 'b9-l1-q1',
      blockId: 9,
      lessonTopic: 'Modal Perfect',
      station: 'listening',
      polarity: 'affirmative',
      spanish: 'Deberías haber llamado antes de venir.',
      englishFull: 'You should have called before coming.',
      audioText: 'You should have called before coming.',
      maskedSentence: 'You _______ before coming.',
      targetWord: 'should have called',
      listeningOptions: ['should have called', 'should call', 'should had called'],
      blocks: ['You should have called', 'before coming.'],
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      explanation: 'Modal perfecto para arrepentimiento o consejo pasado: "should have called".'
    }
  ],

  // ==================== BLOQUE 10: ESTRUCTURAS COMPLEJAS ====================
  10: [
    {
      id: 'b10-l1-q1',
      blockId: 10,
      lessonTopic: 'Causatives',
      station: 'transformation',
      polarity: 'affirmative',
      spanish: 'Hice reparar mi auto ayer.',
      englishFull: 'I had my car repaired yesterday.',
      audioText: 'I had my car repaired yesterday.',
      transformationPrompt: 'Completa la estructura causativa:',
      coreSlotPrefix: 'I ',
      coreSlotSuffix: ' yesterday.',
      coreTargetValue: 'had my car repaired',
      coreOptions: ['had my car repaired', 'repaired my car', 'have my car repair'],
      blocks: ['I had my car', 'repaired yesterday.'],
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      explanation: 'Estructura causativa (servicio por un tercero): Have/Get + Objeto + Participio Pasado ("had my car repaired").'
    }
  ],

  // ==================== BLOQUE 11: CONSOLIDACIÓN B2 / MASTER ====================
  11: [
    {
      id: 'b11-l1-q1',
      blockId: 11,
      lessonTopic: 'Indirect Questions',
      station: 'transformation',
      polarity: 'interrogative',
      spanish: '¿Sabes dónde está la estación de tren?',
      englishFull: 'Do you know where the train station is?',
      audioText: 'Do you know where the train station is?',
      transformationPrompt: 'Construye la pregunta indirecta nivel B2 (sin invertir el sujeto final):',
      coreSlotPrefix: 'Do you know ',
      coreSlotSuffix: '?',
      coreTargetValue: 'where the train station is',
      coreOptions: ['where the train station is', 'where is the train station', 'where does the train station'],
      blocks: ['Do you know', 'where the train station is?'],
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      explanation: 'Regla de oro de preguntas indirectas B2: tras la frase introductoria ("Do you know..."), el orden vuelve a ser Afirmativo: Sujeto + Verbo ("where the train station is").'
    },
    {
      id: 'b11-l1-q2',
      blockId: 11,
      lessonTopic: 'Wh- Subject Questions',
      station: 'error_hunter',
      polarity: 'interrogative',
      spanish: '¿Quién escribió este libro?',
      englishFull: 'Who wrote this book?',
      audioText: 'Who wrote this book?',
      errorSentence: 'Who did write this book?',
      wrongWord: 'did write',
      correctWordFix: 'wrote this book',
      errorOptions: ['wrote this book', 'did write this book', 'was write this book'],
      blocks: ['Who wrote', 'this book?'],
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      explanation: 'En Subject Questions (donde la palabra Wh- es el sujeto de la acción), NO se usa el auxiliar "did". Se evalúa la estructura completa: "Who wrote this book?".'
    }
  ]
};
