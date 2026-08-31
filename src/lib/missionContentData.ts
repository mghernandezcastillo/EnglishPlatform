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
    "badgeName": "First Contact",
    "badgeEmoji": "👋",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-1-1",
        "term": "Hello / Hi",
        "translation": "Hola",
        "ipa": "/həˈloʊ/ /haɪ/",
        "audioText": "Hello. Hi.",
        "example": "Hello! I am Alex.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-2",
        "term": "Good morning",
        "translation": "Buenos días",
        "ipa": "/ɡʊd ˈmɔrnɪŋ/",
        "audioText": "Good morning.",
        "example": "Good morning, Teacher David.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-3",
        "term": "What's up?",
        "translation": "¿Qué más? / ¿Qué tal?",
        "ipa": "/wʌts ʌp/",
        "audioText": "What's up?",
        "example": "Hey! What's up?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-4",
        "term": "Nice to meet you",
        "translation": "Mucho gusto",
        "ipa": "/naɪs tə miːt ju/",
        "audioText": "Nice to meet you.",
        "example": "Nice to meet you, Sam.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-1-5",
        "term": "I am",
        "translation": "Yo soy / Yo estoy",
        "ipa": "/aɪ æm/",
        "audioText": "I am.",
        "example": "I am from Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-1-6",
        "term": "He / She is",
        "translation": "Él / Ella es",
        "ipa": "/hi/ /ʃi ɪz/",
        "audioText": "He is. She is.",
        "example": "She is my friend Sofia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-1-7",
        "term": "We / They are",
        "translation": "Nosotros / Ellos son o están",
        "ipa": "/wi/ /ðeɪ ɑr/",
        "audioText": "We are. They are.",
        "example": "We are ready to practice.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-1-b1",
        "prompt": "Soy Nicolás y estoy en clase.",
        "answer": "I am Nicolas and I am in class",
        "tokens": [
          "I",
          "am",
          "Nicolas",
          "and",
          "I",
          "am",
          "in",
          "class",
          "is",
          "are"
        ],
        "hints": [
          "Empieza con 'I am'.",
          "Recuerda usar 'am' para ambos verbos soy/estoy."
        ]
      },
      {
        "id": "0-1-b2",
        "prompt": "Ella no está cansada hoy.",
        "answer": "She is not tired today",
        "tokens": [
          "She",
          "is",
          "not",
          "tired",
          "today",
          "are",
          "am"
        ],
        "hints": [
          "Usa 'is not' o 'isn\\'t' para negar.",
          "Cansado/a se dice 'tired'."
        ]
      },
      {
        "id": "0-1-b3",
        "prompt": "¿Eres el estudiante nuevo?",
        "answer": "Are you the new student",
        "tokens": [
          "Are",
          "you",
          "the",
          "new",
          "student",
          "is",
          "am"
        ],
        "hints": [
          "Las preguntas con el verbo To Be invierten el orden.",
          "Empieza con 'Are you'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-1-e1",
        "audioText": "Hello! I am Alex and I am very excited today.",
        "correctAnswer": "Hello! I am Alex and I am very excited today.",
        "options": [
          "Hello! I am Alex and I am very excited today.",
          "Hi! I am Alex and I am very tired today.",
          "Hello! He is Alex and he is excited today."
        ]
      },
      {
        "id": "0-1-e2",
        "audioText": "Are you the new student at this school?",
        "correctAnswer": "Are you the new student at this school?",
        "options": [
          "Are you the new student at this school?",
          "Are you a student at this school?",
          "Is he the new student at this school?"
        ]
      },
      {
        "id": "0-1-e3",
        "audioText": "I am not nervous, I am ready to learn.",
        "correctAnswer": "I am not nervous, I am ready to learn.",
        "options": [
          "I am not nervous, I am ready to learn.",
          "I am nervous, I am not ready to learn.",
          "She is not nervous, she is ready to learn."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-2",
    "badgeName": "Number Ninja",
    "badgeEmoji": "🎂",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-2-1",
        "term": "Numbers 1-10",
        "translation": "Números 1-10",
        "ipa": "/ˈnʌmbərz/",
        "audioText": "One to ten.",
        "example": "One, two, three...",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-2",
        "term": "Birthday",
        "translation": "Cumpleaños",
        "ipa": "/ˈbɜrθˌdeɪ/",
        "audioText": "Birthday.",
        "example": "My birthday is in June.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-3",
        "term": "Months of the year",
        "translation": "Meses del año",
        "ipa": "/mʌnθs/",
        "audioText": "Months of the year.",
        "example": "January, February, March...",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-4",
        "term": "Age",
        "translation": "Edad",
        "ipa": "/eɪdʒ/",
        "audioText": "Age.",
        "example": "What is your age?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-2-5",
        "term": "I am (age)",
        "translation": "Yo tengo (edad)",
        "ipa": "/aɪ æm/",
        "audioText": "I am.",
        "example": "I am 15 years old.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-2-6",
        "term": "He / She is (age)",
        "translation": "Él / Ella tiene (edad)",
        "ipa": "/hi/ /ʃi ɪz/",
        "audioText": "He is. She is.",
        "example": "She is 14.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-2-7",
        "term": "How old are you?",
        "translation": "¿Cuántos años tienes?",
        "ipa": "/haʊ oʊld ɑr ju/",
        "audioText": "How old are you?",
        "example": "How old are you?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-2-b1",
        "prompt": "Tengo 15 años.",
        "answer": "I am 15 years old",
        "tokens": [
          "I",
          "am",
          "15",
          "years",
          "old",
          "have",
          "has"
        ],
        "hints": [
          "En inglés la edad se 'es', no se 'tiene'.",
          "Usa 'I am', no 'I have'."
        ]
      },
      {
        "id": "0-2-b2",
        "prompt": "Mi amigo Mateo tiene 16 años.",
        "answer": "My friend Mateo is 16 years old",
        "tokens": [
          "My",
          "friend",
          "Mateo",
          "is",
          "16",
          "years",
          "old",
          "has",
          "have"
        ],
        "hints": [
          "Para la edad de otra persona usa 'is'.",
          "Termina con 'years old'."
        ]
      },
      {
        "id": "0-2-b3",
        "prompt": "¿Tú también tienes 15 años?",
        "answer": "Are you 15 years old too",
        "tokens": [
          "Are",
          "you",
          "15",
          "years",
          "old",
          "too",
          "have",
          "do"
        ],
        "hints": [
          "Invierte el verbo to be para la pregunta: 'Are you'.",
          "Tú también = 'too' al final."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-2-e1",
        "audioText": "I am 15 years old and I'm ready for the party.",
        "correctAnswer": "I am 15 years old and I'm ready for the party.",
        "options": [
          "I am 15 years old and I'm ready for the party.",
          "I have 15 years old and I'm ready for the party.",
          "She is 15 years old and she is ready for the party."
        ]
      },
      {
        "id": "0-2-e2",
        "audioText": "My friend Mateo is 16 years old.",
        "correctAnswer": "My friend Mateo is 16 years old.",
        "options": [
          "My friend Mateo is 16 years old.",
          "My friend Mateo has 16 years old.",
          "Your friend Mateo is 16 years old."
        ]
      },
      {
        "id": "0-2-e3",
        "audioText": "How old are you and how old is your best friend?",
        "correctAnswer": "How old are you and how old is your best friend?",
        "options": [
          "How old are you and how old is your best friend?",
          "How old are you and who is your best friend?",
          "How old is he and how old is she?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-3",
    "badgeName": "Family First",
    "badgeEmoji": "👨‍👩‍👧‍👦",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-3-1",
        "term": "Mom and Dad",
        "translation": "Mamá y papá",
        "ipa": "/mɑm ænd dæd/",
        "audioText": "Mom and Dad.",
        "example": "My mom and dad are from Colombia.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-2",
        "term": "Brother / Sister",
        "translation": "Hermano / Hermana",
        "ipa": "/ˈbrʌðər/ /ˈsɪstər/",
        "audioText": "Brother. Sister.",
        "example": "I have one brother and two sisters.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-3",
        "term": "Best friend",
        "translation": "Mejor amigo/a",
        "ipa": "/bɛst frɛnd/",
        "audioText": "Best friend.",
        "example": "Juan is my best friend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-4",
        "term": "Pet",
        "translation": "Mascota",
        "ipa": "/pɛt/",
        "audioText": "Pet.",
        "example": "I have a pet dog.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-3-5",
        "term": "My / Your",
        "translation": "Mi / Tu (adjetivos posesivos)",
        "ipa": "/maɪ/ /jʊr/",
        "audioText": "My. Your.",
        "example": "My name is Alex. What is your name?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-3-6",
        "term": "His / Her",
        "translation": "Su (de él) / Su (de ella)",
        "ipa": "/hɪz/ /hɜr/",
        "audioText": "His. Her.",
        "example": "His name is Mateo. Her name is Sofia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-3-7",
        "term": "Our / Their",
        "translation": "Nuestro / Su (de ellos)",
        "ipa": "/aʊr/ /ðɛr/",
        "audioText": "Our. Their.",
        "example": "Our team is great. Their dog is cute.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-3-b1",
        "prompt": "Su nombre (de él) es Andrés.",
        "answer": "His name is Andres",
        "tokens": [
          "His",
          "name",
          "is",
          "Andres",
          "He",
          "Her"
        ],
        "hints": [
          "Usa el adjetivo posesivo para él: 'His'.",
          "No uses 'He name'."
        ]
      },
      {
        "id": "0-3-b2",
        "prompt": "Nuestra familia no es grande.",
        "answer": "Our family is not big",
        "tokens": [
          "Our",
          "family",
          "is",
          "not",
          "big",
          "We",
          "are"
        ],
        "hints": [
          "El posesivo para 'nuestra' es 'Our'.",
          "Usa 'is not'."
        ]
      },
      {
        "id": "0-3-b3",
        "prompt": "¿Es ella tu hermana?",
        "answer": "Is she your sister",
        "tokens": [
          "Is",
          "she",
          "your",
          "sister",
          "Are",
          "her"
        ],
        "hints": [
          "Para preguntar usa 'Is she'.",
          "Tu hermana = 'your sister'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-3-e1",
        "audioText": "His name is Mateo and her name is Sofia.",
        "correctAnswer": "His name is Mateo and her name is Sofia.",
        "options": [
          "His name is Mateo and her name is Sofia.",
          "Her name is Mateo and his name is Sofia.",
          "He name is Mateo and she name is Sofia."
        ]
      },
      {
        "id": "0-3-e2",
        "audioText": "Our family is from Colombia.",
        "correctAnswer": "Our family is from Colombia.",
        "options": [
          "Our family is from Colombia.",
          "Your family is from Colombia.",
          "Their family is from Colombia."
        ]
      },
      {
        "id": "0-3-e3",
        "audioText": "Is he your brother?",
        "correctAnswer": "Is he your brother?",
        "options": [
          "Is he your brother?",
          "Is she your sister?",
          "Are you her brother?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-4",
    "badgeName": "Food Lover",
    "badgeEmoji": "🍔",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-4-1",
        "term": "Hamburger & fries",
        "translation": "Hamburguesa y papas",
        "ipa": "/ˈhæmbɜrɡər ænd fraɪz/",
        "audioText": "Hamburger and fries.",
        "example": "I love burgers and fries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-2",
        "term": "Pizza & Soda",
        "translation": "Pizza y Gaseosa",
        "ipa": "/ˈpitsə ænd ˈsoʊdə/",
        "audioText": "Pizza and soda.",
        "example": "We eat pizza on Fridays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-3",
        "term": "Empanadas",
        "translation": "Empanadas",
        "ipa": "/ˌɛmpəˈnɑdəz/",
        "audioText": "Empanadas.",
        "example": "Colombian empanadas are delicious.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-4",
        "term": "Hot dog",
        "translation": "Perro caliente",
        "ipa": "/hɑt dɔɡ/",
        "audioText": "Hot dog.",
        "example": "He wants a hot dog.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-4-5",
        "term": "I like / I don't like",
        "translation": "Me gusta / No me gusta",
        "ipa": "/aɪ laɪk/",
        "audioText": "I like. I don't like.",
        "example": "I like pizza, but I don't like onions.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-4-6",
        "term": "I would like",
        "translation": "Me gustaría (para pedir)",
        "ipa": "/aɪ wʊd laɪk/",
        "audioText": "I would like.",
        "example": "I would like a soda, please.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-4-7",
        "term": "Can I have...?",
        "translation": "¿Me regalas/Me puedes dar...?",
        "ipa": "/kæn aɪ hæv/",
        "audioText": "Can I have...?",
        "example": "Can I have a slice of pizza?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-4-b1",
        "prompt": "Me gustaría una hamburguesa con papas.",
        "answer": "I would like a burger with fries",
        "tokens": [
          "I",
          "would",
          "like",
          "a",
          "burger",
          "with",
          "fries",
          "want",
          "and"
        ],
        "hints": [
          "Usa 'I would like' para pedir formalmente.",
          "Hamburguesa = burger."
        ]
      },
      {
        "id": "0-4-b2",
        "prompt": "A ella no le gusta el queso.",
        "answer": "She does not like cheese",
        "tokens": [
          "She",
          "does",
          "not",
          "like",
          "cheese",
          "do",
          "likes"
        ],
        "hints": [
          "Para tercera persona (ella), usa 'does not' o 'doesn\\'t'.",
          "El verbo 'like' va sin 's' cuando se usa 'does'."
        ]
      },
      {
        "id": "0-4-b3",
        "prompt": "¿Me regalas una gaseosa, por favor?",
        "answer": "Can I have a soda please",
        "tokens": [
          "Can",
          "I",
          "have",
          "a",
          "soda",
          "please",
          "give",
          "me"
        ],
        "hints": [
          "En inglés no se dice 'give me' en restaurantes, usa 'Can I have'.",
          "Termina con 'please'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-4-e1",
        "audioText": "I would like a burger and a soda, please.",
        "correctAnswer": "I would like a burger and a soda, please.",
        "options": [
          "I would like a burger and a soda, please.",
          "I would like a hot dog and a soda, please.",
          "I want a burger and a juice, please."
        ]
      },
      {
        "id": "0-4-e2",
        "audioText": "Can I have some fries with that?",
        "correctAnswer": "Can I have some fries with that?",
        "options": [
          "Can I have some fries with that?",
          "Can I have some rice with that?",
          "Can you have some fries with that?"
        ]
      },
      {
        "id": "0-4-e3",
        "audioText": "I don't like onions on my pizza.",
        "correctAnswer": "I don't like onions on my pizza.",
        "options": [
          "I don't like onions on my pizza.",
          "I don't like olives on my pizza.",
          "She doesn't like onions on her pizza."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-5",
    "badgeName": "Time Keeper",
    "badgeEmoji": "⏰",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-5-1",
        "term": "Wake up",
        "translation": "Despertarse",
        "ipa": "/weɪk ʌp/",
        "audioText": "Wake up.",
        "example": "I wake up at 6 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-2",
        "term": "Have breakfast",
        "translation": "Desayunar",
        "ipa": "/hæv ˈbrɛkfəst/",
        "audioText": "Have breakfast.",
        "example": "I have breakfast at 7 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-3",
        "term": "Go to school",
        "translation": "Ir al colegio",
        "ipa": "/ɡoʊ tu skul/",
        "audioText": "Go to school.",
        "example": "We go to school by bus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-4",
        "term": "Do homework",
        "translation": "Hacer la tarea",
        "ipa": "/du ˈhoʊmwɜrk/",
        "audioText": "Do homework.",
        "example": "I do homework after school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-5-5",
        "term": "At (Time)",
        "translation": "A las (preposición de tiempo)",
        "ipa": "/æt/",
        "audioText": "At.",
        "example": "At 8 o'clock.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-5-6",
        "term": "In the morning",
        "translation": "En la mañana",
        "ipa": "/ɪn ðə ˈmɔrnɪŋ/",
        "audioText": "In the morning.",
        "example": "I have breakfast in the morning.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-5-7",
        "term": "What time is it?",
        "translation": "¿Qué hora es?",
        "ipa": "/wʌt taɪm ɪz ɪt/",
        "audioText": "What time is it?",
        "example": "What time is it? It is 3 PM.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-5-b1",
        "prompt": "Me despierto a las 6 en punto.",
        "answer": "I wake up at 6 o'clock",
        "tokens": [
          "I",
          "wake",
          "up",
          "at",
          "6",
          "o'clock",
          "in",
          "on"
        ],
        "hints": [
          "Usa 'wake up' para despertarse.",
          "Usa 'at' antes de la hora exacta."
        ]
      },
      {
        "id": "0-5-b2",
        "prompt": "Ella no hace tareas en la noche.",
        "answer": "She does not do homework at night",
        "tokens": [
          "She",
          "does",
          "not",
          "do",
          "homework",
          "at",
          "night",
          "in",
          "make"
        ],
        "hints": [
          "La negación en tercera persona es 'does not'.",
          "El verbo hacer tareas es 'do homework' y para noche se usa 'at night'."
        ]
      },
      {
        "id": "0-5-b3",
        "prompt": "¿A qué hora vas al colegio?",
        "answer": "What time do you go to school",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "go",
          "to",
          "school",
          "are",
          "at"
        ],
        "hints": [
          "Empieza preguntando la hora: 'What time'.",
          "Usa el auxiliar 'do' para You."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-5-e1",
        "audioText": "I wake up at seven in the morning.",
        "correctAnswer": "I wake up at seven in the morning.",
        "options": [
          "I wake up at seven in the morning.",
          "I wake up at six in the morning.",
          "He wakes up at seven in the morning."
        ]
      },
      {
        "id": "0-5-e2",
        "audioText": "She goes to school at eight o'clock.",
        "correctAnswer": "She goes to school at eight o'clock.",
        "options": [
          "She goes to school at eight o'clock.",
          "She goes to school at nine o'clock.",
          "She goes home at eight o'clock."
        ]
      },
      {
        "id": "0-5-e3",
        "audioText": "What time do you have breakfast?",
        "correctAnswer": "What time do you have breakfast?",
        "options": [
          "What time do you have breakfast?",
          "What time do you have lunch?",
          "What time does he have breakfast?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-6",
    "badgeName": "Style Icon",
    "badgeEmoji": "👟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-6-1",
        "term": "T-shirt",
        "translation": "Camiseta",
        "ipa": "/ˈti ʃɜrt/",
        "audioText": "T-shirt.",
        "example": "I like this black T-shirt.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-2",
        "term": "Jeans",
        "translation": "Pantalón de jean",
        "ipa": "/dʒinz/",
        "audioText": "Jeans.",
        "example": "Blue jeans are comfortable.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-3",
        "term": "Sneakers",
        "translation": "Tenis / Zapatillas",
        "ipa": "/ˈsnikərz/",
        "audioText": "Sneakers.",
        "example": "I have new white sneakers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-4",
        "term": "Hoodie",
        "translation": "Saco con capota / Buzo",
        "ipa": "/ˈhʊdi/",
        "audioText": "Hoodie.",
        "example": "My red hoodie is very warm.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-6-5",
        "term": "Color + Noun",
        "translation": "Adjetivo antes del sustantivo",
        "ipa": "",
        "audioText": "Red hoodie.",
        "example": "A black jacket.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-6-6",
        "term": "Wear",
        "translation": "Usar / Vestir",
        "ipa": "/wɛr/",
        "audioText": "Wear.",
        "example": "I wear jeans to school.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-6-7",
        "term": "They are",
        "translation": "Ellos son / están (usado para ropa en plural)",
        "ipa": "/ðeɪ ɑr/",
        "audioText": "They are.",
        "example": "These sneakers are cool. They are expensive.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-6-b1",
        "prompt": "Tengo una camiseta negra.",
        "answer": "I have a black T-shirt",
        "tokens": [
          "I",
          "have",
          "a",
          "black",
          "T-shirt",
          "T-shirt",
          "black",
          "has"
        ],
        "hints": [
          "El color va antes de la prenda.",
          "Usa 'black T-shirt'."
        ]
      },
      {
        "id": "0-6-b2",
        "prompt": "Él no usa tenis blancos.",
        "answer": "He does not wear white sneakers",
        "tokens": [
          "He",
          "does",
          "not",
          "wear",
          "white",
          "sneakers",
          "do",
          "wears"
        ],
        "hints": [
          "Usa 'does not wear' para la tercera persona negativa.",
          "Blanco va antes de tenis: 'white sneakers'."
        ]
      },
      {
        "id": "0-6-b3",
        "prompt": "¿Usas jeans para ir al colegio?",
        "answer": "Do you wear jeans to school",
        "tokens": [
          "Do",
          "you",
          "wear",
          "jeans",
          "to",
          "school",
          "Are",
          "wearing"
        ],
        "hints": [
          "Empieza con 'Do you' para rutinas o hábitos.",
          "El verbo es 'wear'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-6-e1",
        "audioText": "I wear a black T-shirt and blue jeans.",
        "correctAnswer": "I wear a black T-shirt and blue jeans.",
        "options": [
          "I wear a black T-shirt and blue jeans.",
          "I wear a white T-shirt and blue jeans.",
          "He wears a black T-shirt and blue jeans."
        ]
      },
      {
        "id": "0-6-e2",
        "audioText": "My new sneakers are white.",
        "correctAnswer": "My new sneakers are white.",
        "options": [
          "My new sneakers are white.",
          "My new sneakers are black.",
          "My old sneakers are white."
        ]
      },
      {
        "id": "0-6-e3",
        "audioText": "She likes her red hoodie.",
        "correctAnswer": "She likes her red hoodie.",
        "options": [
          "She likes her red hoodie.",
          "He likes his red hoodie.",
          "She hates her red hoodie."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-7",
    "badgeName": "Digital Citizen",
    "badgeEmoji": "📱",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-7-1",
        "term": "Smartphone",
        "translation": "Celular / Teléfono inteligente",
        "ipa": "/ˈsmɑrtˌfoʊn/",
        "audioText": "Smartphone.",
        "example": "I check my smartphone often.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-2",
        "term": "Social media",
        "translation": "Redes sociales",
        "ipa": "/ˈsoʊʃəl ˈmidiə/",
        "audioText": "Social media.",
        "example": "TikTok is my favorite social media.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-3",
        "term": "Post",
        "translation": "Publicar / Publicación",
        "ipa": "/poʊst/",
        "audioText": "Post.",
        "example": "I post photos on Instagram.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-4",
        "term": "Follower",
        "translation": "Seguidor",
        "ipa": "/ˈfɑloʊər/",
        "audioText": "Follower.",
        "example": "She has many followers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-7-5",
        "term": "Always",
        "translation": "Siempre",
        "ipa": "/ˈɔlweɪz/",
        "audioText": "Always.",
        "example": "I always use my phone.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-7-6",
        "term": "Usually",
        "translation": "Usualmente",
        "ipa": "/ˈjuʒuəli/",
        "audioText": "Usually.",
        "example": "I usually play games online.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-7-7",
        "term": "Never",
        "translation": "Nunca",
        "ipa": "/ˈnɛvər/",
        "audioText": "Never.",
        "example": "I never use Facebook.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-7-b1",
        "prompt": "Siempre reviso mis redes sociales.",
        "answer": "I always check my social media",
        "tokens": [
          "I",
          "always",
          "check",
          "my",
          "social",
          "media",
          "never",
          "checks"
        ],
        "hints": [
          "El adverbio (always) va antes del verbo principal.",
          "Revisar se dice 'check'."
        ]
      },
      {
        "id": "0-7-b2",
        "prompt": "Ella nunca publica fotos en Instagram.",
        "answer": "She never posts photos on Instagram",
        "tokens": [
          "She",
          "never",
          "posts",
          "photos",
          "on",
          "Instagram",
          "post",
          "in"
        ],
        "hints": [
          "Usa 'never'.",
          "Como es ella (she), el verbo lleva 's': 'posts'."
        ]
      },
      {
        "id": "0-7-b3",
        "prompt": "¿Usualmente juegas en línea?",
        "answer": "Do you usually play games online",
        "tokens": [
          "Do",
          "you",
          "usually",
          "play",
          "games",
          "online",
          "Are",
          "always"
        ],
        "hints": [
          "Empieza con 'Do you'.",
          "El adverbio 'usually' va después de 'you'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-7-e1",
        "audioText": "I always check my phone in the morning.",
        "correctAnswer": "I always check my phone in the morning.",
        "options": [
          "I always check my phone in the morning.",
          "I never check my phone in the morning.",
          "He always checks his phone in the morning."
        ]
      },
      {
        "id": "0-7-e2",
        "audioText": "She usually posts on TikTok.",
        "correctAnswer": "She usually posts on TikTok.",
        "options": [
          "She usually posts on TikTok.",
          "She always posts on TikTok.",
          "She never posts on TikTok."
        ]
      },
      {
        "id": "0-7-e3",
        "audioText": "Do you use social media everyday?",
        "correctAnswer": "Do you use social media everyday?",
        "options": [
          "Do you use social media everyday?",
          "Do you use your phone everyday?",
          "Does she use social media everyday?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-8",
    "badgeName": "Super Talent",
    "badgeEmoji": "🦸",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-8-1",
        "term": "Play soccer",
        "translation": "Jugar fútbol",
        "ipa": "/pleɪ ˈsɑkər/",
        "audioText": "Play soccer.",
        "example": "I play soccer with my squad.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-2",
        "term": "Sing",
        "translation": "Cantar",
        "ipa": "/sɪŋ/",
        "audioText": "Sing.",
        "example": "She can sing very well.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-3",
        "term": "Dance",
        "translation": "Bailar",
        "ipa": "/dæns/",
        "audioText": "Dance.",
        "example": "We like to dance at parties.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-4",
        "term": "Play video games",
        "translation": "Jugar videojuegos",
        "ipa": "/pleɪ ˈvɪdioʊ ɡeɪmz/",
        "audioText": "Play video games.",
        "example": "He can play video games all day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-8-5",
        "term": "I can",
        "translation": "Yo puedo / sé (habilidad)",
        "ipa": "/aɪ kæn/",
        "audioText": "I can.",
        "example": "I can play the guitar.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-8-6",
        "term": "She can't",
        "translation": "Ella no puede / no sabe",
        "ipa": "/ʃi kænt/",
        "audioText": "She can't.",
        "example": "She can't sing.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-8-7",
        "term": "Can you...?",
        "translation": "¿Puedes / Sabes...?",
        "ipa": "/kæn ju/",
        "audioText": "Can you...?",
        "example": "Can you dance?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-8-b1",
        "prompt": "Yo sé jugar fútbol muy bien.",
        "answer": "I can play soccer very well",
        "tokens": [
          "I",
          "can",
          "play",
          "soccer",
          "very",
          "well",
          "am",
          "good"
        ],
        "hints": [
          "'Saber' hacer algo físico se dice con 'can'.",
          "Muy bien = 'very well'."
        ]
      },
      {
        "id": "0-8-b2",
        "prompt": "Mi hermano no sabe cantar.",
        "answer": "My brother can not sing",
        "tokens": [
          "My",
          "brother",
          "can",
          "not",
          "sing",
          "does",
          "sings"
        ],
        "hints": [
          "La negación de can es 'cannot' o 'can not' o 'can\\'t'.",
          "Después de 'can not', el verbo va normal (sing)."
        ]
      },
      {
        "id": "0-8-b3",
        "prompt": "¿Puedes jugar videojuegos hoy?",
        "answer": "Can you play video games today",
        "tokens": [
          "Can",
          "you",
          "play",
          "video",
          "games",
          "today",
          "Do",
          "are"
        ],
        "hints": [
          "Empieza con el modal 'Can'.",
          "Videojuegos = 'video games'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-8-e1",
        "audioText": "I can play the guitar very well.",
        "correctAnswer": "I can play the guitar very well.",
        "options": [
          "I can play the guitar very well.",
          "I can't play the guitar very well.",
          "He can play the guitar very well."
        ]
      },
      {
        "id": "0-8-e2",
        "audioText": "She can't dance salsa.",
        "correctAnswer": "She can't dance salsa.",
        "options": [
          "She can't dance salsa.",
          "She can dance salsa.",
          "He can't dance salsa."
        ]
      },
      {
        "id": "0-8-e3",
        "audioText": "Can you play soccer with us?",
        "correctAnswer": "Can you play soccer with us?",
        "options": [
          "Can you play soccer with us?",
          "Do you play soccer with us?",
          "Can you play tennis with us?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-9",
    "badgeName": "Hobby Explorer",
    "badgeEmoji": "🎨",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-9-1",
        "term": "Skateboard",
        "translation": "Montar patineta",
        "ipa": "/ˈskeɪtbɔrd/",
        "audioText": "Skateboard.",
        "example": "I like to skateboard at the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-2",
        "term": "Draw",
        "translation": "Dibujar",
        "ipa": "/drɔ/",
        "audioText": "Draw.",
        "example": "She loves drawing anime.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-3",
        "term": "Listen to music",
        "translation": "Escuchar música",
        "ipa": "/ˈlɪsən tu ˈmjuzɪk/",
        "audioText": "Listen to music.",
        "example": "I enjoy listening to music.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-4",
        "term": "Watch movies",
        "translation": "Ver películas",
        "ipa": "/wɑtʃ ˈmuviz/",
        "audioText": "Watch movies.",
        "example": "We love watching movies on Netflix.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-9-5",
        "term": "Love + ing",
        "translation": "Amar / Encantar (hacer algo)",
        "ipa": "/lʌv/",
        "audioText": "Love.",
        "example": "I love playing video games.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-9-6",
        "term": "Hate + ing",
        "translation": "Odiar (hacer algo)",
        "ipa": "/heɪt/",
        "audioText": "Hate.",
        "example": "I hate waking up early.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-9-7",
        "term": "Like + ing",
        "translation": "Gustar (hacer algo)",
        "ipa": "/laɪk/",
        "audioText": "Like.",
        "example": "Do you like drawing?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-9-b1",
        "prompt": "Me encanta escuchar música.",
        "answer": "I love listening to music",
        "tokens": [
          "I",
          "love",
          "listening",
          "to",
          "music",
          "listen",
          "at"
        ],
        "hints": [
          "Después de 'love', el siguiente verbo suele llevar '-ing'.",
          "Siempre se dice 'listen to'."
        ]
      },
      {
        "id": "0-9-b2",
        "prompt": "Ella odia despertarse temprano.",
        "answer": "She hates waking up early",
        "tokens": [
          "She",
          "hates",
          "waking",
          "up",
          "early",
          "hate",
          "wake"
        ],
        "hints": [
          "Para ella (she) se usa 'hates'.",
          "Usa '-ing' después de hate: 'waking up'."
        ]
      },
      {
        "id": "0-9-b3",
        "prompt": "¿Te gusta ver películas?",
        "answer": "Do you like watching movies",
        "tokens": [
          "Do",
          "you",
          "like",
          "watching",
          "movies",
          "watch",
          "Are"
        ],
        "hints": [
          "Para preguntar usa 'Do you like'.",
          "Añade '-ing' al verbo ver."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-9-e1",
        "audioText": "I love playing video games with my friends.",
        "correctAnswer": "I love playing video games with my friends.",
        "options": [
          "I love playing video games with my friends.",
          "I like playing video games with my friends.",
          "I hate playing video games with my friends."
        ]
      },
      {
        "id": "0-9-e2",
        "audioText": "She hates waking up early.",
        "correctAnswer": "She hates waking up early.",
        "options": [
          "She hates waking up early.",
          "She loves waking up early.",
          "He hates waking up early."
        ]
      },
      {
        "id": "0-9-e3",
        "audioText": "Do you like listening to music?",
        "correctAnswer": "Do you like listening to music?",
        "options": [
          "Do you like listening to music?",
          "Do you love listening to music?",
          "Do you hate listening to music?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-10",
    "badgeName": "Squad Captain",
    "badgeEmoji": "✌️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-10-1",
        "term": "Funny",
        "translation": "Gracioso/a",
        "ipa": "/ˈfʌni/",
        "audioText": "Funny.",
        "example": "My best friend is very funny.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-2",
        "term": "Smart",
        "translation": "Inteligente",
        "ipa": "/smɑrt/",
        "audioText": "Smart.",
        "example": "She is smart and studies a lot.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-3",
        "term": "Cool",
        "translation": "Genial / Chévere",
        "ipa": "/kul/",
        "audioText": "Cool.",
        "example": "That jacket is really cool.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-4",
        "term": "Shy",
        "translation": "Tímido/a",
        "ipa": "/ʃaɪ/",
        "audioText": "Shy.",
        "example": "He is a bit shy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-10-5",
        "term": "My / His / Her",
        "translation": "Mis / Sus (Posesivos)",
        "ipa": "/maɪ/ /hɪz/ /hɜr/",
        "audioText": "My, his, her.",
        "example": "My friend is cool. His name is Juan.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-10-6",
        "term": "Our squad",
        "translation": "Nuestro grupo de amigos",
        "ipa": "/aʊr skwɑd/",
        "audioText": "Our squad.",
        "example": "Our squad is the best.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-10-7",
        "term": "Is he/she...?",
        "translation": "¿Es él/ella...? (Preguntas con adjetivos)",
        "ipa": "/ɪz hi/",
        "audioText": "Is he?",
        "example": "Is he funny?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-10-b1",
        "prompt": "Mi mejor amigo es muy gracioso.",
        "answer": "My best friend is very funny",
        "tokens": [
          "My",
          "best",
          "friend",
          "is",
          "very",
          "funny",
          "are",
          "has"
        ],
        "hints": [
          "Empieza con 'My best friend is'.",
          "Gracioso = funny."
        ]
      },
      {
        "id": "0-10-b2",
        "prompt": "Su hermano (de ella) no es tímido.",
        "answer": "Her brother is not shy",
        "tokens": [
          "Her",
          "brother",
          "is",
          "not",
          "shy",
          "His",
          "are"
        ],
        "hints": [
          "El posesivo para 'de ella' es 'Her'.",
          "Usa 'is not' o 'isn\\'t' con el adjetivo."
        ]
      },
      {
        "id": "0-10-b3",
        "prompt": "¿Es tu grupo de amigos chévere?",
        "answer": "Is your squad cool",
        "tokens": [
          "Is",
          "your",
          "squad",
          "cool",
          "Are",
          "you"
        ],
        "hints": [
          "Para preguntar usa 'Is'.",
          "Tu grupo de amigos = 'your squad'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-10-e1",
        "audioText": "My best friend is very funny and smart.",
        "correctAnswer": "My best friend is very funny and smart.",
        "options": [
          "My best friend is very funny and smart.",
          "My best friend is very cool and smart.",
          "His best friend is very funny and smart."
        ]
      },
      {
        "id": "0-10-e2",
        "audioText": "Her brother is a bit shy.",
        "correctAnswer": "Her brother is a bit shy.",
        "options": [
          "Her brother is a bit shy.",
          "His brother is a bit shy.",
          "Her sister is a bit shy."
        ]
      },
      {
        "id": "0-10-e3",
        "audioText": "Is our squad the best?",
        "correctAnswer": "Is our squad the best?",
        "options": [
          "Is our squad the best?",
          "Is your squad the best?",
          "Is their squad the best?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-11",
    "badgeName": "Social Speller",
    "badgeEmoji": "🔤",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-11-1",
        "term": "Alphabet",
        "translation": "El abecedario",
        "ipa": "/ˈælfəˌbɛt/",
        "audioText": "Alphabet.",
        "example": "A B C D E...",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-2",
        "term": "At symbol (@)",
        "translation": "Arroba",
        "ipa": "/æt/",
        "audioText": "At.",
        "example": "My email is alex at gmail dot com.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-3",
        "term": "Dot (.)",
        "translation": "Punto (en emails/webs)",
        "ipa": "/dɑt/",
        "audioText": "Dot.",
        "example": "Dot com.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-4",
        "term": "Underscore (_)",
        "translation": "Guión bajo",
        "ipa": "/ˈʌndərˌskɔr/",
        "audioText": "Underscore.",
        "example": "My username is alex underscore 12.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-11-5",
        "term": "Spell",
        "translation": "Deletrear",
        "ipa": "/spɛl/",
        "audioText": "Spell.",
        "example": "Can you spell your name?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-11-6",
        "term": "How do you spell...?",
        "translation": "¿Cómo se deletrea...?",
        "ipa": "/haʊ du ju spɛl/",
        "audioText": "How do you spell...?",
        "example": "How do you spell your last name?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-11-7",
        "term": "Username",
        "translation": "Nombre de usuario",
        "ipa": "/ˈjuzərˌneɪm/",
        "audioText": "Username.",
        "example": "What is your TikTok username?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-11-b1",
        "prompt": "Mi nombre de usuario es alex guión bajo 24.",
        "answer": "My username is alex underscore 24",
        "tokens": [
          "My",
          "username",
          "is",
          "alex",
          "underscore",
          "24",
          "at",
          "dot"
        ],
        "hints": [
          "Guión bajo se dice 'underscore'.",
          "Usa 'My username is'."
        ]
      },
      {
        "id": "0-11-b2",
        "prompt": "Yo no puedo deletrear esa palabra.",
        "answer": "I can not spell that word",
        "tokens": [
          "I",
          "can",
          "not",
          "spell",
          "that",
          "word",
          "do",
          "spells"
        ],
        "hints": [
          "Usa 'can not' o 'cannot' para falta de habilidad.",
          "Deletrear = spell."
        ]
      },
      {
        "id": "0-11-b3",
        "prompt": "¿Cómo deletreas tu apellido?",
        "answer": "How do you spell your last name",
        "tokens": [
          "How",
          "do",
          "you",
          "spell",
          "your",
          "last",
          "name",
          "are",
          "what"
        ],
        "hints": [
          "Empieza con 'How do you spell'.",
          "Apellido = 'last name'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-11-e1",
        "audioText": "My username is gamer underscore pro.",
        "correctAnswer": "My username is gamer underscore pro.",
        "options": [
          "My username is gamer underscore pro.",
          "My username is gamer dot pro.",
          "His username is gamer underscore pro."
        ]
      },
      {
        "id": "0-11-e2",
        "audioText": "How do you spell your first name?",
        "correctAnswer": "How do you spell your first name?",
        "options": [
          "How do you spell your first name?",
          "How do you spell your last name?",
          "How do you spell your email?"
        ]
      },
      {
        "id": "0-11-e3",
        "audioText": "My email is alex at gmail dot com.",
        "correctAnswer": "My email is alex at gmail dot com.",
        "options": [
          "My email is alex at gmail dot com.",
          "My email is alex at hotmail dot com.",
          "Her email is alex at gmail dot com."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-12",
    "badgeName": "Profile Pro",
    "badgeEmoji": "😎",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-12-1",
        "term": "Grade",
        "translation": "Grado / Curso",
        "ipa": "/ɡreɪd/",
        "audioText": "Grade.",
        "example": "I am in tenth grade.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-2",
        "term": "City",
        "translation": "Ciudad",
        "ipa": "/ˈsɪti/",
        "audioText": "City.",
        "example": "I live in Bogota, a big city.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-3",
        "term": "Passions",
        "translation": "Pasiones / Gustos",
        "ipa": "/ˈpæʃənz/",
        "audioText": "Passions.",
        "example": "Music and sports are my passions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-4",
        "term": "Favorite",
        "translation": "Favorito/a",
        "ipa": "/ˈfeɪvərɪt/",
        "audioText": "Favorite.",
        "example": "My favorite color is black.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-12-5",
        "term": "I am from...",
        "translation": "Yo soy de... (origen)",
        "ipa": "/aɪ æm frʌm/",
        "audioText": "I am from.",
        "example": "I am from Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-12-6",
        "term": "I live in...",
        "translation": "Yo vivo en... (ciudad)",
        "ipa": "/aɪ lɪv ɪn/",
        "audioText": "I live in.",
        "example": "I live in Medellin.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-12-7",
        "term": "My favorite (noun) is...",
        "translation": "Mi (sustantivo) favorito es...",
        "ipa": "/maɪ ˈfeɪvərɪt ɪz/",
        "audioText": "My favorite is.",
        "example": "My favorite sport is basketball.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-12-b1",
        "prompt": "Soy de Colombia y vivo en Cali.",
        "answer": "I am from Colombia and I live in Cali",
        "tokens": [
          "I",
          "am",
          "from",
          "Colombia",
          "and",
          "I",
          "live",
          "in",
          "Cali",
          "is",
          "on"
        ],
        "hints": [
          "Usa 'I am from' para el origen.",
          "Usa 'I live in' para la ciudad donde resides."
        ]
      },
      {
        "id": "0-12-b2",
        "prompt": "Mi deporte favorito no es el fútbol.",
        "answer": "My favorite sport is not soccer",
        "tokens": [
          "My",
          "favorite",
          "sport",
          "is",
          "not",
          "soccer",
          "does",
          "are"
        ],
        "hints": [
          "Usa 'is not' con 'favorite sport'.",
          "Fútbol = soccer."
        ]
      },
      {
        "id": "0-12-b3",
        "prompt": "¿En qué grado estás?",
        "answer": "What grade are you in",
        "tokens": [
          "What",
          "grade",
          "are",
          "you",
          "in",
          "is",
          "do"
        ],
        "hints": [
          "Pregunta: 'What grade are you in?'.",
          "La preposición 'in' va al final en inglés casual."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-12-e1",
        "audioText": "I am from Colombia and I live in Bogota.",
        "correctAnswer": "I am from Colombia and I live in Bogota.",
        "options": [
          "I am from Colombia and I live in Bogota.",
          "I am from Colombia and I live in Medellin.",
          "She is from Colombia and she lives in Bogota."
        ]
      },
      {
        "id": "0-12-e2",
        "audioText": "My favorite sport is soccer.",
        "correctAnswer": "My favorite sport is soccer.",
        "options": [
          "My favorite sport is soccer.",
          "My favorite sport is basketball.",
          "His favorite sport is soccer."
        ]
      },
      {
        "id": "0-12-e3",
        "audioText": "What grade are you in this year?",
        "correctAnswer": "What grade are you in this year?",
        "options": [
          "What grade are you in this year?",
          "What school are you in this year?",
          "What city are you in this year?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-13",
    "badgeName": "Trend Setter",
    "badgeEmoji": "🧢",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-13-1",
        "term": "Cap",
        "translation": "Gorra",
        "ipa": "/kæp/",
        "audioText": "Cap.",
        "example": "I like wearing a cap on sunny days.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-2",
        "term": "Jacket",
        "translation": "Chaqueta",
        "ipa": "/ˈdʒækɪt/",
        "audioText": "Jacket.",
        "example": "My leather jacket is cool.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-3",
        "term": "Shorts",
        "translation": "Pantalones cortos",
        "ipa": "/ʃɔrts/",
        "audioText": "Shorts.",
        "example": "I wear shorts when it is hot.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-4",
        "term": "Glasses",
        "translation": "Gafas",
        "ipa": "/ˈɡlæsɪz/",
        "audioText": "Glasses.",
        "example": "She wears cool glasses.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-13-5",
        "term": "I am wearing...",
        "translation": "Yo estoy usando/vistiendo (presente continuo)",
        "ipa": "/aɪ æm ˈwɛrɪŋ/",
        "audioText": "I am wearing.",
        "example": "I am wearing a new jacket.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-13-6",
        "term": "She is wearing...",
        "translation": "Ella está usando/vistiendo",
        "ipa": "/ʃi ɪz ˈwɛrɪŋ/",
        "audioText": "She is wearing.",
        "example": "She is wearing black shorts.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-13-7",
        "term": "What are you wearing?",
        "translation": "¿Qué tienes puesto?",
        "ipa": "/wʌt ɑr ju ˈwɛrɪŋ/",
        "audioText": "What are you wearing?",
        "example": "What are you wearing to the party?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-13-b1",
        "prompt": "Estoy usando una gorra negra hoy.",
        "answer": "I am wearing a black cap today",
        "tokens": [
          "I",
          "am",
          "wearing",
          "a",
          "black",
          "cap",
          "today",
          "wear",
          "is"
        ],
        "hints": [
          "Usa 'I am wearing' para lo que tienes puesto ahora.",
          "Gorra negra = 'black cap'."
        ]
      },
      {
        "id": "0-13-b2",
        "prompt": "Él no está usando chaqueta.",
        "answer": "He is not wearing a jacket",
        "tokens": [
          "He",
          "is",
          "not",
          "wearing",
          "a",
          "jacket",
          "does",
          "wear"
        ],
        "hints": [
          "Usa el presente continuo en negación: 'is not wearing'.",
          "Añade 'a' antes de jacket."
        ]
      },
      {
        "id": "0-13-b3",
        "prompt": "¿Qué estás usando (vistiendo)?",
        "answer": "What are you wearing",
        "tokens": [
          "What",
          "are",
          "you",
          "wearing",
          "do",
          "wear",
          "is"
        ],
        "hints": [
          "Usa 'What are you wearing' para preguntar por la ropa.",
          "No uses 'do' aquí."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-13-e1",
        "audioText": "I am wearing a black cap today.",
        "correctAnswer": "I am wearing a black cap today.",
        "options": [
          "I am wearing a black cap today.",
          "I am wearing a black hat today.",
          "He is wearing a black cap today."
        ]
      },
      {
        "id": "0-13-e2",
        "audioText": "She is wearing cool glasses.",
        "correctAnswer": "She is wearing cool glasses.",
        "options": [
          "She is wearing cool glasses.",
          "She is wearing old glasses.",
          "He is wearing cool glasses."
        ]
      },
      {
        "id": "0-13-e3",
        "audioText": "What are you wearing to the party?",
        "correctAnswer": "What are you wearing to the party?",
        "options": [
          "What are you wearing to the party?",
          "What are you going to the party?",
          "Why are you wearing that to the party?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-14",
    "badgeName": "School Scholar",
    "badgeEmoji": "🎒",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-14-1",
        "term": "Math",
        "translation": "Matemáticas",
        "ipa": "/mæθ/",
        "audioText": "Math.",
        "example": "Math is my favorite subject.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-2",
        "term": "English",
        "translation": "Inglés",
        "ipa": "/ˈɪŋɡlɪʃ/",
        "audioText": "English.",
        "example": "We speak English in class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-3",
        "term": "Backpack",
        "translation": "Maleta / Mochila",
        "ipa": "/ˈbækˌpæk/",
        "audioText": "Backpack.",
        "example": "My backpack is heavy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-4",
        "term": "Notebook",
        "translation": "Cuaderno",
        "ipa": "/ˈnoʊtˌbʊk/",
        "audioText": "Notebook.",
        "example": "I write in my notebook.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-14-5",
        "term": "This is...",
        "translation": "Este/Esta es... (cerca)",
        "ipa": "/ðɪs ɪz/",
        "audioText": "This is.",
        "example": "This is my notebook.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-14-6",
        "term": "That is...",
        "translation": "Ese/Esa es... (lejos)",
        "ipa": "/ðæt ɪz/",
        "audioText": "That is.",
        "example": "That is the math teacher.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-14-7",
        "term": "These are...",
        "translation": "Estos/Estas son... (cerca plural)",
        "ipa": "/ðiz ɑr/",
        "audioText": "These are.",
        "example": "These are my pencils.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-14-b1",
        "prompt": "Este es mi cuaderno de inglés.",
        "answer": "This is my English notebook",
        "tokens": [
          "This",
          "is",
          "my",
          "English",
          "notebook",
          "That",
          "are"
        ],
        "hints": [
          "'Este' (cerca y singular) = 'This is'.",
          "El adjetivo/materia va antes: 'English notebook'."
        ]
      },
      {
        "id": "0-14-b2",
        "prompt": "Esos no son mis profesores.",
        "answer": "Those are not my teachers",
        "tokens": [
          "Those",
          "are",
          "not",
          "my",
          "teachers",
          "That",
          "is"
        ],
        "hints": [
          "'Esos' (lejos y plural) = 'Those are'.",
          "Añade 'not' para negar."
        ]
      },
      {
        "id": "0-14-b3",
        "prompt": "¿Es esa tu maleta?",
        "answer": "Is that your backpack",
        "tokens": [
          "Is",
          "that",
          "your",
          "backpack",
          "Are",
          "this"
        ],
        "hints": [
          "Para preguntar sobre 'esa' (lejos, singular), usa 'Is that'.",
          "Maleta = backpack."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-14-e1",
        "audioText": "This is my favorite English notebook.",
        "correctAnswer": "This is my favorite English notebook.",
        "options": [
          "This is my favorite English notebook.",
          "That is my favorite English notebook.",
          "These are my favorite English notebooks."
        ]
      },
      {
        "id": "0-14-e2",
        "audioText": "Those are not my pencils.",
        "correctAnswer": "Those are not my pencils.",
        "options": [
          "Those are not my pencils.",
          "These are not my pencils.",
          "That is not my pencil."
        ]
      },
      {
        "id": "0-14-e3",
        "audioText": "Is that your new backpack?",
        "correctAnswer": "Is that your new backpack?",
        "options": [
          "Is that your new backpack?",
          "Is this your new backpack?",
          "Are those your new backpacks?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-15",
    "badgeName": "Routine Boss",
    "badgeEmoji": "📅",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-15-1",
        "term": "Take a shower",
        "translation": "Bañarse",
        "ipa": "/teɪk ə ˈʃaʊər/",
        "audioText": "Take a shower.",
        "example": "I take a shower in the morning.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-2",
        "term": "Have lunch",
        "translation": "Almorzar",
        "ipa": "/hæv lʌntʃ/",
        "audioText": "Have lunch.",
        "example": "We have lunch at school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-3",
        "term": "Go to bed",
        "translation": "Ir a dormir / Ir a la cama",
        "ipa": "/ɡoʊ tu bɛd/",
        "audioText": "Go to bed.",
        "example": "I go to bed late.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-4",
        "term": "Then / After that",
        "translation": "Luego / Después de eso",
        "ipa": "/ðɛn/ /ˈæftər ðæt/",
        "audioText": "Then. After that.",
        "example": "I do homework, then I play games.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-15-5",
        "term": "First, I...",
        "translation": "Primero, yo... (secuencias)",
        "ipa": "/fɜrst aɪ/",
        "audioText": "First, I.",
        "example": "First, I wake up.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-15-6",
        "term": "I don't (verb)",
        "translation": "Yo no (verbo en presente)",
        "ipa": "/aɪ doʊnt/",
        "audioText": "I don't.",
        "example": "I don't watch TV in the morning.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-15-7",
        "term": "Do you (verb)?",
        "translation": "¿Tú (verbo en presente)?",
        "ipa": "/du ju/",
        "audioText": "Do you?",
        "example": "Do you have lunch at 1 PM?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-15-b1",
        "prompt": "Primero, me baño en la mañana.",
        "answer": "First I take a shower in the morning",
        "tokens": [
          "First",
          "I",
          "take",
          "a",
          "shower",
          "in",
          "the",
          "morning",
          "at",
          "make"
        ],
        "hints": [
          "Empieza con la secuencia 'First'.",
          "Bañarse se dice 'take a shower'."
        ]
      },
      {
        "id": "0-15-b2",
        "prompt": "Yo no almuerzo en el colegio.",
        "answer": "I do not have lunch at school",
        "tokens": [
          "I",
          "do",
          "not",
          "have",
          "lunch",
          "at",
          "school",
          "am",
          "in"
        ],
        "hints": [
          "Para negar una rutina en primera persona usa 'do not'.",
          "Almorzar = 'have lunch'."
        ]
      },
      {
        "id": "0-15-b3",
        "prompt": "¿A qué hora te acuestas a dormir?",
        "answer": "What time do you go to bed",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "go",
          "to",
          "bed",
          "are",
          "sleep"
        ],
        "hints": [
          "Empieza con 'What time do you'.",
          "Ir a dormir = 'go to bed'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-15-e1",
        "audioText": "First, I wake up and take a shower.",
        "correctAnswer": "First, I wake up and take a shower.",
        "options": [
          "First, I wake up and take a shower.",
          "First, I wake up and make a shower.",
          "First, he wakes up and takes a shower."
        ]
      },
      {
        "id": "0-15-e2",
        "audioText": "I don't have lunch at school.",
        "correctAnswer": "I don't have lunch at school.",
        "options": [
          "I don't have lunch at school.",
          "I don't have breakfast at school.",
          "She doesn't have lunch at school."
        ]
      },
      {
        "id": "0-15-e3",
        "audioText": "Then, I go to bed at ten o'clock.",
        "correctAnswer": "Then, I go to bed at ten o'clock.",
        "options": [
          "Then, I go to bed at ten o'clock.",
          "Then, I go to bed at nine o'clock.",
          "Then, I go home at ten o'clock."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-zero-16",
    "badgeName": "Zero Graduate",
    "badgeEmoji": "🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "0-16-1",
        "term": "Hello everyone",
        "translation": "Hola a todos",
        "ipa": "/həˈloʊ ˈɛvriˌwʌn/",
        "audioText": "Hello everyone.",
        "example": "Hello everyone, my name is Alex.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-2",
        "term": "Ready",
        "translation": "Listo/a",
        "ipa": "/ˈrɛdi/",
        "audioText": "Ready.",
        "example": "I am ready for the final challenge.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-3",
        "term": "Review",
        "translation": "Repaso",
        "ipa": "/rɪˈvju/",
        "audioText": "Review.",
        "example": "Let's review the grammar.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-4",
        "term": "Graduate",
        "translation": "Graduarse",
        "ipa": "/ˈɡrædʒuˌeɪt/",
        "audioText": "Graduate.",
        "example": "We graduate to Level 1 today!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "0-16-5",
        "term": "I am (Verb To Be summary)",
        "translation": "Soy / Estoy (resumen To Be)",
        "ipa": "/aɪ æm/",
        "audioText": "I am.",
        "example": "I am 15 and I am from Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-16-6",
        "term": "I can (Modal Can summary)",
        "translation": "Yo puedo (resumen modal)",
        "ipa": "/aɪ kæn/",
        "audioText": "I can.",
        "example": "I can speak English now.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "0-16-7",
        "term": "I like (Present Simple summary)",
        "translation": "Me gusta (resumen presente simple)",
        "ipa": "/aɪ laɪk/",
        "audioText": "I like.",
        "example": "I like learning English.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "0-16-b1",
        "prompt": "Hola a todos, estoy listo para el nivel uno.",
        "answer": "Hello everyone I am ready for level one",
        "tokens": [
          "Hello",
          "everyone",
          "I",
          "am",
          "ready",
          "for",
          "level",
          "one",
          "is",
          "the"
        ],
        "hints": [
          "'Hola a todos' = 'Hello everyone'.",
          "Usa 'I am ready for'."
        ]
      },
      {
        "id": "0-16-b2",
        "prompt": "Nosotros podemos hablar inglés ahora.",
        "answer": "We can speak English now",
        "tokens": [
          "We",
          "can",
          "speak",
          "English",
          "now",
          "are",
          "speaking"
        ],
        "hints": [
          "Usa el modal 'can' para habilidad.",
          "Hablar un idioma = 'speak'."
        ]
      },
      {
        "id": "0-16-b3",
        "prompt": "¿Te gusta aprender con nosotros?",
        "answer": "Do you like learning with us",
        "tokens": [
          "Do",
          "you",
          "like",
          "learning",
          "with",
          "us",
          "Are",
          "we"
        ],
        "hints": [
          "Empieza con 'Do you like'.",
          "Después de 'like' usa el verbo con '-ing': 'learning'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "0-16-e1",
        "audioText": "Hello everyone, I am ready for level one.",
        "correctAnswer": "Hello everyone, I am ready for level one.",
        "options": [
          "Hello everyone, I am ready for level one.",
          "Hello everyone, I am not ready for level one.",
          "Hello everyone, we are ready for level one."
        ]
      },
      {
        "id": "0-16-e2",
        "audioText": "We can speak basic English now.",
        "correctAnswer": "We can speak basic English now.",
        "options": [
          "We can speak basic English now.",
          "We can't speak basic English now.",
          "They can speak basic English now."
        ]
      },
      {
        "id": "0-16-e3",
        "audioText": "Do you like learning English with our squad?",
        "correctAnswer": "Do you like learning English with our squad?",
        "options": [
          "Do you like learning English with our squad?",
          "Do you like speaking English with our squad?",
          "Does she like learning English with our squad?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-1",
    "badgeName": "Friendly Face",
    "badgeEmoji": "👋",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-1-1",
        "term": "Hello / Hi",
        "translation": "Hola",
        "ipa": "/həˈloʊ/ /haɪ/",
        "audioText": "Hello. Hi.",
        "example": "Hello, how are you?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-2",
        "term": "Goodbye / Bye",
        "translation": "Adiós / Chao",
        "ipa": "/ɡʊdˈbaɪ/ /baɪ/",
        "audioText": "Goodbye. Bye.",
        "example": "Bye, see you later!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-3",
        "term": "Nice to meet you",
        "translation": "Mucho gusto",
        "ipa": "/naɪs tə miːt ju/",
        "audioText": "Nice to meet you.",
        "example": "Hi, I am Juan. Nice to meet you.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-4",
        "term": "Name",
        "translation": "Nombre",
        "ipa": "/neɪm/",
        "audioText": "Name",
        "example": "My name is Sofia.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-1-5",
        "term": "I am",
        "translation": "Yo soy / Yo estoy",
        "ipa": "/aɪ æm/",
        "audioText": "I am.",
        "example": "I am from Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-1-6",
        "term": "You are",
        "translation": "Tú eres / Tú estás",
        "ipa": "/ju ɑr/",
        "audioText": "You are.",
        "example": "You are my friend.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-1-7",
        "term": "He / She is",
        "translation": "Él / Ella es",
        "ipa": "/hi/ /ʃi ɪz/",
        "audioText": "He is. She is.",
        "example": "She is 14 years old.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-1-b1",
        "prompt": "Hola, mucho gusto.",
        "answer": "Hello nice to meet you",
        "tokens": [
          "Hello",
          "nice",
          "to",
          "meet",
          "you",
          "goodbye",
          "is"
        ],
        "hints": [
          "Empieza saludando.",
          "Usa la frase completa para \"mucho gusto\"."
        ]
      },
      {
        "id": "1-1-b2",
        "prompt": "Yo soy de Colombia.",
        "answer": "I am from Colombia",
        "tokens": [
          "I",
          "am",
          "from",
          "Colombia",
          "are",
          "is",
          "the"
        ],
        "hints": [
          "Recuerda el pronombre para \"Yo\".",
          "Usa el verbo to be correcto."
        ]
      },
      {
        "id": "1-1-b3",
        "prompt": "Ella tiene 15 años.",
        "answer": "She is 15 years old",
        "tokens": [
          "She",
          "is",
          "15",
          "years",
          "old",
          "has",
          "have"
        ],
        "hints": [
          "En inglés la edad se \"es\", no se \"tiene\".",
          "Usa el verbo to be para ella (she)."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-1-e1",
        "audioText": "Hi, my name is Mateo.",
        "correctAnswer": "Hi, my name is Mateo.",
        "options": [
          "Hi, my name is Mateo.",
          "Hello, your name is Mateo.",
          "Hi, his name is Mateo."
        ]
      },
      {
        "id": "1-1-e2",
        "audioText": "Nice to meet you.",
        "correctAnswer": "Nice to meet you.",
        "options": [
          "Nice to see you.",
          "Nice to meet you.",
          "Good to meet you."
        ]
      },
      {
        "id": "1-1-e3",
        "audioText": "She is from Medellin.",
        "correctAnswer": "She is from Medellin.",
        "options": [
          "He is from Medellin.",
          "She is from Medellin.",
          "They are from Medellin."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-2",
    "badgeName": "Routine Master",
    "badgeEmoji": "⏰",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-2-1",
        "term": "Wake up",
        "translation": "Despertarse",
        "ipa": "/weɪk ʌp/",
        "audioText": "Wake up.",
        "example": "I wake up at 6 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-2",
        "term": "Take a shower",
        "translation": "Bañarse",
        "ipa": "/teɪk ə ˈʃaʊər/",
        "audioText": "Take a shower.",
        "example": "I take a shower in the morning.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-3",
        "term": "Have breakfast",
        "translation": "Desayunar",
        "ipa": "/hæv ˈbrɛkfəst/",
        "audioText": "Have breakfast.",
        "example": "We have breakfast together.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-4",
        "term": "Go to school",
        "translation": "Ir al colegio",
        "ipa": "/ɡoʊ tə skul/",
        "audioText": "Go to school.",
        "example": "I go to school by bus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-5",
        "term": "Do homework",
        "translation": "Hacer tareas",
        "ipa": "/du ˈhoʊmwɜrk/",
        "audioText": "Do homework.",
        "example": "She does homework after school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-2-6",
        "term": "I / You / We play",
        "translation": "Presente simple (I/You/We)",
        "ipa": "/pleɪ/",
        "audioText": "I play. You play. We play.",
        "example": "We play video games.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-2-7",
        "term": "He / She plays",
        "translation": "Presente simple (He/She)",
        "ipa": "/pleɪz/",
        "audioText": "He plays. She plays.",
        "example": "He plays soccer on weekends.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-2-b1",
        "prompt": "Yo me despierto a las seis.",
        "answer": "I wake up at six",
        "tokens": [
          "I",
          "wake",
          "up",
          "at",
          "six",
          "wakes",
          "in"
        ],
        "hints": [
          "Usa \"I\" para yo.",
          "Recuerda que la preposición para la hora es \"at\"."
        ]
      },
      {
        "id": "1-2-b2",
        "prompt": "Él almuerza en el colegio.",
        "answer": "He eats lunch at school",
        "tokens": [
          "He",
          "eats",
          "lunch",
          "at",
          "school",
          "eat",
          "in"
        ],
        "hints": [
          "Usa \"He\" para él.",
          "Recuerda agregar la \"s\" al verbo porque es tercera persona."
        ]
      },
      {
        "id": "1-2-b3",
        "prompt": "Nosotros hacemos tareas por la tarde.",
        "answer": "We do homework in the afternoon",
        "tokens": [
          "We",
          "do",
          "homework",
          "in",
          "the",
          "afternoon",
          "does"
        ],
        "hints": [
          "\"Hacer tareas\" es \"do homework\".",
          "Para \"por la tarde\" usa \"in the afternoon\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-2-e1",
        "audioText": "I take a shower at seven.",
        "correctAnswer": "I take a shower at seven.",
        "options": [
          "I take a shower at seven.",
          "I take a shower at eleven.",
          "I make a shower at seven."
        ]
      },
      {
        "id": "1-2-e2",
        "audioText": "She goes to bed early.",
        "correctAnswer": "She goes to bed early.",
        "options": [
          "He goes to bed early.",
          "She goes to bed early.",
          "She goes to bed late."
        ]
      },
      {
        "id": "1-2-e3",
        "audioText": "They watch TV after school.",
        "correctAnswer": "They watch TV after school.",
        "options": [
          "We watch TV after school.",
          "They watch TV at school.",
          "They watch TV after school."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-3",
    "badgeName": "Foodie",
    "badgeEmoji": "🍔",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-3-1",
        "term": "Hamburger and fries",
        "translation": "Hamburguesa con papas fritas",
        "ipa": "/ˈhæmbɜrɡər ænd fraɪz/",
        "audioText": "Hamburger and fries.",
        "example": "I love hamburger and fries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-2",
        "term": "Juice",
        "translation": "Jugo",
        "ipa": "/dʒus/",
        "audioText": "Juice.",
        "example": "Can I have some apple juice?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-3",
        "term": "Chicken and rice",
        "translation": "Pollo con arroz",
        "ipa": "/ˈtʃɪkɪn ænd raɪs/",
        "audioText": "Chicken and rice.",
        "example": "My mom makes chicken and rice.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-4",
        "term": "Ice cream",
        "translation": "Helado",
        "ipa": "/aɪs krim/",
        "audioText": "Ice cream.",
        "example": "Strawberry ice cream is the best.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-5",
        "term": "Water",
        "translation": "Agua",
        "ipa": "/ˈwɔtər/",
        "audioText": "Water.",
        "example": "I drink a lot of water.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-3-6",
        "term": "I would like",
        "translation": "Me gustaría",
        "ipa": "/aɪ wʊd laɪk/",
        "audioText": "I would like.",
        "example": "I would like a pizza.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-3-7",
        "term": "Can I have...?",
        "translation": "¿Me puedes dar...? / ¿Me regalas...?",
        "ipa": "/kæn aɪ hæv/",
        "audioText": "Can I have...?",
        "example": "Can I have some water, please?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-3-b1",
        "prompt": "Me gustaría una hamburguesa.",
        "answer": "I would like a hamburger",
        "tokens": [
          "I",
          "would",
          "like",
          "a",
          "hamburger",
          "want",
          "an"
        ],
        "hints": [
          "Usa la expresión \"I would like\".",
          "Hamburguesa empieza con consonante, usa \"a\"."
        ]
      },
      {
        "id": "1-3-b2",
        "prompt": "¿Me regalas unas papas fritas?",
        "answer": "Can I have some french fries",
        "tokens": [
          "Can",
          "I",
          "have",
          "some",
          "french",
          "fries",
          "give",
          "me"
        ],
        "hints": [
          "En inglés no decimos \"give me\" para pedir en restaurantes.",
          "Usa \"Can I have\"."
        ]
      },
      {
        "id": "1-3-b3",
        "prompt": "Ella quiere un jugo.",
        "answer": "She wants a juice",
        "tokens": [
          "She",
          "wants",
          "a",
          "juice",
          "want",
          "an",
          "water"
        ],
        "hints": [
          "Usa \"She\".",
          "Recuerda la \"s\" en el verbo para tercera persona."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-3-e1",
        "audioText": "I would like a soda, please.",
        "correctAnswer": "I would like a soda, please.",
        "options": [
          "I would like a salad, please.",
          "I would like a soda, please.",
          "I want a soda, please."
        ]
      },
      {
        "id": "1-3-e2",
        "audioText": "Can I have some chicken?",
        "correctAnswer": "Can I have some chicken?",
        "options": [
          "Can I have some chicken?",
          "Can I have some kitchen?",
          "Can you have some chicken?"
        ]
      },
      {
        "id": "1-3-e3",
        "audioText": "We like pizza and ice cream.",
        "correctAnswer": "We like pizza and ice cream.",
        "options": [
          "He likes pizza and ice cream.",
          "We like pizza and ice cream.",
          "We would like pizza and ice cream."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-4",
    "badgeName": "Weather Watcher",
    "badgeEmoji": "☀️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-4-1",
        "term": "Sunny",
        "translation": "Soleado",
        "ipa": "/ˈsʌni/",
        "audioText": "Sunny.",
        "example": "It is very sunny today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-2",
        "term": "Rainy",
        "translation": "Lluvioso",
        "ipa": "/ˈreɪni/",
        "audioText": "Rainy.",
        "example": "I do not like rainy days.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-3",
        "term": "Hot",
        "translation": "Caliente / Calor",
        "ipa": "/hɑt/",
        "audioText": "Hot.",
        "example": "The weather in Cali is hot.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-4",
        "term": "Cold",
        "translation": "Frío",
        "ipa": "/koʊld/",
        "audioText": "Cold.",
        "example": "Bogota is usually cold.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-5",
        "term": "Winter",
        "translation": "Invierno",
        "ipa": "/ˈwɪntər/",
        "audioText": "Winter.",
        "example": "It snows a lot in winter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-4-6",
        "term": "It is (weather)",
        "translation": "Hace / Está (clima)",
        "ipa": "/ɪt ɪz/",
        "audioText": "It is.",
        "example": "It is hot and sunny.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-4-7",
        "term": "It is raining",
        "translation": "Está lloviendo",
        "ipa": "/ɪt ɪz ˈreɪnɪŋ/",
        "audioText": "It is raining.",
        "example": "It is raining right now.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-4-b1",
        "prompt": "Hace mucho calor hoy.",
        "answer": "It is very hot today",
        "tokens": [
          "It",
          "is",
          "very",
          "hot",
          "today",
          "makes",
          "much"
        ],
        "hints": [
          "En inglés decimos \"It is\" para el clima.",
          "No traduzcas \"hace\" literalmente."
        ]
      },
      {
        "id": "1-4-b2",
        "prompt": "Está lloviendo en Bogotá.",
        "answer": "It is raining in Bogota",
        "tokens": [
          "It",
          "is",
          "raining",
          "in",
          "Bogota",
          "rain",
          "at"
        ],
        "hints": [
          "Usa \"It is\" para hablar de lo que está pasando.",
          "El verbo llover necesita \"-ing\" (raining)."
        ]
      },
      {
        "id": "1-4-b3",
        "prompt": "Me gusta el clima frío.",
        "answer": "I like cold weather",
        "tokens": [
          "I",
          "like",
          "cold",
          "weather",
          "the",
          "hot"
        ],
        "hints": [
          "En inglés el adjetivo (\"cold\") va antes del sustantivo (\"weather\").",
          "Generalmente no se usa \"the\" aquí."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-4-e1",
        "audioText": "It is very sunny.",
        "correctAnswer": "It is very sunny.",
        "options": [
          "It is very sunny.",
          "He is very funny.",
          "It is very rainy."
        ]
      },
      {
        "id": "1-4-e2",
        "audioText": "Is it cold in Medellin?",
        "correctAnswer": "Is it cold in Medellin?",
        "options": [
          "It is cold in Medellin.",
          "Is it cold in Medellin?",
          "Is it cool in Medellin?"
        ]
      },
      {
        "id": "1-4-e3",
        "audioText": "It is snowing in winter.",
        "correctAnswer": "It is snowing in winter.",
        "options": [
          "It is blowing in winter.",
          "It is raining in winter.",
          "It is snowing in winter."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-5",
    "badgeName": "Style Icon",
    "badgeEmoji": "👟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-5-1",
        "term": "Sneakers",
        "translation": "Tenis / Zapatillas",
        "ipa": "/ˈsnikərz/",
        "audioText": "Sneakers.",
        "example": "I want new Nike sneakers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-2",
        "term": "Hoodie",
        "translation": "Saco con capota / Buzo",
        "ipa": "/ˈhʊdi/",
        "audioText": "Hoodie.",
        "example": "My favorite hoodie is black.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-3",
        "term": "Jeans",
        "translation": "Pantalones de jean",
        "ipa": "/dʒinz/",
        "audioText": "Jeans.",
        "example": "I wear jeans to the mall.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-4",
        "term": "Jacket",
        "translation": "Chaqueta",
        "ipa": "/ˈdʒækɪt/",
        "audioText": "Jacket.",
        "example": "Put on your jacket, it is cold.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-5",
        "term": "T-shirt",
        "translation": "Camiseta",
        "ipa": "/ˈti ʃɜrt/",
        "audioText": "T-shirt.",
        "example": "He is wearing a white T-shirt.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-5-6",
        "term": "Wearing",
        "translation": "Usando / Llevando puesto",
        "ipa": "/ˈwɛrɪŋ/",
        "audioText": "Wearing.",
        "example": "She is wearing a beautiful dress.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-5-7",
        "term": "How much is / are...?",
        "translation": "¿Cuánto cuesta / cuestan...?",
        "ipa": "/haʊ mʌtʃ ɪz/ /ɑr/",
        "audioText": "How much is it? How much are they?",
        "example": "How much are these shoes?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-5-b1",
        "prompt": "¿Cuánto cuestan esos tenis?",
        "answer": "How much are those sneakers",
        "tokens": [
          "How",
          "much",
          "are",
          "those",
          "sneakers",
          "is",
          "shoes"
        ],
        "hints": [
          "Usa \"How much\" para el precio.",
          "Los tenis (\"sneakers\") son plural, usa \"are\"."
        ]
      },
      {
        "id": "1-5-b2",
        "prompt": "Él tiene puesto un saco rojo.",
        "answer": "He is wearing a red hoodie",
        "tokens": [
          "He",
          "is",
          "wearing",
          "a",
          "red",
          "hoodie",
          "has",
          "put"
        ],
        "hints": [
          "No traduzcas \"tiene puesto\" literalmente. Usa \"is wearing\".",
          "Recuerda que el color va antes de la prenda."
        ]
      },
      {
        "id": "1-5-b3",
        "prompt": "Me gustan tus jeans.",
        "answer": "I like your jeans",
        "tokens": [
          "I",
          "like",
          "your",
          "jeans",
          "you",
          "likes"
        ],
        "hints": [
          "Empieza con \"I like\".",
          "Usa el posesivo \"your\" para tus."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-5-e1",
        "audioText": "How much is this T-shirt?",
        "correctAnswer": "How much is this T-shirt?",
        "options": [
          "How much is this T-shirt?",
          "How much are these T-shirts?",
          "How many is this T-shirt?"
        ]
      },
      {
        "id": "1-5-e2",
        "audioText": "She is wearing a blue jacket.",
        "correctAnswer": "She is wearing a blue jacket.",
        "options": [
          "He is wearing a blue jacket.",
          "She is wearing a blue jacket.",
          "She is wearing blue jeans."
        ]
      },
      {
        "id": "1-5-e3",
        "audioText": "I need new sneakers.",
        "correctAnswer": "I need new sneakers.",
        "options": [
          "I need new speakers.",
          "I need new sneakers.",
          "You need new sneakers."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-6",
    "badgeName": "Action Star",
    "badgeEmoji": "⚽",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-6-1",
        "term": "Play soccer",
        "translation": "Jugar fútbol",
        "ipa": "/pleɪ ˈsɑkər/",
        "audioText": "Play soccer.",
        "example": "I play soccer with my squad every Saturday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-2",
        "term": "Go skateboarding",
        "translation": "Montar tabla / patineta",
        "ipa": "/ɡoʊ ˈskeɪtbɔrdɪŋ/",
        "audioText": "Go skateboarding.",
        "example": "Let’s go skateboarding at the new park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-3",
        "term": "Do karate / martial arts",
        "translation": "Hacer karate / artes marciales",
        "ipa": "/du kəˈrɑti/",
        "audioText": "Do karate.",
        "example": "My brother does karate on Tuesdays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-4",
        "term": "Video games / Gaming",
        "translation": "Videojuegos / Gaming",
        "ipa": "/ˈvɪdioʊ ɡeɪmz/",
        "audioText": "Video games.",
        "example": "We love gaming online together.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-6-5",
        "term": "I play basketball",
        "translation": "Yo juego baloncesto (deportes de balón/equipo con PLAY)",
        "ipa": "/aɪ pleɪ ˈbæskɪtbɔl/",
        "audioText": "I play basketball.",
        "example": "We play basketball in gym class.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-6-6",
        "term": "She goes swimming",
        "translation": "Ella va a nadar (deportes con -ING usan GO)",
        "ipa": "/ʃi ɡoʊz ˈswɪmɪŋ/",
        "audioText": "She goes swimming.",
        "example": "She goes swimming on weekends.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-6-7",
        "term": "Would you like to come?",
        "translation": "¿Te gustaría venir? (invitación cordial)",
        "ipa": "/wʊd ju laɪk tə kʌm/",
        "audioText": "Would you like to come?",
        "example": "Would you like to come to my match?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-6-b1",
        "prompt": "Yo juego fútbol los fines de semana.",
        "answer": "I play soccer on weekends",
        "tokens": [
          "I",
          "play",
          "soccer",
          "on",
          "weekends",
          "plays",
          "go"
        ],
        "hints": [
          "Usa \"play\" para deportes con balón.",
          "Recuerda que con fines de semana se usa \"on weekends\"."
        ]
      },
      {
        "id": "1-6-b2",
        "prompt": "Ella no hace yoga en la noche.",
        "answer": "She does not do yoga at night",
        "tokens": [
          "She",
          "does",
          "not",
          "do",
          "yoga",
          "at",
          "night",
          "is",
          "goes"
        ],
        "hints": [
          "Usa \"does not do\" para la negación en 3ra persona.",
          "Para la noche se dice \"at night\"."
        ]
      },
      {
        "id": "1-6-b3",
        "prompt": "¿Te gustaría ir al parque hoy?",
        "answer": "Would you like to go to the park today",
        "tokens": [
          "Would",
          "you",
          "like",
          "to",
          "go",
          "to",
          "the",
          "park",
          "today",
          "do",
          "are"
        ],
        "hints": [
          "Empieza la invitación con \"Would you like to\".",
          "Usa \"go to the park\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-6-e1",
        "audioText": "I play basketball every Friday after school.",
        "correctAnswer": "I play basketball every Friday after school.",
        "options": [
          "I play basketball every Friday after school.",
          "I play football every Friday after school.",
          "I go basketball every Friday after school."
        ]
      },
      {
        "id": "1-6-e2",
        "audioText": "Would you like to play video games with me?",
        "correctAnswer": "Would you like to play video games with me?",
        "options": [
          "Do you like to play video games with me?",
          "Would you like to play video games with me?",
          "Would you like to buy video games with me?"
        ]
      },
      {
        "id": "1-6-e3",
        "audioText": "My sister does gymnastics in the afternoon.",
        "correctAnswer": "My sister does gymnastics in the afternoon.",
        "options": [
          "My sister plays gymnastics in the afternoon.",
          "My sister does gymnastics in the afternoon.",
          "My sister goes gymnastics in the afternoon."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-7",
    "badgeName": "Weather Master",
    "badgeEmoji": "⛅",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-7-1",
        "term": "Sunny & Warm",
        "translation": "Soleado y cálido",
        "ipa": "/ˈsʌni ænd wɔrm/",
        "audioText": "Sunny and warm.",
        "example": "Today is sunny and warm in Medellín.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-2",
        "term": "Rainy & Chilly",
        "translation": "Lluvioso y friíto",
        "ipa": "/ˈreɪni ænd ˈtʃɪli/",
        "audioText": "Rainy and chilly.",
        "example": "Bogotá is rainy and chilly today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-3",
        "term": "Hoodie & Sneakers",
        "translation": "Saco con capota y tenis",
        "ipa": "/ˈhʊdi ænd ˈsnikərz/",
        "audioText": "Hoodie and sneakers.",
        "example": "I love wearing my black hoodie and sneakers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-4",
        "term": "Windy & Cloudy",
        "translation": "Ventoso y nublado",
        "ipa": "/ˈwɪndi ænd ˈklaʊdi/",
        "audioText": "Windy and cloudy.",
        "example": "It is very windy this afternoon.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-7-5",
        "term": "It is raining outside",
        "translation": "Está lloviendo afuera (presente continuo con BE + V-ING)",
        "ipa": "/ɪt ɪz ˈreɪnɪŋ ˌaʊtˈsaɪd/",
        "audioText": "It is raining outside.",
        "example": "Take an umbrella, it is raining outside.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-7-6",
        "term": "I am wearing a coat",
        "translation": "Estoy usando una chaqueta / abrigo",
        "ipa": "/aɪ æm ˈwɛrɪŋ ə koʊt/",
        "audioText": "I am wearing a coat.",
        "example": "I am wearing a thick coat because it is cold.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-7-7",
        "term": "Put on your jacket",
        "translation": "Ponte tu chaqueta (imperativo)",
        "ipa": "/pʊt ɑn jʊr ˈdʒækɪt/",
        "audioText": "Put on your jacket.",
        "example": "Put on your jacket before leaving.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-7-b1",
        "prompt": "Está lloviendo muy fuerte afuera.",
        "answer": "It is raining very hard outside",
        "tokens": [
          "It",
          "is",
          "raining",
          "very",
          "hard",
          "outside",
          "rains",
          "does"
        ],
        "hints": [
          "Usa \"It is raining\" para el clima en progreso.",
          "\"Muy fuerte\" con lluvia se dice \"very hard\"."
        ]
      },
      {
        "id": "1-7-b2",
        "prompt": "Yo no estoy usando una chaqueta hoy.",
        "answer": "I am not wearing a jacket today",
        "tokens": [
          "I",
          "am",
          "not",
          "wearing",
          "a",
          "jacket",
          "today",
          "have",
          "do"
        ],
        "hints": [
          "Usa la negación continua \"I am not wearing\".",
          "No olvides el artículo \"a\" antes de jacket."
        ]
      },
      {
        "id": "1-7-b3",
        "prompt": "¿Qué tienes puesto para la fiesta?",
        "answer": "What are you wearing for the party",
        "tokens": [
          "What",
          "are",
          "you",
          "wearing",
          "for",
          "the",
          "party",
          "do",
          "have"
        ],
        "hints": [
          "Empieza con la pregunta Wh- \"What are you wearing\".",
          "Usa \"for the party\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-7-e1",
        "audioText": "It is very cold and windy today in the city.",
        "correctAnswer": "It is very cold and windy today in the city.",
        "options": [
          "It is very cold and windy today in the city.",
          "It is very hot and windy today in the city.",
          "It is very cold and cloudy today in the city."
        ]
      },
      {
        "id": "1-7-e2",
        "audioText": "Why are you wearing a heavy coat?",
        "correctAnswer": "Why are you wearing a heavy coat?",
        "options": [
          "Why are you wearing a heavy coat?",
          "Where are you wearing a heavy coat?",
          "Why are you buying a heavy coat?"
        ]
      },
      {
        "id": "1-7-e3",
        "audioText": "Take an umbrella because it is starting to rain.",
        "correctAnswer": "Take an umbrella because it is starting to rain.",
        "options": [
          "Take an umbrella because it is starting to rain.",
          "Take an umbrella because it is starting to snow.",
          "Take a jacket because it is starting to rain."
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
        "term": "Shopping mall",
        "translation": "Centro comercial",
        "ipa": "/ˈʃɑpɪŋ mɔl/",
        "audioText": "Shopping mall.",
        "example": "Let’s meet at the shopping mall at 4 PM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-2",
        "term": "Bubble tea shop",
        "translation": "Tienda de té de perlas / burbujas",
        "ipa": "/ˈbʌbəl ti ʃɑp/",
        "audioText": "Bubble tea shop.",
        "example": "The bubble tea shop has fresh boba ready.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-3",
        "term": "Skatepark",
        "translation": "Pista de patineta / skatepark",
        "ipa": "/ˈskeɪtpɑrk/",
        "audioText": "Skatepark.",
        "example": "The skatepark is behind the sports center.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-4",
        "term": "Traffic lights",
        "translation": "Semáforos",
        "ipa": "/ˈtræfɪk laɪts/",
        "audioText": "Traffic lights.",
        "example": "Turn right at the traffic lights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-8-5",
        "term": "Next to / Beside",
        "translation": "Al lado de (preposición de lugar)",
        "ipa": "/nɛkst tu/",
        "audioText": "Next to.",
        "example": "The bookstore is next to the cinema.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-8-6",
        "term": "Across from",
        "translation": "Al frente de (cruzando la calle)",
        "ipa": "/əˈkrɔs frʌm/",
        "audioText": "Across from.",
        "example": "The cafe is across from the main park.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-8-7",
        "term": "How do I get to...?",
        "translation": "¿Cómo llego a...? (pedir direcciones)",
        "ipa": "/haʊ du aɪ ɡɛt tu/",
        "audioText": "How do I get to...?",
        "example": "Excuse me, how do I get to the subway station?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-8-b1",
        "prompt": "La panadería queda al lado del parque.",
        "answer": "The bakery is next to the park",
        "tokens": [
          "The",
          "bakery",
          "is",
          "next",
          "to",
          "the",
          "park",
          "at",
          "near"
        ],
        "hints": [
          "Usa \"is next to\" para decir que queda al lado.",
          "Termina con \"the park\"."
        ]
      },
      {
        "id": "1-8-b2",
        "prompt": "El centro comercial no queda cerca de aquí.",
        "answer": "The shopping mall is not near here",
        "tokens": [
          "The",
          "shopping",
          "mall",
          "is",
          "not",
          "near",
          "here",
          "does",
          "isn"
        ],
        "hints": [
          "Usa \"is not near here\" para la negación.",
          "\"Centro comercial\" se dice \"shopping mall\"."
        ]
      },
      {
        "id": "1-8-b3",
        "prompt": "¿Cómo llego a la estación del metro?",
        "answer": "How do I get to the metro station",
        "tokens": [
          "How",
          "do",
          "I",
          "get",
          "to",
          "the",
          "metro",
          "station",
          "where",
          "is"
        ],
        "hints": [
          "Empieza la pregunta con \"How do I get to\".",
          "Usa \"the metro station\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-8-e1",
        "audioText": "Excuse me, where is the nearest pharmacy?",
        "correctAnswer": "Excuse me, where is the nearest pharmacy?",
        "options": [
          "Excuse me, where is the nearest bakery?",
          "Excuse me, where is the nearest pharmacy?",
          "Excuse me, how is the nearest pharmacy?"
        ]
      },
      {
        "id": "1-8-e2",
        "audioText": "Walk straight for two blocks and turn right.",
        "correctAnswer": "Walk straight for two blocks and turn right.",
        "options": [
          "Walk straight for two blocks and turn left.",
          "Walk straight for two blocks and turn right.",
          "Run straight for two blocks and turn right."
        ]
      },
      {
        "id": "1-8-e3",
        "audioText": "The cinema is right across from the bookstore.",
        "correctAnswer": "The cinema is right across from the bookstore.",
        "options": [
          "The cinema is right next to the bookstore.",
          "The cinema is right behind the bookstore.",
          "The cinema is right across from the bookstore."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-9",
    "badgeName": "Tech Wizard",
    "badgeEmoji": "📱",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-9-1",
        "term": "Wireless earbuds",
        "translation": "Audífonos inalámbricos",
        "ipa": "/ˈwaɪərlɪs ˈɪrˌbʌdz/",
        "audioText": "Wireless earbuds.",
        "example": "My wireless earbuds have noise cancellation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-2",
        "term": "Portable charger",
        "translation": "Cargador portátil / Power bank",
        "ipa": "/ˈpɔrtəbəl ˈtʃɑrdʒər/",
        "audioText": "Portable charger.",
        "example": "Always bring a portable charger to school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-3",
        "term": "Low battery",
        "translation": "Batería baja",
        "ipa": "/loʊ ˈbætəri/",
        "audioText": "Low battery.",
        "example": "My phone has low battery at 5 percent.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-4",
        "term": "Restart / Reboot",
        "translation": "Reiniciar dispositivo",
        "ipa": "/riˈstɑrt / riˈbut/",
        "audioText": "Restart. Reboot.",
        "example": "Restart your phone if the app freezes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-9-5",
        "term": "My phone cannot connect",
        "translation": "Mi celular no se puede conectar (modal CANNOT/CAN'T)",
        "ipa": "/maɪ foʊn ˈkænɑt kəˈnɛkt/",
        "audioText": "My phone cannot connect.",
        "example": "My laptop cannot connect to the school WiFi.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-9-6",
        "term": "You should charge your phone",
        "translation": "Deberías cargar tu celular (modal SHOULD para consejo)",
        "ipa": "/ju ʃʊd tʃɑrdʒ jʊr foʊn/",
        "audioText": "You should charge your phone.",
        "example": "You should charge your phone before going out.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-9-7",
        "term": "Can you send me the link?",
        "translation": "¿Me puedes enviar el enlace? (petición con CAN)",
        "ipa": "/kæn ju sɛnd mi ðə lɪŋk/",
        "audioText": "Can you send me the link?",
        "example": "Can you send me the WhatsApp link?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-9-b1",
        "prompt": "Puedes conectar tus audífonos por Bluetooth.",
        "answer": "You can connect your earbuds via Bluetooth",
        "tokens": [
          "You",
          "can",
          "connect",
          "your",
          "earbuds",
          "via",
          "Bluetooth",
          "to",
          "are"
        ],
        "hints": [
          "Usa el modal \"You can connect\".",
          "\"Por Bluetooth\" se dice \"via Bluetooth\"."
        ]
      },
      {
        "id": "1-9-b2",
        "prompt": "Mi celular no se puede conectar al internet.",
        "answer": "My phone cannot connect to the internet",
        "tokens": [
          "My",
          "phone",
          "cannot",
          "connect",
          "to",
          "the",
          "internet",
          "does",
          "no"
        ],
        "hints": [
          "Usa \"cannot connect\" para la falla técnica.",
          "Usa \"to the internet\"."
        ]
      },
      {
        "id": "1-9-b3",
        "prompt": "¿Debería reiniciar mi computador ahora?",
        "answer": "Should I restart my computer now",
        "tokens": [
          "Should",
          "I",
          "restart",
          "my",
          "computer",
          "now",
          "can",
          "do"
        ],
        "hints": [
          "Empieza la pregunta con el modal de sugerencia \"Should I\".",
          "Usa el verbo \"restart\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-9-e1",
        "audioText": "My battery is at 5 percent, do you have a charger?",
        "correctAnswer": "My battery is at 5 percent, do you have a charger?",
        "options": [
          "My battery is at 5 percent, do you have a charger?",
          "My battery is at 15 percent, do you have a charger?",
          "My battery is at 5 percent, do you have a cable?"
        ]
      },
      {
        "id": "1-9-e2",
        "audioText": "You should restart your router to fix the WiFi.",
        "correctAnswer": "You should restart your router to fix the WiFi.",
        "options": [
          "You should restart your router to fix the WiFi.",
          "You can restart your phone to fix the WiFi.",
          "You should reset your router to fix the app."
        ]
      },
      {
        "id": "1-9-e3",
        "audioText": "I cannot download this app on my tablet.",
        "correctAnswer": "I cannot download this app on my tablet.",
        "options": [
          "I cannot delete this app on my tablet.",
          "I cannot download this app on my tablet.",
          "I can download this app on my tablet."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-1-10",
    "badgeName": "Party Planner",
    "badgeEmoji": "🎉",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "1-10-1",
        "term": "Birthday party",
        "translation": "Fiesta de cumpleaños",
        "ipa": "/ˈbɜrθˌdeɪ ˈpɑrti/",
        "audioText": "Birthday party.",
        "example": "We are organizing an epic birthday party.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-2",
        "term": "Surprise party",
        "translation": "Fiesta sorpresa",
        "ipa": "/sərˈpraɪz ˈpɑrti/",
        "audioText": "Surprise party.",
        "example": "Don’t say anything, it is a surprise party!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-3",
        "term": "Snacks and drinks",
        "translation": "Pasabocas y bebidas",
        "ipa": "/snæks ænd drɪŋks/",
        "audioText": "Snacks and drinks.",
        "example": "We bought chips, nachos, and soda for the snacks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-4",
        "term": "Gift / Present",
        "translation": "Regalo",
        "ipa": "/ɡɪft / ˈprɛzənt/",
        "audioText": "Gift. Present.",
        "example": "I bought a cool anime hoodie as a gift.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "1-10-5",
        "term": "We are celebrating this Saturday",
        "translation": "Vamos a celebrar este sábado (planes futuros)",
        "ipa": "/wi ɑr ˈsɛləˌbreɪtɪŋ ðɪs ˈsætərˌdeɪ/",
        "audioText": "We are celebrating this Saturday.",
        "example": "We are celebrating Mateo’s 15th birthday this Saturday.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-10-6",
        "term": "I bought a gift for him",
        "translation": "Compré un regalo para él (pronombres objeto HIM/HER/THEM)",
        "ipa": "/aɪ bɔt ə ɡɪft fɔr hɪm/",
        "audioText": "I bought a gift for him.",
        "example": "She bought a cool skate cap for him.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "1-10-7",
        "term": "Can you bring some soda?",
        "translation": "¿Puedes traer algo de gaseosa? (petición con SOME)",
        "ipa": "/kæn ju brɪŋ sʌm ˈsoʊdə/",
        "audioText": "Can you bring some soda?",
        "example": "Can you bring some soda and ice cups?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "1-10-b1",
        "prompt": "Vamos a tener una fiesta de cumpleaños el sábado.",
        "answer": "We are having a birthday party on Saturday",
        "tokens": [
          "We",
          "are",
          "having",
          "a",
          "birthday",
          "party",
          "on",
          "Saturday",
          "have",
          "at"
        ],
        "hints": [
          "Usa \"We are having\" para el plan futuro confirmado.",
          "Usa \"on Saturday\" para el día de la semana."
        ]
      },
      {
        "id": "1-10-b2",
        "prompt": "Ella no sabe nada sobre la fiesta sorpresa.",
        "answer": "She does not know about the surprise party",
        "tokens": [
          "She",
          "does",
          "not",
          "know",
          "about",
          "the",
          "surprise",
          "party",
          "is",
          "no"
        ],
        "hints": [
          "Usa \"She does not know\" en presente simple.",
          "Usa \"about the surprise party\"."
        ]
      },
      {
        "id": "1-10-b3",
        "prompt": "¿Puedes comprar unas papas y gaseosas?",
        "answer": "Can you buy some chips and sodas",
        "tokens": [
          "Can",
          "you",
          "buy",
          "some",
          "chips",
          "and",
          "sodas",
          "do",
          "are"
        ],
        "hints": [
          "Empieza pidiendo el favor con \"Can you buy\".",
          "Usa \"some chips and sodas\"."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "1-10-e1",
        "audioText": "Are you coming to my birthday party tonight?",
        "correctAnswer": "Are you coming to my birthday party tonight?",
        "options": [
          "Are you coming to my birthday party tonight?",
          "Are you going to my birthday party tonight?",
          "Are you coming to her birthday party tonight?"
        ]
      },
      {
        "id": "1-10-e2",
        "audioText": "Don’t tell Juan because it is a secret surprise.",
        "correctAnswer": "Don’t tell Juan because it is a secret surprise.",
        "options": [
          "Don’t tell Juan because it is a secret party.",
          "Don’t tell Juan because it is a secret surprise.",
          "Tell Juan because it is a secret surprise."
        ]
      },
      {
        "id": "1-10-e3",
        "audioText": "We need three large pizzas and two bottles of juice.",
        "correctAnswer": "We need three large pizzas and two bottles of juice.",
        "options": [
          "We need three small pizzas and two bottles of juice.",
          "We need three large pizzas and two bottles of juice.",
          "We need three large pizzas and two cans of soda."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-1",
    "badgeName": "Wild Explorer",
    "badgeEmoji": "🦁",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-1-1",
        "term": "Rainforest",
        "translation": "Selva tropical",
        "ipa": "/ˈreɪnˌfɔrɪst/",
        "audioText": "Rainforest.",
        "example": "Jaguars live in the rainforest.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-2",
        "term": "Desert",
        "translation": "Desierto",
        "ipa": "/ˈdɛzərt/",
        "audioText": "Desert.",
        "example": "It is very hot in the desert.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-3",
        "term": "Hunt",
        "translation": "Cazar",
        "ipa": "/hʌnt/",
        "audioText": "Hunt.",
        "example": "Lions hunt for their food.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-4",
        "term": "Survive",
        "translation": "Sobrevivir",
        "ipa": "/sərˈvaɪv/",
        "audioText": "Survive.",
        "example": "Animals need water to survive.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-1-5",
        "term": "Can",
        "translation": "Poder (habilidad)",
        "ipa": "/kæn/",
        "audioText": "Can.",
        "example": "Monkeys can climb trees.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-1-6",
        "term": "Can't (Cannot)",
        "translation": "No poder",
        "ipa": "/kænt/",
        "audioText": "Can't.",
        "example": "Penguins can't fly.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-1-7",
        "term": "Can it...?",
        "translation": "¿Puede (el animal)...?",
        "ipa": "/kæn ɪt/",
        "audioText": "Can it...?",
        "example": "Can it swim fast?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-1-b1",
        "prompt": "El jaguar puede correr muy rápido.",
        "answer": "The jaguar can run very fast",
        "tokens": [
          "The",
          "jaguar",
          "can",
          "run",
          "very",
          "fast",
          "cans",
          "runs"
        ],
        "hints": [
          "Usa can sin agregar s al verbo.",
          "Muy rápido es very fast."
        ]
      },
      {
        "id": "2-1-b2",
        "prompt": "Ese pájaro no puede volar.",
        "answer": "That bird can not fly",
        "tokens": [
          "That",
          "bird",
          "can",
          "not",
          "fly",
          "doesn't",
          "flies"
        ],
        "hints": [
          "Para habilidad usa can not.",
          "Volar es fly."
        ]
      },
      {
        "id": "2-1-b3",
        "prompt": "¿Pueden los delfines saltar alto?",
        "answer": "Can dolphins jump high",
        "tokens": [
          "Can",
          "dolphins",
          "jump",
          "high",
          "Do",
          "jumps"
        ],
        "hints": [
          "Empieza la pregunta con Can.",
          "Delfines es dolphins."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-1-e1",
        "audioText": "Monkeys can climb trees in the rainforest.",
        "correctAnswer": "Monkeys can climb trees in the rainforest.",
        "options": [
          "Monkeys can climb trees in the rainforest.",
          "Monkeys can't climb trees in the rainforest.",
          "Tigers can climb trees in the rainforest."
        ]
      },
      {
        "id": "2-1-e2",
        "audioText": "Can a camel survive in the desert?",
        "correctAnswer": "Can a camel survive in the desert?",
        "options": [
          "Can a camel survive in the desert?",
          "Can a snake survive in the desert?",
          "A camel can survive in the desert."
        ]
      },
      {
        "id": "2-1-e3",
        "audioText": "Penguins can't fly, but they can swim very fast.",
        "correctAnswer": "Penguins can't fly, but they can swim very fast.",
        "options": [
          "Penguins can't fly, but they can swim very fast.",
          "Penguins can fly, but they can't swim fast.",
          "Penguins can't fly, and they can't swim."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-2",
    "badgeName": "Room Architect",
    "badgeEmoji": "🛏️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-2-1",
        "term": "Gaming setup",
        "translation": "Computador o espacio para jugar",
        "ipa": "/ˈgeɪmɪŋ ˈsɛtˌʌp/",
        "audioText": "Gaming setup.",
        "example": "My gaming setup is amazing.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-2",
        "term": "Shelves",
        "translation": "Repisas",
        "ipa": "/ʃɛlvz/",
        "audioText": "Shelves.",
        "example": "I have books on my shelves.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-3",
        "term": "Next to",
        "translation": "Al lado de",
        "ipa": "/nɛkst tu/",
        "audioText": "Next to.",
        "example": "My bed is next to the window.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-4",
        "term": "Under",
        "translation": "Debajo de",
        "ipa": "/ˈʌndər/",
        "audioText": "Under.",
        "example": "The box is under the desk.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-2-5",
        "term": "There is",
        "translation": "Hay (singular)",
        "ipa": "/ðɛr ɪz/",
        "audioText": "There is.",
        "example": "There is a big bed in my room.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-2-6",
        "term": "There are",
        "translation": "Hay (plural)",
        "ipa": "/ðɛr ɑr/",
        "audioText": "There are.",
        "example": "There are two posters on the wall.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-2-7",
        "term": "Is there / Are there?",
        "translation": "¿Hay? (pregunta)",
        "ipa": "/ɪz ðɛr / ɑr ðɛr/",
        "audioText": "Is there? Are there?",
        "example": "Is there a TV in your room?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-2-b1",
        "prompt": "Hay un computador sobre el escritorio.",
        "answer": "There is a computer on the desk",
        "tokens": [
          "There",
          "is",
          "a",
          "computer",
          "on",
          "the",
          "desk",
          "are",
          "in"
        ],
        "hints": [
          "Para una cosa usa There is.",
          "Sobre una superficie es on."
        ]
      },
      {
        "id": "2-2-b2",
        "prompt": "No hay tres sillas en mi cuarto.",
        "answer": "There are not three chairs in my room",
        "tokens": [
          "There",
          "are",
          "not",
          "three",
          "chairs",
          "in",
          "my",
          "room",
          "is"
        ],
        "hints": [
          "Para plural usa There are.",
          "Para decir en usa in."
        ]
      },
      {
        "id": "2-2-b3",
        "prompt": "¿Hay un póster en la pared?",
        "answer": "Is there a poster on the wall",
        "tokens": [
          "Is",
          "there",
          "a",
          "poster",
          "on",
          "the",
          "wall",
          "Are",
          "in"
        ],
        "hints": [
          "Para preguntar empieza con Is there.",
          "En la pared es on the wall."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-2-e1",
        "audioText": "There is a nice gaming setup next to the bed.",
        "correctAnswer": "There is a nice gaming setup next to the bed.",
        "options": [
          "There is a nice gaming setup next to the bed.",
          "There are two gaming setups next to the bed.",
          "There is a nice gaming setup under the bed."
        ]
      },
      {
        "id": "2-2-e2",
        "audioText": "Are there any books on the shelves?",
        "correctAnswer": "Are there any books on the shelves?",
        "options": [
          "Are there any books on the shelves?",
          "Is there a book on the shelves?",
          "Are there any toys on the shelves?"
        ]
      },
      {
        "id": "2-2-e3",
        "audioText": "There aren't any posters in my new bedroom.",
        "correctAnswer": "There aren't any posters in my new bedroom.",
        "options": [
          "There aren't any posters in my new bedroom.",
          "There is a poster in my new bedroom.",
          "There aren't any windows in my new bedroom."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-3",
    "badgeName": "City Commuter",
    "badgeEmoji": "🚌",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-3-1",
        "term": "TransMilenio",
        "translation": "TransMilenio (Bus de tránsito rápido)",
        "ipa": "/trænzmɪˈlɛnioʊ/",
        "audioText": "TransMilenio.",
        "example": "I take TransMilenio to go to school.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-2",
        "term": "Bicycle",
        "translation": "Bicicleta",
        "ipa": "/ˈbaɪsɪkəl/",
        "audioText": "Bicycle.",
        "example": "Riding a bicycle is eco-friendly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-3",
        "term": "Traffic",
        "translation": "Tráfico",
        "ipa": "/ˈtræfɪk/",
        "audioText": "Traffic.",
        "example": "The traffic in Bogotá is crazy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-4",
        "term": "Bus stop",
        "translation": "Parada de bus",
        "ipa": "/bʌs stɑp/",
        "audioText": "Bus stop.",
        "example": "Wait for me at the bus stop.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-3-5",
        "term": "Take",
        "translation": "Tomar (un transporte)",
        "ipa": "/teɪk/",
        "audioText": "Take.",
        "example": "Take the bus at 7 AM.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-3-6",
        "term": "Get off",
        "translation": "Bajarse (de un transporte)",
        "ipa": "/gɛt ɔf/",
        "audioText": "Get off.",
        "example": "Get off at the next station.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-3-7",
        "term": "How do you get to...?",
        "translation": "¿Cómo llegas a...?",
        "ipa": "/haʊ du ju gɛt tu/",
        "audioText": "How do you get to...?",
        "example": "How do you get to the mall?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-3-b1",
        "prompt": "Yo tomo TransMilenio para ir al centro.",
        "answer": "I take TransMilenio to go downtown",
        "tokens": [
          "I",
          "take",
          "TransMilenio",
          "to",
          "go",
          "downtown",
          "takes",
          "gets"
        ],
        "hints": [
          "El verbo es take.",
          "Para ir al centro se dice to go downtown."
        ]
      },
      {
        "id": "2-3-b2",
        "prompt": "Ella no viaja en bicicleta por el tráfico.",
        "answer": "She does not ride a bike because of the traffic",
        "tokens": [
          "She",
          "does",
          "not",
          "ride",
          "a",
          "bike",
          "because",
          "of",
          "the",
          "traffic",
          "rides"
        ],
        "hints": [
          "En tercera persona usa does not ride.",
          "Porque (de razón) se dice because of."
        ]
      },
      {
        "id": "2-3-b3",
        "prompt": "¿Cómo llegas a tu colegio?",
        "answer": "How do you get to your school",
        "tokens": [
          "How",
          "do",
          "you",
          "get",
          "to",
          "your",
          "school",
          "take",
          "does"
        ],
        "hints": [
          "Usa How do you.",
          "Llegar a se dice get to."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-3-e1",
        "audioText": "I always take the bus to go to work in the morning.",
        "correctAnswer": "I always take the bus to go to work in the morning.",
        "options": [
          "I always take the bus to go to work in the morning.",
          "I always ride my bike to go to work in the morning.",
          "She always takes the bus to go to work."
        ]
      },
      {
        "id": "2-3-e2",
        "audioText": "How do you get to the new shopping mall?",
        "correctAnswer": "How do you get to the new shopping mall?",
        "options": [
          "How do you get to the new shopping mall?",
          "How do you get to the park?",
          "When do you get to the shopping mall?"
        ]
      },
      {
        "id": "2-3-e3",
        "audioText": "You need to get off at the next station.",
        "correctAnswer": "You need to get off at the next station.",
        "options": [
          "You need to get off at the next station.",
          "You need to take the bus at the next station.",
          "He needs to get off at the next station."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-4",
    "badgeName": "Future Professional",
    "badgeEmoji": "💼",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-4-1",
        "term": "Software developer",
        "translation": "Desarrollador(a) de software",
        "ipa": "/ˈsɔftwɛr dɪˈvɛləpər/",
        "audioText": "Software developer.",
        "example": "A software developer writes code.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-2",
        "term": "Content creator",
        "translation": "Creador(a) de contenido",
        "ipa": "/ˈkɑntɛnt kriˈeɪtər/",
        "audioText": "Content creator.",
        "example": "He is a famous YouTube content creator.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-3",
        "term": "Doctor",
        "translation": "Doctor(a)",
        "ipa": "/ˈdɑktər/",
        "audioText": "Doctor.",
        "example": "Doctors work in hospitals.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-4",
        "term": "Architect",
        "translation": "Arquitecto(a)",
        "ipa": "/ˈɑrkəˌtɛkt/",
        "audioText": "Architect.",
        "example": "The architect designed this building.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-4-5",
        "term": "Want to be",
        "translation": "Querer ser",
        "ipa": "/wɑnt tu bi/",
        "audioText": "Want to be.",
        "example": "I want to be an engineer.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-4-6",
        "term": "Work (verb)",
        "translation": "Trabajar",
        "ipa": "/wɜrk/",
        "audioText": "Work.",
        "example": "They work at a tech company.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-4-7",
        "term": "What do you want to be?",
        "translation": "¿Qué quieres ser?",
        "ipa": "/wʌt du ju wɑnt tu bi/",
        "audioText": "What do you want to be?",
        "example": "What do you want to be in the future?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-4-b1",
        "prompt": "Yo quiero ser un creador de contenido.",
        "answer": "I want to be a content creator",
        "tokens": [
          "I",
          "want",
          "to",
          "be",
          "a",
          "content",
          "creator",
          "wants",
          "am"
        ],
        "hints": [
          "Usa want to be.",
          "Acuérdate del artículo a."
        ]
      },
      {
        "id": "2-4-b2",
        "prompt": "Ella no trabaja en un hospital.",
        "answer": "She does not work in a hospital",
        "tokens": [
          "She",
          "does",
          "not",
          "work",
          "in",
          "a",
          "hospital",
          "works",
          "don't"
        ],
        "hints": [
          "Para ella usa does not.",
          "El verbo va sin s."
        ]
      },
      {
        "id": "2-4-b3",
        "prompt": "¿Qué quieres ser tú?",
        "answer": "What do you want to be",
        "tokens": [
          "What",
          "do",
          "you",
          "want",
          "to",
          "be",
          "are",
          "does"
        ],
        "hints": [
          "Empieza con What do you.",
          "Termina con want to be."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-4-e1",
        "audioText": "I want to be a software developer because I love computers.",
        "correctAnswer": "I want to be a software developer because I love computers.",
        "options": [
          "I want to be a software developer because I love computers.",
          "He wants to be a software developer because he loves computers.",
          "I want to be an architect because I love drawing."
        ]
      },
      {
        "id": "2-4-e2",
        "audioText": "My sister works at a modern hospital as a doctor.",
        "correctAnswer": "My sister works at a modern hospital as a doctor.",
        "options": [
          "My sister works at a modern hospital as a doctor.",
          "My brother works at a modern hospital as a doctor.",
          "My sister works at a school as a teacher."
        ]
      },
      {
        "id": "2-4-e3",
        "audioText": "What do you want to be when you grow up?",
        "correctAnswer": "What do you want to be when you grow up?",
        "options": [
          "What do you want to be when you grow up?",
          "Where do you want to work when you grow up?",
          "What does he want to be when he grows up?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-5",
    "badgeName": "Talent Show",
    "badgeEmoji": "⭐",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-5-1",
        "term": "Play an instrument",
        "translation": "Tocar un instrumento",
        "ipa": "/pleɪ ən ˈɪnstrəmənt/",
        "audioText": "Play an instrument.",
        "example": "I can play the guitar.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-2",
        "term": "Edit video",
        "translation": "Editar video",
        "ipa": "/ˈɛdɪt ˈvɪdioʊ/",
        "audioText": "Edit video.",
        "example": "He knows how to edit video for YouTube.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-3",
        "term": "Skateboard",
        "translation": "Montar patineta",
        "ipa": "/ˈskeɪtˌbɔrd/",
        "audioText": "Skateboard.",
        "example": "Let's go skateboard in the park.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-4",
        "term": "Speak languages",
        "translation": "Hablar idiomas",
        "ipa": "/spik ˈlæŋgwɪʤɪz/",
        "audioText": "Speak languages.",
        "example": "She can speak three languages.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-5-5",
        "term": "Know how to",
        "translation": "Saber cómo",
        "ipa": "/noʊ haʊ tu/",
        "audioText": "Know how to.",
        "example": "I know how to code in Python.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-5-6",
        "term": "Good at",
        "translation": "Bueno en",
        "ipa": "/gʊd æt/",
        "audioText": "Good at.",
        "example": "He is good at math.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-5-7",
        "term": "Can you...?",
        "translation": "¿Puedes tú...?",
        "ipa": "/kæn ju/",
        "audioText": "Can you...?",
        "example": "Can you edit this video for me?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-5-b1",
        "prompt": "Yo sé cómo tocar la guitarra.",
        "answer": "I know how to play the guitar",
        "tokens": [
          "I",
          "know",
          "how",
          "to",
          "play",
          "the",
          "guitar",
          "can",
          "knows"
        ],
        "hints": [
          "Saber cómo hacer algo se dice know how to.",
          "Tocar un instrumento es play."
        ]
      },
      {
        "id": "2-5-b2",
        "prompt": "Él no es bueno editando videos.",
        "answer": "He is not good at editing videos",
        "tokens": [
          "He",
          "is",
          "not",
          "good",
          "at",
          "editing",
          "videos",
          "does",
          "edit"
        ],
        "hints": [
          "Después de good at, el verbo lleva ing.",
          "Usa is not good at."
        ]
      },
      {
        "id": "2-5-b3",
        "prompt": "¿Puedes hablar tres idiomas?",
        "answer": "Can you speak three languages",
        "tokens": [
          "Can",
          "you",
          "speak",
          "three",
          "languages",
          "Do",
          "speaks"
        ],
        "hints": [
          "Para habilidad empieza con Can you.",
          "Hablar un idioma es speak."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-5-e1",
        "audioText": "She is really good at playing the piano.",
        "correctAnswer": "She is really good at playing the piano.",
        "options": [
          "She is really good at playing the piano.",
          "He is really good at playing the piano.",
          "She is really good at playing the guitar."
        ]
      },
      {
        "id": "2-5-e2",
        "audioText": "Do you know how to edit videos for TikTok?",
        "correctAnswer": "Do you know how to edit videos for TikTok?",
        "options": [
          "Do you know how to edit videos for TikTok?",
          "Can you edit videos for TikTok?",
          "Does he know how to edit videos for TikTok?"
        ]
      },
      {
        "id": "2-5-e3",
        "audioText": "I can't skateboard, but I want to learn.",
        "correctAnswer": "I can't skateboard, but I want to learn.",
        "options": [
          "I can't skateboard, but I want to learn.",
          "I can skateboard, and I want to teach.",
          "He can't skateboard, but he wants to learn."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-6",
    "badgeName": "Rule Master",
    "badgeEmoji": "📜",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-6-1",
        "term": "Rules",
        "translation": "Reglas",
        "ipa": "/rulz/",
        "audioText": "Rules.",
        "example": "We must follow the school rules.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-2",
        "term": "High school",
        "translation": "Colegio (bachillerato)",
        "ipa": "/haɪ skul/",
        "audioText": "High school.",
        "example": "High school starts at 7 AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-3",
        "term": "Uniform",
        "translation": "Uniforme",
        "ipa": "/ˈjunəˌfɔrm/",
        "audioText": "Uniform.",
        "example": "You have to wear a uniform.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-4",
        "term": "Laboratory",
        "translation": "Laboratorio",
        "ipa": "/ˈlæbrəˌtɔri/",
        "audioText": "Laboratory.",
        "example": "Don't run in the laboratory.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-6-5",
        "term": "Must",
        "translation": "Deber (obligación fuerte)",
        "ipa": "/mʌst/",
        "audioText": "Must.",
        "example": "You must be quiet in the library.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-6-6",
        "term": "Have to",
        "translation": "Tener que (necesidad externa)",
        "ipa": "/hæv tu/",
        "audioText": "Have to.",
        "example": "We have to study for the test.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-6-7",
        "term": "Should",
        "translation": "Debería (recomendación)",
        "ipa": "/ʃʊd/",
        "audioText": "Should.",
        "example": "You should listen to the teacher.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-6-b1",
        "prompt": "Debes llevar tu uniforme.",
        "answer": "You must wear your uniform",
        "tokens": [
          "You",
          "must",
          "wear",
          "your",
          "uniform",
          "should",
          "have"
        ],
        "hints": [
          "Usa must para una regla estricta.",
          "Llevar puesto es wear."
        ]
      },
      {
        "id": "2-6-b2",
        "prompt": "No tienes que venir mañana.",
        "answer": "You do not have to come tomorrow",
        "tokens": [
          "You",
          "do",
          "not",
          "have",
          "to",
          "come",
          "tomorrow",
          "must",
          "has"
        ],
        "hints": [
          "No tener la obligación es do not have to.",
          "Venir es come."
        ]
      },
      {
        "id": "2-6-b3",
        "prompt": "¿Debería estudiar para el examen de inglés?",
        "answer": "Should I study for the English test",
        "tokens": [
          "Should",
          "I",
          "study",
          "for",
          "the",
          "English",
          "test",
          "Must",
          "Have"
        ],
        "hints": [
          "Para pedir consejo empieza con Should.",
          "Examen de inglés es English test."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-6-e1",
        "audioText": "Students must not use their phones during the class.",
        "correctAnswer": "Students must not use their phones during the class.",
        "options": [
          "Students must not use their phones during the class.",
          "Students should not use their phones during the class.",
          "Teachers must not use their phones during the class."
        ]
      },
      {
        "id": "2-6-e2",
        "audioText": "You have to finish your project by Friday.",
        "correctAnswer": "You have to finish your project by Friday.",
        "options": [
          "You have to finish your project by Friday.",
          "You should finish your project by Friday.",
          "He has to finish his project by Friday."
        ]
      },
      {
        "id": "2-6-e3",
        "audioText": "Should I wear a jacket to the laboratory?",
        "correctAnswer": "Should I wear a jacket to the laboratory?",
        "options": [
          "Should I wear a jacket to the laboratory?",
          "Must I wear a jacket to the laboratory?",
          "Do I have to wear a jacket to the laboratory?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-7",
    "badgeName": "Fitness Guru",
    "badgeEmoji": "💪",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-7-1",
        "term": "Gym",
        "translation": "Gimnasio",
        "ipa": "/ʤɪm/",
        "audioText": "Gym.",
        "example": "I go to the gym on Mondays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-2",
        "term": "Jogging",
        "translation": "Trotar",
        "ipa": "/ˈʤɑgɪŋ/",
        "audioText": "Jogging.",
        "example": "Jogging in the park is relaxing.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-3",
        "term": "Cycling",
        "translation": "Ciclismo",
        "ipa": "/ˈsaɪklɪŋ/",
        "audioText": "Cycling.",
        "example": "Cycling is a great workout.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-4",
        "term": "Healthy",
        "translation": "Saludable",
        "ipa": "/ˈhɛlθi/",
        "audioText": "Healthy.",
        "example": "Eating vegetables is very healthy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-7-5",
        "term": "Need to",
        "translation": "Necesitar (hacer algo)",
        "ipa": "/nid tu/",
        "audioText": "Need to.",
        "example": "I need to drink more water.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-7-6",
        "term": "Often",
        "translation": "A menudo",
        "ipa": "/ˈɔfən/",
        "audioText": "Often.",
        "example": "How often do you exercise?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-7-7",
        "term": "Never",
        "translation": "Nunca",
        "ipa": "/ˈnɛvər/",
        "audioText": "Never.",
        "example": "He never eats fast food.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-7-b1",
        "prompt": "Necesito ir al gimnasio más a menudo.",
        "answer": "I need to go to the gym more often",
        "tokens": [
          "I",
          "need",
          "to",
          "go",
          "to",
          "the",
          "gym",
          "more",
          "often",
          "never"
        ],
        "hints": [
          "Usa need to para necesidad.",
          "Más a menudo es more often."
        ]
      },
      {
        "id": "2-7-b2",
        "prompt": "Ella nunca hace ciclismo en la ciudad.",
        "answer": "She never goes cycling in the city",
        "tokens": [
          "She",
          "never",
          "goes",
          "cycling",
          "in",
          "the",
          "city",
          "often",
          "go"
        ],
        "hints": [
          "Nunca es never.",
          "Como es ella, usa goes."
        ]
      },
      {
        "id": "2-7-b3",
        "prompt": "¿Qué tan a menudo trotas en la mañana?",
        "answer": "How often do you go jogging in the morning",
        "tokens": [
          "How",
          "often",
          "do",
          "you",
          "go",
          "jogging",
          "in",
          "the",
          "morning",
          "does"
        ],
        "hints": [
          "Qué tan a menudo es How often.",
          "Trotar es go jogging."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-7-e1",
        "audioText": "I need to eat more healthy food to feel better.",
        "correctAnswer": "I need to eat more healthy food to feel better.",
        "options": [
          "I need to eat more healthy food to feel better.",
          "I should eat more healthy food to feel better.",
          "He needs to eat more healthy food to feel better."
        ]
      },
      {
        "id": "2-7-e2",
        "audioText": "How often do you go to the gym?",
        "correctAnswer": "How often do you go to the gym?",
        "options": [
          "How often do you go to the gym?",
          "When do you go to the gym?",
          "How often does she go to the gym?"
        ]
      },
      {
        "id": "2-7-e3",
        "audioText": "He never plays football on Sundays.",
        "correctAnswer": "He never plays football on Sundays.",
        "options": [
          "He never plays football on Sundays.",
          "He often plays football on Sundays.",
          "I never play football on Sundays."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-8",
    "badgeName": "Globetrotter",
    "badgeEmoji": "✈️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-8-1",
        "term": "Camping",
        "translation": "Acampar",
        "ipa": "/ˈkæmpɪŋ/",
        "audioText": "Camping.",
        "example": "We love camping near the lake.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-2",
        "term": "Hiking",
        "translation": "Hacer senderismo / caminar por la montaña",
        "ipa": "/ˈhaɪkɪŋ/",
        "audioText": "Hiking.",
        "example": "Hiking in the mountains is fun.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-3",
        "term": "Tickets",
        "translation": "Tiquetes / Boletos",
        "ipa": "/ˈtɪkɪts/",
        "audioText": "Tickets.",
        "example": "Did you buy the plane tickets?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-4",
        "term": "Trip",
        "translation": "Viaje",
        "ipa": "/trɪp/",
        "audioText": "Trip.",
        "example": "Our trip to Santa Marta was great.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-8-5",
        "term": "Going to",
        "translation": "Voy a (planes futuros)",
        "ipa": "/ˈgoʊɪŋ tu/",
        "audioText": "Going to.",
        "example": "I am going to visit Medellín.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-8-6",
        "term": "Will",
        "translation": "Haré (predicción o decisión rápida)",
        "ipa": "/wɪl/",
        "audioText": "Will.",
        "example": "I think it will be sunny tomorrow.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-8-7",
        "term": "Are you going to...?",
        "translation": "¿Vas a...?",
        "ipa": "/ɑr ju ˈgoʊɪŋ tu/",
        "audioText": "Are you going to...?",
        "example": "Are you going to travel next month?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-8-b1",
        "prompt": "Nosotros vamos a viajar a Medellín.",
        "answer": "We are going to travel to Medellin",
        "tokens": [
          "We",
          "are",
          "going",
          "to",
          "travel",
          "to",
          "Medellin",
          "will",
          "go"
        ],
        "hints": [
          "Para un plan seguro usa are going to.",
          "Viajar es travel."
        ]
      },
      {
        "id": "2-8-b2",
        "prompt": "Yo no voy a comprar los tiquetes hoy.",
        "answer": "I am not going to buy the tickets today",
        "tokens": [
          "I",
          "am",
          "not",
          "going",
          "to",
          "buy",
          "the",
          "tickets",
          "today",
          "will"
        ],
        "hints": [
          "Plan negativo es am not going to.",
          "Comprar es buy."
        ]
      },
      {
        "id": "2-8-b3",
        "prompt": "¿Vas a ir a acampar con nosotros?",
        "answer": "Are you going to go camping with us",
        "tokens": [
          "Are",
          "you",
          "going",
          "to",
          "go",
          "camping",
          "with",
          "us",
          "Do"
        ],
        "hints": [
          "Empieza con Are you going to.",
          "Ir a acampar es go camping."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-8-e1",
        "audioText": "I am going to travel to Santa Marta next week.",
        "correctAnswer": "I am going to travel to Santa Marta next week.",
        "options": [
          "I am going to travel to Santa Marta next week.",
          "I will travel to Santa Marta next week.",
          "She is going to travel to Santa Marta next week."
        ]
      },
      {
        "id": "2-8-e2",
        "audioText": "We think it will rain during the hiking trip.",
        "correctAnswer": "We think it will rain during the hiking trip.",
        "options": [
          "We think it will rain during the hiking trip.",
          "We are going to rain during the hiking trip.",
          "They think it will rain during the hiking trip."
        ]
      },
      {
        "id": "2-8-e3",
        "audioText": "Are you going to buy the plane tickets online?",
        "correctAnswer": "Are you going to buy the plane tickets online?",
        "options": [
          "Are you going to buy the plane tickets online?",
          "Did you buy the plane tickets online?",
          "Is he going to buy the plane tickets online?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-9",
    "badgeName": "Tech Wizard",
    "badgeEmoji": "💻",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-9-1",
        "term": "Streaming",
        "translation": "Transmitir en vivo / ver en plataformas",
        "ipa": "/ˈstrimɪŋ/",
        "audioText": "Streaming.",
        "example": "I am streaming a movie right now.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-2",
        "term": "Cybersecurity",
        "translation": "Ciberseguridad",
        "ipa": "/ˌsaɪbərsɪˈkjʊrɪti/",
        "audioText": "Cybersecurity.",
        "example": "Cybersecurity is important to protect data.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-3",
        "term": "Lag",
        "translation": "Lag / Retraso en conexión",
        "ipa": "/læg/",
        "audioText": "Lag.",
        "example": "I can't play because of the lag.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-4",
        "term": "Update",
        "translation": "Actualización / Actualizar",
        "ipa": "/ˈʌpˌdeɪt/",
        "audioText": "Update.",
        "example": "My phone needs an update.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-5",
        "term": "Download",
        "translation": "Descargar",
        "ipa": "/ˈdaʊnˌloʊd/",
        "audioText": "Download.",
        "example": "Click here to download the game.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-6",
        "term": "Upload",
        "translation": "Subir (archivos a internet)",
        "ipa": "/ˈʌpˌloʊd/",
        "audioText": "Upload.",
        "example": "I need to upload my video.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-9-7",
        "term": "Password",
        "translation": "Contraseña",
        "ipa": "/ˈpæsˌwɜrd/",
        "audioText": "Password.",
        "example": "Never share your password.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-9-b1",
        "prompt": "Necesito actualizar mi computador.",
        "answer": "I need to update my computer",
        "tokens": [
          "I",
          "need",
          "to",
          "update",
          "my",
          "computer",
          "upload",
          "download"
        ],
        "hints": [
          "Actualizar es update.",
          "Necesito es need to."
        ]
      },
      {
        "id": "2-9-b2",
        "prompt": "La conexión a internet no está rápida hoy.",
        "answer": "The internet connection is not fast today",
        "tokens": [
          "The",
          "internet",
          "connection",
          "is",
          "not",
          "fast",
          "today",
          "are",
          "lag"
        ],
        "hints": [
          "Conexión a internet es internet connection.",
          "No está rápida es is not fast."
        ]
      },
      {
        "id": "2-9-b3",
        "prompt": "¿Descargaste la nueva aplicación?",
        "answer": "Did you download the new app",
        "tokens": [
          "Did",
          "you",
          "download",
          "the",
          "new",
          "app",
          "Do",
          "upload"
        ],
        "hints": [
          "Para preguntas en pasado usa Did.",
          "Descargar es download."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-9-e1",
        "audioText": "My game has too much lag because of the internet.",
        "correctAnswer": "My game has too much lag because of the internet.",
        "options": [
          "My game has too much lag because of the internet.",
          "My stream has too much lag because of the internet.",
          "His game has too much lag because of the internet."
        ]
      },
      {
        "id": "2-9-e2",
        "audioText": "You should always use a strong password for cybersecurity.",
        "correctAnswer": "You should always use a strong password for cybersecurity.",
        "options": [
          "You should always use a strong password for cybersecurity.",
          "You must always use a strong password for cybersecurity.",
          "They should always use a strong password for cybersecurity."
        ]
      },
      {
        "id": "2-9-e3",
        "audioText": "Did you upload the video to your channel?",
        "correctAnswer": "Did you upload the video to your channel?",
        "options": [
          "Did you upload the video to your channel?",
          "Did you download the video to your channel?",
          "Did she upload the video to her channel?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-2-10",
    "badgeName": "Event Planner",
    "badgeEmoji": "🎤",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "2-10-1",
        "term": "Presentation",
        "translation": "Presentación",
        "ipa": "/ˌprɛzənˈteɪʃən/",
        "audioText": "Presentation.",
        "example": "My presentation is about technology.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-2",
        "term": "Event",
        "translation": "Evento",
        "ipa": "/ɪˈvɛnt/",
        "audioText": "Event.",
        "example": "The music event is next Saturday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-3",
        "term": "Plan",
        "translation": "Planear / Plan",
        "ipa": "/plæn/",
        "audioText": "Plan.",
        "example": "Let's plan the end of year party.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-4",
        "term": "Invite",
        "translation": "Invitar",
        "ipa": "/ɪnˈvaɪt/",
        "audioText": "Invite.",
        "example": "I want to invite all my friends.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-5",
        "term": "Welcome",
        "translation": "Bienvenido / Dar la bienvenida",
        "ipa": "/ˈwɛlkəm/",
        "audioText": "Welcome.",
        "example": "Welcome to our project presentation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "2-10-6",
        "term": "First of all",
        "translation": "Primero que todo",
        "ipa": "/fɜrst ʌv ɔl/",
        "audioText": "First of all.",
        "example": "First of all, thank you for coming.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "2-10-7",
        "term": "In conclusion",
        "translation": "En conclusión",
        "ipa": "/ɪn kənˈkluʒən/",
        "audioText": "In conclusion.",
        "example": "In conclusion, it was a great year.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "2-10-b1",
        "prompt": "Primero que todo, bienvenidos a nuestra presentación.",
        "answer": "First of all welcome to our presentation",
        "tokens": [
          "First",
          "of",
          "all",
          "welcome",
          "to",
          "our",
          "presentation",
          "invite",
          "event"
        ],
        "hints": [
          "Empieza con First of all.",
          "Bienvenidos a es welcome to."
        ]
      },
      {
        "id": "2-10-b2",
        "prompt": "Nosotros no planeamos este evento solos.",
        "answer": "We did not plan this event alone",
        "tokens": [
          "We",
          "did",
          "not",
          "plan",
          "this",
          "event",
          "alone",
          "do",
          "invite"
        ],
        "hints": [
          "En pasado negativo usa did not.",
          "Solos es alone."
        ]
      },
      {
        "id": "2-10-b3",
        "prompt": "¿A quién vas a invitar al viaje?",
        "answer": "Who are you going to invite to the trip",
        "tokens": [
          "Who",
          "are",
          "you",
          "going",
          "to",
          "invite",
          "to",
          "the",
          "trip",
          "will"
        ],
        "hints": [
          "Empieza con Who para preguntar A quién.",
          "Usa are you going to invite."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "2-10-e1",
        "audioText": "First of all, welcome to our final English presentation.",
        "correctAnswer": "First of all, welcome to our final English presentation.",
        "options": [
          "First of all, welcome to our final English presentation.",
          "First of all, welcome to our first English presentation.",
          "In conclusion, welcome to our final English presentation."
        ]
      },
      {
        "id": "2-10-e2",
        "audioText": "We need to plan a big event for the graduation.",
        "correctAnswer": "We need to plan a big event for the graduation.",
        "options": [
          "We need to plan a big event for the graduation.",
          "We need to plan a small event for the graduation.",
          "They need to plan a big event for the graduation."
        ]
      },
      {
        "id": "2-10-e3",
        "audioText": "Who are you going to invite to the party?",
        "correctAnswer": "Who are you going to invite to the party?",
        "options": [
          "Who are you going to invite to the party?",
          "Are you going to invite him to the party?",
          "Who did you invite to the party?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-1",
    "badgeName": "Time Master",
    "badgeEmoji": "⏰",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-1-1",
        "term": "Wake up",
        "translation": "Despertarse",
        "ipa": "/weɪk ʌp/",
        "audioText": "Wake up.",
        "example": "I wake up at six thirty AM.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-2",
        "term": "Take a bus",
        "translation": "Tomar un bus",
        "ipa": "/teɪk ə bʌs/",
        "audioText": "Take a bus.",
        "example": "I take a bus to school every day.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-3",
        "term": "Have lunch",
        "translation": "Almorzar",
        "ipa": "/hæv lʌntʃ/",
        "audioText": "Have lunch.",
        "example": "We have lunch at one o'clock.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-4",
        "term": "Half past",
        "translation": "Y media",
        "ipa": "/hæf pæst/",
        "audioText": "Half past.",
        "example": "It is half past seven.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-1-5",
        "term": "Always",
        "translation": "Siempre",
        "ipa": "/ˈɔlweɪz/",
        "audioText": "Always.",
        "example": "I always do my homework.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-1-6",
        "term": "Sometimes",
        "translation": "A veces",
        "ipa": "/ˈsʌmˌtaɪmz/",
        "audioText": "Sometimes.",
        "example": "Sometimes I play video games.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-1-7",
        "term": "Quarter to",
        "translation": "Un cuarto para",
        "ipa": "/ˈkwɔrtər tu/",
        "audioText": "Quarter to.",
        "example": "It is a quarter to eight.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-1-b1",
        "prompt": "Yo siempre me despierto a las seis y media.",
        "answer": "I always wake up at half past six",
        "tokens": [
          "I",
          "always",
          "wake",
          "up",
          "at",
          "half",
          "past",
          "six",
          "sometimes",
          "to"
        ],
        "hints": [
          "A las seis y media se dice at half past six."
        ]
      },
      {
        "id": "3-1-b2",
        "prompt": "Ella no almuerza en el colegio.",
        "answer": "She does not have lunch at school",
        "tokens": [
          "She",
          "does",
          "not",
          "have",
          "lunch",
          "at",
          "school",
          "has",
          "do"
        ],
        "hints": [
          "Con She usamos does not."
        ]
      },
      {
        "id": "3-1-b3",
        "prompt": "¿A qué hora tomas el bus?",
        "answer": "What time do you take the bus",
        "tokens": [
          "What",
          "time",
          "do",
          "you",
          "take",
          "the",
          "bus",
          "does",
          "taking"
        ],
        "hints": [
          "A qué hora es What time."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-1-e1",
        "audioText": "I always wake up at half past six.",
        "correctAnswer": "I always wake up at half past six.",
        "options": [
          "I always wake up at half past six.",
          "I sometimes wake up at half past six.",
          "I always wake up at quarter past six."
        ]
      },
      {
        "id": "3-1-e2",
        "audioText": "She does not have lunch at school.",
        "correctAnswer": "She does not have lunch at school.",
        "options": [
          "She does not have lunch at school.",
          "He does not have lunch at school.",
          "She does not have lunch at home."
        ]
      },
      {
        "id": "3-1-e3",
        "audioText": "What time do you take the bus?",
        "correctAnswer": "What time do you take the bus?",
        "options": [
          "What time do you take the bus?",
          "What time do they take the bus?",
          "Where do you take the bus?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-2",
    "badgeName": "Foodie Explorer",
    "badgeEmoji": "🍔",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-2-1",
        "term": "Empanada",
        "translation": "Empanada",
        "ipa": "/ˌɛmpəˈnɑdə/",
        "audioText": "Empanada.",
        "example": "I love Colombian empanadas.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-2",
        "term": "Order",
        "translation": "Pedir (comida)",
        "ipa": "/ˈɔrdər/",
        "audioText": "Order.",
        "example": "Are you ready to order?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-2-3",
        "term": "Would like",
        "translation": "Gustaría",
        "ipa": "/wʊd laɪk/",
        "audioText": "Would like.",
        "example": "I would like a burger, please.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-2-4",
        "term": "Can I have...?",
        "translation": "¿Me das...?",
        "ipa": "/kæn aɪ hæv/",
        "audioText": "Can I have...?",
        "example": "Can I have some water?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-2-5",
        "term": "Some",
        "translation": "Algo de / Unos",
        "ipa": "/sʌm/",
        "audioText": "Some.",
        "example": "Can I have some cheese?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-2-6",
        "term": "Any",
        "translation": "Nada de / Algún",
        "ipa": "/ˈɛni/",
        "audioText": "Any.",
        "example": "We don't have any juice.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-2-7",
        "term": "Delicious",
        "translation": "Delicioso",
        "ipa": "/dɪˈlɪʃəs/",
        "audioText": "Delicious.",
        "example": "This food is delicious!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-2-b1",
        "prompt": "Me gustaría una empanada y algo de jugo.",
        "answer": "I would like an empanada and some juice",
        "tokens": [
          "I",
          "would",
          "like",
          "an",
          "empanada",
          "and",
          "some",
          "juice",
          "any",
          "a"
        ],
        "hints": [
          "Me gustaría es I would like."
        ]
      },
      {
        "id": "3-2-b2",
        "prompt": "Nosotros no tenemos nada de queso.",
        "answer": "We do not have any cheese",
        "tokens": [
          "We",
          "do",
          "not",
          "have",
          "any",
          "cheese",
          "some",
          "has"
        ],
        "hints": [
          "En oraciones negativas usa any."
        ]
      },
      {
        "id": "3-2-b3",
        "prompt": "¿Puedo pedir algo de agua por favor?",
        "answer": "Can I have some water please",
        "tokens": [
          "Can",
          "I",
          "have",
          "some",
          "water",
          "please",
          "any",
          "has"
        ],
        "hints": [
          "Empieza con Can I have."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-2-e1",
        "audioText": "I would like an empanada, please.",
        "correctAnswer": "I would like an empanada, please.",
        "options": [
          "I would like an empanada, please.",
          "I would like a pizza, please.",
          "He would like an empanada, please."
        ]
      },
      {
        "id": "3-2-e2",
        "audioText": "We don't have any juice left.",
        "correctAnswer": "We don't have any juice left.",
        "options": [
          "We don't have any juice left.",
          "We don't have some juice left.",
          "They don't have any juice left."
        ]
      },
      {
        "id": "3-2-e3",
        "audioText": "Can I have some water?",
        "correctAnswer": "Can I have some water?",
        "options": [
          "Can I have some water?",
          "Can you have some water?",
          "Can I have any water?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-3",
    "badgeName": "Streetwear Stylist",
    "badgeEmoji": "👟",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-3-1",
        "term": "Sneakers",
        "translation": "Tenis",
        "ipa": "/ˈsnikərz/",
        "audioText": "Sneakers.",
        "example": "Those sneakers are cool.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-2",
        "term": "Hoodie",
        "translation": "Buzo con capota",
        "ipa": "/ˈhʊdi/",
        "audioText": "Hoodie.",
        "example": "I need a new black hoodie.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-3",
        "term": "Try on",
        "translation": "Medirse (ropa)",
        "ipa": "/traɪ ɑn/",
        "audioText": "Try on.",
        "example": "Can I try this on?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-4",
        "term": "Size",
        "translation": "Talla",
        "ipa": "/saɪz/",
        "audioText": "Size.",
        "example": "Do you have this in size medium?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-5",
        "term": "How much is...?",
        "translation": "¿Cuánto cuesta...?",
        "ipa": "/haʊ mʌtʃ ɪz/",
        "audioText": "How much is...?",
        "example": "How much is this hoodie?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-3-6",
        "term": "Pay",
        "translation": "Pagar",
        "ipa": "/peɪ/",
        "audioText": "Pay.",
        "example": "I want to pay with cash.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-3-7",
        "term": "Cash or card",
        "translation": "Efectivo o tarjeta",
        "ipa": "/kæʃ ɔr kɑrd/",
        "audioText": "Cash or card.",
        "example": "Will you pay by cash or card?",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-3-b1",
        "prompt": "Yo quiero medirme este buzo.",
        "answer": "I want to try on this hoodie",
        "tokens": [
          "I",
          "want",
          "to",
          "try",
          "on",
          "this",
          "hoodie",
          "in",
          "trying"
        ],
        "hints": [
          "Medirse es try on."
        ]
      },
      {
        "id": "3-3-b2",
        "prompt": "Ellos no tienen talla grande.",
        "answer": "They do not have size large",
        "tokens": [
          "They",
          "do",
          "not",
          "have",
          "size",
          "large",
          "does",
          "big"
        ],
        "hints": [
          "Talla grande es size large."
        ]
      },
      {
        "id": "3-3-b3",
        "prompt": "¿Cuánto cuestan esos tenis?",
        "answer": "How much are those sneakers",
        "tokens": [
          "How",
          "much",
          "are",
          "those",
          "sneakers",
          "is",
          "this"
        ],
        "hints": [
          "Como son plural, usa are."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-3-e1",
        "audioText": "Can I try on this hoodie?",
        "correctAnswer": "Can I try on this hoodie?",
        "options": [
          "Can I try on this hoodie?",
          "Can I try on these sneakers?",
          "Can you try on this hoodie?"
        ]
      },
      {
        "id": "3-3-e2",
        "audioText": "How much are those sneakers?",
        "correctAnswer": "How much are those sneakers?",
        "options": [
          "How much are those sneakers?",
          "How much is that sneaker?",
          "How much are these sneakers?"
        ]
      },
      {
        "id": "3-3-e3",
        "audioText": "I will pay with cash.",
        "correctAnswer": "I will pay with cash.",
        "options": [
          "I will pay with cash.",
          "I will pay with card.",
          "He will pay with cash."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-4",
    "badgeName": "Weather Watcher",
    "badgeEmoji": "🌦️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-4-1",
        "term": "Sunny",
        "translation": "Soleado",
        "ipa": "/ˈsʌni/",
        "audioText": "Sunny.",
        "example": "It is very sunny today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-2",
        "term": "Raining",
        "translation": "Lloviendo",
        "ipa": "/ˈreɪnɪŋ/",
        "audioText": "Raining.",
        "example": "It is raining in Bogotá.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-3",
        "term": "Chilly",
        "translation": "Haciendo frío",
        "ipa": "/ˈtʃɪli/",
        "audioText": "Chilly.",
        "example": "It gets chilly at night.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-4",
        "term": "Winter",
        "translation": "Invierno",
        "ipa": "/ˈwɪntər/",
        "audioText": "Winter.",
        "example": "I love snowboarding in winter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-5",
        "term": "Summer",
        "translation": "Verano",
        "ipa": "/ˈsʌmər/",
        "audioText": "Summer.",
        "example": "We go to the beach in summer.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-6",
        "term": "Weather",
        "translation": "Clima",
        "ipa": "/ˈwɛðər/",
        "audioText": "Weather.",
        "example": "What is the weather like?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-4-7",
        "term": "Like (prep)",
        "translation": "Como (descripción)",
        "ipa": "/laɪk/",
        "audioText": "Like.",
        "example": "What is it like outside?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-4-b1",
        "prompt": "Está lloviendo en Bogotá hoy.",
        "answer": "It is raining in Bogota today",
        "tokens": [
          "It",
          "is",
          "raining",
          "in",
          "Bogota",
          "today",
          "rain",
          "on"
        ],
        "hints": [
          "Empieza con It is raining."
        ]
      },
      {
        "id": "3-4-b2",
        "prompt": "No está soleado en invierno.",
        "answer": "It is not sunny in winter",
        "tokens": [
          "It",
          "is",
          "not",
          "sunny",
          "in",
          "winter",
          "sun",
          "on"
        ],
        "hints": [
          "En invierno se dice in winter."
        ]
      },
      {
        "id": "3-4-b3",
        "prompt": "¿Cómo está el clima en Medellín?",
        "answer": "What is the weather like in Medellin",
        "tokens": [
          "What",
          "is",
          "the",
          "weather",
          "like",
          "in",
          "Medellin",
          "how",
          "does"
        ],
        "hints": [
          "Usa la expresión What is the weather like."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-4-e1",
        "audioText": "It is raining in Bogotá today.",
        "correctAnswer": "It is raining in Bogotá today.",
        "options": [
          "It is raining in Bogotá today.",
          "It is sunny in Bogotá today.",
          "It was raining in Bogotá today."
        ]
      },
      {
        "id": "3-4-e2",
        "audioText": "It is not sunny in winter.",
        "correctAnswer": "It is not sunny in winter.",
        "options": [
          "It is not sunny in winter.",
          "It is not chilly in winter.",
          "It is very sunny in winter."
        ]
      },
      {
        "id": "3-4-e3",
        "audioText": "What is the weather like?",
        "correctAnswer": "What is the weather like?",
        "options": [
          "What is the weather like?",
          "How is the weather like?",
          "What was the weather like?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-5",
    "badgeName": "Time Traveler",
    "badgeEmoji": "⏳",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-5-1",
        "term": "Played",
        "translation": "Jugó / Jugué",
        "ipa": "/pleɪd/",
        "audioText": "Played.",
        "example": "I played football yesterday.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-5-2",
        "term": "Visited",
        "translation": "Visitó / Visité",
        "ipa": "/ˈvɪzɪtɪd/",
        "audioText": "Visited.",
        "example": "She visited her grandmother.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-5-3",
        "term": "Studied",
        "translation": "Estudió / Estudié",
        "ipa": "/ˈstʌdid/",
        "audioText": "Studied.",
        "example": "We studied for the math test.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-5-4",
        "term": "Watched",
        "translation": "Vio / Vi (pantallas)",
        "ipa": "/wɑtʃt/",
        "audioText": "Watched.",
        "example": "They watched a movie last night.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-5-5",
        "term": "Yesterday",
        "translation": "Ayer",
        "ipa": "/ˈjɛstərˌdeɪ/",
        "audioText": "Yesterday.",
        "example": "It rained yesterday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-6",
        "term": "Last night",
        "translation": "Anoche",
        "ipa": "/læst naɪt/",
        "audioText": "Last night.",
        "example": "I slept well last night.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-5-7",
        "term": "Did",
        "translation": "Auxiliar pasado",
        "ipa": "/dɪd/",
        "audioText": "Did.",
        "example": "Did you finish your homework?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-5-b1",
        "prompt": "Yo estudié inglés ayer.",
        "answer": "I studied English yesterday",
        "tokens": [
          "I",
          "studied",
          "English",
          "yesterday",
          "study",
          "last"
        ],
        "hints": [
          "En pasado, estudiar es studied."
        ]
      },
      {
        "id": "3-5-b2",
        "prompt": "Ella no jugó fútbol anoche.",
        "answer": "She did not play soccer last night",
        "tokens": [
          "She",
          "did",
          "not",
          "play",
          "soccer",
          "last",
          "night",
          "played",
          "does"
        ],
        "hints": [
          "En negativo, usa did not y el verbo en presente (play)."
        ]
      },
      {
        "id": "3-5-b3",
        "prompt": "¿Visitaste a tu familia?",
        "answer": "Did you visit your family",
        "tokens": [
          "Did",
          "you",
          "visit",
          "your",
          "family",
          "visited",
          "do"
        ],
        "hints": [
          "Empieza la pregunta con Did."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-5-e1",
        "audioText": "I studied English yesterday.",
        "correctAnswer": "I studied English yesterday.",
        "options": [
          "I studied English yesterday.",
          "I study English yesterday.",
          "He studied English yesterday."
        ]
      },
      {
        "id": "3-5-e2",
        "audioText": "She didn't play soccer last night.",
        "correctAnswer": "She didn't play soccer last night.",
        "options": [
          "She didn't play soccer last night.",
          "She doesn't play soccer last night.",
          "They didn't play soccer last night."
        ]
      },
      {
        "id": "3-5-e3",
        "audioText": "Did you visit your family?",
        "correctAnswer": "Did you visit your family?",
        "options": [
          "Did you visit your family?",
          "Do you visit your family?",
          "Did he visit your family?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-6",
    "badgeName": "Time Traveler",
    "badgeEmoji": "🚀",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-6-1",
        "term": "Went",
        "translation": "Fue / Fui",
        "ipa": "/wɛnt/",
        "audioText": "Went.",
        "example": "I went to the mall yesterday.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-2",
        "term": "Bought",
        "translation": "Compró / Compré",
        "ipa": "/bɔt/",
        "audioText": "Bought.",
        "example": "She bought new sneakers.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-3",
        "term": "Ate",
        "translation": "Comió / Comí",
        "ipa": "/eɪt/",
        "audioText": "Ate.",
        "example": "We ate pizza for dinner.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-4",
        "term": "Saw",
        "translation": "Vio / Vi",
        "ipa": "/sɔ/",
        "audioText": "Saw.",
        "example": "I saw my friends at school.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-5",
        "term": "Had",
        "translation": "Tuvo / Tuve",
        "ipa": "/hæd/",
        "audioText": "Had.",
        "example": "They had a great time.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-6",
        "term": "Spoke",
        "translation": "Habló / Hablé",
        "ipa": "/spoʊk/",
        "audioText": "Spoke.",
        "example": "He spoke with the teacher.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-6-7",
        "term": "Last weekend",
        "translation": "El fin de semana pasado",
        "ipa": "/læst ˈwikˌɛnd/",
        "audioText": "Last weekend.",
        "example": "What did you do last weekend?",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-6-b1",
        "prompt": "Nosotros comimos empanadas el fin de semana pasado.",
        "answer": "We ate empanadas last weekend",
        "tokens": [
          "We",
          "ate",
          "empanadas",
          "last",
          "weekend",
          "eat",
          "yesterday"
        ],
        "hints": [
          "El pasado de eat es ate."
        ]
      },
      {
        "id": "3-6-b2",
        "prompt": "Yo no fui al centro comercial.",
        "answer": "I did not go to the mall",
        "tokens": [
          "I",
          "did",
          "not",
          "go",
          "to",
          "the",
          "mall",
          "went",
          "do"
        ],
        "hints": [
          "Con did not, el verbo vuelve al presente (go)."
        ]
      },
      {
        "id": "3-6-b3",
        "prompt": "¿A dónde fuiste ayer?",
        "answer": "Where did you go yesterday",
        "tokens": [
          "Where",
          "did",
          "you",
          "go",
          "yesterday",
          "went",
          "what"
        ],
        "hints": [
          "Recuerda usar Where did you."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-6-e1",
        "audioText": "We ate empanadas last weekend.",
        "correctAnswer": "We ate empanadas last weekend.",
        "options": [
          "We ate empanadas last weekend.",
          "We eat empanadas last weekend.",
          "They ate empanadas last weekend."
        ]
      },
      {
        "id": "3-6-e2",
        "audioText": "I didn't go to the mall.",
        "correctAnswer": "I didn't go to the mall.",
        "options": [
          "I didn't go to the mall.",
          "I didn't went to the mall.",
          "He didn't go to the mall."
        ]
      },
      {
        "id": "3-6-e3",
        "audioText": "Where did you go yesterday?",
        "correctAnswer": "Where did you go yesterday?",
        "options": [
          "Where did you go yesterday?",
          "Where do you go yesterday?",
          "What did you do yesterday?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-7",
    "badgeName": "Globetrotter",
    "badgeEmoji": "✈️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-7-1",
        "term": "Travel",
        "translation": "Viajar",
        "ipa": "/ˈtrævəl/",
        "audioText": "Travel.",
        "example": "I want to travel to Cartagena.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-2",
        "term": "Pack",
        "translation": "Empacar",
        "ipa": "/pæk/",
        "audioText": "Pack.",
        "example": "Did you pack your bags?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-3",
        "term": "Luggage",
        "translation": "Equipaje",
        "ipa": "/ˈlʌɡɪdʒ/",
        "audioText": "Luggage.",
        "example": "My luggage is heavy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-4",
        "term": "Sightseeing",
        "translation": "Turismo",
        "ipa": "/ˈsaɪtˌsiɪŋ/",
        "audioText": "Sightseeing.",
        "example": "We went sightseeing in Eje Cafetero.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-5",
        "term": "Hotel",
        "translation": "Hotel",
        "ipa": "/hoʊˈtɛl/",
        "audioText": "Hotel.",
        "example": "The hotel had a big pool.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-6",
        "term": "Stay",
        "translation": "Quedarse / Hospedarse",
        "ipa": "/steɪ/",
        "audioText": "Stay.",
        "example": "Where did you stay?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-7-7",
        "term": "Trip",
        "translation": "Viaje",
        "ipa": "/trɪp/",
        "audioText": "Trip.",
        "example": "The trip was amazing!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-7-b1",
        "prompt": "Nosotros viajamos a Cartagena en diciembre.",
        "answer": "We traveled to Cartagena in December",
        "tokens": [
          "We",
          "traveled",
          "to",
          "Cartagena",
          "in",
          "December",
          "travel",
          "on"
        ],
        "hints": [
          "En pasado, travel es traveled."
        ]
      },
      {
        "id": "3-7-b2",
        "prompt": "Ella no empacó su equipaje.",
        "answer": "She did not pack her luggage",
        "tokens": [
          "She",
          "did",
          "not",
          "pack",
          "her",
          "luggage",
          "packed",
          "his"
        ],
        "hints": [
          "Usa did not pack."
        ]
      },
      {
        "id": "3-7-b3",
        "prompt": "¿Dónde te hospedaste?",
        "answer": "Where did you stay",
        "tokens": [
          "Where",
          "did",
          "you",
          "stay",
          "stayed",
          "what"
        ],
        "hints": [
          "Hospedarse es stay."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-7-e1",
        "audioText": "We traveled to Cartagena in December.",
        "correctAnswer": "We traveled to Cartagena in December.",
        "options": [
          "We traveled to Cartagena in December.",
          "We travel to Cartagena in December.",
          "They traveled to Cartagena in December."
        ]
      },
      {
        "id": "3-7-e2",
        "audioText": "She didn't pack her luggage.",
        "correctAnswer": "She didn't pack her luggage.",
        "options": [
          "She didn't pack her luggage.",
          "She didn't packed her luggage.",
          "He didn't pack his luggage."
        ]
      },
      {
        "id": "3-7-e3",
        "audioText": "Where did you stay?",
        "correctAnswer": "Where did you stay?",
        "options": [
          "Where did you stay?",
          "Where do you stay?",
          "Where did he stay?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-8",
    "badgeName": "Future Vision",
    "badgeEmoji": "🔮",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-8-1",
        "term": "Going to",
        "translation": "Voy a / Va a",
        "ipa": "/ˈɡoʊɪŋ tu/",
        "audioText": "Going to.",
        "example": "I am going to study.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-8-2",
        "term": "Tomorrow",
        "translation": "Mañana",
        "ipa": "/təˈmɑroʊ/",
        "audioText": "Tomorrow.",
        "example": "We are going to play tomorrow.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-3",
        "term": "Next week",
        "translation": "La próxima semana",
        "ipa": "/nɛkst wik/",
        "audioText": "Next week.",
        "example": "She is going to travel next week.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-8-4",
        "term": "I am",
        "translation": "Yo estoy / Yo soy",
        "ipa": "/aɪ æm/",
        "audioText": "I am.",
        "example": "I am going to eat.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-8-5",
        "term": "You are",
        "translation": "Tú estás / Ustedes están",
        "ipa": "/ju ɑr/",
        "audioText": "You are.",
        "example": "You are going to win.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-8-6",
        "term": "She is",
        "translation": "Ella está / Ella es",
        "ipa": "/ʃi ɪz/",
        "audioText": "She is.",
        "example": "She is going to buy a car.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-8-7",
        "term": "Do (action)",
        "translation": "Hacer",
        "ipa": "/du/",
        "audioText": "Do.",
        "example": "What are you going to do?",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-8-b1",
        "prompt": "Yo voy a estudiar inglés mañana.",
        "answer": "I am going to study English tomorrow",
        "tokens": [
          "I",
          "am",
          "going",
          "to",
          "study",
          "English",
          "tomorrow",
          "will",
          "studying"
        ],
        "hints": [
          "Usa I am going to para el futuro."
        ]
      },
      {
        "id": "3-8-b2",
        "prompt": "Nosotros no vamos a viajar la próxima semana.",
        "answer": "We are not going to travel next week",
        "tokens": [
          "We",
          "are",
          "not",
          "going",
          "to",
          "travel",
          "next",
          "week",
          "do",
          "traveling"
        ],
        "hints": [
          "Para negar con going to, usa are not."
        ]
      },
      {
        "id": "3-8-b3",
        "prompt": "¿Qué vas a hacer este fin de semana?",
        "answer": "What are you going to do this weekend",
        "tokens": [
          "What",
          "are",
          "you",
          "going",
          "to",
          "do",
          "this",
          "weekend",
          "will",
          "does"
        ],
        "hints": [
          "Qué vas a hacer es What are you going to do."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-8-e1",
        "audioText": "I am going to study English tomorrow.",
        "correctAnswer": "I am going to study English tomorrow.",
        "options": [
          "I am going to study English tomorrow.",
          "I am going to study math tomorrow.",
          "He is going to study English tomorrow."
        ]
      },
      {
        "id": "3-8-e2",
        "audioText": "We are not going to travel next week.",
        "correctAnswer": "We are not going to travel next week.",
        "options": [
          "We are not going to travel next week.",
          "We are not going to travel tomorrow.",
          "They are not going to travel next week."
        ]
      },
      {
        "id": "3-8-e3",
        "audioText": "What are you going to do this weekend?",
        "correctAnswer": "What are you going to do this weekend?",
        "options": [
          "What are you going to do this weekend?",
          "What are you going to do tomorrow?",
          "Where are you going to go this weekend?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-9",
    "badgeName": "City Navigator",
    "badgeEmoji": "🗺️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-9-1",
        "term": "Turn left",
        "translation": "Gira a la izquierda",
        "ipa": "/tɜrn lɛft/",
        "audioText": "Turn left.",
        "example": "Turn left at the corner.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-2",
        "term": "Turn right",
        "translation": "Gira a la derecha",
        "ipa": "/tɜrn raɪt/",
        "audioText": "Turn right.",
        "example": "Turn right after the bank.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-3",
        "term": "Go straight",
        "translation": "Sigue derecho",
        "ipa": "/ɡoʊ streɪt/",
        "audioText": "Go straight.",
        "example": "Go straight for two blocks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-4",
        "term": "Next to",
        "translation": "Al lado de",
        "ipa": "/nɛkst tu/",
        "audioText": "Next to.",
        "example": "The park is next to the school.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-9-5",
        "term": "Opposite",
        "translation": "En frente de (opuesto)",
        "ipa": "/ˈɑpəzɪt/",
        "audioText": "Opposite.",
        "example": "The mall is opposite the station.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-9-6",
        "term": "Block",
        "translation": "Cuadra / Manzana",
        "ipa": "/blɑk/",
        "audioText": "Block.",
        "example": "Walk one block.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-9-7",
        "term": "How do I get to...?",
        "translation": "¿Cómo llego a...?",
        "ipa": "/haʊ du aɪ ɡɛt tu/",
        "audioText": "How do I get to...?",
        "example": "How do I get to the museum?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-9-b1",
        "prompt": "Sigue derecho y gira a la izquierda.",
        "answer": "Go straight and turn left",
        "tokens": [
          "Go",
          "straight",
          "and",
          "turn",
          "left",
          "right",
          "going"
        ],
        "hints": [
          "Sigue derecho es Go straight."
        ]
      },
      {
        "id": "3-9-b2",
        "prompt": "El parque no está al lado del banco.",
        "answer": "The park is not next to the bank",
        "tokens": [
          "The",
          "park",
          "is",
          "not",
          "next",
          "to",
          "the",
          "bank",
          "opposite",
          "are"
        ],
        "hints": [
          "Al lado de es next to."
        ]
      },
      {
        "id": "3-9-b3",
        "prompt": "¿Cómo llego al centro comercial?",
        "answer": "How do I get to the mall",
        "tokens": [
          "How",
          "do",
          "I",
          "get",
          "to",
          "the",
          "mall",
          "does",
          "where"
        ],
        "hints": [
          "Usa How do I get to para preguntar cómo llegar."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-9-e1",
        "audioText": "Go straight and turn left.",
        "correctAnswer": "Go straight and turn left.",
        "options": [
          "Go straight and turn left.",
          "Go straight and turn right.",
          "Turn left and go straight."
        ]
      },
      {
        "id": "3-9-e2",
        "audioText": "The park is not next to the bank.",
        "correctAnswer": "The park is not next to the bank.",
        "options": [
          "The park is not next to the bank.",
          "The park is next to the bank.",
          "The school is not next to the bank."
        ]
      },
      {
        "id": "3-9-e3",
        "audioText": "How do I get to the mall?",
        "correctAnswer": "How do I get to the mall?",
        "options": [
          "How do I get to the mall?",
          "Where is the mall?",
          "How do I get to the park?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-3-10",
    "badgeName": "Storyteller Pro",
    "badgeEmoji": "🎬",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "3-10-1",
        "term": "Story",
        "translation": "Historia / Cuento",
        "ipa": "/ˈstɔri/",
        "audioText": "Story.",
        "example": "Let me tell you a story.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-2",
        "term": "Blog",
        "translation": "Blog",
        "ipa": "/blɑɡ/",
        "audioText": "Blog.",
        "example": "I wrote a travel blog.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-3",
        "term": "Present",
        "translation": "Presentar",
        "ipa": "/prɪˈzɛnt/",
        "audioText": "Present.",
        "example": "I will present my project.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-4",
        "term": "Experience",
        "translation": "Experiencia",
        "ipa": "/ɪkˈspɪriəns/",
        "audioText": "Experience.",
        "example": "It was a great experience.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-5",
        "term": "Share",
        "translation": "Compartir",
        "ipa": "/ʃɛr/",
        "audioText": "Share.",
        "example": "I want to share my photos.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "3-10-6",
        "term": "Finally",
        "translation": "Finalmente",
        "ipa": "/ˈfaɪnəli/",
        "audioText": "Finally.",
        "example": "Finally, we went home.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "3-10-7",
        "term": "Awesome",
        "translation": "Increíble / Genial",
        "ipa": "/ˈɔsəm/",
        "audioText": "Awesome.",
        "example": "The trip was awesome!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "3-10-b1",
        "prompt": "Yo quiero compartir la historia de mi viaje.",
        "answer": "I want to share my travel story",
        "tokens": [
          "I",
          "want",
          "to",
          "share",
          "my",
          "travel",
          "story",
          "blog",
          "present"
        ],
        "hints": [
          "Compartir es share."
        ]
      },
      {
        "id": "3-10-b2",
        "prompt": "Mi experiencia no fue aburrida.",
        "answer": "My experience was not boring",
        "tokens": [
          "My",
          "experience",
          "was",
          "not",
          "boring",
          "is",
          "did"
        ],
        "hints": [
          "Como es pasado (fue), usa was not."
        ]
      },
      {
        "id": "3-10-b3",
        "prompt": "¿Vas a presentar tu blog?",
        "answer": "Are you going to present your blog",
        "tokens": [
          "Are",
          "you",
          "going",
          "to",
          "present",
          "your",
          "blog",
          "do",
          "will"
        ],
        "hints": [
          "Para preguntar en futuro usa Are you going to."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "3-10-e1",
        "audioText": "I want to share my travel story.",
        "correctAnswer": "I want to share my travel story.",
        "options": [
          "I want to share my travel story.",
          "I want to present my travel story.",
          "He wants to share his travel story."
        ]
      },
      {
        "id": "3-10-e2",
        "audioText": "My experience was not boring.",
        "correctAnswer": "My experience was not boring.",
        "options": [
          "My experience was not boring.",
          "My experience was awesome.",
          "His experience was not boring."
        ]
      },
      {
        "id": "3-10-e3",
        "audioText": "Are you going to present your blog?",
        "correctAnswer": "Are you going to present your blog?",
        "options": [
          "Are you going to present your blog?",
          "Did you present your blog?",
          "Is he going to present his blog?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-1",
    "badgeName": "Opinion Leader",
    "badgeEmoji": "🗣️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-1-1",
        "term": "In my opinion",
        "translation": "En mi opinión",
        "ipa": "/ɪn maɪ əˈpɪnjən/",
        "audioText": "In my opinion.",
        "example": "In my opinion, this song is awesome.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-1-2",
        "term": "From my perspective",
        "translation": "Desde mi perspectiva",
        "ipa": "/frəm maɪ pərˈspɛktɪv/",
        "audioText": "From my perspective.",
        "example": "From my perspective, that trend is great.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-1-3",
        "term": "I totally agree",
        "translation": "Estoy totalmente de acuerdo",
        "ipa": "/aɪ ˈtoʊtəli əˈɡri/",
        "audioText": "I totally agree.",
        "example": "I totally agree with your idea.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-4",
        "term": "I politely disagree",
        "translation": "Respetuosamente discrepo",
        "ipa": "/aɪ pəˈlaɪtli ˌdɪsəˈɡri/",
        "audioText": "I politely disagree.",
        "example": "I politely disagree with that review.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-5",
        "term": "Because / Since",
        "translation": "Porque / Ya que",
        "ipa": "/bɪˈkɔz / sɪns/",
        "audioText": "Because. Since.",
        "example": "I like this artist because she writes real lyrics.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-1-6",
        "term": "Social Trend",
        "translation": "Tendencia social",
        "ipa": "/ˈsoʊʃəl trɛnd/",
        "audioText": "Social Trend.",
        "example": "Viral challenges are a huge social trend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-1-7",
        "term": "Point of view",
        "translation": "Punto de vista",
        "ipa": "/pɔɪnt ʌv vju/",
        "audioText": "Point of view.",
        "example": "Everyone has a different point of view.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-1-b1",
        "prompt": "En mi opinión, la música colombiana es increíble.",
        "answer": "In my opinion Colombian music is amazing",
        "tokens": [
          "In",
          "my",
          "opinion",
          "Colombian",
          "music",
          "is",
          "amazing",
          "are",
          "disagree"
        ],
        "hints": [
          "Empieza con 'In my opinion'.",
          "Usa 'Colombian music is amazing'."
        ]
      },
      {
        "id": "4-1-b2",
        "prompt": "Yo no estoy de acuerdo con esa opinión negativa.",
        "answer": "I do not agree with that negative opinion",
        "tokens": [
          "I",
          "do",
          "not",
          "agree",
          "with",
          "that",
          "negative",
          "opinion",
          "am",
          "since"
        ],
        "hints": [
          "En presente simple para negar 'agree' usa 'I do not agree'.",
          "Usa 'with that negative opinion'."
        ]
      },
      {
        "id": "4-1-b3",
        "prompt": "¿Cuál es tu punto de vista sobre esta tendencia?",
        "answer": "What is your point of view about this trend",
        "tokens": [
          "What",
          "is",
          "your",
          "point",
          "of",
          "view",
          "about",
          "this",
          "trend",
          "Are",
          "why"
        ],
        "hints": [
          "Empieza preguntando 'What is your point of view...'",
          "Termina con 'about this trend'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-1-e1",
        "audioText": "In my opinion, learning English opens amazing global doors.",
        "correctAnswer": "In my opinion, learning English opens amazing global doors.",
        "options": [
          "In my opinion, learning English opens amazing global doors.",
          "In my perspective, learning English opens amazing doors.",
          "In my opinion, learning French opens amazing global doors."
        ]
      },
      {
        "id": "4-1-e2",
        "audioText": "I politely disagree because social media creates too much pressure.",
        "correctAnswer": "I politely disagree because social media creates too much pressure.",
        "options": [
          "I politely disagree because social media creates too much pressure.",
          "I totally agree because social media creates too much pressure.",
          "I politely disagree since technology creates too much pressure."
        ]
      },
      {
        "id": "4-1-e3",
        "audioText": "What is your point of view about the new school rules?",
        "correctAnswer": "What is your point of view about the new school rules?",
        "options": [
          "What is your point of view about the new school rules?",
          "What is his point of view about the new school rules?",
          "Where is your point of view about the new school rules?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-2",
    "badgeName": "Logic Scientist",
    "badgeEmoji": "🧪",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-2-1",
        "term": "Zero Conditional (If + Present, Present)",
        "translation": "Condicional Cero: Hechos y verdades científicas",
        "ipa": "/ˈzɪroʊ kənˈdɪʃənəl/",
        "audioText": "Zero Conditional.",
        "example": "If you freeze water, it turns to ice.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-2-2",
        "term": "Melt & Boil",
        "translation": "Derretirse y Hervir",
        "ipa": "/mɛlt ænd bɔɪl/",
        "audioText": "Melt and Boil.",
        "example": "Ice melts if you leave it in the sun.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-3",
        "term": "Mix & Create",
        "translation": "Mezclar y Crear",
        "ipa": "/mɪks ænd kriˈeɪt/",
        "audioText": "Mix and Create.",
        "example": "If you mix blue and yellow, you get green.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-4",
        "term": "Whenever / When",
        "translation": "Cada vez que / Cuando",
        "ipa": "/wɛnˈɛvər / wɛn/",
        "audioText": "Whenever. When.",
        "example": "Whenever I study with music, I focus better.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-2-5",
        "term": "Scientific Fact",
        "translation": "Hecho científico",
        "ipa": "/ˌsaɪənˈtɪfɪk fækt/",
        "audioText": "Scientific Fact.",
        "example": "Gravity is a universal scientific fact.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-6",
        "term": "Heat & Pressure",
        "translation": "Calor y Presión",
        "ipa": "/hit ænd ˈprɛʃər/",
        "audioText": "Heat and Pressure.",
        "example": "If heat increases, pressure rises.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-2-7",
        "term": "What happens if...?",
        "translation": "¿Qué pasa si...?",
        "ipa": "/wʌt ˈhæpənz ɪf/",
        "audioText": "What happens if...?",
        "example": "What happens if you don't sleep enough?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-2-b1",
        "prompt": "Si calientas agua a cien grados, hierve.",
        "answer": "If you heat water to 100 degrees it boils",
        "tokens": [
          "If",
          "you",
          "heat",
          "water",
          "to",
          "100",
          "degrees",
          "it",
          "boils",
          "will",
          "boiled"
        ],
        "hints": [
          "En condicional cero ambas cláusulas van en presente simple.",
          "El verbo para agua/it lleva -s: 'boils'."
        ]
      },
      {
        "id": "4-2-b2",
        "prompt": "Si no riegas las plantas, no crecen.",
        "answer": "If you do not water plants they do not grow",
        "tokens": [
          "If",
          "you",
          "do",
          "not",
          "water",
          "plants",
          "they",
          "do",
          "not",
          "grow",
          "will",
          "are"
        ],
        "hints": [
          "Usa 'do not water' para la condición.",
          "Usa 'they do not grow' para el resultado."
        ]
      },
      {
        "id": "4-2-b3",
        "prompt": "¿Qué pasa si mezclas rojo y blanco?",
        "answer": "What happens if you mix red and white",
        "tokens": [
          "What",
          "happens",
          "if",
          "you",
          "mix",
          "red",
          "and",
          "white",
          "is",
          "will"
        ],
        "hints": [
          "Empieza con 'What happens if...'",
          "Usa 'you mix red and white'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-2-e1",
        "audioText": "If you mix yellow and blue paint, you get green.",
        "correctAnswer": "If you mix yellow and blue paint, you get green.",
        "options": [
          "If you mix yellow and blue paint, you get green.",
          "If you mix yellow and red paint, you get green.",
          "When you mix yellow and blue paint, you make green."
        ]
      },
      {
        "id": "4-2-e2",
        "audioText": "Ice melts quickly if you leave it in direct sunlight.",
        "correctAnswer": "Ice melts quickly if you leave it in direct sunlight.",
        "options": [
          "Ice melts quickly if you leave it in direct sunlight.",
          "Ice freezes quickly if you leave it in direct sunlight.",
          "Snow melts slowly if you leave it in direct sunlight."
        ]
      },
      {
        "id": "4-2-e3",
        "audioText": "What happens if students do not study for the final exam?",
        "correctAnswer": "What happens if students do not study for the final exam?",
        "options": [
          "What happens if students do not study for the final exam?",
          "What happens if teens do not study for the test?",
          "What will happen if students study for the final exam?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-3",
    "badgeName": "Future Strategist",
    "badgeEmoji": "🔮",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-3-1",
        "term": "First Conditional (If + Present, WILL + Verb)",
        "translation": "Primer Condicional: Posibilidades reales futuras",
        "ipa": "/fɜrst kənˈdɪʃənəl/",
        "audioText": "First Conditional.",
        "example": "If it rains tomorrow, we will stay at home.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-3-2",
        "term": "Pass an exam",
        "translation": "Pasar un examen",
        "ipa": "/pæs æn ɪɡˈzæm/",
        "audioText": "Pass an exam.",
        "example": "If I study hard, I will pass the English exam.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-3",
        "term": "Win a match",
        "translation": "Ganar un partido",
        "ipa": "/wɪn ə mætʃ/",
        "audioText": "Win a match.",
        "example": "Our soccer team will win if we practice daily.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-4",
        "term": "Unless (If not)",
        "translation": "A menos que / Si no",
        "ipa": "/ənˈlɛs/",
        "audioText": "Unless.",
        "example": "We will be late unless we hurry up.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-3-5",
        "term": "Save money",
        "translation": "Ahorrar dinero",
        "ipa": "/seɪv ˈmʌni/",
        "audioText": "Save money.",
        "example": "If I save money, I will buy a new smartphone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-6",
        "term": "Celebrate together",
        "translation": "Celebrar juntos",
        "ipa": "/ˈsɛləˌbreɪt təˈɡɛðər/",
        "audioText": "Celebrate together.",
        "example": "We will celebrate together this weekend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-3-7",
        "term": "What will you do if...?",
        "translation": "¿Qué harás si...?",
        "ipa": "/wʌt wɪl ju du ɪf/",
        "audioText": "What will you do if...?",
        "example": "What will you do if the party is canceled?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-3-b1",
        "prompt": "Si gano el torneo, celebraré con mis amigos.",
        "answer": "If I win the tournament I will celebrate with my friends",
        "tokens": [
          "If",
          "I",
          "win",
          "the",
          "tournament",
          "I",
          "will",
          "celebrate",
          "with",
          "my",
          "friends",
          "am",
          "won"
        ],
        "hints": [
          "Cláusula con IF en presente: 'If I win the tournament'.",
          "Resultado futuro con WILL: 'I will celebrate with my friends'."
        ]
      },
      {
        "id": "4-3-b2",
        "prompt": "No iremos al parque si llueve en la tarde.",
        "answer": "We will not go to the park if it rains in the afternoon",
        "tokens": [
          "We",
          "will",
          "not",
          "go",
          "to",
          "the",
          "park",
          "if",
          "it",
          "rains",
          "in",
          "the",
          "afternoon",
          "do",
          "rain"
        ],
        "hints": [
          "Usa 'We will not go' o 'won't go' para el futuro negativo.",
          "Usa 'if it rains in the afternoon'."
        ]
      },
      {
        "id": "4-3-b3",
        "prompt": "¿Qué harás si tienes tiempo libre este sábado?",
        "answer": "What will you do if you have free time this Saturday",
        "tokens": [
          "What",
          "will",
          "you",
          "do",
          "if",
          "you",
          "have",
          "free",
          "time",
          "this",
          "Saturday",
          "are",
          "did"
        ],
        "hints": [
          "Empieza con la pregunta en futuro: 'What will you do...'",
          "Agrega la condición: 'if you have free time this Saturday'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-3-e1",
        "audioText": "If you practice speaking every day, your English will improve fast.",
        "correctAnswer": "If you practice speaking every day, your English will improve fast.",
        "options": [
          "If you practice speaking every day, your English will improve fast.",
          "If you practice grammar every day, your English will improve fast.",
          "If you practice speaking every day, your English improves fast."
        ]
      },
      {
        "id": "4-3-e2",
        "audioText": "We will miss the bus unless we leave the house right now.",
        "correctAnswer": "We will miss the bus unless we leave the house right now.",
        "options": [
          "We will miss the bus unless we leave the house right now.",
          "We will take the bus unless we leave the house right now.",
          "We will miss the train unless we leave the house right now."
        ]
      },
      {
        "id": "4-3-e3",
        "audioText": "What will you buy if you save enough money this month?",
        "correctAnswer": "What will you buy if you save enough money this month?",
        "options": [
          "What will you buy if you save enough money this month?",
          "What did you buy if you saved enough money this month?",
          "What will you do if you save enough money this month?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-4",
    "badgeName": "Comparative Master",
    "badgeEmoji": "⚖️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-4-1",
        "term": "Faster than / Slower than",
        "translation": "Más rápido que / Más lento que",
        "ipa": "/ˈfæstər ðæn / ˈsloʊər ðæn/",
        "audioText": "Faster than. Slower than.",
        "example": "My new computer is faster than my old tablet.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-2",
        "term": "The fastest / The most modern",
        "translation": "El más rápido / El más moderno (Superlativos)",
        "ipa": "/ðə ˈfæstɪst / ðə moʊst ˈmɑdərn/",
        "audioText": "The fastest. The most modern.",
        "example": "This is the most modern stadium in Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-3",
        "term": "Better than / Worse than",
        "translation": "Mejor que / Peor que (Irregulares)",
        "ipa": "/ˈbɛtər ðæn / wɜrs ðæn/",
        "audioText": "Better than. Worse than.",
        "example": "Homemade pizza is better than fast food.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-4",
        "term": "As good as / As fast as",
        "translation": "Tan bueno como / Tan rápido como (Igualdad)",
        "ipa": "/æz ɡʊd æz/",
        "audioText": "As good as.",
        "example": "Medellín Metro is as fast as European trains.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-5",
        "term": "More expensive than",
        "translation": "Más costoso que (adjetivos largos)",
        "ipa": "/mɔr ɪkˈspɛnsɪv ðæn/",
        "audioText": "More expensive than.",
        "example": "A gaming laptop is more expensive than a console.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-4-6",
        "term": "The most exciting",
        "translation": "El más emocionante",
        "ipa": "/ðə moʊst ɪkˈsaɪtɪŋ/",
        "audioText": "The most exciting.",
        "example": "Theme parks are the most exciting places for teens.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-4-7",
        "term": "Which one is better?",
        "translation": "¿Cuál es mejor?",
        "ipa": "/wɪtʃ wʌn ɪz ˈbɛtər/",
        "audioText": "Which one is better?",
        "example": "Which console is better for online gaming?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-4-b1",
        "prompt": "Bogotá es más grande y fría que Medellín.",
        "answer": "Bogota is bigger and colder than Medellin",
        "tokens": [
          "Bogota",
          "is",
          "bigger",
          "and",
          "colder",
          "than",
          "Medellin",
          "more",
          "the"
        ],
        "hints": [
          "Adjetivos cortos llevan '-er': bigger, colder.",
          "Usa 'than' para comparar."
        ]
      },
      {
        "id": "4-4-b2",
        "prompt": "Este celular no es tan costoso como el modelo nuevo.",
        "answer": "This phone is not as expensive as the new model",
        "tokens": [
          "This",
          "phone",
          "is",
          "not",
          "as",
          "expensive",
          "as",
          "the",
          "new",
          "model",
          "more",
          "than"
        ],
        "hints": [
          "Estructura de igualdad negativa: 'is not as + adjetivo + as'.",
          "Termina con 'the new model'."
        ]
      },
      {
        "id": "4-4-b3",
        "prompt": "¿Cuál es la película más entretenida del año?",
        "answer": "Which is the most entertaining movie of the year",
        "tokens": [
          "Which",
          "is",
          "the",
          "most",
          "entertaining",
          "movie",
          "of",
          "the",
          "year",
          "more",
          "better"
        ],
        "hints": [
          "Para superlativos de adjetivos largos usa 'the most + adjetivo'.",
          "Usa 'of the year'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-4-e1",
        "audioText": "Medellin has one of the cleanest metro systems in Latin America.",
        "correctAnswer": "Medellin has one of the cleanest metro systems in Latin America.",
        "options": [
          "Medellin has one of the cleanest metro systems in Latin America.",
          "Bogota has one of the cleanest metro systems in Latin America.",
          "Medellin has one of the biggest metro systems in Latin America."
        ]
      },
      {
        "id": "4-4-e2",
        "audioText": "Online multiplayer gaming is more exciting than single player games.",
        "correctAnswer": "Online multiplayer gaming is more exciting than single player games.",
        "options": [
          "Online multiplayer gaming is more exciting than single player games.",
          "Offline multiplayer gaming is more exciting than single player games.",
          "Online multiplayer gaming is less exciting than single player games."
        ]
      },
      {
        "id": "4-4-e3",
        "audioText": "Which smartphone brand is more reliable for teenagers?",
        "correctAnswer": "Which smartphone brand is more reliable for teenagers?",
        "options": [
          "Which smartphone brand is more reliable for teenagers?",
          "Which laptop brand is more reliable for teenagers?",
          "Which smartphone model is the most reliable for teenagers?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-5",
    "badgeName": "Wise Advisor",
    "badgeEmoji": "💡",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-5-1",
        "term": "You should / You shouldn't",
        "translation": "Deberías / No deberías (Consejo amigable)",
        "ipa": "/ju ʃʊd / ju ˈʃʊdənt/",
        "audioText": "You should. You shouldn't.",
        "example": "You should drink more water when you skate.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-5-2",
        "term": "You ought to",
        "translation": "Deberías (Recomendación moral/fuerte)",
        "ipa": "/ju ɔt tu/",
        "audioText": "You ought to.",
        "example": "You ought to apologize to your brother.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-5-3",
        "term": "You had better (You'd better)",
        "translation": "Más te vale / Es mejor que (Advertencia de consecuencia)",
        "ipa": "/ju hæd ˈbɛtər/",
        "audioText": "You had better.",
        "example": "You had better set an alarm or you will be late.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-5-4",
        "term": "Give advice",
        "translation": "Dar un consejo",
        "ipa": "/ɡɪv ædˈvaɪs/",
        "audioText": "Give advice.",
        "example": "Teachers give great academic advice.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-5",
        "term": "Get enough rest",
        "translation": "Descansar lo suficiente",
        "ipa": "/ɡɛt ɪˈnʌf rɛst/",
        "audioText": "Get enough rest.",
        "example": "Teens should get enough rest before exams.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-6",
        "term": "Stay calm",
        "translation": "Mantener la calma",
        "ipa": "/steɪ kɑm/",
        "audioText": "Stay calm.",
        "example": "You should stay calm during presentations.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-5-7",
        "term": "What should I do?",
        "translation": "¿Qué debería hacer?",
        "ipa": "/wʌt ʃʊd aɪ du/",
        "audioText": "What should I do?",
        "example": "What should I do to improve my listening?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-5-b1",
        "prompt": "Deberías descansar al menos ocho horas cada noche.",
        "answer": "You should rest at least eight hours every night",
        "tokens": [
          "You",
          "should",
          "rest",
          "at",
          "least",
          "eight",
          "hours",
          "every",
          "night",
          "must",
          "to"
        ],
        "hints": [
          "Después de 'should' el verbo va directo en forma base sin 'to': 'should rest'.",
          "Usa 'at least eight hours every night'."
        ]
      },
      {
        "id": "4-5-b2",
        "prompt": "Más vale que no te quedes trasnochando jugando.",
        "answer": "You had better not stay up late gaming",
        "tokens": [
          "You",
          "had",
          "better",
          "not",
          "stay",
          "up",
          "late",
          "gaming",
          "should",
          "to"
        ],
        "hints": [
          "Negación de had better: 'had better not + verbo base'.",
          "Trasnochar se dice 'stay up late'."
        ]
      },
      {
        "id": "4-5-b3",
        "prompt": "¿Qué debería estudiar Juan para el examen de inglés?",
        "answer": "What should Juan study for the English exam",
        "tokens": [
          "What",
          "should",
          "Juan",
          "study",
          "for",
          "the",
          "English",
          "exam",
          "does",
          "to"
        ],
        "hints": [
          "Pregunta con should: 'What should + sujeto + verbo base...'",
          "Termina con 'for the English exam'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-5-e1",
        "audioText": "You should drink water and stretch before running.",
        "correctAnswer": "You should drink water and stretch before running.",
        "options": [
          "You should drink water and stretch before running.",
          "You must drink water and stretch before running.",
          "You should drink soda and stretch before running."
        ]
      },
      {
        "id": "4-5-e2",
        "audioText": "You had better study tonight, because the teacher is strict.",
        "correctAnswer": "You had better study tonight, because the teacher is strict.",
        "options": [
          "You had better study tonight, because the teacher is strict.",
          "You should study tonight, because the exam is easy.",
          "You had better sleep tonight, because the teacher is strict."
        ]
      },
      {
        "id": "4-5-e3",
        "audioText": "What advice should I give to my best friend about bullying?",
        "correctAnswer": "What advice should I give to my best friend about bullying?",
        "options": [
          "What advice should I give to my best friend about bullying?",
          "What advice did you give to your best friend about bullying?",
          "What help should I give to my best friend about studying?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-6",
    "badgeName": "Rule Enforcer",
    "badgeEmoji": "🛡️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-6-1",
        "term": "Must (Internal strong obligation)",
        "translation": "Deber obligatorio (Deber de ley o convicción)",
        "ipa": "/mʌst/",
        "audioText": "Must.",
        "example": "We must protect our school environment.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-6-2",
        "term": "Have to / Has to",
        "translation": "Tener que (Obligación externa o regla escolar)",
        "ipa": "/hæv tu / hæz tu/",
        "audioText": "Have to. Has to.",
        "example": "Students have to wear the school uniform.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-6-3",
        "term": "Must not (Mustn't)",
        "translation": "Prohibido totalmente",
        "ipa": "/mʌst nɑt / ˈmʌsənt/",
        "audioText": "Must not.",
        "example": "You must not cheat on exams.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-6-4",
        "term": "Don't have to / Doesn't have to",
        "translation": "No tener que (Falta de obligación)",
        "ipa": "/doʊnt hæv tu/",
        "audioText": "Don't have to.",
        "example": "We don't have to wake up early on Sundays.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-6-5",
        "term": "School rules & Safety goggles",
        "translation": "Reglas escolares y Gafas de seguridad de laboratorio",
        "ipa": "/skul rulz ænd ˈseɪfti ˈɡɑɡəlz/",
        "audioText": "School rules and Safety goggles.",
        "example": "Wear safety goggles in the chemistry lab.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-6",
        "term": "Submit on time",
        "translation": "Entregar a tiempo",
        "ipa": "/səbˈmɪt ɑn taɪm/",
        "audioText": "Submit on time.",
        "example": "You have to submit your assignment on time.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-6-7",
        "term": "Do we have to...?",
        "translation": "¿Tenemos que...?",
        "ipa": "/du wi hæv tu/",
        "audioText": "Do we have to...?",
        "example": "Do we have to bring our laptops tomorrow?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-6-b1",
        "prompt": "Tienes que usar gafas de seguridad en el laboratorio.",
        "answer": "You have to wear safety goggles in the lab",
        "tokens": [
          "You",
          "have",
          "to",
          "wear",
          "safety",
          "goggles",
          "in",
          "the",
          "lab",
          "must",
          "wearing"
        ],
        "hints": [
          "Usa 'have to wear' para la regla establecida.",
          "Usa 'safety goggles in the lab'."
        ]
      },
      {
        "id": "4-6-b2",
        "prompt": "Está prohibido usar celulares durante la evaluación.",
        "answer": "You must not use mobile phones during the evaluation",
        "tokens": [
          "You",
          "must",
          "not",
          "use",
          "mobile",
          "phones",
          "during",
          "the",
          "evaluation",
          "do",
          "have"
        ],
        "hints": [
          "Para prohibición estricta usa 'must not use'.",
          "Usa 'during the evaluation'."
        ]
      },
      {
        "id": "4-6-b3",
        "prompt": "¿Tenemos que entregar el proyecto este viernes?",
        "answer": "Do we have to submit the project this Friday",
        "tokens": [
          "Do",
          "we",
          "have",
          "to",
          "submit",
          "the",
          "project",
          "this",
          "Friday",
          "Are",
          "must"
        ],
        "hints": [
          "Pregunta de obligación con have to: 'Do we have to submit...'",
          "Termina con 'the project this Friday'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-6-e1",
        "audioText": "All students must follow safety guidelines in the chemistry lab.",
        "correctAnswer": "All students must follow safety guidelines in the chemistry lab.",
        "options": [
          "All students must follow safety guidelines in the chemistry lab.",
          "All teachers must follow safety guidelines in the chemistry lab.",
          "All students should follow safety guidelines in the biology lab."
        ]
      },
      {
        "id": "4-6-e2",
        "audioText": "You do not have to buy a physical book, the PDF is free online.",
        "correctAnswer": "You do not have to buy a physical book, the PDF is free online.",
        "options": [
          "You do not have to buy a physical book, the PDF is free online.",
          "You must not buy a physical book, the PDF is free online.",
          "You have to buy a physical book, the PDF is online."
        ]
      },
      {
        "id": "4-6-e3",
        "audioText": "Does Sofia have to wear her sports uniform tomorrow?",
        "correctAnswer": "Does Sofia have to wear her sports uniform tomorrow?",
        "options": [
          "Does Sofia have to wear her sports uniform tomorrow?",
          "Does Sofia want to wear her sports uniform tomorrow?",
          "Did Sofia have to wear her sports uniform today?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-7",
    "badgeName": "Experience Seeker",
    "badgeEmoji": "🗺️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-7-1",
        "term": "Present Perfect (have/has + Past Participle)",
        "translation": "Presente Perfecto: Experiencias de vida",
        "ipa": "/ˈprɛzənt ˈpɜrfɪkt/",
        "audioText": "Present Perfect.",
        "example": "I have visited many beautiful places in Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-7-2",
        "term": "Visited / Traveled",
        "translation": "Visitado / Viajado (Participios Regulares)",
        "ipa": "/ˈvɪzɪtɪd / ˈtrævəld/",
        "audioText": "Visited. Traveled.",
        "example": "We have traveled to Santa Marta three times.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-3",
        "term": "Seen / Eaten / Done",
        "translation": "Visto / Comido / Hecho (Participios Irregulares)",
        "ipa": "/sin / ˈitən / dʌn/",
        "audioText": "Seen. Eaten. Done.",
        "example": "I have seen that viral anime movie.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-4",
        "term": "Have you ever...?",
        "translation": "¿Alguna vez has...?",
        "ipa": "/hæv ju ˈɛvər/",
        "audioText": "Have you ever...?",
        "example": "Have you ever ridden a roller coaster?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-7-5",
        "term": "I have never...",
        "translation": "Nunca he...",
        "ipa": "/aɪ hæv ˈnɛvər/",
        "audioText": "I have never...",
        "example": "I have never tried sushi with spicy sauce.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-7-6",
        "term": "Life Experience",
        "translation": "Experiencia de vida",
        "ipa": "/laɪf ɪkˈspɪriəns/",
        "audioText": "Life Experience.",
        "example": "Traveling alone is an incredible life experience.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-7-7",
        "term": "Has she ever been to...?",
        "translation": "¿Ella alguna vez ha estado en...?",
        "ipa": "/hæz ʃi ˈɛvər bɪn tu/",
        "audioText": "Has she ever been to...?",
        "example": "Has she ever been to San Andres Island?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-7-b1",
        "prompt": "Yo he probado comida deliciosa en Cartagena.",
        "answer": "I have tried delicious food in Cartagena",
        "tokens": [
          "I",
          "have",
          "tried",
          "delicious",
          "food",
          "in",
          "Cartagena",
          "has",
          "eat"
        ],
        "hints": [
          "Sujeto I + auxiliar have + participio tried: 'I have tried'.",
          "Usa 'delicious food in Cartagena'."
        ]
      },
      {
        "id": "4-7-b2",
        "prompt": "Mateo nunca ha viajado en avión.",
        "answer": "Mateo has never traveled by plane",
        "tokens": [
          "Mateo",
          "has",
          "never",
          "traveled",
          "by",
          "plane",
          "have",
          "not"
        ],
        "hints": [
          "Tercera persona Mateo usa 'has never'.",
          "Viajar en avión es 'traveled by plane'."
        ]
      },
      {
        "id": "4-7-b3",
        "prompt": "¿Alguna vez has visto un concierto en vivo?",
        "answer": "Have you ever seen a live concert",
        "tokens": [
          "Have",
          "you",
          "ever",
          "seen",
          "a",
          "live",
          "concert",
          "Did",
          "saw"
        ],
        "hints": [
          "Pregunta de experiencia de vida: 'Have you ever + participio seen...'",
          "En vivo se dice 'a live concert'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-7-e1",
        "audioText": "I have lived in Bogota for five years and I love it.",
        "correctAnswer": "I have lived in Bogota for five years and I love it.",
        "options": [
          "I have lived in Bogota for five years and I love it.",
          "I have lived in Cali for five years and I love it.",
          "I lived in Bogota for five years and I loved it."
        ]
      },
      {
        "id": "4-7-e2",
        "audioText": "Have you ever climbed a volcano in Colombia?",
        "correctAnswer": "Have you ever climbed a volcano in Colombia?",
        "options": [
          "Have you ever climbed a volcano in Colombia?",
          "Did you ever climb a volcano in Colombia?",
          "Has he ever climbed a volcano in Colombia?"
        ]
      },
      {
        "id": "4-7-e3",
        "audioText": "Sofia has never eaten spicy Mexican tacos before.",
        "correctAnswer": "Sofia has never eaten spicy Mexican tacos before.",
        "options": [
          "Sofia has never eaten spicy Mexican tacos before.",
          "Sofia has already eaten spicy Mexican tacos before.",
          "Mateo has never eaten spicy Mexican tacos before."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-8",
    "badgeName": "Time Tracker",
    "badgeEmoji": "⏳",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-8-1",
        "term": "Already (Earlier than expected)",
        "translation": "Ya (Acción completada con éxito)",
        "ipa": "/ɔlˈrɛdi/",
        "audioText": "Already.",
        "example": "I have already finished my English project.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-8-2",
        "term": "Yet (In negatives and questions)",
        "translation": "Aún no / Ya (al final de frase)",
        "ipa": "/jɛt/",
        "audioText": "Yet.",
        "example": "Have you watched the new episode yet?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-8-3",
        "term": "Just (A very short time ago)",
        "translation": "Acabar de (Hace unos instantes)",
        "ipa": "/dʒʌst/",
        "audioText": "Just.",
        "example": "I have just received your WhatsApp message.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-8-4",
        "term": "For (Duration) / Since (Starting point)",
        "translation": "Por / Desde",
        "ipa": "/fɔr / sɪns/",
        "audioText": "For. Since.",
        "example": "I have studied English since 2022.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-8-5",
        "term": "Finish homework",
        "translation": "Terminar la tarea",
        "ipa": "/ˈfɪnɪʃ ˈhoʊmˌwɜrk/",
        "audioText": "Finish homework.",
        "example": "I have already finished my homework.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-6",
        "term": "Pack the suitcase",
        "translation": "Empacar la maleta",
        "ipa": "/pæk ðə ˈsutˌkeɪs/",
        "audioText": "Pack the suitcase.",
        "example": "Have you packed your suitcase yet?",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-8-7",
        "term": "Not yet",
        "translation": "Todavía no",
        "ipa": "/nɑt jɛt/",
        "audioText": "Not yet.",
        "example": "Is lunch ready? - Not yet!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-8-b1",
        "prompt": "Ya he limpiado mi cuarto y organizado mis libros.",
        "answer": "I have already cleaned my room and organized my books",
        "tokens": [
          "I",
          "have",
          "already",
          "cleaned",
          "my",
          "room",
          "and",
          "organized",
          "my",
          "books",
          "yet",
          "am"
        ],
        "hints": [
          "'Already' se ubica entre 'have' y el participio: 'have already cleaned'.",
          "Usa 'and organized my books'."
        ]
      },
      {
        "id": "4-8-b2",
        "prompt": "Nosotros todavía no hemos recibido los resultados del examen.",
        "answer": "We have not received the exam results yet",
        "tokens": [
          "We",
          "have",
          "not",
          "received",
          "the",
          "exam",
          "results",
          "yet",
          "already",
          "did"
        ],
        "hints": [
          "En oraciones negativas 'yet' va al final de la oración.",
          "Usa 'We have not received the exam results yet'."
        ]
      },
      {
        "id": "4-8-b3",
        "prompt": "¿Ya compraste las entradas para el concierto?",
        "answer": "Have you bought the concert tickets yet",
        "tokens": [
          "Have",
          "you",
          "bought",
          "the",
          "concert",
          "tickets",
          "yet",
          "Did",
          "buy"
        ],
        "hints": [
          "Pregunta en Presente Perfecto con yet al final: 'Have you bought... yet'.",
          "Entradas de concierto = 'the concert tickets'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-8-e1",
        "audioText": "I have just sent the presentation file to the teacher.",
        "correctAnswer": "I have just sent the presentation file to the teacher.",
        "options": [
          "I have just sent the presentation file to the teacher.",
          "I have already received the presentation file from the teacher.",
          "I have not sent the presentation file to the teacher yet."
        ]
      },
      {
        "id": "4-8-e2",
        "audioText": "We have lived in this neighborhood since we were kids.",
        "correctAnswer": "We have lived in this neighborhood since we were kids.",
        "options": [
          "We have lived in this neighborhood since we were kids.",
          "We have lived in this neighborhood for two months.",
          "They have lived in this neighborhood since last year."
        ]
      },
      {
        "id": "4-8-e3",
        "audioText": "Have you completed your daily English mission yet?",
        "correctAnswer": "Have you completed your daily English mission yet?",
        "options": [
          "Have you completed your daily English mission yet?",
          "Did you complete your daily English mission today?",
          "Have you completed your weekly English mission yet?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-9",
    "badgeName": "Email Diplomat",
    "badgeEmoji": "✉️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-9-1",
        "term": "Dear Mr. / Ms. (Formal greeting)",
        "translation": "Estimado/a Sr./Sra. (Saludo formal)",
        "ipa": "/dɪr ˈmɪstər / mɪz/",
        "audioText": "Dear Mr. Dear Ms.",
        "example": "Dear Ms. Martinez, I am writing to ask about the course.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-2",
        "term": "I am writing to inquire about...",
        "translation": "Le escribo para consultar sobre... (Apertura formal)",
        "ipa": "/aɪ æm ˈraɪtɪŋ tu ɪnˈkwaɪər əˈbaʊt/",
        "audioText": "I am writing to inquire about...",
        "example": "I am writing to inquire about the scholarship requirements.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-9-3",
        "term": "Subject line",
        "translation": "Línea de asunto",
        "ipa": "/ˈsʌbdʒɪkt laɪn/",
        "audioText": "Subject line.",
        "example": "Always write a clear and polite subject line.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-4",
        "term": "Please find attached",
        "translation": "Adjunto encontrará...",
        "ipa": "/pliz faɪnd əˈtætʃt/",
        "audioText": "Please find attached.",
        "example": "Please find attached my completed homework assignment.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-9-5",
        "term": "Best regards / Sincerely",
        "translation": "Cordialmente / Atentamente (Despedida formal)",
        "ipa": "/bɛst rɪˈɡɑrdz / sɪnˈsɪrli/",
        "audioText": "Best regards. Sincerely.",
        "example": "Best regards, Nicolas Hernandez.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-9-6",
        "term": "Looking forward to hearing from you",
        "translation": "Quedo atento a su pronta respuesta",
        "ipa": "/ˈlʊkɪŋ ˈfɔrwərd tu ˈhɪrɪŋ frəm ju/",
        "audioText": "Looking forward to hearing from you.",
        "example": "Looking forward to hearing from you soon.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-9-7",
        "term": "Formal vs Informal text",
        "translation": "Texto formal vs Mensaje informal",
        "ipa": "/ˈfɔrməl ˈvɜrsəs ɪnˈfɔrməl/",
        "audioText": "Formal versus informal.",
        "example": "Use formal email for teachers and informal DM for friends.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-9-b1",
        "prompt": "Le escribo para solicitar información sobre el campamento.",
        "answer": "I am writing to request information about the camp",
        "tokens": [
          "I",
          "am",
          "writing",
          "to",
          "request",
          "information",
          "about",
          "the",
          "camp",
          "write",
          "for"
        ],
        "hints": [
          "Fórmula formal de apertura: 'I am writing to request...'",
          "Usa 'information about the camp'."
        ]
      },
      {
        "id": "4-9-b2",
        "prompt": "No olvide revisar el archivo PDF adjunto.",
        "answer": "Do not forget to check the attached PDF file",
        "tokens": [
          "Do",
          "not",
          "forget",
          "to",
          "check",
          "the",
          "attached",
          "PDF",
          "file",
          "attach",
          "are"
        ],
        "hints": [
          "Imperativo negativo formal: 'Do not forget to check...'",
          "Archivo adjunto = 'the attached PDF file'."
        ]
      },
      {
        "id": "4-9-b3",
        "prompt": "¿Podría enviarme los horarios de clase por favor?",
        "answer": "Could you please send me the class schedule",
        "tokens": [
          "Could",
          "you",
          "please",
          "send",
          "me",
          "the",
          "class",
          "schedule",
          "Can",
          "sending"
        ],
        "hints": [
          "Petición de máxima cortesía formal con 'Could you please...'",
          "Horarios de clase = 'the class schedule'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-9-e1",
        "audioText": "Please find attached my presentation slides for tomorrow's meeting.",
        "correctAnswer": "Please find attached my presentation slides for tomorrow's meeting.",
        "options": [
          "Please find attached my presentation slides for tomorrow's meeting.",
          "Please find attached my homework assignment for tomorrow's class.",
          "Please send attached my presentation slides for tomorrow's meeting."
        ]
      },
      {
        "id": "4-9-e2",
        "audioText": "I am looking forward to hearing from you at your earliest convenience.",
        "correctAnswer": "I am looking forward to hearing from you at your earliest convenience.",
        "options": [
          "I am looking forward to hearing from you at your earliest convenience.",
          "I am looking forward to meeting you at your earliest convenience.",
          "We are looking forward to receiving your response soon."
        ]
      },
      {
        "id": "4-9-e3",
        "audioText": "Could you please confirm if the English workshop is on Thursday?",
        "correctAnswer": "Could you please confirm if the English workshop is on Thursday?",
        "options": [
          "Could you please confirm if the English workshop is on Thursday?",
          "Could you please confirm if the English class is on Tuesday?",
          "Can you tell me if the English workshop is on Thursday?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-basic-4-10",
    "badgeName": "Youth Leader",
    "badgeEmoji": "🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "4-10-1",
        "term": "Leadership Pitch",
        "translation": "Discurso de liderazgo",
        "ipa": "/ˈlidərˌʃɪp pɪtʃ/",
        "audioText": "Leadership Pitch.",
        "example": "Welcome to my youth leadership project pitch.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-2",
        "term": "Inspire & Motivate",
        "translation": "Inspirar y Motivar",
        "ipa": "/ɪnˈspaɪər ænd ˈmoʊtəˌveɪt/",
        "audioText": "Inspire and Motivate.",
        "example": "Great leaders inspire and motivate their community.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-3",
        "term": "Positive Impact",
        "translation": "Impacto positivo",
        "ipa": "/ˈpɑzətɪv ˈɪmpækt/",
        "audioText": "Positive Impact.",
        "example": "Our project creates a positive impact for Colombian youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-4",
        "term": "Solve problems",
        "translation": "Resolver problemas",
        "ipa": "/sɑlv ˈprɑbləmz/",
        "audioText": "Solve problems.",
        "example": "Technology helps teenagers solve real-world problems.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-5",
        "term": "Level 4 Capstone Graduate",
        "translation": "Graduado del Proyecto Capstone Nivel 4",
        "ipa": "/ˈkæpˌstoʊn ˈɡrædʒuɪt/",
        "audioText": "Level Four Capstone Graduate.",
        "example": "Congratulations, you are now a Level 4 Master communicator!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "4-10-6",
        "term": "To sum up / In summary",
        "translation": "Para resumir / En resumen",
        "ipa": "/tu sʌm ʌp / ɪn ˈsʌməri/",
        "audioText": "To sum up. In summary.",
        "example": "To sum up, our youth initiative is ready to launch.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "4-10-7",
        "term": "Thank you for your attention",
        "translation": "Muchas gracias por su atención",
        "ipa": "/θæŋk ju fɔr jʊər əˈtɛnʃən/",
        "audioText": "Thank you for your attention.",
        "example": "Thank you for your attention and support.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "4-10-b1",
        "prompt": "Nuestro proyecto juvenil busca generar un impacto positivo.",
        "answer": "Our youth project aims to create a positive impact",
        "tokens": [
          "Our",
          "youth",
          "project",
          "aims",
          "to",
          "create",
          "a",
          "positive",
          "impact",
          "have",
          "goal"
        ],
        "hints": [
          "Usa 'Our youth project aims to...'",
          "Usa 'create a positive impact'."
        ]
      },
      {
        "id": "4-10-b2",
        "prompt": "No podemos ignorar los desafíos de nuestra comunidad.",
        "answer": "We cannot ignore the challenges of our community",
        "tokens": [
          "We",
          "cannot",
          "ignore",
          "the",
          "challenges",
          "of",
          "our",
          "community",
          "do",
          "not"
        ],
        "hints": [
          "Incapacidad moral con cannot: 'We cannot ignore...'",
          "Usa 'the challenges of our community'."
        ]
      },
      {
        "id": "4-10-b3",
        "prompt": "¿Están listos para unirse a nuestra iniciativa?",
        "answer": "Are you ready to join our youth initiative",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "join",
          "our",
          "youth",
          "initiative",
          "Do",
          "will"
        ],
        "hints": [
          "Empieza con la pregunta de invitación: 'Are you ready to join...'",
          "Termina con 'our youth initiative'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "4-10-e1",
        "audioText": "Welcome to my capstone leadership presentation for Maven English.",
        "correctAnswer": "Welcome to my capstone leadership presentation for Maven English.",
        "options": [
          "Welcome to my capstone leadership presentation for Maven English.",
          "Welcome to my final English speech for Maven English.",
          "Welcome to our class leadership project for Maven English."
        ]
      },
      {
        "id": "4-10-e2",
        "audioText": "Our main goal is to empower teenagers through technology and language.",
        "correctAnswer": "Our main goal is to empower teenagers through technology and language.",
        "options": [
          "Our main goal is to empower teenagers through technology and language.",
          "Our main goal is to help teenagers through music and language.",
          "Their main goal is to empower teenagers through sports and language."
        ]
      },
      {
        "id": "4-10-e3",
        "audioText": "To sum up, thank you everyone for your time and enthusiastic support.",
        "correctAnswer": "To sum up, thank you everyone for your time and enthusiastic support.",
        "options": [
          "To sum up, thank you everyone for your time and enthusiastic support.",
          "In conclusion, thank you everyone for your feedback and support.",
          "To sum up, thank you teacher for your time and great support."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-1",
    "badgeName": "Bucket Lister",
    "badgeEmoji": "🌍",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-1-1",
        "term": "Have you ever...?",
        "translation": "¿Alguna vez has...?",
        "ipa": "/hæv ju ˈɛvər/",
        "audioText": "Have you ever...?",
        "example": "Have you ever traveled on an airplane?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-1-2",
        "term": "I have already seen",
        "translation": "Ya he visto (Acción completada)",
        "ipa": "/aɪ hæv ɔlˈrɛdi sin/",
        "audioText": "I have already seen.",
        "example": "I have already seen that movie three times.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-1-3",
        "term": "I haven't tried it yet",
        "translation": "Aún no lo he probado",
        "ipa": "/aɪ ˈhævənt traɪd ɪt jɛt/",
        "audioText": "I haven't tried it yet.",
        "example": "I haven't tried rock climbing yet.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-1-4",
        "term": "Bucket list",
        "translation": "Lista de cosas por hacer antes de morir / Metas de vida",
        "ipa": "/ˈbʌkɪt lɪst/",
        "audioText": "Bucket list.",
        "example": "Visiting Tokyo is on my bucket list.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-1-5",
        "term": "Extreme sport",
        "translation": "Deporte extremo",
        "ipa": "/ɪkˈstrim spɔrt/",
        "audioText": "Extreme sport.",
        "example": "Rafting in San Gil is an extreme sport.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-1-6",
        "term": "Achieve a goal",
        "translation": "Alcanzar una meta",
        "ipa": "/əˈtʃiv ə ɡoʊl/",
        "audioText": "Achieve a goal.",
        "example": "We worked hard to achieve our goal.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-1-7",
        "term": "Memorable experience",
        "translation": "Experiencia memorable",
        "ipa": "/ˈmɛmərəbəl ɪkˈspɪriəns/",
        "audioText": "Memorable experience.",
        "example": "Our trip to Tayrona was a memorable experience.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-1-b1",
        "prompt": "Ya he visitado tres ciudades increíbles en Colombia.",
        "answer": "I have already visited three incredible cities in Colombia",
        "tokens": [
          "I",
          "have",
          "already",
          "visited",
          "three",
          "incredible",
          "cities",
          "in",
          "Colombia",
          "visit",
          "yet"
        ],
        "hints": [
          "Estructura: have + already + participio visited.",
          "Usa 'three incredible cities in Colombia'."
        ]
      },
      {
        "id": "5-1-b2",
        "prompt": "Nosotros todavía no hemos probado la comida exótica.",
        "answer": "We have not tried exotic food yet",
        "tokens": [
          "We",
          "have",
          "not",
          "tried",
          "exotic",
          "food",
          "yet",
          "already",
          "did"
        ],
        "hints": [
          "En negativo 'yet' va al final.",
          "Usa 'We have not tried exotic food yet'."
        ]
      },
      {
        "id": "5-1-b3",
        "prompt": "¿Alguna vez has ganado una medalla en un torneo?",
        "answer": "Have you ever won a medal in a tournament",
        "tokens": [
          "Have",
          "you",
          "ever",
          "won",
          "a",
          "medal",
          "in",
          "a",
          "tournament",
          "Did",
          "win"
        ],
        "hints": [
          "Pregunta con 'Have you ever won...'",
          "Termina con 'a medal in a tournament'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-1-e1",
        "audioText": "Have you ever tried rafting or paragliding in Santander?",
        "correctAnswer": "Have you ever tried rafting or paragliding in Santander?",
        "options": [
          "Have you ever tried rafting or paragliding in Santander?",
          "Have you ever tried surfing or paragliding in Santander?",
          "Did you try rafting or paragliding in Santander?"
        ]
      },
      {
        "id": "5-1-e2",
        "audioText": "I have already accomplished two of my main bucket list goals.",
        "correctAnswer": "I have already accomplished two of my main bucket list goals.",
        "options": [
          "I have already accomplished two of my main bucket list goals.",
          "I have not accomplished two of my main bucket list goals yet.",
          "She has already accomplished three of her main bucket list goals."
        ]
      },
      {
        "id": "5-1-e3",
        "audioText": "Mateo has never traveled outside of Colombia before.",
        "correctAnswer": "Mateo has never traveled outside of Colombia before.",
        "options": [
          "Mateo has never traveled outside of Colombia before.",
          "Mateo has already traveled outside of Colombia before.",
          "Nicolas has never traveled outside of Colombia before."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-2",
    "badgeName": "Flow Statesman",
    "badgeEmoji": "🌊",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-2-1",
        "term": "Present Perfect Continuous (have/has been -ING)",
        "translation": "Presente Perfecto Continuo: Actividad continua reciente",
        "ipa": "/ˈprɛzənt ˈpɜrfɪkt kənˈtɪnjuəs/",
        "audioText": "Present Perfect Continuous.",
        "example": "I have been learning English for two years.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-2-2",
        "term": "How long have you been...?",
        "translation": "¿Cuánto tiempo llevas...?",
        "ipa": "/haʊ lɔŋ hæv ju bɪn/",
        "audioText": "How long have you been...?",
        "example": "How long have you been playing the guitar?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-2-3",
        "term": "Lately / Recently",
        "translation": "Últimamente / Recientemente",
        "ipa": "/ˈleɪtli / ˈrisəntli/",
        "audioText": "Lately. Recently.",
        "example": "I have been sleeping late recently.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-2-4",
        "term": "Coding & Designing",
        "translation": "Programando y Diseñando",
        "ipa": "/ˈkoʊdɪŋ ænd dɪˈzaɪnɪŋ/",
        "audioText": "Coding and Designing.",
        "example": "She has been coding video games all week.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-2-5",
        "term": "Training hard",
        "translation": "Entrenando duro",
        "ipa": "/ˈtreɪnɪŋ hɑrd/",
        "audioText": "Training hard.",
        "example": "They have been training hard for the championship.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-2-6",
        "term": "All day / All morning",
        "translation": "Todo el día / Toda la mañana",
        "ipa": "/ɔl deɪ / ɔl ˈmɔrnɪŋ/",
        "audioText": "All day. All morning.",
        "example": "It has been raining all day in Bogota.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-2-7",
        "term": "Exhausted but happy",
        "translation": "Agotado pero feliz",
        "ipa": "/ɪɡˈzɔstɪd bʌt ˈhæpi/",
        "audioText": "Exhausted but happy.",
        "example": "I am exhausted because I have been running.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-2-b1",
        "prompt": "He estado practicando guitarra toda la tarde.",
        "answer": "I have been practicing guitar all afternoon",
        "tokens": [
          "I",
          "have",
          "been",
          "practicing",
          "guitar",
          "all",
          "afternoon",
          "am",
          "practiced"
        ],
        "hints": [
          "Estructura: have been + verbo-ing: 'I have been practicing'.",
          "Usa 'guitar all afternoon'."
        ]
      },
      {
        "id": "5-2-b2",
        "prompt": "Ella no ha estado durmiendo bien últimamente.",
        "answer": "She has not been sleeping well lately",
        "tokens": [
          "She",
          "has",
          "not",
          "been",
          "sleeping",
          "well",
          "lately",
          "is",
          "have"
        ],
        "hints": [
          "Negación: 'has not been sleeping'.",
          "Últimamente es 'lately'."
        ]
      },
      {
        "id": "5-2-b3",
        "prompt": "¿Cuánto tiempo llevas aprendiendo programación?",
        "answer": "How long have you been learning programming",
        "tokens": [
          "How",
          "long",
          "have",
          "you",
          "been",
          "learning",
          "programming",
          "are",
          "did"
        ],
        "hints": [
          "Pregunta de duración: 'How long have you been learning...'",
          "Programación = 'programming'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-2-e1",
        "audioText": "How long have you been studying English at Maven English Academy?",
        "correctAnswer": "How long have you been studying English at Maven English Academy?",
        "options": [
          "How long have you been studying English at Maven English Academy?",
          "How long have you been teaching English at Maven English Academy?",
          "How long have you studied English at Maven English Academy?"
        ]
      },
      {
        "id": "5-2-e2",
        "audioText": "My friends and I have been designing a mobile app all weekend.",
        "correctAnswer": "My friends and I have been designing a mobile app all weekend.",
        "options": [
          "My friends and I have been designing a mobile app all weekend.",
          "My friends and I have been playing a mobile game all weekend.",
          "My brother and I have been designing a website all weekend."
        ]
      },
      {
        "id": "5-2-e3",
        "audioText": "It has been raining constantly in the mountains since morning.",
        "correctAnswer": "It has been raining constantly in the mountains since morning.",
        "options": [
          "It has been raining constantly in the mountains since morning.",
          "It has been snowing constantly in the mountains since morning.",
          "It was raining constantly in the mountains yesterday."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-3",
    "badgeName": "Action Reporter",
    "badgeEmoji": "🎬",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-3-1",
        "term": "Past Continuous (was/were + -ING)",
        "translation": "Pasado Continuo: Acción en progreso en el pasado",
        "ipa": "/pæst kənˈtɪnjuəs/",
        "audioText": "Past Continuous.",
        "example": "I was studying when the lights went out.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-3-2",
        "term": "While / As",
        "translation": "Mientras (Dos acciones simultáneas)",
        "ipa": "/waɪl / æz/",
        "audioText": "While. As.",
        "example": "While I was cooking, my sister was listening to music.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-3-3",
        "term": "When (Sudden interruption)",
        "translation": "Cuando (Interrupción repentina)",
        "ipa": "/wɛn/",
        "audioText": "When.",
        "example": "I was skating when I dropped my phone.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-3-4",
        "term": "Suddenly",
        "translation": "De repente",
        "ipa": "/ˈsʌdənli/",
        "audioText": "Suddenly.",
        "example": "Suddenly, it started raining heavily.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-3-5",
        "term": "Hang out with friends",
        "translation": "Parchar / Pasar el rato con amigos",
        "ipa": "/hæŋ aʊt wɪð frɛndz/",
        "audioText": "Hang out with friends.",
        "example": "We were hanging out at the mall yesterday.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-3-6",
        "term": "Power outage / Blackout",
        "translation": "Corte de luz / Apagón",
        "ipa": "/ˈpaʊər ˈaʊtɪdʒ / ˈblækˌaʊt/",
        "audioText": "Power outage. Blackout.",
        "example": "There was a sudden power outage during class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-3-7",
        "term": "What were you doing when...?",
        "translation": "¿Qué estabas haciendo cuando...?",
        "ipa": "/wʌt wɜr ju ˈduɪŋ wɛn/",
        "audioText": "What were you doing when...?",
        "example": "What were you doing when the earthquake happened?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-3-b1",
        "prompt": "Estaba haciendo tareas cuando se fue la luz.",
        "answer": "I was doing homework when the power went out",
        "tokens": [
          "I",
          "was",
          "doing",
          "homework",
          "when",
          "the",
          "power",
          "went",
          "out",
          "did",
          "while"
        ],
        "hints": [
          "Acción en progreso: 'I was doing homework'.",
          "Interrupción con when: 'when the power went out'."
        ]
      },
      {
        "id": "5-3-b2",
        "prompt": "Ellos no estaban prestando atención mientras el profesor explicaba.",
        "answer": "They were not paying attention while the teacher was explaining",
        "tokens": [
          "They",
          "were",
          "not",
          "paying",
          "attention",
          "while",
          "the",
          "teacher",
          "was",
          "explaining",
          "did",
          "when"
        ],
        "hints": [
          "Acciones simultáneas con while.",
          "Usa 'They were not paying attention while the teacher was explaining'."
        ]
      },
      {
        "id": "5-3-b3",
        "prompt": "¿Qué estabas haciendo a las ocho anoche?",
        "answer": "What were you doing at eight last night",
        "tokens": [
          "What",
          "were",
          "you",
          "doing",
          "at",
          "eight",
          "last",
          "night",
          "did",
          "was"
        ],
        "hints": [
          "Pregunta en pasado continuo: 'What were you doing...'",
          "Termina con 'at eight last night'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-3-e1",
        "audioText": "I was walking home from school when it suddenly started to pour rain.",
        "correctAnswer": "I was walking home from school when it suddenly started to pour rain.",
        "options": [
          "I was walking home from school when it suddenly started to pour rain.",
          "I was taking the bus home when it suddenly started to pour rain.",
          "I was walking home from the gym when it suddenly started to pour rain."
        ]
      },
      {
        "id": "5-3-e2",
        "audioText": "While my brother was playing video games, I was editing a video.",
        "correctAnswer": "While my brother was playing video games, I was editing a video.",
        "options": [
          "While my brother was playing video games, I was editing a video.",
          "While my sister was playing video games, I was editing a video.",
          "While my brother was studying, I was editing a video."
        ]
      },
      {
        "id": "5-3-e3",
        "audioText": "What were you watching on TV when I called you earlier?",
        "correctAnswer": "What were you watching on TV when I called you earlier?",
        "options": [
          "What were you watching on TV when I called you earlier?",
          "What were you playing on PC when I called you earlier?",
          "What did you watch on TV when I called you earlier?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-4",
    "badgeName": "Nostalgia Explorer",
    "badgeEmoji": "📻",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-4-1",
        "term": "Used to (Past habits that changed)",
        "translation": "Solía / Antes solía (Hábitos del pasado)",
        "ipa": "/just tu/",
        "audioText": "Used to.",
        "example": "I used to play with toy cars when I was a kid.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-4-2",
        "term": "Didn't use to",
        "translation": "No solía (Hábito que no existía antes)",
        "ipa": "/ˈdɪdənt juz tu/",
        "audioText": "Didn't use to.",
        "example": "I didn't use to like vegetables when I was little.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-4-3",
        "term": "Did you use to...?",
        "translation": "¿Solías...?",
        "ipa": "/dɪd ju juz tu/",
        "audioText": "Did you use to...?",
        "example": "Did you use to live in another city?",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-4-4",
        "term": "Childhood memories",
        "translation": "Recuerdos de infancia",
        "ipa": "/ˈtʃaɪldˌhʊd ˈmɛməriz/",
        "audioText": "Childhood memories.",
        "example": "Playing hide and seek is one of my best childhood memories.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-4-5",
        "term": "Neighborhood games",
        "translation": "Juegos de barrio / de cuadra",
        "ipa": "/ˈneɪbərˌhʊd ɡeɪmz/",
        "audioText": "Neighborhood games.",
        "example": "We used to play street soccer until night.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-4-6",
        "term": "Grow up",
        "translation": "Crecer / Criarse",
        "ipa": "/ɡroʊ ʌp/",
        "audioText": "Grow up.",
        "example": "I grew up in a quiet town in Colombia.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-4-7",
        "term": "Cartoons & Retro games",
        "translation": "Dibujos animados y Juegos retro",
        "ipa": "/kɑrˈtunz ænd ˈrɛtroʊ ɡeɪmz/",
        "audioText": "Cartoons and Retro games.",
        "example": "I used to watch morning cartoons every Saturday.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-4-b1",
        "prompt": "Solía montar en bicicleta por todo el barrio.",
        "answer": "I used to ride my bicycle all around the neighborhood",
        "tokens": [
          "I",
          "used",
          "to",
          "ride",
          "my",
          "bicycle",
          "all",
          "around",
          "the",
          "neighborhood",
          "use",
          "riding"
        ],
        "hints": [
          "Estructura: 'used to + verbo base ride'.",
          "Usa 'all around the neighborhood'."
        ]
      },
      {
        "id": "5-4-b2",
        "prompt": "Ella no solía escuchar música en inglés cuando era pequeña.",
        "answer": "She did not use to listen to English music when she was little",
        "tokens": [
          "She",
          "did",
          "not",
          "use",
          "to",
          "listen",
          "to",
          "English",
          "music",
          "when",
          "she",
          "was",
          "little",
          "used",
          "is"
        ],
        "hints": [
          "En negativo con did not el verbo pierde la -d: 'did not use to'.",
          "Usa 'when she was little'."
        ]
      },
      {
        "id": "5-4-b3",
        "prompt": "¿Qué solías jugar en el parque con tus primos?",
        "answer": "What did you use to play at the park with your cousins",
        "tokens": [
          "What",
          "did",
          "you",
          "use",
          "to",
          "play",
          "at",
          "the",
          "park",
          "with",
          "your",
          "cousins",
          "used",
          "do"
        ],
        "hints": [
          "Pregunta: 'What did you use to play...'",
          "Termina con 'at the park with your cousins'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-4-e1",
        "audioText": "I used to watch anime cartoons every afternoon after school.",
        "correctAnswer": "I used to watch anime cartoons every afternoon after school.",
        "options": [
          "I used to watch anime cartoons every afternoon after school.",
          "I used to play video games every afternoon after school.",
          "I watch anime cartoons every afternoon after school."
        ]
      },
      {
        "id": "5-4-e2",
        "audioText": "We did not use to have high speed internet when we were kids.",
        "correctAnswer": "We did not use to have high speed internet when we were kids.",
        "options": [
          "We did not use to have high speed internet when we were kids.",
          "We used to have high speed internet when we were kids.",
          "They did not use to have smartphones when they were kids."
        ]
      },
      {
        "id": "5-4-e3",
        "audioText": "Did you use to practice skateboarding before you started cycling?",
        "correctAnswer": "Did you use to practice skateboarding before you started cycling?",
        "options": [
          "Did you use to practice skateboarding before you started cycling?",
          "Did you use to practice roller skating before you started cycling?",
          "Do you practice skateboarding before you start cycling?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-5",
    "badgeName": "Dream Architect",
    "badgeEmoji": "💭",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-5-1",
        "term": "Second Conditional (If + Past Simple, WOULD + Verb)",
        "translation": "Segundo Condicional: Escenarios hipotéticos e imaginarios",
        "ipa": "/ˈsɛkənd kənˈdɪʃənəl/",
        "audioText": "Second Conditional.",
        "example": "If I won the lottery, I would travel around the world.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-5-2",
        "term": "If I were you (Giving advice)",
        "translation": "Si yo fuera tú (Consejo hipotético)",
        "ipa": "/ɪf aɪ wɜr ju/",
        "audioText": "If I were you.",
        "example": "If I were you, I would take that opportunity.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-5-3",
        "term": "I would definitely buy...",
        "translation": "Definitivamente compraría...",
        "ipa": "/aɪ wʊd ˈdɛfənətli baɪ/",
        "audioText": "I would definitely buy...",
        "example": "I would definitely buy a house near the beach.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-5-4",
        "term": "Superpower",
        "translation": "Superpoder",
        "ipa": "/ˈsupərˌpaʊər/",
        "audioText": "Superpower.",
        "example": "If I had a superpower, I would choose teleportation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-5-5",
        "term": "Hypothetical situation",
        "translation": "Situación hipotética",
        "ipa": "/ˌhaɪpəˈθɛtɪkəl ˌsɪtʃuˈeɪʃən/",
        "audioText": "Hypothetical situation.",
        "example": "It is just a fun hypothetical situation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-5-6",
        "term": "Teleport / Fly",
        "translation": "Teletransportarse / Volar",
        "ipa": "/ˈtɛləˌpɔrt / flaɪ/",
        "audioText": "Teleport. Fly.",
        "example": "I would teleport to Japan every weekend.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-5-7",
        "term": "What would you do if...?",
        "translation": "¿Qué harías si...?",
        "ipa": "/wʌt wʊd ju du ɪf/",
        "audioText": "What would you do if...?",
        "example": "What would you do if you found a million dollars?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-5-b1",
        "prompt": "Si tuviera superpoderes, volaría por todo el planeta.",
        "answer": "If I had superpowers I would fly around the planet",
        "tokens": [
          "If",
          "I",
          "had",
          "superpowers",
          "I",
          "would",
          "fly",
          "around",
          "the",
          "planet",
          "have",
          "will"
        ],
        "hints": [
          "Cláusula IF en pasado: 'If I had superpowers'.",
          "Resultado hipotético con would: 'I would fly around the planet'."
        ]
      },
      {
        "id": "5-5-b2",
        "prompt": "Si yo fuera tú, no aceptaría esa oferta sospechosa.",
        "answer": "If I were you I would not accept that suspicious offer",
        "tokens": [
          "If",
          "I",
          "were",
          "you",
          "I",
          "would",
          "not",
          "accept",
          "that",
          "suspicious",
          "offer",
          "was",
          "will"
        ],
        "hints": [
          "Usa la convención 'If I were you'.",
          "Usa 'I would not accept that suspicious offer'."
        ]
      },
      {
        "id": "5-5-b3",
        "prompt": "¿Qué harías si ganaras un viaje a Nueva York?",
        "answer": "What would you do if you won a trip to New York",
        "tokens": [
          "What",
          "would",
          "you",
          "do",
          "if",
          "you",
          "won",
          "a",
          "trip",
          "to",
          "New",
          "York",
          "will",
          "win"
        ],
        "hints": [
          "Pregunta hipotética: 'What would you do if...'",
          "Pasado 'won a trip to New York'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-5-e1",
        "audioText": "If I had more free time, I would learn how to code video games.",
        "correctAnswer": "If I had more free time, I would learn how to code video games.",
        "options": [
          "If I had more free time, I would learn how to code video games.",
          "If I have more free time, I will learn how to code video games.",
          "If I had more free time, I would learn how to play video games."
        ]
      },
      {
        "id": "5-5-e2",
        "audioText": "If I were you, I would practice speaking English every single day.",
        "correctAnswer": "If I were you, I would practice speaking English every single day.",
        "options": [
          "If I were you, I would practice speaking English every single day.",
          "If I was you, I would practice speaking English every single week.",
          "If I were you, I will practice speaking English every single day."
        ]
      },
      {
        "id": "5-5-e3",
        "audioText": "Where would you live if you could choose any city in the world?",
        "correctAnswer": "Where would you live if you could choose any city in the world?",
        "options": [
          "Where would you live if you could choose any city in the world?",
          "Where will you live if you can choose any city in the world?",
          "What would you do if you could choose any city in the world?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-6",
    "badgeName": "Passive Investigator",
    "badgeEmoji": "🏭",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-6-1",
        "term": "Passive Voice (be + Past Participle)",
        "translation": "Voz Pasiva: El objeto o resultado es el protagonista",
        "ipa": "/ˈpæsɪv vɔɪs/",
        "audioText": "Passive Voice.",
        "example": "Coffee is produced in Colombia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-6-2",
        "term": "Is made in / Are manufactured in",
        "translation": "Es hecho en / Son fabricados en",
        "ipa": "/ɪz meɪd ɪn / ɑr ˌmænjəˈfæktʃərd ɪn/",
        "audioText": "Is made in. Are manufactured in.",
        "example": "These sneakers are manufactured in Vietnam.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-6-3",
        "term": "Was discovered / Was invented",
        "translation": "Fue descubierto / Fue inventado (Pasado)",
        "ipa": "/wʌz dɪˈskʌvərd / wʌz ɪnˈvɛntɪd/",
        "audioText": "Was discovered. Was invented.",
        "example": "The airplane was invented in the 20th century.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-6-4",
        "term": "By (Agent introduction)",
        "translation": "Por (Quién realiza la acción)",
        "ipa": "/baɪ/",
        "audioText": "By.",
        "example": "The song was written by Shakira.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-6-5",
        "term": "Global trade & Production",
        "translation": "Comercio global y Producción",
        "ipa": "/ˈɡloʊbəl treɪd ænd prəˈdʌkʃən/",
        "audioText": "Global trade and Production.",
        "example": "Global trade connects producers with consumers worldwide.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-6-6",
        "term": "Export & Import",
        "translation": "Exportar e Importar",
        "ipa": "/ˈɛkspɔrt ænd ˈɪmpɔrt/",
        "audioText": "Export and Import.",
        "example": "Colombia exports world class coffee and flowers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-6-7",
        "term": "Where is it produced?",
        "translation": "¿Dónde es producido?",
        "ipa": "/wɛr ɪz ɪt prəˈdust/",
        "audioText": "Where is it produced?",
        "example": "Where is this brand of chocolate produced?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-6-b1",
        "prompt": "El mejor café del mundo es cultivado en Colombia.",
        "answer": "The best coffee in the world is grown in Colombia",
        "tokens": [
          "The",
          "best",
          "coffee",
          "in",
          "the",
          "world",
          "is",
          "grown",
          "in",
          "Colombia",
          "are",
          "grew"
        ],
        "hints": [
          "Voz pasiva presente: is + participio grown.",
          "Usa 'The best coffee in the world is grown in Colombia'."
        ]
      },
      {
        "id": "5-6-b2",
        "prompt": "Estos teléfonos inteligentes no son fabricados localmente.",
        "answer": "These smartphones are not manufactured locally",
        "tokens": [
          "These",
          "smartphones",
          "are",
          "not",
          "manufactured",
          "locally",
          "is",
          "do"
        ],
        "hints": [
          "Plural 'smartphones' usa 'are not manufactured'.",
          "Localmente = 'locally'."
        ]
      },
      {
        "id": "5-6-b3",
        "prompt": "¿Cuándo fue construida la primera línea del metro?",
        "answer": "When was the first metro line built",
        "tokens": [
          "When",
          "was",
          "the",
          "first",
          "metro",
          "line",
          "built",
          "is",
          "build"
        ],
        "hints": [
          "Pregunta pasiva en pasado: 'When was + sujeto + participio built?'",
          "Línea del metro = 'metro line'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-6-e1",
        "audioText": "Millions of flowers are exported from Colombia for Valentine's Day.",
        "correctAnswer": "Millions of flowers are exported from Colombia for Valentine's Day.",
        "options": [
          "Millions of flowers are exported from Colombia for Valentine's Day.",
          "Millions of fruits are exported from Colombia for Valentine's Day.",
          "Thousands of flowers were exported from Colombia for Valentine's Day."
        ]
      },
      {
        "id": "5-6-e2",
        "audioText": "This famous painting was created by Fernando Botero in Medellin.",
        "correctAnswer": "This famous painting was created by Fernando Botero in Medellin.",
        "options": [
          "This famous painting was created by Fernando Botero in Medellin.",
          "This famous sculpture was created by Fernando Botero in Bogota.",
          "This famous painting was painted by Gabriel Garcia Marquez."
        ]
      },
      {
        "id": "5-6-e3",
        "audioText": "Where are these high performance gaming microchips produced?",
        "correctAnswer": "Where are these high performance gaming microchips produced?",
        "options": [
          "Where are these high performance gaming microchips produced?",
          "Where were these high performance gaming microchips produced?",
          "When are these high performance gaming microchips produced?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-7",
    "badgeName": "Quote Master",
    "badgeEmoji": "💬",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-7-1",
        "term": "Reported Speech (Tense backshift)",
        "translation": "Discurso Indirecto: Contar lo que otra persona dijo",
        "ipa": "/rɪˈpɔrtɪd spitʃ/",
        "audioText": "Reported Speech.",
        "example": "She said that she loved listening to music.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-7-2",
        "term": "Said that / Told me that",
        "translation": "Dijo que / Me dijo que",
        "ipa": "/sɛd ðæt / toʊld mi ðæt/",
        "audioText": "Said that. Told me that.",
        "example": "Mateo told me that he was traveling this weekend.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-7-3",
        "term": "Asked if / Asked whether",
        "translation": "Preguntó si...",
        "ipa": "/æskt ɪf / æskt ˈwɛðər/",
        "audioText": "Asked if. Asked whether.",
        "example": "She asked if I had finished the homework.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-7-4",
        "term": "Gossip & News",
        "translation": "Chismes y Noticias",
        "ipa": "/ˈɡɑsɪp ænd nuz/",
        "audioText": "Gossip and News.",
        "example": "Social media spreads news and gossip very fast.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-7-5",
        "term": "Direct Quote vs Reported",
        "translation": "Cita directa vs Mensaje reportado",
        "ipa": "/daɪˈrɛkt kwoʊt/",
        "audioText": "Direct Quote.",
        "example": "'I am tired' ➔ She said she was tired.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-7-6",
        "term": "Confirm information",
        "translation": "Confirmar información",
        "ipa": "/kənˈfɜrm ˌɪnfərˈmeɪʃən/",
        "audioText": "Confirm information.",
        "example": "Always confirm information with verified sources.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-7-7",
        "term": "What did they say?",
        "translation": "¿Qué dijeron ellos?",
        "ipa": "/wʌt dɪd ðeɪ seɪ/",
        "audioText": "What did they say?",
        "example": "What did the teacher say about tomorrow's test?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-7-b1",
        "prompt": "Ella me dijo que estaba muy emocionada por el concierto.",
        "answer": "She told me that she was very excited about the concert",
        "tokens": [
          "She",
          "told",
          "me",
          "that",
          "she",
          "was",
          "very",
          "excited",
          "about",
          "the",
          "concert",
          "said",
          "is"
        ],
        "hints": [
          "Con objeto indirecto (me) usa 'told me that'.",
          "Presente 'am' retrocede al pasado 'was'."
        ]
      },
      {
        "id": "5-7-b2",
        "prompt": "Ellos no dijeron que la reunión estaba cancelada.",
        "answer": "They did not say that the meeting was canceled",
        "tokens": [
          "They",
          "did",
          "not",
          "say",
          "that",
          "the",
          "meeting",
          "was",
          "canceled",
          "told",
          "is"
        ],
        "hints": [
          "Negación: 'They did not say that...'",
          "Usa 'the meeting was canceled'."
        ]
      },
      {
        "id": "5-7-b3",
        "prompt": "¿El profesor te preguntó si habías terminado el proyecto?",
        "answer": "Did the teacher ask if you had finished the project",
        "tokens": [
          "Did",
          "the",
          "teacher",
          "ask",
          "if",
          "you",
          "had",
          "finished",
          "the",
          "project",
          "have",
          "said"
        ],
        "hints": [
          "Pregunta indirecta: 'Did the teacher ask if...'",
          "Pasado perfecto 'you had finished the project'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-7-e1",
        "audioText": "Sofia said that she was going to study graphic design at university.",
        "correctAnswer": "Sofia said that she was going to study graphic design at university.",
        "options": [
          "Sofia said that she was going to study graphic design at university.",
          "Sofia told that she was going to study graphic design at university.",
          "Sofia said that she was studying graphic design at school."
        ]
      },
      {
        "id": "5-7-e2",
        "audioText": "The coach told us that we had to arrive thirty minutes early.",
        "correctAnswer": "The coach told us that we had to arrive thirty minutes early.",
        "options": [
          "The coach told us that we had to arrive thirty minutes early.",
          "The coach said us that we had to arrive thirty minutes early.",
          "The teacher told us that we had to arrive twenty minutes early."
        ]
      },
      {
        "id": "5-7-e3",
        "audioText": "Did Nicolas ask you whether the English evaluation was difficult?",
        "correctAnswer": "Did Nicolas ask you whether the English evaluation was difficult?",
        "options": [
          "Did Nicolas ask you whether the English evaluation was difficult?",
          "Did Nicolas tell you that the English evaluation was difficult?",
          "Did Mateo ask you whether the math evaluation was difficult?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-8",
    "badgeName": "Clause Connector",
    "badgeEmoji": "🔗",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-8-1",
        "term": "Relative Pronouns: Who (People) & Which/That (Things)",
        "translation": "Pronombres Relativos: Who (personas) y Which/That (cosas)",
        "ipa": "/ˈrɛlətɪv ˈproʊˌnaʊnz/",
        "audioText": "Relative Pronouns.",
        "example": "She is the teacher who helped me speak English.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-8-2",
        "term": "Where (Places) & When (Time)",
        "translation": "Donde (Lugares) y Cuando (Tiempo)",
        "ipa": "/wɛr / wɛn/",
        "audioText": "Where. When.",
        "example": "This is the cafe where we met last year.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-8-3",
        "term": "Whose (Possession)",
        "translation": "Cuyo/a (Posesión)",
        "ipa": "/huz/",
        "audioText": "Whose.",
        "example": "He is the student whose project won first prize.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-8-4",
        "term": "Essential description",
        "translation": "Descripción esencial",
        "ipa": "/ɪˈsɛnʃəl dɪˈskrɪpʃən/",
        "audioText": "Essential description.",
        "example": "Relative clauses provide essential descriptions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-8-5",
        "term": "Gaming app",
        "translation": "Aplicación de juegos",
        "ipa": "/ˈɡeɪmɪŋ æp/",
        "audioText": "Gaming app.",
        "example": "This is the gaming app that everyone is downloading.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-8-6",
        "term": "Inspirational leader",
        "translation": "Líder inspirador",
        "ipa": "/ˌɪnspəˈreɪʃənəl ˈlidər/",
        "audioText": "Inspirational leader.",
        "example": "He is an inspirational leader who motivates youth.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-8-7",
        "term": "Which one is the person that...?",
        "translation": "¿Cuál es la persona que...?",
        "ipa": "/wɪtʃ wʌn ɪz ðə ˈpɜrsən ðæt/",
        "audioText": "Which one is the person that...?",
        "example": "Which one is the person that created this website?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-8-b1",
        "prompt": "Este es el parque donde mis amigos y yo entrenamos.",
        "answer": "This is the park where my friends and I train",
        "tokens": [
          "This",
          "is",
          "the",
          "park",
          "where",
          "my",
          "friends",
          "and",
          "I",
          "train",
          "which",
          "who"
        ],
        "hints": [
          "Para lugares se usa 'where': 'the park where...'",
          "Usa 'my friends and I train'."
        ]
      },
      {
        "id": "5-8-b2",
        "prompt": "Esa no es la aplicación que tiene virus.",
        "answer": "That is not the application that has viruses",
        "tokens": [
          "That",
          "is",
          "not",
          "the",
          "application",
          "that",
          "has",
          "viruses",
          "who",
          "have"
        ],
        "hints": [
          "Para cosas/apps usa 'that' o 'which'.",
          "Usa 'That is not the application that has viruses'."
        ]
      },
      {
        "id": "5-8-b3",
        "prompt": "¿Quién es el estudiante cuyo video se volvió viral?",
        "answer": "Who is the student whose video went viral",
        "tokens": [
          "Who",
          "is",
          "the",
          "student",
          "whose",
          "video",
          "went",
          "viral",
          "who",
          "which"
        ],
        "hints": [
          "Para posesión usa 'whose video': 'cuyo video'.",
          "Termina con 'went viral'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-8-e1",
        "audioText": "She is the talented designer who created the Maven English logo.",
        "correctAnswer": "She is the talented designer who created the Maven English logo.",
        "options": [
          "She is the talented designer who created the Maven English logo.",
          "She is the talented artist which created the Maven English logo.",
          "He is the talented designer who created the Maven English banner."
        ]
      },
      {
        "id": "5-8-e2",
        "audioText": "This is the online multiplayer game that all my classmates play.",
        "correctAnswer": "This is the online multiplayer game that all my classmates play.",
        "options": [
          "This is the online multiplayer game that all my classmates play.",
          "This is the online mobile app that all my classmates use.",
          "This was the online multiplayer game that my friends played."
        ]
      },
      {
        "id": "5-8-e3",
        "audioText": "Do you remember the day when we visited the science museum?",
        "correctAnswer": "Do you remember the day when we visited the science museum?",
        "options": [
          "Do you remember the day when we visited the science museum?",
          "Do you remember the place where we visited the science museum?",
          "Did you remember the day when we visited the art museum?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-9",
    "badgeName": "Deduction Detective",
    "badgeEmoji": "🔍",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-9-1",
        "term": "Must be (99% certainty - positive)",
        "translation": "Debe ser / Seguro que es (Certeza positiva)",
        "ipa": "/mʌst bi/",
        "audioText": "Must be.",
        "example": "Her lights are on, so she must be at home.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-9-2",
        "term": "Can't be (99% certainty - negative)",
        "translation": "No puede ser / Imposible que sea (Certeza negativa)",
        "ipa": "/kænt bi/",
        "audioText": "Can't be.",
        "example": "That can't be Mateo, he is in Cali today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-9-3",
        "term": "Might be / Could be (50% possibility)",
        "translation": "Podría ser / Tal vez sea (Posibilidad)",
        "ipa": "/maɪt bi / kʊd bi/",
        "audioText": "Might be. Could be.",
        "example": "Take an umbrella, it might rain later.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-9-4",
        "term": "Clues & Evidence",
        "translation": "Pistas y Evidencia",
        "ipa": "/kluz ænd ˈɛvədəns/",
        "audioText": "Clues and Evidence.",
        "example": "Detectives analyze clues and physical evidence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-9-5",
        "term": "Mystery & Puzzle",
        "translation": "Misterio y Acertijo",
        "ipa": "/ˈmɪstəri ænd ˈpʌzəl/",
        "audioText": "Mystery and Puzzle.",
        "example": "Solving this mystery requires logical thinking.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-9-6",
        "term": "Make a logical guess",
        "translation": "Hacer una deducción lógica",
        "ipa": "/meɪk ə ˈlɑdʒɪkəl ɡɛs/",
        "audioText": "Make a logical guess.",
        "example": "Look at the footprints and make a logical guess.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-9-7",
        "term": "Who could it be?",
        "translation": "¿Quién podría ser?",
        "ipa": "/hu kʊd ɪt bi/",
        "audioText": "Who could it be?",
        "example": "Someone is knocking, who could it be?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-9-b1",
        "prompt": "Ese carro debe ser muy costoso y rápido.",
        "answer": "That car must be very expensive and fast",
        "tokens": [
          "That",
          "car",
          "must",
          "be",
          "very",
          "expensive",
          "and",
          "fast",
          "can't",
          "is"
        ],
        "hints": [
          "Deducción de alta certeza: 'must be'.",
          "Usa 'very expensive and fast'."
        ]
      },
      {
        "id": "5-9-b2",
        "prompt": "Esa historia no puede ser verdad, es imposible.",
        "answer": "That story cannot be true it is impossible",
        "tokens": [
          "That",
          "story",
          "cannot",
          "be",
          "true",
          "it",
          "is",
          "impossible",
          "must",
          "are"
        ],
        "hints": [
          "Deducción negativa de imposibilidad: 'cannot be true' o 'can't be true'.",
          "Termina con 'it is impossible'."
        ]
      },
      {
        "id": "5-9-b3",
        "prompt": "¿Dónde podría estar mi billetera ahora mismo?",
        "answer": "Where could my wallet be right now",
        "tokens": [
          "Where",
          "could",
          "my",
          "wallet",
          "be",
          "right",
          "now",
          "must",
          "is"
        ],
        "hints": [
          "Pregunta de posibilidad con could: 'Where could + sujeto + be...'",
          "Usa 'right now'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-9-e1",
        "audioText": "She is wearing a lab coat and stethoscope, she must be a doctor.",
        "correctAnswer": "She is wearing a lab coat and stethoscope, she must be a doctor.",
        "options": [
          "She is wearing a lab coat and stethoscope, she must be a doctor.",
          "She is wearing a lab coat and stethoscope, she might be a nurse.",
          "She was wearing a lab coat and stethoscope, she can't be a doctor."
        ]
      },
      {
        "id": "5-9-e2",
        "audioText": "That cannot be Camilo's backpack, his bag is dark blue.",
        "correctAnswer": "That cannot be Camilo's backpack, his bag is dark blue.",
        "options": [
          "That cannot be Camilo's backpack, his bag is dark blue.",
          "That must be Camilo's backpack, his bag is dark blue.",
          "That cannot be Sofia's backpack, her bag is light blue."
        ]
      },
      {
        "id": "5-9-e3",
        "audioText": "The weather is very cloudy, it might rain during the football match.",
        "correctAnswer": "The weather is very cloudy, it might rain during the football match.",
        "options": [
          "The weather is very cloudy, it might rain during the football match.",
          "The weather is very windy, it must rain during the football match.",
          "The sky is very clear, it can't rain during the football match."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-10",
    "badgeName": "Phrasal Master",
    "badgeEmoji": "⚡",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-10-1",
        "term": "Give up (Surrender / Quit)",
        "translation": "Rendirse / Abandonar",
        "ipa": "/ɡɪv ʌp/",
        "audioText": "Give up.",
        "example": "Never give up on your biggest dreams.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-10-2",
        "term": "Find out (Discover)",
        "translation": "Averiguar / Enterarse de algo",
        "ipa": "/faɪnd aʊt/",
        "audioText": "Find out.",
        "example": "I need to find out what time the movie starts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-10-3",
        "term": "Turn on / Turn off",
        "translation": "Encender / Apagar",
        "ipa": "/tɜrn ɑn / tɜrn ɔf/",
        "audioText": "Turn on. Turn off.",
        "example": "Turn off your phone before going to sleep.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-10-4",
        "term": "Look forward to",
        "translation": "Esperar con entusiasmo / Anhelar",
        "ipa": "/lʊk ˈfɔrwərd tu/",
        "audioText": "Look forward to.",
        "example": "I look forward to meeting my friends.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-10-5",
        "term": "Hang out with",
        "translation": "Parchar / Salir a pasar el rato",
        "ipa": "/hæŋ aʊt wɪð/",
        "audioText": "Hang out with.",
        "example": "We like to hang out with our friends on Saturdays.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-10-6",
        "term": "Run out of",
        "translation": "Quedarse sin algo (batería, gasolina, tiempo)",
        "ipa": "/rʌn aʊt ʌv/",
        "audioText": "Run out of.",
        "example": "My phone ran out of battery at the mall.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-10-7",
        "term": "Keep on going",
        "translation": "Seguir adelante / Continuar",
        "ipa": "/kip ɑn ˈɡoʊɪŋ/",
        "audioText": "Keep on going.",
        "example": "Keep on going, you are almost at the finish line!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-10-b1",
        "prompt": "Nunca te rindas cuando aprendes un nuevo idioma.",
        "answer": "Never give up when you are learning a new language",
        "tokens": [
          "Never",
          "give",
          "up",
          "when",
          "you",
          "are",
          "learning",
          "a",
          "new",
          "language",
          "giving",
          "turn"
        ],
        "hints": [
          "Phrasal verb 'give up' = rendirse.",
          "Usa 'when you are learning a new language'."
        ]
      },
      {
        "id": "5-10-b2",
        "prompt": "Mi celular se quedó sin batería en el camino.",
        "answer": "My mobile phone ran out of battery on the way",
        "tokens": [
          "My",
          "mobile",
          "phone",
          "ran",
          "out",
          "of",
          "battery",
          "on",
          "the",
          "way",
          "run",
          "off"
        ],
        "hints": [
          "Pasado de run out of: 'ran out of battery'.",
          "En el camino = 'on the way'."
        ]
      },
      {
        "id": "5-10-b3",
        "prompt": "¿Quieres parchar con nosotros en el centro comercial?",
        "answer": "Do you want to hang out with us at the mall",
        "tokens": [
          "Do",
          "you",
          "want",
          "to",
          "hang",
          "out",
          "with",
          "us",
          "at",
          "the",
          "mall",
          "give",
          "turning"
        ],
        "hints": [
          "Phrasal verb 'hang out with us': parchar con nosotros.",
          "Usa 'at the mall'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-10-e1",
        "audioText": "Don't give up now, you have been making incredible progress in English.",
        "correctAnswer": "Don't give up now, you have been making incredible progress in English.",
        "options": [
          "Don't give up now, you have been making incredible progress in English.",
          "Don't look up now, you have been making incredible progress in English.",
          "Don't give in now, you are making good progress in English."
        ]
      },
      {
        "id": "5-10-e2",
        "audioText": "I need to find out where the music festival is taking place.",
        "correctAnswer": "I need to find out where the music festival is taking place.",
        "options": [
          "I need to find out where the music festival is taking place.",
          "I want to look up where the music festival is taking place.",
          "I need to find out when the food festival is taking place."
        ]
      },
      {
        "id": "5-10-e3",
        "audioText": "Please turn off the lights before you leave the computer lab.",
        "correctAnswer": "Please turn off the lights before you leave the computer lab.",
        "options": [
          "Please turn off the lights before you leave the computer lab.",
          "Please turn on the lights before you leave the computer lab.",
          "Please turn off the computers before you leave the science lab."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-11",
    "badgeName": "Diplomat Speaker",
    "badgeEmoji": "🤝",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-11-1",
        "term": "I see your point, but...",
        "translation": "Entiendo tu punto, pero... (Desacuerdo diplomático)",
        "ipa": "/aɪ si jʊər pɔɪnt bʌt/",
        "audioText": "I see your point, but...",
        "example": "I see your point, but we should consider other options.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-11-2",
        "term": "Up to a point",
        "translation": "Hasta cierto punto (Acuerdo parcial)",
        "ipa": "/ʌp tu ə pɔɪnt/",
        "audioText": "Up to a point.",
        "example": "I agree with you up to a point.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-11-3",
        "term": "On the other hand",
        "translation": "Por otra parte / Por otro lado",
        "ipa": "/ɑn ði ˈʌðər hænd/",
        "audioText": "On the other hand.",
        "example": "On the other hand, online learning saves commuting time.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "5-11-4",
        "term": "Constructive debate",
        "translation": "Debate constructivo",
        "ipa": "/kənˈstrʌktɪv dəˈbeɪt/",
        "audioText": "Constructive debate.",
        "example": "We encourage constructive debate in class.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-11-5",
        "term": "Reach a consensus",
        "translation": "Llegar a un consenso / acuerdo",
        "ipa": "/ritʃ ə kənˈsɛnsəs/",
        "audioText": "Reach a consensus.",
        "example": "The team reached a mutual consensus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-11-6",
        "term": "Nuanced perspective",
        "translation": "Perspectiva matizada / equilibrada",
        "ipa": "/ˈnuɑnst pərˈspɛktɪv/",
        "audioText": "Nuanced perspective.",
        "example": "A mature leader always offers a nuanced perspective.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-11-7",
        "term": "How do you respond to that?",
        "translation": "¿Cómo respondes a ese argumento?",
        "ipa": "/haʊ du ju rɪˈspɑnd tu ðæt/",
        "audioText": "How do you respond to that?",
        "example": "How do you respond to that counterargument?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-11-b1",
        "prompt": "Entiendo tu punto, pero debemos considerar el costo económico.",
        "answer": "I see your point but we must consider the economic cost",
        "tokens": [
          "I",
          "see",
          "your",
          "point",
          "but",
          "we",
          "must",
          "consider",
          "the",
          "economic",
          "cost",
          "disagree",
          "and"
        ],
        "hints": [
          "Frase diplomática de apertura: 'I see your point but...'",
          "Usa 'we must consider the economic cost'."
        ]
      },
      {
        "id": "5-11-b2",
        "prompt": "No estoy completamente en desacuerdo con tu propuesta.",
        "answer": "I am not completely in disagreement with your proposal",
        "tokens": [
          "I",
          "am",
          "not",
          "completely",
          "in",
          "disagreement",
          "with",
          "your",
          "proposal",
          "do",
          "point"
        ],
        "hints": [
          "Postura matizada: 'I am not completely in disagreement...'",
          "Usa 'with your proposal'."
        ]
      },
      {
        "id": "5-11-b3",
        "prompt": "¿Podemos llegar a un acuerdo antes del final de la clase?",
        "answer": "Can we reach an agreement before the end of class",
        "tokens": [
          "Can",
          "we",
          "reach",
          "an",
          "agreement",
          "before",
          "the",
          "end",
          "of",
          "class",
          "Do",
          "reaching"
        ],
        "hints": [
          "Llegar a un acuerdo = 'reach an agreement'.",
          "Termina con 'before the end of class'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-11-e1",
        "audioText": "I see your point, but social media algorithms can be addictive for teens.",
        "correctAnswer": "I see your point, but social media algorithms can be addictive for teens.",
        "options": [
          "I see your point, but social media algorithms can be addictive for teens.",
          "I agree with your point, and social media algorithms are very useful for teens.",
          "I see his point, but video game algorithms can be addictive for teens."
        ]
      },
      {
        "id": "5-11-e2",
        "audioText": "On the other hand, artificial intelligence creates exciting new jobs.",
        "correctAnswer": "On the other hand, artificial intelligence creates exciting new jobs.",
        "options": [
          "On the other hand, artificial intelligence creates exciting new jobs.",
          "On the one hand, artificial intelligence eliminates exciting new jobs.",
          "In conclusion, artificial intelligence creates dangerous new jobs."
        ]
      },
      {
        "id": "5-11-e3",
        "audioText": "How do you respond to the claim that homework should be abolished?",
        "correctAnswer": "How do you respond to the claim that homework should be abolished?",
        "options": [
          "How do you respond to the claim that homework should be abolished?",
          "Why do you agree with the claim that exams should be abolished?",
          "How did you respond to the claim that school should be abolished?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-inter-12",
    "badgeName": "Global Innovator",
    "badgeEmoji": "🌐",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "5-12-1",
        "term": "Global Problem & Solution",
        "translation": "Problema global y Solución",
        "ipa": "/ˈɡloʊbəl ˈprɑbləm ænd səˈluʃən/",
        "audioText": "Global Problem and Solution.",
        "example": "Our pitch presents an innovative solution to clean water.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-2",
        "term": "Sustainable Development",
        "translation": "Desarrollo sostenible",
        "ipa": "/səˈsteɪnəbəl dɪˈvɛləpmənt/",
        "audioText": "Sustainable Development.",
        "example": "Sustainable development protects nature for future generations.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-3",
        "term": "Keynote Presentation",
        "translation": "Discurso principal / Conferencia magistral",
        "ipa": "/ˈkiˌnoʊt ˌprɛzənˈteɪʃən/",
        "audioText": "Keynote Presentation.",
        "example": "Welcome to our Level 5 grand keynote presentation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-4",
        "term": "Collaborative Teamwork",
        "translation": "Trabajo en equipo colaborativo",
        "ipa": "/kəˈlæbərətɪv ˈtimˌwɜrk/",
        "audioText": "Collaborative Teamwork.",
        "example": "Collaborative teamwork makes big ideas possible.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-5",
        "term": "Level 5 B1 Threshold Graduate",
        "translation": "Graduado del Umbral B1 Nivel 5",
        "ipa": "/ˈlɛvəl faɪv ˈɡrædʒuɪt/",
        "audioText": "Level Five B1 Graduate.",
        "example": "You have achieved autonomous B1 fluency in English!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-6",
        "term": "Empower youth communities",
        "translation": "Empoderar comunidades juveniles",
        "ipa": "/ɪmˈpaʊər juθ kəmˈjunətiz/",
        "audioText": "Empower youth communities.",
        "example": "Our mission is to empower youth communities with English.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "5-12-7",
        "term": "Thank you for joining our mission",
        "translation": "Gracias por unirse a nuestra misión",
        "ipa": "/θæŋk ju fɔr ˈdʒɔɪnɪŋ aʊər ˈmɪʃən/",
        "audioText": "Thank you for joining our mission.",
        "example": "Thank you for joining our Maven English mission!",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "5-12-b1",
        "prompt": "Nuestra iniciativa busca empoderar a los jóvenes colombianos.",
        "answer": "Our initiative aims to empower Colombian youth",
        "tokens": [
          "Our",
          "initiative",
          "aims",
          "to",
          "empower",
          "Colombian",
          "youth",
          "empowering",
          "is"
        ],
        "hints": [
          "Usa 'Our initiative aims to empower...'",
          "Termina con 'Colombian youth'."
        ]
      },
      {
        "id": "5-12-b2",
        "prompt": "No podemos alcanzar el éxito sin un verdadero trabajo en equipo.",
        "answer": "We cannot achieve success without true teamwork",
        "tokens": [
          "We",
          "cannot",
          "achieve",
          "success",
          "without",
          "true",
          "teamwork",
          "achieving",
          "do"
        ],
        "hints": [
          "Incapacidad con cannot: 'We cannot achieve success...'",
          "Sin trabajo en equipo = 'without true teamwork'."
        ]
      },
      {
        "id": "5-12-b3",
        "prompt": "¿Están listos para transformar su comunidad con nosotros?",
        "answer": "Are you ready to transform your community with us",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "transform",
          "your",
          "community",
          "with",
          "us",
          "Do",
          "will"
        ],
        "hints": [
          "Pregunta de llamado a la acción: 'Are you ready to transform...'",
          "Termina con 'your community with us'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "5-12-e1",
        "audioText": "Welcome to our Level 5 Capstone pitch for global environmental solutions.",
        "correctAnswer": "Welcome to our Level 5 Capstone pitch for global environmental solutions.",
        "options": [
          "Welcome to our Level 5 Capstone pitch for global environmental solutions.",
          "Welcome to our Level 4 Capstone pitch for global environmental solutions.",
          "Welcome to our Level 5 Capstone speech for local environmental problems."
        ]
      },
      {
        "id": "5-12-e2",
        "audioText": "We believe that teenagers possess the creativity to solve real world challenges.",
        "correctAnswer": "We believe that teenagers possess the creativity to solve real world challenges.",
        "options": [
          "We believe that teenagers possess the creativity to solve real world challenges.",
          "They believe that adults possess the creativity to solve real world problems.",
          "We know that teenagers possess the technology to create world challenges."
        ]
      },
      {
        "id": "5-12-e3",
        "audioText": "Thank you very much for your attention, questions, and continuous support.",
        "correctAnswer": "Thank you very much for your attention, questions, and continuous support.",
        "options": [
          "Thank you very much for your attention, questions, and continuous support.",
          "Thank you very much for your attention, feedback, and great support.",
          "Thank you teacher for your attention, questions, and continuous support."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-1",
    "badgeName": "News Anchor",
    "badgeEmoji": "📰",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-1-1",
        "term": "Backshift rule (Present ➔ Past)",
        "translation": "Regla de retroceso verbal en Reported Speech",
        "ipa": "/ˈbækʃɪft rul/",
        "audioText": "Backshift rule.",
        "example": "He said that he was ready for the test.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-1-2",
        "term": "Said that vs Told [person] that",
        "translation": "Dijo que vs Le dijo a [alguien] que",
        "ipa": "/sɛd ðæt / toʊld ðæt/",
        "audioText": "Said that versus told someone that.",
        "example": "She told us that the concert was tomorrow.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-1-3",
        "term": "Will ➔ Would / Can ➔ Could",
        "translation": "Cambio de modales en pasado",
        "ipa": "/wɪl tu wʊd / kæn tu kʊd/",
        "audioText": "Will to would. Can to could.",
        "example": "They said they would arrive on time.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-1-4",
        "term": "Breaking news",
        "translation": "Noticias de última hora",
        "ipa": "/ˈbreɪkɪŋ nuz/",
        "audioText": "Breaking news.",
        "example": "The student council announced breaking news.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-1-5",
        "term": "Official statement",
        "translation": "Declaración oficial / Comunicado",
        "ipa": "/əˈfɪʃəl ˈsteɪtmənt/",
        "audioText": "Official statement.",
        "example": "The principal released an official statement.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-1-6",
        "term": "Time expressions shift",
        "translation": "Ajuste de marcadores temporales (today ➔ that day)",
        "ipa": "/taɪm ɪkˈsprɛʃənz ʃɪft/",
        "audioText": "Time expressions shift.",
        "example": "She said she was busy that day.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-1-7",
        "term": "Report accurately",
        "translation": "Reportar con precisión",
        "ipa": "/rɪˈpɔrt ˈækjərətli/",
        "audioText": "Report accurately.",
        "example": "Journalists must report statements accurately.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-1-b1",
        "prompt": "Lucas dijo que él construiría un dron con inteligencia artificial.",
        "answer": "Lucas said that he would build an artificial intelligence drone",
        "tokens": [
          "Lucas",
          "said",
          "that",
          "he",
          "would",
          "build",
          "an",
          "artificial",
          "intelligence",
          "drone",
          "will",
          "told"
        ],
        "hints": [
          "En Reported Speech 'will' cambia a 'would'.",
          "Usa 'said that he would build...'"
        ]
      },
      {
        "id": "6-1-b2",
        "prompt": "El profesor no nos dijo que el examen era acumulativo.",
        "answer": "The teacher did not tell us that the exam was cumulative",
        "tokens": [
          "The",
          "teacher",
          "did",
          "not",
          "tell",
          "us",
          "that",
          "the",
          "exam",
          "was",
          "cumulative",
          "say",
          "is"
        ],
        "hints": [
          "Con objeto directo 'us' se usa 'tell us'.",
          "Usa 'the exam was cumulative'."
        ]
      },
      {
        "id": "6-1-b3",
        "prompt": "¿Qué te dijo Valentina sobre la fiesta de graduación?",
        "answer": "What did Valentina tell you about the graduation party",
        "tokens": [
          "What",
          "did",
          "Valentina",
          "tell",
          "you",
          "about",
          "the",
          "graduation",
          "party",
          "say",
          "told"
        ],
        "hints": [
          "Pregunta: 'What did Valentina tell you...'",
          "Termina con 'about the graduation party'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-1-e1",
        "audioText": "The principal announced that our school had won the regional science fair.",
        "correctAnswer": "The principal announced that our school had won the regional science fair.",
        "options": [
          "The principal announced that our school had won the regional science fair.",
          "The principal announced that our school has won the regional robotics fair.",
          "The teacher announced that our school had won the regional science fair."
        ]
      },
      {
        "id": "6-1-e2",
        "audioText": "Maria told her classmates that she could not attend the team meeting that day.",
        "correctAnswer": "Maria told her classmates that she could not attend the team meeting that day.",
        "options": [
          "Maria told her classmates that she could not attend the team meeting that day.",
          "Maria said her classmates that she could not attend the team meeting today.",
          "Maria told her friends that she could attend the team meeting that day."
        ]
      },
      {
        "id": "6-1-e3",
        "audioText": "Did the youth leader say that the workshop would start at nine AM?",
        "correctAnswer": "Did the youth leader say that the workshop would start at nine AM?",
        "options": [
          "Did the youth leader say that the workshop would start at nine AM?",
          "Did the youth leader tell you that the workshop will start at nine AM?",
          "Did the student leader say that the workshop would end at nine AM?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-2",
    "badgeName": "Field Reporter",
    "badgeEmoji": "🎙️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-2-1",
        "term": "Reported Questions (asked if / asked WH-)",
        "translation": "Preguntas indirectas: asked if / asked what, where",
        "ipa": "/rɪˈpɔrtɪd ˈkwɛstʃənz/",
        "audioText": "Reported Questions.",
        "example": "She asked where I had bought that cool hoodie.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-2-2",
        "term": "Word order in reported questions (Subject + Verb)",
        "translation": "Orden afirmativo en preguntas reportadas (sin auxiliar did/do)",
        "ipa": "/wɜrd ˈɔrdər/",
        "audioText": "Word order in reported questions.",
        "example": "He asked what time the train departed.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-2-3",
        "term": "Reported Commands (told [person] to / warned not to)",
        "translation": "Órdenes y advertencias reportadas con infinitivo",
        "ipa": "/rɪˈpɔrtɪd kəˈmændz/",
        "audioText": "Reported Commands.",
        "example": "The instructor told us to wear our seatbelts.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-2-4",
        "term": "Interview questions",
        "translation": "Preguntas de entrevista",
        "ipa": "/ˈɪntərˌvju ˈkwɛstʃənz/",
        "audioText": "Interview questions.",
        "example": "Prepare challenging interview questions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-2-5",
        "term": "Press conference",
        "translation": "Rueda de prensa",
        "ipa": "/prɛs ˈkɑnfərəns/",
        "audioText": "Press conference.",
        "example": "Athletes answered tough questions at the press conference.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-2-6",
        "term": "Warn against",
        "translation": "Advertir en contra de algo",
        "ipa": "/wɔrn əˈɡɛnst/",
        "audioText": "Warn against.",
        "example": "Experts warn against cyberbullying online.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-2-7",
        "term": "What did they ask you?",
        "translation": "¿Qué te preguntaron?",
        "ipa": "/wʌt dɪd ðeɪ æsk ju/",
        "audioText": "What did they ask you?",
        "example": "What did the university admissions team ask you?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-2-b1",
        "prompt": "El periodista me preguntó si yo planeaba estudiar en el exterior.",
        "answer": "The journalist asked me if I planned to study abroad",
        "tokens": [
          "The",
          "journalist",
          "asked",
          "me",
          "if",
          "I",
          "planned",
          "to",
          "study",
          "abroad",
          "do",
          "plan"
        ],
        "hints": [
          "Pregunta indirecta con 'asked me if...'",
          "Usa el verbo en pasado 'planned to study abroad'."
        ]
      },
      {
        "id": "6-2-b2",
        "prompt": "El entrenador nos ordenó que no nos rindiéramos en el partido.",
        "answer": "The coach ordered us not to give up in the match",
        "tokens": [
          "The",
          "coach",
          "ordered",
          "us",
          "not",
          "to",
          "give",
          "up",
          "in",
          "the",
          "match",
          "don't",
          "giving"
        ],
        "hints": [
          "Orden negativa reportada: 'ordered us not to give up'.",
          "Termina con 'in the match'."
        ]
      },
      {
        "id": "6-2-b3",
        "prompt": "¿Te preguntó el profesor dónde habías guardado el documento?",
        "answer": "Did the teacher ask you where you had saved the document",
        "tokens": [
          "Did",
          "the",
          "teacher",
          "ask",
          "you",
          "where",
          "you",
          "had",
          "saved",
          "the",
          "document",
          "have",
          "saving"
        ],
        "hints": [
          "Estructura: 'Did the teacher ask you where you had saved...'",
          "Orden sujeto + verbo en la subordinada."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-2-e1",
        "audioText": "The admissions officer asked Sofia why she wanted to learn languages.",
        "correctAnswer": "The admissions officer asked Sofia why she wanted to learn languages.",
        "options": [
          "The admissions officer asked Sofia why she wanted to learn languages.",
          "The admissions officer asked Sofia why did she want to learn languages.",
          "The teacher asked Sofia when she wanted to learn languages."
        ]
      },
      {
        "id": "6-2-e2",
        "audioText": "The doctor told Mateo not to drink sugary energy drinks during training.",
        "correctAnswer": "The doctor told Mateo not to drink sugary energy drinks during training.",
        "options": [
          "The doctor told Mateo not to drink sugary energy drinks during training.",
          "The doctor told Mateo to drink sugary energy drinks during training.",
          "The coach told Mateo not to drink cold water during training."
        ]
      },
      {
        "id": "6-2-e3",
        "audioText": "Did the interviewer ask you whether you had leadership experience?",
        "correctAnswer": "Did the interviewer ask you whether you had leadership experience?",
        "options": [
          "Did the interviewer ask you whether you had leadership experience?",
          "Did the interviewer ask you if you have leadership experience?",
          "Did the manager tell you that you had leadership experience?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-3",
    "badgeName": "Grammar Stylist",
    "badgeEmoji": "✨",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-3-1",
        "term": "Defining Relative Clauses (Essential info - NO commas)",
        "translation": "Oraciones relativas especificativas (sin comas)",
        "ipa": "/dɪˈfaɪnɪŋ ˈrɛlətɪv klɔzɪz/",
        "audioText": "Defining Relative Clauses.",
        "example": "The laptop that I bought yesterday is super fast.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-3-2",
        "term": "Non-Defining Relative Clauses (Extra info - WITH commas)",
        "translation": "Oraciones relativas explicativas (con comas obligatorias)",
        "ipa": "/nɑn dɪˈfaɪnɪŋ/",
        "audioText": "Non Defining Relative Clauses.",
        "example": "Bogota, which is the capital of Colombia, is 2600 meters high.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-3-3",
        "term": "Whom (Formal object pronoun)",
        "translation": "A quien / A quienes (Registro formal)",
        "ipa": "/hum/",
        "audioText": "Whom.",
        "example": "The mentor whom we met inspired our entire team.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-3-4",
        "term": "Extra information",
        "translation": "Información adicional",
        "ipa": "/ˈɛkstrə ˌɪnfərˈmeɪʃən/",
        "audioText": "Extra information.",
        "example": "Non-defining clauses add interesting extra information.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-3-5",
        "term": "Punctuation & Comma rules",
        "translation": "Reglas de puntuación y uso de comas",
        "ipa": "/ˌpʌŋktʃuˈeɪʃən ænd ˈkɑmə rulz/",
        "audioText": "Punctuation and Comma rules.",
        "example": "Commas are strictly mandatory in non-defining clauses.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-3-6",
        "term": "UNESCO World Heritage",
        "translation": "Patrimonio de la Humanidad UNESCO",
        "ipa": "/juˈnɛskoʊ wɜrld ˈhɛrətɪdʒ/",
        "audioText": "UNESCO World Heritage.",
        "example": "Cartagena's historic center is a UNESCO World Heritage site.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-3-7",
        "term": "Which clause needs commas?",
        "translation": "¿Cuál oración requiere comas?",
        "ipa": "/wɪtʃ klɔz nidz ˈkɑməz/",
        "audioText": "Which clause needs commas?",
        "example": "Which relative clause needs commas for extra detail?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-3-b1",
        "prompt": "Medellín, que es famosa por sus flores, tiene un clima primaveral.",
        "answer": "Medellin which is famous for its flowers has spring weather",
        "tokens": [
          "Medellin",
          "which",
          "is",
          "famous",
          "for",
          "its",
          "flowers",
          "has",
          "spring",
          "weather",
          "that",
          "who"
        ],
        "hints": [
          "En oraciones non-defining se usa 'which' para lugares/cosas.",
          "Usa 'Medellin which is famous for its flowers has spring weather'."
        ]
      },
      {
        "id": "6-3-b2",
        "prompt": "El estudiante que no presentó el trabajo no recibirá la insignia.",
        "answer": "The student who did not submit the work will not receive the badge",
        "tokens": [
          "The",
          "student",
          "who",
          "did",
          "not",
          "submit",
          "the",
          "work",
          "will",
          "not",
          "receive",
          "the",
          "badge",
          "which",
          "whose"
        ],
        "hints": [
          "Defining clause para persona usa 'who'.",
          "Usa 'will not receive the badge'."
        ]
      },
      {
        "id": "6-3-b3",
        "prompt": "¿Quién es el científico cuyos descubrimientos cambiaron la tecnología?",
        "answer": "Who is the scientist whose discoveries changed technology",
        "tokens": [
          "Who",
          "is",
          "the",
          "scientist",
          "whose",
          "discoveries",
          "changed",
          "technology",
          "who",
          "which"
        ],
        "hints": [
          "Posesión relativa: 'whose discoveries'.",
          "Termina con 'changed technology'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-3-e1",
        "audioText": "Shakira, who was born in Barranquilla, is a global musical icon.",
        "correctAnswer": "Shakira, who was born in Barranquilla, is a global musical icon.",
        "options": [
          "Shakira, who was born in Barranquilla, is a global musical icon.",
          "Shakira, that was born in Barranquilla, is a global musical icon.",
          "Karol G, who was born in Medellin, is a global musical icon."
        ]
      },
      {
        "id": "6-3-e2",
        "audioText": "The laptop that I use for programming has 32 gigabytes of RAM.",
        "correctAnswer": "The laptop that I use for programming has 32 gigabytes of RAM.",
        "options": [
          "The laptop that I use for programming has 32 gigabytes of RAM.",
          "The computer which I used for gaming has 16 gigabytes of RAM.",
          "The phone that I use for coding has 32 gigabytes of RAM."
        ]
      },
      {
        "id": "6-3-e3",
        "audioText": "Is this the exact smartphone whose battery lasts for two full days?",
        "correctAnswer": "Is this the exact smartphone whose battery lasts for two full days?",
        "options": [
          "Is this the exact smartphone whose battery lasts for two full days?",
          "Is this the exact smartphone which battery lasts for two full days?",
          "Is that the exact tablet whose battery lasts for two full days?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-4",
    "badgeName": "Supply Chain Master",
    "badgeEmoji": "🚢",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-4-1",
        "term": "Impersonal Passive (It is said that / It is believed that)",
        "translation": "Voz Pasiva Impersonal: Se dice que / Se cree que",
        "ipa": "/ɪt ɪz sɛd ðæt/",
        "audioText": "It is said that. It is believed that.",
        "example": "It is believed that AI will revolutionize education.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-4-2",
        "term": "Subject + is said to + Infinitive",
        "translation": "Estructura personal pasiva: Se dice que él...",
        "ipa": "/ɪz sɛd tu/",
        "audioText": "Is said to be.",
        "example": "Coffee is known to increase mental alertness.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-4-3",
        "term": "Have been developed / Has been designed",
        "translation": "Ha sido desarrollado / Han sido diseñados",
        "ipa": "/hæv bɪn dɪˈvɛləpt/",
        "audioText": "Have been developed.",
        "example": "Cutting-edge microchips have been designed in Asia.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-4-4",
        "term": "Supply chain & Logistics",
        "translation": "Cadena de suministro y Logística",
        "ipa": "/səˈplaɪ tʃeɪn ænd ləˈdʒɪstɪks/",
        "audioText": "Supply chain and Logistics.",
        "example": "Global commerce depends on an efficient supply chain.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-4-5",
        "term": "Raw materials",
        "translation": "Materias primas",
        "ipa": "/rɔ məˈtɪriəlz/",
        "audioText": "Raw materials.",
        "example": "Lithium is an essential raw material for batteries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-4-6",
        "term": "Assembled & Distributed",
        "translation": "Ensamblado y Distribuido",
        "ipa": "/əˈsɛmbəld ænd dɪˈstrɪbjutɪd/",
        "audioText": "Assembled and Distributed.",
        "example": "Parts are assembled in Mexico and distributed globally.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-4-7",
        "term": "It is widely believed that...",
        "translation": "Es ampliamente creído que...",
        "ipa": "/ɪt ɪz ˈwaɪdli bɪˈlivd ðæt/",
        "audioText": "It is widely believed that...",
        "example": "It is widely believed that bilingual youth have higher career prospects.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-4-b1",
        "prompt": "Se cree que la inteligencia artificial transformará la educación.",
        "answer": "It is believed that artificial intelligence will transform education",
        "tokens": [
          "It",
          "is",
          "believed",
          "that",
          "artificial",
          "intelligence",
          "will",
          "transform",
          "education",
          "are",
          "believing"
        ],
        "hints": [
          "Voz pasiva impersonal: 'It is believed that...'",
          "Usa 'artificial intelligence will transform education'."
        ]
      },
      {
        "id": "6-4-b2",
        "prompt": "Las materias primas no han sido transportadas al puerto todavía.",
        "answer": "The raw materials have not been transported to the port yet",
        "tokens": [
          "The",
          "raw",
          "materials",
          "have",
          "not",
          "been",
          "transported",
          "to",
          "the",
          "port",
          "yet",
          "has",
          "did"
        ],
        "hints": [
          "Pasiva en presente perfecto: 'have not been transported'.",
          "Termina con 'to the port yet'."
        ]
      },
      {
        "id": "6-4-b3",
        "prompt": "¿Dónde son ensamblados estos componentes tecnológicos?",
        "answer": "Where are these technological components assembled",
        "tokens": [
          "Where",
          "are",
          "these",
          "technological",
          "components",
          "assembled",
          "is",
          "assemble"
        ],
        "hints": [
          "Pregunta pasiva: 'Where are + sujeto plural + participio assembled?'",
          "Usa 'these technological components'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-4-e1",
        "audioText": "It is estimated that over five billion smartphones are in active use globally.",
        "correctAnswer": "It is estimated that over five billion smartphones are in active use globally.",
        "options": [
          "It is estimated that over five billion smartphones are in active use globally.",
          "It is estimated that over four billion smartphones are in active use globally.",
          "It is known that over five million smartphones are in active use globally."
        ]
      },
      {
        "id": "6-4-e2",
        "audioText": "Colombian emeralds are considered to be the highest quality gemstones in the world.",
        "correctAnswer": "Colombian emeralds are considered to be the highest quality gemstones in the world.",
        "options": [
          "Colombian emeralds are considered to be the highest quality gemstones in the world.",
          "Colombian flowers are considered to be the freshest products in the world.",
          "Colombian emeralds were considered to be the rarest gems in Latin America."
        ]
      },
      {
        "id": "6-4-e3",
        "audioText": "How are electronic microchips transported safely across international borders?",
        "correctAnswer": "How are electronic microchips transported safely across international borders?",
        "options": [
          "How are electronic microchips transported safely across international borders?",
          "Why are electronic microchips manufactured safely across international borders?",
          "How were electronic components transported quickly across international borders?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-5",
    "badgeName": "Idiom Guru",
    "badgeEmoji": "🎭",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-5-1",
        "term": "Bite the bullet",
        "translation": "Hacer de tripas corazón / Afrontar una situación difícil con valor",
        "ipa": "/baɪt ðə ˈbʊlɪt/",
        "audioText": "Bite the bullet.",
        "example": "I had to bite the bullet and apologize to my teacher.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-2",
        "term": "Hit the books",
        "translation": "Ponerse a estudiar con juicio / Quemarse las pestañas",
        "ipa": "/hɪt ðə bʊks/",
        "audioText": "Hit the books.",
        "example": "Exams are next week, so it is time to hit the books.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-3",
        "term": "Break a leg!",
        "translation": "¡Muchos éxitos! / ¡Rómpela! (Buena suerte antes de un show)",
        "ipa": "/breɪk ə lɛɡ/",
        "audioText": "Break a leg!",
        "example": "You are going on stage now, break a leg!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-4",
        "term": "Once in a blue moon",
        "translation": "De Pascuas a Ramos / Muy raras veces",
        "ipa": "/wʌns ɪn ə blu mun/",
        "audioText": "Once in a blue moon.",
        "example": "I only eat junk food once in a blue moon.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-5",
        "term": "Piece of cake",
        "translation": "Pan comido / Muy fácil",
        "ipa": "/pis ʌv keɪk/",
        "audioText": "Piece of cake.",
        "example": "The math quiz was a piece of cake for Sofia.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-6",
        "term": "Under the weather",
        "translation": "Indispuesto / Achicopalado / Un poco enfermo",
        "ipa": "/ˈʌndər ðə ˈwɛðər/",
        "audioText": "Under the weather.",
        "example": "I am feeling a bit under the weather today.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-5-7",
        "term": "Idiomatic expression",
        "translation": "Expresión idiomática / Modismo",
        "ipa": "/ˌɪdiəˈmætɪk ɪkˈsprɛʃən/",
        "audioText": "Idiomatic expression.",
        "example": "Idioms make your English sound natural and authentic.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-5-b1",
        "prompt": "Tengo que ponerme a estudiar porque el examen es mañana.",
        "answer": "I have to hit the books because the exam is tomorrow",
        "tokens": [
          "I",
          "have",
          "to",
          "hit",
          "the",
          "books",
          "because",
          "the",
          "exam",
          "is",
          "tomorrow",
          "bite",
          "bullet"
        ],
        "hints": [
          "Modismo 'hit the books' = ponerse a estudiar con juicio.",
          "Usa 'because the exam is tomorrow'."
        ]
      },
      {
        "id": "6-5-b2",
        "prompt": "Ese reto de programación no fue pan comido.",
        "answer": "That programming challenge was not a piece of cake",
        "tokens": [
          "That",
          "programming",
          "challenge",
          "was",
          "not",
          "a",
          "piece",
          "of",
          "cake",
          "blue",
          "moon"
        ],
        "hints": [
          "Pan comido = 'a piece of cake'.",
          "Usa 'That programming challenge was not a piece of cake'."
        ]
      },
      {
        "id": "6-5-b3",
        "prompt": "¿Por qué estás sintiéndote indispuesto esta mañana?",
        "answer": "Why are you feeling under the weather this morning",
        "tokens": [
          "Why",
          "are",
          "you",
          "feeling",
          "under",
          "the",
          "weather",
          "this",
          "morning",
          "is",
          "cake"
        ],
        "hints": [
          "Sentirse indispuesto/enfermo: 'feeling under the weather'.",
          "Empieza con 'Why are you feeling...'"
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-5-e1",
        "audioText": "Don't worry about your robotics presentation, you will break a leg!",
        "correctAnswer": "Don't worry about your robotics presentation, you will break a leg!",
        "options": [
          "Don't worry about your robotics presentation, you will break a leg!",
          "Don't worry about your music audition, you will break your leg!",
          "Don't worry about your English exam, you will hit the books!"
        ]
      },
      {
        "id": "6-5-e2",
        "audioText": "Mateo only visits the skatepark once in a blue moon during rainy season.",
        "correctAnswer": "Mateo only visits the skatepark once in a blue moon during rainy season.",
        "options": [
          "Mateo only visits the skatepark once in a blue moon during rainy season.",
          "Mateo always visits the skatepark every weekend during rainy season.",
          "Lucas only visits the skatepark once in a blue moon during summer."
        ]
      },
      {
        "id": "6-5-e3",
        "audioText": "I had to bite the bullet and tell my parents the absolute truth.",
        "correctAnswer": "I had to bite the bullet and tell my parents the absolute truth.",
        "options": [
          "I had to bite the bullet and tell my parents the absolute truth.",
          "I had to hit the books and tell my parents the absolute truth.",
          "She had to bite the bullet and tell her friends the entire truth."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-6",
    "badgeName": "Executive Strategist",
    "badgeEmoji": "💼",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-6-1",
        "term": "Carry out (Execute a plan/research)",
        "translation": "Llevar a cabo / Ejecutar un proyecto",
        "ipa": "/ˈkæri aʊt/",
        "audioText": "Carry out.",
        "example": "We will carry out a youth leadership survey.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-2",
        "term": "Figure out (Solve / Understand a solution)",
        "translation": "Descifrar / Encontrar la solución",
        "ipa": "/ˈfɪɡjər aʊt/",
        "audioText": "Figure out.",
        "example": "I need to figure out how this code works.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-3",
        "term": "Come up with (Invent / Propose an idea)",
        "translation": "Idear / Ocurrírsele una propuesta innovadora",
        "ipa": "/kʌm ʌp wɪð/",
        "audioText": "Come up with.",
        "example": "Our squad came up with a brilliant idea.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-4",
        "term": "Back up (Support / Create digital copy)",
        "translation": "Respaldar / Hacer copia de seguridad",
        "ipa": "/bæk ʌp/",
        "audioText": "Back up.",
        "example": "Always back up your project files on Google Drive.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-5",
        "term": "Look into (Investigate deeply)",
        "translation": "Investigar a fondo / Examinar",
        "ipa": "/lʊk ˈɪntu/",
        "audioText": "Look into.",
        "example": "The committee will look into the student request.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-6",
        "term": "Set up (Establish / Configure)",
        "translation": "Configurar / Fundar / Instalar",
        "ipa": "/sɛt ʌp/",
        "audioText": "Set up.",
        "example": "We set up an online coding club for teens.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-6-7",
        "term": "Executive leadership",
        "translation": "Liderazgo ejecutivo",
        "ipa": "/ɪɡˈzɛkjətɪv ˈlidərˌʃɪp/",
        "audioText": "Executive leadership.",
        "example": "Executive leadership requires decisive teamwork.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-6-b1",
        "prompt": "Se nos ocurrió una idea genial para el festival juvenil.",
        "answer": "We came up with a brilliant idea for the youth festival",
        "tokens": [
          "We",
          "came",
          "up",
          "with",
          "a",
          "brilliant",
          "idea",
          "for",
          "the",
          "youth",
          "festival",
          "carry",
          "out"
        ],
        "hints": [
          "Phrasal verb en pasado: 'came up with'.",
          "Usa 'a brilliant idea for the youth festival'."
        ]
      },
      {
        "id": "6-6-b2",
        "prompt": "Ellos no han podido descifrar cómo resolver este error de código.",
        "answer": "They have not figured out how to solve this code error",
        "tokens": [
          "They",
          "have",
          "not",
          "figured",
          "out",
          "how",
          "to",
          "solve",
          "this",
          "code",
          "error",
          "did",
          "carry"
        ],
        "hints": [
          "Presente perfecto de figure out: 'have not figured out'.",
          "Usa 'how to solve this code error'."
        ]
      },
      {
        "id": "6-6-b3",
        "prompt": "¿Cuándo vamos a llevar a cabo la investigación de campo?",
        "answer": "When are we going to carry out the field research",
        "tokens": [
          "When",
          "are",
          "we",
          "going",
          "to",
          "carry",
          "out",
          "the",
          "field",
          "research",
          "will",
          "figure"
        ],
        "hints": [
          "Llevar a cabo = 'carry out'.",
          "Futuro: 'When are we going to carry out the field research?'"
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-6-e1",
        "audioText": "Our team came up with a sustainable plan to reduce plastic waste in school.",
        "correctAnswer": "Our team came up with a sustainable plan to reduce plastic waste in school.",
        "options": [
          "Our team came up with a sustainable plan to reduce plastic waste in school.",
          "Our team looked into a sustainable plan to produce plastic waste in school.",
          "Their squad came up with an expensive plan to reduce water waste."
        ]
      },
      {
        "id": "6-6-e2",
        "audioText": "We must carry out rigorous security tests before launching the application.",
        "correctAnswer": "We must carry out rigorous security tests before launching the application.",
        "options": [
          "We must carry out rigorous security tests before launching the application.",
          "We should figure out rigorous security tests before launching the application.",
          "They will carry out simple speed tests before launching the software."
        ]
      },
      {
        "id": "6-6-e3",
        "audioText": "Did you back up your capstone project presentation on cloud storage?",
        "correctAnswer": "Did you back up your capstone project presentation on cloud storage?",
        "options": [
          "Did you back up your capstone project presentation on cloud storage?",
          "Did you set up your capstone project presentation on cloud storage?",
          "Did she look into your capstone project presentation on cloud storage?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-7",
    "badgeName": "Oxford Debater",
    "badgeEmoji": "🏛️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-7-1",
        "term": "This House believes that... (Motion opening)",
        "translation": "Esta casa propone / sostiene que... (Fórmula de moción en debate)",
        "ipa": "/ðɪs haʊs bɪˈlivz ðæt/",
        "audioText": "This House believes that...",
        "example": "This House believes that artificial intelligence should be regulated.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-7-2",
        "term": "Prime Minister & Opposition",
        "translation": "Primer Ministro (Gobierno) y Oposición",
        "ipa": "/praɪm ˈmɪnəstər ænd ˌɑpəˈzɪʃən/",
        "audioText": "Prime Minister and Opposition.",
        "example": "The Opposition presents strong counterarguments.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-7-3",
        "term": "Point of Information (POI)",
        "translation": "Punto de información (Intervención breve durante debate)",
        "ipa": "/pɔɪnt ʌv ˌɪnfərˈmeɪʃən/",
        "audioText": "Point of Information.",
        "example": "Point of information: your statistics are outdated.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-7-4",
        "term": "Rebuttal & Counterargument",
        "translation": "Refutación y Contraargumento",
        "ipa": "/rɪˈbʌtəl ænd ˈkaʊntərˌɑrɡjəmənt/",
        "audioText": "Rebuttal and Counterargument.",
        "example": "A convincing rebuttal dismantles the opposing premise.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-7-5",
        "term": "Furthermore / Moreover",
        "translation": "Además / Es más / Por añadidura",
        "ipa": "/ˈfɜrðərˌmɔr / mɔrˈoʊvər/",
        "audioText": "Furthermore. Moreover.",
        "example": "Furthermore, this proposal protects human rights.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-7-6",
        "term": "Substantive argument",
        "translation": "Argumento de fondo / sustantivo",
        "ipa": "/səbˈstæntɪv ˈɑrɡjəmənt/",
        "audioText": "Substantive argument.",
        "example": "The first speaker delivered a substantive argument.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-7-7",
        "term": "I urge you to support this motion",
        "translation": "Les insto a apoyar esta moción",
        "ipa": "/aɪ ɜrdʒ ju tu səˈpɔrt ðɪs ˈmoʊʃən/",
        "audioText": "I urge you to support this motion.",
        "example": "I urge all judges to support our motion today.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-7-b1",
        "prompt": "Esta casa sostiene que los uniformes escolares no deberían ser obligatorios.",
        "answer": "This House believes that school uniforms should not be mandatory",
        "tokens": [
          "This",
          "House",
          "believes",
          "that",
          "school",
          "uniforms",
          "should",
          "not",
          "be",
          "mandatory",
          "are",
          "must"
        ],
        "hints": [
          "Fórmula de debate: 'This House believes that...'",
          "Usa 'school uniforms should not be mandatory'."
        ]
      },
      {
        "id": "6-7-b2",
        "prompt": "La oposición no presentó evidencia sólida para respaldar su postura.",
        "answer": "The opposition did not present solid evidence to support their stance",
        "tokens": [
          "The",
          "opposition",
          "did",
          "not",
          "present",
          "solid",
          "evidence",
          "to",
          "support",
          "their",
          "stance",
          "does",
          "point"
        ],
        "hints": [
          "Negación: 'did not present solid evidence'.",
          "Termina con 'to support their stance'."
        ]
      },
      {
        "id": "6-7-b3",
        "prompt": "¿Acepta el orador un punto de información sobre este argumento?",
        "answer": "Does the speaker accept a point of information on this argument",
        "tokens": [
          "Does",
          "the",
          "speaker",
          "accept",
          "a",
          "point",
          "of",
          "information",
          "on",
          "this",
          "argument",
          "Is",
          "accepting"
        ],
        "hints": [
          "Fórmula parlamentaria: 'Does the speaker accept a point of information...'",
          "Usa 'on this argument'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-7-e1",
        "audioText": "This House believes that social media age limits should be strictly enforced by law.",
        "correctAnswer": "This House believes that social media age limits should be strictly enforced by law.",
        "options": [
          "This House believes that social media age limits should be strictly enforced by law.",
          "This House believes that video game age limits should be strictly enforced by law.",
          "This House rejects that social media age limits should be enforced by schools."
        ]
      },
      {
        "id": "6-7-e2",
        "audioText": "Furthermore, our statistical data demonstrates a 40 percent increase in productivity.",
        "correctAnswer": "Furthermore, our statistical data demonstrates a 40 percent increase in productivity.",
        "options": [
          "Furthermore, our statistical data demonstrates a 40 percent increase in productivity.",
          "Moreover, our financial data demonstrates a 30 percent increase in efficiency.",
          "Furthermore, their scientific research proves a 50 percent decrease in focus."
        ]
      },
      {
        "id": "6-7-e3",
        "audioText": "How does the Leader of the Opposition respond to the economic benefits of this motion?",
        "correctAnswer": "How does the Leader of the Opposition respond to the economic benefits of this motion?",
        "options": [
          "How does the Leader of the Opposition respond to the economic benefits of this motion?",
          "Why does the Prime Minister reject the social benefits of this motion?",
          "How did the speaker respond to the environmental impacts of this debate?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-8",
    "badgeName": "Paradox Master",
    "badgeEmoji": "🌀",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-8-1",
        "term": "Mixed Conditional (Past Condition ➔ Present Result)",
        "translation": "Condicional Mixto: Condición en pasado con impacto en el presente",
        "ipa": "/mɪkst kənˈdɪʃənəl/",
        "audioText": "Mixed Conditional.",
        "example": "If I had accepted that scholarship, I would be living in London now.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-8-2",
        "term": "If + Past Perfect (had + V3), WOULD + Verb base",
        "translation": "Estructura del condicional mixto tipo 1",
        "ipa": "/ɪf hæd dʌn wʊd bi/",
        "audioText": "If had plus past participle, would plus base verb.",
        "example": "If we had trained harder, we would be champions today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-8-3",
        "term": "Past regret with present consequence",
        "translation": "Arrepentimiento del pasado con consecuencia en el presente",
        "ipa": "/pæst rɪˈɡrɛt/",
        "audioText": "Past regret with present consequence.",
        "example": "If I had practiced English earlier, I would speak fluently today.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-8-4",
        "term": "Missed opportunity",
        "translation": "Oportunidad perdida",
        "ipa": "/mɪst ˌɑpərˈtunəti/",
        "audioText": "Missed opportunity.",
        "example": "Do not let fear create a missed opportunity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-8-5",
        "term": "Current situation",
        "translation": "Situación actual",
        "ipa": "/ˈkɜrənt ˌsɪtʃuˈeɪʃən/",
        "audioText": "Current situation.",
        "example": "Our current situation is the result of past choices.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-8-6",
        "term": "Fluent & Confident",
        "translation": "Fluido y Seguro de sí mismo",
        "ipa": "/ˈfluənt ænd ˈkɑnfədənt/",
        "audioText": "Fluent and Confident.",
        "example": "Daily practice makes you fluent and confident.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-8-7",
        "term": "Where would you be now if...?",
        "translation": "¿Dónde estarías ahora si...?",
        "ipa": "/wɛr wʊd ju bi naʊ ɪf/",
        "audioText": "Where would you be now if...?",
        "example": "Where would you be now if you had moved abroad?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-8-b1",
        "prompt": "Si hubiera estudiado inglés desde niño, hoy sería totalmente bilingüe.",
        "answer": "If I had studied English as a child I would be fully bilingual today",
        "tokens": [
          "If",
          "I",
          "had",
          "studied",
          "English",
          "as",
          "a",
          "child",
          "I",
          "would",
          "be",
          "fully",
          "bilingual",
          "today",
          "am",
          "have"
        ],
        "hints": [
          "Condición en pasado perfecto: 'If I had studied...'",
          "Resultado en presente: 'I would be fully bilingual today'."
        ]
      },
      {
        "id": "6-8-b2",
        "prompt": "Si no nos hubiéramos perdido el bus, no estaríamos esperando aquí ahora.",
        "answer": "If we had not missed the bus we would not be waiting here now",
        "tokens": [
          "If",
          "we",
          "had",
          "not",
          "missed",
          "the",
          "bus",
          "we",
          "would",
          "not",
          "be",
          "waiting",
          "here",
          "now",
          "did",
          "are"
        ],
        "hints": [
          "Mixto negativo: 'had not missed' ➔ 'would not be waiting'.",
          "Usa 'here now'."
        ]
      },
      {
        "id": "6-8-b3",
        "prompt": "¿Dónde estarías viviendo hoy si hubieras ganado la beca internacional?",
        "answer": "Where would you be living today if you had won the international scholarship",
        "tokens": [
          "Where",
          "would",
          "you",
          "be",
          "living",
          "today",
          "if",
          "you",
          "had",
          "won",
          "the",
          "international",
          "scholarship",
          "will",
          "have"
        ],
        "hints": [
          "Pregunta en mixto: 'Where would you be living today...'",
          "Condición: 'if you had won the international scholarship'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-8-e1",
        "audioText": "If I had practiced the guitar every single day, I would play in a famous band now.",
        "correctAnswer": "If I had practiced the guitar every single day, I would play in a famous band now.",
        "options": [
          "If I had practiced the guitar every single day, I would play in a famous band now.",
          "If I practiced the guitar every day, I would play in a famous band now.",
          "If I had practiced the piano every single day, I would play in an orchestra now."
        ]
      },
      {
        "id": "6-8-e2",
        "audioText": "If Mateo had not broken his ankle last month, he would be playing in today's final.",
        "correctAnswer": "If Mateo had not broken his ankle last month, he would be playing in today's final.",
        "options": [
          "If Mateo had not broken his ankle last month, he would be playing in today's final.",
          "If Mateo had not broken his arm last month, he would be playing in today's final.",
          "If Mateo had not sprained his ankle yesterday, he would play in tomorrow's final."
        ]
      },
      {
        "id": "6-8-e3",
        "audioText": "What career would you have chosen if you had studied arts instead of engineering?",
        "correctAnswer": "What career would you have chosen if you had studied arts instead of engineering?",
        "options": [
          "What career would you have chosen if you had studied arts instead of engineering?",
          "What career would you choose today if you studied sciences instead of arts?",
          "Where would you work today if you had chosen arts instead of business?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-9",
    "badgeName": "Causative Expert",
    "badgeEmoji": "⚙️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-9-1",
        "term": "Causative: Have something done (Professional service)",
        "translation": "Mandar a hacer algo con un profesional",
        "ipa": "/hæv ˈsʌmθɪŋ dʌn/",
        "audioText": "Have something done.",
        "example": "I had my computer repaired at the tech store.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-9-2",
        "term": "Get someone to do something (Persuade/hire)",
        "translation": "Convencer o contratar a alguien para que haga algo",
        "ipa": "/ɡɛt ˈsʌmwʌn tu du/",
        "audioText": "Get someone to do something.",
        "example": "I got my friend to help me with the code.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-9-3",
        "term": "Have someone do something (Direct request)",
        "translation": "Hacer que alguien haga algo (sin 'to')",
        "ipa": "/hæv ˈsʌmwʌn du/",
        "audioText": "Have someone do something.",
        "example": "The director had the team redesign the website.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-9-4",
        "term": "Professional maintenance",
        "translation": "Mantenimiento profesional",
        "ipa": "/prəˈfɛʃənəl ˈmeɪntənəns/",
        "audioText": "Professional maintenance.",
        "example": "Bicycles need regular professional maintenance.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-9-5",
        "term": "Delegate tasks",
        "translation": "Delegar tareas",
        "ipa": "/ˈdɛləˌɡeɪt tæsks/",
        "audioText": "Delegate tasks.",
        "example": "Effective leaders know how to delegate tasks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-9-6",
        "term": "Customized & Tailored",
        "translation": "Personalizado y A la medida",
        "ipa": "/ˈkʌstəˌmaɪzd ænd ˈteɪlərd/",
        "audioText": "Customized and Tailored.",
        "example": "She had a customized jacket made for the tour.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-9-7",
        "term": "How often do you have it serviced?",
        "translation": "¿Con qué frecuencia lo mandas a revisar?",
        "ipa": "/haʊ ˈɔfən du ju hæv ɪt ˈsɜrvɪst/",
        "audioText": "How often do you have it serviced?",
        "example": "How often do you have your car serviced?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-9-b1",
        "prompt": "Mandé a reparar la pantalla de mi celular ayer.",
        "answer": "I had my phone screen repaired yesterday",
        "tokens": [
          "I",
          "had",
          "my",
          "phone",
          "screen",
          "repaired",
          "yesterday",
          "have",
          "repairing"
        ],
        "hints": [
          "Causativa pasiva: Subject + had + object (my phone screen) + participio (repaired).",
          "Termina con 'yesterday'."
        ]
      },
      {
        "id": "6-9-b2",
        "prompt": "Nosotros no mandamos a lavar el carro todos los fines de semana.",
        "answer": "We do not have our car washed every weekend",
        "tokens": [
          "We",
          "do",
          "not",
          "have",
          "our",
          "car",
          "washed",
          "every",
          "weekend",
          "are",
          "washing"
        ],
        "hints": [
          "Presente causativo negativo: 'do not have our car washed'.",
          "Usa 'every weekend'."
        ]
      },
      {
        "id": "6-9-b3",
        "prompt": "¿Dónde mandas a cortar tu cabello usualmente?",
        "answer": "Where do you usually have your hair cut",
        "tokens": [
          "Where",
          "do",
          "you",
          "usually",
          "have",
          "your",
          "hair",
          "cut",
          "did",
          "cutting"
        ],
        "hints": [
          "Pregunta causativa: 'Where do you usually have + your hair + cut?'",
          "Participio de cut es 'cut'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-9-e1",
        "audioText": "I need to have my passport renewed before our international exchange trip.",
        "correctAnswer": "I need to have my passport renewed before our international exchange trip.",
        "options": [
          "I need to have my passport renewed before our international exchange trip.",
          "I need to renew my passport before our domestic school trip.",
          "She had to have her passport renewed before the flight."
        ]
      },
      {
        "id": "6-9-e2",
        "audioText": "The teacher got the students to collaborate on a community recycling project.",
        "correctAnswer": "The teacher got the students to collaborate on a community recycling project.",
        "options": [
          "The teacher got the students to collaborate on a community recycling project.",
          "The teacher had the students to collaborate on a community recycling project.",
          "The principal got the teachers to collaborate on a school garden project."
        ]
      },
      {
        "id": "6-9-e3",
        "audioText": "How often do you have your computer cleaned of dust and upgraded?",
        "correctAnswer": "How often do you have your computer cleaned of dust and upgraded?",
        "options": [
          "How often do you have your computer cleaned of dust and upgraded?",
          "When did you have your computer cleaned of dust and repaired?",
          "How often do you clean your computer and upgrade it?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-advanced-10",
    "badgeName": "Global Summit Leader",
    "badgeEmoji": "🌍🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "6-10-1",
        "term": "International NGO Summit",
        "translation": "Cumbre Internacional de ONG Juveniles",
        "ipa": "/ˌɪntərˈnæʃənəl ˌɛnˌdʒiˈoʊ ˈsʌmɪt/",
        "audioText": "International NGO Summit.",
        "example": "Welcome delegates to the Global Youth NGO Summit.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-10-2",
        "term": "Actionable policy proposal",
        "translation": "Propuesta de política accionable y viable",
        "ipa": "/ˈækʃənəbəl ˈpɑləsi prəˈpoʊzəl/",
        "audioText": "Actionable policy proposal.",
        "example": "We present an actionable policy proposal for clean energy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-10-3",
        "term": "Global impact & Scalability",
        "translation": "Impacto global y Escalabilidad",
        "ipa": "/ˈɡloʊbəl ˈɪmpækt ænd ˌskeɪləˈbɪləti/",
        "audioText": "Global impact and Scalability.",
        "example": "Our project demonstrates remarkable scalability across Latin America.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-10-4",
        "term": "Distinguished delegates",
        "translation": "Distinguidos delegados y jueces",
        "ipa": "/dɪˈstɪŋɡwɪʃt ˈdɛləɡəts/",
        "audioText": "Distinguished delegates.",
        "example": "Distinguished delegates, thank you for your honorable presence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-10-5",
        "term": "Level 6 Advanced Graduate",
        "translation": "Graduado del Nivel 6 Avanzado",
        "ipa": "/ˈlɛvəl sɪks ædˈvænst ˈɡrædʒuɪt/",
        "audioText": "Level Six Advanced Graduate.",
        "example": "You have mastered high-level rhetoric and global debate in English!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "6-10-6",
        "term": "In light of this evidence",
        "translation": "A la luz de esta evidencia",
        "ipa": "/ɪn laɪt ʌv ðɪs ˈɛvədəns/",
        "audioText": "In light of this evidence.",
        "example": "In light of this evidence, urgent reform is required.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "6-10-7",
        "term": "Together we can reshape the future",
        "translation": "Juntos podemos transformar el futuro",
        "ipa": "/təˈɡɛðər wi kæn riˈʃeɪp ðə ˈfjutʃər/",
        "audioText": "Together we can reshape the future.",
        "example": "Together we can reshape the future of our planet.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "6-10-b1",
        "prompt": "Distinguidos delegados, presentamos una solución escalable para jóvenes líderes.",
        "answer": "Distinguished delegates we present a scalable solution for youth leaders",
        "tokens": [
          "Distinguished",
          "delegates",
          "we",
          "present",
          "a",
          "scalable",
          "solution",
          "for",
          "youth",
          "leaders",
          "presented",
          "are"
        ],
        "hints": [
          "Apertura diplomática: 'Distinguished delegates we present...'",
          "Usa 'a scalable solution for youth leaders'."
        ]
      },
      {
        "id": "6-10-b2",
        "prompt": "No podemos permitir que la desigualdad limite el potencial de nuestra juventud.",
        "answer": "We cannot allow inequality to limit the potential of our youth",
        "tokens": [
          "We",
          "cannot",
          "allow",
          "inequality",
          "to",
          "limit",
          "the",
          "potential",
          "of",
          "our",
          "youth",
          "do",
          "allowing"
        ],
        "hints": [
          "Incapacidad moral y determinación: 'We cannot allow inequality...'",
          "Termina con 'to limit the potential of our youth'."
        ]
      },
      {
        "id": "6-10-b3",
        "prompt": "¿Están listos para votar a favor de esta resolución histórica?",
        "answer": "Are you ready to vote in favor of this historic resolution",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "vote",
          "in",
          "favor",
          "of",
          "this",
          "historic",
          "resolution",
          "Do",
          "voting"
        ],
        "hints": [
          "Llamado a la votación en la cumbre: 'Are you ready to vote in favor of...'",
          "Resolución histórica = 'this historic resolution'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "6-10-e1",
        "audioText": "Welcome distinguished delegates to the Maven English Global Youth Summit keynote.",
        "correctAnswer": "Welcome distinguished delegates to the Maven English Global Youth Summit keynote.",
        "options": [
          "Welcome distinguished delegates to the Maven English Global Youth Summit keynote.",
          "Welcome honorable guests to the Maven English Local Youth Summit keynote.",
          "Welcome distinguished teachers to the Maven English Global Education Summit."
        ]
      },
      {
        "id": "6-10-e2",
        "audioText": "Our mission proves that bilingual teenagers can lead authentic multinational change.",
        "correctAnswer": "Our mission proves that bilingual teenagers can lead authentic multinational change.",
        "options": [
          "Our mission proves that bilingual teenagers can lead authentic multinational change.",
          "Our project proves that bilingual students can create local community changes.",
          "Their mission shows that young adults can lead international corporate change."
        ]
      },
      {
        "id": "6-10-e3",
        "audioText": "In conclusion, we thank the assembly for your dedication to global progress.",
        "correctAnswer": "In conclusion, we thank the assembly for your dedication to global progress.",
        "options": [
          "In conclusion, we thank the assembly for your dedication to global progress.",
          "To sum up, we thank the teachers for their dedication to school progress.",
          "In conclusion, we ask the assembly for financial support for global progress."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-1",
    "badgeName": "Futurist Visionary",
    "badgeEmoji": "🚀",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-1-1",
        "term": "Future Continuous (will be doing)",
        "translation": "Futuro Continuo: Acción que estará en progreso en un momento futuro",
        "ipa": "/ˈfjutʃər kənˈtɪnjuəs/",
        "audioText": "Future Continuous.",
        "example": "In ten years, humans will be traveling to Mars.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-1-2",
        "term": "Future Perfect (will have done by...)",
        "translation": "Futuro Perfecto: Meta concluida antes de una fecha límite",
        "ipa": "/ˈfjutʃər ˈpɜrfɪkt/",
        "audioText": "Future Perfect.",
        "example": "By 2035, scientists will have developed a quantum internet.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-1-3",
        "term": "By the time / In ten years' time",
        "translation": "Para cuando / En un plazo de diez años",
        "ipa": "/baɪ ðə taɪm / ɪn tɛn jɪrz taɪm/",
        "audioText": "By the time. In ten years' time.",
        "example": "By the time you graduate, AI will have transformed tech.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-1-4",
        "term": "Frontier technology",
        "translation": "Tecnología de frontera / de vanguardia",
        "ipa": "/frʌnˈtɪr tɛkˈnɑlədʒi/",
        "audioText": "Frontier technology.",
        "example": "Frontier technology drives modern industrial innovation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-1-5",
        "term": "Quantum computing",
        "translation": "Computación cuántica",
        "ipa": "/ˈkwɑntəm kəmˈpjutɪŋ/",
        "audioText": "Quantum computing.",
        "example": "Quantum computing solves complex calculations in seconds.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-1-6",
        "term": "Milestone & Breakthrough",
        "translation": "Hito y Gran avance científico",
        "ipa": "/ˈmaɪlˌstoʊn ænd ˈbreɪkˌθru/",
        "audioText": "Milestone and Breakthrough.",
        "example": "Eradicating malaria will be a historic milestone.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-1-7",
        "term": "What will humans have achieved by 2040?",
        "translation": "¿Qué habrán logrado los humanos para 2040?",
        "ipa": "/wʌt wɪl ˈhjumənz hæv əˈtʃivd/",
        "audioText": "What will humans have achieved by 2040?",
        "example": "What major milestones will engineers have achieved by 2040?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-1-b1",
        "prompt": "Para 2035, los ingenieros habrán construido una red de internet cuántico.",
        "answer": "By 2035 engineers will have built a quantum internet grid",
        "tokens": [
          "By",
          "2035",
          "engineers",
          "will",
          "have",
          "built",
          "a",
          "quantum",
          "internet",
          "grid",
          "be",
          "building"
        ],
        "hints": [
          "Futuro perfecto: will have + participio built.",
          "Usa 'By 2035 engineers will have built a quantum internet grid'."
        ]
      },
      {
        "id": "7-1-b2",
        "prompt": "En diez años, millones de personas no estarán conduciendo autos a gasolina.",
        "answer": "In ten years millions of people will not be driving gasoline cars",
        "tokens": [
          "In",
          "ten",
          "years",
          "millions",
          "of",
          "people",
          "will",
          "not",
          "be",
          "driving",
          "gasoline",
          "cars",
          "have",
          "driven"
        ],
        "hints": [
          "Futuro continuo negativo: will not be driving.",
          "Usa 'gasoline cars'."
        ]
      },
      {
        "id": "7-1-b3",
        "prompt": "¿Qué proyectos tecnológicos estarás liderando para cuando te gradúes?",
        "answer": "What tech projects will you be leading by the time you graduate",
        "tokens": [
          "What",
          "tech",
          "projects",
          "will",
          "you",
          "be",
          "leading",
          "by",
          "the",
          "time",
          "you",
          "graduate",
          "have",
          "are"
        ],
        "hints": [
          "Pregunta en futuro continuo: 'What tech projects will you be leading...'",
          "Termina con 'by the time you graduate'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-1-e1",
        "audioText": "By 2035, biomedical researchers will have developed 3D printed organs for transplant surgery.",
        "correctAnswer": "By 2035, biomedical researchers will have developed 3D printed organs for transplant surgery.",
        "options": [
          "By 2035, biomedical researchers will have developed 3D printed organs for transplant surgery.",
          "In 2035, biomedical researchers will be developing 3D printed organs for transplant surgery.",
          "By 2030, biomedical doctors will have developed artificial hearts for surgery."
        ]
      },
      {
        "id": "7-1-e2",
        "audioText": "Next year at this exact time, our startup founders will be pitching in Silicon Valley.",
        "correctAnswer": "Next year at this exact time, our startup founders will be pitching in Silicon Valley.",
        "options": [
          "Next year at this exact time, our startup founders will be pitching in Silicon Valley.",
          "Next year at this exact time, our startup founders will have pitched in Silicon Valley.",
          "Next month at this exact time, our student leaders will be pitching in Silicon Valley."
        ]
      },
      {
        "id": "7-1-e3",
        "audioText": "Will artificial intelligence have replaced traditional software programming by 2040?",
        "correctAnswer": "Will artificial intelligence have replaced traditional software programming by 2040?",
        "options": [
          "Will artificial intelligence have replaced traditional software programming by 2040?",
          "Will artificial intelligence be replacing traditional software programming by 2040?",
          "Has artificial intelligence replaced traditional software programming by 2030?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-2",
    "badgeName": "Multiverse Theorist",
    "badgeEmoji": "🌌",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-2-1",
        "term": "Bidirectional Mixed Conditionals",
        "translation": "Condicionales Mixtos Bidireccionales (Presente ➔ Pasado & Pasado ➔ Presente)",
        "ipa": "/baɪdəˈrɛkʃənəl mɪkst/",
        "audioText": "Bidirectional Mixed Conditionals.",
        "example": "If I were more disciplined, I would have submitted the essay.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-2-2",
        "term": "If I were + WOULD HAVE done",
        "translation": "Condición permanente presente con resultado pasado",
        "ipa": "/ɪf aɪ wɜr wʊd hæv dʌn/",
        "audioText": "If I were, would have done.",
        "example": "If she spoke French, she would have gotten the job in Paris.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-2-3",
        "term": "Counterfactual scenario",
        "translation": "Escenario contrafáctico (realidad alterna)",
        "ipa": "/ˌkaʊntərˈfæktʃuəl/",
        "audioText": "Counterfactual scenario.",
        "example": "Historians study counterfactual scenarios of human history.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-2-4",
        "term": "Quantum superposition",
        "translation": "Superposición cuántica",
        "ipa": "/ˈkwɑntəm ˌsupərpəˈzɪʃən/",
        "audioText": "Quantum superposition.",
        "example": "Quantum particles exist in multiple simultaneous states.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-2-5",
        "term": "Butterfly effect",
        "translation": "Efecto mariposa",
        "ipa": "/ˈbʌtərˌflaɪ ɪˈfɛkt/",
        "audioText": "Butterfly effect.",
        "example": "Small decisions trigger a massive butterfly effect over time.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-2-6",
        "term": "Divergent timeline",
        "translation": "Línea temporal divergente",
        "ipa": "/daɪˈvɜrdʒənt ˈtaɪmˌlaɪn/",
        "audioText": "Divergent timeline.",
        "example": "Every choice creates a unique divergent timeline.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-2-7",
        "term": "How would history have unfolded if...?",
        "translation": "¿Cómo se habría desarrollado la historia si...?",
        "ipa": "/haʊ wʊd ˈhɪstəri hæv ʌnˈfoʊldɪd/",
        "audioText": "How would history have unfolded if...?",
        "example": "How would history have unfolded if the internet hadn't been invented?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-2-b1",
        "prompt": "Si yo fuera más disciplinado, habría terminado mi proyecto anoche.",
        "answer": "If I were more disciplined I would have finished my project last night",
        "tokens": [
          "If",
          "I",
          "were",
          "more",
          "disciplined",
          "I",
          "would",
          "have",
          "finished",
          "my",
          "project",
          "last",
          "night",
          "was",
          "will"
        ],
        "hints": [
          "Condición presente general: 'If I were more disciplined'.",
          "Resultado en pasado: 'I would have finished my project last night'."
        ]
      },
      {
        "id": "7-2-b2",
        "prompt": "Si ella hablara inglés fluido, no habría perdido la oportunidad en Boston.",
        "answer": "If she spoke fluent English she would not have lost the opportunity in Boston",
        "tokens": [
          "If",
          "she",
          "spoke",
          "fluent",
          "English",
          "she",
          "would",
          "not",
          "have",
          "lost",
          "the",
          "opportunity",
          "in",
          "Boston",
          "speaks",
          "had"
        ],
        "hints": [
          "Rasgo permanente presente: 'If she spoke fluent English'.",
          "Pasado negativo: 'she would not have lost the opportunity in Boston'."
        ]
      },
      {
        "id": "7-2-b3",
        "prompt": "¿Habrías ganado el campeonato si no tuvieras esa lesión de rodilla?",
        "answer": "Would you have won the championship if you did not have that knee injury",
        "tokens": [
          "Would",
          "you",
          "have",
          "won",
          "the",
          "championship",
          "if",
          "you",
          "did",
          "not",
          "have",
          "that",
          "knee",
          "injury",
          "had",
          "will"
        ],
        "hints": [
          "Pregunta de resultado pasado: 'Would you have won the championship...'",
          "Condición presente: 'if you did not have that knee injury'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-2-e1",
        "audioText": "If humanity were more cautious with carbon emissions, global temperatures would not have surged.",
        "correctAnswer": "If humanity were more cautious with carbon emissions, global temperatures would not have surged.",
        "options": [
          "If humanity were more cautious with carbon emissions, global temperatures would not have surged.",
          "If humanity was more cautious with carbon emissions, global temperatures would not surge.",
          "If humanity had been more cautious with energy, global temperatures would not have surged."
        ]
      },
      {
        "id": "7-2-e2",
        "audioText": "If Nicolas were not so terrified of public speaking, he would have accepted the keynote invitation.",
        "correctAnswer": "If Nicolas were not so terrified of public speaking, he would have accepted the keynote invitation.",
        "options": [
          "If Nicolas were not so terrified of public speaking, he would have accepted the keynote invitation.",
          "If Nicolas had not been terrified of public speaking, he would accept the keynote invitation.",
          "If Mateo were not so terrified of public speaking, he would have accepted the debate invitation."
        ]
      },
      {
        "id": "7-2-e3",
        "audioText": "How would our civilization have evolved if electricity had never been harnessed?",
        "correctAnswer": "How would our civilization have evolved if electricity had never been harnessed?",
        "options": [
          "How would our civilization have evolved if electricity had never been harnessed?",
          "How will our civilization evolve if electricity is never harnessed?",
          "Why would our society have collapsed if computers had never been invented?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-3",
    "badgeName": "Rhetoric Punchmaster",
    "badgeEmoji": "💥",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-3-1",
        "term": "Cleft Sentences: What we need is... (Pseudo-cleft)",
        "translation": "Oraciones hendidas: Lo que necesitamos es... (Énfasis retórico)",
        "ipa": "/klɛft ˈsɛntənsɪz/",
        "audioText": "Cleft Sentences.",
        "example": "What we truly need is decisive ethical leadership.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-3-2",
        "term": "It was [X] that revolutionized...",
        "translation": "Fue [X] lo que revolucionó... (Cleft con IT)",
        "ipa": "/ɪt wʌz ðæt/",
        "audioText": "It was that.",
        "example": "It was our algorithm that outperformed Silicon Valley models.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-3-3",
        "term": "All I want is... (Restricted focus)",
        "translation": "Todo lo que quiero es... (Enfoque total)",
        "ipa": "/ɔl aɪ wɑnt ɪz/",
        "audioText": "All I want is.",
        "example": "All I want is a fair opportunity to present our vision.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-3-4",
        "term": "Keynote punchline",
        "translation": "Frase de impacto / Remate de conferencia",
        "ipa": "/ˈkiˌnoʊt ˈpʌntʃˌlaɪn/",
        "audioText": "Keynote punchline.",
        "example": "A memorable punchline captures the audience instantly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-3-5",
        "term": "Emphatic structure",
        "translation": "Estructura enfática",
        "ipa": "/ɛmˈfætɪk ˈstrʌktʃər/",
        "audioText": "Emphatic structure.",
        "example": "Use emphatic structures to persuade venture capitalists.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-3-6",
        "term": "Disrupt the industry",
        "translation": "Disrumpir / Revolucionar la industria",
        "ipa": "/dɪsˈrʌpt ði ˈɪndəstri/",
        "audioText": "Disrupt the industry.",
        "example": "Our AI software aims to disrupt the logistics industry.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-3-7",
        "term": "What makes our solution unique is...",
        "translation": "Lo que hace única a nuestra solución es...",
        "ipa": "/wʌt meɪks aʊər səˈluʃən juˈnik ɪz/",
        "audioText": "What makes our solution unique is...",
        "example": "What makes our solution unique is proprietary neural compression.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-3-b1",
        "prompt": "Lo que nuestra generación necesita es una educación bilingüe y tecnológica.",
        "answer": "What our generation needs is bilingual and technological education",
        "tokens": [
          "What",
          "our",
          "generation",
          "needs",
          "is",
          "bilingual",
          "and",
          "technological",
          "education",
          "that",
          "are"
        ],
        "hints": [
          "Pseudo-cleft: 'What our generation needs is...'",
          "Usa 'bilingual and technological education'."
        ]
      },
      {
        "id": "7-3-b2",
        "prompt": "No fue el dinero lo que nos inspiró a crear esta plataforma.",
        "answer": "It was not money that inspired us to build this platform",
        "tokens": [
          "It",
          "was",
          "not",
          "money",
          "that",
          "inspired",
          "us",
          "to",
          "build",
          "this",
          "platform",
          "what",
          "did"
        ],
        "hints": [
          "It-cleft negativo: 'It was not money that inspired us...'",
          "Termina con 'to build this platform'."
        ]
      },
      {
        "id": "7-3-b3",
        "prompt": "¿Qué es lo que hace que tu proyecto sea verdaderamente revolucionario?",
        "answer": "What is it that makes your project truly revolutionary",
        "tokens": [
          "What",
          "is",
          "it",
          "that",
          "makes",
          "your",
          "project",
          "truly",
          "revolutionary",
          "does",
          "make"
        ],
        "hints": [
          "Pregunta enfática: 'What is it that makes...'",
          "Usa 'your project truly revolutionary'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-3-e1",
        "audioText": "What makes Maven English unique is our 100 percent bespoke interactive methodology.",
        "correctAnswer": "What makes Maven English unique is our 100 percent bespoke interactive methodology.",
        "options": [
          "What makes Maven English unique is our 100 percent bespoke interactive methodology.",
          "What makes Maven English popular is our generic automated methodology.",
          "All that makes Maven English unique is our traditional classroom methodology."
        ]
      },
      {
        "id": "7-3-e2",
        "audioText": "It was the female teenage co-founder who engineered the core machine learning algorithm.",
        "correctAnswer": "It was the female teenage co-founder who engineered the core machine learning algorithm.",
        "options": [
          "It was the female teenage co-founder who engineered the core machine learning algorithm.",
          "It was the male teenage co-founder who designed the core machine learning algorithm.",
          "What the female teenage co-founder engineered was the machine learning algorithm."
        ]
      },
      {
        "id": "7-3-e3",
        "audioText": "All we are asking for today is a two hundred thousand dollar seed capital investment.",
        "correctAnswer": "All we are asking for today is a two hundred thousand dollar seed capital investment.",
        "options": [
          "All we are asking for today is a two hundred thousand dollar seed capital investment.",
          "What we are asking for today is a one hundred thousand dollar grant.",
          "All they are asking for today is a three hundred thousand dollar venture investment."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-4",
    "badgeName": "Inversion Orator",
    "badgeEmoji": "🏛️⚡",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-4-1",
        "term": "Negative Inversion: Seldom / Rarely have we seen",
        "translation": "Inversión negativa: Raras veces hemos presenciado (Oratoria de élite)",
        "ipa": "/ˈsɛldəm hæv wi sin/",
        "audioText": "Seldom have we seen.",
        "example": "Seldom have we seen such brilliant teenage innovation.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-4-2",
        "term": "Not only [did/does/is]... but also",
        "translation": "No sólo [auxiliar + sujeto]... sino también",
        "ipa": "/nɑt ˈoʊnli dɪd/",
        "audioText": "Not only did, but also.",
        "example": "Not only did she win first place, but she also founded a startup.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-4-3",
        "term": "Under no circumstances should you...",
        "translation": "Bajo ninguna circunstancia deberías...",
        "ipa": "/ˈʌndər noʊ ˈsɜrkəmˌstænsɪz/",
        "audioText": "Under no circumstances should you...",
        "example": "Under no circumstances should you compromise user data privacy.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-4-4",
        "term": "Parliamentary rhetoric",
        "translation": "Retórica parlamentaria y solemne",
        "ipa": "/ˌpɑrləmɛnˈtɛri ˈrɛtərɪk/",
        "audioText": "Parliamentary rhetoric.",
        "example": "Inversion adds majestic gravity to parliamentary rhetoric.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-4-5",
        "term": "Hardly had [had + S + V3] when...",
        "translation": "Apenas [había + sujeto + participio] cuando...",
        "ipa": "/ˈhɑrdli hæd/",
        "audioText": "Hardly had we started when.",
        "example": "Hardly had we launched the app when traffic crashed the servers.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-4-6",
        "term": "Solemn conviction",
        "translation": "Solemne convicción",
        "ipa": "/ˈsɑləm kənˈvɪkʃən/",
        "audioText": "Solemn conviction.",
        "example": "Speak with solemn conviction when defending human rights.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-4-7",
        "term": "Never before have youth had such power",
        "translation": "Nunca antes la juventud había tenido tanto poder",
        "ipa": "/ˈnɛvər bɪˈfɔr hæv juθ hæd/",
        "audioText": "Never before have youth had such power.",
        "example": "Never before have youth had such technological power to lead.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-4-b1",
        "prompt": "Raras veces hemos presenciado una propuesta tan brillante e inspiradora.",
        "answer": "Seldom have we witnessed such a brilliant and inspiring proposal",
        "tokens": [
          "Seldom",
          "have",
          "we",
          "witnessed",
          "such",
          "a",
          "brilliant",
          "and",
          "inspiring",
          "proposal",
          "we",
          "had"
        ],
        "hints": [
          "Inversión: Adverbio negativo 'Seldom' + auxiliar 'have' + sujeto 'we' + participio 'witnessed'.",
          "Usa 'such a brilliant and inspiring proposal'."
        ]
      },
      {
        "id": "7-4-b2",
        "prompt": "Bajo ninguna circunstancia debemos ignorar el cambio climático.",
        "answer": "Under no circumstances must we ignore climate change",
        "tokens": [
          "Under",
          "no",
          "circumstances",
          "must",
          "we",
          "ignore",
          "climate",
          "change",
          "we",
          "shouldn't"
        ],
        "hints": [
          "Inversión con modal: 'Under no circumstances must we...'",
          "Termina con 'ignore climate change'."
        ]
      },
      {
        "id": "7-4-b3",
        "prompt": "¿No sólo ganaron la competencia, sino que también consiguieron inversión?",
        "answer": "Not only did they win the competition but they also secured investment",
        "tokens": [
          "Not",
          "only",
          "did",
          "they",
          "win",
          "the",
          "competition",
          "but",
          "they",
          "also",
          "secured",
          "investment",
          "won",
          "are"
        ],
        "hints": [
          "Estructura: 'Not only did they win... but they also secured investment'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-4-e1",
        "audioText": "Never in modern history has an educational platform evolved as rapidly as Maven English.",
        "correctAnswer": "Never in modern history has an educational platform evolved as rapidly as Maven English.",
        "options": [
          "Never in modern history has an educational platform evolved as rapidly as Maven English.",
          "Rarely in modern history have an educational platform evolved as rapidly as Maven English.",
          "Never in ancient history had an educational platform grown as rapidly as Maven English."
        ]
      },
      {
        "id": "7-4-e2",
        "audioText": "Not only does our software accelerate learning speed, but it also guarantees long term retention.",
        "correctAnswer": "Not only does our software accelerate learning speed, but it also guarantees long term retention.",
        "options": [
          "Not only does our software accelerate learning speed, but it also guarantees long term retention.",
          "Not only our software accelerates learning speed, but it also guarantees long term retention.",
          "Not only did our software accelerate learning speed, but it guarantees short term retention."
        ]
      },
      {
        "id": "7-4-e3",
        "audioText": "Under no circumstances will the founders compromise user privacy for advertisement profits.",
        "correctAnswer": "Under no circumstances will the founders compromise user privacy for advertisement profits.",
        "options": [
          "Under no circumstances will the founders compromise user privacy for advertisement profits.",
          "Under no circumstances the founders will compromise user privacy for advertisement profits.",
          "Under any circumstances will the founders protect user privacy for advertisement profits."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-5",
    "badgeName": "Diplomatic Negotiator",
    "badgeEmoji": "🕊️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-5-1",
        "term": "Hedging & Softening (It could be argued that...)",
        "translation": "Atenuación y Suavización diplomática: Podría argumentarse que...",
        "ipa": "/ˈhɛdʒɪŋ ænd ˈsɔfənɪŋ/",
        "audioText": "Hedging and Softening.",
        "example": "It could be argued that the policy requires further review.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-5-2",
        "term": "Tended to suggest / Seemed to indicate",
        "translation": "Tendió a sugerir / Pareció indicar (Matiz no dogmático)",
        "ipa": "/ˈtɛndəd tu səɡˈdʒɛst/",
        "audioText": "Tended to suggest.",
        "example": "Preliminary data tended to suggest positive economic growth.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-5-3",
        "term": "With all due respect...",
        "translation": "Con el debido respeto... (Objeción de alta cortesía)",
        "ipa": "/wɪð ɔl du rɪˈspɛkt/",
        "audioText": "With all due respect.",
        "example": "With all due respect, our metrics show a different reality.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-5-4",
        "term": "Diplomatic tact",
        "translation": "Tacto diplomático",
        "ipa": "/ˌdɪpləˈmætɪk tækt/",
        "audioText": "Diplomatic tact.",
        "example": "Diplomatic tact prevents unnecessary conflict in negotiations.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-5-5",
        "term": "To a certain extent",
        "translation": "Hasta cierto punto / En cierta medida",
        "ipa": "/tu ə ˈsɜrtən ɪkˈstɛnt/",
        "audioText": "To a certain extent.",
        "example": "We agree with your assessment to a certain extent.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-5-6",
        "term": "Constructive compromise",
        "translation": "Compromiso / Acuerdo constructivo",
        "ipa": "/kənˈstrʌktɪv ˈkɑmprəˌmaɪz/",
        "audioText": "Constructive compromise.",
        "example": "Both international delegations reached a constructive compromise.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-5-7",
        "term": "Would it be feasible to consider...?",
        "translation": "¿Sería factible considerar...?",
        "ipa": "/wʊd ɪt bi ˈfizəbəl tu kənˈsɪdər/",
        "audioText": "Would it be feasible to consider...?",
        "example": "Would it be feasible to consider a bilateral pilot program?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-5-b1",
        "prompt": "Podría argumentarse que esta medida beneficia a ambas delegaciones.",
        "answer": "It could be argued that this measure benefits both delegations",
        "tokens": [
          "It",
          "could",
          "be",
          "argued",
          "that",
          "this",
          "measure",
          "benefits",
          "both",
          "delegations",
          "is",
          "arguing"
        ],
        "hints": [
          "Fórmula de hedging: 'It could be argued that...'",
          "Usa 'this measure benefits both delegations'."
        ]
      },
      {
        "id": "7-5-b2",
        "prompt": "Con el debido respeto, los datos preliminares no apoyan esa conclusión.",
        "answer": "With all due respect the preliminary data does not support that conclusion",
        "tokens": [
          "With",
          "all",
          "due",
          "respect",
          "the",
          "preliminary",
          "data",
          "does",
          "not",
          "support",
          "that",
          "conclusion",
          "is",
          "argued"
        ],
        "hints": [
          "Objeción diplomática: 'With all due respect...'",
          "Usa 'the preliminary data does not support that conclusion'."
        ]
      },
      {
        "id": "7-5-b3",
        "prompt": "¿Sería factible extender el plazo del acuerdo comercial?",
        "answer": "Would it be feasible to extend the commercial agreement deadline",
        "tokens": [
          "Would",
          "it",
          "be",
          "feasible",
          "to",
          "extend",
          "the",
          "commercial",
          "agreement",
          "deadline",
          "Is",
          "extending"
        ],
        "hints": [
          "Petición atenuada: 'Would it be feasible to extend...'",
          "Termina con 'the commercial agreement deadline'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-5-e1",
        "audioText": "It would appear that the proposed regulatory framework requires further refinement.",
        "correctAnswer": "It would appear that the proposed regulatory framework requires further refinement.",
        "options": [
          "It would appear that the proposed regulatory framework requires further refinement.",
          "It definitely proves that the proposed regulatory framework is completely broken.",
          "It appears that the approved regulatory framework requires no refinement."
        ]
      },
      {
        "id": "7-5-e2",
        "audioText": "With all due respect, our internal analytics tend to indicate an alternative outcome.",
        "correctAnswer": "With all due respect, our internal analytics tend to indicate an alternative outcome.",
        "options": [
          "With all due respect, our internal analytics tend to indicate an alternative outcome.",
          "Without due respect, our external analytics definitely prove an alternative outcome.",
          "With all due respect, our financial records tend to confirm your prediction."
        ]
      },
      {
        "id": "7-5-e3",
        "audioText": "Would it be feasible to explore a joint venture before finalizing the acquisition?",
        "correctAnswer": "Would it be feasible to explore a joint venture before finalizing the acquisition?",
        "options": [
          "Would it be feasible to explore a joint venture before finalizing the acquisition?",
          "Is it possible to cancel the joint venture before finalizing the acquisition?",
          "Would it be feasible to accept the buyout before signing the agreement?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-6",
    "badgeName": "Ivy Essayist",
    "badgeEmoji": "📜",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-6-1",
        "term": "Thesis Statement (Arguable claim + Roadmap)",
        "translation": "Tesis académica: Afirmación debatible con mapa de argumentación",
        "ipa": "/ˈθisɪs ˈsteɪtmənt/",
        "audioText": "Thesis Statement.",
        "example": "A strong thesis statement anchors the entire scholarly paper.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-6-2",
        "term": "Tripartite Topic Sentences",
        "translation": "Oraciones temáticas tripartitas para párrafos de desarrollo",
        "ipa": "/traɪˈpɑrtaɪt ˈtɑpɪk ˈsɛntənsɪz/",
        "audioText": "Tripartite Topic Sentences.",
        "example": "Each body paragraph explores one pillar of the thesis.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-6-3",
        "term": "Notwithstanding / Albeit",
        "translation": "A pesar de / Si bien (Conectores formales de nivel C1/C2)",
        "ipa": "/ˌnɑtwɪθˈstændɪŋ / ɔlˈbiɪt/",
        "audioText": "Notwithstanding. Albeit.",
        "example": "Notwithstanding economic headwinds, the initiative flourished.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-6-4",
        "term": "Empirical evidence & Citations",
        "translation": "Evidencia empírica y Citas académicas APA",
        "ipa": "/ɛmˈpɪrɪkəl ˈɛvədəns ænd saɪˈteɪʃənz/",
        "audioText": "Empirical evidence and Citations.",
        "example": "Every claim must be substantiated by empirical evidence.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-6-5",
        "term": "Scholarly rigor",
        "translation": "Rigor académico y metodológico",
        "ipa": "/ˈskɑlərli ˈrɪɡər/",
        "audioText": "Scholarly rigor.",
        "example": "Writing with scholarly rigor elevates student research.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-6-6",
        "term": "Consequently / Inevitably",
        "translation": "Por consiguiente / Inevitablemente",
        "ipa": "/ˈkɑnsəkwəntli / ɪnˈɛvətəbli/",
        "audioText": "Consequently. Inevitably.",
        "example": "Consequently, public policy must adapt to technological disruption.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-6-7",
        "term": "This essay argues that...",
        "translation": "Este ensayo sostiene que...",
        "ipa": "/ðɪs ˈɛseɪ ˈɑrɡjuz ðæt/",
        "audioText": "This essay argues that...",
        "example": "This essay argues that bilingualism enhances neural plasticity.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-6-b1",
        "prompt": "Este ensayo sostiene que la inteligencia artificial potencia la creatividad humana.",
        "answer": "This essay argues that artificial intelligence enhances human creativity",
        "tokens": [
          "This",
          "essay",
          "argues",
          "that",
          "artificial",
          "intelligence",
          "enhances",
          "human",
          "creativity",
          "is",
          "enhancing"
        ],
        "hints": [
          "Apertura de tesis académica: 'This essay argues that...'",
          "Usa 'artificial intelligence enhances human creativity'."
        ]
      },
      {
        "id": "7-6-b2",
        "prompt": "A pesar de los desafíos financieros, el proyecto alcanzó resultados sobresalientes.",
        "answer": "Notwithstanding financial challenges the project achieved outstanding results",
        "tokens": [
          "Notwithstanding",
          "financial",
          "challenges",
          "the",
          "project",
          "achieved",
          "outstanding",
          "results",
          "Although",
          "is"
        ],
        "hints": [
          "Conector formal C1: 'Notwithstanding financial challenges...'",
          "Termina con 'the project achieved outstanding results'."
        ]
      },
      {
        "id": "7-6-b3",
        "prompt": "¿Cómo respalda la evidencia empírica la hipótesis principal?",
        "answer": "How does empirical evidence substantiate the primary hypothesis",
        "tokens": [
          "How",
          "does",
          "empirical",
          "evidence",
          "substantiate",
          "the",
          "primary",
          "hypothesis",
          "is",
          "substantiating"
        ],
        "hints": [
          "Pregunta de rigor académico: 'How does empirical evidence substantiate...'",
          "Hipótesis principal = 'the primary hypothesis'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-6-e1",
        "audioText": "This essay demonstrates that bilingual education significantly boosts cognitive flexibility in adolescents.",
        "correctAnswer": "This essay demonstrates that bilingual education significantly boosts cognitive flexibility in adolescents.",
        "options": [
          "This essay demonstrates that bilingual education significantly boosts cognitive flexibility in adolescents.",
          "This paper argues that monolingual education slightly boosts cognitive flexibility in children.",
          "This research shows that bilingual education negatively impacts cognitive focus in teenagers."
        ]
      },
      {
        "id": "7-6-e2",
        "audioText": "Notwithstanding initial technological hurdles, the neural network achieved a 99 percent accuracy rate.",
        "correctAnswer": "Notwithstanding initial technological hurdles, the neural network achieved a 99 percent accuracy rate.",
        "options": [
          "Notwithstanding initial technological hurdles, the neural network achieved a 99 percent accuracy rate.",
          "Despite massive technological breakthroughs, the neural network failed the accuracy tests.",
          "Notwithstanding initial financial hurdles, the mobile app reached one million users."
        ]
      },
      {
        "id": "7-6-e3",
        "audioText": "Consequently, higher academic institutions must reevaluate traditional assessment paradigms.",
        "correctAnswer": "Consequently, higher academic institutions must reevaluate traditional assessment paradigms.",
        "options": [
          "Consequently, higher academic institutions must reevaluate traditional assessment paradigms.",
          "Furthermore, secondary educational centers should preserve traditional testing formats.",
          "Therefore, global universities have abolished all traditional examination systems."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-7",
    "badgeName": "Scientific Pioneer",
    "badgeEmoji": "🔬",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-7-1",
        "term": "IMRAD Framework (Introduction, Methods, Results, and Discussion)",
        "translation": "Estructura científica IMRAD para abstracts y papers",
        "ipa": "/ˈɪmræd ˈfreɪmˌwɜrk/",
        "audioText": "IMRAD Framework.",
        "example": "Every scientific paper follows the rigorous IMRAD structure.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-7-2",
        "term": "The objective of this study was to evaluate...",
        "translation": "El objetivo de este estudio fue evaluar... (Sección de Introducción)",
        "ipa": "/ði əbˈdʒɛktɪv ʌv ðɪs ˈstʌdi wʌz/",
        "audioText": "The objective of this study was to evaluate.",
        "example": "The objective of this study was to evaluate solar cell efficiency.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-7-3",
        "term": "Statistically significant (p < 0.05)",
        "translation": "Estadísticamente significativo (Validación cuantitativa)",
        "ipa": "/stəˈtɪstɪkli sɪɡˈnɪfɪkənt/",
        "audioText": "Statistically significant.",
        "example": "The results showed a statistically significant improvement.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-7-4",
        "term": "Peer-reviewed journal",
        "translation": "Revista científica arbitrada / revisada por pares",
        "ipa": "/pɪr rɪˈvjud ˈdʒɜrnəl/",
        "audioText": "Peer-reviewed journal.",
        "example": "Publishing in a peer-reviewed journal validates discoveries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-7-5",
        "term": "Sample size & Methodology",
        "translation": "Tamaño de muestra y Metodología experimental",
        "ipa": "/ˈsæmpəl saɪz ænd ˌmɛθəˈdɑlədʒi/",
        "audioText": "Sample size and Methodology.",
        "example": "A sample size of 5,000 subjects ensured high statistical power.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-7-6",
        "term": "Correlate with / Stem from",
        "translation": "Correlacionarse con / Derivarse de",
        "ipa": "/ˈkɔrəˌleɪt wɪð / stɛm frəm/",
        "audioText": "Correlate with. Stem from.",
        "example": "High language proficiency correlates with problem-solving agility.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-7-7",
        "term": "These findings suggest that...",
        "translation": "Estos hallazgos sugieren que...",
        "ipa": "/ðiz ˈfaɪndɪŋz səɡˈdʒɛst ðæt/",
        "audioText": "These findings suggest that...",
        "example": "These findings suggest that quantum encryption is scalable.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-7-b1",
        "prompt": "El objetivo de este estudio fue evaluar la eficiencia del algoritmo cuántico.",
        "answer": "The objective of this study was to evaluate the quantum algorithm efficiency",
        "tokens": [
          "The",
          "objective",
          "of",
          "this",
          "study",
          "was",
          "to",
          "evaluate",
          "the",
          "quantum",
          "algorithm",
          "efficiency",
          "is",
          "evaluating"
        ],
        "hints": [
          "Fórmula estándar de abstract IMRAD: 'The objective of this study was to evaluate...'",
          "Usa 'the quantum algorithm efficiency'."
        ]
      },
      {
        "id": "7-7-b2",
        "prompt": "Los datos recopilados no demostraron una correlación estadísticamente significativa.",
        "answer": "The collected data did not demonstrate a statistically significant correlation",
        "tokens": [
          "The",
          "collected",
          "data",
          "did",
          "not",
          "demonstrate",
          "a",
          "statistically",
          "significant",
          "correlation",
          "does",
          "demonstrating"
        ],
        "hints": [
          "Negación cuantitativa: 'did not demonstrate...'",
          "Usa 'a statistically significant correlation'."
        ]
      },
      {
        "id": "7-7-b3",
        "prompt": "¿Qué sugieren estos hallazgos experimentales para la futura investigación?",
        "answer": "What do these experimental findings suggest for future research",
        "tokens": [
          "What",
          "do",
          "these",
          "experimental",
          "findings",
          "suggest",
          "for",
          "future",
          "research",
          "did",
          "suggesting"
        ],
        "hints": [
          "Pregunta de conclusión científica: 'What do these experimental findings suggest...'",
          "Termina con 'for future research'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-7-e1",
        "audioText": "The objective of this clinical trial was to measure memory retention in bilingual students.",
        "correctAnswer": "The objective of this clinical trial was to measure memory retention in bilingual students.",
        "options": [
          "The objective of this clinical trial was to measure memory retention in bilingual students.",
          "The objective of this social study was to examine test anxiety in high school students.",
          "The purpose of this survey was to evaluate language fluency across age groups."
        ]
      },
      {
        "id": "7-7-e2",
        "audioText": "Our experimental results demonstrated a statistically significant 35 percent speed increase.",
        "correctAnswer": "Our experimental results demonstrated a statistically significant 35 percent speed increase.",
        "options": [
          "Our experimental results demonstrated a statistically significant 35 percent speed increase.",
          "Our clinical findings demonstrated a minor 15 percent increase in energy consumption.",
          "The laboratory tests proved a statistically significant 50 percent error reduction."
        ]
      },
      {
        "id": "7-7-e3",
        "audioText": "These findings suggest that neural plasticity remains highly malleable throughout adolescence.",
        "correctAnswer": "These findings suggest that neural plasticity remains highly malleable throughout adolescence.",
        "options": [
          "These findings suggest that neural plasticity remains highly malleable throughout adolescence.",
          "These findings prove that brain development ceases completely during early teenage years.",
          "The conclusions indicate that cognitive speed declines rapidly throughout childhood."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-8",
    "badgeName": "UN Ambassador",
    "badgeEmoji": "🌐🇺🇳",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-8-1",
        "term": "Point of Order (Procedural objection)",
        "translation": "Punto de Orden: Objeción a una violación del reglamento de debate",
        "ipa": "/pɔɪnt ʌv ˈɔrdər/",
        "audioText": "Point of Order.",
        "example": "Point of order: the delegate has exceeded the time limit.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-8-2",
        "term": "Motion to table / Motion to vote",
        "translation": "Moción para suspender el debate / Moción para proceder a votación",
        "ipa": "/ˈmoʊʃən tu ˈteɪbəl/",
        "audioText": "Motion to table.",
        "example": "The delegation moves a motion to vote on Draft Resolution 1.2.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-8-3",
        "term": "Yield the floor to the Chair",
        "translation": "Ceder la palabra a la Mesa Directiva / Presidente",
        "ipa": "/jild ðə flɔr tu ðə tʃɛr/",
        "audioText": "Yield the floor to the Chair.",
        "example": "The delegate yields the remaining time to the Chair.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-8-4",
        "term": "Draft Resolution & Sponsors",
        "translation": "Proyecto de Resolución y Países Patrocinadores",
        "ipa": "/dræft ˌrɛzəˈluʃən ænd ˈspɑnsərz/",
        "audioText": "Draft Resolution and Sponsors.",
        "example": "Colombia and Brazil are proud sponsors of this resolution.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-8-5",
        "term": "Moderated caucus",
        "translation": "Debate moderado con tiempos de orador fijados",
        "ipa": "/ˈmɑdəˌreɪtɪd ˈkɔkəs/",
        "audioText": "Moderated caucus.",
        "example": "We propose a ten-minute moderated caucus on renewable subsidies.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-8-6",
        "term": "Unmoderated caucus (Lobbying)",
        "translation": "Debate libre / Cabildeo informal para negociar resoluciones",
        "ipa": "/ʌnˈmɑdəˌreɪtɪd ˈkɔkəs/",
        "audioText": "Unmoderated caucus.",
        "example": "Delegates formed coalitions during the unmoderated caucus.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-8-7",
        "term": "The delegate of Colombia moves for...",
        "translation": "La delegación de Colombia propone...",
        "ipa": "/ðə ˈdɛləɡət ʌv kəˈlʌmbiə muvz fɔr/",
        "audioText": "The delegate of Colombia moves for...",
        "example": "The delegate of Colombia moves for an unmoderated caucus.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-8-b1",
        "prompt": "La delegación de Colombia propone un debate moderado de diez minutos.",
        "answer": "The delegation of Colombia proposes a ten minute moderated caucus",
        "tokens": [
          "The",
          "delegation",
          "of",
          "Colombia",
          "proposes",
          "a",
          "ten",
          "minute",
          "moderated",
          "caucus",
          "proposed",
          "is"
        ],
        "hints": [
          "Fórmula de Model UN: 'The delegation of Colombia proposes...'",
          "Usa 'a ten minute moderated caucus'."
        ]
      },
      {
        "id": "7-8-b2",
        "prompt": "El orador no cedió su tiempo restante a ningún otro delegado.",
        "answer": "The speaker did not yield remaining time to any other delegate",
        "tokens": [
          "The",
          "speaker",
          "did",
          "not",
          "yield",
          "remaining",
          "time",
          "to",
          "any",
          "other",
          "delegate",
          "yields",
          "yielded"
        ],
        "hints": [
          "Ceder la palabra/tiempo = 'yield remaining time'.",
          "Usa 'did not yield remaining time to any other delegate'."
        ]
      },
      {
        "id": "7-8-b3",
        "prompt": "¿Acepta la mesa directiva la moción para proceder a la votación?",
        "answer": "Does the Chair accept the motion to proceed to vote",
        "tokens": [
          "Does",
          "the",
          "Chair",
          "accept",
          "the",
          "motion",
          "to",
          "proceed",
          "to",
          "vote",
          "Is",
          "accepting"
        ],
        "hints": [
          "Pregunta de procedimiento parlamentario: 'Does the Chair accept the motion...'",
          "Usa 'to proceed to vote'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-8-e1",
        "audioText": "The delegate of Colombia yields the remainder of her speaking time to the Chair.",
        "correctAnswer": "The delegate of Colombia yields the remainder of her speaking time to the Chair.",
        "options": [
          "The delegate of Colombia yields the remainder of her speaking time to the Chair.",
          "The delegate of Colombia yields her speaking time to the delegate of Canada.",
          "The Chair yields the remainder of the session to the delegate of Colombia."
        ]
      },
      {
        "id": "7-8-e2",
        "audioText": "Point of Order: the honorable delegate has violated diplomatic decorum during debate.",
        "correctAnswer": "Point of Order: the honorable delegate has violated diplomatic decorum during debate.",
        "options": [
          "Point of Order: the honorable delegate has violated diplomatic decorum during debate.",
          "Point of Information: the delegate has introduced new economic statistics during caucus.",
          "Point of Inquiry: when will the committee vote on Draft Resolution 1.1?"
        ]
      },
      {
        "id": "7-8-e3",
        "audioText": "Are there any seconds or objections to the motion for an unmoderated lobbying caucus?",
        "correctAnswer": "Are there any seconds or objections to the motion for an unmoderated lobbying caucus?",
        "options": [
          "Are there any seconds or objections to the motion for an unmoderated lobbying caucus?",
          "Are there any amendments to the resolution for an international climate summit?",
          "Were there any votes against the motion for a moderated committee caucus?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-9",
    "badgeName": "Crisis PR Strategist",
    "badgeEmoji": "🛡️🎙️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-9-1",
        "term": "Media Bridging Technique (Acknowledge ➔ Bridge ➔ Core Message)",
        "translation": "Técnica de Puenteo ante medios: Reconocer ➔ Conectar ➔ Mensaje clave",
        "ipa": "/ˈmidiə ˈbrɪdʒɪŋ ˈtɛkˌnik/",
        "audioText": "Media Bridging Technique.",
        "example": "That is a valid concern; however, what is crucial to understand is...",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-9-2",
        "term": "The real issue here is...",
        "translation": "El verdadero asunto de fondo aquí es... (Frase puente)",
        "ipa": "/ðə riəl ˈɪʃu hɪr ɪz/",
        "audioText": "The real issue here is.",
        "example": "The real issue here is safeguarding consumer data integrity.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-9-3",
        "term": "Hostile press & Loaded questions",
        "translation": "Prensa hostil y Preguntas capciosas",
        "ipa": "/ˈhɑstəl prɛs ænd ˈloʊdəd ˈkwɛstʃənz/",
        "audioText": "Hostile press and Loaded questions.",
        "example": "Leaders remain completely calm during loaded journalist questions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-9-4",
        "term": "Pivot to safety and values",
        "translation": "Girar hacia la seguridad y los valores corporativos",
        "ipa": "/ˈpɪvət tu ˈseɪfti/",
        "audioText": "Pivot to safety and values.",
        "example": "Always pivot to user safety and corporate transparency.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-9-5",
        "term": "Defuse tension",
        "translation": "Desactivar la tensión y la hostilidad",
        "ipa": "/dɪˈfjuz ˈtɛnʃən/",
        "audioText": "Defuse tension.",
        "example": "A poised tone of voice defuses tension instantly.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-9-6",
        "term": "Unwavering commitment",
        "translation": "Compromiso inquebrantable",
        "ipa": "/ʌnˈweɪvərɪŋ kəˈmɪtmənt/",
        "audioText": "Unwavering commitment.",
        "example": "Our startup maintains an unwavering commitment to youth ethics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-9-7",
        "term": "Let me put that into perspective...",
        "translation": "Permítame poner eso en perspectiva...",
        "ipa": "/lɛt mi pʊt ðæt ˈɪntu pərˈspɛktɪv/",
        "audioText": "Let me put that into perspective.",
        "example": "Let me put that into perspective by sharing verified data.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-9-b1",
        "prompt": "Entiendo su preocupación; sin embargo, el asunto de fondo es la seguridad de los usuarios.",
        "answer": "I understand your concern however the real issue is user safety",
        "tokens": [
          "I",
          "understand",
          "your",
          "concern",
          "however",
          "the",
          "real",
          "issue",
          "is",
          "user",
          "safety",
          "what",
          "are"
        ],
        "hints": [
          "Técnica de puente: 'I understand your concern however...'",
          "Usa 'the real issue is user safety'."
        ]
      },
      {
        "id": "7-9-b2",
        "prompt": "El portavoz no evadió la pregunta difícil ante los periodistas.",
        "answer": "The spokesperson did not evade the difficult question before journalists",
        "tokens": [
          "The",
          "spokesperson",
          "did",
          "not",
          "evade",
          "the",
          "difficult",
          "question",
          "before",
          "journalists",
          "evading",
          "does"
        ],
        "hints": [
          "Negación: 'did not evade...'",
          "Usa 'the difficult question before journalists'."
        ]
      },
      {
        "id": "7-9-b3",
        "prompt": "¿Cómo responderías a las acusaciones de la prensa sobre la fuga de datos?",
        "answer": "How would you respond to press allegations regarding the data leak",
        "tokens": [
          "How",
          "would",
          "you",
          "respond",
          "to",
          "press",
          "allegations",
          "regarding",
          "the",
          "data",
          "leak",
          "did",
          "answering"
        ],
        "hints": [
          "Pregunta de manejo de crisis: 'How would you respond to press allegations...'",
          "Fuga de datos = 'the data leak'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-9-e1",
        "audioText": "I understand the reporter's question; however, what is paramount is our user privacy commitment.",
        "correctAnswer": "I understand the reporter's question; however, what is paramount is our user privacy commitment.",
        "options": [
          "I understand the reporter's question; however, what is paramount is our user privacy commitment.",
          "I reject the journalist's claim; because what matters is maximum financial quarterly profit.",
          "I see the media's perspective; therefore, we must immediately shut down our servers."
        ]
      },
      {
        "id": "7-9-e2",
        "audioText": "Let me put that into perspective: out of five million transactions, zero security breaches occurred.",
        "correctAnswer": "Let me put that into perspective: out of five million transactions, zero security breaches occurred.",
        "options": [
          "Let me put that into perspective: out of five million transactions, zero security breaches occurred.",
          "Let me clarify that rumor: out of ten thousand users, several security breaches took place.",
          "Let me summarize the facts: over two million transactions suffered severe security leaks."
        ]
      },
      {
        "id": "7-9-e3",
        "audioText": "How does the executive team plan to restore institutional trust following this outage?",
        "correctAnswer": "How does the executive team plan to restore institutional trust following this outage?",
        "options": [
          "How does the executive team plan to restore institutional trust following this outage?",
          "Why did the engineering team refuse to fix the software bug during the product launch?",
          "When will the executive board release the official financial statement to the public?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-10",
    "badgeName": "Venture Economist",
    "badgeEmoji": "📈💰",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-10-1",
        "term": "Customer Acquisition Cost (CAC)",
        "translation": "Costo de Adquisición de Cliente (Métrica financiera clave)",
        "ipa": "/ˈkʌstəmər ˌækwəˈzɪʃən kɔst/",
        "audioText": "Customer Acquisition Cost.",
        "example": "Our organic viral loop reduced our CAC to two dollars.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-2",
        "term": "Lifetime Value (LTV)",
        "translation": "Valor de Vida del Cliente (Ingresos totales por usuario)",
        "ipa": "/ˈlaɪfˌtaɪm ˈvælju/",
        "audioText": "Lifetime Value.",
        "example": "A high LTV ensures sustainable startup unit economics.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-3",
        "term": "LTV to CAC Ratio (Optimal 3:1)",
        "translation": "Ratio de Retorno por Cliente (Ideal 3 a 1 o superior)",
        "ipa": "/ˌɛl ti ˈvi tu ˌsi eɪ ˈsi ˈreɪʃioʊ/",
        "audioText": "LTV to CAC Ratio.",
        "example": "Our LTV to CAC ratio stands at an outstanding four to one.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-4",
        "term": "Monthly Churn Rate",
        "translation": "Tasa de Cancelación / Deserción Mensual",
        "ipa": "/ˈmʌnθli tʃɜrn reɪt/",
        "audioText": "Monthly Churn Rate.",
        "example": "Our engaging gamification reduced churn rate below two percent.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-5",
        "term": "Burn Rate & Runway",
        "translation": "Tasa de Quema de Capital y Meses de Supervivencia",
        "ipa": "/bɜrn reɪt ænd ˈrʌnˌweɪ/",
        "audioText": "Burn Rate and Runway.",
        "example": "We have 18 months of runway at our current burn rate.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-6",
        "term": "Annual Recurring Revenue (ARR)",
        "translation": "Ingresos Recurrentes Anuales (Suscripciones)",
        "ipa": "/ˈænjuəl rɪˈkɜrɪŋ ˈrɛvəˌnu/",
        "audioText": "Annual Recurring Revenue.",
        "example": "Our SaaS platform is projected to hit one million ARR.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-10-7",
        "term": "What is your projected margin?",
        "translation": "¿Cuál es su margen de rentabilidad proyectado?",
        "ipa": "/wʌt ɪz jʊər prəˈdʒɛktɪd ˈmɑrdʒən/",
        "audioText": "What is your projected margin?",
        "example": "What is your projected gross margin over the next four quarters?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-10-b1",
        "prompt": "Nuestra tasa de retención supera el noventa y cinco por ciento mensual.",
        "answer": "Our retention rate exceeds ninety five percent on a monthly basis",
        "tokens": [
          "Our",
          "retention",
          "rate",
          "exceeds",
          "ninety",
          "five",
          "percent",
          "on",
          "a",
          "monthly",
          "basis",
          "exceed",
          "is"
        ],
        "hints": [
          "Verbo en 3ra persona: 'Our retention rate exceeds...'",
          "Usa 'ninety five percent on a monthly basis'."
        ]
      },
      {
        "id": "7-10-b2",
        "prompt": "El costo de adquisición de cliente no aumentó durante el último trimestre.",
        "answer": "The customer acquisition cost did not increase during the last quarter",
        "tokens": [
          "The",
          "customer",
          "acquisition",
          "cost",
          "did",
          "not",
          "increase",
          "during",
          "the",
          "last",
          "quarter",
          "does",
          "increasing"
        ],
        "hints": [
          "Negación: 'did not increase...'",
          "Último trimestre = 'the last quarter'."
        ]
      },
      {
        "id": "7-10-b3",
        "prompt": "¿Cuál es su pista de supervivencia financiera al ritmo actual de gasto?",
        "answer": "What is your financial runway at the current burn rate",
        "tokens": [
          "What",
          "is",
          "your",
          "financial",
          "runway",
          "at",
          "the",
          "current",
          "burn",
          "rate",
          "does",
          "are"
        ],
        "hints": [
          "Pregunta de unit economics: 'What is your financial runway...'",
          "Ritmo de gasto = 'at the current burn rate'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-10-e1",
        "audioText": "Our LTV to CAC ratio currently stands at four point two to one, proving strong profitability.",
        "correctAnswer": "Our LTV to CAC ratio currently stands at four point two to one, proving strong profitability.",
        "options": [
          "Our LTV to CAC ratio currently stands at four point two to one, proving strong profitability.",
          "Our LTV to CAC ratio currently stands at two point one to one, indicating high customer churn.",
          "Our Customer Acquisition Cost increased by four percent over the previous financial quarter."
        ]
      },
      {
        "id": "7-10-e2",
        "audioText": "With a lean monthly burn rate of fifteen thousand dollars, we maintain twenty months of runway.",
        "correctAnswer": "With a lean monthly burn rate of fifteen thousand dollars, we maintain twenty months of runway.",
        "options": [
          "With a lean monthly burn rate of fifteen thousand dollars, we maintain twenty months of runway.",
          "With a heavy monthly burn rate of fifty thousand dollars, we maintain twelve months of runway.",
          "With an annual burn rate of fifteen thousand dollars, our team has six months of runway."
        ]
      },
      {
        "id": "7-10-e3",
        "audioText": "How do you intend to scale Annual Recurring Revenue without proportionally multiplying marketing spend?",
        "correctAnswer": "How do you intend to scale Annual Recurring Revenue without proportionally multiplying marketing spend?",
        "options": [
          "How do you intend to scale Annual Recurring Revenue without proportionally multiplying marketing spend?",
          "Why did the startup reduce Annual Recurring Revenue while tripling their advertising budget?",
          "When do the founders plan to calculate their customer lifetime value across global markets?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-elite-11",
    "badgeName": "Seed Pitch Champion",
    "badgeEmoji": "🦄🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "7-11-1",
        "term": "Seed Capital Round",
        "translation": "Ronda de Capital Semilla de Venture Capital",
        "ipa": "/sid ˈkæpɪtəl raʊnd/",
        "audioText": "Seed Capital Round.",
        "example": "We are raising a 500k seed capital round to accelerate engineering.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-11-2",
        "term": "Angel Investor & VC Firm",
        "translation": "Inversionista Ángel y Firma de Capital de Riesgo",
        "ipa": "/ˈeɪndʒəl ɪnˈvɛstər ænd ˌvi ˈsi fɜrm/",
        "audioText": "Angel Investor and VC Firm.",
        "example": "Top angel investors back ambitious teenage founders.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-11-3",
        "term": "Defensible Competitive Moat",
        "translation": "Foso competitivo defensible / Ventaja injusta",
        "ipa": "/dɪˈfɛnsəbəl kəmˈpɛtətɪv moʊt/",
        "audioText": "Defensible Competitive Moat.",
        "example": "Our proprietary AI dataset forms an uncopyable competitive moat.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-11-4",
        "term": "Traction & Exponential Growth",
        "translation": "Tracción y Crecimiento Exponencial",
        "ipa": "/ˈtrækʃən ænd ˌɛkspoʊˈnɛnʃəl ɡroʊθ/",
        "audioText": "Traction and Exponential Growth.",
        "example": "Our 30% month-over-month traction proves market demand.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-11-5",
        "term": "Level 9 Advanced Elite Graduate",
        "translation": "Graduado del Nivel 9 Avanzado Élite (Founders & Diplomacy)",
        "ipa": "/ˈlɛvəl naɪn əˈlɪt ˈɡrædʒuɪt/",
        "audioText": "Level Nine Elite Graduate.",
        "example": "You have conquered the highest echelon of executive English mastery!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "7-11-6",
        "term": "We invite you to partner with us",
        "translation": "Los invitamos a asociarse con nosotros",
        "ipa": "/wi ɪnˈvaɪt ju tu ˈpɑrtnər wɪð ʌs/",
        "audioText": "We invite you to partner with us.",
        "example": "We invite you to partner with us in shaping the future of education.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "7-11-7",
        "term": "Thank you for empowering our vision",
        "translation": "Gracias por empoderar nuestra visión",
        "ipa": "/θæŋk ju fɔr ɪmˈpaʊərɪŋ aʊər ˈvɪʒən/",
        "audioText": "Thank you for empowering our vision.",
        "example": "Thank you for empowering the next generation of global founders.",
        "type": "vocab",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "7-11-b1",
        "prompt": "Estamos levantando una ronda semilla de quinientos mil dólares para expandir nuestro foso competitivo.",
        "answer": "We are raising a five hundred thousand dollar seed round to expand our moat",
        "tokens": [
          "We",
          "are",
          "raising",
          "a",
          "five",
          "hundred",
          "thousand",
          "dollar",
          "seed",
          "round",
          "to",
          "expand",
          "our",
          "moat",
          "raise",
          "raised"
        ],
        "hints": [
          "Pitch de inversión: 'We are raising a five hundred thousand dollar seed round...'",
          "Termina con 'to expand our moat'."
        ]
      },
      {
        "id": "7-11-b2",
        "prompt": "Nuestra tecnología propietaria no puede ser fácilmente copiada por competidores.",
        "answer": "Our proprietary technology cannot be easily copied by competitors",
        "tokens": [
          "Our",
          "proprietary",
          "technology",
          "cannot",
          "be",
          "easily",
          "copied",
          "by",
          "competitors",
          "can",
          "copying"
        ],
        "hints": [
          "Voz pasiva con modal: 'cannot be easily copied by...'",
          "Competidores = 'competitors'."
        ]
      },
      {
        "id": "7-11-b3",
        "prompt": "¿Están listos para unirse a nuestra ronda como inversionistas ángel líderes?",
        "answer": "Are you ready to join our round as lead angel investors",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "join",
          "our",
          "round",
          "as",
          "lead",
          "angel",
          "investors",
          "Do",
          "joining"
        ],
        "hints": [
          "Cierre de pitch de inversión: 'Are you ready to join our round...'",
          "Como inversionistas ángel = 'as lead angel investors'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "7-11-e1",
        "audioText": "Welcome esteemed angel investors to the Maven English Level 9 Seed Pitch presentation.",
        "correctAnswer": "Welcome esteemed angel investors to the Maven English Level 9 Seed Pitch presentation.",
        "options": [
          "Welcome esteemed angel investors to the Maven English Level 9 Seed Pitch presentation.",
          "Welcome distinguished delegates to the Maven English Global Youth Summit debate.",
          "Welcome venture capital analysts to our series A financing round conference."
        ]
      },
      {
        "id": "7-11-e2",
        "audioText": "Our proprietary pedagogical algorithms create an impenetrable moat across Latin America.",
        "correctAnswer": "Our proprietary pedagogical algorithms create an impenetrable moat across Latin America.",
        "options": [
          "Our proprietary pedagogical algorithms create an impenetrable moat across Latin America.",
          "Our automated generic software creates a temporary advantage across European markets.",
          "Their open source training models offer no competitive defense against local competitors."
        ]
      },
      {
        "id": "7-11-e3",
        "audioText": "We invite you to co-lead our seed round and build the undisputed future of global bilingualism.",
        "correctAnswer": "We invite you to co-lead our seed round and build the undisputed future of global bilingualism.",
        "options": [
          "We invite you to co-lead our seed round and build the undisputed future of global bilingualism.",
          "We invite you to participate in our debt financing to support short term language tutoring.",
          "The founders invite you to review their financial statements before rejecting the buyout proposal."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-1",
    "badgeName": "Oxford Chamber President",
    "badgeEmoji": "🏛️👑",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-1-1",
        "term": "Point of Information! (Formal chamber intervention)",
        "translation": "¡Punto de Información! (Interpelación parlamentaria en vivo)",
        "ipa": "/pɔɪnt ʌv ˌɪnfərˈmeɪʃən/",
        "audioText": "Point of Information!",
        "example": "Point of Information, Mr. Prime Minister: your premise is flawed.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-1-2",
        "term": "Straw man fallacy",
        "translation": "Falacia del hombre de paja (Distorsionar el argumento oponente)",
        "ipa": "/strɔ mæn ˈfæləsi/",
        "audioText": "Straw man fallacy.",
        "example": "The Opposition is committing a classic straw man fallacy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-1-3",
        "term": "Begging the question (Petitio principii)",
        "translation": "Petición de principio (Argumento circular)",
        "ipa": "/ˈbɛɡɪŋ ðə ˈkwɛstʃən/",
        "audioText": "Begging the question.",
        "example": "Assuming the conclusion without proof is begging the question.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-1-4",
        "term": "Dialectical refutation",
        "translation": "Refutación dialéctica rigurosa",
        "ipa": "/ˌdaɪəˈlɛktɪkəl ˌrɛfjuˈteɪʃən/",
        "audioText": "Dialectical refutation.",
        "example": "A dialectical refutation dismantles core foundational assumptions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-1-5",
        "term": "On that specific point, Madam Speaker...",
        "translation": "Sobre ese punto específico, Señora Presidenta... (Respuesta a POI)",
        "ipa": "/ɑn ðæt spəˈsɪfɪk pɔɪnt/",
        "audioText": "On that specific point, Madam Speaker.",
        "example": "On that specific point, our statistical data proves the opposite.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-1-6",
        "term": "Division of the House",
        "translation": "Votación por división de cámara",
        "ipa": "/dɪˈvɪʒən ʌv ðə haʊs/",
        "audioText": "Division of the House.",
        "example": "The Chair calls for a formal Division of the House.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-1-7",
        "term": "I submit that this proposition stands undisputed",
        "translation": "Sostengo que esta proposición permanece indiscutible",
        "ipa": "/aɪ səbˈmɪt ðæt ðɪs ˌprɑpəˈzɪʃən stændz/",
        "audioText": "I submit that this proposition stands undisputed.",
        "example": "I submit that this proposition stands undisputed before this chamber.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-1-b1",
        "prompt": "Sobre ese punto específico, los datos empíricos refutan la premisa de la oposición.",
        "answer": "On that specific point empirical data refutes the opposition premise",
        "tokens": [
          "On",
          "that",
          "specific",
          "point",
          "empirical",
          "data",
          "refutes",
          "the",
          "opposition",
          "premise",
          "is",
          "refuting"
        ],
        "hints": [
          "Respuesta de élite a un POI: 'On that specific point...'",
          "Usa 'empirical data refutes the opposition premise'."
        ]
      },
      {
        "id": "8-1-b2",
        "prompt": "El primer ministro no cometió una falacia de hombre de paja durante su discurso.",
        "answer": "The prime minister did not commit a straw man fallacy during his speech",
        "tokens": [
          "The",
          "prime",
          "minister",
          "did",
          "not",
          "commit",
          "a",
          "straw",
          "man",
          "fallacy",
          "during",
          "his",
          "speech",
          "does",
          "is"
        ],
        "hints": [
          "Negación: 'did not commit a straw man fallacy'.",
          "Usa 'during his speech'."
        ]
      },
      {
        "id": "8-1-b3",
        "prompt": "¿Acepta el orador principal una interpelación sobre la viabilidad económica?",
        "answer": "Does the principal speaker accept an intervention regarding economic feasibility",
        "tokens": [
          "Does",
          "the",
          "principal",
          "speaker",
          "accept",
          "an",
          "intervention",
          "regarding",
          "economic",
          "feasibility",
          "Is",
          "accepting"
        ],
        "hints": [
          "Solicitud de POI parlamentario: 'Does the principal speaker accept...'",
          "Viabilidad económica = 'economic feasibility'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-1-e1",
        "audioText": "Point of Information: how can the Opposition reconcile individual liberty with mandated technological censorship?",
        "correctAnswer": "Point of Information: how can the Opposition reconcile individual liberty with mandated technological censorship?",
        "options": [
          "Point of Information: how can the Opposition reconcile individual liberty with mandated technological censorship?",
          "Point of Order: when will the Prime Minister present their financial estimates to the assembly?",
          "Point of Information: why does the Government propose to eliminate corporate taxes across all sectors?"
        ]
      },
      {
        "id": "8-1-e2",
        "audioText": "On that specific point, empirical economic studies prove that deregulation consistently boosts small business growth.",
        "correctAnswer": "On that specific point, empirical economic studies prove that deregulation consistently boosts small business growth.",
        "options": [
          "On that specific point, empirical economic studies prove that deregulation consistently boosts small business growth.",
          "To answer your question, historical data shows that excessive taxation guarantees rapid startup expansion.",
          "On that broad issue, theoretical models suggest that government subsidies reduce long term productivity."
        ]
      },
      {
        "id": "8-1-e3",
        "audioText": "I submit to this prestigious chamber that our motion offers the only mathematically viable path forward.",
        "correctAnswer": "I submit to this prestigious chamber that our motion offers the only mathematically viable path forward.",
        "options": [
          "I submit to this prestigious chamber that our motion offers the only mathematically viable path forward.",
          "I propose to the delegates that our debate should be postponed until new economic data arrives.",
          "The Leader of Opposition submits that the government proposal represents a dangerous financial risk."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-2",
    "badgeName": "Semiotics Analyst",
    "badgeEmoji": "🧬📱",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-2-1",
        "term": "Media Semiotics (Signifier & Signified)",
        "translation": "Semiótica de Medios: Significante y Significado",
        "ipa": "/ˈmidiə ˌsɛmiˈɑtɪks/",
        "audioText": "Media Semiotics.",
        "example": "Semiotics decodes the implicit cultural codes behind viral memes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-2",
        "term": "Digital Memetics",
        "translation": "Memética Digital (Propagación cultural de ideas)",
        "ipa": "/ˈdɪdʒətəl mɪˈmɛtɪks/",
        "audioText": "Digital Memetics.",
        "example": "Memetics analyzes how ideas replicate across digital networks.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-3",
        "term": "Algorithmic echo chambers",
        "translation": "Cámaras de eco algorítmicas en redes sociales",
        "ipa": "/ˌælɡəˈrɪðmɪk ˈɛkoʊ ˈtʃeɪmbərz/",
        "audioText": "Algorithmic echo chambers.",
        "example": "Recommendation engines reinforce polarization in echo chambers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-4",
        "term": "Subconscious framing",
        "translation": "Encuadre y Manipulación subconsciente",
        "ipa": "/sʌbˈkɑnʃəs ˈfreɪmɪŋ/",
        "audioText": "Subconscious framing.",
        "example": "Visual layouts create subtle subconscious framing for viewers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-5",
        "term": "Hyperreality & Simulacra",
        "translation": "Hiperrealidad y Simulacro (Baudrillard)",
        "ipa": "/ˌhaɪpərriˈæləti ænd ˌsɪmjəˈleɪkrə/",
        "audioText": "Hyperreality and Simulacra.",
        "example": "Digital filters construct a hyperreality that replaces physical perception.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-6",
        "term": "Dissect the narrative",
        "translation": "Diseccionar y Deconstruir la narrativa",
        "ipa": "/dɪˈsɛkt ðə ˈnærətɪv/",
        "audioText": "Dissect the narrative.",
        "example": "Critical thinkers dissect the narrative behind trending hashtags.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-2-7",
        "term": "What underlying ideology does this convey?",
        "translation": "¿Qué ideología o mensaje subyacente transmite esto?",
        "ipa": "/wʌt ˌʌndərˈlaɪɪŋ ˌaɪdiˈɑlədʒi/",
        "audioText": "What underlying ideology does this convey?",
        "example": "What underlying socio-economic ideology does this viral ad convey?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-2-b1",
        "prompt": "La semiótica nos permite deconstruir los mensajes ocultos en las redes sociales.",
        "answer": "Semiotics allows us to deconstruct hidden messages in social media",
        "tokens": [
          "Semiotics",
          "allows",
          "us",
          "to",
          "deconstruct",
          "hidden",
          "messages",
          "in",
          "social",
          "media",
          "is",
          "allowing"
        ],
        "hints": [
          "Análisis de semiótica: 'Semiotics allows us to deconstruct...'",
          "Usa 'hidden messages in social media'."
        ]
      },
      {
        "id": "8-2-b2",
        "prompt": "Ese video viral no representaba la realidad sin filtros algorítmicos.",
        "answer": "That viral video did not represent reality without algorithmic filters",
        "tokens": [
          "That",
          "viral",
          "video",
          "did",
          "not",
          "represent",
          "reality",
          "without",
          "algorithmic",
          "filters",
          "does",
          "representing"
        ],
        "hints": [
          "Negación: 'did not represent reality...'",
          "Usa 'without algorithmic filters'."
        ]
      },
      {
        "id": "8-2-b3",
        "prompt": "¿Cómo moldean los algoritmos de recomendación la percepción de la juventud?",
        "answer": "How do recommendation algorithms shape youth perception",
        "tokens": [
          "How",
          "do",
          "recommendation",
          "algorithms",
          "shape",
          "youth",
          "perception",
          "did",
          "shaping"
        ],
        "hints": [
          "Pregunta de análisis de medios: 'How do recommendation algorithms shape...'",
          "Percepción juvenil = 'youth perception'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-2-e1",
        "audioText": "Digital memetics explores how compressed cultural ideas propagate with viral speed across platforms.",
        "correctAnswer": "Digital memetics explores how compressed cultural ideas propagate with viral speed across platforms.",
        "options": [
          "Digital memetics explores how compressed cultural ideas propagate with viral speed across platforms.",
          "Media semiotics examines how traditional print news suppresses controversial social debates.",
          "Algorithmic computing investigates why young audiences reject short form video content."
        ]
      },
      {
        "id": "8-2-e2",
        "audioText": "Recommendation algorithms construct hyperreal filter bubbles that amplify ideological polarization.",
        "correctAnswer": "Recommendation algorithms construct hyperreal filter bubbles that amplify ideological polarization.",
        "options": [
          "Recommendation algorithms construct hyperreal filter bubbles that amplify ideological polarization.",
          "Search engine filters eliminate biased political opinions across all social networks.",
          "Online recommendation feeds encourage teenagers to explore diverse philosophical viewpoints."
        ]
      },
      {
        "id": "8-2-e3",
        "audioText": "What semiotic signifiers in this advertisement subconsciously persuade consumers to purchase?",
        "correctAnswer": "What semiotic signifiers in this advertisement subconsciously persuade consumers to purchase?",
        "options": [
          "What semiotic signifiers in this advertisement subconsciously persuade consumers to purchase?",
          "Which statistical charts in this research report convince investors to fund the project?",
          "Why do digital creators avoid using viral memes when producing commercial promotions?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-3",
    "badgeName": "Socratic Scholar",
    "badgeEmoji": "🏛️🦉",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-3-1",
        "term": "Socratic Questioning (Elenchus)",
        "translation": "Método Socrático: Indagación rigurosa mediante preguntas profundas",
        "ipa": "/soʊˈkrætɪk ˈkwɛstʃənɪŋ/",
        "audioText": "Socratic Questioning.",
        "example": "The professor used Socratic questioning to examine foundational assumptions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-3-2",
        "term": "Examine fundamental axioms",
        "translation": "Examinar y cuestionar los axiomas fundamentales",
        "ipa": "/ɪɡˈzæmən ˌfʌndəˈmɛntəl ˈæksiəmz/",
        "audioText": "Examine fundamental axioms.",
        "example": "Scholars must critically examine fundamental axioms before building theories.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-3-3",
        "term": "Upon closer scrutiny...",
        "translation": "Bajo un escrutinio más minucioso... (Giro analítico doctoral)",
        "ipa": "/əˈpɑn ˈkloʊsər ˈskrutəni/",
        "audioText": "Upon closer scrutiny.",
        "example": "Upon closer scrutiny, the proposed model reveals mathematical inconsistencies.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-3-4",
        "term": "Epistemological certainty",
        "translation": "Certeza epistemológica (Validez del conocimiento)",
        "ipa": "/ɪˌpɪstəməˈlɑdʒɪkəl ˈsɜrtənti/",
        "audioText": "Epistemological certainty.",
        "example": "Empirical science constantly challenges epistemological certainty.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-3-5",
        "term": "Dialectical tension",
        "translation": "Tensión dialéctica entre ideas opuestas",
        "ipa": "/ˌdaɪəˈlɛktɪkəl ˈtɛnʃən/",
        "audioText": "Dialectical tension.",
        "example": "The debate created productive dialectical tension among researchers.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-3-6",
        "term": "Shed light on the paradox",
        "translation": "Arrojar luz sobre la paradoja",
        "ipa": "/ʃɛd laɪt ɑn ðə ˈpærəˌdɑks/",
        "audioText": "Shed light on the paradox.",
        "example": "This breakthrough sheds light on the quantum paradox.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-3-7",
        "term": "On what grounds do you assert that...?",
        "translation": "¿Con base en qué fundamentos afirma usted que...?",
        "ipa": "/ɑn wʌt ɡraʊndz du ju əˈsɜrt/",
        "audioText": "On what grounds do you assert that...?",
        "example": "On what empirical grounds do you assert that consciousness is computational?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-3-b1",
        "prompt": "Bajo un escrutinio más minucioso, la hipótesis revela inconsistencias conceptuales profundas.",
        "answer": "Upon closer scrutiny the hypothesis reveals deep conceptual inconsistencies",
        "tokens": [
          "Upon",
          "closer",
          "scrutiny",
          "the",
          "hypothesis",
          "reveals",
          "deep",
          "conceptual",
          "inconsistencies",
          "revealing",
          "is"
        ],
        "hints": [
          "Apertura doctoral: 'Upon closer scrutiny...'",
          "Usa 'the hypothesis reveals deep conceptual inconsistencies'."
        ]
      },
      {
        "id": "8-3-b2",
        "prompt": "El investigador no pudo defender su afirmación sin evidencia cuantitativa verificable.",
        "answer": "The researcher could not defend his claim without verifiable quantitative evidence",
        "tokens": [
          "The",
          "researcher",
          "could",
          "not",
          "defend",
          "his",
          "claim",
          "without",
          "verifiable",
          "quantitative",
          "evidence",
          "defending",
          "did"
        ],
        "hints": [
          "Incapacidad epistémica: 'could not defend his claim...'",
          "Evidencia cuantitativa = 'without verifiable quantitative evidence'."
        ]
      },
      {
        "id": "8-3-b3",
        "prompt": "¿Con base en qué fundamentos científicos afirma que la mente humana es programable?",
        "answer": "On what scientific grounds do you assert that the human mind is programmable",
        "tokens": [
          "On",
          "what",
          "scientific",
          "grounds",
          "do",
          "you",
          "assert",
          "that",
          "the",
          "human",
          "mind",
          "is",
          "programmable",
          "did",
          "asserting"
        ],
        "hints": [
          "Pregunta socrática: 'On what scientific grounds do you assert that...'",
          "Termina con 'the human mind is programmable'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-3-e1",
        "audioText": "On what empirical grounds do you substantiate the claim that artificial general intelligence is imminent?",
        "correctAnswer": "On what empirical grounds do you substantiate the claim that artificial general intelligence is imminent?",
        "options": [
          "On what empirical grounds do you substantiate the claim that artificial general intelligence is imminent?",
          "Under what legal framework do you defend the proposal that artificial intelligence should be banned?",
          "Why did the research committee reject the conclusion that quantum computing is computationally scalable?"
        ]
      },
      {
        "id": "8-3-e2",
        "audioText": "Upon closer scrutiny, the doctoral dissertation demonstrates a profound synthesis of ethics and economics.",
        "correctAnswer": "Upon closer scrutiny, the doctoral dissertation demonstrates a profound synthesis of ethics and economics.",
        "options": [
          "Upon closer scrutiny, the doctoral dissertation demonstrates a profound synthesis of ethics and economics.",
          "After superficial review, the academic paper reveals an outdated understanding of social science.",
          "Upon closer examination, the scientific abstract fails to present a clear methodological framework."
        ]
      },
      {
        "id": "8-3-e3",
        "audioText": "Socratic inquiry forces scholars to question their most cherished intellectual dogmas.",
        "correctAnswer": "Socratic inquiry forces scholars to question their most cherished intellectual dogmas.",
        "options": [
          "Socratic inquiry forces scholars to question their most cherished intellectual dogmas.",
          "Traditional lecturing encourages students to memorize established textbook formulas without thinking.",
          "Scientific skepticism prevents researchers from publishing innovative interdisciplinary discoveries."
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-4",
    "badgeName": "TED Keynote Maestro",
    "badgeEmoji": "🎙️🔴",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-4-1",
        "term": "18-Minute TED Architecture (Hook ➔ Struggle ➔ Epiphany ➔ Call to Action)",
        "translation": "Estructura maestra de TED Talk de 18 minutos",
        "ipa": "/tɛd ˈɑrkəˌtɛktʃər/",
        "audioText": "TED Talk Architecture.",
        "example": "The 18-minute TED format distills transformative ideas into unforgettable storytelling.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-4-2",
        "term": "Memorable Conceptual Metaphor",
        "translation": "Metáfora conceptual memorable (Explicar lo complejo con imágenes vívidas)",
        "ipa": "/kənˈsɛptʃuəl ˈmɛtəˌfɔr/",
        "audioText": "Conceptual Metaphor.",
        "example": "Thinking of the brain as an orchestra helps audiences grasp neuroplasticity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-4-3",
        "term": "The turning point was when...",
        "translation": "El punto de inflexión ocurrió cuando... (Momento de revelación / Epifanía)",
        "ipa": "/ðə ˈtɜrnɪŋ pɔɪnt wʌz wɛn/",
        "audioText": "The turning point was when.",
        "example": "The turning point was when we realized that failure was our greatest teacher.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-4-4",
        "term": "Visceral resonance",
        "translation": "Resonancia visceral / Emocional profunda con el público",
        "ipa": "/ˈvɪsərəl ˈrɛzənəns/",
        "audioText": "Visceral resonance.",
        "example": "Authentic personal vulnerability creates visceral resonance on stage.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-4-5",
        "term": "Catalyst for transformation",
        "translation": "Catalizador de transformación",
        "ipa": "/ˈkætəlɪst fɔr ˌtrænsfərˈmeɪʃən/",
        "audioText": "Catalyst for transformation.",
        "example": "Education is the ultimate catalyst for human transformation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-4-6",
        "term": "Leave an indelible mark",
        "translation": "Dejar una huella imborrable",
        "ipa": "/liv æn ɪnˈdɛləbəl mɑrk/",
        "audioText": "Leave an indelible mark.",
        "example": "Great speeches leave an indelible mark on human consciousness.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-4-7",
        "term": "Imagine a world where...",
        "translation": "Imaginen un mundo en el que...",
        "ipa": "/ɪˈmædʒən ə wɜrld wɛr/",
        "audioText": "Imagine a world where...",
        "example": "Imagine a world where every single teenager speaks fluent global English.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-4-b1",
        "prompt": "Imaginen un mundo donde cada joven tenga la confianza de liderar el cambio.",
        "answer": "Imagine a world where every youth has the confidence to lead change",
        "tokens": [
          "Imagine",
          "a",
          "world",
          "where",
          "every",
          "youth",
          "has",
          "the",
          "confidence",
          "to",
          "lead",
          "change",
          "have",
          "leading"
        ],
        "hints": [
          "Apertura de TED Talk: 'Imagine a world where...'",
          "Usa 'every youth has the confidence to lead change'."
        ]
      },
      {
        "id": "8-4-b2",
        "prompt": "El orador no utilizó diapositivas saturadas de texto durante su conferencia magistral.",
        "answer": "The speaker did not use slides full of text during his keynote",
        "tokens": [
          "The",
          "speaker",
          "did",
          "not",
          "use",
          "slides",
          "full",
          "of",
          "text",
          "during",
          "his",
          "keynote",
          "using",
          "does"
        ],
        "hints": [
          "Negación: 'did not use slides full of text...'",
          "Usa 'during his keynote'."
        ]
      },
      {
        "id": "8-4-b3",
        "prompt": "¿Cuál fue el momento de revelación que transformó su perspectiva de vida?",
        "answer": "What was the turning point that transformed your life perspective",
        "tokens": [
          "What",
          "was",
          "the",
          "turning",
          "point",
          "that",
          "transformed",
          "your",
          "life",
          "perspective",
          "is",
          "transforming"
        ],
        "hints": [
          "Pregunta de narrativa personal: 'What was the turning point that transformed...'",
          "Perspectiva de vida = 'your life perspective'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-4-e1",
        "audioText": "Imagine a world where geographical borders no longer determine the boundaries of human potential.",
        "correctAnswer": "Imagine a world where geographical borders no longer determine the boundaries of human potential.",
        "options": [
          "Imagine a world where geographical borders no longer determine the boundaries of human potential.",
          "Picture a society where economic resources permanently restrict the dreams of young generations.",
          "Imagine a continent where technological barriers prevent international communication among youth."
        ]
      },
      {
        "id": "8-4-e2",
        "audioText": "The turning point occurred when our team discovered that language was not just grammar, but identity.",
        "correctAnswer": "The turning point occurred when our team discovered that language was not just grammar, but identity.",
        "options": [
          "The turning point occurred when our team discovered that language was not just grammar, but identity.",
          "The pivotal moment happened when researchers confirmed that vocabulary was far more important than fluency.",
          "The turning point was when the founders realized that generic education generated higher profit margins."
        ]
      },
      {
        "id": "8-4-e3",
        "audioText": "How did the speaker use conceptual metaphors to explain quantum entanglement to a general audience?",
        "correctAnswer": "How did the speaker use conceptual metaphors to explain quantum entanglement to a general audience?",
        "options": [
          "How did the speaker use conceptual metaphors to explain quantum entanglement to a general audience?",
          "Why did the presenter rely on complex mathematical formulas during their eighteen minute TED talk?",
          "When did the keynote orator reveal their final scientific conclusion to the international assembly?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-5",
    "badgeName": "Treaty Architect",
    "badgeEmoji": "📜🖋️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-5-1",
        "term": "Multilateral Treaty Language",
        "translation": "Lenguaje de Tratados Multilaterales y Convenciones de la ONU",
        "ipa": "/ˌmʌltiˈlætərəl ˈtriti/",
        "audioText": "Multilateral Treaty Language.",
        "example": "Signatory states pledge to uphold the multilateral convention.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-5-2",
        "term": "Reaffirming / Bearing in mind (Preamble clauses)",
        "translation": "Reafirmando / Teniendo en cuenta (Cláusulas de preámbulo)",
        "ipa": "/ˌriəˈfɜrmɪŋ / ˈbɛrɪŋ ɪn maɪnd/",
        "audioText": "Reaffirming. Bearing in mind.",
        "example": "Reaffirming our commitment to universal youth education.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-5-3",
        "term": "Urges all Member States to... (Operative clauses)",
        "translation": "Insta a todos los Estados Miembros a... (Cláusulas operativas)",
        "ipa": "/ˈɜrdʒɪz ɔl ˈmɛmbər steɪts tu/",
        "audioText": "Urges all Member States to.",
        "example": "Urges all Member States to provide universal digital access.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-5-4",
        "term": "Ratification & Binding agreement",
        "translation": "Ratificación y Acuerdo vinculante de derecho internacional",
        "ipa": "/ˌrætəfəˈkeɪʃən ænd ˈbaɪndɪŋ əˈgrimənt/",
        "audioText": "Ratification and Binding agreement.",
        "example": "Ratification makes the climate protocol legally binding.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-5-5",
        "term": "Diplomatic protocol & Immunity",
        "translation": "Protocolo diplomático e Inmunidad",
        "ipa": "/ˌdɪpləˈmætɪk ˈproʊtəˌkɑl ænd ɪˈmjunəti/",
        "audioText": "Diplomatic protocol and Immunity.",
        "example": "Ambassadors operate under strict diplomatic protocol.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-5-6",
        "term": "Signatory parties",
        "translation": "Partes signatarias y Estados miembros",
        "ipa": "/ˈsɪɡnətɔri ˈpɑrtiz/",
        "audioText": "Signatory parties.",
        "example": "Over 190 signatory parties ratified the international charter.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-5-7",
        "term": "Solemnly declares that...",
        "translation": "Declara solemnemente que...",
        "ipa": "/ˈsɑləmli dɪˈklɛrz ðæt/",
        "audioText": "Solemnly declares that...",
        "example": "The General Assembly solemnly declares peace to be a universal human right.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-5-b1",
        "prompt": "Reafirmando nuestro compromiso, instamos a todos los estados miembros a garantizar la educación digital.",
        "answer": "Reaffirming our commitment we urge all member states to guarantee digital education",
        "tokens": [
          "Reaffirming",
          "our",
          "commitment",
          "we",
          "urge",
          "all",
          "member",
          "states",
          "to",
          "guarantee",
          "digital",
          "education",
          "urging",
          "is"
        ],
        "hints": [
          "Cláusula de resolución ONU: 'Reaffirming our commitment...'",
          "Usa 'we urge all member states to guarantee digital education'."
        ]
      },
      {
        "id": "8-5-b2",
        "prompt": "El tratado internacional no entrará en vigor sin la ratificación de las partes signatarias.",
        "answer": "The international treaty will not enter into force without ratification by signatory parties",
        "tokens": [
          "The",
          "international",
          "treaty",
          "will",
          "not",
          "enter",
          "into",
          "force",
          "without",
          "ratification",
          "by",
          "signatory",
          "parties",
          "entered",
          "do"
        ],
        "hints": [
          "Entrar en vigor = 'enter into force'.",
          "Usa 'without ratification by signatory parties'."
        ]
      },
      {
        "id": "8-5-b3",
        "prompt": "¿Cuándo ratificará la asamblea general este protocolo vinculante sobre derechos de la juventud?",
        "answer": "When will the general assembly ratify this binding protocol on youth rights",
        "tokens": [
          "When",
          "will",
          "the",
          "general",
          "assembly",
          "ratify",
          "this",
          "binding",
          "protocol",
          "on",
          "youth",
          "rights",
          "did",
          "ratifying"
        ],
        "hints": [
          "Pregunta diplomática: 'When will the general assembly ratify...'",
          "Protocolo vinculante = 'this binding protocol on youth rights'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-5-e1",
        "audioText": "Bearing in mind the urgent threat of environmental degradation, the Council adopts this historic resolution.",
        "correctAnswer": "Bearing in mind the urgent threat of environmental degradation, the Council adopts this historic resolution.",
        "options": [
          "Bearing in mind the urgent threat of environmental degradation, the Council adopts this historic resolution.",
          "Ignoring the widespread consequences of economic inflation, the General Assembly rejects the new trade accord.",
          "Reaffirming the sovereignty of local governments, the international summit dissolves the working committee."
        ]
      },
      {
        "id": "8-5-e2",
        "audioText": "The resolution solemnly declares that access to high speed internet is a fundamental human entitlement.",
        "correctAnswer": "The resolution solemnly declares that access to high speed internet is a fundamental human entitlement.",
        "options": [
          "The resolution solemnly declares that access to high speed internet is a fundamental human entitlement.",
          "The treaty strictly mandates that digital communication should remain under exclusive state control.",
          "The declaration officially confirms that technological development is restricted to developed nations."
        ]
      },
      {
        "id": "8-5-e3",
        "audioText": "How many sovereign member nations have formally deposited their instruments of ratification with the Secretariat?",
        "correctAnswer": "How many sovereign member nations have formally deposited their instruments of ratification with the Secretariat?",
        "options": [
          "How many sovereign member nations have formally deposited their instruments of ratification with the Secretariat?",
          "Which international delegations have expressed reservations regarding the non-binding climate pact?",
          "Why did the security council vote to postpone the implementation of the multilateral disarmament treaty?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-6",
    "badgeName": "Cannes Critic",
    "badgeEmoji": "🎬🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-6-1",
        "term": "Cinematic Semiotics & Mise-en-scène",
        "translation": "Semiótica cinematográfica y Puesta en escena",
        "ipa": "/ˌsɪnəˈmætɪk ˌsɛmiˈɑtɪks ænd ˌmiz ɑn ˈsɛn/",
        "audioText": "Cinematic Semiotics and Mise en scene.",
        "example": "The director's meticulous mise-en-scène reflects the protagonist's inner isolation.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-2",
        "term": "Visual leitmotif & Symbolism",
        "translation": "Leitmotiv visual y Simbolismo recurrente",
        "ipa": "/ˈvɪʒuəl ˈlaɪtmoʊˌtif ænd ˈsɪmbəˌlɪzəm/",
        "audioText": "Visual leitmotif and Symbolism.",
        "example": "The recurring mirror motif symbolizes fragmented psychological identity.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-3",
        "term": "A tour de force performance",
        "translation": "Una actuación magistral / demostración de maestría actoral",
        "ipa": "/ə ˌtʊr də ˈfɔrs pərˈfɔrməns/",
        "audioText": "A tour de force performance.",
        "example": "The lead actress delivered a breathtaking tour de force performance.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-4",
        "term": "Palme d'Or Winner",
        "translation": "Ganador de la Palma de Oro de Cannes",
        "ipa": "/pɑm dɔr ˈwɪnər/",
        "audioText": "Palme d'Or Winner.",
        "example": "The film received the prestigious Palme d'Or at Cannes.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-5",
        "term": "Subvert genre conventions",
        "translation": "Subvertir y desafiar las convenciones del género cinematográfico",
        "ipa": "/səbˈvɜrt ˈʒɑnrə kənˈvɛnʃənz/",
        "audioText": "Subvert genre conventions.",
        "example": "The screenplay subverts traditional Hollywood thriller conventions.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-6",
        "term": "Visceral cinematography",
        "translation": "Cinematografía visceral e inmersiva",
        "ipa": "/ˈvɪsərəl ˌsɪnəməˈtɑɡrəfi/",
        "audioText": "Visceral cinematography.",
        "example": "Handheld camera work creates visceral cinematography throughout the climax.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-6-7",
        "term": "What makes this auteur's vision transcendent is...",
        "translation": "Lo que hace trascendente la visión de este autor es...",
        "ipa": "/wʌt meɪks ðɪs oʊˈtɜrz ˈvɪʒən/",
        "audioText": "What makes this auteur's vision transcendent is...",
        "example": "What makes this auteur's vision transcendent is the poetic use of natural light.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-6-b1",
        "prompt": "La cinematografía visceral y la puesta en escena capturan el aislamiento del protagonista.",
        "answer": "Visceral cinematography and mise en scene capture the protagonist isolation",
        "tokens": [
          "Visceral",
          "cinematography",
          "and",
          "mise",
          "en",
          "scene",
          "capture",
          "the",
          "protagonist",
          "isolation",
          "is",
          "capturing"
        ],
        "hints": [
          "Crítica de cine C2: 'Visceral cinematography and mise en scene...'",
          "Usa 'capture the protagonist isolation'."
        ]
      },
      {
        "id": "8-6-b2",
        "prompt": "El guion no recurrió a clichés predecibles para resolver el conflicto dramático.",
        "answer": "The screenplay did not rely on predictable clichés to resolve dramatic conflict",
        "tokens": [
          "The",
          "screenplay",
          "did",
          "not",
          "rely",
          "on",
          "predictable",
          "clichés",
          "to",
          "resolve",
          "dramatic",
          "conflict",
          "relies",
          "does"
        ],
        "hints": [
          "Negación crítica: 'did not rely on predictable clichés...'",
          "Usa 'to resolve dramatic conflict'."
        ]
      },
      {
        "id": "8-6-b3",
        "prompt": "¿Cómo subvierte la película las convenciones tradicionales del cine latinoamericano?",
        "answer": "How does the film subvert traditional Latin American cinema conventions",
        "tokens": [
          "How",
          "does",
          "the",
          "film",
          "subvert",
          "traditional",
          "Latin",
          "American",
          "cinema",
          "conventions",
          "is",
          "subverting"
        ],
        "hints": [
          "Pregunta de análisis cinematográfico: 'How does the film subvert...'",
          "Termina con 'traditional Latin American cinema conventions'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-6-e1",
        "audioText": "The film masterfully subverts conventional narrative tropes through non-linear chronological storytelling.",
        "correctAnswer": "The film masterfully subverts conventional narrative tropes through non-linear chronological storytelling.",
        "options": [
          "The film masterfully subverts conventional narrative tropes through non-linear chronological storytelling.",
          "The screenplay strictly follows traditional Hollywood storytelling with predictable character arcs.",
          "The director relies exclusively on digital special effects while ignoring character development."
        ]
      },
      {
        "id": "8-6-e2",
        "audioText": "What distinguishes this Cannes masterpiece is the seamless integration of natural lighting and silence.",
        "correctAnswer": "What distinguishes this Cannes masterpiece is the seamless integration of natural lighting and silence.",
        "options": [
          "What distinguishes this Cannes masterpiece is the seamless integration of natural lighting and silence.",
          "What ruins this independent movie is the excessive volume of background music and dialogue.",
          "Why critics praised this commercial blockbuster was its high budget choreographed action sequences."
        ]
      },
      {
        "id": "8-6-e3",
        "audioText": "How does the director use color grading to signify the emotional decay of the protagonist?",
        "correctAnswer": "How does the director use color grading to signify the emotional decay of the protagonist?",
        "options": [
          "How does the director use color grading to signify the emotional decay of the protagonist?",
          "Why did the sound designer choose classical orchestral scores during every action sequence?",
          "When will the film festival jury announce the winner of the grand jury prize?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-7",
    "badgeName": "Scholarship Laureate",
    "badgeEmoji": "🎓🏆",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-7-1",
        "term": "Rhodes & Fulbright Interview Defense",
        "translation": "Defensa de entrevista de Becas Rhodes, Fulbright y Chevening",
        "ipa": "/roʊdz ænd ˈfʊlˌbraɪt ˈɪntərˌvju/",
        "audioText": "Rhodes and Fulbright Interview Defense.",
        "example": "The Rhodes interview tests ethical courage, intellectual vigor, and leadership.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-7-2",
        "term": "The overarching arc of my leadership...",
        "translation": "El hilo conductor de mi trayectoria de liderazgo...",
        "ipa": "/ði ˌoʊvərˈɑrtʃɪŋ ɑrk ʌv maɪ/",
        "audioText": "The overarching arc of my leadership.",
        "example": "The overarching arc of my leadership centers on educational equity.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-7-3",
        "term": "Catalyze systemic change",
        "translation": "Catalizar un cambio sistémico duradero",
        "ipa": "/ˈkætəˌlaɪz sɪˈstɛmɪk tʃeɪndʒ/",
        "audioText": "Catalyze systemic change.",
        "example": "My postgraduate research aims to catalyze systemic change in clean energy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-7-4",
        "term": "Intellectual humility",
        "translation": "Humildad intelectual y rigor reflexivo",
        "ipa": "/ˌɪntəˈlɛktʃuəl hjuˈmɪləti/",
        "audioText": "Intellectual humility.",
        "example": "Great global scholars balance fierce ambition with intellectual humility.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-7-5",
        "term": "Cross-cultural diplomacy",
        "translation": "Diplomacia intercultural y entendimiento mutuo",
        "ipa": "/krɔs ˈkʌltʃərəl dɪˈploʊmæsi/",
        "audioText": "Cross-cultural diplomacy.",
        "example": "Fulbright scholars serve as cultural ambassadors in global diplomacy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-7-6",
        "term": "Transformative trajectory",
        "translation": "Trayectoria transformadora y de alto impacto",
        "ipa": "/trænsˈfɔrmətɪv trəˈdʒɛktəri/",
        "audioText": "Transformative trajectory.",
        "example": "This prestigious scholarship will accelerate my transformative trajectory.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-7-7",
        "term": "Why should the selection committee choose you?",
        "translation": "¿Por qué el comité de selección debería elegirte a ti?",
        "ipa": "/waɪ ʃʊd ðə səˈlɛkʃən kəˈmɪti/",
        "audioText": "Why should the selection committee choose you?",
        "example": "Why should this committee invest in your vision for Latin America?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-7-b1",
        "prompt": "El hilo conductor de mi liderazgo es empoderar a los jóvenes mediante la tecnología.",
        "answer": "The overarching arc of my leadership is empowering youth through technology",
        "tokens": [
          "The",
          "overarching",
          "arc",
          "of",
          "my",
          "leadership",
          "is",
          "empowering",
          "youth",
          "through",
          "technology",
          "empowered",
          "are"
        ],
        "hints": [
          "Apertura magistral de entrevista: 'The overarching arc of my leadership is...'",
          "Usa 'empowering youth through technology'."
        ]
      },
      {
        "id": "8-7-b2",
        "prompt": "Mi propuesta de investigación no busca ganancias comerciales a corto plazo.",
        "answer": "My research proposal does not seek short term commercial profits",
        "tokens": [
          "My",
          "research",
          "proposal",
          "does",
          "not",
          "seek",
          "short",
          "term",
          "commercial",
          "profits",
          "seeking",
          "did"
        ],
        "hints": [
          "Negación de rigor ético: 'does not seek short term commercial profits'.",
          "Usa 'My research proposal'."
        ]
      },
      {
        "id": "8-7-b3",
        "prompt": "¿Cómo catalizará su investigación doctoral un cambio sistémico en Colombia?",
        "answer": "How will your doctoral research catalyze systemic change in Colombia",
        "tokens": [
          "How",
          "will",
          "your",
          "doctoral",
          "research",
          "catalyze",
          "systemic",
          "change",
          "in",
          "Colombia",
          "did",
          "catalyzing"
        ],
        "hints": [
          "Pregunta de entrevista Rhodes/Fulbright: 'How will your doctoral research catalyze...'",
          "Cambio sistémico = 'systemic change in Colombia'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-7-e1",
        "audioText": "The overarching arc of my academic trajectory has been driven by a passion for educational equality.",
        "correctAnswer": "The overarching arc of my academic trajectory has been driven by a passion for educational equality.",
        "options": [
          "The overarching arc of my academic trajectory has been driven by a passion for educational equality.",
          "The main purpose of my corporate career has been driven by a desire for financial maximization.",
          "The primary focus of my undergraduate degree was focused exclusively on theoretical mathematics."
        ]
      },
      {
        "id": "8-7-e2",
        "audioText": "Our scholarship selection committee values candidates who demonstrate both intellectual vigor and moral courage.",
        "correctAnswer": "Our scholarship selection committee values candidates who demonstrate both intellectual vigor and moral courage.",
        "options": [
          "Our scholarship selection committee values candidates who demonstrate both intellectual vigor and moral courage.",
          "The admissions panel prefers applicants who present flawless test scores while avoiding community service.",
          "The fellowship board requires applicants to commit to ten years of commercial private sector employment."
        ]
      },
      {
        "id": "8-7-e3",
        "audioText": "How do you intend to leverage this Oxford fellowship to transform public policy in Latin America?",
        "correctAnswer": "How do you intend to leverage this Oxford fellowship to transform public policy in Latin America?",
        "options": [
          "How do you intend to leverage this Oxford fellowship to transform public policy in Latin America?",
          "Why did you choose to abandon your engineering studies before applying to this scholarship program?",
          "When do you expect to complete your master's thesis in computational linguistics at Harvard?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-8",
    "badgeName": "Investigative Filmmaker",
    "badgeEmoji": "🎥🔍",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-8-1",
        "term": "Investigative Video Essay (Voiceover narration & B-roll)",
        "translation": "Videoensayo de Periodismo de Investigación (Locución narrativa y tomas de apoyo)",
        "ipa": "/ɪnˈvɛstəˌɡeɪtɪv ˈvɪdioʊ ˈɛseɪ/",
        "audioText": "Investigative Video Essay.",
        "example": "Top video essays blend journalistic rigor with gripping visual editing.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-2",
        "term": "Data Storytelling & Forensic Infographics",
        "translation": "Narrativa de Datos e Infografía Forense",
        "ipa": "/ˈdeɪtə ˈstɔriˌtɛlɪŋ/",
        "audioText": "Data Storytelling.",
        "example": "Data storytelling exposes corruption by mapping financial paper trails.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-3",
        "term": "Follow the paper trail",
        "translation": "Seguir la pista de los documentos / el rastro financiero",
        "ipa": "/ˈfɑloʊ ðə ˈpeɪpər treɪl/",
        "audioText": "Follow the paper trail.",
        "example": "Investigative reporters follow the paper trail across offshore accounts.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-4",
        "term": "Exposé & Whistleblower",
        "translation": "Reportaje de denuncia y Denunciante anónimo",
        "ipa": "/ˌɛkspoʊˈzeɪ ænd ˈwɪsəlˌbloʊər/",
        "audioText": "Exposé and Whistleblower.",
        "example": "The whistleblower provided classified files for the investigative exposé.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-5",
        "term": "Compelling visual pacing",
        "translation": "Ritmo visual cautivador y dinámico",
        "ipa": "/kəmˈpɛlɪŋ ˈvɪʒuəl ˈpeɪsɪŋ/",
        "audioText": "Compelling visual pacing.",
        "example": "Compelling visual pacing keeps millions of viewers engaged on YouTube.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-6",
        "term": "Uncover institutional corruption",
        "translation": "Destapar la corrupción institucional",
        "ipa": "/ʌnˈkʌvər ˌɪnstəˈtuʃənəl/",
        "audioText": "Uncover institutional corruption.",
        "example": "Free journalism uncovers institutional corruption to safeguard democracy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-8-7",
        "term": "What the official narrative hides is...",
        "translation": "Lo que la narrativa oficial oculta es...",
        "ipa": "/wʌt ði əˈfɪʃəl ˈnærətɪv haɪdz/",
        "audioText": "What the official narrative hides is...",
        "example": "What the official narrative hides is a calculated corporate cover-up.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-8-b1",
        "prompt": "Lo que la investigación destapó fue un rastro financiero multimillonario en el extranjero.",
        "answer": "What the investigation uncovered was a multimillion dollar financial paper trail",
        "tokens": [
          "What",
          "the",
          "investigation",
          "uncovered",
          "was",
          "a",
          "multimillion",
          "dollar",
          "financial",
          "paper",
          "trail",
          "is",
          "uncovering"
        ],
        "hints": [
          "Enfoque de videoensayo: 'What the investigation uncovered was...'",
          "Rastro financiero = 'a multimillion dollar financial paper trail'."
        ]
      },
      {
        "id": "8-8-b2",
        "prompt": "El documental no utilizó fuentes anónimas sin verificación forense rigurosa.",
        "answer": "The documentary did not use anonymous sources without rigorous forensic verification",
        "tokens": [
          "The",
          "documentary",
          "did",
          "not",
          "use",
          "anonymous",
          "sources",
          "without",
          "rigorous",
          "forensic",
          "verification",
          "using",
          "does"
        ],
        "hints": [
          "Negación periodística: 'did not use anonymous sources...'",
          "Usa 'without rigorous forensic verification'."
        ]
      },
      {
        "id": "8-8-b3",
        "prompt": "¿Cómo combinaron la narrativa de datos con el diseño visual para revelar la verdad?",
        "answer": "How did they combine data storytelling with visual design to reveal truth",
        "tokens": [
          "How",
          "did",
          "they",
          "combine",
          "data",
          "storytelling",
          "with",
          "visual",
          "design",
          "to",
          "reveal",
          "truth",
          "revealing",
          "is"
        ],
        "hints": [
          "Pregunta de videoensayo: 'How did they combine data storytelling...'",
          "Termina con 'to reveal truth'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-8-e1",
        "audioText": "What the official government press release concealed was a massive five-year environmental catastrophe.",
        "correctAnswer": "What the official government press release concealed was a massive five-year environmental catastrophe.",
        "options": [
          "What the official government press release concealed was a massive five-year environmental catastrophe.",
          "What the local newspaper reported was a minor three-month administrative error.",
          "What the investigative documentary revealed was a successful state conservation initiative."
        ]
      },
      {
        "id": "8-8-e2",
        "audioText": "By following the digital paper trail of shell companies, the journalists exposed systemic tax evasion.",
        "correctAnswer": "By following the digital paper trail of shell companies, the journalists exposed systemic tax evasion.",
        "options": [
          "By following the digital paper trail of shell companies, the journalists exposed systemic tax evasion.",
          "By interviewing corporate public relations spokespeople, reporters confirmed legal regulatory compliance.",
          "By ignoring the leaked financial documents, the news agency protected the offshore banking syndicate."
        ]
      },
      {
        "id": "8-8-e3",
        "audioText": "How does the video essay use archival B-roll and motion graphics to maintain intellectual momentum?",
        "correctAnswer": "How does the video essay use archival B-roll and motion graphics to maintain intellectual momentum?",
        "options": [
          "How does the video essay use archival B-roll and motion graphics to maintain intellectual momentum?",
          "Why did the video producer cut all voiceover narration in favor of generic royalty free music?",
          "When will the independent investigative media outlet release their final feature length film?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-9",
    "badgeName": "Bioethics Philosopher",
    "badgeEmoji": "🧬🤖⚖️",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-9-1",
        "term": "Artificial Superintelligence (ASI) Alignment Problem",
        "translation": "Problema de Alineación Ética de la Superinteligencia Artificial",
        "ipa": "/ˌɑrtəˈfɪʃəl ˌsupərɪnˈtɛlədʒəns əˈlaɪnmənt/",
        "audioText": "Artificial Superintelligence Alignment Problem.",
        "example": "The ASI alignment problem is humanity's most critical existential challenge.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-2",
        "term": "CRISPR-Cas9 Germline Gene Editing",
        "translation": "Edición genética de la línea germinal con CRISPR",
        "ipa": "/ˈkrɪspər ˈdʒɜrmˌlaɪn dʒin ˈɛdɪtɪŋ/",
        "audioText": "CRISPR Germline Gene Editing.",
        "example": "CRISPR gene editing sparks profound bioethical dilemmas regarding designer babies.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-3",
        "term": "Existential risk & Human agency",
        "translation": "Riesgo existencial y Autonomía/Agencia humana",
        "ipa": "/ˌɛɡzɪˈstɛnʃəl rɪsk ænd ˈeɪdʒənsi/",
        "audioText": "Existential risk and Human agency.",
        "example": "We must safeguard human agency in an era of autonomous algorithms.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-4",
        "term": "Bioethical boundary",
        "translation": "Límite bioético infranqueable",
        "ipa": "/ˌbaɪoʊˈɛθɪkəl ˈbaʊndəri/",
        "audioText": "Bioethical boundary.",
        "example": "International treaties must establish inviolable bioethical boundaries.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-5",
        "term": "Precautionary principle",
        "translation": "Principio de precaución (No avanzar sin certeza de seguridad)",
        "ipa": "/prɪˈkɔʃəˌnɛri ˈprɪnsəpəl/",
        "audioText": "Precautionary principle.",
        "example": "The precautionary principle dictates halting deployment until safety is proven.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-6",
        "term": "Technological singularity",
        "translation": "Singularidad tecnológica (Punto de no retorno)",
        "ipa": "/ˌtɛknəˈlɑdʒɪkəl ˌsɪŋɡjəˈlærəti/",
        "audioText": "Technological singularity.",
        "example": "The technological singularity represents a threshold beyond human comprehension.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-9-7",
        "term": "Where should humanity draw the ethical line?",
        "translation": "¿Dónde debería la humanidad trazar la línea ética?",
        "ipa": "/wɛr ʃʊd hjuˈmænəti drɔ ðə ˈɛθɪkəl laɪn/",
        "audioText": "Where should humanity draw the ethical line?",
        "example": "Where should humanity draw the ethical line in cognitive enhancement?",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-9-b1",
        "prompt": "Debemos aplicar el principio de precaución antes de desplegar modelos de superinteligencia.",
        "answer": "We must apply the precautionary principle before deploying superintelligence models",
        "tokens": [
          "We",
          "must",
          "apply",
          "the",
          "precautionary",
          "principle",
          "before",
          "deploying",
          "superintelligence",
          "models",
          "are",
          "applied"
        ],
        "hints": [
          "Obligación ética: 'We must apply the precautionary principle...'",
          "Usa 'before deploying superintelligence models'."
        ]
      },
      {
        "id": "8-9-b2",
        "prompt": "La edición genética no debería utilizarse para crear ventajas biológicas desiguales.",
        "answer": "Gene editing should not be used to create unequal biological advantages",
        "tokens": [
          "Gene",
          "editing",
          "should",
          "not",
          "be",
          "used",
          "to",
          "create",
          "unequal",
          "biological",
          "advantages",
          "is",
          "using"
        ],
        "hints": [
          "Voz pasiva con modal negativo: 'should not be used to create...'",
          "Ventajas biológicas = 'unequal biological advantages'."
        ]
      },
      {
        "id": "8-9-b3",
        "prompt": "¿Dónde debería trazar la comunidad científica la línea ética para la modificación del genoma?",
        "answer": "Where should the scientific community draw the ethical line for genome modification",
        "tokens": [
          "Where",
          "should",
          "the",
          "scientific",
          "community",
          "draw",
          "the",
          "ethical",
          "line",
          "for",
          "genome",
          "modification",
          "does",
          "drawing"
        ],
        "hints": [
          "Pregunta bioética: 'Where should the scientific community draw the ethical line...'",
          "Termina con 'for genome modification'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-9-e1",
        "audioText": "The Artificial Superintelligence alignment problem requires international cooperation across competitive superpowers.",
        "correctAnswer": "The Artificial Superintelligence alignment problem requires international cooperation across competitive superpowers.",
        "options": [
          "The Artificial Superintelligence alignment problem requires international cooperation across competitive superpowers.",
          "The machine learning optimization challenge can be resolved by individual tech startups without regulation.",
          "Artificial narrow intelligence creates immediate existential threats to global biodiversity."
        ]
      },
      {
        "id": "8-9-e2",
        "audioText": "CRISPR germline modification threatens to fracture humanity into genetically enhanced and unenhanced classes.",
        "correctAnswer": "CRISPR germline modification threatens to fracture humanity into genetically enhanced and unenhanced classes.",
        "options": [
          "CRISPR germline modification threatens to fracture humanity into genetically enhanced and unenhanced classes.",
          "CRISPR somatic gene therapy offers guaranteed cures for all known infectious bacterial diseases.",
          "Genetic engineering guarantees equal socio-economic opportunities across all developing nations."
        ]
      },
      {
        "id": "8-9-e3",
        "audioText": "How does the precautionary principle protect future generations from catastrophic technological failure?",
        "correctAnswer": "How does the precautionary principle protect future generations from catastrophic technological failure?",
        "options": [
          "How does the precautionary principle protect future generations from catastrophic technological failure?",
          "Why did global regulatory agencies reject the moratorium on autonomous biological research?",
          "When will synthetic biology laboratories commercialize personalized artificial organ cloning?"
        ]
      }
    ]
  },
  {
    "classId": "c-teens-masters-10",
    "badgeName": "Grand C2 Master Laureate",
    "badgeEmoji": "👑💎🌎",
    "bonusChallenges": [],
    "speedCards": [
      {
        "id": "8-10-1",
        "term": "Global Thought Leadership Manifesto",
        "translation": "Manifiesto de Liderazgo de Pensamiento Global (Cúspide de Maestría C2)",
        "ipa": "/ˈɡloʊbəl θɔt ˈlidərˌʃɪp ˌmænəˈfɛstoʊ/",
        "audioText": "Global Thought Leadership Manifesto.",
        "example": "Your manifesto synthesizes ethics, rhetoric, and transformative vision.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-10-2",
        "term": "C2 Mastery of Fluency (CEFR Native-Level Excellence)",
        "translation": "Maestría de Fluidez C2 (Nivel Nativo y Diplomático Internacional)",
        "ipa": "/ˌsi tu ˈmæstəri ʌv ˈfluənsi/",
        "audioText": "C2 Mastery of Fluency.",
        "example": "Congratulations: you have achieved the ultimate C2 mastery of English!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-10-3",
        "term": "Unwavering intellectual conviction",
        "translation": "Inquebrantable convicción intelectual",
        "ipa": "/ʌnˈweɪvərɪŋ ˌɪntəˈlɛktʃuəl/",
        "audioText": "Unwavering intellectual conviction.",
        "example": "Speak with unwavering intellectual conviction and humble empathy.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-10-4",
        "term": "Architects of the future",
        "translation": "Arquitectos y Forjadores del futuro global",
        "ipa": "/ˈɑrkəˌtɛkts ʌv ðə ˈfjutʃər/",
        "audioText": "Architects of the future.",
        "example": "You are no longer just students; you are the architects of the future.",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-10-5",
        "term": "Maven English Academy Grand Graduate",
        "translation": "Gran Graduado de Honor de Maven English Academy",
        "ipa": "/ˈmeɪvən ˈɪŋɡlɪʃ əˈkædəmi ɡrædʒuɪt/",
        "audioText": "Maven English Academy Grand Graduate.",
        "example": "You have completed all 10 levels of our elite bilingual curriculum!",
        "type": "vocab",
        "learned": false
      },
      {
        "id": "8-10-6",
        "term": "The torch of knowledge is now yours",
        "translation": "La antorcha del conocimiento ahora es tuya",
        "ipa": "/ðə tɔrtʃ ʌv ˈnɑlɪdʒ ɪz naʊ jʊərz/",
        "audioText": "The torch of knowledge is now yours.",
        "example": "Go forth and inspire: the torch of knowledge is now yours to carry.",
        "type": "grammar",
        "learned": false
      },
      {
        "id": "8-10-7",
        "term": "Let our voices resonate across the world",
        "translation": "Que nuestras voces resuenen por todo el mundo",
        "ipa": "/lɛt ˈaʊər ˈvɔɪsɪz ˈrɛzəˌneɪt/",
        "audioText": "Let our voices resonate across the world.",
        "example": "Let our voices resonate across the world with truth, empathy, and power.",
        "type": "grammar",
        "learned": false
      }
    ],
    "buildIt": [
      {
        "id": "8-10-b1",
        "prompt": "Hoy nos levantamos como arquitectos del futuro con una voz bilingüe y global.",
        "answer": "Today we stand as architects of the future with a bilingual global voice",
        "tokens": [
          "Today",
          "we",
          "stand",
          "as",
          "architects",
          "of",
          "the",
          "future",
          "with",
          "a",
          "bilingual",
          "global",
          "voice",
          "standing",
          "are"
        ],
        "hints": [
          "Manifiesto de graduación C2: 'Today we stand as architects of the future...'",
          "Usa 'with a bilingual global voice'."
        ]
      },
      {
        "id": "8-10-b2",
        "prompt": "Nunca olvidaremos los principios de humildad y rigor que aprendimos aquí.",
        "answer": "We will never forget the principles of humility and rigor learned here",
        "tokens": [
          "We",
          "will",
          "never",
          "forget",
          "the",
          "principles",
          "of",
          "humility",
          "and",
          "rigor",
          "learned",
          "here",
          "forgetting",
          "do"
        ],
        "hints": [
          "Promesa de graduación: 'We will never forget the principles...'",
          "Usa 'of humility and rigor learned here'."
        ]
      },
      {
        "id": "8-10-b3",
        "prompt": "¿Están listos para transformar el mundo con su dominio supremo del inglés?",
        "answer": "Are you ready to transform the world with supreme English mastery",
        "tokens": [
          "Are",
          "you",
          "ready",
          "to",
          "transform",
          "the",
          "world",
          "with",
          "supreme",
          "English",
          "mastery",
          "Do",
          "transforming"
        ],
        "hints": [
          "Gran pregunta de cierre de la Academia: 'Are you ready to transform the world...'",
          "Termina con 'with supreme English mastery'."
        ]
      }
    ],
    "earCheck": [
      {
        "id": "8-10-e1",
        "audioText": "Welcome distinguished guests to the Maven English Academy Level 10 Grand Thought Leadership Commencement.",
        "correctAnswer": "Welcome distinguished guests to the Maven English Academy Level 10 Grand Thought Leadership Commencement.",
        "options": [
          "Welcome distinguished guests to the Maven English Academy Level 10 Grand Thought Leadership Commencement.",
          "Welcome prospective students to our preliminary language orientation session at Maven English.",
          "Welcome conference attendees to the regional bilingual educators workshop."
        ]
      },
      {
        "id": "8-10-e2",
        "audioText": "You have conquered all ten levels of our bespoke curriculum with intellectual brilliance and integrity.",
        "correctAnswer": "You have conquered all ten levels of our bespoke curriculum with intellectual brilliance and integrity.",
        "options": [
          "You have conquered all ten levels of our bespoke curriculum with intellectual brilliance and integrity.",
          "You have completed the basic introductory courses with satisfactory mechanical attendance.",
          "Our teachers have finished reviewing the preliminary grammar workbooks for the semester."
        ]
      },
      {
        "id": "8-10-e3",
        "audioText": "Go forth into the world: lead with empathy, challenge injustice, and let your voice reshape history.",
        "correctAnswer": "Go forth into the world: lead with empathy, challenge injustice, and let your voice reshape history.",
        "options": [
          "Go forth into the world: lead with empathy, challenge injustice, and let your voice reshape history.",
          "Return to your classrooms: review your vocabulary lists, prepare for exams, and follow established rules.",
          "Step out onto the stage: memorize your lines, avoid audience questions, and finish within time limits."
        ]
      }
    ]
  }
];
