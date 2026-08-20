import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[1];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'will', 'can'];

function applyStory(story, meta, lines) {
  story.title = meta.title;
  story.type = meta.type;
  story.value = meta.value;

  lines.forEach((spec, index) => {
    const line = story.lines[index];
    line.es = spec.es;
    line.en = spec.en;
    line.preferred_answer = spec.en;
    line.accepted_answers = [spec.en];
    line.lesson_target = lesson.topic;
    line.line_role = spec.role;
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Present Continuous';
    line.pattern = spec.role === 'context' ? ctxPattern : targetPattern;
    line.focus_tokens = spec.focus_tokens;
    line.vocabulary_candidates = spec.vocabulary_candidates;
    line.distractors = [...sharedDistractors];
    line.common_errors = [spec.common_errors];
    line.hints = [spec.hints];
    line.tutor_explanation = spec.tutor_explanation;
  });
}

const ctx = (es, en, focus_tokens, vocabulary_candidates, common_errors, hints, tutor_explanation) => ({
  role: 'context',
  es,
  en,
  focus_tokens,
  vocabulary_candidates,
  common_errors,
  hints,
  tutor_explanation,
});

const tgt = (es, en, focus_tokens, vocabulary_candidates, common_errors, hints, tutor_explanation) => ({
  role: 'target',
  es,
  en,
  focus_tokens,
  vocabulary_candidates,
  common_errors,
  hints,
  tutor_explanation,
});

