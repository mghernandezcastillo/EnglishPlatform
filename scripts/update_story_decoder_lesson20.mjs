import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[1];
const targetPattern = 'am / is / are going to + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'do', 'does', 'did', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Be Going To';
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
  { title: 'El cielo oscuro: Lo que ya se ve venir', type: 'Descubrimiento', value: 'observación' },
  [
    ctx(
      'El cielo sobre la playa ya está muy oscuro.',
      'The sky over the beach is already very dark.',
      ['sky', 'beach', 'dark'],
      ['sky', 'beach', 'dark'],
      'Perder la evidencia presente que anuncia el futuro.',
      'Primero mira la señal visible antes de hablar del plan.',
      'La historia abre con una pista clara.'
    ),
    tgt(
      'Va a llover pronto.',
      'It is going to rain soon.',
      ['It', 'is', 'going', 'to', 'rain'],
      ['going', 'rain', 'soon'],
      'Usar will rain en vez de going to.',
      'Be going to is used for evidence-based predictions.',
      'La lluvia ya se puede prever.'
    ),
    tgt(
      'Las nubes van a cubrir el sol.',
      'The clouds are going to cover the sun.',
      ['clouds', 'are', 'going', 'to', 'cover'],
      ['are', 'going', 'to', 'cover'],
      'Usar will cover for visible evidence.',
      'The clouds make the future action obvious.',
      'La evidencia está en el cielo.'
    ),
    tgt(
      'La arena no va a quedarse seca.',
      'The sand is not going to stay dry.',
      ['sand', 'is', 'not', 'going', 'to', 'stay'],
      ['is', 'not', 'going', 'to', 'stay'],
      'Usar will not stay dry.',
      'Negative be going to keeps the full structure.',
      'La negativa muestra lo que se espera que ocurra.'
    ),
    ctx(
      'Las olas golpean más fuerte cada minuto.',
      'The waves are hitting harder every minute.',
      ['waves', 'are', 'hitting'],
      ['waves', 'harder', 'minute'],
      'Cerrar sin una pista visual.',
      'The scene should still feel like a warning.',
      'El contexto sigue anunciando el cambio.'
    ),
    tgt(
      '¿Van a cerrar el muelle?',
      'Are they going to close the pier?',
      ['Are', 'they', 'going', 'to', 'close'],
      ['Are', 'going', 'to', 'close'],
      'Usar will they close the pier.',
      'Questions with be going to use am / is / are + subject + going to.',
      'La pregunta mira un plan que ya parece decidido.'
    ),
    tgt(
      'El capitán va a mover el barco.',
      'The captain is going to move the boat.',
      ['captain', 'is', 'going', 'to', 'move'],
      ['is', 'going', 'to', 'move'],
      'Usar moves in this future plan.',
      'Be going to shows intention or near future.',
      'La acción está casi lista para pasar.'
    ),
    tgt(
      'Los niños van a correr hacia la carpa.',
      'The children are going to run toward the tent.',
      ['children', 'are', 'going', 'to', 'run'],
      ['are', 'going', 'to', 'run'],
      'Usar will run for a planned movement.',
      'The plan is already visible in the scene.',
      'La intención se ve en la preparación.'
    ),
    ctx(
      'El equipo recoge sus cosas y mira al cielo.',
      'The team picks up their things and looks at the sky.',
      ['team', 'picks', 'things'],
      ['team', 'sky', 'things'],
      'Cerrar sin conexión con la evidencia.',
      'The background should support the prediction.',
      'La escena sostiene el plan que viene.'
    ),
    tgt(
      'No van a seguir caminando mucho tiempo.',
      'They are not going to keep walking for long.',
      ['They', 'are', 'not', 'going', 'to', 'keep'],
      ['are', 'not', 'going', 'to', 'keep'],
      'Usar will not keep walking for long.',
      'The negative structure shows a near future limit.',
      'La negativa marca un cambio esperado.'
    ),
    tgt(
      'La marea va a subir más tarde.',
      'The tide is going to rise later.',
      ['tide', 'is', 'going', 'to', 'rise'],
      ['is', 'going', 'to', 'rise'],
      'Usar rises instead of is going to rise.',
      'Later keeps the future meaning clear.',
      'La subida ya parece inevitable.'
    ),
    ctx(
      'Al final, todos se preparan para la lluvia.',
      'In the end, everyone prepares for the rain.',
      ['everyone', 'prepares', 'rain'],
      ['everyone', 'prepares', 'rain'],
      'Cerrar sin una conclusión visible.',
      'The ending should show readiness, not just prediction.',
      'El cierre deja el escenario listo.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria escolar: Un plan que ya empezó', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La mesa ya tiene carteles, cajas y cinta.',
      'The table already has posters, boxes, and tape.',
      ['table', 'already', 'posters'],
      ['table', 'boxes', 'tape'],
      'Perder la evidencia del plan.',
      'Think about what is already visible right now.',
      'La escena muestra preparación real.'
    ),
    tgt(
      'Ana va a colocar los carteles.',
      'Ana is going to place the posters.',
      ['Ana', 'is', 'going', 'to', 'place'],
      ['is', 'going', 'to', 'place'],
      'Usar will place instead of going to.',
      'The posters are ready to be placed.',
      'La intención ya está clara.'
    ),
    tgt(
      'Luis va a cortar la cinta ahora.',
      'Luis is going to cut the tape now.',
      ['Luis', 'is', 'going', 'to', 'cut'],
      ['is', 'going', 'to', 'cut'],
      'Usar will cut for an already visible plan.',
      'Now and the materials show the plan is present.',
      'La acción está prácticamente decidida.'
    ),
    tgt(
      'La maestra va a explicar el orden.',
      'The teacher is going to explain the order.',
      ['teacher', 'is', 'going', 'to', 'explain'],
      ['is', 'going', 'to', 'explain'],
      'Usar explains for a near future plan.',
      'Be going to fits planned intentions.',
      'La explicación está a punto de ocurrir.'
    ),
    ctx(
      'El equipo revisa las listas y mira la hora.',
      'The team checks the lists and looks at the time.',
      ['team', 'checks', 'lists'],
      ['team', 'looks', 'time'],
      'Cerrar sin sensación de preparación.',
      'The scene should make the plan obvious.',
      'El contexto confirma la intención.'
    ),
    tgt(
      'No van a olvidar los números de las mesas.',
      'They are not going to forget the table numbers.',
      ['They', 'are', 'not', 'going', 'to', 'forget'],
      ['are', 'not', 'going', 'to', 'forget'],
      'Usar will not forget here.',
      'The plan is already visible, so use be going to.',
      'La negativa muestra una intención clara.'
    ),
    tgt(
      '¿Van a terminar antes del almuerzo?',
      'Are they going to finish before lunch?',
      ['Are', 'they', 'going', 'to', 'finish'],
      ['Are', 'going', 'to', 'finish'],
      'Usar will they finish before lunch.',
      'Questions with be going to start with am / is / are.',
      'La pregunta revisa el plan escolar.'
    ),
    tgt(
      'Maya va a traer pegatinas nuevas.',
      'Maya is going to bring new stickers.',
      ['Maya', 'is', 'going', 'to', 'bring'],
      ['is', 'going', 'to', 'bring'],
      'Usar brings instead of is going to bring.',
      'The new stickers are part of the plan.',
      'La compra ya está decidida.'
    ),
    ctx(
      'La sala está ordenada y lista para entrar.',
      'The hall is tidy and ready to enter.',
      ['hall', 'tidy', 'ready'],
      ['hall', 'ready', 'enter'],
      'Cerrar sin una pista del plan.',
      'The background should show preparation before action.',
      'El contexto refuerza la organización.'
    ),
    tgt(
      'Los estudiantes van a colgar las fotos.',
      'The students are going to hang the photos.',
      ['students', 'are', 'going', 'to', 'hang'],
      ['are', 'going', 'to', 'hang'],
      'Usar will hang for this planned action.',
      'Be going to shows the clear intention.',
      'Las fotos ya tienen destino.'
    ),
    tgt(
      'La feria va a empezar pronto.',
      'The fair is going to start soon.',
      ['fair', 'is', 'going', 'to', 'start'],
      ['is', 'going', 'to', 'start'],
      'Usar will start soon.',
      'The near future is strongly suggested by the scene.',
      'El inicio ya está cerca.'
    ),
    ctx(
      'Al final, todo queda listo para la feria.',
      'In the end, everything is ready for the fair.',
      ['everything', 'is', 'ready'],
      ['everything', 'ready', 'fair'],
      'Cerrar sin un resultado claro.',
      'The ending should show readiness, not just prediction.',
      'El cierre confirma la preparación.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La caminata familiar: Un plan visible', type: 'Integración', value: 'cooperación' },
  [
    ctx(
      'Las mochilas ya están junto a la puerta.',
      'The backpacks are already by the door.',
      ['backpacks', 'already', 'door'],
      ['backpacks', 'door'],
      'Perder la evidencia de intención.',
      'Look for objects already placed for departure.',
      'La escena abre con un plan que se ve.'
    ),
    tgt(
      'Ellos van a salir temprano.',
      'They are going to leave early.',
      ['They', 'are', 'going', 'to', 'leave'],
      ['are', 'going', 'to', 'leave'],
      'Usar will leave early.',
      'The early bags make the plan obvious.',
      'La salida ya está organizada.'
    ),
    tgt(
      'Maya va a llevar agua para todos.',
      'Maya is going to bring water for everyone.',
      ['Maya', 'is', 'going', 'to', 'bring'],
      ['is', 'going', 'to', 'bring'],
      'Usar will bring water for everyone.',
      'The water is part of the visible plan.',
      'La intención ya está en movimiento.'
    ),
    tgt(
      'El padre va a revisar el camino.',
      'The father is going to check the path.',
      ['father', 'is', 'going', 'to', 'check'],
      ['is', 'going', 'to', 'check'],
      'Usar will check the path.',
      'The path is being prepared before they leave.',
      'La revisión muestra preparación.'
    ),
    ctx(
      'Todos miran el mapa sobre la mesa.',
      'Everyone looks at the map on the table.',
      ['Everyone', 'looks', 'map'],
      ['Everyone', 'map', 'table'],
      'Cerrar sin mostrar preparación.',
      'The scene should feel like a plan already set.',
      'El contexto deja ver el recorrido.'
    ),
    tgt(
      'No van a olvidar la comida.',
      'They are not going to forget the food.',
      ['They', 'are', 'not', 'going', 'to', 'forget'],
      ['are', 'not', 'going', 'to', 'forget'],
      'Usar will not forget the food.',
      'The negative form still shows a plan or intention.',
      'La negativa protege la organización.'
    ),
    tgt(
      '¿Van a caminar cerca del río?',
      'Are they going to walk near the river?',
      ['Are', 'they', 'going', 'to', 'walk'],
      ['Are', 'going', 'to', 'walk'],
      'Usar will they walk near the river.',
      'The question asks about a planned action.',
      'La caminata ya se entiende como plan.'
    ),
    tgt(
      'La madre va a guardar las llaves.',
      'The mother is going to keep the keys.',
      ['mother', 'is', 'going', 'to', 'keep'],
      ['is', 'going', 'to', 'keep'],
      'Usar will keep the keys.',
      'The keys are already part of the plan.',
      'La seguridad también entra en la intención.'
    ),
    ctx(
      'La casa está en silencio antes de salir.',
      'The house is quiet before leaving.',
      ['house', 'quiet', 'before'],
      ['house', 'quiet', 'leaving'],
      'Cerrar sin sensación de salida próxima.',
      'The calm should make the plan feel ready.',
      'El contexto mantiene la salida a la vista.'
    ),
    tgt(
      'Los niños van a disfrutar el paseo.',
      'The children are going to enjoy the walk.',
      ['children', 'are', 'going', 'to', 'enjoy'],
      ['are', 'going', 'to', 'enjoy'],
      'Usar will enjoy the walk.',
      'The enjoyment is part of the planned outing.',
      'La experiencia ya se anticipa.'
    ),
    tgt(
      'El grupo no va a cambiar de idea.',
      'The group is not going to change its mind.',
      ['group', 'is', 'not', 'going', 'to', 'change'],
      ['is', 'not', 'going', 'to', 'change'],
      'Usar will not change its mind.',
      'The plan is already settled.',
      'La decisión aparece firme.'
    ),
    ctx(
      'Al final, la caminata está lista incluso antes de empezar.',
      'In the end, the walk is ready even before it starts.',
      ['walk', 'is', 'ready'],
      ['walk', 'ready', 'starts'],
      'Cerrar sin una idea de plan visible.',
      'The ending should show intention and readiness.',
      'El cierre resume una salida ya pensada.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 20.');
