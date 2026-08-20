import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[2];
const targetPattern = 'am / is / are + verb-ing';
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Continuous';
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
  { title: 'El taller de bicicletas: Trabajo en marcha', type: 'Descubrimiento', value: 'coordinación' },
  [
    ctx(
      'Sara y Nico están en el taller de bicicletas.',
      'Sara and Nico are in the bicycle workshop.',
      ['Sara', 'Nico', 'are'],
      ['Sara', 'Nico', 'workshop'],
      'Perder la escena inicial.',
      'Primero ubica quiénes están y dónde.',
      'La historia abre con una actividad en progreso.'
    ),
    tgt(
      'Sara está ajustando la rueda delantera.',
      'Sara is adjusting the front wheel.',
      ['Sara', 'is', 'adjusting'],
      ['is', 'adjusting', 'wheel'],
      'Usar adjust sin -ing.',
      'am / is / are + verb-ing.',
      'La frase muestra una acción que ocurre ahora.'
    ),
    tgt(
      'Nico está sosteniendo las herramientas.',
      'Nico is holding the tools.',
      ['Nico', 'is', 'holding'],
      ['is', 'holding', 'tools'],
      'Usar hold sin la forma continua.',
      'The verb needs -ing.',
      'La línea mantiene el foco en lo que pasa en este momento.'
    ),
    tgt(
      'Ellos están revisando la cadena juntos.',
      'They are checking the chain together.',
      ['They', 'are', 'checking'],
      ['are', 'checking', 'chain'],
      'Usar check sin -ing.',
      'With they, use are + verb-ing.',
      'El plural refuerza are + verb-ing.'
    ),
    ctx(
      'Afuera, un cliente espera junto a la puerta.',
      'Outside, a customer is waiting by the door.',
      ['customer', 'is', 'waiting'],
      ['customer', 'waiting', 'door'],
      'Confundir la espera con una acción terminada.',
      'La escena sigue ocurriendo ahora mismo.',
      'El contexto prepara la idea de progreso.'
    ),
    tgt(
      'Sara no está mirando el reloj.',
      'Sara is not looking at the clock.',
      ['Sara', 'is', 'not', 'looking'],
      ['looking', 'clock', 'time'],
      'Usar does not en vez de is not.',
      'For present continuous, use is not / are not.',
      'La negativa muestra la estructura completa.'
    ),
    tgt(
      '¿Están terminando la reparación pronto?',
      'Are they finishing the repair soon?',
      ['Are', 'they', 'finishing'],
      ['Are', 'finishing', 'repair'],
      'Usar do they finish en esta lección.',
      'For continuous, ask with am / is / are + subject + verb-ing.',
      'La pregunta consolida el orden del presente continuo.'
    ),
    tgt(
      'Nico está limpiando sus manos.',
      'Nico is cleaning his hands.',
      ['Nico', 'is', 'cleaning'],
      ['is', 'cleaning', 'hands'],
      'Omitir el -ing.',
      'The action is in progress now.',
      'La forma continua sigue siendo el centro.'
    ),
    ctx(
      'El taller se siente más brillante y ordenado.',
      'The workshop feels brighter and tidier.',
      ['workshop', 'feels', 'brighter'],
      ['workshop', 'brighter', 'tidier'],
      'Cerrar la escena sin transición.',
      'La historia debe moverse con naturalidad.',
      'La escena sigue estable mientras cambian las acciones.'
    ),
    tgt(
      'Sara está comprobando el asiento otra vez.',
      'Sara is checking the seat again.',
      ['Sara', 'is', 'checking'],
      ['is', 'checking', 'seat'],
      'Usar checks instead of checking.',
      'am / is / are + verb-ing.',
      'La repetición visualiza una acción en desarrollo.'
    ),
    tgt(
      'El cliente está sonriendo porque la bici ya casi está lista.',
      'The customer is smiling because the bike is almost ready.',
      ['customer', 'is', 'smiling'],
      ['is', 'smiling', 'almost'],
      'Usar smiles sin continuous.',
      'The smile is happening now.',
      'La frase mezcla acción actual con resultado cercano.'
    ),
    ctx(
      'Al final, el taller queda lleno de energía tranquila.',
      'In the end, the workshop is full of calm energy.',
      ['workshop', 'is', 'full'],
      ['workshop', 'full', 'energy'],
      'Cerrar con una frase demasiado plana.',
      'El ending should feel complete and clear.',
      'El cierre deja una imagen final del proceso.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La biblioteca del barrio: Tarde silenciosa', type: 'Uso natural', value: 'concentración' },
  [
    ctx(
      'Ana y Luis están en la biblioteca del barrio.',
      'Ana and Luis are in the neighborhood library.',
      ['Ana', 'Luis', 'are'],
      ['Ana', 'Luis', 'library'],
      'Perder el tono tranquilo de la escena.',
      'Primero identifica el lugar y a las personas.',
      'La biblioteca permite practicar la acción en curso sin ruido.'
    ),
    tgt(
      'Ana está catalogando libros nuevos.',
      'Ana is cataloging new books.',
      ['Ana', 'is', 'cataloging'],
      ['is', 'cataloging', 'books'],
      'Usar catalog sin -ing.',
      'Use am / is / are + verb-ing.',
      'La frase fija el progreso de una tarea real.'
    ),
    tgt(
      'Luis está ayudando a un niño a encontrar un cuento.',
      'Luis is helping a child find a story.',
      ['Luis', 'is', 'helping'],
      ['is', 'helping', 'story'],
      'Cambiar helping por helps.',
      'The action is happening right now.',
      'La línea mantiene la atención en una ayuda en curso.'
    ),
    tgt(
      'La impresora está haciendo un sonido suave.',
      'The printer is making a soft sound.',
      ['printer', 'is', 'making'],
      ['is', 'making', 'sound'],
      'Usar make sin la forma continua.',
      'With it, use verb-ing.',
      'El sujeto inanimado también practica el patrón.'
    ),
    ctx(
      'Los estudiantes están leyendo en las mesas.',
      'The students are reading at the tables.',
      ['students', 'are', 'reading'],
      ['students', 'reading', 'tables'],
      'Perder el ambiente de estudio.',
      'La escena sigue en progreso.',
      'El contexto conecta la rutina con el presente continuo.'
    ),
    tgt(
      'Ana no está hablando en voz alta.',
      'Ana is not talking loudly.',
      ['Ana', 'is', 'not', 'talking'],
      ['talking', 'loudly', 'Ana'],
      'Usar does not en vez de is not.',
      'For present continuous, negative uses is not / are not.',
      'La negativa mantiene el foco en la acción actual.'
    ),
    tgt(
      '¿Luis está revisando las devoluciones ahora?',
      'Is Luis checking the returns now?',
      ['Is', 'Luis', 'checking'],
      ['checking', 'returns', 'now'],
      'Usar does Luis check en esta lección.',
      'Ask with am / is / are + subject + verb-ing.',
      'La pregunta mantiene el sentido de acción en curso.'
    ),
    tgt(
      'La bibliotecaria está colocando separadores en la estantería.',
      'The librarian is placing bookmarks on the shelf.',
      ['librarian', 'is', 'placing'],
      ['is', 'placing', 'bookmarks'],
      'Omitir el verbo continuo.',
      'The action is still unfolding.',
      'La tarea concreta refuerza el uso natural del tiempo.'
    ),
    ctx(
      'La sala se siente tranquila y enfocada.',
      'The room feels calm and focused.',
      ['room', 'feels', 'calm'],
      ['room', 'calm', 'focused'],
      'Cerrar la escena sin respiración.',
      'The ending should sound measured and calm.',
      'La escena continúa sin perder la atmósfera.'
    ),
    tgt(
      'Ana está respondiendo una pregunta a la vez.',
      'Ana is answering one question at a time.',
      ['Ana', 'is', 'answering'],
      ['is', 'answering', 'question'],
      'Usar answers instead of answering.',
      'Keep the action in progress.',
      'La repetición ordenada refuerza el continuo.'
    ),
    tgt(
      'Los niños están esperando cerca del mostrador.',
      'The children are waiting near the counter.',
      ['children', 'are', 'waiting'],
      ['are', 'waiting', 'counter'],
      'Usar waits con children.',
      'With plural subjects, use are + verb-ing.',
      'El plural equilibra la lección entre sujetos.'
    ),
    ctx(
      'Al final, la biblioteca funciona sin ruido y sin prisa.',
      'In the end, the library is working smoothly and quietly.',
      ['library', 'is', 'working'],
      ['library', 'working', 'quietly'],
      'Cerrar con una idea que suene rígida.',
      'The ending should feel natural and controlled.',
      'El cierre deja la sensación de orden continuo.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La cocina familiar: Cena en marcha', type: 'Integración', value: 'colaboración' },
  [
    ctx(
      'La familia está en la cocina después del colegio.',
      'The family is in the kitchen after school.',
      ['family', 'is', 'kitchen'],
      ['family', 'is', 'kitchen'],
      'Perder la escena doméstica.',
      'Primero ubica el lugar y el momento.',
      'La cocina permite ver varias acciones ocurriendo al mismo tiempo.'
    ),
    tgt(
      'Mamá está cortando verduras.',
      'Mom is cutting vegetables.',
      ['Mom', 'is', 'cutting'],
      ['is', 'cutting', 'vegetables'],
      'Usar cuts sin continuous.',
      'am / is / are + verb-ing.',
      'La acción muestra trabajo en progreso.'
    ),
    tgt(
      'Papá está mezclando la sopa.',
      'Dad is stirring the soup.',
      ['Dad', 'is', 'stirring'],
      ['is', 'stirring', 'soup'],
      'Usar mix sin -ing.',
      'The action is happening now.',
      'La cocina avanza con otra acción simultánea.'
    ),
    tgt(
      'El horno está calentando el pan.',
      'The oven is warming the bread.',
      ['oven', 'is', 'warming'],
      ['is', 'warming', 'bread'],
      'Olvidar la forma continua.',
      'Use the continuous form for what is happening now.',
      'El objeto inanimado también participa en la escena.'
    ),
    ctx(
      'Todos se están moviendo alrededor de la mesa.',
      'Everyone is moving around the table.',
      ['Everyone', 'is', 'moving'],
      ['Everyone', 'moving', 'table'],
      'Traducir la escena como si estuviera cerrada.',
      'The moment is still unfolding.',
      'El contexto mantiene la energía de la preparación.'
    ),
    tgt(
      'Los niños no están jugando con los platos.',
      'The children are not playing with the plates.',
      ['children', 'are', 'not', 'playing'],
      ['playing', 'plates', 'children'],
      'Usar do not en vez de are not.',
      'For present continuous, negatives use is not / are not.',
      'La negativa contrasta con las acciones activas.'
    ),
    tgt(
      '¿La salsa está hirviendo ahora?',
      'Is the sauce boiling now?',
      ['Is', 'sauce', 'boiling'],
      ['boiling', 'sauce', 'now'],
      'Usar does the sauce boil.',
      'Ask with am / is / are + subject + verb-ing.',
      'La pregunta destaca el estado actual de la comida.'
    ),
    tgt(
      'La abuela está probando el arroz.',
      'Grandma is tasting the rice.',
      ['Grandma', 'is', 'tasting'],
      ['is', 'tasting', 'rice'],
      'Usar tastes instead of tasting.',
      'The action is in progress now.',
      'La abuela suma una acción suave y clara.'
    ),
    ctx(
      'La cocina huele cálida y fresca.',
      'The kitchen smells warm and fresh.',
      ['kitchen', 'smells', 'fresh'],
      ['kitchen', 'warm', 'fresh'],
      'Cerrar la historia sin sensación de ambiente.',
      'The ending should feel sensory and real.',
      'La descripción mantiene la escena viva.'
    ),
    tgt(
      'La familia está poniendo los vasos.',
      'The family is setting the glasses.',
      ['family', 'is', 'setting'],
      ['is', 'setting', 'glasses'],
      'Usar sets en lugar de setting.',
      'Keep the action in progress.',
      'La preparación del espacio sigue en marcha.'
    ),
    tgt(
      'El temporizador está sonando ahora.',
      'The timer is ringing now.',
      ['timer', 'is', 'ringing'],
      ['is', 'ringing', 'now'],
      'Usar rings sin continuous.',
      'The event is happening right now.',
      'El temporizador marca el final de la preparación.'
    ),
    ctx(
      'Al final, la cena está lista para servir.',
      'In the end, dinner is ready to serve.',
      ['dinner', 'is', 'ready'],
      ['dinner', 'ready', 'serve'],
      'Cerrar con una frase poco natural.',
      'The ending should sound complete and practical.',
      'El cierre deja la mesa preparada para el siguiente paso.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 9.');