applyStory(
  lesson.stories[0],
  { title: 'La biblioteca en movimiento: Lo que están limpiando ahora', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'La biblioteca abre con cajas junto a la puerta',
      'The library opens with boxes by the door',
      ['library', 'opens', 'boxes'],
      ['library', 'opens', 'boxes'],
      'Perder el ambiente de trabajo en progreso',
      'The opening should show that the action is happening right now',
      'La biblioteca ya está en actividad'
    ),
    ctx(
      'Hay un cartel de silencio en la pared',
      'There is a silence sign on the wall',
      ['silence', 'sign', 'wall'],
      ['silence', 'sign', 'wall'],
      'Hacer la escena demasiado estática',
      'The sign helps contrast simple passive with passive continuous',
      'El cartel sostiene el ambiente'
    ),
    ctx(
      'Un trabajador empuja una escalera pequeña',
      'A worker pushes a small ladder',
      ['worker', 'pushes', 'ladder'],
      ['worker', 'pushes', 'ladder'],
      'Ignorar la acción visible del momento',
      'The visible work should cue the ongoing passive action',
      'El trabajador prepara el cambio'
    ),
    ctx(
      'Los libros esperan sobre una mesa baja',
      'The books wait on a low table',
      ['books', 'wait', 'table'],
      ['books', 'wait', 'table'],
      'Cerrar sin una sensación de proceso',
      'The table and books set up actions that are happening now',
      'Los libros ya están en proceso'
    ),
    tgt(
      'Los estantes están siendo limpiados ahora',
      'The shelves are being cleaned now',
      ['The', 'shelves', 'are', 'being', 'cleaned'],
      ['The', 'shelves', 'are', 'being', 'cleaned', 'now'],
      'Usar The shelves are cleaned now',
      'Passive Present Continuous uses am/is/are being + past participle',
      'La limpieza ocurre en este momento'
    ),
    tgt(
      'Los libros están siendo revisados por la bibliotecaria',
      'The books are being checked by the librarian',
      ['The', 'books', 'are', 'being', 'checked'],
      ['The', 'books', 'are', 'being', 'checked', 'librarian'],
      'Usar The books are checked by the librarian',
      'Being signals that the action is in progress right now',
      'La revisión sigue en curso'
    ),
    tgt(
      'Las mesas están siendo movidas al salón',
      'The tables are being moved to the hall',
      ['The', 'tables', 'are', 'being', 'moved'],
      ['The', 'tables', 'are', 'being', 'moved', 'hall'],
      'Usar The tables are moved to the hall',
      'The structure shows movement happening at this moment',
      'Mover las mesas todavía no termina'
    ),
    tgt(
      'Las ventanas están siendo abiertas una por una',
      'The windows are being opened one by one',
      ['The', 'windows', 'are', 'being', 'opened'],
      ['The', 'windows', 'are', 'being', 'opened', 'one'],
      'Usar The windows are opened one by one',
      'Passive Present Continuous is about something in progress',
      'Abrir las ventanas ocurre ahora'
    ),
    tgt(
      'Las sillas están siendo preparadas para la reunión',
      'The chairs are being prepared for the meeting',
      ['The', 'chairs', 'are', 'being', 'prepared'],
      ['The', 'chairs', 'are', 'being', 'prepared', 'meeting'],
      'Usar The chairs are prepared for the meeting',
      'Prepared after being makes the ongoing passive clear',
      'Las sillas se alistan todavía'
    ),
    tgt(
      'Las hojas están siendo escritas en el tablero',
      'The notes are being written on the board',
      ['The', 'notes', 'are', 'being', 'written'],
      ['The', 'notes', 'are', 'being', 'written', 'board'],
      'Usar The notes are written on the board',
      'The continuous passive shows the writing in progress',
      'Escribir en el tablero toma tiempo'
    ),
    tgt(
      'El piso está siendo lavado en este momento',
      'The floor is being washed at the moment',
      ['The', 'floor', 'is', 'being', 'washed'],
      ['The', 'floor', 'is', 'being', 'washed', 'moment'],
      'Usar The floor is washed at the moment',
      'Is being + past participle marks action happening now',
      'Lavar el piso sigue en marcha'
    ),
    tgt(
      'El viejo póster está siendo retirado hoy',
      'The old poster is being taken down today',
      ['The', 'old', 'poster', 'is', 'being', 'taken'],
      ['The', 'old', 'poster', 'is', 'being', 'taken', 'today'],
      'Usar The old poster is taken down today',
      'Being keeps the removal in progress',
      'Retirar el póster aún está pasando'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que están armando ahora', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria está llena de mesas y cables',
      'The fair is full of tables and cables',
      ['fair', 'tables', 'cables'],
      ['fair', 'tables', 'cables'],
      'Perder el contexto de montaje',
      'The setting should feel like work in progress',
      'La feria ya está en montaje'
    ),
    ctx(
      'Los estudiantes entran con pinceles y cajas',
      'The students come in with brushes and boxes',
      ['students', 'come', 'brushes'],
      ['students', 'come', 'boxes'],
      'Hacer la escena demasiado simple',
      'Tools and boxes help the learner expect ongoing passive actions',
      'Los materiales muestran el trabajo'
    ),
    ctx(
      'La maestra mira el escenario con calma',
      'The teacher watches the stage calmly',
      ['teacher', 'watches', 'stage'],
      ['teacher', 'watches', 'stage'],
      'Ignorar la supervisión del montaje',
      'A watching teacher supports the preparation scene',
      'La maestra supervisa el proceso'
    ),
    ctx(
      'Hay carteles a medio hacer sobre la mesa',
      'There are posters half done on the table',
      ['posters', 'half', 'done'],
      ['posters', 'half', 'done'],
      'Cerrar sin un trabajo en progreso',
      'Half-done posters are perfect for passive continuous',
      'Los carteles todavía cambian'
    ),
    tgt(
      'Los modelos están siendo pintados por los estudiantes',
      'The models are being painted by the students',
      ['The', 'models', 'are', 'being', 'painted'],
      ['The', 'models', 'are', 'being', 'painted', 'students'],
      'Usar The models are painted by the students',
      'Being painted shows the painting is happening right now',
      'Pintar los modelos sigue en curso'
    ),
    tgt(
      'Los cables están siendo revisados con cuidado',
      'The wires are being checked carefully',
      ['The', 'wires', 'are', 'being', 'checked'],
      ['The', 'wires', 'are', 'being', 'checked', 'carefully'],
      'Usar The wires are checked carefully',
      'Passive continuous stresses the ongoing inspection',
      'La revisión de los cables ocurre ahora'
    ),
    tgt(
      'Los carteles están siendo escritos en tarjetas',
      'The signs are being written on cards',
      ['The', 'signs', 'are', 'being', 'written'],
      ['The', 'signs', 'are', 'being', 'written', 'cards'],
      'Usar The signs are written on cards',
      'The action is in progress, not finished',
      'Escribir los carteles todavía no termina'
    ),
    tgt(
      'Las mesas están siendo cubiertas con papel',
      'The tables are being covered with paper',
      ['The', 'tables', 'are', 'being', 'covered'],
      ['The', 'tables', 'are', 'being', 'covered', 'paper'],
      'Usar The tables are covered with paper',
      'Covered after being marks a process right now',
      'Cubrir las mesas sigue avanzando'
    ),
    tgt(
      'Los robots están siendo hechos por el equipo',
      'The robots are being made by the team',
      ['The', 'robots', 'are', 'being', 'made'],
      ['The', 'robots', 'are', 'being', 'made', 'team'],
      'Usar The robots are made by the team',
      'Being made is the correct continuous passive form',
      'Hacer los robots sigue pasando'
    ),
    tgt(
      'Los resultados están siendo mostrados en una pizarra',
      'The results are being shown on a board',
      ['The', 'results', 'are', 'being', 'shown'],
      ['The', 'results', 'are', 'being', 'shown', 'board'],
      'Usar The results are shown on a board',
      'Shown with being keeps the action ongoing',
      'Mostrar resultados todavía ocurre'
    ),
    tgt(
      'Las mesas están siendo limpiadas antes de abrir',
      'The tables are being cleaned before opening',
      ['The', 'tables', 'are', 'being', 'cleaned'],
      ['The', 'tables', 'are', 'being', 'cleaned', 'opening'],
      'Usar The tables are cleaned before opening',
      'Being cleaned makes the work feel current',
      'Limpiar las mesas aún está pasando'
    ),
    tgt(
      'Las preguntas están siendo respondidas por el equipo',
      'The questions are being answered by the team',
      ['The', 'questions', 'are', 'being', 'answered'],
      ['The', 'questions', 'are', 'being', 'answered', 'team'],
      'Usar The questions are answered by the team',
      'Answered after being keeps the focus on the ongoing reply',
      'Responder preguntas sigue en curso'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que están arreglando ahora', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'El barrio está tranquilo pero lleno de actividad',
      'The neighborhood is calm but full of activity',
      ['neighborhood', 'calm', 'activity'],
      ['neighborhood', 'calm', 'activity'],
      'Perder la sensación de trabajo comunitario',
      'The neighborhood scene should make the ongoing passive feel visible',
      'El barrio se mueve con calma'
    ),
    ctx(
      'Hay herramientas y pintura cerca de la acera',
      'There are tools and paint near the curb',
      ['tools', 'paint', 'curb'],
      ['tools', 'paint', 'curb'],
      'Hacer la escena demasiado vacía',
      'Tools and paint are clear clues for work in progress',
      'Las herramientas anuncian la tarea'
    ),
    ctx(
      'Los vecinos hablan mientras miran las paredes',
      'The neighbors talk while they look at the walls',
      ['neighbors', 'talk', 'walls'],
      ['neighbors', 'talk', 'walls'],
      'Ignorar la observación del lugar',
      'Looking at the walls helps set up the repair actions',
      'Las paredes necesitan atención'
    ),
    ctx(
      'Un niño sostiene una brocha pequeña',
      'A child holds a small brush',
      ['child', 'holds', 'brush'],
      ['child', 'holds', 'brush'],
      'Cerrar sin una señal clara de trabajo',
      'The brush is a good cue for ongoing painting and repairs',
      'La brocha ya anuncia cambios'
    ),
    tgt(
      'Los bancos están siendo reparados por los voluntarios',
      'The benches are being repaired by the volunteers',
      ['The', 'benches', 'are', 'being', 'repaired'],
      ['The', 'benches', 'are', 'being', 'repaired', 'volunteers'],
      'Usar The benches are repaired by the volunteers',
      'Repaired after being shows the repair is happening now',
      'Reparar los bancos une al barrio'
    ),
    tgt(
      'Las paredes están siendo pintadas esta mañana',
      'The walls are being painted this morning',
      ['The', 'walls', 'are', 'being', 'painted'],
      ['The', 'walls', 'are', 'being', 'painted', 'morning'],
      'Usar The walls are painted this morning',
      'Painted after being keeps the action in progress',
      'Pintar las paredes sigue en marcha'
    ),
    tgt(
      'Las plantas están siendo regadas por los vecinos',
      'The plants are being watered by the neighbors',
      ['The', 'plants', 'are', 'being', 'watered'],
      ['The', 'plants', 'are', 'being', 'watered', 'neighbors'],
      'Usar The plants are watered by the neighbors',
      'Watered after being is the continuous passive form',
      'Regar las plantas ocurre ahora'
    ),
    tgt(
      'Los carteles están siendo limpiados después de la lluvia',
      'The signs are being cleaned after the rain',
      ['The', 'signs', 'are', 'being', 'cleaned'],
      ['The', 'signs', 'are', 'being', 'cleaned', 'rain'],
      'Usar The signs are cleaned after the rain',
      'Cleaned with being means the cleaning is still happening',
      'Limpiar los carteles todavía pasa'
    ),
    tgt(
      'La basura está siendo recogida cerca de la puerta',
      'The trash is being collected near the gate',
      ['The', 'trash', 'is', 'being', 'collected'],
      ['The', 'trash', 'is', 'being', 'collected', 'gate'],
      'Usar The trash is collected near the gate',
      'Collected after being keeps the action ongoing',
      'Recoger la basura sigue ocurriendo'
    ),
    tgt(
      'Las bicicletas están siendo arregladas en el cobertizo',
      'The bicycles are being repaired in the shed',
      ['The', 'bicycles', 'are', 'being', 'repaired'],
      ['The', 'bicycles', 'are', 'being', 'repaired', 'shed'],
      'Usar The bicycles are repaired in the shed',
      'Being repaired shows the fix is in progress',
      'Arreglar bicicletas todavía no termina'
    ),
    tgt(
      'Los caminos están siendo abiertos otra vez',
      'The paths are being opened again',
      ['The', 'paths', 'are', 'being', 'opened'],
      ['The', 'paths', 'are', 'being', 'opened', 'again'],
      'Usar The paths are opened again',
      'Opened after being makes the ongoing work clear',
      'Abrir caminos sigue en curso'
    ),
    tgt(
      'Las mesas están siendo preparadas para la comida',
      'The tables are being prepared for the meal',
      ['The', 'tables', 'are', 'being', 'prepared'],
      ['The', 'tables', 'are', 'being', 'prepared', 'meal'],
      'Usar The tables are prepared for the meal',
      'Prepared with being keeps the scene current',
      'Preparar las mesas todavía está pasando'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
