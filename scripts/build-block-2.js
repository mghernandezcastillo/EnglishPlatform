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
  target = 'Presente',
  grammar = 'Present Tense (+, -, ?, Wh-)',
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
      expert_with_distractors: [...cleanTokens, "does", "did", "is", "have", "to", "not", "been", "ing"],
      shuffle_on_each_attempt: true,
      avoid_position_hints: true
    },
    synonym_map: synonyms,
    common_errors: ["Confundir las terminaciones del presente o el auxiliar correspondiente."],
    hints: hints.length ? hints : ["Presta atención al tiempo verbal y a la interacción entre los personajes."],
    tutor_explanation: explanation || "Esta frase demuestra el uso del presente en un contexto comunicativo real.",
    vocabulary_candidates: vocab.length ? vocab : cleanTokens
  };
}

const b2 = data.blocks[1];

// ==========================================
// LESSON 7: Present Simple
// ==========================================

// Story B02L01A: La Ruta de Cartas en la Mañana (Carlos y Elena)
b2.lessons[0].stories[0] = {
  story_id: "B02L01A",
  title: "La Ruta de Cartas en la Mañana",
  type: "conversation",
  value: "Diálogo sobre la entrega de correspondencia en el barrio",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B02L01A01", role: "context",
      es: "Carlos y Elena organizan los paquetes en la oficina postal del barrio.",
      en: "Carlos and Elena organize the packages in the neighborhood post office.",
      accepted: ["Carlos and Elena sort the parcels at the local post office."],
      synonyms: { "organize": ["sort"], "packages": ["parcels"] },
      vocab: ["organize", "packages", "post office", "neighborhood"]
    }),
    createConversationalLine({
      id: "B02L01A02", role: "target",
      es: "Carlos revisa las direcciones y le dice: 'Yo entrego las cartas urgentes primero.'",
      en: "Carlos checks the addresses and tells her, 'I deliver the urgent letters first.'",
      accepted: ["Carlos checks the addresses and says to her, 'I deliver the priority letters first.'"],
      synonyms: { "urgent": ["priority"] },
      vocab: ["addresses", "deliver", "urgent letters", "first"]
    }),
    createConversationalLine({
      id: "B02L01A03", role: "target",
      es: "Elena guarda los sobres amarillos: 'Nosotros recorremos las calles principales en bicicleta.'",
      en: "Elena packs the yellow envelopes: 'We ride along the main streets by bicycle.'",
      accepted: ["Elena packs the yellow envelopes: 'We travel along the main avenues by bike.'"],
      synonyms: { "ride": ["travel"], "bicycle": ["bike"] },
      vocab: ["yellow envelopes", "ride along", "main streets", "bicycle"]
    }),
    createConversationalLine({
      id: "B02L01A04", role: "target",
      es: "Carlos mira el mapa de rutas: 'El cartero no olvida ningún buzón.'",
      en: "Carlos looks at the route map: 'The mail carrier does not forget any mailbox.'",
      accepted: ["Carlos looks at the route map: 'The postman doesn't miss any letterbox.'"],
      synonyms: { "mail carrier": ["postman"], "mailbox": ["letterbox"] },
      vocab: ["route map", "mail carrier", "does not forget", "mailbox"]
    }),
    createConversationalLine({
      id: "B02L01A05", role: "target",
      es: "Elena sonríe al acomodar su gorra: 'Nosotros no trabajamos con prisa.'",
      en: "Elena smiles as she fixes her cap: 'We do not work in a hurry.'",
      accepted: ["Elena smiles as she fixes her cap: 'We don't work in a rush.'"],
      synonyms: { "hurry": ["rush"] },
      vocab: ["fixes cap", "do not work", "hurry"]
    }),
    createConversationalLine({
      id: "B02L01A06", role: "target",
      es: "Carlos señala una casa con jardín y le pregunta: '¿Conoces a la familia del portón verde?'",
      en: "Carlos points at a house with a garden and asks her, 'Do you know the family at the green gate?'",
      accepted: ["Carlos points to a house with a garden and asks her, 'Do you know the people at the green door?'"],
      synonyms: { "family": ["people"], "gate": ["door"] },
      vocab: ["garden", "Do you know", "family", "green gate"]
    }),
    createConversationalLine({
      id: "B02L01A07", role: "target",
      es: "Elena mira la ventana del segundo piso y le pregunta: '¿Recibe el señor Pedro su periódico temprano?'",
      en: "Elena looks at the second-floor window and asks him, 'Does Mr. Pedro receive his newspaper early?'",
      accepted: ["Elena looks at the second-floor window and asks him, 'Does Pedro get his paper early?'"],
      synonyms: { "receive": ["get"], "newspaper": ["paper"] },
      vocab: ["window", "Does he receive", "newspaper early"]
    }),
    createConversationalLine({
      id: "B02L01A08", role: "target",
      es: "Carlos sostiene un paquete grande y le pregunta: '¿Qué contiene esta caja pesada?'",
      en: "Carlos holds a large parcel and asks her, 'What does this heavy box contain?'",
      accepted: ["Carlos holds a big package and asks her, 'What does this heavy box hold?'"],
      synonyms: { "contain": ["hold"], "large": ["big"] },
      vocab: ["large parcel", "What does", "heavy box contain"]
    }),
    createConversationalLine({
      id: "B02L01A09", role: "target",
      es: "Elena revisa el sello postal y le pregunta: '¿Dónde vive el remitente de esta postal?'",
      en: "Elena checks the postal stamp and asks him, 'Where does the sender of this postcard live?'",
      accepted: ["Elena inspects the stamp and asks him, 'Where does the author of this card live?'"],
      synonyms: { "sender": ["author"], "postcard": ["card"] },
      vocab: ["postal stamp", "Where does sender live", "postcard"]
    }),
    createConversationalLine({
      id: "B02L01A10", role: "target",
      es: "Carlos escucha el saludo de los vecinos y le pregunta: '¿Por qué agradece la gente cada entrega?'",
      en: "Carlos hears neighbors greetings and asks her, 'Why do people thank for every delivery?'",
      accepted: ["Carlos hears neighbors greetings and asks her, 'Why are people grateful for every parcel?'"],
      synonyms: { "thank": ["show gratitude"] },
      vocab: ["greetings", "Why do people thank", "delivery"]
    }),
    createConversationalLine({
      id: "B02L01A11", role: "target",
      es: "Elena entrega la última carta y le dice: '¡Cumplimos nuestra misión con alegría!'",
      en: "Elena delivers the last letter and tells him, 'We fulfill our mission with joy!'",
      accepted: ["Elena hands over the last letter and says to him, 'We complete our duty joyfully!'"],
      synonyms: { "fulfill": ["complete"], "joy": ["happiness"] },
      vocab: ["delivers letter", "fulfill mission", "joy"]
    }),
    createConversationalLine({
      id: "B02L01A12", role: "context",
      es: "El sol brilla en la plaza mientras los dos amigos regresan satisfechos a la central.",
      en: "The sun shines on the square while both friends return satisfied to the main office.",
      accepted: ["Sunlight fills the plaza while both friends head back happily to headquarters."],
      synonyms: { "square": ["plaza"], "satisfied": ["happily"] },
      vocab: ["sun shines", "friends return", "main office"]
    })
  ]
};

