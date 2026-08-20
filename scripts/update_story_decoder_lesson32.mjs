import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[5];
const targetPattern = 'be able to + base; be allowed to + base; be supposed to + base';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['can', 'could', 'must', 'should', 'may', 'might', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Be able to / allowed to / supposed to';
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
  { title: 'El jardín del barrio: Permisos y pasos claros', type: 'Descubrimiento', value: 'cooperación' },
  [
    ctx(
      'Marta y Daniel llegan al jardín comunitario antes de abrir',
      'Marta and Daniel arrive at the community garden before it opens',
      ['Marta', 'Daniel', 'arrive'],
      ['garden', 'arrive', 'opens'],
      'Perder la idea de una escena de inicio antes de las acciones objetivo',
      'Use the opening scene to anchor who is acting and where they are',
      'La historia abre con una llegada tranquila y clara'
    ),
    ctx(
      'Hay guantes, regaderas y una caja de semillas junto a la puerta',
      'There are gloves, watering cans, and a box of seeds by the gate',
      ['gloves', 'watering', 'seeds'],
      ['gloves', 'watering', 'seeds', 'gate'],
      'Ordenar como si fuera una lista literal del español',
      'Keep the object list natural in English',
      'El entorno muestra los objetos del jardín'
    ),
    ctx(
      'La vecina les recuerda las reglas del lugar',
      'A neighbor reminds them of the rules',
      ['neighbor', 'reminds', 'rules'],
      ['neighbor', 'rules', 'reminds'],
      'Ignorar las reglas y quedarse solo con la acción',
      'The reminder of rules prepares the permission contrast',
      'La regla aparece antes del ejercicio central'
    ),
    ctx(
      'Todos quieren trabajar sin confusión',
      'Everyone wants to work without confusion',
      ['Everyone', 'wants', 'work'],
      ['Everyone', 'work', 'confusion'],
      'Cerrar sin preparar el contraste entre capacidad, permiso y expectativa',
      'The mood should support the modal contrast that follows',
      'El contexto deja lista la práctica'
    ),
    tgt(
      'Marta es capaz de levantar la caja grande',
      'Marta is able to lift the big box',
      ['Marta', 'is', 'able', 'to', 'lift'],
      ['able', 'lift', 'box', 'Marta'],
      'Usar can lift en lugar de be able to lift',
      'Ability takes be able to + base verb',
      'La línea presenta capacidad real'
    ),
    tgt(
      'Daniel tiene permiso para abrir la puerta lateral',
      'Daniel is allowed to open the side door',
      ['Daniel', 'is', 'allowed', 'to', 'open'],
      ['allowed', 'open', 'door', 'Daniel'],
      'Quitar to o cambiar allowed por can',
      'Permission uses be allowed to + base verb',
      'La puerta lateral marca permiso'
    ),
    tgt(
      'Se supone que riegan las plantas antes del mediodía',
      'They are supposed to water the plants before noon',
      ['They', 'are', 'supposed', 'to', 'water'],
      ['supposed', 'water', 'plants', 'noon'],
      'Usar must water instead of be supposed to water',
      'Expectation uses be supposed to + base verb',
      'La rutina del jardín introduce expectativa'
    ),
    tgt(
      'Marta fue capaz de terminar la primera fila',
      'Marta was able to finish the first row',
      ['Marta', 'was', 'able', 'to', 'finish'],
      ['able', 'finish', 'row', 'Marta'],
      'Usar could finish sin mantener la idea de logro puntual',
      'Was able to keeps the completed achievement clear',
      'La capacidad ya ocurrió y se completó'
    ),
    tgt(
      'Daniel recibió permiso para usar la manguera por diez minutos',
      'Daniel was allowed to use the hose for ten minutes',
      ['Daniel', 'was', 'allowed', 'to', 'use'],
      ['allowed', 'use', 'hose', 'Daniel'],
      'Escribir Daniel can use the hose',
      'Was allowed to shows permission in the past',
      'El tiempo limitado refuerza el permiso'
    ),
    tgt(
      'No tienen permiso para recoger los tomates todavía',
      'They are not allowed to pick the tomatoes yet',
      ['They', 'are', 'not', 'allowed', 'to'],
      ['not', 'allowed', 'pick', 'tomatoes'],
      'Olvidar not o reemplazar allowed por can',
      'Negative permission still keeps be allowed to + base verb',
      'La prohibición también forma parte del tema'
    ),
    tgt(
      '¿Se supone que limpian las herramientas después del almuerzo?',
      'Are they supposed to clean the tools after lunch?',
      ['Are', 'they', 'supposed', 'to', 'clean'],
      ['supposed', 'clean', 'tools', 'lunch'],
      'Escribir Are they suppose to... o Do they supposed to...',
      'Questions keep the same be supposed to pattern',
      'La pregunta verifica la expectativa'
    ),
    tgt(
      'Al final, son capaces de trabajar como un equipo',
      'By the end, they are able to work as a team',
      ['they', 'are', 'able', 'to', 'work'],
      ['able', 'work', 'team', 'end'],
      'Usar can work as a team sin la estructura objetivo',
      'End the story by showing completed ability',
      'El cierre resume la cooperación del grupo'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El proyecto escolar: Reglas y resultados', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'El profesor deja una lista clara en la pared',
      'The teacher leaves a clear list on the wall',
      ['teacher', 'leaves', 'list'],
      ['teacher', 'list', 'clear'],
      'Perder la idea de instrucciones visibles',
      'The wall list sets up rules and limits',
      'La escena escolar prepara las reglas'
    ),
    ctx(
      'La sala de informática abre por turnos',
      'The computer room opens in shifts',
      ['computer', 'room', 'shifts'],
      ['computer', 'room', 'shifts'],
      'Traducir turno por turno de forma literal y forzada',
      'Keep the schedule simple and natural',
      'El horario crea el marco de permiso'
    ),
    ctx(
      'El grupo quiere terminar sin romper las reglas',
      'The group wants to finish without breaking the rules',
      ['group', 'wants', 'finish'],
      ['group', 'rules', 'finish'],
      'Ignorar la tensión entre meta y reglas',
      'The story should show a goal inside a limit',
      'La responsabilidad queda clara desde el inicio'
    ),
    ctx(
      'Cada estudiante sabe lo que debe hacer',
      'Each student knows what to do',
      ['Each', 'student', 'knows'],
      ['Each', 'student', 'do'],
      'Hacer una frase demasiado larga y rígida',
      'This short line keeps the pace moving',
      'El reparto de tareas ya está decidido'
    ),
    tgt(
      'Sofía es capaz de organizar las notas rápidamente',
      'Sofia is able to organize the notes quickly',
      ['Sofia', 'is', 'able', 'to', 'organize'],
      ['able', 'organize', 'notes', 'quickly'],
      'Usar can organize en lugar de be able to organize',
      'Ability uses be able to + base verb',
      'La organización es una habilidad concreta'
    ),
    tgt(
      'El equipo tiene permiso para usar la sala de informática después de clase',
      'The team is allowed to use the computer room after class',
      ['team', 'is', 'allowed', 'to', 'use'],
      ['allowed', 'use', 'computer', 'room'],
      'Olvidar to o cambiar allowed por can',
      'Permission still depends on be allowed to + base verb',
      'La sala de informática marca el permiso'
    ),
    tgt(
      'Se supone que envían el archivo antes del viernes',
      'They are supposed to send the file before Friday',
      ['They', 'are', 'supposed', 'to', 'send'],
      ['supposed', 'send', 'file', 'Friday'],
      'Usar must send instead of be supposed to send',
      'Expectation uses be supposed to + base verb',
      'La fecha límite activa la expectativa'
    ),
    tgt(
      'Nico fue capaz de encontrar la foto que faltaba',
      'Nico was able to find the missing photo',
      ['Nico', 'was', 'able', 'to', 'find'],
      ['able', 'find', 'photo', 'missing'],
      'Usar could find sin marcar el logro puntual',
      'Was able to shows a completed achievement',
      'El hallazgo del archivo resuelve el problema'
    ),
    tgt(
      'Los estudiantes recibieron permiso para hacer preguntas al final',
      'The students were allowed to ask questions at the end',
      ['students', 'were', 'allowed', 'to', 'ask'],
      ['allowed', 'ask', 'questions', 'end'],
      'Reemplazar were allowed to por could ask',
      'Past permission keeps the same structure',
      'Las preguntas solo son posibles al final'
    ),
    tgt(
      '¿Se supone que presentan primero?',
      'Are they supposed to present first?',
      ['Are', 'they', 'supposed', 'to', 'present'],
      ['supposed', 'present', 'first'],
      'Escribir Do they supposed to present first?',
      'Questions about expectation keep supposed to',
      'La duda organiza el orden de presentación'
    ),
    tgt(
      'El grupo no tiene permiso para copiar el texto',
      'The group is not allowed to copy the text',
      ['The', 'group', 'is', 'not', 'allowed'],
      ['not', 'allowed', 'copy', 'text'],
      'Escribir The group can not copy the text',
      'Negative permission stays with be allowed to',
      'La regla escolar también puede prohibir'
    ),
    tgt(
      'Para la tarde, van a ser capaces de terminar el póster',
      'By the afternoon, they will be able to finish the poster',
      ['By', 'the', 'afternoon', 'they', 'will', 'be', 'able', 'to', 'finish'],
      ['able', 'finish', 'poster', 'afternoon'],
      'Usar will can finish instead of will be able to finish',
      'Future ability uses will be able to + base verb',
      'El cierre mira el resultado futuro'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La pequeña panadería: Lo que tocaba hacer', type: 'Integración', value: 'disciplina' },
  [
    ctx(
      'La panadería abre antes del amanecer y huele a pan caliente',
      'The bakery opens before sunrise and smells like warm bread',
      ['bakery', 'opens', 'sunrise'],
      ['bakery', 'warm', 'bread'],
      'Perder el ambiente temprano de la panadería',
      'The opening scene should feel busy but calm',
      'La mañana empieza con trabajo real'
    ),
    ctx(
      'Ana y Leo revisan las bandejas y el horno',
      'Ana and Leo check the trays and the oven',
      ['Ana', 'Leo', 'check'],
      ['Ana', 'Leo', 'oven'],
      'Ordenar la escena como una lista mecánica',
      'Keep the work tools visible and simple',
      'Las herramientas del trabajo quedan a la vista'
    ),
    ctx(
      'La encargada escribió las reglas del día',
      'The manager wrote down the daily rules',
      ['manager', 'wrote', 'rules'],
      ['manager', 'rules', 'daily'],
      'Ignorar las reglas y dejar solo el ambiente',
      'The rules prepare the modal contrast that follows',
      'La autoridad del lugar ya está definida'
    ),
    ctx(
      'La mañana empieza ocupada pero tranquila',
      'The morning starts busy but calm',
      ['morning', 'starts', 'busy'],
      ['morning', 'busy', 'calm'],
      'Cerrar la escena sin sensación de rutina',
      'The calm pace supports the lesson focus',
      'El ritmo ayuda a sostener la historia'
    ),
    tgt(
      'Ana es capaz de dar forma a la masa muy rápido',
      'Ana is able to shape the dough very fast',
      ['Ana', 'is', 'able', 'to', 'shape'],
      ['able', 'shape', 'dough', 'fast'],
      'Usar can shape the dough',
      'Ability keeps the be able to pattern',
      'La habilidad de Ana queda clara'
    ),
    tgt(
      'Leo tiene permiso para entrar a la cocina trasera',
      'Leo is allowed to enter the back kitchen',
      ['Leo', 'is', 'allowed', 'to', 'enter'],
      ['allowed', 'enter', 'kitchen', 'Leo'],
      'Quitar to o cambiar allowed por may enter',
      'Permission uses be allowed to + base verb',
      'La cocina trasera marca el límite'
    ),
    tgt(
      'Se supone que limpian la mesa después de cada pedido',
      'They are supposed to clean the table after each order',
      ['They', 'are', 'supposed', 'to', 'clean'],
      ['supposed', 'clean', 'table', 'order'],
      'Usar must clean the table instead of be supposed to clean',
      'Expectation uses be supposed to + base verb',
      'La rutina después de cada pedido organiza el turno'
    ),
    tgt(
      'Ana fue capaz de recordar la receta',
      'Ana was able to remember the recipe',
      ['Ana', 'was', 'able', 'to', 'remember'],
      ['able', 'remember', 'recipe', 'Ana'],
      'Usar could remember sin el matiz de logro puntual',
      'Was able to shows a completed result',
      'Recordar la receta resuelve el momento'
    ),
    tgt(
      'Recibieron permiso para tomar un descanso corto',
      'They were allowed to take a short break',
      ['They', 'were', 'allowed', 'to', 'take'],
      ['allowed', 'take', 'break', 'short'],
      'Escribir They could take a short break',
      'Past permission stays with were allowed to',
      'El descanso también depende del permiso'
    ),
    tgt(
      '¿Se supone que el equipo cierra a las siete?',
      'Is the team supposed to close at seven?',
      ['Is', 'the', 'team', 'supposed', 'to'],
      ['supposed', 'close', 'seven', 'team'],
      'Escribir Does the team supposed to close at seven?',
      'Questions about expectation keep supposed to',
      'El horario pone a prueba la regla'
    ),
    tgt(
      'Leo no tiene permiso para apagar el horno temprano',
      'Leo is not allowed to turn off the oven early',
      ['Leo', 'is', 'not', 'allowed', 'to'],
      ['not', 'allowed', 'turn', 'oven'],
      'Escribir Leo can not turn off the oven early',
      'Negative permission keeps the be allowed to frame',
      'La seguridad del horno exige control'
    ),
    tgt(
      'Al final, son capaces de trabajar sin estrés',
      'At the end, they are able to work without stress',
      ['At', 'the', 'end', 'they', 'are', 'able', 'to', 'work'],
      ['able', 'work', 'stress', 'end'],
      'Usar can work without stress instead of be able to work',
      'The closing line shows finished ability and confidence',
      'El cierre deja una sensación de dominio'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
