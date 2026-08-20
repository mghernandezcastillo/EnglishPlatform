import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[5];
const targetPattern = lesson.pattern;
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'can', 'could', 'might', 'should'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Unless / As long as / In case';
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
  { title: 'El equipo del parque: Reglas para salir bien', type: 'Descubrimiento', value: 'juego limpio' },
  [
    ctx(
      'El parque está listo para una salida larga',
      'The park is ready for a long outing',
      ['park', 'ready', 'outing'],
      ['park', 'ready', 'outing'],
      'Perder el ambiente de preparación',
      'The setting should support practical rules and precautions',
      'El parque sirve para preparar decisiones'
    ),
    ctx(
      'Las mochilas están sobre una banca',
      'The backpacks are on a bench',
      ['backpacks', 'bench'],
      ['backpacks', 'bench'],
      'Hacer la escena demasiado vacía',
      'Visible bags help introduce in case and as long as',
      'Las mochilas preparan la salida'
    ),
    ctx(
      'El cielo se ve limpio pero cambiante',
      'The sky looks clear but changeable',
      ['sky', 'clear', 'changeable'],
      ['sky', 'clear', 'changeable'],
      'Ignorar la posibilidad de cambio',
      'The weather clue is perfect for in case',
      'El clima deja la duda abierta'
    ),
    ctx(
      'Sara revisa la ruta en el teléfono',
      'Sara checks the route on her phone',
      ['Sara', 'checks', 'route'],
      ['Sara', 'checks', 'route'],
      'Cerrar sin una acción de control',
      'The route check should cue a condition and a precaution',
      'La ruta ya está bajo revisión'
    ),
    tgt(
      'Solo saldremos si el guía llega a tiempo',
      'We will leave only if the guide arrives on time',
      ['We', 'will', 'leave', 'only', 'if', 'the', 'guide', 'arrives'],
      ['We', 'will', 'leave', 'guide', 'arrives', 'time'],
      'Usar We will leave unless the guide arrives on time',
      'Unless is the negative equivalent of if not',
      'La llegada del guía define la salida'
    ),
    tgt(
      'Podemos empezar siempre que todos lleven casco',
      'We can start as long as everyone wears a helmet',
      ['We', 'can', 'start', 'as', 'long', 'as', 'everyone', 'wears'],
      ['We', 'can', 'start', 'everyone', 'wears', 'helmet'],
      'Usar We can start if everyone wears a helmet',
      'As long as means provided that',
      'El casco es la condición de inicio'
    ),
    tgt(
      'Lleva una chaqueta por si baja la temperatura',
      'Take a jacket in case the temperature drops',
      ['Take', 'a', 'jacket', 'in', 'case', 'the', 'temperature'],
      ['Take', 'jacket', 'in', 'case', 'temperature', 'drops'],
      'Usar Take a jacket if the temperature drops',
      'In case introduces a precaution for a possible situation',
      'La chaqueta sirve de protección'
    ),
    tgt(
      'No entres a menos que tengas permiso',
      'Do not enter unless you have permission',
      ['Do', 'not', 'enter', 'unless', 'you', 'have'],
      ['Do', 'not', 'enter', 'unless', 'have', 'permission'],
      'Usar Do not enter if you do not have permission',
      'Unless already carries the negative condition',
      'El permiso evita el problema'
    ),
    tgt(
      'Trae agua por si el camino se alarga',
      'Bring water in case the path gets longer',
      ['Bring', 'water', 'in', 'case', 'the', 'path'],
      ['Bring', 'water', 'in', 'case', 'path', 'gets'],
      'Usar Bring water if the path gets longer',
      'In case prepares for a possible need',
      'El agua es una precaución útil'
    ),
    tgt(
      'Seguirán caminando siempre que mantengan el paso',
      'They will keep walking as long as they keep the pace',
      ['They', 'will', 'keep', 'walking', 'as', 'long', 'as'],
      ['They', 'will', 'keep', 'walking', 'pace'],
      'Usar They keep walking as long as they keep the pace',
      'As long as sets a condition that must continue',
      'Mantener el paso permite seguir'
    ),
    tgt(
      'No saldremos a menos que el clima mejore',
      'We will not go out unless the weather improves',
      ['We', 'will', 'not', 'go', 'out', 'unless'],
      ['We', 'will', 'not', 'go', 'unless', 'improves'],
      'Usar We do not go out unless the weather improves',
      'Unless is used when the condition is the exception',
      'El clima mejor decide la salida'
    ),
    tgt(
      'Guarda el teléfono por si no hay señal',
      'Keep the phone with you in case there is no signal',
      ['Keep', 'the', 'phone', 'with', 'you', 'in', 'case'],
      ['Keep', 'the', 'phone', 'with', 'you', 'signal'],
      'Usar Keep the phone with you if there is no signal',
      'In case is for preparation before a possible problem',
      'El teléfono ayuda si falta señal'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tienda de la esquina: Reglas y precauciones', type: 'Uso natural', value: 'honestidad' },
  [
    ctx(
      'La tienda abre con una fila corta en la puerta',
      'The shop opens with a short line at the door',
      ['shop', 'opens', 'line'],
      ['shop', 'opens', 'line'],
      'Perder el ambiente de compra',
      'The shop should feel like a place where conditions matter',
      'La tienda deja ver la rutina'
    ),
    ctx(
      'Los precios están escritos en un cartel grande',
      'The prices are written on a big sign',
      ['prices', 'written', 'sign'],
      ['prices', 'written', 'sign'],
      'Hacer la escena demasiado pequeña',
      'Clear signs help make the conditions natural',
      'Los precios ya están claros'
    ),
    ctx(
      'Marta revisa la caja antes de abrir',
      'Marta checks the register before opening',
      ['Marta', 'checks', 'register'],
      ['Marta', 'checks', 'register'],
      'Ignorar el control previo',
      'The register check should lead into a precaution or condition',
      'La caja exige revisión'
    ),
    ctx(
      'Un cliente espera con una bolsa vacía',
      'A customer waits with an empty bag',
      ['customer', 'waits', 'bag'],
      ['customer', 'waits', 'bag'],
      'Cerrar sin una intención de compra',
      'The empty bag helps cue in case and unless',
      'La bolsa vacía pide uso'
    ),
    tgt(
      'Entren siempre que hayan pagado primero',
      'Enter as long as you have paid first',
      ['Enter', 'as', 'long', 'as', 'you', 'have', 'paid'],
      ['Enter', 'as', 'long', 'as', 'you', 'have', 'paid'],
      'Usar Enter if you have paid first',
      'As long as makes the payment a required condition',
      'Pagar primero da acceso'
    ),
    tgt(
      'Lleven efectivo por si la tarjeta falla',
      'Bring cash in case the card fails',
      ['Bring', 'cash', 'in', 'case', 'the', 'card'],
      ['Bring', 'cash', 'in', 'case', 'card', 'fails'],
      'Usar Bring cash if the card fails',
      'In case prepares for a possible problem',
      'El efectivo es una precaución'
    ),
    tgt(
      'No tomen el producto a menos que lean la etiqueta',
      'Do not take the product unless you read the label',
      ['Do', 'not', 'take', 'the', 'product', 'unless'],
      ['Do', 'not', 'take', 'product', 'unless', 'read'],
      'Usar Do not take the product if you do not read the label',
      'Unless already includes the negative condition',
      'Leer la etiqueta evita el error'
    ),
    tgt(
      'Ella llamará por si el pedido se retrasa',
      'She will call in case the order is late',
      ['She', 'will', 'call', 'in', 'case', 'the', 'order'],
      ['She', 'will', 'call', 'in', 'case', 'order', 'late'],
      'Usar She will call if the order is late',
      'In case is used before a possible future problem',
      'La llamada prevé el retraso'
    ),
    tgt(
      'Solo sirven café siempre que el turno siga abierto',
      'They serve coffee as long as the shift stays open',
      ['They', 'serve', 'coffee', 'as', 'long', 'as'],
      ['They', 'serve', 'coffee', 'shift', 'stays'],
      'Usar They serve coffee if the shift stays open',
      'As long as means the service depends on a condition',
      'El turno abierto permite el café'
    ),
    tgt(
      'No cerrarán la caja a menos que termine la fila',
      'They will not close the register unless the line ends',
      ['They', 'will', 'not', 'close', 'the', 'register', 'unless'],
      ['They', 'will', 'not', 'close', 'register', 'unless'],
      'Usar They do not close the register if the line does not end',
      'Unless introduces the exception without double negation',
      'La fila decide el cierre'
    ),
    tgt(
      'Guarden el recibo por si lo piden después',
      'Keep the receipt in case they ask for it later',
      ['Keep', 'the', 'receipt', 'in', 'case', 'they', 'ask'],
      ['Keep', 'the', 'receipt', 'in', 'case', 'ask'],
      'Usar Keep the receipt if they ask for it later',
      'In case is a useful precaution in stores',
      'El recibo puede ser necesario'
    ),
    tgt(
      'Seguirán atendiendo siempre que la luz siga encendida',
      'They will keep serving as long as the light stays on',
      ['They', 'will', 'keep', 'serving', 'as', 'long', 'as'],
      ['They', 'will', 'keep', 'serving', 'light'],
      'Usar They keep serving if the light stays on',
      'As long as marks a continuing condition',
      'La luz encendida sostiene el servicio'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El viaje de fin de semana: Lo que aprendieron', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'La familia prepara una mochila grande sobre la cama',
      'The family prepares a big backpack on the bed',
      ['family', 'prepares', 'backpack'],
      ['family', 'prepares', 'backpack'],
      'Perder el ambiente de salida',
      'The packing scene should make the precautions easy to remember',
      'La mochila prepara la salida'
    ),
    ctx(
      'El camino hacia la montaña se ve largo',
      'The road to the mountain looks long',
      ['road', 'mountain', 'long'],
      ['road', 'mountain', 'long'],
      'Hacer la escena demasiado breve',
      'A long road helps motivate in case and unless',
      'El camino largo pide precaución'
    ),
    ctx(
      'Sara revisa el mapa y el agua',
      'Sara checks the map and the water',
      ['Sara', 'checks', 'map'],
      ['Sara', 'checks', 'water'],
      'Ignorar los objetos que sirven de precaución',
      'The map and water support the precautionary connectors',
      'Mapa y agua son la base'
    ),
    ctx(
      'Los niños quieren llegar antes del almuerzo',
      'The children want to arrive before lunch',
      ['children', 'want', 'arrive'],
      ['children', 'want', 'arrive'],
      'Cerrar sin una meta temporal',
      'The lunch deadline keeps the story moving',
      'Llegar temprano es parte del plan'
    ),
    tgt(
      'Pongan protector solar por si el sol se vuelve fuerte',
      'Put on sunscreen in case the sun gets strong',
      ['Put', 'on', 'sunscreen', 'in', 'case', 'the', 'sun'],
      ['Put', 'on', 'sunscreen', 'in', 'case', 'sun', 'gets'],
      'Usar Put on sunscreen if the sun gets strong',
      'In case is used to prepare for a possible future need',
      'El protector solar evita problemas'
    ),
    tgt(
      'Seguirán el sendero siempre que el guía lo permita',
      'They will follow the trail as long as the guide allows it',
      ['They', 'will', 'follow', 'the', 'trail', 'as', 'long', 'as'],
      ['They', 'will', 'follow', 'trail', 'guide'],
      'Usar They follow the trail if the guide allows it',
      'As long as keeps the permission condition active',
      'El guía define el recorrido'
    ),
    tgt(
      'No se acercarán al río a menos que un adulto los acompañe',
      'They will not go near the river unless an adult goes with them',
      ['They', 'will', 'not', 'go', 'near', 'the', 'river', 'unless'],
      ['They', 'will', 'not', 'go', 'near', 'river', 'unless'],
      'Usar They will not go near the river if an adult does not go with them',
      'Unless already carries the negative condition',
      'El río exige compañía'
    ),
    tgt(
      'Lleven una chaqueta por si baja la noche',
      'Bring a jacket in case night falls early',
      ['Bring', 'a', 'jacket', 'in', 'case', 'night'],
      ['Bring', 'jacket', 'in', 'case', 'night', 'falls'],
      'Usar Bring a jacket if night falls early',
      'In case signals preparation before a possible event',
      'La chaqueta ayuda si cambia el clima'
    ),
    tgt(
      'Podrán descansar siempre que terminen la subida',
      'They can rest as long as they finish the climb',
      ['They', 'can', 'rest', 'as', 'long', 'as', 'they'],
      ['They', 'can', 'rest', 'climb'],
      'Usar They can rest if they finish the climb',
      'As long as makes the rest dependent on completion',
      'Terminar la subida permite descansar'
    ),
    tgt(
      'No regresarán a menos que se haga tarde',
      'They will not return unless it gets late',
      ['They', 'will', 'not', 'return', 'unless', 'it', 'gets'],
      ['They', 'will', 'not', 'return', 'unless', 'gets', 'late'],
      'Usar They will not return if it does not get late',
      'Unless is the short, natural negative condition',
      'La hora decide el regreso'
    ),
    tgt(
      'Guarden el celular por si no hay cobertura',
      'Keep the phone in case there is no coverage',
      ['Keep', 'the', 'phone', 'in', 'case', 'there', 'is'],
      ['Keep', 'the', 'phone', 'in', 'case', 'coverage'],
      'Usar Keep the phone if there is no coverage',
      'In case prepares for a possible lack of signal',
      'El celular sirve como precaución'
    ),
    tgt(
      'Seguirán contentos siempre que vayan juntos',
      'They will stay happy as long as they go together',
      ['They', 'will', 'stay', 'happy', 'as', 'long', 'as'],
      ['They', 'will', 'stay', 'happy', 'go', 'together'],
      'Usar They stay happy if they go together',
      'As long as keeps the condition continuous',
      'Ir juntos sostiene el buen ánimo'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
