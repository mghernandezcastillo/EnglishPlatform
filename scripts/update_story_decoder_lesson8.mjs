import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const lesson = curriculum.blocks[1].lessons[1];
const targetPattern = 'He / She / It + verb-s / verb-es in Present Simple';
const ctxPattern = 'contexto narrativo y repaso acumulativo';
const sharedDistractors = ['can', 'could', 'might', 'must', 'should'];

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
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : 'Present Simple con he/she/it';
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
  { title: 'El jardín del barrio: Rutina de mañana', type: 'Descubrimiento', value: 'constancia' },
  [
    ctx(
      'Maya trabaja en el jardín comunitario cada mañana.',
      'Maya works in the community garden every morning.',
      ['Maya', 'works', 'garden'],
      ['works', 'garden', 'morning'],
      'Traducir la escena sin notar la rutina.',
      'Primero identifica el sujeto singular y la rutina.',
      'La escena abre con una acción habitual en tercera persona singular.'
    ),
    tgt(
      'Maya abre el invernadero a las siete.',
      'Maya opens the greenhouse at seven.',
      ['Maya', 'opens', 'greenhouse'],
      ['opens', 'greenhouse', 'seven'],
      'Olvidar la -s en opens.',
      'Con she / he / it, el verbo suele tomar -s o -es.',
      'La frase fija el presente simple con sujeto singular.'
    ),
    tgt(
      'Ella riega las plantas jóvenes.',
      'She waters the young plants.',
      ['She', 'waters', 'plants'],
      ['waters', 'plants', 'young'],
      'Usar water sin la forma correcta.',
      'With she, the verb changes to the singular form.',
      'La oración refuerza la rutina cotidiana.'
    ),
    tgt(
      'La radio del jardín suena suave.',
      'The garden radio plays softly.',
      ['radio', 'plays', 'softly'],
      ['plays', 'softly', 'garden'],
      'No ajustar plays para un sujeto singular.',
      'The subject is singular, so the verb changes.',
      'El objeto inanimado también practica tercera persona singular.'
    ),
    ctx(
      'Antes del mediodía, revisa el agua y el sol.',
      'Before noon, she checks the water and the sunlight.',
      ['Before', 'noon', 'she', 'checks'],
      ['water', 'sunlight', 'noon'],
      'Perder la idea de revisión.',
      'La escena prepara más ejemplos del mismo patrón.',
      'La historia no cambia de tema; solo amplía la rutina.'
    ),
    tgt(
      'Maya no olvida las semillas nuevas.',
      'Maya does not forget the new seeds.',
      ['Maya', 'does', 'not', 'forget'],
      ['forget', 'seeds', 'new'],
      'Usar forgets después de does not.',
      'After does not, use the base verb.',
      'La negativa mantiene el verbo en forma base.'
    ),
    tgt(
      'Ella no deja la puerta abierta.',
      'She does not leave the door open.',
      ['She', 'does', 'not', 'leave'],
      ['leave', 'door', 'open'],
      'Cambiar leave por leaves después de does not.',
      'With does not, the verb stays base.',
      'La negativa de he / she / it sigue el mismo patrón.'
    ),
    tgt(
      '¿Maya revisa las hojas por la tarde?',
      'Does Maya check the leaves in the afternoon?',
      ['Does', 'Maya', 'check'],
      ['check', 'leaves', 'afternoon'],
      'Usar checks después de does.',
      'Do / Does + subject + base verb.',
      'La pregunta consolida la forma interrogativa.'
    ),
    ctx(
      'El jardín sigue tranquilo y ordenado.',
      'The garden stays calm and tidy.',
      ['garden', 'stays', 'calm'],
      ['garden', 'calm', 'tidy'],
      'Cerrar la escena sin avance.',
      'La historia debe sonar natural y continua.',
      'La narrativa sigue con calma entre ejemplos.'
    ),
    tgt(
      '¿Ella coloca las macetas junto a la ventana?',
      'Does she place the pots by the window?',
      ['Does', 'she', 'place'],
      ['place', 'pots', 'window'],
      'Usar places after does.',
      'After does, keep the base verb.',
      'La pregunta vuelve al orden natural del presente simple.'
    ),
    tgt(
      'Ella no usa herramientas pesadas.',
      'She does not use heavy tools.',
      ['She', 'does', 'not', 'use'],
      ['use', 'tools', 'heavy'],
      'Usar uses after does not.',
      'After does not, the verb is base form.',
      'La negativa mantiene el foco en he / she / it.'
    ),
    ctx(
      'Al final, todo queda listo para la tarde.',
      'In the end, everything is ready for the afternoon.',
      ['everything', 'is', 'ready'],
      ['everything', 'ready', 'afternoon'],
      'Cerrar la escena de forma plana.',
      'El cierre debe sentirse completo y limpio.',
      'El cierre deja una sensación de orden.'
    ),
  ]
);

