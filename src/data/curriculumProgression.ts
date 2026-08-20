import { ClassSlide, CurriculumClass, CurriculumLevel } from '../types';
import { teenLessonKernels, TeenLessonKernel } from './teenCurriculumKernels';

export type CurriculumAudience = 'adulto' | 'niño' | 'adolescente';

type LevelProgression = Pick<CurriculumLevel, 'title' | 'duration' | 'objective' | 'mcfrEquivalent'>;

type TeachingPoint = {
  title: string;
  content: string[];
};

type ClassProgression = {
  title: string;
  description: string;
  objective: string;
  bridge: string;
  goals: [string, string, string];
  teachingPoints?: TeachingPoint[];
  context?: string[];
  production?: string[];
  roleplay?: string[];
  homework?: string[];
};

const levelProgression: Record<CurriculumAudience, Record<string, LevelProgression>> = {
  adulto: {
    'basic-zero': {
      title: 'Foundation - Basic Zero / Fundamentos - Básico Cero',
      duration: '16 clases',
      objective: 'Construir supervivencia comunicativa: presentarse, comprender información básica y resolver necesidades inmediatas.',
      mcfrEquivalent: 'Pre-A1',
    },
    'basic-1': {
      title: 'Basic 1 - Everyday Present / Básico 1 - Presente cotidiano',
      duration: '10 clases',
      objective: 'Usar el presente simple para rutinas, trabajo, horarios, pedidos y preferencias sin volver a enseñar el vocabulario de Foundation desde cero.',
      mcfrEquivalent: 'A1',
    },
    'basic-2': {
      title: 'Basic 2 - Routines and Actions / Básico 2 - Rutinas y acciones',
      duration: '11 clases',
      objective: 'Contrastar hábitos con acciones actuales y resolver situaciones prácticas mediante instrucciones, llamadas y direcciones.',
      mcfrEquivalent: 'A1',
    },
    'basic-3': {
      title: 'Basic 3 - Abilities and Past Foundations / Básico 3 - Habilidades y bases del pasado',
      duration: '10 clases',
      objective: 'Expresar habilidades, permisos y obligaciones, y construir relatos iniciales con was, were y líneas de tiempo.',
      mcfrEquivalent: 'A2',
    },
    'basic-4': {
      title: 'Basic 4 - Past Stories and Future Plans / Básico 4 - Historias pasadas y planes',
      duration: '10 clases',
      objective: 'Narrar experiencias con pasado simple y conectar planes, predicciones y opiniones con claridad.',
      mcfrEquivalent: 'A2',
    },
    inter: {
      title: 'Intermediate - Independent Communication / Intermedio - Comunicación independiente',
      duration: '12 clases',
      objective: 'Resolver conversaciones personales y profesionales con condicionales, present perfect, correo formal y phrasal verbs frecuentes.',
      mcfrEquivalent: 'B1',
    },
    advanced: {
      title: 'Advanced - Precision and Professional English / Avanzado - Precisión e inglés profesional',
      duration: '10 clases',
      objective: 'Comunicar hipótesis, reportar información, negociar y manejar problemas con mayor precisión, naturalidad y control del registro.',
      mcfrEquivalent: 'B2',
    },
    masters: {
      title: 'Masters - Nuance, Argument and Leadership / Masters - Matiz, argumentación y liderazgo',
      duration: '10 clases',
      objective: 'Integrar matiz, persuasión, análisis crítico y presentaciones profesionales en tareas exigentes de nivel avanzado.',
      mcfrEquivalent: 'C1',
    },
  },
  niño: {
    'basic-zero': {
      title: 'Level 0 - Kids Starter / Nivel 0 - Inicio infantil',
      duration: '8 clases',
      objective: 'Reconocer y producir palabras esenciales mediante movimiento, objetos, conteo y frases muy cortas.',
      mcfrEquivalent: 'Pre-A1',
    },
    'basic-explorer': {
      title: 'Level 1 - Kids Explorer / Nivel 1 - Explorador infantil',
      duration: '8 clases',
      objective: 'Pasar de palabras aisladas a frases cortas sobre personas, elecciones y pequeños mundos de la naturaleza.',
      mcfrEquivalent: 'Pre-A1',
    },
    'basic-adventurer': {
      title: 'Level 2 - Kids Adventurer / Nivel 2 - Aventurero infantil',
      duration: '8 clases',
      objective: 'Describir lugares, habilidades, profesiones y compras mediante misiones comunicativas sencillas.',
      mcfrEquivalent: 'A1',
    },
    'basic-champion': {
      title: 'Level 3 - Kids Champion / Nivel 3 - Campeón infantil',
      duration: '8 clases',
      objective: 'Conectar rutinas, gustos, celebraciones y proyectos de presentación con frases A1 cada vez más completas.',
      mcfrEquivalent: 'A1',
    },
  },
  adolescente: {
    'teens-basic-zero': {
      title: 'Level 0 - Teen Startup / Nivel 0 - Inicio adolescente',
      duration: '16 clases',
      objective: 'Construir una base Pre-A1 con identidad personal, escuela, objetos, gustos y comunicación inmediata.',
      mcfrEquivalent: 'Pre-A1',
    },
    'teens-basic-1': {
      title: 'Level 1 - Teen Explorer / Nivel 1 - Explorador adolescente',
      duration: '10 clases',
      objective: 'Ampliar la base hacia perfiles personales, decisiones saludables, planes, compras, tecnología y comunicación práctica.',
      mcfrEquivalent: 'A1',
    },
    'teens-basic-2': {
      title: 'Level 2 - Teen Adventurer / Nivel 2 - Aventurero adolescente',
      duration: '10 clases',
      objective: 'Describir entornos, habilidades y reglas, y participar en planes de ciudad, salud y entretenimiento.',
      mcfrEquivalent: 'A1',
    },
    'teens-basic-3': {
      title: 'Level 3 - Teen Champion / Nivel 3 - Campeón adolescente',
      duration: '10 clases',
      objective: 'Organizar horarios y narrar recuerdos, viajes y biografías mediante pasado básico y conectores.',
      mcfrEquivalent: 'A2',
    },
    'teens-basic-4': {
      title: 'Level 4 - Teen Pro / Nivel 4 - Adolescente Pro',
      duration: '10 clases',
      objective: 'Expresar razones, consejos, condiciones y mensajes adecuados para distintas situaciones y registros.',
      mcfrEquivalent: 'A2',
    },
    'teens-inter': {
      title: 'Intermediate - Teen Communicator / Intermedio - Comunicador adolescente',
      duration: '12 clases',
      objective: 'Conectar experiencias, deducciones, condicionales y debate en proyectos orales progresivos.',
      mcfrEquivalent: 'B1',
    },
    'teens-advanced': {
      title: 'Advanced - Teen Leader / Avanzado - Líder adolescente',
      duration: '10 clases',
      objective: 'Reportar, describir y analizar información con estructuras B2 aplicadas a noticias, tecnología y problemas reales.',
      mcfrEquivalent: 'B2',
    },
    'teens-elite': {
      title: 'Elite - Academic and Leadership English / Elite - Inglés académico y liderazgo',
      duration: '11 clases',
      objective: 'Desarrollar metas, diplomacia, escritura académica, reuniones y presentaciones con control avanzado.',
      mcfrEquivalent: 'B2',
    },
    'teens-masters': {
      title: 'Masters - Global and Academic Communication / Masters - Comunicación global y académica',
      duration: '10 clases',
      objective: 'Integrar pensamiento crítico, síntesis académica, análisis de medios y producción pública de nivel C1.',
      mcfrEquivalent: 'C1',
    },
  },
};

