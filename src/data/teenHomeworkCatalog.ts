/**
 * Explicit, 100% customized Homework catalog for EVERY Teens class across all levels.
 * Generated with pedagogical precision, target grammar/vocabulary integration,
 * model 3-line examples (+, -, ?), checklist requirements, and actionable tips.
 */

export interface TeenHomeworkSpec {
  task: string;
  taskHighlights: string[];
  exampleLines: [string, string, string];
  whatToInclude: [
    { icon: string; label: string },
    { icon: string; label: string },
    { icon: string; label: string }
  ];
  tips: [string, string];
  badgeText: string;
}

export const TEEN_HOMEWORK_CATALOG: Record<string, TeenHomeworkSpec> = {
  "c-teens-basic-zero-1": {
    "task": "Escribe 3 oraciones de presentación: tu nombre (+), tu estado de ánimo (+), y una despedida (+).",
    "taskHighlights": [
        "nombre",
        "estado de ánimo",
        "despedida"
    ],
    "exampleLines": [
        "Hi! My name is Alex and I am happy. 👋",
        "I am excited to learn English today. 😊",
        "Nice to meet you. See you next class! 🚀"
    ],
    "whatToInclude": [
        {
            "icon": "👤",
            "label": "Tu nombre completo con 'My name is...' (+)"
        },
        {
            "icon": "😃",
            "label": "Cómo te sientes hoy con 'I am...' (+)"
        },
        {
            "icon": "👋",
            "label": "Una despedida formal o casual (+)"
        }
    ],
    "tips": [
        "Usa información real.",
        "Recuerda mayúsculas al inicio."
    ],
    "badgeText": "Intro Master 👤"
},
  "c-teens-basic-zero-2": {
    "task": "Escribe 3 oraciones con tu edad (+), tu mes de cumpleaños (+), y tu número de la suerte (+).",
    "taskHighlights": [
        "edad",
        "mes",
        "número"
    ],
    "exampleLines": [
        "I am fourteen years old. 🎂",
        "My birthday is in September. 📅",
        "My lucky number is seven. 🍀"
    ],
    "whatToInclude": [
        {
            "icon": "🎂",
            "label": "Tu edad con 'I am [edad] years old' (+)"
        },
        {
            "icon": "📅",
            "label": "Tu mes de cumpleaños con 'in [Month]' (+)"
        },
        {
            "icon": "🍀",
            "label": "Tu número de la suerte (+)"
        }
    ],
    "tips": [
        "La edad se dice con 'I am', no con 'have'.",
        "Los meses van en mayúscula."
    ],
    "badgeText": "Numbers Pro 🔢"
},
  "c-teens-basic-zero-3": {
    "task": "Escribe 3 oraciones sobre colores y ropa: tu color favorito (+), un color que no te gusta (−), y tu prenda preferida (+).",
    "taskHighlights": [
        "color favorito",
        "color no favorito",
        "ropa"
    ],
    "exampleLines": [
        "My favorite color is electric blue. 💙",
        "I do not like dark brown clothes. 🟤",
        "I always wear my comfortable black sneakers. 👟"
    ],
    "whatToInclude": [
        {
            "icon": "🎨",
            "label": "Tu color favorito (+)"
        },
        {
            "icon": "🚫",
            "label": "Un color que no usas (−)"
        },
        {
            "icon": "👕",
            "label": "Tu prenda de vestir preferida (+)"
        }
    ],
    "tips": [
        "El color va antes de la prenda: 'black sneakers'.",
        "Usa 'wear' para vestir."
    ],
    "badgeText": "Color Stylist 🎨"
},
  "c-teens-basic-zero-4": {
    "task": "Escribe 3 oraciones sobre tu familia: con quién vives (+), un rasgo de un familiar (+), y una pregunta sobre hermanos (?).",
    "taskHighlights": [
        "con quién vives",
        "rasgo familiar",
        "pregunta"
    ],
    "exampleLines": [
        "I live with my mom and my brother. 👨‍👩‍👦",
        "My sister does not like loud rock music. 🎧",
        "Do you have any brothers or sisters? ❓"
    ],
    "whatToInclude": [
        {
            "icon": "👨‍👩‍👧",
            "label": "Con quién vives (+)"
        },
        {
            "icon": "🚫",
            "label": "Algo que no le gusta a un familiar (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de familia con 'Do you have...?' (?)"
        }
    ],
    "tips": [
        "Usa 'with' para indicar compañía.",
        "Usa 'Does he/she...?' para 3ra persona."
    ],
    "badgeText": "Family Squad 👨‍👩‍👧"
},
  "c-teens-basic-zero-5": {
    "task": "Escribe 3 oraciones sobre comidas y bebidas: tu plato preferido (+), una comida que no toleras (−), y una pregunta (?).",
    "taskHighlights": [
        "plato preferido",
        "comida no deseada",
        "pregunta"
    ],
    "exampleLines": [
        "I love homemade pizza with extra melted cheese. 🍕",
        "I never drink black coffee without milk. ☕",
        "What is your favorite meal for dinner? 🍽️"
    ],
    "whatToInclude": [
        {
            "icon": "🍕",
            "label": "Tu comida preferida (+)"
        },
        {
            "icon": "🚫",
            "label": "Algo que nunca consumes (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de comida con 'What is your favorite...?' (?)"
        }
    ],
    "tips": [
        "Usa adjetivos de sabor: 'spicy', 'sweet', 'delicious'.",
        "Revisa ortografía."
    ],
    "badgeText": "Foodie Pro 🍕"
},
  "c-teens-basic-zero-6": {
    "task": "Escribe 3 oraciones sobre animales y mascotas: tu mascota (+), un animal que te asusta (−), y tu animal preferido (+).",
    "taskHighlights": [
        "mascota",
        "animal temido",
        "animal preferido"
    ],
    "exampleLines": [
        "I have a very playful cat named Luna. 🐱",
        "I am really scared of poisonous snakes. 🐍",
        "Dolphins are my favorite marine animals. 🐬"
    ],
    "whatToInclude": [
        {
            "icon": "🐱",
            "label": "Tu mascota o animal doméstico (+)"
        },
        {
            "icon": "🚫",
            "label": "Animal que te asusta con 'scared of' (−)"
        },
        {
            "icon": "🐬",
            "label": "Tu animal salvaje preferido (+)"
        }
    ],
    "tips": [
        "'Scared of' significa tener miedo a algo.",
        "Los plurales irregulares no llevan 's'."
    ],
    "badgeText": "Animal Hero 🐾"
},
  "c-teens-basic-zero-7": {
    "task": "Escribe 3 oraciones sobre rasgos físicos y habilidades: tus ojos/cabello (+), lo que no puedes hacer (−), y una pregunta (?).",
    "taskHighlights": [
        "rasgos",
        "limitación",
        "pregunta"
    ],
    "exampleLines": [
        "I have dark brown eyes and long wavy hair. 👁️",
        "I cannot touch my toes without bending my knees. 🧘",
        "Can you whistle a complete song? 🎵"
    ],
    "whatToInclude": [
        {
            "icon": "👁️",
            "label": "Descripción física (+)"
        },
        {
            "icon": "🚫",
            "label": "Limitación física con 'cannot' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de talento con 'Can you...?' (?)"
        }
    ],
    "tips": [
        "'I have brown eyes' (los adjetivos no llevan 's').",
        "Usa 'Can you...?' para preguntar."
    ],
    "badgeText": "Body & Skills 🦾"
},
  "c-teens-basic-zero-8": {
    "task": "Escribe 3 oraciones sobre tu cuarto y casa: lo que hay (+), lo que no hay (−), y tu rincón preferido (+).",
    "taskHighlights": [
        "lo que hay",
        "lo que no hay",
        "rincón preferido"
    ],
    "exampleLines": [
        "There is a modern study desk in my bedroom. 💻",
        "There are no noisy video game consoles in my room. 🚫",
        "My favorite spot is near the sunny window. 🪟"
    ],
    "whatToInclude": [
        {
            "icon": "💻",
            "label": "Objeto con 'There is...' (+)"
        },
        {
            "icon": "🚫",
            "label": "Algo que no hay con 'There are no...' (−)"
        },
        {
            "icon": "🪟",
            "label": "Tu rincón favorito (+)"
        }
    ],
    "tips": [
        "'There is' para singular y 'There are' para plural.",
        "Usa preposiciones de lugar."
    ],
    "badgeText": "Room Architect 🏠"
},
  "c-teens-basic-zero-9": {
    "task": "Escribe 3 oraciones sobre tu ciudad y transporte: tu lugar preferido (+), transporte que no usas (−), y una pregunta (?).",
    "taskHighlights": [
        "lugar en ciudad",
        "transporte no usado",
        "pregunta"
    ],
    "exampleLines": [
        "I love going to the central library on weekends. 📚",
        "I do not travel by subway in my city. 🚇",
        "Where is the nearest bus station? 🚏"
    ],
    "whatToInclude": [
        {
            "icon": "📚",
            "label": "Lugar que visitas en tu ciudad (+)"
        },
        {
            "icon": "🚫",
            "label": "Transporte que no usas (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta con 'Where is...?' (?)"
        }
    ],
    "tips": [
        "Para transporte usa 'by bus', 'by car'.",
        "Usa 'Where is...' para ubicar."
    ],
    "badgeText": "City Explorer 🏙️"
},
  "c-teens-basic-zero-10": {
    "title": "My 3-Sentence Room Tour",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo tu habitación y la ubicación de tus objetos favoritos usando preposiciones de lugar:",
    "modelExamples": [
      "1. There is a comfortable bed next to the big window.",
      "2. My laptop and notebooks are on the study desk.",
      "3. My skateboard and sneakers are under the bed."
    ],
    "checklist": [
      "Usa al menos 3 preposiciones de lugar diferentes (in, on, under, next to, in front of, behind).",
      "Incluye 'There is' (singular) y 'There are' (plural).",
      "Menciona objetos reales de tu cuarto o casa."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 10 de Teens (Prepositions of Place & Room Tour):\n1. There is a comfortable bed next to the big window.\n2. My laptop and notebooks are on the study desk.\n3. My skateboard and sneakers are under the bed."
  },
  "c-teens-basic-zero-11": {
    "task": "Escribe 3 oraciones sobre deportes y pasatiempos: tu deporte (+), una actividad que no practicas (−), y una pregunta (?).",
    "taskHighlights": [
        "deporte",
        "actividad no practicada",
        "pregunta"
    ],
    "exampleLines": [
        "I play basketball with my school team every Tuesday. 🏀",
        "I do not play chess because I find it too slow. ♟️",
        "Do you prefer playing sports or watching video games? 🎮"
    ],
    "whatToInclude": [
        {
            "icon": "🏀",
            "label": "Deporte con 'play' (+)"
        },
        {
            "icon": "🚫",
            "label": "Actividad que no practicas (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta con 'Do you prefer...?' (?)"
        }
    ],
    "tips": [
        "Usa 'play' para deportes con balón.",
        "Usa signos de interrogación."
    ],
    "badgeText": "Gamer & Athlete 🎮"
},
  "c-teens-basic-zero-12": {
    "task": "Escribe 3 oraciones sobre gadgets y apps: tu app favorita (+), un dispositivo que no tienes (−), y una pregunta (?).",
    "taskHighlights": [
        "app favorita",
        "gadget que falta",
        "pregunta"
    ],
    "exampleLines": [
        "My favorite mobile app is Spotify for playlists. 🎧",
        "I do not own a drone or virtual reality headset yet. 🕶️",
        "What is your all-time favorite video game? 🕹️"
    ],
    "whatToInclude": [
        {
            "icon": "🎧",
            "label": "App o gadget favorito (+)"
        },
        {
            "icon": "🚫",
            "label": "Dispositivo que no posees (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de videojuegos (?)"
        }
    ],
    "tips": [
        "Usa 'yet' al final para cosas que aún no tienes.",
        "Revisa la ortografía."
    ],
    "badgeText": "Tech Master 📱"
},
  "c-teens-basic-zero-13": {
    "title": "My 3-Sentence Weather & Plans Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo el clima y cómo influye en tus actividades:",
    "modelExamples": [
      "1. Today the weather is sunny and warm, so I ride my bike in the park.",
      "2. When it is cloudy and rainy in the afternoon, my friends and I stay home to play video games.",
      "3. I always check my weather app before leaving school to see if I need my umbrella."
    ],
    "checklist": [
      "Usa adjetivos del clima (sunny, rainy, cloudy, windy, hot, cold).",
      "Incluye la fórmula 'The weather is...' o 'When it is...'.",
      "Conecta el clima con una actividad o prenda de vestir."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 13 de Teens (Weather & Seasons):\n1. Today the weather is sunny and warm, so I ride my bike in the park.\n2. When it is cloudy and rainy in the afternoon, my friends and I stay home to play video games.\n3. I always check my weather app before leaving school to see if I need my umbrella."
  },
  "c-teens-basic-zero-14": {
    "task": "Escribe 3 oraciones sobre ropa y estaciones: qué vistes en frío (+), qué no usas en verano (−), y una pregunta (?).",
    "taskHighlights": [
        "ropa de frío",
        "ropa de verano",
        "pregunta"
    ],
    "exampleLines": [
        "In cold weather, I wear an oversized hoodie and boots. 🧥",
        "I never wear thick wool sweaters during beach days. 🏖️",
        "Do you prefer bright colorful clothes or dark outfits? 🕶️"
    ],
    "whatToInclude": [
        {
            "icon": "🧥",
            "label": "Ropa de frío con 'wear' (+)"
        },
        {
            "icon": "🚫",
            "label": "Ropa que no usas en calor (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de estilo con 'Do you prefer...?' (?)"
        }
    ],
    "tips": [
        "Usa 'wear' para vestir, no 'use'.",
        "Revisa la concordancia."
    ],
    "badgeText": "Style Icon 🕶️"
},
  "c-teens-basic-zero-15": {
    "title": "My Best Friend's Physical Profile",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo la apariencia física de tu mejor amigo o celebridad favorita:",
    "modelExamples": [
      "1. My friend Mateo is tall and athletic because he plays soccer.",
      "2. He has short curly black hair and dark brown eyes.",
      "3. He wears stylish black glasses and always has a friendly smile."
    ],
    "checklist": [
      "Usa 'is' para estatura o complexión (tall, short, slim, athletic).",
      "Usa 'has' para cabello (longitud, estilo, color) y ojos.",
      "Menciona un rasgo único como gafas (glasses), pecas (freckles) o sonrisa (smile)."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 15 de Teens (Physical Appearance & Descriptions):\n1. My friend Mateo is tall and athletic because he plays soccer.\n2. He has short curly black hair and dark brown eyes.\n3. He wears stylish black glasses and always has a friendly smile."
  },
  "c-teens-basic-zero-16": {
    "task": "Escribe 3 oraciones de graduación de Basic Zero: lo que puedes hacer (+), tu tema preferido (+), y tu meta en Level 1 (+).",
    "taskHighlights": [
        "habilidad adquirida",
        "tema favorito",
        "meta Level 1"
    ],
    "exampleLines": [
        "I can speak about my personal life and daily preferences in English! 🌟",
        "I really enjoyed learning vocabulary about technology and routines. 💻",
        "I am ready to master complex conversations in Level 1! 🚀"
    ],
    "whatToInclude": [
        {
            "icon": "🌟",
            "label": "Habilidad comunicativa con 'I can...' (+)"
        },
        {
            "icon": "💡",
            "label": "Tema favorito (+)"
        },
        {
            "icon": "🚀",
            "label": "Meta personal (+)"
        }
    ],
    "tips": [
        "¡Felicitaciones por completar el Nivel 0!",
        "Mantén tu racha activa."
    ],
    "badgeText": "Level 0 Graduate 🎓"
},
  "c-teens-basic-1-1": {
    "task": "Escribe 3 oraciones sobre Saludos y Cortesía: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Saludo informal (+)",
        "Saludo formal (+)",
        "Pregunta de saludo (?)"
    ],
    "exampleLines": [
        "When I see my friends, I say: 'Hey, what's up!' 🤙",
        "I greet my teacher saying: 'Good morning, how are you?' 👨‍🏫",
        "How do you greet new classmates on the first day? 🎒"
    ],
    "whatToInclude": [
        {
            "icon": "🤙",
            "label": "Saludo informal (+)"
        },
        {
            "icon": "👨‍🏫",
            "label": "Saludo formal (+)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de saludo (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Greetings Master 🤝"
},
  "c-teens-basic-1-2": {
    "task": "Escribe 3 oraciones sobre Números y Precios: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Precio en palabras (+)",
        "Objeto que no compras (−)",
        "Pregunta con 'How much does it cost?' (?)"
    ],
    "exampleLines": [
        "My new backpack cost eighty-five thousand Colombian pesos. 🎒",
        "I do not buy overpriced designer clothes. 🚫",
        "How much does that mechanical gaming keyboard cost? ⌨️"
    ],
    "whatToInclude": [
        {
            "icon": "🎒",
            "label": "Precio en palabras (+)"
        },
        {
            "icon": "🚫",
            "label": "Objeto que no compras (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta con 'How much does it cost?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Number Wizard 💵"
},
  "c-teens-basic-1-3": {
    "task": "Escribe 3 oraciones sobre Posesivos y Pertenencias: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Objeto propio con 'mine' (+)",
        "Posesión ajena con 's (+)",
        "Pregunta con 'Is this yours?' (?)"
    ],
    "exampleLines": [
        "This wireless headphone set is mine and I use it daily. 🎧",
        "That blue skateboard is my brother's favorite possession. 🛹",
        "Is this portable phone charger yours? 🔌"
    ],
    "whatToInclude": [
        {
            "icon": "🎧",
            "label": "Objeto propio con 'mine' (+)"
        },
        {
            "icon": "🛹",
            "label": "Posesión ajena con 's (+)"
        },
        {
            "icon": "❓",
            "label": "Pregunta con 'Is this yours?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Possessive Pro 🔑"
},
  "c-teens-basic-1-4": {
    "taskTitle": "My Campus Schedule & WH- Interview",
    "taskSubtitle": "Escribe 3 oraciones completas sobre tu horario escolar y logística (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Pregunta informativa WH- (What time / Where / Who)",
      "Auxiliares DO / DOES",
      "Compartir por WhatsApp"
    ],
    "exampleLines": [
      "Students meet in the science laboratory every Tuesday at eight in the morning. 🔬 (+)",
      "Diego does not eat lunch in the crowded cafeteria because it is noisy. 🥪 (−)",
      "What time does your chemistry class start on Thursday morning? ⏰ (?)"
    ],
    "whatToInclude": [
      {
        "icon": "🏫",
        "label": "Oración afirmativa con salón, día y hora exacta de clase (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa sobre una actividad escolar usando do not / does not (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta informativa con 'What time do/does...' o 'Where do/does...' (?)"
      }
    ],
    "tips": [
      "Recuerda: en preguntas con DOES (he/she/it), el verbo principal pierde la -s: 'What time does class start?'.",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Campus Schedule Master 📚"
  },
  "c-teens-basic-1-5": {
    "taskTitle": "My Skills & Study Habits Report",
    "taskSubtitle": "Escribe 3 oraciones completas sobre cómo realizas tus actividades de estudio (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Adverbios en -LY (fluently, easily, carefully)",
      "Irregulares (well, fast, hard)",
      "Compartir por WhatsApp"
    ],
    "exampleLines": [
      "Sofia speaks English fluently and solves complex math equations easily. 🧠 (+)",
      "Lucas does not type quickly on the keyboard, but he works carefully. ⌨️ (−)",
      "Do you review your study notes patiently before important exams? 📖 (?)"
    ],
    "whatToInclude": [
      {
        "icon": "🧠",
        "label": "Oración afirmativa con adverbio de modo (-ly o well/fast/hard) (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa contrastando rapidez con cuidado (carefully) (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta con 'Do you review/study...' y un adverbio de modo (?)"
      }
    ],
    "tips": [
      "Recuerda: el adverbio va después del verbo o de su objeto: 'I speak English fluently' (no 'I speak fluently English').",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Study Skills Master 💡"
  },
  "c-teens-basic-1-6": {
    "taskTitle": "My Weekend Squad Invitation Card",
    "taskSubtitle": "Escribe 3 oraciones completas sobre tus planes de fin de semana e invitaciones (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Uso de WANT TO y NEED TO",
      "Invitación con WOULD YOU LIKE TO",
      "Compartir por WhatsApp"
    ],
    "exampleLines": [
      "I want to ride my skateboard at the park, but I need to finish my homework first. 🛹 (+)",
      "Sofia does not want to stay home all weekend, so she plans an outdoor hangout. 🌤️ (−)",
      "Would you like to join our gaming tournament at the tech lab on Saturday? 🎮 (?)"
    ],
    "whatToInclude": [
      {
        "icon": "🛹",
        "label": "Oración afirmativa con 'want to' y 'need to' contrastados (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa con 'does not want to' o 'do not need to' (−)"
      },
      {
        "icon": "💌",
        "label": "Invitación cortés con 'Would you like to + verbo base...?' (?)"
      }
    ],
    "tips": [
      "Recuerda: después de 'want to', 'need to' y 'would like to', el verbo va SIEMPRE en forma base.",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Weekend Social Master 🛹"
  },
  "c-teens-basic-1-7": {
    "taskTitle": "My Kitchen Pantry & Grocery Inventory",
    "taskSubtitle": "Escribe 3 oraciones completas sobre tu nevera y lista de compras (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Uso de SOME (afirmativo)",
      "Uso de ANY (negativo y pregunta)",
      "Uso de A / AN (singular)",
      "Compartir por WhatsApp"
    ],
    "exampleLines": [
      "We have some fresh strawberries, some artisan cheese, and an avocado. 🥑 (+)",
      "There is not any milk in the fridge, and we do not have any eggs. 🥛 (−)",
      "Do we have any bread and butter to make sandwiches for the squad? 🥪 (?)"
    ],
    "whatToInclude": [
      {
        "icon": "🥑",
        "label": "Oración afirmativa con 'some' y 'a/an' describiendo tu alacena (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa con 'any' sobre un ingrediente que falta en casa (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta de inventario con 'Do we have any...?' (?)"
      }
    ],
    "tips": [
      "Recuerda: 'some' para oraciones afirmativas y 'any' para negativas y preguntas.",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Kitchen Master Chef 🥑"
  },
  "c-teens-basic-1-8": {
    "task": "Escribe 3 oraciones sobre Restaurante y Pedidos: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Pedido cortés con 'I would like to order...' (+)",
        "Petición sin ingrediente con 'without' (−)",
        "Pregunta al mesero con 'Can we have...?' (?)"
    ],
    "exampleLines": [
        "I would like to order the grilled chicken burger, please. 🍔",
        "Could you please make it without onions or spicy sauce? 🧅",
        "Can we have the bill and a glass of water, please? 🧾"
    ],
    "whatToInclude": [
        {
            "icon": "🍔",
            "label": "Pedido cortés con 'I would like to order...' (+)"
        },
        {
            "icon": "🚫",
            "label": "Petición sin ingrediente con 'without' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta al mesero con 'Can we have...?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Dine & Order 🍽️"
},
  "c-teens-basic-1-9": {
    "title": "My 3-Step City Commute Route",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo una ruta real en tu ciudad usando preposiciones de movimiento:",
    "modelExamples": [
      "1. I ride my bicycle along the Carrera 7 bike path every Saturday morning.",
      "2. My friends and I walk through the central park and head towards the ice cream shop.",
      "3. We don't walk across the busy highway because we always use the pedestrian bridge."
    ],
    "checklist": [
      "Usa al menos 3 preposiciones de movimiento distintas (along, through, across, past, towards).",
      "Incluye medios de transporte (bicycle, scooter, bus, on foot) o verbos dinámicos (ride, skate, walk).",
      "Menciona lugares urbanos reales de tu ciudad o barrio (park, avenue, bridge, station)."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 9 de Teens (Prepositions of Movement):\n1. I ride my bicycle along the Carrera 7 bike path every Saturday morning.\n2. My friends and I walk through the central park and head towards the ice cream shop.\n3. We don't walk across the busy highway because we always use the pedestrian bridge."
  },
  "c-teens-basic-1-10": {
    "task": "Escribe 3 oraciones sobre Graduación Level 1: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Resumen de lo que puedes comunicar (+)",
        "Tema más útil (+)",
        "Meta personal para Level 2 (+)"
    ],
    "exampleLines": [
        "I can now order food, give directions, and describe my routines! 🌟",
        "Learning the difference between play, go, and do was super helpful. ⚽",
        "I am ready to conquer past tenses in Level 2! 🚀"
    ],
    "whatToInclude": [
        {
            "icon": "🌟",
            "label": "Resumen de lo que puedes comunicar (+)"
        },
        {
            "icon": "💡",
            "label": "Tema más útil (+)"
        },
        {
            "icon": "🚀",
            "label": "Meta personal para Level 2 (+)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Level 1 Champion 🏆"
},
  "c-teens-basic-2-1": {
    "task": "Escribe 3 oraciones en tu libreta sobre fauna y protección usando Pronombres Objeto (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Pronombres objeto (me, him, her, it, us, them)",
      "Verbos de protección y rescate"
    ],
    "exampleLines": [
      "We protect them from illegal poaching and give them clean food every day. 🐾 (+)",
      "Poachers do not care about her, so we rescue her and take her to the clinic. 🩺 (−)",
      "Can you show me the tiger habitat and help us feed the endangered condors? 🐅 (?)"
    ],
    "whatToInclude": [
      {
        "icon": "🐾",
        "label": "Oración afirmativa con pronombre objeto (them / it / him / her) (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa sobre daño animal usando pronombre objeto (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta pidiendo ayuda con 'Can you help us / show me...?' (?)"
      }
    ],
    "tips": [
      "Recuerda: los pronombres objeto van DESPUÉS del verbo principal o preposición: 'protect them', 'care about her'.",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Wildlife Protector 🐾"
  },
  "c-teens-basic-2-2": {
      "task": "Escribe 3 oraciones completas en tu libreta describiendo tu habitación soñada con There is / There are y preposiciones de lugar (+, −, ?).",
      "taskHighlights": [
          "There is / There are",
          "preposiciones de lugar",
          "objetos de habitación (+, −, ?)"
      ],
      "exampleLines": [
          "There is a large ergonomic desk next to the window with dual gaming monitors. 🖥️",
          "There aren't any loud televisions in my bedroom because I value peace and quiet. 🤫",
          "Are there any LED strip lights behind your bed or near the bookshelf? 💡"
      ],
      "whatToInclude": [
          {
              "icon": "🛏️",
              "label": "Oración afirmativa con There is/are (+)"
          },
          {
              "icon": "🚫",
              "label": "Oración negativa con There isn't/aren't (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta con Is there / Are there (?)"
          }
      ],
      "tips": [
          "Usa preposiciones como next to, behind, between y across from.",
          "Revisa singular (there is a...) vs plural (there are three...)."
      ],
      "badgeText": "Room Designer 🏆",
      "modelWhatsApp": "Teacher, aquí está mi tarea sobre mi cuarto soñado: There is a comfortable desk next to the window and there are two gaming chairs, but there isn't a TV!"
  },
  "c-teens-basic-2-3": {
      "task": "Escribe 3 oraciones en tu libreta sobre cómo te desplazas por tu ciudad, los medios de transporte y cómo llegar a tu lugar favorito (+, −, ?).",
      "taskHighlights": [
          "medios de transporte",
          "tiempos y distancias",
          "cómo llegar a lugares (+, −, ?)"
      ],
      "exampleLines": [
          "I take the modern subway to reach the downtown library in fifteen minutes. 🚇",
          "We do not drive during peak rush hours because the avenue is always jammed. 🚗",
          "How long does it take you to get to school by bicycle every morning? 🚲"
      ],
      "whatToInclude": [
          {
              "icon": "🚇",
              "label": "Oración afirmativa sobre tu ruta habitual (+)"
          },
          {
              "icon": "🚫",
              "label": "Oración negativa sobre el tráfico o transporte (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta sobre tiempos de traslado (?)"
          }
      ],
      "tips": [
          "Usa verbos de transporte como take the bus, ride a bike, walk.",
          "Expresa tiempos con 'It takes fifteen minutes to get there'."
      ],
      "badgeText": "City Navigator 🏆",
      "modelWhatsApp": "Teacher, aquí está mi tarea de transporte: I take the bus to school every morning, but I don't take taxis because they are too expensive. How do you get to work?"
  },
  "c-teens-basic-2-4": {
      "task": "Escribe 3 oraciones en tu libreta sobre tu trabajo soñado, el lugar donde trabajarías y tus responsabilidades principales (+, −, ?).",
      "taskHighlights": [
          "profesión soñada",
          "lugar de trabajo",
          "responsabilidades (+, −, ?)"
      ],
      "exampleLines": [
          "I want to become a software engineer and build innovative mobile apps in a tech hub. 💻",
          "A game developer does not work in an emergency room or drive an ambulance. 🏥",
          "Would you like to work remotely from home or in a creative international studio? 🌍"
      ],
      "whatToInclude": [
          {
              "icon": "💼",
              "label": "Oración afirmativa sobre tu profesión soñada (+)"
          },
          {
              "icon": "🚫",
              "label": "Oración negativa sobre lo que no hace esa profesión (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta sobre preferencias laborales (?)"
          }
      ],
      "tips": [
          "Usa conectores de causa como 'because I love solving tech problems'.",
          "Menciona lugares de trabajo: in a hospital, at a design studio, from home."
      ],
      "badgeText": "Career Visionary 🏆",
      "modelWhatsApp": "Teacher, mi trabajo soñado: I want to be a digital animator in an international studio, I don't want a boring office job, and I would love to direct anime series!"
  },
  "c-teens-basic-2-5": {
    "task": "Escribe 3 oraciones en tu libreta sobre tu evolución de talentos con COULD / COULDN'T (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Uso de COULD / COULDN'T",
      "Cláusula de tiempo (When I was...)",
      "Contraste con el presente (Now I can...)"
    ],
    "exampleLines": [
      "When I was ten years old, I could sing with natural pitch and rhythm. 🎤 (+)",
      "Three years ago, I couldn't write code or develop mobile apps, but now I can. 💻 (−)",
      "Could you play a musical instrument or ride a bicycle when you were eight? 🚴 (?)"
    ],
    "whatToInclude": [
      {
        "icon": "⭐",
        "label": "Oración afirmativa con 'could' y un hito de edad (When I was...) (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa con 'couldn't' contrastando con 'now I can' (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta de habilidad pasada con 'Could you... when you were...?' (?)"
      }
    ],
    "tips": [
      "Recuerda: después de COULD y COULDN'T el verbo va SIEMPRE en su forma base: 'could sing', 'couldn't code'.",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Talent Evolution Master ⚡"
  },
  "c-teens-basic-2-6": {
      "task": "Escribe 3 oraciones en tu libreta sobre las normas de tu colegio y de convivencia usando modales de obligación y consejo (+, −, ?).",
      "taskHighlights": [
          "Must / Have to",
          "Mustn't / Shouldn't",
          "normas de colegio (+, −, ?)"
      ],
      "exampleLines": [
          "All students must arrive at the main gate before the morning bell rings. 🔔",
          "You mustn't use smartphones during science exams without permission. 📵",
          "Do we have to wear the physical education uniform every Wednesday? 🏃"
      ],
      "whatToInclude": [
          {
              "icon": "📋",
              "label": "Regla obligatoria con Must o Have to (+)"
          },
          {
              "icon": "🚫",
              "label": "Prohibición clara con Mustn't (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta sobre un reglamento con Do you have to (?)"
          }
      ],
      "tips": [
          "Recuerda: Mustn't = prohibición estricta; Don't have to = opcional.",
          "Usa verbos en su forma base después del modal."
      ],
      "badgeText": "Rule Master 🏆",
      "modelWhatsApp": "Teacher, aquí están mis reglas: Students have to wear their student ID card, they mustn't eat inside the computer lab, and they should respect classmates at all times."
  },
  "c-teens-basic-2-7": {
    "task": "Escribe 3 oraciones en tu libreta sobre tu balance de salud con TOO MUCH, TOO MANY y ENOUGH (+, −, ?):",
    "taskHighlights": [
      "3 oraciones (+, −, ?)",
      "Uso de TOO MUCH / TOO MANY",
      "Uso de (NOT) ENOUGH / PLENTY OF"
    ],
    "exampleLines": [
      "I drink enough water and eat plenty of fresh fruit during my sports training. 🍎 (+)",
      "I do not drink too many sugary sodas or spend too much screen time on weeknights. 📵 (−)",
      "Do you get enough sleep and rest after playing intense soccer matches with friends? ⚽ (?)"
    ],
    "whatToInclude": [
      {
        "icon": "⚖️",
        "label": "Oración afirmativa con 'enough' o 'plenty of' sobre un hábito saludable (+)"
      },
      {
        "icon": "🚫",
        "label": "Oración negativa con 'too much' (incontable) o 'too many' (contable) (−)"
      },
      {
        "icon": "❓",
        "label": "Pregunta de balance con 'Do you get/drink enough...?' (?)"
      }
    ],
    "tips": [
      "Recuerda: 'too much' para incontables (sugar, water, soda) y 'too many' para contables plurales (hours, drinks).",
      "Envía tus 3 oraciones por WhatsApp a tu profesor antes de la siguiente clase."
    ],
    "badgeText": "Balanced Athlete Champion ⚽⚖️"
  },
  "c-teens-basic-2-8": {
      "task": "Escribe 3 oraciones en tu libreta organizando una salida de fin de semana con amigos: lugar, transporte, hora y punto de encuentro (+, −, ?).",
      "taskHighlights": [
          "punto de encuentro",
          "hora y transporte",
          "actividad de grupo (+, −, ?)"
      ],
      "exampleLines": [
          "Let's meet at two forty-five in front of the central park fountain this Saturday. ⛲",
          "We don't need to take a taxi because the museum is only two blocks away. 🚶",
          "Would you like to grab artisan ice cream after visiting the art gallery? 🍦"
      ],
      "whatToInclude": [
          {
              "icon": "🗺️",
              "label": "Propuesta de salida con punto de encuentro (+)"
          },
          {
              "icon": "🚫",
              "label": "Aclaración sobre lo que no se necesita (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta invitando a tus amigos con Would you like (?)"
          }
      ],
      "tips": [
          "Usa expresiones de invitación: Let's meet at..., We can go to...",
          "Incluye horas precisas: at 3:15 PM, around noon."
      ],
      "badgeText": "Social Planner 🏆",
      "modelWhatsApp": "Teacher, aquí está mi plan: Let's meet at the cinema at 4 PM, we don't have to buy tickets in advance because we have digital passes, and would you like to get pizza afterwards?"
  },
  "c-teens-basic-2-9": {
      "task": "Escribe 3 oraciones en tu libreta recomendando tu película, serie o videojuego favorito usando conectores de justificación (+, −, ?).",
      "taskHighlights": [
          "reseña y recomendación",
          "conectores and, but, because",
          "opinión justificada (+, −, ?)"
      ],
      "exampleLines": [
          "I love this sci-fi movie because the soundtrack and visual effects are breathtaking. 🎬",
          "The main character is brave, but the ending leaves several mysterious questions open. ❓",
          "Do you prefer fast-paced action shooters or narrative role-playing games? 🎮"
      ],
      "whatToInclude": [
          {
              "icon": "⭐",
              "label": "Opinión entusiasta con because (+)"
          },
          {
              "icon": "⚖️",
              "label": "Contraste constructivo con but (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta pidiendo la recomendación de otro (?)"
          }
      ],
      "tips": [
          "Usa adjetivos descriptivos: breathtaking, suspenseful, overrated, outstanding.",
          "Conecta ideas usando and, but y because con naturalidad."
      ],
      "badgeText": "Critic & Reviewer 🏆",
      "modelWhatsApp": "Teacher, mi reseña: I highly recommend Spider-Man because the animation is incredible, but the second movie ended on a cliffhanger. Have you seen it?"
  },
  "c-teens-basic-2-10": {
      "task": "Escribe 3 oraciones en tu libreta como síntesis de graduación del Nivel 2: tus logros, hábitos aprendidos y tu meta para Nivel 3 (+, −, ?).",
      "taskHighlights": [
          "logros del Nivel 2",
          "hábitos y fluidez",
          "visión hacia Nivel 3 (+, −, ?)"
      ],
      "exampleLines": [
          "I can describe wildlife habitats, navigate city transit by subway, and review trending games with confidence. 🌟",
          "We should never stop practicing because consistency is the key to English fluency. 🚀",
          "Are you ready to conquer storytelling and international debates in Level 3? 🎓"
      ],
      "whatToInclude": [
          {
              "icon": "🎓",
              "label": "Declaración de logro de Nivel 2 (+)"
          },
          {
              "icon": "💪",
              "label": "Compromiso de disciplina y práctica diaria (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta entusiasta hacia el Nivel 3 (?)"
          }
      ],
      "tips": [
          "Haz un balance de lo aprendido en el nivel.",
          "Expresa orgullo por tu progreso comunicativo."
      ],
      "badgeText": "Level 2 Graduate 🏆",
      "modelWhatsApp": "Teacher, ¡me gradué del Nivel 2! I can now speak about city transport, my dream career, and animal habitats in English. Ready for Level 3!"
  },
  "c-teens-basic-3-1": {
    "title": "My 3-Point Tech Showdown Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas comparando dos dispositivos, consolas o videojuegos usando comparativos:",
    "modelExamples": [
      "1. The PlayStation 5 is faster and has better graphics than the older PlayStation 4.",
      "2. Gaming laptops are more expensive and heavier than regular study tablets.",
      "3. My wireless earbuds are not as loud as my gaming headset, but they are more comfortable."
    ],
    "checklist": [
      "Usa al menos un adjetivo comparativo corto (-er than: faster, cheaper, lighter).",
      "Usa al menos un adjetivo comparativo largo (more than: more expensive, more comfortable).",
      "Incluye un comparativo irregular (better/worse) o una estructura de igualdad (as...as)."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 1 de Teens Nivel 3 (Comparative Adjectives & Tech):\n1. The PlayStation 5 is faster and has better graphics than the older PlayStation 4.\n2. Gaming laptops are more expensive and heavier than regular study tablets.\n3. My wireless earbuds are not as loud as my gaming headset, but they are more comfortable."
  },
  "c-teens-basic-3-2": {
    "title": "My 3-Record World Showcase Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo récords mundiales reales usando adjetivos superlativos:",
    "modelExamples": [
      "1. The cheetah is the fastest land animal in the world, reaching over 100 kilometers per hour.",
      "2. Burj Khalifa is the tallest building on Earth with 828 meters of height.",
      "3. Formula 1 racing is one of the most exciting and expensive sports in history."
    ],
    "checklist": [
      "Usa al menos un superlativo corto con 'the + -est' (the fastest, the tallest, the highest).",
      "Usa al menos un superlativo largo con 'the most' (the most exciting, the most dangerous).",
      "Incluye un ámbito de comparación con 'in the world', 'on Earth' o 'in history'."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 2 de Teens Nivel 3 (Superlative Adjectives & World Records):\n1. The cheetah is the fastest land animal in the world, reaching over 100 kilometers per hour.\n2. Burj Khalifa is the tallest building on Earth with 828 meters of height.\n3. Formula 1 racing is one of the most exciting and expensive sports in history."
  },
  "c-teens-basic-3-3": {
      "task": "Escribe 3 oraciones en tu libreta sobre tu celebración o tradición familiar favorita usando preposiciones de tiempo IN, ON y AT (+, −, ?).",
      "taskHighlights": [
          "preposiciones IN, ON, AT",
          "tradiciones y celebraciones",
          "comida y costumbres (+, −, ?)"
      ],
      "exampleLines": [
          "In December, our entire extended family gathers to cook buñuelos and natilla. 🎄",
          "On New Year's Eve, we do not stay inside because everyone watches fireworks at midnight. 🎆",
          "What special traditional meal do you always eat at midnight on Christmas Eve? 🍽️"
      ],
      "whatToInclude": [
          {
              "icon": "🎉",
              "label": "Oración afirmativa con IN o ON sobre tu fiesta favorita (+)"
          },
          {
              "icon": "🚫",
              "label": "Oración negativa sobre lo que no hacen ese día (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta sobre costumbres festivas con AT (?)"
          }
      ],
      "tips": [
          "IN para meses y años (in October, in 2026).",
          "ON para días y fechas (on Friday, on December 24th).",
          "AT para horas y momentos exactos (at midnight, at 7 PM)."
      ],
      "badgeText": "Tradition Chronicler 🏆",
      "modelWhatsApp": "Teacher, mi tradición familiar: In December, we celebrate Christmas together, on December 24th we open gifts at midnight, but we don't go to bed early!"
  },
  "c-teens-basic-3-4": {
    "title": "My 3-Goal Vacation Blueprint Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas sobre tus planes futuros usando BE GOING TO:",
    "modelExamples": [
      "1. I am going to practice skateboarding every morning at the central park.",
      "2. My friends and I are going to build a new gaming setup for our streaming channel.",
      "3. Look at my study schedule, I am going to ace all my final exams!"
    ],
    "checklist": [
      "Usa 'am going to / is going to / are going to' con el verbo en forma base.",
      "Incluye al menos un plan personal y un plan grupal con amigos o familia.",
      "Menciona un marcador de tiempo futuro (next week, soon, this summer)."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 4 de Teens Nivel 3 (BE GOING TO for Future Plans):\n1. I am going to practice skateboarding every morning at the central park.\n2. My friends and I are going to build a new gaming setup for our streaming channel.\n3. Look at my study schedule, I am going to ace all my final exams!"
  },
  "c-teens-basic-3-5": {
    "title": "My 3-Time Snapshot Alibi Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas describiendo qué estabas haciendo tú y tus allegados en momentos específicos del pasado:",
    "modelExamples": [
      "1. Yesterday at 7:00 PM, I was doing my math homework on my study desk.",
      "2. My brother was playing video games while my parents were cooking dinner.",
      "3. At midnight, everyone in my house was sleeping peacefully."
    ],
    "checklist": [
      "Usa 'was + -ing' para I/he/she y 'were + -ing' para you/we/they.",
      "Incluye una hora o momento exacto del pasado (at 7:00 PM, yesterday afternoon, at midnight).",
      "Describe al menos una acción simultánea con 'while'."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 5 de Teens Nivel 3 (Past Continuous: WAS / WERE + -ING):\n1. Yesterday at 7:00 PM, I was doing my math homework on my study desk.\n2. My brother was playing video games while my parents were cooking dinner.\n3. At midnight, everyone in my house was sleeping peacefully."
  },
  "c-teens-basic-3-6": {
    "title": "My 3-Event Storyteller Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas narrando anécdotas con Pasado Continuo y Pasado Simple usando WHEN y WHILE:",
    "modelExamples": [
      "1. I was riding my bicycle in the park when suddenly it started to pour rain.",
      "2. While my sister was studying for her chemistry exam, our pet cat knocked over a water glass.",
      "3. My friends and I were playing video games online when the Wi-Fi connection died."
    ],
    "checklist": [
      "Usa al menos una oración con 'was/were + -ing... WHEN + past simple'.",
      "Usa al menos una oración con 'WHILE + was/were + -ing, past simple'.",
      "Incluye conectores narrativos como 'suddenly' o 'all of a sudden'."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 6 de Teens Nivel 3 (Past Simple vs Past Continuous with WHEN/WHILE):\n1. I was riding my bicycle in the park when suddenly it started to pour rain.\n2. While my sister was studying for her chemistry exam, our pet cat knocked over a water glass.\n3. My friends and I were playing video games online when the Wi-Fi connection died."
  },
  "c-teens-basic-3-7": {
      "task": "Escribe 3 oraciones en tu libreta narrando la biografía y logros de un personaje inspirador con verbos en pasado simple (+, −, ?).",
      "taskHighlights": [
          "verbos regulares e irregulares",
          "fechas y logros pasados",
          "resiliencia y legado (+, −, ?)"
      ],
      "exampleLines": [
          "Luis Diaz was born in Barrancas, trained tirelessly, and won championships in Europe. ⚽",
          "He did not give up on his dreams despite severe financial difficulties in his youth. 💪",
          "When did your favorite singer or athlete achieve their first major international victory? 🏆"
      ],
      "whatToInclude": [
          {
              "icon": "⭐",
              "label": "Oración con verbos en pasado sobre logros de vida (+)"
          },
          {
              "icon": "🚫",
              "label": "Oración negativa con didn't sobre obstáculos superados (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta biográfica con Did o When (?)"
          }
      ],
      "tips": [
          "Combina verbos regulares (trained, worked) e irregulares (won, was born, grew up).",
          "Recuerda que con 'didn't' el verbo vuelve a su forma base."
      ],
      "badgeText": "Biographer 🏆",
      "modelWhatsApp": "Teacher, aquí está mi biografía: Shakira was born in Barranquilla, she wrote her first song at age eight, and she didn't stop until she conquered global stages!"
  },
  "c-teens-basic-3-8": {
      "task": "Escribe 3 oraciones en tu libreta narrando una anécdota o contratiempo cotidiano y cómo lo resolviste usando conectores de secuencia (+, −, ?).",
      "taskHighlights": [
          "conectores First, Suddenly, Finally",
          "verbos en pasado simple",
          "anécdota y desenlace (+, −, ?)"
      ],
      "exampleLines": [
          "First, we went to the cinema, but suddenly the power went out during the climax. ⚡",
          "Fortunately, the technicians fixed the projector quickly, so we didn't miss the ending. 🎟️",
          "What was the funniest unexpected surprise that happened to you on your last vacation? 😂"
      ],
      "whatToInclude": [
          {
              "icon": "📖",
              "label": "Inicio de la anécdota con First o Suddenly (+)"
          },
          {
              "icon": "🚫",
              "label": "Desenlace positivo con Fortunately y negación (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta invitando al interlocutor a relatar su anécdota (?)"
          }
      ],
      "tips": [
          "Usa marcadores de tiempo: First, Suddenly, Fortunately, In the end.",
          "Muestra contraste de emociones ante el imprevisto."
      ],
      "badgeText": "Storyteller 🏆",
      "modelWhatsApp": "Teacher, mi anécdota: First, I left my homework on the dining table, but fortunately my brother brought it to school before class, so I didn't lose my points!"
  },
  "c-teens-basic-3-9": {
      "task": "Escribe 3 oraciones en tu libreta haciendo peticiones formales y amables ante problemas de tecnología o de clase con Could you y Would you (+, −, ?).",
      "taskHighlights": [
          "Could you please...",
          "Would you mind...",
          "peticiones corteses (+, −, ?)"
      ],
      "exampleLines": [
          "Could you please explain that grammar rule one more time before the exam starts? 🙋",
          "Would you mind lending me your laptop charger for ten minutes? 🔌",
          "I am sorry to bother you, but could you show me where the science lab is located? 🧪"
      ],
      "whatToInclude": [
          {
              "icon": "🤝",
              "label": "Petición muy educada con Could you please (+)"
          },
          {
              "icon": "💡",
              "label": "Solicitud con Would you mind (+ verbo con -ing) (+)"
          },
          {
              "icon": "❓",
              "label": "Pregunta cortés de ubicación o asistencia (?)"
          }
      ],
      "tips": [
          "Usa entonación suave: 'Could you please help me with this exercise?'.",
          "Con 'Would you mind', el verbo debe llevar -ing: 'Would you mind sharing?'."
      ],
      "badgeText": "Diplomatic Speaker 🏆",
      "modelWhatsApp": "Teacher, mis peticiones corteses: Could you please give me two minutes to check my microphone? Would you mind repeating the question, please? Thank you!"
  },
  "c-teens-basic-3-10": {
      "task": "Escribe 3 oraciones en tu libreta celebrando tu graduación del Nivel 3: narrando una anécdota pasada, tus logros y tus metas con Will (+, −, ?).",
      "taskHighlights": [
          "logros del Nivel 3",
          "anécdota en pasado",
          "predicciones futuras con will (+, −, ?)"
      ],
      "exampleLines": [
          "I mastered past storytelling, world records with superlatives, and future plans with will! 🚀",
          "I didn't think English could be this exciting until we started active speaking debates. 💬",
          "Will you continue sharpening your communicative superpowers in Level 4? 🌟"
      ],
      "whatToInclude": [
          {
              "icon": "🎓",
              "label": "Oración de orgullo sobre tus logros en Nivel 3 (+)"
          },
          {
              "icon": "🚫",
              "label": "Reflexión sobre una dificultad que superaste (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta motivadora hacia el Nivel 4 (?)"
          }
      ],
      "tips": [
          "Combina pasado simple con planes futuros.",
          "Proyecta tu siguiente meta lingüística."
      ],
      "badgeText": "Level 3 Master 🏆",
      "modelWhatsApp": "Teacher, ¡graduado de Nivel 3! I mastered past continuous, comparatives, and storytelling. In Level 4, I will become a confident debate leader!"
  },
  "c-teens-basic-4-1": {
    "task": "Escribe 3 oraciones sobre 1: My Opinions & Perspectives: un acuerdo formal (+), un desacuerdo respetuoso (−), y una pregunta para debatir (?).",
    "taskHighlights": [
        "acuerdo (+)",
        "desacuerdo respetuoso (−)",
        "pregunta de debate (?)"
    ],
    "exampleLines": [
        "I completely agree with the idea that AI can enhance student learning. 🤖",
        "I respectfully disagree because human creativity is irreplaceable. 💡",
        "What is your perspective on regulating social media for teenagers? 📱"
    ],
    "whatToInclude": [
        {
            "icon": "🤝",
            "label": "Expresión de acuerdo con 'I completely agree that...' (+)"
        },
        {
            "icon": "🛡️",
            "label": "Desacuerdo respetuoso con 'I respectfully disagree because...' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de debate con 'What is your perspective on...?' (?)"
        }
    ],
    "tips": [
        "Usa conectores diplomáticos.",
        "Justifica tu argumento con 'because'."
    ],
    "badgeText": "Debate Master 🎙️"
},
  "c-teens-basic-4-2": {
      "task": "Escribe 4 oraciones en tu libreta dando consejos saludables de estudio y bienestar a un amigo estresado usando Should, Shouldn't y Why don't you.",
      "taskHighlights": [
          "You should...",
          "You shouldn't...",
          "Why don't you... / If I were you"
      ],
      "exampleLines": [
          "You should create a weekly study schedule and take active ten-minute breaks. ⏰",
          "You shouldn't check social media notifications while doing complex math homework. 📵",
          "Why don't you practice speaking English with a classmate over Discord this afternoon? 🎧",
          "If I were you, I would drink herbal tea and sleep eight full hours before the exam. 🫖"
      ],
      "whatToInclude": [
          {
              "icon": "💡",
              "label": "Consejo positivo con You should (+)"
          },
          {
              "icon": "🚫",
              "label": "Advertencia contra malos hábitos con You shouldn't (−)"
          },
          {
              "icon": "❓",
              "label": "Sugerencia amigable con Why don't you (?)"
          },
          {
              "icon": "🤝",
              "label": "Consejo empático con If I were you (+)"
          }
      ],
      "tips": [
          "Usa verbos en forma base después de should y shouldn't.",
          "'If I were you, I would...' da un tono maduro y respetuoso."
      ],
      "badgeText": "Wellness Mentor 🏆",
      "modelWhatsApp": "Teacher, mis consejos para exámenes: You should sleep at least 8 hours, you shouldn't drink energy drinks late at night, and why don't you review key flashcards with a friend?"
  },
  "c-teens-basic-4-3": {
    "task": "Escribe 3 oraciones sobre 3: Conditions & Scientific Facts (Zero Conditional): una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-basic-4-4": {
      "task": "Escribe 3 oraciones en tu libreta usando acrónimos y abreviaturas digitales comunes en inglés (TBH, IMO, BTW, BRB, RN, WDYT) con buena netiqueta.",
      "taskHighlights": [
          "acrónimos digitales (IMO, TBH, BTW)",
          "netiqueta y tono casual",
          "conversación online (+, −, ?)"
      ],
      "exampleLines": [
          "TBH, learning English through online gaming servers is one of the most effective methods. 🎮",
          "I am not online RN because my internet connection is dropping packets, BRB in five! 📶",
          "BTW, WDYT about organizing a multiplayer practice session on Saturday evening? 💬"
      ],
      "whatToInclude": [
          {
              "icon": "📱",
              "label": "Opinión digital con TBH o IMO (+)"
          },
          {
              "icon": "⏳",
              "label": "Estado temporal con RN o BRB (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta de opinión con WDYT (?)"
          }
      ],
      "tips": [
          "TBH = To be honest / IMO = In my opinion / BTW = By the way.",
          "BRB = Be right back / RN = Right now / WDYT = What do you think?"
      ],
      "badgeText": "Digital Native 🏆",
      "modelWhatsApp": "Teacher, mi mensaje de chat: IMO, learning English on Discord is super fun. BTW, our group project is ready RN, WDYT about submitting it early?"
  },
  "c-teens-basic-4-5": {
    "task": "Escribe 3 oraciones sobre 5: Future Possibilities & Consequences (First Conditional): una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-basic-4-6": {
    "title": "My 3-Dream Hypothetical Card",
    "instructions": "Escribe en tu cuaderno de inglés 3 oraciones completas explorando situaciones hipotéticas usando el Segundo Condicional:",
    "modelExamples": [
      "1. If I won a million dollars, I would buy a modern house for my family and invest in tech startups.",
      "2. If I had the power of teleportation, I would visit my best friends around the world every weekend.",
      "3. If I were the school principal for one month, I would replace standard desks with ergonomic gaming chairs."
    ],
    "checklist": [
      "Usa 'If + past simple' en la cláusula de condición.",
      "Usa 'would + base verb' (o could) en la cláusula de resultado.",
      "Incluye la estructura formal 'If I were...' en al menos un ejemplo."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 6 de Teens Nivel 4 (Second Conditional: IF + PAST, WOULD):\n1. If I won a million dollars, I would buy a modern house for my family and invest in tech startups.\n2. If I had the power of teleportation, I would visit my best friends around the world every weekend.\n3. If I were the school principal for one month, I would replace standard desks with ergonomic gaming chairs."
  },
  "c-teens-basic-4-7": {
    "title": "The Mystery Detective Case File",
    "instructions": "Escribe en tu cuaderno de inglés 4 oraciones completas de misterio escolar usando la regla de oro de pronombres indefinidos:",
    "modelExamples": [
      "1. Someone left a pair of black sunglasses in the cafeteria today, but nobody has claimed them.",
      "2. I searched everywhere for my portable charger, but there was nothing inside my locker.",
      "3. Did anyone notice something strange near the computer lab during the morning break?",
      "4. Everyone in my English class was excited to solve the mysterious puzzle together."
    ],
    "checklist": [
      "Usa al menos 4 pronombres diferentes (someone, anything, nowhere, everyone).",
      "Recuerda la regla de oro: verbo en singular (everyone IS, nobody KNOWS).",
      "Cero dobles negaciones: no uses 'don't have nothing'."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 7 de Teens Nivel 4 (Indefinite Pronouns: Someone, Anything, Nowhere):\n1. Someone left a pair of black sunglasses in the cafeteria today, but nobody has claimed them.\n2. I searched everywhere for my portable charger, but there was nothing inside my locker.\n3. Did anyone notice something strange near the computer lab during the morning break?\n4. Everyone in my English class was excited to solve the mysterious puzzle together."
  },
  "c-teens-basic-4-8": {
    "title": "The Clan & Academy Code of Conduct",
    "instructions": "Escribe en tu cuaderno de inglés 4 reglas claras para un torneo de esports o salón de clases usando la gama completa de modales:",
    "modelExamples": [
      "1. All tournament competitors have to wear official team jerseys and arrive 15 minutes before the match.",
      "2. You must respect the referee's final decision without arguing or throwing temper tantrums.",
      "3. Players mustn't use toxic language, cheat codes, or unauthorized mods in the server.",
      "4. You don't have to bring your own PC or monitor because the gaming arena provides them."
    ],
    "checklist": [
      "Usa 'have to' para obligación externa y 'must' para regla oficial.",
      "Usa 'mustn't' para prohibición absoluta (¡sin 'to'!).",
      "Usa 'don't have to' para aclarar algo opcional que no es obligatorio."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 8 de Teens Nivel 4 (Modals of Obligation & Prohibition: Must, Have to, Mustn't, Don't have to):\n1. All tournament competitors have to wear official team jerseys.\n2. You must respect the referee's final decision at all times.\n3. Players mustn't use toxic language or cheat codes in the match.\n4. You don't have to bring your own monitor to the tournament arena."
  },
  "c-teens-basic-4-9": {
      "task": "Escribe un borrador de correo formal para un profesor o director escolar pidiendo información o prórroga usando fórmulas de cortesía y registro profesional.",
      "taskHighlights": [
          "Dear Professor / Dear Ms.",
          "I am writing to...",
          "Could you please / Best regards"
      ],
      "exampleLines": [
          "Dear Professor Martinez, I hope this email finds you well. 📧",
          "I am writing to respectfully request additional feedback regarding my science presentation. 📑",
          "Could you please let me know your office hours for this Thursday afternoon? 🕒",
          "Thank you for your valuable guidance and consideration. Best regards, Santiago Morales. ✍️"
      ],
      "whatToInclude": [
          {
              "icon": "✉️",
              "label": "Saludo formal con Dear [Apellido]"
          },
          {
              "icon": "🎯",
              "label": "Propósito formal con I am writing to..."
          },
          {
              "icon": "❓",
              "label": "Petición cortés con Could you please..."
          },
          {
              "icon": "🖋️",
              "label": "Despedida profesional con Best regards"
          }
      ],
      "tips": [
          "Nunca uses slang ni contracciones (I'm -> I am) en un correo formal.",
          "Termina siempre con una despedida respetuosa: Sincerely o Best regards."
      ],
      "badgeText": "Formal Diplomat 🏆",
      "modelWhatsApp": "Teacher, mi correo formal: Dear Mr. Gomez, I am writing to request a meeting about the science club. Could you please let me know your availability? Best regards, Mateo."
  },
  "c-teens-basic-4-10": {
      "task": "Escribe 3 oraciones en tu libreta celebrando tu graduación del Nivel 4: tu manifiesto de liderazgo, tu postura en un debate y tu meta futura con First Conditional.",
      "taskHighlights": [
          "liderazgo juvenil y debate",
          "postura crítica con In my opinion",
          "condición futura (If I..., I will...) (+, −, ?)"
      ],
      "exampleLines": [
          "In my opinion, young leaders have the responsibility to advocate for digital literacy worldwide. 🌍",
          "I do not support unfair tournament rules because integrity and fair play define true champions. ⚖️",
          "If I continue speaking English with discipline every day, I will qualify for international scholarships! 🎓"
      ],
      "whatToInclude": [
          {
              "icon": "🎙️",
              "label": "Postura de liderazgo con In my opinion (+)"
          },
          {
              "icon": "🚫",
              "label": "Argumento crítico con I do not support (−)"
          },
          {
              "icon": "🌟",
              "label": "Meta con First Conditional (If I..., I will...) (+)"
          }
      ],
      "tips": [
          "Muestra tu madurez comunicativa B1.",
          "Demuestra la síntesis de opiniones, condicionales y debate."
      ],
      "badgeText": "Youth Leader 🏆",
      "modelWhatsApp": "Teacher, ¡graduado de Nivel 4! In my opinion, effort creates success. If I keep studying with dedication, I will speak fluent English at university. Thank you!"
  },
  "c-teens-inter-1": {
    "task": "Escribe 3 oraciones sobre 1: My Life Experiences (Present Perfect): una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-inter-2": {
    "task": "Escribe 3 oraciones sobre 2: Teen Slang & Phrasal Verbs in Daily Conversations: un phrasal verb en contexto (+), uno en forma negativa (−), y una pregunta con un idiom (?).",
    "taskHighlights": [
        "phrasal verb (+)",
        "negativa con phrasal verb (−)",
        "pregunta con idiom (?)"
    ],
    "exampleLines": [
        "I always look up to leaders who take action and solve real community problems. 🌟",
        "We must never give up on our long-term career aspirations. 🚀",
        "How do you usually figure out complex coding errors under pressure? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "💡",
            "label": "Oración afirmativa con un phrasal verb contextualizado (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa con phrasal verb (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta conversacional con phrasal verb o modismo (?)"
        }
    ],
    "tips": [
        "Aprende el phrasal verb como una unidad de significado.",
        "Observa si es separable o inseparable."
    ],
    "badgeText": "Idiom & Slang Pro 💬"
},
  "c-teens-inter-3": {
      "task": "Escribe 4 oraciones en tu libreta resolviendo un misterio o deduciendo una situación incierta usando Modales de Deducción (Must be, Can't be, Might be, Could be).",
      "taskHighlights": [
          "Must be (99% seguro)",
          "Can't be (0% imposible)",
          "Might be / Could be (50% posible)"
      ],
      "exampleLines": [
          "The classroom lights are off and the door is locked, so the teacher must be at the faculty meeting. 🔒",
          "That strange silhouette can't be a burglar because it is just a coat hanging on the rack. 🧥",
          "The parcel left on the porch might be the new gaming headset I ordered last Friday. 📦",
          "Could that mysterious noise coming from the attic be a family of noisy birds? 🐦"
      ],
      "whatToInclude": [
          {
              "icon": "🔍",
              "label": "Deducción casi segura con Must be (+)"
          },
          {
              "icon": "🚫",
              "label": "Imposibilidad lógica con Can't be (−)"
          },
          {
              "icon": "❓",
              "label": "Posibilidad intermedia con Might be / Could be (?)"
          }
      ],
      "tips": [
          "Must be = Estás 99% seguro por la evidencia lógica.",
          "Can't be = Es 100% imposible lógicamente.",
          "Might / Could = Tienes dudas, hay un 50% de probabilidad."
      ],
      "badgeText": "Logic Sleuth 🏆",
      "modelWhatsApp": "Teacher, mis deducciones lógicas: His backpack is still on his chair, so Mateo must be in the library. He can't be at home because his bike is outside. He might be talking to the principal!"
  },
  "c-teens-inter-4": {
    "title": "The Butterfly Effect & Alternate History Card",
    "instructions": "Escribe en tu cuaderno de inglés 4 oraciones completas explorando situaciones hipotéticas del pasado con el Tercer Condicional:",
    "modelExamples": [
      "1. If I had known about the heavy highway traffic this morning, I would have taken the metro instead.",
      "2. We would have won the basketball championship if our team had practiced free throws more consistently.",
      "3. If scientists hadn't discovered penicillin in 1928, millions of lives wouldn't have been saved.",
      "4. What would you have done if you had found an abandoned puppy on the street yesterday?"
    ],
    "checklist": [
      "Usa 'If + had + participio pasado' en la cláusula de condición.",
      "Usa 'would have + participio pasado' (o could have) en la cláusula de resultado.",
      "Incluye al menos un ejemplo con forma negativa ('hadn't' o 'wouldn't have')."
    ],
    "whatsappShareText": "¡Hola Teacher! Aquí está mi tarea de la Clase 4 de Teens Inter (Third Conditional & Past Regrets: IF + PAST PERFECT, WOULD HAVE):\n1. If I had known about the highway traffic, I would have taken the metro.\n2. We would have won the championship if we had practiced free throws consistently.\n3. If scientists hadn't discovered penicillin, millions of lives wouldn't have been saved.\n4. If I had stayed home yesterday, I wouldn't have met my favorite music producer."
  },
  "c-teens-inter-5": {
    "task": "Escribe 3 oraciones sobre 5: Agreeing & Disagreeing Respectfully: un acuerdo formal (+), un desacuerdo respetuoso (−), y una pregunta para debatir (?).",
    "taskHighlights": [
        "acuerdo (+)",
        "desacuerdo respetuoso (−)",
        "pregunta de debate (?)"
    ],
    "exampleLines": [
        "I completely agree with the idea that AI can enhance student learning. 🤖",
        "I respectfully disagree because human creativity is irreplaceable. 💡",
        "What is your perspective on regulating social media for teenagers? 📱"
    ],
    "whatToInclude": [
        {
            "icon": "🤝",
            "label": "Expresión de acuerdo con 'I completely agree that...' (+)"
        },
        {
            "icon": "🛡️",
            "label": "Desacuerdo respetuoso con 'I respectfully disagree because...' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de debate con 'What is your perspective on...?' (?)"
        }
    ],
    "tips": [
        "Usa conectores diplomáticos.",
        "Justifica tu argumento con 'because'."
    ],
    "badgeText": "Debate Master 🎙️"
},
  "c-teens-inter-6": {
      "task": "Escribe un guion de 60 segundos para el gancho de apertura y presentación de un episodio de podcast en inglés con gancho (hook), tema e invitado especial.",
      "taskHighlights": [
          "gancho de apertura (hook)",
          "presentación de tema e invitado",
          "llamado a la acción (stay tuned)"
      ],
      "exampleLines": [
          "Welcome back to Teen Tech Waves! Today we explore how artificial intelligence is reshaping digital creativity. 🎙️",
          "Joining us in the studio today is Laura, an inspiring sixteen-year-old digital illustrator from Bogota. 🎨",
          "What inspired you to start coding at such a young age, and what advice would you give fellow teens? 💡",
          "Make sure to smash that subscribe button, share with your friends, and stay tuned for more epic talks! 🔔"
      ],
      "whatToInclude": [
          {
              "icon": "🎙️",
              "label": "Gancho de apertura con el nombre del show"
          },
          {
              "icon": "👥",
              "label": "Presentación formal del invitado con credenciales"
          },
          {
              "icon": "❓",
              "label": "Pregunta incisiva de entrevista"
          },
          {
              "icon": "🔔",
              "label": "Llamado a la acción y despedida (Stay tuned)"
          }
      ],
      "tips": [
          "Usa entonación dinámica de locutor.",
          "Usa frases de transición como 'Without further ado' y 'Stay tuned'."
      ],
      "badgeText": "Podcast Host 🏆",
      "modelWhatsApp": "Teacher, aquí está la intro de mi podcast: Welcome back to The Gamer Zone! Today we interview Carlos, a competitive esports captain. Stay tuned for his best tournament tips!"
  },
  "c-teens-inter-7": {
      "task": "Escribe 4 oraciones en tu libreta contrastando acciones completadas (Present Perfect) con actividades continuas en progreso (Present Perfect Continuous con For y Since).",
      "taskHighlights": [
          "Present Perfect (acción completada)",
          "Present Perfect Continuous (acción en curso)",
          "Uso de For y Since"
      ],
      "exampleLines": [
          "I have read three fantasy novels this year, and I have been writing my own short story for two months. 📚",
          "She is exhausted because she has been training for the national swimming championship since 6 AM. 🏊",
          "We haven't finished the robotics prototype yet, but we have been testing the circuits all morning. 🤖",
          "How long have you been learning to play the electric guitar with your band? 🎸"
      ],
      "whatToInclude": [
          {
              "icon": "✅",
              "label": "Present Perfect para resultado o logro completado (+)"
          },
          {
              "icon": "⏳",
              "label": "Present Perfect Continuous con For o Since (+)"
          },
          {
              "icon": "🚫",
              "label": "Negación con haven't / hasn't (−)"
          },
          {
              "icon": "❓",
              "label": "Pregunta con How long have you been...? (?)"
          }
      ],
      "tips": [
          "For para duración (for 3 hours, for 2 years).",
          "Since para punto de partida (since 8 AM, since 2022).",
          "Usa have/has been + verbo-ing para explicar el cansancio o estado actual."
      ],
      "badgeText": "Time Weaver 🏆",
      "modelWhatsApp": "Teacher, mi contraste de tiempos: I have finished my math homework, and I have been practicing piano for two hours. How long have you been teaching English?"
  },
  "c-teens-inter-8": {
    "task": "Escribe 3 oraciones sobre 8: Advanced Phrasal Verbs in Storytelling & Media: un phrasal verb en contexto (+), uno en forma negativa (−), y una pregunta con un idiom (?).",
    "taskHighlights": [
        "phrasal verb (+)",
        "negativa con phrasal verb (−)",
        "pregunta con idiom (?)"
    ],
    "exampleLines": [
        "I always look up to leaders who take action and solve real community problems. 🌟",
        "We must never give up on our long-term career aspirations. 🚀",
        "How do you usually figure out complex coding errors under pressure? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "💡",
            "label": "Oración afirmativa con un phrasal verb contextualizado (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa con phrasal verb (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta conversacional con phrasal verb o modismo (?)"
        }
    ],
    "tips": [
        "Aprende el phrasal verb como una unidad de significado.",
        "Observa si es separable o inseparable."
    ],
    "badgeText": "Idiom & Slang Pro 💬"
},
  "c-teens-inter-9": {
    "task": "Escribe 3 oraciones sobre 9: Past Modals of Deduction: una en pasado afirmativo (+), una en pasado negativo (−), y una pregunta en pasado (?).",
    "taskHighlights": [
        "pasado afirmativo (+)",
        "pasado negativo (−)",
        "pregunta en pasado (?)"
    ],
    "exampleLines": [
        "Yesterday, I was at the city library studying for my science test. 📚",
        "I was not at home during the afternoon blackout. ⚡",
        "Where were you when the surprise party started? 🎉"
    ],
    "whatToInclude": [
        {
            "icon": "📖",
            "label": "Oración afirmativa en pasado con 'was / were / -ed' (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa en pasado con 'was not / didn't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta en pasado con 'Where were you / Did you...?' (?)"
        }
    ],
    "tips": [
        "Usa 'was' para I/he/she/it y 'were' para you/we/they.",
        "No dupliques el pasado con 'didn't'."
    ],
    "badgeText": "Past Master ⏳"
},
  "c-teens-inter-10": {
    "task": "Escribe 3 oraciones sobre 10: Conditionals Synthesis & Time Clauses: una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-inter-11": {
    "task": "Escribe 3 oraciones sobre 11: Nuanced Opinions & Diplomacy in Debates: un acuerdo formal (+), un desacuerdo respetuoso (−), y una pregunta para debatir (?).",
    "taskHighlights": [
        "acuerdo (+)",
        "desacuerdo respetuoso (−)",
        "pregunta de debate (?)"
    ],
    "exampleLines": [
        "I completely agree with the idea that AI can enhance student learning. 🤖",
        "I respectfully disagree because human creativity is irreplaceable. 💡",
        "What is your perspective on regulating social media for teenagers? 📱"
    ],
    "whatToInclude": [
        {
            "icon": "🤝",
            "label": "Expresión de acuerdo con 'I completely agree that...' (+)"
        },
        {
            "icon": "🛡️",
            "label": "Desacuerdo respetuoso con 'I respectfully disagree because...' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de debate con 'What is your perspective on...?' (?)"
        }
    ],
    "tips": [
        "Usa conectores diplomáticos.",
        "Justifica tu argumento con 'because'."
    ],
    "badgeText": "Debate Master 🎙️"
},
  "c-teens-inter-12": {
      "task": "Escribe tu video pitch de graduación del Nivel Intermedio (B1+) simulando una entrevista de beca internacional con el método STAR y visión futura.",
      "taskHighlights": [
          "Método STAR (Situation, Task, Action, Result)",
          "visión futura con Second Conditional",
          "oratoria y liderazgo B1+"
      ],
      "exampleLines": [
          "Hello distinguished committee! I am Santiago Morales, a motivated young innovator from Colombia. 🇨🇴",
          "When our community faced a plastic waste problem, I organized a recycling drive that collected 500 kilograms. ♻️",
          "If I were awarded this international scholarship, I would study environmental robotics to empower youth worldwide. 🌍",
          "Thank you for this incredible opportunity to demonstrate leadership and bilingual dedication! 🎓"
      ],
      "whatToInclude": [
          {
              "icon": "🌟",
              "label": "Saludo y presentación con propósito académico"
          },
          {
              "icon": "🏆",
              "label": "Logro concreto narrado con el método STAR"
          },
          {
              "icon": "🔮",
              "label": "Impacto futuro con Second Conditional (If I were awarded...)"
          },
          {
              "icon": "🎓",
              "label": "Cierre elocuente y agradecimiento formal"
          }
      ],
      "tips": [
          "STAR = Situation, Task, Action, Result.",
          "Usa conectores avanzados: Furthermore, Consequently, In conclusion.",
          "Proyecta seguridad y vocación de servicio."
      ],
      "badgeText": "Intermediate Scholar 🏆",
      "modelWhatsApp": "Teacher, mi pitch de beca B1+: Hello committee! When our school club struggled with member engagement, I created an interactive podcast that grew our audience by 200%. If I were chosen, I would inspire youth across Latin America!"
  },
  "c-teens-advanced-1": {
    "task": "Escribe 3 oraciones sobre 1: Breaking News & Campus Whispers (Reported Speech): un hecho en voz pasiva (+), algo que no fue descubierto (−), y una pregunta pasiva (?).",
    "taskHighlights": [
        "voz pasiva (+)",
        "pasiva negativa (−)",
        "pregunta pasiva (?)"
    ],
    "exampleLines": [
        "The revolutionary telescope was launched into deep orbit by NASA. 🛰️",
        "The ancient artifact was not damaged during the transportation. 🏺",
        "When was the first quantum computer prototype developed? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "🔬",
            "label": "Oración afirmativa en voz pasiva [Objeto + was/were + participio] (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa en voz pasiva con 'was not / were not' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta pasiva con 'When was / were... developed?' (?)"
        }
    ],
    "tips": [
        "El sujeto de la voz pasiva recibe la acción.",
        "Usa siempre el participio pasado."
    ],
    "badgeText": "Passive Voice Pro 🔬"
},
  "c-teens-advanced-2": {
    "task": "Escribe 3 oraciones sobre 2: Secret Interviews & Interrogations (Reported Questions): una afirmación en Reported Speech (+), una negativa reportada (−), y una pregunta reportada (?).",
    "taskHighlights": [
        "reported speech (+)",
        "negativa reportada (−)",
        "pregunta reportada (?)"
    ],
    "exampleLines": [
        "She stated that she was preparing an innovative tech project for the fair. 💻",
        "He told me that he did not receive the official notification email. 📧",
        "She asked me if I would participate in the regional debate championship. 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "🗣️",
            "label": "Reporte afirmativo con 'said that / stated that' (+)"
        },
        {
            "icon": "🚫",
            "label": "Reporte negativo con 'told me that ... didn't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta indirecta con 'asked if / whether' (?)"
        }
    ],
    "tips": [
        "Recuerda hacer el backshift de tiempos verbales.",
        "En preguntas indirectas el orden es Sujeto + Verbo."
    ],
    "badgeText": "Reporter Pro 📰"
},
  "c-teens-advanced-3": {
    "task": "Escribe 3 oraciones sobre 3: Mastering Relative Clauses (Defining vs Non-Defining): usando WHO (+), usando WHICH/THAT (+), y usando WHERE (?).",
    "taskHighlights": [
        "who (+)",
        "which/that (+)",
        "where (?)"
    ],
    "exampleLines": [
        "She is the inspiring mentor who guided our robotics team to victory. 🤖",
        "This is the award-winning software that revolutionized mobile security. 🔒",
        "Is this the innovation lab where students develop sustainable energy prototypes? 💡"
    ],
    "whatToInclude": [
        {
            "icon": "👤",
            "label": "Cláusula relativa de persona con 'who' (+)"
        },
        {
            "icon": "💻",
            "label": "Cláusula relativa de objeto con 'which / that' (+)"
        },
        {
            "icon": "📍",
            "label": "Pregunta con cláusula de lugar usando 'where' (?)"
        }
    ],
    "tips": [
        "WHO para personas, WHICH/THAT para objetos, WHERE para lugares.",
        "No uses 'that' en cláusulas explicativas entre comas."
    ],
    "badgeText": "Clauses Architect 🏛️"
},
  "c-teens-advanced-4": {
    "task": "Escribe 3 oraciones sobre 4: Tech Disruptions & Modern Inventions (Passive Voice): un hecho en voz pasiva (+), algo que no fue descubierto (−), y una pregunta pasiva (?).",
    "taskHighlights": [
        "voz pasiva (+)",
        "pasiva negativa (−)",
        "pregunta pasiva (?)"
    ],
    "exampleLines": [
        "The revolutionary telescope was launched into deep orbit by NASA. 🛰️",
        "The ancient artifact was not damaged during the transportation. 🏺",
        "When was the first quantum computer prototype developed? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "🔬",
            "label": "Oración afirmativa en voz pasiva [Objeto + was/were + participio] (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa en voz pasiva con 'was not / were not' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta pasiva con 'When was / were... developed?' (?)"
        }
    ],
    "tips": [
        "El sujeto de la voz pasiva recibe la acción.",
        "Usa siempre el participio pasado."
    ],
    "badgeText": "Passive Voice Pro 🔬"
},
  "c-teens-advanced-5": {
    "task": "Escribe 3 oraciones sobre 5: Global News Reports & Scientific Discoveries (Advanced Passive): una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-advanced-6": {
    "task": "Escribe 3 oraciones sobre 6: Authentic Teen Idioms & Expressions in Daily Contexts: un phrasal verb en contexto (+), uno en forma negativa (−), y una pregunta con un idiom (?).",
    "taskHighlights": [
        "phrasal verb (+)",
        "negativa con phrasal verb (−)",
        "pregunta con idiom (?)"
    ],
    "exampleLines": [
        "I always look up to leaders who take action and solve real community problems. 🌟",
        "We must never give up on our long-term career aspirations. 🚀",
        "How do you usually figure out complex coding errors under pressure? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "💡",
            "label": "Oración afirmativa con un phrasal verb contextualizado (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa con phrasal verb (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta conversacional con phrasal verb o modismo (?)"
        }
    ],
    "tips": [
        "Aprende el phrasal verb como una unidad de significado.",
        "Observa si es separable o inseparable."
    ],
    "badgeText": "Idiom & Slang Pro 💬"
},
  "c-teens-advanced-7": {
    "task": "Escribe 3 oraciones sobre 7: Advanced Phrasal Verbs in High-Stakes Leadership & Problem Solving: un phrasal verb en contexto (+), uno en forma negativa (−), y una pregunta con un idiom (?).",
    "taskHighlights": [
        "phrasal verb (+)",
        "negativa con phrasal verb (−)",
        "pregunta con idiom (?)"
    ],
    "exampleLines": [
        "I always look up to leaders who take action and solve real community problems. 🌟",
        "We must never give up on our long-term career aspirations. 🚀",
        "How do you usually figure out complex coding errors under pressure? 💻"
    ],
    "whatToInclude": [
        {
            "icon": "💡",
            "label": "Oración afirmativa con un phrasal verb contextualizado (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa con phrasal verb (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta conversacional con phrasal verb o modismo (?)"
        }
    ],
    "tips": [
        "Aprende el phrasal verb como una unidad de significado.",
        "Observa si es separable o inseparable."
    ],
    "badgeText": "Idiom & Slang Pro 💬"
},
  "c-teens-advanced-8": {
    "task": "Escribe 3 oraciones sobre 8: The Great AI & Ethics Student Forum: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: The Great AI & Ethics Student Forum allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: The Great AI & Ethics Student Forum to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: The Great AI & Ethics Student Forum (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "8 Master 🏆"
},
  "c-teens-advanced-9": {
    "task": "Escribe 3 oraciones sobre 9: Crisis Management & Global Environmental Summits: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Crisis Management & Global Environmental Summits allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Crisis Management & Global Environmental Summits to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Crisis Management & Global Environmental Summits (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "9 Master 🏆"
},
  "c-teens-advanced-10": {
    "task": "Escribe 3 oraciones sobre 10: Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "10 Master 🏆"
},
  "c-teens-elite-1": {
    "task": "Escribe 3 oraciones sobre 1: Future Milestones & Tech Forecasting: una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-elite-2": {
    "task": "Escribe 3 oraciones sobre 2: High-Stakes Dilemmas & Complex Mixed Conditionals: una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
    "taskHighlights": [
        "condición (+)",
        "condición negativa (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "If I finish my school project early, I will play online games. 🎮",
        "If it rains tomorrow, we will not go cycling in the park. 🌧️",
        "What will you do if you win the science competition? 🏆"
    ],
    "whatToInclude": [
        {
            "icon": "⚡",
            "label": "Condición con 'If [presente], will [verbo]' (+)"
        },
        {
            "icon": "🚫",
            "label": "Resultado negativo con 'will not / won't' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de consecuencia con 'What will you do if...?' (?)"
        }
    ],
    "tips": [
        "En la cláusula con IF se usa Presente Simple.",
        "En el resultado se usa WILL / WON'T."
    ],
    "badgeText": "Conditionals Pro 🔮"
},
  "c-teens-elite-3": {
    "task": "Escribe 3 oraciones sobre 3: Cleft Sentences & Emphatic Rhetoric: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 3: Cleft Sentences & Emphatic Rhetoric allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 3: Cleft Sentences & Emphatic Rhetoric to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 3: Cleft Sentences & Emphatic Rhetoric (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "3 Master 🏆"
},
  "c-teens-elite-4": {
    "task": "Escribe 3 oraciones sobre 4: Rhetorical Inversions & High-Impact Oratory: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 4: Rhetorical Inversions & High-Impact Oratory allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 4: Rhetorical Inversions & High-Impact Oratory to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 4: Rhetorical Inversions & High-Impact Oratory (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "4 Master 🏆"
},
  "c-teens-elite-5": {
    "task": "Escribe 3 oraciones sobre 5: Diplomatic Softening, Hedging & Nuanced Negotiations: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 5: Diplomatic Softening, Hedging & Nuanced Negotiations allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 5: Diplomatic Softening, Hedging & Nuanced Negotiations to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 5: Diplomatic Softening, Hedging & Nuanced Negotiations (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "5 Master 🏆"
},
  "c-teens-elite-6": {
    "task": "Escribe 3 oraciones sobre 6: Advanced Discursive & Argumentative Essay Architecture: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 6: Advanced Discursive & Argumentative Essay Architecture allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 6: Advanced Discursive & Argumentative Essay Architecture to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 6: Advanced Discursive & Argumentative Essay Architecture (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "6 Master 🏆"
},
  "c-teens-elite-7": {
    "task": "Escribe 3 oraciones sobre 7: Empirical Research Abstracts & Academic Citations: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Empirical Research Abstracts & Academic Citations allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Empirical Research Abstracts & Academic Citations to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Empirical Research Abstracts & Academic Citations (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "7 Master 🏆"
},
  "c-teens-elite-8": {
    "task": "Escribe 3 oraciones sobre 8: Executive Boardrooms, Parliamentary Procedure & Conflict Mediation: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: Executive Boardrooms, Parliamentary Procedure & Conflict Mediation allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: Executive Boardrooms, Parliamentary Procedure & Conflict Mediation to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: Executive Boardrooms, Parliamentary Procedure & Conflict Mediation (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "8 Master 🏆"
},
  "c-teens-elite-9": {
    "task": "Escribe 3 oraciones sobre 9: Crisis Leadership, Hostile Press Conferences & PR Damage Control: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Crisis Leadership, Hostile Press Conferences & PR Damage Control allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Crisis Leadership, Hostile Press Conferences & PR Damage Control to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Crisis Leadership, Hostile Press Conferences & PR Damage Control (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "9 Master 🏆"
},
  "c-teens-elite-10": {
    "task": "Escribe 3 oraciones sobre 10: Designing a Global Venture: Unit Economics & Value Proposition: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Designing a Global Venture: Unit Economics & Value Proposition allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Designing a Global Venture: Unit Economics & Value Proposition to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Designing a Global Venture: Unit Economics & Value Proposition (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "10 Master 🏆"
},
  "c-teens-elite-11": {
    "task": "Escribe 3 oraciones sobre 11: Level 9 Grand Capstone: International Tech Venture Seed Pitch & Global Keynote: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 11: Level 9 Grand Capstone: International Tech Venture Seed Pitch & Global Keynote allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 11: Level 9 Grand Capstone: International Tech Venture Seed Pitch & Global Keynote to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 11: Level 9 Grand Capstone: International Tech Venture Seed Pitch & Global Keynote (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "11 Master 🏆"
},
  "c-teens-masters-1": {
    "task": "Escribe 3 oraciones sobre 1: Oxford-Union Parliamentary Debate & Dialectical Refutation: un acuerdo formal (+), un desacuerdo respetuoso (−), y una pregunta para debatir (?).",
    "taskHighlights": [
        "acuerdo (+)",
        "desacuerdo respetuoso (−)",
        "pregunta de debate (?)"
    ],
    "exampleLines": [
        "I completely agree with the idea that AI can enhance student learning. 🤖",
        "I respectfully disagree because human creativity is irreplaceable. 💡",
        "What is your perspective on regulating social media for teenagers? 📱"
    ],
    "whatToInclude": [
        {
            "icon": "🤝",
            "label": "Expresión de acuerdo con 'I completely agree that...' (+)"
        },
        {
            "icon": "🛡️",
            "label": "Desacuerdo respetuoso con 'I respectfully disagree because...' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de debate con 'What is your perspective on...?' (?)"
        }
    ],
    "tips": [
        "Usa conectores diplomáticos.",
        "Justifica tu argumento con 'because'."
    ],
    "badgeText": "Debate Master 🎙️"
},
  "c-teens-masters-2": {
    "task": "Escribe 3 oraciones sobre 2: Pop Culture Semiotics, Media Ecology & Digital Memetics: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 2: Pop Culture Semiotics, Media Ecology & Digital Memetics allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 2: Pop Culture Semiotics, Media Ecology & Digital Memetics to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 2: Pop Culture Semiotics, Media Ecology & Digital Memetics (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "2 Master 🏆"
},
  "c-teens-masters-3": {
    "task": "Escribe 3 oraciones sobre 3: Ivy League Graduate Seminars & Socratic Cross-Examination: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 3: Ivy League Graduate Seminars & Socratic Cross-Examination allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 3: Ivy League Graduate Seminars & Socratic Cross-Examination to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 3: Ivy League Graduate Seminars & Socratic Cross-Examination (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "3 Master 🏆"
},
  "c-teens-masters-4": {
    "task": "Escribe 3 oraciones sobre 4: TED Keynotes, High-Impact Storytelling & Thought Leadership: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 4: TED Keynotes, High-Impact Storytelling & Thought Leadership allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 4: TED Keynotes, High-Impact Storytelling & Thought Leadership to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 4: TED Keynotes, High-Impact Storytelling & Thought Leadership (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "4 Master 🏆"
},
  "c-teens-masters-5": {
    "task": "Escribe 3 oraciones sobre 5: Geopolitical Strategy, Bilateral Treaties & Multilateral Summits: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 5: Geopolitical Strategy, Bilateral Treaties & Multilateral Summits allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 5: Geopolitical Strategy, Bilateral Treaties & Multilateral Summits to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 5: Geopolitical Strategy, Bilateral Treaties & Multilateral Summits (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "5 Master 🏆"
},
  "c-teens-masters-6": {
    "task": "Escribe 3 oraciones sobre 6: Literary Critique, Cinematic Deconstruction & Aesthetic Analysis: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 6: Literary Critique, Cinematic Deconstruction & Aesthetic Analysis allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 6: Literary Critique, Cinematic Deconstruction & Aesthetic Analysis to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 6: Literary Critique, Cinematic Deconstruction & Aesthetic Analysis (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "6 Master 🏆"
},
  "c-teens-masters-7": {
    "task": "Escribe 3 oraciones sobre 7: Rhodes & Fulbright International Fellowship Interviews: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Rhodes & Fulbright International Fellowship Interviews allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Rhodes & Fulbright International Fellowship Interviews to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Rhodes & Fulbright International Fellowship Interviews (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "7 Master 🏆"
},
  "c-teens-masters-8": {
    "task": "Escribe 3 oraciones sobre 8: Investigative Video Essays & Documentary Journalism: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: Investigative Video Essays & Documentary Journalism allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: Investigative Video Essays & Documentary Journalism to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: Investigative Video Essays & Documentary Journalism (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "8 Master 🏆"
},
  "c-teens-masters-9": {
    "task": "Escribe 3 oraciones sobre 9: Global Mega-Trends: Superintelligence, Bioethics & Climate: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Global Mega-Trends: Superintelligence, Bioethics & Climate allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Global Mega-Trends: Superintelligence, Bioethics & Climate to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Global Mega-Trends: Superintelligence, Bioethics & Climate (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "9 Master 🏆"
},
  "c-teens-masters-10": {
    "task": "Escribe 3 oraciones sobre 10: Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit (+)"
        },
        {
            "icon": "🚫",
            "label": "Oración negativa o contraste crítico (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta analítica o conversacional (?)"
        }
    ],
    "tips": [
        "Usa vocabulario formal y expresiones idiomáticas.",
        "Revisa puntuación y coherencia."
    ],
    "badgeText": "10 Master 🏆"
},
};
