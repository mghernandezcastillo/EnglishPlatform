import fs from 'fs';

const TARGET_FILE = 'src/data/curriculumTeensStudio.ts';

const final3 = {
  "c-teens-elite-8": [
    { label: "Executive Style", color: "#EF4444", prompt: "When you lead a group meeting with classmates, are you democratic or do you take full control of decisions?", es: "¿Cuando lideras una reunión de grupo con compañeros, eres democrático o tomas el control total?" },
    { label: "Resolving Conflict", color: "#F59E0B", prompt: "How do you handle two friends on your team who strongly disagree on the direction of a project?", es: "¿Cómo manejas a dos amigos de tu equipo que están en desacuerdo total sobre el rumbo de un proyecto?" },
    { label: "Voting Decisions", color: "#10B981", prompt: "Do you prefer group decisions made by majority vote or through open unanimous consensus?", es: "¿Prefieres decisiones grupales tomadas por votación de mayoría o por consenso unánime?" },
    { label: "Tough Feedback", color: "#3B82F6", prompt: "How do you tell a close friend on your board that their proposal won't work without offending them?", es: "¿Cómo le dices a un amigo cercano de tu equipo que su propuesta no funcionará sin ofenderlo?" },
    { label: "Time Management", color: "#8B5CF6", prompt: "What is your personal secret to keeping group meetings short, focused, and productive?", es: "¿Cuál es tu secreto personal para que las reuniones de grupo sean cortas, enfocadas y productivas?" },
    { label: "Dream Boardroom", color: "#EC4899", prompt: "If you were invited to sit on the advisory board of Spotify or Nike, what fresh advice would you give them?", es: "¿Si te invitaran a la junta asesora de Spotify o Nike, qué consejo fresco les darías?" }
  ],

  "c-teens-elite-11": [
    { label: "Dream Startup Idea", color: "#EF4444", prompt: "If you had five million dollars of venture capital to build an app with your friends, what would it do?", es: "¿Si tuvieras cinco millones de dólares para crear una app con tus amigos, qué haría?" },
    { label: "Elevator Pitch", color: "#F59E0B", prompt: "How would you describe your greatest passion or project in just thirty seconds to a global investor?", es: "¿Cómo describirías tu mayor pasión o proyecto en solo treinta segundos a un inversionista global?" },
    { label: "Winning the Crowd", color: "#10B981", prompt: "What is the key to captivating an audience and making people truly believe in your vision?", es: "¿Cuál es la clave para cautivar a una audiencia y hacer que crean verdaderamente en tu visión?" },
    { label: "Handling Tough Questions", color: "#3B82F6", prompt: "When an investor or judge challenges your idea, how do you defend yourself with poise and confidence?", es: "¿Cuando un jurado o inversionista cuestiona tu idea, cómo te defiendes con aplomo y seguridad?" },
    { label: "Tech Changing Lives", color: "#8B5CF6", prompt: "What technology in your daily life has transformed the way you learn and connect the most?", es: "¿Qué tecnología en tu vida diaria ha transformado más la forma en que aprendes y te conectas?" },
    { label: "Capstone Triumph", color: "#EC4899", prompt: "Looking back at your entire journey through Level 9 Elite, what is the greatest mindset shift you experienced?", es: "¿Mirando todo tu recorrido en el Nivel 9 Elite, cuál es el mayor cambio de mentalidad que viviste?" }
  ],

  "c-teens-masters-1": [
    { label: "Debate Passion", color: "#EF4444", prompt: "Do you enjoy defending a point of view with sharp arguments, or do you prefer avoiding conflict?", es: "¿Disfrutas defender un punto de vista con argumentos afilados o prefieres evitar el conflicto?" },
    { label: "Free Speech Limits", color: "#F59E0B", prompt: "In your opinion, should online freedom of speech be absolute or are content filters necessary to protect users?", es: "¿En tu opinión, la libertad de expresión en internet debe ser absoluta o se necesitan filtros para proteger a los usuarios?" },
    { label: "AI Regulation Debate", color: "#10B981", prompt: "If you debated the CEO of OpenAI, what critical question would you challenge them with regarding teenage AI use?", es: "¿Si debatieras con el CEO de OpenAI, con qué pregunta crítica lo desafiarías sobre el uso de IA en jóvenes?" },
    { label: "Winning an Argument", color: "#3B82F6", prompt: "What matters more when winning a high-stakes debate: having flawless facts or connecting emotionally with the room?", es: "¿Qué importa más al ganar un debate clave: tener datos impecables o conectar emocionalmente con el público?" },
    { label: "Changing Your Mind", color: "#8B5CF6", prompt: "Tell me about a topic where your opinion completely shifted after hearing someone else's brilliant counterargument!", es: "¿Cuéntame de un tema donde tu opinión cambió por completo tras escuchar el argumento brillante de otra persona?" },
    { label: "Masters Opening Spark", color: "#EC4899", prompt: "As you step into the Masters level today, what is your personal ambition for mastering high-level English?", es: "¿Al iniciar el nivel Masters hoy, cuál es tu ambición personal para dominar el inglés de alto nivel?" }
  ]
};

let content = fs.readFileSync(TARGET_FILE, 'utf8');

function findWheelSlideForClass(fileContent, classId) {
  const classIdx = fileContent.indexOf(`"id": "${classId}"`);
  if (classIdx === -1) return null;

  const nextClassIdx = fileContent.indexOf('"id": "c-teens-', classIdx + 20);
  const classEnd = nextClassIdx !== -1 ? nextClassIdx : fileContent.length;
  const classSub = fileContent.slice(classIdx, classEnd);

  const wheelSlideIdx = classSub.indexOf('"type": "spinning-wheel"');
  if (wheelSlideIdx === -1) return null;

  const wheelItemsIdx = classSub.indexOf('"wheelItems": [', wheelSlideIdx);
  if (wheelItemsIdx === -1) return null;

  let depth = 0;
  let arrayEnd = -1;
  const startPos = wheelItemsIdx + '"wheelItems": ['.length - 1;
  for (let i = startPos; i < classSub.length; i++) {
    if (classSub[i] === '[') depth++;
    else if (classSub[i] === ']') {
      depth--;
      if (depth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }

  if (arrayEnd === -1) return null;

  return {
    classId,
    wheelItemsStart: classIdx + wheelItemsIdx,
    wheelItemsEnd: classIdx + arrayEnd
  };
}

const targets = [];
for (const classId of Object.keys(final3)) {
  const loc = findWheelSlideForClass(content, classId);
  if (loc) {
    targets.push({ ...loc, newItems: final3[classId] });
  } else {
    console.error(`Could not locate ${classId}`);
  }
}

targets.sort((a, b) => b.wheelItemsStart - a.wheelItemsStart);

for (const t of targets) {
  const formattedItems = JSON.stringify(t.newItems, null, 18)
    .replace(/^\[/, '[\n')
    .replace(/\]$/, '\n                ]');
  const replacementText = `"wheelItems": ${formattedItems}`;
  content = content.slice(0, t.wheelItemsStart) + replacementText + content.slice(t.wheelItemsEnd);
}

fs.writeFileSync(TARGET_FILE, content, 'utf8');
console.log('✅ Final 3 classes replaced successfully!');
