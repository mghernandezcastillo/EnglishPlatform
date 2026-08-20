import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[7];
const targetPattern = 'was / were going to + base verb or would + base verb after a past reference';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'going', 'to', 'did', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Future in the Past';
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
  { title: 'La estación vacía: Un viaje que cambió', type: 'Descubrimiento', value: 'adaptación' },
  [
    ctx(
      'Sara llegó a la estación con su mochila.',
      'Sara arrived at the station with her backpack.',
      ['Sara', 'arrived', 'station'],
      ['Sara', 'station', 'backpack'],
      'Perder la idea de plan pasado que aún no se cumplió en ese momento.',
      'Primero mira el punto del pasado desde el que nace la intención.',
      'La historia abre con un plan que parecía firme.'
    ),
    tgt(
      'Sara iba a tomar el tren temprano.',
      'Sara was going to take the early train.',
      ['Sara', 'was', 'going', 'to', 'take'],
      ['was', 'going', 'to', 'take', 'train'],
      'Usar will take the early train.',
      'Was going to shows an intention from the past.',
      'La intención ya existía antes del cambio.'
    ),
    tgt(
      'Ella iba a visitar a su abuela.',
      'She was going to visit her grandmother.',
      ['She', 'was', 'going', 'to', 'visit'],
      ['was', 'going', 'to', 'visit', 'grandmother'],
      'Usar will visit her grandmother.',
      'This is a past plan that was already in mind.',
      'La visita estaba pensada desde antes.'
    ),
    tgt(
      'Su padre iba a ir con el grupo.',
      'Her father was going to go with the group.',
      ['father', 'was', 'going', 'to', 'go'],
      ['was', 'going', 'to', 'go', 'group'],
      'Usar will go with the group.',
      'The plan belongs to the past point of view.',
      'El acompañamiento ya estaba decidido.'
    ),
    ctx(
      'Pero una llamada cambió el plan.',
      'But a phone call changed the plan.',
      ['phone', 'call', 'changed'],
      ['phone', 'call', 'changed'],
      'Cerrar sin marcar el cambio de plan.',
      'The scene should still feel like a plan that changed later.',
      'El contexto introduce la interrupción.'
    ),
    tgt(
      'No íbamos a perder el boleto.',
      'We were not going to lose the ticket.',
      ['We', 'were', 'not', 'going', 'to', 'lose'],
      ['were', 'not', 'going', 'to', 'lose', 'ticket'],
      'Usar will not lose the ticket.',
      'Negative future in the past keeps the old intention frame.',
      'La negativa muestra lo que pensaban evitar.'
    ),
    tgt(
      'Iban a salir juntos.',
      'They were going to leave together.',
      ['They', 'were', 'going', 'to', 'leave'],
      ['were', 'going', 'to', 'leave', 'together'],
      'Usar will leave together.',
      'The leaving is viewed from a past moment.',
      'La salida estaba prevista.'
    ),
    tgt(
      'Sara pensó que volvería más tarde.',
      'Sara thought she would return later.',
      ['Sara', 'thought', 'would', 'return'],
      ['thought', 'would', 'return', 'later'],
      'Usar Sara thought she will return later.',
      'Would is the future seen from the past.',
      'La vuelta era una expectativa pasada.'
    ),
    ctx(
      'La estación siguió tranquila mientras esperaban.',
      'The station stayed quiet while they waited.',
      ['station', 'stayed', 'quiet'],
      ['station', 'stayed', 'quiet'],
      'Cerrar sin ambiente de espera.',
      'The background should keep the calm and the suspended plan.',
      'El contexto sostiene la espera.'
    ),
    tgt(
      'Su madre dijo que esperaría allí.',
      'Her mother said she would wait there.',
      ['mother', 'said', 'would', 'wait'],
      ['said', 'would', 'wait', 'there'],
      'Usar she will wait there.',
      'Would shows the future from the past perspective.',
      'La promesa nace desde un momento anterior.'
    ),
    tgt(
      'Ellos creían que el viaje sería corto.',
      'They believed the trip would be short.',
      ['They', 'believed', 'would', 'be'],
      ['believed', 'would', 'be', 'short'],
      'Usar the trip will be short.',
      'Would is used after a past belief or thought.',
      'La expectativa se ve desde el pasado.'
    ),
    ctx(
      'Al final el viaje cambió pero nadie se perdió.',
      'In the end, the trip changed but nobody got lost.',
      ['trip', 'changed', 'nobody'],
      ['trip', 'changed', 'lost'],
      'Cerrar sin un resultado claro.',
      'The ending should show that the old plan did not fully happen.',
      'El cierre resume el cambio del plan.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La carta del día siguiente: Una promesa clara', type: 'Uso natural', value: 'confianza' },
  [
    ctx(
      'En la mesa había una carta sin abrir.',
      'There was an unopened letter on the table.',
      ['there', 'was', 'unopened'],
      ['letter', 'table', 'unopened'],
      'Perder la idea de una promesa previa.',
      'Think about what someone expected to do later from a past moment.',
      'La historia abre con una carta que cambia todo.'
    ),
    tgt(
      'Maya iba a leerla después de cenar.',
      'Maya was going to read it after dinner.',
      ['Maya', 'was', 'going', 'to', 'read'],
      ['was', 'going', 'to', 'read', 'dinner'],
      'Usar will read it after dinner.',
      'Was going to shows a past plan.',
      'La lectura estaba planeada.'
    ),
    tgt(
      'Ella iba a llamar a su hermano.',
      'She was going to call her brother.',
      ['She', 'was', 'going', 'to', 'call'],
      ['was', 'going', 'to', 'call', 'brother'],
      'Usar will call her brother.',
      'The call was already in mind before the letter.',
      'La llamada formaba parte del plan.'
    ),
    tgt(
      'Su hermano dijo que ayudaría.',
      'Her brother said he would help.',
      ['brother', 'said', 'he', 'would', 'help'],
      ['said', 'would', 'help', 'brother'],
      'Usar he will help.',
      'Would is the future from the past.',
      'La ayuda era una promesa pasada.'
    ),
    ctx(
      'El reloj marcó las ocho y todo siguió en silencio.',
      'The clock struck eight and everything stayed quiet.',
      ['clock', 'struck', 'everything'],
      ['clock', 'stayed', 'quiet'],
      'Cerrar sin la sensación de espera.',
      'The scene should feel like a paused promise.',
      'El contexto sostiene el momento previo.'
    ),
    tgt(
      'No íbamos a olvidar la dirección.',
      'We were not going to forget the address.',
      ['We', 'were', 'not', 'going', 'to', 'forget'],
      ['were', 'not', 'going', 'to', 'forget', 'address'],
      'Usar will not forget the address.',
      'This negative form keeps the old intention.',
      'La negativa protege el recuerdo.'
    ),
    tgt(
      'Iba ella a enviar la respuesta.',
      'Was she going to send the reply.',
      ['Was', 'she', 'going', 'to', 'send'],
      ['Was', 'going', 'to', 'send', 'reply'],
      'Usar will she send the reply.',
      'The question is about a past plan.',
      'La pregunta revisa una intención previa.'
    ),
    tgt(
      'Maya pensó que el mensaje llegaría pronto.',
      'Maya thought the message would arrive soon.',
      ['Maya', 'thought', 'would', 'arrive'],
      ['thought', 'would', 'arrive', 'soon'],
      'Usar will arrive soon.',
      'Would is used after a past thought.',
      'La llegada estaba prevista desde antes.'
    ),
    ctx(
      'La mesa siguió limpia mientras esperaban.',
      'The table stayed clean while they waited.',
      ['table', 'stayed', 'clean'],
      ['table', 'stayed', 'clean'],
      'Cerrar sin una escena de espera.',
      'The background should keep the calm of the letter scene.',
      'El contexto mantiene la mesa como testigo.'
    ),
    tgt(
      'Su hermano aseguró que volvería al final del día.',
      'Her brother promised he would return at the end of the day.',
      ['brother', 'promised', 'would', 'return'],
      ['promised', 'would', 'return', 'day'],
      'Usar he will return at the end of the day.',
      'Would is natural after promised in this view of the past.',
      'La promesa ya vivía en el pasado.'
    ),
    tgt(
      'Ella esperaba que todo saldría bien.',
      'She hoped everything would go well.',
      ['She', 'hoped', 'would', 'go'],
      ['hoped', 'would', 'go', 'well'],
      'Usar will go well.',
      'Would shows the result imagined from the past.',
      'La esperanza mira hacia adelante desde ayer.'
    ),
    ctx(
      'Al final la carta dejó a todos pensando en mañana.',
      'In the end, the letter left everyone thinking about tomorrow.',
      ['letter', 'left', 'thinking'],
      ['letter', 'everyone', 'tomorrow'],
      'Cerrar sin una idea de futuro pasado.',
      'The ending should make the promise feel remembered.',
      'El cierre deja el eco de la carta.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La noche del ensayo: Lo que ya imaginaban', type: 'Integración', value: 'previsión' },
  [
    ctx(
      'El teatro estaba vacío antes del ensayo.',
      'The theater was empty before rehearsal.',
      ['theater', 'was', 'empty'],
      ['theater', 'empty', 'before'],
      'Perder la idea de una expectativa pasada.',
      'Start with the stage before the planned action.',
      'La historia abre con un espacio a punto de cambiar.'
    ),
    tgt(
      'La compañía iba a empezar a las seis.',
      'The cast was going to start at six.',
      ['cast', 'was', 'going', 'to', 'start'],
      ['was', 'going', 'to', 'start', 'six'],
      'Usar will start at six.',
      'The schedule was already in mind from the past.',
      'El inicio estaba planeado.'
    ),
    tgt(
      'Ellos iban a revisar las luces.',
      'They were going to check the lights.',
      ['They', 'were', 'going', 'to', 'check'],
      ['were', 'going', 'to', 'check', 'lights'],
      'Usar will check the lights.',
      'The checking is viewed as a past plan.',
      'Las luces formaban parte del plan.'
    ),
    tgt(
      'La directora dijo que volverían a intentarlo.',
      'The director said they would try again.',
      ['director', 'said', 'would', 'try'],
      ['said', 'would', 'try', 'again'],
      'Usar they will try again.',
      'Would follows a past reporting verb.',
      'La repetición era una expectativa pasada.'
    ),
    ctx(
      'El escenario siguió oscuro por un momento.',
      'The stage stayed dark for a moment.',
      ['stage', 'stayed', 'dark'],
      ['stage', 'stayed', 'dark'],
      'Cerrar sin atmósfera de ensayo.',
      'The scene should still feel suspended before action begins.',
      'El contexto prepara la entrada al ensayo.'
    ),
    tgt(
      'No íbamos a perder tiempo.',
      'We were not going to waste time.',
      ['We', 'were', 'not', 'going', 'to', 'waste'],
      ['were', 'not', 'going', 'to', 'waste', 'time'],
      'Usar will not waste time.',
      'The old plan is still visible in the sentence.',
      'La negativa sostiene la intención.'
    ),
    tgt(
      'Iban a cambiar el final.',
      'Were they going to change the ending.',
      ['Were', 'they', 'going', 'to', 'change'],
      ['Were', 'going', 'to', 'change', 'ending'],
      'Usar will they change the ending.',
      'The change is viewed from a past moment.',
      'El final estaba bajo revisión.'
    ),
    tgt(
      'La actriz pensó que su escena sería mejor.',
      'The actress thought her scene would be better.',
      ['actress', 'thought', 'would', 'be'],
      ['thought', 'would', 'be', 'better'],
      'Usar will be better.',
      'Would shows expectation from the past.',
      'La mejora era una esperanza pasada.'
    ),
    ctx(
      'Los asientos siguieron vacíos hasta el final.',
      'The seats stayed empty until the end.',
      ['seats', 'stayed', 'empty'],
      ['seats', 'stayed', 'empty'],
      'Cerrar sin sensación de expectativa.',
      'The ending should keep the rehearsal tension visible.',
      'El contexto conserva la espera.'
    ),
    tgt(
      'El sonido iba a empezar primero.',
      'The sound was going to start first.',
      ['sound', 'was', 'going', 'to', 'start'],
      ['was', 'going', 'to', 'start', 'first'],
      'Usar will start first.',
      'Was going to keeps the past plan visible.',
      'El sonido estaba previsto antes.'
    ),
    tgt(
      'El público pensó que llegaría más tarde.',
      'The audience thought they would arrive later.',
      ['audience', 'thought', 'would', 'arrive'],
      ['thought', 'would', 'arrive', 'later'],
      'Usar will arrive later.',
      'Would keeps the future idea inside the past.',
      'La llegada era una expectativa.'
    ),
    ctx(
      'Al final el ensayo no terminó igual que empezó.',
      'In the end, the rehearsal did not end the same as it began.',
      ['rehearsal', 'did', 'not', 'end'],
      ['rehearsal', 'same', 'began'],
      'Cerrar sin contraste entre plan y resultado.',
      'The ending should show how the expectation changed.',
      'El cierre resume el cambio del plan.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 26.');
