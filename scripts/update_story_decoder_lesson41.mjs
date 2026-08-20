import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[4];
const targetPattern = lesson.pattern;
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Mixed Conditionals';
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
  { title: 'La cafetería de Sara: Lo que sabe ahora', type: 'Descubrimiento', value: 'aprendizaje' },
  [
    ctx(
      'La cafetería abre temprano y la mesa está cerca de la ventana',
      'The cafe opens early and the table is near the window',
      ['cafe', 'opens', 'table'],
      ['cafe', 'opens', 'window'],
      'Perder el ambiente tranquilo de estudio',
      'The opening should frame a present result that depends on a past event',
      'La cafetería deja espacio para pensar'
    ),
    ctx(
      'Sara tiene un cuaderno abierto frente a ella',
      'Sara has an open notebook in front of her',
      ['Sara', 'has', 'notebook'],
      ['Sara', 'has', 'notebook'],
      'Hacer la escena demasiado general',
      'The notebook should make the learning focus visible',
      'El cuaderno muestra estudio real'
    ),
    ctx(
      'Su teléfono muestra un mensaje viejo de la profesora',
      'Her phone shows an old message from the teacher',
      ['phone', 'shows', 'message'],
      ['phone', 'teacher', 'message'],
      'Ignorar la pista temporal del mensaje viejo',
      'The old message should support the mixed idea',
      'El mensaje ya pertenece al pasado'
    ),
    ctx(
      'Ella mira la lección con una cara seria',
      'She looks at the lesson with a serious face',
      ['looks', 'lesson', 'serious'],
      ['looks', 'lesson', 'serious'],
      'Cerrar sin dejar claro que aún piensa en el presente',
      'The present reaction should come through clearly',
      'La cara seria deja ver la consecuencia actual'
    ),
    tgt(
      'Si Sara hubiera revisado la lección ayer, la entendería ahora',
      'If Sara had reviewed the lesson yesterday, she would understand it now',
      ['If', 'Sara', 'had', 'reviewed', 'the', 'lesson'],
      ['If', 'Sara', 'had', 'reviewed', 'lesson', 'understand'],
      'Usar If Sara reviewed the lesson yesterday, she would understand it now',
      'Mixed Conditional often uses a past condition with a present result',
      'Revisar ayer cambia lo que entiende hoy'
    ),
    tgt(
      'Si hubiera preguntado antes, estaría más tranquila ahora',
      'If she had asked earlier, she would be calmer now',
      ['If', 'she', 'had', 'asked', 'earlier'],
      ['If', 'she', 'had', 'asked', 'calmer', 'now'],
      'Usar If she asked earlier, she would be calmer now',
      'The result is present, so would be fits the present feeling',
      'Preguntar antes habría dado calma hoy'
    ),
    tgt(
      'Si las notas hubieran sido más claras, recordaría la regla mejor ahora',
      'If the notes had been clearer, she would remember the rule better now',
      ['If', 'the', 'notes', 'had', 'been', 'clearer'],
      ['If', 'notes', 'had', 'been', 'clearer', 'remember'],
      'Usar If the notes were clearer, she would remember the rule better now',
      'The past perfect condition leads to a present result',
      'Las notas claras ayudan en el presente'
    ),
    tgt(
      'Si hubiera practicado los ejemplos, hablaría con más naturalidad ahora',
      'If she had practiced the examples, she would speak more naturally now',
      ['If', 'she', 'had', 'practiced', 'the', 'examples'],
      ['If', 'she', 'had', 'practiced', 'examples', 'speak'],
      'Usar If she practiced the examples, she would speak more naturally now',
      'Mixed Conditionals connect a past action to a present result',
      'Practicar antes mejora la fluidez de hoy'
    ),
    tgt(
      'Si el teléfono hubiera funcionado anoche, sabría la tarea ahora',
      'If the phone had worked last night, she would know the homework now',
      ['If', 'the', 'phone', 'had', 'worked', 'last', 'night'],
      ['If', 'phone', 'had', 'worked', 'homework', 'know'],
      'Usar If the phone worked last night, she would know the homework now',
      'The past condition explains a present lack of knowledge',
      'El teléfono roto sigue afectando hoy'
    ),
    tgt(
      'Si la luz hubiera sido mejor, leería más rápido ahora',
      'If the light had been better, she would read faster now',
      ['If', 'the', 'light', 'had', 'been', 'better'],
      ['If', 'light', 'had', 'been', 'better', 'read'],
      'Usar If the light was better, she would read faster now',
      'Had been is the natural form for the past condition here',
      'La luz influye en la lectura de hoy'
    ),
    tgt(
      'Si hubiera guardado la hoja, la tendría a mano ahora',
      'If she had saved the sheet, she would have it at hand now',
      ['If', 'she', 'had', 'saved', 'the', 'sheet'],
      ['If', 'she', 'had', 'saved', 'sheet', 'have'],
      'Usar If she saved the sheet, she would have it at hand now',
      'This keeps a past action tied to a present situation',
      'Guardar la hoja habría cambiado la organización actual'
    ),
    tgt(
      'Si hubiera descansado mejor, pensaría con más claridad ahora',
      'If she had rested better, she would think more clearly now',
      ['If', 'she', 'had', 'rested', 'better'],
      ['If', 'she', 'had', 'rested', 'clearly', 'now'],
      'Usar If she rested better, she would think more clearly now',
      'The present result is mental clarity',
      'El descanso pasado se nota en la mente de hoy'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La oficina del barrio: Lo que habría pasado ayer', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La oficina está en silencio y el reloj marca la tarde',
      'The office is quiet and the clock marks the afternoon',
      ['office', 'quiet', 'clock'],
      ['office', 'quiet', 'clock'],
      'Perder la tensión de trabajo',
      'The quiet office should make the hypothetical report feel urgent',
      'La oficina silenciosa prepara el problema'
    ),
    ctx(
      'Marcos mira el correo sin responder',
      'Marcos looks at the email without replying',
      ['Marcos', 'looks', 'email'],
      ['Marcos', 'email', 'replying'],
      'No mostrar la demora en la respuesta',
      'The unanswered email should feed the past-result idea',
      'El correo sin respuesta marca el conflicto'
    ),
    ctx(
      'La jefa espera el archivo con paciencia',
      'The boss waits for the file patiently',
      ['boss', 'waits', 'file'],
      ['boss', 'waits', 'file'],
      'Olvidar la presión del trabajo',
      'The waiting boss frames the consequence',
      'La jefa todavía espera'
    ),
    ctx(
      'Una impresora vieja parpadea junto a la mesa',
      'An old printer flashes by the desk',
      ['printer', 'flashes', 'desk'],
      ['printer', 'flashes', 'desk'],
      'Cerrar sin un objeto que falle',
      'The printer can become part of the unreal past outcome',
      'La impresora suma el problema'
    ),
    tgt(
      'Si Marcos fuera más cuidadoso, habría enviado el correo ayer',
      'If Marcos were more careful, he would have sent the email yesterday',
      ['If', 'Marcos', 'were', 'more', 'careful'],
      ['If', 'Marcos', 'were', 'careful', 'sent'],
      'Usar If Marcos was more careful, he would have sent the email yesterday',
      'The present condition leads to a past result in this mixed conditional',
      'Ser más cuidadoso habría cambiado el correo'
    ),
    tgt(
      'Si la impresora fuera más rápida, habrían impreso los pósters antes de la reunión',
      'If the printer were faster, they would have printed the posters before the meeting',
      ['If', 'the', 'printer', 'were', 'faster'],
      ['If', 'printer', 'were', 'faster', 'printed'],
      'Usar If the printer was faster, they would have printed the posters before the meeting',
      'Mixed Conditionals can connect a present problem to a past result',
      'La velocidad de hoy explica un resultado de ayer'
    ),
    tgt(
      'Si la sala fuera más silenciosa, el equipo habría terminado la grabación',
      'If the room were quieter, the team would have finished the recording',
      ['If', 'the', 'room', 'were', 'quieter'],
      ['If', 'room', 'were', 'quieter', 'finished'],
      'Usar If the room was quieter, the team would have finished the recording',
      'Were is natural in unreal present conditions',
      'El silencio presente habría ayudado antes'
    ),
    tgt(
      'Si la oficina estuviera mejor preparada, habrían llamado al cliente antes',
      'If the office were better prepared, they would have called the client earlier',
      ['If', 'the', 'office', 'were', 'better', 'prepared'],
      ['If', 'office', 'were', 'prepared', 'called'],
      'Usar If the office was better prepared, they would have called the client earlier',
      'The result is in the past, but the condition is present and unreal',
      'La preparación actual habría cambiado la llamada'
    ),
    tgt(
      'Si el horario fuera más claro, habrían salido antes del mediodía',
      'If the schedule were clearer, they would have left before noon',
      ['If', 'the', 'schedule', 'were', 'clearer'],
      ['If', 'schedule', 'were', 'clearer', 'left'],
      'Usar If the schedule was clearer, they would have left before noon',
      'The mixed conditional links a present issue to a past departure',
      'Un horario claro habría acelerado la salida'
    ),
    tgt(
      'Si la nota fuera fácil de leer, habría entregado el paquete ayer',
      'If the note were easier to read, she would have delivered the package yesterday',
      ['If', 'the', 'note', 'were', 'easier', 'to', 'read'],
      ['If', 'note', 'were', 'easier', 'delivered'],
      'Usar If the note was easy to read, she would have delivered the package yesterday',
      'The present readability explains a missed past delivery',
      'La nota clara habría cambiado la entrega'
    ),
    tgt(
      'Si la batería fuera más fuerte, habría mostrado el video en la reunión',
      'If the battery were stronger, he would have shown the video in the meeting',
      ['If', 'the', 'battery', 'were', 'stronger'],
      ['If', 'battery', 'were', 'stronger', 'shown'],
      'Usar If the battery was stronger, he would have shown the video in the meeting',
      'The result clause stays in the perfect form',
      'La batería actual habría permitido mostrarlo'
    ),
    tgt(
      'Si el mensaje fuera más corto, habrían contestado antes',
      'If the message were shorter, they would have replied sooner',
      ['If', 'the', 'message', 'were', 'shorter'],
      ['If', 'message', 'were', 'shorter', 'replied'],
      'Usar If the message was shorter, they would have replied sooner',
      'Mixed Conditionals are useful when present and past connect',
      'Un mensaje corto habría recibido respuesta antes'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El parque de la familia: Lo que cambia hoy y ayer', type: 'Integración', value: 'equilibrio' },
  [
    ctx(
      'El parque está lleno de sombra por la tarde',
      'The park is full of shade in the afternoon',
      ['park', 'full', 'shade'],
      ['park', 'full', 'shade'],
      'Perder el ambiente familiar',
      'The park should support both kinds of mixed conditionals',
      'El parque prepara los dos tiempos'
    ),
    ctx(
      'Los niños juegan cerca de una fuente',
      'The children play near a fountain',
      ['children', 'play', 'fountain'],
      ['children', 'play', 'fountain'],
      'Hacer la escena sin movimiento',
      'The fountain helps keep the scene alive',
      'La fuente deja el movimiento visible'
    ),
    ctx(
      'Los padres hablan mientras caminan lento',
      'The parents talk while they walk slowly',
      ['parents', 'talk', 'slowly'],
      ['parents', 'talk', 'slowly'],
      'Olvidar la conversación que une la historia',
      'The talk should feel like a reflection on choices',
      'La conversación sostiene la reflexión'
    ),
    ctx(
      'Un perro corre detrás de una pelota roja',
      'A dog runs after a red ball',
      ['dog', 'runs', 'ball'],
      ['dog', 'runs', 'ball'],
      'Cerrar sin un detalle dinámico',
      'The moving dog keeps the family scene active',
      'El perro da energía a la escena'
    ),
    tgt(
      'Si el abuelo hubiera dormido mejor, estaría menos cansado ahora',
      'If Grandpa had slept better, he would be less tired now',
      ['If', 'Grandpa', 'had', 'slept', 'better'],
      ['If', 'Grandpa', 'had', 'slept', 'tired', 'now'],
      'Usar If Grandpa slept better, he would be less tired now',
      'Past perfect in the condition leads to a present result',
      'Dormir mejor habría cambiado su estado actual'
    ),
    tgt(
      'Si mamá hubiera terminado antes, estaría más relajada ahora',
      'If Mom had finished earlier, she would be more relaxed now',
      ['If', 'Mom', 'had', 'finished', 'earlier'],
      ['If', 'Mom', 'had', 'finished', 'relaxed', 'now'],
      'Usar If Mom finished earlier, she would be more relaxed now',
      'The result is present relaxation caused by a past action',
      'Terminar antes habría dado calma'
    ),
    tgt(
      'Si los niños fueran más pacientes, habrían terminado el rompecabezas anoche',
      'If the children were more patient, they would have finished the puzzle last night',
      ['If', 'the', 'children', 'were', 'more', 'patient'],
      ['If', 'children', 'were', 'patient', 'finished'],
      'Usar If the children are more patient, they would have finished the puzzle last night',
      'Present unreal condition can lead to a past unreal result',
      'La paciencia presente habría ayudado anoche'
    ),
    tgt(
      'Si el mapa hubiera sido más claro, sabrían dónde ir ahora',
      'If the map had been clearer, they would know where to go now',
      ['If', 'the', 'map', 'had', 'been', 'clearer'],
      ['If', 'map', 'had', 'been', 'clearer', 'know'],
      'Usar If the map was clearer, they would know where to go now',
      'The mixed conditional ties a past problem to a present result',
      'El mapa claro cambiaría el rumbo de hoy'
    ),
    tgt(
      'Si la silla fuera más cómoda, habría descansado allí ayer',
      'If the chair were more comfortable, she would have rested there yesterday',
      ['If', 'the', 'chair', 'were', 'more', 'comfortable'],
      ['If', 'chair', 'were', 'comfortable', 'rested'],
      'Usar If the chair was more comfortable, she would have rested there yesterday',
      'Were keeps the present condition unreal and polite',
      'Una silla mejor habría cambiado el descanso de ayer'
    ),
    tgt(
      'Si el pastel hubiera estado listo, estarían contentos ahora',
      'If the cake had been ready, they would be happy now',
      ['If', 'the', 'cake', 'had', 'been', 'ready'],
      ['If', 'cake', 'had', 'been', 'ready', 'happy'],
      'Usar If the cake was ready, they would be happy now',
      'A finished past condition can explain a present feeling',
      'El pastel listo habría cambiado el ánimo'
    ),
    tgt(
      'Si tuvieran más tiempo, habrían limpiado la mesa anoche',
      'If they had more time, they would have cleaned the table last night',
      ['If', 'they', 'had', 'more', 'time'],
      ['If', 'they', 'had', 'time', 'cleaned'],
      'Usar If they have more time, they would have cleaned the table last night',
      'This form shows a present lack that affected a past action',
      'Más tiempo hoy habría cambiado el trabajo de anoche'
    ),
    tgt(
      'Si la música fuera más suave, dormirían mejor hoy',
      'If the music were softer, they would sleep better today',
      ['If', 'the', 'music', 'were', 'softer'],
      ['If', 'music', 'were', 'softer', 'sleep'],
      'Usar If the music is softer, they would sleep better today',
      'Mixed Conditionals can also keep the result in the present',
      'La música suave ayuda al descanso actual'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
