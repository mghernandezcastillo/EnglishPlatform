import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'story-decoder-curriculum.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(rawData);

function createConversationalLine({
  id,
  role = 'target',
  es,
  en,
  accepted = [],
  synonyms = {},
  target = 'Fundamentos de Oración',
  grammar = 'Present Simple (+, -, ?, Wh-)',
  pattern = 'Conversational (+, -, ?, Wh-)',
  difficulty = 1,
  hints = [],
  explanation = '',
  vocab = []
}) {
  const cleanTokens = en.replace(/[’']/g, "'").replace(/[",.!?:]/g, '').split(/\s+/).filter(Boolean);
  const allAccepted = Array.from(new Set([en, ...accepted]));

  const half = Math.ceil(cleanTokens.length / 2);
  const easy = [cleanTokens.slice(0, half).join(' '), cleanTokens.slice(half).join(' ')];

  const third = Math.ceil(cleanTokens.length / 3);
  const medium = [
    cleanTokens.slice(0, third).join(' '),
    cleanTokens.slice(third, third * 2).join(' '),
    cleanTokens.slice(third * 2).join(' ')
  ].filter(Boolean);

  return {
    line_id: id,
    line_role: role,
    es,
    en,
    preferred_answer: en,
    accepted_answers: allAccepted,
    lesson_target: target,
    grammar_focus: grammar,
    pattern,
    focus_tokens: vocab.length ? vocab : cleanTokens.slice(0, 4),
    difficulty,
    puzzle: {
      easy_blocks: easy,
      medium_blocks: medium,
      hard_word_by_word: cleanTokens,
      expert_with_distractors: [...cleanTokens, "does", "did", "is", "have", "to", "not"],
      shuffle_on_each_attempt: true,
      avoid_position_hints: true
    },
    synonym_map: synonyms,
    common_errors: ["Confundir el orden de las palabras o el auxiliar en preguntas."],
    hints: hints.length ? hints : ["Observa la interacción entre los personajes y el verbo auxiliar."],
    tutor_explanation: explanation || "Esta frase combina la estructura del tema con un diálogo natural entre los personajes.",
    vocabulary_candidates: vocab.length ? vocab : cleanTokens
  };
}

const b1 = data.blocks[0];

// ==========================================
// LESSON 4: Verbos base y complementos
// ==========================================

// Story B01L04A: Preparando la Gran Carrera (Sebas y Camila)
b1.lessons[3].stories[0] = {
  story_id: "B01L04A",
  title: "Preparando la Gran Carrera",
  type: "conversation",
  value: "Diálogo de acción sobre preparación y puesta a punto",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L04A01", role: "context",
      es: "Sebas y Camila preparan sus bicicletas en el parqueadero antes de la carrera.",
      en: "Sebas and Camila prepare their bikes in the parking lot before the race.",
      accepted: ["Sebas and Camila ready their bicycles in the lot before the race."],
      synonyms: { "prepare": ["ready"] },
      vocab: ["prepare", "bikes", "parking lot", "race"]
    }),
    createConversationalLine({
      id: "B01L04A02", role: "target",
      es: "Sebas ajusta los pedales y le dice: 'Yo limpio los frenos con cuidado.'",
      en: "Sebas adjusts the pedals and tells her, 'I clean the brakes with care.'",
      accepted: ["Sebas adjusts the pedals and tells her, 'I clean the brakes carefully.'"],
      synonyms: { "with care": ["carefully"] },
      vocab: ["adjusts", "clean", "brakes", "care"]
    }),
    createConversationalLine({
      id: "B01L04A03", role: "target",
      es: "Camila infla las llantas: 'Ella revisa la presión del aire cada mañana.'",
      en: "Camila pumps the tires: 'She checks the air pressure every morning.'",
      accepted: ["Camila inflates the tires: 'She inspects the air pressure every morning.'"],
      synonyms: { "checks": ["inspects"] },
      vocab: ["pumps tires", "checks", "air pressure"]
    }),
    createConversationalLine({
      id: "B01L04A04", role: "target",
      es: "Sebas mira el cronómetro y le dice: 'Nosotros no perdemos ningún segundo.'",
      en: "Sebas looks at the stopwatch and tells her, 'We do not waste any second.'",
      accepted: ["Sebas looks at the timer and tells her, 'We don't lose any second.'"],
      synonyms: { "waste": ["lose"] },
      vocab: ["stopwatch", "do not waste", "second"]
    }),
    createConversationalLine({
      id: "B01L04A05", role: "target",
      es: "Camila señala la curva peligrosa: 'El competidor no frena en la bajada.'",
      en: "Camila points at the dangerous curve: 'The rider does not brake on the downhill.'",
      accepted: ["Camila points to the sharp turn: 'The racer doesn't brake on the slope.'"],
      synonyms: { "dangerous curve": ["sharp turn"], "rider": ["racer"] },
      vocab: ["dangerous curve", "rider", "does not brake"]
    }),
    createConversationalLine({
      id: "B01L04A06", role: "target",
      es: "Sebas le pasa el casco y le pregunta: '¿Usas guantes protectores para la pista?'",
      en: "Sebas hands her the helmet and asks her, 'Do you wear protective gloves for the track?'",
      accepted: ["Sebas passes her the helmet and asks her, 'Do you use safety gloves for the track?'"],
      synonyms: { "wear": ["use"] },
      vocab: ["hands helmet", "Do you wear", "gloves", "track"]
    }),
    createConversationalLine({
      id: "B01L04A07", role: "target",
      es: "Camila mira al entrenador y le pregunta: '¿Conoce él el atajo de la montaña?'",
      en: "Camila looks at the coach and asks him, 'Does he know the mountain shortcut?'",
      accepted: ["Camila looks at the trainer and asks him, 'Does he know the hill shortcut?'"],
      synonyms: { "coach": ["trainer"] },
      vocab: ["coach", "Does he know", "shortcut"]
    }),
    createConversationalLine({
      id: "B01L04A08", role: "target",
      es: "Sebas revisa el mapa del circuito y le pregunta: '¿Qué distancia recorre el equipo hoy?'",
      en: "Sebas checks the circuit map and asks her, 'What distance does the team cover today?'",
      accepted: ["Sebas inspects the route map and asks her, 'What distance does the team ride today?'"],
      synonyms: { "cover": ["ride", "travel"] },
      vocab: ["circuit map", "What distance", "team cover"]
    }),
    createConversationalLine({
      id: "B01L04A09", role: "target",
      es: "Camila busca agua fresca y le pregunta: '¿Dónde compran las bebidas energéticas?'",
      en: "Camila looks for fresh water and asks him, 'Where do they buy energy drinks?'",
      accepted: ["Camila searches for fresh water and asks him, 'Where do they get energy drinks?'"],
      synonyms: { "buy": ["get", "purchase"] },
      vocab: ["fresh water", "Where do they buy", "drinks"]
    }),
    createConversationalLine({
      id: "B01L04A10", role: "target",
      es: "Sebas escucha los vítores y le pregunta: '¿Por qué entrena la gente con tanta pasión?'",
      en: "Sebas hears the cheers and asks her, 'Why do people train with so much passion?'",
      accepted: ["Sebas hears the crowd and asks her, 'Why do people practice with such enthusiasm?'"],
      synonyms: { "passion": ["enthusiasm", "energy"] },
      vocab: ["cheers", "Why do people train", "passion"]
    }),
    createConversationalLine({
      id: "B01L04A11", role: "target",
      es: "Camila ajusta su dorsal y le dice: '¡Nosotros ganamos la medalla juntos!'",
      en: "Camila fastens her number tag and tells him, 'We win the medal together!'",
      accepted: ["Camila clips her race number and says to him, 'We win the medal together!'"],
      synonyms: { "fastens": ["clips", "attaches"] },
      vocab: ["fastens tag", "win medal", "together"]
    }),
    createConversationalLine({
      id: "B01L04A12", role: "context",
      es: "Suena el silbato de salida y ambos pedalean a máxima velocidad hacia la meta.",
      en: "The start whistle sounds and both pedal at top speed toward the finish line.",
      accepted: ["The starting whistle blows and both ride at full speed toward the finish line."],
      synonyms: { "top speed": ["full speed"] },
      vocab: ["whistle", "pedal top speed", "finish line"]
    })
  ]
};

