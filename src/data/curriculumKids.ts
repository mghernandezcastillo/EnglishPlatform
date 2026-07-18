import { CurriculumLevel } from '../types';
import imgMagicGreeting from '../assets/images/cute_greeting_symbols_1781981906141.jpg';
import imgWhale from '../assets/images/cute_blue_whale_1781981941128.jpg';
import imgFrog from '../assets/images/happy_green_frog_1781981959109.jpg';
import imgSun from '../assets/images/cheerful_yellow_sun_1781981949276.jpg';
import imgMonster from '../assets/images/friendly_red_monster_1781981932571.jpg';
import imgColorfulNumbers from '../assets/images/colorful_numbers_kids_1781982882996.jpg';
import imgCutePets from '../assets/images/cute_pets_kids_1781982896917.jpg';
import imgMonsterBody from '../assets/images/monster_body_parts_1781982909851.jpg';
import imgKidsAction from '../assets/images/kids_action_verbs_1781982923116.jpg';
import imgCuteFamily from '../assets/images/cute_family_kids_1781982934785.jpg';
import imgKidsAssessment from '../assets/images/kids_assessment_welcome_1782139154509.jpg';
import imgKidsWakeup from '../assets/images/kids_q_wakeup_1782139210255.jpg';
import imgFeelingsFaces from '../assets/images/feelings_faces_kids_1781982946141.jpg';
import imgFoodDrinks from '../assets/images/food_drinks_kids_1781983103412.jpg';
import imgClothesWeather from '../assets/images/clothes_weather_kids_1781983117508.jpg';
import imgWildAnimals from '../assets/images/wild_animals_kids_1781983130013.jpg';
import imgHouseRooms from '../assets/images/house_rooms_kids_1781983143054.jpg';
import imgVehiclesTown from '../assets/images/vehicles_town_kids_1781983157009.jpg';
import imgDailyRoutine from '../assets/images/daily_routine_kids_1781983170664.jpg';
import imgToysGames from '../assets/images/toys_games_kids_1781985733126.jpg';
import imgNature from '../assets/images/nature_kids_1781985762002.jpg';
import imgJobs from '../assets/images/jobs_places_kids_1781985788190.jpg';
import imgHobbies from '../assets/images/hobbies_sports_kids_1781985815627.jpg';
import imgHolidays from '../assets/images/holidays_kids_1781985829248.jpg';
import imgSpace from '../assets/images/space_kids_1781985843535.jpg';
import imgWarmUp from '../assets/images/kids_warm_up_1782138880728.jpg';
import imgHighFive from '../assets/images/kids_high_five_1782138891888.jpg';
import imgShowAndTell from '../assets/images/kids_show_and_tell_1782138903791.jpg';

