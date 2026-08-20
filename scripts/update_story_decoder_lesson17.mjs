import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[4];
const targetPattern = 'had + past participle';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['was', 'were', 'did', 'have', 'has'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Past Perfect';
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
  { title: 'La carta en la mochila: Un secreto antes del recreo', type: 'Descubrimiento', value: 'curiosidad' },
  [
    ctx(
      'Cuando la directora entró, el salón ya estaba en silencio.',
      'When the principal entered, the classroom was already quiet.',
      ['When', 'principal', 'entered'],
      ['classroom', 'already', 'quiet'],
      'Perder la idea de algo que ocurrió antes de otro hecho pasado.',
      'Primero ubica qué ya había pasado antes.',
      'La historia abre con el orden temporal claro.'
    ),
    tgt(
      'Ana había escondido la carta en la mochila.',
      'Ana had hidden the letter in her backpack.',
      ['Ana', 'had', 'hidden'],
      ['had', 'hidden', 'letter'],
      'Usar hid sin had.',
      'The action happened before another past moment.',
      'La carta ya estaba escondida antes del recreo.'
    ),
    tgt(
      'Ella había escrito el nombre con cuidado.',
      'She had written the name carefully.',
      ['She', 'had', 'written'],
      ['had', 'written', 'name'],
      'Usar wrote para esta estructura.',
      'Had + participle marks the earlier action.',
      'La escritura quedó hecha antes del aviso.'
    ),
    tgt(
      'El grupo había terminado el trabajo antes del recreo.',
      'The group had finished the work before break.',
      ['group', 'had', 'finished'],
      ['had', 'finished', 'work'],
      'Usar finished solo sin had.',
      'The finishing happened earlier than the main moment.',
      'El trabajo ya estaba completo.'
    ),
    ctx(
      'Después, todos miraron la mesa vacía.',
      'After that, everyone looked at the empty desk.',
      ['After', 'everyone', 'looked'],
      ['everyone', 'empty', 'desk'],
      'Cerrar sin la sensación de una pista previa.',
      'The scene should still feel ordered in time.',
      'El contexto mantiene la secuencia del recuerdo.'
    ),
    tgt(
      'Ana no había perdido la carta.',
      'Ana had not lost the letter.',
      ['Ana', 'had', 'not', 'lost'],
      ['had', 'not', 'lost'],
      'Usar did not lose para esta lección.',
      'Negative past perfect uses had not + participle.',
      'La negativa aclara que la carta seguía a salvo.'
    ),
    tgt(
      '¿Había visto alguien la nota?',
      'Had anyone seen the note?',
      ['Had', 'anyone', 'seen'],
      ['Had', 'seen', 'note'],
      'Usar did anyone see.',
      'Questions use had + subject + participle.',
      'La pregunta revisa un hecho anterior.'
    ),
    tgt(
      'Ana había hablado con la profesora antes.',
      'Ana had spoken with the teacher before.',
      ['Ana', 'had', 'spoken'],
      ['had', 'spoken', 'teacher'],
      'Usar spoke en vez de had spoken.',
      'Spoken is the past participle after had.',
      'La conversación ya ocurrió en un momento previo.'
    ),
    ctx(
      'La clase siguió tranquila y atenta.',
      'The class stayed calm and attentive.',
      ['class', 'stayed', 'calm'],
      ['class', 'calm', 'attentive'],
      'Cerrar la escena sin una idea de orden temporal.',
      'The ending should point to what was already true.',
      'El contexto sostiene el ambiente posterior.'
    ),
    tgt(
      'Los compañeros habían entendido la señal.',
      'Her classmates had understood the signal.',
      ['classmates', 'had', 'understood'],
      ['had', 'understood', 'signal'],
      'Usar understood sin had.',
      'The understanding happened earlier.',
      'La señal ya había sido comprendida.'
    ),
    tgt(
      'Ana había guardado el secreto por un día.',
      'Ana had kept the secret for a day.',
      ['Ana', 'had', 'kept'],
      ['had', 'kept', 'secret'],
      'Usar kept solo sin had.',
      'Had + participle shows the earlier state.',
      'El secreto quedó protegido antes del presente de la escena.'
    ),
    ctx(
      'Al final, la historia explicó qué pasó primero.',
      'In the end, the story explained what happened first.',
      ['story', 'explained', 'first'],
      ['story', 'happened', 'first'],
      'Cerrar sin marcar la prioridad temporal.',
      'The ending should explicitly show order.',
      'El cierre resume la lógica del tiempo perfecto.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El picnic en el parque: Todo preparado a tiempo', type: 'Uso natural', value: 'planificación' },
  [
    ctx(
      'La familia llegó al parque y notó que todo estaba listo.',
      'The family arrived at the park and noticed that everything was ready.',
      ['family', 'arrived', 'ready'],
      ['family', 'noticed', 'ready'],
      'Perder la idea de preparación anterior.',
      'Start with a result that already existed.',
      'La escena muestra una preparación previa.'
    ),
    tgt(
      'Maya había preparado los sándwiches.',
      'Maya had prepared the sandwiches.',
      ['Maya', 'had', 'prepared'],
      ['had', 'prepared', 'sandwiches'],
      'Usar prepared solo sin had.',
      'The sandwiches were ready before the picnic moment.',
      'La comida ya estaba hecha.'
    ),
    tgt(
      'Su hermano había traído agua fría.',
      'Her brother had brought cold water.',
      ['brother', 'had', 'brought'],
      ['had', 'brought', 'water'],
      'Usar bring en vez de had brought.',
      'Brought is the participle form here.',
      'El agua ya estaba disponible.'
    ),
    tgt(
      'La abuela había cortado la fruta.',
      'Grandma had cut the fruit.',
      ['Grandma', 'had', 'cut'],
      ['had', 'cut', 'fruit'],
      'Usar had cutted.',
      'Cut keeps the same form as past participle.',
      'La fruta ya estaba lista para comer.'
    ),
    ctx(
      'La manta estaba extendida bajo el árbol.',
      'The blanket was spread under the tree.',
      ['blanket', 'was', 'spread'],
      ['blanket', 'spread', 'tree'],
      'Cerrar sin mostrar el resultado de la preparación.',
      'The background should feel ready and calm.',
      'El contexto refleja el picnic listo.'
    ),
    tgt(
      'No habían olvidado los cubiertos.',
      'They had not forgotten the forks.',
      ['They', 'had', 'not', 'forgotten'],
      ['had', 'not', 'forgotten'],
      'Usar did not forget for this structure.',
      'Negative past perfect uses had not + participle.',
      'La preparación también incluye lo que evitaron olvidar.'
    ),
    tgt(
      '¿Habían comprado jugo también?',
      'Had they bought juice too?',
      ['Had', 'they', 'bought'],
      ['Had', 'bought', 'juice'],
      'Usar did they buy.',
      'Questions use had + subject + participle.',
      'La pregunta verifica una acción previa.'
    ),
    tgt(
      'Los niños habían lavado sus manos antes de comer.',
      'The children had washed their hands before eating.',
      ['children', 'had', 'washed'],
      ['had', 'washed', 'hands'],
      'Usar washed without had.',
      'The washing happened before the eating.',
      'La higiene quedó hecha antes del picnic.'
    ),
    ctx(
      'Luego, todos comieron con calma.',
      'Then, everyone ate calmly.',
      ['everyone', 'ate', 'calmly'],
      ['everyone', 'calmly', 'ate'],
      'Cerrar sin contraste temporal.',
      'The ending should keep the picnic relaxed.',
      'El contexto deja ver el momento principal.'
    ),
    tgt(
      'Maya había elegido un lugar tranquilo.',
      'Maya had chosen a quiet spot.',
      ['Maya', 'had', 'chosen'],
      ['had', 'chosen', 'spot'],
      'Usar chosen sin had.',
      'Chosen is the participle that fits here.',
      'La decisión ya estaba tomada antes de sentarse.'
    ),
    tgt(
      'Ellos habían dejado la basura en una bolsa.',
      'They had left the trash in a bag.',
      ['They', 'had', 'left'],
      ['had', 'left', 'trash'],
      'Usar had leaved.',
      'Left is the correct participle.',
      'La limpieza ya estaba resuelta.'
    ),
    ctx(
      'Al final, el parque quedó limpio y feliz.',
      'In the end, the park was clean and cheerful.',
      ['park', 'was', 'clean'],
      ['park', 'clean', 'cheerful'],
      'Cerrar sin una consecuencia clara.',
      'The ending should show the result of preparation.',
      'El cierre conecta preparación con resultado.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La maleta en el aeropuerto: Antes del anuncio', type: 'Integración', value: 'orden' },
  [
    ctx(
      'Cuando llegaron al aeropuerto, la pantalla ya mostraba otro vuelo.',
      'When they arrived at the airport, the screen was already showing another flight.',
      ['When', 'arrived', 'screen'],
      ['screen', 'showing', 'flight'],
      'Perder la idea de algo ya ocurrido antes.',
      'Think about what had happened before the main moment.',
      'La escena abre con una consecuencia previa.'
    ),
    tgt(
      'El padre había impreso los boletos.',
      'The father had printed the tickets.',
      ['father', 'had', 'printed'],
      ['had', 'printed', 'tickets'],
      'Usar printed solo sin had.',
      'The printing happened before arrival.',
      'Los boletos ya estaban listos.'
    ),
    tgt(
      'La madre había revisado los pasaportes.',
      'The mother had checked the passports.',
      ['mother', 'had', 'checked'],
      ['had', 'checked', 'passports'],
      'Usar had check.',
      'Had + past participle is required.',
      'La revisión ocurrió antes de la fila.'
    ),
    tgt(
      'Los niños habían puesto sus mochilas en orden.',
      'The children had arranged their backpacks.',
      ['children', 'had', 'arranged'],
      ['had', 'arranged', 'backpacks'],
      'Usar had arrange.',
      'Arranged is the past participle here.',
      'El orden ya existía antes de embarcar.'
    ),
    ctx(
      'La fila seguía avanzando sin prisa.',
      'The line was moving slowly.',
      ['line', 'was', 'moving'],
      ['line', 'moving', 'slowly'],
      'Cerrar sin una escena de espera.',
      'The background should still feel in motion.',
      'El contexto sostiene la fila del aeropuerto.'
    ),
    tgt(
      'No habían perdido el equipaje.',
      'They had not lost the luggage.',
      ['They', 'had', 'not', 'lost'],
      ['had', 'not', 'lost'],
      'Usar did not lose.',
      'Negative past perfect uses had not + participle.',
      'La negativa aclara que todo seguía en orden.'
    ),
    tgt(
      '¿Había llegado la confirmación por correo?',
      'Had the confirmation arrived by email?',
      ['Had', 'confirmation', 'arrived'],
      ['Had', 'arrived', 'email'],
      'Usar did the confirmation arrive.',
      'Questions use had + subject + participle.',
      'La pregunta revisa lo que ya se había resuelto.'
    ),
    tgt(
      'La aerolínea había cambiado la puerta.',
      'The airline had changed the gate.',
      ['airline', 'had', 'changed'],
      ['had', 'changed', 'gate'],
      'Usar changed sin had.',
      'The gate changed before the travelers noticed.',
      'El cambio ya estaba hecho.'
    ),
    ctx(
      'Después, todos esperaron sentados.',
      'After that, everyone waited seated.',
      ['After', 'everyone', 'waited'],
      ['everyone', 'waited', 'seated'],
      'Cerrar sin una transición clara.',
      'The ending should keep the airport mood calm.',
      'El contexto sigue dentro de la misma secuencia.'
    ),
    tgt(
      'Ellos habían encontrado los asientos correctos.',
      'They had found the correct seats.',
      ['They', 'had', 'found'],
      ['had', 'found', 'seats'],
      'Usar found solo sin had.',
      'Found is the participle after had.',
      'Los asientos correctos ya estaban localizados.'
    ),
    tgt(
      'La madre había guardado los documentos en una carpeta.',
      'The mother had kept the documents in a folder.',
      ['mother', 'had', 'kept'],
      ['had', 'kept', 'documents'],
      'Usar had keep.',
      'Kept is the participle form here.',
      'Los documentos ya estaban a salvo.'
    ),
    ctx(
      'Al final, el viaje empezó sin problemas.',
      'In the end, the trip started without problems.',
      ['trip', 'started', 'problems'],
      ['trip', 'started', 'problems'],
      'Cerrar sin un resultado claro.',
      'The ending should show that everything was prepared first.',
      'El cierre resume la preparación previa.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 17.');
