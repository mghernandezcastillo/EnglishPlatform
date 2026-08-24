import { ClassSlide, SpeakingSceneData } from '../types';

export interface ResolvedSpeakingScene {
  topic: string;
  topicEs: string;
  cues: {
    icon?: string;
    label: string;
    labelEs?: string;
    questionExample?: string;
  }[];
  roleA: {
    label: string;
    labelEs?: string;
    action: string;
    actionEs?: string;
    avatar?: string;
  };
  roleB: {
    label: string;
    labelEs?: string;
    action: string;
    actionEs?: string;
    avatar?: string;
  };
  helpWords: {
    emoji?: string;
    word: string;
    translation: string;
  }[];
  hiddenPhrases?: {
    ask: { en: string; es: string }[];
    answer: { en: string; es: string }[];
  };
}

export function resolveSpeakingScene(slide: ClassSlide, classTitleHint?: string): ResolvedSpeakingScene {
  // If the slide already has a complete, valid speakingScene defined, use it!
  if (slide.speakingScene && slide.speakingScene.topic && slide.speakingScene.cues?.length && slide.speakingScene.helpWords?.length) {
    return slide.speakingScene as ResolvedSpeakingScene;
  }

  // Combine titles and contents to identify the exact pedagogical theme
  const combined = [
    classTitleHint || '',
    slide.title || '',
    slide.description || '',
    ...(slide.content || []),
    ...(slide.roleplay?.mission || []),
    slide.letsSay?.prompt || '',
  ].join(' ').toLowerCase();

  // 1. Nature, Parks, Forests & Outdoors
  if (/nature|naturaleza|park|parque|forest|bosque|outdoors|aire libre|hiking|trail/i.test(combined)) {
    return {
      topic: 'Explore the Forest & Park Rules 🌲',
      topicEs: '¡Exploren el bosque y las reglas del parque!',
      cues: [
        { icon: '🎒', label: 'GEAR & ITEMS?', labelEs: '¿Qué objetos llevan en la mano?', questionExample: 'What are you carrying in your backpack?' },
        { icon: '🌲', label: 'LOCATION?', labelEs: '¿En qué lugar del bosque están?', questionExample: 'Where are they exploring right now?' },
        { icon: '⚠️', label: 'PARK RULES?', labelEs: '¿Qué reglas del parque deben cumplir?', questionExample: 'What is an important park rule?' }
      ],
      roleA: {
        label: 'Park Ranger',
        labelEs: 'Guardabosques',
        action: 'Guide & Ask',
        actionEs: 'Guiar y preguntar',
        avatar: '🌲'
      },
      roleB: {
        label: 'Young Explorer',
        labelEs: 'Explorador',
        action: 'Describe & Follow',
        actionEs: 'Describir y responder',
        avatar: '🎒'
      },
      helpWords: [
        { emoji: '🗺️', word: 'trail map', translation: 'mapa de senderos' },
        { emoji: '🔦', word: 'flashlight', translation: 'linterna' },
        { emoji: '📷', word: 'camera', translation: 'cámara' },
        { emoji: '🌲', word: 'tall trees', translation: 'árboles altos' },
        { emoji: '💧', word: 'water bottle', translation: 'termo de agua' },
        { emoji: '🚯', word: 'keep park clean', translation: 'mantener limpio' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What gear are you carrying for the hike in the forest?', es: '¿Qué equipo llevas para la caminata en el bosque?' },
          { en: 'Where are we going on the trail map?', es: '¿Hacia dónde vamos en el mapa de senderos?' },
          { en: 'What is the most important park rule to remember?', es: '¿Cuál es la regla del parque más importante para recordar?' }
        ],
        answer: [
          { en: 'We have a map, a flashlight, a camera, and water.', es: 'Tenemos un mapa, una linterna, una cámara y agua.' },
          { en: 'We are walking along the main green forest path.', es: 'Estamos caminando por el sendero principal del bosque.' },
          { en: 'We should always stay on the path and protect nature.', es: 'Siempre debemos quedarnos en el sendero y cuidar la naturaleza.' }
        ]
      }
    };
  }

  // 2. Clothes, Personal Style & Weather (Weather Stylist)
  if (/clothes|clothing|fashion|ropa|estilo|weather|clima|vestimenta|weather stylist|outfit/i.test(combined)) {
    return {
      topic: 'Dress for the Weather! ☀️🌧️',
      topicEs: '¡Vístete según el clima!',
      cues: [
        { icon: '☀️', label: 'WEATHER?', labelEs: '¿Qué clima hace hoy?', questionExample: 'What is the weather like outside?' },
        { icon: '🧥', label: 'OUTFIT?', labelEs: '¿Qué ropa debe ponerse?', questionExample: 'What clothes should they wear?' },
        { icon: '💡', label: 'ADVICE?', labelEs: '¿Qué accesorio o consejo das?', questionExample: 'Do you need an umbrella or sunglasses?' }
      ],
      roleA: {
        label: 'Weather Guide',
        labelEs: 'Guía del Clima',
        action: 'Give forecast',
        actionEs: 'Dar el pronóstico',
        avatar: '🌤️'
      },
      roleB: {
        label: 'Fashion Stylist',
        labelEs: 'Estilista',
        action: 'Pick outfit',
        actionEs: 'Elegir la ropa',
        avatar: '👗'
      },
      helpWords: [
        { emoji: '☀️', word: 'sunny & hot', translation: 'soleado y caliente' },
        { emoji: '🌧️', word: 'rainy & cold', translation: 'lluvioso y frío' },
        { emoji: '🧥', word: 'warm jacket', translation: 'chaqueta abrigada' },
        { emoji: '👢', word: 'rain boots', translation: 'botas para lluvia' },
        { emoji: '🕶️', word: 'sunglasses', translation: 'gafas de sol' },
        { emoji: '☔', word: 'umbrella', translation: 'paraguas' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What is the weather forecast for today?', es: '¿Cuál es el pronóstico del clima para hoy?' },
          { en: 'It is very cold and raining! What should I wear?', es: '¡Está muy frío y lloviendo! ¿Qué debería ponerme?' },
          { en: 'Is it sunny enough to wear a t-shirt and sunglasses?', es: '¿Hace suficiente sol para usar camiseta y gafas?' }
        ],
        answer: [
          { en: 'Today it is rainy and cold outside.', es: 'Hoy está lluvioso y frío afuera.' },
          { en: 'You should wear a warm coat, blue jeans, and boots.', es: 'Deberías usar un abrigo caliente, jeans y botas.' },
          { en: 'Don’t forget your umbrella before leaving!', es: '¡No olvides tu paraguas antes de salir!' }
        ]
      }
    };
  }

  // 3. Family, Relatives & Photos
  if (/family|familia|parientes|parents|relatives|tree|árbol genealógico/i.test(combined)) {
    return {
      topic: 'Talk about this family photo 👨‍👩‍👧‍👦',
      topicEs: 'Hablen de esta foto familiar',
      cues: [
        { icon: '👤', label: 'WHO IS WHO?', labelEs: '¿Quién es cada persona?', questionExample: 'Who is this in the photo?' },
        { icon: '💙', label: 'RELATION?', labelEs: '¿Qué parentesco tienen?', questionExample: 'Is that his brother or cousin?' },
        { icon: '😊', label: 'MOOD & VIBE?', labelEs: '¿Cómo se sienten y qué hacen?', questionExample: 'How do they feel today?' }
      ],
      roleA: {
        label: 'Curious Friend',
        labelEs: 'Amigo',
        action: 'Ask about photo',
        actionEs: 'Preguntar por la foto',
        avatar: '🙋'
      },
      roleB: {
        label: 'Family Member',
        labelEs: 'Familiar',
        action: 'Introduce family',
        actionEs: 'Presentar familia',
        avatar: '👨‍👩‍👧'
      },
      helpWords: [
        { emoji: '👩', word: 'mother', translation: 'madre' },
        { emoji: '👨', word: 'father', translation: 'padre' },
        { emoji: '👦', word: 'brother', translation: 'hermano' },
        { emoji: '👧', word: 'sister', translation: 'hermana' },
        { emoji: '😃', word: 'happy & smiling', translation: 'felices y sonrientes' },
        { emoji: '🏠', word: 'at home together', translation: 'juntos en casa' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'Who is this smiling in the center of the photo?', es: '¿Quién es esta persona sonriendo en el centro?' },
          { en: 'How old is your brother in this picture?', es: '¿Cuántos años tiene tu hermano en esta foto?' },
          { en: 'Are your parents having fun today?', es: '¿Tus padres se están divirtiendo hoy?' }
        ],
        answer: [
          { en: 'This is my mother and my father.', es: 'Esta es mi madre y mi padre.' },
          { en: 'My brother is ten years old and loves to laugh.', es: 'Mi hermano tiene diez años y le encanta reír.' },
          { en: 'Yes, everyone is super happy together.', es: 'Sí, todos están súper felices juntos.' }
        ]
      }
    };
  }

  // 4. School, Backpack & Classroom
  if (/school|escuela|materias|subjects|salón|classroom|supplies|útiles|backpack|mochila/i.test(combined)) {
    return {
      topic: 'Check your backpack & school schedule 🎒',
      topicEs: 'Revisen la mochila y el horario escolar',
      cues: [
        { icon: '📚', label: 'CLASSES?', labelEs: '¿Qué materias tienes hoy?', questionExample: 'What classes do you have today?' },
        { icon: '✏️', label: 'IN THE BAG?', labelEs: '¿Qué útiles llevas dentro?', questionExample: 'What is inside your school bag?' },
        { icon: '⭐', label: 'FAVORITE?', labelEs: '¿Cuál es tu materia favorita?', questionExample: 'Which class is your favorite and why?' }
      ],
      roleA: {
        label: 'Classmate A',
        labelEs: 'Compañero A',
        action: 'Ask schedule',
        actionEs: 'Preguntar horario',
        avatar: '🙋‍♂️'
      },
      roleB: {
        label: 'Classmate B',
        labelEs: 'Compañero B',
        action: 'Show backpack',
        actionEs: 'Mostrar mochila',
        avatar: '🎒'
      },
      helpWords: [
        { emoji: '📐', word: 'math class', translation: 'matemáticas' },
        { emoji: '🔬', word: 'science lab', translation: 'laboratorio de ciencias' },
        { emoji: '📖', word: 'english book', translation: 'libro de inglés' },
        { emoji: '✏️', word: 'pens & notebooks', translation: 'esferos y cuadernos' },
        { emoji: '🎒', word: 'backpack', translation: 'mochila' },
        { emoji: '💻', word: 'laptop', translation: 'portátil' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What classes do you have this morning?', es: '¿Qué clases tienes esta mañana?' },
          { en: 'What supplies do you have inside your bag?', es: '¿Qué útiles tienes dentro de tu bolso?' },
          { en: 'Which subject is your favorite?', es: '¿Qué materia es tu favorita?' }
        ],
        answer: [
          { en: 'I have math, science, and English today.', es: 'Tengo matemáticas, ciencias e inglés hoy.' },
          { en: 'I have three notebooks, a calculator, and pens.', es: 'Tengo tres cuadernos, una calculadora y esferos.' },
          { en: 'My favorite class is science because we do experiments.', es: 'Mi clase favorita es ciencias porque hacemos experimentos.' }
        ]
      }
    };
  }

  // 5. Food, Fast Food, Snacks & Cafeteria / Restaurant
  if (/food|comida|restaurant|cafeteria|snack|pedidos|drinks|bebidas|yummy|fruits|frutas|fast food|comidas|lunch/i.test(combined)) {
    return {
      topic: 'Order lunch at the cafeteria counter 🍕',
      topicEs: 'Pide tu almuerzo en la cafetería o restaurante',
      cues: [
        { icon: '🍕', label: 'MAIN MEAL?', labelEs: '¿Qué comida vas a ordenar?', questionExample: 'What meal would you like to eat?' },
        { icon: '🥤', label: 'DRINK?', labelEs: '¿Qué bebida prefieres?', questionExample: 'What would you like to drink?' },
        { icon: '💵', label: 'TOTAL PRICE?', labelEs: '¿Cuánto cuesta y cómo pagas?', questionExample: 'How much is the total?' }
      ],
      roleA: {
        label: 'Customer',
        labelEs: 'Cliente',
        action: 'Order politely',
        actionEs: 'Pedir con cortesía',
        avatar: '🛒'
      },
      roleB: {
        label: 'Cashier',
        labelEs: 'Cajero / Mesero',
        action: 'Serve & Charge',
        actionEs: 'Atender y cobrar',
        avatar: '🧑‍🍳'
      },
      helpWords: [
        { emoji: '🍕', word: 'pizza slice', translation: 'porción de pizza' },
        { emoji: '🍔', word: 'burger & fries', translation: 'hamburguesa y papas' },
        { emoji: '🥗', word: 'fresh salad', translation: 'ensalada fresca' },
        { emoji: '🥤', word: 'cold juice', translation: 'jugo frío' },
        { emoji: '💵', word: 'eight dollars', translation: 'ocho dólares' },
        { emoji: '🙏', word: 'please & thanks', translation: 'por favor y gracias' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'Hello! Can I have a slice of pizza and fries, please?', es: '¡Hola! ¿Me da una porción de pizza y papas, por favor?' },
          { en: 'Do you have fresh orange juice?', es: '¿Tienen jugo de naranja fresco?' },
          { en: 'How much is the total bill?', es: '¿Cuánto es la cuenta total?' }
        ],
        answer: [
          { en: 'Sure! Would you like a drink with your meal?', es: '¡Claro! ¿Desea una bebida con su comida?' },
          { en: 'That will be nine dollars in total, please.', es: 'Serán nueve dólares en total, por favor.' },
          { en: 'Here is your tray. Enjoy your meal!', es: 'Aquí tiene su bandeja. ¡Buen provecho!' }
        ]
      }
    };
  }

  // 6. Pets & Animals
  if (/pets|animals|mascotas|animales|safari|wild animals|farm|perro|gato/i.test(combined)) {
    return {
      topic: 'Introduce your favorite pet & tricks 🐶',
      topicEs: 'Presenten a su mascota y sus trucos',
      cues: [
        { icon: '🐶', label: 'NAME & BREED?', labelEs: '¿Cómo se llama y de qué raza es?', questionExample: 'What is your pet\'s name?' },
        { icon: '🎾', label: 'COOL TRICK?', labelEs: '¿Qué trucos sabe hacer?', questionExample: 'What tricks can your pet do?' },
        { icon: '🍖', label: 'FOOD & CARE?', labelEs: '¿Qué come y cómo lo cuidas?', questionExample: 'What does your pet love to eat?' }
      ],
      roleA: {
        label: 'Pet Lover',
        labelEs: 'Amante de Mascotas',
        action: 'Ask about pet',
        actionEs: 'Preguntar por mascota',
        avatar: '🐾'
      },
      roleB: {
        label: 'Pet Owner',
        labelEs: 'Dueño de Mascota',
        action: 'Introduce pet',
        actionEs: 'Presentar mascota',
        avatar: '🐕'
      },
      helpWords: [
        { emoji: '🐕', word: 'playful puppy', translation: 'perrito juguetón' },
        { emoji: '🐱', word: 'cute cat', translation: 'gato tierno' },
        { emoji: '🎾', word: 'catch the ball', translation: 'atrapar la pelota' },
        { emoji: '🏃', word: 'run super fast', translation: 'correr súper rápido' },
        { emoji: '🍖', word: 'yummy treats', translation: 'premios deliciosos' },
        { emoji: '❤️', word: 'friendly companion', translation: 'compañero amigable' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What pet do you have at home?', es: '¿Qué mascota tienes en casa?' },
          { en: 'What is your pet\'s name and how old is it?', es: '¿Cómo se llama tu mascota y qué edad tiene?' },
          { en: 'What cool tricks can your pet perform?', es: '¿Qué trucos geniales puede hacer tu mascota?' }
        ],
        answer: [
          { en: 'I have a golden retriever named Toby.', es: 'Tengo un golden retriever llamado Toby.' },
          { en: 'He is two years old and very playful.', es: 'Tiene dos años y es muy juguetón.' },
          { en: 'He can fetch the ball and jump high!', es: '¡Puede traer la pelota y saltar alto!' }
        ]
      }
    };
  }

  // 7. Tech, Gadgets & Gaming
  if (/tech|gadgets|devices|aplicaciones|apps|redes sociales|social media|internet|online|gaming|consola/i.test(combined)) {
    return {
      topic: 'Showcase your top gadget & apps 📱',
      topicEs: 'Muestra tu mejor gadget y tus apps favoritas',
      cues: [
        { icon: '📱', label: 'DEVICE?', labelEs: '¿Qué dispositivo o consola usas?', questionExample: 'What device do you use most?' },
        { icon: '🎮', label: 'TOP APP / GAME?', labelEs: '¿Cuál es tu app o juego preferido?', questionExample: 'What app do you use every day?' },
        { icon: '⚡', label: 'SUPER FEATURE?', labelEs: '¿Qué es lo que más te gusta?', questionExample: 'Why is it so awesome?' }
      ],
      roleA: {
        label: 'Tech Friend',
        labelEs: 'Amigo Tech',
        action: 'Ask & compare',
        actionEs: 'Preguntar y comparar',
        avatar: '📱'
      },
      roleB: {
        label: 'Gamer / Creator',
        labelEs: 'Gamer / Creador',
        action: 'Show features',
        actionEs: 'Mostrar funciones',
        avatar: '🎧'
      },
      helpWords: [
        { emoji: '📱', word: 'smartphone', translation: 'celular' },
        { emoji: '🎮', word: 'gaming console', translation: 'consola' },
        { emoji: '🎧', word: 'headphones', translation: 'audífonos' },
        { emoji: '📲', word: 'cool app', translation: 'app genial' },
        { emoji: '⚡', word: 'fast performance', translation: 'rendimiento rápido' },
        { emoji: '🌐', word: 'play with friends', translation: 'jugar con amigos' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What is your favorite tech device right now?', es: '¿Cuál es tu dispositivo tecnológico favorito?' },
          { en: 'What app or game do you spend the most time on?', es: '¿En qué app o juego pasas más tiempo?' },
          { en: 'Can you show me your favorite feature?', es: '¿Puedes mostrarme tu función preferida?' }
        ],
        answer: [
          { en: 'I love my new tablet for digital drawing and games.', es: 'Me encanta mi tablet para dibujar y jugar.' },
          { en: 'I play multiplayer games online with my friends.', es: 'Juego títulos multijugador en línea con mis amigos.' },
          { en: 'The battery lasts all day and it runs super smooth.', es: 'La batería dura todo el día y corre súper fluido.' }
        ]
      }
    };
  }

  // 8. Locations, Places, City & Directions
  if (/directions|direcciones|city|ciudad|places|lugares|transporte|transport|vehicles|preposiciones|where|map/i.test(combined)) {
    return {
      topic: 'Guide a visitor through the city 🗺️',
      topicEs: 'Guía a un visitante por la ciudad',
      cues: [
        { icon: '📍', label: 'DESTINATION?', labelEs: '¿A qué lugar quiere llegar?', questionExample: 'Where is the visitor trying to go?' },
        { icon: '↔️', label: 'TURN & ROUTE?', labelEs: '¿Hacia dónde debe caminar o girar?', questionExample: 'Do you turn left or go straight?' },
        { icon: '🏢', label: 'LANDMARK?', labelEs: '¿Al lado de qué edificio está?', questionExample: 'What building is next to it?' }
      ],
      roleA: {
        label: 'Lost Visitor',
        labelEs: 'Visitante',
        action: 'Ask directions',
        actionEs: 'Pedir indicaciones',
        avatar: '🧭'
      },
      roleB: {
        label: 'Local Guide',
        labelEs: 'Guía Local',
        action: 'Give directions',
        actionEs: 'Indicar camino',
        avatar: '📍'
      },
      helpWords: [
        { emoji: '➡️', word: 'next to', translation: 'al lado de' },
        { emoji: '🏬', word: 'across from', translation: 'al frente de' },
        { emoji: '⬆️', word: 'go straight 2 blocks', translation: 'sigue 2 cuadras' },
        { emoji: '🔄', word: 'turn left / right', translation: 'gira a la izquierda / derecha' },
        { emoji: '🏢', word: 'tall building', translation: 'edificio alto' },
        { emoji: '🌳', word: 'central park', translation: 'parque central' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'Excuse me, where is the nearest coffee shop?', es: 'Disculpe, ¿dónde queda la cafetería más cercana?' },
          { en: 'How do I get to the central library from here?', es: '¿Cómo llego a la biblioteca central desde aquí?' },
          { en: 'Is there a bus station on this avenue?', es: '¿Hay una estación de buses en esta avenida?' }
        ],
        answer: [
          { en: 'It is right next to the bookstore, across from the park.', es: 'Está justo al lado de la librería, frente al parque.' },
          { en: 'Go straight for two blocks and turn left at the corner.', es: 'Sigue derecho dos cuadras y gira a la izquierda en la esquina.' },
          { en: 'Yes, the station is right around the corner.', es: 'Sí, la estación está justo a la vuelta de la esquina.' }
        ]
      }
    };
  }

  // 9. Daily Routine & Schedule
  if (/routine|rutina|habits|hábitos|daily|wake up|despertar/i.test(combined)) {
    return {
      topic: 'Compare your daily schedule ⏰',
      topicEs: 'Comparen su horario diario de la mañana a la noche',
      cues: [
        { icon: '🌅', label: 'MORNING ALARM?', labelEs: '¿A qué hora suena tu alarma?', questionExample: 'What time do you wake up?' },
        { icon: '📚', label: 'AFTERNOON?', labelEs: '¿Qué haces en la tarde?', questionExample: 'What do you do after school or work?' },
        { icon: '🌙', label: 'BEDTIME?', labelEs: '¿A qué hora te vas a dormir?', questionExample: 'What time do you sleep at night?' }
      ],
      roleA: {
        label: 'Friend A',
        labelEs: 'Amigo A',
        action: 'Ask routine',
        actionEs: 'Preguntar rutina',
        avatar: '⏰'
      },
      roleB: {
        label: 'Friend B',
        labelEs: 'Amigo B',
        action: 'Share schedule',
        actionEs: 'Compartir horario',
        avatar: '🛌'
      },
      helpWords: [
        { emoji: '⏰', word: 'wake up at 7:00 AM', translation: 'despertar a las 7' },
        { emoji: '🍳', word: 'eat breakfast', translation: 'desayunar' },
        { emoji: '🚌', word: 'take the bus', translation: 'tomar el bus' },
        { emoji: '📖', word: 'finish homework', translation: 'terminar tareas' },
        { emoji: '🎮', word: 'relax & play', translation: 'descansar y jugar' },
        { emoji: '🛌', word: 'sleep at 10:30 PM', translation: 'dormir a las 10:30' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What time does your alarm go off in the morning?', es: '¿A qué hora suena tu alarma en la mañana?' },
          { en: 'What do you do right after you finish your classes?', es: '¿Qué haces justo después de terminar tus clases?' },
          { en: 'What time do you go to bed on weeknights?', es: '¿A qué hora te vas a la cama entre semana?' }
        ],
        answer: [
          { en: 'I always wake up at seven o\'clock in the morning.', es: 'Siempre me despierto a las siete de la mañana.' },
          { en: 'I finish my homework and then I play with friends.', es: 'Termino mis tareas y luego juego con amigos.' },
          { en: 'I go to sleep around ten thirty at night.', es: 'Me voy a dormir alrededor de las diez y media de la noche.' }
        ]
      }
    };
  }

  // 10. Jobs & Professions
  if (/professions|profesiones|jobs|trabajo|office|oficina|ocupaciones|career/i.test(combined)) {
    return {
      topic: 'Talk about dream jobs & careers 💼',
      topicEs: 'Hablen de sus profesiones soñadas y lugares de trabajo',
      cues: [
        { icon: '💼', label: 'PROFESSION?', labelEs: '¿A qué se dedica esta persona?', questionExample: 'What is their job?' },
        { icon: '🏥', label: 'WORKPLACE?', labelEs: '¿Dónde trabaja todos los días?', questionExample: 'Where do they work?' },
        { icon: '⭐', label: 'MAIN TASKS?', labelEs: '¿Qué tareas importantes realiza?', questionExample: 'What do they do every day?' }
      ],
      roleA: {
        label: 'Career Coach',
        labelEs: 'Orientador',
        action: 'Ask about job',
        actionEs: 'Preguntar por profesión',
        avatar: '💼'
      },
      roleB: {
        label: 'Professional',
        labelEs: 'Profesional',
        action: 'Describe career',
        actionEs: 'Describir trabajo',
        avatar: '👔'
      },
      helpWords: [
        { emoji: '👩‍⚕️', word: 'doctor', translation: 'médico/a' },
        { emoji: '👨‍🏫', word: 'teacher', translation: 'profesor/a' },
        { emoji: '💻', word: 'software engineer', translation: 'ingeniero de software' },
        { emoji: '🏥', word: 'modern hospital', translation: 'hospital moderno' },
        { emoji: '🏢', word: 'corporate office', translation: 'oficina corporativa' },
        { emoji: '🤝', word: 'help the team', translation: 'ayudar al equipo' }
      ],
      hiddenPhrases: {
        ask: [
          { en: 'What does your brother do for a living?', es: '¿A qué se dedica tu hermano?' },
          { en: 'Where does she work every day?', es: '¿Dónde trabaja ella todos los días?' },
          { en: 'What job would you like to have in the future?', es: '¿Qué trabajo te gustaría tener en el futuro?' }
        ],
        answer: [
          { en: 'He is a software engineer at a tech company.', es: 'Es ingeniero de software en una empresa de tecnología.' },
          { en: 'She works at a modern hospital in the city.', es: 'Ella trabaja en un hospital moderno en la ciudad.' },
          { en: 'I want to be an architect and design buildings.', es: 'Quiero ser arquitecto y diseñar edificios.' }
        ]
      }
    };
  }

  // 11. General Universal Fallback
  const cleanTitle = (classTitleHint || slide.title || 'this topic')
    .replace(/^Class \d+:\s*/i, '')
    .replace(/^Clase \d+:\s*/i, '')
    .replace(/^Roleplay:\s*/i, '')
    .replace(/\//g, '·')
    .trim();

  return {
    topic: `Talk about ${cleanTitle} 💬`,
    topicEs: `Hablen sobre ${cleanTitle}`,
    cues: [
      { icon: '🎯', label: 'MAIN TOPIC?', labelEs: '¿De qué trata este tema?', questionExample: `What do you think about ${cleanTitle}?` },
      { icon: '💡', label: 'REAL EXAMPLE?', labelEs: '¿Qué ejemplo real puedes dar?', questionExample: 'Can you give a real example?' },
      { icon: '⭐', label: 'WHY IMPORTANT?', labelEs: '¿Por qué es útil en la vida diaria?', questionExample: 'Why is this important for you?' }
    ],
    roleA: {
      label: 'Teacher',
      labelEs: 'Profesor',
      action: 'Ask',
      actionEs: 'Preguntar',
      avatar: '👩‍🏫'
    },
    roleB: {
      label: 'Student',
      labelEs: 'Estudiante',
      action: 'Answer',
      actionEs: 'Responder',
      avatar: '👨‍🎓'
    },
    helpWords: [
      { emoji: '💬', word: 'practice speaking', translation: 'practicar el habla' },
      { emoji: '💡', word: 'clear example', translation: 'ejemplo claro' },
      { emoji: '⭐', word: 'important idea', translation: 'idea importante' },
      { emoji: '🗣️', word: 'express opinion', translation: 'expresar opinión' },
      { emoji: '✨', word: 'fluency', translation: 'fluidez' },
      { emoji: '🎯', word: 'goal', translation: 'meta' }
    ],
    hiddenPhrases: {
      ask: [
        { en: `How would you explain this in your own words?`, es: `¿Cómo explicarías esto con tus propias palabras?` },
        { en: `What is a good example from your daily life?`, es: `¿Cuál es un buen ejemplo de tu vida diaria?` },
        { en: `What do you think about this situation?`, es: `¿Qué piensas sobre esta situación?` }
      ],
      answer: [
        { en: `In my opinion, this helps us communicate clearly.`, es: `En mi opinión, esto nos ayuda a comunicarnos con claridad.` },
        { en: `For example, I use this when talking with friends.`, es: `Por ejemplo, uso esto al hablar con amigos.` },
        { en: `I feel very confident practicing this today.`, es: `Me siento muy seguro practicando esto hoy.` }
      ]
    }
  };
}
