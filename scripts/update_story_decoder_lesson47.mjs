import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[4];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'will', 'can'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Past Continuous';
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
  { title: 'La oficina de objetos perdidos: Lo que estaba pasando', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'La oficina abre con cajas y carpetas sobre la mesa',
      'The office opens with boxes and folders on the table',
      ['office', 'opens', 'boxes'],
      ['office', 'folders', 'table'],
      'Perder la escena de trabajo en proceso',
      'The opening should show an action that was already underway',
      'La oficina se ve ocupada'
    ),
    ctx(
      'Un reloj pequeño marca la tarde',
      'A small clock marks the afternoon',
      ['clock', 'marks', 'afternoon'],
      ['clock', 'marks', 'afternoon'],
      'Hacer la escena demasiado simple',
      'The clock should anchor the ongoing past action',
      'La hora ayuda a entender el momento'
    ),
    ctx(
      'La encargada ordena las etiquetas con cuidado',
      'The clerk sorts the tags carefully',
      ['clerk', 'sorts', 'tags'],
      ['clerk', 'sorts', 'tags'],
      'Ignorar a la persona que supervisa',
      'The clerk should frame the ongoing work',
      'La encargada mantiene el control'
    ),
    ctx(
      'Un niño espera con su cartera en la mano',
      'A child waits with his wallet in hand',
      ['child', 'waits', 'wallet'],
      ['child', 'waits', 'wallet'],
      'Cerrar sin una acción que siga ocurriendo',
      'The waiting child should connect to the action in progress',
      'La cartera sigue siendo importante'
    ),
    tgt(
      'La cartera estaba siendo revisada cuando llegó el dueño',
      'The wallet was being checked when the owner arrived',
      ['The', 'wallet', 'was', 'being', 'checked'],
      ['The', 'wallet', 'was', 'being', 'checked', 'owner'],
      'Usar The wallet was checked when the owner arrived',
      'Was being checked shows the checking was in progress',
      'La revisión seguía cuando llegó el dueño'
    ),
    tgt(
      'Las llaves estaban siendo contadas cuando sonó el teléfono',
      'The keys were being counted when the phone rang',
      ['The', 'keys', 'were', 'being', 'counted'],
      ['The', 'keys', 'were', 'being', 'counted', 'phone'],
      'Usar The keys were counted when the phone rang',
      'Were being counted means the counting was happening at that time',
      'Contar las llaves aún no terminaba'
    ),
    tgt(
      'Los formularios estaban siendo clasificados por tema',
      'The forms were being sorted by topic',
      ['The', 'forms', 'were', 'being', 'sorted'],
      ['The', 'forms', 'were', 'being', 'sorted', 'topic'],
      'Usar The forms were sorted by topic',
      'Being sorted keeps the action ongoing in the past',
      'La clasificación estaba en curso'
    ),
    tgt(
      'El aviso estaba siendo pegado en la pared',
      'The notice was being posted on the wall',
      ['The', 'notice', 'was', 'being', 'posted'],
      ['The', 'notice', 'was', 'being', 'posted', 'wall'],
      'Usar The notice was posted on the wall',
      'Was being posted shows the poster was still going up',
      'El aviso todavía se colocaba'
    ),
    tgt(
      'Los paquetes estaban siendo movidos al cuarto trasero',
      'The packages were being moved to the back room',
      ['The', 'packages', 'were', 'being', 'moved'],
      ['The', 'packages', 'were', 'being', 'moved', 'room'],
      'Usar The packages were moved to the back room',
      'Were being moved keeps the movement in progress',
      'Mover los paquetes seguía pasando'
    ),
    tgt(
      'Las notas estaban siendo escritas en el tablero',
      'The notes were being written on the board',
      ['The', 'notes', 'were', 'being', 'written'],
      ['The', 'notes', 'were', 'being', 'written', 'board'],
      'Usar The notes were written on the board',
      'Being written marks the writing as ongoing in the past',
      'Escribir las notas todavía ocurría'
    ),
    tgt(
      'Las sillas estaban siendo preparadas para la reunión',
      'The chairs were being prepared for the meeting',
      ['The', 'chairs', 'were', 'being', 'prepared'],
      ['The', 'chairs', 'were', 'being', 'prepared', 'meeting'],
      'Usar The chairs were prepared for the meeting',
      'Prepared after being shows the preparation was still happening',
      'Preparar las sillas seguía en marcha'
    ),
    tgt(
      'Las bolsas estaban siendo etiquetadas una por una',
      'The bags were being labeled one by one',
      ['The', 'bags', 'were', 'being', 'labeled'],
      ['The', 'bags', 'were', 'being', 'labeled', 'one'],
      'Usar The bags were labeled one by one',
      'Being labeled highlights the process, not just the result',
      'Etiquetar las bolsas ocurría en ese momento'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que se estaba armando', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria estaba llena de mesas vacías',
      'The fair was full of empty tables',
      ['fair', 'full', 'tables'],
      ['fair', 'full', 'tables'],
      'Perder el ambiente de montaje',
      'The scene should highlight actions in progress in the past',
      'La feria todavía se estaba armando'
    ),
    ctx(
      'Había cintas, pegamento y carteles por todas partes',
      'There were ribbons, glue, and signs everywhere',
      ['ribbons', 'glue', 'signs'],
      ['ribbons', 'glue', 'signs'],
      'Hacer la escena demasiado limpia',
      'The materials should suggest active setup work',
      'Los materiales aún se movían'
    ),
    ctx(
      'Los estudiantes corrían de un lado a otro',
      'The students ran back and forth',
      ['students', 'ran', 'back'],
      ['students', 'ran', 'forth'],
      'Ignorar el movimiento del montaje',
      'The running students make the passive continuous easy to picture',
      'Los estudiantes siguen ocupados'
    ),
    ctx(
      'La profesora señalaba el escenario con una lista',
      'The teacher pointed at the stage with a list',
      ['teacher', 'pointed', 'stage'],
      ['teacher', 'pointed', 'list'],
      'Cerrar sin una supervisión visible',
      'The teacher should guide the actions in progress',
      'La profesora dirige el trabajo'
    ),
    tgt(
      'Los modelos estaban siendo pintados por el grupo',
      'The models were being painted by the group',
      ['The', 'models', 'were', 'being', 'painted'],
      ['The', 'models', 'were', 'being', 'painted', 'group'],
      'Usar The models were painted by the group',
      'Being painted shows the painting was in progress',
      'Pintar los modelos seguía pasando'
    ),
    tgt(
      'Los cables estaban siendo revisados con cuidado',
      'The wires were being checked carefully',
      ['The', 'wires', 'were', 'being', 'checked'],
      ['The', 'wires', 'were', 'being', 'checked', 'carefully'],
      'Usar The wires were checked carefully',
      'Were being checked keeps the inspection in progress',
      'La revisión seguía en el pasado'
    ),
    tgt(
      'Los carteles estaban siendo escritos en tarjetas',
      'The signs were being written on cards',
      ['The', 'signs', 'were', 'being', 'written'],
      ['The', 'signs', 'were', 'being', 'written', 'cards'],
      'Usar The signs were written on cards',
      'Being written marks an ongoing past action',
      'Escribir los carteles todavía ocurría'
    ),
    tgt(
      'Las mesas estaban siendo cubiertas con papel',
      'The tables were being covered with paper',
      ['The', 'tables', 'were', 'being', 'covered'],
      ['The', 'tables', 'were', 'being', 'covered', 'paper'],
      'Usar The tables were covered with paper',
      'Covered after being shows an action in progress in the past',
      'Cubrir las mesas seguía pasando'
    ),
    tgt(
      'Los robots estaban siendo hechos por el equipo',
      'The robots were being made by the team',
      ['The', 'robots', 'were', 'being', 'made'],
      ['The', 'robots', 'were', 'being', 'made', 'team'],
      'Usar The robots were made by the team',
      'Being made keeps the making in progress',
      'Hacer los robots todavía no terminaba'
    ),
    tgt(
      'Los resultados estaban siendo mostrados en la pizarra',
      'The results were being shown on the board',
      ['The', 'results', 'were', 'being', 'shown'],
      ['The', 'results', 'were', 'being', 'shown', 'board'],
      'Usar The results were shown on the board',
      'Being shown is the passive continuous form',
      'Mostrar los resultados seguía pasando'
    ),
    tgt(
      'Las mesas estaban siendo limpiadas antes de abrir',
      'The tables were being cleaned before opening',
      ['The', 'tables', 'were', 'being', 'cleaned'],
      ['The', 'tables', 'were', 'being', 'cleaned', 'opening'],
      'Usar The tables were cleaned before opening',
      'The cleaning is still in progress in the past',
      'Limpiar las mesas seguía en marcha'
    ),
    tgt(
      'Las preguntas estaban siendo respondidas por el equipo',
      'The questions were being answered by the team',
      ['The', 'questions', 'were', 'being', 'answered'],
      ['The', 'questions', 'were', 'being', 'answered', 'team'],
      'Usar The questions were answered by the team',
      'Being answered keeps the answering in progress',
      'Responder las preguntas seguía ocurriendo'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que se estaba arreglando', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'El barrio estaba lleno de sonido de herramientas',
      'The neighborhood was full of tool sounds',
      ['neighborhood', 'full', 'tools'],
      ['neighborhood', 'full', 'tools'],
      'Perder el ambiente de trabajo comunitario',
      'The sounds should point to something being repaired in the past',
      'El barrio ya estaba en movimiento'
    ),
    ctx(
      'Había pintura azul junto a la acera',
      'There was blue paint by the curb',
      ['paint', 'curb'],
      ['paint', 'curb'],
      'Hacer la escena demasiado vacía',
      'The paint should cue the repair work in progress',
      'La pintura muestra la tarea'
    ),
    ctx(
      'Los vecinos caminaban con brochas en la mano',
      'The neighbors walked with brushes in hand',
      ['neighbors', 'walked', 'brushes'],
      ['neighbors', 'walked', 'brushes'],
      'Ignorar la acción colaborativa',
      'The brushes make the ongoing repair easy to see',
      'Las brochas sostienen la escena'
    ),
    ctx(
      'Un niño llevaba agua para la limpieza',
      'A child carried water for cleaning',
      ['child', 'carried', 'water'],
      ['child', 'carried', 'water'],
      'Cerrar sin una acción visible',
      'Water is a good clue for ongoing cleaning work',
      'El agua acompaña la limpieza'
    ),
    tgt(
      'Los bancos estaban siendo reparados por los voluntarios',
      'The benches were being repaired by the volunteers',
      ['The', 'benches', 'were', 'being', 'repaired'],
      ['The', 'benches', 'were', 'being', 'repaired', 'volunteers'],
      'Usar The benches were repaired by the volunteers',
      'Being repaired shows the work was happening then',
      'Reparar los bancos seguía pasando'
    ),
    tgt(
      'Las paredes estaban siendo pintadas esa mañana',
      'The walls were being painted that morning',
      ['The', 'walls', 'were', 'being', 'painted'],
      ['The', 'walls', 'were', 'being', 'painted', 'morning'],
      'Usar The walls were painted that morning',
      'The passive continuous keeps the painting in progress',
      'Pintar las paredes seguía en ese momento'
    ),
    tgt(
      'Las plantas estaban siendo regadas por los vecinos',
      'The plants were being watered by the neighbors',
      ['The', 'plants', 'were', 'being', 'watered'],
      ['The', 'plants', 'were', 'being', 'watered', 'neighbors'],
      'Usar The plants were watered by the neighbors',
      'Being watered makes the watering an ongoing past action',
      'Regar las plantas seguía ocurriendo'
    ),
    tgt(
      'Los carteles estaban siendo limpiados después de la lluvia',
      'The signs were being cleaned after the rain',
      ['The', 'signs', 'were', 'being', 'cleaned'],
      ['The', 'signs', 'were', 'being', 'cleaned', 'rain'],
      'Usar The signs were cleaned after the rain',
      'The cleaning was in progress after the rain',
      'Limpiar los carteles seguía pasando'
    ),
    tgt(
      'La basura estaba siendo recogida cerca de la puerta',
      'The trash was being collected near the gate',
      ['The', 'trash', 'was', 'being', 'collected'],
      ['The', 'trash', 'was', 'being', 'collected', 'gate'],
      'Usar The trash was collected near the gate',
      'Was being collected keeps the action ongoing in the past',
      'Recoger la basura seguía pasando'
    ),
    tgt(
      'Las bicicletas estaban siendo arregladas en el cobertizo',
      'The bicycles were being repaired in the shed',
      ['The', 'bicycles', 'were', 'being', 'repaired'],
      ['The', 'bicycles', 'were', 'being', 'repaired', 'shed'],
      'Usar The bicycles were repaired in the shed',
      'Being repaired signals that the repair was happening then',
      'Arreglar las bicicletas seguía en curso'
    ),
    tgt(
      'Los caminos estaban siendo abiertos otra vez',
      'The paths were being opened again',
      ['The', 'paths', 'were', 'being', 'opened'],
      ['The', 'paths', 'were', 'being', 'opened', 'again'],
      'Usar The paths were opened again',
      'Being opened marks the process in progress',
      'Abrir los caminos seguía pasando'
    ),
    tgt(
      'Las mesas estaban siendo preparadas para la comida',
      'The tables were being prepared for the meal',
      ['The', 'tables', 'were', 'being', 'prepared'],
      ['The', 'tables', 'were', 'being', 'prepared', 'meal'],
      'Usar The tables were prepared for the meal',
      'Prepared after being keeps the action active in the past',
      'Preparar las mesas seguía ocurriendo'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
