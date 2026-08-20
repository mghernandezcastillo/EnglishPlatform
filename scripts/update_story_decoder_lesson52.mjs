import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[7].lessons[0];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['is', 'are', 'was', 'were', 'will'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Imperative';
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
  { title: 'El jardín del barrio: Instrucciones claras', type: 'Descubrimiento', value: 'cooperación' },
  [
    ctx(
      'Un letrero cuelga junto a la puerta del jardín',
      'A sign hangs by the garden gate',
      ['sign', 'garden', 'gate'],
      ['sign', 'garden', 'gate'],
      'Perder el ambiente de instrucciones',
      'The opening should feel like a place where direct instructions matter',
      'El jardín ya tiene reglas'
    ),
    ctx(
      'Los voluntarios sostienen regaderas y guantes',
      'The volunteers hold watering cans and gloves',
      ['volunteers', 'watering', 'gloves'],
      ['volunteers', 'watering', 'gloves'],
      'Hacer la escena demasiado vacía',
      'The tools should support imperative practice',
      'Los voluntarios se preparan'
    ),
    ctx(
      'Las plantas necesitan cuidado hoy',
      'The plants need care today',
      ['plants', 'need', 'care'],
      ['plants', 'need', 'care'],
      'Ignorar la urgencia del cuidado',
      'The urgency should cue direct commands',
      'Las plantas piden acción'
    ),
    ctx(
      'Todos esperan la señal para empezar',
      'Everyone waits for the signal to begin',
      ['Everyone', 'waits', 'signal'],
      ['Everyone', 'waits', 'signal'],
      'Cerrar sin una escena de comienzo',
      'The signal should lead into the commands',
      'La señal marca el inicio'
    ),
    tgt(
      'Riega las plántulas con cuidado',
      'Water the seedlings gently',
      ['Water', 'the', 'seedlings'],
      ['Water', 'the', 'seedlings', 'gently'],
      'Usar You water the seedlings gently',
      'Imperative uses the base verb with no subject',
      'El riego debe ser suave'
    ),
    tgt(
      'No pises las flores',
      'Do not step on the flowers',
      ['Do', 'not', 'step', 'on', 'the'],
      ['Do', 'not', 'step', 'flowers'],
      'Usar You do not step on the flowers',
      'Negative imperative uses do not + base verb',
      'Las flores se protegen'
    ),
    tgt(
      'Trae la regadera',
      'Bring the watering can',
      ['Bring', 'the', 'watering', 'can'],
      ['Bring', 'the', 'watering', 'can'],
      'Usar You bring the watering can',
      'Imperative keeps the instruction short and direct',
      'La regadera es necesaria'
    ),
    tgt(
      'Recoge la basura',
      'Pick up the trash',
      ['Pick', 'up', 'the', 'trash'],
      ['Pick', 'up', 'the', 'trash'],
      'Usar You pick up the trash',
      'Pick up is a natural imperative phrase',
      'La basura no debe quedarse'
    ),
    tgt(
      'No dejes la puerta abierta',
      'Do not leave the gate open',
      ['Do', 'not', 'leave', 'the', 'gate'],
      ['Do', 'not', 'leave', 'gate', 'open'],
      'Usar You do not leave the gate open',
      'Do not + base verb forms the negative command',
      'La puerta debe cerrarse'
    ),
    tgt(
      'Guarda las herramientas',
      'Put the tools back',
      ['Put', 'the', 'tools', 'back'],
      ['Put', 'the', 'tools', 'back'],
      'Usar You put the tools back',
      'Imperatives often sound like short action steps',
      'Las herramientas vuelven a su lugar'
    ),
    tgt(
      'Camina por el sendero',
      'Follow the path',
      ['Follow', 'the', 'path'],
      ['Follow', 'the', 'path'],
      'Usar You follow the path',
      'The base verb works as a direct instruction',
      'El sendero guía la ruta'
    ),
    tgt(
      'Habla en voz baja cerca de las plantas',
      'Speak softly near the plants',
      ['Speak', 'softly', 'near', 'the', 'plants'],
      ['Speak', 'softly', 'near', 'the', 'plants'],
      'Usar You speak softly near the plants',
      'Imperative keeps the instruction concise',
      'El cuidado también es en el tono'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El proyecto escolar: Pasos para ordenar', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La clase tiene carteles, marcadores y una mesa grande',
      'The class has posters, markers, and a big table',
      ['class', 'posters', 'markers'],
      ['class', 'posters', 'markers'],
      'Perder el ambiente de tarea escolar',
      'The classroom scene should set up clear commands',
      'La clase ya está preparada'
    ),
    ctx(
      'La profesora espera que todos sigan las instrucciones',
      'The teacher expects everyone to follow the instructions',
      ['teacher', 'expects', 'instructions'],
      ['teacher', 'expects', 'instructions'],
      'Ignorar la autoridad de la consigna',
      'The teacher should lead into direct imperative forms',
      'La profesora marca el ritmo'
    ),
    ctx(
      'Los estudiantes miran el póster principal',
      'The students look at the main poster',
      ['students', 'look', 'poster'],
      ['students', 'look', 'poster'],
      'Cerrar sin un foco visual',
      'The poster should cue the task steps',
      'El póster organiza el trabajo'
    ),
    ctx(
      'Hay una lista de tareas en la esquina',
      'There is a task list in the corner',
      ['task', 'list', 'corner'],
      ['task', 'list', 'corner'],
      'Hacer la escena demasiado vaga',
      'The list should support the step-by-step commands',
      'La lista ya marca lo que sigue'
    ),
    tgt(
      'Abre tu cuaderno',
      'Open your notebook',
      ['Open', 'your', 'notebook'],
      ['Open', 'your', 'notebook'],
      'Usar You open your notebook',
      'Imperative starts with the base verb',
      'El cuaderno se abre primero'
    ),
    tgt(
      'Escribe el título',
      'Write the title',
      ['Write', 'the', 'title'],
      ['Write', 'the', 'title'],
      'Usar You write the title',
      'Base verb plus complement is the natural command',
      'El título va primero'
    ),
    tgt(
      'No copies la respuesta',
      'Do not copy the answer',
      ['Do', 'not', 'copy', 'the', 'answer'],
      ['Do', 'not', 'copy', 'answer'],
      'Usar You do not copy the answer',
      'Negative imperative uses do not + base verb',
      'Copiar no ayuda'
    ),
    tgt(
      'Lee las instrucciones con cuidado',
      'Read the instructions carefully',
      ['Read', 'the', 'instructions'],
      ['Read', 'the', 'instructions', 'carefully'],
      'Usar You read the instructions carefully',
      'The base verb gives a clear classroom command',
      'Leer bien evita errores'
    ),
    tgt(
      'Entrega el póster',
      'Hand in the poster',
      ['Hand', 'in', 'the', 'poster'],
      ['Hand', 'in', 'the', 'poster'],
      'Usar You hand in the poster',
      'Hand in works naturally as an imperative phrase',
      'El póster se entrega al final'
    ),
    tgt(
      'Trabaja en pareja',
      'Work in pairs',
      ['Work', 'in', 'pairs'],
      ['Work', 'in', 'pairs'],
      'Usar You work in pairs',
      'Imperative is concise and direct here',
      'Trabajar en pareja ayuda'
    ),
    tgt(
      'Mantén tu voz baja',
      'Keep your voice low',
      ['Keep', 'your', 'voice', 'low'],
      ['Keep', 'your', 'voice', 'low'],
      'Usar You keep your voice low',
      'Keep works well for a classroom instruction',
      'La voz baja mantiene el orden'
    ),
    tgt(
      'Revisa el horario',
      'Check the schedule',
      ['Check', 'the', 'schedule'],
      ['Check', 'the', 'schedule'],
      'Usar You check the schedule',
      'Check is the direct command form',
      'El horario guía el paso'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La panadería pequeña: Instrucciones del turno', type: 'Integración', value: 'trabajo diligente' },
  [
    ctx(
      'La panadería abre muy temprano',
      'The bakery opens very early',
      ['bakery', 'opens', 'early'],
      ['bakery', 'opens', 'early'],
      'Perder el ambiente de turno temprano',
      'The bakery scene should make the instructions feel immediate',
      'La mañana empieza con trabajo'
    ),
    ctx(
      'Hay harina, pan y bandejas sobre la mesa',
      'There is flour, bread, and trays on the table',
      ['flour', 'bread', 'trays'],
      ['flour', 'bread', 'trays'],
      'Hacer la escena demasiado vacía',
      'The ingredients and trays should cue practical commands',
      'La mesa ya pide acción'
    ),
    ctx(
      'Ana y Leo están listos para empezar',
      'Ana and Leo are ready to start',
      ['Ana', 'Leo', 'ready'],
      ['Ana', 'Leo', 'ready'],
      'Ignorar a quienes siguen las instrucciones',
      'The team should carry out the commands',
      'Ana y Leo ya están listos'
    ),
    ctx(
      'El horno está caliente y la masa espera',
      'The oven is hot and the dough waits',
      ['oven', 'hot', 'dough'],
      ['oven', 'hot', 'dough'],
      'Cerrar sin una sensación de urgencia',
      'The hot oven should support careful commands',
      'El horno exige cuidado'
    ),
    tgt(
      'Mezcla la masa despacio',
      'Mix the dough slowly',
      ['Mix', 'the', 'dough'],
      ['Mix', 'the', 'dough', 'slowly'],
      'Usar You mix the dough slowly',
      'Imperative works as a direct step in the process',
      'La masa necesita calma'
    ),
    tgt(
      'No toques el horno',
      'Do not touch the oven',
      ['Do', 'not', 'touch', 'the', 'oven'],
      ['Do', 'not', 'touch', 'oven'],
      'Usar You do not touch the oven',
      'Negative imperative keeps the warning short',
      'El horno se respeta'
    ),
    tgt(
      'Lávate las manos',
      'Wash your hands',
      ['Wash', 'your', 'hands'],
      ['Wash', 'your', 'hands'],
      'Usar You wash your hands',
      'Wash is a natural imperative for hygiene',
      'Lavarse las manos es clave'
    ),
    tgt(
      'Lleva las bandejas con cuidado',
      'Carry the trays carefully',
      ['Carry', 'the', 'trays'],
      ['Carry', 'the', 'trays', 'carefully'],
      'Usar You carry the trays carefully',
      'Carry keeps the instruction direct and practical',
      'Las bandejas necesitan firmeza'
    ),
    tgt(
      'Cierra la puerta',
      'Close the door',
      ['Close', 'the', 'door'],
      ['Close', 'the', 'door'],
      'Usar You close the door',
      'Close is the standard imperative base form',
      'La puerta se cierra por seguridad'
    ),
    tgt(
      'Cuenta las galletas',
      'Count the cookies',
      ['Count', 'the', 'cookies'],
      ['Count', 'the', 'cookies'],
      'Usar You count the cookies',
      'Count is a direct command for inventory',
      'Contar ayuda a controlar'
    ),
    tgt(
      'Espera la señal',
      'Wait for the signal',
      ['Wait', 'for', 'the', 'signal'],
      ['Wait', 'for', 'the', 'signal'],
      'Usar You wait for the signal',
      'Wait is a clear command in a work setting',
      'La señal marca el paso'
    ),
    tgt(
      'Sirve el pan caliente',
      'Serve the bread warm',
      ['Serve', 'the', 'bread', 'warm'],
      ['Serve', 'the', 'bread', 'warm'],
      'Usar You serve the bread warm',
      'Serve is the direct imperative form',
      'El pan sale listo'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
