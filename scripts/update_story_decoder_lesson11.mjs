import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[4];
const targetPattern = 'have / has + past participle';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['did', 'was', 'were', 'will', 'should'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Perfect';
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
  { title: 'La billetera encontrada: Una decisión honesta', type: 'Descubrimiento', value: 'honestidad' },
  [
    ctx(
      'Lina camina por la calle y nota algo en el suelo.',
      'Lina is walking down the street and notices something on the ground.',
      ['Lina', 'walking', 'ground'],
      ['Lina', 'street', 'ground'],
      'Perder el inicio de la situación.',
      'Primero ubica el hallazgo y la sorpresa.',
      'La historia abre con una consecuencia reciente.'
    ),
    tgt(
      'Lina ha encontrado una billetera.',
      'Lina has found a wallet.',
      ['Lina', 'has', 'found'],
      ['has', 'found', 'wallet'],
      'Usar founded o found sin has.',
      'Present perfect uses have / has + past participle.',
      'La frase muestra un resultado recién logrado.'
    ),
    tgt(
      'Ella ya ha revisado la identificación.',
      'She has already checked the ID.',
      ['She', 'has', 'already', 'checked'],
      ['has', 'already', 'checked'],
      'Usar checked simple past sin have / has.',
      'Already fits naturally with present perfect.',
      'El adverbio deja claro que la acción ya ocurrió.'
    ),
    tgt(
      'Lina ha llamado a la dueña.',
      'Lina has called the owner.',
      ['Lina', 'has', 'called'],
      ['has', 'called', 'owner'],
      'Cambiar called por calls.',
      'Use the participle after has.',
      'La acción reciente sigue visible.'
    ),
    ctx(
      'La dueña todavía espera una noticia.',
      'The owner is still waiting for news.',
      ['owner', 'still', 'waiting'],
      ['owner', 'waiting', 'news'],
      'Perder el hilo emocional de la escena.',
      'The story should feel immediate.',
      'El contexto mantiene la tensión suave.'
    ),
    tgt(
      'Lina no ha tomado el dinero.',
      'Lina has not taken the money.',
      ['Lina', 'has', 'not', 'taken'],
      ['has', 'not', 'taken'],
      'Usar did not take en esta lección.',
      'Negatives in present perfect use has not / have not + participle.',
      'La negativa refuerza la decisión honesta.'
    ),
    tgt(
      '¿Ha escrito la dirección correcta?',
      'Has she written the correct address?',
      ['Has', 'she', 'written'],
      ['Has', 'written', 'address'],
      'Usar did she write en lugar de has she written.',
      'Questions use has / have + subject + participle.',
      'La pregunta verifica un resultado actual.'
    ),
    tgt(
      'La dueña ha llegado al café.',
      'The owner has arrived at the cafe.',
      ['owner', 'has', 'arrived'],
      ['has', 'arrived', 'cafe'],
      'Olvidar el auxiliar has.',
      'Use the participle to show a recent result.',
      'La llegada confirma el efecto de la acción.'
    ),
    ctx(
      'Las dos hablan con calma y sonríen.',
      'They are talking calmly and smiling.',
      ['They', 'are', 'talking'],
      ['They', 'talking', 'smiling'],
      'Cerrar sin un paso humano claro.',
      'Keep the emotional tone soft and direct.',
      'La escena mantiene la cercanía entre las dos personas.'
    ),
    tgt(
      'Lina ha hecho lo correcto.',
      'Lina has done the right thing.',
      ['Lina', 'has', 'done'],
      ['has', 'done', 'right'],
      'Usar did instead of has done.',
      'Done is the past participle of do.',
      'La frase resume el valor de la decisión.'
    ),
    tgt(
      'Ella ha aprendido algo importante hoy.',
      'She has learned something important today.',
      ['She', 'has', 'learned'],
      ['has', 'learned', 'important'],
      'Usar learns en vez de has learned.',
      'Today can pair naturally with present perfect.',
      'La experiencia reciente deja una enseñanza.'
    ),
    ctx(
      'Al final, la historia deja una sensación de confianza.',
      'In the end, the story leaves a feeling of trust.',
      ['story', 'leaves', 'trust'],
      ['story', 'feeling', 'trust'],
      'Cerrar la escena sin un resultado emocional.',
      'The ending should feel calm and complete.',
      'El cierre convierte la acción reciente en aprendizaje.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La feria de ciencias: Resultados recientes', type: 'Uso natural', value: 'curiosidad' },
  [
    ctx(
      'El equipo de ciencias trabaja cerca de la mesa principal.',
      'The science team is working near the main table.',
      ['science', 'team', 'working'],
      ['team', 'working', 'table'],
      'Perder el ambiente de feria.',
      'Think about a project with visible progress.',
      'La escena prepara el resultado del trabajo.'
    ),
    tgt(
      'El equipo ha construido un modelo.',
      'The team has built a model.',
      ['team', 'has', 'built'],
      ['has', 'built', 'model'],
      'Usar builded en vez de built.',
      'Built is the participle you need here.',
      'La acción ya produjo un resultado visible.'
    ),
    tgt(
      'Han probado la batería.',
      'They have tested the battery.',
      ['They', 'have', 'tested'],
      ['have', 'tested', 'battery'],
      'Usar tested sin have.',
      'Present perfect keeps the result relevant now.',
      'La prueba reciente encaja con la feria.'
    ),
    tgt(
      'La maestra ha visto el avance.',
      'The teacher has seen the progress.',
      ['teacher', 'has', 'seen'],
      ['has', 'seen', 'progress'],
      'Usar saw instead of has seen.',
      'Seen is the participle after has.',
      'La observación reciente es parte del logro.'
    ),
    ctx(
      'Todavía quedan etiquetas por pegar.',
      'There are still labels to attach.',
      ['still', 'labels', 'attach'],
      ['still', 'labels', 'attach'],
      'Cerrar la escena sin tensión productiva.',
      'The project is unfinished but moving forward.',
      'El contexto deja ver que el trabajo sigue activo.'
    ),
    tgt(
      'El grupo no ha terminado la portada.',
      'The group has not finished the cover.',
      ['group', 'has', 'not', 'finished'],
      ['has', 'not', 'finished'],
      'Usar did not finish instead of has not finished.',
      'Negatives in present perfect use has not / have not.',
      'La negativa muestra una meta todavía abierta.'
    ),
    tgt(
      '¿Han elegido el título ya?',
      'Have they chosen the title yet?',
      ['Have', 'they', 'chosen'],
      ['Have', 'chosen', 'yet'],
      'Usar did they choose yet.',
      'Yet is common in questions with present perfect.',
      'La pregunta pregunta por un resultado reciente.'
    ),
    tgt(
      'La clase ha celebrado un pequeño logro.',
      'The class has celebrated a small win.',
      ['class', 'has', 'celebrated'],
      ['has', 'celebrated', 'win'],
      'Usar celebrated simple past sin has.',
      'Keep the present perfect because the result matters now.',
      'El logro ya forma parte del presente del grupo.'
    ),
    ctx(
      'La mesa sigue llena de materiales.',
      'The table is still full of materials.',
      ['table', 'still', 'full'],
      ['table', 'materials', 'full'],
      'Perder el detalle visual del proyecto.',
      'The workspace still shows the process.',
      'La escena conserva la huella del trabajo.'
    ),
    tgt(
      'La impresora ha impreso una página.',
      'The printer has printed a page.',
      ['printer', 'has', 'printed'],
      ['has', 'printed', 'page'],
      'Usar printed sin has.',
      'The result is important more than the exact time.',
      'La impresión reciente refuerza el tiempo perfecto.'
    ),
    tgt(
      'Ellos han guardado las notas.',
      'They have saved the notes.',
      ['They', 'have', 'saved'],
      ['have', 'saved', 'notes'],
      'Usar save sin have.',
      'Saved is the participle form here.',
      'La acción queda disponible para el presente.'
    ),
    ctx(
      'Al final, el proyecto ya muestra resultados claros.',
      'In the end, the project already shows clear results.',
      ['project', 'already', 'shows'],
      ['project', 'results', 'clear'],
      'Cerrar sin conectar con el resultado.',
      'The ending should point to evidence of progress.',
      'El cierre deja la feria con sentido de avance.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'Vecinos que se ayudan: Lo que aprendieron', type: 'Integración', value: 'solidaridad' },
  [
    ctx(
      'Después de la lluvia, el barrio sigue ocupado.',
      'After the rain, the neighborhood stays busy.',
      ['After', 'rain', 'busy'],
      ['rain', 'busy', 'neighborhood'],
      'Perder la atmósfera del barrio.',
      'Focus on a recent situation with visible effects.',
      'La historia arranca con consecuencias recientes.'
    ),
    tgt(
      'Los vecinos han limpiado la entrada.',
      'The neighbors have cleaned the entrance.',
      ['neighbors', 'have', 'cleaned'],
      ['have', 'cleaned', 'entrance'],
      'Usar cleaned sin have.',
      'Present perfect shows a completed action with present relevance.',
      'La limpieza ya produjo un cambio visible.'
    ),
    tgt(
      'María ha traído café caliente.',
      'Maria has brought hot coffee.',
      ['Maria', 'has', 'brought'],
      ['has', 'brought', 'coffee'],
      'Usar bringed en vez de brought.',
      'Brought is the participle of bring.',
      'La ayuda aparece como resultado reciente.'
    ),
    tgt(
      'Ellos han reparado una cerca pequeña.',
      'They have repaired a small fence.',
      ['They', 'have', 'repaired'],
      ['have', 'repaired', 'fence'],
      'Usar repaired simple past sin have.',
      'The repair still matters now.',
      'La reparación deja un efecto visible en el barrio.'
    ),
    ctx(
      'La calle luce mejor y la gente saluda.',
      'The street looks better and people say hello.',
      ['street', 'looks', 'better'],
      ['street', 'better', 'people'],
      'Cerrar sin mostrar cambio social.',
      'The neighborhood should feel warmer now.',
      'El contexto muestra el impacto de la ayuda.'
    ),
    tgt(
      'María no ha olvidado las herramientas.',
      'Maria has not forgotten the tools.',
      ['Maria', 'has', 'not', 'forgotten'],
      ['has', 'not', 'forgotten'],
      'Usar did not forget instead of has not forgotten.',
      'Negatives in present perfect keep the result relevant.',
      'La negativa mantiene la atención en la responsabilidad.'
    ),
    tgt(
      '¿Han compartido comida con todos?',
      'Have they shared food with everyone?',
      ['Have', 'they', 'shared'],
      ['Have', 'shared', 'everyone'],
      'Usar did they share with everyone.',
      'Questions use have / has + subject + participle.',
      'La pregunta busca un resultado de ayuda reciente.'
    ),
    tgt(
      'El grupo ha trabajado con cuidado.',
      'The group has worked carefully.',
      ['group', 'has', 'worked'],
      ['has', 'worked', 'carefully'],
      'Usar worked sin has.',
      'The effort is finished but still relevant.',
      'El trabajo reciente se ve en el resultado.'
    ),
    ctx(
      'Todavía hay barro, pero el ánimo es bueno.',
      'There is still mud, but the mood is good.',
      ['still', 'mud', 'mood'],
      ['still', 'mud', 'good'],
      'Cerrar la escena sin contraste humano.',
      'The story should keep the community tone.',
      'El contexto conserva la idea de esfuerzo compartido.'
    ),
    tgt(
      'Los niños han aprendido a colaborar.',
      'The children have learned to cooperate.',
      ['children', 'have', 'learned'],
      ['have', 'learned', 'cooperate'],
      'Usar learn en vez de have learned.',
      'Learned shows a result that matters now.',
      'El aprendizaje completa la historia.'
    ),
    tgt(
      'Ellos han vivido aquí por años.',
      'They have lived here for years.',
      ['They', 'have', 'lived'],
      ['have', 'lived', 'years'],
      'Usar lived without have.',
      'For years connects naturally with present perfect.',
      'La duración enlaza pasado y presente.'
    ),
    ctx(
      'Al final, el barrio se siente más unido.',
      'In the end, the neighborhood feels more united.',
      ['neighborhood', 'feels', 'united'],
      ['neighborhood', 'united', 'feels'],
      'Cerrar la historia sin efecto emocional.',
      'The ending should show a human result.',
      'El cierre resume la solidaridad como efecto presente.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 11.');
