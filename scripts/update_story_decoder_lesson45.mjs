import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[2];
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Present Perfect';
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
  { title: 'La oficina de objetos perdidos: Lo que ya se ha hecho', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'La oficina abre con cajas y etiquetas en la mesa',
      'The office opens with boxes and tags on the table',
      ['office', 'opens', 'boxes'],
      ['office', 'tags', 'table'],
      'Perder el ambiente de rutina',
      'The opening should feel like work that already matters now',
      'La oficina muestra organización real'
    ),
    ctx(
      'Un cartel dice que todo debe quedar anotado',
      'A sign says everything must be written down',
      ['sign', 'everything', 'written'],
      ['sign', 'written', 'down'],
      'Hacer la escena demasiado abstracta',
      'The sign sets up the passive perfect result',
      'El cartel deja clara la regla'
    ),
    ctx(
      'La encargada revisa una lista larga',
      'The clerk checks a long list',
      ['clerk', 'checks', 'list'],
      ['clerk', 'checks', 'list'],
      'Ignorar a quien controla el proceso',
      'The clerk keeps the scene grounded',
      'La encargada sostiene el orden'
    ),
    ctx(
      'Un niño pregunta si ya encontraron su cartera',
      'A child asks if his wallet has already been found',
      ['child', 'asks', 'wallet'],
      ['child', 'asks', 'wallet', 'already'],
      'Cerrar sin una duda actual',
      'The question should make the present relevance obvious',
      'La cartera perdida guía la historia'
    ),
    tgt(
      'La cartera ha sido encontrada',
      'The wallet has been found',
      ['The', 'wallet', 'has', 'been', 'found'],
      ['The', 'wallet', 'has', 'been', 'found'],
      'Usar The wallet found',
      'Passive Present Perfect uses have/has been + past participle',
      'La cartera ya apareció'
    ),
    tgt(
      'Las llaves han sido guardadas en la caja azul',
      'The keys have been kept in the blue box',
      ['The', 'keys', 'have', 'been', 'kept'],
      ['The', 'keys', 'have', 'been', 'kept', 'box'],
      'Usar The keys keep in the blue box',
      'Kept keeps the object as the focus',
      'Las llaves ya están protegidas'
    ),
    tgt(
      'Los nombres han sido escritos en las etiquetas',
      'The names have been written on the tags',
      ['The', 'names', 'have', 'been', 'written'],
      ['The', 'names', 'have', 'been', 'written', 'tags'],
      'Usar The names write on the tags',
      'Written after have been shows the passive action completed',
      'Los nombres ya quedaron puestos'
    ),
    tgt(
      'La lista ha sido actualizada',
      'The list has been updated',
      ['The', 'list', 'has', 'been', 'updated'],
      ['The', 'list', 'has', 'been', 'updated'],
      'Usar The list update',
      'Has been updated shows the change is already done',
      'La lista ahora está al día'
    ),
    tgt(
      'Los formularios han sido revisados por la encargada',
      'The forms have been checked by the clerk',
      ['The', 'forms', 'have', 'been', 'checked'],
      ['The', 'forms', 'have', 'been', 'checked', 'clerk'],
      'Usar The forms check by the clerk',
      'Passive Present Perfect keeps the forms as the subject',
      'Los formularios ya fueron revisados'
    ),
    tgt(
      'Los paquetes han sido devueltos a sus dueños',
      'The packages have been returned to their owners',
      ['The', 'packages', 'have', 'been', 'returned'],
      ['The', 'packages', 'have', 'been', 'returned', 'owners'],
      'Usar The packages return to their owners',
      'Returned after have been marks a completed passive result',
      'Los paquetes ya volvieron'
    ),
    tgt(
      'El aviso ha sido publicado en la pared',
      'The notice has been posted on the wall',
      ['The', 'notice', 'has', 'been', 'posted'],
      ['The', 'notice', 'has', 'been', 'posted', 'wall'],
      'Usar The notice posts on the wall',
      'Posted with has been shows a current result from a finished action',
      'El aviso ya está visible'
    ),
    tgt(
      'Las notas han sido organizadas por tema',
      'The notes have been organized by topic',
      ['The', 'notes', 'have', 'been', 'organized'],
      ['The', 'notes', 'have', 'been', 'organized', 'topic'],
      'Usar The notes organize by topic',
      'Organized keeps the notes as the passive focus',
      'Las notas ya quedaron ordenadas'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que ya está listo', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria abre con mesas largas y luces brillantes',
      'The fair opens with long tables and bright lights',
      ['fair', 'opens', 'tables'],
      ['fair', 'opens', 'lights'],
      'Perder el ambiente de exposición',
      'The setting should feel like a finished process with visible results',
      'La feria ya está preparada'
    ),
    ctx(
      'Los estudiantes llegan con cajas de cartón',
      'The students arrive with cardboard boxes',
      ['students', 'arrive', 'boxes'],
      ['students', 'arrive', 'boxes'],
      'No mostrar material de trabajo',
      'The boxes cue the materials that have already been handled',
      'Las cajas anuncian el proyecto'
    ),
    ctx(
      'La maestra observa el salón con calma',
      'The teacher watches the room calmly',
      ['teacher', 'watches', 'room'],
      ['teacher', 'watches', 'room'],
      'Ignorar la supervisión del montaje',
      'The teacher should witness the finished state of the work',
      'La maestra confirma el avance'
    ),
    ctx(
      'Hay carteles, tijeras y cinta sobre las mesas',
      'There are posters, scissors, and tape on the tables',
      ['posters', 'scissors', 'tape'],
      ['posters', 'scissors', 'tape'],
      'Hacer la escena demasiado vacía',
      'The supplies support present relevance after completed actions',
      'Los materiales ya están listos'
    ),
    tgt(
      'Los modelos han sido construidos con cartón',
      'The models have been built with cardboard',
      ['The', 'models', 'have', 'been', 'built'],
      ['The', 'models', 'have', 'been', 'built', 'cardboard'],
      'Usar The models build with cardboard',
      'Built after have been marks a completed passive action with current result',
      'Los modelos ya existen'
    ),
    tgt(
      'Los pósters han sido impresos para la feria',
      'The posters have been printed for the fair',
      ['The', 'posters', 'have', 'been', 'printed'],
      ['The', 'posters', 'have', 'been', 'printed', 'fair'],
      'Usar The posters print for the fair',
      'Printed shows the work is finished and useful now',
      'Los pósters ya están listos'
    ),
    tgt(
      'Los cables han sido revisados por el equipo',
      'The wires have been checked by the team',
      ['The', 'wires', 'have', 'been', 'checked'],
      ['The', 'wires', 'have', 'been', 'checked', 'team'],
      'Usar The wires check by the team',
      'Checked with have been focuses on the completed inspection',
      'Los cables ya pasaron la revisión'
    ),
    tgt(
      'Los resultados han sido escritos en una hoja',
      'The results have been written on a sheet',
      ['The', 'results', 'have', 'been', 'written'],
      ['The', 'results', 'have', 'been', 'written', 'sheet'],
      'Usar The results write on a sheet',
      'Written keeps the results as the subject receiving the action',
      'Los resultados ya quedaron escritos'
    ),
    tgt(
      'Las mesas han sido limpiadas antes de la apertura',
      'The tables have been cleaned before opening',
      ['The', 'tables', 'have', 'been', 'cleaned'],
      ['The', 'tables', 'have', 'been', 'cleaned', 'opening'],
      'Usar The tables clean before opening',
      'Cleaned shows the action is completed now',
      'Las mesas ya están limpias'
    ),
    tgt(
      'Las preguntas han sido respondidas por el equipo',
      'The questions have been answered by the team',
      ['The', 'questions', 'have', 'been', 'answered'],
      ['The', 'questions', 'have', 'been', 'answered', 'team'],
      'Usar The questions answer by the team',
      'Answered keeps the passive focus on the questions',
      'Las preguntas ya recibieron respuesta'
    ),
    tgt(
      'Los bocadillos han sido traídos por los padres',
      'The snacks have been brought by the parents',
      ['The', 'snacks', 'have', 'been', 'brought'],
      ['The', 'snacks', 'have', 'been', 'brought', 'parents'],
      'Usar The snacks bring by the parents',
      'Brought is the right passive participle here',
      'Los bocadillos ya están en la mesa'
    ),
    tgt(
      'Las notas han sido organizadas por tema',
      'The notes have been organized by topic',
      ['The', 'notes', 'have', 'been', 'organized'],
      ['The', 'notes', 'have', 'been', 'organized', 'topic'],
      'Usar The notes organize by topic',
      'Organized keeps the completed work visible',
      'Las notas ya quedaron ordenadas'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que ya se ha resuelto', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'El barrio está tranquilo pero lleno de movimiento',
      'The neighborhood is calm but full of movement',
      ['neighborhood', 'calm', 'movement'],
      ['neighborhood', 'calm', 'movement'],
      'Perder el tono comunitario',
      'The scene should show a present result from earlier work',
      'El barrio ya muestra el resultado'
    ),
    ctx(
      'Hay herramientas y pintura cerca de la acera',
      'There are tools and paint near the curb',
      ['tools', 'paint', 'curb'],
      ['tools', 'paint', 'curb'],
      'No mostrar materiales del barrio',
      'The tools and paint indicate completed neighborhood action',
      'Las herramientas anuncian la ayuda'
    ),
    ctx(
      'Los vecinos hablan mientras miran las paredes',
      'The neighbors talk while they look at the walls',
      ['neighbors', 'talk', 'walls'],
      ['neighbors', 'talk', 'walls'],
      'Ignorar la observación del lugar',
      'The walls should show the result of past work',
      'Las paredes ya cambiaron'
    ),
    ctx(
      'Un niño sostiene una brocha pequeña',
      'A child holds a small brush',
      ['child', 'holds', 'brush'],
      ['child', 'holds', 'brush'],
      'Cerrar sin una señal clara de trabajo',
      'The brush cues ongoing neighborhood maintenance and its results',
      'La brocha completa la escena'
    ),
    tgt(
      'Los bancos han sido reparados por los voluntarios',
      'The benches have been repaired by the volunteers',
      ['The', 'benches', 'have', 'been', 'repaired'],
      ['The', 'benches', 'have', 'been', 'repaired', 'volunteers'],
      'Usar The benches repair by the volunteers',
      'Repaired with have been means the work is already finished',
      'Los bancos ya sirven otra vez'
    ),
    tgt(
      'Las paredes han sido pintadas esta mañana',
      'The walls have been painted this morning',
      ['The', 'walls', 'have', 'been', 'painted'],
      ['The', 'walls', 'have', 'been', 'painted', 'morning'],
      'Usar The walls paint this morning',
      'Painted shows a completed action with present relevance',
      'Las paredes ya tienen color'
    ),
    tgt(
      'Las plantas han sido regadas por los vecinos',
      'The plants have been watered by the neighbors',
      ['The', 'plants', 'have', 'been', 'watered'],
      ['The', 'plants', 'have', 'been', 'watered', 'neighbors'],
      'Usar The plants water by the neighbors',
      'Watered keeps the plants as the result of a finished action',
      'Las plantas ya están cuidadas'
    ),
    tgt(
      'Los carteles han sido limpiados después de la lluvia',
      'The signs have been cleaned after the rain',
      ['The', 'signs', 'have', 'been', 'cleaned'],
      ['The', 'signs', 'have', 'been', 'cleaned', 'rain'],
      'Usar The signs clean after the rain',
      'Cleaned is the correct participle for the completed cleaning',
      'Los carteles ya quedaron bien'
    ),
    tgt(
      'La basura ha sido recogida cerca de la puerta',
      'The trash has been collected near the gate',
      ['The', 'trash', 'has', 'been', 'collected'],
      ['The', 'trash', 'has', 'been', 'collected', 'gate'],
      'Usar The trash collect near the gate',
      'Has been collected shows the result is already visible',
      'La basura ya fue sacada'
    ),
    tgt(
      'Las bicicletas han sido arregladas en el cobertizo',
      'The bicycles have been repaired in the shed',
      ['The', 'bicycles', 'have', 'been', 'repaired'],
      ['The', 'bicycles', 'have', 'been', 'repaired', 'shed'],
      'Usar The bicycles repair in the shed',
      'Repaired keeps the bicycles as the passive subject',
      'Las bicicletas ya quedaron listas'
    ),
    tgt(
      'Los caminos han sido abiertos otra vez',
      'The paths have been opened again',
      ['The', 'paths', 'have', 'been', 'opened'],
      ['The', 'paths', 'have', 'been', 'opened', 'again'],
      'Usar The paths open again',
      'Opened after have been marks the completed work',
      'Los caminos ya están abiertos'
    ),
    tgt(
      'Las mesas han sido preparadas para la comida',
      'The tables have been prepared for the meal',
      ['The', 'tables', 'have', 'been', 'prepared'],
      ['The', 'tables', 'have', 'been', 'prepared', 'meal'],
      'Usar The tables prepare for the meal',
      'Prepared is the passive participle that fits the result',
      'Las mesas ya quedaron listas'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