applyStory(
  lesson.stories[1],
  { title: 'El reloj de la estación: Ritmo exacto', type: 'Uso natural', value: 'precisión' },
  [
    ctx(
      'El reloj grande de la estación marca la mañana.',
      'The large station clock marks the morning.',
      ['clock', 'marks', 'morning'],
      ['clock', 'marks', 'morning'],
      'Traducir la escena demasiado literal.',
      'Primero reconoce el objeto principal.',
      'El reloj permite practicar he / she / it con un sujeto inanimado.'
    ),
    tgt(
      'El reloj suena a las seis.',
      'The clock rings at six.',
      ['clock', 'rings', 'six'],
      ['rings', 'six', 'station'],
      'Usar ring sin -s.',
      'With it, the verb takes -s.',
      'La frase fija la tercera persona singular con it.'
    ),
    tgt(
      'El reloj muestra la hora exacta.',
      'The clock shows the exact time.',
      ['clock', 'shows', 'time'],
      ['shows', 'exact', 'time'],
      'Olvidar la -s en shows.',
      'The subject is singular, so the verb changes.',
      'La oración refuerza el patrón del presente simple.'
    ),
    tgt(
      'La pantalla digital parpadea lentamente.',
      'The digital screen blinks slowly.',
      ['screen', 'blinks', 'slowly'],
      ['blinks', 'slowly', 'digital'],
      'Usar blink sin la forma correcta.',
      'With it, add -s.',
      'También una pantalla funciona como sujeto singular.'
    ),
    ctx(
      'Los viajeros miran el tablero y esperan su tren.',
      'Travelers look at the board and wait for their train.',
      ['travelers', 'look', 'board'],
      ['travelers', 'board', 'train'],
      'Perder la escena del andén.',
      'La rutina del lugar debe sentirse real.',
      'El contexto conecta el reloj con las personas.'
    ),
    tgt(
      'El reloj no se detiene nunca.',
      'The clock does not stop.',
      ['clock', 'does', 'not', 'stop'],
      ['stop', 'clock', 'never'],
      'Usar stops después de does not.',
      'After does not, keep the base verb.',
      'La negativa muestra el patrón con do / does.'
    ),
    tgt(
      '¿El reloj funciona bien cada día?',
      'Does the clock work well every day?',
      ['Does', 'clock', 'work'],
      ['work', 'well', 'day'],
      'Usar works después de does.',
      'After does, keep work in base form.',
      'La pregunta consolida la forma correcta.'
    ),
    tgt(
      'La alarma no molesta demasiado.',
      'The alarm does not bother much.',
      ['alarm', 'does', 'not', 'bother'],
      ['bother', 'much', 'alarm'],
      'Usar bothers después de does not.',
      'With does not, use the base verb.',
      'El sonido del reloj y la alarma comparten el patrón.'
    ),
    ctx(
      'La sala vuelve a quedar en silencio.',
      'The hall becomes quiet again.',
      ['hall', 'becomes', 'quiet'],
      ['hall', 'quiet', 'again'],
      'Cerrar la historia sin transición.',
      'El final debe sentirse como una pausa natural.',
      'La escena se cierra sin cambiar de tema.'
    ),
    tgt(
      'La campana anuncia el cambio.',
      'The bell announces the change.',
      ['bell', 'announces', 'change'],
      ['announces', 'change', 'bell'],
      'Olvidar la -s en announces.',
      'With it, the verb changes to singular.',
      'Otro sujeto singular refuerza el mismo patrón.'
    ),
    tgt(
      '¿La pantalla muestra el horario de la tarde?',
      'Does the screen show the afternoon schedule?',
      ['Does', 'screen', 'show'],
      ['show', 'afternoon', 'schedule'],
      'Usar shows after does.',
      'After does, use the base verb.',
      'La pregunta vuelve al orden interrogativo natural.'
    ),
    ctx(
      'Todo queda en orden para el próximo anuncio.',
      'Everything stays in order for the next announcement.',
      ['Everything', 'stays', 'order'],
      ['everything', 'order', 'announcement'],
      'Cerrar con una frase rígida.',
      'El cierre debe sonar claro y calmado.',
      'El cierre deja la idea de precisión y espera.'
    ),
  ]
);

