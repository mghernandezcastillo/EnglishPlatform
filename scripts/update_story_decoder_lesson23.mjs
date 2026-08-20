import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[4];
const targetPattern = 'will be + verb-ing at a future moment';
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Future Continuous';
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
  { title: 'La feria escolar de mañana: Movimiento constante', type: 'Descubrimiento', value: 'coordinación' },
  [
    ctx(
      'Mañana por la tarde, el salón estará lleno de actividad.',
      'Tomorrow afternoon, the hall will be full of activity.',
      ['Tomorrow', 'afternoon', 'hall'],
      ['Tomorrow', 'hall', 'activity'],
      'Perder la idea de un momento futuro en proceso.',
      'Primero fija la hora futura antes de pensar en la acción.',
      'La historia abre con la feria ya en el horizonte.'
    ),
    tgt(
      'A esa hora, el equipo estará montando el escenario.',
      'At that time, the team will be setting up the stage.',
      ['team', 'will', 'be', 'setting'],
      ['will', 'be', 'setting'],
      'Usar will set up the stage.',
      'Future Continuous uses will be + verb-ing.',
      'La acción seguirá ocurriendo en ese momento.'
    ),
    tgt(
      'Los profesores estarán revisando la lista.',
      'The teachers will be checking the list.',
      ['teachers', 'will', 'be', 'checking'],
      ['will', 'be', 'checking', 'list'],
      'Usar will check the list.',
      'The focus is on the ongoing activity in the future.',
      'La revisión estará en marcha.'
    ),
    tgt(
      'Los músicos estarán probando el sonido.',
      'The musicians will be testing the sound.',
      ['musicians', 'will', 'be', 'testing'],
      ['will', 'be', 'testing', 'sound'],
      'Usar will test the sound.',
      'The action is in progress at that future time.',
      'La prueba de sonido ya estará avanzada.'
    ),
    ctx(
      'El reloj marcará las ocho y la puerta seguirá abierta.',
      'The clock will strike eight and the door will stay open.',
      ['clock', 'strike', 'eight'],
      ['clock', 'door', 'open'],
      'Cerrar sin una escena de movimiento futuro.',
      'The scene should still feel active and upcoming.',
      'El contexto sostiene el momento que se aproxima.'
    ),
    tgt(
      'No estarán cerrando el salón todavía.',
      'They will not be closing the hall yet.',
      ['They', 'will', 'not', 'be', 'closing'],
      ['will', 'not', 'be', 'closing'],
      'Usar will not close the hall yet.',
      'The negative form keeps the continuous idea.',
      'La acción seguirá abierta por un rato.'
    ),
    tgt(
      '¿Estarán llegando los padres cuando empiece la canción?',
      'Will the parents be arriving when the song starts?',
      ['Will', 'parents', 'be', 'arriving'],
      ['Will', 'be', 'arriving', 'song'],
      'Usar will the parents arrive when the song starts.',
      'The question asks about an action in progress at a future moment.',
      'La llegada se imagina en proceso.'
    ),
    tgt(
      'La clase estará sirviendo limonada.',
      'The class will be serving lemonade.',
      ['class', 'will', 'be', 'serving'],
      ['will', 'be', 'serving', 'lemonade'],
      'Usar will serve lemonade.',
      'The serving is ongoing in the future frame.',
      'La actividad seguirá ocurriendo.'
    ),
    ctx(
      'El pasillo seguirá moviéndose con gente.',
      'People will be moving through the corridor.',
      ['People', 'will', 'be', 'moving'],
      ['People', 'corridor', 'moving'],
      'Cerrar sin sensación de proceso.',
      'The background should feel active at the later moment.',
      'El contexto mantiene el flujo de personas.'
    ),
    tgt(
      'Los voluntarios estarán llevando las cajas.',
      'The volunteers will be carrying the boxes.',
      ['volunteers', 'will', 'be', 'carrying'],
      ['will', 'be', 'carrying', 'boxes'],
      'Usar will carry the boxes.',
      'The carrying is still in progress then.',
      'La ayuda seguirá en movimiento.'
    ),
    tgt(
      'La directora estará hablando al mismo tiempo.',
      'The director will be speaking at the same time.',
      ['director', 'will', 'be', 'speaking'],
      ['will', 'be', 'speaking', 'time'],
      'Usar will speak at the same time.',
      'The speaking overlaps with the same future moment.',
      'La explicación acompaña la acción.'
    ),
    ctx(
      'Al final, el evento estará fluyendo con calma.',
      'In the end, the event will be flowing calmly.',
      ['event', 'will', 'be', 'flowing'],
      ['event', 'flowing', 'calmly'],
      'Cerrar sin una escena continua.',
      'The ending should show an action still happening later.',
      'El cierre deja la feria en movimiento.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'Mañana a esta hora: Viaje en progreso', type: 'Uso natural', value: 'anticipación' },
  [
    ctx(
      'Mañana a esta hora, la familia ya estará en la carretera.',
      'This time tomorrow, the family will already be on the road.',
      ['This', 'time', 'tomorrow'],
      ['family', 'already', 'road'],
      'Perder la idea de un momento exacto del futuro.',
      'Fix the clock in the future before the action.',
      'La escena sitúa una hora exacta.'
    ),
    tgt(
      'Estaremos conduciendo por las montañas.',
      'We will be driving through the mountains.',
      ['We', 'will', 'be', 'driving'],
      ['will', 'be', 'driving', 'mountains'],
      'Usar will drive through the mountains.',
      'The action will be in progress during that future time.',
      'El viaje estará ocurriendo.'
    ),
    tgt(
      'Los niños estarán durmiendo en el coche.',
      'The children will be sleeping in the car.',
      ['children', 'will', 'be', 'sleeping'],
      ['will', 'be', 'sleeping', 'car'],
      'Usar will sleep in the car.',
      'The sleeping will continue at that later moment.',
      'El descanso seguirá durante el viaje.'
    ),
    tgt(
      'Mamá estará leyendo un mapa.',
      'Mom will be reading a map.',
      ['Mom', 'will', 'be', 'reading'],
      ['will', 'be', 'reading', 'map'],
      'Usar will read a map.',
      'The reading is ongoing in the future scene.',
      'La orientación estará en curso.'
    ),
    ctx(
      'El cielo estará cambiando de color.',
      'The sky will be changing color.',
      ['sky', 'will', 'be', 'changing'],
      ['sky', 'changing', 'color'],
      'Cerrar sin sensación de movimiento futuro.',
      'The scene should feel like the trip is unfolding.',
      'El contexto marca el paso del tiempo.'
    ),
    tgt(
      'No estarán parando por mucho tiempo.',
      'They will not be stopping for long.',
      ['They', 'will', 'not', 'be', 'stopping'],
      ['will', 'not', 'be', 'stopping'],
      'Usar will not stop for long.',
      'The pause is part of the ongoing future scene.',
      'La negativa conserva la continuidad.'
    ),
    tgt(
      '¿Estarán comiendo almuerzo junto al río?',
      'Will they be eating lunch by the river?',
      ['Will', 'they', 'be', 'eating'],
      ['Will', 'be', 'eating', 'river'],
      'Usar will they eat lunch by the river.',
      'The question asks about what will be happening then.',
      'La escena imagina la acción en curso.'
    ),
    tgt(
      'El conductor estará escuchando música.',
      'The driver will be listening to music.',
      ['driver', 'will', 'be', 'listening'],
      ['will', 'be', 'listening', 'music'],
      'Usar will listen to music.',
      'The listening will be happening during the drive.',
      'La carretera tendrá su propio ritmo.'
    ),
    ctx(
      'El autobús cruzará el puente en silencio.',
      'The bus will be crossing the bridge quietly.',
      ['bus', 'will', 'be', 'crossing'],
      ['bus', 'crossing', 'bridge'],
      'Cerrar sin una imagen de proceso.',
      'The later moment should feel like movement still in progress.',
      'El contexto mantiene la ruta viva.'
    ),
    tgt(
      'La familia estará mirando la vista.',
      'The family will be watching the view.',
      ['family', 'will', 'be', 'watching'],
      ['will', 'be', 'watching', 'view'],
      'Usar will watch the view.',
      'The watching is part of the ongoing future moment.',
      'La vista acompañará el trayecto.'
    ),
    tgt(
      'El perro estará descansando junto a las bolsas.',
      'The dog will be resting beside the bags.',
      ['dog', 'will', 'be', 'resting'],
      ['will', 'be', 'resting', 'bags'],
      'Usar will rest beside the bags.',
      'The resting is happening during that future time.',
      'El perro seguirá presente en la escena.'
    ),
    ctx(
      'Al atardecer, el viaje seguirá acercándose a la costa.',
      'At sunset, the trip will be moving toward the coast.',
      ['sunset', 'trip', 'moving'],
      ['trip', 'moving', 'coast'],
      'Cerrar sin una idea de trayecto.',
      'The ending should show a process that continues into the future.',
      'El cierre deja el viaje en marcha.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El hospital de noche: Trabajo continuo', type: 'Integración', value: 'cuidado' },
  [
    ctx(
      'Esta noche, el hospital estará lleno de movimiento silencioso.',
      'Tonight, the hospital will be full of quiet movement.',
      ['Tonight', 'hospital', 'movement'],
      ['Tonight', 'hospital', 'movement'],
      'Perder la idea de trabajo sostenido.',
      'Think of a future period where things will still be happening.',
      'La historia abre con una noche ocupada.'
    ),
    tgt(
      'La enfermera estará revisando los monitores.',
      'The nurse will be checking the monitors.',
      ['nurse', 'will', 'be', 'checking'],
      ['will', 'be', 'checking', 'monitors'],
      'Usar will check the monitors.',
      'The checking will be in progress during the night.',
      'La vigilancia estará en curso.'
    ),
    tgt(
      'El doctor estará hablando con un paciente.',
      'The doctor will be talking with a patient.',
      ['doctor', 'will', 'be', 'talking'],
      ['will', 'be', 'talking', 'patient'],
      'Usar will talk with a patient.',
      'The talking will overlap with that later moment.',
      'La conversación seguirá ocurriendo.'
    ),
    tgt(
      'El personal estará limpiando la sala.',
      'The staff will be cleaning the room.',
      ['staff', 'will', 'be', 'cleaning'],
      ['will', 'be', 'cleaning', 'room'],
      'Usar will clean the room.',
      'The cleaning is in progress at that future time.',
      'La sala seguirá en movimiento.'
    ),
    ctx(
      'El reloj seguirá avanzando por la noche.',
      'The clock will keep moving through the night.',
      ['clock', 'will', 'keep'],
      ['clock', 'moving', 'night'],
      'Cerrar sin sensación de noche activa.',
      'The background should stay in motion.',
      'El contexto mantiene el turno nocturno.'
    ),
    tgt(
      'No estarán saliendo temprano.',
      'They will not be leaving early.',
      ['They', 'will', 'not', 'be', 'leaving'],
      ['will', 'not', 'be', 'leaving'],
      'Usar will not leave early.',
      'The leaving is ongoing in that future frame.',
      'La negativa aclara que siguen trabajando.'
    ),
    tgt(
      '¿El equipo estará ayudando en la sala cuatro?',
      'Will the team be helping in room four?',
      ['Will', 'team', 'be', 'helping'],
      ['Will', 'be', 'helping', 'four'],
      'Usar will the team help in room four.',
      'The question asks what will be happening then.',
      'La pregunta revisa el turno de ayuda.'
    ),
    tgt(
      'El asistente estará llevando medicina.',
      'The assistant will be carrying medicine.',
      ['assistant', 'will', 'be', 'carrying'],
      ['will', 'be', 'carrying', 'medicine'],
      'Usar will carry medicine.',
      'The carrying will still be ongoing.',
      'La tarea sigue en proceso.'
    ),
    ctx(
      'El pasillo seguirá brillante y calmado.',
      'The corridor will stay bright and calm.',
      ['corridor', 'will', 'stay'],
      ['corridor', 'bright', 'calm'],
      'Cerrar sin un ambiente de turno.',
      'The scene should still feel active but orderly.',
      'El contexto sostiene la noche clara.'
    ),
    tgt(
      'La enfermera estará escribiendo el informe.',
      'The nurse will be writing the report.',
      ['nurse', 'will', 'be', 'writing'],
      ['will', 'be', 'writing', 'report'],
      'Usar will write the report.',
      'The writing is happening during the shift.',
      'El informe se irá completando.'
    ),
    tgt(
      'El doctor estará revisando los resultados.',
      'The doctor will be reviewing the results.',
      ['doctor', 'will', 'be', 'reviewing'],
      ['will', 'be', 'reviewing', 'results'],
      'Usar will review the results.',
      'The review will be in progress.',
      'La revisión seguirá ocurriendo.'
    ),
    ctx(
      'Al amanecer, el turno de noche estará terminando despacio.',
      'At dawn, the night shift will be ending slowly.',
      ['dawn', 'shift', 'ending'],
      ['dawn', 'shift', 'slowly'],
      'Cerrar sin mostrar el proceso final.',
      'The ending should show the action still moving toward completion.',
      'El cierre deja la noche en transición.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 23.');
