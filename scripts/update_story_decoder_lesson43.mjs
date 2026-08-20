import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[6].lessons[0];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'will', 'can'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Passive Present Simple';
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
  { title: 'La oficina de objetos perdidos: Lo que se guarda cada mañana', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'La oficina abre antes de que llegue la gente',
      'The office opens before people arrive',
      ['office', 'opens', 'people'],
      ['office', 'opens', 'people'],
      'Perder el ambiente de rutina',
      'The opening scene should show a place where things are managed every day',
      'La oficina abre con orden'
    ),
    ctx(
      'Hay cajas, etiquetas y una mesa de madera',
      'There are boxes, tags, and a wooden table',
      ['boxes', 'tags', 'table'],
      ['boxes', 'tags', 'table'],
      'Hacer la escena demasiado abstracta',
      'Visible objects help the passive sentences feel natural',
      'Los objetos preparan la acción'
    ),
    ctx(
      'La encargada revisa una lista larga',
      'The clerk checks a long list',
      ['clerk', 'checks', 'list'],
      ['clerk', 'checks', 'list'],
      'Ignorar a la persona que organiza',
      'The clerk should contrast with the passive result',
      'La encargada organiza el trabajo'
    ),
    ctx(
      'Los objetos se acomodan sobre la mesa',
      'The objects are arranged on the table',
      ['objects', 'arranged', 'table'],
      ['objects', 'arranged', 'table'],
      'Cerrar sin una idea de organización',
      'The scene should support repeated daily actions',
      'Los objetos ya están en orden'
    ),
    tgt(
      'Las carteras se revisan cada mañana',
      'The wallets are checked every morning',
      ['The', 'wallets', 'are', 'checked'],
      ['The', 'wallets', 'are', 'checked', 'morning'],
      'Usar The wallets check every morning',
      'Passive Present Simple focuses on the thing receiving the action',
      'Las carteras son revisadas como rutina'
    ),
    tgt(
      'Los nombres se escriben en las etiquetas',
      'The names are written on the tags',
      ['The', 'names', 'are', 'written'],
      ['The', 'names', 'are', 'written', 'tags'],
      'Usar The names write on the tags',
      'The passive keeps the names as the main focus',
      'Escribir los nombres es parte del proceso'
    ),
    tgt(
      'Las llaves se guardan en una caja azul',
      'The keys are kept in a blue box',
      ['The', 'keys', 'are', 'kept'],
      ['The', 'keys', 'are', 'kept', 'box'],
      'Usar The keys keep in a blue box',
      'Kept shows the object receiving the action',
      'Guardar las llaves es una regla diaria'
    ),
    tgt(
      'Los formularios se leen en el mostrador',
      'The forms are read at the counter',
      ['The', 'forms', 'are', 'read'],
      ['The', 'forms', 'are', 'read', 'counter'],
      'Usar The forms read at the counter',
      'Passive voice places the forms first',
      'Los formularios pasan por revisión'
    ),
    tgt(
      'Los paquetes se llevan al cuarto trasero',
      'The packages are brought to the back room',
      ['The', 'packages', 'are', 'brought'],
      ['The', 'packages', 'are', 'brought', 'room'],
      'Usar The packages bring to the back room',
      'Brought keeps the packages as the focus',
      'Llevar los paquetes cambia su lugar'
    ),
    tgt(
      'Los objetos perdidos se devuelven a sus dueños',
      'The lost items are returned to their owners',
      ['The', 'lost', 'items', 'are', 'returned'],
      ['The', 'lost', 'items', 'are', 'returned', 'owners'],
      'Usar The lost items return to their owners',
      'Returned shows what happens to the items',
      'Devolver es parte del trabajo'
    ),
    tgt(
      'Los estantes se limpian antes del almuerzo',
      'The shelves are cleaned before lunch',
      ['The', 'shelves', 'are', 'cleaned'],
      ['The', 'shelves', 'are', 'cleaned', 'lunch'],
      'Usar The shelves clean before lunch',
      'The passive keeps attention on the shelves',
      'Limpiar los estantes mantiene el orden'
    ),
    tgt(
      'Los mensajes se comparten con el equipo',
      'The messages are shared with the staff',
      ['The', 'messages', 'are', 'shared'],
      ['The', 'messages', 'are', 'shared', 'staff'],
      'Usar The messages share with the staff',
      'Shared is a common passive form in daily routines',
      'Compartir mensajes también se hace en pasiva'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Lo que se arma cada día', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La feria abre con mesas largas y luces brillantes',
      'The fair opens with long tables and bright lights',
      ['fair', 'opens', 'tables'],
      ['fair', 'opens', 'lights'],
      'Perder el ambiente de exposición',
      'The fair scene should make the daily passive actions easy to picture',
      'La feria ya parece lista'
    ),
    ctx(
      'Los estudiantes llegan con cajas de cartón',
      'The students arrive with cardboard boxes',
      ['students', 'arrive', 'boxes'],
      ['students', 'arrive', 'boxes'],
      'No mostrar material de trabajo',
      'Cardboard boxes support a hands-on passive scene',
      'Las cajas anuncian el proyecto'
    ),
    ctx(
      'La maestra observa el salón con calma',
      'The teacher watches the room calmly',
      ['teacher', 'watches', 'room'],
      ['teacher', 'watches', 'room'],
      'Ignorar la figura que supervisa',
      'The teacher should stay in the background while the objects change',
      'La maestra vigila el progreso'
    ),
    ctx(
      'Hay carteles, tijeras y cinta sobre las mesas',
      'There are posters, scissors, and tape on the tables',
      ['posters', 'scissors', 'tape'],
      ['posters', 'scissors', 'tape'],
      'Hacer la escena demasiado vacía',
      'The supplies should clearly support passive present simple',
      'Los materiales ya están listos'
    ),
    tgt(
      'Los modelos se hacen con cartón',
      'The models are made with cardboard',
      ['The', 'models', 'are', 'made'],
      ['The', 'models', 'are', 'made', 'cardboard'],
      'Usar The models make with cardboard',
      'Passive Present Simple keeps the models as the subject',
      'Los modelos se construyen cada día'
    ),
    tgt(
      'Los pósters se preparan el lunes',
      'The posters are prepared on Monday',
      ['The', 'posters', 'are', 'prepared'],
      ['The', 'posters', 'are', 'prepared', 'Monday'],
      'Usar The posters prepare on Monday',
      'Prepared shows the action received by the posters',
      'Preparar los pósters es parte del trabajo'
    ),
    tgt(
      'Los cables se revisan con cuidado',
      'The wires are checked carefully',
      ['The', 'wires', 'are', 'checked'],
      ['The', 'wires', 'are', 'checked', 'carefully'],
      'Usar The wires check carefully',
      'Checked keeps attention on the wires',
      'Revisar los cables evita errores'
    ),
    tgt(
      'Los resultados se muestran en una pizarra',
      'The results are shown on a board',
      ['The', 'results', 'are', 'shown'],
      ['The', 'results', 'are', 'shown', 'board'],
      'Usar The results show on a board',
      'Shown is the passive form that fits the display',
      'Mostrar los resultados ayuda a todos'
    ),
    tgt(
      'Las mesas se limpian antes de que lleguen los visitantes',
      'The tables are cleaned before visitors arrive',
      ['The', 'tables', 'are', 'cleaned', 'before'],
      ['The', 'tables', 'are', 'cleaned', 'visitors'],
      'Usar The tables clean before visitors arrive',
      'Passive voice is common for routines and preparation',
      'Limpiar las mesas deja todo listo'
    ),
    tgt(
      'Las preguntas se responden por el equipo',
      'The questions are answered by the team',
      ['The', 'questions', 'are', 'answered'],
      ['The', 'questions', 'are', 'answered', 'team'],
      'Usar The questions answer by the team',
      'Answered keeps the questions in focus',
      'Responder preguntas es parte de la feria'
    ),
    tgt(
      'Los bocadillos se traen por los padres',
      'The snacks are brought by the parents',
      ['The', 'snacks', 'are', 'brought'],
      ['The', 'snacks', 'are', 'brought', 'parents'],
      'Usar The snacks bring by the parents',
      'Brought is the passive form for the action',
      'Los bocadillos ayudan al equipo'
    ),
    tgt(
      'Las notas se escriben en tarjetas',
      'The notes are written on cards',
      ['The', 'notes', 'are', 'written'],
      ['The', 'notes', 'are', 'written', 'cards'],
      'Usar The notes write on cards',
      'Written is the correct passive participle here',
      'Escribir notas ordena la exposición'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que se hace en el barrio', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'El parque del barrio abre con luz suave',
      'The neighborhood park opens with soft light',
      ['park', 'opens', 'light'],
      ['park', 'opens', 'light'],
      'Perder el tono comunitario',
      'The park should feel like a place where routine actions happen quietly',
      'El parque da un tono tranquilo'
    ),
    ctx(
      'Hay una mesa con herramientas y pintura',
      'There is a table with tools and paint',
      ['table', 'tools', 'paint'],
      ['table', 'tools', 'paint'],
      'No mostrar materiales del barrio',
      'The tools make the passive routines easy to picture',
      'Las herramientas preparan la ayuda'
    ),
    ctx(
      'Los vecinos saludan mientras pasan',
      'The neighbors greet each other as they pass by',
      ['neighbors', 'greet', 'pass'],
      ['neighbors', 'greet', 'pass'],
      'Ignorar la interacción social',
      'The greeting should lead into shared neighborhood routines',
      'Los vecinos mantienen la vida del barrio'
    ),
    ctx(
      'Un niño lleva agua en una botella',
      'A child carries water in a bottle',
      ['child', 'carries', 'water'],
      ['child', 'carries', 'water'],
      'Cerrar sin una acción de ayuda',
      'Water and tools are good cues for everyday passive actions',
      'El niño también ayuda'
    ),
    tgt(
      'Las plantas se riegan cada tarde',
      'The plants are watered every evening',
      ['The', 'plants', 'are', 'watered'],
      ['The', 'plants', 'are', 'watered', 'evening'],
      'Usar The plants water every evening',
      'The passive form keeps the plants as the subject',
      'Regar las plantas es una rutina del barrio'
    ),
    tgt(
      'Los bancos se limpian los sábados',
      'The benches are cleaned on Saturdays',
      ['The', 'benches', 'are', 'cleaned'],
      ['The', 'benches', 'are', 'cleaned', 'Saturdays'],
      'Usar The benches clean on Saturdays',
      'Cleaned shows the action received by the benches',
      'Limpiar los bancos hace el lugar más amable'
    ),
    tgt(
      'Las herramientas se comparten en el cobertizo',
      'The tools are shared in the shed',
      ['The', 'tools', 'are', 'shared'],
      ['The', 'tools', 'are', 'shared', 'shed'],
      'Usar The tools share in the shed',
      'Shared is the passive form that fits community use',
      'Compartir herramientas une al barrio'
    ),
    tgt(
      'La comida se trae a la mesa',
      'The food is brought to the table',
      ['The', 'food', 'is', 'brought'],
      ['The', 'food', 'is', 'brought', 'table'],
      'Usar The food bring to the table',
      'Brought keeps the food as the focus',
      'Llevar la comida es parte de la ayuda'
    ),
    tgt(
      'La basura se recoge antes del mediodía',
      'The trash is collected before noon',
      ['The', 'trash', 'is', 'collected', 'before'],
      ['The', 'trash', 'is', 'collected', 'noon'],
      'Usar The trash collect before noon',
      'Collected is the passive participle for the routine',
      'Recoger la basura mantiene el barrio limpio'
    ),
    tgt(
      'Las ventanas se abren por la tarde',
      'The windows are opened in the afternoon',
      ['The', 'windows', 'are', 'opened'],
      ['The', 'windows', 'are', 'opened', 'afternoon'],
      'Usar The windows open in the afternoon',
      'Opened shows the action done to the windows',
      'Abrir las ventanas refresca el espacio'
    ),
    tgt(
      'Las bicicletas se reparan por el voluntario',
      'The bicycles are repaired by the volunteer',
      ['The', 'bicycles', 'are', 'repaired'],
      ['The', 'bicycles', 'are', 'repaired', 'volunteer'],
      'Usar The bicycles repair by the volunteer',
      'Repaired is the correct passive form',
      'Reparar bicicletas también es ayudar'
    ),
    tgt(
      'Las mesas se preparan antes de comer',
      'The tables are prepared before the meal',
      ['The', 'tables', 'are', 'prepared', 'before'],
      ['The', 'tables', 'are', 'prepared', 'meal'],
      'Usar The tables prepare before the meal',
      'Prepared fits the routine of getting ready',
      'Preparar las mesas cierra la escena'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