// Story B01L04B: Detrás del Telón de Teatro (Samuel e Isa)
b1.lessons[3].stories[1] = {
  story_id: "B01L04B",
  title: "Detrás del Telón de Teatro",
  type: "conversation",
  value: "Diálogo de ensayo y preparación teatral",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L04B01", role: "context",
      es: "Samuel e Isa repasan sus libretos detrás del telón rojo del auditorio.",
      en: "Samuel and Isa review their scripts behind the red curtain of the auditorium.",
      accepted: ["Samuel and Isa practice their lines behind the red stage curtain."],
      synonyms: { "scripts": ["lines"] },
      vocab: ["review", "scripts", "red curtain", "auditorium"]
    }),
    createConversationalLine({
      id: "B01L04B02", role: "target",
      es: "Samuel memoriza su diálogo y le dice: 'Yo recuerdo todas mis líneas hoy.'",
      en: "Samuel memorizes his dialogue and tells her, 'I remember all my lines today.'",
      accepted: ["Samuel learns his dialogue and tells her, 'I recall all my lines today.'"],
      synonyms: { "remember": ["recall"] },
      vocab: ["memorizes", "remember", "lines"]
    }),
    createConversationalLine({
      id: "B01L04B03", role: "target",
      es: "Isa acomoda su sombrero elegante: 'Ella cambia de vestuario muy rápido.'",
      en: "Isa adjusts her elegant hat: 'She changes costumes very quickly.'",
      accepted: ["Isa fixes her fancy hat: 'She swaps outfits very fast.'"],
      synonyms: { "costumes": ["outfits"], "quickly": ["fast"] },
      vocab: ["elegant hat", "changes costumes", "quickly"]
    }),
    createConversationalLine({
      id: "B01L04B04", role: "target",
      es: "Samuel mira las luces del escenario: 'El director no acepta errores tontos.'",
      en: "Samuel looks at the stage lights: 'The director does not accept silly mistakes.'",
      accepted: ["Samuel looks at the stage lights: 'The director doesn't allow foolish errors.'"],
      synonyms: { "mistakes": ["errors"], "silly": ["foolish"] },
      vocab: ["stage lights", "director", "does not accept"]
    }),
    createConversationalLine({
      id: "B01L04B05", role: "target",
      es: "Isa respira profundo y le responde: 'Nosotros no olvidamos la emoción.'",
      en: "Isa breathes deeply and replies to him, 'We do not forget the emotion.'",
      accepted: ["Isa takes a deep breath and replies to him, 'We don't lose the feeling.'"],
      synonyms: { "emotion": ["feeling"] },
      vocab: ["breathes deeply", "do not forget", "emotion"]
    }),
    createConversationalLine({
      id: "B01L04B06", role: "target",
      es: "Samuel señala la entrada izquierda y le pregunta: '¿Escuchas la música de fondo?'",
      en: "Samuel points at the left entrance and asks her, 'Do you hear the background music?'",
      accepted: ["Samuel points to the left entrance and asks her, 'Do you hear the background track?'"],
      synonyms: { "music": ["track", "score"] },
      vocab: ["left entrance", "Do you hear", "background music"]
    }),
    createConversationalLine({
      id: "B01L04B07", role: "target",
      es: "Isa mira hacia la cabina de sonido y le pregunta: '¿Controla él los micrófonos?'",
      en: "Isa looks toward the sound booth and asks him, 'Does he control the microphones?'",
      accepted: ["Isa looks toward the audio booth and asks him, 'Does he manage the mics?'"],
      synonyms: { "microphones": ["mics"] },
      vocab: ["sound booth", "Does he control", "microphones"]
    }),
    createConversationalLine({
      id: "B01L04B08", role: "target",
      es: "Samuel revisa el reloj del telón y le pregunta: '¿Qué escena empieza primero?'",
      en: "Samuel checks the backstage clock and asks her, 'What scene starts first?'",
      accepted: ["Samuel checks the backstage watch and asks her, 'Which scene begins first?'"],
      synonyms: { "starts": ["begins"] },
      vocab: ["backstage clock", "What scene", "starts first"]
    }),
    createConversationalLine({
      id: "B01L04B09", role: "target",
      es: "Isa busca la carta de utilería y le pregunta: '¿Dónde guardan los accesorios antiguos?'",
      en: "Isa looks for the prop letter and asks him, 'Where do they keep the vintage props?'",
      accepted: ["Isa searches for the prop letter and asks him, 'Where do they store the old props?'"],
      synonyms: { "keep": ["store"] },
      vocab: ["prop letter", "Where do they keep", "vintage props"]
    }),
    createConversationalLine({
      id: "B01L010B", role: "target",
      es: "Samuel mira al público lleno y le pregunta: '¿Por qué aplauden con tanta emoción?'",
      en: "Samuel looks at the full audience and asks her, 'Why do they applaud with such emotion?'",
      accepted: ["Samuel looks at the packed house and asks her, 'Why do people cheer so loudly?'"],
      synonyms: { "applaud": ["cheer", "clap"] },
      vocab: ["full audience", "Why do they applaud", "emotion"]
    }),
    createConversationalLine({
      id: "B01L011B", role: "target",
      es: "Isa toma su mano y le dice: '¡Damos una función inolvidable!'",
      en: "Isa takes his hand and tells him, 'We deliver an unforgettable performance!'",
      accepted: ["Isa takes his hand and says to him, 'We give a memorable show!'"],
      synonyms: { "performance": ["show"] },
      vocab: ["takes hand", "deliver", "unforgettable performance"]
    }),
    createConversationalLine({
      id: "B01L012B", role: "context",
      es: "El telón se abre despacio y los dos actores brillan bajo los reflectores.",
      en: "The curtain opens slowly and both actors shine under the spotlights.",
      accepted: ["The curtain rises gently and both performers shine under the stage lights."],
      synonyms: { "spotlights": ["stage lights"] },
      vocab: ["curtain opens", "actors shine", "spotlights"]
    })
  ]
};

