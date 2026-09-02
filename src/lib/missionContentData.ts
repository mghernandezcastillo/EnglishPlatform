import type { SpeedCard, BuildItSentence, EarCheckItem } from './missionService';

export interface MissionContentEntry {
  classId: string;
  speedCards: SpeedCard[];
  buildIt: BuildItSentence[];
  earCheck: EarCheckItem[];
  bonusChallenges: any[];
  badgeName: string;
  badgeEmoji: string;
}

export function getMissionContentForClass(classId: string): MissionContentEntry | undefined {
  if (!classId) return undefined;
  const direct = TEEN_MISSION_CONTENT.find(c => c.classId === classId);
  if (direct) return direct;
  
  // Normalize track prefixes: c-adults-..., c-kids-..., c-bz-... -> c-teens-...
  const normalizedId = classId
    .replace(/^c-(adults|kids|teens)-/, 'c-teens-')
    .replace(/^c-bz-/, 'c-teens-basic-zero-');
    
  return TEEN_MISSION_CONTENT.find(c => c.classId === normalizedId);
}

export const TEEN_MISSION_CONTENT: MissionContentEntry[] = [
  {
    "classId": "c-teens-basic-zero-1",
    "badgeName": "Squad ⭐ Starter!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-1-1",
        "term": "Greet",
        "translation": "saludar",
        "ipa": "/greet/",
        "audioText": "greet. I greet my friends with a fist bump.",
        "example": "I greet my friends with a fist bump.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-2",
        "term": "Introduce",
        "translation": "presentar / presentarse",
        "ipa": "/introduce/",
        "audioText": "introduce. Let me introduce my best friend Mateo.",
        "example": "Let me introduce my best friend Mateo.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-3",
        "term": "Meet",
        "translation": "conocer / encontrarse",
        "ipa": "/meet/",
        "audioText": "meet. Nice to meet you in English class!",
        "example": "Nice to meet you in English class!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-4",
        "term": "Call",
        "translation": "llamar / apodarse",
        "ipa": "/call/",
        "audioText": "call. You can call me Nico.",
        "example": "You can call me Nico.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-5",
        "term": "Feel",
        "translation": "sentirse",
        "ipa": "/feel/",
        "audioText": "feel. I feel awesome and energized today.",
        "example": "I feel awesome and energized today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-6",
        "term": "I am",
        "translation": "I am (yo soy/estoy) • You are (tú eres/estás) • He/She/It is (él/ella es/está) • We/They are (nosotros/ellos son/están)",
        "ipa": "/i/",
        "audioText": "I am Nicolas and I am in English class today.",
        "example": "I am Nicolas and I am in English class today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-1-7",
        "term": "I'm",
        "translation": "Usa contracciones para sonar 100% natural al hablar en inglés",
        "ipa": "/im/",
        "audioText": "She's my friend Sofia and we're ready to practice.",
        "example": "She's my friend Sofia and we're ready to practice.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-1-b1",
        "prompt": "¡Hola! Soy Alex y estoy muy emocionado hoy.'",
        "answer": "Hello I am Alex and I am very excited today",
        "tokens": [
          "Hello",
          "I",
          "am",
          "Alex",
          "and",
          "very",
          "excited",
          "today",
          "nervous",
          "ready"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-1-b2",
        "prompt": "¡Hola Alex! No estoy nervioso; estoy listo para aprender.'",
        "answer": "Hey Alex I am not nervous I am ready to learn",
        "tokens": [
          "Hey",
          "Alex",
          "I",
          "am",
          "not",
          "nervous",
          "ready",
          "to",
          "learn",
          "Hello",
          "very"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-1-b3",
        "prompt": "¿Eres tú el estudiante nuevo en nuestra clase de inglés?'",
        "answer": "Are you the new student in our English class",
        "tokens": [
          "Are",
          "you",
          "the",
          "new",
          "student",
          "in",
          "our",
          "English",
          "class",
          "Hello",
          "Alex"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-1-e1",
        "audioText": "Good morning everyone!",
        "correctAnswer": "Good morning everyone!",
        "options": [
          "Good morning everyone!",
          "My name is Teacher David.",
          "I am very excited to meet all of you today."
        ]
      },
      {
        "id": "0-1-e2",
        "audioText": "My name is Teacher David.",
        "correctAnswer": "My name is Teacher David.",
        "options": [
          "I am very excited to meet all of you today.",
          "My name is Teacher David.",
          "How is everyone feeling?"
        ]
      },
      {
        "id": "0-1-e3",
        "audioText": "I am very excited to meet all of you today.",
        "correctAnswer": "I am very excited to meet all of you today.",
        "options": [
          "I am very excited to meet all of you evening.",
          "How is everyone feeling?",
          "I am very excited to meet all of you today."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-2",
    "badgeName": "Birthday ⭐ Pro!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-2-1",
        "term": "Turn",
        "translation": "cumplir años / girar",
        "ipa": "/turn/",
        "audioText": "turn. I turn 16 next Saturday!",
        "example": "I turn 16 next Saturday!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-2",
        "term": "Celebrate",
        "translation": "celebrar / festejar",
        "ipa": "/celebrate/",
        "audioText": "celebrate. We celebrate with pizza and music.",
        "example": "We celebrate with pizza and music.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-3",
        "term": "Invite",
        "translation": "invitar",
        "ipa": "/invite/",
        "audioText": "invite. I invite all my classmates to the party.",
        "example": "I invite all my classmates to the party.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-4",
        "term": "Give",
        "translation": "dar / regalar",
        "ipa": "/give/",
        "audioText": "give. They give awesome birthday gifts.",
        "example": "They give awesome birthday gifts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-5",
        "term": "Count",
        "translation": "contar números",
        "ipa": "/count/",
        "audioText": "count. I can count from 1 to 100 in English.",
        "example": "I can count from 1 to 100 in English.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-6",
        "term": "I am / I'm + Age",
        "translation": "I'm + [Número] + (years old)",
        "ipa": "/i/",
        "audioText": "I am 15 years old and I'm ready for the party.",
        "example": "I am 15 years old and I'm ready for the party.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-2-7",
        "term": "He is / She is + Age",
        "translation": "He's / She's + [Número de años]",
        "ipa": "/he/",
        "audioText": "My friend Mateo is 16 years old and his sister is 14.",
        "example": "My friend Mateo is 16 years old and his sister is 14.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-2-b1",
        "prompt": "Tengo quince años y mi cumpleaños es en octubre.'",
        "answer": "I am fifteen years old and my birthday is in October",
        "tokens": [
          "I",
          "am",
          "fifteen",
          "years",
          "old",
          "and",
          "my",
          "birthday",
          "is",
          "in",
          "October",
          "fourteen",
          "anymore"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-2-b2",
        "prompt": "Sofía: 'Ya no tengo catorce años; cumplí quince la semana pasada.'",
        "answer": "I am not fourteen anymore I turned fifteen last week",
        "tokens": [
          "I",
          "am",
          "not",
          "fourteen",
          "anymore",
          "turned",
          "fifteen",
          "last",
          "week",
          "years",
          "birthday"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-2-b3",
        "prompt": "¿Cuándo es tu fiesta de cumpleaños y en qué fecha cae?'",
        "answer": "When is your birthday party and what date is it",
        "tokens": [
          "When",
          "is",
          "your",
          "birthday",
          "party",
          "and",
          "what",
          "date",
          "it",
          "fifteen",
          "years"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-2-e1",
        "audioText": "I turn 16 this Saturday, October 12th.",
        "correctAnswer": "I turn 16 this Saturday, October 12th.",
        "options": [
          "I turn 16 this Saturday, October 12th.",
          "I am throwing a party at my house at 6:00 PM.",
          "Don't forget to come!"
        ]
      },
      {
        "id": "0-2-e2",
        "audioText": "I am throwing a party at my house at 6:00 PM.",
        "correctAnswer": "I am throwing a party at my house at 6:00 PM.",
        "options": [
          "Don't forget to come!",
          "I am throwing a party at my house at 6:00 PM.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "0-2-e3",
        "audioText": "Don't forget to come!",
        "correctAnswer": "Don't forget to come!",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Don't forget to come! (Alternative)",
          "Don't forget to come!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-3",
    "badgeName": "Squad ⭐ Master!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-3-1",
        "term": "Live",
        "translation": "vivir",
        "ipa": "/live/",
        "audioText": "live. I live with my parents and younger brother.",
        "example": "I live with my parents and younger brother.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-2",
        "term": "Help",
        "translation": "ayudar",
        "ipa": "/help/",
        "audioText": "help. My sister helps me with English homework.",
        "example": "My sister helps me with English homework.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-3",
        "term": "Share",
        "translation": "compartir",
        "ipa": "/share/",
        "audioText": "share. We share snacks with our squad in the park.",
        "example": "We share snacks with our squad in the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-4",
        "term": "Hang out",
        "translation": "parchar / pasar el rato",
        "ipa": "/hang out/",
        "audioText": "hang out. I hang out with my best friends every Friday.",
        "example": "I hang out with my best friends every Friday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-5",
        "term": "Visit",
        "translation": "visitar",
        "ipa": "/visit/",
        "audioText": "visit. We visit our grandparents on Sundays.",
        "example": "We visit our grandparents on Sundays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-6",
        "term": "My / Our + Noun",
        "translation": "My (mío/mi) • Our (nuestro/nuestra)",
        "ipa": "/my/",
        "audioText": "My brother is super funny and our dog is very friendly.",
        "example": "My brother is super funny and our dog is very friendly.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-3-7",
        "term": "His (de él)",
        "translation": "His + [Sustantivo de chico] • Her + [Sustantivo de chica]",
        "ipa": "/his/",
        "audioText": "This is Carlos. His sister is Valentina and her cat is super cute.",
        "example": "This is Carlos. His sister is Valentina and her cat is super cute.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-3-b1",
        "prompt": "Vivo con mis padres y mi hermano es súper chistoso.'",
        "answer": "I live with my parents and my brother is super funny",
        "tokens": [
          "I",
          "live",
          "with",
          "my",
          "parents",
          "and",
          "brother",
          "is",
          "super",
          "funny",
          "sister",
          "best"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-3-b2",
        "prompt": "Sofía: 'Ella no es mi hermana; es mi mejor amiga Valentina.'",
        "answer": "She isn t my sister she is my best friend Valentina",
        "tokens": [
          "She",
          "isn",
          "t",
          "my",
          "sister",
          "she",
          "is",
          "best",
          "friend",
          "Valentina",
          "live",
          "with"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-3-b3",
        "prompt": "¿Quién es ese chico de la patineta en tu grupo de amigos?'",
        "answer": "Who is that boy with the skateboard in your squad",
        "tokens": [
          "Who",
          "is",
          "that",
          "boy",
          "with",
          "the",
          "skateboard",
          "in",
          "your",
          "squad",
          "live",
          "parents"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-3-e1",
        "audioText": "I have a big family.",
        "correctAnswer": "I have a big family.",
        "options": [
          "I have a big family.",
          "I have two older brothers and one younger sister.",
          "We all live together in a cozy apartment with our cat."
        ]
      },
      {
        "id": "0-3-e2",
        "audioText": "I have two older brothers and one younger sister.",
        "correctAnswer": "I have two older brothers and one younger sister.",
        "options": [
          "We all live together in a cozy apartment with our cat.",
          "I have two older brothers and one younger sister.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "0-3-e3",
        "audioText": "We all live together in a cozy apartment with our cat.",
        "correctAnswer": "We all live together in a cozy apartment with our cat.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "We all live together in a cozy apartment with our cat. (Alternative)",
          "We all live together in a cozy apartment with our cat."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-4",
    "badgeName": "Foodie ⭐ Chef!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-4-1",
        "term": "Eat",
        "translation": "comer",
        "ipa": "/eat/",
        "audioText": "eat. We eat crispy nachos with guacamole.",
        "example": "We eat crispy nachos with guacamole.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-2",
        "term": "Drink",
        "translation": "beber / tomar",
        "ipa": "/drink/",
        "audioText": "drink. I drink cold iced tea with lemon.",
        "example": "I drink cold iced tea with lemon.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-3",
        "term": "Order",
        "translation": "pedir / ordenar comida",
        "ipa": "/order/",
        "audioText": "order. Let's order delivery for dinner tonight.",
        "example": "Let's order delivery for dinner tonight.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-4",
        "term": "Cook",
        "translation": "cocinar",
        "ipa": "/cook/",
        "audioText": "cook. I cook pancakes on Sunday morning.",
        "example": "I cook pancakes on Sunday morning.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-5",
        "term": "Taste",
        "translation": "probar / saber a",
        "ipa": "/taste/",
        "audioText": "taste. This chocolate dessert tastes amazing!",
        "example": "This chocolate dessert tastes amazing!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-6",
        "term": "I like / I love + Food",
        "translation": "I like + [Comida] • I love + [Comida]",
        "ipa": "/i/",
        "audioText": "I love pepperoni pizza and I always drink fresh fruit juice.",
        "example": "I love pepperoni pizza and I always drink fresh fruit juice.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-4-7",
        "term": "He likes / She prefers",
        "translation": "Agrega '-s' al verbo con He/She: He likes / She loves / She prefers",
        "ipa": "/he/",
        "audioText": "My friend Andrea likes burgers, but she prefers chicken wraps.",
        "example": "My friend Andrea likes burgers, but she prefers chicken wraps.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-4-b1",
        "prompt": "Me encanta la pizza de pepperoni y siempre tomo limonada fría.'",
        "answer": "I love pepperoni pizza and I always drink cold lemonade",
        "tokens": [
          "I",
          "love",
          "pepperoni",
          "pizza",
          "and",
          "always",
          "drink",
          "cold",
          "lemonade",
          "like",
          "spicy"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-4-b2",
        "prompt": "No me gusta la comida picante ni la cebolla extra en las hamburguesas.'",
        "answer": "I don t like spicy food or extra onion on my burgers",
        "tokens": [
          "I",
          "don",
          "t",
          "like",
          "spicy",
          "food",
          "or",
          "extra",
          "onion",
          "on",
          "my",
          "burgers",
          "love",
          "pepperoni"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-4-b3",
        "prompt": "¿Puedo pedir un combo grande con papas fritas, por favor?'",
        "answer": "Can I have one large combo with French fries please",
        "tokens": [
          "Can",
          "I",
          "have",
          "one",
          "large",
          "combo",
          "with",
          "French",
          "fries",
          "please",
          "love",
          "pepperoni"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-4-e1",
        "audioText": "Can I get one large pepperoni pizza, two orders of garlic bread, and a bottle of sparkling water, please?",
        "correctAnswer": "Can I get one large pepperoni pizza, two orders of garlic bread, and a bottle of sparkling water, please?",
        "options": [
          "Can I get one large pepperoni pizza, two orders of garlic bread, and a bottle of sparkling water, please?",
          "Andrea, what do you want to order? I love pepperoni pizza and I always drink fresh juice.",
          "I don't like spicy food or red meat. I prefer a fresh chicken wrap and cold lemonade."
        ]
      },
      {
        "id": "0-4-e2",
        "audioText": "Andrea, what do you want to order? I love pepperoni pizza and I always drink fresh juice.",
        "correctAnswer": "Andrea, what do you want to order? I love pepperoni pizza and I always drink fresh juice.",
        "options": [
          "I don't like spicy food or red meat. I prefer a fresh chicken wrap and cold lemonade.",
          "Andrea, what do you want to order? I love pepperoni pizza and I always drink fresh juice.",
          "Do you want to share a big portion of French fries?"
        ]
      },
      {
        "id": "0-4-e3",
        "audioText": "I don't like spicy food or red meat. I prefer a fresh chicken wrap and cold lemonade.",
        "correctAnswer": "I don't like spicy food or red meat. I prefer a fresh chicken wrap and cold lemonade.",
        "options": [
          "Yes, definitely! Let's order right at the counter.",
          "Do you want to share a big portion of French fries?",
          "I don't like spicy food or red meat. I prefer a fresh chicken wrap and cold lemonade."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-5",
    "badgeName": "Routine ⭐ Pro!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-5-1",
        "term": "Wake up",
        "translation": "despertarse",
        "ipa": "/wake up/",
        "audioText": "wake up. I wake up with energy at 6:00 AM.",
        "example": "I wake up with energy at 6:00 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-2",
        "term": "Brush",
        "translation": "cepillarse los dientes",
        "ipa": "/brush/",
        "audioText": "brush. I brush my teeth after breakfast.",
        "example": "I brush my teeth after breakfast.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-3",
        "term": "Study",
        "translation": "estudiar",
        "ipa": "/study/",
        "audioText": "study. We study English every afternoon.",
        "example": "We study English every afternoon.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-4",
        "term": "Relax",
        "translation": "descansar / hacer pereza",
        "ipa": "/relax/",
        "audioText": "relax. I relax and chat on Discord with friends.",
        "example": "I relax and chat on Discord with friends.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-5",
        "term": "Sleep",
        "translation": "dormir",
        "ipa": "/sleep/",
        "audioText": "sleep. I sleep 8 hours every night.",
        "example": "I sleep 8 hours every night.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-6",
        "term": "I + Base Verb",
        "translation": "I + [Acción] + at [Hora] / in the [Momento]",
        "ipa": "/i/",
        "audioText": "I wake up at 6:00 AM and have breakfast with my family.",
        "example": "I wake up at 6:00 AM and have breakfast with my family.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-5-7",
        "term": "He / She + Verb (-s / -es)",
        "translation": "He/She + [Verbo con -s]",
        "ipa": "/he/",
        "audioText": "My sister studies English in the afternoon and relaxes at night.",
        "example": "My sister studies English in the afternoon and relaxes at night.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-5-b1",
        "prompt": "Me despierto a las seis y media y estudio en la mañana.'",
        "answer": "I wake up at six thirty AM and study in the morning",
        "tokens": [
          "I",
          "wake",
          "up",
          "at",
          "six",
          "thirty",
          "AM",
          "and",
          "study",
          "in",
          "the",
          "morning",
          "early",
          "Sundays"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-5-b2",
        "prompt": "No me despierto temprano los domingos; duermo hasta las diez.'",
        "answer": "I don t wake up early on Sundays I sleep until ten o clock",
        "tokens": [
          "I",
          "don",
          "t",
          "wake",
          "up",
          "early",
          "on",
          "Sundays",
          "sleep",
          "until",
          "ten",
          "o",
          "clock",
          "thirty",
          "study"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-5-b3",
        "prompt": "¿A qué hora terminas el colegio y llegas a tu casa?'",
        "answer": "What time do you finish school and arrive back home",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "finish",
          "school",
          "and",
          "arrive",
          "back",
          "home",
          "wake",
          "thirty"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-5-e1",
        "audioText": "On weekdays, my alarm rings at 5:45 AM.",
        "correctAnswer": "On weekdays, my alarm rings at 5:45 AM.",
        "options": [
          "On weekdays, my alarm rings at 5:45 AM.",
          "I stretch, make my bed, and drink a hot cup of Colombian coffee before starting my classes.",
          "Mariana, what time do you wake up on weekdays?"
        ]
      },
      {
        "id": "0-5-e2",
        "audioText": "I stretch, make my bed, and drink a hot cup of Colombian coffee before starting my classes.",
        "correctAnswer": "I stretch, make my bed, and drink a hot cup of Colombian coffee before starting my classes.",
        "options": [
          "Mariana, what time do you wake up on weekdays?",
          "I stretch, make my bed, and drink a hot cup of Colombian coffee before starting my classes.",
          "I wake up at 6:00 AM and have breakfast with my family in Bogotá."
        ]
      },
      {
        "id": "0-5-e3",
        "audioText": "Mariana, what time do you wake up on weekdays?",
        "correctAnswer": "Mariana, what time do you wake up on weekdays?",
        "options": [
          "And what do you do after school in the afternoon?",
          "I wake up at 6:00 AM and have breakfast with my family in Bogotá.",
          "Mariana, what time do you wake up on weekdays?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-6",
    "badgeName": "Style ⭐ Icon!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-6-1",
        "term": "Wear",
        "translation": "vestir / llevar puesto",
        "ipa": "/wear/",
        "audioText": "wear. I wear oversized hoodies and sneakers.",
        "example": "I wear oversized hoodies and sneakers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-2",
        "term": "Buy",
        "translation": "comprar",
        "ipa": "/buy/",
        "audioText": "buy. We buy trendy streetwear online.",
        "example": "We buy trendy streetwear online.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-3",
        "term": "Choose",
        "translation": "elegir / escoger",
        "ipa": "/choose/",
        "audioText": "choose. I choose my outfit every morning.",
        "example": "I choose my outfit every morning.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-4",
        "term": "Match",
        "translation": "combinar / hacer juego",
        "ipa": "/match/",
        "audioText": "match. My blue cap matches my jacket perfectly.",
        "example": "My blue cap matches my jacket perfectly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-5",
        "term": "Try on",
        "translation": "medirse ropa",
        "ipa": "/try on/",
        "audioText": "try on. Can I try on these cargo pants?",
        "example": "Can I try on these cargo pants?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-6",
        "term": "I wear / I'm wearing + Outfit",
        "translation": "I wear + [Color/Estilo] + [Prenda]",
        "ipa": "/i/",
        "audioText": "I wear an oversized black hoodie and comfortable white sneakers.",
        "example": "I wear an oversized black hoodie and comfortable white sneakers.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-6-7",
        "term": "He wears / She is wearing",
        "translation": "He/She is wearing + [Color] + [Prenda]",
        "ipa": "/he/",
        "audioText": "Lucas is wearing a vintage denim jacket and dark cargo pants.",
        "example": "Lucas is wearing a vintage denim jacket and dark cargo pants.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-6-b1",
        "prompt": "Uso un buzo negro ancho y tenis deportivos cómodos.'",
        "answer": "I wear an oversized black hoodie and comfortable sneakers",
        "tokens": [
          "I",
          "wear",
          "an",
          "oversized",
          "black",
          "hoodie",
          "and",
          "comfortable",
          "sneakers",
          "formal",
          "suits"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-6-b2",
        "prompt": "No uso trajes formales; prefiero la moda urbana casual.'",
        "answer": "I don t wear formal suits I prefer casual streetwear",
        "tokens": [
          "I",
          "don",
          "t",
          "wear",
          "formal",
          "suits",
          "prefer",
          "casual",
          "streetwear",
          "oversized",
          "black"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-6-b3",
        "prompt": "¿Qué llevas puesto para la fiesta de cumpleaños de hoy?'",
        "answer": "What are you wearing to the birthday party today",
        "tokens": [
          "What",
          "are",
          "you",
          "wearing",
          "to",
          "the",
          "birthday",
          "party",
          "today",
          "oversized",
          "black"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-6-e1",
        "audioText": "Tonight I am wearing a black leather jacket, blue jeans, and clean white sneakers.",
        "correctAnswer": "Tonight I am wearing a black leather jacket, blue jeans, and clean white sneakers.",
        "options": [
          "Tonight I am wearing a black leather jacket, blue jeans, and clean white sneakers.",
          "It is stylish, simple, and very comfortable.",
          "Lucas, what are you wearing to the party today?"
        ]
      },
      {
        "id": "0-6-e2",
        "audioText": "It is stylish, simple, and very comfortable.",
        "correctAnswer": "It is stylish, simple, and very comfortable.",
        "options": [
          "Lucas, what are you wearing to the party today?",
          "It is stylish, simple, and very comfortable.",
          "I wear a black hoodie and white sneakers. It is stylish and comfortable."
        ]
      },
      {
        "id": "0-6-e3",
        "audioText": "Lucas, what are you wearing to the party today?",
        "correctAnswer": "Lucas, what are you wearing to the party today?",
        "options": [
          "Nice! My blue cap matches my jacket perfectly.",
          "I wear a black hoodie and white sneakers. It is stylish and comfortable.",
          "Lucas, what are you wearing to the party today?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-7",
    "badgeName": "Digital ⭐ Creator!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-7-1",
        "term": "Post",
        "translation": "publicar / postear",
        "ipa": "/post/",
        "audioText": "post. I post funny clips on TikTok.",
        "example": "I post funny clips on TikTok.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-2",
        "term": "Watch",
        "translation": "ver / mirar videos",
        "ipa": "/watch/",
        "audioText": "watch. We watch gaming streams together.",
        "example": "We watch gaming streams together.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-3",
        "term": "Play",
        "translation": "jugar",
        "ipa": "/play/",
        "audioText": "play. I play Battle Royale with my squad.",
        "example": "I play Battle Royale with my squad.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-4",
        "term": "Send",
        "translation": "enviar / mandar mensajes",
        "ipa": "/send/",
        "audioText": "send. I send voice notes on WhatsApp.",
        "example": "I send voice notes on WhatsApp.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-5",
        "term": "Record",
        "translation": "grabar video o audio",
        "ipa": "/record/",
        "audioText": "record. We record our matches on Discord.",
        "example": "We record our matches on Discord.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-6",
        "term": "I + always / usually + Action",
        "translation": "Always (100% todos los días) • Usually (80% casi siempre)",
        "ipa": "/i/",
        "audioText": "I always connect to Discord and I usually listen to music on Spotify.",
        "example": "I always connect to Discord and I usually listen to music on Spotify.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-7-7",
        "term": "I / He / She + sometimes",
        "translation": "Sometimes (50% a veces)",
        "ipa": "/i/",
        "audioText": "I sometimes post short gaming clips on TikTok on weekends.",
        "example": "I sometimes post short gaming clips on TikTok on weekends.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-7-b1",
        "prompt": "Nicolás: 'Siempre me conecto a Discord y escucho música en Spotify.'",
        "answer": "I always connect to Discord and listen to music on Spotify",
        "tokens": [
          "I",
          "always",
          "connect",
          "to",
          "Discord",
          "and",
          "listen",
          "music",
          "on",
          "Spotify",
          "never",
          "share"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-7-b2",
        "prompt": "Nunca comparto mis contraseñas privadas en redes sociales.'",
        "answer": "I never share my private passwords on social networks",
        "tokens": [
          "I",
          "never",
          "share",
          "my",
          "private",
          "passwords",
          "on",
          "social",
          "networks",
          "always",
          "connect"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-7-b3",
        "prompt": "Nicolás: '¿Con qué frecuencia publicas videos de juegos en TikTok?'",
        "answer": "How often do you post gaming clips on TikTok",
        "tokens": [
          "How",
          "often",
          "do",
          "you",
          "post",
          "gaming",
          "clips",
          "on",
          "TikTok",
          "always",
          "connect"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-7-e1",
        "audioText": "I always listen to English podcasts while walking to class.",
        "correctAnswer": "I always listen to English podcasts while walking to class.",
        "options": [
          "I always listen to English podcasts while walking to class.",
          "It helps me improve my listening skills and discover new music from all over the world.",
          "Mariana, I always play online with my friends on Discord on Friday night."
        ]
      },
      {
        "id": "0-7-e2",
        "audioText": "It helps me improve my listening skills and discover new music from all over the world.",
        "correctAnswer": "It helps me improve my listening skills and discover new music from all over the world.",
        "options": [
          "Mariana, I always play online with my friends on Discord on Friday night.",
          "It helps me improve my listening skills and discover new music from all over the world.",
          "Awesome! I sometimes post short videos on TikTok and watch gaming tutorials."
        ]
      },
      {
        "id": "0-7-e3",
        "audioText": "Mariana, I always play online with my friends on Discord on Friday night.",
        "correctAnswer": "Mariana, I always play online with my friends on Discord on Friday night.",
        "options": [
          "Cool! How often do you listen to music on Spotify while editing clips?",
          "Awesome! I sometimes post short videos on TikTok and watch gaming tutorials.",
          "Mariana, I always play online with my friends on Discord on Friday night."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-8",
    "badgeName": "Level 0 ⭐ Graduate!",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-8-1",
        "term": "Swim",
        "translation": "nadar",
        "ipa": "/swim/",
        "audioText": "swim. I can swim in the pool with my friends.",
        "example": "I can swim in the pool with my friends.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-2",
        "term": "Ride",
        "translation": "montar en cicla / moto",
        "ipa": "/ride/",
        "audioText": "ride. We ride our bikes around the park.",
        "example": "We ride our bikes around the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-3",
        "term": "Draw",
        "translation": "dibujar / ilustrar",
        "ipa": "/draw/",
        "audioText": "draw. She can draw anime portraits easily.",
        "example": "She can draw anime portraits easily.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-4",
        "term": "Win",
        "translation": "ganar / triunfar",
        "ipa": "/win/",
        "audioText": "win. Our soccer squad can win the cup.",
        "example": "Our soccer squad can win the cup.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-5",
        "term": "Practice",
        "translation": "practicar / entrenar",
        "ipa": "/practice/",
        "audioText": "practice. We practice every day after school.",
        "example": "We practice every day after school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-6",
        "term": "I can + Base Verb",
        "translation": "I can + [Verbo base] (habilidad física o conocimiento)",
        "ipa": "/i/",
        "audioText": "I can ride a bike very fast and I can play soccer as a forward.",
        "example": "I can ride a bike very fast and I can play soccer as a forward.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-8-7",
        "term": "He / She can + Base Verb",
        "translation": "He/She can + [Verbo base] (¡sin '-s'!)",
        "ipa": "/he/",
        "audioText": "Sofia can sing beautifully and Lucas can do amazing kickflips.",
        "example": "Sofia can sing beautifully and Lucas can do amazing kickflips.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-8-b1",
        "prompt": "Puedo montar en cicla rápido y sé jugar fútbol.'",
        "answer": "I can ride a bike fast and I can play soccer",
        "tokens": [
          "I",
          "can",
          "ride",
          "a",
          "bike",
          "fast",
          "and",
          "play",
          "soccer",
          "skateboard",
          "surf"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-8-b2",
        "prompt": "Sofía: 'No sé montar en patineta ni surfear todavía, pero estoy aprendiendo.'",
        "answer": "I can t skateboard or surf yet but I am learning every day",
        "tokens": [
          "I",
          "can",
          "t",
          "skateboard",
          "or",
          "surf",
          "yet",
          "but",
          "am",
          "learning",
          "every",
          "day",
          "ride",
          "bike"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-8-b3",
        "prompt": "¿Sabes hablar inglés con confianza y fluidez?'",
        "answer": "Can you speak English with confidence and fluency",
        "tokens": [
          "Can",
          "you",
          "speak",
          "English",
          "with",
          "confidence",
          "and",
          "fluency",
          "ride",
          "bike"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-8-e1",
        "audioText": "Welcome to soccer tryouts!",
        "correctAnswer": "Welcome to soccer tryouts!",
        "options": [
          "Welcome to soccer tryouts!",
          "If you can run, pass the ball accurately, and communicate well with your team, you have a great chance of making the squad.",
          "Sofia, what sports or talents can you do for the festival?"
        ]
      },
      {
        "id": "0-8-e2",
        "audioText": "If you can run, pass the ball accurately, and communicate well with your team, you have a great chance of making the squad.",
        "correctAnswer": "If you can run, pass the ball accurately, and communicate well with your team, you have a great chance of making the squad.",
        "options": [
          "Sofia, what sports or talents can you do for the festival?",
          "If you can run, pass the ball accurately, and communicate well with your team, you have a great chance of making the squad.",
          "I can ride a bike very fast and play soccer forward on the school team."
        ]
      },
      {
        "id": "0-8-e3",
        "audioText": "Sofia, what sports or talents can you do for the festival?",
        "correctAnswer": "Sofia, what sports or talents can you do for the festival?",
        "options": [
          "Awesome! I can't skateboard yet, but I am learning kickflips every afternoon.",
          "I can ride a bike very fast and play soccer forward on the school team.",
          "Sofia, what sports or talents can you do for the festival?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-9",
    "badgeName": "My Hobbies & Free Time",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-9-1",
        "term": "Play",
        "translation": "Jugar / Tocar instrumento",
        "ipa": "/pleɪ/",
        "audioText": "Play. I play online video games.",
        "example": "I play online video games.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-2",
        "term": "Draw",
        "translation": "Dibujar",
        "ipa": "/drɔː/",
        "audioText": "Draw. She draws amazing manga art.",
        "example": "She draws amazing manga art.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-3",
        "term": "Skate",
        "translation": "Patinar",
        "ipa": "/skeɪt/",
        "audioText": "Skate. We skate in the central park.",
        "example": "We skate in the central park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-4",
        "term": "Listen",
        "translation": "Escuchar música",
        "ipa": "/ˈlɪsn/",
        "audioText": "Listen. I listen to urban beats.",
        "example": "I listen to urban beats.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-5",
        "term": "Dance",
        "translation": "Bailar",
        "ipa": "/dæns/",
        "audioText": "Dance. They dance hip-hop with style.",
        "example": "They dance hip-hop with style.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-6",
        "term": "I like gaming",
        "translation": "Sujeto + like/love/enjoy + Verbo terminado en -ING.",
        "ipa": "/i/",
        "audioText": "I love playing online video games with my best friends every Saturday.",
        "example": "I love playing online video games with my best friends every Saturday.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-9-7",
        "term": "He likes drawing",
        "translation": "Agrega 's' al verbo de preferencia: likes, loves, enjoys.",
        "ipa": "/he/",
        "audioText": "My sister enjoys creating digital art and illustrations on her iPad.",
        "example": "My sister enjoys creating digital art and illustrations on her iPad.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-9-b1",
        "prompt": "A mí me encanta jugar videojuegos en línea con mis amigos.",
        "answer": "I love playing online video games with my friends",
        "tokens": [
          "I",
          "love",
          "playing",
          "online",
          "video",
          "games",
          "with",
          "my",
          "friends",
          "like",
          "waking"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-9-b2",
        "prompt": "A mí no me gusta levantarme temprano los domingos.",
        "answer": "I do not like waking up early on Sundays",
        "tokens": [
          "I",
          "do",
          "not",
          "like",
          "waking",
          "up",
          "early",
          "on",
          "Sundays",
          "love",
          "playing"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-9-b3",
        "prompt": "¿Qué te gusta hacer a ti en tus tiempos libres?",
        "answer": "What do you like doing in your free time",
        "tokens": [
          "What",
          "do",
          "you",
          "like",
          "doing",
          "in",
          "your",
          "free",
          "time",
          "love",
          "playing"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-9-e1",
        "audioText": "In my free time, I love playing the electric guitar and streaming video games with my squad on Discord.",
        "correctAnswer": "In my free time, I love playing the electric guitar and streaming video games with my squad on Discord.",
        "options": [
          "In my free time, I love playing the electric guitar and streaming video games with my squad on Discord.",
          "I love playing online video games with my friends.",
          "I do not like waking up early on Sundays."
        ]
      },
      {
        "id": "0-9-e2",
        "audioText": "I love playing online video games with my friends.",
        "correctAnswer": "I love playing online video games with my friends.",
        "options": [
          "I do not like waking up early on Sundays.",
          "I love playing online video games with my friends.",
          "What do you like doing in your free time?"
        ]
      },
      {
        "id": "0-9-e3",
        "audioText": "I do not like waking up early on Sundays.",
        "correctAnswer": "I do not like waking up early on Sundays.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What do you like doing in your free time?",
          "I do not like waking up early on Sundays."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-10",
    "badgeName": "Family & Friends",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-10-1",
        "term": "Help",
        "translation": "Ayudar",
        "ipa": "/help/",
        "audioText": "Help. I help my parents at home.",
        "example": "I help my parents at home.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-2",
        "term": "Share",
        "translation": "Compartir",
        "ipa": "/ʃer/",
        "audioText": "Share. We share snacks with my brother.",
        "example": "We share snacks with my brother.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-3",
        "term": "Visit",
        "translation": "Visitar",
        "ipa": "/ˈvɪzɪt/",
        "audioText": "Visit. I visit my grandparents on Sunday.",
        "example": "I visit my grandparents on Sunday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-4",
        "term": "Care",
        "translation": "Cuidar / Importar",
        "ipa": "/ker/",
        "audioText": "Care. We care for each other.",
        "example": "We care for each other.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-5",
        "term": "Love",
        "translation": "Amar / Querer",
        "ipa": "/lʌv/",
        "audioText": "Love. I love my family deeply.",
        "example": "I love my family deeply.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-6",
        "term": "My brother",
        "translation": "Usa 'his' para hombres y 'her' para mujeres.",
        "ipa": "/my/",
        "audioText": "This is my brother. His name is Mateo and he is fifteen years old.",
        "example": "This is my brother. His name is Mateo and he is fifteen years old.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-10-7",
        "term": "Our family",
        "translation": "Our = de nosotros | Their = de ellos.",
        "ipa": "/our/",
        "audioText": "Our family loves gathering for traditional barbecue on Sundays.",
        "example": "Our family loves gathering for traditional barbecue on Sundays.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-10-b1",
        "prompt": "Este es mi hermano y su nombre es Mateo.",
        "answer": "This is my brother and his name is Mateo",
        "tokens": [
          "This",
          "is",
          "my",
          "brother",
          "and",
          "his",
          "name",
          "Mateo",
          "sister",
          "favorite"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-10-b2",
        "prompt": "Ella no es mi hermana ella es mi prima favorita.",
        "answer": "She is not my sister she is my favorite cousin",
        "tokens": [
          "She",
          "is",
          "not",
          "my",
          "sister",
          "she",
          "favorite",
          "cousin",
          "This",
          "brother"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-10-b3",
        "prompt": "¿Es ese chico alto con gorra tu hermano mayor?",
        "answer": "Is that tall boy with the cap your older brother",
        "tokens": [
          "Is",
          "that",
          "tall",
          "boy",
          "with",
          "the",
          "cap",
          "your",
          "older",
          "brother",
          "This",
          "name"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-10-e1",
        "audioText": "My best friend is Sofia.",
        "correctAnswer": "My best friend is Sofia.",
        "options": [
          "My best friend is Sofia.",
          "Her favorite hobby is playing the acoustic guitar and our dream is to form a musical band together.",
          "This is my brother and his name is Mateo."
        ]
      },
      {
        "id": "0-10-e2",
        "audioText": "Her favorite hobby is playing the acoustic guitar and our dream is to form a musical band together.",
        "correctAnswer": "Her favorite hobby is playing the acoustic guitar and our dream is to form a musical band together.",
        "options": [
          "This is my brother and his name is Mateo.",
          "Her favorite hobby is playing the acoustic guitar and our dream is to form a musical band together.",
          "She is not my sister she is my favorite cousin."
        ]
      },
      {
        "id": "0-10-e3",
        "audioText": "This is my brother and his name is Mateo.",
        "correctAnswer": "This is my brother and his name is Mateo.",
        "options": [
          "Is that tall boy with the cap your older brother?",
          "She is not my sister she is my favorite cousin.",
          "This is my brother and his name is Mateo."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-11",
    "badgeName": "Alphabet, Spelling & Social Usernames",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-11-1",
        "term": "Spell",
        "translation": "Deletrear",
        "ipa": "/spel/",
        "audioText": "Spell. How do you spell your name?",
        "example": "How do you spell your name?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-2",
        "term": "Repeat",
        "translation": "Repetir",
        "ipa": "/rɪˈpiːt/",
        "audioText": "Repeat. Please repeat the last letter.",
        "example": "Please repeat the last letter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-3",
        "term": "Write",
        "translation": "Escribir",
        "ipa": "/raɪt/",
        "audioText": "Write. Write your email address clearly.",
        "example": "Write your email address clearly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-4",
        "term": "Pronounce",
        "translation": "Pronunciar",
        "ipa": "/prəˈnaʊns/",
        "audioText": "Pronounce. Pronounce the vowels with rhythm.",
        "example": "Pronounce the vowels with rhythm.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-5",
        "term": "Follow",
        "translation": "Seguir en redes",
        "ipa": "/ˈfɑːloʊ/",
        "audioText": "Follow. Follow my gaming account.",
        "example": "Follow my gaming account.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-6",
        "term": "A (/eɪ/)",
        "translation": "Memoriza el sonido de las vocales para no confundir E con I ni A con E.",
        "ipa": "/a/",
        "audioText": "My name is David: D - A - V - I - D.",
        "example": "My name is David: D - A - V - I - D.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-11-7",
        "term": "G (/dʒiː/) vs J (/dʒeɪ/)",
        "translation": "Distingue los sonidos de labios y vibración en consonantes parecidas.",
        "ipa": "/g/",
        "audioText": "My gamer tag is JayGamer: J - A - Y - G - A - M - E - R.",
        "example": "My gamer tag is JayGamer: J - A - Y - G - A - M - E - R.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-11-b1",
        "prompt": "Mi apellido se deletrea V - A - R - G - A - S.",
        "answer": "My last name is spelled V A R G A S",
        "tokens": [
          "My",
          "last",
          "name",
          "is",
          "spelled",
          "V",
          "A",
          "R",
          "G",
          "S",
          "email",
          "does"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-11-b2",
        "prompt": "Mi correo no tiene números ni guiones intermedios.",
        "answer": "My email does not have numbers or hyphens",
        "tokens": [
          "My",
          "email",
          "does",
          "not",
          "have",
          "numbers",
          "or",
          "hyphens",
          "last",
          "name"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-11-b3",
        "prompt": "¿Cómo deletreas tú tu nombre de usuario en Discord?",
        "answer": "How do you spell your Discord username",
        "tokens": [
          "How",
          "do",
          "you",
          "spell",
          "your",
          "Discord",
          "username",
          "last",
          "spelled"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-11-e1",
        "audioText": "My official email address is camilo vargas at gmail dot com.",
        "correctAnswer": "My official email address is camilo vargas at gmail dot com.",
        "options": [
          "My official email address is camilo vargas at gmail dot com.",
          "That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
          "My last name is spelled V - A - R - G - A - S."
        ]
      },
      {
        "id": "0-11-e2",
        "audioText": "That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
        "correctAnswer": "That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
        "options": [
          "My last name is spelled V - A - R - G - A - S.",
          "That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
          "My email does not have numbers or hyphens."
        ]
      },
      {
        "id": "0-11-e3",
        "audioText": "My last name is spelled V - A - R - G - A - S.",
        "correctAnswer": "My last name is spelled V - A - R - G - A - S.",
        "options": [
          "How do you spell your Discord username?",
          "My email does not have numbers or hyphens.",
          "My last name is spelled V - A - R - G - A - S."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-12",
    "badgeName": "Full Teen Profile",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-12-1",
        "term": "Live",
        "translation": "Vivir",
        "ipa": "/lɪv/",
        "audioText": "Live. I live in Bogota, Colombia.",
        "example": "I live in Bogota, Colombia.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-2",
        "term": "Study",
        "translation": "Estudiar",
        "ipa": "/ˈstʌdi/",
        "audioText": "Study. I study in eighth grade.",
        "example": "I study in eighth grade.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-3",
        "term": "Enjoy",
        "translation": "Disfrutar",
        "ipa": "/ɪnˈdʒɔɪ/",
        "audioText": "Enjoy. I enjoy playing video games.",
        "example": "I enjoy playing video games.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-4",
        "term": "Practice",
        "translation": "Practicar",
        "ipa": "/ˈpræktɪs/",
        "audioText": "Practice. I practice English every day.",
        "example": "I practice English every day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-5",
        "term": "Dream",
        "translation": "Soñar / Anhelar",
        "ipa": "/driːm/",
        "audioText": "Dream. I dream of traveling abroad.",
        "example": "I dream of traveling abroad.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-6",
        "term": "Hello! My name is Santiago and I am fourteen years old.",
        "translation": "Usa 'I am + número + years old' (NUNCA 'I have ... years').",
        "ipa": "/hello/",
        "audioText": "Hello everyone! My name is Santiago and I am fourteen years old.",
        "example": "Hello everyone! My name is Santiago and I am fourteen years old.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-12-7",
        "term": "I live in Bogota, Colombia",
        "translation": "Usa 'I live in [Ciudad]' e 'I am in [Grado] grade'.",
        "ipa": "/i/",
        "audioText": "I live in Medellin, Colombia and I am in ninth grade at school.",
        "example": "I live in Medellin, Colombia and I am in ninth grade at school.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-12-b1",
        "prompt": "Mi nombre es Mariana tengo catorce años y vivo en Colombia.",
        "answer": "My name is Mariana I am fourteen years old and I live in Colombia",
        "tokens": [
          "My",
          "name",
          "is",
          "Mariana",
          "I",
          "am",
          "fourteen",
          "years",
          "old",
          "and",
          "live",
          "in",
          "Colombia",
          "like",
          "waking"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-12-b2",
        "prompt": "A mí no me gusta levantarme temprano los lunes fríos.",
        "answer": "I do not like waking up early on cold Mondays",
        "tokens": [
          "I",
          "do",
          "not",
          "like",
          "waking",
          "up",
          "early",
          "on",
          "cold",
          "Mondays",
          "name",
          "Mariana"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-12-b3",
        "prompt": "¿En qué grado estás tú y cuál es tu pasatiempo favorito?",
        "answer": "What grade are you in and what is your favorite hobby",
        "tokens": [
          "What",
          "grade",
          "are",
          "you",
          "in",
          "and",
          "what",
          "is",
          "your",
          "favorite",
          "hobby",
          "name",
          "Mariana"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-12-e1",
        "audioText": "I am Carlos, I am fifteen years old, I live in Bogota and my biggest passion is programming video games.",
        "correctAnswer": "I am Carlos, I am fifteen years old, I live in Bogota and my biggest passion is programming video games.",
        "options": [
          "I am Carlos, I am fifteen years old, I live in Bogota and my biggest passion is programming video games.",
          "My name is Mariana I am fourteen years old and I live in Colombia.",
          "I do not like waking up early on cold Mondays."
        ]
      },
      {
        "id": "0-12-e2",
        "audioText": "My name is Mariana I am fourteen years old and I live in Colombia.",
        "correctAnswer": "My name is Mariana I am fourteen years old and I live in Colombia.",
        "options": [
          "I do not like waking up early on cold Mondays.",
          "My name is Mariana I am fourteen years old and I live in Colombia.",
          "What grade are you in and what is your favorite hobby?"
        ]
      },
      {
        "id": "0-12-e3",
        "audioText": "I do not like waking up early on cold Mondays.",
        "correctAnswer": "I do not like waking up early on cold Mondays.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What grade are you in and what is your favorite hobby?",
          "I do not like waking up early on cold Mondays."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-13",
    "badgeName": "Clothes, Personal Style & Streetwear",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-13-1",
        "term": "Wear",
        "translation": "Llevar puesto / Vestir",
        "ipa": "/wer/",
        "audioText": "Wear. I am wearing a warm hoodie.",
        "example": "I am wearing a warm hoodie.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-2",
        "term": "Choose",
        "translation": "Elegir / Escoger ropa",
        "ipa": "/tʃuːz/",
        "audioText": "Choose. She chose the red jacket.",
        "example": "She chose the red jacket.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-3",
        "term": "Match",
        "translation": "Combinar / Hacer juego",
        "ipa": "/mætʃ/",
        "audioText": "Match. Your sneakers match your cap.",
        "example": "Your sneakers match your cap.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-4",
        "term": "Buy",
        "translation": "Comprar ropa",
        "ipa": "/baɪ/",
        "audioText": "Buy. I bought cool skate shoes.",
        "example": "I bought cool skate shoes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-5",
        "term": "Put on",
        "translation": "Ponerse una prenda",
        "ipa": "/pʊt ɑːn/",
        "audioText": "Put on. Put on your jacket; it is cold.",
        "example": "Put on your jacket; it is cold.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-6",
        "term": "I am wearing a black hoodie",
        "translation": "Sujeto + am/is/are + wearing + [Color] + [Prenda].",
        "ipa": "/i/",
        "audioText": "I am wearing an oversized black hoodie and comfortable white sneakers.",
        "example": "I am wearing an oversized black hoodie and comfortable white sneakers.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-13-7",
        "term": "Blue jeans (jeans)",
        "translation": "NO llevan 'a' ni 'an' porque son plurales.",
        "ipa": "/blue/",
        "audioText": "My friend Mateo is wearing dark blue jeans and black sunglasses.",
        "example": "My friend Mateo is wearing dark blue jeans and black sunglasses.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-13-b1",
        "prompt": "Yo llevo puesto un buzo negro y tenis blancos cómodos.",
        "answer": "I am wearing a black hoodie and comfortable white sneakers",
        "tokens": [
          "I",
          "am",
          "wearing",
          "a",
          "black",
          "hoodie",
          "and",
          "comfortable",
          "white",
          "sneakers",
          "formal",
          "school"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-13-b2",
        "prompt": "Yo no llevo puesto uniforme escolar formal los fines de semana.",
        "answer": "I am not wearing a formal school uniform on weekends",
        "tokens": [
          "I",
          "am",
          "not",
          "wearing",
          "a",
          "formal",
          "school",
          "uniform",
          "on",
          "weekends",
          "black",
          "hoodie"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-13-b3",
        "prompt": "¿Qué ropa llevas puesta tú para ir a la fiesta hoy?",
        "answer": "What clothes are you wearing to go to the party today",
        "tokens": [
          "What",
          "clothes",
          "are",
          "you",
          "wearing",
          "to",
          "go",
          "the",
          "party",
          "today",
          "black",
          "hoodie"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-13-e1",
        "audioText": "Today I am wearing a comfortable grey hoodie, dark blue jeans, and my favorite white athletic sneakers.",
        "correctAnswer": "Today I am wearing a comfortable grey hoodie, dark blue jeans, and my favorite white athletic sneakers.",
        "options": [
          "Today I am wearing a comfortable grey hoodie, dark blue jeans, and my favorite white athletic sneakers.",
          "I am wearing a black hoodie and comfortable white sneakers.",
          "I am not wearing a formal school uniform on weekends."
        ]
      },
      {
        "id": "0-13-e2",
        "audioText": "I am wearing a black hoodie and comfortable white sneakers.",
        "correctAnswer": "I am wearing a black hoodie and comfortable white sneakers.",
        "options": [
          "I am not wearing a formal school uniform on weekends.",
          "I am wearing a black hoodie and comfortable white sneakers.",
          "What clothes are you wearing to go to the party today?"
        ]
      },
      {
        "id": "0-13-e3",
        "audioText": "I am not wearing a formal school uniform on weekends.",
        "correctAnswer": "I am not wearing a formal school uniform on weekends.",
        "options": [
          "I am not wearing a formal evening uniform on weekends.",
          "What clothes are you wearing to go to the party today?",
          "I am not wearing a formal school uniform on weekends."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-14",
    "badgeName": "School Subjects & Classroom Life",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-14-1",
        "term": "Learn",
        "translation": "Aprender",
        "ipa": "/lɜːrn/",
        "audioText": "Learn. I learn new English words.",
        "example": "I learn new English words.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-2",
        "term": "Read",
        "translation": "Leer libros",
        "ipa": "/riːd/",
        "audioText": "Read. We read historical texts in class.",
        "example": "We read historical texts in class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-3",
        "term": "Write",
        "translation": "Escribir apuntes",
        "ipa": "/raɪt/",
        "audioText": "Write. Write the summary in your notebook.",
        "example": "Write the summary in your notebook.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-4",
        "term": "Calculate",
        "translation": "Calcular en matemáticas",
        "ipa": "/ˈkælkjuleɪt/",
        "audioText": "Calculate. She calculated the math equation.",
        "example": "She calculated the math equation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-5",
        "term": "Experiment",
        "translation": "Experimentar en ciencias",
        "ipa": "/ɪkˈsperɪment/",
        "audioText": "Experiment. We experimented in the science lab.",
        "example": "We experimented in the science lab.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-6",
        "term": "This is my notebook",
        "translation": "Usa 'This is' para señalar un objeto singular que tienes en la mano o muy cerca.",
        "ipa": "/this/",
        "audioText": "This is my new graphic design notebook for arts class.",
        "example": "This is my new graphic design notebook for arts class.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-14-7",
        "term": "That is the science lab",
        "translation": "Usa 'That is' para señalar un objeto o lugar singular a distancia.",
        "ipa": "/that/",
        "audioText": "That is our chemistry laboratory at the end of the school hallway.",
        "example": "That is our chemistry laboratory at the end of the school hallway.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-14-b1",
        "prompt": "Este es mi cuaderno nuevo de inglés para tomar apuntes.",
        "answer": "This is my new English notebook to take notes",
        "tokens": [
          "This",
          "is",
          "my",
          "new",
          "English",
          "notebook",
          "to",
          "take",
          "notes",
          "That",
          "classroom"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-14-b2",
        "prompt": "Esa no es nuestra aula esa es la sala de profesores.",
        "answer": "That is not our classroom that is the teachers room",
        "tokens": [
          "That",
          "is",
          "not",
          "our",
          "classroom",
          "that",
          "the",
          "teachers",
          "room",
          "This",
          "English"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-14-b3",
        "prompt": "¿Son estos marcadores de colores para la clase de artes?",
        "answer": "Are these colored markers for the arts class",
        "tokens": [
          "Are",
          "these",
          "colored",
          "markers",
          "for",
          "the",
          "arts",
          "class",
          "This",
          "English"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-14-e1",
        "audioText": "Good morning class!",
        "correctAnswer": "Good morning class!",
        "options": [
          "Good morning class!",
          "Today we have Math first, and right after the morning break, we have our fun Science experiment in the chemistry lab.",
          "This is my new English notebook to take notes."
        ]
      },
      {
        "id": "0-14-e2",
        "audioText": "Today we have Math first, and right after the morning break, we have our fun Science experiment in the chemistry lab.",
        "correctAnswer": "Today we have Math first, and right after the morning break, we have our fun Science experiment in the chemistry lab.",
        "options": [
          "This is my new English notebook to take notes.",
          "Today we have Math first, and right after the morning break, we have our fun Science experiment in the chemistry lab.",
          "That is not our classroom that is the teachers room."
        ]
      },
      {
        "id": "0-14-e3",
        "audioText": "This is my new English notebook to take notes.",
        "correctAnswer": "This is my new English notebook to take notes.",
        "options": [
          "Are these colored markers for the arts class?",
          "That is not our classroom that is the teachers room.",
          "This is my new English notebook to take notes."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-15",
    "badgeName": "Basic Daily Routine & Clock Time",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-15-1",
        "term": "Wake up",
        "translation": "Despertarse",
        "ipa": "/weɪk ʌp/",
        "audioText": "Wake up. I wake up at 6:30 AM.",
        "example": "I wake up at 6:30 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-2",
        "term": "Have",
        "translation": "Tomar comida (have breakfast/lunch)",
        "ipa": "/hæv/",
        "audioText": "Have. I have breakfast with my mom.",
        "example": "I have breakfast with my mom.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-3",
        "term": "Go",
        "translation": "Ir al colegio / a la cama",
        "ipa": "/ɡoʊ/",
        "audioText": "Go. I go to school by bus.",
        "example": "I go to school by bus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-4",
        "term": "Finish",
        "translation": "Terminar tareas",
        "ipa": "/ˈfɪnɪʃ/",
        "audioText": "Finish. I finish homework early.",
        "example": "I finish homework early.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-5",
        "term": "Relax",
        "translation": "Relajarse / Descansar",
        "ipa": "/rɪˈlæks/",
        "audioText": "Relax. I relax and play video games.",
        "example": "I relax and play video games.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-6",
        "term": "I wake up at 6:00 AM",
        "translation": "Sujeto + Verbo de rutina en presente + at [Hora].",
        "ipa": "/i/",
        "audioText": "I wake up at 6:30 AM every morning and take a refreshing shower.",
        "example": "I wake up at 6:30 AM every morning and take a refreshing shower.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-15-7",
        "term": "He wakes up early",
        "translation": "Agrega -s o -es al verbo (have ➔ has, go ➔ goes, do ➔ does).",
        "ipa": "/he/",
        "audioText": "My sister has lunch at 1:30 PM and finishes her homework in the afternoon.",
        "example": "My sister has lunch at 1:30 PM and finishes her homework in the afternoon.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-15-b1",
        "prompt": "Yo me despierto a las seis y media y tomo un desayuno delicioso.",
        "answer": "I wake up at six thirty and have a delicious breakfast",
        "tokens": [
          "I",
          "wake",
          "up",
          "at",
          "six",
          "thirty",
          "and",
          "have",
          "a",
          "delicious",
          "breakfast",
          "stay",
          "late"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-15-b2",
        "prompt": "Yo no me quedo despierto hasta tarde en noches de colegio.",
        "answer": "I do not stay up late on school nights",
        "tokens": [
          "I",
          "do",
          "not",
          "stay",
          "up",
          "late",
          "on",
          "school",
          "nights",
          "wake",
          "thirty"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-15-b3",
        "prompt": "¿A qué hora te vas a dormir tú usualmente los domingos?",
        "answer": "What time do you usually go to sleep on Sundays",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "usually",
          "go",
          "to",
          "sleep",
          "on",
          "Sundays",
          "wake",
          "thirty"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-15-e1",
        "audioText": "On school days, I wake up at 6:30 AM, attend classes until 2:30 PM, and have dinner with my family at 7:30 PM.",
        "correctAnswer": "On school days, I wake up at 6:30 AM, attend classes until 2:30 PM, and have dinner with my family at 7:30 PM.",
        "options": [
          "On school days, I wake up at 6:30 AM, attend classes until 2:30 PM, and have dinner with my family at 7:30 PM.",
          "I wake up at six thirty and have a delicious breakfast.",
          "I do not stay up late on school nights."
        ]
      },
      {
        "id": "0-15-e2",
        "audioText": "I wake up at six thirty and have a delicious breakfast.",
        "correctAnswer": "I wake up at six thirty and have a delicious breakfast.",
        "options": [
          "I do not stay up late on school nights.",
          "I wake up at six thirty and have a delicious breakfast.",
          "What time do you usually go to sleep on Sundays?"
        ]
      },
      {
        "id": "0-15-e3",
        "audioText": "I do not stay up late on school nights.",
        "correctAnswer": "I do not stay up late on school nights.",
        "options": [
          "I do not stay up late on evening nights.",
          "What time do you usually go to sleep on Sundays?",
          "I do not stay up late on school nights."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-16",
    "badgeName": "Level 0 Grand Review & Final Challenge 🏆",
    "badgeEmoji": "🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-16-1",
        "term": "Speak",
        "translation": "Hablar inglés",
        "ipa": "/spiːk/",
        "audioText": "Speak. I speak English with confidence.",
        "example": "I speak English with confidence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-2",
        "term": "Learn",
        "translation": "Aprender",
        "ipa": "/lɜːrn/",
        "audioText": "Learn. I learned 16 complete classes.",
        "example": "I learned 16 complete classes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-3",
        "term": "Practice",
        "translation": "Practicar a diario",
        "ipa": "/ˈpræktɪs/",
        "audioText": "Practice. I practice English every single day.",
        "example": "I practice English every single day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-4",
        "term": "Express",
        "translation": "Expresar ideas",
        "ipa": "/ɪkˈspres/",
        "audioText": "Express. I express my passions clearly.",
        "example": "I express my passions clearly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-5",
        "term": "Succeed",
        "translation": "Tener éxito / Triunfar",
        "ipa": "/səkˈsiːd/",
        "audioText": "Succeed. We succeeded in Level 0 graduation.",
        "example": "We succeeded in Level 0 graduation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-6",
        "term": "I am Santiago",
        "translation": "Usa el verbo To Be para nombre, edad, origen y estados de ánimo.",
        "ipa": "/i/",
        "audioText": "I am Santiago, I am fourteen years old, and I am from Colombia.",
        "example": "I am Santiago, I am fourteen years old, and I am from Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-16-7",
        "term": "His name is Mateo",
        "translation": "His = de él | Her = de ella | Our = de nosotros.",
        "ipa": "/his/",
        "audioText": "His name is Mateo, her name is Sofia, and our squad is the best.",
        "example": "His name is Mateo, her name is Sofia, and our squad is the best.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-16-b1",
        "prompt": "Hoy somos orgullosos graduados del Nivel Cero en inglés.",
        "answer": "Today we are proud Level Zero graduates in English",
        "tokens": [
          "Today",
          "we",
          "are",
          "proud",
          "Level",
          "Zero",
          "graduates",
          "in",
          "English",
          "give",
          "difficult"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-16-b2",
        "prompt": "Nosotros no nos rendimos ante las pronunciaciones difíciles.",
        "answer": "We do not give up on difficult pronunciations",
        "tokens": [
          "We",
          "do",
          "not",
          "give",
          "up",
          "on",
          "difficult",
          "pronunciations",
          "Today",
          "proud"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "0-16-b3",
        "prompt": "¿Estás listo para conquistar las aventuras del Nivel Uno?",
        "answer": "Are you ready to conquer the adventures of Level One",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "conquer",
          "the",
          "adventures",
          "of",
          "Level",
          "One",
          "Today",
          "proud"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-16-e1",
        "audioText": "Congratulations teens!",
        "correctAnswer": "Congratulations teens!",
        "options": [
          "Congratulations teens!",
          "You have completed all 16 classes of Level 0 with total dedication, and you now speak English with great confidence and clear pronunciation.",
          "Today we are proud Level Zero graduates in English."
        ]
      },
      {
        "id": "0-16-e2",
        "audioText": "You have completed all 16 classes of Level 0 with total dedication, and you now speak English with great confidence and clear pronunciation.",
        "correctAnswer": "You have completed all 16 classes of Level 0 with total dedication, and you now speak English with great confidence and clear pronunciation.",
        "options": [
          "Today we are proud Level Zero graduates in English.",
          "You have completed all 16 classes of Level 0 with total dedication, and you now speak English with great confidence and clear pronunciation.",
          "We do not give up on difficult pronunciations."
        ]
      },
      {
        "id": "0-16-e3",
        "audioText": "Today we are proud Level Zero graduates in English.",
        "correctAnswer": "Today we are proud Level Zero graduates in English.",
        "options": [
          "Are you ready to conquer the adventures of Level One?",
          "We do not give up on difficult pronunciations.",
          "Today we are proud Level Zero graduates in English."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-1",
    "badgeName": "Personality Master",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-1-1",
        "term": "Describe",
        "translation": "describir personalidades",
        "ipa": "/describe/",
        "audioText": "describe. I can describe my best friend easily.",
        "example": "I can describe my best friend easily.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-2",
        "term": "Share",
        "translation": "compartir gustos y momentos",
        "ipa": "/share/",
        "audioText": "share. We share fun memories and snacks.",
        "example": "We share fun memories and snacks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-3",
        "term": "Trust",
        "translation": "confiar en alguien",
        "ipa": "/trust/",
        "audioText": "trust. I trust my teammates during every match.",
        "example": "I trust my teammates during every match.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-4",
        "term": "Support",
        "translation": "apoyar / respaldar",
        "ipa": "/support/",
        "audioText": "support. Good friends support each other in hard times.",
        "example": "Good friends support each other in hard times.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-5",
        "term": "Inspire",
        "translation": "inspirar / motivar",
        "ipa": "/inspire/",
        "audioText": "inspire. Her creative art inspires the whole class.",
        "example": "Her creative art inspires the whole class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-6",
        "term": "I / You / We / They + have",
        "translation": "HAVE con plurales y primera persona",
        "ipa": "/i/",
        "audioText": "I have three close friends and we have a very energetic squad.",
        "example": "I have three close friends and we have a very energetic squad.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-1-7",
        "term": "He / She + has",
        "translation": "HAS con tercera persona singular",
        "ipa": "/he/",
        "audioText": "Leo has a great sense of humor and he is super friendly with everyone.",
        "example": "Leo has a great sense of humor and he is super friendly with everyone.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-1-b1",
        "prompt": "Mi mejor amigo Leo tiene una personalidad creativa y genial.'",
        "answer": "My best friend Leo has a creative personality and great energy",
        "tokens": [
          "My",
          "best",
          "friend",
          "Leo",
          "has",
          "a",
          "creative",
          "personality",
          "and",
          "great",
          "energy",
          "doesn",
          "have"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-1-b2",
        "prompt": "Él no tiene un estilo callado; es súper extrovertido.'",
        "answer": "He doesn t have a quiet vibe he is super outgoing",
        "tokens": [
          "He",
          "doesn",
          "t",
          "have",
          "a",
          "quiet",
          "vibe",
          "he",
          "is",
          "super",
          "outgoing",
          "best",
          "friend"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-1-b3",
        "prompt": "¿Tiene tu nuevo compañero una actitud servicial en el colegio?'",
        "answer": "Does your new classmate have a helpful attitude at school",
        "tokens": [
          "Does",
          "your",
          "new",
          "classmate",
          "have",
          "a",
          "helpful",
          "attitude",
          "at",
          "school",
          "best",
          "friend"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-1-e1",
        "audioText": "Welcome to our team!",
        "correctAnswer": "Welcome to our team!",
        "options": [
          "Welcome to our team!",
          "My best friend Leo is super creative and always has cool ideas for our school projects.",
          "He is very friendly, loyal, and loves meeting new people."
        ]
      },
      {
        "id": "1-1-e2",
        "audioText": "My best friend Leo is super creative and always has cool ideas for our school projects.",
        "correctAnswer": "My best friend Leo is super creative and always has cool ideas for our school projects.",
        "options": [
          "He is very friendly, loyal, and loves meeting new people.",
          "My best friend Leo is super creative and always has cool ideas for our school projects.",
          "My best friend Leo is super creative and always has cool ideas for our evening projects."
        ]
      },
      {
        "id": "1-1-e3",
        "audioText": "He is very friendly, loyal, and loves meeting new people.",
        "correctAnswer": "He is very friendly, loyal, and loves meeting new people.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "He rarely very friendly, loyal, and loves meeting new people.",
          "He is very friendly, loyal, and loves meeting new people."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-2",
    "badgeName": "Nutrition Explorer",
    "badgeEmoji": "🥑",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-2-1",
        "term": "Choose",
        "translation": "elegir / optar por",
        "ipa": "/choose/",
        "audioText": "choose. I choose water because I want steady focus.",
        "example": "I choose water because I want steady focus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-2",
        "term": "Fuel",
        "translation": "alimentar / dar energía",
        "ipa": "/fuel/",
        "audioText": "fuel. Wholesome meals fuel my body for soccer.",
        "example": "Wholesome meals fuel my body for soccer.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-3",
        "term": "Avoid",
        "translation": "evitar comida chatarra",
        "ipa": "/avoid/",
        "audioText": "avoid. I avoid sugary drinks before practice.",
        "example": "I avoid sugary drinks before practice.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-4",
        "term": "Boost",
        "translation": "aumentar / potenciar energía",
        "ipa": "/boost/",
        "audioText": "boost. Fresh oranges boost my immune system.",
        "example": "Fresh oranges boost my immune system.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-5",
        "term": "Prepare",
        "translation": "preparar comidas",
        "ipa": "/prepare/",
        "audioText": "prepare. We prepare healthy chicken sandwiches.",
        "example": "We prepare healthy chicken sandwiches.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-6",
        "term": "I + choose / eat + [Food] + because...",
        "translation": "Oración principal + because + Razón",
        "ipa": "/i/",
        "audioText": "I choose fresh fruit and water because I have intense soccer practice.",
        "example": "I choose fresh fruit and water because I have intense soccer practice.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-2-7",
        "term": "He / She + drinks / eats + because...",
        "translation": "Verbo con '-s' + because + Razón",
        "ipa": "/he/",
        "audioText": "Mateo drinks plenty of water because it keeps him hydrated and focused.",
        "example": "Mateo drinks plenty of water because it keeps him hydrated and focused.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-2-b1",
        "prompt": "Elijo fruta fresca y agua porque quiero mucha energía.'",
        "answer": "I choose fresh fruit and water because I want high energy",
        "tokens": [
          "I",
          "choose",
          "fresh",
          "fruit",
          "and",
          "water",
          "because",
          "want",
          "high",
          "energy",
          "drink",
          "sugary"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-2-b2",
        "prompt": "No tomo gaseosa azucarada porque me hace sentir con sueño.'",
        "answer": "I don t drink sugary soda because it makes me feel sleepy",
        "tokens": [
          "I",
          "don",
          "t",
          "drink",
          "sugary",
          "soda",
          "because",
          "it",
          "makes",
          "me",
          "feel",
          "sleepy",
          "choose",
          "fresh"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-2-b3",
        "prompt": "¿Por qué prefieres los wraps de pollo sobre la comida rápida grasosa?'",
        "answer": "Why do you prefer chicken wraps over greasy fast food",
        "tokens": [
          "Why",
          "do",
          "you",
          "prefer",
          "chicken",
          "wraps",
          "over",
          "greasy",
          "fast",
          "food",
          "choose",
          "fresh"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-2-e1",
        "audioText": "For lunch today I choose a grilled chicken wrap and two bottles of cold water because we have intense soccer training this afternoon.",
        "correctAnswer": "For lunch today I choose a grilled chicken wrap and two bottles of cold water because we have intense soccer training this afternoon.",
        "options": [
          "For lunch today I choose a grilled chicken wrap and two bottles of cold water because we have intense soccer training this afternoon.",
          "Clean food gives me steady power.",
          "Camilo, what are you having for lunch today?"
        ]
      },
      {
        "id": "1-2-e2",
        "audioText": "Clean food gives me steady power.",
        "correctAnswer": "Clean food gives me steady power.",
        "options": [
          "Camilo, what are you having for lunch today?",
          "Clean food gives me steady power.",
          "I choose a grilled chicken wrap and cold water because I have soccer training at three."
        ]
      },
      {
        "id": "1-2-e3",
        "audioText": "Camilo, what are you having for lunch today?",
        "correctAnswer": "Camilo, what are you having for lunch today?",
        "options": [
          "That is smart! I don't drink soda because it makes me feel heavy and sleepy.",
          "I choose a grilled chicken wrap and cold water because I have soccer training at three.",
          "Camilo, what are you having for lunch today?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-3",
    "badgeName": "Empathy Master",
    "badgeEmoji": "💖",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-3-1",
        "term": "Express",
        "translation": "expresar sentimientos",
        "ipa": "/express/",
        "audioText": "express. I express my feelings honestly with friends.",
        "example": "I express my feelings honestly with friends.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-2",
        "term": "Calm",
        "translation": "calmarse / tranquilizar",
        "ipa": "/calm/",
        "audioText": "calm. Deep breathing calms my nerves before exams.",
        "example": "Deep breathing calms my nerves before exams.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-3",
        "term": "Cheer",
        "translation": "animar / alegrar el día",
        "ipa": "/cheer/",
        "audioText": "cheer. We cheer each other up when we are sad.",
        "example": "We cheer each other up when we are sad.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-4",
        "term": "Worry",
        "translation": "preocuparse por algo",
        "ipa": "/worry/",
        "audioText": "worry. Don't worry about small mistakes in English.",
        "example": "Don't worry about small mistakes in English.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-5",
        "term": "Celebrate",
        "translation": "celebrar logros",
        "ipa": "/celebrate/",
        "audioText": "celebrate. We celebrate every good grade with pizza.",
        "example": "We celebrate every good grade with pizza.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-6",
        "term": "I feel / am + [Emoción] + because...",
        "translation": "Sujeto + feel / am + Adjetivo + because + Razón",
        "ipa": "/i/",
        "audioText": "I feel super excited today because our team won the soccer championship.",
        "example": "I feel super excited today because our team won the soccer championship.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-3-7",
        "term": "He / She feels / is + [Emoción]...",
        "translation": "He/She feels (con -s) / is + Adjetivo + because",
        "ipa": "/he/",
        "audioText": "Sofia feels very proud because she got top grades on her science project.",
        "example": "Sofia feels very proud because she got top grades on her science project.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-3-b1",
        "prompt": "Me siento súper aliviado porque terminamos nuestra presentación de inglés.'",
        "answer": "I feel super relieved because we finished our English presentation",
        "tokens": [
          "I",
          "feel",
          "super",
          "relieved",
          "because",
          "we",
          "finished",
          "our",
          "English",
          "presentation",
          "nervous",
          "anymore"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-3-b2",
        "prompt": "Ya no me siento nerviosa porque me ayudaste a practicar.'",
        "answer": "I don t feel nervous anymore because you helped me practice",
        "tokens": [
          "I",
          "don",
          "t",
          "feel",
          "nervous",
          "anymore",
          "because",
          "you",
          "helped",
          "me",
          "practice",
          "super",
          "relieved"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-3-b3",
        "prompt": "¿Por qué te sientes ansiosa antes de hablar en público?'",
        "answer": "Why do you feel anxious before speaking in public",
        "tokens": [
          "Why",
          "do",
          "you",
          "feel",
          "anxious",
          "before",
          "speaking",
          "in",
          "public",
          "super",
          "relieved"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-3-e1",
        "audioText": "Today I feel very relieved and proud because our team finished the science project on time.",
        "correctAnswer": "Today I feel very relieved and proud because our team finished the science project on time.",
        "options": [
          "Today I feel very relieved and proud because our team finished the science project on time.",
          "Valentina was nervous earlier, but we supported her and now she feels fantastic.",
          "Guys, that chemistry exam was intense! How do you feel?"
        ]
      },
      {
        "id": "1-3-e2",
        "audioText": "Valentina was nervous earlier, but we supported her and now she feels fantastic.",
        "correctAnswer": "Valentina was nervous earlier, but we supported her and now she feels fantastic.",
        "options": [
          "Guys, that chemistry exam was intense! How do you feel?",
          "Valentina was nervous earlier, but we supported her and now she feels fantastic.",
          "I feel super relieved now! I was nervous this morning, but I practiced a lot."
        ]
      },
      {
        "id": "1-3-e3",
        "audioText": "Guys, that chemistry exam was intense! How do you feel?",
        "correctAnswer": "Guys, that chemistry exam was intense! How do you feel?",
        "options": [
          "Same here! I don't feel anxious anymore because we studied together.",
          "I feel super relieved now! I was nervous this morning, but I practiced a lot.",
          "Guys, that chemistry exam was intense! How do you feel?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-4",
    "badgeName": "Academic Explorer",
    "badgeEmoji": "🎓",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-4-1",
        "term": "Learn",
        "translation": "aprender materias",
        "ipa": "/learn/",
        "audioText": "learn. We learn exciting science facts in class.",
        "example": "We learn exciting science facts in class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-2",
        "term": "Solve",
        "translation": "resolver problemas y retos",
        "ipa": "/solve/",
        "audioText": "solve. I solve complex math equations with my team.",
        "example": "I solve complex math equations with my team.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-3",
        "term": "Present",
        "translation": "exponer proyectos",
        "ipa": "/present/",
        "audioText": "present. We present our biology poster to the class.",
        "example": "We present our biology poster to the class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-4",
        "term": "Memorize",
        "translation": "memorizar conceptos",
        "ipa": "/memorize/",
        "audioText": "memorize. I memorize key vocabulary with flashcards.",
        "example": "I memorize key vocabulary with flashcards.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-5",
        "term": "Attend",
        "translation": "asistir a clases y clubes",
        "ipa": "/attend/",
        "audioText": "attend. We attend robotics club on Tuesday.",
        "example": "We attend robotics club on Tuesday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-6",
        "term": "I / We + love / enjoy + [Subject]",
        "translation": "Verbos de preferencia en forma base con primera persona",
        "ipa": "/i/",
        "audioText": "I love Biology and Science because we do real experiments in the lab.",
        "example": "I love Biology and Science because we do real experiments in the lab.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-4-7",
        "term": "He / She + enjoys / prefers...",
        "translation": "Verbos con '-s' (likes, enjoys, prefers) con He/She",
        "ipa": "/he/",
        "audioText": "Carlos prefers Geometry and Math because he loves solving logical puzzles.",
        "example": "Carlos prefers Geometry and Math because he loves solving logical puzzles.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-4-b1",
        "prompt": "Me encanta Informática porque construimos videojuegos geniales.'",
        "answer": "I love Computer Science because we build awesome video games",
        "tokens": [
          "I",
          "love",
          "Computer",
          "Science",
          "because",
          "we",
          "build",
          "awesome",
          "video",
          "games",
          "like",
          "History"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-4-b2",
        "prompt": "No me gusta Historia porque memorizar fechas es difícil.'",
        "answer": "I don t like History because memorizing dates is hard",
        "tokens": [
          "I",
          "don",
          "t",
          "like",
          "History",
          "because",
          "memorizing",
          "dates",
          "is",
          "hard",
          "love",
          "Computer"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-4-b3",
        "prompt": "¿Tienen laboratorio de Física el jueves por la mañana?'",
        "answer": "Do you have Physics lab on Thursday morning",
        "tokens": [
          "Do",
          "you",
          "have",
          "Physics",
          "lab",
          "on",
          "Thursday",
          "morning",
          "love",
          "Computer"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-4-e1",
        "audioText": "My absolute favorite subject this semester is Computer Science because we learn how to code video games in the main computer lab on Wednesday mornings.",
        "correctAnswer": "My absolute favorite subject this semester is Computer Science because we learn how to code video games in the main computer lab on Wednesday mornings.",
        "options": [
          "My absolute favorite subject this semester is Computer Science because we learn how to code video games in the main computer lab on Wednesday mornings.",
          "Look at our new schedule! We have Computer Science on Wednesday morning!",
          "Awesome! I love Computer Science because we code cool games in the lab."
        ]
      },
      {
        "id": "1-4-e2",
        "audioText": "Look at our new schedule! We have Computer Science on Wednesday morning!",
        "correctAnswer": "Look at our new schedule! We have Computer Science on Wednesday morning!",
        "options": [
          "Awesome! I love Computer Science because we code cool games in the lab.",
          "Look at our new schedule! We have Computer Science on Wednesday morning!",
          "And what about History? I don't like memorizing dates, but the teacher is fun."
        ]
      },
      {
        "id": "1-4-e3",
        "audioText": "Awesome! I love Computer Science because we code cool games in the lab.",
        "correctAnswer": "Awesome! I love Computer Science because we code cool games in the lab.",
        "options": [
          "Same! But we have PE right after recess on Friday, which is the best.",
          "And what about History? I don't like memorizing dates, but the teacher is fun.",
          "Awesome! I love Computer Science because we code cool games in the lab."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-5",
    "badgeName": "Routine Master ⏰",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-5-1",
        "term": "Wake",
        "translation": "despertar / levantarse",
        "ipa": "/wake/",
        "audioText": "wake. I wake up at six thirty on weekdays.",
        "example": "I wake up at six thirty on weekdays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-2",
        "term": "Organize",
        "translation": "organizar horario y tareas",
        "ipa": "/organize/",
        "audioText": "organize. I organize my desk before studying.",
        "example": "I organize my desk before studying.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-3",
        "term": "Finish",
        "translation": "terminar deberes a tiempo",
        "ipa": "/finish/",
        "audioText": "finish. We finish all our homework before dinner.",
        "example": "We finish all our homework before dinner.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-4",
        "term": "Unwind",
        "translation": "desconectarse y descansar",
        "ipa": "/unwind/",
        "audioText": "unwind. I unwind with relaxing music after school.",
        "example": "I unwind with relaxing music after school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-5",
        "term": "Maintain",
        "translation": "mantener buenos hábitos",
        "ipa": "/maintain/",
        "audioText": "maintain. She maintains a consistent sleep schedule.",
        "example": "She maintains a consistent sleep schedule.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-6",
        "term": "I + always / usually + [Verbo]",
        "translation": "Sujeto + Adverbio + Verbo principal + Complemento",
        "ipa": "/i/",
        "audioText": "I always pack my school backpack the night before to save time.",
        "example": "I always pack my school backpack the night before to save time.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-5-7",
        "term": "He / She + usually / often + [Verbo-s]",
        "translation": "He/She + Adverbio + Verbo con '-s'",
        "ipa": "/he/",
        "audioText": "Lucas usually rides his bike to school and arrives ten minutes early.",
        "example": "Lucas usually rides his bike to school and arrives ten minutes early.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-5-b1",
        "prompt": "Siempre me despierto temprano y organizo mi horario de estudio.'",
        "answer": "I always wake up early and organize my study schedule",
        "tokens": [
          "I",
          "always",
          "wake",
          "up",
          "early",
          "and",
          "organize",
          "my",
          "study",
          "schedule",
          "never",
          "skip"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-5-b2",
        "prompt": "Nunca me salto el desayuno porque necesito energía para las clases.'",
        "answer": "I never skip breakfast because I need power for classes",
        "tokens": [
          "I",
          "never",
          "skip",
          "breakfast",
          "because",
          "need",
          "power",
          "for",
          "classes",
          "always",
          "wake"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-5-b3",
        "prompt": "¿Con qué frecuencia estudias en la biblioteca después de clases?'",
        "answer": "How often do you study in the library after school",
        "tokens": [
          "How",
          "often",
          "do",
          "you",
          "study",
          "in",
          "the",
          "library",
          "after",
          "school",
          "always",
          "wake"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-5-e1",
        "audioText": "Every morning, I always wake up at six fifteen.",
        "correctAnswer": "Every morning, I always wake up at six fifteen.",
        "options": [
          "Every morning, I always wake up at six fifteen.",
          "First, I take a quick shower, then I have fresh fruit and arepas for breakfast, and finally I review my English notes before leaving for school.",
          "Manuela, how do you manage to finish all your homework so fast?"
        ]
      },
      {
        "id": "1-5-e2",
        "audioText": "First, I take a quick shower, then I have fresh fruit and arepas for breakfast, and finally I review my English notes before leaving for school.",
        "correctAnswer": "First, I take a quick shower, then I have fresh fruit and arepas for breakfast, and finally I review my English notes before leaving for school.",
        "options": [
          "Manuela, how do you manage to finish all your homework so fast?",
          "First, I take a quick shower, then I have fresh fruit and arepas for breakfast, and finally I review my English notes before leaving for school.",
          "First, I arrive home and have a healthy lunch. Then, I work on homework for one hour without distractions."
        ]
      },
      {
        "id": "1-5-e3",
        "audioText": "Manuela, how do you manage to finish all your homework so fast?",
        "correctAnswer": "Manuela, how do you manage to finish all your homework so fast?",
        "options": [
          "That is awesome! I never check my phone while doing math, and it saves so much time.",
          "First, I arrive home and have a healthy lunch. Then, I work on homework for one hour without distractions.",
          "Manuela, how do you manage to finish all your homework so fast?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-6",
    "badgeName": "Sports & Hobbies Ace",
    "badgeEmoji": "🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-6-1",
        "term": "Play",
        "translation": "jugar deportes y videojuegos",
        "ipa": "/play/",
        "audioText": "play. We play soccer every Saturday at the park.",
        "example": "We play soccer every Saturday at the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-2",
        "term": "Join",
        "translation": "unirse a un club o partida",
        "ipa": "/join/",
        "audioText": "join. I joined the school chess club this week.",
        "example": "I joined the school chess club this week.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-3",
        "term": "Practice",
        "translation": "entrenar habilidades",
        "ipa": "/practice/",
        "audioText": "practice. I practice skateboarding tricks after school.",
        "example": "I practice skateboarding tricks after school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-4",
        "term": "Create",
        "translation": "crear arte y contenido",
        "ipa": "/create/",
        "audioText": "create. She creates digital animations for our channel.",
        "example": "She creates digital animations for our channel.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-5",
        "term": "Compete",
        "translation": "competir en torneos",
        "ipa": "/compete/",
        "audioText": "compete. Our gaming team competed in the finals.",
        "example": "Our gaming team competed in the finals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-6",
        "term": "I play / go / do + [Hobby]",
        "translation": "PLAY (pelota/juegos) • GO (-ING) • DO (disciplinas)",
        "ipa": "/i/",
        "audioText": "On weekends, I play soccer with my squad and go cycling in the morning.",
        "example": "On weekends, I play soccer with my squad and go cycling in the morning.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-6-7",
        "term": "He / She + plays / goes / does...",
        "translation": "Verbos con '-s' (plays, goes, does) con tercera persona",
        "ipa": "/he/",
        "audioText": "Paula does gymnastics and goes swimming twice a week at the sports club.",
        "example": "Paula does gymnastics and goes swimming twice a week at the sports club.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-6-b1",
        "prompt": "Los sábados monto bicicleta y juego fútbol con mi grupo de amigos.'",
        "answer": "On Saturdays I go cycling and play soccer with my squad",
        "tokens": [
          "On",
          "Saturdays",
          "I",
          "go",
          "cycling",
          "and",
          "play",
          "soccer",
          "with",
          "my",
          "squad",
          "video",
          "games"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-6-b2",
        "prompt": "No juego videojuegos porque prefiero la pintura y la música.'",
        "answer": "I don t play video games because I prefer painting and music",
        "tokens": [
          "I",
          "don",
          "t",
          "play",
          "video",
          "games",
          "because",
          "prefer",
          "painting",
          "and",
          "music",
          "Saturdays",
          "cycling"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-6-b3",
        "prompt": "¿Te gustaría unirte a nuestro partido de baloncesto esta tarde?'",
        "answer": "Would you like to join our basketball match this afternoon",
        "tokens": [
          "Would",
          "you",
          "like",
          "to",
          "join",
          "our",
          "basketball",
          "match",
          "this",
          "afternoon",
          "Saturdays",
          "cycling"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-6-e1",
        "audioText": "On Saturday mornings, I always go cycling up the mountain with my cousin.",
        "correctAnswer": "On Saturday mornings, I always go cycling up the mountain with my cousin.",
        "options": [
          "On Saturday mornings, I always go cycling up the mountain with my cousin.",
          "Then in the afternoon, we play basketball at the local sports center.",
          "Would you like to join us this weekend?"
        ]
      },
      {
        "id": "1-6-e2",
        "audioText": "Then in the afternoon, we play basketball at the local sports center.",
        "correctAnswer": "Then in the afternoon, we play basketball at the local sports center.",
        "options": [
          "Would you like to join us this weekend?",
          "Then in the afternoon, we play basketball at the local sports center.",
          "Then in the evening, we play basketball at the local sports center."
        ]
      },
      {
        "id": "1-6-e3",
        "audioText": "Would you like to join us this weekend?",
        "correctAnswer": "Would you like to join us this weekend?",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "rarely you like to join us this weekend?",
          "Would you like to join us this weekend?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-7",
    "badgeName": "Weather & Style Ace",
    "badgeEmoji": "⛅",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-7-1",
        "term": "Wear",
        "translation": "llevar puesto / vestir ropa",
        "ipa": "/wear/",
        "audioText": "wear. I wear a cozy hoodie on chilly days.",
        "example": "I wear a cozy hoodie on chilly days.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-2",
        "term": "Rain",
        "translation": "llover del cielo",
        "ipa": "/rain/",
        "audioText": "rain. It rains frequently in the mountains.",
        "example": "It rains frequently in the mountains.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-3",
        "term": "Shine",
        "translation": "brillar el sol intensamente",
        "ipa": "/shine/",
        "audioText": "shine. The sun shines bright at the beach.",
        "example": "The sun shines bright at the beach.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-4",
        "term": "Change",
        "translation": "cambiar el clima o de ropa",
        "ipa": "/change/",
        "audioText": "change. The weather changed suddenly to rainy.",
        "example": "The weather changed suddenly to rainy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-5",
        "term": "Protect",
        "translation": "protegerse del sol y lluvia",
        "ipa": "/protect/",
        "audioText": "protect. Sunscreen protects my skin from UV rays.",
        "example": "Sunscreen protects my skin from UV rays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-6",
        "term": "It is [Clima]",
        "translation": "It is + Adjetivo • I am wearing + Prendas",
        "ipa": "/it/",
        "audioText": "It is raining heavily outside, so I am wearing my waterproof jacket and boots.",
        "example": "It is raining heavily outside, so I am wearing my waterproof jacket and boots.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-7-7",
        "term": "He / She is wearing...",
        "translation": "He/She is wearing + Prendas",
        "ipa": "/he/",
        "audioText": "Valeria is wearing sunglasses and a white t-shirt because it is hot and sunny.",
        "example": "Valeria is wearing sunglasses and a white t-shirt because it is hot and sunny.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-7-b1",
        "prompt": "Está lloviendo fuerte afuera, así que llevo puesto mi buzo abrigado.'",
        "answer": "It is raining heavily outside so I am wearing my warm hoodie",
        "tokens": [
          "It",
          "is",
          "raining",
          "heavily",
          "outside",
          "so",
          "I",
          "am",
          "wearing",
          "my",
          "warm",
          "hoodie",
          "sandals",
          "today"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-7-b2",
        "prompt": "Hoy no llevo sandalias porque las calles están muy mojadas.'",
        "answer": "I am not wearing sandals today because the streets are wet",
        "tokens": [
          "I",
          "am",
          "not",
          "wearing",
          "sandals",
          "today",
          "because",
          "the",
          "streets",
          "are",
          "wet",
          "raining",
          "heavily"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-7-b3",
        "prompt": "¿Cómo está el clima en tu barrio ahora mismo?'",
        "answer": "What is the weather like in your neighborhood right now",
        "tokens": [
          "What",
          "is",
          "the",
          "weather",
          "like",
          "in",
          "your",
          "neighborhood",
          "right",
          "now",
          "raining",
          "heavily"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-7-e1",
        "audioText": "It is raining heavily in the city right now.",
        "correctAnswer": "It is raining heavily in the city right now.",
        "options": [
          "It is raining heavily in the city right now.",
          "I am wearing a thick hoodie, waterproof boots, and carrying my umbrella.",
          "What are you wearing today?"
        ]
      },
      {
        "id": "1-7-e2",
        "audioText": "I am wearing a thick hoodie, waterproof boots, and carrying my umbrella.",
        "correctAnswer": "I am wearing a thick hoodie, waterproof boots, and carrying my umbrella.",
        "options": [
          "What are you wearing today?",
          "I am wearing a thick hoodie, waterproof boots, and carrying my umbrella.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "1-7-e3",
        "audioText": "What are you wearing today?",
        "correctAnswer": "What are you wearing today?",
        "options": [
          "What are you wearing evening?",
          "What rarely you wearing today?",
          "What are you wearing today?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-8",
    "badgeName": "City Navigator",
    "badgeEmoji": "🧭",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-8-1",
        "term": "Turn",
        "translation": "girar / doblar hacia un lado",
        "ipa": "/turn/",
        "audioText": "turn. Turn left at the traffic light.",
        "example": "Turn left at the traffic light.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-2",
        "term": "Cross",
        "translation": "cruzar la calle o avenida",
        "ipa": "/cross/",
        "audioText": "cross. Cross the street at the pedestrian zebra.",
        "example": "Cross the street at the pedestrian zebra.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-3",
        "term": "Walk",
        "translation": "caminar cuadras o distancia",
        "ipa": "/walk/",
        "audioText": "walk. Walk straight ahead for two blocks.",
        "example": "Walk straight ahead for two blocks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-4",
        "term": "Locate",
        "translation": "ubicar en el mapa o GPS",
        "ipa": "/locate/",
        "audioText": "locate. We located the bakery on Google Maps.",
        "example": "We located the bakery on Google Maps.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-5",
        "term": "Reach",
        "translation": "llegar al destino exacto",
        "ipa": "/reach/",
        "audioText": "reach. You will reach the museum on your right.",
        "example": "You will reach the museum on your right.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-6",
        "term": "The [Lugar] is next to / across from...",
        "translation": "Lugar + is + Preposición + Referencia",
        "ipa": "/the/",
        "audioText": "The movie cinema is next to the bookstore, across from the central food court.",
        "example": "The movie cinema is next to the bookstore, across from the central food court.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-8-7",
        "term": "The [Lugar] is between [A] and [B]",
        "translation": "between + Lugar 1 + and + Lugar 2",
        "ipa": "/the/",
        "audioText": "The coffee shop is between the shoe store and the technology shop.",
        "example": "The coffee shop is between the shoe store and the technology shop.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-8-b1",
        "prompt": "La nueva tienda de té de burbujas queda al lado del cine, frente al parque.'",
        "answer": "The new bubble tea shop is next to the cinema across from the park",
        "tokens": [
          "The",
          "new",
          "bubble",
          "tea",
          "shop",
          "is",
          "next",
          "to",
          "the",
          "cinema",
          "across",
          "from",
          "park",
          "skatepark",
          "near"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-8-b2",
        "prompt": "El skatepark no queda cerca de la estación; queda tres cuadras adelante.'",
        "answer": "The skatepark isn t near the station it is three blocks ahead",
        "tokens": [
          "The",
          "skatepark",
          "isn",
          "t",
          "near",
          "the",
          "station",
          "it",
          "is",
          "three",
          "blocks",
          "ahead",
          "bubble",
          "shop"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-8-b3",
        "prompt": "Disculpe, ¿cómo llego a la biblioteca central desde aquí?'",
        "answer": "Excuse me how do I get to the central library from here",
        "tokens": [
          "Excuse",
          "me",
          "how",
          "do",
          "I",
          "get",
          "to",
          "the",
          "central",
          "library",
          "from",
          "here",
          "bubble",
          "shop"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-8-e1",
        "audioText": "To reach the main library, walk straight ahead for two blocks, then turn right at the traffic lights.",
        "correctAnswer": "To reach the main library, walk straight ahead for two blocks, then turn right at the traffic lights.",
        "options": [
          "To reach the main library, walk straight ahead for two blocks, then turn right at the traffic lights.",
          "The library is across from the green park, next to the bookstore.",
          "Hey guys! I just arrived at the shopping mall, where are you?"
        ]
      },
      {
        "id": "1-8-e2",
        "audioText": "The library is across from the green park, next to the bookstore.",
        "correctAnswer": "The library is across from the green park, next to the bookstore.",
        "options": [
          "Hey guys! I just arrived at the shopping mall, where are you?",
          "The library is across from the green park, next to the bookstore.",
          "We are at the new bubble tea shop! It is on the second floor, next to the cinema."
        ]
      },
      {
        "id": "1-8-e3",
        "audioText": "Hey guys! I just arrived at the shopping mall, where are you?",
        "correctAnswer": "Hey guys! I just arrived at the shopping mall, where are you?",
        "options": [
          "If you take the central escalators, it is right across from the bookstore.",
          "We are at the new bubble tea shop! It is on the second floor, next to the cinema.",
          "Hey guys! I just arrived at the shopping mall, where are you?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-9",
    "badgeName": "Tech Support Guru",
    "badgeEmoji": "💻",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-9-1",
        "term": "Connect",
        "translation": "conectar a redes y bluetooth",
        "ipa": "/connect/",
        "audioText": "connect. I connect my headphones to my tablet.",
        "example": "I connect my headphones to my tablet.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-2",
        "term": "Charge",
        "translation": "cargar la batería del equipo",
        "ipa": "/charge/",
        "audioText": "charge. I charge my phone every night before bed.",
        "example": "I charge my phone every night before bed.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-3",
        "term": "Restart",
        "translation": "reiniciar el sistema o router",
        "ipa": "/restart/",
        "audioText": "restart. Restart your router if the WiFi drops.",
        "example": "Restart your router if the WiFi drops.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-4",
        "term": "Download",
        "translation": "descargar apps y archivos",
        "ipa": "/download/",
        "audioText": "download. We downloaded the new video game update.",
        "example": "We downloaded the new video game update.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-5",
        "term": "Install",
        "translation": "instalar programas y software",
        "ipa": "/install/",
        "audioText": "install. She installed the photo editing software.",
        "example": "She installed the photo editing software.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-6",
        "term": "You can + [Verbo base]",
        "translation": "Sujeto + can + Verbo en forma base",
        "ipa": "/you/",
        "audioText": "You can connect your wireless earbuds easily by turning on Bluetooth in settings.",
        "example": "You can connect your wireless earbuds easily by turning on Bluetooth in settings.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-9-7",
        "term": "She can edit / This app can...",
        "translation": "can no cambia con He/She (nunca digas 'cans')",
        "ipa": "/she/",
        "audioText": "Valeria can edit 4K TikTok videos on her tablet without any lag or delay.",
        "example": "Valeria can edit 4K TikTok videos on her tablet without any lag or delay.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-9-b1",
        "prompt": "Puedes conectar tus audífonos inalámbricos fácilmente por Bluetooth.'",
        "answer": "You can connect your wireless earbuds easily through Bluetooth",
        "tokens": [
          "You",
          "can",
          "connect",
          "your",
          "wireless",
          "earbuds",
          "easily",
          "through",
          "Bluetooth",
          "tablet",
          "download"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-9-b2",
        "prompt": "Mi tableta no puede descargar la actualización porque la memoria está llena.'",
        "answer": "My tablet can t download the update because the storage is full",
        "tokens": [
          "My",
          "tablet",
          "can",
          "t",
          "download",
          "the",
          "update",
          "because",
          "storage",
          "is",
          "full",
          "connect",
          "your"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-9-b3",
        "prompt": "¿Cómo puedo arreglar la señal débil de WiFi en mi habitación?'",
        "answer": "How can I fix the weak WiFi signal in my bedroom",
        "tokens": [
          "How",
          "can",
          "I",
          "fix",
          "the",
          "weak",
          "WiFi",
          "signal",
          "in",
          "my",
          "bedroom",
          "connect",
          "your"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-9-e1",
        "audioText": "If your smartphone battery is low, first plug in the fast charger using the USB-C cable.",
        "correctAnswer": "If your smartphone battery is low, first plug in the fast charger using the USB-C cable.",
        "options": [
          "If your smartphone battery is low, first plug in the fast charger using the USB-C cable.",
          "If the WiFi is not working, you should turn airplane mode on and off to reset the signal.",
          "Guys, my editing app crashed and my phone says storage is completely full!"
        ]
      },
      {
        "id": "1-9-e2",
        "audioText": "If the WiFi is not working, you should turn airplane mode on and off to reset the signal.",
        "correctAnswer": "If the WiFi is not working, you should turn airplane mode on and off to reset the signal.",
        "options": [
          "Guys, my editing app crashed and my phone says storage is completely full!",
          "If the WiFi is not working, you should turn airplane mode on and off to reset the signal.",
          "Don't panic! You can connect your phone to my laptop and transfer the raw clips."
        ]
      },
      {
        "id": "1-9-e3",
        "audioText": "Guys, my editing app crashed and my phone says storage is completely full!",
        "correctAnswer": "Guys, my editing app crashed and my phone says storage is completely full!",
        "options": [
          "Also, you should delete the temporary cache files to free up two gigabytes.",
          "Don't panic! You can connect your phone to my laptop and transfer the raw clips.",
          "Guys, my editing app crashed and my phone says storage is completely full!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-10",
    "badgeName": "Level 1 Graduate",
    "badgeEmoji": "🎓",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-10-1",
        "term": "Plan",
        "translation": "planear eventos y viajes",
        "ipa": "/plan/",
        "audioText": "plan. We planned the ultimate weekend trip.",
        "example": "We planned the ultimate weekend trip.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-2",
        "term": "Book",
        "translation": "reservar entradas y tiquetes",
        "ipa": "/book/",
        "audioText": "book. I booked four tickets online.",
        "example": "I booked four tickets online.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-3",
        "term": "Confirm",
        "translation": "confirmar asistencia o reserva",
        "ipa": "/confirm/",
        "audioText": "confirm. Everyone confirmed their attendance today.",
        "example": "Everyone confirmed their attendance today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-4",
        "term": "Pack",
        "translation": "empacar maletas y víveres",
        "ipa": "/pack/",
        "audioText": "pack. We packed sunscreen, snacks and water.",
        "example": "We packed sunscreen, snacks and water.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-5",
        "term": "Coordinate",
        "translation": "coordinar puntos de encuentro",
        "ipa": "/coordinate/",
        "audioText": "coordinate. We coordinated the bus departure time.",
        "example": "We coordinated the bus departure time.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-6",
        "term": "I / We would like to + [Verbo base]",
        "translation": "would like to = nos gustaría / quisiera",
        "ipa": "/i/",
        "audioText": "We would like to book four student tickets for the amusement park this Saturday.",
        "example": "We would like to book four student tickets for the amusement park this Saturday.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-10-7",
        "term": "She wants to organize / We plan to...",
        "translation": "wants to + Verbo base • plans to + Verbo base",
        "ipa": "/she/",
        "audioText": "Sara wants to organize a surprise picnic at the lake for our best friend's birthday.",
        "example": "Sara wants to organize a surprise picnic at the lake for our best friend's birthday.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-10-b1",
        "prompt": "Nos gustaría reservar cuatro entradas para el parque de atracciones este sábado.'",
        "answer": "We would like to book four tickets for the amusement park this Saturday",
        "tokens": [
          "We",
          "would",
          "like",
          "to",
          "book",
          "four",
          "tickets",
          "for",
          "the",
          "amusement",
          "park",
          "this",
          "Saturday",
          "leave",
          "Friday"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-10-b2",
        "prompt": "No podemos salir el viernes en la mañana porque tenemos presentaciones escolares.'",
        "answer": "We can t leave on Friday morning because we have school presentations",
        "tokens": [
          "We",
          "can",
          "t",
          "leave",
          "on",
          "Friday",
          "morning",
          "because",
          "we",
          "have",
          "school",
          "presentations",
          "would",
          "like"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "1-10-b3",
        "prompt": "¿Podría por favor confirmar la hora de salida de nuestro bus?'",
        "answer": "Could you please confirm the departure time for our bus",
        "tokens": [
          "Could",
          "you",
          "please",
          "confirm",
          "the",
          "departure",
          "time",
          "for",
          "our",
          "bus",
          "would",
          "like"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-10-e1",
        "audioText": "Hello, I would like to book four student tickets for the amusement park this Saturday morning.",
        "correctAnswer": "Hello, I would like to book four student tickets for the amusement park this Saturday morning.",
        "options": [
          "Hello, I would like to book four student tickets for the amusement park this Saturday morning.",
          "Could you please confirm if lunch is included in the package?",
          "Team, I just called the adventure park! We have four student passes booked for Saturday!"
        ]
      },
      {
        "id": "1-10-e2",
        "audioText": "Could you please confirm if lunch is included in the package?",
        "correctAnswer": "Could you please confirm if lunch is included in the package?",
        "options": [
          "Team, I just called the adventure park! We have four student passes booked for Saturday!",
          "Could you please confirm if lunch is included in the package?",
          "That is awesome! Could you please confirm what time the shuttle bus departs?"
        ]
      },
      {
        "id": "1-10-e3",
        "audioText": "Team, I just called the adventure park! We have four student passes booked for Saturday!",
        "correctAnswer": "Team, I just called the adventure park! We have four student passes booked for Saturday!",
        "options": [
          "The bus leaves at 8:00 AM sharp from the central station. Don't be late!",
          "That is awesome! Could you please confirm what time the shuttle bus departs?",
          "Team, I just called the adventure park! We have four student passes booked for Saturday!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-1",
    "badgeName": "Wildlife Explorer",
    "badgeEmoji": "🐾",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-1-1",
        "term": "Hunt",
        "translation": "Verbo de acción",
        "ipa": "/hʌnt/",
        "audioText": "hunt. Jaguars hunt quietly at night in the jungle.",
        "example": "Jaguars hunt quietly at night in the jungle.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-2",
        "term": "Survive",
        "translation": "Verbo de acción",
        "ipa": "/sərˈvaɪv/",
        "audioText": "survive. Camels can survive for weeks with very little water in the desert.",
        "example": "Camels can survive for weeks with very little water in the desert.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-3",
        "term": "Protect",
        "translation": "Verbo de acción",
        "ipa": "/prəˈtɛkt/",
        "audioText": "protect. Mother bears protect their cubs fiercely from predators.",
        "example": "Mother bears protect their cubs fiercely from predators.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-4",
        "term": "Climb",
        "translation": "Verbo de acción",
        "ipa": "/klaɪm/",
        "audioText": "climb. Monkeys climb tall rainforest trees with incredible agility.",
        "example": "Monkeys climb tall rainforest trees with incredible agility.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-5",
        "term": "Feed",
        "translation": "Verbo de acción",
        "ipa": "/fiːd/",
        "audioText": "feed. Hummingbirds feed on sweet nectar from exotic mountain flowers.",
        "example": "Hummingbirds feed on sweet nectar from exotic mountain flowers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-6",
        "term": "CAN expresa habilidad física ('puede') y CAN'T expresa incapacidad ('no puede'). ¡Nunca agregues -s al verbo después de can!",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/can/",
        "audioText": "A cheetah can run up to 100 km/h, but it can't climb high trees easily.",
        "example": "A cheetah can run up to 100 km/h, but it can't climb high trees easily.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-1-7",
        "term": "Sujeto + can + verbo base para destacar superpoderes de la fauna.",
        "translation": "Paso 2: Afirmativo (+)",
        "ipa": "/sujeto/",
        "audioText": "Jaguars can swim across rivers in the Amazon rainforest.",
        "example": "Jaguars can swim across rivers in the Amazon rainforest.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-1-b1",
        "prompt": "El cóndor andino puede volar a grandes alturas sobre las montañas.",
        "answer": "The Andean condor can fly at high altitudes over mountains",
        "tokens": [
          "The",
          "Andean",
          "condor",
          "can",
          "fly",
          "at",
          "high",
          "altitudes",
          "over",
          "mountains",
          "Jaguars",
          "cannot"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-1-b2",
        "prompt": "Los jaguares no pueden sobrevivir si destruimos sus bosques naturales.",
        "answer": "Jaguars cannot survive if we destroy their natural forests",
        "tokens": [
          "Jaguars",
          "cannot",
          "survive",
          "if",
          "we",
          "destroy",
          "their",
          "natural",
          "forests",
          "Andean",
          "condor"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-1-b3",
        "prompt": "¿Dónde viven los delfines rosados en Colombia?",
        "answer": "Where do pink river dolphins live in Colombia",
        "tokens": [
          "Where",
          "do",
          "pink",
          "river",
          "dolphins",
          "live",
          "in",
          "Colombia",
          "Andean",
          "condor"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-1-e1",
        "audioText": "The jaguar is the largest feline in the Americas.",
        "correctAnswer": "The jaguar is the largest feline in the Americas.",
        "options": [
          "The jaguar is the largest feline in the Americas.",
          "It lives in dense tropical rainforests and wetlands.",
          "Unlike many other cats, the jaguar can swim very well and often hunts near rivers."
        ]
      },
      {
        "id": "2-1-e2",
        "audioText": "It lives in dense tropical rainforests and wetlands.",
        "correctAnswer": "It lives in dense tropical rainforests and wetlands.",
        "options": [
          "Unlike many other cats, the jaguar can swim very well and often hunts near rivers.",
          "It lives in dense tropical rainforests and wetlands.",
          "However, jaguars can't survive if we destroy their natural forest habitat, so environmental protection is essential."
        ]
      },
      {
        "id": "2-1-e3",
        "audioText": "Unlike many other cats, the jaguar can swim very well and often hunts near rivers.",
        "correctAnswer": "Unlike many other cats, the jaguar can swim very well and often hunts near rivers.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "However, jaguars can't survive if we destroy their natural forest habitat, so environmental protection is essential.",
          "Unlike many other cats, the jaguar can swim very well and often hunts near rivers."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-2",
    "badgeName": "Room Designer",
    "badgeEmoji": "🏠",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-2-1",
        "term": "Decorate",
        "translation": "Verbo de acción",
        "ipa": "/ˈdɛk.ə.reɪt/",
        "audioText": "decorate. I decorate my bedroom walls with posters and warm fairy lights.",
        "example": "I decorate my bedroom walls with posters and warm fairy lights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-2",
        "term": "Organize",
        "translation": "Verbo de acción",
        "ipa": "/ˈɔːr.ɡə.naɪz/",
        "audioText": "organize. Santiago organizes his desk every Sunday before the school week starts.",
        "example": "Santiago organizes his desk every Sunday before the school week starts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-3",
        "term": "Relax",
        "translation": "Verbo de acción",
        "ipa": "/rɪˈlæks/",
        "audioText": "relax. I like to relax on the living room sofa listening to podcasts.",
        "example": "I like to relax on the living room sofa listening to podcasts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-4",
        "term": "Install",
        "translation": "Verbo de acción",
        "ipa": "/ɪnˈstɔːl/",
        "audioText": "install. My brother helped me install new floating shelves above my bed.",
        "example": "My brother helped me install new floating shelves above my bed.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-5",
        "term": "Share",
        "translation": "Verbo de acción",
        "ipa": "/ʃɛər/",
        "audioText": "share. We share a spacious study studio with high-speed internet.",
        "example": "We share a spacious study studio with high-speed internet.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-6",
        "term": "THERE IS = Hay (singular / 1 cosa). THERE ARE = Hay (plural / varias cosas).",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/there/",
        "audioText": "There is a gaming laptop on my desk, and there are two acoustic guitars in the corner.",
        "example": "There is a gaming laptop on my desk, and there are two acoustic guitars in the corner.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-2-7",
        "term": "Estructura afirmativa con artículos (a/an) o cantidades (two, three, some).",
        "translation": "Paso 2: Afirmativo (+)",
        "ipa": "/estructura/",
        "audioText": "There is a comfortable beanbag next to the window.",
        "example": "There is a comfortable beanbag next to the window.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-2-b1",
        "prompt": "Hay un escritorio amplio al lado de la ventana con repisas flotantes.",
        "answer": "There is a wide desk next to the window with floating shelves",
        "tokens": [
          "There",
          "is",
          "a",
          "wide",
          "desk",
          "next",
          "to",
          "the",
          "window",
          "with",
          "floating",
          "shelves",
          "aren",
          "messy"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-2-b2",
        "prompt": "No hay cables desordenados en el piso porque todo está organizado.",
        "answer": "There aren t any messy cables on the floor because everything is organized",
        "tokens": [
          "There",
          "aren",
          "t",
          "any",
          "messy",
          "cables",
          "on",
          "the",
          "floor",
          "because",
          "everything",
          "is",
          "organized",
          "wide",
          "desk"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-2-b3",
        "prompt": "¿Hay luces LED detrás de las repisas de tu cuarto?",
        "answer": "Are there LED lights behind the shelves in your room",
        "tokens": [
          "Are",
          "there",
          "LED",
          "lights",
          "behind",
          "the",
          "shelves",
          "in",
          "your",
          "room",
          "wide",
          "desk"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-2-e1",
        "audioText": "In a modern teen bedroom, having proper ergonomic furniture is essential.",
        "correctAnswer": "In a modern teen bedroom, having proper ergonomic furniture is essential.",
        "options": [
          "In a modern teen bedroom, having proper ergonomic furniture is essential.",
          "There is an adjustable desk between the closet and the window, which provides plenty of natural daylight.",
          "Above the desk, there are two wooden shelves for books and plants."
        ]
      },
      {
        "id": "2-2-e2",
        "audioText": "There is an adjustable desk between the closet and the window, which provides plenty of natural daylight.",
        "correctAnswer": "There is an adjustable desk between the closet and the window, which provides plenty of natural daylight.",
        "options": [
          "Above the desk, there are two wooden shelves for books and plants.",
          "There is an adjustable desk between the closet and the window, which provides plenty of natural daylight.",
          "There aren't any messy cables on the floor because everything is neatly organized."
        ]
      },
      {
        "id": "2-2-e3",
        "audioText": "Above the desk, there are two wooden shelves for books and plants.",
        "correctAnswer": "Above the desk, there are two wooden shelves for books and plants.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "There aren't any messy cables on the floor because everything is neatly organized.",
          "Above the desk, there are two wooden shelves for books and plants."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-3",
    "badgeName": "Urban Navigator ️",
    "badgeEmoji": "🗺",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-3-1",
        "term": "Commute",
        "translation": "Verbo de acción",
        "ipa": "/kəˈmjuːt/",
        "audioText": "commute. Thousands of students commute by metro every weekday in the morning.",
        "example": "Thousands of students commute by metro every weekday in the morning.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-2",
        "term": "Ride",
        "translation": "Verbo de acción",
        "ipa": "/raɪd/",
        "audioText": "ride. I ride my bicycle to football practice along the greenway.",
        "example": "I ride my bicycle to football practice along the greenway.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-3",
        "term": "Catch",
        "translation": "Verbo de acción",
        "ipa": "/kætʃ/",
        "audioText": "catch. Hurry up so we can catch the 7:15 express bus!",
        "example": "Hurry up so we can catch the 7:15 express bus!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-4",
        "term": "Transfer",
        "translation": "Verbo de acción",
        "ipa": "/trænsˈfɜːr/",
        "audioText": "transfer. We transfer from the metro train to the cable car at San Antonio station.",
        "example": "We transfer from the metro train to the cable car at San Antonio station.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-5",
        "term": "Cross",
        "translation": "Verbo de acción",
        "ipa": "/krɔːs/",
        "audioText": "cross. Always cross the busy street at the pedestrian zebra crosswalk.",
        "example": "Always cross the busy street at the pedestrian zebra crosswalk.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-6",
        "term": "Usa 'GO BY + [Vehículo]' sin artículos (by bus, by car, by train). Para caminar se dice estrictamente 'ON FOOT' o 'WALK'.",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/usa/",
        "audioText": "I go to school by bicycle, but my brother travels by bus.",
        "example": "I go to school by bicycle, but my brother travels by bus.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-3-7",
        "term": "Sujeto + take + the [Transporte] / go by [Transporte].",
        "translation": "Paso 2: Afirmativo (+)",
        "ipa": "/sujeto/",
        "audioText": "We take the express metro to the city center every Saturday morning.",
        "example": "We take the express metro to the city center every Saturday morning.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-3-b1",
        "prompt": "Yo voy al colegio en bicicleta por la ciclorruta y llego a tiempo.",
        "answer": "I go to school by bicycle along the bike lane and arrive on time",
        "tokens": [
          "I",
          "go",
          "to",
          "school",
          "by",
          "bicycle",
          "along",
          "the",
          "bike",
          "lane",
          "and",
          "arrive",
          "on",
          "time",
          "take",
          "taxis"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-3-b2",
        "prompt": "Nosotros no tomamos taxi en hora pico porque hay mucho trancón.",
        "answer": "We don t take taxis during rush hour because there is heavy traffic",
        "tokens": [
          "We",
          "don",
          "t",
          "take",
          "taxis",
          "during",
          "rush",
          "hour",
          "because",
          "there",
          "is",
          "heavy",
          "traffic",
          "school",
          "bicycle"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-3-b3",
        "prompt": "¿Cuánto tiempo toma llegar al centro comercial en metro?",
        "answer": "How long does it take to get to the mall by subway",
        "tokens": [
          "How",
          "long",
          "does",
          "it",
          "take",
          "to",
          "get",
          "the",
          "mall",
          "by",
          "subway",
          "school",
          "bicycle"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-3-e1",
        "audioText": "To get to the Botanical Garden quickly, the best option is to take the subway from North Terminal.",
        "correctAnswer": "To get to the Botanical Garden quickly, the best option is to take the subway from North Terminal.",
        "options": [
          "To get to the Botanical Garden quickly, the best option is to take the subway from North Terminal.",
          "It takes fifteen minutes to reach Plaza Station.",
          "When you get off the train, you transfer to the green feeder bus or simply walk four blocks on foot."
        ]
      },
      {
        "id": "2-3-e2",
        "audioText": "It takes fifteen minutes to reach Plaza Station.",
        "correctAnswer": "It takes fifteen minutes to reach Plaza Station.",
        "options": [
          "When you get off the train, you transfer to the green feeder bus or simply walk four blocks on foot.",
          "It takes fifteen minutes to reach Plaza Station.",
          "Avoid taking a taxi during rush hour because the avenue gets very crowded."
        ]
      },
      {
        "id": "2-3-e3",
        "audioText": "When you get off the train, you transfer to the green feeder bus or simply walk four blocks on foot.",
        "correctAnswer": "When you get off the train, you transfer to the green feeder bus or simply walk four blocks on foot.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Avoid taking a taxi during rush hour because the avenue gets very crowded.",
          "When you get off the train, you transfer to the green feeder bus or simply walk four blocks on foot."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-4",
    "badgeName": "Future Leader",
    "badgeEmoji": "🚀",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-4-1",
        "term": "Develop",
        "translation": "Verbo de acción",
        "ipa": "/dɪˈvɛl.əp/",
        "audioText": "develop. Engineers develop innovative mobile applications for students worldwide.",
        "example": "Engineers develop innovative mobile applications for students worldwide.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-2",
        "term": "Design",
        "translation": "Verbo de acción",
        "ipa": "/dɪˈzaɪn/",
        "audioText": "design. Architects design sustainable buildings with solar panels.",
        "example": "Architects design sustainable buildings with solar panels.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-3",
        "term": "Manage",
        "translation": "Verbo de acción",
        "ipa": "/ˈmæn.ɪdʒ/",
        "audioText": "manage. Project leaders manage budgets and production schedules carefully.",
        "example": "Project leaders manage budgets and production schedules carefully.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-4",
        "term": "Create",
        "translation": "Verbo de acción",
        "ipa": "/kriˈeɪt/",
        "audioText": "create. Content creators create engaging educational tutorials online.",
        "example": "Content creators create engaging educational tutorials online.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-5",
        "term": "Treat",
        "translation": "Verbo de acción",
        "ipa": "/triːt/",
        "audioText": "treat. Veterinarians treat injured wild animals in rehabilitation sanctuaries.",
        "example": "Veterinarians treat injured wild animals in rehabilitation sanctuaries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-6",
        "term": "En inglés las profesiones SIEMPRE llevan 'a' o 'an'. Usa A con consonantes (a developer, a doctor) y AN con vocales (an architect, an engineer).",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/en/",
        "audioText": "I want to be a video game developer because I love coding interactive stories.",
        "example": "I want to be a video game developer because I love coding interactive stories.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-4-7",
        "term": "Expresa tu vocación y dónde te gustaría trabajar.",
        "translation": "Paso 2: Afirmativo (+)",
        "ipa": "/expresa/",
        "audioText": "Mariana wants to be an environmental engineer and work at a green energy laboratory.",
        "example": "Mariana wants to be an environmental engineer and work at a green energy laboratory.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-4-b1",
        "prompt": "Yo quiero ser ingeniero de software porque me apasiona programar.",
        "answer": "I want to be a software engineer because I am passionate about coding",
        "tokens": [
          "I",
          "want",
          "to",
          "be",
          "a",
          "software",
          "engineer",
          "because",
          "am",
          "passionate",
          "about",
          "coding",
          "doesn",
          "work"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-4-b2",
        "prompt": "Ella no quiere trabajar en una oficina aburrida sin luz natural.",
        "answer": "She doesn t want to work in a boring office without natural light",
        "tokens": [
          "She",
          "doesn",
          "t",
          "want",
          "to",
          "work",
          "in",
          "a",
          "boring",
          "office",
          "without",
          "natural",
          "light",
          "software",
          "engineer"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-4-b3",
        "prompt": "¿Qué profesión quieres estudiar cuando termines el colegio?",
        "answer": "What profession do you want to study when you graduate",
        "tokens": [
          "What",
          "profession",
          "do",
          "you",
          "want",
          "to",
          "study",
          "when",
          "graduate",
          "software",
          "engineer"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-4-e1",
        "audioText": "Choosing a future career is all about connecting your passions with useful skills.",
        "correctAnswer": "Choosing a future career is all about connecting your passions with useful skills.",
        "options": [
          "Choosing a future career is all about connecting your passions with useful skills.",
          "If you love technology and problem solving, becoming a software developer or data analyst is a fantastic choice.",
          "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects."
        ]
      },
      {
        "id": "2-4-e2",
        "audioText": "If you love technology and problem solving, becoming a software developer or data analyst is a fantastic choice.",
        "correctAnswer": "If you love technology and problem solving, becoming a software developer or data analyst is a fantastic choice.",
        "options": [
          "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects.",
          "If you love technology and problem solving, becoming a software developer or data analyst is a fantastic choice.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "2-4-e3",
        "audioText": "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects.",
        "correctAnswer": "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects. (Alternative)",
          "These professionals work in modern tech hubs or remotely from anywhere in the world, collaborating on global projects."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-5",
    "badgeName": "Talent Master",
    "badgeEmoji": "⚡",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-5-1",
        "term": "Perform",
        "translation": "Verbo de acción",
        "ipa": "/pərˈfɔːrm/",
        "audioText": "perform. The youth rock band performs live songs at the school auditorium.",
        "example": "The youth rock band performs live songs at the school auditorium.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-2",
        "term": "Compose",
        "translation": "Verbo de acción",
        "ipa": "/kəmˈpoʊz/",
        "audioText": "compose. Lucas composes original piano soundtracks for indie video games.",
        "example": "Lucas composes original piano soundtracks for indie video games.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-3",
        "term": "Skate",
        "translation": "Verbo de acción",
        "ipa": "/skeɪt/",
        "audioText": "skate. Teenagers skate on urban ramps at the community sports park.",
        "example": "Teenagers skate on urban ramps at the community sports park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-4",
        "term": "Code",
        "translation": "Verbo de acción",
        "ipa": "/koʊd/",
        "audioText": "code. Students code interactive quiz games during computer science class.",
        "example": "Students code interactive quiz games during computer science class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-5",
        "term": "Solve",
        "translation": "Verbo de acción",
        "ipa": "/sɑːlv/",
        "audioText": "solve. She can solve difficult math equations in a matter of seconds.",
        "example": "She can solve difficult math equations in a matter of seconds.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-6",
        "term": "CAN va seguido de verbo en infinitivo sin 'to'. Los adverbios de grado (very well, fluently) van al final de la oración.",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/can/",
        "audioText": "Lucas can play electric guitar very well, but he can't sing on pitch.",
        "example": "Lucas can play electric guitar very well, but he can't sing on pitch.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-5-7",
        "term": "Añade precisión a tu nivel de dominio en cualquier actividad.",
        "translation": "Paso 2: Grados de Habilidad 📊",
        "ipa": "/aade/",
        "audioText": "I can edit TikTok videos easily using my phone.",
        "example": "I can edit TikTok videos easily using my phone.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-5-b1",
        "prompt": "Yo puedo tocar la guitarra eléctrica y programar luces reactivas muy bien.",
        "answer": "I can play the electric guitar and code reactive lights very well",
        "tokens": [
          "I",
          "can",
          "play",
          "the",
          "electric",
          "guitar",
          "and",
          "code",
          "reactive",
          "lights",
          "very",
          "well",
          "sing",
          "pitch"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-5-b2",
        "prompt": "Ella puede cantar afinada, pero no puede tocar el teclado al mismo tiempo.",
        "answer": "She can sing on pitch but she cannot play the keyboard at the same time",
        "tokens": [
          "She",
          "can",
          "sing",
          "on",
          "pitch",
          "but",
          "she",
          "cannot",
          "play",
          "the",
          "keyboard",
          "at",
          "same",
          "time",
          "electric",
          "guitar"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-5-b3",
        "prompt": "¿Puedes cantar el coro principal mientras toco la guitarra acústica?",
        "answer": "Can you sing the lead chorus while I play the acoustic guitar",
        "tokens": [
          "Can",
          "you",
          "sing",
          "the",
          "lead",
          "chorus",
          "while",
          "I",
          "play",
          "acoustic",
          "guitar",
          "electric",
          "code"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-5-e1",
        "audioText": "Everyone has a unique talent waiting to be developed.",
        "correctAnswer": "Everyone has a unique talent waiting to be developed.",
        "options": [
          "Everyone has a unique talent waiting to be developed.",
          "You might not be able to play an instrument today, but with dedicated practice, you can learn any creative skill.",
          "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning."
        ]
      },
      {
        "id": "2-5-e2",
        "audioText": "You might not be able to play an instrument today, but with dedicated practice, you can learn any creative skill.",
        "correctAnswer": "You might not be able to play an instrument today, but with dedicated practice, you can learn any creative skill.",
        "options": [
          "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning.",
          "You might not be able to play an instrument today, but with dedicated practice, you can learn any creative skill.",
          "You might not be able to play an instrument evening, but with dedicated practice, you can learn any creative skill."
        ]
      },
      {
        "id": "2-5-e3",
        "audioText": "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning.",
        "correctAnswer": "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning.",
        "options": [
          "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every evening.",
          "Lucas rarely code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning.",
          "Lucas can code interactive programs easily because he practices every weekend, while Sara trains her voice thirty minutes every morning."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-6",
    "badgeName": "Rules Leader",
    "badgeEmoji": "📏",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-6-1",
        "term": "Obey",
        "translation": "Verbo de acción",
        "ipa": "/oʊˈbeɪ/",
        "audioText": "obey. All students must obey lab safety protocols to prevent accidents.",
        "example": "All students must obey lab safety protocols to prevent accidents.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-2",
        "term": "Submit",
        "translation": "Verbo de acción",
        "ipa": "/səbˈmɪt/",
        "audioText": "submit. We have to submit our research essay before midnight.",
        "example": "We have to submit our research essay before midnight.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-3",
        "term": "Respect",
        "translation": "Verbo de acción",
        "ipa": "/rɪˈspɛkt/",
        "audioText": "respect. Classmates must respect each other during lively classroom debates.",
        "example": "Classmates must respect each other during lively classroom debates.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-4",
        "term": "Wear",
        "translation": "Verbo de acción",
        "ipa": "/wɛər/",
        "audioText": "wear. You must wear closed shoes and safety goggles in the robotics lab.",
        "example": "You must wear closed shoes and safety goggles in the robotics lab.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-5",
        "term": "Focus",
        "translation": "Verbo de acción",
        "ipa": "/ˈfoʊ.kəs/",
        "audioText": "focus. Students should focus during chemistry explanations to understand formulas.",
        "example": "Students should focus during chemistry explanations to understand formulas.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-6",
        "term": "MUST = Regla estricta / ley de seguridad. HAVE TO = Deber cotidiano. SHOULD = Consejo amistoso.",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/must/",
        "audioText": "You must wear safety goggles in the lab, you have to submit your essay, and you should sleep early.",
        "example": "You must wear safety goggles in the lab, you have to submit your essay, and you should sleep early.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-6-7",
        "term": "Usa MUST para normas de seguridad y MUST NOT para prohibiciones totales.",
        "translation": "Paso 2: MUST (Reglas Estrictas) 🚨",
        "ipa": "/usa/",
        "audioText": "Students must wear their ID badges and must not run in the crowded hallways.",
        "example": "Students must wear their ID badges and must not run in the crowded hallways.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-6-b1",
        "prompt": "Los estudiantes deben usar gafas de seguridad en el laboratorio de robótica.",
        "answer": "Students must wear safety goggles in the robotics laboratory",
        "tokens": [
          "Students",
          "must",
          "wear",
          "safety",
          "goggles",
          "in",
          "the",
          "robotics",
          "laboratory",
          "should",
          "stay"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-6-b2",
        "prompt": "Tú no deberías trasnochar estudiando justo la noche antes del examen.",
        "answer": "You should not stay up all night studying right before the exam",
        "tokens": [
          "You",
          "should",
          "not",
          "stay",
          "up",
          "all",
          "night",
          "studying",
          "right",
          "before",
          "the",
          "exam",
          "Students",
          "must"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-6-b3",
        "prompt": "¿Tenemos que entregar el reporte técnico antes del viernes a las 5 PM?",
        "answer": "Do we have to submit the technical report before Friday at 5 PM",
        "tokens": [
          "Do",
          "we",
          "have",
          "to",
          "submit",
          "the",
          "technical",
          "report",
          "before",
          "Friday",
          "at",
          "5",
          "PM",
          "Students",
          "must"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-6-e1",
        "audioText": "Success at school requires a clear balance of discipline and smart strategies.",
        "correctAnswer": "Success at school requires a clear balance of discipline and smart strategies.",
        "options": [
          "Success at school requires a clear balance of discipline and smart strategies.",
          "At our school, all students must arrive on time before 7:00 AM and must wear their official student badges.",
          "Additionally, you have to submit your weekly homework on the online portal."
        ]
      },
      {
        "id": "2-6-e2",
        "audioText": "At our school, all students must arrive on time before 7:00 AM and must wear their official student badges.",
        "correctAnswer": "At our school, all students must arrive on time before 7:00 AM and must wear their official student badges.",
        "options": [
          "Additionally, you have to submit your weekly homework on the online portal.",
          "At our school, all students must arrive on time before 7:00 AM and must wear their official student badges.",
          "Finally, you should form study groups with classmates because explaining concepts aloud helps you remember everything much better."
        ]
      },
      {
        "id": "2-6-e3",
        "audioText": "Additionally, you have to submit your weekly homework on the online portal.",
        "correctAnswer": "Additionally, you have to submit your weekly homework on the online portal.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Finally, you should form study groups with classmates because explaining concepts aloud helps you remember everything much better.",
          "Additionally, you have to submit your weekly homework on the online portal."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-7",
    "badgeName": "Fitness Champion",
    "badgeEmoji": "⚽",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-7-1",
        "term": "Train",
        "translation": "Verbo de acción",
        "ipa": "/treɪn/",
        "audioText": "train. Athletes train hard every afternoon to prepare for the championship.",
        "example": "Athletes train hard every afternoon to prepare for the championship.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-2",
        "term": "Stretch",
        "translation": "Verbo de acción",
        "ipa": "/strɛtʃ/",
        "audioText": "stretch. I always stretch my legs and back to avoid muscle cramps.",
        "example": "I always stretch my legs and back to avoid muscle cramps.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-3",
        "term": "Hydrate",
        "translation": "Verbo de acción",
        "ipa": "/ˈhaɪ.dreɪt/",
        "audioText": "hydrate. Remember to hydrate frequently during hot cycling rides.",
        "example": "Remember to hydrate frequently during hot cycling rides.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-4",
        "term": "Compete",
        "translation": "Verbo de acción",
        "ipa": "/kəmˈpiːt/",
        "audioText": "compete. Our school soccer team competes in the regional youth tournament.",
        "example": "Our school soccer team competes in the regional youth tournament.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-5",
        "term": "Boost",
        "translation": "Verbo de acción",
        "ipa": "/buːst/",
        "audioText": "boost. Morning workouts boost your brain power and daily productivity.",
        "example": "Morning workouts boost your brain power and daily productivity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-6",
        "term": "Regla de Posición: Sujeto + Adverbio + Verbo Principal. (Excepción: con TO BE va después: 'I am always energized').",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/regla/",
        "audioText": "I usually drink two liters of water every day, and I never skip breakfast.",
        "example": "I usually drink two liters of water every day, and I never skip breakfast.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-7-7",
        "term": "Combina deporte, frecuencia y beneficio para una oración fluida.",
        "translation": "Paso 2: Afirmativo (+)",
        "ipa": "/combina/",
        "audioText": "I usually go cycling on Saturday mornings because it helps me build endurance.",
        "example": "I usually go cycling on Saturday mornings because it helps me build endurance.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-7-b1",
        "prompt": "Yo salgo a montar en bicicleta cuatro veces por semana y siempre tomo agua.",
        "answer": "I usually go cycling four times a week and always drink water",
        "tokens": [
          "I",
          "usually",
          "go",
          "cycling",
          "four",
          "times",
          "a",
          "week",
          "and",
          "always",
          "drink",
          "water",
          "never",
          "skip"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-7-b2",
        "prompt": "Nosotros nunca nos saltamos los estiramientos después de jugar fútbol.",
        "answer": "We never skip muscle stretching after playing intense soccer matches",
        "tokens": [
          "We",
          "never",
          "skip",
          "muscle",
          "stretching",
          "after",
          "playing",
          "intense",
          "soccer",
          "matches",
          "usually",
          "cycling"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-7-b3",
        "prompt": "¿Con qué frecuencia practicas deportes y cuánta agua tomas al día?",
        "answer": "How often do you practice sports and how much water do you drink",
        "tokens": [
          "How",
          "often",
          "do",
          "you",
          "practice",
          "sports",
          "and",
          "how",
          "much",
          "water",
          "drink",
          "usually",
          "cycling"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-7-e1",
        "audioText": "Maintaining a healthy lifestyle as a teenager is easier than you think.",
        "correctAnswer": "Maintaining a healthy lifestyle as a teenager is easier than you think.",
        "options": [
          "Maintaining a healthy lifestyle as a teenager is easier than you think.",
          "First, always drink at least two liters of fresh water daily, especially before and after workouts.",
          "Second, athletes should sleep eight hours every night because deep rest recovers your muscles and boosts memory."
        ]
      },
      {
        "id": "2-7-e2",
        "audioText": "First, always drink at least two liters of fresh water daily, especially before and after workouts.",
        "correctAnswer": "First, always drink at least two liters of fresh water daily, especially before and after workouts.",
        "options": [
          "Second, athletes should sleep eight hours every night because deep rest recovers your muscles and boosts memory.",
          "First, always drink at least two liters of fresh water daily, especially before and after workouts.",
          "Finally, try to play a sport or walk outside at least three times a week."
        ]
      },
      {
        "id": "2-7-e3",
        "audioText": "Second, athletes should sleep eight hours every night because deep rest recovers your muscles and boosts memory.",
        "correctAnswer": "Second, athletes should sleep eight hours every night because deep rest recovers your muscles and boosts memory.",
        "options": [
          "Second, athletes should sleep eight hours every evening because deep rest recovers your muscles and boosts memory.",
          "Finally, try to play a sport or walk outside at least three times a week.",
          "Second, athletes should sleep eight hours every night because deep rest recovers your muscles and boosts memory."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-8",
    "badgeName": "Squad Coordinator ️",
    "badgeEmoji": "🎟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-8-1",
        "term": "Gather",
        "translation": "Verbo de acción",
        "ipa": "/ˈɡæð.ər/",
        "audioText": "gather. Friends gather at the shopping mall entrance before the movie starts.",
        "example": "Friends gather at the shopping mall entrance before the movie starts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-2",
        "term": "Hang",
        "translation": "Verbo de acción",
        "ipa": "/hæŋ/",
        "audioText": "hang. We love to hang out at the skatepark listening to music.",
        "example": "We love to hang out at the skatepark listening to music.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-3",
        "term": "Invite",
        "translation": "Verbo de acción",
        "ipa": "/ɪnˈvaɪt/",
        "audioText": "invite. Valeria invited her entire study group to celebrate at the arcade.",
        "example": "Valeria invited her entire study group to celebrate at the arcade.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-4",
        "term": "Reserve",
        "translation": "Verbo de acción",
        "ipa": "/rɪˈzɜːrv/",
        "audioText": "reserve. Let's reserve four cinema tickets online to get the best center seats.",
        "example": "Let's reserve four cinema tickets online to get the best center seats.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-5",
        "term": "Explore",
        "translation": "Verbo de acción",
        "ipa": "/ɪkˈsplɔːr/",
        "audioText": "explore. We explored the new retro gaming café in the downtown district.",
        "example": "We explored the new retro gaming café in the downtown district.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-6",
        "term": "LET'S + Verbo Base (Let's go). HOW ABOUT + Verbo con -ING (How about going?). WHY DON'T WE + Verbo Base?",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/lets/",
        "audioText": "Let's watch the new sci-fi movie at 4 PM, or how about grabbing burgers first?",
        "example": "Let's watch the new sci-fi movie at 4 PM, or how about grabbing burgers first?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-8-7",
        "term": "La forma más común y entusiasta de proponer una acción grupal.",
        "translation": "Paso 2: LET'S (Propuesta Directa) 🚀",
        "ipa": "/la/",
        "audioText": "Let's meet at the cinema ticket booth this Saturday at 3:30 PM.",
        "example": "Let's meet at the cinema ticket booth this Saturday at 3:30 PM.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-8-b1",
        "prompt": "00 PM en punto.",
        "answer": "Let s meet in front of the cinema ticket booth at 3 00 PM sharp",
        "tokens": [
          "Let",
          "s",
          "meet",
          "in",
          "front",
          "of",
          "the",
          "cinema",
          "ticket",
          "booth",
          "at",
          "3",
          "00",
          "PM",
          "sharp",
          "late",
          "because"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-8-b2",
        "prompt": "No llegues tarde porque las boletas se agotan rápido en el estreno.",
        "answer": "Don t be late because tickets sell out quickly on premiere night",
        "tokens": [
          "Don",
          "t",
          "be",
          "late",
          "because",
          "tickets",
          "sell",
          "out",
          "quickly",
          "on",
          "premiere",
          "night",
          "meet",
          "front"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-8-b3",
        "prompt": "¿Qué tal si comemos hamburguesas antes de ir a los juegos arcade?",
        "answer": "How about eating burgers before going to the arcade room",
        "tokens": [
          "How",
          "about",
          "eating",
          "burgers",
          "before",
          "going",
          "to",
          "the",
          "arcade",
          "room",
          "meet",
          "front"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-8-e1",
        "audioText": "I just booked our tickets for the escape room challenge this Saturday.",
        "correctAnswer": "I just booked our tickets for the escape room challenge this Saturday.",
        "options": [
          "I just booked our tickets for the escape room challenge this Saturday.",
          "Let's meet at 2:45 PM in front of the fountain at Central Mall.",
          "Afterward, how about grabbing bubble tea and hanging out at the skatepark?"
        ]
      },
      {
        "id": "2-8-e2",
        "audioText": "Let's meet at 2:45 PM in front of the fountain at Central Mall.",
        "correctAnswer": "Let's meet at 2:45 PM in front of the fountain at Central Mall.",
        "options": [
          "Afterward, how about grabbing bubble tea and hanging out at the skatepark?",
          "Let's meet at 2:45 PM in front of the fountain at Central Mall.",
          "Make sure to bring your transit card and be on time!"
        ]
      },
      {
        "id": "2-8-e3",
        "audioText": "Afterward, how about grabbing bubble tea and hanging out at the skatepark?",
        "correctAnswer": "Afterward, how about grabbing bubble tea and hanging out at the skatepark?",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Make sure to bring your transit card and be on time!",
          "Afterward, how about grabbing bubble tea and hanging out at the skatepark?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-9",
    "badgeName": "Media Critic",
    "badgeEmoji": "🎬",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-9-1",
        "term": "Stream",
        "translation": "Verbo de acción",
        "ipa": "/striːm/",
        "audioText": "stream. I stream my favorite anime series every Friday night after finishing homework.",
        "example": "I stream my favorite anime series every Friday night after finishing homework.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-2",
        "term": "Recommend",
        "translation": "Verbo de acción",
        "ipa": "/ˌrɛk.əˈmɛnd/",
        "audioText": "recommend. I highly recommend this adventure game to all fantasy lovers.",
        "example": "I highly recommend this adventure game to all fantasy lovers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-3",
        "term": "Rate",
        "translation": "Verbo de acción",
        "ipa": "/reɪt/",
        "audioText": "rate. Critics rated the new superhero movie five stars out of five.",
        "example": "Critics rated the new superhero movie five stars out of five.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-4",
        "term": "Criticize",
        "translation": "Verbo de acción",
        "ipa": "/ˈkrɪt.ɪ.saɪz/",
        "audioText": "criticize. Fans criticized the rushed ending of the fantasy series.",
        "example": "Fans criticized the rushed ending of the fantasy series.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-5",
        "term": "Soundtrack",
        "translation": "Verbo de acción",
        "ipa": "/ˈsaʊnd.træk/",
        "audioText": "soundtrack. Epic orchestral songs soundtrack the most dramatic battle scenes.",
        "example": "Epic orchestral songs soundtrack the most dramatic battle scenes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-6",
        "term": "In my opinion / I personally think that + [Título] + is + [Adjetivo de Opinión] + because + [Argumento].",
        "translation": "Paso 1: Regla de Oro ⭐",
        "ipa": "/in/",
        "audioText": "In my opinion, Arcane is an absolute masterpiece because the animation and music are breathtaking.",
        "example": "In my opinion, Arcane is an absolute masterpiece because the animation and music are breathtaking.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-9-7",
        "term": "Eleva tu vocabulario más allá de 'good' o 'bad'.",
        "translation": "Paso 2: Adjetivos de Impacto 🌟",
        "ipa": "/eleva/",
        "audioText": "This open-world RPG is highly addictive because the exploration is endless.",
        "example": "This open-world RPG is highly addictive because the exploration is endless.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-9-b1",
        "prompt": "En mi opinión, esta serie es una obra maestra porque la animación es impresionante.",
        "answer": "In my opinion this series is a masterpiece because the animation is breathtaking",
        "tokens": [
          "In",
          "my",
          "opinion",
          "this",
          "series",
          "is",
          "a",
          "masterpiece",
          "because",
          "the",
          "animation",
          "breathtaking",
          "Although",
          "graphics"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-9-b2",
        "prompt": "Aunque los gráficos son increíbles, la historia no es muy original ni emocionante.",
        "answer": "Although the graphics are stunning the story is not very original or exciting",
        "tokens": [
          "Although",
          "the",
          "graphics",
          "are",
          "stunning",
          "story",
          "is",
          "not",
          "very",
          "original",
          "or",
          "exciting",
          "opinion",
          "this"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-9-b3",
        "prompt": "¿Qué opinas de este nuevo videojuego y qué puntuación le das?",
        "answer": "What do you think of this new video game and what score do you give it",
        "tokens": [
          "What",
          "do",
          "you",
          "think",
          "of",
          "this",
          "new",
          "video",
          "game",
          "and",
          "what",
          "score",
          "give",
          "it",
          "opinion",
          "series"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-9-e1",
        "audioText": "Welcome back to Teen Media Radar!",
        "correctAnswer": "Welcome back to Teen Media Radar!",
        "options": [
          "Welcome back to Teen Media Radar!",
          "Today we are reviewing the latest sci-fi movie.",
          "In my opinion, the film is action-packed and highly entertaining from start to finish."
        ]
      },
      {
        "id": "2-9-e2",
        "audioText": "Today we are reviewing the latest sci-fi movie.",
        "correctAnswer": "Today we are reviewing the latest sci-fi movie.",
        "options": [
          "In my opinion, the film is action-packed and highly entertaining from start to finish.",
          "Today we are reviewing the latest sci-fi movie.",
          "Although some plot twists are a bit predictable, the outstanding soundtrack and CGI visual effects make it a must-watch experience on the big screen."
        ]
      },
      {
        "id": "2-9-e3",
        "audioText": "In my opinion, the film is action-packed and highly entertaining from start to finish.",
        "correctAnswer": "In my opinion, the film is action-packed and highly entertaining from start to finish.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Although some plot twists are a bit predictable, the outstanding soundtrack and CGI visual effects make it a must-watch experience on the big screen.",
          "In my opinion, the film is action-packed and highly entertaining from start to finish."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-10",
    "badgeName": "Level 2 Graduate",
    "badgeEmoji": "🎓",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-10-1",
        "term": "Summarize",
        "translation": "Verbo de acción",
        "ipa": "/ˈsʌm.ə.raɪz/",
        "audioText": "summarize. Great students summarize key grammar rules before the final project.",
        "example": "Great students summarize key grammar rules before the final project.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-2",
        "term": "Debate",
        "translation": "Verbo de acción",
        "ipa": "/dɪˈbeɪt/",
        "audioText": "debate. We debated about artificial intelligence and future careers in class.",
        "example": "We debated about artificial intelligence and future careers in class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-3",
        "term": "Present",
        "translation": "Verbo de acción",
        "ipa": "/prɪˈzɛnt/",
        "audioText": "present. Valentina presented her dream travel and career manifesto with confidence.",
        "example": "Valentina presented her dream travel and career manifesto with confidence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-4",
        "term": "Express",
        "translation": "Verbo de acción",
        "ipa": "/ɪkˈsprɛs/",
        "audioText": "express. You can express your creative ideas fluently in English now.",
        "example": "You can express your creative ideas fluently in English now.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-5",
        "term": "Collaborate",
        "translation": "Verbo de acción",
        "ipa": "/kəˈlæb.ə.reɪt/",
        "audioText": "collaborate. The entire teen squad collaborated to produce an awesome podcast.",
        "example": "The entire teen squad collaborated to produce an awesome podcast.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-6",
        "term": "CAN / CAN'T + WHERE DO... LIVE?",
        "translation": "Paso 1: 1. Habilidades & Hábitats 🦁",
        "ipa": "/can/",
        "audioText": "Andean condors can fly over 5,000 meters, but they cannot survive without high mountain winds.",
        "example": "Andean condors can fly over 5,000 meters, but they cannot survive without high mountain winds.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-10-7",
        "term": "THERE IS (singular) / THERE ARE (plural) + Preposiciones de lugar.",
        "translation": "Paso 2: 2. Espacios & Ubicación 🏠",
        "ipa": "/there/",
        "audioText": "There is an ergonomic gaming desk between the closet and the window.",
        "example": "There is an ergonomic gaming desk between the closet and the window.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-10-b1",
        "prompt": "Nosotros podemos expresar nuestras metas profesionales y comunicarnos con fluidez.",
        "answer": "We can express our career goals and communicate with fluency",
        "tokens": [
          "We",
          "can",
          "express",
          "our",
          "career",
          "goals",
          "and",
          "communicate",
          "with",
          "fluency",
          "should",
          "never"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-10-b2",
        "prompt": "Tú nunca deberías tener miedo de cometer errores al hablar inglés.",
        "answer": "You should never be afraid of making mistakes when speaking English",
        "tokens": [
          "You",
          "should",
          "never",
          "be",
          "afraid",
          "of",
          "making",
          "mistakes",
          "when",
          "speaking",
          "English",
          "express",
          "career"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "2-10-b3",
        "prompt": "¿Estás listo para dar el salto al Nivel 3 y conquistar el inglés global?",
        "answer": "Are you ready to step into Level 3 and master global English",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "step",
          "into",
          "Level",
          "3",
          "and",
          "master",
          "global",
          "English",
          "express",
          "career"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-10-e1",
        "audioText": "Congratulations on completing all ten classes of Teens Basic 2 Communicator!",
        "correctAnswer": "Congratulations on completing all ten classes of Teens Basic 2 Communicator!",
        "options": [
          "Congratulations on completing all ten classes of Teens Basic 2 Communicator!",
          "You have mastered discussing animal habitats, home layout, urban transit, future careers, abilities, rules, sports routines, weekend plans, and media reviews.",
          "You are now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!"
        ]
      },
      {
        "id": "2-10-e2",
        "audioText": "You have mastered discussing animal habitats, home layout, urban transit, future careers, abilities, rules, sports routines, weekend plans, and media reviews.",
        "correctAnswer": "You have mastered discussing animal habitats, home layout, urban transit, future careers, abilities, rules, sports routines, weekend plans, and media reviews.",
        "options": [
          "You are now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!",
          "You have mastered discussing animal habitats, home layout, urban transit, future careers, abilities, rules, sports routines, weekend plans, and media reviews.",
          "You have mastered discussing animal habitats, evening layout, urban transit, future careers, abilities, rules, sports routines, weekend plans, and media reviews."
        ]
      },
      {
        "id": "2-10-e3",
        "audioText": "You are now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!",
        "correctAnswer": "You are now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "You rarely now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!",
          "You are now fully prepared to enter Level 3 and take your English debates, storytelling, and global communication to the next level!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-1",
    "badgeName": "Daily Routine & Time",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-1-1",
        "term": "Wake up",
        "translation": "Despertarse",
        "ipa": "/weɪk ʌp/",
        "audioText": "Wake up. I wake up at 6:00 AM every day.",
        "example": "I wake up at 6:00 AM every day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-2",
        "term": "Leave",
        "translation": "Salir de / Irse",
        "ipa": "/liːv/",
        "audioText": "Leave. She leaves home at 7:10 AM.",
        "example": "She leaves home at 7:10 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-3",
        "term": "Study",
        "translation": "Estudiar",
        "ipa": "/ˈstʌdi/",
        "audioText": "Study. We study English on weekday afternoons.",
        "example": "We study English on weekday afternoons.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-4",
        "term": "Exercise",
        "translation": "Hacer ejercicio / Entrenar",
        "ipa": "/ˈeksərsaɪz/",
        "audioText": "Exercise. He exercises at the gym before dinner.",
        "example": "He exercises at the gym before dinner.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-5",
        "term": "Relax",
        "translation": "Relajarse / Descansar",
        "ipa": "/rɪˈlæks/",
        "audioText": "Relax. I relax and listen to music in the evening.",
        "example": "I relax and listen to music in the evening.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-6",
        "term": "It is 7:00 (Seven o'clock)",
        "translation": "Usa 'at' para horas exactas: 'My class starts at 7:30 AM'. Usa 'It is' para responder la hora actual.",
        "ipa": "/it/",
        "audioText": "My morning alarm rings at 6:15 AM every single day.",
        "example": "My morning alarm rings at 6:15 AM every single day.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-1-7",
        "term": "Always (100%)",
        "translation": "Se colocan entre el Sujeto y el Verbo de acción: Sujeto + Adverbio + Verbo + Complemento.",
        "ipa": "/always/",
        "audioText": "Daniel always drinks chocolate milk before going to school.",
        "example": "Daniel always drinks chocolate milk before going to school.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-1-b1",
        "prompt": "Yo siempre me despierto a las seis y media de la mañana.",
        "answer": "I always wake up at half past six in the morning",
        "tokens": [
          "I",
          "always",
          "wake",
          "up",
          "at",
          "half",
          "past",
          "six",
          "in",
          "the",
          "morning",
          "Valentina",
          "does"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-1-b2",
        "prompt": "Valentina no se trasnocha los días de colegio.",
        "answer": "Valentina does not stay up late on school nights",
        "tokens": [
          "Valentina",
          "does",
          "not",
          "stay",
          "up",
          "late",
          "on",
          "school",
          "nights",
          "always",
          "wake"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-1-b3",
        "prompt": "¿A qué hora sales para el entrenamiento por la tarde?",
        "answer": "What time do you leave for training in the afternoon",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "leave",
          "for",
          "training",
          "in",
          "the",
          "afternoon",
          "always",
          "wake"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-1-e1",
        "audioText": "Our soccer training always starts at half past four in the afternoon.",
        "correctAnswer": "Our soccer training always starts at half past four in the afternoon.",
        "options": [
          "Our soccer training always starts at half past four in the afternoon.",
          "Please do not be late because we have a big match on Friday.",
          "I always wake up at half past six in the morning."
        ]
      },
      {
        "id": "3-1-e2",
        "audioText": "Please do not be late because we have a big match on Friday.",
        "correctAnswer": "Please do not be late because we have a big match on Friday.",
        "options": [
          "I always wake up at half past six in the morning.",
          "Please do not be late because we have a big match on Friday.",
          "Valentina does not stay up late on school nights."
        ]
      },
      {
        "id": "3-1-e3",
        "audioText": "I always wake up at half past six in the morning.",
        "correctAnswer": "I always wake up at half past six in the morning.",
        "options": [
          "What time do you leave for training in the afternoon?",
          "Valentina does not stay up late on school nights.",
          "I always wake up at half past six in the morning."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-2",
    "badgeName": "Sports, Competitions & Teams",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-2-1",
        "term": "Win",
        "translation": "Ganar",
        "ipa": "/wɪn/",
        "audioText": "Win. Our team won the championship trophy.",
        "example": "Our team won the championship trophy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-2",
        "term": "Lose",
        "translation": "Perder",
        "ipa": "/luːz/",
        "audioText": "Lose. They lost the match but played bravely.",
        "example": "They lost the match but played bravely.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-3",
        "term": "Score",
        "translation": "Anotar / Marcar (gol/punto)",
        "ipa": "/skɔːr/",
        "audioText": "Score. He scored a penalty in the last minute.",
        "example": "He scored a penalty in the last minute.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-4",
        "term": "Train",
        "translation": "Entrenar",
        "ipa": "/treɪn/",
        "audioText": "Train. We train hard every weekday afternoon.",
        "example": "We train hard every weekday afternoon.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-5",
        "term": "Pass",
        "translation": "Pasar (el balón)",
        "ipa": "/pæs/",
        "audioText": "Pass. Pass the ball quickly to the forward!",
        "example": "Pass the ball quickly to the forward!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-6",
        "term": "Play soccer",
        "translation": "Se usa siempre que haya un balón, raqueta o dos equipos compitiendo.",
        "ipa": "/play/",
        "audioText": "Santiago plays soccer for his school team every Saturday morning.",
        "example": "Santiago plays soccer for his school team every Saturday morning.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-2-7",
        "term": "Go swimming",
        "translation": "Se usa cuando la actividad termina en -ING e implica desplazamiento o aire libre.",
        "ipa": "/go/",
        "audioText": "We go cycling on the Ciclovía every Sunday with the whole family.",
        "example": "We go cycling on the Ciclovía every Sunday with the whole family.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-2-b1",
        "prompt": "Nosotros jugamos fútbol todos los sábados en la cancha sintética.",
        "answer": "We play soccer every Saturday on the artificial turf pitch",
        "tokens": [
          "We",
          "play",
          "soccer",
          "every",
          "Saturday",
          "on",
          "the",
          "artificial",
          "turf",
          "pitch",
          "brother",
          "does"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-2-b2",
        "prompt": "Mi hermano no hace karate pero va a nadar los domingos.",
        "answer": "My brother does not do karate but goes swimming on Sundays",
        "tokens": [
          "My",
          "brother",
          "does",
          "not",
          "do",
          "karate",
          "but",
          "goes",
          "swimming",
          "on",
          "Sundays",
          "play",
          "soccer"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-2-b3",
        "prompt": "¿Con qué frecuencia entrenas con tu equipo de voleibol?",
        "answer": "How often do you train with your volleyball team",
        "tokens": [
          "How",
          "often",
          "do",
          "you",
          "train",
          "with",
          "your",
          "volleyball",
          "team",
          "play",
          "soccer"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-2-e1",
        "audioText": "We need to pass the ball quickly, stay strong on defense, and support our striker.",
        "correctAnswer": "We need to pass the ball quickly, stay strong on defense, and support our striker.",
        "options": [
          "We need to pass the ball quickly, stay strong on defense, and support our striker.",
          "We can win this trophy together!",
          "We play soccer every Saturday on the artificial turf pitch."
        ]
      },
      {
        "id": "3-2-e2",
        "audioText": "We can win this trophy together!",
        "correctAnswer": "We can win this trophy together!",
        "options": [
          "We play soccer every Saturday on the artificial turf pitch.",
          "We can win this trophy together!",
          "My brother does not do karate but goes swimming on Sundays."
        ]
      },
      {
        "id": "3-2-e3",
        "audioText": "We play soccer every Saturday on the artificial turf pitch.",
        "correctAnswer": "We play soccer every Saturday on the artificial turf pitch.",
        "options": [
          "How often do you train with your volleyball team?",
          "My brother does not do karate but goes swimming on Sundays.",
          "We play soccer every Saturday on the artificial turf pitch."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-3",
    "badgeName": "Holidays, Festivals & Traditions",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-3-1",
        "term": "Celebrate",
        "translation": "Celebrar / Festejar",
        "ipa": "/ˈselɪbreɪt/",
        "audioText": "Celebrate. We celebrate New Year's Eve together.",
        "example": "We celebrate New Year's Eve together.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-2",
        "term": "Decorate",
        "translation": "Decorar / Adornar",
        "ipa": "/ˈdekəreɪt/",
        "audioText": "Decorate. They decorated the Christmas tree with lights.",
        "example": "They decorated the Christmas tree with lights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-3",
        "term": "Dress up",
        "translation": "Disfrazarse / Vestirse de gala",
        "ipa": "/dres ʌp/",
        "audioText": "Dress up. Teens dress up in anime costumes for Halloween.",
        "example": "Teens dress up in anime costumes for Halloween.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-4",
        "term": "Gather",
        "translation": "Reunirse / Juntarse",
        "ipa": "/ˈɡæðər/",
        "audioText": "Gather. The whole family gathers on Sunday.",
        "example": "The whole family gathers on Sunday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-5",
        "term": "Share",
        "translation": "Compartir",
        "ipa": "/ʃer/",
        "audioText": "Share. We share delicious sweets and stories.",
        "example": "We share delicious sweets and stories.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-6",
        "term": "In December",
        "translation": "Se usa para rangos de tiempo amplios donde no se especifica el día exacto.",
        "ipa": "/in/",
        "audioText": "In December, cities in Colombia shine with colorful Christmas lights.",
        "example": "In December, cities in Colombia shine with colorful Christmas lights.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-3-7",
        "term": "On December 24th",
        "translation": "Se usa siempre que se mencione un día de la semana o una fecha con número.",
        "ipa": "/on/",
        "audioText": "On December 24th, we eat buñuelos and open gifts with my family.",
        "example": "On December 24th, we eat buñuelos and open gifts with my family.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-3-b1",
        "prompt": "En diciembre nosotros decoramos la casa con luces brillantes.",
        "answer": "In December we decorate the house with bright lights",
        "tokens": [
          "In",
          "December",
          "we",
          "decorate",
          "the",
          "house",
          "with",
          "bright",
          "lights",
          "stay",
          "alone"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-3-b2",
        "prompt": "Nosotros no nos quedamos solos en Nochebuena.",
        "answer": "We do not stay alone on Christmas Eve",
        "tokens": [
          "We",
          "do",
          "not",
          "stay",
          "alone",
          "on",
          "Christmas",
          "Eve",
          "December",
          "decorate"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-3-b3",
        "prompt": "¿Qué haces tú a la medianoche en Año Nuevo?",
        "answer": "What do you do at midnight on New Year s Eve",
        "tokens": [
          "What",
          "do",
          "you",
          "at",
          "midnight",
          "on",
          "New",
          "Year",
          "s",
          "Eve",
          "December",
          "decorate"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-3-e1",
        "audioText": "Every year on December 31st at midnight, we eat twelve grapes and run around the block with suitcases for good travel luck!",
        "correctAnswer": "Every year on December 31st at midnight, we eat twelve grapes and run around the block with suitcases for good travel luck!",
        "options": [
          "Every year on December 31st at midnight, we eat twelve grapes and run around the block with suitcases for good travel luck!",
          "In December we decorate the house with bright lights.",
          "We do not stay alone on Christmas Eve."
        ]
      },
      {
        "id": "3-3-e2",
        "audioText": "In December we decorate the house with bright lights.",
        "correctAnswer": "In December we decorate the house with bright lights.",
        "options": [
          "We do not stay alone on Christmas Eve.",
          "In December we decorate the house with bright lights.",
          "What do you do at midnight on New Year's Eve?"
        ]
      },
      {
        "id": "3-3-e3",
        "audioText": "We do not stay alone on Christmas Eve.",
        "correctAnswer": "We do not stay alone on Christmas Eve.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What do you do at midnight on New Year's Eve?",
          "We do not stay alone on Christmas Eve."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-4",
    "badgeName": "Space, Science & Future",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-4-1",
        "term": "Discover",
        "translation": "Descubrir",
        "ipa": "/dɪˈskʌvər/",
        "audioText": "Discover. Scientists will discover new oceans on Jupiter's moons.",
        "example": "Scientists will discover new oceans on Jupiter's moons.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-2",
        "term": "Invent",
        "translation": "Inventar",
        "ipa": "/ɪnˈvent/",
        "audioText": "Invent. Engineers will invent ultra-fast spacecraft.",
        "example": "Engineers will invent ultra-fast spacecraft.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-3",
        "term": "Explore",
        "translation": "Explorar",
        "ipa": "/ɪkˈsplɔːr/",
        "audioText": "Explore. Robots will explore deep cosmic craters.",
        "example": "Robots will explore deep cosmic craters.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-4",
        "term": "Travel",
        "translation": "Viajar",
        "ipa": "/ˈtrævl/",
        "audioText": "Travel. Humans will travel beyond our solar system.",
        "example": "Humans will travel beyond our solar system.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-5",
        "term": "Build",
        "translation": "Construir",
        "ipa": "/bɪld/",
        "audioText": "Build. They will build colonies under glass domes.",
        "example": "They will build colonies under glass domes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-6",
        "term": "I will ('ll)",
        "translation": "El verbo que sigue a 'will' nunca lleva -s, -ed ni -ing. Se mantiene en forma base.",
        "ipa": "/i/",
        "audioText": "Astronauts will build research stations on the Moon very soon.",
        "example": "Astronauts will build research stations on the Moon very soon.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-4-7",
        "term": "I'll travel",
        "translation": "En inglés hablado informal, casi siempre se contrae 'will' como 'll.",
        "ipa": "/ill/",
        "audioText": "Scientists believe we'll find clean renewable energy for all planets.",
        "example": "Scientists believe we'll find clean renewable energy for all planets.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-4-b1",
        "prompt": "Los astronautas construirán una base científica en la Luna.",
        "answer": "Astronauts will build a scientific base on the Moon",
        "tokens": [
          "Astronauts",
          "will",
          "build",
          "a",
          "scientific",
          "base",
          "on",
          "the",
          "Moon",
          "Future",
          "cars"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-4-b2",
        "prompt": "Los carros del futuro no usarán gasolina contaminante.",
        "answer": "Future cars will not use polluting gasoline",
        "tokens": [
          "Future",
          "cars",
          "will",
          "not",
          "use",
          "polluting",
          "gasoline",
          "Astronauts",
          "build"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-4-b3",
        "prompt": "¿Crees que los humanos descubrirán vida en otros planetas?",
        "answer": "Do you think humans will discover life on other planets",
        "tokens": [
          "Do",
          "you",
          "think",
          "humans",
          "will",
          "discover",
          "life",
          "on",
          "other",
          "planets",
          "Astronauts",
          "build"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-4-e1",
        "audioText": "In the next thirty years, artificial intelligence will help humans discover clean fusion energy, but it will not replace human creativity or empathy.",
        "correctAnswer": "In the next thirty years, artificial intelligence will help humans discover clean fusion energy, but it will not replace human creativity or empathy.",
        "options": [
          "In the next thirty years, artificial intelligence will help humans discover clean fusion energy, but it will not replace human creativity or empathy.",
          "Astronauts will build a scientific base on the Moon.",
          "Future cars will not use polluting gasoline."
        ]
      },
      {
        "id": "3-4-e2",
        "audioText": "Astronauts will build a scientific base on the Moon.",
        "correctAnswer": "Astronauts will build a scientific base on the Moon.",
        "options": [
          "Future cars will not use polluting gasoline.",
          "Astronauts will build a scientific base on the Moon.",
          "Do you think humans will discover life on other planets?"
        ]
      },
      {
        "id": "3-4-e3",
        "audioText": "Future cars will not use polluting gasoline.",
        "correctAnswer": "Future cars will not use polluting gasoline.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Do you think humans will discover life on other planets?",
          "Future cars will not use polluting gasoline."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-5",
    "badgeName": "Past To Be",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-5-1",
        "term": "Be (Was/Were)",
        "translation": "Ser / Estar",
        "ipa": "/wʌz - wɜːr/",
        "audioText": "Be (Was/Were). I was small and fast.",
        "example": "I was small and fast.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-2",
        "term": "Remember",
        "translation": "Recordar",
        "ipa": "/rɪˈmembər/",
        "audioText": "Remember. I remembered my favorite toy car.",
        "example": "I remembered my favorite toy car.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-3",
        "term": "Grow up",
        "translation": "Crecer / Criarse",
        "ipa": "/ɡruː ʌp/",
        "audioText": "Grow up. We grew up in a friendly neighborhood.",
        "example": "We grew up in a friendly neighborhood.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-4",
        "term": "Play",
        "translation": "Jugar",
        "ipa": "/pleɪd/",
        "audioText": "Play. We played hide and seek in the yard.",
        "example": "We played hide and seek in the yard.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-5",
        "term": "Feel",
        "translation": "Sentirse",
        "ipa": "/felt/",
        "audioText": "Feel. She felt happy on her birthday.",
        "example": "She felt happy on her birthday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-6",
        "term": "I was",
        "translation": "Significa 'yo era / yo estaba' o 'él/ella era / estaba'.",
        "ipa": "/i/",
        "audioText": "When I was six years old, I was very energetic and curious.",
        "example": "When I was six years old, I was very energetic and curious.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-5-7",
        "term": "You were",
        "translation": "Significa 'tú eras/estabas' o 'nosotros/ellos eran/estaban'.",
        "ipa": "/you/",
        "audioText": "We were in the same classroom in third grade.",
        "example": "We were in the same classroom in third grade.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-5-b1",
        "prompt": "Cuando yo tenía siete años yo era muy curioso y juguetón.",
        "answer": "When I was seven years old I was very curious and playful",
        "tokens": [
          "When",
          "I",
          "was",
          "seven",
          "years",
          "old",
          "very",
          "curious",
          "and",
          "playful",
          "were",
          "primary"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-5-b2",
        "prompt": "Nosotros no éramos tímidos en el salón de primaria.",
        "answer": "We were not shy in our primary school classroom",
        "tokens": [
          "We",
          "were",
          "not",
          "shy",
          "in",
          "our",
          "primary",
          "school",
          "classroom",
          "When",
          "seven"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-5-b3",
        "prompt": "¿Dónde estabas tú ayer por la tarde durante el partido?",
        "answer": "Where were you yesterday afternoon during the match",
        "tokens": [
          "Where",
          "were",
          "you",
          "yesterday",
          "afternoon",
          "during",
          "the",
          "match",
          "When",
          "seven"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-5-e1",
        "audioText": "On my first day of primary school, I was very nervous because the school was huge, but my teacher was super friendly and welcoming.",
        "correctAnswer": "On my first day of primary school, I was very nervous because the school was huge, but my teacher was super friendly and welcoming.",
        "options": [
          "On my first day of primary school, I was very nervous because the school was huge, but my teacher was super friendly and welcoming.",
          "When I was seven years old I was very curious and playful.",
          "We were not shy in our primary school classroom."
        ]
      },
      {
        "id": "3-5-e2",
        "audioText": "When I was seven years old I was very curious and playful.",
        "correctAnswer": "When I was seven years old I was very curious and playful.",
        "options": [
          "We were not shy in our primary school classroom.",
          "When I was seven years old I was very curious and playful.",
          "Where were you yesterday afternoon during the match?"
        ]
      },
      {
        "id": "3-5-e3",
        "audioText": "We were not shy in our primary school classroom.",
        "correctAnswer": "We were not shy in our primary school classroom.",
        "options": [
          "We were not shy in our primary evening classroom.",
          "Where were you yesterday afternoon during the match?",
          "We were not shy in our primary school classroom."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-6",
    "badgeName": "Vacations, Travel & Anecdotes",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-6-1",
        "term": "Visit",
        "translation": "Visitar",
        "ipa": "/ˈvɪzɪt - ˈvɪzɪtɪd/",
        "audioText": "Visit. We visited the Gold Museum in Bogota.",
        "example": "We visited the Gold Museum in Bogota.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-6-2",
        "term": "Travel",
        "translation": "Viajar",
        "ipa": "/ˈtrævl - ˈtrævld/",
        "audioText": "Travel. They traveled to the Amazon rainforest.",
        "example": "They traveled to the Amazon rainforest.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-6-3",
        "term": "Explore",
        "translation": "Explorar / Conocer",
        "ipa": "/ɪkˈsplɔːr - ɪkˈsplɔːrd/",
        "audioText": "Explore. I explored ancient stone tunnels.",
        "example": "I explored ancient stone tunnels.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-6-4",
        "term": "Relax",
        "translation": "Relajarse / Descansar",
        "ipa": "/rɪˈlæks - rɪˈlækst/",
        "audioText": "Relax. We relaxed on the sunny beach all day.",
        "example": "We relaxed on the sunny beach all day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-6-5",
        "term": "Pack",
        "translation": "Empacar",
        "ipa": "/pæk - pækt/",
        "audioText": "Pack. She packed her suitcase last night.",
        "example": "She packed her suitcase last night.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-6-6",
        "term": "Visit ➔ Visited",
        "translation": "Añade -ed (o solo -d si ya termina en e: like ➔ liked).",
        "ipa": "/visit/",
        "audioText": "Last December, my family visited the beautiful beaches of Santa Marta.",
        "example": "Last December, my family visited the beautiful beaches of Santa Marta.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-7",
        "term": "Study ➔ Studied (consonante + y)",
        "translation": "Si termina en consonante + y, cambia a -ied. Si es de 1 sílaba CVC, duplica la consonante final.",
        "ipa": "/study/",
        "audioText": "We planned the whole trip together and explored ancient stone forts.",
        "example": "We planned the whole trip together and explored ancient stone forts.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-6-b1",
        "prompt": "El año pasado nosotros visitamos las hermosas playas de Cartagena.",
        "answer": "Last year we visited the beautiful beaches of Cartagena",
        "tokens": [
          "Last",
          "year",
          "we",
          "visited",
          "the",
          "beautiful",
          "beaches",
          "of",
          "Cartagena",
          "stay",
          "expensive"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-6-b2",
        "prompt": "Nosotros no nos quedamos en un hotel caro.",
        "answer": "We did not stay at an expensive hotel",
        "tokens": [
          "We",
          "did",
          "not",
          "stay",
          "at",
          "an",
          "expensive",
          "hotel",
          "Last",
          "year"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-6-b3",
        "prompt": "¿Disfrutaste tú la comida típica durante tus vacaciones?",
        "answer": "Did you enjoy the local food during your vacation",
        "tokens": [
          "Did",
          "you",
          "enjoy",
          "the",
          "local",
          "food",
          "during",
          "your",
          "vacation",
          "Last",
          "year"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-6-e1",
        "audioText": "Last summer we camped near the lake.",
        "correctAnswer": "Last summer we camped near the lake.",
        "options": [
          "Last summer we camped near the lake.",
          "At midnight it started to rain heavily, so we packed our sleeping bags and slept inside the car!",
          "Last year we visited the beautiful beaches of Cartagena."
        ]
      },
      {
        "id": "3-6-e2",
        "audioText": "At midnight it started to rain heavily, so we packed our sleeping bags and slept inside the car!",
        "correctAnswer": "At midnight it started to rain heavily, so we packed our sleeping bags and slept inside the car!",
        "options": [
          "Last year we visited the beautiful beaches of Cartagena.",
          "At midnight it started to rain heavily, so we packed our sleeping bags and slept inside the car!",
          "We did not stay at an expensive hotel."
        ]
      },
      {
        "id": "3-6-e3",
        "audioText": "Last year we visited the beautiful beaches of Cartagena.",
        "correctAnswer": "Last year we visited the beautiful beaches of Cartagena.",
        "options": [
          "Did you enjoy the local food during your vacation?",
          "We did not stay at an expensive hotel.",
          "Last year we visited the beautiful beaches of Cartagena."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-7",
    "badgeName": "Biographies of Artists, Athletes & Creators",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-7-1",
        "term": "Write",
        "translation": "Escribir",
        "ipa": "/raɪt - roʊt/",
        "audioText": "Write. He wrote master novels in Spanish.",
        "example": "He wrote master novels in Spanish.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-2",
        "term": "Win",
        "translation": "Ganar",
        "ipa": "/wɪn - wʌn/",
        "audioText": "Win. She won three Grammy awards.",
        "example": "She won three Grammy awards.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-3",
        "term": "Become",
        "translation": "Convertirse en / Llegar a ser",
        "ipa": "/bɪˈkʌm - bɪˈkeɪm/",
        "audioText": "Become. He became an Olympic champion.",
        "example": "He became an Olympic champion.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-4",
        "term": "Build",
        "translation": "Construir / Crear",
        "ipa": "/bɪld - bɪlt/",
        "audioText": "Build. She built schools for poor kids.",
        "example": "She built schools for poor kids.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-5",
        "term": "Give",
        "translation": "Dar / Brindar",
        "ipa": "/ɡɪv - ɡeɪv/",
        "audioText": "Give. They gave inspiring speeches to youth.",
        "example": "They gave inspiring speeches to youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-6",
        "term": "Write ➔ Wrote",
        "translation": "Usa estas formas para relatar inventos, premios y obras artísticas.",
        "ipa": "/write/",
        "audioText": "Gabriel Garcia Marquez wrote 'One Hundred Years of Solitude' and won the Nobel Prize.",
        "example": "Gabriel Garcia Marquez wrote 'One Hundred Years of Solitude' and won the Nobel Prize.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-7-7",
        "term": "Be born ➔ Was born",
        "translation": "Usa 'was born' (nació) y 'grew up' (creció) para los primeros años de vida.",
        "ipa": "/be/",
        "audioText": "Luis Diaz was born in Barrancas, La Guajira, and grew up playing barefoot.",
        "example": "Luis Diaz was born in Barrancas, La Guajira, and grew up playing barefoot.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-7-b1",
        "prompt": "Él nació en Colombia y ganó importantes trofeos internacionales.",
        "answer": "He was born in Colombia and won major international trophies",
        "tokens": [
          "He",
          "was",
          "born",
          "in",
          "Colombia",
          "and",
          "won",
          "major",
          "international",
          "trophies",
          "give",
          "when"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-7-b2",
        "prompt": "Ella no se rindió cuando enfrentó momentos difíciles.",
        "answer": "She did not give up when she faced difficult moments",
        "tokens": [
          "She",
          "did",
          "not",
          "give",
          "up",
          "when",
          "she",
          "faced",
          "difficult",
          "moments",
          "born",
          "Colombia"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-7-b3",
        "prompt": "¿Qué canciones famosas escribió ella durante su carrera?",
        "answer": "What famous songs did she write during her career",
        "tokens": [
          "What",
          "famous",
          "songs",
          "did",
          "she",
          "write",
          "during",
          "her",
          "career",
          "born",
          "Colombia"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-7-e1",
        "audioText": "Shakira wrote her first poem at age four and composed her first song at age eight.",
        "correctAnswer": "Shakira wrote her first poem at age four and composed her first song at age eight.",
        "options": [
          "Shakira wrote her first poem at age four and composed her first song at age eight.",
          "Later, she moved to the United States and became a global music icon.",
          "He was born in Colombia and won major international trophies."
        ]
      },
      {
        "id": "3-7-e2",
        "audioText": "Later, she moved to the United States and became a global music icon.",
        "correctAnswer": "Later, she moved to the United States and became a global music icon.",
        "options": [
          "He was born in Colombia and won major international trophies.",
          "Later, she moved to the United States and became a global music icon.",
          "She did not give up when she faced difficult moments."
        ]
      },
      {
        "id": "3-7-e3",
        "audioText": "He was born in Colombia and won major international trophies.",
        "correctAnswer": "He was born in Colombia and won major international trophies.",
        "options": [
          "What famous songs did she write during her career?",
          "She did not give up when she faced difficult moments.",
          "He was born in Colombia and won major international trophies."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-8",
    "badgeName": "Storytelling Connectors",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-8-1",
        "term": "Hear",
        "translation": "Escuchar / Oír",
        "ipa": "/hɪr - hɜːrd/",
        "audioText": "Hear. We heard strange noises in the yard.",
        "example": "We heard strange noises in the yard.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-2",
        "term": "See",
        "translation": "Ver",
        "ipa": "/siː - sɔː/",
        "audioText": "See. Suddenly, she saw a glowing shadow.",
        "example": "Suddenly, she saw a glowing shadow.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-3",
        "term": "Run",
        "translation": "Correr",
        "ipa": "/rʌn - ræn/",
        "audioText": "Run. We ran as fast as possible to the house.",
        "example": "We ran as fast as possible to the house.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-4",
        "term": "Find",
        "translation": "Encontrar",
        "ipa": "/faɪnd - faʊnd/",
        "audioText": "Find. Fortunately, we found the missing keys.",
        "example": "Fortunately, we found the missing keys.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-5",
        "term": "Laugh",
        "translation": "Reír / Reírse",
        "ipa": "/læf - læft/",
        "audioText": "Laugh. In the end, everyone laughed out loud.",
        "example": "In the end, everyone laughed out loud.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-6",
        "term": "First (primero)",
        "translation": "Establece el escenario y quiénes estaban en el lugar.",
        "ipa": "/first/",
        "audioText": "It all started when my brother and I walked through the quiet forest.",
        "example": "It all started when my brother and I walked through the quiet forest.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-8-7",
        "term": "Then (luego)",
        "translation": "Mantiene la acción avanzando paso a paso.",
        "ipa": "/then/",
        "audioText": "Meanwhile, the storm clouds gathered quickly above the mountains.",
        "example": "Meanwhile, the storm clouds gathered quickly above the mountains.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-8-b1",
        "prompt": "Primero nosotros escuchamos un fuerte ruido afuera de la ventana.",
        "answer": "First we heard a loud noise outside the window",
        "tokens": [
          "First",
          "we",
          "heard",
          "a",
          "loud",
          "noise",
          "outside",
          "the",
          "window",
          "Fortunately",
          "there"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-8-b2",
        "prompt": "Afortunadamente no había ningún monstruo en la oscuridad.",
        "answer": "Fortunately there was no monster in the dark",
        "tokens": [
          "Fortunately",
          "there",
          "was",
          "no",
          "monster",
          "in",
          "the",
          "dark",
          "First",
          "heard"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-8-b3",
        "prompt": "¿Qué pasó de repente cuando abriste la puerta?",
        "answer": "What happened suddenly when you opened the door",
        "tokens": [
          "What",
          "happened",
          "suddenly",
          "when",
          "you",
          "opened",
          "the",
          "door",
          "First",
          "heard"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-8-e1",
        "audioText": "I thought I lost my backpack at the mall.",
        "correctAnswer": "I thought I lost my backpack at the mall.",
        "options": [
          "I thought I lost my backpack at the mall.",
          "Suddenly, my brother called me on my phone.",
          "Fortunately, he had my backpack in his car the whole time!"
        ]
      },
      {
        "id": "3-8-e2",
        "audioText": "Suddenly, my brother called me on my phone.",
        "correctAnswer": "Suddenly, my brother called me on my phone.",
        "options": [
          "Fortunately, he had my backpack in his car the whole time!",
          "Suddenly, my brother called me on my phone.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "3-8-e3",
        "audioText": "Fortunately, he had my backpack in his car the whole time!",
        "correctAnswer": "Fortunately, he had my backpack in his car the whole time!",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Fortunately, he had my backpack in his car the whole time! (Alternative)",
          "Fortunately, he had my backpack in his car the whole time!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-9",
    "badgeName": "Everyday Problems & How to Explain Them",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-9-1",
        "term": "Borrow",
        "translation": "Pedir prestado",
        "ipa": "/ˈbɑːroʊ/",
        "audioText": "Borrow. Can I borrow your pencil sharpener?",
        "example": "Can I borrow your pencil sharpener?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-2",
        "term": "Lend",
        "translation": "Prestar (a alguien)",
        "ipa": "/lend/",
        "audioText": "Lend. She lent me her portable charger.",
        "example": "She lent me her portable charger.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-3",
        "term": "Fix",
        "translation": "Arreglar / Reparar",
        "ipa": "/fɪks/",
        "audioText": "Fix. He fixed the broken headphone cable.",
        "example": "He fixed the broken headphone cable.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-4",
        "term": "Lose",
        "translation": "Perder",
        "ipa": "/luːz/",
        "audioText": "Lose. I lost my house keys in the park.",
        "example": "I lost my house keys in the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-5",
        "term": "Forget",
        "translation": "Olvidar",
        "ipa": "/fərˈɡet/",
        "audioText": "Forget. Don't forget your student ID card.",
        "example": "Don't forget your student ID card.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-6",
        "term": "My phone died",
        "translation": "Explica primero el problema antes de pedir el favor.",
        "ipa": "/my/",
        "audioText": "My phone battery died and I need to call my parents urgently.",
        "example": "My phone battery died and I need to call my parents urgently.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-9-7",
        "term": "Could you please help me?",
        "translation": "Usa 'Could you please + verbo base' para peticiones de máxima cortesía.",
        "ipa": "/could/",
        "audioText": "Could you please lend me your portable charger for ten minutes?",
        "example": "Could you please lend me your portable charger for ten minutes?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-9-b1",
        "prompt": "La batería de mi celular murió y necesito llamar a mi mamá.",
        "answer": "My phone battery died and I need to call my mom",
        "tokens": [
          "My",
          "phone",
          "battery",
          "died",
          "and",
          "I",
          "need",
          "to",
          "call",
          "my",
          "mom",
          "Could",
          "please"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-9-b2",
        "prompt": "¿Podrías por favor prestarme tu cargador portátil diez minutos?",
        "answer": "Could you please lend me your portable charger for ten minutes",
        "tokens": [
          "Could",
          "you",
          "please",
          "lend",
          "me",
          "your",
          "portable",
          "charger",
          "for",
          "ten",
          "minutes",
          "phone",
          "battery"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-9-b3",
        "prompt": "No te preocupes, no es un problema grave.",
        "answer": "Do not worry it is not a serious problem",
        "tokens": [
          "Do",
          "not",
          "worry",
          "it",
          "is",
          "a",
          "serious",
          "problem",
          "phone",
          "battery"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-9-e1",
        "audioText": "Excuse me teacher, my laptop screen froze completely during the presentation.",
        "correctAnswer": "Excuse me teacher, my laptop screen froze completely during the presentation.",
        "options": [
          "Excuse me teacher, my laptop screen froze completely during the presentation.",
          "Could you please give me two minutes to restart it?",
          "My phone battery died and I need to call my mom."
        ]
      },
      {
        "id": "3-9-e2",
        "audioText": "Could you please give me two minutes to restart it?",
        "correctAnswer": "Could you please give me two minutes to restart it?",
        "options": [
          "My phone battery died and I need to call my mom.",
          "Could you please give me two minutes to restart it?",
          "Could you please lend me your portable charger for ten minutes?"
        ]
      },
      {
        "id": "3-9-e3",
        "audioText": "My phone battery died and I need to call my mom.",
        "correctAnswer": "My phone battery died and I need to call my mom.",
        "options": [
          "Do not worry, it is not a serious problem.",
          "Could you please lend me your portable charger for ten minutes?",
          "My phone battery died and I need to call my mom."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-10",
    "badgeName": "Irregular Verbs & -ed Endings (Video Project)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-10-1",
        "term": "Go",
        "translation": "Ir",
        "ipa": "/ɡoʊ - went/",
        "audioText": "Go. We went on an unforgettable trip.",
        "example": "We went on an unforgettable trip.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-2",
        "term": "See",
        "translation": "Ver",
        "ipa": "/siː - sɔː/",
        "audioText": "See. I saw a shooting star in the night sky.",
        "example": "I saw a shooting star in the night sky.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-3",
        "term": "Take",
        "translation": "Tomar / Llevar",
        "ipa": "/teɪk - tʊk/",
        "audioText": "Take. She took hundreds of artistic photos.",
        "example": "She took hundreds of artistic photos.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-4",
        "term": "Buy",
        "translation": "Comprar",
        "ipa": "/baɪ - bɔːt/",
        "audioText": "Buy. He bought gifts for his whole family.",
        "example": "He bought gifts for his whole family.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-5",
        "term": "Speak",
        "translation": "Hablar",
        "ipa": "/spiːk - spoʊk/",
        "audioText": "Speak. They spoke English with foreign tourists.",
        "example": "They spoke English with foreign tourists.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-6",
        "term": "Visit ➔ Visited /vɪzɪtɪd/",
        "translation": "Es el ÚNICO caso donde se añade una sílaba extra con sonido 'id'.",
        "ipa": "/visit/",
        "audioText": "We wanted to explore and decided to visit the local museum.",
        "example": "We wanted to explore and decided to visit the local museum.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-10-7",
        "term": "Walk ➔ Walked /wɔːkt/",
        "translation": "No hay vibración en las cuerdas vocales; la terminación -ed explota como una /t/ seca.",
        "ipa": "/walk/",
        "audioText": "I walked home, helped my brother, and watched our favorite anime.",
        "example": "I walked home, helped my brother, and watched our favorite anime.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-10-b1",
        "prompt": "Yo practiqué todos los días y hablé inglés con confianza.",
        "answer": "I practiced every day and spoke English with confidence",
        "tokens": [
          "I",
          "practiced",
          "every",
          "day",
          "and",
          "spoke",
          "English",
          "with",
          "confidence",
          "give",
          "difficult"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-10-b2",
        "prompt": "Nosotros no nos rendimos ante los verbos difíciles.",
        "answer": "We did not give up on difficult verbs",
        "tokens": [
          "We",
          "did",
          "not",
          "give",
          "up",
          "on",
          "difficult",
          "verbs",
          "practiced",
          "every"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "3-10-b3",
        "prompt": "¿Qué logro importante alcanzaste tú en este nivel?",
        "answer": "What important achievement did you reach in this level",
        "tokens": [
          "What",
          "important",
          "achievement",
          "did",
          "you",
          "reach",
          "in",
          "this",
          "level",
          "practiced",
          "every"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-10-e1",
        "audioText": "Yesterday I walked to school, played soccer with my friends, and visited my grandparents.",
        "correctAnswer": "Yesterday I walked to school, played soccer with my friends, and visited my grandparents.",
        "options": [
          "Yesterday I walked to school, played soccer with my friends, and visited my grandparents.",
          "The verb visited ends with the id sound.",
          "I practiced every day and spoke English with confidence."
        ]
      },
      {
        "id": "3-10-e2",
        "audioText": "The verb visited ends with the id sound.",
        "correctAnswer": "The verb visited ends with the id sound.",
        "options": [
          "I practiced every day and spoke English with confidence.",
          "The verb visited ends with the id sound.",
          "We did not give up on difficult verbs."
        ]
      },
      {
        "id": "3-10-e3",
        "audioText": "I practiced every day and spoke English with confidence.",
        "correctAnswer": "I practiced every day and spoke English with confidence.",
        "options": [
          "What important achievement did you reach in this level?",
          "We did not give up on difficult verbs.",
          "I practiced every day and spoke English with confidence."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-1",
    "badgeName": "My Opinions & Perspectives",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-1-1",
        "term": "Think",
        "translation": "Pensar / Opinar",
        "ipa": "/θɪŋk - θɔːt/",
        "audioText": "Think. I thought deeply about your proposal. (A well-thought idea.)",
        "example": "I thought deeply about your proposal. (A well-thought idea.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-2",
        "term": "Speak",
        "translation": "Hablar / Expresar ideas",
        "ipa": "/spiːk - spoʊk - ˈspoʊkən/",
        "audioText": "Speak. She spoke with strong conviction. (Spoken clearly.)",
        "example": "She spoke with strong conviction. (Spoken clearly.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-3",
        "term": "Believe",
        "translation": "Creer / Considerar",
        "ipa": "/bɪˈliːv/",
        "audioText": "Believe. We believed in our team's potential.",
        "example": "We believed in our team's potential.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-4",
        "term": "Agree",
        "translation": "Estar de acuerdo / Coincidir",
        "ipa": "/əˈɡriː/",
        "audioText": "Agree. They agreed on the final schedule.",
        "example": "They agreed on the final schedule.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-5",
        "term": "Disagree",
        "translation": "Estar en desacuerdo / Discrepar",
        "ipa": "/ˌdɪsəˈɡriː/",
        "audioText": "Disagree. He disagreed respectfully during the debate.",
        "example": "He disagreed respectfully during the debate.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-6",
        "term": "In my opinion",
        "translation": "Coloca la frase al inicio seguida de coma (,) y tu argumento.",
        "ipa": "/in/",
        "audioText": "In my opinion, learning English opens amazing global job opportunities.",
        "example": "In my opinion, learning English opens amazing global job opportunities.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-1-7",
        "term": "I totally agree with you",
        "translation": "Usa estas frases cuando compartes 100% la idea de otra persona.",
        "ipa": "/i/",
        "audioText": "I totally agree with you because regular exercise improves mental health.",
        "example": "I totally agree with you because regular exercise improves mental health.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-1-b1",
        "prompt": "En mi opinión aprender inglés abre increíbles oportunidades globales.",
        "answer": "In my opinion learning English opens incredible global opportunities",
        "tokens": [
          "In",
          "my",
          "opinion",
          "learning",
          "English",
          "opens",
          "incredible",
          "global",
          "opportunities",
          "agree",
          "with"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-1-b2",
        "prompt": "Yo no estoy de acuerdo con prohibir los celulares en el colegio.",
        "answer": "I do not agree with banning smartphones at school",
        "tokens": [
          "I",
          "do",
          "not",
          "agree",
          "with",
          "banning",
          "smartphones",
          "at",
          "school",
          "opinion",
          "learning"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-1-b3",
        "prompt": "¿Cuál es tu opinión sobre el impacto de la inteligencia artificial?",
        "answer": "What is your opinion on the impact of artificial intelligence",
        "tokens": [
          "What",
          "is",
          "your",
          "opinion",
          "on",
          "the",
          "impact",
          "of",
          "artificial",
          "intelligence",
          "learning",
          "English"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-1-e1",
        "audioText": "From my perspective, practical oral presentations and team projects demonstrate real English fluency much better than traditional multiple-choice grammar exams.",
        "correctAnswer": "From my perspective, practical oral presentations and team projects demonstrate real English fluency much better than traditional multiple-choice grammar exams.",
        "options": [
          "From my perspective, practical oral presentations and team projects demonstrate real English fluency much better than traditional multiple-choice grammar exams.",
          "In my opinion learning English opens incredible global opportunities.",
          "I do not agree with banning smartphones at school."
        ]
      },
      {
        "id": "4-1-e2",
        "audioText": "In my opinion learning English opens incredible global opportunities.",
        "correctAnswer": "In my opinion learning English opens incredible global opportunities.",
        "options": [
          "I do not agree with banning smartphones at school.",
          "In my opinion learning English opens incredible global opportunities.",
          "What is your opinion on the impact of artificial intelligence?"
        ]
      },
      {
        "id": "4-1-e3",
        "audioText": "I do not agree with banning smartphones at school.",
        "correctAnswer": "I do not agree with banning smartphones at school.",
        "options": [
          "I do not agree with banning smartphones at evening.",
          "What is your opinion on the impact of artificial intelligence?",
          "I do not agree with banning smartphones at school."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-2",
    "badgeName": "Giving Good Advice",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-2-1",
        "term": "Take",
        "translation": "Tomar descansos / Adoptar hábitos",
        "ipa": "/teɪk - tʊk - ˈteɪkən/",
        "audioText": "Take. He took regular study breaks. (Breaks taken on time.)",
        "example": "He took regular study breaks. (Breaks taken on time.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-2",
        "term": "Give",
        "translation": "Dar / Ofrecer consejos",
        "ipa": "/ɡɪv - ɡeɪv - ˈɡɪvn/",
        "audioText": "Give. She gave thoughtful wellness advice. (Advice given kindly.)",
        "example": "She gave thoughtful wellness advice. (Advice given kindly.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-3",
        "term": "Advise",
        "translation": "Aconsejar / Recomendar",
        "ipa": "/ədˈvaɪz/",
        "audioText": "Advise. The counselor advised him to rest more.",
        "example": "The counselor advised him to rest more.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-4",
        "term": "Avoid",
        "translation": "Evitar",
        "ipa": "/əˈvɔɪd/",
        "audioText": "Avoid. We avoided screen time before sleeping.",
        "example": "We avoided screen time before sleeping.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-5",
        "term": "Try",
        "translation": "Probar / Intentar",
        "ipa": "/traɪ/",
        "audioText": "Try. They tried meditation to lower stress.",
        "example": "They tried meditation to lower stress.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-6",
        "term": "You should",
        "translation": "Usa 'should + verbo base' para aconsejar algo beneficioso.",
        "ipa": "/you/",
        "audioText": "You should drink a warm cup of herbal tea and turn off screens before bed.",
        "example": "You should drink a warm cup of herbal tea and turn off screens before bed.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-2-7",
        "term": "Why don't you try...?",
        "translation": "Forma fresca y juvenil de sugerir una solución.",
        "ipa": "/why/",
        "audioText": "Why don't you create a daily study schedule with 25-minute focus intervals?",
        "example": "Why don't you create a daily study schedule with 25-minute focus intervals?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-2-b1",
        "prompt": "Tú deberías apagar las pantallas media hora antes de dormir.",
        "answer": "You should turn off screens half an hour before sleeping",
        "tokens": [
          "You",
          "should",
          "turn",
          "off",
          "screens",
          "half",
          "an",
          "hour",
          "before",
          "sleeping",
          "leave",
          "homework"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-2-b2",
        "prompt": "Tú no deberías dejar todas las tareas para el domingo a medianoche.",
        "answer": "You should not leave all homework for Sunday midnight",
        "tokens": [
          "You",
          "should",
          "not",
          "leave",
          "all",
          "homework",
          "for",
          "Sunday",
          "midnight",
          "turn",
          "screens"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-2-b3",
        "prompt": "¿Qué debería hacer yo para superar el estrés de los exámenes?",
        "answer": "What should I do to overcome exam stress",
        "tokens": [
          "What",
          "should",
          "I",
          "do",
          "to",
          "overcome",
          "exam",
          "stress",
          "turn",
          "screens"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-2-e1",
        "audioText": "If you want to wake up with great energy, you should turn off your phone screen thirty minutes before sleeping and you shouldn't drink coffee after 5:00 PM.",
        "correctAnswer": "If you want to wake up with great energy, you should turn off your phone screen thirty minutes before sleeping and you shouldn't drink coffee after 5:00 PM.",
        "options": [
          "If you want to wake up with great energy, you should turn off your phone screen thirty minutes before sleeping and you shouldn't drink coffee after 5:00 PM.",
          "You should turn off screens half an hour before sleeping.",
          "You should not leave all homework for Sunday midnight."
        ]
      },
      {
        "id": "4-2-e2",
        "audioText": "You should turn off screens half an hour before sleeping.",
        "correctAnswer": "You should turn off screens half an hour before sleeping.",
        "options": [
          "You should not leave all homework for Sunday midnight.",
          "You should turn off screens half an hour before sleeping.",
          "What should I do to overcome exam stress?"
        ]
      },
      {
        "id": "4-2-e3",
        "audioText": "You should not leave all homework for Sunday midnight.",
        "correctAnswer": "You should not leave all homework for Sunday midnight.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What should I do to overcome exam stress?",
          "You should not leave all homework for Sunday midnight."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-3",
    "badgeName": "Conditions & Scientific Facts (Zero Conditional)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-3-1",
        "term": "Freeze",
        "translation": "Congelar / Congelarse",
        "ipa": "/friːz - froʊz - ˈfroʊzn/",
        "audioText": "Freeze. Water froze at zero degrees Celsius. (Frozen solid.)",
        "example": "Water froze at zero degrees Celsius. (Frozen solid.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-2",
        "term": "Melt",
        "translation": "Derretir / Derretirse",
        "ipa": "/melt/",
        "audioText": "Melt. The ice melted quickly in the warm sun.",
        "example": "The ice melted quickly in the warm sun.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-3",
        "term": "Boil",
        "translation": "Hervir",
        "ipa": "/bɔɪl/",
        "audioText": "Boil. Water boiled at 100 degrees Celsius.",
        "example": "Water boiled at 100 degrees Celsius.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-4",
        "term": "Mix",
        "translation": "Mezclar / Combinar",
        "ipa": "/mɪks/",
        "audioText": "Mix. We mixed yellow and blue to make green.",
        "example": "We mixed yellow and blue to make green.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-5",
        "term": "Dissolve",
        "translation": "Disolver / Disolverse",
        "ipa": "/dɪˈzɑːlv/",
        "audioText": "Dissolve. The salt dissolved in warm water.",
        "example": "The salt dissolved in warm water.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-6",
        "term": "If you heat water, it boils",
        "translation": "Ambos verbos están en Presente Simple porque es una ley automática e invariable.",
        "ipa": "/if/",
        "audioText": "If you heat water to 100 degrees Celsius, it boils and evaporates.",
        "example": "If you heat water to 100 degrees Celsius, it boils and evaporates.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-3-7",
        "term": "Ice melts if you leave it in the sun",
        "translation": "Cuando el resultado va primero y la condición 'if' va de segunda, NO se usa coma.",
        "ipa": "/ice/",
        "audioText": "Ice cream melts quickly if you leave it under direct sunlight.",
        "example": "Ice cream melts quickly if you leave it under direct sunlight.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-3-b1",
        "prompt": "Si tú calientas agua a cien grados hierve y se evapora.",
        "answer": "If you heat water to one hundred degrees it boils and evaporates",
        "tokens": [
          "If",
          "you",
          "heat",
          "water",
          "to",
          "one",
          "hundred",
          "degrees",
          "it",
          "boils",
          "and",
          "evaporates",
          "plants",
          "receive"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-3-b2",
        "prompt": "Si las plantas no reciben agua ellas no pueden sobrevivir.",
        "answer": "If plants do not receive water they cannot survive",
        "tokens": [
          "If",
          "plants",
          "do",
          "not",
          "receive",
          "water",
          "they",
          "cannot",
          "survive",
          "heat",
          "hundred"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-3-b3",
        "prompt": "¿Qué pasa si tú mezclas pintura azul con amarillo?",
        "answer": "What happens if you mix blue paint with yellow",
        "tokens": [
          "What",
          "happens",
          "if",
          "you",
          "mix",
          "blue",
          "paint",
          "with",
          "yellow",
          "heat",
          "water"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-3-e1",
        "audioText": "In physics and chemistry, if the temperature of liquid water drops below zero degrees Celsius, it freezes and transforms into solid ice.",
        "correctAnswer": "In physics and chemistry, if the temperature of liquid water drops below zero degrees Celsius, it freezes and transforms into solid ice.",
        "options": [
          "In physics and chemistry, if the temperature of liquid water drops below zero degrees Celsius, it freezes and transforms into solid ice.",
          "If you heat water to one hundred degrees it boils and evaporates.",
          "If plants do not receive water they cannot survive."
        ]
      },
      {
        "id": "4-3-e2",
        "audioText": "If you heat water to one hundred degrees it boils and evaporates.",
        "correctAnswer": "If you heat water to one hundred degrees it boils and evaporates.",
        "options": [
          "If plants do not receive water they cannot survive.",
          "If you heat water to one hundred degrees it boils and evaporates.",
          "What happens if you mix blue paint with yellow?"
        ]
      },
      {
        "id": "4-3-e3",
        "audioText": "If plants do not receive water they cannot survive.",
        "correctAnswer": "If plants do not receive water they cannot survive.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What happens if you mix blue paint with yellow?",
          "If plants do not receive water they cannot survive."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-4",
    "badgeName": "Messaging, Texting & Online Communication",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-4-1",
        "term": "Send",
        "translation": "Enviar mensajes / Transmitir",
        "ipa": "/send - sent/",
        "audioText": "Send. I sent the urgent group invitation. (Message sent.)",
        "example": "I sent the urgent group invitation. (Message sent.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-2",
        "term": "Spend",
        "translation": "Pasar tiempo / Invertir horas",
        "ipa": "/spend - spent/",
        "audioText": "Spend. He spent two hours practicing code. (Time well spent.)",
        "example": "He spent two hours practicing code. (Time well spent.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-3",
        "term": "Text",
        "translation": "Mensajear / Chatear",
        "ipa": "/tekst/",
        "audioText": "Text. She texted her classmates about homework.",
        "example": "She texted her classmates about homework.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-4",
        "term": "Share",
        "translation": "Compartir contenido",
        "ipa": "/ʃer/",
        "audioText": "Share. We shared the tutorial link with friends.",
        "example": "We shared the tutorial link with friends.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-5",
        "term": "Download",
        "translation": "Descargar archivos",
        "ipa": "/ˌdaʊnˈloʊd/",
        "audioText": "Download. They downloaded the offline study guide.",
        "example": "They downloaded the offline study guide.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-6",
        "term": "TBH = To be honest",
        "translation": "Úsalos al inicio o final de una frase para expresar sinceridad.",
        "ipa": "/tbh/",
        "audioText": "TBH, the new battle royale update is way better than the old season.",
        "example": "TBH, the new battle royale update is way better than the old season.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-7",
        "term": "BTW = By the way",
        "translation": "Úsalos para avisar cambios de tema o pausas momentáneas.",
        "ipa": "/btw/",
        "audioText": "BRB guys, my dog is barking at the door! I will be back in two minutes.",
        "example": "BRB guys, my dog is barking at the door! I will be back in two minutes.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-4-b1",
        "prompt": "Para ser sincero esa nueva actualización del juego es increíble.",
        "answer": "To be honest that new game update is incredible",
        "tokens": [
          "To",
          "be",
          "honest",
          "that",
          "new",
          "game",
          "update",
          "is",
          "incredible",
          "Please",
          "leave"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-4-b2",
        "prompt": "Por favor no me dejes en visto cuando organicemos el proyecto.",
        "answer": "Please do not leave me on read when we organize the project",
        "tokens": [
          "Please",
          "do",
          "not",
          "leave",
          "me",
          "on",
          "read",
          "when",
          "we",
          "organize",
          "the",
          "project",
          "honest",
          "that"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-4-b3",
        "prompt": "¿Estás libre justo ahora para entrar a la llamada de Discord?",
        "answer": "Are you free right now to hop on the Discord call",
        "tokens": [
          "Are",
          "you",
          "free",
          "right",
          "now",
          "to",
          "hop",
          "on",
          "the",
          "Discord",
          "call",
          "honest",
          "that"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-4-e1",
        "audioText": "I have terrible lag right now.",
        "correctAnswer": "I have terrible lag right now.",
        "options": [
          "I have terrible lag right now.",
          "BRB in five minutes, I will restart my wifi router so we can play the tournament without disconnection.",
          "To be honest that new game update is incredible."
        ]
      },
      {
        "id": "4-4-e2",
        "audioText": "BRB in five minutes, I will restart my wifi router so we can play the tournament without disconnection.",
        "correctAnswer": "BRB in five minutes, I will restart my wifi router so we can play the tournament without disconnection.",
        "options": [
          "To be honest that new game update is incredible.",
          "BRB in five minutes, I will restart my wifi router so we can play the tournament without disconnection.",
          "Please do not leave me on read when we organize the project."
        ]
      },
      {
        "id": "4-4-e3",
        "audioText": "To be honest that new game update is incredible.",
        "correctAnswer": "To be honest that new game update is incredible.",
        "options": [
          "Are you free right now to hop on the Discord call?",
          "Please do not leave me on read when we organize the project.",
          "To be honest that new game update is incredible."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-5",
    "badgeName": "Future Possibilities & Consequences (First Conditional)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-5-1",
        "term": "Win",
        "translation": "Ganar becas / Triunfar",
        "ipa": "/wɪn - wʌn/",
        "audioText": "Win. She won the international science contest. (A hard-won prize.)",
        "example": "She won the international science contest. (A hard-won prize.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-2",
        "term": "Become",
        "translation": "Convertirse en / Llegar a ser",
        "ipa": "/bɪˈkʌm - bɪˈkeɪm - bɪˈkʌm/",
        "audioText": "Become. He became an outstanding programmer. (Become fluent.)",
        "example": "He became an outstanding programmer. (Become fluent.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-3",
        "term": "Achieve",
        "translation": "Alcanzar / Lograr metas",
        "ipa": "/əˈtʃiːv/",
        "audioText": "Achieve. We achieved our English learning goals.",
        "example": "We achieved our English learning goals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-4",
        "term": "Pass",
        "translation": "Aprobar exámenes",
        "ipa": "/pæs/",
        "audioText": "Pass. They passed the B1 certification exam.",
        "example": "They passed the B1 certification exam.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-5",
        "term": "Travel",
        "translation": "Viajar al exterior",
        "ipa": "/ˈtrævl/",
        "audioText": "Travel. She traveled abroad on an exchange program.",
        "example": "She traveled abroad on an exchange program.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-6",
        "term": "If I study, I will pass",
        "translation": "Condición en Presente Simple, consecuencia con WILL + Verbo Base.",
        "ipa": "/if/",
        "audioText": "If I practice English every day, I will speak with great fluency and confidence.",
        "example": "If I practice English every day, I will speak with great fluency and confidence.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-5-7",
        "term": "I will travel to Canada if I get the student scholarship",
        "translation": "Cuando el resultado con 'will' va primero, NO se coloca coma.",
        "ipa": "/i/",
        "audioText": "We will order artisan pizza if my brother finishes his homework early.",
        "example": "We will order artisan pizza if my brother finishes his homework early.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-5-b1",
        "prompt": "Si yo practico todos los días yo hablaré inglés con confianza.",
        "answer": "If I practice every day I will speak English with confidence",
        "tokens": [
          "If",
          "I",
          "practice",
          "every",
          "day",
          "will",
          "speak",
          "English",
          "with",
          "confidence",
          "sleep",
          "well"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-5-b2",
        "prompt": "Si tú no duermes bien tú no tendrás energía para el partido.",
        "answer": "If you do not sleep well you will not have energy for the match",
        "tokens": [
          "If",
          "you",
          "do",
          "not",
          "sleep",
          "well",
          "will",
          "have",
          "energy",
          "for",
          "the",
          "match",
          "practice",
          "every"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-5-b3",
        "prompt": "¿Qué harás tú si ganas la beca de estudios internacionales?",
        "answer": "What will you do if you win the international scholarship",
        "tokens": [
          "What",
          "will",
          "you",
          "do",
          "if",
          "win",
          "the",
          "international",
          "scholarship",
          "practice",
          "every"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-5-e1",
        "audioText": "Listen team: If we train with maximum discipline and support each other on the field, we will lift the championship trophy on Saturday!",
        "correctAnswer": "Listen team: If we train with maximum discipline and support each other on the field, we will lift the championship trophy on Saturday!",
        "options": [
          "Listen team: If we train with maximum discipline and support each other on the field, we will lift the championship trophy on Saturday!",
          "If I practice every day I will speak English with confidence.",
          "If you do not sleep well you will not have energy for the match."
        ]
      },
      {
        "id": "4-5-e2",
        "audioText": "If I practice every day I will speak English with confidence.",
        "correctAnswer": "If I practice every day I will speak English with confidence.",
        "options": [
          "If you do not sleep well you will not have energy for the match.",
          "If I practice every day I will speak English with confidence.",
          "What will you do if you win the international scholarship?"
        ]
      },
      {
        "id": "4-5-e3",
        "audioText": "If you do not sleep well you will not have energy for the match.",
        "correctAnswer": "If you do not sleep well you will not have energy for the match.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What will you do if you win the international scholarship?",
          "If you do not sleep well you will not have energy for the match."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-6",
    "badgeName": "Comparatives & Superlatives (Tech, Movies & Sports)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-6-1",
        "term": "Choose",
        "translation": "Elegir / Escoger",
        "ipa": "/tʃuːz - tʃoʊz - ˈtʃoʊzn/",
        "audioText": "Choose. She chose the best wireless headphones. (The chosen device.)",
        "example": "She chose the best wireless headphones. (The chosen device.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-2",
        "term": "Buy",
        "translation": "Comprar / Adquirir",
        "ipa": "/baɪ - bɔːt/",
        "audioText": "Buy. He bought the fastest smartphone. (Bought online.)",
        "example": "He bought the fastest smartphone. (Bought online.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-3",
        "term": "Compare",
        "translation": "Comparar",
        "ipa": "/kəmˈper/",
        "audioText": "Compare. We compared both gaming consoles.",
        "example": "We compared both gaming consoles.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-4",
        "term": "Prefer",
        "translation": "Preferir",
        "ipa": "/prɪˈfɜːr/",
        "audioText": "Prefer. I prefer PC gaming over consoles.",
        "example": "I prefer PC gaming over consoles.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-5",
        "term": "Outperform",
        "translation": "Superar en rendimiento",
        "ipa": "/ˌaʊtpərˈfɔːrm/",
        "audioText": "Outperform. The new chip outperformed all rivals.",
        "example": "The new chip outperformed all rivals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-6",
        "term": "Fast ➔ faster than",
        "translation": "Agrega -er y la palabra 'than' para comparar dos elementos.",
        "ipa": "/fast/",
        "audioText": "Fiber-optic internet is much faster than standard mobile data connection.",
        "example": "Fiber-optic internet is much faster than standard mobile data connection.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-6-7",
        "term": "Expensive ➔ more expensive",
        "translation": "Adjetivos de 2 o más sílabas no cambian de forma; llevan 'more' adelante.",
        "ipa": "/expensive/",
        "audioText": "High-end gaming laptops are more expensive than basic desktop computers.",
        "example": "High-end gaming laptops are more expensive than basic desktop computers.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-6-b1",
        "prompt": "El internet de fibra óptica es mucho más rápido que los datos móviles.",
        "answer": "Fiber optic internet is much faster than mobile data",
        "tokens": [
          "Fiber",
          "optic",
          "internet",
          "is",
          "much",
          "faster",
          "than",
          "mobile",
          "data",
          "This",
          "movie"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-6-b2",
        "prompt": "Esta película no es tan emocionante como la primera parte.",
        "answer": "This movie is not as exciting as the first part",
        "tokens": [
          "This",
          "movie",
          "is",
          "not",
          "as",
          "exciting",
          "the",
          "first",
          "part",
          "Fiber",
          "optic"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-6-b3",
        "prompt": "¿Cuál es el videojuego más popular del año en todo el mundo?",
        "answer": "What is the most popular video game of the year in the whole world",
        "tokens": [
          "What",
          "is",
          "the",
          "most",
          "popular",
          "video",
          "game",
          "of",
          "year",
          "in",
          "whole",
          "world",
          "Fiber",
          "optic"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-6-e1",
        "audioText": "After testing both models for two weeks, the Pro Edition is clearly the most durable smartphone with the longest battery life on the market.",
        "correctAnswer": "After testing both models for two weeks, the Pro Edition is clearly the most durable smartphone with the longest battery life on the market.",
        "options": [
          "After testing both models for two weeks, the Pro Edition is clearly the most durable smartphone with the longest battery life on the market.",
          "Fiber optic internet is much faster than mobile data.",
          "This movie is not as exciting as the first part."
        ]
      },
      {
        "id": "4-6-e2",
        "audioText": "Fiber optic internet is much faster than mobile data.",
        "correctAnswer": "Fiber optic internet is much faster than mobile data.",
        "options": [
          "This movie is not as exciting as the first part.",
          "Fiber optic internet is much faster than mobile data.",
          "What is the most popular video game of the year in the whole world?"
        ]
      },
      {
        "id": "4-6-e3",
        "audioText": "This movie is not as exciting as the first part.",
        "correctAnswer": "This movie is not as exciting as the first part.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What is the most popular video game of the year in the whole world?",
          "This movie is not as exciting as the first part."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-7",
    "badgeName": "Too & Enough",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-7-1",
        "term": "Spend",
        "translation": "Gastar dinero / Pasar tiempo",
        "ipa": "/spend - spent/",
        "audioText": "Spend. I spent too much money on games. (Money spent.)",
        "example": "I spent too much money on games. (Money spent.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-2",
        "term": "Lose",
        "translation": "Perder datos / Perder archivos",
        "ipa": "/luːz - lɔːst/",
        "audioText": "Lose. He lost his unsaved project. (A lost file.)",
        "example": "He lost his unsaved project. (A lost file.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-3",
        "term": "Fix",
        "translation": "Arreglar / Reparar",
        "ipa": "/fɪks/",
        "audioText": "Fix. We fixed the audio problem quickly.",
        "example": "We fixed the audio problem quickly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-4",
        "term": "Delete",
        "translation": "Eliminar / Borrar",
        "ipa": "/dɪˈliːt/",
        "audioText": "Delete. Delete unused apps to free space.",
        "example": "Delete unused apps to free space.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-5",
        "term": "Charge",
        "translation": "Cargar batería",
        "ipa": "/tʃɑːrdʒ/",
        "audioText": "Charge. Charge your device before the trip.",
        "example": "Charge your device before the trip.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-6",
        "term": "Too expensive",
        "translation": "Indica que algo supera el límite aceptable o deseado.",
        "ipa": "/too/",
        "audioText": "This laptop is too expensive to buy with my current savings.",
        "example": "This laptop is too expensive to buy with my current savings.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-7-7",
        "term": "Fast enough",
        "translation": "'Enough' se coloca DESPUÉS del adjetivo.",
        "ipa": "/fast/",
        "audioText": "Our internet connection is fast enough to stream video in 4K resolution.",
        "example": "Our internet connection is fast enough to stream video in 4K resolution.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-7-b1",
        "prompt": "Nuestra conexión de internet es suficientemente rápida para transmitir video.",
        "answer": "Our internet connection is fast enough to stream video",
        "tokens": [
          "Our",
          "internet",
          "connection",
          "is",
          "fast",
          "enough",
          "to",
          "stream",
          "video",
          "This",
          "smartphone"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-7-b2",
        "prompt": "Este celular es demasiado costoso para comprarlo con mis ahorros.",
        "answer": "This smartphone is too expensive to buy with my savings",
        "tokens": [
          "This",
          "smartphone",
          "is",
          "too",
          "expensive",
          "to",
          "buy",
          "with",
          "my",
          "savings",
          "internet",
          "connection"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-7-b3",
        "prompt": "¿Tenemos nosotros suficiente tiempo para terminar la presentación?",
        "answer": "Do we have enough time to finish the presentation",
        "tokens": [
          "Do",
          "we",
          "have",
          "enough",
          "time",
          "to",
          "finish",
          "the",
          "presentation",
          "internet",
          "connection"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-7-e1",
        "audioText": "Your tablet cannot download this 4K video file because you do not have enough storage space on your device.",
        "correctAnswer": "Your tablet cannot download this 4K video file because you do not have enough storage space on your device.",
        "options": [
          "Your tablet cannot download this 4K video file because you do not have enough storage space on your device.",
          "Please delete five gigabytes of old photos first.",
          "Our internet connection is fast enough to stream video."
        ]
      },
      {
        "id": "4-7-e2",
        "audioText": "Please delete five gigabytes of old photos first.",
        "correctAnswer": "Please delete five gigabytes of old photos first.",
        "options": [
          "Our internet connection is fast enough to stream video.",
          "Please delete five gigabytes of old photos first.",
          "This smartphone is too expensive to buy with my savings."
        ]
      },
      {
        "id": "4-7-e3",
        "audioText": "Our internet connection is fast enough to stream video.",
        "correctAnswer": "Our internet connection is fast enough to stream video.",
        "options": [
          "Do we have enough time to finish the presentation?",
          "This smartphone is too expensive to buy with my savings.",
          "Our internet connection is fast enough to stream video."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-8",
    "badgeName": "Giving Advice to Friends (Should, Shouldn't & Ought to)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-8-1",
        "term": "Forgive",
        "translation": "Perdonar",
        "ipa": "/fərˈɡɪv - fərˈɡeɪv - fərˈɡɪvn/",
        "audioText": "Forgive. She forgave her friend sincerely. (Forgiven completely.)",
        "example": "She forgave her friend sincerely. (Forgiven completely.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-2",
        "term": "Speak",
        "translation": "Hablar / Expresarse con honestidad",
        "ipa": "/spiːk - spoʊk - ˈspoʊkən/",
        "audioText": "Speak. We spoke honestly about the issue. (Spoken words.)",
        "example": "We spoke honestly about the issue. (Spoken words.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-3",
        "term": "Apologize",
        "translation": "Disculparse / Pedir perdón",
        "ipa": "/əˈpɑːlədʒaɪz/",
        "audioText": "Apologize. He apologized for being late.",
        "example": "He apologized for being late.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-4",
        "term": "Trust",
        "translation": "Confiar en",
        "ipa": "/trʌst/",
        "audioText": "Trust. I trust my best friends completely.",
        "example": "I trust my best friends completely.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-5",
        "term": "Support",
        "translation": "Apoyar / Respaldar",
        "ipa": "/səˈpɔːrt/",
        "audioText": "Support. We supported each other during finals.",
        "example": "We supported each other during finals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-6",
        "term": "You ought to apologize",
        "translation": "'Ought to' es sinónimo de should pero con peso ético o de lealtad.",
        "ipa": "/you/",
        "audioText": "You ought to apologize sincerely and explain that it was an honest mistake.",
        "example": "You ought to apologize sincerely and explain that it was an honest mistake.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-8-7",
        "term": "You'd better study",
        "translation": "Indica urgencia o una consecuencia negativa si no se actúa ya.",
        "ipa": "/youd/",
        "audioText": "You had better talk to the teacher today before she enters the final grades.",
        "example": "You had better talk to the teacher today before she enters the final grades.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-8-b1",
        "prompt": "Tú deberías disculparte sinceramente para aclarar las cosas.",
        "answer": "You ought to apologize sincerely to clear the air",
        "tokens": [
          "You",
          "ought",
          "to",
          "apologize",
          "sincerely",
          "clear",
          "the",
          "air",
          "better",
          "spread"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-8-b2",
        "prompt": "Más vale que no difundas rumores sobre tus compañeros.",
        "answer": "You had better not spread rumors about your classmates",
        "tokens": [
          "You",
          "had",
          "better",
          "not",
          "spread",
          "rumors",
          "about",
          "your",
          "classmates",
          "ought",
          "apologize"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-8-b3",
        "prompt": "¿Cómo podemos nosotros reconstruir la confianza después de un error?",
        "answer": "How can we rebuild trust after a mistake",
        "tokens": [
          "How",
          "can",
          "we",
          "rebuild",
          "trust",
          "after",
          "a",
          "mistake",
          "ought",
          "apologize"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-8-e1",
        "audioText": "When you have an argument with a close friend, you ought to listen with empathy first and you had better not discuss your private issues in public group chats.",
        "correctAnswer": "When you have an argument with a close friend, you ought to listen with empathy first and you had better not discuss your private issues in public group chats.",
        "options": [
          "When you have an argument with a close friend, you ought to listen with empathy first and you had better not discuss your private issues in public group chats.",
          "You ought to apologize sincerely to clear the air.",
          "You had better not spread rumors about your classmates."
        ]
      },
      {
        "id": "4-8-e2",
        "audioText": "You ought to apologize sincerely to clear the air.",
        "correctAnswer": "You ought to apologize sincerely to clear the air.",
        "options": [
          "You had better not spread rumors about your classmates.",
          "You ought to apologize sincerely to clear the air.",
          "How can we rebuild trust after a mistake?"
        ]
      },
      {
        "id": "4-8-e3",
        "audioText": "You had better not spread rumors about your classmates.",
        "correctAnswer": "You had better not spread rumors about your classmates.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How can we rebuild trust after a mistake?",
          "You had better not spread rumors about your classmates."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-9",
    "badgeName": "Informal vs Formal Messages, Emails & Digital Tone",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-9-1",
        "term": "Write",
        "translation": "Redactar / Escribir formalmente",
        "ipa": "/raɪt - roʊt - ˈrɪtn/",
        "audioText": "Write. I wrote a formal inquiry email. (A well-written letter.)",
        "example": "I wrote a formal inquiry email. (A well-written letter.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-2",
        "term": "Send",
        "translation": "Enviar / Remitir",
        "ipa": "/send - sent/",
        "audioText": "Send. She sent the application packet. (Files already sent.)",
        "example": "She sent the application packet. (Files already sent.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-3",
        "term": "Inquire",
        "translation": "Consultar / Preguntar formalmente",
        "ipa": "/ɪnˈkwaɪər/",
        "audioText": "Inquire. I inquired about the scholarship requirements.",
        "example": "I inquired about the scholarship requirements.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-4",
        "term": "Attach",
        "translation": "Adjuntar archivo",
        "ipa": "/əˈtætʃ/",
        "audioText": "Attach. I attached my PDF document.",
        "example": "I attached my PDF document.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-5",
        "term": "Request",
        "translation": "Solicitar formalmente",
        "ipa": "/rɪˈkwest/",
        "audioText": "Request. She requested an extension on the project.",
        "example": "She requested an extension on the project.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-6",
        "term": "Formal: Dear Professor Martinez",
        "translation": "Usa Dear + Título + Apellido en contextos académicos u oficiales.",
        "ipa": "/formal/",
        "audioText": "Dear Professor Gomez, I hope this email finds you well.",
        "example": "Dear Professor Gomez, I hope this email finds you well.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-9-7",
        "term": "I am writing to inquire about",
        "translation": "Ve directo al grano con elegancia en la primera línea.",
        "ipa": "/i/",
        "audioText": "I am writing to inquire about the application requirements for the youth exchange program.",
        "example": "I am writing to inquire about the application requirements for the youth exchange program.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-9-b1",
        "prompt": "Le escribo para consultar sobre los requisitos del programa de intercambio.",
        "answer": "I am writing to inquire about the exchange program requirements",
        "tokens": [
          "I",
          "am",
          "writing",
          "to",
          "inquire",
          "about",
          "the",
          "exchange",
          "program",
          "requirements",
          "Please",
          "forget"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-9-b2",
        "prompt": "Por favor no olvide adjuntar la carta de recomendación firmada.",
        "answer": "Please do not forget to attach the signed recommendation letter",
        "tokens": [
          "Please",
          "do",
          "not",
          "forget",
          "to",
          "attach",
          "the",
          "signed",
          "recommendation",
          "letter",
          "writing",
          "inquire"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-9-b3",
        "prompt": "¿Podría por favor confirmar si recibió el documento adjunto?",
        "answer": "Could you please confirm if you received the attached document",
        "tokens": [
          "Could",
          "you",
          "please",
          "confirm",
          "if",
          "received",
          "the",
          "attached",
          "document",
          "writing",
          "inquire"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-9-e1",
        "audioText": "Good morning candidates.",
        "correctAnswer": "Good morning candidates.",
        "options": [
          "Good morning candidates.",
          "Please submit your official high school transcript and your personal recommendation letter before Friday at 5:00 PM.",
          "I am writing to inquire about the exchange program requirements."
        ]
      },
      {
        "id": "4-9-e2",
        "audioText": "Please submit your official high school transcript and your personal recommendation letter before Friday at 5:00 PM.",
        "correctAnswer": "Please submit your official high school transcript and your personal recommendation letter before Friday at 5:00 PM.",
        "options": [
          "I am writing to inquire about the exchange program requirements.",
          "Please submit your official high school transcript and your personal recommendation letter before Friday at 5:00 PM.",
          "Please do not forget to attach the signed recommendation letter."
        ]
      },
      {
        "id": "4-9-e3",
        "audioText": "I am writing to inquire about the exchange program requirements.",
        "correctAnswer": "I am writing to inquire about the exchange program requirements.",
        "options": [
          "Could you please confirm if you received the attached document?",
          "Please do not forget to attach the signed recommendation letter.",
          "I am writing to inquire about the exchange program requirements."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-10",
    "badgeName": "Teen Leadership, Customer Service & Capstone Review",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-10-1",
        "term": "Lead",
        "translation": "Liderar / Guiar",
        "ipa": "/liːd - led/",
        "audioText": "Lead. She led the team to victory. (A well-led initiative.)",
        "example": "She led the team to victory. (A well-led initiative.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-2",
        "term": "Build",
        "translation": "Construir / Desarrollar proyectos",
        "ipa": "/bɪld - bɪlt/",
        "audioText": "Build. We built a strong collaborative network. (Built to last.)",
        "example": "We built a strong collaborative network. (Built to last.)",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-3",
        "term": "Resolve",
        "translation": "Resolver / Solucionar",
        "ipa": "/rɪˈzɑːlv/",
        "audioText": "Resolve. We resolved the customer issue calmly.",
        "example": "We resolved the customer issue calmly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-4",
        "term": "Inspire",
        "translation": "Inspirar",
        "ipa": "/ɪnˈspaɪər/",
        "audioText": "Inspire. His speech inspired hundreds of students.",
        "example": "His speech inspired hundreds of students.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-5",
        "term": "Achieve",
        "translation": "Lograr / Alcanzar",
        "ipa": "/əˈtʃiːv/",
        "audioText": "Achieve. We achieved Level 4 graduation honors.",
        "example": "We achieved Level 4 graduation honors.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-6",
        "term": "In my opinion",
        "translation": "Abre tus argumentos con convicción y suma razones con conectores.",
        "ipa": "/in/",
        "audioText": "In my opinion, youth leadership is essential because it inspires positive change.",
        "example": "In my opinion, youth leadership is essential because it inspires positive change.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-10-7",
        "term": "Zero: If you heat water, it boils | First: If we practice, we will succeed",
        "translation": "Zero = verdades automáticas. First = metas y consecuencias futuras.",
        "ipa": "/zero/",
        "audioText": "If our team works together with discipline, we will achieve outstanding results.",
        "example": "If our team works together with discipline, we will achieve outstanding results.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-10-b1",
        "prompt": "Si nosotros trabajamos con disciplina nosotros alcanzaremos todas nuestras metas.",
        "answer": "If we work with discipline we will achieve all our goals",
        "tokens": [
          "If",
          "we",
          "work",
          "with",
          "discipline",
          "will",
          "achieve",
          "all",
          "our",
          "goals",
          "should",
          "give"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-10-b2",
        "prompt": "Nosotros no deberíamos rendirnos ante los desafíos difíciles.",
        "answer": "We should not give up in the face of difficult challenges",
        "tokens": [
          "We",
          "should",
          "not",
          "give",
          "up",
          "in",
          "the",
          "face",
          "of",
          "difficult",
          "challenges",
          "work",
          "with"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "4-10-b3",
        "prompt": "¿Cuál es el mayor logro que alcanzaste en este Nivel Cuatro?",
        "answer": "What is the biggest achievement you reached in this Level Four",
        "tokens": [
          "What",
          "is",
          "the",
          "biggest",
          "achievement",
          "you",
          "reached",
          "in",
          "this",
          "Level",
          "Four",
          "work",
          "with"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-10-e1",
        "audioText": "Congratulations Level 4 graduates!",
        "correctAnswer": "Congratulations Level 4 graduates!",
        "options": [
          "Congratulations Level 4 graduates!",
          "You have proven that if you dedicate effort and passion to English, you will conquer international opportunities and lead with confidence.",
          "If we work with discipline we will achieve all our goals."
        ]
      },
      {
        "id": "4-10-e2",
        "audioText": "You have proven that if you dedicate effort and passion to English, you will conquer international opportunities and lead with confidence.",
        "correctAnswer": "You have proven that if you dedicate effort and passion to English, you will conquer international opportunities and lead with confidence.",
        "options": [
          "If we work with discipline we will achieve all our goals.",
          "You have proven that if you dedicate effort and passion to English, you will conquer international opportunities and lead with confidence.",
          "We should not give up in the face of difficult challenges."
        ]
      },
      {
        "id": "4-10-e3",
        "audioText": "If we work with discipline we will achieve all our goals.",
        "correctAnswer": "If we work with discipline we will achieve all our goals.",
        "options": [
          "What is the biggest achievement you reached in this Level Four?",
          "We should not give up in the face of difficult challenges.",
          "If we work with discipline we will achieve all our goals."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-1",
    "badgeName": "My Life Experiences (Present Perfect)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-1-1",
        "term": "See",
        "translation": "Ver / Haber visto",
        "ipa": "/siːn/",
        "audioText": "See. I have seen a shooting star.",
        "example": "I have seen a shooting star.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-1-2",
        "term": "Fly",
        "translation": "Volar / Haber volado",
        "ipa": "/floʊn/",
        "audioText": "Fly. She has flown in a helicopter.",
        "example": "She has flown in a helicopter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-1-3",
        "term": "Win",
        "translation": "Ganar / Haber ganado",
        "ipa": "/wʌn/",
        "audioText": "Win. We have won the championship.",
        "example": "We have won the championship.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-1-4",
        "term": "Ride",
        "translation": "Montar / Haber montado",
        "ipa": "/ˈrɪdn/",
        "audioText": "Ride. I have ridden a fast horse.",
        "example": "I have ridden a fast horse.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-1-5",
        "term": "Write",
        "translation": "Escribir / Haber escrito",
        "ipa": "/ˈrɪtn/",
        "audioText": "Write. He has written ten song lyrics.",
        "example": "He has written ten song lyrics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-1-6",
        "term": "I have traveled to the coast",
        "translation": "Sujeto + have/has + Verbo en Participio Pasado.",
        "ipa": "/i/",
        "audioText": "I have visited five different national parks across Colombia with my family.",
        "example": "I have visited five different national parks across Colombia with my family.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-1-7",
        "term": "Already (ya ocurrió antes de lo esperado)",
        "translation": "Coloca already o just entre have/has y el participio pasado.",
        "ipa": "/already/",
        "audioText": "I have already finished my English project and I have just uploaded the video.",
        "example": "I have already finished my English project and I have just uploaded the video.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-1-b1",
        "prompt": "Yo ya he visitado cinco parques nacionales en Colombia.",
        "answer": "I have already visited five national parks in Colombia",
        "tokens": [
          "I",
          "have",
          "already",
          "visited",
          "five",
          "national",
          "parks",
          "in",
          "Colombia",
          "tried",
          "skydiving"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-1-b2",
        "prompt": "Yo todavía no he probado paracaidismo en mi vida.",
        "answer": "I have not tried skydiving in my life yet",
        "tokens": [
          "I",
          "have",
          "not",
          "tried",
          "skydiving",
          "in",
          "my",
          "life",
          "yet",
          "already",
          "visited"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-1-b3",
        "prompt": "¿Alguna vez has viajado tú en avión a otro país?",
        "answer": "Have you ever traveled on an airplane to another country",
        "tokens": [
          "Have",
          "you",
          "ever",
          "traveled",
          "on",
          "an",
          "airplane",
          "to",
          "another",
          "country",
          "already",
          "visited"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-1-e1",
        "audioText": "I have already visited three South American countries, but I have not seen the Amazon rainforest yet.",
        "correctAnswer": "I have already visited three South American countries, but I have not seen the Amazon rainforest yet.",
        "options": [
          "I have already visited three South American countries, but I have not seen the Amazon rainforest yet.",
          "I have already visited five national parks in Colombia.",
          "I have not tried skydiving in my life yet."
        ]
      },
      {
        "id": "inter-1-e2",
        "audioText": "I have already visited five national parks in Colombia.",
        "correctAnswer": "I have already visited five national parks in Colombia.",
        "options": [
          "I have not tried skydiving in my life yet.",
          "I have already visited five national parks in Colombia.",
          "Have you ever traveled on an airplane to another country?"
        ]
      },
      {
        "id": "inter-1-e3",
        "audioText": "I have not tried skydiving in my life yet.",
        "correctAnswer": "I have not tried skydiving in my life yet.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Have you ever traveled on an airplane to another country?",
          "I have not tried skydiving in my life yet."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-2",
    "badgeName": "Teen Slang & Phrasal Verbs in Daily Conversations",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-2-1",
        "term": "Hang out",
        "translation": "Parchar / Salir con amigos",
        "ipa": "/hæŋ aʊt/",
        "audioText": "Hang out. We hung out at the mall.",
        "example": "We hung out at the mall.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-2-2",
        "term": "Chill out",
        "translation": "Relajarse / Calmarse",
        "ipa": "/tʃɪl aʊt/",
        "audioText": "Chill out. I chilled out listening to music.",
        "example": "I chilled out listening to music.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-2-3",
        "term": "Figure out",
        "translation": "Descifrar / Resolver",
        "ipa": "/ˈfɪɡjər aʊt/",
        "audioText": "Figure out. I figured out the solution.",
        "example": "I figured out the solution.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-2-4",
        "term": "Run into",
        "translation": "Toparse por casualidad",
        "ipa": "/rʌn ˈɪntuː/",
        "audioText": "Run into. I ran into an old friend.",
        "example": "I ran into an old friend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-2-5",
        "term": "Catch up",
        "translation": "Ponerse al día",
        "ipa": "/kætʃ ʌp/",
        "audioText": "Catch up. Let's catch up this weekend.",
        "example": "Let's catch up this weekend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-2-6",
        "term": "Hang out (parchar / salir con amigos)",
        "translation": "Usa hang out para salir en grupo y chill out para relajarte.",
        "ipa": "/hang/",
        "audioText": "We usually hang out at the skatepark and chill out with iced drinks after class.",
        "example": "We usually hang out at the skatepark and chill out with iced drinks after class.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-2-7",
        "term": "Figure out (descubrir / solucionar)",
        "translation": "Run into lleva objeto directo después de into.",
        "ipa": "/figure/",
        "audioText": "Yesterday I ran into my science teacher at the supermarket while buying groceries.",
        "example": "Yesterday I ran into my science teacher at the supermarket while buying groceries.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-2-b1",
        "prompt": "A nosotros nos gusta parchar en el parque y relajarnos los viernes.",
        "answer": "We love to hang out in the park and chill out on Fridays",
        "tokens": [
          "We",
          "love",
          "to",
          "hang",
          "out",
          "in",
          "the",
          "park",
          "and",
          "chill",
          "on",
          "Fridays",
          "turn",
          "down"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-2-b2",
        "prompt": "Yo tuve que rechazar la invitación para estudiar para mi examen.",
        "answer": "I had to turn down the invitation to study for my exam",
        "tokens": [
          "I",
          "had",
          "to",
          "turn",
          "down",
          "the",
          "invitation",
          "study",
          "for",
          "my",
          "exam",
          "love",
          "hang"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-2-b3",
        "prompt": "¿Quieres encontrarte con nosotros para ponernos al día esta tarde?",
        "answer": "Do you want to meet up with us to catch up this afternoon",
        "tokens": [
          "Do",
          "you",
          "want",
          "to",
          "meet",
          "up",
          "with",
          "us",
          "catch",
          "this",
          "afternoon",
          "love",
          "hang"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-2-e1",
        "audioText": "I just ran into Felipe at the park and we decided to hang out at my place to chill out and play video games.",
        "correctAnswer": "I just ran into Felipe at the park and we decided to hang out at my place to chill out and play video games.",
        "options": [
          "I just ran into Felipe at the park and we decided to hang out at my place to chill out and play video games.",
          "We love to hang out in the park and chill out on Fridays.",
          "I had to turn down the invitation to study for my exam."
        ]
      },
      {
        "id": "inter-2-e2",
        "audioText": "We love to hang out in the park and chill out on Fridays.",
        "correctAnswer": "We love to hang out in the park and chill out on Fridays.",
        "options": [
          "I had to turn down the invitation to study for my exam.",
          "We love to hang out in the park and chill out on Fridays.",
          "Do you want to meet up with us to catch up this afternoon?"
        ]
      },
      {
        "id": "inter-2-e3",
        "audioText": "I had to turn down the invitation to study for my exam.",
        "correctAnswer": "I had to turn down the invitation to study for my exam.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Do you want to meet up with us to catch up this afternoon?",
          "I had to turn down the invitation to study for my exam."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-3",
    "badgeName": "Possibilities & Deductions (Must, Might, Can't)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-3-1",
        "term": "Deduce",
        "translation": "Deducir lógicamente",
        "ipa": "/dɪˈduːs/",
        "audioText": "Deduce. I deduce he is the winner.",
        "example": "I deduce he is the winner.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-3-2",
        "term": "Prove",
        "translation": "Probar / Demostrar",
        "ipa": "/pruːv/",
        "audioText": "Prove. The clues prove my theory.",
        "example": "The clues prove my theory.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-3-3",
        "term": "Investigate",
        "translation": "Investigar pistas",
        "ipa": "/ɪnˈvestɪɡeɪt/",
        "audioText": "Investigate. Detectives investigate the scene.",
        "example": "Detectives investigate the scene.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-3-4",
        "term": "Conclude",
        "translation": "Concluir / Llegar a final",
        "ipa": "/kənˈkluːd/",
        "audioText": "Conclude. We concluded it must be true.",
        "example": "We concluded it must be true.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-3-5",
        "term": "Suspect",
        "translation": "Sospechar",
        "ipa": "/səˈspekt/",
        "audioText": "Suspect. I suspect he knows the secret.",
        "example": "I suspect he knows the secret.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-3-6",
        "term": "He must be exhausted",
        "translation": "Usa 'must + verbo base' cuando la evidencia es abrumadora.",
        "ipa": "/he/",
        "audioText": "He has studied for ten hours straight; he must be completely exhausted.",
        "example": "He has studied for ten hours straight; he must be completely exhausted.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-3-7",
        "term": "It might rain later",
        "translation": "Usa might o could cuando es una hipótesis entre varias posibles.",
        "ipa": "/it/",
        "audioText": "Sofia is not in class today; she might be participating in the sports tournament.",
        "example": "Sofia is not in class today; she might be participating in the sports tournament.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-3-b1",
        "prompt": "Él ha estudiado diez horas seguidas él debe estar agotado.",
        "answer": "He has studied ten hours straight he must be exhausted",
        "tokens": [
          "He",
          "has",
          "studied",
          "ten",
          "hours",
          "straight",
          "he",
          "must",
          "be",
          "exhausted",
          "That",
          "package"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-3-b2",
        "prompt": "Ese paquete no puede ser para mí porque no tiene mi nombre.",
        "answer": "That package can t be for me because it lacks my name",
        "tokens": [
          "That",
          "package",
          "can",
          "t",
          "be",
          "for",
          "me",
          "because",
          "it",
          "lacks",
          "my",
          "name",
          "studied",
          "hours"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-3-b3",
        "prompt": "¿Podría esa luz extraña en el cielo ser un dron meteorológico?",
        "answer": "Could that strange light in the sky be a weather drone",
        "tokens": [
          "Could",
          "that",
          "strange",
          "light",
          "in",
          "the",
          "sky",
          "be",
          "a",
          "weather",
          "drone",
          "studied",
          "hours"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-3-e1",
        "audioText": "The chemistry laboratory lights are on and music is playing inside at 8:00 PM.",
        "correctAnswer": "The chemistry laboratory lights are on and music is playing inside at 8:00 PM.",
        "options": [
          "The chemistry laboratory lights are on and music is playing inside at 8:00 PM.",
          "Professor Gomez must still be working on the science fair project.",
          "He has studied ten hours straight he must be exhausted."
        ]
      },
      {
        "id": "inter-3-e2",
        "audioText": "Professor Gomez must still be working on the science fair project.",
        "correctAnswer": "Professor Gomez must still be working on the science fair project.",
        "options": [
          "He has studied ten hours straight he must be exhausted.",
          "Professor Gomez must still be working on the science fair project.",
          "That package can't be for me because it lacks my name."
        ]
      },
      {
        "id": "inter-3-e3",
        "audioText": "He has studied ten hours straight he must be exhausted.",
        "correctAnswer": "He has studied ten hours straight he must be exhausted.",
        "options": [
          "Could that strange light in the sky be a weather drone?",
          "That package can't be for me because it lacks my name.",
          "He has studied ten hours straight he must be exhausted."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-4",
    "badgeName": "If I Ruled the World (Second Conditional)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-4-1",
        "term": "Rule",
        "translation": "Gobernar / Liderar",
        "ipa": "/ruːl/",
        "audioText": "Rule. If I ruled, I would help everyone.",
        "example": "If I ruled, I would help everyone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-4-2",
        "term": "Invent",
        "translation": "Inventar soluciones",
        "ipa": "/ɪnˈvent/",
        "audioText": "Invent. I would invent a flying skateboard.",
        "example": "I would invent a flying skateboard.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-4-3",
        "term": "Transform",
        "translation": "Transformar el mundo",
        "ipa": "/trænsˈfɔːrm/",
        "audioText": "Transform. We would transform clean energy.",
        "example": "We would transform clean energy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-4-4",
        "term": "Eradicate",
        "translation": "Erradicar problemas",
        "ipa": "/ɪˈrædɪkeɪt/",
        "audioText": "Eradicate. I would eradicate plastic waste.",
        "example": "I would eradicate plastic waste.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-4-5",
        "term": "Protect",
        "translation": "Proteger el medio ambiente",
        "ipa": "/prəˈtekt/",
        "audioText": "Protect. I would protect endangered animals.",
        "example": "I would protect endangered animals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-4-6",
        "term": "If I won the lottery, I would travel",
        "translation": "Condición imaginaria en pasado + consecuencia con would.",
        "ipa": "/if/",
        "audioText": "If I had the ability to teleport, I would have breakfast in Paris and lunch in Tokyo.",
        "example": "If I had the ability to teleport, I would have breakfast in Paris and lunch in Tokyo.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-4-7",
        "term": "If I were you, I would study",
        "translation": "Usa 'were' formalmente con I, he, she, it en el condicional irreal.",
        "ipa": "/if/",
        "audioText": "If I were in your position, I would accept that international exchange scholarship.",
        "example": "If I were in your position, I would accept that international exchange scholarship.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-4-b1",
        "prompt": "Si yo tuviera superpoderes yo protegería los océanos y los bosques.",
        "answer": "If I had superpowers I would protect the oceans and forests",
        "tokens": [
          "If",
          "I",
          "had",
          "superpowers",
          "would",
          "protect",
          "the",
          "oceans",
          "and",
          "forests",
          "were",
          "your"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-4-b2",
        "prompt": "Si yo estuviera en tu lugar yo no rechazaría esa gran oportunidad.",
        "answer": "If I were in your place I wouldn t turn down that opportunity",
        "tokens": [
          "If",
          "I",
          "were",
          "in",
          "your",
          "place",
          "wouldn",
          "t",
          "turn",
          "down",
          "that",
          "opportunity",
          "superpowers",
          "protect"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-4-b3",
        "prompt": "¿Qué harías tú si pudieras viajar en el tiempo al pasado?",
        "answer": "What would you do if you could travel back in time",
        "tokens": [
          "What",
          "would",
          "you",
          "do",
          "if",
          "could",
          "travel",
          "back",
          "in",
          "time",
          "superpowers",
          "protect"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-4-e1",
        "audioText": "If I were the Minister of the Environment, I would immediately ban single-use plastics and plant one million native trees in Colombia.",
        "correctAnswer": "If I were the Minister of the Environment, I would immediately ban single-use plastics and plant one million native trees in Colombia.",
        "options": [
          "If I were the Minister of the Environment, I would immediately ban single-use plastics and plant one million native trees in Colombia.",
          "If I had superpowers I would protect the oceans and forests.",
          "If I were in your place I wouldn't turn down that opportunity."
        ]
      },
      {
        "id": "inter-4-e2",
        "audioText": "If I had superpowers I would protect the oceans and forests.",
        "correctAnswer": "If I had superpowers I would protect the oceans and forests.",
        "options": [
          "If I were in your place I wouldn't turn down that opportunity.",
          "If I had superpowers I would protect the oceans and forests.",
          "What would you do if you could travel back in time?"
        ]
      },
      {
        "id": "inter-4-e3",
        "audioText": "If I were in your place I wouldn't turn down that opportunity.",
        "correctAnswer": "If I were in your place I wouldn't turn down that opportunity.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What would you do if you could travel back in time?",
          "If I were in your place I wouldn't turn down that opportunity."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-5",
    "badgeName": "Agreeing & Disagreeing Respectfully",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-5-1",
        "term": "Argue",
        "translation": "Argumentar / Sostener",
        "ipa": "/ˈɑːrɡjuː/",
        "audioText": "Argue. I argue that practice is key.",
        "example": "I argue that practice is key.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-5-2",
        "term": "Defend",
        "translation": "Defender una postura",
        "ipa": "/dɪˈfend/",
        "audioText": "Defend. She defended her viewpoint well.",
        "example": "She defended her viewpoint well.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-5-3",
        "term": "Refute",
        "translation": "Refutar con datos",
        "ipa": "/rɪˈfjuːt/",
        "audioText": "Refute. He refuted the claim with facts.",
        "example": "He refuted the claim with facts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-5-4",
        "term": "Concede",
        "translation": "Conceder / Aceptar un punto",
        "ipa": "/kənˈsiːd/",
        "audioText": "Concede. I concede that you are right.",
        "example": "I concede that you are right.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-5-5",
        "term": "Persuade",
        "translation": "Persuadir con elegancia",
        "ipa": "/pərˈsweɪd/",
        "audioText": "Persuade. They persuaded the entire jury.",
        "example": "They persuaded the entire jury.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-5-6",
        "term": "I completely agree with you",
        "translation": "Frases para respaldar con entusiasmo la postura de tu compañero.",
        "ipa": "/i/",
        "audioText": "I completely agree with that perspective because evidence shows students need better rest.",
        "example": "I completely agree with that perspective because evidence shows students need better rest.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-5-7",
        "term": "I see your point, but...",
        "translation": "Acepta parte del argumento antes de introducir tu contraargumento.",
        "ipa": "/i/",
        "audioText": "I see your point about convenience, but we must also consider data privacy risks.",
        "example": "I see your point about convenience, but we must also consider data privacy risks.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-5-b1",
        "prompt": "Yo entiendo tu punto pero debemos considerar la privacidad de datos.",
        "answer": "I see your point but we must consider data privacy",
        "tokens": [
          "I",
          "see",
          "your",
          "point",
          "but",
          "we",
          "must",
          "consider",
          "data",
          "privacy",
          "respectfully",
          "disagree"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-5-b2",
        "prompt": "Yo discrepo respetuosamente porque la práctica en persona es insustituible.",
        "answer": "I respectfully disagree because in person practice cannot be replaced",
        "tokens": [
          "I",
          "respectfully",
          "disagree",
          "because",
          "in",
          "person",
          "practice",
          "cannot",
          "be",
          "replaced",
          "your",
          "point"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-5-b3",
        "prompt": "¿Has considerado tú el impacto del tiempo en pantalla en los jóvenes?",
        "answer": "Have you considered the impact of screen time on teenagers",
        "tokens": [
          "Have",
          "you",
          "considered",
          "the",
          "impact",
          "of",
          "screen",
          "time",
          "on",
          "teenagers",
          "your",
          "point"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-5-e1",
        "audioText": "Both teams presented compelling arguments.",
        "correctAnswer": "Both teams presented compelling arguments.",
        "options": [
          "Both teams presented compelling arguments.",
          "While team A highlighted innovation, team B rightly emphasized human ethics and student discipline.",
          "I see your point but we must consider data privacy."
        ]
      },
      {
        "id": "inter-5-e2",
        "audioText": "While team A highlighted innovation, team B rightly emphasized human ethics and student discipline.",
        "correctAnswer": "While team A highlighted innovation, team B rightly emphasized human ethics and student discipline.",
        "options": [
          "I see your point but we must consider data privacy.",
          "While team A highlighted innovation, team B rightly emphasized human ethics and student discipline.",
          "I respectfully disagree because in-person practice cannot be replaced."
        ]
      },
      {
        "id": "inter-5-e3",
        "audioText": "I see your point but we must consider data privacy.",
        "correctAnswer": "I see your point but we must consider data privacy.",
        "options": [
          "Have you considered the impact of screen time on teenagers?",
          "I respectfully disagree because in-person practice cannot be replaced.",
          "I see your point but we must consider data privacy."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-6",
    "badgeName": "Podcast & Media Hosting Basics",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-6-1",
        "term": "Host",
        "translation": "Conducir / Presentar show",
        "ipa": "/hoʊst/",
        "audioText": "Host. I host a weekly teen podcast.",
        "example": "I host a weekly teen podcast.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-6-2",
        "term": "Interview",
        "translation": "Entrevistar invitados",
        "ipa": "/ˈɪntərvjuː/",
        "audioText": "Interview. We interviewed a top streamer.",
        "example": "We interviewed a top streamer.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-6-3",
        "term": "Broadcast",
        "translation": "Transmitir / Emitir al aire",
        "ipa": "/ˈbrɔːdkæst/",
        "audioText": "Broadcast. They broadcast live on YouTube.",
        "example": "They broadcast live on YouTube.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-6-4",
        "term": "Highlight",
        "translation": "Resaltar / Destacar temas",
        "ipa": "/ˈhaɪlaɪt/",
        "audioText": "Highlight. I highlight youth achievements.",
        "example": "I highlight youth achievements.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-6-5",
        "term": "Engage",
        "translation": "Enganchar a la audiencia",
        "ipa": "/ɪnˈɡeɪdʒ/",
        "audioText": "Engage. Great hooks engage listeners.",
        "example": "Great hooks engage listeners.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-6-6",
        "term": "Welcome back to the show!",
        "translation": "Abre con energía y presenta la promesa del episodio.",
        "ipa": "/welcome/",
        "audioText": "Welcome back to Teen Tech Waves! Today we are diving into the world of student game developers.",
        "example": "Welcome back to Teen Tech Waves! Today we are diving into the world of student game developers.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-6-7",
        "term": "Joining us in the studio today is...",
        "translation": "Presenta las credenciales y el logro de tu entrevistado.",
        "ipa": "/joining/",
        "audioText": "Joining us live in the studio today is Mateo, a 15-year-old robotics champion from Bogota.",
        "example": "Joining us live in the studio today is Mateo, a 15-year-old robotics champion from Bogota.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-6-b1",
        "prompt": "Bienvenidos de nuevo a nuestro show hoy tenemos un invitado muy especial.",
        "answer": "Welcome back to our show today we have a very special guest",
        "tokens": [
          "Welcome",
          "back",
          "to",
          "our",
          "show",
          "today",
          "we",
          "have",
          "a",
          "very",
          "special",
          "guest",
          "forget",
          "subscribe"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-6-b2",
        "prompt": "No olviden suscribirse a nuestro canal y quédense sintonizados para el episodio dos.",
        "answer": "Do not forget to subscribe and stay tuned for episode two",
        "tokens": [
          "Do",
          "not",
          "forget",
          "to",
          "subscribe",
          "and",
          "stay",
          "tuned",
          "for",
          "episode",
          "two",
          "Welcome",
          "back"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-6-b3",
        "prompt": "¿Qué consejo compartirías tú con los jóvenes que quieren emprender?",
        "answer": "What advice would you share with teens who want to innovate",
        "tokens": [
          "What",
          "advice",
          "would",
          "you",
          "share",
          "with",
          "teens",
          "who",
          "want",
          "to",
          "innovate",
          "Welcome",
          "back"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-6-e1",
        "audioText": "Welcome to Global Teen Spotlight!",
        "correctAnswer": "Welcome to Global Teen Spotlight!",
        "options": [
          "Welcome to Global Teen Spotlight!",
          "Today we are exploring youth sustainability projects.",
          "If you enjoy this episode, hit the subscribe button and stay tuned for part two!"
        ]
      },
      {
        "id": "inter-6-e2",
        "audioText": "Today we are exploring youth sustainability projects.",
        "correctAnswer": "Today we are exploring youth sustainability projects.",
        "options": [
          "If you enjoy this episode, hit the subscribe button and stay tuned for part two!",
          "Today we are exploring youth sustainability projects.",
          "evening we are exploring youth sustainability projects."
        ]
      },
      {
        "id": "inter-6-e3",
        "audioText": "If you enjoy this episode, hit the subscribe button and stay tuned for part two!",
        "correctAnswer": "If you enjoy this episode, hit the subscribe button and stay tuned for part two!",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "If you enjoy this episode, hit the subscribe button and stay tuned for part two! (Alternative)",
          "If you enjoy this episode, hit the subscribe button and stay tuned for part two!"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-7",
    "badgeName": "Present Perfect vs Present Perfect Continuous",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-7-1",
        "term": "Train",
        "translation": "Entrenar / Estar entrenando",
        "ipa": "/treɪn/",
        "audioText": "Train. I have been training for the race.",
        "example": "I have been training for the race.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-7-2",
        "term": "Code",
        "translation": "Programar código",
        "ipa": "/koʊd/",
        "audioText": "Code. He has been coding all day.",
        "example": "He has been coding all day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-7-3",
        "term": "Practice",
        "translation": "Practicar constantemente",
        "ipa": "/ˈpræktɪs/",
        "audioText": "Practice. She has been practicing violin.",
        "example": "She has been practicing violin.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-7-4",
        "term": "Study",
        "translation": "Estudiar con dedicación",
        "ipa": "/ˈstʌdi/",
        "audioText": "Study. We have been studying for exams.",
        "example": "We have been studying for exams.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-7-5",
        "term": "Build",
        "translation": "Construir / Diseñar proyectos",
        "ipa": "/bɪld/",
        "audioText": "Build. They have been building a drone.",
        "example": "They have been building a drone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-7-6",
        "term": "I have been coding",
        "translation": "Sujeto + have/has been + Verbo en -ING + for/since.",
        "ipa": "/i/",
        "audioText": "I have been learning English at this academy for two years with great dedication.",
        "example": "I have been learning English at this academy for two years with great dedication.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-7-7",
        "term": "FOR (duración: for 3 hours, for 5 months)",
        "translation": "FOR cuenta el total de tiempo; SINCE señala el punto de partida en el calendario.",
        "ipa": "/for/",
        "audioText": "She has been practicing skateboarding since she was eight years old.",
        "example": "She has been practicing skateboarding since she was eight years old.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-7-b1",
        "prompt": "Yo he estado estudiando inglés en esta academia durante dos años.",
        "answer": "I have been studying English at this academy for two years",
        "tokens": [
          "I",
          "have",
          "been",
          "studying",
          "English",
          "at",
          "this",
          "academy",
          "for",
          "two",
          "years",
          "resting",
          "because"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-7-b2",
        "prompt": "Ella no ha estado descansando porque ha estado entrenando sin parar.",
        "answer": "She has not been resting because she has been training non stop",
        "tokens": [
          "She",
          "has",
          "not",
          "been",
          "resting",
          "because",
          "she",
          "training",
          "non",
          "stop",
          "have",
          "studying"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-7-b3",
        "prompt": "¿Cuánto tiempo has estado tú programando videojuegos en tu tiempo libre?",
        "answer": "How long have you been programming video games in your free time",
        "tokens": [
          "How",
          "long",
          "have",
          "you",
          "been",
          "programming",
          "video",
          "games",
          "in",
          "your",
          "free",
          "time",
          "studying",
          "English"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-7-e1",
        "audioText": "I have been playing the electric guitar since I was ten years old, and our rock band has been writing original songs for three consecutive years.",
        "correctAnswer": "I have been playing the electric guitar since I was ten years old, and our rock band has been writing original songs for three consecutive years.",
        "options": [
          "I have been playing the electric guitar since I was ten years old, and our rock band has been writing original songs for three consecutive years.",
          "I have been studying English at this academy for two years.",
          "She has not been resting because she has been training non-stop."
        ]
      },
      {
        "id": "inter-7-e2",
        "audioText": "I have been studying English at this academy for two years.",
        "correctAnswer": "I have been studying English at this academy for two years.",
        "options": [
          "She has not been resting because she has been training non-stop.",
          "I have been studying English at this academy for two years.",
          "How long have you been programming video games in your free time?"
        ]
      },
      {
        "id": "inter-7-e3",
        "audioText": "She has not been resting because she has been training non-stop.",
        "correctAnswer": "She has not been resting because she has been training non-stop.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How long have you been programming video games in your free time?",
          "She has not been resting because she has been training non-stop."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-8",
    "badgeName": "Advanced Phrasal Verbs in Storytelling & Media",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-8-1",
        "term": "Look up to",
        "translation": "Admirar con respeto",
        "ipa": "/lʊk ʌp tuː/",
        "audioText": "Look up to. I look up to visionary leaders.",
        "example": "I look up to visionary leaders.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-8-2",
        "term": "Stand out",
        "translation": "Sobresalir / Destacar",
        "ipa": "/stænd aʊt/",
        "audioText": "Stand out. Her talent stood out immediately.",
        "example": "Her talent stood out immediately.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-8-3",
        "term": "Pull off",
        "translation": "Lograr una hazaña difícil",
        "ipa": "/pʊl ɔːf/",
        "audioText": "Pull off. We pulled off a miracle victory.",
        "example": "We pulled off a miracle victory.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-8-4",
        "term": "Come across",
        "translation": "Toparse con algo valioso",
        "ipa": "/kʌm əˈkrɔːs/",
        "audioText": "Come across. I came across an ancient map.",
        "example": "I came across an ancient map.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-8-5",
        "term": "End up",
        "translation": "Terminar en un resultado",
        "ipa": "/end ʌp/",
        "audioText": "End up. We ended up winning the cup.",
        "example": "We ended up winning the cup.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-8-6",
        "term": "I look up to my older sister",
        "translation": "Look up to siempre lleva 3 palabras (look + up + to + persona).",
        "ipa": "/i/",
        "audioText": "I have always looked up to my science teacher because she motivates us to innovate.",
        "example": "I have always looked up to my science teacher because she motivates us to innovate.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-8-7",
        "term": "I came across an ancient map",
        "translation": "Come across significa toparse con un objeto o información por azar.",
        "ipa": "/i/",
        "audioText": "While browsing the school library archives, I came across an old historical photo.",
        "example": "While browsing the school library archives, I came across an old historical photo.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-8-b1",
        "prompt": "Contra todo pronóstico nuestro equipo logró una victoria increíble.",
        "answer": "Against all odds our team pulled off an incredible victory",
        "tokens": [
          "Against",
          "all",
          "odds",
          "our",
          "team",
          "pulled",
          "off",
          "an",
          "incredible",
          "victory",
          "lost",
          "downtown"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-8-b2",
        "prompt": "Nosotros nos perdimos en el centro pero terminamos encontrando un lugar genial.",
        "answer": "We got lost downtown but ended up finding a great spot",
        "tokens": [
          "We",
          "got",
          "lost",
          "downtown",
          "but",
          "ended",
          "up",
          "finding",
          "a",
          "great",
          "spot",
          "Against",
          "odds"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-8-b3",
        "prompt": "¿A qué figura admirable admiras tú más por su valentía y resiliencia?",
        "answer": "Which admirable figure do you look up to the most for courage",
        "tokens": [
          "Which",
          "admirable",
          "figure",
          "do",
          "you",
          "look",
          "up",
          "to",
          "the",
          "most",
          "for",
          "courage",
          "Against",
          "odds"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-8-e1",
        "audioText": "While browsing streaming apps, I came across an indie science fiction film.",
        "correctAnswer": "While browsing streaming apps, I came across an indie science fiction film.",
        "options": [
          "While browsing streaming apps, I came across an indie science fiction film.",
          "The lead actor stood out brilliantly, and the director pulled off a stunning plot twist at the climax.",
          "Against all odds our team pulled off an incredible victory."
        ]
      },
      {
        "id": "inter-8-e2",
        "audioText": "The lead actor stood out brilliantly, and the director pulled off a stunning plot twist at the climax.",
        "correctAnswer": "The lead actor stood out brilliantly, and the director pulled off a stunning plot twist at the climax.",
        "options": [
          "Against all odds our team pulled off an incredible victory.",
          "The lead actor stood out brilliantly, and the director pulled off a stunning plot twist at the climax.",
          "We got lost downtown but ended up finding a great spot."
        ]
      },
      {
        "id": "inter-8-e3",
        "audioText": "Against all odds our team pulled off an incredible victory.",
        "correctAnswer": "Against all odds our team pulled off an incredible victory.",
        "options": [
          "Which admirable figure do you look up to the most for courage?",
          "We got lost downtown but ended up finding a great spot.",
          "Against all odds our team pulled off an incredible victory."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-9",
    "badgeName": "Past Modals of Deduction",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-9-1",
        "term": "Happen",
        "translation": "Ocurrir / Haber ocurrido",
        "ipa": "/ˈhæpənd/",
        "audioText": "Happen. A storm must have happened.",
        "example": "A storm must have happened.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-9-2",
        "term": "Cause",
        "translation": "Causar / Haber originado",
        "ipa": "/kɔːzd/",
        "audioText": "Cause. A drought might have caused it.",
        "example": "A drought might have caused it.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-9-3",
        "term": "Forget",
        "translation": "Olvidar / Haber olvidado",
        "ipa": "/fərˈɡɑːtn/",
        "audioText": "Forget. She must have forgotten the keys.",
        "example": "She must have forgotten the keys.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-9-4",
        "term": "Escape",
        "translation": "Escapar / Haber huido",
        "ipa": "/ɪˈskeɪpt/",
        "audioText": "Escape. The tiger must have escaped.",
        "example": "The tiger must have escaped.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-9-5",
        "term": "Discover",
        "translation": "Descubrir / Haber hallado",
        "ipa": "/dɪˈskʌvər/",
        "audioText": "Discover. They could have discovered it.",
        "example": "They could have discovered it.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-9-6",
        "term": "He must have trained hard",
        "translation": "Usa must have cuando la evidencia física del pasado es concluyente.",
        "ipa": "/he/",
        "audioText": "The ground is completely soaked; it must have poured heavily last night.",
        "example": "The ground is completely soaked; it must have poured heavily last night.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-9-7",
        "term": "She might have taken the bus",
        "translation": "Usa might have o could have para conjeturas posibles sin certeza total.",
        "ipa": "/she/",
        "audioText": "Santiago is late for the meeting; he might have run into heavy traffic on the avenue.",
        "example": "Santiago is late for the meeting; he might have run into heavy traffic on the avenue.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-9-b1",
        "prompt": "El suelo está empapado debe haber llovido fuertemente anoche.",
        "answer": "The ground is soaked it must have poured heavily last night",
        "tokens": [
          "The",
          "ground",
          "is",
          "soaked",
          "it",
          "must",
          "have",
          "poured",
          "heavily",
          "last",
          "night",
          "They",
          "left"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-9-b2",
        "prompt": "Ellos no pudieron haber salido por la guerra porque no hay armas.",
        "answer": "They can t have left due to war because there are no weapons",
        "tokens": [
          "They",
          "can",
          "t",
          "have",
          "left",
          "due",
          "to",
          "war",
          "because",
          "there",
          "are",
          "no",
          "weapons",
          "ground",
          "soaked"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-9-b3",
        "prompt": "¿Pudieron los antiguos astrónomos haber predicho los eclipses solares?",
        "answer": "Could ancient astronomers have predicted solar eclipses",
        "tokens": [
          "Could",
          "ancient",
          "astronomers",
          "have",
          "predicted",
          "solar",
          "eclipses",
          "ground",
          "soaked"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-9-e1",
        "audioText": "The locked front door shows zero signs of forced entry.",
        "correctAnswer": "The locked front door shows zero signs of forced entry.",
        "options": [
          "The locked front door shows zero signs of forced entry.",
          "The delivery courier must have dropped the package through the mail slot before noon.",
          "The ground is soaked it must have poured heavily last night."
        ]
      },
      {
        "id": "inter-9-e2",
        "audioText": "The delivery courier must have dropped the package through the mail slot before noon.",
        "correctAnswer": "The delivery courier must have dropped the package through the mail slot before noon.",
        "options": [
          "The ground is soaked it must have poured heavily last night.",
          "The delivery courier must have dropped the package through the mail slot before noon.",
          "They can't have left due to war because there are no weapons."
        ]
      },
      {
        "id": "inter-9-e3",
        "audioText": "The ground is soaked it must have poured heavily last night.",
        "correctAnswer": "The ground is soaked it must have poured heavily last night.",
        "options": [
          "Could ancient astronomers have predicted solar eclipses?",
          "They can't have left due to war because there are no weapons.",
          "The ground is soaked it must have poured heavily last night."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-10",
    "badgeName": "Conditionals Synthesis & Time Clauses",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-10-1",
        "term": "Trigger",
        "translation": "Activar / Desencadenar",
        "ipa": "/ˈtrɪɡər/",
        "audioText": "Trigger. It will trigger the backup plan.",
        "example": "It will trigger the backup plan.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-10-2",
        "term": "Guarantee",
        "translation": "Garantizar resultados",
        "ipa": "/ˌɡærənˈtiː/",
        "audioText": "Guarantee. We guarantee 100% security.",
        "example": "We guarantee 100% security.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-10-3",
        "term": "Mitigate",
        "translation": "Mitigar riesgos",
        "ipa": "/ˈmɪtɪɡeɪt/",
        "audioText": "Mitigate. We mitigated project risks.",
        "example": "We mitigated project risks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-10-4",
        "term": "Execute",
        "translation": "Ejecutar una estrategia",
        "ipa": "/ˈeksɪkjuːt/",
        "audioText": "Execute. Execute the plan as soon as ready.",
        "example": "Execute the plan as soon as ready.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-10-5",
        "term": "Anticipate",
        "translation": "Anticipar obstáculos",
        "ipa": "/ænˈtɪsɪpeɪt/",
        "audioText": "Anticipate. We anticipated every obstacle.",
        "example": "We anticipated every obstacle.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-10-6",
        "term": "Zero (If + Present, Present)",
        "translation": "Zero = Hecho científico | 1st = Probabilidad futura | 2nd = Hipótesis irreal.",
        "ipa": "/zero/",
        "audioText": "If I finish my project early, I will join the game; but if I had infinite money, I would buy a VR studio.",
        "example": "If I finish my project early, I will join the game; but if I had infinite money, I would buy a VR studio.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-10-7",
        "term": "We will lose unless we practice",
        "translation": "Unless ya es negativo; el verbo que le sigue va en forma afirmativa.",
        "ipa": "/we/",
        "audioText": "We will not pass the international certification exam unless we practice speaking daily.",
        "example": "We will not pass the international certification exam unless we practice speaking daily.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-10-b1",
        "prompt": "Nosotros no ganaremos el primer puesto a menos que practiquemos a diario.",
        "answer": "We will not win first place unless we practice daily",
        "tokens": [
          "We",
          "will",
          "not",
          "win",
          "first",
          "place",
          "unless",
          "we",
          "practice",
          "daily",
          "Save",
          "your"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-10-b2",
        "prompt": "Guarda tu código en la nube por si acaso tu computador se apaga.",
        "answer": "Save your code in the cloud in case your computer shuts down",
        "tokens": [
          "Save",
          "your",
          "code",
          "in",
          "the",
          "cloud",
          "case",
          "computer",
          "shuts",
          "down",
          "will",
          "first"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-10-b3",
        "prompt": "¿Qué estrategia ejecutarás tú tan pronto como comience el torneo?",
        "answer": "What strategy will you execute as soon as the tournament begins",
        "tokens": [
          "What",
          "strategy",
          "will",
          "you",
          "execute",
          "as",
          "soon",
          "the",
          "tournament",
          "begins",
          "first",
          "place"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-10-e1",
        "audioText": "Our robot will execute the autonomous course as soon as the green light turns on, provided that our optical sensors stay calibrated.",
        "correctAnswer": "Our robot will execute the autonomous course as soon as the green light turns on, provided that our optical sensors stay calibrated.",
        "options": [
          "Our robot will execute the autonomous course as soon as the green light turns on, provided that our optical sensors stay calibrated.",
          "We will not win first place unless we practice daily.",
          "Save your code in the cloud in case your computer shuts down."
        ]
      },
      {
        "id": "inter-10-e2",
        "audioText": "We will not win first place unless we practice daily.",
        "correctAnswer": "We will not win first place unless we practice daily.",
        "options": [
          "Save your code in the cloud in case your computer shuts down.",
          "We will not win first place unless we practice daily.",
          "What strategy will you execute as soon as the tournament begins?"
        ]
      },
      {
        "id": "inter-10-e3",
        "audioText": "Save your code in the cloud in case your computer shuts down.",
        "correctAnswer": "Save your code in the cloud in case your computer shuts down.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What strategy will you execute as soon as the tournament begins?",
          "Save your code in the cloud in case your computer shuts down."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-11",
    "badgeName": "Nuanced Opinions & Diplomacy in Debates",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-11-1",
        "term": "Mediate",
        "translation": "Mediar en conflictos",
        "ipa": "/ˈmiːdieɪt/",
        "audioText": "Mediate. We mediated the dispute.",
        "example": "We mediated the dispute.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-11-2",
        "term": "Reconcile",
        "translation": "Conciliar posturas",
        "ipa": "/ˈrekənsaɪl/",
        "audioText": "Reconcile. They reconciled their views.",
        "example": "They reconciled their views.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-11-3",
        "term": "Acknowledge",
        "translation": "Reconocer un hecho",
        "ipa": "/əkˈnɑːlɪdʒ/",
        "audioText": "Acknowledge. I acknowledge your point.",
        "example": "I acknowledge your point.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-11-4",
        "term": "Balance",
        "translation": "Equilibrar prioridades",
        "ipa": "/ˈbæləns/",
        "audioText": "Balance. We balanced work and rest.",
        "example": "We balanced work and rest.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-11-5",
        "term": "Reframe",
        "translation": "Reencuadrar un debate",
        "ipa": "/ˌriːˈfreɪm/",
        "audioText": "Reframe. She reframed the problem.",
        "example": "She reframed the problem.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-11-6",
        "term": "While online learning offers flexibility, in-person interaction fosters deeper empathy",
        "translation": "While abre la oración admitiendo la verdad del lado opuesto.",
        "ipa": "/while/",
        "audioText": "While it is true that digital tools save time, we must still nurture deep human connection.",
        "example": "While it is true that digital tools save time, we must still nurture deep human connection.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-11-7",
        "term": "The initial investment is substantial. Nevertheless, the long-term educational returns are priceless",
        "translation": "Conector formal de transición entre dos oraciones completas.",
        "ipa": "/the/",
        "audioText": "The implementation will require extensive training. Nevertheless, the benefits far outweigh the costs.",
        "example": "The implementation will require extensive training. Nevertheless, the benefits far outweigh the costs.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-11-b1",
        "prompt": "Si bien las herramientas digitales ahorran tiempo debemos cuidar la conexión humana.",
        "answer": "While digital tools save time we must care for human connection",
        "tokens": [
          "While",
          "digital",
          "tools",
          "save",
          "time",
          "we",
          "must",
          "care",
          "for",
          "human",
          "connection",
          "Despite",
          "initial"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-11-b2",
        "prompt": "A pesar de las dificultades iniciales nuestra iniciativa estudiantil triunfó.",
        "answer": "Despite initial difficulties our student initiative triumphed",
        "tokens": [
          "Despite",
          "initial",
          "difficulties",
          "our",
          "student",
          "initiative",
          "triumphed",
          "While",
          "digital"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-11-b3",
        "prompt": "¿Cómo podemos lograr un equilibrio justo entre la tecnología y la disciplina?",
        "answer": "How can we strike a fair balance between tech and discipline",
        "tokens": [
          "How",
          "can",
          "we",
          "strike",
          "a",
          "fair",
          "balance",
          "between",
          "tech",
          "and",
          "discipline",
          "While",
          "digital"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-11-e1",
        "audioText": "True diplomacy is not about defeating the opposing team; it is about finding common ground and striking a balance where all communities thrive together.",
        "correctAnswer": "True diplomacy is not about defeating the opposing team; it is about finding common ground and striking a balance where all communities thrive together.",
        "options": [
          "True diplomacy is not about defeating the opposing team; it is about finding common ground and striking a balance where all communities thrive together.",
          "While digital tools save time we must care for human connection.",
          "Despite initial difficulties our student initiative triumphed."
        ]
      },
      {
        "id": "inter-11-e2",
        "audioText": "While digital tools save time we must care for human connection.",
        "correctAnswer": "While digital tools save time we must care for human connection.",
        "options": [
          "Despite initial difficulties our student initiative triumphed.",
          "While digital tools save time we must care for human connection.",
          "How can we strike a fair balance between tech and discipline?"
        ]
      },
      {
        "id": "inter-11-e3",
        "audioText": "Despite initial difficulties our student initiative triumphed.",
        "correctAnswer": "Despite initial difficulties our student initiative triumphed.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How can we strike a fair balance between tech and discipline?",
          "Despite initial difficulties our student initiative triumphed."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-12",
    "badgeName": "Capstone Media Showcase & Scholarship Simulation",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "inter-12-1",
        "term": "Lead",
        "translation": "Liderar / Haber encabezado",
        "ipa": "/liːd/",
        "audioText": "Lead. I have led student initiatives.",
        "example": "I have led student initiatives.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-12-2",
        "term": "Achieve",
        "translation": "Lograr / Haber alcanzado",
        "ipa": "/əˈtʃiːv/",
        "audioText": "Achieve. We achieved top academic marks.",
        "example": "We achieved top academic marks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-12-3",
        "term": "Empower",
        "translation": "Empoderar comunidades",
        "ipa": "/ɪmˈpaʊər/",
        "audioText": "Empower. Education empowers young minds.",
        "example": "Education empowers young minds.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-12-4",
        "term": "Overcome",
        "translation": "Superar obstáculos",
        "ipa": "/ˌoʊvərˈkʌm/",
        "audioText": "Overcome. I have overcome speaking fear.",
        "example": "I have overcome speaking fear.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-12-5",
        "term": "Innovate",
        "translation": "Innovar / Crear soluciones",
        "ipa": "/ˈɪnəveɪt/",
        "audioText": "Innovate. We innovated a recycling app.",
        "example": "We innovated a recycling app.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "inter-12-6",
        "term": "Last year, our school robotics team was preparing for the national finals",
        "translation": "Usa Pasado Simple y marcadores de tiempo claros.",
        "ipa": "/last/",
        "audioText": "Last semester, our student club noticed that many younger peers were struggling with English speaking anxiety.",
        "example": "Last semester, our student club noticed that many younger peers were struggling with English speaking anxiety.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "inter-12-7",
        "term": "My responsibility was to design an interactive peer-tutoring system",
        "translation": "Define tu rol y la meta concreta que debías resolver.",
        "ipa": "/my/",
        "audioText": "My task was to design an engaging peer-mentorship workshop that would boost student confidence.",
        "example": "My task was to design an engaging peer-mentorship workshop that would boost student confidence.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "inter-12-b1",
        "prompt": "Como resultado de nuestra dedicación nosotros hemos ganado la beca de liderazgo.",
        "answer": "As a result of our dedication we have won the leadership scholarship",
        "tokens": [
          "As",
          "a",
          "result",
          "of",
          "our",
          "dedication",
          "we",
          "have",
          "won",
          "the",
          "leadership",
          "scholarship",
          "give",
          "despite"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-12-b2",
        "prompt": "Nosotros no nos rendimos a pesar de los desafíos complejos que enfrentamos.",
        "answer": "We did not give up despite the complex challenges we faced",
        "tokens": [
          "We",
          "did",
          "not",
          "give",
          "up",
          "despite",
          "the",
          "complex",
          "challenges",
          "we",
          "faced",
          "result",
          "dedication"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "inter-12-b3",
        "prompt": "¿Cómo aprovecharás tú esta experiencia internacional para transformar tu comunidad?",
        "answer": "How will you leverage this global experience to empower your community",
        "tokens": [
          "How",
          "will",
          "you",
          "leverage",
          "this",
          "global",
          "experience",
          "to",
          "empower",
          "your",
          "community",
          "result",
          "dedication"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "inter-12-e1",
        "audioText": "We are thrilled to award Santiago the Global Youth Leadership Scholarship.",
        "correctAnswer": "We are thrilled to award Santiago the Global Youth Leadership Scholarship.",
        "options": [
          "We are thrilled to award Santiago the Global Youth Leadership Scholarship.",
          "His proven resilience, eloquent communication, and clear commitment to empowering his community made his application stand out brilliantly.",
          "As a result of our dedication we have won the leadership scholarship."
        ]
      },
      {
        "id": "inter-12-e2",
        "audioText": "His proven resilience, eloquent communication, and clear commitment to empowering his community made his application stand out brilliantly.",
        "correctAnswer": "His proven resilience, eloquent communication, and clear commitment to empowering his community made his application stand out brilliantly.",
        "options": [
          "As a result of our dedication we have won the leadership scholarship.",
          "His proven resilience, eloquent communication, and clear commitment to empowering his community made his application stand out brilliantly.",
          "We did not give up despite the complex challenges we faced."
        ]
      },
      {
        "id": "inter-12-e3",
        "audioText": "As a result of our dedication we have won the leadership scholarship.",
        "correctAnswer": "As a result of our dedication we have won the leadership scholarship.",
        "options": [
          "How will you leverage this global experience to empower your community?",
          "We did not give up despite the complex challenges we faced.",
          "As a result of our dedication we have won the leadership scholarship."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-1",
    "badgeName": "Breaking News & Campus Whispers (Reported Speech)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-1-1",
        "term": "Announce",
        "translation": "Anunciar oficialmente",
        "ipa": "/əˈnaʊns/",
        "audioText": "Announce. She announced she would run.",
        "example": "She announced she would run.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-1-2",
        "term": "Claim",
        "translation": "Afirmar / Sostener",
        "ipa": "/kleɪm/",
        "audioText": "Claim. He claimed he was innocent.",
        "example": "He claimed he was innocent.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-1-3",
        "term": "Emphasize",
        "translation": "Enfatizar / Recalcar",
        "ipa": "/ˈemfəsaɪz/",
        "audioText": "Emphasize. They emphasized team unity.",
        "example": "They emphasized team unity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-1-4",
        "term": "Warn",
        "translation": "Advertir un riesgo",
        "ipa": "/wɔːrnd/",
        "audioText": "Warn. He warned us about the storm.",
        "example": "He warned us about the storm.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-1-5",
        "term": "Explain",
        "translation": "Explicar las razones",
        "ipa": "/ɪkˈspleɪn/",
        "audioText": "Explain. She explained why she was late.",
        "example": "She explained why she was late.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-1-6",
        "term": "'I study robotics' ➔ He said that he studied robotics",
        "translation": "Cambia el verbo principal al tiempo pasado equivalente.",
        "ipa": "/i/",
        "audioText": "Sofia said that she was designing an eco-friendly mobile app for our school community.",
        "example": "Sofia said that she was designing an eco-friendly mobile app for our school community.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-1-7",
        "term": "'I will help you' ➔ She said she would help me",
        "translation": "Los modales auxiliares retroceden un paso en el tiempo.",
        "ipa": "/i/",
        "audioText": "The teacher announced that all students would receive digital certificates next Monday.",
        "example": "The teacher announced that all students would receive digital certificates next Monday.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-1-b1",
        "prompt": "Sofía dijo que ella estaba diseñando una app móvil ecológica.",
        "answer": "Sofia said that she was designing an eco friendly mobile app",
        "tokens": [
          "Sofia",
          "said",
          "that",
          "she",
          "was",
          "designing",
          "an",
          "eco",
          "friendly",
          "mobile",
          "app",
          "teacher",
          "told"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-1-b2",
        "prompt": "El profesor nos dijo a nosotros que el examen se realizaría el lunes.",
        "answer": "The teacher told us that the exam would take place on Monday",
        "tokens": [
          "The",
          "teacher",
          "told",
          "us",
          "that",
          "the",
          "exam",
          "would",
          "take",
          "place",
          "on",
          "Monday",
          "Sofia",
          "said"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-1-b3",
        "prompt": "¿Qué solución declaró el director de tecnología que implementaría?",
        "answer": "What solution did the tech director state he would implement",
        "tokens": [
          "What",
          "solution",
          "did",
          "the",
          "tech",
          "director",
          "state",
          "he",
          "would",
          "implement",
          "Sofia",
          "said"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-1-e1",
        "audioText": "The student council announced that the cultural talent gala would take place this Friday evening in the main auditorium.",
        "correctAnswer": "The student council announced that the cultural talent gala would take place this Friday evening in the main auditorium.",
        "options": [
          "The student council announced that the cultural talent gala would take place this Friday evening in the main auditorium.",
          "Sofia said that she was designing an eco-friendly mobile app.",
          "The teacher told us that the exam would take place on Monday."
        ]
      },
      {
        "id": "advanced-1-e2",
        "audioText": "Sofia said that she was designing an eco-friendly mobile app.",
        "correctAnswer": "Sofia said that she was designing an eco-friendly mobile app.",
        "options": [
          "The teacher told us that the exam would take place on Monday.",
          "Sofia said that she was designing an eco-friendly mobile app.",
          "What solution did the tech director state he would implement?"
        ]
      },
      {
        "id": "advanced-1-e3",
        "audioText": "The teacher told us that the exam would take place on Monday.",
        "correctAnswer": "The teacher told us that the exam would take place on Monday.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What solution did the tech director state he would implement?",
          "The teacher told us that the exam would take place on Monday."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-2",
    "badgeName": "Secret Interviews & Interrogations (Reported Questions)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-2-1",
        "term": "Inquire",
        "translation": "Indagar formalmente",
        "ipa": "/ɪnˈkwaɪər/",
        "audioText": "Inquire. He inquired if I was ready.",
        "example": "He inquired if I was ready.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-2-2",
        "term": "Instruct",
        "translation": "Instruir / Dar orden",
        "ipa": "/ɪnˈstrʌkt/",
        "audioText": "Instruct. She instructed us to begin.",
        "example": "She instructed us to begin.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-2-3",
        "term": "Remind",
        "translation": "Recordar a alguien",
        "ipa": "/rɪˈmaɪnd/",
        "audioText": "Remind. He reminded me to call.",
        "example": "He reminded me to call.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-2-4",
        "term": "Urge",
        "translation": "Instar / Urgir con fuerza",
        "ipa": "/ɜːrdʒ/",
        "audioText": "Urge. They urged us to stay calm.",
        "example": "They urged us to stay calm.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-2-5",
        "term": "Advise",
        "translation": "Aconsejar qué hacer",
        "ipa": "/ədˈvaɪz/",
        "audioText": "Advise. She advised me to study.",
        "example": "She advised me to study.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-2-6",
        "term": "'Do you speak English?' ➔ He asked me if I spoke English",
        "translation": "Usa 'if' o 'whether' seguido de estructura afirmativa sin do/does/did.",
        "ipa": "/do/",
        "audioText": "The interviewer asked me if I had experience leading collaborative student projects.",
        "example": "The interviewer asked me if I had experience leading collaborative student projects.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-2-7",
        "term": "'Where do you live?' ➔ She asked where I lived (¡Sujeto antes de verbo!)",
        "translation": "Mantén la palabra Wh- y coloca inmediatamente el sujeto y luego el verbo conjugado.",
        "ipa": "/where/",
        "audioText": "The science jury asked our team how we had programmed the autonomous navigation algorithm.",
        "example": "The science jury asked our team how we had programmed the autonomous navigation algorithm.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-2-b1",
        "prompt": "El entrevistador me preguntó si yo tenía experiencia liderando proyectos.",
        "answer": "The interviewer asked me if I had experience leading projects",
        "tokens": [
          "The",
          "interviewer",
          "asked",
          "me",
          "if",
          "I",
          "had",
          "experience",
          "leading",
          "projects",
          "professor",
          "warned"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-2-b2",
        "prompt": "El profesor nos advirtió a nosotros que no tocáramos los químicos.",
        "answer": "The professor warned us not to touch the chemicals",
        "tokens": [
          "The",
          "professor",
          "warned",
          "us",
          "not",
          "to",
          "touch",
          "the",
          "chemicals",
          "interviewer",
          "asked"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-2-b3",
        "prompt": "¿Qué te preguntó el panel de la beca con respecto a tu liderazgo?",
        "answer": "What did the scholarship panel ask you regarding your leadership",
        "tokens": [
          "What",
          "did",
          "the",
          "scholarship",
          "panel",
          "ask",
          "you",
          "regarding",
          "your",
          "leadership",
          "interviewer",
          "asked"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-2-e1",
        "audioText": "The scholarship committee asked me why I wanted to study environmental engineering, and they inquired if I had led any sustainability projects in my hometown.",
        "correctAnswer": "The scholarship committee asked me why I wanted to study environmental engineering, and they inquired if I had led any sustainability projects in my hometown.",
        "options": [
          "The scholarship committee asked me why I wanted to study environmental engineering, and they inquired if I had led any sustainability projects in my hometown.",
          "The interviewer asked me if I had experience leading projects.",
          "The professor warned us not to touch the chemicals."
        ]
      },
      {
        "id": "advanced-2-e2",
        "audioText": "The interviewer asked me if I had experience leading projects.",
        "correctAnswer": "The interviewer asked me if I had experience leading projects.",
        "options": [
          "The professor warned us not to touch the chemicals.",
          "The interviewer asked me if I had experience leading projects.",
          "What did the scholarship panel ask you regarding your leadership?"
        ]
      },
      {
        "id": "advanced-2-e3",
        "audioText": "The professor warned us not to touch the chemicals.",
        "correctAnswer": "The professor warned us not to touch the chemicals.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What did the scholarship panel ask you regarding your leadership?",
          "The professor warned us not to touch the chemicals."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-3",
    "badgeName": "Mastering Relative Clauses (Defining vs Non-Defining)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-3-1",
        "term": "Pioneer",
        "translation": "Ser pionero en un campo",
        "ipa": "/ˌpaɪəˈnɪr/",
        "audioText": "Pioneer. She pioneered clean solar tech.",
        "example": "She pioneered clean solar tech.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-3-2",
        "term": "Revolutionize",
        "translation": "Revolucionar una industria",
        "ipa": "/ˌrevəˈluːʃənaɪz/",
        "audioText": "Revolutionize. It revolutionized gaming.",
        "example": "It revolutionized gaming.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-3-3",
        "term": "Patent",
        "translation": "Patentar un invento",
        "ipa": "/ˈpætnt/",
        "audioText": "Patent. He patented the new battery.",
        "example": "He patented the new battery.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-3-4",
        "term": "Unveil",
        "translation": "Revelar / Presentar al público",
        "ipa": "/ʌnˈveɪl/",
        "audioText": "Unveil. They unveiled the new drone.",
        "example": "They unveiled the new drone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-3-5",
        "term": "Transform",
        "translation": "Transformar vidas",
        "ipa": "/trænsˈfɔːrm/",
        "audioText": "Transform. It transformed the city.",
        "example": "It transformed the city.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-3-6",
        "term": "The student who won the award",
        "translation": "Información esencial que especifica de quién o qué se trata.",
        "ipa": "/the/",
        "audioText": "Students who dedicate thirty minutes daily to English speaking develop authentic conversational fluency.",
        "example": "Students who dedicate thirty minutes daily to English speaking develop authentic conversational fluency.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-3-7",
        "term": "Medellin, which is known as the City of Eternal Spring, has an innovative metro system",
        "translation": "Añade un dato complementario entre dos comas; NUNCA uses 'that'.",
        "ipa": "/medellin/",
        "audioText": "Sofia, who is the president of our student council, organized an inspiring environmental hackathon.",
        "example": "Sofia, who is the president of our student council, organized an inspiring environmental hackathon.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-3-b1",
        "prompt": "Sofía quien es nuestra líder organizó un hackathon ambiental inspirador.",
        "answer": "Sofia who is our leader organized an inspiring environmental hackathon",
        "tokens": [
          "Sofia",
          "who",
          "is",
          "our",
          "leader",
          "organized",
          "an",
          "inspiring",
          "environmental",
          "hackathon",
          "interviewed",
          "scientist"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-3-b2",
        "prompt": "Nosotros entrevistamos a una científica cuya investigación ganó un premio.",
        "answer": "We interviewed a scientist whose research won an international award",
        "tokens": [
          "We",
          "interviewed",
          "a",
          "scientist",
          "whose",
          "research",
          "won",
          "an",
          "international",
          "award",
          "Sofia",
          "leader"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-3-b3",
        "prompt": "¿Quién es el creador pionero cuyo avance tecnológico admiras más?",
        "answer": "Who is the pioneering creator whose breakthrough you admire most",
        "tokens": [
          "Who",
          "is",
          "the",
          "pioneering",
          "creator",
          "whose",
          "breakthrough",
          "you",
          "admire",
          "most",
          "Sofia",
          "leader"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-3-e1",
        "audioText": "Rodriguez, whose pioneering algorithm was published in Nature magazine, developed a quantum sensor which can detect underground aquifers with unprecedented precision.",
        "correctAnswer": "Rodriguez, whose pioneering algorithm was published in Nature magazine, developed a quantum sensor which can detect underground aquifers with unprecedented precision.",
        "options": [
          "Rodriguez, whose pioneering algorithm was published in Nature magazine, developed a quantum sensor which can detect underground aquifers with unprecedented precision.",
          "Sofia who is our leader organized an inspiring environmental hackathon.",
          "We interviewed a scientist whose research won an international award."
        ]
      },
      {
        "id": "advanced-3-e2",
        "audioText": "Sofia who is our leader organized an inspiring environmental hackathon.",
        "correctAnswer": "Sofia who is our leader organized an inspiring environmental hackathon.",
        "options": [
          "We interviewed a scientist whose research won an international award.",
          "Sofia who is our leader organized an inspiring environmental hackathon.",
          "Who is the pioneering creator whose breakthrough you admire most?"
        ]
      },
      {
        "id": "advanced-3-e3",
        "audioText": "We interviewed a scientist whose research won an international award.",
        "correctAnswer": "We interviewed a scientist whose research won an international award.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Who is the pioneering creator whose breakthrough you admire most?",
          "We interviewed a scientist whose research won an international award."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-4",
    "badgeName": "Tech Disruptions & Modern Inventions (Passive Voice)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-4-1",
        "term": "Manufacture",
        "translation": "Fabricar en masa",
        "ipa": "/ˌmænjuˈfæktʃər/",
        "audioText": "Manufacture. Chips are manufactured here.",
        "example": "Chips are manufactured here.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-4-2",
        "term": "Engineer",
        "translation": "Diseñar con ingeniería",
        "ipa": "/ˌendʒɪˈnɪr/",
        "audioText": "Engineer. It was engineered for speed.",
        "example": "It was engineered for speed.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-4-3",
        "term": "Release",
        "translation": "Lanzar al mercado",
        "ipa": "/rɪˈliːs/",
        "audioText": "Release. The app was released today.",
        "example": "The app was released today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-4-4",
        "term": "Power",
        "translation": "Impulsar con energía",
        "ipa": "/ˈpaʊər/",
        "audioText": "Power. It is powered by solar power.",
        "example": "It is powered by solar power.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-4-5",
        "term": "Equip",
        "translation": "Equipar con tecnología",
        "ipa": "/ɪˈkwɪp/",
        "audioText": "Equip. Drones are equipped with cameras.",
        "example": "Drones are equipped with cameras.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-4-6",
        "term": "Smartphones are manufactured in high-tech factories",
        "translation": "Usa is/are para procesos habituales o hechos presentes.",
        "ipa": "/smartphones/",
        "audioText": "Cutting-edge mobile applications are developed by talented teenagers around the world.",
        "example": "Cutting-edge mobile applications are developed by talented teenagers around the world.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-4-7",
        "term": "The world wide web was invented in 1989",
        "translation": "Usa was/were para inventos y sucesos históricos concluidos.",
        "ipa": "/the/",
        "audioText": "The world's first modern electric vehicle was designed by visionary engineers decades ago.",
        "example": "The world's first modern electric vehicle was designed by visionary engineers decades ago.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-4-b1",
        "prompt": "Este portátil ecológico está diseñado con plásticos reciclados del océano.",
        "answer": "This eco laptop is engineered with recycled ocean plastics",
        "tokens": [
          "This",
          "eco",
          "laptop",
          "is",
          "engineered",
          "with",
          "recycled",
          "ocean",
          "plastics",
          "User",
          "passwords"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-4-b2",
        "prompt": "Las contraseñas de usuarios no son almacenadas en texto plano sin seguridad.",
        "answer": "User passwords are not stored in insecure plain text",
        "tokens": [
          "User",
          "passwords",
          "are",
          "not",
          "stored",
          "in",
          "insecure",
          "plain",
          "text",
          "This",
          "laptop"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-4-b3",
        "prompt": "¿Fue este sistema de filtración probado en comunidades rurales?",
        "answer": "Was this filtration system tested in rural communities",
        "tokens": [
          "Was",
          "this",
          "filtration",
          "system",
          "tested",
          "in",
          "rural",
          "communities",
          "laptop",
          "engineered"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-4-e1",
        "audioText": "This autonomous search-and-rescue drone was developed in Bogota.",
        "correctAnswer": "This autonomous search-and-rescue drone was developed in Bogota.",
        "options": [
          "This autonomous search-and-rescue drone was developed in Bogota.",
          "It is equipped with thermal night-vision cameras and it is powered by solar-rechargeable batteries.",
          "This eco laptop is engineered with recycled ocean plastics."
        ]
      },
      {
        "id": "advanced-4-e2",
        "audioText": "It is equipped with thermal night-vision cameras and it is powered by solar-rechargeable batteries.",
        "correctAnswer": "It is equipped with thermal night-vision cameras and it is powered by solar-rechargeable batteries.",
        "options": [
          "This eco laptop is engineered with recycled ocean plastics.",
          "It is equipped with thermal night-vision cameras and it is powered by solar-rechargeable batteries.",
          "User passwords are not stored in insecure plain text."
        ]
      },
      {
        "id": "advanced-4-e3",
        "audioText": "This eco laptop is engineered with recycled ocean plastics.",
        "correctAnswer": "This eco laptop is engineered with recycled ocean plastics.",
        "options": [
          "Was this filtration system tested in rural communities?",
          "User passwords are not stored in insecure plain text.",
          "This eco laptop is engineered with recycled ocean plastics."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-5",
    "badgeName": "Global News Reports & Scientific Discoveries (Advanced Passive)",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-5-1",
        "term": "Decode",
        "translation": "Decodificar / Haber sido decodificado",
        "ipa": "/diːˈkoʊd/",
        "audioText": "Decode. DNA has been decoded.",
        "example": "DNA has been decoded.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-5-2",
        "term": "Launch",
        "translation": "Lanzar / Ser lanzado al espacio",
        "ipa": "/lɔːntʃ/",
        "audioText": "Launch. The probe will be launched.",
        "example": "The probe will be launched.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-5-3",
        "term": "Ratify",
        "translation": "Ratificar un tratado",
        "ipa": "/ˈrætɪfaɪ/",
        "audioText": "Ratify. The pact has been ratified.",
        "example": "The pact has been ratified.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-5-4",
        "term": "Preserve",
        "translation": "Preservar / Ser preservado",
        "ipa": "/prɪˈzɜːrv/",
        "audioText": "Preserve. Forests must be preserved.",
        "example": "Forests must be preserved.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-5-5",
        "term": "Synthesize",
        "translation": "Sintetizar en laboratorio",
        "ipa": "/ˈsɪnθəsaɪz/",
        "audioText": "Synthesize. The vaccine was synthesized.",
        "example": "The vaccine was synthesized.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-5-6",
        "term": "A new exoplanet has been discovered",
        "translation": "Usa has/have been para logros recientes que tienen impacto en el presente.",
        "ipa": "/a/",
        "audioText": "An unprecedented ancient Mayan fortress has been discovered beneath dense jungle canopy.",
        "example": "An unprecedented ancient Mayan fortress has been discovered beneath dense jungle canopy.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-5-7",
        "term": "The James Webb successor will be launched",
        "translation": "Usa will be para proyectos e iniciativas futuras confirmadas.",
        "ipa": "/the/",
        "audioText": "The revolutionary clean fusion reactor will be inaugurated by international scientists next year.",
        "example": "The revolutionary clean fusion reactor will be inaugurated by international scientists next year.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-5-b1",
        "prompt": "Un observatorio de espacio profundo será desplegado el próximo año.",
        "answer": "A deep space observatory will be deployed next year",
        "tokens": [
          "A",
          "deep",
          "space",
          "observatory",
          "will",
          "be",
          "deployed",
          "next",
          "year",
          "Paramo",
          "ecosystems"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-5-b2",
        "prompt": "Los ecosistemas de páramo deben ser protegidos de la minería ilegal.",
        "answer": "Paramo ecosystems must be protected from illegal mining",
        "tokens": [
          "Paramo",
          "ecosystems",
          "must",
          "be",
          "protected",
          "from",
          "illegal",
          "mining",
          "deep",
          "space"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-5-b3",
        "prompt": "¿Ha sido este algoritmo cuántico probado por expertos en ciberseguridad?",
        "answer": "Has this quantum algorithm been tested by cybersecurity experts",
        "tokens": [
          "Has",
          "this",
          "quantum",
          "algorithm",
          "been",
          "tested",
          "by",
          "cybersecurity",
          "experts",
          "deep",
          "space"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-5-e1",
        "audioText": "A permanent lunar scientific base will be established by 2028, and vital oxygen extraction technologies have already been successfully tested.",
        "correctAnswer": "A permanent lunar scientific base will be established by 2028, and vital oxygen extraction technologies have already been successfully tested.",
        "options": [
          "A permanent lunar scientific base will be established by 2028, and vital oxygen extraction technologies have already been successfully tested.",
          "A deep space observatory will be deployed next year.",
          "Paramo ecosystems must be protected from illegal mining."
        ]
      },
      {
        "id": "advanced-5-e2",
        "audioText": "A deep space observatory will be deployed next year.",
        "correctAnswer": "A deep space observatory will be deployed next year.",
        "options": [
          "Paramo ecosystems must be protected from illegal mining.",
          "A deep space observatory will be deployed next year.",
          "Has this quantum algorithm been tested by cybersecurity experts?"
        ]
      },
      {
        "id": "advanced-5-e3",
        "audioText": "Paramo ecosystems must be protected from illegal mining.",
        "correctAnswer": "Paramo ecosystems must be protected from illegal mining.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Has this quantum algorithm been tested by cybersecurity experts?",
          "Paramo ecosystems must be protected from illegal mining."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-6",
    "badgeName": "Authentic Teen Idioms & Expressions in Daily Contexts",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-6-1",
        "term": "Bite the bullet",
        "translation": "Afrontar con coraje",
        "ipa": "/baɪt ðə ˈbʊlɪt/",
        "audioText": "Bite the bullet. I bit the bullet and spoke.",
        "example": "I bit the bullet and spoke.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-6-2",
        "term": "Hit the nail",
        "translation": "Dar en el clavo",
        "ipa": "/hɪt ðə neɪl/",
        "audioText": "Hit the nail. You hit the nail on the head.",
        "example": "You hit the nail on the head.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-6-3",
        "term": "Cut corners",
        "translation": "Tomar atajos mediocres",
        "ipa": "/kʌt ˈkɔːrnərz/",
        "audioText": "Cut corners. Never cut corners on quality.",
        "example": "Never cut corners on quality.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-6-4",
        "term": "Burn the midnight oil",
        "translation": "Trasnochar trabajando",
        "ipa": "/bɜːrn ðə ˈmɪdnaɪt ɔɪl/",
        "audioText": "Burn the midnight oil. We burned the midnight oil.",
        "example": "We burned the midnight oil.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-6-5",
        "term": "See eye to eye",
        "translation": "Estar de acuerdo",
        "ipa": "/siː aɪ tuː aɪ/",
        "audioText": "See eye to eye. We see eye to eye on this.",
        "example": "We see eye to eye on this.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-6-6",
        "term": "Bite the bullet (afrontar una situación difícil con coraje / hacer de tripas corazón)",
        "translation": "Se usa cuando debes hacer algo inevitable y desafiante sin quejarte.",
        "ipa": "/bite/",
        "audioText": "I was terrified of public speaking, but I bit the bullet and delivered the graduation keynote.",
        "example": "I was terrified of public speaking, but I bit the bullet and delivered the graduation keynote.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-6-7",
        "term": "A blessing in disguise (un mal que por bien no viene / una bendición disfrazada)",
        "translation": "Describe una aparente desgracia que termina trayendo un gran beneficio.",
        "ipa": "/a/",
        "audioText": "Losing that first game was a blessing in disguise because it forced our team to train with real discipline.",
        "example": "Losing that first game was a blessing in disguise because it forced our team to train with real discipline.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-6-b1",
        "prompt": "Ese tropiezo inicial fue verdaderamente una bendición disfrazada para nosotros.",
        "answer": "That initial setback was truly a blessing in disguise for us",
        "tokens": [
          "That",
          "initial",
          "setback",
          "was",
          "truly",
          "a",
          "blessing",
          "in",
          "disguise",
          "for",
          "us",
          "nail",
          "head"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-6-b2",
        "prompt": "Tú diste en el clavo cuando dijiste que la constancia supera al talento.",
        "answer": "You hit the nail on the head about consistency beating talent",
        "tokens": [
          "You",
          "hit",
          "the",
          "nail",
          "on",
          "head",
          "about",
          "consistency",
          "beating",
          "talent",
          "That",
          "initial"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-6-b3",
        "prompt": "¿Cómo manejas tú las reuniones cuando no están todos de acuerdo?",
        "answer": "How do you handle meetings when peers do not see eye to eye",
        "tokens": [
          "How",
          "do",
          "you",
          "handle",
          "meetings",
          "when",
          "peers",
          "not",
          "see",
          "eye",
          "to",
          "That",
          "initial"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-6-e1",
        "audioText": "Being rejected from the regional art contest was painful at first, but it turned out to be a blessing in disguise because it motivated me to master digital 3D illustration.",
        "correctAnswer": "Being rejected from the regional art contest was painful at first, but it turned out to be a blessing in disguise because it motivated me to master digital 3D illustration.",
        "options": [
          "Being rejected from the regional art contest was painful at first, but it turned out to be a blessing in disguise because it motivated me to master digital 3D illustration.",
          "That initial setback was truly a blessing in disguise for us.",
          "You hit the nail on the head about consistency beating talent."
        ]
      },
      {
        "id": "advanced-6-e2",
        "audioText": "That initial setback was truly a blessing in disguise for us.",
        "correctAnswer": "That initial setback was truly a blessing in disguise for us.",
        "options": [
          "You hit the nail on the head about consistency beating talent.",
          "That initial setback was truly a blessing in disguise for us.",
          "How do you handle meetings when peers do not see eye to eye?"
        ]
      },
      {
        "id": "advanced-6-e3",
        "audioText": "You hit the nail on the head about consistency beating talent.",
        "correctAnswer": "You hit the nail on the head about consistency beating talent.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How do you handle meetings when peers do not see eye to eye?",
          "You hit the nail on the head about consistency beating talent."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-7",
    "badgeName": "Advanced Phrasal Verbs in High-Stakes Leadership & Problem Solving",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-7-1",
        "term": "Step up",
        "translation": "Asumir el liderazgo",
        "ipa": "/step ʌp/",
        "audioText": "Step up. She stepped up to lead.",
        "example": "She stepped up to lead.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-7-2",
        "term": "Iron out",
        "translation": "Limar asperezas / Resolver",
        "ipa": "/ˈaɪərn aʊt/",
        "audioText": "Iron out. We ironed out our disputes.",
        "example": "We ironed out our disputes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-7-3",
        "term": "Bridge the gap",
        "translation": "Cerrar la brecha",
        "ipa": "/brɪdʒ ðə ɡæp/",
        "audioText": "Bridge the gap. They bridged the digital gap.",
        "example": "They bridged the digital gap.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-7-4",
        "term": "Look into",
        "translation": "Investigar a fondo",
        "ipa": "/lʊk ˈɪntuː/",
        "audioText": "Look into. I will look into the bug.",
        "example": "I will look into the bug.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-7-5",
        "term": "Hammer out",
        "translation": "Concretar un acuerdo",
        "ipa": "/ˈhæmər aʊt/",
        "audioText": "Hammer out. We hammered out a deal.",
        "example": "We hammered out a deal.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-7-6",
        "term": "Step up (dar un paso al frente)",
        "translation": "Usa step up cuando una situación requiere que alguien tome la iniciativa.",
        "ipa": "/step/",
        "audioText": "When our captain was absent, Mateo stepped up and led our robotics squad with remarkable poise.",
        "example": "When our captain was absent, Mateo stepped up and led our robotics squad with remarkable poise.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-7-7",
        "term": "Iron out (limar asperezas / resolver pequeños detalles problemáticos)",
        "translation": "Iron out es separable: 'iron out the bugs' o 'iron them out'.",
        "ipa": "/iron/",
        "audioText": "After an intense discussion, both student factions managed to iron out their policy disagreements.",
        "example": "After an intense discussion, both student factions managed to iron out their policy disagreements.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-7-b1",
        "prompt": "Cuando surgió la crisis Mariana dio un paso al frente y lideró la reunión.",
        "answer": "When crisis struck Mariana stepped up and led the meeting",
        "tokens": [
          "When",
          "crisis",
          "struck",
          "Mariana",
          "stepped",
          "up",
          "and",
          "led",
          "the",
          "meeting",
          "They",
          "promised"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-7-b2",
        "prompt": "Ellos prometieron que no se retirarían del acuerdo de financiamiento.",
        "answer": "They promised they would not back out of the agreement",
        "tokens": [
          "They",
          "promised",
          "they",
          "would",
          "not",
          "back",
          "out",
          "of",
          "the",
          "agreement",
          "When",
          "crisis"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-7-b3",
        "prompt": "¿Cómo podemos cerrar la brecha de comunicación entre estudiantes y directivas?",
        "answer": "How can we bridge the communication gap between students and staff",
        "tokens": [
          "How",
          "can",
          "we",
          "bridge",
          "the",
          "communication",
          "gap",
          "between",
          "students",
          "and",
          "staff",
          "When",
          "crisis"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-7-e1",
        "audioText": "When our main cloud provider suffered an outage, our technical team stepped up immediately to iron out the server bugs and hammer out a failover protocol.",
        "correctAnswer": "When our main cloud provider suffered an outage, our technical team stepped up immediately to iron out the server bugs and hammer out a failover protocol.",
        "options": [
          "When our main cloud provider suffered an outage, our technical team stepped up immediately to iron out the server bugs and hammer out a failover protocol.",
          "When crisis struck Mariana stepped up and led the meeting.",
          "They promised they would not back out of the agreement."
        ]
      },
      {
        "id": "advanced-7-e2",
        "audioText": "When crisis struck Mariana stepped up and led the meeting.",
        "correctAnswer": "When crisis struck Mariana stepped up and led the meeting.",
        "options": [
          "They promised they would not back out of the agreement.",
          "When crisis struck Mariana stepped up and led the meeting.",
          "How can we bridge the communication gap between students and staff?"
        ]
      },
      {
        "id": "advanced-7-e3",
        "audioText": "They promised they would not back out of the agreement.",
        "correctAnswer": "They promised they would not back out of the agreement.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How can we bridge the communication gap between students and staff?",
          "They promised they would not back out of the agreement."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-8",
    "badgeName": "The Great AI & Ethics Student Forum",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-8-1",
        "term": "Substantiate",
        "translation": "Fundamentar con pruebas",
        "ipa": "/səbˈstænʃieɪt/",
        "audioText": "Substantiate. She substantiated her thesis.",
        "example": "She substantiated her thesis.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-8-2",
        "term": "Rebut",
        "translation": "Refutar formalmente",
        "ipa": "/rɪˈbʌt/",
        "audioText": "Rebut. He rebutted the opposing claim.",
        "example": "He rebutted the opposing claim.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-8-3",
        "term": "Challenge",
        "translation": "Cuestionar una premisa",
        "ipa": "/ˈtʃælɪndʒ/",
        "audioText": "Challenge. I challenge that assumption.",
        "example": "I challenge that assumption.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-8-4",
        "term": "Advocate",
        "translation": "Defender una causa",
        "ipa": "/ˈædvəkeɪt/",
        "audioText": "Advocate. We advocate for human ethics.",
        "example": "We advocate for human ethics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-8-5",
        "term": "Erode",
        "translation": "Erosionar / Desgastar",
        "ipa": "/ɪˈroʊd/",
        "audioText": "Erode. Bias erodes democratic trust.",
        "example": "Bias erodes democratic trust.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-8-6",
        "term": "Granted that technology accelerates research, human critical thinking must guide the outcome",
        "translation": "Granted that concede un punto al rival antes de asestar tu argumento definitivo.",
        "ipa": "/granted/",
        "audioText": "Granted that generative AI accelerates coding workflows, nonetheless deep human ethical reasoning remains irreplaceable.",
        "example": "Granted that generative AI accelerates coding workflows, nonetheless deep human ethical reasoning remains irreplaceable.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-8-7",
        "term": "I must challenge the underlying assumption that algorithms are entirely objective",
        "translation": "Desmonta la base lógica de tu oponente señalando sus sesgos o falta de evidencia.",
        "ipa": "/i/",
        "audioText": "I must challenge the premise that automated grading systems can accurately evaluate creative human expression.",
        "example": "I must challenge the premise that automated grading systems can accurately evaluate creative human expression.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-8-b1",
        "prompt": "Admitiendo que la IA es rápida el razonamiento ético humano es irremplazable.",
        "answer": "Granted that AI is fast human ethical reasoning is irreplaceable",
        "tokens": [
          "Granted",
          "that",
          "AI",
          "is",
          "fast",
          "human",
          "ethical",
          "reasoning",
          "irreplaceable",
          "must",
          "challenge"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-8-b2",
        "prompt": "Debo cuestionar la premisa de que los algoritmos son siempre objetivos.",
        "answer": "I must challenge the premise that algorithms are always objective",
        "tokens": [
          "I",
          "must",
          "challenge",
          "the",
          "premise",
          "that",
          "algorithms",
          "are",
          "always",
          "objective",
          "Granted",
          "fast"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-8-b3",
        "prompt": "¿Puede la parte contraria fundamentar su afirmación con pruebas empíricas?",
        "answer": "Can the opposing side substantiate their claim with empirical proof",
        "tokens": [
          "Can",
          "the",
          "opposing",
          "side",
          "substantiate",
          "their",
          "claim",
          "with",
          "empirical",
          "proof",
          "Granted",
          "that"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-8-e1",
        "audioText": "The proposition team won the debate because they substantiated their claims with empirical evidence regarding algorithmic bias, whereas the opposition relied on unproven assumptions.",
        "correctAnswer": "The proposition team won the debate because they substantiated their claims with empirical evidence regarding algorithmic bias, whereas the opposition relied on unproven assumptions.",
        "options": [
          "The proposition team won the debate because they substantiated their claims with empirical evidence regarding algorithmic bias, whereas the opposition relied on unproven assumptions.",
          "Granted that AI is fast human ethical reasoning is irreplaceable.",
          "I must challenge the premise that algorithms are always objective."
        ]
      },
      {
        "id": "advanced-8-e2",
        "audioText": "Granted that AI is fast human ethical reasoning is irreplaceable.",
        "correctAnswer": "Granted that AI is fast human ethical reasoning is irreplaceable.",
        "options": [
          "I must challenge the premise that algorithms are always objective.",
          "Granted that AI is fast human ethical reasoning is irreplaceable.",
          "Can the opposing side substantiate their claim with empirical proof?"
        ]
      },
      {
        "id": "advanced-8-e3",
        "audioText": "I must challenge the premise that algorithms are always objective.",
        "correctAnswer": "I must challenge the premise that algorithms are always objective.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Can the opposing side substantiate their claim with empirical proof?",
          "I must challenge the premise that algorithms are always objective."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-9",
    "badgeName": "Crisis Management & Global Environmental Summits",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-9-1",
        "term": "Enact",
        "translation": "Promulgar una ley ambiental",
        "ipa": "/ɪˈnækt/",
        "audioText": "Enact. They enacted strict climate laws.",
        "example": "They enacted strict climate laws.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-9-2",
        "term": "Halt",
        "translation": "Detener / Frenar la crisis",
        "ipa": "/hɔːlt/",
        "audioText": "Halt. We must halt deforestation.",
        "example": "We must halt deforestation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-9-3",
        "term": "Restore",
        "translation": "Restaurar ecosistemas",
        "ipa": "/rɪˈstɔːr/",
        "audioText": "Restore. We restored the wetland.",
        "example": "We restored the wetland.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-9-4",
        "term": "Commit",
        "translation": "Comprometerse con una meta",
        "ipa": "/kəˈmɪt/",
        "audioText": "Commit. Nations committed to net zero.",
        "example": "Nations committed to net zero.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-9-5",
        "term": "Mitigate",
        "translation": "Mitigar el impacto climático",
        "ipa": "/ˈmɪtɪɡeɪt/",
        "audioText": "Mitigate. Solar tech mitigates warming.",
        "example": "Solar tech mitigates warming.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-9-6",
        "term": "If we had invested in renewable energy, our cities would be carbon-neutral today",
        "translation": "La acción del pasado no ocurrió, pero si hubiera ocurrido, cambiaría la realidad actual.",
        "ipa": "/if/",
        "audioText": "If humanity had acted decisively on climate science twenty years ago, our planet would not be facing severe droughts today.",
        "example": "If humanity had acted decisively on climate science twenty years ago, our planet would not be facing severe droughts today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-9-7",
        "term": "If I were more confident, I would have applied for that international scholarship last semester",
        "translation": "Una cualidad del presente afectó una oportunidad en el pasado.",
        "ipa": "/if/",
        "audioText": "If our student team were not so resilient, we would have given up after the initial setback.",
        "example": "If our student team were not so resilient, we would have given up after the initial setback.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-9-b1",
        "prompt": "Si hubiéramos actuado hace veinte años nuestro planeta no estaría en crisis hoy.",
        "answer": "If we had acted twenty years ago our planet wouldn t be in crisis today",
        "tokens": [
          "If",
          "we",
          "had",
          "acted",
          "twenty",
          "years",
          "ago",
          "our",
          "planet",
          "wouldn",
          "t",
          "be",
          "in",
          "crisis",
          "today",
          "Mateo",
          "hadn"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-9-b2",
        "prompt": "Si Mateo no hubiera aprendido a programar no estaría desarrollando robótica hoy.",
        "answer": "If Mateo hadn t learned to code he wouldn t be building robotics today",
        "tokens": [
          "If",
          "Mateo",
          "hadn",
          "t",
          "learned",
          "to",
          "code",
          "he",
          "wouldn",
          "be",
          "building",
          "robotics",
          "today",
          "acted",
          "twenty"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-9-b3",
        "prompt": "¿Estarían los océanos más limpios hoy si hubiéramos prohibido los plásticos antes?",
        "answer": "Would oceans be cleaner today if we had banned plastics earlier",
        "tokens": [
          "Would",
          "oceans",
          "be",
          "cleaner",
          "today",
          "if",
          "we",
          "had",
          "banned",
          "plastics",
          "earlier",
          "acted",
          "twenty"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-9-e1",
        "audioText": "If humanity had invested in solar and geothermal technologies thirty years ago, our global energy grid would be completely clean and affordable today.",
        "correctAnswer": "If humanity had invested in solar and geothermal technologies thirty years ago, our global energy grid would be completely clean and affordable today.",
        "options": [
          "If humanity had invested in solar and geothermal technologies thirty years ago, our global energy grid would be completely clean and affordable today.",
          "If we had acted twenty years ago our planet wouldn't be in crisis today.",
          "If Mateo hadn't learned to code he wouldn't be building robotics today."
        ]
      },
      {
        "id": "advanced-9-e2",
        "audioText": "If we had acted twenty years ago our planet wouldn't be in crisis today.",
        "correctAnswer": "If we had acted twenty years ago our planet wouldn't be in crisis today.",
        "options": [
          "If Mateo hadn't learned to code he wouldn't be building robotics today.",
          "If we had acted twenty years ago our planet wouldn't be in crisis today.",
          "Would oceans be cleaner today if we had banned plastics earlier?"
        ]
      },
      {
        "id": "advanced-9-e3",
        "audioText": "If Mateo hadn't learned to code he wouldn't be building robotics today.",
        "correctAnswer": "If Mateo hadn't learned to code he wouldn't be building robotics today.",
        "options": [
          "If Mateo hadn't learned to code he wouldn't be building robotics evening.",
          "Would oceans be cleaner today if we had banned plastics earlier?",
          "If Mateo hadn't learned to code he wouldn't be building robotics today."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-10",
    "badgeName": "Level 8 Capstone",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "advanced-10-1",
        "term": "Spearhead",
        "translation": "Encabezar una gran iniciativa",
        "ipa": "/ˈspɪrhed/",
        "audioText": "Spearhead. She spearheaded the NGO.",
        "example": "She spearheaded the NGO.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-10-2",
        "term": "Mobilize",
        "translation": "Movilizar comunidades",
        "ipa": "/ˈmoʊbəlaɪz/",
        "audioText": "Mobilize. We mobilized youth leaders.",
        "example": "We mobilized youth leaders.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-10-3",
        "term": "Allocate",
        "translation": "Destinar fondos a becas",
        "ipa": "/ˈæləkeɪt/",
        "audioText": "Allocate. Funds were allocated to grants.",
        "example": "Funds were allocated to grants.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-10-4",
        "term": "Replicate",
        "translation": "Replicar modelos con éxito",
        "ipa": "/ˈreplɪkeɪt/",
        "audioText": "Replicate. Our model can be replicated.",
        "example": "Our model can be replicated.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-10-5",
        "term": "Govern",
        "translation": "Gobernar con ética y rigor",
        "ipa": "/ˈɡʌvərn/",
        "audioText": "Govern. We govern with transparency.",
        "example": "We govern with transparency.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "advanced-10-6",
        "term": "Our NGO is a youth-led initiative which empowers underserved communities through clean technology",
        "translation": "Usa defining y non-defining clauses para darle peso institucional a tu organización.",
        "ipa": "/our/",
        "audioText": "EcoTech Colombia, which was established by passionate teenagers, is an initiative that delivers solar-powered STEM kits to rural schools.",
        "example": "EcoTech Colombia, which was established by passionate teenagers, is an initiative that delivers solar-powered STEM kits to rural schools.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "advanced-10-7",
        "term": "Over ten thousand young leaders have been trained",
        "translation": "Presenta datos verificables donde la comunidad beneficiada sea el sujeto paciente.",
        "ipa": "/over/",
        "audioText": "To date, over twelve thousand students have been equipped with digital literacy skills across thirty municipal districts.",
        "example": "To date, over twelve thousand students have been equipped with digital literacy skills across thirty municipal districts.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "advanced-10-b1",
        "prompt": "Nuestra ONG juvenil fue galardonada con la máxima subvención filantrópica.",
        "answer": "Our youth NGO was awarded the maximum philanthropic grant",
        "tokens": [
          "Our",
          "youth",
          "NGO",
          "was",
          "awarded",
          "the",
          "maximum",
          "philanthropic",
          "grant",
          "hadn",
          "acted"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-10-b2",
        "prompt": "Si no hubiéramos actuado los jóvenes rurales no estarían conectados hoy.",
        "answer": "If we hadn t acted rural youth wouldn t be connected today",
        "tokens": [
          "If",
          "we",
          "hadn",
          "t",
          "acted",
          "rural",
          "youth",
          "wouldn",
          "be",
          "connected",
          "today",
          "awarded",
          "maximum"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "advanced-10-b3",
        "prompt": "¿Cómo garantizará su equipo la transparencia fiscal y el impacto social?",
        "answer": "How will your team guarantee fiscal transparency and social impact",
        "tokens": [
          "How",
          "will",
          "your",
          "team",
          "guarantee",
          "fiscal",
          "transparency",
          "and",
          "social",
          "impact",
          "youth",
          "awarded"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "advanced-10-e1",
        "audioText": "We are unanimously voting to award EcoTech Colombia the maximum grant of five hundred thousand dollars.",
        "correctAnswer": "We are unanimously voting to award EcoTech Colombia the maximum grant of five hundred thousand dollars.",
        "options": [
          "We are unanimously voting to award EcoTech Colombia the maximum grant of five hundred thousand dollars.",
          "Their proven fiscal governance, measurable community impact, and eloquent youth leadership set the gold standard for social innovation worldwide.",
          "Our youth NGO was awarded the maximum philanthropic grant."
        ]
      },
      {
        "id": "advanced-10-e2",
        "audioText": "Their proven fiscal governance, measurable community impact, and eloquent youth leadership set the gold standard for social innovation worldwide.",
        "correctAnswer": "Their proven fiscal governance, measurable community impact, and eloquent youth leadership set the gold standard for social innovation worldwide.",
        "options": [
          "Our youth NGO was awarded the maximum philanthropic grant.",
          "Their proven fiscal governance, measurable community impact, and eloquent youth leadership set the gold standard for social innovation worldwide.",
          "If we hadn't acted rural youth wouldn't be connected today."
        ]
      },
      {
        "id": "advanced-10-e3",
        "audioText": "Our youth NGO was awarded the maximum philanthropic grant.",
        "correctAnswer": "Our youth NGO was awarded the maximum philanthropic grant.",
        "options": [
          "How will your team guarantee fiscal transparency and social impact?",
          "If we hadn't acted rural youth wouldn't be connected today.",
          "Our youth NGO was awarded the maximum philanthropic grant."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-1",
    "badgeName": "Future Milestones & Tech Forecasting",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-1-1",
        "term": "Colonize",
        "translation": "Colonizar otros mundos",
        "ipa": "/ˈkɑːlənaɪz/",
        "audioText": "Colonize. We will have colonized Mars.",
        "example": "We will have colonized Mars.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-1-2",
        "term": "Eradicate",
        "translation": "Erradicar enfermedades",
        "ipa": "/ɪˈrædɪkeɪt/",
        "audioText": "Eradicate. Doctors will have eradicated polio.",
        "example": "Doctors will have eradicated polio.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-1-3",
        "term": "Synthesize",
        "translation": "Sintetizar órganos biónicos",
        "ipa": "/ˈsɪnθəsaɪz/",
        "audioText": "Synthesize. Labs will have synthesized organs.",
        "example": "Labs will have synthesized organs.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-1-4",
        "term": "Navigate",
        "translation": "Navegar autónomamente",
        "ipa": "/ˈnævɪɡeɪt/",
        "audioText": "Navigate. Drones will be navigating skies.",
        "example": "Drones will be navigating skies.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-1-5",
        "term": "Harness",
        "translation": "Canalizar energía cuántica",
        "ipa": "/ˈhɑːrnɪs/",
        "audioText": "Harness. We will have harnessed fusion.",
        "example": "We will have harnessed fusion.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-1-6",
        "term": "In ten years, autonomous vehicles will be navigating urban highways seamlessly",
        "translation": "Describe una escena o actividad en pleno desarrollo futuro.",
        "ipa": "/in/",
        "audioText": "In five years' time, millions of global students will be attending decentralized immersive holographic classrooms.",
        "example": "In five years' time, millions of global students will be attending decentralized immersive holographic classrooms.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-1-7",
        "term": "By 2035, humanity will have constructed the world's first permanent lunar orbital habitat",
        "translation": "Describe una meta que estará 100% completada antes de la fecha límite señalada por 'by'.",
        "ipa": "/by/",
        "audioText": "By 2035, biomedical researchers will have developed personalized mRNA vaccines targeting genetic mutations.",
        "example": "By 2035, biomedical researchers will have developed personalized mRNA vaccines targeting genetic mutations.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-1-b1",
        "prompt": "Para 2035 los ingenieros biomédicos habrán sintetizado órganos biónicos.",
        "answer": "By 2035 biomedical engineers will have synthesized bionic organs",
        "tokens": [
          "By",
          "2035",
          "biomedical",
          "engineers",
          "will",
          "have",
          "synthesized",
          "bionic",
          "organs",
          "years",
          "millions"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-1-b2",
        "prompt": "En diez años millones de viajeros estarán desplazándose en taxis aéreos.",
        "answer": "In ten years millions of commuters will be traveling in air taxis",
        "tokens": [
          "In",
          "ten",
          "years",
          "millions",
          "of",
          "commuters",
          "will",
          "be",
          "traveling",
          "in",
          "air",
          "taxis",
          "2035",
          "biomedical"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-1-b3",
        "prompt": "¿Habrán los reactores de fusión reemplazado a las plantas fósiles para 2040?",
        "answer": "Will clean fusion reactors have replaced fossil plants by 2040",
        "tokens": [
          "Will",
          "clean",
          "fusion",
          "reactors",
          "have",
          "replaced",
          "fossil",
          "plants",
          "by",
          "2040",
          "2035",
          "biomedical"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-1-e1",
        "audioText": "By 2032, quantum computing algorithms will have cracked complex molecular simulations, and autonomous space probes will be exploring subsurface oceans on Europa.",
        "correctAnswer": "By 2032, quantum computing algorithms will have cracked complex molecular simulations, and autonomous space probes will be exploring subsurface oceans on Europa.",
        "options": [
          "By 2032, quantum computing algorithms will have cracked complex molecular simulations, and autonomous space probes will be exploring subsurface oceans on Europa.",
          "By 2035 biomedical engineers will have synthesized bionic organs.",
          "In ten years millions of commuters will be traveling in air taxis."
        ]
      },
      {
        "id": "elite-1-e2",
        "audioText": "By 2035 biomedical engineers will have synthesized bionic organs.",
        "correctAnswer": "By 2035 biomedical engineers will have synthesized bionic organs.",
        "options": [
          "In ten years millions of commuters will be traveling in air taxis.",
          "By 2035 biomedical engineers will have synthesized bionic organs.",
          "Will clean fusion reactors have replaced fossil plants by 2040?"
        ]
      },
      {
        "id": "elite-1-e3",
        "audioText": "In ten years millions of commuters will be traveling in air taxis.",
        "correctAnswer": "In ten years millions of commuters will be traveling in air taxis.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Will clean fusion reactors have replaced fossil plants by 2040?",
          "In ten years millions of commuters will be traveling in air taxis."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-2",
    "badgeName": "High-Stakes Dilemmas & Complex Mixed Conditionals",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-2-1",
        "term": "Pivot",
        "translation": "Pivotar / Cambiar de estrategia",
        "ipa": "/ˈpɪvət/",
        "audioText": "Pivot. We pivoted to cloud SaaS.",
        "example": "We pivoted to cloud SaaS.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-2-2",
        "term": "Mitigate",
        "translation": "Mitigar un riesgo grave",
        "ipa": "/ˈmɪtɪɡeɪt/",
        "audioText": "Mitigate. We mitigated the risk.",
        "example": "We mitigated the risk.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-2-3",
        "term": "Audit",
        "translation": "Auditar sistemas",
        "ipa": "/ˈɔːdɪt/",
        "audioText": "Audit. Experts audited our code.",
        "example": "Experts audited our code.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-2-4",
        "term": "Patch",
        "translation": "Parchar vulnerabilidades",
        "ipa": "/pætʃ/",
        "audioText": "Patch. They patched the flaw.",
        "example": "They patched the flaw.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-2-5",
        "term": "Collapse",
        "translation": "Colapsar ante la crisis",
        "ipa": "/kəˈlæps/",
        "audioText": "Collapse. The server would have collapsed.",
        "example": "The server would have collapsed.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-2-6",
        "term": "If our team had secured the patent last year, we would hold market exclusivity today",
        "translation": "Analiza cómo un evento pasado determina la situación jurídica o financiera actual.",
        "ipa": "/if/",
        "audioText": "If our founders hadn't pivoted to cloud software three years ago, our business would not be profitable today.",
        "example": "If our founders hadn't pivoted to cloud software three years ago, our business would not be profitable today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-2-7",
        "term": "If our chief architect weren't a genius, our infrastructure would have crashed during the DDoS attack",
        "translation": "Explica cómo un rasgo intrínseco evitó una catástrofe en el pasado.",
        "ipa": "/if/",
        "audioText": "If our security engineers were not so meticulous, the system vulnerability would have caused severe data loss.",
        "example": "If our security engineers were not so meticulous, the system vulnerability would have caused severe data loss.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-2-b1",
        "prompt": "Si no hubiéramos parchado el cortafuegos nuestra base de datos estaría comprometida hoy.",
        "answer": "If we hadn t patched the firewall our database would be compromised today",
        "tokens": [
          "If",
          "we",
          "hadn",
          "t",
          "patched",
          "the",
          "firewall",
          "our",
          "database",
          "would",
          "be",
          "compromised",
          "today",
          "engineers",
          "weren"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-2-b2",
        "prompt": "Si nuestros ingenieros no fueran vigilantes la empresa habría sufrido pérdidas.",
        "answer": "If our engineers weren t vigilant the firm would have suffered losses",
        "tokens": [
          "If",
          "our",
          "engineers",
          "weren",
          "t",
          "vigilant",
          "the",
          "firm",
          "would",
          "have",
          "suffered",
          "losses",
          "hadn",
          "patched"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-2-b3",
        "prompt": "¿Sería nuestra empresa rentable hoy si hubiéramos rechazado el capital semilla?",
        "answer": "Would our firm be profitable today if we had rejected seed capital",
        "tokens": [
          "Would",
          "our",
          "firm",
          "be",
          "profitable",
          "today",
          "if",
          "we",
          "had",
          "rejected",
          "seed",
          "capital",
          "hadn",
          "patched"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-2-e1",
        "audioText": "If our founders hadn't pivoted from hardware manufacturing to cloud AI software two years ago, our company wouldn't be expanding internationally today.",
        "correctAnswer": "If our founders hadn't pivoted from hardware manufacturing to cloud AI software two years ago, our company wouldn't be expanding internationally today.",
        "options": [
          "If our founders hadn't pivoted from hardware manufacturing to cloud AI software two years ago, our company wouldn't be expanding internationally today.",
          "If we hadn't patched the firewall our database would be compromised today.",
          "If our engineers weren't vigilant the firm would have suffered losses."
        ]
      },
      {
        "id": "elite-2-e2",
        "audioText": "If we hadn't patched the firewall our database would be compromised today.",
        "correctAnswer": "If we hadn't patched the firewall our database would be compromised today.",
        "options": [
          "If our engineers weren't vigilant the firm would have suffered losses.",
          "If we hadn't patched the firewall our database would be compromised today.",
          "Would our firm be profitable today if we had rejected seed capital?"
        ]
      },
      {
        "id": "elite-2-e3",
        "audioText": "If our engineers weren't vigilant the firm would have suffered losses.",
        "correctAnswer": "If our engineers weren't vigilant the firm would have suffered losses.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Would our firm be profitable today if we had rejected seed capital?",
          "If our engineers weren't vigilant the firm would have suffered losses."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-3",
    "badgeName": "Cleft Sentences & Emphatic Rhetoric",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-3-1",
        "term": "Spotlight",
        "translation": "Poner el foco reflector",
        "ipa": "/ˈspɑːtlaɪt/",
        "audioText": "Spotlight. She spotlighted youth talent.",
        "example": "She spotlighted youth talent.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-3-2",
        "term": "Resonate",
        "translation": "Resonar profundamente",
        "ipa": "/ˈrezəneɪt/",
        "audioText": "Resonate. His words resonated deeply.",
        "example": "His words resonated deeply.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-3-3",
        "term": "Electrify",
        "translation": "Electrizar a la audiencia",
        "ipa": "/ɪˈlektrɪfaɪ/",
        "audioText": "Electrify. The speech electrified everyone.",
        "example": "The speech electrified everyone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-3-4",
        "term": "Mobilize",
        "translation": "Movilizar voluntades",
        "ipa": "/ˈmoʊbəlaɪz/",
        "audioText": "Mobilize. What we did was mobilize youth.",
        "example": "What we did was mobilize youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-3-5",
        "term": "Transform",
        "translation": "Transformar realidades",
        "ipa": "/trænsˈfɔːrm/",
        "audioText": "Transform. It was hope that transformed us.",
        "example": "It was hope that transformed us.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-3-6",
        "term": "It was our youth leadership that transformed the municipal recycling policy",
        "translation": "Coloca el foco supremo en la persona, idea o causa exacta.",
        "ipa": "/it/",
        "audioText": "It was Sofia's unwavering persistence that inspired our robotics squad to overcome the tournament defeat.",
        "example": "It was Sofia's unwavering persistence that inspired our robotics squad to overcome the tournament defeat.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-3-7",
        "term": "What makes this technological breakthrough extraordinary is its zero-carbon efficiency",
        "translation": "Genera suspenso retórico abriendo con 'What' antes de revelar la idea clave.",
        "ipa": "/what/",
        "audioText": "What motivates our student foundation is the profound belief that every young mind deserves access to coding education.",
        "example": "What motivates our student foundation is the profound belief that every young mind deserves access to coding education.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-3-b1",
        "prompt": "Fue la perseverancia inquebrantable de Sofía lo que inspiró a nuestro equipo.",
        "answer": "It was Sofia s unwavering persistence that inspired our team",
        "tokens": [
          "It",
          "was",
          "Sofia",
          "s",
          "unwavering",
          "persistence",
          "that",
          "inspired",
          "our",
          "team",
          "What",
          "motivates"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-3-b2",
        "prompt": "Lo que motiva a nuestra fundación es el acceso equitativo a la educación.",
        "answer": "What motivates our foundation is equitable access to education",
        "tokens": [
          "What",
          "motivates",
          "our",
          "foundation",
          "is",
          "equitable",
          "access",
          "to",
          "education",
          "Sofia",
          "unwavering"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-3-b3",
        "prompt": "¿Fue el espíritu colaborativo lo que aseguró el primer puesto en el torneo?",
        "answer": "Was it collaborative spirit that secured first place in the tournament",
        "tokens": [
          "Was",
          "it",
          "collaborative",
          "spirit",
          "that",
          "secured",
          "first",
          "place",
          "in",
          "the",
          "tournament",
          "Sofia",
          "unwavering"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-3-e1",
        "audioText": "It was passion and relentless attention to design that revolutionized personal computing, and what visionary leaders leave behind is not just products, but inspiration.",
        "correctAnswer": "It was passion and relentless attention to design that revolutionized personal computing, and what visionary leaders leave behind is not just products, but inspiration.",
        "options": [
          "It was passion and relentless attention to design that revolutionized personal computing, and what visionary leaders leave behind is not just products, but inspiration.",
          "It was Sofia's unwavering persistence that inspired our team.",
          "What motivates our foundation is equitable access to education."
        ]
      },
      {
        "id": "elite-3-e2",
        "audioText": "It was Sofia's unwavering persistence that inspired our team.",
        "correctAnswer": "It was Sofia's unwavering persistence that inspired our team.",
        "options": [
          "What motivates our foundation is equitable access to education.",
          "It was Sofia's unwavering persistence that inspired our team.",
          "Was it collaborative spirit that secured first place in the tournament?"
        ]
      },
      {
        "id": "elite-3-e3",
        "audioText": "What motivates our foundation is equitable access to education.",
        "correctAnswer": "What motivates our foundation is equitable access to education.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Was it collaborative spirit that secured first place in the tournament?",
          "What motivates our foundation is equitable access to education."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-4",
    "badgeName": "Rhetorical Inversions & High-Impact Oratory",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-4-1",
        "term": "Witness",
        "translation": "Presenciar un hito histórico",
        "ipa": "/ˈwɪtnəs/",
        "audioText": "Witness. Rarely have I witnessed such grit.",
        "example": "Rarely have I witnessed such grit.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-4-2",
        "term": "Compromise",
        "translation": "Transigir en principios",
        "ipa": "/ˈkɑːmprəmaɪz/",
        "audioText": "Compromise. Never should we compromise ethics.",
        "example": "Never should we compromise ethics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-4-3",
        "term": "Ratify",
        "translation": "Ratificar solemnemente",
        "ipa": "/ˈrætɪfaɪ/",
        "audioText": "Ratify. Not only did they ratify the pact.",
        "example": "Not only did they ratify the pact.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-4-4",
        "term": "Proclaim",
        "translation": "Proclamar una verdad",
        "ipa": "/prəˈkleɪm/",
        "audioText": "Proclaim. Seldom did leaders proclaim truth.",
        "example": "Seldom did leaders proclaim truth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-4-5",
        "term": "Uphold",
        "translation": "Defender principios",
        "ipa": "/ʌpˈhoʊld/",
        "audioText": "Uphold. We upheld inviolable rights.",
        "example": "We upheld inviolable rights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-4-6",
        "term": "Rarely have I witnessed such magnificent dedication",
        "translation": "Aplica inversión de Present Perfect (have + sujeto) o Present Simple (does + sujeto).",
        "ipa": "/rarely/",
        "audioText": "Rarely have I witnessed a young delegation present such mathematically rigorous research before a global symposium.",
        "example": "Rarely have I witnessed a young delegation present such mathematically rigorous research before a global symposium.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-4-7",
        "term": "Not only did our squad win first place, but we also secured funding for five rural community libraries",
        "translation": "Usa did + sujeto + verbo base en la primera cláusula.",
        "ipa": "/not/",
        "audioText": "Not only did the student initiative clean twenty urban riverbanks, but they also planted ten thousand native trees.",
        "example": "Not only did the student initiative clean twenty urban riverbanks, but they also planted ten thousand native trees.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-4-b1",
        "prompt": "Rara vez he presenciado a una delegación juvenil presentar tal investigación.",
        "answer": "Rarely have I seen a youth delegation present such research",
        "tokens": [
          "Rarely",
          "have",
          "I",
          "seen",
          "a",
          "youth",
          "delegation",
          "present",
          "such",
          "research",
          "only",
          "team"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-4-b2",
        "prompt": "No solo nuestro equipo ganó el torneo sino que rompimos el récord.",
        "answer": "Not only did our team win the tournament but we broke the record",
        "tokens": [
          "Not",
          "only",
          "did",
          "our",
          "team",
          "win",
          "the",
          "tournament",
          "but",
          "we",
          "broke",
          "record",
          "Rarely",
          "have"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-4-b3",
        "prompt": "¿Bajo ninguna circunstancia debemos transigir en la privacidad digital?",
        "answer": "Under no circumstances should we compromise on digital privacy",
        "tokens": [
          "Under",
          "no",
          "circumstances",
          "should",
          "we",
          "compromise",
          "on",
          "digital",
          "privacy",
          "Rarely",
          "have"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-4-e1",
        "audioText": "Rarely have I seen such impassioned rhetoric, and not only did the proposition dismantle every opposing claim, but they also established an inviolable moral standard for AI governance.",
        "correctAnswer": "Rarely have I seen such impassioned rhetoric, and not only did the proposition dismantle every opposing claim, but they also established an inviolable moral standard for AI governance.",
        "options": [
          "Rarely have I seen such impassioned rhetoric, and not only did the proposition dismantle every opposing claim, but they also established an inviolable moral standard for AI governance.",
          "Rarely have I seen a youth delegation present such research.",
          "Not only did our team win the tournament but we broke the record."
        ]
      },
      {
        "id": "elite-4-e2",
        "audioText": "Rarely have I seen a youth delegation present such research.",
        "correctAnswer": "Rarely have I seen a youth delegation present such research.",
        "options": [
          "Not only did our team win the tournament but we broke the record.",
          "Rarely have I seen a youth delegation present such research.",
          "Under no circumstances should we compromise on digital privacy?"
        ]
      },
      {
        "id": "elite-4-e3",
        "audioText": "Not only did our team win the tournament but we broke the record.",
        "correctAnswer": "Not only did our team win the tournament but we broke the record.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Under no circumstances should we compromise on digital privacy?",
          "Not only did our team win the tournament but we broke the record."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-5",
    "badgeName": "Diplomatic Softening, Hedging & Nuanced Negotiations",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-5-1",
        "term": "Venture",
        "translation": "Atreverse a sugerir con tacto",
        "ipa": "/ˈventʃər/",
        "audioText": "Venture. I venture to suggest a pause.",
        "example": "I venture to suggest a pause.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-5-2",
        "term": "Acknowledge",
        "translation": "Reconocer un mérito",
        "ipa": "/əkˈnɑːlɪdʒ/",
        "audioText": "Acknowledge. We acknowledge their progress.",
        "example": "We acknowledge their progress.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-5-3",
        "term": "Facilitate",
        "translation": "Facilitar el diálogo",
        "ipa": "/fəˈsɪlɪteɪt/",
        "audioText": "Facilitate. Envoys facilitated the pact.",
        "example": "Envoys facilitated the pact.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-5-4",
        "term": "Concede",
        "translation": "Conceder un punto menor",
        "ipa": "/kənˈsiːd/",
        "audioText": "Concede. They conceded on tariffs.",
        "example": "They conceded on tariffs.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-5-5",
        "term": "Harmonize",
        "translation": "Armonizar posturas",
        "ipa": "/ˈhɑːrmənaɪz/",
        "audioText": "Harmonize. We harmonized the treaties.",
        "example": "We harmonized the treaties.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-5-6",
        "term": "I would venture to suggest that we re-examine our collective timeline",
        "translation": "Introduce sugerencias audaces con extrema deferencia y respeto.",
        "ipa": "/i/",
        "audioText": "I would venture to suggest that our working committee consider a phased rollout to mitigate operational risks.",
        "example": "I would venture to suggest that our working committee consider a phased rollout to mitigate operational risks.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-5-7",
        "term": "It is widely acknowledged that sustainable development requires multilateral financing",
        "translation": "Presenta verdades compartidas sin atribuirte el protagonismo personal.",
        "ipa": "/it/",
        "audioText": "It is widely acknowledged among international delegates that youth empowerment is vital for democratic stability.",
        "example": "It is widely acknowledged among international delegates that youth empowerment is vital for democratic stability.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-5-b1",
        "prompt": "Me atrevería a sugerir que nuestro comité considere un despliegue escalonado.",
        "answer": "I would venture to suggest our committee consider a phased rollout",
        "tokens": [
          "I",
          "would",
          "venture",
          "to",
          "suggest",
          "our",
          "committee",
          "consider",
          "a",
          "phased",
          "rollout",
          "appear",
          "somewhat"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-5-b2",
        "prompt": "Parecería algo prematuro declarar la estabilidad total del sistema ahora.",
        "answer": "It would appear somewhat premature to declare full system stability",
        "tokens": [
          "It",
          "would",
          "appear",
          "somewhat",
          "premature",
          "to",
          "declare",
          "full",
          "system",
          "stability",
          "venture",
          "suggest"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-5-b3",
        "prompt": "¿Podría ser mutuamente ventajoso establecer un consejo asesor conjunto?",
        "answer": "Might it be mutually advantageous to establish a joint advisory council",
        "tokens": [
          "Might",
          "it",
          "be",
          "mutually",
          "advantageous",
          "to",
          "establish",
          "a",
          "joint",
          "advisory",
          "council",
          "would",
          "venture"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-5-e1",
        "audioText": "It is widely believed that sustainable peace can be achieved, and I would venture to suggest that both parties remain remarkably amenable to a phased diplomatic accord.",
        "correctAnswer": "It is widely believed that sustainable peace can be achieved, and I would venture to suggest that both parties remain remarkably amenable to a phased diplomatic accord.",
        "options": [
          "It is widely believed that sustainable peace can be achieved, and I would venture to suggest that both parties remain remarkably amenable to a phased diplomatic accord.",
          "I would venture to suggest our committee consider a phased rollout.",
          "It would appear somewhat premature to declare full system stability."
        ]
      },
      {
        "id": "elite-5-e2",
        "audioText": "I would venture to suggest our committee consider a phased rollout.",
        "correctAnswer": "I would venture to suggest our committee consider a phased rollout.",
        "options": [
          "It would appear somewhat premature to declare full system stability.",
          "I would venture to suggest our committee consider a phased rollout.",
          "Might it be mutually advantageous to establish a joint advisory council?"
        ]
      },
      {
        "id": "elite-5-e3",
        "audioText": "It would appear somewhat premature to declare full system stability.",
        "correctAnswer": "It would appear somewhat premature to declare full system stability.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Might it be mutually advantageous to establish a joint advisory council?",
          "It would appear somewhat premature to declare full system stability."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-6",
    "badgeName": "Advanced Discursive & Argumentative Essay Architecture",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-6-1",
        "term": "Substantiate",
        "translation": "Fundamentar con datos cuantitativos",
        "ipa": "/səbˈstænʃieɪt/",
        "audioText": "Substantiate. We substantiated the thesis.",
        "example": "We substantiated the thesis.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-6-2",
        "term": "Corroborate",
        "translation": "Corroborar hallazgos",
        "ipa": "/kəˈrɑːbəreɪt/",
        "audioText": "Corroborate. Peer studies corroborated data.",
        "example": "Peer studies corroborated data.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-6-3",
        "term": "Postulate",
        "translation": "Postular una teoría",
        "ipa": "/ˈpɑːstʃəleɪt/",
        "audioText": "Postulate. The paper postulates a model.",
        "example": "The paper postulates a model.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-6-4",
        "term": "Dismantle",
        "translation": "Desmontar una falacia",
        "ipa": "/dɪsˈmæntl/",
        "audioText": "Dismantle. Data dismantled the myth.",
        "example": "Data dismantled the myth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-6-5",
        "term": "Incorporate",
        "translation": "Incorporar metodologías",
        "ipa": "/ɪnˈkɔːrpəreɪt/",
        "audioText": "Incorporate. We incorporated survey data.",
        "example": "We incorporated survey data.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-6-6",
        "term": "While technology accelerates learning, ethical human oversight must remain central on the grounds that empathy and critical analysis cannot be automated",
        "translation": "Estructura que demuestra madurez dialéctica inmediata al evaluador.",
        "ipa": "/while/",
        "audioText": "While generative AI significantly accelerates research prototyping, human ethical judgment must govern scientific publication on the grounds that algorithmic models lack moral accountability and perpetuate systemic data bias.",
        "example": "While generative AI significantly accelerates research prototyping, human ethical judgment must govern scientific publication on the grounds that algorithmic models lack moral accountability and perpetuate systemic data bias.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-6-7",
        "term": "Whereas theoretical models predict rapid adoption, empirical field data demonstrates persistent infrastructural bottlenecks",
        "translation": "Contrasta dos hechos objetivos con distinción académica.",
        "ipa": "/whereas/",
        "audioText": "Whereas automated systems optimize computational speed, in stark contrast human educators cultivate emotional resilience and authentic curiosity.",
        "example": "Whereas automated systems optimize computational speed, in stark contrast human educators cultivate emotional resilience and authentic curiosity.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-6-b1",
        "prompt": "Si bien la IA acelera la investigación el juicio humano debe gobernar la ciencia.",
        "answer": "While AI accelerates research human judgment must govern science",
        "tokens": [
          "While",
          "AI",
          "accelerates",
          "research",
          "human",
          "judgment",
          "must",
          "govern",
          "science",
          "quantitative",
          "methodology"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-6-b2",
        "prompt": "Nuestra metodología cuantitativa incorpora un riguroso estudio longitudinal.",
        "answer": "Our quantitative methodology incorporates a rigorous longitudinal study",
        "tokens": [
          "Our",
          "quantitative",
          "methodology",
          "incorporates",
          "a",
          "rigorous",
          "longitudinal",
          "study",
          "While",
          "accelerates"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-6-b3",
        "prompt": "¿Tiene en cuenta el marco del autor las variables socioeconómicas?",
        "answer": "Does the author s framework account for socioeconomic variables",
        "tokens": [
          "Does",
          "the",
          "author",
          "s",
          "framework",
          "account",
          "for",
          "socioeconomic",
          "variables",
          "While",
          "accelerates"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-6-e1",
        "audioText": "Although artificial intelligence enhances analytical efficiency, human mentorship must remain the cornerstone of higher education on the grounds that critical ethical judgment and empathy cannot be codified into algorithms.",
        "correctAnswer": "Although artificial intelligence enhances analytical efficiency, human mentorship must remain the cornerstone of higher education on the grounds that critical ethical judgment and empathy cannot be codified into algorithms.",
        "options": [
          "Although artificial intelligence enhances analytical efficiency, human mentorship must remain the cornerstone of higher education on the grounds that critical ethical judgment and empathy cannot be codified into algorithms.",
          "While AI accelerates research human judgment must govern science.",
          "Our quantitative methodology incorporates a rigorous longitudinal study."
        ]
      },
      {
        "id": "elite-6-e2",
        "audioText": "While AI accelerates research human judgment must govern science.",
        "correctAnswer": "While AI accelerates research human judgment must govern science.",
        "options": [
          "Our quantitative methodology incorporates a rigorous longitudinal study.",
          "While AI accelerates research human judgment must govern science.",
          "Does the author's framework account for socioeconomic variables?"
        ]
      },
      {
        "id": "elite-6-e3",
        "audioText": "Our quantitative methodology incorporates a rigorous longitudinal study.",
        "correctAnswer": "Our quantitative methodology incorporates a rigorous longitudinal study.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Does the author's framework account for socioeconomic variables?",
          "Our quantitative methodology incorporates a rigorous longitudinal study."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-7",
    "badgeName": "Empirical Research Abstracts & Academic Citations",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-7-1",
        "term": "Conduct",
        "translation": "Conducir un experimento",
        "ipa": "/kənˈdʌkt/",
        "audioText": "Conduct. A trial was conducted.",
        "example": "A trial was conducted.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-7-2",
        "term": "Demonstrate",
        "translation": "Demostrar hallazgos",
        "ipa": "/ˈdemənstreɪt/",
        "audioText": "Demonstrate. Results demonstrated growth.",
        "example": "Results demonstrated growth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-7-3",
        "term": "Isolate",
        "translation": "Aislar variables",
        "ipa": "/ˈaɪsəleɪt/",
        "audioText": "Isolate. We isolated the variables.",
        "example": "We isolated the variables.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-7-4",
        "term": "Quantify",
        "translation": "Cuantificar métricas",
        "ipa": "/ˈkwɑːntɪfaɪ/",
        "audioText": "Quantify. Data was quantified accurately.",
        "example": "Data was quantified accurately.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-7-5",
        "term": "Corroborate",
        "translation": "Corroborar hipótesis",
        "ipa": "/kəˈrɑːbəreɪt/",
        "audioText": "Corroborate. Evidence corroborated theory.",
        "example": "Evidence corroborated theory.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-7-6",
        "term": "A randomized controlled trial was conducted across five rural school districts",
        "translation": "Describe el procedimiento experimental sin usar 'I' o 'We'.",
        "ipa": "/a/",
        "audioText": "A multi-phase quantitative methodology was deployed across thirty testing sites over a twelve-month duration.",
        "example": "A multi-phase quantitative methodology was deployed across thirty testing sites over a twelve-month duration.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-7-7",
        "term": "Statistical data analysis revealed a forty-two percent increase in algorithmic computational efficiency",
        "translation": "Presenta porcentajes, p-values o métricas exactas.",
        "ipa": "/statistical/",
        "audioText": "Empirical telemetry revealed a forty-five percent reduction in energy dissipation during quantum processor cycles.",
        "example": "Empirical telemetry revealed a forty-five percent reduction in energy dissipation during quantum processor cycles.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-7-b1",
        "prompt": "Un ensayo cuantitativo doble ciego fue conducido en veinte acueductos.",
        "answer": "A double blind quantitative trial was conducted across twenty water systems",
        "tokens": [
          "A",
          "double",
          "blind",
          "quantitative",
          "trial",
          "was",
          "conducted",
          "across",
          "twenty",
          "water",
          "systems",
          "Empirical",
          "analysis"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-7-b2",
        "prompt": "El análisis empírico reveló una reducción del noventa y ocho por ciento.",
        "answer": "Empirical analysis revealed a ninety eight percent reduction in pollutants",
        "tokens": [
          "Empirical",
          "analysis",
          "revealed",
          "a",
          "ninety",
          "eight",
          "percent",
          "reduction",
          "in",
          "pollutants",
          "double",
          "blind"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-7-b3",
        "prompt": "¿Cómo corroboran sus resultados la literatura académica existente?",
        "answer": "How do your results corroborate existing scholarly literature",
        "tokens": [
          "How",
          "do",
          "your",
          "results",
          "corroborate",
          "existing",
          "scholarly",
          "literature",
          "double",
          "blind"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-7-e1",
        "audioText": "The jury unanimously awarded the Gold Medal to this paper because the methodology incorporated a double-blind trial and the empirical results demonstrated a 98% reduction with rigorous peer citations.",
        "correctAnswer": "The jury unanimously awarded the Gold Medal to this paper because the methodology incorporated a double-blind trial and the empirical results demonstrated a 98% reduction with rigorous peer citations.",
        "options": [
          "The jury unanimously awarded the Gold Medal to this paper because the methodology incorporated a double-blind trial and the empirical results demonstrated a 98% reduction with rigorous peer citations.",
          "A double-blind quantitative trial was conducted across twenty water systems.",
          "Empirical analysis revealed a ninety-eight percent reduction in pollutants."
        ]
      },
      {
        "id": "elite-7-e2",
        "audioText": "A double-blind quantitative trial was conducted across twenty water systems.",
        "correctAnswer": "A double-blind quantitative trial was conducted across twenty water systems.",
        "options": [
          "Empirical analysis revealed a ninety-eight percent reduction in pollutants.",
          "A double-blind quantitative trial was conducted across twenty water systems.",
          "How do your results corroborate existing scholarly literature?"
        ]
      },
      {
        "id": "elite-7-e3",
        "audioText": "Empirical analysis revealed a ninety-eight percent reduction in pollutants.",
        "correctAnswer": "Empirical analysis revealed a ninety-eight percent reduction in pollutants.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How do your results corroborate existing scholarly literature?",
          "Empirical analysis revealed a ninety-eight percent reduction in pollutants."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-8",
    "badgeName": "Executive Boardrooms, Parliamentary Procedure & Conflict Mediation",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-8-1",
        "term": "Move",
        "translation": "Proponer una moción formal",
        "ipa": "/muːv/",
        "audioText": "Move. I move that we allocate funds.",
        "example": "I move that we allocate funds.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-8-2",
        "term": "Second",
        "translation": "Secundar una moción",
        "ipa": "/ˈsekənd/",
        "audioText": "Second. I second the motion.",
        "example": "I second the motion.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-8-3",
        "term": "Adjourn",
        "translation": "Levantar la sesión",
        "ipa": "/əˈdʒɜːrn/",
        "audioText": "Adjourn. The meeting was adjourned.",
        "example": "The meeting was adjourned.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-8-4",
        "term": "Ratify",
        "translation": "Ratificar estatutos",
        "ipa": "/ˈrætɪfaɪ/",
        "audioText": "Ratify. The board ratified bylaws.",
        "example": "The board ratified bylaws.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-8-5",
        "term": "Abstain",
        "translation": "Abstenerse de votar",
        "ipa": "/əbˈsteɪn/",
        "audioText": "Abstain. She abstained from voting.",
        "example": "She abstained from voting.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-8-6",
        "term": "I move that the board allocate two hundred thousand dollars to our rural clean energy project",
        "translation": "Usa el verbo base sin 's' de tercera persona ni 'to'.",
        "ipa": "/i/",
        "audioText": "I move that our executive board ratify the revised cybersecurity protocol with immediate effect.",
        "example": "I move that our executive board ratify the revised cybersecurity protocol with immediate effect.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-8-7",
        "term": "The motion has been moved and seconded; the floor is now open for deliberate discussion",
        "translation": "Fórmula del Presidente tras recibir el respaldo de un segundo consejero.",
        "ipa": "/the/",
        "audioText": "The motion to establish a youth advisory board has been moved and seconded; debate is now in order.",
        "example": "The motion to establish a youth advisory board has been moved and seconded; debate is now in order.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-8-b1",
        "prompt": "Propongo la moción de que nuestra junta ratifique el protocolo de ciberseguridad.",
        "answer": "I move that our board ratify the cybersecurity protocol",
        "tokens": [
          "I",
          "move",
          "that",
          "our",
          "board",
          "ratify",
          "the",
          "cybersecurity",
          "protocol",
          "motion",
          "been"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-8-b2",
        "prompt": "La moción fue propuesta y secundada; se abre el debate.",
        "answer": "The motion has been moved and seconded debate is open",
        "tokens": [
          "The",
          "motion",
          "has",
          "been",
          "moved",
          "and",
          "seconded",
          "debate",
          "is",
          "open",
          "that",
          "board"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-8-b3",
        "prompt": "¿Qué mayoría estatutaria es requerida para aprobar la fusión?",
        "answer": "What statutory majority is required to approve the merger",
        "tokens": [
          "What",
          "statutory",
          "majority",
          "is",
          "required",
          "to",
          "approve",
          "the",
          "merger",
          "move",
          "that"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-8-e1",
        "audioText": "The motion to ratify the revised environmental bylaws has been moved and seconded.",
        "correctAnswer": "The motion to ratify the revised environmental bylaws has been moved and seconded.",
        "options": [
          "The motion to ratify the revised environmental bylaws has been moved and seconded.",
          "All in favor say Aye; opposed Nay.",
          "The Ayes have it; the motion carries unanimously."
        ]
      },
      {
        "id": "elite-8-e2",
        "audioText": "All in favor say Aye; opposed Nay.",
        "correctAnswer": "All in favor say Aye; opposed Nay.",
        "options": [
          "The Ayes have it; the motion carries unanimously.",
          "All in favor say Aye; opposed Nay.",
          "We practice speaking English every weekend with our squad."
        ]
      },
      {
        "id": "elite-8-e3",
        "audioText": "The Ayes have it; the motion carries unanimously.",
        "correctAnswer": "The Ayes have it; the motion carries unanimously.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "The Ayes rarely it; the motion carries unanimously.",
          "The Ayes have it; the motion carries unanimously."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-9",
    "badgeName": "Crisis Leadership, Hostile Press Conferences & PR Damage Control",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-9-1",
        "term": "Acknowledge",
        "translation": "Reconocer la inquietud",
        "ipa": "/əkˈnɑːlɪdʒ/",
        "audioText": "Acknowledge. I acknowledge your question.",
        "example": "I acknowledge your question.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-9-2",
        "term": "Pivot",
        "translation": "Pivotar hacia los hechos",
        "ipa": "/ˈpɪvət/",
        "audioText": "Pivot. She pivoted to the data.",
        "example": "She pivoted to the data.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-9-3",
        "term": "Neutralize",
        "translation": "Neutralizar el ataque",
        "ipa": "/ˈnuːtrəlaɪz/",
        "audioText": "Neutralize. He neutralized hostile claims.",
        "example": "He neutralized hostile claims.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-9-4",
        "term": "Reassure",
        "translation": "Tranquilizar al público",
        "ipa": "/ˌriːəˈʃʊr/",
        "audioText": "Reassure. We reassured the public.",
        "example": "We reassured the public.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-9-5",
        "term": "Rectify",
        "translation": "Rectificar el problema",
        "ipa": "/ˈrektɪfaɪ/",
        "audioText": "Rectify. Engineers rectified the bug.",
        "example": "Engineers rectified the bug.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-9-6",
        "term": "While I understand the public concern regarding data privacy...",
        "translation": "Valida la emoción de la pregunta sin aceptar culpas falsas.",
        "ipa": "/while/",
        "audioText": "While I fully understand the public concern regarding our recent software maintenance downtime...",
        "example": "While I fully understand the public concern regarding our recent software maintenance downtime...",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-9-7",
        "term": "...however, what the independent security audit unequivocally confirms is that...",
        "translation": "Redirige el reflector del ataque hacia tus fortalezas y hechos comprobados.",
        "ipa": "/however/",
        "audioText": "...however, what our comprehensive independent cybersecurity audit confirms is that no user data was compromised.",
        "example": "...however, what our comprehensive independent cybersecurity audit confirms is that no user data was compromised.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-9-b1",
        "prompt": "Si bien entiendo la preocupación lo que la auditoría confirma es que no hubo pérdida de datos.",
        "answer": "While I understand the concern what the audit confirms is zero data loss",
        "tokens": [
          "While",
          "I",
          "understand",
          "the",
          "concern",
          "what",
          "audit",
          "confirms",
          "is",
          "zero",
          "data",
          "loss",
          "engineering",
          "division"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-9-b2",
        "prompt": "Nuestra división de ingeniería desplegó clústeres automatizados de respaldo.",
        "answer": "Our engineering division deployed automated failover clusters",
        "tokens": [
          "Our",
          "engineering",
          "division",
          "deployed",
          "automated",
          "failover",
          "clusters",
          "While",
          "understand"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-9-b3",
        "prompt": "¿Qué pasos de remediación instituirá su equipo para restaurar la confianza pública?",
        "answer": "What remediation steps will your team institute to restore public trust",
        "tokens": [
          "What",
          "remediation",
          "steps",
          "will",
          "your",
          "team",
          "institute",
          "to",
          "restore",
          "public",
          "trust",
          "While",
          "understand"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-9-e1",
        "audioText": "While I appreciate the public concern regarding data encryption, what our independent forensic audit unequivocally demonstrates is that our zero-trust architecture completely repelled the intrusion.",
        "correctAnswer": "While I appreciate the public concern regarding data encryption, what our independent forensic audit unequivocally demonstrates is that our zero-trust architecture completely repelled the intrusion.",
        "options": [
          "While I appreciate the public concern regarding data encryption, what our independent forensic audit unequivocally demonstrates is that our zero-trust architecture completely repelled the intrusion.",
          "While I understand the concern what the audit confirms is zero data loss.",
          "Our engineering division deployed automated failover clusters."
        ]
      },
      {
        "id": "elite-9-e2",
        "audioText": "While I understand the concern what the audit confirms is zero data loss.",
        "correctAnswer": "While I understand the concern what the audit confirms is zero data loss.",
        "options": [
          "Our engineering division deployed automated failover clusters.",
          "While I understand the concern what the audit confirms is zero data loss.",
          "What remediation steps will your team institute to restore public trust?"
        ]
      },
      {
        "id": "elite-9-e3",
        "audioText": "Our engineering division deployed automated failover clusters.",
        "correctAnswer": "Our engineering division deployed automated failover clusters.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What remediation steps will your team institute to restore public trust?",
          "Our engineering division deployed automated failover clusters."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-10",
    "badgeName": "Designing a Global Venture",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-10-1",
        "term": "Scale",
        "translation": "Escalar exponencialmente",
        "ipa": "/skeɪl/",
        "audioText": "Scale. We scaled our ARR.",
        "example": "We scaled our ARR.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-10-2",
        "term": "Monetize",
        "translation": "Monetizar el producto",
        "ipa": "/ˈmɑːnɪtaɪz/",
        "audioText": "Monetize. The app was monetized.",
        "example": "The app was monetized.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-10-3",
        "term": "Recoup",
        "translation": "Recuperar el CAC",
        "ipa": "/rɪˈkuːp/",
        "audioText": "Recoup. We recouped CAC in 5 months.",
        "example": "We recouped CAC in 5 months.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-10-4",
        "term": "Compound",
        "translation": "Componerse / Multiplicarse",
        "ipa": "/kəmˈpaʊnd/",
        "audioText": "Compound. Network effects compounded.",
        "example": "Network effects compounded.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-10-5",
        "term": "Disrupt",
        "translation": "Disrumpir un mercado",
        "ipa": "/dɪsˈrʌpt/",
        "audioText": "Disrupt. We disrupted old models.",
        "example": "We disrupted old models.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-10-6",
        "term": "Our Customer Lifetime Value to Acquisition Cost ratio stands at an exceptional 4.5 to 1",
        "translation": "Demuestra que por cada dólar invertido en marketing se obtienen cuatro de beneficio.",
        "ipa": "/our/",
        "audioText": "Our customer lifetime value to acquisition cost ratio stands at a healthy 4.2 to 1 with an eight-month payback period.",
        "example": "Our customer lifetime value to acquisition cost ratio stands at a healthy 4.2 to 1 with an eight-month payback period.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-10-7",
        "term": "Our annual customer churn rate is strictly maintained below 2.5 percent",
        "translation": "Muestra que los usuarios aman el producto y no se dan de baja.",
        "ipa": "/our/",
        "audioText": "Our enterprise churn rate is maintained below two percent annually due to high switching costs and mission-critical workflows.",
        "example": "Our enterprise churn rate is maintained below two percent annually due to high switching costs and mission-critical workflows.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-10-b1",
        "prompt": "Nuestro ratio de LTV a CAC se sitúa en un saludable cuatro a uno.",
        "answer": "Our LTV to CAC ratio stands at a healthy four to one",
        "tokens": [
          "Our",
          "LTV",
          "to",
          "CAC",
          "ratio",
          "stands",
          "at",
          "a",
          "healthy",
          "four",
          "one",
          "annual",
          "customer"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-10-b2",
        "prompt": "Nuestra tasa de cancelación anual se mantiene por debajo del dos por ciento.",
        "answer": "Our annual customer churn rate is maintained below two percent",
        "tokens": [
          "Our",
          "annual",
          "customer",
          "churn",
          "rate",
          "is",
          "maintained",
          "below",
          "two",
          "percent",
          "ratio",
          "stands"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-10-b3",
        "prompt": "¿Genera su empresa márgenes brutos superiores al setenta y cinco por ciento?",
        "answer": "Does your enterprise generate gross margins exceeding seventy five percent",
        "tokens": [
          "Does",
          "your",
          "enterprise",
          "generate",
          "gross",
          "margins",
          "exceeding",
          "seventy",
          "five",
          "percent",
          "ratio",
          "stands"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-10-e1",
        "audioText": "We are enthusiastically approving the one point five million dollar seed investment because the founders demonstrated a four point two to one LTV to CAC ratio and verified eighty percent gross margins.",
        "correctAnswer": "We are enthusiastically approving the one point five million dollar seed investment because the founders demonstrated a four point two to one LTV to CAC ratio and verified eighty percent gross margins.",
        "options": [
          "We are enthusiastically approving the one point five million dollar seed investment because the founders demonstrated a four point two to one LTV to CAC ratio and verified eighty percent gross margins.",
          "Our LTV to CAC ratio stands at a healthy four to one.",
          "Our annual customer churn rate is maintained below two percent."
        ]
      },
      {
        "id": "elite-10-e2",
        "audioText": "Our LTV to CAC ratio stands at a healthy four to one.",
        "correctAnswer": "Our LTV to CAC ratio stands at a healthy four to one.",
        "options": [
          "Our annual customer churn rate is maintained below two percent.",
          "Our LTV to CAC ratio stands at a healthy four to one.",
          "Does your enterprise generate gross margins exceeding seventy-five percent?"
        ]
      },
      {
        "id": "elite-10-e3",
        "audioText": "Our annual customer churn rate is maintained below two percent.",
        "correctAnswer": "Our annual customer churn rate is maintained below two percent.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Does your enterprise generate gross margins exceeding seventy-five percent?",
          "Our annual customer churn rate is maintained below two percent."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-11",
    "badgeName": "Level 9 Grand Capstone",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "elite-11-1",
        "term": "Innovate",
        "translation": "Innovar sin límites",
        "ipa": "/ˈɪnəveɪt/",
        "audioText": "Innovate. We innovated boldly.",
        "example": "We innovated boldly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-11-2",
        "term": "Scale",
        "translation": "Escalar globalmente",
        "ipa": "/skeɪl/",
        "audioText": "Scale. We scaled to millions.",
        "example": "We scaled to millions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-11-3",
        "term": "Transform",
        "translation": "Transformar industrias",
        "ipa": "/trænsˈfɔːrm/",
        "audioText": "Transform. We transformed education.",
        "example": "We transformed education.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-11-4",
        "term": "Command",
        "translation": "Comandar con autoridad",
        "ipa": "/kəˈmænd/",
        "audioText": "Command. She commanded the stage.",
        "example": "She commanded the stage.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-11-5",
        "term": "Empower",
        "translation": "Empoderar a millones",
        "ipa": "/ɪmˈpaʊər/",
        "audioText": "Empower. We empowered youth.",
        "example": "We empowered youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "elite-11-6",
        "term": "What our platform achieves is not merely digital education, but profound socioeconomic transformation",
        "translation": "Abre con una hendidura enfática que atrape el corazón de los inversionistas.",
        "ipa": "/what/",
        "audioText": "What our technology accomplishes is empowering thousands of rural students to become world-class software creators.",
        "example": "What our technology accomplishes is empowering thousands of rural students to become world-class software creators.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "elite-11-7",
        "term": "Not only did our venture achieve product-market fit, but we also generated three million dollars in ARR",
        "translation": "Usa inversiones retóricas solemnes para proclamar la velocidad de crecimiento.",
        "ipa": "/not/",
        "audioText": "Not only did our platform onboard fifty thousand active users in twelve months, but we also achieved eighty-two percent gross margins.",
        "example": "Not only did our platform onboard fifty thousand active users in twelve months, but we also achieved eighty-two percent gross margins.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "elite-11-b1",
        "prompt": "Lo que nuestra tecnología logra es empoderar a miles de estudiantes rurales.",
        "answer": "What our technology achieves is empowering thousands of rural students",
        "tokens": [
          "What",
          "our",
          "technology",
          "achieves",
          "is",
          "empowering",
          "thousands",
          "of",
          "rural",
          "students",
          "Rarely",
          "startup"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-11-b2",
        "prompt": "Rara vez una startup ha alcanzado tales márgenes de rentabilidad.",
        "answer": "Rarely has a startup achieved such profit margins",
        "tokens": [
          "Rarely",
          "has",
          "a",
          "startup",
          "achieved",
          "such",
          "profit",
          "margins",
          "What",
          "technology"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "elite-11-b3",
        "prompt": "¿Cómo empoderará su dominio del inglés su trayectoria como fundador?",
        "answer": "How will your mastery of English empower your trajectory as founder",
        "tokens": [
          "How",
          "will",
          "your",
          "mastery",
          "of",
          "English",
          "empower",
          "trajectory",
          "as",
          "founder",
          "What",
          "technology"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "elite-11-e1",
        "audioText": "We are unanimously issuing a two-million-dollar seed term sheet to this startup because of their exceptional unit economics, unshakeable proprietary moats, and charismatic youth leadership.",
        "correctAnswer": "We are unanimously issuing a two-million-dollar seed term sheet to this startup because of their exceptional unit economics, unshakeable proprietary moats, and charismatic youth leadership.",
        "options": [
          "We are unanimously issuing a two-million-dollar seed term sheet to this startup because of their exceptional unit economics, unshakeable proprietary moats, and charismatic youth leadership.",
          "What our technology achieves is empowering thousands of rural students.",
          "Rarely has a startup achieved such profit margins."
        ]
      },
      {
        "id": "elite-11-e2",
        "audioText": "What our technology achieves is empowering thousands of rural students.",
        "correctAnswer": "What our technology achieves is empowering thousands of rural students.",
        "options": [
          "Rarely has a startup achieved such profit margins.",
          "What our technology achieves is empowering thousands of rural students.",
          "How will your mastery of English empower your trajectory as founder?"
        ]
      },
      {
        "id": "elite-11-e3",
        "audioText": "Rarely has a startup achieved such profit margins.",
        "correctAnswer": "Rarely has a startup achieved such profit margins.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How will your mastery of English empower your trajectory as founder?",
          "Rarely has a startup achieved such profit margins."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-1",
    "badgeName": "Oxford-Union Parliamentary Debate & Dialectical Refutation",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-1-1",
        "term": "Dismantle",
        "translation": "Desmantelar un sofisma",
        "ipa": "/dɪsˈmæntl/",
        "audioText": "Dismantle. She dismantled their fallacy.",
        "example": "She dismantled their fallacy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-1-2",
        "term": "Outweigh",
        "translation": "Pesar más que el daño",
        "ipa": "/ˌaʊtˈweɪ/",
        "audioText": "Outweigh. Benefits outweigh the costs.",
        "example": "Benefits outweigh the costs.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-1-3",
        "term": "Interrogate",
        "translation": "Interrogar premisas",
        "ipa": "/ɪnˈterəɡeɪt/",
        "audioText": "Interrogate. We interrogated their data.",
        "example": "We interrogated their data.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-1-4",
        "term": "Enshrine",
        "translation": "Consagrar en ley",
        "ipa": "/ɪnˈʃraɪn/",
        "audioText": "Enshrine. The motion enshrines ethics.",
        "example": "The motion enshrines ethics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-1-5",
        "term": "Rebut",
        "translation": "Refutar con elegancia",
        "ipa": "/rɪˈbʌt/",
        "audioText": "Rebut. He rebutted every claim.",
        "example": "He rebutted every claim.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-1-6",
        "term": "On a point of information: does the honorable delegate concede that empirical data refutes their model?",
        "translation": "Interpelación de máximo 15 segundos directa y concisa.",
        "ipa": "/on/",
        "audioText": "Point of information, Mr. Prime Minister: how does your government plan to fund this subsidy without increasing sovereign debt?",
        "example": "Point of information, Mr. Prime Minister: how does your government plan to fund this subsidy without increasing sovereign debt?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-1-7",
        "term": "The opposition asserts that regulation stifles growth; however, empirical economic history demonstrates that clear rules unlock investment",
        "translation": "Desarma el argumento contrario antes de construir tu propia evidencia.",
        "ipa": "/the/",
        "audioText": "The opposition asserts that carbon taxation damages industry; however, economic data demonstrates that green subsidies accelerate GDP growth.",
        "example": "The opposition asserts that carbon taxation damages industry; however, economic data demonstrates that green subsidies accelerate GDP growth.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-1-b1",
        "prompt": "Los datos empíricos demuestran que las salvaguardas éticas aceleran la inversión.",
        "answer": "Empirical data proves that ethical guardrails accelerate investment",
        "tokens": [
          "Empirical",
          "data",
          "proves",
          "that",
          "ethical",
          "guardrails",
          "accelerate",
          "investment",
          "opposing",
          "leader"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-1-b2",
        "prompt": "El líder opositor presenta un falso dilema entre privacidad y seguridad.",
        "answer": "The opposing leader presents a false dilemma between privacy and security",
        "tokens": [
          "The",
          "opposing",
          "leader",
          "presents",
          "a",
          "false",
          "dilemma",
          "between",
          "privacy",
          "and",
          "security",
          "Empirical",
          "data"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-1-b3",
        "prompt": "¿Qué precedente moral duradero establecerá esta cámara parlamentaria hoy?",
        "answer": "What enduring moral precedent will this parliamentary chamber establish today",
        "tokens": [
          "What",
          "enduring",
          "moral",
          "precedent",
          "will",
          "this",
          "parliamentary",
          "chamber",
          "establish",
          "today",
          "Empirical",
          "data"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-1-e1",
        "audioText": "The proposition team won the historic Oxford Union division because their refutations dismantled the opposition's false dichotomy and their empirical weighing proved decisive.",
        "correctAnswer": "The proposition team won the historic Oxford Union division because their refutations dismantled the opposition's false dichotomy and their empirical weighing proved decisive.",
        "options": [
          "The proposition team won the historic Oxford Union division because their refutations dismantled the opposition's false dichotomy and their empirical weighing proved decisive.",
          "Empirical data proves that ethical guardrails accelerate investment.",
          "The opposing leader presents a false dilemma between privacy and security."
        ]
      },
      {
        "id": "masters-1-e2",
        "audioText": "Empirical data proves that ethical guardrails accelerate investment.",
        "correctAnswer": "Empirical data proves that ethical guardrails accelerate investment.",
        "options": [
          "The opposing leader presents a false dilemma between privacy and security.",
          "Empirical data proves that ethical guardrails accelerate investment.",
          "What enduring moral precedent will this parliamentary chamber establish today?"
        ]
      },
      {
        "id": "masters-1-e3",
        "audioText": "The opposing leader presents a false dilemma between privacy and security.",
        "correctAnswer": "The opposing leader presents a false dilemma between privacy and security.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What enduring moral precedent will this parliamentary chamber establish today?",
          "The opposing leader presents a false dilemma between privacy and security."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-2",
    "badgeName": "Pop Culture Semiotics, Media Ecology & Digital Memetics",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-2-1",
        "term": "Deconstruct",
        "translation": "Deconstruir el subtexto",
        "ipa": "/ˌdiːkənˈstrʌkt/",
        "audioText": "Deconstruct. She deconstructed the sign.",
        "example": "She deconstructed the sign.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-2-2",
        "term": "Connote",
        "translation": "Connotar estatus social",
        "ipa": "/kəˈnoʊt/",
        "audioText": "Connote. The logo connotes prestige.",
        "example": "The logo connotes prestige.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-2-3",
        "term": "Supersede",
        "translation": "Reemplazar / Superar",
        "ipa": "/ˌsuːpərˈsiːd/",
        "audioText": "Supersede. Simulacra superseded reality.",
        "example": "Simulacra superseded reality.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-2-4",
        "term": "Condition",
        "translation": "Condicionar la percepción",
        "ipa": "/kənˈdɪʃn/",
        "audioText": "Condition. Media conditioned cognition.",
        "example": "Media conditioned cognition.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-2-5",
        "term": "Propagate",
        "translation": "Propagar ideas virales",
        "ipa": "/ˈprɑːpəɡeɪt/",
        "audioText": "Propagate. Memes propagated rapidly.",
        "example": "Memes propagated rapidly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-2-6",
        "term": "While the visual signifier is a sleek aluminum smartphone, the cultural signified represents hyper-connectivity and social prestige",
        "translation": "Diferencia la forma física del significado cultural profundo.",
        "ipa": "/while/",
        "audioText": "While the visual signifier is an minimalist electric sports car, the cultural signified embodies progressive ecological luxury and social prestige.",
        "example": "While the visual signifier is an minimalist electric sports car, the cultural signified embodies progressive ecological luxury and social prestige.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-2-7",
        "term": "The architectural structure of infinite-scroll feeds fundamentally reshapes human dopamine pathways and attention spans",
        "translation": "Explica cómo la interfaz tecnológica altera la percepción humana.",
        "ipa": "/the/",
        "audioText": "The technical architecture of algorithmic recommendation engines fundamentally conditions how teenagers perceive cultural authenticity.",
        "example": "The technical architecture of algorithmic recommendation engines fundamentally conditions how teenagers perceive cultural authenticity.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-2-b1",
        "prompt": "El significante es el auto eléctrico pero el significado encarna prestigio social.",
        "answer": "The signifier is the electric car but the signified embodies social prestige",
        "tokens": [
          "The",
          "signifier",
          "is",
          "the",
          "electric",
          "car",
          "but",
          "signified",
          "embodies",
          "social",
          "prestige",
          "Curated",
          "digital"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-2-b2",
        "prompt": "Los espectáculos digitales curados reemplazan la experiencia física auténtica.",
        "answer": "Curated digital spectacles supersede authentic physical experience",
        "tokens": [
          "Curated",
          "digital",
          "spectacles",
          "supersede",
          "authentic",
          "physical",
          "experience",
          "signifier",
          "electric"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-2-b3",
        "prompt": "¿De qué manera condicionan los algoritmos la percepción de autenticidad?",
        "answer": "How do algorithms condition the perception of authenticity",
        "tokens": [
          "How",
          "do",
          "algorithms",
          "condition",
          "the",
          "perception",
          "of",
          "authenticity",
          "signifier",
          "electric"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-2-e1",
        "audioText": "Digital beautifying filters operate as Baudrillardian simulacra where the simulated digital image supersedes authentic physical reality, constructing an inescapable hyperreal ideal.",
        "correctAnswer": "Digital beautifying filters operate as Baudrillardian simulacra where the simulated digital image supersedes authentic physical reality, constructing an inescapable hyperreal ideal.",
        "options": [
          "Digital beautifying filters operate as Baudrillardian simulacra where the simulated digital image supersedes authentic physical reality, constructing an inescapable hyperreal ideal.",
          "The signifier is the electric car but the signified embodies social prestige.",
          "Curated digital spectacles supersede authentic physical experience."
        ]
      },
      {
        "id": "masters-2-e2",
        "audioText": "The signifier is the electric car but the signified embodies social prestige.",
        "correctAnswer": "The signifier is the electric car but the signified embodies social prestige.",
        "options": [
          "Curated digital spectacles supersede authentic physical experience.",
          "The signifier is the electric car but the signified embodies social prestige.",
          "How do algorithms condition the perception of authenticity?"
        ]
      },
      {
        "id": "masters-2-e3",
        "audioText": "Curated digital spectacles supersede authentic physical experience.",
        "correctAnswer": "Curated digital spectacles supersede authentic physical experience.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How do algorithms condition the perception of authenticity?",
          "Curated digital spectacles supersede authentic physical experience."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-3",
    "badgeName": "Ivy League Graduate Seminars & Socratic Cross-Examination",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-3-1",
        "term": "Falsify",
        "translation": "Falsear empíricamente una teoría",
        "ipa": "/ˈfɔːlsɪfaɪ/",
        "audioText": "Falsify. Evidence falsified the model.",
        "example": "Evidence falsified the model.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-3-2",
        "term": "Interrogate",
        "translation": "Interrogar supuestos",
        "ipa": "/ɪnˈterəɡeɪt/",
        "audioText": "Interrogate. We interrogated assumptions.",
        "example": "We interrogated assumptions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-3-3",
        "term": "Reconcile",
        "translation": "Conciliar contradicciones",
        "ipa": "/ˈrekənsaɪl/",
        "audioText": "Reconcile. They reconciled the divide.",
        "example": "They reconciled the divide.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-3-4",
        "term": "Demarcate",
        "translation": "Demarcar ciencia de dogma",
        "ipa": "/ˈdiːmɑːrkeɪt/",
        "audioText": "Demarcate. Popper demarcated science.",
        "example": "Popper demarcated science.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-3-5",
        "term": "Reify",
        "translation": "Cosificar conceptos abstractos",
        "ipa": "/ˈriːɪfaɪ/",
        "audioText": "Reify. Never reify an algorithm.",
        "example": "Never reify an algorithm.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-3-6",
        "term": "Our theoretical model satisfies Popper's falsifiability criterion: it would be disproven if anomaly X were detected",
        "translation": "Demuestra que tu investigación es ciencia rigurosa y no dogma incontrastable.",
        "ipa": "/our/",
        "audioText": "Our quantum model satisfies Karl Popper's falsifiability criterion: it would be unequivocally disproven if anomalous energy loss were detected during vacuum cycles.",
        "example": "Our quantum model satisfies Karl Popper's falsifiability criterion: it would be unequivocally disproven if anomalous energy loss were detected during vacuum cycles.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-3-7",
        "term": "Upon what epistemological foundation do you assert that artificial neural networks possess genuine understanding?",
        "translation": "Interroga la base del conocimiento antes de aceptar una conclusión.",
        "ipa": "/upon/",
        "audioText": "Upon what epistemological premise does your research assert that algorithmic pattern matching constitutes genuine conscious understanding?",
        "example": "Upon what epistemological premise does your research assert that algorithmic pattern matching constitutes genuine conscious understanding?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-3-b1",
        "prompt": "Nuestro modelo cuántico satisface el criterio de falsabilidad de Karl Popper.",
        "answer": "Our quantum model satisfies Karl Popper s falsifiability criterion",
        "tokens": [
          "Our",
          "quantum",
          "model",
          "satisfies",
          "Karl",
          "Popper",
          "s",
          "falsifiability",
          "criterion",
          "Defining",
          "intelligence"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-3-b2",
        "prompt": "Definir inteligencia solo con pruebas computacionales comete una tautología circular.",
        "answer": "Defining intelligence purely with tests commits a circular tautology",
        "tokens": [
          "Defining",
          "intelligence",
          "purely",
          "with",
          "tests",
          "commits",
          "a",
          "circular",
          "tautology",
          "quantum",
          "model"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-3-b3",
        "prompt": "¿Sobre qué premisa epistemológica afirma que la IA comprende de verdad?",
        "answer": "Upon what epistemological premise do you claim AI truly understands",
        "tokens": [
          "Upon",
          "what",
          "epistemological",
          "premise",
          "do",
          "you",
          "claim",
          "AI",
          "truly",
          "understands",
          "quantum",
          "model"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-3-e1",
        "audioText": "The doctoral committee unanimously passed this dissertation with distinction because the candidate rigorously demonstrated the empirical falsifiability of their quantum model while deconstructing foundational category mistakes.",
        "correctAnswer": "The doctoral committee unanimously passed this dissertation with distinction because the candidate rigorously demonstrated the empirical falsifiability of their quantum model while deconstructing foundational category mistakes.",
        "options": [
          "The doctoral committee unanimously passed this dissertation with distinction because the candidate rigorously demonstrated the empirical falsifiability of their quantum model while deconstructing foundational category mistakes.",
          "Our quantum model satisfies Karl Popper's falsifiability criterion.",
          "Defining intelligence purely with tests commits a circular tautology."
        ]
      },
      {
        "id": "masters-3-e2",
        "audioText": "Our quantum model satisfies Karl Popper's falsifiability criterion.",
        "correctAnswer": "Our quantum model satisfies Karl Popper's falsifiability criterion.",
        "options": [
          "Defining intelligence purely with tests commits a circular tautology.",
          "Our quantum model satisfies Karl Popper's falsifiability criterion.",
          "Upon what epistemological premise do you claim AI truly understands?"
        ]
      },
      {
        "id": "masters-3-e3",
        "audioText": "Defining intelligence purely with tests commits a circular tautology.",
        "correctAnswer": "Defining intelligence purely with tests commits a circular tautology.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Upon what epistemological premise do you claim AI truly understands?",
          "Defining intelligence purely with tests commits a circular tautology."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-4",
    "badgeName": "TED Keynotes, High-Impact Storytelling & Thought Leadership",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-4-1",
        "term": "Catalyze",
        "translation": "Catalizar una revolución",
        "ipa": "/ˈkætəlaɪz/",
        "audioText": "Catalyze. Her talk catalyzed change.",
        "example": "Her talk catalyzed change.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-4-2",
        "term": "Resonate",
        "translation": "Resonar con la audiencia",
        "ipa": "/ˈrezəneɪt/",
        "audioText": "Resonate. Her story resonated deeply.",
        "example": "Her story resonated deeply.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-4-3",
        "term": "Magnify",
        "translation": "Magnificar el impacto",
        "ipa": "/ˈmæɡnɪfaɪ/",
        "audioText": "Magnify. Metaphors magnified ideas.",
        "example": "Metaphors magnified ideas.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-4-4",
        "term": "Ignite",
        "translation": "Encender la chispa",
        "ipa": "/ɪɡˈnaɪt/",
        "audioText": "Ignite. He ignited public passion.",
        "example": "He ignited public passion.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-4-5",
        "term": "Transform",
        "translation": "Transformar mentes",
        "ipa": "/trænsˈfɔːrm/",
        "audioText": "Transform. The speech transformed us.",
        "example": "The speech transformed us.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-4-6",
        "term": "As a young engineer who grew up in rural Colombia (Ethos), I witnessed brilliant children studying without power (Pathos), yet our solar kits proved that clean energy accelerates literacy by 40% (Logos)",
        "translation": "Une la vivencia personal, la empatía humana y la evidencia científica en una sola narrativa.",
        "ipa": "/as/",
        "audioText": "As a young software creator from Boyaca, I watched my peers struggle without connectivity, yet our solar-powered hubs proved that digital literacy accelerates by forty percent when students are given equal tools.",
        "example": "As a young software creator from Boyaca, I watched my peers struggle without connectivity, yet our solar-powered hubs proved that digital literacy accelerates by forty percent when students are given equal tools.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-4-7",
        "term": "Think of education not as filling a bucket, but as lighting an unquenchable fire",
        "translation": "Usa analogías visuales que la audiencia nunca pueda olvidar.",
        "ipa": "/think/",
        "audioText": "Think of artificial intelligence not as a machine that replaces human genius, but as an intellectual telescope that magnifies our creative vision.",
        "example": "Think of artificial intelligence not as a machine that replaces human genius, but as an intellectual telescope that magnifies our creative vision.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-4-b1",
        "prompt": "Piensen en la IA como un telescopio intelectual que magnifica la curiosidad.",
        "answer": "Think of AI as an intellectual telescope that magnifies curiosity",
        "tokens": [
          "Think",
          "of",
          "AI",
          "as",
          "an",
          "intellectual",
          "telescope",
          "that",
          "magnifies",
          "curiosity",
          "solar",
          "hubs"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-4-b2",
        "prompt": "Nuestros centros solares demostraron que la alfabetización se acelera con herramientas equitativas.",
        "answer": "Our solar hubs proved literacy accelerates with equitable tools",
        "tokens": [
          "Our",
          "solar",
          "hubs",
          "proved",
          "literacy",
          "accelerates",
          "with",
          "equitable",
          "tools",
          "Think",
          "intellectual"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-4-b3",
        "prompt": "¿Qué futuro extraordinario creará nuestra generación cuando elijamos el coraje?",
        "answer": "What extraordinary future will our generation create when we choose courage",
        "tokens": [
          "What",
          "extraordinary",
          "future",
          "will",
          "our",
          "generation",
          "create",
          "when",
          "we",
          "choose",
          "courage",
          "Think",
          "intellectual"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-4-e1",
        "audioText": "Mariana's keynote received a standing ovation because she balanced raw personal vulnerability with an unshakeable sticky metaphor and rigorous empirical data.",
        "correctAnswer": "Mariana's keynote received a standing ovation because she balanced raw personal vulnerability with an unshakeable sticky metaphor and rigorous empirical data.",
        "options": [
          "Mariana's keynote received a standing ovation because she balanced raw personal vulnerability with an unshakeable sticky metaphor and rigorous empirical data.",
          "Think of AI as an intellectual telescope that magnifies curiosity.",
          "Our solar hubs proved literacy accelerates with equitable tools."
        ]
      },
      {
        "id": "masters-4-e2",
        "audioText": "Think of AI as an intellectual telescope that magnifies curiosity.",
        "correctAnswer": "Think of AI as an intellectual telescope that magnifies curiosity.",
        "options": [
          "Our solar hubs proved literacy accelerates with equitable tools.",
          "Think of AI as an intellectual telescope that magnifies curiosity.",
          "What extraordinary future will our generation create when we choose courage?"
        ]
      },
      {
        "id": "masters-4-e3",
        "audioText": "Our solar hubs proved literacy accelerates with equitable tools.",
        "correctAnswer": "Our solar hubs proved literacy accelerates with equitable tools.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What extraordinary future will our generation create when we choose courage?",
          "Our solar hubs proved literacy accelerates with equitable tools."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-5",
    "badgeName": "Geopolitical Strategy, Bilateral Treaties & Multilateral Summits",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-5-1",
        "term": "Mandate",
        "translation": "Ordenar legalmente",
        "ipa": "/ˈmændeɪt/",
        "audioText": "Mandate. The UN mandated peace.",
        "example": "The UN mandated peace.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-5-2",
        "term": "Ratify",
        "translation": "Ratificar un tratado",
        "ipa": "/ˈrætɪfaɪ/",
        "audioText": "Ratify. Nations ratified the pact.",
        "example": "Nations ratified the pact.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-5-3",
        "term": "Enforce",
        "translation": "Hacer cumplir la ley",
        "ipa": "/ɪnˈfɔːrs/",
        "audioText": "Enforce. We enforced sanctions.",
        "example": "We enforced sanctions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-5-4",
        "term": "Reaffirm",
        "translation": "Reafirmar compromisos",
        "ipa": "/ˌriːəˈfɜːrm/",
        "audioText": "Reaffirm. Envoys reaffirmed the charter.",
        "example": "Envoys reaffirmed the charter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-5-5",
        "term": "Resolve",
        "translation": "Resolver en asamblea",
        "ipa": "/rɪˈzɑːlv/",
        "audioText": "Resolve. The council resolved to act.",
        "example": "The council resolved to act.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-5-6",
        "term": "Reaffirming the inviolable principles of international law, and Emphasizing the urgent need for global ecological conservation...",
        "translation": "Inician siempre con mayúscula y coma final para conectar con las acciones.",
        "ipa": "/reaffirming/",
        "audioText": "Reaffirming the foundational commitments of the Paris Climate Agreement, and Recognizing the disproportionate vulnerability of developing island states...",
        "example": "Reaffirming the foundational commitments of the Paris Climate Agreement, and Recognizing the disproportionate vulnerability of developing island states...",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-5-7",
        "term": "1. Resolves that all signatory member states allocate two percent of GDP to renewable energy transition",
        "translation": "Oraciones numeradas que dictan órdenes y obligaciones jurídicas vinculantes.",
        "ipa": "/1/",
        "audioText": "1. Resolves that all signatory nations allocate five percent of defense budgets to international climate mitigation endowments.",
        "example": "1. Resolves that all signatory nations allocate five percent of defense budgets to international climate mitigation endowments.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-5-b1",
        "prompt": "Reafirmando los principios universales de conservación ecológica y paz mundial.",
        "answer": "Reaffirming universal principles of ecological conservation and peace",
        "tokens": [
          "Reaffirming",
          "universal",
          "principles",
          "of",
          "ecological",
          "conservation",
          "and",
          "peace",
          "Resolves",
          "that"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-5-b2",
        "prompt": "1. Resuelve que todas las naciones establecerán corredores protegidos para 2035.",
        "answer": "1 Resolves that all nations shall establish protected corridors by 2035",
        "tokens": [
          "1",
          "Resolves",
          "that",
          "all",
          "nations",
          "shall",
          "establish",
          "protected",
          "corridors",
          "by",
          "2035",
          "Reaffirming",
          "universal"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-5-b3",
        "prompt": "¿Ejerce alguna delegación permanente el poder de veto contra este acuerdo?",
        "answer": "Does any permanent delegation exercise veto power against this accord",
        "tokens": [
          "Does",
          "any",
          "permanent",
          "delegation",
          "exercise",
          "veto",
          "power",
          "against",
          "this",
          "accord",
          "Reaffirming",
          "universal"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-5-e1",
        "audioText": "Draft Resolution 2035, mandating universal clean energy transition and establishing protected biological corridors, has received fifteen affirmative votes and zero vetoes.",
        "correctAnswer": "Draft Resolution 2035, mandating universal clean energy transition and establishing protected biological corridors, has received fifteen affirmative votes and zero vetoes.",
        "options": [
          "Draft Resolution 2035, mandating universal clean energy transition and establishing protected biological corridors, has received fifteen affirmative votes and zero vetoes.",
          "The resolution is adopted.",
          "Reaffirming universal principles of ecological conservation and peace."
        ]
      },
      {
        "id": "masters-5-e2",
        "audioText": "The resolution is adopted.",
        "correctAnswer": "The resolution is adopted.",
        "options": [
          "Reaffirming universal principles of ecological conservation and peace.",
          "The resolution is adopted.",
          "1. Resolves that all nations shall establish protected corridors by 2035."
        ]
      },
      {
        "id": "masters-5-e3",
        "audioText": "Reaffirming universal principles of ecological conservation and peace.",
        "correctAnswer": "Reaffirming universal principles of ecological conservation and peace.",
        "options": [
          "Does any permanent delegation exercise veto power against this accord?",
          "1. Resolves that all nations shall establish protected corridors by 2035.",
          "Reaffirming universal principles of ecological conservation and peace."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-6",
    "badgeName": "Literary Critique, Cinematic Deconstruction & Aesthetic Analysis",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-6-1",
        "term": "Externalize",
        "translation": "Exteriorizar la psicología",
        "ipa": "/ɪkˈstɜːrnəlaɪz/",
        "audioText": "Externalize. Lighting externalized dread.",
        "example": "Lighting externalized dread.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-6-2",
        "term": "Juxtapose",
        "translation": "Yuxtaponer sonido e imagen",
        "ipa": "/ˌdʒʌkstəˈpoʊz/",
        "audioText": "Juxtapose. He juxtaposed silence.",
        "example": "He juxtaposed silence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-6-3",
        "term": "Subvert",
        "translation": "Subvertir expectativas",
        "ipa": "/səbˈvɜːrt/",
        "audioText": "Subvert. The ending subverted tropes.",
        "example": "The ending subverted tropes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-6-4",
        "term": "Evoke",
        "translation": "Evocar una atmósfera",
        "ipa": "/ɪˈvoʊk/",
        "audioText": "Evoke. Color evoked melancholy.",
        "example": "Color evoked melancholy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-6-5",
        "term": "Dissolve",
        "translation": "Disolver fronteras",
        "ipa": "/dɪˈzɑːlv/",
        "audioText": "Dissolve. Memory dissolved time.",
        "example": "Memory dissolved time.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-6-6",
        "term": "The director's stark chiaroscuro lighting externalizes the moral ambiguity of the protagonist",
        "translation": "Explica cómo la luz y el encuadre reflejan la psicología de los personajes.",
        "ipa": "/the/",
        "audioText": "The filmmaker's oppressive framing and stark chiaroscuro lighting externalize the character's suffocating alienation in the modern metropolis.",
        "example": "The filmmaker's oppressive framing and stark chiaroscuro lighting externalize the character's suffocating alienation in the modern metropolis.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-6-7",
        "term": "The stark contrast between harsh diegetic breathing and the sweeping orchestral score heightens dramatic tension",
        "translation": "Analiza el impacto del sonido en la inmersión de la audiencia.",
        "ipa": "/the/",
        "audioText": "The sudden silencing of diegetic background audio juxtaposed against a melancholic cello score heightens the existential gravity of the climax.",
        "example": "The sudden silencing of diegetic background audio juxtaposed against a melancholic cello score heightens the existential gravity of the climax.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-6-b1",
        "prompt": "La iluminación de claroscuro tenue exterioriza el aislamiento moral del personaje.",
        "answer": "Low key chiaroscuro lighting externalizes the character s moral isolation",
        "tokens": [
          "Low",
          "key",
          "chiaroscuro",
          "lighting",
          "externalizes",
          "the",
          "character",
          "s",
          "moral",
          "isolation",
          "sudden",
          "silencing"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-6-b2",
        "prompt": "El silenciamiento repentino del sonido diegético intensifica el clímax dramático.",
        "answer": "The sudden silencing of diegetic sound heightens the dramatic climax",
        "tokens": [
          "The",
          "sudden",
          "silencing",
          "of",
          "diegetic",
          "sound",
          "heightens",
          "the",
          "dramatic",
          "climax",
          "chiaroscuro",
          "lighting"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-6-b3",
        "prompt": "¿Refuerza el encuadre asimétrico la fragmentación psicológica del protagonista?",
        "answer": "Does asymmetrical framing reinforce the protagonist s fragmentation",
        "tokens": [
          "Does",
          "asymmetrical",
          "framing",
          "reinforce",
          "the",
          "protagonist",
          "s",
          "fragmentation",
          "chiaroscuro",
          "lighting"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-6-e1",
        "audioText": "The jury unanimously awards the Palme d'Or to this cinematic masterpiece for its groundbreaking chiaroscuro mise-en-scène, innovative diegetic soundscapes, and profound literary depth.",
        "correctAnswer": "The jury unanimously awards the Palme d'Or to this cinematic masterpiece for its groundbreaking chiaroscuro mise-en-scène, innovative diegetic soundscapes, and profound literary depth.",
        "options": [
          "The jury unanimously awards the Palme d'Or to this cinematic masterpiece for its groundbreaking chiaroscuro mise-en-scène, innovative diegetic soundscapes, and profound literary depth.",
          "Low-key chiaroscuro lighting externalizes the character's moral isolation.",
          "The sudden silencing of diegetic sound heightens the dramatic climax."
        ]
      },
      {
        "id": "masters-6-e2",
        "audioText": "Low-key chiaroscuro lighting externalizes the character's moral isolation.",
        "correctAnswer": "Low-key chiaroscuro lighting externalizes the character's moral isolation.",
        "options": [
          "The sudden silencing of diegetic sound heightens the dramatic climax.",
          "Low-key chiaroscuro lighting externalizes the character's moral isolation.",
          "Does asymmetrical framing reinforce the protagonist's fragmentation?"
        ]
      },
      {
        "id": "masters-6-e3",
        "audioText": "The sudden silencing of diegetic sound heightens the dramatic climax.",
        "correctAnswer": "The sudden silencing of diegetic sound heightens the dramatic climax.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Does asymmetrical framing reinforce the protagonist's fragmentation?",
          "The sudden silencing of diegetic sound heightens the dramatic climax."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-7",
    "badgeName": "Rhodes & Fulbright International Fellowship Interviews",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-7-1",
        "term": "Spearhead",
        "translation": "Encabezar una reforma",
        "ipa": "/ˈspɪrhed/",
        "audioText": "Spearhead. She spearheaded reform.",
        "example": "She spearheaded reform.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-7-2",
        "term": "Bequeath",
        "translation": "Legar a futuras generaciones",
        "ipa": "/bɪˈkwiːð/",
        "audioText": "Bequeath. We bequeathed a legacy.",
        "example": "We bequeathed a legacy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-7-3",
        "term": "Galvanize",
        "translation": "Movilizar voluntades",
        "ipa": "/ˈɡælvənaɪz/",
        "audioText": "Galvanize. He galvanized youth.",
        "example": "He galvanized youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-7-4",
        "term": "Uphold",
        "translation": "Defender principios morales",
        "ipa": "/ʌpˈhoʊld/",
        "audioText": "Uphold. She upheld moral integrity.",
        "example": "She upheld moral integrity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-7-5",
        "term": "Dismantle",
        "translation": "Desmantelar la desigualdad",
        "ipa": "/dɪsˈmæntl/",
        "audioText": "Dismantle. We dismantled barriers.",
        "example": "We dismantled barriers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-7-6",
        "term": "When forty rural schools faced total digital blackout (S), I was tasked with restoring connectivity (T); I mobilized youth engineers to build solar hubs (A), achieving a 40% literacy surge (R) and establishing an enduring municipal policy (T)",
        "translation": "Une la acción concreta con la transformación institucional a largo plazo.",
        "ipa": "/when/",
        "audioText": "When our region faced severe water contamination, I mobilized student researchers to invent solar nanofiltration, reducing pollutants by ninety-eight percent and transforming regional public health policy.",
        "example": "When our region faced severe water contamination, I mobilized student researchers to invent solar nanofiltration, reducing pollutants by ninety-eight percent and transforming regional public health policy.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-7-7",
        "term": "True leadership is not measured by personal accolades, but by the courage to stand for justice when it costs everything",
        "translation": "El criterio #1 de la Beca Rhodes: integridad ética innegociable.",
        "ipa": "/true/",
        "audioText": "When confronted with corporate pressure to compromise environmental standards, our student board chose to forfeit funding rather than betray our ecological integrity.",
        "example": "When confronted with corporate pressure to compromise environmental standards, our student board chose to forfeit funding rather than betray our ecological integrity.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-7-b1",
        "prompt": "Elegimos renunciar a la financiación antes que comprometer nuestra integridad ética.",
        "answer": "We chose to forfeit funding rather than compromise our ethical integrity",
        "tokens": [
          "We",
          "chose",
          "to",
          "forfeit",
          "funding",
          "rather",
          "than",
          "compromise",
          "our",
          "ethical",
          "integrity",
          "true",
          "Rhodes"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-7-b2",
        "prompt": "Un verdadero becario Rhodes combina excelencia académica con liderazgo de servicio.",
        "answer": "A true Rhodes scholar combines scholarly excellence with servant leadership",
        "tokens": [
          "A",
          "true",
          "Rhodes",
          "scholar",
          "combines",
          "scholarly",
          "excellence",
          "with",
          "servant",
          "leadership",
          "chose",
          "forfeit"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-7-b3",
        "prompt": "¿Cómo desmantelará su investigación la desigualdad educativa sistémica?",
        "answer": "How will your research directly dismantle systemic inequality",
        "tokens": [
          "How",
          "will",
          "your",
          "research",
          "directly",
          "dismantle",
          "systemic",
          "inequality",
          "chose",
          "forfeit"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-7-e1",
        "audioText": "We are unanimously electing Santiago as our Rhodes Scholar because of his unshakeable moral force of character, proven systemic community impact, and vision to fight the world's fight at Oxford.",
        "correctAnswer": "We are unanimously electing Santiago as our Rhodes Scholar because of his unshakeable moral force of character, proven systemic community impact, and vision to fight the world's fight at Oxford.",
        "options": [
          "We are unanimously electing Santiago as our Rhodes Scholar because of his unshakeable moral force of character, proven systemic community impact, and vision to fight the world's fight at Oxford.",
          "We chose to forfeit funding rather than compromise our ethical integrity.",
          "A true Rhodes scholar combines scholarly excellence with servant leadership."
        ]
      },
      {
        "id": "masters-7-e2",
        "audioText": "We chose to forfeit funding rather than compromise our ethical integrity.",
        "correctAnswer": "We chose to forfeit funding rather than compromise our ethical integrity.",
        "options": [
          "A true Rhodes scholar combines scholarly excellence with servant leadership.",
          "We chose to forfeit funding rather than compromise our ethical integrity.",
          "How will your research directly dismantle systemic inequality?"
        ]
      },
      {
        "id": "masters-7-e3",
        "audioText": "A true Rhodes scholar combines scholarly excellence with servant leadership.",
        "correctAnswer": "A true Rhodes scholar combines scholarly excellence with servant leadership.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "How will your research directly dismantle systemic inequality?",
          "A true Rhodes scholar combines scholarly excellence with servant leadership."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-8",
    "badgeName": "Investigative Video Essays & Documentary Journalism",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-8-1",
        "term": "Corroborate",
        "translation": "Corroborar con pruebas",
        "ipa": "/kəˈrɑːbəreɪt/",
        "audioText": "Corroborate. We corroborated the leak.",
        "example": "We corroborated the leak.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-8-2",
        "term": "Uncover",
        "translation": "Destapar la verdad",
        "ipa": "/ʌnˈkʌvər/",
        "audioText": "Uncover. She uncovered corruption.",
        "example": "She uncovered corruption.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-8-3",
        "term": "Redact",
        "translation": "Censurar por seguridad",
        "ipa": "/rɪˈdækt/",
        "audioText": "Redact. Names were redacted.",
        "example": "Names were redacted.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-8-4",
        "term": "Substantiate",
        "translation": "Sustentar con datos",
        "ipa": "/səbˈstænʃieɪt/",
        "audioText": "Substantiate. Data substantiated claims.",
        "example": "Data substantiated claims.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-8-5",
        "term": "Juxtapose",
        "translation": "Yuxtaponer audio e imagen",
        "ipa": "/ˌdʒʌkstəˈpoʊz/",
        "audioText": "Juxtapose. We juxtaposed footage.",
        "example": "We juxtaposed footage.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-8-6",
        "term": "At 3:14 AM on an ordinary Tuesday, five gigabytes of classified telemetry vanished from the corporate mainframe",
        "translation": "Coloca al espectador en el centro de la acción desde el primer segundo.",
        "ipa": "/at/",
        "audioText": "At midnight in a nondescript Zurich laboratory, a single automated sensor recorded an anomaly that corporate executives had hidden for five years.",
        "example": "At midnight in a nondescript Zurich laboratory, a single automated sensor recorded an anomaly that corporate executives had hidden for five years.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-8-7",
        "term": "The evidence was undeniable. The implications were catastrophic. What followed was a coordinated cover-up",
        "translation": "Usa oraciones cortas de impacto para acelerar el pulso dramático del espectador.",
        "ipa": "/the/",
        "audioText": "The audit was falsified. The sensors were silenced. For three consecutive years, the conglomerate dumped chemical runoff directly into municipal aquifers.",
        "example": "The audit was falsified. The sensors were silenced. For three consecutive years, the conglomerate dumped chemical runoff directly into municipal aquifers.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-8-b1",
        "prompt": "La auditoría fue falsificada y los sensores fueron silenciados en secreto.",
        "answer": "The audit was falsified and the sensors were silenced in secret",
        "tokens": [
          "The",
          "audit",
          "was",
          "falsified",
          "and",
          "the",
          "sensors",
          "were",
          "silenced",
          "in",
          "secret",
          "protect",
          "whistleblower"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-8-b2",
        "prompt": "Para proteger al informante de represalias el audio fue regrabado.",
        "answer": "To protect the whistleblower the audio was re recorded",
        "tokens": [
          "To",
          "protect",
          "the",
          "whistleblower",
          "audio",
          "was",
          "re",
          "recorded",
          "audit",
          "falsified"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-8-b3",
        "prompt": "¿Corroboró el equipo de investigación los correos con telemetría satelital?",
        "answer": "Did the investigative team corroborate emails with telemetry",
        "tokens": [
          "Did",
          "the",
          "investigative",
          "team",
          "corroborate",
          "emails",
          "with",
          "telemetry",
          "audit",
          "falsified"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-8-e1",
        "audioText": "We are greenlighting this investigative documentary because the cold open hook is intellectually irresistible, the whistleblower evidence is forensically corroborated, and the legal defamation safeguards are airtight.",
        "correctAnswer": "We are greenlighting this investigative documentary because the cold open hook is intellectually irresistible, the whistleblower evidence is forensically corroborated, and the legal defamation safeguards are airtight.",
        "options": [
          "We are greenlighting this investigative documentary because the cold open hook is intellectually irresistible, the whistleblower evidence is forensically corroborated, and the legal defamation safeguards are airtight.",
          "The audit was falsified and the sensors were silenced in secret.",
          "To protect the whistleblower the audio was re-recorded."
        ]
      },
      {
        "id": "masters-8-e2",
        "audioText": "The audit was falsified and the sensors were silenced in secret.",
        "correctAnswer": "The audit was falsified and the sensors were silenced in secret.",
        "options": [
          "To protect the whistleblower the audio was re-recorded.",
          "The audit was falsified and the sensors were silenced in secret.",
          "Did the investigative team corroborate emails with telemetry?"
        ]
      },
      {
        "id": "masters-8-e3",
        "audioText": "To protect the whistleblower the audio was re-recorded.",
        "correctAnswer": "To protect the whistleblower the audio was re-recorded.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Did the investigative team corroborate emails with telemetry?",
          "To protect the whistleblower the audio was re-recorded."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-9",
    "badgeName": "Global Mega-Trends",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-9-1",
        "term": "Align",
        "translation": "Alinear con valores humanos",
        "ipa": "/əˈlaɪn/",
        "audioText": "Align. We aligned the AI models.",
        "example": "We aligned the AI models.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-9-2",
        "term": "Safeguard",
        "translation": "Salvaguardar la especie",
        "ipa": "/ˈseɪfɡɑːrd/",
        "audioText": "Safeguard. Treaties safeguarded peace.",
        "example": "Treaties safeguarded peace.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-9-3",
        "term": "Demarcate",
        "translation": "Demarcar límites éticos",
        "ipa": "/ˈdiːmɑːrkeɪt/",
        "audioText": "Demarcate. Bioethics demarcated limits.",
        "example": "Bioethics demarcated limits.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-9-4",
        "term": "Mitigate",
        "translation": "Mitigar riesgos existenciales",
        "ipa": "/ˈmɪtɪɡeɪt/",
        "audioText": "Mitigate. We mitigated catastrophe.",
        "example": "We mitigated catastrophe.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-9-5",
        "term": "Enshrine",
        "translation": "Consagrar neuroderechos",
        "ipa": "/ɪnˈʃraɪn/",
        "audioText": "Enshrine. Nations enshrined rights.",
        "example": "Nations enshrined rights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-9-6",
        "term": "Aligning artificial superintelligence with human flourishing requires provable mathematical verification rather than speculative heuristics",
        "translation": "Formula salvaguardas técnicas para evitar la pérdida de control algorítmico.",
        "ipa": "/aligning/",
        "audioText": "Aligning artificial superintelligence with universal human ethics requires provable mathematical constraints that prevent unintended instrumental convergence.",
        "example": "Aligning artificial superintelligence with universal human ethics requires provable mathematical constraints that prevent unintended instrumental convergence.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-9-7",
        "term": "International law must endorse somatic therapies that cure debilitating genetic illnesses while strictly prohibiting inheritable germline editing",
        "translation": "Diferencia curar a un individuo de rediseñar la línea genética de la especie humana.",
        "ipa": "/international/",
        "audioText": "Humanity must distinguish between somatic gene therapy that cures sickle cell anemia and inheritable germline editing that risks creating biological castes.",
        "example": "Humanity must distinguish between somatic gene therapy that cures sickle cell anemia and inheritable germline editing that risks creating biological castes.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-9-b1",
        "prompt": "Alinear la superinteligencia artificial requiere restricciones matemáticas demostrables.",
        "answer": "Aligning artificial superintelligence requires provable mathematical constraints",
        "tokens": [
          "Aligning",
          "artificial",
          "superintelligence",
          "requires",
          "provable",
          "mathematical",
          "constraints",
          "Unregulated",
          "germline"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-9-b2",
        "prompt": "La modificación genética germinal no regulada arriesga crear castas biológicas.",
        "answer": "Unregulated germline genetic modification risks creating biological castes",
        "tokens": [
          "Unregulated",
          "germline",
          "genetic",
          "modification",
          "risks",
          "creating",
          "biological",
          "castes",
          "Aligning",
          "artificial"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-9-b3",
        "prompt": "¿Pueden las instituciones hacer cumplir una moratoria efectiva sobre la IA letal?",
        "answer": "Can institutions enforce an effective moratorium on lethal AI",
        "tokens": [
          "Can",
          "institutions",
          "enforce",
          "an",
          "effective",
          "moratorium",
          "on",
          "lethal",
          "AI",
          "Aligning",
          "artificial"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-9-e1",
        "audioText": "The international council approved the planetary governance framework because it established mathematical AI alignment constraints, prohibited inheritable germline editing, and banned unilateral solar geoengineering.",
        "correctAnswer": "The international council approved the planetary governance framework because it established mathematical AI alignment constraints, prohibited inheritable germline editing, and banned unilateral solar geoengineering.",
        "options": [
          "The international council approved the planetary governance framework because it established mathematical AI alignment constraints, prohibited inheritable germline editing, and banned unilateral solar geoengineering.",
          "Aligning artificial superintelligence requires provable mathematical constraints.",
          "Unregulated germline genetic modification risks creating biological castes."
        ]
      },
      {
        "id": "masters-9-e2",
        "audioText": "Aligning artificial superintelligence requires provable mathematical constraints.",
        "correctAnswer": "Aligning artificial superintelligence requires provable mathematical constraints.",
        "options": [
          "Unregulated germline genetic modification risks creating biological castes.",
          "Aligning artificial superintelligence requires provable mathematical constraints.",
          "Can institutions enforce an effective moratorium on lethal AI?"
        ]
      },
      {
        "id": "masters-9-e3",
        "audioText": "Unregulated germline genetic modification risks creating biological castes.",
        "correctAnswer": "Unregulated germline genetic modification risks creating biological castes.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "Can institutions enforce an effective moratorium on lethal AI?",
          "Unregulated germline genetic modification risks creating biological castes."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-10",
    "badgeName": "Level 10 Grand Masters Capstone",
    "badgeEmoji": "🌟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "masters-10-1",
        "term": "Transcend",
        "translation": "Trascender barreras",
        "ipa": "/trænˈsend/",
        "audioText": "Transcend. We transcended limits.",
        "example": "We transcended limits.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-10-2",
        "term": "Orchestrate",
        "translation": "Orquestar el cambio global",
        "ipa": "/ˈɔːrkɪstreɪt/",
        "audioText": "Orchestrate. She orchestrated reform.",
        "example": "She orchestrated reform.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-10-3",
        "term": "Illumine",
        "translation": "Iluminar el pensamiento",
        "ipa": "/ɪˈluːmɪn/",
        "audioText": "Illumine. Ideas illumined minds.",
        "example": "Ideas illumined minds.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-10-4",
        "term": "Command",
        "translation": "Comandar la elocuencia C2",
        "ipa": "/kəˈmænd/",
        "audioText": "Command. He commanded the language.",
        "example": "He commanded the language.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-10-5",
        "term": "Unite",
        "translation": "Unir culturas del mundo",
        "ipa": "/juːˈnaɪt/",
        "audioText": "Unite. We united nations.",
        "example": "We united nations.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "masters-10-6",
        "term": "Our theoretical paradigm reconciles empirical falsifiability with profound ontological intentionality",
        "translation": "Demuestra precisión conceptual absoluta en debates científicos y filosóficos.",
        "ipa": "/our/",
        "audioText": "Our multidisciplinary framework reconciles empirical Popperian falsifiability with profound human ethical intentionality.",
        "example": "Our multidisciplinary framework reconciles empirical Popperian falsifiability with profound human ethical intentionality.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "masters-10-7",
        "term": "True leadership is forged in the crucible of moral conviction: standing for justice regardless of personal cost",
        "translation": "Proyecta integridad inquebrantable inspirada en el ideal de Oxford Rhodes.",
        "ipa": "/true/",
        "audioText": "True leadership is forged in the crucible of moral conviction and dedicated to unselfish service in fighting the world's fight.",
        "example": "True leadership is forged in the crucible of moral conviction and dedicated to unselfish service in fighting the world's fight.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "masters-10-b1",
        "prompt": "Dominar el inglés es desbloquear las llaves universales al pensamiento y la hermandad.",
        "answer": "Mastering English is unlocking universal keys to thought and fellowship",
        "tokens": [
          "Mastering",
          "English",
          "is",
          "unlocking",
          "universal",
          "keys",
          "to",
          "thought",
          "and",
          "fellowship",
          "True",
          "leadership"
        ],
        "hints": [
          "Usa la estructura afirmativa (+) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-10-b2",
        "prompt": "El verdadero liderazgo se forja en el crisol de la convicción moral y el servicio.",
        "answer": "True leadership is forged in the crucible of moral conviction and service",
        "tokens": [
          "True",
          "leadership",
          "is",
          "forged",
          "in",
          "the",
          "crucible",
          "of",
          "moral",
          "conviction",
          "and",
          "service",
          "Mastering",
          "English"
        ],
        "hints": [
          "Usa la estructura negativa (−) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      },
      {
        "id": "masters-10-b3",
        "prompt": "¿Qué futuro extraordinario te atreverás a construir ahora que dominas el inglés?",
        "answer": "What extraordinary future will you dare to build commanding English",
        "tokens": [
          "What",
          "extraordinary",
          "future",
          "will",
          "you",
          "dare",
          "to",
          "build",
          "commanding",
          "English",
          "Mastering",
          "unlocking"
        ],
        "hints": [
          "Usa la estructura interrogativa (?) vista en clase.",
          "Recuerda el orden correcto de las palabras y complementos."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "masters-10-e1",
        "audioText": "We officially confer the supreme title of C2 Master of English with Highest Distinction upon this graduating scholar for demonstrating flawless multidisciplinary eloquence, moral leadership, and visionary statesmanship.",
        "correctAnswer": "We officially confer the supreme title of C2 Master of English with Highest Distinction upon this graduating scholar for demonstrating flawless multidisciplinary eloquence, moral leadership, and visionary statesmanship.",
        "options": [
          "We officially confer the supreme title of C2 Master of English with Highest Distinction upon this graduating scholar for demonstrating flawless multidisciplinary eloquence, moral leadership, and visionary statesmanship.",
          "Mastering English is unlocking universal keys to thought and fellowship.",
          "True leadership is forged in the crucible of moral conviction and service."
        ]
      },
      {
        "id": "masters-10-e2",
        "audioText": "Mastering English is unlocking universal keys to thought and fellowship.",
        "correctAnswer": "Mastering English is unlocking universal keys to thought and fellowship.",
        "options": [
          "True leadership is forged in the crucible of moral conviction and service.",
          "Mastering English is unlocking universal keys to thought and fellowship.",
          "What extraordinary future will you dare to build commanding English?"
        ]
      },
      {
        "id": "masters-10-e3",
        "audioText": "True leadership is forged in the crucible of moral conviction and service.",
        "correctAnswer": "True leadership is forged in the crucible of moral conviction and service.",
        "options": [
          "We practice speaking English every weekend with our squad.",
          "What extraordinary future will you dare to build commanding English?",
          "True leadership is forged in the crucible of moral conviction and service."
        ]
      }
    ]
  }
];
