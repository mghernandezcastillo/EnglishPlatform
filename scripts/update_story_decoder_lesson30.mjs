import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[4].lessons[3];
const targetPattern = 'should / ought to / had better + base verb';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['must', 'can', 'could', 'may', 'might'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Should / Ought to / Had better';
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
  { title: 'La fiebre de Nico: Consejo claro', type: 'Descubrimiento', value: 'cuidado' },
  [
    ctx(
      'Nico tiene fiebre y la habitación está en silencio.',
      'Nico has a fever and the room is quiet.',
      ['Nico', 'fever', 'quiet'],
      ['Nico', 'fever', 'quiet'],
      'Perder la idea de consejo y cuidado.',
      'Think about advice that sounds calm and useful.',
      'La historia abre con una escena de cuidado.'
    ),
    tgt(
      'Deberías descansar hoy.',
      'You should rest today.',
      ['You', 'should', 'rest'],
      ['should', 'rest', 'today'],
      'Usar must rest today.',
      'Should gives friendly advice.',
      'El consejo es suave.'
    ),
    tgt(
      'Deberías beber agua.',
      'You ought to drink water.',
      ['You', 'ought', 'to', 'drink'],
      ['ought', 'to', 'drink', 'water'],
      'Usar you should drink water.',
      'Ought to is a more formal way to advise.',
      'La recomendación suena un poco más formal.'
    ),
    tgt(
      'Será mejor que te quedes en casa.',
      'You had better stay home.',
      ['You', 'had', 'better', 'stay'],
      ['had', 'better', 'stay', 'home'],
      'Usar you should stay home.',
      'Had better is a stronger warning or advice.',
      'La advertencia ya es seria.'
    ),
    ctx(
      'La medicina está sobre la mesa y la luz es baja.',
      'The medicine is on the table and the light is low.',
      ['medicine', 'table', 'light'],
      ['medicine', 'table', 'light'],
      'Cerrar sin el tono de cuidado.',
      'The scene should keep the home advice visible.',
      'El contexto sostiene el consejo.'
    ),
    tgt(
      'No deberías saltarte la medicina.',
      'You should not skip the medicine.',
      ['You', 'should', 'not', 'skip'],
      ['should', 'not', 'skip', 'medicine'],
      'Usar must not skip the medicine.',
      'Should not softens the warning.',
      'La advertencia sigue siendo clara.'
    ),
    tgt(
      'Deberíamos llamar al doctor.',
      'We ought to call the doctor.',
      ['We', 'ought', 'to', 'call'],
      ['ought', 'to', 'call', 'doctor'],
      'Usar we should call the doctor.',
      'Ought to works well for advice with a formal tone.',
      'La recomendación apunta a ayuda.'
    ),
    tgt(
      'Deberías dormir temprano.',
      'You had better sleep early.',
      ['You', 'had', 'better', 'sleep'],
      ['had', 'better', 'sleep', 'early'],
      'Usar you should sleep early.',
      'Had better is the strongest advice in this set.',
      'Dormir temprano es lo más prudente.'
    ),
    ctx(
      'La cama está lista y las luces están bajas.',
      'The bed is ready and the lights are low.',
      ['bed', 'ready', 'lights'],
      ['bed', 'lights', 'low'],
      'Cerrar sin sensación de recomendación.',
      'The ending should keep the calm health advice theme.',
      'El contexto mantiene el descanso en foco.'
    ),
    tgt(
      'Nico debería usar calcetines calientes.',
      'Nico should wear warm socks.',
      ['Nico', 'should', 'wear'],
      ['should', 'wear', 'socks'],
      'Usar must wear warm socks.',
      'Should is polite and practical advice.',
      'El consejo apunta al calor.'
    ),
    tgt(
      'Él haría bien en no salir afuera.',
      'He had better not go outside.',
      ['He', 'had', 'better', 'not', 'go'],
      ['had', 'better', 'not', 'go', 'outside'],
      'Usar he should not go outside.',
      'Had better not gives a strong warning.',
      'La salida puede empeorar la situación.'
    ),
    ctx(
      'Al final, la familia entiende que cuidar primero ayuda más.',
      'In the end, the family understands that taking care first helps most.',
      ['family', 'understands', 'taking'],
      ['family', 'helps', 'most'],
      'Cerrar sin una conclusión de consejo.',
      'The ending should show why the advice matters.',
      'El cierre resume el cuidado.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'La cocina y la receta: Buen consejo', type: 'Uso natural', value: 'precisión' },
  [
    ctx(
      'La mesa de la cocina tiene frutas y tazones limpios.',
      'The kitchen table has fruit and clean bowls.',
      ['kitchen', 'table', 'fruit'],
      ['kitchen', 'bowls', 'fruit'],
      'Perder la idea de consejo útil.',
      'Think about practical advice for cooking.',
      'La historia abre con una receta en marcha.'
    ),
    tgt(
      'Deberías cortar la fruta primero.',
      'You should cut the fruit first.',
      ['You', 'should', 'cut'],
      ['should', 'cut', 'fruit'],
      'Usar must cut the fruit first.',
      'Should gives good practical advice.',
      'La preparación empieza con orden.'
    ),
    tgt(
      'Deberíamos usar tazones limpios.',
      'We ought to use clean bowls.',
      ['We', 'ought', 'to', 'use'],
      ['ought', 'to', 'use', 'bowls'],
      'Usar we should use clean bowls.',
      'Ought to fits a careful recommendation.',
      'La limpieza mejora la receta.'
    ),
    tgt(
      'Será mejor que lavemos las manos.',
      'We had better wash our hands.',
      ['We', 'had', 'better', 'wash'],
      ['had', 'better', 'wash', 'hands'],
      'Usar we should wash our hands.',
      'Had better is a stronger warning.',
      'La higiene no se negocia.'
    ),
    ctx(
      'La mesa sigue ordenada y la olla espera.',
      'The table stays tidy and the pot waits.',
      ['table', 'stays', 'tidy'],
      ['table', 'pot', 'waits'],
      'Cerrar sin sensación de receta útil.',
      'The scene should keep the cooking advice visible.',
      'El contexto mantiene la cocina lista.'
    ),
    tgt(
      'No deberías olvidar la sal.',
      'You should not forget the salt.',
      ['You', 'should', 'not', 'forget'],
      ['should', 'not', 'forget', 'salt'],
      'Usar must not forget the salt.',
      'Should not keeps the advice soft.',
      'La sal sigue siendo importante.'
    ),
    tgt(
      'Ella debería mezclar despacio.',
      'She ought to mix slowly.',
      ['She', 'ought', 'to', 'mix'],
      ['ought', 'to', 'mix', 'slowly'],
      'Usar she should mix slowly.',
      'Ought to gives careful advice.',
      'La mezcla necesita paciencia.'
    ),
    tgt(
      'Deberían probar la sopa.',
      'They had better taste the soup.',
      ['They', 'had', 'better', 'taste'],
      ['had', 'better', 'taste', 'soup'],
      'Usar they should taste the soup.',
      'Had better gives stronger advice.',
      'La prueba define si hace falta ajustar.'
    ),
    ctx(
      'La cocina huele cálida y ordenada.',
      'The kitchen smells warm and organized.',
      ['kitchen', 'smells', 'warm'],
      ['kitchen', 'organized', 'warm'],
      'Cerrar sin una pista de receta.',
      'The ending should keep the careful tone of the recipe.',
      'El contexto sostiene el proceso.'
    ),
    tgt(
      'Deberíamos mantener el fuego bajo.',
      'We should keep the fire low.',
      ['We', 'should', 'keep'],
      ['should', 'keep', 'fire'],
      'Usar must keep the fire low.',
      'Should is the normal advice form here.',
      'El fuego bajo evita errores.'
    ),
    tgt(
      'No deberían dejarlo solo.',
      'They had better not leave it alone.',
      ['They', 'had', 'better', 'not', 'leave'],
      ['had', 'better', 'not', 'leave', 'alone'],
      'Usar they should not leave it alone.',
      'Had better not is stronger than should not.',
      'Dejarlo solo puede salir mal.'
    ),
    ctx(
      'Al final, la receta sale mejor cuando siguen el consejo.',
      'In the end, the recipe turns out better when they follow the advice.',
      ['recipe', 'turns', 'better'],
      ['recipe', 'follow', 'advice'],
      'Cerrar sin una conclusión útil.',
      'The ending should show the benefit of advice.',
      'El cierre resume el buen consejo.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La excursión: Advertencias y decisiones', type: 'Integración', value: 'prudencia' },
  [
    ctx(
      'El camino está mojado y el cielo sigue gris.',
      'The road is wet and the sky stays gray.',
      ['road', 'wet', 'sky'],
      ['road', 'wet', 'gray'],
      'Perder la idea de advertencia.',
      'Think about advice that prevents problems.',
      'La historia abre con una ruta complicada.'
    ),
    tgt(
      'Deberías llevar un abrigo.',
      'You should take a coat.',
      ['You', 'should', 'take'],
      ['should', 'take', 'coat'],
      'Usar must take a coat.',
      'Should gives sensible advice.',
      'El abrigo es una buena idea.'
    ),
    tgt(
      'Deberíamos revisar el mapa.',
      'We ought to check the map.',
      ['We', 'ought', 'to', 'check'],
      ['ought', 'to', 'check', 'map'],
      'Usar we should check the map.',
      'Ought to sounds thoughtful and careful.',
      'El mapa evita perderse.'
    ),
    tgt(
      'Será mejor que salgamos ahora.',
      'We had better leave now.',
      ['We', 'had', 'better', 'leave'],
      ['had', 'better', 'leave', 'now'],
      'Usar we should leave now.',
      'Had better adds urgency.',
      'Salir pronto parece lo más seguro.'
    ),
    ctx(
      'El cielo se ve cada vez más oscuro.',
      'The sky looks darker and darker.',
      ['sky', 'looks', 'darker'],
      ['sky', 'darker', 'darker'],
      'Cerrar sin tono de advertencia.',
      'The scene should feel like a strong warning.',
      'El contexto marca el riesgo.'
    ),
    tgt(
      'No deberías caminar cerca del borde.',
      'You should not walk near the edge.',
      ['You', 'should', 'not', 'walk'],
      ['should', 'not', 'walk', 'edge'],
      'Usar must not walk near the edge.',
      'Should not is a careful warning.',
      'La advertencia protege el camino.'
    ),
    tgt(
      'Deberían traer agua.',
      'They ought to bring water.',
      ['They', 'ought', 'to', 'bring'],
      ['ought', 'to', 'bring', 'water'],
      'Usar they should bring water.',
      'Ought to works as useful advice.',
      'El agua ayuda en la salida.'
    ),
    tgt(
      'El conductor haría bien en conducir despacio.',
      'The driver had better drive slowly.',
      ['driver', 'had', 'better', 'drive'],
      ['had', 'better', 'drive', 'slowly'],
      'Usar the driver should drive slowly.',
      'Had better is the strongest recommendation here.',
      'Conducir despacio evita problemas.'
    ),
    ctx(
      'La carretera sigue larga y vacía.',
      'The road stays long and empty.',
      ['road', 'stays', 'long'],
      ['road', 'empty', 'long'],
      'Cerrar sin sensación de precaución.',
      'The ending should keep the warning visible.',
      'El contexto sostiene la prudencia.'
    ),
    tgt(
      'Deberíamos escuchar al guía.',
      'We should listen to the guide.',
      ['We', 'should', 'listen'],
      ['should', 'listen', 'guide'],
      'Usar must listen to the guide.',
      'Should is good advice for the group.',
      'Escuchar al guía es prudente.'
    ),
    tgt(
      'Será mejor que el grupo se quede junto.',
      'The group had better stay together.',
      ['group', 'had', 'better', 'stay'],
      ['had', 'better', 'stay', 'together'],
      'Usar the group should stay together.',
      'Had better warns about keeping close.',
      'El grupo no debe separarse.'
    ),
    ctx(
      'Al final, la excursión sale bien porque siguieron el consejo.',
      'In the end, the trip goes well because they followed the advice.',
      ['trip', 'goes', 'well'],
      ['trip', 'followed', 'advice'],
      'Cerrar sin una conclusión de prudencia.',
      'The ending should show how advice avoided trouble.',
      'El cierre resume la advertencia útil.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 30.');
