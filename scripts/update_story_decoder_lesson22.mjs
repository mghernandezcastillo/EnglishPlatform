import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[3];
const targetPattern = 'Present Simple for fixed future schedules and timetables';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'going', 'to', 'was', 'were'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Simple para horarios futuros';
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
  { title: 'La estación y el tablero: Horarios fijos', type: 'Descubrimiento', value: 'puntualidad' },
  [
    ctx(
      'El tablero de salidas ya muestra varios horarios.',
      'The departure board already shows several times.',
      ['board', 'already', 'shows'],
      ['board', 'times', 'shows'],
      'Perder la idea de horario fijo.',
      'Look at the timetable before the trip happens.',
      'La historia abre con un horario visible.'
    ),
    tgt(
      'El tren sale a las seis.',
      'The train leaves at six.',
      ['train', 'leaves', 'six'],
      ['leaves', 'six', 'train'],
      'Usar will leave at six.',
      'Timetables use present simple.',
      'La salida ya está marcada.'
    ),
    tgt(
      'El autobús llega a las siete.',
      'The bus arrives at seven.',
      ['bus', 'arrives', 'seven'],
      ['arrives', 'seven', 'bus'],
      'Usar will arrive at seven.',
      'Scheduled events use present simple.',
      'La llegada forma parte del horario.'
    ),
    tgt(
      'El ferry no corre los lunes.',
      'The ferry does not run on Mondays.',
      ['ferry', 'does', 'not', 'run'],
      ['does', 'not', 'run', 'Mondays'],
      'Usar will not run on Mondays.',
      'Negative schedules still use present simple.',
      'La negativa describe una regla fija.'
    ),
    ctx(
      'Los viajeros miran las pantallas y esperan.',
      'Travelers look at the screens and wait.',
      ['Travelers', 'look', 'screens'],
      ['Travelers', 'screens', 'wait'],
      'Cerrar sin sensación de horario.',
      'The background should still feel scheduled and calm.',
      'El contexto mantiene la espera de la estación.'
    ),
    tgt(
      '¿Empieza el concierto a las ocho?',
      'Does the concert start at eight?',
      ['Does', 'concert', 'start'],
      ['start', 'eight', 'concert'],
      'Usar will the concert start at eight.',
      'Questions about timetables use do / does.',
      'La pregunta revisa un horario fijo.'
    ),
    tgt(
      'El avión aterriza a las diez.',
      'The plane lands at ten.',
      ['plane', 'lands', 'ten'],
      ['lands', 'ten', 'plane'],
      'Usar will land at ten.',
      'The schedule is already set.',
      'La llegada se lee como horario.'
    ),
    tgt(
      'La película comienza después de la cena.',
      'The movie begins after dinner.',
      ['movie', 'begins', 'dinner'],
      ['begins', 'dinner', 'movie'],
      'Usar will begin after dinner.',
      'Fixed schedules often use present simple.',
      'La función ya está definida.'
    ),
    ctx(
      'El tablero sigue claro y ordenado.',
      'The board stays clear and organized.',
      ['board', 'stays', 'clear'],
      ['board', 'clear', 'organized'],
      'Cerrar sin un sistema visible.',
      'The scene should feel orderly and precise.',
      'El contexto conserva la claridad del horario.'
    ),
    tgt(
      'El próximo tren sale en diez minutos.',
      'The next train leaves in ten minutes.',
      ['train', 'leaves', 'minutes'],
      ['leaves', 'ten', 'minutes'],
      'Usar will leave in ten minutes.',
      'A timetable can still use present simple for the future.',
      'La proximidad no cambia el tiempo verbal.'
    ),
    tgt(
      'La estación cierra a medianoche.',
      'The station closes at midnight.',
      ['station', 'closes', 'midnight'],
      ['closes', 'midnight', 'station'],
      'Usar will close at midnight.',
      'Timetable language prefers present simple.',
      'El cierre también forma parte del horario.'
    ),
    ctx(
      'Al final, el horario le dice a todos qué viene después.',
      'In the end, the timetable tells everyone what comes next.',
      ['timetable', 'tells', 'next'],
      ['timetable', 'everyone', 'next'],
      'Cerrar sin la idea de orden futuro.',
      'The ending should show that the schedule is the guide.',
      'El cierre resume la función del tablero.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El cine del barrio: La función marcada', type: 'Uso natural', value: 'organización' },
  [
    ctx(
      'El cartel del cine ya muestra la hora de la función.',
      'The cinema poster already shows the showtime.',
      ['poster', 'already', 'shows'],
      ['poster', 'showtime', 'shows'],
      'Perder la idea de programa fijo.',
      'Look for a time that is printed and fixed.',
      'La historia abre con la función marcada.'
    ),
    tgt(
      'La película empieza a las siete.',
      'The film starts at seven.',
      ['film', 'starts', 'seven'],
      ['starts', 'seven', 'film'],
      'Usar will start at seven.',
      'The start time is already in the program.',
      'La proyección ya tiene hora.'
    ),
    tgt(
      'Las puertas abren a las seis y media.',
      'The doors open at six thirty.',
      ['doors', 'open', 'thirty'],
      ['open', 'six', 'thirty'],
      'Usar will open at six thirty.',
      'Open times on schedules use present simple.',
      'La apertura ya está anunciada.'
    ),
    tgt(
      'La función especial termina a las nueve.',
      'The special showing ends at nine.',
      ['showing', 'ends', 'nine'],
      ['ends', 'nine', 'showing'],
      'Usar will end at nine.',
      'The ending time is fixed in the schedule.',
      'La duración ya está definida.'
    ),
    ctx(
      'Las entradas están en una fila limpia sobre la mesa.',
      'The tickets are in a neat row on the table.',
      ['tickets', 'row', 'table'],
      ['tickets', 'row', 'table'],
      'Cerrar sin una imagen de organización.',
      'The scene should still feel ready and official.',
      'El contexto sostiene la función anunciada.'
    ),
    tgt(
      'El gerente no permite entrar tarde.',
      'The manager does not allow late entry.',
      ['manager', 'does', 'not', 'allow'],
      ['does', 'not', 'allow', 'late'],
      'Usar will not allow late entry.',
      'The rule is part of the schedule and policy.',
      'La regla se expresa como horario fijo.'
    ),
    tgt(
      '¿Empieza la segunda película después de la cena?',
      'Does the second movie begin after dinner?',
      ['Does', 'second', 'movie', 'begin'],
      ['begin', 'after', 'dinner'],
      'Usar will the second movie begin after dinner.',
      'Questions about schedules use does.',
      'La pregunta revisa la función posterior.'
    ),
    tgt(
      'El equipo de sonido llega a las seis.',
      'The sound team arrives at six.',
      ['team', 'arrives', 'six'],
      ['arrives', 'six', 'team'],
      'Usar will arrive at six.',
      'The call time is fixed by the program.',
      'La preparación también tiene horario.'
    ),
    ctx(
      'La sala permanece en silencio antes de la primera escena.',
      'The hall stays quiet before the first scene.',
      ['hall', 'stays', 'quiet'],
      ['hall', 'quiet', 'scene'],
      'Cerrar sin sensación de espera previa.',
      'The background should feel calm and scheduled.',
      'El contexto conserva la pausa del cine.'
    ),
    tgt(
      'La cafetería abre después de la matiné.',
      'The cafe opens after the matinee.',
      ['cafe', 'opens', 'matinee'],
      ['opens', 'after', 'matinee'],
      'Usar will open after the matinee.',
      'The opening time is written in the program.',
      'La cafetería sigue el horario.'
    ),
    tgt(
      'El personal limpia la sala al final.',
      'The staff cleans the room at the end.',
      ['staff', 'cleans', 'room'],
      ['cleans', 'room', 'end'],
      'Usar will clean the room at the end.',
      'The schedule explains the final routine.',
      'La limpieza forma parte del cierre.'
    ),
    ctx(
      'Al final, la cartelera mantiene la noche organizada.',
      'In the end, the schedule keeps the night organized.',
      ['schedule', 'keeps', 'organized'],
      ['schedule', 'night', 'organized'],
      'Cerrar sin una idea de agenda.',
      'The ending should show the power of a fixed program.',
      'El cierre deja la noche bajo control.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El festival y la puerta: Un calendario exacto', type: 'Integración', value: 'orden' },
  [
    ctx(
      'El programa ya lista cada actividad del día.',
      'The program already lists each activity for the day.',
      ['program', 'already', 'lists'],
      ['program', 'activity', 'day'],
      'Perder la idea de calendario fijo.',
      'Start with a plan that is written down.',
      'La historia abre con un día organizado.'
    ),
    tgt(
      'El desfile comienza a las nueve.',
      'The parade begins at nine.',
      ['parade', 'begins', 'nine'],
      ['begins', 'nine', 'parade'],
      'Usar will begin at nine.',
      'A printed schedule uses present simple.',
      'El inicio ya está fijado.'
    ),
    tgt(
      'Los talleres abren a las diez.',
      'The workshops open at ten.',
      ['workshops', 'open', 'ten'],
      ['open', 'ten', 'workshops'],
      'Usar will open at ten.',
      'Open times on timetables use present simple.',
      'La apertura forma parte del programa.'
    ),
    tgt(
      'El concierto termina al mediodía.',
      'The concert finishes at noon.',
      ['concert', 'finishes', 'noon'],
      ['finishes', 'noon', 'concert'],
      'Usar will finish at noon.',
      'The ending time is already set.',
      'La hora de cierre es exacta.'
    ),
    ctx(
      'Los padres leen el cartel y sonríen.',
      'Parents read the sign and smile.',
      ['Parents', 'read', 'sign'],
      ['Parents', 'sign', 'smile'],
      'Cerrar sin una sensación de agenda compartida.',
      'The scene should still feel fixed and public.',
      'El contexto ayuda a leer el día.'
    ),
    tgt(
      'El museo no abre el martes.',
      'The museum does not open on Tuesday.',
      ['museum', 'does', 'not', 'open'],
      ['does', 'not', 'open', 'Tuesday'],
      'Usar will not open on Tuesday.',
      'Timetable negations also use present simple.',
      'La negativa expresa una regla fija.'
    ),
    tgt(
      '¿Empieza la rifa después del almuerzo?',
      'Does the raffle start after lunch?',
      ['Does', 'raffle', 'start'],
      ['start', 'after', 'lunch'],
      'Usar will the raffle start after lunch.',
      'Schedule questions use does.',
      'La pregunta revisa el programa del día.'
    ),
    tgt(
      'Los voluntarios llegan antes de que abran las puertas.',
      'The volunteers arrive before the doors open.',
      ['volunteers', 'arrive', 'before'],
      ['arrive', 'before', 'doors'],
      'Usar will arrive before the doors open.',
      'This is a fixed sequence on the program.',
      'La llegada ya está planeada.'
    ),
    ctx(
      'El patio sigue lleno de color y movimiento.',
      'The courtyard stays full of color and movement.',
      ['courtyard', 'stays', 'color'],
      ['courtyard', 'color', 'movement'],
      'Cerrar sin atmósfera de evento.',
      'The scene should keep the festival feeling alive.',
      'El contexto conserva la energía del día.'
    ),
    tgt(
      'La comida se sirve al mediodía.',
      'The food stand serves lunch at one.',
      ['food', 'serves', 'one'],
      ['serves', 'lunch', 'one'],
      'Usar will serve lunch at one.',
      'Service times on events use present simple.',
      'La comida también sigue horario.'
    ),
    tgt(
      'Los maestros se reúnen con las familias a las cuatro.',
      'The teachers meet the families at four.',
      ['teachers', 'meet', 'four'],
      ['meet', 'families', 'four'],
      'Usar will meet the families at four.',
      'The meeting is scheduled, so present simple fits.',
      'El encuentro está en el programa.'
    ),
    ctx(
      'Al final, el programa muestra el día completo.',
      'In the end, the program shows the whole day.',
      ['program', 'shows', 'whole'],
      ['program', 'day', 'whole'],
      'Cerrar sin una idea de calendario.',
      'The ending should show the full plan clearly.',
      'El cierre deja el día completamente ordenado.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 22.');
