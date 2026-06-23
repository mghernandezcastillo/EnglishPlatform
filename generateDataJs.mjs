import fs from 'fs';

const imports = `import { CurriculumLevel } from '../types';
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
`;

const levelsData = [
  {
    id: "basic-zero",
    title: "Level 0 - Basic Zero (Kids Explorer)",
    duration: "2 meses",
    objective: "Aprender lo más básico del inglés jugando y divirtiéndonos.",
    mcfrEquivalent: "Pre-A1",
    classes: [
      { id: "c-bz-1", title: "Clase 1: Hello & Amazing Colors! 🌈", description: "¡Vamos a aprender a saludar como campeones!", img: "imgMagicGreeting", speakContent: ["✋ HELLO!", "🌞 GOOD MORNING!", "👋 BYE BYE"], actionSlide: { title: "High Five! ✋", desc: "¡Choca esos cinco a la cámara!" }, wheelTitle: "Fun Wheel! 🎡", wheelDesc: "Gira la ruleta y dime qué color sale en inglés.", wheelItems: [{label: "RED 🍎", color: "#ef4444"}, {label: "BLUE 🌊", color: "#3b82f6"}, {label: "YELLOW ☀️", color: "#facc15"}, {label: "GREEN 🐸", color: "#22c55e"}], matchTitle: "Find the Color! 🎨", matchDesc: "Une la mancha de color con su nombre en inglés.", matchPairs: [{left: "🔴", right: "RED"}, {left: "🔵", right: "BLUE"}, {left: "🟡", right: "YELLOW"}, {left: "🟢", right: "GREEN"}], videoUrl: "https://www.youtube.com/embed/tVlcKp3bWH8" },
      { id: "c-bz-2", title: "Clase 2: Numbers & Animal Friends! 🐶", description: "¡Vamos a contar hasta 5 y conocer a nuestras mascotas!", img: "imgColorfulNumbers", speakContent: ["1️⃣ ONE", "2️⃣ TWO", "3️⃣ THREE", "4️⃣ FOUR", "5️⃣ FIVE"], actionSlide: { title: "Show me 5! ✋", desc: "¡Muéstrame 5 deditos rápidos!" }, wheelTitle: "Super Number Wheel! 🎡", wheelDesc: "Gira la ruleta y dime qué número sale.", wheelItems: [{label: "ONE", color: "#ec4899"}, {label: "TWO", color: "#8b5cf6"}, {label: "THREE", color: "#3b82f6"}, {label: "FOUR", color: "#10b981"}, {label: "FIVE", color: "#f59e0b"}], matchTitle: "Match the Pet! 🐾", matchDesc: "¡Une cada animal con su nombre en inglés!", matchPairs: [{left: "🐶", right: "DOG"}, {left: "🐱", right: "CAT"}, {left: "🐦", right: "BIRD"}, {left: "🐟", right: "FISH"}], videoUrl: "https://www.youtube.com/embed/RB6ZWWpykCs" },
      { id: "c-bz-3", title: "Clase 3: My Body & Fun Actions! 🏃", description: "¡Vamos a movernos y aprender las partes de nuestro cuerpo!", img: "imgMonsterBody", speakContent: ["🙎‍♂️ HEAD", "👀 EYES", "👂 EARS", "👃 NOSE", "👄 MOUTH"], actionSlide: { title: "Shake your body! 🕺", desc: "¡Sacúdete de pies a cabeza!" }, wheelTitle: "Action Wheel! 🎡", wheelDesc: "¡Gira la ruleta y haz la acción súper rápido!", wheelItems: [{label: "JUMP! 🦘", color: "#ef4444"}, {label: "RUN! 🏃", color: "#3b82f6"}, {label: "CLAP! 👏", color: "#eab308"}, {label: "DANCE! 💃", color: "#a855f7"}], matchTitle: "Match the Body! 🧩", matchDesc: "¡Encuentra y une la parte del cuerpo!", matchPairs: [{left: "👀", right: "EYES"}, {left: "👃", right: "NOSE"}, {left: "👂", right: "EARS"}, {left: "👄", right: "MOUTH"}], videoUrl: "https://www.youtube.com/embed/l4WNrvVjiTw" },
      { id: "c-bz-4", title: "Clase 4: My Favorite Toys! 🪁", description: "¡Vamos a jugar y descubrir nuestros juguetes favoritos!", img: "imgToysGames", speakContent: ["🧸 TEDDY BEAR", "⚽ BALL", "🪁 KITE", "🚂 TRAIN"], actionSlide: { title: "Hug a Toy! 🤗", desc: "¡Corre a abrazar tu juguete favorito!" }, wheelTitle: "Spin a Toy! 🎡", wheelDesc: "¡Gira la ruleta y dime de qué color es ese juguete!", wheelItems: [{label: "TEDDY BEAR 🧸", color: "#facc15"}, {label: "BALL ⚽", color: "#ef4444"}, {label: "KITE 🪁", color: "#3b82f6"}, {label: "TRAIN 🚂", color: "#22c55e"}], matchTitle: "Toy Match! 🧩", matchDesc: "¡Une el juguete con su nombre!", matchPairs: [{left: "🧸", right: "TEDDY BEAR"}, {left: "⚽", right: "BALL"}, {left: "🪁", right: "KITE"}, {left: "🚂", right: "TRAIN"}], videoUrl: "https://www.youtube.com/embed/8-SWzpdcl6E" },
      { id: "c-bz-5", title: "Clase 5: Yummy Fruits! 🍓", description: "¡Aprenderemos los nombres de las frutas más ricas!", img: "imgFoodDrinks", speakContent: ["🍓 STRAWBERRY", "🍌 BANANA", "🍉 WATERMELON", "🍇 GRAPES"], actionSlide: { title: "Eat a Fruit! 😋", desc: "¡Haz como que te comes tu fruta favorita!" }, wheelTitle: "Fruit Wheel! 🎡", wheelDesc: "Gira y dime qué fruta comeremos hoy.", wheelItems: [{label: "STRAWBERRY 🍓", color: "#ef4444"}, {label: "BANANA 🍌", color: "#facc15"}, {label: "WATERMELON 🍉", color: "#22c55e"}, {label: "GRAPES 🍇", color: "#a855f7"}], matchTitle: "Match the Fruit! 🍎", matchDesc: "Une cada fruta con su nombre.", matchPairs: [{left: "🍓", right: "STRAWBERRY"}, {left: "🍌", right: "BANANA"}, {left: "🍉", right: "WATERMELON"}, {left: "🍇", right: "GRAPES"}], videoUrl: "https://www.youtube.com/embed/mfReSbQ7jzE" },
      { id: "c-bz-6", title: "Clase 6: Super Shapes! 🟢", description: "¡Vamos a dibujar y aprender sobre las figuras geométricas!", img: "imgSun", speakContent: ["🔴 CIRCLE", "🟦 SQUARE", "🔺 TRIANGLE", "⭐ STAR"], actionSlide: { title: "Draw in the Air! ✍️", desc: "¡Dibuja un círculo grande en el aire!" }, wheelTitle: "Spin the Shape! 🎡", wheelDesc: "Gira la ruleta y dibuja la figura que salga.", wheelItems: [{label: "CIRCLE 🔴", color: "#ef4444"}, {label: "SQUARE 🟦", color: "#3b82f6"}, {label: "TRIANGLE 🔺", color: "#22c55e"}, {label: "STAR ⭐", color: "#facc15"}], matchTitle: "Match the Shape! 🟢", matchDesc: "Encuentra el nombre correcto para la figura.", matchPairs: [{left: "🔴", right: "CIRCLE"}, {left: "🟦", right: "SQUARE"}, {left: "🔺", right: "TRIANGLE"}, {left: "⭐", right: "STAR"}], videoUrl: "https://www.youtube.com/embed/WMnVQAg3AeM" },
      { id: "c-bz-7", title: "Clase 7: School Supplies! 🎒", description: "¡Descubre qué hay en nuestra mochila increíble!", img: "imgMagicGreeting", speakContent: ["🎒 BACKPACK", "✏️ PENCIL", "🖍️ CRAYON", "📖 BOOK"], actionSlide: { title: "Show your Pencil! ✏️", desc: "¡Enséñame tu lápiz o crayón favorito!" }, wheelTitle: "School Wheel! 🎡", wheelDesc: "Gira la ruleta para sacar algo de la mochila.", wheelItems: [{label: "BACKPACK", color: "#10b981"}, {label: "PENCIL", color: "#facc15"}, {label: "CRAYON", color: "#ef4444"}, {label: "BOOK", color: "#3b82f6"}], matchTitle: "School Match! 🧩", matchDesc: "Une los útiles escolares.", matchPairs: [{left: "🎒", right: "BACKPACK"}, {left: "✏️", right: "PENCIL"}, {left: "🖍️", right: "CRAYON"}, {left: "📖", right: "BOOK"}], videoUrl: "https://www.youtube.com/embed/AS5nhKzaOqo" },
      { id: "c-bz-8", title: "Clase 8: Farm Animals! 🐮", description: "¡Visitaremos la granja y conoceremos a los animales!", img: "imgFrog", speakContent: ["🐮 COW", "🐷 PIG", "🦆 DUCK", "🐴 HORSE"], actionSlide: { title: "Moo & Oink! 🐷", desc: "¡Haz el sonido de tu animal de granja favorito!" }, wheelTitle: "Farm Wheel! 🎡", wheelDesc: "¡Gira para ver qué animal de la granja nos saluda!", wheelItems: [{label: "COW 🐮", color: "#000000"}, {label: "PIG 🐷", color: "#f472b6"}, {label: "DUCK 🦆", color: "#facc15"}, {label: "HORSE 🐴", color: "#8b5cf6"}], matchTitle: "Match the Farm! 🚜", matchDesc: "¡Encuentra al animal de la granja!", matchPairs: [{left: "🐮", right: "COW"}, {left: "🐷", right: "PIG"}, {left: "🦆", right: "DUCK"}, {left: "🐴", right: "HORSE"}], videoUrl: "https://www.youtube.com/embed/zXEq-QO3xTg" }
    ]
  },
  {
    id: "basic-explorer",
    title: "Level 1 - Basic 1 (Kids Explorador)",
    duration: "2 meses",
    objective: "Ampliar vocabulario con familia, emociones, ropa y clima.",
    mcfrEquivalent: "Pre-A1+",
    classes: [
      { id: "c-be-1", title: "Clase 1: My Family & Feelings! 👨‍👩‍👧‍👦", description: "¡Vamos a presentar a nuestra familia y hablar de cómo nos sentimos!", img: "imgCuteFamily", speakContent: ["👩 MOM", "👨 DAD", "👦 BROTHER", "👧 SISTER"], actionSlide: { title: "Big Smile! 😁", desc: "¡Muéstrame tu sonrisa más feliz!" }, wheelTitle: "Feelings Wheel! 🎡", wheelDesc: "Gira la ruleta y pon la cara correspondiente.", wheelItems: [{label: "HAPPY 😊", color: "#fcd34d"}, {label: "SAD 😢", color: "#60a5fa"}, {label: "ANGRY 😡", color: "#f87171"}, {label: "SURPRISED 😮", color: "#c084fc"}], matchTitle: "Family Match! 🧩", matchDesc: "¡Une cada miembro de la familia!", matchPairs: [{left: "👩", right: "MOM"}, {left: "👨", right: "DAD"}, {left: "👦", right: "BROTHER"}, {left: "👧", right: "SISTER"}], videoUrl: "https://www.youtube.com/embed/FHaObkHEkHQ" },
      { id: "c-be-2", title: "Clase 2: Yummy Fast Food! 🍕", description: "¡Vamos a aprender los nombres de nuestra comida favorita!", img: "imgFoodDrinks", speakContent: ["🍕 PIZZA", "🍔 HAMBURGER", "🍟 FRIES", "🧃 JUICE"], actionSlide: { title: "Yummy! 😋", desc: "¡Frótate la pancita y di Mmmm!" }, wheelTitle: "Food Wheel! 🎡", wheelDesc: "¡Gira la ruleta y dime qué te tocó comer hoy!", wheelItems: [{label: "PIZZA", color: "#f59e0b"}, {label: "FRIES", color: "#ef4444"}, {label: "JUICE", color: "#8b5cf6"}, {label: "HAMBURGER", color: "#10b981"}], matchTitle: "Food Match! 🧩", matchDesc: "¡Une el dibujo con su nombre!", matchPairs: [{left: "🍕", right: "PIZZA"}, {left: "🍔", right: "HAMBURGER"}, {left: "🍟", right: "FRIES"}, {left: "🧃", right: "JUICE"}], videoUrl: "https://www.youtube.com/embed/_uLesn8M1IM" },
      { id: "c-be-3", title: "Clase 3: My Clothes & The Weather! 👕", description: "¡Aprenderemos la ropa y cómo vestirse según el clima!", img: "imgClothesWeather", speakContent: ["👕 T-SHIRT", "👖 PANTS", "👟 SHOES", "👗 DRESS"], actionSlide: { title: "Look at your shoes!", desc: "¡Muéstrame tus zapatos veloces!" }, wheelTitle: "Weather Wheel! 🎡", wheelDesc: "¡Gira para ver cómo está el clima afuera!", wheelItems: [{label: "SUNNY ☀️", color: "#fcd34d"}, {label: "RAINY 🌧️", color: "#60a5fa"}, {label: "WINDY 🌬️", color: "#94a3b8"}, {label: "SNOWY ⛄", color: "#ffffff"}], matchTitle: "Clothes Match! 👗", matchDesc: "¡Busca la pareja para cada prenda!", matchPairs: [{left: "👕", right: "T-SHIRT"}, {left: "👖", right: "PANTS"}, {left: "👟", right: "SHOES"}, {left: "👗", right: "DRESS"}], videoUrl: "https://www.youtube.com/embed/KUSbazn3STo" },
      { id: "c-be-4", title: "Clase 4: Amazing Nature! 🌳", description: "¡Vamos a explorar la naturaleza y las cosas asombrosas del mundo!", img: "imgNature", speakContent: ["🌳 TREE", "☀️ SUN", "🌸 FLOWER", "⭐ STAR"], actionSlide: { title: "Reach the sky!", desc: "¡Estírate y atrapa una estrella!" }, wheelTitle: "Forest Wheel! 🎡", wheelDesc: "¡Gira la ruleta divertida de la naturaleza!", wheelItems: [{label: "TREE 🌳", color: "#16a34a"}, {label: "SUN ☀️", color: "#facc15"}, {label: "FLOWER 🌸", color: "#ec4899"}, {label: "STAR ⭐", color: "#fef08a"}], matchTitle: "Nature Match! 🧩", matchDesc: "¡Une lo que ves en el bosque con su nombre!", matchPairs: [{left: "🌳", right: "TREE"}, {left: "☀️", right: "SUN"}, {left: "🌸", right: "FLOWER"}, {left: "⭐", right: "STAR"}], videoUrl: "https://www.youtube.com/embed/XC6wQQHo8uU" },
      { id: "c-be-5", title: "Clase 5: Cool Bugs & Insects 🐛", description: "¡Sorpréndete con los insectos más geniales del jardín!", img: "imgFrog", speakContent: ["🐛 CATERPILLAR", "🦋 BUTTERFLY", "🐞 LADYBUG", "🐝 BEE"], actionSlide: { title: "Fly like a Butterfly! 🦋", desc: "¡Mueve los brazos como una mariposa!" }, wheelTitle: "Bug Wheel! 🎡", wheelDesc: "Gira y descubre qué insecto nos visita.", wheelItems: [{label: "BUTTERFLY 🦋", color: "#8b5cf6"}, {label: "LADYBUG 🐞", color: "#ef4444"}, {label: "BEE 🐝", color: "#facc15"}, {label: "CATERPILLAR 🐛", color: "#22c55e"}], matchTitle: "Match the Bug! 🐝", matchDesc: "Une el insecto con su nombre.", matchPairs: [{left: "🐛", right: "CATERPILLAR"}, {left: "🦋", right: "BUTTERFLY"}, {left: "🐞", right: "LADYBUG"}, {left: "🐝", right: "BEE"}], videoUrl: "https://www.youtube.com/embed/tksBMUzZUAs" },
      { id: "c-be-6", title: "Clase 6: Under the Sea! 🐠", description: "¡Sumerjámonos al fondo del océano!", img: "imgWhale", speakContent: ["🐠 FISH", "🐋 WHALE", "🦀 CRAB", "🐬 DOLPHIN"], actionSlide: { title: "Swim! 🏊‍♂️", desc: "¡Nada como un delfín en tu asiento!" }, wheelTitle: "Ocean Wheel! 🎡", wheelDesc: "Gira para ver a tu amigo del mar.", wheelItems: [{label: "FISH 🐠", color: "#f59e0b"}, {label: "WHALE 🐋", color: "#3b82f6"}, {label: "CRAB 🦀", color: "#ef4444"}, {label: "DOLPHIN 🐬", color: "#0ea5e9"}], matchTitle: "Sea Match! 🌊", matchDesc: "Une los animales marinos.", matchPairs: [{left: "🐠", right: "FISH"}, {left: "🐋", right: "WHALE"}, {left: "🦀", right: "CRAB"}, {left: "🐬", right: "DOLPHIN"}], videoUrl: "https://www.youtube.com/embed/XqZsoesa55w" },
      { id: "c-be-7", title: "Clase 7: Action Heroes! 🦸‍♂️", description: "¡Vamos a aprender verbos como superhéroes!", img: "imgKidsAction", speakContent: ["🦸‍♂️ FLY", "🧗‍♂️ CLIMB", "🏊‍♂️ SWIM", "🏃 RUN"], actionSlide: { title: "Be a Hero! ✨", desc: "¡Haz tu pose de superhéroe!" }, wheelTitle: "Power Wheel! 🎡", wheelDesc: "Descubre tu próximo súper poder.", wheelItems: [{label: "FLY", color: "#3b82f6"}, {label: "CLIMB", color: "#22c55e"}, {label: "SWIM", color: "#0ea5e9"}, {label: "RUN", color: "#f59e0b"}], matchTitle: "Action Match! ⚡", matchDesc: "Une el súper poder.", matchPairs: [{left: "🦸‍♂️", right: "FLY"}, {left: "🧗‍♂️", right: "CLIMB"}, {left: "🏊‍♂️", right: "SWIM"}, {left: "🏃", right: "RUN"}], videoUrl: "https://www.youtube.com/embed/hzo9me2fdzg" },
      { id: "c-be-8", title: "Clase 8: Numbers 11-20! 🔢", description: "¡Ahora contaremos más alto que nunca!", img: "imgColorfulNumbers", speakContent: ["1️⃣1️⃣ ELEVEN", "1️⃣2️⃣ TWELVE", "1️⃣5️⃣ FIFTEEN", "2️⃣0️⃣ TWENTY"], actionSlide: { title: "Count together! 🗣️", desc: "¡Cuenta muy alto del 1 al 20!" }, wheelTitle: "Big Numbers Wheel! 🎡", wheelDesc: "¡A ver qué número grande cae!", wheelItems: [{label: "ELEVEN", color: "#ec4899"}, {label: "TWELVE", color: "#3b82f6"}, {label: "FIFTEEN", color: "#f59e0b"}, {label: "TWENTY", color: "#22c55e"}], matchTitle: "Math Match! ➕", matchDesc: "Encuentra el número correcto.", matchPairs: [{left: "11", right: "ELEVEN"}, {left: "12", right: "TWELVE"}, {left: "15", right: "FIFTEEN"}, {left: "20", right: "TWENTY"}], videoUrl: "https://www.youtube.com/embed/D0Ajq682yrA" }
    ]
  },
  {
    id: "basic-adventurer",
    title: "Level 2 - Basic 2 (Kids Aventurero)",
    duration: "2 meses",
    objective: "Formar oraciones con animales, lugares y profesiones.",
    mcfrEquivalent: "A1",
    classes: [
      { id: "c-ba-1", title: "Clase 1: Wild Animals Safari! 🦁", description: "¡Vamos de safari para ver a los animales más grandes del mundo!", img: "imgWildAnimals", speakContent: ["🦁 LION", "🐘 ELEPHANT", "🐒 MONKEY", "🦒 GIRAFFE"], actionSlide: { title: "Roar! 🦁", desc: "¡Ruge tan fuerte como un león!" }, wheelTitle: "Spin and Roar! 🎡", wheelDesc: "¡Gira la ruleta para ver qué animal debes imitar!", wheelItems: [{label: "LION 🦁", color: "#fcd34d"}, {label: "ELEPHANT 🐘", color: "#9ca3af"}, {label: "MONKEY 🐒", color: "#84cc16"}, {label: "GIRAFFE 🦒", color: "#f59e0b"}], matchTitle: "Animal Match! 🧩", matchDesc: "¡Une el animal salvaje con su foto!", matchPairs: [{left: "🦁", right: "LION"}, {left: "🐘", right: "ELEPHANT"}, {left: "🐒", right: "MONKEY"}, {left: "🦒", right: "GIRAFFE"}], videoUrl: "https://www.youtube.com/embed/wCfWmlnJl-A" },
      { id: "c-ba-2", title: "Clase 2: My Awesome House 🏠", description: "¡Exploraremos las diferentes partes de nuestra casita!", img: "imgHouseRooms", speakContent: ["🛏️ BEDROOM", "🛁 BATHROOM", "🍳 KITCHEN", "📺 LIVING ROOM"], actionSlide: { title: "Knock Knock! 🚪", desc: "¡Toca la puerta imaginaria de tu casa!" }, wheelTitle: "Where do you...? 🎡", wheelDesc: "Gira la ruleta y dime dónde haces esa acción.", wheelItems: [{label: "SLEEP 🛏️", color: "#a855f7"}, {label: "COOK 🍳", color: "#ef4444"}, {label: "WASH 🛁", color: "#3b82f6"}, {label: "WATCH TV 📺", color: "#f59e0b"}], matchTitle: "House Match! 🏠", matchDesc: "¡Une cada cuarto de la casa!", matchPairs: [{left: "🛏️", right: "BEDROOM"}, {left: "🛁", right: "BATHROOM"}, {left: "🍳", right: "KITCHEN"}, {left: "📺", right: "LIVING ROOM"}], videoUrl: "https://www.youtube.com/embed/aOSJZbHoiY8" },
      { id: "c-ba-3", title: "Clase 3: Zoom! Vehicles in Town 🚗", description: "¡Aprende cómo nos movemos por la ciudad increíble!", img: "imgVehiclesTown", speakContent: ["🚗 CAR", "🚌 BUS", "🚂 TRAIN", "✈️ PLANE"], actionSlide: { title: "Vroom Vroom! 🚗", desc: "¡Coge tu volante y maneja rápido!" }, wheelTitle: "Vehicles Wheel! 🎡", wheelDesc: "¡Gira para elegir cómo viajamos hoy!", wheelItems: [{label: "CAR 🚗", color: "#ef4444"}, {label: "BUS 🚌", color: "#facc15"}, {label: "TRAIN 🚂", color: "#3b82f6"}, {label: "PLANE ✈️", color: "#a855f7"}], matchTitle: "Vroom Match! 🧩", matchDesc: "¡Empareja los vehículos con su nombre!", matchPairs: [{left: "🚗", right: "CAR"}, {left: "🚌", right: "BUS"}, {left: "🚂", right: "TRAIN"}, {left: "✈️", right: "PLANE"}], videoUrl: "https://www.youtube.com/embed/B1q21Lp8TDI" },
      { id: "c-ba-4", title: "Clase 4: When I Grow Up! 👩‍⚕️", description: "¡Vamos a soñar con lo que queremos ser de grandes!", img: "imgJobs", speakContent: ["👩‍⚕️ DOCTOR", "👩‍🏫 TEACHER", "👨‍🍳 CHEF", "👮‍♂️ POLICE"], actionSlide: { title: "Chef Hat On!", desc: "¡Ponte tu gorro de chef imaginario!" }, wheelTitle: "Job Wheel! 🎡", wheelDesc: "¡Gira la ruleta y dime qué quieres ser en el futuro!", wheelItems: [{label: "DOCTOR 👩‍⚕️", color: "#3b82f6"}, {label: "TEACHER 👩‍🏫", color: "#f59e0b"}, {label: "CHEF 👨‍🍳", color: "#ef4444"}, {label: "POLICE 👮‍♂️", color: "#10b981"}], matchTitle: "Job Match! 🧩", matchDesc: "¡Une el trabajo con su foto!", matchPairs: [{left: "👩‍⚕️", right: "DOCTOR"}, {left: "👩‍🏫", right: "TEACHER"}, {left: "👨‍🍳", right: "CHEF"}, {left: "👮‍♂️", right: "POLICE"}], videoUrl: "https://www.youtube.com/embed/ckKQvlIT9L4" },
      { id: "c-ba-5", title: "Clase 5: Make some Music! 🎸", description: "¡Toca todos los instrumentos en nuestra banda!", img: "imgHobbies", speakContent: ["🎸 GUITAR", "🎹 PIANO", "🥁 DRUM", "🎻 VIOLIN"], actionSlide: { title: "Rock out! 🤘", desc: "¡Toca tu guitarra invisible!" }, wheelTitle: "Music Wheel! 🎡", wheelDesc: "Descubre qué instrumento tocarás hoy.", wheelItems: [{label: "GUITAR", color: "#ef4444"}, {label: "PIANO", color: "#000000"}, {label: "DRUM", color: "#facc15"}, {label: "VIOLIN", color: "#d97706"}], matchTitle: "Instrument Match! 🎵", matchDesc: "Empareja el instrumento.", matchPairs: [{left: "🎸", right: "GUITAR"}, {left: "🎹", right: "PIANO"}, {left: "🥁", right: "DRUM"}, {left: "🎻", right: "VIOLIN"}], videoUrl: "https://www.youtube.com/embed/4nMcbJ8h_yA" },
      { id: "c-ba-6", title: "Clase 6: Days of the Week 📅", description: "¡Aprende los días para jugar de lunes a domingo!", img: "imgDailyRoutine", speakContent: ["📅 MONDAY", "📅 TUESDAY", "📅 FRIDAY", "📅 SUNDAY"], actionSlide: { title: "Hooray for Sunday! 🎉", desc: "¡Grita Hooray porque es fin de semana!" }, wheelTitle: "Days Wheel! 🎡", wheelDesc: "Gira para ver qué día es hoy.", wheelItems: [{label: "MONDAY", color: "#3b82f6"}, {label: "TUESDAY", color: "#8b5cf6"}, {label: "FRIDAY", color: "#22c55e"}, {label: "SUNDAY", color: "#ef4444"}], matchTitle: "Match the Day! 🧩", matchDesc: "Une cada día (usa algunas abreviaturas).", matchPairs: [{left: "MON", right: "MONDAY"}, {left: "TUE", right: "TUESDAY"}, {left: "FRI", right: "FRIDAY"}, {left: "SUN", right: "SUNDAY"}], videoUrl: "https://www.youtube.com/embed/mXMofxtDPUQ" },
      { id: "c-ba-7", title: "Clase 7: Let's Go Shopping! 🛒", description: "¡Acompáñanos al súpermercado a comprar!", img: "imgFoodDrinks", speakContent: ["🛒 SUPERMARKET", "🍎 APPLES", "🥖 BREAD", "🥛 MILK"], actionSlide: { title: "Push the Cart! 🛒", desc: "¡Finge que empujas el carrito de compras!" }, wheelTitle: "Shopping Wheel! 🎡", wheelDesc: "Veamos qué meteremos en el carrito.", wheelItems: [{label: "BREAD", color: "#d97706"}, {label: "MILK", color: "#ffffff"}, {label: "APPLES", color: "#ef4444"}, {label: "EGGS", color: "#facc15"}], matchTitle: "Cart Match! 🛒", matchDesc: "Une los productos que compramos.", matchPairs: [{left: "🍎", right: "APPLES"}, {left: "🥖", right: "BREAD"}, {left: "🥛", right: "MILK"}, {left: "🛒", right: "SUPERMARKET"}], videoUrl: "https://www.youtube.com/embed/L1m1eA7R9rI" },
      { id: "c-ba-8", title: "Clase 8: Playground Fun! 🛝", description: "¡Vamos a divertirnos y jugar en el parque!", img: "imgKidsAction", speakContent: ["🛝 SLIDE", "🏃 SWING", "⚽ BALL", "🌳 PARK"], actionSlide: { title: "Slide down! 🛝", desc: "¡Haz como si te deslizaras por un tobogán!" }, wheelTitle: "Playground Wheel! 🎡", wheelDesc: "Gira para ver a dónde vamos a jugar.", wheelItems: [{label: "SLIDE", color: "#ef4444"}, {label: "SWING", color: "#3b82f6"}, {label: "BALL", color: "#22c55e"}, {label: "PARK", color: "#10b981"}], matchTitle: "Play Match! 🧩", matchDesc: "Une los juegos del parque.", matchPairs: [{left: "🛝", right: "SLIDE"}, {left: "🏃", right: "SWING"}, {left: "⚽", right: "BALL"}, {left: "🌳", right: "PARK"}], videoUrl: "https://www.youtube.com/embed/l4WNrvVjiTw" }
    ]
  },
  {
    id: "basic-champion",
    title: "Level 3 - Basic 3 (Kids Campeón)",
    duration: "2 meses",
    objective: "Oraciones largas, hobbies, rutinas y espacio exterior.",
    mcfrEquivalent: "A1.2",
    classes: [
      { id: "c-bc-1", title: "Clase 1: My Daily Routine ⏰", description: "¡Vamos a ver qué hacemos desde que nos despertamos hasta dormir!", img: "imgDailyRoutine", speakContent: ["☀️ WAKE UP", "🥪 EAT", "🎮 PLAY", "🌙 SLEEP"], actionSlide: { title: "Big Yawn! 🥱", desc: "¡Bosteza y estírate muy largo!" }, wheelTitle: "Time Wheel! 🎡", wheelDesc: "¡Gira la ruleta y forma una oración!", wheelItems: [{label: "WAKE UP", color: "#facc15"}, {label: "EAT", color: "#fb923c"}, {label: "PLAY", color: "#34d399"}, {label: "SLEEP", color: "#38bdf8"}], matchTitle: "Routine Match! 🧩", matchDesc: "Une la acción con su momento del día.", matchPairs: [{left: "☀️", right: "WAKE UP"}, {left: "🥪", right: "EAT"}, {left: "🎮", right: "PLAY"}, {left: "🌙", right: "SLEEP"}], videoUrl: "https://www.youtube.com/embed/eUXkj6j6Ezw" },
      { id: "c-bc-2", title: "Clase 2: Fun Hobbies & Sports! ⚽️", description: "¡Vamos a hablar de lo que más nos gusta hacer!", img: "imgHobbies", speakContent: ["⚽ SOCCER", "🎨 PAINT", "🚲 BIKE", "🎮 VIDEO GAMES"], actionSlide: { title: "Kick! ⚽", desc: "¡Patea el balón súper fuerte imaginariamente!" }, wheelTitle: "Hobby Wheel! 🎡", wheelDesc: "¡Gira la ruleta y haz la mímica!", wheelItems: [{label: "SOCCER ⚽", color: "#22c55e"}, {label: "PAINT 🎨", color: "#f59e0b"}, {label: "BIKE 🚲", color: "#3b82f6"}, {label: "VIDEO GAMES 🎮", color: "#a855f7"}], matchTitle: "I Like to... 🧩", matchDesc: "¡Empareja tu pasatiempo favorito!", matchPairs: [{left: "⚽", right: "SOCCER"}, {left: "🎨", right: "PAINT"}, {left: "🚲", right: "BIKE"}, {left: "🎮", right: "VIDEO GAMES"}], videoUrl: "https://www.youtube.com/embed/N1o4oOXLOZc" },
      { id: "c-bc-3", title: "Clase 3: Happy Holidays! 🎄", description: "¡Aprenderemos cómo celebramos los días felices!", img: "imgHolidays", speakContent: ["🎄 CHRISTMAS", "🎃 HALLOWEEN", "🎂 BIRTHDAY", "🏖️ SUMMER"], actionSlide: { title: "Blow Candles! 🎂", desc: "¡Sopla las velitas de tu pastel!" }, wheelTitle: "Party Wheel! 🎡", wheelDesc: "¡Gira la ruleta y dime qué comes en esta fiesta!", wheelItems: [{label: "CHRISTMAS 🎄", color: "#dc2626"}, {label: "HALLOWEEN 🎃", color: "#ea580c"}, {label: "BIRTHDAY 🎂", color: "#ec4899"}, {label: "SUMMER 🏖️", color: "#0ea5e9"}], matchTitle: "Holiday Match! 🧩", matchDesc: "Une la festividad con lo que la representa.", matchPairs: [{left: "🎄", right: "CHRISTMAS"}, {left: "🎃", right: "HALLOWEEN"}, {left: "🎂", right: "BIRTHDAY"}, {left: "🏖️", right: "SUMMER"}], videoUrl: "https://www.youtube.com/embed/mGAYzlqj-aE" },
      { id: "c-bc-4", title: "Clase 4: Outer Space Adventure! 🚀", description: "¡Viaja con nosotros hasta las estrellas y la luna!", img: "imgSpace", speakContent: ["🚀 ROCKET", "👨‍🚀 ASTRONAUT", "🌙 MOON", "🪐 PLANET"], actionSlide: { title: "Blast Off! 🚀", desc: "¡Cuenta 5, 4, 3, 2, 1, Despegue!" }, wheelTitle: "Orbit Wheel! 🎡", wheelDesc: "¡Gira la ruleta divertida a ver dónde aterrizas!", wheelItems: [{label: "ROCKET 🚀", color: "#facc15"}, {label: "ASTRONAUT 👨‍🚀", color: "#06b6d4"}, {label: "MOON 🌙", color: "#94a3b8"}, {label: "PLANET 🪐", color: "#c084fc"}], matchTitle: "Space Match! 🧩", matchDesc: "¡Une el dibujo del espacio con su nombre!", matchPairs: [{left: "🚀", right: "ROCKET"}, {left: "👨‍🚀", right: "ASTRONAUT"}, {left: "🌙", right: "MOON"}, {left: "🪐", right: "PLANET"}], videoUrl: "https://www.youtube.com/embed/e8YzKyot4Pc" },
      { id: "c-bc-5", title: "Clase 5: Awesome Fairy Tales! 🧚", description: "¡Conoce caballeros, dragones y princesas en inglés!", img: "imgMonster", speakContent: ["🧚 FAIRY", "🐉 DRAGON", "🏰 CASTLE", "👑 KING"], actionSlide: { title: "Dragon Breath! 🐉", desc: "¡Respira fuego como un dragón gigante!" }, wheelTitle: "Tales Wheel! 🎡", wheelDesc: "Encuentra el personaje de tu cuento.", wheelItems: [{label: "FAIRY", color: "#f472b6"}, {label: "DRAGON", color: "#22c55e"}, {label: "CASTLE", color: "#94a3b8"}, {label: "KING", color: "#facc15"}], matchTitle: "Tale Match! 🏰", matchDesc: "Une a los personajes increíbles.", matchPairs: [{left: "🧚", right: "FAIRY"}, {left: "🐉", right: "DRAGON"}, {left: "🏰", right: "CASTLE"}, {left: "👑", right: "KING"}], videoUrl: "https://www.youtube.com/embed/YoQyyB5xvLk" },
      { id: "c-bc-6", title: "Clase 6: The 4 Seasons! ❄️", description: "¡Descubre la primavera, el verano, otoño y el invierno!", img: "imgNature", speakContent: ["🌺 SPRING", "☀️ SUMMER", "🍂 FALL", "❄️ WINTER"], actionSlide: { title: "Shiver in Winter! ❄️", desc: "¡Finge que tienes mucho, mucho frío!" }, wheelTitle: "Season Wheel! 🎡", wheelDesc: "Gira para ver qué estación del año es.", wheelItems: [{label: "SPRING", color: "#ec4899"}, {label: "SUMMER", color: "#facc15"}, {label: "FALL", color: "#f97316"}, {label: "WINTER", color: "#38bdf8"}], matchTitle: "Season Match! ❄️", matchDesc: "Encuentra la palabra de la estación.", matchPairs: [{left: "🌺", right: "SPRING"}, {left: "☀️", right: "SUMMER"}, {left: "🍂", right: "FALL"}, {left: "❄️", right: "WINTER"}], videoUrl: "https://www.youtube.com/embed/8ZjpI6fgYSY" },
      { id: "c-bc-7", title: "Clase 7: Be a Helper! 🤝", description: "¡Aprende cómo ayudar en casa y a tus amigos!", img: "imgKidsAction", speakContent: ["🤝 HELP", "🧹 CLEAN", "🍽️ WASH", "🧸 SHARE"], actionSlide: { title: "Share a Toy! 🧸", desc: "¡Finge que le das tu juguete a un amigo!" }, wheelTitle: "Help Wheel! 🎡", wheelDesc: "Cae en una acción y mímala.", wheelItems: [{label: "HELP", color: "#3b82f6"}, {label: "CLEAN", color: "#22c55e"}, {label: "WASH", color: "#0ea5e9"}, {label: "SHARE", color: "#f59e0b"}], matchTitle: "Helper Match! 🧩", matchDesc: "Une cada buena acción.", matchPairs: [{left: "🤝", right: "HELP"}, {left: "🧹", right: "CLEAN"}, {left: "🍽️", right: "WASH"}, {left: "🧸", right: "SHARE"}], videoUrl: "https://www.youtube.com/embed/p1WG8VdZuKo" },
      { id: "c-bc-8", title: "Clase 8: Around the World! 🌍", description: "¡Viajaremos por todo el planeta a visitar nuevos países!", img: "imgSpace", speakContent: ["🌍 WORLD", "🧭 COMPASS", "🗺️ MAP", "🧳 SUITCASE"], actionSlide: { title: "Look far away! 🧭", desc: "¡Pon tu mano en la frente como si miraras lejos!" }, wheelTitle: "World Wheel! 🎡", wheelDesc: "Gira para ver a dónde viajamos.", wheelItems: [{label: "WORLD", color: "#22c55e"}, {label: "COMPASS", color: "#ef4444"}, {label: "MAP", color: "#facc15"}, {label: "SUITCASE", color: "#8b5cf6"}], matchTitle: "Travel Match! 🌍", matchDesc: "Une los objetos para viajar.", matchPairs: [{left: "🌍", right: "WORLD"}, {left: "🧭", right: "COMPASS"}, {left: "🗺️", right: "MAP"}, {left: "🧳", right: "SUITCASE"}], videoUrl: "https://www.youtube.com/embed/biX7NNxw_w8" }
    ]
  }
];

