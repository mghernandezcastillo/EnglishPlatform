import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[0];
const targetPattern = 'will + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['do', 'does', 'did', 'have', 'has'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Future Simple with will';
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
  { title: 'El puerto y la lluvia: Lo que pasará mañana', type: 'Descubrimiento', value: 'previsión' },
  [
    ctx(
      'El cielo sobre el puerto se ve pesado.',
      'The sky over the port looks heavy.',
      ['sky', 'port', 'looks'],
      ['sky', 'port', 'heavy'],
      'Perder la escena de previsión.',
      'Primero ubica el ambiente antes de hablar del futuro.',
      'La historia abre con una sensación de cambio.'
    ),
    tgt(
      'Lloverá pronto.',
      'It will rain soon.',
      ['It', 'will', 'rain'],
      ['will', 'rain', 'soon'],
      'Usar rains en vez de will rain.',
      'Future Simple uses will + base verb.',
      'La predicción es directa y clara.'
    ),
    tgt(
      'El barco llegará más tarde.',
      'The boat will arrive later.',
      ['boat', 'will', 'arrive'],
      ['will', 'arrive', 'later'],
      'Usar arrives instead of will arrive.',
      'Will marks a future prediction.',
      'La llegada todavía no ha ocurrido.'
    ),
    tgt(
      'La marea cambiará por la noche.',
      'The tide will change at night.',
      ['tide', 'will', 'change'],
      ['will', 'change', 'night'],
      'Usar changes for a future event.',
      'Will keeps the verb in base form.',
      'La marea queda dentro de la previsión.'
    ),
    ctx(
      'El capitán observa el horizonte y espera una señal.',
      'The captain watches the horizon and waits for a sign.',
      ['captain', 'watches', 'horizon'],
      ['captain', 'waits', 'sign'],
      'Cerrar sin sensación de expectativa.',
      'The scene should still feel like a forecast.',
      'El contexto sostiene la idea de espera.'
    ),
    tgt(
      'El viento no dañará la ruta.',
      'The wind will not damage the route.',
      ['wind', 'will', 'not', 'damage'],
      ['will', 'not', 'damage'],
      'Usar does not damage.',
      'Negative future simple uses will not + base verb.',
      'La negativa muestra una predicción tranquila.'
    ),
    tgt(
      '¿El clima mejorará por la mañana?',
      'Will the weather improve in the morning?',
      ['Will', 'weather', 'improve'],
      ['Will', 'improve', 'morning'],
      'Usar does the weather improve.',
      'Questions with future simple start with will.',
      'La pregunta mira hacia el mañana.'
    ),
    tgt(
      'Los equipos ayudarán si hace falta.',
      'The teams will help if needed.',
      ['teams', 'will', 'help'],
      ['will', 'help', 'needed'],
      'Usar helped para una ayuda futura.',
      'Will keeps the helper action in the future.',
      'La ayuda queda prometida para después.'
    ),
    ctx(
      'Los muelles siguen tranquilos por ahora.',
      'The docks stay calm for now.',
      ['docks', 'stay', 'calm'],
      ['docks', 'stay', 'now'],
      'Cerrar sin una sensación de calma previa.',
      'The background should stay quiet before the forecast changes.',
      'El contexto mantiene la calma del lugar.'
    ),
    tgt(
      'Marta decidirá quedarse.',
      'Marta will decide to stay.',
      ['Marta', 'will', 'decide'],
      ['will', 'decide', 'stay'],
      'Usar decides instead of will decide.',
      'A spontaneous decision fits future simple.',
      'La decisión ocurre en un momento futuro.'
    ),
    tgt(
      'El capitán no cancelará el plan.',
      'The captain will not cancel the plan.',
      ['captain', 'will', 'not', 'cancel'],
      ['will', 'not', 'cancel'],
      'Usar does not cancel the plan.',
      'Will not keeps the base verb after it.',
      'La negativa sostiene la promesa.'
    ),
    ctx(
      'Al final, la ruta seguirá abierta.',
      'In the end, the route will stay open.',
      ['route', 'will', 'stay'],
      ['route', 'stay', 'open'],
      'Cerrar sin una idea de futuro.',
      'The ending should keep the prediction visible.',
      'El cierre resume lo que se espera.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La escuela y la promesa: Ayuda segura', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'El salón está lleno de carteles antes de la feria.',
      'The classroom is full of posters before the fair.',
      ['classroom', 'full', 'posters'],
      ['classroom', 'fair', 'posters'],
      'Perder el ambiente de preparación.',
      'Start with the scene before the event.',
      'La historia abre con una preparación escolar.'
    ),
    tgt(
      'Ana organizará los carteles.',
      'Ana will organize the posters.',
      ['Ana', 'will', 'organize'],
      ['will', 'organize', 'posters'],
      'Usar organizes for a future plan.',
      'Will is the correct choice for a future action.',
      'La organización queda para después.'
    ),
    tgt(
      'Luis traerá marcadores.',
      'Luis will bring markers.',
      ['Luis', 'will', 'bring'],
      ['will', 'bring', 'markers'],
      'Usar brings instead of will bring.',
      'The action is still ahead.',
      'El aporte de Luis está prometido.'
    ),
    tgt(
      'La maestra explicará el plan.',
      'The teacher will explain the plan.',
      ['teacher', 'will', 'explain'],
      ['will', 'explain', 'plan'],
      'Usar explains for a future explanation.',
      'Future Simple keeps the verb base.',
      'La explicación todavía no ocurre.'
    ),
    ctx(
      'El equipo revisa la lista y sonríe.',
      'The team checks the list and smiles.',
      ['team', 'checks', 'list'],
      ['team', 'checks', 'smiles'],
      'Cerrar sin mostrar cooperación.',
      'The scene should feel like a plan in progress.',
      'El contexto sostiene la preparación.'
    ),
    tgt(
      'No olvidarán las cintas.',
      'They will not forget the ribbons.',
      ['They', 'will', 'not', 'forget'],
      ['will', 'not', 'forget'],
      'Usar do not forget in this lesson.',
      'Will not keeps the verb in base form.',
      'La negativa muestra una promesa segura.'
    ),
    tgt(
      '¿La clase terminará a tiempo?',
      'Will the class finish on time?',
      ['Will', 'class', 'finish'],
      ['Will', 'finish', 'time'],
      'Usar does the class finish on time.',
      'Questions with future simple start with will.',
      'La pregunta revisa un resultado futuro.'
    ),
    tgt(
      'Ana llamará a los voluntarios.',
      'Ana will call the volunteers.',
      ['Ana', 'will', 'call'],
      ['will', 'call', 'volunteers'],
      'Usar calls instead of will call.',
      'Future Simple uses will + base verb.',
      'La llamada queda para más adelante.'
    ),
    ctx(
      'El pasillo está silencioso por un momento.',
      'The hall is quiet for a moment.',
      ['hall', 'quiet', 'moment'],
      ['hall', 'quiet', 'moment'],
      'Cerrar sin sensación de pausa.',
      'The scene should still feel organized.',
      'El contexto deja espacio para la siguiente acción.'
    ),
    tgt(
      'Los ayudantes llevarán las cajas.',
      'The helpers will carry the boxes.',
      ['helpers', 'will', 'carry'],
      ['will', 'carry', 'boxes'],
      'Usar carries for a future action.',
      'Will signals the action is still ahead.',
      'El apoyo se promete para después.'
    ),
    tgt(
      'Los estudiantes limpiarán las mesas después.',
      'The students will clean the tables later.',
      ['students', 'will', 'clean'],
      ['will', 'clean', 'tables'],
      'Usar cleans in a future plan.',
      'Later naturally fits with will.',
      'La limpieza queda planificada.'
    ),
    ctx(
      'Al final, la escuela estará lista para la feria.',
      'In the end, the school will be ready for the fair.',
      ['school', 'will', 'be'],
      ['school', 'ready', 'fair'],
      'Cerrar sin una meta clara.',
      'The ending should point to the future result.',
      'El cierre resume la preparación escolar.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La excursión y el anuncio: Decisiones rápidas', type: 'Integración', value: 'cooperación' },
  [
    ctx(
      'El autobús espera en la esquina.',
      'The bus is waiting at the corner.',
      ['bus', 'is', 'waiting'],
      ['bus', 'waiting', 'corner'],
      'Perder el momento previo al viaje.',
      'Think about a plan that is about to happen.',
      'La excursión está a punto de empezar.'
    ),
    tgt(
      'Ellos saldrán a las siete.',
      'They will leave at seven.',
      ['They', 'will', 'leave'],
      ['will', 'leave', 'seven'],
      'Usar leave s for a future plan.',
      'Will keeps the verb in base form.',
      'La salida queda fijada en el futuro.'
    ),
    tgt(
      'La guía comprará agua extra.',
      'The guide will buy extra water.',
      ['guide', 'will', 'buy'],
      ['will', 'buy', 'water'],
      'Usar buys instead of will buy.',
      'Future Simple uses will + base verb.',
      'La compra todavía no ocurre.'
    ),
    tgt(
      'El grupo tomará fotos junto al lago.',
      'The group will take photos by the lake.',
      ['group', 'will', 'take'],
      ['will', 'take', 'photos'],
      'Usar takes in a future plan.',
      'Will marks a future activity.',
      'Las fotos quedan para el recorrido.'
    ),
    ctx(
      'El sendero se ve claro y brillante.',
      'The path looks clear and bright.',
      ['path', 'looks', 'clear'],
      ['path', 'clear', 'bright'],
      'Cerrar sin sensación de salida.',
      'The route should feel ready for travel.',
      'El contexto sostiene la excursión.'
    ),
    tgt(
      'No perderán el punto de encuentro.',
      'They will not miss the meeting point.',
      ['They', 'will', 'not', 'miss'],
      ['will', 'not', 'miss'],
      'Usar do not miss in this lesson.',
      'Will not keeps the verb base.',
      'La negativa asegura el plan.'
    ),
    tgt(
      '¿Lloverá antes del mediodía?',
      'Will it rain before noon?',
      ['Will', 'it', 'rain'],
      ['Will', 'rain', 'noon'],
      'Usar does it rain before noon.',
      'Questions with future simple start with will.',
      'La pregunta revisa el clima futuro.'
    ),
    tgt(
      'Maya empacará ropa abrigada.',
      'Maya will pack warm clothes.',
      ['Maya', 'will', 'pack'],
      ['will', 'pack', 'clothes'],
      'Usar packs instead of will pack.',
      'The decision is still in the future.',
      'La preparación queda lista para el viaje.'
    ),
    ctx(
      'Todos miran el reloj y escuchan.',
      'Everyone watches the clock and listens.',
      ['Everyone', 'watches', 'clock'],
      ['Everyone', 'watches', 'listens'],
      'Cerrar sin sensación de espera.',
      'The scene should feel like a plan about to move.',
      'El contexto mantiene la expectativa.'
    ),
    tgt(
      'El conductor ayudará con las maletas.',
      'The driver will help with the bags.',
      ['driver', 'will', 'help'],
      ['will', 'help', 'bags'],
      'Usar helps instead of will help.',
      'Will keeps the help in the future.',
      'La ayuda todavía no empieza.'
    ),
    tgt(
      'Los estudiantes disfrutarán del viaje.',
      'The students will enjoy the trip.',
      ['students', 'will', 'enjoy'],
      ['will', 'enjoy', 'trip'],
      'Usar enjoys for a future feeling.',
      'Future Simple keeps the verb base.',
      'La experiencia positiva se proyecta hacia adelante.'
    ),
    ctx(
      'Al final, la excursión creará buenos recuerdos.',
      'In the end, the excursion will create good memories.',
      ['excursion', 'will', 'create'],
      ['excursion', 'create', 'memories'],
      'Cerrar sin una idea de resultado futuro.',
      'The ending should show what the plan will produce.',
      'El cierre deja la promesa del recuerdo.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 19.');
