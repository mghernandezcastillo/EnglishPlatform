import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[3];
const simplePattern = 'Subject + base verb / verb-s for habits and routines';
const continuousPattern = 'am / is / are + verb-ing for actions in progress';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['did', 'will', 'has', 'was', 'were'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : spec.grammar_focus;
    line.pattern = spec.role === 'context' ? ctxPattern : spec.pattern;
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

const simple = (es, en, focus_tokens, vocabulary_candidates, common_errors, hints, tutor_explanation) => ({
  role: 'target',
  grammar_focus: 'Present Simple',
  pattern: simplePattern,
  es,
  en,
  focus_tokens,
  vocabulary_candidates,
  common_errors,
  hints,
  tutor_explanation,
});

const continuous = (es, en, focus_tokens, vocabulary_candidates, common_errors, hints, tutor_explanation) => ({
  role: 'target',
  grammar_focus: 'Present Continuous',
  pattern: continuousPattern,
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
  { title: 'El equipo del parque: Dos maneras de hablar', type: 'Descubrimiento', value: 'atención' },
  [
    ctx(
      'El equipo del parque se reúne cada mañana.',
      'The park team meets every morning.',
      ['park', 'team', 'meets'],
      ['team', 'meets', 'morning'],
      'Perder el contraste entre rutina y acción actual.',
      'Primero reconoce que aquí hablamos de una rutina.',
      'La historia abre con una acción habitual.'
    ),
    simple(
      'El entrenador organiza la actividad.',
      'The coach organizes the activity.',
      ['coach', 'organizes', 'activity'],
      ['organizes', 'activity', 'coach'],
      'Usar organizing en una rutina.',
      'For habits, use present simple.',
      'La frase muestra un hábito claro.'
    ),
    continuous(
      'Ahora está marcando los conos.',
      'He is marking the cones now.',
      ['He', 'is', 'marking'],
      ['is', 'marking', 'cones'],
      'Usar marks en vez de is marking.',
      'For something happening now, use am / is / are + verb-ing.',
      'La línea enseña la acción en curso.'
    ),
    simple(
      'Siempre explica las reglas antes de empezar.',
      'He always explains the rules before starting.',
      ['always', 'explains', 'rules'],
      ['explains', 'rules', 'before'],
      'Usar is explaining para un hábito.',
      'Always points to a routine, so present simple fits.',
      'El marcador temporal deja clara la rutina.'
    ),
    ctx(
      'Los niños esperan cerca de la línea.',
      'The children are waiting near the line.',
      ['children', 'are', 'waiting'],
      ['children', 'waiting', 'line'],
      'Perder la idea de escena en progreso.',
      'La escena todavía está ocurriendo.',
      'El contexto prepara la comparación con el siguiente tiempo.'
    ),
    continuous(
      'La asistente está entregando las pelotas.',
      'The assistant is handing out the balls.',
      ['assistant', 'is', 'handing'],
      ['is', 'handing', 'balls'],
      'Usar hands out sin el continuo.',
      'Use the continuous form for an action in progress.',
      'La acción sucede justo ahora.'
    ),
    simple(
      '¿El equipo juega aquí todos los martes?',
      'Does the team play here every Tuesday?',
      ['Does', 'team', 'play'],
      ['play', 'every', 'Tuesday'],
      'Usar is playing para una rutina.',
      'Every Tuesday signals a habit, so present simple works.',
      'La pregunta contrasta rutina con acción actual.'
    ),
    continuous(
      '¿Están practicando en este momento?',
      'Are they practicing right now?',
      ['Are', 'they', 'practicing'],
      ['Are', 'practicing', 'right now'],
      'Usar do they practice instead of are they practicing.',
      'Right now asks for present continuous.',
      'La pregunta fija el uso del continuo.'
    ),
    ctx(
      'El parque se ve lleno y ordenado.',
      'The park looks full and tidy.',
      ['park', 'looks', 'full'],
      ['park', 'full', 'tidy'],
      'Cerrar la escena sin contraste claro.',
      'The story should keep both time frames visible.',
      'La escena sigue siendo el mismo lugar, pero la idea cambia.'
    ),
    simple(
      'El entrenador no llega tarde.',
      'The coach does not arrive late.',
      ['coach', 'does', 'not', 'arrive'],
      ['arrive', 'late', 'coach'],
      'Usar arriving para una rutina negativa.',
      'Negative routines use does not + base verb.',
      'La negación pertenece al presente simple.'
    ),
    continuous(
      'No están corriendo demasiado rápido ahora.',
      'They are not running too fast now.',
      ['They', 'are', 'not', 'running'],
      ['are', 'running', 'now'],
      'Usar do not run now.',
      'Now asks for the continuous form.',
      'La negativa continua deja ver la diferencia.'
    ),
    ctx(
      'Al final, todos entienden cuándo usar cada forma.',
      'In the end, everyone understands when to use each form.',
      ['everyone', 'understands', 'use'],
      ['everyone', 'understands', 'form'],
      'Cerrar con una conclusión confusa.',
      'The ending should state the contrast clearly.',
      'El cierre resume la diferencia entre ambas formas.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tienda de la esquina: Rutina y movimiento', type: 'Uso natural', value: 'observación' },
  [
    ctx(
      'La tienda de la esquina abre muy temprano.',
      'The corner shop opens very early.',
      ['shop', 'opens', 'early'],
      ['shop', 'opens', 'early'],
      'Perder el ambiente cotidiano.',
      'Piensa primero en la rutina del lugar.',
      'La historia parte de un hábito estable.'
    ),
    simple(
      'La dependienta atiende con calma a los vecinos.',
      'The cashier helps the neighbors calmly.',
      ['cashier', 'helps', 'neighbors'],
      ['helps', 'neighbors', 'calmly'],
      'Usar helping para una rutina.',
      'This is a repeated action, so use present simple.',
      'La rutina diaria queda clara desde la primera acción.'
    ),
    continuous(
      'Ahora está colocando frutas en la caja.',
      'She is placing fruit in the box now.',
      ['She', 'is', 'placing'],
      ['is', 'placing', 'fruit'],
      'Usar places en vez de is placing.',
      'Now calls for present continuous.',
      'La acción en curso cambia el ritmo de la escena.'
    ),
    simple(
      'El dueño revisa la lista al final del día.',
      'The owner checks the list at the end of the day.',
      ['owner', 'checks', 'list'],
      ['checks', 'list', 'day'],
      'Usar is checking para una rutina fija.',
      'At the end of the day signals a repeated habit.',
      'La oración vuelve al patrón estable.'
    ),
    ctx(
      'Algunos clientes miran el escaparate.',
      'Some customers are looking at the display window.',
      ['customers', 'are', 'looking'],
      ['customers', 'looking', 'display'],
      'Olvidar que todavía se está desarrollando la escena.',
      'The scene is still moving.',
      'El contexto sostiene el movimiento de la tienda.'
    ),
    continuous(
      'Ella no está hablando por teléfono ahora.',
      'She is not talking on the phone now.',
      ['She', 'is', 'not', 'talking'],
      ['is', 'talking', 'phone'],
      'Usar does not talk en una acción actual.',
      'Now asks for the continuous negative.',
      'La negativa muestra el contraste con la rutina.'
    ),
    simple(
      '¿La tienda vende pan cada mañana?',
      'Does the shop sell bread every morning?',
      ['Does', 'shop', 'sell'],
      ['sell', 'bread', 'morning'],
      'Usar is selling en una costumbre.',
      'Every morning points to a habit.',
      'La pregunta separa costumbre de acción actual.'
    ),
    continuous(
      '¿Están llegando más clientes en este momento?',
      'Are more customers arriving at the moment?',
      ['Are', 'customers', 'arriving'],
      ['Are', 'arriving', 'moment'],
      'Usar do customers arrive at the moment.',
      'At the moment calls for the continuous form.',
      'La pregunta exige la forma en progreso.'
    ),
    ctx(
      'La caja suena y el pasillo sigue despejado.',
      'The register sounds and the aisle stays clear.',
      ['register', 'sounds', 'aisle'],
      ['register', 'sounds', 'clear'],
      'Cerrar la escena de forma rígida.',
      'Keep the shop image active but calm.',
      'La tienda sigue funcionando sin perder el orden.'
    ),
    simple(
      'El dueño no olvida los precios.',
      'The owner does not forget the prices.',
      ['owner', 'does', 'not', 'forget'],
      ['forget', 'prices', 'owner'],
      'Usar is not forgetting para una regla estable.',
      'Negative habits use does not + base verb.',
      'La negación vuelve al presente simple.'
    ),
    continuous(
      'Ellos están empacando los pedidos para llevar.',
      'They are packing the takeaway orders.',
      ['They', 'are', 'packing'],
      ['are', 'packing', 'orders'],
      'Usar pack without -ing here.',
      'This work is happening right now.',
      'La actividad en curso refuerza el contraste.'
    ),
    ctx(
      'Al final, la tienda combina rutina y movimiento.',
      'In the end, the shop combines routine and movement.',
      ['shop', 'combines', 'routine'],
      ['shop', 'routine', 'movement'],
      'Cerrar sin señalar el contraste.',
      'The ending should state both ideas clearly.',
      'El cierre resume la diferencia entre hábito y progreso.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El viaje de fin de semana: Lo habitual y lo inmediato', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'La familia sale de casa cada sábado.',
      'The family leaves home every Saturday.',
      ['family', 'leaves', 'Saturday'],
      ['family', 'leaves', 'Saturday'],
      'Perder el valor de hábito.',
      'Every Saturday points to a routine.',
      'La historia empieza con una costumbre clara.'
    ),
    simple(
      'Siempre viajan temprano al campo.',
      'They always travel to the countryside early.',
      ['always', 'travel', 'early'],
      ['always', 'travel', 'early'],
      'Usar are traveling para una costumbre.',
      'Always signals present simple.',
      'La frase deja claro que es un hábito.'
    ),
    continuous(
      'Hoy están manejando por una ruta nueva.',
      'They are driving along a new route today.',
      ['They', 'are', 'driving'],
      ['are', 'driving', 'route'],
      'Usar drive without the continuous form.',
      'Today and now push the continuous.',
      'La acción inmediata cambia la lectura del viaje.'
    ),
    simple(
      'El padre conduce con cuidado en viajes largos.',
      'The father drives carefully on long trips.',
      ['father', 'drives', 'carefully'],
      ['drives', 'carefully', 'trips'],
      'Usar is driving for a general habit.',
      'A general rule uses present simple.',
      'La costumbre vuelve al presente simple.'
    ),
    ctx(
      'Los niños miran por la ventana y esperan.',
      'The children look out the window and wait.',
      ['children', 'look', 'window'],
      ['children', 'window', 'wait'],
      'Perder el ritmo de la escena.',
      'The story still needs both ideas on screen.',
      'El contexto mantiene la sensación de viaje.'
    ),
    continuous(
      'No están durmiendo; están cantando.',
      'They are not sleeping; they are singing.',
      ['They', 'are', 'not', 'sleeping'],
      ['are', 'sleeping', 'singing'],
      'Usar do not sleep here.',
      'Right now requires the continuous form.',
      'La negativa continua diferencia el momento actual.'
    ),
    simple(
      '¿La familia visita a sus abuelos cada mes?',
      'Does the family visit its grandparents every month?',
      ['Does', 'family', 'visit'],
      ['visit', 'grandparents', 'month'],
      'Usar is visiting for a monthly habit.',
      'Every month tells you this is a routine.',
      'La pregunta mantiene el foco en la costumbre.'
    ),
    continuous(
      '¿Están cruzando el puente ahora mismo?',
      'Are they crossing the bridge right now?',
      ['Are', 'they', 'crossing'],
      ['Are', 'crossing', 'bridge'],
      'Usar do they cross now.',
      'Right now requires am / is / are + verb-ing.',
      'La pregunta marca la acción inmediata.'
    ),
    ctx(
      'El camino sigue abierto y la tarde avanza.',
      'The road stays open and the afternoon moves on.',
      ['road', 'stays', 'open'],
      ['road', 'open', 'afternoon'],
      'Cerrar sin una sensación de trayecto.',
      'Keep the travel image alive.',
      'La escena sostiene el movimiento del viaje.'
    ),
    simple(
      'La madre no se confunde con el mapa.',
      'The mother does not get confused with the map.',
      ['mother', 'does', 'not', 'get'],
      ['get', 'confused', 'map'],
      'Usar is not getting confused para una verdad general.',
      'Negative habits use does not + base verb.',
      'La costumbre negativa queda clara.'
    ),
    continuous(
      'El coche está pasando junto al río.',
      'The car is passing by the river.',
      ['car', 'is', 'passing'],
      ['is', 'passing', 'river'],
      'Usar passes by for a current action.',
      'The action is happening now.',
      'La imagen del coche refuerza el momento presente.'
    ),
    ctx(
      'Al final, entienden cuándo describir hábito y cuándo acción actual.',
      'In the end, they understand when to describe a habit and when an action now.',
      ['understand', 'habit', 'action'],
      ['understand', 'habit', 'action'],
      'Cerrar sin mencionar la diferencia.',
      'The ending should spell out the contrast.',
      'El cierre resume el aprendizaje del bloque.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 10.');
