import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[2];
const targetPattern = 'was / were + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['did', 'do', 'does', 'will', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Past Continuous';
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
  { title: 'La estación del tren: Una espera larga', type: 'Descubrimiento', value: 'paciencia' },
  [
    ctx(
      'Ana y Mateo estaban en la estación cuando empezó la lluvia.',
      'Ana and Mateo were at the station when the rain started.',
      ['Ana', 'and', 'Mateo', 'were'],
      ['station', 'rain', 'started'],
      'Perder la idea de una acción en progreso en el pasado.',
      'Primero ubica a las personas y el momento.',
      'La historia abre con una escena que ya estaba en marcha.'
    ),
    tgt(
      'Ana estaba revisando el horario.',
      'Ana was checking the schedule.',
      ['Ana', 'was', 'checking'],
      ['was', 'checking', 'schedule'],
      'Usar checked en vez de was checking.',
      'Past Continuous uses was / were + verb-ing.',
      'La acción estaba ocurriendo en ese momento.'
    ),
    tgt(
      'Mateo estaba sosteniendo los paraguas.',
      'Mateo was holding the umbrellas.',
      ['Mateo', 'was', 'holding'],
      ['was', 'holding', 'umbrellas'],
      'Usar held sin la forma continua.',
      'The action was in progress, so use was + verb-ing.',
      'La línea mantiene la sensación de espera.'
    ),
    tgt(
      'Los viajeros estaban mirando el tablero.',
      'The travelers were looking at the board.',
      ['travelers', 'were', 'looking'],
      ['were', 'looking', 'board'],
      'Usar looked como si ya hubiera terminado.',
      'Were + verb-ing shows an ongoing scene.',
      'La multitud estaba pendiente del anuncio.'
    ),
    ctx(
      'Mientras tanto, un anuncio sonaba por los altavoces.',
      'Meanwhile, an announcement was playing over the speakers.',
      ['announcement', 'was', 'playing'],
      ['announcement', 'playing', 'speakers'],
      'Cerrar la escena sin movimiento.',
      'The background should still feel active.',
      'El contexto sigue mostrando actividad en el pasado.'
    ),
    tgt(
      'Ana no estaba durmiendo.',
      'Ana was not sleeping.',
      ['Ana', 'was', 'not', 'sleeping'],
      ['was', 'not', 'sleeping'],
      'Usar did not sleep en esta lección.',
      'For past continuous, negatives use was not / were not + verb-ing.',
      'La negativa deja claro que la acción seguía en curso.'
    ),
    tgt(
      '¿Estaba llegando el tren cuando salieron?',
      'Was the train arriving when they left?',
      ['Was', 'train', 'arriving'],
      ['Was', 'arriving', 'left'],
      'Usar did the train arrive cuando se practica past continuous.',
      'The question needs was / were + subject + verb-ing.',
      'La pregunta contrasta un momento en progreso con otro terminado.'
    ),
    tgt(
      'Ellos estaban leyendo para matar el tiempo.',
      'They were reading to pass the time.',
      ['They', 'were', 'reading'],
      ['were', 'reading', 'time'],
      'Usar read sin were.',
      'The action was still happening.',
      'La lectura estaba ocurriendo durante la espera.'
    ),
    ctx(
      'La lluvia seguía cayendo y la estación estaba tranquila.',
      'The rain kept falling and the station was quiet.',
      ['rain', 'kept', 'falling'],
      ['station', 'was', 'quiet'],
      'Cerrar sin una sensación atmosférica.',
      'Keep the scene calm and continuous.',
      'El contexto conserva la atmósfera del momento.'
    ),
    tgt(
      'No estaban hablando por teléfono.',
      'They were not talking on the phone.',
      ['They', 'were', 'not', 'talking'],
      ['were', 'not', 'talking'],
      'Usar did not talk instead of were not talking.',
      'The negative continuous form keeps the action in progress.',
      'La negativa muestra que la acción seguía desarrollándose.'
    ),
    tgt(
      '¿Quién estaba esperando junto a la puerta?',
      'Who was waiting by the door?',
      ['Who', 'was', 'waiting'],
      ['Who', 'waiting', 'door'],
      'Usar who waited by the door.',
      'Past Continuous asks for an action in progress at a past moment.',
      'La pregunta Wh- encaja con una escena sostenida.'
    ),
    ctx(
      'Al final, todos seguían en movimiento hasta que llegó el tren.',
      'In the end, everyone was still moving until the train arrived.',
      ['everyone', 'was', 'still', 'moving'],
      ['everyone', 'moving', 'train'],
      'Cerrar la historia sin una transición clara.',
      'The ending should show the scene still unfolding.',
      'El cierre deja el recuerdo de la espera.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tarde del mural: Pintura en marcha', type: 'Uso natural', value: 'creatividad' },
  [
    ctx(
      'El grupo estaba frente a la pared del colegio.',
      'The group was in front of the school wall.',
      ['group', 'was', 'front'],
      ['group', 'wall', 'school'],
      'Perder el lugar donde ocurre la escena.',
      'Primero identifica el espacio de trabajo.',
      'La historia abre con una tarea visual en progreso.'
    ),
    tgt(
      'Clara estaba dibujando las líneas principales.',
      'Clara was drawing the main lines.',
      ['Clara', 'was', 'drawing'],
      ['was', 'drawing', 'lines'],
      'Usar drew para una acción que estaba en progreso.',
      'Use was + verb-ing for the ongoing action.',
      'La línea muestra el inicio del mural.'
    ),
    tgt(
      'Tomás estaba mezclando los colores.',
      'Tomas was mixing the colors.',
      ['Tomas', 'was', 'mixing'],
      ['was', 'mixing', 'colors'],
      'Usar mixed en vez de was mixing.',
      'The action was still happening.',
      'La mezcla de colores estaba en marcha.'
    ),
    tgt(
      'Los demás estaban limpiando los pinceles.',
      'The others were cleaning the brushes.',
      ['others', 'were', 'cleaning'],
      ['were', 'cleaning', 'brushes'],
      'Usar cleaned sin marcar continuidad.',
      'Were + verb-ing shows process, not completion.',
      'El grupo mantiene varias acciones al mismo tiempo.'
    ),
    ctx(
      'Un profesor pasaba y observaba en silencio.',
      'A teacher was walking by and watching quietly.',
      ['teacher', 'was', 'walking'],
      ['teacher', 'watching', 'quietly'],
      'Cerrar la escena sin un observador.',
      'The background action helps the mural feel alive.',
      'El contexto añade otra capa de movimiento.'
    ),
    tgt(
      'Clara no estaba pintando sola.',
      'Clara was not painting alone.',
      ['Clara', 'was', 'not', 'painting'],
      ['was', 'not', 'painting'],
      'Usar did not paint instead of was not painting.',
      'Negative continuous keeps the action in progress.',
      'La negativa aclara cómo estaba trabajando.'
    ),
    tgt(
      '¿Estaban terminando el mural esa tarde?',
      'Were they finishing the mural that afternoon?',
      ['Were', 'they', 'finishing'],
      ['Were', 'finishing', 'afternoon'],
      'Usar did they finish that afternoon.',
      'Ask with was / were + subject + verb-ing.',
      'La pregunta revisa una tarea en desarrollo.'
    ),
    tgt(
      'Tomás estaba subiendo por la escalera.',
      'Tomas was climbing the ladder.',
      ['Tomas', 'was', 'climbing'],
      ['was', 'climbing', 'ladder'],
      'Usar climbed para una acción que seguía en curso.',
      'The process was still underway.',
      'La altura hace visible la continuidad.'
    ),
    ctx(
      'La pared se veía más viva con cada minuto.',
      'The wall looked more alive with every minute.',
      ['wall', 'looked', 'alive'],
      ['wall', 'more', 'minute'],
      'Cerrar sin evidencia del progreso.',
      'The scene should show visible development.',
      'El contexto deja notar el avance del mural.'
    ),
    tgt(
      'No estaban usando colores oscuros.',
      'They were not using dark colors.',
      ['They', 'were', 'not', 'using'],
      ['were', 'not', 'using'],
      'Usar did not use en esta lección.',
      'The action was ongoing, so keep verb-ing.',
      'La negativa contrasta con la pintura activa.'
    ),
    tgt(
      '¿Estaba secándose la pintura en la parte superior?',
      'Was the paint drying at the top?',
      ['Was', 'paint', 'drying'],
      ['Was', 'drying', 'top'],
      'Usar did the paint dry.',
      'The question asks about an ongoing state.',
      'La pregunta observa el proceso en tiempo real.'
    ),
    ctx(
      'Al final, el mural quedó lleno de energía y movimiento.',
      'In the end, the mural ended up full of energy and movement.',
      ['mural', 'ended', 'energy'],
      ['mural', 'energy', 'movement'],
      'Cerrar la historia sin sensación visual.',
      'The ending should keep the visual result clear.',
      'El cierre resalta el resultado del proceso.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La cocina del festival: Preparativos largos', type: 'Integración', value: 'colaboración' },
  [
    ctx(
      'La familia estaba preparando la comida antes de la fiesta.',
      'The family was preparing the food before the party.',
      ['family', 'was', 'preparing'],
      ['family', 'food', 'party'],
      'Perder el ambiente de preparación.',
      'Think about actions that were still happening.',
      'La historia abre con una cena que aún no termina.'
    ),
    tgt(
      'Maya estaba cortando las verduras.',
      'Maya was chopping the vegetables.',
      ['Maya', 'was', 'chopping'],
      ['was', 'chopping', 'vegetables'],
      'Usar chopped instead of was chopping.',
      'Use was + verb-ing for the action in progress.',
      'La cocina sigue activa.'
    ),
    tgt(
      'Su hermano estaba lavando los platos.',
      'Her brother was washing the dishes.',
      ['brother', 'was', 'washing'],
      ['was', 'washing', 'dishes'],
      'Usar washed para una acción en progreso.',
      'The washing was not finished yet.',
      'La ayuda de la familia se ve en movimiento.'
    ),
    tgt(
      'Ellos estaban poniendo la mesa.',
      'They were setting the table.',
      ['They', 'were', 'setting'],
      ['were', 'setting', 'table'],
      'Usar set sin marcar continuidad.',
      'The table was still being prepared.',
      'La mesa todavía estaba en proceso.'
    ),
    ctx(
      'Mientras cocinaban, la música seguía sonando suave.',
      'While they were cooking, the music kept playing softly.',
      ['While', 'were', 'cooking'],
      ['music', 'kept', 'playing'],
      'Cerrar sin mostrar simultaneidad.',
      'Keep the scene of two actions happening at once.',
      'El contexto deja ver varias cosas a la vez.'
    ),
    tgt(
      'Maya no estaba corriendo por la cocina.',
      'Maya was not running around the kitchen.',
      ['Maya', 'was', 'not', 'running'],
      ['was', 'not', 'running'],
      'Usar did not run around the kitchen.',
      'Negative continuous keeps the ongoing sense.',
      'La negativa aclara cómo se movía.'
    ),
    tgt(
      '¿Estaban sirviendo el jugo cuando llegaste?',
      'Were they serving the juice when you arrived?',
      ['Were', 'they', 'serving'],
      ['Were', 'serving', 'juice'],
      'Usar did they serve when you arrived.',
      'The question needs the continuous frame.',
      'La pregunta combina dos momentos pasados.'
    ),
    tgt(
      'La abuela estaba probando la sopa.',
      'Grandma was tasting the soup.',
      ['Grandma', 'was', 'tasting'],
      ['was', 'tasting', 'soup'],
      'Usar tasted instead of was tasting.',
      'The tasting was happening over time.',
      'La prueba de sabor seguía en curso.'
    ),
    ctx(
      'Las luces estaban encendidas y todos sonreían.',
      'The lights were on and everyone was smiling.',
      ['lights', 'were', 'on'],
      ['lights', 'everyone', 'smiling'],
      'Cerrar sin ambiente familiar.',
      'The scene should feel warm and active.',
      'El contexto conserva la sensación del festival.'
    ),
    tgt(
      'No estaban hablando de otra cosa.',
      'They were not talking about anything else.',
      ['They', 'were', 'not', 'talking'],
      ['were', 'not', 'talking'],
      'Usar did not talk about anything else.',
      'Keep the progressive form after were not.',
      'La negativa muestra concentración.'
    ),
    tgt(
      '¿Estaba sonando el temporizador en ese momento?',
      'Was the timer ringing at that moment?',
      ['Was', 'timer', 'ringing'],
      ['Was', 'ringing', 'moment'],
      'Usar did the timer ring at that moment.',
      'At that moment asks for a past ongoing action.',
      'La pregunta centra el instante exacto.'
    ),
    ctx(
      'Al final, la cena estaba lista y el ambiente seguía cálido.',
      'In the end, dinner was ready and the atmosphere was still warm.',
      ['dinner', 'was', 'ready'],
      ['atmosphere', 'still', 'warm'],
      'Cerrar sin sensación de proceso terminado.',
      'The ending should feel complete but still alive.',
      'El cierre deja la escena lista para la fiesta.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 15.');