const adultClassProgression: Record<string, ClassProgression> = {
  'c-adults-basic-zero-11': {
    title: 'Class 11: Classroom English & Communication Repair / Clase 11: Inglés de clase y reparación comunicativa',
    description: 'Pedir repetición, aclaración, deletreo y ayuda cuando la comunicación se interrumpe.',
    objective: 'Usar frases de supervivencia para mantener una conversación sin repetir la clase inicial de saludos.',
    bridge: 'Ya sabes saludar y presentarte; ahora aprenderás qué decir cuando no entiendes.',
    goals: ['Ask for repetition politely.', 'Request spelling or slower speech.', 'Confirm that information is correct.'],
    teachingPoints: [
      { title: 'Ask for Repetition / Pedir repetición', content: ['Can you repeat that, please?', 'Could you say that again?', 'Use a calm and polite tone.'] },
      { title: 'Ask for Slower Speech / Pedir que hablen despacio', content: ['Can you speak more slowly?', 'One word at a time, please.', 'I understand, but I need more time.'] },
      { title: 'Ask for Spelling / Pedir deletreo', content: ['How do you spell that?', 'Is that B or V?', 'Please write it for me.'] },
      { title: 'Check Information / Confirmar información', content: ['Did you say fifteen or fifty?', 'So your name is Maya, correct?', 'Let me check the number.'] },
      { title: 'Classroom Help / Ayuda en clase', content: ["I don't understand this word.", 'What does schedule mean?', 'Can you show me an example?'] },
    ],
    context: ['A: My last name is Bevan.', 'B: Sorry, could you repeat that more slowly?', 'A: Bevan. B-E-V-A-N.', 'B: Thank you. Let me check: B-E-V-A-N.'],
    production: ['Repair a conversation after missing one word.', 'Ask for spelling and confirm the answer.', 'Finish the exchange with a polite thank-you.'],
    roleplay: ['Student A gives a name, number, or classroom instruction.', 'Student B asks for repetition, spelling, or clarification.', 'Switch roles and complete the information correctly.'],
    homework: ['Write six useful repair phrases.', 'Create a four-line dialogue with one misunderstanding.', 'Practice saying the dialogue slowly and clearly.'],
  },
  'c-adults-basic-zero-15': {
    title: 'Class 15: Family Profiles & Emergency Contacts / Clase 15: Perfiles familiares y contactos de emergencia',
    description: 'Aplicar familia y posesivos a formularios, perfiles y contactos importantes.',
    objective: 'Usar relaciones familiares, datos personales y posesivos en una tarea adulta concreta.',
    bridge: 'La familia ya fue presentada en la clase 4; aquí se usa para completar y explicar información de contacto.',
    goals: ['Identify a person’s relationship.', 'Give simple contact details.', 'Complete an emergency-contact profile.'],
    teachingPoints: [
      { title: 'Relationship Review / Repaso de relaciones', content: ['Spouse, partner, parent, sibling, child', 'This is my sister.', 'She is my emergency contact.'] },
      { title: 'Contact Details / Datos de contacto', content: ['Full name, phone number, address', 'Her phone number is 555-0182.', 'His address is 24 Green Street.'] },
      { title: 'Possessives in Profiles / Posesivos en perfiles', content: ['My contact is Ana.', 'Her relationship is sister.', "Daniel's number is on the form."] },
      { title: 'Ask for Information / Pedir información', content: ['Who is your emergency contact?', 'What is their phone number?', 'What is your relationship?'] },
      { title: 'Complete a Simple Form / Completar un formulario', content: ['Name: Laura Ortiz', 'Relationship: daughter', 'Phone: 555-0194'] },
    ],
    context: ['Clerk: Who is your emergency contact?', 'Marta: My brother, Luis.', 'Clerk: What is his phone number?', 'Marta: His number is 555-0160.'],
    production: ['Introduce one family contact.', 'Give a relationship and phone number.', 'Check the information before finishing.'],
    roleplay: ['Student A asks for emergency-contact information.', 'Student B answers with a name, relationship, and number.', 'Confirm all three details before switching roles.'],
    homework: ['Create a fictional emergency-contact form.', 'Write five sentences explaining the information.', 'Use my, his, her, and one possessive ’s.'],
  },
  'c-bz-9': {
    title: 'Class 9: Food, Hunger & Basic Needs / Clase 9: Comida, hambre y necesidades básicas',
    description: 'Expresar hambre, sed, deseos y necesidades sin adelantarse a la clase completa de restaurante.',
    objective: 'Usar hungry, thirsty, want, need y alimentos esenciales para resolver necesidades inmediatas.',
    bridge: 'Esta clase presenta necesidades básicas; pedir y pagar en un restaurante se aprenderá en Basic 1.',
    goals: ['Name essential food and drinks.', 'Say what you want or need.', 'Respond to hunger and thirst.'],
    production: ['Say whether you are hungry or thirsty.', 'Choose one food and one drink you need.', 'Offer a simple option to another person.'],
    homework: ['Write five basic-need sentences.', 'Use hungry, thirsty, want, and need.', 'Add one food and one drink to each situation.'],
  },
  'c-bz-10': {
    title: 'Class 10: Basic Locations & Prepositions / Clase 10: Ubicaciones y preposiciones básicas',
    description: 'Ubicar objetos y lugares cercanos antes de aprender rutas completas.',
    objective: 'Usar in, on, under, next to, between y across from para responder Where is...?',
    bridge: 'Aquí se aprende ubicación. Las rutas con go straight y turn left se desarrollarán en Basic 2.',
    goals: ['Ask where a place or object is.', 'Use six location prepositions.', 'Give one short location answer.'],
    production: ['Locate three objects or places.', 'Ask Where is...? twice.', 'Answer with a complete location sentence.'],
    homework: ['Draw a simple room or neighborhood.', 'Write six location sentences.', 'Use a different preposition in each sentence.'],
  },
  'c-adults-basic-1-4': {
    title: 'Class 4: Jobs, Workplaces & Work Routines / Clase 4: Profesiones, lugares y rutinas laborales',
    description: 'Aplicar profesiones conocidas a acciones y lugares de trabajo en presente simple.',
    objective: 'Explicar dónde trabaja una persona y qué hace normalmente, sin volver a memorizar la lista de profesiones.',
    bridge: 'Foundation presentó nombres de profesiones; esta clase añade workplace + daily action.',
    goals: ['Match jobs with workplaces.', 'Describe two regular work actions.', 'Ask and answer What does he/she do?'],
  },
  'c-adults-basic-1-5': {
    title: 'Class 5: Daily Schedules & Time / Clase 5: Horarios diarios y organización del tiempo',
    description: 'Usar la hora aprendida en Foundation para organizar una rutina completa.',
    objective: 'Describir una secuencia diaria con horas, before, after y then.',
    bridge: 'Ya puedes decir horas aisladas; ahora las conectarás dentro de un horario.',
    goals: ['Describe a daily schedule.', 'Connect actions with before, after, and then.', 'Ask about another person’s routine.'],
  },
  'c-adults-basic-1-7': {
    title: 'Class 7: Restaurant Orders & Service / Clase 7: Pedidos y servicio en restaurantes',
    description: 'Transformar vocabulario básico de comida en una interacción completa de restaurante.',
    objective: 'Pedir comida y bebida, responder al mesero y solicitar la cuenta con cortesía.',
    bridge: 'Foundation trabajó hambre y necesidades; aquí el resultado es completar un pedido real.',
    goals: ['Read a simple menu.', 'Place and confirm an order.', 'Ask for the bill politely.'],
  },
  'c-adults-basic-1-8': {
    title: 'Class 8: Groceries, Quantities & Some/Any / Clase 8: Compras, cantidades y some/any',
    description: 'Aplicar contables e incontables a una compra y a la organización de alimentos en casa.',
    objective: 'Usar some, any y cantidades para revisar existencias y preparar una lista de compras.',
    bridge: 'Después del restaurante, esta clase cambia el objetivo hacia cantidades y compras domésticas.',
    goals: ['Separate countable and uncountable nouns.', 'Use some and any accurately.', 'Create a practical shopping list.'],
  },
  'c-adults-basic-1-9': {
    title: 'Class 9: Hobbies & Preferences with Verb-ing / Clase 9: Pasatiempos y preferencias con verb-ing',
    description: 'Construir la forma y las preguntas básicas de like, love y hate + verb-ing.',
    objective: 'Expresar gustos y hacer preguntas sobre pasatiempos con la estructura correcta.',
    bridge: 'Esta es la clase principal de forma gramatical; Basic 2 usará las preferencias para hacer planes.',
    goals: ['Use like, love, and hate + verb-ing.', 'Ask preference questions.', 'Compare two hobbies.'],
  },
  'c-b2-1': {
    title: 'Class 1: Workweek Habits - Integrated Review / Clase 1: Hábitos semanales - repaso integrado',
    description: 'Diagnosticar el presente simple mediante horarios reales y errores frecuentes.',
    objective: 'Recuperar rutinas, tercera persona y frecuencia dentro de una tarea integrada, sin repetir tres clases anteriores.',
    bridge: 'El contenido ya fue introducido en Basic 1; aquí se consolida y se detectan vacíos antes de Present Continuous.',
    goals: ['Build a complete weekly routine.', 'Correct third-person and frequency errors.', 'Explain one difference between two schedules.'],
  },
  'c-b2-3': {
    title: 'Class 3: Invitations & Plans Around Interests / Clase 3: Invitaciones y planes según intereses',
    description: 'Usar gustos conocidos para proponer, aceptar y ajustar actividades.',
    objective: 'Pasar de decir gustos a negociar un plan con want to, would like to, prefer y Let’s.',
    bridge: 'Basic 1 enseñó like + ing; esta clase no repite la forma, sino que la convierte en una decisión compartida.',
    goals: ['Suggest an activity.', 'Accept or decline with a reason.', 'Agree on one final plan.'],
    teachingPoints: [
      { title: 'From Preference to Plan / Del gusto al plan', content: ['I like watching movies.', 'I want to watch a movie tonight.', 'Preference + intention = a possible plan.'] },
      { title: 'Make a Suggestion / Hacer una propuesta', content: ["Let's play soccer.", 'Would you like to go out?', 'Do you want to join us?'] },
      { title: 'Accept Politely / Aceptar', content: ['That sounds great.', "Yes, I'd love to.", 'Good idea. What time?'] },
      { title: 'Decline and Give a Reason / Rechazar y explicar', content: ["Sorry, I can't today.", "I'd like to, but I have to work.", 'How about Saturday instead?'] },
      { title: 'Confirm the Plan / Confirmar el plan', content: ["Let's meet at six.", 'We are meeting at the park.', 'Great. See you there!'] },
    ],
    context: ['A: Would you like to go bowling Friday?', "B: I'd like to, but I work late.", 'A: How about Saturday afternoon?', 'B: Perfect. Let’s meet at three.'],
    production: ['Suggest two activities connected to your interests.', 'Accept one and decline one with a reason.', 'Confirm a final place and time.'],
    roleplay: ['Student A proposes an activity.', 'Student B responds and suggests one change.', 'Together, confirm the final plan.'],
    homework: ['Write an eight-line chat making a plan.', 'Include a suggestion, a polite decline, and an alternative.', 'Finish with a confirmed day, time, and place.'],
  },
  'c-adults-basic-2-8': {
    title: 'Class 8: Street Directions & Route Instructions / Clase 8: Direcciones e instrucciones de ruta',
    description: 'Extender las preposiciones básicas hacia rutas completas y verificables.',
    objective: 'Pedir y dar indicaciones usando imperativos, secuencia y puntos de referencia.',
    bridge: 'Foundation enseñó dónde está un lugar; ahora se explica cómo llegar.',
    goals: ['Ask for directions politely.', 'Give a multi-step route.', 'Confirm the destination with a landmark.'],
  },
  'c-adults-basic-3-4': {
    title: 'Class 4: Workplace Dress & Identifying People / Clase 4: Vestimenta laboral e identificación de personas',
    description: 'Aplicar ropa y colores conocidos a descripciones precisas en situaciones reales.',
    objective: 'Identificar personas mediante apariencia, ropa actual y contexto, sin volver a enseñar colores aislados.',
    bridge: 'Los colores y el cuerpo ya son conocidos; el nuevo resultado es identificar claramente a una persona.',
    goals: ['Describe what someone is wearing.', 'Combine clothing with physical details.', 'Identify the correct person from a description.'],
  },
  'c-adults-basic-3-5': {
    title: 'Class 5: Commuting & Transport Choices / Clase 5: Desplazamientos y opciones de transporte',
    description: 'Usar lugares y transporte para explicar un trayecto y elegir una opción práctica.',
    objective: 'Describir cómo llegar al trabajo o a un lugar y justificar el medio de transporte.',
    bridge: 'Las ubicaciones y direcciones ya fueron aprendidas; aquí se comparan rutas y decisiones de transporte.',
    goals: ['Describe a regular commute.', 'Compare two transport options.', 'Recommend one route with a reason.'],
  },
  'c-adults-basic-3-9': {
    title: 'Class 9: Life Milestones & Past Timelines / Clase 9: Hitos personales y líneas de tiempo',
    description: 'Aplicar fechas y meses conocidos a biografías y recuerdos organizados.',
    objective: 'Construir una línea de tiempo con was/were, fechas, lugares y eventos personales.',
    bridge: 'Las fechas se aprendieron en Foundation; ahora organizan información pasada y biográfica.',
    goals: ['Read years and full dates accurately.', 'Place life events on a timeline.', 'Connect a date, place, and past state.'],
    teachingPoints: [
      { title: 'Dates as Known Language / Fechas como base', content: ['March 12, 1998', 'in 2010 / on May 4', 'Use dates to locate an event, not as an isolated list.'] },
      { title: 'Life Milestones / Hitos personales', content: ['be born, start school, move, graduate', 'She was born in 1995.', 'They were in Bogotá in 2018.'] },
      { title: 'Build a Timeline / Construir una línea', content: ['First: birth or starting point', 'Next: an important change', 'Finally: the most recent event'] },
      { title: 'Ask About the Past / Preguntar por el pasado', content: ['When were you in Mexico?', 'Where was she in 2020?', 'Who was with you?'] },
      { title: 'Mini Biography / Mini biografía', content: ['Date + place + event', 'Use was/were accurately.', 'Keep events in chronological order.'] },
    ],
    context: ['1998: Elena was born in Lima.', '2016: She was a university student.', '2020: She was in Madrid for work.', 'Today she is a project manager.'],
    production: ['Create a four-event fictional timeline.', 'Explain two events with was or were.', 'Ask one follow-up question about a date.'],
    homework: ['Create a five-event life timeline.', 'Write one sentence for every date.', 'Use was/were and three different time expressions.'],
  },
};

