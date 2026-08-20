import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[0];
const targetPattern = 'can / could + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'would', 'may', 'might', 'must'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Can / Could';
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
  { title: 'El parque con rampa: Lo que sí pueden hacer', type: 'Descubrimiento', value: 'accesibilidad' },
  [
    ctx(
      'El parque tiene una rampa nueva junto a las escaleras.',
      'The park has a new ramp beside the stairs.',
      ['park', 'ramp', 'stairs'],
      ['park', 'ramp', 'stairs'],
      'Perder la idea de capacidad presente.',
      'Look at what is possible right now.',
      'La historia abre con una mejora visible.'
    ),
    tgt(
      'Nico puede llegar al columpio ahora.',
      'Nico can reach the swing now.',
      ['Nico', 'can', 'reach'],
      ['can', 'reach', 'swing'],
      'Usar can reaches the swing now.',
      'Can + base verb shows present ability.',
      'La capacidad se ve de inmediato.'
    ),
    tgt(
      'Sara puede empujar la silla con una mano.',
      'Sara can push the chair with one hand.',
      ['Sara', 'can', 'push'],
      ['can', 'push', 'chair'],
      'Usar can pushes the chair.',
      'Can keeps the verb in base form.',
      'La fuerza y la facilidad aparecen juntas.'
    ),
    tgt(
      'Ellos pueden cruzar el camino juntos.',
      'They can cross the path together.',
      ['They', 'can', 'cross'],
      ['can', 'cross', 'path'],
      'Usar can crosses the path.',
      'The verb stays in base form after can.',
      'La acción posible se comparte.'
    ),
    ctx(
      'El camino es ancho y el banco queda cerca.',
      'The path is wide and the bench is close.',
      ['path', 'is', 'wide'],
      ['path', 'bench', 'close'],
      'Cerrar sin un contexto de posibilidad.',
      'The scene should make the task feel reachable.',
      'El contexto da soporte a la habilidad.'
    ),
    tgt(
      'Él no puede subir las escaleras todavía.',
      'He cannot climb the stairs yet.',
      ['He', 'cannot', 'climb'],
      ['cannot', 'climb', 'stairs'],
      'Usar does not climb the stairs yet.',
      'Cannot keeps the modal idea clear.',
      'La negativa muestra la limitación actual.'
    ),
    tgt(
      '¿Puede el niño abrir la puerta?',
      'Can the boy open the gate.',
      ['Can', 'the', 'boy', 'open'],
      ['Can', 'open', 'gate'],
      'Usar does the boy open the gate.',
      'Can starts the question with the modal.',
      'La pregunta comprueba la capacidad.'
    ),
    tgt(
      'La familia puede sentarse junto a la fuente.',
      'The family can sit near the fountain.',
      ['family', 'can', 'sit'],
      ['can', 'sit', 'fountain'],
      'Usar can sits near the fountain.',
      'Can keeps the base verb.',
      'La posibilidad también vale para la familia.'
    ),
    ctx(
      'La tarde sigue tranquila y el parque se ve seguro.',
      'The afternoon stays calm and the park looks safe.',
      ['afternoon', 'stays', 'calm'],
      ['afternoon', 'park', 'safe'],
      'Cerrar sin sensación de facilidad.',
      'The background should support what people can do.',
      'El contexto sostiene la idea de acceso.'
    ),
    tgt(
      'Los niños pueden bajar por la rampa solos.',
      'The children can go down the ramp alone.',
      ['children', 'can', 'go'],
      ['can', 'go', 'ramp'],
      'Usar can goes down the ramp alone.',
      'The base form stays after can.',
      'La facilidad queda clara.'
    ),
    tgt(
      'No pueden perder la pelota.',
      'They cannot lose the ball.',
      ['They', 'cannot', 'lose'],
      ['cannot', 'lose', 'ball'],
      'Usar can not loses the ball.',
      'Cannot is the negative form used here.',
      'La negativa muestra control.'
    ),
    ctx(
      'Al final, todos usan la rampa sin problema.',
      'In the end, everyone uses the ramp without trouble.',
      ['everyone', 'uses', 'ramp'],
      ['everyone', 'uses', 'trouble'],
      'Cerrar sin una idea de capacidad real.',
      'The ending should show a clear result.',
      'El cierre confirma la accesibilidad.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La nota amable: Peticiones que suenan bien', type: 'Uso natural', value: 'cortesía' },
  [
    ctx(
      'Ana encontró una nota en la mesa.',
      'Ana found a note on the table.',
      ['Ana', 'found', 'note'],
      ['Ana', 'found', 'table'],
      'Perder la idea de petición amable.',
      'Look for a request that sounds soft and respectful.',
      'La historia abre con una nota amistosa.'
    ),
    tgt(
      'Puedes ayudarme con la caja.',
      'Can you help me with the box.',
      ['Can', 'you', 'help'],
      ['Can', 'help', 'box'],
      'Usar do you help me with the box.',
      'Can is used for a direct but polite request.',
      'La ayuda suena amable.'
    ),
    tgt(
      'Podría llevar el bolso.',
      'Could you carry the bag.',
      ['Could', 'you', 'carry'],
      ['Could', 'carry', 'bag'],
      'Usar can you carry the bag.',
      'Could makes the request softer.',
      'La cortesía se vuelve más suave.'
    ),
    tgt(
      'Podríamos empezar ahora.',
      'Could we start now.',
      ['Could', 'we', 'start'],
      ['Could', 'start', 'now'],
      'Usar can we start now.',
      'Could keeps the request gentle.',
      'La sugerencia suena respetuosa.'
    ),
    ctx(
      'La mesa tiene más cosas de las que parece.',
      'The table has more things than it seems.',
      ['table', 'has', 'more'],
      ['table', 'things', 'more'],
      'Cerrar sin tono amable.',
      'The scene should still feel conversational.',
      'El contexto sostiene la nota.'
    ),
    tgt(
      'Él no pudo quedarse mucho tiempo.',
      'He could not stay long.',
      ['He', 'could', 'not', 'stay'],
      ['could', 'not', 'stay', 'long'],
      'Usar cannot stay long.',
      'Could not works for past inability or limitation.',
      'La limitación pasada queda clara.'
    ),
    tgt(
      '¿Podría abrir la ventana?',
      'Could you open the window.',
      ['Could', 'you', 'open'],
      ['Could', 'open', 'window'],
      'Usar can you open the window.',
      'Could softens the request.',
      'La petición suena más educada.'
    ),
    tgt(
      '¿Podrían enviar el archivo hoy?',
      'Could they send the file today.',
      ['Could', 'they', 'send'],
      ['Could', 'send', 'file'],
      'Usar can they send the file today.',
      'Could makes the question more polite.',
      'La solicitud mantiene respeto.'
    ),
    ctx(
      'Ana sonríe porque la nota se ve amable.',
      'Ana smiles because the note looks kind.',
      ['Ana', 'smiles', 'kind'],
      ['Ana', 'note', 'kind'],
      'Cerrar sin un tono de cortesía.',
      'The ending should keep the polite tone in mind.',
      'El contexto refuerza la amabilidad.'
    ),
    tgt(
      'Podemos sentarnos aquí.',
      'We can sit here.',
      ['We', 'can', 'sit'],
      ['can', 'sit', 'here'],
      'Usar can sits here.',
      'Can keeps the base verb.',
      'La invitación es sencilla.'
    ),
    tgt(
      'No podrías esperar afuera.',
      'You could not wait outside.',
      ['You', 'could', 'not', 'wait'],
      ['could', 'not', 'wait', 'outside'],
      'Usar can not wait outside.',
      'Could not keeps the polite or past frame.',
      'La negativa sigue sonando suave.'
    ),
    ctx(
      'Al final, la nota deja una sensación de respeto.',
      'In the end, the note leaves a feeling of respect.',
      ['note', 'leaves', 'respect'],
      ['note', 'feeling', 'respect'],
      'Cerrar sin tono amable.',
      'The ending should show a soft and respectful request.',
      'El cierre resume la cortesía.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Cuando era niño: Lo que podía hacer', type: 'Integración', value: 'memoria' },
  [
    ctx(
      'Cuando era pequeño, Leo vivía cerca del río.',
      'When he was little, Leo lived near the river.',
      ['When', 'was', 'little'],
      ['Leo', 'lived', 'river'],
      'Perder la idea de habilidad pasada.',
      'Think about what someone was able to do in the past.',
      'La historia abre con un recuerdo de infancia.'
    ),
    tgt(
      'Leo podía nadar muy bien.',
      'Leo could swim very well.',
      ['Leo', 'could', 'swim'],
      ['could', 'swim', 'well'],
      'Usar can swim very well.',
      'Could shows past ability.',
      'La habilidad pertenece al pasado.'
    ),
    tgt(
      'También podía correr rápido.',
      'He could run fast too.',
      ['He', 'could', 'run'],
      ['could', 'run', 'fast'],
      'Usar can run fast too.',
      'Could keeps the action in a past frame.',
      'La rapidez ya era parte de él.'
    ),
    tgt(
      'No podía subir tan alto.',
      'He could not climb so high.',
      ['He', 'could', 'not', 'climb'],
      ['could', 'not', 'climb', 'high'],
      'Usar cannot climb so high.',
      'Could not shows a past limitation.',
      'La altura marcaba un límite antiguo.'
    ),
    ctx(
      'Su abuelo lo miraba desde la orilla.',
      'His grandfather watched him from the shore.',
      ['grandfather', 'watched', 'shore'],
      ['grandfather', 'watched', 'shore'],
      'Cerrar sin un recuerdo claro.',
      'The background should keep the memory calm.',
      'El contexto sostiene la memoria.'
    ),
    tgt(
      '¿Podía tocar el piano entonces?',
      'Could he play the piano then.',
      ['Could', 'he', 'play'],
      ['Could', 'play', 'piano'],
      'Usar can he play the piano then.',
      'Could asks about past ability.',
      'La pregunta mira una capacidad pasada.'
    ),
    tgt(
      'Podía leer historias cortas.',
      'He could read short stories.',
      ['He', 'could', 'read'],
      ['could', 'read', 'stories'],
      'Usar can read short stories.',
      'Could keeps the past memory clear.',
      'La lectura también era posible antes.'
    ),
    tgt(
      'Podía ayudar en la cocina.',
      'He could help in the kitchen.',
      ['He', 'could', 'help'],
      ['could', 'help', 'kitchen'],
      'Usar can help in the kitchen.',
      'Could marks ability in the past.',
      'La ayuda ya existía cuando era niño.'
    ),
    ctx(
      'La casa seguía llena de sonidos suaves.',
      'The house stayed full of soft sounds.',
      ['house', 'stayed', 'full'],
      ['house', 'soft', 'sounds'],
      'Cerrar sin atmósfera de recuerdo.',
      'The scene should feel like a memory.',
      'El contexto conserva la infancia.'
    ),
    tgt(
      'No podía entenderlo todo.',
      'He could not understand everything.',
      ['He', 'could', 'not', 'understand'],
      ['could', 'not', 'understand', 'everything'],
      'Usar cannot understand everything.',
      'Could not shows a past limit.',
      'La comprensión tenía un límite.'
    ),
    tgt(
      'Podía escuchar el río por la noche.',
      'He could hear the river at night.',
      ['He', 'could', 'hear'],
      ['could', 'hear', 'river'],
      'Usar can hear the river at night.',
      'Could keeps the memory in the past.',
      'El sonido forma parte del recuerdo.'
    ),
    ctx(
      'Al final, Leo recuerda que antes podía hacer mucho.',
      'In the end, Leo remembers that he could do a lot before.',
      ['Leo', 'remembers', 'could'],
      ['Leo', 'could', 'before'],
      'Cerrar sin una idea de pasado.',
      'The ending should show remembered ability.',
      'El cierre resume la habilidad pasada.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 27.');
