import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[6];
const targetPattern = 'modal + be + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['can', 'will', 'have', 'do', 'does'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Modal Continuous';
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
  { title: 'La bicicleta de Sara: Lo que parece estar pasando', type: 'Descubrimiento', value: 'observación' },
  [
    ctx(
      'Sara deja su bicicleta junto a la plaza',
      'Sara leaves her bike by the square',
      ['Sara', 'leaves', 'bike'],
      ['Sara', 'bike', 'square'],
      'Perder la escena de inicio y empezar con la inferencia',
      'The opening scene should show the clue before the modal guess',
      'La escena inicial deja el problema visible'
    ),
    ctx(
      'Hay una cadena floja y una llanta un poco baja',
      'There is a loose chain and a slightly flat tire',
      ['loose', 'chain', 'tire'],
      ['loose', 'chain', 'tire'],
      'Ordenar los objetos de forma mecánica en vez de natural',
      'Keep the clue list short and clear',
      'Las pistas visuales preparan la inferencia'
    ),
    ctx(
      'Su hermano mira la escena con atención',
      'Her brother watches the scene closely',
      ['brother', 'watches', 'closely'],
      ['brother', 'scene', 'closely'],
      'Ignorar al observador que hace la inferencia',
      'A careful observer supports the modal idea',
      'Alguien está mirando para deducir'
    ),
    ctx(
      'La tarde avanza y nadie quiere llegar tarde',
      'The afternoon moves on and no one wants to be late',
      ['afternoon', 'moves', 'late'],
      ['afternoon', 'moves', 'late'],
      'Cerrar sin sensación de acción en progreso',
      'The pace should feel current and ongoing',
      'El contexto deja una acción abierta'
    ),
    tgt(
      'Sara debe de estar arreglando la cadena',
      'Sara must be fixing the chain',
      ['Sara', 'must', 'be', 'fixing'],
      ['must', 'fixing', 'chain', 'Sara'],
      'Usar can fix the chain sin mostrar inferencia',
      'Must be + verb-ing shows a strong present guess',
      'La cadena floja activa una deducción clara'
    ),
    tgt(
      'Su hermano quizá esté inflando la llanta',
      'Her brother might be pumping the tire',
      ['Her', 'brother', 'might', 'be', 'pumping'],
      ['might', 'pumping', 'tire', 'brother'],
      'Usar might pump the tire sin la forma continua',
      'Modal Continuous keeps the action in progress',
      'La llanta baja sugiere una acción ahora'
    ),
    tgt(
      'Los vecinos podrían estar mirando desde la banca',
      'The neighbors could be watching from the bench',
      ['neighbors', 'could', 'be', 'watching', 'bench'],
      ['could', 'watching', 'bench', 'neighbors'],
      'Escribir the neighbors could watch from the bench',
      'Could be + verb-ing softens the inference',
      'La banca da contexto a la observación'
    ),
    tgt(
      'El mecánico debería estar revisando los frenos',
      'The mechanic should be checking the brakes',
      ['mechanic', 'should', 'be', 'checking', 'brakes'],
      ['should', 'checking', 'brakes', 'mechanic'],
      'Usar should check the brakes sin la forma continua',
      'Should be + verb-ing shows a likely ongoing action',
      'Los frenos son la pista central'
    ),
    tgt(
      'Sara quizá esté probando el asiento',
      'Sara may be testing the seat',
      ['Sara', 'may', 'be', 'testing', 'seat'],
      ['may', 'testing', 'seat', 'Sara'],
      'Quitar be y dejar may test the seat',
      'May be + verb-ing keeps the present action visible',
      'El ajuste del asiento sigue el mismo patrón'
    ),
    tgt(
      '¿Podrían estar esperando junto a la fuente?',
      'Could they be waiting near the fountain?',
      ['Could', 'they', 'be', 'waiting', 'near'],
      ['Could', 'waiting', 'fountain', 'they'],
      'Escribir Could they wait near the fountain?',
      'Questions keep modal + be + verb-ing in order',
      'La pregunta verifica la inferencia'
    ),
    tgt(
      'Los chicos deben de estar cargando el casco',
      'The kids must be carrying the helmet',
      ['kids', 'must', 'be', 'carrying', 'helmet'],
      ['must', 'carrying', 'helmet', 'kids'],
      'Usar must carry the helmet sin la forma continua',
      'Must be + verb-ing keeps the action ongoing',
      'El casco completa la escena'
    ),
    tgt(
      'Sara quizá esté regresando a casa',
      'Sara might be riding home',
      ['Sara', 'might', 'be', 'riding', 'home'],
      ['might', 'riding', 'home', 'Sara'],
      'Usar might ride home without be',
      'Modal Continuous can also finish a story with motion',
      'El cierre deja el movimiento todavía visible'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'Una tarde en la biblioteca: Lo que están haciendo', type: 'Uso natural', value: 'disciplina' },
  [
    ctx(
      'La biblioteca está silenciosa y la luz entra por la ventana',
      'The library is quiet and the light comes in through the window',
      ['library', 'quiet', 'window'],
      ['library', 'quiet', 'window'],
      'Perder el ambiente de concentración',
      'The calm room should support the ongoing action guesses',
      'El lugar ya sugiere concentración'
    ),
    ctx(
      'Hay libros abiertos y cuadernos sobre la mesa',
      'There are open books and notebooks on the table',
      ['books', 'notebooks', 'table'],
      ['books', 'notebooks', 'table'],
      'Traducir como una lista rígida sin naturalidad',
      'Keep the objects in a natural English order',
      'Los objetos visibles apoyan la escena'
    ),
    ctx(
      'La bibliotecaria mira el pasillo con calma',
      'The librarian watches the aisle calmly',
      ['librarian', 'watches', 'aisle'],
      ['librarian', 'aisle', 'calmly'],
      'Ignorar a la persona que controla el espacio',
      'The watcher helps the learner infer what is happening',
      'La bibliotecaria marca el ritmo'
    ),
    ctx(
      'Al fondo, un grupo trabaja en voz baja',
      'In the back, a group works quietly',
      ['group', 'works', 'quietly'],
      ['group', 'works', 'quietly'],
      'Cerrar la escena antes de introducir los modales',
      'The background work should feel continuous',
      'El fondo sostiene la acción'
    ),
    tgt(
      'Nico debe de estar leyendo el mapa',
      'Nico must be reading the map',
      ['Nico', 'must', 'be', 'reading'],
      ['must', 'reading', 'map', 'Nico'],
      'Usar Nico reads the map en vez de la inferencia continua',
      'Must be + verb-ing is the clearest deduction pattern',
      'La lectura se infiere por los objetos'
    ),
    tgt(
      'Los estudiantes quizá estén tomando notas',
      'The students might be taking notes',
      ['students', 'might', 'be', 'taking', 'notes'],
      ['might', 'taking', 'notes', 'students'],
      'Quitar be y dejar might take notes',
      'The action should stay in progress',
      'Las notas indican trabajo activo'
    ),
    tgt(
      'La bibliotecaria podría estar ayudando a otro niño',
      'The librarian could be helping another child',
      ['librarian', 'could', 'be', 'helping', 'child'],
      ['could', 'helping', 'child', 'librarian'],
      'Escribir the librarian could help another child',
      'Could be + verb-ing keeps the guess soft',
      'La ayuda ocurre mientras el salón sigue en silencio'
    ),
    tgt(
      'Deberían estar hablando más bajo',
      'They should be speaking more quietly',
      ['They', 'should', 'be', 'speaking', 'more'],
      ['should', 'speaking', 'quietly', 'They'],
      'Usar they should speak more quietly sin la forma continua',
      'Should be + verb-ing still shows an ongoing action',
      'El nivel de voz también se puede inferir'
    ),
    tgt(
      'Marta quizá esté buscando un libro',
      'Marta may be searching for a book',
      ['Marta', 'may', 'be', 'searching', 'for'],
      ['may', 'searching', 'book', 'Marta'],
      'Quitar be y dejar Marta may search for a book',
      'May be + verb-ing is natural for a present guess',
      'La búsqueda encaja con la biblioteca'
    ),
    tgt(
      '¿Podría el profesor estar esperando junto a la estantería?',
      'Could the teacher be waiting near the shelf?',
      ['Could', 'the', 'teacher', 'be', 'waiting'],
      ['Could', 'waiting', 'shelf', 'teacher'],
      'Escribir Could the teacher wait near the shelf?',
      'Questions keep the modal before be',
      'La pregunta abre una posibilidad'
    ),
    tgt(
      'Los chicos deben de estar compartiendo un solo cuaderno',
      'The boys must be sharing one notebook',
      ['boys', 'must', 'be', 'sharing', 'one'],
      ['must', 'sharing', 'notebook', 'boys'],
      'Usar the boys must share one notebook',
      'Must be + verb-ing shows an ongoing shared action',
      'Compartir un cuaderno es la pista'
    ),
    tgt(
      'Para ahora, quizá estén terminando el informe',
      'By now, they might be finishing the report',
      ['By', 'now', 'they', 'might', 'be', 'finishing'],
      ['might', 'finishing', 'report', 'now'],
      'Usar they might finish the report without be',
      'The ending keeps the action in progress',
      'El informe se acerca al final'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Un día en familia: Lo que parece estar ocurriendo', type: 'Integración', value: 'conexión' },
  [
    ctx(
      'La cocina huele a sopa y pan caliente',
      'The kitchen smells like soup and warm bread',
      ['kitchen', 'smells', 'bread'],
      ['kitchen', 'soup', 'bread'],
      'Perder el ambiente familiar y cálido',
      'The smell should make the scene feel alive',
      'La cocina marca el tono del cierre'
    ),
    ctx(
      'La mesa está casi lista',
      'The table is almost ready',
      ['table', 'almost', 'ready'],
      ['table', 'almost', 'ready'],
      'Hacer una escena demasiado larga y pesada',
      'A short scene keeps the pace moving',
      'La mesa prepara la reunión'
    ),
    ctx(
      'Los niños van y vienen con platos y vasos',
      'The children go back and forth with plates and cups',
      ['children', 'plates', 'cups'],
      ['children', 'plates', 'cups'],
      'Ignorar el movimiento que sugiere actividad continua',
      'Movement cues support the modal continuous idea',
      'El movimiento deja claro que algo sigue ocurriendo'
    ),
    ctx(
      'Todos hablan despacio para no perder el ritmo',
      'Everyone speaks slowly so they do not lose the rhythm',
      ['Everyone', 'speaks', 'slowly'],
      ['Everyone', 'slowly', 'rhythm'],
      'Cerrar la escena sin energía de familia',
      'Keep the rhythm and motion visible',
      'El ritmo familiar se mantiene'
    ),
    tgt(
      'Mamá debe de estar cocinando la cena',
      'Mom must be cooking dinner',
      ['Mom', 'must', 'be', 'cooking'],
      ['must', 'cooking', 'dinner', 'Mom'],
      'Usar Mom cooks dinner en vez de la inferencia continua',
      'Must be + verb-ing shows a strong current guess',
      'La cena ya se siente en el aire'
    ),
    tgt(
      'Papá quizá esté poniendo la mesa',
      'Dad might be setting the table',
      ['Dad', 'might', 'be', 'setting', 'table'],
      ['might', 'setting', 'table', 'Dad'],
      'Escribir Dad might set the table',
      'Modal Continuous keeps the action unfolding',
      'La mesa conecta con la escena anterior'
    ),
    tgt(
      'Los niños podrían estar lavando la fruta',
      'The kids could be washing the fruit',
      ['kids', 'could', 'be', 'washing', 'fruit'],
      ['could', 'washing', 'fruit', 'kids'],
      'Quitar be y dejar The kids could wash the fruit',
      'Could be + verb-ing softens the guess',
      'La fruta añade otra acción en progreso'
    ),
    tgt(
      'La abuela debería estar llegando pronto',
      'Grandma should be arriving soon',
      ['Grandma', 'should', 'be', 'arriving', 'soon'],
      ['should', 'arriving', 'soon', 'Grandma'],
      'Usar Grandma should arrive soon sin continuidad',
      'Should be + verb-ing fits an expected arrival',
      'La llegada todavía está en camino'
    ),
    tgt(
      'Mi hermana quizá esté buscando las cucharas',
      'My sister may be looking for the spoons',
      ['My', 'sister', 'may', 'be', 'looking'],
      ['may', 'looking', 'spoons', 'sister'],
      'Escribir My sister may look for the spoons',
      'May be + verb-ing keeps the search current',
      'Las cucharas faltantes explican la búsqueda'
    ),
    tgt(
      '¿Podría el bebé estar durmiendo en el otro cuarto?',
      'Could the baby be sleeping in the other room?',
      ['Could', 'the', 'baby', 'be', 'sleeping'],
      ['Could', 'sleeping', 'room', 'baby'],
      'Escribir Could the baby sleep in the other room?',
      'Questions keep the modal before be',
      'La duda nace del silencio'
    ),
    tgt(
      'La familia debe de estar planeando el postre',
      'The family must be planning the dessert',
      ['family', 'must', 'be', 'planning', 'dessert'],
      ['must', 'planning', 'dessert', 'family'],
      'Usar The family must plan the dessert',
      'Must be + verb-ing gives a live inference',
      'El postre completa la reunión'
    ),
    tgt(
      'Quizá estén compartiendo el último trozo de pastel',
      'They might be sharing the last piece of cake',
      ['They', 'might', 'be', 'sharing', 'last'],
      ['might', 'sharing', 'cake', 'They'],
      'Quitar be y dejar They might share the last piece of cake',
      'The ending keeps the action open and ongoing',
      'El pastel cierra la historia con calma'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
