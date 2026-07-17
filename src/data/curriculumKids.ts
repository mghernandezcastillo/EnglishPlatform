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
    "title": "Level 0 - Basic Zero (Kids Explorer)",
    "duration": "2 meses",
    "objective": "Aprender lo más básico del inglés jugando y divirtiéndonos.",
    "mcfrEquivalent": "Pre-A1",
    "classes": [
      {
        "id": "c-bz-1",
        "title": "Clase 1: Hello & Amazing Colors! 🌈",
        "description": "¡Vamos a aprender a saludar como campeones!",
        "sections": [
          {
            "id": "s000",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-00-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-00-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s001",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-00-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-00-2",
                "title": "High Five! ✋",
                "description": "¡Choca esos cinco a la cámara!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHighFive,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s003",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-00-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-00-3",
                "title": "Fun Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-00-4a",
                "title": "Find the Color! 🎨",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-00-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-00-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s008",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-00-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-00-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 2: Numbers & Animal Friends! 🐶",
        "description": "¡Vamos a contar hasta 5 y conocer a nuestras mascotas!",
        "sections": [
          {
            "id": "s010",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-01-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-01-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s011",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-01-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-01-2",
                "title": "Show me 5! ✋",
                "description": "¡Muéstrame 5 deditos rápidos!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgColorfulNumbers,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s013",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-01-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-01-3",
                "title": "Super Number Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-01-4a",
                "title": "Match the Pet! 🐾",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-01-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-01-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s018",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-01-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-01-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 3: My Body & Fun Actions! 🏃",
        "description": "¡Vamos a movernos y aprender las partes de nuestro cuerpo!",
        "sections": [
          {
            "id": "s020",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-02-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMonsterBody,
                "type": "speaking"
              },
              {
                "id": "kids-02-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s021",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-02-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-02-2",
                "title": "Shake your body! 🕺",
                "description": "¡Sacúdete de pies a cabeza!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMonsterBody,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s023",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-02-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-02-3",
                "title": "Action Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-02-4a",
                "title": "Match the Body! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-02-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-02-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s028",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-02-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMonsterBody,
                "type": "speaking"
              },
              {
                "id": "kids-02-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 4: My Favorite Toys! 🪁",
        "description": "¡Vamos a jugar y descubrir nuestros juguetes favoritos!",
        "sections": [
          {
            "id": "s030",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-03-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgToysGames,
                "type": "speaking"
              },
              {
                "id": "kids-03-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s031",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-03-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-03-2",
                "title": "Hug a Toy! 🤗",
                "description": "¡Corre a abrazar tu juguete favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgToysGames,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s033",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-03-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-03-3",
                "title": "Spin a Toy! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-03-4a",
                "title": "Toy Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-03-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-03-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s038",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-03-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgToysGames,
                "type": "speaking"
              },
              {
                "id": "kids-03-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 5: Yummy Fruits! 🍓",
        "description": "¡Aprenderemos los nombres de las frutas más ricas!",
        "sections": [
          {
            "id": "s040",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-04-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-04-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s041",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-04-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-04-2",
                "title": "Eat a Fruit! 😋",
                "description": "¡Haz como que te comes tu fruta favorita!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s043",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-04-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-04-3",
                "title": "Fruit Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-04-4a",
                "title": "Match the Fruit! 🍎",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-04-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-04-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s048",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-04-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-04-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 6: Super Shapes! 🟢",
        "description": "¡Vamos a dibujar y aprender sobre las figuras geométricas!",
        "sections": [
          {
            "id": "s050",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-05-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSun,
                "type": "speaking"
              },
              {
                "id": "kids-05-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s051",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-05-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-05-2",
                "title": "Draw in the Air! ✍️",
                "description": "¡Dibuja un círculo grande en el aire!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSun,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s053",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-05-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-05-3",
                "title": "Spin the Shape! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-05-4a",
                "title": "Match the Shape! 🟢",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-05-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-05-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s058",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-05-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSun,
                "type": "speaking"
              },
              {
                "id": "kids-05-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 7: School Supplies! 🎒",
        "description": "¡Descubre qué hay en nuestra mochila increíble!",
        "sections": [
          {
            "id": "s060",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-06-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-06-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s061",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-06-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-06-2",
                "title": "Show your Pencil! ✏️",
                "description": "¡Enséñame tu lápiz o crayón favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMagicGreeting,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s063",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-06-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-06-3",
                "title": "School Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-06-4a",
                "title": "School Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-06-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-06-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s068",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-06-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMagicGreeting,
                "type": "speaking"
              },
              {
                "id": "kids-06-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 8: Farm Animals! 🐮",
        "description": "¡Visitaremos la granja y conoceremos a los animales!",
        "sections": [
          {
            "id": "s070",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-07-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-07-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s071",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-07-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-07-2",
                "title": "Moo & Oink! 🐷",
                "description": "¡Haz el sonido de tu animal de granja favorito!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFrog,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s073",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-07-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-07-3",
                "title": "Farm Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-07-4a",
                "title": "Match the Farm! 🚜",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-07-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-07-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s078",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-07-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-07-hw",
                "title": "Video Homework ??",
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
    "title": "Level 1 - Basic 1 (Kids Explorador)",
    "duration": "2 meses",
    "objective": "Ampliar vocabulario con familia, emociones, ropa y clima.",
    "mcfrEquivalent": "Pre-A1+",
    "classes": [
      {
        "id": "c-be-1",
        "title": "Clase 1: My Family & Feelings! 👨‍👩‍👧‍👦",
        "description": "¡Vamos a presentar a nuestra familia y hablar de cómo nos sentimos!",
        "sections": [
          {
            "id": "s100",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-10-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgCuteFamily,
                "type": "speaking"
              },
              {
                "id": "kids-10-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s101",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-10-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-10-2",
                "title": "Big Smile! 😁",
                "description": "¡Muéstrame tu sonrisa más feliz!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgCuteFamily,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s103",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-10-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-10-3",
                "title": "Feelings Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-10-4a",
                "title": "Family Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-10-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-10-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s108",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-10-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgCuteFamily,
                "type": "speaking"
              },
              {
                "id": "kids-10-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 2: Yummy Fast Food! 🍕",
        "description": "¡Vamos a aprender los nombres de nuestra comida favorita!",
        "sections": [
          {
            "id": "s110",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-11-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-11-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s111",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-11-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-11-2",
                "title": "Yummy! 😋",
                "description": "¡Frótate la pancita y di Mmmm!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s113",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-11-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-11-3",
                "title": "Food Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-11-4a",
                "title": "Food Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-11-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-11-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s118",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-11-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-11-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 3: My Clothes & The Weather! 👕",
        "description": "¡Aprenderemos la ropa y cómo vestirse según el clima!",
        "sections": [
          {
            "id": "s120",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-12-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgClothesWeather,
                "type": "speaking"
              },
              {
                "id": "kids-12-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s121",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-12-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-12-2",
                "title": "Look at your shoes!",
                "description": "¡Muéstrame tus zapatos veloces!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgClothesWeather,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s123",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-12-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-12-3",
                "title": "Weather Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-12-4a",
                "title": "Clothes Match! 👗",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-12-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-12-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s128",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-12-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgClothesWeather,
                "type": "speaking"
              },
              {
                "id": "kids-12-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 4: Amazing Nature! 🌳",
        "description": "¡Vamos a explorar la naturaleza y las cosas asombrosas del mundo!",
        "sections": [
          {
            "id": "s130",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-13-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-13-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s131",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-13-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-13-2",
                "title": "Reach the sky!",
                "description": "¡Estírate y atrapa una estrella!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgNature,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s133",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-13-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-13-3",
                "title": "Forest Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-13-4a",
                "title": "Nature Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-13-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-13-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s138",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-13-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-13-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 5: Cool Bugs & Insects 🐛",
        "description": "¡Sorpréndete con los insectos más geniales del jardín!",
        "sections": [
          {
            "id": "s140",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-14-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-14-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s141",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-14-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-14-2",
                "title": "Fly like a Butterfly! 🦋",
                "description": "¡Mueve los brazos como una mariposa!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFrog,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s143",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-14-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-14-3",
                "title": "Bug Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-14-4a",
                "title": "Match the Bug! 🐝",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-14-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-14-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s148",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-14-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFrog,
                "type": "speaking"
              },
              {
                "id": "kids-14-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 6: Under the Sea! 🐠",
        "description": "¡Sumerjámonos al fondo del océano!",
        "sections": [
          {
            "id": "s150",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-15-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgWhale,
                "type": "speaking"
              },
              {
                "id": "kids-15-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s151",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-15-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-15-2",
                "title": "Swim! 🏊‍♂️",
                "description": "¡Nada como un delfín en tu asiento!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgWhale,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s153",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-15-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-15-3",
                "title": "Ocean Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-15-4a",
                "title": "Sea Match! 🌊",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-15-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-15-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s158",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-15-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgWhale,
                "type": "speaking"
              },
              {
                "id": "kids-15-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 7: Action Heroes! 🦸‍♂️",
        "description": "¡Vamos a aprender verbos como superhéroes!",
        "sections": [
          {
            "id": "s160",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-16-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-16-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s161",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-16-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-16-2",
                "title": "Be a Hero! ✨",
                "description": "¡Haz tu pose de superhéroe!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s163",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-16-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-16-3",
                "title": "Power Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-16-4a",
                "title": "Action Match! ⚡",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-16-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-16-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s168",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-16-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-16-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 8: Numbers 11-20! 🔢",
        "description": "¡Ahora contaremos más alto que nunca!",
        "sections": [
          {
            "id": "s170",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-17-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-17-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s171",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-17-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-17-2",
                "title": "Count together! 🗣️",
                "description": "¡Cuenta muy alto del 1 al 20!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgColorfulNumbers,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s173",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-17-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-17-3",
                "title": "Big Numbers Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-17-4a",
                "title": "Math Match! ➕",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-17-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-17-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s178",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-17-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgColorfulNumbers,
                "type": "speaking"
              },
              {
                "id": "kids-17-hw",
                "title": "Video Homework ??",
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
    "title": "Level 2 - Basic 2 (Kids Aventurero)",
    "duration": "2 meses",
    "objective": "Formar oraciones con animales, lugares y profesiones.",
    "mcfrEquivalent": "A1",
    "classes": [
      {
        "id": "c-ba-1",
        "title": "Clase 1: Wild Animals Safari! 🦁",
        "description": "¡Vamos de safari para ver a los animales más grandes del mundo!",
        "sections": [
          {
            "id": "s200",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-20-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgWildAnimals,
                "type": "speaking"
              },
              {
                "id": "kids-20-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s201",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-20-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-20-2",
                "title": "Roar! 🦁",
                "description": "¡Ruge tan fuerte como un león!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgWildAnimals,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s203",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-20-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-20-3",
                "title": "Spin and Roar! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-20-4a",
                "title": "Animal Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-20-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-20-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s208",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-20-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgWildAnimals,
                "type": "speaking"
              },
              {
                "id": "kids-20-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 2: My Awesome House 🏠",
        "description": "¡Exploraremos las diferentes partes de nuestra casita!",
        "sections": [
          {
            "id": "s210",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-21-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHouseRooms,
                "type": "speaking"
              },
              {
                "id": "kids-21-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s211",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-21-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-21-2",
                "title": "Knock Knock! 🚪",
                "description": "¡Toca la puerta imaginaria de tu casa!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHouseRooms,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s213",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-21-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-21-3",
                "title": "Where do you...? 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-21-4a",
                "title": "House Match! 🏠",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-21-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-21-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s218",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-21-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHouseRooms,
                "type": "speaking"
              },
              {
                "id": "kids-21-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 3: Zoom! Vehicles in Town 🚗",
        "description": "¡Aprende cómo nos movemos por la ciudad increíble!",
        "sections": [
          {
            "id": "s220",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-22-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgVehiclesTown,
                "type": "speaking"
              },
              {
                "id": "kids-22-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s221",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-22-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-22-2",
                "title": "Vroom Vroom! 🚗",
                "description": "¡Coge tu volante y maneja rápido!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgVehiclesTown,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s223",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-22-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-22-3",
                "title": "Vehicles Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-22-4a",
                "title": "Vroom Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-22-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-22-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s228",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-22-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgVehiclesTown,
                "type": "speaking"
              },
              {
                "id": "kids-22-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 4: When I Grow Up! 👩‍⚕️",
        "description": "¡Vamos a soñar con lo que queremos ser de grandes!",
        "sections": [
          {
            "id": "s230",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-23-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgJobs,
                "type": "speaking"
              },
              {
                "id": "kids-23-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s231",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-23-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-23-2",
                "title": "Chef Hat On!",
                "description": "¡Ponte tu gorro de chef imaginario!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgJobs,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s233",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-23-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-23-3",
                "title": "Job Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-23-4a",
                "title": "Job Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-23-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-23-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s238",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-23-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgJobs,
                "type": "speaking"
              },
              {
                "id": "kids-23-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 5: Make some Music! 🎸",
        "description": "¡Toca todos los instrumentos en nuestra banda!",
        "sections": [
          {
            "id": "s240",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-24-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-24-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s241",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-24-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-24-2",
                "title": "Rock out! 🤘",
                "description": "¡Toca tu guitarra invisible!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHobbies,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s243",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-24-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-24-3",
                "title": "Music Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-24-4a",
                "title": "Instrument Match! 🎵",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-24-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-24-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s248",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-24-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-24-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 6: Days of the Week 📅",
        "description": "¡Aprende los días para jugar de lunes a domingo!",
        "sections": [
          {
            "id": "s250",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-25-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-25-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s251",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-25-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-25-2",
                "title": "Hooray for Sunday! 🎉",
                "description": "¡Grita Hooray porque es fin de semana!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgDailyRoutine,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s253",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-25-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-25-3",
                "title": "Days Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-25-4a",
                "title": "Match the Day! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-25-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-25-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s258",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-25-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-25-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 7: Let's Go Shopping! 🛒",
        "description": "¡Acompáñanos al súpermercado a comprar!",
        "sections": [
          {
            "id": "s260",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-26-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-26-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s261",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-26-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-26-2",
                "title": "Push the Cart! 🛒",
                "description": "¡Finge que empujas el carrito de compras!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgFoodDrinks,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s263",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-26-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-26-3",
                "title": "Shopping Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-26-4a",
                "title": "Cart Match! 🛒",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-26-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-26-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s268",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-26-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgFoodDrinks,
                "type": "speaking"
              },
              {
                "id": "kids-26-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 8: Playground Fun! 🛝",
        "description": "¡Vamos a divertirnos y jugar en el parque!",
        "sections": [
          {
            "id": "s270",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-27-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-27-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s271",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-27-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-27-2",
                "title": "Slide down! 🛝",
                "description": "¡Haz como si te deslizaras por un tobogán!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s273",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-27-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-27-3",
                "title": "Playground Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-27-4a",
                "title": "Play Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-27-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-27-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s278",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-27-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-27-hw",
                "title": "Video Homework ??",
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
    "title": "Level 3 - Basic 3 (Kids Campeón)",
    "duration": "2 meses",
    "objective": "Oraciones largas, hobbies, rutinas y espacio exterior.",
    "mcfrEquivalent": "A1.2",
    "classes": [
      {
        "id": "c-bc-1",
        "title": "Clase 1: My Daily Routine ⏰",
        "description": "¡Vamos a ver qué hacemos desde que nos despertamos hasta dormir!",
        "sections": [
          {
            "id": "s300",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-30-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-30-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s301",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-30-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-30-2",
                "title": "Big Yawn! 🥱",
                "description": "¡Bosteza y estírate muy largo!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgDailyRoutine,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s303",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-30-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-30-3",
                "title": "Time Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-30-4a",
                "title": "Routine Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-30-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-30-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s308",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-30-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgDailyRoutine,
                "type": "speaking"
              },
              {
                "id": "kids-30-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 2: Fun Hobbies & Sports! ⚽️",
        "description": "¡Vamos a hablar de lo que más nos gusta hacer!",
        "sections": [
          {
            "id": "s310",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-31-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-31-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s311",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-31-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-31-2",
                "title": "Kick! ⚽",
                "description": "¡Patea el balón súper fuerte imaginariamente!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHobbies,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s313",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-31-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-31-3",
                "title": "Hobby Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-31-4a",
                "title": "I Like to... 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-31-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-31-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s318",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-31-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHobbies,
                "type": "speaking"
              },
              {
                "id": "kids-31-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 3: Happy Holidays! 🎄",
        "description": "¡Aprenderemos cómo celebramos los días felices!",
        "sections": [
          {
            "id": "s320",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-32-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgHolidays,
                "type": "speaking"
              },
              {
                "id": "kids-32-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s321",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-32-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-32-2",
                "title": "Blow Candles! 🎂",
                "description": "¡Sopla las velitas de tu pastel!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgHolidays,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s323",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-32-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-32-3",
                "title": "Party Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-32-4a",
                "title": "Holiday Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-32-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-32-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s328",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-32-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgHolidays,
                "type": "speaking"
              },
              {
                "id": "kids-32-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 4: Outer Space Adventure! 🚀",
        "description": "¡Viaja con nosotros hasta las estrellas y la luna!",
        "sections": [
          {
            "id": "s330",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-33-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-33-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s331",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-33-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-33-2",
                "title": "Blast Off! 🚀",
                "description": "¡Cuenta 5, 4, 3, 2, 1, Despegue!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSpace,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s333",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-33-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-33-3",
                "title": "Orbit Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-33-4a",
                "title": "Space Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-33-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-33-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s338",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-33-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-33-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 5: Awesome Fairy Tales! 🧚",
        "description": "¡Conoce caballeros, dragones y princesas en inglés!",
        "sections": [
          {
            "id": "s340",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-34-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgMonster,
                "type": "speaking"
              },
              {
                "id": "kids-34-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s341",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-34-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-34-2",
                "title": "Dragon Breath! 🐉",
                "description": "¡Respira fuego como un dragón gigante!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgMonster,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s343",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-34-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-34-3",
                "title": "Tales Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-34-4a",
                "title": "Tale Match! 🏰",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-34-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-34-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s348",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-34-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgMonster,
                "type": "speaking"
              },
              {
                "id": "kids-34-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 6: The 4 Seasons! ❄️",
        "description": "¡Descubre la primavera, el verano, otoño y el invierno!",
        "sections": [
          {
            "id": "s350",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-35-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-35-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s351",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-35-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-35-2",
                "title": "Shiver in Winter! ❄️",
                "description": "¡Finge que tienes mucho, mucho frío!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgNature,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s353",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-35-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-35-3",
                "title": "Season Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-35-4a",
                "title": "Season Match! ❄️",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-35-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-35-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s358",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-35-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgNature,
                "type": "speaking"
              },
              {
                "id": "kids-35-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 7: Be a Helper! 🤝",
        "description": "¡Aprende cómo ayudar en casa y a tus amigos!",
        "sections": [
          {
            "id": "s360",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-36-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-36-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s361",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-36-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-36-2",
                "title": "Share a Toy! 🧸",
                "description": "¡Finge que le das tu juguete a un amigo!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgKidsAction,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s363",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-36-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-36-3",
                "title": "Help Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-36-4a",
                "title": "Helper Match! 🧩",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-36-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-36-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s368",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-36-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgKidsAction,
                "type": "speaking"
              },
              {
                "id": "kids-36-hw",
                "title": "Video Homework ??",
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
        "title": "Clase 8: Around the World! 🌍",
        "description": "¡Viajaremos por todo el planeta a visitar nuevos países!",
        "sections": [
          {
            "id": "s370",
            "title": "1. Hello & Warm Up! 🌞",
            "duration": "5 minutos",
            "objective": "Saludar y despertar nuestra energía.",
            "slides": [
              {
                "id": "kids-37-0a",
                "title": "Hello my friend! 👋",
                "description": "¡Hola! ¿Cómo te sientes hoy?",
                "bgColor": "bg-gradient-to-br from-yellow-400 to-orange-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-37-0b",
                "title": "Magic Warm-up Wheel",
                "description": "Warm up, guess the topic, and start speaking.",
                "bgColor": "bg-gradient-to-br from-rose-400 to-red-500",
                "imageUrl": imgWarmUp,
                "type": "spinning-wheel",
                  content: ["Spin the wheel to warm up.", "Answer fast. No perfect grammar needed yet.", "Then invite one partner to answer too."],
                  wheelItems: [{ label: "Guess", color: "#EF4444", prompt: "Guess the topic!", es: "Adivina el tema!" }, { label: "One word", color: "#F59E0B", prompt: "Say one English word.", es: "Di una palabra en ingles." }, { label: "Show me", color: "#10B981", prompt: "Show or point to something.", es: "Muestra o senala algo." }, { label: "Act it", color: "#3B82F6", prompt: "Act one idea.", es: "Actua una idea." }, { label: "Do you like it?", color: "#8B5CF6", prompt: "Ask: Do you like it?", es: "Pregunta: Te gusta?" }, { label: "Happy face", color: "#EC4899", prompt: "Make a face for today.", es: "Haz una cara para hoy." }]
            }
            ],
            "action": "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
          },
          {
            "id": "s371",
            "title": "2. Let's Learn! 🌟",
            "duration": "10 minutos",
            "objective": "Aprender el vocabulario principal jugando.",
            "slides": [
              {
                "id": "kids-37-1a",
                "title": "Listen & Repeat! 🗣️",
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
                "title": "Say it Loud! 📣",
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
                "title": "Say it Quiet... 🤫",
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
            "title": "3. Action Time! ⚡",
            "duration": "5 minutos",
            "objective": "Relacionar el vocabulario con movimiento corporal.",
            "slides": [
              {
                "id": "kids-37-2",
                "title": "Look far away! 🧭",
                "description": "¡Pon tu mano en la frente como si miraras lejos!",
                "bgColor": "bg-gradient-to-br from-teal-400 to-emerald-500",
                "imageUrl": imgSpace,
                "type": "game"
              }
            ],
            "action": "¡Haz la acción junto al estudiante para que se divierta!"
          },
          {
            "id": "s373",
            "title": "4. Video Time! 🎥",
            "duration": "10 minutos",
            "objective": "Ver un divertido video en inglés para practicar.",
            "slides": [
              {
                "id": "kids-37-vid",
                "title": "Let's Watch! 📺",
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
            "title": "5. Wheel of Fun! 🎡",
            "duration": "10 minutos",
            "objective": "Repasar las palabras al azar girando la ruleta.",
            "slides": [
              {
                "id": "kids-37-3",
                "title": "World Wheel! 🎡",
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
            "title": "6. Find the Match! 🧩",
            "duration": "10 minutos",
            "objective": "Consolidar lo aprendido uniendo parejas visuales.",
            "slides": [
              {
                "id": "kids-37-4a",
                "title": "Travel Match! 🌍",
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
                "title": "Super Memory! 🧠",
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
            "title": "7. Rompecabezas 🧩",
            "duration": "5 minutos",
            "objective": "Repasar el vocabulario pidiendo un número.",
            "slides": [
              {
                "id": "kids-37-puzzle",
                "title": "Mystery Puzzle! 🧩",
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
            "title": "8. Show & Tell! 🎨",
            "duration": "5 minutos",
            "objective": "Practicar producción oral libre con premios.",
            "slides": [
              {
                "id": "kids-37-5a",
                "title": "Show and Tell! 🎈",
                "description": "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
                "bgColor": "bg-gradient-to-br from-cyan-400 to-blue-500",
                "imageUrl": imgShowAndTell,
                "type": "scavenger-hunt"
              }
            ],
            "action": "Da una estrella o premio virtual imaginario por el esfuerzo."
          },
          {
            "id": "s378",
            "title": "9. Homework & Goodbye! 📝",
            "duration": "5 minutos",
            "objective": "Explicar la tarea para la próxima clase.",
            "slides": [
              {
                "id": "kids-37-5b",
                "title": "Great Job! 🏆",
                "description": "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
                "bgColor": "bg-gradient-to-br from-fuchsia-400 to-pink-500",
                "imageUrl": imgSpace,
                "type": "speaking"
              },
              {
                "id": "kids-37-hw",
                "title": "Video Homework ??",
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