const kidsClassProgression: Record<string, ClassProgression> = {
  'c-bz-2': {
    title: 'Class 2: Count the Animal Friends! / Clase 2: ¡Cuenta los animales!',
    description: 'Los animales son apoyo visual; el aprendizaje principal es contar y usar cantidades.',
    objective: 'Contar objetos y animales del uno al cuatro con frases completas muy cortas.',
    bridge: 'Los nombres de animales ayudan a practicar números; las familias de animales se estudiarán después.',
    goals: ['Count from one to four.', 'Say a number + animal phrase.', 'Answer How many? with confidence.'],
  },
  'c-bz-3': {
    title: 'Class 3: Body Commands & Fun Actions! / Clase 3: ¡Cuerpo, instrucciones y acción!',
    description: 'Conectar partes del cuerpo con instrucciones que el niño puede ver y ejecutar.',
    objective: 'Comprender y realizar comandos como clap, jump, turn y touch.',
    bridge: 'Esta clase presenta acciones físicas; Action Heroes añadirá can/can’t más adelante.',
    goals: ['Name key body parts.', 'Follow four action commands.', 'Say I can + one action.'],
  },
  'c-bz-5': {
    title: 'Class 5: Fruit Colors & First Preferences! / Clase 5: ¡Frutas, colores y primeros gustos!',
    description: 'Usar frutas para reciclar colores y producir I like / I don’t like.',
    objective: 'Nombrar frutas y expresar una preferencia simple, no estudiar comida en general.',
    bridge: 'Más adelante la comida se usará para tomar decisiones y comprar.',
    goals: ['Name four fruits.', 'Connect a fruit with its color.', 'Say one like and one dislike.'],
  },
  'c-bz-8': {
    title: 'Class 8: Farm Animal Features! / Clase 8: ¡Características de animales de granja!',
    description: 'Describir tamaño, color, sonido y movimiento en vez de repetir nombres sueltos.',
    objective: 'Identificar animales de granja mediante una característica observable.',
    bridge: 'Animal Friends apoyó el conteo; esta clase añade descripción y clasificación.',
    goals: ['Name four farm animals.', 'Describe one color or size.', 'Match an animal with its sound or action.'],
  },
  'c-be-2': {
    title: 'Class 2: Food Choices & My Plate! / Clase 2: ¡Elecciones de comida y mi plato!',
    description: 'Pasar de nombrar frutas a escoger y explicar una combinación de alimentos.',
    objective: 'Expresar gustos y crear una elección equilibrada con frases simples.',
    bridge: 'Level 0 presentó frutas; aquí el niño toma decisiones sobre una comida completa.',
    goals: ['Name foods and drinks.', 'Choose items for a meal.', 'Give one simple reason with because.'],
  },
  'c-be-4': {
    title: 'Class 4: Nature Lab 1 - Land & Plants / Clase 4: Laboratorio natural 1 - Tierra y plantas',
    description: 'Iniciar una miniunidad científica describiendo elementos terrestres y plantas.',
    objective: 'Nombrar y describir árboles, flores, ríos y montañas.',
    bridge: 'Esta es la primera misión de naturaleza; las siguientes separan insectos y océano.',
    goals: ['Name four land-and-plant words.', 'Describe size or color.', 'Say where one thing is.'],
  },
  'c-be-5': {
    title: 'Class 5: Nature Lab 2 - Bugs Up Close / Clase 5: Laboratorio natural 2 - Insectos de cerca',
    description: 'Observar partes, colores y movimientos de insectos sin repetir animales generales.',
    objective: 'Clasificar insectos y describir cómo se ven o se mueven.',
    bridge: 'Nature Lab 1 trabajó plantas y lugares; esta misión estudia criaturas pequeñas.',
    goals: ['Name common bugs.', 'Describe wings, legs, or color.', 'Say what one bug can do.'],
  },
  'c-be-6': {
    title: 'Class 6: Nature Lab 3 - Under the Sea / Clase 6: Laboratorio natural 3 - Bajo el mar',
    description: 'Cerrar la miniunidad comparando un hábitat acuático con tierra firme.',
    objective: 'Identificar animales marinos y relacionarlos con su hábitat y movimiento.',
    bridge: 'Los insectos viven en tierra; ahora comparamos ese mundo con el océano.',
    goals: ['Name sea animals.', 'Use swims, big, and small.', 'Compare one sea animal with a land animal.'],
  },
  'c-be-7': {
    title: 'Class 7: Action Heroes - Can & Can’t / Clase 7: Héroes de acción - Can y can’t',
    description: 'Transformar acciones conocidas en habilidades, retos y respuestas cortas.',
    objective: 'Usar can/can’t con acciones y responder Can you...?',
    bridge: 'Level 0 enseñó comandos; aquí el niño expresa habilidad y limitación.',
    goals: ['Use can + action.', 'Use can’t + action.', 'Ask and answer Can you...?'],
    production: ['Choose three superhero actions.', 'Say two things your hero can do.', 'Say one funny thing the hero cannot do.'],
    homework: ['Draw a new action hero.', 'Write two can sentences.', 'Write one can’t sentence.'],
  },
  'c-be-8': {
    title: 'Class 8: Numbers 11-20 in Real Life! / Clase 8: ¡Números 11-20 en la vida real!',
    description: 'Ampliar el conteo mediante edades, objetos y resultados visibles.',
    objective: 'Reconocer, decir y usar números del 11 al 20 en respuestas cortas.',
    bridge: 'Level 0 llegó hasta números pequeños; esta clase amplía el rango sin repetir la misma meta.',
    goals: ['Count from eleven to twenty.', 'Answer How many? with a teen number.', 'Recognize commonly confused numbers.'],
  },
  'c-ba-1': {
    title: 'Class 1: Wild Animals, Habitats & Abilities / Clase 1: Animales salvajes, hábitats y habilidades',
    description: 'Usar animales salvajes para integrar hábitat, descripción y can/can’t.',
    objective: 'Explicar dónde vive un animal y qué puede hacer.',
    bridge: 'Los niveles anteriores clasificaron animales; ahora se construye una ficha completa de hábitat y habilidad.',
    goals: ['Match animals with habitats.', 'Describe one physical feature.', 'Use can/can’t for an animal ability.'],
    production: ['Choose one wild animal.', 'Say where it lives and what it can do.', 'Compare it with a familiar animal.'],
    homework: ['Create a wild-animal fact card.', 'Add a habitat, one feature, and one ability.', 'Write three complete sentences.'],
  },
  'c-ba-7': {
    title: 'Class 7: Market Mission - Quantities & Prices / Clase 7: Misión de mercado - Cantidades y precios',
    description: 'Convertir comida conocida en una misión de compra con números, cantidades y cortesía.',
    objective: 'Pedir cantidades, preguntar precios y completar una compra sencilla.',
    bridge: 'La comida ya es conocida; el nuevo resultado es comprarla.',
    goals: ['Ask for a quantity.', 'Read or say a simple price.', 'Complete a polite market exchange.'],
  },
  'c-bc-1': {
    title: 'Class 1: My Day in Order / Clase 1: Mi día en orden',
    description: 'Avanzar de acciones sueltas a una secuencia completa con horas y conectores.',
    objective: 'Describir una rutina usando first, then, after that y finally.',
    bridge: 'Las acciones ya se conocen; ahora se organizan como una historia diaria.',
    goals: ['Put daily actions in order.', 'Add times to two actions.', 'Use four sequence words.'],
  },
  'c-bc-2': {
    title: 'Class 2: Hobbies, Sports & How Often / Clase 2: Pasatiempos, deportes y frecuencia',
    description: 'Pasar de can/can’t a preferencias y frecuencia en actividades reales.',
    objective: 'Expresar qué actividad gusta y con qué frecuencia se realiza.',
    bridge: 'Action Heroes trabajó habilidades; esta clase habla de hábitos e intereses personales.',
    goals: ['Name hobbies and sports.', 'Use like + activity.', 'Use always, sometimes, or never.'],
  },
  'c-bc-6': {
    title: 'Class 6: Seasons, Activities & Plans / Clase 6: Estaciones, actividades y planes',
    description: 'Aplicar clima conocido a decisiones, ropa, celebraciones y actividades estacionales.',
    objective: 'Relacionar cada estación con una actividad y justificar una elección.',
    bridge: 'Level 1 presentó ropa y clima; aquí se planea qué hacer en cada estación.',
    goals: ['Name the four seasons.', 'Choose a seasonal activity.', 'Explain a choice with because.'],
    production: ['Choose your favorite season.', 'Plan one activity and one outfit.', 'Explain why the plan fits the season.'],
    homework: ['Create a four-season mini calendar.', 'Add one activity to every season.', 'Write one because sentence.'],
  },
  'c-bc-7': {
    title: 'Class 7: Community Helpers & Responsibilities / Clase 7: Ayudantes y responsabilidades',
    description: 'Diferenciar profesiones de acciones concretas para ayudar a otras personas.',
    objective: 'Explicar quién ayuda, qué hace y cómo puede colaborar el estudiante.',
    bridge: 'Level 2 presentó profesiones; esta clase se concentra en servicio y responsabilidad.',
    goals: ['Identify community helpers.', 'Describe one helpful action.', 'Say one responsibility you can do.'],
  },
  'c-bc-8': {
    title: 'Class 8: Around the World - Culture Mission / Clase 8: Alrededor del mundo - Misión cultural',
    description: 'Usar países como punto de partida para comida, saludos, lugares y respeto cultural.',
    objective: 'Presentar un lugar del mundo con tres detalles y una pregunta respetuosa.',
    bridge: 'No es una lista de países: es el proyecto integrador de descripción y curiosidad cultural.',
    goals: ['Introduce one country or place.', 'Share three cultural details.', 'Ask one respectful travel question.'],
  },
};

