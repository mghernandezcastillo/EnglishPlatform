import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[2].lessons[0];
const targetPattern = 'Past Simple: subject + past verb / irregular past form';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'will', 'have'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Past Simple';
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
  { title: 'La bicicleta roja: Un paseo inesperado', type: 'Descubrimiento', value: 'determinación' },
  [
    ctx(
      'Sara encontró una nota junto a su bicicleta.',
      'Sara found a note beside her bike.',
      ['Sara', 'found', 'note'],
      ['Sara', 'found', 'bike'],
      'Perder el sentido de un hecho ya terminado.',
      'Primero reconoce que la acción ya ocurrió.',
      'La historia abre con un hecho completo en el pasado.'
    ),
    tgt(
      'Sara revisó la cadena.',
      'Sara checked the chain.',
      ['Sara', 'checked', 'chain'],
      ['checked', 'chain', 'bike'],
      'Usar checks o is checking.',
      'Past Simple uses the past form of the verb.',
      'La revisión ya terminó.'
    ),
    tgt(
      'Ella ajustó el asiento.',
      'She adjusted the seat.',
      ['She', 'adjusted', 'seat'],
      ['adjusted', 'seat', 'She'],
      'Usar adjusts en lugar de adjusted.',
      'The action is complete, so use the past form.',
      'El detalle físico quedó listo.'
    ),
    tgt(
      'Luego llegó al mercado.',
      'Then she arrived at the market.',
      ['Then', 'arrived', 'market'],
      ['arrived', 'market', 'Then'],
      'Usar arrives instead of arrived.',
      'Completed movement needs the past form.',
      'El recorrido avanza y se completa.'
    ),
    ctx(
      'El camino estaba tranquilo y claro.',
      'The road was quiet and clear.',
      ['road', 'was', 'quiet'],
      ['road', 'quiet', 'clear'],
      'Cerrar la escena sin sensación de pasado.',
      'Keep the story grounded in a finished moment.',
      'El contexto conserva el tono sereno del recuerdo.'
    ),
    tgt(
      'Sara compró pan y fruta.',
      'Sara bought bread and fruit.',
      ['Sara', 'bought', 'bread'],
      ['bought', 'bread', 'fruit'],
      'Usar buy en vez de bought.',
      'Bought is the correct past form of buy.',
      'La compra es un hecho terminado.'
    ),
    tgt(
      'Ella habló con un vecino.',
      'She spoke with a neighbor.',
      ['She', 'spoke', 'neighbor'],
      ['spoke', 'neighbor', 'with'],
      'Usar speaks en lugar de spoke.',
      'Irregular past forms are important here.',
      'La conversación ya ocurrió.'
    ),
    tgt(
      'Después volvió a casa.',
      'After that, she returned home.',
      ['After', 'returned', 'home'],
      ['returned', 'home', 'After'],
      'Usar returns para un evento pasado.',
      'The action is finished, so the past form fits.',
      'El regreso cierra la secuencia.'
    ),
    ctx(
      'La tarde terminó sin prisa.',
      'The afternoon ended without hurry.',
      ['afternoon', 'ended', 'hurry'],
      ['afternoon', 'ended', 'hurry'],
      'Perder el tono de recuerdo.',
      'The ending should feel complete and calm.',
      'La escena sigue siendo un recuerdo terminado.'
    ),
    tgt(
      'Sara guardó la bicicleta en el patio.',
      'Sara parked the bike in the yard.',
      ['Sara', 'parked', 'bike'],
      ['parked', 'bike', 'yard'],
      'Usar parks instead of parked.',
      'The event happened once and finished.',
      'La acción deja el lugar listo.'
    ),
    tgt(
      'Ella escribió lo que hizo.',
      'She wrote what she did.',
      ['She', 'wrote', 'did'],
      ['wrote', 'did', 'what'],
      'Usar writes o write en la narración pasada.',
      'Wrote is the past form of write.',
      'La nota final resume lo ocurrido.'
    ),
    ctx(
      'Al final, recordó un paseo sencillo y bueno.',
      'In the end, she remembered a simple and good ride.',
      ['remembered', 'simple', 'ride'],
      ['remembered', 'simple', 'ride'],
      'Cerrar la historia con una idea poco clara.',
      'The ending should bring back the finished moment.',
      'El cierre deja la experiencia redonda.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La biblioteca vacía: Una tarde distinta', type: 'Uso natural', value: 'disciplina' },
  [
    ctx(
      'Ana entró en la biblioteca antes del almuerzo.',
      'Ana entered the library before lunch.',
      ['Ana', 'entered', 'library'],
      ['Ana', 'entered', 'lunch'],
      'Perder la escena de llegada.',
      'First identify the completed entry into the place.',
      'La historia se mueve con una visita ya terminada.'
    ),
    tgt(
      'Ana pidió un libro de aventuras.',
      'Ana asked for an adventure book.',
      ['Ana', 'asked', 'book'],
      ['asked', 'book', 'adventure'],
      'Usar asks en una acción pasada.',
      'Use the completed past form.',
      'La petición ya ocurrió.'
    ),
    tgt(
      'La bibliotecaria sonrió y ayudó enseguida.',
      'The librarian smiled and helped right away.',
      ['librarian', 'smiled', 'helped'],
      ['smiled', 'helped', 'right away'],
      'Usar smiles / helps en lugar de past forms.',
      'Completed actions need the past tense.',
      'La ayuda quedó resuelta en ese momento.'
    ),
    tgt(
      'Ana leyó las primeras páginas.',
      'Ana read the first pages.',
      ['Ana', 'read', 'pages'],
      ['read', 'pages', 'first'],
      'Confundir read presente con read pasado.',
      'Read is irregular; the written form stays the same.',
      'La lectura completa queda marcada por el contexto.'
    ),
    ctx(
      'La sala quedó en silencio durante un rato.',
      'The room stayed quiet for a while.',
      ['room', 'stayed', 'quiet'],
      ['room', 'quiet', 'while'],
      'Cerrar sin pausas ni atmósfera.',
      'The scene should still feel finished.',
      'El silencio acompaña la historia pasada.'
    ),
    tgt(
      'Ella anotó una idea interesante.',
      'She noted an interesting idea.',
      ['She', 'noted', 'idea'],
      ['noted', 'idea', 'interesting'],
      'Usar notes instead of noted.',
      'The action is complete and recorded.',
      'La idea ya quedó guardada.'
    ),
    tgt(
      'Luego cerró el cuaderno.',
      'Then she closed the notebook.',
      ['Then', 'closed', 'notebook'],
      ['closed', 'notebook', 'Then'],
      'Usar closes para una acción pasada.',
      'Past Simple keeps the event finished.',
      'El cuaderno se cerró al final.'
    ),
    tgt(
      'La luz cambió cuando salió.',
      'The light changed when she left.',
      ['light', 'changed', 'left'],
      ['changed', 'left', 'light'],
      'Usar changes / leaves en el pasado.',
      'Both verbs stay in past form.',
      'La salida ya quedó en el recuerdo.'
    ),
    ctx(
      'La tarde siguió tranquila y ordenada.',
      'The afternoon stayed calm and organized.',
      ['afternoon', 'stayed', 'organized'],
      ['afternoon', 'organized', 'calm'],
      'Cerrar sin continuidad del ambiente.',
      'Keep the ending soft and finished.',
      'La tarde mantiene el tono sereno.'
    ),
    tgt(
      'Ana devolvió el libro al final.',
      'Ana returned the book at the end.',
      ['Ana', 'returned', 'book'],
      ['returned', 'book', 'end'],
      'Usar returns en una escena pasada.',
      'The action is already complete.',
      'La devolución cierra la visita.'
    ),
    tgt(
      'Ella sonrió camino a casa.',
      'She smiled on the way home.',
      ['She', 'smiled', 'home'],
      ['smiled', 'home', 'way'],
      'Usar smiles instead of smiled.',
      'The past form keeps the moment finished.',
      'La sonrisa queda en el recuerdo.'
    ),
    ctx(
      'La visita dejó una sensación de calma.',
      'The visit left a feeling of calm.',
      ['visit', 'left', 'calm'],
      ['visit', 'left', 'calm'],
      'Cerrar la historia sin efecto final.',
      'The ending should summarize the result of the visit.',
      'La escena termina con un recuerdo tranquilo.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La familia en el río: Un recuerdo de verano', type: 'Integración', value: 'gratitud' },
  [
    ctx(
      'La familia visitó el río el domingo pasado.',
      'The family visited the river last Sunday.',
      ['family', 'visited', 'Sunday'],
      ['family', 'visited', 'river'],
      'Perder el valor de fecha pasada.',
      'The marker last Sunday tells you the action is finished.',
      'La historia empieza con un recuerdo cerrado.'
    ),
    tgt(
      'Prepararon una mesa pequeña.',
      'They prepared a small table.',
      ['They', 'prepared', 'table'],
      ['prepared', 'table', 'small'],
      'Usar prepare en lugar de prepared.',
      'Past Simple needs the past form.',
      'La preparación ocurrió antes del descanso.'
    ),
    tgt(
      'Los niños recogieron piedras lisas.',
      'The children collected smooth stones.',
      ['children', 'collected', 'stones'],
      ['collected', 'stones', 'smooth'],
      'Usar collect sin pasado.',
      'The gathering already happened.',
      'La recolección suma detalle al recuerdo.'
    ),
    tgt(
      'El padre tomó muchas fotos.',
      'The father took many photos.',
      ['father', 'took', 'photos'],
      ['took', 'photos', 'many'],
      'Usar take en vez de took.',
      'Took is the irregular past form of take.',
      'Las fotos ya existen como recuerdo.'
    ),
    ctx(
      'El sol brilló durante casi todo el día.',
      'The sun shone for almost the whole day.',
      ['sun', 'shone', 'day'],
      ['sun', 'shone', 'day'],
      'Cerrar sin un paisaje de pasado.',
      'The scene should feel like a finished day.',
      'El clima sostiene el recuerdo de verano.'
    ),
    tgt(
      'Todos comieron fruta y bebieron agua.',
      'Everyone ate fruit and drank water.',
      ['Everyone', 'ate', 'drank'],
      ['ate', 'drank', 'water'],
      'Usar eat / drink en vez de ate / drank.',
      'Both verbs need past forms.',
      'La comida ya quedó terminada.'
    ),
    tgt(
      'La madre contó una historia corta.',
      'The mother told a short story.',
      ['mother', 'told', 'story'],
      ['told', 'story', 'short'],
      'Usar tells instead of told.',
      'Told is the past form of tell.',
      'La historia oral ya pasó.'
    ),
    tgt(
      'Después, regresaron antes de anochecer.',
      'After that, they returned before dark.',
      ['After', 'returned', 'dark'],
      ['returned', 'dark', 'After'],
      'Usar return instead of returned.',
      'The return is already complete.',
      'El regreso cierra la salida.'
    ),
    ctx(
      'El camino de vuelta fue silencioso.',
      'The way back was quiet.',
      ['way', 'was', 'quiet'],
      ['way', 'was', 'quiet'],
      'Cerrar sin sensación de cierre.',
      'The ending should feel like a memory.',
      'El viaje de regreso ya terminó.'
    ),
    tgt(
      'Los niños durmieron en el coche.',
      'The children slept in the car.',
      ['children', 'slept', 'car'],
      ['slept', 'car', 'children'],
      'Usar sleep instead of slept.',
      'Slept is the past form of sleep.',
      'El descanso quedó como parte del paseo.'
    ),
    tgt(
      'La familia guardó los recuerdos con cuidado.',
      'The family kept the memories carefully.',
      ['family', 'kept', 'memories'],
      ['kept', 'memories', 'carefully'],
      'Usar keep en vez de kept.',
      'Kept is the irregular past form.',
      'Los recuerdos ya quedaron guardados.'
    ),
    ctx(
      'Al final, el domingo quedó como un buen recuerdo.',
      'In the end, Sunday remained a good memory.',
      ['Sunday', 'remained', 'memory'],
      ['Sunday', 'good', 'memory'],
      'Cerrar sin un cierre emocional.',
      'The ending should leave a finished memory.',
      'El cierre convierte el día en recuerdo.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 13.');