// Story B02L01B: La Escuela de Música del Barrio (David y Sara)
b2.lessons[0].stories[1] = {
  story_id: "B02L01B",
  title: "La Escuela de Música del Barrio",
  type: "conversation",
  value: "Diálogo sobre ensayos y melodías en la escuela de música",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B02L01B01", role: "context",
      es: "David y Sara afinan sus guitarras en el salón de ensayo de la academia.",
      en: "David and Sara tune their guitars in the rehearsal room of the academy.",
      accepted: ["David and Sara tune their instruments in the practice room of the music school."],
      synonyms: { "rehearsal room": ["practice room"], "academy": ["music school"] },
      vocab: ["tune guitars", "rehearsal room", "academy"]
    }),
    createConversationalLine({
      id: "B02L01B02", role: "target",
      es: "David toca los primeros acordes y le dice: 'Yo practico las escalas todas las tardes.'",
      en: "David plays the first chords and tells her, 'I practice scales every afternoon.'",
      accepted: ["David strums the opening chords and tells her, 'I practice music scales each afternoon.'"],
      synonyms: { "plays": ["strums"], "first": ["opening"] },
      vocab: ["first chords", "practice scales", "afternoon"]
    }),
    createConversationalLine({
      id: "B02L01B03", role: "target",
      es: "Sara ajusta las cuerdas de nylon: 'Nosotros tocamos canciones tradicionales colombianas.'",
      en: "Sara adjusts the nylon strings: 'We play traditional Colombian songs.'",
      accepted: ["Sara fixes the guitar strings: 'We perform classic Colombian songs.'"],
      synonyms: { "play": ["perform"], "traditional": ["classic"] },
      vocab: ["nylon strings", "play traditional songs"]
    }),
    createConversationalLine({
      id: "B02L01B04", role: "target",
      es: "David mira el atril con partituras: 'El profesor no permite instrumentos desafinados.'",
      en: "David looks at the music stand: 'The teacher does not allow untuned instruments.'",
      accepted: ["David checks the music stand: 'The instructor doesn't accept out-of-tune instruments.'"],
      synonyms: { "teacher": ["instructor"], "does not allow": ["doesn't allow"] },
      vocab: ["music stand", "teacher", "does not allow", "untuned"]
    }),
    createConversationalLine({
      id: "B02L01B05", role: "target",
      es: "Sara sonríe con confianza: 'Nosotros no perdemos el compás de la cumbia.'",
      en: "Sara smiles with confidence: 'We do not lose the rhythm of the cumbia.'",
      accepted: ["Sara smiles confidently: 'We don't miss the beat of the cumbia.'"],
      synonyms: { "rhythm": ["beat"], "lose": ["miss"] },
      vocab: ["confidence", "do not lose", "rhythm"]
    }),
    createConversationalLine({
      id: "B02L01B06", role: "target",
      es: "David señala el piano de cola y le pregunta: '¿Tocas tú también el teclado?'",
      en: "David points at the grand piano and asks her, 'Do you play the keyboard too?'",
      accepted: ["David points to the grand piano and asks her, 'Do you play the piano as well?'"],
      synonyms: { "keyboard": ["piano"], "too": ["as well"] },
      vocab: ["grand piano", "Do you play", "keyboard"]
    }),
    createConversationalLine({
      id: "B02L01B07", role: "target",
      es: "Sara mira al baterista y le pregunta: '¿Mantiene él el tempo con el metrónomo?'",
      en: "Sara looks at the drummer and asks him, 'Does he keep time with the metronome?'",
      accepted: ["Sara looks at the percussionist and asks him, 'Does he follow the metronome tempo?'"],
      synonyms: { "drummer": ["percussionist"] },
      vocab: ["drummer", "Does he keep time", "metronome"]
    }),
    createConversationalLine({
      id: "B02L01B08", role: "target",
      es: "David lee la partitura nueva y le pregunta: '¿Qué compás marca el inicio de la melodía?'",
      en: "David reads the new sheet music and asks her, 'What measure marks the start of the melody?'",
      accepted: ["David reads the score and asks her, 'What bar signals the start of the tune?'"],
      synonyms: { "measure": ["bar"], "melody": ["tune"] },
      vocab: ["sheet music", "What measure marks", "start of melody"]
    }),
    createConversationalLine({
      id: "B02L01B09", role: "target",
      es: "Sara busca las plumillas de repuesto y le pregunta: '¿Dónde guardan los cables del amplificador?'",
      en: "Sara looks for spare picks and asks him, 'Where do they store the amplifier cables?'",
      accepted: ["Sara searches for guitar picks and asks him, 'Where do they keep the amp wires?'"],
      synonyms: { "store": ["keep"], "cables": ["wires"] },
      vocab: ["spare picks", "Where do they store", "amplifier cables"]
    }),
    createConversationalLine({
      id: "B02L01B10", role: "target",
      es: "David escucha la armonía del grupo y le pregunta: '¿Por qué suena tan alegre este bambuco?'",
      en: "David listens to the group harmony and asks her, 'Why does this folk song sound so cheerful?'",
      accepted: ["David hears the ensemble harmony and asks her, 'Why does this tune sound so joyful?'"],
      synonyms: { "cheerful": ["joyful", "happy"] },
      vocab: ["group harmony", "Why does it sound", "cheerful"]
    }),
    createConversationalLine({
      id: "B02L01B11", role: "target",
      es: "Sara sonríe emocionada y le dice: '¡Nuestra banda conquista el escenario del festival!'",
      en: "Sara smiles excitedly and tells him, 'Our band conquers the festival stage!'",
      accepted: ["Sara smiles with joy and says to him, 'Our group shines on the festival stage!'"],
      synonyms: { "conquers": ["shines on"] },
      vocab: ["smiles excitedly", "Our band conquers", "festival stage"]
    }),
    createConversationalLine({
      id: "B02L01B12", role: "context",
      es: "Los aplausos de los estudiantes llenan el auditorio mientras suena el acorde final.",
      en: "Student applause fills the auditorium as the final chord rings out.",
      accepted: ["Cheers from students echo in the hall as the final chord echoes."],
      synonyms: { "applause": ["cheers"] },
      vocab: ["applause", "auditorium", "final chord rings"]
    })
  ]
};

