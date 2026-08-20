import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[2];
const targetPattern = 'must / have to / need to + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'would', 'can', 'could', 'may'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Must / Have to / Need to';
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
  { title: 'La piscina del barrio: Reglas claras', type: 'Descubrimiento', value: 'seguridad' },
  [
    ctx(
      'La piscina del barrio abre con un cartel de reglas.',
      'The neighborhood pool opens with a sign of rules.',
      ['pool', 'opens', 'rules'],
      ['pool', 'sign', 'rules'],
      'Perder la idea de obligación clara.',
      'Think about safety rules that people must follow.',
      'La historia abre con normas visibles.'
    ),
    tgt(
      'Debes caminar despacio.',
      'You must walk slowly.',
      ['You', 'must', 'walk'],
      ['must', 'walk', 'slowly'],
      'Usar should walk slowly.',
      'Must shows strong obligation.',
      'La regla es firme.'
    ),
    tgt(
      'Los niños tienen que usar gorra.',
      'The children have to wear caps.',
      ['children', 'have', 'to', 'wear'],
      ['have', 'to', 'wear', 'caps'],
      'Usar must wear caps.',
      'Have to often shows an outside rule.',
      'La norma viene del lugar.'
    ),
    tgt(
      'Necesitamos mantener la puerta cerrada.',
      'We need to keep the gate closed.',
      ['We', 'need', 'to', 'keep'],
      ['need', 'to', 'keep', 'closed'],
      'Usar must keep the gate closed.',
      'Need to shows necessity for a result.',
      'La necesidad es clara.'
    ),
    ctx(
      'El socorrista mira el agua con atención.',
      'The lifeguard watches the water carefully.',
      ['lifeguard', 'watches', 'water'],
      ['lifeguard', 'water', 'carefully'],
      'Cerrar sin tono de seguridad.',
      'The background should keep the safety theme visible.',
      'El contexto sostiene la vigilancia.'
    ),
    tgt(
      'No debes correr cerca de la piscina.',
      'You must not run near the pool.',
      ['You', 'must', 'not', 'run'],
      ['must', 'not', 'run', 'pool'],
      'Usar do not run near the pool.',
      'Must not makes the rule strong.',
      'La prohibición es directa.'
    ),
    tgt(
      'La familia tiene que llegar a tiempo.',
      'The family has to arrive on time.',
      ['family', 'has', 'to', 'arrive'],
      ['has', 'to', 'arrive', 'time'],
      'Usar must arrive on time.',
      'Has to can show an external obligation.',
      'La puntualidad importa.'
    ),
    tgt(
      '¿Necesitamos firmar nuestros nombres?',
      'Do we need to sign our names.',
      ['Do', 'we', 'need', 'to', 'sign'],
      ['Do', 'need', 'to', 'sign', 'names'],
      'Usar must we sign our names.',
      'Need to asks about necessity.',
      'La pregunta revisa el requisito.'
    ),
    ctx(
      'El piso sigue seco y seguro.',
      'The floor stays dry and safe.',
      ['floor', 'stays', 'dry'],
      ['floor', 'dry', 'safe'],
      'Cerrar sin sensación de regla clara.',
      'The scene should keep the safety result visible.',
      'El contexto confirma el orden.'
    ),
    tgt(
      'Ella tiene que revisar la lista.',
      'She has to check the list.',
      ['She', 'has', 'to', 'check'],
      ['has', 'to', 'check', 'list'],
      'Usar must check the list.',
      'Has to is common for obligation.',
      'La revisión es obligatoria.'
    ),
    tgt(
      'Necesitamos traer toallas.',
      'We need to bring towels.',
      ['We', 'need', 'to', 'bring'],
      ['need', 'to', 'bring', 'towels'],
      'Usar must bring towels.',
      'Need to keeps the necessity idea clear.',
      'Las toallas son necesarias.'
    ),
    ctx(
      'Al final, todos entienden que la seguridad manda.',
      'In the end, everyone understands that safety comes first.',
      ['everyone', 'understands', 'safety'],
      ['everyone', 'safety', 'first'],
      'Cerrar sin la idea de regla.',
      'The ending should show why the rules matter.',
      'El cierre resume la obligación.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La excursión del viernes: Preparar lo necesario', type: 'Uso natural', value: 'organización' },
  [
    ctx(
      'Las mochilas ya están sobre la mesa.',
      'The backpacks are already on the table.',
      ['backpacks', 'already', 'table'],
      ['backpacks', 'table'],
      'Perder la idea de preparación necesaria.',
      'Look at what must be ready before the trip.',
      'La historia abre con la preparación.'
    ),
    tgt(
      'Tenemos que empacar agua.',
      'We have to pack water.',
      ['We', 'have', 'to', 'pack'],
      ['have', 'to', 'pack', 'water'],
      'Usar must pack water.',
      'Have to shows practical necessity.',
      'El agua es parte del plan.'
    ),
    tgt(
      'Necesitas traer una chaqueta.',
      'You need to bring a jacket.',
      ['You', 'need', 'to', 'bring'],
      ['need', 'to', 'bring', 'jacket'],
      'Usar must bring a jacket.',
      'Need to shows something required for comfort or success.',
      'La chaqueta es necesaria.'
    ),
    tgt(
      'El equipo debe salir temprano.',
      'The team must leave early.',
      ['team', 'must', 'leave'],
      ['must', 'leave', 'early'],
      'Usar has to leave early.',
      'Must gives a strong instruction.',
      'La salida es estricta.'
    ),
    ctx(
      'El autobús espera afuera con la puerta abierta.',
      'The bus waits outside with the door open.',
      ['bus', 'waits', 'outside'],
      ['bus', 'door', 'open'],
      'Cerrar sin sensación de salida.',
      'The background should feel ready but not started.',
      'El contexto sostiene la salida próxima.'
    ),
    tgt(
      'No tienen que llevar un mapa.',
      'They do not have to carry a map.',
      ['They', 'do', 'not', 'have', 'to', 'carry'],
      ['do', 'not', 'have', 'to', 'carry', 'map'],
      'Usar must not carry a map.',
      'Do not have to means no necessity.',
      'La ausencia de obligación queda clara.'
    ),
    tgt(
      '¿Necesitamos comprar bocadillos?',
      'Do we need to buy snacks.',
      ['Do', 'we', 'need', 'to', 'buy'],
      ['Do', 'need', 'to', 'buy', 'snacks'],
      'Usar must we buy snacks.',
      'Need to asks about necessity.',
      'La pregunta revisa lo faltante.'
    ),
    tgt(
      'Maya tiene que llamar a su papá.',
      'Maya has to call her dad.',
      ['Maya', 'has', 'to', 'call'],
      ['has', 'to', 'call', 'dad'],
      'Usar must call her dad.',
      'Has to fits a personal obligation.',
      'La llamada ya quedó pendiente.'
    ),
    ctx(
      'El camino se ve largo y tranquilo.',
      'The road looks long and quiet.',
      ['road', 'looks', 'long'],
      ['road', 'quiet', 'long'],
      'Cerrar sin sensación de preparación.',
      'The scene should still feel like a checklist.',
      'El contexto mantiene la organización.'
    ),
    tgt(
      'Debemos recordar los boletos.',
      'We must not forget the tickets.',
      ['We', 'must', 'not', 'forget'],
      ['must', 'not', 'forget', 'tickets'],
      'Usar we need to forget the tickets.',
      'Must not is a strong warning.',
      'La advertencia es clara.'
    ),
    tgt(
      'Él necesita dormir temprano.',
      'He needs to sleep early.',
      ['He', 'needs', 'to', 'sleep'],
      ['needs', 'to', 'sleep', 'early'],
      'Usar must sleep early.',
      'Needs to works naturally for necessity.',
      'El descanso es necesario.'
    ),
    ctx(
      'Al final, la excursión sigue solo cuando todo está listo.',
      'In the end, the excursion only starts when everything is ready.',
      ['excursion', 'starts', 'everything'],
      ['excursion', 'ready', 'starts'],
      'Cerrar sin una idea de requisito.',
      'The ending should show why preparation matters.',
      'El cierre resume la lista de cosas necesarias.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La oficina del jefe: Lo que nadie puede olvidar', type: 'Integración', value: 'disciplina' },
  [
    ctx(
      'La oficina está llena de notas y relojes.',
      'The office is full of notes and clocks.',
      ['office', 'full', 'notes'],
      ['office', 'clocks', 'notes'],
      'Perder la idea de deberes claros.',
      'Focus on tasks that must be finished.',
      'La historia abre con trabajo serio.'
    ),
    tgt(
      'El equipo debe terminar el informe hoy.',
      'The team must finish the report today.',
      ['team', 'must', 'finish'],
      ['must', 'finish', 'report'],
      'Usar have to finish the report today.',
      'Must shows a strong duty.',
      'El informe tiene prioridad.'
    ),
    tgt(
      'Tienen que enviarlo antes del mediodía.',
      'They have to send it before noon.',
      ['They', 'have', 'to', 'send'],
      ['have', 'to', 'send', 'noon'],
      'Usar must send it before noon.',
      'Have to shows an outside deadline.',
      'El envío tiene horario.'
    ),
    tgt(
      'Ella necesita revisar los números.',
      'She needs to check the numbers.',
      ['She', 'needs', 'to', 'check'],
      ['needs', 'to', 'check', 'numbers'],
      'Usar must check the numbers.',
      'Needs to fits the practical necessity.',
      'La revisión evita errores.'
    ),
    ctx(
      'La pantalla sigue mostrando una fecha límite.',
      'The screen keeps showing a deadline.',
      ['screen', 'keeps', 'showing'],
      ['screen', 'deadline', 'showing'],
      'Cerrar sin una presión real.',
      'The background should still feel strict and busy.',
      'El contexto mantiene la urgencia.'
    ),
    tgt(
      'No debemos perder la fecha límite.',
      'We must not miss the deadline.',
      ['We', 'must', 'not', 'miss'],
      ['must', 'not', 'miss', 'deadline'],
      'Usar do not miss the deadline.',
      'Must not shows a strong prohibition.',
      'La fecha límite no se puede perder.'
    ),
    tgt(
      '¿Tienen que imprimirlo otra vez?',
      'Do they have to print it again.',
      ['Do', 'they', 'have', 'to', 'print'],
      ['Do', 'have', 'to', 'print', 'again'],
      'Usar must they print it again.',
      'Do they have to asks about obligation.',
      'La pregunta revisa si hace falta repetir.'
    ),
    tgt(
      'El asistente tiene que abrir la puerta.',
      'The assistant has to open the door.',
      ['assistant', 'has', 'to', 'open'],
      ['has', 'to', 'open', 'door'],
      'Usar must open the door.',
      'Has to works for a routine duty.',
      'La tarea está asignada.'
    ),
    ctx(
      'La tarde sigue quieta pero el trabajo no para.',
      'The afternoon stays calm but the work does not stop.',
      ['afternoon', 'stays', 'calm'],
      ['afternoon', 'work', 'stops'],
      'Cerrar sin sensación de disciplina.',
      'The ending should still feel demanding.',
      'El contexto mantiene el foco.'
    ),
    tgt(
      'Ustedes necesitan guardar el archivo.',
      'You need to save the file.',
      ['You', 'need', 'to', 'save'],
      ['need', 'to', 'save', 'file'],
      'Usar must save the file.',
      'Need to is a practical necessity.',
      'El archivo no se puede perder.'
    ),
    tgt(
      'La jefa tiene que firmar aquí.',
      'The boss has to sign here.',
      ['boss', 'has', 'to', 'sign'],
      ['has', 'to', 'sign', 'here'],
      'Usar must sign here.',
      'Has to fits an external requirement.',
      'La firma cierra el proceso.'
    ),
    ctx(
      'Al final, la oficina sigue en marcha porque todos cumplieron.',
      'In the end, the office keeps moving because everyone did their part.',
      ['office', 'keeps', 'moving'],
      ['office', 'everyone', 'part'],
      'Cerrar sin idea de deber cumplido.',
      'The ending should show responsibilities completed.',
      'El cierre resume disciplina y orden.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 29.');