// Story B01L04C: Madrugada en el Horno de Pandebonos (Gabo y Luisa)
b1.lessons[3].stories[2] = {
  story_id: "B01L04C",
  title: "Madrugada en el Horno de Pandebonos",
  type: "conversation",
  value: "Diálogo tradicional de panadería con verbos base",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L04C01", role: "context",
      es: "Gabo y Luisa mezclan los ingredientes en la gran mesa de madera de la panadería.",
      en: "Gabo and Luisa mix the ingredients on the large wooden table of the bakery.",
      accepted: ["Gabo and Luisa blend the ingredients on the big bakery table."],
      synonyms: { "mix": ["blend", "combine"] },
      vocab: ["mix", "ingredients", "wooden table", "bakery"]
    }),
    createConversationalLine({
      id: "B01L04C02", role: "target",
      es: "Gabo ralla el queso costeño y le dice: 'Yo amaso la harina con leche tibia.'",
      en: "Gabo grates the cheese and tells her, 'I knead the flour with warm milk.'",
      accepted: ["Gabo shreds the cheese and tells her, 'I knead the dough with warm milk.'"],
      synonyms: { "flour": ["dough"] },
      vocab: ["grates cheese", "knead", "flour", "warm milk"]
    }),
    createConversationalLine({
      id: "B01L04C03", role: "target",
      es: "Luisa enciende el horno de barro: 'El fuego calienta la bandeja a tiempo.'",
      en: "Luisa lights the clay oven: 'The fire heats the baking sheet on time.'",
      accepted: ["Luisa starts the clay oven: 'The fire warms the tray on time.'"],
      synonyms: { "heats": ["warms"] },
      vocab: ["clay oven", "fire heats", "baking sheet"]
    }),
    createConversationalLine({
      id: "B01L04C04", role: "target",
      es: "Gabo revisa la receta familiar: 'Nosotros no usamos aditivos artificiales.'",
      en: "Gabo checks the family recipe: 'We do not use artificial additives.'",
      accepted: ["Gabo checks the family recipe: 'We don't use chemical additives.'"],
      synonyms: { "artificial": ["chemical"] },
      vocab: ["family recipe", "do not use", "additives"]
    }),
    createConversationalLine({
      id: "B01L04C05", role: "target",
      es: "Luisa toca la masa fresca: 'La mezcla no pierde su suavidad.'",
      en: "Luisa touches the fresh dough: 'The mix does not lose its softness.'",
      accepted: ["Luisa touches the fresh dough: 'The mix doesn't lose its texture.'"],
      synonyms: { "softness": ["texture"] },
      vocab: ["fresh dough", "does not lose", "softness"]
    }),
    createConversationalLine({
      id: "B01L04C06", role: "target",
      es: "Gabo coloca las bandejas en fila y le pregunta: '¿Prefieres el pandebono redondo o en rosca?'",
      en: "Gabo places the trays in a row and asks her, 'Do you prefer round or ring pastries?'",
      accepted: ["Gabo sets the trays in line and asks her, 'Do you like round or ring pastries?'"],
      synonyms: { "prefer": ["like"] },
      vocab: ["places trays", "Do you prefer", "round", "ring pastries"]
    }),
    createConversationalLine({
      id: "B01L04C07", role: "target",
      es: "Luisa mira el termómetro y le pregunta: '¿Hornea el maestro a doscientos grados?'",
      en: "Luisa looks at the thermometer and asks him, 'Does the master baker bake at two hundred degrees?'",
      accepted: ["Luisa checks the thermometer and asks him, 'Does the chef bake at 200 degrees?'"],
      synonyms: { "master baker": ["chef", "baker"] },
      vocab: ["thermometer", "Does he bake", "two hundred degrees"]
    }),
    createConversationalLine({
      id: "B01L04C08", role: "target",
      es: "Gabo saca el café recién colado y le pregunta: '¿Qué aroma llena la cocina primero?'",
      en: "Gabo pours fresh coffee and asks her, 'What aroma fills the kitchen first?'",
      accepted: ["Gabo serves hot coffee and asks her, 'What scent fills the kitchen first?'"],
      synonyms: { "aroma": ["scent", "smell"] },
      vocab: ["fresh coffee", "What aroma", "fills kitchen"]
    }),
    createConversationalLine({
      id: "B01L04C09", role: "target",
      es: "Luisa busca las canastas de mimbre y le pregunta: '¿Dónde venden los mejores buñuelos?'",
      en: "Luisa looks for the wicker baskets and asks him, 'Where do they sell the best fritters?'",
      accepted: ["Luisa searches for the wicker baskets and asks him, 'Where do they sell the best pastries?'"],
      synonyms: { "fritters": ["pastries", "buñuelos"] },
      vocab: ["wicker baskets", "Where do they sell", "fritters"]
    }),
    createConversationalLine({
      id: "B01L04C10", role: "target",
      es: "Gabo escucha los pasos de los vecinos y le pregunta: '¿Por qué madruga tanto la gente por pan?'",
      en: "Gabo hears neighbors footsteps and asks her, 'Why do people wake up so early for bread?'",
      accepted: ["Gabo hears neighbors footsteps and asks her, 'Why do customers arrive so early for bread?'"],
      synonyms: { "wake up": ["arrive"] },
      vocab: ["footsteps", "Why do people wake up", "early for bread"]
    }),
    createConversationalLine({
      id: "B01L04C11", role: "target",
      es: "Luisa saca la primera bandeja dorada y le dice: '¡Servimos el desayuno más rico del barrio!'",
      en: "Luisa takes out the first golden tray and tells him, 'We serve the most delicious breakfast in town!'",
      accepted: ["Luisa brings out the golden tray and says to him, 'We serve the tastiest breakfast in town!'"],
      synonyms: { "delicious": ["tasty"] },
      vocab: ["golden tray", "serve", "delicious breakfast"]
    }),
    createConversationalLine({
      id: "B01L04C12", role: "context",
      es: "El aroma a queso caliente viaja por toda la calle mientras los clientes saludan con una sonrisa.",
      en: "The aroma of warm cheese travels down the street as customers greet with a smile.",
      accepted: ["The scent of hot cheese fills the street while buyers enter with a smile."],
      synonyms: { "customers": ["buyers", "clients"] },
      vocab: ["warm cheese", "travels down street", "greet with smile"]
    })
  ]
};

// ==========================================
// LESSON 5: Do / Does como auxiliares
// ==========================================

