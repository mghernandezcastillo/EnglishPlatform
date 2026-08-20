import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[5];
const targetPattern = 'had been + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['was', 'were', 'did', 'have', 'has'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Past Perfect Continuous';
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
  { title: 'El huerto del barrio: Trabajo constante', type: 'Descubrimiento', value: 'paciencia' },
  [
    ctx(
      'Ellos habían estado trabajando por horas cuando llegó el supervisor.',
      'They had been working for hours when the supervisor arrived.',
      ['They', 'had', 'been', 'working'],
      ['hours', 'supervisor', 'arrived'],
      'Perder la idea de duración antes del hecho principal.',
      'Think about an action that was already in progress before another past moment.',
      'La historia abre con un esfuerzo largo y visible.'
    ),
    tgt(
      'Marta había estado limpiando las hojas desde temprano.',
      'Marta had been cleaning the leaves since early morning.',
      ['Marta', 'had', 'been', 'cleaning'],
      ['had', 'been', 'cleaning'],
      'Usar had cleaned sin el foco en duración.',
      'Since early morning signals ongoing duration.',
      'La limpieza siguió durante mucho tiempo.'
    ),
    tgt(
      'Ellos habían estado reparando la cerca toda la mañana.',
      'They had been repairing the fence all morning.',
      ['They', 'had', 'been', 'repairing'],
      ['had', 'been', 'repairing'],
      'Usar repaired instead of had been repairing.',
      'All morning keeps the action extended.',
      'La reparación ya llevaba varias horas.'
    ),
    tgt(
      'El perro había estado ladrando por un rato.',
      'It had been barking for a while.',
      ['It', 'had', 'been', 'barking'],
      ['had', 'been', 'barking'],
      'Usar barked para una acción con duración previa.',
      'For a while shows that the action continued before the past moment.',
      'El ladrido ya venía desde antes.'
    ),
    ctx(
      'El patio mostraba el esfuerzo de todos.',
      'The yard showed everyone’s effort.',
      ['yard', 'showed', 'everyone'],
      ['yard', 'showed', 'effort'],
      'Cerrar sin mostrar el resultado acumulado.',
      'The scene should keep the result of the long work visible.',
      'El contexto deja ver el trabajo acumulado.'
    ),
    tgt(
      'Marta no había estado descansando.',
      'Marta had not been resting.',
      ['Marta', 'had', 'not', 'been', 'resting'],
      ['had', 'not', 'been', 'resting'],
      'Usar did not rest en esta estructura.',
      'Negative past perfect continuous uses had not been + verb-ing.',
      'La negativa mantiene la idea de duración.'
    ),
    tgt(
      '¿Habían estado pintando la puerta antes de la lluvia?',
      'Had they been painting the door before the rain?',
      ['Had', 'they', 'been', 'painting'],
      ['Had', 'been', 'painting', 'rain'],
      'Usar did they paint before the rain.',
      'Questions use had + subject + been + verb-ing.',
      'La pregunta revisa qué venía ocurriendo antes.'
    ),
    tgt(
      'La familia había estado buscando la llave.',
      'The family had been looking for the key.',
      ['family', 'had', 'been', 'looking'],
      ['had', 'been', 'looking'],
      'Usar had looked for the key.',
      'The search was continuing over time.',
      'La búsqueda seguía activa antes del hallazgo.'
    ),
    ctx(
      'Después, entendieron mejor el problema.',
      'After that, they understood the problem better.',
      ['After', 'understood', 'problem'],
      ['After', 'problem', 'better'],
      'Cerrar sin una transición clara.',
      'The story should keep the timeline easy to follow.',
      'El contexto marca el momento posterior.'
    ),
    tgt(
      'Ellos habían estado hablando de la mudanza.',
      'They had been talking about the move.',
      ['They', 'had', 'been', 'talking'],
      ['had', 'been', 'talking'],
      'Usar had talked instead of the continuous form.',
      'The talking lasted over a stretch of time.',
      'La conversación venía de antes.'
    ),
    tgt(
      'El vecino había estado ayudando todo el día.',
      'He had been helping all day.',
      ['He', 'had', 'been', 'helping'],
      ['had', 'been', 'helping'],
      'Usar had helped without the duration.',
      'All day signals a long ongoing action.',
      'La ayuda se mantuvo durante toda la jornada.'
    ),
    ctx(
      'Al final, todos sabían por qué estaban cansados.',
      'In the end, everyone knew why they were tired.',
      ['everyone', 'knew', 'tired'],
      ['everyone', 'knew', 'tired'],
      'Cerrar sin conectar esfuerzo y cansancio.',
      'The ending should make the duration feel meaningful.',
      'El cierre conecta el cansancio con el esfuerzo previo.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La biblioteca nocturna: Trabajo que seguía', type: 'Uso natural', value: 'persistencia' },
  [
    ctx(
      'Habían estado leyendo durante horas cuando apagaron la luz.',
      'They had been reading for hours when the lights went out.',
      ['They', 'had', 'been', 'reading'],
      ['hours', 'lights', 'went'],
      'Perder la idea de un proceso largo interrumpido.',
      'Think about a long action that was already in progress.',
      'La escena abre con una lectura prolongada.'
    ),
    tgt(
      'Ana había estado tomando notas desde la tarde.',
      'Ana had been taking notes since the afternoon.',
      ['Ana', 'had', 'been', 'taking'],
      ['had', 'been', 'taking'],
      'Usar had taken notes instead of the ongoing form.',
      'Since the afternoon shows duration up to the past moment.',
      'Las notas seguían acumulándose.'
    ),
    tgt(
      'Luis había estado buscando un libro raro.',
      'Luis had been looking for a rare book.',
      ['Luis', 'had', 'been', 'looking'],
      ['had', 'been', 'looking'],
      'Usar had looked for a rare book.',
      'The search was ongoing before the interruption.',
      'La búsqueda llevaba tiempo.'
    ),
    tgt(
      'La bibliotecaria había estado ordenando las mesas.',
      'She had been arranging the tables.',
      ['She', 'had', 'been', 'arranging'],
      ['had', 'been', 'arranging'],
      'Usar arranged en vez de had been arranging.',
      'The arranging was still in progress.',
      'El orden de la sala no estaba terminado.'
    ),
    ctx(
      'La sala seguía en silencio.',
      'The room stayed quiet.',
      ['room', 'stayed', 'quiet'],
      ['room', 'stayed', 'quiet'],
      'Cerrar sin ambiente de biblioteca.',
      'The background should keep the calm visible.',
      'El silencio mantiene la atmósfera.'
    ),
    tgt(
      'No habían estado hablando en voz alta.',
      'They had not been speaking loudly.',
      ['They', 'had', 'not', 'been', 'speaking'],
      ['had', 'not', 'been', 'speaking'],
      'Usar did not speak loudly.',
      'Negative continuous keeps the ongoing frame.',
      'La negativa conserva el tono tranquilo.'
    ),
    tgt(
      '¿Había estado lloviendo afuera todo el tiempo?',
      'Had it been raining outside all the time?',
      ['Had', 'it', 'been', 'raining'],
      ['Had', 'been', 'raining', 'time'],
      'Usar did it rain all the time.',
      'All the time signals duration before the past moment.',
      'La pregunta busca una duración continua.'
    ),
    tgt(
      'El grupo había estado trabajando en el proyecto.',
      'They had been working on the project.',
      ['They', 'had', 'been', 'working'],
      ['had', 'been', 'working'],
      'Usar had worked on the project.',
      'The project work had not finished yet.',
      'El proyecto seguía en marcha.'
    ),
    ctx(
      'Luego, encontraron la respuesta.',
      'Then, they found the answer.',
      ['Then', 'found', 'answer'],
      ['Then', 'found', 'answer'],
      'Cerrar sin una conclusión temporal.',
      'The answer should arrive after the long process.',
      'El contexto marca el momento siguiente.'
    ),
    tgt(
      'Ana había estado leyendo el capítulo correcto.',
      'Ana had been reading the correct chapter.',
      ['Ana', 'had', 'been', 'reading'],
      ['had', 'been', 'reading'],
      'Usar had read the correct chapter.',
      'The reading had continued until the discovery.',
      'La lectura iba encaminada al resultado.'
    ),
    tgt(
      'El reloj había estado sonando desde las ocho.',
      'It had been ringing since eight.',
      ['It', 'had', 'been', 'ringing'],
      ['had', 'been', 'ringing'],
      'Usar had rung since eight.',
      'Since eight keeps the ringing in progress.',
      'El reloj venía marcando el tiempo.'
    ),
    ctx(
      'Al final, la noche dejó una sensación de avance.',
      'In the end, the night left a feeling of progress.',
      ['night', 'left', 'progress'],
      ['night', 'left', 'progress'],
      'Cerrar sin conectar la duración con el resultado.',
      'The ending should show the effect of sustained work.',
      'El cierre convierte la duración en avance.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El teatro escolar: Ensayo largo antes del estreno', type: 'Integración', value: 'preparación' },
  [
    ctx(
      'El elenco había estado ensayando cuando llegó la directora.',
      'They had been rehearsing when the director arrived.',
      ['They', 'had', 'been', 'rehearsing'],
      ['director', 'arrived', 'rehearsing'],
      'Perder la idea de ensayo previo a un evento.',
      'Focus on the rehearsal that was already underway.',
      'La escena abre con un ensayo largo.'
    ),
    tgt(
      'Clara había estado practicando su diálogo.',
      'Clara had been practicing her dialogue.',
      ['Clara', 'had', 'been', 'practicing'],
      ['had', 'been', 'practicing'],
      'Usar had practiced without the ongoing sense.',
      'The practice continued over time.',
      'La práctica venía de antes.'
    ),
    tgt(
      'Ellos habían estado moviendo las sillas.',
      'They had been moving the chairs.',
      ['They', 'had', 'been', 'moving'],
      ['had', 'been', 'moving'],
      'Usar had moved the chairs.',
      'The moving was still in progress.',
      'Las sillas seguían cambiando de lugar.'
    ),
    tgt(
      'El técnico había estado ajustando las luces.',
      'He had been adjusting the lights.',
      ['He', 'had', 'been', 'adjusting'],
      ['had', 'been', 'adjusting'],
      'Usar had adjusted the lights.',
      'The adjustment had not finished yet.',
      'Las luces seguían siendo ajustadas.'
    ),
    ctx(
      'El escenario mostraba mucho movimiento.',
      'The stage showed a lot of movement.',
      ['stage', 'showed', 'movement'],
      ['stage', 'showed', 'movement'],
      'Cerrar sin una imagen de preparación.',
      'The ending should reflect the busy rehearsal stage.',
      'El contexto deja ver el trabajo acumulado.'
    ),
    tgt(
      'No habían estado durmiendo antes del estreno.',
      'They had not been sleeping before the opening.',
      ['They', 'had', 'not', 'been', 'sleeping'],
      ['had', 'not', 'been', 'sleeping'],
      'Usar did not sleep before the opening.',
      'Negative continuous keeps the duration frame.',
      'La negativa muestra esfuerzo previo.'
    ),
    tgt(
      '¿Había estado esperando el público por mucho tiempo?',
      'Had the audience been waiting for a long time?',
      ['Had', 'the', 'audience', 'been', 'waiting'],
      ['Had', 'been', 'waiting', 'time'],
      'Usar did the audience wait for a long time.',
      'For a long time highlights duration before the past moment.',
      'La pregunta mide la espera del público.'
    ),
    tgt(
      'La directora había estado corrigiendo detalles.',
      'She had been correcting details.',
      ['She', 'had', 'been', 'correcting'],
      ['had', 'been', 'correcting'],
      'Usar had corrected details.',
      'The correcting was ongoing.',
      'La revisión seguía en proceso.'
    ),
    ctx(
      'Después, todo quedó listo.',
      'After that, everything was ready.',
      ['After', 'everything', 'ready'],
      ['After', 'ready', 'everything'],
      'Cerrar sin consecuencia del ensayo.',
      'The ending should show the rehearsal reached its result.',
      'El contexto marca el cierre previo al estreno.'
    ),
    tgt(
      'Los actores habían estado repitiendo la escena.',
      'They had been repeating the scene.',
      ['They', 'had', 'been', 'repeating'],
      ['had', 'been', 'repeating'],
      'Usar had repeated the scene.',
      'The repetition lasted over time.',
      'La escena se repetía una y otra vez.'
    ),
    tgt(
      'La música había estado sonando suavemente.',
      'It had been playing softly.',
      ['It', 'had', 'been', 'playing'],
      ['had', 'been', 'playing'],
      'Usar had played softly.',
      'The music was already in progress.',
      'La música acompañaba el ensayo.'
    ),
    ctx(
      'Al final, el estreno comenzó con calma.',
      'In the end, the opening began calmly.',
      ['opening', 'began', 'calmly'],
      ['opening', 'began', 'calmly'],
      'Cerrar sin mostrar el resultado del trabajo previo.',
      'The ending should connect the long rehearsal to the opening.',
      'El cierre remata la preparación del elenco.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 18.');
