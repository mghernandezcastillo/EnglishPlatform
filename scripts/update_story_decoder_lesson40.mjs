import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[5].lessons[3];
const targetPattern = 'If + had + past participle, would have + past participle';
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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Third Conditional';
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
  { title: 'La estación perdida: Lo que habría pasado', type: 'Descubrimiento', value: 'puntualidad' },
  [
    ctx(
      'La estación estaba llena de gente al amanecer',
      'The station was full of people at dawn',
      ['station', 'full', 'dawn'],
      ['station', 'full', 'dawn'],
      'Perder el contexto de una mañana apurada',
      'The opening scene should make the missed opportunity feel real',
      'La estación marca el ritmo del error'
    ),
    ctx(
      'Sara miraba el reloj con nervios',
      'Sara watched the clock nervously',
      ['Sara', 'watched', 'clock'],
      ['Sara', 'watched', 'clock'],
      'Ignorar la tensión antes del tren',
      'The clock should signal that time already passed',
      'El reloj recuerda el retraso'
    ),
    ctx(
      'Nico llevaba una mochila pequeña',
      'Nico carried a small backpack',
      ['Nico', 'carried', 'backpack'],
      ['Nico', 'carried', 'backpack'],
      'Hacer la escena demasiado abstracta',
      'The backpack keeps the travel scene concrete',
      'La mochila sugiere viaje'
    ),
    ctx(
      'El tren esperaba en la vía dos',
      'The train was waiting on track two',
      ['train', 'waiting', 'track'],
      ['train', 'waiting', 'track'],
      'Cerrar sin una pista clara del tren',
      'The train should be the main missed event',
      'El tren ya está listo'
    ),
    tgt(
      'Si Sara hubiera salido antes, habría alcanzado el tren',
      'If Sara had left earlier, she would have caught the train',
      ['If', 'Sara', 'had', 'left', 'earlier'],
      ['If', 'Sara', 'had', 'left', 'train'],
      'Usar If Sara left earlier, she would have caught the train',
      'Third Conditional uses had + past participle and would have + past participle',
      'La salida tardía causa la pérdida'
    ),
    tgt(
      'Si hubieran revisado el horario, habrían llegado a tiempo',
      'If they had checked the schedule, they would have arrived on time',
      ['If', 'they', 'had', 'checked', 'the', 'schedule'],
      ['If', 'they', 'had', 'checked', 'schedule', 'arrived'],
      'Usar If they checked the schedule, they would have arrived on time',
      'The condition is in the past perfect because it is unreal in the past',
      'Revisar el horario habría cambiado el final'
    ),
    tgt(
      'Si Nico hubiera empacado la mochila la noche anterior, habría evitado la carrera',
      'If Nico had packed the backpack the night before, he would have avoided the rush',
      ['If', 'Nico', 'had', 'packed', 'the', 'backpack'],
      ['If', 'Nico', 'had', 'packed', 'backpack', 'rush'],
      'Usar If Nico packed the backpack the night before, he would have avoided the rush',
      'The result clause needs would have + past participle',
      'Empacar antes habría quitado el apuro'
    ),
    tgt(
      'Si el taxi hubiera llegado antes, habrían ahorrado tiempo',
      'If the taxi had come sooner, they would have saved time',
      ['If', 'the', 'taxi', 'had', 'come', 'sooner'],
      ['If', 'taxi', 'had', 'come', 'sooner', 'saved'],
      'Usar If the taxi came sooner, they would have saved time',
      'Past perfect in the if-clause marks a missed past chance',
      'El taxi temprano habría ayudado'
    ),
    tgt(
      'Si la puerta hubiera estado abierta, habrían entrado más rápido',
      'If the door had been open, they would have entered faster',
      ['If', 'the', 'door', 'had', 'been', 'open'],
      ['If', 'door', 'had', 'been', 'open', 'entered'],
      'Usar If the door was open, they would have entered faster',
      'Had been keeps the condition clearly in the past',
      'La puerta abierta habría facilitado todo'
    ),
    tgt(
      'Si la lluvia hubiera parado, habrían caminado a la estación',
      'If the rain had stopped, they would have walked to the station',
      ['If', 'the', 'rain', 'had', 'stopped'],
      ['If', 'rain', 'had', 'stopped', 'station'],
      'Usar If the rain stopped, they would have walked to the station',
      'The past perfect clause creates the unreal past condition',
      'La lluvia retenida cambia el viaje'
    ),
    tgt(
      'Si el ticket no se hubiera perdido, Sara habría estado más tranquila',
      'If the ticket had not been lost, Sara would have felt calmer',
      ['If', 'the', 'ticket', 'had', 'not', 'been', 'lost'],
      ['If', 'ticket', 'had', 'not', 'been', 'lost', 'calmer'],
      'Usar If the ticket was not lost, Sara would have felt calmer',
      'Negative third conditional still uses had + past participle',
      'Perder el ticket ya no se puede corregir'
    ),
    tgt(
      'Si el reloj hubiera funcionado, habrían sabido el retraso antes',
      'If the clock had worked, they would have known the delay earlier',
      ['If', 'the', 'clock', 'had', 'worked'],
      ['If', 'clock', 'had', 'worked', 'known'],
      'Usar If the clock worked, they would have known the delay earlier',
      'Third Conditional looks back to an unreal past result',
      'El reloj roto amplifica la confusión'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El proyecto escolar: Lo que no pasó', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'La clase estaba llena de carteles y bocetos',
      'The classroom was full of posters and sketches',
      ['classroom', 'full', 'sketches'],
      ['classroom', 'full', 'sketches'],
      'Perder el entorno escolar',
      'The classroom should set up a past mistake that can be revised mentally',
      'El aula muestra un proyecto en marcha'
    ),
    ctx(
      'Marcos revisaba el archivo en la pantalla',
      'Marcos checked the file on the screen',
      ['Marcos', 'checked', 'file'],
      ['Marcos', 'checked', 'file'],
      'Ignorar el objeto principal del proyecto',
      'The file is the central thing that was handled too late',
      'El archivo concentra el problema'
    ),
    ctx(
      'La profesora esperaba una entrega completa',
      'The teacher expected a complete submission',
      ['teacher', 'expected', 'submission'],
      ['teacher', 'expected', 'submission'],
      'Cerrar sin presión de plazo',
      'The teacher’s expectation should make the regret clear',
      'La entrega completa ya no llegó'
    ),
    ctx(
      'Al fondo, una impresora hacía ruido',
      'In the back, a printer was making noise',
      ['printer', 'making', 'noise'],
      ['printer', 'making', 'noise'],
      'Olvidar el aparato que puede fallar',
      'The printer helps connect the project to a past problem',
      'La impresora suma tensión'
    ),
    tgt(
      'Si el equipo hubiera dividido las tareas, habría terminado antes',
      'If the team had divided the tasks, they would have finished sooner',
      ['If', 'the', 'team', 'had', 'divided', 'the', 'tasks'],
      ['If', 'team', 'had', 'divided', 'tasks', 'finished'],
      'Usar If the team divided the tasks, they would have finished sooner',
      'The if-clause needs past perfect because the opportunity is already gone',
      'Dividir tareas habría ahorrado tiempo'
    ),
    tgt(
      'Si Marcos hubiera guardado el archivo, lo habría enviado ayer',
      'If Marcos had saved the file, he would have sent it yesterday',
      ['If', 'Marcos', 'had', 'saved', 'the', 'file'],
      ['If', 'Marcos', 'had', 'saved', 'file', 'sent'],
      'Usar If Marcos saved the file, he would have sent it yesterday',
      'Saved in the if-clause marks the earlier missed action',
      'Guardar el archivo era la clave'
    ),
    tgt(
      'Si la impresora hubiera funcionado, el póster habría quedado mejor',
      'If the printer had worked, the poster would have looked better',
      ['If', 'the', 'printer', 'had', 'worked'],
      ['If', 'printer', 'had', 'worked', 'poster'],
      'Usar If the printer worked, the poster would have looked better',
      'The result clause uses would have + past participle',
      'La impresora cambió el resultado final'
    ),
    tgt(
      'Si hubieran pedido ayuda, la profesora habría explicado los pasos',
      'If they had asked for help, the teacher would have explained the steps',
      ['If', 'they', 'had', 'asked', 'for', 'help'],
      ['If', 'they', 'had', 'asked', 'help', 'explained'],
      'Usar If they asked for help, the teacher would have explained the steps',
      'Past perfect in the condition makes the situation unreal and finished',
      'Pedir ayuda habría mejorado todo'
    ),
    tgt(
      'Si el grupo hubiera practicado más, habría presentado con confianza',
      'If the group had practiced more, they would have presented with confidence',
      ['If', 'the', 'group', 'had', 'practiced', 'more'],
      ['If', 'group', 'had', 'practiced', 'confidence'],
      'Usar If the group practiced more, they would have presented with confidence',
      'Third Conditional is for a past that cannot be changed',
      'Practicar más habría dado seguridad'
    ),
    tgt(
      'Si Ana hubiera revisado la ortografía, habría evitado errores',
      'If Ana had checked the spelling, she would have avoided mistakes',
      ['If', 'Ana', 'had', 'checked', 'the', 'spelling'],
      ['If', 'Ana', 'had', 'checked', 'spelling', 'avoided'],
      'Usar If Ana checked the spelling, she would have avoided mistakes',
      'The missed review stays in the past perfect clause',
      'La ortografía revisada habría ayudado'
    ),
    tgt(
      'Si la batería hubiera durado más, habrían mostrado el video',
      'If the battery had lasted longer, they would have shown the video',
      ['If', 'the', 'battery', 'had', 'lasted', 'longer'],
      ['If', 'battery', 'had', 'lasted', 'video'],
      'Usar If the battery lasted longer, they would have shown the video',
      'The result depends on a past condition that did not happen',
      'La batería corta arruinó la demostración'
    ),
    tgt(
      'Si la nota hubiera sido clara, todos habrían entendido el plan',
      'If the note had been clear, everyone would have understood the plan',
      ['If', 'the', 'note', 'had', 'been', 'clear'],
      ['If', 'note', 'had', 'been', 'understood'],
      'Usar If the note was clear, everyone would have understood the plan',
      'Had been is common when the unreal condition uses be',
      'La claridad de la nota habría cambiado todo'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La caminata en familia: Lo que habría cambiado', type: 'Integración', value: 'cuidado' },
  [
    ctx(
      'El sendero estaba cubierto de hojas secas',
      'The trail was covered with dry leaves',
      ['trail', 'covered', 'leaves'],
      ['trail', 'covered', 'leaves'],
      'Perder el paisaje natural de la caminata',
      'The trail should feel like a setting where missed choices matter',
      'El sendero prepara la idea de error'
    ),
    ctx(
      'La mochila tenía agua y fruta',
      'The backpack had water and fruit',
      ['backpack', 'water', 'fruit'],
      ['backpack', 'water', 'fruit'],
      'Hacer la escena demasiado vacía',
      'The supplies show what could have helped',
      'La mochila contiene la ayuda'
    ),
    ctx(
      'Los niños corrían cerca de sus padres',
      'The children ran near their parents',
      ['children', 'ran', 'parents'],
      ['children', 'ran', 'parents'],
      'Ignorar el movimiento familiar',
      'The running motion keeps the scene lively',
      'La familia avanza junta'
    ),
    ctx(
      'El cielo se veía gris al mediodía',
      'The sky looked gray at noon',
      ['sky', 'looked', 'gray'],
      ['sky', 'looked', 'gray'],
      'Cerrar sin una señal del clima',
      'The gray sky should suggest possible regret',
      'El cielo gris cambia el ánimo'
    ),
    tgt(
      'Si hubieran tomado el mapa, habrían encontrado el sendero',
      'If they had taken the map, they would have found the trail',
      ['If', 'they', 'had', 'taken', 'the', 'map'],
      ['If', 'they', 'had', 'taken', 'map', 'found'],
      'Usar If they took the map, they would have found the trail',
      'The map is a classic missed help in third conditional',
      'Tomar el mapa habría evitado perderse'
    ),
    tgt(
      'Si el cielo se hubiera despejado, se habrían quedado más tiempo',
      'If the sky had cleared, they would have stayed longer',
      ['If', 'the', 'sky', 'had', 'cleared'],
      ['If', 'sky', 'had', 'cleared', 'stayed'],
      'Usar If the sky cleared, they would have stayed longer',
      'Past perfect in the condition shows a missed possibility',
      'El cielo claro habría extendido la salida'
    ),
    tgt(
      'Si papá hubiera llevado mejores zapatos, habría caminado con más comodidad',
      'If Dad had worn better shoes, he would have walked more comfortably',
      ['If', 'Dad', 'had', 'worn', 'better', 'shoes'],
      ['If', 'Dad', 'had', 'worn', 'shoes', 'walked'],
      'Usar If Dad wore better shoes, he would have walked more comfortably',
      'Worn is part of the past participle required here',
      'Los zapatos correctos habrían ayudado'
    ),
    tgt(
      'Si los niños hubieran traído agua, se habrían sentido mejor',
      'If the children had brought water, they would have felt better',
      ['If', 'the', 'children', 'had', 'brought', 'water'],
      ['If', 'children', 'had', 'brought', 'water', 'felt'],
      'Usar If the children brought water, they would have felt better',
      'The unreal past condition explains the missing comfort',
      'El agua habría cambiado el cansancio'
    ),
    tgt(
      'Si el guía hubiera avisado, habrían evitado el barro',
      'If the guide had warned them, they would have avoided the mud',
      ['If', 'the', 'guide', 'had', 'warned', 'them'],
      ['If', 'guide', 'had', 'warned', 'them', 'avoided'],
      'Usar If the guide warned them, they would have avoided the mud',
      'Third Conditional is strong for regret and missed warning',
      'La advertencia habría evitado el barro'
    ),
    tgt(
      'Si hubieran salido antes, habrían llegado a la colina',
      'If they had started earlier, they would have reached the hill',
      ['If', 'they', 'had', 'started', 'earlier'],
      ['If', 'they', 'had', 'started', 'hill', 'reached'],
      'Usar If they started earlier, they would have reached the hill',
      'The result clause keeps the perfect form after would',
      'Salir antes habría cambiado la ruta'
    ),
    tgt(
      'Si mamá hubiera empacado bocadillos, habrían descansado mejor',
      'If Mom had packed snacks, they would have rested better',
      ['If', 'Mom', 'had', 'packed', 'snacks'],
      ['If', 'Mom', 'had', 'packed', 'snacks', 'rested'],
      'Usar If Mom packed snacks, they would have rested better',
      'Packed in the condition marks the missed preparation',
      'Los bocadillos habrían dado una pausa mejor'
    ),
    tgt(
      'Si el viento hubiera sido más fuerte, se habrían ido antes',
      'If the wind had been stronger, they would have gone home sooner',
      ['If', 'the', 'wind', 'had', 'been', 'stronger'],
      ['If', 'wind', 'had', 'been', 'stronger', 'gone'],
      'Usar If the wind was stronger, they would have gone home sooner',
      'Had been is the correct third conditional form with be',
      'El viento fuerte habría cambiado el regreso'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
