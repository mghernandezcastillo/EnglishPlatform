import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[0].lessons[4];
const targetPattern = 'Do/Does + subject + base verb?; Subject + do/does not + base verb';
const ctxPattern = 'estructura previamente aprendida / orden natural de la oración';
const sharedDistractors = ['can', 'could', 'might', 'must', 'should'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Do/Does como auxiliares';
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
  { title: 'La pista del barrio: Horario de sábado', type: 'Descubrimiento', value: 'constancia' },
  [
    ctx(
      'Lina y Tomás están en la pista del barrio.',
      'Lina and Tomas are at the neighborhood track.',
      ['Lina', 'and', 'Tomas', 'are'],
      ['Lina', 'Tomas', 'track', 'neighborhood'],
      'Traducir la escena de forma literal sin pensar en el orden natural.',
      'Primero identifica a las personas y el lugar.',
      'La escena abre con un entorno claro y cotidiano para practicar preguntas y negaciones con do / does.'
    ),
    tgt(
      '¿Lina patina todos los sábados?',
      'Does Lina skate every Saturday?',
      ['Does', 'Lina', 'skate'],
      ['skate', 'Saturday'],
      'Olvidar does o cambiar skate por una forma conjugada.',
      'La pregunta empieza con does y sigue con el verbo en base form.',
      'Estructura objetivo: Do/Does + subject + base verb? El tutor debe insistir en la base form después del auxiliar.'
    ),
    tgt(
      'No, Lina no patina todos los sábados.',
      'No, Lina does not skate every Saturday.',
      ['does', 'not', 'skate'],
      ['skate', 'Saturday'],
      'Olvidar not o poner el verbo en tercera persona después del auxiliar.',
      'Después de does not, el verbo vuelve a la base form.',
      'Estructura objetivo: Subject + do/does not + base verb. El tutor debe reforzar la negación completa.'
    ),
    tgt(
      'Tomás no patina hoy porque estudia.',
      'Tomas does not skate today because he studies.',
      ['Tomas', 'does', 'not', 'skate'],
      ['skate', 'today', 'studies'],
      'Conjugar skate o omitir not.',
      'La negación usa does not + base form.',
      'La oración mantiene el foco en la negación con do / does y un contexto real.'
    ),
    ctx(
      'Antes de empezar, revisan los cascos y el agua.',
      'Before starting, they check the helmets and water.',
      ['Before', 'starting', 'they', 'check'],
      ['helmets', 'water', 'starting'],
      'Perder la relación entre el contexto y la acción principal.',
      'La escena debe seguir fluyendo de forma natural.',
      'Esta línea conecta la rutina con las preguntas y negaciones del bloque.'
    ),
    tgt(
      '¿Tomás entrena después de la escuela?',
      'Does Tomas practice after school?',
      ['Does', 'Tomas', 'practice'],
      ['practice', 'school'],
      'Poner el verbo principal con terminación -s.',
      'Does + subject + verbo base.',
      'Estructura objetivo: Do/Does + subject + base verb? El tutor debe hacer visible el orden interrogativo.'
    ),
    tgt(
      'No, Tomás no practica después de la escuela.',
      'No, Tomas does not practice after school.',
      ['does', 'not', 'practice'],
      ['practice', 'school'],
      'Olvidar not o convertir practice en practices.',
      'La forma correcta es does not + base form.',
      'La negación debe sonar natural y conservar la base form del verbo principal.'
    ),
    tgt(
      'Ellos no entrenan el martes.',
      'They do not train on Tuesday.',
      ['They', 'do', 'not', 'train'],
      ['train', 'Tuesday'],
      'Usar train con terminación extra.',
      'Do not + verbo en base form.',
      'Estructura objetivo: Subject + do/does not + base verb. El tutor debe sostener la forma base tras do not.'
    ),
    ctx(
      'El entrenador mira la agenda y sonríe.',
      'The coach looks at the schedule and smiles.',
      ['coach', 'looks', 'schedule'],
      ['coach', 'schedule', 'smiles'],
      'Acabar la escena sin una transición clara al siguiente bloque de práctica.',
      'Observa el contexto antes de pasar a la siguiente pregunta.',
      'La línea mantiene la tensión ligera de la historia y prepara la pregunta final.'
    ),
    tgt(
      '¿Ellos entrenan el fin de semana?',
      'Do they train on the weekend?',
      ['Do', 'they', 'train'],
      ['train', 'weekend'],
      'Mover el sujeto al inicio o agregar terminación al verbo.',
      'Do + subject + base verb.',
      'Estructura objetivo: Do/Does + subject + base verb? El tutor debe consolidar la pregunta corta y natural.'
    ),
    tgt(
      'No, ellos no entrenan el fin de semana.',
      'No, they do not train on the weekend.',
      ['do', 'not', 'train'],
      ['train', 'weekend'],
      'Olvidar not o usar trains.',
      'La negación conserva el verbo en base form.',
      'La oración final refuerza la estructura negativa del bloque.'
    ),
    ctx(
      'Al final, el horario queda claro para todos.',
      'In the end, the schedule is clear for everyone.',
      ['schedule', 'is', 'clear'],
      ['schedule', 'clear', 'everyone'],
      'Cerrar la historia con una frase poco natural.',
      'La última línea debe sonar simple y completa.',
      'El cierre deja la idea de rutina resuelta y lista para continuar.'
    )
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La biblioteca tranquila: Rutina de tarde', type: 'Uso natural', value: 'disciplina' },
  [
    ctx(
      'Camila y Andres están en la biblioteca.',
      'Camila and Andres are in the library.',
      ['Camila', 'and', 'Andres', 'are'],
      ['Camila', 'Andres', 'library'],
      'Traducir la escena de manera mecánica.',
      'Primero ubica el lugar y a las personas.',
      'La biblioteca ofrece un entorno distinto para practicar el mismo patrón sin repetir la primera historia.'
    ),
    tgt(
      '¿Camila lee en voz alta cada tarde?',
      'Does Camila read aloud every afternoon?',
      ['Does', 'Camila', 'read'],
      ['read', 'afternoon'],
      'Dejar read con terminación incorrecta.',
      'Does + sujeto + verbo base.',
      'Estructura objetivo: Do/Does + subject + base verb? El tutor debe mantener read en base form.'
    ),
    tgt(
      'No, Camila no lee en voz alta cada tarde.',
      'No, Camila does not read aloud every afternoon.',
      ['does', 'not', 'read'],
      ['read', 'afternoon'],
      'Omitir not o usar reads.',
      'La negación usa does not + base form.',
      'La negativa mantiene la base form y suena natural en contexto de biblioteca.'
    ),
    tgt(
      'Andres no toma notas en silencio.',
      'Andres does not take notes quietly.',
      ['Andres', 'does', 'not', 'take'],
      ['take', 'notes', 'quietly'],
      'Conjugar take como takes.',
      'Después de does not, take no cambia.',
      'El tutor debe remarcar que la base form se conserva después del auxiliar.'
    ),
    ctx(
      'Antes de comenzar, organizan los libros y las tarjetas.',
      'Before starting, they organize the books and cards.',
      ['Before', 'starting', 'they', 'organize'],
      ['books', 'cards', 'starting'],
      'Perder la relación entre la escena y la rutina.',
      'La historia sigue una preparación simple y clara.',
      'La escena cambia a la biblioteca para no repetir la primera narración.'
    ),
    tgt(
      '¿Andres trabaja aquí los viernes?',
      'Does Andres work here on Fridays?',
      ['Does', 'Andres', 'work'],
      ['work', 'Fridays'],
      'Agregar terminación al verbo principal.',
      'Does + subject + base verb.',
      'La pregunta refuerza el uso de does para tercera persona singular.'
    ),
    tgt(
      'No, Andres no trabaja aquí los viernes.',
      'No, Andres does not work here on Fridays.',
      ['does', 'not', 'work'],
      ['work', 'Fridays'],
      'Olvidar not o usar works.',
      'La base form sigue al auxiliar negativo.',
      'La negación mantiene el verbo sin conjugación después de does not.'
    ),
    tgt(
      'Ellos no leen juntos después de clase.',
      'They do not read together after class.',
      ['They', 'do', 'not', 'read'],
      ['read', 'class', 'together'],
      'Cambiar read por reads.',
      'Do not + verbo base.',
      'La oración cierra la rutina de lectura con una negación clara.'
    ),
    ctx(
      'La mesa está ordenada y la luz es suave.',
      'The table is tidy and the light is soft.',
      ['table', 'is', 'tidy'],
      ['table', 'tidy', 'soft'],
      'Cerrar la escena sin una transición hacia la siguiente pregunta.',
      'Mantén el escenario claro y sencillo.',
      'La biblioteca sigue siendo el escenario, pero cambia la acción para evitar repetición.'
    ),
    tgt(
      '¿Ellos revisan el plan antes de salir?',
      'Do they check the plan before leaving?',
      ['Do', 'they', 'check'],
      ['check', 'plan', 'leaving'],
      'Colocar el verbo en tercera persona.',
      'Do + subject + base verb.',
      'Estructura objetivo: Do/Does + subject + base verb? El tutor debe fijar la forma base del verbo.'
    ),
    tgt(
      'No, ellos no revisan el plan antes de salir.',
      'No, they do not check the plan before leaving.',
      ['do', 'not', 'check'],
      ['check', 'plan', 'leaving'],
      'Omitir not o usar checks.',
      'La negación conserva el verbo en base form.',
      'La forma negativa ayuda a consolidar el patrón del bloque.'
    ),
    ctx(
      'Al final, saben qué libro llevarse.',
      'In the end, they know which book to take.',
      ['know', 'which', 'book'],
      ['book', 'know', 'take'],
      'Cerrar la historia con un final plano.',
      'La última línea debe sonar natural y útil.',
      'El cierre deja una sensación de rutina resuelta y elección clara.'
    )
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La cocina de domingo: Reglas claras', type: 'Integración', value: 'familia' },
  [
    ctx(
      'Julia y Mateo están en la cocina.',
      'Julia and Mateo are in the kitchen.',
      ['Julia', 'and', 'Mateo', 'are'],
      ['Julia', 'Mateo', 'kitchen'],
      'Traducir la escena sin pensar en la escena completa.',
      'Primero ubica a las personas y el lugar.',
      'La cocina de domingo ofrece un cierre familiar para practicar preguntas y negativas con do / does.'
    ),
    tgt(
      '¿Julia cocina cada domingo?',
      'Does Julia cook every Sunday?',
      ['Does', 'Julia', 'cook'],
      ['cook', 'Sunday'],
      'Escribir cooks en lugar de cook.',
      'Does + sujeto + verbo base.',
      'El bloque trabaja la pregunta con tercera persona singular y verbo base.'
    ),
    tgt(
      'No, Julia no cocina cada domingo.',
      'No, Julia does not cook every Sunday.',
      ['does', 'not', 'cook'],
      ['cook', 'Sunday'],
      'Olvidar not o usar cooks.',
      'La negación usa does not + base verb.',
      'La estructura negativa mantiene el verbo en base form.'
    ),
    tgt(
      'Mateo no limpia la mesa por la mañana.',
      'Mateo does not clean the table in the morning.',
      ['Mateo', 'does', 'not', 'clean'],
      ['clean', 'table', 'morning'],
      'Conjugar clean o perder not.',
      'Después de does not, clean no cambia.',
      'La negación sigue reforzando el uso correcto del auxiliar.'
    ),
    ctx(
      'Antes de servir, prueban la sopa y acomodan los platos.',
      'Before serving, they taste the soup and arrange the plates.',
      ['Before', 'serving', 'they', 'taste'],
      ['soup', 'plates', 'serving'],
      'Perder la secuencia de preparación.',
      'La narración debe sonar muy cotidiana.',
      'La escena de cocina amplía el contexto para el cierre del bloque.'
    ),
    tgt(
      '¿Mateo ayuda a servir la comida?',
      'Does Mateo help serve the meal?',
      ['Does', 'Mateo', 'help'],
      ['help', 'meal'],
      'Colocar helps en vez de help.',
      'Con does, help se mantiene en base form.',
      'La pregunta debe sonar natural y mantener la base form del verbo.'
    ),
    tgt(
      'No, Mateo no ayuda a servir la comida.',
      'No, Mateo does not help serve the meal.',
      ['does', 'not', 'help'],
      ['help', 'meal'],
      'Omitir not o usar helps.',
      'La forma negativa usa does not + base verb.',
      'La negativa mantiene el patrón simple y claro del bloque.'
    ),
    tgt(
      'Ellos no comen rapido cuando hay visita.',
      'They do not eat quickly when there are guests.',
      ['They', 'do', 'not', 'eat'],
      ['eat', 'guests', 'quickly'],
      'Cambiar eat por eats.',
      'Do not + verbo base.',
      'La frase suma contexto familiar sin salir del patrón de negativa.'
    ),
    ctx(
      'La casa huele bien y todos esperan sentados.',
      'The house smells good and everyone waits seated.',
      ['house', 'smells', 'good'],
      ['house', 'smells', 'seated'],
      'Cerrar la historia con una frase poco natural.',
      'La última parte debe completar la escena.',
      'La historia final del subbloque suena a rutina familiar completa.'
    ),
    tgt(
      '¿Ellos comen juntos al mediodia?',
      'Do they eat together at noon?',
      ['Do', 'they', 'eat'],
      ['eat', 'noon', 'together'],
      'Usar eats en lugar de eat.',
      'Do + subject + base verb.',
      'La pregunta final consolida el uso de do con sujeto plural.'
    ),
    tgt(
      'No, ellos no comen juntos al mediodia.',
      'No, they do not eat together at noon.',
      ['do', 'not', 'eat'],
      ['eat', 'noon', 'together'],
      'Olvidar not o usar eats.',
      'La negación conserva la base form.',
      'La última negativa deja el patrón muy visible para el alumno.'
    ),
    ctx(
      'Al final, la mesa queda lista y tranquila.',
      'In the end, the table is ready and calm.',
      ['table', 'is', 'ready'],
      ['table', 'ready', 'calm'],
      'Cerrar con una frase poco conectada a la historia.',
      'La escena final debe sentirse cerrada.',
      'El cierre deja una imagen tranquila y familiar.'
    )
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 5.');
