import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[8];
const targetPattern = 'modal + have been + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['can', 'will', 'do', 'does', 'go'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Modal Perfect Continuous';
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
  { title: 'La estación lluviosa: Lo que llevaban haciendo', type: 'Descubrimiento', value: 'paciencia' },
  [
    ctx(
      'La estación estaba llena de paraguas mojados',
      'The station was full of wet umbrellas',
      ['station', 'wet', 'umbrellas'],
      ['station', 'wet', 'umbrellas'],
      'Perder el ambiente de espera y lluvia',
      'The station should feel like a place where time has passed',
      'La escena abre con espera real'
    ),
    ctx(
      'El reloj marcaba las diez de la noche',
      'The clock showed ten at night',
      ['clock', 'showed', 'night'],
      ['clock', 'ten', 'night'],
      'Usar una hora vaga que no ayude a la deducción',
      'A clear time helps the learner feel the duration',
      'La hora fija da contexto temporal'
    ),
    ctx(
      'Sara miraba la puerta con paciencia',
      'Sara watched the door patiently',
      ['Sara', 'watched', 'door'],
      ['Sara', 'door', 'patiently'],
      'Ignorar la espera y pasar directo a la respuesta',
      'The waiting posture should stay visible',
      'La espera se nota en el cuerpo'
    ),
    ctx(
      'Un guardia hablaba por la radio',
      'A guard spoke into the radio',
      ['guard', 'spoke', 'radio'],
      ['guard', 'radio', 'spoke'],
      'Cerrar la escena sin una pista de acción continua',
      'The radio clue keeps the past action alive',
      'La radio sugiere movimiento continuo'
    ),
    tgt(
      'Ellos deben de haber estado esperando por una hora',
      'They must have been waiting for an hour',
      ['They', 'must', 'have', 'been', 'waiting'],
      ['must', 'been', 'waiting', 'hour'],
      'Usar They must wait for an hour',
      'Must have been + verb-ing shows a strong guess about duration',
      'La espera prolongada es la idea central'
    ),
    tgt(
      'Sara quizá haya estado buscando el boleto',
      'Sara might have been looking for the ticket',
      ['Sara', 'might', 'have', 'been', 'looking'],
      ['might', 'been', 'looking', 'ticket'],
      'Escribir Sara might look for the ticket',
      'Might have been + verb-ing keeps the search in progress',
      'La búsqueda se siente continua'
    ),
    tgt(
      'El guardia podría haber estado revisando la plataforma',
      'The guard could have been checking the platform',
      ['guard', 'could', 'have', 'been', 'checking'],
      ['could', 'been', 'checking', 'platform'],
      'Usar The guard could check the platform',
      'Could have been + verb-ing works for a soft deduction',
      'La vigilancia sigue activa'
    ),
    tgt(
      'Deberían haber estado llamando antes',
      'They should have been calling earlier',
      ['They', 'should', 'have', 'been', 'calling'],
      ['should', 'been', 'calling', 'earlier'],
      'Escribir They should call earlier',
      'Should have been + verb-ing shows a longer past action',
      'La llamada tardía deja una crítica clara'
    ),
    tgt(
      'Tal vez alguien haya estado corriendo bajo la lluvia',
      'Someone may have been running in the rain',
      ['Someone', 'may', 'have', 'been', 'running'],
      ['may', 'been', 'running', 'rain'],
      'Usar Someone may run in the rain',
      'May have been + verb-ing keeps the past action continuous',
      'La lluvia explica el movimiento'
    ),
    tgt(
      '¿Podría el conductor haber estado mirando el mapa?',
      'Could the driver have been looking at the map?',
      ['Could', 'the', 'driver', 'have', 'been', 'looking'],
      ['Could', 'been', 'looking', 'map'],
      'Escribir Could the driver have look at the map?',
      'Questions keep the modal perfect continuous order',
      'La pregunta busca el origen del desvío'
    ),
    tgt(
      'No debieron haber estado esperando afuera tanto tiempo',
      'They should not have been waiting outside for so long',
      ['They', 'should', 'not', 'have', 'been', 'waiting'],
      ['should', 'not', 'been', 'waiting', 'outside'],
      'Usar They should not wait outside for so long',
      'Negative modal perfect continuous still points to a past duration',
      'El tiempo afuera se siente demasiado largo'
    ),
    tgt(
      'El grupo quizá haya estado hablando con la taquillera',
      'The group might have been speaking with the clerk',
      ['The', 'group', 'might', 'have', 'been', 'speaking'],
      ['might', 'been', 'speaking', 'clerk'],
      'Usar The group might speak with the clerk',
      'Might have been + verb-ing keeps the action active in the past',
      'El cierre conserva la sensación de conversación'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La oficina nocturna: Lo que llevaban haciendo', type: 'Uso natural', value: 'esfuerzo' },
  [
    ctx(
      'La oficina seguía encendida después de medianoche',
      'The office was still lit after midnight',
      ['office', 'lit', 'midnight'],
      ['office', 'lit', 'midnight'],
      'Perder la sensación de trabajo tardío',
      'The late setting should support duration',
      'La noche deja ver el esfuerzo'
    ),
    ctx(
      'Había vasos de café junto al teclado',
      'There were coffee cups next to the keyboard',
      ['coffee', 'cups', 'keyboard'],
      ['coffee', 'cups', 'keyboard'],
      'Convertir el detalle en una lista seca',
      'The cups should signal a long work session',
      'El café señala horas de trabajo'
    ),
    ctx(
      'Marcos miraba la pantalla sin pestañear',
      'Marcos stared at the screen without blinking',
      ['Marcos', 'stared', 'screen'],
      ['Marcos', 'screen', 'blinking'],
      'Ignorar la atención sostenida',
      'The stare helps the learner sense the ongoing action',
      'La atención sigue fija'
    ),
    ctx(
      'La jefa pasó a ver el avance',
      'The boss came by to check the progress',
      ['boss', 'came', 'progress'],
      ['boss', 'came', 'progress'],
      'Cerrar sin introducir la revisión del trabajo',
      'The boss’s visit sets up the deduction',
      'La visita cambia el foco'
    ),
    tgt(
      'Ellos deben de haber estado trabajando toda la noche',
      'They must have been working all night',
      ['They', 'must', 'have', 'been', 'working'],
      ['must', 'been', 'working', 'night'],
      'Usar They must work all night',
      'Must have been + verb-ing shows prolonged past effort',
      'La noche completa da la pista principal'
    ),
    tgt(
      'Marcos quizá haya estado revisando los datos',
      'Marcos might have been checking the data',
      ['Marcos', 'might', 'have', 'been', 'checking'],
      ['might', 'been', 'checking', 'data'],
      'Escribir Marcos might check the data',
      'Might have been + verb-ing shows a process, not just a result',
      'La revisión se siente prolongada'
    ),
    tgt(
      'La jefa podría haber estado esperando el borrador',
      'The boss could have been waiting for the draft',
      ['The', 'boss', 'could', 'have', 'been', 'waiting'],
      ['could', 'been', 'waiting', 'draft'],
      'Usar The boss could wait for the draft',
      'Could have been + verb-ing softens the inference',
      'La espera del borrador dura en el tiempo'
    ),
    tgt(
      'Deberían haber estado hablando menos',
      'They should have been talking less',
      ['They', 'should', 'have', 'been', 'talking'],
      ['should', 'been', 'talking', 'less'],
      'Usar They should talk less',
      'Should have been + verb-ing points to a longer past action',
      'La crítica sigue siendo sobre el proceso'
    ),
    tgt(
      'Tal vez la secretaria haya estado organizando los archivos',
      'The secretary may have been organizing the files',
      ['The', 'secretary', 'may', 'have', 'been', 'organizing'],
      ['may', 'been', 'organizing', 'files'],
      'Usar The secretary may organize the files',
      'May have been + verb-ing keeps the action in progress',
      'El orden de los archivos toma tiempo'
    ),
    tgt(
      '¿Podría el equipo haber estado corrigiendo el informe?',
      'Could the team have been correcting the report?',
      ['Could', 'the', 'team', 'have', 'been', 'correcting'],
      ['Could', 'been', 'correcting', 'report'],
      'Escribir Could the team have correct the report?',
      'Questions keep the modal perfect continuous pattern',
      'La pregunta apunta al proceso de revisión'
    ),
    tgt(
      'No debieron haber estado usando ese archivo',
      'They should not have been using that file',
      ['They', 'should', 'not', 'have', 'been', 'using'],
      ['should', 'not', 'been', 'using', 'file'],
      'Usar They should not use that file',
      'Negative modal perfect continuous still describes a past action',
      'El archivo fue usado durante demasiado tiempo'
    ),
    tgt(
      'Para la una, quizá ya hayan estado cerrando la oficina',
      "By one o'clock, they might have been closing the office",
      ['By', 'one', "o'clock", 'they', 'might', 'have', 'been', 'closing'],
      ['might', 'been', 'closing', 'office'],
      "Usar By one o'clock, they might close the office",
      'The time marker helps anchor the duration in the past',
      'El cierre ya estaba en marcha'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El equipo del barrio: Lo que venían practicando', type: 'Integración', value: 'constancia' },
  [
    ctx(
      'El campo estaba mojado pero listo',
      'The field was wet but ready',
      ['field', 'wet', 'ready'],
      ['field', 'wet', 'ready'],
      'Perder el ambiente previo al partido',
      'The field should support the idea of preparation over time',
      'El campo ya anuncia esfuerzo'
    ),
    ctx(
      'Los conos seguían en fila junto a la línea',
      'The cones stayed in a row along the line',
      ['cones', 'row', 'line'],
      ['cones', 'row', 'line'],
      'Hacer una escena sin movimiento ni preparación',
      'Visible training markers help show duration',
      'Los elementos de entrenamiento quedan visibles'
    ),
    ctx(
      'El entrenador hablaba con voz firme',
      'The coach spoke in a firm voice',
      ['coach', 'spoke', 'firm'],
      ['coach', 'spoke', 'firm'],
      'Olvidar la figura que observa el esfuerzo',
      'The coach gives the scene authority',
      'El entrenador sostiene la presión'
    ),
    ctx(
      'Los jugadores respiraban despacio antes del partido',
      'The players breathed slowly before the match',
      ['players', 'breathed', 'slowly'],
      ['players', 'slowly', 'match'],
      'Cerrar sin dejar sensación de preparación prolongada',
      'The breathing detail suggests duration and effort',
      'La respiración marca el ritmo'
    ),
    tgt(
      'El equipo debe de haber estado entrenando por semanas',
      'The team must have been training for weeks',
      ['The', 'team', 'must', 'have', 'been', 'training'],
      ['must', 'been', 'training', 'weeks'],
      'Usar The team must train for weeks',
      'Must have been + verb-ing shows a long inferred habit in the past',
      'La constancia del equipo se vuelve evidente'
    ),
    tgt(
      'Ana quizá haya estado practicando los tiros',
      'Ana might have been practicing the shots',
      ['Ana', 'might', 'have', 'been', 'practicing'],
      ['might', 'been', 'practicing', 'shots'],
      'Escribir Ana might practice the shots',
      'Might have been + verb-ing keeps the rehearsal ongoing',
      'La práctica de Ana sigue en desarrollo'
    ),
    tgt(
      'El entrenador podría haber estado corrigiendo la postura',
      'The coach could have been correcting the posture',
      ['The', 'coach', 'could', 'have', 'been', 'correcting'],
      ['could', 'been', 'correcting', 'posture'],
      'Usar The coach could correct the posture',
      'Could have been + verb-ing explains a past process',
      'La corrección requiere tiempo'
    ),
    tgt(
      'Deberían haber estado descansando más',
      'They should have been resting more',
      ['They', 'should', 'have', 'been', 'resting'],
      ['should', 'been', 'resting', 'more'],
      'Usar They should rest more',
      'Should have been + verb-ing points to a continuing past need',
      'El descanso faltó durante demasiado tiempo'
    ),
    tgt(
      'Tal vez los suplentes hayan estado calentando afuera',
      'The substitutes may have been warming up outside',
      ['The', 'substitutes', 'may', 'have', 'been', 'warming'],
      ['may', 'been', 'warming', 'outside'],
      'Usar The substitutes may warm up outside',
      'May have been + verb-ing keeps the preparation in progress',
      'El calentamiento ya venía ocurriendo'
    ),
    tgt(
      '¿Podría el portero haber estado mirando al rival?',
      'Could the goalkeeper have been watching the rival?',
      ['Could', 'the', 'goalkeeper', 'have', 'been', 'watching'],
      ['Could', 'been', 'watching', 'rival'],
      'Escribir Could the goalkeeper have watch the rival?',
      'Questions keep the modal perfect continuous order',
      'La observación del rival ocurre durante el juego'
    ),
    tgt(
      'No debieron haber estado forzando el ritmo',
      'They should not have been forcing the pace',
      ['They', 'should', 'not', 'have', 'been', 'forcing'],
      ['should', 'not', 'been', 'forcing', 'pace'],
      'Usar They should not force the pace',
      'Negative modal perfect continuous still refers to a prolonged past action',
      'El ritmo demasiado fuerte se vuelve un problema'
    ),
    tgt(
      'Al final, quizá hayan estado celebrando juntos',
      'In the end, they might have been celebrating together',
      ['In', 'the', 'end', 'they', 'might', 'have', 'been', 'celebrating'],
      ['might', 'been', 'celebrating', 'together'],
      'Usar In the end, they might celebrate together',
      'The ending keeps the action and feeling in motion',
      'La celebración cierra la historia con energía'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
