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
    "task": "Escribe 3 oraciones sobre profesiones: tu sueño (+), el trabajo de un familiar (+), y una profesión difícil (−).",
    "taskHighlights": [
        "profesión soñada",
        "familiar",
        "profesión difícil"
    ],
    "exampleLines": [
        "I want to be an innovative graphic designer. 🎨",
        "My father works as an architect in an international firm. 📐",
        "Being a deep sea diver is not an easy profession. 🌊"
    ],
    "whatToInclude": [
        {
            "icon": "🎨",
            "label": "Profesión soñada con 'want to be' (+)"
        },
        {
            "icon": "📐",
            "label": "Trabajo de un conocido (+)"
        },
        {
            "icon": "🚫",
            "label": "Profesión desafiante (−)"
        }
    ],
    "tips": [
        "Usa 'a' o 'an' antes de profesiones.",
        "Recuerda mayúsculas."
    ],
    "badgeText": "Career Vision 💼"
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
    "task": "Escribe 3 oraciones sobre clima y naturaleza: tu clima preferido (+), qué haces cuando llueve (+), y qué no te gusta (−).",
    "taskHighlights": [
        "clima preferido",
        "día lluvioso",
        "clima no deseado"
    ],
    "exampleLines": [
        "I love cool and breezy autumn afternoons. 🍂",
        "When it rains heavily, I stay inside and draw. 🌧️",
        "I really dislike extremely hot and sticky days. 🥵"
    ],
    "whatToInclude": [
        {
            "icon": "🍂",
            "label": "Clima preferido (+)"
        },
        {
            "icon": "🌧️",
            "label": "Actividad de lluvia con 'When it rains...' (+)"
        },
        {
            "icon": "🚫",
            "label": "Clima que te desagrada (−)"
        }
    ],
    "tips": [
        "Usa adjetivos del clima: 'breezy', 'sunny'.",
        "Puntúa correctamente."
    ],
    "badgeText": "Nature Scout 🌲"
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
    "task": "Escribe 3 oraciones sobre festividades: tu celebración favorita (+), una tradición (+), y lo que no hacen (−).",
    "taskHighlights": [
        "festividad favorita",
        "tradición",
        "lo que no hacen"
    ],
    "exampleLines": [
        "My favorite holiday is New Year's Eve with my family. 🎆",
        "We always cook traditional Colombian dishes together. 🍲",
        "We never go to bed before midnight on that special night. ⏰"
    ],
    "whatToInclude": [
        {
            "icon": "🎆",
            "label": "Festividad favorita (+)"
        },
        {
            "icon": "🍲",
            "label": "Tradición familiar (+)"
        },
        {
            "icon": "🚫",
            "label": "Algo que nunca hacen (−)"
        }
    ],
    "tips": [
        "Las festividades van en mayúscula.",
        "Usa adverbios de frecuencia."
    ],
    "badgeText": "Festive Star 🎉"
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
    "task": "Escribe 3 oraciones sobre La Hora y Rutinas: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Hora exacta con 'at' (+)",
        "Límite horario con 'do not' (−)",
        "Pregunta con 'What time...?' (?)"
    ],
    "exampleLines": [
        "I wake up at exactly six fifteen in the morning. ⏰",
        "I do not do homework after nine o'clock at night. 🌙",
        "What time do you usually finish your classes? 🕒"
    ],
    "whatToInclude": [
        {
            "icon": "⏰",
            "label": "Hora exacta con 'at' (+)"
        },
        {
            "icon": "🚫",
            "label": "Límite horario con 'do not' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta con 'What time...?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Time Tracker 🕒"
},
  "c-teens-basic-1-5": {
    "task": "Escribe 3 oraciones sobre Hábitos y Frecuencia: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Hábito frecuente con 'always' (+)",
        "Hábito que evitas con 'never' (−)",
        "Pregunta de frecuencia con 'How often...?' (?)"
    ],
    "exampleLines": [
        "First, I always wake up at six thirty and make my bed. 🛏️",
        "I never check toxic social media while studying. 📱",
        "How often do you go cycling on the weekend? 🚴"
    ],
    "whatToInclude": [
        {
            "icon": "⏰",
            "label": "Hábito frecuente con 'always' (+)"
        },
        {
            "icon": "🚫",
            "label": "Hábito que evitas con 'never' (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de frecuencia con 'How often...?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Habit Builder 📅"
},
  "c-teens-basic-1-6": {
    "task": "Escribe 3 oraciones sobre Deportes: Play / Go / Do: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Deporte con 'play' (+)",
        "Actividad con 'go' o 'do' (+)",
        "Invitación con 'Would you like to...?' (?)"
    ],
    "exampleLines": [
        "I play volleyball with my classmates every Wednesday. 🏐",
        "On Saturdays, I usually go swimming and do martial arts. 🏊",
        "Would you like to come with us to the park? 🌳"
    ],
    "whatToInclude": [
        {
            "icon": "🏐",
            "label": "Deporte con 'play' (+)"
        },
        {
            "icon": "🏊",
            "label": "Actividad con 'go' o 'do' (+)"
        },
        {
            "icon": "❓",
            "label": "Invitación con 'Would you like to...?' (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Action Star 🏃"
},
  "c-teens-basic-1-7": {
    "task": "Escribe 3 oraciones sobre Ropa y Estilo: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Prenda deseada con 'want to buy' (+)",
        "Opinión sobre algo costoso (−)",
        "Pregunta de compras (?)"
    ],
    "exampleLines": [
        "I want to buy a comfortable vintage jacket. 🧥",
        "These designer brand shoes are not worth the high price. 👟",
        "Where can I find affordable and trendy clothes? 🛍️"
    ],
    "whatToInclude": [
        {
            "icon": "🧥",
            "label": "Prenda deseada con 'want to buy' (+)"
        },
        {
            "icon": "🚫",
            "label": "Opinión sobre algo costoso (−)"
        },
        {
            "icon": "❓",
            "label": "Pregunta de compras (?)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Trend Setter 👗"
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
    "task": "Escribe 3 oraciones sobre Vecindario y Direcciones: una afirmativa (+), una negativa (−), y una pregunta (?).",
    "taskHighlights": [
        "Lugar cercano con 'next to' (+)",
        "Lugar que no hay con 'There are no...' (−)",
        "Dirección con 'turn right / go straight' (+)"
    ],
    "exampleLines": [
        "There is a great bakery right next to my building. 🥐",
        "There are no movie theaters in my neighborhood. 🎬",
        "To get to the station, go straight and turn right at the corner. 🧭"
    ],
    "whatToInclude": [
        {
            "icon": "🥐",
            "label": "Lugar cercano con 'next to' (+)"
        },
        {
            "icon": "🚫",
            "label": "Lugar que no hay con 'There are no...' (−)"
        },
        {
            "icon": "🧭",
            "label": "Dirección con 'turn right / go straight' (+)"
        }
    ],
    "tips": [
        "Usa las fórmulas vistas en clase.",
        "Revisa la ortografía."
    ],
    "badgeText": "Navigator Pro 🧭"
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
    "task": "Escribe 3 oraciones sobre 1: Animals, Habitats & Abilities: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 1: Animals, Habitats & Abilities allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 1: Animals, Habitats & Abilities to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 1: Animals, Habitats & Abilities (+)"
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
    "badgeText": "1 Master 🏆"
},
  "c-teens-basic-2-2": {
    "task": "Escribe 3 oraciones sobre 2: My Room & Dream House: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 2: My Room & Dream House allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 2: My Room & Dream House to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 2: My Room & Dream House (+)"
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
  "c-teens-basic-2-3": {
    "task": "Escribe 3 oraciones sobre 3: Vehicles, Transport & City Commuting: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 3: Vehicles, Transport & City Commuting allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 3: Vehicles, Transport & City Commuting to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 3: Vehicles, Transport & City Commuting (+)"
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
  "c-teens-basic-2-4": {
    "task": "Escribe 3 oraciones sobre 4: Dream Jobs, Careers & Workplaces: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 4: Dream Jobs, Careers & Workplaces allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 4: Dream Jobs, Careers & Workplaces to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 4: Dream Jobs, Careers & Workplaces (+)"
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
  "c-teens-basic-2-5": {
    "task": "Escribe 3 oraciones sobre 5: Talents, Superpowers & Abilities: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 5: Talents, Superpowers & Abilities allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 5: Talents, Superpowers & Abilities to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 5: Talents, Superpowers & Abilities (+)"
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
  "c-teens-basic-2-6": {
    "task": "Escribe 3 oraciones sobre 6: School & Lab Rules: Must, Have to, Should: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 6: School & Lab Rules: Must, Have to, Should allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 6: School & Lab Rules: Must, Have to, Should to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 6: School & Lab Rules: Must, Have to, Should (+)"
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
  "c-teens-basic-2-7": {
    "task": "Escribe 3 oraciones sobre 7: Sports, Workouts & Healthy Habits: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Sports, Workouts & Healthy Habits allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Sports, Workouts & Healthy Habits to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Sports, Workouts & Healthy Habits (+)"
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
  "c-teens-basic-2-8": {
    "task": "Escribe 3 oraciones sobre 8: City Outings, Hangouts & Weekend Plans: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: City Outings, Hangouts & Weekend Plans allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: City Outings, Hangouts & Weekend Plans to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: City Outings, Hangouts & Weekend Plans (+)"
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
  "c-teens-basic-2-9": {
    "task": "Escribe 3 oraciones sobre 9: Entertainment Reviews: Series, Movies & Games: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Entertainment Reviews: Series, Movies & Games allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Entertainment Reviews: Series, Movies & Games to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Entertainment Reviews: Series, Movies & Games (+)"
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
  "c-teens-basic-2-10": {
    "task": "Escribe 3 oraciones sobre 10: Level 2 Capstone: Teen Podcast & Grand Review: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Level 2 Capstone: Teen Podcast & Grand Review allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Level 2 Capstone: Teen Podcast & Grand Review to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Level 2 Capstone: Teen Podcast & Grand Review (+)"
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
  "c-teens-basic-3-1": {
    "task": "Escribe 3 oraciones sobre 1: Daily Routine & Time: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 1: Daily Routine & Time allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 1: Daily Routine & Time to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 1: Daily Routine & Time (+)"
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
    "badgeText": "1 Master 🏆"
},
  "c-teens-basic-3-2": {
    "task": "Escribe 3 oraciones sobre 2: Sports, Competitions & Teams: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 2: Sports, Competitions & Teams allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 2: Sports, Competitions & Teams to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 2: Sports, Competitions & Teams (+)"
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
  "c-teens-basic-3-3": {
    "task": "Escribe 3 oraciones sobre 3: Holidays, Festivals & Traditions: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 3: Holidays, Festivals & Traditions allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 3: Holidays, Festivals & Traditions to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 3: Holidays, Festivals & Traditions (+)"
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
  "c-teens-basic-3-4": {
    "task": "Escribe 3 oraciones sobre 4: Space, Science & Future: una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
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
  "c-teens-basic-3-5": {
    "task": "Escribe 3 oraciones sobre 5: Past To Be: Was: una en pasado afirmativo (+), una en pasado negativo (−), y una pregunta en pasado (?).",
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
  "c-teens-basic-3-6": {
    "task": "Escribe 3 oraciones sobre 6: Vacations, Travel & Anecdotes: una en pasado afirmativo (+), una en pasado negativo (−), y una pregunta en pasado (?).",
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
  "c-teens-basic-3-7": {
    "task": "Escribe 3 oraciones sobre 7: Biographies of Artists, Athletes & Creators: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Biographies of Artists, Athletes & Creators allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Biographies of Artists, Athletes & Creators to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Biographies of Artists, Athletes & Creators (+)"
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
  "c-teens-basic-3-8": {
    "task": "Escribe 3 oraciones sobre 8: Storytelling Connectors: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: Storytelling Connectors allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: Storytelling Connectors to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: Storytelling Connectors (+)"
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
  "c-teens-basic-3-9": {
    "task": "Escribe 3 oraciones sobre 9: Everyday Problems & How to Explain Them: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Everyday Problems & How to Explain Them allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Everyday Problems & How to Explain Them to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Everyday Problems & How to Explain Them (+)"
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
  "c-teens-basic-3-10": {
    "task": "Escribe 3 oraciones sobre 10: Irregular Verbs & -ed Endings (Video Project): una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Irregular Verbs & -ed Endings (Video Project) allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Irregular Verbs & -ed Endings (Video Project) to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Irregular Verbs & -ed Endings (Video Project) (+)"
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
    "task": "Escribe 3 oraciones sobre 2: Giving Good Advice: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 2: Giving Good Advice allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 2: Giving Good Advice to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 2: Giving Good Advice (+)"
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
    "task": "Escribe 3 oraciones sobre 4: Messaging, Texting & Online Communication: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 4: Messaging, Texting & Online Communication allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 4: Messaging, Texting & Online Communication to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 4: Messaging, Texting & Online Communication (+)"
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
    "task": "Escribe 3 oraciones sobre 6: Comparatives & Superlatives (Tech, Movies & Sports): una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 6: Comparatives & Superlatives (Tech, Movies & Sports) allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 6: Comparatives & Superlatives (Tech, Movies & Sports) to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 6: Comparatives & Superlatives (Tech, Movies & Sports) (+)"
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
  "c-teens-basic-4-7": {
    "task": "Escribe 3 oraciones sobre 7: Too & Enough: Problems and Solutions: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Too & Enough: Problems and Solutions allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Too & Enough: Problems and Solutions to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Too & Enough: Problems and Solutions (+)"
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
  "c-teens-basic-4-8": {
    "task": "Escribe 3 oraciones sobre 8: Giving Advice to Friends (Should, Shouldn't & Ought to): una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 8: Giving Advice to Friends (Should, Shouldn't & Ought to) allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 8: Giving Advice to Friends (Should, Shouldn't & Ought to) to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 8: Giving Advice to Friends (Should, Shouldn't & Ought to) (+)"
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
  "c-teens-basic-4-9": {
    "task": "Escribe 3 oraciones sobre 9: Informal vs Formal Messages, Emails & Digital Tone: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 9: Informal vs Formal Messages, Emails & Digital Tone allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 9: Informal vs Formal Messages, Emails & Digital Tone to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 9: Informal vs Formal Messages, Emails & Digital Tone (+)"
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
  "c-teens-basic-4-10": {
    "task": "Escribe 3 oraciones sobre 10: Teen Leadership, Customer Service & Capstone Review: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 10: Teen Leadership, Customer Service & Capstone Review allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 10: Teen Leadership, Customer Service & Capstone Review to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 10: Teen Leadership, Customer Service & Capstone Review (+)"
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
    "task": "Escribe 3 oraciones sobre 3: Possibilities & Deductions (Must, Might, Can't): una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 3: Possibilities & Deductions (Must, Might, Can't) allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 3: Possibilities & Deductions (Must, Might, Can't) to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 3: Possibilities & Deductions (Must, Might, Can't) (+)"
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
  "c-teens-inter-4": {
    "task": "Escribe 3 oraciones sobre 4: If I Ruled the World (Second Conditional): una condición afirmativa (+), una condición negativa (−), y una pregunta hipotética (?).",
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
    "task": "Escribe 3 oraciones sobre 6: Podcast & Media Hosting Basics: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 6: Podcast & Media Hosting Basics allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 6: Podcast & Media Hosting Basics to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 6: Podcast & Media Hosting Basics (+)"
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
  "c-teens-inter-7": {
    "task": "Escribe 3 oraciones sobre 7: Present Perfect vs Present Perfect Continuous: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 7: Present Perfect vs Present Perfect Continuous allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 7: Present Perfect vs Present Perfect Continuous to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 7: Present Perfect vs Present Perfect Continuous (+)"
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
    "task": "Escribe 3 oraciones sobre 12: Capstone Media Showcase & Scholarship Simulation: una afirmación estructurada (+), un contraste negativo (−), y una pregunta de análisis (?).",
    "taskHighlights": [
        "afirmación (+)",
        "contraste (−)",
        "pregunta (?)"
    ],
    "exampleLines": [
        "Mastering 12: Capstone Media Showcase & Scholarship Simulation allows me to express nuanced ideas with precision. 🎯",
        "I do not rely on simplistic translations when articulating complex arguments. 📖",
        "How can we apply 12: Capstone Media Showcase & Scholarship Simulation to solve real-world communication challenges? 🌍"
    ],
    "whatToInclude": [
        {
            "icon": "🎯",
            "label": "Oración afirmativa aplicando 12: Capstone Media Showcase & Scholarship Simulation (+)"
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
    "badgeText": "12 Master 🏆"
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
