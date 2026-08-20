import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[3];
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Past Simple';
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
  { title: 'El parque después del festival: Lo que se hizo ayer', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'El parque quedó lleno de luces al anochecer',
      'The park was full of lights at dusk',
      ['park', 'full', 'lights'],
      ['park', 'full', 'lights'],
      'Perder el ambiente de cierre',
      'The opening should show a completed event in the past',
      'El parque abre la memoria del día'
    ),
    ctx(
      'Había cintas de colores cerca de los árboles',
      'There were colorful ribbons near the trees',
      ['ribbons', 'trees'],
      ['ribbons', 'trees'],
      'Hacer la escena demasiado abstracta',
      'Visible decorations help set up the past passive actions',
      'Las cintas ya mostraban la fiesta'
    ),
    ctx(
      'Los voluntarios caminaban con cajas vacías',
      'The volunteers walked with empty boxes',
      ['volunteers', 'walked', 'boxes'],
      ['volunteers', 'walked', 'boxes'],
      'Ignorar al equipo que cerró el lugar',
      'The volunteers should hint at the cleanup that already happened',
      'Los voluntarios marcan el cierre'
    ),
    ctx(
      'Un niño pregunta qué se arregló primero',
      'A child asks what was fixed first',
      ['child', 'asks', 'fixed'],
      ['child', 'asks', 'fixed'],
      'Cerrar sin una pregunta sobre acciones pasadas',
      'The question prepares the passive past form',
      'La pregunta vuelve visible lo hecho'
    ),
    tgt(
      'Los bancos fueron reparados después del festival',
      'The benches were repaired after the festival',
      ['The', 'benches', 'were', 'repaired'],
      ['The', 'benches', 'were', 'repaired', 'festival'],
      'Usar The benches repaired after the festival',
      'Passive Past Simple uses was/were + past participle',
      'Los bancos ya quedaron listos'
    ),
    tgt(
      'Las luces fueron apagadas a medianoche',
      'The lights were turned off at midnight',
      ['The', 'lights', 'were', 'turned', 'off'],
      ['The', 'lights', 'were', 'turned', 'off', 'midnight'],
      'Usar The lights turned off at midnight',
      'Turned off after were shows a completed passive event',
      'Las luces ya se apagaron'
    ),
    tgt(
      'La basura fue recogida por la mañana',
      'The trash was collected in the morning',
      ['The', 'trash', 'was', 'collected'],
      ['The', 'trash', 'was', 'collected', 'morning'],
      'Usar The trash collected in the morning',
      'Was collected keeps the trash as the subject',
      'La basura ya no estaba'
    ),
    tgt(
      'Los carteles fueron retirados de los árboles',
      'The signs were removed from the trees',
      ['The', 'signs', 'were', 'removed'],
      ['The', 'signs', 'were', 'removed', 'trees'],
      'Usar The signs removed from the trees',
      'Removed is the passive participle needed here',
      'Los carteles ya desaparecieron'
    ),
    tgt(
      'Las sillas fueron guardadas en la bodega',
      'The chairs were stored in the shed',
      ['The', 'chairs', 'were', 'stored'],
      ['The', 'chairs', 'were', 'stored', 'shed'],
      'Usar The chairs stored in the shed',
      'Stored keeps the chairs as the focus of the action',
      'Las sillas ya quedaron guardadas'
    ),
    tgt(
      'El camino fue limpiado después de la lluvia',
      'The path was cleaned after the rain',
      ['The', 'path', 'was', 'cleaned'],
      ['The', 'path', 'was', 'cleaned', 'rain'],
      'Usar The path cleaned after the rain',
      'Cleaned is the passive past simple form',
      'El camino ya está limpio'
    ),
    tgt(
      'Las fotos fueron tomadas al final',
      'The photos were taken at the end',
      ['The', 'photos', 'were', 'taken'],
      ['The', 'photos', 'were', 'taken', 'end'],
      'Usar The photos took at the end',
      'Taken is the correct past participle in passive voice',
      'Las fotos ya quedaron hechas'
    ),
    tgt(
      'Las señales fueron pintadas de nuevo',
      'The signs were painted again',
      ['The', 'signs', 'were', 'painted'],
      ['The', 'signs', 'were', 'painted', 'again'],
      'Usar The signs painted again',
      'Painted after were shows a finished action in the past',
      'Las señales ya cambiaron'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tienda de la esquina: Lo que pasó anoche', type: 'Uso natural', value: 'honestidad' },
  [
    ctx(
      'La tienda estaba cerrada cuando empezó la noche',
      'The shop was closed when night began',
      ['shop', 'closed', 'night'],
      ['shop', 'closed', 'night'],
      'Perder el ambiente de cierre',
      'The closing scene should lead into completed past events',
      'La tienda marca el final del día'
    ),
    ctx(
      'Había una lámpara encendida sobre el mostrador',
      'There was a lamp on over the counter',
      ['lamp', 'counter'],
      ['lamp', 'counter'],
      'Hacer la escena demasiado técnica',
      'The lamp should keep the shop scene warm and clear',
      'La lámpara sostiene la escena'
    ),
    ctx(
      'Marcos revisaba la caja con calma',
      'Marcos checked the register calmly',
      ['Marcos', 'checked', 'register'],
      ['Marcos', 'checked', 'register'],
      'Ignorar al encargado del cierre',
      'The register check should connect to actions already completed',
      'Marcos controla el cierre'
    ),
    ctx(
      'Una clienta preguntó qué se cambió ayer',
      'A customer asked what was changed yesterday',
      ['customer', 'asked', 'changed'],
      ['customer', 'asked', 'changed'],
      'Cerrar sin una pregunta por lo ya hecho',
      'The question prepares the past passive forms',
      'La clienta pide entender el cambio'
    ),
    tgt(
      'Los precios fueron escritos de nuevo',
      'The prices were written again',
      ['The', 'prices', 'were', 'written'],
      ['The', 'prices', 'were', 'written', 'again'],
      'Usar The prices wrote again',
      'Written after were marks a completed passive action',
      'Los precios ya quedaron corregidos'
    ),
    tgt(
      'La caja fue limpiada antes de cerrar',
      'The counter was cleaned before closing',
      ['The', 'counter', 'was', 'cleaned'],
      ['The', 'counter', 'was', 'cleaned', 'closing'],
      'Usar The counter cleaned before closing',
      'Was cleaned is the right passive past simple pattern',
      'La caja ya está limpia'
    ),
    tgt(
      'Las bolsas fueron guardadas en el estante',
      'The bags were stored on the shelf',
      ['The', 'bags', 'were', 'stored'],
      ['The', 'bags', 'were', 'stored', 'shelf'],
      'Usar The bags stored on the shelf',
      'Stored keeps the bags as the subject receiving the action',
      'Las bolsas ya quedaron guardadas'
    ),
    tgt(
      'Las monedas fueron contadas al final',
      'The coins were counted at the end',
      ['The', 'coins', 'were', 'counted'],
      ['The', 'coins', 'were', 'counted', 'end'],
      'Usar The coins counted at the end',
      'Counted shows the counting finished in the past',
      'Las monedas ya fueron revisadas'
    ),
    tgt(
      'El aviso fue pegado en la puerta',
      'The notice was posted on the door',
      ['The', 'notice', 'was', 'posted'],
      ['The', 'notice', 'was', 'posted', 'door'],
      'Usar The notice posted on the door',
      'Posted after was marks a completed passive event',
      'El aviso ya estaba visible'
    ),
    tgt(
      'Los billetes fueron ordenados por color',
      'The bills were sorted by color',
      ['The', 'bills', 'were', 'sorted'],
      ['The', 'bills', 'were', 'sorted', 'color'],
      'Usar The bills sorted by color',
      'Sorted keeps the bills as the passive subject',
      'Los billetes ya están organizados'
    ),
    tgt(
      'La puerta fue cerrada temprano',
      'The door was closed early',
      ['The', 'door', 'was', 'closed'],
      ['The', 'door', 'was', 'closed', 'early'],
      'Usar The door closed early',
      'Closed after was is the correct passive form',
      'La puerta ya quedó cerrada'
    ),
    tgt(
      'Las bolsas fueron llenadas con pan',
      'The bags were filled with bread',
      ['The', 'bags', 'were', 'filled'],
      ['The', 'bags', 'were', 'filled', 'bread'],
      'Usar The bags filled with bread',
      'Filled shows the result of the action in the past',
      'Las bolsas ya están completas'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El viaje de fin de semana: Lo que quedó listo', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'La cabaña estaba tranquila al llegar',
      'The cabin was quiet when they arrived',
      ['cabin', 'quiet', 'arrived'],
      ['cabin', 'quiet', 'arrived'],
      'Perder el ambiente del viaje',
      'The cabin should frame what had already been done there',
      'La cabaña recibe al grupo'
    ),
    ctx(
      'Había madera seca junto a la chimenea',
      'There was dry wood by the fireplace',
      ['wood', 'fireplace'],
      ['wood', 'fireplace'],
      'Hacer la escena demasiado simple',
      'The wood helps set up the completed actions in the past',
      'La madera sugiere preparación'
    ),
    ctx(
      'Los niños dejaron las mochilas sobre la cama',
      'The children left the backpacks on the bed',
      ['children', 'left', 'backpacks'],
      ['children', 'left', 'backpacks'],
      'Ignorar el movimiento del equipaje',
      'The backpacks cue the passive actions that already happened',
      'Las mochilas marcan la llegada'
    ),
    ctx(
      'Los padres miraban la mesa con calma',
      'The parents watched the table calmly',
      ['parents', 'watched', 'table'],
      ['parents', 'watched', 'table'],
      'Cerrar sin un resultado visible',
      'The table should carry the result of the past actions',
      'La mesa ya cuenta una historia'
    ),
    tgt(
      'Las camas fueron hechas por la abuela',
      'The beds were made by Grandma',
      ['The', 'beds', 'were', 'made'],
      ['The', 'beds', 'were', 'made', 'Grandma'],
      'Usar The beds made by Grandma',
      'Made after were is the correct passive past simple form',
      'Las camas ya quedaron listas'
    ),
    tgt(
      'La comida fue servida en la mesa',
      'The food was served on the table',
      ['The', 'food', 'was', 'served'],
      ['The', 'food', 'was', 'served', 'table'],
      'Usar The food served on the table',
      'Served keeps the food as the subject receiving the action',
      'La comida ya está lista'
    ),
    tgt(
      'Las ventanas fueron cerradas antes de la lluvia',
      'The windows were closed before the rain',
      ['The', 'windows', 'were', 'closed'],
      ['The', 'windows', 'were', 'closed', 'rain'],
      'Usar The windows closed before the rain',
      'Closed after were shows a finished action',
      'Las ventanas ya quedaron seguras'
    ),
    tgt(
      'Las fotos fueron impresas para el álbum',
      'The photos were printed for the album',
      ['The', 'photos', 'were', 'printed'],
      ['The', 'photos', 'were', 'printed', 'album'],
      'Usar The photos printed for the album',
      'Printed in passive voice means the work is done',
      'Las fotos ya fueron preparadas'
    ),
    tgt(
      'La mesa fue limpiada después de comer',
      'The table was cleaned after eating',
      ['The', 'table', 'was', 'cleaned'],
      ['The', 'table', 'was', 'cleaned', 'eating'],
      'Usar The table cleaned after eating',
      'Cleaned after was is the right passive form',
      'La mesa ya quedó limpia'
    ),
    tgt(
      'La lista fue revisada antes de salir',
      'The list was checked before leaving',
      ['The', 'list', 'was', 'checked'],
      ['The', 'list', 'was', 'checked', 'leaving'],
      'Usar The list checked before leaving',
      'Checked marks the completed review',
      'La lista ya quedó lista'
    ),
    tgt(
      'Los regalos fueron envueltos por la noche',
      'The gifts were wrapped at night',
      ['The', 'gifts', 'were', 'wrapped'],
      ['The', 'gifts', 'were', 'wrapped', 'night'],
      'Usar The gifts wrapped at night',
      'Wrapped is the passive participle for the completed action',
      'Los regalos ya quedaron preparados'
    ),
    tgt(
      'Las luces fueron apagadas al irse',
      'The lights were turned off when they left',
      ['The', 'lights', 'were', 'turned', 'off'],
      ['The', 'lights', 'were', 'turned', 'off', 'left'],
      'Usar The lights turned off when they left',
      'Turned off after were shows the completed past action',
      'Las luces ya no estaban encendidas'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
