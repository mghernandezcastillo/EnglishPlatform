import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[5];
const targetPattern = 'have / has been + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['did', 'will', 'was', 'were', 'do'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Perfect Continuous';
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
  { title: 'El huerto del barrio: Trabajo constante', type: 'Descubrimiento', value: 'paciencia' },
  [
    ctx(
      'El huerto del barrio sigue lleno de movimiento.',
      'The neighborhood garden is still full of movement.',
      ['garden', 'still', 'movement'],
      ['garden', 'still', 'movement'],
      'Perder la idea de esfuerzo continuo.',
      'Think about something that has been happening over time.',
      'La escena abre con trabajo que sigue en marcha.'
    ),
    tgt(
      'Nora ha estado regando las plantas desde temprano.',
      'Nora has been watering the plants since early morning.',
      ['Nora', 'has', 'been', 'watering'],
      ['has', 'been', 'watering'],
      'Usar has watered en vez de has been watering.',
      'Duration + ongoing action = present perfect continuous.',
      'La duración visible se convierte en el foco.'
    ),
    tgt(
      'Ellos han estado moviendo tierra por una hora.',
      'They have been moving soil for an hour.',
      ['They', 'have', 'been', 'moving'],
      ['have', 'been', 'moving'],
      'Olvidar been en la estructura.',
      'For an hour points to an action that has lasted until now.',
      'La tarea continúa y el tiempo importa.'
    ),
    tgt(
      'La lluvia ha estado cayendo suavemente.',
      'The rain has been falling softly.',
      ['rain', 'has', 'been', 'falling'],
      ['has', 'been', 'falling'],
      'Usar has fallen si se quiere destacar duración.',
      'Here the ongoing process matters more than the result.',
      'La acción sigue activa en el presente.'
    ),
    ctx(
      'Las manos siguen llenas de barro y las botas también.',
      'Hands are still covered in mud and the boots are too.',
      ['hands', 'still', 'mud'],
      ['hands', 'boots', 'mud'],
      'Cerrar sin reflejar el cansancio del trabajo.',
      'The scene should show the process still visible.',
      'El contexto deja rastros del trabajo continuo.'
    ),
    tgt(
      'Nora no ha estado descansando mucho.',
      'Nora has not been resting much.',
      ['Nora', 'has', 'not', 'been', 'resting'],
      ['has', 'not', 'been', 'resting'],
      'Usar did not rest much.',
      'Negative present perfect continuous still uses has not / have not been + verb-ing.',
      'La negativa sigue mostrando duración.'
    ),
    tgt(
      '¿Han estado usando la manguera toda la mañana?',
      'Have they been using the hose all morning?',
      ['Have', 'they', 'been', 'using'],
      ['Have', 'been', 'using'],
      'Usar did they use all morning.',
      'All morning asks for an action that has continued until now.',
      'La pregunta busca duración reciente.'
    ),
    tgt(
      'El jardín ha estado creciendo con paciencia.',
      'The garden has been growing patiently.',
      ['garden', 'has', 'been', 'growing'],
      ['has', 'been', 'growing'],
      'Cambiar growing por grows.',
      'The process is still relevant now.',
      'El crecimiento natural encaja con el tiempo perfecto continuo.'
    ),
    ctx(
      'Todos miran los cambios y hablan en voz baja.',
      'Everyone looks at the changes and speaks quietly.',
      ['everyone', 'looks', 'changes'],
      ['everyone', 'changes', 'quietly'],
      'Cerrar la historia sin sensación de avance.',
      'The story should keep the progress visible.',
      'El contexto muestra el resultado del trabajo constante.'
    ),
    tgt(
      'Ellos han estado preparando la siguiente fila de semillas.',
      'They have been preparing the next row of seeds.',
      ['They', 'have', 'been', 'preparing'],
      ['have', 'been', 'preparing'],
      'Usar have prepared sin marcar duración.',
      'The action has been continuing up to now.',
      'La preparación sigue en curso.'
    ),
    tgt(
      'Nora ha estado escribiendo las tareas en una lista.',
      'Nora has been writing the tasks on a list.',
      ['Nora', 'has', 'been', 'writing'],
      ['has', 'been', 'writing'],
      'Usar wrote instead of has been writing.',
      'The focus is on the ongoing process.',
      'La lista captura el avance continuo.'
    ),
    ctx(
      'Al final, el grupo ve un progreso claro y sonríe.',
      'In the end, the group sees clear progress and smiles.',
      ['group', 'sees', 'progress'],
      ['group', 'progress', 'smiles'],
      'Cerrar la escena sin mostrar resultado visible.',
      'The ending should connect effort with visible progress.',
      'El cierre refleja el efecto acumulado del trabajo.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El proyecto escolar: Esfuerzo en marcha', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'El salón de clases sigue lleno de carteles y recortes.',
      'The classroom is still full of posters and cutouts.',
      ['classroom', 'still', 'posters'],
      ['classroom', 'posters', 'cutouts'],
      'Perder el ambiente del proyecto.',
      'Think about visible work that started earlier and continues now.',
      'La escena muestra un trabajo escolar aún activo.'
    ),
    tgt(
      'El equipo ha estado construyendo el modelo desde el lunes.',
      'The team has been building the model since Monday.',
      ['team', 'has', 'been', 'building'],
      ['has', 'been', 'building'],
      'Usar has built para una duración en progreso.',
      'Since Monday points to a continuing action.',
      'La duración hace visible el esfuerzo.'
    ),
    tgt(
      'Ana ha estado pintando las señales toda la tarde.',
      'Ana has been painting the signs all afternoon.',
      ['Ana', 'has', 'been', 'painting'],
      ['has', 'been', 'painting'],
      'Usar painted sin been.',
      'All afternoon signals ongoing activity.',
      'La pintura sigue en marcha.'
    ),
    tgt(
      'Han estado buscando fotos para la presentación.',
      'They have been searching for pictures for the presentation.',
      ['They', 'have', 'been', 'searching'],
      ['have', 'been', 'searching'],
      'Usar have searched sin la idea de duración.',
      'The search is still part of the current effort.',
      'La búsqueda permanece abierta.'
    ),
    ctx(
      'La mesa tiene tijeras, pegamento y papel por todas partes.',
      'The table has scissors, glue, and paper everywhere.',
      ['table', 'scissors', 'glue'],
      ['table', 'scissors', 'paper'],
      'Cerrar sin mostrar evidencia del proceso.',
      'The room should still look worked-on.',
      'El contexto sostiene la imagen de trabajo real.'
    ),
    tgt(
      'El grupo no ha estado perdiendo tiempo.',
      'The group has not been wasting time.',
      ['group', 'has', 'not', 'been', 'wasting'],
      ['has', 'not', 'been', 'wasting'],
      'Usar did not waste time.',
      'Negative duration uses has not / have not been + verb-ing.',
      'La negativa refuerza la responsabilidad.'
    ),
    tgt(
      '¿Han estado practicando la exposición desde ayer?',
      'Have they been practicing the presentation since yesterday?',
      ['Have', 'they', 'been', 'practicing'],
      ['Have', 'been', 'practicing'],
      'Usar did they practice since yesterday.',
      'Since yesterday makes the duration clear.',
      'La pregunta busca continuidad en el tiempo.'
    ),
    tgt(
      'La maestra ha estado observando el avance con atención.',
      'The teacher has been watching the progress carefully.',
      ['teacher', 'has', 'been', 'watching'],
      ['has', 'been', 'watching'],
      'Usar has watched for an ongoing observation.',
      'The observation has continued until now.',
      'La maestra sigue el proceso de cerca.'
    ),
    ctx(
      'La clase se mueve entre dudas y pequeñas soluciones.',
      'The class moves between doubts and small solutions.',
      ['class', 'moves', 'solutions'],
      ['class', 'doubts', 'solutions'],
      'Cerrar sin reflejar el avance sostenido.',
      'Keep the project dynamic and ongoing.',
      'El contexto mezcla trabajo y aprendizaje.'
    ),
    tgt(
      'Ellos han estado corrigiendo los detalles uno por uno.',
      'They have been correcting the details one by one.',
      ['They', 'have', 'been', 'correcting'],
      ['have', 'been', 'correcting'],
      'Usar have corrected sin la duración.',
      'One by one highlights the ongoing process.',
      'La corrección sigue paso a paso.'
    ),
    tgt(
      'Ana ha estado repitiendo las frases en voz baja.',
      'Ana has been repeating the lines softly.',
      ['Ana', 'has', 'been', 'repeating'],
      ['has', 'been', 'repeating'],
      'Usar repeated sin been.',
      'Repeating shows continued practice.',
      'La repetición revela preparación constante.'
    ),
    ctx(
      'Al final, el proyecto muestra esfuerzo continuo y claro.',
      'In the end, the project shows clear ongoing effort.',
      ['project', 'shows', 'effort'],
      ['project', 'effort', 'ongoing'],
      'Cerrar sin señalar la continuidad.',
      'The ending should show the result of sustained effort.',
      'El cierre resume el trabajo en marcha.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La pequeña panadería: Mañana larga', type: 'Integración', value: 'trabajo diligente' },
  [
    ctx(
      'La panadería abre con olor a pan recién hecho.',
      'The bakery opens with the smell of fresh bread.',
      ['bakery', 'opens', 'bread'],
      ['bakery', 'opens', 'bread'],
      'Perder el ambiente de trabajo continuo.',
      'Focus on a process that has lasted through the morning.',
      'La escena prepara una mañana larga.'
    ),
    tgt(
      'Luis ha estado amasando la masa desde el amanecer.',
      'Luis has been kneading the dough since dawn.',
      ['Luis', 'has', 'been', 'kneading'],
      ['has', 'been', 'kneading'],
      'Usar has kneaded en vez de has been kneading.',
      'Since dawn points to a continuing action.',
      'La masa lleva tiempo en proceso.'
    ),
    tgt(
      'El horno ha estado trabajando sin pausa.',
      'The oven has been working without a break.',
      ['oven', 'has', 'been', 'working'],
      ['has', 'been', 'working'],
      'Usar works instead of has been working.',
      'Without a break keeps the action ongoing.',
      'El horno sostiene la duración del trabajo.'
    ),
    tgt(
      'Han estado sacando bandejas una tras otra.',
      'They have been taking out trays one after another.',
      ['They', 'have', 'been', 'taking'],
      ['have', 'been', 'taking'],
      'Usar took out sin la continuidad.',
      'One after another shows a repeated ongoing process.',
      'Las bandejas salen una a una.'
    ),
    ctx(
      'Las manos se mueven rápido y la cocina sigue viva.',
      'Hands move quickly and the kitchen stays busy.',
      ['hands', 'move', 'busy'],
      ['hands', 'move', 'busy'],
      'Cerrar sin energía de trabajo.',
      'The kitchen should feel alive and active.',
      'El contexto conserva el ritmo de la mañana.'
    ),
    tgt(
      'Luis no ha estado descansando mucho hoy.',
      'Luis has not been resting much today.',
      ['Luis', 'has', 'not', 'been', 'resting'],
      ['has', 'not', 'been', 'resting'],
      'Usar did not rest much today.',
      'Today supports the ongoing feeling.',
      'La negativa muestra desgaste y continuidad.'
    ),
    tgt(
      '¿Han estado preparando el escaparate toda la mañana?',
      'Have they been preparing the display all morning?',
      ['Have', 'they', 'been', 'preparing'],
      ['Have', 'been', 'preparing'],
      'Usar did they prepare all morning.',
      'All morning is a classic continuous-duration clue.',
      'La pregunta busca una actividad sostenida.'
    ),
    tgt(
      'La panadera ha estado probando una receta nueva.',
      'The baker has been testing a new recipe.',
      ['baker', 'has', 'been', 'testing'],
      ['has', 'been', 'testing'],
      'Usar has tested without the ongoing sense.',
      'The process is still relevant now.',
      'La receta nueva exige prueba continua.'
    ),
    ctx(
      'Todavía quedan migas, harina y una sonrisa cansada.',
      'There are still crumbs, flour, and a tired smile.',
      ['still', 'crumbs', 'flour'],
      ['still', 'crumbs', 'smile'],
      'Cerrar sin huella del proceso.',
      'The scene should keep the morning alive.',
      'El contexto conserva los rastros del trabajo.'
    ),
    tgt(
      'Ellos han estado limpiando la mesa con cuidado.',
      'They have been cleaning the table carefully.',
      ['They', 'have', 'been', 'cleaning'],
      ['have', 'been', 'cleaning'],
      'Usar have cleaned instead of the continuous form.',
      'The work is still unfolding.',
      'La limpieza sigue en proceso.'
    ),
    tgt(
      'La masa ha estado creciendo lentamente.',
      'The dough has been rising slowly.',
      ['dough', 'has', 'been', 'rising'],
      ['has', 'been', 'rising'],
      'Usar rose para una acción sostenida.',
      'The process is ongoing, so use the continuous form.',
      'La masa muestra el efecto del tiempo.'
    ),
    ctx(
      'Al final, la mañana deja mucho trabajo hecho y una buena imagen.',
      'In the end, the morning leaves a lot of work done and a good feeling.',
      ['morning', 'leaves', 'work'],
      ['morning', 'work', 'feeling'],
      'Cerrar sin conectar proceso y resultado.',
      'The ending should show the outcome of sustained effort.',
      'El cierre resume una mañana de trabajo constante.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 12.');