// Story B01L05A: Tarde de Skate en la Pista (Leo y Valeria)
b1.lessons[4].stories[0] = {
  story_id: "B01L05A",
  title: "Tarde de Skate en la Pista",
  type: "conversation",
  value: "Diálogo en el skatepark con Do y Does",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L05A01", role: "context",
      es: "Leo y Valeria revisan sus patinetas junto a la rampa principal del parque.",
      en: "Leo and Valeria inspect their skateboards next to the main ramp of the park.",
      accepted: ["Leo and Valeria check their boards beside the main ramp of the park."],
      synonyms: { "skateboards": ["boards"] },
      vocab: ["inspect", "skateboards", "main ramp", "park"]
    }),
    createConversationalLine({
      id: "B01L05A02", role: "target",
      es: "Leo ajusta las ruedas y le dice: 'Yo practico este salto todos los sábados.'",
      en: "Leo adjusts the wheels and tells her, 'I practice this jump every Saturday.'",
      accepted: ["Leo tightens the wheels and tells her, 'I practice this trick every Saturday.'"],
      synonyms: { "jump": ["trick"] },
      vocab: ["adjusts wheels", "practice", "jump", "Saturday"]
    }),
    createConversationalLine({
      id: "B01L05A03", role: "target",
      es: "Valeria patina con agilidad: 'Ella domina las curvas difíciles con estilo.'",
      en: "Valeria skates with agility: 'She masters difficult turns with style.'",
      accepted: ["Valeria rides with agility: 'She controls sharp turns with style.'"],
      synonyms: { "masters": ["controls"] },
      vocab: ["skates", "masters", "difficult turns", "style"]
    }),
    createConversationalLine({
      id: "B01L05A04", role: "target",
      es: "Leo mira el piso húmedo y le dice: 'La patineta no resbala en el concreto seco.'",
      en: "Leo looks at the damp ground and tells her, 'The skateboard does not slip on dry concrete.'",
      accepted: ["Leo looks at the wet floor and tells her, 'The board doesn't slip on dry concrete.'"],
      synonyms: { "does not slip": ["doesn't slip"] },
      vocab: ["damp ground", "skateboard", "does not slip", "concrete"]
    }),
    createConversationalLine({
      id: "B01L05A05", role: "target",
      es: "Valeria acomoda su rodillera: 'Nosotros no montamos sin protección adecuada.'",
      en: "Valeria adjusts her knee pad: 'We do not ride without proper protection.'",
      accepted: ["Valeria fixes her knee pad: 'We don't skate without safety gear.'"],
      synonyms: { "proper protection": ["safety gear"] },
      vocab: ["knee pad", "do not ride", "protection"]
    }),
    createConversationalLine({
      id: "B01L05A06", role: "target",
      es: "Leo señala la baranda metálica y le pregunta: '¿Intentas el giro de trescientos sesenta grados?'",
      en: "Leo points at the metal rail and asks her, 'Do you try the three-sixty spin?'",
      accepted: ["Leo points to the metal rail and asks her, 'Do you attempt the 360 spin?'"],
      synonyms: { "try": ["attempt"] },
      vocab: ["metal rail", "Do you try", "spin"]
    }),
    createConversationalLine({
      id: "B01L05A07", role: "target",
      es: "Valeria mira al campeón local y le pregunta: '¿Entrena él en esta pista todos los días?'",
      en: "Valeria looks at the local champion and asks him, 'Does he train on this track every day?'",
      accepted: ["Valeria looks at the local champion and asks him, 'Does he practice here every day?'"],
      synonyms: { "train": ["practice"] },
      vocab: ["local champion", "Does he train", "track"]
    }),
    createConversationalLine({
      id: "B01L05A08", role: "target",
      es: "Leo revisa la lija de su tabla y le pregunta: '¿Qué truco necesita más equilibrio?'",
      en: "Leo checks the grip tape and asks her, 'What trick needs more balance?'",
      accepted: ["Leo checks the grip tape and asks her, 'Which trick requires more balance?'"],
      synonyms: { "needs": ["requires"] },
      vocab: ["grip tape", "What trick", "needs balance"]
    }),
    createConversationalLine({
      id: "B01L05A09", role: "target",
      es: "Valeria busca cera para barandas y le pregunta: '¿Dónde compran los repuestos para patinetas?'",
      en: "Valeria looks for rail wax and asks him, 'Where do they buy skateboard spare parts?'",
      accepted: ["Valeria searches for wax and asks him, 'Where do they purchase skate parts?'"],
      synonyms: { "buy": ["purchase"] },
      vocab: ["rail wax", "Where do they buy", "spare parts"]
    }),
    createConversationalLine({
      id: "B01L05A10", role: "target",
      es: "Leo escucha los aplausos del grupo y le pregunta: '¿Por qué ayuda tanto el trabajo en equipo?'",
      en: "Leo hears the group cheers and asks her, 'Why does teamwork help so much?'",
      accepted: ["Leo hears the crowd cheering and asks her, 'Why does collaboration help so much?'"],
      synonyms: { "teamwork": ["collaboration"] },
      vocab: ["group cheers", "Why does teamwork help", "much"]
    }),
    createConversationalLine({
      id: "B01L05A11", role: "target",
      es: "Valeria sonríe y le dice: '¡Nosotros logramos trucos increíbles hoy!'",
      en: "Valeria smiles and tells him, 'We achieve incredible tricks today!'",
      accepted: ["Valeria smiles and says to him, 'We land amazing tricks today!'"],
      synonyms: { "achieve": ["land"], "incredible": ["amazing"] },
      vocab: ["smiles", "achieve", "incredible tricks"]
    }),
    createConversationalLine({
      id: "B01L05A12", role: "context",
      es: "Ambos patinan juntos hacia el atardecer mientras el parque se llena de música.",
      en: "Both skate together into the sunset as the park fills with music.",
      accepted: ["They both ride together toward the sunset while music fills the park."],
      synonyms: { "skate": ["ride"] },
      vocab: ["skate together", "sunset", "park fills with music"]
    })
  ]
};

