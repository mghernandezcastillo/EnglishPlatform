import { CurriculumLevel } from '../types';

const baseStructure = (title: string, description: string) => ({
  id: `c-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
  title: title,
  description: description,
  sections: [
    {
      id: "s1",
      title: "1. Warm-up",
      duration: "5 minutos",
      objective: "Activar el cerebro en inglés.",
      slides: [
        { id: "Diapositiva 1", title: "Welcome!", description: "Let's talk for a bit." }
      ],
      action: "Conversar libremente sobre su día o un tema relacionado."
    },
    {
      id: "s2",
      title: "2. Rules & Grammar",
      duration: "15 minutos",
      objective: "Introducir la nueva gramática.",
      slides: [
        { id: "Diapositiva 2", title: "Context", description: "How do we use this in real life?" },
        { id: "Diapositiva 3", title: "Examples", description: "Let's look at some examples." },
        { id: "Diapositiva 4", title: "Formula", description: "The grammatical structure." }
      ],
      action: "Guiar al alumno para que descubra la regla por sí mismo."
    },
    {
      id: "s3",
      title: "3. Practice",
      duration: "10 minutos",
      objective: "Fijar la estructura con precisión.",
      slides: [
        { id: "Diapositiva 5", title: "Fill in the blanks", description: "Let's practice together." },
        { id: "Diapositiva 6", title: "Find the mistake", description: "Can you fix these sentences?" }
      ],
      action: "Corregir pronunciación y estructura de inmediato."
    },
    {
      id: "s4",
      title: "4. Production",
      duration: "20 minutos",
      objective: "Desarrollar la fluidez real.",
      slides: [
        { id: "Diapositiva 7", title: "Create a story", description: "Use your imagination." },
        { id: "Diapositiva 8", title: "Speaking Time", description: "Let's practice using everything." }
      ],
      action: "El alumno debe hablar un 70% del tiempo de la clase."
    },
    {
      id: "s5",
      title: "5. Wrap-up",
      duration: "10 minutos",
      objective: "Evaluar el progreso del día.",
      slides: [
        { id: "Diapositiva 9", title: "Great job today!", description: "Review of the class." },
        { id: "Diapositiva 10", title: "Homework", description: "Practice for next time." }
      ],
      action: "Explicar mejoras y dar consejos prácticos."
    }
  ]
});

export const curriculumLevels: CurriculumLevel[] = [
  {
    id: "basic-zero",
    title: "Basic Zero",
    duration: "1 mes",
    objective: "Presentarse, describir personas y lugares, expresar necesidades básicas; verbo to be, números cardinales y ordinales, colores, meses/días, profesiones, a/an, singulares, demostrativos, familia, posesivos, partes del cuerpo, preguntas con to be, hora, mascotas, there is/there are, lugares de ciudad, direcciones, pronombres de objeto, preposiciones, emociones, comida.",
    mcfrEquivalent: "Pre-A1",
    classes: [
      {
        id: "c-bz-1",
        title: "Clase 1: Introducción y Verb To Be",
        description: "Aprende a presentarte, saludar y usar el verbo To Be en presente.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el cerebro en inglés.",
            slides: [
              { 
                id: "Diapositiva 1", 
                title: "Welcome! Let's talk", 
                description: "Basic greetings",
                content: ["Hello! What's your name?", "How are you today?"],
                bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
                imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conversar libremente sobre su día o un tema relacionado."
          },
          {
            id: "s2",
            title: "2. Rules, Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Introducir la nueva gramática y vocabulario.",
            slides: [
              { 
                id: "Diapositiva 2", 
                title: "Personal Pronouns", 
                description: "Conoce los pronombres",
                content: ["I (Yo)", "You (Tú / Ustedes)", "He (Él) / She (Ella) / It (Eso)", "We (Nosotros)", "They (Ellos)"],
                bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
                imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              },
              { 
                id: "Diapositiva 3", 
                title: "Verb To Be", 
                description: "Estructura principal",
                content: ["I am (I'm)", "You are (You're)", "He is (He's)", "She is (She's)", "It is (It's)", "We are (We're)", "They are (They're)"],
                bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600"
              },
              { 
                id: "Diapositiva 4", 
                title: "Negative Form", 
                description: "Cómo negar oraciones",
                content: ["I am not (I'm not)", "You are not (You aren't)", "He is not (He isn't)"],
                bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600"
              },
              {
                id: "Diapositiva 5",
                title: "New Verbs (Action Words)",
                description: "Palabras útiles para empezar a crear oraciones",
                content: ["Work (Trabajar)", "Study (Estudiar)", "Run (Correr)", "Eat (Comer)", "Read (Leer)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Guiar al alumno para que descubra la regla por sí mismo e introducir vocabulario."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar la estructura con precisión y practicar lectura.",
            slides: [
              { 
                id: "Diapositiva 6", 
                title: "Reading Practice", 
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["Hello! My name is Sarah. I am 25 years old.", "I am a teacher. I am from London but I live in Spain.", "My brother is John. He is a student.", "We are very happy today!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva-Emoji-1",
                title: "Emojis Locos 🤪",
                description: "Adivina la oración correcta según los emojis",
                type: 'emoji-game',
                content: ['👨‍🏫 ➕ 🏫'],
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                options: ["She is a doctor.", "He is a teacher.", "We are friends."],
                correctOptionIndex: 1
              },
              { 
                id: "Diapositiva 7", 
                title: "Choose the right option (1/3)", 
                description: "Let's practice together",
                content: ["Sarah ___ a teacher."],
                options: ["am", "is", "are"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"
              },
              { 
                id: "Diapositiva 8", 
                title: "Choose the right option (2/3)", 
                description: "Let's practice together",
                content: ["They ___ my friends."],
                options: ["am", "is", "are"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"
              },
              { 
                id: "Diapositiva 9", 
                title: "Choose the right option (3/3)", 
                description: "Let's practice together",
                content: ["I ___ not tired today."],
                options: ["am", "is", "are"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"
              },
              { 
                id: "Diapositiva 10", 
                title: "Find the mistake", 
                description: "Can you fix these sentences?",
                content: ["1. They is my friends.", "2. I are very happy today.", "3. He am a good doctor."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              }
            ],
            action: "El alumno lee en voz alta, corregir pronunciación. Luego ejercicios interactivos."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Desarrollar la fluidez real y evaluación.",
            slides: [
              { 
                id: "Diapositiva 11", 
                title: "Describe the picture", 
                description: "Use 'He is...', 'She is...', 'They are...'",
                content: ["Look at the picture. What are they doing?", "Who are they?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
              },
              { 
                id: "Diapositiva 12", 
                title: "Fun Quiz! (1/4)", 
                description: "Let's see what you remember",
                content: ["I ___ learning English very fast!"],
                options: ["is", "are", "am"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              { 
                id: "Diapositiva 13", 
                title: "Fun Quiz! (2/4)", 
                description: "Let's see what you remember",
                content: ["My mother and father ___ at home."],
                options: ["is", "are", "am"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              { 
                id: "Diapositiva 14", 
                title: "Fun Quiz! (3/4)", 
                description: "Let's see what you remember",
                content: ["___ she your sister?"],
                options: ["Are", "Is", "Am"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              { 
                id: "Diapositiva 15", 
                title: "Fun Quiz! (4/4)", 
                description: "Vocabulary check",
                content: ["How do you say 'Correr' in English?"],
                options: ["Eat", "Run", "Study"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              }
            ],
            action: "El alumno debe hablar un 70% del tiempo de la clase."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre y siguientes pasos.",
            slides: [
              { 
                id: "Diapositiva 16", 
                title: "Great Job Today!", 
                description: "Summary of what we learned",
                content: ["You used the Verb To Be correctly in positive and negative sentences.", "Great reading pronunciation!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800"
              },
              { 
                id: "Diapositiva 17", 
                title: "Homework", 
                description: "Practice for next class",
                content: ["Write 5 sentences about your family using Verb To Be.", "Example: My mother is a nurse."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
              {
                id: "Diapositiva-Video-Homework-1",
                title: "Video Homework",
                description: "Watch this clip and identify the words you don't know.",
                type: 'video',
                videoUrl: "https://www.youtube.com/embed/aI_fREymNjI",
                content: ["Watch carefully. Which words do they use to say hello?", "Write down any new vocabulary words you hear."],
                bgColor: "bg-gradient-to-br from-slate-800 to-violet-900"
              }
            ],
            action: "Explicar mejoras y dar tarea."
          }
        ]
      },
      {
        id: "c-bz-2",
        title: "Clase 2: Números y La Hora",
        description: "Aprende a decir tu edad, números de teléfono y la hora.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el cerebro en inglés.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome back!",
                description: "Let's review numbers 1-10",
                content: ["Can you read this phone number?", "555-0123"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "El alumno intenta decir los números que conoce."
          },
          {
            id: "s2",
            title: "2. Rules, Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Introducir números hasta 100 y cómo decir la hora.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Numbers 11 - 20",
                description: "Los números adolescentes (teens)",
                content: ["11: Eleven, 12: Twelve, 13: Thirteen", "14: Fourteen, 15: Fifteen", "16-19: Six...teen, Seven...teen"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Numbers 20 - 100",
                description: "Las decenas terminan en 'ty'",
                content: ["20: Twenty, 30: Thirty", "40: Forty, 50: Fifty", "100: One hundred"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "What time is it?",
                description: "O'clock, half past, quarter to",
                content: ["It's five o'clock (5:00)", "It's half past two (2:30)", "It's a quarter to six (5:45)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "New Verbs (Action Words)",
                description: "Verbos de rutina diaria",
                content: ["Wake up (Despertar)", "Sleep (Dormir)", "Cook (Cocinar)", "Drink (Beber)", "Play (Jugar)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Explicar y modelar la pronunciación de los números y los tiempos."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar la estructura con precisión y practicar lectura.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["Hello! I am Mark and I am 35 years old.", "I wake up at exactly half past six (6:30).", "I drink coffee and I work at eight o'clock (8:00).", "I go to sleep at a quarter to eleven (10:45)."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva-Emoji-2",
                title: "Emojis Locos 🤪",
                description: "Adivina qué hace ella y a qué hora",
                type: 'emoji-game',
                content: ['👩‍🍳 ➕ 🍳 ➕ 🕜'],
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                options: ["She drinks coffee at half past two.", "She cooks at half past one.", "She sleeps at one o'clock."],
                correctOptionIndex: 1
              },
              {
                id: "Diapositiva 7",
                title: "Choose the correct time (1/3)",
                description: "Let's read the clock",
                content: ["3:15 -> It's ______"],
                options: ["Quarter to three", "Quarter past three", "Half past three"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Choose the correct number (2/3)",
                description: "Let's practice together",
                content: ["How do you say 45?"],
                options: ["Fourteen-five", "Fourty-five", "Forty-five"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Choose the correct word (3/3)",
                description: "Let's practice together",
                content: ["I ______ coffee at 7:00 am."],
                options: ["sleep", "drink", "play"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. It's thirty twelve. (12:30)", "2. I am fourty years old.", "3. I wake up in 7 o'clock."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              }
            ],
            action: "Guiar en la lectura, corregir pronunciación y avanzar en ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Desarrollar la fluidez real y evaluación.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Describe your Daily Routine",
                description: "Tú y yo: Hablando de nuestro día",
                content: ["Teacher: I wake up at 7:00 am. What about you?", "Teacher: I eat lunch at 1:30 pm. And you?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Let's see what you remember",
                content: ["What time is it? 09:30"],
                options: ["Nine o'clock", "Half past nine", "Quarter past nine"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "Let's see what you remember",
                content: ["How do you say 100?"],
                options: ["Ten zero", "One hundred", "A thousand"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Let's see what you remember",
                content: ["I ______ at 11:00 pm."],
                options: ["wake up", "sleep", "cook"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Vocabulary check",
                content: ["How do you write 88?"],
                options: ["Eighty-eight", "Eight-eight", "Eighteen"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Escuchar al estudiante y evaluar mediante el quiz."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre y siguientes pasos.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You matched the numbers correctly.", "You can now tell the time like a pro!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Write what time you do 5 activities in your day.", "Example: I go to sleep at 10:30 pm."],
                bgColor: "bg-gradient-to-br from-slate-700 to-slate-900"
              },
                {
                                id: "Diapositiva-Video-Homework-2",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/81MmK177K_c",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida y asignación de la tarea."
          }
        ]
      },
      {
        id: "c-bz-3",
        title: "Clase 3: Colores, Emociones y Descripción",
        description: "Expresa cómo te sientes y describe los colores de las cosas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el cerebro en inglés.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! How are you?",
                description: "Let's review greetings.",
                content: ["How are you feeling today?", "Are you happy?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conversar sobre cómo se sienten hoy."
          },
          {
            id: "s2",
            title: "2. Rules, Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Introducir vocabulario de colores y emociones.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Colors",
                description: "Los colores básicos",
                content: ["Red, Blue, Green, Yellow", "Orange, Purple, Black, White"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Emotions",
                description: "Cómo nos sentimos",
                content: ["Happy (Feliz)", "Sad (Triste)", "Angry (Enojado)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "More Emotions",
                description: "Estados físicos y mentales",
                content: ["Tired (Cansado)", "Hungry (Hambriento)", "Thirsty (Sediento)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 5",
                title: "New Verbs (Action Words)",
                description: "Verbos para expresar estados",
                content: ["Feel (Sentir)", "Look (Mirar / Verse)", "Smile (Sonreír)", "Cry (Llorar)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Explicar y pronunciar colores y emociones con el alumno."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar vocabulario y comprensión lectora.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["The sun is yellow and the sky is blue. I feel happy today.", "My friend is tired, and he is very hungry. He wants a red apple."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva-Emoji-3",
                title: "Emojis Locos 🤪",
                description: "Interpreta las emociones de estos emojis",
                type: 'emoji-game',
                content: ['😿 ➕ 💧'],
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                options: ["The cat is sad. It cries.", "The dog is angry. It barks.", "The cat is happy. It smiles."],
                correctOptionIndex: 0
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Let's practice colors",
                content: ["The sky is ______."],
                options: ["green", "blue", "red"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Let's practice emotions",
                content: ["I didn't sleep well. I am very ______."],
                options: ["happy", "tired", "hungry"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Grammar check",
                content: ["She ______ hungry."],
                options: ["is", "are", "am"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. The sun are yellow.", "2. I is angry.", "3. They are tires."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              }
            ],
            action: "Corregir pronunciación en la lectura y guiar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Desarrollar la fluidez real y evaluación.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Describe the picture",
                description: "¿Cómo se sienten? ¿Qué colores ves?",
                content: ["Look at the picture.", "Use 'He is...', 'She is...', 'The color is...'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Let's see what you remember",
                content: ["What color is a banana?"],
                options: ["Red", "Orange", "Yellow"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "What does this mean?",
                content: ["How do you say 'Triste' in English?"],
                options: ["Tired", "Angry", "Sad"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Grammar check",
                content: ["We ______ very tired today."],
                options: ["am", "is", "are"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Vocabulary check",
                content: ["What color is the sky?"],
                options: ["Black", "Blue", "Green"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar el debate guiado y evaluar."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre y siguientes pasos.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can describe emotions and colors!", "Your pronunciation is improving."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Look around your house.", "Write 5 sentences about the color of things you see.", "Example: The chair is brown."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-3",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/awWfoQONORg",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida y asignación de la tarea."
          }
        ]
      },
      {
        id: "c-bz-4",
        title: "Clase 4: Familia y Posesivos",
        description: "Habla sobre los miembros de tu familia e indica de quién son las cosas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el cerebro en inglés.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Who is this?",
                description: "Let's talk about the people we love.",
                content: ["Do you have a big family or a small family?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conversar libremente sobre la familia."
          },
          {
            id: "s2",
            title: "2. Rules, Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender miembros de la familia y adjetivos posesivos.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Possessive Adjectives",
                description: "Cómo decir que algo es de alguien",
                content: ["I -> My (Mi)", "You -> Your (Tu)", "He -> His (Su - de él)", "She -> Her (Su - de ella)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "More Possessive Adjectives",
                description: "Nosotros y Ellos",
                content: ["We -> Our (Nuestro)", "They -> Their (Su - de ellos)", "It -> Its (Su - de cosa/animal)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "The Possessive 's",
                description: "Otra forma de indicar posesión (El/La ___ de ___)",
                content: ["Maria's car (El carro de Maria)", "My brother's dog (El perro de mi hermano)", "John's house (La casa de John)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 5",
                title: "Family Vocabulary",
                description: "Miembros principales de la familia",
                content: ["Mother / Father (Madre / Padre)", "Sister / Brother (Hermana / Hermano)", "Aunt / Uncle (Tía / Tío)", "Cousin (Primo/a)", "Grandmother / Grandfather (Abuelos)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Explicar gramática y practicar vocabulario."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar estructura y vocabulario mediante lectura y ejercicios.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["This is my family. My father's name is David and my mother's name is Laura.", "I have one brother. His name is Tom. Her sister is Emma.", "Our house is big and we are very happy."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Let's practice possessives",
                content: ["I have a brother. ______ name is Peter."],
                options: ["Her", "His", "My"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Let's practice possessives",
                content: ["She is my sister. ______ car is blue."],
                options: ["His", "Our", "Her"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Let's practice the 's",
                content: ["The computer belongs to Sarah. It is ______ computer."],
                options: ["Sarahs", "Sarah's", "Sarah is"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. She is my brother.", "2. I have a sister. His name is Ana.", "3. The car of John is red. (Change to 's)"],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Familia y Posesivos" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Guiar en la lectura y corregir pronunciación. Resolver ejercicios juntos."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Fluidez conversacional y retención.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Describe your family",
                description: "Habla sobre los miembros de tu familia",
                content: ["Who is in your family?", "What are their names?", "Try to use: My mother's name is... His name is..."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Who is this?",
                content: ["My mother's sister is my ______."],
                options: ["Aunt", "Uncle", "Cousin"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "Who is this?",
                content: ["My father's brother is my ______."],
                options: ["Grandfather", "Aunt", "Uncle"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Grammar check",
                content: ["We have a dog. ______ dog is small."],
                options: ["Their", "Our", "Your"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Vocabulary check",
                content: ["How do you say 'Primo' in English?"],
                options: ["Nephew", "Uncle", "Cousin"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar el habla y evaluar progreso con el quiz."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Feedback y cierre.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can talk about your family!", "You know how to use My, Your, His, Her..."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Draw your family tree.", "Write 5 sentences describing your family members using HIS and HER."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-4",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/vXI2lRCnTKw",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedirse y documentar tareas."
          }
        ]
      },
      {
        id: "c-bz-5",
        title: "Clase 5: There is / There are y Lugares",
        description: "Describe qué hay en una habitación o en tu ciudad.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el cerebro en inglés.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Where are you?",
                description: "Let's talk about your favorite places.",
                content: ["Do you live in a big city or a small town?", "What is your favorite room in your house?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conversar libremente sobre su ciudad y su casa."
          },
          {
            id: "s2",
            title: "2. Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender vocabulario de lugares y el uso de There is/There are.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Places in the City",
                description: "Lugares comunes en una ciudad",
                content: ["Hospital, School, Bank", "Supermarket, Park, Restaurant", "Museum, Library"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 3",
                title: "Rooms in a House",
                description: "Habitaciones del hogar",
                content: ["Living room (Sala)", "Kitchen (Cocina)", "Bedroom (Dormitorio)", "Bathroom (Baño)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "There is / There are",
                description: "Cómo decir 'Hay' en lugares",
                content: ["There is + Singular (Hay 1 cosa)", "Example: There is a bank.", "There are + Plural (Hay 2 o más)", "Example: There are two schools."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Negative and Questions",
                description: "Cómo negar y preguntar",
                content: ["Negative: There isn't... / There aren't...", "Question: Is there a park? / Are there parks?"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Explicar las reglas de there is/there are y el vocabulario."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar estructura y vocabulario mediante lectura y ejercicios.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta:",
                content: ["My city is very big. There is a beautiful park and there are many restaurants.", "In my house, there is a small kitchen and there are three bedrooms."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Singular vs Plural",
                content: ["______ a dog in the park."],
                options: ["There is", "There are", "They is"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Singular vs Plural",
                content: ["______ three apples on the table."],
                options: ["There is", "There are", "Have"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Questions",
                content: ["______ a bank near here?"],
                options: ["Are there", "There is", "Is there"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. There are a book.", "2. Is there two parks?", "3. There isn't five cars."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 5: There is / There are y Lugares" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Intervenir para corregir la lectura y orientar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Fluidez para describir el entorno.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Describe the room",
                description: "¿Qué hay en tu habitación ahora?",
                content: ["Look around your room.", "Use: 'There is...' and 'There are...'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Grammar check",
                content: ["___ a good restaurant in this town."],
                options: ["There are", "There is", "Is there"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "Grammar check",
                content: ["___ many people in the supermarket."],
                options: ["There are", "There is", "Are there"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Grammar check",
                content: ["___ a hospital here? No, ___."],
                options: ["Is there / there isn't", "Are there / there aren't", "Is there / it isn't"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Vocabulary check",
                content: ["Where do you read books?"],
                options: ["Supermarket", "Bank", "Library"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar que el alumno describa su propio entorno y evaluar en el quiz."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Feedback y cierre.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can describe what is in a room or city!", "Remember: 'There is' vs 'There are'."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Write 5 sentences about your city.", "Example: There is a big park. There are two cinemas."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-5",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/on_1sS6Ii8M",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedirse y documentar tareas del alumno."
          }
        ]
      },
      {
        id: "c-bz-6",
        title: "Clase 6: Meses, Días y Números Ordinales",
        description: "Aprende las fechas, cumpleaños y el calendario.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el conocimiento previo sobre números.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Numbers we know",
                description: "Let's review numbers 1 to 31.",
                content: ["Can you count from 1 to 10?", "What is your favorite number?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Repaso breve de los números cardinales."
          },
          {
            id: "s2",
            title: "2. Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Enseñar meses, días, números ordinales y cómo decir la fecha.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Days of the Week",
                description: "Los días de la semana",
                content: ["Monday, Tuesday, Wednesday, Thursday", "Friday, Saturday, Sunday"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Months of the Year (1/2)",
                description: "Enero a Junio",
                content: ["January, February, March", "April, May, June"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Months of the Year (2/2)",
                description: "Julio a Diciembre",
                content: ["July, August, September", "October, November, December"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 5",
                title: "Ordinal Numbers (Dates)",
                description: "Números para las fechas",
                content: ["1st - First, 2nd - Second, 3rd - Third", "4th - Fourth, 5th - Fifth...", "21st - Twenty-first, 22nd - Twenty-second"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 6",
                title: "How to say the date",
                description: "Estructura para decir la fecha (US)",
                content: ["Month + Ordinal Number", "Example: May 4th (May fourth)", "Example: October 31st (October thirty-first)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Modelar la pronunciación de días, meses y números ordinales."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar estructura de fechas con lectura y ejercicios.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "Reading Practice",
                description: "Lee en voz alta:",
                content: ["My favorite day is Friday. My birthday is on July 14th (fourteenth).", "Today is Monday, October 2nd (second)."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (1/3)",
                description: "Days of the week",
                content: ["Today is Monday, tomorrow is ______."],
                options: ["Sunday", "Tuesday", "Thursday"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (2/3)",
                description: "Ordinal numbers",
                content: ["My birthday is May ______ (3)."],
                options: ["Three", "Threeth", "Third"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Complete the sentence (3/3)",
                description: "Dates",
                content: ["Christmas is on December ______ (25)."],
                options: ["Twenty-fifth", "Twenty-five", "Twenty-fiveth"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 11",
                title: "Prepositions 'IN' vs 'ON'",
                description: "Meses vs Días/Fechas",
                content: ["IN + Month (In May)", "ON + Day/Date (On Friday / On May 4th)"],
                bgColor: "bg-gradient-to-br from-orange-600 to-red-700"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 6: Meses, Días y Números Ordinales" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir pronunciación y aclarar In vs On."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Autonomía diciendo fechas de cumpleaños y festividades.",
            slides: [
              {
                id: "Diapositiva 12",
                title: "When is your birthday?",
                description: "Habla sobre ti y tu familia",
                content: ["When is your birthday?", "When is your mother's birthday?", "My birthday is on..."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (1/4)",
                description: "What comes next?",
                content: ["March, April, ______"],
                options: ["June", "May", "July"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (2/4)",
                description: "Prepositions",
                content: ["My birthday is ___ October."],
                options: ["in", "on", "at"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (3/4)",
                description: "Prepositions",
                content: ["I play tennis ___ Monday."],
                options: ["in", "on", "at"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 16",
                title: "Fun Quiz! (4/4)",
                description: "Ordinal Number",
                content: ["How do you write '22' for dates?"],
                options: ["Twenty-two", "Twenty-second", "Twenty-twoth"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar producción oral usando las fechas propias y quiz."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre y tarea.",
            slides: [
              {
                id: "Diapositiva 17",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can say the days, months and dates!", "You know the difference between IN and ON."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 18",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Write the birthdays of 4 family members or friends.", "Example: Maria's birthday is on August 5th."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-6",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Asignación de tareas y despedida."
          }
        ]
      },
      {
        id: "c-bz-7",
        title: "Clase 7: Artículos y Demostrativos",
        description: "Uso de a/an, sustantivos singulares/plurales y This/That/These/Those.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el pensamiento en inglés con objetos cercanos.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Look around",
                description: "What do you have on your desk?",
                content: ["Do you have a phone?", "Do you have a book?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre objetos a su alrededor para introducir el tema."
          },
          {
            id: "s2",
            title: "2. Rules, Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender el artículo A/An y los demostrativos This/That/These/Those.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "A vs AN (Singular)",
                description: "Cómo decir 'UN' o 'UNA'",
                content: ["A + Consonant (a car, a dog, a book)", "AN + Vowel (an apple, an elephant, an orange)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Singular vs Plural",
                description: "Formando plurales comunes",
                content: ["Car -> Cars", "Apple -> Apples", "Watch -> Watches (termina en 'ch', 'sh', 's', 'x')"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Irregular Plurals",
                description: "Plurales que cambian completamente",
                content: ["Man -> Men", "Woman -> Women", "Child -> Children", "Person -> People"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 5",
                title: "Demonstratives (Singular)",
                description: "Señalando cosas (1 cosa)",
                content: ["THIS is a book. (Esto - Cerca)", "THAT is a car. (Eso - Lejos)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Demonstratives (Plural)",
                description: "Señalando cosas (+2 cosas)",
                content: ["THESE are my books. (Estos - Cerca)", "THOSE are his cars. (Esos - Lejos)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Con soporte visual, mostrar las diferencias de distancia y cantidad."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar artículos y demostrativos a través de visualización y gramática.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["This is my desk. I have a computer and an apple.", "Look at that tree over there. Those are birds in the tree."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (1/3)",
                description: "A vs An",
                content: ["I eat ______ orange every morning."],
                options: ["a", "an", "the"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (2/3)",
                description: "Plurals",
                content: ["There are three ______ in the park."],
                options: ["childs", "child", "children"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Complete the sentence (3/3)",
                description: "Demonstratives",
                content: ["Look at ______ stars in the sky. (Far, plural)"],
                options: ["this", "those", "these"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 11",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. I have a umbrella.", "2. There are five peoples.", "3. These is my phone."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 7: Artículos y Demostrativos" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir errores de pronunciación y guiar los ejercicios, explicando el por qué."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Fluidez para indicar cosas en el entorno y evaluación.",
            slides: [
              {
                id: "Diapositiva 12",
                title: "Show and Tell",
                description: "Muestra cosas en cámara",
                content: ["Show me something close to you: 'This is a...'", "Point at something far: 'That is a...'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (1/4)",
                description: "a/an",
                content: ["It's ______ elephant."],
                options: ["a", "an", "the"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (2/4)",
                description: "Irregular plurals",
                content: ["One woman, two ______."],
                options: ["womans", "women", "womens"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (3/4)",
                description: "Demonstratives",
                content: ["(Holding keys) ______ are my keys."],
                options: ["This", "That", "These"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 16",
                title: "Fun Quiz! (4/4)",
                description: "Review",
                content: ["(Pointing at a far bird) Look at ______ bird!"],
                options: ["that", "those", "this"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Juego de Show and Tell y evaluación de conceptos."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso final y tarea.",
            slides: [
              {
                id: "Diapositiva 17",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You master 'A/An'!", "You can point out objects with This/That/These/Those."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 18",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Walk around your house.", "Write 5 sentences pointing at things using This/That/These/Those."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-7",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/oBatJc1VZCE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Dejar la tarea clara y motivar al estudiante."
          }
        ]
      },
      {
        id: "c-bz-8",
        title: "Clase 8: Partes del Cuerpo y Mascotas",
        description: "Aprende a describir físicamente a personas y animales.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Despertar el interés sobre mascotas y descripciones.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Do you have pets?",
                description: "Let's talk about animals.",
                content: ["Do you have a dog or a cat?", "What is your favorite animal?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre mascotas para crear una conexión personal."
          },
          {
            id: "s2",
            title: "2. Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender partes del cuerpo humano y animal, además de Has got/Have got.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Body Parts (Humans)",
                description: "Nuestras partes del cuerpo",
                content: ["Head, Eyes, Nose, Mouth", "Arms, Hands, Legs, Feet"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Body Parts (Animals)",
                description: "Partes especiales de los animales",
                content: ["Tail (Cola)", "Paws (Patas)", "Ears (Orejas largas)", "Wings (Alas)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Describing Physical Appearance",
                description: "Adjetivos comunes",
                content: ["Tall (Alto) / Short (Bajo)", "Big (Grande) / Small (Pequeño)", "Long (Largo) / Short (Corto - pelo)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Using HAVE / HAS",
                description: "Para describir lo que alguien o algo tiene",
                content: ["I have brown eyes.", "He HAS short hair. (Third person)", "The dog HAS a long tail."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Mostrar el uso de have/has para posesiones físicas y practicar partes del cuerpo tocándolas."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Consolidar el vocabulario mediante un texto descriptivo.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño párrafo:",
                content: ["I have a dog. His name is Max. He is a big dog.", "He has long ears and a short tail. Has he got brown eyes? Yes, he has."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Have vs Has",
                content: ["The cat ______ green eyes."],
                options: ["have", "has", "is"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Body parts",
                content: ["A dog has four ______."],
                options: ["hands", "arms", "legs/paws"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Adjectives",
                content: ["Giraffes have very ______ necks."],
                options: ["short", "tall", "long"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. The dog have a long tail.", "2. I has brown eyes.", "3. A bird has two hands."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 8: Partes del Cuerpo y Mascotas" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Guiar lectura y ejercicios corrigiendo el uso de have/has."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Capacidad para describir personas o mascotas sin apuntes.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Describe an animal",
                description: "Piensa en un animal y descríbelo",
                content: ["It is (big/small).", "It has (two legs/four legs).", "It has a (long/short) tail."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Body parts",
                content: ["We smell with our ______."],
                options: ["Nose", "Eyes", "Ears"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "Have vs Has",
                content: ["My sister ______ long hair."],
                options: ["have", "has", "is"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Animals",
                content: ["A bird uses its ______ to fly."],
                options: ["Tail", "Paws", "Wings"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Description",
                content: ["Elephants are very ______."],
                options: ["Small", "Big", "Short"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar 'Adivina el animal' y realizar el Quiz."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Resumen y estímulo al cierre.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can describe yourself and animals!", "You know the difference between HAVE and HAS."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Describe your pet or your favorite animal in 5 sentences.", "Example: A tiger is big. It has orange and black stripes. It has a long tail."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-8",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/FD1IpuXSq74",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Explicar bien la tarea y felicitar."
          }
        ]
      },
      {
        id: "c-bz-9",
        title: "Clase 9: Comida y Necesidades Básicas",
        description: "Vocabulario de comida y el uso de pronombres de objeto.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar vocabulario sobre gustos y comida.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Are you hungry?",
                description: "Let's talk about food.",
                content: ["What is your favorite food?", "Do you like pizza?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre la comida favorita del estudiante."
          },
          {
            id: "s2",
            title: "2. Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender alimentos básicos, expresar necesidades (want/need), y pronombres de objeto.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Common Food",
                description: "Alimentos del día a día",
                content: ["Bread, Milk, Eggs, Cheese", "Chicken, Beef, Fish", "Apple, Banana, Orange"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Meals of the Day",
                description: "Las comidas principales",
                content: ["Breakfast (Desayuno)", "Lunch (Almuerzo)", "Dinner (Cena)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "I want vs I need",
                description: "Diferencia entre querer y necesitar",
                content: ["I want an apple. (Lo deseo)", "I need water. (Es esencial)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Object Pronouns",
                description: "Quien recibe la acción",
                content: ["I -> Me", "You -> You", "He -> Him", "She -> Her", "We -> Us", "They -> Them"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 6",
                title: "Using Object Pronouns",
                description: "Ejemplos prácticos",
                content: ["I love pizza. I eat IT every day.", "Call Mary. Call HER.", "Look at John. Look at HIM."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Explicar las comidas y la diferencia entre Subject PRonouns (hacen la acción) y Object Pronouns (la reciben)."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar sustantivos, verbos y object pronouns mediante lectura y ejercicios.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "Reading Practice",
                description: "Lee en voz alta este pequeño diálogo:",
                content: ["- Look at those sandwiches! I want them.", "- I am thirsty. I need water.", "- Give me that apple, please. I like it."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (1/3)",
                description: "Want vs Need",
                content: ["I am very hungry. I ______ a sandwich."],
                options: ["need", "am", "want"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (2/3)",
                description: "Object pronouns",
                content: ["Where is Sarah? I can't see ______."],
                options: ["she", "her", "him"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Complete the sentence (3/3)",
                description: "Meals",
                content: ["I eat ______ in the morning."],
                options: ["Dinner", "Lunch", "Breakfast"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 11",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. Look at he.", "2. I want a waters.", "3. I eat dinner in the morning."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 9: Comida y Necesidades Básicas" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir pronunciación y aclarar el uso de object pronouns."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Simular una situación real en un restaurante.",
            slides: [
              {
                id: "Diapositiva 12",
                title: "Role Play: At a restaurant",
                description: "Pide comida al profesor",
                content: ["Student: 'I am hungry. I want...'", "Teacher: 'Here you go. Do you want...?'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (1/4)",
                description: "Object pronouns",
                content: ["I love apples. I like to eat ______."],
                options: ["they", "them", "their"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (2/4)",
                description: "Vocabulary",
                content: ["Which is a drink?"],
                options: ["Bread", "Chicken", "Milk"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (3/4)",
                description: "Object pronouns",
                content: ["My brother is here. Tell ______ to come in."],
                options: ["he", "him", "his"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 16",
                title: "Fun Quiz! (4/4)",
                description: "Meals",
                content: ["What do you usually eat at 1:00 PM?"],
                options: ["Breakfast", "Dinner", "Lunch"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Ejecutar role-play de restaurante."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Reflexión final y tarea.",
            slides: [
              {
                id: "Diapositiva 17",
                title: "Great Job Today!",
                description: "Summary of what we learned",
                content: ["You can talk about food and what you need!", "You master Object Pronouns (me, him, her...)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 18",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Write what you usually eat for breakfast, lunch, and dinner.", "Example: For breakfast, I eat eggs and bread."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-9",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/OjzsRpUBXbY",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida."
          }
        ]
      },
      {
        id: "c-bz-10",
        title: "Clase 10: Direcciones y Preposiciones de Lugar",
        description: "Cómo dar direcciones de calles y conocer dónde se ubican los objetos.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar el pensamiento espacial.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Where are you going?",
                description: "Let's talk about locations.",
                content: ["How do you go to the supermarket?", "Do you use maps?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos si usan mapas o piden direcciones habitualmente."
          },
          {
            id: "s2",
            title: "2. Vocabulary & Grammar",
            duration: "15 minutos",
            objective: "Aprender preposiciones para objetos y verbos para dar direcciones.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Prepositions of Place (1/2)",
                description: "Dónde están las cosas",
                content: ["IN: Adentro de algo (In the box)", "ON: Sobre una superficie (On the table)", "UNDER: Debajo de (Under the bed)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Prepositions of Place (2/2)",
                description: "Dónde están los lugares",
                content: ["NEXT TO: Al lado de (Next to the bank)", "BETWEEN: En medio de (Between the bank and school)", "ACROSS FROM: Enfrente de (Across from the park)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Giving Directions",
                description: "Verbos clave",
                content: ["Go straight (Ve derecho)", "Turn left (Gira a la izquierda)", "Turn right (Gira a la derecha)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Asking for Directions",
                description: "Preguntas útiles",
                content: ["Excuse me, where is the...? (Disculpe, ¿dónde está...?)", "How do I get to...? (¿Cómo llego a...?)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Ejemplificar las preposiciones usando objetos a la mano y dibujar/mostrar un croquis para directions."
          },
          {
            id: "s3",
            title: "3. Practice & Reading",
            duration: "15 minutos",
            objective: "Fijar vocabulario identificando ubicaciones en oraciones.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee en voz alta:",
                content: ["Excuse me, where is the bank?", "- Go straight and turn left. It's next to the supermarket. It is across from the park."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Prepositions",
                content: ["The cat is sleeping ______ the bed. (debajo)"],
                options: ["in", "on", "under"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Prepositions",
                content: ["The pharmacy is ______ the bank and the school."],
                options: ["next to", "between", "in"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Directions",
                content: ["To get to the hospital, ______ straight for two blocks."],
                options: ["walks", "go", "turn"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 10",
                title: "Find the mistake",
                description: "Can you fix these sentences?",
                content: ["1. The apple is in the table. (surface)", "2. The bank is between to the school.", "3. Turn straight ahead."],
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 10: Direcciones y Preposiciones de Lugar" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir errores de pronunciación, uso de in/on/under."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Simular una situación dando indicaciones en la calle.",
            slides: [
              {
                id: "Diapositiva 11",
                title: "Role Play: Lost Tourist",
                description: "Ayuda al turista",
                content: ["Tourist: 'Excuse me, where is the supermarket?'", "You: Give directions using turn right/left, go straight, next to..."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (1/4)",
                description: "Prepositions",
                content: ["The keys are ______ my pocket."],
                options: ["in", "on", "under"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (2/4)",
                description: "Prepositions",
                content: ["The picture is ______ the wall."],
                options: ["in", "on", "next to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 14",
                title: "Fun Quiz! (3/4)",
                description: "Directions",
                content: ["______ left at the next corner."],
                options: ["Turn", "Go", "Look"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 15",
                title: "Fun Quiz! (4/4)",
                description: "Locations",
                content: ["The museum is ______ the park. (enfrente de)"],
                options: ["next to", "between", "across from"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar 'Turista Perdido' y evaluar preposiciones."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso final y conclusión del nivel.",
            slides: [
              {
                id: "Diapositiva 16",
                title: "Level 1 Complete!",
                description: "You are doing amazing!",
                content: ["You can give directions!", "You know prepositions of place."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 17",
                title: "Homework",
                description: "Assignment for next time",
                content: ["Write directions from your house to a near park or store.", "Example: Go out, turn left, go straight... It is next to the bakery."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-10",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/SHXPpsIJTb0",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Celebrar la finalización del nivel 1 y asignar tarea."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Greetings & Basics",
              "question": "Hello! How are you today? What is your name?"
            },
            {
              "topic": "Numbers & Dates",
              "question": "How old are you? When is your birthday?"
            },
            {
              "topic": "Family",
              "question": "Tell me about your family. Do you have brothers or sisters?"
            },
            {
              "topic": "Daily Routine & Time",
              "question": "What time do you usually wake up? What do you do in the morning?"
            },
            {
              "topic": "Likes & Dislikes",
              "question": "What food do you like? Is there any food you don't like?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "Hello, I ___ a student. My name ___ John.",
              "options": [
                "am / is",
                "is / am",
                "are / is"
              ],
              "correctAnswer": "am / is"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "There ___ three apples on the table.",
              "options": [
                "is",
                "are",
                "be"
              ],
              "correctAnswer": "are"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "She ___ (wake) up at 7:00 AM every day.",
              "options": [],
              "correctAnswer": "wakes"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Listen and type the number you hear.",
              "audioText": "Seventy-five",
              "options": [],
              "correctAnswer": "75"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "My mother's sister is my ___.",
              "options": [
                "aunt",
                "uncle",
                "cousin"
              ],
              "correctAnswer": "aunt"
            }
          ]
},
  {
    id: "basic-1",
    title: "Basic 1",
    duration: "1 mes",
    objective: "Futuro con going to y will; preguntas why, where, when, who, with; preguntas wh con will; sí/no con will y going to; contracciones con will; gonna; what kind, what time, how, how much, how many.",
    mcfrEquivalent: "A1",
    classes: [
      {
        id: "c-b1-1",
        title: "Clase 1: Future with Will vs Going to",
        description: "Contraste entre planes seguros y decisiones espontáneas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir el contexto de hablar sobre el futuro.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Future Plans",
                description: "What are you doing tomorrow?",
                content: ["Do you have plans for the weekend?", "Will you travel soon?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos si ya tienen planes claros o si fluirán con el día."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Comprender la diferencia fundamental entre Will y Going to.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Future with GOING TO",
                description: "Para planes confirmados e intenciones claras.",
                content: ["I am going to travel to Spain.", "She is going to study medicine.", "Uso: Plan o intención ya decidido antes de hablar."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Future with WILL",
                description: "Decisiones espontáneas, promesas y predicciones.",
                content: ["I will have a coffee, please. (Decisión al momento)", "I promise I will help you. (Promesa)", "I think it will rain today. (Predicción sin evidencia)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Will vs Going To (Contrast)",
                description: "Comparación directa",
                content: ["- The phone is ringing! -> I will answer it! (Espontáneo)", "- Why are you wearing running shoes? -> I am going to run. (Plan)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Mostrar la diferencia clave entre tener algo ya planeado (going to) versus decidirlo ahora (will)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Diferenciar ambos tiempos en oraciones contextuales.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Lee y comprende el contexto:",
                content: ["Context: Ordering food at a restaurant.", "- Waiter: Are you ready to order?", "- You: Yes, I will have the chicken."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Decide the correct future form",
                content: ["Look at those dark clouds! It ______ rain."],
                options: ["will", "is going to", "going to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Spontaneous decision",
                content: ["I am very hungry. I think I ______ buy a pizza."],
                options: ["am going to", "will", "buy"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Plan",
                content: ["We ______ move to a new house next month. We bought it yesterday!"],
                options: ["will", "are going to", "go to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Future with Will vs Going to" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Asegurarse de que analicen el contexto (¿Es plan o es espontáneo?) antes de responder."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Producir lenguaje hablado usando ambos tiempos futuros.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Imagine scenarios",
                description: "¿Qué harías?",
                content: ["1. Someone knocks on your door.", "2. Your friend has a headache.", "3. Your plans for next summer."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["Which is better for a promise?"],
                options: ["Will", "Going to", "Present"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Contextual Grammar",
                content: ["'Oh no, I forgot my wallet!' 'Don't worry, I ______ pay for you.'"],
                options: ["am going to", "will", "going"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Contextual Grammar",
                content: ["'Why did you buy paint?' 'I ______ paint my bedroom.'"],
                options: ["am going to", "will", "will going to"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Role-plays cortos provocando decisiones al momento o hablando sobre planes futuros."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso final y asignación de tareas.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You controlled the future!",
                content: ["Going To = Plan.", "Will = Spontaneous / Promise."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Write your future.",
                content: ["Write 3 sentences using Going To (your plans).", "Write 2 sentences using Will (promises or spontaneous ideas)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-11",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/LAywO9NM7ws",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Reforzar el takeaway clave de la clase y explicar la tarea."
          }
        ]
      },
      {
        id: "c-b1-2",
        title: "Clase 2: Preguntas Yes/No con Futuro y Contracciones",
        description: "Aprende a hacer preguntas y usar 'gonna' de forma nativa.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Repasar will y going to de forma conversacional.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome Back!",
                description: "What are your plans tonight?",
                content: ["Tell me 1 plan you have for tonight.", "Use 'Going to'!"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Breve check-in pidiendo que usen going to."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar estructuras interrogativas y la contracción 'gonna'.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Yes/No Questions with WILL",
                description: "Intercambio de sujeto y auxiliar.",
                content: ["Will you help me?", "- Yes, I will. / - No, I won't.", "Will they win the game?", "- Yes, they will. / - No, they won't."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Yes/No Questions with GOING TO",
                description: "Usando el verbo To Be.",
                content: ["Are you going to study tonight?", "- Yes, I am. / - No, I'm not.", "Is she going to travel?", "- Yes, she is. / - No, she isn't."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Native Contractions: GONNA",
                description: "Going to = Gonna",
                content: ["I'm going to sleep -> I'm gonna sleep.", "Are you going to eat? -> Are you gonna eat?", "Note: We only use it in informal speech!"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Native Contractions: 'LL",
                description: "I will = I'll",
                content: ["I will call you -> I'll call you.", "She will come -> She'll come.", "It will rain -> It'll rain."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Modelar pronunciación natural de 'gonna' y ''ll' (ej. it'll)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Fijar estructuras interrogativas y contracciones.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee de forma natural:",
                content: ["- Hey, are you gonna go to the party tonight?", "- No, I'm not. I'll probably stay home and watch a movie.", "- Ok, I'll see you tomorrow then!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Questions with Will",
                content: ["______ you open the door, please?"],
                options: ["Are", "Will", "Gonna"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Using Gonna",
                content: ["I am ______ call my friend later."],
                options: ["gonna", "will", "going"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Short Answers",
                content: ["Are you going to study? - Yes, I ______."],
                options: ["will", "gonna", "am"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Preguntas Yes/No con Futuro y Contracciones" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir en vivo la pronunciación de 'gonna' evitando que digan 'Im gonna to..."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Realizar entrevistas aplicando preguntas.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Interview your teacher",
                description: "Hazme preguntas:",
                content: ["Ask me 1 question with 'Will you...?'", "Ask me 1 question with 'Are you gonna...?'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["What is the short form of 'I will'?"],
                options: ["I'am", "I'll", "Iill"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Negative Will",
                content: ["The negative of 'will' is: __"],
                options: ["willn't", "don't will", "won't"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Gonna",
                content: ["I am ______ eat pizza."],
                options: ["gonna to", "gonna", "going"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Actividad dinámica entrevistando al profesor."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso final de pronunciación fluida.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Great Job!",
                description: "You sound more native!",
                content: ["You can ask future questions.", "You know how to use GONNA and I'LL."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Write questions.",
                content: ["Write 2 questions with 'Will you...' for a friend.", "Write 2 questions with 'Are you gonna...'"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-12",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/qfumAs6o-xc",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Check out animando al estudiante por su mejora fonética."
          }
        ]
      },
      {
        id: "c-b1-3",
        title: "Clase 3: Preguntas WH con Futuro",
        description: "Dominio de Why, Where, When, Who y With.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar Wh- words.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The 5 W's",
                description: "Do you remember the question words?",
                content: ["Who? (¿Quién?)", "Where? (¿Dónde?)", "When? (¿Cuándo?)"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer un repaso rápido de qué significa cada Wh- word."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Integrar Wh- words con estructuras de futuro.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "WH Questions with WILL",
                description: "Wh- word + Will + Subject + Verb",
                content: ["Where will you live? (¿Dónde vivirás?)", "What will she do? (¿Qué hará ella?)", "Who will win? (¿Quién ganará?)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "WH Questions with GOING TO",
                description: "Wh- word + Be + Subject + Going to",
                content: ["Where are you going to travel? (¿A dónde vas a viajar?)", "What is he going to study? (¿Qué va a estudiar?)", "When are they going to leave? (¿Cuándo se van a ir?)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Why and Who... with",
                description: "Preguntando razones y compañías",
                content: ["Why will you travel? - Because...", "Who are you going to travel WITH? (¿Con quién vas a viajar?)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Mostrar la fórmula matemática para crear estas preguntas sin fallar en el orden."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Ordenar oraciones y seleccionar la palabra interrogativa correcta.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Lee la entrevista:",
                content: ["A: What are you gonna do this weekend?", "B: I'm gonna visit my parents.", "A: Where do they live?", "B: They live in New York."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "WH Words",
                content: ["______ will you arrive? - At 5:00 PM."],
                options: ["Where", "When", "Why"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Structure",
                content: ["What ______ going to eat?"],
                options: ["are you", "you are", "will you"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Prepositions at the end",
                content: ["Who are you going to the cinema ______?"],
                options: ["to", "with", "for"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Preguntas WH con Futuro" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir errores comunes de estructura (ej. olvidar el verbo To Be o Will)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Hacer y responder preguntas abiertas usando futuro.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Let's Talk!",
                description: "Be the journalist",
                content: ["Ask me: What I am going to do on my next vacation.", "Ask me: Who I will go with."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "WH word",
                content: ["______ is she going to buy that house? - Because she likes it."],
                options: ["When", "Why", "Where"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Word order",
                content: ["Which is correct?"],
                options: ["Where you will go?", "Where will go you?", "Where will you go?"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Word order",
                content: ["Which is correct?"],
                options: ["What are you gonna do?", "What you are gonna do?", "What are gonna you do?"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "El alumno debe formular preguntas abiertas con fluidez."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre y asignación de tareas.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Summary",
                content: ["You can ask detailed questions about the future!", "Always remember the order: WH + Auxiliar + Subject."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Future Interview",
                content: ["Write 5 WH questions to ask a famous person about their future.", "Example: When will you release your next movie?"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-13",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/HQcsDi9u5-g",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Explicar la tarea."
          }
        ]
      },
      {
        id: "c-b1-4",
        title: "Clase 4: How much, How many, What kind",
        description: "Hacer preguntas de cantidad, tiempo y tipo de cosas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir ideas de cantidad y tipo.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Numbers & Things",
                description: "Let's count and choose.",
                content: ["Do you drink a lot of coffee?", "Do you like action movies or comedies?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conectar con gustos del alumno sobre cantidades o tipos de películas/comida."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Aprender los bloqueos interrogativos de How much/many y What kind.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "How structure",
                description: "Cómo preguntar cantidad y modo",
                content: ["How + Adjective/Word = Bloque de pregunta", "How old are you?", "How much is it?", "How many apples?"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "How much vs How many",
                description: "Contable vs Incontable",
                content: ["HOW MANY + plural contable (Apples, Cars, People)", "Example: How many people will come?", "HOW MUCH + incontable (Water, Time, Money)", "Example: How much time going to need?"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "What kind / What time",
                description: "Tipos de cosas y horas exactas",
                content: ["What kind of... = ¿Qué tipo de...?", "Example: What kind of music do you like?", "What time... = ¿A qué hora...?", "Example: What time will we meet?"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Remarcar que el bloque interrogativo (Ej: 'How much money') va todo junto al inicio."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar qué tipo de sustantivo y la pregunta adecuada.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Lee la conversación:",
                content: ["A: How much sugar do you want in your coffee?", "B: Just a little, please.", "A: What kind of coffee is this?", "B: It's Colombian coffee."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Much vs Many",
                content: ["______ cars are in the street?"],
                options: ["How much", "How many", "How"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Much vs Many",
                content: ["______ milk do you need for the cake?"],
                options: ["How many", "How much", "What kind"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "What kind",
                content: ["______ of books do you read?"],
                options: ["What time", "How many", "What kind"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: How much, How many, What kind" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Ayudar al alumno a distinguir si los objetos o conceptos son contables."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Hacer y responder preguntas sobre preferencias y cantidades.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Let's Talk!",
                description: "Ask about my life",
                content: ["Ask me: Music preference", "Ask me: How many sisters/brothers I have", "Ask me: Exact time the class finishes"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Time",
                content: ["______ does the movie start? At 8pm."],
                options: ["What kind", "What time", "How much"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Money",
                content: ["______ money do you have?"],
                options: ["How much", "How many", "What"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Structure",
                content: ["Which is correct?"],
                options: ["How many dogs you have?", "How many dogs do you have?", "How much dogs do you have?"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fluidez en la mezcla de estructuras (How much/many + verbo en presente/futuro)."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Despedida del Nivel Básico 1.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Basic 1 Complete!",
                description: "Amazing progress!",
                content: ["You can talk about the future.", "You can ask for specific information."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Next level preparation",
                content: ["Write 5 questions starting with: How much, How many, What kind, What time.", "Example: What kind of food do you like?"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-14",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/xFsYrTIndhI",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Celebrar y dar la tarea."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Future Plans (Will/Going to)",
              "question": "What are you going to do this weekend?"
            },
            {
              "topic": "Future Intentions",
              "question": "Where do you think you will be in 5 years?"
            },
            {
              "topic": "Countable / Uncountable",
              "question": "How much water do you drink every day? How many cups of coffee?"
            },
            {
              "topic": "Directions & Places",
              "question": "How do I get to the nearest supermarket from your house?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "I think it ___ rain tomorrow.",
              "options": [
                "is going to",
                "will",
                "going to"
              ],
              "correctAnswer": "will"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "We ___ visit my grandparents next weekend. We have the tickets.",
              "options": [
                "are going to",
                "will",
                "go to"
              ],
              "correctAnswer": "are going to"
            },
            {
              "id": "v3",
              "type": "multiple-choice",
              "question": "___ milk do we have in the fridge?",
              "options": [
                "How many",
                "How much",
                "What amount"
              ],
              "correctAnswer": "How much"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Listen and select the correct option.",
              "audioText": "I am going to study medicine next year.",
              "options": [
                "The person is studying medicine now.",
                "The person plans to study medicine.",
                "The person studied medicine."
              ],
              "correctAnswer": "The person plans to study medicine."
            },
            {
              "id": "v5",
              "type": "fill-in-the-blanks",
              "question": "Go straight, then turn ___ at the corner.",
              "options": [],
              "correctAnswer": "left"
            }
          ]
},
  {
    id: "basic-2",
    title: "Basic 2",
    duration: "1 mes",
    objective: "Present Simple, reglas y uso en tercera persona, Present Progressive, preguntas sí/no y wh, how often, gerundios con like/love/enjoy/hate, comparación entre futuro, presente simple y presente progresivo.",
    mcfrEquivalent: "A1/A2",
    classes: [
      {
        id: "c-b2-1",
        title: "Clase 1: Rutinas y Present Simple",
        description: "Hábitos diarios, adverbios de frecuencia y reglas de 3ra persona.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Explorar la rutina del alumno.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Daily Life",
                description: "What do you do every day?",
                content: ["What time do you wake up?", "Do you drink coffee in the morning?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conversar sobre las rutinas para introducir el Present Simple."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Aprender Present Simple, 3ra persona y Adverbios de Frecuencia.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Present Simple = Routines",
                description: "Cosas que haces repetidamente",
                content: ["I wake up at 7:00 AM.", "We eat pizza on Fridays.", "They work in a bank."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The 'S' Rule (He/She/It)",
                description: "El cambio más importante",
                content: ["I play / He playS", "You work / She workS", "I watch / He watchES (Terminaciones ch, sh, s, x, o)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Negative Sentences (Don't / Doesn't)",
                description: "Cómo decir 'no'",
                content: ["I/You/We/They -> DON'T (do not) / Example: I don't like fish.", "He/She/It -> DOESN'T (does not) / Example: She doesn't like milk."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Adverbs of Frequency",
                description: "Qué tan seguido lo haces",
                content: ["Always (100%)", "Usually (80%)", "Sometimes (50%)", "Never (0%)", "Posición: I ALWAYS wake up early. (Antes del verbo)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Modelar la pronunciación de la 'S' al final de los verbos y corregir."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Fijar la regla de la 's' y la negación.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee sobre John:",
                content: ["John gets up at 6 AM. He always drinks coffee. He works in an office.", "He doesn't eat lunch. After work, he goes to the gym."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "3rd Person Rule",
                content: ["My sister ______ to music every day."],
                options: ["listen", "listens", "listening"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Negative",
                content: ["My cat ______ like water."],
                options: ["don't", "not", "doesn't"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Frequency Adverbs",
                content: ["I ______ eat sushi. I don't like fish!"],
                options: ["always", "never", "usually"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Rutinas y Present Simple" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Asegurarse de que el alumno aplique la regla de 3ra persona en la lectura."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Describir la rutina propia y la de alguien más.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Describe a routine",
                description: "Usa Always/Sometimes/Never",
                content: ["Tell me about your typical Monday.", "Tell me about your mother/father. (Remember the 'S'!)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["She ______ TV in the evening."],
                options: ["watch", "watchs", "watches"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Adverb position",
                content: ["Which is correct?"],
                options: ["I always get up late.", "I get up always late.", "Always I get up late."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Negative",
                content: ["They ______ play tennis."],
                options: ["doesn't", "don't", "aren't"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Escuchar la producción del alumno y notar la S de tercera persona."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Resumen motivador.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Great Job!",
                description: "You master Routines!",
                content: ["You can talk about your habits.", "You know the He/She/It rule."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Write your routine",
                content: ["Write 5 sentences about your day.", "Write 5 sentences about a friend's day (use doesn't / 's)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-15",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/m04lQ5BUAn0",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Tarea asignada. ¡Animar!"
          }
        ]
      },
      {
        id: "c-b2-2",
        title: "Clase 2: Present Progressive",
        description: "Acciones en curso y preguntas de confirmación (Yes/No y WH).",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Enfocar la atención en el momento presente.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Right Now",
                description: "What is happening around you?",
                content: ["Are you drinking coffee right now?", "Is your phone ringing?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer observaciones sobre qué está pasando en cámara (ej. You are wearing a blue shirt)."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Comprender la estructura (To Be + V-ing) y usos del Present Progressive.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Present Progressive (Continuous)",
                description: "Acciones sucediendo AHORA",
                content: ["Structure: Verb TO BE + Verb-ING", "Example: I AM studyING.", "Example: She IS sleepING."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Spelling Rules (-ing)",
                description: "Reglas para el gerundio",
                content: ["Normal: play -> playing", "Termina en 'e': dance -> dancing", "CVC (Consonante-Vocal-Consonante): run -> running"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Yes/No Questions",
                description: "Confirmando acciones",
                content: ["ARE you working?", "- Yes, I am. / No, I'm not.", "IS he playing?", "- Yes, he is. / No, he isn't."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "WH Questions",
                description: "Pidiendo detalles",
                content: ["WHAT are you doing?", "WHERE is she going?", "WHY are they crying?"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Construir oraciones básicas con imágenes de personas haciendo acciones (corriendo, comiendo)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar y transformar oraciones al presente progresivo.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee y mira la imagen (imaginaria):",
                content: ["Look at the park! The children are playing.", "A man is reading a book. A dog is running.", "What are YOU doing? I am looking at the park."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Affirmative",
                content: ["They ______ (watch) TV right now."],
                options: ["are watching", "watch", "is watching"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Spelling",
                content: ["Look! He is ______ (swim) in the pool!"],
                options: ["swiming", "swimming", "swims"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Questions",
                content: ["______ she doing her homework?"],
                options: ["Is", "Are", "Does"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Present Progressive" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Monitorizar que el alumno no omita el verbo To Be (Ej error: 'He playing')."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Responder a 'What are you doing?' y describir escenas actuadas.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Pantomime Game",
                description: "Act out an action",
                content: ["Teacher acts: 'What am I doing?'", "Student acts: Teacher guesses: 'Are you...?'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["I ______ drinking water."],
                options: ["is", "am", "are"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Negative",
                content: ["They ______ sleeping. They are awake."],
                options: ["aren't", "don't", "isn't"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "WH Questions",
                content: ["______ are you crying? - Because I'm sad."],
                options: ["What", "Where", "Why"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar mímica y realizar el quiz para consolidar el '-ing'."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Anclar el aprendizaje de 'Right now'.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Great Job!",
                description: "Right now...",
                content: ["You are learning English!", "You are sitting in a chair!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Spy mission",
                content: ["Look out of your window tomorrow.", "Write 5 sentences about what people ARE DOING."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-16",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/MGLedoA3SSE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Descartar dudas finales y asignar tarea."
          }
        ]
      },
      {
        id: "c-b2-3",
        title: "Clase 3: Expresando Preferencias (Gustos)",
        description: "Uso de gerundios con like, love, enjoy y hate.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Explorar qué les gusta hacer.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Hobbies & Interests",
                description: "What do you like?",
                content: ["Do you like pizza?", "Do you like watching movies?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Introducir la diferencia entre 'Me gusta la pizza (cosa)' y 'Me gusta comer (acción)'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Comprender la regla de Verbo de Preferencia + Verbo(ing).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Verbs of Preference",
                description: "Los niveles de gusto",
                content: ["Love (Me encanta)", "Enjoy (Disfruto)", "Like (Me gusta)", "Hate (Odio)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Preference + NOUN",
                description: "Cuando hablamos de cosas",
                content: ["I like dogs.", "She loves pizza.", "He hates traffic."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Preference + VERB(ing)",
                description: "Cuando hablamos de acciones",
                content: ["Regla: I like PLAYING video games. (No 'I like play')", "She loves COOKING.", "He hates WAITING."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Negative Preferences",
                description: "Usando Don't / Doesn't",
                content: ["I DON'T like cooking.", "He DOESN'T enjoy running."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Enfatizar fuertemente que después de LIKE/LOVE va el gerundio (V-ing)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Aplicar la regla del gerundio de preferencia.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee sobre los hobbies de Sarah:",
                content: ["Sarah loves reading books. She enjoys spending time with her dog.", "She likes drinking coffee, but she hates waking up early."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Action (Verb)",
                content: ["I love ______ in the ocean."],
                options: ["swim", "swimming", "swims"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Thing (Noun)",
                content: ["My brother likes ______."],
                options: ["car", "cars", "drive"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Negative + Verb(ing)",
                content: ["We don't enjoy ______ the house."],
                options: ["cleaning", "clean", "cleans"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Expresando Preferencias (Gustos)" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir inmediatamente si dicen 'I like read' en vez de 'I like reading'."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Hablar fluidamente sobre lo que aman y odian hacer.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Tell me about you!",
                description: "What do you like doing?",
                content: ["Tell me 2 things you LOVE doing.", "Tell me 2 things you HATE doing."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["Which is correct?"],
                options: ["I like cook.", "I like cooking.", "I liking cook."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "He/She/It",
                content: ["He ______ playing soccer."],
                options: ["enjoy", "enjoys", "enjoying"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Negative",
                content: ["She ______ like doing homework."],
                options: ["don't", "not", "doesn't"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar producción oral usando gerundios."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso de la regla general.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Great Job!",
                description: "You are doing great!",
                content: ["After LOVE, ENJOY, LIKE, HATE...", "We use the verb with -ING!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Write about a friend",
                content: ["Interview a friend or family member.", "Write 5 sentences about what they like/hate doing."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-17",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/qNAfpbnIQkc",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Recordatorio y despedida."
          }
        ]
      },
      {
        id: "c-b2-4",
        title: "Clase 4: Comparación entre Tiempos Verbales",
        description: "Cuándo usar Futuro, Presente Simple y Presente Progresivo.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Juego de cambio de tiempos mentales.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Time Travel",
                description: "Past, Present, Future",
                content: ["Did you eat pizza yesterday? (Past)", "Do you eat pizza normally? (Present)", "Will you eat pizza tomorrow? (Future)"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos la misma idea (ej. comer) en distintos tiempos para que perciban la diferencia."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Contrastar claramente Present Simple vs Present Continuous vs Future.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Tense 1: Present Simple",
                description: "Routines and Facts (Usually)",
                content: ["Idea: Pasa siempre o como hábito.", "Keywords: Every day, usually, always.", "Example: I WORK in a hospital."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Tense 2: Present Progressive",
                description: "Happening NOW (En este instante)",
                content: ["Idea: Pasa justo en este momento.", "Keywords: Right now, at the moment, look!", "Example: LOOK! I am WORKING right now."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Tense 3: Future (Will/Going to)",
                description: "Planes y Decisiones (Más adelante)",
                content: ["Idea: Pasará después.", "Keywords: Tomorrow, next week, later.", "Example: I will WORK tomorrow. / I'm going to WORK."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "The Ultimate Comparison",
                description: "Un solo verbo, tres contextos",
                content: ["1. She plays tennis every Saturday.", "2. Ssshh! She is playing tennis right now.", "3. She is going to play tennis tomorrow."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Mostrar cómo el contexto o las 'keywords' (every day, right now) dictan la estructura a usar."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar la palabra clave para elegir el tiempo verbal correcto.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Encuentra los tiempos:",
                content: ["My dad usually works in an office. But right now, he is working at home.", "Tomorrow, he is going to travel to London."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Look for the keyword",
                content: ["Listen! The baby ______ (cry)."],
                options: ["cries", "is crying", "will cry"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Look for the keyword",
                content: ["I ______ (drink) coffee every morning."],
                options: ["am drinking", "will drink", "drink"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Look for the keyword",
                content: ["I ______ (call) you later, I promise."],
                options: ["am calling", "call", "will call"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Comparación entre Tiempos Verbales" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Guiar al alumno a identificar las palabras clave antes de responder."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Saltar de un tiempo a otro oralmente de forma fluida.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Time Machine Challenge",
                description: "Habla de ti mismo",
                content: ["1. What do you do on Sundays?", "2. What are you doing right now?", "3. What are you gonna do next Sunday?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Right now",
                content: ["Which is correct for NOW?"],
                options: ["I eat.", "I am eat.", "I am eating."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Routine",
                content: ["Which is correct for ROUTINE?"],
                options: ["She play tennis.", "She plays tennis.", "She playing tennis."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Future",
                content: ["Which is a PLAN?"],
                options: ["We are going to travel.", "We travel.", "We are travel."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Alentar la velocidad y seguridad del estudiante al cambiar de tiempo verbal."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Graduación formal del Nivel Basic 2.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Basic 2 Complete!",
                description: "You are a master of time!",
                content: ["You control the Present.", "You understand the Future.", "Next step: The Past!"],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Write your timeline.",
                content: ["Write 1 routine.", "Write 1 thing happening now.", "Write 1 future plan."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-18",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/KaA_mxga3PQ",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar efusivamente. Es un gran hito."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Present Simple vs Continuous",
              "question": "What do you usually do on weekends? And what are you doing right now?"
            },
            {
              "topic": "Work & Study Routines",
              "question": "Tell me about your job or studies. What does a typical day look like?"
            },
            {
              "topic": "Describing Activities",
              "question": "Describe a project you are currently working on this month."
            },
            {
              "topic": "Likes & Preferences",
              "question": "What kind of movies do you enjoy watching? Why?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "She usually ___ coffee, but today she ___ tea.",
              "options": [
                "drinks / is drinking",
                "is drinking / drinks",
                "drink / is drinking"
              ],
              "correctAnswer": "drinks / is drinking"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "Look! The boys ___ in the garden.",
              "options": [
                "play",
                "are playing",
                "playing"
              ],
              "correctAnswer": "are playing"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "I can't talk right now, I ___ (drive).",
              "options": [],
              "correctAnswer": "am driving"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Listen and answer: What is he doing?",
              "audioText": "He is reading a book in the living room.",
              "options": [
                "He reads every day.",
                "He is reading right now.",
                "He read a book yesterday."
              ],
              "correctAnswer": "He is reading right now."
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "Water ___ at 100 degrees Celsius.",
              "options": [
                "boils",
                "is boiling",
                "boil"
              ],
              "correctAnswer": "boils"
            }
          ]
},
  {
    id: "basic-3",
    title: "Basic 3",
    duration: "1 mes",
    objective: "Simple Past, sí/no y wh en pasado, Past Progressive, while/when, comparación de tiempos, pronunciación de terminaciones -ed.",
    mcfrEquivalent: "A2",
    classes: [
      {
        id: "c-b3-1",
        title: "Clase 1: Experiencias en Simple Past",
        description: "Verbos regulares e irregulares aplicados a experiencias pasadas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir el contexto de memoria y pasado.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The Past",
                description: "What did you do yesterday?",
                content: ["Think about yesterday.", "Did you work? Did you watch a movie?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos qué hicieron ayer de manera relajada."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Entender la transformación de verbos al pasado.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Simple Past",
                description: "Acciones terminadas",
                content: ["Usamos el verbo en pasado para cosas que ya acabaron.", "Keywords: Yesterday, last night, two days ago."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Regular Verbs (+ed)",
                description: "La regla fácil",
                content: ["Work -> Worked", "Play -> Played", "Study -> Studied"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Irregular Verbs",
                description: "Los rebeldes (hay que memorizarlos)",
                content: ["Go -> Went", "Eat -> Ate", "See -> Saw"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Explicar que en la forma afirmativa el verbo cambia y no importa si es He/She/It (no hay 'S' aquí)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Aplicar la forma correcta del verbo al pasado.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Lee la historia de Tom:",
                content: ["Yesterday, Tom woke up at 7 AM. He ate breakfast and went to work.", "After work, he played video games and slept early."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Regular Verb",
                content: ["Last night, I ______ (watch) a great movie."],
                options: ["watch", "watched", "watching"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Irregular Verb",
                content: ["She ______ (go) to the supermarket yesterday."],
                options: ["goed", "go", "went"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Irregular Verb",
                content: ["We ______ (eat) pizza for dinner."],
                options: ["ated", "eat", "ate"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Experiencias en Simple Past" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Identificar y corregir la tendencia a poner '-ed' en verbos irregulares ('goed' en vez de 'went')."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Hablar de eventos pasados personales.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Tell your story",
                description: "Your weekend",
                content: ["Tell me 3 things you did last weekend.", "(Remember to change the verbs!)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["What is the past of BUY?"],
                options: ["Buyed", "Bought", "Buy"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Regular / Irregular",
                content: ["Which word is a regular verb?"],
                options: ["Cooked", "Ate", "Saw"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Context",
                content: ["Yesterday, she ______ a letter to her friend."],
                options: ["wrote", "writed", "write"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Dejar que el alumno intente hablar; si no sabe un pasado irregular, decírselo."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Finaizar con un plan de memorización.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You are talking about history!",
                content: ["Regular verbs = add -ed", "Irregular verbs = you must memorize them!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "My worst day.",
                content: ["Write a short paragraph about a terrible day you had in the past (use past verbs!)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-19",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/Fsz3T4MT2gc",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Tarea asignada para practicar narrativa pasada."
          }
        ]
      },
      {
        id: "c-b3-2",
        title: "Clase 2: Preguntas y Negaciones en Pasado",
        description: "Preguntas Yes/No y WH en pasado simple.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Jugar con la memoria reciente.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Investigating the Past",
                description: "Let's be detectives.",
                content: ["Tell me a secret...", "What did you eat for dinner yesterday?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer de detective preguntando cosas del pasado usando DID para que escuchen el sonido."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Aprender el auxiliar DID y DIDN'T.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Magic Helper: DID",
                description: "Preguntando en el pasado",
                content: ["En presente usamos DO. En pasado usamos DID.", "DID you play? (¿Jugaste?)", "DID she go? (¿Ella fue?)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The Golden Rule",
                description: "¡Atención al verbo principal!",
                content: ["Regla de oro: Si usas DID o DIDN'T, el verbo principal NO cambia.", "Correcto: Did you GO?", "Incorrecto: Did you WENT? ❌"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1616628188550-808682f3926d?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Negative Sentences (Didn't)",
                description: "Cómo decir 'no' en el pasado",
                content: ["I didn't play. (Yo no jugué)", "She didn't eat. (Ella no comió)", "They didn't sleep. (Ellos no durmieron)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "WH Questions in the Past",
                description: "Pidiendo detalles",
                content: ["WHERE did you go?", "WHAT did she buy?", "WHEN did they arrive?"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Repetir la regla de oro: DID absorbe el pasado, dejando al verbo en paz."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Aplicar la regla de oro en oraciones mixtas.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee la entrevista:",
                content: ["Cop: Where did you go last night?", "Suspect: I didn't go out. I stayed home.", "Cop: Did you see anyone?", "Suspect: No, I didn't see anybody."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Negative verb form",
                content: ["I ______ (not watch) TV yesterday."],
                options: ["didn't watched", "not watch", "didn't watch"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Question verb form",
                content: ["Did she ______ (buy) a new car?"],
                options: ["bought", "buy", "buys"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "WH Question",
                content: ["What time did you ______ (wake) up?"],
                options: ["wake", "woke", "waking"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Preguntas y Negaciones en Pasado" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir implacablemente si usan 'Did' + verbo en pasado."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Entrevistar sobre el fin de semana sin cometer el error del doble pasado.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Interview Time",
                description: "You ask!",
                content: ["Ask me 2 Yes/No questions about my weekend.", "Ask me 2 WH questions about my weekend."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["Which is correct?"],
                options: ["Did you went?", "Did you go?", "Didn't you went?"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Negative",
                content: ["She ______ home. She stayed at work."],
                options: ["didn't go", "didn't went", "doesn't go"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Mix",
                content: ["Did you eat pizza? No, I ______ eat pizza, I ______ a burger."],
                options: ["didn't / eat", "didn't / ate", "didn't ate / ate"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fluidez de entrevista al profesor."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Reiterar la regla central.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Great Job!",
                description: "You interrogate in English!",
                content: ["DID y DIDN'T son tus ayudantes mágicos.", "¡Nunca pongas el verbo en pasado junto a ellos!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Celebrity Interview",
                content: ["Write 5 questions you WOULD ask a dead historical figure.", "Example: Why did you build the pyramids?"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-20",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/jwmKjgwlMk8",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedir la clase verificando que hayan entendido el concepto principal."
          }
        ]
      },
      {
        id: "c-b3-3",
        title: "Clase 3: Past Progressive y Conectores",
        description: "Creando narrativas con while y when.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de acciones interrumpidas.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Interruptions",
                description: "What were you doing when...",
                content: ["Have you ever been interrupted?", "Example: I was sleeping, and the phone rang!"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre alguna anécdota de interrupción (estaba bañándome y tocaron la puerta)."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar Was/Were + -ing y cómo usar When/While.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Past Progressive (Continuous)",
                description: "Acciones largas en el pasado",
                content: ["Structure: WAS / WERE + Verb-ING", "I/He/She/It -> WAS playing", "You/We/They -> WERE playing"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Conector: WHEN",
                description: "Acción repentina que interrumpe",
                content: ["WHEN = Cuando", "I was watching TV WHEN the phone rang.", "(Acción larga) WHEN (Acción corta en pasado simple)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Conector: WHILE",
                description: "Acciones paralelas",
                content: ["WHILE = Mientras", "I was cooking WHILE she was reading.", "(Acción larga) WHILE (Otra acción larga)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Aclarar que WHEN conecta con Simple Past y WHILE conecta con Past Progressive."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar cuál acción es larga y cuál es corta.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Storytime:",
                content: ["Yesterday, I was walking in the park when it started to rain.", "While I was running home, I saw my friend."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Was/Were",
                content: ["They ______ (play) soccer outside."],
                options: ["were playing", "was playing", "are playing"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "When",
                content: ["I was sleeping ______ the dog barked."],
                options: ["while", "when", "what"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "While",
                content: ["He was reading ______ I was cooking."],
                options: ["when", "during", "while"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Past Progressive y Conectores" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Guiar al estudiante usando el sentido común (¿qué acción dura más?)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Crear oraciones compuestas contando anécdotas.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Finish my story",
                description: "Let's co-create a story",
                content: ["Teacher: I was taking a shower when...", "Student: ...the water stopped! (Your turn)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["She ______ (drive) when she saw the accident."],
                options: ["was driving", "were driving", "drived"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "When vs While",
                content: ["We usually use WHEN before the ______ Action."],
                options: ["Long", "Short", "ING"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Negative",
                content: ["I ______ when you called me."],
                options: ["wasn't sleep", "weren't sleeping", "wasn't sleeping"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Juego de ping-pong narrativo: Yo digo la acción larga, tú la interrupción, y viceversa."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Afianzar la estructura narrativa.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You are a storyteller!",
                content: ["Long action = was/were V-ing.", "Short action = V-past.", "Connectors = When / While."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Write your anecdote",
                content: ["Write a paragraph of minimum 4 lines using WHEN and WHILE.", "Tell a funny story of an interruption."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-21",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/Gyur6S_H9vE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Resaltar que ahora sus historias en pasado sonarán naturales."
          }
        ]
      },
      {
        id: "c-b3-4",
        title: "Clase 4: Reglas y Pronunciación de terminaciones -ed",
        description: "Domina el sonido nativo de los verbos regulares en pasado.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Hacer conscientes a los alumnos del error común al pronunciar -ed.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Pronunciation Time",
                description: "How do you say 'played'?",
                content: ["Read this word: LOOKED", "Did you say 'look-ed'?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer que lean un verbo regular. Si pronuncian la '-ed' como en español, señalar que hoy corregiremos eso."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar los 3 sonidos de la terminación -ED (/t/, /d/, /id/).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The 3 Sounds of -ED",
                description: "No siempre suena como 'ed'",
                content: ["1. Sound /t/ (como un golpe seco)", "2. Sound /d/ (como un zumbido corto)", "3. Sound /id/ (cuando el verbo termina en T o D)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Sound 1: /t/",
                description: "Verbos sin vibración en la garganta",
                content: ["Si el verbo original termina en p, k, f, s, sh, ch...", "Look -> Look /t/", "Help -> Help /t/", "Wash -> Wash /t/"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Sound 2: /d/",
                description: "Verbos con vibración vocal",
                content: ["Si el verbo original termina en l, v, n, m, r, b, o vocal...", "Play -> Play /d/", "Call -> Call /d/", "Listen -> Listen /d/"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              },
              {
                id: "Diapositiva 5",
                title: "Sound 3: /id/",
                description: "¡La única vez que pronuncias la E!",
                content: ["SOLO si el verbo original termina en 'T' o 'D'.", "Want -> Want /id/ (Wanted)", "Need -> Need /id/ (Needed)"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Tocar la garganta con ellos para sentir la vibración (voiced vs voiceless)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Clasificar los verbos por su sonido.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Reading Practice",
                description: "Lee exagerando la pronunciación:",
                content: ["I worked (/t/) all day.", "Then I called (/d/) my friend.", "We decided (/id/) to watch a movie."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (1/3)",
                description: "Pronounciation",
                content: ["How do you pronounce: WASHED"],
                options: ["wash-ed", "wash-d", "wash-t"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (2/3)",
                description: "Pronounciation",
                content: ["How do you pronounce: STARTED"],
                options: ["start-t", "start-id", "start-ed"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 9",
                title: "Complete the sentence (3/3)",
                description: "Pronounciation",
                content: ["How do you pronounce: ARRIVED"],
                options: ["arrive-id", "arrive-t", "arrive-d"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Reglas y Pronunciación de terminaciones -ed" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Obligarlos a exagerar el sonido final (/t/, /d/, /id/) para crear memoria muscular."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Leer una lista de manera fluida y realizar el quiz.",
            slides: [
              {
                id: "Diapositiva 10",
                title: "Read Aloud Time",
                description: "Your turn!",
                content: ["1. Watched, Liked, Kissed (/t/)", "2. Loved, Cleaned, Played (/d/)", "3. Visited, Waited, Needed (/id/)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (1/3)",
                description: "The /id/ rule",
                content: ["We only pronounce /id/ when the verb ends in:"],
                options: ["A or E", "T or D", "S or CH"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (2/3)",
                description: "Listen & Choose",
                content: ["Looked sounds like:"],
                options: ["Look-id", "Look-d", "Look-t"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 13",
                title: "Fun Quiz! (3/3)",
                description: "Listen & Choose",
                content: ["Rent in past sounds like:"],
                options: ["Rent-id (Rented)", "Rent-t", "Rent-d"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Corregir inmediatamente cualquier -ed que se pronuncie como en español (excepto en t/d)."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Celebrar que ahora suenan como nativos y cerrar Basic 3.",
            slides: [
              {
                id: "Diapositiva 14",
                title: "Basic 3 Complete!",
                description: "You sound more native now!",
                content: ["Stop saying 'play-ed' or 'work-ed'.", "Remember: /t/, /d/, /id/."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 15",
                title: "Homework",
                description: "Pronunciation Practice",
                content: ["Find 10 regular verbs online.", "Classify them in 3 columns: /t/, /d/, /id/.", "Practice saying them out loud!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-22",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/FAhpT7BH7GE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Entregar tarea y despedirse del nivel."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Past Simple",
              "question": "What did you do last weekend?"
            },
            {
              "topic": "Past Continuous",
              "question": "What were you doing yesterday at 8 PM?"
            },
            {
              "topic": "Life Experiences",
              "question": "Tell me about your best vacation ever. Where did you go?"
            },
            {
              "topic": "Storytelling",
              "question": "Tell me a short story about something funny that happened to you in the past."
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "I ___ late for work yesterday because I ___ my train.",
              "options": [
                "was / missed",
                "am / missing",
                "were / missed"
              ],
              "correctAnswer": "was / missed"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "While I ___ TV, the phone ___.",
              "options": [
                "watched / was ringing",
                "was watching / rang",
                "watching / rang"
              ],
              "correctAnswer": "was watching / rang"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "She ___ (go) to Paris last summer.",
              "options": [],
              "correctAnswer": "went"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Where were they?",
              "audioText": "We were walking in the park when it started to rain.",
              "options": [
                "In the park",
                "At home",
                "In a car"
              ],
              "correctAnswer": "In the park"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "How is the '-ed' in 'worked' pronounced?",
              "options": [
                "/t/",
                "/d/",
                "/id/"
              ],
              "correctAnswer": "/t/"
            }
          ]
},
  {
    id: "basic-4",
    title: "Basic 4",
    duration: "1 mes",
    objective: "Repaso intensivo de tiempos clave; pruebas de gramática; repaso de pasado simple y sonidos -ed; presente progresivo como futuro; comparación presente/pasado/futuro.",
    mcfrEquivalent: "A2+",
    classes: [
      {
        id: "c-b4-1",
        title: "Clase 1: Tense Review - Pasado, Presente, Futuro",
        description: "Comparación de los tiempos fundamentales en conversaciones reales.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Activar los 3 tiempos.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Time Jump",
                description: "Past, Present or Future?",
                content: ["Tell me 1 thing you did yesterday.", "Tell me 1 thing you do every day.", "Tell me 1 plan for tomorrow."],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Un rápido rompehielos forzando el salto mental entre pasado, presente y futuro."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Repasar las reglas infalibles de cada tiempo.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Big Three",
                description: "Los Pilares del Inglés",
                content: ["1. Present Simple (Rutinas: Do/Does)", "2. Past Simple (Hechos pasados: Did / -ed)", "3. Future (Planes: Will / Going to)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Spot the Key Words",
                description: "La palabra te dice el tiempo",
                content: ["YESTERDAY, LAST... = Past", "USUALLY, EVERY DAY = Present", "TOMORROW, NEXT... = Future"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Negative Formula",
                description: "Los auxiliares mágicos",
                content: ["Present: don't / doesn't + verbo base", "Past: didn't + verbo base", "Future: won't / 'm not going to + verbo base"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Hacer un mapa mental rápido en la pizarra virtual sobre cómo negar en los 3 tiempos."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Reconocer errores mixtos.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Find the mistakes (Hay 3 errores!):",
                content: ["Yesterday, I go to the park.", "I usually eating pizza on Fridays.", "Tomorrow, I didn't work."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Time keyword",
                content: ["I always ______ my bed in the morning."],
                options: ["made", "make", "will make"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Time keyword",
                content: ["Last year, we ______ to Spain."],
                options: ["travel", "travelled", "will travel"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Time keyword",
                content: ["Next weekend, I ______ study English."],
                options: ["am going to", "went to", "studies"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Tense Review - Pasado, Presente, Futuro" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "El alumno debe justificar POR QUÉ eligió la respuesta (ej. 'Elegí travelled porque dice Last year')."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Producir los tres tiempos en ráfaga.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The 3-Sentence Challenge",
                description: "Topic: Food",
                content: ["1. What did you eat yesterday?", "2. What do you eat every day?", "3. What will you eat tomorrow?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Negative Past",
                content: ["Which is correct?"],
                options: ["I didn't went.", "I didn't go.", "I don't went."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Negative Present",
                content: ["She ______ like apples."],
                options: ["don't", "doesn't", "isn't"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Questions",
                content: ["______ you play video games last night?"],
                options: ["Did", "Do", "Are"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Realizar el desafío velozmente. Cambiar el tema a 'Viajes' o 'Trabajo' si hay tiempo."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Celebrar la agilidad gramatical.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Grammar Master",
                content: ["You can switch between times easily!", "Always look for the TIME KEYWORD."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The Timeline",
                content: ["Write 3 sentences about your past (10 years ago).", "Write 3 sentences about your present.", "Write 3 sentences about your future (10 years next)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-23",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/jRmKBjcNhNA",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Asegurar que entienden cómo los auxiliares marcan el tiempo."
          }
        ]
      },
      {
        id: "c-b4-2",
        title: "Clase 2: Presente Progresivo como Futuro",
        description: "Uso avanzado para planes confirmados en el futuro.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de planes agendados.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Your Calendar",
                description: "What is in your agenda?",
                content: ["Do you have a doctor's appointment this week?", "Are you meeting a friend tomorrow?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hablar sobre calendarios y agendas para dar contexto de 'plan 100% seguro'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar cómo una estructura de presente puede hablar del futuro.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Future Secret",
                description: "Presente continuo = Futuro seguro",
                content: ["Ya conoces: I am working (Ahora).", "NUEVO: Usamos la misma estructura para planes futuros CONFIRMADOS.", "I am working TOMORROW. (Trabajo mañana seguro)"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Going to vs Present Continuous",
                description: "La diferencia es sutil",
                content: ["Going to = Intención (I'm going to travel).", "Present Continuous = Arreglo agendado (I am traveling tomorrow. I have the tickets!)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "How to form it",
                description: "Be + -ing + TIME",
                content: ["She IS meetING her boss at 5 PM.", "We ARE flyING to Paris next week."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Destacar que la PALABRA DE TIEMPO (tomorrow, next week) es lo que convierte la frase de presente a futuro."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar si la frase es Ahora o Futuro.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                description: "Lee la agenda de Mark:",
                content: ["Mark is very busy right now. He is typing an email.", "Tonight, he is having dinner with his wife. Tomorrow, he is presenting a project."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Now vs Future",
                content: ["Sshh! I ______ (study) right now."],
                options: ["study", "am studying", "will study"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Now vs Future",
                content: ["I bought the tickets! We ______ (fly) to Mexico next month."],
                options: ["fly", "will fly", "are flying"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Negative future arrangement",
                content: ["I ______ (not work) tomorrow. It's a holiday!"],
                options: ["don't work", "am not working", "didn't work"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Presente Progresivo como Futuro" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Hacer ver que 'We are flying' suena nativo y elegante para un vuelo ya comprado."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Simular agendar una cita (Role-play).",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Let's meet!",
                description: "Agenda un café",
                content: ["Teacher: What are you doing on Friday at 6 PM?", "Student: I am (working/studying/meeting...).", "Let's find a time!"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Concept",
                content: ["Present Progressive can be used for:"],
                options: ["Only right now", "Past and Now", "Right now AND arranged future"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Structure",
                content: ["Which sentence is FUTURE?"],
                options: ["She is eating an apple.", "She eats an apple.", "She is eating with us tonight."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Grammar",
                content: ["He ______ playing soccer tomorrow at 5."],
                options: ["are", "is", "were"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar a cruzar agendas y obligar usar el Present Continuous para rechazar ('I can't, I am working')."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cierre del 'truco nativo'.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Native Trick Unlocked",
                content: ["Use the Present Progressive for 100% sure future plans.", "It sounds very natural!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Your Next Week Agenda",
                content: ["Write 4 things you ARE DOING next week.", "Example: I am visiting my grandmother on Sunday."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-24",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/CmqOXaSUpFo",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar por dominar una estructura que muchos evitan."
          }
        ]
      },
      {
        id: "c-b4-3",
        title: "Clase 3: Domina el Pasado Simple y Pronunciación",
        description: "Refuerzos y role-plays centrados en el pasado.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Despertar la pronunciación en pasado.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Fast Pronunciation",
                description: "Read these words fast:",
                content: ["Worked, Played, Wanted.", "Did it sound good?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer un mini test flash de pronunciación de 3 verbos regulares."
          },
          {
            id: "s2",
            title: "2. Challenge: Identifying the Sounds",
            duration: "15 minutos",
            objective: "Agudizar el oído para identificar /t/, /d/, /id/.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Listening Challenge",
                description: "What did I say?",
                content: ["Teacher: 'I watched TV.'", "Student: Sounded like /t/!"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The Irregular Trap",
                description: "Don't add -ed to everything!",
                content: ["Recuerda: Si el verbo es irregular, NO lleva -ed.", "I buyed ❌ -> I bought ✅", "He catched ❌ -> He caught ✅"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Did vs Was/Were",
                description: "El error clásico",
                content: ["DID = Para todos los verbos (Did you eat?)", "WAS/WERE = Sólo para el verbo To Be (Were you happy?)", "Nunca mezclar: Did you be happy? ❌ / Were you eat? ❌"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Dictado de sonidos y corrección del clásico error Did vs Was."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Reparar párrafos en pasado.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Fix the story (Find 4 mistakes)",
                description: "Story of Leo:",
                content: ["Yesterday, Leo go to the beach. He was very tired. He didn't swimmed. He just sleeped."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Did vs Was",
                content: ["______ you go to the party?"],
                options: ["Were", "Did", "Are"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Did vs Was",
                content: ["______ you happy at the party?"],
                options: ["Did", "Was", "Were"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Negative",
                content: ["I ______ have time to cook."],
                options: ["wasn't", "didn't", "don't"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Domina el Pasado Simple y Pronunciación" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Forzar al alumno a justificar por qué es DID y por qué es WAS/WERE."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Role-play de una excusa al jefe.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Role-Play: You are late!",
                description: "Tell me an excuse",
                content: ["Teacher (Boss): Why were you late today?", "Student: (Make up a crazy past story)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Spelling",
                content: ["Past of STOP:"],
                options: ["Stoped", "Stopped", "Stopt"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Irrgular",
                content: ["Past of FLY:"],
                options: ["Flyed", "Flew", "Flown"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Listening /id/",
                content: ["Which one sounds like /id/?"],
                options: ["Played", "Worked", "Needed"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Juntar todos los conocimientos de pasado en una historia improvisada y divertida."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Celebrar la fluidez en pasado.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "History Teller",
                content: ["You survived the past tense!", "Keep practicing irregular verbs."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Prepare for the Final Test",
                content: ["Review Present, Past and Future.", "Next class is the mega conversation test!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-25",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/KN2jyw6D1ak",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Advertir que la próxima clase es la evaluación final del módulo Basic."
          }
        ]
      },
      {
        id: "c-b4-4",
        title: "Clase 4: Pruebas de Gramática y Fluidez",
        description: "Prueba conversacional usando todos los temas de la sección basic.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Relajar tensiones antes del test.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Final Challenge",
                description: "Are you ready?",
                content: ["Don't worry, just speak naturally.", "We will talk about past, present, and future."],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Dar un ambiente muy relajado y de confianza para el alumno."
          },
          {
            id: "s2",
            title: "2. The Grammar Gauntlet",
            duration: "15 minutos",
            objective: "Resolver situaciones gramaticales rápidas (Test).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Challenge 1: Find the error",
                description: "1 point each",
                content: ["1. They doesn't like pizza.", "2. I am going travel to Mexico.", "3. Did she went to school?"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Challenge 2: Irregular Verbs",
                description: "What's the past?",
                content: ["Buy -> ?", "Think -> ?", "Eat -> ?", "See -> ?"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Challenge 3: Ask me!",
                description: "Create questions",
                content: ["Make a question in Present Simple.", "Make a question in Past Simple.", "Make a question in Future (Will or Going to)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Evaluar la precisión gramatical. Tomar notas mentales de los errores para el feedback."
          },
          {
            id: "s3",
            title: "3. Fluency Test (Interview)",
            duration: "15 minutos",
            objective: "Mantener una conversación fluida saltando tiempos.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Conversation Time",
                description: "Topic 1: Hobbies",
                content: ["What do you like doing in your free time?", "Why?", "What did you do last weekend?"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
              },
              {
                id: "Diapositiva 6",
                title: "Conversation Time",
                description: "Topic 2: The Future",
                content: ["What are your plans for next year?", "Where are you going to travel?", "Do you think you will learn another language?"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
              },
              {
                id: "Diapositiva 7",
                title: "Conversation Time",
                description: "Topic 3: Storytelling",
                content: ["Tell me about your best vacation ever. (Use PAST!)."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Dejar hablar al alumno. No interrumpir por errores menores, evaluar la fluidez comunicativa."
          },
          {
            id: "s4",
            title: "4. Feedback & Review",
            duration: "15 minutos",
            objective: "Dar retroalimentación constructiva y repasar puntos débiles.",
            slides: [
              {
                id: "Diapositiva 8",
                title: "Feedback Time",
                description: "You did great!",
                content: ["Let's review some details...", "(Teacher writes errors on chat/board)"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 9",
                title: "Fun Quiz! (1/3)",
                description: "Bonus grammar",
                content: ["He ______ a book right now."],
                options: ["reads", "is reading", "readed"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (2/3)",
                description: "Bonus Past",
                content: ["I ______ sleep last night."],
                options: ["didn't", "don't", "wasn't"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (3/3)",
                description: "Bonus Future",
                content: ["I am ______ call my mom later. (informal)"],
                options: ["going", "gonna", "will"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Hacer correcciones de los errores anotados durante la entrevista (Sandwich feedback: Bueno - A mejorar - Bueno)."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Graduación y pase a Intermediate.",
            slides: [
              {
                id: "Diapositiva 12",
                title: "CONGRATULATIONS!",
                description: "You completed the BASIC level!",
                content: ["You are ready for Intermediate.", "You can communicate your past, present and future plans."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 13",
                title: "Welcome to Intermediate",
                description: "What's next?",
                content: ["Next stop: Perfect tenses, advanced conditionals, and real-world debates!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Pruebas de Gramática y Fluidez" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              },
                {
                                id: "Diapositiva-Video-Homework-26",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/UNF8Vnrpxno",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "¡Gran celebración virtual! Fin del módulo básico completo."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "All Tenses Review",
              "question": "Tell me a little about yourself (past, present, and future)."
            },
            {
              "topic": "Present Continuous for Future",
              "question": "What are you doing tonight? Do you have any arrangements?"
            },
            {
              "topic": "Future Progressive",
              "question": "What will you be doing this time tomorrow?"
            },
            {
              "topic": "Comparing Past and Present",
              "question": "How has your life changed in the last 5 years?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "I ___ my dentist tomorrow at 3 PM. (Scheduled)",
              "options": [
                "am seeing",
                "will see",
                "see"
              ],
              "correctAnswer": "am seeing"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "This time next week, I ___ on a beach in Hawaii.",
              "options": [
                "will lie",
                "will be lying",
                "am lying"
              ],
              "correctAnswer": "will be lying"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "We ___ (have) a meeting tomorrow morning.",
              "options": [],
              "correctAnswer": "are having"
            },
            {
              "id": "v4",
              "type": "multiple-choice",
              "question": "He has been working here ___ 2015.",
              "options": [
                "since",
                "for",
                "in"
              ],
              "correctAnswer": "since"
            },
            {
              "id": "v5",
              "type": "listening",
              "question": "Listen to the arrangement.",
              "audioText": "We are meeting Sarah for dinner at 8.",
              "options": [
                "It's a plan/arrangement.",
                "It's a spontaneous decision.",
                "It's a habit."
              ],
              "correctAnswer": "It's a plan/arrangement."
            }
          ]
},
  {
    id: "intermediate",
    title: "Intermediate (Tigers, Sharks, Eagles)",
    duration: "3 meses",
    objective: "Experiencias, consejos, comparaciones, tiempos perfectos, modales, comparativos/superlativos, used to, should, segunda condicional y tiempos mezclados.",
    mcfrEquivalent: "B1",
    classes: [
      {
        id: "c-i-1",
        title: "Clase 1: Present Perfect vs Simple Past",
        description: "Hablar sobre experiencias de vida sin especificar cuándo sucedieron.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de experiencias.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome to Intermediate!",
                description: "Have you ever...?",
                content: ["Tell me about a crazy experience you had.", "Have you ever eaten insect food?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre anécdotas extrañas o viajes para establecer contexto."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Diferenciar la experiencia general (Perfect) del evento específico (Past).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Experience Tense",
                description: "Present Perfect",
                content: ["Usamos HAVE / HAS + Verbo en PARTICIPIO (3ra columna).", "I have visited France (Experiencia en mi vida).", "NO importa CUÁNDO, importa QUE pasó."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Present Perfect vs Simple Past",
                description: "El momento del cambio",
                content: ["Present Perfect: I HAVE BEEN to Spain. (Experiencia).", "Simple Past: I WENT to Spain IN 2019. (Fecha exacta).", "La regla: SI dices cuándo, es PASADO SIMPLE."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Have you EVER...?",
                description: "Preguntando por experiencias",
                content: ["EVER = Alguna vez en tu vida.", "Have you EVER flown in a helicopter?", "Yes, I have! / No, I haven't."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Enfatizar: El present perfect NO acepta fechas pasadas ('I have eaten pizza yesterday' ❌)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Identificar cuál tiempo usar dependiendo de si hay marcador de tiempo.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Traveler:",
                content: ["I have travelled to many countries in my life, and I have seen amazing things. Last year, for example, I went to Japan for the first time. I have eaten sushi before in my home country, but the sushi I had in Tokyo was definitely the best! Since that trip, I have already started planning my next adventure."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Choose the tense",
                content: ["I ______ (see) that movie three times in my life."],
                options: ["saw", "have seen", "am seeing"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Choose the tense",
                content: ["She ______ (buy) a new car last weekend."],
                options: ["has bought", "buy", "bought"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Choose the tense",
                content: ["(Question) ______ you ever ______ (eat) insects?"],
                options: ["Have / ate", "Did / eat", "Have / eaten"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Present Perfect vs Simple Past" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Forzar la justificación: se usa past simple en la 2da porque dice 'last weekend'."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Tener una conversación natural mezclando ambos tiempos.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Conversation Flow",
                description: "Start General, Go Specific",
                content: ["1 (Perfect): Have you ever been to Europe?", "2 (Past): Yes, I went to Paris in 2018.", "3 (Past): Did you like it?", "Let's Role Play!"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "The Time Rule",
                content: ["Which is INCORRECT?"],
                options: ["I have lived here for 2 years.", "She has visited Rome yesterday.", "We went to the beach."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Participles",
                content: ["What is the participle (3rd column) of GO?"],
                options: ["Went", "Going", "Gone"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Negative Experience",
                content: ["I ______ sushi in my life. I want to try it!"],
                options: ["haven't eat", "haven't eaten", "didn't ate"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Role-play fluido de entrevista personal. Yo pregunto general (have you ever), y pido detalles (when did you?)."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Fijar la diferencia de uso.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Experience unlocked!",
                content: ["Present Perfect = Experience (No time).", "Simple Past = Details (Specific time)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Never Have I Ever",
                content: ["List 3 things you HAVE done (and when).", "List 3 things you HAVE NEVER done.", "Example: I have never jumped from a plane."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-27",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/jul2urONzOQ",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedir la clase verificando que sepan de memoria qué auxiliar usar."
          }
        ]
      },
      {
        id: "c-i-2",
        title: "Clase 2: Tiempos Perfectos y Duración",
        description: "Dominar fallos comunes del español (Since vs For).",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Identificar cómo expresan la duración en español vs inglés.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Time passes",
                description: "How long...?",
                content: ["How long have you lived in your city?", "How long have you studied English?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar cuánto llevan haciendo algo. Si dicen 'I live here for 5 years', señalarlo como objetivo de hoy."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar How long, For y Since.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Duration Tense",
                description: "De un punto hasta AHORA",
                content: ["En español: 'Yo vivo aquí hace 5 años' (Presente).", "En inglés: 'I HAVE LIVED here for 5 years' (Present Perfect).", "No uses el presente simple para duración continua hasta hoy."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "FOR",
                description: "Cantidad de tiempo (Quantity)",
                content: ["FOR + Número / Duración total", "For 5 years", "For 3 months", "For a long time"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "SINCE",
                description: "Punto de inicio marcado (Starting point)",
                content: ["SINCE + Fecha / Evento", "Since 2018", "Since January", "Since I was a child"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer mucho énfasis en el error latino: No decir 'I work here for 2 years', sino 'I HAVE worked here...'."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Discriminar entre For y Since.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "My Job:",
                content: ["I have worked as a doctor since 2010. It is a very demanding profession, but I love helping people. I have lived in this city for over 10 years, and I have met many interesting patients during this time. Since I started working at this hospital, we've improved many lives. Have you ever worked in healthcare?"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "For or Since?",
                content: ["I have known my best friend ______ 15 years."],
                options: ["since", "for", "in"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "For or Since?",
                content: ["She has studied English ______ she was 10 years old."],
                options: ["for", "since", "until"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Grammar check",
                content: ["How long ______ you ______ (be) married?"],
                options: ["did / be", "do / are", "have / been"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Tiempos Perfectos y Duración" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir implacablemente si usan Present Simple con periodos de tiempo no terminados."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Responder a preguntas de duración personal de forma espontánea.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Interview: The 'How long...?' game",
                description: "Let's talk about you",
                content: ["1. How long have you had your phone?", "2. How long have you known your best friend?", "3. How long have you worked at your job?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "The Error Trap",
                content: ["Which is CORRECT?"],
                options: ["I live here for 3 years.", "I lived here for 3 years (and I still do).", "I have lived here for 3 years."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Since vs For",
                content: ["______ last Christmas."],
                options: ["For", "Since", "In"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Since vs For",
                content: ["______ 3 weeks."],
                options: ["Since", "For", "By"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Dejarles hablar sobre su vida usando For y Since. Forzar la auto-corrección cuando digan 'I have... since 3 years' (Error clásico)."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Solidificar cómo el inglés trata el tiempo transcurrido.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You controlled time!",
                content: ["For = 📦 Cantidad de tiempo (3 hours, 2 days).", "Since = 📌 Punto de inicio en el calendario (1995, Monday)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Your Timeline",
                content: ["Write 5 sentences about your life using HOW LONG, SINCE and FOR.", "Example: I have played guitar since 2012."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-28",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/jz-7F-BV9TE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida felicitando el logro de soltar el presente simple hispanohablante."
          }
        ]
      },
      {
        id: "c-i-3",
        title: "Clase 3: Comparativos y Superlativos",
        description: "Describiendo diferencias extremas y proporciones.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de la comparación.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The Best & The Worst",
                description: "Let's compare!",
                content: ["Who is the tallest person in your family?", "What is better: Pizza or Burgers?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer preguntas rápidas de preferencias personales y usar la respuesta para introducir el tema."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Sistematizar la regla de oro para comparar (-er / more) y (-est / most).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Comparatives (A vs B)",
                description: "Palabras cortas vs Palabras largas",
                content: ["Cortas (1 sílaba): Add -ER + than -> Tall -> TallER than", "Largas (2+ sílabas): Add More + than -> Expensive -> MORE expensive than", "Y -> IER -> Happy -> HappIER than"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Superlatives (The Top!)",
                description: "A vs The World",
                content: ["Cortas: Add THE + -EST -> Tall -> The tallEST", "Largas: Add THE MOST -> Expensive -> The MOST expensive", "Y -> IEST -> Happy -> The happIEST"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Irregulars",
                description: "Memoriza estos 3",
                content: ["Good -> Better -> The Best", "Bad -> Worse -> The Worst", "Far -> Further -> The Furthest"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Enfatizar que NUNCA se usa MORE + -ER juntos (more taller ❌)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Convertir adjetivos fríos en comparativos/superlativos según contexto.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The City vs The Country:",
                content: ["New York is significantly bigger and more crowded than my hometown. However, my town is much quieter and cleaner than New York. Even though living in a small town is more relaxing, I think New York is the most exciting city in the world. It has the best restaurants and the most impressive buildings I've ever seen."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Comparative",
                content: ["A Ferrari is ______ (fast) than a Toyota."],
                options: ["more fast", "fastest", "faster"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Superlative",
                content: ["This is ______ (bad) movie I have ever seen!"],
                options: ["the baddest", "the worst", "worse"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Long adj",
                content: ["Reading is ______ (interesting) than watching TV."],
                options: ["more interesting", "interestingest", "most interesting"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Comparativos y Superlativos" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Si el alumno se equivoca, preguntarle: '¿Cuántas sílabas tiene el adjetivo?'"
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Juego de debate: ¿Cuál es mejor?",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Debate Time!",
                description: "Compare these:",
                content: ["1. Dogs vs Cats (Which is better and why?)", "2. Movies vs Books", "3. What is the most delicious food in your country?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar trap",
                content: ["Which is WRONG?"],
                options: ["He is taller than me.", "She is more beautiful than me.", "They are more faster than me."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Spelling",
                content: ["Comparative of HEAVY:"],
                options: ["Heavyer", "Heavier", "More heavy"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Superlative",
                content: ["She is ______ student in the class."],
                options: ["the smarter", "the smartest", "smartest"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Hacer de abogado del diablo. Si dicen 'Dogs are better', contradecir con 'But cats are cleaner', forzando el uso de comparativos."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Fijar el error de 'more taller'.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You are the BEST!",
                content: ["Never mix: No 'more taller', no 'most easiest'.", "Short word = -ER / -EST", "Long word = MORE / MOST"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Compare your friends",
                content: ["Write 5 sentences comparing your friends or family.", "Example: My brother is taller than me, but I am the funniest."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-29",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/MA7muIjKaWY",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida cerrando la regla fundamental de sílabas cortas vs largas."
          }
        ]
      },
      {
        id: "c-i-4",
        title: "Clase 4: Hábitos del Pasado (Used to)",
        description: "Diferenciar entre rutinas pasadas con 'used to' y pasado simple.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Despertar la nostalgia de la infancia.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Blast from the Past",
                description: "When you were a child...",
                content: ["What cartoon did you watch?", "What games did you play?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a qué jugaban de niños. Identificar si usan pasado simple o intentan usar 'used to'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar USED TO y DIDN'T USE TO.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Used to = Solía...",
                description: "Hábitos que ya NO haces",
                content: ["Si lo hacías y ahora YA NO, usa 'Used to'.", "I used to play with dolls. (Solía jugar con muñecas).", "He used to have long hair. (Solía tener pelo largo)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The Golden Rule strikes back",
                description: "Negative & Questions",
                content: ["Si usas DID, el verbo principal NO cambia.", "I DIDN'T USE to like vegetables. (No 'didn't used to')", "DID you USE to play outside? (No 'did you used')"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Used to vs Simple Past",
                description: "Hábito vs Evento único",
                content: ["Used to: Para cosas repetitivas del pasado. (I used to go to the park every Sunday).", "Past Simple: Para cosas que pasaron UNA vez o fecha exacta. (I went to the park yesterday)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1616628188550-808682f3926d?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer muchísimo énfasis en NO ponerle -d a USE cuando se usa DID o DIDN'T."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Reparar la regla de DID + USE.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "Growing up:",
                content: ["When I was a kid, I used to hate vegetables. Every time my mom cooked broccoli, I would refuse to eat it. I didn't use to eat them at all. But as I grew older, my tastes changed. Now I realize how healthy they are, and yesterday, I actually made and ate a huge vegetable salad for dinner!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Affirmative",
                content: ["I ______ (use) to ride my bike every day."],
                options: ["use", "used to", "using"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Negative Error Check",
                content: ["She ______ use to wear glasses, but now she does."],
                options: ["didn't", "don't", "wasn't"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Question Error Check",
                content: ["Did you ______ to play video games?"],
                options: ["used", "uses", "use"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Hábitos del Pasado (Used to)" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Obligar al alumno a justificar por qué en negativo y pregunta se le quita la 'd'."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Contar la historia personal del alumno (Antes vs Ahora).",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Then vs Now",
                description: "Tell me about you",
                content: ["1. What music did you use to listen to?", "2. What food didn't you use to like?", "3. What do you do now that you didn't use to do?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Did rule",
                content: ["Which is CORRECT?"],
                options: ["I didn't used to smoke. ❌", "I didn't use to smoke. ✅", "I don't used to smoke. ❌"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Meaning",
                content: ["If 'I used to play tennis', it means:"],
                options: ["I play tennis now.", "I played tennis in the past and I still do.", "I played tennis in the past, but NOT anymore."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Past vs Used to",
                content: ["Which sounds better?"],
                options: ["I used to go to Paris in 2015.", "I went to Paris in 2015."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Dejar que narren su propia historia. Es una estructura que gusta mucho porque suena muy nativa."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Celebrar la nostalgia y la estructura.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You controlled the past habits!",
                content: ["Remember: DIDN'T USE TO (No -D).", "Used to = Something you stopped doing."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Your Parents' Past",
                content: ["Ask your parents or grandparents:", "What did they use to do without internet?", "Write 4 sentences."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-30",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/Ljjiw9mC_Cg",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedirse cerrando el tema de la infancia."
          }
        ]
      },
      {
        id: "c-i-5",
        title: "Clase 5: Dando Consejos y Obligaciones",
        description: "Modales y uso avanzado de 'should', 'must', 'have to'.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Jugar al consultorio.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Doctor Help Me!",
                description: "I have a problem...",
                content: ["Teacher: 'I have a terrible headache. What do I do?'", "Student: 'Take an aspirin!'"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Actuar como si tuvieras un problema (sueño, hambre, dolor) y pedirles consejo para ver qué usan."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Separar Consejo vs Obligación.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "SHOULD = Deberías (Consejo)",
                description: "Es buena idea, pero no obligatorio.",
                content: ["You SHOULD drink water.", "You SHOULDN'T drink too much coffee.", "(Modal + Verbo normal sin 'to')"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "MUST = Debes (Obligación Fuerte / Interna)",
                description: "Casi una ley, o un deber personal",
                content: ["I MUST study tonight (Mi propia decisión obligatoria).", "You MUST stop at the red light.", "Negativo: MUSTN'T (Prohibición estricta!)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "HAVE TO = Tener que (Obligación Externa)",
                description: "Las reglas del mundo",
                content: ["I HAVE TO work at 8 AM. (Mi jefe me obliga).", "She HAS TO pay taxes.", "Negativo: DON'T HAVE TO (No es obligatorio / opcional)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Aclarar la diferencia mortal: Mustn't = Prohibido. Don't have to = Opcional (tu decides)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Elegir el modal correcto.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Rules:",
                content: ["To drive a car legally, you have to pass a test and get a license. Once you have it, there are strict rules you must follow to stay safe. For instance, you absolutely mustn't use your phone while driving, as it's incredibly dangerous. You should also drive slowly in the rain to avoid slipping."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Advice",
                content: ["You look tired. You ______ sleep."],
                options: ["must", "should", "have to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Prohibition vs Optional",
                content: ["Tomorrow is Sunday! I ______ wake up early."],
                options: ["mustn't", "shouldn't", "don't have to"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "External Obligation",
                content: ["I can't go to the party. I ______ finish this project for my boss."],
                options: ["should", "have to", "mustn't"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 5: Dando Consejos y Obligaciones" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Hacer énfasis en la diferencia entre MUSTN'T y DON'T HAVE TO."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Dar consejos reales.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Agony Aunt (Consultorio)",
                description: "Give me advice",
                content: ["1. 'I want to speak better English.'", "2. 'I am always stressed at work.'", "Use: You should / You shouldn't / You have to."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["Which is CORRECT?"],
                options: ["You must to go.", "You should to go.", "You have to go."],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Meaning",
                content: ["If I say 'You DON'T HAVE TO pay', it means:"],
                options: ["It is forbidden to pay.", "It is free / Optional.", "It is a bad idea to pay."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Grammar Form",
                content: ["She ______ work on Saturdays."],
                options: ["have to", "has to", "should to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Role-play inverso: el estudiante me expone un problema inventado y yo uso Modales. Luego cambiamos."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repasar las 'leyes' vs 'consejos'.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "The Advisor",
                content: ["Should = Advice", "Must = Inner rule / Law", "Have to = External rule", "(And never use 'TO' after Should/Must!)."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Rules of your house",
                content: ["Write 3 rules of your house using 'have to' or 'mustn't'.", "Write 2 pieces of advice for a healthy life using 'should'."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-31",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/Gh_GHNlyEXM",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Cerrar con recomendaciones sobre el estudio del inglés ('You should practice 10 mins daily!')."
          }
        ]
      },
      {
        id: "c-i-6",
        title: "Clase 6: Segunda Condicional y Tiempos Mezclados",
        description: "Casos hipotéticos irreales del presente y futuro.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Despertar la imaginación.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The Dreamer",
                description: "Imagine this...",
                content: ["If you had 1 million dollars right now, what would you buy first?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre un caso muy hipotético. Observar cómo intentan armar la respuesta."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar la estructura irreal de la 2da condicional (Past + Would).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Second Conditional",
                description: "Situaciones irreales Ahora/Futuro",
                content: ["No es sobre el pasado real. Hablamos de la IMAGINACIÓN.", "If I won the lottery (Unreal), I would buy a house (Result)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The Formula",
                description: "Condition + Result",
                content: ["Condition: IF + Simple Past", "Result: WOULD + Base Verb", "If I lived in Mars, I would fly."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Magic 'Were'",
                description: "Para el verbo To Be",
                content: ["En condicionales irreales, usamos WERE para todos (incluso I, He, She).", "If I were a bird, I would fly.", "If he were rich, he would pay."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Enfatizar que el Simple Past aquí no significa 'ayer', significa 'distancia de la realidad'."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Formar oraciones irreales correctamente.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "If I were the president...",
                content: ["If I were the president, I would definitely build more parks and plant more trees in our cities to reduce pollution. If I had superpowers, on the other hand, I wouldn't worry about traffic anymore because I would fly directly to work. I certainly wouldn't take the crowded bus every morning!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Condition part",
                content: ["If I ______ (have) more time, I would learn French."],
                options: ["have", "had", "would have"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Result part",
                content: ["If she lived in Japan, she ______ (eat) sushi every day."],
                options: ["eat", "ats", "would eat"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "The To Be Trap",
                content: ["If he ______ (be) taller, he would play basketball."],
                options: ["was", "were", "is"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 6: Segunda Condicional y Tiempos Mezclados" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir inmediatamente si dicen 'If I will have' (nunca will/would después de IF)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Contestar preguntas creativas con naturalidad.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Imagination Game",
                description: "What would you do if...",
                content: ["1. ...you found a wallet with $10,000?", "2. ...you were the ONLY person on Earth?", "3. ...you could speak 10 languages?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "The 'IF' Rule",
                content: ["We never put 'will' or 'would' next to:"],
                options: ["The verb", "The subject", "IF"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Structure",
                content: ["If I ______ a car, I ______ drive to work."],
                options: ["had / would", "have / will", "will have / would"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "To Be",
                content: ["If I ______ you, I wouldn't do it."],
                options: ["was", "were", "am"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar respuestas locas para practicar fluidez. 'If I found a wallet, I would travel to Mars'."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cerrar el módulo Intermediate con éxito.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Intermediate Completed!",
                description: "You controlled the unreal!",
                content: ["If + Past -> Unreal Condition", "Would + Verb -> Hypothetical Result"],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Get ready for ADVANCED",
                description: "What's coming?",
                content: ["Passive voice, Perfect Modals, and Professional English!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-32",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/JgB6-RWnV9M",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar efusivamente. Han terminado el nivel B1 y pueden especular sobre el universo."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Present Perfect",
              "question": "Have you ever traveled to another country? Where have you been?"
            },
            {
              "topic": "Present Perfect vs Past Simple",
              "question": "How long have you lived in your current city? When did you move there?"
            },
            {
              "topic": "Comparatives & Superlatives",
              "question": "Compare your city to another city you know. Which is the best place to live?"
            },
            {
              "topic": "Used To & Habits",
              "question": "What did you use to do when you were a child that you don't do anymore?"
            },
            {
              "topic": "Second Conditional",
              "question": "If you won a million dollars, what would you do?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "I ___ to London three times in my life.",
              "options": [
                "went",
                "have been",
                "was"
              ],
              "correctAnswer": "have been"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "She ___ her keys yesterday.",
              "options": [
                "has lost",
                "lost",
                "was losing"
              ],
              "correctAnswer": "lost"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "This is the ___ (interesting) book I have ever read.",
              "options": [],
              "correctAnswer": "most interesting"
            },
            {
              "id": "v4",
              "type": "multiple-choice",
              "question": "I ___ play tennis a lot, but I don't have time now.",
              "options": [
                "used to",
                "am used to",
                "use to"
              ],
              "correctAnswer": "used to"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "If I ___ you, I would study harder.",
              "options": [
                "am",
                "was",
                "were"
              ],
              "correctAnswer": "were"
            }
          ]
},
  {
    id: "advanced",
    title: "Advanced",
    duration: "3 meses",
    objective: "Estructuras avanzadas y uso real en entrevistas y customer service: voz pasiva en futuro y pasado, comparaciones de tiempos, condicionales, since/for, modales perfectos, entrevista, pruebas y role plays.",
    mcfrEquivalent: "B2",
    classes: [
      {
        id: "c-a-1",
        title: "Clase 1: Entrevistas y Customer Service Fundamentals",
        description: "Estructuras condicionales y voz pasiva enfocadas a escenarios de atención y resolución de problemas.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir el tono profesional.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome to Advanced!",
                description: "Professional Contexts",
                content: ["Have you ever worked in Customer Service?", "What is the most difficult part of dealing with clients?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre sus experiencias lidiando con clientes enojados o entrevistas difíciles."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Combinar estructuras para sonar diplomático.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Polite English",
                description: "Softening the message",
                content: ["Directo: We didn't receive your payment.", "Diplomático: Your payment hasn't been received yet. (Passive Voice)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Conditionals for Negotiation",
                description: "If we... will you...?",
                content: ["First Conditional: If you give us a discount, we will buy more.", "Second Conditional (Softer): If you gave us a discount, we would buy more."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Customer Service Phrases",
                description: "The Toolkit",
                content: ["'I apologize for the inconvenience.'", "'Let me look into that for you.'", "'If I were you, I would...' (Advice)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Mostrar cómo el inglés avanzado no es sólo saber vocabulario difícil, sino usar estructuras complejas para sonar profesional y polite."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Transformar oraciones agresivas a diplomáticas.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Angry Client:",
                content: ["Client: I am extremely upset because you lost my package!", "Agent: I sincerely apologize for the inconvenience. Unfortunately, the package was lost in transit due to severe weather conditions. However, a new one is being sent to you right now. If we refund your shipping fees entirely, will you be satisfied with our service?"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Diplomacy",
                content: ["Instead of 'You made a mistake', say: A mistake ______."],
                options: ["made", "was made", "is making"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Negotiation",
                content: ["If we ______ (give) you a refund, will you remove the bad review?"],
                options: ["gave", "gives", "give"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Conditionals",
                content: ["If I ______ the manager, I would fix this immediately."],
                options: ["were", "was", "am"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Entrevistas y Customer Service Fundamentals" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Pedir al alumno que convierta frases directas ('Send me the report') a indirectas/educadas."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Role-play atendiendo una queja.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Role-Play: The Broken Laptop",
                description: "I am the angry client.",
                content: ["Client: 'I am furious! My laptop arrived broken!'", "Agent (You): Mute the anger using passive voice and conditionals to offer a solution."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Vocabulary",
                content: ["Which is the most professional response?"],
                options: ["I don't know.", "Let me check that for you.", "Wait."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Passive Voice",
                content: ["'We will send the email' in passive is:"],
                options: ["The email will be sent.", "The email sent.", "The email is sending."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Second Conditional",
                content: ["If I ______ you, I ______ complain to HR."],
                options: ["am / will", "was / will", "were / would"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Interpretar al cliente furioso. El alumno DEBE usar Voz Pasiva y Condicionales para calmarme."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Fijar el aprendizaje del lenguaje corporativo.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You sound professional!",
                content: ["Passive Voice is perfect for avoiding pointing fingers.", "Use Conditionals to negotiate softly."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The Apology Email",
                content: ["Write a 4-line email apologizing to a customer for a late delivery.", "Include 1 passive voice sentence and 1 conditional."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-33",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/v_fbJnVMHAg",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar por manejar exitosamente el entorno adverso simulado."
          }
        ]
      },
      {
        id: "c-a-2",
        title: "Clase 2: Voz Pasiva en Pasado y Futuro",
        description: "Despersonalización de la oración de forma nativa.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la despersonalización profunda.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Who cares who did it?",
                description: "Focus on the action",
                content: ["Did someone steal your car?", "Or... Was your car stolen?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre noticias recientes, donde 'qué pasó' es más importante que 'quién lo hizo'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar a viajar en el tiempo con el verbo To Be en voz pasiva.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Formula",
                description: "Object + To Be + Participle",
                content: ["La voz pasiva NUNCA cambia su verbo principal (siempre en la 3ra columna).", "Lo ÚNICO que cambia es el verbo TO BE.", "Presente: The car IS washed.", "Pasado: The car WAS washed.", "Futuro: The car WILL BE washed."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Passive in the Past",
                description: "Was / Were + Participle",
                content: ["The pyramids WERE built in Egypt.", "My phone WAS stolen yesterday.", "(No importa quién robó, importa mi teléfono)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
                imageUrl: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 4",
                title: "Passive in the Future",
                description: "Will be + Participle",
                content: ["The email WILL BE sent tomorrow.", "The problem WILL BE solved.", "It sounds extremely professional."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
              }
            ],
            action: "Hacer el mapa mental en la pantalla: Action Verb (Participle) = Statuesque. To Be verb = The Time Traveler."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Convertir activa a pasiva en pasado y futuro.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The New Office:",
                content: ["The old office building was completely destroyed by a massive fire last year. Fortunately, nobody was injured. Right now, a state-of-the-art office complex is being built in the exact same location. The construction team assures us that it will be entirely finished by next month and a grand opening will be hosted."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Passive Past",
                content: ["Harry Potter ______ (write) by J.K. Rowling."],
                options: ["was wrote", "was written", "writes"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Passive Future",
                content: ["Don't worry, the money ______ (refund) tomorrow."],
                options: ["will be refunded", "would refund", "is refund"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Plural vs Singular Trap",
                content: ["The windows ______ (break) by the storm last week."],
                options: ["was broken", "were broken", "broke"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Voz Pasiva en Pasado y Futuro" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Corregir ferozmente el error de no usar el participio (ej: was wrote)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Describir procesos industriales o históricos.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Explain the Process",
                description: "How is it made?",
                content: ["Choose one to explain using Passive Voice:", "1. How a smartphone is created.", "2. How an email is sent.", "3. How a city was built."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Core",
                content: ["In Passive Voice, the main verb is ALWAYS in:"],
                options: ["Past Simple", "Present", "Past Participle"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Transformation",
                content: ["Active: 'They built the house'. Passive:"],
                options: ["The house was built.", "The house built them.", "The house is built."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Future Passive",
                content: ["The meeting ______ at 10 AM."],
                options: ["will hold", "will be held", "will be holden"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Guiarles para que se den cuenta de que los documentales usan esta voz todo el tiempo."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Resumir el truco del To Be.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You sound like a news anchor!",
                content: ["To Be verbs move the time.", "The Participle sits still.", "Was/Were built -> Past | Will be built -> Future."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The News Reporter",
                content: ["Write 3 headlines for a newspaper using Passive Voice in the past.", "Example: The bank was robbed by ninjas."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-34",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/XyDbnulyno8",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Recomendación: leer revistas de negocios para cazar voces pasivas."
          }
        ]
      },
      {
        id: "c-a-3",
        title: "Clase 3: Modales Perfectos y Especulación",
        description: "Lamentaciones, deducciones sobre el pasado y contexto transcurrido.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir el concepto de arrepentimiento/deducción.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Regrets & Mysteries",
                description: "Looking at the past...",
                content: ["Have you ever made a bad decision?", "If someone doesn't answer the phone, what do you think happened?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Conectar con emociones pasadas para que la estructura gramatical (que es pesada) tenga sentido humano."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar Should Have y Must Have (Los modales que viajan al pasado).",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Time Machine",
                description: "Modal + Have + Participle",
                content: ["Los modales normales (Should, Must) hablan del presente/futuro.", "Para hablar de AYER, les agregamos 'HAVE' + 'PARTICIPIO'.", "Should -> Should have done. Must -> Must have been."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "SHOULD HAVE (El Arrepentimiento)",
                description: "Hice mal...",
                content: ["You SHOULD HAVE studied. (Deberías haber estudiado... pero no lo hiciste).", "I SHOULDN'T HAVE eaten that. (Me cayó mal la comida)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "MUST HAVE (La Deducción Lógica)",
                description: "Sherlock Holmes",
                content: ["The floor is wet. It MUST HAVE rained. (Debe haber llovido - 99% seguro).", "He MUST HAVE forgotten his keys. (No hay otra explicación)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Pronunciación vital: Enseñar a contraer 'Should have' como 'Shoulda' y 'Must have' como 'Musta' coloquialmente."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Diferenciar entre un consejo tardío y una conclusión lógica.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Detective & The Thief:",
                content: ["Detective: The window is shattered, and there are footprints in the mud. He must have escaped through here while the alarm was ringing. He can't have gone far on foot.", "Thief (in his cell): I really should have run faster when I heard the sirens. I definitely shouldn't have stopped at that diner to eat a burger. It was a terrible mistake!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Regret",
                content: ["I failed the test. I ______ studied more."],
                options: ["must have", "should have", "should"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Deduction",
                content: ["Her car is not here. She ______ left already."],
                options: ["should have", "must have", "must"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Negative Regret",
                content: ["I have a stomachache. I ______ eaten all that pizza."],
                options: ["shouldn't have", "mustn't have", "didn't have"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Modales Perfectos y Especulación" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Forzar a que expliquen si la oración es 'Sherlock Holmes' (deducción = must have) o 'Persona triste' (arrepentimiento = should have)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Crear escenarios hipotéticos sobre el pasado.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Mystery Maker",
                description: "What happened?",
                content: ["Scenario 1: Your neighbor is screaming happily. Why?", "Scenario 2: You missed your flight. Regret it!"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Core",
                content: ["What verb form comes AFTER Modal + Have?"],
                options: ["Past Simple", "Present", "Past Participle (3rd column)"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Colloquial speaking",
                content: ["'Should've' is short for:"],
                options: ["Should to have", "Should have", "Should give"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Logic",
                content: ["'He must have been tired'. This means:"],
                options: ["He had to be tired.", "I am 99% sure he was tired.", "He should be tired."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar a darles un escenario catastrófico (se les quemó la casa) y que digan 3 cosas que SHOULD HAVE done."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Celebrar el dominio de una estructura compleja.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Advanced Logic Unlocked",
                content: ["Use 'Must have' to be Sherlock Holmes.", "Use 'Should have' to complain about the past."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "My biggest regret",
                content: ["Write a short paragraph about a bad decision in the past using 'Should have'.", "Example: I shouldn't have cut my own hair..."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-35",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/aI_fREymNjI",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Aclarar que native speakers usan esto TODO el tiempo."
          }
        ]
      },
      {
        id: "c-a-4",
        title: "Clase 4: Role Play - Entrevistas de Trabajo",
        description: "Preparando y simulando una entrevista laboral bilingüe.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Romper el hielo y hablar del mercado laboral.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The Hot Seat",
                description: "Are you ready?",
                content: ["Have you ever had a job interview in English?", "What is the scariest question they can ask you?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Relajar el ambiente. Las entrevistas asustan, en otro idioma más. Preguntar por sus experiencias previas."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Vocabulario clave y cómo responder a la pregunta clásica.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Ultimate Question",
                description: "Tell me about yourself.",
                content: ["BAD: 'My name is Pedro. I am 30 years old. I like dogs.'", "GOOD: Present Past Future Formula.", "Who you are now, what you achieved previously, and what you want next."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Action Verbs",
                description: "Don't say 'I did'",
                content: ["I MANAGED a team of 5 peoople.", "I DEVELOPED a new system.", "I IMPROVED the sales by 20%."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Weaknesses",
                description: "The Trap Question",
                content: ["Don't say: 'I am a perfectionist' (Cliché).", "Don't say: 'I am lazy' (Too honest).", "Say: 'I sometimes struggle with X, BUT I am currently learning how to modify it by doing Y.'"],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Prohibir respuestas de manual. Tienen que construir su propio 'elevator pitch'."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Mejorar las respuestas del alumno en tiempo real.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Drafting your pitch",
                description: "Fill the blanks:",
                content: ["Currently, I work as a ______.", "Before that, I ________ for 3 years.", "I am looking for a position where I can ________."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Action Verbs",
                content: ["I ______ a marketing campaign that increased revenue."],
                options: ["made", "did", "led"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Future projection",
                content: ["In 5 years, I ______ to be a manager."],
                options: ["am want", "would like", "must"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Strengths",
                content: ["One of my greatest strengths is my ability to ______ problems."],
                options: ["solve", "make", "brake"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Role Play - Entrevistas de Trabajo" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Trabajar como un coach. Si el alumno da una respuesta débil, ayudarlo a re-escribirla usando las palabras correctas."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Simulación de entrevista (Modo Difícil).",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Interview",
                description: "Are you ready?",
                content: ["I am the HR Manager. You are applying for your dream job.", "I will ask you 3 questions.", "Breathe. Smile. Answer."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Attitude",
                content: ["If you don't understand the question, you should:"],
                options: ["Say 'Yes' and smile.", "Say 'Could you repeat that, please?'", "Run away."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Closing",
                content: ["At the end of the interview, the recruiter asks: 'Do you have any questions for me?' You say:"],
                options: ["No, thank you.", "Yes, what is the daily routine like?", "Yes, when do I start?"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Grammar Check",
                content: ["Which is better for your resume?"],
                options: ["I was responsible for the sales.", "I managed the sales department."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Actuar el rol del entrevistador duro. Hacer preguntas típicas y dar feedback brutalmente honesto pero amable al final."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Felicitar y otorgar el pase a Advanced Elite.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Advanced Completed!",
                description: "You're hired!",
                content: ["You handled the hardest part of business English.", "Remember your Pitch. Use action verbs."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Next Stop: Advanced Elite",
                description: "The Final Polish",
                content: ["Are you ready to speak like a native?", "Next level: Future Perfect, Reported Speech, Idioms!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-36",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/81MmK177K_c",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Gran celebración. Han logrado superar el módulo Advanced con una prueba real de estrés."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Job Interviews",
              "question": "Can you tell me about your strengths and weaknesses?"
            },
            {
              "topic": "Customer Service Roleplay",
              "question": "I am an angry customer complaining about a delayed delivery. Handle the situation."
            },
            {
              "topic": "Passive Voice",
              "question": "Describe a process (e.g., how a cake is made or how coffee is produced) using passive voice."
            },
            {
              "topic": "Modals of Deduction",
              "question": "Your friend didn't come to the party yesterday. What might/must have happened?"
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "The Mona Lisa ___ by Leonardo da Vinci.",
              "options": [
                "painted",
                "was painted",
                "is painted"
              ],
              "correctAnswer": "was painted"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "He is late. He ___ have missed the train.",
              "options": [
                "might",
                "must",
                "can"
              ],
              "correctAnswer": "might"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "A new shopping mall ___ (build) in our town next year.",
              "options": [],
              "correctAnswer": "will be built"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "What is the tone?",
              "audioText": "I'm afraid there has been a slight delay with your order.",
              "options": [
                "Aggressive",
                "Polite and apologetic",
                "Excited"
              ],
              "correctAnswer": "Polite and apologetic"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "My car ___ at the moment.",
              "options": [
                "is repaired",
                "is being repaired",
                "repaired"
              ],
              "correctAnswer": "is being repaired"
            }
          ]
},
  {
    id: "advanced-elite",
    title: "Advanced Elite",
    duration: "3 meses",
    objective: "Perfeccionar inglés avanzado para hablar con claridad sobre experiencias, intenciones y situaciones complejas. Tiempos perfectos, future perfect, condicionales 0–3, voz pasiva, estilo directo/indirecto, as…as, used to / be used to / get used to, be about to vs. was going to.",
    mcfrEquivalent: "C1",
    classes: [
      {
        id: "c-ae-1",
        title: "Clase 1: Reported Speech y Negociación Avanzada",
        description: "Reportar lo dicho por otros en contextos formales y profesionales.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de citar a otras personas.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome to Elite! He Said, She Said",
                description: "Did you hear the news?",
                content: ["Have you ever been involved in office gossip?", "How do you tell someone what ANOTHER person said?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre cómo comunican la información de un tercero. Introducir sutilmente que en inglés, al reportar, 'viajamos al pasado'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar la regla del salto hacia atrás en los tiempos verbales.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Reported Speech Rule",
                description: "Take one step back into the past",
                content: ["Cuando reportamos lo que alguien dijo, el tiempo verbal retrocede.", "Present -> Past", "Past -> Past Perfect", "Will -> Would"],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Present to Past",
                description: "Direct vs Reported",
                content: ["Direct: 'I am tired' (He says).", "Reported: He SAID (that) he WAS tired.", "Direct: 'I don't like meetings'.", "Reported: She SAID she DIDN'T like meetings."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Exceptions",
                description: "Cuando NO cambiamos el pasado",
                content: ["1. Si el hecho sigue siendo una verdad innegable: 'He said the earth is round'.", "2. Si la acción es INMEDIATA (lo acaba de decir).", "De lo contrario, siempre aplica el Backshift (salto atrás)."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer el ademán físico de 'dar un paso atrás' cada vez que se haga el Reported Speech para fijar la idea."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Manipular los tiempos verbales mecánicamente y en contexto.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Negotiation:",
                content: ["During the annual meeting, the CEO confidently stated that they would increase salaries across all departments by the end of the year. Following that, the HR Manager told us that the board had already approved the budget and that we shouldn't worry about inflation affecting our purchasing power. However, it's been six months and absolutely nothing has happened yet!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Present -> Past",
                content: ["'I want a coffee'. He said that he ______ a coffee."],
                options: ["wants", "wanted", "wanting"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Will -> Would",
                content: ["'I will call you tomorrow'. She said she ______ call me tomorrow."],
                options: ["will", "would", "called"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Pronoun shift",
                content: ["'My computer is broken'. John said that ______ computer was broken."],
                options: ["my", "his", "the"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Reported Speech y Negociación Avanzada" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Atención a los PRONOMBRES (my -> his/her). Eso suele causar más errores que los verbos."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Transmitir mensajes en cadena (Juego del teléfono descompuesto).",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Messenger",
                description: "Pass the message",
                content: ["Boss says: 'I cannot approve this budget because it is too high'.", "You tell your team: 'The boss said that he _____ approve the budget because it _____ too high'."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Core",
                content: ["When reporting 'I CAN do it', what do we use?"],
                options: ["can", "could", "would"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Time Expressions",
                content: ["'Yesterday' in Reported Speech becomes:"],
                options: ["Yesterday", "The next day", "The previous day / The day before"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Say vs Tell",
                content: ["Which is correct?"],
                options: ["He said me that...", "He told me that...", "He told to me that..."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Importante: Aclarar SAY vs TELL. Tell SIEMPRE necesita una persona (Tell me, tell him). Say NO."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Fijar el Backshift.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You are a master of communication!",
                content: ["Remember the Backshift rule: Present -> Past -> Past Perfect.", "Always watch the pronouns!", "Tell + Person. Say + Phrase."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The Gossip",
                content: ["Write down 3 things somebody told you today, using Reported Speech.", "Example: My mom said that dinner was ready."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-37",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/awWfoQONORg",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida cerrando la idea de que reportar es fundamental para reuniones exitosas."
          }
        ]
      },
      {
        id: "c-ae-2",
        title: "Clase 2: Future Perfect y Mastery de Condicionales",
        description: "Visiones futuras terminadas y control total del Third Conditional.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Proyectarse al futuro.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Time Travel",
                description: "By the year 2050...",
                content: ["What will you have accomplished by 2050?", "Will we have moved to Mars?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos qué meta habrán cumplido para fin de año. Si usan 'I will do', corregir suavemente hacia la idea de 'I will HAVE DONE'."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar Future Perfect y Third Conditional.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Future Perfect",
                description: "Will have + Participle",
                content: ["Se usa para acciones que ESTARÁN TERMINADAS antes de un momento en el futuro.", "By 5 PM, I WILL HAVE FINISHED the report.", "(A las 5 PM ya estará listo)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "The Third Conditional",
                description: "The Impossible Past",
                content: ["Habla de un pasado que ya no se puede cambiar.", "If + Past Perfect | Would have + Participle", "If I HAD STUDIED, I WOULD HAVE PASSED.", "(Pero no estudié y reprobé)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "Conditional Mix-up!",
                description: "0 to 3 Overview",
                content: ["Cero (Fact): If I drink coffee, I stay awake.", "First (Real): If I drink it, I will stay awake.", "Second (Unreal): If I drank it, I would stay awake.", "Third (Impossible): If I had drunk it, I would have stayed awake."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Explicar la 3ra Condicional como el nivel máximo de la gramática inglesa (Matemática pura: Had + Participio = Would have + Participio)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Crear oraciones complejas sin equivocarse en la fórmula.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Failed Project:",
                content: ["The marketing project was a complete disaster. We are so behind schedule that by December, we definitely won't have reached our quarterly goals. It is extremely frustrating because we warned them about the risks early on. Honestly, if the boss had listened to our feedback back in August, we would have succeeded and avoided this massive financial loss."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Future Perfect",
                content: ["By next year, I ______ (save) $10,000."],
                options: ["will save", "will have saved", "would save"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Third Conditional",
                content: ["If we ______ (leave) earlier, we wouldn't have missed the train."],
                options: ["left", "had left", "have left"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Result Clause",
                content: ["If I had seen you, I ______ (say) hello."],
                options: ["would say", "would have said", "said"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Future Perfect y Mastery de Condicionales" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Atención extrema al 3er condicional, muchos alumnos ponen 'If I would have' lo cual es un error gravísimo."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Usar estas estructuras en anécdotas propias.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Butterfly Effect",
                description: "Change the past",
                content: ["Think of a big moment in your life. How would it be different?", "If I hadn't moved to this city, I wouldn't have met..."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Timelines",
                content: ["When do we use Future Perfect?"],
                options: ["To predict the future.", "For actions that will be completed BEFORE a future time.", "For impossible situations."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Grammar Rule",
                content: ["In the Third Conditional 'IF' part, which tense is used?"],
                options: ["Past Simple", "Past Continuous", "Past Perfect"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Error Hunt",
                content: ["Which sentence is WRONG?"],
                options: ["If I would have known, I would have helped.", "If I had known, I would have helped.", "By Friday, I will have finished."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Fomentar que expresen arrepentimiento genuino o victorias de su pasado y cómo afectaron su presente."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Sintetizar la cima de las matemáticas en gramática inglesa.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "You've reached the peak!",
                content: ["By tomorrow, you WILL HAVE MASTERED these tenses.", "If you hadn't joined this class, you wouldn't have learned this!"],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "Your 10-year goal",
                content: ["Write: 'By 2035, I will have...' (Name 3 things).", "Write 2 sentences using Third Conditional."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-38",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/vXI2lRCnTKw",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Cerrar con una ovación. Esta es probablemente la clase gramatical más dura de todo el curso."
          }
        ]
      },
      {
        id: "c-ae-3",
        title: "Clase 3: Expresando Costumbres y Adaptaciones",
        description: "Uso correcto de Used to, Be used to, y Get used to.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de adaptación a cosas nuevas.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Changes",
                description: "Getting out of your comfort zone",
                content: ["What is the hardest thing about moving to another country?", "Is it hard to wake up early if you usually wake up late?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Dialogar sobre cómo se siente el cerebro cuando aprende algo nuevo vs cuando ya es una rutina."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Explicar la santísima trinidad de 'USE TO'.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "USED TO (El pasado)",
                description: "Solía...",
                content: ["Hábito que ya no haces. Acción TERMINADA.", "I USED TO smoke. (Ya no lo hago).", "Verbo: Normal (Base form)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "BE USED TO + ING (El presente)",
                description: "Estar acostumbrado a...",
                content: ["Ya es normal para ti, no te cuesta esfuerzo.", "I AM USED TO waking up early. (Es mi rutina, estoy acostumbrado).", "Verbo: OBLIGATORIO con -ING (o va seguido de un sustantivo)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "GET USED TO + ING (El proceso)",
                description: "Acostumbrándose...",
                content: ["El puente entre 'nuevo' y 'normal'. El proceso de adaptación.", "I just got a new job. I AM GETTING USED TO the schedule.", "It's hard, but I WILL GET USED TO it.", "Verbo: OBLIGATORIO con -ING."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "REGLA DE ORO: Si hay un verbo To Be o Get antes de 'used to', el siguiente verbo DEBE llevar ING. (Error hiper-frecuente)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Forzar a poner el ING o quitar el ING según la fórmula.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Immigrant:",
                content: ["I used to live in a sunny town in Mexico, so when I first moved to Canada, dealing with the heavy snow was incredibly challenging. During my first winter, I thought I would never adapt to freezing temperatures. However, step by step, I am getting used to the harsh weather. In fact, I am already used to drinking hot tea every morning and wearing three layers of clothing before leaving the house!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Past Habit",
                content: ["When I was a kid, I ______ play video games all day."],
                options: ["used to", "was used to", "got used to"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Current Habit (The ING trap)",
                content: ["Don't worry about the noise. I am used to ______ in a loud city."],
                options: ["live", "living", "lived"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "The Process",
                content: ["This new software is very difficult. I can't ______ it!"],
                options: ["used to", "am used to", "get used to"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Expresando Costumbres y Adaptaciones" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Gritar '¡ING!' cada vez que el alumno use 'Be used to' con un verbo normal."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Hablar sobre rutinas reales del alumno.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "Your Life",
                description: "Tell me...",
                content: ["1. What did you USE TO do but don't anymore?", "2. What are you USED TO doing now that is hard for others?", "3. What new thing are you GETTING USED TO?"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Core",
                content: ["Which sentence is CORRECT?"],
                options: ["I am used to wake up early. ❌", "I used to waking up early. ❌", "I am used to waking up early. ✅"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Meaning",
                content: ["'I am getting used to my new glasses.' This means:"],
                options: ["The glasses are completely normal for me now.", "It is still a little weird, but I am adapting.", "I wore glasses in the past."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "To Be vs Not To Be",
                content: ["He ______ to be very shy, but now he is very outgoing."],
                options: ["used", "is used", "gets used"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Prestar mucha atención a la pronunciación (la D de used casi no suena, suena 'yustu')."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Repaso de la trinidad.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Master of Habits",
                content: ["Used to = Past.", "Be used to + ING = Normal now.", "Get used to + ING = Adapting."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The New Job",
                content: ["Imagine you just moved to Japan.", "Write 3 sentences using Be used to / Get used to about your new life."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-39",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/on_1sS6Ii8M",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Cierre elogiando su habilidad para captar un tema que confunde hasta al nivel C2."
          }
        ]
      },
      {
        id: "c-ae-4",
        title: "Clase 4: Voz Pasiva Avanzada y Comparativos As...As",
        description: "Análisis estilístico en documentos y correos corporativos.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la igualdad y la impersonalidad.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! The Corporate Talk",
                description: "Equal but different",
                content: ["Is working from home AS productive AS working in the office?", "How do you sound polite when someone makes a mistake?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Generar un breve debate para ver si usan comparativos básicos ('more than') o intentan la igualdad ('as...as')."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar AS...AS y la estructura de reporte pasivo.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Equality: AS ... AS",
                description: "Tan ... como",
                content: ["Para decir que dos cosas son iguales.", "This computer is AS fast AS the old one.", "Negativo: It is NOT AS expensive AS a Mac. (Es decir, la Mac es más cara)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Advanced Passive Voice",
                description: "It is believed that...",
                content: ["Para rumores, creencias generales o reportes formales.", "En vez de 'People say the company is bankrupt' -> 'IT IS SAID that the company is bankrupt'."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Double Change",
                description: "The company is said to...",
                content: ["Nivel CEO: 'The company IS SAID TO BE bankrupt'.", "Otras frases: 'It is believed that...', 'It is expected that...'."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Destacar que 'It is said' suena sumamente profesional y libra de responsabilidad a quien habla."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Leer y transformar correos informales en formales.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "The Formal Email:",
                content: ["Dear team, I am writing to inform you about the upcoming software transition. It is expected that the new operational rules will be fully enforced starting tomorrow morning. Fortunately, initial testing indicates that the new software is not as difficult to navigate as we initially feared. Furthermore, it is widely believed to be far more efficient than our legacy system. Please review the attached corporate guidelines."],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "As...As",
                content: ["My English is ______ good ______ yours."],
                options: ["more / than", "as / as", "so / as"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Negative As...As",
                content: ["A bicycle is ______ fast as a car."],
                options: ["not as", "not more", "less as"],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Impersonal Passive",
                content: ["______ that prices will go up next year."],
                options: ["People is saying", "It is expected", "Is expected"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Voz Pasiva Avanzada y Comparativos As...As" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Exigir que usen 'not as...as' en lugar de 'is less than' para sonar más naturales."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Reescribir quejas y rumores de forma corporativa.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The Editor",
                description: "Make it professional",
                content: ["Change this gossip into professional language:", "1. 'Everybody says the boss is quitting.' -> 'It is said...'", "2. 'The new phone is worse than the old one.' -> Use 'Not as...as'."],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Rules",
                content: ["'It is believed that he is rich' is the same as:"],
                options: ["He is believed to be rich.", "He is believed rich.", "He believes to be rich."],
                correctOptionIndex: 0,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "As...As form",
                content: ["Inside 'As [word] As', the word must be:"],
                options: ["A comparative ending in -ER", "A base adjective (tall, expensive)", "A noun"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Meaning",
                content: ["'This test is NOT as hard as the last one.' This means:"],
                options: ["This test is harder.", "The last test was harder.", "They are exactly the same."],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Guiarlos al escribir. El modo de comunicación 'diplomático' requiere limpiar el vocabulario emocional."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Asegurar las dos estructuras.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Great Job!",
                description: "Corporate Master",
                content: ["As + adjective + As = Equality.", "It is said / expected / believed = Professional distancing."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "Homework",
                description: "The Rumor Mill",
                content: ["Write 2 rumors about famous people using 'It is said/believed that...'", "Compare two actors using 'Not as...as'."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-40",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Despedida recordando que dominar esto marca la diferencia en escritos formales o exámenes tipo IELTS."
          }
        ]
      },
      {
        id: "c-ae-5",
        title: "Clase 5: Expectativas e Intenciones Fallidas",
        description: "Aprender el matiz de 'be about to' vs. 'was going to' en negocios.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "5 minutos",
            objective: "Introducir la idea de planes arruinados o inminentes.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome! Almost...",
                description: "Interrupted Plans",
                content: ["Have you ever planned to do something, but someone interrupted you?", "What happened?"],
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
                imageUrl: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar a los alumnos si han estado 'a punto' de hacer algo cuando suena el teléfono."
          },
          {
            id: "s2",
            title: "2. Grammar Presentation",
            duration: "15 minutos",
            objective: "Enseñar a expresar inmediatez y planes fallidos.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Be About To",
                description: "Inminencia pura",
                content: ["Significa 'Estar a punto de...'.", "Presente: I AM ABOUT TO leave. (Me voy en 2 segundos).", "Pasado: I WAS ABOUT TO call you... (Estaba marcando tu número)."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 3",
                title: "Was / Were Going To",
                description: "La intención fallida",
                content: ["Significa 'Iba a...'. (Un plan que generalmente no sucedió).", "I WAS GOING TO study, but I fell asleep.", "They WERE GOING TO buy the house, but it was too expensive."],
                bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
              },
              {
                id: "Diapositiva 4",
                title: "The Difference",
                description: "Time vs Plan",
                content: ["WAS ABOUT TO: Muy físico. Tenías el teléfono en la mano.", "WAS GOING TO: Más conceptual. Era tu plan mental para hoy."],
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Hacer pantomima: Levantar las llaves para salir (about to) vs mirar la agenda (going to)."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Diferenciar entre un plan de vida y una inmediatez física.",
            slides: [
              {
                id: "Diapositiva 5",
                title: "Reading Practice",
                type: "reading",
                description: "A Bad Day:",
                content: ["I was going to go to the gym early this morning because I really wanted to start my day with some exercise. I got fully dressed and I was about to open the front door when my phone suddenly rang. It was my boss calling from the main office. He sounded furious and told me that he was about to fire me if I didn't send the quarterly report immediately. My relaxing morning was completely ruined!"],
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 6",
                title: "Complete the sentence (1/3)",
                description: "Immediate future",
                content: ["Hurry up! The train is ______ leave!"],
                options: ["going to", "about to", "will"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 7",
                title: "Complete the sentence (2/3)",
                description: "Failed Plan",
                content: ["I ______ wash the car, but it started raining."],
                options: ["was about to", "was going to", "am going to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
              {
                id: "Diapositiva 8",
                title: "Complete the sentence (3/3)",
                description: "Failed Immediacy",
                content: ["I ______ eat the last slice of pizza, but someone took it right from my hand!"],
                options: ["am about to", "was about to", "was going to"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 5: Expectativas e Intenciones Fallidas" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              }
            ],
            action: "Cuestionar siempre si es un plan (Was going to) o si ya lo estaban a punto de hacer físicamente (Was about to)."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Contar excusas perfectas a nivel profesional.",
            slides: [
              {
                id: "Diapositiva 9",
                title: "The King of Excuses",
                description: "Why didn't you do it?",
                content: ["Boss: 'Why didn't you send the email?'", "You: Make a creative excuse using 'I was about to... but...' or 'I was going to... but...'"],
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                id: "Diapositiva 10",
                title: "Fun Quiz! (1/3)",
                description: "Grammar Core",
                content: ["After 'About to', you must use:"],
                options: ["A noun", "A verb in past", "A verb in base form"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 11",
                title: "Fun Quiz! (2/3)",
                description: "Meaning",
                content: ["'The movie is about to start.' This means in:"],
                options: ["1 hour", "1 minute", "Tomorrow"],
                correctOptionIndex: 1,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              },
              {
                id: "Diapositiva 12",
                title: "Fun Quiz! (3/3)",
                description: "Structure",
                content: ["They ______ travel to London, but the flight was canceled."],
                options: ["are going to", "were about to", "were going to"],
                correctOptionIndex: 2,
                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
              }
            ],
            action: "Jugar a 'My dog ate my homework' versión corporativa usando 'was going to / was about to'."
          },
          {
            id: "s5",
            title: "5. Wrap-up",
            duration: "10 minutos",
            objective: "Cerrar con broche de oro Advanced Elite.",
            slides: [
              {
                id: "Diapositiva 13",
                title: "Advanced Elite Completed!",
                description: "You're a master of Nuance!",
                content: ["You can now explain failed plans, report gossip correctly, and sound polite but firm.", "You are ready for the Real World."],
                bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
                imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 14",
                title: "The Ultimate Level",
                description: "Masters of Fluency",
                content: ["Next stop: Complete fluency.", "Critical thinking, real debates, and no more grammar translations."],
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
              },
                {
                                id: "Diapositiva-Video-Homework-41",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/oBatJc1VZCE",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar intensamente. El conocimiento gramatical duro está oficialmente terminado. Lo que viene (Masters) es pura práctica de conversación de alto nivel."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Reported Speech & Negotiation",
              "question": "Roleplay: You are negotiating a salary for a new job. Try to persuade me."
            },
            {
              "topic": "Future Perfect",
              "question": "What will you have accomplished by this time next year?"
            },
            {
              "topic": "Expectations (supposed to/expected to)",
              "question": "Talk about a time when expectations were different from reality."
            },
            {
              "topic": "Cultural Expressions",
              "question": "Describe a cultural custom from your country using advanced vocabulary."
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "By 2025, I ___ my degree.",
              "options": [
                "will finish",
                "will have finished",
                "am finishing"
              ],
              "correctAnswer": "will have finished"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "She said she ___ him the day before.",
              "options": [
                "had seen",
                "saw",
                "has seen"
              ],
              "correctAnswer": "had seen"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "We were ___ (suppose) to meet at 8, but he was late.",
              "options": [],
              "correctAnswer": "supposed"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Listen to the negotiation.",
              "audioText": "I appreciate your offer, but I was looking for something closer to fifty thousand.",
              "options": [
                "Accepting",
                "Counter-offering",
                "Declining immediately"
              ],
              "correctAnswer": "Counter-offering"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "It is ___ that climate change is accelerating.",
              "options": [
                "believe",
                "believed",
                "been believed"
              ],
              "correctAnswer": "believed"
            }
          ]
},
  {
    id: "masters",
    title: "Masters of Fluency",
    duration: "3 meses",
    objective: "Desarrollar fluidez y precisión sobre temas complejos de cultura, sociedad, salud, tecnología mediante conversaciones y debates. Critical Thinking y Conversation Club.",
    mcfrEquivalent: "C1/C2",
    classes: [
      {
        id: "c-m-1",
        title: "Clase 1: Pensamiento Crítico - Tecnología y Ética",
        description: "Fluidez discursiva sobre temas controversiales usando estructuras complejas de opinión.",
        sections: [
          {
            id: "s1",
            title: "1. The Spark (Hook)",
            duration: "10 minutos",
            objective: "Desatar el debate sin gramática pre-establecida.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Welcome to Masters!",
                description: "No more grammar rules.",
                content: ["From now on, we focus on FLUENCY and CRITICAL THINKING.", "Today's Topic: The future of humanity.", "Is AI going to destroy our jobs, or elevate our potential?"],
                bgColor: "bg-gradient-to-br from-gray-800 to-black",
                imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Lanzar la pregunta y escuchar. No corregir gramática menor, solo fluidez y vocabulario."
          },
          {
            id: "s2",
            title: "2. Exploring Perspectives",
            duration: "15 minutos",
            objective: "Introducir vocabulario de debate culto.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Expressing Nuance",
                description: "Beyond 'I think' and 'I agree'",
                content: ["Instead of 'I don't know', use: 'It's a double-edged sword.'", "Instead of 'I agree', use: 'I share that perspective because...'", "Instead of 'I disagree', use: 'I play devil's advocate here...'"],
                bgColor: "bg-gradient-to-br from-indigo-800 to-purple-900"
              },
              {
                id: "Diapositiva 3",
                title: "Dilemma 1: Social Media",
                description: "Connection vs Isolation",
                content: ["Are we more connected than ever, or more isolated than ever?", "Use one of the new expressions to answer."],
                bgColor: "bg-gradient-to-br from-indigo-800 to-purple-900"
              }
            ],
            action: "Forzar la salida de sus respuestas prefabricadas de nivel medio."
          },
          {
            id: "s3",
            title: "3. Deep Dive (Article / Concept)",
            duration: "15 minutos",
            objective: "Analizar posturas éticas complejas.",
            slides: [
              {
                id: "Diapositiva 4",
                title: "The Trolley Problem of AI",
                description: "Self-driving cars",
                content: ["A self-driving car's brakes fail.", "It can either hit 5 pedestrians, or crash into a wall, killing the driver.", "Who should the AI choose to save? The driver or the pedestrians?"],
                bgColor: "bg-gradient-to-br from-red-800 to-rose-900",
                imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Defend your view",
                description: "Be the programmer",
                content: ["If you are the programmer making the code, how do you justify your decision?"],
                bgColor: "bg-gradient-to-br from-red-800 to-rose-900"
              }
            ],
            action: "El profesor hace de abogado del diablo y ataca amablemente la postura del alumno para forzar argumentación fluida."
          },
          {
            id: "s4",
            title: "4. The Spotlight (Monologue)",
            duration: "15 minutos",
            objective: "Sostener el habla ininterrumpida por 2 minutos.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "Your TED Talk",
                description: "The Floor is Yours",
                content: ["You have 2 minutes to talk continuously about:", "'Why technology is ruining / saving human relationships'.", "No interruptions."],
                bgColor: "bg-gradient-to-br from-blue-800 to-cyan-900"
              }
            ],
            action: "Medir el tiempo. Tomar notas de errores repetitivos para darlos de feedback PUNTUAL al final, no durante el habla."
          },
          {
            id: "s5",
            title: "5. Feedback & Polish",
            duration: "5 minutos",
            objective: "Corregir vicios arrastrados (Fossilized errors).",
            slides: [
              {
                id: "Diapositiva 7",
                title: "The Master's Polish",
                description: "Tiny tweaks, massive results",
                content: ["Focus on rhythm and intonation.", "Remember: English is a stress-timed language."],
                bgColor: "bg-gradient-to-br from-emerald-800 to-teal-900",
                imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Pensamiento Crítico - Tecnología y Ética" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              },
                {
                                id: "Diapositiva-Video-Homework-42",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/FD1IpuXSq74",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Dar feedback específico sobre muletillas ('ehhh', repetitivos 'so... so...')."
          }
        ]
      },
      {
        id: "c-m-2",
        title: "Clase 2: Cultura y Sociedad Contemporánea",
        description: "Debates profundos sobre medios, fama, consumismo y globalización.",
        sections: [
          {
            id: "s1",
            title: "1. The Spark (Hook)",
            duration: "10 minutos",
            objective: "Reflexionar sobre la cultura moderna.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Pop Culture & Power",
                description: "Who influences you?",
                content: ["Why are influencers so powerful?", "Is fame a gift or a curse nowadays?"],
                bgColor: "bg-gradient-to-br from-indigo-600 to-purple-800",
                imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Dejar que el alumno dirija la conversación. Empujar para que no den respuestas cortas."
          },
          {
            id: "s2",
            title: "2. Exploring Perspectives",
            duration: "15 minutos",
            objective: "Vocabulario avanzado: Idioms and Collocations.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Idioms for Debates",
                description: "Sounding Native",
                content: ["'To play devil's advocate' (Tomar la postura contraria para debatir).", "'To sit on the fence' (No decidirse / Mantenerse neutral).", "'To hit the nail on the head' (Dar en el clavo)."],
                bgColor: "bg-gradient-to-br from-purple-700 to-pink-800"
              },
              {
                id: "Diapositiva 3",
                title: "Dilemma 2: Fast Fashion",
                description: "Cheap clothes, high cost",
                content: ["Should fast fashion companies be banned to save the environment?", "Don't sit on the fence! Choose a side!"],
                bgColor: "bg-gradient-to-br from-purple-700 to-pink-800"
              }
            ],
            action: "Forzar al alumno a usar los 3 idioms durante la clase."
          },
          {
            id: "s3",
            title: "3. Deep Dive (Article / Concept)",
            duration: "15 minutos",
            objective: "Analizar el fenómeno de la globalización.",
            slides: [
              {
                id: "Diapositiva 4",
                title: "The Global Village",
                description: "Losing our roots?",
                content: ["Because of the internet, teenagers in Japan, Mexico, and France wear the same clothes and listen to the same music.", "Are we losing our cultural identity?"],
                bgColor: "bg-gradient-to-br from-pink-800 to-orange-900",
                imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Analyze",
                description: "Is a single global culture good for peace, or bad for diversity?",
                content: ["Defend your posture using advanced linking words: Furthermore, Moreover, Nevertheless."],
                bgColor: "bg-gradient-to-br from-pink-800 to-orange-900"
              }
            ],
            action: "Caza de muletillas: Detener al alumno si dice repetidamente 'but', forzándolo a usar 'however' o 'nevertheless'."
          },
          {
            id: "s4",
            title: "4. The Spotlight (Monologue)",
            duration: "15 minutos",
            objective: "Defensa de una postura impopular.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "The Devil's Advocate",
                description: "Defend the undefendable",
                content: ["You have 2 minutes to explain why: 'Reality TV is the highest form of entertainment'.", "Even if you hate Reality TV, you MUST defend it."],
                bgColor: "bg-gradient-to-br from-orange-800 to-red-900"
              }
            ],
            action: "Este ejercicio de gimnasia mental fuerza al cerebro a desconectar la emoción de la herramienta (el idioma), produciendo fluidez real."
          },
          {
            id: "s5",
            title: "5. Feedback & Polish",
            duration: "5 minutos",
            objective: "Revisión de fluidez y collocations.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "The Master's Polish",
                description: "Collocations",
                content: ["Native speakers don't say 'make a picture', they say 'take a picture'.", "Reviewing our natural word pairs."],
                bgColor: "bg-gradient-to-br from-teal-800 to-emerald-900",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Cultura y Sociedad Contemporánea" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              },
                {
                                id: "Diapositiva-Video-Homework-43",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/OjzsRpUBXbY",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Dar feedback sobre las combinaciones de palabras naturales (collocations) que fallaron durante el debate."
          }
        ]
      },
      {
        id: "c-m-3",
        title: "Clase 3: Perspectivas en Salud Mental y Física",
        description: "Vocabulario hiperespecializado para la salud, estrés y estilo de vida moderno.",
        sections: [
          {
            id: "s1",
            title: "1. The Spark (Hook)",
            duration: "10 minutos",
            objective: "Hablar sobre Burnout y ansiedad moderna.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "The Burnout Generation",
                description: "Are we tired all the time?",
                content: ["Why is everybody stressed nowadays?", "Have you ever experienced 'burnout'?"],
                bgColor: "bg-gradient-to-br from-green-700 to-teal-900",
                imageUrl: "https://images.unsplash.com/photo-1498671546682-94a232c26d17?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Preguntar sobre la diferencia entre estar 'cansado' y estar 'quemado' (burnout) usando vocabulario emocional."
          },
          {
            id: "s2",
            title: "2. Exploring Perspectives",
            duration: "15 minutos",
            objective: "Describir el dolor y la salud con precisión clínica y coloquial.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "Medical vs Casual",
                description: "Levels of pain",
                content: ["Instead of 'My head hurts': 'I have a splitting headache.'", "Instead of 'I feel bad': 'I'm under the weather.'", "Instead of 'I am stressed': 'I am overwhelmed.'"],
                bgColor: "bg-gradient-to-br from-teal-700 to-cyan-900"
              },
              {
                id: "Diapositiva 3",
                title: "Dilemma 3: The 4-Day Work Week",
                description: "Curing the Burnout",
                content: ["Should we work 4 days a week instead of 5?", "Will productivity drop, or will it increase because people are rested?"],
                bgColor: "bg-gradient-to-br from-teal-700 to-cyan-900"
              }
            ],
            action: "Corregir inmediatamente si dicen 'I have headache' (falta el 'a': I have A headache)."
          },
          {
            id: "s3",
            title: "3. Deep Dive (Article / Concept)",
            duration: "15 minutos",
            objective: "Criticar la industria del bienestar.",
            slides: [
              {
                id: "Diapositiva 4",
                title: "The Wellness Industry",
                description: "Is health a luxury?",
                content: ["Green juices, yoga retreats, expensive supplements.", "Are we buying health, or just buying a status symbol?"],
                bgColor: "bg-gradient-to-br from-emerald-800 to-green-900",
                imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Analyze",
                description: "Fake vs Real Health",
                content: ["Debate: Social media makes us focus more on LOOKING healthy than BEING healthy.", "Agree or disagree? Defend your point."],
                bgColor: "bg-gradient-to-br from-emerald-800 to-green-900"
              }
            ],
            action: "Pedir argumentos sólidos. Si el estudiante dice 'I agree', preguntarle 'Why exactly? Give me an example of fake health'."
          },
          {
            id: "s4",
            title: "4. The Spotlight (Monologue)",
            duration: "15 minutos",
            objective: "Simular una recomendación a un amigo al borde del colapso.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "The Intervention",
                description: "Save your friend",
                content: ["You have 2 minutes to convince your extremely workaholic friend to take a vacation.", "Use advanced expressions, modal verbs, and conditionals."],
                bgColor: "bg-gradient-to-br from-yellow-700 to-orange-800"
              }
            ],
            action: "Actuar el rol del amigo terco que no quiere tomar vacaciones. Hacer que el alumno argumente y persuada fluídamente."
          },
          {
            id: "s5",
            title: "5. Feedback & Polish",
            duration: "5 minutos",
            objective: "Corrección fonética de vocabulario médico.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "The Master's Polish",
                description: "Tricky words",
                content: ["Pronunciation check:", "Psychology, Psychiatrist, Anxiety, Disease vs Decease."],
                bgColor: "bg-gradient-to-br from-slate-700 to-gray-900",
                imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Perspectivas en Salud Mental y Física" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              },
                {
                                id: "Diapositiva-Video-Homework-44",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/SHXPpsIJTb0",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Repasar la pronunciación de la 'P' muda en 'Psychology' y la acentuación de 'Anxiety' [ang-ZAI-uh-tee]."
          }
        ]
      },
      {
        id: "c-m-4",
        title: "Clase 4: Conversation Club and Critical Thinking",
        description: "Aplicación total del pensamiento analítico en debates guiados y aleatorios.",
        sections: [
          {
            id: "s1",
            title: "1. The Spark (Hook)",
            duration: "10 minutos",
            objective: "Juego de calentamiento rápido.",
            slides: [
              {
                id: "Diapositiva 1",
                title: "Rapid Fire Ideas",
                description: "Brain warm-up",
                content: ["I will give you a topic. You have 30 seconds to say 3 continuous sentences about it.", "Topics: Coffee, Aliens, Traffic, Monday mornings."],
                bgColor: "bg-gradient-to-br from-indigo-800 to-purple-900",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              }
            ],
            action: "Este es un ejercicio de agilidad mental. No importa si lo que dicen no tiene mucho sentido profundo, importa la velocidad y no detenerse."
          },
          {
            id: "s2",
            title: "2. Exploring Perspectives",
            duration: "15 minutos",
            objective: "Debatir el valor del éxito tradicional.",
            slides: [
              {
                id: "Diapositiva 2",
                title: "The Definition of Success",
                description: "Is it money?",
                content: ["Society tells us success means a high salary, a big house, and a fancy car.", "Do you agree with this definition?", "If not, what is your definition?"],
                bgColor: "bg-gradient-to-br from-purple-800 to-indigo-900"
              },
              {
                id: "Diapositiva 3",
                title: "Dilemma 4: The Lottery",
                description: "The Dream or the Nightmare?",
                content: ["If you won 100 million dollars tomorrow, what would be the WORST thing about it?", "Think critically about the negative consequences of wealth."],
                bgColor: "bg-gradient-to-br from-purple-800 to-indigo-900"
              }
            ],
            action: "Prohibir respuestas cliché. Exigirles que piensen en problemas reales (amigos falsos, pérdida de propósito, seguridad)."
          },
          {
            id: "s3",
            title: "3. Deep Dive (Article / Concept)",
            duration: "15 minutos",
            objective: "Analizar el sistema educativo.",
            slides: [
              {
                id: "Diapositiva 4",
                title: "The Broken School System",
                description: "Are we learning?",
                content: ["Schools were created in the industrial age to produce factory workers.", "Is the current school system preparing children for the future?", "Why or why not?"],
                bgColor: "bg-gradient-to-br from-gray-700 to-slate-900",
                imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: "Diapositiva 5",
                title: "Analyze",
                description: "Re-designing Education",
                content: ["If you were the Secretary of Education, what 3 classes would you completely REPLACE?", "What new classes would you add?"],
                bgColor: "bg-gradient-to-br from-gray-700 to-slate-900"
              }
            ],
            action: "Forzarlos a argumentar usando modales (should, must, have to) y condicionales (If I were in charge...)."
          },
          {
            id: "s4",
            title: "4. The Spotlight (Monologue)",
            duration: "15 minutos",
            objective: "La prueba final de fluidez C1/C2.",
            slides: [
              {
                id: "Diapositiva 6",
                title: "The Final Defense",
                description: "Your masterpiece",
                content: ["You have 3 minutes to present your final thoughts on:", "'What is the most important skill a human being can have in the 21st century?'", "Take 1 minute to prepare."],
                bgColor: "bg-gradient-to-br from-amber-600 to-yellow-800"
              }
            ],
            action: "Esta es la evaluación final del curso completo. Anota fortalezas, ritmo, uso de tiempos complejos (condicionales, perfectos, voz pasiva)."
          },
          {
            id: "s5",
            title: "5. Feedback & Polish",
            duration: "5 minutos",
            objective: "Graduación y feedback global.",
            slides: [
              {
                id: "Diapositiva 7",
                title: "You are a Master!",
                description: "Congratulations!",
                content: ["You have completed the entire English Journey.", "From greetings to critical debates.", "Keep listening, keep reading, keep speaking."],
                bgColor: "bg-gradient-to-br from-blue-700 to-cyan-800",
                imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              },
                {
                                id: "Diapositiva-Emoji-Auto-${classCount}",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Conversation Club and Critical Thinking" + ")",
                                type: 'emoji-game',
                                content: ['🤔 ➕ 💡 ➕ 🗣️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I don't know.", "I have an idea and communicate it.", "She is angry."],
                                correctOptionIndex: 1
                              },
                {
                                id: "Diapositiva-Video-Homework-45",
                                title: "Video Homework 📹",
                                description: "Watch this short video and listen carefully.",
                                type: 'video',
                                videoUrl: "https://www.youtube.com/embed/LAywO9NM7ws",
                                content: ["Identify at least 3 new phrases you understood from the video.", "Write them down for the next class."],
                                bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
                              }
            ],
            action: "Felicitar al alumno por su progreso desde el día 1. Darle un feebdack constructivo y cálido sobre su futuro con el idioma."
          }
        ]
      }
    ],
      oralEvaluation: [
            {
              "topic": "Technology & Ethics",
              "question": "What is your opinion on artificial intelligence and its impact on society?"
            },
            {
              "topic": "Society & Culture",
              "question": "How does social media affect modern culture and mental health?"
            },
            {
              "topic": "Mental & Physical Health",
              "question": "Discuss the importance of maintaining a balance between work and personal life."
            },
            {
              "topic": "Critical Thinking & Debate",
              "question": "Present an argument for or against remote work versus office work."
            }
          ],
      virtualEvaluation: [
            {
              "id": "v1",
              "type": "multiple-choice",
              "question": "The rapid ___ of technology affects all aspects of life.",
              "options": [
                "advance",
                "advancement",
                "advancing"
              ],
              "correctAnswer": "advancement"
            },
            {
              "id": "v2",
              "type": "multiple-choice",
              "question": "It's vital that we ___ the ethical implications.",
              "options": [
                "consider",
                "are considering",
                "have considered"
              ],
              "correctAnswer": "consider"
            },
            {
              "id": "v3",
              "type": "fill-in-the-blanks",
              "question": "The widespread ___ (use) of smartphones has changed communication.",
              "options": [],
              "correctAnswer": "usage"
            },
            {
              "id": "v4",
              "type": "listening",
              "question": "Analyze the argument.",
              "audioText": "While AI brings efficiency, we cannot overlook the potential for job displacement.",
              "options": [
                "Fully in favor of AI",
                "Balanced view acknowledging pros and cons",
                "Completely against AI"
              ],
              "correctAnswer": "Balanced view acknowledging pros and cons"
            },
            {
              "id": "v5",
              "type": "multiple-choice",
              "question": "We must strive to ___ a healthy work-life balance.",
              "options": [
                "maintain",
                "retain",
                "contain"
              ],
              "correctAnswer": "maintain"
            }
          ]
}
];
