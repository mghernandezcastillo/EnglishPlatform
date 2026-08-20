import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[7];
const targetPattern = 'modal + have + past participle';
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Modal Perfect';
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
  { title: 'La bicicleta de Sara: Lo que pudo haber pasado', type: 'Descubrimiento', value: 'observación' },
  [
    ctx(
      'Sara encontró la bicicleta fuera de lugar',
      'Sara found the bike out of place',
      ['Sara', 'found', 'bike'],
      ['Sara', 'bike', 'place'],
      'Perder la idea de una pista pasada',
      'The scene should point to a past event that needs deduction',
      'La historia abre con una señal extraña'
    ),
    ctx(
      'La cadena estaba floja y la rueda tenía polvo',
      'The chain was loose and the wheel had dust',
      ['chain', 'loose', 'wheel'],
      ['chain', 'loose', 'wheel'],
      'Ordenar la escena como una lista sin conexión',
      'Keep the clues visible and simple',
      'Las pistas sugieren algo que ya ocurrió'
    ),
    ctx(
      'Un vecino dijo que había visto movimiento temprano',
      'A neighbor said he had seen movement early',
      ['neighbor', 'said', 'movement'],
      ['neighbor', 'movement', 'early'],
      'Ignorar la referencia al pasado que prepara la deducción',
      'A past report supports the modal perfect idea',
      'Alguien ya tiene una pista previa'
    ),
    ctx(
      'Todos miraron las marcas en el suelo',
      'Everyone looked at the marks on the ground',
      ['Everyone', 'looked', 'marks'],
      ['Everyone', 'marks', 'ground'],
      'Cerrar sin dejar claro que se va a inferir algo',
      'The marks should invite a guess about the past',
      'La escena queda lista para deducir'
    ),
    tgt(
      'Alguien debe de haber movido la bicicleta',
      'Someone must have moved the bike',
      ['Someone', 'must', 'have', 'moved'],
      ['must', 'moved', 'bike', 'Someone'],
      'Usar Someone moved the bike sin modal perfect',
      'Must have + past participle shows a strong deduction',
      'La primera deducción es directa'
    ),
    tgt(
      'La llave quizá se haya caído al suelo',
      'The key might have fallen to the ground',
      ['key', 'might', 'have', 'fallen', 'ground'],
      ['might', 'fallen', 'ground', 'key'],
      'Usar might fall to the ground sin hablar del pasado',
      'Might have + past participle keeps the guess in the past',
      'La llave explica el desorden'
    ),
    tgt(
      'El vecino podría haber visto al responsable',
      'The neighbor could have seen the person responsible',
      ['neighbor', 'could', 'have', 'seen'],
      ['could', 'seen', 'neighbor', 'responsible'],
      'Usar the neighbor could see the person responsible',
      'Could have + past participle softens the past guess',
      'El testigo potencial aparece en la escena'
    ),
    tgt(
      'Deberían haber llamado antes',
      'They should have called earlier',
      ['They', 'should', 'have', 'called'],
      ['should', 'called', 'earlier', 'They'],
      'Escribir They should call earlier',
      'Should have + past participle shows a past expectation',
      'La llamada tardía deja una lección'
    ),
    tgt(
      'Tal vez alguien haya abierto la puerta lateral',
      'Someone may have opened the side door',
      ['Someone', 'may', 'have', 'opened'],
      ['may', 'opened', 'door', 'Someone'],
      'Usar Someone may open the side door',
      'May have + past participle keeps the possibility in the past',
      'La puerta lateral abre otra hipótesis'
    ),
    tgt(
      '¿Podría el viento haber empujado el cartel?',
      'Could the wind have pushed the sign?',
      ['Could', 'the', 'wind', 'have', 'pushed'],
      ['Could', 'pushed', 'sign', 'wind'],
      'Escribir Could the wind pushed the sign?',
      'Questions keep modal + have + past participle',
      'La fuerza del viento se pone a prueba'
    ),
    tgt(
      'El equipo no debió haber dejado la entrada abierta',
      'The team should not have left the entrance open',
      ['The', 'team', 'should', 'not', 'have', 'left'],
      ['should', 'not', 'left', 'entrance'],
      'Usar The team should not leave the entrance open',
      'Negative modal perfect still refers to a past action',
      'La advertencia apunta a un error pasado'
    ),
    tgt(
      'Sara quizá haya encontrado la pista correcta',
      'Sara might have found the right clue',
      ['Sara', 'might', 'have', 'found', 'clue'],
      ['might', 'found', 'clue', 'Sara'],
      'Usar Sara might find the right clue',
      'Might have + past participle closes the investigation',
      'El cierre deja abierta la posibilidad correcta'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El informe tardío: Lo que debieron hacer', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La oficina estaba cerrada cuando llegó el correo',
      'The office was closed when the email arrived',
      ['office', 'closed', 'email'],
      ['office', 'closed', 'email'],
      'Perder el vínculo entre cierre y correo',
      'The closed office creates a past problem',
      'La escena laboral sitúa el problema'
    ),
    ctx(
      'El informe debía salir antes del mediodía',
      'The report was supposed to go out before noon',
      ['report', 'supposed', 'noon'],
      ['report', 'supposed', 'noon'],
      'Ignorar la fecha límite del informe',
      'The deadline sets up the modal perfect reaction',
      'La presión del tiempo ya está presente'
    ),
    ctx(
      'Marcos revisó la bandeja de entrada dos veces',
      'Marcos checked the inbox twice',
      ['Marcos', 'checked', 'inbox'],
      ['Marcos', 'checked', 'inbox'],
      'Olvidar que el problema ya ocurrió',
      'A repeated check supports the past deduction',
      'El esfuerzo ya pasó y aún no resuelve todo'
    ),
    ctx(
      'La jefa quería una respuesta rápida',
      'The boss wanted a quick answer',
      ['boss', 'wanted', 'answer'],
      ['boss', 'wanted', 'answer'],
      'Cerrar sin tensión de responsabilidad',
      'The manager’s pressure should remain visible',
      'La urgencia sube la exigencia'
    ),
    tgt(
      'Marcos debería haber enviado el archivo antes',
      'Marcos should have sent the file earlier',
      ['Marcos', 'should', 'have', 'sent'],
      ['should', 'sent', 'file', 'Marcos'],
      'Usar Marcos should send the file earlier',
      'Should have + past participle expresses past regret or advice',
      'La culpa o el consejo queda claro'
    ),
    tgt(
      'Tal vez olvidó adjuntar la portada',
      'He may have forgotten to attach the cover page',
      ['He', 'may', 'have', 'forgotten', 'attach'],
      ['may', 'forgotten', 'cover', 'page'],
      'Usar He may forget to attach the cover page',
      'May have + past participle keeps the mistake in the past',
      'El olvido explica el retraso'
    ),
    tgt(
      'La jefa podría haber recibido el borrador',
      'The boss could have received the draft',
      ['The', 'boss', 'could', 'have', 'received'],
      ['could', 'received', 'draft', 'boss'],
      'Escribir The boss could receive the draft',
      'Could have + past participle shows a possible past result',
      'El borrador quizás sí llegó'
    ),
    tgt(
      'Ellos debieron haber confirmado el horario',
      'They must have confirmed the schedule',
      ['They', 'must', 'have', 'confirmed'],
      ['must', 'confirmed', 'schedule', 'They'],
      'Usar They must confirm the schedule',
      'Must have + past participle signals a strong conclusion',
      'La confirmación debió ocurrir antes'
    ),
    tgt(
      '¿Podría haberlo arreglado a tiempo?',
      'Could he have fixed it in time?',
      ['Could', 'he', 'have', 'fixed', 'time'],
      ['Could', 'fixed', 'time', 'he'],
      'Escribir Could he fixed it in time?',
      'Questions keep modal + have + past participle',
      'La pregunta busca una solución pasada'
    ),
    tgt(
      'No debieron haber borrado el mensaje',
      'They should not have deleted the message',
      ['They', 'should', 'not', 'have', 'deleted'],
      ['should', 'not', 'deleted', 'message'],
      'Usar They should not delete the message',
      'Negative modal perfect refers back to a completed action',
      'El error ya está hecho'
    ),
    tgt(
      'La secretaria quizá haya guardado una copia',
      'The secretary may have saved a copy',
      ['The', 'secretary', 'may', 'have', 'saved'],
      ['may', 'saved', 'copy', 'secretary'],
      'Usar The secretary may save a copy',
      'May have + past participle keeps the option open',
      'La copia puede haber salvado el día'
    ),
    tgt(
      'Ellos quizá ya hayan terminado la tarea',
      'They might have finished the task already',
      ['They', 'might', 'have', 'finished', 'task'],
      ['might', 'finished', 'task', 'already'],
      'Usar They might finish the task already',
      'Might have + past participle works for uncertain past completion',
      'El cierre deja una duda resuelta'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La fiesta sorpresa: Lo que nadie vio', type: 'Integración', value: 'sorpresa' },
  [
    ctx(
      'La sala estaba vacía por la tarde',
      'The room was empty in the afternoon',
      ['room', 'empty', 'afternoon'],
      ['room', 'empty', 'afternoon'],
      'Perder la sensación de espacio antes de la sorpresa',
      'The empty room should make the clues stand out',
      'El lugar vacío deja espacio para las pistas'
    ),
    ctx(
      'Había globos escondidos detrás de una caja',
      'There were balloons hidden behind a box',
      ['balloons', 'hidden', 'box'],
      ['balloons', 'hidden', 'box'],
      'Hacer la escena demasiado literal',
      'Hidden objects should feel like clues',
      'Los globos anuncian que algo pasó'
    ),
    ctx(
      'Ana y Leo hablaban en voz baja',
      'Ana and Leo spoke in low voices',
      ['Ana', 'Leo', 'spoke'],
      ['Ana', 'Leo', 'voices'],
      'Ignorar el tono reservado de la conversación',
      'Quiet conversation supports the hidden action',
      'La conversación baja sostiene el misterio'
    ),
    ctx(
      'Nadie quería arruinar la sorpresa',
      'No one wanted to ruin the surprise',
      ['No', 'one', 'wanted'],
      ['No', 'wanted', 'surprise'],
      'Cerrar la escena sin tensión narrativa',
      'The surprise should stay secret for the modal guesses',
      'La meta de ocultar todo queda clara'
    ),
    tgt(
      'Ana debe de haber comprado el pastel',
      'Ana must have bought the cake',
      ['Ana', 'must', 'have', 'bought'],
      ['must', 'bought', 'cake', 'Ana'],
      'Usar Ana bought the cake',
      'Must have + past participle makes a strong guess about the past',
      'El pastel aparece como una deducción fuerte'
    ),
    tgt(
      'Leo quizá haya escondido las velas',
      'Leo might have hidden the candles',
      ['Leo', 'might', 'have', 'hidden', 'candles'],
      ['might', 'hidden', 'candles', 'Leo'],
      'Usar Leo might hide the candles',
      'Might have + past participle keeps the guess soft',
      'Las velas siguen siendo un secreto'
    ),
    tgt(
      'Los invitados podrían haber llegado temprano',
      'The guests could have arrived early',
      ['guests', 'could', 'have', 'arrived', 'early'],
      ['could', 'arrived', 'early', 'guests'],
      'Usar The guests could arrive early',
      'Could have + past participle talks about a possible past event',
      'La llegada temprana encaja con la sorpresa'
    ),
    tgt(
      'El grupo debió haber guardado silencio',
      'The group should have kept quiet',
      ['group', 'should', 'have', 'kept'],
      ['should', 'kept', 'quiet', 'group'],
      'Usar The group should keep quiet',
      'Should have + past participle gives a past expectation',
      'El silencio era parte del plan'
    ),
    tgt(
      'Tal vez alguien haya dejado la ventana abierta',
      'Someone may have left the window open',
      ['Someone', 'may', 'have', 'left', 'window'],
      ['may', 'left', 'window', 'open'],
      'Usar Someone may leave the window open',
      'May have + past participle keeps the possibility in the past',
      'La ventana abierta explica el movimiento'
    ),
    tgt(
      '¿Podría la música haber empezado antes?',
      'Could the music have started earlier?',
      ['Could', 'the', 'music', 'have', 'started'],
      ['Could', 'started', 'music', 'earlier'],
      'Escribir Could the music started earlier?',
      'Questions keep the modal perfect order',
      'La música da otra pista de tiempo'
    ),
    tgt(
      'No debieron haber contado la sorpresa',
      'They should not have revealed the surprise',
      ['They', 'should', 'not', 'have', 'revealed'],
      ['should', 'not', 'revealed', 'surprise'],
      'Usar They should not reveal the surprise',
      'Negative modal perfect keeps the finished mistake in view',
      'La revelación habría arruinado todo'
    ),
    tgt(
      'Quizá la familia haya disfrutado de la noche',
      'The family might have enjoyed the night',
      ['The', 'family', 'might', 'have', 'enjoyed'],
      ['might', 'enjoyed', 'night', 'family'],
      'Usar The family might enjoy the night',
      'Might have + past participle closes the story softly',
      'El final deja una imagen positiva'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
