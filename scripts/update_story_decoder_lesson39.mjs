import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[2];
const targetPattern = 'If + past simple, would + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'can', 'could', 'might', 'should'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Second Conditional';
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
  { title: 'La billetera encontrada: Una decisión honesta', type: 'Descubrimiento', value: 'honestidad' },
  [
    ctx(
      'La tarde está tranquila en la plaza',
      'The afternoon is quiet in the square',
      ['afternoon', 'quiet', 'square'],
      ['afternoon', 'quiet', 'square'],
      'Perder la calma de la escena inicial',
      'The opening scene should leave space for a hypothetical choice',
      'La plaza tranquila deja ver la decisión'
    ),
    ctx(
      'Sara ve una billetera sobre una banca',
      'Sara sees a wallet on a bench',
      ['Sara', 'sees', 'wallet'],
      ['Sara', 'wallet', 'bench'],
      'Hacer la escena demasiado larga antes del condicional',
      'The wallet should appear as the clear problem',
      'La billetera crea el dilema'
    ),
    ctx(
      'Hay unas monedas y una tarjeta adentro',
      'There are some coins and a card inside',
      ['coins', 'card', 'inside'],
      ['coins', 'card', 'inside'],
      'Ignorar la pista que ayuda a pensar en el dueño',
      'The inside items support the decision to return it',
      'Las pistas ayudan a imaginar al dueño'
    ),
    ctx(
      'Nico pregunta qué harían si nadie vuelve',
      'Nico asks what they would do if nobody returns',
      ['Nico', 'asks', 'would', 'do'],
      ['Nico', 'asks', 'nobody', 'returns'],
      'Cerrar sin una pregunta moral o de elección',
      'The question should lead into the unreal decision pattern',
      'La pregunta abre el dilema'
    ),
    tgt(
      'Si encontrara una billetera, la llevaría a la oficina',
      'If I found a wallet, I would take it to the office',
      ['If', 'I', 'found', 'wallet'],
      ['If', 'I', 'found', 'wallet', 'take'],
      'Usar If I find a wallet, I take it to the office',
      'Second Conditional uses past simple in the if-clause and would in the result',
      'La decisión imaginaria queda clara'
    ),
    tgt(
      'Si la billetera tuviera un nombre, llamaríamos al dueño',
      'If the wallet had a name, we would call the owner',
      ['If', 'the', 'wallet', 'had', 'a', 'name'],
      ['If', 'wallet', 'had', 'name', 'call'],
      'Usar If the wallet has a name, we would call the owner',
      'The if-clause stays unreal with past simple',
      'El nombre permitiría contactar a alguien'
    ),
    tgt(
      'Si el dueño estuviera cerca, se la devolvería enseguida',
      'If the owner were near, she would return it right away',
      ['If', 'the', 'owner', 'were', 'near'],
      ['If', 'owner', 'were', 'near', 'return'],
      'Usar If the owner is near, she would return it right away',
      'Were is common in second conditional situations with be',
      'La cercanía cambia la reacción'
    ),
    tgt(
      'Si tuviéramos más tiempo, esperaríamos allí',
      'If we had more time, we would wait there',
      ['If', 'we', 'had', 'more', 'time'],
      ['If', 'we', 'had', 'more', 'time', 'wait'],
      'Usar If we have more time, we would wait there',
      'The result clause needs would + base verb',
      'Más tiempo cambia la elección'
    ),
    tgt(
      'Si la billetera fuera mía, me preocuparía mucho',
      'If the wallet were mine, I would worry a lot',
      ['If', 'the', 'wallet', 'were', 'mine'],
      ['If', 'wallet', 'were', 'mine', 'worry'],
      'Usar If the wallet is mine, I would worry a lot',
      'Second Conditional often uses were with unreal be situations',
      'Ser dueño de la billetera cambia la emoción'
    ),
    tgt(
      'Si el nombre fuera claro, el grupo sabría qué hacer',
      'If the name were clear, the group would know what to do',
      ['If', 'the', 'name', 'were', 'clear'],
      ['If', 'name', 'were', 'clear', 'know'],
      'Usar If the name is clear, the group would know what to do',
      'The condition is imagined, so the sentence stays hypothetical',
      'Un nombre claro facilitaría todo'
    ),
    tgt(
      'Si ella viera la dirección, iría sola',
      'If she saw the address, she would go alone',
      ['If', 'she', 'saw', 'the', 'address'],
      ['If', 'she', 'saw', 'address', 'go'],
      'Usar If she sees the address, she would go alone',
      'Past simple in the if-clause marks the unreal condition',
      'Ver la dirección cambiaría el plan'
    ),
    tgt(
      '¿Qué harías si encontraras el dueño?',
      'What would you do if you found the owner?',
      ['What', 'would', 'you', 'do', 'if'],
      ['What', 'would', 'you', 'do', 'owner'],
      'Escribir What will you do if you found the owner?',
      'Questions still keep the second conditional pattern',
      'La pregunta invita a pensar la elección'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Una idea mejor', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'El salón está lleno de carteles de colores',
      'The classroom is full of colorful posters',
      ['classroom', 'colorful', 'posters'],
      ['classroom', 'colorful', 'posters'],
      'Perder el ambiente de presentación escolar',
      'The setting should feel like a place for imagined improvements',
      'El aula invita a imaginar cambios'
    ),
    ctx(
      'Un robot de cartón descansa sobre la mesa',
      'A cardboard robot rests on the table',
      ['robot', 'cardboard', 'table'],
      ['robot', 'cardboard', 'table'],
      'No dejar claro el objeto del proyecto',
      'The robot should become the focus of hypothetical changes',
      'El robot es el centro del proyecto'
    ),
    ctx(
      'Marta anota ideas en un cuaderno azul',
      'Marta writes ideas in a blue notebook',
      ['Marta', 'writes', 'ideas'],
      ['Marta', 'writes', 'ideas'],
      'Ignorar el proceso de mejora del proyecto',
      'The notebook shows active planning',
      'Las ideas ya están en marcha'
    ),
    ctx(
      'La profesora escucha con interés',
      'The teacher listens with interest',
      ['teacher', 'listens', 'interest'],
      ['teacher', 'listens', 'interest'],
      'Cerrar sin una figura de apoyo',
      'The teacher should support the hypothetical revisions',
      'La profesora apoya la creatividad'
    ),
    tgt(
      'Si el robot fuera más pequeño, cabría en la mesa',
      'If the robot were smaller, it would fit on the table',
      ['If', 'the', 'robot', 'were', 'smaller'],
      ['If', 'robot', 'were', 'smaller', 'fit'],
      'Usar If the robot is smaller, it would fit on the table',
      'The condition is imaginary, so second conditional fits',
      'Un robot más pequeño sería más útil'
    ),
    tgt(
      'Si la batería durara más, lo mostraríamos todo el día',
      'If the battery lasted longer, we would show it all day',
      ['If', 'the', 'battery', 'lasted', 'longer'],
      ['If', 'battery', 'lasted', 'longer', 'show'],
      'Usar If the battery lasts longer, we would show it all day',
      'Past simple in the if-clause makes the situation hypothetical',
      'Más batería cambia la demostración'
    ),
    tgt(
      'Si el modelo se moviera más despacio, todos lo entenderían mejor',
      'If the model moved more slowly, everyone would understand it better',
      ['If', 'the', 'model', 'moved', 'more', 'slowly'],
      ['If', 'model', 'moved', 'slowly', 'understand'],
      'Usar If the model moves more slowly, everyone would understand it better',
      'The result clause keeps would + base verb',
      'Ir más despacio ayuda a explicar'
    ),
    tgt(
      'Si usaran papel reciclado, el proyecto se vería más limpio',
      'If they used recycled paper, the project would look cleaner',
      ['If', 'they', 'used', 'recycled', 'paper'],
      ['If', 'they', 'used', 'paper', 'look'],
      'Usar If they use recycled paper, the project would look cleaner',
      'Second Conditional is useful for imagined improvements',
      'El papel reciclado mejora la presentación'
    ),
    tgt(
      'Si tuviéramos una pantalla más brillante, se vería mejor',
      'If we had a brighter screen, it would look better',
      ['If', 'we', 'had', 'a', 'brighter'],
      ['If', 'we', 'had', 'brighter', 'look'],
      'Usar If we have a brighter screen, it would look better',
      'The if-clause stays in past simple even though the idea is present',
      'La pantalla brillante haría la diferencia'
    ),
    tgt(
      'Si la profesora pidiera cambios, mejoraríamos el diseño',
      'If the teacher asked for changes, we would improve the design',
      ['If', 'the', 'teacher', 'asked', 'for', 'changes'],
      ['If', 'teacher', 'asked', 'changes', 'improve'],
      'Usar If the teacher asks for changes, we would improve the design',
      'Asked in the if-clause keeps the situation unreal',
      'Los cambios imaginarios hacen crecer el proyecto'
    ),
    tgt(
      'Si el robot fuera silencioso, todos lo querrían usar',
      'If the robot were quiet, everyone would want to use it',
      ['If', 'the', 'robot', 'were', 'quiet'],
      ['If', 'robot', 'were', 'quiet', 'want'],
      'Usar If the robot is quiet, everyone would want to use it',
      'Were is very common for imaginary be-sentences',
      'El silencio volvería útil al robot'
    ),
    tgt(
      '¿Lo presentarían si tuviera una luz mejor?',
      'Would they present it if it had a better light?',
      ['Would', 'they', 'present', 'it', 'if'],
      ['Would', 'they', 'present', 'light', 'if'],
      'Escribir Will they present it if it had a better light?',
      'Questions can still carry the second conditional pattern',
      'La luz mejor cambiaría la decisión'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Un barrio más amable', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'La calle está tranquila al atardecer',
      'The street is quiet at sunset',
      ['street', 'quiet', 'sunset'],
      ['street', 'quiet', 'sunset'],
      'Perder la atmósfera del barrio',
      'The street should feel ready for imagined improvements',
      'La calle tranquila prepara la idea'
    ),
    ctx(
      'Hay una banca vieja cerca del árbol',
      'There is an old bench near the tree',
      ['bench', 'old', 'tree'],
      ['bench', 'old', 'tree'],
      'No dejar un objeto concreto para imaginar cambios',
      'The bench helps the story feel practical',
      'La banca vieja pide una mejora'
    ),
    ctx(
      'Dos vecinos hablan de lo que falta',
      'Two neighbors talk about what is missing',
      ['neighbors', 'talk', 'missing'],
      ['neighbors', 'talk', 'missing'],
      'Olvidar el conflicto o necesidad del lugar',
      'A missing-thing discussion prepares the hypothetical fixes',
      'La conversación abre posibilidades'
    ),
    ctx(
      'Un niño escucha con las manos en los bolsillos',
      'A child listens with hands in his pockets',
      ['child', 'listens', 'pockets'],
      ['child', 'listens', 'pockets'],
      'Cerrar sin una mirada de futuro',
      'The child can help carry the imagined changes',
      'El barrio tiene oyentes atentos'
    ),
    tgt(
      'Si la calle fuera más brillante, los niños jugarían afuera',
      'If the street were brighter, the children would play outside',
      ['If', 'the', 'street', 'were', 'brighter'],
      ['If', 'street', 'were', 'brighter', 'play'],
      'Usar If the street is brighter, the children would play outside',
      'Second Conditional describes an unreal present improvement',
      'Más luz cambiaría la vida del barrio'
    ),
    tgt(
      'Si los vecinos compartieran herramientas, terminarían antes',
      'If the neighbors shared tools, they would finish earlier',
      ['If', 'the', 'neighbors', 'shared', 'tools'],
      ['If', 'neighbors', 'shared', 'tools', 'finish'],
      'Usar If the neighbors share tools, they would finish earlier',
      'Past simple in the if-clause shows the imagined situation',
      'Compartir herramientas acelera todo'
    ),
    tgt(
      'Si el jardín fuera más grande, plantarían más árboles',
      'If the garden were bigger, they would plant more trees',
      ['If', 'the', 'garden', 'were', 'bigger'],
      ['If', 'garden', 'were', 'bigger', 'plant'],
      'Usar If the garden is bigger, they would plant more trees',
      'Were keeps the sentence clearly hypothetical',
      'Un jardín mayor permitiría crecer'
    ),
    tgt(
      'Si tuvieran una biblioteca pequeña, leerían después de cenar',
      'If they had a small library, they would read after dinner',
      ['If', 'they', 'had', 'a', 'small', 'library'],
      ['If', 'they', 'had', 'library', 'read'],
      'Usar If they have a small library, they would read after dinner',
      'The result clause stays with would + base verb',
      'La lectura haría el barrio más calmo'
    ),
    tgt(
      'Si la banca estuviera arreglada, los abuelos descansarían allí',
      'If the bench were fixed, the grandparents would rest there',
      ['If', 'the', 'bench', 'were', 'fixed'],
      ['If', 'bench', 'were', 'fixed', 'rest'],
      'Usar If the bench is fixed, the grandparents would rest there',
      'Second Conditional is a good fit for imaginary repairs',
      'Arreglar la banca cambia el descanso'
    ),
    tgt(
      'Si alguien necesitara ayuda, el grupo respondería rápido',
      'If someone needed help, the group would answer quickly',
      ['If', 'someone', 'needed', 'help'],
      ['If', 'someone', 'needed', 'help', 'answer'],
      'Usar If someone needs help, the group would answer quickly',
      'Needed keeps the condition unreal and polite',
      'La ayuda rápida es una posibilidad imaginada'
    ),
    tgt(
      'Si el barrio tuviera más luces, se sentiría más seguro',
      'If the neighborhood had more lights, it would feel safer',
      ['If', 'the', 'neighborhood', 'had', 'more', 'lights'],
      ['If', 'neighborhood', 'had', 'lights', 'feel'],
      'Usar If the neighborhood has more lights, it would feel safer',
      'The if-clause remains in the past simple form',
      'Más luces cambian la sensación'
    ),
    tgt(
      '¿Ayudarían más si hubiera un plan común?',
      'Would they help more if there were a common plan?',
      ['Would', 'they', 'help', 'more', 'if'],
      ['Would', 'they', 'help', 'plan', 'if'],
      'Escribir Will they help more if there were a common plan?',
      'Questions still use would in the hypothetical result',
      'Un plan común haría más fácil ayudar'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
