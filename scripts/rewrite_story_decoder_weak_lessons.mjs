import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve('public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));

const stopwords = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'if', 'when', 'while', 'to', 'of', 'in', 'on', 'at', 'for', 'with',
  'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'that', 'this', 'these', 'those',
  'it', 'they', 'he', 'she', 'we', 'you', 'i', 'me', 'my', 'your', 'our', 'their', 'his', 'her', 'its',
  'not', 'no', 'from', 'by', 'into', 'over', 'under', 'before', 'after', 'again', 'more', 'most', 'less',
  'there', 'here', 'now', 'then', 'so', 'too', 'very', 'just', 'still', 'already'
]);

function lower(value) {
  return String(value || '').toLocaleLowerCase('en-US').replace(/[\u2019]/g, "'");
}

function autoTokens(value, limit = 5) {
  const raw = String(value || '')
    .replace(/[^A-Za-zÀ-ÿ0-9' ]/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean)
    .filter((token) => !stopwords.has(token.toLowerCase()));

  const seen = new Set();
  const tokens = [];
  for (const token of raw) {
    const key = token.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    tokens.push(token);
    if (tokens.length >= limit) break;
  }
  return tokens;
}

function patchStory(story, meta, lines) {
  story.title = meta.title;
  story.type = meta.type;
  story.value = meta.value;
  lines.forEach((spec, index) => {
    const line = story.lines[index];
    line.line_role = spec.role;
    line.es = spec.es;
    line.en = spec.en;
    line.preferred_answer = spec.en;
    line.accepted_answers = [spec.en];
    line.lesson_target = meta.lessonTarget;
    line.grammar_focus = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : meta.lessonTarget;
    line.pattern = spec.role === 'context' ? 'contexto narrativo y repaso acumulativo' : meta.pattern;
    line.focus_tokens = autoTokens(spec.en, 5);
    line.vocabulary_candidates = autoTokens(spec.en, 5);
    line.common_errors = spec.role === 'context'
      ? ['Hacer la escena demasiado parecida a la historia anterior.']
      : ['Ordenar la frase como en español en vez de seguir el orden natural del inglés.'];
    line.hints = spec.role === 'context'
      ? ['La escena debe sonar real y distinta de las otras historias.']
      : [`Piensa en la estructura de ${meta.lessonTarget.toLowerCase()} dentro de esta escena.`];
    line.tutor_explanation = spec.role === 'context'
      ? 'Esta línea sostiene la escena sin repetir la idea de las otras historias.'
      : `Esta frase practica ${meta.lessonTarget} con una escena nueva y clara.`;
  });
}

const lesson1 = curriculum.blocks[0].lessons.find((lesson) => lesson.lesson_id === 1);
patchStory(
  lesson1.stories[0],
  { title: 'La bicicleta de Sara: Taller en marcha', type: 'Descubrimiento', value: 'orden', lessonTarget: lesson1.topic, pattern: 'Subject + Verb + Complement' },
  [
    { role: 'context', es: 'Sara y Nico arreglan una bicicleta en el taller.', en: 'Sara and Nico fix a bike in the workshop.' },
    { role: 'target', es: 'Sara ordena las herramientas por color.', en: 'Sara sorts the tools by color.' },
    { role: 'target', es: 'Nico lleva la caja a la mesa.', en: 'Nico carries the box to the table.' },
    { role: 'target', es: 'El mecánico revisa la cadena.', en: 'The mechanic checks the chain.' },
    { role: 'context', es: 'La mesa está llena, pero el plan sigue claro.', en: 'The table is full, but the plan stays clear.' },
    { role: 'target', es: 'Sara escribe una lista corta.', en: 'Sara writes a short list.' },
    { role: 'target', es: 'Nico abre el kit de reparación.', en: 'Nico opens the repair kit.' },
    { role: 'target', es: 'El equipo mantiene el lugar limpio.', en: 'The team keeps the place clean.' },
    { role: 'context', es: 'La bici todavía necesita cuidado.', en: 'The bike still needs care.' },
    { role: 'target', es: 'Sara aprieta la rueda delantera.', en: 'Sara tightens the front wheel.' },
    { role: 'target', es: 'Nico prueba los frenos.', en: 'Nico tests the brakes.' },
    { role: 'context', es: 'Al final, el taller queda listo.', en: 'In the end, the workshop feels ready.' }
  ]
);
patchStory(
  lesson1.stories[1],
  { title: 'La huerta del cole: Tareas simples', type: 'Uso natural', value: 'rutina', lessonTarget: lesson1.topic, pattern: 'Subject + Verb + Complement' },
  [
    { role: 'context', es: 'Sofía y David trabajan en la huerta del colegio.', en: 'Sofia and David work in the school garden.' },
    { role: 'target', es: 'Sofía riega las semillas cada mañana.', en: 'Sofia waters the seeds every morning.' },
    { role: 'target', es: 'David etiqueta las cajas de plantas.', en: 'David labels the plant boxes.' },
    { role: 'target', es: 'El equipo mueve la tierra con cuidado.', en: 'The team moves the soil carefully.' },
    { role: 'context', es: 'Luego hacen una pausa corta.', en: 'Then they take a short break.' },
    { role: 'target', es: 'Sofía escribe una lista sencilla.', en: 'Sofia writes a simple list.' },
    { role: 'target', es: 'David lleva el balde de agua.', en: 'David carries the water bucket.' },
    { role: 'target', es: 'Todos protegen las plantas pequeñas.', en: 'Everyone protects the small plants.' },
    { role: 'context', es: 'La huerta sigue tranquila y ordenada.', en: 'The garden stays quiet and tidy.' },
    { role: 'target', es: 'Sofía revisa los nuevos brotes.', en: 'Sofia checks the new sprouts.' },
    { role: 'target', es: 'David limpia el camino.', en: 'David cleans the path.' },
    { role: 'context', es: 'Al final, las plantas se ven vivas.', en: 'In the end, the plants look alive.' }
  ]
);
patchStory(
  lesson1.stories[2],
  { title: 'El picnic de domingo: Todo listo', type: 'Integración', value: 'simpleza', lessonTarget: lesson1.topic, pattern: 'Subject + Verb + Complement' },
  [
    { role: 'context', es: 'Maya y Leo preparan un picnic cerca del parque.', en: 'Maya and Leo prepare a picnic near the park.' },
    { role: 'target', es: 'Maya guarda los platos en una bolsa.', en: 'Maya packs the plates in a bag.' },
    { role: 'target', es: 'Leo trae el jugo y la fruta.', en: 'Leo brings the juice and fruit.' },
    { role: 'target', es: 'La familia comparte una manta grande.', en: 'The family shares one big blanket.' },
    { role: 'context', es: 'La mañana se siente tranquila.', en: 'The morning feels calm.' },
    { role: 'target', es: 'Maya dobla el mapa.', en: 'Maya folds the map.' },
    { role: 'target', es: 'Leo abre la canasta.', en: 'Leo opens the basket.' },
    { role: 'target', es: 'El grupo mantiene la comida fresca.', en: 'The group keeps the food fresh.' },
    { role: 'context', es: 'El sol sigue cálido.', en: 'The sun stays warm.' },
    { role: 'target', es: 'Maya acomoda los vasos.', en: 'Maya arranges the cups.' },
    { role: 'target', es: 'Leo cuenta los sándwiches.', en: 'Leo counts the sandwiches.' },
    { role: 'context', es: 'Al final, todo queda simple y alegre.', en: 'In the end, everything feels simple and cheerful.' }
  ]
);

const lesson75 = curriculum.blocks[9].lessons.find((lesson) => lesson.lesson_id === 75);
patchStory(
  lesson75.stories[0],
  { title: 'La oficina central: Peticiones con tacto', type: 'Descubrimiento', value: 'claridad', lessonTarget: lesson75.topic, pattern: 'Could / Would + polite request' },
  [
    { role: 'context', es: 'En la oficina central, el equipo prepara los archivos de la mañana.', en: 'At the central office, the team prepares the morning files.' },
    { role: 'target', es: '¿Podrías ayudarme a llevar estas carpetas, por favor?', en: 'Could you help me carry these folders, please?' },
    { role: 'target', es: '¿Te importaría abrir la ventana?', en: 'Would you mind opening the window?' },
    { role: 'target', es: '¿Podrías revisar esta lista por mí?', en: 'Could you check this list for me?' },
    { role: 'context', es: 'El escritorio está lleno, pero todos se mantienen calmados.', en: 'The desk is crowded, but everyone stays calm.' },
    { role: 'target', es: 'Me preguntaba si podrías imprimir este formulario.', en: 'I was wondering if you could print this form.' },
    { role: 'target', es: '¿Podrías decirme dónde debo firmar?', en: 'Could you tell me where I should sign?' },
    { role: 'target', es: '¿Te importaría hablar un poco más bajo?', en: 'Would you mind speaking a little more softly?' },
    { role: 'context', es: 'La reunión empieza pronto.', en: 'The meeting starts soon.' },
    { role: 'target', es: '¿Podrías explicarme el siguiente paso?', en: 'Could you explain the next step to me?' },
    { role: 'target', es: '¿Sería posible cambiar la hora de la cita?', en: 'Would it be possible to change the appointment time?' },
    { role: 'context', es: 'Al final, la oficina mantiene un tono amable.', en: 'In the end, the office keeps a polite tone.' }
  ]
);
patchStory(
  lesson75.stories[1],
  { title: 'El museo de la calle 8: Preguntas formales', type: 'Uso natural', value: 'respeto', lessonTarget: lesson75.topic, pattern: 'Could / Would + polite request' },
  [
    { role: 'context', es: 'En el museo, los visitantes esperan indicaciones.', en: 'At the museum, the visitors wait for guidance.' },
    { role: 'target', es: '¿Podrías ayudarme a mover estos carteles, por favor?', en: 'Could you help me move these posters, please?' },
    { role: 'target', es: '¿Te importaría cerrar el gabinete?', en: 'Would you mind locking the cabinet?' },
    { role: 'target', es: '¿Podrías revisar este horario?', en: 'Could you review this schedule?' },
    { role: 'context', es: 'El archivista mantiene la sala en silencio.', en: 'The archivist keeps the room quiet.' },
    { role: 'target', es: 'Me preguntaba si podrías enviar este correo hoy.', en: 'I was wondering if you could send this email today.' },
    { role: 'target', es: '¿Podrías decirme dónde debo dejar el paquete?', en: 'Could you tell me where I should leave the package?' },
    { role: 'target', es: '¿Te importaría esperar un momento?', en: 'Would you mind waiting a moment?' },
    { role: 'context', es: 'Las luces se mantienen bajas.', en: 'The lights stay low.' },
    { role: 'target', es: '¿Podrías explicar cómo funciona el sistema?', en: 'Could you explain how the system works?' },
    { role: 'target', es: '¿Sería posible reunirnos mañana por la mañana?', en: 'Would it be possible to meet tomorrow morning?' },
    { role: 'context', es: 'Al final, la visita se siente respetuosa.', en: 'In the end, the visit feels respectful.' }
  ]
);
patchStory(
  lesson75.stories[2],
  { title: 'La estación del barrio: Ayuda respetuosa', type: 'Integración', value: 'fluidez', lessonTarget: lesson75.topic, pattern: 'Could / Would + polite request' },
  [
    { role: 'context', es: 'En la estación, el personal prepara una tarde ocupada.', en: 'At the station, the staff prepares for a busy afternoon.' },
    { role: 'target', es: '¿Podrías ayudarme a llevar estos libros, por favor?', en: 'Could you help me carry these books, please?' },
    { role: 'target', es: '¿Te importaría bajar la música?', en: 'Would you mind turning down the music?' },
    { role: 'target', es: '¿Podrías responder una pregunta rápida?', en: 'Could you answer one quick question?' },
    { role: 'context', es: 'Los viajeros se mueven rápido por el hall.', en: 'Travelers move quickly through the hall.' },
    { role: 'target', es: 'Me preguntaba si podrías mostrarme el camino.', en: 'I was wondering if you could show me the way.' },
    { role: 'target', es: '¿Podrías decirme dónde debo esperar?', en: 'Could you tell me where I should stand?' },
    { role: 'target', es: '¿Te importaría escribir tu nombre aquí?', en: 'Would you mind writing your name here?' },
    { role: 'context', es: 'El anuncio del andén está por sonar.', en: 'The platform announcement is about to sound.' },
    { role: 'target', es: '¿Podrías explicarle el siguiente paso?', en: 'Could you explain the next step to her?' },
    { role: 'target', es: '¿Sería posible reprogramar la reunión?', en: 'Would it be possible to reschedule the meeting?' },
    { role: 'context', es: 'Al final, todos se mantienen corteses.', en: 'In the end, everyone stays courteous.' }
  ]
);

const lesson80 = curriculum.blocks[10].lessons.find((lesson) => lesson.lesson_id === 80);
patchStory(
  lesson80.stories[0],
  { title: 'El jardín final: Todo en su lugar', type: 'Boss Battle', value: 'maestría', lessonTarget: lesson80.topic, pattern: 'Mixed structures for integration' },
  [
    { role: 'context', es: 'En el jardín comunitario, Marta revisa el horario antes del amanecer.', en: 'In the community garden, Marta checks the schedule before sunrise.' },
    { role: 'target', es: 'Ella trabaja allí cada semana, pero hoy prepara una demostración especial.', en: 'She works there every week, but today she is preparing a special demo.' },
    { role: 'target', es: 'Para el mediodía, habrá terminado las camas y las etiquetas.', en: 'By noon, she will have finished the beds and the labels.' },
    { role: 'target', es: 'Ayer, Daniel llegó mientras ella regaba las plántulas.', en: 'Yesterday, Daniel arrived while she was watering the seedlings.' },
    { role: 'context', es: 'El equipo habla de lo que ya había aprendido.', en: 'The team talks about what they had already learned.' },
    { role: 'target', es: 'Si siguen el plan, terminarán a tiempo.', en: 'If they follow the plan, they will finish on time.' },
    { role: 'target', es: 'El informe debe revisarse antes de la visita.', en: 'The report must be reviewed before the visit.' },
    { role: 'target', es: 'Cuando preguntaron dónde estaban las herramientas, ella dijo que ya habían sido guardadas.', en: 'When they asked where the tools were, she said they had already been stored.' },
    { role: 'context', es: 'El jardín está listo para la clase grande.', en: 'The garden is ready for the big class.' },
    { role: 'target', es: 'Ella ha estado trabajando desde temprano en la mañana.', en: 'She has been working since early morning.' },
    { role: 'target', es: 'Los ayudantes están colocando los letreros ahora.', en: 'The helpers are setting up the signs now.' },
    { role: 'context', es: 'Al final, todo el equipo ve cada estructura en acción.', en: 'In the end, the whole team sees every structure in action.' }
  ]
);
patchStory(
  lesson80.stories[1],
  { title: 'La escuela final: Examen completo', type: 'Boss Battle', value: 'precisión', lessonTarget: lesson80.topic, pattern: 'Mixed structures for integration' },
  [
    { role: 'context', es: 'En la escuela, Lucas revisa la maqueta antes de abrir las puertas.', en: 'At school, Lucas checks the model table before the doors open.' },
    { role: 'target', es: 'Él trabaja allí cada semestre, pero hoy dirige el ensayo final.', en: 'He works there every semester, but today he is leading the final rehearsal.' },
    { role: 'target', es: 'Para el viernes, la clase habrá terminado la exposición y el discurso.', en: 'By Friday, the class will have finished the display and the speech.' },
    { role: 'target', es: 'Ayer, Sofía llegó mientras él resolvía un problema.', en: 'Yesterday, Sofía arrived while he was solving a problem.' },
    { role: 'context', es: 'Los estudiantes hablan de lo que ya habían preparado.', en: 'The students talk about what they had already prepared.' },
    { role: 'target', es: 'Si siguen el plan, presentarán todo con claridad.', en: 'If they follow the plan, they will present everything clearly.' },
    { role: 'target', es: 'El póster debe revisarse antes de que lleguen los jueces.', en: 'The poster must be checked before the judges arrive.' },
    { role: 'target', es: 'Cuando preguntaron dónde estaban los micrófonos, él dijo que ya habían sido probados.', en: 'When they asked where the microphones were, he said they had already been tested.' },
    { role: 'context', es: 'El salón se ve brillante y ordenado.', en: 'The hall feels bright and organized.' },
    { role: 'target', es: 'Él ha estado practicando desde el amanecer.', en: 'He has been practicing since sunrise.' },
    { role: 'target', es: 'El equipo está acomodando las etiquetas finales ahora.', en: 'The team is arranging the final labels now.' },
    { role: 'context', es: 'Al final, la expo muestra cada estructura funcionando junta.', en: 'In the end, the expo shows every structure working together.' }
  ]
);
patchStory(
  lesson80.stories[2],
  { title: 'La panadería final: Último repaso', type: 'Boss Battle', value: 'cierre', lessonTarget: lesson80.topic, pattern: 'Mixed structures for integration' },
  [
    { role: 'context', es: 'En la panadería, Elena revisa el horno antes de abrir.', en: 'In the bakery, Elena checks the oven before opening.' },
    { role: 'target', es: 'Ella trabaja allí cada semana, pero hoy prepara un pedido especial.', en: 'She works there every week, but today she is preparing a special order.' },
    { role: 'target', es: 'Para el sábado, habrá terminado los pasteles y las cajas.', en: 'By Saturday, she will have finished the cakes and the boxes.' },
    { role: 'target', es: 'Ayer, Tomás llegó mientras ella decoraba una bandeja.', en: 'Yesterday, Tomás arrived while she was decorating a tray.' },
    { role: 'context', es: 'Hablan de lo que ya habían horneado.', en: 'They talk about what they had already baked.' },
    { role: 'target', es: 'Si siguen el plan, servirán a todos a tiempo.', en: 'If they follow the plan, they will serve everyone on time.' },
    { role: 'target', es: 'El menú debe revisarse antes de que lleguen los invitados.', en: 'The menu must be reviewed before the guests arrive.' },
    { role: 'target', es: 'Cuando preguntaron dónde estaban los cupones, ella dijo que ya habían sido impresos.', en: 'When they asked where the coupons were, she said they had already been printed.' },
    { role: 'context', es: 'La panadería se siente ocupada pero tranquila.', en: 'The bakery feels busy but calm.' },
    { role: 'target', es: 'Ella ha estado trabajando desde el amanecer.', en: 'She has been working since dawn.' },
    { role: 'target', es: 'Los ayudantes están empaquetando las bolsas ahora.', en: 'The assistants are packing the bags now.' },
    { role: 'context', es: 'Al final, la tienda cierra con cada estructura en su lugar.', en: 'In the end, the shop closes with every structure in place.' }
  ]
);

const lesson74 = curriculum.blocks[9].lessons.find((lesson) => lesson.lesson_id === 74);
patchStory(
  lesson74.stories[0],
  { title: 'El aeropuerto: Dudas en la puerta de embarque', type: 'Descubrimiento', value: 'claridad', lessonTarget: lesson74.topic, pattern: 'Indirect questions with where / when / how' },
  [
    { role: 'context', es: 'En el aeropuerto, la fila avanza despacio.', en: 'At the airport, the line moves slowly.' },
    { role: 'target', es: 'Marta pregunta dónde está la puerta de embarque.', en: 'Marta asks where the boarding gate is.' },
    { role: 'target', es: 'Diego quiere saber cuándo sale el próximo vuelo.', en: 'Diego wants to know when the next flight leaves.' },
    { role: 'target', es: 'La agente no recuerda qué terminal usa la aerolínea.', en: 'The agent does not remember which terminal the airline uses.' },
    { role: 'context', es: 'Todos miran el tablero con atención.', en: 'Everyone watches the board carefully.' },
    { role: 'target', es: 'Ana pregunta cómo funciona la máquina de boletos.', en: 'Ana asks how the ticket machine works.' },
    { role: 'target', es: 'Luis quiere saber por qué la fila se movió tan lento.', en: 'Luis wants to know why the line moved so slowly.' },
    { role: 'target', es: 'El grupo pregunta si el autobús sale por esa puerta.', en: 'The group asks if the bus leaves through that door.' },
    { role: 'context', es: 'El ruido del anuncio llena la sala.', en: 'The announcement noise fills the hall.' },
    { role: 'target', es: 'Clara pregunta qué maleta era la correcta.', en: 'Clara asks which suitcase was the right one.' },
    { role: 'target', es: 'Pedro quiere saber cuánto tiempo dura la espera.', en: 'Pedro wants to know how long the wait lasts.' },
    { role: 'context', es: 'Al final, la información queda clara para todos.', en: 'In the end, the information is clear for everyone.' }
  ]
);
patchStory(
  lesson74.stories[1],
  { title: 'El museo: Preguntas con calma', type: 'Uso natural', value: 'orden', lessonTarget: lesson74.topic, pattern: 'Indirect questions with where / when / how' },
  [
    { role: 'context', es: 'En la biblioteca del museo, dos guías ordenan folletos.', en: 'In the museum library, two guides organize brochures.' },
    { role: 'target', es: 'Sara pregunta dónde se guarda el mapa antiguo.', en: 'Sara asks where the old map is kept.' },
    { role: 'target', es: 'Nico quiere saber quién dejó la caja abierta.', en: 'Nico wants to know who left the box open.' },
    { role: 'target', es: 'La guía no sabe cuánto cuesta la entrada.', en: 'The guide does not know how much the ticket costs.' },
    { role: 'context', es: 'Las vitrinas están llenas de notas pequeñas.', en: 'The display cases are full of small notes.' },
    { role: 'target', es: 'Paula pregunta qué sala abre primero.', en: 'Paula asks which room opens first.' },
    { role: 'target', es: 'Marcos quiere saber por qué cambiaron el horario.', en: 'Marcos wants to know why they changed the schedule.' },
    { role: 'target', es: 'El grupo pregunta si la sala de fotos sigue cerrada.', en: 'The group asks if the photo room is still closed.' },
    { role: 'context', es: 'La luz baja ayuda a leer mejor.', en: 'The low light helps them read better.' },
    { role: 'target', es: 'Lucía pregunta cuándo termina la visita guiada.', en: 'Lucía asks when the guided tour ends.' },
    { role: 'target', es: 'Hugo quiere saber cómo llegan al archivo.', en: 'Hugo wants to know how they get to the archive.' },
    { role: 'context', es: 'Al final, todos salen con menos dudas.', en: 'In the end, everyone leaves with fewer doubts.' }
  ]
);
patchStory(
  lesson74.stories[2],
  { title: 'La clínica: Información sin ruido', type: 'Integración', value: 'cortesía', lessonTarget: lesson74.topic, pattern: 'Indirect questions with where / when / how' },
  [
    { role: 'context', es: 'En la clínica, la recepcionista responde con calma.', en: 'At the clinic, the receptionist answers calmly.' },
    { role: 'target', es: 'Elena pregunta dónde debe sentarse la paciente.', en: 'Elena asks where the patient should sit.' },
    { role: 'target', es: 'Tomás quiere saber qué doctor la atiende hoy.', en: 'Tomás wants to know which doctor sees her today.' },
    { role: 'target', es: 'La enfermera no recuerda a qué hora llega el médico.', en: 'The nurse does not remember what time the doctor arrives.' },
    { role: 'context', es: 'La sala de espera está tranquila.', en: 'The waiting room is quiet.' },
    { role: 'target', es: 'Marta pregunta cómo se completa el formulario.', en: 'Marta asks how the form is filled out.' },
    { role: 'target', es: 'Diego quiere saber si pueden pasar ahora.', en: 'Diego wants to know if they can go in now.' },
    { role: 'target', es: 'El padre pregunta por qué cambió la cita.', en: 'The father asks why the appointment changed.' },
    { role: 'context', es: 'Las voces son bajas y respetuosas.', en: 'The voices are low and respectful.' },
    { role: 'target', es: 'Laura pregunta cuánto tarda la revisión.', en: 'Laura asks how long the checkup takes.' },
    { role: 'target', es: 'Pablo quiere saber cuál puerta usar al salir.', en: 'Pablo wants to know which door to use when leaving.' },
    { role: 'context', es: 'Al final, la consulta avanza sin confusión.', en: 'In the end, the appointment moves forward without confusion.' }
  ]
);
const lesson69 = curriculum.blocks[8].lessons.find((lesson) => lesson.lesson_id === 69);
patchStory(
  lesson69.stories[0],
  { title: 'La montaña: Adaptarse al frío', type: 'Descubrimiento', value: 'cambio', lessonTarget: lesson69.topic, pattern: 'Getting used to a new situation' },
  [
    { role: 'context', es: 'La familia se muda a un pueblo en la montaña.', en: 'The family moves to a town in the mountains.' },
    { role: 'target', es: 'Sofía se está acostumbrando a las mañanas frías.', en: 'Sofia is getting used to the cold mornings.' },
    { role: 'target', es: 'Diego se está acostumbrando a las calles empinadas.', en: 'Diego is getting used to the steep streets.' },
    { role: 'target', es: 'Los niños se están acostumbrando a la nueva ruta del autobús.', en: 'The children are getting used to the new bus route.' },
    { role: 'context', es: 'Los primeros días se sienten largos.', en: 'The first days feel long.' },
    { role: 'target', es: 'Marta se acostumbró al silencio de la noche después de un tiempo.', en: 'Marta got used to the quiet nights after a while.' },
    { role: 'target', es: 'Luis se está acostumbrando a cocinar con menos ruido.', en: 'Luis is getting used to cooking with less noise.' },
    { role: 'target', es: 'Los vecinos los ayudan a sentirse en casa.', en: 'The neighbors help them feel at home.' },
    { role: 'context', es: 'Las cosas pequeñas se vuelven normales poco a poco.', en: 'Small things become normal little by little.' },
    { role: 'target', es: 'Ana se está acostumbrando al amanecer temprano.', en: 'Ana is getting used to the early sunrise.' },
    { role: 'target', es: 'Pedro se acostumbró a las tardes más cortas.', en: 'Pedro got used to the shorter afternoons.' },
    { role: 'context', es: 'Al final, el lugar empieza a sentirse familiar.', en: 'In the end, the place starts to feel familiar.' }
  ]
);
patchStory(
  lesson69.stories[1],
  { title: 'La escuela: Nueva rutina diaria', type: 'Uso natural', value: 'hábitos', lessonTarget: lesson69.topic, pattern: 'Getting used to a new situation' },
  [
    { role: 'context', es: 'La clase empieza más temprano este trimestre.', en: 'The class starts earlier this term.' },
    { role: 'target', es: 'Los estudiantes se están acostumbrando a la alarma temprana.', en: 'The students are getting used to the early alarm.' },
    { role: 'target', es: 'Nora se acostumbró a preparar la mochila la noche anterior.', en: 'Nora got used to packing her bag the night before.' },
    { role: 'target', es: 'La maestra se está acostumbrando al nuevo horario.', en: 'The teacher is getting used to the new timetable.' },
    { role: 'context', es: 'Al principio, todos parecían cansados.', en: 'At first, everyone looked tired.' },
    { role: 'target', es: 'Lucas se está acostumbrando al pasillo más ruidoso.', en: 'Lucas is getting used to the louder hallway.' },
    { role: 'target', es: 'Eva se acostumbró a hablar más en clase.', en: 'Eva got used to speaking up in class.' },
    { role: 'target', es: 'Los padres se están acostumbrando a la nueva hora de recogida.', en: 'The parents are getting used to the new pickup time.' },
    { role: 'context', es: 'La rutina se vuelve más fácil poco a poco.', en: 'The routine slowly becomes easier.' },
    { role: 'target', es: 'Mari se está acostumbrando al bus de la mañana.', en: 'Mari is getting used to the morning bus.' },
    { role: 'target', es: 'Los chicos se acostumbraron a las reglas más estrictas.', en: 'The boys got used to the stricter rules.' },
    { role: 'context', es: 'Para el viernes, el cambio se siente normal.', en: 'By Friday, the change feels normal.' }
  ]
);
patchStory(
  lesson69.stories[2],
  { title: 'El taller: Ritmo nuevo', type: 'Integración', value: 'ajuste', lessonTarget: lesson69.topic, pattern: 'Getting used to a new situation' },
  [
    { role: 'context', es: 'El taller tiene un equipo más grande este mes.', en: 'The workshop has a bigger team this month.' },
    { role: 'target', es: 'Carla se está acostumbrando a las máquinas rápidas.', en: 'Carla is getting used to the fast machines.' },
    { role: 'target', es: 'Bruno se acostumbró al turno de noche.', en: 'Bruno got used to the night shift.' },
    { role: 'target', es: 'Los aprendices se están acostumbrando a los pasos de seguridad.', en: 'The apprentices are getting used to the safety steps.' },
    { role: 'context', es: 'El primer día fue ruidoso y difícil.', en: 'The first day was noisy and hard.' },
    { role: 'target', es: 'Yo me estoy acostumbrando al olor de la pintura.', en: 'I am getting used to the smell of paint.' },
    { role: 'target', es: 'Ellos se acostumbraron a pedir ayuda.', en: 'They got used to asking for help.' },
    { role: 'target', es: 'La mecánica se está acostumbrando a las herramientas nuevas.', en: 'The mechanic is getting used to the new tools.' },
    { role: 'context', es: 'Cada tarea resulta más fácil con práctica.', en: 'Every task feels easier after practice.' },
    { role: 'target', es: 'Rita se está acostumbrando al ritmo más rápido.', en: 'Rita is getting used to the faster pace.' },
    { role: 'target', es: 'Omar se acostumbró a las pausas largas entre pedidos.', en: 'Omar got used to the long breaks between orders.' },
    { role: 'context', es: 'Al final, la nueva rutina encaja mejor.', en: 'In the end, the new routine fits better.' }
  ]
);

const lesson54 = curriculum.blocks[7].lessons.find((lesson) => lesson.lesson_id === 54);
patchStory(lesson54.stories[0], { title: 'El escenario: Si yo fuera la directora', type: 'Descubrimiento', value: 'hipótesis', lessonTarget: lesson54.topic, pattern: 'If I were..., I would...' }, [
  { role: 'context', es: 'El teatro del barrio prepara una obra nueva.', en: 'The neighborhood theater is preparing a new play.' },
  { role: 'target', es: 'Si yo fuera la directora, elegiría una escena más corta.', en: 'If I were the director, I would choose a shorter scene.' },
  { role: 'target', es: 'Si Ana fuera la protagonista, tendría más tiempo para ensayar.', en: 'If Ana were the lead, she would have more time to rehearse.' },
  { role: 'target', es: 'Si el escenario fuera más grande, cabrían todos los músicos.', en: 'If the stage were bigger, all the musicians would fit.' },
  { role: 'context', es: 'El grupo imagina soluciones sin cambiar la realidad.', en: 'The group imagines solutions without changing reality.' },
  { role: 'target', es: 'Si yo fuera el técnico, movería las luces.', en: 'If I were the technician, I would move the lights.' },
  { role: 'target', es: 'Si la función fuera mañana, practicaríamos esta noche.', en: 'If the show were tomorrow, we would practice tonight.' },
  { role: 'target', es: 'Si el público fuera menor, usaríamos un salón pequeño.', en: 'If the audience were smaller, we would use a small hall.' },
  { role: 'context', es: 'Después vuelven al plan real de la semana.', en: 'Afterward, they return to the real plan for the week.' },
  { role: 'target', es: 'Si yo fuera tú, anotaría cada cambio.', en: 'If I were you, I would write down every change.' },
  { role: 'target', es: 'Si el ensayo fuera más temprano, llegaríamos descansados.', en: 'If rehearsal were earlier, we would arrive rested.' },
  { role: 'context', es: 'La obra sigue avanzando con decisiones concretas.', en: 'The play keeps moving forward with concrete decisions.' }
]);
patchStory(lesson54.stories[1], { title: 'El laboratorio: Un experimento distinto', type: 'Uso natural', value: 'imaginación', lessonTarget: lesson54.topic, pattern: 'If I were..., I would...' }, [
  { role: 'context', es: 'El equipo analiza un experimento que todavía no puede hacer.', en: 'The team discusses an experiment they cannot do yet.' },
  { role: 'target', es: 'Si yo fuera la científica, cambiaría la temperatura.', en: 'If I were the scientist, I would change the temperature.' },
  { role: 'target', es: 'Si el recipiente fuera transparente, veríamos la reacción.', en: 'If the container were transparent, we would see the reaction.' },
  { role: 'target', es: 'Si la muestra fuera más grande, mediríamos otro resultado.', en: 'If the sample were larger, we would measure another result.' },
  { role: 'context', es: 'Las hipótesis ayudan a comparar opciones.', en: 'The hypotheses help them compare options.' },
  { role: 'target', es: 'Si Marco fuera el encargado, revisaría los datos.', en: 'If Marco were in charge, he would review the data.' },
  { role: 'target', es: 'Si el equipo fuera más pequeño, trabajaríamos más rápido.', en: 'If the team were smaller, we would work faster.' },
  { role: 'target', es: 'Si el resultado fuera claro, publicaríamos el informe.', en: 'If the result were clear, we would publish the report.' },
  { role: 'context', es: 'Por ahora, guardan las ideas para el próximo turno.', en: 'For now, they save the ideas for the next shift.' },
  { role: 'target', es: 'Si yo fuera tú, repetiría la prueba.', en: 'If I were you, I would repeat the test.' },
  { role: 'target', es: 'Si el laboratorio fuera más silencioso, pensaríamos mejor.', en: 'If the lab were quieter, we would think better.' },
  { role: 'context', es: 'La conversación termina con una pregunta abierta.', en: 'The conversation ends with an open question.' }
]);
patchStory(lesson54.stories[2], { title: 'La cabaña: Un plan para la tormenta', type: 'Integración', value: 'decisiones', lessonTarget: lesson54.topic, pattern: 'If I were..., I would...' }, [
  { role: 'context', es: 'Una tormenta se acerca a la cabaña del lago.', en: 'A storm is approaching the cabin by the lake.' },
  { role: 'target', es: 'Si yo fuera el guía, saldría antes del anochecer.', en: 'If I were the guide, I would leave before dark.' },
  { role: 'target', es: 'Si el camino fuera más seguro, caminaríamos hasta el pueblo.', en: 'If the path were safer, we would walk to the village.' },
  { role: 'target', es: 'Si la radio fuera más potente, llamaríamos al equipo.', en: 'If the radio were stronger, we would call the team.' },
  { role: 'context', es: 'Cada persona propone una opción posible.', en: 'Each person suggests a possible option.' },
  { role: 'target', es: 'Si Elena fuera la responsable, cerraría todas las ventanas.', en: 'If Elena were responsible, she would close all the windows.' },
  { role: 'target', es: 'Si la lluvia fuera ligera, esperaríamos una hora.', en: 'If the rain were light, we would wait an hour.' },
  { role: 'target', es: 'Si el lago fuera tranquilo, usaríamos la canoa.', en: 'If the lake were calm, we would use the canoe.' },
  { role: 'context', es: 'Finalmente eligen la opción más segura.', en: 'Finally, they choose the safest option.' },
  { role: 'target', es: 'Si yo fuera tú, seguiría las instrucciones.', en: 'If I were you, I would follow the instructions.' },
  { role: 'target', es: 'Si la señal fuera mejor, avisaríamos a nuestras familias.', en: 'If the signal were better, we would inform our families.' },
  { role: 'context', es: 'La cabaña queda lista para pasar la noche.', en: 'The cabin is ready for the night.' }
]);

const lesson57 = curriculum.blocks[7].lessons.find((lesson) => lesson.lesson_id === 57);
patchStory(lesson57.stories[0], { title: 'La estación: Ojalá cambie el tiempo', type: 'Descubrimiento', value: 'deseos', lessonTarget: lesson57.topic, pattern: 'I wish + would + verb' }, [
  { role: 'context', es: 'El tren se retrasa y la gente espera en el andén.', en: 'The train is delayed and people wait on the platform.' },
  { role: 'target', es: 'Ojalá el altavoz diera información más clara.', en: 'I wish the speaker would give clearer information.' },
  { role: 'target', es: 'Ojalá el tren llegara pronto.', en: 'I wish the train would arrive soon.' },
  { role: 'target', es: 'Ojalá la pantalla mostrara la nueva hora.', en: 'I wish the screen would show the new time.' },
  { role: 'context', es: 'Los pasajeros expresan frustración sin describir un arrepentimiento pasado.', en: 'The passengers express frustration, not a past regret.' },
  { role: 'target', es: 'Ojalá la compañía respondiera nuestras preguntas.', en: 'I wish the company would answer our questions.' },
  { role: 'target', es: 'Ojalá alguien abriera la puerta lateral.', en: 'I wish someone would open the side door.' },
  { role: 'target', es: 'Ojalá el ruido bajara un poco.', en: 'I wish the noise would go down a little.' },
  { role: 'context', es: 'Por fin aparece un empleado con una actualización.', en: 'At last, an employee appears with an update.' },
  { role: 'target', es: 'Ojalá el servicio volviera a la normalidad.', en: 'I wish the service would return to normal.' },
  { role: 'target', es: 'Ojalá los viajeros mantuvieran la calma.', en: 'I wish the travelers would stay calm.' },
  { role: 'context', es: 'La espera continúa, pero todos ya conocen el plan.', en: 'The wait continues, but everyone knows the plan now.' }
]);
patchStory(lesson57.stories[1], { title: 'La biblioteca: Un poco de silencio', type: 'Uso natural', value: 'peticiones', lessonTarget: lesson57.topic, pattern: 'I wish + would + verb' }, [
  { role: 'context', es: 'En la biblioteca, un grupo estudia para sus exámenes.', en: 'In the library, a group studies for exams.' },
  { role: 'target', es: 'Ojalá el teléfono dejara de sonar.', en: 'I wish the phone would stop ringing.' },
  { role: 'target', es: 'Ojalá las puertas cerraran con menos ruido.', en: 'I wish the doors would close more quietly.' },
  { role: 'target', es: 'Ojalá la impresora funcionara esta tarde.', en: 'I wish the printer would work this afternoon.' },
  { role: 'context', es: 'La bibliotecaria escucha las quejas y busca soluciones.', en: 'The librarian hears the complaints and looks for solutions.' },
  { role: 'target', es: 'Ojalá los estudiantes hablaran más bajo.', en: 'I wish the students would speak more quietly.' },
  { role: 'target', es: 'Ojalá la luz dejara de parpadear.', en: 'I wish the light would stop flickering.' },
  { role: 'target', es: 'Ojalá la red cargara el documento.', en: 'I wish the network would load the document.' },
  { role: 'context', es: 'El examen empieza en menos de una hora.', en: 'The exam starts in less than an hour.' },
  { role: 'target', es: 'Ojalá el reloj avanzara más despacio.', en: 'I wish the clock would move more slowly.' },
  { role: 'target', es: 'Ojalá todos respetaran este espacio.', en: 'I wish everyone would respect this space.' },
  { role: 'context', es: 'El ambiente mejora y el grupo vuelve a concentrarse.', en: 'The atmosphere improves and the group focuses again.' }
]);
patchStory(lesson57.stories[2], { title: 'El taller: Cuando el tráfico no ayuda', type: 'Integración', value: 'frustración', lessonTarget: lesson57.topic, pattern: 'I wish + would + verb' }, [
  { role: 'context', es: 'El equipo espera a una pieza que viene por carretera.', en: 'The team waits for a part coming by road.' },
  { role: 'target', es: 'Ojalá el tráfico se moviera más rápido.', en: 'I wish the traffic would move faster.' },
  { role: 'target', es: 'Ojalá el proveedor enviara el paquete hoy.', en: 'I wish the supplier would send the package today.' },
  { role: 'target', es: 'Ojalá el conductor llamara con una actualización.', en: 'I wish the driver would call with an update.' },
  { role: 'context', es: 'Sin la pieza, la reparación no puede terminar.', en: 'Without the part, the repair cannot finish.' },
  { role: 'target', es: 'Ojalá la lluvia se detuviera pronto.', en: 'I wish the rain would stop soon.' },
  { role: 'target', es: 'Ojalá la carretera quedara libre.', en: 'I wish the road would clear.' },
  { role: 'target', es: 'Ojalá el sistema aceptara el nuevo pedido.', en: 'I wish the system would accept the new order.' },
  { role: 'context', es: 'El encargado decide cambiar de tarea mientras espera.', en: 'The manager decides to change tasks while he waits.' },
  { role: 'target', es: 'Ojalá el retraso no durara toda la tarde.', en: 'I wish the delay would not last all afternoon.' },
  { role: 'target', es: 'Ojalá el cliente entendiera la situación.', en: 'I wish the customer would understand the situation.' },
  { role: 'context', es: 'La pieza llega al final del turno.', en: 'The part arrives at the end of the shift.' }
]);

const lesson59 = curriculum.blocks[7].lessons.find((lesson) => lesson.lesson_id === 59);
patchStory(lesson59.stories[0], { title: 'El entrenamiento: Instrucciones rápidas', type: 'Descubrimiento', value: 'verbos base', lessonTarget: lesson59.topic, pattern: 'Make / let / help + object + base verb' }, [
  { role: 'context', es: 'La entrenadora prepara al equipo para la final.', en: 'The coach prepares the team for the final.' },
  { role: 'target', es: 'La entrenadora hace que los jugadores corran dos vueltas.', en: 'The coach makes the players run two laps.' },
  { role: 'target', es: 'Ella deja que el capitán elija la estrategia.', en: 'She lets the captain choose the strategy.' },
  { role: 'target', es: 'El asistente ayuda al grupo a calentar.', en: 'The assistant helps the group warm up.' },
  { role: 'context', es: 'Cada instrucción tiene un efecto directo.', en: 'Each instruction has a direct effect.' },
  { role: 'target', es: 'El entrenador hace que el portero repita el ejercicio.', en: 'The trainer makes the goalkeeper repeat the drill.' },
  { role: 'target', es: 'La capitana deja que Ana use el nuevo balón.', en: 'The captain lets Ana use the new ball.' },
  { role: 'target', es: 'Los mayores ayudan a los nuevos a encontrar su posición.', en: 'The older players help the newcomers find their position.' },
  { role: 'context', es: 'El equipo aprende que después de estos verbos va la forma base.', en: 'The team learns that the base form follows these verbs.' },
  { role: 'target', es: 'El árbitro hace que todos esperen la señal.', en: 'The referee makes everyone wait for the signal.' },
  { role: 'target', es: 'La entrenadora deja que el equipo descanse cinco minutos.', en: 'The coach lets the team rest for five minutes.' },
  { role: 'context', es: 'La práctica termina con una jugada clara.', en: 'Practice ends with a clear play.' }
]);
patchStory(lesson59.stories[1], { title: 'La casa: Ayuda en la mudanza', type: 'Uso natural', value: 'causativas', lessonTarget: lesson59.topic, pattern: 'Make / let / help + object + base verb' }, [
  { role: 'context', es: 'La familia vacía una casa antes de la mudanza.', en: 'The family clears a house before moving.' },
  { role: 'target', es: 'Mamá hace que los niños ordenen sus libros.', en: 'Mom makes the children sort their books.' },
  { role: 'target', es: 'Papá deja que Leo escoja una caja pequeña.', en: 'Dad lets Leo choose a small box.' },
  { role: 'target', es: 'La vecina ayuda a todos a cargar la mesa.', en: 'The neighbor helps everyone carry the table.' },
  { role: 'context', es: 'La tarde avanza entre cajas y etiquetas.', en: 'The afternoon moves on among boxes and labels.' },
  { role: 'target', es: 'La abuela hace que los adultos revisen el inventario.', en: 'Grandma makes the adults check the inventory.' },
  { role: 'target', es: 'El hermano mayor deja que Sara decore una caja.', en: 'The older brother lets Sara decorate a box.' },
  { role: 'target', es: 'El vecino ayuda a los niños a mover las sillas.', en: 'The neighbor helps the children move the chairs.' },
  { role: 'context', es: 'Todos colaboran sin añadir otro to después de make o let.', en: 'Everyone helps without adding another to after make or let.' },
  { role: 'target', es: 'Mamá hace que el conductor espere afuera.', en: 'Mom makes the driver wait outside.' },
  { role: 'target', es: 'Papá deja que los niños descansen un momento.', en: 'Dad lets the children rest for a moment.' },
  { role: 'context', es: 'La casa queda vacía y lista para sus nuevos dueños.', en: 'The house is empty and ready for its new owners.' }
]);
patchStory(lesson59.stories[2], { title: 'El refugio: Cuidar a los animales', type: 'Integración', value: 'colaboración', lessonTarget: lesson59.topic, pattern: 'Make / let / help + object + base verb' }, [
  { role: 'context', es: 'Los voluntarios reciben animales en el refugio.', en: 'Volunteers receive animals at the shelter.' },
  { role: 'target', es: 'La veterinaria hace que los asistentes limpien las jaulas.', en: 'The vet makes the assistants clean the cages.' },
  { role: 'target', es: 'Ella deja que cada perro explore el patio.', en: 'She lets each dog explore the yard.' },
  { role: 'target', es: 'Los voluntarios ayudan a los gatos a encontrar una familia.', en: 'The volunteers help the cats find a family.' },
  { role: 'context', es: 'El trabajo combina cuidado, paciencia y organización.', en: 'The work combines care, patience, and organization.' },
  { role: 'target', es: 'El encargado hace que todos registren cada comida.', en: 'The manager makes everyone record each meal.' },
  { role: 'target', es: 'La cuidadora deja que el cachorro duerma tranquilo.', en: 'The caregiver lets the puppy sleep peacefully.' },
  { role: 'target', es: 'El equipo ayuda a los visitantes a elegir una mascota.', en: 'The team helps the visitors choose a pet.' },
  { role: 'context', es: 'Las causativas muestran quién provoca o permite la acción.', en: 'Causatives show who causes or allows the action.' },
  { role: 'target', es: 'La veterinaria hace que el perro beba agua.', en: 'The vet makes the dog drink water.' },
  { role: 'target', es: 'El director deja que los niños acaricien al conejo.', en: 'The director lets the children pet the rabbit.' },
  { role: 'context', es: 'Al cierre, cada animal recibe atención.', en: 'At closing, every animal receives attention.' }
]);

const lesson67 = curriculum.blocks[8].lessons.find((lesson) => lesson.lesson_id === 67);
patchStory(lesson67.stories[0], { title: 'La plaza de la infancia: Juegos de antes', type: 'Descubrimiento', value: 'memoria', lessonTarget: lesson67.topic, pattern: 'would + base verb for repeated past habits' }, [
  { role: 'context', es: 'En una reunión familiar, Nora cuenta cómo era su plaza.', en: 'At a family gathering, Nora describes her old neighborhood square.' },
  { role: 'target', es: 'Cada tarde, los niños jugaban en la fuente.', en: 'Every afternoon, the children would play by the fountain.' },
  { role: 'target', es: 'Su abuelo llevaba una radio pequeña.', en: 'Her grandfather would bring a small radio.' },
  { role: 'target', es: 'Los vecinos compartían fruta bajo los árboles.', en: 'The neighbors would share fruit under the trees.' },
  { role: 'context', es: 'No habla de una sola acción, sino de una costumbre repetida.', en: 'She is describing repeated habits, not one single action.' },
  { role: 'target', es: 'Cuando llovía, todos corrían al quiosco.', en: 'When it rained, everyone would run to the kiosk.' },
  { role: 'target', es: 'Los músicos tocaban los domingos.', en: 'The musicians would play on Sundays.' },
  { role: 'target', es: 'Nora volvía a casa antes de cenar.', en: 'Nora would return home before dinner.' },
  { role: 'context', es: 'Ahora la plaza tiene edificios nuevos.', en: 'Now the square has new buildings.' },
  { role: 'target', es: 'Los niños se reunían junto al banco azul.', en: 'The children would meet beside the blue bench.' },
  { role: 'target', es: 'Su madre les contaba historias al anochecer.', en: 'Her mother would tell them stories at dusk.' },
  { role: 'context', es: 'Los recuerdos convierten la plaza en una historia viva.', en: 'The memories turn the square into a living story.' }
]);
patchStory(lesson67.stories[1], { title: 'Las mañanas de antes: Una rutina compartida', type: 'Uso natural', value: 'rutina', lessonTarget: lesson67.topic, pattern: 'would + base verb for repeated past habits' }, [
  { role: 'context', es: 'Luis recuerda las mañanas en la granja de sus tíos.', en: 'Luis remembers mornings on his aunt and uncle’s farm.' },
  { role: 'target', es: 'El gallo cantaba antes del amanecer.', en: 'The rooster would crow before sunrise.' },
  { role: 'target', es: 'Su tía preparaba pan caliente.', en: 'His aunt would make warm bread.' },
  { role: 'target', es: 'Luis llevaba agua al establo.', en: 'Luis would carry water to the stable.' },
  { role: 'context', es: 'La secuencia ocurría casi todos los días.', en: 'The sequence happened almost every day.' },
  { role: 'target', es: 'Los perros esperaban junto a la puerta.', en: 'The dogs would wait by the door.' },
  { role: 'target', es: 'Los vecinos llegaban con sus canastas.', en: 'The neighbors would arrive with their baskets.' },
  { role: 'target', es: 'Después todos desayunaban juntos.', en: 'Afterward, everyone would have breakfast together.' },
  { role: 'context', es: 'La granja ahora recibe visitantes los fines de semana.', en: 'The farm now welcomes visitors on weekends.' },
  { role: 'target', es: 'Luis se sentaba bajo el árbol grande.', en: 'Luis would sit under the big tree.' },
  { role: 'target', es: 'Su tío explicaba cada tarea.', en: 'His uncle would explain every task.' },
  { role: 'context', es: 'La rutina antigua todavía influye en su vida.', en: 'The old routine still influences his life.' }
]);
patchStory(lesson67.stories[2], { title: 'El barrio de antes: Voces conocidas', type: 'Integración', value: 'narración', lessonTarget: lesson67.topic, pattern: 'would + base verb for repeated past habits' }, [
  { role: 'context', es: 'Una periodista entrevista a vecinos sobre el barrio antiguo.', en: 'A journalist interviews neighbors about the old neighborhood.' },
  { role: 'target', es: 'El cartero saludaba a cada familia.', en: 'The mail carrier would greet every family.' },
  { role: 'target', es: 'La panadera abría la tienda al amanecer.', en: 'The baker would open the shop at dawn.' },
  { role: 'target', es: 'Los niños cruzaban la calle en grupo.', en: 'The children would cross the street in a group.' },
  { role: 'context', es: 'Cada voz añade un detalle distinto del pasado.', en: 'Each voice adds a different detail from the past.' },
  { role: 'target', es: 'El reloj de la iglesia marcaba cada hora.', en: 'The church clock would mark every hour.' },
  { role: 'target', es: 'Los vecinos organizaban cenas los viernes.', en: 'The neighbors would organize dinners on Fridays.' },
  { role: 'target', es: 'La banda tocaba en la esquina.', en: 'The band would play on the corner.' },
  { role: 'context', es: 'El barrio cambió, pero sus hábitos siguen en las historias.', en: 'The neighborhood changed, but its habits remain in the stories.' },
  { role: 'target', es: 'La gente se reunía frente al cine.', en: 'People would gather in front of the cinema.' },
  { role: 'target', es: 'Los abuelos contaban noticias en el parque.', en: 'The grandparents would share news in the park.' },
  { role: 'context', es: 'La entrevista termina con una sonrisa colectiva.', en: 'The interview ends with a collective smile.' }
]);

const lesson76 = curriculum.blocks[10].lessons.find((lesson) => lesson.lesson_id === 76);
patchStory(lesson76.stories[0], { title: 'El jardín: Una semana en orden', type: 'Descubrimiento', value: 'secuencia', lessonTarget: lesson76.topic, pattern: 'time markers with present, past and future' }, [
  { role: 'context', es: 'El equipo organiza una semana de trabajo en el jardín.', en: 'The team organizes a week of work in the garden.' },
  { role: 'target', es: 'Hoy revisamos las semillas.', en: 'Today we check the seeds.' },
  { role: 'target', es: 'Ayer limpiamos los senderos.', en: 'Yesterday we cleaned the paths.' },
  { role: 'target', es: 'Mañana plantaremos los tomates.', en: 'Tomorrow we will plant the tomatoes.' },
  { role: 'context', es: 'Los marcadores indican cuándo ocurre cada acción.', en: 'The markers show when each action happens.' },
  { role: 'target', es: 'Antes de la reunión, mediremos la tierra.', en: 'Before the meeting, we will measure the soil.' },
  { role: 'target', es: 'Después del almuerzo, regaremos las camas.', en: 'After lunch, we will water the beds.' },
  { role: 'target', es: 'Ya hemos terminado la lista.', en: 'We have already finished the list.' },
  { role: 'context', es: 'El calendario evita mezclar pasado, presente y futuro.', en: 'The calendar keeps past, present, and future separate.' },
  { role: 'target', es: 'Todavía necesitamos comprar guantes.', en: 'We still need to buy gloves.' },
  { role: 'target', es: 'Para el viernes, habremos cerrado el proyecto.', en: 'By Friday, we will have closed the project.' },
  { role: 'context', es: 'La semana termina con una cosecha organizada.', en: 'The week ends with an organized harvest.' }
]);
patchStory(lesson76.stories[1], { title: 'La feria escolar: Antes, ahora y después', type: 'Uso natural', value: 'cronología', lessonTarget: lesson76.topic, pattern: 'time markers with present, past and future' }, [
  { role: 'context', es: 'La escuela prepara una feria de ciencias.', en: 'The school prepares a science fair.' },
  { role: 'target', es: 'Esta mañana, los grupos montan sus mesas.', en: 'This morning, the groups set up their tables.' },
  { role: 'target', es: 'La semana pasada, eligieron los experimentos.', en: 'Last week, they chose the experiments.' },
  { role: 'target', es: 'La próxima hora, los jueces visitarán cada mesa.', en: 'Next hour, the judges will visit every table.' },
  { role: 'context', es: 'Cada expresión coloca la acción en una parte del tiempo.', en: 'Each expression places the action in time.' },
  { role: 'target', es: 'Primero, revisan los carteles.', en: 'First, they review the posters.' },
  { role: 'target', es: 'Luego, encienden las luces.', en: 'Then, they turn on the lights.' },
  { role: 'target', es: 'Al final del día, guardarán los materiales.', en: 'At the end of the day, they will store the materials.' },
  { role: 'context', es: 'La secuencia permite contar el evento con claridad.', en: 'The sequence lets them describe the event clearly.' },
  { role: 'target', es: 'Ya han probado el circuito.', en: 'They have already tested the circuit.' },
  { role: 'target', es: 'Todavía esperan a un visitante.', en: 'They are still waiting for a visitor.' },
  { role: 'context', es: 'La feria abre sus puertas a tiempo.', en: 'The fair opens its doors on time.' }
]);
patchStory(lesson76.stories[2], { title: 'La panadería: El reloj de cada pedido', type: 'Integración', value: 'prioridades', lessonTarget: lesson76.topic, pattern: 'time markers with present, past and future' }, [
  { role: 'context', es: 'En la panadería, cada pedido tiene una hora precisa.', en: 'At the bakery, every order has a precise time.' },
  { role: 'target', es: 'Ahora mezclamos la masa.', en: 'Now we mix the dough.' },
  { role: 'target', es: 'Hace una hora, calentamos el horno.', en: 'An hour ago, we heated the oven.' },
  { role: 'target', es: 'En veinte minutos, sacaremos los panes.', en: 'In twenty minutes, we will take out the loaves.' },
  { role: 'context', es: 'La encargada ordena las tareas con marcadores de tiempo.', en: 'The manager orders the tasks with time markers.' },
  { role: 'target', es: 'Primero, pesamos la harina.', en: 'First, we weigh the flour.' },
  { role: 'target', es: 'Después, dejamos reposar la masa.', en: 'Afterward, we let the dough rest.' },
  { role: 'target', es: 'Para el cierre, habremos entregado todos los pedidos.', en: 'By closing time, we will have delivered every order.' },
  { role: 'context', es: 'El reloj ayuda a no perder ningún paso.', en: 'The clock helps them miss no step.' },
  { role: 'target', es: 'Todavía falta decorar la última torta.', en: 'The last cake still needs decorating.' },
  { role: 'target', es: 'Ya hemos contado las cajas.', en: 'We have already counted the boxes.' },
  { role: 'context', es: 'La tienda cierra con la agenda completa.', en: 'The shop closes with a full schedule.' }
]);

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({
  curriculumPath,
  rewrittenStories: 27
}, null, 2));
