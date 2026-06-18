import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'l1',
    icon3D: '👋',
    title: 'Clase 1 - Saludos y Despedidas',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Aprender los saludos básicos para cada momento del día y despedirse con confianza.',
    lenguajeClave: 'Hello, good morning, good evening, how are you?',
    practica: 'A: Good morning! How are you?. B: I am fine, thank you. And you?. A: Very good! See you later.',
    tarea: 'Escribe y practica en voz alta los saludos de la mañana, tarde y noche 5 veces.',
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'Hello / Hi', translation: 'Hola', iconName: 'Hand', color: 'from-orange-400 to-rose-500', imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80' },
      { word: 'Good morning', translation: 'Buenos días', iconName: 'Sun', color: 'from-amber-400 to-orange-500', imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80' },
      { word: 'Good afternoon', translation: 'Buenas tardes', iconName: 'SunDim', color: 'from-blue-400 to-indigo-500' },
      { word: 'Good evening', translation: 'Buenas noches (al llegar)', iconName: 'Sunset', color: 'from-violet-500 to-purple-600' },
      { word: 'Good night', translation: 'Buenas noches (al despedirse)', iconName: 'MoonStar', color: 'from-slate-700 to-slate-900', imageUrl: 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80' },
      { word: 'Goodbye / Bye', translation: 'Adiós', iconName: 'LogOut', color: 'from-emerald-400 to-teal-500' },
      { word: 'See you later', translation: 'Nos vemos luego', iconName: 'Clock', color: 'from-pink-400 to-rose-500' },
      { word: 'How are you?', translation: '¿Cómo estás?', iconName: 'MessageCircle', color: 'from-cyan-400 to-blue-500' },
      { word: 'I am fine', translation: 'Estoy bien', iconName: 'ThumbsUp', color: 'from-green-400 to-emerald-600' },
      { word: 'Thank you', translation: 'Gracias', iconName: 'HeartHandshake', color: 'from-rose-400 to-pink-600' }
    ],
    quiz: [
          {
                question: "Si llegas a un lugar en la mañana, ¿cómo saludas?",
                options: [
                      {
                            id: "a",
                            text: "Good night",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "Good morning",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "Goodbye",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Exacto! \"Good morning\" significa \"Buenos días\".",
                feedbackIncorrect: "La respuesta correcta es \"Good morning\". ¡Sigue practicando!"
          },
          {
                question: "¿Qué significa \"How are you?\"",
                options: [
                      {
                            id: "a",
                            text: "¿Dónde estás?",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "¿Quién eres?",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "¿Cómo estás?",
                            isCorrect: true
                      }
                ],
                feedbackCorrect: "¡Muy bien! Se responde con \"I am fine\" (Estoy bien).",
                feedbackIncorrect: "Significa \"¿Cómo estás?\"."
          },
          {
                question: "Cuando llegas a un lugar por la noche a cenar, saludas con:",
                options: [
                      {
                            id: "a",
                            text: "Good night",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "Good evening",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "See you later",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente! \"Good evening\" es el saludo de la noche.",
                feedbackIncorrect: "\"Good night\" es sólo para despedirse. Al llegar debes decir \"Good evening\"."
          },
          {
                question: "¿Cómo se dice \"Nos vemos luego\"?",
                options: [
                      {
                            id: "a",
                            text: "See you later",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Goodbye",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "Good afternoon",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Bien hecho!",
                feedbackIncorrect: "\"See you later\" es la forma correcta."
          },
          {
                question: "La traducción correcta para \"Thank you\" es:",
                options: [
                      {
                            id: "a",
                            text: "Hola",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "Por favor",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "Gracias",
                            isCorrect: true
                      }
                ],
                feedbackCorrect: "¡Correcto!",
                feedbackIncorrect: "\"Thank you\" significa Gracias."
          }
    ]
  },
  {
    id: 'l2',
    icon3D: '🤝',
    title: 'Clase 2 - Nombre y Presentación',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Poder decir tu nombre, conocer el de otros y presentarte cordialmente.',
    lenguajeClave: 'What is your name? My name is... Nice to meet you.',
    practica: 'A: Hello! What is your name?. B: Hi! My name is Carlos. And you?. A: I am Sarah. Nice to meet you!. B: Nice to meet you too.',
    tarea: 'Grábate en audio diciendo tu nombre y un saludo.',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'Name', translation: 'Nombre', iconName: 'Badge', color: 'from-blue-500 to-cyan-600' },
      { word: 'My name is...', translation: 'Mi nombre es...', iconName: 'User', color: 'from-indigo-400 to-purple-500' },
      { word: 'What?', translation: '¿Qué / Cuál?', iconName: 'HelpCircle', color: 'from-orange-400 to-red-500' },
      { word: 'Nice', translation: 'Agradable / Gusto', iconName: 'Sparkles', color: 'from-amber-400 to-yellow-500' },
      { word: 'Meet', translation: 'Conocer', iconName: 'Users', color: 'from-emerald-400 to-green-600' },
      { word: 'Nice to meet you', translation: 'Gusto en conocerte', iconName: 'Heart', color: 'from-rose-500 to-pink-600', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80' },
      { word: 'Friend', translation: 'Amigo/a', iconName: 'UserPlus', color: 'from-cyan-400 to-blue-500' },
      { word: 'Student', translation: 'Estudiante', iconName: 'GraduationCap', color: 'from-violet-500 to-purple-700' },
      { word: 'Teacher', translation: 'Profesor/a', iconName: 'MonitorPlay', color: 'from-fuchsia-500 to-pink-600' },
      { word: 'Yes / No', translation: 'Sí / No', iconName: 'ToggleRight', color: 'from-slate-500 to-gray-700' }
    ],
    quiz: [
          {
                question: "¿Cómo preguntas \"¿Cuál es tu nombre?\"",
                options: [
                      {
                            id: "a",
                            text: "How are you?",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "What is your name?",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "Where are you?",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Correcto!",
                feedbackIncorrect: "Es \"What is your name?\"."
          },
          {
                question: "Elige la respuesta correcta a \"Nice to meet you\".",
                options: [
                      {
                            id: "a",
                            text: "Nice to meet you too",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "My name is John",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "Thank you",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! Se responde \"Un placer conocerte también\" (too).",
                feedbackIncorrect: "Se responde \"Nice to meet you too\"."
          },
          {
                question: "Para decir \"Mi nombre es...\", dices:",
                options: [
                      {
                            id: "a",
                            text: "I am name...",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "My name is...",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "The name is...",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Perfecto!",
                feedbackIncorrect: "La forma correcta es \"My name is...\"."
          },
          {
                question: "¿Qué significa \"Who are you?\"",
                options: [
                      {
                            id: "a",
                            text: "¿Quién eres?",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "¿Dónde estás?",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "¿Qué eres?",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Bien!",
                feedbackIncorrect: "Who se traduce como \"Quién\"."
          },
          {
                question: "Selecciona la otra forma aceptable de decir \"My name is John\":",
                options: [
                      {
                            id: "a",
                            text: "It name is John",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "I have John",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "I am John",
                            isCorrect: true
                      }
                ],
                feedbackCorrect: "¡Exacto! \"I am\" se puede usar para el nombre.",
                feedbackIncorrect: "\"I am John\" (Yo soy John) es común y correcto."
          }
    ]
  },
  {
    id: 'l3',
    icon3D: '🌍',
    title: 'Clase 3 - País, Ciudad y Edad',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Hablar de tus orígenes, dónde vives y cuántos años tienes.',
    lenguajeClave: 'Where are you from? I live in... I am 55 years old.',
    practica: 'A: Where do you live?. B: I live in Madrid, Spain. How about you?. A: I am from Colombia.',
    tarea: 'Escribe de dónde eres, dónde vives y cuántos años tienes en tu libreta.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'Country', translation: 'País', iconName: 'Globe', color: 'from-blue-500 to-indigo-600', imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80' },
      { word: 'City', translation: 'Ciudad', iconName: 'Building2', color: 'from-slate-600 to-zinc-800', imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80' },
      { word: 'Where?', translation: '¿Dónde?', iconName: 'MapPin', color: 'from-rose-500 to-red-600' },
      { word: 'From', translation: 'De (origen)', iconName: 'PlaneTakeoff', color: 'from-sky-400 to-blue-500' },
      { word: 'Live', translation: 'Vivir / Habitar', iconName: 'Home', color: 'from-teal-400 to-emerald-600' },
      { word: 'Old', translation: 'Viejo / Edad', iconName: 'Hourglass', color: 'from-amber-500 to-orange-600' },
      { word: 'Years', translation: 'Años', iconName: 'CalendarDays', color: 'from-purple-500 to-indigo-600' },
      { word: 'United States', translation: 'Estados Unidos', iconName: 'Landmark', color: 'from-red-500 to-blue-600' },
      { word: 'Spain', translation: 'España', iconName: 'Flag', color: 'from-yellow-400 to-red-500' },
      { word: 'Mexico', translation: 'México', iconName: 'Map', color: 'from-green-500 to-emerald-700' }
    ],
    quiz: [
          {
                question: "¿Qué pronombre usarías para hablar de \"María\"?",
                options: [
                      {
                            id: "a",
                            text: "He",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "She",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "It",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Correcto! \"She\" significa ella.",
                feedbackIncorrect: "Como es mujer, debes usar \"She\"."
          },
          {
                question: "Si hablas de \"mis amigos y yo\", usas:",
                options: [
                      {
                            id: "a",
                            text: "They",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "We",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "You",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "We = Nosotros.",
                feedbackIncorrect: "Es \"nosotros\", por lo tanto \"We\"."
          },
          {
                question: "Para referirte a una \"casa\", ¿qué pronombre usas?",
                options: [
                      {
                            id: "a",
                            text: "He",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "She",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "It",
                            isCorrect: true
                      }
                ],
                feedbackCorrect: "¡Bien! \"It\" es para cosas y animales.",
                feedbackIncorrect: "Las cosas usan \"It\"."
          },
          {
                question: "¿Cuál usarías para \"Ellos\" (tus amigos en 3ra persona)?",
                options: [
                      {
                            id: "a",
                            text: "We",
                            isCorrect: false
                      },
                      {
                            id: "b",
                            text: "They",
                            isCorrect: true
                      },
                      {
                            id: "c",
                            text: "You",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Perfecto!",
                feedbackIncorrect: "\"They\" se usa para ellos o ellas."
          },
          {
                question: "¿Cuál opción significa \"Yo y Tú\"?",
                options: [
                      {
                            id: "a",
                            text: "I and You",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "We and You",
                            isCorrect: false
                      },
                      {
                            id: "c",
                            text: "Me and They",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Exacto!",
                feedbackIncorrect: "Mezclaste los pronombres, I es yo y You es Tú."
          }
    ]
  },
  {
    id: 'l4',
    icon3D: '🔤',
    title: 'Clase 4 - Alfabeto y Deletreo',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Conocer las letras en inglés para poder deletrear nombres o correos.',
    lenguajeClave: 'How do you spell it? A, E, I, O, U...',
    practica: 'Teacher: How do you spell your name?. Student: M - A - R - I - A.',
    tarea: 'Practica el deletreo de 3 nombres de tus familiares.',
    imageUrl: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073&auto=format&fit=crop',
    vocabulario: [
      { word: 'Alphabet', translation: 'Alfabeto', iconName: 'Type', color: 'from-fuchsia-500 to-pink-600' },
      { word: 'Spell', translation: 'Deletrear', iconName: 'Speech', color: 'from-cyan-500 to-blue-600' },
      { word: 'Letter', translation: 'Letra', iconName: 'CaseSensitive', color: 'from-amber-400 to-orange-500' },
      { word: 'Word', translation: 'Palabra', iconName: 'TextCursor', color: 'from-emerald-400 to-green-600' },
      { word: 'Vowel', translation: 'Vocal', iconName: 'Mic', color: 'from-indigo-400 to-purple-600' },
      { word: 'A, E, I, O, U', translation: 'Las 5 vocales', iconName: 'MonitorSpeaker', color: 'from-rose-400 to-red-600' },
      { word: 'Consonant', translation: 'Consonante', iconName: 'Hash', color: 'from-slate-500 to-gray-700' },
      { word: 'Email', translation: 'Correo electrónico', iconName: 'Mail', color: 'from-blue-400 to-indigo-500' },
      { word: 'At (@)', translation: 'Arroba', iconName: 'AtSign', color: 'from-yellow-400 to-amber-600' },
      { word: 'Dot (.)', translation: 'Punto', iconName: 'Circle', color: 'from-zinc-400 to-slate-600' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l5',
    icon3D: '🔢',
    title: 'Clase 5 - Números 1-100',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Aprender los números esenciales para compartir edades, precios o números telefónicos.',
    lenguajeClave: 'One, Two, Twenty, Fifty, One Hundred. My phone number is...',
    practica: 'A: How old are you?. B: I am 55. And my phone number is 3-1-0-2...',
    tarea: 'Escribe tu número de teléfono en inglés y léelo en voz alta.',
    imageUrl: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop',
    vocabulario: [
      { word: 'Number', translation: 'Número', iconName: 'ListOrdered', color: 'from-blue-500 to-cyan-600' },
      { word: 'One, Two, Three', translation: '1, 2, 3', iconName: 'Binary', color: 'from-emerald-400 to-green-600' },
      { word: 'Ten', translation: '10', iconName: 'Hash', color: 'from-purple-500 to-indigo-600' },
      { word: 'Twenty', translation: '20', iconName: 'Calculator', color: 'from-amber-500 to-orange-600' },
      { word: 'Thirty', translation: '30', iconName: 'Coins', color: 'from-rose-400 to-red-500' },
      { word: 'Forty', translation: '40', iconName: 'CreditCard', color: 'from-fuchsia-500 to-pink-600' },
      { word: 'Fifty', translation: '50', iconName: 'Banknote', color: 'from-teal-400 to-cyan-500' },
      { word: 'One Hundred', translation: '100', iconName: 'Gem', color: 'from-yellow-400 to-amber-500' },
      { word: 'Phone Number', translation: 'Número telefónico', iconName: 'PhoneCall', color: 'from-indigo-500 to-purple-700' },
      { word: 'Price', translation: 'Precio', iconName: 'Tag', color: 'from-slate-600 to-gray-800' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l6',
    icon3D: '💻',
    title: 'Clase 6 - Objetos Cotidianos',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Identificar y nombrar objetos de la casa, la clase y la oficina.',
    lenguajeClave: 'This is a book. That is a table. What is this?',
    practica: 'A: What is this?. B: This is a computer. And that is a pen.',
    tarea: 'Camina por tu casa y señala 5 objetos diciendo su nombre en inglés.',
    imageUrl: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=1974&auto=format&fit=crop',
    vocabulario: [
      { word: 'Book', translation: 'Libro', iconName: 'Book', color: 'from-orange-400 to-rose-500', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80' },
      { word: 'Pen / Pencil', translation: 'Bolígrafo / Lápiz', iconName: 'PenTool', color: 'from-amber-400 to-yellow-600' },
      { word: 'Notebook', translation: 'Cuaderno', iconName: 'BookOpen', color: 'from-emerald-400 to-teal-500' },
      { word: 'Table / Desk', translation: 'Mesa / Escritorio', iconName: 'LayoutDashboard', color: 'from-slate-600 to-zinc-800' },
      { word: 'Chair', translation: 'Silla', iconName: 'Armchair', color: 'from-rose-400 to-red-600' },
      { word: 'Phone', translation: 'Teléfono / Celular', iconName: 'Smartphone', color: 'from-blue-400 to-indigo-600' },
      { word: 'Computer', translation: 'Computadora', iconName: 'Laptop', color: 'from-cyan-400 to-blue-500', imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80' },
      { word: 'Keys', translation: 'Llaves', iconName: 'Key', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Bag / Backpack', translation: 'Bolso / Mochila', iconName: 'Briefcase', color: 'from-indigo-500 to-violet-700' },
      { word: 'Water bottle', translation: 'Botella de agua', iconName: 'GlassWater', color: 'from-sky-400 to-blue-600' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l7',
    icon3D: '🙋‍♂️',
  grammar: [
    {
        title: "El Verbo \"To Be\" (Ser o Estar)",
        explanation: "El verbo to be indica identidad, estado o ubicación. \"I am\" significa \"yo soy\" o \"yo estoy\", y \"You are\" significa \"tú eres\" o \"tú estás\".",
        structure: "Sujeto + am/are + Complemento",
        examples: [
            "I am a student (Soy un estudiante)",
            "You are my friend (Tú eres mi amigo)",
            "I am in the house (Estoy en la casa)"
        ]
    }
],
    title: 'Clase 7 - Yo soy / Tú eres (To Be)',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Hablar de estados de ánimo y descripciones personales (I am / You are).',
    lenguajeClave: 'I am happy. You are tired. Are you ready? Yes, I am.',
    practica: 'A: Are you busy?. B: No, I am not busy. I am happy!',
    tarea: 'Escribe 3 oraciones sobre cómo te sientes hoy usando "I am...".',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    vocabulario: [
      { word: 'I am', translation: 'Yo soy / Yo estoy', iconName: 'User', color: 'from-indigo-500 to-purple-600' },
      { word: 'You are', translation: 'Tú eres / Estás', iconName: 'Users', color: 'from-emerald-400 to-teal-600' },
      { word: 'Happy', translation: 'Feliz', iconName: 'Smile', color: 'from-amber-400 to-orange-500', imageUrl: 'https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=600&q=80' },
      { word: 'Tired', translation: 'Cansado/a', iconName: 'BatteryLow', color: 'from-slate-500 to-gray-700' },
      { word: 'Sad', translation: 'Triste', iconName: 'Frown', color: 'from-blue-400 to-indigo-500' },
      { word: 'Busy', translation: 'Ocupado/a', iconName: 'Clock', color: 'from-rose-400 to-red-500' },
      { word: 'Smart', translation: 'Inteligente', iconName: 'Brain', color: 'from-purple-500 to-fuchsia-600' },
      { word: 'Ready', translation: 'Listo/a', iconName: 'CheckCircle2', color: 'from-green-400 to-emerald-600' },
      { word: 'Hungry', translation: 'Hambriento', iconName: 'Utensils', color: 'from-orange-400 to-red-500' },
      { word: 'Thirsty', translation: 'Sediento', iconName: 'Droplet', color: 'from-cyan-400 to-blue-500' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l8',
    icon3D: '🧍‍♀️',
  grammar: [
    {
        title: "Tercera Persona: He, She, It",
        explanation: "Con él (he), ella (she) o eso (it) usamos la conjugación \"is\".",
        structure: "Sujeto (He/She/It) + is + Complemento",
        examples: [
            "He is a doctor (Él es doctor)",
            "She is happy (Ella está feliz)",
            "It is a cat (Es un gato)"
        ]
    }
],
    title: 'Clase 8 - Él es / Ella es (To Be)',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Describir a terceras personas en inglés.',
    lenguajeClave: 'He is my brother. She is smart. Is she tall?',
    practica: 'A: Who is he?. B: He is my friend. He is very tall.',
    tarea: 'Elige a 2 conocidos o famosos y descríbelos usando He is / She is.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    vocabulario: [
      { word: 'He is', translation: 'Él es / Él está', iconName: 'User', color: 'from-blue-500 to-indigo-600' },
      { word: 'She is', translation: 'Ella es / Ella está', iconName: 'UserPlus', color: 'from-pink-400 to-rose-500' },
      { word: 'Tall', translation: 'Alto/a', iconName: 'ArrowUpToLine', color: 'from-emerald-400 to-teal-500' },
      { word: 'Short', translation: 'Bajo/a', iconName: 'ArrowDownToLine', color: 'from-amber-400 to-orange-500' },
      { word: 'Beautiful', translation: 'Hermosa / Bonita', iconName: 'Sparkles', color: 'from-fuchsia-400 to-purple-600' },
      { word: 'Handsome', translation: 'Guapo', iconName: 'Star', color: 'from-indigo-400 to-blue-600' },
      { word: 'Young', translation: 'Joven', iconName: 'Zap', color: 'from-cyan-400 to-blue-500' },
      { word: 'Strong', translation: 'Fuerte', iconName: 'Dumbbell', color: 'from-red-400 to-rose-600' },
      { word: 'Funny', translation: 'Divertido/a', iconName: 'Laugh', color: 'from-yellow-400 to-amber-500' },
      { word: 'Who?', translation: '¿Quién?', iconName: 'HelpCircle', color: 'from-slate-500 to-gray-700' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l9',
    icon3D: '👨‍👩‍👧‍👦',
    title: 'Clase 9 - La Familia',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Aprender los nombres de los miembros de la familia.',
    lenguajeClave: 'My mother, your father. I have a sister.',
    practica: 'A: Do you have brothers or sisters?. B: Yes, I have one brother and two sisters.',
    tarea: 'Mira una foto familiar e intenta nombrar a cada persona en inglés.',
    imageUrl: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop',
    vocabulario: [
      { word: 'Family', translation: 'Familia', iconName: 'Users', color: 'from-amber-500 to-orange-600', imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80' },
      { word: 'Mother / Mom', translation: 'Madre / Mamá', iconName: 'Heart', color: 'from-rose-400 to-pink-600' },
      { word: 'Father / Dad', translation: 'Padre / Papá', iconName: 'Shield', color: 'from-blue-500 to-indigo-600' },
      { word: 'Son', translation: 'Hijo', iconName: 'Baby', color: 'from-sky-400 to-blue-500' },
      { word: 'Daughter', translation: 'Hija', iconName: 'Smile', color: 'from-purple-400 to-fuchsia-500' },
      { word: 'Brother', translation: 'Hermano', iconName: 'User', color: 'from-emerald-400 to-green-600' },
      { word: 'Sister', translation: 'Hermana', iconName: 'UserCheck', color: 'from-teal-400 to-cyan-500' },
      { word: 'Grandparents', translation: 'Abuelos', iconName: 'Glasses', color: 'from-slate-500 to-gray-700' },
      { word: 'Uncle', translation: 'Tío', iconName: 'Coffee', color: 'from-amber-600 to-yellow-700' },
      { word: 'Aunt', translation: 'Tía', iconName: 'Gift', color: 'from-indigo-400 to-purple-500' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l10',
    icon3D: '⏰',
    title: 'Clase 10 - Rutina Básica',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Aprender a describir lo que haces desde que despiertas hasta que duermes.',
    lenguajeClave: 'I wake up, I work, I sleep.',
    practica: 'A: What do you do every day?. B: I wake up, I eat breakfast, and I go to work.',
    tarea: 'Anota en orden 4 actividades que hiciste hoy.',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'Wake up', translation: 'Despertarse', iconName: 'Sunrise', color: 'from-orange-400 to-amber-500', imageUrl: 'https://images.unsplash.com/photo-1541819584488-8422340ae1e1?auto=format&fit=crop&w=600&q=80' },
      { word: 'Shower', translation: 'Bañarse', iconName: 'Droplets', color: 'from-cyan-400 to-blue-500' },
      { word: 'Eat breakfast', translation: 'Desayunar', iconName: 'Coffee', color: 'from-amber-500 to-orange-600' },
      { word: 'Go to work', translation: 'Ir al trabajo', iconName: 'Briefcase', color: 'from-slate-600 to-gray-800' },
      { word: 'Have lunch', translation: 'Almorzar', iconName: 'Utensils', color: 'from-red-400 to-rose-500' },
      { word: 'Work', translation: 'Trabajar', iconName: 'Monitor', color: 'from-indigo-500 to-purple-600' },
      { word: 'Read', translation: 'Leer', iconName: 'BookOpen', color: 'from-teal-400 to-emerald-500' },
      { word: 'Watch TV', translation: 'Mirar Televisión', iconName: 'Tv', color: 'from-blue-500 to-indigo-600' },
      { word: 'Have dinner', translation: 'Cenar', iconName: 'UtensilsCrossed', color: 'from-rose-500 to-pink-600' },
      { word: 'Sleep', translation: 'Dormir', iconName: 'Moon', color: 'from-indigo-800 to-purple-900', imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l11',
    icon3D: '❤️',
    title: 'Clase 11 - Gustos y Preferencias',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Hablar de las cosas que te gustan y no te gustan.',
    lenguajeClave: 'I like coffee. I don\'t like tea. Do you like music?',
    practica: 'A: Do you like sports?. B: Yes, I love sports! And you?. A: I don\'t like sports, I like movies.',
    tarea: 'Haz una lista de 3 cosas que te gustan (I like...) y 2 que no (I don\'t like...).',
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop',
    vocabulario: [
      { word: 'Like', translation: 'Gustar', iconName: 'ThumbsUp', color: 'from-emerald-400 to-green-600' },
      { word: 'Don\'t like', translation: 'No gustar', iconName: 'ThumbsDown', color: 'from-red-400 to-rose-600' },
      { word: 'Love', translation: 'Amar / Encantar', iconName: 'Heart', color: 'from-pink-500 to-rose-600' },
      { word: 'Hate', translation: 'Odiar', iconName: 'AlertTriangle', color: 'from-slate-600 to-gray-800' },
      { word: 'Coffee', translation: 'Café', iconName: 'Coffee', color: 'from-amber-600 to-orange-700', imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80' },
      { word: 'Water', translation: 'Agua', iconName: 'GlassWater', color: 'from-cyan-400 to-blue-500' },
      { word: 'Music', translation: 'Música', iconName: 'Music', color: 'from-violet-500 to-fuchsia-600' },
      { word: 'Movies', translation: 'Películas', iconName: 'Film', color: 'from-indigo-500 to-purple-700' },
      { word: 'Sports', translation: 'Deportes', iconName: 'Trophy', color: 'from-yellow-400 to-amber-500' },
      { word: 'Reading', translation: 'Leer', iconName: 'Library', color: 'from-teal-500 to-emerald-600' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  },
  {
    id: 'l12',
    icon3D: '🏆',
    title: 'Clase 12 - Repaso y Logros',
    etapa: 'Etapa 0 - Cero Absoluto',
    objetivo: 'Reconocer los avances del mes y consolidar tu presentación.',
    lenguajeClave: 'I speak English! Listen, read, write.',
    practica: 'Hello. My name is... I am from... I am... years old. I like... and I live in...',
    tarea: 'Prepara y presenta tu introducción completa a algún familiar en inglés.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop',
    vocabulario: [
      { word: 'Review', translation: 'Repaso', iconName: 'RefreshCw', color: 'from-blue-500 to-indigo-600' },
      { word: 'Learn', translation: 'Aprender', iconName: 'BrainCircuit', color: 'from-purple-500 to-fuchsia-600' },
      { word: 'English', translation: 'Inglés', iconName: 'Languages', color: 'from-rose-400 to-red-500' },
      { word: 'Speak', translation: 'Hablar', iconName: 'MessageSquare', color: 'from-emerald-400 to-teal-500' },
      { word: 'Listen', translation: 'Escuchar', iconName: 'Ear', color: 'from-amber-400 to-orange-500' },
      { word: 'Read', translation: 'Leer', iconName: 'BookOpenCheck', color: 'from-cyan-500 to-blue-600' },
      { word: 'Write', translation: 'Escribir', iconName: 'Edit3', color: 'from-indigo-400 to-purple-500' },
      { word: 'Question', translation: 'Pregunta', iconName: 'HelpCircle', color: 'from-pink-400 to-rose-500' },
      { word: 'Answer', translation: 'Respuesta', iconName: 'CheckCircle2', color: 'from-teal-400 to-green-500' },
      { word: 'Excellent', translation: 'Excelente', iconName: 'Award', color: 'from-yellow-400 to-amber-500' }
    ],
    quiz: [
          {
                question: "Pregunta de repaso 1: ¿Recuerdas el vocabulario?",
                options: [
                      {
                            id: "a",
                            text: "Sí",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "No",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente!",
                feedbackIncorrect: "Repasa el vocabulario de esta lección."
          },
          {
                question: "Pregunta de repaso 2: Identifica el error",
                options: [
                      {
                            id: "a",
                            text: "I is",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "I am",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien! I usa am.",
                feedbackIncorrect: "El error clásico."
          },
          {
                question: "Pregunta de repaso 3: Relaciona el concepto",
                options: [
                      {
                            id: "a",
                            text: "Correcto",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Incorrecto",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repasa el contenido."
          },
          {
                question: "Pregunta de repaso 4: Evaluación final del tema",
                options: [
                      {
                            id: "a",
                            text: "Finalizar",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "Repetir",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Muy bien!",
                feedbackIncorrect: "Repetirás la lección pronto."
          },
          {
                question: "Pregunta 5: Para avanzar, elige la opción con 'A'",
                options: [
                      {
                            id: "a",
                            text: "A",
                            isCorrect: true
                      },
                      {
                            id: "b",
                            text: "B",
                            isCorrect: false
                      }
                ],
                feedbackCorrect: "¡Excelente terminaste!",
                feedbackIncorrect: "Era la A."
          }
    ]
  }
];