const teenClassProgression: Record<string, ClassProgression> = {
  'c-teens-basic-zero-5': {
    title: 'Class 5: Food Likes, Dislikes & Flavors / Clase 5: Gustos, disgustos y sabores',
    description: 'Introducir vocabulario y preferencias; los pedidos completos se reservan para Basic 1.',
    objective: 'Usar like/don’t like, Do you like...? y adjetivos simples de sabor.',
    bridge: 'Esta es la base de preferencias de comida, no una segunda clase de restaurante.',
    goals: ['Name snacks and drinks.', 'Ask and answer Do you like...?', 'Describe one flavor.'],
  },
  'c-teens-basic-zero-10': {
    title: 'Class 10: Family, Possessives & People / Clase 10: Familia, posesivos y personas',
    description: 'Construir la base de familia, he/she y my/his/her.',
    objective: 'Identificar relaciones y describir una persona mediante posesivos y adjetivos básicos.',
    bridge: 'Basic 1 utilizará esta base para perfiles sociales, personalidad y emociones.',
    goals: ['Name close family relationships.', 'Use my, his, and her.', 'Describe one person.'],
  },
  'c-teens-basic-zero-12': {
    title: 'Class 12: My Teen Profile / Clase 12: Mi perfil adolescente',
    description: 'Integrar saludo, edad, ciudad, curso y gustos en un perfil conectado.',
    objective: 'Crear una presentación completa sin volver a enseñar los saludos de la clase 1.',
    bridge: 'La clase 1 presentó intercambios cortos; esta clase es una producción integradora.',
    goals: ['Connect five personal details.', 'Use and/but to join ideas.', 'Present a complete teen profile.'],
  },
  'c-teens-basic-zero-14': {
    title: 'Class 14: Lost & Found at School / Clase 14: Objetos perdidos en la escuela',
    description: 'Aplicar objetos escolares conocidos a ubicación, preguntas y resolución de un problema.',
    objective: 'Preguntar dónde está un objeto y describir su ubicación con preposiciones.',
    bridge: 'La clase 7 presentó materias y útiles; aquí se usan para resolver una misión de objetos perdidos.',
    goals: ['Describe a missing object.', 'Ask Where is/are...?', 'Use location prepositions to solve the case.'],
    production: ['Describe one missing school item.', 'Ask two location questions.', 'Use clues to identify where the item is.'],
    homework: ['Write a five-line lost-and-found notice.', 'Describe the object and its last location.', 'Add one question for the reader.'],
  },
  'c-teens-basic-1-1': {
    title: 'Class 1: People Profiles, Friendship & Feelings / Clase 1: Perfiles, amistad y emociones',
    description: 'Extender la familia conocida hacia amistades, personalidad, apariencia y estados emocionales.',
    objective: 'Crear perfiles de personas usando this/these, have/has, feelings y personality adjectives.',
    bridge: 'Level 0 presentó familia y posesivos; esta clase amplía el lenguaje a personas del círculo social.',
    goals: ['Describe a friend or relative.', 'Use have/has for features and interests.', 'Explain how a person feels.'],
    teachingPoints: [
      { title: 'People in Your Circle / Personas cercanas', content: ['Friend, classmate, teammate, neighbor, cousin', 'This is my classmate, Eva.', 'These are my teammates.'] },
      { title: 'Personality Words / Personalidad', content: ['Friendly, quiet, funny, creative, helpful', 'Leo is creative and helpful.', 'Use be for personality and feelings.'] },
      { title: 'Feelings Can Change / Emociones', content: ['Excited, worried, tired, calm, proud', 'My friend is worried about the test.', 'Ask: How does he or she feel?'] },
      { title: 'Have and Has for Profiles / Have y has', content: ['I / you / we / they have', 'He / she has', 'Maya has curly hair and a skateboard.'] },
      { title: 'Build a Person Profile / Crear un perfil', content: ['Relationship + personality', 'Appearance or interest with have/has', 'Current feeling + one reason'] },
    ],
    context: ['Nora: This is my friend, Emma.', 'Liam: What is she like?', 'Nora: She is funny and creative. She has a new camera.', 'Liam: How does she feel today?', 'Nora: She is excited because we have a school project.'],
    production: ['Choose a friend, classmate, teammate, or relative.', 'Describe personality and one feature with have/has.', 'Explain one current feeling and ask a follow-up question.'],
    roleplay: ['Student A introduces a person from a club or school group.', 'Student B asks about personality, interests, and feelings.', 'Switch roles and create a second profile.'],
    homework: ['Create two short people profiles.', 'Use have and has at least once each.', 'Include personality, one interest, and one feeling.'],
  },
  'c-teens-basic-1-2': {
    title: 'Class 2: Healthy Habits, Food & Energy / Clase 2: Hábitos saludables, comida y energía',
    description: 'Ampliar alimentos conocidos hacia decisiones de salud sin repetir pedidos de cafetería.',
    objective: 'Relacionar comida, agua, sueño y movimiento con energía usando because.',
    bridge: 'Level 0 presentó gustos; la clase 8 de este nivel enseñará pedidos completos.',
    goals: ['Build a balanced daily choice.', 'Compare a helpful and unhelpful habit.', 'Give a reason with because.'],
    teachingPoints: [
      { title: 'Food for Energy / Comida y energía', content: ['Fruit, vegetables, protein, grains', 'Different foods help the body in different ways.', 'Build a meal, not a restaurant order.'] },
      { title: 'Water and Drinks / Agua y bebidas', content: ['Water helps you stay focused.', 'Too much soda can reduce steady energy.', 'I choose water because I have practice.'] },
      { title: 'Sleep and Movement / Sueño y movimiento', content: ['Sleep, walk, stretch, exercise', 'Healthy energy is not only about food.', 'I sleep eight hours on school nights.'] },
      { title: 'Give a Reason with Because / Explicar con because', content: ['I eat breakfast because I need energy.', 'I carry water because soccer practice is long.', 'choice + because + reason'] },
      { title: 'Build an Energy Plan / Plan de energía', content: ['Choose one meal or snack.', 'Add water, sleep, and movement.', 'Explain which habit helps most.'] },
    ],
    context: ['Ari: I feel tired before basketball practice.', 'Zoe: What do you eat after school?', 'Ari: Usually only chips.', 'Zoe: Try fruit, a sandwich, and water because you need steady energy.'],
    production: ['Build a school-day energy plan.', 'Include food, water, sleep, and movement.', 'Explain two choices with because.'],
    roleplay: ['Student A describes a low-energy school day.', 'Student B asks about habits and suggests a realistic change.', 'Together, choose one habit to try this week.'],
    homework: ['Write a one-day energy plan with six sentences.', 'Include food, water, sleep, and movement.', 'Use because twice.'],
  },
  'c-teens-basic-1-3': {
    title: 'Class 3: Weather Forecast & What to Bring / Clase 3: Pronóstico y qué llevar',
    description: 'Usar ropa conocida para interpretar el clima y preparar un plan.',
    objective: 'Describir el pronóstico y decidir qué usar o llevar según las condiciones.',
    bridge: 'Level 0 presentó ropa y estilo; la clase 7 conservará compras, tallas y precios.',
    goals: ['Describe weather conditions.', 'Choose what to wear or bring.', 'Explain a weather decision.'],
    teachingPoints: [
      { title: 'Read the Forecast / Leer el pronóstico', content: ['Sunny, cloudy, rainy, windy, hot, cold', 'It will be rainy this afternoon.', 'Focus on conditions and decisions, not a clothing list.'] },
      { title: 'Temperature and Conditions / Temperatura', content: ['It is 12 degrees and windy.', 'The morning is cool, but the afternoon is warm.', 'Use and/but to connect conditions.'] },
      { title: 'What Do You Need? / ¿Qué necesitas?', content: ['You need an umbrella.', 'Bring water and a cap.', 'Wear comfortable shoes.'] },
      { title: 'Explain the Choice / Explicar la elección', content: ['I am bringing a jacket because it will be cold.', 'We need sunscreen because it will be sunny.', 'weather + choice + reason'] },
      { title: 'Prepare a Day Plan / Preparar el día', content: ['Check morning and afternoon.', 'Choose two useful items.', 'Explain how the forecast changes the plan.'] },
    ],
    context: ['Mia: The forecast says rain in the morning and sun later.', 'Noah: I am bringing a light jacket and an umbrella.', 'Mia: Good idea. We also need water because the afternoon will be warm.'],
    production: ['Read or invent a two-part forecast.', 'Choose what to wear and what to bring.', 'Explain two decisions with weather reasons.'],
    homework: ['Create a forecast for tomorrow.', 'Write five preparation sentences.', 'Include one contrast with but and two reasons with because.'],
  },
  'c-teens-basic-1-4': {
    title: 'Class 4: Nature, Locations & Park Rules / Clase 4: Naturaleza, ubicación y reglas del parque',
    description: 'Describir un espacio natural y cuidarlo mediante instrucciones claras.',
    objective: 'Usar there is/are, preposiciones e imperativos para describir y proteger un parque.',
    bridge: 'Se evita adelantar should; los modales de consejo y obligación se desarrollarán después.',
    goals: ['Describe an outdoor place.', 'Locate natural features.', 'Give two clear park-care instructions.'],
    teachingPoints: [
      { title: 'Outdoor Places / Lugares al aire libre', content: ['Park, trail, lake, garden, playground', 'There is a lake near the trail.', 'There are trees around the playground.'] },
      { title: 'Locate Nature / Ubicar la naturaleza', content: ['next to, behind, between, across from', 'The garden is behind the café.', 'Two benches are next to the lake.'] },
      { title: 'Describe What You See / Describir', content: ['There is + singular or uncountable', 'There are + plural', 'Add color, size, or condition.'] },
      { title: 'Park Instructions / Instrucciones', content: ["Don't leave trash.", 'Stay on the trail.', 'Put bottles in the recycling bin.'] },
      { title: 'Create a Responsible Map / Mapa responsable', content: ['Add three natural features.', 'Locate each one clearly.', 'Include two positive or negative instructions.'] },
    ],
    context: ['Guide: There is a lake behind the visitor center.', 'Visitor: Are there picnic tables near it?', 'Guide: Yes, there are. Please use the bins and do not feed the animals.'],
    production: ['Describe a simple park map.', 'Locate three features with there is/are and prepositions.', 'Give two direct park-care instructions.'],
    homework: ['Draw a small park map.', 'Write five location sentences.', 'Add two rules using an imperative.'],
  },
  'c-teens-basic-1-5': {
    title: 'Class 5: Weekend Intentions & Simple Plans / Clase 5: Intenciones y planes de fin de semana',
    description: 'Planear con want to, would like to y going to sin adelantar el contraste completo con will.',
    objective: 'Expresar una intención y organizar un plan sencillo con día, hora y lugar.',
    bridge: 'Will para predicciones se desarrollará con espacio y futuro en Level 3.',
    goals: ['State a weekend intention.', 'Use going to for one planned action.', 'Add a day, time, and place.'],
    teachingPoints: [
      { title: 'Wants and Interests / Deseos e intereses', content: ['I want to relax this weekend.', 'I would like to visit the new park.', 'Use these forms before confirming a plan.'] },
      { title: 'Going To for an Intention / Intención', content: ['I am going to study Saturday morning.', 'We are going to play soccer.', 'be + going to + base verb'] },
      { title: 'Add Plan Details / Añadir detalles', content: ['Day: on Saturday', 'Time: at three o’clock', 'Place: at the community center'] },
      { title: 'Ask About a Plan / Preguntar', content: ['What are you going to do?', 'When are you going to go?', 'Who are you going with?'] },
      { title: 'Confirm One Realistic Plan / Confirmar', content: ['Intention + day + time + place', 'Check that everyone agrees.', 'Save will for later predictions and instant decisions.'] },
    ],
    context: ['Kai: What are you going to do Saturday?', 'Luna: I am going to study in the morning, but I want to go skating later.', 'Kai: Great. Let’s meet at the park at four.'],
    production: ['State two weekend intentions.', 'Choose one and add day, time, place, and person.', 'Ask your partner one going-to question.'],
    homework: ['Write a six-sentence weekend plan.', 'Use want to, would like to, and going to.', 'Include a day, time, place, and companion.'],
  },
  'c-teens-basic-1-7': {
    title: 'Class 7: Clothing Store - Prices, Sizes & Payment / Clase 7: Tienda de ropa - Precios, tallas y pago',
    description: 'Convertir vocabulario de ropa en una interacción de compra completa.',
    objective: 'Preguntar precio, talla y color, probar una opción y pagar con cortesía.',
    bridge: 'La ropa ya es conocida; el objetivo nuevo es completar una transacción.',
    goals: ['Ask about price and size.', 'Request another option.', 'Complete a polite purchase.'],
  },
  'c-teens-basic-1-8': {
    title: 'Class 8: Café Ordering & Menu Questions / Clase 8: Pedidos y preguntas de menú',
    description: 'Reservar esta clase como la interacción principal de comida y servicio.',
    objective: 'Leer opciones, pedir, aclarar y pagar en una cafetería.',
    bridge: 'Level 0 trabajó gustos y la clase 2 hábitos; aquí el resultado es un pedido real.',
    goals: ['Read a simple menu.', 'Order food and a drink.', 'Ask one option or payment question.'],
  },
  'c-teens-basic-1-9': {
    title: 'Class 9: Digital Habits, Purpose & Safety / Clase 9: Hábitos, propósito y seguridad digital',
    description: 'Avanzar de nombrar dispositivos a explicar uso, frecuencia y decisiones seguras.',
    objective: 'Usar use...to y frecuencia para analizar una rutina digital.',
    bridge: 'Level 0 presentó gadgets y have; aquí se trabaja comportamiento digital.',
    goals: ['Explain what a device is used for.', 'Describe frequency and screen time.', 'Give one online safety rule.'],
  },
  'c-teens-basic-2-3': {
    title: 'Class 3: City Navigation & Transport / Clase 3: Navegación urbana y transporte',
    description: 'Describir cómo desplazarse y ubicar destinos dentro de la ciudad.',
    objective: 'Usar go by, city places y direcciones breves para completar una ruta.',
    bridge: 'La clase 8 no repetirá transporte: utilizará este lenguaje para organizar una salida.',
    goals: ['Choose a means of transport.', 'Ask where a destination is.', 'Explain a short route.'],
  },
  'c-teens-basic-2-7': {
    title: 'Class 7: Sports, Health & Habit Frequency / Clase 7: Deportes, salud y frecuencia',
    description: 'Usar frecuencia para evaluar hábitos de salud, no para volver a presentar pasatiempos.',
    objective: 'Describir una semana saludable con deportes, descanso, agua y frecuencia.',
    bridge: 'Level 1 aplicó frecuencia a tecnología; aquí se transfiere a salud y se comparan hábitos.',
    goals: ['Describe a health habit.', 'Use frequency accurately.', 'Recommend one realistic improvement.'],
  },
  'c-teens-basic-2-8': {
    title: 'Class 8: Plan a City Outing / Clase 8: Planificar una salida por la ciudad',
    description: 'Aplicar transporte conocido a sugerencias, acuerdos y organización de una salida.',
    objective: 'Elegir un lugar, proponer transporte y confirmar un plan grupal.',
    bridge: 'La clase 3 enseñó navegación; esta clase usa ese recurso para negociar una experiencia social.',
    goals: ['Suggest a place to go.', 'Agree on transport.', 'Confirm time, meeting point, and activity.'],
  },
  'c-teens-basic-3-1': {
    title: 'Class 1: Schedules, Sequence & Punctuality / Clase 1: Horarios, secuencia y puntualidad',
    description: 'Avanzar de frecuencia a la organización completa de un horario.',
    objective: 'Explicar una jornada mediante horas, before/after y conectores de secuencia.',
    bridge: 'La frecuencia ya fue practicada en salud; ahora importa el orden y la relación entre actividades.',
    goals: ['Build a complete schedule.', 'Use sequence and time expressions.', 'Compare two routines for punctuality.'],
  },
  'c-teens-basic-3-2': {
    title: 'Class 2: Teams, Scores & Fair Comparisons / Clase 2: Equipos, resultados y comparaciones',
    description: 'Ampliar deportes hacia roles, resultados y comparaciones entre equipos.',
    objective: 'Describir un partido y comparar desempeño con lenguaje respetuoso.',
    bridge: 'Level 2 trabajó hábitos deportivos; esta clase se concentra en competencia y colaboración.',
    goals: ['Describe team roles.', 'Report a score or result.', 'Make a fair comparison.'],
  },
  'c-teens-basic-3-6': {
    title: 'Class 6: Travel Stories with Key Past Verbs / Clase 6: Historias de viaje con verbos del pasado',
    description: 'Introducir en contexto los verbos regulares e irregulares necesarios para narrar.',
    objective: 'Contar una experiencia de viaje con acciones pasadas, lugares y marcadores de tiempo.',
    bridge: 'Was/were preparó estados y lugares; aquí se añaden acciones antes de biografías y storytelling.',
    goals: ['Use key regular and irregular past verbs.', 'Describe a travel sequence.', 'Ask one past-tense follow-up question.'],
  },
  'c-teens-basic-4-3': {
    title: 'Class 3: Facts, Causes & Zero Conditional / Clase 3: Hechos, causas y condicional cero',
    description: 'Diferenciar resultados generales del primer condicional para planes futuros.',
    objective: 'Usar if + present, present para reglas, hechos y consecuencias habituales.',
    bridge: 'La clase 5 desarrollará situaciones futuras reales con will; aquí se trabajan resultados generales.',
    goals: ['Recognize a general cause-and-effect relation.', 'Build zero-conditional sentences.', 'Separate facts from future possibilities.'],
    teachingPoints: [
      { title: 'General Results / Resultados generales', content: ['If you heat ice, it melts.', 'If teens sleep well, they concentrate better.', 'Both parts use present simple.'] },
      { title: 'Rules and Habits / Reglas y hábitos', content: ['If I study early, I feel calmer.', 'If the bell rings, students enter class.', 'The result normally happens.'] },
      { title: 'Cause and Effect / Causa y efecto', content: ['Cause: if-clause', 'Effect: result clause', 'You may change the order without changing meaning.'] },
      { title: 'Not a Future Plan / No es un plan futuro', content: ['Zero: a repeated or general result', 'First: one real future possibility', 'Compare meaning before choosing a form.'] },
      { title: 'Explain a Real Pattern / Explicar un patrón', content: ['Choose school, health, or technology.', 'State the condition.', 'Add a logical repeated result.'] },
    ],
    production: ['Create one school fact, one health pattern, and one technology rule.', 'Explain why each result is logical.', 'Change the order of one sentence.'],
    homework: ['Write six zero-conditional sentences.', 'Use two topics: habits and science.', 'Underline the cause and circle the result.'],
  },
  'c-teens-basic-4-4': {
    title: 'Class 4: Clear Online Messages & Digital Etiquette / Clase 4: Mensajes claros y etiqueta digital',
    description: 'Concentrarse en claridad, tono y seguridad de chats cotidianos.',
    objective: 'Escribir un mensaje breve con saludo, propósito, detalle y cierre adecuados.',
    bridge: 'La clase 9 comparará registros formales e informales; esta clase resuelve claridad en chats cotidianos.',
    goals: ['Write a clear chat message.', 'Use a respectful digital tone.', 'Repair an unclear or unsafe message.'],
  },
  'c-teens-basic-4-8': {
    title: 'Class 8: Friendship Boundaries & Polite Requests / Clase 8: Límites y peticiones entre amigos',
    description: 'Avanzar de consejos generales a límites, peticiones y respuestas respetuosas.',
    objective: 'Usar could, would you mind y I need para resolver un conflicto entre amigos.',
    bridge: 'La clase 2 enseñó should para aconsejar; aquí se negocian necesidades sin repetir esa estructura.',
    goals: ['State a personal need calmly.', 'Make a polite request.', 'Agree on a respectful solution.'],
    teachingPoints: [
      { title: 'State the Situation / Explicar la situación', content: ['I feel distracted when messages arrive late.', 'I need quiet time to study.', 'Describe the problem without attacking the person.'] },
      { title: 'Make a Polite Request / Hacer una petición', content: ['Could you text me before calling?', 'Would you mind lowering the music?', 'Please ask before sharing my photo.'] },
      { title: 'Set a Boundary / Establecer un límite', content: ["I'm not comfortable with that.", 'I prefer not to share my password.', 'I can help, but I cannot do the whole project.'] },
      { title: 'Respond Respectfully / Responder con respeto', content: ['I understand. I can do that.', "I'm sorry; I didn't realize.", 'Can we find another solution?'] },
      { title: 'Agree on a Solution / Acordar una solución', content: ["Let's turn notifications off while we study.", 'We can ask before posting.', 'Confirm what each person will do.'] },
    ],
    context: ['Mia: Could you ask before posting photos of me?', "Leo: Of course. I'm sorry; I didn't realize.", 'Mia: Thanks. I am happy to share some photos, but not all.', 'Leo: That is fair. We can choose them together.'],
    production: ['Explain one friendship problem without blame.', 'Make a polite request or boundary.', 'Negotiate one solution both people accept.'],
    roleplay: ['Student A explains a boundary about messages, photos, time, or possessions.', 'Student B listens, responds, and proposes a solution.', 'Finish by confirming the agreement.'],
    homework: ['Write a six-line conflict-resolution chat.', 'Include a feeling, a polite request, and a solution.', 'Avoid aggressive commands.'],
  },
  'c-teens-basic-4-9': {
    title: 'Class 9: Formal vs Informal Messages / Clase 9: Mensajes formales e informales',
    description: 'Comparar registro, apertura, petición y cierre según destinatario y propósito.',
    objective: 'Transformar un chat informal en un correo apropiado para un profesor o servicio.',
    bridge: 'La clase 4 resolvió claridad en chats; aquí cambia el registro para audiencias diferentes.',
    goals: ['Recognize formal and informal register.', 'Rewrite a request for a new audience.', 'Use an appropriate opening and closing.'],
  },
  'c-teens-inter-7': {
    title: 'Class 7: Ongoing Goals & Present Perfect Continuous / Clase 7: Metas en progreso y Present Perfect Continuous',
    description: 'Extender experiencias terminadas hacia actividades que continúan y resultados visibles.',
    objective: 'Contrastar have done con have been doing al presentar una meta personal.',
    bridge: 'La clase 1 introdujo experiencias; esta clase añade duración, proceso y evidencia de progreso.',
    goals: ['Describe an ongoing activity.', 'Use for and since accurately.', 'Compare completed result with ongoing process.'],
    teachingPoints: [
      { title: 'Completed Experience / Experiencia completada', content: ['I have finished three projects.', 'Focus: result or achievement', 'Present perfect: have/has + past participle'] },
      { title: 'Ongoing Process / Proceso en curso', content: ['I have been learning guitar for six months.', 'Focus: duration or repeated activity', 'have/has been + verb-ing'] },
      { title: 'For and Since / Duración e inicio', content: ['for two weeks', 'since January', 'Ask: How long have you been...?'] },
      { title: 'Evidence of Progress / Evidencia de progreso', content: ['I can now play five songs.', 'My grades have improved.', 'Connect the process with a visible result.'] },
      { title: 'Goal Update / Informe de meta', content: ['State the goal.', 'Explain how long you have worked on it.', 'Share progress and next step.'] },
    ],
    production: ['Give a 45-second progress update.', 'Use present perfect and present perfect continuous.', 'Include duration, result, and next step.'],
    homework: ['Write a progress report about one real or fictional goal.', 'Use for, since, have done, and have been doing.', 'Finish with the next action.'],
  },
  'c-teens-inter-8': {
    title: 'Class 8: Phrasal Verbs for Stories & Problem-Solving / Clase 8: Phrasal verbs para historias y soluciones',
    description: 'Pasar de reconocer phrasal verbs a seleccionarlos para narrar y resolver problemas.',
    objective: 'Usar phrasal verbs en una historia coherente y deducir significado por contexto.',
    bridge: 'La clase 2 presentó phrasal verbs frecuentes; aquí se aplican en secuencia y contexto.',
    goals: ['Infer a phrasal verb from context.', 'Use multiword verbs in a story.', 'Replace vague verbs with precise choices.'],
  },
  'c-teens-inter-9': {
    title: 'Class 9: Evidence-Based Deductions / Clase 9: Deducciones basadas en evidencia',
    description: 'Avanzar de posibilidad general a conclusiones justificadas mediante pistas.',
    objective: 'Usar must, might, could y can’t para construir y defender una deducción.',
    bridge: 'La clase 3 presentó los modales; aquí cada deducción necesita evidencia explícita.',
    goals: ['Distinguish certainty levels.', 'Connect a clue to a deduction.', 'Defend and revise a conclusion.'],
  },
  'c-teens-inter-10': {
    title: 'Class 10: Conditional Decision Lab / Clase 10: Laboratorio de decisiones condicionales',
    description: 'Comparar primer y segundo condicional dentro de decisiones reales e hipotéticas.',
    objective: 'Elegir el condicional adecuado, evaluar consecuencias y justificar una decisión.',
    bridge: 'La clase 4 trabajó escenarios imaginarios; aquí se comparan probabilidades y decisiones.',
    goals: ['Separate real and hypothetical conditions.', 'Predict consequences.', 'Choose and defend one decision.'],
  },
  'c-teens-inter-11': {
    title: 'Class 11: Debate Responses & Respectful Rebuttals / Clase 11: Respuestas y refutaciones respetuosas',
    description: 'Avanzar de expresar acuerdo a responder argumentos con razones y evidencia.',
    objective: 'Reconocer el punto contrario, formular una refutación y sostenerla con un ejemplo.',
    bridge: 'La clase 5 presentó acuerdo y desacuerdo; aquí se construye una respuesta de debate.',
    goals: ['Acknowledge another viewpoint.', 'State a focused rebuttal.', 'Support it with evidence or example.'],
  },
  'c-teens-advanced-5': {
    title: 'Class 5: Reporting Verbs, Questions & Source Accuracy / Clase 5: Verbos de reporte, preguntas y precisión de fuentes',
    description: 'Extender reported speech hacia reporting verbs, preguntas indirectas y atribución responsable.',
    objective: 'Reportar información con claim, admit, explain, deny y ask, manteniendo clara la fuente.',
    bridge: 'La clase 1 enseñó cambios básicos de reported speech; aquí importa intención y credibilidad.',
    goals: ['Choose an accurate reporting verb.', 'Report questions and requests.', 'Attribute information to a source.'],
    teachingPoints: [
      { title: 'Reporting Verb Meaning / Significado del verbo de reporte', content: ['say / explain / claim / admit / deny', 'The verb shows the speaker’s purpose or position.', 'Choose it from evidence, not personal bias.'] },
      { title: 'Report Questions / Reportar preguntas', content: ['She asked where the event was.', 'He wanted to know whether the post was real.', 'Use statement word order.'] },
      { title: 'Report Requests / Reportar peticiones', content: ['She asked me to delete the photo.', 'They told us not to share the link.', 'verb + person + to-infinitive'] },
      { title: 'Attribute the Source / Atribuir la fuente', content: ['According to the school notice,...', 'The witness explained that...', 'Separate verified fact from online claim.'] },
      { title: 'Accuracy Check / Control de precisión', content: ['Keep the original meaning.', 'Do not strengthen uncertain information.', 'Mention who said it and where it appeared.'] },
    ],
    production: ['Compare three reports of the same event.', 'Use different reporting verbs accurately.', 'Identify one claim that still needs verification.'],
    homework: ['Rewrite a short chat or news post using five reporting verbs.', 'Include one reported question and one request.', 'Mark the source of every claim.'],
  },
  'c-teens-advanced-6': {
    title: 'Class 6: Non-Defining & Reduced Relative Clauses / Clase 6: Relative clauses explicativas y reducidas',
    description: 'Extender who/which/that hacia precisión, información adicional y reducción de cláusulas.',
    objective: 'Combinar información mediante defining, non-defining y reduced relative clauses.',
    bridge: 'La clase 2 presentó relative clauses básicas; aquí se controla puntuación y densidad informativa.',
    goals: ['Distinguish essential and extra information.', 'Use commas accurately.', 'Reduce a clause when meaning remains clear.'],
  },
  'c-teens-advanced-7': {
    title: 'Class 7: Passive Reporting & Technology Processes / Clase 7: Reporte pasivo y procesos tecnológicos',
    description: 'Extender la voz pasiva desde procesos simples hacia noticias y lenguaje impersonal.',
    objective: 'Usar is said to, is believed to y pasivas de proceso para explicar tecnología y noticias.',
    bridge: 'La clase 3 presentó la forma pasiva; aquí se usa para foco, proceso y distancia informativa.',
    goals: ['Describe a process in passive voice.', 'Use an impersonal reporting structure.', 'Choose active or passive for a clear reason.'],
  },
  'c-teens-advanced-8': {
    title: 'Class 8: Idioms, Collocations & Register / Clase 8: Idioms, colocaciones y registro',
    description: 'Avanzar de reconocer idioms hacia seleccionar expresiones naturales según audiencia.',
    objective: 'Usar idioms y collocations sin forzarlos y adaptar el registro al contexto.',
    bridge: 'La clase 4 introdujo idioms en contexto; aquí se evalúa naturalidad, colocación y tono.',
    goals: ['Build accurate collocations.', 'Choose an idiom for the context.', 'Rewrite language for a different register.'],
  },
  'c-teens-elite-1': {
    title: 'Class 1: Goal Setting & Strategic Roadmaps / Clase 1: Metas y hojas de ruta estratégicas',
    description: 'Definir una meta de largo plazo mediante hitos, estrategia e indicadores de progreso.',
    objective: 'Presentar una hoja de ruta realista que conecte meta, hitos, acciones y medición.',
    bridge: 'Los niveles anteriores expresaron planes; aquí se construye una estrategia medible antes de estudiar tiempos futuros avanzados.',
    goals: ['Define a precise long-term goal.', 'Sequence milestones and actions.', 'Explain how progress will be measured.'],
  },
  'c-teens-elite-2': {
    title: 'Class 2: Past Decisions & Modal Deduction / Clase 2: Decisiones pasadas y deducción modal',
    description: 'Interpretar decisiones pasadas mediante evidencia y grados de certeza, sin adelantar los mixed conditionals de la clase 7.',
    objective: 'Usar must have, might have y can’t have para evaluar qué probablemente ocurrió y por qué.',
    bridge: 'Esta clase trabaja inferencia sobre el pasado; la relación condicional entre pasado y presente se reserva para la clase 7.',
    goals: ['Separate fact from inference.', 'Express three degrees of past certainty.', 'Support a deduction with available evidence.'],
  },
  'c-teens-elite-3': {
    title: 'Class 3: Hedging & Nuanced Positions / Clase 3: Hedging y posiciones matizadas',
    description: 'Expresar acuerdo, duda y límites con un tono preciso y diplomático.',
    objective: 'Construir una postura matizada mediante hedging, concesión y cautela.',
    bridge: 'Esta clase establece el control de tono; la clase 8 añadirá cleft sentences e inversión para énfasis formal.',
    goals: ['Qualify a claim appropriately.', 'Express partial agreement.', 'Balance confidence with caution.'],
  },
  'c-teens-elite-4': {
    title: 'Class 4: Academic Argument Structure / Clase 4: Estructura de la argumentación académica',
    description: 'Organizar tesis, claim, evidencia y contraargumento dentro de un párrafo académico.',
    objective: 'Escribir y revisar un argumento académico breve con una estructura verificable.',
    bridge: 'Aquí se construye la arquitectura escrita; la clase 9 transformará el argumento en presentación y defensa oral.',
    goals: ['State a focused thesis.', 'Connect a claim with relevant evidence.', 'Acknowledge and answer a counterargument.'],
  },
  'c-teens-elite-5': {
    title: 'Class 5: Leadership Styles & Team Strengths / Clase 5: Estilos de liderazgo y fortalezas de equipo',
    description: 'Analizar estilos de liderazgo y asignar responsabilidades según fortalezas reales.',
    objective: 'Justificar cómo organizar un equipo, delegar tareas y ofrecer retroalimentación útil.',
    bridge: 'Esta clase decide cómo liderar y distribuir trabajo; la clase 10 aplicará esas decisiones al facilitar una reunión.',
    goals: ['Compare leadership approaches.', 'Match tasks to team strengths.', 'Give actionable feedback.'],
  },
  'c-teens-elite-6': {
    title: 'Class 6: Future Timelines & Goal Forecasting / Clase 6: Líneas de tiempo futuras y proyección de metas',
    description: 'Aplicar Future Continuous y Future Perfect a hitos medibles de una meta.',
    objective: 'Presentar qué estará ocurriendo y qué se habrá completado en distintos puntos del futuro.',
    bridge: 'La clase 1 definió visión y metas; aquí se construye la línea de tiempo gramatical precisa.',
    goals: ['Use future continuous for an in-progress stage.', 'Use future perfect for a completed milestone.', 'Present a realistic goal timeline.'],
  },
  'c-teens-elite-7': {
    title: 'Class 7: Mixed Conditionals & Decision Consequences / Clase 7: Condicionales mixtos y consecuencias',
    description: 'Aplicar condicionales mixtos a decisiones donde pasado y presente se conectan.',
    objective: 'Analizar cómo una decisión pasada afecta el presente o cómo una condición actual habría cambiado el pasado.',
    bridge: 'La clase 2 trabajó decisiones y reflexión; aquí se exige control formal de las relaciones temporales.',
    goals: ['Identify the two time references.', 'Build both mixed-conditional patterns.', 'Evaluate a decision without oversimplifying it.'],
  },
  'c-teens-elite-8': {
    title: 'Class 8: Diplomatic Emphasis - Clefts & Inversion / Clase 8: Énfasis diplomático - Clefts e inversión',
    description: 'Añadir énfasis formal sin perder el tono diplomático trabajado anteriormente.',
    objective: 'Usar cleft sentences e inversión para destacar ideas con control de tono.',
    bridge: 'La clase 3 desarrolló hedging y nuance; aquí se añade arquitectura de énfasis.',
    goals: ['Build a cleft sentence.', 'Use one inversion pattern.', 'Balance emphasis with diplomatic language.'],
  },
  'c-teens-elite-9': {
    title: 'Class 9: Academic Presentation, Defense & Q&A / Clase 9: Presentación académica, defensa y preguntas',
    description: 'Transformar escritura académica en una presentación defendible ante preguntas.',
    objective: 'Presentar una tesis, sintetizar apoyo y responder preguntas académicas con cautela.',
    bridge: 'La clase 4 construyó argumentos escritos; aquí se convierten en speaking y defensa oral.',
    goals: ['Present a focused thesis.', 'Summarize supporting evidence.', 'Answer a challenging question with academic caution.'],
  },
  'c-teens-elite-10': {
    title: 'Class 10: Meeting Facilitation & Team Decisions / Clase 10: Facilitación de reuniones y decisiones de equipo',
    description: 'Avanzar de liderazgo personal a dirigir una reunión con agenda, turnos y acuerdos.',
    objective: 'Facilitar una reunión, distribuir participación y cerrar con decisiones y responsables.',
    bridge: 'La clase 5 presentó liderazgo y fortalezas; aquí se aplica a una reunión formal.',
    goals: ['Open and guide an agenda.', 'Invite and balance participation.', 'Confirm decisions, owners, and deadlines.'],
  },
  'c-teens-elite-11': {
    title: 'Class 11: Entrepreneurship & Conference Pitch / Clase 11: Pitch de emprendimiento o conferencia',
    description: 'Integrar problema, audiencia, propuesta de valor, evidencia y llamado a la acción en un proyecto final.',
    objective: 'Presentar y defender un pitch breve, claro y convincente ante preguntas de una audiencia.',
    bridge: 'El proyecto combina estrategia, diplomacia, argumentación, liderazgo y presentación sin volver a enseñar cada componente.',
    goals: ['Define a relevant audience problem.', 'Present a distinctive value proposition.', 'Close and defend the pitch with a clear call to action.'],
  },
  'c-teens-masters-5': {
    title: 'Class 5: Competitive Debate Strategy / Clase 5: Estrategia de debate competitivo',
    description: 'Aplicar pensamiento crítico a casos, cargas de prueba, refutación y cierre estratégico.',
    objective: 'Construir y responder un caso de debate con evidencia, impacto y priorización.',
    bridge: 'La clase 1 desarrolló pensamiento crítico; esta clase lo convierte en desempeño competitivo.',
    goals: ['Build a claim-evidence-impact chain.', 'Identify the burden of proof.', 'Deliver a prioritized rebuttal.'],
  },
  'c-teens-masters-6': {
    title: 'Class 6: Comparative Media Analysis & Framing / Clase 6: Análisis comparativo de medios y framing',
    description: 'Comparar cómo dos medios construyen el mismo tema mediante selección, tono y encuadre.',
    objective: 'Sostener una lectura crítica basada en evidencia lingüística y visual.',
    bridge: 'La clase 2 introdujo cultura y medios; aquí se comparan fuentes y estrategias de framing.',
    goals: ['Compare two representations.', 'Identify framing and omission.', 'Support analysis with precise evidence.'],
  },
  'c-teens-masters-7': {
    title: 'Class 7: Research Seminar & Source Synthesis / Clase 7: Seminario de investigación y síntesis de fuentes',
    description: 'Avanzar de inglés universitario general a integrar y discutir varias fuentes.',
    objective: 'Sintetizar perspectivas, atribuir evidencia y responder preguntas de seminario.',
    bridge: 'La clase 3 presentó herramientas académicas; aquí se produce una síntesis oral investigativa.',
    goals: ['Synthesize two source positions.', 'Attribute and qualify evidence.', 'Lead a short seminar exchange.'],
  },
  'c-teens-masters-8': {
    title: 'Class 8: Content Production Studio / Clase 8: Estudio de producción de contenido',
    description: 'Convertir principios de TED Talks y creación en un proceso completo de guion, edición y entrega.',
    objective: 'Diseñar, revisar y presentar una pieza pública coherente para una audiencia real.',
    bridge: 'La clase 4 estudió modelos y recursos; aquí se ejecuta el proyecto de producción.',
    goals: ['Define audience and purpose.', 'Revise structure and delivery.', 'Publish or present a polished final piece.'],
  },
  'c-teens-masters-10': {
    title: 'Class 10: C1 Interview & Conversation Club / Clase 10: Entrevista C1 y club de conversación',
    description: 'Cerrar el recorrido con entrevista, conversación espontánea y reflexión sobre próximos objetivos.',
    objective: 'Responder con precisión, desarrollar ideas y reparar la comunicación bajo presión.',
    bridge: 'Este cierre evalúa integración C1; no promete automáticamente dominio C2.',
    goals: ['Handle an extended interview response.', 'Develop and defend an idea spontaneously.', 'Set a realistic next learning goal.'],
  },
};

