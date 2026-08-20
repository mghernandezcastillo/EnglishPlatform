import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[2];
const targetPattern = 'am / is / are + verb-ing for arranged future plans';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'going', 'to', 'did', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Continuous para futuro';
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
  { title: 'La agenda de mañana: Citas ya fijadas', type: 'Descubrimiento', value: 'organización' },
  [
    ctx(
      'La agenda del viernes ya tiene varias citas marcadas.',
      'The Friday schedule already has several appointments marked.',
      ['schedule', 'Friday', 'marked'],
      ['schedule', 'appointments', 'marked'],
      'Perder la idea de plan ya confirmado.',
      'Primero mira lo que ya está acordado.',
      'La historia abre con una agenda completa.'
    ),
    tgt(
      'Marta visita al dentista mañana.',
      'Marta is visiting the dentist tomorrow.',
      ['Marta', 'is', 'visiting'],
      ['is', 'visiting', 'tomorrow'],
      'Usar will visit the dentist tomorrow.',
      'The arranged future event uses present continuous.',
      'La cita ya está fijada.'
    ),
    tgt(
      'Ella sale a las cuatro.',
      'She is leaving at four.',
      ['She', 'is', 'leaving'],
      ['is', 'leaving', 'four'],
      'Usar leaves at four.',
      'A scheduled departure fits the continuous form.',
      'La salida ya tiene hora.'
    ),
    tgt(
      'El tren llega a las seis.',
      'The train is arriving at six.',
      ['train', 'is', 'arriving'],
      ['is', 'arriving', 'six'],
      'Usar will arrive at six.',
      'The time is already arranged.',
      'La llegada está programada.'
    ),
    ctx(
      'Las notas están pegadas junto a la puerta.',
      'The notes are stuck next to the door.',
      ['notes', 'stuck', 'door'],
      ['notes', 'stuck', 'door'],
      'Cerrar sin sensación de agenda real.',
      'The background should show a fixed plan.',
      'El contexto deja ver la organización.'
    ),
    tgt(
      'No estamos cambiando la hora.',
      'We are not changing the time.',
      ['We', 'are', 'not', 'changing'],
      ['are', 'not', 'changing'],
      'Usar will not change the time.',
      'The continuous form keeps the arranged plan in mind.',
      'La negativa muestra que el plan sigue igual.'
    ),
    tgt(
      '¿Sales con Ana esta noche?',
      'Are you meeting Ana tonight?',
      ['Are', 'you', 'meeting'],
      ['Are', 'meeting', 'tonight'],
      'Usar will you meet Ana tonight.',
      'The meeting is already arranged.',
      'La pregunta revisa un plan concreto.'
    ),
    tgt(
      'Daniel recoge a Sofia a las siete.',
      'Daniel is picking Sofia up at seven.',
      ['Daniel', 'is', 'picking'],
      ['is', 'picking', 'seven'],
      'Usar will pick Sofia up at seven.',
      'The pickup is a fixed arrangement.',
      'La recogida ya está decidida.'
    ),
    ctx(
      'La familia revisa el reloj y termina de prepararse.',
      'The family checks the clock and finishes getting ready.',
      ['family', 'checks', 'clock'],
      ['family', 'finishes', 'ready'],
      'Cerrar sin mostrar horario fijo.',
      'The scene should still feel scheduled.',
      'El contexto sostiene el plan del día.'
    ),
    tgt(
      'Nos reunimos con la guía el lunes.',
      'We are meeting the guide on Monday.',
      ['We', 'are', 'meeting'],
      ['are', 'meeting', 'Monday'],
      'Usar will meet the guide on Monday.',
      'On Monday signals a planned arrangement.',
      'La reunión ya está acordada.'
    ),
    tgt(
      'No cenamos en casa esta noche.',
      'We are not having dinner at home tonight.',
      ['We', 'are', 'not', 'having'],
      ['are', 'not', 'having'],
      'Usar will not have dinner at home tonight.',
      'The dinner is already arranged elsewhere.',
      'La negativa mantiene el plan fijado.'
    ),
    ctx(
      'Al final, todo está listo en el calendario.',
      'In the end, everything is ready on the calendar.',
      ['everything', 'is', 'ready'],
      ['everything', 'ready', 'calendar'],
      'Cerrar sin una idea de agenda.',
      'The ending should show a clear schedule.',
      'El cierre deja la agenda cerrada.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La visita al museo: Planes de la clase', type: 'Uso natural', value: 'precisión' },
  [
    ctx(
      'Las entradas ya están en la carpeta del profesor.',
      'The tickets are already in the teacher folder.',
      ['tickets', 'already', 'folder'],
      ['tickets', 'folder'],
      'Perder la evidencia de plan acordado.',
      'Look for things already prepared for the visit.',
      'La historia abre con una visita organizada.'
    ),
    tgt(
      'La clase va al museo el miércoles.',
      'The class is visiting the museum on Wednesday.',
      ['class', 'is', 'visiting'],
      ['is', 'visiting', 'Wednesday'],
      'Usar will visit the museum on Wednesday.',
      'The trip is fixed, so use present continuous.',
      'La visita ya está pactada.'
    ),
    tgt(
      'La maestra explica el horario después del almuerzo.',
      'The teacher is explaining the schedule after lunch.',
      ['teacher', 'is', 'explaining'],
      ['is', 'explaining', 'schedule'],
      'Usar explains for a future arrangement.',
      'The explanation is part of the planned day.',
      'La explicación ya forma parte del plan.'
    ),
    tgt(
      'Los estudiantes llevan cuadernos pequeños.',
      'The students are bringing small notebooks.',
      ['students', 'are', 'bringing'],
      ['are', 'bringing', 'notebooks'],
      'Usar will bring small notebooks.',
      'The notebooks are already part of the arrangement.',
      'Lo que llevan ya quedó decidido.'
    ),
    ctx(
      'El autobús sale frente al colegio a las nueve.',
      'The bus leaves in front of the school at nine.',
      ['bus', 'leaves', 'nine'],
      ['bus', 'school', 'nine'],
      'Cerrar sin horario fijo.',
      'The scene should make the arrangement feel official.',
      'El contexto confirma el horario.'
    ),
    tgt(
      'No visitamos otras salas ese día.',
      'We are not visiting other rooms that day.',
      ['We', 'are', 'not', 'visiting'],
      ['are', 'not', 'visiting'],
      'Usar will not visit other rooms.',
      'The schedule already limits the route.',
      'La negativa mantiene el plan claro.'
    ),
    tgt(
      '¿Van al museo con la clase completa?',
      'Are they going with the whole class to the museum?',
      ['Are', 'they', 'going'],
      ['Are', 'going', 'museum'],
      'Usar will they go with the whole class.',
      'The arrangement has already been made.',
      'La pregunta busca un plan confirmado.'
    ),
    tgt(
      'El guía acompaña al grupo durante la mañana.',
      'The guide is accompanying the group during the morning.',
      ['guide', 'is', 'accompanying'],
      ['is', 'accompanying', 'morning'],
      'Usar will accompany the group.',
      'The morning schedule is already set.',
      'La compañía forma parte del programa.'
    ),
    ctx(
      'La sala está lista y los carteles esperan.',
      'The room is ready and the signs are waiting.',
      ['room', 'is', 'ready'],
      ['room', 'signs', 'waiting'],
      'Cerrar sin sensación de salida planificada.',
      'The scene should still show a fixed plan.',
      'El contexto marca la logística.'
    ),
    tgt(
      'Los alumnos se sientan en la fila dos.',
      'The students are sitting in row two.',
      ['students', 'are', 'sitting'],
      ['are', 'sitting', 'two'],
      'Usar will sit in row two.',
      'The seats are already assigned.',
      'La ubicación ya está organizada.'
    ),
    tgt(
      'No faltamos a la salida de la tarde.',
      'We are not missing the afternoon departure.',
      ['We', 'are', 'not', 'missing'],
      ['are', 'not', 'missing'],
      'Usar will not miss the afternoon departure.',
      'The departure is already arranged.',
      'La negativa protege el horario.'
    ),
    ctx(
      'Al final, la clase llega con todo preparado.',
      'In the end, the class arrives with everything prepared.',
      ['class', 'arrives', 'prepared'],
      ['class', 'prepared', 'everything'],
      'Cerrar sin una idea de planificación.',
      'The ending should show the plan is already in motion.',
      'El cierre deja la visita organizada.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La cena de sábado: Horarios compartidos', type: 'Integración', value: 'coordinación' },
  [
    ctx(
      'La mesa ya tiene platos y servilletas.',
      'The table already has plates and napkins.',
      ['table', 'already', 'plates'],
      ['table', 'plates', 'napkins'],
      'Perder la pista de un plan fijado.',
      'The objects on the table show a set plan.',
      'La escena abre con una cena organizada.'
    ),
    tgt(
      'Maya se encuentra con su prima a las ocho.',
      'Maya is meeting her cousin at eight.',
      ['Maya', 'is', 'meeting'],
      ['is', 'meeting', 'eight'],
      'Usar will meet her cousin at eight.',
      'A time already fixed fits present continuous.',
      'El encuentro ya quedó acordado.'
    ),
    tgt(
      'Su padre recoge el pastel más tarde.',
      'Her father is picking up the cake later.',
      ['father', 'is', 'picking'],
      ['is', 'picking', 'later'],
      'Usar will pick up the cake later.',
      'The plan is already scheduled.',
      'La recogida forma parte del horario.'
    ),
    tgt(
      'La abuela trae la ensalada después.',
      'Grandma is bringing the salad after that.',
      ['Grandma', 'is', 'bringing'],
      ['is', 'bringing', 'salad'],
      'Usar will bring the salad after that.',
      'The salad is part of the arranged dinner.',
      'La aportación ya está repartida.'
    ),
    ctx(
      'Todos revisan la hora y sonríen.',
      'Everyone checks the time and smiles.',
      ['Everyone', 'checks', 'time'],
      ['Everyone', 'smiles', 'time'],
      'Cerrar sin sensación de horario compartido.',
      'The scene should feel like a fixed appointment.',
      'El contexto confirma el momento.'
    ),
    tgt(
      'No estamos cambiando la mesa hoy.',
      'We are not changing the table today.',
      ['We', 'are', 'not', 'changing'],
      ['are', 'not', 'changing'],
      'Usar will not change the table today.',
      'Today plus a fixed arrangement fits the continuous form.',
      'La negativa muestra un plan estable.'
    ),
    tgt(
      '¿Vienen Ana y Luis a la cena mañana?',
      'Are Ana and Luis coming to dinner tomorrow?',
      ['Are', 'Ana', 'and', 'Luis', 'coming'],
      ['Are', 'coming', 'tomorrow'],
      'Usar will Ana and Luis come to dinner tomorrow.',
      'The question asks about an already arranged plan.',
      'La pregunta revisa la asistencia prevista.'
    ),
    tgt(
      'Mi hermano lleva los vasos.',
      'My brother is bringing the glasses.',
      ['brother', 'is', 'bringing'],
      ['is', 'bringing', 'glasses'],
      'Usar will bring the glasses.',
      'The duty is already assigned.',
      'La tarea del hermano ya está decidida.'
    ),
    ctx(
      'La cocina está tranquila antes del sonido del timbre.',
      'The kitchen is calm before the doorbell sounds.',
      ['kitchen', 'is', 'calm'],
      ['kitchen', 'doorbell', 'sounds'],
      'Cerrar sin una sensación de tiempo fijado.',
      'The calm should make the later plan feel ready.',
      'El contexto mantiene la espera de la cena.'
    ),
    tgt(
      'Los primos se sientan junto a la ventana.',
      'The cousins are sitting by the window.',
      ['cousins', 'are', 'sitting'],
      ['are', 'sitting', 'window'],
      'Usar will sit by the window.',
      'The seating arrangement is already chosen.',
      'La ubicación ya quedó organizada.'
    ),
    tgt(
      'No llegamos tarde esta vez.',
      'We are not arriving late this time.',
      ['We', 'are', 'not', 'arriving'],
      ['are', 'not', 'arriving'],
      'Usar will not arrive late this time.',
      'The plan already sets the timing.',
      'La negativa protege el horario.'
    ),
    ctx(
      'Al final, la cena empieza justo cuando todos llegan.',
      'In the end, dinner starts exactly when everyone arrives.',
      ['dinner', 'starts', 'arrives'],
      ['dinner', 'everyone', 'arrives'],
      'Cerrar sin un horario claro.',
      'The ending should show a planned moment arriving on time.',
      'El cierre deja la coordinación completa.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 21.');
