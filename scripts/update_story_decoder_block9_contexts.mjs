import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lessons = new Map(curriculum.blocks[8].lessons.map((lesson) => [lesson.lesson_id, lesson]));

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
  line.hints = ['Mantén la escena natural y conecta con la práctica gramatical'];
  line.tutor_explanation = 'La línea abre o cierra la historia antes de las frases que practican la estructura.';
}

function patchSpanishOnly(story, lineIndex, es) {
  story.lines[lineIndex].es = es;
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
  62: [
    {
      meta: { title: 'La casa del barrio: Reparaciones útiles', type: 'Descubrimiento', value: 'mantenimiento' },
      lines: {
        0: {
          es: 'Paula y Bruno revisan una casa vieja antes de la visita.',
          en: 'Paula and Bruno check an old house before the visit.',
        },
        4: {
          es: 'La puerta está floja y las ventanas necesitan limpieza.',
          en: 'The door is loose and the windows need cleaning.',
        },
        8: {
          es: 'Bruno llama al técnico para pedir el arreglo completo.',
          en: 'Bruno calls the technician to ask for the full repair.',
        },
        11: {
          es: 'Al final, todo queda listo y la casa se ve mejor.',
          en: 'In the end, everything is ready and the house looks better.',
        },
      },
    },
    {
      meta: { title: 'La bicicleta de Diego: Mantenimiento regular', type: 'Uso natural', value: 'cuidado' },
      lines: {
        0: {
          es: 'Emma y Diego llevan la bicicleta al taller del barrio.',
          en: 'Emma and Diego take the bicycle to the neighborhood shop.',
        },
        4: {
          es: 'La cadena suena raro y el timbre casi no funciona.',
          en: 'The chain sounds strange and the bell barely works.',
        },
        8: {
          es: 'Diego espera mientras revisan los frenos y ajustan el asiento.',
          en: 'Diego waits while they check the brakes and adjust the seat.',
        },
        11: {
          es: 'Cuando termina la visita, la bicicleta queda como nueva.',
          en: 'When the visit ends, the bicycle comes back like new.',
        },
      },
    },
    {
      meta: { title: 'La oficina y los vidrios: Un día de organización', type: 'Integración', value: 'orden' },
      lines: {
        0: {
          es: 'Marta y Daniel coordinan una limpieza en el edificio.',
          en: 'Marta and Daniel coordinate a cleaning in the building.',
        },
        4: {
          es: 'Los vidrios están opacos y el pasillo tiene polvo.',
          en: 'The windows are dull and the hallway has dust.',
        },
        8: {
          es: 'Daniel revisa la lista y pide que no olviden nada.',
          en: 'Daniel checks the list and asks that they forget nothing.',
        },
        11: {
          es: 'Al final, el espacio queda ordenado y todos agradecen el trabajo.',
          en: 'In the end, the space is tidy and everyone appreciates the work.',
        },
      },
    },
  ],
  63: [
    {
      meta: { title: 'La casa lista: Encargar el trabajo', type: 'Descubrimiento', value: 'gestión' },
      lines: {
        0: {
          es: 'Emma y Diego buscan ayuda para dejar la casa lista.',
          en: 'Emma and Diego look for help to get the house ready.',
        },
        4: {
          es: 'La puerta está dañada y las ventanas se ven opacas.',
          en: 'The door is damaged and the windows look dull.',
        },
        8: {
          es: 'Emma habla con el técnico y confirma la cita.',
          en: 'Emma talks with the technician and confirms the appointment.',
        },
        11: {
          es: 'Al final, todo queda limpio y el plan sale mejor.',
          en: 'In the end, everything stays clean and the plan goes better.',
        },
      },
    },
    {
      meta: { title: 'La tienda del barrio: Resolver varias tareas', type: 'Uso natural', value: 'servicio' },
      lines: {
        0: {
          es: 'Laura y Samuel quieren resolver varias tareas de una vez.',
          en: 'Laura and Samuel want to solve several tasks at once.',
        },
        4: {
          es: 'El mostrador tiene papeles, llaves y una lista de encargos.',
          en: 'The counter has papers, keys, and a list of errands.',
        },
        8: {
          es: 'Samuel habla con el taller y confirma la visita.',
          en: 'Samuel talks with the shop and confirms the visit.',
        },
        11: {
          es: 'Cuando salen, la tienda ya parece más ordenada.',
          en: 'When they leave, the shop already looks more organized.',
        },
      },
    },
    {
      meta: { title: 'El edificio y el mantenimiento: Todo a tiempo', type: 'Integración', value: 'coordinación' },
      lines: {
        0: {
          es: 'Marta y Daniel coordinan una jornada de mantenimiento.',
          en: 'Marta and Daniel coordinate a maintenance day.',
        },
        4: {
          es: 'Las ventanas necesitan limpieza y la luz entra con dificultad.',
          en: 'The windows need cleaning and the light comes in with difficulty.',
        },
        8: {
          es: 'Daniel coordina el servicio antes de la reunión.',
          en: 'Daniel coordinates the service before the meeting.',
        },
        11: {
          es: 'Al final, el edificio se ve mejor y todos respiran tranquilos.',
          en: 'In the end, the building looks better and everyone breathes easily.',
        },
      },
    },
  ],
  64: [
    {
      meta: { title: 'El jardín del barrio: Repartir tareas', type: 'Descubrimiento', value: 'equipo' },
      lines: {
        0: {
          es: 'Marta y Daniel preparan el jardín para un evento del barrio.',
          en: 'Marta and Daniel prepare the garden for a neighborhood event.',
        },
        4: {
          es: 'El coordinador reparte tareas y revisa quién puede ayudar.',
          en: 'The coordinator assigns tasks and checks who can help.',
        },
        8: {
          es: 'Daniel hace que un ayudante lleve las cajas al fondo.',
          en: 'Daniel has an assistant carry the boxes to the back.',
        },
        11: {
          es: 'Al final, todos terminan trabajando en equipo.',
          en: 'In the end, everyone ends up working as a team.',
        },
      },
    },
    {
      meta: { title: 'La escuela y la presentación: Dar y recibir órdenes', type: 'Uso natural', value: 'participación' },
      lines: {
        0: {
          es: 'Sofía y Lucas organizan una presentación en la escuela.',
          en: 'Sofía and Lucas organize a presentation at school.',
        },
        4: {
          es: 'La maestra deja que algunos estudiantes elijan el orden.',
          en: 'The teacher lets some students choose the order.',
        },
        8: {
          es: 'Sofía hace que Lucas revise las tarjetas una vez más.',
          en: 'Sofía makes Lucas review the cards one more time.',
        },
        11: {
          es: 'Cuando acaban, la clase aplaude y la sala queda lista.',
          en: 'When they finish, the class applauds and the room is ready.',
        },
      },
    },
    {
      meta: { title: 'La cena familiar: Todos ayudan', type: 'Integración', value: 'cercanía' },
      lines: {
        0: {
          es: 'Julia y Mateo preparan una cena familiar con varias manos ayudando.',
          en: 'Julia and Mateo prepare a family dinner with many hands helping.',
        },
        4: {
          es: 'La abuela deja que Mateo corte las verduras primero.',
          en: 'The grandmother lets Mateo cut the vegetables first.',
        },
        8: {
          es: 'Julia hace que su hermano lleve los platos a la mesa.',
          en: 'Julia has her brother carry the plates to the table.',
        },
        11: {
          es: 'Al final, la cena sale bien y todos comen juntos.',
          en: 'In the end, dinner goes well and everyone eats together.',
        },
      },
    },
  ],
  65: [
    {
      meta: { title: 'El taller: Convencer con calma', type: 'Descubrimiento', value: 'persuasión' },
      lines: {
        0: {
          es: 'Sara y Nico necesitan ayuda para terminar una reparación.',
          en: 'Sara and Nico need help finishing a repair.',
        },
        4: {
          es: 'El coordinador no quería colaborar al principio.',
          en: 'The coordinator did not want to cooperate at first.',
        },
        8: {
          es: 'Sara consigue que Nico revise las herramientas.',
          en: 'Sara gets Nico to check the tools.',
        },
        11: {
          es: 'Al final, el plan avanza y el taller queda en orden.',
          en: 'In the end, the plan moves forward and the workshop stays in order.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca: Animar al grupo', type: 'Uso natural', value: 'motivación' },
      lines: {
        0: {
          es: 'Camila y Andrés preparan una actividad en la biblioteca.',
          en: 'Camila and Andrés prepare an activity in the library.',
        },
        4: {
          es: 'Andrés no quería hablar frente al grupo.',
          en: 'Andrés did not want to speak in front of the group.',
        },
        8: {
          es: 'Camila consigue que Andrés explique la idea con calma.',
          en: 'Camila gets Andrés to explain the idea calmly.',
        },
        11: {
          es: 'Al final, todos entienden la propuesta y sonríen.',
          en: 'In the end, everyone understands the proposal and smiles.',
        },
      },
    },
    {
      meta: { title: 'La casa: Repartir el trabajo', type: 'Integración', value: 'familia' },
      lines: {
        0: {
          es: 'Julia y Mateo organizan una tarde de limpieza en casa.',
          en: 'Julia and Mateo organize an afternoon of cleaning at home.',
        },
        4: {
          es: 'Mateo no quería mover las cajas del garaje.',
          en: 'Mateo did not want to move the boxes in the garage.',
        },
        8: {
          es: 'Julia consigue que Mateo ayude con la mesa grande.',
          en: 'Julia gets Mateo to help with the big table.',
        },
        11: {
          es: 'Cuando terminan, la casa se ve mucho más tranquila.',
          en: 'When they finish, the house looks much calmer.',
        },
      },
    },
  ],
  66: [
    {
      meta: { title: 'El parque de antes: Hábitos que se recuerdan', type: 'Descubrimiento', value: 'memoria' },
      lines: {
        0: {
          es: 'Paula y Bruno recuerdan cómo era el parque antes.',
          en: 'Paula and Bruno remember what the park used to be like before.',
        },
        4: {
          es: 'Antes había menos bancos y más ruido de tráfico.',
          en: 'Before there were fewer benches and more traffic noise.',
        },
        8: {
          es: 'Paula se acuerda de que solía venir cada sábado.',
          en: 'Paula remembers that she used to come every Saturday.',
        },
        11: {
          es: 'Al final, el lugar se siente distinto y el recuerdo sigue vivo.',
          en: 'In the end, the place feels different and the memory stays alive.',
        },
      },
    },
    {
      meta: { title: 'La escuela de antes: Rutinas cambiadas', type: 'Uso natural', value: 'rutina' },
      lines: {
        0: {
          es: 'Emma y Diego hablan de la escuela de hace años.',
          en: 'Emma and Diego talk about school from years ago.',
        },
        4: {
          es: 'Antes los estudiantes usaban cuadernos grandes y poco color.',
          en: 'Students used to use big notebooks and little color before.',
        },
        8: {
          es: 'Diego solía llegar temprano para ayudar a ordenar.',
          en: 'Diego used to arrive early to help organize.',
        },
        11: {
          es: 'Ahora todo cambió, pero la rutina de antes todavía se nota.',
          en: 'Now everything has changed, but the old routine still shows.',
        },
      },
    },
    {
      meta: { title: 'La casa familiar: Recuerdos que siguen', type: 'Integración', value: 'tradición' },
      lines: {
        0: {
          es: 'Marta y Daniel miran fotos antiguas de la casa.',
          en: 'Marta and Daniel look at old photos of the house.',
        },
        4: {
          es: 'Antes la familia cenaba junto a la ventana todos los viernes.',
          en: 'Before, the family used to have dinner by the window every Friday.',
        },
        8: {
          es: 'Ellos solían guardar las cartas en una caja azul.',
          en: 'They used to keep letters in a blue box.',
        },
        11: {
          es: 'Al final, sonríen porque esos hábitos siguen en la memoria.',
          en: 'In the end, they smile because those habits remain in memory.',
        },
      },
    },
  ],
  67: [
    {
      meta: { title: 'La plaza de la infancia: Lo que solía pasar', type: 'Descubrimiento', value: 'nostalgia' },
      lines: {
        0: {
          es: 'Emma y Diego recuerdan tardes largas en la plaza.',
          en: 'Emma and Diego remember long afternoons in the town square.',
        },
        4: {
          es: 'Cuando eran niños, todo empezaba con un juego simple.',
          en: 'When they were children, everything would start with a simple game.',
        },
        8: {
          es: 'Diego siempre llevaba algo para compartir.',
          en: 'Diego would always bring something to share.',
        },
        11: {
          es: 'Al final, cada recuerdo trae de vuelta la rutina de antes.',
          en: 'In the end, every memory brings back the old routine.',
        },
      },
    },
    {
      meta: { title: 'Las mañanas de antes: La costumbre repetida', type: 'Uso natural', value: 'costumbre' },
      lines: {
        0: {
          es: 'Paula y Bruno hablan de las mañanas de antes.',
          en: 'Paula and Bruno talk about mornings from before.',
        },
        4: {
          es: 'Después del desayuno, todos salían juntos sin demora.',
          en: 'After breakfast, everyone would go out together without delay.',
        },
        8: {
          es: 'Paula cantaba mientras Bruno preparaba la mochila.',
          en: 'Paula would sing while Bruno packed the bag.',
        },
        11: {
          es: 'Ahora esas escenas solo viven en la memoria.',
          en: 'Now those scenes only live in memory.',
        },
      },
    },
    {
      meta: { title: 'El barrio de antes: Una historia cercana', type: 'Integración', value: 'recuerdo' },
      lines: {
        0: {
          es: 'Sara y Nico hablan de los sábados de su infancia.',
          en: 'Sara and Nico talk about their childhood Saturdays.',
        },
        4: {
          es: 'Cada semana, la misma esquina reunía a todos.',
          en: 'Each week, the same corner would bring everyone together.',
        },
        8: {
          es: 'Sara siempre llevaba algo para regalar.',
          en: 'Sara would always bring something to give away.',
        },
        11: {
          es: 'Al final, la costumbre sigue sonando como una historia cercana.',
          en: 'In the end, the habit still sounds like a close story.',
        },
      },
    },
  ],
  68: [
    {
      meta: { title: 'El jardín en movimiento: Adaptarse al ritmo', type: 'Descubrimiento', value: 'ajuste' },
      lines: {
        0: {
          es: 'Marta y Daniel trabajan en el jardín desde temprano.',
          en: 'Marta and Daniel work in the garden from early on.',
        },
        4: {
          es: 'Marta ya está cómoda con el ruido y la tierra.',
          en: 'Marta is already comfortable with the noise and the soil.',
        },
        8: {
          es: 'Daniel todavía se adapta al ritmo del grupo.',
          en: 'Daniel is still adapting to the group pace.',
        },
        11: {
          es: 'Al final, ambos se sienten más seguros con la rutina.',
          en: 'In the end, both feel more confident with the routine.',
        },
      },
    },
    {
      meta: { title: 'La clase con música: Encontrar comodidad', type: 'Uso natural', value: 'adaptación' },
      lines: {
        0: {
          es: 'Sofía y Lucas empiezan una semana con mucho movimiento.',
          en: 'Sofía and Lucas start a week with a lot of movement.',
        },
        4: {
          es: 'Sofía está acostumbrada a estudiar con música suave.',
          en: 'Sofía is used to studying with soft music.',
        },
        8: {
          es: 'Lucas ya no se sorprende con el ruido del pasillo.',
          en: 'Lucas is no longer surprised by the hallway noise.',
        },
        11: {
          es: 'Al final, la clase funciona mejor porque todos se adaptan.',
          en: 'In the end, the class works better because everyone adapts.',
        },
      },
    },
    {
      meta: { title: 'La mudanza: La nueva rutina', type: 'Integración', value: 'hogar' },
      lines: {
        0: {
          es: 'Elena y Tomás organizan la casa después de mudarse.',
          en: 'Elena and Tomás organize the house after moving in.',
        },
        4: {
          es: 'Tomás está acostumbrado a compartir responsabilidades.',
          en: 'Tomás is used to sharing responsibilities.',
        },
        8: {
          es: 'Elena ya está acostumbrada a la nueva cocina.',
          en: 'Elena is already used to the new kitchen.',
        },
        11: {
          es: 'Al final, todo se vuelve parte de la vida diaria.',
          en: 'In the end, everything becomes part of daily life.',
        },
      },
    },
  ],
  69: [
    {
      meta: { title: 'El taller con cambios: Acostumbrarse poco a poco', type: 'Descubrimiento', value: 'cambio' },
      lines: {
        0: {
          es: 'Sara y Nico empiezan una semana con cambios en el taller.',
          en: 'Sara and Nico start a week with changes in the workshop.',
        },
        4: {
          es: 'Sara se está acostumbrando a trabajar temprano.',
          en: 'Sara is getting used to working early.',
        },
        8: {
          es: 'Nico todavía se está acostumbrando al ruido nuevo.',
          en: 'Nico is still getting used to the new noise.',
        },
        11: {
          es: 'Al final, ya se sienten más cómodos con la rutina.',
          en: 'In the end, they already feel more comfortable with the routine.',
        },
      },
    },
    {
      meta: { title: 'La escuela con horario nuevo: Ajuste gradual', type: 'Uso natural', value: 'proceso' },
      lines: {
        0: {
          es: 'Camila y Andrés prueban un horario diferente en la escuela.',
          en: 'Camila and Andrés try a different schedule at school.',
        },
        4: {
          es: 'Camila se está acostumbrando a salir más tarde.',
          en: 'Camila is getting used to leaving later.',
        },
        8: {
          es: 'Andrés se está acostumbrando al nuevo grupo de trabajo.',
          en: 'Andrés is getting used to the new work group.',
        },
        11: {
          es: 'Con el tiempo, ambos aceptan mejor el cambio.',
          en: 'Over time, both accept the change better.',
        },
      },
    },
    {
      meta: { title: 'La casa después de la mudanza: Menos extraño cada día', type: 'Integración', value: 'comodidad' },
      lines: {
        0: {
          es: 'Julia y Mateo ajustan su vida después de mudarse.',
          en: 'Julia and Mateo adjust their lives after moving.',
        },
        4: {
          es: 'Mateo se está acostumbrando a compartir la cocina.',
          en: 'Mateo is getting used to sharing the kitchen.',
        },
        8: {
          es: 'Julia se está acostumbrando al silencio del barrio.',
          en: 'Julia is getting used to the quiet of the neighborhood.',
        },
        11: {
          es: 'Al final, la casa deja de sentirse extraña.',
          en: 'In the end, the house stops feeling strange.',
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

patchSpanishOnly(lessons.get(68).stories[0], 2, 'Daniel está acostumbrado al ruido del jardín comunitario.');
patchSpanishOnly(lessons.get(69).stories[0], 2, 'Nico se está acostumbrando al ruido del taller.');
patchContextLine(
  lessons.get(66).stories[2],
  4,
  'La familia cenaba junto a la ventana todos los viernes.',
  'The family used to have dinner by the window every Friday.',
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`);
