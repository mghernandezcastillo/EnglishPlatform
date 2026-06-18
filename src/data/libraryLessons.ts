import { Lesson } from '../types';

export const libraryLessons: Lesson[] = [
  // ==============================================
  // CATEGORY: VERB TO BE
  // ==============================================
  {
    id: 'verb_to_be_1',
    icon3D: '⭐',
  grammar: [
    {
        title: "Presente Simple del \"To Be\"",
        explanation: "Describe hechos, edades, y estados actuales.",
        structure: "Afirmativo: Sujeto + am/is/are + Complemento",
        examples: [
            "He is 20 years old.",
            "We are tired."
        ]
    },
    {
        title: "Negativo y Pregunta",
        explanation: "Para negar se añade \"not\" después del verbo. Para preguntar, el verbo va antes del sujeto.",
        structure: "Negativo: Sujeto + am/is/are + not\nPregunta: Am/Is/Are + Sujeto + ?",
        examples: [
            "She is not (isn't) here.",
            "Are they friends?"
        ]
    }
],
    categoryId: 'verb_to_be',
    title: 'Verb to Be: Affirmative & Negative',
    etapa: 'Verb to Be',
    objetivo: 'Entender el uso del verbo To Be (Ser o Estar) en presente, en su forma afirmativa y negativa.',
    lenguajeClave: 'I am a student. He is not tired. They are happy.',
    practica: 'A: Are you a doctor? B: No, I am not. I am a teacher. A: Is she at home? B: Yes, she is.',
    tarea: 'Escribe 5 oraciones afirmativas y 5 negativas describiendo a tu familia.',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'I am', translation: 'Yo soy / estoy', iconName: 'User', color: 'from-blue-400 to-indigo-500' },
      { word: 'You are', translation: 'Tú eres / estás', iconName: 'Users', color: 'from-cyan-400 to-blue-500' },
      { word: 'He / She / It is', translation: 'Él/Ella/Eso es / está', iconName: 'UserCheck', color: 'from-emerald-400 to-teal-500' },
      { word: 'We are', translation: 'Nosotros somos / estamos', iconName: 'Users', color: 'from-orange-400 to-rose-500' },
      { word: 'They are', translation: 'Ellos son / están', iconName: 'Globe', color: 'from-purple-400 to-pink-500' },
      { word: 'Happy', translation: 'Feliz', iconName: 'Smile', color: 'from-yellow-400 to-amber-500' },
      { word: 'Tired', translation: 'Cansado', iconName: 'Battery', color: 'from-gray-400 to-slate-500' }
    ],
    quiz: [
      {
        question: '¿Cuál es la forma correcta para "Ella es inteligente"?',
        options: [
          { id: 'a', text: 'She am smart', isCorrect: false },
          { id: 'b', text: 'She are smart', isCorrect: false },
          { id: 'c', text: 'She is smart', isCorrect: true }
        ],
        feedbackCorrect: '¡Exacto! "Is" es para He, She y It.',
        feedbackIncorrect: 'Recuerda que para "She" se usa "is".'
      },
      {
        question: 'Elige la traducción correcta de "Nosotros estamos cansados"',
        options: [
          { id: 'a', text: 'We are happy', isCorrect: false },
          { id: 'b', text: 'We are tired', isCorrect: true },
          { id: 'c', text: 'They are tired', isCorrect: false }
        ],
        feedbackCorrect: '¡Muy bien!',
        feedbackIncorrect: '"Cansados" se dice "tired" y el pronombre "nosotros" es "we"'
      },
      {
        question: 'Identifica la oración incorrecta:',
        options: [
          { id: 'a', text: 'I am a doctor', isCorrect: false },
          { id: 'b', text: 'He is my brother', isCorrect: false },
          { id: 'c', text: 'You is my friend', isCorrect: true }
        ],
        feedbackCorrect: 'Excelente. "You" siempre usa "are".',
        feedbackIncorrect: 'Revisa el uso de am/is/are. Hay un error con el verbo para "You".'
      },
      {
        question: '¿Cómo se niega "They are students"?',
        options: [
          { id: 'a', text: 'They are not students', isCorrect: true },
          { id: 'b', text: 'They don\'t students', isCorrect: false },
          { id: 'c', text: 'They not are students', isCorrect: false }
        ],
        feedbackCorrect: '¡Perfecto!',
        feedbackIncorrect: 'Con el verbo To be solo debemos agregar "not" después del verbo.'
      },
      {
        question: '"It ___ a rainy day."',
        options: [
          { id: 'a', text: 'are', isCorrect: false },
          { id: 'b', text: 'am', isCorrect: false },
          { id: 'c', text: 'is', isCorrect: true }
        ],
        feedbackCorrect: '¡Eso es!',
        feedbackIncorrect: '"It" es tercera persona del singular.'
      }
    ]
  },
  {
    id: 'verb_to_be_2',
    icon3D: '⏳',
  grammar: [
    {
        title: "Pasado Simple del \"To Be\"",
        explanation: "Se utiliza para describir acciones o estados acabados. \"I, he, she, it\" usan \"was\", y \"you, we, they\" usan \"were\".",
        structure: "Afirmativo: Sujeto + was/were + Complemento",
        examples: [
            "I was tired yesterday.",
            "They were at home."
        ]
    },
    {
        title: "Negativo y Pregunta",
        explanation: "Añadimos \"not\" a was/were (wasn't/weren't).",
        structure: "Negativo: Sujeto + wasn't/weren't\nPregunta: Was/Were + Sujeto + ?",
        examples: [
            "He wasn't happy.",
            "Were you there?"
        ]
    }
],
    categoryId: 'verb_to_be',
    title: 'Verb to Be: Past (Was / Were)',
    etapa: 'Verb to Be',
    objetivo: 'Usar el verbo to be en pasado: was y were, para describir situaciones pasadas.',
    lenguajeClave: 'I was happy. They were at the park.',
    practica: 'A: Were you at home yesterday? B: Yes, I was.',
    tarea: 'Escribe 5 oraciones sobre dónde estabas la semana pasada.',
    imageUrl: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073&auto=format&fit=crop',
    vocabulario: [
      { word: 'I / He / She / It was', translation: 'Yo/él/ella/eso era / estaba', iconName: 'Clock', color: 'from-slate-400 to-gray-500' },
      { word: 'We / You / They were', translation: 'Nosotros / tú / ellos éramos / estaban', iconName: 'Users', color: 'from-blue-400 to-indigo-500' },
      { word: 'Yesterday', translation: 'Ayer', iconName: 'Calendar', color: 'from-amber-400 to-orange-500' }
    ],
    quiz: [
      {
        question: '¿Qué verbo to be en pasado le corresponde a "They"?',
        options: [
          { id: 'a', text: 'was', isCorrect: false },
          { id: 'b', text: 'were', isCorrect: true },
          { id: 'c', text: 'are', isCorrect: false }
        ],
        feedbackCorrect: '¡Correcto!',
        feedbackIncorrect: 'Para el plural (we, you, they) se usa "were".'
      },
      {
        question: 'Elige la frase correcta:',
        options: [
          { id: 'a', text: 'She were my teacher', isCorrect: false },
          { id: 'b', text: 'She was my teacher', isCorrect: true },
          { id: 'c', text: 'She is my teacher yesterday', isCorrect: false }
        ],
        feedbackCorrect: '¡Sí! "She" va con "was".',
        feedbackIncorrect: 'El pasado del verbo "To be" en singular es "was".'
      },
      {
        question: '¿Cómo preguntas "¿Estabas en casa?"',
        options: [
          { id: 'a', text: 'Were you at home?', isCorrect: true },
          { id: 'b', text: 'Was you at home?', isCorrect: false },
          { id: 'c', text: 'Did you be at home?', isCorrect: false }
        ],
        feedbackCorrect: '¡Excelente! En preguntas el verbo to be va primero.',
        feedbackIncorrect: 'Invierte el orden y recuerda que "you" usa "were".'
      },
      {
        question: 'Reordena mentalmente: (was / John / yesterday / happy / not)',
        options: [
          { id: 'a', text: 'John yesterday not was happy', isCorrect: false },
          { id: 'b', text: 'John not was happy yesterday', isCorrect: false },
          { id: 'c', text: 'John was not happy yesterday', isCorrect: true }
        ],
        feedbackCorrect: '¡Correcto! Sujeto + verbo + not + complemento.',
        feedbackIncorrect: 'Es Sujeto + verbo + not + complemento.'
      },
      {
        question: '¿Cuál es la forma correcta para "It"?',
        options: [
          { id: 'a', text: 'It was', isCorrect: true },
          { id: 'b', text: 'It were', isCorrect: false }
        ],
        feedbackCorrect: 'Genial.',
        feedbackIncorrect: '"It" es singular por tanto usa "was".'
      }
    ]
  },

  // ==============================================
  // CATEGORY: DO / DOES
  // ==============================================
  {
    id: 'do_does_1',
    icon3D: '🛠️',
  grammar: [
    {
        title: "Presente Simple: Do y Does",
        explanation: "Para todos los demás verbos (que no son \"to be\"), usamos el auxiliar \"do\" o \"does\" para negar y preguntar. \"Does\" se usa con He, She, y It.",
        structure: "Negativo: Sujeto + don't/doesn't + Verbo en infinitivo\nPregunta: Do/Does + Sujeto + Verbo en infinitivo + ?",
        examples: [
            "I do not (don't) like apples.",
            "Does she play tennis? Yes, she does."
        ]
    }
],
    categoryId: 'do_does',
    title: 'Auxiliary Do / Does: Present Simple',
    etapa: 'Do / Does',
    objetivo: 'Utilizar correctamente Do y Does para formar preguntas y negaciones.',
    lenguajeClave: 'I do not like coffee. Does she play tennis?',
    practica: 'A: Do you speak English? B: Yes, I do.',
    tarea: 'Haz 3 preguntas usando "do" y 3 usando "does" a alguien de tu familia.',
    imageUrl: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop',
    vocabulario: [
      { word: 'Do / Don\'t', translation: 'Para I, you, we, they', iconName: 'Check', color: 'from-green-400 to-emerald-500' },
      { word: 'Does / Doesn\'t', translation: 'Para he, she, it', iconName: 'Bookmark', color: 'from-blue-400 to-cyan-500' },
      { word: 'Like', translation: 'Gustar', iconName: 'Heart', color: 'from-red-400 to-rose-500' },
      { word: 'Play', translation: 'Jugar/tocar un instrumento', iconName: 'PlayCircle', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Work', translation: 'Trabajar', iconName: 'Briefcase', color: 'from-orange-400 to-amber-500' }
    ],
    quiz: [
      {
        question: '¿Qué auxiliar usas para "She"?',
        options: [
          { id: 'a', text: 'Do', isCorrect: false },
          { id: 'b', text: 'Does', isCorrect: true },
          { id: 'c', text: 'Are', isCorrect: false }
        ],
        feedbackCorrect: '¡Correcto!',
        feedbackIncorrect: 'Siempre "does" para he, she, it.'
      },
      {
        question: 'Elige la oración bien construida:',
        options: [
          { id: 'a', text: 'Do he like pizza?', isCorrect: false },
          { id: 'b', text: 'Does he like pizza?', isCorrect: true },
          { id: 'c', text: 'Does he likes pizza?', isCorrect: false }
        ],
        feedbackCorrect: '¡Acertaste! Cuando usas "does", el verbo principal no lleva la "s".',
        feedbackIncorrect: 'Piensa en el auxiliar para la tercera persona y recuerda que el verbo queda en forma base.'
      },
      {
        question: 'Para "I, You, We, They" en negativo, se usa:',
        options: [
          { id: 'a', text: 'Don\'t', isCorrect: true },
          { id: 'b', text: 'Doesn\'t', isCorrect: false },
          { id: 'c', text: 'Aren\'t', isCorrect: false }
        ],
        feedbackCorrect: '¡Excelente!',
        feedbackIncorrect: 'El negativo de "do" es "don\'t".'
      },
      {
        question: '___ they work on weekends?',
        options: [
          { id: 'a', text: 'Does', isCorrect: false },
          { id: 'b', text: 'Do', isCorrect: true },
          { id: 'c', text: 'Are', isCorrect: false }
        ],
        feedbackCorrect: 'Así es.',
        feedbackIncorrect: '"They" usa "do" para preguntas.'
      },
      {
        question: '¿Cual verbo auxiliar usamos para "The dog" (It)?',
        options: [
          { id: 'a', text: 'Do', isCorrect: false },
          { id: 'b', text: 'Does', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien!',
        feedbackIncorrect: '"The dog" es como decir "It", así que usamos Does.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: NUMBERS
  // ==============================================
  {
    id: 'numbers_1',
    icon3D: '🥇',
    categoryId: 'numbers',
    title: 'Cardinal & Ordinal Numbers',
    etapa: 'Numbers',
    objetivo: 'Aprender números (1, 2, 3...) y sus contrapartes ordinales (1st, 2nd, 3rd...).',
    lenguajeClave: 'I am the first in line. I have two brothers. Today is the third of May.',
    practica: 'A: When is your birthday? B: It is on the first of May.',
    tarea: 'Escribe tu fecha de nacimiento y los dígitos de tu número de teléfono en inglés.',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'First (1st)', translation: 'Primero', iconName: 'Medal', color: 'from-amber-400 to-yellow-500' },
      { word: 'Second (2nd)', translation: 'Segundo', iconName: 'Award', color: 'from-gray-300 to-slate-400' },
      { word: 'Third (3rd)', translation: 'Tercero', iconName: 'Award', color: 'from-orange-400 to-amber-700' },
      { word: 'Eleven', translation: 'Once', iconName: 'Hash', color: 'from-blue-400 to-indigo-500' },
      { word: 'Twenty', translation: 'Veinte', iconName: 'Hash', color: 'from-teal-400 to-emerald-500' }
    ],
    quiz: [
      {
        question: '¿Cómo se dice "Segundo"?',
        options: [
          { id: 'a', text: 'Two', isCorrect: false },
          { id: 'b', text: 'Second', isCorrect: true },
          { id: 'c', text: 'Twoth', isCorrect: false }
        ],
        feedbackCorrect: '¡Correcto!',
        feedbackIncorrect: 'Two es dos (cardinal), Second es segundo (ordinal).'
      },
      {
        question: '¿Qué número es "Forty"?',
        options: [
          { id: 'a', text: '14', isCorrect: false },
          { id: 'b', text: '40', isCorrect: true },
          { id: 'c', text: '4', isCorrect: false }
        ],
        feedbackCorrect: '¡Genial! 40 es Forty.',
        feedbackIncorrect: 'Four es 4, Fourteen es 14, Forty es 40.'
      },
      {
        question: '¿Y "Tercero"?',
        options: [
          { id: 'a', text: 'Three', isCorrect: false },
          { id: 'b', text: 'Third', isCorrect: true },
          { id: 'c', text: 'Threeth', isCorrect: false }
        ],
        feedbackCorrect: '¡Sí!',
        feedbackIncorrect: 'El ordinal de Three es Third.'
      },
      {
        question: 'The ___ of July.',
        options: [
          { id: 'a', text: 'four', isCorrect: false },
          { id: 'b', text: 'fourth', isCorrect: true }
        ],
        feedbackCorrect: 'Para fechas se usan ordinales.',
        feedbackIncorrect: 'Recuerda que para fechas se usan ordinales (fourth).'
      },
      {
        question: '¿Qué número es "Twelve"?',
        options: [
          { id: 'a', text: '20', isCorrect: false },
          { id: 'b', text: '12', isCorrect: true },
          { id: 'c', text: '2', isCorrect: false }
        ],
        feedbackCorrect: 'Doce es twelve.',
        feedbackIncorrect: 'Es 12.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: PRESENT TENSES
  // ==============================================
  {
    id: 'present_tenses_1',
    icon3D: '🎸',
  grammar: [
    {
        title: "Presente Simple",
        explanation: "Se usa para hábitos, rutinas y verdades generales.",
        structure: "Sujeto + Verbo (se le añade -s o -es para he/she/it)",
        examples: [
            "I play guitar.",
            "He works every day."
        ]
    },
    {
        title: "Presente Continuo",
        explanation: "Describe acciones que están sucediendo en este momento o alrededor del presente.",
        structure: "Sujeto + am/is/are + Verbo(ing)",
        examples: [
            "I am playing guitar right now.",
            "She is studying for her test."
        ]
    }
],
    categoryId: 'present_tenses',
    title: 'Present Simple vs Present Continuous',
    etapa: 'Present Tenses',
    objetivo: 'Diferenciar entre "Rutinas" y "Acciones en el momento".',
    lenguajeClave: 'I drink coffee every day. I am drinking water right now.',
    practica: 'A: What do you do? B: I am a developer. A: What are you doing? B: Coding.',
    tarea: 'Describe una rutina que tienes y una acción que estás haciendo en este preciso momento.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop',
    vocabulario: [
      { word: 'Usually', translation: 'Usualmente', iconName: 'RotateCcw', color: 'from-amber-400 to-yellow-500' },
      { word: 'Right now', translation: 'Ahora mismo', iconName: 'Zap', color: 'from-red-400 to-rose-500' },
      { word: 'Every day', translation: 'Todos los días', iconName: 'CalendarDays', color: 'from-blue-400 to-indigo-500' },
      { word: 'Currently', translation: 'Actualmente', iconName: 'Activity', color: 'from-emerald-400 to-teal-500' }
    ],
    quiz: [
      {
        question: 'Acción que sucede en este momento:',
        options: [
          { id: 'a', text: 'I play guitar', isCorrect: false },
          { id: 'b', text: 'I am playing guitar', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien!',
        feedbackIncorrect: 'Debe terminar en -ing (Present Continuous).'
      },
      {
        question: 'Acción que es una rutina:',
        options: [
          { id: 'a', text: 'He is working every day', isCorrect: false },
          { id: 'b', text: 'He works every day', isCorrect: true }
        ],
        feedbackCorrect: 'El Present Simple se usa para rutinas.',
        feedbackIncorrect: 'Para rutinas se usa el presente simple ("works").'
      },
      {
        question: '"Look! The dog ______".',
        options: [
          { id: 'a', text: 'runs', isCorrect: false },
          { id: 'b', text: 'is running', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien! El "Look!" nos dice que está pasando ahorita mismo.',
        feedbackIncorrect: 'Como lo estás mirando suceder ahora mismo, es continuo.'
      },
      {
        question: '¿Cómo niegas una rutina (I eat meat)?',
        options: [
          { id: 'a', text: 'I am not eating meat', isCorrect: false },
          { id: 'b', text: 'I don\'t eat meat', isCorrect: true }
        ],
        feedbackCorrect: 'Para rutinas usamos "don\'t" o "doesn\'t".',
        feedbackIncorrect: 'Es una rutina. Debes usar "don\'t".'
      },
      {
        question: 'Completa: "I usually ___ at 7 AM."',
        options: [
          { id: 'a', text: 'waking up', isCorrect: false },
          { id: 'b', text: 'wake up', isCorrect: true },
          { id: 'c', text: 'am waking up', isCorrect: false }
        ],
        feedbackCorrect: '¡Perfecto!',
        feedbackIncorrect: 'Es una rutina por el adverbio usually. Va en presente simple.'
      }
    ]
  },
  {
    id: 'present_tenses_2',
    icon3D: '✈️',
  grammar: [
    {
        title: "Presente Perfecto",
        explanation: "Para referirnos a un evento del pasado reciente o experiencias sin especificar cuándo sucedieron.",
        structure: "Sujeto + have/has + Verbo en Participio Pasado",
        examples: [
            "I have seen that movie.",
            "She has already finished."
        ]
    }
],
    categoryId: 'present_tenses',
    title: 'Present Perfect',
    etapa: 'Present Tenses',
    objetivo: 'Hablar de acciones pasadas con relevancia en el presente, experiencias de vida ("alguna vez has...").',
    lenguajeClave: 'I have eaten sushi before. She has visited London twice.',
    practica: 'A: Have you seen the movie? B: Yes, I have.',
    tarea: 'Escribe 3 cosas que "has hecho" en tu vida y 3 lugares a los que "has viajado".',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    vocabulario: [
      { word: 'Have / Has', translation: 'He, Has, Ha...', iconName: 'CheckCircle', color: 'from-blue-400 to-cyan-500' },
      { word: 'Ever', translation: 'Alguna vez', iconName: 'Globe', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Already', translation: 'Ya', iconName: 'CheckCheck', color: 'from-emerald-400 to-teal-500' },
      { word: 'Yet', translation: 'Aún / Todavía', iconName: 'Clock', color: 'from-rose-400 to-red-500' }
    ],
    quiz: [
      {
        question: '¿Qué auxiliar se usa para el Present Perfect (He/She/It)?',
        options: [
          { id: 'a', text: 'Have', isCorrect: false },
          { id: 'b', text: 'Has', isCorrect: true }
        ],
        feedbackCorrect: '¡Exacto!',
        feedbackIncorrect: 'Es "has" para tercera persona del singular.'
      },
      {
        question: 'Selecciona la oración correcta:',
        options: [
          { id: 'a', text: 'I have see that movie', isCorrect: false },
          { id: 'b', text: 'I have seen that movie', isCorrect: true },
          { id: 'c', text: 'I has seen that movie', isCorrect: false }
        ],
        feedbackCorrect: 'El verbo se usa en participio (seen).',
        feedbackIncorrect: 'Recuerda que el verbo principal debe estar en participio pasado.'
      },
      {
        question: '¿Cómo preguntas si alguien ha estado en Francia?',
        options: [
          { id: 'a', text: 'Have you ever been to France?', isCorrect: true },
          { id: 'b', text: 'Did you went to France?', isCorrect: false },
          { id: 'c', text: 'Do you been to France?', isCorrect: false }
        ],
        feedbackCorrect: '¡Perfecto!',
        feedbackIncorrect: 'Con present perfect usamos el auxiliar have.'
      },
      {
        question: '"She hasn’t finished her homework _____."',
        options: [
          { id: 'a', text: 'already', isCorrect: false },
          { id: 'b', text: 'yet', isCorrect: true }
        ],
        feedbackCorrect: '"Yet" se usa frecuentemente al final de negaciones y preguntas.',
        feedbackIncorrect: 'En oraciones negativas se usa "Yet".'
      },
      {
        question: 'El participio pasado de "Go" es:',
        options: [
          { id: 'a', text: 'Went', isCorrect: false },
          { id: 'b', text: 'Gone', isCorrect: true },
          { id: 'c', text: 'Goed', isCorrect: false }
        ],
        feedbackCorrect: '¡Genial! Go -> Went -> Gone.',
        feedbackIncorrect: 'Go -> Went -> Gone.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: PAST TENSES
  // ==============================================
  {
    id: 'past_tenses_1',
    icon3D: '🌧️',
  grammar: [
    {
        title: "Pasado Simple",
        explanation: "Acciones completamente terminadas en el pasado.",
        structure: "Sujeto + Verbo en Pasado (regular -ed / irregular)",
        examples: [
            "I ate pizza yesterday.",
            "She visited Paris."
        ]
    },
    {
        title: "Pasado Continuo",
        explanation: "Acciones que estaban en progreso en un momento específico del pasado.",
        structure: "Sujeto + was/were + Verbo(ing)",
        examples: [
            "I was taking a shower when the phone rang.",
            "They were sleeping."
        ]
    }
],
    categoryId: 'past_tenses',
    title: 'Past Simple & Continuous',
    etapa: 'Past Tenses',
    objetivo: 'Hablar sobre interrupciones en el pasado y eventos simultáneos.',
    lenguajeClave: 'I was sleeping when the phone rang.',
    practica: 'A: What were you doing when the lights went out? B: I was cooking.',
    tarea: 'Escribe un pequeño párrafo sobre qué estabas haciendo ayer a las 8 de la noche cuando algo te interrumpió.',
    imageUrl: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=1974&auto=format&fit=crop',
    vocabulario: [
      { word: 'When', translation: 'Cuando (interrupción breve)', iconName: 'AlertCircle', color: 'from-red-400 to-rose-500' },
      { word: 'While', translation: 'Mientras (acción larga)', iconName: 'Activity', color: 'from-orange-400 to-amber-500' },
      { word: 'Was / Were', translation: 'Estaba / Estábamos', iconName: 'Clock', color: 'from-blue-400 to-indigo-500' },
      { word: 'Ring / Rang', translation: 'Sonar / Sonó', iconName: 'Bell', color: 'from-amber-400 to-yellow-500' }
    ],
    quiz: [
      {
        question: 'Completa: I ______ watching TV when she arrived.',
        options: [
          { id: 'a', text: 'was', isCorrect: true },
          { id: 'b', text: 'am', isCorrect: false },
          { id: 'c', text: 'were', isCorrect: false }
        ],
        feedbackCorrect: '¡Genial! Pasado continuo usa was para "I".',
        feedbackIncorrect: 'Debe ser en pasado "was".'
      },
      {
        question: 'Elige la oración que describe una acción que fue interrumpida:',
        options: [
          { id: 'a', text: 'I took a shower when the phone rang.', isCorrect: false },
          { id: 'b', text: 'I was taking a shower when the phone rang.', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien! El continuo muestra que estabas en medio de la acción.',
        feedbackIncorrect: 'El continuo sirve para mostrar "progreso" antes de que algo más sucediera.'
      },
      {
        question: '¿Qué auxiliar usas en Past Continuous para "They"?',
        options: [
          { id: 'a', text: 'was', isCorrect: false },
          { id: 'b', text: 'were', isCorrect: true },
          { id: 'c', text: 'are', isCorrect: false }
        ],
        feedbackCorrect: 'Excellent! "were".',
        feedbackIncorrect: '"They" usa "were".'
      },
      {
        question: '___ I was reading, my cat jumped on me.',
        options: [
          { id: 'a', text: 'While', isCorrect: true },
          { id: 'b', text: 'When', isCorrect: false }
        ],
        feedbackCorrect: 'Se suele usar while para las cláusulas continuas ("mientras leía").',
        feedbackIncorrect: 'Mientras (While) fluye mejor con acciones largas.'
      },
      {
        question: 'El pasado del verbo irregular "Eat" es:',
        options: [
          { id: 'a', text: 'Eated', isCorrect: false },
          { id: 'b', text: 'Ate', isCorrect: true },
          { id: 'c', text: 'Eaten', isCorrect: false }
        ],
        feedbackCorrect: '¡Así es!',
        feedbackIncorrect: 'El pasado simple es "Ate". ("Eaten" es participio).'
      }
    ]
  },

  // ==============================================
  // CATEGORY: FUTURE TENSES
  // ==============================================
  {
    id: 'future_tenses_1',
    icon3D: '🔮',
  grammar: [
    {
        title: "Futuro con Will",
        explanation: "Para decisiones espontáneas, promesas o predicciones basadas en opinión.",
        structure: "Sujeto + will + Verbo base",
        examples: [
            "I think it will rain.",
            "I will help you!"
        ]
    },
    {
        title: "Futuro con Going to",
        explanation: "Para planes ya hechos con anticipación o predicciones basadas en evidencia visual.",
        structure: "Sujeto + am/is/are + going to + Verbo base",
        examples: [
            "I am going to visit my mom.",
            "Look at those clouds! It is going to rain."
        ]
    }
],
    categoryId: 'future_tenses',
    title: 'Future: Will vs Going To',
    etapa: 'Future Tenses',
    objetivo: 'Will para decisiones rápidas/predicciones, Going to para planes fijos.',
    lenguajeClave: 'I will help you. I am going to buy a car next year.',
    practica: 'A: It is hot. B: I will open the window. A: Are you free on Sunday? B: No, I am going to see my grandmother.',
    tarea: 'Haz 3 predicciones sobre el mundo en 2050 (Will) y 3 planes tuyos fijos para el próximo año (Going to).',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    vocabulario: [
      { word: 'Will', translation: 'Para Predicciones o Decisiones Instantáneas', iconName: 'CloudRain', color: 'from-cyan-400 to-blue-500' },
      { word: 'Going to', translation: 'Para Planes fijados o Intenciones Claras', iconName: 'CalendarCheck', color: 'from-green-400 to-emerald-500' },
      { word: 'Next year', translation: 'El próximo año', iconName: 'Calendar', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Maybe', translation: 'Tal vez (Se usa con will)', iconName: 'HelpCircle', color: 'from-amber-400 to-orange-500' }
    ],
    quiz: [
      {
        question: '"Oh, the phone is ringing. I ___ answer it!"',
        options: [
          { id: 'a', text: 'will', isCorrect: true },
          { id: 'b', text: 'am going to', isCorrect: false }
        ],
        feedbackCorrect: 'Exacto, es una decisión repentina.',
        feedbackIncorrect: 'Decisiones del momento usan Will.'
      },
      {
        question: '"Look at those black clouds! It ___ rain."',
        options: [
          { id: 'a', text: 'will', isCorrect: false },
          { id: 'b', text: 'is going to', isCorrect: true }
        ],
        feedbackCorrect: 'Cuando hay evidencia en el presente de que algo va a pasar inminentemente, preferimos "going to".',
        feedbackIncorrect: 'Hay nubes negras, tenemos evidencia clara. Va "going to".'
      },
      {
        question: '"We bought the tickets. We ______ travel to Paris."',
        options: [
          { id: 'a', text: 'will', isCorrect: false },
          { id: 'b', text: 'are going to', isCorrect: true }
        ],
        feedbackCorrect: '¡Exacto! Los tickets comprados significan que es un plan fijo.',
        feedbackIncorrect: 'Si ya compraron boletos, ya está resuelto y es un plan. Usa (are going to).'
      },
      {
        question: '"I am hungry." - "I ___ make you a sandwich."',
        options: [
          { id: 'a', text: 'will', isCorrect: true },
          { id: 'b', text: 'am going to', isCorrect: false }
        ],
        feedbackCorrect: 'Perfecto, es una decisión rápida para ayudar.',
        feedbackIncorrect: 'Estás tomando la decisión en ese preciso instante (Will).'
      },
      {
        question: 'Dime, ¿Cuáles son tus planes? "I _______ study medicine." (Ya lo decidiste hace meses).',
        options: [
          { id: 'a', text: 'will', isCorrect: false },
          { id: 'b', text: 'am going to', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien! Como plan, usamos going to.',
        feedbackIncorrect: 'Es algo premeditado.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: CONNECTORS
  // ==============================================
  {
    id: 'connectors_1',
    icon3D: '🧩',
    categoryId: 'connectors',
    title: 'Connectors & Linking Words',
    etapa: 'Connectors',
    objetivo: 'Usar properly conectores de contraste, adición, causa y efecto.',
    lenguajeClave: 'Although it rained, we went out. In addition, we had fun.',
    practica: 'Although he was tired, he kept walking. Furthermore, he ran the last mile.',
    tarea: 'Escribe un párrafo usando al menos 5 conectores diferentes.',
    imageUrl: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop',
    grammar: [
      {
          title: "Conectores de Contraste (Contrast)",
          explanation: "Se usan para mostrar ideas opuestas o introducir excepciones.",
          examples: [
              "Although it was raining, we went out. (Aunque estaba lloviendo, salimos).",
              "He was tired. However, he kept working. (Él estaba cansado. Sin embargo, siguió trabajando).",
              "Despite the bad weather, they played football. (A pesar del mal tiempo, jugaron fútbol).",
              "I like apples. Even though they are expensive, I buy them. (Me gustan las manzanas. Aunque son caras, las compro).",
              "She is very smart; nevertheless, she made a mistake. (Ella es muy lista; no obstante, cometió un error)."
          ]
      },
      {
          title: "Conectores de Adición (Addition)",
          explanation: "Sirven para añadir información a algo que ya se ha mencionado.",
          examples: [
              "She is a great teacher. In addition, she is a talented musician. (Además, es una música talentosa).",
              "Furthermore, the new rules will improve safety. (Es más, las nuevas reglas mejorarán la seguridad).",
              "He lost his keys, and moreover, his wallet was stolen. (Y por si fuera poco, su cartera fue robada).",
              "I speak Spanish, and I know English as well. (Y también sé inglés).",
              "We brought snacks too. (Nosotros trajimos bocadillos también)."
          ]
      },
      {
          title: "Conectores de Causa y Efecto (Cause & Effect)",
          explanation: "Se usan para explicar por qué ocurre algo (causa) o cuáles son sus consecuencias (efecto).",
          examples: [
              "Because it was late, we went home. (Porque era tarde, nos fuimos a casa).",
              "Since you are here, let's start the meeting. (Dado que estás aquí, comencemos la reunión).",
              "The weather was terrible. Therefore, the flight was canceled. (Por lo tanto, el vuelo fue cancelado).",
              "He didn't study, and as a result, he failed the exam. (Y como resultado, reprobó).",
              "Consequently, we had to change our plans. (En consecuencia, tuvimos que cambiar los planes)."
          ]
      }
    ],
    vocabulario: [
      { word: 'However', translation: 'Sin embargo', iconName: 'Unlink', color: 'from-rose-400 to-red-500' },
      { word: 'Although', translation: 'Aunque', iconName: 'Merge', color: 'from-blue-400 to-cyan-500' },
      { word: 'Nevertheless', translation: 'No obstante', iconName: 'AlertTriangle', color: 'from-amber-400 to-yellow-500' },
      { word: 'Despite', translation: 'A pesar de', iconName: 'ShieldAlert', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Furthermore', translation: 'Además', iconName: 'PlusSquare', color: 'from-green-400 to-emerald-500' },
      { word: 'Moreover', translation: 'Es más / Además', iconName: 'PlusCircle', color: 'from-emerald-400 to-green-500' },
      { word: 'Therefore', translation: 'Por lo tanto', iconName: 'ArrowRight', color: 'from-indigo-400 to-blue-500' },
      { word: 'Because', translation: 'Porque', iconName: 'HelpCircle', color: 'from-teal-400 to-cyan-500' },
      { word: 'Since', translation: 'Ya que / Dado que', iconName: 'CalendarClock', color: 'from-cyan-400 to-sky-500' }
    ],
    quiz: [
      {
        question: '___ it was cold, she didn\'t wear a jacket.',
        options: [
          { id: 'a', text: 'Although', isCorrect: true },
          { id: 'b', text: 'However', isCorrect: false }
        ],
        feedbackCorrect: '¡Bien! Sirve perfecto al inicio.',
        feedbackIncorrect: 'Although funciona mejor al inicio de la cláusula.'
      },
      {
        question: 'The car is very old. ______, it runs beautifully.',
        options: [
          { id: 'a', text: 'Although', isCorrect: false },
          { id: 'b', text: 'However', isCorrect: true }
        ],
        feedbackCorrect: 'Correcto, "However" suele ir después de un punto.',
        feedbackIncorrect: '"Although" no suele seguir un punto de separación en estas oraciones cortas.'
      },
      {
        question: '¿Qué significa "Nevertheless"?',
        options: [
          { id: 'a', text: 'Además', isCorrect: false },
          { id: 'b', text: 'No obstante', isCorrect: true },
          { id: 'c', text: 'Por consiguiente', isCorrect: false }
        ],
        feedbackCorrect: 'Es sinónimo formal de "Sin embargo".',
        feedbackIncorrect: 'Es un conector de contraste.'
      },
      {
        question: '___ the rain, we played soccer.',
        options: [
          { id: 'a', text: 'Although', isCorrect: false },
          { id: 'b', text: 'Despite', isCorrect: true }
        ],
        feedbackCorrect: '¡Muy bien! "Despite" va seguido de un sustantivo.',
        feedbackIncorrect: 'Con un sustantivo ("the rain"), usamos "Despite".'
      },
      {
        question: 'Elige la oración correcta:',
        options: [
          { id: 'a', text: 'He is smart, although he is lazy.', isCorrect: true },
          { id: 'b', text: 'He is smart although, he is lazy.', isCorrect: false }
        ],
        feedbackCorrect: '¡Bien!',
        feedbackIncorrect: 'Observa donde está la coma. "Although" inicia la segunda idea.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: PREPOSITIONS
  // ==============================================
  {
    id: 'prepositions_1',
    icon3D: '🗺️',
    categoryId: 'prepositions',
    title: 'Prepositions of Place, Time & Movement',
    etapa: 'Prepositions',
    objetivo: 'Dominar un amplio rango de preposiciones: in, on, at, under, above, through, across, during, between, among.',
    lenguajeClave: 'Walk through the door and go across the street. The book is on the table between the apples.',
    practica: 'I am at the bus stop. The keys are on the table. The cat is under the bed.',
    tarea: 'Sal al jardín o mira un parque y usa preposiciones para decir dónde están los objetos o las personas.',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop',
    grammar: [
      {
          title: "Preposiciones de Lugar (Place)",
          explanation: "Se usan para indicar en qué ubicación física está alguien o algo.",
          examples: [
              "The keys are in the box (Las llaves están en la caja - adentro).",
              "The book is on the table (El libro está sobre la mesa - tocando superficie).",
              "I am at the bus stop (Estoy en la parada de autobús - punto específico).",
              "The cat is under the bed (El gato está debajo de la cama).",
              "The painting is above the sofa (La pintura está encima del sofá).",
              "I am standing between John and Mary (Estoy parado entre John y Mary).",
              "The house is hidden among the trees (La casa está oculta entre los árboles)."
          ]
      },
      {
          title: "Preposiciones de Tiempo (Time)",
          explanation: "Indican el momento exacto o periodo en el que ocurre una acción.",
          examples: [
              "My birthday is in October (Mi cumpleaños es en octubre - meses/años).",
              "The meeting is on Monday (La reunión es el lunes - días/fechas).",
              "The class starts at 8 AM (La clase empieza a las 8 AM - horas/momentos precisos).",
              "Please keep quiet during the movie (Por favor guarda silencio durante la película).",
              "I have lived here for ten years (He vivido aquí por diez años).",
              "It hasn't rained since Tuesday (No ha llovido desde el martes)."
          ]
      },
      {
          title: "Preposiciones de Movimiento (Movement)",
          explanation: "Expresan el desplazamiento o la dirección hacia un lugar.",
          examples: [
              "I am walking to the park (Estoy caminando hacia el parque).",
              "She went into the room (Ella entró a la habitación).",
              "The train went through the tunnel (El tren pasó a través del túnel).",
              "Be careful when walking across the street (Ten cuidado al cruzar la calle).",
              "They were walking towards the beach (Ellos caminaban en dirección a la playa)."
          ]
      }
    ],
    vocabulario: [
      { word: 'In', translation: 'Dentro de / Países / Ciudades / Meses', iconName: 'Box', color: 'from-blue-400 to-cyan-500' },
      { word: 'On', translation: 'Sobre (superficie) / Días de la semana', iconName: 'Layers', color: 'from-amber-400 to-yellow-500' },
      { word: 'At', translation: 'En (punto específico) / Horas', iconName: 'MapPin', color: 'from-rose-400 to-red-500' },
      { word: 'Under', translation: 'Debajo de', iconName: 'ArrowDown', color: 'from-slate-400 to-zinc-500' },
      { word: 'Above', translation: 'Por encima de (sin tocar)', iconName: 'ArrowUp', color: 'from-sky-400 to-blue-500' },
      { word: 'Between', translation: 'Entre (dos cosas)', iconName: 'AlignVerticalSpaceAround', color: 'from-indigo-400 to-purple-500' },
      { word: 'Among', translation: 'Entre (varios o en grupo)', iconName: 'Users', color: 'from-fuchsia-400 to-pink-500' },
      { word: 'Through', translation: 'A través de', iconName: 'ArrowRightCircle', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Across', translation: 'Cruzando / Al otro lado', iconName: 'MoveHorizontal', color: 'from-teal-400 to-emerald-500' },
      { word: 'Towards', translation: 'Hacia / En dirección a', iconName: 'ArrowRight', color: 'from-cyan-400 to-teal-500' },
      { word: 'During', translation: 'Durante', iconName: 'Clock', color: 'from-yellow-400 to-orange-500' }
    ],
    quiz: [
      {
        question: 'The picture is ___ the wall.',
        options: [
          { id: 'a', text: 'in', isCorrect: false },
          { id: 'b', text: 'on', isCorrect: true },
          { id: 'c', text: 'at', isCorrect: false }
        ],
        feedbackCorrect: 'El cuadro reposa sobre la superficie de la pared.',
        feedbackIncorrect: 'Las superficies usan "on".'
      },
      {
        question: 'She lives ___ Tokyo.',
        options: [
          { id: 'a', text: 'on', isCorrect: false },
          { id: 'b', text: 'at', isCorrect: false },
          { id: 'c', text: 'in', isCorrect: true }
        ],
        feedbackCorrect: '¡Bien! Para ciudades usamos "In".',
        feedbackIncorrect: 'Para ciudades, Estados y Países grandes, usamos IN.'
      },
      {
        question: 'Meet me ___ the cinema.',
        options: [
          { id: 'a', text: 'in', isCorrect: false },
          { id: 'b', text: 'at', isCorrect: true },
          { id: 'c', text: 'on', isCorrect: false }
        ],
        feedbackCorrect: 'Genial. Hablas de un punto de encuentro específico.',
        feedbackIncorrect: 'Lugar específico, se marca en un mapa como un punto de interés: usamos AT.'
      },
      {
        question: 'The train went _____ the tunnel.',
        options: [
          { id: 'a', text: 'across', isCorrect: false },
          { id: 'b', text: 'through', isCorrect: true },
          { id: 'c', text: 'on', isCorrect: false }
        ],
        feedbackCorrect: '¡A través de! Perfecto.',
        feedbackIncorrect: 'Tunnel significa que vas de un lado "a través de", así que "through".'
      },
      {
        question: 'Be careful walking _____ the street.',
        options: [
          { id: 'a', text: 'across', isCorrect: true },
          { id: 'b', text: 'through', isCorrect: false },
          { id: 'c', text: 'under', isCorrect: false }
        ],
        feedbackCorrect: '"Across" significa "cruzando".',
        feedbackIncorrect: 'Para decir "cruzar la calle" decimos "across the street".'
      }
    ]
  },

  // ==============================================
  // CATEGORY: CONDITIONALS
  // ==============================================
  {
    id: 'conditionals_1',
    icon3D: '⚖️',
    categoryId: 'conditionals',
    title: 'Zero & First Conditional',
    etapa: 'Conditionals',
    objetivo: 'Hablar de realidades y posibles situaciones futuras.',
    lenguajeClave: 'If it rains, I will stay home. If you freeze water, it becomes ice.',
    practica: 'If I study hard, I will pass the exam.',
    tarea: 'Escribe 3 cosas que harás si hace buen tiempo mañana.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop',
    grammar: [
      {
          title: "Zero Conditional",
          explanation: "Se usa para verdades universales, hechos científicos, o cosas que siempre son verdad. La condición y el resultado están en Presente Simple.",
          examples: [
              "If you freeze water, it becomes ice. (Si congelas agua, se convierte en hielo).",
              "If I am late, my boss gets angry. (Si llego tarde, mi jefe se enoja).",
              "Plants die if they don't get enough water. (Las plantas mueren si no reciben suficiente agua)."
          ]
      },
      {
          title: "First Conditional",
          explanation: "Se usa para situaciones reales o posibles en el futuro. La condición usa Presente Simple y el resultado usa 'will' + verbo.",
          examples: [
              "If it rains tomorrow, I will stay home. (Si llueve mañana, me quedaré en casa).",
              "If she studies hard, she will pass the exam. (Si ella estudia mucho, aprobará el examen).",
              "What will you do if you miss the bus? (¿Qué harás si pierdes el autobús?)."
          ]
      }
    ],
    vocabulario: [
      { word: 'If', translation: 'Si (condicional)', iconName: 'HelpCircle', color: 'from-blue-400 to-cyan-500' },
      { word: 'Unless', translation: 'A menos que', iconName: 'XOctagon', color: 'from-red-400 to-rose-500' },
      { word: 'Freeze', translation: 'Congelar', iconName: 'Snowflake', color: 'from-sky-400 to-blue-500' },
      { word: 'Happen', translation: 'Suceder / Pasar', iconName: 'Zap', color: 'from-yellow-400 to-amber-500' }
    ],
    quiz: [
      {
        question: 'Completa la frase (Zero Conditional): If you heat ice, it ______.',
        options: [
          { id: 'a', text: 'will melt', isCorrect: false },
          { id: 'b', text: 'melts', isCorrect: true },
          { id: 'c', text: 'melted', isCorrect: false },
          { id: 'd', text: 'melting', isCorrect: false }
        ],
        feedbackCorrect: 'Zero conditional uses present simple in both clauses.',
        feedbackIncorrect: 'Zero conditional uses present simple (melts).'
      },
      {
        question: 'Completa la frase (First Conditional): If I have money, I ______ a new car.',
        options: [
          { id: 'a', text: 'buy', isCorrect: false },
          { id: 'b', text: 'bought', isCorrect: false },
          { id: 'c', text: 'will buy', isCorrect: true },
          { id: 'd', text: 'am buying', isCorrect: false }
        ],
        feedbackCorrect: 'First conditional uses will + base verb for the result.',
        feedbackIncorrect: 'First conditional uses will + base verb.'
      }
    ]
  },
  {
    id: 'conditionals_2',
    icon3D: '💭',
    categoryId: 'conditionals',
    title: 'Second & Third Conditional',
    etapa: 'Conditionals',
    objetivo: 'Hablar de situaciones imaginarias y del pasado que ya no se pueden cambiar.',
    lenguajeClave: 'If I were rich, I would travel. If I had studied, I would have passed.',
    practica: 'If I had more time, I would learn French.',
    tarea: 'Piensa en qué habrías hecho si ayer hubiera sido festivo.',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop',
    grammar: [
      {
          title: "Second Conditional",
          explanation: "Se usa para situaciones irreales, hipotéticas o improbables en el presente o futuro. La condición usa Pasado Simple y el resultado usa 'would' + verbo base.",
          examples: [
              "If I won the lottery, I would buy a big house. (Si ganara la lotería, compraría una casa grande).",
              "If I were you, I wouldn't do that. (Si yo fuera tú, no haría eso).",
              "She would travel more if she had more free time. (Ella viajaría más si tuviera más tiempo libre)."
          ]
      },
      {
          title: "Third Conditional",
          explanation: "Se usa para situaciones imaginarias del pasado que ya no pueden ocurrir. Es para arrepentimientos o suposiciones sobre el pasado. La condición usa Pasado Perfecto (had + participio) y el resultado usa 'would have' + participio.",
          examples: [
              "If I had studied harder, I would have passed the test. (Si hubiera estudiado más, habría aprobado).",
              "If we hadn't missed the train, we wouldn't have been late. (Si no hubiéramos perdido el tren, no habríamos llegado tarde).",
              "Would you have helped me if I had asked you? (¿Me habrías ayudado si te lo hubiera pedido?)."
          ]
      }
    ],
    vocabulario: [
      { word: 'Would', translation: 'Terminación -ría (condicional)', iconName: 'Wind', color: 'from-purple-400 to-indigo-500' },
      { word: 'Imagine', translation: 'Imaginar', iconName: 'Cloud', color: 'from-cyan-400 to-blue-500' },
      { word: 'Wish', translation: 'Desear', iconName: 'Star', color: 'from-amber-400 to-yellow-500' },
      { word: 'Regret', translation: 'Arrepentirse', iconName: 'Frown', color: 'from-gray-400 to-zinc-500' }
    ],
    quiz: [
      {
        question: '¿Qué condicional es?: "If I were rich, I would travel the world."',
        options: [
          { id: 'a', text: 'Zero', isCorrect: false },
          { id: 'b', text: 'First', isCorrect: false },
          { id: 'c', text: 'Second', isCorrect: true },
          { id: 'd', text: 'Third', isCorrect: false }
        ],
        feedbackCorrect: 'Second conditional uses past simple and would.',
        feedbackIncorrect: 'If + past simple, would + verb is Second conditional.'
      },
      {
        question: 'Completa: If she ______ earlier, she would have caught the train.',
        options: [
          { id: 'a', text: 'wakes up', isCorrect: false },
          { id: 'b', text: 'woke up', isCorrect: false },
          { id: 'c', text: 'had woken up', isCorrect: true },
          { id: 'd', text: 'has woken up', isCorrect: false }
        ],
        feedbackCorrect: 'Third conditional uses past perfect in the if clause.',
        feedbackIncorrect: 'Third conditional needs had + past participle.'
      }
    ]
  },

  // ==============================================
  // CATEGORY: MODALS
  // ==============================================
  {
    id: 'modals_1',
    icon3D: '🦸‍♂️',
    categoryId: 'modals',
    title: 'Can, Could & Should',
    etapa: 'Modals',
    objetivo: 'Expresar habilidad, permiso y dar consejos.',
    lenguajeClave: 'I can swim. Could you help me? You should see a doctor.',
    practica: 'I can speak two languages, but I could not swim when I was a kid.',
    tarea: 'Escribe tres consejos usando "should" para alguien que quiere aprender inglés.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    grammar: [
      {
          title: "Can & Could (Habilidad y Permiso)",
          explanation: "Usamos 'Can' para referirnos a la habilidad en el presente o dar/pedir permiso. 'Could' es el pasado de Can o se usa para ser mucho más educado al pedir algo.",
          examples: [
              "I can play the piano very well. (Puedo tocar el piano muy bien).",
              "Can I go to the bathroom, please? (¿Puedo ir al baño?).",
              "I couldn't sleep last night. (No pude dormir anoche).",
              "Could you pass the salt, please? (¿Podrías pasarme la sal, por favor?)."
          ]
      },
      {
          title: "Should (Consejo)",
          explanation: "Usamos 'Should' (debería) para dar consejos, hacer recomendaciones o expresar lo que es correcto hacer. No es una obligación fuerte.",
          examples: [
              "You look tired. You should go to bed. (Te ves cansado. Deberías ir a la cama).",
              "He shouldn't eat so much sugar. (Él no debería comer tanta azúcar).",
              "Should we call her now? (¿Deberíamos llamarla ahora?)."
          ]
      }
    ],
    vocabulario: [
      { word: 'Can', translation: 'Poder / Saber (hacer algo)', iconName: 'Unlock', color: 'from-green-400 to-emerald-500' },
      { word: 'Could', translation: 'Podía / Podría', iconName: 'Clock', color: 'from-teal-400 to-cyan-500' },
      { word: 'Should', translation: 'Debería', iconName: 'MessageCircle', color: 'from-blue-400 to-indigo-500' },
      { word: 'Advice', translation: 'Consejo', iconName: 'Info', color: 'from-amber-400 to-orange-500' }
    ],
    quiz: [
      {
        question: '"When I was five, I ______ read."',
        options: [
          { id: 'a', text: 'can', isCorrect: false },
          { id: 'b', text: 'could', isCorrect: true },
          { id: 'c', text: 'should', isCorrect: false },
          { id: 'd', text: 'would', isCorrect: false }
        ],
        feedbackCorrect: 'Could is the past tense of can, used for past ability.',
        feedbackIncorrect: 'For ability in the past, use could.'
      },
      {
        question: '¿Qué modal usamos para dar un buen consejo?',
        options: [
          { id: 'a', text: 'Can', isCorrect: false },
          { id: 'b', text: 'Might', isCorrect: false },
          { id: 'c', text: 'Should', isCorrect: true },
          { id: 'd', text: 'Must', isCorrect: false }
        ],
        feedbackCorrect: 'Should is used to give recommendations or advice.',
        feedbackIncorrect: 'Should is the modal for giving advice.'
      }
    ]
  },
  {
    id: 'modals_2',
    icon3D: '🛑',
    categoryId: 'modals',
    title: 'Must, Might & May',
    etapa: 'Modals',
    objetivo: 'Expresar obligación fuerte y posiblidad / probabilidad.',
    lenguajeClave: 'You must stop. It may rain today. She might come later.',
    practica: 'We must wear a seatbelt. I might go to the party, I am not sure.',
    tarea: 'Identifica una obligación fuerte en tu trabajo/escuela usando "must".',
    imageUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049febb?q=80&w=2069&auto=format&fit=crop',
    grammar: [
      {
          title: "Must (Obligación Fuerte y Deducción)",
          explanation: "'Must' indica una obligación muy fuerte o una regla que no se puede romper. También significa que estamos muy seguros de algo por la evidencia.",
          examples: [
              "You must wear a seatbelt in the car. (Debes usar cinturón de seguridad en el auto).",
              "I must finish this work today! (¡Debo terminar este trabajo hoy!).",
              "You have been working all day? You must be exhausted. (¿Has trabajado todo el día? Debes estar exhausto)."
          ]
      },
      {
          title: "May & Might (Posibilidad)",
          explanation: "Ambos se usan para decir que algo es posible en el futuro, pero no estamos 100% seguros ('tal vez' o 'puede que'). Son casi iguales, pero 'might' expresa una probabilidad un poco menor.",
          examples: [
              "Take an umbrella. It may rain later. (Lleva paraguas. Puede que llueva más tarde).",
              "I might go to the party, but I'm not sure yet. (Tal vez vaya a la fiesta, pero aún no estoy seguro).",
              "May I help you? (¿Puedo ayudarle? - Muy formal)."
          ]
      }
    ],
    vocabulario: [
      { word: 'Must', translation: 'Deber (obligación fuerte)', iconName: 'AlertTriangle', color: 'from-red-500 to-rose-600' },
      { word: 'Might', translation: 'Podría / Tal vez', iconName: 'HelpCircle', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'May', translation: 'Puede que', iconName: 'CloudRain', color: 'from-cyan-400 to-blue-500' },
      { word: 'Sure', translation: 'Seguro', iconName: 'CheckCircle', color: 'from-emerald-400 to-green-500' }
    ],
    quiz: [
      {
        question: 'Completa: "You ______ stop at a red light."',
        options: [
          { id: 'a', text: 'must', isCorrect: true },
          { id: 'b', text: 'might', isCorrect: false },
          { id: 'c', text: 'may', isCorrect: false },
          { id: 'd', text: 'should', isCorrect: false }
        ],
        feedbackCorrect: 'Must is used for strong obligations, like laws.',
        feedbackIncorrect: 'Must is used for strong rules and obligations.'
      },
      {
        question: '¿Qué modal expresa menos certeza o seguridad de que algo pase?',
        options: [
          { id: 'a', text: 'Must', isCorrect: false },
          { id: 'b', text: 'Will', isCorrect: false },
          { id: 'c', text: 'Can', isCorrect: false },
          { id: 'd', text: 'Might', isCorrect: true }
        ],
        feedbackCorrect: 'Might expresses a lower probability or uncertainty.',
        feedbackIncorrect: 'Might expresses uncertainty (tal vez).'
      }
    ]
  }
];

