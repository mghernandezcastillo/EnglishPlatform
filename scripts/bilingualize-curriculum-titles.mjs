import fs from 'node:fs';

const files = [
  'src/data/curriculum.ts',
  'src/data/curriculumKids.ts',
  'src/data/curriculumTeens.ts'
];

const exactToSpanish = new Map([
  ['Basic Zero', 'Básico Cero'],
  ['Level 0 - Basic Zero (Teen Startup)', 'Nivel 0 - Básico Cero (Inicio Adolescente)'],
  ['Level 0 - Basic Zero (Kids Explorer)', 'Nivel 0 - Básico Cero (Explorador Infantil)'],
  ['Welcome!', '¡Bienvenidos!'],
  ['Welcome', 'Bienvenida'],
  ['Today\'s Goals', 'Objetivos de Hoy'],
  ['Objectives', 'Objetivos'],
  ['Homework', 'Tarea'],
  ['Video Homework', 'Tarea en Video'],
  ['Class Complete!', '¡Clase Completada!'],
  ['Speaking Boss Battle', 'Batalla Oral contra el Jefe'],
  ['Emoji Mission', 'Misión Emoji'],
  ['Fun Quiz!', 'Quiz Divertido'],
  ['Let\'s Talk!', '¡Hablemos!'],
  ['Roleplay', 'Juego de Roles'],
  ['Practice', 'Práctica'],
  ['Production', 'Producción'],
  ['Grammar', 'Gramática'],
  ['Vocabulary', 'Vocabulario'],
  ['Warm-up', 'Calentamiento'],
  ['Wrap-up', 'Cierre'],
  ['Reading Practice', 'Práctica de Lectura'],
  ['Complete the sentence', 'Completa la oración'],
  ['Complete the chat', 'Completa el chat'],
  ['Read the Chat', 'Lee el Chat'],
  ['Final Mission', 'Misión Final'],
  ['Show and Tell!', 'Muestra y Cuenta'],
  ['Mystery Puzzle!', 'Rompecabezas Misterioso'],
  ['Magic Warm-up Wheel', 'Ruleta Mágica de Calentamiento'],
  ['Find the Match!', 'Encuentra la Pareja'],
  ['Listen & Repeat!', 'Escucha y Repite'],
  ['Say it Loud!', 'Dilo Fuerte'],
  ['Say it Quiet...', 'Dilo Bajito...'],
  ['Video Time!', 'Hora de Video'],
  ['Great Job!', '¡Gran Trabajo!']
]);

const exactToEnglish = new Map([
  ['Básico Cero', 'Basic Zero'],
  ['Bienvenidos', 'Welcome'],
  ['Bienvenida', 'Welcome'],
  ['Objetivos', 'Objectives'],
  ['Tarea', 'Homework'],
  ['Tarea en Video', 'Video Homework'],
  ['Clase Completada', 'Class Complete'],
  ['Batalla Oral contra el Jefe', 'Speaking Boss Battle'],
  ['Misión Emoji', 'Emoji Mission'],
  ['Quiz Divertido', 'Fun Quiz'],
  ['Hablemos', 'Let\'s Talk'],
  ['Juego de Roles', 'Roleplay'],
  ['Práctica', 'Practice'],
  ['Producción', 'Production'],
  ['Gramática', 'Grammar'],
  ['Vocabulario', 'Vocabulary'],
  ['Calentamiento', 'Warm-up'],
  ['Cierre', 'Wrap-up'],
  ['Práctica de Lectura', 'Reading Practice'],
  ['Completa la oración', 'Complete the sentence'],
  ['Lee el Chat', 'Read the Chat'],
  ['Misión Final', 'Final Mission'],
  ['Muestra y Cuenta', 'Show and Tell'],
  ['Rompecabezas Misterioso', 'Mystery Puzzle'],
  ['Ruleta Mágica de Calentamiento', 'Magic Warm-up Wheel'],
  ['Encuentra la Pareja', 'Find the Match'],
  ['Escucha y Repite', 'Listen and Repeat'],
  ['Dilo Fuerte', 'Say it Loud'],
  ['Dilo Bajito', 'Say it Quiet'],
  ['Hora de Video', 'Video Time'],
  ['Gran Trabajo', 'Great Job']
]);