// Story B01L05B: El Libro Oculto de la Biblioteca (Martín y Salomé)
b1.lessons[4].stories[1] = {
  story_id: "B01L05B",
  title: "El Libro Oculto de la Biblioteca",
  type: "conversation",
  value: "Diálogo de misterio en la biblioteca con auxiliares Do y Does",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L05B01", role: "context",
      es: "Martín y Salomé recorren los pasillos silenciosos de la biblioteca central.",
      en: "Martin and Salome walk down the quiet aisles of the central library.",
      accepted: ["Martin and Salome explore the silent corridors of the main library."],
      synonyms: { "quiet": ["silent"], "aisles": ["corridors"] },
      vocab: ["walk down", "quiet aisles", "central library"]
    }),
    createConversationalLine({
      id: "B01L05B02", role: "target",
      es: "Martín examina el estante de historia y le dice: 'Yo busco el mapa del siglo dieciocho.'",
      en: "Martin examines the history shelf and tells her, 'I look for the eighteenth-century map.'",
      accepted: ["Martin inspects the history shelf and tells her, 'I search for the 18th-century map.'"],
      synonyms: { "look for": ["search for"] },
      vocab: ["history shelf", "look for", "map"]
    }),
    createConversationalLine({
      id: "B01L05B03", role: "target",
      es: "Salomé consulta el catálogo digital: 'El sistema encuentra títulos antiguos al instante.'",
      en: "Salome consults the digital catalog: 'The system finds ancient titles instantly.'",
      accepted: ["Salome checks the digital catalog: 'The system locates old titles immediately.'"],
      synonyms: { "finds": ["locates"], "ancient": ["old"] },
      vocab: ["digital catalog", "system finds", "ancient titles"]
    }),
    createConversationalLine({
      id: "B01L05B04", role: "target",
      es: "Martín toca un lomo de cuero desgastado: 'Este libro no tiene código de barras.'",
      en: "Martin touches a worn leather spine: 'This book does not have a barcode.'",
      accepted: ["Martin touches a worn leather cover: 'This book doesn't have a barcode.'"],
      synonyms: { "does not have": ["doesn't have"] },
      vocab: ["worn leather", "book", "does not have", "barcode"]
    }),
    createConversationalLine({
      id: "B01L05B05", role: "target",
      es: "Salomé mira las reglas en la pared: 'Los lectores no hacen ruido en esta sala.'",
      en: "Salome looks at the rules on the wall: 'Readers do not make noise in this room.'",
      accepted: ["Salome reads the rules on the wall: 'Visitors don't make noise in this hall.'"],
      synonyms: { "do not make": ["don't make"] },
      vocab: ["rules", "Readers do not make", "noise"]
    }),
    createConversationalLine({
      id: "B01L05B06", role: "target",
      es: "Martín abre la primera página y le pregunta: '¿Ves este sello con forma de león?'",
      en: "Martin opens the first page and asks her, 'Do you see this lion-shaped stamp?'",
      accepted: ["Martin opens the first page and asks her, 'Do you notice this lion seal?'"],
      synonyms: { "stamp": ["seal"] },
      vocab: ["first page", "Do you see", "lion stamp"]
    }),
    createConversationalLine({
      id: "B01L05B07", role: "target",
      es: "Salomé mira al bibliotecario y le pregunta: '¿Guarda él la llave de la sala reservada?'",
      en: "Salome looks at the librarian and asks him, 'Does he keep the key to the archive room?'",
      accepted: ["Salome looks at the librarian and asks him, 'Does he hold the key to the vault?'"],
      synonyms: { "keep": ["hold"] },
      vocab: ["librarian", "Does he keep", "key", "archive room"]
    }),
    createConversationalLine({
      id: "B01L05B08", role: "target",
      es: "Martín lee una nota escrita a mano y le pregunta: '¿Qué secreto esconde este texto?'",
      en: "Martin reads a handwritten note and asks her, 'What secret does this text hide?'",
      accepted: ["Martin reads a handwritten note and asks her, 'What mystery does this document conceal?'"],
      synonyms: { "secret": ["mystery"], "hide": ["conceal"] },
      vocab: ["handwritten note", "What secret", "does hide"]
    }),
    createConversationalLine({
      id: "B01L05B09", role: "target",
      es: "Salomé revisa el plano del edificio y le pregunta: '¿Dónde termina este túnel subterráneo?'",
      en: "Salome checks the building blueprint and asks him, 'Where does this underground tunnel end?'",
      accepted: ["Salome inspects the floor plan and asks him, 'Where does this basement tunnel lead?'"],
      synonyms: { "end": ["lead"] },
      vocab: ["blueprint", "Where does tunnel end"]
    }),
    createConversationalLine({
      id: "B01L05B10", role: "target",
      es: "Martín observa los retratos antiguos y le pregunta: '¿Por qué protege la familia este documento?'",
      en: "Martin observes the antique portraits and asks her, 'Why does the family protect this document?'",
      accepted: ["Martin looks at the old paintings and asks her, 'Why does the family guard this manuscript?'"],
      synonyms: { "protect": ["guard"], "document": ["manuscript"] },
      vocab: ["antique portraits", "Why does family protect", "document"]
    }),
    createConversationalLine({
      id: "B01L05B11", role: "target",
      es: "Salomé sonríe con fascinación y le dice: '¡Descubrimos la historia perdida de la ciudad!'",
      en: "Salome smiles with fascination and tells him, 'We discover the lost history of the city!'",
      accepted: ["Salome smiles with wonder and says to him, 'We uncover the lost past of the town!'"],
      synonyms: { "discover": ["uncover"] },
      vocab: ["fascination", "discover", "lost history"]
    }),
    createConversationalLine({
      id: "B01L05B12", role: "context",
      es: "Ambos cierran el libro con cuidado y guardan la nota para continuar su investigación.",
      en: "Both close the book carefully and keep the note to continue their investigation.",
      accepted: ["They both close the volume gently and save the clue for their research."],
      synonyms: { "investigation": ["research"] },
      vocab: ["close book carefully", "keep note", "investigation"]
    })
  ]
};

// Story B01L05C: La Receta Secreta de la Abuela (Juan y Manu)
b1.lessons[4].stories[2] = {
  story_id: "B01L05C",
  title: "La Receta Secreta de la Abuela",
  type: "conversation",
  value: "Diálogo en la cocina tradicional con Do y Does",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L05C01", role: "context",
      es: "Juan y Manu preparan la masa para los buñuelos en la cocina de la abuela.",
      en: "Juan and Manu prepare the dough for fritters in grandmother kitchen.",
      accepted: ["Juan and Manu make the dough for buñuelos in grandma kitchen."],
      synonyms: { "fritters": ["buñuelos"], "grandmother": ["grandma"] },
      vocab: ["prepare", "dough", "fritters", "kitchen"]
    }),
    createConversationalLine({
      id: "B01L05C02", role: "target",
      es: "Juan pesa el almidón de yuca y le dice: 'Yo sigo las cantidades exactas.'",
      en: "Juan weighs the cassava starch and tells her, 'I follow the exact measurements.'",
      accepted: ["Juan weighs the yuca starch and tells her, 'I follow the precise amounts.'"],
      synonyms: { "measurements": ["amounts", "quantities"] },
      vocab: ["weighs starch", "follow", "exact measurements"]
    }),
    createConversationalLine({
      id: "B01L05C03", role: "target",
      es: "Manu bate los huevos con energía: 'Ella mezcla todo en un tazón hondo.'",
      en: "Manu beats the eggs with energy: 'She mixes everything in a deep bowl.'",
      accepted: ["Manu whisks the eggs energetically: 'She blends all in a large bowl.'"],
      synonyms: { "beats": ["whisks"], "mixes": ["blends"] },
      vocab: ["beats eggs", "mixes everything", "deep bowl"]
    }),
    createConversationalLine({
      id: "B01L05C04", role: "target",
      es: "Juan prueba el aceite en la paila: 'El aceite no hierve todavía.'",
      en: "Juan tests the oil in the pan: 'The oil does not boil yet.'",
      accepted: ["Juan checks the oil in the pot: 'The oil doesn't boil yet.'"],
      synonyms: { "does not boil": ["doesn't boil"] },
      vocab: ["tests oil", "oil does not boil", "yet"]
    }),
    createConversationalLine({
      id: "B01L05C05", role: "target",
      es: "Manu mira el frasco de azúcar: 'Nosotros no agregamos demasiada azúcar.'",
      en: "Manu looks at the sugar jar: 'We do not add too much sugar.'",
      accepted: ["Manu checks the sugar pot: 'We don't put too much sugar.'"],
      synonyms: { "add": ["put"] },
      vocab: ["sugar jar", "do not add", "too much sugar"]
    }),
    createConversationalLine({
      id: "B01L05C06", role: "target",
      es: "Juan arma una pequeña esfera y le pregunta: '¿Flota la bolita de prueba en el aceite?'",
      en: "Juan shapes a small sphere and asks her, 'Does the test ball float in the oil?'",
      accepted: ["Juan rolls a small ball and asks her, 'Does the test sphere float in the oil?'"],
      synonyms: { "shapes": ["rolls"], "ball": ["sphere"] },
      vocab: ["shapes sphere", "Does it float", "oil"]
    }),
    createConversationalLine({
      id: "B01L05C07", role: "target",
      es: "Manu revisa el fuego de la estufa y le pregunta: '¿Conoce la abuela la temperatura perfecta?'",
      en: "Manu checks the stove flame and asks him, 'Does grandma know the perfect temperature?'",
      accepted: ["Manu checks the burner flame and asks him, 'Does grandmother know the right heat?'"],
      synonyms: { "temperature": ["heat"] },
      vocab: ["stove flame", "Does grandma know", "perfect temperature"]
    }),
    createConversationalLine({
      id: "B01L05C08", role: "target",
      es: "Juan saca el primer buñuelo dorado y le pregunta: '¿Qué ingrediente da este sabor tan crocante?'",
      en: "Juan scoops out the first golden fritter and asks her, 'What ingredient gives this crispy flavor?'",
      accepted: ["Juan takes out the golden pastry and asks her, 'What ingredient makes this crispy taste?'"],
      synonyms: { "flavor": ["taste"] },
      vocab: ["golden fritter", "What ingredient gives", "crispy flavor"]
    }),
    createConversationalLine({
      id: "B01L05C09", role: "target",
      es: "Manu busca el chocolate caliente y le pregunta: '¿Dónde sirven el tinto recién hecho?'",
      en: "Manu looks for the hot chocolate and asks him, 'Where do they serve the freshly brewed coffee?'",
      accepted: ["Manu looks for hot cocoa and asks him, 'Where do they serve the fresh black coffee?'"],
      synonyms: { "coffee": ["tinto", "black coffee"] },
      vocab: ["hot chocolate", "Where do they serve", "coffee"]
    }),
    createConversationalLine({
      id: "B01L05C10", role: "target",
      es: "Juan escucha las risas en el comedor y le pregunta: '¿Por qué reúne la comida a toda la familia?'",
      en: "Juan hears laughter in the dining room and asks her, 'Why does food unite the whole family?'",
      accepted: ["Juan hears smiles in the dining area and asks her, 'Why does cooking bring everyone together?'"],
      synonyms: { "unite": ["bring together"] },
      vocab: ["laughter", "Why does food unite", "family"]
    }),
    createConversationalLine({
      id: "B01L05C11", role: "target",
      es: "Manu coloca la bandeja en el centro y le dice: '¡Nuestros buñuelos son un éxito total!'",
      en: "Manu places the tray in the center and tells him, 'Our fritters are a total success!'",
      accepted: ["Manu puts the plate on the table and says to him, 'Our buñuelos are a huge hit!'"],
      synonyms: { "success": ["hit"] },
      vocab: ["places tray", "fritters are", "total success"]
    }),
    createConversationalLine({
      id: "B01L05C12", role: "context",
      es: "Toda la familia se sienta feliz a compartir el desayuno navideño tradicional.",
      en: "The whole family sits happily to share the traditional holiday breakfast.",
      accepted: ["Everyone sits together joyfully to enjoy the traditional holiday breakfast."],
      synonyms: { "happily": ["joyfully"] },
      vocab: ["family sits happily", "share", "holiday breakfast"]
    })
  ]
};

