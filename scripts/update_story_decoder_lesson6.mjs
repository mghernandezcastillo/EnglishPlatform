import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[0].lessons[5];
const targetPattern = 'Wh-word + auxiliary/be + subject + verb/complement?';
const ctxPattern = 'estructura previamente aprendida / orden natural de la oración';
const sharedDistractors = ['do', 'did', 'can', 'will', 'could'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Preguntas básicas con Wh-';
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
  tutor_explanation
});

const tgt = (es, en, focus_tokens, vocabulary_candidates, common_errors, hints, tutor_explanation) => ({
  role: 'target',
  es,
  en,
  focus_tokens,
  vocabulary_candidates,
  common_errors,
  hints,
  tutor_explanation
});

applyStory(
  lesson.stories[0],
  { title: 'La huerta escolar: Preguntas claras', type: 'Descubrimiento', value: 'curiosidad' },
  [
    ctx(
      'Nora y Leo están en la huerta de la escuela.',
      'Nora and Leo are in the school garden.',
      ['Nora', 'and', 'Leo', 'are'],
      ['Nora', 'Leo', 'garden'],
      'Traducir la escena sin ordenar las ideas.',
      'Primero ubica a las personas y el lugar.',
      'La huerta da un escenario natural para preguntas con wh- y verbos simples.'
    ),
    tgt(
      '¿Dónde trabaja Nora hoy?',
      'Where does Nora work today?',
      ['Where', 'does', 'Nora'],
      ['work', 'today'],
      'Olvidar does o cambiar work por works.',
      'Wh-word + auxiliary + subject + base verb.',
      'La pregunta comienza con where y mantiene la base form después de does.'
    ),
    tgt(
      '¿Qué necesita Leo para plantar las semillas?',
      'What does Leo need to plant the seeds?',
      ['What', 'does', 'Leo'],
      ['need', 'plant', 'seeds'],
      'Conjugar need o perder el auxiliar.',
      'El verbo principal se queda en base form.',
      'La pregunta mezcla wh- con do / does y un complemento claro.'
    ),
    tgt(
      '¿Cuándo empieza la clase?',
      'When does the class start?',
      ['When', 'does', 'the', 'class'],
      ['class', 'start'],
      'Agregar una forma verbal extra.',
      'When + does + subject + base verb.',
      'La pregunta fija la secuencia completa de un wh- con do / does.'
    ),
    ctx(
      'Antes de seguir, revisan la tierra y el agua.',
      'Before continuing, they check the soil and water.',
      ['Before', 'continuing', 'they', 'check'],
      ['soil', 'water', 'continuing'],
      'Perder la transición entre preguntas y contexto.',
      'La historia debe fluir entre pregunta y acción.',
      'La escena sigue desarrollándose mientras el estudiante practica la forma interrogativa.'
    ),
    tgt(
      '¿Por qué está Nora contenta?',
      'Why is Nora happy?',
      ['Why', 'is', 'Nora'],
      ['happy', 'Nora'],
      'Usar do en vez de is.',
      'Con be, el auxiliar va directo después del wh-word.',
      'La pregunta usa be como auxiliar y mantiene el orden correcto.'
    ),
    tgt(
      '¿Cómo llega Leo a la huerta?',
      'How does Leo get to the garden?',
      ['How', 'does', 'Leo'],
      ['get', 'garden'],
      'Agregar gets en vez de get.',
      'How + does + subject + base verb.',
      'La pregunta mantiene el verbo get en base form.'
    ),
    tgt(
      '¿Dónde están las herramientas?',
      'Where are the tools?',
      ['Where', 'are', 'the', 'tools'],
      ['tools'],
      'Usar is con sujeto plural.',
      'Con plural, usa are.',
      'La pregunta con be ayuda a contrastar sujeto singular y plural.'
    ),
    ctx(
      'El sol baja, pero el trabajo continúa.',
      'The sun goes down, but the work continues.',
      ['sun', 'goes', 'down'],
      ['sun', 'work', 'continues'],
      'Cerrar la escena sin ritmo narrativo.',
      'La historia puede avanzar con calma.',
      'La huerta sigue siendo el centro de la escena mientras se plantean más preguntas.'
    ),
    tgt(
      '¿Qué está claro al final?',
      'What is clear at the end?',
      ['What', 'is', 'clear'],
      ['clear', 'end'],
      'Usar una estructura que no suena natural.',
      'Con adjetivos y estados, be suele ser la clave.',
      'La pregunta final sigue el patrón wh- con be de forma natural.'
    ),
    tgt(
      '¿Cómo está la tierra ahora?',
      'How is the soil now?',
      ['How', 'is', 'the', 'soil'],
      ['soil', 'now'],
      'Usar do cuando la pregunta pide be.',
      'Con estados y descripciones, be funciona mejor.',
      'La pregunta con how e is cierra el bloque de forma simple.'
    ),
    ctx(
      'Al final, anotan las respuestas y cierran la puerta.',
      'In the end, they write down the answers and close the gate.',
      ['write', 'down', 'answers'],
      ['write', 'answers', 'gate'],
      'Cerrar la historia sin sensación de progreso.',
      'La última línea debe sonar natural y completa.',
      'El cierre deja una respuesta clara y ordenada.'
    )
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La panadería del centro: Lo que quieren saber', type: 'Uso natural', value: 'observación' },
  [
    ctx(
      'Marta y Diego están en la panadería temprano.',
      'Marta and Diego are in the bakery early.',
      ['Marta', 'and', 'Diego', 'are'],
      ['Marta', 'Diego', 'bakery'],
      'Traducir la escena de forma demasiado literal.',
      'Primero ubica el lugar y a las personas.',
      'La panadería ofrece otro escenario para practicar wh- con preguntas simples.'
    ),
    tgt(
      '¿Dónde trabaja Marta hoy?',
      'Where does Marta work today?',
      ['Where', 'does', 'Marta'],
      ['work', 'today'],
      'Omitir does o cambiar work por works.',
      'Where + does + subject + base verb.',
      'La pregunta mantiene la base form después del auxiliar.'
    ),
    tgt(
      '¿Qué necesita Diego para el horno?',
      'What does Diego need for the oven?',
      ['What', 'does', 'Diego'],
      ['need', 'oven'],
      'Conjugar need o perder la estructura.',
      'El verbo principal sigue en base form.',
      'La combinación wh- + does ayuda a construir preguntas claras.'
    ),
    tgt(
      '¿Cuándo abre la panadería?',
      'When does the bakery open?',
      ['When', 'does', 'the', 'bakery'],
      ['open', 'bakery'],
      'Usar opens en vez de open.',
      'After does, the verb stays in base form.',
      'La pregunta marca bien el orden interrogativo con does.'
    ),
    ctx(
      'Antes de servir, revisan la masa y las tazas.',
      'Before serving, they check the dough and cups.',
      ['Before', 'serving', 'they', 'check'],
      ['dough', 'cups', 'serving'],
      'Perder el contexto de preparación.',
      'La escena debe sonar como una rutina real.',
      'El escenario de panadería cambia la historia pero mantiene la práctica del bloque.'
    ),
    tgt(
      '¿Por qué está Diego cansado?',
      'Why is Diego tired?',
      ['Why', 'is', 'Diego'],
      ['tired', 'Diego'],
      'Usar does cuando la estructura necesita be.',
      'With be, the auxiliary is comes immediately after why.',
      'La pregunta usa be como núcleo y no necesita do / does.'
    ),
    tgt(
      '¿Cómo prepara Marta el pan?',
      'How does Marta prepare the bread?',
      ['How', 'does', 'Marta'],
      ['prepare', 'bread'],
      'Agregar -s al verbo principal.',
      'How + does + subject + base verb.',
      'La pregunta mantiene la base form y refuerza la estructura interrogativa.'
    ),
    tgt(
      '¿Dónde están los pedidos?',
      'Where are the orders?',
      ['Where', 'are', 'the', 'orders'],
      ['orders'],
      'Usar is con sujeto plural.',
      'Plural subject means are.',
      'La pregunta con be contrasta singular y plural de manera sencilla.'
    ),
    ctx(
      'La mañana avanza y llegan más clientes.',
      'The morning goes on and more customers arrive.',
      ['morning', 'goes', 'on'],
      ['morning', 'customers', 'arrive'],
      'Cerrar la escena sin un cambio de ritmo.',
      'La historia sigue creciendo con calma.',
      'La panadería se vuelve más activa mientras siguen las preguntas.'
    ),
    tgt(
      '¿Cuál es la tarea principal?',
      'What is the main task?',
      ['What', 'is', 'the', 'main'],
      ['main', 'task'],
      'Usar una estructura que no suena natural.',
      'Con be, the subject and complement stay clear.',
      'La pregunta final sigue el patrón wh- con be de forma natural.'
    ),
    tgt(
      '¿Cómo está el ambiente ahora?',
      'How is the atmosphere now?',
      ['How', 'is', 'the', 'atmosphere'],
      ['atmosphere', 'now'],
      'Usar do cuando el verbo debe ser be.',
      'Con estados y descripciones, be encaja mejor.',
      'La pregunta con how e is cierra el patrón con claridad.'
    ),
    ctx(
      'Al final, la fila es corta y todos sonríen.',
      'In the end, the line is short and everyone smiles.',
      ['line', 'is', 'short'],
      ['line', 'short', 'smiles'],
      'Terminar la historia de forma plana.',
      'La última línea debe sentirse completa y positiva.',
      'La escena final deja una sensación de movimiento y orden.'
    )
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La estación del viaje: Respuestas rápidas', type: 'Integración', value: 'organización' },
  [
    ctx(
      'Ana y Bruno están en la estación para un viaje.',
      'Ana and Bruno are at the station for a trip.',
      ['Ana', 'and', 'Bruno', 'are'],
      ['Ana', 'Bruno', 'station', 'trip'],
      'Traducir la escena de manera artificial.',
      'Primero ubica el lugar y la intención de la historia.',
      'La estación aporta un contexto distinto y práctico para las preguntas wh-.'
    ),
    tgt(
      '¿Dónde espera Ana?',
      'Where does Ana wait?',
      ['Where', 'does', 'Ana'],
      ['wait', 'station'],
      'Omitir does o usar waits.',
      'Where + does + subject + base verb.',
      'La pregunta utiliza do / does con verbo base y sujeto claro.'
    ),
    tgt(
      '¿Qué necesita Bruno para el viaje?',
      'What does Bruno need for the trip?',
      ['What', 'does', 'Bruno'],
      ['need', 'trip'],
      'Conjugar need de forma incorrecta.',
      'La base form después de does es esencial.',
      'El complemento de la pregunta se mantiene simple y claro.'
    ),
    tgt(
      '¿Cuándo sale el tren?',
      'When does the train leave?',
      ['When', 'does', 'the', 'train'],
      ['leave', 'train'],
      'Usar leaves en lugar de leave.',
      'Does + subject + base verb.',
      'La pregunta sigue la secuencia interrogativa con does.'
    ),
    ctx(
      'Antes de abordar, revisan los boletos y las mochilas.',
      'Before boarding, they check the tickets and backpacks.',
      ['Before', 'boarding', 'they', 'check'],
      ['tickets', 'backpacks', 'boarding'],
      'Perder el ritmo de preparación del viaje.',
      'La historia debe sonar como una salida real.',
      'El viaje permite una segunda capa de contexto sin repetir escenas anteriores.'
    ),
    tgt(
      '¿Por qué está Ana tranquila?',
      'Why is Ana calm?',
      ['Why', 'is', 'Ana'],
      ['calm', 'Ana'],
      'Usar does cuando la estructura necesita be.',
      'With be, the auxiliary is comes immediately after why.',
      'La pregunta con be mantiene la estructura corta y natural.'
    ),
    tgt(
      '¿Cómo llega el grupo al andén?',
      'How does the group get to the platform?',
      ['How', 'does', 'the', 'group'],
      ['get', 'platform'],
      'Agregar gets en vez de get.',
      'How + does + subject + base verb.',
      'La pregunta combina wh- con do / does y verbo base.'
    ),
    tgt(
      '¿Dónde están las mochilas?',
      'Where are the backpacks?',
      ['Where', 'are', 'the', 'backpacks'],
      ['backpacks'],
      'Usar is con un plural.',
      'Plurals require are.',
      'La pregunta con be refuerza la concordancia básica.'
    ),
    ctx(
      'El anuncio cambia, pero el plan sigue igual.',
      'The announcement changes, but the plan stays the same.',
      ['announcement', 'changes', 'plan'],
      ['announcement', 'plan', 'same'],
      'Cortar la historia antes de tiempo.',
      'La escena debe mover al estudiante hacia el cierre.',
      'La estación sigue viva y mantiene el interés mientras se practican preguntas.'
    ),
    tgt(
      '¿Qué queda listo primero?',
      'What is ready first?',
      ['What', 'is', 'ready'],
      ['ready', 'first'],
      'Usar una estructura que no suena natural.',
      'Con be, the subject and complement stay clear.',
      'La pregunta final cierra el ciclo con be y una idea simple.'
    ),
    tgt(
      '¿Cómo está el reloj ahora?',
      'How is the clock now?',
      ['How', 'is', 'the', 'clock'],
      ['clock', 'now'],
      'Usar do cuando el verbo debe ser be.',
      'Con descripciones de estado, be funciona mejor.',
      'La pregunta final con how e is deja un cierre claro.'
    ),
    ctx(
      'Al final, suben al tren con una sonrisa.',
      'In the end, they board the train with a smile.',
      ['board', 'the', 'train'],
      ['board', 'train', 'smile'],
      'Cerrar la escena sin una sensación de avance.',
      'La última línea debe sonar completa y simple.',
      'El final deja sensación de movimiento y preparación para el siguiente momento.'
    )
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 6.');
