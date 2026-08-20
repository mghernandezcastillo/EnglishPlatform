import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lessons = new Map(curriculum.blocks[9].lessons.map((lesson) => [lesson.lesson_id, lesson]));

const contextPattern = 'contexto narrativo y repaso acumulativo';
const stopwords = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'if', 'when', 'while', 'to', 'of', 'in', 'on', 'at', 'for', 'with',
  'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'that', 'this', 'these', 'those',
  'it', 'they', 'he', 'she', 'we', 'you', 'i', 'me', 'my', 'your', 'our', 'their', 'his', 'her', 'its',
  'not', 'no', 'from', 'by', 'into', 'over', 'under', 'before', 'after', 'again', 'more', 'most', 'less',
]);

function autoTokens(en, limit = 5) {
  const raw = en
    .replace(/[^A-Za-zÀ-ÿ0-9' ]/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token) => !stopwords.has(token.toLowerCase()));

  const seen = new Set();
  const unique = [];
  for (const token of raw) {
    const key = token.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(token);
    if (unique.length >= limit) break;
  }
  return unique;
}

function patchContextLine(story, lineIndex, es, en) {
  const line = story.lines[lineIndex];
  line.es = es;
  line.en = en;
  line.preferred_answer = en;
  line.accepted_answers = [en];
  line.line_role = 'context';
  line.grammar_focus = contextPattern;
  line.pattern = contextPattern;
  const tokens = autoTokens(en, 5);
  line.focus_tokens = tokens;
  line.vocabulary_candidates = [...tokens];
  line.common_errors = ['Hacer la escena demasiado genérica o repetida'];
  line.hints = ['La escena debe apoyar la transformación de lo que alguien dijo, preguntó o pidió'];
  line.tutor_explanation = 'La línea abre o cierra la historia antes de las frases que practican reported speech o indirect questions.';
}

function patchStory(story, meta, updates) {
  story.title = meta.title;
  story.type = meta.type;
  story.value = meta.value;
  for (const [indexText, spec] of Object.entries(updates)) {
    patchContextLine(story, Number(indexText), spec.es, spec.en);
  }
}

const lessonUpdates = {
  70: [
    {
      meta: { title: 'El parque y el mensaje contado', type: 'Descubrimiento', value: 'memoria' },
      lines: {
        0: {
          es: 'En el parque, el grupo recuerda una conversación de hace unos minutos.',
          en: 'At the park, the group remembers a conversation from a few minutes ago.',
        },
        4: {
          es: 'Paula dejó un mensaje claro y todos quieren repetirlo bien.',
          en: 'Paula left a clear message and everyone wants to repeat it well.',
        },
        8: {
          es: 'Bruno toma notas para no perder ningún detalle.',
          en: 'Bruno takes notes so he does not miss any detail.',
        },
        11: {
          es: 'Al final, convierten la conversación en un resumen ordenado.',
          en: 'In the end, they turn the conversation into an organized summary.',
        },
      },
    },
    {
      meta: { title: 'La tienda y el aviso compartido', type: 'Uso natural', value: 'claridad' },
      lines: {
        0: {
          es: 'En la tienda, una persona repite lo que dijo la encargada.',
          en: 'In the shop, someone repeats what the manager said.',
        },
        4: {
          es: 'Laura escucha el aviso y lo anota con cuidado.',
          en: 'Laura listens to the announcement and writes it down carefully.',
        },
        8: {
          es: 'Samuel compara dos versiones para encontrar la correcta.',
          en: 'Samuel compares two versions to find the correct one.',
        },
        11: {
          es: 'Cuando terminan, el mensaje queda claro para todos.',
          en: 'When they finish, the message is clear for everyone.',
        },
      },
    },
    {
      meta: { title: 'La estación y la noticia del viaje', type: 'Integración', value: 'información' },
      lines: {
        0: {
          es: 'En la estación, varias personas comentan cambios en el horario.',
          en: 'At the station, several people comment on schedule changes.',
        },
        4: {
          es: 'Valeria escucha lo que dijeron sobre el próximo tren.',
          en: 'Valeria listens to what they said about the next train.',
        },
        8: {
          es: 'Felipe repite la noticia para que nadie se confunda.',
          en: 'Felipe repeats the news so nobody gets confused.',
        },
        11: {
          es: 'Al final, el grupo entiende quién dijo qué sobre el viaje.',
          en: 'In the end, the group understands who said what about the trip.',
        },
      },
    },
  ],
  71: [
    {
      meta: { title: 'La plaza y lo que estaba pasando', type: 'Descubrimiento', value: 'tiempo' },
      lines: {
        0: {
          es: 'Observan a personas moviéndose rápido mientras otras ya habían terminado.',
          en: 'They watch people moving quickly while others had already finished.',
        },
        4: {
          es: 'La gente explica qué estaba haciendo cuando llegó ayuda.',
          en: 'People explain what they were doing when help arrived.',
        },
        8: {
          es: 'Todos comparan lo que ocurría con lo que ya había terminado.',
          en: 'Everyone compares what was happening with what had already ended.',
        },
        11: {
          es: 'Al final, escriben la historia usando el tiempo correcto.',
          en: 'In the end, they write the story using the correct tense.',
        },
      },
    },
    {
      meta: { title: 'El laboratorio y lo que ya había ocurrido', type: 'Uso natural', value: 'precisión' },
      lines: {
        0: {
          es: 'En el laboratorio, la conversación gira alrededor de una prueba larga.',
          en: 'In the lab, the conversation revolves around a long experiment.',
        },
        4: {
          es: 'Adriana cuenta qué estaba midiendo cuando sonó la alarma.',
          en: 'Adriana tells what she was measuring when the alarm sounded.',
        },
        8: {
          es: 'Iván explica qué ya había preparado antes de salir.',
          en: 'Iván explains what he had already prepared before leaving.',
        },
        11: {
          es: 'Al final, la cronología queda clara para todo el grupo.',
          en: 'In the end, the timeline is clear for the whole group.',
        },
      },
    },
    {
      meta: { title: 'El edificio y el informe final', type: 'Integración', value: 'secuencia' },
      lines: {
        0: {
          es: 'En el edificio, los vecinos reconstruyen lo que ocurrió durante la mañana.',
          en: 'In the building, the neighbors rebuild what happened during the morning.',
        },
        4: {
          es: 'Marcos relata lo que estaba haciendo cuando llegó el mensaje.',
          en: 'Marcos tells what he was doing when the message arrived.',
        },
        8: {
          es: 'Isabel cuenta qué había terminado antes de la reunión.',
          en: 'Isabel says what she had finished before the meeting.',
        },
        11: {
          es: 'Al final, el informe deja claras las acciones y sus momentos.',
          en: 'In the end, the report makes the actions and their timing clear.',
        },
      },
    },
  ],
  72: [
    {
      meta: { title: 'El jardín y las promesas del equipo', type: 'Descubrimiento', value: 'posibilidad' },
      lines: {
        0: {
          es: 'En el jardín, el equipo comenta lo que alguien prometió hacer.',
          en: 'In the garden, the team comments on what someone promised to do.',
        },
        4: {
          es: 'Paula recuerda que el grupo dijo que ayudaría más tarde.',
          en: 'Paula remembers that the group said it would help later.',
        },
        8: {
          es: 'Bruno cuenta que alguien podía resolver el problema.',
          en: 'Bruno says that someone could solve the problem.',
        },
        11: {
          es: 'Al final, las promesas quedan claras para todos.',
          en: 'In the end, the promises are clear for everyone.',
        },
      },
    },
    {
      meta: { title: 'La escuela y las posibilidades', type: 'Uso natural', value: 'decisión' },
      lines: {
        0: {
          es: 'En la escuela, el grupo revisa lo que la directora permitió y anunció.',
          en: 'At school, the group reviews what the principal allowed and announced.',
        },
        4: {
          es: 'Sofía cuenta que podrían cambiar el horario.',
          en: 'Sofía says they could change the schedule.',
        },
        8: {
          es: 'Lucas explica que tal vez llovería más tarde.',
          en: 'Lucas explains that it might rain later.',
        },
        11: {
          es: 'Al final, entienden cómo cambian los modales al reportarlos.',
          en: 'In the end, they understand how modals change when reported.',
        },
      },
    },
    {
      meta: { title: 'La panadería y los permisos', type: 'Integración', value: 'cortesía' },
      lines: {
        0: {
          es: 'En la panadería, todos comentan un pedido importante.',
          en: 'In the bakery, everyone comments on an important order.',
        },
        4: {
          es: 'Elena dice que podría abrir más temprano.',
          en: 'Elena says they could open earlier.',
        },
        8: {
          es: 'Tomás comenta que quizás habría otra opción.',
          en: 'Tomás says there might be another option.',
        },
        11: {
          es: 'Al final, el diálogo suena más flexible y natural.',
          en: 'In the end, the dialogue sounds more flexible and natural.',
        },
      },
    },
  ],
  73: [
    {
      meta: { title: 'El taller y las preguntas del dueño', type: 'Descubrimiento', value: 'escucha' },
      lines: {
        0: {
          es: 'En el taller, alguien pregunta por una herramienta perdida.',
          en: 'In the workshop, someone asks about a missing tool.',
        },
        4: {
          es: 'Sara escucha la pregunta y luego la cuenta con cuidado.',
          en: 'Sara listens to the question and then reports it carefully.',
        },
        8: {
          es: 'Nico repite la duda sin cambiar el sentido.',
          en: 'Nico repeats the question without changing the meaning.',
        },
        11: {
          es: 'Al final, entienden cómo pasar de pregunta directa a reportada.',
          en: 'In the end, they understand how to move from direct to reported questions.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca y la consulta tranquila', type: 'Uso natural', value: 'claridad' },
      lines: {
        0: {
          es: 'En la biblioteca, una consulta corta cambia la conversación.',
          en: 'In the library, a short question changes the conversation.',
        },
        4: {
          es: 'Camila explica qué preguntó la profesora.',
          en: 'Camila explains what the teacher asked.',
        },
        8: {
          es: 'Andrés cuenta cuál era la duda original.',
          en: 'Andrés says what the original doubt was.',
        },
        11: {
          es: 'Al final, la sala queda en silencio y la idea se entiende.',
          en: 'In the end, the room becomes quiet and the idea is understood.',
        },
      },
    },
    {
      meta: { title: 'La casa y la pregunta importante', type: 'Integración', value: 'familia' },
      lines: {
        0: {
          es: 'En la casa, todos quieren saber qué preguntó Mateo.',
          en: 'At home, everyone wants to know what Mateo asked.',
        },
        4: {
          es: 'Julia repite la pregunta con palabras más claras.',
          en: 'Julia repeats the question in clearer words.',
        },
        8: {
          es: 'La familia escucha y vuelve a contar la respuesta.',
          en: 'The family listens and tells the answer again.',
        },
        11: {
          es: 'Al final, la pregunta queda explicada sin duda.',
          en: 'In the end, the question is explained without doubt.',
        },
      },
    },
  ],
  74: [
    {
      meta: { title: 'El parque y la pregunta amable', type: 'Descubrimiento', value: 'cortesía' },
      lines: {
        0: {
          es: 'En el parque, alguien quiere preguntar algo sin sonar brusco.',
          en: 'In the park, someone wants to ask something without sounding rude.',
        },
        4: {
          es: 'Paula usa una forma indirecta para pedir información.',
          en: 'Paula uses an indirect form to ask for information.',
        },
        8: {
          es: 'Bruno escucha y responde con calma.',
          en: 'Bruno listens and answers calmly.',
        },
        11: {
          es: 'Al final, la pregunta suena natural y respetuosa.',
          en: 'In the end, the question sounds natural and respectful.',
        },
      },
    },
    {
      meta: { title: 'La tienda y la duda del cliente', type: 'Uso natural', value: 'servicio' },
      lines: {
        0: {
          es: 'En la tienda, un cliente necesita información sin interrumpir.',
          en: 'In the shop, a customer needs information without interrupting.',
        },
        4: {
          es: 'Laura le muestra cómo pedir el dato de forma indirecta.',
          en: 'Laura shows how to ask for the information indirectly.',
        },
        8: {
          es: 'Samuel repite la duda con palabras más suaves.',
          en: 'Samuel repeats the question in softer words.',
        },
        11: {
          es: 'Al final, la consulta suena educada y clara.',
          en: 'In the end, the inquiry sounds polite and clear.',
        },
      },
    },
    {
      meta: { title: 'La estación y la consulta del horario', type: 'Integración', value: 'orientación' },
      lines: {
        0: {
          es: 'En la estación, una persona quiere preguntar por el horario.',
          en: 'At the station, someone wants to ask about the schedule.',
        },
        4: {
          es: 'Valeria convierte la pregunta en una versión indirecta.',
          en: 'Valeria turns the question into an indirect version.',
        },
        8: {
          es: 'Felipe confirma la información con voz tranquila.',
          en: 'Felipe confirms the information in a calm voice.',
        },
        11: {
          es: 'Al final, la estación se vuelve un buen lugar para practicar.',
          en: 'In the end, the station becomes a good place to practice.',
        },
      },
    },
  ],
  75: [
    {
      meta: { title: 'La plaza y la solicitud formal', type: 'Descubrimiento', value: 'respeto' },
      lines: {
        0: {
          es: 'En la plaza, alguien necesita pedir ayuda de manera formal.',
          en: 'In the square, someone needs to ask for help formally.',
        },
        4: {
          es: 'Emma formula la petición con mucho cuidado.',
          en: 'Emma phrases the request very carefully.',
        },
        8: {
          es: 'Diego responde con una pregunta educada.',
          en: 'Diego responds with a polite question.',
        },
        11: {
          es: 'Al final, todos usan un tono respetuoso y claro.',
          en: 'In the end, everyone uses a respectful and clear tone.',
        },
      },
    },
    {
      meta: { title: 'El laboratorio y el pedido correcto', type: 'Uso natural', value: 'precisión' },
      lines: {
        0: {
          es: 'En el laboratorio, una solicitud formal organiza el trabajo.',
          en: 'In the lab, a formal request organizes the work.',
        },
        4: {
          es: 'Adriana pide que le acerquen el material con educación.',
          en: 'Adriana asks that the materials be brought to her politely.',
        },
        8: {
          es: 'Iván hace una pregunta formal antes de seguir.',
          en: 'Iván asks a formal question before continuing.',
        },
        11: {
          es: 'Al final, la conversación sigue sin perder la cortesía.',
          en: 'In the end, the conversation continues without losing politeness.',
        },
      },
    },
    {
      meta: { title: 'El edificio y las preguntas respetuosas', type: 'Integración', value: 'formalidad' },
      lines: {
        0: {
          es: 'En el edificio, los vecinos preparan una reunión formal.',
          en: 'In the building, the neighbors prepare a formal meeting.',
        },
        4: {
          es: 'Isabel usa una pregunta cuidadosa para abrir la charla.',
          en: 'Isabel uses a careful question to open the talk.',
        },
        8: {
          es: 'Marcos responde con una petición muy clara.',
          en: 'Marcos responds with a very clear request.',
        },
        11: {
          es: 'Al final, el tono formal ayuda a que todos colaboren.',
          en: 'In the end, the formal tone helps everyone cooperate.',
        },
      },
    },
  ],
};

for (const [lessonId, storyUpdates] of Object.entries(lessonUpdates)) {
  const lesson = lessons.get(Number(lessonId));
  if (!lesson) {
    throw new Error(`No se encontró la lección ${lessonId}`);
  }

  storyUpdates.forEach((storyUpdate, index) => {
    patchStory(lesson.stories[index], storyUpdate.meta, storyUpdate.lines);
  });
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`);