const classProgression: Record<CurriculumAudience, Record<string, ClassProgression>> = {
  adulto: adultClassProgression,
  niño: kidsClassProgression,
  adolescente: teenClassProgression,
};

function findObjectivesSlide(cls: CurriculumClass): ClassSlide | undefined {
  const warmupSlides = cls.sections[0]?.slides || [];
  return warmupSlides.find((slide) => /objective|goal|objetivo/i.test(slide.title)) || warmupSlides[2];
}

function findRoleplaySlide(cls: CurriculumClass): ClassSlide | undefined {
  const slides = cls.sections[3]?.slides || [];
  return slides.find((slide) => slide.type === 'roleplay' || /roleplay|juego de roles|share|comparte/i.test(slide.title));
}

function findHomeworkSlide(cls: CurriculumClass): ClassSlide | undefined {
  const slides = cls.sections[4]?.slides || [];
  return slides.find((slide) => slide.type === 'homework' || /homework|tarea/i.test(slide.title));
}

function patchChoiceSlide(slide: ClassSlide | undefined, title: string, prompt: string, options: [string, string, string], correctOptionIndex: number) {
  if (!slide) return;
  slide.title = title;
  slide.content = [prompt];
  slide.options = options;
  slide.correctOptionIndex = correctOptionIndex;
}

