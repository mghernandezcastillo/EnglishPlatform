import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[0];
const targetPattern = 'If + present simple, present simple';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'can', 'must', 'should', 'may'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Zero Conditional';
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
  { title: 'La cafetería tranquila: Reglas de la cocina', type: 'Descubrimiento', value: 'orden' },
  [
    ctx(
      'La cafetería abre temprano y todo huele a pan',
      'The cafe opens early and everything smells like bread',
      ['cafe', 'opens', 'bread'],
      ['cafe', 'opens', 'bread'],
      'Perder el ambiente de rutina y cocina',
      'The opening scene should feel like a place where general rules happen',
      'La cocina sirve para mostrar reglas generales'
    ),
    ctx(
      'Hay una olla con agua y una bandeja lista',
      'There is a pot of water and a tray ready',
      ['pot', 'water', 'tray'],
      ['pot', 'water', 'tray'],
      'Hacer la escena demasiado abstracta',
      'Keep the kitchen objects clear and visible',
      'Los objetos ayudan a explicar la regla'
    ),
    ctx(
      'El chef escribe reglas simples en una hoja',
      'The chef writes simple rules on a sheet',
      ['chef', 'writes', 'rules'],
      ['chef', 'rules', 'sheet'],
      'Ignorar la idea de instrucción general',
      'Rules on a sheet set up zero conditional logic',
      'Las reglas escritas preparan el patrón'
    ),
    ctx(
      'Todos miran la cocina con atención',
      'Everyone watches the kitchen closely',
      ['Everyone', 'watches', 'kitchen'],
      ['Everyone', 'watches', 'kitchen'],
      'Cerrar sin una sensación de causa y efecto',
      'The scene should support general outcomes',
      'La atención prepara el aprendizaje'
    ),
    tgt(
      'Si calientas agua, hierve',
      'If you heat water, it boils',
      ['If', 'you', 'heat', 'water'],
      ['If', 'heat', 'water', 'boils'],
      'Usar If you will heat water, it boils',
      'Zero Conditional keeps both clauses in present simple',
      'La primera regla general es directa'
    ),
    tgt(
      'Si agregas sal, la sopa sabe más fuerte',
      'If you add salt, the soup tastes stronger',
      ['If', 'you', 'add', 'salt'],
      ['If', 'add', 'salt', 'tastes'],
      'Usar If you add salt, the soup will taste stronger',
      'Both clauses stay in present simple for general truth',
      'La sal cambia el sabor siempre'
    ),
    tgt(
      'Si el horno se calienta demasiado, el pan se quema',
      'If the oven gets too hot, the bread burns',
      ['If', 'the', 'oven', 'gets', 'too'],
      ['If', 'oven', 'hot', 'bread'],
      'Usar If the oven will get too hot, the bread burns',
      'Zero Conditional does not use will in the if-clause',
      'El horno demasiado caliente siempre causa el mismo resultado'
    ),
    tgt(
      'Si la masa descansa, sube',
      'If the dough rests, it rises',
      ['If', 'the', 'dough', 'rests'],
      ['If', 'dough', 'rests', 'rises'],
      'Usar If the dough will rest, it rises',
      'General cause and result stay in present simple',
      'La masa necesita tiempo para cambiar'
    ),
    tgt(
      'Si mezclan bien los ingredientes, el pastel queda suave',
      'If they mix the ingredients well, the cake turns soft',
      ['If', 'they', 'mix', 'ingredients', 'well'],
      ['If', 'mix', 'ingredients', 'cake'],
      'Usar If they mix the ingredients well, the cake will turn soft',
      'The result is a natural, repeated outcome',
      'La mezcla correcta produce el resultado'
    ),
    tgt(
      'Si suena el temporizador, el chef revisa la bandeja',
      'If the timer rings, the chef checks the tray',
      ['If', 'the', 'timer', 'rings'],
      ['If', 'timer', 'rings', 'checks'],
      'Usar If the timer rings, the chef will check the tray',
      'Zero Conditional describes what always happens',
      'El temporizador marca una respuesta automática'
    ),
    tgt(
      'Si pones fruta en la nevera, se mantiene fresca por más tiempo',
      'If you put fruit in the fridge, it stays fresh longer',
      ['If', 'you', 'put', 'fruit'],
      ['If', 'put', 'fruit', 'fridge'],
      'Usar If you put fruit in the fridge, it will stay fresh longer',
      'The result remains a present-time general fact',
      'La conservación de la fruta es una regla común'
    ),
    tgt(
      'Si la cocina está limpia, todos trabajan más rápido',
      'If the kitchen is clean, everyone works faster',
      ['If', 'the', 'kitchen', 'is', 'clean'],
      ['If', 'kitchen', 'clean', 'everyone'],
      'Usar If the kitchen is clean, everyone will work faster',
      'Zero Conditional keeps the result in present simple',
      'El orden mejora el trabajo siempre'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La clase de ciencias: Cuando algo pasa, ocurre otra cosa', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'La clase empieza con una lista en la pizarra',
      'The class starts with a list on the board',
      ['class', 'starts', 'board'],
      ['class', 'starts', 'board'],
      'Perder el contexto del aula',
      'The classroom should feel ready for rule-based practice',
      'El aula prepara el hábito'
    ),
    ctx(
      'Los estudiantes tienen cuadernos abiertos',
      'The students have open notebooks',
      ['students', 'notebooks'],
      ['students', 'notebooks'],
      'Hacer una escena sin material escolar',
      'Notebooks make the lesson concrete',
      'Los cuadernos sostienen la práctica'
    ),
    ctx(
      'La profesora habla de hábitos y resultados',
      'The teacher talks about habits and results',
      ['teacher', 'habits', 'results'],
      ['teacher', 'habits', 'results'],
      'Ignorar la relación causa resultado',
      'This scene is about general consequences',
      'La profesora presenta la lógica general'
    ),
    ctx(
      'Al fondo, alguien repasa vocabulario',
      'In the back, someone reviews vocabulary',
      ['someone', 'reviews', 'vocabulary'],
      ['someone', 'reviews', 'vocabulary'],
      'Cerrar sin una acción continua de estudio',
      'The background study should stay active',
      'El estudio sigue en marcha'
    ),
    tgt(
      'Si estudias todos los días, recuerdas más',
      'If you study every day, you remember more',
      ['If', 'you', 'study', 'every'],
      ['If', 'study', 'day', 'remember'],
      'Usar If you study every day, you will remember more',
      'Zero Conditional states a general learning result',
      'El hábito de estudiar siempre da resultados'
    ),
    tgt(
      'Si el maestro hace una pregunta, los estudiantes responden',
      'If the teacher asks a question, the students answer',
      ['If', 'the', 'teacher', 'asks', 'question'],
      ['If', 'teacher', 'asks', 'answer'],
      'Usar If the teacher will ask a question, the students answer',
      'Present simple in both clauses keeps the rule general',
      'La pregunta provoca una respuesta automática'
    ),
    tgt(
      'Si alguien falta a la práctica, el equipo lo nota',
      'If someone misses practice, the team notices',
      ['If', 'someone', 'misses', 'practice'],
      ['If', 'someone', 'misses', 'notices'],
      'Usar If someone will miss practice, the team notices',
      'Zero Conditional is for repeated, general outcomes',
      'Faltar a la práctica siempre tiene efecto'
    ),
    tgt(
      'Si leen en voz alta, mejoran la pronunciación',
      'If they read aloud, they improve pronunciation',
      ['If', 'they', 'read', 'aloud'],
      ['If', 'they', 'read', 'improve'],
      'Usar If they read aloud, they will improve pronunciation',
      'The sentence describes a regular result',
      'Leer en voz alta ayuda siempre'
    ),
    tgt(
      'Si el alumno copia despacio, comete menos errores',
      'If the student copies slowly, he makes fewer mistakes',
      ['If', 'the', 'student', 'copies', 'slowly'],
      ['If', 'student', 'copies', 'mistakes'],
      'Usar If the student copies slowly, he will make fewer mistakes',
      'The result stays in present simple',
      'Copiar despacio reduce los errores'
    ),
    tgt(
      'Si suena el timbre, la clase termina',
      'If the bell rings, the class ends',
      ['If', 'the', 'bell', 'rings'],
      ['If', 'bell', 'rings', 'ends'],
      'Usar If the bell rings, the class will end',
      'A bell ringing always signals the same action',
      'El timbre marca el cierre'
    ),
    tgt(
      'Si corrigen juntos, avanzan más rápido',
      'If they correct together, they move faster',
      ['If', 'they', 'correct', 'together'],
      ['If', 'they', 'correct', 'faster'],
      'Usar If they correct together, they will move faster',
      'The outcome is a repeatable truth',
      'Corregir en grupo acelera el avance'
    ),
    tgt(
      'Si escuchas con calma, entiendes mejor',
      'If you listen calmly, you understand better',
      ['If', 'you', 'listen', 'calmly'],
      ['If', 'you', 'listen', 'understand'],
      'Usar If you listen calmly, you will understand better',
      'General listening advice stays in present simple',
      'Escuchar con calma mejora la comprensión'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El jardín del barrio: Cuando pasa esto, ocurre esto', type: 'Integración', value: 'cuidado' },
  [
    ctx(
      'El jardín del barrio está lleno de luz',
      'The neighborhood garden is full of light',
      ['garden', 'light'],
      ['garden', 'light'],
      'Perder el tono natural de la escena exterior',
      'The garden should feel like a place with regular patterns',
      'El jardín deja ver la rutina'
    ),
    ctx(
      'Las plantas crecen cerca de la cerca',
      'The plants grow near the fence',
      ['plants', 'grow', 'fence'],
      ['plants', 'grow', 'fence'],
      'Hacer la escena demasiado breve',
      'Visible plant growth supports general rules',
      'Las plantas ya muestran su comportamiento'
    ),
    ctx(
      'Sara y Daniel riegan antes de irse',
      'Sara and Daniel water before leaving',
      ['Sara', 'Daniel', 'water'],
      ['Sara', 'Daniel', 'water'],
      'Ignorar la rutina de cuidado',
      'The routine should feel repeated and familiar',
      'El cuidado del jardín ya es hábito'
    ),
    ctx(
      'El suelo todavía está húmedo por la mañana',
      'The soil is still wet in the morning',
      ['soil', 'wet', 'morning'],
      ['soil', 'wet', 'morning'],
      'Cerrar sin un resultado visible del riego',
      'The wet soil should set up cause and effect',
      'La humedad deja una pista clara'
    ),
    tgt(
      'Si llueve, la tierra se moja',
      'If it rains, the soil gets wet',
      ['If', 'it', 'rains', 'soil'],
      ['If', 'rains', 'soil', 'wet'],
      'Usar If it will rain, the soil gets wet',
      'Weather facts are classic Zero Conditional material',
      'La lluvia siempre trae el mismo efecto'
    ),
    tgt(
      'Si sale el sol, las plantas crecen rápido',
      'If the sun comes out, the plants grow quickly',
      ['If', 'the', 'sun', 'comes', 'out'],
      ['If', 'sun', 'comes', 'plants'],
      'Usar If the sun will come out, the plants grow quickly',
      'Present simple describes the natural result',
      'El sol acelera el crecimiento'
    ),
    tgt(
      'Si olvidan el agua, las hojas se caen',
      'If they forget the water, the leaves droop',
      ['If', 'they', 'forget', 'water'],
      ['If', 'they', 'forget', 'leaves'],
      'Usar If they will forget the water, the leaves droop',
      'The if-clause stays in present simple',
      'Olvidar el agua siempre se nota'
    ),
    tgt(
      'Si trabajan juntos, el jardín luce mejor',
      'If they work together, the garden looks better',
      ['If', 'they', 'work', 'together'],
      ['If', 'they', 'work', 'garden'],
      'Usar If they will work together, the garden looks better',
      'Zero Conditional works for simple repeated results',
      'Trabajar juntos mejora todo'
    ),
    tgt(
      'Si el viento sopla fuerte, las ramas se mueven',
      'If the wind blows hard, the branches move',
      ['If', 'the', 'wind', 'blows', 'hard'],
      ['If', 'wind', 'blows', 'branches'],
      'Usar If the wind will blow hard, the branches move',
      'Natural forces are a strong zero conditional example',
      'El viento siempre mueve las ramas'
    ),
    tgt(
      'Si la tierra se seca, Sara riega otra vez',
      'If the soil dries, Sara waters again',
      ['If', 'the', 'soil', 'dries'],
      ['If', 'soil', 'dries', 'waters'],
      'Usar If the soil will dry, Sara waters again',
      'The result is a repeated action in the present',
      'La tierra seca activa otra vuelta de riego'
    ),
    tgt(
      'Si el grupo limpia al final, todo queda listo',
      'If the group cleans at the end, everything is ready',
      ['If', 'the', 'group', 'cleans', 'end'],
      ['If', 'group', 'cleans', 'ready'],
      'Usar If the group will clean at the end, everything is ready',
      'Cleanup is a general consequence here',
      'Limpiar deja todo listo'
    ),
    tgt(
      'Si la noche llega, las luces se encienden',
      'If night falls, the lights turn on',
      ['If', 'night', 'falls', 'lights'],
      ['If', 'night', 'falls', 'lights'],
      'Usar If night will fall, the lights turn on',
      'The general pattern remains present simple',
      'La noche cambia la escena de forma predecible'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
