import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[4];
const targetPattern = 'would / would rather + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'should', 'can', 'may', 'might'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Would / Would rather';
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
  { title: 'La cafetería tranquila: Preferencias simples', type: 'Descubrimiento', value: 'comodidad' },
  [
    ctx(
      'La mesa tiene té y café y todo se ve tranquilo.',
      'The table has tea and coffee and everything looks calm.',
      ['table', 'tea', 'coffee'],
      ['table', 'tea', 'coffee'],
      'Perder la idea de preferencia.',
      'Think about what someone prefers, not what is certain.',
      'La historia abre con dos opciones.'
    ),
    tgt(
      'Maya preferiría beber té.',
      'Maya would rather drink tea.',
      ['Maya', 'would', 'rather', 'drink'],
      ['would', 'rather', 'drink', 'tea'],
      'Usar will drink tea.',
      'Would rather shows preference.',
      'La preferencia ya está clara.'
    ),
    tgt(
      'Leo preferiría quedarse junto a la ventana.',
      'Leo would rather stay by the window.',
      ['Leo', 'would', 'rather', 'stay'],
      ['would', 'rather', 'stay', 'window'],
      'Usar would stay by the window.',
      'Would rather keeps the choice personal.',
      'La ubicación favorita queda clara.'
    ),
    tgt(
      'Ellos preferirían compartir el pastel.',
      'They would rather share the cake.',
      ['They', 'would', 'rather', 'share'],
      ['would', 'rather', 'share', 'cake'],
      'Usar will share the cake.',
      'Would rather expresses preference.',
      'Compartir aparece como elección.'
    ),
    ctx(
      'La mañana sigue suave y cálida.',
      'The morning stays soft and warm.',
      ['morning', 'stays', 'warm'],
      ['morning', 'soft', 'warm'],
      'Cerrar sin sensación de preferencia.',
      'The scene should keep the calm choice visible.',
      'El contexto sostiene el ambiente.'
    ),
    tgt(
      'Maya preferiría no salir temprano.',
      'Maya would rather not leave early.',
      ['Maya', 'would', 'rather', 'not', 'leave'],
      ['would', 'rather', 'not', 'leave', 'early'],
      'Usar would not leave early.',
      'Would rather not is a natural negative preference.',
      'La preferencia negativa es clara.'
    ),
    tgt(
      '¿Preferirías sentarte aquí?',
      'Would you rather sit here.',
      ['Would', 'you', 'rather', 'sit'],
      ['Would', 'rather', 'sit', 'here'],
      'Usar will you rather sit here.',
      'Would rather is used to ask about preference.',
      'La pregunta compara opciones.'
    ),
    tgt(
      'Leo preferiría pedir jugo.',
      'Leo would rather order juice.',
      ['Leo', 'would', 'rather', 'order'],
      ['would', 'rather', 'order', 'juice'],
      'Usar will order juice.',
      'Would rather keeps the choice personal and gentle.',
      'La bebida favorita gana.'
    ),
    ctx(
      'El café sigue en silencio y la conversación va despacio.',
      'The cafe stays quiet and the conversation goes slowly.',
      ['cafe', 'stays', 'quiet'],
      ['cafe', 'quiet', 'slowly'],
      'Cerrar sin una idea de elección.',
      'The ending should keep the preference theme alive.',
      'El contexto mantiene la calma.'
    ),
    tgt(
      'Los amigos preferirían hablar despacio.',
      'The friends would rather talk slowly.',
      ['friends', 'would', 'rather', 'talk'],
      ['would', 'rather', 'talk', 'slowly'],
      'Usar will talk slowly.',
      'Would rather fits a personal preference.',
      'La forma de hablar también se elige.'
    ),
    tgt(
      'Ellos preferirían pagar ahora.',
      'They would rather pay now.',
      ['They', 'would', 'rather', 'pay'],
      ['would', 'rather', 'pay', 'now'],
      'Usar will pay now.',
      'Would rather is about the chosen option.',
      'Pagar ahora resulta más cómodo.'
    ),
    ctx(
      'Al final, la cafetería deja espacio para elegir con calma.',
      'In the end, the cafe leaves space to choose calmly.',
      ['cafe', 'leaves', 'choose'],
      ['cafe', 'choose', 'calmly'],
      'Cerrar sin una conclusión sobre preferencias.',
      'The ending should show that choice matters.',
      'El cierre resume la preferencia.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tarde lluviosa: Elegir lo cómodo', type: 'Uso natural', value: 'descanso' },
  [
    ctx(
      'La lluvia golpea la ventana y el sofá se ve cómodo.',
      'The rain hits the window and the sofa looks comfortable.',
      ['rain', 'window', 'sofa'],
      ['rain', 'sofa', 'comfortable'],
      'Perder la idea de preferencia frente al clima.',
      'Think about the option someone would choose for comfort.',
      'La historia abre con una tarde cerrada.'
    ),
    tgt(
      'Preferiríamos quedarnos en casa.',
      'We would rather stay home.',
      ['We', 'would', 'rather', 'stay'],
      ['would', 'rather', 'stay', 'home'],
      'Usar will stay home.',
      'Would rather shows the choice that feels better.',
      'Quedarse en casa suena mejor.'
    ),
    tgt(
      'Preferiríamos ver una película.',
      'We would rather watch a movie.',
      ['We', 'would', 'rather', 'watch'],
      ['would', 'rather', 'watch', 'movie'],
      'Usar will watch a movie.',
      'Would rather keeps the preference clear.',
      'Ver una película es la opción elegida.'
    ),
    tgt(
      'Ella preferiría llamar a su hermano.',
      'She would rather call her brother.',
      ['She', 'would', 'rather', 'call'],
      ['would', 'rather', 'call', 'brother'],
      'Usar will call her brother.',
      'Would rather still means a personal preference.',
      'La llamada parece más amable.'
    ),
    ctx(
      'El sofá está listo y la casa se siente tranquila.',
      'The sofa is ready and the house feels quiet.',
      ['sofa', 'house', 'quiet'],
      ['sofa', 'house', 'quiet'],
      'Cerrar sin sensación de preferencia.',
      'The scene should support the comfortable choice.',
      'El contexto favorece quedarse.'
    ),
    tgt(
      'Preferiríamos no caminar lejos.',
      'We would rather not walk far.',
      ['We', 'would', 'rather', 'not', 'walk'],
      ['would', 'rather', 'not', 'walk', 'far'],
      'Usar will not walk far.',
      'Would rather not is a natural preference.',
      'Caminar lejos no resulta cómodo.'
    ),
    tgt(
      '¿Preferirías abrir la ventana?',
      'Would you rather open the window.',
      ['Would', 'you', 'rather', 'open'],
      ['Would', 'rather', 'open', 'window'],
      'Usar will you rather open the window.',
      'Would rather can be used to ask about choice.',
      'La pregunta compara opciones.'
    ),
    tgt(
      'Él preferiría leer en silencio.',
      'He would rather read in silence.',
      ['He', 'would', 'rather', 'read'],
      ['would', 'rather', 'read', 'silence'],
      'Usar will read in silence.',
      'Would rather keeps the idea of a chosen preference.',
      'Leer en silencio suena mejor.'
    ),
    ctx(
      'La sala sigue cálida y el ruido baja.',
      'The room stays warm and the noise goes down.',
      ['room', 'stays', 'warm'],
      ['room', 'noise', 'warm'],
      'Cerrar sin tono de descanso.',
      'The ending should show a calm choice.',
      'El contexto sostiene el refugio.'
    ),
    tgt(
      'Nosotros preferiríamos tomar cacao.',
      'We would rather drink cocoa.',
      ['We', 'would', 'rather', 'drink'],
      ['would', 'rather', 'drink', 'cocoa'],
      'Usar will drink cocoa.',
      'Would rather keeps the preference soft.',
      'El cacao encaja con la tarde.'
    ),
    tgt(
      'Prefieren mantener la puerta cerrada.',
      'They would rather keep the door closed.',
      ['They', 'would', 'rather', 'keep'],
      ['would', 'rather', 'keep', 'closed'],
      'Usar will keep the door closed.',
      'Would rather expresses the preferred option.',
      'La puerta cerrada parece mejor.'
    ),
    ctx(
      'Al final, la tarde se vuelve una decisión de comodidad.',
      'In the end, the afternoon becomes a choice of comfort.',
      ['afternoon', 'becomes', 'comfort'],
      ['afternoon', 'choice', 'comfort'],
      'Cerrar sin una conclusión de preferencia.',
      'The ending should show the comfort choice clearly.',
      'El cierre resume el descanso.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La reunión escolar: Elegir el mejor camino', type: 'Integración', value: 'claridad' },
  [
    ctx(
      'El salón tiene una mesa larga y muchas ideas.',
      'The room has a long table and many ideas.',
      ['room', 'table', 'ideas'],
      ['room', 'table', 'ideas'],
      'Perder la idea de elección preferida.',
      'Think about what feels best for the group.',
      'La historia abre con varias opciones.'
    ),
    tgt(
      'La clase preferiría practicar en silencio.',
      'The class would rather practice quietly.',
      ['class', 'would', 'rather', 'practice'],
      ['would', 'rather', 'practice', 'quietly'],
      'Usar will practice quietly.',
      'Would rather shows a preferred way of doing things.',
      'Practicar en silencio parece mejor.'
    ),
    tgt(
      'La maestra preferiría empezar a tiempo.',
      'The teacher would rather start on time.',
      ['teacher', 'would', 'rather', 'start'],
      ['would', 'rather', 'start', 'time'],
      'Usar will start on time.',
      'Would rather points to the chosen option.',
      'Empezar a tiempo es la preferencia.'
    ),
    tgt(
      'Ellos preferirían usar frases cortas.',
      'They would rather use short sentences.',
      ['They', 'would', 'rather', 'use'],
      ['would', 'rather', 'use', 'sentences'],
      'Usar will use short sentences.',
      'Would rather keeps the preference clear.',
      'Las frases cortas ayudan más.'
    ),
    ctx(
      'Los estudiantes están listos y miran el rotafolio.',
      'The students are ready and look at the flip chart.',
      ['students', 'ready', 'flip'],
      ['students', 'ready', 'chart'],
      'Cerrar sin sensación de decisión.',
      'The scene should still feel organized.',
      'El contexto sostiene la reunión.'
    ),
    tgt(
      'La clase preferiría no perder tiempo.',
      'The class would rather not waste time.',
      ['class', 'would', 'rather', 'not', 'waste'],
      ['would', 'rather', 'not', 'waste', 'time'],
      'Usar will not waste time.',
      'Would rather not is a natural negative preference.',
      'No perder tiempo es importante.'
    ),
    tgt(
      '¿Preferirían trabajar juntos?',
      'Would they rather work together.',
      ['Would', 'they', 'rather', 'work'],
      ['Would', 'rather', 'work', 'together'],
      'Usar will they rather work together.',
      'Would rather can ask about preference.',
      'La colaboración es una opción.'
    ),
    tgt(
      'Maya preferiría presentar el cartel.',
      'Maya would rather present the poster.',
      ['Maya', 'would', 'rather', 'present'],
      ['would', 'rather', 'present', 'poster'],
      'Usar will present the poster.',
      'Would rather keeps the choice personal.',
      'Presentar el cartel es su opción.'
    ),
    ctx(
      'La sala sigue en calma y todos escuchan.',
      'The room stays calm and everyone listens.',
      ['room', 'stays', 'calm'],
      ['room', 'everyone', 'listens'],
      'Cerrar sin una conclusión de elección.',
      'The ending should show the group selected a clear path.',
      'El contexto mantiene el orden.'
    ),
    tgt(
      'La maestra preferiría revisar la lista.',
      'The teacher would rather check the list.',
      ['teacher', 'would', 'rather', 'check'],
      ['would', 'rather', 'check', 'list'],
      'Usar will check the list.',
      'Would rather fits a chosen preference.',
      'Revisar la lista parece lo mejor.'
    ),
    tgt(
      'La clase preferiría terminar temprano.',
      'The class would rather finish early.',
      ['class', 'would', 'rather', 'finish'],
      ['would', 'rather', 'finish', 'early'],
      'Usar will finish early.',
      'Would rather is about the selected option.',
      'Terminar temprano suena más conveniente.'
    ),
    ctx(
      'Al final, la reunión avanza con decisiones claras.',
      'In the end, the meeting moves forward with clear decisions.',
      ['meeting', 'moves', 'decisions'],
      ['meeting', 'moves', 'clear'],
      'Cerrar sin una conclusión sobre elección.',
      'The ending should show how preference helped the meeting.',
      'El cierre resume el camino elegido.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 31.');