const wordToSpanish = [
  [/\bClass\b/gi, 'Clase'],
  [/\bLevel\b/gi, 'Nivel'],
  [/\bBasic\b/gi, 'Básico'],
  [/\bZero\b/gi, 'Cero'],
  [/\bOne\b/gi, 'Uno'],
  [/\bTwo\b/gi, 'Dos'],
  [/\bThree\b/gi, 'Tres'],
  [/\bFour\b/gi, 'Cuatro'],
  [/\bFive\b/gi, 'Cinco'],
  [/\bWelcome\b/gi, 'Bienvenida'],
  [/\bHello\b/gi, 'Hola'],
  [/\bIntroductions?\b/gi, 'Presentaciones'],
  [/\bGreetings?\b/gi, 'Saludos'],
  [/\bNames?\b/gi, 'Nombres'],
  [/\bNumbers?\b/gi, 'Números'],
  [/\bAges?\b/gi, 'Edades'],
  [/\bBirthdays?\b/gi, 'Cumpleaños'],
  [/\bColors?\b/gi, 'Colores'],
  [/\bAnimals?\b/gi, 'Animales'],
  [/\bPets?\b/gi, 'Mascotas'],
  [/\bFood\b/gi, 'Comida'],
  [/\bDrinks?\b/gi, 'Bebidas'],
  [/\bFamily\b/gi, 'Familia'],
  [/\bHome\b/gi, 'Hogar'],
  [/\bHouse\b/gi, 'Casa'],
  [/\bRooms?\b/gi, 'Habitaciones'],
  [/\bClothes\b/gi, 'Ropa'],
  [/\bWeather\b/gi, 'Clima'],
  [/\bJobs?\b/gi, 'Trabajos'],
  [/\bPlaces?\b/gi, 'Lugares'],
  [/\bTravel\b/gi, 'Viajes'],
  [/\bShopping\b/gi, 'Compras'],
  [/\bHealth\b/gi, 'Salud'],
  [/\bBody\b/gi, 'Cuerpo'],
  [/\bHobbies\b/gi, 'Pasatiempos'],
  [/\bSports?\b/gi, 'Deportes'],
  [/\bTechnology\b/gi, 'Tecnología'],
  [/\bGadgets?\b/gi, 'Dispositivos'],
  [/\bSchool\b/gi, 'Escuela'],
  [/\bClassroom\b/gi, 'Salón de Clase'],
  [/\bActions?\b/gi, 'Acciones'],
  [/\bVerbs?\b/gi, 'Verbos'],
  [/\bPresent\b/gi, 'Presente'],
  [/\bPast\b/gi, 'Pasado'],
  [/\bFuture\b/gi, 'Futuro'],
  [/\bSimple\b/gi, 'Simple'],
  [/\bContinuous\b/gi, 'Continuo'],
  [/\bQuestions?\b/gi, 'Preguntas'],
  [/\bAnswers?\b/gi, 'Respuestas'],
  [/\bPractice\b/gi, 'Práctica'],
  [/\bReading\b/gi, 'Lectura'],
  [/\bListening\b/gi, 'Escucha'],
  [/\bSpeaking\b/gi, 'Oral'],
  [/\bWriting\b/gi, 'Escritura'],
  [/\bQuiz\b/gi, 'Quiz'],
  [/\bMission\b/gi, 'Misión'],
  [/\bChallenge\b/gi, 'Reto'],
  [/\bGame\b/gi, 'Juego'],
  [/\bReview\b/gi, 'Repaso'],
  [/\bFinal\b/gi, 'Final'],
  [/\bComplete\b/gi, 'Completa'],
  [/\bSentence\b/gi, 'Oración'],
  [/\bChat\b/gi, 'Chat'],
  [/\bStory\b/gi, 'Historia'],
  [/\bRoleplay\b/gi, 'Juego de Roles'],
  [/\bWarm-up\b/gi, 'Calentamiento'],
  [/\bWrap-up\b/gi, 'Cierre'],
  [/\bObjectives?\b/gi, 'Objetivos'],
  [/\bGoals?\b/gi, 'Objetivos'],
  [/\bHomework\b/gi, 'Tarea'],
  [/\bVideo\b/gi, 'Video'],
  [/\bTime\b/gi, 'Hora'],
  [/\bFun\b/gi, 'Divertido'],
  [/\bLet'?s\b/gi, 'Vamos a'],
  [/\bTalk\b/gi, 'Hablar'],
  [/\bWatch\b/gi, 'Ver'],
  [/\bRepeat\b/gi, 'Repetir'],
  [/\bListen\b/gi, 'Escuchar'],
  [/\bMatch\b/gi, 'Pareja'],
  [/\bPuzzle\b/gi, 'Rompecabezas'],
  [/\bWheel\b/gi, 'Ruleta'],
  [/\bBoss\b/gi, 'Jefe'],
  [/\bBattle\b/gi, 'Batalla'],
  [/\bAmazing\b/gi, 'Increíbles'],
  [/\bExplorer\b/gi, 'Explorador'],
  [/\bTeen\b/gi, 'Adolescente'],
  [/\bKids?\b/gi, 'Niños'],
  [/\bAdults?\b/gi, 'Adultos'],
  [/\bStartup\b/gi, 'Inicio'],
  [/\band\b/gi, 'y'],
  [/\bwith\b/gi, 'con'],
  [/\bof\b/gi, 'de'],
  [/&/g, 'y']
];

const wordToEnglish = [
  [/\bClase\b/gi, 'Class'],
  [/\bNivel\b/gi, 'Level'],
  [/\bBásico\b/gi, 'Basic'],
  [/\bCero\b/gi, 'Zero'],
  [/\bUno\b/gi, 'One'],
  [/\bDos\b/gi, 'Two'],
  [/\bTres\b/gi, 'Three'],
  [/\bCuatro\b/gi, 'Four'],
  [/\bCinco\b/gi, 'Five'],
  [/\bIntroducción\b/gi, 'Introduction'],
  [/\bPresentaciones\b/gi, 'Introductions'],
  [/\bSaludos\b/gi, 'Greetings'],
  [/\bNombres\b/gi, 'Names'],
  [/\bNúmeros\b/gi, 'Numbers'],
  [/\bEdades\b/gi, 'Ages'],
  [/\bCumpleaños\b/gi, 'Birthdays'],
  [/\bColores\b/gi, 'Colors'],
  [/\bAnimales\b/gi, 'Animals'],
  [/\bMascotas\b/gi, 'Pets'],
  [/\bComida\b/gi, 'Food'],
  [/\bBebidas\b/gi, 'Drinks'],
  [/\bFamilia\b/gi, 'Family'],
  [/\bHogar\b/gi, 'Home'],
  [/\bCasa\b/gi, 'House'],
  [/\bHabitaciones\b/gi, 'Rooms'],
  [/\bRopa\b/gi, 'Clothes'],
  [/\bClima\b/gi, 'Weather'],
  [/\bTrabajos\b/gi, 'Jobs'],
  [/\bProfesiones\b/gi, 'Professions'],
  [/\bLugares\b/gi, 'Places'],
  [/\bViajes\b/gi, 'Travel'],
  [/\bCompras\b/gi, 'Shopping'],
  [/\bSalud\b/gi, 'Health'],
  [/\bCuerpo\b/gi, 'Body'],
  [/\bPasatiempos\b/gi, 'Hobbies'],
  [/\bDeportes\b/gi, 'Sports'],
  [/\bTecnología\b/gi, 'Technology'],
  [/\bDispositivos\b/gi, 'Gadgets'],
  [/\bEscuela\b/gi, 'School'],
  [/\bSalón de Clase\b/gi, 'Classroom'],
  [/\bAcciones\b/gi, 'Actions'],
  [/\bVerbos\b/gi, 'Verbs'],
  [/\bPresente\b/gi, 'Present'],
  [/\bPasado\b/gi, 'Past'],
  [/\bFuturo\b/gi, 'Future'],
  [/\bSimple\b/gi, 'Simple'],
  [/\bContinuo\b/gi, 'Continuous'],
  [/\bPreguntas\b/gi, 'Questions'],
  [/\bRespuestas\b/gi, 'Answers'],
  [/\bPráctica\b/gi, 'Practice'],
  [/\bLectura\b/gi, 'Reading'],
  [/\bEscucha\b/gi, 'Listening'],
  [/\bOral\b/gi, 'Speaking'],
  [/\bEscritura\b/gi, 'Writing'],
  [/\bQuiz\b/gi, 'Quiz'],
  [/\bMisión\b/gi, 'Mission'],
  [/\bReto\b/gi, 'Challenge'],
  [/\bJuego\b/gi, 'Game'],
  [/\bRepaso\b/gi, 'Review'],
  [/\bFinal\b/gi, 'Final'],
  [/\bCompleta\b/gi, 'Complete'],
  [/\bOración\b/gi, 'Sentence'],
  [/\bHistoria\b/gi, 'Story'],
  [/\bJuego de Roles\b/gi, 'Roleplay'],
  [/\bCalentamiento\b/gi, 'Warm-up'],
  [/\bCierre\b/gi, 'Wrap-up'],
  [/\bObjetivos\b/gi, 'Objectives'],
  [/\bTarea\b/gi, 'Homework'],
  [/\bHora\b/gi, 'Time'],
  [/\bDivertido\b/gi, 'Fun'],
  [/\bHablemos\b/gi, 'Let\'s Talk'],
  [/\bVer\b/gi, 'Watch'],
  [/\bRepetir\b/gi, 'Repeat'],
  [/\bEscuchar\b/gi, 'Listen'],
  [/\bPareja\b/gi, 'Match'],
  [/\bRompecabezas\b/gi, 'Puzzle'],
  [/\bRuleta\b/gi, 'Wheel'],
  [/\bJefe\b/gi, 'Boss'],
  [/\bBatalla\b/gi, 'Battle'],
  [/\bIncreíbles\b/gi, 'Amazing'],
  [/\bExplorador\b/gi, 'Explorer'],
  [/\bAdolescente\b/gi, 'Teen'],
  [/\bNiños\b/gi, 'Kids'],
  [/\bAdultos\b/gi, 'Adults'],
  [/\bInicio\b/gi, 'Startup'],
  [/\by\b/gi, 'and'],
  [/\bcon\b/gi, 'with'],
  [/\bde\b/gi, 'of']
];

function cleanForExact(text) {
  return text
    .replace(/[^\p{L}\p{N}'&:().\-\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[!:]+$/g, '');
}

function hasSpanish(text) {
  return /[áéíóúñ¿¡]/i.test(text) || /\b(clase|nivel|introducción|objetivos|tarea|calentamiento|cierre|práctica|lectura|escucha|saludos|números|colores|animales|familia|comida|ropa|clima|trabajos|lugares|preguntas|respuestas)\b/i.test(text);
}

function applyReplacements(text, replacements) {
  return replacements.reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), text);
}

function tidy(text) {
  return text
    .replace(/\s+([!?.,:;])/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/\bI am\b/g, 'I am')
    .replace(/\bYo am\b/g, 'I am')
    .trim();
}

function translate(text, target) {
  const clean = cleanForExact(text);
  const exact = target === 'es' ? exactToSpanish.get(clean) : exactToEnglish.get(clean);
  if (exact) {
    return text.replace(clean, exact);
  }

  return tidy(applyReplacements(text, target === 'es' ? wordToSpanish : wordToEnglish));
}

function isAlreadyBilingual(title) {
  return /\s\/\s/.test(title);
}

function bilingualTitle(title) {
  if (!title || isAlreadyBilingual(title)) return title;

  if (hasSpanish(title)) {
    const english = translate(title, 'en');
    return `${english} / ${title}`;
  }

  const spanish = translate(title, 'es');
  return `${title} / ${spanish}`;
}

let changed = 0;
let total = 0;

for (const path of files) {
  const originalText = fs.readFileSync(path, 'utf8');
  const nextText = originalText.replace(/((?:"title"|title)\s*:\s*)"((?:\\.|[^"\\])*)"/g, (match, prefix, rawValue) => {
    total += 1;
    let current;
    try {
      current = JSON.parse(`"${rawValue}"`);
    } catch {
      return match;
    }
    const next = bilingualTitle(current);
    if (next !== current) {
      changed += 1;
    }
    return `${prefix}${JSON.stringify(next)}`;
  });

  if (nextText !== originalText) {
    fs.writeFileSync(path, nextText);
  }
}

console.log(`titles=${total} changed=${changed}`);
