import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[0];
const targetPattern = 'Subject + base verb / verb-s; do/does for negatives and questions';
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Simple';
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
  { title: 'La ruta del correo: Mañanas tranquilas', type: 'Descubrimiento', value: 'constancia' },
  [
    ctx(
      'Marta y Diego trabajan en la oficina del correo.',
      'Marta and Diego work at the post office.',
      ['Marta', 'and', 'Diego', 'work'],
      ['Marta', 'Diego', 'post office'],
      'Traducir la escena de forma literal sin ordenar la idea.',
      'Primero ubica a las personas y el lugar.',
      'La historia abre con una rutina clara para practicar Present Simple.'
    ),
    tgt(
      'Marta clasifica las cartas cada mañana.',
      'Marta sorts the letters every morning.',
      ['Marta', 'sorts', 'letters'],
      ['sorts', 'letters', 'morning'],
      'Olvidar la -s en tercera persona singular.',
      'En he/she/it, el verbo suele sumar -s o -es.',
      'La oración fija el patrón de presente simple con sujeto singular.'
    ),
    tgt(
      'Diego lleva los paquetes a tiempo.',
      'Diego carries the packages on time.',
      ['Diego', 'carries', 'packages'],
      ['carries', 'packages', 'time'],
      'Conjugar carry de forma incorrecta.',
      'El verbo principal cambia a -ies con ciertos verbos en tercera persona.',
      'El tutor debe mostrar la forma natural del verbo en tercera persona.'
    ),
    tgt(
      'La oficina abre a las ocho.',
      'The office opens at eight.',
      ['office', 'opens', 'eight'],
      ['opens', 'office', 'eight'],
      'Usar open sin la terminación correcta.',
      'En tercera persona singular, el verbo se adapta a la regla del presente simple.',
      'La frase trabaja una acción cotidiana y muy clara.'
    ),
    ctx(
      'Antes de salir, revisan la lista y toman café.',
      'Before leaving, they check the list and drink coffee.',
      ['Before', 'leaving', 'they', 'check'],
      ['list', 'coffee', 'leaving'],
      'Perder el hilo de la rutina matutina.',
      'La escena debe sonar natural y cotidiana.',
      'La historia avanza con una preparación simple antes de más ejemplos.'
    ),
    tgt(
      'Marta no olvida la dirección correcta.',
      'Marta does not forget the correct address.',
      ['Marta', 'does', 'not', 'forget'],
      ['forget', 'address'],
      'Omitir does o cambiar forget por forgets.',
      'Para negar en presente simple se usa does not + verbo base.',
      'El bloque refuerza la forma negativa del presente simple.'
    ),
    tgt(
      'Diego no trabaja los domingos.',
      'Diego does not work on Sundays.',
      ['Diego', 'does', 'not', 'work'],
      ['work', 'Sundays'],
      'Usar works después de does not.',
      'Después de does not, el verbo vuelve a su forma base.',
      'La negación debe sonar estable y fácil de reconocer.'
    ),
    tgt(
      '¿Marta recoge el correo temprano?',
      'Does Marta collect the mail early?',
      ['Does', 'Marta', 'collect'],
      ['collect', 'mail', 'early'],
      'Olvidar does o cambiar collect por collects.',
      'Do/Does + subject + base verb.',
      'La pregunta practica el orden interrogativo del presente simple.'
    ),
    ctx(
      'La calle está tranquila y el día empieza bien.',
      'The street is quiet and the day starts well.',
      ['street', 'is', 'quiet'],
      ['street', 'quiet', 'day'],
      'Cerrar la escena sin sensación de avance.',
      'La historia debe respirar con calma.',
      'La rutina sigue avanzando mientras se alternan afirmaciones, negaciones y preguntas.'
    ),
    tgt(
      '¿Diego entrega los sobres después del almuerzo?',
      'Does Diego deliver the envelopes after lunch?',
      ['Does', 'Diego', 'deliver'],
      ['deliver', 'envelopes', 'lunch'],
      'Poner deliver en tercera persona.',
      'With does, the main verb stays in base form.',
      'La pregunta consolida la forma interrogativa de manera natural.'
    ),
    tgt(
      'Ellos no esperan mucho tiempo.',
      'They do not wait a long time.',
      ['They', 'do', 'not', 'wait'],
      ['wait', 'time'],
      'Usar waits en vez de wait.',
      'Con do not, el verbo queda en base form.',
      'La negativa plural ayuda a contrastar con las frases de tercera persona singular.'
    ),
    ctx(
      'Al final, todo llega a su lugar.',
      'In the end, everything arrives in its place.',
      ['everything', 'arrives', 'place'],
      ['everything', 'arrives', 'place'],
      'Cerrar la historia con una frase poco natural.',
      'La última línea debe sonar completa y ordenada.',
      'El cierre deja la idea de rutina resuelta y clara.'
    )
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La escuela de música: Tardes ordenadas', type: 'Uso natural', value: 'disciplina' },
  [
    ctx(
      'Lucía y Ana están en la escuela de música.',
      'Lucia and Ana are at the music school.',
      ['Lucia', 'and', 'Ana', 'are'],
      ['Lucia', 'Ana', 'music school'],
      'Traducir la escena de forma mecánica.',
      'Primero identifica el lugar y a las personas.',
      'La escuela de música ofrece un entorno diferente para seguir practicando presente simple.'
    ),
    tgt(
      'Lucía practica el piano todos los días.',
      'Lucia practices the piano every day.',
      ['Lucia', 'practices', 'piano'],
      ['practices', 'piano', 'day'],
      'Olvidar la terminación -s en tercera persona.',
      'El presente simple en tercera persona singular suele sumar -s.',
      'La frase fija la forma básica del presente simple.'
    ),
    tgt(
      'Ana organiza las partituras con cuidado.',
      'Ana organizes the sheet music carefully.',
      ['Ana', 'organizes', 'sheet'],
      ['organizes', 'sheet', 'carefully'],
      'Conjugar organize de forma incorrecta.',
      'En tercera persona singular, organize toma -s / -es según el caso.',
      'La oración mantiene el foco en la rutina y el orden.'
    ),
    tgt(
      'El profesor abre la sala a las tres.',
      'The teacher opens the room at three.',
      ['teacher', 'opens', 'room'],
      ['opens', 'room', 'three'],
      'Usar open sin la terminación correcta.',
      'La tercera persona singular ajusta el verbo.',
      'La línea añade un horario concreto para reforzar el presente simple.'
    ),
    ctx(
      'Antes de la clase, revisan los instrumentos y la lista.',
      'Before class, they check the instruments and the list.',
      ['Before', 'class', 'they', 'check'],
      ['instruments', 'list', 'class'],
      'Perder la secuencia de preparación.',
      'La escena debe sonar como una rutina real.',
      'La música permite una segunda capa de contexto sin repetir la primera historia.'
    ),
    tgt(
      'Lucía no habla durante la práctica.',
      'Lucia does not talk during practice.',
      ['Lucia', 'does', 'not', 'talk'],
      ['talk', 'practice'],
      'Cambiar talk por talks después de does not.',
      'Después de does not, el verbo va en base form.',
      'La negativa muestra con claridad la forma correcta del presente simple.'
    ),
    tgt(
      'Ana no llega tarde.',
      'Ana does not arrive late.',
      ['Ana', 'does', 'not', 'arrive'],
      ['arrive', 'late'],
      'Usar arrives después de does not.',
      'La forma negativa mantiene el verbo en base form.',
      'El tutor debe reforzar el patrón negativo sin complicarlo.'
    ),
    tgt(
      '¿El profesor enseña una canción nueva hoy?',
      'Does the teacher teach a new song today?',
      ['Does', 'the', 'teacher', 'teach'],
      ['teach', 'song', 'today'],
      'Conjugar teach como teaches en la pregunta.',
      'Do/Does + subject + base verb.',
      'La pregunta practica el orden de la interrogativa en presente simple.'
    ),
    ctx(
      'La música es suave y todos escuchan.',
      'The music is soft and everyone listens.',
      ['music', 'is', 'soft'],
      ['music', 'soft', 'everyone'],
      'Cerrar la escena sin una transición natural.',
      'La historia debe mantener un ritmo tranquilo.',
      'La clase avanza con calma mientras se mezclan afirmaciones y preguntas.'
    ),
    tgt(
      '¿Lucía termina la pieza al final?',
      'Does Lucia finish the piece at the end?',
      ['Does', 'Lucia', 'finish'],
      ['finish', 'piece', 'end'],
      'Usar finishes después de does.',
      'Con does, finish se mantiene en base form.',
      'La pregunta final consolida la estructura interrogativa.'
    ),
    tgt(
      'Ellos no olvidan las notas.',
      'They do not forget the notes.',
      ['They', 'do', 'not', 'forget'],
      ['forget', 'notes'],
      'Usar forgets con sujeto plural.',
      'Con do not, el verbo permanece en base form.',
      'La negativa plural cierra el conjunto de prácticas.'
    ),
    ctx(
      'Al final, la sala queda en silencio.',
      'In the end, the room stays quiet.',
      ['room', 'stays', 'quiet'],
      ['room', 'quiet', 'quiet'],
      'Cerrar la historia de forma plana.',
      'La última línea debe sonar completa y natural.',
      'El final deja una sensación de cierre y concentración.'
    )
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El refugio de animales: Rutina de cuidado', type: 'Integración', value: 'responsabilidad' },
  [
    ctx(
      'Nora y Bruno están en el refugio de animales.',
      'Nora and Bruno are at the animal shelter.',
      ['Nora', 'and', 'Bruno', 'are'],
      ['Nora', 'Bruno', 'animal shelter'],
      'Traducir la escena de forma demasiado literal.',
      'Primero ubica el lugar y a las personas.',
      'El refugio aporta un entorno nuevo para consolidar el presente simple.'
    ),
    tgt(
      'Nora alimenta a los gatos por la mañana.',
      'Nora feeds the cats in the morning.',
      ['Nora', 'feeds', 'cats'],
      ['feeds', 'cats', 'morning'],
      'Olvidar la -s en tercera persona singular.',
      'En tercera persona singular, el verbo suele sumar -s.',
      'La frase presenta una acción de cuidado cotidiana.'
    ),
    tgt(
      'Bruno limpia las jaulas después.',
      'Bruno cleans the cages later.',
      ['Bruno', 'cleans', 'cages'],
      ['cleans', 'cages', 'later'],
      'Conjugar clean de forma incorrecta.',
      'La tercera persona singular cambia el verbo de forma visible.',
      'La línea refuerza una tarea de rutina clara.'
    ),
    tgt(
      'El refugio abre temprano.',
      'The shelter opens early.',
      ['shelter', 'opens', 'early'],
      ['opens', 'shelter', 'early'],
      'Usar open sin la terminación correcta.',
      'La tercera persona singular ajusta el verbo.',
      'La historia incorpora un horario concreto para reforzar el patrón.'
    ),
    ctx(
      'Antes de empezar, revisan el agua y las listas.',
      'Before starting, they check the water and the lists.',
      ['Before', 'starting', 'they', 'check'],
      ['water', 'lists', 'starting'],
      'Perder la secuencia de preparación.',
      'La escena debe sonar como una rutina real.',
      'El refugio ofrece una segunda capa de contexto sin repetir los otros escenarios.'
    ),
    tgt(
      'Nora no olvida a los perros pequeños.',
      'Nora does not forget the small dogs.',
      ['Nora', 'does', 'not', 'forget'],
      ['forget', 'dogs', 'small'],
      'Usar forgets después de does not.',
      'Después de does not, el verbo va en base form.',
      'La negativa muestra claramente la estructura del presente simple.'
    ),
    tgt(
      'Bruno no trabaja solo.',
      'Bruno does not work alone.',
      ['Bruno', 'does', 'not', 'work'],
      ['work', 'alone'],
      'Usar works después de does not.',
      'La forma negativa mantiene el verbo en base form.',
      'La oración mantiene el foco en el patrón negativo.'
    ),
    tgt(
      '¿Nora revisa la puerta antes de salir?',
      'Does Nora check the door before leaving?',
      ['Does', 'Nora', 'check'],
      ['check', 'door', 'leaving'],
      'Conjugar check como checks en la pregunta.',
      'Do/Does + subject + base verb.',
      'La pregunta práctica el orden interrogativo de forma directa.'
    ),
    ctx(
      'El patio está limpio y los animales están calmados.',
      'The yard is clean and the animals are calm.',
      ['yard', 'is', 'clean'],
      ['yard', 'clean', 'calm'],
      'Cerrar la escena sin una transición natural.',
      'La historia debe mantener un ritmo tranquilo.',
      'La rutina del refugio avanza mientras se mezclan afirmaciones y preguntas.'
    ),
    tgt(
      '¿Bruno limpia la mesa al final?',
      'Does Bruno clean the table at the end?',
      ['Does', 'Bruno', 'clean'],
      ['clean', 'table', 'end'],
      'Usar cleans después de does.',
      'Con does, clean se mantiene en base form.',
      'La pregunta final consolida la forma interrogativa.'
    ),
    tgt(
      'Ellos no dejan comida en el suelo.',
      'They do not leave food on the floor.',
      ['They', 'do', 'not', 'leave'],
      ['leave', 'food', 'floor'],
      'Usar leaves con sujeto plural.',
      'Con do not, el verbo permanece en base form.',
      'La negativa plural cierra el conjunto de prácticas.'
    ),
    ctx(
      'Al final, todo está listo para la noche.',
      'In the end, everything is ready for the night.',
      ['everything', 'is', 'ready'],
      ['everything', 'ready', 'night'],
      'Cerrar la historia sin sensación de cuidado cumplido.',
      'La última línea debe sonar completa y ordenada.',
      'El cierre deja la sensación de tarea bien hecha.'
    )
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 7.');
