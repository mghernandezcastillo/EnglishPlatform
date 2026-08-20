import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[3];
const simplePattern = 'Past Simple: subject + past verb / irregular past form';
const continuousPattern = 'Past Continuous: was / were + verb-ing';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['was', 'were', 'did', 'do', 'will'];

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
  grammar_focus: 'Past Simple',
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
  grammar_focus: 'Past Continuous',
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
  { title: 'La plaza de la lluvia: Un momento cruzado', type: 'Descubrimiento', value: 'atención' },
  [
    ctx(
      'Ana caminaba por la plaza cuando sonó el teléfono.',
      'Ana was walking through the plaza when the phone rang.',
      ['Ana', 'was', 'walking'],
      ['plaza', 'phone', 'rang'],
      'Perder la diferencia entre la acción larga y la interrupción.',
      'Primero mira qué estaba pasando y qué pasó de golpe.',
      'La escena abre con una interrupción clara.'
    ),
    continuous(
      'Ella estaba mirando la fuente cuando vio a Sara.',
      'She was looking at the fountain when she saw Sara.',
      ['She', 'was', 'looking'],
      ['was', 'looking', 'fountain'],
      'Usar looked sin was.',
      'The background action needs was / were + verb-ing.',
      'La acción larga se corta con un hecho puntual.'
    ),
    simple(
      'Sara la llamó por su nombre.',
      'Sara called her name.',
      ['Sara', 'called', 'name'],
      ['called', 'name', 'Sara'],
      'Usar was calling como si todo fuera continuo.',
      'The calling happened once and finished.',
      'La llamada corta la acción en progreso.'
    ),
    continuous(
      'Las dos estaban hablando mientras llovía.',
      'They were talking while it was raining.',
      ['They', 'were', 'talking'],
      ['were', 'talking', 'raining'],
      'Usar talked mientras se practica el continuo.',
      'Use were + verb-ing for the ongoing action.',
      'La conversación ocurre durante el fondo.'
    ),
    ctx(
      'La gente corrió bajo los toldos.',
      'People ran under the awnings.',
      ['People', 'ran', 'awnings'],
      ['People', 'ran', 'under'],
      'Cerrar sin movimiento final.',
      'Keep the sudden reaction visible.',
      'El contexto muestra la reacción inmediata.'
    ),
    continuous(
      'Ana no estaba llevando paraguas.',
      'Ana was not carrying an umbrella.',
      ['Ana', 'was', 'not', 'carrying'],
      ['was', 'not', 'carrying'],
      'Usar did not carry instead of was not carrying.',
      'Negative past continuous keeps the action in progress.',
      'La negativa aclara el estado de Ana.'
    ),
    continuous(
      '¿El autobús estaba llegando cuando ellas llegaron?',
      'Was the bus arriving when they arrived?',
      ['Was', 'bus', 'arriving'],
      ['Was', 'arriving', 'arrived'],
      'Usar did the bus arrive en esta comparación.',
      'Ask with was / were + subject + verb-ing.',
      'La pregunta mezcla fondo y evento puntual.'
    ),
    simple(
      'El vendedor cerró su puesto de inmediato.',
      'The seller closed his stall right away.',
      ['seller', 'closed', 'stall'],
      ['closed', 'stall', 'right away'],
      'Usar was closing para un cierre puntual.',
      'A finished action uses the past simple.',
      'El cierre rápido interrumpe la escena.'
    ),
    ctx(
      'La plaza quedó silenciosa.',
      'The square became quiet.',
      ['square', 'became', 'quiet'],
      ['square', 'quiet', 'became'],
      'Cerrar sin una transición clara.',
      'The scene should settle after the interruption.',
      'El silencio marca el resultado de lo que pasó.'
    ),
    continuous(
      'El viento estaba soplando con fuerza.',
      'The wind was blowing hard.',
      ['wind', 'was', 'blowing'],
      ['was', 'blowing', 'hard'],
      'Usar blew para una acción en desarrollo.',
      'The ongoing weather fills the background.',
      'El clima sostiene la escena.'
    ),
    simple(
      'Ellas decidieron irse a casa.',
      'They decided to go home.',
      ['They', 'decided', 'home'],
      ['decided', 'go', 'home'],
      'Usar were deciding en una decisión ya tomada.',
      'The decision happened at one moment.',
      'La elección cierra la reacción.'
    ),
    ctx(
      'El momento terminó con zapatos mojados y una buena historia.',
      'The moment ended with wet shoes and a good story.',
      ['moment', 'ended', 'shoes'],
      ['moment', 'shoes', 'story'],
      'Cerrar la historia sin resultado claro.',
      'The ending should capture both the event and its effect.',
      'El cierre resume la mezcla de tiempos.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El museo y la alarma: Una visita interrumpida', type: 'Uso natural', value: 'reacción' },
  [
    ctx(
      'Los niños estaban escuchando a la guía cuando sonó la alarma.',
      'The children were listening to the guide when the alarm sounded.',
      ['children', 'were', 'listening'],
      ['children', 'guide', 'alarm'],
      'Perder el contraste entre fondo y sorpresa.',
      'Think of an ongoing tour interrupted by a sudden sound.',
      'La visita se ve interrumpida de inmediato.'
    ),
    simple(
      'La guía detuvo el recorrido.',
      'The guide stopped the tour.',
      ['guide', 'stopped', 'tour'],
      ['stopped', 'tour', 'guide'],
      'Usar was stopping como si todavía siguiera.',
      'The tour ended with one completed action.',
      'La interrupción es puntual y clara.'
    ),
    continuous(
      'Un guardia de seguridad estaba abriendo la puerta lateral.',
      'A security guard was opening the side door.',
      ['guard', 'was', 'opening'],
      ['was', 'opening', 'door'],
      'Usar opened instead of was opening.',
      'The action was already in progress.',
      'La apertura ocurre como fondo del momento.'
    ),
    simple(
      'Los niños caminaron rápido hacia la salida.',
      'The children walked quickly to the exit.',
      ['children', 'walked', 'exit'],
      ['walked', 'quickly', 'exit'],
      'Usar were walking para una reacción inmediata ya cerrada.',
      'This is a finished reaction, so use past simple.',
      'La evacuación ya quedó completada.'
    ),
    ctx(
      'El pasillo seguía brillante y ruidoso.',
      'The hall stayed bright and noisy.',
      ['hall', 'stayed', 'bright'],
      ['hall', 'bright', 'noisy'],
      'Cerrar sin ambiente de museo.',
      'The background should still be visible.',
      'El contexto mantiene el espacio activo.'
    ),
    continuous(
      'No estaban tomando fotos en ese momento.',
      'They were not taking photos at that moment.',
      ['They', 'were', 'not', 'taking'],
      ['were', 'not', 'taking'],
      'Usar did not take photos at that moment.',
      'At that moment points to an ongoing action.',
      'La negativa deja claro el momento en curso.'
    ),
    continuous(
      '¿Estaban esperando junto a la estatua cuando empezó la alarma?',
      'Were they waiting near the statue when the alarm started?',
      ['Were', 'they', 'waiting'],
      ['Were', 'waiting', 'statue'],
      'Usar did they wait when the alarm started.',
      'Ask with was / were + subject + verb-ing.',
      'La pregunta sitúa a las personas antes de la alarma.'
    ),
    continuous(
      'La guía estaba hablando con calma.',
      'The guide was speaking calmly.',
      ['guide', 'was', 'speaking'],
      ['was', 'speaking', 'calmly'],
      'Usar spoke para una acción que seguía en desarrollo.',
      'The speaking was ongoing.',
      'La voz de la guía queda como fondo.'
    ),
    simple(
      'Alguien presionó el botón de salida.',
      'Someone pressed the exit button.',
      ['Someone', 'pressed', 'button'],
      ['pressed', 'exit', 'button'],
      'Usar was pressing para una acción puntual.',
      'The press happened once and finished.',
      'El botón marca el cambio repentino.'
    ),
    ctx(
      'El vestíbulo se llenó de gente.',
      'The lobby filled with people.',
      ['lobby', 'filled', 'people'],
      ['lobby', 'people', 'filled'],
      'Cerrar sin mostrar el efecto del susto.',
      'Keep the scene compact and clear.',
      'El lugar refleja la salida rápida.'
    ),
    simple(
      'Salieron del museo en orden.',
      'They left the museum in order.',
      ['They', 'left', 'museum'],
      ['left', 'museum', 'order'],
      'Usar were leaving como si no hubiera cierre.',
      'The exit is a finished action.',
      'La salida completa la reacción.'
    ),
    ctx(
      'Todos recordaron la lección después.',
      'Everyone remembered the lesson later.',
      ['Everyone', 'remembered', 'lesson'],
      ['Everyone', 'lesson', 'later'],
      'Cerrar sin una idea final.',
      'The ending should turn the interruption into learning.',
      'El cierre convierte el susto en aprendizaje.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La cocina del cumpleaños: Preparativos y sorpresa', type: 'Integración', value: 'coordinación' },
  [
    ctx(
      'La familia estaba preparando el pastel cuando se fue la luz.',
      'The family was preparing the cake when the lights went out.',
      ['family', 'was', 'preparing'],
      ['family', 'cake', 'lights'],
      'Perder el choque entre proceso e interrupción.',
      'The cake preparation is the background; the power cut is the event.',
      'La sorpresa interrumpe una tarea en marcha.'
    ),
    continuous(
      'Maya estaba mezclando la masa.',
      'Maya was mixing the batter.',
      ['Maya', 'was', 'mixing'],
      ['was', 'mixing', 'batter'],
      'Usar mixed instead of was mixing.',
      'The action was still in progress.',
      'La mezcla sigue cuando ocurre la sorpresa.'
    ),
    simple(
      'Su hermano encendió una vela.',
      'Her brother lit a candle.',
      ['brother', 'lit', 'candle'],
      ['lit', 'candle', 'brother'],
      'Usar was lighting como si durara toda la escena.',
      'The candle lighting is a completed action.',
      'La vela aparece como reacción puntual.'
    ),
    continuous(
      'La abuela estaba cortando fruta.',
      'Grandma was cutting fruit.',
      ['Grandma', 'was', 'cutting'],
      ['was', 'cutting', 'fruit'],
      'Usar cut for an action that was continuing.',
      'The cutting was happening at the time.',
      'La preparación continúa en segundo plano.'
    ),
    ctx(
      'La habitación quedó oscura por un minuto.',
      'The room stayed dark for a minute.',
      ['room', 'stayed', 'dark'],
      ['room', 'dark', 'minute'],
      'Cerrar sin una sensación de pausa.',
      'The room should show the effect of the surprise.',
      'El contexto muestra el impacto inmediato.'
    ),
    continuous(
      'No estaban entrando en pánico.',
      'They were not panicking.',
      ['They', 'were', 'not', 'panicking'],
      ['were', 'not', 'panicking'],
      'Usar did not panic en esta comparación.',
      'The feeling was still developing.',
      'La negativa mantiene la calma relativa.'
    ),
    continuous(
      '¿El horno estaba calentando bien cuando falló la energía?',
      'Was the oven heating properly when the power failed?',
      ['Was', 'oven', 'heating'],
      ['Was', 'heating', 'properly'],
      'Usar did the oven heat properly when the power failed.',
      'The question asks about an ongoing process.',
      'La pregunta revisa la acción antes del corte.'
    ),
    simple(
      'Los vecinos tocaron la puerta.',
      'The neighbors knocked on the door.',
      ['neighbors', 'knocked', 'door'],
      ['knocked', 'door', 'neighbors'],
      'Usar were knocking para una llegada puntual.',
      'The knock is a finished event.',
      'La visita entra como hecho completo.'
    ),
    continuous(
      'Todos estaban ayudando juntos.',
      'Everyone was helping together.',
      ['Everyone', 'was', 'helping'],
      ['was', 'helping', 'together'],
      'Usar helped together para una acción en curso.',
      'The helping was happening while the lights were out.',
      'La ayuda siguió durante la sorpresa.'
    ),
    simple(
      'La energía volvió.',
      'The power returned.',
      ['power', 'returned'],
      ['power', 'returned'],
      'Usar was returning para el hecho puntual.',
      'This is the moment the interruption ended.',
      'El regreso de la luz es un punto claro.'
    ),
    continuous(
      'La música estaba sonando otra vez.',
      'The music was playing again.',
      ['music', 'was', 'playing'],
      ['was', 'playing', 'again'],
      'Usar played instead of was playing.',
      'The music had become background again.',
      'La música sigue acompañando la fiesta.'
    ),
    ctx(
      'Al final, la fiesta se volvió todavía más cálida.',
      'In the end, the party became even warmer.',
      ['party', 'became', 'warmer'],
      ['party', 'warmer'],
      'Cerrar sin efecto final.',
      'The ending should show that the surprise did not ruin the moment.',
      'El cierre deja una sensación positiva.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 16.');
