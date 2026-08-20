import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[1];
const targetPattern = 'may / might + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'would', 'can', 'could', 'must'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'May / Might';
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
  { title: 'El cielo sobre el parque: Una duda razonable', type: 'Descubrimiento', value: 'observación' },
  [
    ctx(
      'El cielo sobre el parque se ve gris y pesado.',
      'The sky over the park looks gray and heavy.',
      ['sky', 'park', 'gray'],
      ['sky', 'park', 'heavy'],
      'Perder la idea de posibilidad incierta.',
      'Look for a situation where something is possible, not certain.',
      'La historia abre con una tarde dudosa.'
    ),
    tgt(
      'Puede que llueva esta tarde.',
      'It may rain this afternoon.',
      ['It', 'may', 'rain'],
      ['may', 'rain', 'afternoon'],
      'Usar will rain this afternoon.',
      'May shows possibility.',
      'La lluvia es posible pero no segura.'
    ),
    tgt(
      'El picnic podría moverse adentro.',
      'The picnic might move indoors.',
      ['picnic', 'might', 'move'],
      ['might', 'move', 'indoors'],
      'Usar will move indoors.',
      'Might makes the possibility weaker.',
      'El cambio es solo una opción.'
    ),
    tgt(
      'Las nubes pueden crecer más oscuras.',
      'The clouds may grow darker.',
      ['clouds', 'may', 'grow'],
      ['may', 'grow', 'darker'],
      'Usar can grow darker.',
      'May keeps the idea of possibility.',
      'Las nubes anuncian algo posible.'
    ),
    ctx(
      'La gente mira el cielo y recoge las mantas.',
      'People look at the sky and pack the blankets.',
      ['People', 'look', 'sky'],
      ['People', 'pack', 'blankets'],
      'Cerrar sin el ambiente de duda.',
      'The scene should keep the weather uncertainty visible.',
      'El contexto refuerza la sospecha de lluvia.'
    ),
    tgt(
      'No podríamos quedarnos mucho tiempo.',
      'We may not stay long.',
      ['We', 'may', 'not', 'stay'],
      ['may', 'not', 'stay', 'long'],
      'Usar will not stay long.',
      'May not shows a possible limitation.',
      'La permanencia es incierta.'
    ),
    tgt(
      'Puede que el viento cambie pronto.',
      'The wind may change soon.',
      ['wind', 'may', 'change'],
      ['may', 'change', 'soon'],
      'Usar will change soon.',
      'May fits a possible future event.',
      'El viento podría variar.'
    ),
    tgt(
      'La familia podría elegir otro día.',
      'The family might choose another day.',
      ['family', 'might', 'choose'],
      ['might', 'choose', 'another'],
      'Usar will choose another day.',
      'Might is weaker and more uncertain.',
      'El plan todavía no está cerrado.'
    ),
    ctx(
      'El parque sigue tranquilo por ahora.',
      'The park stays quiet for now.',
      ['park', 'stays', 'quiet'],
      ['park', 'quiet', 'now'],
      'Cerrar sin sensación de duda.',
      'The background should still feel open and changeable.',
      'El contexto mantiene la calma temporal.'
    ),
    tgt(
      'Los niños podrían jugar bajo el techo.',
      'The children might play under the roof.',
      ['children', 'might', 'play'],
      ['might', 'play', 'roof'],
      'Usar will play under the roof.',
      'Might keeps the choice uncertain.',
      'La opción sigue abierta.'
    ),
    tgt(
      'Tal vez la lluvia empiece en poco tiempo.',
      'The rain may start soon.',
      ['rain', 'may', 'start'],
      ['may', 'start', 'soon'],
      'Usar will start soon.',
      'May works for a probable event.',
      'La lluvia sigue siendo una posibilidad.'
    ),
    ctx(
      'Al final, la tarde queda en pausa.',
      'In the end, the afternoon stays on hold.',
      ['afternoon', 'stays', 'hold'],
      ['afternoon', 'stay', 'hold'],
      'Cerrar sin una sensación de incertidumbre.',
      'The ending should keep the idea of an open choice.',
      'El cierre deja el plan suspendido.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La nota del director: Permiso amable', type: 'Uso natural', value: 'cortesía' },
  [
    ctx(
      'La profesora está en su escritorio con varias hojas.',
      'The teacher is at her desk with several papers.',
      ['teacher', 'desk', 'papers'],
      ['teacher', 'desk', 'papers'],
      'Perder el tono de permiso y cortesía.',
      'Look for requests that sound respectful.',
      'La escena abre con una figura de autoridad.'
    ),
    tgt(
      'Puedo usar un marcador.',
      'May I use a marker.',
      ['May', 'I', 'use'],
      ['May', 'use', 'marker'],
      'Usar can I use a marker.',
      'May I is the polite permission form.',
      'La petición suena educada.'
    ),
    tgt(
      'Podemos abrir la ventana.',
      'May we open the window.',
      ['May', 'we', 'open'],
      ['May', 'open', 'window'],
      'Usar can we open the window.',
      'May is a softer request for permission.',
      'La clase pide permiso con respeto.'
    ),
    tgt(
      'Puede salir ahora.',
      'You may leave now.',
      ['You', 'may', 'leave'],
      ['may', 'leave', 'now'],
      'Usar you can leave now.',
      'May gives official permission.',
      'La autorización ya fue dada.'
    ),
    ctx(
      'El salón sigue en silencio y todos miran la nota.',
      'The classroom stays quiet and everyone looks at the note.',
      ['classroom', 'stays', 'quiet'],
      ['classroom', 'looks', 'note'],
      'Cerrar sin un tono formal.',
      'The note should sound respectful and clear.',
      'El contexto mantiene el ambiente escolar.'
    ),
    tgt(
      'Ella no puede entrar sin credencial.',
      'She may not enter without a badge.',
      ['She', 'may', 'not', 'enter'],
      ['may', 'not', 'enter', 'badge'],
      'Usar cannot enter without a badge.',
      'May not keeps the permission frame.',
      'La negativa deja claro el límite.'
    ),
    tgt(
      'Puedo sentarme cerca del frente.',
      'May I sit near the front.',
      ['May', 'I', 'sit'],
      ['May', 'sit', 'front'],
      'Usar can I sit near the front.',
      'May I is a polite question for permission.',
      'La cortesía se mantiene.'
    ),
    tgt(
      'Podrían enviar el archivo más tarde.',
      'They might send the file later.',
      ['They', 'might', 'send'],
      ['might', 'send', 'later'],
      'Usar will send the file later.',
      'Might gives a weak possibility, not a firm plan.',
      'La opción sigue abierta.'
    ),
    ctx(
      'La puerta queda abierta y la clase respira tranquila.',
      'The door stays open and the class breathes easily.',
      ['door', 'stays', 'open'],
      ['door', 'class', 'easily'],
      'Cerrar sin sensación de permiso concedido.',
      'The scene should keep the soft official tone.',
      'El contexto refuerza el permiso.'
    ),
    tgt(
      'Pueden usar el aula después del almuerzo.',
      'They may use the room after lunch.',
      ['They', 'may', 'use'],
      ['may', 'use', 'lunch'],
      'Usar they can use the room after lunch.',
      'May works for granted permission.',
      'La autorización queda clara.'
    ),
    tgt(
      'Podría volver pronto.',
      'She might come back soon.',
      ['She', 'might', 'come'],
      ['might', 'come', 'soon'],
      'Usar will come back soon.',
      'Might shows uncertainty.',
      'La vuelta no está asegurada.'
    ),
    ctx(
      'Al final, la nota deja una sensación de respeto.',
      'In the end, the note leaves a feeling of respect.',
      ['note', 'leaves', 'respect'],
      ['note', 'feeling', 'respect'],
      'Cerrar sin tono formal.',
      'The ending should keep the request polite.',
      'El cierre resume la cortesía.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La ruta del sábado: Posibilidades abiertas', type: 'Integración', value: 'flexibilidad' },
  [
    ctx(
      'La familia mira el mapa y la mesa está llena de opciones.',
      'The family looks at the map and the table is full of options.',
      ['family', 'looks', 'map'],
      ['family', 'table', 'options'],
      'Perder la idea de planes no cerrados.',
      'Think about choices that are still open.',
      'La historia abre con varias posibilidades.'
    ),
    tgt(
      'Podemos ir a la playa.',
      'We may go to the beach.',
      ['We', 'may', 'go'],
      ['may', 'go', 'beach'],
      'Usar will go to the beach.',
      'May keeps the idea open, not fixed.',
      'La playa es una posibilidad.'
    ),
    tgt(
      'Podríamos quedarnos en casa.',
      'We might stay home.',
      ['We', 'might', 'stay'],
      ['might', 'stay', 'home'],
      'Usar will stay home.',
      'Might shows a weaker possibility.',
      'Quedarse en casa sigue siendo opción.'
    ),
    tgt(
      'Papá podría llamar más tarde.',
      'Dad may call later.',
      ['Dad', 'may', 'call'],
      ['may', 'call', 'later'],
      'Usar will call later.',
      'May shows a possible future action.',
      'La llamada todavía no es segura.'
    ),
    ctx(
      'Las bolsas siguen sobre el sofá.',
      'The bags stay on the sofa.',
      ['bags', 'stay', 'sofa'],
      ['bags', 'sofa'],
      'Cerrar sin sensación de opciones.',
      'The scene should still feel open.',
      'El contexto deja el plan en espera.'
    ),
    tgt(
      'Maya podría traer bocadillos.',
      'Maya might bring snacks.',
      ['Maya', 'might', 'bring'],
      ['might', 'bring', 'snacks'],
      'Usar will bring snacks.',
      'Might keeps the idea uncertain.',
      'Los bocadillos son una opción.'
    ),
    tgt(
      'No podríamos conducir muy lejos.',
      'We may not drive far.',
      ['We', 'may', 'not', 'drive'],
      ['may', 'not', 'drive', 'far'],
      'Usar will not drive far.',
      'May not is a possible limitation.',
      'La distancia todavía es duda.'
    ),
    tgt(
      'Podrían visitar a los abuelos.',
      'They might visit grandparents.',
      ['They', 'might', 'visit'],
      ['might', 'visit', 'grandparents'],
      'Usar will visit grandparents.',
      'Might is softer and less certain.',
      'La visita aún no está decidida.'
    ),
    ctx(
      'El fin de semana sigue abierto y tranquilo.',
      'The weekend stays open and calm.',
      ['weekend', 'stays', 'open'],
      ['weekend', 'open', 'calm'],
      'Cerrar sin una sensación de posibilidades.',
      'The ending should keep the choices visible.',
      'El contexto conserva la flexibilidad.'
    ),
    tgt(
      'El clima puede cambiar después del mediodía.',
      'The weather may change after noon.',
      ['weather', 'may', 'change'],
      ['may', 'change', 'noon'],
      'Usar will change after noon.',
      'May expresses a possible change.',
      'El clima sigue incierto.'
    ),
    tgt(
      'El plan podría mejorar mañana.',
      'The plan might change by tomorrow.',
      ['plan', 'might', 'change'],
      ['might', 'change', 'tomorrow'],
      'Usar will change by tomorrow.',
      'Might keeps the possibility soft.',
      'El plan todavía podría moverse.'
    ),
    ctx(
      'Al final, el sábado queda en pausa y con opciones.',
      'In the end, Saturday stays on hold and full of options.',
      ['Saturday', 'stays', 'hold'],
      ['Saturday', 'options'],
      'Cerrar sin una idea abierta.',
      'The ending should show that nothing is fixed yet.',
      'El cierre deja el día abierto.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 28.');
