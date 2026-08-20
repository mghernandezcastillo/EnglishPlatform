import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[3].lessons[5];
const targetPattern = 'will have + past participle by a future time';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['will', 'be', 'going', 'to', 'did'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Future Perfect';
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
  { title: 'El jardín del barrio: Todo listo para el viernes', type: 'Descubrimiento', value: 'constancia' },
  [
    ctx(
      'Para el viernes, el jardín ya tendrá mucha mejor forma.',
      'By Friday, the garden will already be in much better shape.',
      ['Friday', 'garden', 'already'],
      ['Friday', 'garden', 'shape'],
      'Perder la idea de algo completado antes de un punto futuro.',
      'Think about a deadline where the result will already exist.',
      'La historia abre con un resultado esperado.'
    ),
    tgt(
      'Para entonces, el equipo habrá terminado la cerca.',
      'By then, the team will have finished the fence.',
      ['By', 'then', 'will', 'have', 'finished'],
      ['will', 'have', 'finished', 'fence'],
      'Usar will finish the fence by then.',
      'Future Perfect uses will have + participle.',
      'La cerca quedará completa antes del momento futuro.'
    ),
    tgt(
      'Habrán plantado las semillas antes del lunes.',
      'They will have planted the seeds before Monday.',
      ['They', 'will', 'have', 'planted'],
      ['will', 'have', 'planted', 'seeds'],
      'Usar will plant the seeds before Monday.',
      'The action is complete before the future deadline.',
      'La siembra estará acabada.'
    ),
    tgt(
      'La lluvia habrá regado todo el suelo.',
      'The rain will have watered the whole ground.',
      ['rain', 'will', 'have', 'watered'],
      ['will', 'have', 'watered', 'ground'],
      'Usar will water the whole ground.',
      'The result is completed by the future time.',
      'El suelo ya habrá recibido el agua.'
    ),
    ctx(
      'Las plantas ya mostrarán señales de crecimiento.',
      'The plants will already show signs of growth.',
      ['plants', 'already', 'show'],
      ['plants', 'show', 'growth'],
      'Cerrar sin un resultado final.',
      'The scene should show completed progress by the deadline.',
      'El contexto deja ver el cambio logrado.'
    ),
    tgt(
      'No habrán olvidado el cartel.',
      'They will not have forgotten the sign.',
      ['They', 'will', 'not', 'have', 'forgotten'],
      ['will', 'not', 'have', 'forgotten'],
      'Usar will not forget the sign.',
      'Negative future perfect keeps the participle after have.',
      'La negativa deja claro el resultado esperado.'
    ),
    tgt(
      '¿Habrán revisado la lista antes de salir?',
      'Will they have checked the list before leaving?',
      ['Will', 'they', 'have', 'checked'],
      ['Will', 'have', 'checked', 'list'],
      'Usar will they check the list before leaving.',
      'Questions with future perfect use will have + participle.',
      'La pregunta revisa una tarea ya completada.'
    ),
    tgt(
      'El grupo habrá enviado el informe.',
      'The group will have sent the report.',
      ['group', 'will', 'have', 'sent'],
      ['will', 'have', 'sent', 'report'],
      'Usar will send the report.',
      'The sending will be done before the chosen time.',
      'El informe ya estará listo.'
    ),
    ctx(
      'La mesa seguirá limpia y ordenada para la visita.',
      'The table will stay clean and organized for the visit.',
      ['table', 'will', 'stay', 'clean'],
      ['table', 'stay', 'organized'],
      'Cerrar sin sensación de meta cumplida.',
      'The background should show a finished state.',
      'El contexto sostiene el resultado final.'
    ),
    tgt(
      'Maya habrá elegido los colores correctos.',
      'Maya will have chosen the correct colors.',
      ['Maya', 'will', 'have', 'chosen'],
      ['will', 'have', 'chosen', 'colors'],
      'Usar will choose the correct colors.',
      'Chosen is the participle form after will have.',
      'La selección estará completa.'
    ),
    tgt(
      'La maestra habrá corregido todos los borradores.',
      'The teacher will have corrected all the drafts.',
      ['teacher', 'will', 'have', 'corrected'],
      ['will', 'have', 'corrected', 'drafts'],
      'Usar will correct all the drafts.',
      'The correction is completed before the deadline.',
      'Los borradores ya estarán listos.'
    ),
    ctx(
      'Al final, el jardín mostrará el resultado del trabajo previo.',
      'In the end, the garden will show the result of the earlier work.',
      ['garden', 'show', 'result'],
      ['garden', 'result', 'work'],
      'Cerrar sin relación con el punto futuro.',
      'The ending should point to a result already completed later.',
      'El cierre resume la meta alcanzada.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El proyecto escolar: Entrega antes de tiempo', type: 'Uso natural', value: 'responsabilidad' },
  [
    ctx(
      'Para el jueves, el proyecto ya se verá más claro.',
      'By Thursday, the project will already look clearer.',
      ['Thursday', 'project', 'already'],
      ['Thursday', 'project', 'clearer'],
      'Perder la idea de entrega anterior a una fecha.',
      'Think about what will be finished before the deadline.',
      'La historia abre con una meta cercana.'
    ),
    tgt(
      'El equipo habrá construido el modelo.',
      'The team will have built the model.',
      ['team', 'will', 'have', 'built'],
      ['will', 'have', 'built', 'model'],
      'Usar will build the model.',
      'The building will already be complete.',
      'El modelo quedará terminado.'
    ),
    tgt(
      'Ana habrá escrito las etiquetas.',
      'Ana will have written the labels.',
      ['Ana', 'will', 'have', 'written'],
      ['will', 'have', 'written', 'labels'],
      'Usar will write the labels.',
      'The writing will already be done by then.',
      'Las etiquetas ya estarán listas.'
    ),
    tgt(
      'Los compañeros habrán pegado las fotos.',
      'The classmates will have pasted the photos.',
      ['classmates', 'will', 'have', 'pasted'],
      ['will', 'have', 'pasted', 'photos'],
      'Usar will paste the photos.',
      'The pasting is completed before the deadline.',
      'Las fotos ya estarán colocadas.'
    ),
    ctx(
      'El mural seguirá limpio y brillante para la muestra.',
      'The mural will stay clean and bright for the display.',
      ['mural', 'will', 'stay', 'clean'],
      ['mural', 'bright', 'display'],
      'Cerrar sin resultado visible.',
      'The background should show the completed effect.',
      'El contexto deja ver el progreso acabado.'
    ),
    tgt(
      'No habrán perdido ninguna hoja.',
      'They will not have lost any sheet.',
      ['They', 'will', 'not', 'have', 'lost'],
      ['will', 'not', 'have', 'lost'],
      'Usar will not lose any sheet.',
      'The negative form keeps the future completion idea.',
      'La negativa protege el trabajo hecho.'
    ),
    tgt(
      '¿Habrán terminado antes de la entrega?',
      'Will they have finished before the hand in?',
      ['Will', 'they', 'have', 'finished'],
      ['Will', 'have', 'finished', 'hand'],
      'Usar will they finish before the hand in.',
      'The question checks completion before a future time.',
      'La pregunta verifica el cierre del proyecto.'
    ),
    tgt(
      'La maestra habrá recibido todo a tiempo.',
      'The teacher will have received everything on time.',
      ['teacher', 'will', 'have', 'received'],
      ['will', 'have', 'received', 'everything'],
      'Usar will receive everything on time.',
      'The receiving is completed by the future point.',
      'La entrega ya habrá llegado.'
    ),
    ctx(
      'La carpeta quedará lista sobre la mesa.',
      'The folder will be ready on the table.',
      ['folder', 'will', 'be', 'ready'],
      ['folder', 'ready', 'table'],
      'Cerrar sin sensación de cierre de tarea.',
      'The scene should show a finished product.',
      'El contexto mantiene el resultado visible.'
    ),
    tgt(
      'Maya habrá corregido los errores pequeños.',
      'Maya will have corrected the small mistakes.',
      ['Maya', 'will', 'have', 'corrected'],
      ['will', 'have', 'corrected', 'mistakes'],
      'Usar will correct the small mistakes.',
      'The correction happens before the time marker.',
      'La revisión ya estará hecha.'
    ),
    tgt(
      'El grupo habrá practicado la presentación.',
      'The group will have practiced the presentation.',
      ['group', 'will', 'have', 'practiced'],
      ['will', 'have', 'practiced', 'presentation'],
      'Usar will practice the presentation.',
      'The practice is finished by that point.',
      'La práctica ya habrá dado fruto.'
    ),
    ctx(
      'Al final, el salón mostrará un trabajo terminado y ordenado.',
      'In the end, the room will show finished and tidy work.',
      ['room', 'show', 'finished'],
      ['room', 'finished', 'tidy'],
      'Cerrar sin un estado final claro.',
      'The ending should point to completion before the deadline.',
      'El cierre deja el proyecto resuelto.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La pequeña panadería: Todo listo antes del mediodía', type: 'Integración', value: 'trabajo diligente' },
  [
    ctx(
      'Para el mediodía, la panadería ya estará tranquila.',
      'By noon, the bakery will already be calm.',
      ['noon', 'bakery', 'already'],
      ['noon', 'bakery', 'calm'],
      'Perder la idea de resultado antes de una hora futura.',
      'Look for work that will already be done.',
      'La historia abre con una meta alcanzada.'
    ),
    tgt(
      'Luis habrá amasado toda la masa.',
      'Luis will have kneaded all the dough.',
      ['Luis', 'will', 'have', 'kneaded'],
      ['will', 'have', 'kneaded', 'dough'],
      'Usar will knead all the dough.',
      'The kneading is already complete by then.',
      'La masa quedará lista.'
    ),
    tgt(
      'La ayudante habrá limpiado las mesas.',
      'The helper will have cleaned the tables.',
      ['helper', 'will', 'have', 'cleaned'],
      ['will', 'have', 'cleaned', 'tables'],
      'Usar will clean the tables.',
      'The cleaning is completed before the target time.',
      'Las mesas ya estarán limpias.'
    ),
    tgt(
      'Ellos habrán colocado el pan en las bandejas.',
      'They will have placed the bread on the trays.',
      ['They', 'will', 'have', 'placed'],
      ['will', 'have', 'placed', 'bread'],
      'Usar will place the bread on the trays.',
      'The placement is finished before noon.',
      'El pan ya estará ordenado.'
    ),
    ctx(
      'Las bandejas se verán llenas y listas.',
      'The trays will look full and ready.',
      ['trays', 'will', 'look', 'ready'],
      ['trays', 'full', 'ready'],
      'Cerrar sin un resultado tangible.',
      'The scene should show the result of completed work.',
      'El contexto deja ver el esfuerzo terminado.'
    ),
    tgt(
      'No habrán dejado harina en el suelo.',
      'They will not have left flour on the floor.',
      ['They', 'will', 'not', 'have', 'left'],
      ['will', 'not', 'have', 'left'],
      'Usar will not leave flour on the floor.',
      'The floor is clean by the future point.',
      'La negativa muestra el orden final.'
    ),
    tgt(
      '¿Habrán preparado más pan para las once?',
      'Will they have prepared more bread by eleven?',
      ['Will', 'they', 'have', 'prepared'],
      ['Will', 'have', 'prepared', 'bread'],
      'Usar will they prepare more bread by eleven.',
      'The question checks completion before a time mark.',
      'La pregunta revisa la producción.'
    ),
    tgt(
      'La panadera habrá horneado los bollos.',
      'The baker will have baked the rolls.',
      ['baker', 'will', 'have', 'baked'],
      ['will', 'have', 'baked', 'rolls'],
      'Usar will bake the rolls.',
      'The baking will already be complete.',
      'Los bollos quedarán hechos.'
    ),
    ctx(
      'El olor a pan llenará la tienda con calma.',
      'The smell of bread will fill the shop calmly.',
      ['smell', 'bread', 'shop'],
      ['smell', 'bread', 'calmly'],
      'Cerrar sin sensación de trabajo hecho.',
      'The ending should show the finished result in the room.',
      'El contexto mantiene el ambiente de pan recién hecho.'
    ),
    tgt(
      'Maya habrá servido el café para entonces.',
      'Maya will have served the coffee by then.',
      ['Maya', 'will', 'have', 'served'],
      ['will', 'have', 'served', 'coffee'],
      'Usar will serve the coffee by then.',
      'The serving is already completed at that point.',
      'El café ya estará listo.'
    ),
    tgt(
      'El equipo habrá cerrado la caja.',
      'The team will have closed the register.',
      ['team', 'will', 'have', 'closed'],
      ['will', 'have', 'closed', 'register'],
      'Usar will close the register.',
      'The closing is completed before the deadline.',
      'La caja ya estará cerrada.'
    ),
    ctx(
      'Al final, la panadería mostrará una mañana muy productiva.',
      'In the end, the bakery will show a very productive morning.',
      ['bakery', 'show', 'productive'],
      ['bakery', 'morning', 'productive'],
      'Cerrar sin resultado visible.',
      'The ending should show the result of finished work.',
      'El cierre resume un trabajo completo.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 24.');
