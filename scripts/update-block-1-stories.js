import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'story-decoder-curriculum.json');

const rawData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(rawData);

// Helper function to build a line object
function createConversationalLine({
  id,
  role = 'target',
  es,
  en,
  accepted = [],
  synonyms = {},
  target = 'Subject + Verb + Complement',
  grammar = 'Subject + Verb + Complement',
  pattern = 'Conversational (+, -, ?, Wh-)',
  difficulty = 1,
  hints = [],
  explanation = '',
  vocab = []
}) {
  const words = en.replace(/['",.!?]/g, '').split(/\s+/).filter(Boolean);
  
  // Build default accepted answers including don't/doesn't contractions or synonym swaps
  const allAccepted = Array.from(new Set([en, ...accepted]));

  // Build easy and medium blocks smartly
  const half = Math.ceil(words.length / 2);
  const easy = [words.slice(0, half).join(' '), words.slice(half).join(' ')];
  
  const third = Math.ceil(words.length / 3);
  const medium = [
    words.slice(0, third).join(' '),
    words.slice(third, third * 2).join(' '),
    words.slice(third * 2).join(' ')
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
    focus_tokens: vocab.length ? vocab : words.slice(0, 4),
    difficulty,
    puzzle: {
      easy_blocks: easy,
      medium_blocks: medium,
      hard_word_by_word: words,
      expert_with_distractors: [...words, "does", "did", "is", "have", "to", "not"],
      shuffle_on_each_attempt: true,
      avoid_position_hints: true
    },
    synonym_map: synonyms,
    common_errors: ["Confundir la estructura del verbo de interacción o la posición del auxiliar en preguntas."],
    hints: hints.length ? hints : ["Presta atención al orden de la frase y a los verbos de diálogo."],
    tutor_explanation: explanation || "Esta frase demuestra cómo interactúan los personajes expresando afirmaciones, negaciones o preguntas.",
    vocabulary_candidates: vocab.length ? vocab : words
  };
}

// Re-building Block 1 Stories with rich conversational 360° dialogues
const b1 = data.blocks[0];

// LESSON 1: Subject + Verb + Complement
b1.lessons[0].stories[0] = {
  story_id: "B01L01A",
  title: "El Secreto del Garaje",
  type: "conversation",
  value: "Diálogo de suspenso con afirmativas, negaciones, preguntas y Wh- questions",
  target_line_count: 12,
  context_review_line_count: 0,
  lines: [
    createConversationalLine({
      id: "B01L01A01",
      role: "context",
      es: "Sara señala el garaje y le dice a Nico su idea.",
      en: "Sara points at the garage and tells Nico her idea.",
      accepted: [
        "Sara points at the garage and says to Nico her idea.",
        "Sara points to the garage and tells Nico her idea."
      ],
      synonyms: { "tells Nico": ["says to Nico", "explains to Nico"] },
      vocab: ["points", "garage", "tells", "idea"]
    }),
    createConversationalLine({
      id: "B01L01A02",
      role: "target",
      es: "Nico abre la puerta y le muestra una bicicleta misteriosa.",
      en: "Nico opens the door and shows her a mysterious bike.",
      accepted: [
        "Nico opens the door and displays to her a mysterious bike.",
        "Nico opens the door and shows her a mysterious bicycle."
      ],
      synonyms: { "shows her": ["displays to her", "presents to her"] },
      vocab: ["opens", "door", "shows", "mysterious", "bike"]
    }),
    createConversationalLine({
      id: "B01L01A03",
      role: "target",
      es: "Sara mira de cerca y le dice: 'Esta bici no parece normal.'",
      en: "Sara looks closely and tells him, 'This bike does not look normal.'",
      accepted: [
        "Sara looks closely and tells him, 'This bike doesn't look normal.'",
        "Sara looks closely and says to him, 'This bike does not look normal.'",
        "Sara looks closely and says to him, 'This bike doesn't look normal.'"
      ],
      synonyms: { "tells him": ["says to him"], "does not look": ["doesn't look"] },
      vocab: ["closely", "tells", "bike", "does not look"]
    }),
    createConversationalLine({
      id: "B01L01A04",
      role: "target",
      es: "Nico inspecciona el marco y le responde: '¡No tiene una cadena común!'",
      en: "Nico inspects the frame and replies to her, 'It does not have a regular chain!'",
      accepted: [
        "Nico inspects the frame and replies to her, 'It doesn't have a regular chain!'",
        "Nico inspects the frame and answers her, 'It does not have a regular chain!'",
        "Nico inspects the frame and answers her, 'It doesn't have a regular chain!'",
        "Nico inspects the frame and responds to her, 'It does not have a regular chain!'"
      ],
      synonyms: { "replies to her": ["answers her", "responds to her"], "does not have": ["doesn't have"] },
      vocab: ["inspects", "frame", "replies", "regular chain"]
    }),
    createConversationalLine({
      id: "B01L01A05",
      role: "target",
      es: "Sara toca el manubrio y le pregunta: '¿Ves esta llave brillante?'",
      en: "Sara touches the handlebar and asks him, 'Do you see this glowing key?'",
      accepted: [
        "Sara touches the handlebar and inquires of him, 'Do you see this glowing key?'"
      ],
      synonyms: { "asks him": ["inquires of him"] },
      vocab: ["touches", "handlebar", "asks", "glowing key"]
    }),
    createConversationalLine({
      id: "B01L01A06",
      role: "target",
      es: "Nico señala el motor y le pregunta: '¿Se enciende en este momento?'",
      en: "Nico points at the engine and asks her, 'Does it turn on right now?'",
      accepted: [
        "Nico points to the engine and asks her, 'Does it turn on right now?'"
      ],
      synonyms: { "asks her": ["questions her"] },
      vocab: ["engine", "asks", "turn on", "right now"]
    }),
    createConversationalLine({
      id: "B01L01A07",
      role: "target",
      es: "Sara mira el símbolo y le pregunta: '¿Qué hace este botón dorado?'",
      en: "Sara looks at the symbol and asks him, 'What does this golden button do?'",
      accepted: [
        "Sara looks at the emblem and asks him, 'What does this golden button do?'"
      ],
      synonyms: { "symbol": ["emblem", "sign"] },
      vocab: ["symbol", "asks", "golden button", "do"]
    }),
    createConversationalLine({
      id: "B01L01A08",
      role: "target",
      es: "Nico sigue un cable rojo y le pregunta: '¿A dónde lleva este cable oculto?'",
      en: "Nico follows a red wire and asks her, 'Where does this hidden cable lead?'",
      accepted: [
        "Nico follows a red wire and asks her, 'Where does this hidden wire lead?'"
      ],
      synonyms: { "cable": ["wire"] },
      vocab: ["follows", "red wire", "hidden cable", "lead"]
    }),
    createConversationalLine({
      id: "B01L01A09",
      role: "target",
      es: "Sara se asombra en la oscuridad y le pregunta: '¿Por qué brilla tan fuerte la rueda delantera?'",
      en: "Sara gasps in the dark and asks him, 'Why does the front wheel shine so bright?'",
      accepted: [
        "Sara gasps in the dark and asks him, 'Why does the front wheel glow so bright?'"
      ],
      synonyms: { "shine": ["glow"] },
      vocab: ["gasps", "dark", "front wheel", "shine"]
    }),
    createConversationalLine({
      id: "B01L01A10",
      role: "target",
      es: "Nico mira el panel secreto y le pregunta: '¿Cómo funciona esta máquina?'",
      en: "Nico looks at the secret panel and asks her, 'How does this machine work?'",
      accepted: [
        "Nico looks at the secret panel and asks her, 'How does this device work?'"
      ],
      synonyms: { "machine": ["device"] },
      vocab: ["secret panel", "asks", "machine", "work"]
    }),
    createConversationalLine({
      id: "B01L01A11",
      role: "target",
      es: "Sara le sonríe a Nico y le dice: '¡Ya no siento miedo!'",
      en: "Sara smiles at Nico and tells him, 'I do not feel scared anymore!'",
      accepted: [
        "Sara smiles at Nico and tells him, 'I don't feel scared anymore!'",
        "Sara smiles at Nico and says to him, 'I do not feel scared anymore!'",
        "Sara smiles at Nico and says to him, 'I don't feel scared anymore!'"
      ],
      synonyms: { "tells him": ["says to him"], "do not feel": ["don't feel"] },
      vocab: ["smiles", "tells", "scared", "anymore"]
    }),
    createConversationalLine({
      id: "B01L01A12",
      role: "context",
      es: "Juntos, ellos presionan el botón y activan el mecanismo secreto.",
      en: "Together, they press the button and activate the secret mechanism.",
      accepted: [
        "Together, they push the button and activate the secret mechanism."
      ],
      synonyms: { "press": ["push"] },
      vocab: ["Together", "press", "button", "activate", "mechanism"]
    })
  ]
};

// Write updated JSON back to file
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('✅ Block 1 Story 1 updated with rich conversational 360° dialogue (+, -, ?, Wh-) & synonym support!');