export const curriculumKidsLevels: CurriculumLevel[] = [
  {
    "id": "basic-zero",
    "title": "Level 0 - Basic Zero (Kids Explorer) / Nivel 0 - Básico Cero (Explorador Infantil)",
    "duration": "2 meses",
    "objective": "Aprender lo más básico del inglés jugando y divirtiéndonos.",
    "mcfrEquivalent": "Pre-A1",
    "classes": [
      {
        "id": "c-bz-1",
        "title": "Class 1: Hello & Amazing Colors! 🌈 / Clase 1: Hello & Amazing Colors! 🌈",
        "description": "¡Vamos a aprender a saludar como campeones!",
        "sections": [
          {
            "id": "s000",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-00-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-00-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Hello", color: "#EF4444", prompt: "How do you greet a new person?", es: "Como saludas a alguien nuevo?" }, { label: "Today", color: "#F59E0B", prompt: "How are you feeling today?", es: "Como te sientes hoy?" }, { label: "Name", color: "#10B981", prompt: "What name do you like?", es: "Que nombre te gusta?" }, { label: "Goodbye", color: "#3B82F6", prompt: "How do you say goodbye to a friend?", es: "Como te despides de un amigo?" }, { label: "Formal", color: "#8B5CF6", prompt: "When do you say hello formally?", es: "Cuando saludas formalmente?" }, { label: "Friend", color: "#EC4899", prompt: "How do you greet your best friend?", es: "Como saludas a tu mejor amigo?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s001",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-00-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "✋ HELLO!",
                  "🌞 GOOD MORNING!",
                  "👋 BYE BYE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-00-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "✋ HELLO!",
                  "🌞 GOOD MORNING!",
                  "👋 BYE BYE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-00-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "✋ HELLO!",
                  "🌞 GOOD MORNING!",
                  "👋 BYE BYE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s002",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-00-2",
                "title": "High Five! ✋ / High Cinco! ✋",
                "description": "¡Choca esos cinco a la cámara!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHighFive,
                "type": "game"
              },
                {
                    id: "c-bz-1-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Greeting people: decode the emoji story",
                    type: "emoji-game",
                    content: ["👋 + 😄 + 🤝"],
                    options: ["I am hungry.", "Hi! Nice to meet you.", "See you tomorrow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s003",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-00-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/tVlcKp3bWH8"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s004",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-00-3",
                "title": "Fun Wheel! 🎡 / Divertido Ruleta! 🎡",
                "description": "Gira la ruleta y dime qué color sale en inglés.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "RED 🍎",
                    "color": "#ef4444"
                  },
                  {
                    "label": "BLUE 🌊",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "YELLOW ☀️",
                    "color": "#facc15"
                  },
                  {
                    "label": "GREEN 🐸",
                    "color": "#22c55e"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s005",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-00-4a",
                "title": "Find the Color! 🎨 / Find the Colores! 🎨",
                "description": "Une la mancha de color con su nombre en inglés.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🔴",
                    "right": "RED"
                  },
                  {
                    "id": "2",
                    "left": "🔵",
                    "right": "BLUE"
                  },
                  {
                    "id": "3",
                    "left": "🟡",
                    "right": "YELLOW"
                  },
                  {
                    "id": "4",
                    "left": "🟢",
                    "right": "GREEN"
                  }
                ]
              },
              {
                "id": "kids-00-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🔴 ➡️ ???",
                  "🔵 ➡️ ????",
                  "🟡 ➡️ ??????",
                  "🟢 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s006",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-00-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "RED",
                  "emoji": "🍎",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s007",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-00-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Hello & Amazing Colors! 🌈."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Greeting Monster Boss",
                                    bossTitle: "Hello & Amazing Colors! 🌈",
                                    bossAvatar: "👾",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to hello & amazing colors! 🌈.",
                                      "Say one useful phrase for hello & amazing colors! 🌈."
                                    ],
                                      use: [
                                      "Create one sentence about hello & amazing colors! 🌈 using greetings.",
                                      "Ask a friend one question about hello & amazing colors! 🌈."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about hello & amazing colors! 🌈.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to hello & amazing colors! 🌈."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s008",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-00-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-00-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/tVlcKp3bWH8",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-2",
        "title": "Class 2: Numbers & Animal Friends! 🐶 / Clase 2: Numbers & Animal Friends! 🐶",
        "description": "¡Vamos a contar hasta 5 y conocer a nuestras mascotas!",
        "sections": [
          {
            "id": "s010",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-01-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-01-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Count", color: "#EF4444", prompt: "How many animals can you name?", es: "Cuantos animales puedes nombrar?" }, { label: "Choice", color: "#F59E0B", prompt: "Do you prefer cats or dogs?", es: "Prefieres gatos o perros?" }, { label: "Number", color: "#10B981", prompt: "What number do you like most?", es: "Que numero te gusta mas?" }, { label: "Pets", color: "#3B82F6", prompt: "How many pets do you have?", es: "Cuantas mascotas tienes?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal runs fast?", es: "Que animal corre rapido?" }, { label: "Sound", color: "#EC4899", prompt: "What animal sound is funny?", es: "Que sonido animal es divertido?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s011",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-01-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "1️⃣ ONE",
                  "2️⃣ TWO",
                  "3️⃣ THREE",
                  "4️⃣ FOUR",
                  "5️⃣ FIVE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-01-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "1️⃣ ONE",
                  "2️⃣ TWO",
                  "3️⃣ THREE",
                  "4️⃣ FOUR",
                  "5️⃣ FIVE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-01-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "1️⃣ ONE",
                  "2️⃣ TWO",
                  "3️⃣ THREE",
                  "4️⃣ FOUR",
                  "5️⃣ FIVE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s012",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-01-2",
                "title": "Show me 5! ✋ / Show me 5! ✋",
                "description": "¡Muéstrame 5 deditos rápidos!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgColorfulNumbers,
                "type": "game"
              },
                {
                    id: "c-bz-2-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s013",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-01-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/RB6ZWWpykCs"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s014",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-01-3",
                "title": "Super Number Wheel! 🎡 / Super Números Ruleta! 🎡",
                "description": "Gira la ruleta y dime qué número sale.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "ONE",
                    "color": "#ec4899"
                  },
                  {
                    "label": "TWO",
                    "color": "#8b5cf6"
                  },
                  {
                    "label": "THREE",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "FOUR",
                    "color": "#10b981"
                  },
                  {
                    "label": "FIVE",
                    "color": "#f59e0b"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s015",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-01-4a",
                "title": "Match the Pet! 🐾 / Pareja the Mascotas! 🐾",
                "description": "¡Une cada animal con su nombre en inglés!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🐶",
                    "right": "DOG"
                  },
                  {
                    "id": "2",
                    "left": "🐱",
                    "right": "CAT"
                  },
                  {
                    "id": "3",
                    "left": "🐦",
                    "right": "BIRD"
                  },
                  {
                    "id": "4",
                    "left": "🐟",
                    "right": "FISH"
                  }
                ]
              },
              {
                "id": "kids-01-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🐶 ➡️ ???",
                  "🐱 ➡️ ???",
                  "🐦 ➡️ ????",
                  "🐟 ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s016",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-01-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "ONE",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s017",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-01-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Numbers & Animal Friends! 🐶."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Time Monster Boss",
                                    bossTitle: "Numbers & Animal Friends! 🐶",
                                    bossAvatar: "⏰",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to numbers & animal friends! 🐶.",
                                      "Say one useful phrase for numbers & animal friends! 🐶."
                                    ],
                                      use: [
                                      "Create one sentence about numbers & animal friends! 🐶 using numbers.",
                                      "Ask a friend one question about numbers & animal friends! 🐶."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about numbers & animal friends! 🐶.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to numbers & animal friends! 🐶."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s018",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-01-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-01-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/RB6ZWWpykCs",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-3",
        "title": "Class 3: My Body & Fun Actions! 🏃 / Clase 3: My Body & Fun Actions! 🏃",
        "description": "¡Vamos a movernos y aprender las partes de nuestro cuerpo!",
        "sections": [
          {
            "id": "s020",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-02-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMonsterBody,
                "type": "speaking"
              },
              {
                "id": "kids-02-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Body", color: "#EF4444", prompt: "What body part do you use a lot?", es: "Que parte del cuerpo usas mucho?" }, { label: "Action", color: "#F59E0B", prompt: "What action can you do now?", es: "Que accion puedes hacer ahora?" }, { label: "Jump", color: "#10B981", prompt: "Can you jump high?", es: "Puedes saltar alto?" }, { label: "Sport", color: "#3B82F6", prompt: "What sport uses your legs?", es: "Que deporte usa tus piernas?" }, { label: "Hands", color: "#8B5CF6", prompt: "What can you do with your hands?", es: "Que puedes hacer con tus manos?" }, { label: "Move", color: "#EC4899", prompt: "Do you prefer running or walking?", es: "Prefieres correr o caminar?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s021",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-02-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🙎‍♂️ HEAD",
                  "👀 EYES",
                  "👂 EARS",
                  "👃 NOSE",
                  "👄 MOUTH"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgMonsterBody,
                "type": "speaking"
              },
              {
                "id": "kids-02-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🙎‍♂️ HEAD",
                  "👀 EYES",
                  "👂 EARS",
                  "👃 NOSE",
                  "👄 MOUTH"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-02-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🙎‍♂️ HEAD",
                  "👀 EYES",
                  "👂 EARS",
                  "👃 NOSE",
                  "👄 MOUTH"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s022",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-02-2",
                "title": "Shake your body! 🕺 / Shake your Cuerpo! 🕺",
                "description": "¡Sacúdete de pies a cabeza!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMonsterBody,
                "type": "game"
              },
                {
                    id: "c-bz-3-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Body and actions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏃 + 🦘 + 👍"],
                    options: ["My birthday is today.", "I can run and jump.", "The office is open."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s023",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-02-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/l4WNrvVjiTw"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s024",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-02-3",
                "title": "Action Wheel! 🎡 / Acciones Ruleta! 🎡",
                "description": "¡Gira la ruleta y haz la acción súper rápido!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "JUMP! 🦘",
                    "color": "#ef4444"
                  },
                  {
                    "label": "RUN! 🏃",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "CLAP! 👏",
                    "color": "#eab308"
                  },
                  {
                    "label": "DANCE! 💃",
                    "color": "#a855f7"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s025",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-02-4a",
                "title": "Match the Body! 🧩 / Pareja the Cuerpo! 🧩",
                "description": "¡Encuentra y une la parte del cuerpo!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "👀",
                    "right": "EYES"
                  },
                  {
                    "id": "2",
                    "left": "👃",
                    "right": "NOSE"
                  },
                  {
                    "id": "3",
                    "left": "👂",
                    "right": "EARS"
                  },
                  {
                    "id": "4",
                    "left": "👄",
                    "right": "MOUTH"
                  }
                ]
              },
              {
                "id": "kids-02-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "👀 ➡️ ????",
                  "👃 ➡️ ????",
                  "👂 ➡️ ????",
                  "👄 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s026",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-02-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "JUMP",
                  "emoji": "!🦘",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s027",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-02-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Body & Fun Actions! 🏃."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Health Monster Boss",
                                    bossTitle: "My Body & Fun Actions! 🏃",
                                    bossAvatar: "🩺",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my body & fun actions! 🏃.",
                                      "Say one useful phrase for my body & fun actions! 🏃."
                                    ],
                                      use: [
                                      "Create one sentence about my body & fun actions! 🏃 using body words.",
                                      "Ask a friend one question about my body & fun actions! 🏃."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my body & fun actions! 🏃.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my body & fun actions! 🏃."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s028",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-02-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMonsterBody,
                "type": "speaking"
              },
              {
                "id": "kids-02-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/l4WNrvVjiTw",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-4",
        "title": "Class 4: My Favorite Toys! 🪁 / Clase 4: My Favorite Toys! 🪁",
        "description": "¡Vamos a jugar y descubrir nuestros juguetes favoritos!",
        "sections": [
          {
            "id": "s030",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-03-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgToysGames,
                "type": "speaking"
              },
              {
                "id": "kids-03-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Toy", color: "#EF4444", prompt: "What toy do you like?", es: "Que juguete te gusta?" }, { label: "Play", color: "#F59E0B", prompt: "How do you play with it?", es: "Como juegas con eso?" }, { label: "Color", color: "#10B981", prompt: "What color is your favorite toy?", es: "De que color es tu juguete favorito?" }, { label: "Size", color: "#3B82F6", prompt: "Do you like big or small toys?", es: "Te gustan juguetes grandes o pequenos?" }, { label: "Fun", color: "#8B5CF6", prompt: "What toy is fun?", es: "Que juguete es divertido?" }, { label: "Share", color: "#EC4899", prompt: "Who do you play with?", es: "Con quien juegas?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s031",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-03-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🧸 TEDDY BEAR",
                  "⚽ BALL",
                  "🪁 KITE",
                  "🚂 TRAIN"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgToysGames,
                "type": "speaking"
              },
              {
                "id": "kids-03-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🧸 TEDDY BEAR",
                  "⚽ BALL",
                  "🪁 KITE",
                  "🚂 TRAIN"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-03-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🧸 TEDDY BEAR",
                  "⚽ BALL",
                  "🪁 KITE",
                  "🚂 TRAIN"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s032",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-03-2",
                "title": "Hug a Toy! 🤗 / Hug a Toy! 🤗",
                "description": "¡Corre a abrazar tu juguete favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgToysGames,
                "type": "game"
              },
                {
                    id: "c-bz-4-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Toys: decode the emoji story",
                    type: "emoji-game",
                    content: ["🧸 + 🎮 + ⭐"],
                    options: ["It is raining outside.", "My favorite toy is fun.", "She works in a bank."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s033",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-03-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/8-SWzpdcl6E"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s034",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-03-3",
                "title": "Spin a Toy! 🎡 / Spin a Toy! 🎡",
                "description": "¡Gira la ruleta y dime de qué color es ese juguete!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "TEDDY BEAR 🧸",
                    "color": "#facc15"
                  },
                  {
                    "label": "BALL ⚽",
                    "color": "#ef4444"
                  },
                  {
                    "label": "KITE 🪁",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "TRAIN 🚂",
                    "color": "#22c55e"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s035",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-03-4a",
                "title": "Toy Match! 🧩 / Toy Pareja! 🧩",
                "description": "¡Une el juguete con su nombre!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🧸",
                    "right": "TEDDY BEAR"
                  },
                  {
                    "id": "2",
                    "left": "⚽",
                    "right": "BALL"
                  },
                  {
                    "id": "3",
                    "left": "🪁",
                    "right": "KITE"
                  },
                  {
                    "id": "4",
                    "left": "🚂",
                    "right": "TRAIN"
                  }
                ]
              },
              {
                "id": "kids-03-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🧸 ➡️ ??????????",
                  "⚽ ➡️ ????",
                  "🪁 ➡️ ????",
                  "🚂 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s036",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-03-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "TEDDY BEAR",
                  "emoji": "🧸",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s037",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-03-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Favorite Toys! 🪁."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Color Monster Boss",
                                    bossTitle: "My Favorite Toys! 🪁",
                                    bossAvatar: "🎨",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my favorite toys! 🪁.",
                                      "Say one useful phrase for my favorite toys! 🪁."
                                    ],
                                      use: [
                                      "Create one sentence about my favorite toys! 🪁 using colors.",
                                      "Ask a friend one question about my favorite toys! 🪁."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my favorite toys! 🪁.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my favorite toys! 🪁."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s038",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-03-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgToysGames,
                "type": "speaking"
              },
              {
                "id": "kids-03-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/8-SWzpdcl6E",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-5",
        "title": "Class 5: Yummy Fruits! 🍓 / Clase 5: Yummy Fruits! 🍓",
        "description": "¡Aprenderemos los nombres de las frutas más ricas!",
        "sections": [
          {
            "id": "s040",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-04-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-04-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Food", color: "#EF4444", prompt: "What food do you like?", es: "Que comida te gusta?" }, { label: "Drink", color: "#F59E0B", prompt: "What do you drink every day?", es: "Que tomas cada dia?" }, { label: "Snack", color: "#10B981", prompt: "What is your favorite snack?", es: "Cual es tu snack favorito?" }, { label: "Order", color: "#3B82F6", prompt: "What do you order at a restaurant?", es: "Que pides en un restaurante?" }, { label: "Taste", color: "#8B5CF6", prompt: "Do you prefer sweet or salty food?", es: "Prefieres dulce o salado?" }, { label: "Hungry", color: "#EC4899", prompt: "What do you eat when you are hungry?", es: "Que comes cuando tienes hambre?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s041",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-04-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🍓 STRAWBERRY",
                  "🍌 BANANA",
                  "🍉 WATERMELON",
                  "🍇 GRAPES"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-04-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🍓 STRAWBERRY",
                  "🍌 BANANA",
                  "🍉 WATERMELON",
                  "🍇 GRAPES"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-04-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🍓 STRAWBERRY",
                  "🍌 BANANA",
                  "🍉 WATERMELON",
                  "🍇 GRAPES"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s042",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-04-2",
                "title": "Eat a Fruit! 😋 / Eat a Fruit! 😋",
                "description": "¡Haz como que te comes tu fruta favorita!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              },
                {
                    id: "c-bz-5-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Food and drinks: decode the emoji story",
                    type: "emoji-game",
                    content: ["🍔 + 🍟 + 🥤"],
                    options: ["I am from Canada.", "I want a burger and a drink.", "Open your book."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s043",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-04-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mfReSbQ7jzE"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s044",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-04-3",
                "title": "Fruit Wheel! 🎡 / Fruit Ruleta! 🎡",
                "description": "Gira y dime qué fruta comeremos hoy.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "STRAWBERRY 🍓",
                    "color": "#ef4444"
                  },
                  {
                    "label": "BANANA 🍌",
                    "color": "#facc15"
                  },
                  {
                    "label": "WATERMELON 🍉",
                    "color": "#22c55e"
                  },
                  {
                    "label": "GRAPES 🍇",
                    "color": "#a855f7"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s045",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-04-4a",
                "title": "Match the Fruit! 🍎 / Pareja the Fruit! 🍎",
                "description": "Une cada fruta con su nombre.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🍓",
                    "right": "STRAWBERRY"
                  },
                  {
                    "id": "2",
                    "left": "🍌",
                    "right": "BANANA"
                  },
                  {
                    "id": "3",
                    "left": "🍉",
                    "right": "WATERMELON"
                  },
                  {
                    "id": "4",
                    "left": "🍇",
                    "right": "GRAPES"
                  }
                ]
              },
              {
                "id": "kids-04-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🍓 ➡️ ??????????",
                  "🍌 ➡️ ??????",
                  "🍉 ➡️ ??????????",
                  "🍇 ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s046",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-04-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "STRAWBERRY",
                  "emoji": "🍓",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s047",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-04-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Yummy Fruits! 🍓."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Yummy Fruits! 🍓",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to yummy fruits! 🍓.",
                                      "Say one useful phrase for yummy fruits! 🍓."
                                    ],
                                      use: [
                                      "Create one sentence about yummy fruits! 🍓 using keywords.",
                                      "Ask a friend one question about yummy fruits! 🍓."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about yummy fruits! 🍓.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to yummy fruits! 🍓."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s048",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-04-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-04-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mfReSbQ7jzE",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-6",
        "title": "Class 6: Super Shapes! 🟢 / Clase 6: Super Shapes! 🟢",
        "description": "¡Vamos a dibujar y aprender sobre las figuras geométricas!",
        "sections": [
          {
            "id": "s050",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-05-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSun,
                "type": "speaking"
              },
              {
                "id": "kids-05-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Shape", color: "#EF4444", prompt: "What shape do you see?", es: "Que forma ves?" }, { label: "Find", color: "#F59E0B", prompt: "Where can you find a circle?", es: "Donde puedes encontrar un circulo?" }, { label: "Draw", color: "#10B981", prompt: "Can you draw a triangle?", es: "Puedes dibujar un triangulo?" }, { label: "Pattern", color: "#3B82F6", prompt: "Do you like stripes or dots?", es: "Te gustan rayas o puntos?" }, { label: "Color", color: "#8B5CF6", prompt: "What color is the shape?", es: "De que color es la forma?" }, { label: "Object", color: "#EC4899", prompt: "What object has this shape?", es: "Que objeto tiene esta forma?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s051",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-05-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🔴 CIRCLE",
                  "🟦 SQUARE",
                  "🔺 TRIANGLE",
                  "⭐ STAR"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgSun,
                "type": "speaking"
              },
              {
                "id": "kids-05-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🔴 CIRCLE",
                  "🟦 SQUARE",
                  "🔺 TRIANGLE",
                  "⭐ STAR"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-05-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🔴 CIRCLE",
                  "🟦 SQUARE",
                  "🔺 TRIANGLE",
                  "⭐ STAR"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s052",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-05-2",
                "title": "Draw in the Air! ✍️ / Draw in the Air! ✍️",
                "description": "¡Dibuja un círculo grande en el aire!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSun,
                "type": "game"
              },
                {
                    id: "c-bz-6-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Shapes: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔴 + ◻️ + 🎨"],
                    options: ["I like chicken and fries.", "I see a red circle and a square.", "He can ride a bike."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s053",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-05-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/WMnVQAg3AeM"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s054",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-05-3",
                "title": "Spin the Shape! 🎡 / Spin the Shape! 🎡",
                "description": "Gira la ruleta y dibuja la figura que salga.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "CIRCLE 🔴",
                    "color": "#ef4444"
                  },
                  {
                    "label": "SQUARE 🟦",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "TRIANGLE 🔺",
                    "color": "#22c55e"
                  },
                  {
                    "label": "STAR ⭐",
                    "color": "#facc15"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s055",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-05-4a",
                "title": "Match the Shape! 🟢 / Pareja the Shape! 🟢",
                "description": "Encuentra el nombre correcto para la figura.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🔴",
                    "right": "CIRCLE"
                  },
                  {
                    "id": "2",
                    "left": "🟦",
                    "right": "SQUARE"
                  },
                  {
                    "id": "3",
                    "left": "🔺",
                    "right": "TRIANGLE"
                  },
                  {
                    "id": "4",
                    "left": "⭐",
                    "right": "STAR"
                  }
                ]
              },
              {
                "id": "kids-05-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🔴 ➡️ ??????",
                  "🟦 ➡️ ??????",
                  "🔺 ➡️ ????????",
                  "⭐ ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s056",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-05-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "CIRCLE",
                  "emoji": "🔴",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s057",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-05-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Super Shapes! 🟢."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Color Monster Boss",
                                    bossTitle: "Super Shapes! 🟢",
                                    bossAvatar: "🎨",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to super shapes! 🟢.",
                                      "Say one useful phrase for super shapes! 🟢."
                                    ],
                                      use: [
                                      "Create one sentence about super shapes! 🟢 using colors.",
                                      "Ask a friend one question about super shapes! 🟢."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about super shapes! 🟢.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to super shapes! 🟢."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s058",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-05-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSun,
                "type": "speaking"
              },
              {
                "id": "kids-05-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/WMnVQAg3AeM",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-7",
        "title": "Class 7: School Supplies! 🎒 / Clase 7: School Supplies! 🎒",
        "description": "¡Descubre qué hay en nuestra mochila increíble!",
        "sections": [
          {
            "id": "s060",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-06-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-06-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Subject", color: "#EF4444", prompt: "What subject do you like?", es: "Que materia te gusta?" }, { label: "English", color: "#F59E0B", prompt: "Why do you study English?", es: "Por que estudias ingles?" }, { label: "Bag", color: "#10B981", prompt: "What is in your school bag?", es: "Que hay en tu mochila?" }, { label: "Easy", color: "#3B82F6", prompt: "What class is easy for you?", es: "Que clase es facil para ti?" }, { label: "Hard", color: "#8B5CF6", prompt: "What class is hard for you?", es: "Que clase es dificil para ti?" }, { label: "Tool", color: "#EC4899", prompt: "Do you prefer pen or pencil?", es: "Prefieres lapiz o boligrafo?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s061",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-06-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🎒 BACKPACK",
                  "✏️ PENCIL",
                  "🖍️ CRAYON",
                  "📖 BOOK"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-06-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🎒 BACKPACK",
                  "✏️ PENCIL",
                  "🖍️ CRAYON",
                  "📖 BOOK"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-06-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🎒 BACKPACK",
                  "✏️ PENCIL",
                  "🖍️ CRAYON",
                  "📖 BOOK"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s062",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-06-2",
                "title": "Show your Pencil! ✏️ / Show your Pencil! ✏️",
                "description": "¡Enséñame tu lápiz o crayón favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMagicGreeting,
                "type": "game"
              },
                {
                    id: "c-bz-7-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Classroom objects: decode the emoji story",
                    type: "emoji-game",
                    content: ["📖 + ✏️ + 🎒"],
                    options: ["I want a burger.", "My pencil is in my bag.", "They are playing soccer."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s063",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-06-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/AS5nhKzaOqo"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s064",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-06-3",
                "title": "School Wheel! 🎡 / Escuela Ruleta! 🎡",
                "description": "Gira la ruleta para sacar algo de la mochila.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "BACKPACK",
                    "color": "#10b981"
                  },
                  {
                    "label": "PENCIL",
                    "color": "#facc15"
                  },
                  {
                    "label": "CRAYON",
                    "color": "#ef4444"
                  },
                  {
                    "label": "BOOK",
                    "color": "#3b82f6"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s065",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-06-4a",
                "title": "School Match! 🧩 / Escuela Pareja! 🧩",
                "description": "Une los útiles escolares.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🎒",
                    "right": "BACKPACK"
                  },
                  {
                    "id": "2",
                    "left": "✏️",
                    "right": "PENCIL"
                  },
                  {
                    "id": "3",
                    "left": "🖍️",
                    "right": "CRAYON"
                  },
                  {
                    "id": "4",
                    "left": "📖",
                    "right": "BOOK"
                  }
                ]
              },
              {
                "id": "kids-06-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🎒 ➡️ ????????",
                  "✏️ ➡️ ??????",
                  "🖍️ ➡️ ??????",
                  "📖 ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s066",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-06-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "BACKPACK",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s067",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-06-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using School Supplies! 🎒."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Classroom Monster Boss",
                                    bossTitle: "School Supplies! 🎒",
                                    bossAvatar: "🎒",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to school supplies! 🎒.",
                                      "Say one useful phrase for school supplies! 🎒."
                                    ],
                                      use: [
                                      "Create one sentence about school supplies! 🎒 using classroom words.",
                                      "Ask a friend one question about school supplies! 🎒."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about school supplies! 🎒.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to school supplies! 🎒."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s068",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-06-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-06-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/AS5nhKzaOqo",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bz-8",
        "title": "Class 8: Farm Animals! 🐮 / Clase 8: Farm Animals! 🐮",
        "description": "¡Visitaremos la granja y conoceremos a los animales!",
        "sections": [
          {
            "id": "s070",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-07-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-07-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s071",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-07-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🐮 COW",
                  "🐷 PIG",
                  "🦆 DUCK",
                  "🐴 HORSE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-07-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🐮 COW",
                  "🐷 PIG",
                  "🦆 DUCK",
                  "🐴 HORSE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-07-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🐮 COW",
                  "🐷 PIG",
                  "🦆 DUCK",
                  "🐴 HORSE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s072",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-07-2",
                "title": "Moo & Oink! 🐷 / Moo y Oink! 🐷",
                "description": "¡Haz el sonido de tu animal de granja favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFrog,
                "type": "game"
              },
                {
                    id: "c-bz-8-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s073",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-07-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/zXEq-QO3xTg"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s074",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-07-3",
                "title": "Farm Wheel! 🎡 / Farm Ruleta! 🎡",
                "description": "¡Gira para ver qué animal de la granja nos saluda!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "COW 🐮",
                    "color": "#000000"
                  },
                  {
                    "label": "PIG 🐷",
                    "color": "#f472b6"
                  },
                  {
                    "label": "DUCK 🦆",
                    "color": "#facc15"
                  },
                  {
                    "label": "HORSE 🐴",
                    "color": "#8b5cf6"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s075",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-07-4a",
                "title": "Match the Farm! 🚜 / Pareja the Farm! 🚜",
                "description": "¡Encuentra al animal de la granja!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🐮",
                    "right": "COW"
                  },
                  {
                    "id": "2",
                    "left": "🐷",
                    "right": "PIG"
                  },
                  {
                    "id": "3",
                    "left": "🦆",
                    "right": "DUCK"
                  },
                  {
                    "id": "4",
                    "left": "🐴",
                    "right": "HORSE"
                  }
                ]
              },
              {
                "id": "kids-07-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🐮 ➡️ ???",
                  "🐷 ➡️ ???",
                  "🦆 ➡️ ????",
                  "🐴 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s076",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-07-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "COW",
                  "emoji": "🐮",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s077",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-07-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Farm Animals! 🐮."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Safari Monster Boss",
                                    bossTitle: "Farm Animals! 🐮",
                                    bossAvatar: "🦁",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to farm animals! 🐮.",
                                      "Say one useful phrase for farm animals! 🐮."
                                    ],
                                      use: [
                                      "Create one sentence about farm animals! 🐮 using animal words.",
                                      "Ask a friend one question about farm animals! 🐮."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about farm animals! 🐮.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to farm animals! 🐮."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s078",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-07-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-07-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/zXEq-QO3xTg",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      }
    ],
    virtualEvaluation: [
      {
        id: "basic-zero-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Kids Basic Zero?",
        options: [
          "Good night apple.",
          "Hello!",
          "Blue teacher run."
        ],
        correctAnswer: "Hello!",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-zero-virtual-02",
        type: "multiple-choice",
        question: "What does \"red\" mean in Spanish?",
        options: [
          "antes",
          "rojo",
          "nunca"
        ],
        correctAnswer: "rojo",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-zero-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to colors, greetings, classroom words, numbers, and simple feelings.",
        options: [
          "I no understand yesterday.",
          "I am happy.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I am happy.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-zero-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "I am and basic words",
          "Chemical formulas"
        ],
        correctAnswer: "I am and basic words",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-zero-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "The speaker is happy and sees a red ball.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "The speaker is happy and sees a red ball.",
        audioText: "Hello! I am happy. I see a red ball and two cats.",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-zero-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgKidsWakeup
      },
      {
        id: "basic-zero-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "colors, greetings, classroom words, numbers, and simple feelings",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "colors, greetings, classroom words, numbers, and simple feelings",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-zero-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-zero-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-zero-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Hello! I am happy. I see a red ball and two cats.",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-zero-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "Pre-A1 communication",
          "University literature only"
        ],
        correctAnswer: "Pre-A1 communication",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-zero-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgKidsWakeup
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Say hello, your name, and how you feel today."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Name five colors you can see in the room."
      },
      {
        topic: "VOCABULARY",
        question: "Count from one to ten and show the numbers with your fingers."
      },
      {
        topic: "INTERACTION",
        question: "Point to classroom objects and say their names."
      },
      {
        topic: "FLUENCY",
        question: "Say three animal words and make a simple sentence."
      }
    ]
  },
  {
    "id": "basic-explorer",
    "title": "Level 1 - Basic 1 (Kids Explorador) / Nivel 1 - Básico 1 (Niños Explorador)",
    "duration": "2 meses",
    "objective": "Ampliar vocabulario con familia, emociones, ropa y clima.",
    "mcfrEquivalent": "Pre-A1+",
    "classes": [
      {
        "id": "c-be-1",
        "title": "Class 1: My Family & Feelings! 👨‍👩‍👧‍👦 / Clase 1: My Family & Feelings! 👨‍👩‍👧‍👦",
        "description": "¡Vamos a presentar a nuestra familia y hablar de cómo nos sentimos!",
        "sections": [
          {
            "id": "s100",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-10-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgCuteFamily,
                "type": "speaking"
              },
              {
                "id": "kids-10-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Color", color: "#EF4444", prompt: "What color do you like today?", es: "Que color te gusta hoy?" }, { label: "Mood", color: "#F59E0B", prompt: "How do you feel right now?", es: "Como te sientes ahora?" }, { label: "Clothes", color: "#10B981", prompt: "What color are your clothes?", es: "De que color es tu ropa?" }, { label: "Happy", color: "#3B82F6", prompt: "What makes you feel happy?", es: "Que te hace feliz?" }, { label: "Emoji", color: "#8B5CF6", prompt: "What emoji shows your mood?", es: "Que emoji muestra tu animo?" }, { label: "Object", color: "#EC4899", prompt: "What color do you see near you?", es: "Que color ves cerca?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s101",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-10-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "👩 MOM",
                  "👨 DAD",
                  "👦 BROTHER",
                  "👧 SISTER"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgCuteFamily,
                "type": "speaking"
              },
              {
                "id": "kids-10-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "👩 MOM",
                  "👨 DAD",
                  "👦 BROTHER",
                  "👧 SISTER"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-10-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "👩 MOM",
                  "👨 DAD",
                  "👦 BROTHER",
                  "👧 SISTER"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s102",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-10-2",
                "title": "Big Smile! 😁 / Big Smile! 😁",
                "description": "¡Muéstrame tu sonrisa más feliz!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgCuteFamily,
                "type": "game"
              },
                {
                    id: "c-be-1-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Colors and feelings: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎨 + 👕 + 😊"],
                    options: ["I have two dogs.", "My shirt is blue and I am happy.", "Turn left at the bank."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s103",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-10-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s104",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-10-3",
                "title": "Feelings Wheel! 🎡 / Feelings Ruleta! 🎡",
                "description": "Gira la ruleta y pon la cara correspondiente.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "HAPPY 😊",
                    "color": "#fcd34d"
                  },
                  {
                    "label": "SAD 😢",
                    "color": "#60a5fa"
                  },
                  {
                    "label": "ANGRY 😡",
                    "color": "#f87171"
                  },
                  {
                    "label": "SURPRISED 😮",
                    "color": "#c084fc"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s105",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-10-4a",
                "title": "Family Match! 🧩 / Familia Pareja! 🧩",
                "description": "¡Une cada miembro de la familia!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "👩",
                    "right": "MOM"
                  },
                  {
                    "id": "2",
                    "left": "👨",
                    "right": "DAD"
                  },
                  {
                    "id": "3",
                    "left": "👦",
                    "right": "BROTHER"
                  },
                  {
                    "id": "4",
                    "left": "👧",
                    "right": "SISTER"
                  }
                ]
              },
              {
                "id": "kids-10-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "👩 ➡️ ???",
                  "👨 ➡️ ???",
                  "👦 ➡️ ???????",
                  "👧 ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s106",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-10-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "HAPPY",
                  "emoji": "😊",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s107",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-10-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Family & Feelings! 👨‍👩‍👧‍👦."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Home Monster Boss",
                                    bossTitle: "My Family & Feelings! 👨‍👩‍👧‍👦",
                                    bossAvatar: "🏠",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my family & feelings! 👨‍👩‍👧‍👦.",
                                      "Say one useful phrase for my family & feelings! 👨‍👩‍👧‍👦."
                                    ],
                                      use: [
                                      "Create one sentence about my family & feelings! 👨‍👩‍👧‍👦 using family words.",
                                      "Ask a friend one question about my family & feelings! 👨‍👩‍👧‍👦."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my family & feelings! 👨‍👩‍👧‍👦.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my family & feelings! 👨‍👩‍👧‍👦."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s108",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-10-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgCuteFamily,
                "type": "speaking"
              },
              {
                "id": "kids-10-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/FHaObkHEkHQ",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-2",
        "title": "Class 2: Yummy Fast Food! 🍕 / Clase 2: Yummy Fast Food! 🍕",
        "description": "¡Vamos a aprender los nombres de nuestra comida favorita!",
        "sections": [
          {
            "id": "s110",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-11-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-11-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Food", color: "#EF4444", prompt: "What food do you like?", es: "Que comida te gusta?" }, { label: "Drink", color: "#F59E0B", prompt: "What do you drink every day?", es: "Que tomas cada dia?" }, { label: "Snack", color: "#10B981", prompt: "What is your favorite snack?", es: "Cual es tu snack favorito?" }, { label: "Order", color: "#3B82F6", prompt: "What do you order at a restaurant?", es: "Que pides en un restaurante?" }, { label: "Taste", color: "#8B5CF6", prompt: "Do you prefer sweet or salty food?", es: "Prefieres dulce o salado?" }, { label: "Hungry", color: "#EC4899", prompt: "What do you eat when you are hungry?", es: "Que comes cuando tienes hambre?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s111",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-11-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🍕 PIZZA",
                  "🍔 HAMBURGER",
                  "🍟 FRIES",
                  "🧃 JUICE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-11-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🍕 PIZZA",
                  "🍔 HAMBURGER",
                  "🍟 FRIES",
                  "🧃 JUICE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-11-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🍕 PIZZA",
                  "🍔 HAMBURGER",
                  "🍟 FRIES",
                  "🧃 JUICE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s112",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-11-2",
                "title": "Yummy! 😋 / Yummy! 😋",
                "description": "¡Frótate la pancita y di Mmmm!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              },
                {
                    id: "c-be-2-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Food and drinks: decode the emoji story",
                    type: "emoji-game",
                    content: ["🍔 + 🍟 + 🥤"],
                    options: ["I am from Canada.", "I want a burger and a drink.", "Open your book."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s113",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-11-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/_uLesn8M1IM"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s114",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-11-3",
                "title": "Food Wheel! 🎡 / Comida Ruleta! 🎡",
                "description": "¡Gira la ruleta y dime qué te tocó comer hoy!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "PIZZA",
                    "color": "#f59e0b"
                  },
                  {
                    "label": "FRIES",
                    "color": "#ef4444"
                  },
                  {
                    "label": "JUICE",
                    "color": "#8b5cf6"
                  },
                  {
                    "label": "HAMBURGER",
                    "color": "#10b981"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s115",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-11-4a",
                "title": "Food Match! 🧩 / Comida Pareja! 🧩",
                "description": "¡Une el dibujo con su nombre!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🍕",
                    "right": "PIZZA"
                  },
                  {
                    "id": "2",
                    "left": "🍔",
                    "right": "HAMBURGER"
                  },
                  {
                    "id": "3",
                    "left": "🍟",
                    "right": "FRIES"
                  },
                  {
                    "id": "4",
                    "left": "🧃",
                    "right": "JUICE"
                  }
                ]
              },
              {
                "id": "kids-11-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🍕 ➡️ ?????",
                  "🍔 ➡️ ?????????",
                  "🍟 ➡️ ?????",
                  "🧃 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s116",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-11-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "PIZZA",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s117",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-11-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Yummy Fast Food! 🍕."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Hungry Monster Boss",
                                    bossTitle: "Yummy Fast Food! 🍕",
                                    bossAvatar: "🍔",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to yummy fast food! 🍕.",
                                      "Say one useful phrase for yummy fast food! 🍕."
                                    ],
                                      use: [
                                      "Create one sentence about yummy fast food! 🍕 using food words.",
                                      "Ask a friend one question about yummy fast food! 🍕."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about yummy fast food! 🍕.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to yummy fast food! 🍕."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s118",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-11-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-11-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/_uLesn8M1IM",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-3",
        "title": "Class 3: My Clothes & The Weather! 👕 / Clase 3: My Clothes & The Weather! 👕",
        "description": "¡Aprenderemos la ropa y cómo vestirse según el clima!",
        "sections": [
          {
            "id": "s120",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-12-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgClothesWeather,
                "type": "speaking"
              },
              {
                "id": "kids-12-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Weather", color: "#EF4444", prompt: "How is the weather today?", es: "Como esta el clima hoy?" }, { label: "Season", color: "#F59E0B", prompt: "What season do you like?", es: "Que estacion te gusta?" }, { label: "Clothes", color: "#10B981", prompt: "What do you wear on cold days?", es: "Que usas en dias frios?" }, { label: "Temperature", color: "#3B82F6", prompt: "Do you prefer hot or cold weather?", es: "Prefieres calor o frio?" }, { label: "Rain", color: "#8B5CF6", prompt: "Do you like rainy days?", es: "Te gustan los dias lluviosos?" }, { label: "Sun", color: "#EC4899", prompt: "What do you do on sunny days?", es: "Que haces en dias soleados?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s121",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-12-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "👕 T-SHIRT",
                  "👖 PANTS",
                  "👟 SHOES",
                  "👗 DRESS"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgClothesWeather,
                "type": "speaking"
              },
              {
                "id": "kids-12-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "👕 T-SHIRT",
                  "👖 PANTS",
                  "👟 SHOES",
                  "👗 DRESS"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-12-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "👕 T-SHIRT",
                  "👖 PANTS",
                  "👟 SHOES",
                  "👗 DRESS"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s122",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-12-2",
                "title": "Look at your shoes! / Look at your shoes!",
                "description": "¡Muéstrame tus zapatos veloces!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgClothesWeather,
                "type": "game"
              },
                {
                    id: "c-be-3-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Weather: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌧️ + 🧥 + 🌳"],
                    options: ["I can spell my name.", "It is rainy and cold outside.", "The client is angry."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s123",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-12-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/KUSbazn3STo"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s124",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-12-3",
                "title": "Weather Wheel! 🎡 / Clima Ruleta! 🎡",
                "description": "¡Gira para ver cómo está el clima afuera!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "SUNNY ☀️",
                    "color": "#fcd34d"
                  },
                  {
                    "label": "RAINY 🌧️",
                    "color": "#60a5fa"
                  },
                  {
                    "label": "WINDY 🌬️",
                    "color": "#94a3b8"
                  },
                  {
                    "label": "SNOWY ⛄",
                    "color": "#ffffff"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s125",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-12-4a",
                "title": "Clothes Match! 👗 / Ropa Pareja! 👗",
                "description": "¡Busca la pareja para cada prenda!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "👕",
                    "right": "T-SHIRT"
                  },
                  {
                    "id": "2",
                    "left": "👖",
                    "right": "PANTS"
                  },
                  {
                    "id": "3",
                    "left": "👟",
                    "right": "SHOES"
                  },
                  {
                    "id": "4",
                    "left": "👗",
                    "right": "DRESS"
                  }
                ]
              },
              {
                "id": "kids-12-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "👕 ➡️ ???????",
                  "👖 ➡️ ?????",
                  "👟 ➡️ ?????",
                  "👗 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s126",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-12-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "SUNNY",
                  "emoji": "☀️",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s127",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-12-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Clothes & The Weather! 👕."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Weather Closet Monster Boss",
                                    bossTitle: "My Clothes & The Weather! 👕",
                                    bossAvatar: "🧥",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my clothes & the weather! 👕.",
                                      "Say one useful phrase for my clothes & the weather! 👕."
                                    ],
                                      use: [
                                      "Create one sentence about my clothes & the weather! 👕 using clothes.",
                                      "Ask a friend one question about my clothes & the weather! 👕."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my clothes & the weather! 👕.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my clothes & the weather! 👕."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s128",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-12-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgClothesWeather,
                "type": "speaking"
              },
              {
                "id": "kids-12-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/KUSbazn3STo",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-4",
        "title": "Class 4: Amazing Nature! 🌳 / Clase 4: Amazing Nature! 🌳",
        "description": "¡Vamos a explorar la naturaleza y las cosas asombrosas del mundo!",
        "sections": [
          {
            "id": "s130",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-13-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-13-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Outside", color: "#EF4444", prompt: "What do you see outside?", es: "Que ves afuera?" }, { label: "Tree", color: "#F59E0B", prompt: "Do you like trees?", es: "Te gustan los arboles?" }, { label: "Bug", color: "#10B981", prompt: "What bug do you know?", es: "Que insecto conoces?" }, { label: "Sea", color: "#3B82F6", prompt: "What animal lives in the sea?", es: "Que animal vive en el mar?" }, { label: "Park", color: "#8B5CF6", prompt: "Do you go to parks?", es: "Vas a parques?" }, { label: "Color", color: "#EC4899", prompt: "What color is nature?", es: "De que color es la naturaleza?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s131",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-13-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🌳 TREE",
                  "☀️ SUN",
                  "🌸 FLOWER",
                  "⭐ STAR"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-13-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🌳 TREE",
                  "☀️ SUN",
                  "🌸 FLOWER",
                  "⭐ STAR"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-13-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🌳 TREE",
                  "☀️ SUN",
                  "🌸 FLOWER",
                  "⭐ STAR"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s132",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-13-2",
                "title": "Reach the sky! / Reach the sky!",
                "description": "¡Estírate y atrapa una estrella!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgNature,
                "type": "game"
              },
                {
                    id: "c-be-4-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Nature: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌳 + 🐛 + 🐠"],
                    options: ["I send emails at work.", "Nature has trees, bugs, and fish.", "My shoes are white."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s133",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-13-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/XC6wQQHo8uU"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s134",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-13-3",
                "title": "Forest Wheel! 🎡 / Forest Ruleta! 🎡",
                "description": "¡Gira la ruleta divertida de la naturaleza!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "TREE 🌳",
                    "color": "#16a34a"
                  },
                  {
                    "label": "SUN ☀️",
                    "color": "#facc15"
                  },
                  {
                    "label": "FLOWER 🌸",
                    "color": "#ec4899"
                  },
                  {
                    "label": "STAR ⭐",
                    "color": "#fef08a"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s135",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-13-4a",
                "title": "Nature Match! 🧩 / Nature Pareja! 🧩",
                "description": "¡Une lo que ves en el bosque con su nombre!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🌳",
                    "right": "TREE"
                  },
                  {
                    "id": "2",
                    "left": "☀️",
                    "right": "SUN"
                  },
                  {
                    "id": "3",
                    "left": "🌸",
                    "right": "FLOWER"
                  },
                  {
                    "id": "4",
                    "left": "⭐",
                    "right": "STAR"
                  }
                ]
              },
              {
                "id": "kids-13-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🌳 ➡️ ????",
                  "☀️ ➡️ ???",
                  "🌸 ➡️ ??????",
                  "⭐ ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s136",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-13-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "TREE",
                  "emoji": "🌳",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s137",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-13-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Amazing Nature! 🌳."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Amazing Nature! 🌳",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to amazing nature! 🌳.",
                                      "Say one useful phrase for amazing nature! 🌳."
                                    ],
                                      use: [
                                      "Create one sentence about amazing nature! 🌳 using keywords.",
                                      "Ask a friend one question about amazing nature! 🌳."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about amazing nature! 🌳.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to amazing nature! 🌳."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s138",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-13-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-13-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/XC6wQQHo8uU",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-5",
        "title": "Class 5: Cool Bugs & Insects 🐛 / Clase 5: Cool Bugs & Insects 🐛",
        "description": "¡Sorpréndete con los insectos más geniales del jardín!",
        "sections": [
          {
            "id": "s140",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-14-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-14-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Outside", color: "#EF4444", prompt: "What do you see outside?", es: "Que ves afuera?" }, { label: "Tree", color: "#F59E0B", prompt: "Do you like trees?", es: "Te gustan los arboles?" }, { label: "Bug", color: "#10B981", prompt: "What bug do you know?", es: "Que insecto conoces?" }, { label: "Sea", color: "#3B82F6", prompt: "What animal lives in the sea?", es: "Que animal vive en el mar?" }, { label: "Park", color: "#8B5CF6", prompt: "Do you go to parks?", es: "Vas a parques?" }, { label: "Color", color: "#EC4899", prompt: "What color is nature?", es: "De que color es la naturaleza?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s141",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-14-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🐛 CATERPILLAR",
                  "🦋 BUTTERFLY",
                  "🐞 LADYBUG",
                  "🐝 BEE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-14-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🐛 CATERPILLAR",
                  "🦋 BUTTERFLY",
                  "🐞 LADYBUG",
                  "🐝 BEE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-14-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🐛 CATERPILLAR",
                  "🦋 BUTTERFLY",
                  "🐞 LADYBUG",
                  "🐝 BEE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s142",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-14-2",
                "title": "Fly like a Butterfly! 🦋 / Fly like a Butterfly! 🦋",
                "description": "¡Mueve los brazos como una mariposa!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFrog,
                "type": "game"
              },
                {
                    id: "c-be-5-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Nature: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌳 + 🐛 + 🐠"],
                    options: ["I send emails at work.", "Nature has trees, bugs, and fish.", "My shoes are white."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s143",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-14-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/tksBMUzZUAs"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s144",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-14-3",
                "title": "Bug Wheel! 🎡 / Bug Ruleta! 🎡",
                "description": "Gira y descubre qué insecto nos visita.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "BUTTERFLY 🦋",
                    "color": "#8b5cf6"
                  },
                  {
                    "label": "LADYBUG 🐞",
                    "color": "#ef4444"
                  },
                  {
                    "label": "BEE 🐝",
                    "color": "#facc15"
                  },
                  {
                    "label": "CATERPILLAR 🐛",
                    "color": "#22c55e"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s145",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-14-4a",
                "title": "Match the Bug! 🐝 / Pareja the Bug! 🐝",
                "description": "Une el insecto con su nombre.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🐛",
                    "right": "CATERPILLAR"
                  },
                  {
                    "id": "2",
                    "left": "🦋",
                    "right": "BUTTERFLY"
                  },
                  {
                    "id": "3",
                    "left": "🐞",
                    "right": "LADYBUG"
                  },
                  {
                    "id": "4",
                    "left": "🐝",
                    "right": "BEE"
                  }
                ]
              },
              {
                "id": "kids-14-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🐛 ➡️ ???????????",
                  "🦋 ➡️ ?????????",
                  "🐞 ➡️ ???????",
                  "🐝 ➡️ ???"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s146",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-14-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "BUTTERFLY",
                  "emoji": "🦋",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s147",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-14-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Cool Bugs & Insects 🐛."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Cool Bugs & Insects 🐛",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to cool bugs & insects 🐛.",
                                      "Say one useful phrase for cool bugs & insects 🐛."
                                    ],
                                      use: [
                                      "Create one sentence about cool bugs & insects 🐛 using keywords.",
                                      "Ask a friend one question about cool bugs & insects 🐛."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about cool bugs & insects 🐛.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to cool bugs & insects 🐛."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s148",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-14-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-14-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/tksBMUzZUAs",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-6",
        "title": "Class 6: Under the Sea! 🐠 / Clase 6: Under the Sea! 🐠",
        "description": "¡Sumerjámonos al fondo del océano!",
        "sections": [
          {
            "id": "s150",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-15-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgWhale,
                "type": "speaking"
              },
              {
                "id": "kids-15-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Outside", color: "#EF4444", prompt: "What do you see outside?", es: "Que ves afuera?" }, { label: "Tree", color: "#F59E0B", prompt: "Do you like trees?", es: "Te gustan los arboles?" }, { label: "Bug", color: "#10B981", prompt: "What bug do you know?", es: "Que insecto conoces?" }, { label: "Sea", color: "#3B82F6", prompt: "What animal lives in the sea?", es: "Que animal vive en el mar?" }, { label: "Park", color: "#8B5CF6", prompt: "Do you go to parks?", es: "Vas a parques?" }, { label: "Color", color: "#EC4899", prompt: "What color is nature?", es: "De que color es la naturaleza?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s151",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-15-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🐠 FISH",
                  "🐋 WHALE",
                  "🦀 CRAB",
                  "🐬 DOLPHIN"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgWhale,
                "type": "speaking"
              },
              {
                "id": "kids-15-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🐠 FISH",
                  "🐋 WHALE",
                  "🦀 CRAB",
                  "🐬 DOLPHIN"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-15-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🐠 FISH",
                  "🐋 WHALE",
                  "🦀 CRAB",
                  "🐬 DOLPHIN"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s152",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-15-2",
                "title": "Swim! 🏊‍♂️ / Swim! 🏊‍♂️",
                "description": "¡Nada como un delfín en tu asiento!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgWhale,
                "type": "game"
              },
                {
                    id: "c-be-6-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Nature: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌳 + 🐛 + 🐠"],
                    options: ["I send emails at work.", "Nature has trees, bugs, and fish.", "My shoes are white."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s153",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-15-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/XqZsoesa55w"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s154",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-15-3",
                "title": "Ocean Wheel! 🎡 / Ocean Ruleta! 🎡",
                "description": "Gira para ver a tu amigo del mar.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "FISH 🐠",
                    "color": "#f59e0b"
                  },
                  {
                    "label": "WHALE 🐋",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "CRAB 🦀",
                    "color": "#ef4444"
                  },
                  {
                    "label": "DOLPHIN 🐬",
                    "color": "#0ea5e9"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s155",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-15-4a",
                "title": "Sea Match! 🌊 / Sea Pareja! 🌊",
                "description": "Une los animales marinos.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🐠",
                    "right": "FISH"
                  },
                  {
                    "id": "2",
                    "left": "🐋",
                    "right": "WHALE"
                  },
                  {
                    "id": "3",
                    "left": "🦀",
                    "right": "CRAB"
                  },
                  {
                    "id": "4",
                    "left": "🐬",
                    "right": "DOLPHIN"
                  }
                ]
              },
              {
                "id": "kids-15-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🐠 ➡️ ????",
                  "🐋 ➡️ ?????",
                  "🦀 ➡️ ????",
                  "🐬 ➡️ ???????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s156",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-15-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "FISH",
                  "emoji": "🐠",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s157",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-15-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Under the Sea! 🐠."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Under the Sea! 🐠",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to under the sea! 🐠.",
                                      "Say one useful phrase for under the sea! 🐠."
                                    ],
                                      use: [
                                      "Create one sentence about under the sea! 🐠 using keywords.",
                                      "Ask a friend one question about under the sea! 🐠."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about under the sea! 🐠.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to under the sea! 🐠."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s158",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-15-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgWhale,
                "type": "speaking"
              },
              {
                "id": "kids-15-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/XqZsoesa55w",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-7",
        "title": "Class 7: Action Heroes! 🦸‍♂️ / Clase 7: Action Heroes! 🦸‍♂️",
        "description": "¡Vamos a aprender verbos como superhéroes!",
        "sections": [
          {
            "id": "s160",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-16-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-16-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Body", color: "#EF4444", prompt: "What body part do you use a lot?", es: "Que parte del cuerpo usas mucho?" }, { label: "Action", color: "#F59E0B", prompt: "What action can you do now?", es: "Que accion puedes hacer ahora?" }, { label: "Jump", color: "#10B981", prompt: "Can you jump high?", es: "Puedes saltar alto?" }, { label: "Sport", color: "#3B82F6", prompt: "What sport uses your legs?", es: "Que deporte usa tus piernas?" }, { label: "Hands", color: "#8B5CF6", prompt: "What can you do with your hands?", es: "Que puedes hacer con tus manos?" }, { label: "Move", color: "#EC4899", prompt: "Do you prefer running or walking?", es: "Prefieres correr o caminar?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s161",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-16-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🦸‍♂️ FLY",
                  "🧗‍♂️ CLIMB",
                  "🏊‍♂️ SWIM",
                  "🏃 RUN"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-16-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🦸‍♂️ FLY",
                  "🧗‍♂️ CLIMB",
                  "🏊‍♂️ SWIM",
                  "🏃 RUN"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-16-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🦸‍♂️ FLY",
                  "🧗‍♂️ CLIMB",
                  "🏊‍♂️ SWIM",
                  "🏃 RUN"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s162",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-16-2",
                "title": "Be a Hero! ✨ / Be a Hero! ✨",
                "description": "¡Haz tu pose de superhéroe!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              },
                {
                    id: "c-be-7-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Body and actions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏃 + 🦘 + 👍"],
                    options: ["My birthday is today.", "I can run and jump.", "The office is open."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s163",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-16-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/hzo9me2fdzg"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s164",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-16-3",
                "title": "Power Wheel! 🎡 / Power Ruleta! 🎡",
                "description": "Descubre tu próximo súper poder.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "FLY",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "CLIMB",
                    "color": "#22c55e"
                  },
                  {
                    "label": "SWIM",
                    "color": "#0ea5e9"
                  },
                  {
                    "label": "RUN",
                    "color": "#f59e0b"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s165",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-16-4a",
                "title": "Action Match! ⚡ / Acciones Pareja! ⚡",
                "description": "Une el súper poder.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🦸‍♂️",
                    "right": "FLY"
                  },
                  {
                    "id": "2",
                    "left": "🧗‍♂️",
                    "right": "CLIMB"
                  },
                  {
                    "id": "3",
                    "left": "🏊‍♂️",
                    "right": "SWIM"
                  },
                  {
                    "id": "4",
                    "left": "🏃",
                    "right": "RUN"
                  }
                ]
              },
              {
                "id": "kids-16-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🦸‍♂️ ➡️ ???",
                  "🧗‍♂️ ➡️ ?????",
                  "🏊‍♂️ ➡️ ????",
                  "🏃 ➡️ ???"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s166",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-16-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "FLY",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s167",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-16-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Action Heroes! 🦸‍♂️."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Action Heroes! 🦸‍♂️",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to action heroes! 🦸‍♂️.",
                                      "Say one useful phrase for action heroes! 🦸‍♂️."
                                    ],
                                      use: [
                                      "Create one sentence about action heroes! 🦸‍♂️ using keywords.",
                                      "Ask a friend one question about action heroes! 🦸‍♂️."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about action heroes! 🦸‍♂️.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to action heroes! 🦸‍♂️."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s168",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-16-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-16-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/hzo9me2fdzg",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-be-8",
        "title": "Class 8: Numbers 11-20! 🔢 / Clase 8: Numbers 11-20! 🔢",
        "description": "¡Ahora contaremos más alto que nunca!",
        "sections": [
          {
            "id": "s170",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-17-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-17-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Lucky", color: "#EF4444", prompt: "What is your lucky number?", es: "Cual es tu numero de suerte?" }, { label: "Age", color: "#F59E0B", prompt: "How old is someone in your family?", es: "Que edad tiene alguien de tu familia?" }, { label: "Time", color: "#10B981", prompt: "What time do you wake up?", es: "A que hora despiertas?" }, { label: "Phone", color: "#3B82F6", prompt: "What numbers are easy for you?", es: "Que numeros son faciles para ti?" }, { label: "Count", color: "#8B5CF6", prompt: "How many people are in class?", es: "Cuantas personas hay en clase?" }, { label: "Price", color: "#EC4899", prompt: "What price feels expensive?", es: "Que precio parece caro?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s171",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-17-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "1️⃣1️⃣ ELEVEN",
                  "1️⃣2️⃣ TWELVE",
                  "1️⃣5️⃣ FIFTEEN",
                  "2️⃣0️⃣ TWENTY"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-17-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "1️⃣1️⃣ ELEVEN",
                  "1️⃣2️⃣ TWELVE",
                  "1️⃣5️⃣ FIFTEEN",
                  "2️⃣0️⃣ TWENTY"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-17-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "1️⃣1️⃣ ELEVEN",
                  "1️⃣2️⃣ TWELVE",
                  "1️⃣5️⃣ FIFTEEN",
                  "2️⃣0️⃣ TWENTY"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s172",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-17-2",
                "title": "Count together! 🗣️ / Count together! 🗣️",
                "description": "¡Cuenta muy alto del 1 al 20!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgColorfulNumbers,
                "type": "game"
              },
                {
                    id: "c-be-8-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Numbers, dates and time: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎂 + 📅 + 🕒"],
                    options: ["I like blue shoes.", "My birthday is at three.", "The dog is sleeping."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s173",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-17-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s174",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-17-3",
                "title": "Big Numbers Wheel! 🎡 / Big Números Ruleta! 🎡",
                "description": "¡A ver qué número grande cae!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "ELEVEN",
                    "color": "#ec4899"
                  },
                  {
                    "label": "TWELVE",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "FIFTEEN",
                    "color": "#f59e0b"
                  },
                  {
                    "label": "TWENTY",
                    "color": "#22c55e"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s175",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-17-4a",
                "title": "Math Match! ➕ / Math Pareja! ➕",
                "description": "Encuentra el número correcto.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "11",
                    "right": "ELEVEN"
                  },
                  {
                    "id": "2",
                    "left": "12",
                    "right": "TWELVE"
                  },
                  {
                    "id": "3",
                    "left": "15",
                    "right": "FIFTEEN"
                  },
                  {
                    "id": "4",
                    "left": "20",
                    "right": "TWENTY"
                  }
                ]
              },
              {
                "id": "kids-17-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "11 ➡️ ??????",
                  "12 ➡️ ??????",
                  "15 ➡️ ???????",
                  "20 ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s176",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-17-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "ELEVEN",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s177",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-17-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Numbers 11-20! 🔢."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Time Monster Boss",
                                    bossTitle: "Numbers 11-20! 🔢",
                                    bossAvatar: "⏰",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to numbers 11-20! 🔢.",
                                      "Say one useful phrase for numbers 11-20! 🔢."
                                    ],
                                      use: [
                                      "Create one sentence about numbers 11-20! 🔢 using numbers.",
                                      "Ask a friend one question about numbers 11-20! 🔢."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about numbers 11-20! 🔢.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to numbers 11-20! 🔢."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s178",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-17-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-17-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/D0Ajq682yrA",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      }
    ],
    virtualEvaluation: [
      {
        id: "basic-explorer-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Kids Basic 1?",
        options: [
          "I likes apples.",
          "I like apples.",
          "I apple like."
        ],
        correctAnswer: "I like apples.",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-explorer-virtual-02",
        type: "multiple-choice",
        question: "What does \"mother\" mean in Spanish?",
        options: [
          "antes",
          "mama",
          "nunca"
        ],
        correctAnswer: "mama",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-explorer-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to family, toys, pets, actions, food, and simple sentences.",
        options: [
          "I no understand yesterday.",
          "This is my dog.",
          "Beautiful quickly table."
        ],
        correctAnswer: "This is my dog.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-explorer-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "I like and this is",
          "Chemical formulas"
        ],
        correctAnswer: "I like and this is",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-explorer-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "The child likes pizza, has a dog, and can jump.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "The child likes pizza, has a dog, and can jump.",
        audioText: "This is my family. I like pizza, I have a dog, and I can jump.",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-explorer-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgKidsWakeup
      },
      {
        id: "basic-explorer-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "family, toys, pets, actions, food, and simple sentences",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "family, toys, pets, actions, food, and simple sentences",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-explorer-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-explorer-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-explorer-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "This is my family. I like pizza, I have a dog, and I can jump.",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-explorer-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "Pre-A1+ communication",
          "University literature only"
        ],
        correctAnswer: "Pre-A1+ communication",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-explorer-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgKidsWakeup
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Introduce your family with this is my..."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Talk about three foods you like and one food you do not like."
      },
      {
        topic: "VOCABULARY",
        question: "Show or describe your favorite toy."
      },
      {
        topic: "INTERACTION",
        question: "Say five actions you can do."
      },
      {
        topic: "FLUENCY",
        question: "Describe a pet or an animal with colors and size."
      }
    ]
  },
  {
    "id": "basic-adventurer",
    "title": "Level 2 - Basic 2 (Kids Aventurero) / Nivel 2 - Básico 2 (Niños Aventurero)",
    "duration": "2 meses",
    "objective": "Formar oraciones con animales, lugares y profesiones.",
    "mcfrEquivalent": "A1",
    "classes": [
      {
        "id": "c-ba-1",
        "title": "Class 1: Wild Animals Safari! 🦁 / Clase 1: Wild Animals Safari! 🦁",
        "description": "¡Vamos de safari para ver a los animales más grandes del mundo!",
        "sections": [
          {
            "id": "s200",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-20-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgWildAnimals,
                "type": "speaking"
              },
              {
                "id": "kids-20-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s201",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-20-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🦁 LION",
                  "🐘 ELEPHANT",
                  "🐒 MONKEY",
                  "🦒 GIRAFFE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgWildAnimals,
                "type": "speaking"
              },
              {
                "id": "kids-20-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🦁 LION",
                  "🐘 ELEPHANT",
                  "🐒 MONKEY",
                  "🦒 GIRAFFE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-20-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🦁 LION",
                  "🐘 ELEPHANT",
                  "🐒 MONKEY",
                  "🦒 GIRAFFE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s202",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-20-2",
                "title": "Roar! 🦁 / Roar! 🦁",
                "description": "¡Ruge tan fuerte como un león!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgWildAnimals,
                "type": "game"
              },
                {
                    id: "c-ba-1-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s203",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-20-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/wCfWmlnJl-A"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s204",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-20-3",
                "title": "Spin and Roar! 🎡 / Spin y Roar! 🎡",
                "description": "¡Gira la ruleta para ver qué animal debes imitar!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "LION 🦁",
                    "color": "#fcd34d"
                  },
                  {
                    "label": "ELEPHANT 🐘",
                    "color": "#9ca3af"
                  },
                  {
                    "label": "MONKEY 🐒",
                    "color": "#84cc16"
                  },
                  {
                    "label": "GIRAFFE 🦒",
                    "color": "#f59e0b"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s205",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-20-4a",
                "title": "Animal Match! 🧩 / Animales Pareja! 🧩",
                "description": "¡Une el animal salvaje con su foto!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🦁",
                    "right": "LION"
                  },
                  {
                    "id": "2",
                    "left": "🐘",
                    "right": "ELEPHANT"
                  },
                  {
                    "id": "3",
                    "left": "🐒",
                    "right": "MONKEY"
                  },
                  {
                    "id": "4",
                    "left": "🦒",
                    "right": "GIRAFFE"
                  }
                ]
              },
              {
                "id": "kids-20-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🦁 ➡️ ????",
                  "🐘 ➡️ ????????",
                  "🐒 ➡️ ??????",
                  "🦒 ➡️ ???????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s206",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-20-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "LION",
                  "emoji": "🦁",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s207",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-20-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Wild Animals Safari! 🦁."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Safari Monster Boss",
                                    bossTitle: "Wild Animals Safari! 🦁",
                                    bossAvatar: "🦁",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to wild animals safari! 🦁.",
                                      "Say one useful phrase for wild animals safari! 🦁."
                                    ],
                                      use: [
                                      "Create one sentence about wild animals safari! 🦁 using animal words.",
                                      "Ask a friend one question about wild animals safari! 🦁."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about wild animals safari! 🦁.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to wild animals safari! 🦁."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s208",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-20-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgWildAnimals,
                "type": "speaking"
              },
              {
                "id": "kids-20-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/wCfWmlnJl-A",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-2",
        "title": "Class 2: My Awesome House 🏠 / Clase 2: My Awesome House 🏠",
        "description": "¡Exploraremos las diferentes partes de nuestra casita!",
        "sections": [
          {
            "id": "s210",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-21-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHouseRooms,
                "type": "speaking"
              },
              {
                "id": "kids-21-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Bedroom", color: "#EF4444", prompt: "Do you have a bedroom?", es: "Tienes un cuarto?" }, { label: "Kitchen", color: "#F59E0B", prompt: "What is in the kitchen?", es: "Que hay en la cocina?" }, { label: "Bathroom", color: "#10B981", prompt: "Where is the bathroom?", es: "Donde esta el bano?" }, { label: "Living Room", color: "#3B82F6", prompt: "What do you do in the living room?", es: "Que haces en la sala?" }, { label: "Favorite", color: "#8B5CF6", prompt: "What is your favorite room?", es: "Cual es tu cuarto favorito?" }, { label: "Dream House", color: "#EC4899", prompt: "Is your dream house big or small?", es: "Tu casa sonada es grande o pequena?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s211",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-21-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🛏️ BEDROOM",
                  "🛁 BATHROOM",
                  "🍳 KITCHEN",
                  "📺 LIVING ROOM"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgHouseRooms,
                "type": "speaking"
              },
              {
                "id": "kids-21-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🛏️ BEDROOM",
                  "🛁 BATHROOM",
                  "🍳 KITCHEN",
                  "📺 LIVING ROOM"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-21-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🛏️ BEDROOM",
                  "🛁 BATHROOM",
                  "🍳 KITCHEN",
                  "📺 LIVING ROOM"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s212",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-21-2",
                "title": "Knock Knock! 🚪 / Knock Knock! 🚪",
                "description": "¡Toca la puerta imaginaria de tu casa!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHouseRooms,
                "type": "game"
              },
                {
                    id: "c-ba-2-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Rooms and places: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛏️ + 🪑 + 🏠"],
                    options: ["I can swim fast.", "There is a chair in my room.", "She likes pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s213",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-21-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/aOSJZbHoiY8"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s214",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-21-3",
                "title": "Where do you...? 🎡 / Where do you...? 🎡",
                "description": "Gira la ruleta y dime dónde haces esa acción.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "SLEEP 🛏️",
                    "color": "#a855f7"
                  },
                  {
                    "label": "COOK 🍳",
                    "color": "#ef4444"
                  },
                  {
                    "label": "WASH 🛁",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "WATCH TV 📺",
                    "color": "#f59e0b"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s215",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-21-4a",
                "title": "House Match! 🏠 / Casa Pareja! 🏠",
                "description": "¡Une cada cuarto de la casa!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🛏️",
                    "right": "BEDROOM"
                  },
                  {
                    "id": "2",
                    "left": "🛁",
                    "right": "BATHROOM"
                  },
                  {
                    "id": "3",
                    "left": "🍳",
                    "right": "KITCHEN"
                  },
                  {
                    "id": "4",
                    "left": "📺",
                    "right": "LIVING ROOM"
                  }
                ]
              },
              {
                "id": "kids-21-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🛏️ ➡️ ???????",
                  "🛁 ➡️ ????????",
                  "🍳 ➡️ ???????",
                  "📺 ➡️ ???????????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s216",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-21-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "SLEEP",
                  "emoji": "🛏️",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s217",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-21-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Awesome House 🏠."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Home Monster Boss",
                                    bossTitle: "My Awesome House 🏠",
                                    bossAvatar: "🏠",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my awesome house 🏠.",
                                      "Say one useful phrase for my awesome house 🏠."
                                    ],
                                      use: [
                                      "Create one sentence about my awesome house 🏠 using family words.",
                                      "Ask a friend one question about my awesome house 🏠."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my awesome house 🏠.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my awesome house 🏠."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s218",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-21-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHouseRooms,
                "type": "speaking"
              },
              {
                "id": "kids-21-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/aOSJZbHoiY8",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-3",
        "title": "Class 3: Zoom! Vehicles in Town 🚗 / Clase 3: Zoom! Vehicles in Town 🚗",
        "description": "¡Aprende cómo nos movemos por la ciudad increíble!",
        "sections": [
          {
            "id": "s220",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-22-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgVehiclesTown,
                "type": "speaking"
              },
              {
                "id": "kids-22-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Car", color: "#EF4444", prompt: "Do you like cars?", es: "Te gustan los carros?" }, { label: "Bus", color: "#F59E0B", prompt: "Do you go by bus?", es: "Vas en bus?" }, { label: "Train", color: "#10B981", prompt: "Have you seen a train?", es: "Has visto un tren?" }, { label: "Plane", color: "#3B82F6", prompt: "Do you want to fly by plane?", es: "Quieres volar en avion?" }, { label: "Town", color: "#8B5CF6", prompt: "What can you see in town?", es: "Que puedes ver en la ciudad?" }, { label: "Favorite", color: "#EC4899", prompt: "What vehicle is your favorite?", es: "Cual vehiculo es tu favorito?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s221",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-22-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🚗 CAR",
                  "🚌 BUS",
                  "🚂 TRAIN",
                  "✈️ PLANE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgVehiclesTown,
                "type": "speaking"
              },
              {
                "id": "kids-22-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🚗 CAR",
                  "🚌 BUS",
                  "🚂 TRAIN",
                  "✈️ PLANE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-22-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🚗 CAR",
                  "🚌 BUS",
                  "🚂 TRAIN",
                  "✈️ PLANE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s222",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-22-2",
                "title": "Vroom Vroom! 🚗 / Vroom Vroom! 🚗",
                "description": "¡Coge tu volante y maneja rápido!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgVehiclesTown,
                "type": "game"
              },
                {
                    id: "c-ba-3-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Rooms and places: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛏️ + 🪑 + 🏠"],
                    options: ["I can swim fast.", "There is a chair in my room.", "She likes pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s223",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-22-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/B1q21Lp8TDI"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s224",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-22-3",
                "title": "Vehicles Wheel! 🎡 / Vehicles Ruleta! 🎡",
                "description": "¡Gira para elegir cómo viajamos hoy!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "CAR 🚗",
                    "color": "#ef4444"
                  },
                  {
                    "label": "BUS 🚌",
                    "color": "#facc15"
                  },
                  {
                    "label": "TRAIN 🚂",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "PLANE ✈️",
                    "color": "#a855f7"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s225",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-22-4a",
                "title": "Vroom Match! 🧩 / Vroom Pareja! 🧩",
                "description": "¡Empareja los vehículos con su nombre!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🚗",
                    "right": "CAR"
                  },
                  {
                    "id": "2",
                    "left": "🚌",
                    "right": "BUS"
                  },
                  {
                    "id": "3",
                    "left": "🚂",
                    "right": "TRAIN"
                  },
                  {
                    "id": "4",
                    "left": "✈️",
                    "right": "PLANE"
                  }
                ]
              },
              {
                "id": "kids-22-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🚗 ➡️ ???",
                  "🚌 ➡️ ???",
                  "🚂 ➡️ ?????",
                  "✈️ ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s226",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-22-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "CAR",
                  "emoji": "🚗",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s227",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-22-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Zoom! Vehicles in Town 🚗."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Travel Monster Boss",
                                    bossTitle: "Zoom! Vehicles in Town 🚗",
                                    bossAvatar: "✈️",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to zoom! vehicles in town 🚗.",
                                      "Say one useful phrase for zoom! vehicles in town 🚗."
                                    ],
                                      use: [
                                      "Create one sentence about zoom! vehicles in town 🚗 using travel words.",
                                      "Ask a friend one question about zoom! vehicles in town 🚗."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about zoom! vehicles in town 🚗.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to zoom! vehicles in town 🚗."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s228",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-22-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgVehiclesTown,
                "type": "speaking"
              },
              {
                "id": "kids-22-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/biX7NNxw_w8",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-4",
        "title": "Class 4: When I Grow Up! 👩‍⚕️ / Clase 4: When I Grow Up! 👩‍⚕️",
        "description": "¡Vamos a soñar con lo que queremos ser de grandes!",
        "sections": [
          {
            "id": "s230",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-23-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgJobs,
                "type": "speaking"
              },
              {
                "id": "kids-23-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Toy", color: "#EF4444", prompt: "What toy do you like?", es: "Que juguete te gusta?" }, { label: "Play", color: "#F59E0B", prompt: "How do you play with it?", es: "Como juegas con eso?" }, { label: "Color", color: "#10B981", prompt: "What color is your favorite toy?", es: "De que color es tu juguete favorito?" }, { label: "Size", color: "#3B82F6", prompt: "Do you like big or small toys?", es: "Te gustan juguetes grandes o pequenos?" }, { label: "Fun", color: "#8B5CF6", prompt: "What toy is fun?", es: "Que juguete es divertido?" }, { label: "Share", color: "#EC4899", prompt: "Who do you play with?", es: "Con quien juegas?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s231",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-23-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "👩‍⚕️ DOCTOR",
                  "👩‍🏫 TEACHER",
                  "👨‍🍳 CHEF",
                  "👮‍♂️ POLICE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgJobs,
                "type": "speaking"
              },
              {
                "id": "kids-23-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "👩‍⚕️ DOCTOR",
                  "👩‍🏫 TEACHER",
                  "👨‍🍳 CHEF",
                  "👮‍♂️ POLICE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-23-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "👩‍⚕️ DOCTOR",
                  "👩‍🏫 TEACHER",
                  "👨‍🍳 CHEF",
                  "👮‍♂️ POLICE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s232",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-23-2",
                "title": "Chef Hat On! / Chef Hat On!",
                "description": "¡Ponte tu gorro de chef imaginario!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgJobs,
                "type": "game"
              },
                {
                    id: "c-ba-4-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Toys: decode the emoji story",
                    type: "emoji-game",
                    content: ["🧸 + 🎮 + ⭐"],
                    options: ["It is raining outside.", "My favorite toy is fun.", "She works in a bank."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s233",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-23-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/ckKQvlIT9L4"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s234",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-23-3",
                "title": "Job Wheel! 🎡 / Trabajos Ruleta! 🎡",
                "description": "¡Gira la ruleta y dime qué quieres ser en el futuro!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "DOCTOR 👩‍⚕️",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "TEACHER 👩‍🏫",
                    "color": "#f59e0b"
                  },
                  {
                    "label": "CHEF 👨‍🍳",
                    "color": "#ef4444"
                  },
                  {
                    "label": "POLICE 👮‍♂️",
                    "color": "#10b981"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s235",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-23-4a",
                "title": "Job Match! 🧩 / Trabajos Pareja! 🧩",
                "description": "¡Une el trabajo con su foto!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "👩‍⚕️",
                    "right": "DOCTOR"
                  },
                  {
                    "id": "2",
                    "left": "👩‍🏫",
                    "right": "TEACHER"
                  },
                  {
                    "id": "3",
                    "left": "👨‍🍳",
                    "right": "CHEF"
                  },
                  {
                    "id": "4",
                    "left": "👮‍♂️",
                    "right": "POLICE"
                  }
                ]
              },
              {
                "id": "kids-23-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "👩‍⚕️ ➡️ ??????",
                  "👩‍🏫 ➡️ ???????",
                  "👨‍🍳 ➡️ ????",
                  "👮‍♂️ ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s236",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-23-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "DOCTOR",
                  "emoji": "👩‍⚕️",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s237",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-23-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using When I Grow Up! 👩‍⚕️."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "When I Grow Up! 👩‍⚕️",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to when i grow up! 👩‍⚕️.",
                                      "Say one useful phrase for when i grow up! 👩‍⚕️."
                                    ],
                                      use: [
                                      "Create one sentence about when i grow up! 👩‍⚕️ using keywords.",
                                      "Ask a friend one question about when i grow up! 👩‍⚕️."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about when i grow up! 👩‍⚕️.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to when i grow up! 👩‍⚕️."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s238",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-23-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgJobs,
                "type": "speaking"
              },
              {
                "id": "kids-23-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/tVlcKp3bWH8",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-5",
        "title": "Class 5: Make some Music! 🎸 / Clase 5: Make some Music! 🎸",
        "description": "¡Toca todos los instrumentos en nuestra banda!",
        "sections": [
          {
            "id": "s240",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-24-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-24-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Music", color: "#EF4444", prompt: "Do you like music?", es: "Te gusta la musica?" }, { label: "Instrument", color: "#F59E0B", prompt: "What instrument sounds fun?", es: "Que instrumento suena divertido?" }, { label: "Dance", color: "#10B981", prompt: "Can you dance to a song?", es: "Puedes bailar una cancion?" }, { label: "Song", color: "#3B82F6", prompt: "What song do you like?", es: "Que cancion te gusta?" }, { label: "Sound", color: "#8B5CF6", prompt: "What sound can you make?", es: "Que sonido puedes hacer?" }, { label: "Clap", color: "#EC4899", prompt: "Can you clap a rhythm?", es: "Puedes aplaudir un ritmo?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s241",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-24-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🎸 GUITAR",
                  "🎹 PIANO",
                  "🥁 DRUM",
                  "🎻 VIOLIN"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-24-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🎸 GUITAR",
                  "🎹 PIANO",
                  "🥁 DRUM",
                  "🎻 VIOLIN"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-24-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🎸 GUITAR",
                  "🎹 PIANO",
                  "🥁 DRUM",
                  "🎻 VIOLIN"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s242",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-24-2",
                "title": "Rock out! 🤘 / Rock out! 🤘",
                "description": "¡Toca tu guitarra invisible!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHobbies,
                "type": "game"
              },
                {
                    id: "c-ba-5-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Music: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎵 + 🎸 + 🎤"],
                    options: ["Turn left at school.", "I like playing music.", "My birthday is in May."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s243",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-24-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/4nMcbJ8h_yA"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s244",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-24-3",
                "title": "Music Wheel! 🎡 / Music Ruleta! 🎡",
                "description": "Descubre qué instrumento tocarás hoy.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "GUITAR",
                    "color": "#ef4444"
                  },
                  {
                    "label": "PIANO",
                    "color": "#000000"
                  },
                  {
                    "label": "DRUM",
                    "color": "#facc15"
                  },
                  {
                    "label": "VIOLIN",
                    "color": "#d97706"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s245",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-24-4a",
                "title": "Instrument Match! 🎵 / Instrument Pareja! 🎵",
                "description": "Empareja el instrumento.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🎸",
                    "right": "GUITAR"
                  },
                  {
                    "id": "2",
                    "left": "🎹",
                    "right": "PIANO"
                  },
                  {
                    "id": "3",
                    "left": "🥁",
                    "right": "DRUM"
                  },
                  {
                    "id": "4",
                    "left": "🎻",
                    "right": "VIOLIN"
                  }
                ]
              },
              {
                "id": "kids-24-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🎸 ➡️ ??????",
                  "🎹 ➡️ ?????",
                  "🥁 ➡️ ????",
                  "🎻 ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s246",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-24-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "GUITAR",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s247",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-24-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Make some Music! 🎸."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Hobby Monster Boss",
                                    bossTitle: "Make some Music! 🎸",
                                    bossAvatar: "🎮",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to make some music! 🎸.",
                                      "Say one useful phrase for make some music! 🎸."
                                    ],
                                      use: [
                                      "Create one sentence about make some music! 🎸 using hobbies.",
                                      "Ask a friend one question about make some music! 🎸."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about make some music! 🎸.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to make some music! 🎸."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s248",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-24-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-24-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/N1o4oOXLOZc",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-6",
        "title": "Class 6: Days of the Week 📅 / Clase 6: Days of the Week 📅",
        "description": "¡Aprende los días para jugar de lunes a domingo!",
        "sections": [
          {
            "id": "s250",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-25-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-25-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Toy", color: "#EF4444", prompt: "What toy do you like?", es: "Que juguete te gusta?" }, { label: "Play", color: "#F59E0B", prompt: "How do you play with it?", es: "Como juegas con eso?" }, { label: "Color", color: "#10B981", prompt: "What color is your favorite toy?", es: "De que color es tu juguete favorito?" }, { label: "Size", color: "#3B82F6", prompt: "Do you like big or small toys?", es: "Te gustan juguetes grandes o pequenos?" }, { label: "Fun", color: "#8B5CF6", prompt: "What toy is fun?", es: "Que juguete es divertido?" }, { label: "Share", color: "#EC4899", prompt: "Who do you play with?", es: "Con quien juegas?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s251",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-25-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "📅 MONDAY",
                  "📅 TUESDAY",
                  "📅 FRIDAY",
                  "📅 SUNDAY"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-25-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "📅 MONDAY",
                  "📅 TUESDAY",
                  "📅 FRIDAY",
                  "📅 SUNDAY"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-25-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "📅 MONDAY",
                  "📅 TUESDAY",
                  "📅 FRIDAY",
                  "📅 SUNDAY"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s252",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-25-2",
                "title": "Hooray for Sunday! 🎉 / Hooray for Sunday! 🎉",
                "description": "¡Grita Hooray porque es fin de semana!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgDailyRoutine,
                "type": "game"
              },
                {
                    id: "c-ba-6-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Dates and birthdays: decode the emoji story",
                    type: "emoji-game",
                    content: ["📅 + 🎂 + ⭐"],
                    options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s253",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-25-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mXMofxtDPUQ"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s254",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-25-3",
                "title": "Days Wheel! 🎡 / Days Ruleta! 🎡",
                "description": "Gira para ver qué día es hoy.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "MONDAY",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "TUESDAY",
                    "color": "#8b5cf6"
                  },
                  {
                    "label": "FRIDAY",
                    "color": "#22c55e"
                  },
                  {
                    "label": "SUNDAY",
                    "color": "#ef4444"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s255",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-25-4a",
                "title": "Match the Day! 🧩 / Pareja the Day! 🧩",
                "description": "Une cada día (usa algunas abreviaturas).",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "MON",
                    "right": "MONDAY"
                  },
                  {
                    "id": "2",
                    "left": "TUE",
                    "right": "TUESDAY"
                  },
                  {
                    "id": "3",
                    "left": "FRI",
                    "right": "FRIDAY"
                  },
                  {
                    "id": "4",
                    "left": "SUN",
                    "right": "SUNDAY"
                  }
                ]
              },
              {
                "id": "kids-25-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "MON ➡️ ??????",
                  "TUE ➡️ ???????",
                  "FRI ➡️ ??????",
                  "SUN ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s256",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-25-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "MONDAY",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s257",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-25-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Days of the Week 📅."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Days of the Week 📅",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to days of the week 📅.",
                                      "Say one useful phrase for days of the week 📅."
                                    ],
                                      use: [
                                      "Create one sentence about days of the week 📅 using keywords.",
                                      "Ask a friend one question about days of the week 📅."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about days of the week 📅.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to days of the week 📅."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s258",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-25-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-25-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mXMofxtDPUQ",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-7",
        "title": "Class 7: Let's Go Shopping! 🛒 / Clase 7: Let's Go Shopping! 🛒",
        "description": "¡Acompáñanos al súpermercado a comprar!",
        "sections": [
          {
            "id": "s260",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-26-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-26-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Door", color: "#EF4444", prompt: "Where is the door?", es: "Donde esta la puerta?" }, { label: "Home", color: "#F59E0B", prompt: "What is near your home?", es: "Que hay cerca de tu casa?" }, { label: "Left", color: "#10B981", prompt: "What is on your left?", es: "Que hay a tu izquierda?" }, { label: "Right", color: "#3B82F6", prompt: "What is on your right?", es: "Que hay a tu derecha?" }, { label: "Travel", color: "#8B5CF6", prompt: "How do you move around town?", es: "Como te mueves por la ciudad?" }, { label: "Place", color: "#EC4899", prompt: "Where do people ask directions?", es: "Donde piden direcciones?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s261",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-26-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🛒 SUPERMARKET",
                  "🍎 APPLES",
                  "🥖 BREAD",
                  "🥛 MILK"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-26-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🛒 SUPERMARKET",
                  "🍎 APPLES",
                  "🥖 BREAD",
                  "🥛 MILK"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-26-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🛒 SUPERMARKET",
                  "🍎 APPLES",
                  "🥖 BREAD",
                  "🥛 MILK"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s262",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-26-2",
                "title": "Push the Cart! 🛒 / Push the Cart! 🛒",
                "description": "¡Finge que empujas el carrito de compras!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              },
                {
                    id: "c-ba-7-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Directions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🗺️ + ⬅️ + 🚌"],
                    options: ["I love my family.", "Turn left at the bus stop.", "She can sing well."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s263",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-26-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/L1m1eA7R9rI"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s264",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-26-3",
                "title": "Shopping Wheel! 🎡 / Compras Ruleta! 🎡",
                "description": "Veamos qué meteremos en el carrito.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "BREAD",
                    "color": "#d97706"
                  },
                  {
                    "label": "MILK",
                    "color": "#ffffff"
                  },
                  {
                    "label": "APPLES",
                    "color": "#ef4444"
                  },
                  {
                    "label": "EGGS",
                    "color": "#facc15"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s265",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-26-4a",
                "title": "Cart Match! 🛒 / Cart Pareja! 🛒",
                "description": "Une los productos que compramos.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🍎",
                    "right": "APPLES"
                  },
                  {
                    "id": "2",
                    "left": "🥖",
                    "right": "BREAD"
                  },
                  {
                    "id": "3",
                    "left": "🥛",
                    "right": "MILK"
                  },
                  {
                    "id": "4",
                    "left": "🛒",
                    "right": "SUPERMARKET"
                  }
                ]
              },
              {
                "id": "kids-26-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🍎 ➡️ ??????",
                  "🥖 ➡️ ?????",
                  "🥛 ➡️ ????",
                  "🛒 ➡️ ???????????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s266",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-26-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "BREAD",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s267",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-26-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Let's Go Shopping! 🛒."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Discount Monster Boss",
                                    bossTitle: "Let's Go Shopping! 🛒",
                                    bossAvatar: "🛒",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to let's go shopping! 🛒.",
                                      "Say one useful phrase for let's go shopping! 🛒."
                                    ],
                                      use: [
                                      "Create one sentence about let's go shopping! 🛒 using shopping phrases.",
                                      "Ask a friend one question about let's go shopping! 🛒."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about let's go shopping! 🛒.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to let's go shopping! 🛒."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s268",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-26-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-26-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/_uLesn8M1IM",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-ba-8",
        "title": "Class 8: Playground Fun! 🛝 / Clase 8: Playground Fun! 🛝",
        "description": "¡Vamos a divertirnos y jugar en el parque!",
        "sections": [
          {
            "id": "s270",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-27-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-27-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Toy", color: "#EF4444", prompt: "What toy do you like?", es: "Que juguete te gusta?" }, { label: "Play", color: "#F59E0B", prompt: "How do you play with it?", es: "Como juegas con eso?" }, { label: "Color", color: "#10B981", prompt: "What color is your favorite toy?", es: "De que color es tu juguete favorito?" }, { label: "Size", color: "#3B82F6", prompt: "Do you like big or small toys?", es: "Te gustan juguetes grandes o pequenos?" }, { label: "Fun", color: "#8B5CF6", prompt: "What toy is fun?", es: "Que juguete es divertido?" }, { label: "Share", color: "#EC4899", prompt: "Who do you play with?", es: "Con quien juegas?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s271",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-27-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🛝 SLIDE",
                  "🏃 SWING",
                  "⚽ BALL",
                  "🌳 PARK"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-27-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🛝 SLIDE",
                  "🏃 SWING",
                  "⚽ BALL",
                  "🌳 PARK"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-27-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🛝 SLIDE",
                  "🏃 SWING",
                  "⚽ BALL",
                  "🌳 PARK"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s272",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-27-2",
                "title": "Slide down! 🛝 / Slide down! 🛝",
                "description": "¡Haz como si te deslizaras por un tobogán!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              },
                {
                    id: "c-ba-8-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Toys: decode the emoji story",
                    type: "emoji-game",
                    content: ["🧸 + 🎮 + ⭐"],
                    options: ["It is raining outside.", "My favorite toy is fun.", "She works in a bank."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s273",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-27-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/l4WNrvVjiTw"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s274",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-27-3",
                "title": "Playground Wheel! 🎡 / Playground Ruleta! 🎡",
                "description": "Gira para ver a dónde vamos a jugar.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "SLIDE",
                    "color": "#ef4444"
                  },
                  {
                    "label": "SWING",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "BALL",
                    "color": "#22c55e"
                  },
                  {
                    "label": "PARK",
                    "color": "#10b981"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s275",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-27-4a",
                "title": "Play Match! 🧩 / Play Pareja! 🧩",
                "description": "Une los juegos del parque.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🛝",
                    "right": "SLIDE"
                  },
                  {
                    "id": "2",
                    "left": "🏃",
                    "right": "SWING"
                  },
                  {
                    "id": "3",
                    "left": "⚽",
                    "right": "BALL"
                  },
                  {
                    "id": "4",
                    "left": "🌳",
                    "right": "PARK"
                  }
                ]
              },
              {
                "id": "kids-27-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🛝 ➡️ ?????",
                  "🏃 ➡️ ?????",
                  "⚽ ➡️ ????",
                  "🌳 ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s276",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-27-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "SLIDE",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s277",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-27-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Playground Fun! 🛝."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Playground Fun! 🛝",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to playground fun! 🛝.",
                                      "Say one useful phrase for playground fun! 🛝."
                                    ],
                                      use: [
                                      "Create one sentence about playground fun! 🛝 using keywords.",
                                      "Ask a friend one question about playground fun! 🛝."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about playground fun! 🛝.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to playground fun! 🛝."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s278",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-27-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-27-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/l4WNrvVjiTw",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      }
    ],
    virtualEvaluation: [
      {
        id: "basic-adventurer-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Kids Basic 2?",
        options: [
          "Where the pencil is?",
          "Where is the pencil?",
          "Where are the pencil?"
        ],
        correctAnswer: "Where is the pencil?",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-adventurer-virtual-02",
        type: "multiple-choice",
        question: "What does \"sunny\" mean in Spanish?",
        options: [
          "antes",
          "soleado",
          "nunca"
        ],
        correctAnswer: "soleado",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-adventurer-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to house, clothes, weather, routines, town, and simple questions.",
        options: [
          "I no understand yesterday.",
          "I brush my teeth in the morning.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I brush my teeth in the morning.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-adventurer-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "where questions and routines",
          "Chemical formulas"
        ],
        correctAnswer: "where questions and routines",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-adventurer-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "It is sunny and Mia wears a blue jacket.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "It is sunny and Mia wears a blue jacket.",
        audioText: "It is sunny today. Mia puts on a blue jacket and walks to school.",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-adventurer-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgKidsWakeup
      },
      {
        id: "basic-adventurer-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "house, clothes, weather, routines, town, and simple questions",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "house, clothes, weather, routines, town, and simple questions",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-adventurer-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-adventurer-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-adventurer-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "It is sunny today. Mia puts on a blue jacket and walks to school.",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-adventurer-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A1- communication",
          "University literature only"
        ],
        correctAnswer: "A1- communication",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-adventurer-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgKidsWakeup
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Describe your bedroom using in, on, and under."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Talk about today?s weather and your clothes."
      },
      {
        topic: "VOCABULARY",
        question: "Tell your morning routine with four actions."
      },
      {
        topic: "INTERACTION",
        question: "Ask and answer where questions about objects."
      },
      {
        topic: "FLUENCY",
        question: "Describe places in your town or school."
      }
    ]
  },
  {
    "id": "basic-champion",
    "title": "Level 3 - Basic 3 (Kids Campeón) / Level 3 - Basic 3 (Kids Campeón)",
    "duration": "2 meses",
    "objective": "Oraciones largas, hobbies, rutinas y espacio exterior.",
    "mcfrEquivalent": "A1.2",
    "classes": [
      {
        "id": "c-bc-1",
        "title": "Class 1: My Daily Routine ⏰ / Clase 1: My Daily Routine ⏰",
        "description": "¡Vamos a ver qué hacemos desde que nos despertamos hasta dormir!",
        "sections": [
          {
            "id": "s300",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-30-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-30-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Morning", color: "#EF4444", prompt: "What do you do first in the morning?", es: "Que haces primero en la manana?" }, { label: "Daily", color: "#F59E0B", prompt: "What do you do every day?", es: "Que haces cada dia?" }, { label: "Wake up", color: "#10B981", prompt: "What time do you wake up?", es: "A que hora despiertas?" }, { label: "Often", color: "#3B82F6", prompt: "What do you do often?", es: "Que haces seguido?" }, { label: "Never", color: "#8B5CF6", prompt: "What do you never do?", es: "Que nunca haces?" }, { label: "Weekend", color: "#EC4899", prompt: "What is your weekend routine?", es: "Cual es tu rutina de fin de semana?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s301",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-30-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "☀️ WAKE UP",
                  "🥪 EAT",
                  "🎮 PLAY",
                  "🌙 SLEEP"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-30-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "☀️ WAKE UP",
                  "🥪 EAT",
                  "🎮 PLAY",
                  "🌙 SLEEP"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-30-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "☀️ WAKE UP",
                  "🥪 EAT",
                  "🎮 PLAY",
                  "🌙 SLEEP"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s302",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-30-2",
                "title": "Big Yawn! 🥱 / Big Yawn! 🥱",
                "description": "¡Bosteza y estírate muy largo!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgDailyRoutine,
                "type": "game"
              },
                {
                    id: "c-bc-1-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Daily routine: decode the emoji story",
                    type: "emoji-game",
                    content: ["☀️ + 🚿 + 🍳"],
                    options: ["I will travel next year.", "I wake up and have breakfast.", "The jacket is too small."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s303",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-30-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/eUXkj6j6Ezw"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s304",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-30-3",
                "title": "Time Wheel! 🎡 / Hora Ruleta! 🎡",
                "description": "¡Gira la ruleta y forma una oración!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "WAKE UP",
                    "color": "#facc15"
                  },
                  {
                    "label": "EAT",
                    "color": "#fb923c"
                  },
                  {
                    "label": "PLAY",
                    "color": "#34d399"
                  },
                  {
                    "label": "SLEEP",
                    "color": "#38bdf8"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s305",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-30-4a",
                "title": "Routine Match! 🧩 / Routine Pareja! 🧩",
                "description": "Une la acción con su momento del día.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "☀️",
                    "right": "WAKE UP"
                  },
                  {
                    "id": "2",
                    "left": "🥪",
                    "right": "EAT"
                  },
                  {
                    "id": "3",
                    "left": "🎮",
                    "right": "PLAY"
                  },
                  {
                    "id": "4",
                    "left": "🌙",
                    "right": "SLEEP"
                  }
                ]
              },
              {
                "id": "kids-30-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "☀️ ➡️ ???????",
                  "🥪 ➡️ ???",
                  "🎮 ➡️ ????",
                  "🌙 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s306",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-30-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "WAKE UP",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s307",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-30-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using My Daily Routine ⏰."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "My Daily Routine ⏰",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to my daily routine ⏰.",
                                      "Say one useful phrase for my daily routine ⏰."
                                    ],
                                      use: [
                                      "Create one sentence about my daily routine ⏰ using keywords.",
                                      "Ask a friend one question about my daily routine ⏰."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about my daily routine ⏰.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to my daily routine ⏰."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s308",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-30-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-30-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/eUXkj6j6Ezw",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-2",
        "title": "Class 2: Fun Hobbies & Sports! ⚽️ / Clase 2: Fun Hobbies & Sports! ⚽️",
        "description": "¡Vamos a hablar de lo que más nos gusta hacer!",
        "sections": [
          {
            "id": "s310",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-31-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-31-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Like", color: "#EF4444", prompt: "What activity do you like?", es: "Que actividad te gusta?" }, { label: "Love", color: "#F59E0B", prompt: "What do you love doing?", es: "Que amas hacer?" }, { label: "Dislike", color: "#10B981", prompt: "What food do you dislike?", es: "Que comida no te gusta?" }, { label: "Choice", color: "#3B82F6", prompt: "Do you prefer pizza or burgers?", es: "Prefieres pizza o hamburguesas?" }, { label: "Fun", color: "#8B5CF6", prompt: "What is fun for you?", es: "Que es divertido para ti?" }, { label: "Music", color: "#EC4899", prompt: "What music do you like?", es: "Que musica te gusta?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s311",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-31-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "⚽ SOCCER",
                  "🎨 PAINT",
                  "🚲 BIKE",
                  "🎮 VIDEO GAMES"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-31-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "⚽ SOCCER",
                  "🎨 PAINT",
                  "🚲 BIKE",
                  "🎮 VIDEO GAMES"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-31-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "⚽ SOCCER",
                  "🎨 PAINT",
                  "🚲 BIKE",
                  "🎮 VIDEO GAMES"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s312",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-31-2",
                "title": "Kick! ⚽ / Kick! ⚽",
                "description": "¡Patea el balón súper fuerte imaginariamente!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHobbies,
                "type": "game"
              },
                {
                    id: "c-bc-2-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Likes and hobbies: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎵 + 🎮 + ❤️"],
                    options: ["Where is the station?", "I like music and video games.", "I have to clean my room."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s313",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-31-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/N1o4oOXLOZc"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s314",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-31-3",
                "title": "Hobby Wheel! 🎡 / Hobby Ruleta! 🎡",
                "description": "¡Gira la ruleta y haz la mímica!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "SOCCER ⚽",
                    "color": "#22c55e"
                  },
                  {
                    "label": "PAINT 🎨",
                    "color": "#f59e0b"
                  },
                  {
                    "label": "BIKE 🚲",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "VIDEO GAMES 🎮",
                    "color": "#a855f7"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s315",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-31-4a",
                "title": "I Like to... 🧩 / I Like to... 🧩",
                "description": "¡Empareja tu pasatiempo favorito!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "⚽",
                    "right": "SOCCER"
                  },
                  {
                    "id": "2",
                    "left": "🎨",
                    "right": "PAINT"
                  },
                  {
                    "id": "3",
                    "left": "🚲",
                    "right": "BIKE"
                  },
                  {
                    "id": "4",
                    "left": "🎮",
                    "right": "VIDEO GAMES"
                  }
                ]
              },
              {
                "id": "kids-31-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "⚽ ➡️ ??????",
                  "🎨 ➡️ ?????",
                  "🚲 ➡️ ????",
                  "🎮 ➡️ ???????????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s316",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-31-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "SOCCER",
                  "emoji": "⚽",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s317",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-31-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Fun Hobbies & Sports! ⚽️."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Hobby Monster Boss",
                                    bossTitle: "Fun Hobbies & Sports! ⚽️",
                                    bossAvatar: "🎮",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to fun hobbies & sports! ⚽️.",
                                      "Say one useful phrase for fun hobbies & sports! ⚽️."
                                    ],
                                      use: [
                                      "Create one sentence about fun hobbies & sports! ⚽️ using hobbies.",
                                      "Ask a friend one question about fun hobbies & sports! ⚽️."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about fun hobbies & sports! ⚽️.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to fun hobbies & sports! ⚽️."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s318",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-31-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-31-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/N1o4oOXLOZc",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-3",
        "title": "Class 3: Happy Holidays! 🎄 / Clase 3: Happy Holidays! 🎄",
        "description": "¡Aprenderemos cómo celebramos los días felices!",
        "sections": [
          {
            "id": "s320",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-32-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHolidays,
                "type": "speaking"
              },
              {
                "id": "kids-32-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s321",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-32-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🎄 CHRISTMAS",
                  "🎃 HALLOWEEN",
                  "🎂 BIRTHDAY",
                  "🏖️ SUMMER"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgHolidays,
                "type": "speaking"
              },
              {
                "id": "kids-32-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🎄 CHRISTMAS",
                  "🎃 HALLOWEEN",
                  "🎂 BIRTHDAY",
                  "🏖️ SUMMER"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-32-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🎄 CHRISTMAS",
                  "🎃 HALLOWEEN",
                  "🎂 BIRTHDAY",
                  "🏖️ SUMMER"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s322",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-32-2",
                "title": "Blow Candles! 🎂 / Blow Candles! 🎂",
                "description": "¡Sopla las velitas de tu pastel!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHolidays,
                "type": "game"
              },
                {
                    id: "c-bc-3-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s323",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-32-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mGAYzlqj-aE"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s324",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-32-3",
                "title": "Party Wheel! 🎡 / Party Ruleta! 🎡",
                "description": "¡Gira la ruleta y dime qué comes en esta fiesta!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "CHRISTMAS 🎄",
                    "color": "#dc2626"
                  },
                  {
                    "label": "HALLOWEEN 🎃",
                    "color": "#ea580c"
                  },
                  {
                    "label": "BIRTHDAY 🎂",
                    "color": "#ec4899"
                  },
                  {
                    "label": "SUMMER 🏖️",
                    "color": "#0ea5e9"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s325",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-32-4a",
                "title": "Holiday Match! 🧩 / Holiday Pareja! 🧩",
                "description": "Une la festividad con lo que la representa.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🎄",
                    "right": "CHRISTMAS"
                  },
                  {
                    "id": "2",
                    "left": "🎃",
                    "right": "HALLOWEEN"
                  },
                  {
                    "id": "3",
                    "left": "🎂",
                    "right": "BIRTHDAY"
                  },
                  {
                    "id": "4",
                    "left": "🏖️",
                    "right": "SUMMER"
                  }
                ]
              },
              {
                "id": "kids-32-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🎄 ➡️ ?????????",
                  "🎃 ➡️ ?????????",
                  "🎂 ➡️ ????????",
                  "🏖️ ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s326",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-32-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "CHRISTMAS",
                  "emoji": "🎄",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s327",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-32-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Happy Holidays! 🎄."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Gadget Monster Boss",
                                    bossTitle: "Happy Holidays! 🎄",
                                    bossAvatar: "📱",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to happy holidays! 🎄.",
                                      "Say one useful phrase for happy holidays! 🎄."
                                    ],
                                      use: [
                                      "Create one sentence about happy holidays! 🎄 using technology words.",
                                      "Ask a friend one question about happy holidays! 🎄."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about happy holidays! 🎄.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to happy holidays! 🎄."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s328",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-32-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHolidays,
                "type": "speaking"
              },
              {
                "id": "kids-32-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/mGAYzlqj-aE",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-4",
        "title": "Class 4: Outer Space Adventure! 🚀 / Clase 4: Outer Space Adventure! 🚀",
        "description": "¡Viaja con nosotros hasta las estrellas y la luna!",
        "sections": [
          {
            "id": "s330",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-33-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-33-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Space", color: "#EF4444", prompt: "Do you like space?", es: "Te gusta el espacio?" }, { label: "Planet", color: "#F59E0B", prompt: "What planet do you know?", es: "Que planeta conoces?" }, { label: "Rocket", color: "#10B981", prompt: "Where does a rocket go?", es: "A donde va un cohete?" }, { label: "Moon", color: "#3B82F6", prompt: "Do you prefer the sun or moon?", es: "Prefieres sol o luna?" }, { label: "Alien", color: "#8B5CF6", prompt: "What would you say to an alien?", es: "Que le dirias a un alien?" }, { label: "Star", color: "#EC4899", prompt: "How many stars can you imagine?", es: "Cuantas estrellas imaginas?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s331",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-33-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🚀 ROCKET",
                  "👨‍🚀 ASTRONAUT",
                  "🌙 MOON",
                  "🪐 PLANET"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-33-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🚀 ROCKET",
                  "👨‍🚀 ASTRONAUT",
                  "🌙 MOON",
                  "🪐 PLANET"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-33-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🚀 ROCKET",
                  "👨‍🚀 ASTRONAUT",
                  "🌙 MOON",
                  "🪐 PLANET"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s332",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-33-2",
                "title": "Blast Off! 🚀 / Blast Off! 🚀",
                "description": "¡Cuenta 5, 4, 3, 2, 1, Despegue!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSpace,
                "type": "game"
              },
                {
                    id: "c-bc-4-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Space: decode the emoji story",
                    type: "emoji-game",
                    content: ["🚀 + 🪐 + 👽"],
                    options: ["I drink juice every day.", "A rocket goes to space.", "She is wearing boots."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s333",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-33-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/e8YzKyot4Pc"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s334",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-33-3",
                "title": "Orbit Wheel! 🎡 / Orbit Ruleta! 🎡",
                "description": "¡Gira la ruleta divertida a ver dónde aterrizas!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "ROCKET 🚀",
                    "color": "#facc15"
                  },
                  {
                    "label": "ASTRONAUT 👨‍🚀",
                    "color": "#06b6d4"
                  },
                  {
                    "label": "MOON 🌙",
                    "color": "#94a3b8"
                  },
                  {
                    "label": "PLANET 🪐",
                    "color": "#c084fc"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s335",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-33-4a",
                "title": "Space Match! 🧩 / Space Pareja! 🧩",
                "description": "¡Une el dibujo del espacio con su nombre!",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🚀",
                    "right": "ROCKET"
                  },
                  {
                    "id": "2",
                    "left": "👨‍🚀",
                    "right": "ASTRONAUT"
                  },
                  {
                    "id": "3",
                    "left": "🌙",
                    "right": "MOON"
                  },
                  {
                    "id": "4",
                    "left": "🪐",
                    "right": "PLANET"
                  }
                ]
              },
              {
                "id": "kids-33-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🚀 ➡️ ??????",
                  "👨‍🚀 ➡️ ?????????",
                  "🌙 ➡️ ????",
                  "🪐 ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s336",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-33-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "ROCKET",
                  "emoji": "🚀",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s337",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-33-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Outer Space Adventure! 🚀."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Outer Space Adventure! 🚀",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to outer space adventure! 🚀.",
                                      "Say one useful phrase for outer space adventure! 🚀."
                                    ],
                                      use: [
                                      "Create one sentence about outer space adventure! 🚀 using keywords.",
                                      "Ask a friend one question about outer space adventure! 🚀."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about outer space adventure! 🚀.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to outer space adventure! 🚀."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s338",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-33-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-33-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/e8YzKyot4Pc",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-5",
        "title": "Class 5: Awesome Fairy Tales! 🧚 / Clase 5: Awesome Fairy Tales! 🧚",
        "description": "¡Conoce caballeros, dragones y princesas en inglés!",
        "sections": [
          {
            "id": "s340",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-34-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMonster,
                "type": "speaking"
              },
              {
                "id": "kids-34-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Story", color: "#EF4444", prompt: "What story do you like?", es: "Que historia te gusta?" }, { label: "Hero", color: "#F59E0B", prompt: "Who is the hero?", es: "Quien es el heroe?" }, { label: "Magic", color: "#10B981", prompt: "What magic object appears?", es: "Que objeto magico aparece?" }, { label: "Place", color: "#3B82F6", prompt: "Where does the story happen?", es: "Donde pasa la historia?" }, { label: "Problem", color: "#8B5CF6", prompt: "What is the problem?", es: "Cual es el problema?" }, { label: "End", color: "#EC4899", prompt: "How does it end?", es: "Como termina?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s341",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-34-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🧚 FAIRY",
                  "🐉 DRAGON",
                  "🏰 CASTLE",
                  "👑 KING"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgMonster,
                "type": "speaking"
              },
              {
                "id": "kids-34-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🧚 FAIRY",
                  "🐉 DRAGON",
                  "🏰 CASTLE",
                  "👑 KING"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-34-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🧚 FAIRY",
                  "🐉 DRAGON",
                  "🏰 CASTLE",
                  "👑 KING"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s342",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-34-2",
                "title": "Dragon Breath! 🐉 / Dragon Breath! 🐉",
                "description": "¡Respira fuego como un dragón gigante!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMonster,
                "type": "game"
              },
                {
                    id: "c-bc-5-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Stories: decode the emoji story",
                    type: "emoji-game",
                    content: ["📖 + 🪄 + ⭐"],
                    options: ["The bus is next to school.", "This is a magic story.", "I can swim fast."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s343",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-34-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/YoQyyB5xvLk"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s344",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-34-3",
                "title": "Tales Wheel! 🎡 / Tales Ruleta! 🎡",
                "description": "Encuentra el personaje de tu cuento.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "FAIRY",
                    "color": "#f472b6"
                  },
                  {
                    "label": "DRAGON",
                    "color": "#22c55e"
                  },
                  {
                    "label": "CASTLE",
                    "color": "#94a3b8"
                  },
                  {
                    "label": "KING",
                    "color": "#facc15"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s345",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-34-4a",
                "title": "Tale Match! 🏰 / Tale Pareja! 🏰",
                "description": "Une a los personajes increíbles.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🧚",
                    "right": "FAIRY"
                  },
                  {
                    "id": "2",
                    "left": "🐉",
                    "right": "DRAGON"
                  },
                  {
                    "id": "3",
                    "left": "🏰",
                    "right": "CASTLE"
                  },
                  {
                    "id": "4",
                    "left": "👑",
                    "right": "KING"
                  }
                ]
              },
              {
                "id": "kids-34-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🧚 ➡️ ?????",
                  "🐉 ➡️ ??????",
                  "🏰 ➡️ ??????",
                  "👑 ➡️ ????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s346",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-34-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "FAIRY",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s347",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-34-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Awesome Fairy Tales! 🧚."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Awesome Fairy Tales! 🧚",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to awesome fairy tales! 🧚.",
                                      "Say one useful phrase for awesome fairy tales! 🧚."
                                    ],
                                      use: [
                                      "Create one sentence about awesome fairy tales! 🧚 using keywords.",
                                      "Ask a friend one question about awesome fairy tales! 🧚."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about awesome fairy tales! 🧚.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to awesome fairy tales! 🧚."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s348",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-34-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMonster,
                "type": "speaking"
              },
              {
                "id": "kids-34-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/YoQyyB5xvLk",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-6",
        "title": "Class 6: The 4 Seasons! ❄️ / Clase 6: The 4 Seasons! ❄️",
        "description": "¡Descubre la primavera, el verano, otoño y el invierno!",
        "sections": [
          {
            "id": "s350",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-35-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-35-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Weather", color: "#EF4444", prompt: "How is the weather today?", es: "Como esta el clima hoy?" }, { label: "Season", color: "#F59E0B", prompt: "What season do you like?", es: "Que estacion te gusta?" }, { label: "Clothes", color: "#10B981", prompt: "What do you wear on cold days?", es: "Que usas en dias frios?" }, { label: "Temperature", color: "#3B82F6", prompt: "Do you prefer hot or cold weather?", es: "Prefieres calor o frio?" }, { label: "Rain", color: "#8B5CF6", prompt: "Do you like rainy days?", es: "Te gustan los dias lluviosos?" }, { label: "Sun", color: "#EC4899", prompt: "What do you do on sunny days?", es: "Que haces en dias soleados?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s351",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-35-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🌺 SPRING",
                  "☀️ SUMMER",
                  "🍂 FALL",
                  "❄️ WINTER"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-35-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🌺 SPRING",
                  "☀️ SUMMER",
                  "🍂 FALL",
                  "❄️ WINTER"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-35-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🌺 SPRING",
                  "☀️ SUMMER",
                  "🍂 FALL",
                  "❄️ WINTER"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s352",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-35-2",
                "title": "Shiver in Winter! ❄️ / Shiver in Winter! ❄️",
                "description": "¡Finge que tienes mucho, mucho frío!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgNature,
                "type": "game"
              },
                {
                    id: "c-bc-6-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Weather: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌧️ + 🧥 + 🌳"],
                    options: ["I can spell my name.", "It is rainy and cold outside.", "The client is angry."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s353",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-35-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/8ZjpI6fgYSY"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s354",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-35-3",
                "title": "Season Wheel! 🎡 / Season Ruleta! 🎡",
                "description": "Gira para ver qué estación del año es.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "SPRING",
                    "color": "#ec4899"
                  },
                  {
                    "label": "SUMMER",
                    "color": "#facc15"
                  },
                  {
                    "label": "FALL",
                    "color": "#f97316"
                  },
                  {
                    "label": "WINTER",
                    "color": "#38bdf8"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s355",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-35-4a",
                "title": "Season Match! ❄️ / Season Pareja! ❄️",
                "description": "Encuentra la palabra de la estación.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🌺",
                    "right": "SPRING"
                  },
                  {
                    "id": "2",
                    "left": "☀️",
                    "right": "SUMMER"
                  },
                  {
                    "id": "3",
                    "left": "🍂",
                    "right": "FALL"
                  },
                  {
                    "id": "4",
                    "left": "❄️",
                    "right": "WINTER"
                  }
                ]
              },
              {
                "id": "kids-35-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🌺 ➡️ ??????",
                  "☀️ ➡️ ??????",
                  "🍂 ➡️ ????",
                  "❄️ ➡️ ??????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s356",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-35-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "SPRING",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s357",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-35-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using The 4 Seasons! ❄️."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "The 4 Seasons! ❄️",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to the 4 seasons! ❄️.",
                                      "Say one useful phrase for the 4 seasons! ❄️."
                                    ],
                                      use: [
                                      "Create one sentence about the 4 seasons! ❄️ using keywords.",
                                      "Ask a friend one question about the 4 seasons! ❄️."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about the 4 seasons! ❄️.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to the 4 seasons! ❄️."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s358",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-35-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-35-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/8ZjpI6fgYSY",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-7",
        "title": "Class 7: Be a Helper! 🤝 / Clase 7: Be a Helper! 🤝",
        "description": "¡Aprende cómo ayudar en casa y a tus amigos!",
        "sections": [
          {
            "id": "s360",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-36-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-36-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Help", color: "#EF4444", prompt: "How do you help at home?", es: "Como ayudas en casa?" }, { label: "Clean", color: "#F59E0B", prompt: "What do you clean?", es: "Que limpias?" }, { label: "Room", color: "#10B981", prompt: "Do you clean your room?", es: "Limpias tu cuarto?" }, { label: "Family", color: "#3B82F6", prompt: "Who helps at home?", es: "Quien ayuda en casa?" }, { label: "Easy", color: "#8B5CF6", prompt: "What chore is easy?", es: "Que tarea es facil?" }, { label: "Hard", color: "#EC4899", prompt: "What chore is hard?", es: "Que tarea es dificil?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s361",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-36-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🤝 HELP",
                  "🧹 CLEAN",
                  "🍽️ WASH",
                  "🧸 SHARE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-36-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🤝 HELP",
                  "🧹 CLEAN",
                  "🍽️ WASH",
                  "🧸 SHARE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-36-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🤝 HELP",
                  "🧹 CLEAN",
                  "🍽️ WASH",
                  "🧸 SHARE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s362",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-36-2",
                "title": "Share a Toy! 🧸 / Share a Toy! 🧸",
                "description": "¡Finge que le das tu juguete a un amigo!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              },
                {
                    id: "c-bc-7-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Helping at home: decode the emoji story",
                    type: "emoji-game",
                    content: ["🧹 + 🏠 + 👍"],
                    options: ["The moon is bright.", "I help clean the house.", "I like pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s363",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-36-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/p1WG8VdZuKo"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s364",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-36-3",
                "title": "Help Wheel! 🎡 / Help Ruleta! 🎡",
                "description": "Cae en una acción y mímala.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "HELP",
                    "color": "#3b82f6"
                  },
                  {
                    "label": "CLEAN",
                    "color": "#22c55e"
                  },
                  {
                    "label": "WASH",
                    "color": "#0ea5e9"
                  },
                  {
                    "label": "SHARE",
                    "color": "#f59e0b"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s365",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-36-4a",
                "title": "Helper Match! 🧩 / Helper Pareja! 🧩",
                "description": "Une cada buena acción.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🤝",
                    "right": "HELP"
                  },
                  {
                    "id": "2",
                    "left": "🧹",
                    "right": "CLEAN"
                  },
                  {
                    "id": "3",
                    "left": "🍽️",
                    "right": "WASH"
                  },
                  {
                    "id": "4",
                    "left": "🧸",
                    "right": "SHARE"
                  }
                ]
              },
              {
                "id": "kids-36-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🤝 ➡️ ????",
                  "🧹 ➡️ ?????",
                  "🍽️ ➡️ ????",
                  "🧸 ➡️ ?????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s366",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-36-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "HELP",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s367",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-36-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Be a Helper! 🤝."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Be a Helper! 🤝",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to be a helper! 🤝.",
                                      "Say one useful phrase for be a helper! 🤝."
                                    ],
                                      use: [
                                      "Create one sentence about be a helper! 🤝 using keywords.",
                                      "Ask a friend one question about be a helper! 🤝."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about be a helper! 🤝.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to be a helper! 🤝."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s368",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-36-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-36-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/p1WG8VdZuKo",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      },
      {
        "id": "c-bc-8",
        "title": "Class 8: Around the World! 🌍 / Clase 8: Around the World! 🌍",
        "description": "¡Viajaremos por todo el planeta a visitar nuevos países!",
        "sections": [
          {
            "id": "s370",
            "title": "1. Hello & Warm Up! 🌞 / 1. Hola y Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-37-0a",
                "title": "Hello my friend! 👋 / Hola my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-37-0b",
                "title": "Magic Warm-up Wheel / Ruleta Mágica de Calentamiento",
                "description": "Spin and answer one easy question.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Country", color: "#EF4444", prompt: "Where are you from?", es: "De donde eres?" }, { label: "City", color: "#F59E0B", prompt: "What city do you like?", es: "Que ciudad te gusta?" }, { label: "Travel", color: "#10B981", prompt: "What country would you visit?", es: "Que pais visitarias?" }, { label: "Language", color: "#3B82F6", prompt: "What language sounds interesting?", es: "Que idioma suena interesante?" }, { label: "Flag", color: "#8B5CF6", prompt: "What flag colors do you know?", es: "Que colores de bandera conoces?" }, { label: "People", color: "#EC4899", prompt: "Where would you like to meet people?", es: "Donde quisieras conocer gente?" }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s371",
            "title": "2. Let's Learn! 🌟 / 2. Vamos a Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-37-1a",
                "title": "Listen & Repeat! 🗣️ / Escuchar y Repetir! 🗣️",
                "description": "Vamos a aprender palabras geniales:",
                "content": [
                  "🌍 WORLD",
                  "🧭 COMPASS",
                  "🗺️ MAP",
                  "🧳 SUITCASE"
                ],
                "bgColor": "bg-gradient-to-br from-blue-400 to-indigo-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-37-1b",
                "title": "Say it Loud! 📣 / Say it Loud! 📣",
                "description": "¡Grita las palabras lo más fuerte que puedas!",
                "bgColor": "bg-gradient-to-br from-indigo-500 to-purple-600",
                "content": [
                  "🌍 WORLD",
                  "🧭 COMPASS",
                  "🗺️ MAP",
                  "🧳 SUITCASE"
                ],
                "type": "speaking"
              },
              {
                "id": "kids-37-1c",
                "title": "Say it Quiet... 🤫 / Dilo Bajito... 🤫",
                "description": "Ahora susurra las palabras como un ratoncito.",
                "bgColor": "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                "content": [
                  "🌍 WORLD",
                  "🧭 COMPASS",
                  "🗺️ MAP",
                  "🧳 SUITCASE"
                ],
                "type": "speaking"
              }
            ],
            "action": "¡Modula tu voz: primero grita, después susurra!"
          },
          {
            "id": "s372",
            "title": "3. Action Time! ⚡ / 3. Acciones Hora! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-37-2",
                "title": "Look far away! 🧭 / Look far away! 🧭",
                "description": "¡Pon tu mano en la frente como si miraras lejos!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSpace,
                "type": "game"
              },
                {
                    id: "c-bc-8-emoji-mission",
                    title: "Emoji Mission / Misión Emoji",
                    description: "Countries and travel: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌍 + 🚩 + ✈️"],
                    options: ["There is a pencil on the desk.", "I want to travel to another country.", "He is watching TV."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s373",
            "title": "4. Video Time! 🎥 / 4. Video Hora! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-37-vid",
                "title": "Let's Watch! 📺 / Vamos a Ver! 📺",
                "description": "¡Mira este divertido video y canta con nosotros!",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/biX7NNxw_w8"
              }
            ],
            "action": "¡Pon el video y anima al estudiante a cantar o bailar!"
          },
          {
            "id": "s374",
            "title": "5. Wheel of Fun! 🎡 / 5. Ruleta de Divertido! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-37-3",
                "title": "World Wheel! 🎡 / World Ruleta! 🎡",
                "description": "Gira para ver a dónde viajamos.",
                "bgColor": "bg-gradient-to-br from-pink-500 to-rose-500",
                "type": "spinning-wheel",
                "wheelItems": [
                  {
                    "label": "WORLD",
                    "color": "#22c55e"
                  },
                  {
                    "label": "COMPASS",
                    "color": "#ef4444"
                  },
                  {
                    "label": "MAP",
                    "color": "#facc15"
                  },
                  {
                    "label": "SUITCASE",
                    "color": "#8b5cf6"
                  }
                ]
              }
            ],
            "action": "Dile 'Spin the Wheel!' al niño y espera que repita."
          },
          {
            "id": "s375",
            "title": "6. Find the Match! 🧩 / 6. Find the Pareja! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-37-4a",
                "title": "Travel Match! 🌍 / Viajes Pareja! 🌍",
                "description": "Une los objetos para viajar.",
                "bgColor": "bg-gradient-to-br from-lime-400 to-green-500",
                "type": "matching-game",
                "matchingPairs": [
                  {
                    "id": "1",
                    "left": "🌍",
                    "right": "WORLD"
                  },
                  {
                    "id": "2",
                    "left": "🧭",
                    "right": "COMPASS"
                  },
                  {
                    "id": "3",
                    "left": "🗺️",
                    "right": "MAP"
                  },
                  {
                    "id": "4",
                    "left": "🧳",
                    "right": "SUITCASE"
                  }
                ]
              },
              {
                "id": "kids-37-4b",
                "title": "Super Memory! 🧠 / Super Memory! 🧠",
                "description": "¿Puedes recordar cómo se dicen estas palabras en inglés?",
                "bgColor": "bg-gradient-to-br from-amber-400 to-orange-500",
                "type": "speaking",
                "content": [
                  "🌍 ➡️ ?????",
                  "🧭 ➡️ ???????",
                  "🗺️ ➡️ ???",
                  "🧳 ➡️ ????????"
                ]
              }
            ],
            "action": "Celebra con aplausos cuando completen el juego."
          },
          {
            "id": "s376",
            "title": "7. Rompecabezas 🧩 / 7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-37-puzzle",
                "title": "Mystery Puzzle! 🧩 / Mystery Rompecabezas! 🧩",
                "description": "¡Dime un número para descubrir qué hay detrás!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-indigo-500",
                "type": "mystery-puzzle",
                "mysteryPuzzleData": {
                  "target": "WORLD",
                  "emoji": "⭐",
                  "panels": [
                    {
                      "id": 1,
                      "label": "1",
                      "color": "bg-red-500"
                    },
                    {
                      "id": 2,
                      "label": "2",
                      "color": "bg-blue-500"
                    },
                    {
                      "id": 3,
                      "label": "3",
                      "color": "bg-green-500"
                    },
                    {
                      "id": 4,
                      "label": "4",
                      "color": "bg-yellow-500"
                    }
                  ]
                }
              }
            ],
            "action": "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
          },
          {
            "id": "s377",
            "title": "8. Show & Tell! 🎨 / 8. Show y Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-37-5a",
                "title": "Show and Tell! 🎈 / Show y Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              },
                {
                                  id: "slide-boss-battle",
                                  title: "Speaking Boss Battle / Batalla Oral contra el Jefe",
                                  description: "Defeat the boss with today's English.",
                                  type: "speaking-boss-battle",
                                  content: ["Defeat the boss using Around the World! 🌍."],
                                  bgColor: "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-red-500",
                                  speakingBossBattle: {
                                    bossName: "The Super English Monster Boss",
                                    bossTitle: "Around the World! 🌍",
                                    bossAvatar: "⭐",
                                    timerSeconds: 30,
                                    rounds: {
                                      remember: [
                                      "Say three words connected to around the world! 🌍.",
                                      "Say one useful phrase for around the world! 🌍."
                                    ],
                                      use: [
                                      "Create one sentence about around the world! 🌍 using keywords.",
                                      "Ask a friend one question about around the world! 🌍."
                                    ],
                                      speak: [
                                      "Speak for 30 seconds about around the world! 🌍.",
                                      "Include one example, one opinion, and one class phrase."
                                    ],
                                      memoryBonus: [
                                      "Use one word or structure from a previous class.",
                                      "Connect it naturally to around the world! 🌍."
                                    ]
                                    }
                                  }
                                }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s378",
            "title": "9. Homework & Goodbye! 📝 / 9. Tarea y Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-37-5b",
                "title": "Great Job! 🏆 / Great Trabajos! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-37-hw",
                "title": "Video Homework ?? / Tarea en Video ??",
                "description": "Para la próxima clase, no olvides tu misión:",
                "bgColor": "bg-gradient-to-br from-violet-500 to-fuchsia-500",
                "type": "video",
                "videoUrl": "https://www.youtube.com/embed/biX7NNxw_w8",
                "content": [
                  "✅ Repasa las palabras que aprendimos hoy.",
                  "✅ Dibuja tu parte favorita de la clase.",
                  "✅ ¡Enséñale a tu familia lo que aprendiste!"
                ]
              }
            ],
            "action": "¡Despídete y recuérdales hacer su misión!"
          }
        ]
      }
    ],
    virtualEvaluation: [
      {
        id: "basic-champion-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Kids Basic 3?",
        options: [
          "I want be an astronaut.",
          "I want to be an astronaut.",
          "I wants to be astronaut."
        ],
        correctAnswer: "I want to be an astronaut.",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-champion-virtual-02",
        type: "multiple-choice",
        question: "What does \"because\" mean in Spanish?",
        options: [
          "antes",
          "porque",
          "nunca"
        ],
        correctAnswer: "porque",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-champion-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to hobbies, holidays, nature, jobs, space, and longer answers.",
        options: [
          "I no understand yesterday.",
          "My favorite hobby is drawing because it is fun.",
          "Beautiful quickly table."
        ],
        correctAnswer: "My favorite hobby is drawing because it is fun.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-champion-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "want to and because",
          "Chemical formulas"
        ],
        correctAnswer: "want to and because",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-champion-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Leo wants to be an astronaut because he likes space.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Leo wants to be an astronaut because he likes space.",
        audioText: "Leo loves science. He wants to be an astronaut because he likes space and stars.",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-champion-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgKidsWakeup
      },
      {
        id: "basic-champion-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "hobbies, holidays, nature, jobs, space, and longer answers",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "hobbies, holidays, nature, jobs, space, and longer answers",
        imageUrl: imgKidsAssessment
      },
      {
        id: "basic-champion-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgColorfulNumbers
      },
      {
        id: "basic-champion-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgCutePets
      },
      {
        id: "basic-champion-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Leo loves science. He wants to be an astronaut because he likes space and stars.",
        imageUrl: imgKidsAction
      },
      {
        id: "basic-champion-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A1 communication",
          "University literature only"
        ],
        correctAnswer: "A1 communication",
        imageUrl: imgCuteFamily
      },
      {
        id: "basic-champion-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgKidsWakeup
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Talk about your favorite hobby and explain why."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Describe a holiday or celebration you like."
      },
      {
        topic: "VOCABULARY",
        question: "Choose a job and say what that person does."
      },
      {
        topic: "INTERACTION",
        question: "Describe an animal or nature place with details."
      },
      {
        topic: "FLUENCY",
        question: "Give a short show-and-tell presentation using because."
      }
    ]
  }
];