function sentenceError(sentence: string): string {
  const words = sentence.replace(/[.!?]+$/g, '').split(/\s+/).filter(Boolean);
  if (words.length < 4) return `Not ${sentence.toLowerCase()}`;
  return `${words[1]} ${words[0].toLowerCase()} ${words.slice(2).join(' ')}.`;
}

function answerRotation(id: string, offset: number): 0 | 1 | 2 {
  return ((Array.from(id).reduce((sum, char) => sum + char.charCodeAt(0), 0) + offset) % 3) as 0 | 1 | 2;
}

function rotateAnswer(options: [string, string, string], correctOptionIndex: 0 | 1 | 2, shift: 0 | 1 | 2) {
  if (shift === 0) return { options, correctOptionIndex };
  const correct = options[correctOptionIndex];
  const rotated = [...options.slice(shift), ...options.slice(0, shift)] as [string, string, string];
  return { options: rotated, correctOptionIndex: rotated.indexOf(correct) as 0 | 1 | 2 };
}

function progressionFromKernel(cls: CurriculumClass, kernel: TeenLessonKernel): ClassProgression {
  return {
    title: cls.title,
    description: kernel.mission,
    objective: kernel.mission,
    bridge: `This lesson advances toward a new applied result: ${kernel.mission}`,
    goals: [
      `Use ${kernel.keywords[0]}, ${kernel.keywords[1]}, and related language accurately.`,
      `Build connected examples such as: ${kernel.models[0]}`,
      kernel.mission,
    ],
    teachingPoints: [
      { title: 'Core Language / Lenguaje central', content: [kernel.models[0], kernel.models[1], kernel.models[2]] },
      { title: 'Key Vocabulary / Vocabulario clave', content: [...kernel.keywords] },
      { title: 'Form and Meaning / Forma y significado', content: [kernel.models[0], `Notice how the target language supports this outcome: ${kernel.mission}`, 'Meaning and communicative purpose come before memorization.'] },
      { title: 'Accuracy Contrast / Contraste de precisión', content: [`Accurate: ${kernel.models[1]}`, `Correct this: ${sentenceError(kernel.models[1])}`, 'Explain the change before moving on.'] },
      { title: 'Applied Model / Modelo aplicado', content: [kernel.models[2], kernel.mission, 'Add one reason, detail, or follow-up question.'] },
    ],
    context: [...kernel.models],
    production: [kernel.mission, `Use at least two of these: ${kernel.keywords.join(', ')}.`, 'Add a reason, example, or follow-up question.'],
    roleplay: ['Student A presents the situation or first position.', 'Student B asks for detail, evidence, or clarification.', 'Switch roles and improve the final response.'],
    homework: [kernel.mission, `Use these key words: ${kernel.keywords.join(', ')}.`, 'Write or record a complete response and revise one weak sentence.'],
  };
}