applyStory(
  lesson.stories[2],
  { title: 'La panadería del centro: Mañana de trabajo', type: 'Integración', value: 'diligencia' },
  [
    ctx(
      'Tomás y Elena empiezan temprano en la panadería.',
      'Tomas and Elena start early at the bakery.',
      ['Tomas', 'Elena', 'start'],
      ['bakery', 'early', 'start'],
      'Traducir la escena con exceso de literalidad.',
      'Primero ubica el oficio y el horario.',
      'La panadería ofrece un entorno diferente para seguir practicando tercera persona singular.'
    ),
    tgt(
      'Tomás mezcla la masa con cuidado.',
      'Tomas mixes the dough carefully.',
      ['Tomas', 'mixes', 'dough'],
      ['mixes', 'dough', 'carefully'],
      'Usar mix sin -es.',
      'With he, the verb takes the singular form.',
      'La frase fija el presente simple con he.'
    ),
    tgt(
      'Él corta el pan en porciones iguales.',
      'He cuts the bread into equal pieces.',
      ['He', 'cuts', 'bread'],
      ['cuts', 'bread', 'pieces'],
      'Olvidar la terminación singular.',
      'With he, the verb changes to singular.',
      'La oración sigue practicando la forma afirmativa.'
    ),
    tgt(
      'La caja registradora funciona bien.',
      'The cash register works well.',
      ['cash register', 'works', 'well'],
      ['works', 'well', 'register'],
      'Usar work sin la forma singular.',
      'With it, add -s.',
      'El sujeto inanimado refuerza he / she / it.'
    ),
    ctx(
      'Antes de abrir, revisan los precios y las bandejas.',
      'Before opening, they check the prices and the trays.',
      ['Before', 'opening', 'check'],
      ['prices', 'trays', 'opening'],
      'Perder el orden de preparación.',
      'La escena debe sentirse como una rutina real.',
      'La historia gana variedad sin alejarse del mismo patrón.'
    ),
    tgt(
      'Tomás no olvida los pedidos especiales.',
      'Tomas does not forget the special orders.',
      ['Tomas', 'does', 'not', 'forget'],
      ['forget', 'orders', 'special'],
      'Usar forgets después de does not.',
      'After does not, use the base verb.',
      'La negativa mantiene el verbo en su forma base.'
    ),
    tgt(
      'Él no abre la puerta trasera sin permiso.',
      'He does not open the back door without permission.',
      ['He', 'does', 'not', 'open'],
      ['open', 'door', 'permission'],
      'Usar opens después de does not.',
      'After does not, the verb stays base.',
      'La negativa añade una regla real de trabajo.'
    ),
    tgt(
      '¿Tomás prepara más pan por la tarde?',
      'Does Tomas prepare more bread in the afternoon?',
      ['Does', 'Tomas', 'prepare'],
      ['prepare', 'bread', 'afternoon'],
      'Usar prepares después de does.',
      'Do / Does + subject + base verb.',
      'La pregunta vuelve a mostrar el orden interrogativo.'
    ),
    ctx(
      'El mostrador queda limpio y listo para el siguiente turno.',
      'The counter stays clean and ready for the next shift.',
      ['counter', 'stays', 'clean'],
      ['counter', 'clean', 'shift'],
      'Cerrar la escena sin sensación de avance.',
      'El final debe sonar útil y completo.',
      'La escena final sostiene la atmósfera de rutina.'
    ),
    tgt(
      'La campana de la puerta suena cuando entra un cliente.',
      'The door bell rings when a customer enters.',
      ['door bell', 'rings', 'customer'],
      ['rings', 'enters', 'customer'],
      'Usar ring sin la forma correcta.',
      'With it, add -s.',
      'El sujeto singular repite el patrón de he / she / it.'
    ),
    tgt(
      '¿La vitrina muestra el pan más fresco?',
      'Does the display show the freshest bread?',
      ['Does', 'display', 'show'],
      ['show', 'freshest', 'bread'],
      'Usar shows after does.',
      'After does, keep the base verb.',
      'La pregunta refuerza la interrogativa con sujeto singular.'
    ),
    ctx(
      'Al final, todo huele a pan recién hecho.',
      'In the end, everything smells like fresh bread.',
      ['everything', 'smells', 'bread'],
      ['everything', 'smells', 'bread'],
      'Cerrar la historia con una frase poco natural.',
      'El cierre debe sentirse cálido y completo.',
      'El final deja una imagen concreta y agradable.'
    ),
  ]
);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log('Updated lesson 8.');