// ==========================================
// LESSON 6: Preguntas básicas con Wh-
// ==========================================

// Story B01L06A: Expedición en la Reserva Natural (Nico y Sofi)
b1.lessons[5].stories[0] = {
  story_id: "B01L06A",
  title: "Expedición en la Reserva Natural",
  type: "conversation",
  value: "Diálogo de exploración ecológica usando preguntas Wh-",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L06A01", role: "context",
      es: "Nico y Sofi caminan por el sendero ecológico de la reserva natural.",
      en: "Nico and Sofi walk along the eco trail of the nature reserve.",
      accepted: ["Nico and Sofi hike along the ecological path of the forest reserve."],
      synonyms: { "trail": ["path"], "walk": ["hike"] },
      vocab: ["walk along", "eco trail", "nature reserve"]
    }),
    createConversationalLine({
      id: "B01L06A02", role: "target",
      es: "Nico saca sus binoculares y le dice: 'Yo observo las aves exóticas en las copas de los árboles.'",
      en: "Nico takes out his binoculars and tells her, 'I observe exotic birds in the treetops.'",
      accepted: ["Nico takes out his binoculars and says to her, 'I watch exotic birds in the canopy.'"],
      synonyms: { "treetops": ["canopy"], "observe": ["watch"] },
      vocab: ["binoculars", "observe", "exotic birds", "treetops"]
    }),
    createConversationalLine({
      id: "B01L06A03", role: "target",
      es: "Sofi graba los sonidos del bosque: 'El micrófono capta el canto del colibrí.'",
      en: "Sofi records forest sounds: 'The microphone captures the hummingbird song.'",
      accepted: ["Sofi records nature audio: 'The mic catches the hummingbird melody.'"],
      synonyms: { "captures": ["catches"] },
      vocab: ["records", "microphone captures", "hummingbird"]
    }),
    createConversationalLine({
      id: "B01L06A04", role: "target",
      es: "Nico mira el mapa del sendero: 'Los turistas no entran a la zona protegida.'",
      en: "Nico looks at the trail map: 'Tourists do not enter the protected zone.'",
      accepted: ["Nico checks the route map: 'Visitors don't enter the protected area.'"],
      synonyms: { "zone": ["area"] },
      vocab: ["trail map", "Tourists do not enter", "protected zone"]
    }),
    createConversationalLine({
      id: "B01L06A05", role: "target",
      es: "Sofi revisa su cantimplora de agua: 'Nosotros no dejamos basura en la montaña.'",
      en: "Sofi checks her water canteen: 'We do not leave trash on the mountain.'",
      accepted: ["Sofi inspects her water bottle: 'We don't leave litter on the mountain.'"],
      synonyms: { "trash": ["litter", "waste"] },
      vocab: ["water canteen", "do not leave trash", "mountain"]
    }),
    createConversationalLine({
      id: "B01L06A06", role: "target",
      es: "Nico señala un árbol gigante y le pregunta: '¿Qué especie de orquídea crece en este tronco?'",
      en: "Nico points at a giant tree and asks her, 'What orchid species grows on this trunk?'",
      accepted: ["Nico points to a massive tree and asks her, 'What kind of orchid grows on this branch?'"],
      synonyms: { "species": ["kind", "type"] },
      vocab: ["giant tree", "What orchid species", "grows"]
    }),
    createConversationalLine({
      id: "B01L06A07", role: "target",
      es: "Sofi escucha el agua correr y le pregunta: '¿Dónde nace el río cristalino?'",
      en: "Sofi hears running water and asks him, 'Where does the crystal river begin?'",
      accepted: ["Sofi hears flowing water and asks him, 'Where does the clear stream originate?'"],
      synonyms: { "begin": ["originate", "start"] },
      vocab: ["running water", "Where does river begin"]
    }),
    createConversationalLine({
      id: "B01L06A08", role: "target",
      es: "Nico mira la posición del sol y le pregunta: '¿Cuándo abren las flores de frailejón?'",
      en: "Nico looks at the sun position and asks her, 'When do the paramo flowers bloom?'",
      accepted: ["Nico checks the sun and asks her, 'When do the high-mountain flowers open?'"],
      synonyms: { "bloom": ["open"] },
      vocab: ["sun position", "When do flowers bloom"]
    }),
    createConversationalLine({
      id: "B01L06A09", role: "target",
      es: "Sofi lee la guía de campo y le pregunta: '¿Quién guía a los exploradores en la selva?'",
      en: "Sofi reads the field guide and asks him, 'Who guides the explorers in the jungle?'",
      accepted: ["Sofi reads the manual and asks him, 'Who leads the hikers in the rainforest?'"],
      synonyms: { "guides": ["leads"], "jungle": ["rainforest"] },
      vocab: ["field guide", "Who guides", "explorers"]
    }),
    createConversationalLine({
      id: "B01L06A10", role: "target",
      es: "Nico siente la neblina fresca y le pregunta: '¿Cómo protege este páramo el agua dulce?'",
      en: "Nico feels the cool mist and asks her, 'How does this wetland protect fresh water?'",
      accepted: ["Nico feels the fresh fog and asks her, 'How does this ecosystem store clean water?'"],
      synonyms: { "protect": ["store", "guard"] },
      vocab: ["cool mist", "How does wetland protect", "water"]
    }),
    createConversationalLine({
      id: "B01L06A11", role: "target",
      es: "Sofi sonríe maravillada y le dice: '¡Aprendemos los secretos más valiosos de la tierra!'",
      en: "Sofi smiles in wonder and tells him, 'We learn the most valuable secrets of the earth!'",
      accepted: ["Sofi smiles with awe and says to him, 'We discover the most precious secrets of nature!'"],
      synonyms: { "valuable": ["precious"], "earth": ["nature"] },
      vocab: ["smiles in wonder", "learn secrets", "valuable earth"]
    }),
    createConversationalLine({
      id: "B01L06A12", role: "context",
      es: "Llegan al mirador más alto y contemplan el valle verde iluminado por el sol.",
      en: "They reach the highest lookout and admire the green valley illuminated by the sun.",
      accepted: ["They arrive at the top viewpoint and gaze at the green valley in the sunlight."],
      synonyms: { "lookout": ["viewpoint"] },
      vocab: ["reach highest lookout", "admire green valley", "sun"]
    })
  ]
};

