import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[6];
const targetPattern = 'will have been + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'have', 'been', 'did', 'going'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Future Perfect Continuous';
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
  { title: 'La obra del puente: Trabajo acumulado', type: 'Descubrimiento', value: 'esfuerzo' },
  [
    ctx(
      'Para el viernes, la obra del puente seguirá muy avanzada.',
      'By Friday, the bridge project will already be much more advanced.',
      ['Friday', 'bridge', 'advanced'],
      ['Friday', 'bridge', 'advanced'],
      'Perder la idea de duración previa a una fecha futura.',
      'Think about work that has been happening for a long time.',
      'La historia abre con una obra que ya lleva tiempo.'
    ),
    tgt(
      'Para entonces, habrán estado trabajando en el puente durante dos semanas.',
      'By then, they will have been working on the bridge for two weeks.',
      ['By', 'then', 'will', 'have', 'been', 'working'],
      ['will', 'have', 'been', 'working', 'weeks'],
      'Usar will work on the bridge for two weeks.',
      'Future Perfect Continuous uses will have been + verb-ing.',
      'La duración es la parte importante.'
    ),
    tgt(
      'El equipo habrá estado pintando los rieles desde el lunes.',
      'The team will have been painting the rails since Monday.',
      ['team', 'will', 'have', 'been', 'painting'],
      ['will', 'have', 'been', 'painting', 'Monday'],
      'Usar will paint the rails since Monday.',
      'Since Monday shows a process that has continued up to the future point.',
      'La pintura ya habrá tomado tiempo.'
    ),
    tgt(
      'El ingeniero habrá estado revisando los cables toda la mañana.',
      'The engineer will have been checking the cables all morning.',
      ['engineer', 'will', 'have', 'been', 'checking'],
      ['will', 'have', 'been', 'checking', 'morning'],
      'Usar will check the cables all morning.',
      'All morning highlights duration before the future moment.',
      'La revisión seguirá acumulando horas.'
    ),
    ctx(
      'Las herramientas seguirán cubiertas de polvo de trabajo.',
      'The tools will still be covered in work dust.',
      ['tools', 'still', 'covered'],
      ['tools', 'dust', 'covered'],
      'Cerrar sin sensación de proceso largo.',
      'The scene should show the effect of hours of work.',
      'El contexto mantiene el rastro del esfuerzo.'
    ),
    tgt(
      'No habrán estado descansando mucho.',
      'They will not have been resting much.',
      ['They', 'will', 'not', 'have', 'been', 'resting'],
      ['will', 'not', 'have', 'been', 'resting'],
      'Usar will not rest much.',
      'The negative form still shows duration.',
      'La negativa conserva la idea de cansancio.'
    ),
    tgt(
      '¿Habrán estado cargando las vigas todo el día?',
      'Will the workers have been carrying the beams all day?',
      ['Will', 'workers', 'have', 'been', 'carrying'],
      ['Will', 'have', 'been', 'carrying', 'day'],
      'Usar will the workers carry the beams all day.',
      'The question asks about duration before a future moment.',
      'La carga se imagina prolongada.'
    ),
    tgt(
      'La grúa habrá estado moviendo piezas pesadas.',
      'The crane will have been moving heavy parts.',
      ['crane', 'will', 'have', 'been', 'moving'],
      ['will', 'have', 'been', 'moving', 'parts'],
      'Usar will move heavy parts.',
      'The moving is ongoing over time.',
      'La maquinaria sigue en acción.'
    ),
    ctx(
      'El sitio seguirá ruidoso y lleno de actividad.',
      'The site will still be noisy and full of activity.',
      ['site', 'still', 'noisy'],
      ['site', 'activity', 'noisy'],
      'Cerrar sin mostrar continuidad.',
      'The background should feel like long work in motion.',
      'El contexto conserva la obra viva.'
    ),
    tgt(
      'Los obreros habrán estado usando cascos por horas.',
      'The workers will have been wearing helmets for hours.',
      ['workers', 'will', 'have', 'been', 'wearing'],
      ['will', 'have', 'been', 'wearing', 'hours'],
      'Usar will wear helmets for hours.',
      'For hours points to duration before the future point.',
      'La protección sigue durante la obra.'
    ),
    tgt(
      'El jefe de obra habrá estado escribiendo notas.',
      'The foreman will have been writing notes.',
      ['foreman', 'will', 'have', 'been', 'writing'],
      ['will', 'have', 'been', 'writing', 'notes'],
      'Usar will write notes.',
      'The writing has been continuing over time.',
      'Las notas se acumulan durante la jornada.'
    ),
    ctx(
      'Al final, el puente mostrará muchas horas de esfuerzo.',
      'In the end, the bridge will show many hours of effort.',
      ['bridge', 'show', 'hours'],
      ['bridge', 'hours', 'effort'],
      'Cerrar sin resaltar duración.',
      'The ending should point to sustained effort visible later.',
      'El cierre resume el trabajo prolongado.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La biblioteca nocturna: Horas de estudio', type: 'Uso natural', value: 'concentración' },
  [
    ctx(
      'Para medianoche, la sala de estudio seguirá en silencio.',
      'By midnight, the study room will still be quiet.',
      ['midnight', 'study room', 'quiet'],
      ['midnight', 'study room', 'quiet'],
      'Perder la idea de estudio prolongado.',
      'Think about a long study period reaching a future point.',
      'La historia abre con una noche larga.'
    ),
    tgt(
      'Ana habrá estado leyendo por tres horas.',
      'Ana will have been reading for three hours.',
      ['Ana', 'will', 'have', 'been', 'reading'],
      ['will', 'have', 'been', 'reading', 'hours'],
      'Usar will read for three hours.',
      'The duration matters more than the exact ending.',
      'La lectura lleva mucho tiempo.'
    ),
    tgt(
      'Luis habrá estado tomando notas desde la cena.',
      'Luis will have been taking notes since dinner.',
      ['Luis', 'will', 'have', 'been', 'taking'],
      ['will', 'have', 'been', 'taking', 'dinner'],
      'Usar will take notes since dinner.',
      'Since dinner shows a continuous action over time.',
      'Las notas se siguen acumulando.'
    ),
    tgt(
      'El tutor habrá estado ayudando a los estudiantes toda la tarde.',
      'The tutor will have been helping the students all evening.',
      ['tutor', 'will', 'have', 'been', 'helping'],
      ['will', 'have', 'been', 'helping', 'evening'],
      'Usar will help the students all evening.',
      'The helping is a long process that reaches the future point.',
      'La ayuda se mantiene durante horas.'
    ),
    ctx(
      'La lámpara seguirá iluminando la mesa.',
      'The lamp will still be lighting the table.',
      ['lamp', 'still', 'lighting'],
      ['lamp', 'table', 'lighting'],
      'Cerrar sin sensación de largas horas.',
      'The scene should show sustained study.',
      'El contexto conserva la noche de estudio.'
    ),
    tgt(
      'No habrán estado perdiendo el tiempo.',
      'They will not have been wasting time.',
      ['They', 'will', 'not', 'have', 'been', 'wasting'],
      ['will', 'not', 'have', 'been', 'wasting'],
      'Usar will not waste time.',
      'The negative form still keeps the duration idea.',
      'La negativa protege el esfuerzo.'
    ),
    tgt(
      '¿Habrá estado discutiendo la clase el capítulo por mucho tiempo?',
      'Will the class have been discussing the chapter for long?',
      ['Will', 'class', 'have', 'been', 'discussing'],
      ['Will', 'have', 'been', 'discussing', 'long'],
      'Usar will the class discuss the chapter for long.',
      'The question asks about duration up to a future point.',
      'La discusión se imagina prolongada.'
    ),
    tgt(
      'Maya habrá estado revisando el resumen.',
      'Maya will have been reviewing the summary.',
      ['Maya', 'will', 'have', 'been', 'reviewing'],
      ['will', 'have', 'been', 'reviewing', 'summary'],
      'Usar will review the summary.',
      'The review is not finished yet at the future moment.',
      'La revisión sigue su curso.'
    ),
    ctx(
      'Las sillas seguirán vacías después de la sesión.',
      'The chairs will stay empty after the session.',
      ['chairs', 'will', 'stay', 'empty'],
      ['chairs', 'empty', 'session'],
      'Cerrar sin un resultado de estudio.',
      'The ending should show the effect of a long session.',
      'El contexto deja la sala en calma.'
    ),
    tgt(
      'El grupo habrá estado practicando las preguntas.',
      'The group will have been practicing the questions.',
      ['group', 'will', 'have', 'been', 'practicing'],
      ['will', 'have', 'been', 'practicing', 'questions'],
      'Usar will practice the questions.',
      'The practice has continued until the future point.',
      'La práctica ya habrá durado mucho.'
    ),
    tgt(
      'La maestra habrá estado corrigiendo los trabajos.',
      'The teacher will have been correcting the papers.',
      ['teacher', 'will', 'have', 'been', 'correcting'],
      ['will', 'have', 'been', 'correcting', 'papers'],
      'Usar will correct the papers.',
      'The correction is still ongoing over time.',
      'La revisión de trabajos continúa.'
    ),
    ctx(
      'Al final, la sala mostrará muchas horas de estudio.',
      'In the end, the room will show many hours of study.',
      ['room', 'show', 'hours'],
      ['room', 'hours', 'study'],
      'Cerrar sin dejar rastro de duración.',
      'The ending should show sustained effort clearly.',
      'El cierre resume las horas de estudio.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La panadería antes del mercado: Madrugada larga', type: 'Integración', value: 'trabajo diligente' },
  [
    ctx(
      'Para el amanecer, la panadería seguirá oliendo a pan.',
      'By dawn, the bakery will still smell like bread.',
      ['dawn', 'bakery', 'smell'],
      ['dawn', 'bakery', 'bread'],
      'Perder la idea de madrugada prolongada.',
      'Focus on work that has been happening all night.',
      'La historia abre con una madrugada intensa.'
    ),
    tgt(
      'Luis habrá estado amasando la masa desde las cuatro.',
      'Luis will have been kneading the dough since four.',
      ['Luis', 'will', 'have', 'been', 'kneading'],
      ['will', 'have', 'been', 'kneading', 'four'],
      'Usar will knead the dough since four.',
      'Since four points to a long ongoing process.',
      'La masa lleva muchas horas.'
    ),
    tgt(
      'La ayudante habrá estado limpiando las bandejas por una hora.',
      'The helper will have been cleaning the trays for an hour.',
      ['helper', 'will', 'have', 'been', 'cleaning'],
      ['will', 'have', 'been', 'cleaning', 'hour'],
      'Usar will clean the trays for an hour.',
      'For an hour shows duration up to the future moment.',
      'La limpieza sigue en progreso.'
    ),
    tgt(
      'El horno habrá estado calentando toda la noche.',
      'The oven will have been heating all night.',
      ['oven', 'will', 'have', 'been', 'heating'],
      ['will', 'have', 'been', 'heating', 'night'],
      'Usar will heat all night.',
      'The heating has been continuing for a long stretch.',
      'El horno sostiene la madrugada.'
    ),
    ctx(
      'El mostrador seguirá lleno de panes tibios.',
      'The counter will still be full of warm loaves.',
      ['counter', 'still', 'full'],
      ['counter', 'loaves', 'full'],
      'Cerrar sin sensación de proceso largo.',
      'The scene should show the result of hours of work.',
      'El contexto deja ver la producción.'
    ),
    tgt(
      'No habrán estado tomando descansos con frecuencia.',
      'They will not have been taking breaks often.',
      ['They', 'will', 'not', 'have', 'been', 'taking'],
      ['will', 'not', 'have', 'been', 'taking'],
      'Usar will not take breaks often.',
      'The negative form still keeps the duration idea.',
      'La negativa muestra ritmo continuo.'
    ),
    tgt(
      '¿Habrán estado trabajando antes de que abra el mercado?',
      'Will the team have been working before the market opens?',
      ['Will', 'team', 'have', 'been', 'working'],
      ['Will', 'have', 'been', 'working', 'market'],
      'Usar will the team work before the market opens.',
      'The question asks about sustained action before a future time.',
      'La labor se imagina continua.'
    ),
    tgt(
      'Maya habrá estado empacando bollos en cajas.',
      'Maya will have been packing rolls into boxes.',
      ['Maya', 'will', 'have', 'been', 'packing'],
      ['will', 'have', 'been', 'packing', 'boxes'],
      'Usar will pack rolls into boxes.',
      'The packing has been going on for some time.',
      'Los bollos seguirán moviéndose.'
    ),
    ctx(
      'La calle seguirá oscura fuera de la tienda.',
      'The street will still be dark outside the shop.',
      ['street', 'still', 'dark'],
      ['street', 'dark', 'shop'],
      'Cerrar sin una sensación de madrugada.',
      'The background should keep the long shift visible.',
      'El contexto mantiene la noche abierta.'
    ),
    tgt(
      'La panadera habrá estado revisando la temperatura.',
      'The baker will have been checking the temperature.',
      ['baker', 'will', 'have', 'been', 'checking'],
      ['will', 'have', 'been', 'checking', 'temperature'],
      'Usar will check the temperature.',
      'The checking has continued across the night.',
      'La revisión sigue de madrugada.'
    ),
    tgt(
      'El personal habrá estado preparando café para los clientes.',
      'The staff will have been preparing coffee for customers.',
      ['staff', 'will', 'have', 'been', 'preparing'],
      ['will', 'have', 'been', 'preparing', 'customers'],
      'Usar will prepare coffee for customers.',
      'The preparation continues over time.',
      'El café avanza antes de la apertura.'
    ),
    ctx(
      'Al abrir el mercado, el trabajo ya se sentirá completo.',
      'When the market opens, the work will already feel complete.',
      ['market', 'opens', 'complete'],
      ['market', 'work', 'complete'],
      'Cerrar sin mostrar duración acumulada.',
      'The ending should show that effort has been building all night.',
      'El cierre resume una madrugada larga.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 25.');
