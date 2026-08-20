import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[1];
const targetPattern = 'did + subject + base verb / did not + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['was', 'were', 'will', 'have', 'has'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Past Simple con did';
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
  { title: 'El equipo del parque: Preguntas después del juego', type: 'Descubrimiento', value: 'juego limpio' },
  [
    ctx(
      'Ayer, el equipo del parque jugó al aire libre.',
      'Yesterday, the park team played outside.',
      ['Yesterday', 'team', 'played'],
      ['Yesterday', 'team', 'outside'],
      'Perder la idea de un día ya terminado.',
      'Think about a completed game before the questions start.',
      'La historia abre con un partido ya cerrado.'
    ),
    tgt(
      '¿El entrenador llamó a todos?',
      'Did the coach call everyone?',
      ['Did', 'coach', 'call'],
      ['Did', 'call', 'everyone'],
      'Usar does the coach call.',
      'After did, the main verb stays in base form.',
      'La pregunta muestra el patrón del auxiliar.'
    ),
    tgt(
      'El entrenador no olvidó las reglas.',
      'The coach did not forget the rules.',
      ['coach', 'did', 'not', 'forget'],
      ['did', 'not', 'forget'],
      'Usar forgot without did not.',
      'Did not keeps the base verb after it.',
      'La negativa refuerza la forma correcta.'
    ),
    tgt(
      '¿Los niños llevaron sus botellas?',
      'Did the children bring their bottles?',
      ['Did', 'children', 'bring'],
      ['Did', 'bring', 'bottles'],
      'Usar did the children brought.',
      'After did, use the base form bring.',
      'La pregunta practica un verbo irregular.'
    ),
    ctx(
      'La cancha quedó limpia al terminar.',
      'The field stayed clean after they finished.',
      ['field', 'stayed', 'clean'],
      ['field', 'clean', 'finished'],
      'Cerrar sin sensación de resultado.',
      'The scene should feel finished before the next line.',
      'El contexto deja ver el resultado del juego.'
    ),
    tgt(
      'No repitieron el error.',
      'They did not repeat the mistake.',
      ['They', 'did', 'not', 'repeat'],
      ['did', 'not', 'repeat'],
      'Usar did not repeated.',
      'The verb after did not stays in base form.',
      'La negativa marca una acción completa.'
    ),
    tgt(
      '¿Respondió el equipo con calma?',
      'Did the team answer calmly?',
      ['Did', 'team', 'answer'],
      ['Did', 'answer', 'calmly'],
      'Usar did the team answered calmly.',
      'After did, answer stays in base form.',
      'La pregunta vuelve a mostrar el patrón.'
    ),
    tgt(
      '¿Usaron el silbato correcto?',
      'Did they use the right whistle?',
      ['Did', 'they', 'use'],
      ['Did', 'use', 'whistle'],
      'Usar did they used.',
      'Did keeps the next verb base.',
      'La pregunta mantiene el foco en el auxiliar.'
    ),
    ctx(
      'Todos salieron contentos y cansados.',
      'Everyone left happy and tired.',
      ['Everyone', 'left', 'tired'],
      ['Everyone', 'left', 'happy'],
      'Cerrar la escena sin energía final.',
      'Keep the result of the game visible.',
      'El contexto sigue siendo un recuerdo del partido.'
    ),
    tgt(
      'No perdieron el balón.',
      'They did not lose the ball.',
      ['They', 'did', 'not', 'lose'],
      ['did', 'not', 'lose'],
      'Usar did not lost.',
      'Lose stays in base form after did not.',
      'La negativa muestra una pérdida evitada.'
    ),
    tgt(
      '¿La asistencia cambió al final?',
      'Did the attendance change at the end?',
      ['Did', 'attendance', 'change'],
      ['Did', 'change', 'end'],
      'Usar did the attendance changed.',
      'After did, change remains base.',
      'La pregunta revisa el resultado del juego.'
    ),
    ctx(
      'Al final, el juego dejó buenas preguntas para recordar.',
      'In the end, the game left good questions to remember.',
      ['game', 'left', 'questions'],
      ['game', 'questions', 'remember'],
      'Cerrar sin un resultado claro.',
      'The ending should point back to what happened.',
      'El cierre deja preguntas útiles para practicar.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tienda de la esquina: Lo que pasó ayer', type: 'Uso natural', value: 'honestidad' },
  [
    ctx(
      'Ayer, la tienda abrió más tarde de lo normal.',
      'Yesterday, the shop opened later than usual.',
      ['Yesterday', 'shop', 'opened'],
      ['Yesterday', 'shop', 'later'],
      'Perder el marco temporal del ayer.',
      'Start with a completed event before the questions.',
      'La escena comercial ya quedó en el pasado.'
    ),
    tgt(
      '¿La cajera contó el dinero dos veces?',
      'Did the cashier count the money twice?',
      ['Did', 'cashier', 'count'],
      ['Did', 'count', 'money'],
      'Usar did the cashier counted the money twice.',
      'After did, count stays in base form.',
      'La pregunta revisa una acción terminada.'
    ),
    tgt(
      'Ella no cerró la caja temprano.',
      'She did not close the register early.',
      ['She', 'did', 'not', 'close'],
      ['did', 'not', 'close'],
      'Usar did not closed.',
      'Did not always keeps the base verb.',
      'La negativa muestra la forma estable.'
    ),
    tgt(
      '¿El dueño revisó los precios?',
      'Did the owner check the prices?',
      ['Did', 'owner', 'check'],
      ['Did', 'check', 'prices'],
      'Usar did the owner checked.',
      'The verb after did must stay base.',
      'La revisión ya ocurrió.'
    ),
    ctx(
      'Los vecinos miraron la vitrina y esperaron.',
      'The neighbors looked at the window display and waited.',
      ['neighbors', 'looked', 'waited'],
      ['neighbors', 'window', 'waited'],
      'Cerrar sin el ambiente de la tienda.',
      'Keep the memory of the previous afternoon.',
      'El contexto conserva la escena comercial.'
    ),
    tgt(
      'No vendieron pan al final de la tarde.',
      'They did not sell bread at the end of the afternoon.',
      ['They', 'did', 'not', 'sell'],
      ['did', 'not', 'sell'],
      'Usar did not sold.',
      'After did not, sell remains in base form.',
      'La negativa deja claro que la venta no ocurrió.'
    ),
    tgt(
      '¿La clienta pidió una bolsa extra?',
      'Did the customer ask for an extra bag?',
      ['Did', 'customer', 'ask'],
      ['Did', 'ask', 'bag'],
      'Usar did the customer asked.',
      'Ask stays in base form after did.',
      'La pregunta sobre la compra es directa.'
    ),
    tgt(
      '¿La tienda recibió una nota amable?',
      'Did the shop receive a kind note?',
      ['Did', 'shop', 'receive'],
      ['Did', 'receive', 'note'],
      'Usar did the shop received.',
      'Receive stays base after did.',
      'La pregunta busca un detalle concreto.'
    ),
    ctx(
      'La calle quedó tranquila cuando cerraron.',
      'The street became quiet when they closed.',
      ['street', 'became', 'quiet'],
      ['street', 'quiet', 'closed'],
      'Cerrar sin una imagen clara del final.',
      'The scene should still feel finished.',
      'La calle refleja el cierre de la jornada.'
    ),
    tgt(
      '¿Guardaron los billetes en el cajón?',
      'Did they put the bills in the drawer?',
      ['Did', 'they', 'put'],
      ['Did', 'put', 'drawer'],
      'Usar did they putted.',
      'Put stays the same after did.',
      'La pregunta revisa dónde quedó el dinero.'
    ),
    tgt(
      'No dejaron nada en el mostrador.',
      'They did not leave anything on the counter.',
      ['They', 'did', 'not', 'leave'],
      ['did', 'not', 'leave'],
      'Usar did not left.',
      'Leave stays in base form after did not.',
      'La negativa aclara el cierre de la tienda.'
    ),
    ctx(
      'Al final, todo quedó en orden para el día siguiente.',
      'In the end, everything was in order for the next day.',
      ['everything', 'was', 'order'],
      ['everything', 'order', 'day'],
      'Cerrar sin dejar una consecuencia clara.',
      'The ending should preserve the result of yesterday.',
      'El cierre deja la tienda lista para mañana.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El viaje de fin de semana: Lo que aprendieron', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'El viaje comenzó temprano el sábado.',
      'The trip started early on Saturday.',
      ['trip', 'started', 'Saturday'],
      ['trip', 'started', 'early'],
      'Perder el marco del viaje terminado.',
      'Begin with a completed trip event.',
      'La historia abre con un fin de semana ya pasado.'
    ),
    tgt(
      '¿La familia salió antes del amanecer?',
      'Did the family leave before dawn?',
      ['Did', 'family', 'leave'],
      ['Did', 'leave', 'dawn'],
      'Usar did the family left before dawn.',
      'After did, leave stays base.',
      'La pregunta revisa la hora de salida.'
    ),
    tgt(
      'No tomaron la ruta equivocada.',
      'They did not take the wrong road.',
      ['They', 'did', 'not', 'take'],
      ['did', 'not', 'take'],
      'Usar did not took.',
      'Take stays in base form after did not.',
      'La negativa cierra una decisión correcta.'
    ),
    tgt(
      '¿Los niños empacaron sus mochilas?',
      'Did the children pack their backpacks?',
      ['Did', 'children', 'pack'],
      ['Did', 'pack', 'backpacks'],
      'Usar did the children packed.',
      'Pack stays base after did.',
      'La pregunta comprueba la preparación del viaje.'
    ),
    ctx(
      'La carretera estuvo tranquila por un buen rato.',
      'The road was quiet for a while.',
      ['road', 'was', 'quiet'],
      ['road', 'quiet', 'while'],
      'Cerrar sin una imagen de trayecto.',
      'The road should feel like a finished part of the trip.',
      'El contexto conserva la sensación de ruta pasada.'
    ),
    tgt(
      '¿El padre paró en la gasolinera?',
      'Did the father stop at the gas station?',
      ['Did', 'father', 'stop'],
      ['Did', 'stop', 'station'],
      'Usar did the father stopped.',
      'Stop stays in base form after did.',
      'La pregunta repasa una parada concreta.'
    ),
    tgt(
      'No olvidaron el mapa.',
      'They did not forget the map.',
      ['They', 'did', 'not', 'forget'],
      ['did', 'not', 'forget'],
      'Usar did not forgot.',
      'Forget stays base after did not.',
      'La negativa muestra una acción evitada.'
    ),
    tgt(
      '¿La madre compró agua para todos?',
      'Did the mother buy water for everyone?',
      ['Did', 'mother', 'buy'],
      ['Did', 'buy', 'water'],
      'Usar did the mother bought.',
      'Buy stays base after did.',
      'La pregunta revisa un detalle útil del viaje.'
    ),
    ctx(
      'El coche siguió limpio y ordenado.',
      'The car stayed clean and tidy.',
      ['car', 'stayed', 'tidy'],
      ['car', 'clean', 'tidy'],
      'Cerrar sin sensación de regreso.',
      'Keep the trip memory neat and complete.',
      'El contexto prepara la vuelta a casa.'
    ),
    tgt(
      '¿Vieron el río desde el puente?',
      'Did they see the river from the bridge?',
      ['Did', 'they', 'see'],
      ['Did', 'see', 'river'],
      'Usar did they saw.',
      'See stays base after did.',
      'La pregunta revisa una imagen del camino.'
    ),
    tgt(
      'No perdieron el horario del regreso.',
      'They did not miss the return time.',
      ['They', 'did', 'not', 'miss'],
      ['did', 'not', 'miss'],
      'Usar did not missed.',
      'Miss stays base after did not.',
      'La negativa deja claro el control del tiempo.'
    ),
    ctx(
      'Al final, el viaje dejó recuerdos claros y preguntas fáciles.',
      'In the end, the trip left clear memories and easy questions.',
      ['trip', 'left', 'memories'],
      ['trip', 'memories', 'questions'],
      'Cerrar sin una conclusión útil.',
      'The ending should connect memory with practice.',
      'El cierre resume el valor del viaje.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 14.');