function emojiClue(kernel: TeenLessonKernel): string {
  const text = `${kernel.keywords.join(' ')} ${kernel.mission}`.toLowerCase();
  const clues: Array<[RegExp, string]> = [
    [/schedule|time|routine|punctual/, '⏰ + 📅 + ✅'],
    [/sport|team|score|competition/, '🏃 + 🏆 + 👥'],
    [/holiday|festival|tradition|celebrat/, '🎉 + 👨‍👩‍👧 + 🌟'],
    [/space|planet|astronaut|science/, '🚀 + 🪐 + 🔭'],
    [/childhood|memory/, '👶 + 📸 + 💭'],
    [/travel|journey|visited|went/, '✈️ + 🗺️ + 📸'],
    [/biograph|was born|achievement/, '👤 + 📅 + 🏅'],
    [/story|connector|narrat/, '📖 + 🔗 + 🎬'],
    [/problem|solution|customer|issue/, '⚠️ + 🧠 + ✅'],
    [/video|podcast|content|production|ted/, '🎥 + 🎙️ + ✨'],
    [/opinion|debate|claim|rebuttal/, '💬 + ⚖️ + 🧠'],
    [/advice|boundary|request/, '🤝 + 💡 + 🗣️'],
    [/condition|if |consequence/, '🔀 + 💭 + 🎯'],
    [/message|email|online|digital/, '📱 + ✍️ + 🔒'],
    [/compar|more|most|too|enough/, '⚖️ + 📏 + ✅'],
    [/experience|present perfect|ongoing|progress/, '🌍 + ⏳ + ⭐'],
    [/phrasal|idiom|collocation/, '🔗 + 🗣️ + 💡'],
    [/deduction|clue|certainty|assumption/, '🔍 + 🧩 + 💭'],
    [/report|source|news|passive/, '📰 + 💬 + 🔁'],
    [/relative|clause/, '👤 + 🧩 + 📝'],
    [/future|goal|milestone|timeline/, '🎯 + 📅 + 🚀'],
    [/academic|research|seminar|thesis/, '📚 + 🔎 + 🎓'],
    [/leadership|meeting|agenda|team/, '👥 + 📋 + ✅'],
    [/media|framing|culture/, '📺 + 📰 + 🧠'],
    [/ethic|global|stakeholder|trade-off/, '🌍 + ⚖️ + 💬'],
    [/interview/, '🎤 + 💬 + ⭐'],
  ];
  return clues.find(([pattern]) => pattern.test(text))?.[1] || '🧠 + 💬 + 🎯';
}

function contentIsMissingOrPlaceholder(slide: ClassSlide) {
  if (!slide.content?.length) return true;
  return slide.content.some((line) => /example [ab]|word [123]|important topic/i.test(line));
}