// Story B02L01C: El Refugio de Mascotas del Parque (Julián y Paola)
b2.lessons[0].stories[2] = {
  story_id: "B02L01C",
  title: "El Refugio de Mascotas del Parque",
  type: "conversation",
  value: "Diálogo de cuidado animal en el refugio",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B02L01C01", role: "context",
      es: "Julián y Paola preparan los platos de comida en el refugio de animales del parque.",
      en: "Julian and Paola prepare the food bowls in the park animal shelter.",
      accepted: ["Julian and Paola ready the food dishes at the local animal shelter."],
      synonyms: { "bowls": ["dishes"] },
      vocab: ["prepare", "food bowls", "animal shelter", "park"]
    }),
    createConversationalLine({
      id: "B02L01C02", role: "target",
      es: "Julián acaricia a un cachorro rescatado: 'Yo paseo a los perros pequeños en el pasto.'",
      en: "Julian pets a rescued puppy: 'I walk the small dogs on the grass.'",
      accepted: ["Julian strokes a rescued puppy: 'I walk the little dogs on the lawn.'"],
      synonyms: { "pets": ["strokes"], "small": ["little"] },
      vocab: ["rescued puppy", "walk dogs", "grass"]
    }),
    createConversationalLine({
      id: "B02L01C03", role: "target",
      es: "Paola limpia los corrales con agua fresca: 'Nosotros cuidamos la salud de cada mascota.'",
      en: "Paola cleans the pens with fresh water: 'We take care of each pet health.'",
      accepted: ["Paola washes the cages with clean water: 'We look after every pet well-being.'"],
      synonyms: { "take care of": ["look after"] },
      vocab: ["cleans pens", "take care", "pet health"]
    }),
    createConversationalLine({
      id: "B02L01C04", role: "target",
      es: "Julián revisa el registro veterinario: 'El gato tímido no come comida dura.'",
      en: "Julian checks the vet log: 'The shy cat does not eat hard food.'",
      accepted: ["Julian inspects the vet record: 'The timid cat doesn't eat dry food.'"],
      synonyms: { "shy": ["timid"], "hard": ["dry"] },
      vocab: ["vet log", "shy cat", "does not eat", "hard food"]
    }),
    createConversationalLine({
      id: "B02L01C05", role: "target",
      es: "Paola sonríe al cepillar el pelaje: 'Nosotros no usamos productos químicos fuertes.'",
      en: "Paola smiles while brushing the fur: 'We do not use harsh chemical products.'",
      accepted: ["Paola smiles while combing the fur: 'We don't use aggressive chemical items.'"],
      synonyms: { "harsh": ["aggressive"] },
      vocab: ["brushing fur", "do not use", "chemical products"]
    }),
    createConversationalLine({
      id: "B02L01C06", role: "target",
      es: "Julián señala la pelota de goma y le pregunta: '¿Juegas tú con los cachorros inquietos?'",
      en: "Julian points at the rubber ball and asks her, 'Do you play with the energetic puppies?'",
      accepted: ["Julian points to the toy ball and asks her, 'Do you play with the lively puppies?'"],
      synonyms: { "energetic": ["lively", "playful"] },
      vocab: ["rubber ball", "Do you play", "energetic puppies"]
    }),
    createConversationalLine({
      id: "B02L01C07", role: "target",
      es: "Paola mira al veterinario y le pregunta: '¿Examina él a las nuevas mascotas cada semana?'",
      en: "Paola looks at the vet and asks him, 'Does he examine the new pets every week?'",
      accepted: ["Paola looks at the veterinarian and asks him, 'Does he check the new animals each week?'"],
      synonyms: { "examine": ["check"] },
      vocab: ["vet", "Does he examine", "new pets weekly"]
    }),
    createConversationalLine({
      id: "B02L01C08", role: "target",
      es: "Julián revisa la planilla de adopciones y le pregunta: '¿Qué familia adopta al perro labrador?'",
      en: "Julian checks the adoption form and asks her, 'What family adopts the Labrador dog?'",
      accepted: ["Julian inspects the adoption sheet and asks her, 'Which family adopts the Labrador dog?'"],
      synonyms: { "What": ["Which"] },
      vocab: ["adoption form", "What family adopts", "Labrador dog"]
    }),
    createConversationalLine({
      id: "B02L01C09", role: "target",
      es: "Paola busca las cobijas térmicas y le pregunta: '¿Dónde duermen los gatitos recién nacidos?'",
      en: "Paola looks for thermal blankets and asks him, 'Where do the newborn kittens sleep?'",
      accepted: ["Paola searches for warm blankets and asks him, 'Where do the baby kittens sleep?'"],
      synonyms: { "thermal": ["warm"], "newborn": ["baby"] },
      vocab: ["thermal blankets", "Where do kittens sleep"]
    }),
    createConversationalLine({
      id: "B02L01C10", role: "target",
      es: "Julián observa a los voluntarios y le pregunta: '¿Por qué ayuda tanta gente en el refugio?'",
      en: "Julian watches the volunteers and asks her, 'Why do so many people help at the shelter?'",
      accepted: ["Julian observes the volunteers and asks her, 'Why do many helpers support the shelter?'"],
      synonyms: { "volunteers": ["helpers"] },
      vocab: ["volunteers", "Why do people help", "shelter"]
    }),
    createConversationalLine({
      id: "B02L01C11", role: "target",
      es: "Paola abraza a una familia feliz y le dice: '¡Encontramos un hogar lleno de amor para todos!'",
      en: "Paola hugs a happy family and tells him, 'We find a loving home for everyone!'",
      accepted: ["Paola embraces a joyful family and says to him, 'We provide a warm home for all!'"],
      synonyms: { "loving": ["warm"] },
      vocab: ["hugs family", "find loving home", "everyone"]
    }),
    createConversationalLine({
      id: "B02L01C12", role: "context",
      es: "Los perritos mueven la cola con alegría mientras los visitantes sonríen con ternura.",
      en: "The puppies wag their tails joyfully while visitors smile with tenderness.",
      accepted: ["The dogs wag their tails happily while adopters smile warmly."],
      synonyms: { "tenderness": ["warmth"] },
      vocab: ["wag tails joyfully", "visitors smile", "tenderness"]
    })
  ]
};

// Write updated JSON back
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('✅ Block 2 Lesson 7 fully updated with handcrafted 360° dialogues, Colombian Spanish & synonym mappings!');
