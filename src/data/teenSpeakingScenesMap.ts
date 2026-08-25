import { ResolvedSpeakingScene } from '../lib/speakingSceneResolver';

/**
 * Master customized Speaking Scenes Map for all 99 classes across Teens track.
 * 100% aligned to each individual class syllabus, teenager situations, concrete conversational prompts,
 * specific roles, real vocabulary, and practical sample dialogues.
 */
export const TEEN_SPEAKING_SCENES_MAP: Record<string, ResolvedSpeakingScene> = {
  "c-teens-basic-1-1": {
    "topic": "Share Your Passions & Hobbies 🎸",
    "topicEs": "Comparte tus pasiones y pasatiempos",
    "cues": [
      {
        "icon": "🎸",
        "label": "MAIN PASSION?",
        "labelEs": "¿Cuál es tu pasión principal?",
        "questionExample": "What hobby do you practice with energy?"
      },
      {
        "icon": "⏰",
        "label": "PRACTICE TIME?",
        "labelEs": "¿Cuánto tiempo le dedicas?",
        "questionExample": "How often do you practice each week?"
      },
      {
        "icon": "🌟",
        "label": "GOAL / PROJECT?",
        "labelEs": "¿Cuál es tu proyecto soñado?",
        "questionExample": "What is your main goal with this passion?"
      }
    ],
    "roleA": {
      "label": "Host",
      "labelEs": "Presentador",
      "action": "Interview creator",
      "actionEs": "Entrevistar creador",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Creator",
      "labelEs": "Creador",
      "action": "Share passion",
      "actionEs": "Compartir pasión",
      "avatar": "🎸"
    },
    "helpWords": [
      {
        "emoji": "🎸",
        "word": "electric guitar",
        "translation": "guitarra eléctrica"
      },
      {
        "emoji": "🎨",
        "word": "digital painting",
        "translation": "pintura digital"
      },
      {
        "emoji": "🛹",
        "word": "skatepark tricks",
        "translation": "trucos en skatepark"
      },
      {
        "emoji": "🎧",
        "word": "music producer",
        "translation": "productor musical"
      },
      {
        "emoji": "⚡",
        "word": "creative energy",
        "translation": "energía creativa"
      },
      {
        "emoji": "🏆",
        "word": "win competitions",
        "translation": "ganar concursos"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is your greatest passion outside of school?",
          "es": "¿Cuál es tu mayor pasión fuera del colegio?"
        },
        {
          "en": "How many hours do you spend practicing every week?",
          "es": "¿Cuántas horas pasas practicando cada semana?"
        },
        {
          "en": "What project are you currently working on?",
          "es": "¿En qué proyecto estás trabajando actualmente?"
        }
      ],
      "answer": [
        {
          "en": "I compose original electronic beats and play guitar.",
          "es": "Compongo pistas electrónicas originales y toco guitarra."
        },
        {
          "en": "I practice at least one hour every afternoon.",
          "es": "Practico al menos una hora cada tarde."
        },
        {
          "en": "I am producing a three-track EP for my friends.",
          "es": "Estoy produciendo un EP de tres canciones para mis amigos."
        }
      ]
    }
  },
  "c-teens-basic-1-2": {
    "topic": "Debate Favorite School Subjects 📚",
    "topicEs": "Debate sobre materias del colegio",
    "cues": [
      {
        "icon": "🔬",
        "label": "FAVORITE CLASS?",
        "labelEs": "¿Materia favorita?",
        "questionExample": "Which subject do you look forward to most?"
      },
      {
        "icon": "💡",
        "label": "WHY INTERESTING?",
        "labelEs": "¿Por qué es interesante?",
        "questionExample": "What cool project did you do in that class?"
      },
      {
        "icon": "📝",
        "label": "HARDEST CLASS?",
        "labelEs": "¿La más retadora?",
        "questionExample": "Which subject requires the most study time?"
      }
    ],
    "roleA": {
      "label": "Student A",
      "labelEs": "Estudiante A",
      "action": "Defend favorite class",
      "actionEs": "Defender materia favorita",
      "avatar": "🔬"
    },
    "roleB": {
      "label": "Student B",
      "labelEs": "Estudiante B",
      "action": "Compare perspectives",
      "actionEs": "Comparar perspectivas",
      "avatar": "📐"
    },
    "helpWords": [
      {
        "emoji": "🔬",
        "word": "science lab",
        "translation": "laboratorio de ciencias"
      },
      {
        "emoji": "📐",
        "word": "advanced algebra",
        "translation": "álgebra avanzada"
      },
      {
        "emoji": "🌍",
        "word": "world history",
        "translation": "historia universal"
      },
      {
        "emoji": "🎨",
        "word": "visual arts",
        "translation": "artes visuales"
      },
      {
        "emoji": "💡",
        "word": "hands-on projects",
        "translation": "proyectos prácticos"
      },
      {
        "emoji": "📊",
        "word": "challenging exams",
        "translation": "exámenes retadores"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Why do you think science is cooler than history?",
          "es": "¿Por qué crees que ciencias es más genial que historia?"
        },
        {
          "en": "What is the most interesting experiment you've done?",
          "es": "¿Cuál es el experimento más interesante que has hecho?"
        },
        {
          "en": "How do you study for your hardest exams?",
          "es": "¿Cómo estudias para tus exámenes más difíciles?"
        }
      ],
      "answer": [
        {
          "en": "In science, we conduct live chemistry experiments!",
          "es": "¡En ciencias hacemos experimentos químicos en vivo!"
        },
        {
          "en": "We built a solar-powered mini car last week.",
          "es": "Construimos un mini auto con energía solar la semana pasada."
        },
        {
          "en": "I make flashcards and study with study groups.",
          "es": "Hago tarjetas de memoria y estudio en grupos."
        }
      ]
    }
  },
  "c-teens-basic-1-3": {
    "topic": "Weather Forecast & Outfit Stylist 🌦️👕",
    "topicEs": "Pronóstico del clima y estilista de outfits",
    "cues": [
      {
        "icon": "🌦️",
        "label": "WEATHER FORECAST?",
        "labelEs": "¿Pronóstico del clima?",
        "questionExample": "What is the weather forecast for today?"
      },
      {
        "icon": "🧥",
        "label": "OUTFIT CHOICE?",
        "labelEs": "¿Qué outfit vas a usar?",
        "questionExample": "What are you wearing today and what will you bring?"
      },
      {
        "icon": "💡",
        "label": "REASON (BECAUSE)?",
        "labelEs": "¿Por qué esa elección?",
        "questionExample": "Why are you taking a jacket or umbrella?"
      }
    ],
    "roleA": {
      "label": "Weather Reporter",
      "labelEs": "Reportero del Clima",
      "action": "Give forecast and advice",
      "actionEs": "Dar pronóstico y consejos",
      "avatar": "🌦️"
    },
    "roleB": {
      "label": "Student",
      "labelEs": "Estudiante",
      "action": "Choose outfits and gear",
      "actionEs": "Elegir ropa y accesorios",
      "avatar": "🧥"
    },
    "helpWords": [
      {
        "emoji": "🌦️",
        "word": "weather forecast",
        "translation": "pronóstico del clima"
      },
      {
        "emoji": "🧥",
        "word": "warm hoodie",
        "translation": "sudadera con capucha"
      },
      {
        "emoji": "☔",
        "word": "sturdy umbrella",
        "translation": "paraguas resistente"
      },
      {
        "emoji": "👟",
        "word": "comfortable sneakers",
        "translation": "zapatillas cómodas"
      },
      {
        "emoji": "💨",
        "word": "chilly and windy",
        "translation": "fresco y con viento"
      },
      {
        "emoji": "☀️",
        "word": "sunny afternoon",
        "translation": "tarde soleada"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is the weather like outside today?",
          "es": "¿Cómo está el clima afuera hoy?"
        },
        {
          "en": "What clothes should I wear for school today?",
          "es": "¿Qué ropa debería usar para ir al colegio hoy?"
        },
        {
          "en": "Why do we need to bring an umbrella?",
          "es": "¿Por qué necesitamos llevar un paraguas?"
        }
      ],
      "answer": [
        {
          "en": "It is rainy and windy in the morning, but sunny later.",
          "es": "Está lluvioso y con viento en la mañana, pero soleado más tarde."
        },
        {
          "en": "I am wearing jeans, a warm hoodie, and waterproof boots.",
          "es": "Llevo puestos jeans, una sudadera abrigada y botas impermeables."
        },
        {
          "en": "We need sunscreen because it will be very sunny this afternoon.",
          "es": "Necesitamos protector solar porque estará muy soleado esta tarde."
        }
      ]
    }
  },
  "c-teens-basic-1-4": {
    "topic": "Order Food with Custom Requests 🍔",
    "topicEs": "Pide comida con peticiones especiales",
    "cues": [
      {
        "icon": "🍔",
        "label": "MAIN DISH?",
        "labelEs": "¿Plato principal?",
        "questionExample": "What burger or bowl do you want to order?"
      },
      {
        "icon": "🧀",
        "label": "SPECIAL EXTRAS?",
        "labelEs": "¿Ingredientes extra?",
        "questionExample": "Can you add extra cheese or remove onions?"
      },
      {
        "icon": "🥤",
        "label": "COMBO SIDES?",
        "labelEs": "¿Acompañamiento y bebida?",
        "questionExample": "Do you want curly fries or onion rings?"
      }
    ],
    "roleA": {
      "label": "Customer",
      "labelEs": "Cliente",
      "action": "Order with details",
      "actionEs": "Pedir con detalles",
      "avatar": "🍔"
    },
    "roleB": {
      "label": "Server",
      "labelEs": "Mesero",
      "action": "Confirm order",
      "actionEs": "Confirmar pedido",
      "avatar": "🧑‍🍳"
    },
    "helpWords": [
      {
        "emoji": "🍔",
        "word": "double cheeseburger",
        "translation": "hamburguesa doble con queso"
      },
      {
        "emoji": "🍟",
        "word": "curly fries",
        "translation": "papas en espiral"
      },
      {
        "emoji": "🧅",
        "word": "no onions, please",
        "translation": "sin cebolla, por favor"
      },
      {
        "emoji": "🧀",
        "word": "extra melted cheese",
        "translation": "queso derretido extra"
      },
      {
        "emoji": "🥤",
        "word": "iced lemonade",
        "translation": "limonada con hielo"
      },
      {
        "emoji": "💳",
        "word": "pay with card",
        "translation": "pagar con tarjeta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Can I get the burger with no pickles and extra bacon?",
          "es": "¿Me da la hamburguesa sin pepinillos y con tocineta extra?"
        },
        {
          "en": "What dips and sauces come with the fries?",
          "es": "¿Qué salsas vienen con las papas?"
        },
        {
          "en": "Would you like regular or large size for the combo?",
          "es": "¿Desea tamaño normal o grande para el combo?"
        }
      ],
      "answer": [
        {
          "en": "Yes! Double beef, extra bacon, and garlic mayo.",
          "es": "¡Sí! Carne doble, tocineta extra y mayonesa de ajo."
        },
        {
          "en": "We have barbecue, chipotle, and ranch sauce.",
          "es": "Tenemos salsa barbacoa, chipotle y ranch."
        },
        {
          "en": "Make it a large combo with iced lemonade, please.",
          "es": "Hágalo combo grande con limonada con hielo, por favor."
        }
      ]
    }
  },
  "c-teens-basic-1-5": {
    "topic": "Plan the Ultimate Weekend Routine ⏰",
    "topicEs": "Planea la rutina de fin de semana ideal",
    "cues": [
      {
        "icon": "🌅",
        "label": "MORNING PLAN?",
        "labelEs": "¿Plan de la mañana?",
        "questionExample": "What time do you wake up on Saturday?"
      },
      {
        "icon": "🛹",
        "label": "AFTERNOON FUN?",
        "labelEs": "¿Aventura de la tarde?",
        "questionExample": "Where do you go with friends in the afternoon?"
      },
      {
        "icon": "🌙",
        "label": "NIGHT CHILL?",
        "labelEs": "¿Plan nocturno?",
        "questionExample": "Are you watching a movie or playing games at night?"
      }
    ],
    "roleA": {
      "label": "Planner A",
      "labelEs": "Organizador A",
      "action": "Propose schedule",
      "actionEs": "Proponer horario",
      "avatar": "📅"
    },
    "roleB": {
      "label": "Planner B",
      "labelEs": "Organizador B",
      "action": "Add fun activities",
      "actionEs": "Agregar actividades",
      "avatar": "🎉"
    },
    "helpWords": [
      {
        "emoji": "🌅",
        "word": "sleep in late",
        "translation": "dormir hasta tarde"
      },
      {
        "emoji": "🥞",
        "word": "pancake brunch",
        "translation": "brunch de panqueques"
      },
      {
        "emoji": "🛹",
        "word": "skatepark session",
        "translation": "sesión de skatepark"
      },
      {
        "emoji": "🛍️",
        "word": "mall hangout",
        "translation": "salida al centro comercial"
      },
      {
        "emoji": "🎮",
        "word": "co-op gaming night",
        "translation": "noche de juegos cooperativos"
      },
      {
        "emoji": "🍕",
        "word": "late night pizza",
        "translation": "pizza de noche"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is your dream Saturday schedule from morning to night?",
          "es": "¿Cuál es tu sábado soñado de la mañana a la noche?"
        },
        {
          "en": "What outdoor activity do you want to include?",
          "es": "¿Qué actividad al aire libre quieres incluir?"
        },
        {
          "en": "Who are you inviting for the evening gaming session?",
          "es": "¿A quién invitarás para la sesión de juegos en la noche?"
        }
      ],
      "answer": [
        {
          "en": "Wake up at 9 AM, make pancakes, and head to the skatepark.",
          "es": "Despertar a las 9 AM, hacer panqueques e ir al skatepark."
        },
        {
          "en": "We can ride bikes along the green park trail.",
          "es": "Podemos montar bicicleta por el sendero del parque."
        },
        {
          "en": "I'll invite our whole crew for pizza and multiplayer games.",
          "es": "Invitaré a todo nuestro grupo para comer pizza y jugar."
        }
      ]
    }
  },
  "c-teens-basic-1-6": {
    "topic": "Invite a Friend to Hang Out 🎉",
    "topicEs": "Invita a un amigo a salir",
    "cues": [
      {
        "icon": "📍",
        "label": "WHERE TO GO?",
        "labelEs": "¿A dónde ir?",
        "questionExample": "Do you want to go to the cinema, mall, or park?"
      },
      {
        "icon": "🕒",
        "label": "TIME & MEETING?",
        "labelEs": "¿Hora y punto de encuentro?",
        "questionExample": "What time should we meet at the entrance?"
      },
      {
        "icon": "🎟️",
        "label": "ACTIVITY?",
        "labelEs": "¿Qué haremos?",
        "questionExample": "Are we watching the new superhero movie?"
      }
    ],
    "roleA": {
      "label": "Inviter",
      "labelEs": "Invitador",
      "action": "Pitch hangout plan",
      "actionEs": "Proponer plan",
      "avatar": "📱"
    },
    "roleB": {
      "label": "Friend",
      "labelEs": "Amigo",
      "action": "Accept and coordinate",
      "actionEs": "Aceptar y coordinar",
      "avatar": "🎟️"
    },
    "helpWords": [
      {
        "emoji": "🎬",
        "word": "movie premiere",
        "translation": "estreno de película"
      },
      {
        "emoji": "🎟️",
        "word": "buy cinema tickets",
        "translation": "comprar entradas de cine"
      },
      {
        "emoji": "📍",
        "word": "meet at the fountain",
        "translation": "encontrarse en la fuente"
      },
      {
        "emoji": "🕒",
        "word": "four o'clock sharp",
        "translation": "a las cuatro en punto"
      },
      {
        "emoji": "🍔",
        "word": "grab burgers after",
        "translation": "comer hamburguesas después"
      },
      {
        "emoji": "🙌",
        "word": "count me in!",
        "translation": "¡cuenta conmigo!"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Are you free this Saturday afternoon around 4 PM?",
          "es": "¿Estás libre este sábado por la tarde alrededor de las 4 PM?"
        },
        {
          "en": "Do you want to see the new action blockbuster at the mall?",
          "es": "¿Quieres ver la nueva película de acción en el centro comercial?"
        },
        {
          "en": "Shall we grab ice cream or burgers before the film?",
          "es": "¿Comemos helado o hamburguesas antes de la película?"
        }
      ],
      "answer": [
        {
          "en": "Yes, I'm totally free! I've been waiting for that movie!",
          "es": "¡Sí, estoy totalmente libre! ¡He estado esperando esa película!"
        },
        {
          "en": "Let's meet by the main entrance at 3:30 PM.",
          "es": "Encontrémonos en la entrada principal a las 3:30 PM."
        },
        {
          "en": "Count me in! Burgers before the movie sounds perfect.",
          "es": "¡Cuenta conmigo! Hamburguesas antes del cine suena perfecto."
        }
      ]
    }
  },
  "c-teens-basic-1-7": {
    "topic": "Pick Trendy Outfits at the Mall 🛍️",
    "topicEs": "Elige ropa de moda en el centro comercial",
    "cues": [
      {
        "icon": "🛍️",
        "label": "WHAT STORE?",
        "labelEs": "¿Qué tienda?",
        "questionExample": "Which clothing store has the best streetwear?"
      },
      {
        "icon": "👗",
        "label": "TRY ON?",
        "labelEs": "¿Qué prendas probarse?",
        "questionExample": "Are you trying on that graphic tee or jacket?"
      },
      {
        "icon": "💳",
        "label": "PRICE & DECISION?",
        "labelEs": "¿Precio y decisión?",
        "questionExample": "Is it on sale or too expensive?"
      }
    ],
    "roleA": {
      "label": "Shopper A",
      "labelEs": "Comprador A",
      "action": "Try on style",
      "actionEs": "Probarse estilo",
      "avatar": "🛍️"
    },
    "roleB": {
      "label": "Style Advisor",
      "labelEs": "Asesor",
      "action": "Give opinion",
      "actionEs": "Dar opinión",
      "avatar": "✨"
    },
    "helpWords": [
      {
        "emoji": "👕",
        "word": "vintage graphic tee",
        "translation": "camiseta gráfica vintage"
      },
      {
        "emoji": "🧥",
        "word": "bomber jacket",
        "translation": "chaqueta bomber"
      },
      {
        "emoji": "🏷️",
        "word": "fifty percent off",
        "translation": "50% de descuento"
      },
      {
        "emoji": "🪞",
        "word": "fitting room",
        "translation": "probador"
      },
      {
        "emoji": "🔥",
        "word": "fits perfectly",
        "translation": "queda perfecto"
      },
      {
        "emoji": "👟",
        "word": "matches your sneakers",
        "translation": "combina con tus tenis"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How does this oversized green jacket look on me?",
          "es": "¿Cómo se me ve esta chaqueta verde holgada?"
        },
        {
          "en": "Is there a medium size available on the rack?",
          "es": "¿Hay talla mediana disponible en el perchero?"
        },
        {
          "en": "Do you think the price is worth it for this quality?",
          "es": "¿Crees que el precio vale la pena por esta calidad?"
        }
      ],
      "answer": [
        {
          "en": "It looks super stylish with your black cargo pants!",
          "es": "¡Se ve súper elegante con tus pantalones cargo negros!"
        },
        {
          "en": "Let me check the fitting room rack for size medium.",
          "es": "Déjame revisar el perchero de probadores por la talla M."
        },
        {
          "en": "It's on sale today with thirty percent discount!",
          "es": "¡Está en oferta hoy con un treinta por ciento de descuento!"
        }
      ]
    }
  },
  "c-teens-basic-1-8": {
    "topic": "Challenge a Friend to a Sports Match 🏀",
    "topicEs": "Desafía a un amigo a un partido deportivo",
    "cues": [
      {
        "icon": "🏀",
        "label": "WHICH SPORT?",
        "labelEs": "¿Qué deporte?",
        "questionExample": "Are we playing basketball, soccer, or volleyball?"
      },
      {
        "icon": "🏆",
        "label": "RULES & SCORE?",
        "labelEs": "¿Reglas y marcador?",
        "questionExample": "Are we playing first to 21 points or two halves?"
      },
      {
        "icon": "⚡",
        "label": "SPECIAL SKILLS?",
        "labelEs": "¿Habilidades especiales?",
        "questionExample": "Who has the best 3-point shot or speed?"
      }
    ],
    "roleA": {
      "label": "Challenger",
      "labelEs": "Retador",
      "action": "Challenge to match",
      "actionEs": "Desafiar al partido",
      "avatar": "🏀"
    },
    "roleB": {
      "label": "Rival Player",
      "labelEs": "Rival",
      "action": "Accept challenge",
      "actionEs": "Aceptar desafío",
      "avatar": "⚡"
    },
    "helpWords": [
      {
        "emoji": "🏀",
        "word": "three-point shot",
        "translation": "tiro de tres puntos"
      },
      {
        "emoji": "⚽",
        "word": "penalty kick",
        "translation": "tiro penal"
      },
      {
        "emoji": "👟",
        "word": "court sneakers",
        "translation": "tenis de cancha"
      },
      {
        "emoji": "⏱️",
        "word": "game timer",
        "translation": "cronómetro del partido"
      },
      {
        "emoji": "🔥",
        "word": "unbeatable defense",
        "translation": "defensa imbatible"
      },
      {
        "emoji": "🥇",
        "word": "winner takes trophy",
        "translation": "el ganador se lleva el trofeo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Do you dare to play a 1-on-1 basketball game at the court?",
          "es": "¿Te atreves a jugar un 1 contra 1 de baloncesto en la cancha?"
        },
        {
          "en": "What are the rules: first to fifteen points?",
          "es": "¿Cuáles son las reglas: primero a quince puntos?"
        },
        {
          "en": "Are you ready to face my fast crossover dribbles?",
          "es": "¿Estás listo para enfrentar mis regates rápidos?"
        }
      ],
      "answer": [
        {
          "en": "Challenge accepted! I'll see you at the school court at 5 PM.",
          "es": "¡Desafío aceptado! Te veo en la cancha del colegio a las 5 PM."
        },
        {
          "en": "First to 15, win by two points. No easy fouls!",
          "es": "Primero a 15, ganar por dos puntos. ¡Sin faltas fáciles!"
        },
        {
          "en": "My defense is solid today, you won't score easily!",
          "es": "¡Mi defensa está sólida hoy, no anotarás fácil!"
        }
      ]
    }
  },
  "c-teens-basic-1-9": {
    "topic": "Recommend a Song or Series 🎧",
    "topicEs": "Recomienda una canción o serie",
    "cues": [
      {
        "icon": "🎧",
        "label": "SONG OR SHOW?",
        "labelEs": "¿Canción o serie?",
        "questionExample": "What song or series are you obsessed with right now?"
      },
      {
        "icon": "🎬",
        "label": "GENRE & PLOT?",
        "labelEs": "¿Género y trama?",
        "questionExample": "Is it sci-fi, comedy, hip-hop, or mystery?"
      },
      {
        "icon": "⭐",
        "label": "WHY MUST-SEE?",
        "labelEs": "¿Por qué verla/escucharla?",
        "questionExample": "What makes the soundtrack or story so incredible?"
      }
    ],
    "roleA": {
      "label": "Reviewer",
      "labelEs": "Crítico",
      "action": "Pitch recommendation",
      "actionEs": "Dar recomendación",
      "avatar": "🎧"
    },
    "roleB": {
      "label": "Listener",
      "labelEs": "Oyente",
      "action": "Ask for details",
      "actionEs": "Preguntar detalles",
      "avatar": "🍿"
    },
    "helpWords": [
      {
        "emoji": "🎧",
        "word": "trending playlist",
        "translation": "lista de tendencias"
      },
      {
        "emoji": "🎬",
        "word": "binge-watch",
        "translation": "maratonear serie"
      },
      {
        "emoji": "🚀",
        "word": "sci-fi thriller",
        "translation": "suspenso de ciencia ficción"
      },
      {
        "emoji": "🎵",
        "word": "catchy chorus",
        "translation": "coro pegajoso"
      },
      {
        "emoji": "🤯",
        "word": "plot twist",
        "translation": "giro en la trama"
      },
      {
        "emoji": "⭐",
        "word": "ten out of ten",
        "translation": "diez de diez"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Have you listened to the new track by that indie band?",
          "es": "¿Has escuchado la nueva canción de esa banda indie?"
        },
        {
          "en": "What is that new mystery series on streaming about?",
          "es": "¿De qué trata esa nueva serie de misterio en streaming?"
        },
        {
          "en": "Why do you rate this show a solid 10 out of 10?",
          "es": "¿Por qué le das a esta serie un 10 de 10 sólido?"
        }
      ],
      "answer": [
        {
          "en": "It has an awesome bassline and an unforgettable beat.",
          "es": "Tiene una línea de bajo increíble y un ritmo inolvidable."
        },
        {
          "en": "It follows four teenage detectives solving high-tech crimes.",
          "es": "Sigue a cuatro detectives adolescentes resolviendo crímenes de alta tecnología."
        },
        {
          "en": "The plot twists in every episode will blow your mind!",
          "es": "¡Los giros de trama en cada episodio te volarán la cabeza!"
        }
      ]
    }
  },
  "c-teens-basic-1-10": {
    "topic": "Plan an Epic Vacation Trip ✈️",
    "topicEs": "Planea unas vacaciones increíbles",
    "cues": [
      {
        "icon": "✈️",
        "label": "DESTINATION?",
        "labelEs": "¿Destino soñado?",
        "questionExample": "Are we going to Tokyo, New York, or a tropical island?"
      },
      {
        "icon": "🎢",
        "label": "TOP ATTRACTIONS?",
        "labelEs": "¿Atracciones principales?",
        "questionExample": "What theme parks, museums, or beaches will we visit?"
      },
      {
        "icon": "🧳",
        "label": "WHAT TO PACK?",
        "labelEs": "¿Qué empacar?",
        "questionExample": "What essentials should we pack in our suitcase?"
      }
    ],
    "roleA": {
      "label": "Travel Guide",
      "labelEs": "Guía de viaje",
      "action": "Pitch travel itinerary",
      "actionEs": "Proponer itinerario",
      "avatar": "✈️"
    },
    "roleB": {
      "label": "Traveler",
      "labelEs": "Viajero",
      "action": "Choose activities",
      "actionEs": "Elegir actividades",
      "avatar": "🧳"
    },
    "helpWords": [
      {
        "emoji": "✈️",
        "word": "flight tickets",
        "translation": "tiquetes de avión"
      },
      {
        "emoji": "🏖️",
        "word": "tropical beaches",
        "translation": "playas tropicales"
      },
      {
        "emoji": "🎢",
        "word": "amusement park",
        "translation": "parque de diversiones"
      },
      {
        "emoji": "🍜",
        "word": "street food tour",
        "translation": "tour de comida callejera"
      },
      {
        "emoji": "📸",
        "word": "take epic photos",
        "translation": "tomar fotos épicas"
      },
      {
        "emoji": "🧳",
        "word": "travel backpack",
        "translation": "mochila de viaje"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Where would you choose for our ultimate dream vacation?",
          "es": "¿A dónde irías para nuestras vacaciones soñadas?"
        },
        {
          "en": "What is the very first thing we will do when we land?",
          "es": "¿Qué es lo primero que haremos al aterrizar?"
        },
        {
          "en": "How many days are we staying in the city?",
          "es": "¿Cuántos días nos quedaremos en la ciudad?"
        }
      ],
      "answer": [
        {
          "en": "Tokyo, Japan! We can visit futuristic tech districts and temples.",
          "es": "¡Tokio, Japón! Podemos visitar distritos tecnológicos futuristas y templos."
        },
        {
          "en": "First, eat authentic ramen and check out the arcade towers.",
          "es": "Primero, comer ramen auténtico y conocer las torres de videojuegos."
        },
        {
          "en": "A full seven days of exploring and photography!",
          "es": "¡Siete días completos de exploración y fotografía!"
        }
      ]
    }
  },
  "c-teens-basic-2-1": {
    "topic": "Ask for Directions Around Town 🗺️",
    "topicEs": "Pide direcciones en la ciudad",
    "cues": [
      {
        "icon": "📍",
        "label": "DESTINATION?",
        "labelEs": "¿A dónde vas?",
        "questionExample": "Where are you trying to go in the city?"
      },
      {
        "icon": "🚦",
        "label": "LANDMARKS?",
        "labelEs": "¿Puntos de referencia?",
        "questionExample": "Is it past the subway station or next to the bank?"
      },
      {
        "icon": "🚶",
        "label": "HOW FAR?",
        "labelEs": "¿Qué tan lejos?",
        "questionExample": "How many blocks do I walk to get there?"
      }
    ],
    "roleA": {
      "label": "Lost Tourist",
      "labelEs": "Turista",
      "action": "Ask directions",
      "actionEs": "Pedir direcciones",
      "avatar": "🧭"
    },
    "roleB": {
      "label": "Local Resident",
      "labelEs": "Residente",
      "action": "Give directions",
      "actionEs": "Dar direcciones",
      "avatar": "🏙️"
    },
    "helpWords": [
      {
        "emoji": "🚦",
        "word": "traffic lights",
        "translation": "semáforo"
      },
      {
        "emoji": "🚶",
        "word": "turn left / right",
        "translation": "girar a la izquierda / derecha"
      },
      {
        "emoji": "🚇",
        "word": "subway station",
        "translation": "estación de metro"
      },
      {
        "emoji": "🏢",
        "word": "across the street",
        "translation": "al cruzar la calle"
      },
      {
        "emoji": "📍",
        "word": "two blocks away",
        "translation": "a dos cuadras"
      },
      {
        "emoji": "🗺️",
        "word": "city map",
        "translation": "mapa de la ciudad"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Excuse me, how do I get to the central skatepark from here?",
          "es": "Disculpe, ¿cómo llego al skatepark central desde aquí?"
        },
        {
          "en": "Is it within walking distance or should I take a bus?",
          "es": "¿Queda a distancia a pie o debería tomar un autobús?"
        },
        {
          "en": "Is the museum next to the grand public library?",
          "es": "¿El museo queda al lado de la gran biblioteca pública?"
        }
      ],
      "answer": [
        {
          "en": "Go straight for two blocks, then turn right at the traffic lights.",
          "es": "Sigue derecho por dos cuadras, luego gira a la derecha en el semáforo."
        },
        {
          "en": "It is only a five-minute walk right across the park.",
          "es": "Está a solo cinco minutos caminando justo al cruzar el parque."
        },
        {
          "en": "Yes! It is right across from the station entrance.",
          "es": "¡Sí! Queda justo enfrente de la entrada de la estación."
        }
      ]
    }
  },
  "c-teens-basic-2-2": {
    "topic": "Share Practical Health & Wellness Tips 🩺",
    "topicEs": "Comparte consejos de salud y bienestar",
    "cues": [
      {
        "icon": "🤒",
        "label": "SYMPTOMS?",
        "labelEs": "¿Síntomas?",
        "questionExample": "Do you have a headache, sore throat, or fever?"
      },
      {
        "icon": "💊",
        "label": "REMEDY?",
        "labelEs": "¿Remedio?",
        "questionExample": "Should you drink herbal tea or take vitamins?"
      },
      {
        "icon": "🏃",
        "label": "HEALTHY HABITS?",
        "labelEs": "¿Hábitos saludables?",
        "questionExample": "How much water and sleep do you get daily?"
      }
    ],
    "roleA": {
      "label": "Patient / Teen",
      "labelEs": "Paciente",
      "action": "Explain symptoms",
      "actionEs": "Explicar síntomas",
      "avatar": "🤒"
    },
    "roleB": {
      "label": "Doctor / Nurse",
      "labelEs": "Doctor",
      "action": "Give healthy advice",
      "actionEs": "Dar consejos de salud",
      "avatar": "🩺"
    },
    "helpWords": [
      {
        "emoji": "🤒",
        "word": "headache & fever",
        "translation": "dolor de cabeza y fiebre"
      },
      {
        "emoji": "💊",
        "word": "take vitamins",
        "translation": "tomar vitaminas"
      },
      {
        "emoji": "🍵",
        "word": "hot herbal tea",
        "translation": "té aromático caliente"
      },
      {
        "emoji": "😴",
        "word": "eight hours sleep",
        "translation": "ocho horas de sueño"
      },
      {
        "emoji": "💧",
        "word": "stay hydrated",
        "translation": "mantenerse hidratado"
      },
      {
        "emoji": "🩺",
        "word": "doctor prescription",
        "translation": "receta médica"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Doctor, I've had a sore throat and fever since yesterday.",
          "es": "Doctor, he tenido dolor de garganta y fiebre desde ayer."
        },
        {
          "en": "Should I stay in bed and skip basketball practice?",
          "es": "¿Debería quedarme en cama y faltar a la práctica de baloncesto?"
        },
        {
          "en": "What natural remedies can help relieve the cough?",
          "es": "¿Qué remedios naturales pueden ayudar a calmar la tos?"
        }
      ],
      "answer": [
        {
          "en": "Make sure to drink hot lemon tea with honey and rest.",
          "es": "Asegúrate de tomar té caliente de limón con miel y descansar."
        },
        {
          "en": "Yes, you must avoid intense physical exercise for three days.",
          "es": "Sí, debes evitar el ejercicio físico intenso durante tres días."
        },
        {
          "en": "Get eight full hours of sleep and drink lots of water.",
          "es": "Duerme ocho horas completas y bebe mucha agua."
        }
      ]
    }
  },
  "c-teens-basic-2-3": {
    "topic": "Explain How to Cook Your Favorite Snack 🍳",
    "topicEs": "Explica cómo cocinar tu snack favorito",
    "cues": [
      {
        "icon": "🥑",
        "label": "INGREDIENTS?",
        "labelEs": "¿Ingredientes?",
        "questionExample": "What fresh ingredients do you need?"
      },
      {
        "icon": "🔪",
        "label": "COOKING STEPS?",
        "labelEs": "¿Pasos de cocina?",
        "questionExample": "First slice, then mix, then bake or fry?"
      },
      {
        "icon": "😋",
        "label": "TASTE & SERVING?",
        "labelEs": "¿Sabor y presentación?",
        "questionExample": "Is it crispy, spicy, cheesy, or sweet?"
      }
    ],
    "roleA": {
      "label": "Teen Chef",
      "labelEs": "Chef",
      "action": "Teach recipe step by step",
      "actionEs": "Enseñar receta",
      "avatar": "🧑‍🍳"
    },
    "roleB": {
      "label": "Assistant",
      "labelEs": "Asistente",
      "action": "Follow instructions",
      "actionEs": "Seguir instrucciones",
      "avatar": "🍳"
    },
    "helpWords": [
      {
        "emoji": "🥑",
        "word": "fresh ingredients",
        "translation": "ingredientes frescos"
      },
      {
        "emoji": "🔪",
        "word": "chop and slice",
        "translation": "picar y rebanar"
      },
      {
        "emoji": "🍳",
        "word": "fry in pan",
        "translation": "freír en sartén"
      },
      {
        "emoji": "🧀",
        "word": "melted cheese",
        "translation": "queso derretido"
      },
      {
        "emoji": "🌶️",
        "word": "spicy seasoning",
        "translation": "condimento picante"
      },
      {
        "emoji": "😋",
        "word": "delicious flavor",
        "translation": "delicioso sabor"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What ingredients do we need to make loaded nachos?",
          "es": "¿Qué ingredientes necesitamos para hacer nachos cargados?"
        },
        {
          "en": "How long do we bake the cheese in the oven?",
          "es": "¿Cuánto tiempo horneamos el queso en el horno?"
        },
        {
          "en": "What toppings make it extra crunchy and flavorful?",
          "es": "¿Qué ingredientes extra lo hacen crujiente y sabroso?"
        }
      ],
      "answer": [
        {
          "en": "We need tortilla chips, cheddar cheese, jalapeños, and guacamole.",
          "es": "Necesitamos totopos, queso cheddar, jalapeños y guacamole."
        },
        {
          "en": "Bake at 180 degrees for exactly eight minutes until bubbly.",
          "es": "Hornea a 180 grados durante exactamente ocho minutos hasta que burbujee."
        },
        {
          "en": "Top with fresh cilantro, pico de gallo, and sour cream!",
          "es": "¡Decora con cilantro fresco, pico de gallo y crema agria!"
        }
      ]
    }
  },
  "c-teens-basic-2-4": {
    "topic": "Review a Movie or Series Finale 🍿",
    "topicEs": "Haz la reseña de una película o final de serie",
    "cues": [
      {
        "icon": "🎬",
        "label": "TITLE & HERO?",
        "labelEs": "¿Título y protagonista?",
        "questionExample": "Who was the main character and villain?"
      },
      {
        "icon": "💥",
        "label": "BEST SCENE?",
        "labelEs": "¿Mejor escena?",
        "questionExample": "What was the most thrilling action sequence?"
      },
      {
        "icon": "⭐",
        "label": "FINAL RATING?",
        "labelEs": "¿Calificación final?",
        "questionExample": "How many stars out of five do you award it?"
      }
    ],
    "roleA": {
      "label": "Film Critic",
      "labelEs": "Crítico",
      "action": "Review plot & acting",
      "actionEs": "Evaluar trama",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Cinema Fan",
      "labelEs": "Cinéfilo",
      "action": "Debate ending",
      "actionEs": "Debatir final",
      "avatar": "🍿"
    },
    "helpWords": [
      {
        "emoji": "🎬",
        "word": "blockbuster movie",
        "translation": "película taquillera"
      },
      {
        "emoji": "💥",
        "word": "special effects",
        "translation": "efectos especiales"
      },
      {
        "emoji": "🎭",
        "word": "acting performance",
        "translation": "actuación"
      },
      {
        "emoji": "🤯",
        "word": "unexpected ending",
        "translation": "final inesperado"
      },
      {
        "emoji": "⭐",
        "word": "five stars rating",
        "translation": "calificación de 5 estrellas"
      },
      {
        "emoji": "🍿",
        "word": "popcorn snack",
        "translation": "palomitas de maíz"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Did you enjoy the plot twist in the series finale?",
          "es": "¿Te gustó el giro inesperado en el final de la serie?"
        },
        {
          "en": "What did you think of the CGI visual effects in the space battle?",
          "es": "¿Qué opinas de los efectos visuales CGI en la batalla espacial?"
        },
        {
          "en": "Would you recommend this movie to your friends at school?",
          "es": "¿Recomendarías esta película a tus amigos del colegio?"
        }
      ],
      "answer": [
        {
          "en": "The climax was breathtaking and left me speechless!",
          "es": "¡El clímax fue impresionante y me dejó sin palabras!"
        },
        {
          "en": "The visual effects and soundtrack were top-tier quality.",
          "es": "Los efectos visuales y la banda sonora fueron de primer nivel."
        },
        {
          "en": "I give it a full five stars! You must watch it tonight.",
          "es": "¡Le doy cinco estrellas completas! Debes verla esta noche."
        }
      ]
    }
  },
  "c-teens-basic-2-5": {
    "topic": "Review a Trending Social Media App 📲",
    "topicEs": "Evalúa una aplicación o red social en tendencia",
    "cues": [
      {
        "icon": "📲",
        "label": "APP FEATURES?",
        "labelEs": "¿Funciones de la app?",
        "questionExample": "What makes this new app so popular?"
      },
      {
        "icon": "📹",
        "label": "CONTENT TYPES?",
        "labelEs": "¿Tipos de contenido?",
        "questionExample": "Do people post short video reels, filters, or games?"
      },
      {
        "icon": "🔒",
        "label": "PROS & CONS?",
        "labelEs": "¿Ventajas y desventajas?",
        "questionExample": "Is it addictive, fun, or safe for privacy?"
      }
    ],
    "roleA": {
      "label": "Tech Reviewer",
      "labelEs": "Reseñador",
      "action": "Analyze app features",
      "actionEs": "Analizar funciones",
      "avatar": "📱"
    },
    "roleB": {
      "label": "Teen User",
      "labelEs": "Usuario",
      "action": "Share daily usage",
      "actionEs": "Compartir uso diario",
      "avatar": "✨"
    },
    "helpWords": [
      {
        "emoji": "📲",
        "word": "viral app",
        "translation": "aplicación viral"
      },
      {
        "emoji": "📹",
        "word": "short video reels",
        "translation": "reels de video corto"
      },
      {
        "emoji": "🎨",
        "word": "augmented filters",
        "translation": "filtros de realidad aumentada"
      },
      {
        "emoji": "💬",
        "word": "direct messaging",
        "translation": "mensajes directos"
      },
      {
        "emoji": "🔒",
        "word": "privacy settings",
        "translation": "ajustes de privacidad"
      },
      {
        "emoji": "🔥",
        "word": "trending hashtags",
        "translation": "hashtags en tendencia"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What makes this new social media app different from TikTok?",
          "es": "¿Qué hace diferente a esta nueva app comparada con TikTok?"
        },
        {
          "en": "Do you spend more than an hour scrolling on your feed?",
          "es": "¿Pasas más de una hora deslizando en tu feed?"
        },
        {
          "en": "How do you protect your personal data and privacy settings?",
          "es": "¿Cómo proteges tus datos personales y privacidad?"
        }
      ],
      "answer": [
        {
          "en": "It allows live collaborative video editing with your best friends.",
          "es": "Permite edición colaborativa de videos en vivo con tus mejores amigos."
        },
        {
          "en": "I usually check trending challenges after finishing my homework.",
          "es": "Normalmente miro los retos virales después de hacer la tarea."
        },
        {
          "en": "I keep my account private and turn off location tracking.",
          "es": "Mantengo mi cuenta privada y desactivo el rastreo de ubicación."
        }
      ]
    }
  },
  "c-teens-basic-2-6": {
    "topic": "Propose Green Ideas for Your School 🌱",
    "topicEs": "Propón ideas ecológicas para tu colegio",
    "cues": [
      {
        "icon": "♻️",
        "label": "RECYCLING?",
        "labelEs": "¿Reciclaje?",
        "questionExample": "How can we reduce single-use plastic at school?"
      },
      {
        "icon": "💡",
        "label": "SAVE ENERGY?",
        "labelEs": "¿Ahorro de energía?",
        "questionExample": "Can we turn off lights and install solar panels?"
      },
      {
        "icon": "🌳",
        "label": "CAMPUS GARDEN?",
        "labelEs": "¿Jardín escolar?",
        "questionExample": "Where can students plant trees and flowers?"
      }
    ],
    "roleA": {
      "label": "Eco Leader",
      "labelEs": "Líder ecológico",
      "action": "Propose green project",
      "actionEs": "Proponer proyecto verde",
      "avatar": "🌱"
    },
    "roleB": {
      "label": "Student Council",
      "labelEs": "Consejo estudiantil",
      "action": "Evaluate initiative",
      "actionEs": "Evaluar iniciativa",
      "avatar": "🏫"
    },
    "helpWords": [
      {
        "emoji": "♻️",
        "word": "recycle bins",
        "translation": "canecas de reciclaje"
      },
      {
        "emoji": "🚫",
        "word": "ban plastic bottles",
        "translation": "prohibir botellas plásticas"
      },
      {
        "emoji": "💡",
        "word": "save electricity",
        "translation": "ahorrar electricidad"
      },
      {
        "emoji": "🌱",
        "word": "plant trees",
        "translation": "sembrar árboles"
      },
      {
        "emoji": "☀️",
        "word": "solar power",
        "translation": "energía solar"
      },
      {
        "emoji": "🌍",
        "word": "protect planet",
        "translation": "proteger el planeta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How can our high school reduce plastic waste in the cafeteria?",
          "es": "¿Cómo puede nuestro colegio reducir el plástico en la cafetería?"
        },
        {
          "en": "Should we launch a campus composting and vegetable garden?",
          "es": "¿Deberíamos crear un huerto escolar y compostaje?"
        },
        {
          "en": "What reward can we give classes that save the most electricity?",
          "es": "¿Qué premio podemos dar a los salones que más ahorren luz?"
        }
      ],
      "answer": [
        {
          "en": "We should install water refill stations and ban disposable cups.",
          "es": "Deberíamos instalar estaciones de agua y prohibir vasos desechables."
        },
        {
          "en": "Yes! We can grow organic tomatoes and fresh herbs.",
          "es": "¡Sí! Podemos cultivar tomates orgánicos y hierbas frescas."
        },
        {
          "en": "The winning class can earn an eco-trip to the national park!",
          "es": "¡El salón ganador puede ganar un viaje ecológico al parque nacional!"
        }
      ]
    }
  },
  "c-teens-basic-2-7": {
    "topic": "Roleplay a Dream Job Interview 💼",
    "topicEs": "Simula la entrevista para tu trabajo soñado",
    "cues": [
      {
        "icon": "💼",
        "label": "WHAT POSITION?",
        "labelEs": "¿Qué cargo?",
        "questionExample": "Are you applying for game developer or designer?"
      },
      {
        "icon": "⚡",
        "label": "TOP SKILLS?",
        "labelEs": "¿Habilidades?",
        "questionExample": "Why are you creative, responsible, and skilled?"
      },
      {
        "icon": "🚀",
        "label": "FUTURE VISION?",
        "labelEs": "¿Visión futura?",
        "questionExample": "What big project do you want to build?"
      }
    ],
    "roleA": {
      "label": "Hiring Manager",
      "labelEs": "Entrevistador",
      "action": "Interview candidate",
      "actionEs": "Entrevistar candidato",
      "avatar": "👔"
    },
    "roleB": {
      "label": "Candidate",
      "labelEs": "Candidato",
      "action": "Present skills & passion",
      "actionEs": "Presentar habilidades",
      "avatar": "💼"
    },
    "helpWords": [
      {
        "emoji": "💻",
        "word": "software developer",
        "translation": "desarrollador de software"
      },
      {
        "emoji": "🎨",
        "word": "creative designer",
        "translation": "diseñador creativo"
      },
      {
        "emoji": "🤝",
        "word": "team player",
        "translation": "jugador de equipo"
      },
      {
        "emoji": "💡",
        "word": "problem solver",
        "translation": "resolutor de problemas"
      },
      {
        "emoji": "📈",
        "word": "career growth",
        "translation": "crecimiento profesional"
      },
      {
        "emoji": "🎯",
        "word": "achieve goals",
        "translation": "lograr objetivos"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Welcome! Why are you interested in becoming our Junior Game Artist?",
          "es": "¡Bienvenido! ¿Por qué te interesa ser nuestro artista junior de videojuegos?"
        },
        {
          "en": "Can you give an example of a difficult team project you solved?",
          "es": "¿Puedes dar un ejemplo de un proyecto en equipo difícil que resolviste?"
        },
        {
          "en": "Where do you see yourself in five years within our tech studio?",
          "es": "¿Dónde te ves en cinco años dentro de nuestro estudio tecnológico?"
        }
      ],
      "answer": [
        {
          "en": "I have designed 3D characters and animated short game trailers.",
          "es": "He diseñado personajes 3D y animado trailers cortos de juegos."
        },
        {
          "en": "When our game had render bugs, I redesigned textures overnight.",
          "es": "Cuando el juego tuvo errores de render, rediseñé texturas de un día para otro."
        },
        {
          "en": "I want to lead the art direction for next-gen console games!",
          "es": "¡Quiero liderar la dirección de arte para juegos de próxima generación!"
        }
      ]
    }
  },
  "c-teens-basic-2-8": {
    "topic": "Tell a Spooky or Surprising Story 🕵️",
    "topicEs": "Cuenta una historia misteriosa o sorprendente",
    "cues": [
      {
        "icon": "🌙",
        "label": "WHEN & WHERE?",
        "labelEs": "¿Cuándo y dónde?",
        "questionExample": "Where were you when the strange event happened?"
      },
      {
        "icon": "👣",
        "label": "WHAT HAPPENED?",
        "labelEs": "¿Qué pasó?",
        "questionExample": "What mysterious sound or shadow appeared?"
      },
      {
        "icon": "😱",
        "label": "THE TWIST?",
        "labelEs": "¿El desenlace?",
        "questionExample": "How did the mystery get solved in the end?"
      }
    ],
    "roleA": {
      "label": "Storyteller",
      "labelEs": "Narrador",
      "action": "Build suspense",
      "actionEs": "Construir suspenso",
      "avatar": "📖"
    },
    "roleB": {
      "label": "Listener",
      "labelEs": "Oyente",
      "action": "React to twists",
      "actionEs": "Reaccionar a giros",
      "avatar": "😱"
    },
    "helpWords": [
      {
        "emoji": "🌙",
        "word": "dark night",
        "translation": "noche oscura"
      },
      {
        "emoji": "👣",
        "word": "creepy footsteps",
        "translation": "pasos espeluznantes"
      },
      {
        "emoji": "🕯️",
        "word": "strange shadow",
        "translation": "sombra extraña"
      },
      {
        "emoji": "⚡",
        "word": "sudden noise",
        "translation": "ruido repentino"
      },
      {
        "emoji": "😱",
        "word": "terrified reaction",
        "translation": "reacción de susto"
      },
      {
        "emoji": "🔍",
        "word": "mystery solved",
        "translation": "misterio resuelto"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Where were you when you heard the strange rattling sound in the attic?",
          "es": "¿Dónde estabas cuando escuchaste el ruido extraño en el ático?"
        },
        {
          "en": "Did anyone dare to climb the dark wooden stairs with a flashlight?",
          "es": "¿Alguien se atrevió a subir las escaleras de madera con una linterna?"
        },
        {
          "en": "What was actually making the noise behind the old wardrobe?",
          "es": "¿Qué estaba haciendo el ruido detrás del viejo armario?"
        }
      ],
      "answer": [
        {
          "en": "It was midnight during a thunderstorm and the power went out completely.",
          "es": "Era medianoche durante una tormenta y se fue la luz por completo."
        },
        {
          "en": "I walked up slowly with my flashlight shaking in my hands.",
          "es": "Subí despacio con mi linterna temblando en mis manos."
        },
        {
          "en": "It was just a tiny runaway kitten playing with empty boxes!",
          "es": "¡Era solo un gatito perdido jugando con cajas vacías!"
        }
      ]
    }
  },
  "c-teens-basic-2-9": {
    "topic": "Debate the Ultimate Video Game Hero 🎮",
    "topicEs": "Debate quién es el mejor héroe de videojuegos",
    "cues": [
      {
        "icon": "🎮",
        "label": "CHARACTER & GAME?",
        "labelEs": "¿Personaje y juego?",
        "questionExample": "Who is your favorite gaming protagonist?"
      },
      {
        "icon": "⚡",
        "label": "POWERS & WEAPONS?",
        "labelEs": "¿Poderes y armas?",
        "questionExample": "What special abilities or gear do they use?"
      },
      {
        "icon": "🏆",
        "label": "WHY UNBEATABLE?",
        "labelEs": "¿Por qué es invencible?",
        "questionExample": "Why would they win in a combat arena?"
      }
    ],
    "roleA": {
      "label": "Gamer 1",
      "labelEs": "Gamer 1",
      "action": "Defend your character",
      "actionEs": "Defender personaje",
      "avatar": "🕹️"
    },
    "roleB": {
      "label": "Gamer 2",
      "labelEs": "Gamer 2",
      "action": "Counter with your hero",
      "actionEs": "Contraatacar con héroe",
      "avatar": "🎮"
    },
    "helpWords": [
      {
        "emoji": "🎮",
        "word": "legendary hero",
        "translation": "héroe legendario"
      },
      {
        "emoji": "⚔️",
        "word": "ultimate weapon",
        "translation": "arma definitiva"
      },
      {
        "emoji": "🛡️",
        "word": "shield & armor",
        "translation": "escudo y armadura"
      },
      {
        "emoji": "⚡",
        "word": "superpower move",
        "translation": "movimiento especial"
      },
      {
        "emoji": "🕹️",
        "word": "battle arena",
        "translation": "arena de batalla"
      },
      {
        "emoji": "🏆",
        "word": "victory royale",
        "translation": "victoria magistral"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Why do you believe your chosen game hero could beat anyone?",
          "es": "¿Por qué crees que tu héroe de juego podría vencer a cualquiera?"
        },
        {
          "en": "What special ability gives them an unfair advantage in combat?",
          "es": "¿Qué habilidad especial les da una ventaja definitiva en combate?"
        },
        {
          "en": "How would they defend against lightning attacks or elemental magic?",
          "es": "¿Cómo se defenderían contra ataques de relámpago o magia elemental?"
        }
      ],
      "answer": [
        {
          "en": "My hero has superhuman agility and can manipulate time itself.",
          "es": "Mi héroe tiene agilidad sobrehumana y puede manipular el tiempo."
        },
        {
          "en": "Their energy sword can slice through titanium shields instantly.",
          "es": "Su espada de energía puede cortar escudos de titanio al instante."
        },
        {
          "en": "With speed dash and time rewind, they are completely invincible!",
          "es": "¡Con esquiva rápida y rebobinado de tiempo, son invencibles!"
        }
      ]
    }
  },
  "c-teens-basic-2-10": {
    "topic": "Host an Engaging Teen Podcast 🎙️",
    "topicEs": "Conduce un podcast juvenil entretenido",
    "cues": [
      {
        "icon": "🎙️",
        "label": "TODAY'S TOPIC?",
        "labelEs": "¿Tema de hoy?",
        "questionExample": "What hot teen topic are we discussing today?"
      },
      {
        "icon": "🗣️",
        "label": "GUEST OPINION?",
        "labelEs": "¿Opinión del invitado?",
        "questionExample": "What do students really think about it?"
      },
      {
        "icon": "🎧",
        "label": "CALL TO ACTION?",
        "labelEs": "¿Llamado a la acción?",
        "questionExample": "What should listeners comment and share?"
      }
    ],
    "roleA": {
      "label": "Podcast Host",
      "labelEs": "Presentador",
      "action": "Lead interview",
      "actionEs": "Conducir entrevista",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Special Guest",
      "labelEs": "Invitado especial",
      "action": "Share insights",
      "actionEs": "Compartir opiniones",
      "avatar": "🎧"
    },
    "helpWords": [
      {
        "emoji": "🎙️",
        "word": "live broadcast",
        "translation": "transmisión en vivo"
      },
      {
        "emoji": "🎧",
        "word": "podcast listeners",
        "translation": "oyentes del podcast"
      },
      {
        "emoji": "🔥",
        "word": "hot debate topic",
        "translation": "tema candente"
      },
      {
        "emoji": "💡",
        "word": "insider perspective",
        "translation": "perspectiva interna"
      },
      {
        "emoji": "💬",
        "word": "audience comments",
        "translation": "comentarios del público"
      },
      {
        "emoji": "🌟",
        "word": "subscribe & follow",
        "translation": "suscríbete y sigue"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Welcome back listeners! Today we are discussing esports vs traditional sports!",
          "es": "¡Bienvenidos oyentes! ¡Hoy debatimos esports vs deportes tradicionales!"
        },
        {
          "en": "In your view, should high schools create official competitive gaming teams?",
          "es": "¿En tu opinión, los colegios deberían crear equipos oficiales de esports?"
        },
        {
          "en": "What is your closing advice for students balancing gaming and schoolwork?",
          "es": "¿Cuál es tu consejo final para equilibrar videojuegos y tareas?"
        }
      ],
      "answer": [
        {
          "en": "Esports require extreme reflexes, teamwork, and sharp strategy.",
          "es": "Los esports requieren reflejos extremos, trabajo en equipo y estrategia."
        },
        {
          "en": "Schools should support esports clubs to teach communication and logic.",
          "es": "Los colegios deben apoyar clubes de esports para enseñar comunicación y lógica."
        },
        {
          "en": "Set a two-hour gaming limit and always finish homework first!",
          "es": "¡Establece un límite de juego de dos horas y siempre termina la tarea primero!"
        }
      ]
    }
  },
  "c-teens-basic-3-1": {
    "topic": "Resolve a Busy School Schedule Conflict ⏳",
    "topicEs": "Resuelve un conflicto de horarios escolares",
    "cues": [
      {
        "icon": "📅",
        "label": "CONFLICT?",
        "labelEs": "¿Conflicto?",
        "questionExample": "What two events are happening at the exact same time?"
      },
      {
        "icon": "🕒",
        "label": "RESCHEDULE?",
        "labelEs": "¿Reprogramar?",
        "questionExample": "Can we move practice to Tuesday or Thursday?"
      },
      {
        "icon": "🤝",
        "label": "AGREEMENT?",
        "labelEs": "¿Acuerdo?",
        "questionExample": "How do both friends balance study and sports?"
      }
    ],
    "roleA": {
      "label": "Team Captain",
      "labelEs": "Capitán",
      "action": "Coordinate practice",
      "actionEs": "Coordinar práctica",
      "avatar": "🏆"
    },
    "roleB": {
      "label": "Busy Student",
      "labelEs": "Estudiante",
      "action": "Manage study hours",
      "actionEs": "Gestionar estudio",
      "avatar": "📚"
    },
    "helpWords": [
      {
        "emoji": "📅",
        "word": "busy schedule",
        "translation": "horario apretado"
      },
      {
        "emoji": "⏳",
        "word": "time management",
        "translation": "gestión del tiempo"
      },
      {
        "emoji": "⚽",
        "word": "soccer practice",
        "translation": "práctica de fútbol"
      },
      {
        "emoji": "📚",
        "word": "exam review session",
        "translation": "repaso de examen"
      },
      {
        "emoji": "🤝",
        "word": "reach compromise",
        "translation": "llegar a un acuerdo"
      },
      {
        "emoji": "⏰",
        "word": "reschedule event",
        "translation": "reprogramar evento"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "We have varsity football finals and the science group project due Friday!",
          "es": "¡Tenemos las finales de fútbol y la entrega del proyecto de ciencias el viernes!"
        },
        {
          "en": "Can we hold the team practice an hour earlier so you can study afterwards?",
          "es": "¿Podemos entrenar una hora antes para que puedas estudiar después?"
        },
        {
          "en": "How many hours do you need to complete the science lab report?",
          "es": "¿Cuántas horas necesitas para completar el informe de laboratorio?"
        }
      ],
      "answer": [
        {
          "en": "I really cannot miss the physics review with Mr. Johnson at 4 PM.",
          "es": "De verdad no puedo perderme el repaso de física con el profesor a las 4 PM."
        },
        {
          "en": "If we start at 2:30 PM, I can participate fully in both activities.",
          "es": "Si empezamos a las 2:30 PM, puedo participar en ambas actividades."
        },
        {
          "en": "I will write my section of the report tonight after dinner.",
          "es": "Escribiré mi sección del informe esta noche después de cenar."
        }
      ]
    }
  },
  "c-teens-basic-3-2": {
    "topic": "Interview the Championship Match MVP 🏆",
    "topicEs": "Entrevista al jugador más valioso del campeonato",
    "cues": [
      {
        "icon": "🥇",
        "label": "KEY PLAY?",
        "labelEs": "¿Jugada clave?",
        "questionExample": "What was the decisive goal or basket in the final minutes?"
      },
      {
        "icon": "💪",
        "label": "TEAM TRAINING?",
        "labelEs": "¿Entrenamiento?",
        "questionExample": "How hard did the squad train all season?"
      },
      {
        "icon": "🏆",
        "label": "DEDICATION?",
        "labelEs": "¿Dedicatoria?",
        "questionExample": "Who do you dedicate this championship trophy to?"
      }
    ],
    "roleA": {
      "label": "Sports Journalist",
      "labelEs": "Periodista",
      "action": "Interview athlete",
      "actionEs": "Entrevistar deportista",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Match MVP",
      "labelEs": "MVP del partido",
      "action": "Share victory excitement",
      "actionEs": "Compartir emoción",
      "avatar": "🏆"
    },
    "helpWords": [
      {
        "emoji": "🏆",
        "word": "championship cup",
        "translation": "copa de campeonato"
      },
      {
        "emoji": "🥇",
        "word": "most valuable player",
        "translation": "jugador más valioso"
      },
      {
        "emoji": "⚽",
        "word": "winning goal",
        "translation": "gol ganador"
      },
      {
        "emoji": "💪",
        "word": "team spirit",
        "translation": "espíritu de equipo"
      },
      {
        "emoji": "🏟️",
        "word": "screaming crowd",
        "translation": "multitud eufórica"
      },
      {
        "emoji": "🔥",
        "word": "unforgettable match",
        "translation": "partido inolvidable"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Congratulations on the historic victory! How did you execute that final buzzer-beater?",
          "es": "¡Felicitaciones por la histórica victoria! ¿Cómo ejecutaste la canasta final?"
        },
        {
          "en": "What went through your mind when the opposition scored in overtime?",
          "es": "¿Qué pasó por tu mente cuando el rival anotó en tiempo extra?"
        },
        {
          "en": "To whom do you dedicate this magnificent MVP trophy tonight?",
          "es": "¿A quién dedicas este magnífico trofeo de MVP esta noche?"
        }
      ],
      "answer": [
        {
          "en": "I saw two defenders coming, so I created space and shot with pure focus.",
          "es": "Vi venir a dos defensas, creé espacio y tiré con total concentración."
        },
        {
          "en": "We stayed united, communicated on court, and believed in our strategy.",
          "es": "Nos mantuvimos unidos, nos comunicamos y creímos en nuestra estrategia."
        },
        {
          "en": "I dedicate this to my parents, my coach, and all our loyal fans!",
          "es": "¡Dedico esto a mis padres, mi entrenador y a todos nuestros fieles hinchas!"
        }
      ]
    }
  },
  "c-teens-basic-3-3": {
    "topic": "Describe an Unforgettable Cultural Festival 🎆",
    "topicEs": "Describe un festival cultural inolvidable",
    "cues": [
      {
        "icon": "🎆",
        "label": "WHAT FESTIVAL?",
        "labelEs": "¿Qué festival?",
        "questionExample": "Is it Carnival, Lantern Festival, or Day of the Dead?"
      },
      {
        "icon": "🎭",
        "label": "COSTUMES & MUSIC?",
        "labelEs": "¿Disfraces y música?",
        "questionExample": "What colorful clothes and instruments are featured?"
      },
      {
        "icon": "🍲",
        "label": "TRADITIONAL FOOD?",
        "labelEs": "¿Comida típica?",
        "questionExample": "What festive dishes and sweets do families eat?"
      }
    ],
    "roleA": {
      "label": "Cultural Guide",
      "labelEs": "Guía cultural",
      "action": "Present festival traditions",
      "actionEs": "Presentar tradiciones",
      "avatar": "🎆"
    },
    "roleB": {
      "label": "Curious Visitor",
      "labelEs": "Visitante",
      "action": "Ask about customs",
      "actionEs": "Preguntar costumbres",
      "avatar": "📸"
    },
    "helpWords": [
      {
        "emoji": "🎆",
        "word": "fireworks show",
        "translation": "fuegos artificiales"
      },
      {
        "emoji": "🎭",
        "word": "traditional costumes",
        "translation": "trajes típicos"
      },
      {
        "emoji": "🥁",
        "word": "drum rhythm",
        "translation": "ritmo de tambores"
      },
      {
        "emoji": "🍲",
        "word": "festive feast",
        "translation": "banquete festivo"
      },
      {
        "emoji": "🏮",
        "word": "lantern parade",
        "translation": "desfile de faroles"
      },
      {
        "emoji": "🎉",
        "word": "joyful celebration",
        "translation": "celebración alegre"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What makes the annual Lantern Festival so magical for teenagers and families?",
          "es": "¿Qué hace que el Festival de Faroles sea tan mágico para todos?"
        },
        {
          "en": "How do people craft the illuminated lanterns they release into the night sky?",
          "es": "¿Cómo elaboran los faroles iluminados que lanzan al cielo nocturno?"
        },
        {
          "en": "What special sweet snacks are served during the street parade?",
          "es": "¿Qué dulces tradicionales se sirven durante el desfile callejero?"
        }
      ],
      "answer": [
        {
          "en": "Thousands of glowing lanterns illuminate the dark sky like floating stars.",
          "es": "Miles de faroles brillantes iluminan el cielo oscuro como estrellas flotantes."
        },
        {
          "en": "People write wishes of good health and happiness on colored rice paper.",
          "es": "La gente escribe deseos de salud y felicidad en papel de arroz de colores."
        },
        {
          "en": "We eat warm sesame dumplings and sweet rice cakes with hot ginger tea.",
          "es": "Comemos bolas de sésamo y pastelitos de arroz dulce con té de jengibre."
        }
      ]
    }
  },
  "c-teens-basic-3-4": {
    "topic": "Debate Colonizing Mars & Space Travel 🚀",
    "topicEs": "Debate sobre la colonización de Marte y viajes espaciales",
    "cues": [
      {
        "icon": "🚀",
        "label": "MARS COLONY?",
        "labelEs": "¿Colonia en Marte?",
        "questionExample": "Should humans build cities on Mars in our lifetime?"
      },
      {
        "icon": "🛸",
        "label": "TECHNOLOGY?",
        "labelEs": "¿Tecnología espacial?",
        "questionExample": "How will rockets protect astronauts from radiation?"
      },
      {
        "icon": "🌍",
        "label": "EARTH FIRST?",
        "labelEs": "¿Prioridad la Tierra?",
        "questionExample": "Should we invest money in Earth or deep space?"
      }
    ],
    "roleA": {
      "label": "Space Futurist",
      "labelEs": "Futurista",
      "action": "Advocate Mars colony",
      "actionEs": "Defender colonia en Marte",
      "avatar": "🚀"
    },
    "roleB": {
      "label": "Earth Advocate",
      "labelEs": "Ecologista",
      "action": "Focus on Earth priority",
      "actionEs": "Priorizar la Tierra",
      "avatar": "🌍"
    },
    "helpWords": [
      {
        "emoji": "🚀",
        "word": "Mars mission",
        "translation": "misión a Marte"
      },
      {
        "emoji": "🛸",
        "word": "space shuttle",
        "translation": "transbordador espacial"
      },
      {
        "emoji": "🪐",
        "word": "red planet",
        "translation": "planeta rojo"
      },
      {
        "emoji": "🌌",
        "word": "zero gravity",
        "translation": "gravedad cero"
      },
      {
        "emoji": "🛰️",
        "word": "satellite orbit",
        "translation": "órbita satelital"
      },
      {
        "emoji": "👨‍🚀",
        "word": "astronaut crew",
        "translation": "tripulación astronauta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Why do you believe sending youth and scientists to Mars is humanity's future?",
          "es": "¿Por qué crees que enviar jóvenes y científicos a Marte es el futuro?"
        },
        {
          "en": "Isn't it much wiser to invest billions restoring our oceans and forests?",
          "es": "¿No es más sabio invertir miles de millones en restaurar océanos y bosques?"
        },
        {
          "en": "How can humans survive on a planet with zero breathable atmosphere?",
          "es": "¿Cómo pueden sobrevivir los humanos en un planeta sin atmósfera respirable?"
        }
      ],
      "answer": [
        {
          "en": "Colonizing Mars ensures species survival and drives revolutionary technology.",
          "es": "Colonizar Marte asegura la supervivencia humana e impulsa gran tecnología."
        },
        {
          "en": "Space innovation generates solar advances and water purification for Earth.",
          "es": "La innovación espacial genera avances solares y purificación de agua para la Tierra."
        },
        {
          "en": "We can construct pressurized geodesic domes and generate oxygen from underground ice.",
          "es": "Podemos construir domos presurizados y generar oxígeno a partir de hielo subterráneo."
        }
      ]
    }
  },
  "c-teens-basic-3-5": {
    "topic": "Share Nostalgic Childhood Memories 🧸",
    "topicEs": "Comparte recuerdos nostálgicos de la infancia",
    "cues": [
      {
        "icon": "🧸",
        "label": "FAVORITE TOY?",
        "labelEs": "¿Juguete favorito?",
        "questionExample": "What toy or game did you play with when you were seven?"
      },
      {
        "icon": "🏡",
        "label": "OLD HOUSE / PET?",
        "labelEs": "¿Antigua casa o mascota?",
        "questionExample": "Where did you use to play outside every day?"
      },
      {
        "icon": "😄",
        "label": "FUNNY MOMENT?",
        "labelEs": "¿Momento divertido?",
        "questionExample": "What funny mistake did you make as a little kid?"
      }
    ],
    "roleA": {
      "label": "Nostalgic Friend A",
      "labelEs": "Amigo A",
      "action": "Ask about past",
      "actionEs": "Preguntar por el pasado",
      "avatar": "🧸"
    },
    "roleB": {
      "label": "Nostalgic Friend B",
      "labelEs": "Amigo B",
      "action": "Share photo story",
      "actionEs": "Compartir foto y recuerdo",
      "avatar": "📸"
    },
    "helpWords": [
      {
        "emoji": "🧸",
        "word": "childhood toy",
        "translation": "juguete de la infancia"
      },
      {
        "emoji": "🏡",
        "word": "old neighborhood",
        "translation": "viejo vecindario"
      },
      {
        "emoji": "🌳",
        "word": "treehouse games",
        "translation": "juegos en la casa del árbol"
      },
      {
        "emoji": "🚲",
        "word": "first bicycle",
        "translation": "primera bicicleta"
      },
      {
        "emoji": "😄",
        "word": "funny memory",
        "translation": "recuerdo divertido"
      },
      {
        "emoji": "📸",
        "word": "vintage photo",
        "translation": "foto antigua"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What was your absolute favorite toy or video game when you were eight?",
          "es": "¿Cuál era tu juguete o videojuego favorito cuando tenías ocho años?"
        },
        {
          "en": "Do you remember the day you learned how to ride your two-wheel bicycle?",
          "es": "¿Recuerdas el día en que aprendiste a montar bicicleta de dos ruedas?"
        },
        {
          "en": "What mischievous things did you and your cousins do during summer holidays?",
          "es": "¿Qué travesuras hacían tus primos y tú durante las vacaciones de verano?"
        }
      ],
      "answer": [
        {
          "en": "I had a massive bucket of Lego bricks and built huge superhero towers.",
          "es": "Tenía un balde gigante de Legos y construía enormes torres de superhéroes."
        },
        {
          "en": "My dad held the back seat until I suddenly realized I was riding alone!",
          "es": "¡Mi papá sostenía el asiento trasero hasta que me di cuenta de que iba solo!"
        },
        {
          "en": "We built secret forts in the backyard and played hide-and-seek till nightfall.",
          "es": "Construíamos fuertes secretos en el patio y jugábamos a las escondidas hasta la noche."
        }
      ]
    }
  },
  "c-teens-basic-3-6": {
    "topic": "Share an Unbelievable Travel Anecdote 🌴",
    "topicEs": "Comparte una anécdota de viaje increíble",
    "cues": [
      {
        "icon": "✈️",
        "label": "WHERE & WHEN?",
        "labelEs": "¿Dónde y cuándo?",
        "questionExample": "Where were you traveling when the incident occurred?"
      },
      {
        "icon": "🎒",
        "label": "WHAT WENT WRONG?",
        "labelEs": "¿Qué salió mal?",
        "questionExample": "Did you miss a bus, get lost, or find a hidden spot?"
      },
      {
        "icon": "🌟",
        "label": "BEST SURPRISE?",
        "labelEs": "¿Mejor sorpresa?",
        "questionExample": "How did the adventure turn into the best day ever?"
      }
    ],
    "roleA": {
      "label": "Adventurer",
      "labelEs": "Aventurero",
      "action": "Tell crazy travel tale",
      "actionEs": "Contar anécdota de viaje",
      "avatar": "🌴"
    },
    "roleB": {
      "label": "Listener",
      "labelEs": "Oyente",
      "action": "Ask what happened next",
      "actionEs": "Preguntar qué pasó",
      "avatar": "😮"
    },
    "helpWords": [
      {
        "emoji": "✈️",
        "word": "airport rush",
        "translation": "carrera en el aeropuerto"
      },
      {
        "emoji": "🌴",
        "word": "hidden paradise",
        "translation": "paraíso oculto"
      },
      {
        "emoji": "🗺️",
        "word": "got lost in city",
        "translation": "perderse en la ciudad"
      },
      {
        "emoji": "🧳",
        "word": "lost luggage",
        "translation": "equipaje extraviado"
      },
      {
        "emoji": "🤝",
        "word": "friendly locals",
        "translation": "lugareños amables"
      },
      {
        "emoji": "🌅",
        "word": "breathtaking sunset",
        "translation": "atardecer impresionante"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What happened when your family missed the connecting ferry in the islands?",
          "es": "¿Qué pasó cuando tu familia perdió el ferry de conexión en las islas?"
        },
        {
          "en": "Where did you find food and shelter in that tiny coastal fishing village?",
          "es": "¿Dónde encontraron comida y refugio en ese pequeño pueblo pesquero?"
        },
        {
          "en": "How did this unexpected mishap turn into your favorite vacation memory?",
          "es": "¿Cómo este imprevisto se convirtió en tu recuerdo favorito de vacaciones?"
        }
      ],
      "answer": [
        {
          "en": "We rushed to the dock just as the last ferry sailed into the horizon!",
          "es": "¡Corrimos al muelle justo cuando el último ferry zarpaba hacia el horizonte!"
        },
        {
          "en": "A local fisherman invited us to his family restaurant for fresh grilled seafood.",
          "es": "Un pescador local nos invitó a su restaurante familiar a comer mariscos frescos."
        },
        {
          "en": "We danced around a bonfire on the beach and watched shooting stars all night!",
          "es": "¡Bailamos alrededor de una fogata en la playa y vimos estrellas fugaces toda la noche!"
        }
      ]
    }
  },
  "c-teens-basic-3-7": {
    "topic": "Present Your Inspiring Role Model 🌟",
    "topicEs": "Presenta a tu modelo a seguir inspirador",
    "cues": [
      {
        "icon": "🌟",
        "label": "WHO IS IT?",
        "labelEs": "¿Quién es?",
        "questionExample": "Is your hero a scientist, athlete, musician, or leader?"
      },
      {
        "icon": "🧗",
        "label": "OBSTACLES OVERCOME?",
        "labelEs": "¿Obstáculos superados?",
        "questionExample": "What challenges did they overcome to succeed?"
      },
      {
        "icon": "💡",
        "label": "LESSON FOR TEENS?",
        "labelEs": "¿Lección para jóvenes?",
        "questionExample": "What inspiring lesson do you learn from their life?"
      }
    ],
    "roleA": {
      "label": "Biographer",
      "labelEs": "Biógrafo",
      "action": "Present hero biography",
      "actionEs": "Presentar biografía",
      "avatar": "🌟"
    },
    "roleB": {
      "label": "Listener",
      "labelEs": "Oyente",
      "action": "Discuss impact",
      "actionEs": "Debatir impacto",
      "avatar": "💡"
    },
    "helpWords": [
      {
        "emoji": "🌟",
        "word": "inspiring role model",
        "translation": "modelo a seguir"
      },
      {
        "emoji": "🧗",
        "word": "overcome hardship",
        "translation": "superar dificultades"
      },
      {
        "emoji": "🏆",
        "word": "world achievements",
        "translation": "logros mundiales"
      },
      {
        "emoji": "💡",
        "word": "hard work & grit",
        "translation": "esfuerzo y tenacidad"
      },
      {
        "emoji": "📚",
        "word": "biography facts",
        "translation": "datos biográficos"
      },
      {
        "emoji": "✨",
        "word": "change the world",
        "translation": "cambiar el mundo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Who is the historical figure or athlete you look up to most in life?",
          "es": "¿Quién es la figura histórica o atleta que más admiras en la vida?"
        },
        {
          "en": "What immense challenges and setbacks did they face before achieving greatness?",
          "es": "¿Qué inmensos retos y obstáculos enfrentaron antes de alcanzar la grandeza?"
        },
        {
          "en": "How can teenagers apply their perseverance and discipline to everyday studies?",
          "es": "¿Cómo pueden los jóvenes aplicar su perseverancia a los estudios diarios?"
        }
      ],
      "answer": [
        {
          "en": "I admire Marie Curie for her relentless dedication to scientific discovery.",
          "es": "Admiro a Marie Curie por su incansable dedicación al descubrimiento científico."
        },
        {
          "en": "She studied in secret, overcame poverty, and won two Nobel Prizes in science.",
          "es": "Estudió en secreto, superó la pobreza y ganó dos premios Nobel de ciencias."
        },
        {
          "en": "Her life proves that curiosity, resilience, and passion conquer every barrier.",
          "es": "Su vida demuestra que la curiosidad, la resiliencia y la pasión vencen toda barrera."
        }
      ]
    }
  },
  "c-teens-basic-3-8": {
    "topic": "Narrate a Suspenseful Mystery Adventure 📖",
    "topicEs": "Narra una aventura de misterio y suspenso",
    "cues": [
      {
        "icon": "🚪",
        "label": "THE DISCOVERY?",
        "labelEs": "¿El descubrimiento?",
        "questionExample": "Suddenly, what secret door or coded letter was found?"
      },
      {
        "icon": "⚡",
        "label": "CONNECTORS?",
        "labelEs": "¿Conectores?",
        "questionExample": "First... then... unexpectedly... meanwhile...?"
      },
      {
        "icon": "🔑",
        "label": "CLIMAX?",
        "labelEs": "¿Desenlace?",
        "questionExample": "How did the team unlock the final puzzle in time?"
      }
    ],
    "roleA": {
      "label": "Mystery Narrator",
      "labelEs": "Narrador",
      "action": "Tell story with connectors",
      "actionEs": "Contar historia",
      "avatar": "📖"
    },
    "roleB": {
      "label": "Detective Partner",
      "labelEs": "Detective",
      "action": "Solve the clues",
      "actionEs": "Resolver pistas",
      "avatar": "🔍"
    },
    "helpWords": [
      {
        "emoji": "🚪",
        "word": "hidden doorway",
        "translation": "puerta oculta"
      },
      {
        "emoji": "🔑",
        "word": "secret key",
        "translation": "llave secreta"
      },
      {
        "emoji": "📜",
        "word": "ancient cipher",
        "translation": "código antiguo"
      },
      {
        "emoji": "⚡",
        "word": "all of a sudden",
        "translation": "de repente"
      },
      {
        "emoji": "⏳",
        "word": "meanwhile",
        "translation": "mientras tanto"
      },
      {
        "emoji": "🏆",
        "word": "escaped in time",
        "translation": "escapar a tiempo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What strange message was carved inside the ancient library book?",
          "es": "¿Qué mensaje extraño estaba grabado dentro del libro de la biblioteca?"
        },
        {
          "en": "What did the three friends do when the heavy iron door slammed shut behind them?",
          "es": "¿Qué hicieron los amigos cuando la pesada puerta de hierro se cerró tras ellos?"
        },
        {
          "en": "How did decoding the musical riddle open the secret escape tunnel?",
          "es": "¿Cómo descifrar el acertijo musical abrió el túnel secreto de escape?"
        }
      ],
      "answer": [
        {
          "en": "First, we noticed invisible ink markings glowing under our ultraviolet pen.",
          "es": "Primero, notamos marcas de tinta invisible brillando bajo la luz ultravioleta."
        },
        {
          "en": "Unexpectedly, the stone floor trembled as a clockwork mechanism activated.",
          "es": "Inesperadamente, el piso de piedra tembló al activarse un mecanismo de reloj."
        },
        {
          "en": "Meanwhile, I played the four musical notes on the flute and the door swung open!",
          "es": "¡Mientras tanto, toqué las cuatro notas musicales en la flauta y la puerta se abrió!"
        }
      ]
    }
  },
  "c-teens-basic-3-9": {
    "topic": "Report a Tech Glitch to Support 🛠️",
    "topicEs": "Reporta una falla tecnológica al soporte",
    "cues": [
      {
        "icon": "💻",
        "label": "WHAT IS BROKEN?",
        "labelEs": "¿Qué está roto?",
        "questionExample": "Is the screen frozen, glitching, or showing error codes?"
      },
      {
        "icon": "⚠️",
        "label": "WHEN DID IT START?",
        "labelEs": "¿Cuándo empezó?",
        "questionExample": "Did it crash after downloading the new update?"
      },
      {
        "icon": "🔧",
        "label": "HOW TO FIX?",
        "labelEs": "¿Cómo arreglarlo?",
        "questionExample": "Should we reboot, clear cache, or reinstall firmware?"
      }
    ],
    "roleA": {
      "label": "Frustrated User",
      "labelEs": "Usuario",
      "action": "Explain tech problem",
      "actionEs": "Explicar problema técnico",
      "avatar": "💻"
    },
    "roleB": {
      "label": "Support Tech",
      "labelEs": "Técnico",
      "action": "Provide troubleshooting",
      "actionEs": "Dar soporte técnico",
      "avatar": "🛠️"
    },
    "helpWords": [
      {
        "emoji": "💻",
        "word": "frozen screen",
        "translation": "pantalla congelada"
      },
      {
        "emoji": "⚠️",
        "word": "system error code",
        "translation": "código de error"
      },
      {
        "emoji": "🔄",
        "word": "restart device",
        "translation": "reiniciar dispositivo"
      },
      {
        "emoji": "📶",
        "word": "lost Wi-Fi connection",
        "translation": "perder conexión Wi-Fi"
      },
      {
        "emoji": "💾",
        "word": "backup files",
        "translation": "respaldar archivos"
      },
      {
        "emoji": "🛠️",
        "word": "software update",
        "translation": "actualización de software"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Customer support, my laptop screen freezes completely whenever I launch my video editor.",
          "es": "Soporte al cliente, mi pantalla se congela cuando abro el editor de video."
        },
        {
          "en": "Did this issue begin immediately after installing the latest operating system patch?",
          "es": "¿Este problema empezó justo después de instalar el último parche del sistema?"
        },
        {
          "en": "What troubleshooting steps have you already attempted to resolve the crash?",
          "es": "¿Qué pasos de solución de problemas ya has intentado para solucionar el fallo?"
        }
      ],
      "answer": [
        {
          "en": "I have rebooted in safe mode and updated the graphics driver, but the bug persists.",
          "es": "He reiniciado en modo seguro y actualizado el controlador gráfico, pero el fallo sigue."
        },
        {
          "en": "Let's boot into diagnostic mode and clear your temporary graphics cache.",
          "es": "Vamos a iniciar en modo de diagnóstico y borrar la caché temporal de gráficos."
        },
        {
          "en": "If that fails, I will send you a direct link to roll back to the stable build.",
          "es": "Si eso falla, te enviaré un enlace directo para volver a la versión estable."
        }
      ]
    }
  },
  "c-teens-basic-3-10": {
    "topic": "Recap What Really Happened Last Weekend 🎬",
    "topicEs": "Recapitula lo que realmente pasó el fin de semana",
    "cues": [
      {
        "icon": "🎬",
        "label": "SATURDAY STORY?",
        "labelEs": "¿Historia del sábado?",
        "questionExample": "Where did everyone go and what did you eat?"
      },
      {
        "icon": "🎸",
        "label": "SURPRISE EVENT?",
        "labelEs": "¿Evento sorpresa?",
        "questionExample": "Did you run into a celebrity or witness an epic event?"
      },
      {
        "icon": "🔥",
        "label": "HIGHLIGHT?",
        "labelEs": "¿Lo más destacado?",
        "questionExample": "What was the single greatest moment of the entire weekend?"
      }
    ],
    "roleA": {
      "label": "Friend 1",
      "labelEs": "Amigo 1",
      "action": "Ask weekend gossip",
      "actionEs": "Preguntar novedades",
      "avatar": "🎬"
    },
    "roleB": {
      "label": "Friend 2",
      "labelEs": "Amigo 2",
      "action": "Recap with irregular verbs",
      "actionEs": "Recapitular con verbos irregulares",
      "avatar": "🗣️"
    },
    "helpWords": [
      {
        "emoji": "🎬",
        "word": "crazy weekend",
        "translation": "fin de semana loco"
      },
      {
        "emoji": "🏃",
        "word": "went to the festival",
        "translation": "fuimos al festival"
      },
      {
        "emoji": "🍕",
        "word": "ate delicious tacos",
        "translation": "comimos deliciosos tacos"
      },
      {
        "emoji": "🎸",
        "word": "saw live concert",
        "translation": "vimos concierto en vivo"
      },
      {
        "emoji": "🎉",
        "word": "had so much fun",
        "translation": "nos divertimos mucho"
      },
      {
        "emoji": "📸",
        "word": "took hundred photos",
        "translation": "tomamos cientos de fotos"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "You won't believe who I ran into at the downtown food truck carnival on Saturday!",
          "es": "¡No vas a creer con quién me encontré en el carnaval gastronómico el sábado!"
        },
        {
          "en": "Did you actually speak with the famous YouTuber who produces gaming streams?",
          "es": "¿De verdad hablaste con el famoso youtuber que hace directos de videojuegos?"
        },
        {
          "en": "What was the most exciting thing you and your crew did all weekend long?",
          "es": "¿Qué fue lo más emocionante que hicieron tu grupo y tú todo el fin de semana?"
        }
      ],
      "answer": [
        {
          "en": "We went downtown, ate Korean corn dogs, and saw an incredible breakdance battle.",
          "es": "Fuimos al centro, comimos banderillas coreanas y vimos una batalla de breakdance."
        },
        {
          "en": "He was super polite! He took selfies with our group and signed my skateboard.",
          "es": "¡Fue súper amable! Se tomó fotos con nuestro grupo y firmó mi patineta."
        },
        {
          "en": "We had the absolute best time ever and posted a vlog with 5,000 views!",
          "es": "¡La pasamos increíble y publicamos un vlog que ya tiene 5,000 vistas!"
        }
      ]
    }
  },
  "c-teens-basic-4-1": {
    "topic": "Defend Your View on Modern Teen Culture 💭",
    "topicEs": "Defiende tu postura sobre cultura juvenil moderna",
    "cues": [
      {
        "icon": "💭",
        "label": "WHAT TOPIC?",
        "labelEs": "¿Qué tema?",
        "questionExample": "Should schools ban smartphones or integrate them?"
      },
      {
        "icon": "⚖️",
        "label": "ARGUMENTS?",
        "labelEs": "¿Argumentos?",
        "questionExample": "In my perspective, digital tools enhance creativity!"
      },
      {
        "icon": "🤝",
        "label": "COUNTER-ARGUMENT?",
        "labelEs": "¿Contraargumento?",
        "questionExample": "How do you respond to parents who say it's distracting?"
      }
    ],
    "roleA": {
      "label": "Debater A",
      "labelEs": "Debatiente A",
      "action": "State strong opinion",
      "actionEs": "Expresar postura",
      "avatar": "💭"
    },
    "roleB": {
      "label": "Debater B",
      "labelEs": "Debatiente B",
      "action": "Provide counter-evidence",
      "actionEs": "Dar contraevidencia",
      "avatar": "⚖️"
    },
    "helpWords": [
      {
        "emoji": "💭",
        "word": "in my opinion",
        "translation": "en mi opinión"
      },
      {
        "emoji": "📱",
        "word": "digital lifestyle",
        "translation": "estilo de vida digital"
      },
      {
        "emoji": "💡",
        "word": "creative freedom",
        "translation": "libertad creativa"
      },
      {
        "emoji": "⚖️",
        "word": "pros and cons",
        "translation": "pros y contras"
      },
      {
        "emoji": "🗣️",
        "word": "persuasive point",
        "translation": "punto persuasivo"
      },
      {
        "emoji": "🤝",
        "word": "respectful discussion",
        "translation": "discusión respetuosa"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "In your opinion, should schools ban smartphones or integrate them into daily lessons?",
          "es": "¿En tu opinión, los colegios deberían prohibir o integrar los celulares?"
        },
        {
          "en": "What strong arguments support using digital tablets for interactive group projects?",
          "es": "¿Qué argumentos sólidos apoyan el uso de tablets para proyectos grupales?"
        },
        {
          "en": "How do you address concerns regarding screen addiction and classroom distraction?",
          "es": "¿Cómo respondes a la preocupación por la adicción y la distracción en clase?"
        }
      ],
      "answer": [
        {
          "en": "From my perspective, smartphones empower students to research instantly and collaborate.",
          "es": "Desde mi perspectiva, los celulares permiten investigar al instante y colaborar."
        },
        {
          "en": "Interactive apps allow real-time quizzes, 3D anatomy models, and language drills.",
          "es": "Las aplicaciones interactivas permiten cuestionarios en vivo y modelos 3D."
        },
        {
          "en": "By establishing clear screen-time guidelines, students learn essential digital self-discipline.",
          "es": "Estableciendo pautas claras de uso, los alumnos aprenden autodisciplina digital."
        }
      ]
    }
  },
  "c-teens-basic-4-2": {
    "topic": "Give Smart Advice to a Stressed Classmate 💡",
    "topicEs": "Da buenos consejos a un compañero estresado",
    "cues": [
      {
        "icon": "😰",
        "label": "WHAT'S THE STRESS?",
        "labelEs": "¿Qué causa estrés?",
        "questionExample": "Is it exam anxiety, friendship drama, or too much work?"
      },
      {
        "icon": "💡",
        "label": "SMART ADVICE?",
        "labelEs": "¿Buen consejo?",
        "questionExample": "If I were you, I would take a walk and make a study plan."
      },
      {
        "icon": "🧘",
        "label": "BREATHING & CALM?",
        "labelEs": "¿Calma y respiración?",
        "questionExample": "What relaxation habits work best to recharge?"
      }
    ],
    "roleA": {
      "label": "Stressed Student",
      "labelEs": "Estudiante",
      "action": "Explain pressure",
      "actionEs": "Explicar presión",
      "avatar": "😰"
    },
    "roleB": {
      "label": "Helpful Friend",
      "labelEs": "Amigo",
      "action": "Offer practical guidance",
      "actionEs": "Ofrecer consejos",
      "avatar": "💡"
    },
    "helpWords": [
      {
        "emoji": "😰",
        "word": "feel overwhelmed",
        "translation": "sentirse abrumado"
      },
      {
        "emoji": "💡",
        "word": "if I were you",
        "translation": "si yo fuera tú"
      },
      {
        "emoji": "📅",
        "word": "make a schedule",
        "translation": "hacer un horario"
      },
      {
        "emoji": "🧘",
        "word": "deep breathing",
        "translation": "respiración profunda"
      },
      {
        "emoji": "☕",
        "word": "take short breaks",
        "translation": "tomar pausas cortas"
      },
      {
        "emoji": "💪",
        "word": "you can do this",
        "translation": "tú puedes lograrlo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "I feel completely overwhelmed with three final exams and a chemistry presentation this Friday.",
          "es": "Me siento totalmente abrumado con tres exámenes y una presentación de química."
        },
        {
          "en": "If you were in my shoes, how would you manage studying without burning out?",
          "es": "¿Si estuvieras en mi lugar, cómo estudiarías sin agotarte por completo?"
        },
        {
          "en": "What practical habits help you stay calm and focused under high academic pressure?",
          "es": "¿Qué hábitos prácticos te ayudan a mantener la calma y el enfoque bajo presión?"
        }
      ],
      "answer": [
        {
          "en": "If I were you, I would break each subject into 30-minute Pomodoro focus blocks.",
          "es": "Si yo fuera tú, dividiría cada materia en bloques Pomodoro de 30 minutos."
        },
        {
          "en": "Make sure you take a 10-minute walk outside and drink water between sessions.",
          "es": "Asegúrate de dar una caminata de 10 minutos al aire libre y beber agua."
        },
        {
          "en": "Remember to prioritize sleep: pulling an all-nighter reduces memory retention dramatically.",
          "es": "Recuerda priorizar el sueño: trasnochar reduce drásticamente la retención de memoria."
        }
      ]
    }
  },
  "c-teens-basic-4-3": {
    "topic": "Explain Scientific Facts & Cause-and-Effect 🔬",
    "topicEs": "Explica hechos científicos y causa-efecto",
    "cues": [
      {
        "icon": "🔬",
        "label": "WHAT PHENOMENON?",
        "labelEs": "¿Qué fenómeno?",
        "questionExample": "If water reaches 100 degrees, it boils and evaporates."
      },
      {
        "icon": "⚡",
        "label": "CAUSE AND EFFECT?",
        "labelEs": "¿Causa y efecto?",
        "questionExample": "When sunlight hits solar cells, clean electricity flows."
      },
      {
        "icon": "🌍",
        "label": "WHY IT MATTERS?",
        "labelEs": "¿Por qué importa?",
        "questionExample": "How does this scientific law power our everyday tech?"
      }
    ],
    "roleA": {
      "label": "Science Presenter",
      "labelEs": "Divulgador",
      "action": "Explain zero conditional fact",
      "actionEs": "Explicar hecho científico",
      "avatar": "🔬"
    },
    "roleB": {
      "label": "Curious Student",
      "labelEs": "Estudiante",
      "action": "Test cause and effect",
      "actionEs": "Comprobar causa y efecto",
      "avatar": "⚡"
    },
    "helpWords": [
      {
        "emoji": "🔬",
        "word": "scientific fact",
        "translation": "hecho científico"
      },
      {
        "emoji": "🌡️",
        "word": "temperature boils",
        "translation": "temperatura de ebullición"
      },
      {
        "emoji": "☀️",
        "word": "solar energy",
        "translation": "energía solar"
      },
      {
        "emoji": "⚡",
        "word": "electricity flows",
        "translation": "fluye electricidad"
      },
      {
        "emoji": "🌱",
        "word": "photosynthesis",
        "translation": "fotosíntesis"
      },
      {
        "emoji": "🧪",
        "word": "chemical reaction",
        "translation": "reacción química"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What universal scientific rule happens when water temperature reaches 100 degrees Celsius?",
          "es": "¿Qué regla científica universal ocurre cuando el agua llega a 100 grados Celsius?"
        },
        {
          "en": "When sunlight strikes photovoltaic solar panels, what physical reaction produces electric current?",
          "es": "¿Cuando la luz solar incide en paneles solares, qué reacción produce corriente?"
        },
        {
          "en": "Why is understanding cause-and-effect essential when engineering clean energy solutions?",
          "es": "¿Por qué entender la causa y el efecto es clave al diseñar energías limpias?"
        }
      ],
      "answer": [
        {
          "en": "If water reaches 100 degrees Celsius at sea level, it boils and transforms into steam.",
          "es": "Si el agua alcanza 100 grados Celsius al nivel del mar, hierve y se vuelve vapor."
        },
        {
          "en": "When photons strike silicon cells, electrons are energized and generate direct electricity.",
          "es": "Cuando los fotones impactan las celdas de silicio, los electrones generan electricidad."
        },
        {
          "en": "If engineers harness these predictable physics laws, cities can transition to 100% renewable power.",
          "es": "Si los ingenieros aprovechan estas leyes de la física, las ciudades pueden ser 100% renovables."
        }
      ]
    }
  },
  "c-teens-basic-4-4": {
    "topic": "Decode Online Messaging & Cyber Etiquette 💬",
    "topicEs": "Descifra mensajes en línea y etiqueta digital",
    "cues": [
      {
        "icon": "💬",
        "label": "INTERNET ABBREVIATIONS?",
        "labelEs": "¿Abreviaturas?",
        "questionExample": "What does TBH, IMO, and IDK stand for?"
      },
      {
        "icon": "📱",
        "label": "TEXTING TONE?",
        "labelEs": "¿Tono de texto?",
        "questionExample": "Does texting in all caps sound like shouting?"
      },
      {
        "icon": "🛡️",
        "label": "ONLINE SAFETY?",
        "labelEs": "¿Seguridad en línea?",
        "questionExample": "How do you protect your privacy and block toxic vibes?"
      }
    ],
    "roleA": {
      "label": "Digital Native",
      "labelEs": "Nativo digital",
      "action": "Explain chat slang",
      "actionEs": "Explicar jerga digital",
      "avatar": "📱"
    },
    "roleB": {
      "label": "New Online User",
      "labelEs": "Nuevo usuario",
      "action": "Learn cyber etiquette",
      "actionEs": "Aprender etiqueta web",
      "avatar": "💬"
    },
    "helpWords": [
      {
        "emoji": "💬",
        "word": "chat abbreviations",
        "translation": "abreviaturas de chat"
      },
      {
        "emoji": "📱",
        "word": "instant messaging",
        "translation": "mensajería instantánea"
      },
      {
        "emoji": "🔠",
        "word": "all caps shouting",
        "translation": "mayúsculas para gritar"
      },
      {
        "emoji": "🛡️",
        "word": "online privacy",
        "translation": "privacidad en línea"
      },
      {
        "emoji": "🚫",
        "word": "block cyberbullies",
        "translation": "bloquear acosadores"
      },
      {
        "emoji": "✨",
        "word": "positive digital vibe",
        "translation": "vibra digital positiva"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What do common texting abbreviations like TBH, RN, and FR mean in gaming chats?",
          "es": "¿Qué significan abreviaturas como TBH, RN y FR en los chats de juegos?"
        },
        {
          "en": "Why does sending messages in ALL CAPITAL LETTERS feel aggressive or rude online?",
          "es": "¿Por qué enviar mensajes en MAYÚSCULAS se siente agresivo o rudo en la red?"
        },
        {
          "en": "What digital etiquette should teenagers follow in large school group chats?",
          "es": "¿Qué etiqueta digital deberían seguir los jóvenes en chats grupales del colegio?"
        }
      ],
      "answer": [
        {
          "en": "TBH means 'To Be Honest', RN means 'Right Now', and FR means 'For Real'.",
          "es": "TBH significa 'Para ser sincero', RN 'Justo ahora' y FR 'De verdad'."
        },
        {
          "en": "Typing in all caps represents shouting loudly, which creates unnecessary hostility.",
          "es": "Escribir en mayúsculas representa gritar, lo que crea hostilidad innecesaria."
        },
        {
          "en": "Always ask permission before sharing photos and never forward private voice messages.",
          "es": "Siempre pide permiso antes de compartir fotos y nunca reenvíes audios privados."
        }
      ]
    }
  },
  "c-teens-basic-4-5": {
    "topic": "Predict Groundbreaking Tech in 2040 🔮",
    "topicEs": "Predice tecnología revolucionaria en 2040",
    "cues": [
      {
        "icon": "🔮",
        "label": "FLYING CARS & AI?",
        "labelEs": "¿Autos voladores e IA?",
        "questionExample": "Will flying electric taxis be common in every major city?"
      },
      {
        "icon": "🤖",
        "label": "ROBOT ASSISTANTS?",
        "labelEs": "¿Robots asistentes?",
        "questionExample": "If robots do all chores, what will humans do all day?"
      },
      {
        "icon": "🧬",
        "label": "HOLOGRAPHIC CALLS?",
        "labelEs": "¿Llamadas holográficas?",
        "questionExample": "Will people attend holographic schools from home?"
      }
    ],
    "roleA": {
      "label": "Tech Futurist",
      "labelEs": "Futurista",
      "action": "Make future predictions",
      "actionEs": "Hacer predicciones",
      "avatar": "🔮"
    },
    "roleB": {
      "label": "Skeptic",
      "labelEs": "Escéptico",
      "action": "Question feasibility",
      "actionEs": "Cuestionar viabilidad",
      "avatar": "🤖"
    },
    "helpWords": [
      {
        "emoji": "🔮",
        "word": "future predictions",
        "translation": "predicciones futuras"
      },
      {
        "emoji": "🚗",
        "word": "flying electric cars",
        "translation": "autos voladores eléctricos"
      },
      {
        "emoji": "🤖",
        "word": "humanoid robots",
        "translation": "robots humanoides"
      },
      {
        "emoji": "🌐",
        "word": "hologram meetings",
        "translation": "reuniones en holograma"
      },
      {
        "emoji": "🧠",
        "word": "neural interfaces",
        "translation": "interfaces neuronales"
      },
      {
        "emoji": "🚀",
        "word": "smart mega-cities",
        "translation": "megaciudades inteligentes"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What revolutionary technologies will become everyday reality for students by the year 2040?",
          "es": "¿Qué tecnologías revolucionarias serán cotidianas para los alumnos en 2040?"
        },
        {
          "en": "Do you predict that autonomous flying electric vehicles will replace traditional city buses?",
          "es": "¿Predices que los vehículos voladores autónomos reemplazarán los autobuses?"
        },
        {
          "en": "Will humanoid robotic assistants take over household cleaning, cooking, and maintenance?",
          "es": "¿Los robots asistentes humanoides se encargarán del aseo, cocina y mantenimiento?"
        }
      ],
      "answer": [
        {
          "en": "By 2040, high-resolution holographic classrooms will allow students to attend lessons globally.",
          "es": "Para 2040, salones holográficos permitirán a los alumnos asistir a clases globales."
        },
        {
          "en": "Autonomous sky-taxis will navigate via artificial intelligence grids above major cities.",
          "es": "Los aerotaxis autónomos navegarán mediante redes de IA sobre las grandes ciudades."
        },
        {
          "en": "Humanoid robots will handle tedious chores, giving people more free time for creative arts.",
          "es": "Los robots humanoides harán las tareas tediosas, dejando más tiempo para el arte."
        }
      ]
    }
  },
  "c-teens-basic-4-6": {
    "topic": "Compare Top Gaming Consoles & Gadgets ⚡",
    "topicEs": "Compara consolas de juego y tecnología",
    "cues": [
      {
        "icon": "🎮",
        "label": "WHICH IS BETTER?",
        "labelEs": "¿Cuál es mejor?",
        "questionExample": "Is Console A faster and more powerful than Console B?"
      },
      {
        "icon": "⚡",
        "label": "GRAPHICS & FPS?",
        "labelEs": "¿Gráficos y FPS?",
        "questionExample": "Which device has the crispiest 4K resolution and 120 FPS?"
      },
      {
        "icon": "💰",
        "label": "BEST VALUE?",
        "labelEs": "¿Mejor valor?",
        "questionExample": "Which one offers the greatest library of exclusive games?"
      }
    ],
    "roleA": {
      "label": "Console Champion A",
      "labelEs": "Fanático A",
      "action": "Defend system speed",
      "actionEs": "Defender consola",
      "avatar": "🎮"
    },
    "roleB": {
      "label": "Console Champion B",
      "labelEs": "Fanático B",
      "action": "Compare exclusives & price",
      "actionEs": "Comparar catálogo",
      "avatar": "🕹️"
    },
    "helpWords": [
      {
        "emoji": "🎮",
        "word": "gaming console",
        "translation": "consola de videojuegos"
      },
      {
        "emoji": "⚡",
        "word": "faster processor",
        "translation": "procesador más rápido"
      },
      {
        "emoji": "🖼️",
        "word": "4K resolution",
        "translation": "resolución 4K"
      },
      {
        "emoji": "🕹️",
        "word": "exclusive game titles",
        "translation": "juegos exclusivos"
      },
      {
        "emoji": "💰",
        "word": "more affordable",
        "translation": "más asequible"
      },
      {
        "emoji": "🏆",
        "word": "superior performance",
        "translation": "rendimiento superior"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Which modern gaming platform delivers higher frame rates and superior graphic fidelity?",
          "es": "¿Qué plataforma ofrece más cuadros por segundo y mejores gráficos?"
        },
        {
          "en": "Does Console A offer better subscription game pass value than its competitors?",
          "es": "¿La Consola A ofrece mejor relación valor-precio en su pase de juegos?"
        },
        {
          "en": "Which console ecosystem has the most comfortable controller and fastest load times?",
          "es": "¿Qué ecosistema tiene el control más cómodo y tiempos de carga más rápidos?"
        }
      ],
      "answer": [
        {
          "en": "Console A features a customized ultra-fast SSD that eliminates loading screens entirely.",
          "es": "La Consola A cuenta con un SSD ultra rápido que elimina pantallas de carga."
        },
        {
          "en": "However, Console B offers backward compatibility with thousands of classic nostalgic games.",
          "es": "Sin embargo, la Consola B ofrece retrocompatibilidad con miles de juegos clásicos."
        },
        {
          "en": "In terms of overall value, both systems provide outstanding 4K HDR gaming experiences.",
          "es": "En términos de valor general, ambos sistemas ofrecen experiencias 4K HDR destacadas."
        }
      ]
    }
  },
  "c-teens-basic-4-7": {
    "topic": "Fix Logistics at a Teen Music Festival 🔧",
    "topicEs": "Soluciona la logística en un festival de música",
    "cues": [
      {
        "icon": "🎪",
        "label": "TOO & ENOUGH ISSUES?",
        "labelEs": "¿Problemas de exceso/escasez?",
        "questionExample": "The speakers aren't loud enough and the line is too long!"
      },
      {
        "icon": "🔊",
        "label": "SOUND & STAGE?",
        "labelEs": "¿Sonido y tarima?",
        "questionExample": "Is the stage big enough for all dancers and guitarists?"
      },
      {
        "icon": "🥤",
        "label": "SUPPLIES & WATER?",
        "labelEs": "¿Agua y suministros?",
        "questionExample": "Do we have enough cold drinks and shade for the crowd?"
      }
    ],
    "roleA": {
      "label": "Festival Producer",
      "labelEs": "Productor",
      "action": "Identify shortage issues",
      "actionEs": "Identificar fallas",
      "avatar": "🎪"
    },
    "roleB": {
      "label": "Stage Manager",
      "labelEs": "Jefe de tarima",
      "action": "Apply instant solutions",
      "actionEs": "Aplicar soluciones",
      "avatar": "🔧"
    },
    "helpWords": [
      {
        "emoji": "🎪",
        "word": "music festival",
        "translation": "festival de música"
      },
      {
        "emoji": "🔊",
        "word": "not loud enough",
        "translation": "no lo bastante alto"
      },
      {
        "emoji": "⏳",
        "word": "too crowded & long",
        "translation": "demasiado lleno y largo"
      },
      {
        "emoji": "🥤",
        "word": "enough cold water",
        "translation": "suficiente agua fría"
      },
      {
        "emoji": "💡",
        "word": "bright enough lights",
        "translation": "luces bastante brillantes"
      },
      {
        "emoji": "🔧",
        "word": "fix sound system",
        "translation": "arreglar sonido"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "The main entrance is too crowded and security checks are moving too slowly!",
          "es": "¡La entrada principal está demasiado llena y la seguridad avanza muy lento!"
        },
        {
          "en": "Are the stage sound amplifiers powerful enough for the fans standing at the back?",
          "es": "¿Los amplificadores de sonido son lo bastante potentes para el público de atrás?"
        },
        {
          "en": "Do we have enough free hydration stations and medical volunteers on site?",
          "es": "¿Tenemos suficientes puntos de hidratación gratuitos y médicos en el lugar?"
        }
      ],
      "answer": [
        {
          "en": "We must open three additional express gates immediately to clear the entrance bottleneck.",
          "es": "Debemos abrir tres puertas exprés adicionales de inmediato para despejar el acceso."
        },
        {
          "en": "The audio engineers are calibrating auxiliary delay towers so sound reaches everyone clearly.",
          "es": "Los ingenieros de audio están calibrando torres auxiliares para que el sonido llegue claro."
        },
        {
          "en": "We have deployed ten mobile water carts to ensure everyone stays hydrated and safe.",
          "es": "Hemos desplegado diez carritos de agua móviles para mantener a todos hidratados y seguros."
        }
      ]
    }
  },
  "c-teens-basic-4-8": {
    "topic": "Create an Action Plan for Exam Prep 📝",
    "topicEs": "Crea un plan de acción para preparar exámenes",
    "cues": [
      {
        "icon": "📝",
        "label": "WHAT SHOULD YOU DO?",
        "labelEs": "¿Qué deberías hacer?",
        "questionExample": "You should review summaries 30 minutes every evening."
      },
      {
        "icon": "🚫",
        "label": "WHAT SHOULDN'T YOU DO?",
        "labelEs": "¿Qué no deberías hacer?",
        "questionExample": "You shouldn't stay up all night cramming before the test!"
      },
      {
        "icon": "🍎",
        "label": "HEALTHY BRAIN?",
        "labelEs": "¿Cerebro sano?",
        "questionExample": "You ought to eat brain food and drink plenty of water."
      }
    ],
    "roleA": {
      "label": "Study Coach",
      "labelEs": "Tutor",
      "action": "Advise should / shouldn't",
      "actionEs": "Aconsejar qué hacer",
      "avatar": "📝"
    },
    "roleB": {
      "label": "Student Preparing",
      "labelEs": "Estudiante",
      "action": "Build study routine",
      "actionEs": "Crear rutina de estudio",
      "avatar": "📚"
    },
    "helpWords": [
      {
        "emoji": "📝",
        "word": "exam preparation",
        "translation": "preparación para exámenes"
      },
      {
        "emoji": "💡",
        "word": "you should review",
        "translation": "deberías repasar"
      },
      {
        "emoji": "🚫",
        "word": "you shouldn't cram",
        "translation": "no deberías estudiar a última hora"
      },
      {
        "emoji": "⏰",
        "word": "pomodoro technique",
        "translation": "técnica pomodoro"
      },
      {
        "emoji": "🧠",
        "word": "healthy brain focus",
        "translation": "enfoque cerebral saludable"
      },
      {
        "emoji": "🏆",
        "word": "score top grades",
        "translation": "sacar mejores notas"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What daily revision habits should teenagers establish two weeks before final exams?",
          "es": "¿Qué hábitos diarios de repaso deberían fijar los jóvenes dos semanas antes de exámenes?"
        },
        {
          "en": "Why shouldn't students rely on energy drinks and last-minute cramming sessions?",
          "es": "¿Por qué los alumnos no deberían depender de bebidas energéticas ni estudiar al final?"
        },
        {
          "en": "What healthy routines ought students to adopt to keep memory sharp and anxiety low?",
          "es": "¿Qué rutinas saludables deberían adoptar para tener memoria ágil y poca ansiedad?"
        }
      ],
      "answer": [
        {
          "en": "You should summarize lecture notes into visual mind maps and test yourself with flashcards.",
          "es": "Deberías resumir apuntes en mapas mentales y evaluarte con tarjetas de memoria."
        },
        {
          "en": "You shouldn't study in bed with your phone on, as notifications destroy deep concentration.",
          "es": "No deberías estudiar en la cama con el celular, pues las alertas destruyen la concentración."
        },
        {
          "en": "You ought to sleep eight solid hours and eat protein-rich breakfasts before testing.",
          "es": "Deberías dormir ocho horas seguidas y desayunar proteínas antes del examen."
        }
      ]
    }
  },
  "c-teens-basic-4-9": {
    "topic": "Draft a Polite Email to a Teacher ✉️",
    "topicEs": "Redacta un correo formal a un profesor",
    "cues": [
      {
        "icon": "✉️",
        "label": "FORMAL GREETING?",
        "labelEs": "¿Saludo formal?",
        "questionExample": "Dear Professor Miller vs Hey Teacher!"
      },
      {
        "icon": "📋",
        "label": "EXPLAIN REQUEST?",
        "labelEs": "¿Explicar petición?",
        "questionExample": "I am writing to politely inquire about the assignment deadline."
      },
      {
        "icon": "🤝",
        "label": "FORMAL SIGN-OFF?",
        "labelEs": "¿Despedida formal?",
        "questionExample": "Best regards, Sincerely, Thank you for your time."
      }
    ],
    "roleA": {
      "label": "Email Drafter",
      "labelEs": "Redactor",
      "action": "Formulate formal email",
      "actionEs": "Redactar correo formal",
      "avatar": "✉️"
    },
    "roleB": {
      "label": "Peer Editor",
      "labelEs": "Revisor",
      "action": "Review tone & grammar",
      "actionEs": "Revisar tono y gramática",
      "avatar": "📝"
    },
    "helpWords": [
      {
        "emoji": "✉️",
        "word": "formal inquiry",
        "translation": "solicitud formal"
      },
      {
        "emoji": "🧑‍🏫",
        "word": "Dear Professor",
        "translation": "Estimado profesor"
      },
      {
        "emoji": "📋",
        "word": "project deadline",
        "translation": "plazo del proyecto"
      },
      {
        "emoji": "🤝",
        "word": "sincerely yours",
        "translation": "atentamente"
      },
      {
        "emoji": "✍️",
        "word": "polite wording",
        "translation": "redacción cortés"
      },
      {
        "emoji": "📧",
        "word": "professional subject",
        "translation": "asunto profesional"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How should a student formulate the subject line and salutation for a teacher email?",
          "es": "¿Cómo debe redactar un alumno el asunto y saludo para un correo a un profesor?"
        },
        {
          "en": "How do you politely explain that you were absent due to illness and need makeup work?",
          "es": "¿Cómo explicas con cortesía que faltaste por enfermedad y necesitas ponerte al día?"
        },
        {
          "en": "What is the most professional closing statement to end an academic email?",
          "es": "¿Cuál es la despedida más profesional para cerrar un correo académico?"
        }
      ],
      "answer": [
        {
          "en": "Subject: Inquiry Regarding Biology Assignment Deadline - Alex Vance (Period 3).",
          "es": "Asunto: Consulta sobre el plazo del proyecto de Biología - Alex Vance (Periodo 3)."
        },
        {
          "en": "Dear Ms. Anderson, I am writing to politely request the missed worksheet from yesterday's lab.",
          "es": "Estimada Sra. Anderson: Le escribo para solicitar cortésmente la guía del laboratorio de ayer."
        },
        {
          "en": "Thank you very much for your time and guidance. Sincerely, Alex Vance.",
          "es": "Muchas gracias por su tiempo y orientación. Atentamente, Alex Vance."
        }
      ]
    }
  },
  "c-teens-basic-4-10": {
    "topic": "Handle a Customer Request with Empathy 🤝",
    "topicEs": "Atiende una petición de cliente con empatía",
    "cues": [
      {
        "icon": "🛒",
        "label": "CUSTOMER ISSUE?",
        "labelEs": "¿Problema del cliente?",
        "questionExample": "I ordered size 8 sneakers but received size 10 by mistake."
      },
      {
        "icon": "🤝",
        "label": "POLITE APOLOGY?",
        "labelEs": "¿Disculpa educada?",
        "questionExample": "I sincerely apologize for the inconvenience, let me fix this!"
      },
      {
        "icon": "📦",
        "label": "SWIFT RESOLUTION?",
        "labelEs": "¿Solución rápida?",
        "questionExample": "We will ship the correct pair express with a free return label."
      }
    ],
    "roleA": {
      "label": "Customer",
      "labelEs": "Cliente",
      "action": "Explain product mix-up",
      "actionEs": "Explicar error de entrega",
      "avatar": "📦"
    },
    "roleB": {
      "label": "Support Agent",
      "labelEs": "Agente",
      "action": "Resolve with five-star service",
      "actionEs": "Resolver con excelencia",
      "avatar": "🤝"
    },
    "helpWords": [
      {
        "emoji": "🛒",
        "word": "customer service",
        "translation": "atención al cliente"
      },
      {
        "emoji": "📦",
        "word": "wrong size delivered",
        "translation": "talla equivocada recibida"
      },
      {
        "emoji": "🤝",
        "word": "sincere apology",
        "translation": "sincera disculpa"
      },
      {
        "emoji": "⚡",
        "word": "express replacement",
        "translation": "reemplazo exprés"
      },
      {
        "emoji": "🏷️",
        "word": "free return label",
        "translation": "guía de devolución gratis"
      },
      {
        "emoji": "⭐",
        "word": "satisfied customer",
        "translation": "cliente satisfecho"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Hello, I ordered a limited-edition blue hoodie last week, but I received a green shirt instead.",
          "es": "Hola, pedí una sudadera azul de edición limitada, pero recibí una camiseta verde."
        },
        {
          "en": "How does the support representative acknowledge the error with genuine empathy?",
          "es": "¿Cómo reconoce el representante el error con empatía genuina?"
        },
        {
          "en": "What instant compensation or express shipping solution resolves the customer's problem?",
          "es": "¿Qué compensación o envío exprés soluciona el problema del cliente?"
        }
      ],
      "answer": [
        {
          "en": "I sincerely apologize for this shipping mix-up, and I understand how disappointing this is!",
          "es": "¡Le pido una sincera disculpa por este error y entiendo lo decepcionante que es!"
        },
        {
          "en": "I have immediately dispatched the correct limited-edition blue hoodie via priority overnight mail.",
          "es": "He despachado de inmediato la sudadera azul correcta mediante envío prioritario de un día."
        },
        {
          "en": "Please keep the extra shirt as a complimentary gift from our store with our compliments!",
          "es": "¡Por favor conserve la camiseta extra como un regalo de cortesía de nuestra tienda!"
        }
      ]
    }
  },
  "c-teens-inter-1": {
    "topic": "Share Thrilling Life Experiences 🌍",
    "topicEs": "Comparte experiencias de vida emocionantes",
    "cues": [
      {
        "icon": "✈️",
        "label": "HAVE YOU EVER?",
        "labelEs": "¿Alguna vez has...?",
        "questionExample": "Have you ever traveled abroad, performed live, or won a contest?"
      },
      {
        "icon": "⏳",
        "label": "HOW MANY TIMES?",
        "labelEs": "¿Cuántas veces?",
        "questionExample": "I have played in three tournaments so far this year."
      },
      {
        "icon": "🔥",
        "label": "THE MOST EPIC?",
        "labelEs": "¿Lo más épico?",
        "questionExample": "What was the most unforgettable moment you've experienced?"
      }
    ],
    "roleA": {
      "label": "Talk Show Host",
      "labelEs": "Presentador",
      "action": "Interview about adventures",
      "actionEs": "Entrevistar experiencias",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Teen Traveler",
      "labelEs": "Aventurero",
      "action": "Share life highlights",
      "actionEs": "Compartir logros",
      "avatar": "🌍"
    },
    "helpWords": [
      {
        "emoji": "✈️",
        "word": "travel abroad",
        "translation": "viajar al extranjero"
      },
      {
        "emoji": "🎸",
        "word": "perform live",
        "translation": "tocar en vivo"
      },
      {
        "emoji": "🏆",
        "word": "win tournament",
        "translation": "ganar torneo"
      },
      {
        "emoji": "🌊",
        "word": "scuba diving",
        "translation": "buceo"
      },
      {
        "emoji": "🧗",
        "word": "climb mountain",
        "translation": "escalar montaña"
      },
      {
        "emoji": "✨",
        "word": "unforgettable memory",
        "translation": "recuerdo inolvidable"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Have you ever performed music in front of a live audience of over a thousand people?",
          "es": "¿Alguna vez has tocado música frente a más de mil personas en vivo?"
        },
        {
          "en": "How many international cities have you visited so far in your travels?",
          "es": "¿Cuántas ciudades internacionales has visitado hasta ahora en tus viajes?"
        },
        {
          "en": "What is the most daring adventure you have ever experienced in your entire life?",
          "es": "¿Cuál es la aventura más audaz que has vivido en toda tu vida?"
        }
      ],
      "answer": [
        {
          "en": "I have played lead guitar on stage twice, and the adrenaline was unreal!",
          "es": "¡He tocado la guitarra líder en tarima dos veces y la adrenalina fue increíble!"
        },
        {
          "en": "I have visited five countries so far, including Japan, Canada, and Spain.",
          "es": "He visitado cinco países hasta ahora, incluidos Japón, Canadá y España."
        },
        {
          "en": "I have gone whitewater rafting down turbulent mountain rapids with my family!",
          "es": "¡He hecho rafting en rápidos turbulentos de montaña con mi familia!"
        }
      ]
    }
  },
  "c-teens-inter-2": {
    "topic": "Master Daily Phrasal Verbs with Friends 🗣️",
    "topicEs": "Domina verbos frasales cotidianos con amigos",
    "cues": [
      {
        "icon": "⏰",
        "label": "WAKE UP / CATCH UP?",
        "labelEs": "¿Despertar / ponerse al día?",
        "questionExample": "I woke up early to catch up on assignments before school."
      },
      {
        "icon": "🚪",
        "label": "HANG OUT / DROP BY?",
        "labelEs": "¿Salir / pasar a visitar?",
        "questionExample": "Do you want to hang out at the skatepark or drop by my house?"
      },
      {
        "icon": "💪",
        "label": "GIVE UP / WORK OUT?",
        "labelEs": "¿Rendirse / entrenar?",
        "questionExample": "Never give up on your goals when you work out hard!"
      }
    ],
    "roleA": {
      "label": "Friend A",
      "labelEs": "Amigo A",
      "action": "Use phrasal verbs naturally",
      "actionEs": "Usar verbos compuestos",
      "avatar": "🙋‍♂️"
    },
    "roleB": {
      "label": "Friend B",
      "labelEs": "Amigo B",
      "action": "Respond with idioms",
      "actionEs": "Responder con naturalidad",
      "avatar": "🤙"
    },
    "helpWords": [
      {
        "emoji": "⏰",
        "word": "wake up early",
        "translation": "despertar temprano"
      },
      {
        "emoji": "🤝",
        "word": "catch up with friends",
        "translation": "ponerse al día con amigos"
      },
      {
        "emoji": "🛹",
        "word": "hang out at park",
        "translation": "pasar el rato en el parque"
      },
      {
        "emoji": "🏃",
        "word": "work out at gym",
        "translation": "entrenar en el gimnasio"
      },
      {
        "emoji": "💪",
        "word": "never give up",
        "translation": "nunca rendirse"
      },
      {
        "emoji": "🎉",
        "word": "look forward to",
        "translation": "esperar con emoción"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What time do you usually wake up to get ready and catch the school bus?",
          "es": "¿A qué hora te despiertas para alistarte y tomar el autobús escolar?"
        },
        {
          "en": "Do you want to hang out at the cafe after class and catch up on weekend news?",
          "es": "¿Quieres pasar el rato en el café después de clase y ponernos al día?"
        },
        {
          "en": "How do you motivate yourself to keep going when workouts get exhausting?",
          "es": "¿Cómo te motivas para seguir adelante cuando el entrenamiento se vuelve agotador?"
        }
      ],
      "answer": [
        {
          "en": "I wake up at 6:30 AM, wash up, and head out the door by 7:15 AM.",
          "es": "Me despierto a las 6:30 AM, me alisto y salgo por la puerta a las 7:15 AM."
        },
        {
          "en": "Let's definitely hang out! I have so many hilarious stories to tell you.",
          "es": "¡Definitivamente salgamos! Tengo tantas historias graciosas que contarte."
        },
        {
          "en": "I remind myself of my dream tournament and refuse to give up!",
          "es": "¡Me recuerdo a mí mismo mi torneo soñado y me niego a rendirme!"
        }
      ]
    }
  },
  "c-teens-inter-3": {
    "topic": "Deduce Clues at a Crime Scene 🕵️",
    "topicEs": "Deduce pistas en la escena del crimen",
    "cues": [
      {
        "icon": "🔍",
        "label": "MUST BE?",
        "labelEs": "¿Debe ser...?",
        "questionExample": "The lights are still on; someone must be inside the room!"
      },
      {
        "icon": "❓",
        "label": "MIGHT BE?",
        "labelEs": "¿Podría ser...?",
        "questionExample": "The muddy footprints might belong to the gardener or a runner."
      },
      {
        "icon": "🚫",
        "label": "CAN'T BE?",
        "labelEs": "¿No puede ser...?",
        "questionExample": "It can't be Lucas because he was live streaming at home."
      }
    ],
    "roleA": {
      "label": "Lead Detective",
      "labelEs": "Detective jefe",
      "action": "Analyze logical clues",
      "actionEs": "Analizar pistas",
      "avatar": "🕵️‍♂️"
    },
    "roleB": {
      "label": "Investigator",
      "labelEs": "Investigador",
      "action": "State logical deductions",
      "actionEs": "Hacer deducciones",
      "avatar": "🔍"
    },
    "helpWords": [
      {
        "emoji": "🔍",
        "word": "logical clue",
        "translation": "pista lógica"
      },
      {
        "emoji": "🔦",
        "word": "it must be true",
        "translation": "debe ser verdad"
      },
      {
        "emoji": "❓",
        "word": "it might happen",
        "translation": "podría pasar"
      },
      {
        "emoji": "🚫",
        "word": "it can't be possible",
        "translation": "no puede ser posible"
      },
      {
        "emoji": "👣",
        "word": "muddy footprints",
        "translation": "huellas de barro"
      },
      {
        "emoji": "🔒",
        "word": "locked window",
        "translation": "ventana cerrada"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Who could have unlocked the school laboratory safe after hours without triggering alarms?",
          "es": "¿Quién pudo haber abierto la caja del laboratorio escolar sin activar alarmas?"
        },
        {
          "en": "Could the intruder have climbed through the second-floor ventilation window?",
          "es": "¿El intruso pudo haber trepado por la ventana de ventilación del segundo piso?"
        },
        {
          "en": "Why can't the school custodian be a suspect in this investigation?",
          "es": "¿Por qué el conserje del colegio no puede ser sospechoso en esta investigación?"
        }
      ],
      "answer": [
        {
          "en": "It must be someone with authorized security access, such as a lab assistant.",
          "es": "Debe ser alguien con acceso de seguridad autorizado, como un asistente."
        },
        {
          "en": "The window is far too narrow, so it can't be how they carried out the heavy gear.",
          "es": "La ventana es demasiado estrecha, así que no pudieron sacar el equipo por ahí."
        },
        {
          "en": "It can't be the custodian because security cameras confirm he clocked out at 5 PM.",
          "es": "No puede ser el conserje porque las cámaras confirman que salió a las 5 PM."
        }
      ]
    }
  },
  "c-teens-inter-4": {
    "topic": "If I Ruled the World: Teen Presidency 👑",
    "topicEs": "Si gobernara el mundo: presidencia juvenil",
    "cues": [
      {
        "icon": "👑",
        "label": "IF I WERE PRESIDENT?",
        "labelEs": "¿Si fuera presidente...?",
        "questionExample": "If I ruled the world, I would provide free Wi-Fi for all students."
      },
      {
        "icon": "🌳",
        "label": "GLOBAL POLICIES?",
        "labelEs": "¿Políticas globales?",
        "questionExample": "If countries banned single-use plastics, our oceans would heal."
      },
      {
        "icon": "🚀",
        "label": "YOUTH EMPOWERMENT?",
        "labelEs": "¿Empoderamiento juvenil?",
        "questionExample": "If teens had a vote, schools would teach finance and coding."
      }
    ],
    "roleA": {
      "label": "Presidential Candidate",
      "labelEs": "Candidato",
      "action": "Pitch hypothetical reforms",
      "actionEs": "Proponer reformas",
      "avatar": "👑"
    },
    "roleB": {
      "label": "Journalist",
      "labelEs": "Periodista",
      "action": "Ask what-if questions",
      "actionEs": "Preguntar hipótesis",
      "avatar": "🎙️"
    },
    "helpWords": [
      {
        "emoji": "👑",
        "word": "if I were president",
        "translation": "si yo fuera presidente"
      },
      {
        "emoji": "💡",
        "word": "I would transform",
        "translation": "yo transformaría"
      },
      {
        "emoji": "🌳",
        "word": "protect rainforests",
        "translation": "proteger selvas"
      },
      {
        "emoji": "🎓",
        "word": "free education",
        "translation": "educación gratuita"
      },
      {
        "emoji": "💼",
        "word": "youth innovation funds",
        "translation": "fondos de innovación juvenil"
      },
      {
        "emoji": "🌍",
        "word": "global peace treaty",
        "translation": "tratado de paz mundial"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "If you were elected president tomorrow, what would be your very first decree?",
          "es": "¿Si fueras elegido presidente mañana, cuál sería tu primer decreto?"
        },
        {
          "en": "If you could eliminate one global crisis instantly, which one would you choose?",
          "es": "¿Si pudieras eliminar una crisis global al instante, cuál elegirías?"
        },
        {
          "en": "How would school curricula change if teenagers designed all subjects and exams?",
          "es": "¿Cómo cambiarían las materias si los jóvenes diseñaran los programas y exámenes?"
        }
      ],
      "answer": [
        {
          "en": "If I were president, I would allocate 20% of the national budget to clean solar energy.",
          "es": "Si fuera presidente, asignaría el 20% del presupuesto a energía solar limpia."
        },
        {
          "en": "If I had the power, I would guarantee universal access to high-speed internet and books.",
          "es": "Si tuviera el poder, garantizaría acceso universal a internet y libros."
        },
        {
          "en": "If teens designed schools, we would emphasize financial literacy, AI, and creative arts.",
          "es": "Si los jóvenes diseñaran los colegios, enfatizaríamos finanzas, IA y artes."
        }
      ]
    }
  },
  "c-teens-inter-5": {
    "topic": "Debate Contemporary Controversies Respectfully ⚖️",
    "topicEs": "Debate controversias contemporáneas con respeto",
    "cues": [
      {
        "icon": "⚖️",
        "label": "STANCE & ARGUMENT?",
        "labelEs": "¿Postura y argumento?",
        "questionExample": "I see your point, however evidence shows a different trend."
      },
      {
        "icon": "🤝",
        "label": "AGREE TO DISAGREE?",
        "labelEs": "¿Respetar discrepancia?",
        "questionExample": "While I respect that perspective, we must consider the environmental impact."
      },
      {
        "icon": "💡",
        "label": "FIND COMMON GROUND?",
        "labelEs": "¿Puntos en común?",
        "questionExample": "We both agree that student well-being is the top priority."
      }
    ],
    "roleA": {
      "label": "Debater Pro",
      "labelEs": "Debatiente A",
      "action": "Present structured points",
      "actionEs": "Presentar argumentos",
      "avatar": "⚖️"
    },
    "roleB": {
      "label": "Debater Con",
      "labelEs": "Debatiente B",
      "action": "Counterbalance diplomatically",
      "actionEs": "Contraargumentar con diplomacia",
      "avatar": "🤝"
    },
    "helpWords": [
      {
        "emoji": "⚖️",
        "word": "I see your point",
        "translation": "entiendo tu punto"
      },
      {
        "emoji": "💡",
        "word": "on the other hand",
        "translation": "por otro lado"
      },
      {
        "emoji": "🤝",
        "word": "common ground",
        "translation": "punto en común"
      },
      {
        "emoji": "📊",
        "word": "compelling statistics",
        "translation": "estadísticas convincentes"
      },
      {
        "emoji": "🧠",
        "word": "critical thinking",
        "translation": "pensamiento crítico"
      },
      {
        "emoji": "🗣️",
        "word": "respectful discourse",
        "translation": "discurso respetuoso"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Should standardized testing be completely replaced by continuous project evaluations?",
          "es": "¿Deberían los exámenes estandarizados reemplazarse por proyectos continuos?"
        },
        {
          "en": "How do you respond to the argument that competitive grading motivates students to excel?",
          "es": "¿Cómo respondes al argumento de que las notas competitivas motivan a destacar?"
        },
        {
          "en": "Can we agree on a hybrid evaluation model that combines both exams and creative portfolios?",
          "es": "¿Podemos acordar un modelo híbrido que combine exámenes y portafolios?"
        }
      ],
      "answer": [
        {
          "en": "While standardized tests measure factual recall, project assessments foster authentic problem-solving.",
          "es": "Aunque los exámenes miden memoria, los proyectos fomentan solución de problemas."
        },
        {
          "en": "I appreciate that perspective, but excessive test anxiety often harms mental well-being.",
          "es": "Aprecio esa perspectiva, pero la ansiedad excesiva perjudica la salud mental."
        },
        {
          "en": "A hybrid approach that values continuous effort and portfolio demonstrations is ideal.",
          "es": "Un enfoque híbrido que valore el esfuerzo continuo y portafolios es ideal."
        }
      ]
    }
  },
  "c-teens-inter-6": {
    "topic": "Host an Interactive Media & Broadcast Show 🎬",
    "topicEs": "Conduce un programa de radio y medios interactivo",
    "cues": [
      {
        "icon": "🎬",
        "label": "SHOW INTRO?",
        "labelEs": "¿Introducción del show?",
        "questionExample": "Welcome to Teen Pulse! Tonight we dive into AI in youth cinema."
      },
      {
        "icon": "📞",
        "label": "CALLER INQUIRY?",
        "labelEs": "¿Llamada al aire?",
        "questionExample": "We have a caller on line 2 with a fascinating question!"
      },
      {
        "icon": "🎙️",
        "label": "CLOSING SEGMENT?",
        "labelEs": "¿Cierre del programa?",
        "questionExample": "Join us tomorrow same time, and don't forget to stream our podcast!"
      }
    ],
    "roleA": {
      "label": "Broadcast Anchor",
      "labelEs": "Presentador de medios",
      "action": "Lead live segment",
      "actionEs": "Conducir transmisión",
      "avatar": "🎬"
    },
    "roleB": {
      "label": "Co-Host",
      "labelEs": "Copresentador",
      "action": "Engage audience & calls",
      "actionEs": "Interactuar con la audiencia",
      "avatar": "🎙️"
    },
    "helpWords": [
      {
        "emoji": "🎬",
        "word": "live broadcast show",
        "translation": "programa en vivo"
      },
      {
        "emoji": "🎙️",
        "word": "on-air interview",
        "translation": "entrevista al aire"
      },
      {
        "emoji": "📞",
        "word": "caller on line two",
        "translation": "llamada en la línea dos"
      },
      {
        "emoji": "📻",
        "word": "streaming worldwide",
        "translation": "transmitiendo al mundo"
      },
      {
        "emoji": "🎧",
        "word": "audio production",
        "translation": "producción de audio"
      },
      {
        "emoji": "🌟",
        "word": "stay tuned for more",
        "translation": "sigan en sintonía"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Welcome back to Teen Pulse! What is tonight's headline story for our global listeners?",
          "es": "¡Bienvenidos a Teen Pulse! ¿Cuál es la noticia principal de esta noche?"
        },
        {
          "en": "Let's bring in our live caller from London: what is your question for our guest expert?",
          "es": "Demos la bienvenida al oyente de Londres: ¿cuál es tu pregunta para el experto?"
        },
        {
          "en": "What teaser can we share about tomorrow night's exclusive gaming soundtrack breakdown?",
          "es": "¿Qué adelanto compartimos sobre el especial de bandas sonoras de videojuegos?"
        }
      ],
      "answer": [
        {
          "en": "Tonight we investigate how generative artificial intelligence is reshaping filmmaking for indie creators.",
          "es": "Esta noche investigamos cómo la IA generativa revoluciona el cine independiente."
        },
        {
          "en": "Our caller wants to know how teenagers can protect their original artistic intellectual property.",
          "es": "Nuestro oyente pregunta cómo los jóvenes pueden proteger su propiedad intelectual."
        },
        {
          "en": "Tomorrow we interview the Grammy-nominated composer behind the year's top RPG video game!",
          "es": "¡Mañana entrevistamos al compositor nominado al Grammy del mejor RPG del año!"
        }
      ]
    }
  },
  "c-teens-inter-7": {
    "topic": "Interview an Accomplished Student Inventor 💡",
    "topicEs": "Entrevista a un joven inventor sobresaliente",
    "cues": [
      {
        "icon": "🔬",
        "label": "WHAT HAVE YOU BEEN WORKING ON?",
        "labelEs": "¿En qué has estado trabajando?",
        "questionExample": "I have been designing a micro-plastic water filtration device for six months."
      },
      {
        "icon": "⏱️",
        "label": "HOW LONG HAVE YOU BEEN CREATING?",
        "labelEs": "¿Cuánto tiempo llevas creando?",
        "questionExample": "I have been coding algorithms since middle school."
      },
      {
        "icon": "🚀",
        "label": "RECENT BREAKTHROUGH?",
        "labelEs": "¿Último gran avance?",
        "questionExample": "We have just patented our solar bio-battery!"
      }
    ],
    "roleA": {
      "label": "Journalist",
      "labelEs": "Periodista científico",
      "action": "Interview inventor",
      "actionEs": "Entrevistar inventor",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Teen Inventor",
      "labelEs": "Joven inventor",
      "action": "Showcase working prototype",
      "actionEs": "Presentar prototipo",
      "avatar": "💡"
    },
    "helpWords": [
      {
        "emoji": "🔬",
        "word": "innovative prototype",
        "translation": "prototipo innovador"
      },
      {
        "emoji": "⚙️",
        "word": "have been testing",
        "translation": "hemos estado probando"
      },
      {
        "emoji": "🧪",
        "word": "scientific breakthrough",
        "translation": "avance científico"
      },
      {
        "emoji": "☀️",
        "word": "solar bio-battery",
        "translation": "biobatería solar"
      },
      {
        "emoji": "📈",
        "word": "patent registered",
        "translation": "patente registrada"
      },
      {
        "emoji": "🏆",
        "word": "young scientist prize",
        "translation": "premio de joven científico"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How long have you been developing this solar-powered ocean cleaning filtration drone?",
          "es": "¿Cuánto tiempo has estado desarrollando este dron solar para limpiar océanos?"
        },
        {
          "en": "What major obstacles have you been trying to overcome in the engineering laboratory?",
          "es": "¿Qué obstáculos importantes has estado intentando superar en el laboratorio?"
        },
        {
          "en": "What international science awards has your research team won recently?",
          "es": "¿Qué premios internacionales de ciencia ha ganado tu equipo recientemente?"
        }
      ],
      "answer": [
        {
          "en": "We have been testing prototypes in coastal waterways for the past fourteen months.",
          "es": "Hemos estado probando prototipos en costas durante los últimos catorce meses."
        },
        {
          "en": "We have been optimizing battery longevity so the drone can operate autonomously for 48 hours.",
          "es": "Hemos estado optimizando la batería para que opere de forma autónoma 48 horas."
        },
        {
          "en": "We have just received the Grand Prize at the Global Youth Science Fair in Geneva!",
          "es": "¡Acabamos de recibir el Gran Premio en la Feria Mundial de Ciencias de Ginebra!"
        }
      ]
    }
  },
  "c-teens-inter-8": {
    "topic": "Recount an Unsolved Mystery Investigation 🔦",
    "topicEs": "Relata la investigación de un misterio sin resolver",
    "cues": [
      {
        "icon": "🔦",
        "label": "LOOK INTO / FIGURE OUT?",
        "labelEs": "¿Investigar / descifrar?",
        "questionExample": "We looked into the historical archives to figure out the code."
      },
      {
        "icon": "🏃",
        "label": "RUN INTO / GET AWAY?",
        "labelEs": "¿Toparse / escapar?",
        "questionExample": "The suspect ran into the subway tunnel and got away."
      },
      {
        "icon": "🧩",
        "label": "PIECE TOGETHER?",
        "labelEs": "¿Armar el rompecabezas?",
        "questionExample": "We pieced together the diary entries to solve the riddle."
      }
    ],
    "roleA": {
      "label": "Investigative Reporter",
      "labelEs": "Reportero",
      "action": "Narrate crime clues",
      "actionEs": "Narrar pistas",
      "avatar": "🔦"
    },
    "roleB": {
      "label": "Eyewitness",
      "labelEs": "Testigo",
      "action": "Provide crucial details",
      "actionEs": "Dar detalles cruciales",
      "avatar": "👀"
    },
    "helpWords": [
      {
        "emoji": "🔦",
        "word": "look into the case",
        "translation": "investigar el caso"
      },
      {
        "emoji": "🧩",
        "word": "figure out the truth",
        "translation": "descifrar la verdad"
      },
      {
        "emoji": "🏃",
        "word": "run into a suspect",
        "translation": "toparse con sospechoso"
      },
      {
        "emoji": "🕵️",
        "word": "track down clues",
        "translation": "rastrear pistas"
      },
      {
        "emoji": "📜",
        "word": "piece together clues",
        "translation": "unir las pistas"
      },
      {
        "emoji": "🚪",
        "word": "get away unseen",
        "translation": "escapar sin ser visto"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "When did your investigative journalism club decide to look into the forgotten underground vault?",
          "es": "¿Cuándo decidieron investigar la bóveda subterránea olvidada?"
        },
        {
          "en": "How did you figure out the hidden cipher carved inside the museum fountain?",
          "es": "¿Cómo descifraron el código secreto grabado en la fuente del museo?"
        },
        {
          "en": "Did you run into any security patrols while tracking down the old blueprints?",
          "es": "¿Se toparon con patrullas de seguridad al rastrear los planos antiguos?"
        }
      ],
      "answer": [
        {
          "en": "We looked into city records and discovered an unmapped subway tunnel beneath our school.",
          "es": "Investigamos registros de la ciudad y descubrimos un túnel bajo el colegio."
        },
        {
          "en": "We pieced together fragments of an old diary to figure out the coordinate lock.",
          "es": "Unimos fragmentos de un viejo diario para descifrar el candado de coordenadas."
        },
        {
          "en": "A security guard came by, but we managed to get away before they locked the gates!",
          "es": "¡Pasó un guardia de seguridad, pero logramos salir antes de que cerraran las rejas!"
        }
      ]
    }
  },
  "c-teens-inter-9": {
    "topic": "Analyze Historic Scientific Breakthroughs 🔭",
    "topicEs": "Analiza avances científicos históricos",
    "cues": [
      {
        "icon": "🔭",
        "label": "MUST HAVE BEEN?",
        "labelEs": "¿Debe haber sido...?",
        "questionExample": "It must have been thrilling when Galileo first observed Jupiter's moons."
      },
      {
        "icon": "❓",
        "label": "MIGHT HAVE DISCOVERED?",
        "labelEs": "¿Podría haber descubierto...?",
        "questionExample": "They might have discovered penicillin earlier if lab protocols were different."
      },
      {
        "icon": "🚫",
        "label": "COULDN'T HAVE SUCCEEDED WITHOUT?",
        "labelEs": "¿No habría sido posible sin...?",
        "questionExample": "Einstein couldn't have developed relativity without mathematical pioneers."
      }
    ],
    "roleA": {
      "label": "Historian of Science",
      "labelEs": "Historiador",
      "action": "Analyze past breakthroughs",
      "actionEs": "Analizar descubrimientos",
      "avatar": "🔭"
    },
    "roleB": {
      "label": "Physics Student",
      "labelEs": "Estudiante",
      "action": "Discuss impact on modern world",
      "actionEs": "Debatir impacto",
      "avatar": "⚛️"
    },
    "helpWords": [
      {
        "emoji": "🔭",
        "word": "astronomy telescope",
        "translation": "telescopio de astronomía"
      },
      {
        "emoji": "⚛️",
        "word": "atomic structure",
        "translation": "estructura atómica"
      },
      {
        "emoji": "💡",
        "word": "it must have been revolutionary",
        "translation": "debe haber sido revolucionario"
      },
      {
        "emoji": "🧪",
        "word": "they might have observed",
        "translation": "podrían haber observado"
      },
      {
        "emoji": "📜",
        "word": "couldn't have accomplished",
        "translation": "no habrían logrado"
      },
      {
        "emoji": "🚀",
        "word": "foundation of modern science",
        "translation": "base de la ciencia moderna"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How must historical astronomers have felt when they proved that Earth orbits the Sun?",
          "es": "¿Cómo deben haberse sentido los astrónomos al probar que la Tierra gira alrededor del Sol?"
        },
        {
          "en": "Could researchers have discovered antibiotics earlier if laboratory hygiene was prioritized?",
          "es": "¿Pudieron haber descubierto antibióticos antes si se priorizaba la higiene?"
        },
        {
          "en": "Why couldn't space missions have succeeded without the manual mathematical calculations of women at NASA?",
          "es": "¿Por qué las misiones espaciales no habrían triunfado sin las matemáticas de la NASA?"
        }
      ],
      "answer": [
        {
          "en": "It must have been terrifying yet exhilarating to challenge centuries of established dogma.",
          "es": "Debe haber sido aterrador pero emocionante desafiar siglos de dogmas establecidos."
        },
        {
          "en": "Scientists might have isolated antimicrobial molds decades earlier with organized data sharing.",
          "es": "Los científicos podrían haber aislado mohos antimicrobianos décadas antes con datos."
        },
        {
          "en": "The Apollo missions couldn't have landed on the Moon without Katherine Johnson's trajectories.",
          "es": "Las misiones Apolo no habrían llegado a la Luna sin los cálculos de Katherine Johnson."
        }
      ]
    }
  },
  "c-teens-inter-10": {
    "topic": "Simulate Climate Summit Negotiations 🌿",
    "topicEs": "Simula negociaciones de una cumbre climática",
    "cues": [
      {
        "icon": "🌿",
        "label": "IF WE DON'T ACT NOW?",
        "labelEs": "¿Si no actuamos ahora...?",
        "questionExample": "If global carbon emissions do not drop, temperatures will rise 2 degrees."
      },
      {
        "icon": "🏭",
        "label": "IF NATIONS INVESTED IN SOLAR?",
        "labelEs": "¿Si las naciones invirtieran en solar...?",
        "questionExample": "If industrialized nations funded solar grids, green jobs would surge."
      },
      {
        "icon": "⏳",
        "label": "BY THE TIME 2030 ARRIVES?",
        "labelEs": "¿Para cuando llegue 2030...?",
        "questionExample": "By the time 2030 arrives, we must transition to 80% renewable electricity."
      }
    ],
    "roleA": {
      "label": "UN Youth Delegate",
      "labelEs": "Delegado juvenil",
      "action": "Propose binding climate targets",
      "actionEs": "Proponer metas vinculantes",
      "avatar": "🌿"
    },
    "roleB": {
      "label": "Industrial Representative",
      "labelEs": "Representante",
      "action": "Negotiate economic transition",
      "actionEs": "Negociar transición",
      "avatar": "🏭"
    },
    "helpWords": [
      {
        "emoji": "🌿",
        "word": "renewable energy target",
        "translation": "meta de energía renovable"
      },
      {
        "emoji": "🏭",
        "word": "carbon tax policy",
        "translation": "impuesto al carbono"
      },
      {
        "emoji": "☀️",
        "word": "solar & wind grids",
        "translation": "redes eólicas y solares"
      },
      {
        "emoji": "📉",
        "word": "drastic emissions reduction",
        "translation": "reducción drástica de emisiones"
      },
      {
        "emoji": "🤝",
        "word": "multilateral agreement",
        "translation": "acuerdo multilateral"
      },
      {
        "emoji": "🌍",
        "word": "climate justice for youth",
        "translation": "justicia climática juvenil"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "If world leaders fail to enforce strict carbon targets today, what irreversible consequences follow?",
          "es": "¿Si los líderes mundiales no aplican metas estrictas de carbono, qué consecuencias siguen?"
        },
        {
          "en": "If developing economies receive international green technology grants, how fast can they transition?",
          "es": "¿Si las economías en desarrollo reciben fondos verdes, qué tan rápido transicionan?"
        },
        {
          "en": "What bold commitments will your delegation sign before this climate summit concludes?",
          "es": "¿Qué compromisos firmará su delegación antes de que concluya esta cumbre?"
        }
      ],
      "answer": [
        {
          "en": "If emissions continue rising at current rates, coastal cities will face severe annual flooding.",
          "es": "Si las emisiones siguen aumentando, las ciudades costeras sufrirán inundaciones graves."
        },
        {
          "en": "If we subsidize industrial solar manufacturing, clean energy will become cheaper than fossil fuels.",
          "es": "Si subsidiamos paneles solares, la energía limpia será más barata que los fósiles."
        },
        {
          "en": "We pledge to phase out coal plants by 2030 and protect 30% of national forest reserves.",
          "es": "Nos comprometemos a cerrar plantas de carbón para 2030 y proteger 30% de bosques."
        }
      ]
    }
  },
  "c-teens-inter-11": {
    "topic": "Host a High-Stakes Model UN Debate 🌐",
    "topicEs": "Modera un debate de Modelo de Naciones Unidas",
    "cues": [
      {
        "icon": "🌐",
        "label": "POINT OF ORDER / INQUIRY?",
        "labelEs": "¿Punto de orden / consulta?",
        "questionExample": "The delegate of Germany requests a moderated caucus on cybersecurity."
      },
      {
        "icon": "📜",
        "label": "DRAFT RESOLUTION?",
        "labelEs": "¿Proyecto de resolución?",
        "questionExample": "This resolution calls upon all member states to guarantee digital education."
      },
      {
        "icon": "🤝",
        "label": "DIPLOMATIC CONSENSUS?",
        "labelEs": "¿Consenso diplomático?",
        "questionExample": "Let us amend Clause 4 to incorporate humanitarian aid protections."
      }
    ],
    "roleA": {
      "label": "Committee Chair",
      "labelEs": "Presidente de comité",
      "action": "Moderate debate session",
      "actionEs": "Moderar sesión",
      "avatar": "🌐"
    },
    "roleB": {
      "label": "National Delegate",
      "labelEs": "Delegado nacional",
      "action": "Deliver formal foreign policy speech",
      "actionEs": "Dar discurso diplomático",
      "avatar": "🏛️"
    },
    "helpWords": [
      {
        "emoji": "🌐",
        "word": "point of order",
        "translation": "punto de orden"
      },
      {
        "emoji": "📜",
        "word": "draft resolution",
        "translation": "proyecto de resolución"
      },
      {
        "emoji": "🏛️",
        "word": "sovereign member state",
        "translation": "estado miembro soberano"
      },
      {
        "emoji": "🤝",
        "word": "diplomatic consensus",
        "translation": "consenso diplomático"
      },
      {
        "emoji": "🛡️",
        "word": "international security",
        "translation": "seguridad internacional"
      },
      {
        "emoji": "🗳️",
        "word": "roll call vote",
        "translation": "votación nominal"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "The floor is now open for general debate. To what topic does the delegate wish to speak?",
          "es": "Se abre el debate general. ¿A qué tema desea referirse el delegado?"
        },
        {
          "en": "How does your draft resolution address cybersecurity threats against critical hospitals?",
          "es": "¿Cómo aborda su resolución las amenazas de ciberseguridad a hospitales?"
        },
        {
          "en": "Will the assembly proceed to an immediate roll call vote on the proposed amendment?",
          "es": "¿Procederá la asamblea a una votación nominal sobre la enmienda propuesta?"
        }
      ],
      "answer": [
        {
          "en": "The delegate of Canada wishes to address the urgent protection of global undersea fiber cables.",
          "es": "El delegado de Canadá desea abordar la protección urgente de cables submarinos de fibra."
        },
        {
          "en": "Our resolution creates a rapid-response coalition to defend infrastructure from ransomware attacks.",
          "es": "Nuestra resolución crea una coalición de respuesta rápida para defender infraestructura."
        },
        {
          "en": "We urge all distinguished delegates to vote in favor of this historic multilateral consensus.",
          "es": "Instamos a todos los distinguidos delegados a votar a favor de este consenso histórico."
        }
      ]
    }
  },
  "c-teens-inter-12": {
    "topic": "Level 6 Capstone: Global Scholarship Interview 🎓",
    "topicEs": "Desafío final Nivel 6: Entrevista de beca internacional",
    "cues": [
      {
        "icon": "🎓",
        "label": "ACADEMIC PASSION & LEADERSHIP?",
        "labelEs": "¿Pasión académica y liderazgo?",
        "questionExample": "I founded our high school robotics and ethics society to mentor younger students."
      },
      {
        "icon": "💡",
        "label": "CROSS-CULTURAL IMPACT?",
        "labelEs": "¿Impacto intercultural?",
        "questionExample": "Studying abroad will allow me to collaborate on international biomedical solutions."
      },
      {
        "icon": "🏆",
        "label": "WHY CHOOSE YOU?",
        "labelEs": "¿Por qué elegirte?",
        "questionExample": "I combine rigorous technical expertise with relentless community dedication."
      }
    ],
    "roleA": {
      "label": "Scholarship Director",
      "labelEs": "Director de becas",
      "action": "Conduct fellowship evaluation",
      "actionEs": "Evaluar candidato",
      "avatar": "🎓"
    },
    "roleB": {
      "label": "Scholarship Finalist",
      "labelEs": "Finalista de beca",
      "action": "Deliver winning capstone pitch",
      "actionEs": "Dar presentación de beca",
      "avatar": "🌟"
    },
    "helpWords": [
      {
        "emoji": "🎓",
        "word": "academic excellence",
        "translation": "excelencia académica"
      },
      {
        "emoji": "💡",
        "word": "transformative leadership",
        "translation": "liderazgo transformador"
      },
      {
        "emoji": "🔬",
        "word": "biomedical research",
        "translation": "investigación biomédica"
      },
      {
        "emoji": "🌍",
        "word": "cross-cultural vision",
        "translation": "visión intercultural"
      },
      {
        "emoji": "🤝",
        "word": "community empowerment",
        "translation": "empoderamiento comunitario"
      },
      {
        "emoji": "🏆",
        "word": "merit scholarship recipient",
        "translation": "becario de mérito"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Welcome to the final interview round. What transformative project have you led in your community?",
          "es": "Bienvenido a la ronda final. ¿Qué proyecto transformador has liderado en tu comunidad?"
        },
        {
          "en": "How will receiving this international merit scholarship empower your long-term career vision?",
          "es": "¿Cómo recibir esta beca de mérito potenciará tu visión profesional a largo plazo?"
        },
        {
          "en": "Why should our global foundation invest in your potential above all other international applicants?",
          "es": "¿Por qué nuestra fundación global debería invertir en tu potencial ante otros candidatos?"
        }
      ],
      "answer": [
        {
          "en": "I created an open-source tutoring platform that helped 1,200 rural students learn math and English.",
          "es": "Creé una plataforma de tutorías que ayudó a 1,200 estudiantes rurales en matemáticas."
        },
        {
          "en": "This scholarship will allow me to study biomedical engineering and develop affordable prosthetics.",
          "es": "Esta beca me permitirá estudiar ingeniería biomédica y desarrollar prótesis accesibles."
        },
        {
          "en": "I bring uncompromising academic grit, cultural empathy, and an unwavering commitment to serve.",
          "es": "Aporto tenacidad académica, empatía cultural y un compromiso inquebrantable de servir."
        }
      ]
    }
  },
  "c-teens-advanced-1": {
    "topic": "Report Campus Whispers & Breaking News 📰",
    "topicEs": "Reporta noticias de última hora en el campus",
    "cues": [
      {
        "icon": "📰",
        "label": "WHAT DID THEY CLAIM?",
        "labelEs": "¿Qué afirmaron?",
        "questionExample": "The principal said that the school was extending arts funding by 50%."
      },
      {
        "icon": "🗣️",
        "label": "REPORTED STATEMENTS?",
        "labelEs": "¿Discurso indirecto?",
        "questionExample": "She told reporters that students had organized the protest peacefully."
      },
      {
        "icon": "🎙️",
        "label": "VERIFY SOURCES?",
        "labelEs": "¿Verificar fuentes?",
        "questionExample": "He confirmed that the rumor was completely unfounded."
      }
    ],
    "roleA": {
      "label": "Campus Anchor",
      "labelEs": "Reportero del campus",
      "action": "Deliver reported news broadcast",
      "actionEs": "Presentar noticias reportadas",
      "avatar": "📰"
    },
    "roleB": {
      "label": "Investigative Journalist",
      "labelEs": "Periodista",
      "action": "Report on-the-scene quotes",
      "actionEs": "Reportar declaraciones",
      "avatar": "🎙️"
    },
    "helpWords": [
      {
        "emoji": "📰",
        "word": "breaking news report",
        "translation": "reporte de última hora"
      },
      {
        "emoji": "🗣️",
        "word": "she claimed that",
        "translation": "ella afirmó que"
      },
      {
        "emoji": "🎙️",
        "word": "he stated that",
        "translation": "él declaró que"
      },
      {
        "emoji": "🔍",
        "word": "verify official sources",
        "translation": "verificar fuentes oficiales"
      },
      {
        "emoji": "📢",
        "word": "press conference",
        "translation": "rueda de prensa"
      },
      {
        "emoji": "✨",
        "word": "exclusive interview",
        "translation": "entrevista exclusiva"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What did the school district superintendent announce regarding the new campus sports complex?",
          "es": "¿Qué anunció el superintendente sobre el nuevo complejo deportivo?"
        },
        {
          "en": "Did the student council president confirm whether Friday's charity festival was still taking place?",
          "es": "¿Confirmó el presidente del consejo estudiantil si el festival benéfico se realiza?"
        },
        {
          "en": "How did eyewitnesses recount the sudden power outage in the science building?",
          "es": "¿Cómo relataron los testigos el corte repentino de luz en el edificio de ciencias?"
        }
      ],
      "answer": [
        {
          "en": "The superintendent declared that construction on the solar-powered stadium would begin in April.",
          "es": "El superintendente declaró que la construcción del estadio solar comenzará en abril."
        },
        {
          "en": "She explained that the committee had secured permits and that all bands were confirmed to play.",
          "es": "Explicó que el comité había obtenido permisos y que todas las bandas estaban confirmadas."
        },
        {
          "en": "Eyewitnesses reported that a circuit breaker had tripped while the robotics team was testing their bot.",
          "es": "Los testigos reportaron que saltó un interruptor mientras robótica probaba su robot."
        }
      ]
    }
  },
  "c-teens-advanced-2": {
    "topic": "Secret Interviews & Interrogations 🕵️",
    "topicEs": "Entrevistas secretas e interrogatorios",
    "cues": [
      {
        "icon": "🕵️",
        "label": "REPORTED QUESTIONS?",
        "labelEs": "¿Preguntas indirectas?",
        "questionExample": "The detective asked where I had been on the evening of the theft."
      },
      {
        "icon": "❓",
        "label": "WHETHER / IF CLAUSES?",
        "labelEs": "¿Cláusulas condicionales?",
        "questionExample": "She inquired if we had seen any suspicious vehicles outside."
      },
      {
        "icon": "🔒",
        "label": "EXTRACT THE TRUTH?",
        "labelEs": "¿Extraer la verdad?",
        "questionExample": "They wanted to know why the security camera footage was deleted."
      }
    ],
    "roleA": {
      "label": "Senior Interrogator",
      "labelEs": "Interrogador principal",
      "action": "Ask probing questions",
      "actionEs": "Hacer preguntas clave",
      "avatar": "🕵️"
    },
    "roleB": {
      "label": "Witness Under Oath",
      "labelEs": "Testigo bajo juramento",
      "action": "Report conversations accurately",
      "actionEs": "Reportar conversaciones",
      "avatar": "⚖️"
    },
    "helpWords": [
      {
        "emoji": "🕵️",
        "word": "probe for answers",
        "translation": "indagar respuestas"
      },
      {
        "emoji": "❓",
        "word": "he asked whether",
        "translation": "él preguntó si"
      },
      {
        "emoji": "🔒",
        "word": "confidential interrogation",
        "translation": "interrogatorio confidencial"
      },
      {
        "emoji": "⚖️",
        "word": "testify under oath",
        "translation": "testificar bajo juramento"
      },
      {
        "emoji": "📁",
        "word": "classified dossier",
        "translation": "expediente clasificado"
      },
      {
        "emoji": "💡",
        "word": "reveal the truth",
        "translation": "revelar la verdad"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What specific questions did the chief inspector ask regarding the missing museum artifact?",
          "es": "¿Qué preguntas específicas hizo el inspector sobre la pieza desaparecida del museo?"
        },
        {
          "en": "Did they inquire whether any unauthorized personnel had accessed the digital vault?",
          "es": "¿Preguntaron si personal no autorizado había accedido a la bóveda digital?"
        },
        {
          "en": "How did the suspect respond when asked why their keycard was used after midnight?",
          "es": "¿Cómo respondió el sospechoso cuando le preguntaron por qué usó su tarjeta a medianoche?"
        }
      ],
      "answer": [
        {
          "en": "The inspector asked me where I had been standing when the alarm system suddenly went silent.",
          "es": "El inspector me preguntó dónde había estado cuando la alarma se apagó de repente."
        },
        {
          "en": "He inquired whether I had noticed anyone entering the archives with a black duffel bag.",
          "es": "Preguntó si había notado a alguien entrar a los archivos con una maleta negra."
        },
        {
          "en": "The suspect claimed that he had misplaced his keycard earlier that afternoon in the cafeteria.",
          "es": "El sospechoso afirmó que había extraviado su tarjeta esa misma tarde en la cafetería."
        }
      ]
    }
  },
  "c-teens-advanced-3": {
    "topic": "Profile Inspiring Creators with Relative Clauses 🎨",
    "topicEs": "Perfil de creadores inspiradores con cláusulas relativas",
    "cues": [
      {
        "icon": "🎨",
        "label": "WHO IS THE CREATOR?",
        "labelEs": "¿Quién es el creador?",
        "questionExample": "She is the director whose indie documentary won the Sundance Film Festival."
      },
      {
        "icon": "🏙️",
        "label": "WHERE DID IT HAPPEN?",
        "labelEs": "¿Dónde ocurrió?",
        "questionExample": "This is the creative lab where teenage programmers design accessible games."
      },
      {
        "icon": "✨",
        "label": "DEFINING VS NON-DEFINING?",
        "labelEs": "¿Cláusulas relativas?",
        "questionExample": "The software, which was built in two weeks, helps blind users navigate."
      }
    ],
    "roleA": {
      "label": "Biographical Host",
      "labelEs": "Presentador de perfiles",
      "action": "Introduce innovators",
      "actionEs": "Presentar innovadores",
      "avatar": "🎨"
    },
    "roleB": {
      "label": "Guest Innovator",
      "labelEs": "Innovador invitado",
      "action": "Describe inventions & team",
      "actionEs": "Describir inventos",
      "avatar": "💡"
    },
    "helpWords": [
      {
        "emoji": "🎨",
        "word": "creative director",
        "translation": "director creativo"
      },
      {
        "emoji": "💡",
        "word": "innovator who built",
        "translation": "innovador que construyó"
      },
      {
        "emoji": "🏆",
        "word": "documentary that won",
        "translation": "documental que ganó"
      },
      {
        "emoji": "🏙️",
        "word": "studio where ideas spark",
        "translation": "estudio donde nacen ideas"
      },
      {
        "emoji": "✨",
        "word": "visionary whose team",
        "translation": "visionario cuyo equipo"
      },
      {
        "emoji": "🌟",
        "word": "breakthrough invention",
        "translation": "invento revolucionario"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Who is the teenage digital artist whose augmented reality murals went viral worldwide?",
          "es": "¿Quién es la artista digital cuyos murales de realidad aumentada se volvieron virales?"
        },
        {
          "en": "Can you describe the non-profit organization which developed the solar water purifiers?",
          "es": "¿Puedes describir la organización que desarrolló los purificadores solares de agua?"
        },
        {
          "en": "What is the story behind the studio where the award-winning animation was produced?",
          "es": "¿Cuál es la historia del estudio donde se produjo la animación galardonada?"
        }
      ],
      "answer": [
        {
          "en": "She is a 16-year-old artist whose interactive murals bring public bus stations to life with 3D art.",
          "es": "Es una artista de 16 años cuyos murales 3D dan vida a estaciones de autobuses."
        },
        {
          "en": "It is an inspiring youth-led initiative, which operates in six countries, providing clean water.",
          "es": "Es una iniciativa juvenil que opera en seis países suministrando agua potable."
        },
        {
          "en": "It was founded in a converted garage where four high school friends designed the whole film.",
          "es": "Fue fundado en un garaje remodelado donde cuatro amigos de colegio diseñaron toda la película."
        }
      ]
    }
  },
  "c-teens-advanced-4": {
    "topic": "Showcase High-Tech Disruptions (Passive Voice) 🤖",
    "topicEs": "Muestra innovaciones de alta tecnología (Voz Pasiva)",
    "cues": [
      {
        "icon": "🤖",
        "label": "HOW WAS IT INVENTED?",
        "labelEs": "¿Cómo fue inventado?",
        "questionExample": "The AI diagnosis algorithm was developed by three high school prodigies."
      },
      {
        "icon": "🔋",
        "label": "HOW IS IT POWERED?",
        "labelEs": "¿Cómo se alimenta?",
        "questionExample": "The entire solar eco-grid is operated automatically by quantum sensors."
      },
      {
        "icon": "🚀",
        "label": "HOW WILL IT BE USED?",
        "labelEs": "¿Cómo será utilizado?",
        "questionExample": "Next-generation rockets will be launched from autonomous ocean platforms."
      }
    ],
    "roleA": {
      "label": "Tech Expo Presenter",
      "labelEs": "Presentador de feria tech",
      "action": "Showcase passive voice breakthroughs",
      "actionEs": "Presentar inventos en voz pasiva",
      "avatar": "🤖"
    },
    "roleB": {
      "label": "Lead Engineer",
      "labelEs": "Ingeniero líder",
      "action": "Explain technical architecture",
      "actionEs": "Explicar arquitectura técnica",
      "avatar": "⚡"
    },
    "helpWords": [
      {
        "emoji": "🤖",
        "word": "was developed by prodigies",
        "translation": "fue desarrollado por prodigios"
      },
      {
        "emoji": "🔋",
        "word": "is powered by solar cells",
        "translation": "es alimentado por celdas solares"
      },
      {
        "emoji": "🛰️",
        "word": "will be launched next month",
        "translation": "será lanzado el próximo mes"
      },
      {
        "emoji": "⚙️",
        "word": "is manufactured automatically",
        "translation": "es fabricado automáticamente"
      },
      {
        "emoji": "🔒",
        "word": "data is encrypted securely",
        "translation": "la información está cifrada"
      },
      {
        "emoji": "🚀",
        "word": "breakthrough is celebrated",
        "translation": "el avance es celebrado"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How was this revolutionary quantum encryption protocol engineered and tested?",
          "es": "¿Cómo fue diseñado y probado este revolucionario protocolo de cifrado cuántico?"
        },
        {
          "en": "By whom will the autonomous ocean cleaning drones be deployed across the Pacific?",
          "es": "¿Por quiénes serán desplegados los drones de limpieza oceánica en el Pacífico?"
        },
        {
          "en": "In what manner is sensitive biometric data processed and protected inside the device?",
          "es": "¿De qué manera se procesan y protegen los datos biométricos sensibles en el dispositivo?"
        }
      ],
      "answer": [
        {
          "en": "The encryption code was written in Rust and was rigorously stress-tested against supercomputers.",
          "es": "El código de cifrado fue escrito en Rust y probado rigurosamente contra supercomputadoras."
        },
        {
          "en": "The drones will be deployed next spring by a coalition of international environmental scientists.",
          "es": "Los drones serán desplegados la próxima primavera por una coalición de científicos."
        },
        {
          "en": "All user biometric templates are encrypted on-device and never transmitted to external cloud servers.",
          "es": "Todos los datos biométricos se cifran en el dispositivo y nunca se envían a la nube."
        }
      ]
    }
  },
  "c-teens-advanced-5": {
    "topic": "Broadcast Global News & Space Discoveries 🌌",
    "topicEs": "Transmite noticias globales y descubrimientos espaciales",
    "cues": [
      {
        "icon": "🌌",
        "label": "WHAT WAS DISCOVERED?",
        "labelEs": "¿Qué se descubrió?",
        "questionExample": "A habitable Earth-sized exoplanet was detected 40 light-years away."
      },
      {
        "icon": "🛰️",
        "label": "HOW ARE DATA ANALYZED?",
        "labelEs": "¿Cómo se analizan los datos?",
        "questionExample": "Spectroscopic signals were analyzed by the James Webb Space Telescope."
      },
      {
        "icon": "🌍",
        "label": "GLOBAL REACTION?",
        "labelEs": "¿Reacción mundial?",
        "questionExample": "The discovery has been hailed as the greatest astronomical milestone of our decade."
      }
    ],
    "roleA": {
      "label": "Science Broadcaster",
      "labelEs": "Divulgador espacial",
      "action": "Anchor global science news",
      "actionEs": "Conducir noticias científicas",
      "avatar": "🌌"
    },
    "roleB": {
      "label": "Astrophysicist",
      "labelEs": "Astrofísico",
      "action": "Explain cosmic data",
      "actionEs": "Explicar datos cósmicos",
      "avatar": "🛰️"
    },
    "helpWords": [
      {
        "emoji": "🌌",
        "word": "exoplanet was detected",
        "translation": "se detectó un exoplaneta"
      },
      {
        "emoji": "🛰️",
        "word": "data were analyzed",
        "translation": "se analizaron los datos"
      },
      {
        "emoji": "🔭",
        "word": "signals were observed",
        "translation": "se observaron señales"
      },
      {
        "emoji": "💧",
        "word": "liquid water was identified",
        "translation": "se identificó agua líquida"
      },
      {
        "emoji": "🚀",
        "word": "deep space mission",
        "translation": "misión espacial profunda"
      },
      {
        "emoji": "✨",
        "word": "has been recognized worldwide",
        "translation": "ha sido reconocido en el mundo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What extraordinary celestial phenomenon was recently observed by the space telescope array?",
          "es": "¿Qué extraordinario fenómeno espacial fue observado por el telescopio espacial?"
        },
        {
          "en": "How were atmospheric water vapor and carbon dioxide signatures confirmed on the exoplanet?",
          "es": "¿Cómo se confirmó la presencia de vapor de agua y CO2 en el exoplaneta?"
        },
        {
          "en": "Why has this landmark discovery been described as a turning point for humanity's future?",
          "es": "¿Por qué este descubrimiento histórico se considera un punto de inflexión para la humanidad?"
        }
      ],
      "answer": [
        {
          "en": "An Earth-like planet situated in the habitable zone of a nearby star was formally identified.",
          "es": "Un planeta similar a la Tierra situado en la zona habitable fue identificado formalmente."
        },
        {
          "en": "Atmospheric spectra were captured during three planetary transits and cross-verified by supercomputers.",
          "es": "Los espectros atmosféricos se captaron en tres tránsitos y se verificaron con supercomputadoras."
        },
        {
          "en": "It has been confirmed that liquid water oceans and cloud formations are supported on the surface!",
          "es": "¡Se ha confirmado que la superficie alberga océanos de agua líquida y nubes!"
        }
      ]
    }
  },
  "c-teens-advanced-6": {
    "topic": "Master Authentic Teen Idioms & Expressions 🎯",
    "topicEs": "Domina modismos y expresiones juveniles auténticas",
    "cues": [
      {
        "icon": "🎯",
        "label": "HIT THE NAIL ON THE HEAD?",
        "labelEs": "¿Dar en el clavo?",
        "questionExample": "Your analysis of the social dilemma really hit the nail on the head!"
      },
      {
        "icon": "🔥",
        "label": "ON THE SAME WAVELENGTH?",
        "labelEs": "¿En la misma sintonía?",
        "questionExample": "We worked so smoothly because we were on the exact same wavelength."
      },
      {
        "icon": "💡",
        "label": "THINK OUTSIDE THE BOX?",
        "labelEs": "¿Pensar fuera de la caja?",
        "questionExample": "To win the design hackathon, our crew had to think outside the box."
      }
    ],
    "roleA": {
      "label": "Idiom Enthusiast",
      "labelEs": "Experto en modismos",
      "action": "Use idioms fluently",
      "actionEs": "Usar modismos con soltura",
      "avatar": "🎯"
    },
    "roleB": {
      "label": "Debate Partner",
      "labelEs": "Compañero de debate",
      "action": "Exchange figurative nuances",
      "actionEs": "Intercambiar expresiones",
      "avatar": "🔥"
    },
    "helpWords": [
      {
        "emoji": "🎯",
        "word": "hit the nail on the head",
        "translation": "dar en el clavo"
      },
      {
        "emoji": "🔥",
        "word": "on the same wavelength",
        "translation": "en la misma sintonía"
      },
      {
        "emoji": "💡",
        "word": "think outside the box",
        "translation": "pensar de forma innovadora"
      },
      {
        "emoji": "⚡",
        "word": "bite the bullet",
        "translation": "hacer de tripas corazón"
      },
      {
        "emoji": "🌊",
        "word": "go with the flow",
        "translation": "seguir la corriente"
      },
      {
        "emoji": "🏆",
        "word": "ace the test with flying colors",
        "translation": "aprobar con honores"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Why did the judges state that your team's hackathon project hit the nail on the head?",
          "es": "¿Por qué los jueces dijeron que el proyecto de tu equipo dio en el clavo?"
        },
        {
          "en": "How did you and your co-presenter manage to stay on the exact same wavelength on stage?",
          "es": "¿Cómo lograron tu copresentador y tú estar en la misma sintonía en tarima?"
        },
        {
          "en": "What creative breakthrough occurred when your design team decided to think outside the box?",
          "es": "¿Qué avance creativo ocurrió cuando tu equipo de diseño pensó fuera de la caja?"
        }
      ],
      "answer": [
        {
          "en": "We hit the nail on the head because our app solved the exact commuting pain point students face.",
          "es": "Dimos en el clavo porque nuestra app resolvió el problema exacto de transporte estudiantil."
        },
        {
          "en": "We rehearsed our pitch for a week until our comedic timing and pacing were completely synchronized.",
          "es": "Ensayamos nuestra presentación por una semana hasta que el ritmo estuvo sincronizado."
        },
        {
          "en": "Instead of building a typical website, we thought outside the box and created an interactive 3D portal.",
          "es": "En vez de una web típica, innovamos y creamos un portal interactivo en 3D."
        }
      ]
    }
  },
  "c-teens-advanced-7": {
    "topic": "Executive Leadership & Phrasal Verbs 💼",
    "topicEs": "Liderazgo ejecutivo y verbos frasales avanzados",
    "cues": [
      {
        "icon": "💼",
        "label": "STEP UP / TAKE OVER?",
        "labelEs": "¿Asumir liderazgo / tomar el control?",
        "questionExample": "When the captain was injured, Elena stepped up and took over leadership."
      },
      {
        "icon": "📊",
        "label": "BRING ABOUT / CARRY OUT?",
        "labelEs": "¿Generar / llevar a cabo?",
        "questionExample": "We carried out the entire green campaign to bring about sustainable habits."
      },
      {
        "icon": "🤝",
        "label": "FALL BACK ON / FIGURE OUT?",
        "labelEs": "¿Tener de respaldo / resolver?",
        "questionExample": "When plans failed, we had a solid backup strategy to fall back on."
      }
    ],
    "roleA": {
      "label": "Student Body President",
      "labelEs": "Presidente estudiantil",
      "action": "Lead initiative",
      "actionEs": "Liderar iniciativa",
      "avatar": "💼"
    },
    "roleB": {
      "label": "Committee Director",
      "labelEs": "Director de comité",
      "action": "Coordinate team logistics",
      "actionEs": "Coordinar logística",
      "avatar": "📊"
    },
    "helpWords": [
      {
        "emoji": "💼",
        "word": "step up to the challenge",
        "translation": "asumir el reto"
      },
      {
        "emoji": "📊",
        "word": "carry out the action plan",
        "translation": "ejecutar el plan de acción"
      },
      {
        "emoji": "🌱",
        "word": "bring about positive change",
        "translation": "generar un cambio positivo"
      },
      {
        "emoji": "🤝",
        "word": "fall back on a backup plan",
        "translation": "apoyarse en un plan de respaldo"
      },
      {
        "emoji": "💡",
        "word": "figure out complex solutions",
        "translation": "resolver problemas complejos"
      },
      {
        "emoji": "🏆",
        "word": "stand out from the crowd",
        "translation": "destacarse del resto"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How did the student leadership team step up to the challenge during the campus emergency?",
          "es": "¿Cómo asumió el reto el equipo de líderes estudiantiles durante la emergencia?"
        },
        {
          "en": "What environmental policies did your council successfully carry out across all grade levels?",
          "es": "¿Qué políticas ambientales ejecutó su consejo en todos los cursos escolares?"
        },
        {
          "en": "When the charity fundraiser faced unexpected budget cuts, what backup plan did you fall back on?",
          "es": "¿Cuando el evento benéfico tuvo recortes, en qué plan de respaldo se apoyaron?"
        }
      ],
      "answer": [
        {
          "en": "Our team stepped up immediately by coordinating food distribution and setting up study halls.",
          "es": "Nuestro equipo asumió el reto coordinando comida y habilitando salas de estudio."
        },
        {
          "en": "We carried out a school-wide composting system that brought about a 40% reduction in trash.",
          "es": "Ejecutamos un sistema de compostaje escolar que generó una reducción del 40% en basura."
        },
        {
          "en": "We fell back on our digital sponsorship campaign, which raised over $5,000 in forty-eight hours!",
          "es": "¡Nos apoyamos en una campaña digital que recaudó más de $5,000 en 48 horas!"
        }
      ]
    }
  },
  "c-teens-advanced-8": {
    "topic": "The Great AI & Ethics Student Forum 🤖",
    "topicEs": "El gran foro escolar sobre IA y ética",
    "cues": [
      {
        "icon": "🤖",
        "label": "ALGORITHMIC BIAS?",
        "labelEs": "¿Sesgo algorítmico?",
        "questionExample": "If training data contain historic prejudices, AI models perpetuate discrimination."
      },
      {
        "icon": "⚖️",
        "label": "INTELLECTUAL PROPERTY?",
        "labelEs": "¿Propiedad intelectual?",
        "questionExample": "Should AI models be allowed to train on artists' portfolios without consent?"
      },
      {
        "icon": "🛡️",
        "label": "FUTURE REGULATIONS?",
        "labelEs": "¿Regulaciones futuras?",
        "questionExample": "Governments must enforce strict watermarking on synthetic deepfake media."
      }
    ],
    "roleA": {
      "label": "Tech Ethicist",
      "labelEs": "Eticista tecnológico",
      "action": "Moderate AI panel",
      "actionEs": "Moderar panel de IA",
      "avatar": "🤖"
    },
    "roleB": {
      "label": "Student AI Researcher",
      "labelEs": "Investigador juvenil",
      "action": "Present ethical framework",
      "actionEs": "Presentar marco ético",
      "avatar": "⚖️"
    },
    "helpWords": [
      {
        "emoji": "🤖",
        "word": "algorithmic bias & fairness",
        "translation": "sesgo y justicia algorítmica"
      },
      {
        "emoji": "⚖️",
        "word": "intellectual property rights",
        "translation": "derechos de propiedad intelectual"
      },
      {
        "emoji": "🛡️",
        "word": "deepfake detection & security",
        "translation": "detección de deepfakes"
      },
      {
        "emoji": "🧠",
        "word": "autonomous decision making",
        "translation": "toma de decisiones autónoma"
      },
      {
        "emoji": "📜",
        "word": "regulatory accountability",
        "translation": "responsabilidad regulatoria"
      },
      {
        "emoji": "💡",
        "word": "human-centered technology",
        "translation": "tecnología centrada en el humano"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How should educational institutions balance artificial intelligence tools with academic integrity?",
          "es": "¿Cómo deben equilibrar los colegios las herramientas de IA con la integridad académica?"
        },
        {
          "en": "What ethical boundaries must be established before autonomous AI agents make judicial decisions?",
          "es": "¿Qué límites éticos deben fijarse antes de que la IA tome decisiones judiciales?"
        },
        {
          "en": "How can society protect independent artists when generative algorithms replicate visual styles?",
          "es": "¿Cómo puede la sociedad proteger a artistas cuando los algoritmos replican sus estilos?"
        }
      ],
      "answer": [
        {
          "en": "AI should be integrated as an analytical brainstorm partner rather than a shortcut for original thinking.",
          "es": "La IA debe integrarse como socia de análisis y no como atajo al pensamiento original."
        },
        {
          "en": "Human oversight must remain non-negotiable in critical medical, legal, and financial domains.",
          "es": "La supervisión humana debe ser innegociable en medicina, leyes y finanzas."
        },
        {
          "en": "Legislation must require explicit consent, attribution, and royalty structures for all training datasets.",
          "es": "La ley debe exigir consentimiento explícito, atribución y regalías para los datos de entrenamiento."
        }
      ]
    }
  },
  "c-teens-advanced-9": {
    "topic": "Crisis Management & Environmental Summits 🌊",
    "topicEs": "Gestión de crisis y cumbres ambientales",
    "cues": [
      {
        "icon": "🌊",
        "label": "ECOLOGICAL THREAT?",
        "labelEs": "¿Amenaza ecológica?",
        "questionExample": "A major oil pipeline leak threatens coral reef sanctuaries along the coastline."
      },
      {
        "icon": "🚨",
        "label": "EMERGENCY PROTOCOL?",
        "labelEs": "¿Protocolo de emergencia?",
        "questionExample": "Deploy floating containment booms and mobilize wildlife rescue teams immediately."
      },
      {
        "icon": "📈",
        "label": "LONG-TERM RESTORATION?",
        "labelEs": "¿Restauración a largo plazo?",
        "questionExample": "We must hold the corporate polluters accountable and fund mangrove reforestation."
      }
    ],
    "roleA": {
      "label": "Crisis Director",
      "labelEs": "Director de crisis",
      "action": "Command emergency response",
      "actionEs": "Comandar respuesta",
      "avatar": "🚨"
    },
    "roleB": {
      "label": "Marine Biologist",
      "labelEs": "Biólogo marino",
      "action": "Assess ecosystem damage",
      "actionEs": "Evaluar daño ecológico",
      "avatar": "🌊"
    },
    "helpWords": [
      {
        "emoji": "🚨",
        "word": "emergency containment protocol",
        "translation": "protocolo de contención de emergencia"
      },
      {
        "emoji": "🌊",
        "word": "protect marine sanctuary",
        "translation": "proteger santuario marino"
      },
      {
        "emoji": "🛢️",
        "word": "oil spill remediation",
        "translation": "remediación de derrame"
      },
      {
        "emoji": "🌱",
        "word": "mangrove reforestation",
        "translation": "reforestación de manglares"
      },
      {
        "emoji": "⚖️",
        "word": "corporate legal liability",
        "translation": "responsabilidad legal corporativa"
      },
      {
        "emoji": "🤝",
        "word": "multilateral emergency taskforce",
        "translation": "fuerza de tarea multilateral"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What immediate emergency containment measures must be deployed to safeguard the coral reef?",
          "es": "¿Qué medidas inmediatas de contención deben desplegarse para proteger el arrecife?"
        },
        {
          "en": "How will the scientific task force monitor toxin levels across local marine food chains?",
          "es": "¿Cómo monitoreará el equipo científico los niveles de toxinas en la fauna marina?"
        },
        {
          "en": "What legal accountability and environmental fines will be imposed on the responsible corporation?",
          "es": "¿Qué sanciones legales y multas ambientales se impondrán a la empresa responsable?"
        }
      ],
      "answer": [
        {
          "en": "We have dispatched twenty specialized skimmer vessels and deployed three miles of absorbent booms.",
          "es": "Hemos despachado veinte embarcaciones especializadas y colocado tres millas de barreras."
        },
        {
          "en": "Autonomous underwater sensors will sample water purity and track hydrocarbon dispersion 24/7.",
          "es": "Sensores submarinos autónomos medirán la pureza del agua y dispersión de hidrocarburos 24/7."
        },
        {
          "en": "The corporation will be levied maximum statutory penalties and must fund complete reef rehabilitation.",
          "es": "Se impondrán las máximas sanciones legales a la empresa para financiar la restauración total."
        }
      ]
    }
  },
  "c-teens-advanced-10": {
    "topic": "Level 8 Capstone: Global Youth NGO Pitch 🏆",
    "topicEs": "Desafío final Nivel 8: Presentación de ONG juvenil",
    "cues": [
      {
        "icon": "🏆",
        "label": "NGO MISSION & VISION?",
        "labelEs": "¿Misión y visión?",
        "questionExample": "Our initiative, 'GreenPulse Youth', equips schools in ten countries with solar microgrids."
      },
      {
        "icon": "📊",
        "label": "METRICS & TRACTION?",
        "labelEs": "¿Métricas y resultados?",
        "questionExample": "We have generated 50 megawatt-hours of clean power and educated 15,000 students."
      },
      {
        "icon": "💡",
        "label": "SCALING PROPOSAL?",
        "labelEs": "¿Propuesta de expansión?",
        "questionExample": "With a $50,000 seed grant, we will expand our open-source curriculum to 50 new campuses."
      }
    ],
    "roleA": {
      "label": "Grant Panel Chair",
      "labelEs": "Presidente del panel",
      "action": "Evaluate NGO investment",
      "actionEs": "Evaluar inversión social",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "NGO Founder / Teen Leader",
      "labelEs": "Fundador de ONG",
      "action": "Pitch high-impact venture",
      "actionEs": "Presentar ONG de impacto",
      "avatar": "🌟"
    },
    "helpWords": [
      {
        "emoji": "🏛️",
        "word": "global youth foundation",
        "translation": "fundación juvenil global"
      },
      {
        "emoji": "💡",
        "word": "sustainable development goals",
        "translation": "objetivos de desarrollo sostenible"
      },
      {
        "emoji": "☀️",
        "word": "solar microgrid infrastructure",
        "translation": "infraestructura de microred solar"
      },
      {
        "emoji": "📊",
        "word": "measurable community impact",
        "translation": "impacto comunitario medible"
      },
      {
        "emoji": "🤝",
        "word": "grassroots student network",
        "translation": "red estudiantil comunitaria"
      },
      {
        "emoji": "🏆",
        "word": "venture philanthropy grant",
        "translation": "subvención de filantropía"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Welcome to the Global Impact Finals. What systemic social challenge does your NGO solve?",
          "es": "Bienvenido a la final de impacto. ¿Qué reto social sistémico resuelve su ONG?"
        },
        {
          "en": "What measurable community outcomes and financial transparency can you demonstrate to our board?",
          "es": "¿Qué resultados medibles y transparencia financiera pueden demostrar a nuestra junta?"
        },
        {
          "en": "How will your leadership team deploy our seed funding to scale operations across South America?",
          "es": "¿Cómo utilizará su equipo los fondos para expandir operaciones en Sudamérica?"
        }
      ],
      "answer": [
        {
          "en": "Our NGO tackles educational energy poverty by installing open-source student-built solar microgrids.",
          "es": "Nuestra ONG combate la pobreza energética instalando microredes solares construidas por alumnos."
        },
        {
          "en": "We have electrified 18 community schools, reducing diesel expenses by 85% with public ledger audits.",
          "es": "Hemos electrificado 18 colegios, reduciendo costos de diésel un 85% con balances públicos."
        },
        {
          "en": "With your backing, we will establish five regional fabrication labs to train 200 youth solar technicians!",
          "es": "¡Con su apoyo crearemos cinco laboratorios regionales para capacitar a 200 técnicos solares!"
        }
      ]
    }
  },
  "c-teens-elite-1": {
    "topic": "Future Milestones & Tech Forecasting 🛰️",
    "topicEs": "Hitos futuros y pronósticos tecnológicos",
    "cues": [
      {
        "icon": "🛰️",
        "label": "BY 2035 WE WILL HAVE ACHIEVED?",
        "labelEs": "¿Para 2035 habremos logrado...?",
        "questionExample": "By 2035, quantum computing will have broken legacy cryptographic algorithms."
      },
      {
        "icon": "⚡",
        "label": "THIS TIME NEXT DECADE?",
        "labelEs": "¿En esta época de la próxima década?",
        "questionExample": "This time next decade, fusion reactors will be supplying commercial city power."
      },
      {
        "icon": "🧠",
        "label": "TRANSFORMATIVE MILESTONE?",
        "labelEs": "¿Hito transformador?",
        "questionExample": "Autonomous AI agents will have discovered cures for chronic neurodegenerative diseases."
      }
    ],
    "roleA": {
      "label": "Futurist Keynote Speaker",
      "labelEs": "Conferencista futurista",
      "action": "Deliver predictive technology keynote",
      "actionEs": "Presentar pronóstico tecnológico",
      "avatar": "🛰️"
    },
    "roleB": {
      "label": "Tech Analyst",
      "labelEs": "Analista de tecnología",
      "action": "Interrogate feasibility timelines",
      "actionEs": "Cuestionar viabilidad",
      "avatar": "📈"
    },
    "helpWords": [
      {
        "emoji": "🛰️",
        "word": "quantum computing milestone",
        "translation": "hito de computación cuántica"
      },
      {
        "emoji": "⚡",
        "word": "fusion energy grid",
        "translation": "red de energía de fusión"
      },
      {
        "emoji": "🧠",
        "word": "neural synthesis",
        "translation": "síntesis neuronal"
      },
      {
        "emoji": "📈",
        "word": "exponential technological curve",
        "translation": "curva tecnológica exponencial"
      },
      {
        "emoji": "🔬",
        "word": "molecular nanotechnology",
        "translation": "nanotecnología molecular"
      },
      {
        "emoji": "🌐",
        "word": "interplanetary infrastructure",
        "translation": "infraestructura interplanetaria"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What transformative societal milestones will humanity have achieved by the year 2035?",
          "es": "¿Qué hitos sociales transformadores habrá alcanzado la humanidad para el año 2035?"
        },
        {
          "en": "How will the widespread deployment of room-temperature superconductors revolutionize urban transit?",
          "es": "¿Cómo revolucionarán el transporte los superconductores a temperatura ambiente?"
        },
        {
          "en": "By the time this decade concludes, how will artificial general intelligence have reshaped education?",
          "es": "¿Para cuando termine esta década, cómo habrá transformado la educación la IA general?"
        }
      ],
      "answer": [
        {
          "en": "By 2035, human researchers will have established permanent robotic research outposts on the lunar south pole.",
          "es": "Para 2035, se habrán establecido bases científicas robóticas permanentes en la Luna."
        },
        {
          "en": "Maglev bullet trains operating on lossless magnetic tracks will connect continents at supersonic speeds.",
          "es": "Trenes de levitación magnética conectarán continentes a velocidades supersónicas."
        },
        {
          "en": "AI pedagogical models will have eliminated standardized curricula, delivering customized lifelong mastery.",
          "es": "Los modelos de IA habrán eliminado los programas rígidos, permitiendo maestría personalizada."
        }
      ]
    }
  },
  "c-teens-elite-2": {
    "topic": "High-Stakes Dilemmas & Mixed Conditionals ♟️",
    "topicEs": "Dilemas de alto impacto y condicionales mixtos",
    "cues": [
      {
        "icon": "♟️",
        "label": "IF WE HAD ACTED DIFFERENTLY THEN?",
        "labelEs": "¿Si hubiéramos actuado diferente antes...?",
        "questionExample": "If engineers had prioritized safety over speed, our servers would not be offline today."
      },
      {
        "icon": "⚖️",
        "label": "IF WE WERE MORE RESILIENT NOW?",
        "labelEs": "¿Si fuéramos más resilientes ahora...?",
        "questionExample": "If we were not so dependent on cloud centralization, yesterday's blackout wouldn't have affected us."
      },
      {
        "icon": "🎯",
        "label": "STRATEGIC COURSE CORRECTION?",
        "labelEs": "¿Corrección estratégica?",
        "questionExample": "Had we implemented quantum backups last year, our financial ledger would be completely secure now."
      }
    ],
    "roleA": {
      "label": "Chief Crisis Officer",
      "labelEs": "Director de crisis",
      "action": "Evaluate strategic decision trade-offs",
      "actionEs": "Evaluar decisiones estratégicas",
      "avatar": "♟️"
    },
    "roleB": {
      "label": "Board Member",
      "labelEs": "Miembro de la junta",
      "action": "Propose corrective risk architecture",
      "actionEs": "Proponer arquitectura de riesgo",
      "avatar": "⚖️"
    },
    "helpWords": [
      {
        "emoji": "♟️",
        "word": "mixed conditional evaluation",
        "translation": "evaluación de condicionales mixtos"
      },
      {
        "emoji": "⚖️",
        "word": "ethical strategic dilemma",
        "translation": "dilema ético estratégico"
      },
      {
        "emoji": "🛡️",
        "word": "cyber risk mitigation",
        "translation": "mitigación de riesgo cibernético"
      },
      {
        "emoji": "📉",
        "word": "prevent cascading failures",
        "translation": "prevenir fallos en cadena"
      },
      {
        "emoji": "💡",
        "word": "counterfactual analysis",
        "translation": "análisis contrafáctico"
      },
      {
        "emoji": "🎯",
        "word": "decisive crisis resolution",
        "translation": "resolución decisiva de crisis"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "If our cybersecurity division had patched the zero-day exploit last month, would our core network be vulnerable now?",
          "es": "¿Si hubiéramos parchado la vulnerabilidad el mes pasado, la red estaría vulnerable hoy?"
        },
        {
          "en": "How would our international reputation be different today if the executive committee had acted with total transparency?",
          "es": "¿Cómo sería nuestra reputación si el comité hubiera actuado con total transparencia?"
        },
        {
          "en": "Had the climate summit delegates ratified binding enforcement treaties in 2015, what ecological crises would we be avoiding today?",
          "es": "¿Si la cumbre hubiera ratificado tratados vinculantes en 2015, qué crisis evitaríamos hoy?"
        }
      ],
      "answer": [
        {
          "en": "If we had implemented multi-signature biometric authentication, our corporate vault would be impenetrable today.",
          "es": "Si hubiéramos implementado autenticación biométrica, la bóveda hoy sería impenetrable."
        },
        {
          "en": "Had executive leaders listened to whistleblower warnings, our firm wouldn't be facing regulatory litigation now.",
          "es": "Si los líderes hubieran escuchado las alertas, la empresa no enfrentaría litigios hoy."
        },
        {
          "en": "If nations had subsidized solar infrastructure twenty years ago, carbon emissions would be negligible today.",
          "es": "Si los países hubieran subsidiado energía solar hace 20 años, hoy las emisiones serían mínimas."
        }
      ]
    }
  },
  "c-teens-elite-3": {
    "topic": "Cleft Sentences & Emphatic Rhetoric 🏛️",
    "topicEs": "Oraciones hendidas y retórica enfática",
    "cues": [
      {
        "icon": "🏛️",
        "label": "WHAT WE TRULY REQUIRE IS?",
        "labelEs": "¿Lo que de verdad requerimos es...?",
        "questionExample": "What we truly require is uncompromising commitment to scientific transparency."
      },
      {
        "icon": "✨",
        "label": "IT IS YOUTH WHO?",
        "labelEs": "¿Son los jóvenes quienes...?",
        "questionExample": "It was the courage of student advocates that dismantled bureaucratic inertia."
      },
      {
        "icon": "🔥",
        "label": "ALL THAT MATTERS IS?",
        "labelEs": "¿Lo único que importa es...?",
        "questionExample": "All that matters is creating equitable technological access for underprivileged communities."
      }
    ],
    "roleA": {
      "label": "Keynote Orator",
      "labelEs": "Orador magistral",
      "action": "Deliver emphatic address",
      "actionEs": "Dar discurso enfático",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "Parliamentary Critic",
      "labelEs": "Crítico parlamentario",
      "action": "Scrutinize rhetoric & conviction",
      "actionEs": "Examinar retórica",
      "avatar": "📜"
    },
    "helpWords": [
      {
        "emoji": "🏛️",
        "word": "emphatic cleft structure",
        "translation": "estructura hendida enfática"
      },
      {
        "emoji": "✨",
        "word": "it was visionary youth who",
        "translation": "fueron los jóvenes visionarios quienes"
      },
      {
        "emoji": "💡",
        "word": "what society demands is",
        "translation": "lo que la sociedad exige es"
      },
      {
        "emoji": "🔥",
        "word": "all that remains is action",
        "translation": "todo lo que queda es acción"
      },
      {
        "emoji": "📜",
        "word": "oratorical persuasion",
        "translation": "persuasión oratoria"
      },
      {
        "emoji": "🎯",
        "word": "unwavering moral clarity",
        "translation": "claridad moral inquebrantable"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What specific philosophical reform is imperative to transform modern global governance?",
          "es": "¿Qué reforma filosófica específica es imperativa para transformar la gobernanza global?"
        },
        {
          "en": "Was it technological advancement or grassroots moral awakening that drove historical civil rights triumphs?",
          "es": "¿Fue el avance tecnológico o el despertar moral lo que impulsó los derechos civiles?"
        },
        {
          "en": "How does emphatic sentence architecture elevate persuasive political rhetoric?",
          "es": "¿Cómo eleva la arquitectura enfática la retórica política persuasiva?"
        }
      ],
      "answer": [
        {
          "en": "What we need above all else is systemic accountability from multinational tech conglomerates.",
          "es": "Lo que necesitamos por encima de todo es rendición de cuentas de las corporaciones tecnológicas."
        },
        {
          "en": "It was precisely the relentless mobilization of teenage activists that forced Parliament to act.",
          "es": "Fue precisamente la movilización incansable de los jóvenes lo que obligó al Parlamento a actuar."
        },
        {
          "en": "What matters most is ensuring that artificial intelligence empowers human dignity rather than exploiting it.",
          "es": "Lo que más importa es asegurar que la inteligencia artificial potencie la dignidad humana."
        }
      ]
    }
  },
  "c-teens-elite-4": {
    "topic": "Rhetorical Inversions & High-Impact Oratory 🎙️",
    "topicEs": "Inversiones retóricas y oratoria de alto impacto",
    "cues": [
      {
        "icon": "🎙️",
        "label": "SELDOM HAVE WE WITNESSED?",
        "labelEs": "¿Raras veces hemos presenciado...?",
        "questionExample": "Seldom have we witnessed such magnificent solidarity across international borders."
      },
      {
        "icon": "⚡",
        "label": "NOT ONLY DID THEY PRESERVE?",
        "labelEs": "¿No solo preservaron...?",
        "questionExample": "Not only did youth scientists build the satellite, but they also launched it with zero public funding."
      },
      {
        "icon": "🌟",
        "label": "UNDER NO CIRCUMSTANCES SHALL WE?",
        "labelEs": "¿Bajo ninguna circunstancia vamos a...?",
        "questionExample": "Under no circumstances shall we compromise our core ethical principles."
      }
    ],
    "roleA": {
      "label": "Valedictorian",
      "labelEs": "Orador de graduación",
      "action": "Deliver inverted rhetorical address",
      "actionEs": "Dar discurso con inversiones",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Academic Dean",
      "labelEs": "Decano académico",
      "action": "Praise rhetorical mastery",
      "actionEs": "Elogiar maestría retórica",
      "avatar": "🎓"
    },
    "helpWords": [
      {
        "emoji": "🎙️",
        "word": "rhetorical inversion",
        "translation": "inversión retórica"
      },
      {
        "emoji": "⚡",
        "word": "seldom have we seen",
        "translation": "raras veces hemos visto"
      },
      {
        "emoji": "🌟",
        "word": "under no circumstances",
        "translation": "bajo ninguna circunstancia"
      },
      {
        "emoji": "🔥",
        "word": "not only did they excel",
        "translation": "no solo sobresalieron"
      },
      {
        "emoji": "🏛️",
        "word": "grand oratorical eloquence",
        "translation": "gran elocuencia oratoria"
      },
      {
        "emoji": "🏆",
        "word": "historical commencement address",
        "translation": "discurso histórico de graduación"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How does inverted syntax enhance the dramatic cadence of a graduation commencement address?",
          "es": "¿Cómo mejora la sintaxis invertida la cadencia dramática de un discurso de graduación?"
        },
        {
          "en": "What bold pledge does your graduating cohort make regarding global technological stewardship?",
          "es": "¿Qué promesa audaz hace su promoción respecto al liderazgo tecnológico global?"
        },
        {
          "en": "In what manner does formal English syntax inspire collective civic courage?",
          "es": "¿De qué manera la sintaxis formal del inglés inspira valor cívico colectivo?"
        }
      ],
      "answer": [
        {
          "en": "Rarely in human history has a rising generation possessed such potent tools to reshape civilization.",
          "es": "Rara vez en la historia humana una generación ha tenido herramientas tan potentes para transformar el mundo."
        },
        {
          "en": "Not only have our graduates mastered complex sciences, but they have also championed social justice.",
          "es": "No solo se han graduado con honores científicos, sino que han defendido la justicia social."
        },
        {
          "en": "Under no circumstances will we surrender our optimism to cynicism or indifference!",
          "es": "¡Bajo ninguna circunstancia entregaremos nuestro optimismo al cinismo o a la indiferencia!"
        }
      ]
    }
  },
  "c-teens-elite-5": {
    "topic": "Diplomatic Softening & Nuanced Negotiations 🤝",
    "topicEs": "Suavizado diplomático y negociaciones matizadas",
    "cues": [
      {
        "icon": "🤝",
        "label": "I WOULD TENTATIVELY SUGGEST?",
        "labelEs": "¿Sugeriría tentativamente...?",
        "questionExample": "I would tentatively suggest that we reconsider the allocation of intellectual property royalties."
      },
      {
        "icon": "🌐",
        "label": "WOULD IT NOT BE PRUDENT TO?",
        "labelEs": "¿No sería prudente...?",
        "questionExample": "Would it not be prudent to conduct a bilateral pilot phase before full regulatory roll-out?"
      },
      {
        "icon": "💡",
        "label": "WITH ALL DUE RESPECT?",
        "labelEs": "¿Con el debido respeto...?",
        "questionExample": "With all due respect, the proposed timeline appears somewhat overly optimistic."
      }
    ],
    "roleA": {
      "label": "Chief Negotiator",
      "labelEs": "Jefe negociador",
      "action": "Deploy diplomatic softening",
      "actionEs": "Aplicar diplomacia suave",
      "avatar": "🤝"
    },
    "roleB": {
      "label": "Foreign Minister",
      "labelEs": "Canciller",
      "action": "Harmonize bilateral agreements",
      "actionEs": "Armonizar acuerdos bilaterales",
      "avatar": "🌐"
    },
    "helpWords": [
      {
        "emoji": "🤝",
        "word": "diplomatic softening techniques",
        "translation": "técnicas de suavizado diplomático"
      },
      {
        "emoji": "🌐",
        "word": "bilateral consensus building",
        "translation": "construcción de consenso bilateral"
      },
      {
        "emoji": "💡",
        "word": "constructive reframing",
        "translation": "reencuadre constructivo"
      },
      {
        "emoji": "⚖️",
        "word": "mitigate diplomatic friction",
        "translation": "mitigar fricciones diplomáticas"
      },
      {
        "emoji": "📜",
        "word": "nuanced policy phrasing",
        "translation": "redacción matizada de políticas"
      },
      {
        "emoji": "🕊️",
        "word": "harmonious international accord",
        "translation": "acuerdo internacional armonioso"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How can international negotiators reject an unacceptable clause without causing offense or friction?",
          "es": "¿Cómo pueden los negociadores rechazar una cláusula sin ofender ni generar conflicto?"
        },
        {
          "en": "What softened phrases establish constructive collaboration between rival tech alliances?",
          "es": "¿Qué frases suavizadas establecen colaboración constructiva entre alianzas tecnológicas rivales?"
        },
        {
          "en": "How do diplomatic hedging strategies protect sensitive cross-border trade discussions?",
          "es": "¿Cómo protegen las estrategias diplomáticas de cautela los acuerdos comerciales fronterizos?"
        }
      ],
      "answer": [
        {
          "en": "I wonder if it might be advantageous to revisit the data-sharing provisions in Article 7.",
          "es": "Me pregunto si sería ventajoso revisar las disposiciones de datos del Artículo 7."
        },
        {
          "en": "Would you perhaps consider a compromise where compliance audits occur bi-annually rather than monthly?",
          "es": "¿Consideraría un compromiso donde las auditorías sean semestrales en vez de mensuales?"
        },
        {
          "en": "We are inclined to believe that an independent oversight board would satisfy both delegations' concerns.",
          "es": "Nos inclinamos a creer que una junta independiente satisfará las preocupaciones de ambas partes."
        }
      ]
    }
  },
  "c-teens-elite-6": {
    "topic": "Discursive Architecture & Thesis Defense 📚",
    "topicEs": "Arquitectura discursiva y defensa de tesis",
    "cues": [
      {
        "icon": "📚",
        "label": "THESIS PREMISE?",
        "labelEs": "¿Premisa de tesis?",
        "questionExample": "This paper posits that decentralized autonomous organizations democratize civic engagement."
      },
      {
        "icon": "📊",
        "label": "EMPIRICAL SUBSTANTIATION?",
        "labelEs": "¿Sustentación empírica?",
        "questionExample": "Quantitative econometric models corroborate our central hypothesis across all tested cohorts."
      },
      {
        "icon": "🏛️",
        "label": "DEFEND AGAINST SKEPTICISM?",
        "labelEs": "¿Defensa contra escepticismo?",
        "questionExample": "Contrary to traditional assumptions, cryptographic transparency actively reduces systemic fraud."
      }
    ],
    "roleA": {
      "label": "Doctoral Defense Candidate",
      "labelEs": "Candidato doctoral",
      "action": "Defend academic thesis",
      "actionEs": "Defender tesis doctoral",
      "avatar": "📚"
    },
    "roleB": {
      "label": "Dissertation Committee Chair",
      "labelEs": "Presidente del tribunal",
      "action": "Interrogate methodology & rigour",
      "actionEs": "Interrogar metodología",
      "avatar": "🎓"
    },
    "helpWords": [
      {
        "emoji": "📚",
        "word": "academic thesis defense",
        "translation": "defensa de tesis académica"
      },
      {
        "emoji": "📊",
        "word": "empirical econometric data",
        "translation": "datos econométricos empíricos"
      },
      {
        "emoji": "🧠",
        "word": "epistemological framework",
        "translation": "marco epistemológico"
      },
      {
        "emoji": "🏛️",
        "word": "rigorous methodological defense",
        "translation": "defensa metodológica rigurosa"
      },
      {
        "emoji": "💡",
        "word": "paradigm-shifting insights",
        "translation": "hallazgos que cambian paradigmas"
      },
      {
        "emoji": "🎓",
        "word": "unanimous doctoral commendation",
        "translation": "mención doctoral unánime"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is the fundamental epistemological thesis that your computational research defends?",
          "es": "¿Cuál es la tesis epistemológica fundamental que defiende su investigación computacional?"
        },
        {
          "en": "How do you refute the criticism that decentralized financial ledgers introduce excessive market volatility?",
          "es": "¿Cómo refuta la crítica de que los registros financieros descentralizados crean volatilidad?"
        },
        {
          "en": "What empirical evidence substantiates your claim that algorithmic governance increases democratic participation?",
          "es": "¿Qué evidencia empírica respalda que la gobernanza algorítmica aumenta la participación?"
        }
      ],
      "answer": [
        {
          "en": "Our dissertation demonstrates that distributed consensus protocols outperform centralized legacy clearinghouses.",
          "es": "Nuestra tesis demuestra que los protocolos distribuidos superan a las entidades centralizadas."
        },
        {
          "en": "Statistical regression models indicate that volatility diminishes as liquidity pools deepen over twelve-month horizons.",
          "es": "Modelos de regresión indican que la volatilidad disminuye al profundizarse la liquidez a 12 meses."
        },
        {
          "en": "Field data across forty civic municipalities confirm a 65% increase in verified grassroots voting.",
          "es": "Datos de campo en cuarenta municipios confirman un incremento del 65% en votación verificada."
        }
      ]
    }
  },
  "c-teens-elite-7": {
    "topic": "Empirical Research & Peer-Reviewed Citations 🔬",
    "topicEs": "Investigación empírica y citaciones científicas",
    "cues": [
      {
        "icon": "🔬",
        "label": "RESEARCH METHODOLOGY?",
        "labelEs": "¿Metodología de investigación?",
        "questionExample": "A double-blind randomized control trial was conducted across a diverse sample of 2,500 subjects."
      },
      {
        "icon": "📈",
        "label": "STATISTICAL CORRELATIONS?",
        "labelEs": "¿Correlaciones estadísticas?",
        "questionExample": "The Pearson correlation coefficient (r = 0.89, p < 0.001) confirms statistical significance."
      },
      {
        "icon": "📑",
        "label": "LITERATURE SYNTHESIS?",
        "labelEs": "¿Síntesis de literatura?",
        "questionExample": "As highlighted by Vance et al. (2024), neural plastic pathways adapt rapidly to immersive language stimuli."
      }
    ],
    "roleA": {
      "label": "Senior Research Scientist",
      "labelEs": "Científico senior",
      "action": "Present peer-reviewed findings",
      "actionEs": "Presentar artículo revisado por pares",
      "avatar": "🔬"
    },
    "roleB": {
      "label": "Journal Editor",
      "labelEs": "Editor de revista científica",
      "action": "Review methodology validity",
      "actionEs": "Revisar validez metodológica",
      "avatar": "📑"
    },
    "helpWords": [
      {
        "emoji": "🔬",
        "word": "double-blind clinical trial",
        "translation": "ensayo clínico doble ciego"
      },
      {
        "emoji": "📈",
        "word": "statistically significant data",
        "translation": "datos estadísticamente significativos"
      },
      {
        "emoji": "📑",
        "word": "peer-reviewed literature citation",
        "translation": "citación de literatura científica"
      },
      {
        "emoji": "🧪",
        "word": "replicable scientific methodology",
        "translation": "metodología replicable"
      },
      {
        "emoji": "🧠",
        "word": "neuroplastic cognitive adaptation",
        "translation": "adaptación cognitiva neuroplástica"
      },
      {
        "emoji": "🌟",
        "word": "published in Nature Journal",
        "translation": "publicado en la revista Nature"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What empirical sampling methodology ensured the validity and replicability of your biomedical findings?",
          "es": "¿Qué metodología de muestreo aseguró la validez y replicabilidad de sus hallazgos?"
        },
        {
          "en": "How does your quantitative dataset corroborate or challenge existing literature regarding neuroplasticity?",
          "es": "¿Cómo corrobora o desafía su conjunto de datos la literatura existente sobre neuroplasticidad?"
        },
        {
          "en": "What statistical error margins and confidence intervals characterize your neural mapping study?",
          "es": "¿Qué márgenes de error e intervalos de confianza caracterizan su estudio de mapeo neural?"
        }
      ],
      "answer": [
        {
          "en": "We implemented a randomized double-blind protocol with stratified demographic sampling and zero attrition.",
          "es": "Implementamos un protocolo doble ciego aleatorizado con muestreo estratificado sin bajas."
        },
        {
          "en": "Our data reinforce the foundational work of Henderson (2023) while identifying three novel synaptic pathways.",
          "es": "Nuestros datos refuerzan el trabajo de Henderson (2023) e identifican tres nuevas vías sinápticas."
        },
        {
          "en": "The findings yielded a 99.9% confidence interval, confirming robust neurogenesis during immersive acquisition.",
          "es": "Los hallazgos arrojaron un intervalo de confianza del 99.9%, confirmando neurogénesis en inmersión."
        }
      ]
    }
  },
  "c-teens-elite-8": {
    "topic": "Executive Boardroom Mediation & Conflict 💼",
    "topicEs": "Mediación ejecutiva y resolución de conflictos",
    "cues": [
      {
        "icon": "💼",
        "label": "THE CORPORATE DISPUTE?",
        "labelEs": "¿La disputa corporativa?",
        "questionExample": "Shareholders and technical founders are deadlocked over equity dilution and board control."
      },
      {
        "icon": "🤝",
        "label": "FACILITATING CONSENSUS?",
        "labelEs": "¿Facilitar consenso?",
        "questionExample": "Let us decouple governance voting rights from dividend equity yields to satisfy both factions."
      },
      {
        "icon": "⚖️",
        "label": "BINDING COMPROMISE?",
        "labelEs": "¿Compromiso vinculante?",
        "questionExample": "We propose a golden share structure with dual-class vesting tied directly to quarterly engineering milestones."
      }
    ],
    "roleA": {
      "label": "Executive Mediator",
      "labelEs": "Mediador ejecutivo",
      "action": "Orchestrate board compromise",
      "actionEs": "Orquestar acuerdo en junta",
      "avatar": "💼"
    },
    "roleB": {
      "label": "Founder & CEO",
      "labelEs": "Fundador y CEO",
      "action": "Protect technological sovereignty",
      "actionEs": "Proteger soberanía técnica",
      "avatar": "👔"
    },
    "helpWords": [
      {
        "emoji": "💼",
        "word": "executive boardroom mediation",
        "translation": "mediación ejecutiva de directorio"
      },
      {
        "emoji": "🤝",
        "word": "break corporate deadlock",
        "translation": "destrabar conflicto corporativo"
      },
      {
        "emoji": "⚖️",
        "word": "dual-class share structure",
        "translation": "estructura accionaria de doble clase"
      },
      {
        "emoji": "📈",
        "word": "fiduciary duty to investors",
        "translation": "deber fiduciario ante inversores"
      },
      {
        "emoji": "💡",
        "word": "harmonize conflicting interests",
        "translation": "armonizar intereses en conflicto"
      },
      {
        "emoji": "🏆",
        "word": "binding governance resolution",
        "translation": "resolución vinculante de gobierno"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How can the board resolve the acute tension between short-term quarterly profits and long-term R&D investments?",
          "es": "¿Cómo puede la junta resolver la tensión entre ganancias trimestrales e inversión en I+D?"
        },
        {
          "en": "What structural governance mechanisms protect the original founders' technical vision from hostile dilution?",
          "es": "¿Qué mecanismos de gobernanza protegen la visión técnica de los fundadores ante dilución?"
        },
        {
          "en": "How does our mediation framework preserve investor confidence while safeguarding engineering autonomy?",
          "es": "¿Cómo preserva la mediación la confianza de inversores y la autonomía técnica?"
        }
      ],
      "answer": [
        {
          "en": "We propose establishing an autonomous innovation trust allocated 18% of operating cash flow permanently.",
          "es": "Proponemos crear un fideicomiso de innovación con el 18% del flujo de caja de forma permanente."
        },
        {
          "en": "Dual-class voting shares will ensure technical leadership retains veto power over architectural shifts.",
          "es": "Acciones de doble voto garantizarán que el liderazgo técnico mantenga poder de veto arquitectónico."
        },
        {
          "en": "Both venture partners and engineers have unanimously signed this binding multi-year governance compact.",
          "es": "Tanto inversores como ingenieros han firmado unánimemente este pacto vinculante de gobernanza."
        }
      ]
    }
  },
  "c-teens-elite-9": {
    "topic": "Crisis Leadership & Hostile Press Conferences 🚨",
    "topicEs": "Liderazgo en crisis y rueda de prensa hostil",
    "cues": [
      {
        "icon": "🚨",
        "label": "THE SEVERE INCIDENT?",
        "labelEs": "¿El incidente grave?",
        "questionExample": "A critical firmware malfunction compromised encrypted autonomous transit fleets across three capitals."
      },
      {
        "icon": "🛡️",
        "label": "IMMEDIATE REMEDIATION?",
        "labelEs": "¿Remediación inmediata?",
        "questionExample": "All affected transit modules were grounded within four minutes and transitioned to failsafe manual overrides."
      },
      {
        "icon": "🎤",
        "label": "DEFENDING PUBLIC TRUST?",
        "labelEs": "¿Defender la confianza pública?",
        "questionExample": "We accept full fiduciary accountability, and independent third-party cybersecurity audits have commenced."
      }
    ],
    "roleA": {
      "label": "Chief Executive Officer",
      "labelEs": "Director ejecutivo",
      "action": "Front hostile media conference",
      "actionEs": "Afrontar rueda de prensa hostil",
      "avatar": "🚨"
    },
    "roleB": {
      "label": "Senior Investigative Journalist",
      "labelEs": "Periodista senior",
      "action": "Grill executive leadership",
      "actionEs": "Interrogar al liderazgo",
      "avatar": "🎙️"
    },
    "helpWords": [
      {
        "emoji": "🚨",
        "word": "hostile press conference",
        "translation": "rueda de prensa hostil"
      },
      {
        "emoji": "🛡️",
        "word": "airtight crisis mitigation",
        "translation": "mitigación hermética de crisis"
      },
      {
        "emoji": "🔒",
        "word": "zero data leakage confirmed",
        "translation": "cero fuga de datos confirmada"
      },
      {
        "emoji": "⚖️",
        "word": "full transparent accountability",
        "translation": "total transparencia y responsabilidad"
      },
      {
        "emoji": "🔍",
        "word": "independent forensic audit",
        "translation": "auditoría forense independiente"
      },
      {
        "emoji": "🌟",
        "word": "restoration of public trust",
        "translation": "restauración de la confianza pública"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Why did your autonomous fleet safety sensors fail to detect the simulated cyber disruption during initial testing?",
          "es": "¿Por qué los sensores de la flota no detectaron la interferencia en las pruebas iniciales?"
        },
        {
          "en": "How can the international public trust the safety of your systems following this unprecedented operational outage?",
          "es": "¿Cómo puede el público confiar en la seguridad del sistema tras este corte operativo?"
        },
        {
          "en": "What immediate compensation and security architecture overhaul will your company guarantee to affected cities?",
          "es": "¿Qué indemnización y reforma de seguridad garantizará su empresa a las ciudades afectadas?"
        }
      ],
      "answer": [
        {
          "en": "Our automated failsafe protocol executed flawlessly, bringing every single vehicle to a safe halt with zero injuries.",
          "es": "El protocolo de seguridad funcionó impecablemente, deteniendo los vehículos sin heridos."
        },
        {
          "en": "We are making our complete source code and telemetry logs publicly available for global peer audit today.",
          "es": "Hoy ponemos todo nuestro código fuente y registros a disposición pública para auditoría global."
        },
        {
          "en": "We are establishing a $50 million municipal recovery fund to support rapid transit modernization for all cities.",
          "es": "Creamos un fondo de $50 millones para apoyar la modernización del transporte en todas las ciudades."
        }
      ]
    }
  },
  "c-teens-elite-10": {
    "topic": "Designing a Global Venture: Unit Economics & Scale 📈",
    "topicEs": "Diseño de un emprendimiento global: finanzas y escala",
    "cues": [
      {
        "icon": "📈",
        "label": "CUSTOMER ACQUISITION & LTV?",
        "labelEs": "¿Costo de adquisición y LTV?",
        "questionExample": "Our Customer Acquisition Cost is $12, while our Lifetime Value stands at $480 over three years."
      },
      {
        "icon": "⚙️",
        "label": "VIRAL HOOKS & NETWORK EFFECTS?",
        "labelEs": "¿Efectos de red y viralidad?",
        "questionExample": "Each newly onboarded campus creator invites an average of 4.2 active collaborators within seven days."
      },
      {
        "icon": "🚀",
        "label": "CAPITAL EXPENDITURE & RUNWAY?",
        "labelEs": "¿Inversión de capital y flujo?",
        "questionExample": "With our low burn rate and 84% gross margins, we maintain 24 months of self-sustaining runway."
      }
    ],
    "roleA": {
      "label": "Venture Capital Partner",
      "labelEs": "Socio de capital de riesgo",
      "action": "Scrutinize unit economics & Moat",
      "actionEs": "Evaluar finanzas y ventajas",
      "avatar": "💼"
    },
    "roleB": {
      "label": "Tech Startup Founder",
      "labelEs": "Fundador de startup",
      "action": "Defend financial model & scaling",
      "actionEs": "Defender modelo financiero",
      "avatar": "🚀"
    },
    "helpWords": [
      {
        "emoji": "📈",
        "word": "unit economics & margins",
        "translation": "economía unitaria y márgenes"
      },
      {
        "emoji": "🚀",
        "word": "exponential scaling strategy",
        "translation": "estrategia de escalado exponencial"
      },
      {
        "emoji": "💡",
        "word": "defensible technological moat",
        "translation": "ventaja tecnológica defendible"
      },
      {
        "emoji": "📊",
        "word": "customer lifetime value",
        "translation": "valor de vida del cliente"
      },
      {
        "emoji": "⚡",
        "word": "viral network effects",
        "translation": "efectos de red virales"
      },
      {
        "emoji": "🏆",
        "word": "Series A investment round",
        "translation": "ronda de inversión Serie A"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What proprietary technological moat prevents dominant tech monopolies from copying your platform within months?",
          "es": "¿Qué ventaja técnica impide que los gigantes tecnológicos copien su plataforma en meses?"
        },
        {
          "en": "How does your unit economic model sustain 80%+ gross margins while expanding into emerging markets?",
          "es": "¿Cómo sostiene su modelo márgenes del 80%+ al expandirse a mercados emergentes?"
        },
        {
          "en": "What key performance indicators demonstrate that your viral acquisition engine is truly organic and sustainable?",
          "es": "¿Qué indicadores demuestran que su motor de crecimiento viral es orgánico y sostenible?"
        }
      ],
      "answer": [
        {
          "en": "Our decentralized peer-to-peer compute graph is protected by five granted international algorithmic patents.",
          "es": "Nuestra red computacional descentralizada está protegida por cinco patentes algorítmicas internacionales."
        },
        {
          "en": "Our serverless peer architecture reduces cloud compute overhead to fractions of a cent per active user.",
          "es": "Nuestra arquitectura sin servidor reduce los costos computacionales a fracciones de centavo por usuario."
        },
        {
          "en": "Over 70% of our new signups originate from organic peer invitations, yielding a viral coefficient of 1.4.",
          "es": "Más del 70% de registros provienen de invitaciones entre pares, logrando un coeficiente viral de 1.4."
        }
      ]
    }
  },
  "c-teens-elite-11": {
    "topic": "Level 9 Grand Capstone: Seed Pitch & Keynote 🌟",
    "topicEs": "Gran Desafío Nivel 9: Pitch de inversión y Keynote",
    "cues": [
      {
        "icon": "🌟",
        "label": "THE PARADIGM SHIFT?",
        "labelEs": "¿El cambio de paradigma?",
        "questionExample": "We are dismantling centralized digital monopolization through sovereign open-source quantum computing networks."
      },
      {
        "icon": "🏆",
        "label": "THE TRACTION SHOWCASE?",
        "labelEs": "¿Demostración de tracción?",
        "questionExample": "Over 500,000 active youth builders in 85 nations are currently building decentralized AI dApps on our protocol."
      },
      {
        "icon": "🚀",
        "label": "THE GRAND INVITATION?",
        "labelEs": "¿La gran invitación?",
        "questionExample": "Join us in empowering the next billion creators with sovereign, decentralized technological tools."
      }
    ],
    "roleA": {
      "label": "Lead Venture Capitalist",
      "labelEs": "Inversor de capital líder",
      "action": "Evaluate grand capstone pitch",
      "actionEs": "Evaluar gran pitch final",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "Grand Capstone Founder",
      "labelEs": "Fundador graduado",
      "action": "Deliver world-class visionary keynote",
      "actionEs": "Dar keynote magistral",
      "avatar": "🌟"
    },
    "helpWords": [
      {
        "emoji": "🌟",
        "word": "visionary capstone keynote",
        "translation": "keynote magistral visionario"
      },
      {
        "emoji": "🚀",
        "word": "disrupt global monopolies",
        "translation": "transformar monopolios globales"
      },
      {
        "emoji": "💻",
        "word": "open-source quantum protocol",
        "translation": "protocolo cuántico de código abierto"
      },
      {
        "emoji": "📊",
        "word": "exponential adoption metrics",
        "translation": "métricas de adopción exponencial"
      },
      {
        "emoji": "🤝",
        "word": "global builder community",
        "translation": "comunidad global de desarrolladores"
      },
      {
        "emoji": "🏆",
        "word": "unanimous venture syndication",
        "translation": "sindicación unánime de inversión"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Distinguished founder, what inspired the inception of your decentralized quantum computing protocol?",
          "es": "Distingudo fundador, ¿qué inspiró la creación de su protocolo cuántico descentralizado?"
        },
        {
          "en": "How will your decentralized governance model withstand geopolitical volatility and hostile regulatory scrutiny?",
          "es": "¿Cómo resistirá su modelo de gobernanza la volatilidad geopolítica y regulatoria?"
        },
        {
          "en": "What is your closing vision for the next decade of youth-led global technological revolution?",
          "es": "¿Cuál es su visión final para la próxima década de revolución tecnológica juvenil?"
        }
      ],
      "answer": [
        {
          "en": "We realized that access to supercomputing belonged in the hands of global student innovators, not gatekeepers.",
          "es": "Comprendimos que el acceso a la supercomputación pertenecía a los estudiantes del mundo y no a intermediarios."
        },
        {
          "en": "Our protocol is cryptographic, open-source, and mathematically neutral, ensuring uninterrupted resilience.",
          "es": "Nuestro protocolo es criptográfico, de código abierto y neutral, garantizando total resiliencia."
        },
        {
          "en": "The future does not belong to passive consumers; it belongs to the sovereign creators who dare to build it!",
          "es": "¡El futuro no pertenece a consumidores pasivos; pertenece a los creadores que se atreven a construirlo!"
        }
      ]
    }
  },
  "c-teens-masters-1": {
    "topic": "Oxford-Union Parliamentary Debate 🏛️",
    "topicEs": "Debate parlamentario estilo Oxford-Union",
    "cues": [
      {
        "icon": "🏛️",
        "label": "POINT OF CLARIFICATION?",
        "labelEs": "¿Punto de aclaración?",
        "questionExample": "The honorable member presumes market elasticity, which empirical data unequivocally repudiate."
      },
      {
        "icon": "⚖️",
        "label": "DIALECTICAL REFUTATION?",
        "labelEs": "¿Refutación dialéctica?",
        "questionExample": "Let us dismantle the opposition's core thesis by exposing its internal logical contradiction."
      },
      {
        "icon": "📜",
        "label": "PHILOSOPHICAL CLOSING?",
        "labelEs": "¿Cierre filosófico?",
        "questionExample": "I implore the chamber to reject paternalistic authoritarianism and uphold universal individual autonomy."
      }
    ],
    "roleA": {
      "label": "Prime Minister",
      "labelEs": "Primer Ministro",
      "action": "Lead debate motion",
      "actionEs": "Liderar moción parlamentaria",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "Leader of Opposition",
      "labelEs": "Líder de la oposición",
      "action": "Deliver cross-examination rebuttal",
      "actionEs": "Dar réplica y refutación",
      "avatar": "⚖️"
    },
    "helpWords": [
      {
        "emoji": "🏛️",
        "word": "parliamentary debate motion",
        "translation": "moción de debate parlamentario"
      },
      {
        "emoji": "⚖️",
        "word": "dialectical refutation",
        "translation": "refutación dialéctica"
      },
      {
        "emoji": "📜",
        "word": "point of information",
        "translation": "punto de información"
      },
      {
        "emoji": "🧠",
        "word": "expose logical fallacy",
        "translation": "exponer falacia lógica"
      },
      {
        "emoji": "🗣️",
        "word": "sovereign parliamentary rhetoric",
        "translation": "retórica parlamentaria soberana"
      },
      {
        "emoji": "🏆",
        "word": "acclaimed chamber resolution",
        "translation": "resolución aclamada de la cámara"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Does the Right Honorable Prime Minister contend that algorithmic censorship preserves democratic stability?",
          "es": "¿Sostiene el Honorable Primer Ministro que la censura algorítmica preserva la estabilidad democrática?"
        },
        {
          "en": "How does the opposition resolve the acute paradox between unregulated speech and targeted disinformation?",
          "es": "¿Cómo resuelve la oposición la paradoja entre libre expresión y desinformación dirigida?"
        },
        {
          "en": "Why must this historic chamber divide in favor of enshrining decentralized digital sovereignty into international law?",
          "es": "¿Por qué debe esta cámara votar a favor de consagrar la soberanía digital en el derecho internacional?"
        }
      ],
      "answer": [
        {
          "en": "We affirm that true democracy cannot endure when monopolistic corporate algorithms manipulate public discourse.",
          "es": "Afirmamos que la verdadera democracia no puede perdurar si algoritmos corporativos manipulan el debate público."
        },
        {
          "en": "The opposition confuses regulatory transparency with authoritarian suppression; our motion ensures civic accountability.",
          "es": "La oposición confunde transparencia regulatoria con censura; nuestra moción asegura rendición de cuentas."
        },
        {
          "en": "I beseech this house to divide in favor of human agency, technological sovereignty, and intellectual liberty!",
          "es": "¡Ruego a esta cámara votar a favor de la agencia humana, la soberanía técnica y la libertad intelectual!"
        }
      ]
    }
  },
  "c-teens-masters-2": {
    "topic": "Pop Culture Semiotics & Media Ecology 🎭",
    "topicEs": "Semiótica de la cultura pop y ecología de medios",
    "cues": [
      {
        "icon": "🎭",
        "label": "DECONSTRUCTING THE SIGNIFIER?",
        "labelEs": "¿Deconstruir el significante?",
        "questionExample": "The viral meme operates as a hyper-condensed semiotic signifier reflecting existential youth anxiety."
      },
      {
        "icon": "📱",
        "label": "THE MEDIUM IS THE MESSAGE?",
        "labelEs": "¿El medio es el mensaje?",
        "questionExample": "The algorithmic feed does not merely deliver information; it fundamentally restructures human attention spans."
      },
      {
        "icon": "🌐",
        "label": "MEMETIC TRANSMISSION ECOSYSTEM?",
        "labelEs": "¿Transmisión memética?",
        "questionExample": "Cultural narratives propagate through algorithmic virality much like biological evolutionary replicators."
      }
    ],
    "roleA": {
      "label": "Cultural Theorist",
      "labelEs": "Teórico cultural",
      "action": "Deconstruct modern semiotics",
      "actionEs": "Deconstruir semiótica contemporánea",
      "avatar": "🎭"
    },
    "roleB": {
      "label": "Digital Ethnographer",
      "labelEs": "Etnógrafo digital",
      "action": "Analyze internet subcultures",
      "actionEs": "Analizar subculturas digitales",
      "avatar": "📱"
    },
    "helpWords": [
      {
        "emoji": "🎭",
        "word": "semiotic deconstruction",
        "translation": "deconstrucción semiótica"
      },
      {
        "emoji": "📱",
        "word": "media ecology theory",
        "translation": "teoría de ecología de medios"
      },
      {
        "emoji": "🧠",
        "word": "memetic propagation",
        "translation": "propagación memética"
      },
      {
        "emoji": "🌐",
        "word": "hyper-reality simulation",
        "translation": "simulación de hiperrealidad"
      },
      {
        "emoji": "💡",
        "word": "deconstruct cultural mythologies",
        "translation": "deconstruir mitologías culturales"
      },
      {
        "emoji": "✨",
        "word": "contemporary youth vernacular",
        "translation": "lenguaje juvenil contemporáneo"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How does the proliferation of algorithmic micro-content alter the semiotic decoding mechanisms of Generation Z?",
          "es": "¿Cómo altera el microcontenido algorítmico los mecanismos de decodificación semiótica de la Generación Z?"
        },
        {
          "en": "In what manner do digital memes serve as decentralized instruments of political satire and counter-cultural resistance?",
          "es": "¿De qué manera los memes digitales funcionan como instrumentos de sátira y resistencia cultural?"
        },
        {
          "en": "How does Marshall McLuhan's 'the medium is the message' manifest in today's immersive spatial computing environments?",
          "es": "¿Cómo se manifiesta 'el medio es el mensaje' en los entornos actuales de computación espacial?"
        }
      ],
      "answer": [
        {
          "en": "Memetic humor is not trivial entertainment; it is an encrypted collective coping mechanism for systemic crises.",
          "es": "El humor memético no es entretenimiento trivial; es un mecanismo colectivo ante crisis sistémicas."
        },
        {
          "en": "Through recursive irony and multi-layered signifiers, youth subcultures bypass traditional media gatekeeping.",
          "es": "A través de ironía recursiva y significantes múltiples, los jóvenes evitan intermediarios de medios tradicionales."
        },
        {
          "en": "Spatial computing transforms the user from an external observer into an embodied participant within the medium itself.",
          "es": "La computación espacial convierte al usuario de observador externo en participante inmerso dentro del medio."
        }
      ]
    }
  },
  "c-teens-masters-3": {
    "topic": "Ivy League Socratic Cross-Examination 🏛️",
    "topicEs": "Interrogatorio socrático estilo Ivy League",
    "cues": [
      {
        "icon": "🏛️",
        "label": "QUESTIONING FIRST PRINCIPLES?",
        "labelEs": "¿Cuestionar primeros principios?",
        "questionExample": "What is the ontological foundation of justice if laws are derived purely from majoritarian consensus?"
      },
      {
        "icon": "⚖️",
        "label": "SOCRATIC APORIA?",
        "labelEs": "¿Aporía socrática?",
        "questionExample": "If an action is virtuous solely because society praises it, does virtue possess any intrinsic value?"
      },
      {
        "icon": "🧠",
        "label": "DIALECTICAL SYNTHESIS?",
        "labelEs": "¿Síntesis dialéctica?",
        "questionExample": "We must transcend utilitarian calculus by grounding human rights in irreducible deontological dignity."
      }
    ],
    "roleA": {
      "label": "Philosophy Professor",
      "labelEs": "Profesor de filosofía",
      "action": "Conduct rigorous Socratic inquiry",
      "actionEs": "Hacer interrogatorio socrático",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "Senior Honors Scholar",
      "labelEs": "Estudiante de honor",
      "action": "Defend moral philosophy thesis",
      "actionEs": "Defender filosofía moral",
      "avatar": "🧠"
    },
    "helpWords": [
      {
        "emoji": "🏛️",
        "word": "Socratic cross-examination",
        "translation": "interrogatorio socrático"
      },
      {
        "emoji": "⚖️",
        "word": "ontological first principles",
        "translation": "primeros principios ontológicos"
      },
      {
        "emoji": "🧠",
        "word": "deontological moral philosophy",
        "translation": "filosofía moral deontológica"
      },
      {
        "emoji": "💡",
        "word": "transcend utilitarian calculus",
        "translation": "trascender el cálculo utilitarista"
      },
      {
        "emoji": "📜",
        "word": "epistemic humility",
        "translation": "humildad epistémica"
      },
      {
        "emoji": "🎓",
        "word": "philosophical rigor & dialectics",
        "translation": "rigor filosófico y dialéctica"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "If moral virtues are culturally contingent, how can international tribunals legitimately condemn crimes against humanity?",
          "es": "¿Si la moral es contingente, cómo pueden los tribunales internacionales juzgar crímenes de lesa humanidad?"
        },
        {
          "en": "Does technological utilitarianism justify sacrificing individual privacy for the collective optimization of society?",
          "es": "¿Justifica el utilitarismo tecnológico sacrificar la privacidad por la optimización colectiva?"
        },
        {
          "en": "How does your dialectical framework reconcile deterministic artificial intelligence with human moral autonomy?",
          "es": "¿Cómo concilia su marco dialéctico la IA determinista con la autonomía moral humana?"
        }
      ],
      "answer": [
        {
          "en": "Universal human rights are not cultural inventions; they are self-evident deontological imperatives of reason.",
          "es": "Los derechos humanos no son inventos culturales; son imperativos deontológicos evidentes de la razón."
        },
        {
          "en": "Utilitarianism collapses when it treats human consciousness as a fungible variable in an efficiency equation.",
          "es": "El utilitarismo colapsa cuando trata la conciencia humana como una variable canjeable de eficiencia."
        },
        {
          "en": "Human moral autonomy remains uniquely irreducible because algorithms compute probabilities, but humans bear ethical duty.",
          "es": "La autonomía humana es irreductible: los algoritmos calculan probabilidades, pero los humanos tienen deber ético."
        }
      ]
    }
  },
  "c-teens-masters-4": {
    "topic": "Global TED Keynote: High-Impact Storytelling 🎙️",
    "topicEs": "Keynote internacional estilo TED: Narrativa de impacto",
    "cues": [
      {
        "icon": "🎙️",
        "label": "THE VIVID INCITING INCIDENT?",
        "labelEs": "¿El incidente detonante?",
        "questionExample": "Ten years ago, standing under a starless smog-choked sky, I made a promise that seemed impossible."
      },
      {
        "icon": "💡",
        "label": "THE CORE IDEA WORTH SPREADING?",
        "labelEs": "¿La idea que vale la pena difundir?",
        "questionExample": "True innovation occurs not when we build smarter machines, but when we build kinder institutions."
      },
      {
        "icon": "🔥",
        "label": "THE CALL TO TRANSCENDENCE?",
        "labelEs": "¿El llamado a la trascendencia?",
        "questionExample": "Do not wait for leaders to emerge from the horizon; look in the mirror and become the catalyst our world awaits."
      }
    ],
    "roleA": {
      "label": "TED Keynote Speaker",
      "labelEs": "Conferencista TED",
      "action": "Deliver transformative address",
      "actionEs": "Dar conferencia magistral",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Global Audience Member",
      "labelEs": "Miembro de la audiencia",
      "action": "Engage with profound themes",
      "actionEs": "Conectar con temas profundos",
      "avatar": "✨"
    },
    "helpWords": [
      {
        "emoji": "🎙️",
        "word": "transformative TED keynote",
        "translation": "keynote transformador estilo TED"
      },
      {
        "emoji": "💡",
        "word": "ideas worth spreading",
        "translation": "ideas dignas de difundir"
      },
      {
        "emoji": "🌟",
        "word": "narrative vulnerability & power",
        "translation": "vulnerabilidad narrativa y poder"
      },
      {
        "emoji": "🔥",
        "word": "catalyst for systemic transformation",
        "translation": "catalizador de transformación"
      },
      {
        "emoji": "🌍",
        "word": "universal human resonance",
        "translation": "resonancia humana universal"
      },
      {
        "emoji": "👏",
        "word": "standing ovation finale",
        "translation": "ovación de pie final"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What transformative personal turning point illuminated the central insight of your global keynote?",
          "es": "¿Qué punto de inflexión personal iluminó la idea central de su conferencia global?"
        },
        {
          "en": "How does vulnerability in public storytelling bridge ideological divides and mobilize collective action?",
          "es": "¿Cómo une la vulnerabilidad narrativa las brechas ideológicas y moviliza la acción colectiva?"
        },
        {
          "en": "What singular visionary charge do you leave in the hearts of millions listening across every continent?",
          "es": "¿Qué mandato visionario deja en los corazones de millones que escuchan en todos los continentes?"
        }
      ],
      "answer": [
        {
          "en": "I discovered that true breakthroughs begin not in sterile laboratories, but in moments of shared human empathy.",
          "es": "Descubrí que los grandes avances no nacen en laboratorios fríos, sino en momentos de empatía compartida."
        },
        {
          "en": "When we dare to share our failures with unvarnished honesty, we dismantle the illusion of perfection.",
          "es": "Cuando nos atrevemos a compartir fracasos con honestidad, derribamos la ilusión de perfección."
        },
        {
          "en": "Go forth not merely to make a living, but to architect a world where every child can dare to dream without fear!",
          "es": "¡Vayan no solo a ganarse la vida, sino a construir un mundo donde cada niño se atreva a soñar sin miedo!"
        }
      ]
    }
  },
  "c-teens-masters-5": {
    "topic": "Geopolitical Strategy & Multilateral Summits 🌐",
    "topicEs": "Estrategia geopolítica y cumbres multilaterales",
    "cues": [
      {
        "icon": "🌐",
        "label": "STRATEGIC EQUILIBRIUM?",
        "labelEs": "¿Equilibrio estratégico?",
        "questionExample": "We must recalibrate bilateral security architectures to prevent destabilization in key maritime straits."
      },
      {
        "icon": "🤝",
        "label": "TRADE & SEMICONDUCTOR CORRIDORS?",
        "labelEs": "¿Corredores comerciales?",
        "questionExample": "Securing resilient rare-earth supply chains requires cross-continental sovereign treaties."
      },
      {
        "icon": "🛡️",
        "label": "MULTILATERAL NON-PROLIFERATION?",
        "labelEs": "¿Tratados de no proliferación?",
        "questionExample": "A comprehensive cybersecurity non-aggression pact is indispensable to protect global financial infrastructure."
      }
    ],
    "roleA": {
      "label": "Chief National Security Advisor",
      "labelEs": "Consejero de seguridad",
      "action": "Formulate grand strategy",
      "actionEs": "Formular gran estrategia",
      "avatar": "🌐"
    },
    "roleB": {
      "label": "Plenipotentiary Ambassador",
      "labelEs": "Embajador plenipotenciario",
      "action": "Negotiate sovereign treaties",
      "actionEs": "Negociar tratados soberanos",
      "avatar": "🏛️"
    },
    "helpWords": [
      {
        "emoji": "🌐",
        "word": "grand geopolitical strategy",
        "translation": "gran estrategia geopolítica"
      },
      {
        "emoji": "🤝",
        "word": "multilateral non-aggression pact",
        "translation": "pacto multilateral de no agresión"
      },
      {
        "emoji": "🛡️",
        "word": "semiconductor supply chain sovereignty",
        "translation": "soberanía de semiconductores"
      },
      {
        "emoji": "🌊",
        "word": "maritime corridor stability",
        "translation": "estabilidad de corredores marítimos"
      },
      {
        "emoji": "📈",
        "word": "economic statecraft & diplomacy",
        "translation": "estrategia económica y diplomacia"
      },
      {
        "emoji": "🕊️",
        "word": "sustainable geopolitical equilibrium",
        "translation": "equilibrio geopolítico sostenible"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How can multilateral institutions deter unilateral maritime aggression while maintaining diplomatic communication channels?",
          "es": "¿Cómo pueden las instituciones multilaterales disuadir agresiones marítimas manteniendo el diálogo?"
        },
        {
          "en": "What strategic statecraft mechanisms ensure energy security during acute cross-border geopolitical fragmentation?",
          "es": "¿Qué mecanismos de estrategia estatal aseguran la energía durante la fragmentación geopolítica?"
        },
        {
          "en": "How does your strategic doctrine balance sovereign deterrence with cooperative climate security initiatives?",
          "es": "¿Cómo equilibra su doctrina la disuasión soberana con la cooperación en seguridad climática?"
        }
      ],
      "answer": [
        {
          "en": "Deterrence is most potent when combined with transparent bilateral military de-confliction hotlines.",
          "es": "La disuasión es más efectiva combinada con canales transparentes de comunicación militar."
        },
        {
          "en": "By diversifying semiconductor foundries and establishing strategic mineral reserves, we neutralize economic leverage.",
          "es": "Diversificando fundiciones de microchips y reservas de minerales, neutralizamos presiones económicas."
        },
        {
          "en": "Security in the 21st century is indivisible: climate collapse poses as severe an existential threat as armed conflict.",
          "es": "La seguridad del siglo XXI es indivisible: el colapso climático es tan grave como el conflicto armado."
        }
      ]
    }
  },
  "c-teens-masters-6": {
    "topic": "Literary Critique & Cinematic Deconstruction 🎬",
    "topicEs": "Crítica literaria y deconstrucción cinematográfica",
    "cues": [
      {
        "icon": "🎬",
        "label": "ALLEGORICAL SUBTEXT?",
        "labelEs": "¿Subtexto alegórico?",
        "questionExample": "The protagonist's spiral into psychological delusion mirrors the moral decay of industrialized society."
      },
      {
        "icon": "📖",
        "label": "NARRATIVE ARCHITECTURE?",
        "labelEs": "¿Arquitectura narrativa?",
        "questionExample": "The non-linear temporal montage subverts traditional Aristotelian storytelling paradigms."
      },
      {
        "icon": "🎭",
        "label": "MOTIFS & AESTHETIC PALETTE?",
        "labelEs": "¿Motivos y paleta estética?",
        "questionExample": "Chiaroscuro lighting and chromatic dissonance externalize the internal alienation of modern existentialism."
      }
    ],
    "roleA": {
      "label": "Distinguished Film Critic",
      "labelEs": "Crítico de cine distinguido",
      "action": "Deliver masterclass analysis",
      "actionEs": "Dictar análisis magistral",
      "avatar": "🎬"
    },
    "roleB": {
      "label": "Literature Professor",
      "labelEs": "Profesor de literatura",
      "action": "Debate motifs & hermeneutics",
      "actionEs": "Debatir motivos y hermenéutica",
      "avatar": "📖"
    },
    "helpWords": [
      {
        "emoji": "🎬",
        "word": "cinematic deconstruction masterclass",
        "translation": "análisis de deconstrucción cinematográfica"
      },
      {
        "emoji": "📖",
        "word": "hermeneutic literary critique",
        "translation": "crítica literaria hermenéutica"
      },
      {
        "emoji": "🎭",
        "word": "chiaroscuro visual motifs",
        "translation": "motivos visuales en claroscuro"
      },
      {
        "emoji": "🧠",
        "word": "existentialist philosophical subtext",
        "translation": "subtexto filosófico existencialista"
      },
      {
        "emoji": "🎨",
        "word": "avant-garde narrative structure",
        "translation": "estructura narrativa vanguardista"
      },
      {
        "emoji": "⭐",
        "word": "peerless artistic triumph",
        "translation": "triunfo artístico inigualable"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How does the director's utilization of chiaroscuro cinematography externalize the protagonist's moral ambiguity?",
          "es": "¿Cómo la cinematografía en claroscuro externaliza la ambigüedad moral del protagonista?"
        },
        {
          "en": "In what manner does the novel's fragmented epistolary structure subvert the omniscient narrator tradition?",
          "es": "¿De qué manera la estructura epistolar fragmentada subvierte la tradición del narrador omnisciente?"
        },
        {
          "en": "What universal human dilemma is illuminated through the film's haunting allegorical climax?",
          "es": "¿Qué dilema humano universal se ilumina en el sobrecogedor clímax alegórico del filme?"
        }
      ],
      "answer": [
        {
          "en": "The stark contrast between shadow and radiance physically manifests the fractured conscience of the protagonist.",
          "es": "El contraste entre sombra y resplandor manifiesta la conciencia fragmentada del protagonista."
        },
        {
          "en": "By interweaving contradictory diary entries, the text forces the reader to participate in reconstructing truth.",
          "es": "Al intercalar diarios contradictorios, el texto obliga al lector a reconstruir activamente la verdad."
        },
        {
          "en": "The final sequence underscores that true liberation requires embracing vulnerability over tyrannical control.",
          "es": "La secuencia final subraya que la verdadera liberación exige abrazar la vulnerabilidad sobre el control tiránico."
        }
      ]
    }
  },
  "c-teens-masters-7": {
    "topic": "Rhodes & Fulbright Fellowship Committee Defense 🎓",
    "topicEs": "Defensa ante el comité de becas Rhodes y Fulbright",
    "cues": [
      {
        "icon": "🎓",
        "label": "INTELLECTUAL VISION & RIGOR?",
        "labelEs": "¿Visión y rigor intelectual?",
        "questionExample": "My research proposes quantum biological algorithms to decrypt protein misfolding in Alzheimer's disease."
      },
      {
        "icon": "🌍",
        "label": "CROSS-BORDER CIVIC PURPOSE?",
        "labelEs": "¿Propósito cívico internacional?",
        "questionExample": "I intend to bridge Oxford's computational laboratories with open-source medical access in developing nations."
      },
      {
        "icon": "🌟",
        "label": "MORAL COURAGE & LEADERSHIP?",
        "labelEs": "¿Valor moral y liderazgo?",
        "questionExample": "True scholarship demands not merely publishing papers, but deploying science to alleviate human suffering."
      }
    ],
    "roleA": {
      "label": "Fellowship Committee Chair",
      "labelEs": "Presidente del comité",
      "action": "Conduct Rhodes / Fulbright defense",
      "actionEs": "Evaluar beca Rhodes / Fulbright",
      "avatar": "🎓"
    },
    "roleB": {
      "label": "Fellowship Laureate",
      "labelEs": "Laureado de beca",
      "action": "Defend lifetime vision & purpose",
      "actionEs": "Defender visión de vida",
      "avatar": "🌟"
    },
    "helpWords": [
      {
        "emoji": "🎓",
        "word": "Rhodes & Fulbright fellowship",
        "translation": "beca Rhodes y Fulbright"
      },
      {
        "emoji": "🌟",
        "word": "transformative scholarship",
        "translation": "excelencia académica transformadora"
      },
      {
        "emoji": "🔬",
        "word": "quantum computational biology",
        "translation": "biología computacional cuántica"
      },
      {
        "emoji": "🌍",
        "word": "cross-border humanitarian impact",
        "translation": "impacto humanitario internacional"
      },
      {
        "emoji": "💡",
        "word": "moral leadership & integrity",
        "translation": "liderazgo moral e integridad"
      },
      {
        "emoji": "🏆",
        "word": "unanimous election as scholar",
        "translation": "elección unánime como becario"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What moral and intellectual conviction drives your proposed doctoral research at the University of Oxford?",
          "es": "¿Qué convicción moral e intelectual impulsa su investigación doctoral en la Universidad de Oxford?"
        },
        {
          "en": "How will your academic scholarship directly confront structural inequality and humanitarian crises globally?",
          "es": "¿Cómo enfrentará su labor académica la desigualdad estructural y las crisis humanitarias?"
        },
        {
          "en": "Why does your character embody the Rhodes ideals of moral courage, public devotion, and intellectual rigor?",
          "es": "¿Por qué su carácter personifica el valor moral, la vocación pública y el rigor intelectual?"
        }
      ],
      "answer": [
        {
          "en": "I am driven by the unshakeable conviction that cutting-edge biomedical technology must be universally accessible.",
          "es": "Me impulsa la convicción inquebrantable de que la biomedicina avanzada debe ser universalmente accesible."
        },
        {
          "en": "My doctoral project integrates open-source patent licensing to deliver affordable therapies to the Global South.",
          "es": "Mi proyecto doctoral integra licencias de código abierto para llevar terapias accesibles al Sur Global."
        },
        {
          "en": "I have dedicated my youth to public service, proving that scientific brilliance finds its highest purpose in empathy.",
          "es": "He dedicado mi juventud al servicio público, probando que la ciencia halla su mayor propósito en la empatía."
        }
      ]
    }
  },
  "c-teens-masters-8": {
    "topic": "Investigative Video Essays & Audio Podcasting 🎙️",
    "topicEs": "Ensayos audiovisuales de investigación y podcasting",
    "cues": [
      {
        "icon": "🎙️",
        "label": "THE THESIS OF THE INVESTIGATION?",
        "labelEs": "¿Tesis de la investigación?",
        "questionExample": "We uncover how offshore algorithmic dark pools manipulate global digital commodity trading."
      },
      {
        "icon": "📊",
        "label": "WHISTLEBLOWER TESTIMONY & DATA?",
        "labelEs": "¿Testimonios y datos?",
        "questionExample": "Encrypted leaks corroborate that automated high-frequency algorithms deliberately trigger artificial panics."
      },
      {
        "icon": "🎬",
        "label": "CINEMATIC AUDIO STORYTELLING?",
        "labelEs": "¿Narrativa de audio cinematográfica?",
        "questionExample": "Through spatial binaural sound design and archival audio, we bring complex financial malfeasance to light."
      }
    ],
    "roleA": {
      "label": "Investigative Documentarian",
      "labelEs": "Documentalista",
      "action": "Host investigative video essay",
      "actionEs": "Presentar ensayo de investigación",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Financial Whistleblower",
      "labelEs": "Denunciante",
      "action": "Expose systemic corruption",
      "actionEs": "Exponer corrupción sistémica",
      "avatar": "📁"
    },
    "helpWords": [
      {
        "emoji": "🎙️",
        "word": "investigative audio documentary",
        "translation": "documental sonoro de investigación"
      },
      {
        "emoji": "📊",
        "word": "forensic financial data",
        "translation": "datos forenses financieros"
      },
      {
        "emoji": "📁",
        "word": "whistleblower evidence",
        "translation": "evidencia de denunciantes"
      },
      {
        "emoji": "🎬",
        "word": "cinematic sound design",
        "translation": "diseño sonoro cinematográfico"
      },
      {
        "emoji": "🔍",
        "word": "expose institutional corruption",
        "translation": "exponer corrupción institucional"
      },
      {
        "emoji": "✨",
        "word": "Peabody Award journalism",
        "translation": "periodismo galardonado con premio Peabody"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What classified forensic evidence substantiates your video essay's explosive allegations of market manipulation?",
          "es": "¿Qué evidencia forense respalda las explosivas acusaciones de manipulación de mercado de su ensayo?"
        },
        {
          "en": "How did you protect the digital anonymity and physical safety of the corporate whistleblower during production?",
          "es": "¿Cómo protegió el anonimato digital y seguridad física del denunciante durante la producción?"
        },
        {
          "en": "What journalistic and cinematic techniques transform dry financial telemetry into a gripping investigative narrative?",
          "es": "¿Qué técnicas periodísticas transforman datos financieros en una narrativa de investigación atrapante?"
        }
      ],
      "answer": [
        {
          "en": "We cross-referenced six million transaction timestamps with leaked internal chat logs and proprietary server code.",
          "es": "Cruzamos seis millones de marcas de tiempo de transacciones con registros de chat internos y código."
        },
        {
          "en": "All communications were conducted via air-gapped cryptographic hardware with encrypted voice alterations.",
          "es": "Todas las comunicaciones se realizaron mediante hardware aislado con alteración de voz cifrada."
        },
        {
          "en": "By humanizing the victims of predatory trading and scoring with dynamic orchestral tension, the story grips audiences.",
          "es": "Al humanizar a las víctimas de operaciones abusivas y usar tensión orquestal, la historia atrapa al público."
        }
      ]
    }
  },
  "c-teens-masters-9": {
    "topic": "Mega-Trends: AI Superintelligence & Bioethics 🧬",
    "topicEs": "Megatendencias: Superinteligencia artificial y bioética",
    "cues": [
      {
        "icon": "🧬",
        "label": "GENOME EDITING & TRANSHUMANISM?",
        "labelEs": "¿Edición genética y transhumanismo?",
        "questionExample": "CRISPR germline modifications force us to redefine the very boundaries of biological human identity."
      },
      {
        "icon": "🤖",
        "label": "ARTIFICIAL GENERAL INTELLIGENCE?",
        "labelEs": "¿Inteligencia Artificial General?",
        "questionExample": "The alignment problem is not merely computational; it is humanity's most urgent existential ethical challenge."
      },
      {
        "icon": "🌐",
        "label": "THE COSMIC HORIZON?",
        "labelEs": "¿El horizonte cósmico?",
        "questionExample": "We stand at the precipice of an intelligence explosion that will dictate the trajectory of consciousness in our galaxy."
      }
    ],
    "roleA": {
      "label": "Chief Bioethicist",
      "labelEs": "Bioeticista principal",
      "action": "Debate existential technology",
      "actionEs": "Debatir tecnología existencial",
      "avatar": "🧬"
    },
    "roleB": {
      "label": "AI Safety Architect",
      "labelEs": "Arquitecto de seguridad de IA",
      "action": "Present alignment framework",
      "actionEs": "Presentar marco de alineación",
      "avatar": "🤖"
    },
    "helpWords": [
      {
        "emoji": "🧬",
        "word": "CRISPR germline bioethics",
        "translation": "bioética de edición genética CRISPR"
      },
      {
        "emoji": "🤖",
        "word": "AGI alignment problem",
        "translation": "problema de alineación de AGI"
      },
      {
        "emoji": "🌌",
        "word": "cosmic evolution of consciousness",
        "translation": "evolución cósmica de la conciencia"
      },
      {
        "emoji": "⚖️",
        "word": "existential technological risk",
        "translation": "riesgo tecnológico existencial"
      },
      {
        "emoji": "🧠",
        "word": "transhumanist philosophy",
        "translation": "filosofía transhumanista"
      },
      {
        "emoji": "🌟",
        "word": "intergenerational human destiny",
        "translation": "destino humano intergeneracional"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How must global ethical frameworks regulate germline genetic editing to prevent the emergence of biological caste systems?",
          "es": "¿Cómo deben regular los marcos éticos la edición genética para evitar castas biológicas?"
        },
        {
          "en": "What formal mathematical and moral protocols ensure that Artificial Superintelligence remains forever aligned with human flourishing?",
          "es": "¿Qué protocolos matemáticos y morales garantizan que la Superinteligencia se alinee con el florecimiento humano?"
        },
        {
          "en": "As humanity approaches technological singularity, how do we preserve the sacred essence of human empathy and art?",
          "es": "¿Al acercarse la singularidad tecnológica, cómo preservamos la esencia sagrada de la empatía y el arte?"
        }
      ],
      "answer": [
        {
          "en": "We must institute universal bio-conservancy treaties prohibiting commercial germline enhancements without global consensus.",
          "es": "Debemos fijar tratados universales que prohíban mejoras genéticas comerciales sin consenso global."
        },
        {
          "en": "AI alignment must be grounded in provably verifiable recursive ethical constraints and multi-agent constitutional norms.",
          "es": "La alineación de IA debe basarse en restricciones éticas verificables y normas constitucionales."
        },
        {
          "en": "No matter how vast artificial intellect becomes, the capacity to love, suffer, and create meaning remains our cosmic spark.",
          "es": "Por inmenso que sea el intelecto artificial, la capacidad de amar y dar significado sigue siendo nuestra chispa."
        }
      ]
    }
  },
  "c-teens-masters-10": {
    "topic": "Level 10 Grand Masters Capstone: C2 Mastery 👑",
    "topicEs": "Gran Desafío Nivel 10: Maestría C2 Absoluta",
    "cues": [
      {
        "icon": "👑",
        "label": "THE PINNACLE OF FLUENCY?",
        "labelEs": "¿La cúspide de la fluidez?",
        "questionExample": "Fluency is not merely grammatical perfection; it is the sovereign power to inspire, persuade, and transform hearts globally."
      },
      {
        "icon": "🌍",
        "label": "THE LIFETIME CREATIVE COMMITMENT?",
        "labelEs": "¿El compromiso creativo de por vida?",
        "questionExample": "I pledge to deploy mastery of the English language to dismantle injustice, champion science, and unite humanity across divides."
      },
      {
        "icon": "🏆",
        "label": "THE GRAND MASTERS COMMENCEMENT?",
        "labelEs": "¿La consagración de Gran Maestro?",
        "questionExample": "Having mastered every nuance from phonetics to dialectical philosophy, I step forth as an articulate global leader."
      }
    ],
    "roleA": {
      "label": "Grand Chancellor",
      "labelEs": "Gran Canciller",
      "action": "Confer Grand Master Laureate",
      "actionEs": "Otorgar lauro de Gran Maestro",
      "avatar": "🏛️"
    },
    "roleB": {
      "label": "Grand Master Laureate",
      "labelEs": "Laureado Gran Maestro",
      "action": "Deliver final C2 coronation oration",
      "actionEs": "Dar discurso final de graduación C2",
      "avatar": "👑"
    },
    "helpWords": [
      {
        "emoji": "👑",
        "word": "C2 absolute fluency mastery",
        "translation": "maestría absoluta de fluidez C2"
      },
      {
        "emoji": "🏛️",
        "word": "Grand Master Laureate",
        "translation": "laureado como Gran Maestro"
      },
      {
        "emoji": "🌍",
        "word": "sovereign articulate leadership",
        "translation": "liderazgo articulado soberano"
      },
      {
        "emoji": "✨",
        "word": "transformative oratorical power",
        "translation": "poder oratorio transformador"
      },
      {
        "emoji": "🧠",
        "word": "dialectical synthesis of knowledge",
        "translation": "síntesis dialéctica del conocimiento"
      },
      {
        "emoji": "🏆",
        "word": "eternal legacy of eloquence",
        "translation": "legado eterno de elocuencia"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Distinguished Scholar, reflect upon your extraordinary trajectory from foundational beginnings to absolute C2 bilingual mastery.",
          "es": "Distingudo académico, reflexione sobre su trayectoria desde los inicios hasta la maestría C2 absoluta."
        },
        {
          "en": "How will you deploy your articulate oratorical power and intellectual depth to impact civilization on the global stage?",
          "es": "¿Cómo empleará su poder oratorio y profundidad intelectual para impactar a la civilización?"
        },
        {
          "en": "What final sovereign testament do you deliver to mark your historic coronation as a Grand Master of the English language?",
          "es": "¿Qué testimonio final soberano proclama para sellar su coronación como Gran Maestro del inglés?"
        }
      ],
      "answer": [
        {
          "en": "I began this journey learning simple greetings; today, I stand commanding the highest registers of philosophy and diplomacy.",
          "es": "Comencé este camino aprendiendo saludos simples; hoy domino los registros más altos de filosofía y diplomacia."
        },
        {
          "en": "I shall wield language not as an instrument of vanity, but as a scalpel of truth and a torch of universal enlightenment.",
          "es": "Empuñaré el idioma no por vanidad, sino como bisturí de la verdad y antorcha de iluminación universal."
        },
        {
          "en": "I accept this Grand Masters laurel with profound humility, boundless ambition, and an eternal commitment to lead with wisdom!",
          "es": "¡Acepto este lauro de Gran Maestro con profunda humildad, ambición sin límites y el compromiso eterno de liderar!"
        }
      ]
    }
  },
  "c-teens-basic-zero-1": {
    "topic": "Meet a New Classmate 👋",
    "topicEs": "Conoce a un nuevo compañero",
    "cues": [
      {
        "icon": "👋",
        "label": "GREET & NAME",
        "labelEs": "¿Saludo y nombre?",
        "questionExample": "Hi! What's your name?"
      },
      {
        "icon": "😊",
        "label": "HOW ARE YOU?",
        "labelEs": "¿Cómo estás?",
        "questionExample": "How are you today?"
      },
      {
        "icon": "✌️",
        "label": "GOODBYE",
        "labelEs": "¿Despedida?",
        "questionExample": "Nice to meet you! See you later!"
      }
    ],
    "roleA": {
      "label": "Student 1",
      "labelEs": "Estudiante 1",
      "action": "Greet & Ask",
      "actionEs": "Saludar y preguntar",
      "avatar": "👦"
    },
    "roleB": {
      "label": "Student 2",
      "labelEs": "Estudiante 2",
      "action": "Introduce & Reply",
      "actionEs": "Presentarse y responder",
      "avatar": "👧"
    },
    "helpWords": [
      {
        "emoji": "👋",
        "word": "Hi / Hello",
        "translation": "hola"
      },
      {
        "emoji": "✨",
        "word": "What's your name?",
        "translation": "¿cómo te llamas?"
      },
      {
        "emoji": "🏷️",
        "word": "My name is...",
        "translation": "mi nombre es..."
      },
      {
        "emoji": "😊",
        "word": "How are you?",
        "translation": "¿cómo estás?"
      },
      {
        "emoji": "🔥",
        "word": "I'm great / fine",
        "translation": "estoy genial / bien"
      },
      {
        "emoji": "✌️",
        "word": "Nice to meet you!",
        "translation": "¡mucho gusto!"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Hi! What is your name?",
          "es": "¡Hola! ¿Cómo te llamas?"
        },
        {
          "en": "How are you doing today?",
          "es": "¿Cómo estás hoy?"
        },
        {
          "en": "Nice to meet you! See you later!",
          "es": "¡Mucho gusto! ¡Hasta luego!"
        }
      ],
      "answer": [
        {
          "en": "Hey! My name is Alex. And you?",
          "es": "¡Hola! Mi nombre es Alex. ¿Y tú?"
        },
        {
          "en": "I'm great, thanks for asking!",
          "es": "¡Estoy genial, gracias por preguntar!"
        },
        {
          "en": "Nice to meet you too! Bye!",
          "es": "¡Mucho gusto también! ¡Adiós!"
        }
      ]
    }
  },
  "c-teens-basic-zero-2": {
    "topic": "Ask About Age & Birthdays 🎂",
    "topicEs": "Pregunta sobre edad y cumpleaños",
    "cues": [
      {
        "icon": "🎂",
        "label": "HOW OLD?",
        "labelEs": "¿Cuántos años tienes?",
        "questionExample": "How old are you?"
      },
      {
        "icon": "📅",
        "label": "BIRTHDAY MONTH?",
        "labelEs": "¿En qué mes cumples?",
        "questionExample": "When is your birthday?"
      },
      {
        "icon": "🔢",
        "label": "LUCKY NUMBER?",
        "labelEs": "¿Cuál es tu número?",
        "questionExample": "What is your lucky number?"
      }
    ],
    "roleA": {
      "label": "Classmate A",
      "labelEs": "Compañero A",
      "action": "Ask age & date",
      "actionEs": "Preguntar edad y fecha",
      "avatar": "🙋‍♂️"
    },
    "roleB": {
      "label": "Classmate B",
      "labelEs": "Compañero B",
      "action": "Tell age & date",
      "actionEs": "Decir edad y fecha",
      "avatar": "🎉"
    },
    "helpWords": [
      {
        "emoji": "🎂",
        "word": "years old",
        "translation": "años de edad"
      },
      {
        "emoji": "📅",
        "word": "birthday",
        "translation": "cumpleaños"
      },
      {
        "emoji": "🗓️",
        "word": "January / May",
        "translation": "enero / mayo"
      },
      {
        "emoji": "🔢",
        "word": "lucky number",
        "translation": "número de la suerte"
      },
      {
        "emoji": "🎈",
        "word": "party & cake",
        "translation": "fiesta y pastel"
      },
      {
        "emoji": "✨",
        "word": "fourteen / fifteen",
        "translation": "14 / 15"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How old are you this year?",
          "es": "¿Cuántos años tienes este año?"
        },
        {
          "en": "When is your birthday?",
          "es": "¿Cuándo es tu cumpleaños?"
        },
        {
          "en": "What is your favorite number?",
          "es": "¿Cuál es tu número favorito?"
        }
      ],
      "answer": [
        {
          "en": "I am 14 years old.",
          "es": "Tengo 14 años."
        },
        {
          "en": "My birthday is in October!",
          "es": "¡Mi cumpleaños es en octubre!"
        },
        {
          "en": "My lucky number is seven.",
          "es": "Mi número de la suerte es el siete."
        }
      ]
    }
  },
  "c-teens-basic-zero-3": {
    "topic": "Body Parts & Action Moves 🏃‍♂️",
    "topicEs": "Partes del cuerpo y movimientos",
    "cues": [
      {
        "icon": "👀",
        "label": "BODY PART?",
        "labelEs": "¿Qué parte del cuerpo?",
        "questionExample": "Touch your head and shoulders!"
      },
      {
        "icon": "⚡",
        "label": "ACTION MOVE?",
        "labelEs": "¿Qué acción puedes hacer?",
        "questionExample": "Can you jump, run, or dance?"
      },
      {
        "icon": "💪",
        "label": "SKILL?",
        "labelEs": "¿Qué habilidad tienes?",
        "questionExample": "What action sport do you like?"
      }
    ],
    "roleA": {
      "label": "Coach",
      "labelEs": "Entrenador",
      "action": "Give move command",
      "actionEs": "Dar comando",
      "avatar": "🏃"
    },
    "roleB": {
      "label": "Athlete",
      "labelEs": "Atleta",
      "action": "Perform move",
      "actionEs": "Hacer movimiento",
      "avatar": "🤸"
    },
    "helpWords": [
      {
        "emoji": "👀",
        "word": "eyes & face",
        "translation": "ojos y cara"
      },
      {
        "emoji": "✋",
        "word": "hands & arms",
        "translation": "manos y brazos"
      },
      {
        "emoji": "🦵",
        "word": "legs & feet",
        "translation": "piernas y pies"
      },
      {
        "emoji": "🏃",
        "word": "run fast",
        "translation": "correr rápido"
      },
      {
        "emoji": "🦘",
        "word": "jump high",
        "translation": "saltar alto"
      },
      {
        "emoji": "💃",
        "word": "dance moves",
        "translation": "pasos de baile"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Can you move your arms and touch your toes?",
          "es": "¿Puedes mover tus brazos y tocar tus pies?"
        },
        {
          "en": "What action sports can you do?",
          "es": "¿Qué deportes de acción puedes hacer?"
        },
        {
          "en": "How fast can you run?",
          "es": "¿Qué tan rápido puedes correr?"
        }
      ],
      "answer": [
        {
          "en": "Yes! I can jump and touch my head.",
          "es": "¡Sí! Puedo saltar y tocarme la cabeza."
        },
        {
          "en": "I love to skate, run, and dance.",
          "es": "Me encanta patinar, correr y bailar."
        },
        {
          "en": "My legs are strong and fast!",
          "es": "¡Mis piernas son fuertes y rápidas!"
        }
      ]
    }
  },
  "c-teens-basic-zero-4": {
    "topic": "Show Off Your Gadgets & Tech 📱",
    "topicEs": "Muestra tus dispositivos y tecnología",
    "cues": [
      {
        "icon": "📱",
        "label": "WHICH DEVICE?",
        "labelEs": "¿Qué dispositivo tienes?",
        "questionExample": "What gadget do you use every day?"
      },
      {
        "icon": "🎧",
        "label": "WHAT DO YOU DO?",
        "labelEs": "¿Para qué lo usas?",
        "questionExample": "Do you listen to music or play games?"
      },
      {
        "icon": "⭐",
        "label": "WHY COOL?",
        "labelEs": "¿Por qué te gusta?",
        "questionExample": "Why is it your favorite tech?"
      }
    ],
    "roleA": {
      "label": "Tech Friend A",
      "labelEs": "Amigo A",
      "action": "Ask about gadget",
      "actionEs": "Preguntar por el dispositivo",
      "avatar": "📱"
    },
    "roleB": {
      "label": "Tech Friend B",
      "labelEs": "Amigo B",
      "action": "Show device",
      "actionEs": "Mostrar dispositivo",
      "avatar": "🎧"
    },
    "helpWords": [
      {
        "emoji": "📱",
        "word": "smartphone",
        "translation": "celular"
      },
      {
        "emoji": "🎧",
        "word": "headphones",
        "translation": "audífonos"
      },
      {
        "emoji": "🎮",
        "word": "gaming console",
        "translation": "consola de juegos"
      },
      {
        "emoji": "💻",
        "word": "laptop",
        "translation": "portátil"
      },
      {
        "emoji": "🔋",
        "word": "battery life",
        "translation": "batería"
      },
      {
        "emoji": "🔥",
        "word": "super fast",
        "translation": "súper rápido"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is your favorite tech device?",
          "es": "¿Cuál es tu dispositivo tecnológico favorito?"
        },
        {
          "en": "Do you have wireless headphones?",
          "es": "¿Tienes audífonos inalámbricos?"
        },
        {
          "en": "What games do you play on it?",
          "es": "¿Qué juegos juegas en él?"
        }
      ],
      "answer": [
        {
          "en": "My smartphone and my gaming headphones.",
          "es": "Mi teléfono celular y mis audífonos de juego."
        },
        {
          "en": "I use it for listening to music and texting.",
          "es": "Lo uso para escuchar música y chatear."
        },
        {
          "en": "It has a great camera and fast screen.",
          "es": "Tiene una cámara genial y pantalla rápida."
        }
      ]
    }
  },
  "c-teens-basic-zero-5": {
    "topic": "Order Snacks at the Counter 🍕",
    "topicEs": "Pide comida en la cafetería",
    "cues": [
      {
        "icon": "🍕",
        "label": "SNACK / FOOD?",
        "labelEs": "¿Qué comida pides?",
        "questionExample": "What snack or food would you like?"
      },
      {
        "icon": "🥤",
        "label": "DRINK?",
        "labelEs": "¿Qué bebida prefieres?",
        "questionExample": "Do you want soda, juice, or water?"
      },
      {
        "icon": "💵",
        "label": "HOW MUCH?",
        "labelEs": "¿Cuánto cuesta?",
        "questionExample": "How much is that in total?"
      }
    ],
    "roleA": {
      "label": "Hungry Teen",
      "labelEs": "Cliente",
      "action": "Order food",
      "actionEs": "Pedir comida",
      "avatar": "😋"
    },
    "roleB": {
      "label": "Snack Cashier",
      "labelEs": "Cajero",
      "action": "Take order & price",
      "actionEs": "Tomar pedido y cobrar",
      "avatar": "🧑‍🍳"
    },
    "helpWords": [
      {
        "emoji": "🍕",
        "word": "pizza slice",
        "translation": "porción de pizza"
      },
      {
        "emoji": "🍔",
        "word": "burger & fries",
        "translation": "hamburguesa y papas"
      },
      {
        "emoji": "🥤",
        "word": "cold soda",
        "translation": "gaseosa fría"
      },
      {
        "emoji": "🧃",
        "word": "fruit juice",
        "translation": "jugo de fruta"
      },
      {
        "emoji": "🍪",
        "word": "chocolate cookie",
        "translation": "galleta de chocolate"
      },
      {
        "emoji": "💵",
        "word": "five dollars",
        "translation": "cinco dólares"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Can I get a slice of pizza and a soda, please?",
          "es": "¿Me da una porción de pizza y una gaseosa, por favor?"
        },
        {
          "en": "How much is the chocolate cookie?",
          "es": "¿Cuánto cuesta la galleta de chocolate?"
        },
        {
          "en": "Do you want fries with that?",
          "es": "¿Deseas papas fritas con eso?"
        }
      ],
      "answer": [
        {
          "en": "Here is your pizza and cold drink!",
          "es": "¡Aquí tienes tu pizza y bebida fría!"
        },
        {
          "en": "That is six dollars in total.",
          "es": "Son seis dólares en total."
        },
        {
          "en": "Thank you! Have a great lunch!",
          "es": "¡Gracias! ¡Que tengas buen almuerzo!"
        }
      ]
    }
  },
  "c-teens-basic-zero-6": {
    "topic": "Describe Geometric Art & Patterns 🎨",
    "topicEs": "Describe arte geométrico y patrones",
    "cues": [
      {
        "icon": "🔺",
        "label": "SHAPES?",
        "labelEs": "¿Qué figuras geométricas hay?",
        "questionExample": "What shapes do you see in the design?"
      },
      {
        "icon": "🌈",
        "label": "COLORS & PATTERNS?",
        "labelEs": "¿Qué colores y patrones?",
        "questionExample": "Is it striped, dotted, or colorful?"
      },
      {
        "icon": "🖼️",
        "label": "WHERE TO USE?",
        "labelEs": "¿Dónde usarías este diseño?",
        "questionExample": "Would you put this on a t-shirt or poster?"
      }
    ],
    "roleA": {
      "label": "Designer A",
      "labelEs": "Diseñador A",
      "action": "Show art pattern",
      "actionEs": "Mostrar patrón de arte",
      "avatar": "🎨"
    },
    "roleB": {
      "label": "Designer B",
      "labelEs": "Diseñador B",
      "action": "Describe shapes",
      "actionEs": "Describir figuras",
      "avatar": "📐"
    },
    "helpWords": [
      {
        "emoji": "🔺",
        "word": "triangles",
        "translation": "triángulos"
      },
      {
        "emoji": "🟦",
        "word": "squares & rectangles",
        "translation": "cuadrados y rectángulos"
      },
      {
        "emoji": "⚪",
        "word": "circles",
        "translation": "círculos"
      },
      {
        "emoji": "🦓",
        "word": "striped pattern",
        "translation": "patrón a rayas"
      },
      {
        "emoji": "🎨",
        "word": "bright colors",
        "translation": "colores brillantes"
      },
      {
        "emoji": "👕",
        "word": "t-shirt graphic",
        "translation": "gráfico de camiseta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What shapes can you see in this modern poster?",
          "es": "¿Qué figuras puedes ver en este póster moderno?"
        },
        {
          "en": "Do you like the red triangles and yellow circles?",
          "es": "¿Te gustan los triángulos rojos y círculos amarillos?"
        },
        {
          "en": "Is this pattern cool for a hoodie?",
          "es": "¿Este patrón se ve genial para una sudadera?"
        }
      ],
      "answer": [
        {
          "en": "I see big blue circles and orange squares.",
          "es": "Veo círculos azules grandes y cuadrados naranjas."
        },
        {
          "en": "The pattern looks very energetic and artistic.",
          "es": "El patrón se ve muy dinámico y artístico."
        },
        {
          "en": "Yes! It would look awesome on a jacket.",
          "es": "¡Sí! Se vería increíble en una chaqueta."
        }
      ]
    }
  },
  "c-teens-basic-zero-7": {
    "topic": "Check Your Backpack & Subjects 🎒",
    "topicEs": "Revisa tu mochila y materias",
    "cues": [
      {
        "icon": "📚",
        "label": "CLASSES TODAY?",
        "labelEs": "¿Qué clases tienes?",
        "questionExample": "What subjects do you have today?"
      },
      {
        "icon": "✏️",
        "label": "SUPPLIES?",
        "labelEs": "¿Qué útiles llevas?",
        "questionExample": "Do you have pens, pencils, or notebooks?"
      },
      {
        "icon": "⭐",
        "label": "FAVORITE CLASS?",
        "labelEs": "¿Cuál es tu favorita?",
        "questionExample": "Which subject is your favorite?"
      }
    ],
    "roleA": {
      "label": "Student A",
      "labelEs": "Estudiante A",
      "action": "Ask school supplies",
      "actionEs": "Preguntar útiles",
      "avatar": "🎒"
    },
    "roleB": {
      "label": "Student B",
      "labelEs": "Estudiante B",
      "action": "Show backpack",
      "actionEs": "Mostrar mochila",
      "avatar": "✏️"
    },
    "helpWords": [
      {
        "emoji": "📐",
        "word": "math class",
        "translation": "matemáticas"
      },
      {
        "emoji": "🔬",
        "word": "science",
        "translation": "ciencias"
      },
      {
        "emoji": "📖",
        "word": "english book",
        "translation": "libro de inglés"
      },
      {
        "emoji": "✏️",
        "word": "pencils & eraser",
        "translation": "lápices y borrador"
      },
      {
        "emoji": "🎒",
        "word": "heavy backpack",
        "translation": "mochila pesada"
      },
      {
        "emoji": "📏",
        "word": "ruler & scissors",
        "translation": "regla y tijeras"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What classes do you have this morning?",
          "es": "¿Qué clases tienes esta mañana?"
        },
        {
          "en": "Can I borrow a pencil and an eraser?",
          "es": "¿Me prestas un lápiz y un borrador?"
        },
        {
          "en": "Why is English your favorite class?",
          "es": "¿Por qué el inglés es tu clase favorita?"
        }
      ],
      "answer": [
        {
          "en": "I have math, art, and English today.",
          "es": "Hoy tengo matemáticas, arte e inglés."
        },
        {
          "en": "Sure! Here is a blue pen and a pencil.",
          "es": "¡Claro! Aquí tienes un esfero azul y un lápiz."
        },
        {
          "en": "Because it is fun and we practice speaking!",
          "es": "¡Porque es divertido y practicamos hablar!"
        }
      ]
    }
  },
  "c-teens-basic-zero-8": {
    "topic": "Talk About Pets & Animals 🐶",
    "topicEs": "Habla sobre mascotas y animales",
    "cues": [
      {
        "icon": "🐶",
        "label": "PET SPECIES?",
        "labelEs": "¿Qué mascota tienes?",
        "questionExample": "Do you have a dog, a cat, or a bird?"
      },
      {
        "icon": "🐾",
        "label": "NAME & TRAITS?",
        "labelEs": "¿Cómo se llama y cómo es?",
        "questionExample": "What is your pet's name and favorite trick?"
      },
      {
        "icon": "🦁",
        "label": "WILD FAVORITE?",
        "labelEs": "¿Animal salvaje favorito?",
        "questionExample": "What is your favorite animal in the world?"
      }
    ],
    "roleA": {
      "label": "Pet Lover A",
      "labelEs": "Amigo A",
      "action": "Ask about pets",
      "actionEs": "Preguntar sobre mascotas",
      "avatar": "🐶"
    },
    "roleB": {
      "label": "Pet Lover B",
      "labelEs": "Amigo B",
      "action": "Describe animal",
      "actionEs": "Describir animal",
      "avatar": "🐱"
    },
    "helpWords": [
      {
        "emoji": "🐶",
        "word": "playful dog",
        "translation": "perro juguetón"
      },
      {
        "emoji": "🐱",
        "word": "cute cat",
        "translation": "gato tierno"
      },
      {
        "emoji": "🦜",
        "word": "colorful parrot",
        "translation": "loro colorido"
      },
      {
        "emoji": "🐾",
        "word": "fluffy fur",
        "translation": "pelaje esponjoso"
      },
      {
        "emoji": "🦴",
        "word": "fetch a ball",
        "translation": "traer la pelota"
      },
      {
        "emoji": "🦁",
        "word": "wild lion",
        "translation": "león salvaje"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Do you have any pets living with you?",
          "es": "¿Tienes alguna mascota en tu casa?"
        },
        {
          "en": "What does your pet love to do?",
          "es": "¿Qué le encanta hacer a tu mascota?"
        },
        {
          "en": "What wild animal do you find most interesting?",
          "es": "¿Qué animal salvaje te parece más interesante?"
        }
      ],
      "answer": [
        {
          "en": "Yes! I have a golden puppy named Rocky.",
          "es": "¡Sí! Tengo un cachorro dorado llamado Rocky."
        },
        {
          "en": "He loves to jump, bark, and play in the garden.",
          "es": "Le encanta saltar, ladrar y jugar en el jardín."
        },
        {
          "en": "I love wild panthers and dolphins.",
          "es": "Me encantan las panteras salvajes y los delfines."
        }
      ]
    }
  },
  "c-teens-basic-zero-9": {
    "topic": "Compare Cool Hobbies & Free Time 🛹",
    "topicEs": "Compara pasatiempos y tiempo libre",
    "cues": [
      {
        "icon": "🛹",
        "label": "FAVORITE HOBBY?",
        "labelEs": "¿Qué pasatiempo te gusta?",
        "questionExample": "What do you do when you are free?"
      },
      {
        "icon": "🎮",
        "label": "GAMING OR SPORTS?",
        "labelEs": "¿Juegos o deportes?",
        "questionExample": "Do you play games on console or PC?"
      },
      {
        "icon": "⚡",
        "label": "HOW OFTEN?",
        "labelEs": "¿Con qué frecuencia?",
        "questionExample": "Do you practice every day or on weekends?"
      }
    ],
    "roleA": {
      "label": "Teen A",
      "labelEs": "Joven A",
      "action": "Ask hobbies",
      "actionEs": "Preguntar pasatiempos",
      "avatar": "🛹"
    },
    "roleB": {
      "label": "Teen B",
      "labelEs": "Joven B",
      "action": "Share passions",
      "actionEs": "Compartir pasiones",
      "avatar": "🎮"
    },
    "helpWords": [
      {
        "emoji": "🛹",
        "word": "skateboarding",
        "translation": "patineta"
      },
      {
        "emoji": "🎮",
        "word": "multiplayer gaming",
        "translation": "juegos multijugador"
      },
      {
        "emoji": "🎸",
        "word": "play acoustic guitar",
        "translation": "tocar guitarra"
      },
      {
        "emoji": "🎨",
        "word": "sketch anime",
        "translation": "dibujar anime"
      },
      {
        "emoji": "⚽",
        "word": "soccer matches",
        "translation": "partidos de fútbol"
      },
      {
        "emoji": "🎧",
        "word": "produce beats",
        "translation": "producir música"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What is your number one hobby after school?",
          "es": "¿Cuál es tu pasatiempo número uno después del colegio?"
        },
        {
          "en": "Do you play online multiplayer games with friends?",
          "es": "¿Juegas videojuegos online con amigos?"
        },
        {
          "en": "How many hours a week do you practice?",
          "es": "¿Cuántas horas a la semana practicas?"
        }
      ],
      "answer": [
        {
          "en": "I skate with my friends and record cool tricks.",
          "es": "Monto en patineta con mis amigos y grabo trucos."
        },
        {
          "en": "Yes! We team up online every Friday night.",
          "es": "¡Sí! Hacemos equipo online todos los viernes por la noche."
        },
        {
          "en": "About four hours every weekend.",
          "es": "Alrededor de cuatro horas cada fin de semana."
        }
      ]
    }
  },
  "c-teens-basic-zero-10": {
    "topic": "Describe Family Members & Friends 👨‍👩‍👧",
    "topicEs": "Describe a tu familia y amigos",
    "cues": [
      {
        "icon": "👨‍👩‍👧",
        "label": "FAMILY MEMBERS?",
        "labelEs": "¿Quiénes están en tu familia?",
        "questionExample": "How many people are in your family?"
      },
      {
        "icon": "🤝",
        "label": "BEST FRIEND?",
        "labelEs": "¿Quién es tu mejor amigo/a?",
        "questionExample": "Tell me about your best friend!"
      },
      {
        "icon": "🎬",
        "label": "FUN ACTIVITIES?",
        "labelEs": "¿Qué hacen juntos?",
        "questionExample": "What do you like to do on weekends together?"
      }
    ],
    "roleA": {
      "label": "Friend A",
      "labelEs": "Amigo A",
      "action": "Ask about circle",
      "actionEs": "Preguntar por su círculo",
      "avatar": "🙋"
    },
    "roleB": {
      "label": "Friend B",
      "labelEs": "Amigo B",
      "action": "Introduce people",
      "actionEs": "Presentar personas",
      "avatar": "👨‍👩‍👧"
    },
    "helpWords": [
      {
        "emoji": "👩",
        "word": "loving parents",
        "translation": "padres cariñosos"
      },
      {
        "emoji": "👦",
        "word": "older brother",
        "translation": "hermano mayor"
      },
      {
        "emoji": "👧",
        "word": "little sister",
        "translation": "hermana pequeña"
      },
      {
        "emoji": "🤝",
        "word": "best friend",
        "translation": "mejor amigo/a"
      },
      {
        "emoji": "🍿",
        "word": "movie night",
        "translation": "noche de películas"
      },
      {
        "emoji": "😄",
        "word": "funny and kind",
        "translation": "chistoso y amable"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How many brothers or sisters do you have?",
          "es": "¿Cuántos hermanos o hermanas tienes?"
        },
        {
          "en": "What makes your best friend so cool?",
          "es": "¿Qué hace a tu mejor amigo tan genial?"
        },
        {
          "en": "What does your family do on Saturday evenings?",
          "es": "¿Qué hace tu familia los sábados por la tarde?"
        }
      ],
      "answer": [
        {
          "en": "I have two older brothers and a little sister.",
          "es": "Tengo dos hermanos mayores y una hermanita."
        },
        {
          "en": "My best friend always makes me laugh and helps me.",
          "es": "Mi mejor amigo siempre me hace reír y me ayuda."
        },
        {
          "en": "We order pizza and play board games together.",
          "es": "Pedimos pizza y jugamos juegos de mesa juntos."
        }
      ]
    }
  },
  "c-teens-basic-zero-11": {
    "topic": "Spell Your Gamer Tag & Username 🔤",
    "topicEs": "Deletrea tu gamer tag y usuario",
    "cues": [
      {
        "icon": "🔤",
        "label": "SPELL NAME?",
        "labelEs": "¿Cómo deletreas tu nombre?",
        "questionExample": "How do you spell your first name?"
      },
      {
        "icon": "🎮",
        "label": "GAMER TAG?",
        "labelEs": "¿Cuál es tu usuario de juego?",
        "questionExample": "What is your online gamer tag?"
      },
      {
        "icon": "📧",
        "label": "SPECIAL CHARACTERS?",
        "labelEs": "¿Símbolos o números?",
        "questionExample": "Is there an underscore, hyphen, or dot?"
      }
    ],
    "roleA": {
      "label": "Gamer A",
      "labelEs": "Gamer A",
      "action": "Ask spelling",
      "actionEs": "Preguntar deletreo",
      "avatar": "🎮"
    },
    "roleB": {
      "label": "Gamer B",
      "labelEs": "Gamer B",
      "action": "Spell letter by letter",
      "actionEs": "Deletrear letra por letra",
      "avatar": "👾"
    },
    "helpWords": [
      {
        "emoji": "🔤",
        "word": "letter by letter",
        "translation": "letra por letra"
      },
      {
        "emoji": "🎮",
        "word": "gamer tag",
        "translation": "nombre de juego"
      },
      {
        "emoji": "📧",
        "word": "username",
        "translation": "nombre de usuario"
      },
      {
        "emoji": "🔠",
        "word": "capital letter",
        "translation": "letra mayúscula"
      },
      {
        "emoji": "➖",
        "word": "hyphen & underscore",
        "translation": "guion y guion bajo"
      },
      {
        "emoji": "🔊",
        "word": "spell aloud",
        "translation": "deletrear en voz alta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "How do you spell your nickname in English?",
          "es": "¿Cómo deletreas tu apodo en inglés?"
        },
        {
          "en": "Can you spell your online username for me?",
          "es": "¿Puedes deletrear tu usuario online para mí?"
        },
        {
          "en": "Does it have capital letters or numbers?",
          "es": "¿Tiene letras mayúsculas o números?"
        }
      ],
      "answer": [
        {
          "en": "It is S-H-A-D-O-W underscore 2-4!",
          "es": "¡Es S-H-A-D-O-W guion bajo 2-4!"
        },
        {
          "en": "My name is spelled M-A-T-E-O.",
          "es": "Mi nombre se deletrea M-A-T-E-O."
        },
        {
          "en": "Yes, capital S and capital X.",
          "es": "Sí, S mayúscula y X mayúscula."
        }
      ]
    }
  },
  "c-teens-basic-zero-12": {
    "topic": "Record Your 30s Social Media Bio 🤳",
    "topicEs": "Graba tu bio de 30s para redes sociales",
    "cues": [
      {
        "icon": "🙋",
        "label": "NAME, AGE, HOMETOWN?",
        "labelEs": "¿Nombre, edad y ciudad?",
        "questionExample": "Where are you from and how old are you?"
      },
      {
        "icon": "🏫",
        "label": "GRADE & PASSION?",
        "labelEs": "¿Grado escolar y pasión?",
        "questionExample": "What grade are you in and what do you love?"
      },
      {
        "icon": "✨",
        "label": "ONE FUN FACT?",
        "labelEs": "¿Un dato curioso?",
        "questionExample": "What is one unique thing about you?"
      }
    ],
    "roleA": {
      "label": "Interviewer",
      "labelEs": "Entrevistador",
      "action": "Ask bio questions",
      "actionEs": "Preguntar bio",
      "avatar": "🎙️"
    },
    "roleB": {
      "label": "Creator",
      "labelEs": "Creador",
      "action": "Pitch bio",
      "actionEs": "Dar bio de 30s",
      "avatar": "🤳"
    },
    "helpWords": [
      {
        "emoji": "🙋",
        "word": "fourteen years old",
        "translation": "14 años"
      },
      {
        "emoji": "🌆",
        "word": "hometown",
        "translation": "ciudad natal"
      },
      {
        "emoji": "🏫",
        "word": "eighth grade",
        "translation": "octavo grado"
      },
      {
        "emoji": "🎨",
        "word": "creative hobbies",
        "translation": "pasatiempos creativos"
      },
      {
        "emoji": "🌟",
        "word": "dream goal",
        "translation": "meta soñada"
      },
      {
        "emoji": "📲",
        "word": "follow along",
        "translation": "sigue la cuenta"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Who are you and where do you live?",
          "es": "¿Quién eres y dónde vives?"
        },
        {
          "en": "What are your top two favorite hobbies?",
          "es": "¿Cuáles son tus dos pasatiempos favoritos?"
        },
        {
          "en": "What is your main goal for this year?",
          "es": "¿Cuál es tu meta principal para este año?"
        }
      ],
      "answer": [
        {
          "en": "Hey! I'm David, 14, living in Medellin.",
          "es": "¡Hola! Soy David, 14 años, vivo en Medellín."
        },
        {
          "en": "I love digital illustration and playing soccer.",
          "es": "Me encanta la ilustración digital y jugar fútbol."
        },
        {
          "en": "My goal is to speak fluent English and travel!",
          "es": "¡Mi meta es hablar inglés fluido y viajar!"
        }
      ]
    }
  },
  "c-teens-basic-zero-13": {
    "topic": "Style an Outfit for Today's Weather 🧥",
    "topicEs": "Elige un outfit para el clima de hoy",
    "cues": [
      {
        "icon": "🌦️",
        "label": "TODAY'S WEATHER?",
        "labelEs": "¿Qué clima hace hoy?",
        "questionExample": "Is it hot, rainy, windy, or cold?"
      },
      {
        "icon": "👕",
        "label": "CLOTHES & LAYERS?",
        "labelEs": "¿Qué prendas vas a usar?",
        "questionExample": "Are you wearing a hoodie, jeans, or shorts?"
      },
      {
        "icon": "👟",
        "label": "SHOES & ACCESSORIES?",
        "labelEs": "¿Zapatos y accesorios?",
        "questionExample": "What sneakers or cap do you match with it?"
      }
    ],
    "roleA": {
      "label": "Style Guide",
      "labelEs": "Guía de estilo",
      "action": "Suggest weather outfit",
      "actionEs": "Sugerir outfit",
      "avatar": "🧥"
    },
    "roleB": {
      "label": "Trendsetter",
      "labelEs": "Estudiante",
      "action": "Pick personal style",
      "actionEs": "Elegir estilo",
      "avatar": "👟"
    },
    "helpWords": [
      {
        "emoji": "🧥",
        "word": "oversized hoodie",
        "translation": "sudadera holgada"
      },
      {
        "emoji": "👖",
        "word": "cargo pants",
        "translation": "pantalones cargo"
      },
      {
        "emoji": "👟",
        "word": "fresh sneakers",
        "translation": "tenis limpios"
      },
      {
        "emoji": "🧢",
        "word": "bucket hat / cap",
        "translation": "sombrero de pescador / gorra"
      },
      {
        "emoji": "🌧️",
        "word": "chilly and rainy",
        "translation": "frío y lluvioso"
      },
      {
        "emoji": "🕶️",
        "word": "dark sunglasses",
        "translation": "gafas oscuras"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What should we wear for a rainy afternoon?",
          "es": "¿Qué deberíamos usar para una tarde lluviosa?"
        },
        {
          "en": "Do you like cargo pants or classic jeans?",
          "es": "¿Te gustan los pantalones cargo o los jeans clásicos?"
        },
        {
          "en": "Which color sneakers are your favorite?",
          "es": "¿De qué color son tus tenis favoritos?"
        }
      ],
      "answer": [
        {
          "en": "A warm waterproof jacket and dark sneakers.",
          "es": "Una chaqueta abrigada impermeable y tenis oscuros."
        },
        {
          "en": "I love cargo pants because they have huge pockets.",
          "es": "Me encantan los pantalones cargo porque tienen bolsillos enormes."
        },
        {
          "en": "Classic white sneakers match every outfit!",
          "es": "¡Los tenis blancos clásicos combinan con todo!"
        }
      ]
    }
  },
  "c-teens-basic-zero-14": {
    "topic": "Find Supplies in the Classroom 📐",
    "topicEs": "Encuentra útiles en el salón de clases",
    "cues": [
      {
        "icon": "🪑",
        "label": "WHERE IS THE ITEM?",
        "labelEs": "¿Dónde está el objeto?",
        "questionExample": "Is the ruler on the desk, under the chair, or in the bag?"
      },
      {
        "icon": "📐",
        "label": "WHICH TOOL?",
        "labelEs": "¿Qué útil necesitas?",
        "questionExample": "Do you need a pencil, scissors, or a calculator?"
      },
      {
        "icon": "🤝",
        "label": "BORROW POLITELY?",
        "labelEs": "¿Pedir prestado?",
        "questionExample": "Can I borrow your blue highlighter for a second?"
      }
    ],
    "roleA": {
      "label": "Classmate A",
      "labelEs": "Compañero A",
      "action": "Ask for tool",
      "actionEs": "Pedir útil",
      "avatar": "🙋‍♂️"
    },
    "roleB": {
      "label": "Classmate B",
      "labelEs": "Compañero B",
      "action": "Point location",
      "actionEs": "Indicar ubicación",
      "avatar": "📐"
    },
    "helpWords": [
      {
        "emoji": "📐",
        "word": "clear ruler",
        "translation": "regla transparente"
      },
      {
        "emoji": "🖍️",
        "word": "highlighter pens",
        "translation": "resaltadores"
      },
      {
        "emoji": "🪑",
        "word": "under the desk",
        "translation": "debajo del escritorio"
      },
      {
        "emoji": "🎒",
        "word": "front pocket",
        "translation": "bolsillo delantero"
      },
      {
        "emoji": "✂️",
        "word": "safety scissors",
        "translation": "tijeras"
      },
      {
        "emoji": "📝",
        "word": "notebook paper",
        "translation": "hoja de cuaderno"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Where did you put the English textbook?",
          "es": "¿Dónde pusiste el libro de inglés?"
        },
        {
          "en": "Can I borrow your eraser for this exercise?",
          "es": "¿Me prestas tu borrador para este ejercicio?"
        },
        {
          "en": "Is there a pencil sharpener on the desk?",
          "es": "¿Hay un sacapuntas sobre el escritorio?"
        }
      ],
      "answer": [
        {
          "en": "It is right next to the pencil case.",
          "es": "Está justo al lado de la cartuchera."
        },
        {
          "en": "Sure, here is the white eraser.",
          "es": "Claro, aquí tienes el borrador blanco."
        },
        {
          "en": "Yes, it is inside the teacher's box.",
          "es": "Sí, está dentro de la caja del profesor."
        }
      ]
    }
  },
  "c-teens-basic-zero-15": {
    "topic": "Compare Morning & Evening Routines ⏰",
    "topicEs": "Compara rutinas de mañana y noche",
    "cues": [
      {
        "icon": "⏰",
        "label": "WAKE UP TIME?",
        "labelEs": "¿A qué hora te levantas?",
        "questionExample": "What time does your alarm go off?"
      },
      {
        "icon": "🍳",
        "label": "MORNING HABITS?",
        "labelEs": "¿Qué haces antes de salir?",
        "questionExample": "Do you shower and eat breakfast before school?"
      },
      {
        "icon": "🌙",
        "label": "NIGHT ROUTINE?",
        "labelEs": "¿Qué haces antes de dormir?",
        "questionExample": "What time do you turn off the screen and sleep?"
      }
    ],
    "roleA": {
      "label": "Early Bird",
      "labelEs": "Madrugador",
      "action": "Share morning routine",
      "actionEs": "Compartir rutina de mañana",
      "avatar": "🌅"
    },
    "roleB": {
      "label": "Night Owl",
      "labelEs": "Noctámbulo",
      "action": "Share evening routine",
      "actionEs": "Compartir rutina de noche",
      "avatar": "🌙"
    },
    "helpWords": [
      {
        "emoji": "⏰",
        "word": "morning alarm",
        "translation": "alarma de la mañana"
      },
      {
        "emoji": "🍳",
        "word": "quick breakfast",
        "translation": "desayuno rápido"
      },
      {
        "emoji": "🚿",
        "word": "warm shower",
        "translation": "ducha caliente"
      },
      {
        "emoji": "🎒",
        "word": "pack backpack",
        "translation": "empacar la mochila"
      },
      {
        "emoji": "📚",
        "word": "finish assignments",
        "translation": "terminar tareas"
      },
      {
        "emoji": "😴",
        "word": "turn off lights",
        "translation": "apagar las luces"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "What time do you usually wake up on school days?",
          "es": "¿A qué hora sueles levantarte los días de colegio?"
        },
        {
          "en": "What is your morning routine before leaving home?",
          "es": "¿Cuál es tu rutina de mañana antes de salir de casa?"
        },
        {
          "en": "Do you check your phone before sleeping at night?",
          "es": "¿Revisas tu celular antes de dormir por la noche?"
        }
      ],
      "answer": [
        {
          "en": "My alarm rings at 6:15 AM every weekday.",
          "es": "Mi alarma suena a las 6:15 AM todos los días entre semana."
        },
        {
          "en": "I wash my face, eat toast, and grab my bag.",
          "es": "Me lavo la cara, como tostadas y tomo mi mochila."
        },
        {
          "en": "I read a book and turn off my phone by 10 PM.",
          "es": "Leo un libro y apago mi celular a las 10 PM."
        }
      ]
    }
  },
  "c-teens-basic-zero-16": {
    "topic": "Teen English Champion Showcase 🏆",
    "topicEs": "Desafío final de campeones de inglés",
    "cues": [
      {
        "icon": "🌟",
        "label": "FULL INTRO?",
        "labelEs": "¿Presentación completa?",
        "questionExample": "Introduce your name, age, city, and favorites!"
      },
      {
        "icon": "⚡",
        "label": "RAPID FIRE?",
        "labelEs": "¿Preguntas rápidas?",
        "questionExample": "Ask three quick questions about daily life!"
      },
      {
        "icon": "🏆",
        "label": "LEVEL 0 VICTORY?",
        "labelEs": "¿Mensaje de victoria?",
        "questionExample": "How do you feel completing Level 0?"
      }
    ],
    "roleA": {
      "label": "Challenger",
      "labelEs": "Retador",
      "action": "Ask quick questions",
      "actionEs": "Hacer preguntas rápidas",
      "avatar": "⚡"
    },
    "roleB": {
      "label": "Champion",
      "labelEs": "Campeón",
      "action": "Answer confidently",
      "actionEs": "Responder con confianza",
      "avatar": "🏆"
    },
    "helpWords": [
      {
        "emoji": "🏆",
        "word": "level complete",
        "translation": "nivel completado"
      },
      {
        "emoji": "🗣️",
        "word": "speak confidently",
        "translation": "hablar con confianza"
      },
      {
        "emoji": "🚀",
        "word": "ready for Basic 1",
        "translation": "listo para Basic 1"
      },
      {
        "emoji": "✨",
        "word": "fluent phrases",
        "translation": "frases fluidas"
      },
      {
        "emoji": "🔥",
        "word": "top score",
        "translation": "puntaje máximo"
      },
      {
        "emoji": "🎉",
        "word": "celebrate together",
        "translation": "celebrar juntos"
      }
    ],
    "hiddenPhrases": {
      "ask": [
        {
          "en": "Can you give a 30-second summary of everything you learned?",
          "es": "¿Puedes dar un resumen de 30 segundos de todo lo aprendido?"
        },
        {
          "en": "What was the most exciting topic for you in Level 0?",
          "es": "¿Cuál fue el tema más emocionante para ti en el Nivel 0?"
        },
        {
          "en": "How confident do you feel speaking English now?",
          "es": "¿Qué tan seguro te sientes hablando inglés ahora?"
        }
      ],
      "answer": [
        {
          "en": "I can introduce myself, describe routines, and order food!",
          "es": "¡Puedo presentarme, describir rutinas y pedir comida!"
        },
        {
          "en": "I loved gadgets, snacks, and styling outfits.",
          "es": "Me encantaron los dispositivos, la comida y la ropa."
        },
        {
          "en": "I feel super confident and ready for the next level!",
          "es": "¡Me siento súper seguro y listo para el siguiente nivel!"
        }
      ]
    }
  }
};
