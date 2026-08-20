import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lessons = new Map(curriculum.blocks[10].lessons.map((lesson) => [lesson.lesson_id, lesson]));

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
  line.hints = ['La escena debe preparar el repaso de estructuras finales sin mezclar la consigna'];
  line.tutor_explanation = 'La línea abre o cierra la historia antes de las frases que consolidan el bloque final.';
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
  76: [
    {
      meta: { title: 'La semana del jardín: Reloj y calendario', type: 'Repaso', value: 'secuencia' },
      lines: {
        0: {
          es: 'Revisan ayer, hoy y mañana mientras organizan el jardín.',
          en: 'They review yesterday, today, and tomorrow while organizing the garden.',
        },
        4: {
          es: 'La libreta muestra qué pasó primero y qué vendrá después.',
          en: 'The notebook shows what happened first and what will come next.',
        },
        8: {
          es: 'El grupo compara fechas para no perder el orden.',
          en: 'The group compares dates so they do not lose the order.',
        },
        11: {
          es: 'Al final, el calendario deja clara toda la secuencia.',
          en: 'In the end, the calendar makes the whole sequence clear.',
        },
      },
    },
    {
      meta: { title: 'La feria escolar: Antes, ahora y después', type: 'Práctica', value: 'marcadores' },
      lines: {
        0: {
          es: 'La clase marca qué ocurrió antes, qué pasa ahora y qué pasará después.',
          en: 'The class marks what happened before, what is happening now, and what will happen after.',
        },
        4: {
          es: 'Sofía ordena tarjetas con palabras de tiempo.',
          en: 'Sofía sorts cards with time words.',
        },
        8: {
          es: 'Lucas corrige el orden cuando algo queda fuera de lugar.',
          en: 'Lucas corrects the order when something is out of place.',
        },
        11: {
          es: 'Al final, la feria muestra un panorama completo.',
          en: 'In the end, the fair shows a complete overview.',
        },
      },
    },
    {
      meta: { title: 'La panadería y la agenda del día', type: 'Integración', value: 'rutina' },
      lines: {
        0: {
          es: 'La panadería organiza el día con una lista de momentos clave.',
          en: 'The bakery organizes the day with a list of key moments.',
        },
        4: {
          es: 'Elena revisa lo que hizo antes de abrir.',
          en: 'Elena reviews what she did before opening.',
        },
        8: {
          es: 'Tomás mira lo que falta para terminar a tiempo.',
          en: 'Tomás looks at what still needs to be done on time.',
        },
        11: {
          es: 'Cuando cierran, todo el orden del día queda claro.',
          en: 'When they close, the whole order of the day is clear.',
        },
      },
    },
  ],
  77: [
    {
      meta: { title: 'El taller y las preguntas cortas', type: 'Repaso', value: 'auxiliares' },
      lines: {
        0: {
          es: 'En el taller, el grupo repasa preguntas, respuestas y negaciones.',
          en: 'In the workshop, the group reviews questions, answers, and negatives.',
        },
        4: {
          es: 'Sara decide qué auxiliar usar en cada frase.',
          en: 'Sara decides which auxiliary to use in each sentence.',
        },
        8: {
          es: 'Nico revisa una lista de oraciones rápidas.',
          en: 'Nico reviews a list of quick sentences.',
        },
        11: {
          es: 'Al final, el taller queda listo para practicar más.',
          en: 'In the end, the workshop is ready for more practice.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca y los auxiliares', type: 'Práctica', value: 'precisión' },
      lines: {
        0: {
          es: 'En la biblioteca, Camila compara formas cortas y claras.',
          en: 'In the library, Camila compares short and clear forms.',
        },
        4: {
          es: 'Andrés busca el auxiliar correcto antes de hablar.',
          en: 'Andrés looks for the correct auxiliary before speaking.',
        },
        8: {
          es: 'La mesa tiene ejemplos con do, does, did y have.',
          en: 'The table has examples with do, does, did, and have.',
        },
        11: {
          es: 'Cuando terminan, todo queda más fácil de recordar.',
          en: 'When they finish, everything becomes easier to remember.',
        },
      },
    },
    {
      meta: { title: 'La casa y las respuestas rápidas', type: 'Integración', value: 'control' },
      lines: {
        0: {
          es: 'En la casa, Julia y Mateo corrigen frases en voz alta.',
          en: 'At home, Julia and Mateo correct sentences out loud.',
        },
        4: {
          es: 'Ellos revisan si falta un auxiliar o sobra una forma.',
          en: 'They check whether an auxiliary is missing or a form is extra.',
        },
        8: {
          es: 'La familia escucha y ayuda con las respuestas.',
          en: 'The family listens and helps with the answers.',
        },
        11: {
          es: 'Al final, el repaso queda claro y directo.',
          en: 'In the end, the review feels clear and direct.',
        },
      },
    },
  ],
  78: [
    {
      meta: { title: 'El parque y las formas que cambian', type: 'Repaso', value: 'formas' },
      lines: {
        0: {
          es: 'En el parque, el equipo clasifica verbos por su forma.',
          en: 'In the park, the team sorts verbs by their form.',
        },
        4: {
          es: 'Paula compara la base, el gerundio y el participio.',
          en: 'Paula compares the base form, the gerund, and the participle.',
        },
        8: {
          es: 'Bruno repite los ejemplos hasta notar la diferencia.',
          en: 'Bruno repeats the examples until he notices the difference.',
        },
        11: {
          es: 'Al final, cada forma queda en su lugar correcto.',
          en: 'In the end, each form stays in its correct place.',
        },
      },
    },
    {
      meta: { title: 'La tienda y la forma correcta', type: 'Práctica', value: 'selección' },
      lines: {
        0: {
          es: 'En la tienda, Laura corrige verbos mezclados en una lista.',
          en: 'In the shop, Laura corrects mixed verbs in a list.',
        },
        4: {
          es: 'Samuel decide entre base form, -ing y pasado.',
          en: 'Samuel decides between the base form, -ing, and past tense.',
        },
        8: {
          es: 'La caja de ejemplos ayuda a ver la diferencia.',
          en: 'The box of examples helps show the difference.',
        },
        11: {
          es: 'Cuando terminan, la tienda parece un aula de repaso.',
          en: 'When they finish, the shop feels like a review classroom.',
        },
      },
    },
    {
      meta: { title: 'La estación y el repaso final', type: 'Integración', value: 'dominio' },
      lines: {
        0: {
          es: 'En la estación, Valeria y Felipe revisan formas verbales difíciles.',
          en: 'At the station, Valeria and Felipe review difficult verb forms.',
        },
        4: {
          es: 'Ellos comparan ejemplos con -ing y participios.',
          en: 'They compare examples with -ing and participles.',
        },
        8: {
          es: 'Un cartel muestra las formas que suelen confundirse.',
          en: 'A poster shows the forms that are usually confused.',
        },
        11: {
          es: 'Al final, el repaso deja todo listo para el cierre.',
          en: 'In the end, the review leaves everything ready for the finale.',
        },
      },
    },
  ],
  79: [
    {
      meta: { title: 'Detectives de errores en la plaza', type: 'Desafío', value: 'corrección' },
      lines: {
        0: {
          es: 'En la plaza, aparecen frases con errores para corregir.',
          en: 'In the square, sentences with errors appear to be corrected.',
        },
        4: {
          es: 'Emma revisa cada oración como si fuera un misterio.',
          en: 'Emma checks each sentence as if it were a mystery.',
        },
        8: {
          es: 'Diego compara la forma correcta con la incorrecta.',
          en: 'Diego compares the correct form with the incorrect one.',
        },
        11: {
          es: 'Al final, el equipo celebra cada corrección lograda.',
          en: 'In the end, the team celebrates each correction they make.',
        },
      },
    },
    {
      meta: { title: 'Detectives de errores en el laboratorio', type: 'Desafío', value: 'análisis' },
      lines: {
        0: {
          es: 'En el laboratorio, Adriana encuentra oraciones mal armadas.',
          en: 'In the lab, Adriana finds sentences that are badly built.',
        },
        4: {
          es: 'Iván detecta errores en las formas verbales antes que los demás.',
          en: 'Iván spots errors in verb forms before everyone else.',
        },
        8: {
          es: 'El grupo corrige cada detalle paso a paso.',
          en: 'The group corrects each detail step by step.',
        },
        11: {
          es: 'Cuando terminan, la hoja queda limpia y precisa.',
          en: 'When they finish, the sheet is clean and precise.',
        },
      },
    },
    {
      meta: { title: 'Detectives de errores en el edificio', type: 'Desafío', value: 'precisión' },
      lines: {
        0: {
          es: 'En el edificio, Isabel revisa un texto lleno de fallos.',
          en: 'In the building, Isabel reviews a text full of mistakes.',
        },
        4: {
          es: 'Marcos busca el problema antes de leer la solución.',
          en: 'Marcos looks for the problem before reading the solution.',
        },
        8: {
          es: 'Cada corrección deja la idea más clara.',
          en: 'Each correction makes the idea clearer.',
        },
        11: {
          es: 'Al final, el edificio parece una sala de edición.',
          en: 'In the end, the building feels like an editing room.',
        },
      },
    },
  ],
  80: [
    {
      meta: { title: 'El jardín final: Batalla de estructuras', type: 'Boss Battle', value: 'desafío' },
      lines: {
        0: {
          es: 'En el jardín, el equipo mezcla todo lo aprendido en un solo reto.',
          en: 'In the garden, the team mixes everything they learned into one challenge.',
        },
        4: {
          es: 'Marta revisa tiempos, auxiliares y formas verbales.',
          en: 'Marta reviews tenses, auxiliaries, and verb forms.',
        },
        8: {
          es: 'Daniel corrige una frase difícil sin perder la calma.',
          en: 'Daniel corrects a difficult sentence without losing calm.',
        },
        11: {
          es: 'Al final, el jardín celebra el dominio del bloque completo.',
          en: 'In the end, the garden celebrates mastery of the whole block.',
        },
      },
    },
    {
      meta: { title: 'La escuela final: Desafío completo', type: 'Boss Battle', value: 'fluidez' },
      lines: {
        0: {
          es: 'En la escuela, Sofía y Lucas enfrentan un repaso total.',
          en: 'At school, Sofía and Lucas face a full review.',
        },
        4: {
          es: 'Ellos cambian entre preguntas, respuestas y correcciones.',
          en: 'They switch between questions, answers, and corrections.',
        },
        8: {
          es: 'La clase observa cómo resuelven cada parte.',
          en: 'The class watches how they solve each part.',
        },
        11: {
          es: 'Cuando terminan, todo el curso parece cerrar en orden.',
          en: 'When they finish, the whole course seems to close in order.',
        },
      },
    },
    {
      meta: { title: 'La panadería final: Último repaso', type: 'Boss Battle', value: 'cierre' },
      lines: {
        0: {
          es: 'En la panadería, Elena y Tomás hacen el último repaso.',
          en: 'In the bakery, Elena and Tomás do the final review.',
        },
        4: {
          es: 'Revisan verbos, tiempos y preguntas con atención.',
          en: 'They review verbs, tenses, and questions carefully.',
        },
        8: {
          es: 'Cada respuesta correcta deja el camino más claro.',
          en: 'Each correct answer makes the path clearer.',
        },
        11: {
          es: 'Al final, la panadería cierra con un logro completo.',
          en: 'In the end, the bakery closes with a complete achievement.',
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
