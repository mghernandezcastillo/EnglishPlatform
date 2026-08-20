import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[7];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['was', 'were', 'has', 'have', 'had'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Future Perfect';
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
  { title: 'El parque después del festival: Lo que ya habrá quedado listo', type: 'Descubrimiento', value: 'cooperación' },
  [
    ctx(
      'El parque todavía tiene carteles del festival',
      'The park still has festival signs',
      ['park', 'festival', 'signs'],
      ['park', 'festival', 'signs'],
      'Perder la idea de algo que quedará terminado en el futuro',
      'The opening should point to a future point when the work will already be complete',
      'El parque mira hacia el final'
    ),
    ctx(
      'Los voluntarios revisan una lista larga',
      'The volunteers check a long list',
      ['volunteers', 'check', 'list'],
      ['volunteers', 'check', 'list'],
      'Hacer la escena demasiado simple',
      'The list should support the idea of things that will already be finished later',
      'La lista marca lo pendiente'
    ),
    ctx(
      'Hay pintura, cintas y cajas en la bodega',
      'There is paint, tape, and boxes in the shed',
      ['paint', 'tape', 'boxes'],
      ['paint', 'tape', 'boxes'],
      'Ignorar el material del cierre',
      'The materials should cue future completion',
      'Los materiales anuncian el final'
    ),
    ctx(
      'Sara pregunta qué terminará primero',
      'Sara asks what will be finished first',
      ['Sara', 'asks', 'finished'],
      ['Sara', 'asks', 'finished'],
      'Cerrar sin una meta futura clara',
      'The question should keep the future completion visible',
      'Sara ya piensa en el resultado'
    ),
    tgt(
      'Los bancos habrán sido reparados para el viernes',
      'The benches will have been repaired by Friday',
      ['The', 'benches', 'will', 'have', 'been', 'repaired'],
      ['The', 'benches', 'will', 'have', 'been', 'repaired', 'Friday'],
      'Usar The benches will be repaired by Friday',
      'Will have been repaired places the repair before a future deadline',
      'Los bancos ya estarán listos para entonces'
    ),
    tgt(
      'La basura habrá sido recogida para el mediodía',
      'The trash will have been collected by noon',
      ['The', 'trash', 'will', 'have', 'been', 'collected'],
      ['The', 'trash', 'will', 'have', 'been', 'collected', 'noon'],
      'Usar The trash will be collected by noon',
      'Future perfect passive shows the work completed before the deadline',
      'La basura ya no estará ahí'
    ),
    tgt(
      'Las luces habrán sido apagadas antes de la noche',
      'The lights will have been turned off before night',
      ['The', 'lights', 'will', 'have', 'been', 'turned', 'off'],
      ['The', 'lights', 'will', 'have', 'been', 'turned', 'off', 'night'],
      'Usar The lights will be turned off before night',
      'Will have been + past participle signals completed future action',
      'Las luces ya estarán apagadas'
    ),
    tgt(
      'Los carteles habrán sido retirados al final',
      'The signs will have been removed at the end',
      ['The', 'signs', 'will', 'have', 'been', 'removed'],
      ['The', 'signs', 'will', 'have', 'been', 'removed', 'end'],
      'Usar The signs will be removed at the end',
      'Removed after will have been marks a completed future state',
      'Los carteles ya no estarán'
    ),
    tgt(
      'Las sillas habrán sido guardadas en la bodega',
      'The chairs will have been stored in the shed',
      ['The', 'chairs', 'will', 'have', 'been', 'stored'],
      ['The', 'chairs', 'will', 'have', 'been', 'stored', 'shed'],
      'Usar The chairs will be stored in the shed',
      'Stored after will have been points to completion before the reference time',
      'Las sillas ya estarán guardadas'
    ),
    tgt(
      'El camino habrá sido limpiado antes de la visita',
      'The path will have been cleaned before the visit',
      ['The', 'path', 'will', 'have', 'been', 'cleaned'],
      ['The', 'path', 'will', 'have', 'been', 'cleaned', 'visit'],
      'Usar The path will be cleaned before the visit',
      'Cleaned with will have been means the result is complete by then',
      'El camino ya estará limpio'
    ),
    tgt(
      'Las fotos habrán sido impresas para el álbum',
      'The photos will have been printed for the album',
      ['The', 'photos', 'will', 'have', 'been', 'printed'],
      ['The', 'photos', 'will', 'have', 'been', 'printed', 'album'],
      'Usar The photos will be printed for the album',
      'Printed after will have been is the future perfect passive form',
      'Las fotos ya estarán listas'
    ),
    tgt(
      'Las señales habrán sido pintadas de nuevo',
      'The signs will have been painted again',
      ['The', 'signs', 'will', 'have', 'been', 'painted'],
      ['The', 'signs', 'will', 'have', 'been', 'painted', 'again'],
      'Usar The signs will be painted again',
      'Painted after will have been indicates a completed future change',
      'Las señales ya habrán cambiado'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que ya habrá quedado preparado', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria aún está vacía a primera hora',
      'The fair is still empty early in the day',
      ['fair', 'empty', 'day'],
      ['fair', 'empty', 'day'],
      'Perder el sentido de preparación futura',
      'The opening should point toward a later moment when everything is ready',
      'La feria piensa en el final'
    ),
    ctx(
      'Las mesas esperan en filas rectas',
      'The tables wait in straight rows',
      ['tables', 'wait', 'rows'],
      ['tables', 'wait', 'rows'],
      'Hacer la escena demasiado simple',
      'The rows should support the idea of future completion',
      'Las mesas esperan su turno'
    ),
    ctx(
      'Los estudiantes traen cajas y carteles',
      'The students bring boxes and signs',
      ['students', 'bring', 'boxes'],
      ['students', 'bring', 'signs'],
      'Ignorar el trabajo que todavía faltará terminar',
      'The materials should make the completed future result easy to imagine',
      'Los materiales ya anuncian avance'
    ),
    ctx(
      'La profesora mira el reloj con calma',
      'The teacher watches the clock calmly',
      ['teacher', 'watches', 'clock'],
      ['teacher', 'watches', 'clock'],
      'Cerrar sin una referencia temporal',
      'The clock should frame the future deadline',
      'El reloj marca la meta'
    ),
    tgt(
      'Los modelos habrán sido construidos antes de la apertura',
      'The models will have been built before opening',
      ['The', 'models', 'will', 'have', 'been', 'built'],
      ['The', 'models', 'will', 'have', 'been', 'built', 'opening'],
      'Usar The models will be built before opening',
      'Built after will have been means the work is done by the deadline',
      'Los modelos ya estarán terminados'
    ),
    tgt(
      'Los pósters habrán sido impresos para la feria',
      'The posters will have been printed for the fair',
      ['The', 'posters', 'will', 'have', 'been', 'printed'],
      ['The', 'posters', 'will', 'have', 'been', 'printed', 'fair'],
      'Usar The posters will be printed for the fair',
      'Printed after will have been keeps the future completion clear',
      'Los pósters ya estarán listos'
    ),
    tgt(
      'Los cables habrán sido revisados antes del inicio',
      'The wires will have been checked before the start',
      ['The', 'wires', 'will', 'have', 'been', 'checked'],
      ['The', 'wires', 'will', 'have', 'been', 'checked', 'start'],
      'Usar The wires will be checked before the start',
      'Checked with will have been shows completed preparation',
      'Los cables ya estarán revisados'
    ),
    tgt(
      'Las mesas habrán sido limpiadas cuando lleguen los visitantes',
      'The tables will have been cleaned when the visitors arrive',
      ['The', 'tables', 'will', 'have', 'been', 'cleaned'],
      ['The', 'tables', 'will', 'have', 'been', 'cleaned', 'visitors'],
      'Usar The tables will be cleaned when the visitors arrive',
      'Cleaned after will have been signals the action is complete by that time',
      'Las mesas ya estarán limpias'
    ),
    tgt(
      'Las preguntas habrán sido respondidas al final',
      'The questions will have been answered at the end',
      ['The', 'questions', 'will', 'have', 'been', 'answered'],
      ['The', 'questions', 'will', 'have', 'been', 'answered', 'end'],
      'Usar The questions will be answered at the end',
      'Answered after will have been points to future completion',
      'Las preguntas ya tendrán respuesta'
    ),
    tgt(
      'Las notas habrán sido organizadas por tema',
      'The notes will have been organized by topic',
      ['The', 'notes', 'will', 'have', 'been', 'organized'],
      ['The', 'notes', 'will', 'have', 'been', 'organized', 'topic'],
      'Usar The notes will be organized by topic',
      'Organized after will have been is the right future perfect passive form',
      'Las notas ya estarán listas'
    ),
    tgt(
      'Las tarjetas habrán sido pegadas en la pared',
      'The cards will have been posted on the wall',
      ['The', 'cards', 'will', 'have', 'been', 'posted'],
      ['The', 'cards', 'will', 'have', 'been', 'posted', 'wall'],
      'Usar The cards will be posted on the wall',
      'Posted after will have been marks completion before the reference point',
      'Las tarjetas ya estarán puestas'
    ),
    tgt(
      'Los resultados habrán sido mostrados en la pizarra',
      'The results will have been shown on the board',
      ['The', 'results', 'will', 'have', 'been', 'shown'],
      ['The', 'results', 'will', 'have', 'been', 'shown', 'board'],
      'Usar The results will be shown on the board',
      'Shown after will have been keeps the future completion in focus',
      'Los resultados ya estarán visibles'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Un día en familia: Lo que ya habrá quedado listo', type: 'Integración', value: 'gratitud' },
  [
    ctx(
      'La casa sigue tranquila pero todos trabajan',
      'The house is still quiet but everyone works',
      ['house', 'quiet', 'works'],
      ['house', 'quiet', 'works'],
      'Perder el ambiente de anticipación',
      'The family scene should point to a later moment of completed preparation',
      'La casa se mueve hacia el final'
    ),
    ctx(
      'Hay platos y vasos sobre la mesa',
      'There are plates and glasses on the table',
      ['plates', 'glasses', 'table'],
      ['plates', 'glasses', 'table'],
      'Hacer la escena demasiado vacía',
      'The table items should suggest what will already be finished later',
      'La mesa prepara el cierre'
    ),
    ctx(
      'Los niños hablan de la visita',
      'The children talk about the visit',
      ['children', 'talk', 'visit'],
      ['children', 'talk', 'visit'],
      'Ignorar la visita como meta futura',
      'The visit should anchor the future deadline',
      'La visita marca el plan'
    ),
    ctx(
      'La abuela trae fruta y pan',
      'Grandma brings fruit and bread',
      ['Grandma', 'brings', 'fruit'],
      ['Grandma', 'brings', 'bread'],
      'Cerrar sin una señal de preparación',
      'The food should connect to what will have been prepared',
      'La comida ya se organiza'
    ),
    tgt(
      'La mesa habrá sido arreglada antes de que lleguen',
      'The table will have been set before they arrive',
      ['The', 'table', 'will', 'have', 'been', 'set'],
      ['The', 'table', 'will', 'have', 'been', 'set', 'arrive'],
      'Usar The table will be set before they arrive',
      'Set after will have been means the table is ready by then',
      'La mesa ya estará lista'
    ),
    tgt(
      'La cena habrá sido servida a las ocho',
      'Dinner will have been served by eight',
      ['Dinner', 'will', 'have', 'been', 'served'],
      ['Dinner', 'will', 'have', 'been', 'served', 'eight'],
      'Usar Dinner will be served by eight',
      'Served after will have been shows completion before the deadline',
      'La cena ya estará servida'
    ),
    tgt(
      'Las velas habrán sido encendidas cuando oscurezca',
      'The candles will have been lit when it gets dark',
      ['The', 'candles', 'will', 'have', 'been', 'lit'],
      ['The', 'candles', 'will', 'have', 'been', 'lit', 'dark'],
      'Usar The candles will be lit when it gets dark',
      'Lit after will have been marks a future completed action',
      'Las velas ya estarán encendidas'
    ),
    tgt(
      'Las bebidas habrán sido colocadas en la nevera',
      'The drinks will have been placed in the fridge',
      ['The', 'drinks', 'will', 'have', 'been', 'placed'],
      ['The', 'drinks', 'will', 'have', 'been', 'placed', 'fridge'],
      'Usar The drinks will be placed in the fridge',
      'Placed with will have been shows the job is done before the reference point',
      'Las bebidas ya estarán frías'
    ),
    tgt(
      'Las servilletas habrán sido dobladas por los niños',
      'The napkins will have been folded by the children',
      ['The', 'napkins', 'will', 'have', 'been', 'folded'],
      ['The', 'napkins', 'will', 'have', 'been', 'folded', 'children'],
      'Usar The napkins will be folded by the children',
      'Folded after will have been points to a finished future result',
      'Las servilletas ya estarán listas'
    ),
    tgt(
      'Las frutas habrán sido cortadas antes del postre',
      'The fruit will have been cut before dessert',
      ['The', 'fruit', 'will', 'have', 'been', 'cut'],
      ['The', 'fruit', 'will', 'have', 'been', 'cut', 'dessert'],
      'Usar The fruit will be cut before dessert',
      'Cut after will have been shows future completion',
      'La fruta ya estará preparada'
    ),
    tgt(
      'Los platos habrán sido lavados después de comer',
      'The dishes will have been washed after eating',
      ['The', 'dishes', 'will', 'have', 'been', 'washed'],
      ['The', 'dishes', 'will', 'have', 'been', 'washed', 'eating'],
      'Usar The dishes will be washed after eating',
      'Washed after will have been makes the result complete by then',
      'Los platos ya estarán limpios'
    ),
    tgt(
      'Las fotos habrán sido guardadas en un álbum',
      'The photos will have been saved in an album',
      ['The', 'photos', 'will', 'have', 'been', 'saved'],
      ['The', 'photos', 'will', 'have', 'been', 'saved', 'album'],
      'Usar The photos will be saved in an album',
      'Saved after will have been keeps the future result natural',
      'Las fotos ya estarán guardadas'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
