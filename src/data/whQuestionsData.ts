import { WhQuestionItem } from '../types';

export const WH_QUESTIONS_DATA: WhQuestionItem[] = [
  // ==================== A1 LEVEL (wh_001 to wh_009) ====================
  {
    id: 'wh_001',
    level: 'A1',
    expression: 'what',
    translation: 'qué / cuál',
    use: 'Preguntar por cosas, información o acciones.',
    formula: 'What + be / do / does + Subject + (Verb)...?',
    examples: [
      { en: 'What is your name?', es: '¿Cuál es tu nombre?' },
      { en: 'What do you want?', es: '¿Qué quieres?' }
    ],
    puzzles: [
      {
        scramble: ['name?', 'is', 'What', 'your'],
        solution: 'What is your name?',
        hint_es: '¿Cuál es tu nombre?'
      },
      {
        scramble: ['you', 'What', 'do', 'want?'],
        solution: 'What do you want?',
        hint_es: '¿Qué quieres?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás conociendo a un nuevo amigo en clase.',
      goal: 'Pregúntale cuál es su comida favorita o qué hace en su tiempo libre.',
      modelAnswer: 'What is your favorite food?'
    },
    slotRoulette: {
      subjects: ['you', 'your best friend', 'the teacher'],
      actions: ['like to do', 'study in the morning', 'eat for lunch'],
      complements: ['on weekends?', 'every single day?', 'after class?']
    }
  },
  {
    id: 'wh_002',
    level: 'A1',
    expression: 'who',
    translation: 'quién / quiénes',
    use: 'Preguntar por personas.',
    formula: 'Who + is / are / aux + Subject / Verb...?',
    examples: [
      { en: 'Who is she?', es: '¿Quién es ella?' },
      { en: 'Who is your teacher?', es: '¿Quién es tu profesor?' }
    ],
    puzzles: [
      {
        scramble: ['she?', 'is', 'Who'],
        solution: 'Who is she?',
        hint_es: '¿Quién es ella?'
      },
      {
        scramble: ['your', 'Who', 'teacher?', 'is'],
        solution: 'Who is your teacher?',
        hint_es: '¿Quién es tu profesor?'
      }
    ],
    situationPrompt: {
      scenario: 'Ves una foto familiar de tu compañero.',
      goal: 'Pregúntale quién es la persona que está al lado de él.',
      modelAnswer: 'Who is the person next to you?'
    },
    slotRoulette: {
      subjects: ['that girl', 'the doctor', 'your favorite singer'],
      actions: ['waiting for you', 'living in that house', 'calling you'],
      complements: ['right now?', 'over there?', 'in the photo?']
    }
  },
  {
    id: 'wh_003',
    level: 'A1',
    expression: 'where',
    translation: 'dónde',
    use: 'Preguntar por lugares o ubicaciones.',
    formula: 'Where + be / do / does + Subject + (Verb)...?',
    examples: [
      { en: 'Where do you live?', es: '¿Dónde vives?' },
      { en: 'Where is the bathroom?', es: '¿Dónde está el baño?' }
    ],
    puzzles: [
      {
        scramble: ['live?', 'do', 'Where', 'you'],
        solution: 'Where do you live?',
        hint_es: '¿Dónde vives?'
      },
      {
        scramble: ['the', 'Where', 'is', 'bathroom?'],
        solution: 'Where is the bathroom?',
        hint_es: '¿Dónde está el baño?'
      }
    ],
    situationPrompt: {
      scenario: 'Llegas a un centro comercial nuevo y estás buscando un café.',
      goal: 'Pregúntale a alguien dónde está el café más cercano.',
      modelAnswer: 'Where is the nearest coffee shop?'
    },
    slotRoulette: {
      subjects: ['you', 'your family', 'the keys'],
      actions: ['go on vacation', 'buy fresh fruits', 'study English'],
      complements: ['in your city?', 'every summer?', 'right now?']
    }
  },
  {
    id: 'wh_004',
    level: 'A1',
    expression: 'when',
    translation: 'cuándo',
    use: 'Preguntar por momentos, fechas u horarios.',
    formula: 'When + be / do / does + Subject + (Verb)...?',
    examples: [
      { en: 'When is your birthday?', es: '¿Cuándo es tu cumpleaños?' },
      { en: 'When do you work?', es: '¿Cuándo trabajas?' }
    ],
    puzzles: [
      {
        scramble: ['your', 'When', 'is', 'birthday?'],
        solution: 'When is your birthday?',
        hint_es: '¿Cuándo es tu cumpleaños?'
      },
      {
        scramble: ['work?', 'do', 'When', 'you'],
        solution: 'When do you work?',
        hint_es: '¿Cuándo trabajas?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás coordinando una salida al cine con un compañero.',
      goal: 'Pregúntale cuándo tiene tiempo libre esta semana.',
      modelAnswer: 'When are you free this week?'
    },
    slotRoulette: {
      subjects: ['the class', 'your birthday', 'the flight'],
      actions: ['start in the morning', 'finish today', 'arrive at the station'],
      complements: ['this weekend?', 'next Monday?', 'tonight?']
    }
  },
  {
    id: 'wh_005',
    level: 'A1',
    expression: 'why',
    translation: 'por qué',
    use: 'Preguntar por razones (responder con "Because").',
    formula: 'Why + be / do / does + Subject + (Verb / Adjective)...?',
    examples: [
      { en: 'Why are you tired?', es: '¿Por qué estás cansado?' },
      { en: 'Why do you study English?', es: '¿Por qué estudias inglés?' }
    ],
    puzzles: [
      {
        scramble: ['are', 'tired?', 'Why', 'you'],
        solution: 'Why are you tired?',
        hint_es: '¿Por qué estás cansado?'
      },
      {
        scramble: ['study', 'do', 'Why', 'English?', 'you'],
        solution: 'Why do you study English?',
        hint_es: '¿Por qué estudias inglés?'
      }
    ],
    situationPrompt: {
      scenario: 'Tu amigo llega con una sonrisa enorme.',
      goal: 'Pregúntale por qué está tan feliz hoy.',
      modelAnswer: 'Why are you so happy today?'
    },
    slotRoulette: {
      subjects: ['you', 'the baby', 'everyone'],
      actions: ['study late at night', 'wake up so early', 'laugh so much'],
      complements: ['today?', 'every morning?', 'this week?']
    }
  },
  {
    id: 'wh_006',
    level: 'A1',
    expression: 'how',
    translation: 'cómo',
    use: 'Preguntar por manera, condición o estado.',
    formula: 'How + be / do / does + Subject + (Verb)...?',
    examples: [
      { en: 'How are you?', es: '¿Cómo estás?' },
      { en: 'How do you spell your name?', es: '¿Cómo deletreas tu nombre?' }
    ],
    puzzles: [
      {
        scramble: ['are', 'How', 'you?'],
        solution: 'How are you?',
        hint_es: '¿Cómo estás?'
      },
      {
        scramble: ['spell', 'do', 'How', 'name?', 'your', 'you'],
        solution: 'How do you spell your name?',
        hint_es: '¿Cómo deletreas tu nombre?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás en una recepción de hotel y no entienden tu apellido.',
      goal: 'Pregúntale a la recepcionista cómo se pronuncia la palabra.',
      modelAnswer: 'How do you pronounce this word?'
    },
    slotRoulette: {
      subjects: ['you', 'your parents', 'the students'],
      actions: ['go to work', 'feel today', 'cook this dish'],
      complements: ['every day?', 'in the morning?', 'without help?']
    }
  },
  {
    id: 'wh_007',
    level: 'A1',
    expression: 'how old',
    translation: 'cuántos años',
    use: 'Preguntar por edad.',
    formula: 'How old + is / are + Subject...?',
    examples: [
      { en: 'How old are you?', es: '¿Cuántos años tienes?' },
      { en: 'How old is your sister?', es: '¿Cuántos años tiene tu hermana?' }
    ],
    puzzles: [
      {
        scramble: ['are', 'How', 'old', 'you?'],
        solution: 'How old are you?',
        hint_es: '¿Cuántos años tienes?'
      },
      {
        scramble: ['your', 'is', 'sister?', 'How', 'old'],
        solution: 'How old is your sister?',
        hint_es: '¿Cuántos años tiene tu hermana?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás hablando sobre mascotas con tu profesor.',
      goal: 'Pregúntale cuántos años tiene su perro o gato.',
      modelAnswer: 'How old is your pet?'
    },
    slotRoulette: {
      subjects: ['your brother', 'this building', 'the teacher'],
      actions: ['turn this year', 'look right now'],
      complements: ['today?', 'in this photo?']
    }
  },
  {
    id: 'wh_008',
    level: 'A1',
    expression: 'how much',
    translation: 'cuánto / cuánta',
    use: 'Preguntar por precio o cantidad incontable.',
    formula: 'How much + is / does + (uncountable noun)...?',
    examples: [
      { en: 'How much is it?', es: '¿Cuánto cuesta?' },
      { en: 'How much water do you drink?', es: '¿Cuánta agua bebes?' }
    ],
    puzzles: [
      {
        scramble: ['it?', 'How', 'is', 'much'],
        solution: 'How much is it?',
        hint_es: '¿Cuánto cuesta?'
      },
      {
        scramble: ['water', 'you', 'drink?', 'How', 'much', 'do'],
        solution: 'How much water do you drink?',
        hint_es: '¿Cuánta agua bebes?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás en una tienda de ropa y te gusta una chaqueta.',
      goal: 'Pregúntale al vendedor cuánto cuesta la chaqueta.',
      modelAnswer: 'How much does this jacket cost?'
    },
    slotRoulette: {
      subjects: ['coffee', 'time', 'money'],
      actions: ['need for this project', 'drink every day', 'spend on food'],
      complements: ['per week?', 'right now?', 'in total?']
    }
  },
  {
    id: 'wh_009',
    level: 'A1',
    expression: 'how many',
    translation: 'cuántos / cuántas',
    use: 'Preguntar por cantidades contables en plural.',
    formula: 'How many + [Plural Noun] + do / does + Subject + Verb...?',
    examples: [
      { en: 'How many brothers do you have?', es: '¿Cuántos hermanos tienes?' },
      { en: 'How many books did you read?', es: '¿Cuántos libros leíste?' }
    ],
    puzzles: [
      {
        scramble: ['brothers', 'you', 'have?', 'many', 'How', 'do'],
        solution: 'How many brothers do you have?',
        hint_es: '¿Cuántos hermanos tienes?'
      },
      {
        scramble: ['did', 'books', 'How', 'many', 'read?', 'you'],
        solution: 'How many books did you read?',
        hint_es: '¿Cuántos libros leíste?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás conociendo los hábitos de estudio de tu grupo.',
      goal: 'Pregúntale a un estudiante cuántas horas practica inglés al día.',
      modelAnswer: 'How many hours do you practice every day?'
    },
    slotRoulette: {
      subjects: ['students', 'hours', 'countries'],
      actions: ['visit every year', 'have in class', 'need for this task'],
      complements: ['in total?', 'this semester?', 'in your family?']
    }
  },

  // ==================== A2 LEVEL (wh_010 to wh_020) ====================
  {
    id: 'wh_010',
    level: 'A2',
    expression: 'which',
    translation: 'cuál / cuáles',
    use: 'Elegir entre un grupo limitado de opciones.',
    formula: 'Which + (one / noun) + do / does + Subject + prefer / choose...?',
    examples: [
      { en: 'Which one do you prefer?', es: '¿Cuál prefieres?' },
      { en: 'Which bus goes to the mall?', es: '¿Cuál autobús va al centro comercial?' }
    ],
    puzzles: [
      {
        scramble: ['you', 'one', 'do', 'Which', 'prefer?'],
        solution: 'Which one do you prefer?',
        hint_es: '¿Cuál prefieres?'
      },
      {
        scramble: ['to', 'bus', 'Which', 'goes', 'the', 'mall?'],
        solution: 'Which bus goes to the mall?',
        hint_es: '¿Cuál autobús va al centro comercial?'
      }
    ],
    situationPrompt: {
      scenario: 'Hay dos camisas en oferta: una azul y una negra.',
      goal: 'Pregúntale a tu amigo cuál le gusta más.',
      modelAnswer: 'Which color looks better on me?'
    },
    slotRoulette: {
      subjects: ['shirt', 'flavor', 'route'],
      actions: ['choose for dinner', 'prefer for the trip', 'like the most'],
      complements: ['between these two?', 'for today?', 'in this menu?']
    }
  },
  {
    id: 'wh_011',
    level: 'A2',
    expression: 'whose',
    translation: 'de quién',
    use: 'Preguntar por posesión o pertenencia.',
    formula: 'Whose + [Noun] + is / are + this / these...?',
    examples: [
      { en: 'Whose bag is this?', es: '¿De quién es este bolso?' },
      { en: 'Whose keys are on the table?', es: '¿De quién son las llaves en la mesa?' }
    ],
    puzzles: [
      {
        scramble: ['is', 'bag', 'Whose', 'this?'],
        solution: 'Whose bag is this?',
        hint_es: '¿De quién es este bolso?'
      },
      {
        scramble: ['on', 'keys', 'are', 'Whose', 'table?', 'the'],
        solution: 'Whose keys are on the table?',
        hint_es: '¿De quién son las llaves en la mesa?'
      }
    ],
    situationPrompt: {
      scenario: 'Alguien olvidó un teléfono en la mesa del salón.',
      goal: 'Pregunta en voz alta de quién es el teléfono.',
      modelAnswer: 'Whose phone is this on the table?'
    },
    slotRoulette: {
      subjects: ['car', 'jacket', 'notebook'],
      actions: ['parked outside', 'left on the desk', 'borrowed yesterday'],
      complements: ['in the room?', 'right here?', 'over there?']
    }
  },
  {
    id: 'wh_012',
    level: 'A2',
    expression: 'what time',
    translation: 'a qué hora',
    use: 'Preguntar por una hora específica de un evento.',
    formula: 'What time + do / does / did + Subject + Verb...?',
    examples: [
      { en: 'What time does the movie start?', es: '¿A qué hora empieza la película?' },
      { en: 'What time do you usually wake up?', es: '¿A qué hora sueles despertarte?' }
    ],
    puzzles: [
      {
        scramble: ['movie', 'What', 'start?', 'does', 'the', 'time'],
        solution: 'What time does the movie start?',
        hint_es: '¿A qué hora empieza la película?'
      },
      {
        scramble: ['wake', 'do', 'What', 'time', 'up?', 'you'],
        solution: 'What time do you wake up?',
        hint_es: '¿A qué hora te despiertas?'
      }
    ],
    situationPrompt: {
      scenario: 'Tienes una reunión de trabajo o clase mañana.',
      goal: 'Pregúntale a tu colega a qué hora comienza la reunión.',
      modelAnswer: 'What time does the meeting start tomorrow?'
    },
    slotRoulette: {
      subjects: ['the train', 'the concert', 'your shift'],
      actions: ['arrive at the station', 'begin tonight', 'finish today'],
      complements: ['exactly?', 'on weekdays?', 'this afternoon?']
    }
  },
  {
    id: 'wh_013',
    level: 'A2',
    expression: 'what day',
    translation: 'qué día',
    use: 'Preguntar por un día de la semana o calendario.',
    formula: 'What day + is / do + Subject + (Verb)...?',
    examples: [
      { en: 'What day is your English class?', es: '¿Qué día es tu clase de inglés?' },
      { en: 'What day do you have off?', es: '¿Qué día tienes libre?' }
    ],
    puzzles: [
      {
        scramble: ['is', 'class?', 'What', 'English', 'day', 'your'],
        solution: 'What day is your English class?',
        hint_es: '¿Qué día es tu clase de inglés?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás cuadrando un almuerzo con tu equipo.',
      goal: 'Pregúntales qué día es mejor para todos.',
      modelAnswer: 'What day is best for our lunch?'
    },
    slotRoulette: {
      subjects: ['the exam', 'the party', 'your flight'],
      actions: ['take place', 'scheduled for', 'happen'],
      complements: ['this week?', 'next month?', 'of the week?']
    }
  },
  {
    id: 'wh_014',
    level: 'A2',
    expression: 'what kind of',
    translation: 'qué tipo de',
    use: 'Preguntar por categorías, géneros o estilos.',
    formula: 'What kind of + [Noun] + do / does + Subject + Verb...?',
    examples: [
      { en: 'What kind of music do you like?', es: '¿Qué tipo de música te gusta?' },
      { en: 'What kind of food do you prefer?', es: '¿Qué tipo de comida prefieres?' }
    ],
    puzzles: [
      {
        scramble: ['music', 'you', 'kind', 'do', 'What', 'like?', 'of'],
        solution: 'What kind of music do you like?',
        hint_es: '¿Qué tipo de música te gusta?'
      }
    ],
    situationPrompt: {
      scenario: 'Van a elegir un restaurante para salir el viernes.',
      goal: 'Pregúntale a tu amigo qué tipo de comida quiere comer.',
      modelAnswer: 'What kind of food do you feel like having?'
    },
    slotRoulette: {
      subjects: ['movies', 'books', 'exercises'],
      actions: ['enjoy in free time', 'recommend to others', 'dislike the most'],
      complements: ['these days?', 'when you relax?', 'at home?']
    }
  },
  {
    id: 'wh_015',
    level: 'A2',
    expression: 'what color',
    translation: 'qué color',
    use: 'Preguntar por colores de objetos o prendas.',
    formula: 'What color + is / are + [Subject]...?',
    examples: [
      { en: 'What color is your car?', es: '¿De qué color es tu carro?' },
      { en: 'What color do you want your room to be?', es: '¿De qué color quieres tu habitación?' }
    ],
    puzzles: [
      {
        scramble: ['your', 'is', 'color', 'What', 'car?'],
        solution: 'What color is your car?',
        hint_es: '¿De qué color es tu carro?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás comprando zapatos y buscas tu tono favorito.',
      goal: 'Pregúntale al vendedor en qué colores vienen los zapatos.',
      modelAnswer: 'What colors do these shoes come in?'
    },
    slotRoulette: {
      subjects: ['your new shirt', 'the front door', 'your eyes'],
      actions: ['look under the light', 'prefer to paint'],
      complements: ['in the dark?', 'this season?']
    }
  },
  {
    id: 'wh_016',
    level: 'A2',
    expression: 'how often',
    translation: 'con qué frecuencia / cada cuánto',
    use: 'Preguntar por la frecuencia de una acción.',
    formula: 'How often + do / does + Subject + Verb...?',
    examples: [
      { en: 'How often do you exercise?', es: '¿Con qué frecuencia haces ejercicio?' },
      { en: 'How often does he travel?', es: '¿Cada cuánto viaja él?' }
    ],
    puzzles: [
      {
        scramble: ['exercise?', 'do', 'often', 'How', 'you'],
        solution: 'How often do you exercise?',
        hint_es: '¿Con qué frecuencia haces ejercicio?'
      }
    ],
    situationPrompt: {
      scenario: 'Hablas sobre hábitos saludables con tu profesor.',
      goal: 'Pregúntale cada cuánto toma vacaciones al año.',
      modelAnswer: 'How often do you take vacations during the year?'
    },
    slotRoulette: {
      subjects: ['you', 'your family', 'the team'],
      actions: ['practice English', 'go to the dentist', 'cook at home'],
      complements: ['a week?', 'per month?', 'in general?']
    }
  },
  {
    id: 'wh_017',
    level: 'A2',
    expression: 'how long',
    translation: 'cuánto tiempo',
    use: 'Preguntar por la duración de un evento o trayecto.',
    formula: 'How long + does it take / is / did it last...?',
    examples: [
      { en: 'How long is the movie?', es: '¿Cuánto dura la película?' },
      { en: 'How long does it take to get there?', es: '¿Cuánto tiempo toma llegar allí?' }
    ],
    puzzles: [
      {
        scramble: ['the', 'How', 'is', 'long', 'movie?'],
        solution: 'How long is the movie?',
        hint_es: '¿Cuánto dura la película?'
      }
    ],
    situationPrompt: {
      scenario: 'Pides un taxi por app y tienes prisa.',
      goal: 'Pregúntale al conductor cuánto tiempo tomará llegar al aeropuerto.',
      modelAnswer: 'How long does it take to get to the airport?'
    },
    slotRoulette: {
      subjects: ['the meeting', 'the class', 'the flight'],
      actions: ['take from here', 'last today', 'remain in transit'],
      complements: ['with traffic?', 'on average?', 'without stops?']
    }
  },
  {
    id: 'wh_018',
    level: 'A2',
    expression: 'how far',
    translation: 'qué tan lejos / a qué distancia',
    use: 'Preguntar por distancia física o geográfica.',
    formula: 'How far + is + [Place A] + (from Place B)?',
    examples: [
      { en: 'How far is the airport?', es: '¿A qué distancia está el aeropuerto?' },
      { en: 'How far is your office from home?', es: '¿Qué tan lejos está tu oficina de tu casa?' }
    ],
    puzzles: [
      {
        scramble: ['the', 'airport?', 'is', 'How', 'far'],
        solution: 'How far is the airport?',
        hint_es: '¿A qué distancia está el aeropuerto?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás buscando un hotel cerca a la playa.',
      goal: 'Pregúntale al agente qué tan lejos está el hotel del mar.',
      modelAnswer: 'How far is the hotel from the beach?'
    },
    slotRoulette: {
      subjects: ['the station', 'the downtown', 'the hospital'],
      actions: ['located from here', 'walk in 10 minutes'],
      complements: ['by car?', 'on foot?', 'from your hotel?']
    }
  },
  {
    id: 'wh_019',
    level: 'A2',
    expression: 'how tall',
    translation: 'cuánto mide de altura',
    use: 'Preguntar por la estatura de una persona o altura de una estructura.',
    formula: 'How tall + is / are + [Subject]...?',
    examples: [
      { en: 'How tall are you?', es: '¿Cuánto mides?' },
      { en: 'How tall is that skyscraper?', es: '¿Qué tan alto es ese rascacielos?' }
    ],
    puzzles: [
      {
        scramble: ['tall', 'are', 'How', 'you?'],
        solution: 'How tall are you?',
        hint_es: '¿Cuánto mides?'
      }
    ],
    situationPrompt: {
      scenario: 'Están hablando de jugadores de baloncesto de la NBA.',
      goal: 'Pregúntale a tu amigo cuánto mide su jugador favorito.',
      modelAnswer: 'How tall is your favorite basketball player?'
    },
    slotRoulette: {
      subjects: ['your brother', 'the tower', 'the basketball player'],
      actions: ['stand without shoes', 'measure in meters'],
      complements: ['compared to you?', 'in reality?']
    }
  },
  {
    id: 'wh_020',
    level: 'A2',
    expression: 'how big',
    translation: 'qué tan grande',
    use: 'Preguntar por el tamaño o dimensiones de algo.',
    formula: 'How big + is / are + [Subject]...?',
    examples: [
      { en: 'How big is your apartment?', es: '¿Qué tan grande es tu apartamento?' },
      { en: 'How big is the screen?', es: '¿Qué tan grande es la pantalla?' }
    ],
    puzzles: [
      {
        scramble: ['your', 'apartment?', 'is', 'How', 'big'],
        solution: 'How big is your apartment?',
        hint_es: '¿Qué tan grande es tu apartamento?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás buscando rentar un nuevo apartamento.',
      goal: 'Pregúntale al arrendador qué tan grande es la sala principal.',
      modelAnswer: 'How big is the living room?'
    },
    slotRoulette: {
      subjects: ['the company', 'the bedroom', 'the suitcase'],
      actions: ['look in person', 'measure in square meters'],
      complements: ['in total?', 'for four people?']
    }
  },

  // ==================== B1 LEVEL (wh_021 to wh_033) ====================
  {
    id: 'wh_021',
    level: 'B1',
    expression: 'what about',
    translation: 'qué hay de / qué tal',
    use: 'Preguntar por otra persona, cosa o alternativa sugerida.',
    formula: 'What about + [Noun / Verb-ing]...?',
    examples: [
      { en: 'What about your brother?', es: '¿Y qué hay de tu hermano?' },
      { en: 'What about having dinner together?', es: '¿Qué tal si cenamos juntos?' }
    ],
    puzzles: [
      {
        scramble: ['What', 'your', 'about', 'brother?'],
        solution: 'What about your brother?',
        hint_es: '¿Y qué hay de tu hermano?'
      }
    ],
    situationPrompt: {
      scenario: 'Están planeando una reunión y falta invitar a alguien clave.',
      goal: 'Pregunta qué pasará con esa persona o si deberían incluirla.',
      modelAnswer: 'What about Sarah? Did you invite her too?'
    },
    slotRoulette: {
      subjects: ['your previous job', 'going to the beach', 'the budget'],
      actions: ['adjusting the schedule', 'talking to the boss'],
      complements: ['for next Friday?', 'instead of this plan?']
    }
  },
  {
    id: 'wh_022',
    level: 'B1',
    expression: 'what for',
    translation: 'para qué',
    use: 'Preguntar por el propósito o utilidad de algo.',
    formula: 'What + aux + Subject + Verb + for?',
    examples: [
      { en: 'What is this tool for?', es: '¿Para qué sirve esta herramienta?' },
      { en: 'What did you buy that for?', es: '¿Para qué compraste eso?' }
    ],
    puzzles: [
      {
        scramble: ['for?', 'tool', 'this', 'is', 'What'],
        solution: 'What is this tool for?',
        hint_es: '¿Para qué sirve esta herramienta?'
      }
    ],
    situationPrompt: {
      scenario: 'Tu compañero compra un software muy costoso.',
      goal: 'Pregúntale con qué objetivo o para qué compró esa licencia.',
      modelAnswer: 'What did you purchase that software for?'
    },
    slotRoulette: {
      subjects: ['this button', 'the extra budget', 'that application'],
      actions: ['use in the project', 'install on the laptop'],
      complements: ['in daily tasks?', 'right now?']
    }
  },
  {
    id: 'wh_023',
    level: 'B1',
    expression: 'who...with',
    translation: 'con quién',
    use: 'Preguntar con qué persona se realiza una acción (preposición final).',
    formula: 'Who + did / do / are + Subject + Verb + with?',
    examples: [
      { en: 'Who did you go with?', es: '¿Con quién fuiste?' },
      { en: 'Who are you living with?', es: '¿Con quién estás viviendo?' }
    ],
    puzzles: [
      {
        scramble: ['did', 'Who', 'with?', 'go', 'you'],
        solution: 'Who did you go with?',
        hint_es: '¿Con quién fuiste?'
      }
    ],
    situationPrompt: {
      scenario: 'Tu colega viajó a San Andrés el fin de semana pasado.',
      goal: 'Pregúntale de manera natural con quién viajó.',
      modelAnswer: 'Who did you travel to San Andrés with?'
    },
    slotRoulette: {
      subjects: ['you', 'your sister', 'the manager'],
      actions: ['work on this project', 'share the office', 'hang out'],
      complements: ['on weekends?', 'yesterday?', 'at the party?']
    }
  },
  {
    id: 'wh_024',
    level: 'B1',
    expression: 'who...for',
    translation: 'para quién',
    use: 'Preguntar por el destinatario o beneficiario de una acción.',
    formula: 'Who + did / is + Subject + Verb + for?',
    examples: [
      { en: 'Who did you buy this for?', es: '¿Para quién compraste esto?' },
      { en: 'Who is this present for?', es: '¿Para quién es este regalo?' }
    ],
    puzzles: [
      {
        scramble: ['you', 'for?', 'Who', 'did', 'buy', 'this'],
        solution: 'Who did you buy this for?',
        hint_es: '¿Para quién compraste esto?'
      }
    ],
    situationPrompt: {
      scenario: 'Ves a tu compañero empacando un regalo muy especial.',
      goal: 'Pregúntale para quién preparó ese detalle.',
      modelAnswer: 'Who are you preparing that gift for?'
    },
    slotRoulette: {
      subjects: ['this document', 'the special cake', 'the message'],
      actions: ['design yesterday', 'bake for the party', 'send today'],
      complements: ['in the company?', 'for the weekend?']
    }
  },
  {
    id: 'wh_025',
    level: 'B1',
    expression: 'where...from',
    translation: 'de dónde',
    use: 'Preguntar por el origen de una persona, información u objeto.',
    formula: 'Where + do / did / are + Subject + (Verb) + from?',
    examples: [
      { en: 'Where did you get that from?', es: '¿De dónde sacaste eso?' },
      { en: 'Where are your ancestors from?', es: '¿De dónde son tus antepasados?' }
    ],
    puzzles: [
      {
        scramble: ['that', 'from?', 'did', 'Where', 'you', 'get'],
        solution: 'Where did you get that from?',
        hint_es: '¿De dónde sacaste eso?'
      }
    ],
    situationPrompt: {
      scenario: 'Un amigo te cuenta un chisme o noticia sorprendente.',
      goal: 'Pregúntale de dónde obtuvo esa información.',
      modelAnswer: 'Where did you hear that news from?'
    },
    slotRoulette: {
      subjects: ['that delicious coffee', 'the new client', 'this accent'],
      actions: ['order online', 'learn about the company', 'download the data'],
      complements: ['originally?', 'last week?']
    }
  },
  {
    id: 'wh_026',
    level: 'B1',
    expression: 'where...to',
    translation: 'hacia dónde / adónde',
    use: 'Preguntar por dirección o destino.',
    formula: 'Where + are / do + Subject + heading / traveling + to?',
    examples: [
      { en: 'Where are you traveling to?', es: '¿Adónde estás viajando?' },
      { en: 'Where is this road leading to?', es: '¿Hacia dónde conduce este camino?' }
    ],
    puzzles: [
      {
        scramble: ['traveling', 'Where', 'you', 'to?', 'are'],
        solution: 'Where are you traveling to?',
        hint_es: '¿Adónde estás viajando?'
      }
    ],
    situationPrompt: {
      scenario: 'Ves a tu profesor con maletas en el aeropuerto.',
      goal: 'Pregúntale hacia dónde se dirige en su viaje.',
      modelAnswer: 'Where are you flying to on your vacation?'
    },
    slotRoulette: {
      subjects: ['the train', 'the delegation', 'your friends'],
      actions: ['head right now', 'relocate next year', 'drive tonight'],
      complements: ['for the holidays?', 'after the conference?']
    }
  },
  {
    id: 'wh_027',
    level: 'B1',
    expression: 'how come',
    translation: 'cómo así / por qué',
    use: 'Preguntar de manera informal por una razón con sorpresa (sin inversión).',
    register: 'informal',
    formula: 'How come + Subject + Verb (sin invertir auxiliar)...?',
    examples: [
      { en: "How come you're not working today?", es: '¿Cómo así que no estás trabajando hoy?' },
      { en: "How come she didn't tell us?", es: '¿Cómo así que ella no nos contó?' }
    ],
    puzzles: [
      {
        scramble: ['How', 'come', 'today?', "you're", 'not', 'working'],
        solution: "How come you're not working today?",
        hint_es: '¿Cómo así que no estás trabajando hoy?'
      }
    ],
    situationPrompt: {
      scenario: 'Tu mejor amigo no asistió al partido de fútbol que habían planeado.',
      goal: 'Pregúntale con asombro por qué no fue.',
      modelAnswer: "How come you didn't show up to the game?"
    },
    slotRoulette: {
      subjects: ['you', 'the boss', 'they'],
      actions: ['missed the train', 'never called back', 'changed the plan'],
      complements: ['without telling anyone?', 'at the last minute?']
    }
  },
  {
    id: 'wh_028',
    level: 'B1',
    expression: 'how soon',
    translation: 'en cuánto tiempo / qué tan pronto',
    use: 'Preguntar cuánto falta para que algo ocurra o se complete.',
    formula: 'How soon + can / will + Subject + Verb...?',
    examples: [
      { en: 'How soon can you finish it?', es: '¿En cuánto tiempo puedes terminarlo?' },
      { en: 'How soon will the results be available?', es: '¿Qué tan pronto estarán disponibles los resultados?' }
    ],
    puzzles: [
      {
        scramble: ['can', 'finish', 'How', 'soon', 'it?', 'you'],
        solution: 'How soon can you finish it?',
        hint_es: '¿En cuánto tiempo puedes terminarlo?'
      }
    ],
    situationPrompt: {
      scenario: 'Esperas una cotización urgente de un proveedor.',
      goal: 'Pregúntale qué tan pronto te pueden enviar la propuesta.',
      modelAnswer: 'How soon can you send me the price quote?'
    },
    slotRoulette: {
      subjects: ['the doctor', 'the technician', 'the delivery'],
      actions: ['arrive at our office', 'deliver the package', 'review the draft'],
      complements: ['today?', 'by tomorrow morning?']
    }
  },
  {
    id: 'wh_029',
    level: 'B1',
    expression: 'how fast',
    translation: 'qué tan rápido',
    use: 'Preguntar por velocidad o rapidez de ejecución.',
    formula: 'How fast + can / does + Subject + Verb...?',
    examples: [
      { en: 'How fast can this car go?', es: '¿Qué tan rápido puede ir este carro?' },
      { en: 'How fast do you type on the keyboard?', es: '¿Qué tan rápido escribes en el teclado?' }
    ],
    puzzles: [
      {
        scramble: ['can', 'car', 'How', 'go?', 'this', 'fast'],
        solution: 'How fast can this car go?',
        hint_es: '¿Qué tan rápido puede ir este carro?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás probando una nueva conexión de internet de fibra óptica.',
      goal: 'Pregúntale al instalador qué tan rápido descarga los archivos.',
      modelAnswer: 'How fast does this network download large files?'
    },
    slotRoulette: {
      subjects: ['the athlete', 'the connection', 'the server'],
      actions: ['process customer orders', 'run the 100 meters', 'upload data'],
      complements: ['under maximum pressure?', 'per second?']
    }
  },
  {
    id: 'wh_030',
    level: 'B1',
    expression: 'how well',
    translation: 'qué tan bien',
    use: 'Preguntar por nivel de habilidad, calidad o destreza.',
    formula: 'How well + do / can + Subject + Verb...?',
    examples: [
      { en: 'How well can you speak English?', es: '¿Qué tan bien puedes hablar inglés?' },
      { en: 'How well do you know this neighborhood?', es: '¿Qué tan bien conoces este barrio?' }
    ],
    puzzles: [
      {
        scramble: ['can', 'English?', 'How', 'well', 'speak', 'you'],
        solution: 'How well can you speak English?',
        hint_es: '¿Qué tan bien puedes hablar inglés?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás en una entrevista para un trabajo bilingüe.',
      goal: 'Pregúntale a un colega qué tan bien se comunica con clientes extranjeros.',
      modelAnswer: 'How well do you handle calls in English?'
    },
    slotRoulette: {
      subjects: ['the candidate', 'your team', 'the algorithm'],
      actions: ['perform under stress', 'understand client needs', 'adapt to changes'],
      complements: ['in real situations?', 'during presentations?']
    }
  },
  {
    id: 'wh_031',
    level: 'B1',
    expression: 'how difficult',
    translation: 'qué tan difícil',
    use: 'Preguntar por grado de dificultad o complejidad.',
    formula: 'How difficult + is / was + it + (to Verb)...?',
    examples: [
      { en: 'How difficult was the exam?', es: '¿Qué tan difícil fue el examen?' },
      { en: 'How difficult is it to get a visa?', es: '¿Qué tan difícil es conseguir una visa?' }
    ],
    puzzles: [
      {
        scramble: ['exam?', 'the', 'difficult', 'How', 'was'],
        solution: 'How difficult was the exam?',
        hint_es: '¿Qué tan difícil fue el examen?'
      }
    ],
    situationPrompt: {
      scenario: 'Un amigo tuyo acaba de aprender a programar o conducir moto.',
      goal: 'Pregúntale qué tan difícil fue el proceso al principio.',
      modelAnswer: 'How difficult was it to learn at the beginning?'
    },
    slotRoulette: {
      subjects: ['the certification', 'the interview', 'the project'],
      actions: ['find the solution', 'pass on the first attempt'],
      complements: ['for beginners?', 'compared to last year?']
    }
  },
  {
    id: 'wh_032',
    level: 'B1',
    expression: 'how important',
    translation: 'qué tan importante',
    use: 'Preguntar por grado de relevancia o prioridad.',
    formula: 'How important + is / are + [Subject] + (to / for someone)...?',
    examples: [
      { en: 'How important is English for your job?', es: '¿Qué tan importante es el inglés para tu trabajo?' },
      { en: 'How important is discipline in sports?', es: '¿Qué tan importante es la disciplina en el deporte?' }
    ],
    puzzles: [
      {
        scramble: ['English', 'job?', 'important', 'your', 'is', 'for', 'How'],
        solution: 'How important is English for your job?',
        hint_es: '¿Qué tan importante es el inglés para tu trabajo?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás debatiendo sobre hábitos de vida con tu profesor.',
      goal: 'Pregúntale qué tan importante es dormir bien para la concentración.',
      modelAnswer: 'How important is good sleep for your daily focus?'
    },
    slotRoulette: {
      subjects: ['teamwork', 'punctuality', 'continuous learning'],
      actions: ['achieve company goals', 'build strong trust'],
      complements: ['in modern careers?', 'for overall success?']
    }
  },
  {
    id: 'wh_033',
    level: 'B1',
    expression: 'how much longer',
    translation: 'cuánto tiempo más',
    use: 'Preguntar por duración restante antes de que algo termine.',
    formula: 'How much longer + do / will + Subject + have to Verb...?',
    examples: [
      { en: 'How much longer do we have to wait?', es: '¿Cuánto tiempo más tenemos que esperar?' },
      { en: 'How much longer will this meeting last?', es: '¿Cuánto tiempo más durará esta reunión?' }
    ],
    puzzles: [
      {
        scramble: ['have', 'we', 'wait?', 'longer', 'How', 'to', 'much', 'do'],
        solution: 'How much longer do we have to wait?',
        hint_es: '¿Cuánto tiempo más tenemos que esperar?'
      }
    ],
    situationPrompt: {
      scenario: 'Llevas 40 minutos en una sala de espera.',
      goal: 'Pregúntale amablemente al recepcionista cuánto tiempo más tendrás que aguardar.',
      modelAnswer: 'How much longer do I need to wait for my appointment?'
    },
    slotRoulette: {
      subjects: ['the system update', 'the flight delay', 'the presentation'],
      actions: ['take to conclude', 'stay in line', 'remain paused'],
      complements: ['before we can leave?', 'approximately?']
    }
  },

  // ==================== B2 LEVEL (wh_034 to wh_050) ====================
  {
    id: 'wh_034',
    level: 'B2',
    expression: 'whom',
    translation: 'a quién / con quién',
    use: 'Forma formal utilizada cuando la persona funciona como objeto.',
    register: 'formal',
    formula: 'Whom + aux + Subject + Verb (+ preposition)?',
    examples: [
      { en: 'Whom did you speak to?', es: '¿Con quién hablaste?' },
      { en: 'To whom should I send the document?', es: '¿A quién debo enviarle el documento?' }
    ],
    puzzles: [
      {
        scramble: ['speak', 'Whom', 'you', 'did', 'to?'],
        solution: 'Whom did you speak to?',
        hint_es: '¿Con quién hablaste?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás en una auditoría corporativa y necesitas verificar responsables.',
      goal: 'Pregunta formalmente a quién contactó el gerente para la aprobación.',
      modelAnswer: 'Whom did the manager consult before authorizing the expenditure?'
    },
    slotRoulette: {
      subjects: ['the committee', 'the board of directors', 'the auditor'],
      actions: ['select for the executive role', 'delegate the authority to'],
      complements: ['during the annual review?', 'in the formal report?']
    }
  },
  {
    id: 'wh_035',
    level: 'B2',
    expression: 'to whom',
    translation: 'a quién (formal)',
    use: 'Forma formal para preguntar por el destinatario de una acción.',
    register: 'formal',
    formula: 'To whom + aux + Subject + Verb...?',
    examples: [
      { en: 'To whom does this responsibility belong?', es: '¿A quién le corresponde esta responsabilidad?' },
      { en: 'To whom should we address the official complaint?', es: '¿A quién debemos dirigir la queja oficial?' }
    ],
    puzzles: [
      {
        scramble: ['does', 'belong?', 'this', 'To', 'whom', 'responsibility'],
        solution: 'To whom does this responsibility belong?',
        hint_es: '¿A quién le corresponde esta responsabilidad?'
      }
    ],
    situationPrompt: {
      scenario: 'Debes remitir una carta legal o contrato firmado.',
      goal: 'Pregúntale al abogado a quién debe ir dirigida la correspondencia.',
      modelAnswer: 'To whom should I direct this legal document?'
    },
    slotRoulette: {
      subjects: ['the official petition', 'the confidential memo', 'the inquiry'],
      actions: ['be addressed by Friday', 'belong in the corporate hierarchy'],
      complements: ['under the current contract terms?', 'formally?']
    }
  },
  {
    id: 'wh_036',
    level: 'B2',
    expression: 'with whom',
    translation: 'con quién (formal)',
    use: 'Forma formal de preguntar por la persona que acompaña o participa.',
    register: 'formal',
    formula: 'With whom + did / will + Subject + Verb...?',
    examples: [
      { en: 'With whom did you discuss the issue?', es: '¿Con quién discutiste el asunto?' },
      { en: 'With whom will the company partner for this venture?', es: '¿Con quién se asociará la empresa para este proyecto?' }
    ],
    puzzles: [
      {
        scramble: ['the', 'discuss', 'you', 'whom', 'issue?', 'With', 'did'],
        solution: 'With whom did you discuss the issue?',
        hint_es: '¿Con quién discutiste el asunto?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás investigando una negociación de alto nivel.',
      goal: 'Pregunta formalmente con quién se reunieron los representantes.',
      modelAnswer: 'With whom did the representatives negotiate the agreement?'
    },
    slotRoulette: {
      subjects: ['the legal counsel', 'the foreign delegates', 'the researchers'],
      actions: ['collaborate on the findings', 'reach a mutual agreement'],
      complements: ['behind closed doors?', 'during the summit?']
    }
  },
  {
    id: 'wh_037',
    level: 'B2',
    expression: 'by whom',
    translation: 'por quién (voz pasiva)',
    use: 'Preguntar por el agente causante en estructuras pasivas.',
    register: 'formal',
    formula: 'By whom + was / were / is + [Subject] + Past Participle...?',
    examples: [
      { en: 'By whom was the decision made?', es: '¿Por quién fue tomada la decisión?' },
      { en: 'By whom were these guidelines approved?', es: '¿Por quién fueron aprobadas estas pautas?' }
    ],
    puzzles: [
      {
        scramble: ['made?', 'decision', 'whom', 'the', 'By', 'was'],
        solution: 'By whom was the decision made?',
        hint_es: '¿Por quién fue tomada la decisión?'
      }
    ],
    situationPrompt: {
      scenario: 'Se implementó una nueva política sin previo aviso.',
      goal: 'Pregunta formalmente por quién fue firmado o redactado el decreto.',
      modelAnswer: 'By whom was this new protocol officially authorized?'
    },
    slotRoulette: {
      subjects: ['the strategic plan', 'the security breach', 'the final draft'],
      actions: ['authorized last week', 'reviewed and sanctioned'],
      complements: ['before final deployment?', 'in the official decree?']
    }
  },
  {
    id: 'wh_038',
    level: 'B2',
    expression: 'what exactly',
    translation: 'qué exactamente',
    use: 'Solicitar información con máximo detalle y precisión.',
    formula: 'What exactly + do / did / does + Subject + mean / propose...?',
    examples: [
      { en: 'What exactly happened?', es: '¿Qué ocurrió exactamente?' },
      { en: 'What exactly do you mean by that proposal?', es: '¿Qué quieres decir exactamente con esa propuesta?' }
    ],
    puzzles: [
      {
        scramble: ['happened?', 'What', 'exactly'],
        solution: 'What exactly happened?',
        hint_es: '¿Qué ocurrió exactamente?'
      }
    ],
    situationPrompt: {
      scenario: 'Un cliente reporta una falla técnica con explicaciones vagas.',
      goal: 'Pídele precisión sobre qué error apareció en su pantalla.',
      modelAnswer: 'What exactly did you see on your screen when the crash occurred?'
    },
    slotRoulette: {
      subjects: ['the error code', 'the client requirements', 'the agreement'],
      actions: ['indicate in the logs', 'entail for the engineering team'],
      complements: ['under those conditions?', 'in technical terms?']
    }
  },
  {
    id: 'wh_039',
    level: 'B2',
    expression: 'who exactly',
    translation: 'quién exactamente',
    use: 'Pedir precisión estricta sobre la identidad de una persona.',
    formula: 'Who exactly + is / are + Subject + referring to...?',
    examples: [
      { en: 'Who exactly are you referring to?', es: '¿A quién exactamente te estás refiriendo?' },
      { en: 'Who exactly is in charge of this crisis?', es: '¿Quién exactamente está a cargo de esta crisis?' }
    ],
    puzzles: [
      {
        scramble: ['referring', 'to?', 'are', 'exactly', 'you', 'Who'],
        solution: 'Who exactly are you referring to?',
        hint_es: '¿A quién exactamente te estás refiriendo?'
      }
    ],
    situationPrompt: {
      scenario: 'Alguien menciona que "ciertas personas" no están conformes.',
      goal: 'Pide que especifique los nombres exactos de los involucrados.',
      modelAnswer: 'Who exactly raised these concerns during the debrief?'
    },
    slotRoulette: {
      subjects: ['the stakeholders', 'the department head', 'the whistleblower'],
      actions: ['approve the budget change', 'witness the incident'],
      complements: ['firsthand?', 'in the executive meeting?']
    }
  },
  {
    id: 'wh_040',
    level: 'B2',
    expression: 'where exactly',
    translation: 'dónde exactamente',
    use: 'Pedir una ubicación espacial o técnica con máxima exactitud.',
    formula: 'Where exactly + did / does + Subject + Verb...?',
    examples: [
      { en: 'Where exactly did you find it?', es: '¿Dónde exactamente lo encontraste?' },
      { en: 'Where exactly is the breakdown occurring?', es: '¿Dónde exactamente está ocurriendo la falla?' }
    ],
    puzzles: [
      {
        scramble: ['Where', 'find', 'it?', 'exactly', 'did', 'you'],
        solution: 'Where exactly did you find it?',
        hint_es: '¿Dónde exactamente lo encontraste?'
      }
    ],
    situationPrompt: {
      scenario: 'Hay un daño estructural reportado en un edificio.',
      goal: 'Pregúntale al ingeniero dónde exactamente se ubica la grieta.',
      modelAnswer: 'Where exactly is the structural fissure located?'
    },
    slotRoulette: {
      subjects: ['the pipeline leak', 'the anomaly', 'the server failure'],
      actions: ['manifest in the system', 'originate within the framework'],
      complements: ['along the main line?', 'in the infrastructure?']
    }
  },
  {
    id: 'wh_041',
    level: 'B2',
    expression: 'when exactly',
    translation: 'cuándo exactamente',
    use: 'Pedir precisión temporal rigurosa (minuto, hora o fecha crítica).',
    formula: 'When exactly + did / will + Subject + Verb...?',
    examples: [
      { en: 'When exactly did the problem start?', es: '¿Cuándo exactamente comenzó el problema?' },
      { en: 'When exactly do you expect the audit to finish?', es: '¿Cuándo exactamente esperas que termine la auditoría?' }
    ],
    puzzles: [
      {
        scramble: ['the', 'start?', 'problem', 'did', 'exactly', 'When'],
        solution: 'When exactly did the problem start?',
        hint_es: '¿Cuándo exactamente comenzó el problema?'
      }
    ],
    situationPrompt: {
      scenario: 'Hubo una caída de servidores en la compañía.',
      goal: 'Pregúntale al equipo técnico en qué minuto exacto detectaron la anomalía.',
      modelAnswer: 'When exactly did the server stop responding to requests?'
    },
    slotRoulette: {
      subjects: ['the transaction', 'the contract expiration', 'the launch'],
      actions: ['take place', 'trigger the alarm system'],
      complements: ['according to the logs?', 'to the nearest minute?']
    }
  },
  {
    id: 'wh_042',
    level: 'B2',
    expression: 'why exactly',
    translation: 'por qué exactamente',
    use: 'Exigir la justificación o raíz profunda de una decisión o evento.',
    formula: 'Why exactly + did / would + Subject + Verb...?',
    examples: [
      { en: 'Why exactly did they reject the proposal?', es: '¿Por qué exactamente rechazaron la propuesta?' },
      { en: 'Why exactly should we invest in this technology?', es: '¿Por qué exactamente deberíamos invertir en esta tecnología?' }
    ],
    puzzles: [
      {
        scramble: ['they', 'proposal?', 'reject', 'did', 'Why', 'exactly', 'the'],
        solution: 'Why exactly did they reject the proposal?',
        hint_es: '¿Por qué exactamente rechazaron la propuesta?'
      }
    ],
    situationPrompt: {
      scenario: 'La junta directiva canceló un proyecto prometedor.',
      goal: 'Pregúntale al director cuáles fueron los motivos exactos del rechazo.',
      modelAnswer: 'Why exactly did the committee decide to pull the funding?'
    },
    slotRoulette: {
      subjects: ['the board', 'the investors', 'the authorities'],
      actions: ['decline the merger', 'dismiss the alternative strategy'],
      complements: ['despite positive projections?', 'without further review?']
    }
  },
  {
    id: 'wh_043',
    level: 'B2',
    expression: 'in what way',
    translation: 'de qué manera',
    use: 'Preguntar cómo algo afecta, se relaciona o impacta un proceso.',
    formula: 'In what way + could / does + Subject + Verb...?',
    examples: [
      { en: 'In what way could this affect the company?', es: '¿De qué manera podría esto afectar a la empresa?' },
      { en: 'In what way does this strategy differ from the previous one?', es: '¿De qué manera difiere esta estrategia de la anterior?' }
    ],
    puzzles: [
      {
        scramble: ['company?', 'In', 'way', 'affect', 'what', 'the', 'this', 'could'],
        solution: 'In what way could this affect the company?',
        hint_es: '¿De qué manera podría esto afectar a la empresa?'
      }
    ],
    situationPrompt: {
      scenario: 'Se plantea una reestructuración de roles en tu equipo.',
      goal: 'Pregunta de qué manera impactará esta medida en la carga diaria de trabajo.',
      modelAnswer: 'In what way will this restructuring improve our team productivity?'
    },
    slotRoulette: {
      subjects: ['the new tax reform', 'artificial intelligence', 'the policy change'],
      actions: ['influence consumer behavior', 'reshape industry standards'],
      complements: ['over the next decade?', 'in everyday operations?']
    }
  },
  {
    id: 'wh_044',
    level: 'B2',
    expression: 'to what extent',
    translation: 'hasta qué punto / en qué medida',
    use: 'Preguntar por el grado o alcance de un fenómeno o acuerdo.',
    register: 'formal',
    formula: 'To what extent + do / does / can + Subject + Verb...?',
    examples: [
      { en: 'To what extent do you agree with this statement?', es: '¿Hasta qué punto estás de acuerdo con esta afirmación?' },
      { en: 'To what extent has inflation impacted your business?', es: '¿En qué medida ha impactado la inflación a tu negocio?' }
    ],
    puzzles: [
      {
        scramble: ['statement?', 'To', 'this', 'agree', 'you', 'what', 'do', 'extent', 'with'],
        solution: 'To what extent do you agree with this statement?',
        hint_es: '¿Hasta qué punto estás de acuerdo con esta afirmación?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás en un debate académico o panel de expertos.',
      goal: 'Pregunta hasta qué punto las redes sociales condicionan el criterio de los votantes.',
      modelAnswer: 'To what extent do social media algorithms sway public opinion?'
    },
    slotRoulette: {
      subjects: ['remote work', 'economic volatility', 'climate change'],
      actions: ['compromise long-term sustainability', 'dictate market trends'],
      complements: ['in developing nations?', 'across international markets?']
    }
  },
  {
    id: 'wh_045',
    level: 'B2',
    expression: 'for what reason',
    translation: 'por qué razón (formal)',
    use: 'Forma formal y diplomática de indagar por una causa.',
    register: 'formal',
    formula: 'For what reason + was / were / did + Subject + Verb...?',
    examples: [
      { en: 'For what reason was the meeting canceled?', es: '¿Por qué razón fue cancelada la reunión?' },
      { en: 'For what reason did the client terminate the contract?', es: '¿Por qué razón el cliente terminó el contrato?' }
    ],
    puzzles: [
      {
        scramble: ['meeting', 'For', 'was', 'what', 'canceled?', 'reason', 'the'],
        solution: 'For what reason was the meeting canceled?',
        hint_es: '¿Por qué razón fue cancelada la reunión?'
      }
    ],
    situationPrompt: {
      scenario: 'Un socio clave decide retirarse de la sociedad de imprevisto.',
      goal: 'Pregunta con máximo protocolo por qué motivo formal tomó esa decisión.',
      modelAnswer: 'For what reason was the joint venture dissolved so abruptly?'
    },
    slotRoulette: {
      subjects: ['the product recall', 'the diplomatic withdrawal', 'the delay'],
      actions: ['be sanctioned by the authorities', 'occur without prior notice'],
      complements: ['in the official memorandum?', 'from a regulatory standpoint?']
    }
  },
  {
    id: 'wh_046',
    level: 'B2',
    expression: 'under what circumstances',
    translation: 'bajo qué circunstancias',
    use: 'Preguntar por las condiciones o cláusulas que habilitan una acción.',
    register: 'formal',
    formula: 'Under what circumstances + would / could + Subject + Verb...?',
    examples: [
      { en: 'Under what circumstances would you leave your job?', es: '¿Bajo qué circunstancias dejarías tu trabajo?' },
      { en: 'Under what circumstances can a refund be issued?', es: '¿Bajo qué circunstancias se puede emitir un reembolso?' }
    ],
    puzzles: [
      {
        scramble: ['job?', 'Under', 'circumstances', 'your', 'would', 'what', 'leave', 'you'],
        solution: 'Under what circumstances would you leave your job?',
        hint_es: '¿Bajo qué circunstancias dejarías tu trabajo?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás negociando las cláusulas de garantía de un contrato comercial.',
      goal: 'Pregúntale al representante bajo qué circunstancias la garantía queda anulada.',
      modelAnswer: 'Under what circumstances would the warranty become void?'
    },
    slotRoulette: {
      subjects: ['an emergency protocol', 'a full refund', 'a breach of contract'],
      actions: ['be triggered automatically', 'be legally justified'],
      complements: ['according to international law?', 'under the new policy?']
    }
  },
  {
    id: 'wh_047',
    level: 'B2',
    expression: 'how likely',
    translation: 'qué tan probable',
    use: 'Preguntar por el grado o porcentaje de probabilidad de un suceso.',
    formula: 'How likely + is it that + Subject + Verb...? / How likely is + [Subject] + to Verb?',
    examples: [
      { en: 'How likely is it that they will accept the offer?', es: '¿Qué tan probable es que acepten la oferta?' },
      { en: 'How likely are interest rates to rise this year?', es: '¿Qué tan probable es que las tasas de interés suban este año?' }
    ],
    puzzles: [
      {
        scramble: ['offer?', 'How', 'is', 'they', 'the', 'it', 'accept', 'that', 'likely', 'will'],
        solution: 'How likely is it that they will accept the offer?',
        hint_es: '¿Qué tan probable es que acepten la oferta?'
      }
    ],
    situationPrompt: {
      scenario: 'El equipo analiza las posibilidades de ganar una licitación pública.',
      goal: 'Pregúntale al analista qué tan viable o probable es superar a los competidores.',
      modelAnswer: 'How likely is our bid to win the government tender?'
    },
    slotRoulette: {
      subjects: ['the financial forecast', 'the new product adoption', 'the project deadline'],
      actions: ['succeed in the current market', 'meet the original timeline'],
      complements: ['before the fiscal year ends?', 'under current circumstances?']
    }
  },
  {
    id: 'wh_048',
    level: 'B2',
    expression: 'how effective',
    translation: 'qué tan efectivo',
    use: 'Evaluar el grado de eficacia o rendimiento de un método o solución.',
    formula: 'How effective + is / are + [Subject] + (in / at Verb-ing)...?',
    examples: [
      { en: 'How effective is this method?', es: '¿Qué tan efectivo es este método?' },
      { en: 'How effective are these measures in preventing fraud?', es: '¿Qué tan efectivas son estas medidas para prevenir fraudes?' }
    ],
    puzzles: [
      {
        scramble: ['method?', 'How', 'effective', 'this', 'is'],
        solution: 'How effective is this method?',
        hint_es: '¿Qué tan efectivo es este método?'
      }
    ],
    situationPrompt: {
      scenario: 'Tu empresa probó una nueva campaña de marketing digital durante 3 meses.',
      goal: 'Pregúntale al especialista qué tan efectiva fue la estrategia para atraer clientes.',
      modelAnswer: 'How effective has the digital marketing campaign been in generating qualified leads?'
    },
    slotRoulette: {
      subjects: ['the training program', 'the security measures', 'the therapy'],
      actions: ['reduce operational friction', 'boost overall performance'],
      complements: ['in the long run?', 'across all regional branches?']
    }
  },
  {
    id: 'wh_049',
    level: 'B2',
    expression: 'how reliable',
    translation: 'qué tan confiable',
    use: 'Preguntar por la fiabilidad, precisión o consistencia de una fuente o sistema.',
    formula: 'How reliable + is / are + [Subject] + (for something)...?',
    examples: [
      { en: 'How reliable is this information?', es: '¿Qué tan confiable es esta información?' },
      { en: 'How reliable are the predictions generated by this model?', es: '¿Qué tan confiables son las predicciones de este modelo?' }
    ],
    puzzles: [
      {
        scramble: ['information?', 'How', 'reliable', 'this', 'is'],
        solution: 'How reliable is this information?',
        hint_es: '¿Qué tan confiable es esta información?'
      }
    ],
    situationPrompt: {
      scenario: 'Estás evaluando contratar un nuevo proveedor de hosting o logística.',
      goal: 'Pregúntale a un cliente anterior qué tan confiable es el cumplimiento de los tiempos.',
      modelAnswer: 'How reliable is their technical support when emergencies occur?'
    },
    slotRoulette: {
      subjects: ['the diagnostic tool', 'the supplier warranty', 'the telemetry data'],
      actions: ['deliver consistent performance', 'maintain uptime'],
      complements: ['under heavy workload?', 'in critical situations?']
    }
  },
  {
    id: 'wh_050',
    level: 'B2',
    expression: 'how aware',
    translation: 'qué tan consciente / qué tanto sabe',
    use: 'Preguntar por el nivel de entendimiento o conocimiento de un problema.',
    formula: 'How aware + is / are + [Subject] + of / that...?',
    examples: [
      { en: 'How aware are people of this problem?', es: '¿Qué tan consciente está la gente de este problema?' },
      { en: 'How aware is management of the employee burnout?', es: '¿Qué tan consciente está la gerencia sobre el agotamiento del personal?' }
    ],
    puzzles: [
      {
        scramble: ['aware', 'problem?', 'are', 'this', 'How', 'of', 'people'],
        solution: 'How aware are people of this problem?',
        hint_es: '¿Qué tan consciente está la gente de este problema?'
      }
    ],
    situationPrompt: {
      scenario: 'Hay un cambio regulatorio inminente que afectará a todos los usuarios.',
      goal: 'Pregunta qué tan conscientes están los líderes de las implicaciones legales.',
      modelAnswer: 'How aware is the leadership team of the new compliance risks?'
    },
    slotRoulette: {
      subjects: ['the general public', 'the executive board', 'the staff members'],
      actions: ['remain informed about the updates', 'recognize the environmental impact'],
      complements: ['at this critical juncture?', 'regarding the new policies?']
    }
  }
];

export const WH_LEVEL_COLORS: Record<string, {
  badgeBg: string;
  badgeText: string;
  borderGlow: string;
  gradientFrom: string;
  gradientTo: string;
  accentHex: string;
}> = {
  A1: {
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-400',
    borderGlow: 'border-emerald-500/40 shadow-emerald-500/10',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-700',
    accentHex: '#10b981'
  },
  A2: {
    badgeBg: 'bg-sky-500/15',
    badgeText: 'text-sky-400',
    borderGlow: 'border-sky-500/40 shadow-sky-500/10',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-blue-700',
    accentHex: '#0ea5e9'
  },
  B1: {
    badgeBg: 'bg-purple-500/15',
    badgeText: 'text-purple-400',
    borderGlow: 'border-purple-500/40 shadow-purple-500/10',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-700',
    accentHex: '#a855f7'
  },
  B2: {
    badgeBg: 'bg-rose-500/15',
    badgeText: 'text-rose-400',
    borderGlow: 'border-rose-500/40 shadow-rose-500/10',
    gradientFrom: 'from-rose-500',
    gradientTo: 'to-pink-700',
    accentHex: '#f43f5e'
  }
};
