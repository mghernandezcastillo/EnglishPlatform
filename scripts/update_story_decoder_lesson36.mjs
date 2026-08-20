import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[9];
const targetPattern = 'modal + be + past participle';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'do', 'does', 'have', 'go'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Modales en voz pasiva';
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
  { title: 'El laboratorio escolar: Reglas claras', type: 'Descubrimiento', value: 'seguridad' },
  [
    ctx(
      'La puerta del laboratorio estaba cerrada',
      'The lab door was closed',
      ['lab', 'door', 'closed'],
      ['lab', 'door', 'closed'],
      'Perder el ambiente de reglas y seguridad',
      'The scene should feel like a place with clear instructions',
      'La seguridad empieza con el espacio cerrado'
    ),
    ctx(
      'Había letreros rojos en la pared',
      'There were red signs on the wall',
      ['red', 'signs', 'wall'],
      ['red', 'signs', 'wall'],
      'Ignorar las señales que explican las reglas',
      'The signs should cue the passive rules that follow',
      'Las señales marcan la instrucción'
    ),
    ctx(
      'La maestra miraba los frascos con cuidado',
      'The teacher watched the jars carefully',
      ['teacher', 'watched', 'jars'],
      ['teacher', 'jars', 'carefully'],
      'Cerrar la escena sin una figura de control',
      'A careful observer supports the rule-based mood',
      'La maestra vigila el orden'
    ),
    ctx(
      'Nadie quería tocar nada sin permiso',
      'No one wanted to touch anything without permission',
      ['No', 'one', 'wanted'],
      ['No', 'wanted', 'permission'],
      'Perder la idea de límite y cuidado',
      'The permission limit prepares the passive modals',
      'El permiso se vuelve el tema central'
    ),
    tgt(
      'La puerta debe mantenerse cerrada',
      'The door must be kept closed',
      ['The', 'door', 'must', 'be', 'kept'],
      ['must', 'be', 'kept', 'door'],
      'Usar The door must keep closed',
      'Modal passive keeps the object first and the action on it',
      'La regla de cierre es clara'
    ),
    tgt(
      'Los frascos deben guardarse en alto',
      'The jars must be stored up high',
      ['The', 'jars', 'must', 'be', 'stored'],
      ['must', 'be', 'stored', 'jars'],
      'Escribir The jars must store up high',
      'Passive voice focuses on what happens to the jars',
      'La altura protege el contenido'
    ),
    tgt(
      'Las manos deben lavarse antes de entrar',
      'Hands should be washed before entering',
      ['Hands', 'should', 'be', 'washed', 'before'],
      ['should', 'be', 'washed', 'Hands'],
      'Usar Hands should wash before entering',
      'Should be + past participle keeps the instruction passive',
      'La higiene aparece como regla'
    ),
    tgt(
      'Las ventanas pueden abrirse un poco',
      'The windows can be opened a little',
      ['The', 'windows', 'can', 'be', 'opened'],
      ['can', 'be', 'opened', 'windows'],
      'Usar The windows can open a little',
      'Can be + past participle shows allowed action on the object',
      'La ventilación sigue controlada'
    ),
    tgt(
      'El equipo podría ser llamado primero',
      'The team could be called first',
      ['The', 'team', 'could', 'be', 'called'],
      ['could', 'be', 'called', 'team'],
      'Escribir The team could call first',
      'Could be + past participle keeps the possibility passive',
      'El turno del equipo cambia el orden'
    ),
    tgt(
      'Los resultados deben revisarse dos veces',
      'The results must be checked twice',
      ['The', 'results', 'must', 'be', 'checked'],
      ['must', 'be', 'checked', 'results'],
      'Usar The results must check twice',
      'The passive keeps attention on the results',
      'La revisión doble evita errores'
    ),
    tgt(
      '¿Puede este vaso ser usado aquí?',
      'Can this glass be used here?',
      ['Can', 'this', 'glass', 'be', 'used'],
      ['Can', 'be', 'used', 'glass'],
      'Escribir Can this glass use here?',
      'Questions keep modal + be + past participle',
      'La pregunta verifica la regla del objeto'
    ),
    tgt(
      'Las luces deberían apagarse al final',
      'The lights should be turned off at the end',
      ['The', 'lights', 'should', 'be', 'turned'],
      ['should', 'be', 'turned', 'lights'],
      'Usar The lights should turn off at the end',
      'Modal passive keeps the action on the lights',
      'El cierre del lugar también se vuelve pasivo'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El paquete urgente: Lo que puede hacerse', type: 'Uso natural', value: 'rapidez' },
  [
    ctx(
      'Un paquete llegó antes de la reunión',
      'A package arrived before the meeting',
      ['package', 'arrived', 'meeting'],
      ['package', 'arrived', 'meeting'],
      'Perder el sentido de urgencia',
      'The package should feel important from the first line',
      'El paquete ya trae presión'
    ),
    ctx(
      'La etiqueta estaba escrita a mano',
      'The label was handwritten',
      ['label', 'handwritten'],
      ['label', 'handwritten'],
      'Hacer la escena demasiado explicativa',
      'A short scene keeps the pace quick',
      'La etiqueta da una pista simple'
    ),
    ctx(
      'Marcos esperaba instrucciones',
      'Marcos was waiting for instructions',
      ['Marcos', 'waiting', 'instructions'],
      ['Marcos', 'waiting', 'instructions'],
      'Olvidar que alguien está pendiente de la solución',
      'The waiting state keeps the action open',
      'Marcos todavía espera qué hacer'
    ),
    ctx(
      'La oficina seguía tranquila',
      'The office stayed quiet',
      ['office', 'quiet'],
      ['office', 'quiet'],
      'Cerrar sin sensación de trámite pendiente',
      'The quiet office should contrast with the urgent package',
      'La calma contrasta con la urgencia'
    ),
    tgt(
      'El paquete puede ser enviado hoy',
      'The package can be sent today',
      ['The', 'package', 'can', 'be', 'sent'],
      ['can', 'be', 'sent', 'package'],
      'Usar The package can send today',
      'Modal passive shows what can happen to the package',
      'El envío puede resolverse hoy'
    ),
    tgt(
      'La dirección debe ser confirmada',
      'The address must be confirmed',
      ['The', 'address', 'must', 'be', 'confirmed'],
      ['must', 'be', 'confirmed', 'address'],
      'Usar The address must confirm',
      'Passive modal keeps the address as the focus',
      'La dirección es el punto crítico'
    ),
    tgt(
      'El formulario debería ser firmado por la jefa',
      'The form should be signed by the boss',
      ['The', 'form', 'should', 'be', 'signed'],
      ['should', 'be', 'signed', 'form'],
      'Usar The form should sign by the boss',
      'Should be + past participle fits formal instructions',
      'La firma activa el trámite'
    ),
    tgt(
      'La copia podría ser guardada en la carpeta',
      'A copy could be kept in the folder',
      ['A', 'copy', 'could', 'be', 'kept'],
      ['could', 'be', 'kept', 'copy'],
      'Usar A copy could keep in the folder',
      'Could be + past participle keeps the file as the focus',
      'La copia se protege con orden'
    ),
    tgt(
      '¿Puede el mensaje ser leído ahora?',
      'Can the message be read now?',
      ['Can', 'the', 'message', 'be', 'read'],
      ['Can', 'be', 'read', 'message'],
      'Escribir Can the message read now?',
      'Questions keep the modal passive structure',
      'La lectura del mensaje es la pregunta'
    ),
    tgt(
      'Los datos deben ser revisados antes de salir',
      'The data must be reviewed before leaving',
      ['The', 'data', 'must', 'be', 'reviewed'],
      ['must', 'be', 'reviewed', 'data'],
      'Usar The data must review before leaving',
      'Passive voice keeps the data in focus',
      'La revisión protege el trabajo'
    ),
    tgt(
      'El aviso puede ser compartido con el equipo',
      'The notice can be shared with the team',
      ['The', 'notice', 'can', 'be', 'shared'],
      ['can', 'be', 'shared', 'notice'],
      'Usar The notice can share with the team',
      'Can be + past participle is natural for permission',
      'La información se distribuye con cuidado'
    ),
    tgt(
      'Las cajas deben ser movidas pronto',
      'The boxes must be moved soon',
      ['The', 'boxes', 'must', 'be', 'moved'],
      ['must', 'be', 'moved', 'boxes'],
      'Usar The boxes must move soon',
      'Modal passive keeps the boxes as the focus',
      'El cierre pide acción rápida'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El jardín del barrio: Lo que se debe cuidar', type: 'Integración', value: 'cuidado' },
  [
    ctx(
      'El jardín estaba lleno de carteles pequeños',
      'The garden was full of small signs',
      ['garden', 'full', 'signs'],
      ['garden', 'full', 'signs'],
      'Perder el ambiente de cuidado y orden',
      'The signs should point to clear instructions',
      'El jardín anuncia reglas visibles'
    ),
    ctx(
      'Las herramientas descansaban junto a la pared',
      'The tools rested by the wall',
      ['tools', 'rested', 'wall'],
      ['tools', 'rested', 'wall'],
      'Hacer una escena sin objetos claros',
      'The tools should stay visible as possible passive subjects',
      'Las herramientas están listas para la acción'
    ),
    ctx(
      'Sara leía las instrucciones en silencio',
      'Sara read the instructions in silence',
      ['Sara', 'read', 'instructions'],
      ['Sara', 'instructions', 'silence'],
      'Ignorar la lectura que prepara el cuidado',
      'Reading the rules prepares the modal passive forms',
      'Sara ya está siguiendo el orden'
    ),
    ctx(
      'El grupo quería terminar sin desorden',
      'The group wanted to finish without mess',
      ['group', 'wanted', 'finish'],
      ['group', 'finish', 'mess'],
      'Cerrar sin sensación de responsabilidad',
      'The goal should feel orderly',
      'El grupo quiere dejar todo bien'
    ),
    tgt(
      'Las plantas deben ser regadas cada tarde',
      'The plants must be watered every afternoon',
      ['The', 'plants', 'must', 'be', 'watered'],
      ['must', 'be', 'watered', 'plants'],
      'Usar The plants must water every afternoon',
      'Passive modal keeps the plants as the main focus',
      'El cuidado de las plantas se vuelve rutina'
    ),
    tgt(
      'Las herramientas deben ser limpiadas después',
      'The tools must be cleaned afterward',
      ['The', 'tools', 'must', 'be', 'cleaned'],
      ['must', 'be', 'cleaned', 'tools'],
      'Usar The tools must clean afterward',
      'Modal passive is useful for duties and routines',
      'La limpieza también es parte del trabajo'
    ),
    tgt(
      'La tierra puede ser movida con cuidado',
      'The soil can be moved carefully',
      ['The', 'soil', 'can', 'be', 'moved'],
      ['can', 'be', 'moved', 'soil'],
      'Usar The soil can move carefully',
      'Can be + past participle shows allowed handling',
      'La tierra necesita delicadeza'
    ),
    tgt(
      'La basura debería ser recogida al salir',
      'The trash should be collected when leaving',
      ['The', 'trash', 'should', 'be', 'collected'],
      ['should', 'be', 'collected', 'trash'],
      'Usar The trash should collect when leaving',
      'Should be + past participle gives a clear duty',
      'La salida exige dejar el lugar limpio'
    ),
    tgt(
      '¿Puede esta bolsa ser usada otra vez?',
      'Can this bag be used again?',
      ['Can', 'this', 'bag', 'be', 'used'],
      ['Can', 'be', 'used', 'bag'],
      'Escribir Can this bag use again?',
      'Questions keep the modal passive pattern',
      'La reutilización también se pregunta'
    ),
    tgt(
      'Los nombres podrían ser escritos en la lista',
      'The names could be written on the list',
      ['The', 'names', 'could', 'be', 'written'],
      ['could', 'be', 'written', 'names'],
      'Usar The names could write on the list',
      'Could be + past participle fits a possible organization',
      'La lista puede organizarse mejor'
    ),
    tgt(
      'La cerca debe ser reparada pronto',
      'The fence must be repaired soon',
      ['The', 'fence', 'must', 'be', 'repaired'],
      ['must', 'be', 'repaired', 'fence'],
      'Usar The fence must repair soon',
      'Passive modal keeps the fence as the focus',
      'La cerca necesita atención inmediata'
    ),
    tgt(
      'Las semillas pueden ser guardadas para mañana',
      'The seeds can be kept for tomorrow',
      ['The', 'seeds', 'can', 'be', 'kept'],
      ['can', 'be', 'kept', 'seeds'],
      'Usar The seeds can keep for tomorrow',
      'Can be + past participle is natural for storage',
      'Guardar semillas cierra el cuidado del jardín'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
