import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lessons = new Map(curriculum.blocks[7].lessons.map((lesson) => [lesson.lesson_id, lesson]));

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

function patchStory(story, meta, updates) {
  story.title = meta.title;
  story.type = meta.type;
  story.value = meta.value;
  for (const [indexText, spec] of Object.entries(updates)) {
    patchContextLine(story, Number(indexText), spec.es, spec.en);
  }
}

const lessonUpdates = {
  53: [
    {
      meta: { title: 'El taller de bicicletas: Decisiones claras', type: 'Descubrimiento', value: 'cooperación' },
      lines: {
        0: {
          es: 'El taller de bicicletas abre temprano y el equipo revisa la lista de tareas.',
          en: 'The bike workshop opens early and the team checks the task list.',
        },
        4: {
          es: 'Hay llaves, tornillos y piezas sobre una mesa grande.',
          en: 'There are wrenches, screws, and parts on a big table.',
        },
        8: {
          es: 'Una rueda se traba y todos se detienen un momento.',
          en: 'One wheel jams and everyone pauses for a moment.',
        },
        11: {
          es: 'Al final, dejan el taller limpio y anotan los pasos que funcionaron.',
          en: 'In the end, they leave the workshop clean and write down the steps that worked.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca del barrio: Un plan mejor', type: 'Uso natural', value: 'disciplina' },
      lines: {
        0: {
          es: 'La biblioteca del barrio se llena de estudiantes tranquilos y cuadernos abiertos.',
          en: 'The neighborhood library fills with quiet students and open notebooks.',
        },
        4: {
          es: 'La mesa principal tiene libros, fichas y una lámpara pequeña.',
          en: 'The main table has books, index cards, and a small lamp.',
        },
        8: {
          es: 'Un libro cae al suelo y el grupo mira hacia la estantería.',
          en: 'A book falls to the floor and the group looks toward the shelf.',
        },
        11: {
          es: 'Cuando terminan, ordenan los libros y guardan las notas para la siguiente visita.',
          en: 'When they finish, they sort the books and save the notes for the next visit.',
        },
      },
    },
    {
      meta: { title: 'La cocina de la familia: Lo que aprendieron', type: 'Integración', value: 'gratitud' },
      lines: {
        0: {
          es: 'La cocina está lista para una cena familiar sencilla y organizada.',
          en: 'The kitchen is ready for a simple family dinner.',
        },
        4: {
          es: 'Sobre la mesa hay verduras, platos y una receta escrita a mano.',
          en: 'On the table there are vegetables, plates, and a handwritten recipe.',
        },
        8: {
          es: 'La sopa empieza a hervir demasiado y alguien baja el fuego.',
          en: 'The soup starts to boil too much and someone lowers the heat.',
        },
        11: {
          es: 'Al final, comparten la cena y dejan la mesa preparada para mañana.',
          en: 'In the end, they share dinner and leave the table ready for tomorrow.',
        },
      },
    },
  ],
  54: [
    {
      meta: { title: 'El parque al atardecer: Lo que cambiarían', type: 'Descubrimiento', value: 'perspectiva' },
      lines: {
        0: {
          es: 'Paula y Bruno miran el parque y piensan en cómo mejorarlo.',
          en: 'Paula and Bruno look at the park and think about how to improve it.',
        },
        4: {
          es: 'Hay un banco roto, un sendero estrecho y muchas hojas secas.',
          en: 'There is a broken bench, a narrow path, and many dry leaves.',
        },
        8: {
          es: 'El viento sopla fuerte y el grupo imagina otro diseño.',
          en: 'The wind blows hard and the group imagines another design.',
        },
        11: {
          es: 'Al final, dibujan ideas nuevas y el parque parece más posible.',
          en: 'In the end, they sketch new ideas and the park feels more possible.',
        },
      },
    },
    {
      meta: { title: 'La tienda de la esquina: Una mirada distinta', type: 'Uso natural', value: 'adaptación' },
      lines: {
        0: {
          es: 'Laura y Samuel observan la tienda y se imaginan cambios.',
          en: 'Laura and Samuel look at the shop and imagine changes.',
        },
        4: {
          es: 'La vitrina está llena, pero el espacio se siente pequeño.',
          en: 'The display window is full, but the space feels small.',
        },
        8: {
          es: 'La fila crece y todos imaginan un lugar más cómodo.',
          en: 'The line grows and everyone imagines a more comfortable place.',
        },
        11: {
          es: 'Cuando terminan, anotan ideas para que la tienda se vea más clara.',
          en: 'When they finish, they jot down ideas so the shop feels clearer.',
        },
      },
    },
    {
      meta: { title: 'La estación del fin de semana: Un plan imaginado', type: 'Integración', value: 'imaginación' },
      lines: {
        0: {
          es: 'Valeria y Felipe esperan el tren y sueñan con un viaje distinto.',
          en: 'Valeria and Felipe wait for the train and dream about a different trip.',
        },
        4: {
          es: 'La estación está ruidosa y el horario cambia otra vez.',
          en: 'The station is noisy and the schedule changes again.',
        },
        8: {
          es: 'La lluvia cae sobre la plataforma y todos buscan refugio.',
          en: 'Rain falls on the platform and everyone looks for shelter.',
        },
        11: {
          es: 'Al final, suben al tren con una idea más clara del camino.',
          en: 'In the end, they board the train with a clearer idea of the route.',
        },
      },
    },
  ],
  55: [
    {
      meta: { title: 'La billetera encontrada: Todo podría ser más simple', type: 'Descubrimiento', value: 'espera' },
      lines: {
        0: {
          es: 'Emma y Diego encuentran una billetera perdida en la plaza.',
          en: 'Emma and Diego find a lost wallet in the town square.',
        },
        4: {
          es: 'La gente pasa rápido y nadie sabe quién la perdió.',
          en: 'People walk by quickly and nobody knows who lost it.',
        },
        8: {
          es: 'Emma mira el reloj y siente que el tiempo no alcanza.',
          en: 'Emma looks at the clock and feels that time is not enough.',
        },
        11: {
          es: 'Al final, entregan la billetera y desean que todo fuera más simple.',
          en: 'In the end, they hand in the wallet and wish everything were simpler.',
        },
      },
    },
    {
      meta: { title: 'La feria de ciencias: Falta tiempo', type: 'Uso natural', value: 'paciencia' },
      lines: {
        0: {
          es: 'Adriana e Iván preparan un experimento para la feria de ciencias.',
          en: 'Adriana and Iván prepare an experiment for the science fair.',
        },
        4: {
          es: 'El laboratorio está lleno de cables, carteles y vasos medidores.',
          en: 'The lab is full of cables, posters, and measuring cups.',
        },
        8: {
          es: 'Uno de los carteles se cae y el grupo suspira.',
          en: 'One of the posters falls and the group sighs.',
        },
        11: {
          es: 'Al final, miran el tablero y desean tener más tiempo para practicar.',
          en: 'In the end, they look at the board and wish they had more time to practice.',
        },
      },
    },
    {
      meta: { title: 'El edificio silencioso: Un deseo pendiente', type: 'Integración', value: 'claridad' },
      lines: {
        0: {
          es: 'Isabel y Marcos hablan en el edificio sobre todo lo que todavía les falta.',
          en: 'Isabel and Marcos talk in the building about everything they still need to fix.',
        },
        4: {
          es: 'El ascensor tarda, el pasillo está oscuro y el ruido sigue.',
          en: 'The elevator is slow, the hallway is dark, and the noise continues.',
        },
        8: {
          es: 'Marcos mira la ventana y desea vivir en un lugar más tranquilo.',
          en: 'Marcos looks out the window and wishes he lived in a quieter place.',
        },
        11: {
          es: 'Al final, escriben una lista y ojalá el día tuviera más horas.',
          en: 'In the end, they make a list and wish the day had more hours.',
        },
      },
    },
  ],
  56: [
    {
      meta: { title: 'El jardín comunitario: Un error que dolió', type: 'Descubrimiento', value: 'responsabilidad' },
      lines: {
        0: {
          es: 'Marta y Daniel llegan tarde al jardín comunitario y ven lo que pasó.',
          en: 'Marta and Daniel arrive late at the community garden and see what happened.',
        },
        4: {
          es: 'Las semillas quedaron fuera de la caja y la lluvia mojó la tierra.',
          en: 'The seeds were left outside the box and the rain soaked the soil.',
        },
        8: {
          es: 'La cerca quedó abierta y algunos animales entraron.',
          en: 'The fence was left open and some animals got in.',
        },
        11: {
          es: 'Al final, limpian el área y lamentan no haber cerrado todo antes.',
          en: 'In the end, they clean the area and regret not having closed everything earlier.',
        },
      },
    },
    {
      meta: { title: 'La escuela después del proyecto: Lo que no hicieron a tiempo', type: 'Uso natural', value: 'reflexión' },
      lines: {
        0: {
          es: 'Sofía y Lucas revisan un proyecto escolar que salió mal.',
          en: 'Sofía and Lucas review a school project that went wrong.',
        },
        4: {
          es: 'Las notas estaban mezcladas y una parte quedó sin imprimir.',
          en: 'The notes were mixed up, and one part was left unprinted.',
        },
        8: {
          es: 'Sofía se da cuenta de que no había guardado el archivo.',
          en: 'Sofía realizes that she had not saved the file.',
        },
        11: {
          es: 'Al final, prometen volver a revisar todo antes de entregar.',
          en: 'In the end, they promise to check everything again before turning it in.',
        },
      },
    },
    {
      meta: { title: 'La panadería al cerrar: Un detalle que faltó', type: 'Integración', value: 'memoria' },
      lines: {
        0: {
          es: 'Elena y Tomás abren la panadería y notan un error en la receta.',
          en: 'Elena and Tomás open the bakery and notice a mistake in the recipe.',
        },
        4: {
          es: 'La masa quedó demasiado seca y el horno ya estaba caliente.',
          en: 'The dough turned out too dry and the oven was already hot.',
        },
        8: {
          es: 'Tomás se da cuenta de que había cambiado la harina demasiado tarde.',
          en: 'Tomás realizes that he had changed the flour too late.',
        },
        11: {
          es: 'Al final, corrigen el lote y lamentan no haber revisado antes la mezcla.',
          en: 'In the end, they fix the batch and regret not having checked the mixture earlier.',
        },
      },
    },
  ],
  57: [
    {
      meta: { title: 'El taller bajo la lluvia: Ojalá cambiara', type: 'Descubrimiento', value: 'tolerancia' },
      lines: {
        0: {
          es: 'Sara y Nico trabajan en el taller mientras la lluvia sigue entrando.',
          en: 'Sara and Nico work in the workshop while the rain keeps coming in.',
        },
        4: {
          es: 'La puerta no cierra bien y el aire frío entra otra vez.',
          en: 'The door does not close well and cold air comes in again.',
        },
        8: {
          es: 'Sara suspira porque Nico sigue hablando muy rápido.',
          en: 'Sara sighs because Nico keeps speaking too fast.',
        },
        11: {
          es: 'Al final, todos desean que el clima cambie y que el trabajo avance.',
          en: 'In the end, everyone wishes the weather would change and the work would move forward.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca ruidosa: Lo que no deja concentrar', type: 'Uso natural', value: 'concentración' },
      lines: {
        0: {
          es: 'Camila y Andrés estudian en silencio, pero el ruido del pasillo distrae.',
          en: 'Camila and Andrés study in silence, but the hallway noise distracts them.',
        },
        4: {
          es: 'Un teléfono suena, una silla cruje y nadie se concentra.',
          en: 'A phone rings, a chair squeaks, and nobody concentrates.',
        },
        8: {
          es: 'Camila desea que la gente hable más bajo.',
          en: 'Camila wishes people would speak more softly.',
        },
        11: {
          es: 'Al final, guardan los libros y desean que el pasillo estuviera en silencio.',
          en: 'In the end, they put away the books and wish the hallway were quiet.',
        },
      },
    },
    {
      meta: { title: 'La casa en la noche: Un deseo de calma', type: 'Integración', value: 'calma' },
      lines: {
        0: {
          es: 'Julia y Mateo organizan la casa, pero todos interrumpen el plan.',
          en: 'Julia and Mateo organize the house, but everyone interrupts the plan.',
        },
        4: {
          es: 'La televisión está muy alta y la cena se retrasa.',
          en: 'The TV is too loud and dinner is delayed.',
        },
        8: {
          es: 'Mateo desea que Julia cierre la ventana.',
          en: 'Mateo wishes Julia would close the window.',
        },
        11: {
          es: 'Al final, respiran profundo y desean que la noche se calme.',
          en: 'In the end, they take a deep breath and wish the night would calm down.',
        },
      },
    },
  ],
  58: [
    {
      meta: { title: 'El parque del torneo: Prepararse para empezar', type: 'Descubrimiento', value: 'preparación' },
      lines: {
        0: {
          es: 'Paula y Bruno llegan al parque con una meta clara.',
          en: 'Paula and Bruno arrive at the park with a clear goal.',
        },
        4: {
          es: 'Tienen una pizarra, pelotas y una lista de ejercicios.',
          en: 'They have a board, balls, and an exercise list.',
        },
        8: {
          es: 'Paula decide descansar un minuto antes de seguir.',
          en: 'Paula decides to rest for a minute before continuing.',
        },
        11: {
          es: 'Al final, se sienten listos para aprender algo nuevo.',
          en: 'In the end, they feel ready to learn something new.',
        },
      },
    },
    {
      meta: { title: 'La tienda del barrio: Decidir con calma', type: 'Uso natural', value: 'decisión' },
      lines: {
        0: {
          es: 'Laura y Samuel entran en la tienda para resolver un problema.',
          en: 'Laura and Samuel enter the shop to solve a problem.',
        },
        4: {
          es: 'La dueña quiere ordenar los estantes antes de cerrar.',
          en: 'The owner wants to organize the shelves before closing.',
        },
        8: {
          es: 'Samuel necesita comprar una caja para llevar todo.',
          en: 'Samuel needs to buy a box to carry everything.',
        },
        11: {
          es: 'Al final, prometen volver mañana para terminar de arreglar todo.',
          en: 'In the end, they promise to come back tomorrow to finish fixing everything.',
        },
      },
    },
    {
      meta: { title: 'La estación antes del viaje: Listos para salir', type: 'Integración', value: 'viaje' },
      lines: {
        0: {
          es: 'Valeria y Felipe esperan el tren con maletas y boletos.',
          en: 'Valeria and Felipe wait for the train with suitcases and tickets.',
        },
        4: {
          es: 'Quieren visitar otra ciudad y descansar un poco.',
          en: 'They want to visit another city and rest a little.',
        },
        8: {
          es: 'Felipe planea revisar el horario antes de subir.',
          en: 'Felipe plans to check the schedule before boarding.',
        },
        11: {
          es: 'Al final, sonríen porque están listos para viajar.',
          en: 'In the end, they smile because they are ready to travel.',
        },
      },
    },
  ],
  59: [
    {
      meta: { title: 'La plaza y la búsqueda: Acciones directas', type: 'Descubrimiento', value: 'acción' },
      lines: {
        0: {
          es: 'Emma y Diego organizan una búsqueda en la plaza.',
          en: 'Emma and Diego organize a search in the town square.',
        },
        4: {
          es: 'La gente empieza a ayudar de inmediato.',
          en: 'People start helping right away.',
        },
        8: {
          es: 'Emma deja que Diego revise las notas primero.',
          en: 'Emma lets Diego check the notes first.',
        },
        11: {
          es: 'Al final, todos ven que la búsqueda funcionó.',
          en: 'In the end, everyone can see that the search worked.',
        },
      },
    },
    {
      meta: { title: 'El laboratorio en orden: Instrucciones sin to', type: 'Uso natural', value: 'control' },
      lines: {
        0: {
          es: 'Adriana e Iván preparan una prueba en el laboratorio.',
          en: 'Adriana and Iván prepare a test in the lab.',
        },
        4: {
          es: 'La profesora les pide repetir el paso con calma.',
          en: 'The teacher makes them repeat the step calmly.',
        },
        8: {
          es: 'Iván deja a Adriana mezclar los materiales.',
          en: 'Iván lets Adriana mix the materials.',
        },
        11: {
          es: 'Al final, el equipo puede explicar el resultado sin ayuda.',
          en: 'In the end, the team can explain the result without help.',
        },
      },
    },
    {
      meta: { title: 'El edificio y la reunión: Permisos y órdenes', type: 'Integración', value: 'permiso' },
      lines: {
        0: {
          es: 'Isabel y Marcos tienen una reunión en el edificio.',
          en: 'Isabel and Marcos have a meeting in the building.',
        },
        4: {
          es: 'El portero les permite entrar primero.',
          en: 'The doorman lets them enter first.',
        },
        8: {
          es: 'Marcos hace que Isabel llame a la oficina.',
          en: 'Marcos makes Isabel call the office.',
        },
        11: {
          es: 'Al final, todos deben guardar silencio un momento.',
          en: 'In the end, everyone must keep quiet for a moment.',
        },
      },
    },
  ],
  60: [
    {
      meta: { title: 'El jardín comunitario: Disfrutar el proceso', type: 'Descubrimiento', value: 'hábitos' },
      lines: {
        0: {
          es: 'Marta y Daniel disfrutan el jardín mientras trabajan juntos.',
          en: 'Marta and Daniel enjoy the garden while they work together.',
        },
        4: {
          es: 'Les gusta regar, podar y mover macetas sin parar.',
          en: 'They like watering, pruning, and moving pots without stopping.',
        },
        8: {
          es: 'Marta evita hablar demasiado para no distraer al grupo.',
          en: 'Marta avoids talking too much so she does not distract the group.',
        },
        11: {
          es: 'Al final, siguen trabajando y celebran haber aprendido mucho.',
          en: 'In the end, they keep working and celebrate having learned a lot.',
        },
      },
    },
    {
      meta: { title: 'La feria escolar: Aprender haciendo', type: 'Uso natural', value: 'rutina' },
      lines: {
        0: {
          es: 'Sofía y Lucas preparan una feria escolar sobre hábitos sanos.',
          en: 'Sofía and Lucas prepare a school fair about healthy habits.',
        },
        4: {
          es: 'La clase empieza haciendo carteles y recortando ejemplos.',
          en: 'The class starts by making posters and cutting out examples.',
        },
        8: {
          es: 'Lucas sigue escribiendo hasta terminar la lista.',
          en: 'Lucas keeps writing until he finishes the list.',
        },
        11: {
          es: 'Al final, todos salen sonriendo después de compartir ideas.',
          en: 'In the end, everyone leaves smiling after sharing ideas.',
        },
      },
    },
    {
      meta: { title: 'La panadería por la mañana: Rutinas que gustan', type: 'Integración', value: 'proceso' },
      lines: {
        0: {
          es: 'Elena y Tomás trabajan en la panadería antes de abrir.',
          en: 'Elena and Tomás work in the bakery before opening.',
        },
        4: {
          es: 'Elena disfruta amasando la masa por la mañana.',
          en: 'Elena enjoys kneading the dough in the morning.',
        },
        8: {
          es: 'Tomás evita dejar migas en el mostrador.',
          en: 'Tomás avoids leaving crumbs on the counter.',
        },
        11: {
          es: 'Al final, cierran tranquilos después de ordenar todo.',
          en: 'In the end, they close calmly after tidying everything.',
        },
      },
    },
  ],
  61: [
    {
      meta: { title: 'El taller creativo: Algo que causa emoción', type: 'Descubrimiento', value: 'observación' },
      lines: {
        0: {
          es: 'Sara y Nico revisan piezas nuevas y herramientas usadas en el taller.',
          en: 'Sara and Nico check new parts and used tools in the workshop.',
        },
        4: {
          es: 'La tarea parece desafiante, pero el equipo está motivado.',
          en: 'The task seems challenging, but the team is motivated.',
        },
        8: {
          es: 'Una lámpara parpadeante ilumina la mesa de trabajo.',
          en: 'A flickering lamp lights the worktable.',
        },
        11: {
          es: 'Al final, dejan todo organizado y se sienten satisfechos.',
          en: 'In the end, they leave everything organized and feel satisfied.',
        },
      },
    },
    {
      meta: { title: 'La biblioteca tranquila: Textos que dejan pensando', type: 'Uso natural', value: 'resultado' },
      lines: {
        0: {
          es: 'Camila y Andrés ordenan libros impresos y apuntes subrayados.',
          en: 'Camila and Andrés sort printed books and underlined notes.',
        },
        4: {
          es: 'La sala tranquila ayuda a un grupo concentrado a seguir leyendo.',
          en: 'The quiet room helps a focused group keep reading.',
        },
        8: {
          es: 'Una historia emocionante deja a todos sorprendidos.',
          en: 'An exciting story leaves everyone surprised.',
        },
        11: {
          es: 'Al final, guardan los cuadernos cerrados y apagan la luz.',
          en: 'In the end, they put away the closed notebooks and turn off the light.',
        },
      },
    },
    {
      meta: { title: 'La casa después de la jornada: Lo que quedó listo', type: 'Integración', value: 'sensación' },
      lines: {
        0: {
          es: 'Julia y Mateo preparan una cena sencilla con verduras cortadas y pan tostado.',
          en: 'Julia and Mateo prepare a simple dinner with chopped vegetables and toasted bread.',
        },
        4: {
          es: 'La cocina se llena de aroma y todos se ven contentos.',
          en: 'The kitchen fills with aroma and everyone looks excited.',
        },
        8: {
          es: 'Un pastel recién horneado queda junto a la ventana abierta.',
          en: 'A freshly baked cake stays by the open window.',
        },
        11: {
          es: 'Al final, la mesa queda servida y la familia se siente relajada.',
          en: 'In the end, the table is set and the family feels relaxed.',
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
