import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[8];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'will', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive with Modals';
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
  { title: 'El laboratorio escolar: Lo que debe hacerse', type: 'Descubrimiento', value: 'seguridad' },
  [
    ctx(
      'El laboratorio está abierto pero todo se ve controlado',
      'The lab is open but everything looks controlled',
      ['lab', 'open', 'controlled'],
      ['lab', 'open', 'controlled'],
      'Perder el ambiente de reglas y cuidado',
      'The opening should show rules that can be applied with modals in passive voice',
      'El laboratorio ya tiene normas'
    ),
    ctx(
      'La maestra revisa una lista de seguridad',
      'The teacher checks a safety list',
      ['teacher', 'checks', 'safety', 'list'],
      ['teacher', 'checks', 'safety', 'list'],
      'Hacer la escena demasiado simple',
      'The safety list should guide what must or should be done',
      'La lista marca la regla'
    ),
    ctx(
      'Hay frascos cerrados en la mesa',
      'There are closed jars on the table',
      ['jars', 'closed', 'table'],
      ['jars', 'closed', 'table'],
      'Ignorar los objetos que se regulan',
      'The jars should cue passive modal instructions',
      'Los frascos siguen controlados'
    ),
    ctx(
      'Los estudiantes esperan la señal para empezar',
      'The students wait for the signal to begin',
      ['students', 'wait', 'signal'],
      ['students', 'wait', 'signal'],
      'Cerrar sin una instrucción clara',
      'The signal should lead into modal passive rules',
      'La señal define la acción'
    ),
    tgt(
      'La puerta debe mantenerse cerrada',
      'The door must be kept closed',
      ['The', 'door', 'must', 'be', 'kept'],
      ['The', 'door', 'must', 'be', 'kept', 'closed'],
      'Usar The door must keep closed',
      'Must be kept is the correct modal passive form',
      'La puerta debe seguir cerrada'
    ),
    tgt(
      'Los frascos deben abrirse con cuidado',
      'The jars should be opened carefully',
      ['The', 'jars', 'should', 'be', 'opened'],
      ['The', 'jars', 'should', 'be', 'opened', 'carefully'],
      'Usar The jars should open carefully',
      'Should be opened keeps the action on the jars',
      'Abrir los frascos exige cuidado'
    ),
    tgt(
      'Los formularios pueden firmarse en la mesa',
      'The forms can be signed at the desk',
      ['The', 'forms', 'can', 'be', 'signed'],
      ['The', 'forms', 'can', 'be', 'signed', 'desk'],
      'Usar The forms can sign at the desk',
      'Can be signed shows permission in passive voice',
      'Los formularios pueden firmarse allí'
    ),
    tgt(
      'Las luces pueden apagarse después de clase',
      'The lights may be turned off after class',
      ['The', 'lights', 'may', 'be', 'turned', 'off'],
      ['The', 'lights', 'may', 'be', 'turned', 'off', 'class'],
      'Usar The lights may turn off after class',
      'May be turned off keeps the modal passive pattern',
      'Las luces pueden apagarse luego'
    ),
    tgt(
      'Los frascos deben guardarse en el refrigerador',
      'The samples must be stored in the fridge',
      ['The', 'samples', 'must', 'be', 'stored'],
      ['The', 'samples', 'must', 'be', 'stored', 'fridge'],
      'Usar The samples must store in the fridge',
      'Must be stored keeps the samples as the passive focus',
      'Las muestras deben quedar frías'
    ),
    tgt(
      'El aviso debería colocarse junto a la puerta',
      'The notice should be posted by the door',
      ['The', 'notice', 'should', 'be', 'posted'],
      ['The', 'notice', 'should', 'be', 'posted', 'door'],
      'Usar The notice should post by the door',
      'Should be posted is the right passive modal form',
      'El aviso debería verse'
    ),
    tgt(
      'Las ventanas pueden abrirse un poco',
      'The windows can be opened a little',
      ['The', 'windows', 'can', 'be', 'opened'],
      ['The', 'windows', 'can', 'be', 'opened', 'little'],
      'Usar The windows can open a little',
      'Can be opened keeps the windows as the subject',
      'Las ventanas pueden abrirse'
    ),
    tgt(
      'Las herramientas deben devolverse antes de salir',
      'The tools must be returned before leaving',
      ['The', 'tools', 'must', 'be', 'returned'],
      ['The', 'tools', 'must', 'be', 'returned', 'leaving'],
      'Usar The tools must return before leaving',
      'Returned after must be keeps the focus on the tools',
      'Las herramientas deben volver'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que se debe mostrar', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria todavía tiene cajas cerradas',
      'The fair still has closed boxes',
      ['fair', 'closed', 'boxes'],
      ['fair', 'closed', 'boxes'],
      'Perder el tono de reglas y presentación',
      'The fair should point to what can or must be done in passive voice',
      'La feria ya pide orden'
    ),
    ctx(
      'Las mesas esperan el material final',
      'The tables wait for the final material',
      ['tables', 'wait', 'material'],
      ['tables', 'wait', 'material'],
      'Hacer la escena demasiado vacía',
      'The tables should cue what will be allowed or required',
      'Las mesas preparan la exposición'
    ),
    ctx(
      'La profesora revisa la lista de presentación',
      'The teacher checks the presentation list',
      ['teacher', 'checks', 'presentation', 'list'],
      ['teacher', 'checks', 'presentation', 'list'],
      'Ignorar la supervisión',
      'The checklist should lead into passive modal instructions',
      'La profesora guía el orden'
    ),
    ctx(
      'Los estudiantes hablan de lo que se verá',
      'The students talk about what will be shown',
      ['students', 'talk', 'shown'],
      ['students', 'talk', 'shown'],
      'Cerrar sin una meta concreta',
      'The talk should make the passive modals relevant',
      'Lo que se mostrará ya importa'
    ),
    tgt(
      'Los modelos deben construirse antes del viernes',
      'The models must be built before Friday',
      ['The', 'models', 'must', 'be', 'built'],
      ['The', 'models', 'must', 'be', 'built', 'Friday'],
      'Usar The models must build before Friday',
      'Must be built is the correct modal passive structure',
      'Los modelos deben quedar listos'
    ),
    tgt(
      'Los pósters deberían imprimirse hoy',
      'The posters should be printed today',
      ['The', 'posters', 'should', 'be', 'printed'],
      ['The', 'posters', 'should', 'be', 'printed', 'today'],
      'Usar The posters should print today',
      'Should be printed keeps the posters as the passive subject',
      'Los pósters deberían salir'
    ),
    tgt(
      'Los cables pueden revisarse por el equipo',
      'The wires can be checked by the team',
      ['The', 'wires', 'can', 'be', 'checked'],
      ['The', 'wires', 'can', 'be', 'checked', 'team'],
      'Usar The wires can check by the team',
      'Can be checked is the right passive modal form',
      'Los cables pueden inspeccionarse'
    ),
    tgt(
      'Los resultados pueden mostrarse en la pizarra',
      'The results may be shown on the board',
      ['The', 'results', 'may', 'be', 'shown'],
      ['The', 'results', 'may', 'be', 'shown', 'board'],
      'Usar The results may show on the board',
      'May be shown keeps the possibility passive',
      'Los resultados podrían aparecer'
    ),
    tgt(
      'Las notas deben organizarse por tema',
      'The notes must be organized by topic',
      ['The', 'notes', 'must', 'be', 'organized'],
      ['The', 'notes', 'must', 'be', 'organized', 'topic'],
      'Usar The notes must organize by topic',
      'Must be organized keeps the notes as the subject',
      'Las notas deben quedar ordenadas'
    ),
    tgt(
      'Las preguntas deberían responderse al final',
      'The questions should be answered at the end',
      ['The', 'questions', 'should', 'be', 'answered'],
      ['The', 'questions', 'should', 'be', 'answered', 'end'],
      'Usar The questions should answer at the end',
      'Answered after should be is the passive modal pattern',
      'Las preguntas deberían resolverse'
    ),
    tgt(
      'Las mesas pueden limpiarse después',
      'The tables can be cleaned later',
      ['The', 'tables', 'can', 'be', 'cleaned'],
      ['The', 'tables', 'can', 'be', 'cleaned', 'later'],
      'Usar The tables can clean later',
      'Can be cleaned is natural for permission in passive voice',
      'Las mesas pueden lavarse'
    ),
    tgt(
      'Las señales deben pintarse otra vez',
      'The signs must be painted again',
      ['The', 'signs', 'must', 'be', 'painted'],
      ['The', 'signs', 'must', 'be', 'painted', 'again'],
      'Usar The signs must paint again',
      'Must be painted shows obligation in passive voice',
      'Las señales deben renovarse'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que se debe cuidar', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'El barrio todavía muestra trabajo reciente',
      'The neighborhood still shows recent work',
      ['neighborhood', 'shows', 'work'],
      ['neighborhood', 'shows', 'work'],
      'Perder la idea de reglas y cuidado',
      'The neighborhood should make passive modal duties feel practical',
      'El barrio ya da pistas'
    ),
    ctx(
      'Hay pintura y herramientas cerca de la acera',
      'There is paint and tools by the curb',
      ['paint', 'tools', 'curb'],
      ['paint', 'tools', 'curb'],
      'Hacer la escena demasiado vacía',
      'The materials should cue what must or can be done',
      'Las herramientas preparan el deber'
    ),
    ctx(
      'Los vecinos hablan mientras miran la pared',
      'The neighbors talk while they look at the wall',
      ['neighbors', 'talk', 'wall'],
      ['neighbors', 'talk', 'wall'],
      'Ignorar la pared como objeto principal',
      'The wall should become the focus of future or required actions',
      'La pared será la protagonista'
    ),
    ctx(
      'Un niño sostiene una lata de pintura',
      'A child holds a can of paint',
      ['child', 'holds', 'paint'],
      ['child', 'holds', 'paint'],
      'Cerrar sin una señal de actividad',
      'The paint can help set up the modal passive choices',
      'La pintura ya sugiere cambio'
    ),
    tgt(
      'Los bancos deberían repararse pronto',
      'The benches should be repaired soon',
      ['The', 'benches', 'should', 'be', 'repaired'],
      ['The', 'benches', 'should', 'be', 'repaired', 'soon'],
      'Usar The benches should repair soon',
      'Should be repaired is the natural passive modal form',
      'Los bancos deben quedar bien'
    ),
    tgt(
      'Las plantas deben regarse cada día',
      'The plants must be watered every day',
      ['The', 'plants', 'must', 'be', 'watered'],
      ['The', 'plants', 'must', 'be', 'watered', 'day'],
      'Usar The plants must water every day',
      'Must be watered keeps the plants as the passive subject',
      'Las plantas necesitan cuidado'
    ),
    tgt(
      'La basura puede recogerse por la mañana',
      'The trash can be collected in the morning',
      ['The', 'trash', 'can', 'be', 'collected'],
      ['The', 'trash', 'can', 'be', 'collected', 'morning'],
      'Usar The trash can collect in the morning',
      'Can be collected is the correct passive structure',
      'La basura puede sacarse temprano'
    ),
    tgt(
      'Las paredes podrían pintarse la próxima semana',
      'The walls may be painted next week',
      ['The', 'walls', 'may', 'be', 'painted'],
      ['The', 'walls', 'may', 'be', 'painted', 'week'],
      'Usar The walls may paint next week',
      'May be painted shows a possible future passive action',
      'Las paredes podrían cambiar'
    ),
    tgt(
      'Las herramientas deberían guardarse en la caseta',
      'The tools should be stored in the shed',
      ['The', 'tools', 'should', 'be', 'stored'],
      ['The', 'tools', 'should', 'be', 'stored', 'shed'],
      'Usar The tools should store in the shed',
      'Should be stored keeps the tools as the passive focus',
      'Las herramientas deben ordenarse'
    ),
    tgt(
      'Los caminos pueden limpiarse después de la lluvia',
      'The paths can be cleaned after the rain',
      ['The', 'paths', 'can', 'be', 'cleaned'],
      ['The', 'paths', 'can', 'be', 'cleaned', 'rain'],
      'Usar The paths can clean after the rain',
      'Can be cleaned is a practical passive modal form',
      'Los caminos pueden arreglarse'
    ),
    tgt(
      'El aviso debe colocarse en la pared',
      'The notice must be posted on the wall',
      ['The', 'notice', 'must', 'be', 'posted'],
      ['The', 'notice', 'must', 'be', 'posted', 'wall'],
      'Usar The notice must post on the wall',
      'Must be posted gives a clear duty in passive voice',
      'El aviso debe verse'
    ),
    tgt(
      'Las bicicletas deberían repararse antes del picnic',
      'The bicycles should be fixed before the picnic',
      ['The', 'bicycles', 'should', 'be', 'fixed'],
      ['The', 'bicycles', 'should', 'be', 'fixed', 'picnic'],
      'Usar The bicycles should fix before the picnic',
      'Should be fixed is the right passive modal form',
      'Las bicicletas deben quedar listas'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