// Story B01L06B: La Entrevista en la Plaza Central (Esteban y Juana)
b1.lessons[5].stories[1] = {
  story_id: "B01L06B",
  title: "La Entrevista en la Plaza Central",
  type: "conversation",
  value: "Diálogo periodístico con preguntas Wh-",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L06B01", role: "context",
      es: "Esteban y Juana ajustan su cámara y micrófono en la plaza central de la ciudad.",
      en: "Esteban and Juana adjust their camera and microphone in the central town square.",
      accepted: ["Esteban and Juana set up their camera and mic in the main plaza."],
      synonyms: { "town square": ["main plaza", "plaza"] },
      vocab: ["adjust camera", "microphone", "town square"]
    }),
    createConversationalLine({
      id: "B01L06B02", role: "target",
      es: "Esteban prueba el audio y le dice: 'Yo grabo el reporte cultural para el canal comunitario.'",
      en: "Esteban tests the audio and tells her, 'I record the cultural report for the community channel.'",
      accepted: ["Esteban checks the audio and tells her, 'I film the cultural story for local television.'"],
      synonyms: { "record": ["film"] },
      vocab: ["tests audio", "record report", "community channel"]
    }),
    createConversationalLine({
      id: "B01L06B03", role: "target",
      es: "Juana organiza las tarjetas de preguntas: 'Ella entrevista a los mejores artesanos.'",
      en: "Juana organizes the question cards: 'She interviews the best artisans.'",
      accepted: ["Juana arranges the cue cards: 'She interviews the finest craftspeople.'"],
      synonyms: { "artisans": ["craftspeople"] },
      vocab: ["question cards", "interviews", "artisans"]
    }),
    createConversationalLine({
      id: "B01L06B04", role: "target",
      es: "Esteban mira la multitud alegre: 'El festival no termina hasta la medianoche.'",
      en: "Esteban looks at the cheerful crowd: 'The festival does not end until midnight.'",
      accepted: ["Esteban looks at the happy crowd: 'The fair doesn't end until midnight.'"],
      synonyms: { "festival": ["fair"], "does not end": ["doesn't end"] },
      vocab: ["cheerful crowd", "festival does not end", "midnight"]
    }),
    createConversationalLine({
      id: "B01L06B05", role: "target",
      es: "Juana sonríe frente al lente: 'Nosotros no grabamos noticias aburridas.'",
      en: "Juana smiles in front of the lens: 'We do not record boring news.'",
      accepted: ["Juana smiles at the camera: 'We don't film dull stories.'"],
      synonyms: { "boring": ["dull"] },
      vocab: ["smiles", "do not record", "boring news"]
    }),
    createConversationalLine({
      id: "B01L06B06", role: "target",
      es: "Esteban saluda al tejedor de sombreros y le pregunta: '¿Qué material usa usted para el sombrero vueltiao?'",
      en: "Esteban greets the hat weaver and asks him, 'What material do you use for the traditional hat?'",
      accepted: ["Esteban greets the artisan and asks him, 'What fiber do you use for the woven hat?'"],
      synonyms: { "material": ["fiber"] },
      vocab: ["hat weaver", "What material do you use", "traditional hat"]
    }),
    createConversationalLine({
      id: "B01L06B07", role: "target",
      es: "Juana mira las coloridas mochilas y le pregunta: '¿Dónde consiguen los hilos de colores?'",
      en: "Juana looks at the colorful bags and asks him, 'Where do you get the colored threads?'",
      accepted: ["Juana checks the bright woven bags and asks him, 'Where do you buy the colorful yarn?'"],
      synonyms: { "threads": ["yarn"] },
      vocab: ["colorful bags", "Where do you get", "colored threads"]
    }),
    createConversationalLine({
      id: "B01L06B08", role: "target",
      es: "Esteban revisa la cartelera de eventos y le pregunta: '¿Cuándo empieza el concierto de gaitas?'",
      en: "Esteban checks the event board and asks her, 'When does the traditional music concert begin?'",
      accepted: ["Esteban checks the schedule and asks her, 'When does the folk concert start?'"],
      synonyms: { "begin": ["start"] },
      vocab: ["event board", "When does concert begin"]
    }),
    createConversationalLine({
      id: "B01L06B09", role: "target",
      es: "Juana observa a la bailarina de cumbia y le pregunta: '¿Quién diseña este vestido tan hermoso?'",
      en: "Juana watches the traditional dancer and asks her, 'Who designs this gorgeous dress?'",
      accepted: ["Juana watches the dancer and asks her, 'Who creates this beautiful costume?'"],
      synonyms: { "gorgeous": ["beautiful", "lovely"] },
      vocab: ["dancer", "Who designs", "gorgeous dress"]
    }),
    createConversationalLine({
      id: "B01L06B10", role: "target",
      es: "Esteban enfoca la cámara y le pregunta: '¿Cómo enseña usted este arte a los jóvenes?'",
      en: "Esteban focuses the camera and asks him, 'How do you teach this art to the youth?'",
      accepted: ["Esteban focuses the lens and asks him, 'How do you share this craft with young people?'"],
      synonyms: { "youth": ["young people"] },
      vocab: ["focuses camera", "How do you teach", "youth"]
    }),
    createConversationalLine({
      id: "B01L06B11", role: "target",
      es: "Juana concluye la transmisión en vivo y le dice: '¡Nuestra cultura inspira a todo el mundo!'",
      en: "Juana concludes the live broadcast and tells him, 'Our culture inspires the whole world!'",
      accepted: ["Juana ends the live transmission and says to him, 'Our tradition inspires everyone!'"],
      synonyms: { "broadcast": ["transmission"] },
      vocab: ["live broadcast", "culture inspires", "world"]
    }),
    createConversationalLine({
      id: "B01L06B12", role: "context",
      es: "El público aplaude con alegría mientras la música folclórica llena la noche de fiesta.",
      en: "The crowd claps with joy while folk music fills the celebratory night.",
      accepted: ["The audience cheers joyfully while traditional melodies fill the festive night."],
      synonyms: { "joy": ["happiness"] },
      vocab: ["crowd claps with joy", "folk music", "celebratory night"]
    })
  ]
};

