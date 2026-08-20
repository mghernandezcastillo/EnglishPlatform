import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[1];
const targetPattern = 'If + present simple, will + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['would', 'could', 'might', 'should', 'must'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'First Conditional';
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
  { title: 'El equipo del parque: Si cambia el clima, cambia el plan', type: 'Descubrimiento', value: 'juego limpio' },
  [
    ctx(
      'El parque está listo para el partido de la tarde',
      'The park is ready for the afternoon game',
      ['park', 'ready', 'game'],
      ['park', 'ready', 'game'],
      'Perder el ambiente deportivo y de espera',
      'The opening scene should set up a clear plan before the condition appears',
      'La escena abre con una actividad organizada'
    ),
    ctx(
      'Las porterías están quietas y el cielo se ve gris',
      'The goals are still and the sky looks gray',
      ['goals', 'sky', 'gray'],
      ['goals', 'sky', 'gray'],
      'Hacer una escena demasiado abstracta',
      'The weather clue should feel visible and immediate',
      'El cielo gris anticipa un posible cambio'
    ),
    ctx(
      'El entrenador revisa las camisetas y el reloj',
      'The coach checks the shirts and the clock',
      ['coach', 'checks', 'clock'],
      ['coach', 'shirts', 'clock'],
      'Ignorar la figura que organiza el juego',
      'A checking coach helps prepare the decision logic',
      'El entrenador marca el ritmo'
    ),
    ctx(
      'Los niños esperan la señal para empezar',
      'The kids wait for the signal to start',
      ['kids', 'wait', 'signal'],
      ['kids', 'wait', 'signal'],
      'Cerrar sin una sensación de expectativa',
      'Waiting for a signal is a good bridge to the condition',
      'La espera sostiene la tensión'
    ),
    tgt(
      'Si llueve, jugaremos bajo techo',
      'If it rains, we will play indoors',
      ['If', 'it', 'rains', 'we', 'will', 'play'],
      ['If', 'rains', 'we', 'will', 'play', 'indoors'],
      'Usar If it rains, we play indoors',
      'First Conditional uses present simple in the if-clause and will in the result',
      'La lluvia cambia el plan'
    ),
    tgt(
      'Si la cancha sigue mojada, el entrenador cancelará el partido',
      'If the field stays wet, the coach will cancel the game',
      ['If', 'the', 'field', 'stays', 'wet'],
      ['If', 'field', 'stays', 'wet', 'coach'],
      'Usar If the field stays wet, the coach cancels the game',
      'The result clause uses will + base verb',
      'La cancha mojada trae una decisión directa'
    ),
    tgt(
      'Si la señal suena, los equipos correrán a la cancha',
      'If the signal sounds, the teams will run to the field',
      ['If', 'the', 'signal', 'sounds', 'teams', 'will'],
      ['If', 'signal', 'sounds', 'teams', 'field'],
      'Usar If the signal sounds, the teams run to the field',
      'Both clauses stay in the correct first conditional pattern',
      'La señal activa el movimiento'
    ),
    tgt(
      'Si el viento se vuelve más fuerte, ellos sostendrán la lona',
      'If the wind gets stronger, they will hold the tarp',
      ['If', 'the', 'wind', 'gets', 'stronger'],
      ['If', 'wind', 'gets', 'stronger', 'tarp'],
      'Usar If the wind gets stronger, they hold the tarp',
      'Will + base verb shows the future result',
      'El viento exige una reacción inmediata'
    ),
    tgt(
      'Si el árbitro llega tarde, comenzaremos más tarde',
      'If the referee arrives late, we will start later',
      ['If', 'the', 'referee', 'arrives', 'late'],
      ['If', 'referee', 'arrives', 'late', 'start'],
      'Usar If the referee arrives late, we start later',
      'The condition is in present simple, not future simple',
      'La llegada del árbitro cambia la hora'
    ),
    tgt(
      'Si no terminan de preparar las redes, no empezaremos',
      'If they do not finish setting up the nets, we will not start',
      ['If', 'they', 'do', 'not', 'finish'],
      ['If', 'they', 'do', 'not', 'finish', 'nets'],
      'Usar If they do not finish setting up the nets, we do not start',
      'Negative first conditional still uses will in the main clause',
      'No terminar a tiempo retrasa todo'
    ),
    tgt(
      'Si Sara encuentra la pelota, la llevará al centro',
      'If Sara finds the ball, she will take it to the center',
      ['If', 'Sara', 'finds', 'the', 'ball'],
      ['If', 'Sara', 'finds', 'ball', 'center'],
      'Usar If Sara finds the ball, she takes it to the center',
      'The if-clause stays in present simple with finds',
      'Encontrar la pelota activa la jugada'
    ),
    tgt(
      'Si el juego empieza bien, todos se divertirán',
      'If the game starts well, everyone will have fun',
      ['If', 'the', 'game', 'starts', 'well'],
      ['If', 'game', 'starts', 'well', 'everyone'],
      'Usar If the game starts well, everyone has fun',
      'The result clause predicts a future outcome',
      'Un buen inicio suele dar buen resultado'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La tienda de la esquina: Decisiones con resultado', type: 'Uso natural', value: 'honestidad' },
  [
    ctx(
      'La tienda abre con pan caliente y listas en la caja',
      'The shop opens with fresh bread and lists at the counter',
      ['shop', 'fresh', 'bread'],
      ['shop', 'fresh', 'bread'],
      'Perder el ambiente de compra cotidiana',
      'The shop scene should support simple decisions and results',
      'La tienda pone el contexto de compra'
    ),
    ctx(
      'Marta revisa los precios antes de elegir',
      'Marta checks the prices before choosing',
      ['Marta', 'checks', 'prices'],
      ['Marta', 'checks', 'prices'],
      'Ignorar el momento de comparar opciones',
      'Price checking sets up the conditional choice',
      'Comparar precios prepara la decisión'
    ),
    ctx(
      'El cajero ordena los billetes con calma',
      'The cashier sorts the bills calmly',
      ['cashier', 'sorts', 'bills'],
      ['cashier', 'sorts', 'bills'],
      'Cerrar sin una escena de organización real',
      'The cashier should keep the store feeling active',
      'La caja funciona con orden'
    ),
    ctx(
      'Un cliente mira el estante vacío',
      'A customer looks at the empty shelf',
      ['customer', 'looks', 'shelf'],
      ['customer', 'looks', 'shelf'],
      'Perder la pista de una posible decisión',
      'The empty shelf sets up a future response',
      'El estante vacío marca el problema'
    ),
    tgt(
      'Si el pan está fresco, lo compraremos',
      'If the bread is fresh, we will buy it',
      ['If', 'the', 'bread', 'is', 'fresh'],
      ['If', 'bread', 'is', 'fresh', 'buy'],
      'Usar If the bread is fresh, we buy it',
      'The first clause stays in present simple and the result uses will',
      'La frescura decide la compra'
    ),
    tgt(
      'Si el precio baja, Marta elegirá dos paquetes',
      'If the price goes down, Marta will choose two packs',
      ['If', 'the', 'price', 'goes', 'down'],
      ['If', 'price', 'goes', 'down', 'choose'],
      'Usar If the price goes down, Marta chooses two packs',
      'The result clause predicts a future action',
      'El precio controla la cantidad'
    ),
    tgt(
      'Si falta leche, iremos a la otra tienda',
      'If there is no milk, we will go to the other store',
      ['If', 'there', 'is', 'no', 'milk'],
      ['If', 'there', 'is', 'no', 'milk', 'store'],
      'Usar If there is no milk, we go to the other store',
      'First Conditional keeps the consequence in will',
      'La falta de leche mueve la decisión'
    ),
    tgt(
      'Si la caja acepta la tarjeta, ella pagará rápido',
      'If the register accepts the card, she will pay quickly',
      ['If', 'the', 'register', 'accepts', 'the', 'card'],
      ['If', 'register', 'accepts', 'card', 'pay'],
      'Usar If the register accepts the card, she pays quickly',
      'The if-clause uses present simple acceptance',
      'La tarjeta define el pago'
    ),
    tgt(
      'Si el gerente aprueba el descuento, la fila avanzará',
      'If the manager approves the discount, the line will move faster',
      ['If', 'the', 'manager', 'approves', 'the', 'discount'],
      ['If', 'manager', 'approves', 'discount', 'line'],
      'Usar If the manager approves the discount, the line moves faster',
      'Will + base verb shows the projected result',
      'La aprobación acelera la fila'
    ),
    tgt(
      'Si Leo olvida el cupón, pagará más',
      'If Leo forgets the coupon, he will pay more',
      ['If', 'Leo', 'forgets', 'the', 'coupon'],
      ['If', 'Leo', 'forgets', 'coupon', 'pay'],
      'Usar If Leo forgets the coupon, he pays more',
      'The main clause predicts what happens after the mistake',
      'Olvidar el cupón trae un costo'
    ),
    tgt(
      'Si encuentran el queso, volverán contentos',
      'If they find the cheese, they will come back happy',
      ['If', 'they', 'find', 'the', 'cheese'],
      ['If', 'they', 'find', 'cheese', 'come'],
      'Usar If they find the cheese, they come back happy',
      'A present-simple condition leads to a future result',
      'Encontrar el queso cambia el ánimo'
    ),
    tgt(
      'Si la tienda cierra temprano, compraremos mañana',
      'If the shop closes early, we will shop tomorrow',
      ['If', 'the', 'shop', 'closes', 'early'],
      ['If', 'shop', 'closes', 'early', 'tomorrow'],
      'Usar If the shop closes early, we shop tomorrow',
      'The result clause still needs will + base verb',
      'Cerrar temprano cambia el plan'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'El viaje de fin de semana: Decidir con prudencia', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'La maleta está abierta sobre la cama',
      'The suitcase is open on the bed',
      ['suitcase', 'open', 'bed'],
      ['suitcase', 'open', 'bed'],
      'Perder el ambiente previo al viaje',
      'The packing scene should make decisions easy to follow',
      'La maleta prepara la salida'
    ),
    ctx(
      'El mapa está sobre la mesa de la cocina',
      'The map is on the kitchen table',
      ['map', 'kitchen', 'table'],
      ['map', 'kitchen', 'table'],
      'Hacer la escena muy general y sin ruta',
      'The map should cue choices about the trip',
      'El mapa guía la decisión'
    ),
    ctx(
      'Sara revisa el clima con el celular',
      'Sara checks the weather on her phone',
      ['Sara', 'checks', 'weather'],
      ['Sara', 'checks', 'weather'],
      'Ignorar la información que define el viaje',
      'Weather information is the trigger for first conditional',
      'El clima decide el rumbo'
    ),
    ctx(
      'Todos esperan salir antes del mediodía',
      'Everyone hopes to leave before noon',
      ['Everyone', 'hopes', 'leave'],
      ['Everyone', 'hopes', 'noon'],
      'Cerrar sin tensión sobre el horario',
      'The timing should stay important throughout the story',
      'La hora de salida importa'
    ),
    tgt(
      'Si el clima mejora, saldremos a caminar',
      'If the weather improves, we will go for a walk',
      ['If', 'the', 'weather', 'improves'],
      ['If', 'weather', 'improves', 'walk'],
      'Usar If the weather improves, we go for a walk',
      'The result is a future choice, so will is required',
      'Un clima mejor abre la caminata'
    ),
    tgt(
      'Si el camino está cerrado, tomaremos la ruta vieja',
      'If the road is closed, we will take the old route',
      ['If', 'the', 'road', 'is', 'closed'],
      ['If', 'road', 'is', 'closed', 'route'],
      'Usar If the road is closed, we take the old route',
      'The if-clause remains in present simple',
      'El camino cerrado obliga a cambiar'
    ),
    tgt(
      'Si los niños se cansan, descansarán bajo un árbol',
      'If the kids get tired, they will rest under a tree',
      ['If', 'the', 'kids', 'get', 'tired'],
      ['If', 'kids', 'get', 'tired', 'rest'],
      'Usar If the kids get tired, they rest under a tree',
      'Future rest depends on the present condition',
      'El cansancio activa la pausa'
    ),
    tgt(
      'Si la guía explica el sendero, todos lo entenderán',
      'If the guide explains the trail, everyone will understand it',
      ['If', 'the', 'guide', 'explains', 'the', 'trail'],
      ['If', 'guide', 'explains', 'trail', 'understand'],
      'Usar If the guide explains the trail, everyone understands it',
      'First Conditional shows a likely future result',
      'La explicación aclara el sendero'
    ),
    tgt(
      'Si no salimos pronto, perderemos la vista del lago',
      'If we do not leave soon, we will miss the lake view',
      ['If', 'we', 'do', 'not', 'leave', 'soon'],
      ['If', 'we', 'do', 'not', 'leave', 'soon', 'view'],
      'Usar If we do not leave soon, we miss the lake view',
      'Negative first conditional still ends with will + base verb',
      'Salir tarde cuesta la vista'
    ),
    tgt(
      'Si Sara trae agua, la caminata será más fácil',
      'If Sara brings water, the walk will be easier',
      ['If', 'Sara', 'brings', 'water'],
      ['If', 'Sara', 'brings', 'water', 'easier'],
      'Usar If Sara brings water, the walk is easier',
      'The result clause uses will be + adjective',
      'El agua hace todo más simple'
    ),
    tgt(
      'Si el puente se ve seguro, cruzaremos',
      'If the bridge looks safe, we will cross',
      ['If', 'the', 'bridge', 'looks', 'safe'],
      ['If', 'bridge', 'looks', 'safe', 'cross'],
      'Usar If the bridge looks safe, we cross',
      'A present condition leads to a future plan',
      'La seguridad del puente define el paso'
    ),
    tgt(
      'Si llega la lluvia, nos quedaremos en la cabaña',
      'If the rain arrives, we will stay in the cabin',
      ['If', 'the', 'rain', 'arrives'],
      ['If', 'rain', 'arrives', 'stay'],
      'Usar If the rain arrives, we stay in the cabin',
      'The clause pair keeps the first conditional structure',
      'La lluvia cambia el descanso'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