const processedLevels = levelsData.map((lvl, lIdx) => ({
  id: lvl.id,
  title: lvl.title,
  duration: lvl.duration,
  objective: lvl.objective,
  mcfrEquivalent: lvl.mcfrEquivalent,
  classes: lvl.classes.map((cls, cIdx) => ({
    id: cls.id,
    title: cls.title,
    description: cls.description,
    sections: [
      {
        id: "s" + lIdx + cIdx + "0",
        title: "1. Hello & Warm Up! 🌞",
        duration: "5 minutos",
        objective: "Saludar y despertar nuestra energía.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-0a",
            title: "Hello my friend! 👋",
            description: "¡Hola! ¿Cómo te sientes hoy?",
            bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
            imageUrl: "IMAGE_VAR_" + cls.img,
            type: "speaking"
          },
          {
            id: "kids-" + lIdx + cIdx + "-0b",
            title: "Warm Up Time! 🏃‍♂️",
            description: "¡Vamos a estirar los brazos al cielo y sacudir las manos!",
            bgColor: "bg-gradient-to-br from-rose-400 to-red-500",
            imageUrl: "IMAGE_VAR_imgWarmUp",
            type: "game"
          }
        ],
        action: "¡Saluda al alumno con mucha alegría y haz el ejercicio con él!"
      },
      {
        id: "s" + lIdx + cIdx + "1",
        title: "2. Let's Learn! 🌟",
        duration: "10 minutos",
        objective: "Aprender el vocabulario principal jugando.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-1a",
            title: "Listen & Repeat! 🗣️",
            description: "Vamos a aprender palabras geniales:",
            content: cls.speakContent,
            bgColor: "bg-gradient-to-br from-blue-400 to-indigo-500",
            imageUrl: "IMAGE_VAR_" + cls.img,
            type: "speaking"
          },
          {
            id: "kids-" + lIdx + cIdx + "-1b",
            title: "Say it Loud! 📣",
            description: "¡Grita las palabras lo más fuerte que puedas!",
            bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
            content: cls.speakContent,
            type: "speaking"
          },
          {
            id: "kids-" + lIdx + cIdx + "-1c",
            title: "Say it Quiet... 🤫",
            description: "Ahora susurra las palabras como un ratoncito.",
            bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
            content: cls.speakContent,
            type: "speaking"
          }
        ],
        action: "¡Modula tu voz: primero grita, después susurra!"
      },
      {
        id: "s" + lIdx + cIdx + "2",
        title: "3. Action Time! ⚡",
        duration: "5 minutos",
        objective: "Relacionar el vocabulario con movimiento corporal.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-2",
            title: cls.actionSlide.title,
            description: cls.actionSlide.desc,
            bgColor: "bg-gradient-to-br from-teal-400 to-emerald-500",
            imageUrl: cls.actionSlide.title.includes("High Five") ? "IMAGE_VAR_imgHighFive" : "IMAGE_VAR_" + cls.img,
            type: "game"
          }
        ],
        action: "¡Haz la acción junto al estudiante para que se divierta!"
      },
      {
        id: "s" + lIdx + cIdx + "3",
        title: "4. Video Time! 🎥",
        duration: "10 minutos",
        objective: "Ver un divertido video en inglés para practicar.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-vid",
            title: "Let's Watch! 📺",
            description: "¡Mira este divertido video y canta con nosotros!",
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
            type: "video",
            videoUrl: cls.videoUrl
          }
        ],
        action: "¡Pon el video y anima al estudiante a cantar o bailar!"
      },
      {
        id: "s" + lIdx + cIdx + "4",
        title: "5. Wheel of Fun! 🎡",
        duration: "10 minutos",
        objective: "Repasar las palabras al azar girando la ruleta.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-3",
            title: cls.wheelTitle,
            description: cls.wheelDesc,
            bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
            type: "spinning-wheel",
            wheelItems: cls.wheelItems
          }
        ],
        action: "Dile 'Spin the Wheel!' al niño y espera que repita."
      },
      {
        id: "s" + lIdx + cIdx + "5",
        title: "6. Find the Match! 🧩",
        duration: "10 minutos",
        objective: "Consolidar lo aprendido uniendo parejas visuales.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-4a",
            title: cls.matchTitle,
            description: cls.matchDesc,
            bgColor: "bg-gradient-to-br from-lime-400 to-green-500",
            type: "matching-game",
            matchingPairs: cls.matchPairs.map((p, pIdx) => ({ id: String(pIdx + 1), left: p.left, right: p.right }))
          },
          {
            id: "kids-" + lIdx + cIdx + "-4b",
            title: "Super Memory! 🧠",
            description: "¿Puedes recordar cómo se dicen estas palabras en inglés?",
            bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
            type: "speaking",
            content: cls.matchPairs.map(p => p.left + " ➡️ " + "?".repeat(p.right.length))
          }
        ],
        action: "Celebra con aplausos cuando completen el juego."
      },
      {
        id: "s" + lIdx + cIdx + "6",
        title: "7. Rompecabezas 🧩",
        duration: "5 minutos",
        objective: "Repasar el vocabulario pidiendo un número.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-puzzle",
            title: "Mystery Puzzle! 🧩",
            description: "¡Dime un número para descubrir qué hay detrás!",
            bgColor: "bg-gradient-to-br from-cyan-400 to-indigo-500",
            type: "mystery-puzzle",
            mysteryPuzzleData: {
              target: cls.wheelItems[0].label.replace(/[^a-zA-Z\s]/g, '').trim(),
              emoji: cls.wheelItems[0].label.replace(/[a-zA-Z\s]/g, '').trim() || "⭐",
              panels: [
                { id: 1, label: "1", color: "bg-red-500" },
                { id: 2, label: "2", color: "bg-blue-500" },
                { id: 3, label: "3", color: "bg-green-500" },
                { id: 4, label: "4", color: "bg-yellow-500" }
              ]
            }
          }
        ],
        action: "¡Pregunta al estudiante 'Which number?' y dale clic al panel que elija hasta descubrir la palabra!"
      },
      {
        id: "s" + lIdx + cIdx + "7",
        title: "8. Show & Tell! 🎨",
        duration: "5 minutos",
        objective: "Practicar producción oral libre con premios.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-5a",
            title: "Show and Tell! 🎈",
            description: "¡Trae algo de tu casa relacionado con la clase (un juguete, ropa, dibujo) y muéstralo!",
            bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
            imageUrl: "IMAGE_VAR_imgShowAndTell",
            type: "scavenger-hunt"
          }
        ],
        action: "Da una estrella o premio virtual imaginario por el esfuerzo."
      },
      {
        id: "s" + lIdx + cIdx + "8",
        title: "9. Homework & Goodbye! 📝",
        duration: "5 minutos",
        objective: "Explicar la tarea para la próxima clase.",
        slides: [
          {
            id: "kids-" + lIdx + cIdx + "-5b",
            title: "Great Job! 🏆",
            description: "¡Lo hiciste increíble hoy! Bye bye, see you next class!",
            bgColor: "bg-gradient-to-br from-fuchsia-400 to-pink-500",
            imageUrl: "IMAGE_VAR_" + cls.img,
            type: "speaking"
          },
          {
            id: "kids-" + lIdx + cIdx + "-hw",
            title: "Your Mission! 🚀",
            description: "Para la próxima clase, no olvides tu misión:",
            bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
            type: "homework",
            videoUrl: cls.videoUrl,
            content: [
              "✅ Repasa las palabras que aprendimos hoy.",
              "✅ Dibuja tu parte favorita de la clase.",
              "✅ ¡Enséñale a tu familia lo que aprendiste!"
            ]
          }
        ],
        action: "¡Despídete y recuérdales hacer su misión!"
      }
    ]
  }))
}));

let finalJson = JSON.stringify(processedLevels, null, 2);
finalJson = finalJson.replace(/"IMAGE_VAR_([^"]+)"/g, "$1");

fs.writeFileSync('./src/data/curriculumKids.ts', imports + "\nexport const curriculumKidsLevels: CurriculumLevel[] = " + finalJson + ";\n");
