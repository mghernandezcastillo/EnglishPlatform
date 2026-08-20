import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[5];
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Past Perfect';
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
  { title: 'El jardín del barrio: Lo que ya había pasado antes', type: 'Descubrimiento', value: 'cooperación' },
  [
    ctx(
      'El jardín del barrio estaba mojado después de la lluvia',
      'The neighborhood garden was wet after the rain',
      ['garden', 'wet', 'rain'],
      ['garden', 'wet', 'rain'],
      'Perder el ambiente de algo que ya ocurrió antes',
      'The opening should show that some work was done before another past event',
      'El jardín ya tiene historia'
    ),
    ctx(
      'Los voluntarios llegaban con botas limpias',
      'The volunteers arrived with clean boots',
      ['volunteers', 'arrived', 'boots'],
      ['volunteers', 'arrived', 'boots'],
      'Hacer la escena demasiado neutra',
      'The volunteers should connect to previous completed actions',
      'Los voluntarios llegan al resultado'
    ),
    ctx(
      'Había una mesa con semillas y macetas',
      'There was a table with seeds and pots',
      ['table', 'seeds', 'pots'],
      ['table', 'seeds', 'pots'],
      'Ignorar los objetos que muestran preparación previa',
      'The seeds and pots should point to actions that had already happened',
      'Las semillas ya estaban listas'
    ),
    ctx(
      'Sara miraba el camino con calma',
      'Sara watched the path calmly',
      ['Sara', 'watched', 'path'],
      ['Sara', 'watched', 'path'],
      'Cerrar sin una referencia temporal clara',
      'The calm watching should follow earlier completed work',
      'Sara observa el resultado'
    ),
    tgt(
      'Los bancos habían sido reparados antes de la reunión',
      'The benches had been repaired before the meeting',
      ['The', 'benches', 'had', 'been', 'repaired'],
      ['The', 'benches', 'had', 'been', 'repaired', 'meeting'],
      'Usar The benches were repaired before the meeting',
      'Had been repaired places the repair earlier than another past event',
      'Los bancos ya estaban arreglados'
    ),
    tgt(
      'Las plantas habían sido regadas antes del mediodía',
      'The plants had been watered before noon',
      ['The', 'plants', 'had', 'been', 'watered'],
      ['The', 'plants', 'had', 'been', 'watered', 'noon'],
      'Usar The plants were watered before noon',
      'The watering was completed earlier than the reference time',
      'Las plantas ya recibieron agua'
    ),
    tgt(
      'Las herramientas habían sido guardadas en la caseta',
      'The tools had been stored in the shed',
      ['The', 'tools', 'had', 'been', 'stored'],
      ['The', 'tools', 'had', 'been', 'stored', 'shed'],
      'Usar The tools were stored in the shed',
      'Had been stored keeps the storage before the later event',
      'Las herramientas ya estaban guardadas'
    ),
    tgt(
      'El camino había sido limpiado antes de que llegaran los visitantes',
      'The path had been cleaned before the visitors arrived',
      ['The', 'path', 'had', 'been', 'cleaned'],
      ['The', 'path', 'had', 'been', 'cleaned', 'visitors'],
      'Usar The path was cleaned before the visitors arrived',
      'Past perfect passive shows the cleaning happened earlier',
      'El camino ya estaba listo'
    ),
    tgt(
      'La señal había sido colocada el día anterior',
      'The sign had been posted the day before',
      ['The', 'sign', 'had', 'been', 'posted'],
      ['The', 'sign', 'had', 'been', 'posted', 'before'],
      'Usar The sign was posted the day before',
      'Posted after had been points to a prior completed action',
      'La señal ya estaba en su lugar'
    ),
    tgt(
      'La basura había sido recogida antes de la cena',
      'The trash had been collected before dinner',
      ['The', 'trash', 'had', 'been', 'collected'],
      ['The', 'trash', 'had', 'been', 'collected', 'dinner'],
      'Usar The trash was collected before dinner',
      'Collected with had been marks an earlier finished task',
      'La basura ya no estaba'
    ),
    tgt(
      'La cerca había sido pintada antes del picnic',
      'The fence had been painted before the picnic',
      ['The', 'fence', 'had', 'been', 'painted'],
      ['The', 'fence', 'had', 'been', 'painted', 'picnic'],
      'Usar The fence was painted before the picnic',
      'Had been painted places the painting before the picnic',
      'La cerca ya tenía color'
    ),
    tgt(
      'La tierra había sido cubierta con mantillo',
      'The soil had been covered with mulch',
      ['The', 'soil', 'had', 'been', 'covered'],
      ['The', 'soil', 'had', 'been', 'covered', 'mulch'],
      'Usar The soil was covered with mulch',
      'Covered after had been shows a prior completed action',
      'La tierra ya estaba protegida'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que ya había quedado listo', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La feria comenzó con carteles ordenados en la pared',
      'The fair started with posters arranged on the wall',
      ['fair', 'started', 'posters'],
      ['fair', 'started', 'posters'],
      'Perder el sentido de preparación previa',
      'The opening should show work that had already been completed before the event',
      'La feria ya muestra preparación'
    ),
    ctx(
      'Los estudiantes entraban con sus notas dobladas',
      'The students came in with their notes folded',
      ['students', 'came', 'notes'],
      ['students', 'came', 'notes'],
      'No mostrar que algo ya estaba listo antes',
      'Folded notes help cue completed prior work',
      'Las notas ya estaban listas'
    ),
    ctx(
      'La profesora sonreía al ver el salón',
      'The teacher smiled when she saw the room',
      ['teacher', 'smiled', 'room'],
      ['teacher', 'smiled', 'room'],
      'Ignorar la reacción a algo ya terminado',
      'The smile should respond to completed earlier work',
      'La profesora ve el resultado'
    ),
    ctx(
      'Había un póster grande al frente',
      'There was a big poster at the front',
      ['poster', 'front'],
      ['poster', 'front'],
      'Cerrar sin una meta clara',
      'The poster should point to what had been done before',
      'El póster ya estaba presente'
    ),
    tgt(
      'Los modelos habían sido construidos antes de la clase',
      'The models had been built before class',
      ['The', 'models', 'had', 'been', 'built'],
      ['The', 'models', 'had', 'been', 'built', 'class'],
      'Usar The models were built before class',
      'Had been built shows the building happened before the class started',
      'Los modelos ya estaban terminados'
    ),
    tgt(
      'Los pósters habían sido impresos para la feria',
      'The posters had been printed for the fair',
      ['The', 'posters', 'had', 'been', 'printed'],
      ['The', 'posters', 'had', 'been', 'printed', 'fair'],
      'Usar The posters were printed for the fair',
      'Printed after had been marks an earlier finished step',
      'Los pósters ya estaban listos'
    ),
    tgt(
      'Los cables habían sido revisados antes de encender',
      'The wires had been checked before turning it on',
      ['The', 'wires', 'had', 'been', 'checked'],
      ['The', 'wires', 'had', 'been', 'checked', 'turning'],
      'Usar The wires were checked before turning it on',
      'Checked with had been places the inspection earlier',
      'Los cables ya fueron revisados'
    ),
    tgt(
      'Las mesas habían sido limpiadas antes de abrir',
      'The tables had been cleaned before opening',
      ['The', 'tables', 'had', 'been', 'cleaned'],
      ['The', 'tables', 'had', 'been', 'cleaned', 'opening'],
      'Usar The tables were cleaned before opening',
      'Cleaned after had been shows the earlier completed action',
      'Las mesas ya estaban limpias'
    ),
    tgt(
      'Las preguntas habían sido respondidas por el equipo',
      'The questions had been answered by the team',
      ['The', 'questions', 'had', 'been', 'answered'],
      ['The', 'questions', 'had', 'been', 'answered', 'team'],
      'Usar The questions were answered by the team',
      'Answered after had been keeps the response in the earlier past',
      'Las preguntas ya tenían respuesta'
    ),
    tgt(
      'El tablero había sido borrado antes del inicio',
      'The board had been erased before the start',
      ['The', 'board', 'had', 'been', 'erased'],
      ['The', 'board', 'had', 'been', 'erased', 'start'],
      'Usar The board was erased before the start',
      'Erased with had been shows the erasing happened earlier',
      'El tablero ya estaba limpio'
    ),
    tgt(
      'Los archivos habían sido organizados por tema',
      'The files had been organized by topic',
      ['The', 'files', 'had', 'been', 'organized'],
      ['The', 'files', 'had', 'been', 'organized', 'topic'],
      'Usar The files were organized by topic',
      'Organized after had been marks an earlier completed result',
      'Los archivos ya estaban en orden'
    ),
    tgt(
      'Las tarjetas habían sido pegadas en la pared',
      'The cards had been posted on the wall',
      ['The', 'cards', 'had', 'been', 'posted'],
      ['The', 'cards', 'had', 'been', 'posted', 'wall'],
      'Usar The cards were posted on the wall',
      'Posted after had been signals the earlier completed action',
      'Las tarjetas ya estaban en su lugar'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La pequeña panadería: Lo que ya había quedado hecho', type: 'Integración', value: 'trabajo diligente' },
  [
    ctx(
      'La panadería abrió con olor a pan caliente',
      'The bakery opened with the smell of warm bread',
      ['bakery', 'opened', 'bread'],
      ['bakery', 'opened', 'bread'],
      'Perder el ambiente de madrugada',
      'The opening should show actions that were already finished before opening',
      'La panadería ya estaba lista'
    ),
    ctx(
      'Las bandejas brillaban bajo la luz',
      'The trays shone under the light',
      ['trays', 'shone', 'light'],
      ['trays', 'shone', 'light'],
      'Hacer la escena demasiado simple',
      'The trays should feel like the result of earlier work',
      'Las bandejas ya estaban limpias'
    ),
    ctx(
      'Ana y Leo caminaban despacio entre las mesas',
      'Ana and Leo walked slowly between the tables',
      ['Ana', 'Leo', 'walked', 'tables'],
      ['Ana', 'Leo', 'walked', 'tables'],
      'Ignorar a quienes hicieron el trabajo',
      'The walking pair should lead to a completed preparation',
      'Ana y Leo ya terminaron parte del trabajo'
    ),
    ctx(
      'Había una nota pegada junto a la caja',
      'There was a note posted by the register',
      ['note', 'posted', 'register'],
      ['note', 'posted', 'register'],
      'Cerrar sin una señal de trabajo previo',
      'The note should signal something that had been done earlier',
      'La nota ya contaba una historia'
    ),
    tgt(
      'Las bandejas habían sido llenadas con panecillos',
      'The trays had been filled with rolls',
      ['The', 'trays', 'had', 'been', 'filled'],
      ['The', 'trays', 'had', 'been', 'filled', 'rolls'],
      'Usar The trays were filled with rolls',
      'Filled after had been marks a prior completed action',
      'Las bandejas ya estaban completas'
    ),
    tgt(
      'La masa había sido preparada la noche anterior',
      'The dough had been prepared the night before',
      ['The', 'dough', 'had', 'been', 'prepared'],
      ['The', 'dough', 'had', 'been', 'prepared', 'night'],
      'Usar The dough was prepared the night before',
      'Had been prepared puts the preparation before the opening',
      'La masa ya estaba lista'
    ),
    tgt(
      'Los pedidos habían sido escritos en el tablero',
      'The orders had been written on the board',
      ['The', 'orders', 'had', 'been', 'written'],
      ['The', 'orders', 'had', 'been', 'written', 'board'],
      'Usar The orders were written on the board',
      'Written after had been shows the earlier completed task',
      'Los pedidos ya estaban anotados'
    ),
    tgt(
      'Las ventanas habían sido lavadas antes de abrir',
      'The windows had been washed before opening',
      ['The', 'windows', 'had', 'been', 'washed'],
      ['The', 'windows', 'had', 'been', 'washed', 'opening'],
      'Usar The windows were washed before opening',
      'Washed after had been keeps the action earlier in time',
      'Las ventanas ya brillaban'
    ),
    tgt(
      'Los pasteles habían sido enfriados antes de salir',
      'The cakes had been cooled before leaving',
      ['The', 'cakes', 'had', 'been', 'cooled'],
      ['The', 'cakes', 'had', 'been', 'cooled', 'leaving'],
      'Usar The cakes were cooled before leaving',
      'Cooled after had been shows the earlier finished action',
      'Los pasteles ya estaban listos'
    ),
    tgt(
      'Las cajas habían sido cerradas con cinta',
      'The boxes had been sealed with tape',
      ['The', 'boxes', 'had', 'been', 'sealed'],
      ['The', 'boxes', 'had', 'been', 'sealed', 'tape'],
      'Usar The boxes were sealed with tape',
      'Sealed keeps the boxes as the passive focus',
      'Las cajas ya estaban cerradas'
    ),
    tgt(
      'La mesa había sido limpiada antes del almuerzo',
      'The table had been cleaned before lunch',
      ['The', 'table', 'had', 'been', 'cleaned'],
      ['The', 'table', 'had', 'been', 'cleaned', 'lunch'],
      'Usar The table was cleaned before lunch',
      'Cleaned after had been places the cleaning earlier',
      'La mesa ya estaba limpia'
    ),
    tgt(
      'Las fotos habían sido ordenadas en álbumes',
      'The photos had been arranged in albums',
      ['The', 'photos', 'had', 'been', 'arranged'],
      ['The', 'photos', 'had', 'been', 'arranged', 'albums'],
      'Usar The photos were arranged in albums',
      'Arranged after had been shows the earlier completed organization',
      'Las fotos ya tenían su lugar'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
