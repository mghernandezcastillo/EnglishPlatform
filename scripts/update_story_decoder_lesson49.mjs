import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[6];
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Future Simple';
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
  { title: 'El parque después del festival: Lo que se hará mañana', type: 'Descubrimiento', value: 'cooperación' },
  [
    ctx(
      'El parque quedó tranquilo después del festival',
      'The park was quiet after the festival',
      ['park', 'quiet', 'festival'],
      ['park', 'quiet', 'festival'],
      'Perder el ambiente de cierre y planificación',
      'The opening should point toward future actions on the park',
      'El parque ya piensa en lo que sigue'
    ),
    ctx(
      'Hay cajas con adornos junto a la banca',
      'There are boxes of decorations by the bench',
      ['boxes', 'decorations', 'bench'],
      ['boxes', 'decorations', 'bench'],
      'Hacer la escena demasiado vacía',
      'The boxes should cue future cleanup and repair work',
      'Las cajas anuncian trabajo pendiente'
    ),
    ctx(
      'Los voluntarios hablan del plan de mañana',
      "The volunteers talk about tomorrow's plan",
      ['volunteers', 'talk', 'tomorrow'],
      ['volunteers', 'talk', 'plan'],
      'Ignorar la referencia al futuro',
      'The discussion should keep the future visible',
      'El plan de mañana ya está sobre la mesa'
    ),
    ctx(
      'Sara revisa una lista de tareas',
      'Sara checks a task list',
      ['Sara', 'checks', 'task', 'list'],
      ['Sara', 'checks', 'task', 'list'],
      'Cerrar sin una idea de organización futura',
      'The task list should prepare the passive future sentences',
      'La lista prepara lo que viene'
    ),
    tgt(
      'Los bancos serán reparados mañana',
      'The benches will be repaired tomorrow',
      ['The', 'benches', 'will', 'be', 'repaired'],
      ['The', 'benches', 'will', 'be', 'repaired', 'tomorrow'],
      'Usar The benches repair tomorrow',
      'Passive Future Simple uses will be + past participle',
      'Los bancos se arreglarán mañana'
    ),
    tgt(
      'La basura será recogida por la mañana',
      'The trash will be collected in the morning',
      ['The', 'trash', 'will', 'be', 'collected'],
      ['The', 'trash', 'will', 'be', 'collected', 'morning'],
      'Usar The trash collects in the morning',
      'Will be + past participle keeps the trash as the subject',
      'La basura se recogerá después'
    ),
    tgt(
      'Las luces serán apagadas después del evento',
      'The lights will be turned off after the event',
      ['The', 'lights', 'will', 'be', 'turned', 'off'],
      ['The', 'lights', 'will', 'be', 'turned', 'off', 'event'],
      'Usar The lights turn off after the event',
      'Turned off with will be marks a future passive action',
      'Las luces se apagarán después'
    ),
    tgt(
      'Los carteles serán retirados al final',
      'The signs will be removed at the end',
      ['The', 'signs', 'will', 'be', 'removed'],
      ['The', 'signs', 'will', 'be', 'removed', 'end'],
      'Usar The signs remove at the end',
      'Removed after will be keeps the passive future form',
      'Los carteles se quitarán al final'
    ),
    tgt(
      'Las sillas serán guardadas en la bodega',
      'The chairs will be stored in the shed',
      ['The', 'chairs', 'will', 'be', 'stored'],
      ['The', 'chairs', 'will', 'be', 'stored', 'shed'],
      'Usar The chairs store in the shed',
      'Stored keeps the chairs as the passive subject',
      'Las sillas se guardarán'
    ),
    tgt(
      'El camino será limpiado antes de la visita',
      'The path will be cleaned before the visit',
      ['The', 'path', 'will', 'be', 'cleaned'],
      ['The', 'path', 'will', 'be', 'cleaned', 'visit'],
      'Usar The path cleans before the visit',
      'Cleaned after will be points to a future result',
      'El camino se limpiará'
    ),
    tgt(
      'Las fotos serán impresas para el álbum',
      'The photos will be printed for the album',
      ['The', 'photos', 'will', 'be', 'printed'],
      ['The', 'photos', 'will', 'be', 'printed', 'album'],
      'Usar The photos print for the album',
      'Printed after will be is the correct future passive structure',
      'Las fotos se imprimirán'
    ),
    tgt(
      'Las señales serán pintadas de nuevo',
      'The signs will be painted again',
      ['The', 'signs', 'will', 'be', 'painted'],
      ['The', 'signs', 'will', 'be', 'painted', 'again'],
      'Usar The signs paint again',
      'Painted with will be keeps the action in the future',
      'Las señales se pintarán otra vez'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que se hará antes de abrir', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria aún está vacía por la mañana',
      'The fair is still empty in the morning',
      ['fair', 'empty', 'morning'],
      ['fair', 'empty', 'morning'],
      'Perder la sensación de preparación',
      'The empty fair should make the coming passive actions obvious',
      'La feria todavía espera'
    ),
    ctx(
      'Las mesas están dobladas junto a la pared',
      'The tables are folded by the wall',
      ['tables', 'folded', 'wall'],
      ['tables', 'folded', 'wall'],
      'Hacer la escena demasiado simple',
      'The folded tables cue future setup work',
      'Las mesas esperan uso'
    ),
    ctx(
      'Los estudiantes llegan con cajas y carteles',
      'The students arrive with boxes and signs',
      ['students', 'arrive', 'boxes'],
      ['students', 'arrive', 'signs'],
      'Ignorar el material del montaje',
      'The boxes and signs should suggest things that will be set up',
      'Los materiales ya están listos'
    ),
    ctx(
      'La profesora revisa el horario en silencio',
      'The teacher checks the schedule quietly',
      ['teacher', 'checks', 'schedule'],
      ['teacher', 'checks', 'schedule'],
      'Cerrar sin una guía temporal',
      'The schedule should prepare the future passive sentences',
      'El horario marca el orden'
    ),
    tgt(
      'Los modelos serán construidos antes de la apertura',
      'The models will be built before opening',
      ['The', 'models', 'will', 'be', 'built'],
      ['The', 'models', 'will', 'be', 'built', 'opening'],
      'Usar The models build before opening',
      'Built after will be is the future passive form',
      'Los modelos se construirán'
    ),
    tgt(
      'Los pósters serán impresos hoy',
      'The posters will be printed today',
      ['The', 'posters', 'will', 'be', 'printed'],
      ['The', 'posters', 'will', 'be', 'printed', 'today'],
      'Usar The posters print today',
      'Printed with will be keeps the future result clear',
      'Los pósters se imprimirán'
    ),
    tgt(
      'Los cables serán revisados por el equipo',
      'The wires will be checked by the team',
      ['The', 'wires', 'will', 'be', 'checked'],
      ['The', 'wires', 'will', 'be', 'checked', 'team'],
      'Usar The wires check by the team',
      'Checked after will be marks a future passive action',
      'Los cables se revisarán'
    ),
    tgt(
      'Las mesas serán limpiadas antes de recibir visitantes',
      'The tables will be cleaned before visitors arrive',
      ['The', 'tables', 'will', 'be', 'cleaned'],
      ['The', 'tables', 'will', 'be', 'cleaned', 'visitors'],
      'Usar The tables clean before visitors arrive',
      'Cleaned after will be shows the planned future action',
      'Las mesas se limpiarán'
    ),
    tgt(
      'Las preguntas serán respondidas al final',
      'The questions will be answered at the end',
      ['The', 'questions', 'will', 'be', 'answered'],
      ['The', 'questions', 'will', 'be', 'answered', 'end'],
      'Usar The questions answer at the end',
      'Answered with will be points to a future passive event',
      'Las preguntas se responderán'
    ),
    tgt(
      'Las notas serán organizadas por tema',
      'The notes will be organized by topic',
      ['The', 'notes', 'will', 'be', 'organized'],
      ['The', 'notes', 'will', 'be', 'organized', 'topic'],
      'Usar The notes organize by topic',
      'Organized after will be is the correct future passive form',
      'Las notas se organizarán'
    ),
    tgt(
      'Las tarjetas serán pegadas en la pared',
      'The cards will be posted on the wall',
      ['The', 'cards', 'will', 'be', 'posted'],
      ['The', 'cards', 'will', 'be', 'posted', 'wall'],
      'Usar The cards post on the wall',
      'Posted keeps the cards as the focus of the action',
      'Las tarjetas se pegarán'
    ),
    tgt(
      'Los resultados serán mostrados en la pizarra',
      'The results will be shown on the board',
      ['The', 'results', 'will', 'be', 'shown'],
      ['The', 'results', 'will', 'be', 'shown', 'board'],
      'Usar The results show on the board',
      'Shown after will be is the passive future form',
      'Los resultados se mostrarán'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Un día en familia: Lo que se hará para la visita', type: 'Integración', value: 'gratitud' },
  [
    ctx(
      'La casa está tranquila pero todos se preparan',
      'The house is quiet but everyone is getting ready',
      ['house', 'quiet', 'ready'],
      ['house', 'quiet', 'ready'],
      'Perder el ambiente de anticipación',
      'The family scene should point to things that will be done',
      'La casa ya se mueve'
    ),
    ctx(
      'Hay platos y vasos sobre la mesa',
      'There are plates and glasses on the table',
      ['plates', 'glasses', 'table'],
      ['plates', 'glasses', 'table'],
      'Hacer la escena demasiado vacía',
      'The table items make the future passive actions easy to picture',
      'La mesa ya anuncia trabajo'
    ),
    ctx(
      'Los niños hablan de la cena',
      'The children talk about dinner',
      ['children', 'talk', 'dinner'],
      ['children', 'talk', 'dinner'],
      'Ignorar la preparación de la comida',
      'Dinner should become the center of the future actions',
      'La cena motiva el plan'
    ),
    ctx(
      'La abuela trae una bolsa de fruta',
      'Grandma brings a bag of fruit',
      ['Grandma', 'brings', 'fruit'],
      ['Grandma', 'brings', 'fruit'],
      'Cerrar sin una acción familiar concreta',
      'The fruit should lead into what will be prepared',
      'La fruta completa el ambiente'
    ),
    tgt(
      'La mesa será arreglada antes de que lleguen',
      'The table will be set before they arrive',
      ['The', 'table', 'will', 'be', 'set'],
      ['The', 'table', 'will', 'be', 'set', 'arrive'],
      'Usar The table sets before they arrive',
      'Set after will be shows the planned future result',
      'La mesa se arreglará'
    ),
    tgt(
      'La cena será servida a las ocho',
      'Dinner will be served at eight',
      ['Dinner', 'will', 'be', 'served'],
      ['Dinner', 'will', 'be', 'served', 'eight'],
      'Usar Dinner serves at eight',
      'Served after will be is the passive future pattern',
      'La cena se servirá'
    ),
    tgt(
      'Las velas serán encendidas cuando oscurezca',
      'The candles will be lit when it gets dark',
      ['The', 'candles', 'will', 'be', 'lit'],
      ['The', 'candles', 'will', 'be', 'lit', 'dark'],
      'Usar The candles light when it gets dark',
      'Lit after will be keeps the future passive meaning',
      'Las velas se encenderán'
    ),
    tgt(
      'Las bebidas serán colocadas en la nevera',
      'The drinks will be placed in the fridge',
      ['The', 'drinks', 'will', 'be', 'placed'],
      ['The', 'drinks', 'will', 'be', 'placed', 'fridge'],
      'Usar The drinks place in the fridge',
      'Placed with will be shows a planned future action',
      'Las bebidas se colocarán'
    ),
    tgt(
      'Las servilletas serán dobladas por los niños',
      'The napkins will be folded by the children',
      ['The', 'napkins', 'will', 'be', 'folded'],
      ['The', 'napkins', 'will', 'be', 'folded', 'children'],
      'Usar The napkins fold by the children',
      'Folded after will be is the correct future passive form',
      'Las servilletas se doblarán'
    ),
    tgt(
      'Las frutas serán cortadas antes del postre',
      'The fruit will be cut before dessert',
      ['The', 'fruit', 'will', 'be', 'cut'],
      ['The', 'fruit', 'will', 'be', 'cut', 'dessert'],
      'Usar The fruit cuts before dessert',
      'Cut after will be marks a future passive action',
      'La fruta se cortará'
    ),
    tgt(
      'Los platos serán lavados después de comer',
      'The dishes will be washed after eating',
      ['The', 'dishes', 'will', 'be', 'washed'],
      ['The', 'dishes', 'will', 'be', 'washed', 'eating'],
      'Usar The dishes wash after eating',
      'Washed after will be is the passive future structure',
      'Los platos se lavarán'
    ),
    tgt(
      'Las fotos serán guardadas en un álbum',
      'The photos will be saved in an album',
      ['The', 'photos', 'will', 'be', 'saved'],
      ['The', 'photos', 'will', 'be', 'saved', 'album'],
      'Usar The photos save in an album',
      'Saved after will be keeps the photos as the focus',
      'Las fotos se guardarán'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