function completeTeenClass(cls: CurriculumClass, kernel: TeenLessonKernel, spec: ClassProgression) {
  const grammar = cls.sections[1]?.slides || [];
  const points = spec.teachingPoints || progressionFromKernel(cls, kernel).teachingPoints || [];
  grammar.slice(0, 5).forEach((slide, index) => {
    if (!contentIsMissingOrPlaceholder(slide)) return;
    const point = points[index];
    if (!point) return;
    slide.title = point.title;
    slide.description = 'New learning / Aprendizaje nuevo';
    slide.content = point.content;
  });

  if (grammar[5] && contentIsMissingOrPlaceholder(grammar[5])) {
    grammar[5].title = 'Pronunciation & Delivery / Pronunciación y expresión';
    grammar[5].description = 'Say the model naturally and make the key meaning easy to hear.';
    grammar[5].content = [`Focus phrase: ${kernel.models[0]}`, `Stress the key words: ${kernel.keywords[0]} and ${kernel.keywords[1]}.`, 'Say it once slowly, then once at natural speed.'];
  }
  if (grammar[6] && contentIsMissingOrPlaceholder(grammar[6])) {
    grammar[6].title = 'Meaning Check / Comprobación de significado';
    grammar[6].description = 'Explain the choice before continuing.';
    grammar[6].content = [kernel.mission, `Use this accurate model: ${kernel.models[1]}`, `Correct this version: ${sentenceError(kernel.models[1])}`];
  }

  const practice = cls.sections[2]?.slides || [];
  if (practice[0] && contentIsMissingOrPlaceholder(practice[0])) {
    practice[0].title = 'Context Challenge / Reto de contexto';
    practice[0].description = 'Read, notice, and adapt the target language.';
    practice[0].content = spec.context || [...kernel.models];
  }

  const choices: Array<{ title: string; prompt: string; correct: string; wrongA: string; wrongB: string }> = [
    { title: 'Meaning Check 1 / Comprensión 1', prompt: `Choose the accurate sentence for ${kernel.keywords[0]}.`, correct: kernel.models[0], wrongA: sentenceError(kernel.models[0]), wrongB: 'The meaning is unrelated to today’s situation.' },
    { title: 'Meaning Check 2 / Comprensión 2', prompt: 'Choose the sentence with clear English word order.', correct: kernel.models[1], wrongA: sentenceError(kernel.models[1]), wrongB: `${kernel.keywords[1]} because sentence no complete.` },
    { title: 'Application Check / Aplicación', prompt: `Which response best supports this mission: ${kernel.mission}`, correct: kernel.models[2], wrongA: sentenceError(kernel.models[2]), wrongB: 'I can only list words without connecting an idea.' },
  ];
  choices.forEach((choice, index) => {
    const slide = practice[index + 1];
    if (!slide) return;
    const rotated = rotateAnswer([choice.correct, choice.wrongA, choice.wrongB], 0, answerRotation(cls.id, index));
    slide.type = 'normal';
    patchChoiceSlide(slide, choice.title, choice.prompt, rotated.options, rotated.correctOptionIndex);
  });
  if (practice[4]) {
    practice[4].title = 'Retrieval Review / Repaso de recuperación';
    practice[4].description = 'Retrieve the language before seeing the answer.';
    practice[4].content = [spec.goals[0], spec.goals[1], spec.goals[2]];
  }
  const emoji = practice.find((slide) => slide.type === 'emoji-game');
  if (emoji) {
    const rotated = rotateAnswer([kernel.models[0], 'The train arrives at seven every morning.', 'We bought fruit and water at the market.'], 0, answerRotation(cls.id, 5));
    emoji.title = 'Emoji Mission / Misión emoji';
    emoji.description = `Decode the visual clue using ${kernel.keywords[0]} and today’s context.`;
    emoji.content = [emojiClue(kernel)];
    emoji.options = rotated.options;
    emoji.correctOptionIndex = rotated.correctOptionIndex;
  }

  const production = cls.sections[3]?.slides || [];
  const speaking = production.find((slide) => slide.type === 'speaking') || production.find((slide) => !slide.options && slide.type !== 'speaking-boss-battle');
  if (speaking && contentIsMissingOrPlaceholder(speaking)) {
    speaking.title = 'Applied Speaking / Producción aplicada';
    speaking.description = 'Complete the new communicative outcome.';
    speaking.content = spec.production || [kernel.mission, `Use ${kernel.keywords.join(', ')}.`, 'Add a reason, example, or follow-up question.'];
  }
  const roleplay = production.find((slide) => slide.type === 'roleplay');
  if (roleplay && contentIsMissingOrPlaceholder(roleplay)) {
    roleplay.title = 'Applied Roleplay / Roleplay aplicado';
    roleplay.description = 'Use the target language in a realistic exchange.';
    roleplay.content = spec.roleplay || ['Student A presents the situation or first position.', 'Student B asks for detail, evidence, or clarification.', 'Switch roles and improve the final response.'];
  }
  const share = production.find((slide) => /share/i.test(slide.title));
  if (share && contentIsMissingOrPlaceholder(share)) {
    share.title = 'Share, Question, Improve / Presentar, preguntar y mejorar';
    share.description = 'A short second attempt should be stronger than the first.';
    share.content = [kernel.mission, 'A partner asks one specific follow-up question.', 'Repeat one sentence with clearer detail or accuracy.'];
  }

  const wrap = cls.sections[4];
  if (wrap) {
    const firstImage = cls.sections.flatMap((section) => section.slides).find((slide) => slide.imageUrl)?.imageUrl;
    const currentVideo = wrap.slides.find((slide) => slide.type === 'video') || wrap.slides[wrap.slides.length - 1];
    const summary = wrap.slides.find((slide) => /complete|summary|great job|class complete/i.test(slide.title));
    const homework = wrap.slides.find((slide) => slide.type === 'homework');
    if (!summary) {
      wrap.slides.unshift({
        id: `${cls.id}-progression-summary`,
        title: 'Class Complete! / ¡Clase completada!',
        description: 'Progression achieved / Progresión lograda',
        content: [kernel.mission, `Key language: ${kernel.keywords.join(', ')}.`],
        imageUrl: firstImage,
        bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      });
    }
    if (!homework) {
      const videoIndex = currentVideo ? wrap.slides.indexOf(currentVideo) : wrap.slides.length;
      wrap.slides.splice(Math.max(1, videoIndex), 0, {
        id: `${cls.id}-progression-homework`,
        title: 'Homework / Tarea',
        description: 'Transfer the language to a new example.',
        type: 'homework',
        content: spec.homework || [kernel.mission, `Use ${kernel.keywords.join(', ')}.`, 'Revise one sentence after checking form and meaning.'],
        bgColor: 'bg-gradient-to-br from-violet-500 to-fuchsia-600',
      });
    }
    if (currentVideo) {
      currentVideo.type = 'video';
      currentVideo.title = 'Video Homework 📹 / Tarea en video 📹';
      currentVideo.description = 'Watch, notice, and transfer the language.';
      currentVideo.content = [`Watch the video connected to ${kernel.keywords[0]}.`, `Write five useful phrases, including ${kernel.keywords[1]} and ${kernel.keywords[2]}.`, `Use one phrase to support this mission: ${kernel.mission}`];
      currentVideo.bgColor = currentVideo.bgColor || 'bg-gradient-to-br from-slate-800 to-indigo-900';
    }
  }

  for (const section of cls.sections) {
    for (const slide of section.slides) {
      if (!slide.content?.length) slide.content = [kernel.mission, `Use ${kernel.keywords.join(', ')}.`, 'Give one connected example.'];
      if (slide.options?.length === 3 && slide.correctOptionIndex === undefined) slide.correctOptionIndex = 0;
    }
  }
}

function applyClassProgression(cls: CurriculumClass, spec: ClassProgression) {
  cls.title = spec.title;
  cls.description = spec.description;
  cls.objective = spec.objective;

  const welcome = cls.sections[0]?.slides[0];
  if (welcome) {
    welcome.title = spec.title.replace(/^Class\s+\d+:\s*/i, '').replace(/^Clase\s+\d+:\s*/i, '');
    welcome.description = 'Progression focus / Enfoque de progresión';
    welcome.content = [spec.bridge, spec.objective, `Final mission: ${spec.goals[2]}`];
  }

  const objectives = findObjectivesSlide(cls);
  if (objectives) {
    objectives.title = 'Progression Goals 🎯 / Metas de progresión 🎯';
    objectives.content = spec.goals;
  }

  const grammarSection = cls.sections[1];
  if (grammarSection) {
    grammarSection.objective = spec.objective;
    grammarSection.action = 'Conectar cada punto nuevo con lo aprendido anteriormente y evitar volver a presentar vocabulario ya dominado.';
    spec.teachingPoints?.forEach((point, index) => {
      const slide = grammarSection.slides[index];
      if (!slide) return;
      slide.title = point.title;
      slide.description = 'New learning / Aprendizaje nuevo';
      slide.content = point.content;
    });
  }

  const practiceSection = cls.sections[2];
  if (practiceSection) {
    practiceSection.objective = `Comprobar comprensión del nuevo resultado: ${spec.goals[2]}`;
    practiceSection.action = 'Usar las preguntas básicas como recuperación breve y exigir una justificación conectada con el nuevo objetivo.';
    const contextSlide = practiceSection.slides[0];
    if (contextSlide && spec.context) {
      contextSlide.title = 'Progression Context / Contexto de progresión';
      contextSlide.content = spec.context;
    }
  }

  const productionSection = cls.sections[3];
  if (productionSection) {
    productionSection.objective = `Producir una respuesta completa: ${spec.goals[2]}`;
    productionSection.action = 'No aceptar listas aisladas: pedir una respuesta completa, una razón y una pregunta de seguimiento cuando el nivel lo permita.';
    const productionSlide = productionSection.slides.find((slide) => !slide.options && slide.type !== 'speaking-boss-battle');
    if (productionSlide && spec.production) {
      productionSlide.title = 'Progression Speaking Challenge / Reto oral de progresión';
      productionSlide.content = spec.production;
    }
    const roleplay = findRoleplaySlide(cls);
    if (roleplay && spec.roleplay) {
      roleplay.title = 'Applied Roleplay / Roleplay aplicado';
      roleplay.content = spec.roleplay;
      if (roleplay.roleplay) {
        roleplay.roleplay.mission = spec.roleplay;
        roleplay.roleplay.successChecklist = [
          'Completed the new communicative outcome',
          'Used at least two target phrases',
          'Asked or answered one follow-up question',
          'Connected the task with prior learning',
        ];
      }
    }
    const boss = productionSection.slides.find((slide) => slide.type === 'speaking-boss-battle');
    if (boss) {
      boss.content = [`Use prior knowledge to complete this new mission: ${spec.goals[2]}`];
      if (boss.speakingBossBattle) boss.speakingBossBattle.bossTitle = spec.title.split('/')[0].trim();
    }
  }

  const wrapSection = cls.sections[4];
  if (wrapSection) {
    wrapSection.objective = 'Cerrar la progresión y asignar una tarea que demuestre transferencia, no repetición mecánica.';
    const summary = wrapSection.slides[0];
    if (summary) summary.content = [`Today you moved beyond: ${spec.bridge}`, `You can now: ${spec.goals[2]}`];
    const homework = findHomeworkSlide(cls);
    if (homework && spec.homework) homework.content = spec.homework;
  }
}

function stableCurriculumSignature(levels: CurriculumLevel[]) {
  return levels.map((level) => ({
    id: level.id,
    classes: level.classes.map((cls) => ({
      id: cls.id,
      sections: cls.sections.map((section) => ({
        id: section.id,
        slides: section.slides.map((slide) => ({ id: slide.id, imageUrl: slide.imageUrl || '' })),
      })),
    })),
  }));
}

function assertStableCurriculum(
  before: ReturnType<typeof stableCurriculumSignature>,
  levels: CurriculumLevel[],
  audience: CurriculumAudience,
) {
  if (before.length !== levels.length) {
    throw new Error(`Curriculum progression for ${audience} changed the number of stable levels.`);
  }

  before.forEach((levelBefore, levelIndex) => {
    const levelAfter = levels[levelIndex];
    if (!levelAfter || levelAfter.id !== levelBefore.id || levelAfter.classes.length !== levelBefore.classes.length) {
      throw new Error(`Curriculum progression for ${audience} changed a stable level or its class order.`);
    }

    levelBefore.classes.forEach((classBefore, classIndex) => {
      const classAfter = levelAfter.classes[classIndex];
      if (!classAfter || classAfter.id !== classBefore.id || classAfter.sections.length !== classBefore.sections.length) {
        throw new Error(`Curriculum progression for ${audience} changed a stable class or its section order.`);
      }

      classBefore.sections.forEach((sectionBefore, sectionIndex) => {
        const sectionAfter = classAfter.sections[sectionIndex];
        if (!sectionAfter || sectionAfter.id !== sectionBefore.id) {
          throw new Error(`Curriculum progression for ${audience} changed a stable section.`);
        }

        sectionBefore.slides.forEach((slideBefore) => {
          const slideAfter = sectionAfter.slides.find((slide) => slide.id === slideBefore.id);
          if (!slideAfter || (slideAfter.imageUrl || '') !== slideBefore.imageUrl) {
            throw new Error(`Curriculum progression for ${audience} removed a stable slide or changed its image reference.`);
          }
        });
      });
    });
  });
}

export function applyCurriculumProgression(levels: CurriculumLevel[], audience: CurriculumAudience) {
  const before = stableCurriculumSignature(levels);

  for (const level of levels) {
    const levelSpec = levelProgression[audience][level.id];
    if (levelSpec) Object.assign(level, levelSpec);

    for (const cls of level.classes) {
      const kernel = audience === 'adolescente' ? teenLessonKernels[cls.id] : undefined;
      const classSpec = classProgression[audience][cls.id] || (kernel ? progressionFromKernel(cls, kernel) : undefined);
      if (classSpec) applyClassProgression(cls, classSpec);
      if (kernel && classSpec) completeTeenClass(cls, kernel, classSpec);

      cls.sections.forEach((section, sectionIndex) => {
        section.slides.forEach((slide) => {
          if (!slide.content?.length) {
            const fallback: string[][] = [
              [`Welcome to ${cls.title}.`, cls.objective, 'Connect today’s goal with one thing you already know.'],
              [`Language focus: ${cls.objective}`, 'Study the model, notice the form, and explain its meaning.', 'Create one accurate example.'],
              [`Practice focus: ${cls.objective}`, 'Answer with a complete idea.', 'Explain the clue that supports your answer.'],
              [`Speaking mission: ${cls.objective}`, 'Use the target language in a complete response.', 'Add one reason, detail, or follow-up question.'],
              [`Review the objective: ${cls.objective}`, 'Record one useful model from the class.', 'Use it again in a new personal example.'],
            ];
            slide.content = fallback[sectionIndex] || fallback[2];
          }
          if (slide.type === 'homework' && !/homework|tarea/i.test(slide.title)) {
            slide.title = `Homework / Tarea — ${slide.title}`;
          }
        });
      });
    }
  }

  assertStableCurriculum(before, levels, audience);
}

// Kept local for future explicit quiz refinements while guaranteeing real options.
void patchChoiceSlide;