// Story B01L06C: El Andén del Viaje Sorpresa (Mateo y Vale)
b1.lessons[5].stories[2] = {
  story_id: "B01L06C",
  title: "El Andén del Viaje Sorpresa",
  type: "conversation",
  value: "Diálogo en la terminal con preguntas informativas Wh-",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L06C01", role: "context",
      es: "Mateo y Vale caminan por la terminal de transporte con sus maletas listas.",
      en: "Mateo and Vale walk through the bus terminal with their luggage ready.",
      accepted: ["Mateo and Vale walk through the transport station with bags prepared."],
      synonyms: { "luggage": ["bags"] },
      vocab: ["walk through", "bus terminal", "luggage ready"]
    }),
    createConversationalLine({
      id: "B01L06C02", role: "target",
      es: "Mateo sostiene el sobre dorado y le dice: 'Yo leo el destino solo al subir al bus.'",
      en: "Mateo holds the golden envelope and tells her, 'I read the destination only when boarding.'",
      accepted: ["Mateo holds the golden letter and tells her, 'I read the destination right on the bus.'"],
      synonyms: { "envelope": ["letter"] },
      vocab: ["golden envelope", "read destination", "boarding"]
    }),
    createConversationalLine({
      id: "B01L06C03", role: "target",
      es: "Vale mira los tableros luminosos: 'Ella busca la puerta de embarque correcta.'",
      en: "Vale looks at the luminous boards: 'She searches for the correct departure gate.'",
      accepted: ["Vale checks the illuminated screens: 'She looks for the right boarding gate.'"],
      synonyms: { "searches for": ["looks for"] },
      vocab: ["luminous boards", "correct departure gate"]
    }),
    createConversationalLine({
      id: "B01L06C04", role: "target",
      es: "Mateo revisa su reloj de muñeca: 'El transporte no sale con retraso hoy.'",
      en: "Mateo checks his wristwatch: 'The bus does not leave with delay today.'",
      accepted: ["Mateo checks his watch: 'The transport doesn't depart late today.'"],
      synonyms: { "does not leave": ["doesn't leave", "doesn't depart"] },
      vocab: ["wristwatch", "bus does not leave", "delay"]
    }),
    createConversationalLine({
      id: "B01L06C05", role: "target",
      es: "Vale sonríe con emoción: 'Nosotros no perdemos ningún detalle de este viaje.'",
      en: "Vale smiles with excitement: 'We do not miss any detail of this trip.'",
      accepted: ["Vale smiles excitedly: 'We don't miss any part of this journey.'"],
      synonyms: { "trip": ["journey"] },
      vocab: ["excitement", "do not miss", "detail of trip"]
    }),
    createConversationalLine({
      id: "B01L06C06", role: "target",
      es: "Mateo mira el letrero del andén y le pregunta: '¿Qué autobús viaja hacia las montañas verdes?'",
      en: "Mateo looks at the platform sign and asks her, 'Which bus travels toward the green mountains?'",
      accepted: ["Mateo checks the platform sign and asks her, 'What coach heads toward the green hills?'"],
      synonyms: { "mountains": ["hills"] },
      vocab: ["platform sign", "Which bus travels", "green mountains"]
    }),
    createConversationalLine({
      id: "B01L06C07", role: "target",
      es: "Vale mira su tiquete impreso y le pregunta: '¿Dónde compran los pasajes de regreso?'",
      en: "Vale looks at her printed ticket and asks him, 'Where do they buy return tickets?'",
      accepted: ["Vale checks her printed ticket and asks him, 'Where do we purchase return fares?'"],
      synonyms: { "tickets": ["fares"] },
      vocab: ["printed ticket", "Where do they buy", "return tickets"]
    }),
    createConversationalLine({
      id: "B01L06C08", role: "target",
      es: "Mateo escucha el anuncio del altavoz y le pregunta: '¿Cuándo anuncian la salida de nuestro viaje?'",
      en: "Mateo listens to the speaker announcement and asks her, 'When do they announce our trip departure?'",
      accepted: ["Mateo hears the loudspeaker and asks her, 'When do they call our bus departure?'"],
      synonyms: { "announce": ["call"] },
      vocab: ["announcement", "When do they announce", "departure"]
    }),
    createConversationalLine({
      id: "B01L06C09", role: "target",
      es: "Vale saluda al conductor amable y le pregunta: '¿Quién maneja por la ruta panorámica?'",
      en: "Vale greets the friendly driver and asks him, 'Who drives along the scenic route?'",
      accepted: ["Vale greets the polite driver and asks him, 'Who navigates the scenic highway?'"],
      synonyms: { "route": ["highway"] },
      vocab: ["friendly driver", "Who drives", "scenic route"]
    }),
    createConversationalLine({
      id: "B01L06C10", role: "target",
      es: "Mateo mira el mapa de carreteras y le pregunta: '¿Cómo llega el bus a la cascada escondida?'",
      en: "Mateo looks at the highway map and asks her, 'How does the bus reach the hidden waterfall?'",
      accepted: ["Mateo checks the road map and asks her, 'How does the vehicle get to the secret waterfall?'"],
      synonyms: { "reach": ["get to"] },
      vocab: ["highway map", "How does bus reach", "hidden waterfall"]
    }),
    createConversationalLine({
      id: "B01L06C11", role: "target",
      es: "Vale abre la puerta del bus y le dice: '¡Empieza la mejor aventura de nuestras vidas!'",
      en: "Vale steps into the bus and tells him, 'The best adventure of our lives begins!'",
      accepted: ["Vale enters the bus and says to him, 'The greatest journey of our lives starts!'"],
      synonyms: { "begins": ["starts"] },
      vocab: ["steps into bus", "best adventure", "begins"]
    }),
    createConversationalLine({
      id: "B01L06C12", role: "context",
      es: "El bus arranca suavemente mientras la ciudad queda atrás y aparecen las verdes colinas cafeteras.",
      en: "The bus departs smoothly as the city fades and the green coffee hills appear.",
      accepted: ["The vehicle leaves smoothly while the city disappears and coffee hills appear."],
      synonyms: { "departs": ["leaves"] },
      vocab: ["bus departs smoothly", "green coffee hills", "appear"]
    })
  ]
};

// Write updated JSON back to file
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('✅ ALL 18 Stories of BLOCK 1 fully updated with rich 360° conversational dialogues, Colombian Spanish & synonym mappings!');
